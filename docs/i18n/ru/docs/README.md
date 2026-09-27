# README (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../README.md) · 🇸🇦 [ar](../../ar/docs/README.md) · 🇦🇿 [az](../../az/docs/README.md) · 🇧🇬 [bg](../../bg/docs/README.md) · 🇧🇩 [bn](../../bn/docs/README.md) · 🇨🇿 [cs](../../cs/docs/README.md) · 🇩🇰 [da](../../da/docs/README.md) · 🇩🇪 [de](../../de/docs/README.md) · 🇪🇸 [es](../../es/docs/README.md) · 🇮🇷 [fa](../../fa/docs/README.md) · 🇫🇮 [fi](../../fi/docs/README.md) · 🇫🇷 [fr](../../fr/docs/README.md) · 🇮🇳 [gu](../../gu/docs/README.md) · 🇮🇱 [he](../../he/docs/README.md) · 🇮🇳 [hi](../../hi/docs/README.md) · 🇭🇺 [hu](../../hu/docs/README.md) · 🇮🇩 [id](../../id/docs/README.md) · 🇮🇩 [in](../../in/docs/README.md) · 🇮🇹 [it](../../it/docs/README.md) · 🇯🇵 [ja](../../ja/docs/README.md) · 🇰🇷 [ko](../../ko/docs/README.md) · 🇮🇳 [mr](../../mr/docs/README.md) · 🇲🇾 [ms](../../ms/docs/README.md) · 🇳🇱 [nl](../../nl/docs/README.md) · 🇳🇴 [no](../../no/docs/README.md) · 🇵🇭 [phi](../../phi/docs/README.md) · 🇵🇱 [pl](../../pl/docs/README.md) · 🇵🇹 [pt](../../pt/docs/README.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/README.md) · 🇷🇴 [ro](../../ro/docs/README.md) · 🇸🇰 [sk](../../sk/docs/README.md) · 🇸🇪 [sv](../../sv/docs/README.md) · 🇰🇪 [sw](../../sw/docs/README.md) · 🇮🇳 [ta](../../ta/docs/README.md) · 🇮🇳 [te](../../te/docs/README.md) · 🇹🇭 [th](../../th/docs/README.md) · 🇹🇷 [tr](../../tr/docs/README.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/README.md) · 🇵🇰 [ur](../../ur/docs/README.md) · 🇻🇳 [vi](../../vi/docs/README.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/README.md)

---

---
title: "Документация OmniRoute"
version: 3.8.2
lastUpdated: 2026-05-13
---

# Документация OmniRoute

Навигационный индекс документации OmniRoute. Темы сгруппированы по назначению, чтобы вы могли быстро найти нужное.

> Ищете обзор проекта, инструкции по установке или заметки о выпуске? Смотрите корневой [README.md](../README.md), [CHANGELOG.md](../CHANGELOG.md) и [CONTRIBUTING.md](../CONTRIBUTING.md).

---

## architecture/

Как система собирается вместе — читайте это, чтобы понять среду выполнения, структуру кода и модель устойчивости.

- [ARCHITECTURE.md](architecture/ARCHITECTURE.md) — высокоуровневая архитектура системы (конвейер запросов, слои, модули).
- [CODEBASE_DOCUMENTATION.md](architecture/CODEBASE_DOCUMENTATION.md) — справочник для инженера по кодовой базе.
- [REPOSITORY_MAP.md](architecture/REPOSITORY_MAP.md) — справочник по каталогу, каталог за каталогом.
- [AUTHZ_GUIDE.md](architecture/AUTHZ_GUIDE.md) — конвейер авторизации (классификатор маршрутов + движок политик).
- [RESILIENCE_GUIDE.md](architecture/RESILIENCE_GUIDE.md) — предохранитель провайдера, охлаждение соединения и блокировка модели.

## guides/

Пошаговые инструкции для операторов и конечных пользователей.

- [SETUP_GUIDE.md](guides/SETUP_GUIDE.md) — первоначальная настройка OmniRoute.
- [USER_GUIDE.md](guides/USER_GUIDE.md) — ежедневное использование панели управления и API.
- [DOCKER_GUIDE.md](guides/DOCKER_GUIDE.md) — запуск OmniRoute под Docker.
- [ELECTRON_GUIDE.md](guides/ELECTRON_GUIDE.md) — настольные сборки (Electron).
- [TERMUX_GUIDE.md](guides/TERMUX_GUIDE.md) — запуск на Android через Termux.
- [PWA_GUIDE.md](guides/PWA_GUIDE.md) — установка панели управления как PWA.
- [TROUBLESHOOTING.md](guides/TROUBLESHOOTING.md) — распространенные проблемы и их решения.
- [UNINSTALL.md](guides/UNINSTALL.md) — шаги для чистого удаления.
- [I18N.md](guides/I18N.md) — перевод и рабочий процесс локализации.
- [FEATURES.md](guides/FEATURES.md) — галерея функций панели управления.

## reference/

Справочный материал — поверхность API, переменные среды, флаги CLI, каталог провайдеров.

- [API_REFERENCE.md](reference/API_REFERENCE.md) — конечные точки и формы REST API.
- [PROVIDER_REFERENCE.md](reference/PROVIDER_REFERENCE.md) — автосгенерированный каталог провайдеров.
- [openapi.yaml](reference/openapi.yaml) — спецификация OpenAPI 3.1 для общедоступного API.
- [ENVIRONMENT.md](reference/ENVIRONMENT.md) — справочник по переменным среды.
- [CLI-TOOLS.md](reference/CLI-TOOLS.md) — встроенные команды CLI.
- [FREE_TIERS.md](reference/FREE_TIERS.md) — каталог бесплатных провайдеров LLM.

## frameworks/

Подсистемы, доступные клиентам, агентам и операторам.

- [MCP-SERVER.md](frameworks/MCP-SERVER.md) — сервер протокола контекста модели.
- [A2A-SERVER.md](frameworks/A2A-SERVER.md) — сервер Agent-to-Agent (A2A) JSON-RPC.
- [AGENT_PROTOCOLS_GUIDE.md](frameworks/AGENT_PROTOCOLS_GUIDE.md) — обзор A2A / ACP / облачных агентов.
- [CLOUD_AGENT.md](frameworks/CLOUD_AGENT.md) — среда выполнения облачного агента и провайдеры.
- [SKILLS.md](frameworks/SKILLS.md) — фреймворк навыков (песочница расширения).
- [MEMORY.md](frameworks/MEMORY.md) — постоянная память (FTS5 + Qdrant).
- [WEBHOOKS.md](frameworks/WEBHOOKS.md) — события вебхуков и диспетчеризация.
- [EVALS.md](frameworks/EVALS.md) — наборы оценок.

## routing/

Комбинированное маршрутизация, оценка и повторное воспроизведение.

- [AUTO-COMBO.md](routing/AUTO-COMBO.md) — Auto-Combo (оценка по 9 факторам, 14 стратегий).
- [REASONING_REPLAY.md](routing/REASONING_REPLAY.md) — поток повторного воспроизведения рассуждений.

## security/

Ограждения, соответствие, скрытность и обязательные шаблоны для обработки общедоступных учетных данных и сообщений об ошибках.

- [GUARDRAILS.md](security/GUARDRAILS.md) — PII, инъекция промптов, ограждения для зрения.
- [COMPLIANCE.md](security/COMPLIANCE.md) — аудитные журналы и соответствие.
- [STEALTH_GUIDE.md](security/STEALTH_GUIDE.md) — скрытность TLS / отпечатков.
- [PUBLIC_CREDS.md](security/PUBLIC_CREDS.md) — **обязательный** шаблон для встраивания общедоступных OAuth client_id/secret + ключей Firebase Web без срабатывания сканеров секретов.
- [ERROR_SANITIZATION.md](security/ERROR_SANITIZATION.md) — **обязательный** шаблон для маршрутизации каждого ответа с ошибкой через `sanitizeErrorMessage` для предотвращения раскрытия трассировки стека.

## compression/

Движки сжатия промптов, правила и языковые пакеты.

- [COMPRESSION_GUIDE.md](compression/COMPRESSION_GUIDE.md) — обзор сжатия на верхнем уровне.
- [COMPRESSION_ENGINES.md](compression/COMPRESSION_ENGINES.md) — доступные движки сжатия.
- [COMPRESSION_RULES_FORMAT.md](compression/COMPRESSION_RULES_FORMAT.md) — формат файла правил.
- [COMPRESSION_LANGUAGE_PACKS.md](compression/COMPRESSION_LANGUAGE_PACKS.md) — языковые пакеты.
- [RTK_COMPRESSION.md](compression/RTK_COMPRESSION.md) — глубокое погружение в движок RTK.

## ops/

Релиз, развертывание, прокси, туннели, покрытие.

- [RELEASE_CHECKLIST.md](ops/RELEASE_CHECKLIST.md) — чек-лист потока выпуска.
- [COVERAGE_PLAN.md](ops/COVERAGE_PLAN.md) — план покрытия тестами.
- [FLY_IO_DEPLOYMENT_GUIDE.md](ops/FLY_IO_DEPLOYMENT_GUIDE.md) — развертывание на Fly.io.
- [VM_DEPLOYMENT_GUIDE.md](ops/VM_DEPLOYMENT_GUIDE.md) — развертывание на виртуальной машине.
- [PROXY_GUIDE.md](ops/PROXY_GUIDE.md) — конфигурация прокси-сервера.
- [TUNNELS_GUIDE.md](ops/TUNNELS_GUIDE.md) — туннели Cloudflare и друзья.

## diagrams/

Источники Mermaid и экспортированные диаграммы SVG/PNG, на которые ссылаются документы выше. Заполняется инкрементно — смотрите [diagrams/README.md](diagrams/README.md).

## i18n/

Переведенные зеркала документации на 40 языках. Смотрите [i18n/README.md](i18n/README.md) для списка поддерживаемых языков.

## screenshots/

Статические скриншоты, используемые панелью управления и README. Не являются частью основного текста документации.

---

## Автоматически сгенерированные артефакты

- [reference/PROVIDER_REFERENCE.md](reference/PROVIDER_REFERENCE.md) генерируется скриптом `scripts/gen-provider-reference.ts` из `src/shared/constants/providers.ts`. Не редактируйте вручную.
- Боковая панель панели управления (`/docs` UI) генерируется скриптом `scripts/generate-docs-index.mjs`, который обходит подпапки выше.
