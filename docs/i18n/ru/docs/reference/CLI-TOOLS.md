# CLI-TOOLS (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../reference/CLI-TOOLS.md) · 🇸🇦 [ar](../../../ar/docs/reference/CLI-TOOLS.md) · 🇦🇿 [az](../../../az/docs/reference/CLI-TOOLS.md) · 🇧🇬 [bg](../../../bg/docs/reference/CLI-TOOLS.md) · 🇧🇩 [bn](../../../bn/docs/reference/CLI-TOOLS.md) · 🇨🇿 [cs](../../../cs/docs/reference/CLI-TOOLS.md) · 🇩🇰 [da](../../../da/docs/reference/CLI-TOOLS.md) · 🇩🇪 [de](../../../de/docs/reference/CLI-TOOLS.md) · 🇪🇸 [es](../../../es/docs/reference/CLI-TOOLS.md) · 🇮🇷 [fa](../../../fa/docs/reference/CLI-TOOLS.md) · 🇫🇮 [fi](../../../fi/docs/reference/CLI-TOOLS.md) · 🇫🇷 [fr](../../../fr/docs/reference/CLI-TOOLS.md) · 🇮🇳 [gu](../../../gu/docs/reference/CLI-TOOLS.md) · 🇮🇱 [he](../../../he/docs/reference/CLI-TOOLS.md) · 🇮🇳 [hi](../../../hi/docs/reference/CLI-TOOLS.md) · 🇭🇺 [hu](../../../hu/docs/reference/CLI-TOOLS.md) · 🇮🇩 [id](../../../id/docs/reference/CLI-TOOLS.md) · 🇮🇩 [in](../../../in/docs/reference/CLI-TOOLS.md) · 🇮🇹 [it](../../../it/docs/reference/CLI-TOOLS.md) · 🇯🇵 [ja](../../../ja/docs/reference/CLI-TOOLS.md) · 🇰🇷 [ko](../../../ko/docs/reference/CLI-TOOLS.md) · 🇮🇳 [mr](../../../mr/docs/reference/CLI-TOOLS.md) · 🇲🇾 [ms](../../../ms/docs/reference/CLI-TOOLS.md) · 🇳🇱 [nl](../../../nl/docs/reference/CLI-TOOLS.md) · 🇳🇴 [no](../../../no/docs/reference/CLI-TOOLS.md) · 🇵🇭 [phi](../../../phi/docs/reference/CLI-TOOLS.md) · 🇵🇱 [pl](../../../pl/docs/reference/CLI-TOOLS.md) · 🇵🇹 [pt](../../../pt/docs/reference/CLI-TOOLS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/reference/CLI-TOOLS.md) · 🇷🇴 [ro](../../../ro/docs/reference/CLI-TOOLS.md) · 🇸🇰 [sk](../../../sk/docs/reference/CLI-TOOLS.md) · 🇸🇪 [sv](../../../sv/docs/reference/CLI-TOOLS.md) · 🇰🇪 [sw](../../../sw/docs/reference/CLI-TOOLS.md) · 🇮🇳 [ta](../../../ta/docs/reference/CLI-TOOLS.md) · 🇮🇳 [te](../../../te/docs/reference/CLI-TOOLS.md) · 🇹🇭 [th](../../../th/docs/reference/CLI-TOOLS.md) · 🇹🇷 [tr](../../../tr/docs/reference/CLI-TOOLS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/reference/CLI-TOOLS.md) · 🇵🇰 [ur](../../../ur/docs/reference/CLI-TOOLS.md) · 🇻🇳 [vi](../../../vi/docs/reference/CLI-TOOLS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/reference/CLI-TOOLS.md)

---

---

title: "Инструменты командной строки — OmniRoute v3.8.0"
version: 3.8.2
lastUpdated: 2026-05-13
---

# Инструменты командной строки — OmniRoute v3.8.0

Последнее обновление: 2026-05-13

OmniRoute интегрируется с двумя категориями инструментов командной строки:

1. **Внешние интеграции CLI** — сторонние CLI (Cursor, Cline, Codex, Claude Code, Qwen Code, Windsurf, Hermes, Amp и т.д.), которые вы указываете на локальный конечный пункт OmniRoute, совместимый с OpenAI.
2. **Внутренний CLI OmniRoute** — команды, встроенные в бинарный файл `omniroute` для управления жизненным циклом сервера, настройки, диагностики и управления провайдерами.

---

## Как это работает

```
Claude / Codex / OpenCode / Cline / KiloCode / Continue / Cursor / Windsurf / Hermes / Amp / Qwen
           │
           ▼  (все указывают на OmniRoute)
    http://YOUR_SERVER:20128/v1
           │
           ▼  (OmniRoute маршрутизирует к правильному провайдеру)
    Anthropic / OpenAI / Gemini / DeepSeek / Groq / Mistral / ...
```

**Преимущества:**

- Один API-ключ для управления всеми инструментами
- Отслеживание затрат по всем CLI в панели управления
- Переключение моделей без повторной настройки каждого инструмента
- Работает локально и на удаленных серверах (VPS, Docker, Akamai, Cloudflare Tunnel)

---

## 1. Внешние интеграции CLI

### Источник истины

Карточки в панели управления `/dashboard/cli-tools` генерируются из
`src/shared/constants/cliTools.ts`. Команда `omniroute setup` может автоматически записывать
конфигурационные файлы для инструментов, которые можно скриптовать.

### Текущий каталог (v3.8.0)

| Инструмент         | ID            | Тип / Конфигурация  | Установка / Доступ                       | Аутентификация                     |
| ------------------ | ------------- | ------------------- | ---------------------------------------- | ---------------------------------- |
| **Claude Code**    | `claude`      | env / settings.json | `npm i -g @anthropic-ai/claude-code`     | API-ключ (шлюз Anthropic)          |
| **OpenAI Codex**   | `codex`       | custom (toml)       | `npm i -g @openai/codex`                 | API-ключ (OpenAI)                  |
| **Factory Droid**  | `droid`       | custom              | встроенный / CLI                         | API-ключ                           |
| **Open Claw**      | `openclaw`    | custom              | встроенный / CLI                         | API-ключ                           |
| **Cursor**         | `cursor`      | guide (Cloud)       | Desktop-приложение Cursor                | API-ключ (облачный конечный пункт) |
| **Windsurf**       | `windsurf`    | guide               | Desktop IDE Windsurf                     | API-ключ (BYOK)                    |
| **Cline**          | `cline`       | custom / VS Code    | `npm i -g cline` + расширение VS Code    | API-ключ                           |
| **Kilo Code**      | `kilo`        | custom / VS Code    | `npm i -g kilocode` + расширение VS Code | API-ключ                           |
| **Continue**       | `continue`    | guide (config.yaml) | Расширение VS Code                       | API-ключ                           |
| **Antigravity**    | `antigravity` | MITM                | Встроенный OmniRoute                     | API-ключ (прокси MITM)             |
| **GitHub Copilot** | `copilot`     | custom / VS Code    | Расширение VS Code                       | API-ключ (отпечаток CLI: `github`) |
| **OpenCode**       | `opencode`    | guide (json)        | `npm i -g opencode-ai`                   | API-ключ (совместимый с OpenAI)    |
| **Hermes**         | `hermes`      | guide (json)        | установить по документации               | API-ключ (совместимый с OpenAI)    |
| **Amp CLI**        | `amp`         | guide (env)         | установить по документации Sourcegraph   | API-ключ (совместимый с OpenAI)    |
| **Kiro AI**        | `kiro`        | MITM                | Amazon Kiro IDE / CLI                    | API-ключ (прокси MITM)             |
| **Qwen Code**      | `qwen`        | guide (json/env)    | `npm i -g @qwen-code/qwen-code`          | API-ключ (совместимый с OpenAI)    |
| **Custom CLI**     | `custom`      | custom-builder      | любой клиент, совместимый с OpenAI       | API-ключ                           |

> Примечания:
>
> - "Веб-оболочки" вроде сессий ChatGPT/Claude/Grok/Perplexity в браузере не
>   перечислены здесь. OmniRoute может проксировать их через соединения провайдеров `chatgpt-web`,
>   `claude-web`, `grok-web`, `perplexity-web`, `blackbox-web`,
>   `muse-spark-web`, но это **соединения провайдеров**
>   (настраиваются в `/dashboard/providers`), а не инструменты CLI. Они не отображаются
>   как карточки под `/dashboard/cli-tools`.
> - Инструменты, отмеченные **MITM** (Antigravity, Kiro), перехватывают трафик приложения
>   локально и требуют включения соответствующего конечного пункта mitm в
>   `/dashboard/settings`.

### Синхронизация отпечатка CLI (Агенты + Настройки)

`/dashboard/agents` и `Settings > CLI Fingerprint` используют
`src/shared/constants/cliCompatProviders.ts`. Это поддерживает соответствие идентификаторов провайдеров
с карточками CLI и устаревшими идентификаторами.

| CLI ID                                                                                                                                        | Идентификатор провайдера отпечатка |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| `kilo`                                                                                                                                        | `kilocode`                         |
| `copilot`                                                                                                                                     | `github`                           |
| `claude` / `codex` / `antigravity` / `kiro` / `cursor` / `windsurf` / `cline` / `opencode` / `hermes` / `amp` / `qwen` / `droid` / `openclaw` | same ID                            |

Устаревшие идентификаторы по-прежнему принимаются для совместимости: `copilot`, `kimi-coding`, `qwen`.

---

### Шаг 1 — Получите API-ключ OmniRoute

1. Откройте панель управления OmniRoute → **API Manager** (`/dashboard/api-manager`)
2. Нажмите **Create API Key**
3. Дайте ему имя (например, `cli-tools`) и выберите все разрешения
4. Скопируйте ключ — вам понадобится он для каждого CLI ниже

> Ваш ключ выглядит так: `sk-xxxxxxxxxxxxxxxx-xxxxxxxxx`

---

### Шаг 2 — Установите инструменты CLI

Все инструменты на основе npm требуют Node.js 20.20.2+, 22.22.2+ или 24.x:

```bash
# Claude Code (Anthropic)
npm install -g @anthropic-ai/claude-code

# OpenAI Codex
npm install -g @openai/codex

# OpenCode
npm install -g opencode-ai

# Cline
npm install -g cline

# KiloCode
npm install -g kilocode

# Qwen Code (Alibaba)
npm install -g @qwen-code/qwen-code

# Kiro CLI (Amazon — требует curl + unzip)
apt-get install -y unzip   # на Debian/Ubuntu
curl -fsSL https://cli.kiro.dev/install | bash
export PATH="$HOME/.local/bin:$PATH"   # добавьте в ~/.bashrc
```

**Проверка:**

```bash
claude --version     # 2.x.x
codex --version      # 0.x.x
opencode --version   # x.x.x
cline --version      # 2.x.x
kilocode --version   # x.x.x (или: kilo --version)
qwen --version       # x.x.x
kiro-cli --version   # 1.x.x
```

---

### Шаг 3 — Установите глобальные переменные среды

Добавьте в `~/.bashrc` (или `~/.zshrc`), затем выполните `source ~/.bashrc`:

```bash
# Универсальный конечный пункт OmniRoute
export OPENAI_BASE_URL="http://localhost:20128/v1"
export OPENAI_API_KEY="sk-your-omniroute-key"
export ANTHROPIC_BASE_URL="http://localhost:20128"
export ANTHROPIC_AUTH_TOKEN="sk-your-omniroute-key"
export GEMINI_BASE_URL="http://localhost:20128/v1"
export GEMINI_API_KEY="sk-your-omniroute-key"
```

> Для **удаленного сервера** замените `localhost:20128` на IP-адрес сервера или домен,
> например, `http://192.168.0.15:20128`.

---

### Шаг 4 — Настройте каждый инструмент

#### Claude Code

```bash
# Создайте ~/.claude/settings.json:
mkdir -p ~/.claude && cat > ~/.claude/settings.json << EOF
{
  "env": {
    "ANTHROPIC_BASE_URL": "http://localhost:20128",
    "ANTHROPIC_AUTH_TOKEN": "sk-your-omniroute-key"
  }
}
EOF
```

Используйте универсальный корень шлюза Anthropic для Claude Code. Не добавляйте `/v1` здесь.

**Тест:** `claude "say hello"`

---

#### OpenAI Codex

```bash
mkdir -p ~/.codex && cat > ~/.codex/config.yaml << EOF
model: auto
apiKey: sk-your-omniroute-key
apiBaseUrl: http://localhost:20128/v1
EOF
```

**Тест:** `codex "what is 2+2?"`

---

#### OpenCode

```bash
mkdir -p ~/.config/opencode && cat > ~/.config/opencode/opencode.json << EOF
{
  "\$schema": "https://opencode.ai/config.json",
  "provider": {
    "omniroute": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "OmniRoute",
      "options": {
        "baseURL": "http://localhost:20128/v1",
        "apiKey": "sk-your-omniroute-key"
      },
      "models": {
        "claude-sonnet-4-5": { "name": "claude-sonnet-4-5" },
        "claude-sonnet-4-5-thinking": { "name": "claude-sonnet-4-5-thinking" },
        "gemini-3-flash": { "name": "gemini-3-flash" }
      }
    }
  }
}
EOF
```

**Тест:** `opencode`

> Используйте `opencode run "your prompt" --model omniroute/claude-sonnet-4-5-thinking --variant high`
> для отправки вариантов мышления.

---

#### Cline (CLI или VS Code)

**Режим CLI:**

```bash
mkdir -p ~/.cline/data && cat > ~/.cline/data/globalState.json << EOF
{
  "apiProvider": "openai",
  "openAiBaseUrl": "http://localhost:20128/v1",
  "openAiApiKey": "sk-your-omniroute-key"
}
EOF
```

**Режим VS Code:**
Настройки расширения Cline → API Provider: `OpenAI Compatible` → Base URL: `http://localhost:20128/v1`

Или используйте панель управления OmniRoute → **CLI Tools → Cline → Apply Config**.

---

#### KiloCode (CLI или VS Code)

**Режим CLI:**

```bash
kilocode --api-base http://localhost:20128/v1 --api-key sk-your-omniroute-key
```

**Настройки VS Code:**

```json
{
  "kilo-code.openAiBaseUrl": "http://localhost:20128/v1",
  "kilo-code.apiKey": "sk-your-omniroute-key"
}
```

Или используйте панель управления OmniRoute → **CLI Tools → KiloCode → Apply Config**.

---

#### Continue (Расширение VS Code)

Отредактируйте `~/.continue/config.yaml`:

```yaml
models:
  - name: OmniRoute
    provider: openai
    model: auto
    apiBase: http://localhost:20128/v1
    apiKey: sk-your-omniroute-key
    default: true
```

Перезапустите VS Code после редактирования.

---

#### Kiro CLI (Amazon)

```bash
# Войдите в свою учетную запись AWS/Kiro:
kiro-cli login

# CLI использует свою собственную аутентификацию — OmniRoute не требуется как бэкэнд для Kiro CLI.
# Используйте kiro-cli вместе с OmniRoute для других инструментов.
kiro-cli status
```

Для **Kiro IDE** desktop-приложение используйте конечный пункт MITM, предоставляемый OmniRoute
в `/dashboard/cli-tools → Kiro`.

---

#### Qwen Code (Alibaba)

Qwen Code поддерживает конечные точки API, совместимые с OpenAI, через переменные среды или `settings.json`.

> Бесплатный уровень OAuth Qwen был прекращен 15 апреля 2026 года. Используйте OmniRoute с
> провайдерами `bailian-coding-plan` / `alibaba` / `alibaba-cn` / `openrouter` / `anthropic` /
> `gemini` вместо этого.

**Вариант 1: Переменные среды (`~/.qwen/.env`)**

```bash
mkdir -p ~/.qwen && cat > ~/.qwen/.env << EOF
OPENAI_API_KEY="sk-your-omniroute-key"
OPENAI_BASE_URL="http://localhost:20128/v1"
OPENAI_MODEL="auto"
EOF
```

**Вариант 2: `settings.json` с `security.auth`**

```json
// ~/.qwen/settings.json
{
  "security": {
    "auth": {
      "selectedType": "openai",
      "apiKey": "sk-your-omniroute-key",
      "baseUrl": "http://localhost:20128/v1"
    }
  },
  "model": {
    "name": "claude-sonnet-4-6"
  }
}
```

**Вариант 3: Встроенные флаги CLI**

```bash
OPENAI_BASE_URL="http://localhost:20128/v1" \
OPENAI_API_KEY="sk-your-omniroute-key" \
OPENAI_MODEL="auto" \
qwen
```

> Для **удаленного сервера** замените `localhost:20128` на IP-адрес сервера или домен.

**Тест:** `qwen "say hello"`

---

#### Cursor (Desktop-приложение)

> **Примечание:** Cursor маршрутизирует запросы через облако. Для интеграции с OmniRoute,
> включите **Cloud Endpoint** в настройках OmniRoute и используйте ваш публичный домен URL.

Через GUI: **Settings → Models → OpenAI API Key**

- Base URL: `https://your-domain.com/v1`
- API Key: ваш ключ OmniRoute

---

#### Windsurf (Desktop IDE)

> Официальная документация Windsurf в настоящее время описывает BYOK для некоторых моделей Claude плюс
> настройки корпоративного URL/токена, а не универсальный настраиваемый провайдер OpenAI-compatible.
> Протестируйте поведение BYOK в вашей среде перед тем, как полагаться на эту интеграцию.

1. Откройте AI Settings внутри Windsurf.
2. Выберите **Add custom provider** (OpenAI-compatible).
3. Base URL: `http://localhost:20128/v1`
4. API Key: ваш ключ OmniRoute
5. Выберите модель из каталога OmniRoute.

---

#### Hermes

```json
// Конфигурационный файл Hermes
{
  "provider": {
    "type": "openai",
    "baseURL": "http://localhost:20128/v1",
    "apiKey": "sk-your-omniroute-key",
    "model": "claude-sonnet-4-6"
  }
}
```

---

#### Amp CLI (Sourcegraph)

```bash
export OPENAI_API_KEY="sk-your-omniroute-key"
export OPENAI_BASE_URL="http://localhost:20128/v1"
amp --model "claude-sonnet-4-6"

# Предлагаемые сокращения, которые вы можете сопоставить локально:
# g25p -> gemini/gemini-2.5-pro
# g25f -> gemini/gemini-2.5-flash
# cs45 -> cc/claude-sonnet-4-5-20250929
# g54  -> gemini/gemini-3.1-pro-high
```

---

### Автоматическая конфигурация панели управления

Панель управления OmniRoute автоматизирует конфигурацию для большинства инструментов:

1. Перейдите по адресу `http://localhost:20128/dashboard/cli-tools`
2. Разверните любую карточку инструмента
3. Выберите ваш API-ключ из выпадающего списка
4. Нажмите **Apply Config** (если инструмент обнаружен как установленный)
5. Или вручную скопируйте сгенерированный фрагмент конфигурации

---

### Встроенные агенты: Droid & Open Claw

**Droid** и **Open Claw** — это агенты AI, встроенные непосредственно в OmniRoute — установка не требуется. Они работают как внутренние маршруты и используют маршрутизацию моделей OmniRoute автоматически.

- Доступ: `http://localhost:20128/dashboard/agents`
- Настройка: те же комбинации и провайдеры, что и все остальные инструменты
- API-ключ или установка CLI не требуется

---

## 2. Внутренний OmniRoute CLI

Бинарный файл `omniroute` (устанавливается через `npm install -g omniroute` или входит в состав настольного приложения) предоставляет команды, кроме запуска сервера. Полная матрица реализована в:

- `bin/omniroute.mjs` — точка входа, загрузка окружения, специальная диспетчеризация (`--mcp`)
- `bin/cli/program.mjs` — построитель программы Commander
- `bin/cli/commands/<cmd>.mjs` — один файл на команду/группу, зарегистрирован в `registry.mjs`
- `bin/cli/output.mjs` — форматировщики вывода (json/jsonl/table/csv)
- `bin/cli/runtime.mjs` — хелпер withRuntime (сервер в первую очередь/резервная база данных)
- `bin/cli/i18n.mjs` — хелпер t() с локалями

### Жизненный цикл сервера

```bash
omniroute                              # Запустить сервер (порт по умолчанию 20128)
omniroute --port 3000                  # Переопределить порт
omniroute --no-open                    # Не открывать браузер автоматически
omniroute --mcp                        # Запустить как сервер MCP (транспорт stdio)
omniroute serve                        # То же, что и `omniroute`
omniroute stop                         # Остановить работающий сервер
omniroute restart                      # Перезапустить сервер
omniroute dashboard                    # Открыть панель управления в браузере по умолчанию
omniroute open                         # Псевдоним для `dashboard`
omniroute --version                    # Вывести версию
omniroute --help                       # Показать все команды
```

### Настройка и инициализация

```bash
omniroute setup                        # Интерактивный мастер настройки
omniroute setup --non-interactive      # Режим CI/автоматизации (читает переменные окружения + флаги)
omniroute setup --password '<value>'   # Установить пароль администратора напрямую
omniroute setup --add-provider \
  --provider openai \
  --api-key '<value>' \
  --test-provider                      # Добавить и протестировать провайдера за один шаг
```

Распознаваемые переменные окружения для неинтерактивной настройки:

| Var                           | Purpose                                                                    |
| ----------------------------- | -------------------------------------------------------------------------- |
| `OMNIROUTE_SETUP_PASSWORD`    | Пароль администратора (>=8 символов)                                       |
| `OMNIROUTE_PROVIDER`          | Идентификатор провайдера (например, `openai`, `anthropic`)                 |
| `OMNIROUTE_PROVIDER_NAME`     | Отображаемое имя для соединения                                            |
| `OMNIROUTE_PROVIDER_BASE_URL` | Необязательное переопределение базового URL OpenAI-совместимого провайдера |
| `OMNIROUTE_API_KEY`           | API-ключ провайдера                                                        |
| `OMNIROUTE_DEFAULT_MODEL`     | Необязательная модель по умолчанию                                         |
| `DATA_DIR`                    | Переопределить каталог данных OmniRoute                                    |

### Диагностика

```bash
omniroute doctor                       # Проверить конфигурацию, БД, порты, среду выполнения, память, работоспособность
omniroute doctor --json                # Машинно-читаемый JSON
omniroute doctor --no-liveness         # Пропустить HTTP-проверку работоспособности
omniroute doctor --host 0.0.0.0        # Переопределить хост для проверки работоспособности
omniroute doctor --liveness-url <url>  # Полное переопределение URL конечной точки работоспособности
```

Doctor выполняет следующие проверки: `Конфигурация`, `База данных`, `Хранилище/шифрование`,
`Доступность портов`, `Среда выполнения Node`, `Нативный бинарный файл` (better-sqlite3),
`Память`, и `Работоспособность сервера`. Он завершается с ненулевым кодом, если какая-либо проверка `fail`.

### Управление провайдерами

```bash
omniroute providers available                       # Каталог провайдеров OmniRoute
omniroute providers available --search openai       # Фильтровать каталог по id/name/alias/category
omniroute providers available --category api-key    # Фильтровать по категории (api-key, oauth, free, ...)
omniroute providers available --json                # Машинно-читаемый JSON

omniroute providers list                            # Настроенные соединения провайдеров
omniroute providers list --json

omniroute providers test <id|name>                  # Протестировать одно настроенное соединение
omniroute providers test-all                        # Протестировать все активные соединения
omniroute providers validate                        # Локальная только структурная валидация
```

> `providers available` читает каталог OmniRoute; `providers list/test/test-all/validate`
> читают локальную базу данных SQLite напрямую и не требуют, чтобы сервер был запущен.

### Восстановление и сброс

```bash
omniroute reset-password                # Сбросить пароль администратора (устаревший псевдоним все еще работает)
omniroute reset-encrypted-columns       # Показать предупреждение + пробный запуск для сброса зашифрованных учетных данных
omniroute reset-encrypted-columns --force  # Фактически обнулить зашифрованные учетные данные в SQLite
```

### Другие подкоманды

Эти команды предполагают, что OmniRoute сервер запущен, если не указано иное:

```bash
omniroute status                       # Комплексный статус среды выполнения
omniroute logs                         # Потоковые логи запросов (--json, --search, --follow)
omniroute config show                  # Показать текущую конфигурацию

omniroute provider list                # Список доступных провайдеров (псевдоним для providers list)
omniroute provider add                 # Зарегистрировать OmniRoute как провайдера на инструменте
omniroute keys add | list | remove     # Управление API-ключами
omniroute models [provider]            # Список моделей (--json, --search)
omniroute combo list | switch | create | delete

omniroute backup                       # Снимок конфигурации + БД
omniroute restore                      # Восстановить из предыдущего снимка

omniroute health                       # Детальная информация о здоровье (breaker, cache, memory)
omniroute quota                        # Использование квот провайдера
omniroute cache                        # Статус кэша
omniroute cache clear                  # Очистить семантический + кэш подписей

omniroute mcp status | restart         # Статус / перезапуск сервера MCP
omniroute a2a status | card            # Статус / карта агента сервера A2A

omniroute tunnel list | create | stop  # Управление туннелями (cloudflare/tailscale/ngrok)
omniroute env show | get <k> | set <k> <v>  # Просмотр / установка переменных окружения (временные)

omniroute test                         # Тест подключения провайдера
omniroute update                       # Проверить наличие обновлений
omniroute completion                   # Сгенерировать завершение оболочки
```

### Общие флаги

| Флаг                | Описание                                               |
| ------------------- | ------------------------------------------------------ |
| `--no-open`         | Не открывать браузер автоматически при запуске         |
| `--port <n>`        | Переопределить порт API (по умолчанию 20128)           |
| `--mcp`             | Запустить как сервер MCP через stdio (для IDE)         |
| `--non-interactive` | Режим CI (без запросов; читает из env/flags)           |
| `--json`            | Машинно-читаемый JSON-вывод (doctor, providers и т.д.) |
| `--help`, `-h`      | Показать справку для конкретной команды                |
| `--version`, `-v`   | Вывести установленную версию                           |

---

````

## Доступные конечные точки API

| Конечная точка                   | Описание                   | Использование                     |
| -------------------------- | ----------------------------- | --------------------------- |
| `/v1/chat/completions`     | Стандартный чат (все провайдеры) | Все современные инструменты            |
| `/v1/responses`            | API ответов (формат OpenAI) | Codex, агентские рабочие процессы    |
| `/v1/completions`          | Устаревшие текстовые завершения       | Старые инструменты, использующие `prompt:` |
| `/v1/embeddings`           | Текстовые эмбеддинги               | RAG, поиск                 |
| `/v1/images/generations`   | Генерация изображений              | GPT-Image, Flux и т.д.       |
| `/v1/audio/speech`         | Текст в речь                | ElevenLabs, OpenAI TTS      |
| `/v1/audio/transcriptions` | Речь в текст                | Deepgram, AssemblyAI        |

---

## Устранение неполадок

| Ошибка                                             | Причина                       | Исправление                                                                         |
| ------------------------------------------------- | --------------------------- | --------------------------------------------------------------------------- |
| `Connection refused`                              | OmniRoute не запущен       | `omniroute serve` или `pm2 start omniroute`                                  |
| `401 Unauthorized`                                | Неправильный API ключ               | Проверьте в `/dashboard/api-manager`                                           |
| `No combo configured`                             | Нет активного комбо маршрутизации     | Настройте в `/dashboard/combos`                                               |
| `invalid model`                                   | Модель не в каталоге        | Используйте `auto` или проверьте `/dashboard/providers`                                  |
| CLI показывает "not installed"                         | Бинарный файл не в PATH          | Проверьте `which <command>`                                                     |
| `kiro-cli: not found`                             | Не в PATH                 | `export PATH="$HOME/.local/bin:$PATH"`                                      |
| `doctor` сообщает о несовместимости SQLite              | Неправильный нативный бинарный файл         | `cd app && npm rebuild better-sqlite3`                                      |
| `doctor` сообщает о `STORAGE_ENCRYPTION_KEY` отсутствует | Зашифрованные учетные данные без ключа | Установите `STORAGE_ENCRYPTION_KEY` или `omniroute reset-encrypted-columns --force` |

---

## Быстрая настройка скрипта (Одна команда)

```bash
cat > my-setup.sh <<'EOF'
#!/usr/bin/env bash
set -euo pipefail

# === Отредактируйте это ===
OMNIROUTE_URL="http://localhost:20128/v1"
OMNIROUTE_ANTHROPIC_URL="http://localhost:20128"
OMNIROUTE_KEY="sk-your-omniroute-key"
# ==================

# 1. Установите внешние CLI
npm install -g \
  @anthropic-ai/claude-code \
  @openai/codex \
  opencode-ai \
  cline \
  kilocode \
  @qwen-code/qwen-code

# 2. Необязательно: Kiro CLI (требует unzip)
if ! command -v unzip >/dev/null 2>&1; then
  sudo apt-get install -y unzip
fi
curl -fsSL https://cli.kiro.dev/install | bash

# 3. Запишите конфигурационные файлы для каждого инструмента
mkdir -p ~/.claude ~/.codex ~/.config/opencode ~/.continue ~/.qwen

cat > ~/.claude/settings.json <<JSON
{
  "env": {
    "ANTHROPIC_BASE_URL": "${OMNIROUTE_ANTHROPIC_URL}",
    "ANTHROPIC_AUTH_TOKEN": "${OMNIROUTE_KEY}"
  }
}
JSON

cat > ~/.codex/config.yaml <<YAML
model: auto
apiKey: ${OMNIROUTE_KEY}
apiBaseUrl: ${OMNIROUTE_URL}
YAML

cat > ~/.qwen/.env <<ENV
OPENAI_API_KEY="${OMNIROUTE_KEY}"
OPENAI_BASE_URL="${OMNIROUTE_URL}"
OPENAI_MODEL="auto"
ENV

# 4. Добавьте глобальные переменные окружения (идемпотентная защита)
if ! grep -q "OmniRoute Universal Endpoint" ~/.bashrc 2>/dev/null; then
  cat >> ~/.bashrc <<ENV

# OmniRoute Universal Endpoint
export OPENAI_BASE_URL="${OMNIROUTE_URL}"
export OPENAI_API_KEY="${OMNIROUTE_KEY}"
export ANTHROPIC_BASE_URL="${OMNIROUTE_ANTHROPIC_URL}"
export ANTHROPIC_AUTH_TOKEN="${OMNIROUTE_KEY}"
ENV
fi

# 5. Проверьте через внутренний CLI
omniroute doctor || true
omniroute providers list || true

echo "Все CLI установлены и настроены для OmniRoute"
EOF
chmod +x my-setup.sh
./my-setup.sh
````
