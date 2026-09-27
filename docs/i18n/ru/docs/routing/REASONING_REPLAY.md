# REASONING_REPLAY (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../routing/REASONING_REPLAY.md) · 🇸🇦 [ar](../../../ar/docs/routing/REASONING_REPLAY.md) · 🇦🇿 [az](../../../az/docs/routing/REASONING_REPLAY.md) · 🇧🇬 [bg](../../../bg/docs/routing/REASONING_REPLAY.md) · 🇧🇩 [bn](../../../bn/docs/routing/REASONING_REPLAY.md) · 🇨🇿 [cs](../../../cs/docs/routing/REASONING_REPLAY.md) · 🇩🇰 [da](../../../da/docs/routing/REASONING_REPLAY.md) · 🇩🇪 [de](../../../de/docs/routing/REASONING_REPLAY.md) · 🇪🇸 [es](../../../es/docs/routing/REASONING_REPLAY.md) · 🇮🇷 [fa](../../../fa/docs/routing/REASONING_REPLAY.md) · 🇫🇮 [fi](../../../fi/docs/routing/REASONING_REPLAY.md) · 🇫🇷 [fr](../../../fr/docs/routing/REASONING_REPLAY.md) · 🇮🇳 [gu](../../../gu/docs/routing/REASONING_REPLAY.md) · 🇮🇱 [he](../../../he/docs/routing/REASONING_REPLAY.md) · 🇮🇳 [hi](../../../hi/docs/routing/REASONING_REPLAY.md) · 🇭🇺 [hu](../../../hu/docs/routing/REASONING_REPLAY.md) · 🇮🇩 [id](../../../id/docs/routing/REASONING_REPLAY.md) · 🇮🇩 [in](../../../in/docs/routing/REASONING_REPLAY.md) · 🇮🇹 [it](../../../it/docs/routing/REASONING_REPLAY.md) · 🇯🇵 [ja](../../../ja/docs/routing/REASONING_REPLAY.md) · 🇰🇷 [ko](../../../ko/docs/routing/REASONING_REPLAY.md) · 🇮🇳 [mr](../../../mr/docs/routing/REASONING_REPLAY.md) · 🇲🇾 [ms](../../../ms/docs/routing/REASONING_REPLAY.md) · 🇳🇱 [nl](../../../nl/docs/routing/REASONING_REPLAY.md) · 🇳🇴 [no](../../../no/docs/routing/REASONING_REPLAY.md) · 🇵🇭 [phi](../../../phi/docs/routing/REASONING_REPLAY.md) · 🇵🇱 [pl](../../../pl/docs/routing/REASONING_REPLAY.md) · 🇵🇹 [pt](../../../pt/docs/routing/REASONING_REPLAY.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/routing/REASONING_REPLAY.md) · 🇷🇴 [ro](../../../ro/docs/routing/REASONING_REPLAY.md) · 🇸🇰 [sk](../../../sk/docs/routing/REASONING_REPLAY.md) · 🇸🇪 [sv](../../../sv/docs/routing/REASONING_REPLAY.md) · 🇰🇪 [sw](../../../sw/docs/routing/REASONING_REPLAY.md) · 🇮🇳 [ta](../../../ta/docs/routing/REASONING_REPLAY.md) · 🇮🇳 [te](../../../te/docs/routing/REASONING_REPLAY.md) · 🇹🇭 [th](../../../th/docs/routing/REASONING_REPLAY.md) · 🇹🇷 [tr](../../../tr/docs/routing/REASONING_REPLAY.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/routing/REASONING_REPLAY.md) · 🇵🇰 [ur](../../../ur/docs/routing/REASONING_REPLAY.md) · 🇻🇳 [vi](../../../vi/docs/routing/REASONING_REPLAY.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/routing/REASONING_REPLAY.md)

---

---
title: "Кэш повтора рассуждений"
version: 3.8.2
lastUpdated: 2026-05-13
---

# Кэш повтора рассуждений

> **Источник истины:** `src/lib/db/reasoningCache.ts`, `open-sse/services/reasoningCache.ts`
> **Последнее обновление:** 2026-05-13 — v3.8.0

OmniRoute захватывает `reasoning_content`, созданный моделями в режиме мышления, и прозрачно воспроизводит его в многоходовых запросах, когда это требуется поставщику. Это устраняет ошибки HTTP 400, которые строгие поставщики возвращают, когда у клиента отсутствует рассуждение предыдущего хода.

## Зачем это существует

Некоторые поставщики в режиме мышления отклоняют следующий ход, если **предыдущее сообщение ассистента не включает оригинальный `reasoning_content`**. В ответ поставщик возвращает 400 с сообщениями вроде:

```
Param Incorrect: The reasoning_content in the thinking mode must be passed back to the API.
```

Но типичные клиенты (Cursor, Cline, Roo Code, OpenAI SDK) удаляют `reasoning_content` из истории, которую они воспроизводят. OmniRoute восстанавливает его из кэша на стороне сервера, чтобы запрос, который видит поставщик, был согласованным. Проблема #1628 ввела гибридную память/SQLite для сохранения кэша после перезапуска процесса.

## Архитектура

```
Ход N (ассистент генерирует):
  → ответ содержит reasoning_content + tool_calls
  → cacheReasoningFromAssistantMessage() записывает (память + БД), ключом является каждый tool_call.id
  → пересылает ответ клиенту (который может или не может сохранить reasoning)

Ход N+1 (клиент отправляет продолжение):
  → транслятор обнаруживает: requiresReasoningReplay(provider, model) === true
  → для каждого сообщения ассистента с tool_calls и без reasoning_content:
      lookupReasoning(toolCalls[0].id) → память → БД
      попадание → msg.reasoning_content = кэшированное; recordReplay()
      промах → msg.reasoning_content = "" (устаревший резервный вариант для более старых DeepSeek)
  → поставщик видит согласованную историю → нет 400
```

Захват происходит в `open-sse/handlers/chatCore.ts` (два места, около строк 4093 и 4380). Воспроизведение происходит в `open-sse/translator/index.ts` после приведения схемы, но перед отправкой.

## Хранилище — гибрид памяти + SQLite

Горячий путь использует `Map` в памяти (LRU по созданию), дополненный таблицей SQLite для восстановления после сбоев и отображения на панели мониторинга.

| Слой   | Реализация                                      | Назначение                              |
| ------ | ---------------------------------------------- | -------------------------------------- |
| Память | `Map` в `open-sse/services/reasoningCache.ts` | Быстрые поиски, удаляет старые при 2000    |
| БД     | таблица `reasoning_cache` (`src/lib/db/`)      | Сохраняет после перезапусков, управляет статистикой |

Записи идут в обе. Чтения сначала обращаются к памяти, затем к БД (попадания в БД поднимаются обратно в память). Ошибки БД не фатальны — кэш в памяти продолжает обслуживать горячий путь.

**Значения по умолчанию:**

- TTL: `2h` (`TTL_MS = 2 * 60 * 60 * 1000`)
- Максимальное количество записей в памяти: `2000` (`MAX_MEMORY_ENTRIES`)
- Удаление: старые `createdAt` сначала

## Схема базы данных

Миграция: `src/lib/db/migrations/033_create_reasoning_cache.sql`

```sql
CREATE TABLE IF NOT EXISTS reasoning_cache (
  tool_call_id   TEXT PRIMARY KEY,
  provider       TEXT NOT NULL,
  model          TEXT NOT NULL,
  reasoning      TEXT NOT NULL,
  char_count     INTEGER NOT NULL DEFAULT 0,
  created_at     TEXT NOT NULL DEFAULT (datetime('now')),
  expires_at     INTEGER NOT NULL
);
```

Индексы: `expires_at`, `provider`, `model`, `created_at`. `expires_at` хранится в виде секунд Unix epoch; слой SELECT нормализует устаревшие текстовые значения через `EXPIRES_AT_EPOCH_SQL`.

## Provider / Model Detection

Replay is enabled when `requiresReasoningReplay(provider, model)` returns `true`. The function checks two lists in `open-sse/services/reasoningCache.ts`.

**Provider IDs (exact match, case-insensitive):**

- `deepseek`
- `opencode-go`
- `siliconflow`
- `nebius`
- `deepinfra`
- `sambanova`
- `fireworks`
- `together`
- `xiaomi-mimo`

**Model regex patterns (case-insensitive):**

- `/deepseek-r1/i`
- `/deepseek-reasoner/i`
- `/deepseek-chat/i`
- `/kimi-k2/i`
- `/qwq/i`
- `/qwen.*think/i`
- `/glm.*think/i`
- `/^mimo[-.]?v\d/i`

Adding a new strict provider/model means appending to one of these lists and writing a unit test asserting replay injection. The PR description should cite the exact upstream 400 string that motivated the change.

## REST API

The cache exposes two endpoints under `src/app/api/cache/reasoning/route.ts`. Both require management authentication (`isAuthenticated` from `@/shared/utils/apiAuth`).

| Method | Endpoint                                                  | Description                                              |
| ------ | --------------------------------------------------------- | -------------------------------------------------------- |
| GET    | `/api/cache/reasoning`                                    | Stats + paginated entries                                |
| GET    | `/api/cache/reasoning?provider=deepseek&model=...&limit=` | Filtered listing (`limit` clamped to `[1, 200]`)         |
| DELETE | `/api/cache/reasoning`                                    | Clear everything (memory + DB) and reset hit/miss counts |
| DELETE | `/api/cache/reasoning?provider=deepseek`                  | Clear only entries for one provider                      |
| DELETE | `/api/cache/reasoning?toolCallId=call_abc`                | Delete a single entry                                    |

**GET response shape:**

```json
{
  "stats": {
    "memoryEntries": 12,
    "dbEntries": 47,
    "totalEntries": 47,
    "totalChars": 138291,
    "hits": 84,
    "misses": 6,
    "replays": 81,
    "replayRate": "90.0%",
    "byProvider": { "deepseek": { "entries": 32, "chars": 98412 } },
    "byModel": { "deepseek-reasoner": { "entries": 32, "chars": 98412 } },
    "oldestEntry": "2026-05-13T10:00:00.000Z",
    "newestEntry": "2026-05-13T11:42:11.000Z"
  },
  "entries": [
    {
      "toolCallId": "call_abc",
      "provider": "deepseek",
      "model": "deepseek-reasoner",
      "reasoning": "...",
      "charCount": 3128,
      "createdAt": "...",
      "expiresAt": "..."
    }
  ]
}
```

## Operational Notes

- **Cleanup:** `cleanupReasoningCache()` purges expired memory entries and runs `DELETE FROM reasoning_cache WHERE expires_at <= unixepoch('now')`. Health-check workers call this periodically.
- **Crash recovery:** After a restart, memory is empty but the DB still holds unexpired entries. The first lookup for a given `tool_call_id` is a DB hit; subsequent lookups are memory hits.
- **No reasoning, no cache:** `cacheReasoningFromAssistantMessage` returns `0` when the assistant message has no `reasoning_content` / `reasoning` field, so non-thinking responses cost nothing.
- **Non-strict providers:** When `requiresReasoningReplay` is `false` and the target format is OpenAI, the translator **strips** any `reasoning_content` field from outgoing messages — OpenAI Chat Completions does not accept it.

## Смотрите также

- [RESILIENCE_GUIDE.md](../architecture/RESILIENCE_GUIDE.md) — circuit breakers, cooldowns, model lockouts
- [TROUBLESHOOTING.md](../guides/TROUBLESHOOTING.md) — diagnosing upstream 400s
- Источник: `src/lib/db/reasoningCache.ts`, `open-sse/services/reasoningCache.ts`, `open-sse/translator/index.ts`
- Миграция: `src/lib/db/migrations/033_create_reasoning_cache.sql`
- API route: `src/app/api/cache/reasoning/route.ts`
- Оригинальный issue: #1628
