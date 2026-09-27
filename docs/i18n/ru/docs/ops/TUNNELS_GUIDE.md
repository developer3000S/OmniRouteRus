# TUNNELS_GUIDE (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/TUNNELS_GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/ops/TUNNELS_GUIDE.md) · 🇦🇿 [az](../../../az/docs/ops/TUNNELS_GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/ops/TUNNELS_GUIDE.md) · 🇧🇩 [bn](../../../bn/docs/ops/TUNNELS_GUIDE.md) · 🇨🇿 [cs](../../../cs/docs/ops/TUNNELS_GUIDE.md) · 🇩🇰 [da](../../../da/docs/ops/TUNNELS_GUIDE.md) · 🇩🇪 [de](../../../de/docs/ops/TUNNELS_GUIDE.md) · 🇪🇸 [es](../../../es/docs/ops/TUNNELS_GUIDE.md) · 🇮🇷 [fa](../../../fa/docs/ops/TUNNELS_GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/ops/TUNNELS_GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/ops/TUNNELS_GUIDE.md) · 🇮🇳 [gu](../../../gu/docs/ops/TUNNELS_GUIDE.md) · 🇮🇱 [he](../../../he/docs/ops/TUNNELS_GUIDE.md) · 🇮🇳 [hi](../../../hi/docs/ops/TUNNELS_GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/ops/TUNNELS_GUIDE.md) · 🇮🇩 [id](../../../id/docs/ops/TUNNELS_GUIDE.md) · 🇮🇩 [in](../../../in/docs/ops/TUNNELS_GUIDE.md) · 🇮🇹 [it](../../../it/docs/ops/TUNNELS_GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/ops/TUNNELS_GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/ops/TUNNELS_GUIDE.md) · 🇮🇳 [mr](../../../mr/docs/ops/TUNNELS_GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/ops/TUNNELS_GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/ops/TUNNELS_GUIDE.md) · 🇳🇴 [no](../../../no/docs/ops/TUNNELS_GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/ops/TUNNELS_GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/ops/TUNNELS_GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/ops/TUNNELS_GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/TUNNELS_GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/ops/TUNNELS_GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/ops/TUNNELS_GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/ops/TUNNELS_GUIDE.md) · 🇰🇪 [sw](../../../sw/docs/ops/TUNNELS_GUIDE.md) · 🇮🇳 [ta](../../../ta/docs/ops/TUNNELS_GUIDE.md) · 🇮🇳 [te](../../../te/docs/ops/TUNNELS_GUIDE.md) · 🇹🇭 [th](../../../th/docs/ops/TUNNELS_GUIDE.md) · 🇹🇷 [tr](../../../tr/docs/ops/TUNNELS_GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/TUNNELS_GUIDE.md) · 🇵🇰 [ur](../../../ur/docs/ops/TUNNELS_GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/ops/TUNNELS_GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/TUNNELS_GUIDE.md)

---

---
title: "Руководство по туннелям"
version: 3.8.2
lastUpdated: 2026-05-13
---

# Руководство по туннелям

> **Источник правды:** `src/lib/{cloudflaredTunnel,ngrokTunnel,tailscaleTunnel}.ts`, `src/app/api/tunnels/`
> **Последнее обновление:** 2026-05-13 — v3.8.0

OmniRoute может открыть локальный сервер (`http://localhost:20128`) для публичного интернета через три бэкенда туннелей. Это полезно для:

- Обратных вызовов OAuth от облачных провайдеров (Antigravity, Gemini, Cursor), которые требуют публичного URL-адреса перенаправления.
- Обмена вашей локальной инстанцией с коллегами без развертывания виртуальной машины.
- Мобильное, удаленное или межсетевое тестирование.

Все три бэкенда управляются в процессе — OmniRoute запускает/останавливает базовый двоичный файл или SDK из панели управления или REST API. Не требуется настройка обратного прокси или systemd.

## Бэкенды в кратком виде

| Бэкенд                     | Сохранение                                            | Стоимость              | Настройка                                           |
| --------------------------- | ------------------------------------------------------ | ----------------- | ----------------------------------------------- |
| **Cloudflare Quick Tunnel** | Эфемерный (URL изменяется при каждом перезапуске)                   | Бесплатно              | Нулевая — автоматически устанавливает `cloudflared`              |
| **ngrok**                   | Стабильный, пока не настроен платный план или фиксированный домен | Бесплатный тариф + платный  | Требуется аккаунт ngrok + токен аутентификации              |
| **Tailscale Funnel**        | Стабильный для каждого узла в вашей tailnet                    | Бесплатно для личного использования | Требуется установка Tailscale + вход + ACL Funnel |

Реализации находятся в `src/lib/cloudflaredTunnel.ts`,
`src/lib/ngrokTunnel.ts`, и `src/lib/tailscaleTunnel.ts`. Все три возвращают
объект `status` с полями `phase`, `running`, `publicUrl`, `apiUrl`,
`targetUrl`, и `lastError`, поэтому панель управления может отображать их единообразно.

## 1. Туннель Cloudflare (Quick Tunnel)

`src/lib/cloudflaredTunnel.ts` запускает `cloudflared tunnel --url
http://localhost:<apiPort>` как дочерний процесс и парсит назначенный
`*.trycloudflare.com` URL из stdout.

Основные поведения:

- **Автоустановка.** При первом использовании OmniRoute загружает последний двоичный файл `cloudflared`
  из официальных релизов GitHub (управляемая установка находится под
  `DATA_DIR/cloudflared/`). SHA256 загруженного ресурса проверяется против манифеста релиза перед выполнением.
- **Только быстрый туннель.** Текущая реализация запускает только быстрый туннель
  `--url`-стиля. Именованные/постоянные туннели (`cloudflared tunnel
login` + `cloudflared tunnel route dns ...`) не управляются
  OmniRoute. URL-адреса являются эфемерными и изменятся при каждом перезапуске.
- **Надзор за процессом.** PID cloudflared и разрешенный URL сохраняются в
  `cloudflared-state.json`, чтобы панель управления могла возобновить статус после перезагрузки.

### Включение / отключение через REST

Эндпоинт использует тело `{action: "enable" | "disable"}`, а не отдельные
пути `start`/`stop`. Требуется аутентификация управления (административная сессия или административный API-ключ).

```bash
# Включить
curl -X POST http://localhost:20128/api/tunnels/cloudflared \
  -H "Content-Type: application/json" \
  -H "Cookie: auth_token=..." \
  -d '{"action":"enable"}'

# Статус
curl http://localhost:20128/api/tunnels/cloudflared \
  -H "Cookie: auth_token=..."

# Отключить
curl -X POST http://localhost:20128/api/tunnels/cloudflared \
  -H "Content-Type: application/json" \
  -H "Cookie: auth_token=..." \
  -d '{"action":"disable"}'
```

Или через панель управления: **Настройки → Туннели → Cloudflare**.

### Необязательные переменные окружения

| Переменная                                             | Назначение                                                                               |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `CLOUDFLARED_BIN`                                    | Переопределить путь к двоичному файлу. Если установлено и допустимо, OmniRoute использует его вместо загрузки. |
| `CLOUDFLARED_PROTOCOL` / `TUNNEL_TRANSPORT_PROTOCOL` | Протокол транспорта (по умолчанию `http2`).                                                 |

## 2. ngrok

`src/lib/ngrokTunnel.ts` использует **`@ngrok/ngrok` SDK** (в процессе, без подпроцесса CLI). Нативный модуль импортируется лениво при первом запуске, чтобы платформы без предварительно собранных бинарных файлов не ломали приложение при загрузке.

### Предварительные требования

1. Зарегистрируйтесь на <https://ngrok.com>.
2. Скопируйте свой токен аутентификации из панели управления ngrok.
3. Предоставьте его одним из следующих способов:
   - `.env`: `NGROK_AUTHTOKEN=<token>`, или
   - Панель управления: **Настройки → Туннели → ngrok**, или
   - REST тело (одноразовое использование): `{"action":"enable","authToken":"<token>"}`.

Если ни один из них не настроен, статус возвращает `phase: "needs_auth"`.

### Включение / отключение через REST

```bash
# Включить (использует NGROK_AUTHTOKEN из env)
curl -X POST http://localhost:20128/api/tunnels/ngrok \
  -H "Content-Type: application/json" \
  -H "Cookie: auth_token=..." \
  -d '{"action":"enable"}'

# Включить с инлайн токеном
curl -X POST http://localhost:20128/api/tunnels/ngrok \
  -H "Content-Type: application/json" \
  -H "Cookie: auth_token=..." \
  -d '{"action":"enable","authToken":"2abc..."}'

# Статус
curl http://localhost:20128/api/tunnels/ngrok \
  -H "Cookie: auth_token=..."

# Отключить
curl -X POST http://localhost:20128/api/tunnels/ngrok \
  -H "Content-Type: application/json" \
  -H "Cookie: auth_token=..." \
  -d '{"action":"disable"}'
```

Ответ включает назначенный `publicUrl` (например, `https://abcd-1234.ngrok-free.app`). Пользовательские домены, регионы и правила политики должны быть настроены в панели управления ngrok — OmniRoute сам по себе только перенаправляет локальный целевой URL в SDK.

## 3. Tailscale Funnel

`src/lib/tailscaleTunnel.ts` управляет системным `tailscale` CLI для предоставления локального API-порта через **Funnel** (публичный выход Tailscale для сервиса). Он поддерживает полный жизненный цикл: установка, вход, запуск демона, включение, отключение.

Реализация вызывает `tailscale funnel --bg <port>` (режим фонового выполнения). Публичный URL имеет форму `https://<machine>.<tailnet>.ts.net/`.

### Предварительные требования

1. Установите Tailscale (или дайте OmniRoute сделать это — см. конечную точку `install` ниже).
2. Войдите (`tailscale login` или через конечную точку `login` OmniRoute).
3. Включите Funnel для вашего tailnet в консоли администратора Tailscale: <https://login.tailscale.com/admin/settings/features>.

На Linux и macOS демон (`tailscaled`) требует `sudo` для управления. POST-конечные точки принимают необязательное поле `sudoPassword`, которое передается в кэш паролей MITM OmniRoute (`getCachedPassword` / `setCachedPassword`) на время вызова. Windows использует установку службы по умолчанию в `C:\Program Files\Tailscale\tailscale.exe`.

### REST-конечные точки

Tailscale имеет более богатый интерфейс, чем другие бэкенды, потому что установка, вход, демон и туннель — это отдельные вопросы.

| Конечная точка                              | Метод | Назначение                                                         |
| ------------------------------------- | ------ | --------------------------------------------------------------- |
| `/api/tunnels/tailscale`              | `GET`  | Агрегированный статус туннеля (`phase`, `tunnelUrl`, `apiUrl` и т.д.) |
| `/api/tunnels/tailscale/check`        | `GET`  | Нижеуровневая проверка: установлен? вошел? демон работает?        |
| `/api/tunnels/tailscale/install`      | `POST` | Установить Tailscale (поток событий SSE) — Linux/macOS  |
| `/api/tunnels/tailscale/start-daemon` | `POST` | Запустить `tailscaled` на Linux/macOS                               |
| `/api/tunnels/tailscale/login`        | `POST` | Начать процесс входа; возвращает `authUrl` для открытия в браузере        |
| `/api/tunnels/tailscale/enable`       | `POST` | Запустить Funnel для API-порта                               |
| `/api/tunnels/tailscale/disable`      | `POST` | Остановить Funnel                                                 |

Все конечные точки Tailscale требуют аутентификации управления (см. `routeUtils.ts :: requireTailscaleAuth`).

Пример включения:

```bash
curl -X POST http://localhost:20128/api/tunnels/tailscale/enable \
  -H "Content-Type: application/json" \
  -H "Cookie: auth_token=..." \
  -d '{"sudoPassword":"<linux-pwd>","port":20128}'
```

Если Funnel не включен в консоли администратора, ответ включает `funnelNotEnabled: true` плюс `enableUrl` для открытия в браузере.

### Необязательные переменные окружения

| Переменная        | Назначение                              |
| --------------- | ------------------------------------ |
| `TAILSCALE_BIN` | Переопределить путь к бинарному файлу `tailscale` |

## Краткое описание эндпоинтов

| Эндпоинт                              | Метод | Тело                                | Авторизация       |
| ------------------------------------- | ------ | ----------------------------------- | ---------- |
| `/api/tunnels/cloudflared`            | `GET`  | —                                   | management |
| `/api/tunnels/cloudflared`            | `POST` | `{action: "enable" \| "disable"}`   | management |
| `/api/tunnels/ngrok`                  | `GET`  | —                                   | management |
| `/api/tunnels/ngrok`                  | `POST` | `{action, authToken?}`              | management |
| `/api/tunnels/tailscale`              | `GET`  | —                                   | management |
| `/api/tunnels/tailscale/check`        | `GET`  | —                                   | management |
| `/api/tunnels/tailscale/install`      | `POST` | `{sudoPassword?}` (SSE)             | management |
| `/api/tunnels/tailscale/start-daemon` | `POST` | `{sudoPassword?}`                   | management |
| `/api/tunnels/tailscale/login`        | `POST` | `{hostname?}`                       | management |
| `/api/tunnels/tailscale/enable`       | `POST` | `{sudoPassword?, hostname?, port?}` | management |
| `/api/tunnels/tailscale/disable`      | `POST` | `{sudoPassword?}`                   | management |

Нет единого эндпоинта `/api/settings/tunnels` — каждый бэкенд независим.

## Рассмотрение обратных вызовов OAuth

При экспорте OmniRoute через туннель, панель управления и потоки OAuth должны
строить URL-адреса обратного вызова на основе **публичного** имени хоста, а не `localhost`. В противном случае
поставщик OAuth перенаправит пользователя на URL, к которому его серверы не могут получить доступ,
и рукопожатие завершится неудачей.

Установите:

```bash
NEXT_PUBLIC_BASE_URL=https://<your-tunnel-host>
```

и перезапустите OmniRoute перед началом OAuth. Для временных туннелей Cloudflare Quick
URL-адрес изменяется после каждого перезапуска, поэтому для использования OAuth в продакшене предпочтительнее использовать ngrok с зарезервированным доменом или Tailscale Funnel.

## Здоровье и мониторинг

Панель управления отображает состояние туннеля в разделе **Настройки → Туннели**:

- Активные бэкенды и текущая `phase` (`stopped`, `starting`, `running`,
  `needs_auth`, `error`).
- Текущий публичный URL и производный API URL (`<publicUrl>/v1`).
- Локальный целевой URL, на который перенаправляется туннель.
- Последнее сообщение об ошибке, если таковое имеется.

Для программного мониторинга опрашивайте соответствующие эндпоинты `GET`. Запуск более чем одного бэкенда одновременно разрешен; OmniRoute будет отслеживать каждый из них независимо.

## Устранение неполадок

### "cloudflared binary not found"

OmniRoute пытается установить его автоматически при первом использовании. Если установка заблокирована
(ограниченная сеть, нет доступа к GitHub), скачайте `cloudflared` вручную с
<https://github.com/cloudflare/cloudflared/releases> и установите
`CLOUDFLARED_BIN=/path/to/cloudflared`.

### "ngrok: authtoken required"

`phase: "needs_auth"` означает, что токен авторизации не найден. Установите `NGROK_AUTHTOKEN` в
`.env`, настройте его через панель управления или передайте `authToken` в теле POST-запроса при включении.

### "tailscale: funnel not enabled"

Когда ответ на включение включает `funnelNotEnabled: true`, Funnel отключен для вашего tailnet. Откройте возвращенный `enableUrl` (или страницу функции в административной консоли) и включите Funnel.

### URL-адрес туннеля изменяется, нарушая OAuth

Используйте ngrok с зарезервированным доменом или Tailscale Funnel (оба стабильны на уровне узла).
Туннели Cloudflare Quick являются временными по дизайну и не рекомендуются для длительных обратных вызовов OAuth.

### Отсутствие прав доступа на Linux/macOS для Tailscale

`tailscaled` требует прав root. Предоставьте `sudoPassword` соответствующему POST-эндпоинту,
или запустите демон самостоятельно (`sudo systemctl start tailscaled`).

## Смотрите также

- [PROXY_GUIDE.md](./PROXY_GUIDE.md) — исходящий прокси (1proxy, SOCKS5, HTTP) для
  исходящего трафика.
- [ENVIRONMENT.md](../reference/ENVIRONMENT.md) — полный список переменных окружения, включая
  `NEXT_PUBLIC_BASE_URL`.
- [FLY_IO_DEPLOYMENT_GUIDE.md](./FLY_IO_DEPLOYMENT_GUIDE.md),
  [DOCKER_GUIDE.md](../guides/DOCKER_GUIDE.md) — альтернативы туннелированию для стабильного публичного хостинга.
- Источник: `src/lib/{cloudflaredTunnel,ngrokTunnel,tailscaleTunnel}.ts`,
  `src/app/api/tunnels/`.
