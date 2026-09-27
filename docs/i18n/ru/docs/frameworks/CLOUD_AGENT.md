# CLOUD_AGENT (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../frameworks/CLOUD_AGENT.md) · 🇸🇦 [ar](../../../ar/docs/frameworks/CLOUD_AGENT.md) · 🇦🇿 [az](../../../az/docs/frameworks/CLOUD_AGENT.md) · 🇧🇬 [bg](../../../bg/docs/frameworks/CLOUD_AGENT.md) · 🇧🇩 [bn](../../../bn/docs/frameworks/CLOUD_AGENT.md) · 🇨🇿 [cs](../../../cs/docs/frameworks/CLOUD_AGENT.md) · 🇩🇰 [da](../../../da/docs/frameworks/CLOUD_AGENT.md) · 🇩🇪 [de](../../../de/docs/frameworks/CLOUD_AGENT.md) · 🇪🇸 [es](../../../es/docs/frameworks/CLOUD_AGENT.md) · 🇮🇷 [fa](../../../fa/docs/frameworks/CLOUD_AGENT.md) · 🇫🇮 [fi](../../../fi/docs/frameworks/CLOUD_AGENT.md) · 🇫🇷 [fr](../../../fr/docs/frameworks/CLOUD_AGENT.md) · 🇮🇳 [gu](../../../gu/docs/frameworks/CLOUD_AGENT.md) · 🇮🇱 [he](../../../he/docs/frameworks/CLOUD_AGENT.md) · 🇮🇳 [hi](../../../hi/docs/frameworks/CLOUD_AGENT.md) · 🇭🇺 [hu](../../../hu/docs/frameworks/CLOUD_AGENT.md) · 🇮🇩 [id](../../../id/docs/frameworks/CLOUD_AGENT.md) · 🇮🇩 [in](../../../in/docs/frameworks/CLOUD_AGENT.md) · 🇮🇹 [it](../../../it/docs/frameworks/CLOUD_AGENT.md) · 🇯🇵 [ja](../../../ja/docs/frameworks/CLOUD_AGENT.md) · 🇰🇷 [ko](../../../ko/docs/frameworks/CLOUD_AGENT.md) · 🇮🇳 [mr](../../../mr/docs/frameworks/CLOUD_AGENT.md) · 🇲🇾 [ms](../../../ms/docs/frameworks/CLOUD_AGENT.md) · 🇳🇱 [nl](../../../nl/docs/frameworks/CLOUD_AGENT.md) · 🇳🇴 [no](../../../no/docs/frameworks/CLOUD_AGENT.md) · 🇵🇭 [phi](../../../phi/docs/frameworks/CLOUD_AGENT.md) · 🇵🇱 [pl](../../../pl/docs/frameworks/CLOUD_AGENT.md) · 🇵🇹 [pt](../../../pt/docs/frameworks/CLOUD_AGENT.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/frameworks/CLOUD_AGENT.md) · 🇷🇴 [ro](../../../ro/docs/frameworks/CLOUD_AGENT.md) · 🇸🇰 [sk](../../../sk/docs/frameworks/CLOUD_AGENT.md) · 🇸🇪 [sv](../../../sv/docs/frameworks/CLOUD_AGENT.md) · 🇰🇪 [sw](../../../sw/docs/frameworks/CLOUD_AGENT.md) · 🇮🇳 [ta](../../../ta/docs/frameworks/CLOUD_AGENT.md) · 🇮🇳 [te](../../../te/docs/frameworks/CLOUD_AGENT.md) · 🇹🇭 [th](../../../th/docs/frameworks/CLOUD_AGENT.md) · 🇹🇷 [tr](../../../tr/docs/frameworks/CLOUD_AGENT.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/frameworks/CLOUD_AGENT.md) · 🇵🇰 [ur](../../../ur/docs/frameworks/CLOUD_AGENT.md) · 🇻🇳 [vi](../../../vi/docs/frameworks/CLOUD_AGENT.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/frameworks/CLOUD_AGENT.md)

---

---
title: "Cloud Agents"
version: 3.8.2
lastUpdated: 2026-05-13
---

# Cloud Agents

> **Источник истины:** `src/lib/cloudAgent/` и `src/app/api/v1/agents/tasks/`
> **Последнее обновление:** 2026-05-13 — v3.8.0

OmniRoute управляет сторонними облачными кодирующими агентами (Codex Cloud, Devin,
Jules) как долгосрочными задачами. Каждый агент обёрнут за единый интерфейс, чтобы
клиенты могли отправлять запрос + URL репозитория и получать результаты без работы
со специфичными для провайдера API.

Задача Cloud Agent **не** является обычным завершением чата. Это долговечная,
многошаговая единица работы, которая может занять от минут до часов, может
производить Pull Request как артефакт, и поддерживает последующие сообщения и
(в некоторых провайдерах) шлюзы утверждения плана.

![Жизненный цикл задачи Cloud Agent](../diagrams/exported/cloud-agent-flow.svg)

> Источник: [diagrams/cloud-agent-flow.mmd](../diagrams/cloud-agent-flow.mmd)

## Поддерживаемые агенты

| Идентификатор провайдера | Класс             | Источник                               | Базовый URL провайдера                       | Утверждение плана |
| ------------------------ | ----------------- | --------------------------------------- | --------------------------------------------- | ----------------- |
| `jules`                  | `JulesAgent`      | `src/lib/cloudAgent/agents/jules.ts`    | `https://jules.googleapis.com/v1alpha`         | Да                |
| `devin`                  | `DevinAgent`      | `src/lib/cloudAgent/agents/devin.ts`   | `https://api.devin.ai/v1`                     | Да                |
| `codex-cloud`            | `CodexCloudAgent` | `src/lib/cloudAgent/agents/codex.ts`   | `https://api.openai.com/v1/codex/cloud`        | Нет (авто)        |

Реестр: `src/lib/cloudAgent/registry.ts` — экспортирует `getAgent(providerId)`,
`getAvailableAgents()`, и `isCloudAgentProvider(providerId)`. Реестр — это
обычная in-memory `Record<string, CloudAgentBase>`, заполняемая при загрузке модуля.

## Архитектура

```
Клиент (Dashboard / CLI / API)
  → POST /api/v1/agents/tasks (требуется управление аутентификацией)
    → Валидация CreateCloudAgentTaskSchema (Zod)
    → registry.getAgent(providerId)
    → getCloudAgentCredentials(providerId)
      └─ извлекает из getProviderConnections({ provider, isActive: true })
         (apiKey сначала, затем accessToken)
    → agent.createTask({ prompt, source, options }, credentials)
      └─ HTTP POST к API провайдера
      └─ возвращает CloudAgentTask с внутренним id + externalId
    → insertCloudAgentTask(...) в cloud_agent_tasks (SQLite)

Опрос (ленивая синхронизация при чтении):
  GET /api/v1/agents/tasks/[id]
    → getCloudAgentTaskById(id)
    → agent.getStatus(externalId, credentials)  // обновляет статус + активности
    → updateCloudAgentTask(...) с новым статусом, результатом, completed_at
    → возвращает сериализованную задачу

Взаимодействия:
  POST /api/v1/agents/tasks/[id]  тело: { action: "approve" | "message" | "cancel" }
    → agent.approvePlan(externalId, credentials)        для "approve"
    → agent.sendMessage(externalId, message, credentials) для "message"
    → статус меняется на "cancelled"                       для "cancel" (только локально)
```

Синхронизация **ленивая**: статус обновляется из внешнего источника при каждом `GET /tasks/[id]`.
Нет фонового опроса. Дашборды, которые нуждаются в актуальном состоянии, должны опрашивать
конечную точку GET с разумным интервалом.

## `CloudAgentBase` Интерфейс

Источник: `src/lib/cloudAgent/baseAgent.ts`

```typescript
export interface AgentCredentials {
  apiKey: string;
  baseUrl?: string;
}

export interface CreateTaskParams {
  prompt: string;
  source: CloudAgentSource;
  options: {
    autoCreatePr?: boolean;
    planApprovalRequired?: boolean;
    environment?: Record<string, string>;
  };
}

export interface GetStatusResult {
  status: CloudAgentStatus;
  externalId?: string;
  result?: CloudAgentResult;
  activities: CloudAgentActivity[];
  error?: string;
}

export abstract class CloudAgentBase {
  abstract readonly providerId: string;
  abstract readonly baseUrl: string;

  abstract createTask(p: CreateTaskParams, c: AgentCredentials): Promise<CloudAgentTask>;
  abstract getStatus(externalId: string, c: AgentCredentials): Promise<GetStatusResult>;
  abstract approvePlan(externalId: string, c: AgentCredentials): Promise<void>;
  abstract sendMessage(
    externalId: string,
    message: string,
    c: AgentCredentials
  ): Promise<CloudAgentActivity>;
  abstract listSources(
    c: AgentCredentials
  ): Promise<{ name: string; url: string; branch?: string }[]>;

  protected mapStatus(raw: string): CloudAgentStatus; // эвристический upstream-string → enum
  protected generateTaskId(): string; // `task_<ts>_<rand>`
  protected generateActivityId(): string; // `act_<ts>_<rand>`
}
```

`CodexCloudAgent.approvePlan` намеренно вызывает ошибку — Codex Cloud автоматически создает план и не имеет шлюза для утверждения. `CodexCloudAgent.listSources` возвращает `[]`.

## Типы домена

Источник: `src/lib/cloudAgent/types.ts`

```typescript
export const CLOUD_AGENT_STATUS = {
  QUEUED: "queued",
  RUNNING: "running",
  AWAITING_APPROVAL: "awaiting_approval",
  COMPLETED: "completed",
  FAILED: "failed",
  CANCELLED: "cancelled",
} as const;

export interface CloudAgentSource {
  repoName: string;
  repoUrl: string; // должен быть действительным URL
  branch?: string;
}

export interface CloudAgentResult {
  prUrl?: string;
  prNumber?: number;
  commitMessage?: string;
  diffUrl?: string;
  summary?: string;
  duration?: number; // секунды, положительное целое число
  cost?: number; // положительное число с плавающей точкой
}

export interface CloudAgentActivity {
  id: string;
  type: "plan" | "command" | "code_change" | "message" | "error" | "completion";
  content: string;
  timestamp: string; // ISO 8601
  metadata?: Record<string, unknown>;
}

export interface CloudAgentTask {
  id: string; // внутренний `task_...` id
  providerId: "jules" | "devin" | "codex-cloud";
  externalId?: string; // id поставщика upstream
  status: CloudAgentStatus;
  prompt: string; // 1..10000 символов
  source: CloudAgentSource;
  options: {
    autoCreatePr?: boolean;
    planApprovalRequired?: boolean;
    environment?: Record<string, string>;
  };
  result?: CloudAgentResult;
  activities: CloudAgentActivity[];
  error?: string;
  createdAt: string;
  updatedAt: string;
  completedAt?: string;
}
```

Схемы валидации (`CreateCloudAgentTaskSchema`, `UpdateCloudAgentTaskSchema`) экспортируются вместе с типами и используются обработчиками маршрутов.

## База данных

Источник: `src/lib/cloudAgent/db.ts` — таблица создается лениво через
`createCloudAgentTaskTable()` (также вызывается из `src/lib/cloudAgent/index.ts`
при импорте модуля).

```sql
CREATE TABLE IF NOT EXISTS cloud_agent_tasks (
  id           TEXT PRIMARY KEY,
  provider_id  TEXT NOT NULL,
  external_id  TEXT,
  status       TEXT NOT NULL DEFAULT 'queued',
  prompt       TEXT NOT NULL,
  source       TEXT NOT NULL,             -- JSON
  options      TEXT DEFAULT '{}',         -- JSON
  result       TEXT,                       -- JSON
  activities   TEXT DEFAULT '[]',          -- JSON
  error        TEXT,
  created_at   TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at   TEXT NOT NULL DEFAULT (datetime('now')),
  completed_at TEXT
);
CREATE INDEX IF NOT EXISTS idx_cloud_agent_tasks_provider ON cloud_agent_tasks(provider_id);
CREATE INDEX IF NOT EXISTS idx_cloud_agent_tasks_status   ON cloud_agent_tasks(status);
CREATE INDEX IF NOT EXISTS idx_cloud_agent_tasks_created  ON cloud_agent_tasks(created_at DESC);
```

`updateCloudAgentTask` применяет **белый список столбцов** для предотвращения SQL-инъекций:
`status`, `prompt`, `source`, `options`, `result`, `activities`, `error`,
`completed_at`. Любой другой ключ в частичном обновлении игнорируется.

## REST API — Жизненный цикл задачи

**Аутентификация:** Все конечные точки `/api/v1/agents/tasks*` требуют **управления аутентификацией**
(`requireCloudAgentManagementAuth` оборачивает `requireManagementAuth` из
`src/lib/api/requireManagementAuth`). Это обеспечивается после коммита `588a0333`
(_"fix(auth): require management auth for agent and cooldown APIs"_).

| Метод   | Путь                          | Назначение                                                |
| ------- | ----------------------------- | ------------------------------------------------------ |
| OPTIONS | `/api/v1/agents/tasks`        | CORS preflight                                         |
| GET     | `/api/v1/agents/tasks`        | Список задач (фильтр: `provider`, `status`, `limit≤500`) |
| POST    | `/api/v1/agents/tasks`        | Создать задачу (отправляет вверх по цепочке + сохраняет)        |
| DELETE  | `/api/v1/agents/tasks?id=...` | Удалить задачу по идентификатору запроса (не отменяет вверх по цепочке) |
| OPTIONS | `/api/v1/agents/tasks/[id]`   | CORS preflight                                         |
| GET     | `/api/v1/agents/tasks/[id]`   | Прочитать задачу + ленивая синхронизация статуса из вверх по цепочке             |
| POST    | `/api/v1/agents/tasks/[id]`   | Действие: `approve` / `message` / `cancel`               |
| DELETE  | `/api/v1/agents/tasks/[id]`   | Удалить задачу по идентификатору пути                                 |

### Создать задачу

```bash
curl -X POST http://localhost:20128/api/v1/agents/tasks \
  -H "Cookie: auth_token=..." \
  -H "Content-Type: application/json" \
  -d '{
    "providerId": "devin",
    "prompt": "Fix the bug in src/foo.ts where the parser returns null",
    "source": {
      "repoName": "user/repo",
      "repoUrl": "https://github.com/user/repo",
      "branch": "main"
    },
    "options": {
      "autoCreatePr": true,
      "planApprovalRequired": false
    }
  }'
```

Ответ `201`:

```json
{
  "data": {
    "id": "task_1731512345678_abc123def",
    "providerId": "devin",
    "externalId": "session_xyz",
    "status": "queued",
    "prompt": "...",
    "source": { "repoName": "user/repo", "repoUrl": "...", "branch": "main" },
    "options": { "autoCreatePr": true },
    "createdAt": "2026-05-13T12:34:56.789Z"
  }
}
```

### Одобрить план

```bash
curl -X POST http://localhost:20128/api/v1/agents/tasks/<id> \
  -H "Cookie: auth_token=..." \
  -H "Content-Type: application/json" \
  -d '{"action":"approve"}'
```

### Отправить сообщение для дальнейшего обсуждения

```bash
curl -X POST http://localhost:20128/api/v1/agents/tasks/<id> \
  -d '{"action":"message","message":"Also add a unit test for the parser"}'
```

### Отменить (только локальный статус)

```bash
curl -X POST http://localhost:20128/api/v1/agents/tasks/<id> \
  -d '{"action":"cancel"}'
```

`cancel` изменяет `status` на `"cancelled"` в локальной БД, но **не** вызывает вверх по цепочке поставщика — в `CloudAgentBase` нет RPC для отмены. Чтобы остановить списание средств вверх по цепочке, завершите задачу в консоли собственного поставщика.

## REST API — Cloud Provider Plumbing

Эти вспомогательные конечные точки под `src/app/api/cloud/` используются удаленными клиентами
(CLI, Electron приложение или синхронизационные рабочие процессы) для чтения метаданных подключения к провайдеру
и разрешения псевдонимов моделей. Они аутентифицируются с помощью **обычного API ключа**
(через `validateApiKey`), а не с использованием управления аутентификацией, используемого конечными точками задач.

| Метод | Путь                            | Назначение                                                             |
| ------ | ------------------------------- | ----------------------------------------------------------------------- |
| POST   | `/api/cloud/auth`               | Проверка API ключа, возврат замаскированных метаданных подключения + псевдонимы моделей |
| PUT    | `/api/cloud/credentials/update` | Обновление `accessToken` / `refreshToken` / `expiresAt`                |
| POST   | `/api/cloud/model/resolve`      | Разрешение псевдонима модели в `{ provider, model }`                      |
| GET    | `/api/cloud/models/alias`       | Список всех псевдонимов моделей                                              |
| PUT    | `/api/cloud/models/alias`       | Установка псевдонима модели (и автоматическая синхронизация с Cloud, если включена)               |

`/api/cloud/auth` никогда не возвращает сырые `apiKey` / `accessToken` / `refreshToken`. Он
возвращает `hasApiKey`, `hasAccessToken`, `hasRefreshToken`, и замаскированный превью
(`maskedApiKey`: первые 4 + `****` + последние 4).

## Разрешение учетных данных

`getCloudAgentCredentials(providerId)` в `src/lib/cloudAgent/api.ts`:

1. Загружает активные подключения к провайдерам через `getProviderConnections({ provider: providerId, isActive: true })`.
2. Для каждого подключения предпочитает `apiKey` (обрезанный). В случае отсутствия переходит к `accessToken`.
3. Возвращает первый непустой токен, обернутый как `{ apiKey: token }`.
4. Возвращает `null`, если не найден подходящий токен — API отвечает `400` с
   `"No active credentials configured for cloud agent provider: <id>"`.

Это означает, что Cloud Agents повторно используют ту же таблицу подключений к провайдерам, что и обычные LLM
провайдеры. Для включения Jules создайте активное подключение с `provider: "jules"`
и заполненным `apiKey`.

## Панель управления

Источник: `src/app/(dashboard)/dashboard/cloud-agents/page.tsx`

Страница React с `"use client"`, которая:

- Выводит список задач (опрашивается через `GET /api/v1/agents/tasks`).
- Отправляет новые задачи через форму, которая отображается в `CreateCloudAgentTaskSchema`.
- Показывает статусы (`queued`, `running`, `awaiting_approval`, `completed`,
  `failed`, `cancelled`) и отображает временную шкалу `activities[]`.
- Отображает `result.prUrl` / `commitMessage` / `summary` при `status === "completed"`.

## Интеграция с A2A

Cloud Agents могут быть представлены как навыки A2A, зарегистрировав навык A2A, который делегирует
свой обработчик `tasks/send` в `getAgent(...).createTask(...)` и преобразует события статуса задачи A2A в протокол JSON-RPC 2.0. Смотрите [A2A-SERVER.md](./A2A-SERVER.md).

## Добавление нового Cloud Agent

1. Создайте `src/lib/cloudAgent/agents/<name>.ts`, расширяющий `CloudAgentBase`.
2. Реализуйте `createTask`, `getStatus`, `approvePlan` (или выбросьте исключение, если не применимо),
   `sendMessage`, `listSources`. Используйте `this.mapStatus(...)` для нормализации статуса.
3. Зарегистрируйте в `src/lib/cloudAgent/registry.ts` под стабильным `providerId`.
4. Расширьте литерал `providerId` в `src/lib/cloudAgent/types.ts`
   (`CloudAgentTask.providerId` и `CreateCloudAgentTaskSchema`).
5. Добавьте провайдера в `src/shared/constants/providers.ts`, если он требует записи подключения.
   OAuth-базированные провайдеры также требуют `src/lib/oauth/providers/`.
6. Добавьте тесты под `tests/unit/cloud-agent-*.test.ts`.
7. Обновите эту документацию и константу `CLOUD_AGENTS` на панели управления.

## Конфигурация

| Переменная среды | Назначение                                                                 |
| ---------------- | -------------------------------------------------------------------------- |
| `DATA_DIR`       | Расположение базы данных SQLite, содержащей `cloud_agent_tasks`            |
| `JWT_SECRET`     | Требуется для аутентификации на эндпоинтах задач                          |
| `API_KEY_SECRET` | Требуется для шифрования учетных данных подключения провайдера в состоянии |

На данный момент нет переменных среды, специфичных для Cloud-Agent — все секреты хранятся в таблице `provider_connections`.

## Смотрите также

- [A2A-SERVER.md](./A2A-SERVER.md)
- [API_REFERENCE.md](../reference/API_REFERENCE.md)
- [SKILLS.md](./SKILLS.md)
- [MEMORY.md](./MEMORY.md)
- Источник: `src/lib/cloudAgent/`
- Маршруты: `src/app/api/v1/agents/tasks/`, `src/app/api/cloud/`
- Панель управления: `src/app/(dashboard)/dashboard/cloud-agents/page.tsx`
