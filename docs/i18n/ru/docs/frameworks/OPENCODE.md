# OPENCODE (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../frameworks/OPENCODE.md) · 🇸🇦 [ar](../../../ar/docs/frameworks/OPENCODE.md) · 🇦🇿 [az](../../../az/docs/frameworks/OPENCODE.md) · 🇧🇬 [bg](../../../bg/docs/frameworks/OPENCODE.md) · 🇧🇩 [bn](../../../bn/docs/frameworks/OPENCODE.md) · 🇨🇿 [cs](../../../cs/docs/frameworks/OPENCODE.md) · 🇩🇰 [da](../../../da/docs/frameworks/OPENCODE.md) · 🇩🇪 [de](../../../de/docs/frameworks/OPENCODE.md) · 🇪🇸 [es](../../../es/docs/frameworks/OPENCODE.md) · 🇮🇷 [fa](../../../fa/docs/frameworks/OPENCODE.md) · 🇫🇮 [fi](../../../fi/docs/frameworks/OPENCODE.md) · 🇫🇷 [fr](../../../fr/docs/frameworks/OPENCODE.md) · 🇮🇳 [gu](../../../gu/docs/frameworks/OPENCODE.md) · 🇮🇱 [he](../../../he/docs/frameworks/OPENCODE.md) · 🇮🇳 [hi](../../../hi/docs/frameworks/OPENCODE.md) · 🇭🇺 [hu](../../../hu/docs/frameworks/OPENCODE.md) · 🇮🇩 [id](../../../id/docs/frameworks/OPENCODE.md) · 🇮🇩 [in](../../../in/docs/frameworks/OPENCODE.md) · 🇮🇹 [it](../../../it/docs/frameworks/OPENCODE.md) · 🇯🇵 [ja](../../../ja/docs/frameworks/OPENCODE.md) · 🇰🇷 [ko](../../../ko/docs/frameworks/OPENCODE.md) · 🇮🇳 [mr](../../../mr/docs/frameworks/OPENCODE.md) · 🇲🇾 [ms](../../../ms/docs/frameworks/OPENCODE.md) · 🇳🇱 [nl](../../../nl/docs/frameworks/OPENCODE.md) · 🇳🇴 [no](../../../no/docs/frameworks/OPENCODE.md) · 🇵🇭 [phi](../../../phi/docs/frameworks/OPENCODE.md) · 🇵🇱 [pl](../../../pl/docs/frameworks/OPENCODE.md) · 🇵🇹 [pt](../../../pt/docs/frameworks/OPENCODE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/frameworks/OPENCODE.md) · 🇷🇴 [ro](../../../ro/docs/frameworks/OPENCODE.md) · 🇸🇰 [sk](../../../sk/docs/frameworks/OPENCODE.md) · 🇸🇪 [sv](../../../sv/docs/frameworks/OPENCODE.md) · 🇰🇪 [sw](../../../sw/docs/frameworks/OPENCODE.md) · 🇮🇳 [ta](../../../ta/docs/frameworks/OPENCODE.md) · 🇮🇳 [te](../../../te/docs/frameworks/OPENCODE.md) · 🇹🇭 [th](../../../th/docs/frameworks/OPENCODE.md) · 🇹🇷 [tr](../../../tr/docs/frameworks/OPENCODE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/frameworks/OPENCODE.md) · 🇵🇰 [ur](../../../ur/docs/frameworks/OPENCODE.md) · 🇻🇳 [vi](../../../vi/docs/frameworks/OPENCODE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/frameworks/OPENCODE.md)

---

---
title: "Интеграция OpenCode"
version: 3.8.2
lastUpdated: 2026-05-14
---

# Интеграция OpenCode

> **Статус:** Доступно в общем доступе.
> **Аудитория:** Операторы, подключающие OpenCode к развертыванию OmniRoute.
> **Источник истины (схема конфигурации):** `src/shared/services/opencodeConfig.ts`
> **Источник истины (пакет npm):** `@omniroute/opencode-provider/` (публикуемый рабочий простанство)

[OpenCode](https://opencode.ai) — это агентный клиент CLI/desktop AI. Он читает свой каталог провайдеров из `~/.config/opencode/opencode.json` (или `opencode.jsonc`) и следует схеме по адресу `https://opencode.ai/config.json`. OmniRoute предоставляет себя OpenCode в качестве одного из этих провайдеров — каждый запрос проходит через стандартный поверхность OpenAI-совместимый `/v1`, поэтому OpenCode автоматически получает преимущества от маршрутизации Auto-Combo, предохранителей, политик ключей, наблюдаемости и т.д.

Существует **два поддерживаемых пути интеграции**. Выберите один — они генерируют одинаковую конфигурацию.

---

## Путь 1 — Генератор CLI (без установки npm)

Рекомендуется для конечных пользователей. Входит в состав OmniRoute. Записывает `opencode.json` на месте.

```bash
# После установки OmniRoute (npm i -g @omniroute/cli или локальный клон)
omniroute config opencode \
  --baseUrl http://localhost:20128 \
  --apiKey "$OMNIROUTE_API_KEY"
```

Внутри CLI вызывается `mergeOpenCodeConfigText()` (`src/shared/services/opencodeConfig.ts:104`), поэтому существующий `opencode.json` сохраняет других провайдеров и комментарии. Запись OmniRoute добавляется/заменяется атомарно.

Результирующий файл (каталог моделей по умолчанию):

```jsonc
{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "omniroute": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "OmniRoute",
      "options": {
        "baseURL": "http://localhost:20128/v1",
        "apiKey": "<your-key>",
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

---

## Путь 2 — Пакет npm `@omniroute/opencode-provider`

Рекомендуется при скриптовании конфигурации из Node/TS (конвейеры CI, монорепозитории, пользовательские потоки установки).

```bash
npm install --save-dev @omniroute/opencode-provider
```

```ts
import { writeFileSync } from "node:fs";
import { buildOmniRouteOpenCodeConfig } from "@omniroute/opencode-provider";

const config = buildOmniRouteOpenCodeConfig({
  baseURL: "http://localhost:20128",
  apiKey: process.env.OMNIROUTE_API_KEY ?? "sk_omniroute",
  // Необязательно: переопределить каталог моделей, представленный OpenCode
  models: ["auto", "claude-opus-4-7", "gpt-5.5"],
  modelLabels: { auto: "Auto-Combo" },
});

writeFileSync("opencode.json", JSON.stringify(config, null, 2));
```

Для неразрушающего слияния с существующим файлом воспроизведите `mergeOpenCodeConfigText()` из `opencodeConfig.ts` или вызовите генератор CLI.

См. [README пакета](../../@omniroute/opencode-provider/README.md) для полного API.

---

## Что на самом деле делает рантайм

Оба пути приводят к тому же `provider.omniroute.npm: "@ai-sdk/openai-compatible"`. В рантайме OpenCode загружает `@ai-sdk/openai-compatible` (уже транзитивная зависимость OpenCode) и настраивает его с `baseURL` + `apiKey`. Оттуда:

```
OpenCode UI/agent
   → @ai-sdk/openai-compatible
      → HTTP POST {baseURL}/chat/completions          (OmniRoute OpenAI surface)
         → OmniRoute /v1/chat/completions handler     (open-sse/handlers/chatCore.ts)
            → combo routing / Auto-Combo / executor
               → upstream provider
```

Плагин никогда не трогает HTTP. Он только генерирует конфигурацию.

---

## Модельный каталог по умолчанию

```ts
export const OMNIROUTE_DEFAULT_OPENCODE_MODELS = [
  "claude-opus-4-5-thinking",
  "claude-sonnet-4-5-thinking",
  "gemini-3.1-pro-high",
  "gemini-3-flash",
] as const;
```

Вы можете переопределить через `models: [...]`. Рекомендуемые дополнения:

- `"auto"` — отображает [Auto-Combo](../routing/AUTO-COMBO.md) роутер OmniRoute с нулевой конфигурацией. Позволяет OpenCode выбрать "лучшую доступную модель" без жесткого кодирования каталога.
- `"<combo-name>"` — любая комбинация, которую вы определили в панели управления; OmniRoute разрешает ее прозрачно.

---

## Нормализация URL

Помощник принимает обе формы и выдает ровно один `/v1`:

| Вход                           | Выход (`options.baseURL`)  |
| ------------------------------ | --------------------------- |
| `http://localhost:20128`       | `http://localhost:20128/v1` |
| `http://localhost:20128/`      | `http://localhost:20128/v1` |
| `http://localhost:20128/v1`    | `http://localhost:20128/v1` |
| `http://localhost:20128/v1///` | `http://localhost:20128/v1` |

Это дедупликация — **наиболее распространенная ошибка** в старых конфигурациях. Если у вас есть `opencode.json` до v3.8.0, который указывает на `/v1/v1/...`, перезапустите генератор или вызовите `createOmniRouteProvider` снова.

---

## Режимы аутентификации

| Настройка OmniRoute                           | Рекомендуемое значение `apiKey`                            |
| ------------------------------------------- | ----------------------------------------------------- |
| `REQUIRE_API_KEY=false` (по умолчанию для локального) | `sk_omniroute` (буквальный заполнитель)                  |
| `REQUIRE_API_KEY=true`                      | Реальный ключ API на пользователя из Dashboard → API Manager. |

Для клиентов в стиле Anthropic, которые отправляют `x-api-key` + `anthropic-version`, `extractApiKey` OmniRoute также учитывает ключ из `x-api-key`. OpenCode использует поверхность OpenAI, поэтому он всегда будет отправлять `Authorization: Bearer ${apiKey}` — здесь нет специального случая для Anthropic.

---

## Устранение неполадок

| Симптом                                              | Причина                                                               | Исправление                                                                                                  |
| ---------------------------------------------------- | ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `404` на каждый запрос с URL, содержащим `/v1/v1/` | Устаревшая конфигурация из плагина до v3.8, который дважды добавлял `/v1`.       | Перегенерируйте через путь 1 или 2.                                                                          |
| `401 Invalid API key`                                | OmniRoute имеет `REQUIRE_API_KEY=true`, и ключ неизвестен.        | Создайте ключ в панели управления, или установите `REQUIRE_API_KEY=false` (только локально) и используйте `sk_omniroute`. |
| Список моделей пуст в OpenCode UI                      | Все 4 модели по умолчанию скрыты в видимости провайдера OmniRoute. | Передайте `models: ["auto", ...]`, чтобы отобразить те, которые вы включили.                                         |
| OpenCode 500 с `cannot read property 'models'`    | Более старый OpenCode (< 0.1.x) не принимал встроенные `models`.             | Обновите OpenCode до версии, которая следует схеме v1 (`opencode.ai/config.json`).                |

## Смотрите также

- [Справочник API](../reference/API_REFERENCE.md) — полный REST-интерфейс OmniRoute
- [Auto-Combo](../routing/AUTO-COMBO.md) — что означает `model: "auto"`
- [`@omniroute/opencode-provider` README](../../@omniroute/opencode-provider/README.md)
- Источник: `src/shared/services/opencodeConfig.ts`, `src/lib/cli-helper/config-generator/opencode.ts`, `@omniroute/opencode-provider/src/index.ts`
