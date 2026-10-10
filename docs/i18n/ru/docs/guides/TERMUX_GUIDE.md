# TERMUX_GUIDE (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../guides/TERMUX_GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/guides/TERMUX_GUIDE.md) · 🇦🇿 [az](../../../az/docs/guides/TERMUX_GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/guides/TERMUX_GUIDE.md) · 🇧🇩 [bn](../../../bn/docs/guides/TERMUX_GUIDE.md) · 🇨🇿 [cs](../../../cs/docs/guides/TERMUX_GUIDE.md) · 🇩🇰 [da](../../../da/docs/guides/TERMUX_GUIDE.md) · 🇩🇪 [de](../../../de/docs/guides/TERMUX_GUIDE.md) · 🇪🇸 [es](../../../es/docs/guides/TERMUX_GUIDE.md) · 🇮🇷 [fa](../../../fa/docs/guides/TERMUX_GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/guides/TERMUX_GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/guides/TERMUX_GUIDE.md) · 🇮🇳 [gu](../../../gu/docs/guides/TERMUX_GUIDE.md) · 🇮🇱 [he](../../../he/docs/guides/TERMUX_GUIDE.md) · 🇮🇳 [hi](../../../hi/docs/guides/TERMUX_GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/guides/TERMUX_GUIDE.md) · 🇮🇩 [id](../../../id/docs/guides/TERMUX_GUIDE.md) · 🇮🇩 [in](../../../in/docs/guides/TERMUX_GUIDE.md) · 🇮🇹 [it](../../../it/docs/guides/TERMUX_GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/guides/TERMUX_GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/guides/TERMUX_GUIDE.md) · 🇮🇳 [mr](../../../mr/docs/guides/TERMUX_GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/guides/TERMUX_GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/guides/TERMUX_GUIDE.md) · 🇳🇴 [no](../../../no/docs/guides/TERMUX_GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/guides/TERMUX_GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/guides/TERMUX_GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/guides/TERMUX_GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/guides/TERMUX_GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/guides/TERMUX_GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/guides/TERMUX_GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/guides/TERMUX_GUIDE.md) · 🇰🇪 [sw](../../../sw/docs/guides/TERMUX_GUIDE.md) · 🇮🇳 [ta](../../../ta/docs/guides/TERMUX_GUIDE.md) · 🇮🇳 [te](../../../te/docs/guides/TERMUX_GUIDE.md) · 🇹🇭 [th](../../../th/docs/guides/TERMUX_GUIDE.md) · 🇹🇷 [tr](../../../tr/docs/guides/TERMUX_GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/guides/TERMUX_GUIDE.md) · 🇵🇰 [ur](../../../ur/docs/guides/TERMUX_GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/guides/TERMUX_GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/guides/TERMUX_GUIDE.md)

---

---
title: "Настройка Termux в фоновом режиме"
version: 3.8.2
lastUpdated: 2026-05-13
---

# Настройка Termux в фоновом режиме

OmniRoute может работать в фоновом режиме на Android через Termux. Десктопное приложение Electron не поддерживается в Termux, но веб-дашборд и OpenAI-совместимый API работают из локального браузера или с других устройств в той же сети.

## Предварительные требования

Установите Termux из F-Droid или GitHub releases, затем обновите пакеты и установите инструменты сборки, необходимые для нативных зависимостей, таких как `better-sqlite3`.

```bash
pkg update
pkg upgrade
pkg install nodejs-lts python build-essential git
```

> **Версия Node.js:** OmniRoute требует Node `>=20.20.2 <21 || >=22.22.2 <23 || >=24.0.0 <27` (в соответствии с `engines` в `package.json`). Termux's `nodejs-lts` обычно поставляется с Node 20 LTS, который совместим. Если `node --version` сообщает о более старой версии, установите `pkg install nodejs` (текущая) и проверьте, что основная версия соответствует поддерживаемому диапазону.

Если сборка нативного пакета завершается неудачно, повторите команду `pkg install` выше и затем повторите установку OmniRoute.

## Установка

Запустите последний опубликованный пакет напрямую:

```bash
npx -y omniroute@latest
```

Вы также можете установить его глобально:

```bash
npm install -g omniroute
omniroute
```

## Запуск

Запустите OmniRoute в фоновом режиме:

```bash
omniroute
```

или:

```bash
npx omniroute
```

Дашборд слушает:

```text
http://localhost:20128
```

Откройте этот URL в браузере Android. Если вы запускаете клиенты внутри Termux, используйте тот же хост и порт, что и базовый URL OpenAI-совместимый.

## Фоновое выполнение

Для простого фонового процесса:

```bash
nohup omniroute > omniroute.log 2>&1 &
```

Чтобы остановить его:

```bash
pkill -f omniroute
```

Для автоматического запуска после перезагрузки устройства установите дополнение Termux:Boot и создайте скрипт загрузки:

```bash
mkdir -p ~/.termux/boot
cat > ~/.termux/boot/omniroute.sh <<'EOF'
#!/data/data/com.termux/files/usr/bin/sh
cd "$HOME"
nohup omniroute > "$HOME/omniroute.log" 2>&1 &
EOF
chmod +x ~/.termux/boot/omniroute.sh
```

Оптимизация батареи Android может останавливать длительно работающие фоновые процессы. Отключите оптимизацию батареи для Termux, если сервер должен оставаться онлайн.

## Доступ с других устройств

Найдите IP-адрес телефона в сети WiFi:

```bash
ip addr show wlan0
```

Затем откройте дашборд с другого устройства:

```text
http://PHONE_IP:20128
```

Например:

```text
http://192.168.1.50:20128
```

Держите телефон и клиент в одной доверенной сети. Если вы открываете OmniRoute вне телефона, включите API-ключи и аутентификацию дашборда.

## Директория данных

По умолчанию OmniRoute хранит данные в домашней директории Termux, следуя тому же поведению пути данных сервера, которое используется на Linux. Чтобы разместить базу данных в явном месте:

```bash
export DATA_DIR="$HOME/.omniroute"
omniroute
```

## Ограничения

- Electron не работает в Termux.
- Нет системного лотка или интеграции с рабочим столом.
- Эта настройка только для сервера: используйте браузерный дашборд.
- Нативные зависимости могут потребовать локальной компиляции.
- Устройства с низким объемом памяти Android могут потребовать меньше одновременных запросов.
- Функции MITM/системного сертификата могут потребовать работы с доверенным хранилищем сертификатов на уровне Android вне Termux.

## Устранение неполадок

### Ошибки сборки better-sqlite3

Установите инструментальный набор Termux:

```bash
pkg install nodejs-lts python build-essential
```

Затем повторите:

```bash
npx -y omniroute@latest
```

### Порт уже используется

Проверьте, что слушает на порту по умолчанию:

```bash
ss -ltnp | grep 20128
```

Остановите старый процесс:

```bash
pkill -f omniroute
```

### Дашборд недоступен с другого устройства

Убедитесь, что оба устройства находятся в одной сети WiFi, затем протестируйте из Termux:

```bash
curl http://localhost:20128
```

Если локальный доступ работает, но доступ в LAN не работает, проверьте изоляцию горячей точки/WiFi Android и любые профили брандмауэра или VPN на телефоне.
