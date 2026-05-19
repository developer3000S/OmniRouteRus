import { describe, it, beforeEach } from "node:test";
import assert from "node:assert/strict";
import {
  registerHook,
  unregisterHook,
  unregisterHooks,
  emitHook,
  getHooks,
  getActiveEvents,
  resetHooks,
} from "../../../src/lib/plugins/hooks";

describe("Plugin Hooks Registry", () => {
  beforeEach(() => {
    resetHooks();
  });

  describe("registerHook", () => {
    it("registers a handler for an event", () => {
      const handler = () => {};
      registerHook("onRequest", "test-plugin", handler);
      const hooks = getHooks("onRequest");
      assert.equal(hooks.length, 1);
      assert.equal(hooks[0].pluginName, "test-plugin");
      assert.equal(hooks[0].handler, handler);
    });

    it("registers multiple handlers sorted by priority", () => {
      registerHook("onRequest", "plugin-b", () => {}, 200);
      registerHook("onRequest", "plugin-a", () => {}, 100);
      const hooks = getHooks("onRequest");
      assert.equal(hooks.length, 2);
      assert.equal(hooks[0].pluginName, "plugin-a");
      assert.equal(hooks[1].pluginName, "plugin-b");
    });

    it("prevents duplicate registration", () => {
      const handler = () => {};
      registerHook("onRequest", "test-plugin", handler);
      registerHook("onRequest", "test-plugin", handler);
      assert.equal(getHooks("onRequest").length, 1);
    });
  });

  describe("unregisterHooks", () => {
    it("removes all handlers for a plugin", () => {
      registerHook("onRequest", "test-plugin", () => {});
      registerHook("onResponse", "test-plugin", () => {});
      registerHook("onRequest", "other-plugin", () => {});

      unregisterHooks("test-plugin");

      assert.equal(getHooks("onRequest").length, 1);
      assert.equal(getHooks("onRequest")[0].pluginName, "other-plugin");
      assert.equal(getHooks("onResponse").length, 0);
    });
  });

  describe("unregisterHook", () => {
    it("removes handler for specific event", () => {
      registerHook("onRequest", "test-plugin", () => {});
      registerHook("onResponse", "test-plugin", () => {});

      unregisterHook("onRequest", "test-plugin");

      assert.equal(getHooks("onRequest").length, 0);
      assert.equal(getHooks("onResponse").length, 1);
    });
  });

  describe("emitHook", () => {
    it("fires all handlers for an event", async () => {
      const calls: string[] = [];
      registerHook("onRequest", "plugin-a", () => {
        calls.push("a");
      });
      registerHook("onRequest", "plugin-b", () => {
        calls.push("b");
      });

      await emitHook("onRequest", {});
      assert.deepEqual(calls, ["a", "b"]);
    });

    it("passes payload to handlers", async () => {
      let received: unknown = null;
      registerHook("onRequest", "test-plugin", (payload) => {
        received = payload;
      });

      const payload = { model: "gpt-4", provider: "openai" };
      await emitHook("onRequest", payload);
      assert.deepEqual(received, payload);
    });

    it("handler error does not block other handlers", async () => {
      const calls: string[] = [];
      registerHook("onRequest", "plugin-a", () => {
        throw new Error("fail");
      });
      registerHook("onRequest", "plugin-b", () => {
        calls.push("b");
      });

      await emitHook("onRequest", {});
      assert.deepEqual(calls, ["b"]);
    });

    it("async handlers work", async () => {
      const calls: string[] = [];
      registerHook("onRequest", "test-plugin", async () => {
        await new Promise((r) => setTimeout(r, 10));
        calls.push("async");
      });

      await emitHook("onRequest", {});
      assert.deepEqual(calls, ["async"]);
    });

    it("does nothing for events with no handlers", async () => {
      await emitHook("nonexistent", {}); // should not throw
    });
  });

  describe("getActiveEvents", () => {
    it("returns events with registered handlers", () => {
      registerHook("onRequest", "plugin-a", () => {});
      registerHook("onError", "plugin-b", () => {});

      const events = getActiveEvents();
      assert.ok(events.includes("onRequest"));
      assert.ok(events.includes("onError"));
      assert.equal(events.length, 2);
    });

    it("returns empty array when no hooks registered", () => {
      assert.deepEqual(getActiveEvents(), []);
    });
  });

  describe("resetHooks", () => {
    it("clears all hooks", () => {
      registerHook("onRequest", "plugin-a", () => {});
      registerHook("onError", "plugin-b", () => {});

      resetHooks();

      assert.deepEqual(getActiveEvents(), []);
      assert.deepEqual(getHooks("onRequest"), []);
    });
  });
});
