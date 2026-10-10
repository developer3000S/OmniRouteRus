# REPOSITORY_MAP (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/REPOSITORY_MAP.md) · 🇸🇦 [ar](../../../ar/docs/architecture/REPOSITORY_MAP.md) · 🇦🇿 [az](../../../az/docs/architecture/REPOSITORY_MAP.md) · 🇧🇬 [bg](../../../bg/docs/architecture/REPOSITORY_MAP.md) · 🇧🇩 [bn](../../../bn/docs/architecture/REPOSITORY_MAP.md) · 🇨🇿 [cs](../../../cs/docs/architecture/REPOSITORY_MAP.md) · 🇩🇰 [da](../../../da/docs/architecture/REPOSITORY_MAP.md) · 🇩🇪 [de](../../../de/docs/architecture/REPOSITORY_MAP.md) · 🇪🇸 [es](../../../es/docs/architecture/REPOSITORY_MAP.md) · 🇮🇷 [fa](../../../fa/docs/architecture/REPOSITORY_MAP.md) · 🇫🇮 [fi](../../../fi/docs/architecture/REPOSITORY_MAP.md) · 🇫🇷 [fr](../../../fr/docs/architecture/REPOSITORY_MAP.md) · 🇮🇳 [gu](../../../gu/docs/architecture/REPOSITORY_MAP.md) · 🇮🇱 [he](../../../he/docs/architecture/REPOSITORY_MAP.md) · 🇮🇳 [hi](../../../hi/docs/architecture/REPOSITORY_MAP.md) · 🇭🇺 [hu](../../../hu/docs/architecture/REPOSITORY_MAP.md) · 🇮🇩 [id](../../../id/docs/architecture/REPOSITORY_MAP.md) · 🇮🇩 [in](../../../in/docs/architecture/REPOSITORY_MAP.md) · 🇮🇹 [it](../../../it/docs/architecture/REPOSITORY_MAP.md) · 🇯🇵 [ja](../../../ja/docs/architecture/REPOSITORY_MAP.md) · 🇰🇷 [ko](../../../ko/docs/architecture/REPOSITORY_MAP.md) · 🇮🇳 [mr](../../../mr/docs/architecture/REPOSITORY_MAP.md) · 🇲🇾 [ms](../../../ms/docs/architecture/REPOSITORY_MAP.md) · 🇳🇱 [nl](../../../nl/docs/architecture/REPOSITORY_MAP.md) · 🇳🇴 [no](../../../no/docs/architecture/REPOSITORY_MAP.md) · 🇵🇭 [phi](../../../phi/docs/architecture/REPOSITORY_MAP.md) · 🇵🇱 [pl](../../../pl/docs/architecture/REPOSITORY_MAP.md) · 🇵🇹 [pt](../../../pt/docs/architecture/REPOSITORY_MAP.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/REPOSITORY_MAP.md) · 🇷🇴 [ro](../../../ro/docs/architecture/REPOSITORY_MAP.md) · 🇸🇰 [sk](../../../sk/docs/architecture/REPOSITORY_MAP.md) · 🇸🇪 [sv](../../../sv/docs/architecture/REPOSITORY_MAP.md) · 🇰🇪 [sw](../../../sw/docs/architecture/REPOSITORY_MAP.md) · 🇮🇳 [ta](../../../ta/docs/architecture/REPOSITORY_MAP.md) · 🇮🇳 [te](../../../te/docs/architecture/REPOSITORY_MAP.md) · 🇹🇭 [th](../../../th/docs/architecture/REPOSITORY_MAP.md) · 🇹🇷 [tr](../../../tr/docs/architecture/REPOSITORY_MAP.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/REPOSITORY_MAP.md) · 🇵🇰 [ur](../../../ur/docs/architecture/REPOSITORY_MAP.md) · 🇻🇳 [vi](../../../vi/docs/architecture/REPOSITORY_MAP.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/REPOSITORY_MAP.md)

---

---
title: "Карта репозитория"
version: 3.8.2
lastUpdated: 2026-05-13
---

# Карта репозитория

> **Краткое описание для каждого каталога и файла корня.**
> Последнее обновление: 2026-05-13 — OmniRoute v3.8.0
>
> Используйте эту карту для быстрой навигации по кодовой базе. Для глубокого погружения следуйте ссылкам на специализированную документацию.

## Дерево верхнего уровня

```
OmniRoute/
├── src/                  # Приложение Next.js 16 (UI + API routes + libs + domain + server)
├── open-sse/             # Рабочая область движка потоковой передачи (handlers, executors, translator, MCP server)
├── electron/             # Оболочка для настольных приложений (Electron 41 + electron-builder 26.10)
├── bin/                  # Точка входа CLI и обработчики команд
├── scripts/              # Скрипты сборки, проверки, синхронизации и разовых задач
├── docs/                 # Публичная документация (вы здесь)
├── tests/                # Все наборы тестов (unit, integration, e2e, protocols-e2e)
├── public/               # Статические ресурсы Next.js, манифест PWA, сервисный работник, иконки
├── config/               # Статические файлы конфигурации
├── images/               # Маркетинговые / README-изображения
├── .github/              # Рабочие процессы GitHub Actions + шаблоны issues + PR
├── .husky/               # Git-хуки (pre-commit, pre-push)
├── .claude/              # Слэш-команды Claude Code (проектно-специфичные)
├── .agents/              # Рабочие процессы и навыки Codex / generic agent (зеркало .claude/)
├── .vscode/              # Настройки рабочей области VS Code
├── _ideia/               # Планировочные заметки (неформальные; не поставляются)
├── _mono_repo/           # Исторические подпроекты (cloud, site, vscode-extension)
├── _references/          # Читаемые ссылки на клоны из связанных проектов с открытым исходным кодом
├── _tasks/               # Файлы отслеживания задач по выпускам (неформальные)
├── .issues/              # Локальный кэш issues (gitignored)
├── .playwright-mcp/      # Артефакты тестов Playwright MCP
├── coverage/             # Выходные данные покрытия c8 (gitignored)
├── logs/                 # Логи времени выполнения (gitignored)
├── node_modules/         # Зависимости (gitignored)
├── package/              # Область подготовки npm pack (артефакт сборки)
├── .next/                # Выходные данные сборки Next.js (gitignored)
└── (файлы корня — см. ниже)
```

---

## Файлы корня

| Файл                                        | Назначение                                                                                                                                         |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **README.md**                               | Маркетинговая страница + быстрый старт + матрица функций (см. также `llm.txt`)                                                                      |
| **CHANGELOG.md**                            | Журнал изменений по выпускам (автоматически генерируется навыком `/version-bump-cc`)                                                                              |
| **LICENSE**                                 | Текст лицензии MIT                                                                                                                                |
| **CLAUDE.md**                               | Правила проекта для агентов Claude Code (жесткие правила, соглашения, сценарии)                                                                       |
| **AGENTS.md**                               | То же, что и CLAUDE.md, но для не-Claude AI агентов (Codex, Cursor и т.д.)                                                                            |
| **GEMINI.md**                               | Краткие правила для агентов на основе Gemini (подмножество CLAUDE.md)                                                                                     |
| **CONTRIBUTING.md**                         | Руководство для участников: настройка, соглашения о коммитах, тестирование, поток PR                                                                                |
| **SECURITY.md**                             | Политика сообщения о уязвимостях, поддерживаемые версии, модель угроз                                                                                |
| **CODE_OF_CONDUCT.md**                      | Устав участников — ожидания поведения сообщества                                                                                          |
| **llm.txt**                                 | Текстовая страница для LLM-краулеров (SEO для AI-ассистентов)                                                                           |
| **Tuto_Qdrant.md**                          | Учебник по включению памяти Qdrant vector — **интеграция в настоящее время неактивна** (см. баннер; основная документация по памяти в `docs/frameworks/MEMORY.md`) |
| **package.json**                            | манифест npm, скрипты, зависимости, движки, шлюз покрытия c8                                                                                  |
| **package-lock.json**                       | Заблокированное дерево зависимостей                                                                                                                          |
| **tsconfig.json**                           | Корневая конфигурация TypeScript                                                                                                                          |
| **tsconfig.typecheck-core.json**            | Конфигурация проверки типов для `src/` core                                                                                                                |
| **tsconfig.typecheck-noimplicit-core.json** | Строгая (`noImplicitAny`) проверка типов                                                                                                              |
| **tsconfig.tsbuildinfo**                    | Кэш инкрементальной сборки TS (gitignored)                                                                                                         |
| **next.config.mjs**                         | Конфигурация сборки Next.js 16 (выходной формат standalone)                                                                                              |
| **next-env.d.ts**                           | Автоматически сгенерированные типы env Next.js                                                                                                                |
| **eslint.config.mjs**                       | Плоская конфигурация ESLint (правила по областям проекта)                                                                                                     |
| **prettier.config.mjs**                     | Правила форматирования Prettier                                                                                                                       |
| **postcss.config.mjs**                      | Конфигурация PostCSS для конвейера Tailwind/CSS                                                                                                        |
| **playwright.config.ts**                    | Конфигурация тестов E2E Playwright                                                                                                                      |
| **vitest.config.ts**                        | Конфигурация Vitest (набор по умолчанию)                                                                                                                   |
| **vitest.mcp.config.ts**                    | Конфигурация Vitest для сервера MCP / autoCombo / наборов кэша                                                                                         |
| **sonar-project.properties**                | Конфигурация SonarQube/SonarCloud (качество кода)                                                                                                      |
| **Dockerfile**                              | Многоступенчавая сборка Docker (builder → runner-base → runner-cli)                                                                                   |
| **docker-compose.yml**                      | Dev compose с 4 профилями (base, cli, host, cliproxyapi) + redis sidecar                                                                      |
| **docker-compose.prod.yml**                 | Производственный compose (порт 20130, redis, именованные тома)                                                                                           |
| **.dockerignore**                           | Файлы, исключенные из контекста Docker                                                                                                              |
| **fly.toml**                                | Конфигурация развертывания Fly.io (регион `sin`, порт 20128, том /data)                                                                               |
| **.env.example**                            | Шаблон файла env (815 строк, автоматически копируется в `.env` при первой установке)                                                                           |
| **.gitignore**                              | Шаблоны игнорирования Git                                                                                                                             |
| **.npmignore**                              | Список исключений публикации npm                                                                                                                      |
| **.npmrc**                                  | Конфигурация npm (регистр, политика блокировки)                                                                                                          |
| **.node-version**                           | Фиксация версии Node (используется инструментами, совместимыми с nvm)                                                                                                 |
| **.nvmrc**                                  | Фиксация версии Node для nvm                                                                                                                        |

---

## `src/` — Приложение Next.js

```
src/
├── app/                 # App Router (страницы + API маршруты + страницы состояния + лендинг)
├── lib/                 # Основные библиотеки / доменные модули (~50 поддиректорий + ~30 файлов верхнего уровня)
├── domain/              # Чистая доменная логика (движок политик, резервное решение, стоимость, блокировка, comboResolver, оценка)
├── server/              # Серверные модули (конвейер авторизации, CORS, промежуточное ПО авторизации) — нельзя импортировать из клиента
├── shared/              # Общие между сервером и клиентом (константы, типы, валидация, контракты, утилиты)
├── i18n/                # Конфигурация next-intl + JSON сообщений для каждой локали (30+ локалей)
├── middleware/          # Промежуточное ПО Next.js (обогащение запросов, обнаружение локали)
├── mitm/                # Помощники MITM прокси (установка сертификата Linux, скрытность antigravity)
├── models/              # Глюк модели адаптера (устаревший шим)
├── scripts/             # Встроенные скрипты обслуживания (например, backfillAggregation)
├── sse/                 # Устаревшие обработчики/сервисы SSE (chat.ts, chatHelpers.ts, services/auth.ts)
├── store/               # Устаревший in-memory store (выводится из src/lib/db)
├── types/               # Общие файлы TS типов
├── instrumentation.ts   # Хук телеметрии Next.js (браузер + edge)
├── instrumentation-node.ts  # Только для узла инструментации
├── server-init.ts       # Загрузка сервера (миграции БД, задания, очистка)
└── proxy.ts             # HTTP-прокси входной шим
```

### `src/app/` — App Router (Next.js 16)

| Путь                                                                         | Назначение                                                                                                                                                                                    |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `app/api/v1/`                                                                | Публичный API совместимый с OpenAI (~25 подмаршрутов: чат, завершения, вложения, файлы, пакеты, аудио, изображения, видео, музыка, реранк, модерации, поиск, ws, агенты, аккаунты, провайдеры и т.д.) |
| `app/api/v1beta/`                                                            | API-конечные точки стиля Gemini                                                                                                                                                                 |
| `app/api/` (не v1)                                                          | Управляющие/административные маршруты (~60 директорий: провайдеры, комбо, настройки, mcp, a2a, оценки, память, навыки, вебхуки, соответствие, устойчивость, мониторинг, туннели, cli-tools и т.д.)            |
| `app/a2a/`                                                                   | Точка входа A2A JSON-RPC 2.0 (`POST /a2a`)                                                                                                                                                 |
| `app/.well-known/agent.json/`                                                | Карта агента A2A (обнаружение)                                                                                                                                                                 |
| `app/(dashboard)/dashboard/`                                                 | Страницы UI дашборда (~30 страниц: провайдеры, комбо, настройки, память, навыки, вебхуки, оценки, аудит, пакет, кэш, затраты, здоровье, система и т.д.)                                             |
| `app/docs/`                                                                  | Встроенный просмотр документации (отображает `docs/*.md`)                                                                                                                                        |
| `app/landing/`                                                               | Маркетинговая посадочная страница                                                                                                                                                                     |
| `app/login/`, `forgot-password/`, `forbidden/`                               | Страницы, связанные с аутентификацией                                                                                                                                                                         |
| `app/{400,401,403,408,429,500,502,503}/`                                     | Страницы ошибок HTTP                                                                                                                                                                           |
| `app/maintenance/`, `offline/`, `status/`, `privacy/`, `terms/`, `callback/` | Статические/страницы состояния                                                                                                                                                                        |
| `app/layout.tsx`, `page.tsx`, `manifest.ts`, `globals.css`                   | Корневой макет, главная страница, манифест PWA, глобальный CSS                                                                                                                                                |
| `app/error.tsx`, `global-error.tsx`, `not-found.tsx`, `loading.tsx`          | Границы ошибок                                                                                                                                                                           |

### `src/lib/` — Основные библиотеки (~50 модулей)

| Модуль                                   | Назначение                                                                                                                                                  |
| ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `a2a/`                                   | Менеджер задач протокола A2A, навыки (5), потоковая передача                                                                                                         |
| `acp/`                                   | Реестр CLI Агентов (локальное обнаружение CLI — см. `docs/frameworks/AGENT_PROTOCOLS_GUIDE.md`)                                                                |
| `api/`                                   | Общие помощники API (`requireManagementAuth`, валидация)                                                                                                 |
| `auth/`                                  | Сессия, хэширование паролей, валидация токенов                                                                                                              |
| `batches/`                               | Обработчики API OpenAI Batches                                                                                                                              |
| `catalog/`                               | Валидация каталога провайдеров Zod + разрешение возможностей                                                                                                  |
| `cloudAgent/`                            | Облачные агенты (Codex Cloud, Devin, Jules) — см. `docs/frameworks/CLOUD_AGENT.md`                                                                          |
| `combos/`                                | Разрешение комбо + переупорядочивание помощников                                                                                                                       |
| `compliance/`                            | Журнал аудита + аудит провайдера — см. `docs/security/COMPLIANCE.md`                                                                                           |
| `compression/`                           | Глюк движка сжатия (движки живут в `open-sse/services/compression/`)                                                                               |
| `config/`                                | Помощники конфигурации времени выполнения                                                                                                                                   |
| `db/`                                    | 45+ доменных модулей БД + 55 миграций (всегда проходите через здесь для SQLite)                                                                                |
| `display/`                               | Помощники форматирования UI (стоимость, задержка и т.д.)                                                                                                              |
| `embeddings/`                            | Помощники сервиса вложений                                                                                                                               |
| `env/`                                   | Парсинг и валидация переменных окружения                                                                                                                        |
| `evals/`                                 | Фреймворк оценки (наборы, исполнитель, время выполнения) — см. `docs/frameworks/EVALS.md`                                                                                |
| `guardrails/`                            | Маскировщик PII, инъекция подсказки, мост зрения — см. `docs/security/GUARDRAILS.md`                                                                          |
| `jobs/`                                  | Фоновые задания (похожие на cron)                                                                                                                              |
| `memory/`                                | Память беседы (SQLite FTS5 + Qdrant) — см. `docs/frameworks/MEMORY.md`                                                                           |
| `monitoring/`                            | Проверки здоровья, эмиссия метрик                                                                                                                          |
| `oauth/`                                 | OAuth потоки для 14 провайдеров (claude, codex, antigravity, cursor, github, gemini, kimi-coding, kilocode, cline, qwen, kiro, qoder, gitlab-duo, windsurf) |
| `plugins/`                               | Реестр плагинов                                                                                                                                          |
| `promptCache/`                           | Точки останова кэша подсказок стиля Anthropic                                                                                                                 |
| `skills/`                                | Фреймворк навыков (встроенные + рынок + SkillsSH) — см. `docs/frameworks/SKILLS.md`                                                                   |
| `webhookDispatcher.ts`                   | Доставка вебхуков HMAC — см. `docs/frameworks/WEBHOOKS.md`                                                                                                |
| `cloudflaredTunnel.ts`, `ngrokTunnel.ts` | Менеджеры туннелей — см. `docs/ops/TUNNELS_GUIDE.md`                                                                                                        |
| `oneproxySync.ts`, `oneproxyRotator.ts`  | Рынок бесплатных прокси 1proxy — см. `docs/ops/PROXY_GUIDE.md`                                                                                            |
| `cloudSync.ts`, `initCloudSync.ts`       | Необязательная синхронизация облака состояния                                                                                                                             |
| `localDb.ts`                             | Баррель ре-экспорт для модулей db (нет логики — только ре-экспорт)                                                                                             |
| `cacheLayer.ts`, `idempotencyLayer.ts`   | Кэширование запросов + идемпотентность                                                                                                                            |
| (~30 дополнительных файлов верхнего уровня)               | Специализированные помощники (logEnv, modelsDevSync, piiSanitizer и т.д.)                                                                                          |

### `src/db/` — База данных (45+ модулей + 55 миграций)

| Поддиректория           | Назначение                                                                                                                                                                    |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `db/core.ts`     | `getDbInstance()` синглтон с журналированием WAL                                                                                                                            |
| `db/migrations/` | 55 версионных SQL файлов (идемпотентные, транзакционные, нумерованные `001`..`055`)                                                                                                  |
| `db/<domain>.ts` | Один модуль на домен: провайдеры, комбо, apiKeys, пользователи, сессии, использование, audit*log, вебхуки, навыки, memory_entries, cloud_agent_tasks, evals*\*, reasoning_cache и т.д. |

### `src/domain/`

| Модуль                 | Назначение                                                                 |
| ---------------------- | ----------------------------------------------------------------------- |
| `policy.ts`            | Движок политик                                                           |
| `fallbackPolicy.ts`    | Дерево решений резервного копирования                                                  |
| `costRules.ts`         | Правила расчета стоимости                                                  |
| `lockoutPolicy.ts`     | Политика блокировки модели/соединения                                         |
| `tagRouter.ts`         | Маршрутизация на основе тегов                                                       |
| `comboResolver.ts`     | Разрешение комбо (используется движком комбо)                                 |
| `modelAvailability.ts` | Проверка доступности на уровне модели                                            |
| `assessment/`          | Оценка модели (Фаза 1 RFC-AUTO-ASSESSMENT — см. `docs/archive/`) |

### `src/server/`

| Модуль   | Назначение                                                                                              |
| -------- | ---------------------------------------------------------------------------------------------------- |
| `authz/` | Конвейер авторизации: `classify` → `policies` → `enforce` — см. `docs/architecture/AUTHZ_GUIDE.md` |
| `cors/`  | Конфигурация CORS                                                                                   |
| `auth/`  | Промежуточное ПО сессии                                                                                   |

### `src/shared/`

| Модуль                           | Назначение                                                                |
| -------------------------------- | ---------------------------------------------------------------------- |
| `constants/providers.ts`         | **177 провайдеров** с валидацией Zod (источник истины)                |
| `constants/cliTools.ts`          | Реестр внешних инструментов CLI                                             |
| `constants/routingStrategies.ts` | **14 стратегий маршрутизации** с приоритетами                              |
| `constants/publicApiRoutes.ts`   | Маршруты, требующие Bearer (в отличие от управления) аутентификации                        |
| `constants/upstreamHeaders.ts`   | Список запрещенных заголовков для запросов upstream                                  |
| `validation/schemas.ts`          | ~80 схем Zod (единый источник истины для контрактов API)             |
| `validation/helpers.ts`          | Помощники валидации Zod (`validateBody` и т.д.)                          |
| `types/`                         | Общие TS типы                                                        |
| `contracts/`                     | Контракты публичного API (используются в `files:` в `package.json`)          |
| `utils/circuitBreaker.ts`        | Автоматический выключатель провайдера (см. `docs/architecture/RESILIENCE_GUIDE.md`) |
| `utils/apiAuth.ts`               | Валидация ключей API, проверка области действия                                     |
| `utils/fetchTimeout.ts`          | Обертки тайм-аута/отмены для upstream fetch                              |

## `open-sse/` — Рабочая область Streaming Engine

Отдельный npm workspace (`@omniroute/open-sse`). Обрабатывает обработку запросов и выполнение провайдеров.

```
open-sse/
├── handlers/            # 15 файлов (11 обработчиков + 4 вспомогательных): chatCore, responsesHandler, embeddings, audio, image, video, music, rerank, moderations, search, etc.
├── executors/           # 31 провайдер-специфичных исполнителей (расширяют BaseExecutor)
├── translator/          # Конвертеры форматов (9 запросов, 8 ответов, 9 вспомогательных)
├── transformer/         # Преобразование API ответов ↔ Chat Completions (TransformStream)
├── services/            # ~80+ модулей сервисов (combo, accountFallback, autoCombo, reasoningCache, claude code/chatgpt stealth, modelDeprecation, taskAwareRouter, workflowFSM, etc.)
├── mcp-server/          # Сервер MCP (37 инструментов, 3 транспорта, ~13 областей)
├── config/              # Реестры провайдеров/моделей, конфигурация заголовков, псевдонимы моделей
├── utils/               # TLS клиент, прокси fetch/dispatcher, сетевые вспомогательные функции
├── index.ts             # Точка входа в workspace
├── package.json         # Манифест workspace
├── tsconfig.json        # Конфигурация TS workspace
└── types.d.ts           # Объявления типов workspace
```

### `open-sse/mcp-server/`

| Путь                        | Назначение                                                                        |
| --------------------------- | ------------------------------------------------------------------------------ |
| `server.ts`                 | Жизненный цикл сервера MCP (stdio + HTTP транспорты)                                 |
| `httpTransport.ts`          | HTTP Streamable + SSE транспорты (`/api/mcp/sse`, `/api/mcp/stream`)           |
| `audit.ts`                  | Аудит логирования в таблицу `mcp_tool_audit`                                        |
| `scopeEnforcement.ts`       | Валидация областей для каждого инструмента                                                      |
| `runtimeHeartbeat.ts`       | Состояние сервера в `DATA_DIR/runtime/mcp-heartbeat.json`                      |
| `descriptionCompressor.ts`  | Сжатие метаданных описания инструментов для сохранения контекста                             |
| `schemas/tools.ts`          | 30 базовых определений инструментов + области                                              |
| `tools/advancedTools.ts`    | Реализации продвинутых инструментов                                                  |
| `tools/memoryTools.ts`      | 3 инструмента памяти (поиск/добавление/очистка)                                              |
| `tools/skillTools.ts`       | 4 инструмента навыков (список/включение/выполнение/выполнения)                                 |
| `tools/compressionTools.ts` | 5 инструментов сжатия                                                            |
| `README.md`                 | Внутренний README сервера MCP (ссылка из `docs/frameworks/MCP-SERVER.md`) |

---

## `electron/` — Оболочка для рабочего стола

| Файл             | Назначение                                                                           |
| ---------------- | --------------------------------------------------------------------------------- |
| `main.js`        | Основной процесс Electron (BrowserWindow, встроенный сервер Next.js, трей, автообновление) |
| `preload.js`     | IPC мост (contextBridge → `window.omniroute`)                                   |
| `package.json`   | Конфигурация electron-builder + зависимости Electron 41 + electron-builder 26.10               |
| `assets/`        | Иконки приложения (Windows .ico, macOS .icns, Linux .png)                                 |
| `dist-electron/` | Выходные данные сборки (gitignored)                                                         |
| `types.d.ts`     | Объявления типов для рендерера bridge                                             |
| `README.md`      | Внутренний README Electron (см. также `docs/guides/ELECTRON_GUIDE.md`)               |

---

## `bin/` — CLI

| File                                                                                                        | Purpose                                                                                                                    |
| ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `omniroute.mjs`                                                                                             | Основной CLI вход — `omniroute serve`, `omniroute setup`, `omniroute doctor`, `omniroute providers`, `omniroute combos`, и т.д. |
| `reset-password.mjs`                                                                                        | Отдельный CLI для сброса пароля                                                                                              |
| `cli/commands/setup.mjs`                                                                                    | Интерактивный и неинтерактивный мастер настройки                                                                                 |
| `cli/commands/doctor.mjs`                                                                                   | Диагностика состояния системы (8+ проверок)                                                                                      |
| `cli/commands/providers.mjs`                                                                                | Список провайдеров/тест/валидация                                                                                                |
| `cli/{args,data-dir,encryption,io,provider-catalog,provider-store,provider-test,settings-store,sqlite}.mjs` | Вспомогательные модули CLI                                                                                                         |
| `cli/tray/tray.ts`                                                                                          | Интеграция с системным треем (кросс-платформенная: NotifyIcon на Windows, systray2 на macOS/Linux)                                   |
| `cli/tray/tray.ps1`                                                                                         | PowerShell NotifyIcon backend (Windows, без новых бинарных файлов)                                                                 |
| `cli/tray/autostart.ts`                                                                                     | Кросс-платформенный автозапуск (LaunchAgent / .desktop / registry)                                                               |
| `cli/runtime/sqliteRuntime.mjs`                                                                             | 5-шаговая цепочка разрешения драйвера SQLite (встроенный → runtime → ленивая установка → node:sqlite → sql.js)                            |
| `cli/runtime/magicBytes.mjs`                                                                                | Валидация бинарных сигнатур (ELF / Mach-O / Mach-O fat / PE)                                                              |
| `cli/runtime/index.mjs`                                                                                     | `warmUpRuntimes()` — предварительное разрешение драйверов при postinstall / первом запуске                                                   |
| `nodeRuntimeSupport.mjs`                                                                                    | Проверка поддерживаемой версии Node.js при установке                                                                              |

## `skills/` — Публичные навыки агента

| Файл                         | Назначение                                                                            |
| ---------------------------- | ---------------------------------------------------------------------------------- |
| `skills/omniroute*/SKILL.md` | 10 манифестов навыков для внешних AI-агентов (Claude Desktop, ChatGPT, Cursor, Cline) |

---

## `scripts/` — Скрипты сборки и проверки

| Скрипт                              | Назначение                                                                    |
| ----------------------------------- | -------------------------------------------------------------------------- |
| `run-next.mjs`                      | Запуск dev/start с гидратацией env                                        |
| `build-next-isolated.mjs`           | Отдельная сборка (Next.js 16 standalone)                                   |
| `prepublish.ts`                     | Подготовка пакета перед `npm pack`                                      |
| `postinstall.mjs`                   | Автоматическое создание `.env` из `.env.example` при первой установке                    |
| `sync-env.mjs`                      | Повторная синхронизация ключей `.env` с `.env.example`                                    |
| `check-cycles.mjs`                  | Обнаружение циклических зависимостей                                               |
| `check-route-validation.mjs`        | Проверка наличия Zod-валидации для всех API-маршрутов                                |
| `check-t11-any-budget.mjs`          | Обязательное указание явного `any` бюджета на файл                                     |
| `check-docs-sync.mjs`               | Проверка синхронизации версий документов (существующий pre-commit)                           |
| **`check-env-doc-sync.mjs`**        | НОВОЕ: перекрестная проверка переменных окружения в коде, `.env.example` и `ENVIRONMENT.md`    |
| **`check-docs-counts-sync.mjs`**    | НОВОЕ: проверка соответствия количеств (исполнителей, стратегий, OAuth, навыков A2A) документации |
| **`check-deprecated-versions.mjs`** | НОВОЕ: выявление устаревших версий/дат в документации                                     |
| `check-supported-node-runtime.ts`   | Проверка поддержки текущей версии Node                                 |
| `check-pr-test-policy.mjs`          | Применение правила "обязательны тесты" к изменениям в производственном коде                   |
| **`gen-provider-reference.ts`**     | НОВОЕ: автоматическая генерация `docs/reference/PROVIDER_REFERENCE.md` из каталога     |
| `generate-docs-index.mjs`           | Создание `src/app/docs/lib/docs-auto-generated.ts` из `docs/*.md`           |
| `i18n/generate-multilang.mjs`       | Перевод строк интерфейса и документов через Google Translate                           |
| `i18n_autotranslate.py`             | Конвейер перевода документов на основе LLM                                         |
| `validate_translation.py`           | Проверка перевода для каждого языка                                          |
| `check_translations.py`             | Проверка ключей i18n на стороне кода                                                   |
| `run-playwright-tests.mjs`          | Запуск E2E-тестов Playwright                                                      |
| `run-protocol-clients-tests.mjs`    | Запуск E2E-тестов MCP/A2A                                                         |
| `run-ecosystem-tests.mjs`           | Тесты экосистемы (интеграция с провайдерами)                                     |
| `test-report-summary.mjs`           | Генерация сводного отчета о покрытии markdown                                         |
| `smoke-electron-packaged.mjs`       | Дымовое тестирование упакованной сборки Electron                                         |
| `native-binary-compat.mjs`          | Проверка совместимости нативных зависимостей (`better-sqlite3`) с Node Electron              |
| `validate-pack-artifact.ts`         | Проверка выходного npm pack                                                   |
| `responses-ws-proxy.mjs`            | Мост WebSocket для Codex Responses API                                   |
| `v1-ws-bridge.mjs`                  | Мост WebSocket для конечной точки `/api/v1/ws`                                 |
| `standalone-server-ws.mjs`          | Запуск автономного сервера WS                                                |
| `system-info.mjs`                   | Вывод информации о системе/среде выполнения для поддержки                                      |
| `healthcheck.mjs`                   | Единовременная проверка состояния (используется Docker HEALTHCHECK)                         |
| `uninstall.mjs`                     | Скрипт очистки при удалении                                                     |

## `docs/` — Публичная документация (44 файла + 4 подкаталога)

### Основные руководства

| Документ                    | Назначение                                                                               |
| --------------------------- | ------------------------------------------------------------------------------------- |
| `ARCHITECTURE.md`           | Высокоуровневая архитектура, карта подсистем, поверхность панели управления                             |
| `CODEBASE_DOCUMENTATION.md` | Справочник для инженеров: директории, модули, соглашения                              |
| `FEATURES.md`               | Матрица функций с акцентом на v3.8                                                   |
| `USER_GUIDE.md`             | Руководство для конечных пользователей (установка, модели, комбинации, CLI, аудио и т.д.)                            |
| `API_REFERENCE.md`          | Справочник по API с моделью аутентификации                                                |
| `openapi.yaml`              | Спецификация OpenAPI 3.0 (121 путь)                                                          |
| `SETUP_GUIDE.md`            | Методы установки (npm, npx, Docker, Electron, Termux, source)                          |
| `ENVIRONMENT.md`            | Все переменные окружения (~219 используются в коде, ~810 строк в `.env.example`)                           |
| `TROUBLESHOOTING.md`        | Распространенные ошибки + известные проблемы v3.8.0                                                   |
| `RELEASE_CHECKLIST.md`      | Полный процесс выпуска (навыки, husky, conventional commits, deploy)                       |
| `COVERAGE_PLAN.md`          | Цели покрытия и текущее состояние                                                      |
| `FREE_TIERS.md`             | Подборка бесплатных провайдеров (48+ бесплатных + 11 OAuth)                                     |
| `CLI-TOOLS.md`              | Внешние CLI интеграции + Внутренний OmniRoute CLI                                    |
| `I18N.md`                   | Архитектура i18n, добавление языка, 30 локалей                                      |
| `UNINSTALL.md`              | Чистая процедура удаления                                                                 |
| `PROVIDER_REFERENCE.md`     | **Автоматически сгенерированный** каталог 177 провайдеров (регенерировать: `npm run gen:provider-reference`) |

### Подробные руководства по подсистемам

| Документ                        | Назначение                                                             |
| -------------------------- | ------------------------------------------------------------------- |
| `MCP-SERVER.md`            | MCP сервер: 37 инструментов, 3 транспорта, ~13 областей, REST конечные точки      |
| `A2A-SERVER.md`            | A2A v0.3: JSON-RPC, 5 навыков, REST помощники, карта агента              |
| `AGENT_PROTOCOLS_GUIDE.md` | Унифицированное руководство: A2A vs ACP vs Cloud Agents                           |
| `CLOUD_AGENT.md`           | Оркестрация Codex Cloud / Devin / Jules                           |
| `SKILLS.md`                | Фреймворк навыков (встроенные + маркетплейс + SkillsSH + песочница)      |
| `MEMORY.md`                | Система памяти (SQLite FTS5 + Qdrant)                                |
| `EVALS.md`                 | Фреймворк оценок (наборы, запуски, рубрики)                              |
| `GUARDRAILS.md`            | Маскировка PII, инъекция промптов, мост для зрения                         |
| `COMPLIANCE.md`            | Журнал аудита, хранение, опция noLog opt-out                                 |
| `WEBHOOKS.md`              | Доставка подписанных HMAC вебхуков                                        |
| `REASONING_REPLAY.md`      | Гибридная память/SQLite кэш для `reasoning_content`                  |
| `AUTHZ_GUIDE.md`           | Конвейер авторизации (`classify` → `policies` → `enforce`)        |
| `RESILIENCE_GUIDE.md`      | Circuit breaker + cooldown + model lockout                          |
| `STEALTH_GUIDE.md`         | TLS отпечатки (JA3/JA4), Claude Code CCH, MITM сертификат            |
| `AUTO-COMBO.md`            | Движок Auto Combo (9-факторное оценивание, 4 пакета режимов, виртуальная фабрика) |

### Сжатие

| Документ                             | Назначение                                  |
| ------------------------------- | ---------------------------------------- |
| `COMPRESSION_GUIDE.md`          | Обзор режимов сжатия + дорожная карта  |
| `COMPRESSION_ENGINES.md`        | Движки Caveman + RTK, контракт реестра |
| `COMPRESSION_RULES_FORMAT.md`   | JSON схема набора правил Caveman            |
| `COMPRESSION_LANGUAGE_PACKS.md` | Инвентарь наборов правил для каждого языка         |
| `RTK_COMPRESSION.md`            | RTK декларативный конвейер (49 фильтров)            |

### Развертывание

| Документ                          | Назначение                                                           |
| ---------------------------- | ----------------------------------------------------------------- |
| `DOCKER_GUIDE.md`            | Docker сборка, профили (base/cli/host/cliproxyapi), Redis sidecar |
| `VM_DEPLOYMENT_GUIDE.md`     | Общая развертывание на VM/VPS (Ubuntu/Debian + nginx + systemd)       |
| `FLY_IO_DEPLOYMENT_GUIDE.md` | Развертывание Fly.io (в настоящее время только на китайском языке)                        |
| `TERMUX_GUIDE.md`            | Бесшумная работа на Android через Termux                                       |
| `PWA_GUIDE.md`             | Установка Progressive Web App + service worker                      |
| `ELECTRON_GUIDE.md`          | Сборка, подпись и распространение Desktop приложения                             |
| `TUNNELS_GUIDE.md`           | Cloudflared + ngrok + Tailscale Funnel                            |
| `PROXY_GUIDE.md`             | 4-уровневой исходящий прокси + 1proxy маркетплейс                       |

### Подкаталоги

| Подкаталог                    | Назначение                                                                               |
| ------------------------- | ------------------------------------------------------------------------------------- |
| `docs/archive/`           | Архивные/исторические документы (например, `RFC-AUTO-ASSESSMENT-DRAFT.md` — заменен на EVALS) |
| `docs/i18n/`              | Локализованные переводы документов (~40 локалей)                                              |
| `docs/screenshots/`       | Изображения для руководств                                                               |
| `docs/superpowers/plans/` | Планы реализации (сгенерированы навыком `superpowers:writing-plans`)                 |

---

## `tests/` — Наборы тестов

| Подкаталог                 | Тип                                    | Запускатор                                  |
| ---------------------- | --------------------------------------- | --------------------------------------- |
| `tests/unit/`          | Юнит-тесты (~500 файлов, самый быстрый)        | Собственный тестовый раннер Node                 |
| `tests/integration/`   | Интеграционные тесты модулей + БД     | Собственный тестовый раннер Node (конкуренция 1) |
| `tests/e2e/`           | E2E UI + рабочих процессов                       | Playwright                              |
| `tests/protocols-e2e/` | E2E MCP + A2A реальных клиентов               | Пользовательские клиенты протоколов                 |
| `tests/ecosystem/`     | Интеграция провайдеров (касается сети) | Собственный тестовый раннер Node                 |

---

## `public/` — Статические ресурсы

| Путь                | Назначение                                                          |
| ------------------- | ---------------------------------------------------------------- |
| `public/` (корень)    | Файвиконы, robots.txt, манифест, сервисный работник, маркетинговые изображения |
| `public/providers/` | Логотипы провайдеров PNG/SVG (используются в дашборде)                        |

---

## `config/` — Статические конфигурации

Шаблоны конфигураций и примеры файлов, которые используются мастером настройки.

---

## `.github/` — Интеграция с GitHub

| Путь                               | Назначение                                                        |
| ---------------------------------- | -------------------------------------------------------------- |
| `.github/workflows/`               | Рабочие процессы GitHub Actions CI/CD (линтинг, тестирование, покрытие, релиз) |
| `.github/ISSUE_TEMPLATE/`          | Шаблоны для багов и фич                                    |
| `.github/PULL_REQUEST_TEMPLATE.md` | Шаблон для пулл-реквестов                                                    |
| `.github/dependabot.yml`           | Конфигурация обновления зависимостей                                       |

---

## `.husky/` — Git-хуки

| Файл         | Назначение                                                           |
| ------------ | ----------------------------------------------------------------- |
| `pre-commit` | Запускает `lint-staged + check-docs-sync + check:any-budget:t11`       |
| `pre-push`   | Временно отключен (закомментирован). Запустите `npm run test:unit` вручную. |
| `_/`         | Внутренние файлы Husky                                                   |

---

## `.claude/` — Слэш-команды Claude Code

| Файл                                                              | Назначение                                            |
| ----------------------------------------------------------------- | -------------------------------------------------- |
| `commands/version-bump-cc.md`                                     | `/version-bump-cc` — обновление версии + авто-логи изменений |
| `commands/generate-release-cc.md`                                 | `/generate-release-cc` — полный рабочий процесс релиза     |
| `commands/deploy-vps-{local,akamai,both}-cc.md`                   | Развертывание на VPS                                      |
| `commands/capture-release-evidences-cc.md`                        | Запись новых функций в браузере как WebP                |
| `commands/review-{prs,discussions}-cc.md`                         | Трайс GitHub PRs/дискуссий                      |
| `commands/{issue-triage,resolve-issues,implement-features}-cc.md` | Рабочие процессы с задачами                                    |
| `settings.local.json`                                             | Настройки Claude Code для каждого проекта                   |

---

## `.agents/` — Общие рабочие процессы агентов (Codex / Cursor / и т.д.)

| Путь                     | Назначение                                                 |
| ------------------------ | ------------------------------------------------------- |
| `workflows/*-ag.md`      | 11 определений рабочих процессов (зеркало `.claude/commands/`) |
| `skills/<name>/SKILL.md` | 9 определений навыков с примечаниями выполнения Codex          |

> **Примечание:** В настоящее время рабочие процессы и команды идентичны по байтам. Если `.agents/` предназначен для работы с другим средой выполнения агентов (Codex), варианты должны существенно отличаться.

---

## `_ideia/`, `_mono_repo/`, `_references/`, `_tasks/` — Вне дерева

Эти каталоги с префиксом подчеркивания содержат невыпускаемый контент:

- **`_ideia/`** — заметки по проектированию (категории defer / notfit / viable)
- **`_mono_repo/`** — исторические подпроекты (omnirouteCloud, omnirouteSite, vscode-extension)
- **`_references/`** — только для чтения клоны связанных проектов с открытым исходным кодом (LiteLLM, 9router, ClawRouter, CLIProxyAPI, modelrelay, new-api и т.д.) для кросс-ссылок во время разработки
- **`_tasks/`** — файлы отслеживания задач по релизам (неформальные)

Не включаются в вывод `npm pack`. Смотрите `.npmignore`.

---

## Сгенерированные / Игнорируемые Git

| Путь                   | Назначение                       |
| ---------------------- | ----------------------------- |
| `node_modules/`        | зависимости npm              |
| `.next/`               | вывод сборки Next.js          |
| `coverage/`            | отчеты покрытия c8           |
| `logs/`                | журналы выполнения           |
| `package/`             | промежуточное хранение npm pack |
| `.playwright-mcp/`     | артефакты тестов Playwright MCP |
| `.issues/`             | локальный кэш проблем         |
| `tsconfig.tsbuildinfo` | кэш инкрементальной сборки TS |

---

## Советы по навигации

- **Новый участник?** Прочитайте `CONTRIBUTING.md` → `CLAUDE.md` → `docs/architecture/ARCHITECTURE.md` → `docs/architecture/CODEBASE_DOCUMENTATION.md`.
- **Добавление провайдера?** Следуйте `docs/architecture/ARCHITECTURE.md § Adding a New Provider` + проверьте `docs/reference/PROVIDER_REFERENCE.md`.
- **Добавление маршрута?** `docs/architecture/ARCHITECTURE.md § Adding a New API Route` + `src/shared/validation/schemas.ts`.
- **Добавление инструмента MCP?** `docs/frameworks/MCP-SERVER.md § Adding a Tool`.
- **Добавление навыка A2A?** `docs/frameworks/A2A-SERVER.md § Adding a New Skill`.
- **Запуск локально?** `docs/guides/SETUP_GUIDE.md`.
- **Развертывание?** `docs/guides/DOCKER_GUIDE.md` / `docs/ops/VM_DEPLOYMENT_GUIDE.md` / `docs/ops/FLY_IO_DEPLOYMENT_GUIDE.md`.
- **Релиз?** `docs/ops/RELEASE_CHECKLIST.md` (и `/generate-release-cc` навык Claude Code).
