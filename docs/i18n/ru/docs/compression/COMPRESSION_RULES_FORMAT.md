# COMPRESSION_RULES_FORMAT (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../compression/COMPRESSION_RULES_FORMAT.md) · 🇸🇦 [ar](../../../ar/docs/compression/COMPRESSION_RULES_FORMAT.md) · 🇦🇿 [az](../../../az/docs/compression/COMPRESSION_RULES_FORMAT.md) · 🇧🇬 [bg](../../../bg/docs/compression/COMPRESSION_RULES_FORMAT.md) · 🇧🇩 [bn](../../../bn/docs/compression/COMPRESSION_RULES_FORMAT.md) · 🇨🇿 [cs](../../../cs/docs/compression/COMPRESSION_RULES_FORMAT.md) · 🇩🇰 [da](../../../da/docs/compression/COMPRESSION_RULES_FORMAT.md) · 🇩🇪 [de](../../../de/docs/compression/COMPRESSION_RULES_FORMAT.md) · 🇪🇸 [es](../../../es/docs/compression/COMPRESSION_RULES_FORMAT.md) · 🇮🇷 [fa](../../../fa/docs/compression/COMPRESSION_RULES_FORMAT.md) · 🇫🇮 [fi](../../../fi/docs/compression/COMPRESSION_RULES_FORMAT.md) · 🇫🇷 [fr](../../../fr/docs/compression/COMPRESSION_RULES_FORMAT.md) · 🇮🇳 [gu](../../../gu/docs/compression/COMPRESSION_RULES_FORMAT.md) · 🇮🇱 [he](../../../he/docs/compression/COMPRESSION_RULES_FORMAT.md) · 🇮🇳 [hi](../../../hi/docs/compression/COMPRESSION_RULES_FORMAT.md) · 🇭🇺 [hu](../../../hu/docs/compression/COMPRESSION_RULES_FORMAT.md) · 🇮🇩 [id](../../../id/docs/compression/COMPRESSION_RULES_FORMAT.md) · 🇮🇩 [in](../../../in/docs/compression/COMPRESSION_RULES_FORMAT.md) · 🇮🇹 [it](../../../it/docs/compression/COMPRESSION_RULES_FORMAT.md) · 🇯🇵 [ja](../../../ja/docs/compression/COMPRESSION_RULES_FORMAT.md) · 🇰🇷 [ko](../../../ko/docs/compression/COMPRESSION_RULES_FORMAT.md) · 🇮🇳 [mr](../../../mr/docs/compression/COMPRESSION_RULES_FORMAT.md) · 🇲🇾 [ms](../../../ms/docs/compression/COMPRESSION_RULES_FORMAT.md) · 🇳🇱 [nl](../../../nl/docs/compression/COMPRESSION_RULES_FORMAT.md) · 🇳🇴 [no](../../../no/docs/compression/COMPRESSION_RULES_FORMAT.md) · 🇵🇭 [phi](../../../phi/docs/compression/COMPRESSION_RULES_FORMAT.md) · 🇵🇱 [pl](../../../pl/docs/compression/COMPRESSION_RULES_FORMAT.md) · 🇵🇹 [pt](../../../pt/docs/compression/COMPRESSION_RULES_FORMAT.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/compression/COMPRESSION_RULES_FORMAT.md) · 🇷🇴 [ro](../../../ro/docs/compression/COMPRESSION_RULES_FORMAT.md) · 🇸🇰 [sk](../../../sk/docs/compression/COMPRESSION_RULES_FORMAT.md) · 🇸🇪 [sv](../../../sv/docs/compression/COMPRESSION_RULES_FORMAT.md) · 🇰🇪 [sw](../../../sw/docs/compression/COMPRESSION_RULES_FORMAT.md) · 🇮🇳 [ta](../../../ta/docs/compression/COMPRESSION_RULES_FORMAT.md) · 🇮🇳 [te](../../../te/docs/compression/COMPRESSION_RULES_FORMAT.md) · 🇹🇭 [th](../../../th/docs/compression/COMPRESSION_RULES_FORMAT.md) · 🇹🇷 [tr](../../../tr/docs/compression/COMPRESSION_RULES_FORMAT.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/compression/COMPRESSION_RULES_FORMAT.md) · 🇵🇰 [ur](../../../ur/docs/compression/COMPRESSION_RULES_FORMAT.md) · 🇻🇳 [vi](../../../vi/docs/compression/COMPRESSION_RULES_FORMAT.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/compression/COMPRESSION_RULES_FORMAT.md)

---

---
title: "Формат правил сжатия"
version: 3.8.2
lastUpdated: 2026-05-13
---

# Формат правил сжатия

Правила сжатия — это JSON-файлы, загружаемые во время выполнения. Они специально предназначены для хранения данных, чтобы новые языковые пакеты и фильтры команд RTK можно было проверять без изменения исходного кода движка.

> **Каноническая схема (источник истины):** [`open-sse/services/compression/rules/_schema.json`](../../open-sse/services/compression/rules/_schema.json) (JSON Schema draft 2020-12).
> Примеры ниже иллюстративны — в случае сомнений проверьте ваш пакет на соответствие `_schema.json`.

## Правила сжатия для "каменного века"

Правила сжатия для "каменного века" находятся в:

```txt
open-sse/services/compression/rules/<language>/<pack>.json
```

Каждый пакет содержит замены, которые применяются к обычному тексту после изоляции защищенных регионов.

```json
{
  "language": "en",
  "category": "filler",
  "rules": [
    {
      "name": "question_to_directive",
      "pattern": "\\b(?:Can you explain why|Could you show me how)\\b\\s*",
      "replacement": "Explain why ",
      "replacementMap": {
        "can you explain why": "Explain why ",
        "could you show me how": "Show how "
      },
      "flags": "gi",
      "context": "all",
      "category": "context",
      "minIntensity": "lite",
      "description": "Преобразование избыточных вопросов в прямые запросы."
    }
  ]
}
```

### Поля правил сжатия для "каменного века"

| Поле                     | Обязательно | Описание                                                      |
| ------------------------ | -------- | ---------------------------------------------------------------- |
| `language`               | да      | Ключ языка в формате BCP-47, например `en`, `pt-BR`, `es`             |
| `category`               | да      | Категория пакета, например `filler` или `dedup` |
| `rules`                  | да      | Массив правил замены с использованием регулярных выражений                                 |
| `rules[].name`           | да      | Устойчивое имя правила                                                 |
| `rules[].pattern`        | да      | Исходный код регулярного выражения JavaScript                                          |
| `rules[].flags`          | нет       | Флаги регулярных выражений JavaScript; по умолчанию `gi`                             |
| `rules[].replacement`    | нет       | Строка замены или резервная замена, если `replacementMap` не найдет соответствие      |
| `rules[].replacementMap` | нет       | Замены, специфичные для совпадений, ключи которых — нормализованный текст совпадений     |
| `rules[].context`        | нет       | `all`, `user`, `assistant`, или `system`; по умолчанию `all`           |
| `rules[].category`       | нет       | `filler`, `context`, `structural`, `dedup`, `terse`, или `ultra`  |
| `rules[].minIntensity`   | нет       | `lite`, `full`, или `ultra`; по умолчанию `lite`                       |
| `rules[].description`    | нет       | Человекочитаемое описание правила                                      |

Используйте `flags`, когда важно чувствительное к регистру сопоставление, например, удаление статей перед строчным текстом без удаления `the OpenAI API`. Используйте `replacementMap`, когда одно регулярное выражение имеет несколько альтернатив, которые требуют разных выходных данных; это позволяет сохранить данные в JSON-файлах правил, сохраняя при этом поведение более богатых встроенных функций замены на TypeScript.

## RTK Фильтры

RTK фильтры находятся в:

```txt
open-sse/services/compression/engines/rtk/filters/<filter>.json
```

Каждый фильтр описывает, как распознать и сжать семейство выходных данных команды.

```json
{
  "id": "test-vitest",
  "label": "Vitest output",
  "category": "test",
  "priority": 92,
  "match": {
    "outputTypes": ["test-vitest"],
    "commands": ["vitest", "npm test", "npm run test"],
    "patterns": ["\\bFAIL\\b", "\\bPASS\\b", "\\bTest Files\\b"]
  },
  "rules": {
    "stripAnsi": true,
    "replace": [{ "pattern": "\\s+\\[[0-9]+ms\\]", "replacement": "" }],
    "matchOutput": [
      { "pattern": "All tests passed", "message": "vitest: ok", "unless": "FAIL|Error:" }
    ],
    "includePatterns": ["FAIL", "Error:", "Test Files", "Tests"],
    "dropPatterns": ["^\\s*$", "Duration\\s+\\d+"],
    "collapsePatterns": ["^\\s+at "],
    "deduplicate": true,
    "truncateLineAt": 240,
    "maxLines": 160,
    "headLines": 24,
    "tailLines": 40,
    "onEmpty": "vitest: ok",
    "filterStderr": false
  },
  "preserve": {
    "errorPatterns": ["FAIL", "Error:", "AssertionError"],
    "summaryPatterns": ["Test Files", "Tests", "Snapshots"]
  },
  "tests": [
    {
      "name": "keeps failing tests",
      "command": "vitest",
      "input": "FAIL test/a.test.ts\\nError: boom\\nTest Files 1 failed",
      "expected": "FAIL test/a.test.ts\\nError: boom\\nTest Files 1 failed"
    }
  ]
}
```

### Поля RTK

| Поле                       | Обязательно | Описание                                                                       |
| -------------------------- | -------- | ------------------------------------------------------------------------------ |
| `id`                       | да      | Устойчивый идентификатор фильтра                                               |
| `label`                    | да      | Название, читаемое на панели управления                                        |
| `category`                 | да      | Семейство фильтров: git, test, build, shell, docker, package, infra, cloud, generic |
| `priority`                 | нет       | Высший приоритет побеждает, когда несколько фильтров совпадают                |
| `match.outputTypes`        | нет       | Идентификаторы выходных данных детектора, которые выбирают этот фильтр        |
| `match.commands`           | нет       | Токены команд, которые выбирают этот фильтр                                    |
| `match.patterns`           | нет       | Регулярные выражения, которые выбирают этот фильтр из текста вывода           |
| `rules.stripAnsi`          | нет       | Удаляет последовательности ANSI перед этапами regex                             |
| `rules.replace`            | нет       | Упорядоченные замены regex, применяемые построчно                              |
| `rules.matchOutput`        | нет       | Правила короткого замыкания вывода с возможной защитой `unless`               |
| `rules.includePatterns`    | нет       | Строки, которые предпочтительно сохранить                                     |
| `rules.dropPatterns`       | нет       | Строки, которые нужно удалить как шум                                           |
| `rules.collapsePatterns`   | нет       | Повторяющиеся совпадающие строки, которые можно свернуть                        |
| `rules.deduplicate`        | нет       | Свернуть дублирующиеся нормализованные строки                                  |
| `rules.truncateLineAt`     | нет       | Ограничение по количеству символов в строке с учетом Unicode                  |
| `rules.maxLines`           | нет       | Максимальное количество сохраняемых строк перед сохранением хвоста            |
| `rules.headLines`          | нет       | Сохраняемые строки в начале при усечении                                        |
| `rules.tailLines`          | нет       | Сохраняемые строки в конце для контекста последних действий                     |
| `rules.onEmpty`            | нет       | Сообщение-заполнитель, когда фильтрация удаляет весь контент                  |
| `rules.filterStderr`       | нет       | Нормализует общие префиксы stderr перед последующими этапами фильтрации       |
| `preserve.errorPatterns`   | нет       | Строки ошибок, которые должны выжить при усечении                             |
| `preserve.summaryPatterns` | нет       | Строки сводки, которые должны выжить при усечении                              |
| `tests[]`                  | нет       | Встроенные образцы проверки, используемые шлюзом RTK verify                   |

RTK применяет декларативные этапы в следующем порядке: `stripAnsi`, `filterStderr`, `replace`,
`matchOutput`, `dropPatterns`/`includePatterns`, `truncateLineAt`, `headLines`/`tailLines`,
`maxLines`, и `onEmpty`.

Пользовательские фильтры могут быть загружены из:

1. Файлов `.rtk/filters.json` проекта только после наличия соответствующего хэша `.rtk/trust.json` или
   включения `trustProjectFilters`.
2. Глобального `DATA_DIR/rtk/filters.json`.
3. Встроенных фильтров.

Файлы проекта/глобальные пользовательские файлы могут содержать один объект фильтра или массив объектов фильтров. Недействительные
пользовательские фильтры пропускаются с диагностикой; недействительные встроенные фильтры не проходят проверку.

Файл доверия проекта:

```json
{
  "filtersSha256": "0123456789abcdef..."
}
```

Переопределение среды `OMNIROUTE_RTK_TRUST_PROJECT_FILTERS=1` доверяет фильтрам проекта без хэша и должно быть ограничено
контролируемой локальной разработкой.

## Правила безопасности

- Делайте правила идемпотентными: повторный запуск одного и того же фильтра не должен портить вывод.
- Сохраняйте точный текст ошибок, пути к файлам, номера строк и сводки команд, если это возможно.
- Избегайте правил, которые изменяют блоки кода, JSON-полезные нагрузки, URL-адреса или секреты.
- Добавьте покрытие модульных тестов для новых семейств команд в тестах detector/filter.
- Добавьте примеры `tests[]` в каждый встроенный фильтр и в общие пользовательские фильтры.

## Валидация

Пакеты правил проверяются перед использованием. Встроенные пакеты Caveman и встроенные фильтры RTK сбоят быстро
во время проверки, чтобы сломанные активы выпуска не были отправлены. Пользовательские фильтры RTK пропускаются с диагностикой, когда разбор или проверка доверия не удается.

Фокусированная валидация:

```bash
node --import tsx/esm --test tests/unit/compression/rule-loader.test.ts tests/unit/compression/language-packs.test.ts
node --import tsx/esm --test tests/unit/compression/rtk-verify.test.ts tests/unit/compression/rtk-dsl-pipeline.test.ts
```
