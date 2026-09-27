# ELECTRON_GUIDE (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../guides/ELECTRON_GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/guides/ELECTRON_GUIDE.md) · 🇦🇿 [az](../../../az/docs/guides/ELECTRON_GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/guides/ELECTRON_GUIDE.md) · 🇧🇩 [bn](../../../bn/docs/guides/ELECTRON_GUIDE.md) · 🇨🇿 [cs](../../../cs/docs/guides/ELECTRON_GUIDE.md) · 🇩🇰 [da](../../../da/docs/guides/ELECTRON_GUIDE.md) · 🇩🇪 [de](../../../de/docs/guides/ELECTRON_GUIDE.md) · 🇪🇸 [es](../../../es/docs/guides/ELECTRON_GUIDE.md) · 🇮🇷 [fa](../../../fa/docs/guides/ELECTRON_GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/guides/ELECTRON_GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/guides/ELECTRON_GUIDE.md) · 🇮🇳 [gu](../../../gu/docs/guides/ELECTRON_GUIDE.md) · 🇮🇱 [he](../../../he/docs/guides/ELECTRON_GUIDE.md) · 🇮🇳 [hi](../../../hi/docs/guides/ELECTRON_GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/guides/ELECTRON_GUIDE.md) · 🇮🇩 [id](../../../id/docs/guides/ELECTRON_GUIDE.md) · 🇮🇩 [in](../../../in/docs/guides/ELECTRON_GUIDE.md) · 🇮🇹 [it](../../../it/docs/guides/ELECTRON_GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/guides/ELECTRON_GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/guides/ELECTRON_GUIDE.md) · 🇮🇳 [mr](../../../mr/docs/guides/ELECTRON_GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/guides/ELECTRON_GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/guides/ELECTRON_GUIDE.md) · 🇳🇴 [no](../../../no/docs/guides/ELECTRON_GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/guides/ELECTRON_GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/guides/ELECTRON_GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/guides/ELECTRON_GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/guides/ELECTRON_GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/guides/ELECTRON_GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/guides/ELECTRON_GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/guides/ELECTRON_GUIDE.md) · 🇰🇪 [sw](../../../sw/docs/guides/ELECTRON_GUIDE.md) · 🇮🇳 [ta](../../../ta/docs/guides/ELECTRON_GUIDE.md) · 🇮🇳 [te](../../../te/docs/guides/ELECTRON_GUIDE.md) · 🇹🇭 [th](../../../th/docs/guides/ELECTRON_GUIDE.md) · 🇹🇷 [tr](../../../tr/docs/guides/ELECTRON_GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/guides/ELECTRON_GUIDE.md) · 🇵🇰 [ur](../../../ur/docs/guides/ELECTRON_GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/guides/ELECTRON_GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/guides/ELECTRON_GUIDE.md)

---

---
title: "Руководство по настольному приложению Electron"
version: 3.8.2
lastUpdated: 2026-05-13
---

# Руководство по настольному приложению Electron

> **Источник истины:** рабочая область `electron/`
> **Последнее обновление:** 2026-05-13 — v3.8.0

OmniRoute поставляется с кроссплатформенным настольным приложением (Windows / macOS / Linux), построенным на основе **Electron 41** + **electron-builder 26.10**. Настольное приложение запускает автономный сервер Next.js в качестве дочернего процесса, направляет `BrowserWindow` на него, а также добавляет системный трей, автообновление, мост IPC и настройку секретов без конфигурации.

## Архитектура

```
┌──────────────────────────────────────────────┐
│ Основной процесс Electron (electron/main.js) │
│ ├─ Блокировка единственного экземпляра      │
│ ├─ Дочерний процесс: автономный сервер Next.js│
│ │   (запущен с Node runtime Electron)       │
│ ├─ BrowserWindow → http://localhost:PORT    │
│ ├─ Системный трей + контекстное меню        │
│ ├─ Автообновление через electron-updater   │
│ ├─ Политика безопасности контента (заголовки сессии) │
│ └─ Настройка секретов (JWT / API_KEY_SECRET)│
└──────────────────────────────────────────────┘
            ↕ IPC мост (electron/preload.js)
┌──────────────────────────────────────────────┐
│ Рендерер (Next.js панель управления)        │
│   window.electronAPI.* (contextIsolation)   │
└──────────────────────────────────────────────┘
```

## Версии

Подтверждено из `electron/package.json`:

| Пакет              | Версия                     |
| ------------------ | -------------------------- |
| `electron`         | `^41.5.1`                  |
| `electron-builder` | `^26.10.0`                 |
| `electron-updater` | `^6.8.5`                   |
| `better-sqlite3`   | `^12.9.0`                  |
| Версия приложения  | `3.8.0`                    |
| ID приложения      | `online.omniroute.desktop` |
| Название продукта  | `OmniRoute`                |

## Скрипты (корневой `package.json`)

| Скрипт                             | Назначение                                                                 |
| ---------------------------------- | -------------------------------------------------------------------------- |
| `npm run electron:dev`             | Запускает `npm run dev` + ожидает `localhost:20128` + запускает Electron   |
| `npm run electron:build`           | Собирает Next.js, затем запускает `electron-builder` для текущей ОС        |
| `npm run electron:build:win`       | Собирает установщик Windows NSIS + портативную версию (x64)               |
| `npm run electron:build:mac`       | Собирает macOS DMG (Intel + Apple Silicon)                                |
| `npm run electron:build:linux`     | Собирает Linux AppImage + DEB (x64 + arm64)                               |
| `npm run electron:smoke:packaged`  | Запускает упакованный бинарный файл и проверяет `/login` на HTTP 200, затем завершает работу |

Рабочая область `electron/` также предоставляет:

- `npm run prepare:bundle` — запускает `scripts/build/prepare-electron-standalone.mjs`
- `npm run build:mac-x64` / `build:mac-arm64` — сборки macOS для одного архитектурного типа
- `npm run pack` — сборка только для директорий для локального тестирования (без установщика)

## Directory Layout

```
electron/
├── package.json              # Зависимости Electron + конфигурация electron-builder
├── main.js                   # Основной процесс (24 КБ — см. аннотации ниже)
├── preload.js                # IPC-мост contextBridge
├── types.d.ts                # Типы AppInfo / ServerStatus / ElectronAPI
├── README.md                 # Заметки в рабочей области
├── assets/                   # icon.png, icon.ico, icon.icns, tray-icon.png
└── dist-electron/            # Выходные данные electron-builder (gitignored)

scripts/
├── build/
│   └── prepare-electron-standalone.mjs   # Создает пакет .next/electron-standalone
└── dev/
    └── smoke-electron-packaged.mjs       # Пост-сборка теста
```

Оба файла `main.js` и `preload.js` являются **CommonJS `.js` файлами**, а не TypeScript. Типизация для рендерера находится в `electron/types.d.ts`.

## IPC Bridge (`preload.js`)

Прелоад предоставляет белый список API на `window.electronAPI` с использованием `contextBridge` с `contextIsolation: true` и `nodeIntegration: false`.

```javascript
const VALID_CHANNELS = {
  invoke: [
    "get-app-info",
    "open-external",
    "get-data-dir",
    "restart-server",
    "check-for-updates",
    "download-update",
    "install-update",
    "get-app-version",
  ],
  send: ["window-minimize", "window-maximize", "window-close"],
  receive: ["server-status", "port-changed", "update-status"],
};
```

Предоставленные методы:

| Вызов рендерера                                                     | Тип                       |
| ----------------------------------------------------------------- | -------------------------- |
| `getAppInfo()` → `{ name, version, platform, isDev, port }`       | invoke                     |
| `openExternal(url)`                                               | invoke                     |
| `getDataDir()`                                                    | invoke                     |
| `restartServer()`                                                 | invoke                     |
| `getAppVersion()`                                                 | invoke                     |
| `checkForUpdates()` / `downloadUpdate()` / `installUpdate()`      | invoke                     |
| `minimizeWindow()` / `maximizeWindow()` / `closeWindow()`         | send                       |
| `onServerStatus(cb)` / `onPortChanged(cb)` / `onUpdateStatus(cb)` | receive (возвращает disposer) |

Помощники receive возвращают **функцию disposer** вместо использования `removeAllListeners` — это предотвращает накопление слушателей при повторной загрузке компонентов React.

## Server Lifecycle

`main.js` запускает пакет Next.js standalone напрямую с помощью среды выполнения Node Electron, чтобы избежать несоответствия ABI нативных модулей с системным Node:

```js
spawn(process.execPath, [serverScript], {
  cwd: NEXT_SERVER_PATH,
  env: { ...serverEnv, PORT, NODE_ENV: "production", ELECTRON_RUN_AS_NODE: "1", NODE_PATH },
  stdio: "pipe",
});
```

Основные моменты:

- `waitForServer()` опрашивает URL до 30 секунд перед показом окна (нет пустого экрана при холодном запуске).
- `stdio: "pipe"` захватывает stdout/stderr; фразы готовности (`Ready` / `listening`) отправляют `server-status: running` через IPC.
- `before-quit` ждет до 5 секунд для корректного завершения работы (WAL checkpoint), затем отправляет SIGKILL.
- Переключатель портов в трее (`20128`, `3000`, `8080`) останавливает и перезапускает сервер, затем перезагружает BrowserWindow.

## Zero-config Secret Bootstrap

При первом запуске основной процесс автоматически генерирует и сохраняет отсутствующие секреты:

| Секрет                   | Источник                                                                              |
| ------------------------ | ----------------------------------------------------------------------------------- |
| `JWT_SECRET`             | `crypto.randomBytes(64).toString("hex")`                                            |
| `STORAGE_ENCRYPTION_KEY` | `crypto.randomBytes(32).toString("hex")` (отказывается, если зашифрованные учетные данные уже существуют) |
| `API_KEY_SECRET`         | `crypto.randomBytes(32).toString("hex")`                                            |

Сохранено в `<DATA_DIR>/server.env`. `DATA_DIR` разрешается в:

- Windows: `%APPDATA%\omniroute`
- Linux: `$XDG_CONFIG_HOME/omniroute` или `~/.omniroute`
- macOS: `~/.omniroute`

## Окно и трей

- `BrowserWindow`: 1400×900 (мин. 1024×700), `backgroundColor: "#0a0a0a"`.
- macOS: `titleBarStyle: "hiddenInset"`, светофоры в позиции `{ x: 16, y: 16 }`.
- Windows/Linux: нативная панель заголовка.
- Кнопка закрытия сворачивает в трей; меню трея содержит **Open OmniRoute**, **Open Dashboard** (внешний браузер), подменю **Server Port**, **Check for Updates**, **Quit**.

## Политика безопасности контента

Устанавливается через `session.defaultSession.webRequest.onHeadersReceived`. Заметные директивы:

- `frame-ancestors 'none'`, `object-src 'none'`, `child-src 'none'`
- `connect-src 'self' http://localhost:* http://127.0.0.1:* ws://localhost:* ws://127.0.0.1:* https://*.omniroute.online https://*.omniroute.dev`
- В режиме разработки добавляется `'unsafe-eval'` только в `script-src`

## Автоматическое обновление

Использует `electron-updater` с провайдером GitHub (`diegosouzapw/OmniRoute`).

- `autoDownload = false`, `autoInstallOnAppQuit = true`
- События передаются в рендерер через IPC `update-status`:
  `checking`, `available`, `not-available`, `downloading` (с `percent`), `downloaded`, `error`
- `installUpdate()` завершает работу сервера, затем вызывает `autoUpdater.quitAndInstall()`
- Пропускается в режиме разработки (`!app.isPackaged`)

## Конвейер сборки

1. `npm run build` → Next.js standalone в `.next/standalone`.
2. `prepare-electron-standalone.mjs` → перемещает в `.next/electron-standalone` и переписывает абсолютные пути внутри `server.js` + `required-server-files.json`, чтобы бандл можно было перемещать.
3. `electron-builder` упаковывает `main.js`, `preload.js`, `node_modules`, и `extraResources: { ../.next/electron-standalone → app }`.

### Цели сборки

| ОС      | Цели                                   |
| ------- | ----------------------------------------- |
| Windows | Установщик NSIS + портативная версия (x64)           |
| macOS   | DMG (Intel + arm64, перетаскивание в Applications) |
| Linux   | AppImage + DEB (x64 + arm64)              |

Настройки NSIS: `oneClick: false`, позволяет пользователю выбрать директорию установки, создает ярлыки на Рабочем столе и в меню Пуск.

## Тестирование готовой сборки

```bash
npm run electron:smoke:packaged
```

`scripts/dev/smoke-electron-packaged.mjs`:

- Автоматически обнаруживает упакованный бинарный файл в `electron/dist-electron/` для текущей платформы.
- Запускает с изолированными директориями `HOME`/`APPDATA`/`XDG_*`, чтобы не трогать данные разработчика.
- Опрашивает `http://127.0.0.1:20128/login` на HTTP 200 в течение 45 секунд.
- Следит за stderr/stdout на наличие фатальных шаблонов (`Cannot find module`, `MODULE_NOT_FOUND`, `ERR_DLOPEN_FAILED`, `Failed to start server` и т.д.).
- Ждет 2 секунды стабильной работы после готовности, затем отправляет SIGTERM и ждет освобождения порта.
- В CI автоматически передает `--no-sandbox --disable-gpu` (и `--disable-dev-shm-usage` на Linux).

Переопределения окружения: `ELECTRON_SMOKE_APP_EXECUTABLE`, `ELECTRON_SMOKE_URL`, `ELECTRON_SMOKE_TIMEOUT_MS`, `ELECTRON_SMOKE_SETTLE_MS`, `ELECTRON_SMOKE_DATA_DIR`, `ELECTRON_SMOKE_KEEP_DATA`, `ELECTRON_SMOKE_STREAM_LOGS`.

## Подписание кода

`electron/package.json` **не** напрямую подключает учетные данные подписи. Передайте их через переменные окружения в `electron-builder`:

### macOS

```bash
export APPLE_ID=<email>
export APPLE_APP_SPECIFIC_PASSWORD=<password>
export APPLE_TEAM_ID=<id>
export CSC_LINK=path/to/cert.p12
export CSC_KEY_PASSWORD=<cert-password>
npm run electron:build:mac
```

### Windows

```bash
export CSC_LINK=path/to/cert.pfx
export CSC_KEY_PASSWORD=<cert-password>
npm run electron:build:win
```

### Linux

Подписание AppImage является необязательным — установите `LINUX_GPG_KEY`, если требуется подпись.

## Распространение

Артефакты попадают в `electron/dist-electron/`:

- `OmniRoute Setup X.Y.Z.exe`, `OmniRoute-X.Y.Z-portable.exe` (Windows)
- `OmniRoute-X.Y.Z-mac.dmg`, `OmniRoute-X.Y.Z-arm64-mac.dmg` (macOS)
- `OmniRoute-X.Y.Z.AppImage`, `omniroute-desktop_X.Y.Z_amd64.deb` (Linux)

Релизы публикуются в GitHub Releases (`diegosouzapw/OmniRoute`), где также `electron-updater` проверяет наличие новых версий.

## Устранение неполадок

| Симптом                                                         | Исправление                                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `Cannot find module 'better-sqlite3'` после обновления Electron | `cd electron && npm rebuild`                                                |
| `ERR_DLOPEN_FAILED` для нативного модуля                           | Повторно выполните `prepare:bundle` и убедитесь, что ABI совпадает с Node в Electron              |
| Окно отображается пустым на Linux                                   | Убедитесь, что сервер Next.js действительно привязан к PORT (проверьте логи `[Server]`)       |
| Зависание нотаризации macOS                                       | Убедитесь, что переменные `APPLE_*` экспортированы, а не только в `.env`                      |
| Предупреждение SmartScreen в Windows                                     | Подпишите с помощью EV-сертификата, или пользователи щелкнут правой кнопкой → "Выполнить в любом случае"                      |
| Smoke test завершается с ошибкой port-in-use                               | Остановите любой локальный сервер разработки на 20128 перед выполнением `electron:smoke:packaged` |

## Смотрите также

- [SETUP_GUIDE.md](./SETUP_GUIDE.md)
- [RELEASE_CHECKLIST.md](../ops/RELEASE_CHECKLIST.md)
- Источники: `electron/main.js`, `electron/preload.js`, `electron/package.json`
- Вспомогательные скрипты: `scripts/build/prepare-electron-standalone.mjs`, `scripts/dev/smoke-electron-packaged.mjs`
