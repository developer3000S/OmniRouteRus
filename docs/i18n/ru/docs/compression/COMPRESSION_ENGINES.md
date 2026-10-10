# COMPRESSION_ENGINES (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../compression/COMPRESSION_ENGINES.md) · 🇸🇦 [ar](../../../ar/docs/compression/COMPRESSION_ENGINES.md) · 🇦🇿 [az](../../../az/docs/compression/COMPRESSION_ENGINES.md) · 🇧🇬 [bg](../../../bg/docs/compression/COMPRESSION_ENGINES.md) · 🇧🇩 [bn](../../../bn/docs/compression/COMPRESSION_ENGINES.md) · 🇨🇿 [cs](../../../cs/docs/compression/COMPRESSION_ENGINES.md) · 🇩🇰 [da](../../../da/docs/compression/COMPRESSION_ENGINES.md) · 🇩🇪 [de](../../../de/docs/compression/COMPRESSION_ENGINES.md) · 🇪🇸 [es](../../../es/docs/compression/COMPRESSION_ENGINES.md) · 🇮🇷 [fa](../../../fa/docs/compression/COMPRESSION_ENGINES.md) · 🇫🇮 [fi](../../../fi/docs/compression/COMPRESSION_ENGINES.md) · 🇫🇷 [fr](../../../fr/docs/compression/COMPRESSION_ENGINES.md) · 🇮🇳 [gu](../../../gu/docs/compression/COMPRESSION_ENGINES.md) · 🇮🇱 [he](../../../he/docs/compression/COMPRESSION_ENGINES.md) · 🇮🇳 [hi](../../../hi/docs/compression/COMPRESSION_ENGINES.md) · 🇭🇺 [hu](../../../hu/docs/compression/COMPRESSION_ENGINES.md) · 🇮🇩 [id](../../../id/docs/compression/COMPRESSION_ENGINES.md) · 🇮🇩 [in](../../../in/docs/compression/COMPRESSION_ENGINES.md) · 🇮🇹 [it](../../../it/docs/compression/COMPRESSION_ENGINES.md) · 🇯🇵 [ja](../../../ja/docs/compression/COMPRESSION_ENGINES.md) · 🇰🇷 [ko](../../../ko/docs/compression/COMPRESSION_ENGINES.md) · 🇮🇳 [mr](../../../mr/docs/compression/COMPRESSION_ENGINES.md) · 🇲🇾 [ms](../../../ms/docs/compression/COMPRESSION_ENGINES.md) · 🇳🇱 [nl](../../../nl/docs/compression/COMPRESSION_ENGINES.md) · 🇳🇴 [no](../../../no/docs/compression/COMPRESSION_ENGINES.md) · 🇵🇭 [phi](../../../phi/docs/compression/COMPRESSION_ENGINES.md) · 🇵🇱 [pl](../../../pl/docs/compression/COMPRESSION_ENGINES.md) · 🇵🇹 [pt](../../../pt/docs/compression/COMPRESSION_ENGINES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/compression/COMPRESSION_ENGINES.md) · 🇷🇴 [ro](../../../ro/docs/compression/COMPRESSION_ENGINES.md) · 🇸🇰 [sk](../../../sk/docs/compression/COMPRESSION_ENGINES.md) · 🇸🇪 [sv](../../../sv/docs/compression/COMPRESSION_ENGINES.md) · 🇰🇪 [sw](../../../sw/docs/compression/COMPRESSION_ENGINES.md) · 🇮🇳 [ta](../../../ta/docs/compression/COMPRESSION_ENGINES.md) · 🇮🇳 [te](../../../te/docs/compression/COMPRESSION_ENGINES.md) · 🇹🇭 [th](../../../th/docs/compression/COMPRESSION_ENGINES.md) · 🇹🇷 [tr](../../../tr/docs/compression/COMPRESSION_ENGINES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/compression/COMPRESSION_ENGINES.md) · 🇵🇰 [ur](../../../ur/docs/compression/COMPRESSION_ENGINES.md) · 🇻🇳 [vi](../../../vi/docs/compression/COMPRESSION_ENGINES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/compression/COMPRESSION_ENGINES.md)

---

---
title: "Движки сжатия"
version: 3.8.2
lastUpdated: 2026-05-13
---

# Движки сжатия

Сжатие OmniRoute построено на основе контрактов движков. Режим может запускать один движок напрямую
(`caveman` или `rtk`) или детерминированный стековый конвейер, который выполняет несколько движков по порядку.

## Режимы

| Режим         | Путь к движку                        | Предназначенный ввод                               |
| ------------ | ---------------------------------- | -------------------------------------------- |
| `off`        | none                               | Точное сохранение запроса                    |
| `lite`       | Caveman lite helpers               | Низкорисковая всегда-включенная очистка                   |
| `standard`   | Caveman                            | Конденсация естественного языка запроса         |
| `aggressive` | Caveman + history/tool summarizers | Длинные сессии чата                           |
| `ultra`      | Caveman + pruning helpers          | Восстановление пределов контекста                       |
| `rtk`        | RTK                                | Вывод терминала, оболочки, сборки, тестов и git |
| `stacked`    | Pipeline, default `rtk -> caveman` | Смешанные логи инструментов и проза, максимальные сбережения       |

## Реестр движков

Реестр находится в `open-sse/services/compression/engines/registry.ts`. Движки предоставляют общий
контракт:

- `id`: стабильный идентификатор движка, такой как `caveman` или `rtk`
- `apply(text, config)`: устаревший путь выполнения, используемый стековыми конвейерами
- `compress(input, config)`: основной путь выполнения, возвращающий текст + статистику
- `getConfigSchema()`: возвращает схему JSON-Schema допустимой конфигурации
- `validateConfig(config)`: возвращает `{ valid, errors[] }`

Регистрация использует `registerCompressionEngine(engine)` (или `registerEngine` для продвинутых случаев),
который вызывает `assertValidEngine()` и `validateConfig(defaultConfig)` перед принятием.
Используйте `unregisterCompressionEngine(id)`, чтобы удалить движок во время выполнения.

`strategySelector.ts` регистрирует встроенные движки перед запуском сжатия. Это позволяет предварительному просмотру,
сжатию во время выполнения, режиму стека, тестам и будущим движкам использовать один и тот же путь выполнения.

### Сжатие описания MCP (связанное)

Отдельный реестр сжимает метаданные описания инструментов MCP на уровне реестра — см.
`open-sse/mcp-server/descriptionCompressor.ts` и [MCP-SERVER.md](../frameworks/MCP-SERVER.md). Он повторно использует
правила Caveman, но работает с метаданными инструментов, а не с полезной нагрузкой запроса.

## Caveman

Режим Caveman фокусируется на семантическом конденсации обычного текста:

- сохраняет блоки кода, URL-адреса, JSON, пути и структурированные данные
- удаляет заполнители, уточнения, повторяющийся контекст и избыточные фразы
- поддерживает языково-ориентированные пакеты правил файлов в `open-sse/services/compression/rules/`
- остается доступным через устаревшие режимы `standard`, `aggressive` и `ultra`

Поверхность панели управления — `Dashboard -> Context & Cache -> Caveman`.

Caveman отчеты вверх по потоку сообщают о `~75%` меньшем количестве выходных токенов, `65%` средних сбережений вывода в бенчмарках
с диапазоном `22-87%`, и `~46%` инструмента ввода-сжатия. OmniRoute использует число ввода Caveman при документировании стековых сбережений запроса/контекста; режим вывода Caveman остается отдельной
функцией поведения ответа.

## RTK

RTK mode focuses on command and tool output:

- detects output classes such as `git status`, `git branch`, `git diff`, Vitest/Jest/Pytest,
  Cargo/Go tests, TypeScript/Vite/Webpack builds, ESLint, npm audit/installs, Docker logs,
  shell `find`/`grep`, stack traces, and generic logs
- applies 49 JSON filters from `open-sse/services/compression/engines/rtk/filters/`
- supports the RTK-style declarative pipeline: ANSI stripping, replace, match-output short-circuit,
  strip/keep lines, per-line truncation, head/tail/max-line truncation, and on-empty fallback
- supports trust-gated project filters in `.rtk/filters.json` and global filters in
  `DATA_DIR/rtk/filters.json`
- strips ANSI sequences, progress noise, repeated lines, and unhelpful boilerplate
- preserves actionable failures, warnings, summaries, changed files, and tail context
- can optionally retain redacted raw output for recovery/debugging through authenticated management
  routes

The dashboard surface is `Dashboard -> Context & Cache -> RTK`.

Operational details for custom filters, trust, verify, and raw-output recovery live in
[`RTK_COMPRESSION.md`](./RTK_COMPRESSION.md).

RTK upstream reports `60-90%` savings for command-output compression. Its README example shows a
30-minute Claude Code session going from `~118,000` tokens to `~23,900`, or `79.7%` saved.

## Stacked Pipelines

Stacked mode runs pipeline steps in order. The default is:

```txt
rtk -> caveman
```

Use this for coding-agent sessions where a prompt combines command output with human or assistant
prose. RTK reduces noisy tool logs first, then Caveman compresses remaining natural language.

Pipeline steps are configured with `stackedPipeline` in compression settings or through compression
combos.

When both engines reduce the same eligible payload, savings compound:

```txt
combined = 1 - (1 - RTK savings) * (1 - Caveman input savings)
average  = 1 - (1 - 0.80) * (1 - 0.46) = 89.2%
range    = 1 - (1 - 0.60..0.90) * (1 - 0.46) = 78.4-94.6%
```

## MCP Accessibility Tree Filter

The MCP accessibility-tree smart filter is a post-execution compression layer that runs on MCP
**tool results**, not on prompts or context. It targets the verbose accessibility-tree and browser
snapshot payloads returned by tools like Playwright, computer-use, and browser-automation MCP
servers.

### What it does

1. **Noise stripping** — removes empty generic/text entries (`- generic:`, `- text: ""`)
2. **Sibling collapse** — when ≥ `collapseThreshold` (default 30) consecutive lines are structural
   repeats, collapses them into the first `collapseKeepHead` (default 10) lines + a count summary +
   the last `collapseKeepTail` (default 5) lines
3. **Ref preservation** — `[ref=eXX]` anchors required by Playwright/computer-use are never touched
4. **Hard truncation** — if the text after collapse still exceeds `maxTextChars` (default 50,000),
   truncates with a navigation hint so the agent can continue working

### Engine location

```txt
open-sse/services/compression/engines/mcpAccessibility/
  index.ts            ← smartFilterText() entry point
  collapseRepeated.ts ← sibling-collapse algorithm
  constants.ts        ← DEFAULT_MCP_ACCESSIBILITY_CONFIG
```

### Configuration

Controlled by `compression.mcpAccessibility` in global settings (migration 056). Default config:

```json
{
  "enabled": true,
  "maxTextChars": 50000,
  "collapseThreshold": 30,
  "collapseKeepHead": 10,
  "collapseKeepTail": 5,
  "minLengthToProcess": 2000
}
```

The filter is only applied to tool-result payloads whose `type` is `"text"` and whose length
exceeds `minLengthToProcess`. It does not affect prompt compression or request payloads.

### Expected savings

60–80% on browser snapshot tool results, depending on page complexity. The collapse algorithm
is O(n) in line count and adds negligible latency.

### This filter vs the compression engines above

| Aspect      | Caveman / RTK / Stacked   | MCP accessibility filter               |
| ----------- | ------------------------- | -------------------------------------- |
| Target      | Request prompts / context | MCP tool results                       |
| Trigger     | Compression mode setting  | `compression.mcpAccessibility.enabled` |
| Scope       | All SSE messages          | Tool results only                      |
| Ref anchors | N/A                       | Preserved unconditionally              |

---

## Компрессия Комбо

Компрессия Комбо — это именованные профили сжатия, которые можно назначить маршрутизирующим комбо:

- `compression_combos`: хранит режим, конвейер, конфигурацию RTK, конфигурацию языка и маркер по умолчанию
- `compression_combo_assignments`: сопоставляет компрессионный комбо с маршрутизирующим комбо
- интеграция во время выполнения разрешает назначенный компрессионный комбо перед переопределением общих комбо
- аналитика включает `compression_combo_id` и `engine`

Панель управления: `Dashboard -> Context & Cache -> Compression Combos`.

## API Поверхность

| Маршрут                                  | Назначение                                                          |
| -------------------------------------- | ---------------------------------------------------------------- |
| `/api/settings/compression`            | Глобальные настройки сжатия (включая конфигурацию `mcpAccessibility`) |
| `/api/compression/preview`             | Предварительный просмотр любого режима сжатия                                     |
| `/api/compression/language-packs`      | Список доступных языковых пакетов Caveman                            |
| `/api/context/caveman/config`          | Псевдоним настроек Caveman                                           |
| `/api/context/rtk/config`              | Настройки и значения по умолчанию RTK                                        |
| `/api/context/rtk/filters`             | Каталог фильтров RTK                                               |
| `/api/context/rtk/test`                | Конечная точка для предварительного просмотра/тестирования RTK                                        |
| `/api/context/rtk/raw-output/[id]`     | Аутентифицированное восстановление необработанного вывода с удалением конфиденциальной информации                       |
| `/api/context/combos`                  | CRUD компрессионных комбо                                           |
| `/api/context/combos/[id]/assignments` | CRUD назначений маршрутизирующих комбо                                    |
| `/api/context/analytics`               | Псевдоним аналитики сжатия                                      |

Маршруты управления требуют аутентификации управления или проверки политики API-ключа.

## Инструменты MCP

Компрессия предоставляет пять инструментов MCP:

| Инструмент                                | Область               | Назначение                          |
| ----------------------------------- | ------------------- | -------------------------------- |
| `omniroute_compression_status`      | `read:compression`  | Настройки, аналитика, статистика кэша |
| `omniroute_compression_configure`   | `write:compression` | Обновление глобальных настроек           |
| `omniroute_set_compression_engine`  | `write:compression` | Установка режима и необязательного конвейера   |
| `omniroute_list_compression_combos` | `read:compression`  | Список компрессионных комбо          |
| `omniroute_compression_combo_stats` | `read:compression`  | Чтение аналитики комбо/движка      |

## Валидация

Фокусированные ворота для этой области:

```bash
node --import tsx/esm --test tests/unit/compression/rtk-*.test.ts tests/unit/compression/pipeline-integration.test.ts tests/unit/compression/context-compression-api.test.ts
node --import tsx/esm --test tests/unit/compression/*.test.ts tests/golden-set/*.test.ts tests/integration/compression-pipeline.test.ts tests/unit/api/compression/compression-api.test.ts
node --import tsx/esm --test tests/unit/compression/mcpAccessibility*.test.ts
npm run typecheck:core
```
