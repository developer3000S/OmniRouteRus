# OmniRoute CLI Plugin System (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../dev/plugins.md) · 🇸🇦 [ar](../../../ar/docs/dev/plugins.md) · 🇦🇿 [az](../../../az/docs/dev/plugins.md) · 🇧🇬 [bg](../../../bg/docs/dev/plugins.md) · 🇧🇩 [bn](../../../bn/docs/dev/plugins.md) · 🇨🇿 [cs](../../../cs/docs/dev/plugins.md) · 🇩🇰 [da](../../../da/docs/dev/plugins.md) · 🇩🇪 [de](../../../de/docs/dev/plugins.md) · 🇪🇸 [es](../../../es/docs/dev/plugins.md) · 🇮🇷 [fa](../../../fa/docs/dev/plugins.md) · 🇫🇮 [fi](../../../fi/docs/dev/plugins.md) · 🇫🇷 [fr](../../../fr/docs/dev/plugins.md) · 🇮🇳 [gu](../../../gu/docs/dev/plugins.md) · 🇮🇱 [he](../../../he/docs/dev/plugins.md) · 🇮🇳 [hi](../../../hi/docs/dev/plugins.md) · 🇭🇺 [hu](../../../hu/docs/dev/plugins.md) · 🇮🇩 [id](../../../id/docs/dev/plugins.md) · 🇮🇩 [in](../../../in/docs/dev/plugins.md) · 🇮🇹 [it](../../../it/docs/dev/plugins.md) · 🇯🇵 [ja](../../../ja/docs/dev/plugins.md) · 🇰🇷 [ko](../../../ko/docs/dev/plugins.md) · 🇮🇳 [mr](../../../mr/docs/dev/plugins.md) · 🇲🇾 [ms](../../../ms/docs/dev/plugins.md) · 🇳🇱 [nl](../../../nl/docs/dev/plugins.md) · 🇳🇴 [no](../../../no/docs/dev/plugins.md) · 🇵🇭 [phi](../../../phi/docs/dev/plugins.md) · 🇵🇱 [pl](../../../pl/docs/dev/plugins.md) · 🇵🇹 [pt](../../../pt/docs/dev/plugins.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/dev/plugins.md) · 🇷🇴 [ro](../../../ro/docs/dev/plugins.md) · 🇸🇰 [sk](../../../sk/docs/dev/plugins.md) · 🇸🇪 [sv](../../../sv/docs/dev/plugins.md) · 🇰🇪 [sw](../../../sw/docs/dev/plugins.md) · 🇮🇳 [ta](../../../ta/docs/dev/plugins.md) · 🇮🇳 [te](../../../te/docs/dev/plugins.md) · 🇹🇭 [th](../../../th/docs/dev/plugins.md) · 🇹🇷 [tr](../../../tr/docs/dev/plugins.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/dev/plugins.md) · 🇵🇰 [ur](../../../ur/docs/dev/plugins.md) · 🇻🇳 [vi](../../../vi/docs/dev/plugins.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/dev/plugins.md)

---

Расширьте интерфейс командной строки `omniroute` без изменения его основного кода. Плагины следуют соглашению об именовании `omniroute-cmd-*`, аналогичному `gh extension` или `kubectl plugin`.

## Быстрый старт

```bash
# Установите плагин из npm
omniroute plugin install stripe

# Установите локальный плагин в разработке
omniroute plugin install ./my-plugin

# Список установленных плагинов
omniroute plugin list

# Создайте новый плагин
omniroute plugin scaffold myplugin
cd omniroute-cmd-myplugin
omniroute plugin install .
```

## Анатомия плагина

Плагин — это npm-пакет с именем `omniroute-cmd-<name>` (или `@scope/omniroute-cmd-<name>`).

```
omniroute-cmd-myplugin/
├── package.json     # должен содержать "type": "module" и "main": "index.mjs"
├── index.mjs        # экспортирует register(program, ctx) + необязательный meta
└── README.md
```

### `package.json`

```json
{
  "name": "omniroute-cmd-myplugin",
  "version": "0.1.0",
  "type": "module",
  "main": "index.mjs",
  "engines": { "omniroute": ">=4.0.0" },
  "keywords": ["omniroute-plugin", "omniroute-cmd"]
}
```

### `index.mjs`

```js
export const meta = {
  name: "myplugin",
  version: "0.1.0",
  description: "Мой плагин для OmniRoute",
  omnirouteApi: ">=4.0.0",
};

export function register(program, ctx) {
  program
    .command("myplugin")
    .description(meta.description)
    .option("-n, --name <name>")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      const res = await ctx.apiFetch("/api/combos", {
        baseUrl: gOpts.baseUrl,
        apiKey: gOpts.apiKey,
      });
      const data = await res.json();
      ctx.emit(data, gOpts);
    });
}
```

## API контекста плагина

Объект `ctx`, передаваемый в `register(program, ctx)`:

| Свойство                     | Тип              | Описание                                        |
| ---------------------------- | ---------------- | -------------------------------------------------- |
| `ctx.apiFetch(path, opts)`   | `async function` | Аутентифицированный запрос к серверу OmniRoute    |
| `ctx.emit(data, opts)`       | `function`       | Вывод в таблице/json/jsonl/csv в зависимости от флага `--output` |
| `ctx.t(key)`                 | `async function` | Поиск перевода i18n                              |
| `ctx.withSpinner(label, fn)` | `async function` | Обёртка для асинхронной функции с индикатором ora |
| `ctx.baseUrl`                | `string`         | Разрешённый базовый URL                          |
| `ctx.apiKey`                 | `string \| null` | API-ключ, если предоставлен                       |

## Обнаружение

Плагины обнаруживаются из:

1. `~/.omniroute/plugins/<name>/` — локальные установки пользователя
2. Переменная окружения `OMNIROUTE_PLUGIN_PATH` — пользовательский каталог

Ошибки загрузки перехватываются и выводятся как предупреждения — сломанный плагин никогда не вызывает сбоя CLI.

## Безопасность

Плагины работают с теми же привилегиями Node.js процесса, что и `omniroute`. Устанавливайте плагины только из доверенных источников. `omniroute plugin install` показывает явное предупреждение и требует `--yes` или интерактивного подтверждения.

## Публикация

1. Убедитесь, что `package.json` содержит `"keywords": ["omniroute-plugin"]`
2. `npm publish` как обычно
3. Пользователи могут обнаружить плагины через `omniroute plugin search <query>` (поиск в реестре npm)

## Пример плагина

Смотрите [`examples/omniroute-cmd-hello/`](../../examples/omniroute-cmd-hello/index.mjs) для минимального рабочего примера с `meta` + `register()`.
