# GUARDRAILS (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇮🇩 [in](../../../in/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md)

---

---
title: "Guardrails"
version: 3.8.2
lastUpdated: 2026-05-13
---

# Guardrails

> **Источник истины:** `src/lib/guardrails/`
> **Последнее обновление:** 2026-05-13 — v3.8.0

Guardrails обеспечивают безопасность, соблюдение политики и преобразование контента на границе между OmniRoute и поставщиками. Каждый guardrail может проверять (и, при необходимости, отклонять, преобразовывать или аннотировать) полезные нагрузки запросов (`preCall`) и ответы от поставщиков (`postCall`).

Система работает в режиме **fail-open**: если guardrail выбрасывает исключение во время выполнения, реестр записывает ошибку и продолжает выполнение следующего guardrail, а не завершает запрос. Блокировка является явным решением (`block: true`), а не случайностью.

## Встроенные Guardrails

Реестр автоматически загружает три guardrail в порядке приоритета при импорте (см. `registry.ts` → `registerDefaultGuardrails()`):

| Приоритет | Название            | Этап(ы)        | Файл                 |
| -------- | ------------------ | -------------- | -------------------- |
| `5`      | `vision-bridge`    | `preCall`      | `visionBridge.ts`    |
| `10`     | `pii-masker`       | `pre` + `post` | `piiMasker.ts`       |
| `20`     | `prompt-injection` | `preCall`      | `promptInjection.ts` |

Меньшие числа приоритета выполняются **первыми**.

### Vision Bridge (`visionBridge.ts`)

Перехватывает запросы с изображениями, направленные на **невизуальные модели**, и заменяет части с изображениями текстовыми описаниями, созданными с помощью настраиваемой визуальной модели перед вызовом поставщика. Это позволяет текстовым поставщикам прозрачно обрабатывать мультимодальные полезные нагрузки.

Поток:

1. Пропустить, если целевая модель уже поддерживает визуальные данные (если только она не находится в списке принудительного моста `isVisionBridgeForcedModel`).
2. Извлечь части с изображениями через `extractImageParts(messages)`. Пропустить, если их нет.
3. Загрузить конфигурацию времени выполнения из `getSettings()` (`visionBridgeEnabled`, `visionBridgeModel`, `visionBridgePrompt`, `visionBridgeTimeout`, `visionBridgeMaxImages`).
4. Ограничить количество изображений до `maxImages`, вызвать визуальную модель **параллельно** (`Promise.allSettled`) и вставить текстовые части `[Image N]: <description>` вместо изображений — неудачные изображения становятся `[Image N]: (unavailable)`.
5. Вернуть `modifiedPayload` + метаданные (`imagesProcessed`, `processingTimeMs`, `visionModel`).

Значения по умолчанию находятся в `src/shared/constants/visionBridgeDefaults.ts`. Guardrail предоставляет опцию конструктора `deps`, чтобы тесты могли внедрять фальшивые реализации `getSettings` и `callVisionModel`.

### PII Masker (`piiMasker.ts`)

Работает на **оба этапа**.

- **`preCall`** клонирует полезную нагрузку, обходит массивы `system`, `messages` и `input` и применяет `processPII()` (из `@/shared/utils/inputSanitizer`) к строкам `content`/`text` полей. Когда `PII_REDACTION_ENABLED=true` **и** `INPUT_SANITIZER_MODE=redact`, обнаруженные PII удаляются/редактируются в исходящей полезной нагрузке. В противном случае вызов записывает количество обнаруженных PII без изменения содержимого.
- **`postCall`** глубоко клонирует ответ, запускает `sanitizePIIResponse` плюс маскировщик формы API-ответов (`maskResponsesOutput` — охватывает `output_text` и `output[].content[].text`). Если происходит редактирование, измененный ответ заменяет оригинал.

Guardrail никогда не блокирует; он только аннотирует (`meta.detections`, `meta.redacted`) или переписывает.

### Prompt Injection (`promptInjection.ts`)

Обнаруживает вредоносные структуры в пользовательском контенте и применяет заданную политику. Поведение определяется переменными окружения и опциями конструктора:

| Настройка        | Переменная окружения                                         | По умолчанию | Эффект                                  |
| --------------- | ----------------------------------------------- | ------- | --------------------------------------- |
| Включено         | `INPUT_SANITIZER_ENABLED`                       | `true`  | При `false` guardrail завершает работу. |
| Режим            | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE` | `warn`  | `block`, `warn`, или `log`.              |
| Порог блокировки | `blockThreshold` option                         | `high`  | Минимальная серьезность для блокировки.     |

Источники обнаружения:

1. `sanitizeRequest()` из `@/shared/utils/inputSanitizer` (общий набор детекторов, используемый в других частях конвейера).
2. Встроенные `DEFAULT_GUARD_PATTERNS` (в настоящее время `system_override_inline` и `markdown_system_block`, оба `high` серьезности).
3. Необязательные `customPatterns`, переданные через опции конструктора (строки, регулярные выражения или `{ name, pattern, severity }` записи).

Когда `mode === "block"` **и** хотя бы одно обнаружение соответствует порогу серьезности, `preCall` возвращает `{ block: true, message: "Request rejected: suspicious content detected" }`. В режимах `warn`/`log` guardrail регистрирует, но позволяет вызовы. Общий вспомогательный метод `evaluatePromptInjection()` также экспортируется для вызывающих, которые хотят оценить подсказки без прохождения через реестр.

## Base Contract (`base.ts`)

```typescript
class BaseGuardrail {
  enabled: boolean;
  name: string;
  priority: number;

  constructor(name: string, options?: { enabled?: boolean; priority?: number });

  async preCall(payload: unknown, context: GuardrailContext): Promise<GuardrailResult | void>;

  async postCall(response: unknown, context: GuardrailContext): Promise<GuardrailResult | void>;
}

interface GuardrailResult<TValue = unknown> {
  block?: boolean; // true прерывает цепочку
  message?: string; // отображается при блокировке
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // возвращается preCall для перезаписи запроса
  modifiedResponse?: TValue; // возвращается postCall для перезаписи ответа
}

interface GuardrailContext {
  apiKeyInfo?: Record<string, unknown> | null;
  disabledGuardrails?: string[] | null;
  endpoint?: string | null;
  headers?: Headers | Record<string, unknown> | null;
  log?: GuardrailLog | Console | null;
  method?: string | null;
  model?: string | null;
  provider?: string | null;
  sourceFormat?: string | null;
  stream?: boolean;
  targetFormat?: string | null;
}
```

Ограждение сигнализирует о "без изменений", возвращая либо `void`, либо `{}`, либо
`{ block: false }`. Возвращение `modifiedPayload`/`modifiedResponse` заменяет
значение, проходящее через цепочку, для последующих ограждений.

## Реестр (`registry.ts`)

Синглтон `guardrailRegistry` предоставляет:

- `register(guardrail)` — добавляет (или заменяет по нормализованному имени) ограждение и
  пересортировывает по возрастанию `priority`.
- `clear()` / `list()` — вспомогательные методы для администрирования.
- `runPreCallHooks(payload, context)` — итерирует активные ограждения, передает
  payload через `modifiedPayload`, и останавливается на первом `block: true`.
- `runPostCallHooks(response, context)` — тот же поток на стороне ответа.
- `resetGuardrailsForTests({ registerDefaults })` — очищает состояние и при необходимости
  перерегистрирует стандартные значения для изолированных тестов.

Оба метода возвращают `{ blocked, payload|response, results, guardrail?, message? }`,
где `results` — массив записей `GuardrailExecutionResult`, включающий
поля `blocked`, `skipped`, `modified`, `error`, и `meta` для каждого ограждения,
полезные для трассировки.

### Отключение Ограждений на Запрос

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` собирает дедуплицированный список имен ограждений, которые должны быть пропущены для текущего запроса. Источники (все необязательные, все объединяются):

- `apiKeyInfo.disabledGuardrails`
- Тело запроса `disabledGuardrails` (на верхнем уровне)
- Тело запроса `metadata.disabledGuardrails`
- Заголовок `x-omniroute-disabled-guardrails` (или устаревший
  `x-disabled-guardrails`)

Значения могут быть массивами строк или строкой, разделенной запятыми; имена нормализуются в нижний регистр с kebab-case (`pii_masker` → `pii-masker`). Результат передается через `context.disabledGuardrails` в реестр, который пропускает соответствующие ограждения (`skipped: true` в `results`).

## Порядок Выполнения

Для каждого запроса, проходящего через `src/sse/handlers/chat.ts` и
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` строит список пропускаемых ограждений из API-ключа, тела и заголовков.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` запускает ограждения в порядке возрастания приоритета:
   - Отключенные ограждения записываются как `skipped`.
   - `preCall` каждого ограждения может переписать payload через `modifiedPayload`.
   - Первый `block: true` прерывает цепочку, и обработчик возвращает ответ с отклонением ограждения.
3. (Возможно переписанный) payload передается в комбинированное маршрутизирование и диспетчеризацию вверх.
4. После того, как ответ собран, `guardrailRegistry.runPostCallHooks(...)` запускает ту же цепочку на ответе. `block: true` здесь отбрасывает ответ от вышестоящего уровня.

Ограждения, которые выбрасывают исключения, записываются с `error: <message>` и логируются через
`logger.warn`, но цепочка продолжается — по дизайну fail-open.
```

## Конфигурация

Переменные окружения, читаемые встроенными guardrails:

| Переменная                            | Используется                      | Эффект                                                |
| ------------------------------------- | -------------------------------- | ----------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`               | Установите `false`, чтобы полностью отключить обнаружение. |
| `INPUT_SANITIZER_MODE`               | `prompt-injection`, `pii-masker` | Общий режим: `warn`, `block`, `log` или `redact`.     |
| `INJECTION_GUARD_MODE`               | `prompt-injection`               | Устаревший псевдоним для `INPUT_SANITIZER_MODE`.      |
| `PII_REDACTION_ENABLED`              | `pii-masker`                     | При `true` + режиме `redact`, PII из запроса удаляется. |
| `PII_RESPONSE_SANITIZATION` / `_MODE`| `pii-masker` (downstream)        | Управляет поведением маскировщика ответов.            |

Vision Bridge считывает конфигурацию времени выполнения из хранилища настроек, поддерживаемого БД (`getSettings()`), а не из переменных окружения: `visionBridgeEnabled`, `visionBridgeModel`, `visionBridgePrompt`, `visionBridgeTimeout`, `visionBridgeMaxImages`. Значения по умолчанию находятся в `src/shared/constants/visionBridgeDefaults.ts`.

## Пользовательские Guardrails

```typescript
import { BaseGuardrail, guardrailRegistry } from "@/lib/guardrails";

class BudgetGuardrail extends BaseGuardrail {
  constructor() {
    super("budget", { priority: 50 });
  }

  async preCall(payload, ctx) {
    if (ctx.apiKeyInfo?.budgetExceeded) {
      return { block: true, message: "Daily budget exceeded" };
    }
    return { block: false };
  }
}

guardrailRegistry.register(new BudgetGuardrail());
```

Шаги:

1. Создайте `src/lib/guardrails/myGuardrail.ts`, расширяющий `BaseGuardrail`.
2. Реализуйте `preCall` и/или `postCall`.
3. Либо зарегистрируйте при импорте (push из `registerDefaultGuardrails`), либо вызовите `guardrailRegistry.register(...)` во время выполнения — реестр заменяет любой предыдущий guardrail с таким же нормализованным именем.
4. Добавьте тесты в `tests/unit/` (примеры существующих тестов: `tests/unit/guardrails-registry.test.ts`, `tests/unit/prompt-injection-guard.test.ts`, `tests/unit/guardrails/visionBridge.test.ts`).

## Тестирование

Используйте `resetGuardrailsForTests()` между тестами, чтобы начать с известного состояния. Передайте `{ registerDefaults: false }`, чтобы начать с пустого реестра и зарегистрировать только guardrails, которые тестируются. Guardrail Vision Bridge принимает внедрение зависимостей (`deps.getSettings`, `deps.callVisionModel`), поэтому тесты могут выполнять полный поток без доступа к БД или сети.

## Смотрите также

- `src/lib/guardrails/` — реализация
- `src/shared/utils/inputSanitizer.ts` — общий детектор, который обеспечивает работу prompt-injection и маскировки PII
- `src/shared/constants/visionBridgeDefaults.ts` — значения по умолчанию Vision Bridge и список моделей, для которых принудительно используется мост
- `docs/architecture/RESILIENCE_GUIDE.md` — ортогональный слой (circuit breaker, cooldowns)
- `docs/reference/ENVIRONMENT.md` — полная ссылка на переменные окружения
