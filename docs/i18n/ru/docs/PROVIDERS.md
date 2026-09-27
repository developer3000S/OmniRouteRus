# Providers — Claude Web (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../PROVIDERS.md) · 🇸🇦 [ar](../../ar/docs/PROVIDERS.md) · 🇦🇿 [az](../../az/docs/PROVIDERS.md) · 🇧🇬 [bg](../../bg/docs/PROVIDERS.md) · 🇧🇩 [bn](../../bn/docs/PROVIDERS.md) · 🇨🇿 [cs](../../cs/docs/PROVIDERS.md) · 🇩🇰 [da](../../da/docs/PROVIDERS.md) · 🇩🇪 [de](../../de/docs/PROVIDERS.md) · 🇪🇸 [es](../../es/docs/PROVIDERS.md) · 🇮🇷 [fa](../../fa/docs/PROVIDERS.md) · 🇫🇮 [fi](../../fi/docs/PROVIDERS.md) · 🇫🇷 [fr](../../fr/docs/PROVIDERS.md) · 🇮🇳 [gu](../../gu/docs/PROVIDERS.md) · 🇮🇱 [he](../../he/docs/PROVIDERS.md) · 🇮🇳 [hi](../../hi/docs/PROVIDERS.md) · 🇭🇺 [hu](../../hu/docs/PROVIDERS.md) · 🇮🇩 [id](../../id/docs/PROVIDERS.md) · 🇮🇩 [in](../../in/docs/PROVIDERS.md) · 🇮🇹 [it](../../it/docs/PROVIDERS.md) · 🇯🇵 [ja](../../ja/docs/PROVIDERS.md) · 🇰🇷 [ko](../../ko/docs/PROVIDERS.md) · 🇮🇳 [mr](../../mr/docs/PROVIDERS.md) · 🇲🇾 [ms](../../ms/docs/PROVIDERS.md) · 🇳🇱 [nl](../../nl/docs/PROVIDERS.md) · 🇳🇴 [no](../../no/docs/PROVIDERS.md) · 🇵🇭 [phi](../../phi/docs/PROVIDERS.md) · 🇵🇱 [pl](../../pl/docs/PROVIDERS.md) · 🇵🇹 [pt](../../pt/docs/PROVIDERS.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/PROVIDERS.md) · 🇷🇴 [ro](../../ro/docs/PROVIDERS.md) · 🇸🇰 [sk](../../sk/docs/PROVIDERS.md) · 🇸🇪 [sv](../../sv/docs/PROVIDERS.md) · 🇰🇪 [sw](../../sw/docs/PROVIDERS.md) · 🇮🇳 [ta](../../ta/docs/PROVIDERS.md) · 🇮🇳 [te](../../te/docs/PROVIDERS.md) · 🇹🇭 [th](../../th/docs/PROVIDERS.md) · 🇹🇷 [tr](../../tr/docs/PROVIDERS.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/PROVIDERS.md) · 🇵🇰 [ur](../../ur/docs/PROVIDERS.md) · 🇻🇳 [vi](../../vi/docs/PROVIDERS.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/PROVIDERS.md)

---

## claude-web

Веб-провайдер на основе cookie для **Claude AI** (`claude.ai`) с использованием аутентификации по сессионным cookie.

### Как это работает

1. Пользователь вставляет свои сессионные cookie с `claude.ai` в дашборд OmniRoute
2. `ClaudeWebExecutor` преобразует запросы в формате OpenAI в формат веб-API Claude
3. Запросы отправляются через **`tls-client-node`** с **TLS отпечатком Chrome 124** для обхода Cloudflare Turnstile
4. Ответы потоково передаются обратно через SSE (`text/event-stream`)

### Требуемые cookie

| Cookie         | Назначение                     | Источник                              |
| -------------- | ------------------------------ | -------------------------------------- |
| `sessionKey`   | Основная аутентификация        | `claude.ai` сессия браузера            |
| `routingHint`  | Маршрутизация Anthropic        | `claude.ai` сессия браузера            |
| `cf_clearance` | Разрешение Cloudflare Turnstile | Автоматически устанавливается Cloudflare после прохождения проверки |
| `__cf_bm`      | Управление ботами Cloudflare   | Автоматически устанавливается Cloudflare |
| `_cfuvid`      | Идентификатор посетителя Cloudflare | Автоматически устанавливается Cloudflare |

> **Примечание**: `cf_clearance` привязан к TLS отпечатку браузера, который прошел проверку Cloudflare Turnstile. Библиотека `tls-client-node` (через `claudeTlsClient.ts`) подделывает TLS-рукопожатие Chrome 124, чтобы токен разрешения работал с сервера OmniRoute.

### Справочник API

**Эндпоинт**: `POST /api/organizations/{orgId}/chat_conversations/{convId}/completion`

**Требуемые заголовки**:

```
accept: text/event-stream
anthropic-client-platform: web_claude_ai
anthropic-device-id: <uuid>
content-type: application/json
Referer: https://claude.ai/chat/{convId}
```

**Тело запроса**:

```json
{
  "prompt": "user message",
  "model": "claude-sonnet-4-6",
  "timezone": "Asia/Jakarta",
  "locale": "en-US",
  "personalized_styles": [...],
  "tools": [...],
  "rendering_mode": "messages",
  "create_conversation_params": {
    "name": "",
    "model": "claude-sonnet-4-6",
    "is_temporary": false
  }
}
```

### Архитектура

```
Пользовательские cookie (claude.ai)
    ↓
Дашборд OmniRoute
    ↓
ClaudeWebExecutor (open-sse/executors/claude-web.ts)
    ↓ Преобразование запроса (OpenAI → формат веб-API Claude)
    ↓
tlsFetchClaude() (open-sse/services/claudeTlsClient.ts)
    ↓ Подделывание TLS отпечатка Chrome 124
    ↓
tls-client-node (Go нативное связывание, koffi)
    ↓
API claude.ai
    ↓ SSE поток
```

### Файлы

| Файл                                                  | Назначение                                      |
| ----------------------------------------------------- | -------------------------------------------- |
| `src/shared/constants/providers.ts`                   | Регистрация провайдера (WEB_COOKIE_PROVIDERS) |
| `src/lib/providers/wrappers/claudeWeb.ts`             | Определения типов + утилиты для cookie          |
| `open-sse/executors/claude-web.ts`                    | Реализация исполнителя                      |
| `open-sse/executors/index.ts`                         | Регистрация исполнителя                        |
| `open-sse/services/claudeTlsClient.ts`                | Подделывание TLS отпечатка через tls-client-node |
| `open-sse/services/__tests__/claudeTlsClient.test.ts` | Тесты TLS клиента                             |
| `tests/unit/claude-web.test.ts`                       | Тесты исполнителя                               |

### Тестирование

```bash
# Юнит-тесты
node --import tsx/esm --test tests/unit/claude-web.test.ts

# Тесты TLS клиента
npx vitest run open-sse/services/__tests__/claudeTlsClient.test.ts
```

### Настройка

1. Запустите OmniRoute: `omniroute`
2. Перейдите в Дашборд → Провайдеры → Добавить провайдер
3. Выберите категорию "Веб cookie"
4. Выберите "Claude Web"
5. Вставьте полный заголовок cookie из браузера `claude.ai` (вкладка Network → Copy as fetch → Cookie header)
