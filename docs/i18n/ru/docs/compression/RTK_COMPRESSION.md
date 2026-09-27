# RTK_COMPRESSION (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../compression/RTK_COMPRESSION.md) · 🇸🇦 [ar](../../../ar/docs/compression/RTK_COMPRESSION.md) · 🇦🇿 [az](../../../az/docs/compression/RTK_COMPRESSION.md) · 🇧🇬 [bg](../../../bg/docs/compression/RTK_COMPRESSION.md) · 🇧🇩 [bn](../../../bn/docs/compression/RTK_COMPRESSION.md) · 🇨🇿 [cs](../../../cs/docs/compression/RTK_COMPRESSION.md) · 🇩🇰 [da](../../../da/docs/compression/RTK_COMPRESSION.md) · 🇩🇪 [de](../../../de/docs/compression/RTK_COMPRESSION.md) · 🇪🇸 [es](../../../es/docs/compression/RTK_COMPRESSION.md) · 🇮🇷 [fa](../../../fa/docs/compression/RTK_COMPRESSION.md) · 🇫🇮 [fi](../../../fi/docs/compression/RTK_COMPRESSION.md) · 🇫🇷 [fr](../../../fr/docs/compression/RTK_COMPRESSION.md) · 🇮🇳 [gu](../../../gu/docs/compression/RTK_COMPRESSION.md) · 🇮🇱 [he](../../../he/docs/compression/RTK_COMPRESSION.md) · 🇮🇳 [hi](../../../hi/docs/compression/RTK_COMPRESSION.md) · 🇭🇺 [hu](../../../hu/docs/compression/RTK_COMPRESSION.md) · 🇮🇩 [id](../../../id/docs/compression/RTK_COMPRESSION.md) · 🇮🇩 [in](../../../in/docs/compression/RTK_COMPRESSION.md) · 🇮🇹 [it](../../../it/docs/compression/RTK_COMPRESSION.md) · 🇯🇵 [ja](../../../ja/docs/compression/RTK_COMPRESSION.md) · 🇰🇷 [ko](../../../ko/docs/compression/RTK_COMPRESSION.md) · 🇮🇳 [mr](../../../mr/docs/compression/RTK_COMPRESSION.md) · 🇲🇾 [ms](../../../ms/docs/compression/RTK_COMPRESSION.md) · 🇳🇱 [nl](../../../nl/docs/compression/RTK_COMPRESSION.md) · 🇳🇴 [no](../../../no/docs/compression/RTK_COMPRESSION.md) · 🇵🇭 [phi](../../../phi/docs/compression/RTK_COMPRESSION.md) · 🇵🇱 [pl](../../../pl/docs/compression/RTK_COMPRESSION.md) · 🇵🇹 [pt](../../../pt/docs/compression/RTK_COMPRESSION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/compression/RTK_COMPRESSION.md) · 🇷🇴 [ro](../../../ro/docs/compression/RTK_COMPRESSION.md) · 🇸🇰 [sk](../../../sk/docs/compression/RTK_COMPRESSION.md) · 🇸🇪 [sv](../../../sv/docs/compression/RTK_COMPRESSION.md) · 🇰🇪 [sw](../../../sw/docs/compression/RTK_COMPRESSION.md) · 🇮🇳 [ta](../../../ta/docs/compression/RTK_COMPRESSION.md) · 🇮🇳 [te](../../../te/docs/compression/RTK_COMPRESSION.md) · 🇹🇭 [th](../../../th/docs/compression/RTK_COMPRESSION.md) · 🇹🇷 [tr](../../../tr/docs/compression/RTK_COMPRESSION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/compression/RTK_COMPRESSION.md) · 🇵🇰 [ur](../../../ur/docs/compression/RTK_COMPRESSION.md) · 🇻🇳 [vi](../../../vi/docs/compression/RTK_COMPRESSION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/compression/RTK_COMPRESSION.md)

---

---
title: "RTK Compression"
version: 3.8.2
lastUpdated: 2026-05-13
---

# RTK Compression

RTK compression — это движок сжатия командного вывода для терминала и инструментов, разработанный OmniRoute. Он предназначен для сессий coding-agent, где основное увеличение контекста происходит за счет тестовых логов, вывода сборки, шума менеджера пакетов, транскриптов оболочки, вывода Docker, вывода git и трассировок стека.

RTK может работать напрямую с `defaultMode: "rtk"` или быть первым шагом в стековом конвейере, обычно:

```txt
rtk -> caveman
```

Такой порядок сначала сжимает шумный вывод машин, а затем позволяет Caveman конденсировать оставшийся прозаический текст.

Верхнеуровневый RTK сообщает о сэкономленных `60-90%` командах. Пример сессии из README сокращает стандартные токены с `~118,000` до `~23,900` RTK токенов, что составляет `79.7%` сэкономленных (`~80%`). OmniRoute использует этот верхнеуровневый средний показатель для расчета стекового сэкономления с сжатием входных данных Caveman:

```txt
RTK average:    80% saved
Caveman input: 46% saved
Stacked:       1 - (1 - 0.80) * (1 - 0.46) = 89.2% saved
Range:         1 - (1 - 0.60..0.90) * (1 - 0.46) = 78.4-94.6%
```

## Что он сжимает

Встроенный каталог в настоящее время содержит 49 фильтров в этих категориях:

| Категория  | Примеры                                                      |
| --------- | ------------------------------------------------------------- |
| `git`     | `git status`, `git branch`, `git diff`, `git log`             |
| `test`    | Vitest, Jest, Pytest, Playwright, Go tests, Cargo tests       |
| `build`   | TypeScript, ESLint, Biome, Prettier, Vite, Webpack, Turbo, Nx |
| `package` | `npm install`, `npm audit`, `pip`, `uv sync`, Poetry, Bundler |
| `shell`   | `ls`, `find`, `grep`, generic shell logs                      |
| `docker`  | `docker ps`, Docker logs                                      |
| `infra`   | Terraform, OpenTofu, `systemctl status`                       |
| `generic` | JSON output, stack traces, generic output fallback            |

Детектор в `open-sse/services/compression/engines/rtk/commandDetector.ts` классифицирует вывод перед выбором фильтра. Фильтры также могут соответствовать шаблону команды или регулярному выражению вывода, когда класса команды недостаточно.

## Разрешение фильтров

RTK загружает фильтры в следующем порядке:

1. Проектные фильтры из `.rtk/filters.json`, только при доверии.
2. Глобальные фильтры из `DATA_DIR/rtk/filters.json`.
3. Встроенные фильтры из `open-sse/services/compression/engines/rtk/filters/`.

Проектные фильтры намеренно защищены доверием, потому что регулярные выражения фильтров могут изменять способ отображения вывода инструментов для агентов. Файл фильтров проекта принимается, когда одно из следующих условий истинно:

- `rtkConfig.trustProjectFilters` равно `true`.
- `OMNIROUTE_RTK_TRUST_PROJECT_FILTERS=1` установлен.
- `.rtk/trust.json` содержит SHA-256 хэш `.rtk/filters.json`.

Пример файла доверия:

```json
{
  "filtersSha256": "0123456789abcdef..."
}
```

Пользовательские фильтры могут быть одним объектом фильтра или массивом объектов фильтров. Недопустимые пользовательские фильтры пропускаются и сообщаются диагностикой `/api/context/rtk/filters`. Недопустимые встроенные фильтры вызывают сбой.

## Filter DSL

Фильтры используют JSON-схему, описанную в [Формат правил сжатия](./COMPRESSION_RULES_FORMAT.md).
Время выполнения применяет эти этапы в следующем порядке:

```txt
stripAnsi -> filterStderr -> replace -> matchOutput -> drop/include lines
  -> truncateLineAt -> head/tail/maxLines -> onEmpty
```

Важные поля:

| Поле                         | Назначение                                                     |
| ---------------------------- | -------------------------------------------------------------- |
| `rules.stripAnsi`            | Удаляет цветовые/управляющие последовательности терминала перед сопоставлением |
| `rules.filterStderr`         | Нормализует распространенные префиксы stderr перед сопоставлением/фильтрацией |
| `rules.replace`              | Применяет упорядоченные замены по регулярным выражениям       |
| `rules.matchOutput`          | Возвращает компактное резюме, когда вывод соответствует известному условию |
| `rules.matchOutput[].unless` | Пропускает сокращение, когда присутствует шаблон ошибки/неудачи |
| `rules.dropPatterns`         | Удаляет шумные строки                                          |
| `rules.includePatterns`      | Предпочитает полезные строки                                   |
| `rules.collapsePatterns`     | Сворачивает повторяющиеся совпадающие строки                  |
| `rules.truncateLineAt`       | Безопасное посимвольное усечение строк                         |
| `rules.onEmpty`              | Сообщение-заполнитель, если все строки отфильтрованы           |
| `tests[]`                    | Встроенные образцы, используемые в шлюзе проверки              |

Встроенные фильтры ожидается, что будут включать встроенные образцы `tests[]`. Пользовательские фильтры также должны включать их, особенно когда они используются в нескольких проектах.

## Конфигурация

Глобальные настройки доступны через `/api/settings/compression`. Настройки, специфичные для RTK, также доступны через `/api/context/rtk/config`.

```json
{
  "defaultMode": "stacked",
  "autoTriggerMode": "stacked",
  "autoTriggerTokens": 32000,
  "stackedPipeline": [
    { "engine": "rtk", "intensity": "standard" },
    { "engine": "caveman", "intensity": "full" }
  ],
  "rtkConfig": {
    "enabled": true,
    "intensity": "standard",
    "applyToToolResults": true,
    "applyToCodeBlocks": false,
    "applyToAssistantMessages": false,
    "enabledFilters": [],
    "disabledFilters": [],
    "maxLinesPerResult": 120,
    "maxCharsPerResult": 12000,
    "deduplicateThreshold": 3,
    "customFiltersEnabled": true,
    "trustProjectFilters": false,
    "rawOutputRetention": "never",
    "rawOutputMaxBytes": 1048576
  }
}
```

`enabledFilters` и `disabledFilters` используют идентификаторы фильтров, например `test-vitest` или `git-diff`.

## API

| Маршрут                              | Метод | Назначение                                      |
| ---------------------------------- | ------ | -------------------------------------------- |
| `/api/context/rtk/config`          | GET    | Чтение конфигурации RTK                       |
| `/api/context/rtk/config`          | PUT    | Обновление конфигурации RTK                   |
| `/api/context/rtk/filters`         | GET    | Список каталога фильтров и диагностика загрузки |
| `/api/context/rtk/test`            | POST   | Предварительный просмотр сжатия RTK для одного текстового полезного нагрузки |
| `/api/context/rtk/raw-output/[id]` | GET    | Чтение сохраненного необработанного вывода    |
| `/api/compression/preview`         | POST   | Предварительный просмотр любого режима сжатия |

Полезная нагрузка для тестирования RTK:

```json
{
  "command": "npm test",
  "text": "FAIL tests/example.test.ts\nAssertionError: expected true\nTest Files 1 failed",
  "config": {
    "intensity": "standard"
  }
}
```

Полезная нагрузка для предварительного просмотра сжатия:

```json
{
  "mode": "stacked",
  "messages": [
    {
      "role": "tool",
      "content": "FAIL tests/example.test.ts\nAssertionError: expected true\nTest Files 1 failed"
    }
  ],
  "config": {
    "rtkConfig": {
      "rawOutputRetention": "failures"
    }
  }
}
```

Маршруты управления требуют аутентификации управления панелью или соответствующей политики API-ключа.

## Восстановление необработанного вывода

RTK обычно возвращает только сжатый текст. Для отладки `rawOutputRetention` может сохранять
необработанный вывод с удалёнными данными:

| Значение    | Поведение                                                |
| ---------- | ------------------------------------------------------- |
| `never`    | Не сохранять необработанный вывод                        |
| `failures` | Сохранять только необработанный вывод, который, вероятно, вызовет ошибку |
| `always`   | Сохранять каждый необработанный вывод RTK после удаления |

Сохранённые файлы записываются в:

```txt
DATA_DIR/rtk/raw-output/
```

Перед сохранением удаляются конфиденциальные данные, включая распространённые токены, ключи API, токены Slack,
ключи доступа AWS и значения в стиле присваивания `token=...`, `secret=...`, `password=...`. В аналитике сохраняются только идентификатор указателя, размер и метаданные хэша.

## Проверка ворот

Сфокусированные проверочные ворота запускают встроенные тесты фильтров без вызова внешних команд:

```bash
node --import tsx/esm --test tests/unit/compression/rtk-verify.test.ts
```

Более широкие ворота RTK:

```bash
node --import tsx/esm --test \
  tests/unit/compression/rtk-*.test.ts \
  tests/unit/compression/pipeline-integration.test.ts \
  tests/unit/compression/context-compression-api.test.ts
```

Запустите широкие ворота сжатия перед выпуском:

```bash
node --import tsx/esm --test \
  tests/unit/compression/*.test.ts \
  tests/golden-set/*.test.ts \
  tests/integration/compression-pipeline.test.ts \
  tests/unit/api/compression/compression-api.test.ts
```

## Расширение RTK

1. Добавьте или обновите JSON-файл фильтра.
2. Включите хотя бы один пример `tests[]`, который доказывает важное поведение.
3. Добавьте фикстуру в `tests/unit/compression/fixtures/rtk/` для новых семейств команд.
4. Добавьте покрытие обнаружения команд при введении нового класса вывода.
5. Запустите проверочные и широкие ворота RTK.
6. Если фильтр является локальным для проекта, фиксируйте `.rtk/filters.json` и обновляйте `.rtk/trust.json` только после проверки.
