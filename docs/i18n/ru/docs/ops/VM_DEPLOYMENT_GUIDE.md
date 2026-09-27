# VM_DEPLOYMENT_GUIDE (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/VM_DEPLOYMENT_GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/ops/VM_DEPLOYMENT_GUIDE.md) · 🇦🇿 [az](../../../az/docs/ops/VM_DEPLOYMENT_GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/ops/VM_DEPLOYMENT_GUIDE.md) · 🇧🇩 [bn](../../../bn/docs/ops/VM_DEPLOYMENT_GUIDE.md) · 🇨🇿 [cs](../../../cs/docs/ops/VM_DEPLOYMENT_GUIDE.md) · 🇩🇰 [da](../../../da/docs/ops/VM_DEPLOYMENT_GUIDE.md) · 🇩🇪 [de](../../../de/docs/ops/VM_DEPLOYMENT_GUIDE.md) · 🇪🇸 [es](../../../es/docs/ops/VM_DEPLOYMENT_GUIDE.md) · 🇮🇷 [fa](../../../fa/docs/ops/VM_DEPLOYMENT_GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/ops/VM_DEPLOYMENT_GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/ops/VM_DEPLOYMENT_GUIDE.md) · 🇮🇳 [gu](../../../gu/docs/ops/VM_DEPLOYMENT_GUIDE.md) · 🇮🇱 [he](../../../he/docs/ops/VM_DEPLOYMENT_GUIDE.md) · 🇮🇳 [hi](../../../hi/docs/ops/VM_DEPLOYMENT_GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/ops/VM_DEPLOYMENT_GUIDE.md) · 🇮🇩 [id](../../../id/docs/ops/VM_DEPLOYMENT_GUIDE.md) · 🇮🇩 [in](../../../in/docs/ops/VM_DEPLOYMENT_GUIDE.md) · 🇮🇹 [it](../../../it/docs/ops/VM_DEPLOYMENT_GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/ops/VM_DEPLOYMENT_GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/ops/VM_DEPLOYMENT_GUIDE.md) · 🇮🇳 [mr](../../../mr/docs/ops/VM_DEPLOYMENT_GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/ops/VM_DEPLOYMENT_GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/ops/VM_DEPLOYMENT_GUIDE.md) · 🇳🇴 [no](../../../no/docs/ops/VM_DEPLOYMENT_GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/ops/VM_DEPLOYMENT_GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/ops/VM_DEPLOYMENT_GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/ops/VM_DEPLOYMENT_GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/VM_DEPLOYMENT_GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/ops/VM_DEPLOYMENT_GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/ops/VM_DEPLOYMENT_GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/ops/VM_DEPLOYMENT_GUIDE.md) · 🇰🇪 [sw](../../../sw/docs/ops/VM_DEPLOYMENT_GUIDE.md) · 🇮🇳 [ta](../../../ta/docs/ops/VM_DEPLOYMENT_GUIDE.md) · 🇮🇳 [te](../../../te/docs/ops/VM_DEPLOYMENT_GUIDE.md) · 🇹🇭 [th](../../../th/docs/ops/VM_DEPLOYMENT_GUIDE.md) · 🇹🇷 [tr](../../../tr/docs/ops/VM_DEPLOYMENT_GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/VM_DEPLOYMENT_GUIDE.md) · 🇵🇰 [ur](../../../ur/docs/ops/VM_DEPLOYMENT_GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/ops/VM_DEPLOYMENT_GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/VM_DEPLOYMENT_GUIDE.md)

---

---

title: "OmniRoute — Руководство по развертыванию на виртуальной машине с Cloudflare"
version: 3.8.2
lastUpdated: 2026-05-13
---

# OmniRoute — Руководство по развертыванию на виртуальной машине с Cloudflare

🌐 **Языки:** 🇺🇸 [English](./VM_DEPLOYMENT_GUIDE.md) | 🇧🇷 [Português (Brasil)](../i18n/pt-BR/docs/ops/VM_DEPLOYMENT_GUIDE.md) | 🇪🇸 [Español](../i18n/es/docs/ops/VM_DEPLOYMENT_GUIDE.md) | 🇫🇷 [Français](../i18n/fr/docs/ops/VM_DEPLOYMENT_GUIDE.md) | 🇮🇹 [Italiano](../i18n/it/docs/ops/VM_DEPLOYMENT_GUIDE.md) | 🇷🇺 [Русский](../i18n/ru/docs/ops/VM_DEPLOYMENT_GUIDE.md) | 🇨🇳 [中文 (简体)](../i18n/zh-CN/docs/ops/VM_DEPLOYMENT_GUIDE.md) | 🇩🇪 [Deutsch](../i18n/de/docs/ops/VM_DEPLOYMENT_GUIDE.md) | 🇮🇳 [हिन्दी](../i18n/in/docs/ops/VM_DEPLOYMENT_GUIDE.md) | 🇹🇭 [ไทย](../i18n/th/docs/ops/VM_DEPLOYMENT_GUIDE.md) | 🇺🇦 [Українська](../i18n/uk-UA/docs/ops/VM_DEPLOYMENT_GUIDE.md) | 🇸🇦 [العربية](../i18n/ar/docs/ops/VM_DEPLOYMENT_GUIDE.md) | 🇯🇵 [日本語](../i18n/ja/docs/ops/VM_DEPLOYMENT_GUIDE.md) | 🇻🇳 [Tiếng Việt](../i18n/vi/docs/ops/VM_DEPLOYMENT_GUIDE.md) | 🇧🇬 [Български](../i18n/bg/docs/ops/VM_DEPLOYMENT_GUIDE.md) | 🇩🇰 [Dansk](../i18n/da/docs/ops/VM_DEPLOYMENT_GUIDE.md) | 🇫🇮 [Suomi](../i18n/fi/docs/ops/VM_DEPLOYMENT_GUIDE.md) | 🇮🇱 [עברית](../i18n/he/docs/ops/VM_DEPLOYMENT_GUIDE.md) | 🇭🇺 [Magyar](../i18n/hu/docs/ops/VM_DEPLOYMENT_GUIDE.md) | 🇮🇩 [Bahasa Indonesia](../i18n/id/docs/ops/VM_DEPLOYMENT_GUIDE.md) | 🇰🇷 [한국어](../i18n/ko/docs/ops/VM_DEPLOYMENT_GUIDE.md) | 🇲🇾 [Bahasa Melayu](../i18n/ms/docs/ops/VM_DEPLOYMENT_GUIDE.md) | 🇳🇱 [Nederlands](../i18n/nl/docs/ops/VM_DEPLOYMENT_GUIDE.md) | 🇳🇴 [Norsk](../i18n/no/docs/ops/VM_DEPLOYMENT_GUIDE.md) | 🇵🇹 [Português (Portugal)](../i18n/pt/docs/ops/VM_DEPLOYMENT_GUIDE.md) | 🇷🇴 [Română](../i18n/ro/docs/ops/VM_DEPLOYMENT_GUIDE.md) | 🇵🇱 [Polski](../i18n/pl/docs/ops/VM_DEPLOYMENT_GUIDE.md) | 🇸🇰 [Slovenčina](../i18n/sk/docs/ops/VM_DEPLOYMENT_GUIDE.md) | 🇸🇪 [Svenska](../i18n/sv/docs/ops/VM_DEPLOYMENT_GUIDE.md) | 🇵🇭 [Filipino](../i18n/phi/docs/ops/VM_DEPLOYMENT_GUIDE.md) | 🇨🇿 [Čeština](../i18n/cs/docs/ops/VM_DEPLOYMENT_GUIDE.md)

Полное руководство по установке и настройке OmniRoute на виртуальной машине (VPS) с доменом, управляемым через Cloudflare.

---

## Предварительные требования

| Элемент    | Минимальные требования       | Рекомендуемые    |
| ---------- | ---------------------------- | ---------------- |
| **CPU**    | 1 vCPU                       | 2 vCPU           |
| **RAM**    | 1 GB                         | 2 GB             |
| **Диск**   | 10 GB SSD                    | 25 GB SSD        |
| **ОС**     | Ubuntu 22.04 LTS             | Ubuntu 24.04 LTS |
| **Домен**  | Зарегистрирован в Cloudflare | —                |
| **Docker** | Docker Engine 24+            | Docker 27+       |

**Проверенные провайдеры**: Akamai (Linode), DigitalOcean, Vultr, Hetzner, AWS Lightsail.

---

## 1. Настройка виртуальной машины

### 1.1 Создание экземпляра

На вашем предпочитаемом провайдере VPS:

- Выберите Ubuntu 24.04 LTS
- Выберите минимальный план (1 vCPU / 1 GB RAM)
- Установите надежный пароль root или настройте SSH-ключ
- Запишите **публичный IP** (например, `203.0.113.10`)

### 1.2 Подключение через SSH

```bash
ssh root@203.0.113.10
```

### 1.3 Обновление системы

```bash
apt update && apt upgrade -y
```

### 1.4 Установка Docker

```bash
# Установка зависимостей
apt install -y ca-certificates curl gnupg

# Добавление официального репозитория Docker
install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg
chmod a+r /etc/apt/keyrings/docker.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $ (. /etc/os-release && echo "$VERSION_CODENAME") stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null
apt update
apt install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
```

### 1.5 Установка nginx

```bash
apt install -y nginx
```

### 1.6 Настройка брандмауэра (UFW)

```bash
ufw default deny incoming
ufw default allow outgoing
ufw allow 22/tcp    # SSH
ufw allow 80/tcp    # HTTP (перенаправление)
ufw allow 443/tcp   # HTTPS
ufw enable
```

> **Совет**: Для максимальной безопасности ограничьте порты 80 и 443 только IP-адресами Cloudflare. См. раздел [Дополнительная безопасность](#advanced-security).

## 2. Установка OmniRoute

### 2.1 Создание директории конфигурации

```bash
mkdir -p /opt/omniroute
```

### 2.2 Создание файла с переменными окружения

```bash
cat > /opt/omniroute/.env << 'EOF'
# === Безопасность ===
JWT_SECRET=CHANGE-TO-A-UNIQUE-64-CHAR-SECRET-KEY
INITIAL_PASSWORD=YourSecurePassword123!
API_KEY_SECRET=REPLACE-WITH-ANOTHER-SECRET-KEY
STORAGE_ENCRYPTION_KEY=REPLACE-WITH-THIRD-SECRET-KEY
STORAGE_ENCRYPTION_KEY_VERSION=v1
MACHINE_ID_SALT=CHANGE-TO-A-UNIQUE-SALT
OMNIROUTE_WS_BRIDGE_SECRET=REPLACE-WITH-WS-BRIDGE-SECRET  # REQUIRED em produção: usado pelo Codex Responses WS bridge

# === Приложение ===
PORT=20128
NODE_ENV=production
HOSTNAME=0.0.0.0
DATA_DIR=/app/data
APP_LOG_TO_FILE=true
AUTH_COOKIE_SECURE=false
REQUIRE_API_KEY=false

# === Домен (измените на ваш домен) ===
BASE_URL=https://llms.seudominio.com
NEXT_PUBLIC_BASE_URL=https://llms.seudominio.com

# === Синхронизация с облаком (опционально) ===
# CLOUD_URL=https://cloud.omniroute.online
# NEXT_PUBLIC_CLOUD_URL=https://cloud.omniroute.online
EOF
```

> ⚠️ **ВАЖНО**: Создайте уникальные секретные ключи! Используйте `openssl rand -hex 32` для каждого ключа.

### 2.3 Запуск контейнера

```bash
docker pull diegosouzapw/omniroute:latest

docker run -d \
  --name omniroute \
  --restart unless-stopped \
  --env-file /opt/omniroute/.env \
  -p 20128:20128 \
  -v omniroute-data:/app/data \
  diegosouzapw/omniroute:latest
```

### 2.4 Проверка работы

```bash
docker ps | grep omniroute
docker logs omniroute --tail 20
```

Должно отобразиться: `[DB] SQLite database ready` и `listening on port 20128`.

---

## 3. Настройка nginx (Обратный прокси)

### 3.1 Генерация SSL-сертификата (Cloudflare Origin)

В панели управления Cloudflare:

1. Перейдите в **SSL/TLS → Origin Server**
2. Нажмите **Create Certificate**
3. Оставьте значения по умолчанию (15 лет, \*.yourdomain.com)
4. Скопируйте **Origin Certificate** и **Private Key**

```bash
mkdir -p /etc/nginx/ssl

# Вставьте сертификат
nano /etc/nginx/ssl/origin.crt

# Вставьте закрытый ключ
nano /etc/nginx/ssl/origin.key

chmod 600 /etc/nginx/ssl/origin.key
```

### 3.2 Конфигурация Nginx

```bash
cat > /etc/nginx/sites-available/omniroute << 'NGINX'
# Default server — blocks direct access via IP
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    listen 443 ssl default_server;
    listen [::]:443 ssl default_server;
    ssl_certificate     /etc/nginx/ssl/origin.crt;
    ssl_certificate_key /etc/nginx/ssl/origin.key;
    server_name _;
    return 444;
}

# OmniRoute — HTTPS
server {
    listen 443 ssl;
    listen [::]:443 ssl;
    server_name llms.yourdomain.com;  # Change to your domain

    ssl_certificate     /etc/nginx/ssl/origin.crt;
    ssl_certificate_key /etc/nginx/ssl/origin.key;
    ssl_protocols TLSv1.2 TLSv1.3;

    client_max_body_size 100M;

    location / {
        proxy_pass http://127.0.0.1:20128;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # WebSocket support
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";

        # SSE (Server-Sent Events) — streaming AI responses
        proxy_buffering off;
        proxy_cache off;
        proxy_read_timeout 600s;
        proxy_send_timeout 600s;
    }
}

# HTTP → HTTPS redirect
server {
    listen 80;
    listen [::]:80;
    server_name llms.yourdomain.com;
    return 301 https://$server_name$request_uri;
}
NGINX
```

Сохраняйте таймауты потоковой передачи обратного прокси в соответствии с переменными окружения таймаута OmniRoute. Если вы увеличиваете
`FETCH_TIMEOUT_MS` / `STREAM_IDLE_TIMEOUT_MS`, увеличьте `proxy_read_timeout` / `proxy_send_timeout`
выше того же порога.

### 3.3 Включение и тестирование

```bash
# Remove default configuration
rm -f /etc/nginx/sites-enabled/default

# Enable OmniRoute
ln -sf /etc/nginx/sites-available/omniroute /etc/nginx/sites-enabled/omniroute

# Test and reload
nginx -t && systemctl reload nginx
```

---

## 4. Настройка DNS Cloudflare

### 4.1 Добавление DNS-записи

В панели управления Cloudflare → DNS:

| Тип | Имя    | Содержание             | Прокси     |
| --- | ------ | ---------------------- | ---------- |
| A   | `llms` | `203.0.113.10` (IP VM) | ✅ Proxied |

### 4.2 Настройка SSL

В разделе **SSL/TLS → Обзор**:

- Режим: **Full (Strict)**

В разделе **SSL/TLS → Edge Certificates**:

- Всегда использовать HTTPS: ✅ On
- Минимальная версия TLS: TLS 1.2
- Автоматические HTTPS-переадресации: ✅ On

### 4.3 Тестирование

```bash
curl -sI https://llms.seudominio.com/health
# Должен вернуть HTTP/2 200
```

---

## 5. Операции и обслуживание

### Обновление до новой версии

```bash
docker pull diegosouzapw/omniroute:latest
docker stop omniroute && docker rm omniroute
docker run -d --name omniroute --restart unless-stopped \
  --env-file /opt/omniroute/.env \
  -p 20128:20128 \
  -v omniroute-data:/app/data \
  diegosouzapw/omniroute:latest
```

### Просмотр логов

```bash
docker logs -f omniroute          # Поток в реальном времени
docker logs omniroute --tail 50   # Последние 50 строк
```

### Резервное копирование базы данных вручную

```bash
# Копирование данных из тома в хост
docker cp omniroute:/app/data ./backup-$(date +%F)

# Или сжатие всего тома
docker run --rm -v omniroute-data:/data -v $(pwd):/backup \
  alpine tar czf /backup/omniroute-data-$(date +%F).tar.gz /data
```

### Восстановление из резервной копии

```bash
docker stop omniroute
docker run --rm -v omniroute-data:/data -v $(pwd):/backup \
  alpine sh -c "rm -rf /data/* && tar xzf /backup/omniroute-data-YYYY-MM-DD.tar.gz -C /"
docker start omniroute
```

---

## 6. Продвинутая безопасность

### Ограничение nginx для IP-адресов Cloudflare

```bash
cat > /etc/nginx/cloudflare-ips.conf << 'CF'
# Диапазоны IPv4 Cloudflare — обновляйте периодически
# https://www.cloudflare.com/ips-v4/
set_real_ip_from 173.245.48.0/20;
set_real_ip_from 103.21.244.0/22;
set_real_ip_from 103.22.200.0/22;
set_real_ip_from 103.31.4.0/22;
set_real_ip_from 141.101.64.0/18;
set_real_ip_from 108.162.192.0/18;
set_real_ip_from 190.93.240.0/20;
set_real_ip_from 188.114.96.0/20;
set_real_ip_from 197.234.240.0/22;
set_real_ip_from 198.41.128.0/17;
set_real_ip_from 162.158.0.0/15;
set_real_ip_from 104.16.0.0/13;
set_real_ip_from 104.24.0.0/14;
set_real_ip_from 172.64.0.0/13;
set_real_ip_from 131.0.72.0/22;
real_ip_header CF-Connecting-IP;
CF
```

Добавьте следующее в `nginx.conf` внутри блока `http {}`:

```nginx
include /etc/nginx/cloudflare-ips.conf;
```

### Установка fail2ban

```bash
apt install -y fail2ban
systemctl enable fail2ban
systemctl start fail2ban

# Проверка статуса
fail2ban-client status sshd
```

### Блокировка прямого доступа к порту Docker

```bash
# Предотвращение прямого внешнего доступа к порту 20128
iptables -I DOCKER-USER -p tcp --dport 20128 -j DROP
iptables -I DOCKER-USER -i lo -p tcp --dport 20128 -j ACCEPT

# Сохранение правил
apt install -y iptables-persistent
netfilter-persistent save
```

---

## 7. Развертывание в Cloudflare Workers (Опционально)

Для удаленного доступа через Cloudflare Workers (без прямого открытия VM):

```bash
# В локальном репозитории
cd omnirouteCloud
npm install
npx wrangler login
npx wrangler deploy
```

См. также [TUNNELS_GUIDE.md](./TUNNELS_GUIDE.md) для пошагового руководства по Cloudflare Tunnel. Отдельный рабочий `omnirouteCloud/` находится в отдельном репозитории-компаньоне.

---

## Сводка по портам

| Порт  | Сервис      | Доступ                         |
| ----- | ----------- | ------------------------------ |
| 22    | SSH         | Публичный (с fail2ban)         |
| 80    | nginx HTTP  | Перенаправление → HTTPS        |
| 443   | nginx HTTPS | Через прокси Cloudflare        |
| 20128 | OmniRoute   | Только localhost (через nginx) |
