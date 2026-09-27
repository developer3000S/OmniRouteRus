# SETUP_GUIDE (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../guides/SETUP_GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/guides/SETUP_GUIDE.md) · 🇦🇿 [az](../../../az/docs/guides/SETUP_GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/guides/SETUP_GUIDE.md) · 🇧🇩 [bn](../../../bn/docs/guides/SETUP_GUIDE.md) · 🇨🇿 [cs](../../../cs/docs/guides/SETUP_GUIDE.md) · 🇩🇰 [da](../../../da/docs/guides/SETUP_GUIDE.md) · 🇩🇪 [de](../../../de/docs/guides/SETUP_GUIDE.md) · 🇪🇸 [es](../../../es/docs/guides/SETUP_GUIDE.md) · 🇮🇷 [fa](../../../fa/docs/guides/SETUP_GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/guides/SETUP_GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/guides/SETUP_GUIDE.md) · 🇮🇳 [gu](../../../gu/docs/guides/SETUP_GUIDE.md) · 🇮🇱 [he](../../../he/docs/guides/SETUP_GUIDE.md) · 🇮🇳 [hi](../../../hi/docs/guides/SETUP_GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/guides/SETUP_GUIDE.md) · 🇮🇩 [id](../../../id/docs/guides/SETUP_GUIDE.md) · 🇮🇩 [in](../../../in/docs/guides/SETUP_GUIDE.md) · 🇮🇹 [it](../../../it/docs/guides/SETUP_GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/guides/SETUP_GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/guides/SETUP_GUIDE.md) · 🇮🇳 [mr](../../../mr/docs/guides/SETUP_GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/guides/SETUP_GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/guides/SETUP_GUIDE.md) · 🇳🇴 [no](../../../no/docs/guides/SETUP_GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/guides/SETUP_GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/guides/SETUP_GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/guides/SETUP_GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/guides/SETUP_GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/guides/SETUP_GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/guides/SETUP_GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/guides/SETUP_GUIDE.md) · 🇰🇪 [sw](../../../sw/docs/guides/SETUP_GUIDE.md) · 🇮🇳 [ta](../../../ta/docs/guides/SETUP_GUIDE.md) · 🇮🇳 [te](../../../te/docs/guides/SETUP_GUIDE.md) · 🇹🇭 [th](../../../th/docs/guides/SETUP_GUIDE.md) · 🇹🇷 [tr](../../../tr/docs/guides/SETUP_GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/guides/SETUP_GUIDE.md) · 🇵🇰 [ur](../../../ur/docs/guides/SETUP_GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/guides/SETUP_GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/guides/SETUP_GUIDE.md)

---

---
title: "📖 Руководство по установке — OmniRoute"
version: 3.8.2
lastUpdated: 2026-05-13
---

# 📖 Руководство по установке — OmniRoute

> Полное руководство по установке OmniRoute. Для быстрой версии см. [Быстрый старт в README](../README.md#-quick-start).

## Содержание

- [Методы установки](#методы-установки)
- [Настройка инструмента командной строки](#настройка-инструмента-командной-строки)
- [Настройка протокола (MCP + A2A)](#настройка-протокола-mcp--a2a)
- [Настройка таймаутов](#настройка-таймаутов)
- [Режим раздельного порта](#режим-раздельного-порта)
- [Void Linux (xbps-src)](#void-linux-xbps-src-шаблон)
- [Удаление](#удаление)

---

## Методы установки

### npm (рекомендуется)

```bash
npm install -g omniroute
omniroute
```

Панель управления открывается по адресу `http://localhost:20128`, а базовый URL API — `http://localhost:20128/v1`.

### pnpm

```bash
pnpm install -g omniroute
pnpm approve-builds -g   # Выбрать все пакеты → подтвердить
omniroute
```

> **Пользователям pnpm:** `pnpm approve-builds -g` необходимо для включения нативных скриптов сборки для `better-sqlite3` и `@swc/core`.

### Arch Linux (AUR)

```bash
yay -S omniroute-bin
systemctl --user enable --now omniroute.service
```

[Пакет AUR](https://aur.archlinux.org/packages/omniroute-bin) устанавливает OmniRoute и предоставляет сервис systemd для пользователя.

### Из исходников

```bash
npm install
PORT=20128 DASHBOARD_PORT=20129 NEXT_PUBLIC_BASE_URL=http://localhost:20129 npm run dev
```

> **Примечание:** `npm install` автоматически генерирует `.env` из `.env.example` при первом запуске. Повторные установки не будут перезаписывать существующий `.env`, поэтому изменения сохраняются. Чтобы пересоздать, удалите `.env` перед повторным запуском.

### Docker

См. [Руководство по Docker](./DOCKER_GUIDE.md) для полной настройки Docker, включая профили Compose и HTTPS через Caddy.

### Десктопное приложение (Electron)

OmniRoute поставляется с обёрткой для десктопа, построенной на Electron 41 + electron-builder 26.10. Доступные скрипты (корневой каталог workspace):

```bash
npm run electron:dev          # Запуск десктопа с горячей перезагрузкой
npm run electron:build        # Сборка для текущей ОС (автоопределение)
npm run electron:build:win    # Установщик для Windows (NSIS + portable)
npm run electron:build:mac    # macOS (dmg + zip, arm64+x64)
npm run electron:build:linux  # Linux (AppImage + deb + rpm)
npm run electron:smoke:packaged  # Проверка упакованной сборки
```

Релизы установщиков десктопного приложения прикрепляются к GitHub Releases. Для полного разбора Electron (подписи, IPC мост, дистрибутивы) см. [`ELECTRON_GUIDE.md`](./ELECTRON_GUIDE.md) _(создано на поздней стадии)_.

### Сервер без графического интерфейса (CI/автоматизация)

Для бесшумных установок (Docker, Kubernetes, CI) используйте:

```bash
omniroute setup --non-interactive
omniroute providers test-batch
```

В сочетании с переменными окружения (`INITIAL_PASSWORD`, `OMNIROUTE_WS_BRIDGE_SECRET` и т.д.), это позволяет полностью автоматизировать развёртывание экземпляра OmniRoute.

### Опции командной строки

| Команда                 | Описание                                                    |
| ----------------------- | -------------------------------------------------------------- |
| `omniroute`             | Запуск сервера (`PORT=20128`, API и панель управления на одном порту)    |
| `omniroute setup`       | Интерактивная настройка пароля и первого провайдера          |
| `omniroute doctor`      | Запуск локальных проверок без запуска сервера            |
| `omniroute providers`   | Обнаружение, список, проверка и тестирование провайдеров из CLI          |
| `omniroute config`      | Настройка инструмента командной строки — список, получение, установка, проверка конфигураций      |
| `omniroute status`      | Оффлайн-панель статуса — версия, БД, инструменты, конфигурация          |
| `omniroute logs`        | Поток логов использования из API (поддерживает `--follow`)           |
| `omniroute update`      | Проверка или применение обновлений OmniRoute                           |
| `omniroute provider`    | Управление соединениями провайдеров — добавление, список, удаление, тестирование, по умолчанию |
| `omniroute --port 3000` | Установить канонический/API порт на 3000                                 |
| `omniroute --mcp`       | Запуск сервера MCP (транспорт stdio)                             |
| `omniroute --no-open`   | Не открывать браузер автоматически                                        |
| `omniroute --help`      | Показать справку                                                      |

Бесшумная установка может быть автоматизирована с помощью флагов или переменных окружения:

```bash
omniroute setup --non-interactive --password "$OMNIROUTE_PASSWORD"
omniroute setup --non-interactive --add-provider --provider openai --api-key "$OPENAI_API_KEY"
omniroute setup --non-interactive --add-provider --provider openai --api-key "$OPENAI_API_KEY" --test-provider
```

Запуск локальных диагностик без открытия панели управления:

```bash
omniroute doctor
omniroute doctor --json
omniroute doctor --no-liveness
```

Управление провайдерами из SSH или скриптов без открытия панели управления:

```bash
omniroute providers available
omniroute providers available --search openai
omniroute providers available --category api-key
omniroute providers list
omniroute providers test <id-or-name>
omniroute providers test-all
omniroute providers validate
```

---

## Конфигурация CLI-инструмента

### 1) Подключение провайдеров и создание API-ключа

1. Откройте Dashboard → `Providers` и подключите хотя бы одного провайдера (OAuth или API-ключ).
2. Откройте Dashboard → `Endpoints` и создайте API-ключ.
3. (Опционально) Откройте Dashboard → `Combos` и задайте цепочку резервных вариантов.

### 2) Настройка вашего инструмента для кодирования

```txt
Base URL: http://localhost:20128/v1
API Key:  [скопируйте с страницы Endpoint]
Model:    if/kimi-k2-thinking (или любой префикс провайдера/модели)
```

Работает с Claude Code, Codex CLI, Gemini CLI, Cursor, Cline, OpenClaw, OpenCode и совместимыми с OpenAI SDK.

Для детальной настройки по инструментам (Claude Code, Codex CLI, Cursor, Cline, OpenClaw, Kilo Code, Copilot и др.), см. посвященное **[Руководство по CLI-инструментам](../reference/CLI-TOOLS.md)**.

---

## Настройка протокола (MCP + A2A)

### Настройка MCP (Model Context Protocol)

Запустите транспорт MCP в режиме stdio:

```bash
omniroute --mcp
```

Рекомендуемый поток валидации:

```bash
# 1. Запустите сервер MCP
omniroute --mcp

# 2. Из вашего клиента MCP вызовите:
omniroute_get_health        # Должен вернуть состояние системы
omniroute_list_combos       # Должен вернуть активные комбо

# 3. Или запустите полный E2E-тест:
npm run test:protocols:e2e
```

#### Конфигурация клиента MCP

**Claude Code:**

```bash
claude mcp add-server omniroute --type http --url http://localhost:20128/api/mcp/stream
```

**Cursor / Cline:**

Добавьте в ваши настройки MCP:

```json
{
  "mcpServers": {
    "omniroute": {
      "command": "omniroute",
      "args": ["--mcp"],
      "env": {}
    }
  }
}
```

**Полная документация по MCP:** [MCP Server README](../../open-sse/mcp-server/README.md) — 37 инструментов, конфигурации IDE, клиенты Python/TS/Go.

### Настройка A2A (Agent-to-Agent Protocol)

Проверьте карту агента:

```bash
curl http://localhost:20128/.well-known/agent.json
```

Отправьте задачу:

```bash
curl -X POST http://localhost:20128/a2a \
  -H 'content-type: application/json' \
  -d '{"jsonrpc":"2.0","id":"quickstart","method":"message/send","params":{"skill":"quota-management","messages":[{"role":"user","content":"Give me a short quota summary."}]}}'
```

**Полная документация по A2A:** [A2A Server README](../../src/lib/a2a/README.md) — JSON-RPC 2.0, навыки, потоковая передача, жизненный цикл задач.

---

## Конфигурация таймаутов

### Основные таймауты

Для большинства развертываний вам понадобятся только эти две переменные:

| Переменная                | Значение по умолчанию         | Назначение                                                                                                                                      |
| ------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `REQUEST_TIMEOUT_MS`      | `600000`                      | Общая база для таймаута начала ответа от апстрима, скрытых таймаутов Undici, запросов TLS-отпечатков и таймаутов запросов/прокси API-моста |
| `STREAM_IDLE_TIMEOUT_MS`  | наследует `REQUEST_TIMEOUT_MS`| Максимальный интервал между потоковыми чанками, после которого OmniRoute прерывает поток SSE                                                  |

Сохранена обратная совместимость: существующие переменные `FETCH_TIMEOUT_MS`, `API_BRIDGE_PROXY_TIMEOUT_MS` и другие переменные таймаута по слоям по-прежнему работают и переопределяют общую базу.

### Примечания по конкретным провайдерам

Для апстримов, совместимых с Claude Code (`anthropic-compatible-cc-*`), OmniRoute выводит исходящий заголовок `X-Stainless-Timeout` из разрешенного времени ожидания fetch, чтобы таймауты чтения на стороне провайдера оставались согласованными с вашей конфигурацией окружения.

Для обратных прокси-серверов, совместимых с Claude Code от третьих сторон, OmniRoute сохраняет консервативное значение по умолчанию `anthropic-beta`, и при включенном `Client Cache Control` только передает маркеры `cache_control`, предоставленные клиентом.

### Расширенные переопределения таймаутов

| Переменная                                | Значение по умолчанию                          | Назначение                                                                       |
| ----------------------------------------- | ---------------------------------------------- | -------------------------------------------------------------------------------- |
| `FETCH_TIMEOUT_MS`                        | наследует `REQUEST_TIMEOUT_MS`                 | Таймаут начала ответа от апстрима, используемый до прибытия заголовков ответа   |
| `FETCH_HEADERS_TIMEOUT_MS`                | наследует `FETCH_TIMEOUT_MS`                    | Лимит времени Undici для получения заголовков ответа от апстрима                |
| `FETCH_BODY_TIMEOUT_MS`                   | наследует `FETCH_TIMEOUT_MS`                    | Лимит времени Undici между чанками тела апстрима (`0` отключает его)           |
| `FETCH_CONNECT_TIMEOUT_MS`                | `30000`                                        | Таймаут TCP-соединения Undici                                                   |
| `FETCH_KEEPALIVE_TIMEOUT_MS`              | `4000`                                         | Таймаут неактивного соединения Undici                                           |
| `TLS_CLIENT_TIMEOUT_MS`                   | наследует `FETCH_TIMEOUT_MS`                    | Таймаут для запросов TLS-отпечатков, сделанных через `wreq-js`                  |
| `API_BRIDGE_PROXY_TIMEOUT_MS`             | наследует `REQUEST_TIMEOUT_MS` или `30000`     | Таймаут для пересылки `/v1` с порта API на порт Dashboard                        |
| `API_BRIDGE_SERVER_REQUEST_TIMEOUT_MS`    | `max(API_BRIDGE_PROXY_TIMEOUT_MS, 300000)`     | Таймаут входящих запросов на сервере API-моста                                  |
| `API_BRIDGE_SERVER_HEADERS_TIMEOUT_MS`    | `60000`                                        | Таймаут заголовков входящих запросов на сервере API-моста                       |
| `API_BRIDGE_SERVER_KEEPALIVE_TIMEOUT_MS`  | `5000`                                         | Таймаут keep-alive на сервере API-моста                                         |
| `API_BRIDGE_SERVER_SOCKET_TIMEOUT_MS`     | `0`                                            | Таймаут неактивности сокета на сервере API-моста (`0` отключает его)            |

> **Примечание:** Для потоковых запросов `FETCH_TIMEOUT_MS` охватывает только настройку соединения / ожидание первого ответа от апстрима. После активации потока OmniRoute прервет только при реальной задержке (`STREAM_IDLE_TIMEOUT_MS`) или неактивности тела Undici (`FETCH_BODY_TIMEOUT_MS`).

### Совместимость с обратными прокси

Если вы запускаете OmniRoute за Nginx, Caddy, Cloudflare или другим обратным прокси, убедитесь, что таймауты прокси также превышают ваши таймауты потоков и fetch.

---

## Split-Port Mode

Запустите API и Dashboard на отдельных портах для продвинутых сценариев (обратный прокси, сетевое взаимодействие контейнеров):

```bash
PORT=20128 DASHBOARD_PORT=20129 omniroute
# API:       http://localhost:20128/v1
# Dashboard: http://localhost:20129
```

---

## Шаблон для Void Linux (xbps-src)

Для пользователей Void Linux вы можете собрать нативный пакет с помощью `xbps-src`. Сохраните этот блок как `srcpkgs/omniroute/template`:

```bash
# Файл шаблона для 'omniroute'
pkgname=omniroute
version=3.8.0
revision=1
hostmakedepends="nodejs python3 make"
depends="openssl"
short_desc="Универсальный AI-шлюз с умным маршрутизацией для нескольких провайдеров LLM"
maintainer="zenobit <zenobit@disroot.org>"
license="MIT"
homepage="https://github.com/diegosouzapw/OmniRoute"
distfiles="https://github.com/diegosouzapw/OmniRoute/archive/refs/tags/v${version}.tar.gz"
# Перегенерируйте контрольную сумму для каждого релиза с помощью:
#   curl -L -o /tmp/omniroute.tar.gz "https://github.com/diegosouzapw/OmniRoute/archive/refs/tags/v${version}.tar.gz" && sha256sum /tmp/omniroute.tar.gz
checksum=PLACEHOLDER_REGENERATE_PER_RELEASE
system_accounts="_omniroute"
omniroute_homedir="/var/lib/omniroute"
export NODE_ENV=production
export npm_config_engine_strict=false
export npm_config_loglevel=error
export npm_config_fund=false
export npm_config_audit=false

do_build() {
	local _gyp_arch
	case "$XBPS_TARGET_MACHINE" in
		aarch64*) _gyp_arch=arm64 ;;
		armv7*|armv6*) _gyp_arch=arm ;;
		i686*) _gyp_arch=ia32 ;;
		*) _gyp_arch=x64 ;;
	esac

	NODE_ENV=development npm ci --ignore-scripts
	npm run build
	cp -r .next/static .next/standalone/.next/static
	[ -d public ] && cp -r public .next/standalone/public || true

	local _node_gyp=/usr/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js
	(cd node_modules/better-sqlite3 && node "$_node_gyp" rebuild --arch="$_gyp_arch")

	local _bs3_release=.next/standalone/node_modules/better-sqlite3/build/Release
	mkdir -p "$_bs3_release"
	cp node_modules/better-sqlite3/build/Release/better_sqlite3.node "$_bs3_release/"

	rm -rf .next/standalone/node_modules/@img

	for _mod in pino-abstract-transport split2 process-warning; do
		cp -r "node_modules/$_mod" .next/standalone/node_modules/
	done
}

do_check() {
	npm run test:unit
}

do_install() {
	vmkdir usr/lib/omniroute/.next
	vcopy .next/standalone/. usr/lib/omniroute/.next/standalone

	for _d in \
		.next/standalone/.next/server/app/dashboard \
		.next/standalone/.next/server/app/dashboard/settings \
		.next/standalone/.next/server/app/dashboard/providers; do
		touch "${DESTDIR}/usr/lib/omniroute/${_d}/.keep"
	done

	cat > "${WRKDIR}/omniroute" <<'EOF'
#!/bin/sh
export PORT="${PORT:-20128}"
export DATA_DIR="${DATA_DIR:-${XDG_DATA_HOME:-${HOME}/.local/share}/omniroute}"
export APP_LOG_TO_FILE="${APP_LOG_TO_FILE:-false}"
mkdir -p "${DATA_DIR}"
exec node /usr/lib/omniroute/.next/standalone/server.js "$@"
EOF
	vbin "${WRKDIR}/omniroute"
}

post_install() {
	vlicense LICENSE
}
```

---

## Удаление

| Команда                  | Действие                                                                              |
| ------------------------ | ----------------------------------------------------------------------------------- |
| `npm run uninstall`      | Удаляет системное приложение, но **сохраняет вашу БД и конфигурации** в `~/.omniroute`.  |
| `npm run uninstall:full` | Удаляет приложение И **навсегда удаляет все конфигурации, ключи и базы данных**. |

> Для получения подробных инструкций по удалению во всех методах, см. [UNINSTALL.md](./UNINSTALL.md).
