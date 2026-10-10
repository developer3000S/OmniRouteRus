# @omniroute/opencode-provider

Помощник для подключения [OpenCode](https://opencode.ai) к работающему шлюзу [OmniRoute](https://github.com/diegosouzapw/OmniRoute).

Пакет генерирует **валидную схему** для `opencode.json` (`https://opencode.ai/config.json`), которая делегирует фактическое выполнение [`@ai-sdk/openai-compatible`](https://www.npmjs.com/package/@ai-sdk/openai-compatible). Он не включает новый HTTP-клиент — OmniRoute уже предоставляет совместимый с OpenAI интерфейс, а OpenCode уже использует его через AI SDK.

> Пре-1.0. API может еще изменяться. Смотрите `CHANGELOG` в репозитории OmniRoute для заметок о критичных изменениях.

## Установка

```bash
npm install --save-dev @omniroute/opencode-provider
# или
pnpm add -D @omniroute/opencode-provider
```

Вам также понадобится собственная зависимость OpenCode, но это транзитивная проблема — OpenCode сам поставляется с `@ai-sdk/openai-compatible`. Этот пакет только **генерирует конфигурацию**.

## Быстрый старт

### 1. Создайте новый `opencode.json`

```ts
import { writeFileSync } from "node:fs";
import { buildOmniRouteOpenCodeConfig } from "@omniroute/opencode-provider";

const config = buildOmniRouteOpenCodeConfig({
  baseURL: "http://localhost:20128", // или URL вашего развертывания OmniRoute
  apiKey: process.env.OMNIROUTE_API_KEY ?? "sk_omniroute",
});

writeFileSync("opencode.json", JSON.stringify(config, null, 2));
```

Результирующий `opencode.json`:

```jsonc
{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "omniroute": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "OmniRoute",
      "options": {
        "baseURL": "http://localhost:20128/v1",
        "apiKey": "sk_omniroute",
      },
      "models": {
        "claude-opus-4-5-thinking": { "name": "claude-opus-4-5-thinking" },
        "claude-sonnet-4-5-thinking": { "name": "claude-sonnet-4-5-thinking" },
        "gemini-3.1-pro-high": { "name": "gemini-3.1-pro-high" },
        "gemini-3-flash": { "name": "gemini-3-flash" },
      },
    },
  },
}
```

### 2. Объедините с существующим `opencode.json`

```ts
import { createOmniRouteProvider } from "@omniroute/opencode-provider";

const provider = createOmniRouteProvider({
  baseURL: "http://localhost:20128",
  apiKey: process.env.OMNIROUTE_API_KEY!,
});

// Поместите `provider` под provider.omniroute в вашем opencode.json
```

Если у вас уже есть `opencode.json` на диске и вы хотите неразрушающее слияние с OmniRoute, используйте `omniroute config opencode` из CLI (поставляется с основной установкой OmniRoute) — он сохраняет комментарии и нерелевантные ключи.

## API

### `createOmniRouteProvider(options): OpenCodeProviderEntry`

Возвращает значение для размещения под `provider.omniroute` внутри `opencode.json`.

| Опция          | Тип                     | Обязательно | Описание                                                                                                  |
| -------------- | ----------------------- | ----------- | --------------------------------------------------------------------------------------------------------- |
| `baseURL`      | `string`                | Да          | Базовый URL OmniRoute. Принимает `http://host:port` **или** `http://host:port/v1`. Допускаются конечные слэши. |
| `apiKey`       | `string`                | Да          | API-ключ OmniRoute. Используйте `sk_omniroute` для локальных установок с `REQUIRE_API_KEY=false`.          |
| `displayName`  | `string`                | Нет         | Пользовательское имя, отображаемое в UI OpenCode. По умолчанию: `"OmniRoute"`.                           |
| `models`       | `string[]`              | Нет         | Переопределить каталог моделей. По умолчанию: 4 выбранные модели — см. `OMNIROUTE_DEFAULT_OPENCODE_MODELS`. |
| `modelLabels`  | `Record<string,string>` | Нет         | Человекочитаемые метки, ключи которых — идентификаторы моделей.                                           |

Выбрасывает исключение при пустом/некорректном вводе — `baseURL` должен быть реальным URL, `apiKey` должен быть непустой строкой.

### `buildOmniRouteOpenCodeConfig(options): OpenCodeConfigDocument`

Те же опции, что и выше, но возвращает полный документ с `$schema` и оберткой `provider.omniroute`, готовый для записи в `opencode.json`.

### `normalizeBaseURL(input): string`

Экспортировано для полноты. Удаляет конечные `/`, дублирует конечный `/v1` и добавляет ровно один `/v1`. Выбрасывает исключение при пустом/некорректном вводе.

### Константы

- `OMNIROUTE_PROVIDER_KEY` — `"omniroute"` (ключ, используемый под `provider.*`).
- `OMNIROUTE_PROVIDER_NPM` — `"@ai-sdk/openai-compatible"` (делегат выполнения).
- `OPENCODE_CONFIG_SCHEMA` — `"https://opencode.ai/config.json"`.
- `OMNIROUTE_DEFAULT_OPENCODE_MODELS` — список из 4 идентификаторов моделей по умолчанию.

## Каталог пользовательских моделей

```ts
import { createOmniRouteProvider } from "@omniroute/opencode-provider";

createOmniRouteProvider({
  baseURL: "http://localhost:20128",
  apiKey: "sk_omniroute",
  models: ["auto", "claude-opus-4-7", "gpt-5.5"],
  modelLabels: {
    auto: "Auto-Combo (рекомендуется)",
    "claude-opus-4-7": "Claude Opus 4.7",
    "gpt-5.5": "GPT-5.5",
  },
});
```

Дубликаты и пустые строки автоматически удаляются, а порядок сохраняется.

## Устранение неполадок

- **Запросы 404 с `/v1/v1/...`** — вы используете старую версию (≤1.0.0). Обновите до `≥0.1.0` этой перевыпущенной версии. Новая сборка автоматически нормализует `baseURL`.
- **`401 Invalid API key`** — ваш экземпляр OmniRoute имеет `REQUIRE_API_KEY=true`, но ключ, который вы предоставили, не существует там. Создайте его через панель управления или установите `REQUIRE_API_KEY=false` и используйте `sk_omniroute`.
- **OpenCode жалуется, что у провайдера нет моделей** — укажите явный список `models`; по умолчанию может быть 4, которые могут быть скрыты настройками видимости вашего провайдера.

## Связанные материалы

- [OmniRoute](https://github.com/diegosouzapw/OmniRoute) — шлюз ИИ, на который нацелен этот плагин.
- [OpenCode](https://opencode.ai) — агентный CLI-потребитель.
- [`@ai-sdk/openai-compatible`](https://www.npmjs.com/package/@ai-sdk/openai-compatible) — делегат времени выполнения, который фактически общается по HTTP.

## Лицензия

MIT — см. [`LICENSE`](./LICENSE).