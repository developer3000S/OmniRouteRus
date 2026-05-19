import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  validateManifest,
  safeValidateManifest,
  applyDefaults,
  PluginManifestSchema,
} from "../../../src/lib/plugins/manifest";

describe("Plugin Manifest Validator", () => {
  describe("validateManifest", () => {
    it("accepts valid minimal manifest", () => {
      const result = validateManifest({
        name: "my-plugin",
        version: "1.0.0",
      });
      assert.equal(result.name, "my-plugin");
      assert.equal(result.version, "1.0.0");
      assert.equal(result.license, "MIT");
      assert.equal(result.main, "index.js");
      assert.equal(result.source, "local");
      assert.deepEqual(result.tags, []);
      assert.deepEqual(result.hooks, { onRequest: false, onResponse: false, onError: false });
      assert.deepEqual(result.requires.permissions, []);
      assert.equal(result.enabledByDefault, false);
    });

    it("accepts full manifest", () => {
      const result = validateManifest({
        name: "full-plugin",
        version: "2.1.0",
        description: "A full plugin",
        author: "Test Author",
        license: "Apache-2.0",
        main: "plugin.js",
        source: "marketplace",
        tags: ["analytics", "monitoring"],
        requires: { omniroute: ">=3.7.0", permissions: ["network", "file-read"] },
        hooks: { onRequest: true, onResponse: true, onError: false },
        skills: [{ name: "my_skill", description: "Does something" }],
        enabledByDefault: true,
        configSchema: {
          apiKey: { type: "string", description: "API key" },
          maxRetries: { type: "number", default: 3, min: 1, max: 10 },
        },
      });
      assert.equal(result.name, "full-plugin");
      assert.equal(result.author, "Test Author");
      assert.equal(result.hooks.onRequest, true);
      assert.equal(result.hooks.onResponse, true);
      assert.equal(result.hooks.onError, false);
      assert.deepEqual(result.requires.permissions, ["network", "file-read"]);
      assert.equal(result.enabledByDefault, true);
    });

    it("rejects missing name", () => {
      assert.throws(() => validateManifest({ version: "1.0.0" }));
    });

    it("rejects missing version", () => {
      assert.throws(() => validateManifest({ name: "test" }));
    });

    it("rejects non-kebab-case name", () => {
      assert.throws(() => validateManifest({ name: "My Plugin", version: "1.0.0" }));
      assert.throws(() => validateManifest({ name: "my_plugin", version: "1.0.0" }));
      assert.throws(() => validateManifest({ name: "MyPlugin", version: "1.0.0" }));
    });

    it("rejects invalid version format", () => {
      assert.throws(() => validateManifest({ name: "test", version: "1.0" }));
      assert.throws(() => validateManifest({ name: "test", version: "v1.0.0" }));
      assert.throws(() => validateManifest({ name: "test", version: "latest" }));
    });

    it("rejects invalid permission", () => {
      assert.throws(() =>
        validateManifest({
          name: "test",
          version: "1.0.0",
          requires: { permissions: ["invalid-perm"] },
        })
      );
    });

    it("rejects invalid source", () => {
      assert.throws(() => validateManifest({ name: "test", version: "1.0.0", source: "invalid" }));
    });

    it("rejects invalid hook type", () => {
      assert.throws(() =>
        validateManifest({
          name: "test",
          version: "1.0.0",
          hooks: { onRequest: "yes" },
        })
      );
    });
  });

  describe("safeValidateManifest", () => {
    it("returns success for valid manifest", () => {
      const result = safeValidateManifest({ name: "test", version: "1.0.0" });
      assert.equal(result.success, true);
      if (result.success) {
        assert.equal(result.data.name, "test");
      }
    });

    it("returns errors for invalid manifest", () => {
      const result = safeValidateManifest({ name: "Invalid Name", version: "1.0.0" });
      assert.equal(result.success, false);
      if (!result.success) {
        assert.ok(result.errors.length > 0);
        assert.ok(result.errors[0].includes("kebab-case"));
      }
    });

    it("returns errors for missing fields", () => {
      const result = safeValidateManifest({});
      assert.equal(result.success, false);
      if (!result.success) {
        assert.ok(result.errors.length >= 2); // name + version
      }
    });
  });

  describe("applyDefaults", () => {
    it("applies all defaults to minimal manifest", () => {
      const parsed = PluginManifestSchema.parse({ name: "test", version: "1.0.0" });
      const result = applyDefaults(parsed);
      assert.equal(result.license, "MIT");
      assert.equal(result.main, "index.js");
      assert.equal(result.source, "local");
      assert.deepEqual(result.tags, []);
      assert.deepEqual(result.requires.permissions, []);
      assert.deepEqual(result.hooks, { onRequest: false, onResponse: false, onError: false });
      assert.deepEqual(result.skills, []);
      assert.equal(result.enabledByDefault, false);
      assert.deepEqual(result.configSchema, {});
    });

    it("preserves explicit values", () => {
      const parsed = PluginManifestSchema.parse({
        name: "test",
        version: "1.0.0",
        license: "GPL-3.0",
        main: "entry.js",
        source: "marketplace",
        tags: ["ai"],
        hooks: { onRequest: true },
        enabledByDefault: true,
      });
      const result = applyDefaults(parsed);
      assert.equal(result.license, "GPL-3.0");
      assert.equal(result.main, "entry.js");
      assert.equal(result.source, "marketplace");
      assert.deepEqual(result.tags, ["ai"]);
      assert.equal(result.hooks.onRequest, true);
      assert.equal(result.hooks.onResponse, false);
      assert.equal(result.enabledByDefault, true);
    });
  });
});
