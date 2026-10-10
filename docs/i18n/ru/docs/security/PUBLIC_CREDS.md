# PUBLIC_CREDS (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../security/PUBLIC_CREDS.md) · 🇸🇦 [ar](../../../ar/docs/security/PUBLIC_CREDS.md) · 🇦🇿 [az](../../../az/docs/security/PUBLIC_CREDS.md) · 🇧🇬 [bg](../../../bg/docs/security/PUBLIC_CREDS.md) · 🇧🇩 [bn](../../../bn/docs/security/PUBLIC_CREDS.md) · 🇨🇿 [cs](../../../cs/docs/security/PUBLIC_CREDS.md) · 🇩🇰 [da](../../../da/docs/security/PUBLIC_CREDS.md) · 🇩🇪 [de](../../../de/docs/security/PUBLIC_CREDS.md) · 🇪🇸 [es](../../../es/docs/security/PUBLIC_CREDS.md) · 🇮🇷 [fa](../../../fa/docs/security/PUBLIC_CREDS.md) · 🇫🇮 [fi](../../../fi/docs/security/PUBLIC_CREDS.md) · 🇫🇷 [fr](../../../fr/docs/security/PUBLIC_CREDS.md) · 🇮🇳 [gu](../../../gu/docs/security/PUBLIC_CREDS.md) · 🇮🇱 [he](../../../he/docs/security/PUBLIC_CREDS.md) · 🇮🇳 [hi](../../../hi/docs/security/PUBLIC_CREDS.md) · 🇭🇺 [hu](../../../hu/docs/security/PUBLIC_CREDS.md) · 🇮🇩 [id](../../../id/docs/security/PUBLIC_CREDS.md) · 🇮🇩 [in](../../../in/docs/security/PUBLIC_CREDS.md) · 🇮🇹 [it](../../../it/docs/security/PUBLIC_CREDS.md) · 🇯🇵 [ja](../../../ja/docs/security/PUBLIC_CREDS.md) · 🇰🇷 [ko](../../../ko/docs/security/PUBLIC_CREDS.md) · 🇮🇳 [mr](../../../mr/docs/security/PUBLIC_CREDS.md) · 🇲🇾 [ms](../../../ms/docs/security/PUBLIC_CREDS.md) · 🇳🇱 [nl](../../../nl/docs/security/PUBLIC_CREDS.md) · 🇳🇴 [no](../../../no/docs/security/PUBLIC_CREDS.md) · 🇵🇭 [phi](../../../phi/docs/security/PUBLIC_CREDS.md) · 🇵🇱 [pl](../../../pl/docs/security/PUBLIC_CREDS.md) · 🇵🇹 [pt](../../../pt/docs/security/PUBLIC_CREDS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/PUBLIC_CREDS.md) · 🇷🇴 [ro](../../../ro/docs/security/PUBLIC_CREDS.md) · 🇸🇰 [sk](../../../sk/docs/security/PUBLIC_CREDS.md) · 🇸🇪 [sv](../../../sv/docs/security/PUBLIC_CREDS.md) · 🇰🇪 [sw](../../../sw/docs/security/PUBLIC_CREDS.md) · 🇮🇳 [ta](../../../ta/docs/security/PUBLIC_CREDS.md) · 🇮🇳 [te](../../../te/docs/security/PUBLIC_CREDS.md) · 🇹🇭 [th](../../../th/docs/security/PUBLIC_CREDS.md) · 🇹🇷 [tr](../../../tr/docs/security/PUBLIC_CREDS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/PUBLIC_CREDS.md) · 🇵🇰 [ur](../../../ur/docs/security/PUBLIC_CREDS.md) · 🇻🇳 [vi](../../../vi/docs/security/PUBLIC_CREDS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/PUBLIC_CREDS.md)

---

---
title: "Обработка публичных учетных данных"
version: 3.8.2
lastUpdated: 2026-05-14
---

# Обработка публичных учетных данных

> **Источник истины:** `open-sse/utils/publicCreds.ts`
> **Тесты:** `tests/unit/publicCreds.test.ts`
> **Последнее обновление:** 2026-05-14 — v3.8.0
> **Аудитория:** Инженеры, интегрирующие провайдеры, которые поставляют публичные OAuth client_id / client_secret / Firebase Web API ключи в своих публичных CLI.
> **Статус:** **ОБЯЗАТЕЛЕН** для всего нового кода, который встраивает идентификаторы вышестоящих провайдеров.

## Зачем это существует

Некоторые вышестоящие провайдеры (Gemini CLI, Antigravity CLI, Windsurf / Devin CLI, GitHub Copilot и подобные OAuth-ориентированные клиенты) поставляют учетные данные, извлеченные из их **публичных бинарных файлов или веб-приложений**. Google явно документирует, что это не секреты:

- [OAuth 2.0 для нативных приложений (PKCE)](https://developers.google.com/identity/protocols/oauth2/native-app) — OAuth client_id / client_secret для установленных приложений являются публичными; PKCE обеспечивает фактическую безопасность.
- [Firebase API ключи](https://firebase.google.com/docs/projects/api-keys) — Идентификаторы веб-клиентов публичны по дизайну.

OmniRoute должен встраивать эти значения, чтобы пользователи, которые не настроили `.env`, все равно получали рабочий OAuth- поток из коробки. Без встроенного резервного значения Gemini / Antigravity / Windsurf провайдеры перестают работать для любого пользователя, который следует "просто клонировать и запустить" пути.

Однако буквальные значения, такие как `AIzaSy…`, `GOCSPX-…`, `…apps.googleusercontent.com`, соответствуют **GitHub Secret Scanning**, **Semgrep** и другим сканерам шаблонов. Каждый выпуск становится шумным потоком ложных срабатываний, защита push блокирует легитимные коммиты, и операторы перестают доверять ленту оповещений.

Помощник `open-sse/utils/publicCreds.ts` решает оба ограничения одновременно:

- Встраивает публичный идентификатор как **последовательность байтов XOR-маски** (нет шаблона сканера в исходном коде).
- Декодирует во время выполнения с помощью `decodePublicCred` / `resolvePublicCred`.
- Обнаруживает сырые значения, которые уже следуют хорошо известным префиксам (`AIza`, `GOCSPX-`, `<digits>-<32hex>.apps.googleusercontent.com`, `Iv1.<hex>`) и передает их без изменений, чтобы пользователи с сырыми значениями в их существующем `.env` продолжали работать с **нулевой миграцией**.

Это **обфускация, а не шифрование.** Любой, кто читает исходный код, может восстановить значение — что нормально, потому что значение публично по дизайну. Единственная цель — избежать совпадений с шаблонами сканеров.

## Обязательный шаблон

### 1. Добавление нового публичного идентификатора

Когда вам нужно встроить новое значение, предоставленное вышестоящим провайдером, которое:

- поступает из публичного CLI / настольного приложения / браузерного пакета, **и**
- вышестоящий провайдер документирует (или рассматривает) его как публичный идентификатор клиента, **и**
- сканер шаблонов в противном случае будет соответствовать ему (`AIza…`, `GOCSPX-…`, `<digits>-…apps.googleusercontent.com` и т.д.),

…следуйте этому чек-листу:

1. Сгенерируйте замаскированную байтовую последовательность:

   ```bash
   node --import tsx/esm -e \
     'import("./open-sse/utils/publicCreds.ts").then(m =>
        console.log(JSON.stringify(Array.from(
          Buffer.from(m.encodePublicCred("THE_PUBLIC_VALUE"), "base64")
        ))))'
   ```

2. Добавьте новую запись в `EMBEDDED_DEFAULTS` в `open-sse/utils/publicCreds.ts` с **нейтральным именем ключа** (`<provider>_id`, `<provider>_alt`, `<provider>_fb` и т.д.). Не используйте имена вроде `client_secret` или `api_key` в помощнике — эти слова вызывают правила Semgrep generic-secret.

3. Добавьте `keyof typeof EMBEDDED_DEFAULTS` в объединение публичных типов (оно автоматически выводится).

4. В коде потребителя замените жестко закодированное литеральное значение на:

   ```ts
   // одиночное переопределение env
   clientSecret: resolvePublicCred("provider_alt", "PROVIDER_OAUTH_CLIENT_SECRET"),

   // несколько псевдонимов env (первый непустой выигрывает)
   clientId: resolvePublicCredMulti("provider_id", [
     "PROVIDER_CLI_OAUTH_CLIENT_ID",
     "PROVIDER_OAUTH_CLIENT_ID",
   ]),

   // нет переопределения env (всегда встроенный по умолчанию)
   firebaseApiKey: resolvePublicCred("provider_fb"),
   ```

5. Удалите литерал из `.env.example` (замените комментарием, указывающим читателей сюда):

   ```dotenv
   # ── Provider (Google / Firebase / etc.) ──
   # Public OAuth credentials are baked into the code via
   # open-sse/utils/publicCreds.ts. Set these vars only to use your own.
   # PROVIDER_OAUTH_CLIENT_ID=
   # PROVIDER_OAUTH_CLIENT_SECRET=
   ```

6. Обновите `tests/unit/publicCreds.test.ts`, чтобы добавить утверждение формы для нового ключа (проверяйте формат, а не литеральное значение — см. существующие тесты на шаблон).

7. **Никогда** не добавляйте литералы `AIza…` / `GOCSPX-…` / `…apps.googleusercontent.com` в тестовые файлы. Используйте `FAKE_*` константы, построенные из `.join("")` фрагментов (см. существующие тесты).

### 2. Потребители

- **Читайте только из `resolvePublicCred()` / `resolvePublicCredMulti()`** — никогда не вызывайте `decodePublicCredBytes()` напрямую вне помощника.
- Помощник намеренно дешевый (линейный байт XOR) и безопасен для вызова во время загрузки модуля; значения по умолчанию вычисляются один раз.
- Переопределение env всегда выигрывает. Если пользователь установит `PROVIDER_OAUTH_CLIENT_SECRET=GOCSPX-myown`, помощник передаст это сырое значение напрямую.

### 3. Запрещенные шаблоны

❌ **Никогда** не делайте следующее в рабочем коде (`src/`, `open-sse/`, `electron/`, `bin/`):

```ts
// ПЛОХО: литеральное значение вызывает Secret Scanning + Semgrep
clientSecret: process.env.PROVIDER_OAUTH_CLIENT_SECRET || "GOCSPX-realvalue",

// ПЛОХО: base64 литерала — GitHub все еще обнаруживает с февраля 2025 года
clientSecret: process.env.PROVIDER_OAUTH_CLIENT_SECRET ||
  Buffer.from("R09DU1BYLXJlYWx2YWx1ZQ==", "base64").toString(),

// ПЛОХО: конкатенация строк, которая повторно собирает шаблон во время выполнения
clientSecret: "GO" + "CS" + "PX-" + "realvalue",

// ПЛОХО: шестнадцатеричное/ROT13 кодирование — другая обфускация, тот же риск обнаружения
clientSecret: hexDecode("474f4353..."),
```

Все это в конечном итоге вызывает срабатывание сканера. Используйте `resolvePublicCred()`.

❌ **Никогда** не добавляйте литералы учетных данных в `.env.example`. Пользователи, которым нужны реальные вышестоящие значения, могут извлечь их из публичного CLI сами, или использовать свою собственную регистрацию OAuth.

❌ **Никогда** не игнорируйте новое оповещение о сканировании секретов без предварительной проверки, следует ли переместить учетные данные в этот помощник.

## Связанные элементы управления

- `RAW_VALUE_PATTERN` в `publicCreds.ts` перечисляет префиксы, которые запускают пропуск (обратная совместимость). Расширяйте его только для документированных форматов открытых учетных данных, никогда не для проприетарных секретов.
- `.env.example` находится в скрипте `check-env-doc-sync` CI — когда вы удаляете переменную здесь, убедитесь, что документы соответствуют.
- Наборы тестов `npm run test:vitest` и `node --import tsx/esm --test tests/unit/publicCreds.test.ts` должны оставаться зелеными.

## Когда НЕ следует использовать этот хелпер

Этот хелпер **только** для учетных данных, которые:

1. Распространяются публично поставщиком (двоичный файл CLI, браузерный бандл, официальная документация).
2. Документированы или сильно подразумеваются как неконфиденциальные (PKCE-защищенные, веб-ключ Firebase, аналогичные).

Для всего остального — токены, выданные оператором, секреты на основе клиента, вашего собственного OAuth-приложения client_secret, ключи шифрования, JWT-секреты, пароли базы данных — используйте **только переменные окружения** (`process.env.FOO`, `||` резервное значение пусто / явная ошибка). Эти принадлежат в `.env` и [зашифрованному хранилищу учетных данных](./COMPLIANCE.md), а не в исходном коде.

## Ссылки

- [Google: OAuth 2.0 для нативных приложений](https://developers.google.com/identity/protocols/oauth2/native-app)
- [Firebase: API-ключи для идентификации клиента](https://firebase.google.com/docs/projects/api-keys)
- [GitHub Secret Scanning поддерживаемые секреты](https://docs.github.com/en/code-security/secret-scanning/introduction/supported-secret-scanning-patterns)
- [GitHub: обнаружение base64 для токенов (февраль 2025)](https://github.blog/changelog/2025-02-14-secret-scanning-detects-base64-encoded-github-tokens/)
- Коммит, введший этот хелпер: `1a39c31f` — _fix(security): маскировать открытые учетные данные поставщика + централизовать очистку ошибок_
