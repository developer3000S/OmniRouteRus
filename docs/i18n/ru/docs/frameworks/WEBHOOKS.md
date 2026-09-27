# WEBHOOKS (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../frameworks/WEBHOOKS.md) · 🇸🇦 [ar](../../../ar/docs/frameworks/WEBHOOKS.md) · 🇦🇿 [az](../../../az/docs/frameworks/WEBHOOKS.md) · 🇧🇬 [bg](../../../bg/docs/frameworks/WEBHOOKS.md) · 🇧🇩 [bn](../../../bn/docs/frameworks/WEBHOOKS.md) · 🇨🇿 [cs](../../../cs/docs/frameworks/WEBHOOKS.md) · 🇩🇰 [da](../../../da/docs/frameworks/WEBHOOKS.md) · 🇩🇪 [de](../../../de/docs/frameworks/WEBHOOKS.md) · 🇪🇸 [es](../../../es/docs/frameworks/WEBHOOKS.md) · 🇮🇷 [fa](../../../fa/docs/frameworks/WEBHOOKS.md) · 🇫🇮 [fi](../../../fi/docs/frameworks/WEBHOOKS.md) · 🇫🇷 [fr](../../../fr/docs/frameworks/WEBHOOKS.md) · 🇮🇳 [gu](../../../gu/docs/frameworks/WEBHOOKS.md) · 🇮🇱 [he](../../../he/docs/frameworks/WEBHOOKS.md) · 🇮🇳 [hi](../../../hi/docs/frameworks/WEBHOOKS.md) · 🇭🇺 [hu](../../../hu/docs/frameworks/WEBHOOKS.md) · 🇮🇩 [id](../../../id/docs/frameworks/WEBHOOKS.md) · 🇮🇩 [in](../../../in/docs/frameworks/WEBHOOKS.md) · 🇮🇹 [it](../../../it/docs/frameworks/WEBHOOKS.md) · 🇯🇵 [ja](../../../ja/docs/frameworks/WEBHOOKS.md) · 🇰🇷 [ko](../../../ko/docs/frameworks/WEBHOOKS.md) · 🇮🇳 [mr](../../../mr/docs/frameworks/WEBHOOKS.md) · 🇲🇾 [ms](../../../ms/docs/frameworks/WEBHOOKS.md) · 🇳🇱 [nl](../../../nl/docs/frameworks/WEBHOOKS.md) · 🇳🇴 [no](../../../no/docs/frameworks/WEBHOOKS.md) · 🇵🇭 [phi](../../../phi/docs/frameworks/WEBHOOKS.md) · 🇵🇱 [pl](../../../pl/docs/frameworks/WEBHOOKS.md) · 🇵🇹 [pt](../../../pt/docs/frameworks/WEBHOOKS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/frameworks/WEBHOOKS.md) · 🇷🇴 [ro](../../../ro/docs/frameworks/WEBHOOKS.md) · 🇸🇰 [sk](../../../sk/docs/frameworks/WEBHOOKS.md) · 🇸🇪 [sv](../../../sv/docs/frameworks/WEBHOOKS.md) · 🇰🇪 [sw](../../../sw/docs/frameworks/WEBHOOKS.md) · 🇮🇳 [ta](../../../ta/docs/frameworks/WEBHOOKS.md) · 🇮🇳 [te](../../../te/docs/frameworks/WEBHOOKS.md) · 🇹🇭 [th](../../../th/docs/frameworks/WEBHOOKS.md) · 🇹🇷 [tr](../../../tr/docs/frameworks/WEBHOOKS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/frameworks/WEBHOOKS.md) · 🇵🇰 [ur](../../../ur/docs/frameworks/WEBHOOKS.md) · 🇻🇳 [vi](../../../vi/docs/frameworks/WEBHOOKS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/frameworks/WEBHOOKS.md)

---

---
title: "Webhooks"
version: 3.8.2
lastUpdated: 2026-05-13
---

# Webhooks

> **Источник правды:** `src/lib/webhookDispatcher.ts`, `src/lib/db/webhooks.ts`, `src/app/api/webhooks/`
> **Последнее обновление:** 2026-05-13 — v3.8.0

OmniRoute может отправлять HTTP вебхуки на события платформы. Используйте их для интеграции с
Slack, PagerDuty, Datadog, внутренними сервисами оповещений или любым HTTP-приемником.

Диспетчер подписывает каждое сообщение с помощью HMAC-SHA256, повторяет попытки при временных сбоях,
отслеживает состояние доставки для каждого вебхука и автоматически отключает конечные точки, которые продолжают
терпеть неудачи.

## Поддерживаемые события

Тип `WebhookEvent` (`src/lib/webhookDispatcher.ts`) в настоящее время моделирует:

| Событие                | Срабатывает, когда                                                |
| -------------------- | --------------------------------------------------------- |
| `request.completed`  | Запрошенный запрос завершается успешно                  |
| `request.failed`     | Запрошенный запрос не удается после всех повторных попыток/резервного копирования        |
| `provider.error`     | Поставщик возвращает ошибку, подходящую для перерыва цепи |
| `provider.recovered` | Ранее неисправный поставщик возвращается в рабочее состояние  |
| `quota.exceeded`     | API-ключ пересекает порог бюджета/квоты               |
| `combo.switched`     | Стратегия комбо переключает свой основной целевой объект              |
| `test.ping`     | Синтетическое событие, используемое конечной точкой теста                 |

Подписки принимают литерал `"*"`, чтобы получать каждое событие. Неизвестные имена событий в `events` игнорируются при диспетчеризации.

> Примечание: API диспетчера подключен, но производственные места вызова для некоторых из
> не-`test.ping` событий еще не завершены. Проверьте `grep dispatchEvent`, чтобы увидеть
> какие пути в настоящее время вызывают диспетчер в вашем выпуске.

## Архитектура

```
Caller (handler, service, monitor)
  dispatchEvent(event, data)            [src/lib/webhookDispatcher.ts]
    -> getEnabledWebhooks()             [src/lib/db/webhooks.ts]
    -> фильтр по webhook.events
    -> для каждого совпадения (параллельно):
       deliverWebhook(url, payload, secret)
         построить полезную нагрузку { event, timestamp, data }
         подписать тело с помощью HMAC-SHA256 (если присутствует секрет)
         POST с таймаутом 10s
         повторить до 3 раз при 5xx / ошибке сети
       recordWebhookDelivery(id, status, success)
    -> disableWebhooksWithHighFailures(10)
```

Диспетчер является fire-and-forget для вызывающего: `Promise.allSettled` поглощает
ошибки по вебхукам, так что один плохой приемник не может заблокировать остальные.

## Подпись HMAC

Когда у вебхука есть `secret`, OmniRoute подписывает JSON-тело и отправляет:

```
Content-Type: application/json
User-Agent: OmniRoute-Webhook/1.0
X-Webhook-Event: <event>
X-Webhook-Timestamp: <ISO-8601>
X-Webhook-Signature: sha256=<hex HMAC-SHA256(secret, body)>
```

> Имена заголовков используют префикс `X-Webhook-*` (а не `X-OmniRoute-*`). Значение подписи — `sha256=<hex>` — проверяйте весь префикс.

Если `createWebhook` вызывается без секрета, модуль DB генерирует его
(`whsec_<48 hex>`), поэтому все вебхуки подписываются по умолчанию.

### Проверка на приемнике

```typescript
import { createHmac, timingSafeEqual } from "node:crypto";

function verify(rawBody: string, signature: string, secret: string) {
  const expected = "sha256=" + createHmac("sha256", secret).update(rawBody).digest("hex");
  const a = Buffer.from(expected);
  const b = Buffer.from(signature);
  return a.length === b.length && timingSafeEqual(a, b);
}
```

Всегда проверяйте **сырое** тело запроса, прежде чем любые JSON-анализы.
```

## Политика повторных попыток и ошибок

`deliverWebhook(url, payload, secret, maxRetries = 3)`:

- 10 секунд тайм-аут на каждую попытку (`AbortController`).
- HTTP 2xx считается успешным.
- HTTP 3xx/4xx считается неудачным и не подлежит повторной попытке — записывается как доставленный с `success = res.ok`.
- HTTP 5xx и сетевые ошибки повторяются с экспоненциальной задержкой: `2^attempt * 1000 ms` (1s, 2s, 4s).
- После `maxRetries` доставка записывается как неудачная.
- Каждая доставка обновляет `last_triggered_at`, `last_status` и либо сбрасывает, либо увеличивает `failure_count`.
- Диспетчер вызывает `disableWebhooksWithHighFailures(10)` после каждого fan-out, поэтому любой вебхук с `failure_count >= 10` автоматически отключается.

## База данных

Таблица `webhooks` (миграция `011_webhooks.sql`):

| Колонка             | Тип     | Примечания                                    |
| ------------------- | ------- | --------------------------------------------- |
| `id`                | TEXT PK | UUID                                          |
| `url`               | TEXT    | URL назначения                               |
| `events`            | TEXT    | JSON массив; по умолчанию `["*"]`            |
| `secret`            | TEXT    | HMAC секрет (автоматически генерируется, если не указан) |
| `enabled`           | INT     | 0/1; по умолчанию 1                           |
| `description`       | TEXT    | Необязательная метка для человека            |
| `created_at`        | TEXT    | `datetime('now')`                             |
| `last_triggered_at` | TEXT    | Обновляется при каждой попытке доставки      |
| `last_status`       | INT     | HTTP статус последней попытки (0 = сеть)      |
| `failure_count`     | INT     | Сбрасывается до 0 при успехе, +1 при неудаче |

В текущей схеме **нет отдельной таблицы `webhook_deliveries`** — история доставки агрегируется в строке `webhooks`. Если вам нужна полная история аудита, используйте события `request.completed` / `audit` из downstream log store.

## REST API

Все конечные точки требуют аутентификации управления (`requireManagementAuth`).

| Конечная точка            | Метод | Описание                          |
| ------------------------- | ------ | ------------------------------- |
| `/api/webhooks`           | GET    | Список вебхуков (секреты скрыты) |
| `/api/webhooks`           | POST   | Создать вебхук                   |
| `/api/webhooks/[id]`      | GET    | Детали вебхука (полный секрет)  |
| `/api/webhooks/[id]`      | PUT    | Обновить поля                   |
| `/api/webhooks/[id]`      | DELETE | Удалить                          |
| `/api/webhooks/[id]/test` | POST   | Отправить `test.ping` (без повторных попыток) |

`GET /api/webhooks` маскирует секрет как `<первые 10 символов>...`, чтобы избежать утечки на страницах списка. Используйте GET `[id]`, когда вам действительно нужен секрет.

### Создать вебхук

```bash
curl -X POST http://localhost:20128/api/webhooks \
  -H "Cookie: auth_token=..." \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://hooks.slack.com/services/...",
    "secret": "whsec_my_shared_secret",
    "events": ["quota.exceeded", "provider.error"],
    "description": "Slack alerts"
  }'
```

Если `secret` опущен, сервер генерирует секрет `whsec_<hex>` и возвращает его в ответе.

### Тест вебхука

```bash
curl -X POST http://localhost:20128/api/webhooks/<id>/test \
  -H "Cookie: auth_token=..."
```

Возвращает `{ delivered, status, error }`. Повторные попытки не предпринимаются — полезно для быстрой проверки, принимает ли получатель полезную нагрузку и подпись.

## Панель управления

Страница панели управления по адресу `/dashboard/webhooks` (см.
`src/app/(dashboard)/dashboard/webhooks/page.tsx`) предоставляет:

- Создание/редактирование вебхуков с выбором события
- Индикатор состояния (активен / неактивен / ошибка) на основе `enabled`,
  `failure_count` и `last_status`
- Тестовая доставка по нажатию кнопки
- Ручной переключатель включения/отключения

## Примеры полезной нагрузки

### request.completed

```json
{
  "event": "request.completed",
  "timestamp": "2026-05-13T20:30:00.123Z",
  "data": {
    "trace_id": "...",
    "api_key_id": "...",
    "provider": "openai",
    "model": "gpt-5",
    "status": 200,
    "tokens_in": 142,
    "tokens_out": 350,
    "cost_usd": 0.0042
  }
}
```

### provider.error

```json
{
  "event": "provider.error",
  "timestamp": "2026-05-13T20:31:00.000Z",
  "data": {
    "provider": "anthropic",
    "status": 503,
    "consecutive_failures": 5,
    "circuit_state": "open"
  }
}
```

### test.ping

```json
{
  "event": "test.ping",
  "timestamp": "2026-05-13T20:32:00.000Z",
  "data": {
    "message": "Тестовая доставка вебхука от OmniRoute",
    "webhookId": "<uuid>"
  }
}
```

Формы полей для событий, отличных от `test.ping`, определяются местами вызова, которые их генерируют; рассматривайте объект `data` как совместимый с будущими версиями (добавляйте поля, не зависете от их отсутствия).

## Лучшие практики

- **Проверяйте подпись при каждой доставке** на основе исходного тела — предотвращает поддельные POST-запросы от любого, кто угадает ваш URL вебхука.
- **Отвечайте 2xx за ~5 секунд** — диспетчер таймаутится через 10 с. Медленные получатели будут потреблять повторные попытки и увеличивать `failure_count`.
- **Сделайте обработчики идемпотентными** — повторные попытки и семантика доставки "как минимум один раз" означают, что дубликаты возможны.
- **Подписывайтесь минимально** — указывайте только те события, которые вы действительно потребляете; `"*"` добавит стоимость получателям, которые вам не подконтрольны.
- **Следите за `failure_count`** — конечные точки автоматически отключаются при 10 последовательных сбоях; сбросьте, вызвав `PUT /api/webhooks/[id]` с `enabled: true` после исправления получателя.
- **Периодически меняйте секреты** — `PUT` новый `secret`, разверните новое значение на получателе и подтвердите через тестовый конечный пункт.

## Смотрите также

- [API_REFERENCE.md](../reference/API_REFERENCE.md) — полное API управления
- [RESILIENCE_GUIDE.md](../architecture/RESILIENCE_GUIDE.md) — семантика автоматического отключения / охлаждения, которая управляет `provider.error` / `provider.recovered`
- Источники: `src/lib/webhookDispatcher.ts`, `src/lib/db/webhooks.ts`
