# CODEBASE_DOCUMENTATION (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/CODEBASE_DOCUMENTATION.md) · 🇸🇦 [ar](../../../ar/docs/architecture/CODEBASE_DOCUMENTATION.md) · 🇦🇿 [az](../../../az/docs/architecture/CODEBASE_DOCUMENTATION.md) · 🇧🇬 [bg](../../../bg/docs/architecture/CODEBASE_DOCUMENTATION.md) · 🇧🇩 [bn](../../../bn/docs/architecture/CODEBASE_DOCUMENTATION.md) · 🇨🇿 [cs](../../../cs/docs/architecture/CODEBASE_DOCUMENTATION.md) · 🇩🇰 [da](../../../da/docs/architecture/CODEBASE_DOCUMENTATION.md) · 🇩🇪 [de](../../../de/docs/architecture/CODEBASE_DOCUMENTATION.md) · 🇪🇸 [es](../../../es/docs/architecture/CODEBASE_DOCUMENTATION.md) · 🇮🇷 [fa](../../../fa/docs/architecture/CODEBASE_DOCUMENTATION.md) · 🇫🇮 [fi](../../../fi/docs/architecture/CODEBASE_DOCUMENTATION.md) · 🇫🇷 [fr](../../../fr/docs/architecture/CODEBASE_DOCUMENTATION.md) · 🇮🇳 [gu](../../../gu/docs/architecture/CODEBASE_DOCUMENTATION.md) · 🇮🇱 [he](../../../he/docs/architecture/CODEBASE_DOCUMENTATION.md) · 🇮🇳 [hi](../../../hi/docs/architecture/CODEBASE_DOCUMENTATION.md) · 🇭🇺 [hu](../../../hu/docs/architecture/CODEBASE_DOCUMENTATION.md) · 🇮🇩 [id](../../../id/docs/architecture/CODEBASE_DOCUMENTATION.md) · 🇮🇩 [in](../../../in/docs/architecture/CODEBASE_DOCUMENTATION.md) · 🇮🇹 [it](../../../it/docs/architecture/CODEBASE_DOCUMENTATION.md) · 🇯🇵 [ja](../../../ja/docs/architecture/CODEBASE_DOCUMENTATION.md) · 🇰🇷 [ko](../../../ko/docs/architecture/CODEBASE_DOCUMENTATION.md) · 🇮🇳 [mr](../../../mr/docs/architecture/CODEBASE_DOCUMENTATION.md) · 🇲🇾 [ms](../../../ms/docs/architecture/CODEBASE_DOCUMENTATION.md) · 🇳🇱 [nl](../../../nl/docs/architecture/CODEBASE_DOCUMENTATION.md) · 🇳🇴 [no](../../../no/docs/architecture/CODEBASE_DOCUMENTATION.md) · 🇵🇭 [phi](../../../phi/docs/architecture/CODEBASE_DOCUMENTATION.md) · 🇵🇱 [pl](../../../pl/docs/architecture/CODEBASE_DOCUMENTATION.md) · 🇵🇹 [pt](../../../pt/docs/architecture/CODEBASE_DOCUMENTATION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/CODEBASE_DOCUMENTATION.md) · 🇷🇴 [ro](../../../ro/docs/architecture/CODEBASE_DOCUMENTATION.md) · 🇸🇰 [sk](../../../sk/docs/architecture/CODEBASE_DOCUMENTATION.md) · 🇸🇪 [sv](../../../sv/docs/architecture/CODEBASE_DOCUMENTATION.md) · 🇰🇪 [sw](../../../sw/docs/architecture/CODEBASE_DOCUMENTATION.md) · 🇮🇳 [ta](../../../ta/docs/architecture/CODEBASE_DOCUMENTATION.md) · 🇮🇳 [te](../../../te/docs/architecture/CODEBASE_DOCUMENTATION.md) · 🇹🇭 [th](../../../th/docs/architecture/CODEBASE_DOCUMENTATION.md) · 🇹🇷 [tr](../../../tr/docs/architecture/CODEBASE_DOCUMENTATION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/CODEBASE_DOCUMENTATION.md) · 🇵🇰 [ur](../../../ur/docs/architecture/CODEBASE_DOCUMENTATION.md) · 🇻🇳 [vi](../../../vi/docs/architecture/CODEBASE_DOCUMENTATION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/CODEBASE_DOCUMENTATION.md)

---

---

title: "Документация исходного кода OmniRoute"
version: 3.8.2
lastUpdated: 2026-05-13
---

# Документация исходного кода OmniRoute

> **Версия:** v3.8.0
> **Последнее обновление:** 2026-05-13
> **Аудитория:** Инженеры, работающие над OmniRoute или создающие интеграции поверх него.
>
> Для высокоуровневых архитектурных диаграмм и объяснения каждого подсистемы прочитайте
> [ARCHITECTURE.md](./ARCHITECTURE.md). Для углубленного изучения отдельных подсистем
> (Auto Combo, MCP сервер, A2A сервер, Skills, Memory, Cloud Agents, Resilience,
> Compression и т.д.) см. их отдельные файлы в этом каталоге `docs/`.

Этот файл описывает **то, что существует в репозитории сегодня**, чтобы новый инженер
мог ориентироваться в дереве, понимать слои выполнения и знать, где добавлять код
без изобретения новых модулей.

---

## 1. Технологический стек

| Задача | Выбор |
| ------------- | ------------------------------------------------------------------------------------------------------------------------ | --- | ------------- | --- | ------------------------------------ |
| Веб-фреймворк | **Next.js 16** (App Router, standalone output, no global middleware) |
| Язык | **TypeScript 5.9+** — target `ES2022`, `module: esnext`, `moduleResolution: bundler`, `strict: false` |
| Runtime | **Node.js** `>=20.20.2 <21                                                                                               |     | >=22.22.2 <23 |     | >=24.0.0 <27`(enforced via`engines`) |
| База данных | **SQLite** via `better-sqlite3` (singleton, WAL journaling) |
| Десктоп | **Electron 41** + `electron-builder` 26.10 (separate workspace at `electron/`) |
| Тесты | **Node native test runner** (unit/integration), **Vitest** (MCP, autoCombo, cache), **Playwright** (e2e + protocols-e2e) |
| Сборка | Next.js standalone via `scripts/build/build-next-isolated.mjs` |
| Lint/format | ESLint flat config + Prettier (`lint-staged` via Husky pre-commit) |
| Система модулей | ESM везде (`"type": "module"`) |
| Рабочие пространства | npm workspace — `open-sse` единственное подрабочее пространство |

Псевдонимы путей (`tsconfig.json`):

- `@/*` → `src/*`
- `@omniroute/open-sse` → `open-sse/index.ts`
- `@omniroute/open-sse/*` → `open-sse/*`

Порт по умолчанию: **`20128`** (API и панель управления используют один и тот же процесс). Директория данных — переменная окружения `DATA_DIR`, по умолчанию `~/.omniroute/`.

---

## 2. Структура репозитория

```
OmniRoute/
├── src/                  Приложение Next.js (App Router, libs, domain, server, shared)
├── open-sse/             Рабочее пространство потокового движка (@omniroute/open-sse)
├── electron/             Оболочка для десктопа (Electron 41 main + preload)
├── bin/                  Точки входа CLI (omniroute, reset-password)
├── tests/                Юнит, интеграционные, e2e, protocols-e2e, translator, security, fixtures
├── scripts/              Скрипты сборки, синхронизации, проверки, миграции и вспомогательные скрипты выполнения
├── docs/                 Публичная документация (этот каталог)
├── public/               Статические ресурсы, манифест PWA, сервисный работник
├── config/               Примеры конфигурации времени выполнения
├── images/               Маркетинговые/скриншотные ресурсы
├── _ideia/, _references/, _mono_repo/, _tasks/   Внутренние черновики / планирование (не поставляются)
├── CLAUDE.md             Правила репозитория для Claude Code
├── AGENTS.md             Более глубокая архитектурная справка для агентов
├── package.json          v3.8.0, корневое рабочее пространство
└── tsconfig.json         Псевдонимы путей + основные параметры компилятора
```

---

## 3. `src/` — Приложение Next.js

```
src/
├── app/                  Страницы и API-маршруты App Router
├── lib/                  Основные библиотеки (DB, auth, OAuth, skills, memory, …)
├── domain/               Чистый доменный слой (policy, fallback, cost, lockout, …)
├── server/               Серверные модули (authz, cors, auth)
├── shared/               Типы, константы, валидация, контракты, утилиты (безопасные для границ)
├── mitm/                 Помощники для MITM-прокси для интеграции CLI
├── models/               Метаданные локальных моделей / псевдонимы
├── sse/                  Устаревшие обработчики SSE, которые все еще находятся под src/ (не open-sse/)
├── store/                Хранилища состояния на стороне клиента
├── middleware/           Утилиты промежуточного ПО на уровне маршрута (не глобальное промежуточное ПО Next.js)
├── scripts/              Встроенные скрипты, которые могут быть импортированы кодом приложения
├── types/                Окружающие и общие типы TS
├── i18n/                 Локальные пакеты
├── instrumentation.ts    Хук инструментации Next.js
├── instrumentation-node.ts
├── server-init.ts        Загрузка процесса (env, DB, jobs, sync)
└── proxy.ts              Вспомогатель для загрузки прокси верхнего уровня
```

### 3.1 `src/app/` — App Router

App Router предоставляет как пользовательский интерфейс панели управления, так и общедоступный/управляющий HTTP API.
**Нет глобального промежуточного ПО** — перехват выполняется по маршруту.

Верхнеуровневые сегменты под `src/app/`:

| Путь                                                                          | Назначение                                                                        |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `api/`                                                                        | Все маршруты HTTP API (см. раздел ниже)                                           |
| `a2a/`                                                                        | Конечная точка A2A JSON-RPC 2.0 (`POST /a2a`)                                     |
| `.well-known/agent.json/`                                                     | Документ обнаружения карты агента A2A                                             |
| `(dashboard)/`                                                                | Пользовательский интерфейс панели управления (группа маршрутов, без URL-префикса) |
| `auth/`, `login/`, `forgot-password/`, `callback/`                            | Потоки аутентификации                                                             |
| `landing/`                                                                    | Маркетинговая/промо-страница                                                      |
| `docs/`                                                                       | Встроенный просмотрщик API-документации                                           |
| `status/`, `maintenance/`, `offline/`                                         | Операционные страницы                                                             |
| `privacy/`, `terms/`                                                          | Юридические страницы                                                              |
| `400/`, `401/`, `403/`, `408/`, `429/`, `500/`, `502/`, `503/`                | Статические страницы ошибок                                                       |
| `error.tsx`, `global-error.tsx`, `not-found.tsx`, `forbidden/`, `loading.tsx` | Границы ошибок/загрузки фреймворка                                                |
| `layout.tsx`, `page.tsx`, `globals.css`, `manifest.ts`                        | Корневая оболочка                                                                 |

#### 3.1.1 `src/app/(dashboard)/dashboard/` — Страницы пользовательского интерфейса

`agents`, `analytics`, `api-manager`, `audit`, `auto-combo`, `batch`, `cache`,
`changelog`, `cli-tools`, `cloud-agents`, `combos`, `compression`, `context`,
`costs`, `endpoint`, `health`, `limits`, `logs`, `memory`, `onboarding`,
`playground`, `providers`, `search-tools`, `settings`, `skills`, `system`,
`translator`, `usage`, `webhooks`, а также корневой `page.tsx`, `HomePageClient.tsx`,
`BootstrapBanner.tsx`.

#### 3.1.2 `src/app/api/` — Верхнеуровневые группы API

```
src/app/api/
├── a2a/{status, tasks}
├── acp/
├── admin/
├── analytics/
├── assess/
├── auth/
├── batches/
├── cache/
├── cli-tools/
├── cloud/{codex-responses-ws}
├── combos/
├── compliance/
├── compression/
├── context/
├── db/, db-backups/
├── evals/
├── fallback/
├── files/
├── health/
├── init/
├── internal/{concurrency}
├── keys/
├── logs/
├── mcp/{audit, sse, status, stream, tools}
├── memory/{health, [id]/, route.ts}
├── model-combo-mappings/
├── models/
├── monitoring/
├── oauth/
├── openapi/
├── policies/
├── pricing/
├── provider-metrics/, provider-models/, provider-nodes/
├── providers/
├── rate-limit/, rate-limits/
├── resilience/
├── restart/, shutdown/
├── search/
├── sessions/
├── settings/
├── skills/{executions, [id], install, marketplace, route.ts, skillssh}
├── storage/
├── sync/, synced-available-models/
├── system/
├── tags/
├── telemetry/
├── token-health/
├── translator/
├── tunnels/
├── upstream-proxy/
├── usage/
├── v1/         Совместимый с OpenAI публичный API
├── v1beta/     Совместимый с Gemini
├── version-manager/
└── webhooks/
```

#### 3.1.3 `src/app/api/v1/` — Совместимый с OpenAI публичный API

```
v1/
├── accounts/[id]/                       поиск аккаунта
├── agents/tasks/[id]/, agents/tasks/    конечные точки задач в стиле A2A
├── api/                                 внутренние помощники API, выставленные под v1/api
├── audio/{speech, transcriptions}/      TTS + STT
├── batches/[id]/{cancel}, batches/      OpenAI Batches API
├── chat/completions/                    Chat Completions (основная конечная точка)
├── chatgpt-web/                         Совместимость с ChatGPT-Web
├── completions/                         Устаревшие текстовые завершения
├── embeddings/                          Вложения
├── files/[id]/, files/                  API файлов
├── _helpers/                            Общие помощники маршрутов (без публичного URL)
├── images/{edits, generations}/         Генерация и редактирование изображений
├── issues/                              Помощники конечных точек для триажа
├── management/{proxies}/                Маршруты, ограниченные управлением, внутри v1
├── messages/{count_tokens}/             Совместимость с сообщениями в стиле Anthropic
├── models/                              Список моделей (`route.ts`, `catalog.ts`)
├── moderations/                         Модерация
├── music/                               Генерация музыки
├── providers/[provider]/                Операции по провайдерам
├── quotas/{check}                       Проверка квот
├── registered-keys/                     Администрирование зарегистрированных ключей
├── rerank/                              Переранжирование
├── responses/[...path]/                 OpenAI Responses API (catch-all)
├── search/                              Веб-поиск
├── videos/                              Генерация видео
├── ws/                                  Мост WebSocket
└── route.ts                             Обработчик индекса
```

Каждый файл маршрута следует одному и тому же шаблону:

```
Маршрут → CORS preflight → валидация тела Zod → необязательная аутентификация
      → применение политики ключа API → делегирование обработчика (open-sse)
```

`v1beta/` — это поверхность совместимости в стиле Gemini (тонкая оболочка, которая переводится в тот же конвейер `open-sse/handlers/`).

### 3.2 `src/lib/` — Основные библиотеки

Всегда импортируйте данные, синхронизацию, OAuth, навыки, память и т. д. через эти модули. В таблице сгруппированы фактические каталоги и заметные файлы верхнего уровня.

| Модуль            | Назначение                                                                                                                                                                                                                                                             |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `a2a/`            | Сервер протокола A2A: `taskManager.ts`, `streaming.ts`, `taskExecution.ts`, `routingLogger.ts`, `skills/` (5 навыков: анализ стоимости, отчет о состоянии, обнаружение провайдера, управление квотами, умное маршрутизация)                                            |
| `acp/`            | Agent-Control-Protocol: `index.ts`, `manager.ts`, `registry.ts`                                                                                                                                                                                                        |
| `api/`            | Внутренние помощники API: `requireManagementAuth.ts`, `requireCliToolsAuth.ts`, `errorResponse.ts`                                                                                                                                                                     |
| `auth/`           | `managementPassword.ts` (сброс пароля / хеширование)                                                                                                                                                                                                                   |
| `batches/`        | Сервис OpenAI Batches API (`service.ts`)                                                                                                                                                                                                                               |
| `catalog/`        | Синхронизация каталога OpenRouter (`openrouterCatalog.ts`)                                                                                                                                                                                                             |
| `cloudAgent/`     | Реестр облачных агентов: `api.ts`, `baseAgent.ts`, `db.ts`, `index.ts`, `registry.ts`, `types.ts`, `agents/{codex, devin, jules}.ts`                                                                                                                                   |
| `combos/`         | Помощники разрешения комбо                                                                                                                                                                                                                                             |
| `compliance/`     | Аудит + аудит провайдера: `index.ts`, `providerAudit.ts`                                                                                                                                                                                                               |
| `config/`         | Клей для конфигурации времени выполнения                                                                                                                                                                                                                               |
| `db/`             | Модули SQLite домена (см. §3.2.1)                                                                                                                                                                                                                                      |
| `display/`        | Помощники UI/отображения, используемые ответами API                                                                                                                                                                                                                    |
| `embeddings/`     | Реестр сервисов вложений                                                                                                                                                                                                                                               |
| `env/`            | Загрузка и интроспекция env                                                                                                                                                                                                                                            |
| `evals/`          | Время выполнения оценки                                                                                                                                                                                                                                                |
| `guardrails/`     | `piiMasker.ts`, `promptInjection.ts`, `visionBridge.ts`, `visionBridgeHelpers.ts`, `registry.ts`, `base.ts`                                                                                                                                                            |
| `jobs/`           | Фоновые задания (`autoUpdate.ts`, …)                                                                                                                                                                                                                                   |
| `memory/`         | Постоянная память: `store.ts`, `cache.ts`, `retrieval.ts`, `summarization.ts`, `extraction.ts`, `injection.ts`, `qdrant.ts`, `settings.ts`, `verify.ts`, `schemas.ts`, `types.ts`                                                                                      |
| `monitoring/`     | `observability.ts`                                                                                                                                                                                                                                                     |
| `oauth/`          | OAuth провайдеры (14): `antigravity`, `claude`, `cline`, `codex`, `cursor`, `gemini`, `github`, `gitlab-duo`, `kilocode`, `kimi-coding`, `kiro`, `qoder`, `qwen`, `windsurf` плюс `services/`, `utils/{pkce, server, banner, codexAuthFile, ui}`, `constants/oauth.ts` |
| `plugins/`        | Загрузчик плагинов (`index.ts`)                                                                                                                                                                                                                                        |
| `promptCache/`    | `prefixAnalyzer.ts`, `index.ts`                                                                                                                                                                                                                                        |
| `providerModels/` | Жизненный цикл управляемых моделей: `modelDiscovery.ts`, `managedModelImport.ts`, `managedAvailableModels.ts`, `cursorAgent.ts`                                                                                                                                        |
| `providers/`      | Помощники провайдеров: `catalog.ts`, `validation.ts`, `imageValidation.ts`, `claudeExtraUsage.ts`, `codexConnectionDefaults.ts`, `codexFastTier.ts`, `webCookieAuth.ts`, `managedAvailableModels.ts`, `requestDefaults.ts`                                             |
| `resilience/`     | `settings.ts` — настройки для автоматического переключения, охлаждения, блокировки                                                                                                                                                                                     |
| `runtime/`        | Обнаружение функций времени выполнения                                                                                                                                                                                                                                 |
| `search/`         | `executeWebSearch.ts`                                                                                                                                                                                                                                                  |
| `skills/`         | Фреймворк навыков: `registry.ts`, `executor.ts`, `interception.ts`, `injection.ts`, `sandbox.ts`, `custom.ts`, `hybrid.ts`, `builtins.ts`, `a2a.ts`, `providerSettings.ts`, `schemas.ts`, `skillssh.ts`, `types.ts`, а также `builtin/browser.ts`                      |
| `spend/`          | `batchWriter.ts` (буфер write-behind)                                                                                                                                                                                                                                  |
| `sync/`           | `bundle.ts`, `tokens.ts` (Cloud Sync)                                                                                                                                                                                                                                  |
| `system/`         | Помощники на системном уровне                                                                                                                                                                                                                                          |
| `translator/`     | Верхнеуровневый клей переводчика (делегирует в `open-sse/translator/`)                                                                                                                                                                                                 |
| `usage/`          | Учет использования: `costCalculator.ts`, `tokenAccounting.ts`, `usageHistory.ts`, `aggregateHistory.ts`, `usageStats.ts`, `callLogs.ts`, `callLogArtifacts.ts`, `fetcher.ts`, `providerLimits.ts`, `migrations.ts`                                                     |
| `versionManager/` | Автообновление + манифест версии                                                                                                                                                                                                                                       |
| `ws/`             | Мост WebSocket                                                                                                                                                                                                                                                         |
| `zed-oauth/`      | OAuth-поток редактора Zed                                                                                                                                                                                                                                              |

Файлы верхнего уровня в `src/lib/`:

- `localDb.ts` — только слой реэкспорта. **Никогда** не добавляйте логику здесь.
- `proxyHealth.ts`, `proxyLogger.ts`, `tokenHealthCheck.ts`, `localHealthCheck.ts`
- `oneproxyRotator.ts`, `oneproxySync.ts`
- `apiBridgeServer.ts`, `cacheLayer.ts`, `semanticCache.ts`, `settingsCache.ts`
- `cloudSync.ts`, `initCloudSync.ts`
- `cloudflaredTunnel.ts`, `ngrokTunnel.ts`, `tailscaleTunnel.ts`
- `consoleInterceptor.ts`, `container.ts`, `gracefulShutdown.ts`, `idempotencyLayer.ts`
- `ipUtils.ts`, `logEnv.ts`, `logPayloads.ts`, `logRotation.ts`
- `modelAliasSeed.ts`, `modelCapabilities.ts`, `modelMetadataRegistry.ts`, `modelsDevSync.ts`
- `piiSanitizer.ts`, `pricingSync.ts`
- `apiKeyExposure.ts`, `cacheControlSettings.ts`, `dataPaths.ts`, `toolPolicy.ts`
- `translatorEvents.ts`, `usageDb.ts`, `usageAnalytics.ts`, `webhookDispatcher.ts`

#### 3.2.1 `src/lib/db/`

Одиночная база данных SQLite (`getDbInstance()` в `core.ts`, журналирование WAL).
**Никогда не пишите SQL напрямую в маршрутах или обработчиках** — используйте эти модули.

![Обзор схемы базы данных (выбранные основные таблицы)](../diagrams/exported/db-schema-overview.svg)

> Источник: [diagrams/db-schema-overview.mmd](../diagrams/db-schema-overview.mmd)

Модули домена (каждый управляет одной или несколькими таблицами): `apiKeys.ts`, `backup.ts`,
`batches.ts`, `cleanup.ts`, `cliToolState.ts`, `combos.ts`,
`commandCodeAuth.ts`, `compression.ts`, `compressionAnalytics.ts`,
`compressionCacheStats.ts`, `compressionCombos.ts`, `compressionScheduler.ts`,
`contextHandoffs.ts`, `core.ts`, `creditBalance.ts`, `databaseSettings.ts`,
`detailedLogs.ts`, `domainState.ts`, `encryption.ts`, `evals.ts`, `files.ts`,
`healthCheck.ts`, `jsonMigration.ts`, `migrationRunner.ts`,
`modelComboMappings.ts`, `models.ts`, `oneproxy.ts`, `prompts.ts`,
`providers.ts`, `providerLimits.ts`, `proxies.ts`, `quotaSnapshots.ts`,
`readCache.ts`, `reasoningCache.ts`, `registeredKeys.ts`, `secrets.ts`,
`sessionAccountAffinity.ts`, `settings.ts`, `stateReset.ts`, `stats.ts`,
`syncTokens.ts`, `tierConfig.ts`, `upstreamProxy.ts`, `versionManager.ts`,
`webhooks.ts`.

`migrations/` содержит 55 версионных файлов `.sql` (идемпотентных, транзакционных) и выполняется `migrationRunner.ts` при загрузке.

Таблицы, созданные в рамках миграций (всего 52):

`a`, `account_key_limits`, `api_keys`, `batches`, `call_logs`,
`combo_adaptation_state`, `combos`, `command_code_auth_sessions`,
`compression_analytics`, `compression_cache_stats`,
`compression_combo_assignments`, `compression_combos`, `context_handoffs`,
`daily_usage_summary`, `db_meta`, `domain_budgets`, `domain_circuit_breakers`,
`domain_cost_history`, `domain_fallback_chains`, `domain_lockout_state`,
`eval_cases`, `eval_runs`, `eval_suites`, `files`, `hourly_usage_summary`,
`key_value`, `mcp_tool_audit`, `memories`, `model_combo_mappings`,
`provider_connections`, `provider_key_limits`, `provider_nodes`,
`proxy_assignments`, `proxy_logs`, `proxy_registry`, `quota_snapshots`,
`reasoning_cache`, `registered_keys`, `request_detail_logs`,
`routing_decisions`, `semantic_cache`, `session_account_affinity`,
`skill_executions`, `skills`, `sync_tokens`, `tier_assignments`,
`tier_config`, `upstream_proxy_config`, `usage_history`, `version_manager`,
`webhooks` (а также виртуальные таблицы FTS5 для поиска памяти).

### 3.3 `src/domain/` — Доменный слой

Чистая бизнес-логика, без ввода-вывода. Импортируется маршрутами и обработчиками.

| Файл                                       | Назначение                                    |
| ------------------------------------------ | --------------------------------------------- |
| `policyEngine.ts`                          | Верхнеуровневый резолвер политик              |
| `fallbackPolicy.ts`                        | Дерево решений резервного копирования         |
| `costRules.ts`                             | Правила расчета стоимости                     |
| `lockoutPolicy.ts`                         | Решения о блокировке моделей                  |
| `tagRouter.ts`                             | Маршрутизация по тегам                        |
| `comboResolver.ts`                         | Разрешение комбо из запроса → целевого списка |
| `connectionModelRules.ts`                  | Фильтры моделей для каждого подключения       |
| `modelAvailability.ts`                     | Проверка доступности модели                   |
| `degradation.ts`                           | Переходы в режим деградации                   |
| `providerExpiration.ts`                    | Обнаружение истекших аккаунтов/ключей         |
| `quotaCache.ts`                            | Кэшированные решения о квотах                 |
| `responses.ts`, `omnirouteResponseMeta.ts` | Помощники формы ответа                        |
| `configAudit.ts`                           | Аудит изменений конфигурации                  |
| `assessment/`                              | Оценка модели (по RFC, частично реализовано)  |
| `types.ts`                                 | Общие типы домена                             |

### 3.4 `src/server/` — Только для сервера

Не может быть импортировано из компонентов клиента.

```
server/
├── auth/loginGuard.ts
├── authz/
│   ├── classify.ts        Классифицирует маршруты как публичные или для управления
│   ├── assertAuth.ts      Помощник утверждения
│   ├── context.ts         Контекст авторизации для каждого запроса
│   ├── headers.ts
│   ├── pipeline.ts        Конвейер авторизации
│   ├── policies/          Конкретные политики
│   └── types.ts
└── cors/origins.ts        CORS allowlist источников
```

### 3.5 `src/shared/` — Безопасные для обмена

Разделено на сфокусированные подкаталоги:

- `constants/` — `providers.ts` (каталог провайдеров с валидацией Zod), `models.ts`,
  `modelSpecs.ts`, `modelCompat.ts`, `pricing.ts`, `cliTools.ts`,
  `cliCompatProviders.ts`, `routingStrategies.ts`, `comboConfigMode.ts`,
  `headers.ts`, `upstreamHeaders.ts` (denylist), `mcpScopes.ts`,
  `errorCodes.ts`, `publicApiRoutes.ts`, `batch.ts`, `batchEndpoints.ts`,
  `bodySize.ts`, `colors.ts`, `appConfig.ts`, `config.ts`,
  `sidebarVisibility.ts`, `visionBridgeDefaults.ts`.
- `validation/` — `schemas.ts` (~80 схем Zod), `compressionConfigSchemas.ts`,
  `oneproxySchemas.ts`, `providerSchema.ts`, `settingsSchemas.ts`, `helpers.ts`.
- `contracts/` — публичные API-контракты, поставляемые в npm.
- `types/` — общие типы TS.
- `utils/` — `circuitBreaker.ts`, `apiAuth.ts`, `apiKey.ts`, `apiKeyPolicy.ts`,
  `apiResponse.ts`, `api.ts`, `classify429.ts`, `cliCompat.ts`, `clipboard.ts`,
  `cloud.ts`, `cn.ts`, `cors.ts`, `costEstimator.ts`, `featureFlags.ts`,
  `fetchTimeout.ts`, `formatting.ts`, `inputSanitizer.ts`, `logger.ts`,
  `machine.ts`, `machineId.ts`, `maskEmail.ts`, `modelCatalogSearch.ts`,
  `nodeRuntimeSupport.ts`, `parseApiKeys.ts`, `providerHints.ts`,
  `providerModelAliases.ts`, `rateLimiter.ts`, `releaseNotes.ts`,
  `a11yAudit.ts`, а также хуки/компоненты панели управления под `services/`, `network/`,
  `middleware/`, `schemas/`, `hooks/`, `components/`.

---

```

## 4. `open-sse/` — Рабочая область движка потоковой передачи

Отдельный npm workspace, публикуемый как `@omniroute/open-sse`. Отвечает за обработку запросов, исполнителей, переводчиков, сервисов, трансформер и сервер MCP.

```

open-sse/
├── index.ts Публичные экспорты
├── package.json Манифест рабочей области
├── tsconfig.json
├── types.d.ts
├── config/ Реестры провайдеров, профили заголовков, идентичность, …
├── handlers/ Обработчики запросов (чат, эмбеддинги, аудио, изображение, …)
├── executors/ 38 исполнителей, специфичных для провайдеров
├── translator/ Преобразование форматов (OpenAI ↔ Claude ↔ Gemini ↔ Cursor ↔ Kiro)
├── transformer/ Трансформер API ответов ↔ потоковое преобразование чата
├── services/ 80+ модулей сервисов (комбо, резервный вариант, квоты, идентичность, …)
├── utils/ Помощники для потоковой передачи, TLS клиент, AWS SigV4, прокси fetch, …
└── mcp-server/ Сервер MCP (3 транспорта, 13 областей, 42 инструмента)

```

### 4.1 `open-sse/handlers/`

| Обработчик               | Назначение                                                                 |
| ----------------------- | ------------------------------------------------------------------------ |
| `chatCore.ts`           | Основной чат-конвейер (кеш, ограничение скорости, комбо-маршрутизация, диспетчеризация исполнителя) |
| `responsesHandler.ts`   | Точка входа API Ответов OpenAI                                         |
| `embeddings.ts`         | Эмбеддинги                                                               |
| `imageGeneration.ts`    | Генерация изображений                                                         |
| `audioSpeech.ts`        | Текст в речь                                                           |
| `audioTranscription.ts` | Речь в текст                                                           |
| `videoGeneration.ts`    | Генерация видео                                                         |
| `musicGeneration.ts`    | Генерация музыки                                                         |
| `rerank.ts`             | Переранжирование                                                                |
| `moderations.ts`        | Модерация                                                               |
| `search.ts`             | Веб-поиск                                                               |
| `sseParser.ts`          | Парсер событий SSE                                                         |
| `usageExtractor.ts`     | Извлечение количества токенов из потоков вышестоящих уровней                                |
| `responseSanitizer.ts`  | Удаление специфичного для провайдера шума                                            |
| `responseTranslator.ts` | Стыковка между ответом провайдера и слоем переводчика                      |

### 4.2 `open-sse/executors/`

38 исполнителей провайдеров, каждый из которых расширяет `BaseExecutor` (`base.ts`):

`antigravity`, `azure-openai`, `blackbox-web`, `chatgpt-web`, `cliproxyapi`,
`cloudflare-ai`, `codex`, `commandCode`, `cursor`, `default`, `devin-cli`,
`gemini-cli`, `github`, `gitlab`, `glm`, `grok-web`, `kie`, `kiro`,
`muse-spark-web`, `nlpcloud`, `opencode`, `perplexity-web`, `petals`,
`pollinations`, `puter`, `qoder`, `vertex`, `windsurf`, а также `claudeIdentity.ts`
(общий помощник идентичности) и `index.ts` (реестр).

> Примечание: провайдеры, не перечисленные здесь, обслуживаются `default.ts` с помощью универсального исполнителя, совместимого с OpenAI. Полный каталог провайдеров (177+ записей) находится в
> `src/shared/constants/providers.ts`.

### 4.3 `open-sse/translator/`

Перевод в виде хаба и спицы (OpenAI является хабом).

- **9 переводчиков запросов** (`translator/request/`):
  `antigravity-to-openai`, `claude-to-gemini`, `claude-to-openai`,
  `gemini-to-openai`, `openai-responses`, `openai-to-claude`,
  `openai-to-cursor`, `openai-to-gemini`, `openai-to-kiro`.
- **8 переводчиков ответов** (`translator/response/`):
  `claude-to-openai`, `cursor-to-openai`, `gemini-to-claude`, `gemini-to-openai`,
  `kiro-to-openai`, `openai-responses`, `openai-to-antigravity`,
  `openai-to-claude`.
- **9 помощников** (`translator/helpers/`):
  `claudeHelper`, `geminiHelper`, `geminiToolsSanitizer`, `maxTokensHelper`,
  `openaiHelper`, `responsesApiHelper`, `schemaCoercion`, `toolCallHelper`, а также
  тесты помощников.
- **Помощники изображений** (`translator/image/sizeMapper.ts`).
- Верхний уровень: `bootstrap.ts`, `formats.ts`, `registry.ts`, `index.ts`.

### 4.4 `open-sse/transformer/`

- `responsesTransformer.ts` — конвертер на основе `TransformStream` API Ответов ↔ Чат
  Комплектирования (используется маршрутом `responses/` catch-all).

### 4.5 `open-sse/services/`

Основные моменты (полный список под `open-sse/services/`):

| Забота                   | Файлы                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Комбо-маршрутизация             | `combo.ts` (14 стратегий), `comboConfig.ts`, `comboMetrics.ts`, `comboManifestMetrics.ts`, `comboAgentMiddleware.ts`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Автоматический движок комбо         | `autoCombo/` — `engine.ts`, `scoring.ts`, `taskFitness.ts`, `virtualFactory.ts`, `modePacks.ts`, `autoPrefix.ts`, `persistence.ts`, `providerDiversity.ts`, `providerRegistryAccessor.ts`, `routerStrategy.ts`, `selfHealing.ts`, `index.ts`                                                                                                                                                                                                                                                                                                                                                                             |
| Устойчивость                | `accountFallback.ts` (задержка + блокировка), `errorClassifier.ts`, `emergencyFallback.ts`, `rateLimitManager.ts`, `rateLimitSemaphore.ts`, `accountSemaphore.ts`, `accountSelector.ts`                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Квоты                    | `quotaMonitor.ts`, `quotaPreflight.ts`, `bailianQuotaFetcher.ts`, `codexQuotaFetcher.ts`, `deepseekQuotaFetcher.ts`, `crofUsageFetcher.ts`, `antigravityCredits.ts`                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Формирование, специфичное для провайдера | `claudeCodeCCH.ts`, `claudeCodeCompatible.ts`, `claudeCodeConstraints.ts`, `claudeCodeExtraRemap.ts`, `claudeCodeFingerprint.ts`, `claudeCodeObfuscation.ts`, `claudeCodeToolRemapper.ts`, `cloudCodeHeaders.ts`, `cloudCodeThinking.ts`, `geminiCliHeaders.ts`, `geminiThoughtSignatureStore.ts`, `gigachatAuth.ts`, `antigravityHeaders.ts`, `antigravityHeaderScrub.ts`, `antigravityIdentity.ts`, `antigravityObfuscation.ts`, `antigravityVersion.ts`, `antigravity429Engine.ts`, `chatgptTlsClient.ts`, `chatgptImageCache.ts`, `cursorSessionManager.ts`, `qoderCli.ts`, `qwenThinking.ts`, `modelscopePolicy.ts` |
| Кэширование                   | `reasoningCache.ts`, `searchCache.ts`, `signatureCache.ts`, `requestDedup.ts`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Интеллектуальное маршрутизация      | `intentClassifier.ts`, `taskAwareRouter.ts`, `backgroundTaskDetector.ts`, `volumeDetector.ts`, `wildcardRouter.ts`, `workflowFSM.ts`, `specificityDetector.ts`, `specificityRules.ts`, `specificityTypes.ts`                                                                                                                                                                                                                                                                                                                                                                                                             |
| Обработка моделей            | `modelCapabilities.ts`, `modelDeprecation.ts`, `modelFamilyFallback.ts`, `modelStrip.ts`, `model.ts`, `provider.ts`, `providerRequestDefaults.ts`, `providerCostData.ts`, `payloadRules.ts`                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Сжатие               | `compression/` — полное соединение движка сжатия                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Токен + сессия           | `tokenRefresh.ts`, `sessionManager.ts`, `apiKeyRotator.ts`, `contextManager.ts`, `contextHandoff.ts`, `systemPrompt.ts`, `roleNormalizer.ts`, `responsesInputSanitizer.ts`, `toolSchemaSanitizer.ts`, `toolLimitDetector.ts`, `thinkingBudget.ts`                                                                                                                                                                                                                                                                                                                                                                        |
| Уровень / манифест           | `tierResolver.ts`, `tierConfig.ts`, `tierDefaults.json`, `tierTypes.ts`, `manifestAdapter.ts`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| IP / сеть              | `ipFilter.ts`, `webSearchFallback.ts`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Партии                   | `batchProcessor.ts`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Использование                     | `usage.ts`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

### 4.6 `open-sse/mcp-server/`

- **31 зарегистрированный инструмент** подключен в `server.ts` (12 в области под `schemas/tools.ts`,
  5 инструментов сжатия, 3 инструмента памяти, 4 инструмента навыков, а также продвинутые инструменты, добавленные
  через `advancedTools.ts`).
- **3 транспорта**: stdio, HTTP Streamable, SSE.
- **13 областей** объявлены в `src/shared/constants/mcpScopes.ts`.
- Таблица аудита: `mcp_tool_audit` (заполняется `audit.ts`).
- Файлы: `server.ts`, `index.ts`, `httpTransport.ts`, `audit.ts`, `scopeEnforcement.ts`,
  `runtimeHeartbeat.ts`, `descriptionCompressor.ts`, `schemas/{tools, a2a, audit, index}.ts`,
  `tools/{advancedTools, compressionTools, memoryTools, skillTools}.ts`,
  а также тесты под `__tests__/`.
- Смотрите [MCP-SERVER.md](../frameworks/MCP-SERVER.md) для полного каталога инструментов.

### 4.7 `open-sse/config/`

Реестры провайдеров (`providerRegistry.ts`, `providerModels.ts`,
`providerHeaderProfiles.ts`), реестры моделей по форматам (`audioRegistry.ts`,
`embeddingRegistry.ts`, `imageRegistry.ts`, `moderationRegistry.ts`,
`musicRegistry.ts`, `rerankRegistry.ts`, `searchRegistry.ts`, `videoRegistry.ts`),
помощники идентичности (`codexIdentity.ts`, `codexInstructions.ts`,
`anthropicHeaders.ts`, `antigravityUpstream.ts`, `antigravityModelAliases.ts`,
`cliFingerprints.ts`, `toolCloaking.ts`, `defaultThinkingSignature.ts`),
помощники учетных данных (`credentialLoader.ts`, `codexClient.ts`), и адаптеры облаков
(`azureAi.ts`, `bedrock.ts`, `datarobot.ts`, `glmProvider.ts`,
`maritalk.ts`, `oci.ts`, `petals.ts`, `runway.ts`, `sap.ts`, `watsonx.ts`,
`ollamaModels.ts`, `errorConfig.ts`, `constants.ts`, `registryUtils.ts`).

### 4.8 `open-sse/utils/`

Потоковые примитивы и помощники провайдеров: `stream.ts`, `streamHandler.ts`,
`streamHelpers.ts`, `streamPayloadCollector.ts`, `streamReadiness.ts`,
`sseHeartbeat.ts`, `proxyFetch.ts`, `proxyDispatcher.ts`, `tlsClient.ts`,
`networkProxy.ts`, `awsSigV4.ts`, `cacheControlPolicy.ts`,
`cursorChecksum.ts`, `cursorAgentProtobuf.ts`, `cursorVersionDetector.ts`,
`comfyuiClient.ts`, `kieTask.ts`, `bypassHandler.ts`, `aiSdkCompat.ts`,
`thinkTagParser.ts`, `urlSanitize.ts`, `usageTracking.ts`, `requestLogger.ts`,
`progressTracker.ts`, `cors.ts`, `error.ts`, `logger.ts`, `sleep.ts`,
`ollamaTransform.ts`.

---
```

## 5. `electron/` — Оболочка для настольных приложений

```
electron/
├── main.js                  Основной процесс Electron
├── preload.js               Мост загрузки (включена contextIsolation)
├── types.d.ts
├── package.json             Конфигурация electron-builder, версия 3.8.0
├── README.md
├── assets/                  Ресурсы сборки (иконки, entitlements, …)
├── node_modules/            Отдельные node_modules (better-sqlite3, electron-updater)
└── dist-electron/           Выходные данные сборки (не коммитится)
```

Пять скриптов npm в корне рабочего пространства: `electron:dev`, `electron:build`,
`electron:build:{win,mac,linux}`, `electron:smoke:packaged`. Автообновление осуществляется через
`electron-updater`, который указывает на ленту релизов GitHub.

---

## 6. `bin/` — Интерфейс командной строки

```
bin/
├── omniroute.mjs           Основная точка входа CLI (Node ESM)
├── reset-password.mjs      Сброс пароля управления из CLI
├── mcp-server.mjs          Запуск сервера MCP (stdio)
├── nodeRuntimeSupport.mjs  Проверка версии Node
└── cli/
    ├── program.mjs         Построитель программы Commander
    ├── runtime.mjs         Помощник withRuntime (сервер в первую очередь/резервная база данных)
    ├── output.mjs          Форматировщики вывода (json/jsonl/table/csv)
    ├── i18n.mjs            Помощник t() с локалями
    ├── api.mjs             Помощник API fetch
    ├── data-dir.mjs
    ├── encryption.mjs
    ├── sqlite.mjs
    └── commands/
        ├── registry.mjs    Регистрация команд
        ├── setup.mjs
        ├── doctor.mjs
        ├── providers.mjs
        └── ...             (один файл на команду/группу)
```

Два исполняемых файла представлены в `package.json` → `bin`:

- `omniroute` → `bin/omniroute.mjs`
- `omniroute-reset-password` → `bin/reset-password.mjs`

---

## 7. `tests/`

| Директория                                                                     | Тип                                                                                                       |
| ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| `tests/unit/`                                                                  | Юнит-тесты через нативный тестовый раннер Node (506 файлов, плюс поддиректории `api/`, `auth/`, `authz/`) |
| `tests/integration/`                                                           | Кросс-модульные + тесты состояния базы данных                                                             |
| `tests/e2e/`                                                                   | UI-тесты Playwright                                                                                       |
| `tests/protocols-e2e/`                                                         | E2E протоколов MCP/A2A                                                                                    |
| `tests/translator/`                                                            | Тесты, специфичные для переводчика                                                                        |
| `tests/security/`                                                              | Регрессии безопасности                                                                                    |
| `tests/load/`                                                                  | Тесты нагрузки / стресс-тесты                                                                             |
| `tests/golden-set/`                                                            | Ссылки на выходные данные для регрессий переводчика                                                       |
| `tests/helpers/`, `tests/fixtures/`, `tests/manual/`, `tests/scratch_test.mjs` | Поддержка                                                                                                 |

Общие команды:

| Команда                                                  | Что она запускает                                                      |
| -------------------------------------------------------- | ---------------------------------------------------------------------- |
| `npm run test:unit`                                      | Все `tests/unit/*.test.ts` через тестовый раннер Node (конкуренция 10) |
| `npm run test:vitest`                                    | Набор Vitest (MCP, autoCombo, cache)                                   |
| `npm run test:e2e`                                       | Набор UI-тестов Playwright                                             |
| `npm run test:protocols:e2e`                             | E2E протоколов MCP + A2A                                               |
| `npm run test:coverage`                                  | Покрытие (≥60% строк/операторов/функций/ветвей)                        |
| `node --import tsx/esm --test tests/unit/<file>.test.ts` | Запуск одного файла                                                    |

## 8. `scripts/`

Организовано в 6 подпапок по назначению.

- **`scripts/build/`** — `build-next-isolated.mjs`, `prepublish.ts`,
  `prepare-electron-standalone.mjs`, `pack-artifact-policy.ts`,
  `validate-pack-artifact.ts`, `postinstall.mjs`, `postinstallSupport.mjs`,
  `uninstall.mjs`, `bootstrap-env.mjs`, `runtime-env.mjs`,
  `native-binary-compat.mjs`.
- **`scripts/dev/`** — `run-next.mjs`, `run-next-playwright.mjs`,
  `run-standalone.mjs`, `standalone-server-ws.mjs`, `responses-ws-proxy.mjs`,
  `v1-ws-bridge.mjs`, `smoke-electron-packaged.mjs`,
  `run-playwright-tests.mjs`, `run-ecosystem-tests.mjs`,
  `run-protocol-clients-tests.mjs`, `sync-env.mjs`, `healthcheck.mjs`,
  `system-info.mjs`.
- **`scripts/check/`** — `check-cycles.mjs`, `check-docs-sync.mjs`,
  `check-docs-counts-sync.mjs`, `check-env-doc-sync.mjs`,
  `check-deprecated-versions.mjs`, `check-route-validation.mjs`,
  `check-t11-any-budget.mjs`, `check-pr-test-policy.mjs`,
  `check-supported-node-runtime.ts`, `test-report-summary.mjs`.
- **`scripts/docs/`** — `generate-docs-index.mjs`, `gen-provider-reference.ts`.
- **`scripts/i18n/`** — `generate-multilang.mjs`, `run-visual-qa.mjs`,
  `generate-qa-checklist.mjs`, `apply-priority-overrides.mjs`,
  `validate_translation.py`, `check_translations.py`, `i18n_autotranslate.py`,
  `untranslatable-keys.json`.
- **`scripts/ad-hoc/`** — `cursor-tap.cjs`, `sync-cursor-models.mjs`,
  `migrate-env.mjs`, `dbsetup.js`.

---

## 9. Конвейер запросов (кратко)

![Конвейер запросов (/v1/chat/completions)](../diagrams/exported/request-pipeline.svg)

> Источник: [diagrams/request-pipeline.mmd](../diagrams/request-pipeline.mmd)

```
Запрос клиента
  → /v1/chat/completions (route.ts)
     Проверка CORS preflight
     Валидация Zod (chatCompletionsSchema в shared/validation/schemas.ts)
     Аутентификация (extractApiKey + isValidApiKey OR requireManagementAuth)
     Движок политик (src/server/authz/pipeline.ts)
     Защитные механизмы (маскировка PII, инъекция промптов, мост для vision)
  → handleChatCore() (open-sse/handlers/chatCore.ts)
     Проверка кэша (семантический + чтение кэша)
     Ограничение скорости (rateLimitManager, accountSemaphore)
     Комбо маршрутизация (если модель разрешается как комбо)
       comboResolver → цикл по целям → handleSingleModel()
     translateRequest()  (open-sse/translator/request/*)
     getExecutor(providerId).execute()  (open-sse/executors/*)
       fetch upstream → повтор/задержка через accountFallback
     translateResponse() (open-sse/translator/response/*)
     SSE поток ИЛИ JSON ответ
     Если API ответов: TransformStream через open-sse/transformer/responsesTransformer.ts
  → Контроль соответствия (src/lib/compliance/)
  → Ответ клиенту
```

### Механизмы отказоустойчивости (три механизма)

| Механизм                 | Область действия                | Где                                                                                                          |
| ------------------------ | ------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Переключатель провайдера | Весь провайдер                  | `src/shared/utils/circuitBreaker.ts`, сохранено в `domain_circuit_breakers`                                  |
| Охлаждение соединения    | Один аккаунт/ключ               | `markAccountUnavailable()` в `src/sse/services/auth.ts`; используется `accountFallback.checkFallbackError()` |
| Блокировка модели        | Провайдер + соединение + модель | `open-sse/services/accountFallback.ts`, сохранено в `domain_lockout_state`                                   |

См. [RESILIENCE_GUIDE.md](./RESILIENCE_GUIDE.md) и соответствующий раздел в
[CLAUDE.md](../../CLAUDE.md).

## 10. Как внести вклад

### Добавление нового провайдера

1. Зарегистрируйтесь в `src/shared/constants/providers.ts` (Zod-валидируется при загрузке).
2. Добавьте исполнителя в `open-sse/executors/` если требуется специальная логика
   (расширьте `BaseExecutor`).
3. Добавьте переводчик в `open-sse/translator/` если он не поддерживает формат OpenAI.
4. Если OAuth-базированный, добавьте конфигурацию под `src/lib/oauth/providers/` и
   `src/lib/oauth/services/`.
5. Зарегистрируйте модели в `open-sse/config/providerRegistry.ts` (или в реестре конкретного формата под `open-sse/config/`).
6. Напишите тесты под `tests/unit/`.

### Добавление нового API маршрута

1. Создайте `src/app/api/your-route/route.ts`.
2. Следуйте шаблону: CORS → Zod валидация тела → аутентификация → делегирование обработчика.
3. Если новая форма запроса: добавьте Zod схему в `src/shared/validation/schemas.ts`.
4. Если только для управления: добавьте путь в `src/shared/constants/publicApiRoutes.ts`
   (черный список для публичного API).
5. Добавьте тесты под `tests/unit/`.
6. Обновите `docs/reference/API_REFERENCE.md` и `docs/reference/openapi.yaml`.

### Добавление нового модуля БД

1. Создайте `src/lib/db/yourModule.ts` и импортируйте `getDbInstance()` из `./core.ts`.
2. Экспортируйте функции CRUD для вашего домена.
3. Если новые таблицы: добавьте миграцию под `src/lib/db/migrations/`, пронумерованные
   последовательно, идемпотентные, транзакционные.
4. Реэкспортируйте из `src/lib/localDb.ts` (только реэкспорт — **без логики**).
5. Добавьте тесты под `tests/unit/`.

### Добавление нового инструмента MCP

1. Добавьте определение инструмента под `open-sse/mcp-server/tools/` (или расширьте
   `open-sse/mcp-server/schemas/tools.ts`).
2. Назначьте соответствующие области в `src/shared/constants/mcpScopes.ts`.
3. Зарегистрируйте инструмент в `open-sse/mcp-server/server.ts`.
4. Добавьте тесты под `open-sse/mcp-server/__tests__/`.
5. Обновите [MCP-SERVER.md](../frameworks/MCP-SERVER.md).

### Добавление нового навыка A2A

См. [A2A-SERVER.md § Добавление нового навыка](../frameworks/A2A-SERVER.md). Навыки находятся в
`src/lib/a2a/skills/` и регистрируются через менеджер задач A2A.

---

## 11. Конвенции

- **Стиль кода**: 2 пробела отступа, двойные кавычки, 100 символов в ширину, точки с запятой,
  `es5` завершающие запятые — проверяется Prettier через `lint-staged`.
- **Импорты**: внешние → внутренние (`@/`, `@omniroute/open-sse`) → относительные.
- **Именование**: файлы `camelCase` или `kebab-case`, компоненты `PascalCase`,
  константы `UPPER_SNAKE`.
- **ESLint**: `no-eval`, `no-implied-eval`, `no-new-func` = `error` везде;
  `no-explicit-any` = `warn` в `open-sse/` и `tests/`, error в остальных местах.
- **TypeScript**: `strict: false` (устаревший подход). Предпочитайте явные типы
  вместо вывода для границ между модулями.
- **База данных**: никогда не пишите SQL напрямую в маршрутах или обработчиках — всегда
  используйте `src/lib/db/` модули. Никогда не добавляйте логику в `src/lib/localDb.ts`.
- **Ошибки**: try/catch с конкретными типами ошибок, логируйте с контекстом pino. Никогда
  не подавляйте ошибки в SSE потоках; используйте сигналы прерывания для очистки.
- **Безопасность**: никогда не используйте `eval()` / `new Function()` / неявную оценку. Валидируйте
  все входные данные с помощью Zod. Шифруйте учетные данные в состоянии покоя (AES-256-GCM). Держите
  `src/shared/constants/upstreamHeaders.ts` черный список синхронизированным с уровнем
  очистки/валидации.
- **Коммиты**: Conventional Commits — `feat(scope): subject`. Разрешенные области:
  `db`, `sse`, `oauth`, `dashboard`, `api`, `cli`, `docker`, `ci`, `mcp`,
  `a2a`, `memory`, `skills`.
- **Ветки**: префиксы `feat/`, `fix/`, `refactor/`, `docs/`, `test/`,
  `chore/`. Никогда не коммитьте напрямую в `main`.
- **Husky**: pre-commit запускает `lint-staged` + `check:docs-sync` +
  `check:any-budget:t11`; pre-push запускает `npm run test:unit`.

## 12. Жесткие правила (из CLAUDE.md)

1. Никогда не фиксируйте секреты или учетные данные.
2. Никогда не добавляйте логику в `src/lib/localDb.ts`.
3. Никогда не используйте `eval()` / `new Function()` / подразумеваемый eval.
4. Никогда не фиксируйте напрямую в `main`.
5. Никогда не пишите SQL-запросы в маршрутах — всегда используйте модули `src/lib/db/`.
6. Никогда не подавляйте ошибки в SSE-потоках.
7. Всегда валидируйте входные данные с помощью схем Zod.
8. Всегда включайте тесты при изменении рабочего кода.
9. Покрытие должно оставаться ≥ 60% (операторы, строки, функции, ветви).

---

## 13. Смотрите также

- [ARCHITECTURE.md](./ARCHITECTURE.md) — высокоуровневая архитектура и обязанности модулей.
- [API_REFERENCE.md](../reference/API_REFERENCE.md) — справочник по публичному и управлению API.
- [FEATURES.md](../guides/FEATURES.md) — матрица функций и версии.
- [RESILIENCE_GUIDE.md](./RESILIENCE_GUIDE.md) — подробное описание работы автоматического переключателя, охлаждения и блокировки.
- [AUTO-COMBO.md](../routing/AUTO-COMBO.md) — оценка и стратегии Auto Combo.
- [MCP-SERVER.md](../frameworks/MCP-SERVER.md) — полный каталог инструментов MCP и транспортов.
- [A2A-SERVER.md](../frameworks/A2A-SERVER.md) — навыки и обнаружение протокола A2A.
- [COMPRESSION_GUIDE.md](../compression/COMPRESSION_GUIDE.md) — сжатие RTK + Caveman.
- [CLI-TOOLS.md](../reference/CLI-TOOLS.md) — интеграции CLI.
- [ELECTRON_GUIDE.md](../guides/ELECTRON_GUIDE.md) (если есть), [DOCKER_GUIDE.md](../guides/DOCKER_GUIDE.md), [FLY_IO_DEPLOYMENT_GUIDE.md](../ops/FLY_IO_DEPLOYMENT_GUIDE.md), [VM_DEPLOYMENT_GUIDE.md](../ops/VM_DEPLOYMENT_GUIDE.md), [TERMUX_GUIDE.md](../guides/TERMUX_GUIDE.md), [PWA_GUIDE.md](../guides/PWA_GUIDE.md) — цели развертывания.
- [TROUBLESHOOTING.md](../guides/TROUBLESHOOTING.md) — распространенные операционные проблемы.
- [CONTRIBUTING.md](../../CONTRIBUTING.md) — рабочий процесс участников.
- [CLAUDE.md](../../CLAUDE.md) — правила репозитория для Claude Code (источник истины для многих соглашений выше).
- [AGENTS.md](../../AGENTS.md) — более глубокая архитектурная справка, используемая агентами.
