# COMPLIANCE (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../security/COMPLIANCE.md) · 🇸🇦 [ar](../../../ar/docs/security/COMPLIANCE.md) · 🇦🇿 [az](../../../az/docs/security/COMPLIANCE.md) · 🇧🇬 [bg](../../../bg/docs/security/COMPLIANCE.md) · 🇧🇩 [bn](../../../bn/docs/security/COMPLIANCE.md) · 🇨🇿 [cs](../../../cs/docs/security/COMPLIANCE.md) · 🇩🇰 [da](../../../da/docs/security/COMPLIANCE.md) · 🇩🇪 [de](../../../de/docs/security/COMPLIANCE.md) · 🇪🇸 [es](../../../es/docs/security/COMPLIANCE.md) · 🇮🇷 [fa](../../../fa/docs/security/COMPLIANCE.md) · 🇫🇮 [fi](../../../fi/docs/security/COMPLIANCE.md) · 🇫🇷 [fr](../../../fr/docs/security/COMPLIANCE.md) · 🇮🇳 [gu](../../../gu/docs/security/COMPLIANCE.md) · 🇮🇱 [he](../../../he/docs/security/COMPLIANCE.md) · 🇮🇳 [hi](../../../hi/docs/security/COMPLIANCE.md) · 🇭🇺 [hu](../../../hu/docs/security/COMPLIANCE.md) · 🇮🇩 [id](../../../id/docs/security/COMPLIANCE.md) · 🇮🇩 [in](../../../in/docs/security/COMPLIANCE.md) · 🇮🇹 [it](../../../it/docs/security/COMPLIANCE.md) · 🇯🇵 [ja](../../../ja/docs/security/COMPLIANCE.md) · 🇰🇷 [ko](../../../ko/docs/security/COMPLIANCE.md) · 🇮🇳 [mr](../../../mr/docs/security/COMPLIANCE.md) · 🇲🇾 [ms](../../../ms/docs/security/COMPLIANCE.md) · 🇳🇱 [nl](../../../nl/docs/security/COMPLIANCE.md) · 🇳🇴 [no](../../../no/docs/security/COMPLIANCE.md) · 🇵🇭 [phi](../../../phi/docs/security/COMPLIANCE.md) · 🇵🇱 [pl](../../../pl/docs/security/COMPLIANCE.md) · 🇵🇹 [pt](../../../pt/docs/security/COMPLIANCE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/COMPLIANCE.md) · 🇷🇴 [ro](../../../ro/docs/security/COMPLIANCE.md) · 🇸🇰 [sk](../../../sk/docs/security/COMPLIANCE.md) · 🇸🇪 [sv](../../../sv/docs/security/COMPLIANCE.md) · 🇰🇪 [sw](../../../sw/docs/security/COMPLIANCE.md) · 🇮🇳 [ta](../../../ta/docs/security/COMPLIANCE.md) · 🇮🇳 [te](../../../te/docs/security/COMPLIANCE.md) · 🇹🇭 [th](../../../th/docs/security/COMPLIANCE.md) · 🇹🇷 [tr](../../../tr/docs/security/COMPLIANCE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/COMPLIANCE.md) · 🇵🇰 [ur](../../../ur/docs/security/COMPLIANCE.md) · 🇻🇳 [vi](../../../vi/docs/security/COMPLIANCE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/COMPLIANCE.md)

---

---
title: "Соответствие & Аудит"
version: 3.8.2
lastUpdated: 2026-05-13
---

# Соответствие & Аудит

> **Источник истины:** `src/lib/compliance/`, `src/app/api/compliance/`
> **Последнее обновление:** 2026-05-13 — v3.8.0

OmniRoute записывает административные действия, события аутентификации, изменения жизненного цикла учетных данных провайдера и вызовы инструментов MCP в таблицы аудита, поддерживаемые SQLite. Эта страница охватывает то, что записывается, где это хранится, как долго оно сохраняется, как API-ключи могут отказаться, и как запрашивать данные.

Реализация находится в `src/lib/compliance/index.ts` (T-43 — "Контроли соответствия") и `src/lib/compliance/providerAudit.ts`. Записи аудита никогда не выбрасывают исключения: в случае любой ошибки вызов молча подавляется, чтобы запись аудита не нарушала основной поток запроса.

## Что записывается

### События административного аудита (`audit_log`)

Каждый вызов `logAuditEvent({ action, actor, target, details, ... })` создает одну строку. Строки действий следуют шаблону `domain.verb` (или `domain.verb.outcome`). Подтвержденные типы действий в дереве включают:

| Действие                               | Источник                                  |
| ------------------------------------ | --------------------------------------- |
| `auth.login.success`                 | `src/app/api/auth/login/route.ts`       |
| `auth.login.failed`                  | `src/app/api/auth/login/route.ts`       |
| `auth.login.locked`                  | `src/app/api/auth/login/route.ts`       |
| `auth.login.error`                   | `src/app/api/auth/login/route.ts`       |
| `auth.login.misconfigured`           | `src/app/api/auth/login/route.ts`       |
| `auth.login.setup_required`          | `src/app/api/auth/login/route.ts`       |
| `auth.logout.success`                | `src/app/api/auth/logout/route.ts`      |
| `provider.credentials.created`       | `src/app/api/providers/route.ts`        |
| `provider.credentials.updated`       | `src/app/api/providers/[id]/route.ts`   |
| `provider.credentials.revoked`       | `src/app/api/providers/[id]/route.ts`   |
| `provider.credentials.batch_revoked` | `src/app/api/providers/route.ts`        |
| `sync.token.created`                 | `src/app/api/sync/tokens/route.ts`      |
| `sync.token.revoked`                 | `src/app/api/sync/tokens/[id]/route.ts` |
| `compliance.cleanup`                 | `src/lib/compliance/index.ts`           |

Каждая запись захватывает `action`, `actor` (по умолчанию `"system"`), `target`, `details`/`metadata` (JSON), `ip_address`, `resource_type`, `status`, `request_id` и `timestamp`. Чувствительные ключи (`apiKey`, `accessToken`, `refreshToken`, `password`, все совпадающие с `*token`/`*secret`/`*apikey` и т.д.) рекурсивно удаляются в `"[redacted]"` перед записью строки.

### Вызовы инструментов MCP (`mcp_tool_audit`)

Каждый вызов инструмента MCP записывает строку через `open-sse/mcp-server/audit.ts`. Схема (из `src/lib/db/migrations/002_mcp_a2a_tables.sql`):

| Колонка           | Примечания                               |
| ---------------- | ----------------------------------- |
| `id`             | автоинкремент                       |
| `tool_name`      | идентификатор инструмента MCP                 |
| `input_hash`     | sha256 входных данных (полезная нагрузка не хранится) |
| `output_summary` | краткое, усеченное резюме            |
| `duration_ms`    | стеночное время                           |
| `api_key_id`     | вызывающий (nullable)                   |
| `success`        | `1` / `0`                           |
| `error_code`     | терминальный код ошибки при сбое      |
| `created_at`     | временная метка ISO                       |

### Журналы запросов / использования

Это операционная телеметрия (не строго административный аудит), но использует тот же конвейер удержания:

- `usage_history` — сводка использования по запросам
- `call_logs` — полный журнал запросов (подлежит ограничению строк, см. ниже)
- `proxy_logs` — журнал трафика прокси (подлежит ограничению строк)
- `request_detail_logs` — устаревший подробный журнал запросов (по-прежнему очищается, если присутствует)

## Схема хранения

`audit_log` создается лениво функцией `ensureAuditLogSchema()` при первом использовании:

```sql
CREATE TABLE IF NOT EXISTS audit_log (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  timestamp     TEXT NOT NULL DEFAULT (datetime('now')),
  action        TEXT NOT NULL,
  actor         TEXT NOT NULL DEFAULT 'system',
  target        TEXT,
  details       TEXT,
  ip_address    TEXT,
  resource_type TEXT,
  status        TEXT,
  request_id    TEXT,
  metadata      TEXT
);
```

Индексы создаются для столбцов `timestamp`, `action`, `actor`, `resource_type`,
`status`, и `request_id`. Отсутствующие столбцы в устаревших БД добавляются через
`ALTER TABLE` по мере необходимости.

## Хранение и очистка

Два отдельных окна хранения применяются:

| Переменная окружения                     | По умолчанию  | Применяется к                                                        |
| --------------------------- | -------- | ----------------------------------------------------------------- |
| `APP_LOG_RETENTION_DAYS`    | `7`      | `audit_log`, `mcp_tool_audit`                                     |
| `CALL_LOG_RETENTION_DAYS`   | `7`      | `usage_history`, `call_logs`, `proxy_logs`, `request_detail_logs` |
| `CALL_LOGS_TABLE_MAX_ROWS`  | `100000` | Ограничение по строкам для `call_logs`                                      |
| `PROXY_LOGS_TABLE_MAX_ROWS` | `100000` | Ограничение по строкам для `proxy_logs`                                     |

`cleanupExpiredLogs()` выполняет очистку по истечении срока хранения. Она вызывается при запуске сервера
из `src/server-init.ts` и `src/instrumentation-node.ts`. Каждый запуск регистрирует событие аудита
`compliance.cleanup` с количеством удаленных строк для каждой таблицы. Очистка логов прокси и вызовов
выполняется пакетами (`BATCH_SIZE = 5000`), чтобы избежать длительных блокировок записи.

Значения по умолчанию определены в `src/lib/logEnv.ts`
(`DEFAULT_APP_LOG_RETENTION_DAYS = 7`, `DEFAULT_CALL_LOG_RETENTION_DAYS = 7`).

## `noLog` Отказ (по API ключу)

API ключи могут быть помечены так, чтобы их трафик не логировался. Флаг хранится в таблице `api_keys` (`no_log INTEGER DEFAULT 0`) и отражается в оперативной памяти для быстрого доступа.

```bash
# Создать ключ без логирования (требуется управление авторизацией)
curl -X POST http://localhost:20128/api/keys \
  -H "Cookie: auth_token=..." \
  -H "Content-Type: application/json" \
  -d '{"name": "Privacy key", "noLog": true}'
```

Помощники (`src/lib/compliance/index.ts`):

- `setNoLog(apiKeyId, true|false)` — переключить запись в оперативной памяти
- `isNoLog(apiKeyId)` — проверяется на пути запроса; в случае отсутствия использует 30-секундное кэширование чтения из `api_keys.no_log`
- `NO_LOG_API_KEY_IDS` (переменная окружения, разделенная запятыми) — предварительно загружается в оперативную память при запуске; полезно, когда вы не можете напрямую изменить столбец

Административные события аудита (вход, изменения провайдера, вызовы инструмента MCP и т.д.)
**не** зависят от `noLog` — только логирование трафика запросов может быть отключено.

## REST API

| Конечная точка                    | Метод | Описание                                | Авторизация       |
| --------------------------- | ------ | ------------------------------------------ | ---------- |
| `/api/compliance/audit-log` | `GET`  | Страничные записи аудита с фильтрами | управление |
| `/api/mcp/audit`            | `GET`  | Страничные записи аудита инструмента MCP           | (open-sse) |
| `/api/mcp/audit/stats`      | `GET`  | Агрегированная статистика аудита MCP                 | (open-sse) |

Сегодня нет конечной точки для экспорта CSV — экспортируйте из панели управления или напрямую запросите базу данных SQLite.

### Запрос `/api/compliance/audit-log`

Поддерживаемые параметры запроса (все необязательные, все используют `LIKE %value%` для текстовых фильтров):

- `action`, `actor`, `target`, `resourceType` (или `resource_type`),
  `status`, `requestId` (или `request_id`)
- `from` / `since`, `to` / `until` — ISO временные метки
- `limit` (по умолчанию `50`, минимум `1`, максимум `500`)
- `offset` (по умолчанию `0`, максимум `10_000`)

Ответ — это JSON-массив. Метаданные пагинации возвращаются в заголовках:
`x-total-count`, `x-page-limit`, `x-page-offset`.

```bash
curl "http://localhost:20128/api/compliance/audit-log?action=provider.credentials&from=2026-05-01" \
  -H "Cookie: auth_token=..."
```

## Панель управления

Панель управления предоставляет данные аудита по адресу **`/dashboard/audit`**
(`src/app/(dashboard)/dashboard/audit/page.tsx`). Страница содержит две вкладки:

- **Соответствие** (`ComplianceTab.tsx`) — события аудита администратора из
  `/api/compliance/audit-log`. Фильтрует по типу события, серьезности (информация / предупреждение
  / критическая, вычисляется из действия + статуса) и диапазону дат. Серьезность
  вычисляется на стороне клиента из строк действия/статуса.
- **MCP** (`McpAuditTab.tsx`) — аудит инструментов MCP из `/api/mcp/audit`, с
  фильтрами по имени инструмента и успеху/неуспеху.

Обе вкладки используют постраничную навигацию с размерами страниц `50` (соответствие) и `25` (MCP).

## Помощники для учетных данных провайдера

`src/lib/compliance/providerAudit.ts` предоставляет вспомогательные функции для формирования, используемые маршрутами управления провайдерами при создании событий учетных данных:

- `summarizeProviderConnectionForAudit(connection)` — удаляет `apiKey`,
  `accessToken`, `refreshToken`, `idToken`, и
  `providerSpecificData.consoleApiKey` перед тем, как снимок соединения будет
  записан в `details`.
- `getProviderAuditTarget(connection)` — составляет стабильную
  строку `"<provider>:<name|id>"` для поля `target`.
- `extractProviderWarnings(...payloads)` — сканирует ответы провайдера на
  политические/безопасностные предупреждения (`[sanitizer]`, `обнаружена инъекция запроса`,
  `содержимое было отфильтровано`, `фильтр безопасности`, `нарушение политики`) и
  выводит до 5 совпадений, каждое из которых усекается до 400 символов.

## Лучшие практики

- Помечайте API-ключи, обрабатывающие ПД (личные, медицинские и т.д.), флагом `noLog: true`.
- Настройте `APP_LOG_RETENTION_DAYS` / `CALL_LOG_RETENTION_DAYS` в соответствии с вашей политикой хранения. Значения по умолчанию в 7 дней являются консервативными.
- Экспортируйте таблицу аудита за пределы платформы (`sqlite3 dump`) с той частотой, которая требуется вашей программой соответствия — встроенного архивирования нет.
- Отслеживайте количество `auth.login.failed` и `auth.login.locked` для обнаружения атак методом перебора.
- При добавлении новых административных конечных точек вызывайте `logAuditEvent({ ... })` с устойчивой строкой действия `domain.verb.outcome` и передавайте контекст запроса через `getAuditRequestContext(request)`, чтобы IP и `requestId` были автоматически захвачены.

## Смотрите также

- [`docs/security/GUARDRAILS.md`](./GUARDRAILS.md) — маскировка ПД, инъекция запроса
- [`docs/frameworks/MCP-SERVER.md`](../frameworks/MCP-SERVER.md) — каталог инструментов MCP и области
- [`docs/reference/ENVIRONMENT.md`](../reference/ENVIRONMENT.md) — полный справочник переменных среды
- Источники: `src/lib/compliance/`, `src/app/api/compliance/`,
  `src/app/api/mcp/audit/`, `src/lib/logEnv.ts`
