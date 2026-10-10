# RESILIENCE_GUIDE (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/RESILIENCE_GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/architecture/RESILIENCE_GUIDE.md) · 🇦🇿 [az](../../../az/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇩 [bn](../../../bn/docs/architecture/RESILIENCE_GUIDE.md) · 🇨🇿 [cs](../../../cs/docs/architecture/RESILIENCE_GUIDE.md) · 🇩🇰 [da](../../../da/docs/architecture/RESILIENCE_GUIDE.md) · 🇩🇪 [de](../../../de/docs/architecture/RESILIENCE_GUIDE.md) · 🇪🇸 [es](../../../es/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇷 [fa](../../../fa/docs/architecture/RESILIENCE_GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/architecture/RESILIENCE_GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [gu](../../../gu/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇱 [he](../../../he/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [hi](../../../hi/docs/architecture/RESILIENCE_GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇩 [id](../../../id/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇩 [in](../../../in/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇹 [it](../../../it/docs/architecture/RESILIENCE_GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/architecture/RESILIENCE_GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [mr](../../../mr/docs/architecture/RESILIENCE_GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇴 [no](../../../no/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/RESILIENCE_GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/architecture/RESILIENCE_GUIDE.md) · 🇰🇪 [sw](../../../sw/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [ta](../../../ta/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [te](../../../te/docs/architecture/RESILIENCE_GUIDE.md) · 🇹🇭 [th](../../../th/docs/architecture/RESILIENCE_GUIDE.md) · 🇹🇷 [tr](../../../tr/docs/architecture/RESILIENCE_GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇰 [ur](../../../ur/docs/architecture/RESILIENCE_GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/architecture/RESILIENCE_GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/RESILIENCE_GUIDE.md)

---

---
title: "Resilience Guide"
version: 3.8.2
lastUpdated: 2026-05-13
---

# Руководство по устойчивости

В OmniRoute есть три различных, но взаимосвязанных механизма обеспечения устойчивости. У каждого своя область действия и своё назначение. При отладке поведения маршрутизации держите их раздельно.

![Трёхслойная модель устойчивости](../diagrams/exported/resilience-3layers.svg)

> Исходник: [diagrams/resilience-3layers.mmd](../diagrams/resilience-3layers.mmd)

## 1. Circuit breaker провайдера

**Область действия:** весь провайдер (например, `glm`, `openai`, `anthropic`).

**Назначение:** прекратить отправку трафика провайдеру, который стабильно ошибается на уровне upstream/сервиса.

**Реализация:**

- Основной класс: `src/shared/utils/circuitBreaker.ts`
- Подключение: `src/sse/handlers/chatHelpers.ts`, `src/sse/handlers/chat.ts`
- API статуса: `GET /api/monitoring/health`
- API сброса: `POST /api/resilience/reset`
- Обёртки: `open-sse/services/accountFallback.ts`
- Таблица БД: `domain_circuit_breakers`

**Состояния:**

- `CLOSED` — обычный трафик разрешён
- `OPEN` — провайдер временно заблокирован; combo routing его пропускает
- `HALF_OPEN` — таймаут сброса истёк; разрешён probe-запрос

**Значения по умолчанию (`open-sse/config/constants.ts`):**

| Класс   | Порог       | Таймаут сброса |
| ------- | ----------- | -------------- |
| OAuth   | 3 ошибки    | 60s            |
| API-key | 5 ошибок    | 30s            |
| Local   | 2 ошибки    | 15s            |

**Коды срабатывания:** только статусы уровня провайдера `[408, 500, 502, 503, 504]`. НЕ срабатывает на ошибках уровня аккаунта (большинство 401/403/429 — это зона cooldown или lockout).

**Ленивое восстановление:** когда истекает `OPEN`, методы `getStatus()`, `canExecute()`, `getRetryAfterMs()` обновляют состояние на `HALF_OPEN`. Фоновый таймер не нужен.

---

## 2. Cooldown соединения

**Область действия:** отдельное соединение/аккаунт/ключ провайдера.

**Назначение:** пропустить один проблемный ключ, пока остальные соединения того же провайдера продолжают обслуживать запросы.

**Реализация:**

- Пометка недоступным: `src/sse/services/auth.ts::markAccountUnavailable()`
- Выборка: `getProviderCredentials*` в том же файле
- Расчёт cooldown: `open-sse/services/accountFallback.ts::checkFallbackError()`
- Настройки: `src/lib/resilience/settings.ts`

**Поля соединения:**

- `rateLimitedUntil` — timestamp, до которого действует cooldown
- `testStatus: "unavailable"`
- `lastError`, `lastErrorType`, `errorCode`
- `backoffLevel` — счётчик экспоненциального backoff

**Значения cooldown по умолчанию:**

- База OAuth: 5s
- База API-key: 3s
- API-key 429: предпочитаются upstream-заголовки `Retry-After`/reset либо parseable текст времени сброса
- Backoff: `baseCooldownMs * 2 ** failureIndex`

**Защита от thundering herd:** предотвращает избыточное продление cooldown или двойной инкремент `backoffLevel` при параллельных отказах.

**Терминальные состояния (НЕ cooldown):**

- `banned`
- `expired`
- `credits_exhausted`

Они сохраняются, пока учётные данные не изменятся или оператор не сбросит их. Не перезаписывайте терминальные состояния транзиентным состоянием cooldown.

**Ленивое восстановление:** когда `rateLimitedUntil` истекает, соединение снова становится доступным. При успешном использовании `clearAccountError()` очищает все поля ошибок.

---
---

## 3. Модели блокировки

**Область применения:** тройка «провайдер + соединение + модель».

**Назначение:** предотвратить отключение всего соединения, когда недоступна или ограничена по квоте только одна модель.

**Примеры:**

- Провайдеры с квотой на модель, возвращающие 429
- Локальные провайдеры, возвращающие 404 для одной отсутствующей модели
- Ошибки прав на режимы/модели, специфичные для провайдера (например, режимы Grok)

**Реализация:** `open-sse/services/accountFallback.ts` — `lockModel()`, `clearModelLock()`, `getAllModelLockouts()`.

### Панель управления охлаждением моделей (v3.8.0)

UI: Настройки → Охлаждение моделей (`src/app/(dashboard)/dashboard/settings/components/ModelCooldownsCard.tsx`)

Отображает активные блокировки с указанием: провайдер, соединение, модель, причина, expiresAt. Операторы могут вручную включить модель прямо из карточки.

**REST API:**

- `GET /api/resilience/model-cooldowns` — список активных блокировок
- `DELETE /api/resilience/model-cooldowns` — ручное включение. Тело: `{provider, connection, model}`. Аутентификация: management.

---

## Другие механизмы устойчивости

- **14 стратегий маршрутизации** (priority, weighted, round-robin, context-relay, fill-first, p2c, random, least-used, cost-optimized, reset-aware, strict-random, auto, lkgp, context-optimized) — см. [AUTO-COMBO.md](../routing/AUTO-COMBO.md).
- **Reset-aware маршрутизация** (v3.8.0) — приоритезирует соединения по времени сброса квоты.
- **Деградация фонового режима** — Responses API `background: true` деградирует до синхронного режима с предупреждением.
- **Динамическое определение лимитов инструментов** — откатывает провайдеров при достижении лимитов на количество инструментов.

---

## Отладка

- Все ключи провайдера пропускаются → проверьте и состояние circuit breaker, и `rateLimitedUntil`/`testStatus` каждого соединения.
- Провайдер навсегда исключён после окна сброса → код читает сырой `state` вместо `getStatus()`/`canExecute()`.
- Один ключ ошибается, остальные должны работать → используйте охлаждение соединения, а не circuit breaker.
- Ошибается только одна модель → используйте блокировку модели, а не охлаждение соединения.
- Состояние должно восстанавливаться само, но не восстанавливается → проверьте наличие timestamp из будущего и путь чтения, который обновляет истёкшее состояние. Постоянные статусы требуют ручного изменения.

---

## TLS Fingerprinting и Stealth

Stealth-возможности, специфичные для провайдеров (JA3/JA4, CCH, obfuscation), описаны отдельно — см. [STEALTH_GUIDE.md](../security/STEALTH_GUIDE.md).

---

## Смотрите также

- [Architecture Guide](./ARCHITECTURE.md) — Архитектура системы и внутреннее устройство
- [User Guide](../guides/USER_GUIDE.md) — Провайдеры, combo, интеграция с CLI
- [Auto-Combo Engine](../routing/AUTO-COMBO.md) — Оценка по 6 факторам, mode packs
