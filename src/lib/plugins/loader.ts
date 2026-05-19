/**
 * Plugin loader — loads plugins in isolated child processes.
 *
 * Uses child_process.fork() for process-level isolation. Each plugin
 * runs in a separate Node.js process with restricted environment.
 * Complies with Rule 3 (no eval/new Function/implied eval).
 *
 * @module plugins/loader
 */

import { fork } from "child_process";
import { writeFile, rm } from "fs/promises";
import { join } from "path";
import { tmpdir } from "os";
import { randomUUID } from "crypto";
import { logger } from "../../../open-sse/utils/logger.ts";
import type { PluginManifestWithDefaults, Permission } from "./manifest";
import type { Plugin, PluginContext, PluginResult } from "./index";

const log = logger("PLUGIN_LOADER");

export interface LoadedPlugin {
  name: string;
  manifest: PluginManifestWithDefaults;
  plugin: Plugin;
  cleanup: () => void;
}

// ── Plugin host script (runs in child process) ──

const PLUGIN_HOST_SCRIPT = `
const { parentPort } = require("worker_threads");
const path = require("path");

// Load the plugin module
const pluginPath = process.argv[2];
const plugin = require(pluginPath);
const exports = plugin.default || plugin;

// Send ready signal
parentPort.postMessage({ type: "ready", hooks: Object.keys(exports).filter(k => typeof exports[k] === "function") });

// Handle messages from parent
parentPort.on("message", async (msg) => {
  if (msg.type === "call") {
    try {
      const handler = exports[msg.hook];
      if (typeof handler !== "function") {
        parentPort.postMessage({ type: "result", id: msg.id, error: "Hook not found" });
        return;
      }
      const result = await handler(msg.payload);
      parentPort.postMessage({ type: "result", id: msg.id, result });
    } catch (err) {
      parentPort.postMessage({ type: "result", id: msg.id, error: err.message });
    }
  }
});
`;

/**
 * Load a plugin in an isolated child process.
 * Returns the plugin interface with hooks that communicate via IPC.
 */
export async function loadPlugin(
  entryPoint: string,
  manifest: PluginManifestWithDefaults
): Promise<LoadedPlugin> {
  const permissions = manifest.requires.permissions;
  const hostId = randomUUID();
  const hostScriptPath = join(tmpdir(), `omniroute-plugin-host-${hostId}.js`);

  // Write host script to temp file
  await writeFile(hostScriptPath, PLUGIN_HOST_SCRIPT, "utf-8");

  // Build restricted environment for child process
  const env: Record<string, string> = {
    ...getFilteredEnv(permissions),
    PLUGIN_ENTRY: entryPoint,
    PLUGIN_NAME: manifest.name,
  };

  // Fork child process with restricted args
  const child = fork(hostScriptPath, [entryPoint], {
    env,
    stdio: ["pipe", "pipe", "pipe", "ipc"],
    execArgv: ["--no-warnings"],
  });

  // Track pending calls
  const pendingCalls: Map<string, { resolve: Function; reject: Function }> = new Map();
  let callCounter = 0;

  // Handle IPC messages
  child.on("message", (msg: any) => {
    if (msg.type === "ready") {
      log.info("loader.process_ready", { name: manifest.name, hooks: msg.hooks });
    } else if (msg.type === "result") {
      const pending = pendingCalls.get(msg.id);
      if (pending) {
        pendingCalls.delete(msg.id);
        if (msg.error) {
          pending.reject(new Error(msg.error));
        } else {
          pending.resolve(msg.result);
        }
      }
    }
  });

  child.on("error", (err) => {
    log.error("loader.process_error", { name: manifest.name, error: err.message });
  });

  child.on("exit", (code) => {
    log.info("loader.process_exit", { name: manifest.name, code });
    // Reject all pending calls
    for (const [, pending] of pendingCalls) {
      pending.reject(new Error(`Plugin process exited with code ${code}`));
    }
    pendingCalls.clear();
    // Cleanup temp file
    rm(hostScriptPath, { force: true }).catch(() => {});
  });

  // Helper to call a hook in the child process
  const callHook = (hook: string, payload: unknown): Promise<unknown> => {
    return new Promise((resolve, reject) => {
      const id = String(++callCounter);
      pendingCalls.set(id, { resolve, reject });
      child.send({ type: "call", id, hook, payload });
    });
  };

  // Build Plugin interface
  const hooks: string[] = [];
  const plugin: Plugin = {
    name: manifest.name,
    priority: 100,
    enabled: true,
  };

  // Create hook wrappers
  plugin.onRequest = async (ctx: PluginContext): Promise<PluginResult | void> => {
    try {
      const result = await callHook("onRequest", ctx);
      return result as PluginResult | void;
    } catch (err: any) {
      log.error("plugin.onRequest_error", { name: manifest.name, error: err.message });
    }
  };
  hooks.push("onRequest");

  plugin.onResponse = async (ctx: PluginContext, response: unknown): Promise<unknown | void> => {
    try {
      return await callHook("onResponse", { ctx, response });
    } catch (err: any) {
      log.error("plugin.onResponse_error", { name: manifest.name, error: err.message });
    }
  };
  hooks.push("onResponse");

  plugin.onError = async (ctx: PluginContext, error: Error): Promise<unknown | void> => {
    try {
      return await callHook("onError", { ctx, error: error.message });
    } catch (err: any) {
      log.error("plugin.onError_error", { name: manifest.name, error: err.message });
    }
  };
  hooks.push("onError");

  log.info("loader.loaded", { name: manifest.name, hooks, pid: child.pid });

  const cleanup = () => {
    child.kill();
    rm(hostScriptPath, { force: true }).catch(() => {});
    log.info("loader.cleanup", { name: manifest.name });
  };

  return { name: manifest.name, manifest, plugin, cleanup };
}

/**
 * Filter environment variables based on permissions.
 * Only pass safe env vars unless "env" permission is granted.
 */
function getFilteredEnv(permissions: Permission[]): Record<string, string> {
  const safeKeys = ["PATH", "HOME", "USER", "LANG", "LC_ALL", "NODE_ENV"];
  const env: Record<string, string> = {};

  for (const key of safeKeys) {
    if (process.env[key]) {
      env[key] = process.env[key]!;
    }
  }

  if (permissions.includes("env")) {
    // Pass all env vars
    for (const [key, value] of Object.entries(process.env)) {
      if (value !== undefined && !safeKeys.includes(key)) {
        env[key] = value;
      }
    }
  }

  return env;
}
