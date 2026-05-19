import { describe, it, after } from "node:test";
import assert from "node:assert/strict";
import {
  insertPlugin,
  getPluginById,
  getPluginByName,
  listPlugins,
  updatePluginStatus,
  updatePluginConfig,
  deletePlugin,
  pluginExists,
} from "../../../src/lib/db/plugins";

// These tests require a running DB instance
// Run with: node --import tsx/esm --test tests/unit/plugins/db.test.ts

describe("Plugin DB Module", () => {
  const testName = `test-plugin-${Date.now()}`;

  after(() => {
    // Cleanup test plugins
    try {
      deletePlugin(testName);
    } catch {}
    try {
      deletePlugin(`${testName}-2`);
    } catch {}
  });

  describe("insertPlugin", () => {
    it("creates a plugin row", () => {
      const row = insertPlugin({
        id: `test-${Date.now()}`,
        name: testName,
        version: "1.0.0",
        description: "Test plugin",
        author: "Test",
        main: "index.js",
        manifest: { name: testName, version: "1.0.0" },
        pluginDir: `/tmp/plugins/${testName}`,
      });

      assert.equal(row.name, testName);
      assert.equal(row.version, "1.0.0");
      assert.equal(row.status, "installed");
      assert.equal(row.enabled, 0);
    });
  });

  describe("getPluginByName", () => {
    it("returns plugin by name", () => {
      const row = getPluginByName(testName);
      assert.ok(row);
      assert.equal(row!.name, testName);
    });

    it("returns null for non-existent plugin", () => {
      const row = getPluginByName("non-existent-plugin");
      assert.equal(row, null);
    });
  });

  describe("getPluginById", () => {
    it("returns plugin by id", () => {
      const all = listPlugins();
      const plugin = all.find((p) => p.name === testName);
      assert.ok(plugin);

      const row = getPluginById(plugin!.id);
      assert.ok(row);
      assert.equal(row!.name, testName);
    });
  });

  describe("listPlugins", () => {
    it("returns all plugins", () => {
      const all = listPlugins();
      assert.ok(all.length > 0);
      assert.ok(all.some((p) => p.name === testName));
    });

    it("filters by status", () => {
      const installed = listPlugins("installed");
      assert.ok(installed.every((p) => p.status === "installed"));
    });
  });

  describe("updatePluginStatus", () => {
    it("updates status to active", () => {
      const result = updatePluginStatus(testName, "active");
      assert.equal(result, true);

      const row = getPluginByName(testName);
      assert.equal(row!.status, "active");
      assert.equal(row!.enabled, 1);
      assert.ok(row!.activatedAt);
    });

    it("updates status to error with message", () => {
      updatePluginStatus(testName, "error", "Something broke");
      const row = getPluginByName(testName);
      assert.equal(row!.status, "error");
      assert.equal(row!.errorMessage, "Something broke");
    });

    it("returns false for non-existent plugin", () => {
      const result = updatePluginStatus("non-existent", "active");
      assert.equal(result, false);
    });
  });

  describe("updatePluginConfig", () => {
    it("updates plugin config", () => {
      const result = updatePluginConfig(testName, { apiKey: "test-key", maxRetries: 5 });
      assert.equal(result, true);

      const row = getPluginByName(testName);
      const config = JSON.parse(row!.config);
      assert.equal(config.apiKey, "test-key");
      assert.equal(config.maxRetries, 5);
    });
  });

  describe("pluginExists", () => {
    it("returns true for existing plugin", () => {
      assert.equal(pluginExists(testName), true);
    });

    it("returns false for non-existent plugin", () => {
      assert.equal(pluginExists("non-existent"), false);
    });
  });

  describe("deletePlugin", () => {
    it("deletes a plugin", () => {
      const result = deletePlugin(testName);
      assert.equal(result, true);
      assert.equal(pluginExists(testName), false);
    });

    it("returns false for non-existent plugin", () => {
      const result = deletePlugin("non-existent");
      assert.equal(result, false);
    });
  });
});
