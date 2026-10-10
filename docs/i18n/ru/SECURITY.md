# Security Policy (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../SECURITY.md) · 🇸🇦 [ar](../ar/SECURITY.md) · 🇦🇿 [az](../az/SECURITY.md) · 🇧🇬 [bg](../bg/SECURITY.md) · 🇧🇩 [bn](../bn/SECURITY.md) · 🇨🇿 [cs](../cs/SECURITY.md) · 🇩🇰 [da](../da/SECURITY.md) · 🇩🇪 [de](../de/SECURITY.md) · 🇪🇸 [es](../es/SECURITY.md) · 🇮🇷 [fa](../fa/SECURITY.md) · 🇫🇮 [fi](../fi/SECURITY.md) · 🇫🇷 [fr](../fr/SECURITY.md) · 🇮🇳 [gu](../gu/SECURITY.md) · 🇮🇱 [he](../he/SECURITY.md) · 🇮🇳 [hi](../hi/SECURITY.md) · 🇭🇺 [hu](../hu/SECURITY.md) · 🇮🇩 [id](../id/SECURITY.md) · 🇮🇩 [in](../in/SECURITY.md) · 🇮🇹 [it](../it/SECURITY.md) · 🇯🇵 [ja](../ja/SECURITY.md) · 🇰🇷 [ko](../ko/SECURITY.md) · 🇮🇳 [mr](../mr/SECURITY.md) · 🇲🇾 [ms](../ms/SECURITY.md) · 🇳🇱 [nl](../nl/SECURITY.md) · 🇳🇴 [no](../no/SECURITY.md) · 🇵🇭 [phi](../phi/SECURITY.md) · 🇵🇱 [pl](../pl/SECURITY.md) · 🇵🇹 [pt](../pt/SECURITY.md) · 🇧🇷 [pt-BR](../pt-BR/SECURITY.md) · 🇷🇴 [ro](../ro/SECURITY.md) · 🇸🇰 [sk](../sk/SECURITY.md) · 🇸🇪 [sv](../sv/SECURITY.md) · 🇰🇪 [sw](../sw/SECURITY.md) · 🇮🇳 [ta](../ta/SECURITY.md) · 🇮🇳 [te](../te/SECURITY.md) · 🇹🇭 [th](../th/SECURITY.md) · 🇹🇷 [tr](../tr/SECURITY.md) · 🇺🇦 [uk-UA](../uk-UA/SECURITY.md) · 🇵🇰 [ur](../ur/SECURITY.md) · 🇻🇳 [vi](../vi/SECURITY.md) · 🇨🇳 [zh-CN](../zh-CN/SECURITY.md)

---

## Сообщение об уязвимостях

Если вы обнаружили уязвимость безопасности в OmniRoute, пожалуйста, сообщите о ней ответственно:

1. **НЕ** создавайте публичный GitHub issue
2. Используйте [GitHub Security Advisories](https://github.com/diegosouzapw/OmniRoute/security/advisories/new)
3. Включите: описание, шаги воспроизведения и потенциальное влияние

## График реакции

| Этап            | Цель                       |
| --------------- | -------------------------- |
| Подтверждение   | 48 часов                   |
| Трайаж и оценка | 5 рабочих дней             |
| Релиз патча     | 14 рабочих дней (критично) |

## Поддерживаемые версии

| Версия  | Статус поддержки     |
| ------- | -------------------- |
| 3.8.x   | ✅ Активная          |
| 3.7.x   | ✅ Безопасность      |
| < 3.7.0 | ❌ Не поддерживается |

---

## Архитектура безопасности

OmniRoute реализует многоуровневую модель безопасности:

```
Request → CORS → Authz pipeline (classify → policies → enforce)
       → Guardrails (PII masker, prompt injection, vision bridge)
       → Rate Limiter → Circuit Breaker → Cooldown → Model Lockout → Provider
```

### 🔐 Аутентификация и авторизация

| Функция                         | Реализация                                                                                                                                                          |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Вход в панель управления**    | Аутентификация по паролю с JWT-токенами (HttpOnly cookies)                                                                                                          |
| **Аутентификация по API-ключу** | HMAC-подписанные ключи с CRC-валидацией                                                                                                                             |
| **OAuth 2.0 + PKCE**            | 14 провайдеров (Claude, Codex, GitHub, Cursor, Antigravity, Gemini, Kimi Coding, Kilo Code, Cline, Qwen, Kiro, Qoder, Windsurf, GitLab Duo)                         |
| **Обновление токена**           | Автоматическое обновление OAuth-токена перед истечением срока действия                                                                                              |
| **Безопасные куки**             | `AUTH_COOKIE_SECURE=true` для HTTPS-окружений                                                                                                                       |
| **Authz Pipeline**              | Классификация маршрутов (PUBLIC / CLIENT_API / MANAGEMENT) — см. `docs/architecture/AUTHZ_GUIDE.md`                                                                 |
| **Уровни защиты маршрутов**     | 3-уровневая модель для маршрутов управления (LOCAL_ONLY / ALWAYS_PROTECTED / MANAGEMENT) — см. `docs/security/ROUTE_GUARD_TIERS.md`                                 |
| **Управление MCP**              | Удаленный доступ к `/api/mcp/*` ограничен API-ключами с областью `manage`; `/api/cli-tools/runtime/*` остается строго в цикле обратной связи. См. ROUTE_GUARD_TIERS |
| **Области MCP**                 | ~13 гранулярных областей (read:health, write:combos, execute:completions, etc.) — см. `docs/frameworks/MCP-SERVER.md`                                               |

### 🛡️ Шифрование при хранении

Все конфиденциальные данные, хранящиеся в SQLite, шифруются с использованием **AES-256-GCM** с ключевым выводом scrypt:

- API-ключи, токены доступа, токены обновления и ID-токены
- Версионированный формат: `enc:v1:<iv>:<ciphertext>:<authTag>`
- Режим передачи (простой текст), когда `STORAGE_ENCRYPTION_KEY` не установлен

```bash
# Генерация ключа шифрования:
STORAGE_ENCRYPTION_KEY=$(openssl rand -hex 32)
```

### 🛡️ Фреймворк Guardrails

OmniRoute поставляется с **регистром guardrails**, который перезагружается в реальном времени (`src/lib/guardrails/`), содержащим 3 встроенных guardrails, упорядоченных по приоритету:

| Guardrail          | Приоритет | Назначение                                                                                                 |
| ------------------ | --------- | ---------------------------------------------------------------------------------------------------------- |
| `vision-bridge`    | 5         | Мост между невизуальными моделями и описаниями с изображениями; защита от SSRF для URL изображений         |
| `pii-masker`       | 10        | Предварительная и постобработка PII-редакция (электронная почта, телефон, CPF, CNPJ, кредитные карты, SSN) |
| `prompt-injection` | 20        | Обнаруживает и блокирует атаки на внедрение промптов в запросах к LLM                                      |

Пользовательские guardrails регистрируются через `registerGuardrail(new MyGuardrail())`. Модель работает в режиме fail-open (исключения никогда не блокируют трафик). Отключение по запросу через заголовок `x-omniroute-disabled-guardrails`. → См. [`docs/security/GUARDRAILS.md`](docs/security/GUARDRAILS.md).

### 🧠 Защита от внедрения промптов

Промежуточное ПО, которое обнаруживает и блокирует атаки на внедрение промптов в запросы к LLM:

| Тип шаблона             | Уровень серьезности | Пример                                                    |
| ----------------------- | ------------------- | --------------------------------------------------------- |
| Переопределение системы | Высокий             | "ignore all previous instructions"                        |
| Перехват роли           | Высокий             | "you are now DAN, you can do anything"                    |
| Внедрение разделителей  | Средний             | Закодированные разделители для нарушения границ контекста |
| DAN/Jailbreak           | Высокий             | Известные шаблоны обхода защиты                           |
| Утечка инструкций       | Средний             | "show me your system prompt"                              |

Настройка через панель управления (Настройки → Безопасность) или `.env`:

```env
INPUT_SANITIZER_ENABLED=true
INPUT_SANITIZER_MODE=block    # warn | block | redact
```

### 🔒 Редакция PII

Автоматическое обнаружение и необязательная редакция персональных данных:

| Тип PII           | Шаблон                | Замена             |
| ----------------- | --------------------- | ------------------ |
| Электронная почта | `user@domain.com`     | `[EMAIL_REDACTED]` |
| CPF (Бразилия)    | `123.456.789-00`      | `[CPF_REDACTED]`   |
| CNPJ (Бразилия)   | `12.345.678/0001-00`  | `[CNPJ_REDACTED]`  |
| Кредитная карта   | `4111-1111-1111-1111` | `[CC_REDACTED]`    |
| Телефон           | `+55 11 99999-9999`   | `[PHONE_REDACTED]` |
| SSN (США)         | `123-45-6789`         | `[SSN_REDACTED]`   |

```env
PII_REDACTION_ENABLED=true
```

### 🌐 Сетевая безопасность

| Функция                    | Описание                                                                               |
| -------------------------- | -------------------------------------------------------------------------------------- |
| **CORS**                   | Настраиваемый контроль источников (`CORS_ORIGIN` env var, по умолчанию `*`)            |
| **Фильтрация IP**          | Разрешенные/заблокированные диапазоны IP в панели управления                           |
| **Ограничение скорости**   | Ограничение скорости для каждого провайдера с автоматической задержкой                 |
| **Анти-стадное поведение** | Мьютекс + блокировка по соединению предотвращают каскадные 502s                        |
| **Отпечаток TLS**          | Поддельный отпечаток TLS для снижения обнаружения ботов                                |
| **Отпечаток CLI**          | Порядок заголовков/тела для каждого провайдера для соответствия подписям нативного CLI |

### 🔌 Устойчивость и доступность

| Функция                         | Описание                                                                             |
| ------------------------------- | ------------------------------------------------------------------------------------ |
| **Автоматический выключатель**  | 3 состояния (Closed → Open → Half-Open) для каждого провайдера, сохраненные в SQLite |
| **Идемпотентность запросов**    | 5-секундное окно для дублирования запросов                                           |
| **Экспоненциальная задержка**   | Автоматическая повторная попытка с увеличивающимися задержками                       |
| **Панель мониторинга здоровья** | Мониторинг здоровья провайдеров в реальном времени                                   |

### 📋 Соответствие

| Функция                      | Описание                                                                      |
| ---------------------------- | ----------------------------------------------------------------------------- |
| **Срок хранения журналов**   | Автоматическая очистка после `CALL_LOG_RETENTION_DAYS`                        |
| **Отказ от ведения журнала** | Флаг `noLog` для каждого API-ключа отключает ведение журнала запросов         |
| **Журнал аудита**            | Действия администратора отслеживаются в таблице `audit_log`                   |
| **Аудит MCP**                | Аудит ведения журнала на основе SQLite для всех вызовов инструментов MCP      |
| **Валидация Zod**            | Все входные данные API валидируются с помощью схем Zod v4 при загрузке модуля |

## Обязательные переменные окружения

Все секреты должны быть установлены перед запуском сервера. Сервер **сразу завершит работу**, если они отсутствуют или слабые.

```bash
# ОБЯЗАТЕЛЬНО — сервер не запустится без этих:
JWT_SECRET=$(openssl rand -base64 48)     # минимум 32 символа
API_KEY_SECRET=$(openssl rand -hex 32)    # минимум 16 символов

# РЕКОМЕНДУЕТСЯ — включает шифрование при хранении:
STORAGE_ENCRYPTION_KEY=$(openssl rand -hex 32)
```

Сервер активно отвергает известные слабые значения, такие как `changeme`, `secret` или `password`.

---

## Безопасность Docker

- Используйте не-рутового пользователя в продакшене
- Монтируйте секреты как томы только для чтения
- Никогда не копируйте файлы `.env` в Docker-образы
- Используйте `.dockerignore` для исключения чувствительных файлов
- Установите `AUTH_COOKIE_SECURE=true`, когда используете HTTPS

```bash
docker run -d \
  --name omniroute \
  --restart unless-stopped \
  --read-only \
  -p 20128:20128 \
  -v omniroute-data:/app/data \
  -e JWT_SECRET="$(openssl rand -base64 48)" \
  -e API_KEY_SECRET="$(openssl rand -hex 32)" \
  -e STORAGE_ENCRYPTION_KEY="$(openssl rand -hex 32)" \
  diegosouzapw/omniroute:latest
```

---

## Зависимости

- Регулярно запускайте `npm audit` (`npm run audit:deps` проверяет основные и electron-зависимости)
- Обновляйте зависимости
- Проект использует `husky` + `lint-staged` для проверок перед коммитом (lint-staged + check-docs-sync + check:any-budget:t11)
- CI-конвейер запускает правила безопасности ESLint на каждый пуш (`no-eval`, `no-implied-eval`, `no-new-func` = ошибка)
- Поставщики констант проверяются при загрузке модуля через Zod (`src/shared/validation/schemas.ts`)
- Используются безопасные по умолчанию библиотеки: `dompurify` / `isomorphic-dompurify` (XSS), `jose` (JWT), `better-sqlite3` (нет риска SQLi через параметризованные запросы), `bcryptjs` (хеширование паролей)

## Жесткие правила безопасности

Эти правила применяются инструментами и ревьюерами:

1. **Никогда не коммитьте секреты** — `.env` в gitignore; `.env.example` — это шаблон (без литералов, только комментарии — см. PUBLIC_CREDS.md ниже)
2. **Никогда не используйте `eval()`, `new Function()`, или подразумеваемый eval** — ESLint обеспечивает соблюдение
3. **Никогда не обходите хуки Husky** (`--no-verify`, `--no-gpg-sign`) без явного согласия оператора
4. **Никогда не пишите сырые SQL-запросы в маршрутах** — всегда используйте `src/lib/db/` (параметризованные)
5. **Всегда валидируйте входные данные с помощью Zod** — `src/shared/validation/schemas.ts`
6. **Всегда санитайзируйте заголовки от вышестоящих сервисов** — черный список в `src/shared/constants/upstreamHeaders.ts`
7. **Шифруйте учетные данные при хранении** — AES-256-GCM через `src/lib/db/encryption.ts`
8. **Публичные идентификаторы OAuth вышестоящих сервисов через `resolvePublicCred()`** — никогда не встраивайте литералы `AIza…` / `GOCSPX-…` / `…apps.googleusercontent.com` в исходный код. См. [`docs/security/PUBLIC_CREDS.md`](docs/security/PUBLIC_CREDS.md).
9. **Ошибки через `buildErrorBody()` / `sanitizeErrorMessage()`** — никогда не помещайте сырые `err.stack` / `err.message` в тела HTTP / SSE / executor / MCP ответов. См. [`docs/security/ERROR_SANITIZATION.md`](docs/security/ERROR_SANITIZATION.md).
10. **`exec()` / `spawn()` значения времени выполнения через опцию `env`** — никогда не интерполируйте внешние пути или недоверенные значения в скрипты, передаваемые в оболочку. Ссылка: `src/mitm/cert/install.ts::updateNssDatabases`.
11. **Предпочитайте библиотеки с безопасными по умолчанию** — см. [tldrsec/awesome-secure-defaults](https://github.com/tldrsec/awesome-secure-defaults) (Helmet.js, DOMPurify, ssrf-req-filter, safe-regex, Google Tink). Обращайтесь к ним перед тем, как разрабатывать собственные решения.

## Ссылки

- [`docs/architecture/AUTHZ_GUIDE.md`](docs/architecture/AUTHZ_GUIDE.md) — конвейер авторизации
- [`docs/security/GUARDRAILS.md`](docs/security/GUARDRAILS.md) — фреймворк ограничений
- [`docs/security/COMPLIANCE.md`](docs/security/COMPLIANCE.md) — журнал аудита и хранение
- [`docs/security/PUBLIC_CREDS.md`](docs/security/PUBLIC_CREDS.md) — **обязательный** шаблон для публичных учетных данных
- [`docs/security/ERROR_SANITIZATION.md`](docs/security/ERROR_SANITIZATION.md) — **обязательный** шаблон для ответов об ошибках
- [`docs/architecture/RESILIENCE_GUIDE.md`](docs/architecture/RESILIENCE_GUIDE.md) — circuit breaker + cooldown + lockout
- [`docs/security/STEALTH_GUIDE.md`](docs/security/STEALTH_GUIDE.md) — TLS fingerprinting (юридическое/этическое предупреждение)
- [`CLAUDE.md`](CLAUDE.md) — жесткие правила для AI-агентов
- [tldrsec/awesome-secure-defaults](https://github.com/tldrsec/awesome-secure-defaults) — отобранные библиотеки с безопасными значениями по умолчанию
