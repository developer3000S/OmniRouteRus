# MCP-SERVER (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../frameworks/MCP-SERVER.md) · 🇸🇦 [ar](../../../ar/docs/frameworks/MCP-SERVER.md) · 🇦🇿 [az](../../../az/docs/frameworks/MCP-SERVER.md) · 🇧🇬 [bg](../../../bg/docs/frameworks/MCP-SERVER.md) · 🇧🇩 [bn](../../../bn/docs/frameworks/MCP-SERVER.md) · 🇨🇿 [cs](../../../cs/docs/frameworks/MCP-SERVER.md) · 🇩🇰 [da](../../../da/docs/frameworks/MCP-SERVER.md) · 🇩🇪 [de](../../../de/docs/frameworks/MCP-SERVER.md) · 🇪🇸 [es](../../../es/docs/frameworks/MCP-SERVER.md) · 🇮🇷 [fa](../../../fa/docs/frameworks/MCP-SERVER.md) · 🇫🇮 [fi](../../../fi/docs/frameworks/MCP-SERVER.md) · 🇫🇷 [fr](../../../fr/docs/frameworks/MCP-SERVER.md) · 🇮🇳 [gu](../../../gu/docs/frameworks/MCP-SERVER.md) · 🇮🇱 [he](../../../he/docs/frameworks/MCP-SERVER.md) · 🇮🇳 [hi](../../../hi/docs/frameworks/MCP-SERVER.md) · 🇭🇺 [hu](../../../hu/docs/frameworks/MCP-SERVER.md) · 🇮🇩 [id](../../../id/docs/frameworks/MCP-SERVER.md) · 🇮🇩 [in](../../../in/docs/frameworks/MCP-SERVER.md) · 🇮🇹 [it](../../../it/docs/frameworks/MCP-SERVER.md) · 🇯🇵 [ja](../../../ja/docs/frameworks/MCP-SERVER.md) · 🇰🇷 [ko](../../../ko/docs/frameworks/MCP-SERVER.md) · 🇮🇳 [mr](../../../mr/docs/frameworks/MCP-SERVER.md) · 🇲🇾 [ms](../../../ms/docs/frameworks/MCP-SERVER.md) · 🇳🇱 [nl](../../../nl/docs/frameworks/MCP-SERVER.md) · 🇳🇴 [no](../../../no/docs/frameworks/MCP-SERVER.md) · 🇵🇭 [phi](../../../phi/docs/frameworks/MCP-SERVER.md) · 🇵🇱 [pl](../../../pl/docs/frameworks/MCP-SERVER.md) · 🇵🇹 [pt](../../../pt/docs/frameworks/MCP-SERVER.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/frameworks/MCP-SERVER.md) · 🇷🇴 [ro](../../../ro/docs/frameworks/MCP-SERVER.md) · 🇸🇰 [sk](../../../sk/docs/frameworks/MCP-SERVER.md) · 🇸🇪 [sv](../../../sv/docs/frameworks/MCP-SERVER.md) · 🇰🇪 [sw](../../../sw/docs/frameworks/MCP-SERVER.md) · 🇮🇳 [ta](../../../ta/docs/frameworks/MCP-SERVER.md) · 🇮🇳 [te](../../../te/docs/frameworks/MCP-SERVER.md) · 🇹🇭 [th](../../../th/docs/frameworks/MCP-SERVER.md) · 🇹🇷 [tr](../../../tr/docs/frameworks/MCP-SERVER.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/frameworks/MCP-SERVER.md) · 🇵🇰 [ur](../../../ur/docs/frameworks/MCP-SERVER.md) · 🇻🇳 [vi](../../../vi/docs/frameworks/MCP-SERVER.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/frameworks/MCP-SERVER.md)

---

---

title: "Документация сервера OmniRoute MCP"
version: 3.8.2
lastUpdated: 2026-05-13
---

# Документация сервера OmniRoute MCP

> Сервер протокола контекста модели с 37 инструментами в категориях маршрутизации, кэширования, сжатия, памяти, навыков и прокси.
>
> Источник истины: `open-sse/mcp-server/schemas/tools.ts` (30 инструментов) + `open-sse/mcp-server/tools/memoryTools.ts` (3 инструмента) + `open-sse/mcp-server/tools/skillTools.ts` (4 инструмента). Регистрация инструментов и подключение областей выполняется в `open-sse/mcp-server/server.ts`.

![Инвентарь инструментов MCP (37 инструментов по категориям)](../diagrams/exported/mcp-tools-37.svg)

> Источник: [diagrams/mcp-tools-37.mmd](../diagrams/mcp-tools-37.mmd)

## Установка

OmniRoute MCP встроен. Запустите его с помощью:

```bash
omniroute --mcp
```

Или через транспорт open-sse:

```bash
# Транспорт HTTP с возможностью потоковой передачи (порт 20130)
omniroute --dev  # MCP автоматически запускается на конечной точке /mcp
```

## Транспорты

Сервер MCP предоставляет три транспорта, все они основаны на фабрике `createMcpServer()`:

| Транспорт         | Где                                           | Когда использовать                                        |
| :---------------- | :-------------------------------------------- | :-------------------------------------------------------- |
| `stdio`           | `open-sse/mcp-server/server.ts`               | Интеграции с IDE (Claude Desktop, Cursor и т.д.)          |
| `sse`             | `POST/GET /api/mcp/sse` через `httpTransport` | Браузерные/агентские клиенты, которым нужен поток событий |
| `streamable-http` | `POST/GET/DELETE /api/mcp/stream`             | Многосеансовые HTTP-клиенты (`mcp-session-id` заголовок)  |

Активный HTTP-транспорт (`sse` или `streamable-http`) выбирается по настройке `mcpTransport`. Переключение транспортов закрывает существующие сеансы на другом транспорте.

### Удаленный доступ (обход области управления)

`/api/mcp/*` находится в уровне LOCAL_ONLY (`src/server/authz/routeGuard.ts`) — по умолчанию только хосты с обратной связью (`localhost`, `127.0.0.1`, `::1`) могут к нему обращаться. Начиная с версии 3.8.2, не-loopback-клиенты могут подключаться, если они представляют `Authorization: Bearer <api-key>`, чей ключ содержит область `manage`. Это единственный способ подключиться к удаленному серверу MCP через туннель, обратный прокси или общедоступный хост.

```bash
# Предоставить область управления: откройте API Manager в панели управления и переключите
# "Доступ к управлению" на ключе, или POST scopes:["manage"] при создании.

# Затем подключитесь с удаленного клиента MCP:
curl -i \
  -H "Host: your-public-host.example" \
  -H "Authorization: Bearer sk-…" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -d '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-03-26","capabilities":{},"clientInfo":{"name":"my-client","version":"0"}}}' \
  https://your-public-host.example/api/mcp/stream
```

Ключ без области управления (или без Bearer) возвращает `403 LOCAL_ONLY`. Соседний префикс `/api/cli-tools/runtime/*` намеренно не поддается обходу — см. [Уровни защиты маршрутов — Обход области управления](../security/ROUTE_GUARD_TIERS.md#manage-scope-carve-out).

## Конфигурация IDE

См. [Конфигурация клиента MCP](../guides/SETUP_GUIDE.md#mcp-client-configuration) для настройки Claude Desktop, Cursor, Cline и совместимых клиентов MCP.

---

## Основные инструменты (8) — Фаза 1

| Инструмент                      | Области               | Описание                                                                          |
| :------------------------------ | :-------------------- | :-------------------------------------------------------------------------------- |
| `omniroute_get_health`          | `read:health`         | Время работы, память, предохранители цепей, ограничения скорости, статистика кэша |
| `omniroute_list_combos`         | `read:combos`         | Все настроенные комбо с стратегиями (опциональные метрики)                        |
| `omniroute_get_combo_metrics`   | `read:combos`         | Метрики производительности для конкретного комбо                                  |
| `omniroute_switch_combo`        | `write:combos`        | Активировать или деактивировать комбо                                             |
| `omniroute_check_quota`         | `read:quota`          | Использованный/общий квота, процент оставшегося, время сброса, состояние токена   |
| `omniroute_route_request`       | `execute:completions` | Отправить запрос на завершение чата через маршрутизацию OmniRoute                 |
| `omniroute_cost_report`         | `read:usage`          | Отчет о затратах по периоду (сессия/день/неделя/месяц)                            |
| `omniroute_list_models_catalog` | `read:models`         | Полный каталог моделей с возможностями, статусом, ценами                          |

## Фаза 1 — Поиск

| Инструмент             | Области          | Описание                                                                                                                         |
| :--------------------- | :--------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `omniroute_web_search` | `execute:search` | Веб-поиск через шлюз поиска OmniRoute (Serper/Brave/Perplexity/Exa/Tavily/Google PSE/Linkup/SearchAPI/SearXNG) с резервированием |

## Расширенные инструменты (11) — Фаза 2

| Инструмент                         | Области                              | Описание                                                                                                                                 |
| :--------------------------------- | :----------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| `omniroute_simulate_route`         | `read:health`, `read:combos`         | Сухая пробная маршрутизация с деревом резервных вариантов                                                                                |
| `omniroute_set_budget_guard`       | `write:budget`                       | Бюджет сессии с действиями деградации/блокировки/оповещения                                                                              |
| `omniroute_set_routing_strategy`   | `write:combos`                       | Обновить стратегию комбо во время выполнения (приоритет/взвешенная/автоматическая и т. д.)                                               |
| `omniroute_set_resilience_profile` | `write:resilience`                   | Применить предустановку `aggressive` / `balanced` / `conservative` для профиля устойчивости                                              |
| `omniroute_test_combo`             | `execute:completions`, `read:combos` | Прямое тестирование каждого провайдера в комбо с использованием реального исходного вызова                                               |
| `omniroute_get_provider_metrics`   | `read:health`                        | Метрики по провайдерам с задержкой p50/p95/p99 и состоянием предохранителя цепи                                                          |
| `omniroute_best_combo_for_task`    | `read:combos`, `read:health`         | Рекомендовать комбо по типу задачи с учетом бюджета/задержки                                                                             |
| `omniroute_explain_route`          | `read:health`, `read:usage`          | Объяснить, почему запрос был направлен к провайдеру (факторы оценки + резервные варианты)                                                |
| `omniroute_get_session_snapshot`   | `read:usage`                         | Полный снимок сессии: стоимость, токены, топ-модели/провайдеры, ошибки, бюджетный предохранитель                                         |
| `omniroute_db_health_check`        | `read:health`, `write:resilience`    | Диагностировать (и при необходимости автоматически исправить) дрейф базы данных, такой как сломанные ссылки на комбо / сиротливые строки |
| `omniroute_sync_pricing`           | `pricing:write`                      | Синхронизировать данные о ценах из внешних источников (LiteLLM); поддерживает `dryRun`                                                   |

## Инструменты кэширования (2)

| Инструмент              | Области       | Описание                                                         |
| :---------------------- | :------------ | :--------------------------------------------------------------- |
| `omniroute_cache_stats` | `read:cache`  | Статистика семантического кэша, кэша подсказок и идемпотентности |
| `omniroute_cache_flush` | `write:cache` | Очистить кэш глобально или по подписи/модели                     |

## Инструменты сжатия (5)

| Инструмент                          | Области             | Описание                                                                                                                        |
| :---------------------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------------ |
| `omniroute_compression_status`      | `read:compression`  | Настройки сжатия, сводка аналитики и кэш-ориентированная статистика (включает метаданные `analytics.mcpDescriptionCompression`) |
| `omniroute_compression_configure`   | `write:compression` | Настроить режим сжатия, порог, целевой коэффициент, сохранение системной подсказки, переключатель сжатия описания MCP           |
| `omniroute_set_compression_engine`  | `write:compression` | Выбрать активный движок (off/caveman/rtk/stacked) и интенсивность Caveman/RTK                                                   |
| `omniroute_list_compression_combos` | `read:compression`  | Перечислить именованные комбинации сжатия и их конвейеры движков                                                                |
| `omniroute_compression_combo_stats` | `read:compression`  | Аналитика, сгруппированная по комбинации сжатия и движку                                                                        |

`omniroute_compression_status` сообщает о сжатии описания MCP отдельно под
`analytics.mcpDescriptionCompression`. Эти значения являются оценками размера метаданных для списка описаний MCP (`tools`, `prompts`, `resources`, и `resourceTemplates`); они не являются квитанциями использования провайдера и помечены как `source: "mcp_metadata_estimate"`.

### Фильтр дерева доступности MCP (v3.8.0)

Отдельно от 5 инструментов сжатия выше, OmniRoute включает пост-выполнения фильтр, который
сжимает **результаты инструментов** браузера/доступности MCP перед их возвратом агенту.
Этот фильтр сам по себе не является инструментом — он прозрачно работает с любым результатом инструмента, содержащим подробный текст дерева доступности или снимка браузера (≥2000 символов).

Основные поведения:

- Сворачивает ≥30 последовательных повторяющихся строк-потомков в заголовок + хвост
- Сохраняет `[ref=eXX]` якоря, необходимые для Playwright/computer-use
- Жестко обрезает слишком большой текст (>50,000 символов) с подсказкой навигации
- Ожидаемые сбережения: **60–80%** на полезных нагрузках снимков браузера

Конфигурация: `compression.mcpAccessibility` в глобальных настройках (миграция 056).
Реализация: `open-sse/services/compression/engines/mcpAccessibility/`.
Полная документация: [Движки сжатия — Фильтр дерева доступности MCP](../compression/COMPRESSION_ENGINES.md#mcp-accessibility-tree-filter).

См. [Движки сжатия](../compression/COMPRESSION_ENGINES.md) и [RTK Сжатие](../compression/RTK_COMPRESSION.md) для
модели времени выполнения сжатия, лежащей в основе этих инструментов.

## 1Proxy Tools (3)

| Tool                        | Scopes         | Description                                                                               |
| :-------------------------- | :------------- | :---------------------------------------------------------------------------------------- |
| `omniroute_oneproxy_fetch`  | `read:proxies` | Получение бесплатных прокси с рынка 1proxy (фильтры по протоколу/стране/качеству/лимиту)  |
| `omniroute_oneproxy_rotate` | `read:proxies` | Получение следующего доступного прокси по стратегии (`random` / `quality` / `sequential`) |
| `omniroute_oneproxy_stats`  | `read:proxies` | Статистика пула, статус синхронизации, распределение по протоколу и стране                |

## Memory Tools (3)

Определены в `open-sse/mcp-server/tools/memoryTools.ts`. Авторизация/область действия выполняется через стандартный конвейер областей действия MCP.

| Tool                      | Description                                                                                     |
| :------------------------ | :---------------------------------------------------------------------------------------------- |
| `omniroute_memory_search` | Поиск памяти по запросу / типу / API ключу с учетом бюджета токенов                             |
| `omniroute_memory_add`    | Добавление новой записи памяти (`factual` / `episodic` / `procedural` / `semantic`)             |
| `omniroute_memory_clear`  | Очистка памяти для API ключа, опционально отфильтрованной по типу или `olderThan` метке времени |

## Skill Tools (4)

Определены в `open-sse/mcp-server/tools/skillTools.ts`. Поддерживаются `src/lib/skills/registry` + `src/lib/skills/executor`.

| Tool                          | Description                                                                                             |
| :---------------------------- | :------------------------------------------------------------------------------------------------------ |
| `omniroute_skills_list`       | Список зарегистрированных навыков с возможностью фильтрации по API ключу, имени или состоянию включения |
| `omniroute_skills_enable`     | Включение или отключение конкретного навыка по ID                                                       |
| `omniroute_skills_execute`    | Выполнение навыка с предоставленным входом и возврат записи выполнения                                  |
| `omniroute_skills_executions` | Список последней истории выполнения навыков                                                             |

## Related Frameworks (v3.8.0)

Инвентарь инструментов MCP выше (37 инструментов = 30 базовых + 3 памяти + 4 навыка) специально
ограничен операциями маршрутизации/кеширования/сжатия/памяти/навыков/прокси. Два смежных
фреймворка поставляются вместе с сервером MCP в версии v3.8.0 и документируются отдельно:

### Cloud Agents

Cloud Agents — это внепроцессные AI-агенты для кодирования (codex-cloud, devin, jules), подключенные к
OmniRoute через ту же модель подключения, что и для поставщиков LLM. Они доступны через
собственный REST-интерфейс (`/api/v1/agents/*`) и **не** являются частью каталога инструментов MCP —
вызов Cloud Agent не потребляет область действия MCP.

- Реализация: `src/lib/cloudAgent/` (`registry.ts`, `agents/codex-cloud.ts`, `agents/devin.ts`, `agents/jules.ts`).
- Жизненный цикл: `createTask`, `getStatus`, `approvePlan`, `sendMessage`, `listSources`.
- Документация: [docs/frameworks/CLOUD_AGENT.md](./CLOUD_AGENT.md).

### Guardrails

Guardrails — это пре-/пост-фильтры выполнения (vision-bridge, pii-masker, prompt-injection),
применяемые внутри конвейера чата. Они запускаются до достижения слоя инструментов/маршрутизации MCP
и передают структурированные нарушения в конвейер аудита; они не вызываются как инструменты MCP.

- Реализация: `src/lib/guardrails/`.
- Документация: [docs/security/GUARDRAILS.md](../security/GUARDRAILS.md).

При отладке вызова MCP, который кажется заблокированным, проверьте как журнал аудита MCP
(записи `scope_denied:*`), так и журнал аудита guardrails — запрос может быть отклонен guardrail
**до** того, как он достигнет слоя контроля областей действия MCP.

## REST API Endpoints

| Endpoint               | Method                | Description                                                                                       | Auth                      |
| :--------------------- | :-------------------- | :------------------------------------------------------------------------------------------------ | :------------------------ |
| `/api/mcp/status`      | `GET`                 | Статус сервера: сердцебиение, состояние HTTP-транспорта, сводка активности аудита                 | Управление (сессия/админ) |
| `/api/mcp/tools`       | `GET`                 | Каталог инструментов (название, описание, области, фаза, исходные конечные точки)                 | Управление                |
| `/api/mcp/sse`         | `GET` / `POST`        | Конечная точка SSE-транспорта (защищена `mcpEnabled` + `mcpTransport === "sse"`)                  | API-ключ + области        |
| `/api/mcp/stream`      | `POST`/`GET`/`DELETE` | Потоковый HTTP-транспорт (использует заголовок `mcp-session-id`; `DELETE` завершает сессию)       | API-ключ + области        |
| `/api/mcp/audit`       | `GET`                 | Записи аудит-лога из `mcp_tool_audit` (фильтры: `limit`, `offset`, `tool`, `success`, `apiKeyId`) | Управление                |
| `/api/mcp/audit/stats` | `GET`                 | Агрегированная статистика аудита (`totalCalls`, `successRate`, `avgDurationMs`, топ инструменты)  | Управление                |

Исходные файлы: `src/app/api/mcp/{status,tools,sse,stream,audit,audit/stats}/route.ts`.

Оба транспорта SSE и потокового HTTP заблокированы до тех пор, пока сервер MCP не будет включен в Настройках (`mcpEnabled`) и выбран соответствующий `mcpTransport`. Если настроен неправильный транспорт, маршрут возвращает HTTP 400 с подсказкой о переключении настроек.

---

## Аутентификация и области

Инструменты MCP аутентифицируются через области API-ключей. Контроль областей централизован в `open-sse/mcp-server/scopeEnforcement.ts`. Каждый инструмент требует определенных областей:

| Область               | Инструменты                                                                                                       |
| :-------------------- | :---------------------------------------------------------------------------------------------------------------- |
| `read:health`         | `get_health`, `get_provider_metrics`, `simulate_route`, `explain_route`, `best_combo_for_task`, `db_health_check` |
| `read:combos`         | `list_combos`, `get_combo_metrics`, `simulate_route`, `best_combo_for_task`, `test_combo`                         |
| `write:combos`        | `switch_combo`, `set_routing_strategy`                                                                            |
| `read:quota`          | `check_quota`                                                                                                     |
| `read:usage`          | `cost_report`, `get_session_snapshot`, `explain_route`                                                            |
| `read:models`         | `list_models_catalog`                                                                                             |
| `execute:completions` | `route_request`, `test_combo`                                                                                     |
| `execute:search`      | `web_search`                                                                                                      |
| `write:budget`        | `set_budget_guard`                                                                                                |
| `write:resilience`    | `set_resilience_profile`, `db_health_check`                                                                       |
| `pricing:write`       | `sync_pricing`                                                                                                    |
| `read:cache`          | `cache_stats`                                                                                                     |
| `write:cache`         | `cache_flush`                                                                                                     |
| `read:compression`    | `compression_status`, `list_compression_combos`, `compression_combo_stats`                                        |
| `write:compression`   | `compression_configure`, `set_compression_engine`                                                                 |
| `read:proxies`        | `oneproxy_fetch`, `oneproxy_rotate`, `oneproxy_stats`                                                             |

Поддерживаются wildcard-области: `read:*` предоставляет все области чтения, `*` предоставляет полный доступ.

Инструменты Memory и Skill в настоящее время не объявляют статические требования к областям в своих определениях; доступ контролируется API-ключом вызывающего и аудируется через стандартный аудит-конвейер MCP.

## Переменные окружения

| Переменная                              | Значение по умолчанию              | Назначение                                                                                                                                                         |
| :-------------------------------------- | :--------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `OMNIROUTE_BASE_URL`                    | `http://localhost:20128`           | Базовый URL, который сервер MCP использует при вызове внутренних API OmniRoute                                                                                     |
| `OMNIROUTE_API_KEY`                     | (пусто)                            | API-ключ, передаваемый как `Authorization: Bearer` для внутренних API-вызовов                                                                                      |
| `OMNIROUTE_MCP_ENFORCE_SCOPES`          | `false` (только `"true"` включает) | При включении отсутствие разрешений запрещает вызовы инструментов и записывает `scope_denied:<reason>` в журнал аудита                                             |
| `OMNIROUTE_MCP_SCOPES`                  | (пусто)                            | Список разрешений, разделённых запятыми, которые считаются "доступными" по умолчанию (используются, когда вызывающий не предоставляет свои собственные разрешения) |
| `OMNIROUTE_MCP_COMPRESS_DESCRIPTIONS`   | (не установлено = вкл.)            | При установке в `0/false/off/no` отключает сжатие описаний MCP при регистрации                                                                                     |
| `OMNIROUTE_MCP_DESCRIPTION_COMPRESSION` | (не установлено = вкл.)            | Альтернативный псевдоним для того же переключателя, что и выше                                                                                                     |
| `DATA_DIR`                              | `~/.omniroute`                     | Файл сердечного ритма записывается в `${DATA_DIR}/runtime/mcp-heartbeat.json`                                                                                      |

---

## Сжатие описаний

Реестры инструментов, подсказок и ресурсов MCP могут сжимать описания при регистрации/перечислении, чтобы уменьшить объем метаданных, доступных клиентам (и, следовательно, стоимость контекста подсказки). Реализация находится в `open-sse/mcp-server/descriptionCompressor.ts` и подключена к серверу MCP через `compressMcpRegistryMetadata` внутри `createMcpServer()`.

- Сжатие выполняется над текстом описания с использованием набора правил Caveman (`getRulesForContext("all", "full")`) с извлечением сохраненных блоков (пропуски кода, огражденные блоки и т.д.), чтобы структурное содержимое не изменялось.
- Переключение на уровне развертывания через значение `compression.mcpDescriptionCompressionEnabled` в таблице `key_value` (по умолчанию включено) — отображается в интерфейсе как **Analytics → MCP description compression**.
- Переключение на уровне процесса через `OMNIROUTE_MCP_COMPRESS_DESCRIPTIONS=false` или `OMNIROUTE_MCP_DESCRIPTION_COMPRESSION=false`.
- Статистика в реальном времени отображается через `omniroute_compression_status` под `analytics.mcpDescriptionCompression` и помечена `source: "mcp_metadata_estimate"`, чтобы различать от реальных квитанций использования провайдера.

## Runtime Heartbeat

Транспорт stdio сохраняет информацию о работоспособности в файл `${DATA_DIR}/runtime/mcp-heartbeat.json` каждые 5 секунд. Панель управления (`/api/mcp/status`) читает этот файл вместе с информацией о работоспособности PID, чтобы определить `online`. HTTP-транспорты сообщают о состоянии из процесса `getMcpHttpStatus()` вместо этого (без записи в файл).

Снимок сердечного ритма содержит:

```json
{
  "pid": 12345,
  "startedAt": "2026-05-13T12:34:56.000Z",
  "lastHeartbeatAt": "2026-05-13T12:35:01.000Z",
  "version": "1.8.1",
  "transport": "stdio",
  "scopesEnforced": false,
  "allowedScopes": [],
  "toolCount": 37
}
```

---

## Audit Logging

Каждый вызов инструмента записывается в таблицу SQLite `mcp_tool_audit` файлом `open-sse/mcp-server/audit.ts`:

- Имя инструмента, аргументы (хешированные/усеченные в соответствии с `auditLevel` для каждого инструмента), результат
- Продолжительность в мс, флаг успеха/неудачи, сообщение об ошибке (при наличии)
- Хеш API-ключа, временная метка
- Отказы в области действия записываются как `scope_denied:<reason>` со списком отсутствующих областей действия

Используйте панель управления или REST-эндпоинты `/api/mcp/audit` и `/api/mcp/audit/stats`, чтобы просмотреть последние вызовы.

---

## Files

| File                                            | Purpose                                                                              |
| :---------------------------------------------- | :----------------------------------------------------------------------------------- |
| `open-sse/mcp-server/server.ts`                 | Фабрика сервера MCP, точка входа stdio, регистрация инструментов с областью действия |
| `open-sse/mcp-server/httpTransport.ts`          | Транспорт SSE + Streamable HTTP (управление сеансами)                                |
| `open-sse/mcp-server/scopeEnforcement.ts`       | Оценка области действия инструмента и разрешение вызывающего абонента                |
| `open-sse/mcp-server/audit.ts`                  | Журналирование вызовов инструментов (`mcp_tool_audit`)                               |
| `open-sse/mcp-server/runtimeHeartbeat.ts`       | Писатель сердечного ритма stdio (`mcp-heartbeat.json`)                               |
| `open-sse/mcp-server/descriptionCompressor.ts`  | Сжатие описаний для инструментов / подсказок / ресурсов                              |
| `open-sse/mcp-server/schemas/tools.ts`          | Схемы Zod + реестр инструментов (`MCP_TOOLS`, 30 записей)                            |
| `open-sse/mcp-server/tools/advancedTools.ts`    | Обработчики инструментов фазы 2 + кэш + 1proxy                                       |
| `open-sse/mcp-server/tools/compressionTools.ts` | Обработчики инструментов сжатия                                                      |
| `open-sse/mcp-server/tools/memoryTools.ts`      | Определения инструментов памяти (3 инструмента)                                      |
| `open-sse/mcp-server/tools/skillTools.ts`       | Определения инструментов навыков (4 инструмента)                                     |
| `src/app/api/mcp/status/route.ts`               | Эндпоинт `/api/mcp/status`                                                           |
| `src/app/api/mcp/tools/route.ts`                | Эндпоинт `/api/mcp/tools`                                                            |
| `src/app/api/mcp/sse/route.ts`                  | Маршрут SSE-транспорта `/api/mcp/sse`                                                |
| `src/app/api/mcp/stream/route.ts`               | Маршрут Streamable HTTP-транспорта `/api/mcp/stream`                                 |
| `src/app/api/mcp/audit/route.ts`                | Запрос журнала аудита `/api/mcp/audit`                                               |
| `src/app/api/mcp/audit/stats/route.ts`          | Агрегированные метрики аудита `/api/mcp/audit/stats`                                 |
