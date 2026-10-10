# bin/cli — внутренности OmniRoute CLI

Этот каталог содержит среду выполнения CLI, вспомогательные утилиты и команды для бинарного файла `omniroute`.

## Структура

```
bin/cli/
├── CONVENTIONS.md          ← нормативные правила проектирования (прочтите это в первую очередь)
├── README.md               ← этот файл
├── program.mjs             ← настройка Commander — глобальные флаги, registerCommands()
├── api.mjs                 ← apiFetch() — все HTTP-запросы + повтор/задержка
├── runtime.mjs             ← withRuntime() — сервер-первый / DB-резервный
├── i18n.mjs                ← t() — вспомогательная утилита для i18n + определение локали
├── output.mjs              ← emit() — таблица/json/jsonl/csv + printSuccess/printError
├── io.mjs                  ← ask() / askSecret() — интерактивные запросы
├── data-dir.mjs            ← resolveDataDir() / resolveStoragePath()
├── sqlite.mjs              ← openOmniRouteDb() — настройка DB
├── encryption.mjs          ← encrypt/decrypt учетных данных
├── provider-catalog.mjs    ← статический каталог провайдеров
├── provider-store.mjs      ← DB CRUD для provider_connections
├── provider-test.mjs       ← testProviderApiKey()
├── settings-store.mjs      ← DB CRUD для key_value настроек
├── locales/
│   ├── en.json             ← Английские строки (источник истины, 42+ локали)
│   ├── pt-BR.json          ← Португальский (Бразилия) — полностью переведен
│   └── {locale}.json       ← 40 дополнительных локалей (ar, az, de, es, fr, ja, zh-CN, …)
├── scripts/
│   └── generate-locales.mjs ← создание новых файлов локалей из config/i18n.json
└── commands/
    ├── setup.mjs
    ├── doctor.mjs
    ├── providers.mjs
    ├── config.mjs          ← включает `config lang get/set/list`
    ├── status.mjs
    ├── logs.mjs
    └── update.mjs
```

## Ключевые вспомогательные утилиты

### `apiFetch(path, opts)` — `api.mjs`

Все HTTP-запросы к серверу OmniRoute должны проходить через этот обертку.

```js
import { apiFetch } from "./api.mjs";

const res = await apiFetch("/api/health");
if (!res.ok) await res.assertOk(); // выбрасывает ApiError с сопоставленным кодом выхода
const data = await res.json();
```

Опции:

- `baseUrl` — переопределение базового URL (по умолчанию: `OMNIROUTE_BASE_URL` env или `localhost:20128`)
- `apiKey` — переопределение API-ключа (по умолчанию: `OMNIROUTE_API_KEY`)
- `method`, `body`, `headers` — стандартные опции fetch
- `timeout` — ms на попытку (по умолчанию: `30000`)
- `retry` — `false` для отключения (по умолчанию: включено)
- `retryMax` — общее количество попыток (по умолчанию: `3`)
- `verbose` — логирование попыток повтора в stderr

### `withRuntime(fn, opts)` — `runtime.mjs`

Предоставляет прозрачный сервер-первый / DB-резервный.

```js
import { withRuntime } from "./runtime.mjs";

await withRuntime(async (ctx) => {
  if (ctx.kind === "http") {
    const res = await ctx.api("/v1/providers");
    return res.json();
  }
  return ctx.db.prepare("SELECT * FROM provider_connections").all();
});
```

- `opts.requireServer = true` — выбрасывает `ServerOfflineError` (exit 3) если оффлайн
- `opts.preferDb = true` — всегда использовать DB (пропустить проверку сервера)

### `t(key, vars)` — `i18n.mjs`

Интернационализированные строки. Каталог загружается из `locales/{locale}.json`.

```js
import { t } from "./i18n.mjs";

console.log(t("common.serverOffline"));
console.log(t("setup.testFailed", { error: err.message }));
```

Порядок определения локали: `OMNIROUTE_LANG` → `LC_ALL` → `LC_MESSAGES` → `LANG` → `en`.

### `emit(data, opts)` — `output.mjs`

Вывод с учетом формата. Читает `opts.output` для выбора table/json/jsonl/csv.

```js
import { emit, printError, EXIT_CODES } from "./output.mjs";

emit(providers, { output: opts.output ?? "table" });
printError("Something went wrong");
process.exit(EXIT_CODES.SERVER_OFFLINE);
```

## Выбор локали

CLI отображает текст на языке пользователя. Порядок определения:

1. `--lang <code>` флаг в командной строке
2. `OMNIROUTE_LANG` переменная окружения
3. Системные переменные: `LC_ALL` → `LC_MESSAGES` → `LANG`
4. Резерв: `en`

**Установить постоянно:**

```bash
omniroute config lang set pt-BR       # сохраняет в ~/.omniroute/.env
omniroute config lang list            # показать все 42 доступные локали
omniroute config lang get             # показать текущую активную локаль
```

**Временное переопределение:**

```bash
omniroute --lang de providers list    # запуск на немецком, не сохраняется
OMNIROUTE_LANG=ja omniroute status    # тот же эффект через env
```

**Добавление новой локали**: добавьте запись в `config/i18n.json`, затем выполните:

```bash
node bin/cli/scripts/generate-locales.mjs
```

## Добавление новой команды

1. Создайте `bin/cli/commands/your-command.mjs`
2. Экспортируйте `registerYourCommand(program)` следуя шаблону Commander
3. Зарегистрируйте в `bin/cli/commands/registry.mjs`
4. Добавьте строки в `locales/en.json` и `locales/pt-BR.json`
5. Напишите тест в `tests/unit/cli-your-command.test.ts`

См. `CONVENTIONS.md` для кодов выхода, имен флагов, формата вывода и правил разрушительных действий.
