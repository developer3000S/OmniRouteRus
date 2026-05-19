"use client";

import { useState, useEffect } from "react";
import { Card } from "@/shared/components";

interface Plugin {
  id: string;
  name: string;
  version: string;
  description: string | null;
  author: string | null;
  status: "installed" | "active" | "inactive" | "error";
  enabled: boolean;
  hooks: string[];
  permissions: string[];
  installedAt: string;
  updatedAt: string;
  activatedAt: string | null;
}

export default function PluginsPage() {
  const [plugins, setPlugins] = useState<Plugin[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [scanning, setScanning] = useState(false);
  const [installPath, setInstallPath] = useState("");
  const [installing, setInstalling] = useState(false);
  const [actionStatus, setActionStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const fetchPlugins = async () => {
    try {
      const res = await fetch("/api/plugins");
      const data = await res.json();
      setPlugins(data.plugins || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlugins();
  }, []);

  const handleScan = async () => {
    setScanning(true);
    setActionStatus(null);
    try {
      const res = await fetch("/api/plugins/scan", { method: "POST" });
      const data = await res.json();
      setActionStatus({
        type: "success",
        message: `Scan complete: ${data.discovered} plugins discovered${data.errors?.length ? `, ${data.errors.length} errors` : ""}`,
      });
      await fetchPlugins();
    } catch (err: any) {
      setActionStatus({ type: "error", message: err.message });
    } finally {
      setScanning(false);
    }
  };

  const handleInstall = async () => {
    if (!installPath.trim()) return;
    setInstalling(true);
    setActionStatus(null);
    try {
      const res = await fetch("/api/plugins", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ path: installPath }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Install failed");
      setActionStatus({ type: "success", message: `Plugin '${data.plugin.name}' installed` });
      setInstallPath("");
      await fetchPlugins();
    } catch (err: any) {
      setActionStatus({ type: "error", message: err.message });
    } finally {
      setInstalling(false);
    }
  };

  const handleActivate = async (name: string) => {
    setActionStatus(null);
    try {
      const res = await fetch(`/api/plugins/${name}/activate`, { method: "POST" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Activate failed");
      setActionStatus({ type: "success", message: `Plugin '${name}' activated` });
      await fetchPlugins();
    } catch (err: any) {
      setActionStatus({ type: "error", message: err.message });
    }
  };

  const handleDeactivate = async (name: string) => {
    setActionStatus(null);
    try {
      const res = await fetch(`/api/plugins/${name}/deactivate`, { method: "POST" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Deactivate failed");
      setActionStatus({ type: "success", message: `Plugin '${name}' deactivated` });
      await fetchPlugins();
    } catch (err: any) {
      setActionStatus({ type: "error", message: err.message });
    }
  };

  const handleUninstall = async (name: string) => {
    if (!confirm(`Uninstall plugin '${name}'? This cannot be undone.`)) return;
    setActionStatus(null);
    try {
      const res = await fetch(`/api/plugins/${name}`, { method: "DELETE" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Uninstall failed");
      setActionStatus({ type: "success", message: `Plugin '${name}' uninstalled` });
      await fetchPlugins();
    } catch (err: any) {
      setActionStatus({ type: "error", message: err.message });
    }
  };

  const statusBadge = (status: Plugin["status"]) => {
    const colors: Record<string, string> = {
      active: "bg-green-500/20 text-green-400 border-green-500/30",
      inactive: "bg-gray-500/20 text-gray-400 border-gray-500/30",
      installed: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      error: "bg-red-500/20 text-red-400 border-red-500/30",
    };
    return (
      <span
        className={`px-2 py-0.5 text-xs rounded-full border ${colors[status] || colors.installed}`}
      >
        {status}
      </span>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Plugins</h1>
          <p className="text-sm text-gray-400 mt-1">Manage WordPress-style plugins for OmniRoute</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleScan}
            disabled={scanning}
            className="px-4 py-2 text-sm bg-gray-700 hover:bg-gray-600 rounded-lg disabled:opacity-50"
          >
            {scanning ? "Scanning..." : "Scan Directory"}
          </button>
        </div>
      </div>

      {actionStatus && (
        <div
          className={`p-3 rounded-lg text-sm ${
            actionStatus.type === "success"
              ? "bg-green-500/10 border border-green-500/30 text-green-400"
              : "bg-red-500/10 border border-red-500/30 text-red-400"
          }`}
        >
          {actionStatus.message}
        </div>
      )}

      {/* Install from path */}
      <Card className="p-4">
        <h2 className="text-sm font-semibold mb-3">Install Plugin</h2>
        <div className="flex gap-2">
          <input
            type="text"
            value={installPath}
            onChange={(e) => setInstallPath(e.target.value)}
            placeholder="/path/to/plugin/directory"
            className="flex-1 px-3 py-2 text-sm bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleInstall}
            disabled={installing || !installPath.trim()}
            className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-500 rounded-lg disabled:opacity-50"
          >
            {installing ? "Installing..." : "Install"}
          </button>
        </div>
      </Card>

      {/* Plugin list */}
      {loading ? (
        <div className="text-center py-8 text-gray-400">Loading plugins...</div>
      ) : error ? (
        <div className="text-center py-8 text-red-400">{error}</div>
      ) : plugins.length === 0 ? (
        <Card className="p-8 text-center">
          <div className="text-gray-400 mb-2">No plugins installed</div>
          <div className="text-sm text-gray-500">
            Install a plugin from a local directory or scan for new plugins.
          </div>
        </Card>
      ) : (
        <div className="grid gap-4">
          {plugins.map((plugin) => (
            <Card key={plugin.id} className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold">{plugin.name}</h3>
                    <span className="text-xs text-gray-500">v{plugin.version}</span>
                    {statusBadge(plugin.status)}
                  </div>
                  {plugin.description && (
                    <p className="text-sm text-gray-400 mb-2">{plugin.description}</p>
                  )}
                  <div className="flex flex-wrap gap-1 mb-2">
                    {plugin.hooks.map((hook) => (
                      <span
                        key={hook}
                        className="px-1.5 py-0.5 text-xs bg-purple-500/20 text-purple-400 rounded border border-purple-500/30"
                      >
                        {hook}
                      </span>
                    ))}
                    {plugin.permissions.map((perm) => (
                      <span
                        key={perm}
                        className="px-1.5 py-0.5 text-xs bg-yellow-500/20 text-yellow-400 rounded border border-yellow-500/30"
                      >
                        {perm}
                      </span>
                    ))}
                  </div>
                  {plugin.author && <div className="text-xs text-gray-500">by {plugin.author}</div>}
                </div>
                <div className="flex gap-2 ml-4">
                  {plugin.status === "active" ? (
                    <button
                      onClick={() => handleDeactivate(plugin.name)}
                      className="px-3 py-1.5 text-xs bg-yellow-600/20 text-yellow-400 border border-yellow-600/30 rounded hover:bg-yellow-600/30"
                    >
                      Deactivate
                    </button>
                  ) : (
                    <button
                      onClick={() => handleActivate(plugin.name)}
                      className="px-3 py-1.5 text-xs bg-green-600/20 text-green-400 border border-green-600/30 rounded hover:bg-green-600/30"
                    >
                      Activate
                    </button>
                  )}
                  <button
                    onClick={() => handleUninstall(plugin.name)}
                    className="px-3 py-1.5 text-xs bg-red-600/20 text-red-400 border border-red-600/30 rounded hover:bg-red-600/30"
                  >
                    Uninstall
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
