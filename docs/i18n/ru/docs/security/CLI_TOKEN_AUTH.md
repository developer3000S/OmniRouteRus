# CLI_TOKEN_AUTH (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../security/CLI_TOKEN_AUTH.md) · 🇸🇦 [ar](../../../ar/docs/security/CLI_TOKEN_AUTH.md) · 🇦🇿 [az](../../../az/docs/security/CLI_TOKEN_AUTH.md) · 🇧🇬 [bg](../../../bg/docs/security/CLI_TOKEN_AUTH.md) · 🇧🇩 [bn](../../../bn/docs/security/CLI_TOKEN_AUTH.md) · 🇨🇿 [cs](../../../cs/docs/security/CLI_TOKEN_AUTH.md) · 🇩🇰 [da](../../../da/docs/security/CLI_TOKEN_AUTH.md) · 🇩🇪 [de](../../../de/docs/security/CLI_TOKEN_AUTH.md) · 🇪🇸 [es](../../../es/docs/security/CLI_TOKEN_AUTH.md) · 🇮🇷 [fa](../../../fa/docs/security/CLI_TOKEN_AUTH.md) · 🇫🇮 [fi](../../../fi/docs/security/CLI_TOKEN_AUTH.md) · 🇫🇷 [fr](../../../fr/docs/security/CLI_TOKEN_AUTH.md) · 🇮🇳 [gu](../../../gu/docs/security/CLI_TOKEN_AUTH.md) · 🇮🇱 [he](../../../he/docs/security/CLI_TOKEN_AUTH.md) · 🇮🇳 [hi](../../../hi/docs/security/CLI_TOKEN_AUTH.md) · 🇭🇺 [hu](../../../hu/docs/security/CLI_TOKEN_AUTH.md) · 🇮🇩 [id](../../../id/docs/security/CLI_TOKEN_AUTH.md) · 🇮🇩 [in](../../../in/docs/security/CLI_TOKEN_AUTH.md) · 🇮🇹 [it](../../../it/docs/security/CLI_TOKEN_AUTH.md) · 🇯🇵 [ja](../../../ja/docs/security/CLI_TOKEN_AUTH.md) · 🇰🇷 [ko](../../../ko/docs/security/CLI_TOKEN_AUTH.md) · 🇮🇳 [mr](../../../mr/docs/security/CLI_TOKEN_AUTH.md) · 🇲🇾 [ms](../../../ms/docs/security/CLI_TOKEN_AUTH.md) · 🇳🇱 [nl](../../../nl/docs/security/CLI_TOKEN_AUTH.md) · 🇳🇴 [no](../../../no/docs/security/CLI_TOKEN_AUTH.md) · 🇵🇭 [phi](../../../phi/docs/security/CLI_TOKEN_AUTH.md) · 🇵🇱 [pl](../../../pl/docs/security/CLI_TOKEN_AUTH.md) · 🇵🇹 [pt](../../../pt/docs/security/CLI_TOKEN_AUTH.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/CLI_TOKEN_AUTH.md) · 🇷🇴 [ro](../../../ro/docs/security/CLI_TOKEN_AUTH.md) · 🇸🇰 [sk](../../../sk/docs/security/CLI_TOKEN_AUTH.md) · 🇸🇪 [sv](../../../sv/docs/security/CLI_TOKEN_AUTH.md) · 🇰🇪 [sw](../../../sw/docs/security/CLI_TOKEN_AUTH.md) · 🇮🇳 [ta](../../../ta/docs/security/CLI_TOKEN_AUTH.md) · 🇮🇳 [te](../../../te/docs/security/CLI_TOKEN_AUTH.md) · 🇹🇭 [th](../../../th/docs/security/CLI_TOKEN_AUTH.md) · 🇹🇷 [tr](../../../tr/docs/security/CLI_TOKEN_AUTH.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/CLI_TOKEN_AUTH.md) · 🇵🇰 [ur](../../../ur/docs/security/CLI_TOKEN_AUTH.md) · 🇻🇳 [vi](../../../vi/docs/security/CLI_TOKEN_AUTH.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/CLI_TOKEN_AUTH.md)

---

---
title: "CLI Machine-ID Token Authentication"
---

# CLI Machine-ID Token Authentication

OmniRoute's CLI использует **токен, выведенный из идентификатора машины**, для аутентификации на локальном сервере без необходимости явного API-ключа. Это позволяет использовать локальное приложение без конфигурации, сохраняя при этом безопасность для удалённого доступа.

## Как это работает

1. **Сторона CLI** (`bin/cli/utils/cliToken.mjs`): вычисляет `SHA-256(machineId + salt).hex[0..32]` с использованием [`node-machine-id`](https://github.com/automation-stack/node-machine-id) и вставляет результат в заголовок `x-omniroute-cli-token` для каждого вызова `apiFetch`.

2. **Сторона сервера** (`src/lib/middleware/cliTokenAuth.ts`): `isCliTokenAuthValid(request)` принимает токен только если:
   - `OMNIROUTE_DISABLE_CLI_TOKEN` не равно `"true"`
   - Заголовок присутствует и содержит ровно 32 шестнадцатеричных символа
   - IP-адрес источника является loopback (`127.0.0.1`, `::1`, `::ffff:127.0.0.1`)
   - Токен совпадает с хешем, вычисленным на сервере (сравнение с устойчивым к времени)

3. `requireManagementAuth` и другие маршрутизаторы вызывают `isCliTokenAuthValid` перед проверкой API-ключей — поэтому CLI получает прозрачный доступ к localhost без хранения каких-либо учётных данных.

## Модель угроз

| Сценарий                  | Риск                         | Снижение рисков                                                                                                                           |
| ------------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Другой пользователь на том же хосте | Может вычислить тот же токен | `machine-id` уникален для устройства; на настольных компьютерах с одним пользователем это допустимо. Используйте `OMNIROUTE_DISABLE_CLI_TOKEN=true` в много-пользовательских настройках. |
| Утечка токена через логи       | Логи могут раскрыть токен    | Значение заголовка маскируется в логах аудита (`x-omniroute-cli-token: ***`).                                                             |
| Повторная атака             | Токен статичен              | Принимается только с `127.0.0.1`/`::1`. Отклоняется для любого другого IP в `x-forwarded-for`.                                                   |
| Повторное использование на другом устройстве  | Привязан к машине по дизайну      | `node-machine-id` читает `/etc/machine-id` (Linux), `IOPlatformUUID` (macOS), `MachineGuid` (Windows). Уникален для каждого хоста.            |

## Отключение

Установите `OMNIROUTE_DISABLE_CLI_TOKEN=true` в `.env` или в окружении сервера, чтобы полностью отключить этот механизм. В этом случае доступ возможен только с явным API-ключом.

## Логирование аудита

Каждый запрос, аутентифицированный через CLI-токен, логируется с `event: "cli_token_auth"`, IP-адресом источника, user-agent, путём и первыми 8 символами хеша machine-id (необратимо).

## Приоритет API-ключа

Явный заголовок `Authorization: Bearer <key>` (из `--api-key` или `OMNIROUTE_API_KEY`) всегда имеет приоритет перед CLI-токеном и проверяется первым.

## Связанные файлы

- `bin/cli/utils/cliToken.mjs` — генерация CLI-токена
- `src/lib/middleware/cliTokenAuth.ts` — серверная валидация
- `src/lib/api/requireManagementAuth.ts` — интеграция в конвейер аутентификации
- `tests/unit/cli-machine-token.test.ts` — модульные тесты
