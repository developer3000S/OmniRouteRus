# RELEASE_CHECKLIST (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RELEASE_CHECKLIST.md) · 🇸🇦 [ar](../../../ar/docs/ops/RELEASE_CHECKLIST.md) · 🇦🇿 [az](../../../az/docs/ops/RELEASE_CHECKLIST.md) · 🇧🇬 [bg](../../../bg/docs/ops/RELEASE_CHECKLIST.md) · 🇧🇩 [bn](../../../bn/docs/ops/RELEASE_CHECKLIST.md) · 🇨🇿 [cs](../../../cs/docs/ops/RELEASE_CHECKLIST.md) · 🇩🇰 [da](../../../da/docs/ops/RELEASE_CHECKLIST.md) · 🇩🇪 [de](../../../de/docs/ops/RELEASE_CHECKLIST.md) · 🇪🇸 [es](../../../es/docs/ops/RELEASE_CHECKLIST.md) · 🇮🇷 [fa](../../../fa/docs/ops/RELEASE_CHECKLIST.md) · 🇫🇮 [fi](../../../fi/docs/ops/RELEASE_CHECKLIST.md) · 🇫🇷 [fr](../../../fr/docs/ops/RELEASE_CHECKLIST.md) · 🇮🇳 [gu](../../../gu/docs/ops/RELEASE_CHECKLIST.md) · 🇮🇱 [he](../../../he/docs/ops/RELEASE_CHECKLIST.md) · 🇮🇳 [hi](../../../hi/docs/ops/RELEASE_CHECKLIST.md) · 🇭🇺 [hu](../../../hu/docs/ops/RELEASE_CHECKLIST.md) · 🇮🇩 [id](../../../id/docs/ops/RELEASE_CHECKLIST.md) · 🇮🇩 [in](../../../in/docs/ops/RELEASE_CHECKLIST.md) · 🇮🇹 [it](../../../it/docs/ops/RELEASE_CHECKLIST.md) · 🇯🇵 [ja](../../../ja/docs/ops/RELEASE_CHECKLIST.md) · 🇰🇷 [ko](../../../ko/docs/ops/RELEASE_CHECKLIST.md) · 🇮🇳 [mr](../../../mr/docs/ops/RELEASE_CHECKLIST.md) · 🇲🇾 [ms](../../../ms/docs/ops/RELEASE_CHECKLIST.md) · 🇳🇱 [nl](../../../nl/docs/ops/RELEASE_CHECKLIST.md) · 🇳🇴 [no](../../../no/docs/ops/RELEASE_CHECKLIST.md) · 🇵🇭 [phi](../../../phi/docs/ops/RELEASE_CHECKLIST.md) · 🇵🇱 [pl](../../../pl/docs/ops/RELEASE_CHECKLIST.md) · 🇵🇹 [pt](../../../pt/docs/ops/RELEASE_CHECKLIST.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RELEASE_CHECKLIST.md) · 🇷🇴 [ro](../../../ro/docs/ops/RELEASE_CHECKLIST.md) · 🇸🇰 [sk](../../../sk/docs/ops/RELEASE_CHECKLIST.md) · 🇸🇪 [sv](../../../sv/docs/ops/RELEASE_CHECKLIST.md) · 🇰🇪 [sw](../../../sw/docs/ops/RELEASE_CHECKLIST.md) · 🇮🇳 [ta](../../../ta/docs/ops/RELEASE_CHECKLIST.md) · 🇮🇳 [te](../../../te/docs/ops/RELEASE_CHECKLIST.md) · 🇹🇭 [th](../../../th/docs/ops/RELEASE_CHECKLIST.md) · 🇹🇷 [tr](../../../tr/docs/ops/RELEASE_CHECKLIST.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RELEASE_CHECKLIST.md) · 🇵🇰 [ur](../../../ur/docs/ops/RELEASE_CHECKLIST.md) · 🇻🇳 [vi](../../../vi/docs/ops/RELEASE_CHECKLIST.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RELEASE_CHECKLIST.md)

---

---

title: "Чек-лист релиза"
version: 3.8.2
lastUpdated: 2026-05-13
---

# Чек-лист релиза

> **Последнее обновление:** 2026-05-13 — v3.8.0
> Упрощённый процесс релиза, использующий навыки Claude Code для автоматизации.

## TL;DR

```bash
# 1. Обновить версию + сгенерировать CHANGELOG (навык)
/version-bump-cc patch    # или minor/major

# 2. Запустить локальный контроль качества
npm run check              # lint + тесты
npm run test:coverage      # полный контроль покрытия (75/75/75/70)

# 3. Собрать и проверить
npm run build
npm run test:e2e           # опционально, но рекомендуется

# 4. Сгенерировать релиз (навык)
/generate-release-cc

# 5. Развернуть (навык)
/deploy-vps-both-cc        # или akamai-cc / local-cc

# 6. Зафиксировать доказательства релиза (навык)
/capture-release-evidences-cc
```

## Детальный чек-лист

### Предварительный релиз

- [ ] Все PR, предназначенные для этого релиза, объединены в `release/vX.Y.0`
- [ ] Все открытые элементы Linear/issue для этой версии закрыты или перенесены в следующий этап
- [ ] CI зеленый на ветке `release/vX.Y.0`
- [ ] Нет маркеров `TODO(release)` в коде: `grep -r "TODO(release)" src/ open-sse/`
- [ ] Образ Docker обновлен (в настоящее время `node:24.15.0-trixie-slim`)

### Версия и Changelog

- [ ] Запустить `/version-bump-cc <patch|minor|major>` (навык Claude Code)
  - Обновляет `package.json`, `electron/package.json`
  - Перегенерирует `CHANGELOG.md` из коммитов git с момента последнего тега
  - Обновляет значки в README.md
- [ ] Вручную проверить CHANGELOG.md и очистить сообщения коммитов при необходимости
- [ ] Убедиться, что последняя секция semver в `CHANGELOG.md` соответствует версии `package.json`
- [ ] Оставить `## [Unreleased]` как первую секцию changelog для будущей работы
- [ ] Обновить `docs/reference/openapi.yaml` → `info.version` должна соответствовать версии `package.json`

### Качество кода

- [ ] `npm run lint` — 0 ошибок (предупреждения — это предустановленные)
- [ ] `npm run typecheck:core` — чисто
- [ ] `npm run typecheck:noimplicit:core` — чисто (строго)
- [ ] `npm run check:cycles` — нет циклических зависимостей
- [ ] `npm run check:any-budget:t11` — в пределах бюджета
- [ ] `npm run check:route-validation:t06` — чисто
- [ ] `npm run check:node-runtime` — поддерживаемый пол поддерживается (`>=20.20.2 <21`, `>=22.22.2 <23`, `>=24.0.0 <25`)

### Тестирование

- [ ] `npm run test:unit` — пройдено
- [ ] `npm run test:vitest` — пройдено (MCP сервер, autoCombo, кэш)
- [ ] `npm run test:coverage` — гейт 75/75/75/70 выполнен (statements/lines/functions/branches)
- [ ] `npm run test:integration` — пройдено (если изменения затрагивают БД / обработчики)
- [ ] `npm run test:e2e` — пройдено (изменения UI)
- [ ] `npm run test:protocols:e2e` — пройдено (изменения MCP/A2A)
- [ ] `npm run test:ecosystem` — пройдено

### Хуки (Husky проверен)

Хуки Husky находятся в `.husky/` и автоматически запускаются при операциях с git.

- **pre-commit:** `npx lint-staged + node scripts/check/check-docs-sync.mjs + npm run check:any-budget:t11`
- **pre-push:** в настоящее время отключен (закомментирован). При повторном включении запускает `npm run test:unit`.
  - Запустите `npm run test:unit` вручную перед отправкой веток релиза.

Если хук не удается: исправьте основную проблему, не обходите с `--no-verify`.

### Conventional Commits

Все коммиты, связанные с релизом, должны соответствовать формату `type(scope): subject`.

**Допустимые типы:** `feat`, `fix`, `refactor`, `docs`, `test`, `chore`, `perf`, `style`, `ci`

**Допустимые области:** `db`, `sse`, `oauth`, `dashboard`, `api`, `cli`, `docker`, `ci`, `mcp`, `a2a`, `memory`, `skills`, `cloud-agent`, `guardrails`, `compression`, `auto-combo`, `resilience`, `providers`, `executors`, `translator`, `domain`, `authz`

Критические изменения: добавьте `BREAKING CHANGE:` в футер или `!` после области (например, `feat(api)!: drop /v0`).

### Документация

- [ ] `npm run check:docs-sync` проходит (автоматически запускается pre-commit)
- [ ] `npm run check:docs-all` проходит (объединяет: docs-sync + docs-counts + env-doc-sync + deprecated-versions + doc-links)
- [ ] `npm run check:env-doc-sync` выходит с кодом 0 — код ↔ `.env.example` ↔ `docs/reference/ENVIRONMENT.md` контракт среды сохранен
- [ ] `npm run check:doc-links` выходит с кодом 0 — нет сломанных внутренних ссылок markdown после реструктуризации
- [ ] `docs/architecture/ARCHITECTURE.md` проверен на наличие дрейфа хранилища/времени выполнения
- [ ] `docs/guides/TROUBLESHOOTING.md` проверен на наличие дрейфа переменных среды и операций
- [ ] Если `.env.example` изменен: `docs/reference/ENVIRONMENT.md` обновлен
- [ ] Если новая функция имеет UI: `docs/guides/USER_GUIDE.md` упоминает ее
- [ ] Если новая функция имеет API: `docs/reference/API_REFERENCE.md` + `docs/reference/openapi.yaml` обновлены
- [ ] Если новая функция является модулем: существует соответствующий `docs/<MODULE>.md`
- [ ] Если критическое изменение: `docs/guides/TROUBLESHOOTING.md` имеет заметку о миграции

### i18n

- [ ] `npm run i18n:check` выходит с кодом 0 — состояние перевода (`.i18n-state.json`) синхронизировано с исходными документами (нет дрейфнувших источников в строгом режиме; предупреждение в режиме warn допустимо для последних минутных правок документов, но должно быть 0 перед тегированием)
- [ ] `npm run i18n:check-ui-coverage` выходит с кодом 0 — каждая локаль UI находится на или выше 80% покрытия
- [ ] `npm run i18n:sync-ui:dry` сообщает о 0 отсутствующих ключах во всех 40 локалях
- [ ] Если исходные английские документы изменены, запустите `npm run i18n:run` (требуется `OMNIROUTE_TRANSLATION_API_KEY` в `.env`) перед тегированием
- [ ] Вклад переводчиков может быть отложен до следующего релиза, если он незначительный (отслеживать в CHANGELOG)

### Миграции базы данных

- [ ] Если в `src/lib/db/migrations/` есть новые файлы:
  - [ ] Каждая миграция идемпотентна (`CREATE TABLE IF NOT EXISTS` и т.д.)
  - [ ] Миграции обернуты в транзакции
  - [ ] Нумерованы правильно (нет пробелов в последовательности)
- [ ] Проверить на новой установке: удалите `~/.omniroute/omniroute.db` и запустите `npm run dev`
- [ ] Проверить на существующей установке: сделайте резервную копию БД, запустите миграцию, проверьте схему
- [ ] Файлы WAL (`-wal`, `-shm`) обрабатываются правильно, если миграция переписывает таблицы

### Каталог провайдеров (Zod-валидирован)

- [ ] Схема Zod в `src/shared/constants/providers.ts` действительна при загрузке
  - [ ] Все провайдеры имеют обязательные поля (`id`, `label`, `kind` и т.д.)
  - [ ] `freeNote` предоставлен для новых бесплатных провайдеров
  - [ ] Провайдеры OAuth имеют `oauthConfig` зарегистрированный в `src/lib/oauth/constants/oauth.ts`
- [ ] Если добавлен новый провайдер: соответствующий исполнитель в `open-sse/executors/`
- [ ] Если неформат OpenAI: переводчик в `open-sse/translator/`
- [ ] Модели зарегистрированы в `open-sse/config/providerRegistry.ts`
- [ ] Юнит-тесты в `tests/unit/` покрывают классификацию провайдеров и маршрутизацию

### Десктоп (Electron)

Если `electron/` изменен:

- [ ] `npm run electron:smoke:packaged` проходит
- [ ] Сборки протестированы для хотя бы одного из `:win`, `:mac`, `:linux`
- [ ] Сертификаты подписи кода не истекли (если подпись)
- [ ] `electron/package.json` версия совпадает с корневой `package.json`
- [ ] Указатель канала автообновления обновлен, если релиз в `stable`

### Проверка артефактов

- [ ] `npm run build:cli` успешен
- [ ] `npm run check:pack-artifact` чист — нет `app.__qa_backup`, `scripts/scratch`, `package-lock.json` или другого локального остатка
- [ ] `npm run build` производит рабочий автономный пакет Next.js

### Тегирование и релиз

- [ ] Запустите `/generate-release-cc` (навык Claude Code):
  - Создает тег `vX.Y.Z`
  - Отправляет тег и ветку
  - Открывает GitHub Release с телом changelog
  - Прикрепляет установщики Electron (если собраны)
- [ ] Или вручную:
  ```bash
  git tag -a vX.Y.Z -m "Release vX.Y.Z"
  git push origin vX.Y.Z
  gh release create vX.Y.Z --notes-from-tag
  ```

### Развертывание

- [ ] Используйте навык развертывания, соответствующий цели:
  - `/deploy-vps-local-cc` — локальный VPS (192.168.0.15)
  - `/deploy-vps-akamai-cc` — Akamai VPS (69.164.221.35)
  - `/deploy-vps-both-cc` — оба
- [ ] Проверить развернутый экземпляр:
  - Откройте `/dashboard/health` → проверьте, что строка версии совпадает с релизом
  - Запустите запрос `/v1/chat/completions` против известного провайдера
  - Убедитесь, что `/api/monitoring/health` возвращает `CLOSED` circuit breakers
  - Подтвердите, что транспорты MCP отвечают (`/mcp` HTTP, `/mcp-sse` SSE)

### После релиза

- [ ] Запустите `/capture-release-evidences-cc` (навык Claude Code)
  - Захватывает WebP скриншоты/записи новых функций
  - Прикрепляет к заметкам релиза / блог посту
- [ ] Обновите GitHub Discussions / Discord объявлением о релизе
- [ ] Откройте этап для следующей версии
- [ ] Если критично: закрепите обсуждение или разместите в `news.json` для баннера в приложении

## v3.8.0+ проверки

Перед выпуском любого релиза v3.8.x, проверьте дополнительные пункты:

- [ ] `omniroute --tray` запускается на macOS (systray2 установлен в `~/.omniroute/runtime/`)
- [ ] `omniroute --tray` запускается на Linux (требуется DISPLAY; корректная ошибка, если не установлен)
- [ ] `omniroute --tray` запускается на Windows (PowerShell NotifyIcon, без дополнительных бинарных файлов)
- [ ] `omniroute config tray enable` создает запись автозапуска; disable удаляет ее
- [ ] `npm install -g omniroute@<this-version>` запускает postinstall без фатального выхода
- [ ] `omniroute status` работает без `.env` (CLI token path, loopback only)
- [ ] `curl http://localhost:20128/api/shutdown` возвращает 401 (всегда защищенный маршрут)
- [ ] `curl -H "host: evil.com" http://localhost:20128/api/mcp/sse` возвращает 401 (loopback guard)
- [ ] SQLite runtime разрешается как `bundled` при первом запуске (bundled binary valid для платформы)
- [ ] SQLite runtime переходит на `runtime`, когда `node_modules/better-sqlite3` удален
- [ ] Умный MCP фильтр сжимает реальный вывод `playwright-mcp browser_snapshot` (≥50% сжатие)
- [ ] Все 10 файлов `skills/omniroute*/SKILL.md` доступны для публичного скачивания через raw GitHub URL
- [ ] Мастер настройки показывает шаг "Как это работает" на новом наборе
- [ ] Виджет покрытия уровня домашней панели показывает количество настроенных/активных

---

## Откат

Если релиз имеет критическую ошибку:

1. `gh release edit vX.Y.Z --prerelease` (помечает как не последний)
2. `git tag -d vX.Y.Z && git push --delete origin vX.Y.Z` (только если еще не используется пользователями)
3. Или: горячий фикс на `release/vX.Y.0` → патч-релиз `vX.Y.(Z+1)`
4. Сообщите в GitHub Discussions и Discord немедленно

## Жесткие правила

- Никогда не коммитьте напрямую в `main`
- Никогда не используйте `git push --force` для веток `main` или `release/*`
- Никогда не пропускайте хуки Husky (`--no-verify`)
- Никогда не коммитьте секреты, учетные данные или файлы `.env`
- Покрытие должно оставаться ≥75/75/75/70 (statements/lines/functions/branches)
- Всегда включайте или обновляйте тесты при изменении производственного кода в `src/`, `open-sse/`, `electron/`, или `bin/`

## Автоматическая проверка синхронизации

Запустите защиту синхронизации документации локально перед открытием PR:

```bash
npm run check:docs-sync
```

CI также запускает эту проверку в `.github/workflows/ci.yml` (lint job).
