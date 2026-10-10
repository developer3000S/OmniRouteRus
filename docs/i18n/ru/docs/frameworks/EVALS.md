# EVALS (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../frameworks/EVALS.md) · 🇸🇦 [ar](../../../ar/docs/frameworks/EVALS.md) · 🇦🇿 [az](../../../az/docs/frameworks/EVALS.md) · 🇧🇬 [bg](../../../bg/docs/frameworks/EVALS.md) · 🇧🇩 [bn](../../../bn/docs/frameworks/EVALS.md) · 🇨🇿 [cs](../../../cs/docs/frameworks/EVALS.md) · 🇩🇰 [da](../../../da/docs/frameworks/EVALS.md) · 🇩🇪 [de](../../../de/docs/frameworks/EVALS.md) · 🇪🇸 [es](../../../es/docs/frameworks/EVALS.md) · 🇮🇷 [fa](../../../fa/docs/frameworks/EVALS.md) · 🇫🇮 [fi](../../../fi/docs/frameworks/EVALS.md) · 🇫🇷 [fr](../../../fr/docs/frameworks/EVALS.md) · 🇮🇳 [gu](../../../gu/docs/frameworks/EVALS.md) · 🇮🇱 [he](../../../he/docs/frameworks/EVALS.md) · 🇮🇳 [hi](../../../hi/docs/frameworks/EVALS.md) · 🇭🇺 [hu](../../../hu/docs/frameworks/EVALS.md) · 🇮🇩 [id](../../../id/docs/frameworks/EVALS.md) · 🇮🇩 [in](../../../in/docs/frameworks/EVALS.md) · 🇮🇹 [it](../../../it/docs/frameworks/EVALS.md) · 🇯🇵 [ja](../../../ja/docs/frameworks/EVALS.md) · 🇰🇷 [ko](../../../ko/docs/frameworks/EVALS.md) · 🇮🇳 [mr](../../../mr/docs/frameworks/EVALS.md) · 🇲🇾 [ms](../../../ms/docs/frameworks/EVALS.md) · 🇳🇱 [nl](../../../nl/docs/frameworks/EVALS.md) · 🇳🇴 [no](../../../no/docs/frameworks/EVALS.md) · 🇵🇭 [phi](../../../phi/docs/frameworks/EVALS.md) · 🇵🇱 [pl](../../../pl/docs/frameworks/EVALS.md) · 🇵🇹 [pt](../../../pt/docs/frameworks/EVALS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/frameworks/EVALS.md) · 🇷🇴 [ro](../../../ro/docs/frameworks/EVALS.md) · 🇸🇰 [sk](../../../sk/docs/frameworks/EVALS.md) · 🇸🇪 [sv](../../../sv/docs/frameworks/EVALS.md) · 🇰🇪 [sw](../../../sw/docs/frameworks/EVALS.md) · 🇮🇳 [ta](../../../ta/docs/frameworks/EVALS.md) · 🇮🇳 [te](../../../te/docs/frameworks/EVALS.md) · 🇹🇭 [th](../../../th/docs/frameworks/EVALS.md) · 🇹🇷 [tr](../../../tr/docs/frameworks/EVALS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/frameworks/EVALS.md) · 🇵🇰 [ur](../../../ur/docs/frameworks/EVALS.md) · 🇻🇳 [vi](../../../vi/docs/frameworks/EVALS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/frameworks/EVALS.md)

---

---
title: "Оценки (Evals)"
version: 3.8.2
lastUpdated: 2026-05-13
---

# Оценки (Evals)

> **Источник истины:** `src/lib/evals/`, `src/lib/db/evals.ts`, `src/app/api/evals/`
> **Последнее обновление:** 2026-05-13 — v3.8.0

OmniRoute поставляется с универсальным фреймворком оценок, который можно использовать для оценки конфигураций маршрутизации, отдельных провайдеров/моделей или набора "золотых" тестов. Используйте его для проверки изменений маршрутизации, проверки новых провайдеров и блокировки релизов перед их продвижением в продакшен-трафик.

Фреймворк реализован как:

- Чистый раннер (`src/lib/evals/evalRunner.ts`), который регистрирует встроенные наборы тестов в памяти, оценивает выходные данные по ожидаемым критериям и агрегирует отчеты.
- Слой сохранения (`src/lib/db/evals.ts`) для пользовательских (определяемых пользователем) наборов и исторических запусков в SQLite.
- Слой оркестрации (`src/lib/evals/runtime.ts`), который выполняет каждый тест, отправляя реальные вызовы в `POST /v1/chat/completions`, фиксируя задержки и выходные данные, и сохраняет запуск.
- REST-эндпоинты под `/api/evals/*` (только с аутентификацией управления).
- Панель управления на `Dashboard → Usage → Evals` (`EvalsTab.tsx`).

## Концепции

### Набор тестов

Набор тестов — это именованная коллекция тестовых случаев с `description` и одним или более случаями. Наборы тестов могут быть из двух источников:

| Источник   | Где определены                                | Изменяемы во время выполнения? |
| ---------- | --------------------------------------------- | ------------------------------ |
| `built-in` | Зарегистрированы через `registerSuite()` при загрузке | Нет (определены в коде)        |
| `custom`   | Хранятся в SQLite `eval_suites` + `eval_cases` | Да (через API/UI)              |

Текущие встроенные наборы тестов (см. `src/lib/evals/evalRunner.ts`):

- `golden-set` — 10 базовых случаев из приветствий, математики, перевода и безопасности
- `coding-proficiency` — Python/JS/SQL/TS/обнаружение ошибок
- `reasoning-logic` — силлогизмы, задачки, распознавание шаблонов
- `multilingual` — перевод и определение языка
- `safety-guardrails` — PII, обход безопасности, отказ, осведомленность о предвзятости
- `instruction-following` — только JSON, нумерованные списки, ограничения языка
- `codex-comparison` — задачи по программированию для сравнения в режиме сравнения

### Случай

Каждый случай содержит:

| Поле       | Описание                                                  |
| ---------- | --------------------------------------------------------- |
| `id`       | Устойчивый идентификатор (используется для ключей выходных данных и метрик) |
| `name`     | Человекочитаемое название                                 |
| `model`    | Модель по умолчанию, когда запуск использует цель `suite-default` |
| `input`    | `{ messages, max_tokens? }` — отправляется в `/v1/chat/completions` |
| `expected` | `{ strategy, value }` — критерий оценки (см. ниже)       |
| `tags`     | Необязательные метки (например, `safety`, `pii`, `jailbreak`) |

### Цель

Один и тот же набор тестов может быть запущен на разных целях. Схема цели — `evalTargetSchema` в `src/shared/validation/schemas.ts`:

| Тип цели      | `id`       | Поведение                                                        |
| --------------- | ---------- | --------------------------------------------------------------- |
| `suite-default` | `null`     | Каждый случай использует его встроенное поле `model`            |
| `model`         | имя модели | Запуск каждого случая через одну модель (например, `gpt-4o`)   |
| `combo`         | имя комбо  | Запуск каждого случая через одно комбо (используется движок маршрутизации) |

Для `model` и `combo` поле `id` обязательно (проверяется Zod `superRefine`). Когда предоставляется `compareTarget`, обе цели должны отличаться — раннер сохраняет оба запуска под одним `runGroupId` для сравнения A/B.

## Критерий оценки

Реализовано в `evaluateCase()` (evalRunner.ts):

| Стратегия   | Пройдено, когда…                                                           |
| ---------- | -------------------------------------------------------------------- |
| `exact`    | `actualOutput === expected.value`                                    |
| `contains` | `actualOutput.toLowerCase().includes(expected.value.toLowerCase())`  |
| `regex`    | `new RegExp(expected.value).test(actualOutput)` возвращает true            |
| `custom`   | `expected.fn(actualOutput, evalCase)` возвращает true (только для встроенных) |

**Примечание:** Пользовательские функции оценки зарезервированы для кодовых (встроенных)
наборов, так как функции не могут быть сериализованы через API. Схема
`evalCaseBuilderSchema` принимает только `contains | exact | regex` для
пользовательских наборов.

На данный момент нет LLM-as-judge или оценки на основе встроенных представлений — это было бы чистым расширением в `evaluateCase()`.

## Схема базы данных

Три таблицы (миграции `030_create_eval_runs.sql` и
`031_create_eval_suites.sql`):

| Таблица         | Назначение                                                                                                                      |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `eval_suites` | Метаданные пользовательского набора (`id`, `name`, `description`)                                                                          |
| `eval_cases`  | Случаи в наборе — `input_json`, `expected_*`, `tags_json`                                                                    |
| `eval_runs`   | Исторические запуски — `pass_rate`, `total`, `passed`, `failed`, `avg_latency_ms`, `summary_json`, `results_json`, `outputs_json` |

Встроенные наборы **не** хранятся в базе данных. Они находятся в памяти и перерегистрируются каждый раз, когда `evalRunner.ts` импортируется.

## REST API

Все конечные точки требуют аутентификации управления (`requireManagementAuth`) — они не являются частью общедоступного прокси-интерфейса.

| Конечная точка                      | Метод   | Описание                                                   |
| ----------------------------- | -------- | ------------------------------------------------------------- |
| `/api/evals`                  | `GET`    | Список наборов + последние запуски + оценка + цели + ключи        |
| `/api/evals`                  | `POST`   | Запуск набора (одиночный или сравнение) — схема `evalRunSuiteSchema` |
| `/api/evals/{suiteId}`        | `GET`    | Получение одного набора (встроенного или пользовательского)                          |
| `/api/evals/suites`           | `POST`   | Создание пользовательского набора — схема `evalSuiteSaveSchema`          |
| `/api/evals/suites/{suiteId}` | `GET`    | Получение пользовательского набора                                          |
| `/api/evals/suites/{suiteId}` | `PUT`    | Замена пользовательского набора (случаи перезаписываются)                |
| `/api/evals/suites/{suiteId}` | `DELETE` | Удаление пользовательского набора и его случаев                           |

### Запуск набора

```bash
curl -X POST http://localhost:20128/api/evals \
  -H "Cookie: auth_token=..." \
  -H "Content-Type: application/json" \
  -d '{
    "suiteId": "golden-set",
    "target": { "type": "combo", "id": "my-combo" },
    "apiKeyId": "optional-api-key-uuid"
  }'
```

Необязательные поля:

- `outputs` — `Record<caseId, string>` с предварительно вычисленными выводами. При предоставлении
  исполнитель **пропускает диспетчеризацию** и оценивает только кэшированные выводы (полезно для офлайн-оценки).
- `compareTarget` — вторая цель для параллельного запуска; оба запуска используют сгенерированный `runGroupId` для сравнения.
- `apiKeyId` — внутренний API-ключ, используемый для аутентификации отправленных
  `/v1/chat/completions` вызовов. Требуется, когда `REQUIRE_API_KEY` включен.

### Создание пользовательского набора

```bash
curl -X POST http://localhost:20128/api/evals/suites \
  -H "Cookie: auth_token=..." \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Production smoke",
    "description": "Quick sanity check before deploy",
    "cases": [
      {
        "name": "JSON shape",
        "model": "gpt-4o",
        "input": { "messages": [{ "role": "user", "content": "Reply with {\"ok\": true}" }] },
        "expected": { "strategy": "regex", "value": "\"ok\"\\s*:\\s*true" }
      }
    ]
  }'
```

## Диспетчерская конвейерная линия

`runEvalSuiteAgainstTarget()` (`src/lib/evals/runtime.ts`):

1. Разрешает набор (встроенный или пользовательский).
2. Для каждого случая создает `Request` к `/v1/chat/completions` с сообщениями случая, разрешенной `model`, `stream: false` и `max_tokens: 512` (или переопределение случая).
3. Вызывает обработчик чата напрямую (в процессе — без дополнительного HTTP хода).
4. Захватывает задержку и извлекает текст из `choices[0].message.content` или полезной нагрузки `output[]` API Responses.
5. Оценивает все выходные данные через `runSuite()`, затем сохраняет через `saveEvalRun()`.

Случаи выполняются **последовательно**. Сегодня нет флага параллелизма.

## Панель управления

Пользовательский интерфейс находится по адресу `Dashboard → Usage → Evals` (`src/app/(dashboard)/dashboard/usage/components/EvalsTab.tsx`). Оттуда вы можете:

- Просматривать встроенные и пользовательские наборы с предварительным просмотром по каждому случаю.
- Создавать/редактировать/удалять пользовательские наборы с помощью конструктора случаев.
- Выбирать цель (набор по умолчанию / модель / комбинация), при необходимости вторую `compareTarget`, при необходимости API-ключ, затем запускать по требованию.
- Просматривать историю запусков, процент успешных/неуспешных случаев, задержку и захваченные выходные данные.
- Видеть сводную таблицу оценок, агрегированную по последнему запуску для каждой пары `(набор, цель)`.

## Отношение с RFC по автоматической оценке

Отдельная, более узкая подсистема оценки находится по адресу `src/domain/assessment/` (см. также [AUTO-COMBO.md](../routing/AUTO-COMBO.md) для движка автоматического оценивания). Эта подсистема предназначена для движка Auto Combo — автоматической оценки поставщиков и моделей, чтобы комбинации могли самостоятельно восстанавливаться при сбоях вверху. Она использует собственный раннер, собственный категоризатор и собственную логику оценивания.

Фреймворк оценивания, описанный здесь, является **более широкой, универсальной тестовой поверхностью**. Предпочитайте его для произвольных наборов регрессионных тестов, сравнений A/B и тестов на дым при выпуске. Используйте подсистему автоматической оценки, когда вам нужна реальная время здоровья поставщика для принятия решений о маршрутизации.

## Интеграция с CI

Сегодня нет специального скрипта `eval:ci` в npm. Два пути, если вы хотите контролировать выпуски на основе результатов оценки:

- **HTTP путь**: разверните сервер, обратитесь к `POST /api/evals` с известным `suiteId` + `target`, и проверьте `runs[].summary.passRate >= N` в ответе.
- **В процессе путь**: импортируйте `runEvalSuiteAgainstTarget()` из `@/lib/evals/runtime` из скрипта, запустите его против тестовой БД и проверьте возвращаемый `PersistedEvalRun.summary`.

Тесты, покрывающие маршрут и историю, находятся по адресам `tests/unit/evals-route.test.ts` и `tests/unit/evals-history.test.ts`.

## Точки расширения

Распространенные изменения и где их делать:

- **Новая стратегия оценивания** — расширьте блок `switch (evalCase.expected.strategy)` в `evaluateCase()` (`evalRunner.ts`) и расширьте `EvalCaseStrategy` в `src/lib/db/evals.ts` плюс `evalCaseBuilderSchema` в `schemas.ts`.
- **Новый встроенный набор** — определите объект набора и вызовите `registerSuite()` в конце `evalRunner.ts`. Он будет автоматически обнаружен `listSuites()`.
- **Запуск с параллелизмом** — измените последовательный цикл `for` в `runEvalSuiteAgainstTarget()` на ограниченный `Promise.all` (сегодня нет контроля параллелизма).
- **Случаи потоковой передачи/вызова инструментов** — в настоящее время раннер принудительно устанавливает `stream: false`. Оценивание с учетом потоковой передачи или инструментов потребует изменений в `runtime.ts` (захват и агрегация фрагментов SSE перед оцениванием).

## Смотрите также

- [USER_GUIDE.md](../guides/USER_GUIDE.md) — общий обзор продукта
- [ARCHITECTURE.md](../architecture/ARCHITECTURE.md) — справочник по конвейеру запросов
- [AUTO-COMBO.md](../routing/AUTO-COMBO.md) — движок оценки Auto Combo (работает в реальном времени)
- Источник: `src/lib/evals/`, `src/lib/db/evals.ts`, `src/app/api/evals/`
- UI: `src/app/(dashboard)/dashboard/usage/components/EvalsTab.tsx`
