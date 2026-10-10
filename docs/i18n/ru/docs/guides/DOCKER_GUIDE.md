# DOCKER_GUIDE (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../guides/DOCKER_GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/guides/DOCKER_GUIDE.md) · 🇦🇿 [az](../../../az/docs/guides/DOCKER_GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/guides/DOCKER_GUIDE.md) · 🇧🇩 [bn](../../../bn/docs/guides/DOCKER_GUIDE.md) · 🇨🇿 [cs](../../../cs/docs/guides/DOCKER_GUIDE.md) · 🇩🇰 [da](../../../da/docs/guides/DOCKER_GUIDE.md) · 🇩🇪 [de](../../../de/docs/guides/DOCKER_GUIDE.md) · 🇪🇸 [es](../../../es/docs/guides/DOCKER_GUIDE.md) · 🇮🇷 [fa](../../../fa/docs/guides/DOCKER_GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/guides/DOCKER_GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/guides/DOCKER_GUIDE.md) · 🇮🇳 [gu](../../../gu/docs/guides/DOCKER_GUIDE.md) · 🇮🇱 [he](../../../he/docs/guides/DOCKER_GUIDE.md) · 🇮🇳 [hi](../../../hi/docs/guides/DOCKER_GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/guides/DOCKER_GUIDE.md) · 🇮🇩 [id](../../../id/docs/guides/DOCKER_GUIDE.md) · 🇮🇩 [in](../../../in/docs/guides/DOCKER_GUIDE.md) · 🇮🇹 [it](../../../it/docs/guides/DOCKER_GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/guides/DOCKER_GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/guides/DOCKER_GUIDE.md) · 🇮🇳 [mr](../../../mr/docs/guides/DOCKER_GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/guides/DOCKER_GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/guides/DOCKER_GUIDE.md) · 🇳🇴 [no](../../../no/docs/guides/DOCKER_GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/guides/DOCKER_GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/guides/DOCKER_GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/guides/DOCKER_GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/guides/DOCKER_GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/guides/DOCKER_GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/guides/DOCKER_GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/guides/DOCKER_GUIDE.md) · 🇰🇪 [sw](../../../sw/docs/guides/DOCKER_GUIDE.md) · 🇮🇳 [ta](../../../ta/docs/guides/DOCKER_GUIDE.md) · 🇮🇳 [te](../../../te/docs/guides/DOCKER_GUIDE.md) · 🇹🇭 [th](../../../th/docs/guides/DOCKER_GUIDE.md) · 🇹🇷 [tr](../../../tr/docs/guides/DOCKER_GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/guides/DOCKER_GUIDE.md) · 🇵🇰 [ur](../../../ur/docs/guides/DOCKER_GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/guides/DOCKER_GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/guides/DOCKER_GUIDE.md)

---

---
title: "🐳 Руководство по Docker — OmniRoute"
version: 3.8.2
lastUpdated: 2026-05-13
---

# 🐳 Руководство по Docker — OmniRoute

> Полное руководство по развертыванию Docker. Для быстрого старта см. [раздел Docker в README](../README.md#-docker).

## Содержание

- [Быстрый запуск](#быстрый-запуск)
- [С файлом окружения](#с-файлом-окружения)
- [Docker Compose](#docker-compose)
- [Доступные профили](#доступные-профили)
- [Redis Sidecar](#redis-sidecar)
- [Производственный Compose](#производственный-compose)
- [Этапы Dockerfile](#этапы-dockerfile)
- [Критические переменные окружения](#критические-переменные-окружения)
- [Docker Compose с Caddy (HTTPS)](#docker-compose-с-caddy-https-auto-tls)
- [Cloudflare Quick Tunnel](#cloudflare-quick-tunnel)
- [Теги изображений](#теги-изображений)
- [Важные примечания](#важные-примечания)

---

## Быстрый запуск

```bash
docker run -d \
  --name omniroute \
  --restart unless-stopped \
  --stop-timeout 40 \
  -p 20128:20128 \
  -v omniroute-data:/app/data \
  diegosouzapw/omniroute:latest
```

## С файлом окружения

```bash
# Сначала скопируйте и отредактируйте .env
cp .env.example .env

docker run -d \
  --name omniroute \
  --restart unless-stopped \
  --stop-timeout 40 \
  --env-file .env \
  -p 20128:20128 \
  -v omniroute-data:/app/data \
  diegosouzapw/omniroute:latest
```

## Docker Compose

```bash
# Базовый профиль (без инструментов CLI)
docker compose --profile base up -d

# Профиль CLI (встроенные Claude Code, Codex, OpenClaw)
docker compose --profile cli up -d

# Профиль Host (Linux-first; монтирует бинарные файлы CLI хоста только для чтения)
docker compose --profile host up -d

# Комбинированный CLI + CLIProxyAPI sidecar
docker compose --profile cli --profile cliproxyapi up -d
```

## Доступные профили

OmniRoute поставляется с четырьмя профилями Compose. Выберите тот, который соответствует вашей среде.

| Профиль          | Сервис           | Когда использовать                                                                                                                       | Команда                                      |
| ---------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| `base` (default) | `omniroute-base` | Сервер без интерфейса / минимальный рантайм, без поставщиков CLI                                                                       | `docker compose --profile base up -d`        |
| `cli`            | `omniroute-cli`  | Агентские рабочие процессы, которые вызывают `omniroute providers/setup/doctor` и встроенные CLI (Codex, Claude Code, Droid, OpenClaw)             | `docker compose --profile cli up -d`         |
| `host`           | `omniroute-host` | Linux-хосты, которые хотят получить доступ к CLI хоста через `network_mode`, монтируя `~/.local/bin`, `~/.codex`, `~/.claude` и т.д. только для чтения | `docker compose --profile host up -d`        |
| `cliproxyapi`    | `cliproxyapi`    | Запуск [CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) sidecar на порту `8317` для проксирования CLI вверх по цепочке              | `docker compose --profile cliproxyapi up -d` |

> Несколько профилей можно комбинировать: `docker compose --profile cli --profile cliproxyapi up -d`.

## Redis Sidecar

OmniRoute использует Redis для обеспечения работы распределённого ограничителя скорости и общего кэша. Сервис `redis` **всегда определяется** в `docker-compose.yml` (он не имеет профильного ограничения) и запускается вместе с любым другим профилем.

| Деталь                | Значение                          |
| -------------------- | --------------------------------- |
| Образ                 | `redis:7-alpine`                  |
| Имя контейнера        | `omniroute-redis`                 |
| Внутренний порт       | `6379`                            |
| Порт хоста (переопределение) | `REDIS_PORT` (по умолчанию `6379`) |
| Том                  | `omniroute-redis-data` → `/data`  |
| Проверка состояния    | `redis-cli ping` (интервал 10с)   |

Связанные переменные окружения:

- `REDIS_URL` — строка подключения, внедряемая в приложение (`redis://redis:6379` по умолчанию).
- `REDIS_PORT` — отображение порта на стороне хоста для контейнера Redis.

**Отключение Redis** не рекомендуется (ограничитель скорости перейдёт на резервное решение в памяти). Если вы всё же должны это сделать, либо удалите/закомментируйте блок сервиса `redis:` в `docker-compose.yml`, либо масштабируйте его до нуля:

```bash
docker compose up -d --scale redis=0
```

## Производственный Compose

Для изолированного снимка рабочей среды, работающего параллельно с разработкой, используйте `docker-compose.prod.yml`.

| Деталь                 | Значение                                                                              |
| ---------------------- | ---------------------------------------------------------------------------------- |
| Файл                   | `docker-compose.prod.yml`                                                          |
| Порт панели управления по умолчанию | `PROD_DASHBOARD_PORT=20130` (отображается на внутренний `${DASHBOARD_PORT:-20128}`)        |
| Порт API по умолчанию  | `PROD_API_PORT=20131`                                                              |
| Образ                  | `omniroute:prod` (создан из цели `runner-cli`)                                  |
| Контейнер Redis        | `omniroute-redis-prod` (`redis:8.6.2`, выделенный том `redis-prod-data`)         |
| Том данных             | `omniroute-prod-data` (именованный, сохраняется между пересборками)                           |
| Проверки состояния     | `node healthcheck.mjs` + `redis-cli ping`, с `depends_on`, зависящим от состояния Redis |

Как использовать:

```bash
# Сборка и запуск производственного стека
docker compose -f docker-compose.prod.yml up -d --build

# Потоковые логи
docker compose -f docker-compose.prod.yml logs -f

# Разрушение (сохранение томов)
docker compose -f docker-compose.prod.yml down
```

Производственный стек работает параллельно с dev compose (разные имена контейнеров, порты и тома), поэтому вы можете продолжать итерации локально, пока рабочая среда остаётся запущенной.

## Этапы Dockerfile

Репозиторий содержит многоэтапный Dockerfile (`Dockerfile`). Три этапа экспортируются; выберите подходящую `цель` для вашего случая использования.

| Этап          | Базовый образ                 | Назначение                                                                                                                                                            |
| ------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `builder`     | `node:24.15.0-trixie-slim` | Устанавливает зависимости (`npm ci --legacy-peer-deps`) и запускает `npm run build -- --webpack`                                                                                  |
| `runner-base` | `node:24.15.0-trixie-slim` | Производственный рантайм с автономным выводом Next.js. **Провайдерские CLI не включены.**                                                                               |
| `runner-cli`  | `runner-base`              | Добавляет `git`, `docker.io`, `docker-compose` и глобальные CLI: `@openai/codex`, `@anthropic-ai/claude-code`, `droid`, `openclaw`. **Выберите это для агентских рабочих процессов.** |

Соберите конкретный этап вручную:

```bash
docker build --target runner-base -t omniroute:base .
docker build --target runner-cli  -t omniroute:cli  .
```

Значения по умолчанию, экспортируемые `runner-base`: `PORT=20128`, `HOSTNAME=0.0.0.0`, `NODE_OPTIONS=--max-old-space-size=256`, `DATA_DIR=/app/data`, `OMNIROUTE_MIGRATIONS_DIR=/app/migrations`.

## Ключевые переменные окружения

Помимо значений по умолчанию, документированных в [ENVIRONMENT.md](../reference/ENVIRONMENT.md), при запуске в Docker наиболее значимы следующие переменные:

| Переменная                    | Назначение                                                                                          | Значение по умолчанию     |
| ----------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------- |
| `OMNIROUTE_WS_BRIDGE_SECRET`  | Общий секрет для WebSocket-моста. **Обязателен в продакшене** — установите в строку из случайных символов. | unset (must be provided)  |
| `REDIS_URL`                   | Строка подключения к Redis для ограничителя скорости и кэша                                        | `redis://redis:6379`      |
| `REDIS_PORT`                  | Порт хоста для встроенного контейнера Redis                                                         | `6379`                    |
| `AUTO_UPDATE_HOST_REPO_DIR`   | Путь на хосте, монтируемый в профиль `cli` в `/workspace/omniroute` для самовосстановления          | `.` (текущая директория) |
| `OMNIROUTE_MEMORY_MB`         | Предел кучи Node (`NODE_OPTIONS=--max-old-space-size`), зашитый в образ                            | `256` (установлено в Dockerfile) |
| `DASHBOARD_PORT` / `API_PORT` | Переопределение портов для дашборда (20128) и API (20129)                                           | `20128` / `20129`         |
| `PROD_DASHBOARD_PORT`         | Порт хоста для дашборда в `docker-compose.prod.yml`                                                 | `20130`                   |
| `CLIPROXYAPI_PORT`            | Порт хоста для сайдкара `cliproxyapi`                                                              | `8317`                    |

## Docker Compose с Caddy (HTTPS Auto-TLS)

OmniRoute можно безопасно развернуть с помощью автоматического предоставления SSL-сертификатов от Caddy. Убедитесь, что DNS A-запись вашего домена указывает на IP-адрес вашего сервера.

```yaml
services:
  omniroute:
    image: diegosouzapw/omniroute:latest
    container_name: omniroute
    restart: unless-stopped
    volumes:
      - omniroute-data:/app/data
    environment:
      - PORT=20128
      - NEXT_PUBLIC_BASE_URL=https://your-domain.com

  caddy:
    image: caddy:latest
    container_name: caddy
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
    command: caddy reverse-proxy --from https://your-domain.com --to http://omniroute:20128

volumes:
  omniroute-data:
```

## Cloudflare Quick Tunnel

Поддержка дашборда для развертываний в Docker включает однощелчковый **Cloudflare Quick Tunnel** на `Dashboard → Endpoints`. При первом включении скачивается `cloudflared` только при необходимости, запускается временный туннель к вашему текущему `/v1` эндпоинту и отображает сгенерированный URL `https://*.trycloudflare.com/v1` прямо под вашим обычным публичным URL.

Панели туннелей эндпоинтов (Cloudflare, Tailscale, ngrok) можно показывать или скрывать из `Settings → Appearance` без изменения состояния активного туннеля.

### Примечания по туннелям

- URL-адреса Quick Tunnel временные и меняются после каждой перезагрузки.
- Quick Tunnels не восстанавливаются автоматически после перезапуска OmniRoute или контейнера. Повторно включите их из дашборда при необходимости.
- Управляемая установка в настоящее время поддерживает Linux, macOS и Windows на `x64` / `arm64`.
- Управляемые Quick Tunnels по умолчанию используют транспорт HTTP/2, чтобы избежать шумных предупреждений о буфере QUIC UDP в ограниченных контейнерных средах. Установите `CLOUDFLARED_PROTOCOL=quic` или `auto`, если вы хотите другой транспорт.
- Docker-образы содержат корневые сертификаты системы и передают их управляемому `cloudflared`, что предотвращает сбои доверия TLS при загрузке туннеля внутри контейнера.
- Установите `CLOUDFLARED_BIN=/absolute/path/to/cloudflared`, если вы хотите, чтобы OmniRoute использовал существующий бинарный файл вместо загрузки.

## Теги образов

| Образ                    | Тег      | Размер | Описание              |
| ------------------------ | -------- | ------ | --------------------- |
| `diegosouzapw/omniroute` | `latest` | ~250MB | Последняя стабильная версия |
| `diegosouzapw/omniroute` | `3.8.0`  | ~250MB | Текущая версия       |

Мультиплатформенный манифест: `linux/amd64` + `linux/arm64` (Apple Silicon, AWS Graviton, Raspberry Pi). Docker автоматически выбирает соответствующую архитектуру; передайте `--platform linux/amd64`, если вам нужно принудительно использовать эмуляцию AMD64 на ARM-хостах.

## Важные замечания

- **Режим WAL SQLite:** `docker stop` должен завершиться, чтобы OmniRoute мог сохранить последние изменения в `storage.sqlite`. Включенные файлы Compose уже устанавливают период остановки 40 секунд. Если вы запускаете образ напрямую, сохраните `--stop-timeout 40`.
- **`DISABLE_SQLITE_AUTO_BACKUP`:** Установите `true`, если резервное копирование управляется внешне.
- **Сохранение данных:** Всегда монтируйте том к `/app/data`, чтобы сохранить вашу базу данных, ключи и конфигурации между перезапусками контейнера.
- **Настройка порта:** Переопределите переменную окружения `PORT`, чтобы изменить порт по умолчанию `20128`.

## Смотрите также

- [Руководство по развертыванию на виртуальной машине](../ops/VM_DEPLOYMENT_GUIDE.md) — настройка VM + nginx + Cloudflare
- [Руководство по развертыванию на Fly.io](../ops/FLY_IO_DEPLOYMENT_GUIDE.md) — развертывание на Fly.io
- [Конфигурация окружения](../reference/ENVIRONMENT.md) — полное руководство по `.env`
