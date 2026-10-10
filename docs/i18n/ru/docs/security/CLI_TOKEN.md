# CLI_TOKEN (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../security/CLI_TOKEN.md) · 🇸🇦 [ar](../../../ar/docs/security/CLI_TOKEN.md) · 🇦🇿 [az](../../../az/docs/security/CLI_TOKEN.md) · 🇧🇬 [bg](../../../bg/docs/security/CLI_TOKEN.md) · 🇧🇩 [bn](../../../bn/docs/security/CLI_TOKEN.md) · 🇨🇿 [cs](../../../cs/docs/security/CLI_TOKEN.md) · 🇩🇰 [da](../../../da/docs/security/CLI_TOKEN.md) · 🇩🇪 [de](../../../de/docs/security/CLI_TOKEN.md) · 🇪🇸 [es](../../../es/docs/security/CLI_TOKEN.md) · 🇮🇷 [fa](../../../fa/docs/security/CLI_TOKEN.md) · 🇫🇮 [fi](../../../fi/docs/security/CLI_TOKEN.md) · 🇫🇷 [fr](../../../fr/docs/security/CLI_TOKEN.md) · 🇮🇳 [gu](../../../gu/docs/security/CLI_TOKEN.md) · 🇮🇱 [he](../../../he/docs/security/CLI_TOKEN.md) · 🇮🇳 [hi](../../../hi/docs/security/CLI_TOKEN.md) · 🇭🇺 [hu](../../../hu/docs/security/CLI_TOKEN.md) · 🇮🇩 [id](../../../id/docs/security/CLI_TOKEN.md) · 🇮🇩 [in](../../../in/docs/security/CLI_TOKEN.md) · 🇮🇹 [it](../../../it/docs/security/CLI_TOKEN.md) · 🇯🇵 [ja](../../../ja/docs/security/CLI_TOKEN.md) · 🇰🇷 [ko](../../../ko/docs/security/CLI_TOKEN.md) · 🇮🇳 [mr](../../../mr/docs/security/CLI_TOKEN.md) · 🇲🇾 [ms](../../../ms/docs/security/CLI_TOKEN.md) · 🇳🇱 [nl](../../../nl/docs/security/CLI_TOKEN.md) · 🇳🇴 [no](../../../no/docs/security/CLI_TOKEN.md) · 🇵🇭 [phi](../../../phi/docs/security/CLI_TOKEN.md) · 🇵🇱 [pl](../../../pl/docs/security/CLI_TOKEN.md) · 🇵🇹 [pt](../../../pt/docs/security/CLI_TOKEN.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/CLI_TOKEN.md) · 🇷🇴 [ro](../../../ro/docs/security/CLI_TOKEN.md) · 🇸🇰 [sk](../../../sk/docs/security/CLI_TOKEN.md) · 🇸🇪 [sv](../../../sv/docs/security/CLI_TOKEN.md) · 🇰🇪 [sw](../../../sw/docs/security/CLI_TOKEN.md) · 🇮🇳 [ta](../../../ta/docs/security/CLI_TOKEN.md) · 🇮🇳 [te](../../../te/docs/security/CLI_TOKEN.md) · 🇹🇭 [th](../../../th/docs/security/CLI_TOKEN.md) · 🇹🇷 [tr](../../../tr/docs/security/CLI_TOKEN.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/CLI_TOKEN.md) · 🇵🇰 [ur](../../../ur/docs/security/CLI_TOKEN.md) · 🇻🇳 [vi](../../../vi/docs/security/CLI_TOKEN.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/CLI_TOKEN.md)

---

---
title: "CLI Machine-ID Token"
---

# CLI Machine-ID Token

## Обзор

Команды OmniRoute CLI аутентифицируются против локального API управления, используя токен `HMAC-SHA256(machine-id, salt)`, отправленный через заголовок запроса `x-omniroute-cli-token`.

Это позволяет подкомандам CLI (`omniroute status`, `omniroute providers` и т.д.) вызывать конечные точки управления без необходимости предоставлять пользователю JWT или пароль при каждом вызове.

## Как это работает

1. `getMachineTokenSync()` считывает аппаратный идентификатор машины через `node-machine-id` (при неудаче возвращает пустую строку, отключая аутентификацию CLI).
2. Он вычисляет `HMAC-SHA256(machine_id, salt)` и возвращает полный 64-символьный шестнадцатеричный дайджест — детерминированный, необратимый токен, привязанный к этой машине.
3. CLI отправляет токен как `x-omniroute-cli-token` при каждом запросе к `http://localhost:<port>/api/...`.
4. Сервер (`src/server/authz/policies/management.ts`) пересчитывает ожидаемый токен с тем же солью и сравнивает через `timingSafeEqual`, чтобы предотвратить атаки на основе времени.

## Свойства безопасности

| Свойство                         | Детали                                                                                                                              |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **Только для loopback**          | Принимается только когда `Host` — `localhost`, `127.0.0.1` или `::1`.                                                                |
| **Сравнение с постоянным временем** | `crypto.timingSafeEqual` предотвращает атаки на основе времени.                                                                     |
| **Необратимый**                  | Выход HMAC не может восстановить machine-id.                                                                                       |
| **Нет обхода `always`-protected** | `isAlwaysProtectedPath()` оценивается перед проверкой токена CLI. `/api/shutdown` и `/api/settings/database` всегда требуют JWT. |
| **Не экспортируемый**             | Токен никогда не записывается на диск или не регистрируется.                                                                         |

## Вращение соли

Установите `OMNIROUTE_CLI_SALT` для вращения производного токена без изменений в коде. После вращения все процессы CLI на этой машине будут использовать новый токен автоматически. Полезно после утечки списка процессов, которая могла бы раскрыть предыдущее производное значение.

```bash
# Постоянное вращение (добавьте в профиль оболочки)
export OMNIROUTE_CLI_SALT="my-secret-salt-2026"

# Проверьте, что новый токен используется
omniroute status
```

Соль по умолчанию: `omniroute-cli-auth-v1`

## Файлы

| Файл                                      | Назначение                                  |
| ----------------------------------------- | ---------------------------------------- |
| `src/lib/machineToken.ts`                 | Производство токена (`getMachineTokenSync`) |
| `src/server/authz/headers.ts`             | Константа `CLI_TOKEN_HEADER`              |
| `src/server/authz/policies/management.ts` | Проверка на стороне сервера                 |
| `src/server/authz/routeGuard.ts`          | Проверка loopback хоста (`isLoopbackHost`)   |

## Смотрите также

- `docs/security/ROUTE_GUARD_TIERS.md` — уровни защиты маршрутов
- `docs/architecture/AUTHZ_GUIDE.md` — полный конвейер авторизации
