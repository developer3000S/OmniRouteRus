# OmniRoute A2A Server

> **Протокол Agent-to-Agent v0.3** — Позволяет любому AI-агенту использовать OmniRoute в качестве интеллектуального маршрутизационного агента через JSON-RPC 2.0.

Сервер A2A предоставляет OmniRoute как **первоклассного агента**, который другие агенты могут обнаруживать, делегировать задачи и сотрудничать с использованием [Протокола A2A](https://google.github.io/A2A/).

---

## Архитектура

```
┌──────────────────────────────────────────────────────────────────┐
│                    Оркестратор Агент                             │
│        (LangChain, CrewAI, AutoGen, Пользовательский Агент)     │
└──────────────────────┬───────────────────────────────────────────┘
                       │  1. GET /.well-known/agent.json  (обнаружение)
                       │  2. POST /a2a  (JSON-RPC 2.0)
                       ▼
┌──────────────────────────────────────────────────────────────────┐
│                     OmniRoute A2A Server                         │
│  ┌────────────────┐  ┌────────────────┐  ┌───────────────────┐  │
│  │  Менеджер Задач │  │  Движок Навыков │  │  SSE Streaming    │  │
│  │  (жизненный цикл)│──│  (реестр)     │──│  (в реальном времени)│  │
│  └────────────────┘  └────────┬───────┘  └───────────────────┘  │
│                               │                                  │
│  Навыки:                      │                                  │
│    ├─ smart-routing ──────────┤  ┌────────────────────────────┐  │
│    └─ quota-management ───────┘  │  Журнал Решений Маршрутизации │  │
│                                  └────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────┘
                       │
                       ▼  Внутренний Шлюз OmniRoute
              /v1/chat/completions, /api/combos, /api/usage/quota
```

---

## Быстрый старт

### Обнаружение Агента

Каждый агент, совместимый с A2A, предоставляет **Карту Агента** по адресу `/.well-known/agent.json`:

```bash
curl http://localhost:20128/.well-known/agent.json
```

**Ответ:**

```json
{
  "name": "OmniRoute",
  "description": "Интеллектуальный AI-шлюз с авто-маршрутизацией через 50+ провайдеров",
  "url": "http://localhost:20128/a2a",
  "version": "1.8.1",
  "capabilities": {
    "streaming": true,
    "pushNotifications": false
  },
  "skills": [
    {
      "id": "smart-routing",
      "name": "Умное Маршрутизирование",
      "description": "Маршрутизирует запросы через интеллектуальную конвейерную систему OmniRoute",
      "tags": ["маршрутизация", "llm", "многопровайдерный", "оптимизация-стоимости"],
      "examples": [
        "Напишите hello world на Python",
        "Объясните квантовые вычисления с использованием самого дешевого провайдера"
      ]
    },
    {
      "id": "quota-management",
      "name": "Управление Квотами",
      "description": "Запросы на естественном языке о квотах провайдеров",
      "tags": ["квота", "аналитика", "стоимость"],
      "examples": [
        "Какой провайдер имеет наибольший остаток квоты?",
        "Предложите бесплатный комбо для кодинга"
      ]
    }
  ],
  "authentication": {
    "schemes": ["bearer"],
    "apiKeyHeader": "Authorization"
  }
}
```

---

## JSON-RPC 2.0 Methods

### `message/send` — Синхронное выполнение

Отправьте сообщение в навык и получите полный ответ.

```bash
curl -X POST http://localhost:20128/a2a \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_KEY" \
  -d '{
    "jsonrpc": "2.0",
    "id": "1",
    "method": "message/send",
    "params": {
      "skill": "smart-routing",
      "messages": [{"role": "user", "content": "Write a Python hello world"}],
      "metadata": {"model": "auto", "combo": "fast-coding"}
    }
  }'
```

**Ответ:**

```json
{
  "jsonrpc": "2.0",
  "id": "1",
  "result": {
    "task": { "id": "a1b2c3d4-...", "state": "completed" },
    "artifacts": [{ "type": "text", "content": "print('Hello, World!')" }],
    "metadata": {
      "routing_explanation": "Selected claude-sonnet via provider \"anthropic\" (latency: 1200ms, cost: $0.0030)",
      "cost_envelope": { "estimated": 0.005, "actual": 0.003, "currency": "USD" },
      "resilience_trace": [
        { "event": "primary_selected", "provider": "anthropic", "timestamp": "2026-03-04T..." }
      ],
      "policy_verdict": { "allowed": true, "reason": "within budget and quota limits" }
    }
  }
}
```

### `message/stream` — SSE Streaming

То же самое, что и `message/send`, но возвращает события Server-Sent Events для потоковой передачи в реальном времени.

```bash
curl -N -X POST http://localhost:20128/a2a \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_KEY" \
  -d '{
    "jsonrpc": "2.0",
    "id": "1",
    "method": "message/stream",
    "params": {
      "skill": "smart-routing",
      "messages": [{"role": "user", "content": "Explain quantum computing"}]
    }
  }'
```

**События SSE:**

```
data: {"jsonrpc":"2.0","method":"message/stream","params":{"task":{"id":"...","state":"working"},"chunk":{"type":"text","content":"Quantum computing..."}}}

: heartbeat 2026-03-04T21:00:00Z

data: {"jsonrpc":"2.0","method":"message/stream","params":{"task":{"id":"...","state":"completed"},"metadata":{...}}}
```

### `tasks/get` — Запрос статуса задачи

```bash
curl -X POST http://localhost:20128/a2a \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_KEY" \
  -d '{"jsonrpc":"2.0","id":"2","method":"tasks/get","params":{"taskId":"TASK_UUID"}}'
```

### `tasks/cancel` — Отмена выполняющейся задачи

```bash
curl -X POST http://localhost:20128/a2a \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_KEY" \
  -d '{"jsonrpc":"2.0","id":"3","method":"tasks/cancel","params":{"taskId":"TASK_UUID"}}'
```

---

## Skills Reference

### `smart-routing`

Маршрутизирует запросы через интеллектуальную систему OmniRoute с полной наблюдаемостью.

**Параметры (в `metadata`):**

| Параметр | Тип      | По умолчанию | Описание                                                                                            |
| -------- | -------- | ------------ | --------------------------------------------------------------------------------------------------- |
| `model`  | `string` | `"auto"`     | Целевая модель (например, `claude-sonnet-4`, `gpt-4o`, `auto`)                                      |
| `combo`  | `string` | active combo | Конкретный комбо для маршрутизации                                                                  |
| `budget` | `number` | none         | Максимальная стоимость в USD для этого запроса                                                      |
| `role`   | `string` | none         | Подсказка для роли задачи: `coding`, `review`, `planning`, `analysis`, `debugging`, `documentation` |

**Возвращает:**

| Поле                           | Описание                                                 |
| ------------------------------ | -------------------------------------------------------- |
| `artifacts[].content`          | Текст ответа LLM                                         |
| `metadata.routing_explanation` | Человекочитаемое объяснение решения о маршрутизации      |
| `metadata.cost_envelope`       | Оценка стоимости с валютой                               |
| `metadata.resilience_trace`    | Массив событий (primary_selected, fallback_needed, etc.) |
| `metadata.policy_verdict`      | Разрешён ли запрос и почему                              |

### `quota-management`

Отвечает на естественно-языковые запросы о квотах провайдеров.

**Типы запросов (выводится из содержимого сообщения):**

| Шаблон запроса                                 | Тип ответа                                                              |
| ---------------------------------------------- | ----------------------------------------------------------------------- |
| Содержит `"ranking"`, `"most quota"`, `"best"` | Провайдеры, ранжированные по оставшемуся квоту                          |
| Содержит `"free"`, `"suggest"`                 | Список бесплатных комбо или предложение бесплатных провайдеров          |
| По умолчанию                                   | Полный отчёт о квоте с предупреждениями для провайдеров с низким квотом |

## Жизненный цикл задач

```
submitted ──→ working ──→ completed
                       ──→ failed
              ──────────→ cancelled
```

| Состояние   | Описание                                                                       |
| ----------- | ------------------------------------------------------------------------------ |
| `submitted` | Задача создана, поставлена в очередь на выполнение                             |
| `working`   | Обработчик навыка выполняет задачу                                             |
| `completed` | Выполнение успешно завершено, артефакты доступны                               |
| `failed`    | Выполнение завершилось неудачно или задача истекла (TTL: 5 минут по умолчанию) |
| `cancelled` | Отменена клиентом через `tasks/cancel`                                         |

- Конечные состояния: `completed`, `failed`, `cancelled` (нет дальнейших переходов)
- Истекшие задачи в состоянии `submitted` или `working` автоматически помечаются как `failed`
- Задачи удаляются после 2× TTL

---

## Примеры клиентов

### Python — Оркестраторный агент

```python
"""
A2A Client — Пример на Python.
Обнаруживает агент OmniRoute, отправляет задачу и обрабатывает результат.
"""
import requests
import json

BASE_URL = "http://localhost:20128"
API_KEY = "your-api-key"
HEADERS = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {API_KEY}",
}

# 1. Обнаружение возможностей агента
agent_card = requests.get(f"{BASE_URL}/.well-known/agent.json").json()
print(f"Агент: {agent_card['name']} v{agent_card['version']}")
print(f"Навыки: {[s['id'] for s in agent_card['skills']]}")

# 2. Отправка задачи на умное маршрутизирование
response = requests.post(f"{BASE_URL}/a2a", headers=HEADERS, json={
    "jsonrpc": "2.0",
    "id": "task-1",
    "method": "message/send",
    "params": {
        "skill": "smart-routing",
        "messages": [{"role": "user", "content": "Напишите реализацию быстрой сортировки на Python"}],
        "metadata": {
            "model": "auto",
            "combo": "fast-coding",
            "budget": 0.10,
        }
    }
})
result = response.json()["result"]
print(f"\n📝 Ответ: {result['artifacts'][0]['content'][:200]}...")
print(f"🔀 Маршрутизация: {result['metadata']['routing_explanation']}")
print(f"💰 Стоимость: ${result['metadata']['cost_envelope']['actual']}")
print(f"🛡️ Политика: {result['metadata']['policy_verdict']['reason']}")

# 3. Запрос статуса квоты
quota_resp = requests.post(f"{BASE_URL}/a2a", headers=HEADERS, json={
    "jsonrpc": "2.0",
    "id": "task-2",
    "method": "message/send",
    "params": {
        "skill": "quota-management",
        "messages": [{"role": "user", "content": "Какой провайдер имеет наибольший остаток квоты?"}],
    }
})
quota_result = quota_resp.json()["result"]
print(f"\n📊 Квота: {quota_result['artifacts'][0]['content']}")
```

### TypeScript — Оркестратор с несколькими агентами

```typescript
/**
 * A2A Client — Пример на TypeScript.
 * Показывает обнаружение агентов, делегирование задач и потоковую передачу.
 */

const BASE_URL = "http://localhost:20128";
const API_KEY = "your-api-key";

interface JsonRpcResponse<T = any> {
  jsonrpc: "2.0";
  id: string | number;
  result?: T;
  error?: { code: number; message: string };
}

async function a2aCall<T>(method: string, params: Record<string, any>): Promise<T> {
  const resp = await fetch(`${BASE_URL}/a2a`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: `${method}-${Date.now()}`,
      method,
      params,
    }),
  });
  const json: JsonRpcResponse<T> = await resp.json();
  if (json.error) throw new Error(`[${json.error.code}] ${json.error.message}`);
  return json.result!;
}

// ── Обнаружение агентов ──
const agentCard = await fetch(`${BASE_URL}/.well-known/agent.json`).then((r) => r.json());
console.log(`Подключено к: ${agentCard.name} (${agentCard.skills.length} навыков)`);

// ── Умное маршрутизирование: Отправка задачи на кодирование ──
const routingResult = await a2aCall("message/send", {
  skill: "smart-routing",
  messages: [{ role: "user", content: "Реализуйте обертку для кэша Redis на TypeScript" }],
  metadata: { model: "claude-sonnet-4", role: "coding" },
});
console.log("Ответ:", routingResult.artifacts[0].content);
console.log("Провайдер:", routingResult.metadata.routing_explanation);

// ── Управление квотами: Поиск бесплатных альтернатив ──
const quotaResult = await a2aCall("message/send", {
  skill: "quota-management",
  messages: [{ role: "user", content: "Предложите бесплатные комбинации для документации" }],
});
console.log("Бесплатные комбинации:", quotaResult.artifacts[0].content);

// ── Потоковая передача: Ответ в реальном времени ──
const streamResp = await fetch(`${BASE_URL}/a2a`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
  body: JSON.stringify({
    jsonrpc: "2.0",
    id: "stream-1",
    method: "message/stream",
    params: {
      skill: "smart-routing",
      messages: [{ role: "user", content: "Объясните архитектуру микросервисов" }],
    },
  }),
});

const reader = streamResp.body!.getReader();
const decoder = new TextDecoder();
while (true) {
  const { done, value } = await reader.read();
  if (done) break;
  const chunk = decoder.decode(value);
  for (const line of chunk.split("\n")) {
    if (line.startsWith("data: ")) {
      const event = JSON.parse(line.slice(6));
      if (event.params.chunk) {
        process.stdout.write(event.params.chunk.content);
      }
      if (event.params.task.state === "completed") {
        console.log("\n✅ Поток завершен");
      }
    }
  }
}
```

### Python — Интеграция LangChain с A2A

```python
"""
Интеграция LangChain — Использование OmniRoute A2A в качестве пользовательского LLM.
"""
from langchain.llms.base import BaseLLM
from langchain.schema import LLMResult, Generation
import requests
from typing import List, Optional

class OmniRouteA2A(BaseLLM):
    base_url: str = "http://localhost:20128"
    api_key: str = ""
    model: str = "auto"
    combo: Optional[str] = None

    @property
    def _llm_type(self) -> str:
        return "omniroute-a2a"

    def _call(self, prompt: str, stop: Optional[List[str]] = None, **kwargs) -> str:
        response = requests.post(
            f"{self.base_url}/a2a",
            headers={
                "Content-Type": "application/json",
                "Authorization": f"Bearer {self.api_key}",
            },
            json={
                "jsonrpc": "2.0",
                "id": "langchain-1",
                "method": "message/send",
                "params": {
                    "skill": "smart-routing",
                    "messages": [{"role": "user", "content": prompt}],
                    "metadata": {
                        "model": self.model,
                        **({"combo": self.combo} if self.combo else {}),
                    },
                },
            },
        )
        result = response.json()["result"]
        return result["artifacts"][0]["content"]

    def _generate(self, prompts: List[str], stop=None, **kwargs) -> LLMResult:
        return LLMResult(
            generations=[[Generation(text=self._call(p, stop))] for p in prompts]
        )

# Использование
llm = OmniRouteA2A(
    base_url="http://localhost:20128",
    api_key="your-key",
    model="auto",
    combo="fast-coding",
)
result = llm("Напишите функцию на Python для объединения двух отсортированных списков")
print(result)
```

### Go — Клиент A2A

```go
package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

const baseURL = "http://localhost:20128"
const apiKey = "your-api-key"

type JsonRpcRequest struct {
	Jsonrpc string      `json:"jsonrpc"`
	ID      string      `json:"id"`
	Method  string      `json:"method"`
	Params  interface{} `json:"params"`
}

type JsonRpcResponse struct {
	Jsonrpc string      `json:"jsonrpc"`
	ID      string      `json:"id"`
	Result  interface{} `json:"result"`
	Error   *struct {
		Code    int    `json:"code"`
		Message string `json:"message"`
	} `json:"error"`
}

func a2aCall(method string, params interface{}) (*JsonRpcResponse, error) {
	body, _ := json.Marshal(JsonRpcRequest{
		Jsonrpc: "2.0",
		ID:      "go-1",
		Method:  method,
		Params:  params,
	})

	req, _ := http.NewRequest("POST", baseURL+"/a2a", bytes.NewReader(body))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer "+apiKey)

	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()
	data, _ := io.ReadAll(resp.Body)

	var result JsonRpcResponse
	json.Unmarshal(data, &result)
	return &result, nil
}

func main() {
	// Обнаружение агента
	resp, _ := http.Get(baseURL + "/.well-known/agent.json")
	defer resp.Body.Close()
	body, _ := io.ReadAll(resp.Body)
	fmt.Println("Карта агента:", string(body))

	// Отправка задачи на умное маршрутизирование
	result, _ := a2aCall("message/send", map[string]interface{}{
		"skill":    "smart-routing",
		"messages": []map[string]string{{"role": "user", "content": "Привет из Go!"}},
		"metadata": map[string]interface{}{"model": "auto"},
	})
	out, _ := json.MarshalIndent(result.Result, "", "  ")
	fmt.Println("Результат:", string(out))
}
```

---

## Использование

### 🤖 Использование 1: Многоагентная конвейерная обработка кода

Агент-оркестратор делегирует генерацию кода OmniRoute, а затем передает вывод агент-ревьюеру.

```python
def coding_pipeline(task: str):
    # Шаг 1: Генерация кода через OmniRoute A2A
    code_result = a2a_send("smart-routing", [
        {"role": "user", "content": f"Напишите код высокого качества: {task}"}
    ], metadata={"model": "auto", "role": "coding"})
    code = code_result["artifacts"][0]["content"]

    # Шаг 2: Проверка кода через OmniRoute A2A (другая модель)
    review_result = a2a_send("smart-routing", [
        {"role": "user", "content": f"Проверьте этот код на наличие ошибок и предложений по улучшению:\n\n{code}"}
    ], metadata={"model": "auto", "role": "review"})
    review = review_result["artifacts"][0]["content"]

    # Шаг 3: Проверка стоимости
    print(f"Стоимость кода: ${code_result['metadata']['cost_envelope']['actual']}")
    print(f"Стоимость проверки: ${review_result['metadata']['cost_envelope']['actual']}")

    return {"code": code, "review": review}
```

### 💡 Использование 2: Рой агентов с учетом квоты

Несколько агентов делят квоту через OmniRoute, используя навык управления квотами для координации.

```python
async def quota_aware_agent(agent_name: str, task: str):
    # Проверка квоты перед началом
    quota = a2a_send("quota-management", [
        {"role": "user", "content": "Какой провайдер имеет наибольшее оставшееся количество квоты?"}
    ])
    print(f"[{agent_name}] {quota['artifacts'][0]['content']}")

    # Отправка запроса с ограничением бюджета
    result = a2a_send("smart-routing", [
        {"role": "user", "content": task}
    ], metadata={"budget": 0.05})

    policy = result["metadata"]["policy_verdict"]
    if not policy["allowed"]:
        print(f"[{agent_name}] ⚠️ Превышен бюджет: {policy['reason']}")
        # Переход на бесплатный комбо
        quota = a2a_send("quota-management", [
            {"role": "user", "content": "Предложите бесплатные комбо"}
        ])
        print(f"[{agent_name}] Бесплатные альтернативы: {quota['artifacts'][0]['content']}")

    return result
```

### 📊 Использование 3: Панель мониторинга в реальном времени

Агент мониторинга передает ответы и отображает прогресс в реальном времени.

```typescript
async function streamingDashboard(prompt: string) {
  const response = await fetch(`${BASE_URL}/a2a`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${API_KEY}` },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: "dash-1",
      method: "message/stream",
      params: { skill: "smart-routing", messages: [{ role: "user", content: prompt }] },
    }),
  });

  let totalChunks = 0;
  const reader = response.body!.getReader();
  const decoder = new TextDecoder();

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    for (const line of decoder.decode(value).split("\n")) {
      if (line.startsWith("data: ")) {
        const event = JSON.parse(line.slice(6));
        const state = event.params.task.state;

        if (state === "working" && event.params.chunk) {
          totalChunks++;
          process.stdout.write(
            `\r[Chunk ${totalChunks}] ${event.params.chunk.content.slice(0, 50)}...`
          );
        }
        if (state === "completed") {
          const meta = event.params.metadata;
          console.log(
            `\n✅ Готово | Стоимость: $${meta?.cost_envelope?.actual || 0} | Маршрут: ${meta?.routing_explanation || "N/A"}`
          );
        }
        if (state === "failed") {
          console.error(`\n❌ Ошибка: ${event.params.metadata?.error}`);
        }
      }
    }
  }
}
```

### 🔁 Использование 4: Шаблон опроса задач

Для длительных задач опрашивайте статус задачи вместо ожидания синхронно.

```python
import time

def poll_task(task_id: str, timeout: int = 60):
    """Опрашивать статус задачи до завершения или истечения времени ожидания."""
    start = time.time()
    while time.time() - start < timeout:
        result = requests.post(f"{BASE_URL}/a2a", headers=HEADERS, json={
            "jsonrpc": "2.0",
            "id": "poll-1",
            "method": "tasks/get",
            "params": {"taskId": task_id},
        }).json()

        task = result["result"]["task"]
        state = task["state"]
        print(f"  Задача {task_id[:8]}... состояние={state}")

        if state in ("completed", "failed", "cancelled"):
            return task
        time.sleep(2)

    # Тайм-аут — отменить задачу
    requests.post(f"{BASE_URL}/a2a", headers=HEADERS, json={
        "jsonrpc": "2.0",
        "id": "cancel-1",
        "method": "tasks/cancel",
        "params": {"taskId": task_id},
    })
    raise TimeoutError(f"Задача {task_id} истекла после {timeout}с")
```

---

```

## Коды ошибок

| Код    | Константа                 | Значение                                  |
| ------ | ------------------------ | ---------------------------------------- |
| -32700 | —                        | Ошибка разбора (неверный JSON)           |
| -32600 | `INVALID_REQUEST`        | Неверный запрос JSON-RPC или несанкционированный |
| -32601 | `METHOD_NOT_FOUND`       | Неизвестный метод или навык              |
| -32602 | `INVALID_PARAMS`         | Отсутствующие или неверные параметры     |
| -32603 | `INTERNAL_ERROR`         | Выполнение навыка не удалось             |
| -32001 | `TASK_NOT_FOUND`         | Идентификатор задачи не найден          |
| -32002 | `TASK_ALREADY_COMPLETED` | Невозможно изменить завершенную задачу  |
| -32003 | `UNAUTHORIZED`           | Неверный или отсутствующий API-ключ     |
| -32004 | `BUDGET_EXCEEDED`        | Запрос превышает настроенный бюджет     |
| -32005 | `PROVIDER_UNAVAILABLE`   | Нет доступных провайдеров                |

---

## Аутентификация

Все запросы `/a2a` требуют токен Bearer через заголовок `Authorization`:

```

Authorization: Bearer YOUR_OMNIROUTE_API_KEY

```

Если API-ключ не настроен на сервере (`OMNIROUTE_API_KEY` пуст), аутентификация отключается.

---

## Структура файлов

```

src/lib/a2a/
├── taskManager.ts # Жизненный цикл задач (создание/обновление/отмена/список), TTL, очистка
├── taskExecution.ts # Универсальный исполнитель задач с управлением состоянием
├── streaming.ts # Форматирование потоков SSE, heartbeat, события chunk/completion
├── routingLogger.ts # Логгер решений маршрутизации (статистика, история, хранение)
└── skills/
├── smartRouting.ts # Навык умной маршрутизации (маршрутизация через /v1/chat/completions)
└── quotaManagement.ts # Навык управления квотами (запросы квот на естественном языке)

src/app/a2a/
└── route.ts # Обработчик API-маршрута Next.js (диспетчеризация JSON-RPC 2.0)

open-sse/mcp-server/
└── schemas/a2a.ts # Схемы Zod (AgentCard, Task, JSON-RPC, события SSE)

```

---

## Сравнение: MCP vs A2A

| Функция           | Сервер MCP                   | Сервер A2A                                        |
| ----------------- | ---------------------------- | ------------------------------------------------- |
| **Протокол**      | Протокол контекста модели    | Протокол агент-агент v0.3                        |
| **Транспорт**     | stdio / HTTP                 | HTTP (JSON-RPC 2.0)                             |
| **Обнаружение**   | Список инструментов через MCP | `/.well-known/agent.json`                        |
| **Гранулярность** | 16 отдельных инструментов    | 2 высокоуровневых навыка                         |
| **Лучше всего**   | Агенты IDE (Cursor, VS Code) | Многоагентные системы (LangChain, CrewAI)         |
| **Потоковая передача** | Не поддерживается          | SSE через `message/stream`                       |
| **Отслеживание задач** | Нет                      | Полный жизненный цикл (submitted → completed)    |
| **Наблюдаемость** | Журнал аудита для каждого вызова инструмента | Конверт стоимости + трассировка устойчивости + вердикт политики |

## Лицензия

Часть [OmniRoute](https://github.com/diegosouzapw/OmniRoute) — Лицензия MIT.
```
