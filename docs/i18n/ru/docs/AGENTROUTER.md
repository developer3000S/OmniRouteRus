# AgentRouter Setup Guide (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../AGENTROUTER.md) · 🇸🇦 [ar](../../ar/docs/AGENTROUTER.md) · 🇦🇿 [az](../../az/docs/AGENTROUTER.md) · 🇧🇬 [bg](../../bg/docs/AGENTROUTER.md) · 🇧🇩 [bn](../../bn/docs/AGENTROUTER.md) · 🇨🇿 [cs](../../cs/docs/AGENTROUTER.md) · 🇩🇰 [da](../../da/docs/AGENTROUTER.md) · 🇩🇪 [de](../../de/docs/AGENTROUTER.md) · 🇪🇸 [es](../../es/docs/AGENTROUTER.md) · 🇮🇷 [fa](../../fa/docs/AGENTROUTER.md) · 🇫🇮 [fi](../../fi/docs/AGENTROUTER.md) · 🇫🇷 [fr](../../fr/docs/AGENTROUTER.md) · 🇮🇳 [gu](../../gu/docs/AGENTROUTER.md) · 🇮🇱 [he](../../he/docs/AGENTROUTER.md) · 🇮🇳 [hi](../../hi/docs/AGENTROUTER.md) · 🇭🇺 [hu](../../hu/docs/AGENTROUTER.md) · 🇮🇩 [id](../../id/docs/AGENTROUTER.md) · 🇮🇩 [in](../../in/docs/AGENTROUTER.md) · 🇮🇹 [it](../../it/docs/AGENTROUTER.md) · 🇯🇵 [ja](../../ja/docs/AGENTROUTER.md) · 🇰🇷 [ko](../../ko/docs/AGENTROUTER.md) · 🇮🇳 [mr](../../mr/docs/AGENTROUTER.md) · 🇲🇾 [ms](../../ms/docs/AGENTROUTER.md) · 🇳🇱 [nl](../../nl/docs/AGENTROUTER.md) · 🇳🇴 [no](../../no/docs/AGENTROUTER.md) · 🇵🇭 [phi](../../phi/docs/AGENTROUTER.md) · 🇵🇱 [pl](../../pl/docs/AGENTROUTER.md) · 🇵🇹 [pt](../../pt/docs/AGENTROUTER.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/AGENTROUTER.md) · 🇷🇴 [ro](../../ro/docs/AGENTROUTER.md) · 🇸🇰 [sk](../../sk/docs/AGENTROUTER.md) · 🇸🇪 [sv](../../sv/docs/AGENTROUTER.md) · 🇰🇪 [sw](../../sw/docs/AGENTROUTER.md) · 🇮🇳 [ta](../../ta/docs/AGENTROUTER.md) · 🇮🇳 [te](../../te/docs/AGENTROUTER.md) · 🇹🇭 [th](../../th/docs/AGENTROUTER.md) · 🇹🇷 [tr](../../tr/docs/AGENTROUTER.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/AGENTROUTER.md) · 🇵🇰 [ur](../../ur/docs/AGENTROUTER.md) · 🇻🇳 [vi](../../vi/docs/AGENTROUTER.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/AGENTROUTER.md)

---

[AgentRouter](https://agentrouter.org) — это совместимый с Anthropic релей, который перепродает модели Claude и другие модели, часто по более низким ценам, чем прямой API Anthropic. Он разработан как drop-in замена `ANTHROPIC_BASE_URL` для официального клиента Claude Code, поэтому он принимает только трафик, который соответствует образу провода Claude Code (специфический User-Agent, флаги `anthropic-beta`, заголовки Stainless SDK и т. д.).

## Быстрый старт — использование родного провайдера `agentrouter` (рекомендуется)

Для большинства пользователей **специальная настройка не требуется**. OmniRoute поставляется с встроенным провайдером `agentrouter`, в котором уже заложен полный образ провода Claude Code (см. `open-sse/config/providerRegistry.ts` → `agentrouter`). Для использования:

1. Откройте **Панель управления → Провайдеры → Добавить провайдера**.
2. Выберите **AgentRouter** из списка.
3. Вставьте ваш API-ключ `sk-...` и сохраните.

Вот и всё — нет переменных окружения, нет пользовательского типа провайдера. Встроенные модели включают `claude-opus-4-6`, `claude-haiku-4-5-20251001`, `glm-5.1` и `deepseek-v3.2`.

Остальная часть этого руководства посвящена **продвинутому пути**: использованию типа провайдера `anthropic-compatible-cc-*`. Используйте его, когда вам нужно больше контроля над образом провода — например, при подключении к другим релеям стиля AgentRouter, которые ещё не включены в родной реестр провайдеров, или при переопределении базового URL, пути чата или набора заголовков.

---

## Продвинутый: подключение через тип провайдера совместимого с Claude Code

OmniRoute также поддерживает AgentRouter (и аналогичные релеи) через тип провайдера **совместимого с Claude Code** (`anthropic-compatible-cc-*`), который общается с Anthropic Messages API с правильным образом провода. Общий провайдер `openai-compatible-chat`, указывающий на `https://agentrouter.org`, **не будет работать** — апстримовый WAF отклоняет запросы, которые не выглядят как Claude Code.

---

## Предварительные требования

- Учётная запись и API-ключ AgentRouter. Новые регистрации получают бесплатные кредиты через партнёрскую ссылку в [README проекта](../README.md).
- OmniRoute работает с включённым флагом функции `ENABLE_CC_COMPATIBLE_PROVIDER` (см. ниже).

## 1. Включите тип провайдера совместимого с CC

Тип провайдера совместимого с Claude Code защищён флагом функции, потому что он отправляет трафик, который очень похож на официальный клиент Claude Code. Включите его, установив переменную окружения перед запуском OmniRoute:

```bash
ENABLE_CC_COMPATIBLE_PROVIDER=true
```

Пример для Docker:

```bash
docker run -d --name omniroute \
  --restart unless-stopped \
  -p 20128:20128 \
  -v omniroute-data:/app/data \
  -e ENABLE_CC_COMPATIBLE_PROVIDER=true \
  diegosouzapw/omniroute:latest
```

После перезапуска панель управления предлагает опцию **Добавить совместимый с Claude Code** наряду с существующими потоками OpenAI-compatible и Anthropic-compatible.

## 2. Создайте провайдера в панели управления

1. Откройте **Панель управления → Провайдеры → Добавить провайдера**.
2. Выберите **Добавить совместимый с Claude Code** (виден только при установленном флаге выше).
3. Заполните поля:

| Поле      | Значение                                                       |
| --------- | -------------------------------------------------------------- |
| Имя       | `AgentRouter` (или любая метка)                                |
| Префикс   | `agentrouter` (дружелюбный псевдоним, показываемый в логах и панели управления) |
| Base URL  | `https://agentrouter.org`                                      |
| Chat path | `/v1/messages?beta=true` (по умолчанию — оставьте как есть)   |

> Канонический идентификатор модели всё ещё использует полный идентификатор узла провайдера (`anthropic-compatible-cc-{uuid}/{model}`). **Префикс** — это просто отображаемый псевдоним, разрешаемый `src/lib/usage/callLogs.ts` для более дружелюбного вывода в логах.

4. (Опционально) Вставьте ваш API-ключ в поле **Validate** и нажмите **Check**, чтобы подтвердить подключение перед сохранением.
5. Нажмите **Add**.

После создания откройте провайдера и добавьте **Подключение** с вашим API-ключом AgentRouter (`sk-...`). Поле `test_status` подключения должно измениться на `active`.

## 3. Используйте его через комбо или напрямую

Ссылка на модель с использованием префикса вашего провайдера в качестве пространства имен:

```bash
curl -X POST http://localhost:20128/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "model": "agentrouter/claude-opus-4-6",
    "messages": [{"role": "user", "content": "hello"}],
    "max_tokens": 100
  }'
```

Канонический идентификатор модели `anthropic-compatible-cc-{uuid}/claude-opus-4-6` также работает
и является тем, что отображается в базе данных и конфигурации комбо.

Или добавьте его в комбо для маршрутизации, резервного копирования и управления квотами, как и любой другой
провайдер.

---

## Проводные детали изображения

Для справки, cc-совместимый мост отправляет следующее на каждом запросе вверх (см. `open-sse/services/claudeCodeCompatible.ts`):

| Заголовок                                   | Значение                                                                 |
| ------------------------------------------- | ------------------------------------------------------------------------ |
| `Authorization`                             | `Bearer <api-key>`                                                       |
| `User-Agent`                                | `claude-cli/2.1.137 (external, sdk-cli)`                                 |
| `anthropic-version`                         | `2023-06-01`                                                             |
| `anthropic-beta`                            | `claude-code-20250219,interleaved-thinking-2025-05-14,effort-2025-11-24` |
| `anthropic-dangerous-direct-browser-access` | `true`                                                                   |
| `x-app`                                     | `cli`                                                                    |
| `X-Stainless-*`                             | Различные заголовки Stainless SDK (язык, версия пакета, ОС, архитектура и т.д.)    |

Это позволяет запросам проходить через WAF / белый список клиентов.

---

## Устранение неполадок

**`{"error":{"message":"unauthorized client detected, ..."}}`** — Ваш запрос не соответствовал проводному образу Claude Code. Это происходит, когда провайдер настроен как `openai-compatible-chat` вместо `anthropic-compatible-cc`, или когда флаг `ENABLE_CC_COMPATIBLE_PROVIDER=true` не был установлен при запуске.

**`{"error":{"message":"无效的令牌","type":"new_api_error"}}` (HTTP 401)** —
"Неверный токен". Проводной образ верен, но API-ключ отклоняется. Сгенерируйте новый ключ в панели управления AgentRouter и обновите соединение.

**`{"error":{"code":"content-blocked","type":"agent_router_api_error"}}`
(HTTP 400)** — Модерационный хук AgentRouter отклонил содержимое запроса, или план ключа не разрешает запрошенную модель. Попробуйте другой запрос или модель; свяжитесь с поддержкой AgentRouter, если добросовестный запрос постоянно блокируется.

**`[400]: content-blocked` только на определенных моделях** — Большинство планов AgentRouter разрешают только подмножество моделей (например, `claude-opus-4-6`). Другие идентификаторы моделей возвращают `unauthorized_client_error`, даже если ключ действителен. Проверьте, какие модели покрывает ваш план в панели управления AgentRouter.

**`Invalid JSON response from provider (reset after Ns)` из журналов omniroute** —
Верхний уровень вернул тело, не являющееся JSON (обычно это HTML-страница ошибки от WAF).
Это обычно означает, что запрос не достиг бэкенда AgentRouter — перепроверьте, что идентификатор провайдера начинается с `anthropic-compatible-cc-` (обратите внимание на завершающий тире — см. `CLAUDE_CODE_COMPATIBLE_PREFIX` в `open-sse/services/claudeCodeCompatible.ts`)
и флаг функции включен.

## Смотрите также

- [`docs/PROVIDERS.md`](./PROVIDERS.md) — Другие заметки по интеграции провайдеров
- [`docs/reference/FREE_TIERS.md`](./reference/FREE_TIERS.md) — Каталог провайдеров с бесплатным тарифом
- [`open-sse/services/claudeCodeCompatible.ts`](../open-sse/services/claudeCodeCompatible.ts)
  — Реализация проводки изображения
