# FLY_IO_DEPLOYMENT_GUIDE (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/ops/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇦🇿 [az](../../../az/docs/ops/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/ops/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇧🇩 [bn](../../../bn/docs/ops/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇨🇿 [cs](../../../cs/docs/ops/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇩🇰 [da](../../../da/docs/ops/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇩🇪 [de](../../../de/docs/ops/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇪🇸 [es](../../../es/docs/ops/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇮🇷 [fa](../../../fa/docs/ops/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/ops/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/ops/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇮🇳 [gu](../../../gu/docs/ops/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇮🇱 [he](../../../he/docs/ops/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇮🇳 [hi](../../../hi/docs/ops/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/ops/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇮🇩 [id](../../../id/docs/ops/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇮🇩 [in](../../../in/docs/ops/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇮🇹 [it](../../../it/docs/ops/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/ops/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/ops/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇮🇳 [mr](../../../mr/docs/ops/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/ops/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/ops/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇳🇴 [no](../../../no/docs/ops/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/ops/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/ops/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/ops/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/ops/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/ops/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/ops/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇰🇪 [sw](../../../sw/docs/ops/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇮🇳 [ta](../../../ta/docs/ops/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇮🇳 [te](../../../te/docs/ops/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇹🇭 [th](../../../th/docs/ops/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇹🇷 [tr](../../../tr/docs/ops/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇵🇰 [ur](../../../ur/docs/ops/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/ops/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/FLY_IO_DEPLOYMENT_GUIDE.md)

---

---

title: "OmniRoute Fly.io развертывание"
version: 3.8.2
lastUpdated: 2026-05-13
---

# OmniRoute Fly.io развертывание

Этот документ описывает процесс развертывания OmniRoute на Fly.io, который подходит для двух сценариев:

- Первоначальное развертывание текущего проекта на Fly.io
- Повторное развертывание после обновления кода
- Новые проекты могут следовать аналогичному процессу

Этот документ основан на проверенных конфигурациях текущего проекта, где приложение называется `omniroute`.

---

## 1. Цель развертывания

- Платформа: Fly.io
- Метод развертывания: Локальное использование `flyctl` для публикации
- Способ запуска: Использование существующего `Dockerfile` и `fly.toml` в репозитории
- Хранение данных: Использование Fly Volume для монтирования в `/data`
- Адрес доступа: `https://omniroute.fly.dev/`

---

## 2. Ключевые конфигурации текущего проекта

Текущий файл `fly.toml` в репозитории содержит следующие ключевые элементы:

```toml
app = 'omniroute'
primary_region = 'sin'

[[mounts]]
  source = 'data'
  destination = '/data'

[processes]
  app = 'node run-standalone.mjs'

[http_service]
  internal_port = 20128

[env]
  TZ = "Asia/Shanghai"
  HOST = "0.0.0.0"
  HOSTNAME = "0.0.0.0"
  BIND = "0.0.0.0"
```

Пояснения:

- `app = 'omniroute'` определяет, в какое приложение Fly будет развернуто
- `destination = '/data'` определяет точку монтирования постоянного тома
- Для этого проекта необходимо, чтобы `DATA_DIR=/data`, иначе база данных и ключи будут записаны во временный каталог контейнера

---

## 3. Необходимые инструменты

### 3.1 Установка Fly CLI

Windows PowerShell:

```powershell
pwsh -Command "iwr https://fly.io/install.ps1 -useb | iex"
```

Если скрипт установки не работает в текущей среде, можно вручную скачать бинарный файл `flyctl` и поместить его в `PATH`.

### 3.2 Вход в аккаунт Fly

```powershell
flyctl auth login
```

### 3.3 Проверка состояния входа

```powershell
flyctl auth whoami
flyctl version
```

---

## 4. Первоначальное развертывание текущего проекта

### 4.1 Получение кода и переход в каталог

```powershell
git clone https://github.com/diegosouzapw/OmniRoute.git
cd OmniRoute
```

### 4.2 Подтверждение имени приложения

Откройте `fly.toml` и обратите внимание на эту строку:

```toml
app = 'omniroute'
```

Если вы планируете развернуть в новом приложении, измените его на уникальное имя, например:

```toml
app = 'omniroute-yourname'
```

Примечание:

- В консоли вы должны видеть приложение с тем же именем, что и в `fly.toml`
- Если ранее использовалось другое имя, например `oroute`, не путайте его с `omniroute`

### 4.3 Создание приложения

Если приложение еще не существует:

```powershell
flyctl apps create omniroute
```

Если вы изменили имя приложения, замените `omniroute` на ваше имя.

### 4.4 Первоначальное развертывание

```powershell
flyctl deploy
```

---

## 5. Обязательные параметры

Для проекта на Fly.io рекомендуется настроить следующие параметры.

### 5.1 Уже проверенные параметры

Эти параметры уже используются в текущем приложении `omniroute`:

- `API_KEY_SECRET`
- `DATA_DIR`
- `JWT_SECRET`
- `MACHINE_ID_SALT`
- `NEXT_PUBLIC_BASE_URL`
- `OMNIROUTE_WS_BRIDGE_SECRET` (обязательно в производстве / required in production / obrigatório em produção — используется для аутентификации WebSocket-моста / used for WebSocket bridge authentication)
- `STORAGE_ENCRYPTION_KEY`

### 5.2 О параметре `INITIAL_PASSWORD`

В текущем проекте не установлен `INITIAL_PASSWORD`, так как он не требуется для этого развертывания.

Если его не устанавливать:

- В логах запуска будет указано, что пароль по умолчанию `CHANGEME`
- После развертывания необходимо сменить пароль в настройках системы

Если вы хотите установить начальный пароль автоматически, вы можете добавить его позже:

- `INITIAL_PASSWORD`

---

## 6. Рекомендуемые параметры

### 6.1 Установка в Secrets

Рекомендуется добавить в Fly Secrets:

| Переменная                   | Рекомендуется                                       | Описание                                                                                                           |
| ---------------------------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `API_KEY_SECRET`             | Обязательно                                         | Используется для генерации и проверки API Key                                                                      |
| `JWT_SECRET`                 | Обязательно                                         | Используется для подписи JWT и управления сессиями                                                                 |
| `OMNIROUTE_WS_BRIDGE_SECRET` | Обязательно в производстве (required / obrigatório) | Используется для аутентификации WebSocket-моста (WebSocket bridge auth / chave de autenticação da ponte WebSocket) |
| `STORAGE_ENCRYPTION_KEY`     | Настоятельно рекомендуется                          | Используется для шифрования хранения конфиденциальной информации                                                   |
| `MACHINE_ID_SALT`            | Рекомендуется                                       | Используется для генерации стабильного идентификатора машины                                                       |
| `INITIAL_PASSWORD`           | По желанию                                          | Используется для установки начального пароля при первом развертывании                                              |
| OAuth/API секреты            | По необходимости                                    | Используются для аутентификации в различных внешних платформах                                                     |

### 6.2 Рекомендуемые значения для текущего проекта

| Переменная             | Рекомендуемое значение      |
| ---------------------- | --------------------------- |
| `DATA_DIR`             | `/data`                     |
| `NEXT_PUBLIC_BASE_URL` | `https://omniroute.fly.dev` |

Пояснения:

- `DATA_DIR=/data` критически важно, так как должно совпадать с точкой монтирования Fly Volume
- `NEXT_PUBLIC_BASE_URL` используется для диспетчера и обратных вызовов фронтенда

### 6.3 Настройка URL обратного вызова OAuth (OAuth callback URL / URL de callback OAuth)

Если вы хотите включить OAuth-провайдеры (например, Antigravity, Gemini, Cursor) в развертывании Fly.io, убедитесь в следующем:
(If you need to enable OAuth-based providers — e.g. Antigravity, Gemini, Cursor — on the Fly.io deployment, make sure of the following two points. / Se precisar habilitar providers via OAuth — p.ex. Antigravity, Gemini, Cursor — na implantação Fly.io, garanta os dois pontos abaixo.)

1. **Установите `NEXT_PUBLIC_BASE_URL` на публичный HTTPS-домен (set `NEXT_PUBLIC_BASE_URL` to the public HTTPS domain / defina `NEXT_PUBLIC_BASE_URL` para o domínio HTTPS público)**

   ```powershell
   flyctl secrets set NEXT_PUBLIC_BASE_URL=https://omniroute.fly.dev -a omniroute
   ```

   Если вы используете пользовательский домен (if using a custom domain / se usar um domínio personalizado), замените его на соответствующий домен (e.g. `https://omniroute.yourdomain.com`).

2. **Настройте URL обратного вызова в консоли провайдера (configure the callback URL on the provider console / configure a URL de callback no painel do provider)**

   Обычно формат следующий (typical format / formato típico):

   ```text
   <NEXT_PUBLIC_BASE_URL>/api/oauth/<provider>/callback
   ```

   Например (e.g. / p.ex.):
   - `https://omniroute.fly.dev/api/oauth/gemini/callback`
   - `https://omniroute.fly.dev/api/oauth/antigravity/callback`
   - `https://omniroute.fly.dev/api/oauth/cursor/callback`

   Если `NEXT_PUBLIC_BASE_URL` не совпадает с зарегистрированным URL обратного вызова в консоли провайдера, процесс OAuth завершится неудачей на этапе перенаправления в браузере (mismatch between `NEXT_PUBLIC_BASE_URL` and the registered callback URL will cause OAuth to fail at the browser redirect step / divergência entre `NEXT_PUBLIC_BASE_URL` e a URL de callback registrada quebra o OAuth no redirect do navegador).

---

## 7. Одношаговое настройка параметров

Следующая команда создаст безопасные случайные значения и запишет все необходимые параметры для текущего проекта в Fly Secrets.

Примечание:

- Не включает `INITIAL_PASSWORD`
- Применяется для текущего проекта `omniroute`

```powershell
$apiKeySecret = [Convert]::ToHexString((1..32 | ForEach-Object { Get-Random -Minimum 0 -Maximum 256 })).ToLower()
$jwtSecret = [Convert]::ToHexString((1..64 | ForEach-Object { Get-Random -Minimum 0 -Maximum 256 })).ToLower()
$machineIdSalt = [Convert]::ToHexString((1..32 | ForEach-Object { Get-Random -Minimum 0 -Maximum 256 })).ToLower()
$storageKey = [Convert]::ToHexString((1..32 | ForEach-Object { Get-Random -Minimum 0 -Maximum 256 })).ToLower()
$wsBridgeSecret = [Convert]::ToHexString((1..32 | ForEach-Object { Get-Random -Minimum 0 -Maximum 256 })).ToLower()

flyctl secrets set `
  API_KEY_SECRET=$apiKeySecret `
  JWT_SECRET=$jwtSecret `
  MACHINE_ID_SALT=$machineIdSalt `
  STORAGE_ENCRYPTION_KEY=$storageKey `
  OMNIROUTE_WS_BRIDGE_SECRET=$wsBridgeSecret `
  DATA_DIR=/data `
  NEXT_PUBLIC_BASE_URL=https://omniroute.fly.dev `
  -a omniroute
```

На Linux / macOS также можно использовать `openssl rand -hex 32`:

```bash
flyctl secrets set OMNIROUTE_WS_BRIDGE_SECRET=$(openssl rand -hex 32) -a omniroute
```

Примечание:

- `OMNIROUTE_WS_BRIDGE_SECRET` обязателен для продакшена; его отсутствие приведет к сбою рукопожатия WebSocket-моста

Если вы также хотите добавить начальный пароль:

```powershell
flyctl secrets set INITIAL_PASSWORD=ваш_сильный_пароль -a omniroute
```

---

## 8. Просмотр текущих параметров

```powershell
flyctl secrets list -a omniroute
```

Если на странице `Secrets` в консоли не отображаются ожидаемые переменные, проверьте:

- Выбрано ли приложение `omniroute`
- Совпадает ли `app` в `fly.toml` с приложением в консоли

---

## 9. Обновление и публикация

После обновления кода шаги публикации просты:

```powershell
git pull
flyctl deploy
```

Если нужно обновить только параметры, не изменяя код:

```powershell
flyctl secrets set KEY=value -a omniroute
```

Fly автоматически выполнит обновление машин.

### 9.1 Отслеживание обновлений исходного репозитория и сохранение `fly.toml` форка

Если текущий репозиторий является форком и вы хотите синхронизироваться с обновлениями из `https://github.com/diegosouzapw/OmniRoute`, рекомендуется следовать следующему процессу.

Сначала проверьте удаленные репозитории:

```powershell
git remote -v
```

Они должны включать:

- `origin`, указывающий на ваш форк
- `upstream`, указывающий на исходный репозиторий

Если `upstream` отсутствует, добавьте его:

```powershell
git remote add upstream https://github.com/diegosouzapw/OmniRoute.git
```

Перед синхронизацией с исходным репозиторием, получите последние коммиты и теги:

```powershell
git fetch upstream --tags
```

Проверьте текущую версию и теги исходного репозитория:

```powershell
git describe --tags --always
git show --no-patch --oneline v3.4.7
```

> Примечание: текущая версия проекта `v3.8.0`. Ссылки на `v3.4.7` ниже приведены только в качестве исторических примеров; для реальных релизов используйте `:latest` или тег текущей версии (например, `:v3.8.0`).

Если вы хотите объединить последние изменения из `main` исходного репозитория, сохранив `fly.toml` форка, выполните следующие шаги:

```powershell
git merge upstream/main
git checkout HEAD~1 -- fly.toml
git add -- fly.toml
git commit -m "chore(deploy): keep fork fly.toml"
git push origin main
```

Примечание:

- `git merge upstream/main` используется для синхронизации с последними изменениями исходного репозитория
- `git checkout HEAD~1 -- fly.toml` используется для восстановления вашего `fly.toml` форка перед объединением
- Если исходный репозиторий не изменил `fly.toml`, этот шаг не приведет к дополнительным изменениям
- Если исходный репозиторий изменил `fly.toml`, этот шаг гарантирует, что пользовательские настройки развертывания, такие как имя приложения Fly, примонтированные тома и регион, не будут перезаписаны

Если вы хотите выровняться с определенным тегом релиза, например `v3.4.7`, вы можете сначала проверить, содержится ли этот тег в `upstream/main`:

```powershell
git merge-base --is-ancestor v3.4.7 upstream/main
```

Успешный возврат означает, что `upstream/main` уже содержит эту версию, и вы можете просто объединить `upstream/main`.

### 9.2 Стандартный порядок публикации после синхронизации с исходным репозиторием

После синхронизации с исходным репозиторием рекомендуется следовать следующему порядку публикации:

1. `git fetch upstream --tags`
2. `git merge upstream/main`
3. Восстановить `fly.toml` форка
4. `git push origin main`
5. `flyctl deploy`
6. `flyctl status -a omniroute`
7. `flyctl logs --no-tail -a omniroute`

Это фактический процесс, который использовался для обновления текущего проекта до `v3.4.7` (пример исторической версии, текущая фактическая версия `v3.8.0`).

## 10. Проверка после публикации

### 10.1 Проверка состояния приложения

```powershell
flyctl status -a omniroute
```

### 10.2 Просмотр логов запуска

```powershell
flyctl logs --no-tail -a omniroute
```

### 10.3 Проверка доступности сайта

```powershell
try {
  (Invoke-WebRequest -Uri "https://omniroute.fly.dev" -MaximumRedirection 5 -UseBasicParsing).StatusCode
} catch {
  if ($_.Exception.Response) {
    $_.Exception.Response.StatusCode.value__
  } else {
    throw
  }
}
```

Возврат `200` означает, что сайт отвечает нормально.

---

## 11. Успешные признаки

После успешного развертывания в логах должны быть следующие строки:

```text
[bootstrap] Secrets persisted to: /data/server.env
[DB] SQLite database ready: /data/storage.sqlite
```

Эти две точки очень важны:

- `/data/server.env` означает, что секреты сохранены в постоянный том
- `/data/storage.sqlite` означает, что база данных записана в постоянный том

Если вы видите `/app/data/...`, значит `DATA_DIR` не настроен правильно, и его нужно исправить немедленно.

---

## 12. Часто встречающиеся проблемы

### 12.1 Страница `Secrets` пуста

Обычно бывает две причины:

- Вы еще не выполнили `flyctl secrets set`
- Вы открыли другое приложение, например `oroute`, а не `omniroute`

### 12.2 `flyctl deploy` сообщает `app not found`

Сначала создайте приложение:

```powershell
flyctl apps create omniroute
```

### 12.3 Ошибка разбора `fly.toml`

Особое внимание уделите:

- Нет ли в комментариях нечитаемых символов
- Правильно ли стоят кавычки и отступы в TOML

### 12.4 Данные не сохраняются

Проверьте:

- Есть ли в `fly.toml` строка `destination = '/data'`
- Установлен ли `DATA_DIR` в `/data`

### 12.5 Можно ли запустить без `INITIAL_PASSWORD`

Можно, но будет использоваться пароль по умолчанию `CHANGEME`. В производственной среде рекомендуется как можно скорее изменить пароль в админке.

---

## 13. Рекомендации для повторного использования в новых проектах

Если вы будете развертывать новые проекты по этой инструкции, измените как минимум:

1. Измените `app` в `fly.toml`
2. Измените `NEXT_PUBLIC_BASE_URL`
3. Сохраните `DATA_DIR=/data`
4. Сгенерируйте новые `API_KEY_SECRET`, `JWT_SECRET`, `MACHINE_ID_SALT`, `STORAGE_ENCRYPTION_KEY`
5. После первого развертывания проверьте, записываются ли данные в `/data`

Не переиспользуйте секреты из старого проекта.

---

## 14. Минимальный список команд для текущего проекта

Самые часто используемые команды для текущего проекта:

```powershell
flyctl auth whoami
flyctl status -a omniroute
flyctl secrets list -a omniroute
flyctl deploy
flyctl logs --no-tail -a omniroute
```

Если вы просто обновляете версию, основная команда:

```powershell
flyctl deploy
```

Если вы развертываете проект в новом окружении в первый раз, основные шаги:

1. `flyctl auth login`
2. `flyctl apps create omniroute`
3. `flyctl secrets set ... -a omniroute`
4. `flyctl deploy`
5. `flyctl logs --no-tail -a omniroute`
