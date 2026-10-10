# ROUTE_GUARD_TIERS (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../security/ROUTE_GUARD_TIERS.md) · 🇸🇦 [ar](../../../ar/docs/security/ROUTE_GUARD_TIERS.md) · 🇦🇿 [az](../../../az/docs/security/ROUTE_GUARD_TIERS.md) · 🇧🇬 [bg](../../../bg/docs/security/ROUTE_GUARD_TIERS.md) · 🇧🇩 [bn](../../../bn/docs/security/ROUTE_GUARD_TIERS.md) · 🇨🇿 [cs](../../../cs/docs/security/ROUTE_GUARD_TIERS.md) · 🇩🇰 [da](../../../da/docs/security/ROUTE_GUARD_TIERS.md) · 🇩🇪 [de](../../../de/docs/security/ROUTE_GUARD_TIERS.md) · 🇪🇸 [es](../../../es/docs/security/ROUTE_GUARD_TIERS.md) · 🇮🇷 [fa](../../../fa/docs/security/ROUTE_GUARD_TIERS.md) · 🇫🇮 [fi](../../../fi/docs/security/ROUTE_GUARD_TIERS.md) · 🇫🇷 [fr](../../../fr/docs/security/ROUTE_GUARD_TIERS.md) · 🇮🇳 [gu](../../../gu/docs/security/ROUTE_GUARD_TIERS.md) · 🇮🇱 [he](../../../he/docs/security/ROUTE_GUARD_TIERS.md) · 🇮🇳 [hi](../../../hi/docs/security/ROUTE_GUARD_TIERS.md) · 🇭🇺 [hu](../../../hu/docs/security/ROUTE_GUARD_TIERS.md) · 🇮🇩 [id](../../../id/docs/security/ROUTE_GUARD_TIERS.md) · 🇮🇩 [in](../../../in/docs/security/ROUTE_GUARD_TIERS.md) · 🇮🇹 [it](../../../it/docs/security/ROUTE_GUARD_TIERS.md) · 🇯🇵 [ja](../../../ja/docs/security/ROUTE_GUARD_TIERS.md) · 🇰🇷 [ko](../../../ko/docs/security/ROUTE_GUARD_TIERS.md) · 🇮🇳 [mr](../../../mr/docs/security/ROUTE_GUARD_TIERS.md) · 🇲🇾 [ms](../../../ms/docs/security/ROUTE_GUARD_TIERS.md) · 🇳🇱 [nl](../../../nl/docs/security/ROUTE_GUARD_TIERS.md) · 🇳🇴 [no](../../../no/docs/security/ROUTE_GUARD_TIERS.md) · 🇵🇭 [phi](../../../phi/docs/security/ROUTE_GUARD_TIERS.md) · 🇵🇱 [pl](../../../pl/docs/security/ROUTE_GUARD_TIERS.md) · 🇵🇹 [pt](../../../pt/docs/security/ROUTE_GUARD_TIERS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/ROUTE_GUARD_TIERS.md) · 🇷🇴 [ro](../../../ro/docs/security/ROUTE_GUARD_TIERS.md) · 🇸🇰 [sk](../../../sk/docs/security/ROUTE_GUARD_TIERS.md) · 🇸🇪 [sv](../../../sv/docs/security/ROUTE_GUARD_TIERS.md) · 🇰🇪 [sw](../../../sw/docs/security/ROUTE_GUARD_TIERS.md) · 🇮🇳 [ta](../../../ta/docs/security/ROUTE_GUARD_TIERS.md) · 🇮🇳 [te](../../../te/docs/security/ROUTE_GUARD_TIERS.md) · 🇹🇭 [th](../../../th/docs/security/ROUTE_GUARD_TIERS.md) · 🇹🇷 [tr](../../../tr/docs/security/ROUTE_GUARD_TIERS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/ROUTE_GUARD_TIERS.md) · 🇵🇰 [ur](../../../ur/docs/security/ROUTE_GUARD_TIERS.md) · 🇻🇳 [vi](../../../vi/docs/security/ROUTE_GUARD_TIERS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/ROUTE_GUARD_TIERS.md)

---

---
title: "Уровни защиты маршрутов"
---

# Уровни защиты маршрутов

## Обзор

Все API-маршруты управления OmniRoute классифицируются в одну из трех категорий защиты. Классификация статична, определяется в `src/server/authz/routeGuard.ts` и оценивается до запуска любой другой ветки аутентификации.

## Уровни

### Уровень 1 — LOCAL_ONLY

**Применяется:** `isLocalOnlyPath(path)` → проверка loopback хоста
**Обход:** Нет по умолчанию. Узкий выброс для путей в `LOCAL_ONLY_MANAGE_SCOPE_BYPASS_PREFIXES`, когда запрос содержит действительный API-ключ с областью `manage` (см. [Выброс области manage](#manage-scope-carve-out)).

Эти маршруты запускают дочерние процессы или выполняют код во время выполнения. Открытие их для не-loopback трафика позволило бы атакующему, получившему действительный JWT (например, через туннель Cloudflared/Ngrok), запускать процессы — это известный класс уязвимостей (GHSA-fhh6-4qxv-rpqj).

| Префикс                    | Причина                                             | Может быть обойден `manage`? |
| ------------------------- | -------------------------------------------------- | ----------------------- |
| `/api/mcp/`               | Сервер MCP — запускает stdio-мосты и обработчики SSE | Да                     |
| `/api/cli-tools/runtime/` | Время выполнения инструмента CLI — выполняет произвольный код плагина  | Нет (строгий loopback)    |

**Ответ при нарушении:** `403 LOCAL_ONLY`

#### Выброс области manage

Подмножество путей LOCAL_ONLY МОЖЕТ также быть доступно из не-loopback, если и только если запрос содержит `Authorization: Bearer <api-key>`, метаданные которого включают область `manage` (или `admin`). Выброс заканчивается явно по пути через `LOCAL_ONLY_MANAGE_SCOPE_BYPASS_PREFIXES`, чтобы по умолчанию для любого нового пути LOCAL_ONLY оставался строгий loopback. Неаутентифицированные запросы и запросы с не-manage ключами все еще отклоняются с `403 LOCAL_ONLY`.

Сегодня единственный обходимый префикс — `/api/mcp/`. `/api/cli-tools/runtime/` намеренно исключен, потому что он может запускать произвольные подпроцессы, что является именно тем классом уязвимостей, для предотвращения которого существует уровень LOCAL_ONLY.

| Запрос                                     | Путь                       | Результат              |
| ------------------------------------------- | -------------------------- | ------------------- |
| Не-loopback, нет Bearer                     | `/api/mcp/*`               | 403 LOCAL_ONLY      |
| Не-loopback, Bearer с областью `manage`    | `/api/mcp/*`               | Разрешить               |
| Не-loopback, Bearer без области `manage` | `/api/mcp/*`               | 403 LOCAL_ONLY      |
| Не-loopback, Bearer с областью `manage`    | `/api/cli-tools/runtime/*` | 403 LOCAL_ONLY      |
| Loopback, любой/нет Bearer                     | любой LOCAL_ONLY             | Разрешить (шлюз проходит) |

### Уровень 2 — ALWAYS_PROTECTED

**Применяется:** `isAlwaysProtectedPath(path)` → пропустить обход `requireLogin=false`
**Обход:** Нет, когда `requireLogin=false`; JWT всегда требуется

Эти маршруты разрушительны или необратимы. Разрешение их в "установке без пароля" означало бы, что любой на той же локальной сети мог бы стереть базу данных или убить процесс сервера.

| Путь                     | Причина                            |
| ------------------------ | --------------------------------- |
| `/api/shutdown`          | Завершает процесс сервера     |
| `/api/settings/database` | Экспорт, импорт и стирание базы данных |

**Ответ при нарушении:** `401 Authentication required`

### Уровень 3 — MANAGEMENT (по умолчанию)

Все остальные маршруты управления. Аутентификация требуется, если не настроено `requireLogin=false`. Токены CLI могут аутентифицировать эти маршруты (loopback + действительный HMAC).

## Порядок оценки

```
managementPolicy.evaluate(ctx)
  1. isLocalOnlyPath(path)?
     → loopback                                  → fall through
     → non-loopback, manage-scope Bearer
        AND isLocalOnlyBypassableByManageScope   → allow (management_key)
     → otherwise                                  → reject 403 LOCAL_ONLY
  2. isInternalModelSyncRequest(ctx)?
     → allow (system)
  3. hasValidCliToken(headers)?
     → allow (cli) [loopback + timingSafeEqual HMAC check]
  4. isAlwaysProtectedPath(path) or requireLogin=true?
     → isDashboardSessionAuthenticated?
        → allow (dashboard_session)
     → manage-scope Bearer on a non-bypassable path?
        → allow (management_key)
     → reject 401/403
  5. requireLogin=false?
     → allow (anonymous)
```

Ветка manage-scope шага 1 — это единственный аутентифицированный путь, который может удовлетворить маршрут LOCAL_ONLY; режим сбоя auth-backend возвращает 503 (а не 403), поэтому истекшая БД не понижает уровень до "запрет" втихую.

## Добавление нового маршрута, способного запускать процессы

1. Добавьте префикс пути в `LOCAL_ONLY_API_PREFIXES` в `src/server/authz/routeGuard.ts`
2. Добавьте тест в `tests/unit/authz/routeGuard.test.ts`, утверждающий, что `isLocalOnlyPath()` возвращает true для нового префикса
3. **Никогда не пропускайте этот шаг** — см. Жесткое правило №15 в `CLAUDE.md`
4. Решите: этот маршрут ТАКЖЕ принадлежит `LOCAL_ONLY_MANAGE_SCOPE_BYPASS_PREFIXES`?
   Ответ по умолчанию — **нет**. Разрешайте только при необходимости, когда маршрут безопасно открыть для держателя manage-scope (т.е. НЕ запускает произвольный код или команды, управляемые пользователем).

## Добавление пути, который можно обойти с помощью manage-scope

1. Убедитесь, что маршрут не выполняет код или команды, заданные пользователем. Если это так, остановитесь — этот вырезка — неправильный инструмент.
2. Добавьте префикс в `LOCAL_ONLY_MANAGE_SCOPE_BYPASS_PREFIXES` в `src/server/authz/routeGuard.ts`
3. Добавьте покрытие в `tests/unit/authz/management-policy.test.ts` для всех четырех форм запроса: нет Bearer (403), manage Bearer (allow), non-manage Bearer (403) и регрессия для каждого префикса, которая `/api/cli-tools/runtime/*` остается строгим loopback даже с manage Bearer.

## Файлы

| Файл                                         | Назначение                     |
| -------------------------------------------- | ------------------------------ |
| `src/server/authz/routeGuard.ts`             | Константы и вспомогательные функции |
| `src/server/authz/policies/management.ts`    | Логика оценки                  |
| `tests/unit/authz/routeGuard.test.ts`        | Юнит-тесты для вспомогательных функций уровня |
| `tests/unit/authz/management-policy.test.ts` | Юнит-тесты для evaluate()      |

## Смотрите также

- `docs/security/CLI_TOKEN.md` — токен идентификации машины CLI
- `docs/architecture/AUTHZ_GUIDE.md` — полный конвейер авторизации
- `docs/frameworks/MCP-SERVER.md` — транспорты и области MCP-сервера
