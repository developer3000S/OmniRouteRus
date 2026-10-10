# A2A-SERVER (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../frameworks/A2A-SERVER.md) · 🇸🇦 [ar](../../../ar/docs/frameworks/A2A-SERVER.md) · 🇦🇿 [az](../../../az/docs/frameworks/A2A-SERVER.md) · 🇧🇬 [bg](../../../bg/docs/frameworks/A2A-SERVER.md) · 🇧🇩 [bn](../../../bn/docs/frameworks/A2A-SERVER.md) · 🇨🇿 [cs](../../../cs/docs/frameworks/A2A-SERVER.md) · 🇩🇰 [da](../../../da/docs/frameworks/A2A-SERVER.md) · 🇩🇪 [de](../../../de/docs/frameworks/A2A-SERVER.md) · 🇪🇸 [es](../../../es/docs/frameworks/A2A-SERVER.md) · 🇮🇷 [fa](../../../fa/docs/frameworks/A2A-SERVER.md) · 🇫🇮 [fi](../../../fi/docs/frameworks/A2A-SERVER.md) · 🇫🇷 [fr](../../../fr/docs/frameworks/A2A-SERVER.md) · 🇮🇳 [gu](../../../gu/docs/frameworks/A2A-SERVER.md) · 🇮🇱 [he](../../../he/docs/frameworks/A2A-SERVER.md) · 🇮🇳 [hi](../../../hi/docs/frameworks/A2A-SERVER.md) · 🇭🇺 [hu](../../../hu/docs/frameworks/A2A-SERVER.md) · 🇮🇩 [id](../../../id/docs/frameworks/A2A-SERVER.md) · 🇮🇩 [in](../../../in/docs/frameworks/A2A-SERVER.md) · 🇮🇹 [it](../../../it/docs/frameworks/A2A-SERVER.md) · 🇯🇵 [ja](../../../ja/docs/frameworks/A2A-SERVER.md) · 🇰🇷 [ko](../../../ko/docs/frameworks/A2A-SERVER.md) · 🇮🇳 [mr](../../../mr/docs/frameworks/A2A-SERVER.md) · 🇲🇾 [ms](../../../ms/docs/frameworks/A2A-SERVER.md) · 🇳🇱 [nl](../../../nl/docs/frameworks/A2A-SERVER.md) · 🇳🇴 [no](../../../no/docs/frameworks/A2A-SERVER.md) · 🇵🇭 [phi](../../../phi/docs/frameworks/A2A-SERVER.md) · 🇵🇱 [pl](../../../pl/docs/frameworks/A2A-SERVER.md) · 🇵🇹 [pt](../../../pt/docs/frameworks/A2A-SERVER.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/frameworks/A2A-SERVER.md) · 🇷🇴 [ro](../../../ro/docs/frameworks/A2A-SERVER.md) · 🇸🇰 [sk](../../../sk/docs/frameworks/A2A-SERVER.md) · 🇸🇪 [sv](../../../sv/docs/frameworks/A2A-SERVER.md) · 🇰🇪 [sw](../../../sw/docs/frameworks/A2A-SERVER.md) · 🇮🇳 [ta](../../../ta/docs/frameworks/A2A-SERVER.md) · 🇮🇳 [te](../../../te/docs/frameworks/A2A-SERVER.md) · 🇹🇭 [th](../../../th/docs/frameworks/A2A-SERVER.md) · 🇹🇷 [tr](../../../tr/docs/frameworks/A2A-SERVER.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/frameworks/A2A-SERVER.md) · 🇵🇰 [ur](../../../ur/docs/frameworks/A2A-SERVER.md) · 🇻🇳 [vi](../../../vi/docs/frameworks/A2A-SERVER.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/frameworks/A2A-SERVER.md)

---

---

title: "Документация сервера OmniRoute A2A"
version: 3.8.2
lastUpdated: 2026-05-13
---

# Документация сервера OmniRoute A2A

> Протокол Agent-to-Agent v0.3 — OmniRoute как интеллектуальный маршрутизатор

Поверхность A2A имеет два интерфейса:

- **JSON-RPC 2.0** по адресу `POST /a2a` (каноническая точка входа, определена в `src/app/a2a/route.ts`).
- **REST** по адресу `/api/a2a/*` для дашбордов и инструментов (статус, список задач, отмена).

Задачи отслеживаются через `A2ATaskManager` (`src/lib/a2a/taskManager.ts`, стандартный TTL 5 минут). Навыки диспетчеризуются через `A2A_SKILL_HANDLERS` в `src/lib/a2a/taskExecution.ts`.

## Обнаружение агента

```bash
curl http://localhost:20128/.well-known/agent.json
```

Возвращает карту агента, описывающую возможности, навыки и требования к аутентификации OmniRoute.

Поле `version` карты агента берется из `process.env.npm_package_version` (см. `src/app/.well-known/agent.json/route.ts:13`), поэтому оно автоматически синхронизируется с `package.json` при каждом релизе.

---

## Аутентификация

Все запросы к `/a2a` требуют API-ключ через заголовок `Authorization`:

```
Authorization: Bearer YOUR_OMNIROUTE_API_KEY
```

Если на сервере не настроен API-ключ, аутентификация отключается.

## Включение

A2A управляется переключателем **Endpoints → A2A** и отключен по умолчанию. При отключении `GET /api/a2a/status` возвращает `status: "disabled"` и `online: false`; вызовы JSON-RPC к `POST /a2a` возвращают HTTP 503 с кодом ошибки JSON-RPC `-32000`.

---

## Методы JSON-RPC 2.0

### `message/send` — Синхронное выполнение

Отправляет сообщение навыку и ожидает полного ответа.

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
      "messages": [{"role": "user", "content": "Write a hello world in Python"}],
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
    "task": { "id": "uuid", "state": "completed" },
    "artifacts": [{ "type": "text", "content": "..." }],
    "metadata": {
      "routing_explanation": "Selected claude-sonnet via provider \"anthropic\" (latency: 1200ms, cost: $0.003)",
      "cost_envelope": { "estimated": 0.005, "actual": 0.003, "currency": "USD" },
      "resilience_trace": [
        { "event": "primary_selected", "provider": "anthropic", "timestamp": "..." }
      ],
      "policy_verdict": { "allowed": true, "reason": "within budget and quota limits" }
    }
  }
}
```

### `message/stream` — Потоковое SSE

То же, что и `message/send`, но возвращает события Server-Sent Events для потоковой передачи в реальном времени.

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
data: {"jsonrpc":"2.0","method":"message/stream","params":{"task":{"id":"...","state":"working"},"chunk":{"type":"text","content":"..."}}}

: heartbeat 2026-03-03T17:00:00Z

data: {"jsonrpc":"2.0","method":"message/stream","params":{"task":{"id":"...","state":"completed"},"metadata":{...}}}
```

### `tasks/get` — Запрос статуса задачи

```bash
curl -X POST http://localhost:20128/a2a \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_KEY" \
  -d '{"jsonrpc":"2.0","id":"2","method":"tasks/get","params":{"taskId":"TASK_UUID"}}'
```

### `tasks/cancel` — Отмена задачи

```bash
curl -X POST http://localhost:20128/a2a \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_KEY" \
  -d '{"jsonrpc":"2.0","id":"3","method":"tasks/cancel","params":{"taskId":"TASK_UUID"}}'
```

---

## Доступные навыки

OmniRoute предоставляет 5 A2A навыков, подключенных в `src/lib/a2a/taskExecution.ts::A2A_SKILL_HANDLERS`. Каждый модуль навыка находится в `src/lib/a2a/skills/`.

| Навык               | ID                   | Описание                                                                                                            |
| :------------------ | :------------------- | :------------------------------------------------------------------------------------------------------------------ |
| Умная маршрутизация | `smart-routing`      | Маршрутизирует запрос через оптимального провайдера/комбинацию, используя движок комбинаций OmniRoute + оценку      |
| Управление квотами  | `quota-management`   | Сообщает состояние квоты по провайдерам, помогает вызывающим определить, когда нужно снижать нагрузку/переключаться |
| Поиск провайдеров   | `provider-discovery` | Перечисляет установленных провайдеров с возможностями, флагами бесплатного уровня, статусом OAuth                   |
| Анализ стоимости    | `cost-analysis`      | Оценивает стоимость запроса/разговора на основе каталога + недавнего использования                                  |
| Отчет о состоянии   | `health-report`      | Агрегирует состояние автоматического выключателя, охлаждения, блокировки по провайдерам                             |

> Примечание: описание карты агента в настоящее время рекламирует "36+ провайдеров" (`src/app/.well-known/agent.json/route.ts:26` и `:55`). Фактический каталог вырос до 180+ провайдеров — строку следует обновить в последующем изменении (отслеживается как отдельный документ/код TODO; не изменено здесь).

---

## REST API (вспомогательный)

Конечная точка JSON-RPC `/a2a` является канонической точкой входа A2A. Нижеприведенные REST-конечные точки предоставляют вспомогательный доступ для дашбордов и внешнего инструментария:

| Конечная точка               | Метод | Описание                                  | Авторизация                   |
| :--------------------------- | :---- | :---------------------------------------- | :---------------------------- |
| `/api/a2a/status`            | GET   | Статус сервера, зарегистрированные навыки | (публичный)                   |
| `/api/a2a/tasks`             | GET   | Список задач с фильтрами                  | управление                    |
| `/api/a2a/tasks/[id]`        | GET   | Получить задачу по ID                     | управление                    |
| `/api/a2a/tasks/[id]/cancel` | POST  | Отменить выполняющуюся задачу             | управление                    |
| `/.well-known/agent.json`    | GET   | Карта агента (обнаружение A2A)            | (публичный, кэшируется 3600s) |

---

## Добавление нового навыка

1. **Создать файл навыка:** `src/lib/a2a/skills/<your-skill>.ts`

   Экспортируйте асинхронную функцию `(task: A2ATask) => Promise<{ artifacts, metadata }>`. Следуйте форме существующих навыков, таких как `smartRouting.ts`.

2. **Зарегистрировать обработчик:** в `src/lib/a2a/taskExecution.ts`, добавьте запись в `A2A_SKILL_HANDLERS`:

   ```typescript
   export const A2A_SKILL_HANDLERS = {
     // ...существующие навыки
     "your-skill": async (task) => {
       const skillModule = await import("./skills/yourSkill");
       return skillModule.executeYourSkill(task);
     },
   };
   ```

3. **Показать в карте агента:** в `src/app/.well-known/agent.json/route.ts`, добавьте в массив `skills`:

   ```json
   {
     "id": "your-skill",
     "name": "Your Skill",
     "description": "Краткое, сфокусированное на намерении описание",
     "tags": ["routing", "quota"],
     "examples": ["Пример вызова на естественном языке"]
   }
   ```

4. **Написать тесты:** `tests/unit/a2a-<your-skill>.test.ts`. Покрыть счастливый путь + путь ошибки.

5. **Документировать** новый навык в таблице `Available Skills` этого файла.

## TTL задачи

Задачи истекают через `ttlMinutes` (по умолчанию 5 минут) — настраивается в конструкторе `A2ATaskManager` в файле `src/lib/a2a/taskManager.ts:82`. Для настройки форкните инстанцирование `A2ATaskManager` и передайте другое значение (например, `new A2ATaskManager(15)` для TTL в 15 минут). Фоновый интервал очищает истекшие задачи каждые 60 секунд.

---

## Жизненный цикл задачи

```
submitted → working → completed
                    → failed
                    → cancelled
```

- Задачи истекают через 5 минут по умолчанию (см. [TTL задачи](#task-ttl))
- Терминальные состояния: `completed`, `failed`, `cancelled`
- Журнал событий отслеживает каждое изменение состояния

---

## Коды ошибок

| Код    | Значение                         |
| :----- | :------------------------------- |
| -32700 | Ошибка парсинга (неверный JSON)  |
| -32600 | Неверный запрос / Не авторизован |
| -32601 | Метод или навык не найден        |
| -32602 | Неверные параметры               |
| -32603 | Внутренняя ошибка                |
| -32000 | Конечная точка A2A отключена     |

---

## Примеры интеграции

### Python (requests)

```python
import requests

resp = requests.post("http://localhost:20128/a2a", json={
    "jsonrpc": "2.0", "id": "1",
    "method": "message/send",
    "params": {
        "skill": "smart-routing",
        "messages": [{"role": "user", "content": "Hello"}]
    }
}, headers={"Authorization": "Bearer YOUR_KEY"})

result = resp.json()["result"]
print(result["artifacts"][0]["content"])
print(result["metadata"]["routing_explanation"])
```

### TypeScript (fetch)

```typescript
const resp = await fetch("http://localhost:20128/a2a", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer YOUR_KEY",
  },
  body: JSON.stringify({
    jsonrpc: "2.0",
    id: "1",
    method: "message/send",
    params: {
      skill: "smart-routing",
      messages: [{ role: "user", content: "Hello" }],
    },
  }),
});
const { result } = await resp.json();
console.log(result.metadata.routing_explanation);
```
