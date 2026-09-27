# AGENT_PROTOCOLS_GUIDE (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../frameworks/AGENT_PROTOCOLS_GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/frameworks/AGENT_PROTOCOLS_GUIDE.md) · 🇦🇿 [az](../../../az/docs/frameworks/AGENT_PROTOCOLS_GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/frameworks/AGENT_PROTOCOLS_GUIDE.md) · 🇧🇩 [bn](../../../bn/docs/frameworks/AGENT_PROTOCOLS_GUIDE.md) · 🇨🇿 [cs](../../../cs/docs/frameworks/AGENT_PROTOCOLS_GUIDE.md) · 🇩🇰 [da](../../../da/docs/frameworks/AGENT_PROTOCOLS_GUIDE.md) · 🇩🇪 [de](../../../de/docs/frameworks/AGENT_PROTOCOLS_GUIDE.md) · 🇪🇸 [es](../../../es/docs/frameworks/AGENT_PROTOCOLS_GUIDE.md) · 🇮🇷 [fa](../../../fa/docs/frameworks/AGENT_PROTOCOLS_GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/frameworks/AGENT_PROTOCOLS_GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/frameworks/AGENT_PROTOCOLS_GUIDE.md) · 🇮🇳 [gu](../../../gu/docs/frameworks/AGENT_PROTOCOLS_GUIDE.md) · 🇮🇱 [he](../../../he/docs/frameworks/AGENT_PROTOCOLS_GUIDE.md) · 🇮🇳 [hi](../../../hi/docs/frameworks/AGENT_PROTOCOLS_GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/frameworks/AGENT_PROTOCOLS_GUIDE.md) · 🇮🇩 [id](../../../id/docs/frameworks/AGENT_PROTOCOLS_GUIDE.md) · 🇮🇩 [in](../../../in/docs/frameworks/AGENT_PROTOCOLS_GUIDE.md) · 🇮🇹 [it](../../../it/docs/frameworks/AGENT_PROTOCOLS_GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/frameworks/AGENT_PROTOCOLS_GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/frameworks/AGENT_PROTOCOLS_GUIDE.md) · 🇮🇳 [mr](../../../mr/docs/frameworks/AGENT_PROTOCOLS_GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/frameworks/AGENT_PROTOCOLS_GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/frameworks/AGENT_PROTOCOLS_GUIDE.md) · 🇳🇴 [no](../../../no/docs/frameworks/AGENT_PROTOCOLS_GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/frameworks/AGENT_PROTOCOLS_GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/frameworks/AGENT_PROTOCOLS_GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/frameworks/AGENT_PROTOCOLS_GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/frameworks/AGENT_PROTOCOLS_GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/frameworks/AGENT_PROTOCOLS_GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/frameworks/AGENT_PROTOCOLS_GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/frameworks/AGENT_PROTOCOLS_GUIDE.md) · 🇰🇪 [sw](../../../sw/docs/frameworks/AGENT_PROTOCOLS_GUIDE.md) · 🇮🇳 [ta](../../../ta/docs/frameworks/AGENT_PROTOCOLS_GUIDE.md) · 🇮🇳 [te](../../../te/docs/frameworks/AGENT_PROTOCOLS_GUIDE.md) · 🇹🇭 [th](../../../th/docs/frameworks/AGENT_PROTOCOLS_GUIDE.md) · 🇹🇷 [tr](../../../tr/docs/frameworks/AGENT_PROTOCOLS_GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/frameworks/AGENT_PROTOCOLS_GUIDE.md) · 🇵🇰 [ur](../../../ur/docs/frameworks/AGENT_PROTOCOLS_GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/frameworks/AGENT_PROTOCOLS_GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/frameworks/AGENT_PROTOCOLS_GUIDE.md)

---

---
title: "Гид по протоколам агентов"
version: 3.8.2
lastUpdated: 2026-05-13
---

# Гид по протоколам агентов

> **Источник:** `src/lib/{a2a,acp,cloudAgent}/`, `src/app/api/{a2a,acp,cloud}/`, `src/app/api/v1/agents/`
> **Последнее обновление:** 2026-05-13 — v3.8.0

OmniRoute предоставляет три различных поверхности, связанных с агентами. На первый взгляд они выглядят похоже, но решают разные задачи. Используйте эту страницу, чтобы выбрать подходящую.

## TL;DR

| Поверхность                       | Лучше всего подходит для                                                                                                                                   | Транспорт                   | Стандарт             |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------- | -------------------- |
| **A2A — Агент к агенту**      | Сотрудничество между агентами с использованием протокола A2A                                                                     | JSON-RPC 2.0 over HTTP      | A2A v0.3 (открытая спецификация) |
| **ACP — Реестр агентов CLI** | Обнаружение / регистрация / запуск CLI-кодирующих агентов, установленных на машине пользователя (Cursor, Cline, Codex CLI, Claude Code, Aider и т.д.) | HTTP REST                   | OmniRoute-specific   |
| **Cloud Agents**              | Отправка длительных кодирующих задач во внешние облачные сервисы (Codex Cloud, Devin, Jules)                                                | HTTP REST + DB-backed tasks | OmniRoute-specific   |

Три поверхности независимы — выбирайте любой набор.

## Дерево решений

```
Нужна облачная служба для выполнения работы вне этой машины (Codex Cloud / Devin / Jules)?
├─ ДА → Cloud Agents (POST /api/v1/agents/tasks)
└─ НЕТ → Продолжить
    │
    Есть ли у вас агент-пир, который говорит на A2A и хочет сотрудничать?
    ├─ ДА → A2A (POST /a2a)
    └─ НЕТ → Продолжить
        │
        Нужно ли вам перечислить / настроить локально установленные CLI-кодирующие агенты?
        ├─ ДА → ACP (GET /api/acp/agents)
        └─ НЕТ → Используйте обычный /v1/chat/completions
```

## 1. A2A — Агент к агенту

**Спецификация:** [A2A v0.3](https://a2a-protocol.org)
**Конечная точка OmniRoute:** `POST /a2a` (JSON-RPC 2.0)
**Карта агента:** `GET /.well-known/agent.json`

### Когда использовать

- Создание многоагентной системы, где OmniRoute является одним из пиров
- Предоставление маршрутизирующей интеллектуальности OmniRoute (умное-маршрутизирование, управление квотами и т.д.) агентам в таких фреймворках, как Google ADK или общие меши агентов
- Обертывание OmniRoute за стандартной поверхностью обнаружения + вызова

### Методы

- `message/send` — отправить сообщение, получить синхронный ответ
- `message/stream` — отправить + получить поток событий SSE
- `tasks/get` — прочитать задачу по ID
- `tasks/cancel` — отменить выполняющуюся задачу

### Встроенные навыки (5)

- `smart-routing` — маршрутизировать запрос через оптимальную комбинацию
- `quota-management` — сообщить состояние квоты по провайдерам
- `provider-discovery` — перечислить установленных провайдеров с возможностями
- `cost-analysis` — оценить стоимость запроса/разговора
- `health-report` — агрегировать состояние брейкера/отсрочки/блокировки по провайдерам

### Подробнее

См. [A2A-SERVER.md](./A2A-SERVER.md) для деталей транспорта, структуры карты агента, конфигурации TTL задач и шаблона для добавления новых навыков.

## 2. ACP — Реестр агентов CLI

**Конечная точка OmniRoute:** `GET /api/acp/agents`
**Источник:** `src/lib/acp/{index,manager,registry}.ts`

### Что это

ACP — это **локальный реестр CLI-агентов** OmniRoute. Он обнаруживает, какие инструменты для кодирования установлены на хосте (Cursor, Cline, Claude Code, Codex CLI, Continue и т.д.), определяет их версии и предоставляет эту информацию на панель управления, чтобы пользователь мог настроить каждый CLI для работы с OmniRoute.

Это НЕ внешний протокол — это внутренний реестр, который обеспечивает работу пользовательского интерфейса "Инструменты CLI" и отслеживание отпечатков CLI (см. [CLI-TOOLS.md](../reference/CLI-TOOLS.md)).

### Что он делает

- Проверяет хост на наличие установленных бинарных файлов CLI (использует `which` / `where` в зависимости от ОС)
- Считывает версию каждого CLI (вызывает `<bin> --version`)
- При необходимости принимает пользовательские определенные агенты (путь к бинарному файлу + команда проверки версии + аргументы запуска)
- Сохраняет пользовательские агенты в настройках
- Возвращает объединенный список на панель управления

### REST API

| Конечная точка          | Метод | Описание                                                   | Авторизация    |
| ----------------- | ------ | ------------------------------------------------------------- | ------- |
| `/api/acp/agents` | GET    | Список обнаруженных + пользовательских агентов (количество установленных/всего)        | API ключ |
| `/api/acp/agents` | POST   | Добавить/обновить/удалить пользовательского агента (дискриминатор действия в теле) | API ключ |

Форма тела для POST (`customAgentBodySchema` в `src/app/api/acp/agents/route.ts`):

```json
{
  "action": "add|update|remove",
  "id": "cursor",
  "name": "Cursor",
  "binary": "/usr/local/bin/cursor",
  "versionCommand": "--version",
  "providerAlias": "cursor",
  "spawnArgs": ["--api-base", "http://localhost:20128"],
  "protocol": "stdio"
}
```

### Примеры использования

- Страница "Инструменты CLI" на панели управления перечисляет установленные инструменты и помогает настроить каждый из них для работы с OmniRoute
- Пользовательские агенты позволяют опытным пользователям регистрировать внутренние/проприетарные CLI, которые OmniRoute не знает по умолчанию
- Результат обнаружения питает матрицу отпечатков `cli-tools`

### Когда НЕ использовать ACP

- ACP не _запускает_ задачи. Он только обнаруживает и настраивает CLI. Чтобы фактически вызвать CLI, вы запускаете его самостоятельно с помощью переменных окружения, которые предоставляет OmniRoute (`OPENAI_BASE_URL`, `OPENAI_API_KEY` и т.д.).

## 3. Облачные агенты

**Конечные точки OmniRoute:** `/api/v1/agents/tasks/*` (жизненный цикл) + `/api/cloud/*` (прокладка)
**Источник:** `src/lib/cloudAgent/`

### Что это

Единый интерфейс для работы с облачными кодирующими агентами. Вы отправляете запрос + URL репозитория, OmniRoute отправляет его к соответствующему облачному агенту, отслеживает статус и возвращает результаты.

### Поддерживаемые агенты (3, все подтверждены в `src/lib/cloudAgent/agents/`)

- `codex-cloud` — Облачный Codex OpenAI
- `devin` — Cognition Devin
- `jules` — Google Jules

### Жизненный цикл

```
POST /api/v1/agents/tasks
  → BaseAgent.createTask() для каждого класса агента
  → внешняя служба начинает работу
  → создается строка задачи в БД (cloud_agent_tasks)
  ↓
GET /api/v1/agents/tasks/[id]
  → ленивая синхронизация статуса от провайдера
  → возвращает текущий статус + план + журнал активности
  ↓
POST /api/v1/agents/tasks/[id]   (action: "approve" | "message" | "cancel")
  → пересылает к провайдеру (или помечает как отмененную локально)
  ↓
DELETE /api/v1/agents/tasks/[id]
  → локальная отмена
```

### Авторизация

⚠️ **Все конечные точки `/api/v1/agents/tasks/*` требуют авторизации управления** (коммит `588a0333`). Вызывающие с Bearer-only получают 401 с версии v3.8.0.

### Подробное описание

См. [CLOUD_AGENT.md](./CLOUD_AGENT.md) для контракта `CloudAgentBase`, специфики каждого агента, деталей схемы и конечных точек для подключения учетных данных.

## Сравнение: A2A vs Cloud Agents

Оба имеют "длительные задачи" на разных уровнях:

| Аспект             | A2A                                                                               | Cloud Agents                             |
| ------------------ | --------------------------------------------------------------------------------- | ---------------------------------------- |
| Стандарт           | Open A2A v0.3                                                                     | OmniRoute-specific                       |
| Где выполняется    | Внутри OmniRoute (использует настроенные комбинации)                              | Внешний (Codex / Devin / Jules серверы)  |
| Длительность задачи| По умолчанию TTL 5 мин (настраивается в `TaskManager`)                             | От минут до часов                        |
| Репозиторий        | Нет (передаются только подсказки)                                                  | Да (URL репозитория + ветка)            |
| Использование      | Сотрудничество между агентами, умное маршрутизирование как сервис                 | Делегирование "реализовать функцию X в репозитории Y" |
| Аутентификация      | Необязательный `OMNIROUTE_API_KEY` для `/a2a`; управление для `/api/a2a/*` REST-хелперов | Всегда управление                        |

## Примеры интеграции

### Откройте возможности A2A OmniRoute

```bash
curl http://localhost:20128/.well-known/agent.json
```

Возвращает карту агента со всеми 5 навыками, транспортами и версией.

### Вызов OmniRoute как A2A агента

```bash
curl -X POST http://localhost:20128/a2a \
  -H "Content-Type: application/json" \
  -d '{
    "jsonrpc": "2.0",
    "method": "message/send",
    "params": {
      "messages": [{"role": "user", "content": "Маршрутизировать эту подсказку"}],
      "skillId": "smart-routing"
    },
    "id": 1
  }'
```

### Список установленных CLI агентов через ACP

```bash
curl http://localhost:20128/api/acp/agents \
  -H "Authorization: Bearer <api-key>"
```

### Добавление пользовательского CLI агента

```bash
curl -X POST http://localhost:20128/api/acp/agents \
  -H "Authorization: Bearer <api-key>" \
  -H "Content-Type: application/json" \
  -d '{
    "action": "add",
    "id": "my-custom-cli",
    "name": "My Custom CLI",
    "binary": "/opt/mycli/bin/mycli",
    "versionCommand": "--version",
    "providerAlias": "openai"
  }'
```

### Отправка задачи Cloud Agent

```bash
curl -X POST http://localhost:20128/api/v1/agents/tasks \
  -H "Cookie: auth_token=..." \
  -H "Content-Type: application/json" \
  -d '{
    "agentId": "devin",
    "prompt": "Реализовать функцию X в репозитории Y",
    "repo": "https://github.com/user/repo",
    "branch": "main"
  }'
```

### Опрос статуса задачи облака

```bash
curl http://localhost:20128/api/v1/agents/tasks/<task-id> \
  -H "Cookie: auth_token=..."
```

## Когда использовать что

- **Чатбот / фронтенд копилот** → `/v1/chat/completions` (совместим с OpenAI — не протокол агента)
- **Сотрудничество между несколькими агентами** → A2A
- **Список локальных CLI в панели управления** → ACP
- **Делегирование длительных задач по кодированию облачным сервисам** → Cloud Agents

## Внутренняя архитектура

```
                ┌─────────────────────┐
                │   OmniRoute Core    │
                └─────────────────────┘
                  ↑       ↑        ↑
        ┌─────────┘       │        └─────────┐
        │                 │                  │
    ┌───────┐        ┌─────────┐       ┌────────────┐
    │  A2A  │        │   ACP   │       │  Cloud     │
    │ (/a2a)│        │ (/acp)  │       │  Agents    │
    └───────┘        └─────────┘       │ (/v1/agents│
        │                 │            │  /tasks)   │
        ↓                 ↓            └────────────┘
   Внешние пиры,     Локальные CLI      │
   говорящие A2A v0.3  бинарные файлы   ↓
   на хосте          на хосте       Облако Codex,
                                        Devin, Jules
```

## Смотрите также

- [A2A-SERVER.md](./A2A-SERVER.md) — углубленное изучение A2A
- [CLOUD_AGENT.md](./CLOUD_AGENT.md) — углубленное изучение облачных агентов
- [CLI-TOOLS.md](../reference/CLI-TOOLS.md) — внешние интеграции CLI (использует ACP)
- [SKILLS.md](./SKILLS.md) — фреймворк навыков (отличается от навыков A2A — локальная песочница выполнения)
- [API_REFERENCE.md](../reference/API_REFERENCE.md#agents-protocol) — справочник по конечным точкам
- Источник: `src/lib/{a2a,acp,cloudAgent}/`
