# STEALTH_GUIDE (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../security/STEALTH_GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/security/STEALTH_GUIDE.md) · 🇦🇿 [az](../../../az/docs/security/STEALTH_GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/security/STEALTH_GUIDE.md) · 🇧🇩 [bn](../../../bn/docs/security/STEALTH_GUIDE.md) · 🇨🇿 [cs](../../../cs/docs/security/STEALTH_GUIDE.md) · 🇩🇰 [da](../../../da/docs/security/STEALTH_GUIDE.md) · 🇩🇪 [de](../../../de/docs/security/STEALTH_GUIDE.md) · 🇪🇸 [es](../../../es/docs/security/STEALTH_GUIDE.md) · 🇮🇷 [fa](../../../fa/docs/security/STEALTH_GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/security/STEALTH_GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/security/STEALTH_GUIDE.md) · 🇮🇳 [gu](../../../gu/docs/security/STEALTH_GUIDE.md) · 🇮🇱 [he](../../../he/docs/security/STEALTH_GUIDE.md) · 🇮🇳 [hi](../../../hi/docs/security/STEALTH_GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/security/STEALTH_GUIDE.md) · 🇮🇩 [id](../../../id/docs/security/STEALTH_GUIDE.md) · 🇮🇩 [in](../../../in/docs/security/STEALTH_GUIDE.md) · 🇮🇹 [it](../../../it/docs/security/STEALTH_GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/security/STEALTH_GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/security/STEALTH_GUIDE.md) · 🇮🇳 [mr](../../../mr/docs/security/STEALTH_GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/security/STEALTH_GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/security/STEALTH_GUIDE.md) · 🇳🇴 [no](../../../no/docs/security/STEALTH_GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/security/STEALTH_GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/security/STEALTH_GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/security/STEALTH_GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/STEALTH_GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/security/STEALTH_GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/security/STEALTH_GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/security/STEALTH_GUIDE.md) · 🇰🇪 [sw](../../../sw/docs/security/STEALTH_GUIDE.md) · 🇮🇳 [ta](../../../ta/docs/security/STEALTH_GUIDE.md) · 🇮🇳 [te](../../../te/docs/security/STEALTH_GUIDE.md) · 🇹🇭 [th](../../../th/docs/security/STEALTH_GUIDE.md) · 🇹🇷 [tr](../../../tr/docs/security/STEALTH_GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/STEALTH_GUIDE.md) · 🇵🇰 [ur](../../../ur/docs/security/STEALTH_GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/security/STEALTH_GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/STEALTH_GUIDE.md)

---

---
title: "Руководство по скрытности"
version: 3.8.2
lastUpdated: 2026-05-13
---

# Руководство по скрытности

> **Источник истины:** `open-sse/utils/tlsClient.ts`, `open-sse/services/{chatgptTlsClient,claudeCodeCCH,claudeCodeFingerprint,claudeCodeObfuscation,claudeCodeCompatible,antigravityObfuscation}.ts`, `open-sse/config/cliFingerprints.ts`, `src/mitm/`
> **Последнее обновление:** 2026-05-13 — v3.8.0
> **Аудитория:** Инженеры, поддерживающие интеграции провайдеров с учетом скрытности.

OmniRoute интегрируется с провайдерами, чьи границы активно отслеживают неофициальные клиенты (TLS JA3/JA4, порядок заголовков, форма JSON-тел, токены целостности). На этой странице документируются поверхности скрытности, которые OmniRoute предоставляет, и где они реализованы.

## Юридическое и этичное уведомление

Функции скрытности существуют, чтобы OmniRoute могла действовать как совместимый слой между пользовательскими официальными аккаунтами (Claude Code CLI, ChatGPT Desktop/Web, Antigravity, Cursor и т.д.) и унифицированным API OmniRoute. Они **не** предназначены для обхода систем обнаружения мошенничества, распространения учетных данных или нарушения условий обслуживания провайдеров. Разработчики ожидают, что операторы будут соблюдать условия обслуживания, которые они подписали при создании учетных записей.

---

## Слой TLS-отпечатков

### `open-sse/utils/tlsClient.ts` — wreq-js (Chrome 124)

Лениво загружаемая сессия `wreq-js`, которая имитирует **Chrome 124 на macOS**. Используется как общий JA3/JA4-обертка для апстримов за Cloudflare. Переходит на нативный fetch, когда `wreq-js` не установлен (`available = false`).

- Синглтон-сессия: `browser: "chrome_124", os: "macos"`
- Разрешение прокси (приоритет): `HTTPS_PROXY` → `HTTP_PROXY` → `ALL_PROXY` (также в нижнем регистре)
- Таймаут: `TLS_CLIENT_TIMEOUT_MS` (наследуется от `FETCH_TIMEOUT_MS`, по умолчанию 600000)
- Ответ `wreq-js` совместим с fetch (`headers`, `text()`, `json()`, `clone()`, `body`).

### `open-sse/services/chatgptTlsClient.ts` — tls-client-node (Firefox 148)

Выделенный TLS-имитатор для `chatgpt.com`. Конфигурация Cloudflare ChatGPT закрепляет `cf_clearance` за JA3/JA4 + порядком кадров HTTP/2 SETTINGS — даже с действительными куками рукопожатие undici получает `cf-mitigated: challenge`.

- Профиль: `firefox_148` (должен соответствовать `User-Agent` Firefox 148)
- Режим: `runtimeMode: "native"` (загруженная через koffi общая библиотека; избегает управляемого HTTP-сайдкара)
- `withRandomTLSExtensionOrder: true`
- `tlsFetchChatGpt(url, options)` поддерживает потоковую передачу (пишет тело во временный файл, хвост которого читается как `ReadableStream`)
- Обнаружение зависания: `raceWithTimeout` + `TlsClientHangError` запускает `resetClientCache()`, чтобы следующий вызов перезапустил связывание
- Разрешение прокси (приоритет): `proxyUrl` на уровне вызова → `OMNIROUTE_TLS_PROXY_URL` → `HTTPS_PROXY`/`HTTP_PROXY`/`ALL_PROXY` (нативное связывание **не** само читает эти переменные окружения; их нужно передавать через поток)
- Ошибки: `TlsClientUnavailableError` (бинарный файл отсутствует), `TlsClientHangError` (связывание зависло)

---

## Набор инструментов для скрытности Claude Code

Когда `cliCompatMode` включен, OmniRoute преобразует исходящие запросы к Claude так, чтобы они были неотличимы от трафика `claude-cli`. Три модуля сотрудничают:

### `claudeCodeFingerprint.ts`

Вычисляет 3-символьный `cc_version` отпечаток, встроенный в заголовок выставления счетов:

```
SHA256(SALT + msg[4] + msg[7] + msg[20] + version)[:3]
```

- `FINGERPRINT_SALT = "59cf53e54c78"` (жестко закодировано; соответствует официальному клиенту)
- Входные данные: символы на индексах 4, 7, 20 первого текста сообщения пользователя + строка версии
- Выход: 3-символьный префикс шестнадцатеричного кода

### `claudeCodeCCH.ts` (Client Content Hash)

Серверная проверка целостности, которую официальный клиент Claude Code CLI вычисляет с помощью Bun/Zig. OmniRoute повторяет это с помощью `xxhash-wasm`:

1. Сериализует тело с `cch=00000;` заполнителем
2. `xxhash64(bytes, seed) & 0xFFFFF`
3. Пятизначный шестнадцатеричный код с нулевым заполнением в нижнем регистре
4. Заменяет `cch=00000;` на вычисленный токен

Константы:

- Seed: `0x6e52736ac806831e`
- Шаблон: `/\bcch=([0-9a-f]{5});/`

### `claudeCodeObfuscation.ts`

Вставляет **нулевой ширины соединитель** (`U+200D`) после первого символа "чувствительных" имен клиентов, чтобы апстрим-фильтры не могли их искать. Список слов по умолчанию:

```
opencode, open-code, cline, roo-cline, roo_cline, cursor, windsurf,
aider, continue.dev, copilot, avante, codecompanion
```

Применяется к: блокам `system`, всему `messages[].content` и `tools[].description` / `tools[].function.description`. Может быть переопределен оператором через `setSensitiveWords()`.

### `claudeCodeCompatible.ts` — провайдеры `anthropic-compatible-cc-*`

Для третьих сторонних реле Anthropic, которые принимают только "настоящий" трафик Claude Code:

- `CLAUDE_CODE_COMPATIBLE_USER_AGENT = "claude-cli/2.1.146 (external, sdk-cli)"`
- `CLAUDE_CODE_COMPATIBLE_STAINLESS_PACKAGE_VERSION = "0.81.0"`
- `CLAUDE_CODE_COMPATIBLE_STAINLESS_RUNTIME_VERSION = "v24.3.0"`
- `anthropic-beta = "claude-code-20250219,interleaved-thinking-2025-05-14,effort-2025-11-24"`
- `CONTEXT_1M_BETA_HEADER = "context-1m-2025-08-07"` (семейство Opus/Sonnet 4.x)
- Путь по умолчанию: `/v1/messages?beta=true`

Сестры-модули в том же пакете:

- `claudeCodeConstraints.ts` — правила температуры + кэш-контроля
- `claudeCodeToolRemapper.ts` — перемаппинг имен инструментов
- `claudeCodeExtraRemap.ts` — дополнительная нормализация полезной нагрузки

---

## Антигравитационная скрытность

### `antigravityObfuscation.ts`

Тот же трюк с нулевым шириной соединителем, что и у Claude Code, но с расширенным списком слов, который также маскирует: `claude code`, `claude-code`, `kilo code`, `kilocode`, **`omniroute`**. Отражает `ZEROGRAVITY_SENSITIVE_WORDS` из ZeroGravity и систему маскировки CLIProxyAPI.

### `antigravityHeaderScrub.ts`

Удаляет маркеры Stainless SDK (`x-stainless-lang`, `x-stainless-package-version`, `x-stainless-os`, `x-stainless-arch`, `x-stainless-runtime`, `x-stainless-runtime-version`, `x-stainless-timeout`, `x-stainless-retry-count`, `x-stainless-helper-method`) перед пересылкой.

### ⚠️ Риск: `ANTIGRAVITY_CREDITS=always` (горячая точка блокировки аккаунта)

`ANTIGRAVITY_CREDITS=always` (используется `open-sse/executors/antigravity.ts`) перенаправляет **каждый** запрос через Antigravity AI Credit Overages (платные кредиты Google) вместо того, чтобы позволить использовать бесплатный лимит Google. Это документируется как функция, но это **единственная самая распространенная жалоба на нарушение ToS**, которую мы видим — несколько аккаунтов Google Ultra были заблокированы с `403 / "service disabled for ToS violation" / insufficient_quota` после работы несколько часов с `=always`.

Верхнеуровневое усиление находится **на стороне Google**, а не в чем-то, что может предотвратить OmniRoute. Имя переменной окружения и существующая документация делают его звучащим как безопасный переключатель; это не так.

**Почему это привлекает большее внимание системы обнаружения злоупотреблений, чем использование только бесплатного лимита:**

- Постоянное автоматизированное расходование на одном аккаунте Google флагируется иначе, чем бесплатный лимит, который достигает лимита и останавливается.
- Перерасход кредитов не имеет предела по скорости, поэтому неправильно настроенный клиент может потратить несколько сотен долларов за несколько минут и выглядеть как перепродажа API-ключей или бот-трафик.
- Несколько пользователей OmniRoute, использующих перерасход кредитов в параллельном режиме с одного внешнего IP, усиливает сигнал.

**Рекомендуемая позиция:**

1. **По умолчанию используйте `ANTIGRAVITY_CREDITS=retry`** — перерасход используется только тогда, когда бесплатный лимит возвращает 429, а не на каждый запрос. Это безопаснее из двух ненулевых режимов.
2. **Распределите нагрузку между провайдерами через Auto-Combo** (`model: "auto"` или `kr/glm/etc`-комбо) вместо насыщения одного аккаунта Antigravity.
3. **Установите ограничения RPM для каждого соединения** на странице редактирования провайдера Antigravity (Dashboard → Providers → Antigravity → connection → rate limit). 30–60 RPM — это оборонительная верхняя граница для постоянного использования.
4. **Используйте различные исходящие IP-адреса** для каждого аккаунта Antigravity, если это возможно (направление резиденциальных прокси на один и тот же аккаунт с множества пользователей усиливает сигнал злоупотребления).
5. **Если заблокированы**: обратитесь через `support.google.com` → "Restore Workspace/Account access" с точным телом ответа `quota_exceeded` / `service disabled`, которое отправил Google. Восстановление не гарантируется.

Это предупреждение также отображается встроенно в панели управления рядом с экраном редактирования провайдера Antigravity, когда `ANTIGRAVITY_CREDITS` установлен в `always` (или будет в v3.8.0; отслеживается отдельно).

Точки касания:

- `open-sse/executors/antigravity.ts` — читает `process.env.ANTIGRAVITY_CREDITS`
- `src/lib/oauth/providers/antigravity.ts` — трубопровод для учетных данных
- Оригинальный отчет об инциденте: Discussion [#1183](https://github.com/diegosouzapw/OmniRoute/discussions/1183)

---
```

## CLI Fingerprint Registry — `open-sse/config/cliFingerprints.ts`

Таблица для каждого провайдера, которая фиксирует **точный** порядок заголовков и порядок полей JSON-тел, захваченных из трассировок mitmproxy официальных CLI. В настоящее время зарегистрированы: `codex`, `claude`, а также профили, полученные во время выполнения в `providerHeaderProfiles.ts` для `antigravity`, `qwen`, `github`.

```ts
interface CliFingerprint {
  headerOrder: string[]; // чувствителен к регистру
  bodyFieldOrder: string[]; // ключи верхнего уровня JSON
  userAgent?: string | (() => string);
  extraHeaders?: Record<string, string>;
}
```

Переключение для каждого провайдера через env (см. ниже). При отключении заголовки/ключи тела появляются в том порядке, который им дал Node/JSON — легко идентифицировать.

---

## MITM Proxy (Antigravity, Linux/macOS/Windows)

Для CLI, двоичные файлы которых не могут быть перенаправлены через `OPENAI_BASE_URL`, OmniRoute запускает локальный прокси с терминацией TLS. Конечные точки находятся под `src/app/api/cli-tools/antigravity-mitm/`.

| Метод | Конечная точка                          | Назначение                                      |
| ------ | --------------------------------------- | ------------------------------------------------ |
| GET    | `/api/cli-tools/antigravity-mitm`       | Статус — running, pid, dnsConfigured, certExists |
| POST   | `/api/cli-tools/antigravity-mitm`       | Запуск MITM (требует `apiKey` + `sudoPassword`) |
| DELETE | `/api/cli-tools/antigravity-mitm`       | Остановка MITM                                  |
| GET    | `/api/cli-tools/antigravity-mitm/alias` | Список псевдонимов моделей                       |
| PUT    | `/api/cli-tools/antigravity-mitm/alias` | Сохранение псевдонимов моделей для инструмента   |

Целевой перехваченный хост: **`daily-cloudcode-pa.googleapis.com`** (входящий для Antigravity).

### Последовательность запуска (`src/mitm/manager.ts::startMitm`)

1. Генерация самоподписанного сертификата через `selfsigned` (RSA-2048, SHA-256, 1 год) — `cert/generate.ts`
2. Установка сертификата в хранилище доверенных сертификатов системы — `cert/install.ts`
3. Добавление записи хоста `127.0.0.1 daily-cloudcode-pa.googleapis.com` — `dns/dnsConfig.ts`
4. Запуск `src/mitm/server.cjs` с `ROUTER_API_KEY` + `MITM_LOCAL_PORT` (по умолчанию `443`)
5. Сохранение PID в `<DATA_DIR>/mitm/.mitm.pid`

### Динамическое обнаружение хранилища сертификатов Linux — `cert/install.ts`

`getLinuxCertConfig()` проходит по списку приоритетов и выбирает первую существующую директорию:

| Семейство дистрибутивов      | Директория                                   | Команда обновления         |
| ---------------------------- | ------------------------------------------- | --------------------------- |
| Debian / Ubuntu             | `/usr/local/share/ca-certificates`          | `update-ca-certificates`   |
| Arch / CachyOS / Manjaro    | `/etc/ca-certificates/trust-source/anchors` | `update-ca-trust`          |
| Fedora / RHEL / CentOS      | `/etc/pki/ca-trust/source/anchors`          | `update-ca-trust`          |
| openSUSE                    | `/etc/pki/trust/anchors`                    | `update-ca-certificates`   |

Имя файла сертификата: `omniroute-mitm.crt`. Проверка соответствия отпечатка через `getCertFingerprint()` (SHA-1 DER).

Дополнительно, `updateNssDatabases()` устанавливает в базы данных NSS пользователя, когда доступен `certutil`: `~/.pki/nssdb`, `~/snap/chromium/.../nssdb`, все профили Firefox (включая snap), под псевдонимом **`OmniRoute MITM Root CA`**.

### macOS / Windows

- **macOS:** `security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain`
- **Windows:** повышенный PowerShell → `certutil -addstore Root`

### Аутентификация

Все конечные точки MITM требуют аутентификации управления (`requireCliToolsAuth`). Пароль sudo кэшируется в области модуля (никогда не `globalThis`) и очищается при `stopMitm()`.

## Переопределение User-Agent — переменные окружения (раздел 12 в `.env.example`)

| Переменная               | Значение по умолчанию                              |
| ------------------------ | --------------------------------------------------- |
| `CLAUDE_USER_AGENT`      | `claude-cli/2.1.146 (external, cli)`                 |
| `CODEX_USER_AGENT`       | `codex-cli/0.132.0 (Windows 10.0.26200; x64)`        |
| `GITHUB_USER_AGENT`      | `GitHubCopilotChat/0.45.1`                           |
| `ANTIGRAVITY_USER_AGENT` | `antigravity/2.0.1 darwin/arm64`                     |
| `KIRO_USER_AGENT`        | `AWS-SDK-JS/3.0.0 kiro-ide/1.0.0`                    |
| `QODER_USER_AGENT`       | `Qoder-Cli`                                         |
| `QWEN_USER_AGENT`        | `QwenCode/0.15.9 (linux; x64)`                       |
| `CURSOR_USER_AGENT`      | `Cursor/3.3`                                        |
| `GEMINI_CLI_USER_AGENT`  | `google-api-nodejs-client/10.3.0`                   |

Используется в `open-sse/executors/base.ts::buildHeaders()` через динамический поиск. **Обновляйте эти значения, когда провайдеры выпускают новые версии CLI** — устаревшие строки User-Agent начинают отклоняться как устаревшие клиенты.

## Режимы совместимости CLI (раздел 13 в `.env.example`)

| Переменная                  | Эффект                          |
| -------------------------- | ------------------------------- |
| `CLI_COMPAT_CODEX=1`       | Отпечаток Codex                  |
| `CLI_COMPAT_CLAUDE=1`      | Отпечаток claude-cli             |
| `CLI_COMPAT_GITHUB=1`      | Отпечаток GitHub Copilot Chat    |
| `CLI_COMPAT_ANTIGRAVITY=1` | Отпечаток Antigravity            |
| `CLI_COMPAT_KIRO=1`        | Kiro                            |
| `CLI_COMPAT_CURSOR=1`      | Cursor                          |
| `CLI_COMPAT_KIMI_CODING=1` | Kimi Coding                     |
| `CLI_COMPAT_KILOCODE=1`    | KiloCode                        |
| `CLI_COMPAT_CLINE=1`       | Cline                           |
| `CLI_COMPAT_QWEN=1`        | Qwen Code                       |
| `CLI_COMPAT_ALL=1`         | Включить все вышеперечисленное  |

IP-адрес провайдера **всегда сохраняется** — переключатель только изменяет изображение запроса, он не переключает IP-выход.

---

## Очистка входящих заголовков

OmniRoute очищает входящие заголовки клиента перед пересылкой, чтобы запрос, поступивший от Cursor, не утекал с `User-Agent: Cursor/X.Y.Z` к Claude. Смотрите `src/shared/constants/upstreamHeaders.ts` для списка запрещенных заголовков, который синхронизирован с Zod-схемами и юнит-тестами.

---

## Обновление отпечатков при изменении провайдера

1. Захватить официальный трафик CLI с помощью `mitmproxy` (перехват TLS + дамп)
2. Извлечь JA3/JA4 и порядок заголовков
3. Обновить соответствующую запись `CLI_FINGERPRINTS[...]`
4. Увеличить соответствующее значение по умолчанию `*_USER_AGENT` в `.env.example`
5. Если изменился сам TLS-рукопожатие: обновить `chatgptTlsClient.ts::CHATGPT_PROFILE` или опцию `browser:` в wreq-js
6. Запустить `chatgptTlsClient.test.ts` и ручной тест на живом провайдере
7. Выпустить патч-релиз; документировать в `CHANGELOG.md`

---

## Тесты

- `open-sse/services/__tests__/chatgptTlsClient.test.ts` — приоритет разрешения прокси, обработка прерываний, восстановление зависания
- `tests/unit/anthropic-cache-fingerprint.test.ts` — детерминированность отпечатков
- `tests/unit/chatgpt-web.test.ts` — энд-ту-энд путь для ChatGPT

---

## Смотрите также

- [RESILIENCE_GUIDE.md](../architecture/RESILIENCE_GUIDE.md) — что происходит, когда скрытый путь получает `403`
- [TROUBLESHOOTING.md](../guides/TROUBLESHOOTING.md)
- [ENVIRONMENT.md](../reference/ENVIRONMENT.md) — полная ссылка на переменные окружения
- [CLI-TOOLS.md](../reference/CLI-TOOLS.md) — представление оператора рабочего процесса MITM
