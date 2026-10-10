# OmniRoute Electron Desktop App

Этот каталог содержит оболочку для настольного приложения Electron для OmniRoute.

## Архитектура (v1.6.4)

```
electron/
├── main.js          # Основной процесс — окно, трей, жизненный цикл сервера, CSP, IPC
├── preload.js       # Прелоад скрипт — безопасный IPC мост с шаблоном disposer
├── package.json     # Зависимости Electron & конфигурация electron-builder
├── types.d.ts       # Определения TypeScript (AppInfo, ServerStatus, ElectronAPI)
└── assets/          # Иконки приложения и ресурсы

src/shared/hooks/
└── useElectron.ts   # React хуки — useSyncExternalStore, нулевых ре-рендеров
```

## Ключевые архитектурные решения

| Решение                              | Обоснование                                                                                          |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| `waitForServer()` polling            | Предотвращает пустой экран при холодном запуске — опрашивает `http://localhost:PORT` перед загрузкой |
| `stdio: 'pipe'`                      | Захватывает stdout/stderr сервера для логирования + обнаружения готовности (не `inherit`)            |
| Шаблон disposer                      | `onServerStatus()` возвращает `() => void` для точного удаления слушателей (не `removeAllListeners`) |
| `useSyncExternalStore`               | Нулевых ре-рендеров для `useIsElectron()` — нет `useState` + `useEffect` цикла                       |
| CSP через заголовки сессии           | `Content-Security-Policy` ограничивает `script-src`, `connect-src` и т.д. по рекомендациям Electron  |
| Платформо-зависимая панель заголовка | `titleBarStyle: 'hiddenInset'` только на macOS; `default` на Windows/Linux                           |

## Разработка

### Предварительные требования

1. Сначала соберите приложение Next.js:

```bash
npm run build
```

2. Установите зависимости Electron:

```bash
cd electron
npm install
```

### Запуск в режиме разработки

1. Запустите сервер разработки Next.js:

```bash
npm run dev
```

2. В другом терминале запустите Electron:

```bash
cd electron
npm run dev
```

### Запуск в производственном режиме

1. Соберите Next.js в standalone режиме:

```bash
npm run build
```

2. Запустите Electron:

```bash
cd electron
npm start
```

## Сборка

### Сборка для текущей платформы

```bash
cd electron
npm run build
```

### Сборка для конкретных платформ

```bash
# Windows
npm run build:win

# macOS (x64 + arm64)
npm run build:mac

# Linux
npm run build:linux
```

## Выход

Собранные приложения помещаются в `dist-electron/`:

- Windows: Установщик `.exe` (NSIS) + переносимый `.exe`
- macOS: Установщик `.dmg` (Intel + Apple Silicon)
- Linux: `.AppImage`

## Установка

### macOS

1. Скачайте последний `.dmg` с [страницы релизов](https://github.com/diegosouzapw/OmniRoute/releases).
2. Откройте файл `.dmg`.
3. Перетащите `OmniRoute.app` в папку Applications.
4. Запустите из Applications.

> ⚠️ **Примечание:** Приложение пока не подписано сертификатом Apple Developer. Если macOS блокирует приложение, выполните:
>
> ```bash
> xattr -cr /Applications/OmniRoute.app
> ```
>
> Или щелкните правой кнопкой по приложению → Открыть → Открыть (чтобы обойти Gatekeeper при первом запуске).

### Windows

**Установщик (Рекомендуется):**

1. Скачайте `OmniRoute.Setup.*.exe` с [страницы релизов](https://github.com/diegosouzapw/OmniRoute/releases).
2. Запустите установщик.
3. Запустите из меню "Пуск" или ярлыка на рабочем столе.

**Портативная версия (Без установки):**

1. Скачайте `OmniRoute.exe` с [страницы релизов](https://github.com/diegosouzapw/OmniRoute/releases).
2. Запустите напрямую из любой папки.

### Linux

1. Скачайте `.AppImage` с [страницы релизов](https://github.com/diegosouzapw/OmniRoute/releases).
2. Сделайте его исполняемым:
   ```bash
   chmod +x OmniRoute-*.AppImage
   ```
3. Запустите:
   ```bash
   ./OmniRoute-*.AppImage
   ```

## Возможности

- **Готовность сервера** — Ожидает проверки состояния перед отображением окна
- **Системный трей** — Сворачивание в трей с быстрыми действиями (открыть, изменить порт, выйти)
- **Управление портами** — Изменение порта из меню трея (сервер перезапускается автоматически)
- **Элементы управления окном** — Пользовательские минимизация, максимизация, закрытие через IPC
- **Политика безопасности контента** — Ограничивающая CSP через заголовки сессии
- **Поддержка офлайн-режима** — Встроенный автономный сервер Next.js
- **Единственный экземпляр** — Может работать только один экземпляр приложения за раз

## Конфигурация

### Переменные окружения

| Переменная            | По умолчанию | Описание                                       |
| --------------------- | ------------ | ---------------------------------------------- |
| `OMNIROUTE_PORT`      | `20128`      | Порт сервера                                   |
| `OMNIROUTE_MEMORY_MB` | `512`        | Ограничение кучи Node.js (64–16384 MB)         |
| `NODE_ENV`            | `production` | Установите `development` для режима разработки |

### Пользовательская иконка

Поместите свои иконки в `assets/`:

- `icon.ico` — Иконка Windows (256×256)
- `icon.icns` — Иконка macOS
- `icon.png` — Иконка Linux/общего назначения (512×512)
- `tray-icon.png` — Иконка системного трея (16×16 или 32×32)

## IPC Каналы

### Вызов (Renderer → Main, асинхронный)

| Канал            | Возвращает    | Описание                                                 |
| ---------------- | ------------- | -------------------------------------------------------- |
| `get-app-info`   | `AppInfo`     | Имя приложения, версия, платформа, isDev, порт           |
| `open-external`  | `void`        | Открыть URL в браузере по умолчанию (только http/https)  |
| `get-data-dir`   | `string`      | Получить путь к директории userData                      |
| `restart-server` | `{ success }` | Остановить + перезапустить сервер (таймаут 5с + SIGKILL) |

### Отправка (Renderer → Main, fire-and-forget)

| Канал             | Описание                                |
| ----------------- | --------------------------------------- |
| `window-minimize` | Свернуть окно                           |
| `window-maximize` | Переключить максимизацию/восстановление |
| `window-close`    | Закрыть окно (свернуть в трей)          |

### Получение (Main → Renderer, события)

| Канал           | Полезная нагрузка | Срабатывает при                                  |
| --------------- | ----------------- | ------------------------------------------------ |
| `server-status` | `ServerStatus`    | Запуск, остановка, ошибки или перезапуск сервера |
| `port-changed`  | `number`          | Изменение порта через меню трея                  |

> **Примечание**: Слушатели возвращают функции для точной очистки. См. хуки `useServerStatus` и `usePortChanged`.

## Безопасность

| Функция            | Реализация                                                                                       |
| ------------------ | ------------------------------------------------------------------------------------------------ |
| Изоляция контекста | `contextIsolation: true` — рендерер не может получить доступ к Node.js                           |
| Интеграция Node    | `nodeIntegration: false` — нет `require()` в рендерере                                           |
| Белый список IPC   | Названия каналов проверяются в preload через `safeInvoke`/`safeSend`/`safeOn`                    |
| Валидация URL      | `shell.openExternal()` разрешает только протоколы `http:` / `https:`                             |
| CSP                | Заголовок `Content-Security-Policy` устанавливается через `session.webRequest.onHeadersReceived` |
| Веб-безопасность   | `webSecurity: true` — применяется политика жесткой изоляции источников                           |

## React Hooks

| Hook                   | Возвращает                      | Описание                                                |
| ---------------------- | ------------------------------- | ------------------------------------------------------- |
| `useIsElectron()`      | `boolean`                       | Обнаружение без рендеринга через `useSyncExternalStore` |
| `useElectronAppInfo()` | `{ appInfo, loading, error }`   | Информация о приложении из основного процесса           |
| `useDataDir()`         | `{ dataDir, loading, error }`   | Пользовательский каталог данных                         |
| `useWindowControls()`  | `{ minimize, maximize, close }` | Действия управления окном                               |
| `useOpenExternal()`    | `{ openExternal }`              | Открытие URL в браузере                                 |
| `useServerControls()`  | `{ restart, restarting }`       | Управление перезапуском сервера                         |
| `useServerStatus(cb)`  | Disposer                        | Прослушивание событий статуса сервера                   |
| `usePortChanged(cb)`   | Disposer                        | Прослушивание событий изменения порта                   |

## Устранение неполадок

### Приложение не запускается

1. Проверьте, доступен ли порт 20128: `lsof -i :20128`
2. Проверьте журналы консоли на наличие префикса `[Electron]`
3. Убедитесь, что выходные данные сборки существуют в `.next/standalone`

### Белый экран

1. Убедитесь, что сборка Next.js существует — готовность сервера ожидает максимум 30 секунд
2. Проверьте вывод журнала `[Server]` и `[Server:err]`
3. Ищите нарушения CSP в консоли разработчика

### Сборка не удалась

Убедитесь, что у вас установлены инструменты сборки:

- Windows: Visual Studio Build Tools
- macOS: Xcode Command Line Tools
- Linux: `build-essential`, `libsecret-1-dev`

## Лицензия

MIT
