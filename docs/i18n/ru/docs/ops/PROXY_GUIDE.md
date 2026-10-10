# PROXY_GUIDE (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/PROXY_GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/ops/PROXY_GUIDE.md) · 🇦🇿 [az](../../../az/docs/ops/PROXY_GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/ops/PROXY_GUIDE.md) · 🇧🇩 [bn](../../../bn/docs/ops/PROXY_GUIDE.md) · 🇨🇿 [cs](../../../cs/docs/ops/PROXY_GUIDE.md) · 🇩🇰 [da](../../../da/docs/ops/PROXY_GUIDE.md) · 🇩🇪 [de](../../../de/docs/ops/PROXY_GUIDE.md) · 🇪🇸 [es](../../../es/docs/ops/PROXY_GUIDE.md) · 🇮🇷 [fa](../../../fa/docs/ops/PROXY_GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/ops/PROXY_GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/ops/PROXY_GUIDE.md) · 🇮🇳 [gu](../../../gu/docs/ops/PROXY_GUIDE.md) · 🇮🇱 [he](../../../he/docs/ops/PROXY_GUIDE.md) · 🇮🇳 [hi](../../../hi/docs/ops/PROXY_GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/ops/PROXY_GUIDE.md) · 🇮🇩 [id](../../../id/docs/ops/PROXY_GUIDE.md) · 🇮🇩 [in](../../../in/docs/ops/PROXY_GUIDE.md) · 🇮🇹 [it](../../../it/docs/ops/PROXY_GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/ops/PROXY_GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/ops/PROXY_GUIDE.md) · 🇮🇳 [mr](../../../mr/docs/ops/PROXY_GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/ops/PROXY_GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/ops/PROXY_GUIDE.md) · 🇳🇴 [no](../../../no/docs/ops/PROXY_GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/ops/PROXY_GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/ops/PROXY_GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/ops/PROXY_GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/PROXY_GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/ops/PROXY_GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/ops/PROXY_GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/ops/PROXY_GUIDE.md) · 🇰🇪 [sw](../../../sw/docs/ops/PROXY_GUIDE.md) · 🇮🇳 [ta](../../../ta/docs/ops/PROXY_GUIDE.md) · 🇮🇳 [te](../../../te/docs/ops/PROXY_GUIDE.md) · 🇹🇭 [th](../../../th/docs/ops/PROXY_GUIDE.md) · 🇹🇷 [tr](../../../tr/docs/ops/PROXY_GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/PROXY_GUIDE.md) · 🇵🇰 [ur](../../../ur/docs/ops/PROXY_GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/ops/PROXY_GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/PROXY_GUIDE.md)

---

---
title: "🌐 Руководство по OmniRoute Proxy"
version: 3.8.2
lastUpdated: 2026-05-13
---

# 🌐 Руководство по OmniRoute Proxy

> **Обходите географические блокировки, защищайте свою личность и направляйте трафик AI через любой прокси — с нулевой сложностью настройки.**

OmniRoute включает в себя полнофункциональную систему управления прокси, которая позволяет направлять трафик к поставщикам AI через HTTP, HTTPS или SOCKS5 прокси. Независимо от того, находитесь ли вы в заблокированном регионе, нуждаетесь в ротации IP или хотите скрыть отпечаток — это руководство охватывает все аспекты.

---

## Содержание

- [Зачем использовать прокси?](#зачем-использовать-прокси)
- [Обзор архитектуры](#обзор-архитектуры)
- [4-уровневая система прокси](#4-уровневая-система-прокси)
- [Реестр прокси (CRUD)](#реестр-прокси-crud)
- [Рынок бесплатных прокси 1proxy](#рынок-бесплатных-прокси-1proxy)
- [Ротация прокси](#ротация-прокси)
- [Антидетект и скрытность](#антидетект-и-скрытность)
- [Режимы прокси для апстрима](#режимы-прокси-для-апстрима)
- [Панель управления](#панель-управления)
- [Справочник API](#справочник-api)
- [Переменные окружения](#переменные-окружения)
- [Устранение неполадок](#устранение-неполадок)

---

## Зачем использовать прокси?

Многие поставщики AI ограничивают доступ по географическому региону. Разработчики из **России, Китая, Ирана, Кубы, Турции** и других стран сталкиваются с ошибками вроде:

```
unsupported_country_region_territory
```

Даже вне заблокированных регионов прокси полезны для:

| Использование          | Описание                                                     |
| ----------------------- | ------------------------------------------------------------ |
| **Обход географических ограничений** | Доступ к OpenAI, Anthropic, Codex, Copilot из заблокированных стран |
| **Ротация IP**         | Распределение запросов по нескольким IP для обхода ограничений скорости |
| **Конфиденциальность** | Скрытие вашего реального IP от поставщиков услуг              |
| **Соблюдение требований** | Направление трафика через конкретные юрисдикции              |
| **Тестирование**       | Симуляция запросов из разных регионов                        |

---

## Обзор архитектуры

```
┌───────────────────────────────────────────────────────────────┐
│                       OmniRoute Server                        │
│                                                               │
│  ┌─────────────┐    ┌──────────────┐    ┌──────────────────┐  │
│  │ Proxy       │    │ Proxy        │    │ Proxy            │  │
│  │ Registry    │───▶│ Dispatcher   │───▶│ Fetch (undici)   │  │
│  │ (SQLite)    │    │ (cached)     │    │                  │  │
│  └─────────────┘    └──────────────┘    └────────┬─────────┘  │
│         ▲                                        │            │
│         │                                        ▼            │
│  ┌──────┴──────┐                        ┌──────────────────┐  │
│  │ 1proxy Sync │                        │ Upstream         │  │
│  │ (free pool) │                        │ Provider API     │  │
│  └─────────────┘                        └──────────────────┘  │
└───────────────────────────────────────────────────────────────┘
```

### Ключевые компоненты

| Компонент            | Файл                                         | Роль                                                       |
| -------------------- | -------------------------------------------- | ---------------------------------------------------------- |
| **Реестр прокси**   | `src/lib/db/proxies.ts`                      | CRUD для записей прокси + назначение областей              |
| **Диспетчер прокси** | `open-sse/utils/proxyDispatcher.ts`          | Создает диспетчеры `undici` ProxyAgent/SOCKS с кэшированием |
| **Прокси Fetch**     | `open-sse/utils/proxyFetch.ts`               | Оборачивает `fetch()` с инъекцией диспетчера прокси        |
| **Маршрут настроек** | `src/app/api/settings/proxy/route.ts`        | Устаревший API конфигурации прокси (GET/PUT/DELETE)       |
| **Маршрут управления** | `src/app/api/v1/management/proxies/route.ts` | API CRUD реестра (GET/POST/PATCH/DELETE)                  |
| **1proxy DB**        | `src/lib/db/oneproxy.ts`                     | Хранение бесплатных прокси                                 |
| **1proxy Sync**     | `src/lib/oneproxySync.ts`                    | Получение прокси из API 1proxy                             |
| **1proxy Rotator**  | `src/lib/oneproxyRotator.ts`                 | Стратегии ротации (качество/случайная/последовательная)    |

---

## 4-уровневая система прокси

OmniRoute поддерживает настройку прокси на **четырех независимых уровнях**, разрешаемых в порядке приоритета:

```
Порядок разрешения приоритета (с наивысшего до наинизшего):

  1. 🔵 Прокси аккаунта/соединения → на API-ключ / OAuth-соединение
  2. 🟡 Прокси провайдера          → на провайдера (например, весь трафик OpenAI)
  3. 🟠 Прокси комбинации         → на комбинацию/конфигурацию маршрутизации
  4. 🟢 Глобальный прокси         → весь трафик, все провайдеры
```

### Как работает разрешение

Когда OmniRoute отправляет запрос к провайдеру, он вызывает `resolveProxyForConnectionFromRegistry()`, который проверяет каждый уровень в порядке:

1. **Уровень аккаунта** — Есть ли прокси, назначенный этому конкретному идентификатору соединения?
2. **Уровень провайдера** — Есть ли прокси, назначенный этому провайдеру (например, `openai`)?
3. **Глобальный уровень** — Настроен ли глобальный прокси?
4. **Нет прокси** — Прямое соединение с провайдером.

Первое совпадение побеждает. Это означает, что вы можете установить глобальный прокси в качестве резервного, но переопределить его для конкретных провайдеров или соединений.

### Что проксируется

| Тип трафика         | Проксируется? | Примечания                                         |
| -------------------- | -------- | --------------------------------------------- |
| Завершение чата     | ✅       | Все запросы `/v1/chat/completions`           |
| Вложения           | ✅       | `/v1/embeddings`                              |
| Генерация изображений     | ✅       | `/v1/images/generations`                      |
| Аудио (TTS/STT)      | ✅       | `/v1/audio/*`                                 |
| Обмен токенами OAuth | ✅       | Решает `unsupported_country_region_territory` |
| Тесты соединения     | ✅       | Кнопка "Тест соединения" использует прокси           |
| Обновление токена        | ✅       | Фоновое обновление OAuth                      |
| Синхронизация модели           | ✅       | Список моделей и обнаружение                   |

---

## Реестр прокси (CRUD)

Реестр прокси — это таблица SQLite (`proxy_registry`), которая хранит все ваши прокси. Каждый прокси имеет:

| Поле      | Тип    | Описание                         |
| ---------- | ------- | ----------------------------------- |
| `id`       | UUID    | Уникальный идентификатор                   |
| `name`     | String  | Метка для человека                |
| `type`     | String  | Протокол: `http`, `https`, `socks5` |
| `host`     | String  | Имя хоста прокси или IP                |
| `port`     | Integer | Номер порта                         |
| `username` | String  | Имя пользователя для аутентификации (зашифровано при хранении)   |
| `password` | String  | Пароль для аутентификации (зашифровано при хранении)   |
| `region`   | String  | Метка географического региона             |
| `notes`    | String  | Свободный текст заметок                     |
| `status`   | String  | `active` или `inactive`              |
| `source`   | String  | `manual` или `oneproxy`              |

### Создание прокси

**Через панель управления:**

1. Перейдите в **Настройки → Прокси**
2. Нажмите **Добавить прокси**
3. Заполните тип, хост, порт и необязательные учетные данные аутентификации
4. Сохраните

**Через API:**

```bash
curl -X POST http://localhost:20128/api/v1/management/proxies \
  -H "Content-Type: application/json" \
  -d '{
    "name": "US Proxy",
    "type": "http",
    "host": "proxy.example.com",
    "port": 8080,
    "username": "user",
    "password": "pass",
    "region": "US"
  }'
```

### Обновление прокси

```bash
curl -X PATCH http://localhost:20128/api/v1/management/proxies \
  -H "Content-Type: application/json" \
  -d '{
    "id": "proxy-uuid-here",
    "host": "new-proxy.example.com",
    "port": 9090
  }'
```

> **Примечание:** Учетные данные сохраняются, если вы явно не отправляете непустые замены. Отправка пустых строк для `username`/`password` сохранит сохраненные значения.

### Удаление прокси

```bash
# Не удается, если прокси назначен для любого уровня
curl -X DELETE "http://localhost:20128/api/v1/management/proxies?id=proxy-uuid"

# Принудительное удаление (удаляет назначения тоже)
curl -X DELETE "http://localhost:20128/api/v1/management/proxies?id=proxy-uuid&force=1"
```

### Список прокси

```bash
curl "http://localhost:20128/api/v1/management/proxies?limit=50&offset=0"
```

### Назначение прокси на уровни

```bash
# Назначить на глобальный уровень
curl -X PUT http://localhost:20128/api/settings/proxy \
  -H "Content-Type: application/json" \
  -d '{"level": "global", "proxy": {"type":"http","host":"proxy.example.com","port":8080}}'

# Назначить для конкретного провайдера
curl -X PUT http://localhost:20128/api/settings/proxy \
  -H "Content-Type: application/json" \
  -d '{"level": "provider", "id": "openai", "proxy": {"type":"socks5","host":"socks.example.com","port":1080}}'

# Назначить для конкретного соединения/ключа
curl -X PUT http://localhost:20128/api/settings/proxy \
  -H "Content-Type: application/json" \
  -d '{"level": "key", "id": "connection-uuid", "proxy": {"type":"http","host":"key-proxy.com","port":3128}}'
```

### Разрешение действующего прокси

Проверьте, какой прокси будет использоваться для данного соединения:

```bash
curl "http://localhost:20128/api/settings/proxy?resolve=connection-uuid"
```

Возвращает разрешенный прокси с его уровнем (`account`, `provider`, или `global`) и источником.

### Массовое назначение

Назначьте один прокси нескольким провайдерам или соединениям одновременно:

```bash
curl -X POST http://localhost:20128/api/v1/management/proxies/bulk-assign \
  -H "Content-Type: application/json" \
  -d '{
    "scope": "provider",
    "scopeIds": ["openai", "anthropic", "codex"],
    "proxyId": "proxy-uuid"
  }'
```

### Импорт/Экспорт

Реестр прокси включен в систему **Резервного копирования/Восстановления**. При экспорте конфигурации OmniRoute:

1. Перейдите в **Панель управления → Настройки → Резервное копирование**
2. Нажмите **Экспорт** — реестр прокси и назначения включены
3. Для восстановления нажмите **Импорт** и загрузите файл резервной копии

Реестр прокси также поддерживает **вставку по хосту+порту** — если вы импортируете прокси, который уже существует (тот же хост и порт), он обновляется вместо создания дубликата.

### Миграция из старой версии

Если вы настроили прокси в более старой версии (до реестра), OmniRoute автоматически мигрирует их:

```
Старая key_value store → proxy_registry + proxy_assignments
```

Это происходит один раз при первом запуске после обновления. Используйте `migrateLegacyProxyConfigToRegistry({ force: true })`, чтобы повторно запустить миграцию.
```

## 1proxy Рынок бесплатных прокси

> 🆕 **Добавлено [@oyi77](https://github.com/oyi77)** — PR [#1847](https://github.com/diegosouzapw/OmniRoute/pull/1847) (Issue [#1788](https://github.com/diegosouzapw/OmniRoute/issues/1788))

OmniRoute интегрируется с платформой **[1proxy](https://1proxy-api.aitradepulse.com)**, чтобы предоставить доступ к **сотням бесплатных проверенных прокси** со всего мира. Это идеально подходит для пользователей, у которых нет собственной прокси-инфраструктуры.

### Как это работает

```
┌─────────────┐     Sync      ┌─────────────────┐    Rotate     ┌──────────┐
│  1proxy API │ ────────────▶ │  proxy_registry  │ ────────────▶ │ Provider │
│  (external) │   up to 500   │  source=oneproxy │  by quality   │   API    │
└─────────────┘    proxies    └─────────────────┘               └──────────┘
```

1. **Sync** — OmniRoute получает проверенные прокси с API 1proxy
2. **Store** — Прокси сохраняются в той же таблице `proxy_registry` с `source = 'oneproxy'`
3. **Filter** — Фильтрация по протоколу, стране, качеству
4. **Rotate** — Выбор лучшего прокси с использованием качества, случайного или последовательного подхода
5. **Auto-degrade** — Неудачные прокси получают снижение качества; ниже порога → помечены как неактивные

### Синхронизация прокси

**Через панель управления:**

1. Перейдите в **Настройки → вкладка 1proxy**
2. Нажмите **"Sync Now"**
3. Просмотр статистики: общее количество прокси, активные, средний рейтинг качества, распределение по странам

**Через API:**

```bash
# Trigger sync
curl -X POST http://localhost:20128/api/settings/oneproxy \
  -H "Content-Type: application/json" \
  -d '{}'

# Response:
# { "success": true, "added": 127, "updated": 45, "failed": 2, "total": 172 }
```

### Фильтрация прокси

```bash
# Filter by protocol
curl "http://localhost:20128/api/settings/oneproxy?protocol=socks5"

# Filter by country
curl "http://localhost:20128/api/settings/oneproxy?countryCode=US"

# Filter by minimum quality score
curl "http://localhost:20128/api/settings/oneproxy?minQuality=80"

# Combine filters
curl "http://localhost:20128/api/settings/oneproxy?protocol=http&countryCode=DE&minQuality=70"
```

### Рейтинг качества прокси

Каждый прокси 1proxy имеет метаданные:

| Поле            | Описание                                     |
| --------------- | -------------------------------------------- |
| `qualityScore`  | Рейтинг от 0 до 100 от проверки 1proxy       |
| `latencyMs`     | Измеренная задержка сети                     |
| `anonymity`     | `transparent`, `anonymous`, или `elite`       |
| `googleAccess`  | Может ли прокси получить доступ к сервисам Google |
| `countryCode`   | Двухбуквенный код страны ISO                  |
| `lastValidated` | Временная метка последней проверки           |

Рейтинги качества динамически изменяются:

- **Неудачные запросы** снижают рейтинг на 10 баллов
- **Рейтинг падает до ≤10** → прокси помечается как `inactive`
- Неактивные прокси исключаются из ротации

### Стратегии ротации

```bash
# Rotate by quality (best proxy first) — default
curl -X POST http://localhost:20128/api/settings/oneproxy/rotate \
  -H "Content-Type: application/json" \
  -d '{"strategy": "quality"}'

# Random rotation
curl -X POST http://localhost:20128/api/settings/oneproxy/rotate \
  -d '{"strategy": "random"}'

# Sequential (least recently validated first)
curl -X POST http://localhost:20128/api/settings/oneproxy/rotate \
  -d '{"strategy": "sequential"}'
```

### Circuit Breaker

У синхронизации 1proxy есть встроенный circuit breaker:

- После **5 последовательных неудачных синхронизаций** дальнейшие попытки синхронизации блокируются
- Сброс: `resetOneproxyCircuitBreaker()` или перезапуск сервера
- Статус синхронизации доступен по `GET /api/settings/oneproxy?action=status`

### Очистка прокси 1proxy

```bash
# Delete a single 1proxy proxy
curl -X DELETE "http://localhost:20128/api/settings/oneproxy?id=proxy-uuid"

# Clear ALL 1proxy proxies (manual proxies are untouched)
curl -X DELETE "http://localhost:20128/api/settings/oneproxy?clearAll=1"
```

---

## Анти-обнаружение и скрытность

OmniRoute не просто маршрутизирует трафик через прокси — он делает трафик выглядящим легитимным:

### Подмена отпечатка TLS

Использует `wreq-js` для генерации отпечатков TLS, похожих на браузерные, обходя системы обнаружения ботов, которые флагируют не браузерные TLS рукопожатия.

### Соответствие отпечатка CLI

**Переключатель отпечатка CLI** (`Настройки → Безопасность`) переупорядочивает HTTP-заголовки и поля JSON-тела, чтобы соответствовать точной подписи нативных бинарных файлов CLI (Claude Code, Codex и т.д.). Это работает **в дополнение** к прокси:

```
Ваш IP (заблокирован) → IP прокси (США) → API провайдера
                    + подмена TLS
                    + отпечаток CLI
```

Вы получаете как **маскировку IP**, так и **аутентичность запроса** одновременно.

### Сохранение IP прокси

Цветные значки на панели инструментов показывают, какой уровень прокси активен:

| Значок | Уровень     | Значение                                   |
| ----- | ---------- | ----------------------------------------- |
| 🟢    | Глобальный  | Весь трафик проходит через этот прокси    |
| 🟡    | Провайдер   | Только трафик этого провайдера проксируется|
| 🔵    | Соединение  | Это конкретное соединение использует этот прокси |

Значок также показывает разрешенный IP прокси для проверки.

---

## Режимы апстрим-прокси

Для провайдеров, использующих шаблон CLIProxyAPI, OmniRoute поддерживает три режима апстрим-прокси:

| Режим         | Описание                                        |
| ------------- | -------------------------------------------------- |
| `native`      | OmniRoute обрабатывает маршрутизацию прокси напрямую (по умолчанию) |
| `cliproxyapi` | Делегирует внешнему экземпляру CLIProxyAPI      |
| `fallback`    | Сначала пытается использовать native, затем переходит на CLIProxyAPI |

Настройка для каждого провайдера:

```bash
curl -X PUT "http://localhost:20128/api/upstream-proxy/openai" \
  -H "Content-Type: application/json" \
  -d '{"mode": "native", "enabled": true}'
```

---

## Интерфейс панели инструментов

### Настройки → Вкладка Прокси

- **Глобальная настройка прокси** (устанавливается один раз для всего трафика)
- **Переопределения прокси для провайдера**
- **Назначения прокси для соединения**
- **Тест соединения** через настроенный прокси
- **Цветные значки**, показывающие активный уровень прокси

### Настройки → Вкладка 1proxy

- **Синхронизировать сейчас** для получения бесплатных прокси
- **Карточки статистики**: Всего, Активных, Среднее качество, Последняя синхронизация
- **Фильтры**: Протокол, Код страны, Мин. качество
- **Таблица прокси** с хостом, протоколом, страной, оценкой качества, задержкой, анонимностью, доступом к Google
- **Панель статуса синхронизации** с отслеживанием успехов/неудач и количеством последовательных неудач
- **Очистить все** для удаления всех записей 1proxy

---

## Справочник API

### API настроек прокси

| Метод   | Конечная точка                                  | Описание                |
| -------- | ---------------------------------------------- | ----------------------- |
| `GET`    | `/api/settings/proxy`                          | Получить полную конфигурацию прокси |
| `GET`    | `/api/settings/proxy?level=global`             | Получить глобальный прокси |
| `GET`    | `/api/settings/proxy?level=provider&id=openai` | Получить прокси провайдера |
| `GET`    | `/api/settings/proxy?resolve=connectionId`     | Разрешить эффективный прокси |
| `PUT`    | `/api/settings/proxy`                          | Обновить конфигурацию прокси |
| `DELETE` | `/api/settings/proxy?level=provider&id=openai` | Удалить прокси на уровне |

### API реестра прокси

| Метод   | Конечная точка                                          | Описание           |
| -------- | ------------------------------------------------- | --------------------- |
| `GET`    | `/api/v1/management/proxies`                      | Список всех прокси |
| `GET`    | `/api/v1/management/proxies?id=uuid`              | Получить прокси по ID |
| `GET`    | `/api/v1/management/proxies?id=uuid&where_used=1` | Получить назначения прокси |
| `POST`   | `/api/v1/management/proxies`                      | Создать прокси |
| `PATCH`  | `/api/v1/management/proxies`                      | Обновить прокси |
| `DELETE` | `/api/v1/management/proxies?id=uuid`              | Удалить прокси |
| `DELETE` | `/api/v1/management/proxies?id=uuid&force=1`      | Принудительное удаление |
| `POST`   | `/api/v1/management/proxies/bulk-assign`          | Массовое назначение |
| `GET`    | `/api/v1/management/proxies/assignments`          | Список назначений |
| `GET`    | `/api/v1/management/proxies/health`               | Статистика здоровья прокси |

### API туннелей

Для предоставления вашего экземпляра OmniRoute общедоступному интернету (Cloudflare/ngrok/Tailscale) вместо маршрутизации исходящего трафика через прокси, см. [TUNNELS_GUIDE.md](./TUNNELS_GUIDE.md). REST API туннеля находится по адресу `/api/tunnels/{cloudflared,ngrok,tailscale}/*` и ортогонален цепочке исходящих прокси, документированной выше.

### API 1proxy

| Метод   | Конечная точка                               | Описание             |
| -------- | -------------------------------------- | ----------------------- |
| `GET`    | `/api/settings/oneproxy`               | Список прокси 1proxy |
| `GET`    | `/api/settings/oneproxy?action=stats`  | Получить статистику + статус синхронизации |
| `GET`    | `/api/settings/oneproxy?action=status` | Получить только статус синхронизации |
| `POST`   | `/api/settings/oneproxy`               | Запустить синхронизацию |
| `POST`   | `/api/settings/oneproxy/rotate`        | Переключиться на следующий прокси |
| `DELETE` | `/api/settings/oneproxy?id=uuid`       | Удалить один |
| `DELETE` | `/api/settings/oneproxy?clearAll=1`    | Очистить все |

### API апстрим-прокси

| Метод   | Конечная точка                          | Описание                  |
| -------- | --------------------------------- | ---------------------------- |
| `GET`    | `/api/upstream-proxy/:providerId` | Получить конфигурацию апстрим-прокси |
| `PUT`    | `/api/upstream-proxy/:providerId` | Установить режим апстрим-прокси |
| `DELETE` | `/api/upstream-proxy/:providerId` | Удалить конфигурацию апстрим-прокси |

## Переменные окружения

| Переменная                       | По умолчанию                          | Описание                                                      |
| -------------------------------- | ------------------------------------- | -------------------------------------------------------------- |
| `ENABLE_SOCKS5_PROXY`            | `true`                                | Включить поддержку SOCKS5 прокси (по умолчанию `true` в `.env.example`) |
| `ONEPROXY_ENABLED`               | `true`                                | Включить интеграцию с 1proxy                                   |
| `ONEPROXY_API_URL`               | `https://1proxy-api.aitradepulse.com` | Конечная точка API 1proxy                                      |
| `ONEPROXY_MAX_PROXIES`           | `500`                                 | Максимальное количество прокси для синхронизации                |
| `ONEPROXY_MIN_QUALITY_THRESHOLD` | `50`                                  | Минимальный балл качества для импорта                           |

---

## Устранение неполадок

### "SOCKS5 прокси отключен"

Установите `ENABLE_SOCKS5_PROXY=true` в вашем файле `.env` и перезапустите.

### Ошибки "socket hang up" через прокси

Это нормально для дешевых прокси, которые разрывают неактивные соединения. OmniRoute уже обрабатывает это:

- Отключение keep-alive на прокси-соединениях (`keepAliveTimeout: 1`)
- Отключение pipelining (`pipelining: 0`)
- Кэширование диспетчеров для избежания повторных рукопожатий

Если проблема сохраняется, попробуйте другой прокси или используйте функцию ротации 1proxy.

### "unsupported_country_region_territory" во время OAuth

Убедитесь, что прокси настроен **до** начала потока OAuth. OmniRoute маршрутизирует обмен токенами OAuth через настроенный прокси. Сначала установите глобальный или прокси провайдера, затем подключитесь.

### Прокси не используется

Проверьте порядок разрешения:

1. Убедитесь с помощью `GET /api/settings/proxy?resolve=your-connection-id`
2. Проверьте, что статус прокси `active` (не `inactive`)
3. Убедитесь, что область назначения прокси совпадает с вашим подключением

### Сбой синхронизации 1proxy

Проверьте статус синхронизации:

```bash
curl "http://localhost:20128/api/settings/oneproxy?action=status"
```

Если `consecutiveFailures >= 5`, автоматический выключатель сработал. Перезапустите сервер для сброса или дождитесь ручного сброса.

---

## Схема базы данных

### Таблица `proxy_registry`

```sql
CREATE TABLE proxy_registry (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  type TEXT NOT NULL DEFAULT 'http',
  host TEXT NOT NULL,
  port INTEGER NOT NULL,
  username TEXT DEFAULT '',
  password TEXT DEFAULT '',
  region TEXT,
  notes TEXT,
  status TEXT DEFAULT 'active',
  source TEXT NOT NULL DEFAULT 'manual',    -- 'manual' или 'oneproxy'
  quality_score INTEGER,                     -- 0-100 (только 1proxy)
  latency_ms INTEGER,                        -- миллисекунды (только 1proxy)
  anonymity TEXT,                            -- transparent/anonymous/elite
  google_access INTEGER DEFAULT 0,           -- доступ к Google? (только 1proxy)
  last_validated TEXT,                       -- ISO timestamp (только 1proxy)
  country_code TEXT,                         -- ISO 2-буквенный код (только 1proxy)
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);
```

### Таблица `proxy_assignments`

```sql
CREATE TABLE proxy_assignments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  proxy_id TEXT NOT NULL REFERENCES proxy_registry(id),
  scope TEXT NOT NULL,        -- 'global', 'provider', 'account', 'combo'
  scope_id TEXT,              -- ID провайдера, подключения или комбо
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  UNIQUE(scope, scope_id)
);
```

---

> 📖 **Связанная документация:**
>
> - [Руководство пользователя](../guides/USER_GUIDE.md) — Общая настройка и конфигурация
> - [Справочник API](../reference/API_REFERENCE.md) — Полная документация API
> - [Конфигурация окружения](../reference/ENVIRONMENT.md) — Все переменные окружения
