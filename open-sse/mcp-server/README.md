# OmniRoute MCP Server

> **Протокол сервера контекста модели**, который предоставляет интеллектуальные возможности шлюза OmniRoute в виде **37 инструментов** для AI-агентов.
>
> **Источник истины для полного каталога инструментов и REST-поверхности:** [`docs/frameworks/MCP-SERVER.md`](../../docs/MCP-SERVER.md). Это README фокусируется на архитектуре, конфигурации и примерах интеграции; каталог ниже является кратким подмножеством.

Сервер MCP позволяет любому AI-агенту (Claude Desktop, Cursor, VS Code Copilot, пользовательские агенты) **мониторить, контролировать и оптимизировать** шлюз AI OmniRoute программно.

---

## Архитектура

```
┌──────────────────────────────────────────────────────────────────┐
│                         AI Agent / IDE                           │
│          (Claude Desktop, Cursor, VS Code, Custom)               │
└──────────────────────┬───────────────────────────────────────────┘
                       │  MCP Protocol (stdio or HTTP)
                       ▼
┌──────────────────────────────────────────────────────────────────┐
│                      OmniRoute MCP Server                        │
│  ┌──────────────┐  ┌─────────────────┐  ┌────────────────────┐  │
│  │ Scope        │  │  37 MCP Tools   │  │   Audit Logger     │  │
│  │ Enforcement  │──│ (core + memory  │──│   (SHA-256/SQLite) │  │
│  │              │  │  + skills + …)  │  │                    │  │
│  └──────────────┘  └────────┬────────┘  └────────────────────┘  │
└─────────────────────────────┼────────────────────────────────────┘
                              │  HTTP (internal)
                              ▼
┌──────────────────────────────────────────────────────────────────┐
│                    OmniRoute Gateway (port 20128)                 │
│        /v1/chat/completions  /api/combos  /api/usage  ...        │
└──────────────────────────────────────────────────────────────────┘
```

---

## Быстрый старт

### 1. Переменные окружения

```bash
# Обязательно: Базовый URL OmniRoute
export OMNIROUTE_BASE_URL="http://localhost:20128"

# Необязательно: API ключ для аутентифицированного доступа
export OMNIROUTE_API_KEY="your-api-key"

# Необязательно: Применение области (по умолчанию: отключено)
export OMNIROUTE_MCP_ENFORCE_SCOPES="true"
export OMNIROUTE_MCP_SCOPES="read:health,read:combos,read:quota,read:usage,read:models,read:cache,read:compression,execute:completions,write:combos,write:budget,write:resilience,write:cache,write:compression"
```

### 2. Транспорт stdio (Интеграция IDE)

Добавьте в конфигурацию вашего MCP клиента:

**Claude Desktop** (`claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "omniroute": {
      "command": "node",
      "args": ["path/to/omniroute/open-sse/mcp-server/server.ts"],
      "env": {
        "OMNIROUTE_BASE_URL": "http://localhost:20128",
        "OMNIROUTE_API_KEY": "your-key"
      }
    }
  }
}
```

**Cursor** (`.cursor/mcp.json`):

```json
{
  "mcpServers": {
    "omniroute": {
      "command": "npx",
      "args": ["tsx", "open-sse/mcp-server/server.ts"],
      "env": {
        "OMNIROUTE_BASE_URL": "http://localhost:20128"
      }
    }
  }
}
```

**VS Code** (`.vscode/settings.json`):

```json
{
  "mcp": {
    "servers": {
      "omniroute": {
        "command": "npx",
        "args": ["tsx", "open-sse/mcp-server/server.ts"],
        "env": {
          "OMNIROUTE_BASE_URL": "http://localhost:20128"
        }
      }
    }
  }
}
```

### 3. Запуск через CLI

```bash
# Прямой запуск (stdio)
npx tsx open-sse/mcp-server/server.ts

# Или через OmniRoute CLI
omniroute --mcp
```

---

## Справочник инструментов

### Фаза 1: Основные инструменты (8)

| #   | Инструмент                      | Области               | Описание                                                                                           |
| --- | ------------------------------- | --------------------- | -------------------------------------------------------------------------------------------------- |
| 1   | `omniroute_get_health`          | `read:health`         | Состояние шлюза, время работы, память, предохранители цепей, ограничения скорости, статистика кэша |
| 2   | `omniroute_list_combos`         | `read:combos`         | Список всех комбо (цепочек моделей) со стратегиями и необязательными метриками                     |
| 3   | `omniroute_get_combo_metrics`   | `read:combos`         | Метрики производительности для конкретного комбо                                                   |
| 4   | `omniroute_switch_combo`        | `write:combos`        | Активировать или деактивировать комбо для маршрутизации                                            |
| 5   | `omniroute_check_quota`         | `read:quota`          | Оставшийся квота API по провайдерам с состоянием токена                                            |
| 6   | `omniroute_route_request`       | `execute:completions` | Отправить запрос на завершение чата через интеллектуальную маршрутизацию                           |
| 7   | `omniroute_cost_report`         | `read:usage`          | Отчет о затратах по периоду (сессия/день/неделя/месяц) с разбивкой по провайдерам                  |
| 8   | `omniroute_list_models_catalog` | `read:models`         | Список всех доступных моделей по провайдерам с возможностями и ценами                              |

### Фаза 2: Расширенные инструменты (8)

| #   | Инструмент                         | Области                              | Описание                                                                                                     |
| --- | ---------------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| 9   | `omniroute_simulate_route`         | `read:health`, `read:combos`         | Симуляция маршрутизации без выполнения с деревом резервных вариантов и оценкой затрат                        |
| 10  | `omniroute_set_budget_guard`       | `write:budget`                       | Установить бюджет сессии с действием при превышении: `degrade`, `block`, или `alert`                         |
| 11  | `omniroute_set_resilience_profile` | `write:resilience`                   | Применить профиль устойчивости: `aggressive`, `balanced`, или `conservative`                                 |
| 12  | `omniroute_test_combo`             | `execute:completions`, `read:combos` | Протестировать каждого провайдера в комбо с реальным запросом и реальным вызовом, отчет о задержке/стоимости |
| 13  | `omniroute_get_provider_metrics`   | `read:health`                        | Метрики по провайдерам с процентилями задержки (p50/p95/p99), предохранителем цепей                          |
| 14  | `omniroute_best_combo_for_task`    | `read:combos`, `read:health`         | Рекомендация комбо на основе ИИ по типу задачи с ограничениями бюджета/задержки                              |
| 15  | `omniroute_explain_route`          | `read:health`, `read:usage`          | Объяснить, почему запрос был направлен к провайдеру (факторы оценки, резервные варианты)                     |
| 16  | `omniroute_get_session_snapshot`   | `read:usage`                         | Полный снимок сессии: стоимость, токены, топ-модели, ошибки, статус бюджета                                  |

### Инструменты кэширования и сжатия

| #   | Инструмент                          | Области             | Описание                                                                  |
| --- | ----------------------------------- | ------------------- | ------------------------------------------------------------------------- |
| 21  | `omniroute_cache_stats`             | `read:cache`        | Статистика семантического кэша, кэша запросов и идемпотентности           |
| 22  | `omniroute_cache_flush`             | `write:cache`       | Очистить записи кэша глобально или по подписи/модели                      |
| 23  | `omniroute_compression_status`      | `read:compression`  | Настройки сжатия, сводка аналитики и статистика кэша с учетом провайдера  |
| 24  | `omniroute_compression_configure`   | `write:compression` | Настроить режим сжатия и пороговые значения триггеров во время выполнения |
| 25  | `omniroute_set_compression_engine`  | `write:compression` | Установить режим сжатия Caveman, RTK или стековый с пайплайном            |
| 26  | `omniroute_list_compression_combos` | `read:compression`  | Список именованных комбо сжатия и назначений маршрутизации                |
| 27  | `omniroute_compression_combo_stats` | `read:compression`  | Прочитать аналитику, сгруппированную по комбо сжатия и движку             |

Описания метаданных MCP сжимаются при регистрации/списке, когда включено сжатие описаний.
`omniroute_compression_status` выводит эти экономии отдельно как `analytics.mcpDescriptionCompression`
с `source: "mcp_metadata_estimate"`, чтобы клиенты не путали оценки уменьшения метаданных с получением токенов провайдера.

---

## Примеры клиентов

### Python — Полный рабочий процесс агента

```python
"""
OmniRoute MCP Client — Пример на Python с использованием mcp SDK.
Установка: pip install mcp
"""
import asyncio
from mcp import ClientSession, StdioServerParameters
from mcp.client.stdio import stdio_client

async def main():
    server = StdioServerParameters(
        command="npx",
        args=["tsx", "open-sse/mcp-server/server.ts"],
        env={
            "OMNIROUTE_BASE_URL": "http://localhost:20128",
            "OMNIROUTE_API_KEY": "your-key",
        },
    )

    async with stdio_client(server) as (read, write):
        async with ClientSession(read, write) as session:
            await session.initialize()

            # 1. Проверка состояния шлюза
            health = await session.call_tool("omniroute_get_health", {})
            print("Health:", health.content[0].text)

            # 2. Список доступных комбо с метриками
            combos = await session.call_tool("omniroute_list_combos", {
                "includeMetrics": True
            })
            print("Combos:", combos.content[0].text)

            # 3. Поиск лучшего комбо для задачи по кодированию
            best = await session.call_tool("omniroute_best_combo_for_task", {
                "taskType": "coding",
                "budgetConstraint": 0.50,
                "latencyConstraint": 5000,
            })
            print("Best combo:", best.content[0].text)

            # 4. Установить бюджетный охранник сессии
            budget = await session.call_tool("omniroute_set_budget_guard", {
                "maxCost": 1.00,
                "action": "degrade",
                "degradeToTier": "cheap",
            })
            print("Budget guard:", budget.content[0].text)

            # 5. Маршрутизация запроса через интеллектуальную конвейерную линию
            response = await session.call_tool("omniroute_route_request", {
                "model": "claude-sonnet-4",
                "messages": [
                    {"role": "user", "content": "Write a Python hello world"}
                ],
                "role": "coding",
            })
            print("Response:", response.content[0].text)

            # 6. Получить снимок сессии
            snapshot = await session.call_tool("omniroute_get_session_snapshot", {})
            print("Session:", snapshot.content[0].text)

asyncio.run(main())
```

### TypeScript — Программный агент

```typescript
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

async function main() {
  const transport = new StdioClientTransport({
    command: "npx",
    args: ["tsx", "open-sse/mcp-server/server.ts"],
    env: {
      OMNIROUTE_BASE_URL: "http://localhost:20128",
      OMNIROUTE_API_KEY: "your-key",
    },
  });

  const client = new Client({ name: "my-agent", version: "1.0.0" });
  await client.connect(transport);

  // Проверка квоты перед принятием решения о выборе модели
  const quota = await client.callTool({
    name: "omniroute_check_quota",
    arguments: { provider: "claude" },
  });
  console.log("Claude quota:", quota.content);

  // Симуляция маршрута перед фактическим вызовом
  const simulation = await client.callTool({
    name: "omniroute_simulate_route",
    arguments: {
      model: "claude-sonnet-4",
      promptTokenEstimate: 2000,
    },
  });
  console.log("Route simulation:", simulation.content);

  // Отправка фактического запроса
  const result = await client.callTool({
    name: "omniroute_route_request",
    arguments: {
      model: "claude-sonnet-4",
      messages: [{ role: "user", content: "Explain async/await" }],
    },
  });
  console.log("Result:", result.content);

  // Отчет о затратах
  const costs = await client.callTool({
    name: "omniroute_cost_report",
    arguments: { period: "session" },
  });
  console.log("Costs:", costs.content);

  await client.close();
}

main();
```

### Go — HTTP-клиент

```go
package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "io"
    "net/http"
)

// Упрощенный подход с прямым API (обход MCP, прямое обращение к API OmniRoute)
// Полезно, если не нужен фрейминг протокола MCP.

func callTool(baseURL, tool string, args map[string]any) (string, error) {
    // Инструменты MCP соответствуют API OmniRoute:
    endpoints := map[string]string{
        "health": "/api/monitoring/health",
        "combos": "/api/combos",
        "quota":  "/api/usage/quota",
        "models": "/v1/models",
    }

    url := baseURL + endpoints[tool]
    resp, err := http.Get(url)
    if err != nil {
        return "", err
    }
    defer resp.Body.Close()
    body, _ := io.ReadAll(resp.Body)
    return string(body), nil
}

func routeRequest(baseURL, model, prompt string) (string, error) {
    payload := map[string]any{
        "model": model,
        "messages": []map[string]string{
            {"role": "user", "content": prompt},
        },
        "stream": false,
    }
    data, _ := json.Marshal(payload)

    resp, err := http.Post(
        baseURL+"/v1/chat/completions",
        "application/json",
        bytes.NewReader(data),
    )
    if err != nil {
        return "", err
    }
    defer resp.Body.Close()
    body, _ := io.ReadAll(resp.Body)
    return string(body), nil
}

func main() {
    base := "http://localhost:20128"

    health, _ := callTool(base, "health", nil)
    fmt.Println("Health:", health)

    result, _ := routeRequest(base, "auto", "Hello from Go!")
    fmt.Println("Result:", result)
}
```

---

## Use Cases

### 🔄 Use Case 1: Auto-Healing Agent

Агент, который мониторит здоровье OmniRoute и автоматически переключает комбинации при ухудшении работы провайдеров.

```python
async def auto_healing_loop(session):
    """Monitor health and react to provider issues."""
    while True:
        # Check health
        health = await session.call_tool("omniroute_get_health", {})
        data = json.loads(health.content[0].text)

        # Find providers with open circuit breakers
        broken = [
            cb for cb in data["circuitBreakers"]
            if cb["state"] == "OPEN"
        ]

        if broken:
            # Switch to a different resilience profile
            await session.call_tool("omniroute_set_resilience_profile", {
                "profile": "conservative"
            })

            # Find best alternative combo
            best = await session.call_tool("omniroute_best_combo_for_task", {
                "taskType": "coding"
            })
            best_data = json.loads(best.content[0].text)
            combo_id = best_data["recommendedCombo"]["id"]

            # Activate it
            await session.call_tool("omniroute_switch_combo", {
                "comboId": combo_id, "active": True
            })
            print(f"⚠️ Auto-healed: switched to {combo_id}")

        await asyncio.sleep(30)  # Check every 30 seconds
```

### 💰 Use Case 2: Budget-Aware Coding Agent

Агент, который мониторит затраты в реальном времени и переключается на более дешевые модели при приближении к лимиту бюджета.

```python
async def budget_aware_coding(session, task: str, max_budget: float):
    """Complete a coding task within a budget."""
    # Set budget guard
    await session.call_tool("omniroute_set_budget_guard", {
        "maxCost": max_budget,
        "action": "degrade",
        "degradeToTier": "cheap",
    })

    # Simulate first to estimate cost
    sim = await session.call_tool("omniroute_simulate_route", {
        "model": "claude-sonnet-4",
        "promptTokenEstimate": len(task.split()) * 2,
    })
    sim_data = json.loads(sim.content[0].text)
    estimated_cost = sim_data["fallbackTree"]["bestCaseCost"]
    print(f"Estimated cost: ${estimated_cost:.4f}")

    # Send request
    result = await session.call_tool("omniroute_route_request", {
        "model": "claude-sonnet-4",
        "messages": [{"role": "user", "content": task}],
        "role": "coding",
    })

    # Check remaining budget
    snapshot = await session.call_tool("omniroute_get_session_snapshot", {})
    snap_data = json.loads(snapshot.content[0].text)
    print(f"Session cost: ${snap_data['costTotal']:.4f}")
    if snap_data.get("budgetGuard"):
        print(f"Budget remaining: ${snap_data['budgetGuard']['remaining']:.4f}")

    return json.loads(result.content[0].text)["response"]["content"]
```

### 🧪 Use Case 3: Combo Benchmarking Agent

Агент, который периодически тестирует все комбинации и сообщает о самых быстрых и дешевых.

```python
async def benchmark_combos(session):
    """Benchmark all enabled combos and rank them."""
    combos = await session.call_tool("omniroute_list_combos", {
        "includeMetrics": True,
    })
    combo_list = json.loads(combos.content[0].text)["combos"]

    results = []
    for combo in combo_list:
        if not combo["enabled"]:
            continue

        test = await session.call_tool("omniroute_test_combo", {
            "comboId": combo["id"],
            "testPrompt": "Return the number 42.",
        })
        test_data = json.loads(test.content[0].text)
        results.append({
            "combo": combo["name"],
            "fastest": test_data["summary"]["fastestProvider"],
            "cheapest": test_data["summary"]["cheapestProvider"],
            "success_rate": f'{test_data["summary"]["successful"]}/{test_data["summary"]["totalProviders"]}',
        })

    print("📊 Combo Benchmark Results:")
    for r in results:
        print(f"  {r['combo']}: fastest={r['fastest']}, cheapest={r['cheapest']}, success={r['success_rate']}")
```

### 🔍 Use Case 4: Post-Mortem Debugging Agent

Агент, который объясняет, почему запрос был направлен на конкретного провайдера.

```typescript
async function debugRouting(client: Client, requestId: string) {
  // Explain the routing decision
  const explanation = await client.callTool({
    name: "omniroute_explain_route",
    arguments: { requestId },
  });
  const data = JSON.parse(explanation.content[0].text);

  console.log(`Request ${requestId}:`);
  console.log(`  Provider: ${data.decision.providerSelected}`);
  console.log(`  Model: ${data.decision.modelUsed}`);
  console.log(`  Score: ${data.decision.score}`);
  console.log(`  Factors:`);
  for (const factor of data.decision.factors) {
    console.log(`    ${factor.name}: ${factor.value} (weight: ${factor.weight})`);
  }
  if (data.decision.fallbacksTriggered.length > 0) {
    console.log(`  Fallbacks triggered:`);
    for (const fb of data.decision.fallbacksTriggered) {
      console.log(`    ${fb.provider}: ${fb.reason}`);
    }
  }
}
```

### 📋 Use Case 5: Model Discovery Agent

Агент, который находит самые дешевые модели для заданной возможности.

```python
async def find_cheapest_models(session, capability="chat"):
    """Find the cheapest available models for a capability."""
    catalog = await session.call_tool("omniroute_list_models_catalog", {
        "capability": capability,
    })
    models = json.loads(catalog.content[0].text)["models"]

    # Filter available models with pricing
    priced = [
        m for m in models
        if m["status"] == "available" and m.get("pricing")
    ]
    priced.sort(key=lambda m: m["pricing"]["inputPerMillion"] or float("inf"))

    print(f"💡 Cheapest {capability} models:")
    for m in priced[:5]:
        input_cost = m["pricing"]["inputPerMillion"] or 0
        output_cost = m["pricing"]["outputPerMillion"] or 0
        print(f"  {m['id']} ({m['provider']}): ${input_cost}/M in, ${output_cost}/M out")
```

---

````

## Безопасность и управление доступом

Сервер MCP поддерживает **точечное управление доступом** для мультитенантных сред:

| Доступ                 | Инструменты                                                                                          |
| --------------------- | ---------------------------------------------------------------------------------------------- |
| `read:health`         | `get_health`, `simulate_route`, `get_provider_metrics`, `best_combo_for_task`, `explain_route` |
| `read:combos`         | `list_combos`, `get_combo_metrics`, `simulate_route`, `best_combo_for_task`, `test_combo`      |
| `read:quota`          | `check_quota`                                                                                  |
| `read:usage`          | `cost_report`, `explain_route`, `get_session_snapshot`                                         |
| `read:models`         | `list_models_catalog`                                                                          |
| `read:cache`          | `cache_stats`                                                                                  |
| `read:compression`    | `compression_status`, `list_compression_combos`, `compression_combo_stats`                     |
| `write:combos`        | `switch_combo`                                                                                 |
| `write:budget`        | `set_budget_guard`                                                                             |
| `write:resilience`    | `set_resilience_profile`                                                                       |
| `write:cache`         | `cache_flush`                                                                                  |
| `write:compression`   | `compression_configure`, `set_compression_engine`                                              |
| `execute:completions` | `route_request`, `test_combo`                                                                  |

**Шаблонные доступы:** Используйте `read:*` для предоставления всех доступов на чтение, или `*` для полного доступа.

---

## Журналирование аудита

Каждый вызов инструмента записывается в таблицу `mcp_tool_audit` SQLite:

- **Входные данные:** SHA-256 хешированы (никогда не хранят сырые запросы)
- **Выходные данные:** Обрезаны до 200 символов
- **Метаданные:** Имя инструмента, длительность, успех/ошибка, ID API ключа

Доступ к данным аудита:

```typescript
import { getRecentAuditEntries, getAuditStats } from "./audit";

const entries = await getRecentAuditEntries(50);
const stats = await getAuditStats();
// stats: { totalCalls, successRate, avgDurationMs, topTools }
````

---

## Структура файлов

```
mcp-server/
├── server.ts              # Настройка сервера MCP, обработчики основных инструментов, точка входа
├── index.ts               # Экспорт барреля
├── audit.ts               # Журналирование аудита SQLite (хеширование входных данных SHA-256)
├── scopeEnforcement.ts    # Точечное управление доступом
├── schemas/
│   ├── tools.ts           # Схемы Zod для основных, кэширующих, сжимающих и проксирующих инструментов
│   ├── a2a.ts             | Типы протокола A2A (Карта агента, Задача, JSON-RPC)
│   ├── audit.ts           # Типы аудита и решений маршрутизации + вспомогательные функции хеширования
│   └── index.ts           # Экспорт барреля схем
├── tools/
│   └── advancedTools.ts   # Обработчики инструментов фазы 2 (8 продвинутых инструментов)
└── __tests__/
    ├── essentialTools.test.ts
    ├── advancedTools.test.ts
    └── a2aLifecycle.test.ts
```

---

## Лицензия

Часть [OmniRoute](https://github.com/diegosouzapw/OmniRoute) — лицензия MIT.
