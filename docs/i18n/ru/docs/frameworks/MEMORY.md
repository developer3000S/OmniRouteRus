# MEMORY (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../frameworks/MEMORY.md) · 🇸🇦 [ar](../../../ar/docs/frameworks/MEMORY.md) · 🇦🇿 [az](../../../az/docs/frameworks/MEMORY.md) · 🇧🇬 [bg](../../../bg/docs/frameworks/MEMORY.md) · 🇧🇩 [bn](../../../bn/docs/frameworks/MEMORY.md) · 🇨🇿 [cs](../../../cs/docs/frameworks/MEMORY.md) · 🇩🇰 [da](../../../da/docs/frameworks/MEMORY.md) · 🇩🇪 [de](../../../de/docs/frameworks/MEMORY.md) · 🇪🇸 [es](../../../es/docs/frameworks/MEMORY.md) · 🇮🇷 [fa](../../../fa/docs/frameworks/MEMORY.md) · 🇫🇮 [fi](../../../fi/docs/frameworks/MEMORY.md) · 🇫🇷 [fr](../../../fr/docs/frameworks/MEMORY.md) · 🇮🇳 [gu](../../../gu/docs/frameworks/MEMORY.md) · 🇮🇱 [he](../../../he/docs/frameworks/MEMORY.md) · 🇮🇳 [hi](../../../hi/docs/frameworks/MEMORY.md) · 🇭🇺 [hu](../../../hu/docs/frameworks/MEMORY.md) · 🇮🇩 [id](../../../id/docs/frameworks/MEMORY.md) · 🇮🇩 [in](../../../in/docs/frameworks/MEMORY.md) · 🇮🇹 [it](../../../it/docs/frameworks/MEMORY.md) · 🇯🇵 [ja](../../../ja/docs/frameworks/MEMORY.md) · 🇰🇷 [ko](../../../ko/docs/frameworks/MEMORY.md) · 🇮🇳 [mr](../../../mr/docs/frameworks/MEMORY.md) · 🇲🇾 [ms](../../../ms/docs/frameworks/MEMORY.md) · 🇳🇱 [nl](../../../nl/docs/frameworks/MEMORY.md) · 🇳🇴 [no](../../../no/docs/frameworks/MEMORY.md) · 🇵🇭 [phi](../../../phi/docs/frameworks/MEMORY.md) · 🇵🇱 [pl](../../../pl/docs/frameworks/MEMORY.md) · 🇵🇹 [pt](../../../pt/docs/frameworks/MEMORY.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/frameworks/MEMORY.md) · 🇷🇴 [ro](../../../ro/docs/frameworks/MEMORY.md) · 🇸🇰 [sk](../../../sk/docs/frameworks/MEMORY.md) · 🇸🇪 [sv](../../../sv/docs/frameworks/MEMORY.md) · 🇰🇪 [sw](../../../sw/docs/frameworks/MEMORY.md) · 🇮🇳 [ta](../../../ta/docs/frameworks/MEMORY.md) · 🇮🇳 [te](../../../te/docs/frameworks/MEMORY.md) · 🇹🇭 [th](../../../th/docs/frameworks/MEMORY.md) · 🇹🇷 [tr](../../../tr/docs/frameworks/MEMORY.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/frameworks/MEMORY.md) · 🇵🇰 [ur](../../../ur/docs/frameworks/MEMORY.md) · 🇻🇳 [vi](../../../vi/docs/frameworks/MEMORY.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/frameworks/MEMORY.md)

---

---
title: "Система памяти"
version: 3.8.2
lastUpdated: 2026-05-13
---

# Система памяти

> **Источник истины:** `src/lib/memory/` и `src/app/api/memory/`
> **Последнее обновление:** 2026-05-13 — v3.8.0

OmniRoute предоставляет постоянную память для бесед, ключевую по API-ключу (и
опционально по идентификатору сессии). Память извлекается автоматически из ответов LLM
через легковесное сопоставление с регулярными выражениями и вставляется обратно в последующие
запросы в качестве ведущего системного сообщения (или первого пользовательского сообщения для провайдеров, которые
отклоняют роль системы).

Память **ограничена по API-ключу**, а не по пользователю — каждый запрос, аутентифицированный
с тем же API-ключом, использует один и тот же пул памяти, с дополнительным ограничением по `sessionId`.

## Архитектура

```
Клиент → /v1/chat/completions (apiKeyInfo разрешается выше по цепочке)
  → handleChatCore() [open-sse/handlers/chatCore.ts]
    → resolveMemoryOwnerId(apiKeyInfo)        # извлекает id
    → getMemorySettings()                     # кэшированные настройки
    → shouldInjectMemory(body, {enabled})     # шлюз
    → retrieveMemories(apiKeyId, config)      # SQL + опционально FTS5
    → injectMemory(body, memories, provider)  # системное или пользовательское сообщение
  → вызов провайдера выше по цепочке
  → при ответе: extractFacts(text, apiKeyId, sessionId)  # неблокирующий
    → setImmediate → createMemory(fact) для каждого совпадения
```

Места вызова для вставки и извлечения памяти зашиты в
`open-sse/handlers/chatCore.ts` (ищите `retrieveMemories`, `injectMemory`,
и `extractFacts`).

## Слои хранения

### Основной: SQLite (`memories` таблица)

Создается миграцией `015_create_memories.sql`:

| Столбец                     | Тип                | Примечания                                                           |
| --------------------------- | ------------------ | -------------------------------------------------------------------- |
| `id`                        | `TEXT PRIMARY KEY` | UUID, генерируется через `crypto.randomUUID()`                       |
| `api_key_id`                | `TEXT NOT NULL`    | API-ключ владельца                                                   |
| `session_id`                | `TEXT`             | Опциональное ограничение по сессии                                  |
| `type`                      | `TEXT NOT NULL`    | Один из `factual`, `episodic`, `procedural`, `semantic`              |
| `key`                       | `TEXT`             | Стабильный ключ для upsert, например `preference:i_prefer_python`     |
| `content`                   | `TEXT NOT NULL`    | Текст факта                                                          |
| `metadata`                  | `TEXT`             | JSON-объект (категория, extractedAt, источник, ...)                  |
| `created_at` / `updated_at` | `TEXT`             | Строки в формате ISO 8601                                           |
| `expires_at`                | `TEXT`             | Опциональная дата истечения; `NULL` означает постоянную память       |
| `memory_id`                 | `INTEGER UNIQUE`   | Добавлен миграцией `023_fix_memory_fts_uuid.sql` для связи UUID ↔ FTS5 rowids |

Индексы: `api_key_id`, `session_id`, `type`, `expires_at`, а также уникальный
индекс `memory_id`.

**Upsert-семантика**: `createMemory()` ищет существующую строку с тем же
`(api_key_id, key)` и обновляет её при нахождении (слияние `metadata` через поверхностное распространение). Это предотвращает неограниченное увеличение таблицы для повторяющихся предпочтений.

### Полнотекстовый поиск (`memory_fts` виртуальная таблица)

`022_add_memory_fts5.sql` создает виртуальную таблицу FTS5 над `content` и
`key`. `023_fix_memory_fts_uuid.sql` исправляет реальную ошибку, когда первичный ключ UUID
не соединялся с целочисленным rowid FTS5 — миграция добавляет столбец
`memory_id`, пересоздает таблицу FTS и подключает триггеры
(`memory_fts_ai`, `memory_fts_ad`, `memory_fts_au`), которые поддерживают синхронизацию FTS при
INSERT, DELETE и UPDATE.

Используется в `retrieval.ts` для стратегий `semantic` и `hybrid` (см. ниже).
Код извлечения защищен `hasTable("memory_fts")` и переходит на хронологический порядок, если таблица FTS отсутствует или запрос FTS вызывает ошибку.

### Опционально: Qdrant (векторное хранилище)

`src/lib/memory/qdrant.ts` реализует опциональную интеграцию с Qdrant для истинной семантической памяти:

- `upsertSemanticMemoryPoint()` — встраивает `key + content` с помощью настроенной модели встраивания, гарантирует существование коллекции (создает косинусные векторы при первом использовании) и вставляет точку с полезной нагрузкой `{memoryId, apiKeyId, sessionId, key, content, metadata, createdAtUnix, expiresAtUnix}`.
- `searchSemanticMemory(query, topK, scope)` — встраивает запрос, ищет в коллекции, отфильтрованной по `kind = "omniroute_memory"` и, при необходимости, по `apiKeyId` / `sessionId`. Ограничивает `topK` до `[1, 20]`.
- `deleteSemanticMemoryPoint(id)` — удаление одной точки.
- `cleanupSemanticMemoryPoints({retentionDays})` — массовое удаление точек, у которых `expiresAtUnix` в прошлом или `createdAtUnix` старше, чем отсечка удержания. Сначала подсчитывает, чтобы панель управления могла показать фактические числа.
- `checkQdrantHealth()` — `GET /readyz` проверка здоровья с задержкой.

> **TODO**: Конвейер чата (`chatCore.ts`) и реализация `retrieveMemories()` в дереве не вызывают `upsertSemanticMemoryPoint` или `searchSemanticMemory`. Интеграция Qdrant включена через флаг `qdrantEnabled` в настройках, но на момент написания результаты `searchSemanticMemory` не объединяются в извлечение — стратегии `semantic`/`hybrid` используют только SQLite FTS5. Интерфейс настроек в `dashboard/settings → MemorySkillsTab` отображает конфигурацию Qdrant, здоровье, тест поиска и очистку, но соответствующие маршруты `/api/settings/qdrant`, `/api/settings/qdrant/health`, `/api/settings/qdrant/search` и `/api/settings/qdrant/cleanup` ссылаются из интерфейса, но **не присутствуют** под `src/app/api/settings/qdrant/` (только `embedding-models/` подключен). Рассматривайте Qdrant как предварительную/опциональную трубу.

## Типы памяти

`MemoryType` (`src/lib/memory/types.ts`):

| Тип          | Используется для                                             |
| ------------ | ------------------------------------------------------------ |
| `factual`    | Предпочтения, стабильные факты пользователя, поведенческие паттерны |
| `episodic`   | Решения, связанные с конкретным моментом ("Я выбрал Postgres") |
| `procedural` | Память о рабочих процессах / инструкциях (зарезервировано; нет автоматического извлекателя) |
| `semantic`   | Зарезервировано для записей векторного хранилища             |

Стратегия получения `MemoryConfig` может быть одной из `exact`, `semantic` или `hybrid`,
а область действия — одной из `session`, `apiKey` или `global`. Значение по умолчанию из
`getMemorySettings()` — `apiKey`.

## Извлечение фактов (`extraction.ts`)

Извлечение **основано на регулярных выражениях**, а не на LLM — оно выполняется в процессе с
использованием `setImmediate()`, поэтому никогда не блокирует поток ответа:

- **Шаблоны предпочтений** → `MemoryType.FACTUAL`
  (например, `Я предпочитаю …`, `Мне очень нравится …`, `мое любимое …`, `Я ненавижу …`)
- **Шаблоны решений** → `MemoryType.EPISODIC`
  (например, `Я буду использовать …`, `Я выбрал …`, `Я пошел на …`, `Я собираюсь принять …`)
- **Шаблоны паттернов** → `MemoryType.FACTUAL`
  (например, `Я обычно …`, `Я всегда …`, `Я склонен к …`)

Каждое совпадение очищается (`trim`, сжатие пробелов, ограничено 500 символами),
дублируется в пределах пакета через стабильный `factKey(category, content)`, и
сохраняется через `createMemory()` с метаданными
`{category, extractedAt, source: "llm_response"}`. Входной текст ограничен
64 КиБ (`MAX_EXTRACTION_TEXT_LENGTH`) — при более длинном тексте используется **хвост**,
чтобы наиболее свежие данные от помощника всегда участвовали.

`extractFactsFromText(text)` экспортируется для тестов и возвращает структурированные
факты без их сохранения.

## Получение (`retrieval.ts`)

`retrieveMemories(apiKeyId, config)` является основной точкой входа. Она:

1. Нормализует и проверяет конфигурацию через `MemoryConfigSchema`.
2. Возвращает `[]` немедленно, если `enabled` установлен в false или `maxTokens <= 0`.
3. Ограничивает `maxTokens` диапазоном `[1, 8000]`.
4. Определяет, существует ли современная таблица `memories` (в отличие от устаревшей таблицы `memory`),
   чтобы старые базы данных продолжали работать.
5. Создает базовый запрос с защитой от истечения срока действия
   (`expires_at IS NULL OR datetime(expires_at) > datetime('now')`), необязательной областью сеанса и необязательным
   `retentionDays` отсечением.
6. Разветвляется в зависимости от стратегии:
   - **`exact`** (по умолчанию): хронологический порядок `ORDER BY created_at DESC LIMIT 100`.
   - **`semantic`**: если `config.query` и `memory_fts` существуют, JOIN
     `memory_fts MATCH ?` и упорядочивание по рангу FTS; возвращаемся к хронологическому порядку,
     когда FTS возвращает 0 строк.
   - **`hybrid`**: объединение результатов FTS (высокая релевантность) и хронологического набора,
     дедуплицированного по id.
7. Вычисляет оценку релевантности ключевых слов (`getRelevanceScore`) по
   `content`, `key` и `metadata` JSON, если предоставлен запрос. Строки с
   нулевой оценкой фильтруются.
8. Сортирует по убыванию оценки, затем по `createdAt` убыванию.
9. Проходит по ранжированному списку и принимает записи, пока выполняется условие
   `estimateTokens(content)` (≈ `length / 4`) остается в пределах бюджета. Всегда
   возвращает хотя бы одну запись, если есть совпадения.

`estimateTokens` экспортируется и используется для получения, суммирования и инструмента MCP
`omniroute_memory_search`.

## Внедрение (`injection.ts`)

`injectMemory(request, memories, provider)`:

1. Объединяет все содержимое памяти в одну строку `Memory context: …`.
2. Выбирает стратегию по имени провайдера:
   - **Системное сообщение** (по умолчанию для OpenAI, Anthropic, Gemini, …) —
     добавляет `{role: "system", content: memoryText}` перед любыми существующими
     системными сообщениями, чтобы пользовательские системные подсказки все еще
     имели приоритет.
   - **Пользовательское сообщение** (резервный вариант) — для провайдеров в
     `PROVIDERS_WITHOUT_SYSTEM_MESSAGE`: `o1`, `o1-mini`, `o1-preview`,
     `glm`, `glmt`, `glm-cn`, `zai`, `qianfan`. Эти провайдеры отклоняют роль
     системы и в противном случае вернут 400 (см. проблему #1701 для GLM/Zhipu).
3. Логирует количество, стратегию и модель под `memory.injection.injected`.

`providerSupportsSystemMessage(provider)` экспортируется для вызывающих сторон,
которые нуждаются в собственных решениях маршрутизации. Неизвестные провайдеры
по умолчанию возвращают `true` (разрешена роль системы) для безопасности.

## Настройки (`settings.ts`)

Конфигурация памяти **хранится в таблице настроек БД**, а не в переменных окружения.
`getMemorySettings()` читает из `getSettings()` и кэширует результат в процессе;
`invalidateMemorySettingsCache()` вызывается маршрутом PUT настроек после записи.

| Ключ БД                | Тип     | По умолчанию                                      | Элемент управления UI                          |
| --------------------- | ------- | -------------------------------------------------- | ----------------------------------------------- |
| `memoryEnabled`       | boolean | `true`                                             | Включение/выключение памяти                    |
| `memoryMaxTokens`     | integer | `2000` (диапазон `0–16000`)                         | Бюджет токенов для внедрения                   |
| `memoryRetentionDays` | integer | `30` (диапазон `1–365`)                             | Окно удержания                                 |
| `memoryStrategy`      | enum    | `"hybrid"` (один из `recent`, `semantic`, `hybrid`) | Стратегия извлечения                           |
| `skillsEnabled`       | boolean | `false`                                            | Включение внедрения навыков по ключу (см. SKILLS.md) |

Примечание: стратегия UI `"recent"` отображается на внутреннюю стратегию `"exact"`
через `toMemoryRetrievalConfig()` (хронологический порядок).

Относящиеся к Qdrant ключи БД (`qdrantEnabled`, `qdrantHost`, `qdrantPort`,
`qdrantApiKey`, `qdrantCollection` по умолчанию `"omniroute_memory"`,
`qdrantEmbeddingModel` по умолчанию `"openai/text-embedding-3-small"`) читаются
функцией `normalizeQdrantConfig()` в `qdrant.ts`.

Нет переменных окружения `MEMORY_*` или `QDRANT_*` — все настройки экземпляра
хранятся в БД. `OMNIROUTE_MEMORY_MB` (закомментировано в `.env.example`) не
связано и относится к размеру кучи Node.

## Суммаризация (`summarization.ts`)

`summarizeMemories(apiKeyId, sessionId?, maxTokens = 4000)` сжимает старые
содержимое, когда общий объем токенов по памяти ключа превышает бюджет. Он
перебирает строки по `created_at` в порядке DESC, сохраняет строки, которые
помещаются, и для остальных заменяет `content` на первые три предложения
оригинального текста. `tokensSaved` — это разница в `estimateTokens` между
старым и новым содержимым.

Этот процесс **доступен, но не вызывается автоматически** в текущем чат-конвейере —
вызовите его из cron, административного действия или `MemoryConfig.autoSummarize`,
если вам нужна постоянная компрессия. Потеря данных односторонняя: оригинальный
текст перезаписывается.

## REST API

Все конечные точки требуют аутентификации управления (`requireManagementAuth`).

| Метод    | Путь                   | Описание                                                                                                                                                                  |
| -------- | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `GET`    | `/api/memory`          | Список с пагинацией и фильтрами: `apiKeyId`, `type`, `sessionId`, `q`, `limit`, `page`, `offset`. Ответ включает `stats.total` и `stats.byType`                             |
| `POST`   | `/api/memory`          | Создать запись (валидируется Zod: `content`, `key`, опционально `type`, `sessionId`, `apiKeyId`, `metadata`, `expiresAt`). Вызывает `createMemory()`, который обновляет или вставляет запись по `(apiKeyId, key)` |
| `GET`    | `/api/memory/[id]`     | Получить одну запись по UUID                                                                                                                                                 |
| `DELETE` | `/api/memory/[id]`     | Удалить запись; возвращает 404, если запись отсутствует                                                                                                                                    |
| `GET`    | `/api/memory/health`   | Запускает `verifyExtractionPipeline("health-check")` — цикл create→list→delete для подтверждения работоспособности хранилища. Возвращает `{working, latencyMs, error?}`                        |
| `GET`    | `/api/settings/memory` | Текущие нормализованные `MemorySettings`                                                                                                                                          |
| `PUT`    | `/api/settings/memory` | Обновить одно или несколько из `enabled`, `maxTokens`, `retentionDays`, `strategy`, `skillsEnabled`                                                                                   |

Список запросов `/api/memory` поддерживает либо пагинацию на основе `page`
(`parsePaginationParams`) **или** сырой `offset` — когда `offset` присутствует, он имеет приоритет, и вычисляется производный `page` для формы ответа.

## MCP Tools (`open-sse/mcp-server/tools/memoryTools.ts`)

Когда сервер MCP включен, регистрируются три инструмента памяти:

- `omniroute_memory_search` — `{apiKeyId, query?, type?, maxTokens?, limit?}`
  → оборачивает `retrieveMemories()` с `retrievalStrategy: "exact"`, опционально фильтрует по `type`, и отображает `totalTokens`.
- `omniroute_memory_add` — `{apiKeyId, sessionId?, type, key, content,
metadata?}` → оборачивает `createMemory()`.
- `omniroute_memory_clear` — `{apiKeyId, type?, olderThan?}` → перечисляет соответствующие записи, опционально фильтрует по временной метке создания, затем удаляет каждую через `deleteMemory()`.

См. [MCP-SERVER.md](./MCP-SERVER.md) для деталей транспорта и области применения.

## Панель управления

`src/app/(dashboard)/dashboard/memory/page.tsx` предоставляет:

- Список в реальном времени, поиск и пагинацию (с задержкой 300 мс).
- Фильтр по типу (`factual` / `episodic` / `procedural` / `semantic` / все).
- Модальное окно добавления памяти (ключ, содержимое, тип).
- Удаление по строке.
- Экспорт JSON текущей страницы; импорт JSON через выбор файла.
- Зеленая/красная точка здоровья, управляемая `GET /api/memory/health`.
- Карточки статистики: `totalEntries`, `tokensUsed`, `hitRate` (последние две приходят из полезной нагрузки статистики API).

Настройки памяти и Qdrant находятся в
`/dashboard/settings → Memory & Skills` (`MemorySkillsTab.tsx`).

## Кэширование

`src/lib/memory/store.ts` поддерживает встроенный LRU-кеш для операций чтения `getMemory(id)` (`MEMORY_CACHE_TTL = 5 мин`, `MEMORY_MAX_CACHE_SIZE = 10 000` с вытеснением 20% самых старых записей), а также общий слой кэша ключ/значение `memoryCache` (`src/lib/memory/cache.ts`) с методами `get`/`set`/`invalidate`, используемыми вызывающими для создания собственного кэша (LRU на 1 000 записей, стандартный TTL 5 мин).

## Конфиденциальность и жизненный цикл

- Владение памятью определяется идентификатором API-ключа (`resolveMemoryOwnerId` в `chatCore.ts`). Без `apiKeyInfo.id` ни получение, ни внедрение, ни извлечение не выполняются.
- Записи с будущей датой `expires_at` исключаются из получения; старые записи, превышающие `retentionDays`, исключаются из `retrieveMemories` благодаря условию `created_at >= cutoff`.
- Для жесткого удаления используйте `DELETE /api/memory/[id]` или `omniroute_memory_clear`.
- Извлечение выполняется в фоновом режиме через `setImmediate`; ошибки логируются под `memory.extraction.background.failed` и никогда не отображаются вызывающему.
- Проверка в цикле (`verifyExtractionPipeline`) очищает свои тестовые записи в блоке `finally`.

## Смотрите также

- [SKILLS.md](./SKILLS.md) — настройка `skillsEnabled` внедряет определения инструментов вместе с памятью.
- [MCP-SERVER.md](./MCP-SERVER.md) — транспорт MCP / области.
- [API_REFERENCE.md](../reference/API_REFERENCE.md) — более широкий API.
- Исходные модули:
  - `src/lib/memory/types.ts`, `schemas.ts`
  - `src/lib/memory/store.ts`, `retrieval.ts`, `injection.ts`
  - `src/lib/memory/extraction.ts`, `summarization.ts`, `verify.ts`
  - `src/lib/memory/settings.ts`, `qdrant.ts`, `cache.ts`
  - `src/lib/db/migrations/015_create_memories.sql`,
    `022_add_memory_fts5.sql`, `023_fix_memory_fts_uuid.sql`
  - `src/app/api/memory/route.ts`, `[id]/route.ts`, `health/route.ts`
  - `src/app/api/settings/memory/route.ts`
  - `open-sse/handlers/chatCore.ts` (внедрение / извлечение)
  - `open-sse/mcp-server/tools/memoryTools.ts`
