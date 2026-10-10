# Участие в разработке OmniRoute

Спасибо за интерес к участию в разработке! Это руководство содержит всё необходимое, чтобы начать.

---

## Настройка среды разработки

### Предварительные требования

- **Node.js** `>=22.22.3 <23` или `>=24.0.0 <27` (рекомендуется: 24 LTS)
- **npm** 10+
- **Git**

### Клонирование и установка

```bash
git clone https://github.com/diegosouzapw/OmniRoute.git
cd OmniRoute
npm install
```

### Переменные окружения

```bash
# Создайте ваш .env из шаблона
cp .env.example .env

# Сгенерируйте необходимые секреты
echo "JWT_SECRET=$(openssl rand -base64 48)" >> .env
echo "API_KEY_SECRET=$(openssl rand -hex 32)" >> .env
```

Ключевые переменные для разработки:

| Переменная             | Значение по умолчанию    | Описание                  |
| ---------------------- | ------------------------ | ------------------------- |
| `PORT`                 | `20128`                  | Порт сервера              |
| `NEXT_PUBLIC_BASE_URL` | `http://localhost:20128` | Базовый URL для фронтенда |
| `JWT_SECRET`           | (сгенерировать выше)     | Секрет для подписи JWT    |
| `INITIAL_PASSWORD`     | `CHANGEME`               | Пароль для первого входа  |
| `APP_LOG_LEVEL`        | `info`                   | Уровень детализации логов |

### Настройки dashboard

В dashboard предусмотрены переключатели интерфейса для функций, которые также можно настраивать через переменные окружения:

| Расположение настройки | Переключатель      | Описание                               |
| ---------------------- | ------------------ | -------------------------------------- |
| Settings → Advanced    | Debug Mode         | Включить отладочные логи запросов (UI) |
| Settings → General     | Sidebar Visibility | Показать/скрыть разделы боковой панели |

Эти настройки хранятся в базе данных и сохраняются между перезапусками, а при задании переопределяют значения по умолчанию из переменных окружения.

### Локальный запуск

```bash
# Режим разработки (горячая перезагрузка)
npm run dev

# Сборка для продакшена
npm run build
npm run start

# Общая конфигурация порта
PORT=20128 NEXT_PUBLIC_BASE_URL=http://localhost:20128 npm run dev
```

URL по умолчанию:

- **Dashboard**: `http://localhost:20128/dashboard`
- **API**: `http://localhost:20128/v1`

---

## Рабочий процесс с Git

> ⚠️ **НИКОГДА не делайте commit напрямую в `main`.** Всегда используйте feature-ветки.

```bash
git checkout -b feat/your-feature-name
# ... make changes ...
git commit -m "feat: describe your change"
git push -u origin feat/your-feature-name
# Откройте Pull Request на GitHub
```

### Именование веток

| Префикс     | Назначение                    |
| ----------- | ----------------------------- |
| `feat/`     | Новые функции                 |
| `fix/`      | Исправления ошибок            |
| `refactor/` | Реструктуризация кода         |
| `docs/`     | Изменения документации        |
| `test/`     | Добавление/исправление тестов |
| `chore/`    | Инструменты, CI, зависимости  |

### Сообщения commit

Следуйте [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add circuit breaker for provider calls
fix: resolve JWT secret validation edge case
docs: update SECURITY.md with PII protection
test: add observability unit tests
refactor(db): consolidate rate limit tables
```

Области (scopes) (v3.8): `db`, `sse`, `oauth`, `dashboard`, `api`, `cli`, `docker`, `ci`, `mcp`, `a2a`, `memory`, `skills`, `cloud-agent`, `guardrails`, `compression`, `auto-combo`, `resilience`, `providers`, `executors`, `translator`, `domain`, `authz`.

---

## Запуск тестов

```bash
# Все тесты (unit + vitest + ecosystem + e2e)
npm run test:all

# Одиночный файл теста (Node.js native test runner — большинство тестов используют это)
node --import tsx/esm --test tests/unit/your-file.test.ts

# Vitest (MCP server, autoCombo, cache)
npm run test:vitest

# E2E тесты (требует Playwright)
npm run test:e2e

# E2E тесты клиентов протокола (MCP transports, A2A)
npm run test:protocols:e2e

# Тесты совместимости экосистемы
npm run test:ecosystem

# Покрытие: 75% statements/lines/functions, 70% branches
npm run test:coverage
npm run coverage:report

# Проверка линтера + форматирования
npm run lint
npm run check
```

Примечания о покрытии:

- `npm run test:coverage` измеряет покрытие исходного кода для основного набора unit-тестов, исключает `tests/**` и включает `open-sse/**`
- Pull request должны сохранять порог покрытия на уровне **75%+** statements/lines/functions и **70%+** branches
- Если PR изменяет production-код в `src/`, `open-sse/`, `electron/` или `bin/`, в том же PR необходимо добавить или обновить автоматические тесты
- `npm run coverage:report` выводит подробный отчёт по каждому файлу из последнего запуска покрытия
- `npm run test:coverage:legacy` сохраняет старую метрику для исторического сравнения
- Дорожная карта поэтапного улучшения покрытия описана в `docs/ops/COVERAGE_PLAN.md`

### Требования к Pull Request

Перед созданием или вливанием PR:

- Запустите `npm run test:unit`
- Запустите `npm run test:coverage`
- Убедитесь, что порог покрытия остаётся на уровне **75%+** statements/lines/functions и **70%+** branches
- Приложите изменённые или добавленные файлы тестов к описанию PR, если изменился production-код
- Проверьте результат SonarQube в PR, если секреты проекта настроены в CI

Текущее состояние тестов: **122 файла unit-тестов**, покрывающих:

- Трансляторы провайдеров и преобразование форматов
- Ограничение частоты запросов, circuit breaker и устойчивость
- Семантический кэш, идемпотентность, отслеживание прогресса
- Операции с базой данных и схема (21 модуль DB)
- Потоки OAuth и аутентификация
- Валидация API endpoint (Zod v4)
- Инструменты MCP-сервера и контроль областей доступа
- Системы Memory и Skills

---

## Стиль кода

- **ESLint** — Запускайте `npm run lint` перед commit
- **Prettier** — Автоматическое форматирование через `lint-staged` при commit (2 пробела, точки с запятой, двойные кавычки, ширина 100 символов, trailing commas в стиле es5)
- **TypeScript** — Весь код в `src/` использует `.ts`/`.tsx`; в `open-sse/` используется `.ts`/`.js`; документируйте с помощью TSDoc (`@param`, `@returns`, `@throws`)
- **Без `eval()`** — ESLint требует соблюдения правил `no-eval`, `no-implied-eval`, `no-new-func`
- **Валидация Zod** — Используйте схемы Zod v4 для валидации всех входных данных API
- **Именование**: Файлы = camelCase/kebab-case, компоненты = PascalCase, константы = UPPER_SNAKE

---

## Структура проекта

```
src/                        # TypeScript (.ts / .tsx)
├── app/                    # Next.js 16 App Router
│   ├── (dashboard)/        # Dashboard pages (23 sections)
│   ├── api/                # API routes (51 directories)
│   └── login/              # Auth pages (.tsx)
├── domain/                 # Policy engine (policyEngine, comboResolver, costRules, etc.)
├── lib/                    # Core business logic (.ts)
│   ├── a2a/                # Agent-to-Agent v0.3 protocol server
│   ├── acp/                # Agent Communication Protocol registry
│   ├── compliance/         # Compliance policy engine
│   ├── db/                 # SQLite database layer (21 modules + 16 migrations)
│   ├── memory/             # Persistent conversational memory
│   ├── oauth/              # OAuth providers, services, and utilities
│   ├── skills/             # Extensible skill framework
│   ├── usage/              # Usage tracking and cost calculation
│   └── localDb.ts          # Re-export layer only — never add logic here
├── middleware/              # Request middleware (promptInjectionGuard)
├── mitm/                   # MITM proxy (cert, DNS, target routing)
├── shared/
│   ├── components/         # React components (.tsx)
│   ├── constants/          # Provider definitions (177), MCP scopes, 14 routing strategies
│   ├── utils/              # Circuit breaker, sanitizer, auth helpers
│   └── validation/         # Zod v4 schemas
└── sse/                    # SSE proxy pipeline

open-sse/                   # @omniroute/open-sse workspace
├── executors/              # 14 provider-specific request executors
├── handlers/               # 11 request handlers (chat, responses, embeddings, images, etc.)
├── mcp-server/             # MCP server (25 tools, 3 transports, 10 scopes)
├── services/               # 36+ services (combo, autoCombo, rateLimitManager, etc.)
├── translator/             # Format translators (OpenAI ↔ Claude ↔ Gemini ↔ Responses ↔ Ollama)
├── transformer/            # Responses API transformer
└── utils/                  # 22 utility modules (stream, TLS, proxy, logging)

electron/                   # Electron desktop app (cross-platform)

tests/
├── unit/                   # Node.js test runner (122 test files)
├── integration/            # Integration tests
├── e2e/                    # Playwright tests
├── security/               # Security tests
├── translator/             # Translator-specific tests
└── load/                   # Load tests

docs/                       # Documentation
├── ARCHITECTURE.md         # System architecture
├── API_REFERENCE.md        # All endpoints
├── USER_GUIDE.md           # Provider setup, CLI integration
├── TROUBLESHOOTING.md      # Common issues
├── MCP-SERVER.md           # MCP server (25 tools)
├── A2A-SERVER.md           # A2A agent protocol
├── AUTO-COMBO.md           # Auto-combo engine
├── CLI-TOOLS.md            # CLI tools integration
├── COVERAGE_PLAN.md        # Test coverage improvement plan
├── openapi.yaml            # OpenAPI specification
└── adr/                    # Architecture Decision Records
```

## Добавление нового провайдера

### Шаг 1: Регистрация констант провайдера

Добавьте в `src/shared/constants/providers.ts` — валидируется через Zod при загрузке модуля.

### Шаг 2: Добавление executor (при необходимости пользовательской логики)

Создайте executor в `open-sse/executors/your-provider.ts`, унаследовав его от базового executor.

### Шаг 3: Добавление транслятора (если формат отличается от OpenAI)

Создайте трансляторы запросов/ответов в `open-sse/translator/`.

### Шаг 4: Добавление конфигурации OAuth (если провайдер работает через OAuth)

Добавьте учётные данные OAuth в `src/lib/oauth/constants/oauth.ts` и сервис в `src/lib/oauth/services/`.

Если вышестоящий провайдер распространяет публичный OAuth client_id/secret или Firebase Web API key внутри своего публичного CLI / браузерного бандла, **не** встраивайте его как строковый литерал. Используйте `resolvePublicCred()` из `open-sse/utils/publicCreds.ts` и добавьте маскированную запись с байтами в `EMBEDDED_DEFAULTS`. Полный обязательный рабочий процесс описан в [`docs/security/PUBLIC_CREDS.md`](./docs/security/PUBLIC_CREDS.md).

Внутри handlers/executors сообщения об ошибках, доходящие до клиента, должны проходить через `buildErrorBody()` / `sanitizeErrorMessage()` из `open-sse/utils/error.ts` — никогда не помещайте сырые `err.stack` или `err.message` в тело Response. См. [`docs/security/ERROR_SANITIZATION.md`](./docs/security/ERROR_SANITIZATION.md).

### Шаг 5: Регистрация моделей

Добавьте определения моделей в `open-sse/config/providerRegistry.ts`.

### Шаг 6: Добавление тестов

Напишите unit-тесты в `tests/unit/`, покрывающие как минимум:

- Регистрацию провайдера
- Трансляцию запросов/ответов
- Обработку ошибок

---

## Чек-лист Pull Request

- [ ] Тесты проходят (`npm test`)
- [ ] Lint проходит (`npm run lint`)
- [ ] Сборка проходит успешно (`npm run build`)
- [ ] Добавлены типы TypeScript для новых публичных функций и интерфейсов
- [ ] Нет жёстко закодированных секретов или резервных значений
- [ ] Публичные учётные данные вышестоящих сервисов встроены через `resolvePublicCred()` (см. [`docs/security/PUBLIC_CREDS.md`](./docs/security/PUBLIC_CREDS.md)), а не в виде литералов
- [ ] Ответы об ошибках проходят через `buildErrorBody()` / `sanitizeErrorMessage()` — никаких сырых стек-трейсов в телах ответов (см. [`docs/security/ERROR_SANITIZATION.md`](./docs/security/ERROR_SANITIZATION.md))
- [ ] Команды shell (`exec` / `spawn`) передают значения во время выполнения через `env`, а не через строковую интерполяцию
- [ ] Все входные данные валидируются схемами Zod
- [ ] CHANGELOG обновлён (если изменение затрагивает пользователей)
- [ ] Документация обновлена (если применимо)
- [ ] Не появилось новых предупреждений CodeQL / Secret-Scanning, или каждое из них отклонено с техническим обоснованием и ссылкой на соответствующий документ из `docs/security/`
- [ ] Маршруты, порождающие дочерние процессы (`/api/mcp/`, `/api/cli-tools/runtime/`), классифицированы как `isLocalOnlyPath()` в `src/server/authz/routeGuard.ts` — см. [Hard Rule #15](docs/security/ROUTE_GUARD_TIERS.md)
- [ ] В сообщениях commit нет трейлеров `Co-Authored-By` — commit должны быть оформлены исключительно от имени Git-идентичности владельца репозитория (Hard Rule #16)

---

## Релизы

Релизы управляются через workflow `/generate-release`. При создании нового GitHub Release пакет **автоматически публикуется в npm** через GitHub Actions.

---

## Получение помощи

- **Архитектура**: См. [`docs/architecture/ARCHITECTURE.md`](docs/architecture/ARCHITECTURE.md)
- **Справочник по API**: См. [`docs/reference/API_REFERENCE.md`](docs/reference/API_REFERENCE.md)
- **Документация по безопасности**: [`docs/security/CLI_TOKEN.md`](docs/security/CLI_TOKEN.md), [`docs/security/ROUTE_GUARD_TIERS.md`](docs/security/ROUTE_GUARD_TIERS.md), [`docs/security/ERROR_SANITIZATION.md`](docs/security/ERROR_SANITIZATION.md), [`docs/security/PUBLIC_CREDS.md`](docs/security/PUBLIC_CREDS.md)
- **Документация по эксплуатации**: [`docs/ops/SQLITE_RUNTIME.md`](docs/ops/SQLITE_RUNTIME.md)
- **Задачи (Issues)**: [github.com/diegosouzapw/OmniRoute/issues](https://github.com/diegosouzapw/OmniRoute/issues)
- **ADR**: См. `docs/adr/` — записи об архитектурных решениях
