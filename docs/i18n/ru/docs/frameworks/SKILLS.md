# SKILLS (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../frameworks/SKILLS.md) · 🇸🇦 [ar](../../../ar/docs/frameworks/SKILLS.md) · 🇦🇿 [az](../../../az/docs/frameworks/SKILLS.md) · 🇧🇬 [bg](../../../bg/docs/frameworks/SKILLS.md) · 🇧🇩 [bn](../../../bn/docs/frameworks/SKILLS.md) · 🇨🇿 [cs](../../../cs/docs/frameworks/SKILLS.md) · 🇩🇰 [da](../../../da/docs/frameworks/SKILLS.md) · 🇩🇪 [de](../../../de/docs/frameworks/SKILLS.md) · 🇪🇸 [es](../../../es/docs/frameworks/SKILLS.md) · 🇮🇷 [fa](../../../fa/docs/frameworks/SKILLS.md) · 🇫🇮 [fi](../../../fi/docs/frameworks/SKILLS.md) · 🇫🇷 [fr](../../../fr/docs/frameworks/SKILLS.md) · 🇮🇳 [gu](../../../gu/docs/frameworks/SKILLS.md) · 🇮🇱 [he](../../../he/docs/frameworks/SKILLS.md) · 🇮🇳 [hi](../../../hi/docs/frameworks/SKILLS.md) · 🇭🇺 [hu](../../../hu/docs/frameworks/SKILLS.md) · 🇮🇩 [id](../../../id/docs/frameworks/SKILLS.md) · 🇮🇩 [in](../../../in/docs/frameworks/SKILLS.md) · 🇮🇹 [it](../../../it/docs/frameworks/SKILLS.md) · 🇯🇵 [ja](../../../ja/docs/frameworks/SKILLS.md) · 🇰🇷 [ko](../../../ko/docs/frameworks/SKILLS.md) · 🇮🇳 [mr](../../../mr/docs/frameworks/SKILLS.md) · 🇲🇾 [ms](../../../ms/docs/frameworks/SKILLS.md) · 🇳🇱 [nl](../../../nl/docs/frameworks/SKILLS.md) · 🇳🇴 [no](../../../no/docs/frameworks/SKILLS.md) · 🇵🇭 [phi](../../../phi/docs/frameworks/SKILLS.md) · 🇵🇱 [pl](../../../pl/docs/frameworks/SKILLS.md) · 🇵🇹 [pt](../../../pt/docs/frameworks/SKILLS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/frameworks/SKILLS.md) · 🇷🇴 [ro](../../../ro/docs/frameworks/SKILLS.md) · 🇸🇰 [sk](../../../sk/docs/frameworks/SKILLS.md) · 🇸🇪 [sv](../../../sv/docs/frameworks/SKILLS.md) · 🇰🇪 [sw](../../../sw/docs/frameworks/SKILLS.md) · 🇮🇳 [ta](../../../ta/docs/frameworks/SKILLS.md) · 🇮🇳 [te](../../../te/docs/frameworks/SKILLS.md) · 🇹🇭 [th](../../../th/docs/frameworks/SKILLS.md) · 🇹🇷 [tr](../../../tr/docs/frameworks/SKILLS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/frameworks/SKILLS.md) · 🇵🇰 [ur](../../../ur/docs/frameworks/SKILLS.md) · 🇻🇳 [vi](../../../vi/docs/frameworks/SKILLS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/frameworks/SKILLS.md)

---

---
title: "Skills Framework"
version: 3.8.2
lastUpdated: 2026-05-13
---

# Skills Framework

> **Источник истины:** `src/lib/skills/` и `src/app/api/skills/`
> **Последнее обновление:** 2026-05-13 — v3.8.0

OmniRoute предоставляет расширяемый фреймворк Skills, который позволяет языковым моделям (и операторам) создавать переиспользуемые возможности — от чтения и записи файлов до HTTP-запросов, выполнения кода в песочнице и навыков из маркетплейса.

Навык — это версия, определенная по схеме, единица работы. OmniRoute может внедрять навыки как определения инструментов в исходящие запросы, перехватывать вызовы инструментов, возвращаемые моделью, выполнять соответствующий обработчик и возвращать результат модели, чтобы продолжить разговор. Модель никогда не видит реализацию — только интерфейс инструмента.

---

## Концепции

### Источники навыков

Три источника навыков существуют в одной и той же регистратуре:

1. **Встроенные навыки** (`src/lib/skills/builtins.ts`) — поставляются с OmniRoute. Охватывают общие случаи:
   - `file_read`, `file_write` — песочница рабочего пространства под `<DATA_DIR>/skills/workspaces/<hashed-key>/`
   - `http_request` — исходящие HTTP-запросы через `safeOutboundFetch` с `guard: "public-only"`
   - `web_search` — поиск с возможностью подключения провайдера с кэшированием (`executeWebSearch`)
   - `eval_code` — выполнение кода в Docker-песочнице (`node` или `python`)
   - `execute_command` — выполнение командной оболочки в Docker-песочнице
   - `browser` — обертка Playwright, отключена по умолчанию (`builtin/browser.ts`)
2. **SkillsMP** (OmniRoute Marketplace) — загружаются с `https://skillsmp.com/api/v1/skills/search`. Требуется `skillsmpApiKey` в настройках.
3. **SkillsSH** (`skills.sh` сообщество каталог) — загружаются с `https://skills.sh/api/search`. Авторизация не требуется; контент SKILL.md загружается с GitHub raw.

Один "активный провайдер" управляет тем, из какого каталога происходит установка в панели управления (`src/lib/skills/providerSettings.ts`). Переключите его в **Настройки → Память и Навыки**. По умолчанию: `skillsmp`.

### Идентификация навыка

Навыки ключевые по `name@version` в регистратуре в памяти (`src/lib/skills/registry.ts`). Версия должна быть semver (`^\d+\.\d+\.\d+$`). `resolveVersion()` понимает `^`, `~`, `>`, `>=`, `<`, `<=`, `==` и точные совпадения.

### Режим навыка

Каждый навык имеет режим выполнения, который управляет тем, когда он внедряется:

| Режим  | Поведение                                                                                   |
| ------ | ------------------------------------------------------------------------------------------ |
| `on`   | Всегда внедряется как определение инструмента                                             |
| `off`  | Никогда не внедряется, никогда не выполняется                                             |
| `auto` | Оценивается по отношению к входящему запросу; внедряется только если оценка ≥ `AUTO_MIN_SCORE` (по умолчанию 3) |

`auto` — режим по умолчанию для установленных навыков из маркетплейса. `enabled=true` и `mode="off"` вместе означают "зарегистрирован, но неактивен" — переключение `enabled` через старый столбец также изменяет `mode`, чтобы старые кодовые пути оставались согласованными (`src/app/api/skills/[id]/route.ts`).

### Статус (выполнения)

Выполнения навыков отслеживаются в таблице `skill_executions` со следующими статусами (`src/lib/skills/types.ts`):

```ts
enum SkillStatus {
  PENDING = "pending",
  RUNNING = "running",
  SUCCESS = "success",
  ERROR = "error",
  TIMEOUT = "timeout",
}
```

### Кэш регистратуры

`SkillRegistry` — это синглтон с кэшем TTL 60 секунд (`registry.ts:14`). `loadFromDatabase()` идемпотентен и удаляет дубликаты одновременных вызовов через `pendingLoad`. Любая запись (`register`/`unregister`/`unregisterById`) очищает кэш. Поиск версий через `getSkillVersions(name)` и `resolveVersion(name, constraint)`.

### Внедрение с учетом провайдера

`injectSkills()` в `src/lib/skills/injection.ts` — это точка входа, которая превращает зарегистрированные навыки в определения инструментов, специфичные для провайдера:

- **OpenAI** — `{ type: "function", function: { name, description, parameters } }`
- **Anthropic** — `{ name, description, input_schema }`
- **Google (Gemini)** — `{ name, description, parameters }`

Имя инструмента кодируется как `name@version`, чтобы обработчик мог выбрать правильную версию при обратном вызове модели.

### Оценка AUTO

Когда `mode="auto"`, каждый кандидат на навык оценивается по контексту запроса (`scoreAutoSkill()` в `injection.ts`):

| Сигнал                                         | Очки       |
| ---------------------------------------------- | ------------ |
| Имя навыка появляется дословно в контексте     | +6           |
| Каждый токен имени совпадает с токеном контекста| +2           |
| Каждый тег совпадает с контекстом               | +3           |
| Каждый токен описания совпадает с контекстом    | +1           |
| Обоснование фона совпадает с токеном имени     | +2 за токен  |
| Обоснование фона совпадает с тегом              | +2 за токен  |
| Подсказка провайдера в тегах совпадает с запросом| +2 / −2      |

Топ `AUTO_MAX_SKILLS = 5` навыков с `score >= AUTO_MIN_SCORE = 3` внедряются. Ничьи решаются по `installCount` (по убыванию), затем по алфавиту (`injection.ts:225-235`).

### Перехват вызовов инструментов

`handleToolCallExecution()` в `src/lib/skills/interception.ts` вызывается обработчиком чата после возврата ответа от вышестоящего уровня:

1. `extractToolCalls()` читает формы, специфичные для провайдера (OpenAI `tool_calls` / Responses `function_call`, Anthropic `tool_use`, Gemini `functionCalls`).
2. Встроенные псевдонимы инструментов (например, `omniroute_web_search` → `web_search`) разрешаются сначала. Встроенные обработчики выполняются встроенно.
3. Все остальное маршрутизируется через `skillExecutor.execute(name@version, args, { apiKeyId, sessionId })`.
4. Результаты вставляются обратно в ответ — `tool_results`, `function_call_output` элементы или блоки Anthropic `tool_result` в зависимости от ситуации.

`customSkillExecutionEnabled` в контексте выполнения можно установить в `false`, чтобы разрешить только перехват встроенных инструментов (используется путями запросов, которые явно отключают пользовательские обработчики).

---

## Docker Sandbox

Не встроенные пути кода (`eval_code`, `execute_command`) выполняются внутри Docker через `SandboxRunner` (`src/lib/skills/sandbox.ts`). Каждый контейнер запускается с:

```
--rm --network none|bridge --cap-drop ALL
--security-opt no-new-privileges --pids-limit 100
--cpus <cpuLimit/1000> --memory <memoryLimit>m
--tmpfs /tmp:rw,noexec,nosuid,size=64m
--tmpfs /workspace:rw,noexec,nosuid,size=64m
--read-only (when readOnly=true)
```

Значения по умолчанию (`SandboxRunner.DEFAULT_CONFIG`):

| Поле             | Значение по умолчанию | Примечания                                         |
| ---------------- | --------------------- | -------------------------------------------------- |
| `cpuLimit`       | 100 (= 0.1 CPU)       | Делится на 1000 перед передачей в `--cpus`         |
| `memoryLimit`    | 256 MB                | Жесткий лимит                                      |
| `timeout`        | 30000 ms              | Мягкое завершение через `SIGTERM` + `docker kill`  |
| `networkEnabled` | `false`               | Становится `--network none`                        |
| `readOnly`       | `true`                | Корневая файловая система только для чтения; `/tmp` и `/workspace` являются tmpfs |

`SandboxRunner.kill(id)` и `killAll()` доступны для завершения работы; запущенные контейнеры отслеживаются в `runningContainers: Map<string, ChildProcess>`.

### Переменные окружения Sandbox

Настраиваются через `process.env` в `src/lib/skills/builtins.ts`:

| Переменная окружения                     | Значение по умолчанию | Назначение                                                                 |
| ---------------------------------------- | ---------------------- | -------------------------------------------------------------------------- |
| `SKILLS_MAX_FILE_BYTES`                  | `1048576` (1 MB)       | Ограничение для `file_read` и `file_write`                                 |
| `SKILLS_MAX_HTTP_RESPONSE_BYTES`        | `256000`              | Ограничение для тела ответа `http_request`                                 |
| `SKILLS_MAX_SANDBOX_OUTPUT_CHARS`       | `100000`              | Ограничение для stdout/stderr, возвращаемых вызывающему                    |
| `SKILLS_SANDBOX_TIMEOUT_MS`              | `10000`               | Время ожидания по умолчанию для команд в песочнице; ограничено 60 с        |
| `SKILLS_SANDBOX_NETWORK_ENABLED`        | `false`               | Основной переключатель для исходящего трафика. Установите `1` или `true` для разрешения по вызову |
| `SKILLS_ALLOWED_SANDBOX_IMAGES`         | (см. ниже)            | Список разрешенных Docker-образов через запятую                            |

Разрешенные образы по умолчанию: `alpine:3.20`, `node:22-alpine`, `python:3.12-alpine`. Любые дополнительные образы через `SKILLS_ALLOWED_SANDBOX_IMAGES` объединяются с значениями по умолчанию; неизвестные образы отклоняются `normalizeImage()`.

> Примечание: нет отдельной переменной окружения `SKILLS_EXECUTION_TIMEOUT_MS`. Время ожидания обработчика без песочницы жестко задано в `SkillExecutor` (`executor.ts:13`) как 30 с, но может быть переопределено во время выполнения через `skillExecutor.setTimeout(ms)`.

### Изоляция рабочей области

`file_read` и `file_write` разрешают каждый путь относительно рабочей области на основе API-ключа в `<DATA_DIR>/skills/workspaces/<sha256(apiKeyId).slice(0,24)>/`. Пути с переходом (`..`) и запрещенные сегменты (`.env`, `.git`, `.ssh`, `.omniroute`, `.codex`, `secrets`) отклоняются до любого ввода-вывода с диском.

### Укрепление HTTP

`http_request` (`builtins.ts:257`):

- Разрешенные методы: `GET, HEAD, POST, PUT, PATCH, DELETE`
- Заблокированные исходящие заголовки: `host, connection, content-length, cookie, set-cookie, authorization, proxy-authorization`
- Перенаправления отключены (`allowRedirect: false`)
- Перенаправляются через `safeOutboundFetch` с `guard: "public-only"` (запрещены частные/петлевые диапазоны)
- Ответ усекается до `SKILLS_MAX_HTTP_RESPONSE_BYTES`; клиент видит `truncated: true`

---
```

## Гибридный исполнитель (предварительный просмотр)

`src/lib/skills/hybrid.ts` определяет `HybridExecutor`, который решает между `direct` (внутрипроцессным) и `sandbox` исполнением для каждого вызова, с `autoUpgrade` путем повторной попытки при таймауте или ошибках памяти. Встроенные реализации `directExecutor` / `sandboxRunner` являются заглушками (`executeDirect`, `executeInSandbox` возвращают плейсхолдерные объекты) — рассматривайте этот модуль как контракт, находящийся в процессе разработки. Реальное исполнение все еще проходит через `skillExecutor` + `SandboxRunner`.

---

## Хранилище

Схема находится в двух миграциях:

- `src/lib/db/migrations/016_create_skills.sql` — базовые таблицы `skills` и `skill_executions`, с индексами на `(api_key_id, name)` и `(skill_id, status, created_at)`.
- `src/lib/db/migrations/027_skill_mode_and_metadata.sql` — добавляет `mode`, `source_provider`, `tags` (JSON), `install_count` в `skills`.

`skill_executions.status` ограничен на уровне базы данных: `CHECK(status IN ('pending', 'running', 'success', 'error', 'timeout'))`.

---

## REST API

Все конечные точки находятся под `src/app/api/skills/`. Управляющие конечные точки (`/api/skills`, `/api/skills/[id]`, `/api/skills/install`) требуют **управляющей аутентификации** через `requireManagementAuth()`. Маркетплейс и установка используют более легкую `isAuthenticated()` (сессия или API-ключ).

| Конечная точка                          | Метод | Назначение                                                                  |
| --------------------------------- | ------ | ------------------------------------------------------------------------ | --- | ------------------------ | -------- | ------------------ |
| `/api/skills`                     | GET    | Список зарегистрированных навыков. Поддерживает `?q=`, `?mode=on                        | off | auto`, `?source=skillsmp | skillssh | local`, пагинацию |
| `/api/skills/[id]`                | PUT    | Обновить `enabled` или `mode`                                               |
| `/api/skills/[id]`                | DELETE | Удалить по идентификатору                                                         |
| `/api/skills/install`             | POST   | Установить пользовательский навык (код обработчика + схема)                           |
| `/api/skills/marketplace`         | GET    | Поиск в каталоге SkillsMP (возвращает популярные значения по умолчанию, когда `q` пусто) |
| `/api/skills/marketplace/install` | POST   | Установить навык из SkillsMP (требуется активный провайдер = `skillsmp`)         |
| `/api/skills/skillssh`            | GET    | Поиск в каталоге skills.sh (`?q=&limit=`, ограничено 100)               |
| `/api/skills/skillssh/install`    | POST   | Установить навык из skills.sh (требуется активный провайдер = `skillssh`)        |
| `/api/skills/executions`          | GET    | История исполнения с пагинацией (`?apiKeyId=`)                               |
| `/api/skills/executions`          | POST   | Выполнить зарегистрированный навык по запросу                                        |

Конечная точка `POST /api/skills/executions` возвращает HTTP `503` с `{ error: "Skills execution is disabled..." }`, когда `settings.skillsEnabled === false` (`executor.ts:42-45`). Операторы могут переключить главный переключатель из **Настройки → AI**.

### Пример: установка пользовательского навыка

```bash
curl -X POST http://localhost:20128/api/skills/install \
  -H "Authorization: Bearer $OMNIROUTE_MGMT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "reverse-text",
    "version": "1.0.0",
    "description": "Reverses a string",
    "schema": {
      "input":  { "type": "object", "properties": { "text": { "type": "string" } }, "required": ["text"] },
      "output": { "type": "object", "properties": { "reversed": { "type": "string" } } }
    },
    "handlerCode": "echo-handler",
    "apiKeyId": "your-api-key-id"
  }'
```

Строка `handlerCode` является **поиском имени обработчика** — не исполняемый код. Исполнитель сопоставляет его через `skillExecutor.registerHandler(name, fn)` (`executor.ts:25`). Установки из маркетплейса хранят текст SKILL.md в этом поле в качестве документации и маршрутизируют исполнение через вызовы инструментов, сгенерированные моделью. Произвольный пользовательский код не выполняется.

## MCP Tools

Четыре инструмента MCP оборачивают поверхность навыков (`open-sse/mcp-server/tools/skillTools.ts`). Они автоматически регистрируются при запуске сервера MCP.

| Инструмент                     | Описание                                                     |
| ------------------------------ | ------------------------------------------------------------ |
| `omniroute_skills_list`         | Список навыков, необязательные фильтры: `apiKeyId`, `name`, `enabled` |
| `omniroute_skills_enable`       | Включить/отключить навык по `skillId`                        |
| `omniroute_skills_execute`     | Выполнить навык с входными данными                            |
| `omniroute_skills_executions`  | История последних выполнений (по умолчанию 50, максимум 100) |

См. [MCP-SERVER.md](./MCP-SERVER.md) для настройки транспорта и назначений области.

---

## Интеграция A2A

`src/lib/skills/a2a.ts` экспортирует дескриптор A2A навыка `memory_aware_routing` и вспомогательную функцию `registerA2ASkill(registry)`. Пользовательские A2A навыки находятся в `src/lib/a2a/skills/` и диспетчеризуются через `A2A_SKILL_HANDLERS` (`src/lib/a2a/taskExecution.ts`). См. [A2A-SERVER.md](./A2A-SERVER.md) для полного жизненного цикла задачи.

---

## Добавление нового встроенного навыка

1. **Определите обработчик** в `src/lib/skills/builtins.ts` (или в соседнем файле под `src/lib/skills/builtin/`). Сигнатура: `(input, { apiKeyId, sessionId }) => Promise<output>`.
2. **Песочница кода?** Вызовите `sandboxRunner.run(image, command, env, sandboxConfig({...}))`. Используйте `normalizeImage()` против списка разрешений.
3. **Путь к файловой системе?** Всегда передавайте через `resolveWorkspacePath(input, context)` перед обращением к диску.
4. **Сетевой вызов?** Используйте `safeOutboundFetch` с `guard: "public-only"`; очистите заголовки через `sanitizeHeaders()`.
5. **Зарегистрируйте** добавив запись в `builtinSkills` (или вызвав `registerBrowserSkill(executor)`-style при загрузке).
6. **Подключите встроенные инструменты** (необязательно) в `BUILTIN_TOOL_ALIASES` (`interception.ts:23`), если модель верхнего уровня выдает другое имя.
7. **Тесты** в `src/lib/skills/__tests__/` (Vitest).

---

## Добавление пользовательского (не встроенного) навыка

1. Зарегистрируйте обработчик при запуске процесса:
   ```ts
   skillExecutor.registerHandler("my-handler", async (input, ctx) => { ... });
   ```
2. Вставьте навык через `POST /api/skills/install` (поле `handlerCode` должно соответствовать зарегистрированному имени обработчика).
3. Переключите `mode` на `on` или `auto` через `PUT /api/skills/[id]`.

---

## Советы по эксплуатации

- **Мастер-переключатель:** `settings.skillsEnabled = false` блокирует все выполнения и возвращает HTTP `503` на `/api/skills/executions`. Реестр продолжает загружаться.
- **Ограничьте исходящий трафик:** оставьте `SKILLS_SANDBOX_NETWORK_ENABLED` не установленным (по умолчанию) для полностью изолированной песочницы. Вызов `networkEnabled: true` все равно требует мастер-входа.
- **Разрешите конкретные образы:** установите `SKILLS_ALLOWED_SANDBOX_IMAGES="myorg/sandbox:1.0,node:22-alpine"` для расширения списка разрешений.
- **Аудит выполнений:** `/dashboard/skills/executions` и `omniroute_skills_executions` оба запрашивают `skill_executions`. Успешные запуски включают `durationMs`; сбои включают `errorMessage`.
- **Очистка кэша:** вызовите `skillRegistry.invalidateCache()` после ручных изменений БД; в противном случае подождите 60 с.
- **Анонимная рабочая область:** когда `apiKeyId` пуст, все вызовы хэшируются в одну и ту же `"anonymous"` рабочую область — код, учитывающий общий доступ, всегда должен передавать реальный ключ.

## Смотрите также

- [MCP-SERVER.md](./MCP-SERVER.md) — регистрация инструментов MCP и транспорты
- [A2A-SERVER.md](./A2A-SERVER.md) — жизненный цикл задач A2A и диспетчеризация навыков
- [USER_GUIDE.md](../guides/USER_GUIDE.md#-skills-system) — пользовательское введение
- [ARCHITECTURE.md](../architecture/ARCHITECTURE.md) — конвейер запросов и карта компонентов
- Источник: `src/lib/skills/`, `src/app/api/skills/`, `open-sse/mcp-server/tools/skillTools.ts`
- Тесты: `src/lib/skills/__tests__/integration.test.ts`
