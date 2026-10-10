# Zed IDE Integration in Docker Environments (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../providers/ZED-DOCKER.md) · 🇸🇦 [ar](../../../ar/docs/providers/ZED-DOCKER.md) · 🇦🇿 [az](../../../az/docs/providers/ZED-DOCKER.md) · 🇧🇬 [bg](../../../bg/docs/providers/ZED-DOCKER.md) · 🇧🇩 [bn](../../../bn/docs/providers/ZED-DOCKER.md) · 🇨🇿 [cs](../../../cs/docs/providers/ZED-DOCKER.md) · 🇩🇰 [da](../../../da/docs/providers/ZED-DOCKER.md) · 🇩🇪 [de](../../../de/docs/providers/ZED-DOCKER.md) · 🇪🇸 [es](../../../es/docs/providers/ZED-DOCKER.md) · 🇮🇷 [fa](../../../fa/docs/providers/ZED-DOCKER.md) · 🇫🇮 [fi](../../../fi/docs/providers/ZED-DOCKER.md) · 🇫🇷 [fr](../../../fr/docs/providers/ZED-DOCKER.md) · 🇮🇳 [gu](../../../gu/docs/providers/ZED-DOCKER.md) · 🇮🇱 [he](../../../he/docs/providers/ZED-DOCKER.md) · 🇮🇳 [hi](../../../hi/docs/providers/ZED-DOCKER.md) · 🇭🇺 [hu](../../../hu/docs/providers/ZED-DOCKER.md) · 🇮🇩 [id](../../../id/docs/providers/ZED-DOCKER.md) · 🇮🇩 [in](../../../in/docs/providers/ZED-DOCKER.md) · 🇮🇹 [it](../../../it/docs/providers/ZED-DOCKER.md) · 🇯🇵 [ja](../../../ja/docs/providers/ZED-DOCKER.md) · 🇰🇷 [ko](../../../ko/docs/providers/ZED-DOCKER.md) · 🇮🇳 [mr](../../../mr/docs/providers/ZED-DOCKER.md) · 🇲🇾 [ms](../../../ms/docs/providers/ZED-DOCKER.md) · 🇳🇱 [nl](../../../nl/docs/providers/ZED-DOCKER.md) · 🇳🇴 [no](../../../no/docs/providers/ZED-DOCKER.md) · 🇵🇭 [phi](../../../phi/docs/providers/ZED-DOCKER.md) · 🇵🇱 [pl](../../../pl/docs/providers/ZED-DOCKER.md) · 🇵🇹 [pt](../../../pt/docs/providers/ZED-DOCKER.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/providers/ZED-DOCKER.md) · 🇷🇴 [ro](../../../ro/docs/providers/ZED-DOCKER.md) · 🇸🇰 [sk](../../../sk/docs/providers/ZED-DOCKER.md) · 🇸🇪 [sv](../../../sv/docs/providers/ZED-DOCKER.md) · 🇰🇪 [sw](../../../sw/docs/providers/ZED-DOCKER.md) · 🇮🇳 [ta](../../../ta/docs/providers/ZED-DOCKER.md) · 🇮🇳 [te](../../../te/docs/providers/ZED-DOCKER.md) · 🇹🇭 [th](../../../th/docs/providers/ZED-DOCKER.md) · 🇹🇷 [tr](../../../tr/docs/providers/ZED-DOCKER.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/providers/ZED-DOCKER.md) · 🇵🇰 [ur](../../../ur/docs/providers/ZED-DOCKER.md) · 🇻🇳 [vi](../../../vi/docs/providers/ZED-DOCKER.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/providers/ZED-DOCKER.md)

---

Когда OmniRoute работает внутри Docker, стандартный процесс "Импорт из Zed Keychain" не удается,
потому что контейнер не может получить доступ к демону keychain хостовой операционной системы (libsecret на Linux,
Keychain на macOS, Credential Manager на Windows) и каталоги конфигурации Zed на файловой системе хоста не видны внутри контейнера по умолчанию.

## Почему Импорт Keychain Не Удается в Docker

Внутри контейнера возникают две блокирующие проблемы:

1. **Изоляция файловой системы** — `isZedInstalled()` ищет `~/.config/zed` (Linux),
   `~/Library/Application Support/Zed` (macOS), или эквивалент для Windows. Эти пути находятся на хосте и не доступны, если они не были явно смонтированы как том.
2. **Изоляция IPC** — Даже если каталог конфигурации смонтирован, нативный модуль `keytar` общается с сервисом keychain ОС через Unix-сокет или D-Bus сессию.
   Ни один из этих механизмов не передается в контейнер по умолчанию, поэтому чтение учетных данных всегда не удается.

OmniRoute определяет окружение Docker через два эвристических метода:

- Наличие `/.dockerenv` (записывается демоном Docker при запуске контейнера).
- Наличие строки `docker` в `/proc/1/cgroup` (Linux cgroup v1).

Когда срабатывает любой из эвристических методов, маршрут импорта возвращает HTTP 422 с
`zedDockerEnvironment: true` и сообщением, направляющим вас на вкладку Manual Token Import.

## Использование вкладки Manual Token Import

1. Откройте **Dashboard → Providers → Zed**.
2. Панель **Manual Token Import** появляется ниже карточки импорта keychain. Когда
   OmniRoute обнаруживает Docker, эта панель автоматически разворачивается после первой неудачной попытки импорта keychain.
3. Выберите провайдера из выпадающего списка (OpenAI, Anthropic, Google, Mistral, xAI,
   OpenRouter, или DeepSeek).
4. Вставьте API ключ в поле пароля.
5. Нажмите **Import**.

Ключ сохраняется как новое соединение провайдера с именем
`Zed Manual Import (<provider>)`.

## Где Zed Хранит API Ключи на Хосте

Zed хранит ключи провайдеров AI в keychain ОС под именами сервисов, такими как
`zed-openai`, `ai.zed.openai`, `zed-anthropic` и т.д. Чтобы получить их для ручного
импорта, посмотрите:

**Linux**

```
~/.config/zed/settings.json
```

Раздел `language_models` содержит конфигурации провайдеров. Ключи, сохраненные в keychain через UI Zed, не находятся в виде обычного текста в `settings.json`; получите их через просмотрщик keychain, такой как GNOME Keyring / Seahorse, или выполнив:

```bash
secret-tool lookup service zed-openai account api-key
```

**macOS**

```
~/Library/Application Support/Zed/settings.json
```

Записи keychain можно найти в **Keychain Access.app**, поискав `zed`.

## Опция Volume-Mount (Advanced)

Вы можете опционально смонтировать каталог конфигурации Zed в контейнер только для чтения.
Это не исправляет проблему с keychain, но может быть полезно для будущих функций, которые читают
несекретные значения конфигурации Zed (например, предпочтения моделей).

```yaml
# docker-compose.yml snippet
services:
  omniroute:
    image: omniroute:latest
    volumes:
      # Linux host
      - "${HOME}/.config/zed:/host-zed-config:ro"
      # macOS host (uncomment instead)
      # - "${HOME}/Library/Application Support/Zed:/host-zed-config:ro"
    environment:
      # Future: ZED_CONFIG_PATH=/host-zed-config
      PORT: "20128"
```

Примечание: переменная окружения `ZED_CONFIG_PATH` для переопределения еще не реализована. Этот
сниппет предоставляется в качестве ссылки на тот случай, когда эта функция будет добавлена.

## API Manual Import

Конечная точка ручного импорта также может быть вызвана напрямую:

```
POST /api/providers/zed/manual-import
Content-Type: application/json
Authorization: Bearer <management-token>

{
  "provider": "openai",
  "token": "sk-...",
  "label": "My Zed OpenAI key"   // optional
}
```

В случае успеха возвращается:

```json
{ "success": true, "connectionId": "...", "provider": "openai" }
```

## Устранение неполадок

| Симптом                              | Причина                        | Исправление                              |
| ------------------------------------ | ---------------------------- | -------------------------------- |
| 422 + `zedDockerEnvironment: true`   | Работает внутри Docker        | Используйте вкладку Manual Token Import      |
| 404 + `zedInstalled: false`          | Zed не установлен на хосте    | Установите Zed или используйте ручной импорт |
| 403 + keychain access denied         | ОС запретила доступ к keychain    | Предоставить разрешение в ОС prompt    |
| 404 + keychain service not available | `libsecret` отсутствует на Linux | Установите `libsecret-1-dev`        |
