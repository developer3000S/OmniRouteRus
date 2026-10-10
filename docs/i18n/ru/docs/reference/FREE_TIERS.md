# FREE_TIERS (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../reference/FREE_TIERS.md) · 🇸🇦 [ar](../../../ar/docs/reference/FREE_TIERS.md) · 🇦🇿 [az](../../../az/docs/reference/FREE_TIERS.md) · 🇧🇬 [bg](../../../bg/docs/reference/FREE_TIERS.md) · 🇧🇩 [bn](../../../bn/docs/reference/FREE_TIERS.md) · 🇨🇿 [cs](../../../cs/docs/reference/FREE_TIERS.md) · 🇩🇰 [da](../../../da/docs/reference/FREE_TIERS.md) · 🇩🇪 [de](../../../de/docs/reference/FREE_TIERS.md) · 🇪🇸 [es](../../../es/docs/reference/FREE_TIERS.md) · 🇮🇷 [fa](../../../fa/docs/reference/FREE_TIERS.md) · 🇫🇮 [fi](../../../fi/docs/reference/FREE_TIERS.md) · 🇫🇷 [fr](../../../fr/docs/reference/FREE_TIERS.md) · 🇮🇳 [gu](../../../gu/docs/reference/FREE_TIERS.md) · 🇮🇱 [he](../../../he/docs/reference/FREE_TIERS.md) · 🇮🇳 [hi](../../../hi/docs/reference/FREE_TIERS.md) · 🇭🇺 [hu](../../../hu/docs/reference/FREE_TIERS.md) · 🇮🇩 [id](../../../id/docs/reference/FREE_TIERS.md) · 🇮🇩 [in](../../../in/docs/reference/FREE_TIERS.md) · 🇮🇹 [it](../../../it/docs/reference/FREE_TIERS.md) · 🇯🇵 [ja](../../../ja/docs/reference/FREE_TIERS.md) · 🇰🇷 [ko](../../../ko/docs/reference/FREE_TIERS.md) · 🇮🇳 [mr](../../../mr/docs/reference/FREE_TIERS.md) · 🇲🇾 [ms](../../../ms/docs/reference/FREE_TIERS.md) · 🇳🇱 [nl](../../../nl/docs/reference/FREE_TIERS.md) · 🇳🇴 [no](../../../no/docs/reference/FREE_TIERS.md) · 🇵🇭 [phi](../../../phi/docs/reference/FREE_TIERS.md) · 🇵🇱 [pl](../../../pl/docs/reference/FREE_TIERS.md) · 🇵🇹 [pt](../../../pt/docs/reference/FREE_TIERS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/reference/FREE_TIERS.md) · 🇷🇴 [ro](../../../ro/docs/reference/FREE_TIERS.md) · 🇸🇰 [sk](../../../sk/docs/reference/FREE_TIERS.md) · 🇸🇪 [sv](../../../sv/docs/reference/FREE_TIERS.md) · 🇰🇪 [sw](../../../sw/docs/reference/FREE_TIERS.md) · 🇮🇳 [ta](../../../ta/docs/reference/FREE_TIERS.md) · 🇮🇳 [te](../../../te/docs/reference/FREE_TIERS.md) · 🇹🇭 [th](../../../th/docs/reference/FREE_TIERS.md) · 🇹🇷 [tr](../../../tr/docs/reference/FREE_TIERS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/reference/FREE_TIERS.md) · 🇵🇰 [ur](../../../ur/docs/reference/FREE_TIERS.md) · 🇻🇳 [vi](../../../vi/docs/reference/FREE_TIERS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/reference/FREE_TIERS.md)

---

---
title: "Бесплатные тарифы"
version: 3.8.2
lastUpdated: 2026-05-13
---

# Бесплатные тарифы

> **Последнее обновление:** 2026-05-13 — OmniRoute v3.8.2
> **Источник:** `src/shared/constants/providers.ts` (`FREE_PROVIDERS`, `OAUTH_PROVIDERS`, и `APIKEY_PROVIDERS` с флагом `hasFree: true` + `freeNote`)

На этой странице перечислены провайдеры с бесплатными тарифами, включенными в OmniRoute v3.8.2. Данные получены из каталога провайдеров. Если провайдер не появляется здесь, то либо у него нет бесплатного тарифа в каталоге, либо его флаг `hasFree` установлен в `false`.

Добавьте учетные данные из панели управления (`/dashboard/providers/new`) — OmniRoute читает ключи из базы данных, а не из переменных окружения провайдеров. Единственные переменные окружения, влияющие на поведение провайдера, перечислены в разделе [Переменные окружения](#environment-variables).

---

## Как подключены бесплатные провайдеры

OmniRoute классифицирует провайдеров в следующие группы в `src/shared/constants/providers.ts`:

| Группа              | Аутентификация                | Примеры ID                                 |
| ------------------ | ------------------------------ | ------------------------------------------- |
| `FREE_PROVIDERS`   | OAuth или учетная запись вендора | `qoder`, `gemini-cli`, `kiro`, `amazon-q`   |
| `OAUTH_PROVIDERS`  | OAuth                          | `claude`, `cursor`, `windsurf`, `devin-cli` |
| `APIKEY_PROVIDERS` | API ключ (с `hasFree: true`)    | `groq`, `cerebras`, `mistral`, `gemini`     |

Провайдер появляется в **бесплатном пуле**, если:

- Он перечислен в карте `FREE_PROVIDERS` (и не помечен `deprecated: true`), или
- Он перечислен в `APIKEY_PROVIDERS` с `hasFree: true` и строкой `freeNote`, или
- Это OAuth-провайдер, чей вендор предлагает бесплатный тариф поверх OAuth-входа.

---

## Быстрый справочник (провайдеры API-ключей с `hasFree: true`)

| Провайдер           | ID              | Примечание о бесплатном тарифе                                                                                       |
| ------------------ | --------------- | ---------------------------------------------------------------------------------------------------- |
| AgentRouter        | `agentrouter`   | $200 бесплатных кредитов при регистрации — мультимодельный маршрутизатор                                            |
| AI21 Labs          | `ai21`          | $10 кредитов на пробу при регистрации (действителен 3 месяца), без кредитной карты                                |
| AI/ML API          | `aimlapi`       | $0.025/день бесплатных кредитов — 200+ моделей через один эндпоинт                                            |
| BazaarLink         | `bazaarlink`    | Бесплатный тариф с маршрутизацией `auto:free` — бесплатная инференция, без кредитной карты                    |
| Baseten            | `baseten`       | $30 кредитов на пробу для GPU-инференции                                                             |
| Blackbox AI        | `blackbox`      | Бесплатный тариф: неограниченный базовый чат плюс Minimax-M2.5, без кредитной карты                           |
| Bytez              | `bytez`         | $1 бесплатных кредитов, обновляется каждые 4 недели                                                             |
| Cerebras           | `cerebras`      | Бесплатно: 1M токенов/день, 60K TPM — самая быстрая инференция                                             |
| Cloudflare AI      | `cloudflare-ai` | Бесплатно 10K нейронов/день: ~150 ответов LLM или 500s аудио Whisper                                       |
| Cohere             | `cohere`        | Бесплатная пробная версия: 1,000 API-запросов/месяц для тестирования, без кредитной карты                               |
| Completions.me     | `completions`   | Бесплатный неограниченный доступ к Claude, GPT, Gemini — без кредитной карты, без ограничений скорости                        |
| DeepInfra          | `deepinfra`     | Бесплатные кредиты при регистрации для тестирования API и исследования моделей                                            |
| DeepSeek           | `deepseek`      | 5M бесплатных токенов при регистрации — без кредитной карты                                                   |
| Enally AI          | `enally`        | Бесплатно для студентов и разработчиков — без кредитной карты, OTP-проверка                                  |
| Fireworks AI       | `fireworks`     | $1 бесплатных стартовых кредитов при регистрации для тестирования API                                                    |
| FreeTheAi          | `freetheai`     | Сообщество — бесплатно навсегда, без платных тарифов, без кредитной карты                                          |
| Gemini (AI Studio) | `gemini`        | Бесплатно навсегда: 1,500 запросов/день для Gemini 2.5 Flash — без кредитной карты                                    |
| GLHF Chat          | `glhf`          | Бесплатный тариф для инференции открытых моделей                                                            |
| Groq               | `groq`          | Бесплатный тариф: 30 RPM / 14.4K RPD — без кредитной карты                                                       |
| HuggingFace        | `huggingface`   | Бесплатный API для инференции тысяч моделей (Whisper, VITS, SDXL…)                                    |
| Hyperbolic         | `hyperbolic`    | $1–5 кредитов на пробу при регистрации для серверной инференции                                                |
| Inference.net      | `inference-net` | $25 бесплатных кредитов при регистрации плюс доступные исследовательские гранты                                            |
| Jina AI            | `jina-ai`       | 10M бесплатных токенов при регистрации (некоммерческие), без кредитной карты                                  |
| Kluster AI         | `kluster`       | $5 бесплатных кредитов при регистрации — DeepSeek R1, Llama 4 Maverick/Scout, Qwen3 235B                          |
| Lepton AI          | `lepton`        | Бесплатный тариф доступен — быстрая инференция на специализированном оборудовании                                              |
| LLM7.io            | `llm7`          | Регистрация не требуется — 2 запроса/с, 20 RPM, 100 запросов/ч бесплатный тариф                                           |
| LongCat AI         | `longcat`       | 50M токенов/день (Flash-Lite) + 500K/день (Chat/Thinking) — 100% бесплатно во время публичной бета-версии                 |
| Mistral            | `mistral`       | Бесплатный экспериментальный тариф: ограниченный доступ ко всем моделям, без кредитной карты                     |
| Modal              | `modal`         | $30/месяц бесплатных кредитов для новых аккаунтов                                                              |
| Morph              | `morph`         | Бесплатный тариф: 250K кредитов/месяц, $0                                                                    |
| Nebius             | `nebius`        | ~$1 кредитов на пробу при регистрации для тестирования API                                                          |
| NLP Cloud          | `nlpcloud`      | Пробные кредиты для новых аккаунтов                                                                       |
| Nous Research      | `nous-research` | Бесплатный тариф: 50 RPM, 500,000 TPM — без кредитной карты                                                      |
| Novita AI          | `novita`        | $0.50 кредитов на пробу при регистрации (действителен около 1 года)                                                   |
| nScale             | `nscale`        | $5 бесплатных кредитов при регистрации для тестирования инференции                                                      |
| NVIDIA NIM         | `nvidia`        | Бесплатный доступ для разработчиков: ~40 RPM, 70+ моделей (Kimi K2.5, GLM 4.7, DeepSeek V3.2…)                            |
| OpenRouter         | `openrouter`    | Бесплатные модели по $0/токену с суффиксом `:free` — 20 RPM / 200 RPD                                       |
| Pollinations AI    | `pollinations`  | API-ключ не требуется для бесплатного общедоступного эндпоинта. Опциональный Spore-тариф: ~0.01 pollen/час                 |
| Predibase          | `predibase`     | $25 пробных кредитов (действителен 30 дней)                                                             |
| PublicAI           | `publicai`      | Бесплатный тариф сообщества для тестирования                                                            |
| Puter AI           | `puter`         | 500+ моделей (GPT-5, Claude Opus 4, Gemini 3 Pro, Grok 4, DeepSeek V3…) — пользователи платят через аккаунт Puter |
| Reka               | `reka`          | $10/месяц повторяющихся бесплатных API-кредитов                                                                 |
| SambaNova          | `sambanova`     | $5 бесплатных кредитов при регистрации (действителен 30 дней), без кредитной карты required                                 |
| Scaleway AI        | `scaleway`      | 1M бесплатных токенов для новых аккаунтов — соответствует EU/GDPR (Париж), Qwen3 235B & Llama 70B                  |
| SiliconFlow        | `siliconflow`   | $1 бесплатных кредитов плюс навсегда бесплатные модели после проверки личности                             |
| Together AI        | `together`      | $25 кредитов при регистрации + 3 навсегда бесплатные модели: Llama 3.3 70B, Vision, DeepSeek-R1 distill           |
| UncloseAI          | `uncloseai`     | Бесплатно навсегда — без регистрации, без кредитной карты. Совместимые с OpenAI эндпоинты                                |
| Voyage AI          | `voyage-ai`     | 200M бесплатных токенов для эмбеддингов и реранкинга                                                        |

**Всего: 48 провайдеров API-ключей с `hasFree: true`.**

> Все записи выше скопированы дословно из поля `freeNote` в каталоге провайдеров, чтобы они оставались синхронизированными с кодом.

## OAuth-основные бесплатные тарифы

### Всегда бесплатные OAuth-провайдеры (в `FREE_PROVIDERS`)

Эти провайдеры разработаны вокруг OAuth-потока поставщика и поставляются с бесплатным тарифом по умолчанию:

| Провайдер   | ID           | Примечания                                                                                                       |
| ---------- | ------------ | ----------------------------------------------------------------------------------------------------------- |
| Qoder AI   | `qoder`      | OAuth или личный токен доступа. Бесплатный тариф при регистрации.                                                        |
| Gemini CLI | `gemini-cli` | Использует OAuth / Cloud Code Gemini CLI. Профессиональные модели требуют соответствующей учетной записи Google или платного плана. |
| Kiro AI    | `kiro`       | AWS Builder ID (Kiro Free tier).                                                                            |
| Amazon Q   | `amazon-q`   | Тот же поток AWS Builder ID / refresh-token, что и Kiro, но сохранен как отдельные подключения.                         |

### OAuth-провайдеры с бесплатными тарифами, контролируемыми поставщиком (в `OAUTH_PROVIDERS`)

Поверхность бесплатного тарифа здесь полностью зависит от плана учетной записи каждого поставщика, а не от OmniRoute:

| Провайдер             | ID            | Подсказка по аутентификации                                                                               |
| -------------------- | ------------- | --------------------------------------------------------------------------------------- |
| Claude Code          | `claude`      | OAuth через `platform.claude.com`. Бесплатный квота зависит от вашей учетной записи Anthropic.          |
| Antigravity          | `antigravity` | Google OAuth (Antigravity).                                                             |
| OpenAI Codex         | `codex`       | OAuth через OpenAI (Codex CLI). Подлежит бесплатным кредитам плана ChatGPT.                     |
| GitHub Copilot       | `github`      | OAuth через GitHub. Бесплатно для проверенных студентов; бесплатная пробная версия в противном случае.                     |
| GitLab Duo           | `gitlab-duo`  | OAuth (`ai_features + read_user`). Требуется право GitLab Duo.                     |
| Cursor IDE           | `cursor`      | Cursor OAuth. Ограничения бесплатного тарифа зависят от плана Cursor.                                   |
| Kimi Coding          | `kimi-coding` | Moonshot OAuth. Бесплатный квота на учетных записях Kimi Coding.                                     |
| Kilo Code            | `kilocode`    | Kilo OAuth — бесплатный авто-роутер доступен.                                                |
| Cline                | `cline`       | Cline OAuth.                                                                            |
| Windsurf (Devin CLI) | `windsurf`    | Войдите в `windsurf.com`, вставьте ваш токен. Ограничения бесплатного тарифа установлены Windsurf.          |
| Devin CLI (Official) | `devin-cli`   | Использует официальный двоичный файл Devin CLI или `WINDSURF_API_KEY`. Подлежит бесплатному тарифу Devin. |

---

## Устаревшие / прекращенные

### Qwen Code (`qwen`)

Отмечен как `deprecated: true` в `FREE_PROVIDERS`. Прекращен **2026-04-15**.

> Бесплатный тариф Qwen OAuth был прекращен 2026-04-15. Вместо этого используйте провайдеры `bailian-coding-plan`, `alibaba`, `alibaba-cn` или `openrouter` с API-ключом.

Подключения типа `qwen` будут продолжать работать до истечения срока действия их токенов, но новые OAuth-входы не принимаются вышестоящим уровнем. Перейдите на:

- `bailian-coding-plan` (Alibaba Coding Plan — совместим с Claude)
- `alibaba` (Alibaba — DashScope международный)
- `alibaba-cn` (Alibaba (Китай) — DashScope Китай)
- `openrouter` (Модели Qwen, представленные через OpenRouter)

## Command Code

`command-code` — это отдельный поставщик API-ключей для агента Command Code (см. `commandcode.ai`). Он не помечен как `hasFree: true` в каталоге, поэтому не отображается в таблице бесплатных выше, но включен здесь, так как поставляется в v3.8.0 вместе с бесплатными поставщиками:

- ID: `command-code`
- Конечная точка: Command Code `/alpha/generate`
- Аутентификация: Bearer API key, настраивается из панели управления.

Проверьте веб-сайт Command Code для текущей политики бесплатного уровня.

---

## Переменные окружения

OmniRoute v3.8.2 **не** считывает API-ключи поставщиков из переменных окружения (за исключением одного случая ниже). Ключи хранятся в зашифрованной базе данных SQLite и настраиваются из панели управления. Переменные окружения, перечисленные здесь, являются единственными, которые влияют на поведение бесплатного уровня:

```bash
# Windsurf / Devin CLI — Firebase Web API key, используемый Secure Token
# Service для обновления приложения Windsurf. Значение по умолчанию поставляется в
# .env.example (это публичный Firebase Web API key, извлеченный из бинарного файла
# Devin CLI, а не реальный секрет); переопределяйте только если вы зеркалируете
# собственную службу обновления токенов Windsurf.
WINDSURF_FIREBASE_API_KEY=<see .env.example>

# Необязательный резервный вариант для исполнителя devin-cli, когда нет ключа подключения.
WINDSURF_API_KEY=

# Необязательный путь к официальному бинарному файлу Devin CLI.
CLI_DEVIN_BIN=/usr/local/bin/devin

# Переопределения OAuth клиента (редко нужны — значения по умолчанию поставляются в коде)
CODEX_OAUTH_CLIENT_ID=
GEMINI_OAUTH_CLIENT_ID=
GEMINI_OAUTH_CLIENT_SECRET=
GEMINI_CLI_OAUTH_CLIENT_ID=
GEMINI_CLI_OAUTH_CLIENT_SECRET=
QWEN_OAUTH_CLIENT_ID=
KIMI_CODING_OAUTH_CLIENT_ID=
GITHUB_OAUTH_CLIENT_ID=
GITLAB_DUO_OAUTH_CLIENT_ID=
GITLAB_DUO_OAUTH_CLIENT_SECRET=
QODER_OAUTH_CLIENT_SECRET=
QODER_PERSONAL_ACCESS_TOKEN=

# CLI sidecar бинарные файлы
CLI_CODEX_BIN=codex
CLI_CURSOR_BIN=agent
CLI_CLINE_BIN=cline
CLI_QODER_BIN=qoder
CLI_QWEN_BIN=qwen
```

Для всех остальных поставщиков (Groq, Cerebras, Mistral, Gemini, Cohere, NVIDIA, OpenRouter, Together, Fireworks, Cloudflare AI, SambaNova, HuggingFace, SiliconFlow, Hyperbolic, Morph, LLM7, Lepton, Kluster, UncloseAI, BazaarLink, Completions, Enally, FreeTheAi, AgentRouter, Command Code и т.д.), добавьте ключ из `/dashboard/providers/new`.

---

## Как использовать

1. Откройте `/dashboard/providers/new` и выберите нужного поставщика.
2. Вставьте API-ключ (или завершите OAuth-поток). Для OAuth-поставщиков следуйте мастеру панели управления.
3. Поставщик появляется в вашем пуле маршрутизации автоматически и может быть использован для комбо и автоматического маршрутизации.
4. Отслеживайте использование на `/dashboard/usage`, чтобы увидеть, насколько вы близки к лимитам бесплатного уровня.

### Рекомендуемые комбо

| Цель                         | Стратегия             | Примечания                                                                 |
| ---------------------------- | -------------------- | --------------------------------------------------------------------- |
| Самый дешевый чат       | `auto/cheap`         | Предпочитает бесплатные / самые дешевые поставщики; автоматически переключается.       |
| Локальное маршрутирование           | `auto/offline`       | Маршрутизирует только к локальным поставщикам (Ollama, LM Studio, vLLM, …).          |
| Резервирование бесплатных уровней | combo `priority`     | Перечисляет Groq → Cerebras → Mistral → Gemini → NVIDIA → OpenRouter.        |
| Высокая пропускная способность          | combo `round-robin`  | Распределяет запросы по всем настроенным бесплатным поставщикам.                |
| Лучший показатель успеха            | combo `lkgp` / `p2c` | Выбирает последний известный хороший поставщик или "power of two choices" для балансировки. |

### Советы

- Объедините несколько бесплатных поставщиков в комбо (`/dashboard/combos`), чтобы максимизировать дневной квоту и маршрутизировать запросы вокруг сбоев.
- Используйте `omniroute doctor`, чтобы проверить, доступны ли все настроенные бесплатные поставщики.
- Проверьте состояние поставщиков в `/dashboard/monitoring/health` — поставщик с открытым цепным механизмом пропускается автоматически.
- Лимиты бесплатного уровня часто меняются; строки `freeNote` отражают лимиты, известные на дату выпуска v3.8.0. Проверьте с официальной документацией каждого поставщика перед тем, как полагаться на конкретное число.

## Глоссарий

| Термин      | Значение                                                 |
| ---------- | -------------------------------------------------------- |
| **RPM**    | Запросов в минуту                                         |
| **RPD**    | Запросов в день                                           |
| **RPH**    | Запросов в час                                            |
| **RPS**    | Запросов в секунду                                        |
| **TPM**    | Токенов в минуту                                          |
| **TPD**    | Токенов в день                                            |
| **Нейрон** | Вычислительная единица Cloudflare (~1 выходной токен)     |
| **LKGP**   | Последний известный рабочий провайдер — стратегия авто-комбо |
| **P2C**    | Power-of-two choices — стратегия авто-комбо балансировщика нагрузки |
