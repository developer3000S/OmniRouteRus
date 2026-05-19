"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Card } from "@/shared/components";

interface ConfigField {
  type: "string" | "number" | "boolean" | "select";
  default?: unknown;
  min?: number;
  max?: number;
  enum?: string[];
  description?: string;
}

export default function PluginConfigPage() {
  const params = useParams();
  const name = params.name as string;

  const [config, setConfig] = useState<Record<string, unknown>>({});
  const [configSchema, setConfigSchema] = useState<Record<string, ConfigField>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const res = await fetch(`/api/plugins/${name}/config`);
        const data = await res.json();
        setConfig(data.config || {});
        setConfigSchema(data.configSchema || {});
      } catch (err: any) {
        setStatus({ type: "error", message: err.message });
      } finally {
        setLoading(false);
      }
    };
    fetchConfig();
  }, [name]);

  const handleSave = async () => {
    setSaving(true);
    setStatus(null);
    try {
      const res = await fetch(`/api/plugins/${name}/config`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ config }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Save failed");
      setStatus({ type: "success", message: "Configuration saved" });
    } catch (err: any) {
      setStatus({ type: "error", message: err.message });
    } finally {
      setSaving(false);
    }
  };

  const updateValue = (key: string, value: unknown) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  };

  if (loading) {
    return <div className="text-center py-8 text-gray-400">Loading config...</div>;
  }

  const schemaKeys = Object.keys(configSchema);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Plugin Config: {name}</h1>
        <p className="text-sm text-gray-400 mt-1">Configure plugin settings</p>
      </div>

      {status && (
        <div
          className={`p-3 rounded-lg text-sm ${
            status.type === "success"
              ? "bg-green-500/10 border border-green-500/30 text-green-400"
              : "bg-red-500/10 border border-red-500/30 text-red-400"
          }`}
        >
          {status.message}
        </div>
      )}

      {schemaKeys.length === 0 ? (
        <Card className="p-8 text-center">
          <div className="text-gray-400">This plugin has no configurable options.</div>
        </Card>
      ) : (
        <Card className="p-4 space-y-4">
          {schemaKeys.map((key) => {
            const field = configSchema[key];
            const value = config[key] ?? field.default ?? "";

            return (
              <div key={key} className="space-y-1">
                <label className="block text-sm font-medium text-gray-300">
                  {key}
                  {field.description && (
                    <span className="ml-2 text-xs text-gray-500">{field.description}</span>
                  )}
                </label>

                {field.type === "boolean" ? (
                  <button
                    onClick={() => updateValue(key, !value)}
                    className={`px-3 py-1.5 text-sm rounded ${
                      value
                        ? "bg-green-600/20 text-green-400 border border-green-600/30"
                        : "bg-gray-700 text-gray-400 border border-gray-600"
                    }`}
                  >
                    {value ? "Enabled" : "Disabled"}
                  </button>
                ) : field.type === "select" && field.enum ? (
                  <select
                    value={String(value)}
                    onChange={(e) => updateValue(key, e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                  >
                    {field.enum.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                ) : field.type === "number" ? (
                  <input
                    type="number"
                    value={Number(value)}
                    onChange={(e) => updateValue(key, Number(e.target.value))}
                    min={field.min}
                    max={field.max}
                    className="w-full px-3 py-2 text-sm bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                ) : (
                  <input
                    type="text"
                    value={String(value)}
                    onChange={(e) => updateValue(key, e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                )}
              </div>
            );
          })}

          <div className="pt-2">
            <button
              onClick={handleSave}
              disabled={saving}
              className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-500 rounded-lg disabled:opacity-50"
            >
              {saving ? "Saving..." : "Save Configuration"}
            </button>
          </div>
        </Card>
      )}
    </div>
  );
}
