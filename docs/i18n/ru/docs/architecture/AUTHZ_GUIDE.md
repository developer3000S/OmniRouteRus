# AUTHZ_GUIDE (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/AUTHZ_GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/architecture/AUTHZ_GUIDE.md) · 🇦🇿 [az](../../../az/docs/architecture/AUTHZ_GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/architecture/AUTHZ_GUIDE.md) · 🇧🇩 [bn](../../../bn/docs/architecture/AUTHZ_GUIDE.md) · 🇨🇿 [cs](../../../cs/docs/architecture/AUTHZ_GUIDE.md) · 🇩🇰 [da](../../../da/docs/architecture/AUTHZ_GUIDE.md) · 🇩🇪 [de](../../../de/docs/architecture/AUTHZ_GUIDE.md) · 🇪🇸 [es](../../../es/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇷 [fa](../../../fa/docs/architecture/AUTHZ_GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/architecture/AUTHZ_GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [gu](../../../gu/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇱 [he](../../../he/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [hi](../../../hi/docs/architecture/AUTHZ_GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇩 [id](../../../id/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇩 [in](../../../in/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇹 [it](../../../it/docs/architecture/AUTHZ_GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/architecture/AUTHZ_GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [mr](../../../mr/docs/architecture/AUTHZ_GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/architecture/AUTHZ_GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/architecture/AUTHZ_GUIDE.md) · 🇳🇴 [no](../../../no/docs/architecture/AUTHZ_GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/architecture/AUTHZ_GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/architecture/AUTHZ_GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/architecture/AUTHZ_GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/AUTHZ_GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/architecture/AUTHZ_GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/architecture/AUTHZ_GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/architecture/AUTHZ_GUIDE.md) · 🇰🇪 [sw](../../../sw/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [ta](../../../ta/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [te](../../../te/docs/architecture/AUTHZ_GUIDE.md) · 🇹🇭 [th](../../../th/docs/architecture/AUTHZ_GUIDE.md) · 🇹🇷 [tr](../../../tr/docs/architecture/AUTHZ_GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/AUTHZ_GUIDE.md) · 🇵🇰 [ur](../../../ur/docs/architecture/AUTHZ_GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/architecture/AUTHZ_GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/AUTHZ_GUIDE.md)

---

---
title: "Руководство по авторизации"
version: 3.8.2
lastUpdated: 2026-05-13
---

# Руководство по авторизации

> **Источник истины:** `src/server/authz/`, `src/shared/constants/publicApiRoutes.ts`, `src/lib/api/requireManagementAuth.ts`, `src/shared/utils/apiAuth.ts`
> **Последнее обновление:** 2026-05-13 — v3.8.0

В OmniRoute используется конвейер авторизации, учитывающий класс маршрута и ограничивающий каждый API-запрос. Классификация **детерминирована** и работает по принципу **fail-closed** — всё, что не удаётся классифицировать, попадает в `MANAGEMENT` и требует сессии или токена уровня management. Эта страница объясняет модель для инженеров, сопровождающих существующие маршруты или проектирующих новые эндпоинты.

![Конвейер AuthZ (3 класса маршрутов + вычисление политик)](../diagrams/exported/authz-pipeline.svg)

> Исходник: [diagrams/authz-pipeline.mmd](../diagrams/authz-pipeline.mmd)

## Два режима аутентификации

### 1. API key (Bearer)

Используется для клиентских API, совместимых с OpenAI/Anthropic/Gemini, и для некоторых management-маршрутов, если у ключа есть scope `manage`.

```
Authorization: Bearer <api-key>
```

Валидируется функциями `isValidApiKey()` / `extractApiKey()` в `src/sse/services/auth.ts` и реэкспортируется через `src/shared/utils/apiAuth.ts`. Валидатор также принимает env-переменные `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` в качестве постоянных сквозных ключей (issue #1350).

### 2. Сессия dashboard (cookie auth_token)

Для страниц dashboard и административных операций.

```
Cookie: auth_token=<JWT signed with JWT_SECRET>
```

Проверяется функцией `isDashboardSessionAuthenticated()` в `src/shared/utils/apiAuth.ts`. Конвейер автоматически обновляет JWT, если до конца его 30-дневного срока действия осталось меньше 7 дней.

Некоторые management-маршруты принимают **любой** из режимов: cookie либо `Bearer <key>`, если у API key есть scope `manage` (или `admin`). Именно это обеспечивает рабочий процесс «configurable via API calls», добавленный в v3.8.

## Классы маршрутов

В `src/server/authz/types.ts` определены три класса; любой маршрут, который нельзя детерминированно классифицировать, fallback-ит на `MANAGEMENT`.

| Class        | Описание                                                                                                               | Требуемая аутентификация                        |
| ------------ | ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `PUBLIC`     | Явно безопасные маршруты — login, logout, status, init, health, onboarding bootstrap.                                   | Нет                                             |
| `CLIENT_API` | Эндпоинты обслуживания моделей — `/api/v1/*`, плюс алиасы `/v1/*`, `/chat/completions`, `/responses`, `/models`, `/codex/*`. | Bearer key (если только `REQUIRE_API_KEY != "true"`) |
| `MANAGEMENT` | Страницы dashboard, настройки, провайдеры, ключи, административные и диагностические эндпоинты.                         | Сессия dashboard ИЛИ Bearer со scope `manage`   |

## Конвейер

```
Входящий запрос → src/middleware.ts
  → runAuthzPipeline() в src/server/authz/pipeline.ts
    1. Удаление доверенных внутренних заголовков (x-omniroute-auth-*, x-omniroute-route-class)
    2. Генерация идентификатора запроса, классификация маршрута через classifyRoute()
    3. Если pathname == "/" → перенаправление /dashboard
    4. Если draining (грациозное завершение работы) и /api/* → 503
    5. Если не-GET /api/* → проверка размера тела через checkBodySize() guard
    6. Если OPTIONS → CORS preflight 204
    7. Если options.enforce == false → пропуск с заголовками route-class
    8. Иначе: POLICIES[routeClass].evaluate(ctx)
       - allow  → добавление x-omniroute-auth-{kind,id,label,scopes} → NextResponse.next()
       - reject → JSON ошибка с correlation_id (страницы dashboard → 302 /login)
```

Доверенные внутренние заголовки (определены в `src/server/authz/headers.ts`) **удаляются из входящих запросов** перед классификацией — клиенты не могут предзаполнить `x-omniroute-auth-*`, чтобы выдавать себя за субъекта.

### Контракты политик

Для каждого класса маршрута существует политика в `src/server/authz/policies/`:

- **`publicPolicy`** (`policies/public.ts`) — всегда возвращает `allow({ kind: "anonymous", id: "anonymous" })`.
- **`clientApiPolicy`** (`policies/clientApi.ts`) — извлекает Bearer, валидирует через `validateApiKey()`. Проваливается на anonymous, если `REQUIRE_API_KEY != "true"`. Разрешает GET по dashboard-сессии для `/api/v1/models` (используется каталогом моделей в dashboard).
- **`managementPolicy`** (`policies/management.ts`) — принимает сессию dashboard, внутренние запросы синхронизации моделей (сопоставляются с `/api/providers/[name]/(sync-models|models)`) либо полностью пропускается, если `isAuthRequired()` возвращает false. Возвращает 403 (`AUTH_001`), когда Bearer-токен присутствует, но некорректен, иначе 401. Также применяет уровни route guard (LOCAL_ONLY / ALWAYS_PROTECTED) до любой ветки аутентификации — см. [Уровни route guard](../security/ROUTE_GUARD_TIERS.md). Пути LOCAL_ONLY из `LOCAL_ONLY_MANAGE_SCOPE_BYPASS_PREFIXES` (сейчас: `/api/mcp/`) могут быть доступны не с loopback-адреса, если Bearer-ключ несёт scope `manage`; все остальные LOCAL_ONLY-пути остаются строго loopback независимо от scope.

Успешная политика возвращает `AuthSubject` с `kind ∈ { client_api_key, dashboard_session, management_key, anonymous }`. Нижестоящие обработчики могут получить его через `assertAuth(request, "CLIENT_API")` в `src/server/authz/assertAuth.ts` вместо того, чтобы заново выполнять логику аутентификации.

## Список публичных маршрутов

`src/shared/constants/publicApiRoutes.ts` — явный allowlist:

```ts
PUBLIC_API_ROUTE_PREFIXES = [
  "/api/auth/login",
  "/api/auth/logout",
  "/api/auth/status",
  "/api/init",
  "/api/v1/", // обрабатывается как CLIENT_API в classify, а не как "no-auth public"
  "/api/cloud/",
  "/api/sync/bundle",
  "/api/oauth/",
];

PUBLIC_READONLY_API_ROUTE_PREFIXES = ["/api/monitoring/health", "/api/settings/require-login"];

PUBLIC_READONLY_METHODS = new Set(["GET", "HEAD", "OPTIONS"]);
```

Read-only префиксы публичны **только** для безопасных методов. Примечание: `classifyRoute()` исключает `/api/v1/*` из PUBLIC fall-through — это всегда `CLIENT_API`, поэтому политика Bearer-ключа продолжает применяться.

## Добавление нового маршрута

### Паттерн 1 — Публичный клиентский API-эндпоинт (Bearer-auth)

Маршруты внутри `/api/v1/` классифицируются как `CLIENT_API` автоматически. middleware применяет проверку Bearer; обработчикам маршрута не нужно делать это повторно, но они могут прочитать subject, если это полезно.

```typescript
// src/app/api/v1/your-route/route.ts
import { NextRequest, NextResponse } from "next/server";
import { assertAuth } from "@/server/authz/assertAuth";

export async function POST(req: NextRequest) {
  const subject = assertAuth(req, "CLIENT_API");
  // subject.kind === "client_api_key" | "anonymous" | "dashboard_session"
  // ... handler logic
}
```

### Паттерн 2 — Management-эндпоинт (сессия или Bearer + manage)

Используйте `requireManagementAuth()` из `src/lib/api/requireManagementAuth.ts`:

```typescript
import { requireManagementAuth } from "@/lib/api/requireManagementAuth";

export async function POST(request: Request) {
  const rejection = await requireManagementAuth(request);
  if (rejection) return rejection;
  // ... handler logic
}
```

`requireManagementAuth()` возвращает `null` при успехе либо JSON-ошибку `Response`:

- 401 `AUTH_001` "Authentication required" — учётные данные вообще отсутствуют
- 403 — некорректный Bearer **либо** Bearer присутствует, но у ключа нет scope `manage` / `admin`

`hasManageScope(scopes)` возвращает true для `"manage"` или `"admin"`.

### Паттерн 3 — Добавление в публичный allowlist

Добавьте префикс в `PUBLIC_API_ROUTE_PREFIXES` (или `PUBLIC_READONLY_API_ROUTE_PREFIXES` для GET-only). Обновите unit-тесты в `tests/unit/public-api-routes.test.ts` и `tests/unit/authz/classify.test.ts`.

## Scopes

API keys несут массив `scopes` (хранится как JSON в `api_keys.scopes`, см. `src/lib/db/apiKeys.ts`).

### Management scope

- `manage` / `admin` — даёт ключу доступ к management API-эндпоинтам при отправке в виде Bearer.

### MCP scopes (`src/shared/constants/mcpScopes.ts`)

Каждый инструмент MCP требует определённые scopes через `MCP_TOOL_SCOPES`. Полный список (`MCP_SCOPE_LIST`):

```
read:health, read:combos, write:combos, read:quota, read:usage,
read:models, execute:completions, execute:search, write:budget,
write:resilience, pricing:write, read:cache, write:cache,
read:compression, write:compression, read:proxies
```

Пресет-наборы (`MCP_SCOPE_PRESETS`): `readonly`, `full`, `monitor`, `agent`. Используйте `hasRequiredScopes(granted, toolName)` и `getMissingScopes()` для enforcement внутри MCP-обработчиков.

## Переключатель «Auth Required»

`isAuthRequired()` в `src/shared/utils/apiAuth.ts` определяет, применяется ли **вообще какая-либо** аутентификация для запроса:

- `settings.requireLogin === false` → аутентификация глобально отключена.
- Пароль не настроен **и** нет env-переменной `INITIAL_PASSWORD` → bootstrap-режим разрешает мастер онбординга и loopback-запросы, но запросы из открытой сети всё равно требуют учётных данных.
- Любая ошибка БД → fail-closed (secure-by-default).

## Breaking Change — v3.8.0

Эндпоинты `/api/v1/agents/tasks/*` и `/api/resilience/model-cooldowns` **теперь требуют management-аутентификацию** (коммит `588a0333`). Клиенты, ранее отправлявшие обычный API key без scope `manage`, получают `403`. Миграция: либо выдайте ключу scope `manage` в API Manager dashboard, либо используйте залогиненную сессию dashboard.

## Изменение поведения — v3.8.2

`/api/mcp/*` (удаленный MCP-сервер) по-прежнему является LOCAL_ONLY по умолчанию, но теперь принимает не-loopback-запросы, если заголовок `Authorization: Bearer <api-key>` содержит scope `manage`. Это исключение явно настраивается для каждого пути через `LOCAL_ONLY_MANAGE_SCOPE_BYPASS_PREFIXES` в `src/server/authz/routeGuard.ts`; родственный LOCAL_ONLY-префикс `/api/cli-tools/runtime/*` намеренно НЕ обходится, так как он может порождать произвольные subprocesses. Анонимные запросы к `/api/mcp/*` не с loopback продолжают возвращать `403 LOCAL_ONLY` — значение по умолчанию для любого нового LOCAL_ONLY-пути остается строго loopback. См. [Уровни route guard](../security/ROUTE_GUARD_TIERS.md#manage-scope-carve-out).

## Тестирование

- Unit-тесты: `tests/unit/authz/` — `classify.test.ts`, `pipeline.test.ts`, `client-api-policy.test.ts`, `management-policy.test.ts`, `public-policy.test.ts`.
- Публичный allowlist: `tests/unit/public-api-routes.test.ts`.
- Точечный запуск: `node --import tsx/esm --test tests/unit/authz/classify.test.ts`.

## Отладка

Конвейер всегда добавляет к ответам заголовки:

```
x-request-id:               <correlation id, echoed in error bodies>
x-omniroute-route-class:    PUBLIC | CLIENT_API | MANAGEMENT
```

Для аутентифицированных запросов заголовки upstream-запроса (на стороне обработчика) также включают:

```
x-omniroute-auth-kind:      client_api_key | dashboard_session | management_key | anonymous
x-omniroute-auth-id:        key_<last-4> | "dashboard" | "anonymous"
x-omniroute-auth-label:     (optional)
x-omniroute-auth-scopes:    comma-separated list
```

Используйте `assertAuth(req, expectedClass)` внутри обработчиков — он выбрасывает `AuthzAssertionError` с кодом `AUTHZ_NOT_INITIALIZED`, если middleware был обойден (полезно для отлова регрессий конфигурации в тестах).

## Смотрите также

- [API_REFERENCE.md](../reference/API_REFERENCE.md) — маркер аутентификации для каждого эндпоинта
- [COMPLIANCE.md](../security/COMPLIANCE.md) — audit log для событий аутентификации
- [MCP-SERVER.md](../frameworks/MCP-SERVER.md) — детали enforcement scopes в MCP
- Исходники: `src/server/authz/`, `src/lib/api/requireManagementAuth.ts`
