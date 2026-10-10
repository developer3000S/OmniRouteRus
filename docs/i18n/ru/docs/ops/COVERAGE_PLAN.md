# COVERAGE_PLAN (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/COVERAGE_PLAN.md) · 🇸🇦 [ar](../../../ar/docs/ops/COVERAGE_PLAN.md) · 🇦🇿 [az](../../../az/docs/ops/COVERAGE_PLAN.md) · 🇧🇬 [bg](../../../bg/docs/ops/COVERAGE_PLAN.md) · 🇧🇩 [bn](../../../bn/docs/ops/COVERAGE_PLAN.md) · 🇨🇿 [cs](../../../cs/docs/ops/COVERAGE_PLAN.md) · 🇩🇰 [da](../../../da/docs/ops/COVERAGE_PLAN.md) · 🇩🇪 [de](../../../de/docs/ops/COVERAGE_PLAN.md) · 🇪🇸 [es](../../../es/docs/ops/COVERAGE_PLAN.md) · 🇮🇷 [fa](../../../fa/docs/ops/COVERAGE_PLAN.md) · 🇫🇮 [fi](../../../fi/docs/ops/COVERAGE_PLAN.md) · 🇫🇷 [fr](../../../fr/docs/ops/COVERAGE_PLAN.md) · 🇮🇳 [gu](../../../gu/docs/ops/COVERAGE_PLAN.md) · 🇮🇱 [he](../../../he/docs/ops/COVERAGE_PLAN.md) · 🇮🇳 [hi](../../../hi/docs/ops/COVERAGE_PLAN.md) · 🇭🇺 [hu](../../../hu/docs/ops/COVERAGE_PLAN.md) · 🇮🇩 [id](../../../id/docs/ops/COVERAGE_PLAN.md) · 🇮🇩 [in](../../../in/docs/ops/COVERAGE_PLAN.md) · 🇮🇹 [it](../../../it/docs/ops/COVERAGE_PLAN.md) · 🇯🇵 [ja](../../../ja/docs/ops/COVERAGE_PLAN.md) · 🇰🇷 [ko](../../../ko/docs/ops/COVERAGE_PLAN.md) · 🇮🇳 [mr](../../../mr/docs/ops/COVERAGE_PLAN.md) · 🇲🇾 [ms](../../../ms/docs/ops/COVERAGE_PLAN.md) · 🇳🇱 [nl](../../../nl/docs/ops/COVERAGE_PLAN.md) · 🇳🇴 [no](../../../no/docs/ops/COVERAGE_PLAN.md) · 🇵🇭 [phi](../../../phi/docs/ops/COVERAGE_PLAN.md) · 🇵🇱 [pl](../../../pl/docs/ops/COVERAGE_PLAN.md) · 🇵🇹 [pt](../../../pt/docs/ops/COVERAGE_PLAN.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/COVERAGE_PLAN.md) · 🇷🇴 [ro](../../../ro/docs/ops/COVERAGE_PLAN.md) · 🇸🇰 [sk](../../../sk/docs/ops/COVERAGE_PLAN.md) · 🇸🇪 [sv](../../../sv/docs/ops/COVERAGE_PLAN.md) · 🇰🇪 [sw](../../../sw/docs/ops/COVERAGE_PLAN.md) · 🇮🇳 [ta](../../../ta/docs/ops/COVERAGE_PLAN.md) · 🇮🇳 [te](../../../te/docs/ops/COVERAGE_PLAN.md) · 🇹🇭 [th](../../../th/docs/ops/COVERAGE_PLAN.md) · 🇹🇷 [tr](../../../tr/docs/ops/COVERAGE_PLAN.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/COVERAGE_PLAN.md) · 🇵🇰 [ur](../../../ur/docs/ops/COVERAGE_PLAN.md) · 🇻🇳 [vi](../../../vi/docs/ops/COVERAGE_PLAN.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/COVERAGE_PLAN.md)

---

---
title: "План покрытия тестами"
version: 3.8.2
lastUpdated: 2026-05-13
---

# План покрытия тестами

Последнее обновление: 2026-05-13

> Статус измерен на 2026-05-13: строки 82.58%, операторы 82.58%, функции 84.23%, ветки 75.22%. Фазы 1-5 завершены. Текущий фокус — Фаза 6 (>=85%) и Фаза 7 (>=90%).

## Базовый уровень

Существует несколько показателей покрытия, в зависимости от способа вычисления отчета. Для планирования полезен только один из них.

| Метрика               | Область действия                                                 | Операторы / Строки | Ветки | Функции | Примечания                                               |
| -------------------- | ----------------------------------------------------- | -----------------: | -------: | --------: | --------------------------------------------------- |
| Legacy               | Старый `npm run test:coverage`                           |             79.42% |   75.15% |    67.94% | Завышен: учитывает файлы тестов и исключает `open-sse` |
| Диагностика           | Только исходный код, исключая тесты и `open-sse` |             68.16% |   63.55% |    64.06% | Полезен только для изоляции `src/**`                     |
| Рекомендуемый базовый уровень | Только исходный код, исключая тесты и включая `open-sse` |             82.58% |   75.22% |    84.23% | Это проектный базовый уровень для улучшения        |

Рекомендуемый базовый уровень — это число, против которого следует оптимизировать.

## Правила

- Цели покрытия применяются к исходным файлам, а не к `tests/**`.
- `open-sse/**` является частью продукта и должна оставаться в области действия.
- Новый код не должен снижать покрытие в затронутых областях.
- Предпочитайте тестирование поведения и исходов ветвления реализационным деталям.
- Предпочитайте временные базы данных SQLite и небольшие фикстуры широким мокам для `src/lib/db/**`.

## Текущий набор команд

- `npm run test:coverage`
  - Основной шлюз покрытия исходного кода для набора юнит-тестов
  - Генерирует `text-summary`, `html`, `json-summary` и `lcov`
- `npm run coverage:report`
  - Подробный отчет по файлам из последнего запуска
- `npm run test:coverage:legacy`
  - Только для исторического сравнения

## Вехи

| Фаза   |                 Цель | Фокус                                             | Статус     |
| ------- | ---------------------: | ------------------------------------------------- | ---------- |
| Фаза 1 | 60% операторов / строк | Быстрые победы и покрытие утилит с низким риском          | ✅ Готово    |
| Фаза 2 | 65% операторов / строк | Основы работы с БД и маршрутизацией                          | ✅ Готово    |
| Фаза 3 | 70% операторов / строк | Проверка провайдеров и аналитика использования           | ✅ Готово    |
| Фаза 4 | 75% операторов / строк | Трансляторы и вспомогательные функции `open-sse`                | ✅ Готово    |
| Фаза 5 | 80% операторов / строк | Обработчики и ветки исполнителя `open-sse`         | ✅ Готово    |
| Фаза 6 | 85% операторов / строк | Сложные крайние случаи, долг по веткам, регрессионные наборы | В процессе |
| Фаза 7 | 90% операторов / строк | Финальная проверка, закрытие пробелов, строгий рачтет          | В ожидании    |

Ветки и функции должны расти с каждой фазой, но основная жесткая цель — операторы / строки.

## Приоритетные горячие точки

Эти файлы имеют наименьшее покрытие строк сегодня (< 60%) и предлагают наилучший результат для Фаз 6-7. Сгенерировано из `coverage/coverage-summary.json` на 2026-05-13:

| #   | Файл                                                              | Строки % |
| --- | ----------------------------------------------------------------- | ------: |
| 1   | `open-sse/services/compression/validation.ts`                     |   7.87% |
| 2   | `src/app/api/v1/batches/route.ts`                                 |   9.67% |
| 3   | `src/app/docs/components/FeedbackWidget.tsx`                      |   9.80% |
| 4   | `open-sse/services/compression/toolResultCompressor.ts`           |  10.00% |
| 5   | `src/app/docs/components/DocCodeBlocks.tsx`                       |  10.63% |
| 6   | `open-sse/services/compression/engines/rtk/lineFilter.ts`         |  10.96% |
| 7   | `open-sse/services/specificityRules.ts`                           |  11.28% |
| 8   | `src/mitm/systemCommands.ts`                                      |  12.19% |
| 9   | `open-sse/services/compression/aggressive.ts`                     |  12.77% |
| 10  | `src/app/api/v1/batches/[id]/cancel/route.ts`                     |  12.98% |
| 11  | `open-sse/services/compression/progressiveAging.ts`               |  13.26% |
| 12  | `open-sse/services/compression/engines/rtk/smartTruncate.ts`      |  13.43% |
| 13  | `open-sse/services/compression/engines/rtk/deduplicator.ts`       |  13.51% |
| 14  | `src/lib/cloudAgent/agents/jules.ts`                              |  13.52% |
| 15  | `open-sse/services/compression/lite.ts`                           |  14.46% |
| 16  | `src/app/api/v1/rerank/route.ts`                                  |  14.94% |
| 17  | `open-sse/services/compression/preservation.ts`                   |  15.07% |
| 18  | `src/lib/cloudAgent/agents/codex.ts`                              |  15.54% |
| 19  | `open-sse/services/tierResolver.ts`                               |  16.66% |
| 20  | `src/app/docs/components/DocsLazyWrapper.tsx`                     |  16.66% |

Темы для Фаз 6-7:

- `open-sse/services/compression/**` является самой плотной группой с низким покрытием и доминирует в оставшемся разрыве.
- Маршруты API для пакетов и переранжирования (`src/app/api/v1/batches/**`, `src/app/api/v1/rerank/route.ts`) нуждаются в тестах уровня обработчика.
- Адаптеры облачных агентов (`src/lib/cloudAgent/agents/jules.ts`, `codex.ts`) и `tierResolver.ts` нуждаются в сценариях тестирования.
- Компоненты пользовательского интерфейса документации и `src/mitm/systemCommands.ts` имеют меньший приоритет, но дешевые победы в ветках.

## Чеклист выполнения

### Фаза 1: 56.95% -> 60%

- [x] Исправить метрику покрытия, чтобы она отражала исходный код вместо тестовых файлов
- [x] Сохранить устаревший скрипт покрытия для сравнения
- [x] Записать базовую линию и горячие точки в репозитории
- [ ] Добавить фокусированные тесты для утилит с низким риском:
  - `src/shared/utils/upstreamError.ts`
  - `src/shared/utils/fetchTimeout.ts`
  - `src/lib/api/errorResponse.ts`
  - `src/shared/utils/apiAuth.ts`
  - `src/lib/display/names.ts`
- [ ] Добавить тесты маршрутов для:
  - `src/app/api/settings/require-login/route.ts`
  - `src/app/api/providers/[id]/models/route.ts`

### Фаза 2: 60% -> 65%

- [ ] Добавить тесты с поддержкой базы данных для:
  - `src/lib/db/modelComboMappings.ts`
  - `src/lib/db/settings.ts`
  - `src/lib/db/registeredKeys.ts`
- [ ] Покрыть поведение ветвей в:
  - `src/lib/providers/validation.ts`
  - `src/app/api/v1/embeddings/route.ts`
  - `src/app/api/v1/moderations/route.ts`

### Фаза 3: 65% -> 70%

- [ ] Добавить тесты аналитики использования для:
  - `src/lib/usage/usageHistory.ts`
  - `src/lib/usage/usageStats.ts`
  - `src/lib/usage/costCalculator.ts`
- [ ] Расширить покрытие маршрутов для управления прокси и ветвей настроек

### Фаза 4: 70% -> 75%

- [ ] Покрыть вспомогательные функции и центральные пути перевода:
  - `open-sse/translator/index.ts`
  - `open-sse/translator/helpers/*`
  - `open-sse/translator/request/*`
  - `open-sse/translator/response/*`

### Фаза 5: 75% -> 80%

- [ ] Добавить тесты уровня обработчика для:
  - `open-sse/handlers/chatCore.ts`
  - `open-sse/handlers/responsesHandler.js`
  - `open-sse/handlers/imageGeneration.js`
  - `open-sse/handlers/embeddings.js`
- [ ] Добавить покрытие ветвей исполнителя для специфической аутентификации поставщиков, повторных попыток и переопределения конечных точек

### Фаза 6: 80% -> 85%

- [ ] Объединить больше наборов тестов для крайних случаев в основной путь покрытия
- [ ] Увеличить покрытие функций для модулей базы данных с слабым покрытием конструкторов/помощников
- [ ] Закрыть разрывы в ветвях в `settings.ts`, `registeredKeys.ts`, `validation.ts` и вспомогательных функциях перевода

### Фаза 7: 85% -> 90%

- [ ] Рассматривать оставшиеся файлы с низким покрытием как блокеры
- [ ] Добавить регрессионные тесты для каждого исправленного в производстве бага, исправленного во время продвижения к 90%
- [ ] Поднять шлюз покрытия в CI только после того, как локальная база будет стабильна в течение двух последовательных запусков

## Политика растяжки

Обновляйте пороги `npm run test:coverage` только после того, как проект действительно превысит следующий этап с комфортным запасом.

**Текущий порог (на 2026-05-13):** `npm run test:coverage` требует **75 statements / 75 lines / 75 functions / 70 branches**. Это консервативная растяжка по сравнению с измеренным базовым уровнем (82.58% / 82.58% / 84.23% / 75.22%) и сохраняет пространство для временных колебаний.

Для проверки порогов в произвольный момент используйте:

```bash
node scripts/check/test-report-summary.mjs --threshold 75
```

Рекомендуемая последовательность растяжки (порядок: `statements-lines / branches / functions`):

1. 55/60/55
2. 60/62/58
3. 65/64/62
4. 70/66/66
5. 75/70/72  <-- текущий порог (75/70/75)
6. 80/75/78
7. 85/80/84
8. 90/85/88

Следующая цель растяжки — `80/75/78`, как только покрытие веток будет выше 78% в течение двух последовательных запусков.

## Известный пробел

Текущая команда покрытия измеряет основную Node-юнитную набор и включает источник, достижимый из него, включая `open-sse`. Она пока не объединяет покрытие Vitest в единый объединенный отчет. Это объединение стоит сделать позже, но оно не является блокирующим для начала подъема от 60% до 80%.
