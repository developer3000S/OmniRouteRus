# E2E_DASHBOARD_SHAKEDOWN_v3.8.0 (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/E2E_DASHBOARD_SHAKEDOWN_v3.8.0.md) · 🇸🇦 [ar](../../../ar/docs/ops/E2E_DASHBOARD_SHAKEDOWN_v3.8.0.md) · 🇦🇿 [az](../../../az/docs/ops/E2E_DASHBOARD_SHAKEDOWN_v3.8.0.md) · 🇧🇬 [bg](../../../bg/docs/ops/E2E_DASHBOARD_SHAKEDOWN_v3.8.0.md) · 🇧🇩 [bn](../../../bn/docs/ops/E2E_DASHBOARD_SHAKEDOWN_v3.8.0.md) · 🇨🇿 [cs](../../../cs/docs/ops/E2E_DASHBOARD_SHAKEDOWN_v3.8.0.md) · 🇩🇰 [da](../../../da/docs/ops/E2E_DASHBOARD_SHAKEDOWN_v3.8.0.md) · 🇩🇪 [de](../../../de/docs/ops/E2E_DASHBOARD_SHAKEDOWN_v3.8.0.md) · 🇪🇸 [es](../../../es/docs/ops/E2E_DASHBOARD_SHAKEDOWN_v3.8.0.md) · 🇮🇷 [fa](../../../fa/docs/ops/E2E_DASHBOARD_SHAKEDOWN_v3.8.0.md) · 🇫🇮 [fi](../../../fi/docs/ops/E2E_DASHBOARD_SHAKEDOWN_v3.8.0.md) · 🇫🇷 [fr](../../../fr/docs/ops/E2E_DASHBOARD_SHAKEDOWN_v3.8.0.md) · 🇮🇳 [gu](../../../gu/docs/ops/E2E_DASHBOARD_SHAKEDOWN_v3.8.0.md) · 🇮🇱 [he](../../../he/docs/ops/E2E_DASHBOARD_SHAKEDOWN_v3.8.0.md) · 🇮🇳 [hi](../../../hi/docs/ops/E2E_DASHBOARD_SHAKEDOWN_v3.8.0.md) · 🇭🇺 [hu](../../../hu/docs/ops/E2E_DASHBOARD_SHAKEDOWN_v3.8.0.md) · 🇮🇩 [id](../../../id/docs/ops/E2E_DASHBOARD_SHAKEDOWN_v3.8.0.md) · 🇮🇩 [in](../../../in/docs/ops/E2E_DASHBOARD_SHAKEDOWN_v3.8.0.md) · 🇮🇹 [it](../../../it/docs/ops/E2E_DASHBOARD_SHAKEDOWN_v3.8.0.md) · 🇯🇵 [ja](../../../ja/docs/ops/E2E_DASHBOARD_SHAKEDOWN_v3.8.0.md) · 🇰🇷 [ko](../../../ko/docs/ops/E2E_DASHBOARD_SHAKEDOWN_v3.8.0.md) · 🇮🇳 [mr](../../../mr/docs/ops/E2E_DASHBOARD_SHAKEDOWN_v3.8.0.md) · 🇲🇾 [ms](../../../ms/docs/ops/E2E_DASHBOARD_SHAKEDOWN_v3.8.0.md) · 🇳🇱 [nl](../../../nl/docs/ops/E2E_DASHBOARD_SHAKEDOWN_v3.8.0.md) · 🇳🇴 [no](../../../no/docs/ops/E2E_DASHBOARD_SHAKEDOWN_v3.8.0.md) · 🇵🇭 [phi](../../../phi/docs/ops/E2E_DASHBOARD_SHAKEDOWN_v3.8.0.md) · 🇵🇱 [pl](../../../pl/docs/ops/E2E_DASHBOARD_SHAKEDOWN_v3.8.0.md) · 🇵🇹 [pt](../../../pt/docs/ops/E2E_DASHBOARD_SHAKEDOWN_v3.8.0.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/E2E_DASHBOARD_SHAKEDOWN_v3.8.0.md) · 🇷🇴 [ro](../../../ro/docs/ops/E2E_DASHBOARD_SHAKEDOWN_v3.8.0.md) · 🇸🇰 [sk](../../../sk/docs/ops/E2E_DASHBOARD_SHAKEDOWN_v3.8.0.md) · 🇸🇪 [sv](../../../sv/docs/ops/E2E_DASHBOARD_SHAKEDOWN_v3.8.0.md) · 🇰🇪 [sw](../../../sw/docs/ops/E2E_DASHBOARD_SHAKEDOWN_v3.8.0.md) · 🇮🇳 [ta](../../../ta/docs/ops/E2E_DASHBOARD_SHAKEDOWN_v3.8.0.md) · 🇮🇳 [te](../../../te/docs/ops/E2E_DASHBOARD_SHAKEDOWN_v3.8.0.md) · 🇹🇭 [th](../../../th/docs/ops/E2E_DASHBOARD_SHAKEDOWN_v3.8.0.md) · 🇹🇷 [tr](../../../tr/docs/ops/E2E_DASHBOARD_SHAKEDOWN_v3.8.0.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/E2E_DASHBOARD_SHAKEDOWN_v3.8.0.md) · 🇵🇰 [ur](../../../ur/docs/ops/E2E_DASHBOARD_SHAKEDOWN_v3.8.0.md) · 🇻🇳 [vi](../../../vi/docs/ops/E2E_DASHBOARD_SHAKEDOWN_v3.8.0.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/E2E_DASHBOARD_SHAKEDOWN_v3.8.0.md)

---

---
title: "E2E Dashboard Shakedown — v3.8.0"
---

# E2E Dashboard Shakedown — v3.8.0

**Целевая ветка:** `release/v3.8.0`
**Цель:** проверить вручную в режиме разработки (Turbopack), что все страницы рендерятся без ошибок времени выполнения или бэкенда перед закрытием версии 3.8.0. Для каждой найденной ошибки оператор **исправляет на самой странице** и переходит к следующей — этот документ является живым сценарием сессии.

> Это **ручной smoke test операционной системы**, а не автоматизированный набор тестов. Кажется слишком учебным? Это намеренно: цель — чтобы другой сопровождающий мог возобновить работу, если сессия будет прервана.

---

## 0. Предварительные требования (запускать один раз)

### 0.1 Состояние репозитория

```bash
git fetch origin
git checkout release/v3.8.0
git pull origin release/v3.8.0 --ff-only
git status                       # чистая рабочая область
```

### 0.2 Известный конфликт — директория `app/` в корне

`npm pack` и `npm run build` создают `app/` в корне (gitignored, зеркало `src/app/`). Если она существует, **Next.js dev предпочитает корень и ломает все маршруты** (Turbopack возвращает `PageNotFoundError: Cannot find module for page: route not found /(dashboard)/...`).

```bash
[ -d app ] && mv app /tmp/omniroute-pack-artifact-$(date +%s)
ls -d app 2>/dev/null && echo "STILL THERE — abortar" || echo "ok"
```

### 0.3 Кэш Turbopack

```bash
rm -rf .next/dev
```

### 0.4 Dev сервер

В выделенном терминале:

```bash
npm run dev 2>&1 | tee /tmp/omniroute-dev.log
```

Дождитесь `Ready` и `Local: http://localhost:20128`. Оставьте терминал видимым на протяжении всей сессии — это основной источник ошибок бэкенда.

### 0.5 Браузер

- Chrome с **открытыми DevTools** (F12), активной вкладкой **Console**, фильтром `error|warning`, и вкладкой **Network** с отмеченным "Preserve log".
- Очистите консоль между страницами (`Ctrl+L`) для изоляции шума.
- Войдите в систему с учетной записью администратора перед началом (некоторые страницы загружаются только при аутентификации).

### 0.6 Side-channel — поиск ошибок на бэкенде

В другом терминале:

```bash
tail -F /tmp/omniroute-dev.log | grep --line-buffered -iE "error|warn|cannot|undefined|TypeError|PageNotFoundError"
```

Оставьте открытым. Если что-то появится, пока вы находитесь на странице, запишите это в столбец **Erros** соответствующей строки.

---

## 1. Что считается "пройденным"

Страница считается пройденной, когда **все** следующие условия выполнены:

1. Конечный HTTP-код — `200` (не `4xx`/`5xx`). Перенаправления (`307`/`302`) допустимы только если они намеренные (например, `/dashboard` → `/home`).
2. Никакого **error overlay** от Turbopack/React не появляется на экране.
3. Никаких `console.error` в DevTools (предупреждения допустимы, но запишите новые).
4. Никаких новых стектрейсов в `/tmp/omniroute-dev.log`. Предыдущие повторяющиеся ошибки (например, обновление токена провайдера без учетных данных) могут быть проигнорированы — но подтвердите, что это те же самые ошибки, что и раньше.
5. Основной контент страницы рендерится (не только пустой макет/сайдбар).
6. По крайней мере, одно базовое взаимодействие работает (клик по вкладке, фильтру или внутренней ссылке) без ошибок.

Если любой из пунктов не выполнен → **статус `❌`**, опишите симптом в столбце **Erros**, исправьте, перезагрузите, отметьте `✅`, когда пройдет.

---

## 2. Наиболее распространенные категории ошибок и стандартные методы их исправления

| Симптома                                                          | Где появляется         | Типичная причина                                                             | Где исправить                                                                        |
| ---------------------------------------------------------------- | -------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `PageNotFoundError: route not found /(group)/...`                | Красный экран Turbopack | `app/` в корне, или устаревший `.next/dev/`                                    | Вернуться к §0.2/0.3                                                                    |
| `Cannot find module 'X'` в runtime                              | Экран или лог                | Несуществующий импорт, сломанный alias                                       | Исправить импорт; проверить `tsconfig.json`                                            |
| `Hydration failed because the server rendered HTML didn't match` | Консоль                    | Date/Math.random на серверном рендере, или `useEffect` вне `"use client"` | Переместить логику в `useEffect`, или пометить поддерево как `dynamic="force-dynamic"` |
| `500` в API-роуте, вызванной страницей                         | Network + log              | Zod parse fail, DB error, валидатор ввода                             | Посмотреть обработчик в `src/app/api/.../route.ts` и модуль в `src/lib/db/`              |
| `Error: Text content does not match server-rendered HTML`        | Консоль                    | Отсутствует i18n ключ, или строка отличается между SSR/CSR                     | `npm run i18n:run -- --files=<arquivo>` или добавить ключ                         |
| Бесконечный скелетон                                                | Экран                       | `useEffect` запрашивает данные из API, который возвращает 401/500                   | Проверить auth/proxy/middleware; протестировать роут с `curl -H "cookie:..."`             |
| Sidebar/layout не рендерится                                     | Экран                       | `(dashboard)/layout.tsx` падает                                        | Посмотреть `DashboardLayout` в `src/shared/components/`                                |
| Кнопка/таб вызывает ошибку при клике                                 | Консоль                    | Отсутствует provider/context, удален мок                                  | Проверить providers в `(dashboard)/layout.tsx`                                      |

**Золотое правило:** если исправление требует более ~20 строк или пересекает модули `open-sse/`, отметить как `блокировщик` и перейти к следующей странице — не задерживать релиз из-за рефакторинга.

---

## 3. Чек-лист страниц (предлагаемый порядок)

Отмечайте по мере продвижения. Порядок следует сайдбару (сверху вниз) с оторванными страницами в конце. URL предполагают `http://localhost:20128`.

### 3.1 Auth & публичные страницы (сначала запустить **разлогиненным**, затем залогиниться)

| Статус | URL                                                                          | Что проверить                                        | Ошибки |
| ------ | ---------------------------------------------------------------------------- | ---------------------------------------------------- | ----- |
| ☐      | `/`                                                                          | Редирект на `/login` или `/home` в зависимости от сессии |       |
| ☐      | `/login`                                                                     | Форма появляется, валидация пустого поля работает      |       |
| ☐      | `/forgot-password`                                                           | Форма появляется                                         |       |
| ☐      | `/landing`                                                                   | Рендерится без сломанного CSS                           |       |
| ☐      | `/docs`                                                                      | Индекс документов загружается                               |       |
| ☐      | `/docs/api-explorer`                                                         | OpenAPI explorer загружается                             |       |
| ☐      | `/docs/quickstart` (например, slug)                                                | Markdown рендерится                                   |       |
| ☐      | `/status`                                                                    | Status page рендерится                                |       |
| ☐      | `/terms`                                                                     | Текст загружается                                        |       |
| ☐      | `/privacy`                                                                   | Текст загружается                                        |       |
| ☐      | `/maintenance`                                                               | Статическая страница                                      |       |
| ☐      | `/offline`                                                                   | Статическая страница                                      |       |
| ☐      | `/forbidden`, `/400`, `/401`, `/403`, `/408`, `/429`, `/500`, `/502`, `/503` | Каждая рендерится без рекурсивной ошибки                |       |

> После подтверждения `/login`, авторизуйтесь и продолжайте.

### 3.2 Sidebar — Home

| Статус | URL          | Проверка                                           | Ошибки |
| ------ | ------------ | --------------------------------------------------- | ----- |
| ☐      | `/dashboard` | Редирект на `/home` (HTTP 307)                 |       |
| ☐      | `/home`      | Карточки обзора рендерятся, без бесконечного скелетона |       |

### 3.3 Sidebar — OmniProxy

| Статус | URL                                                       | Проверка                                                     | Ошибки |
| ------ | --------------------------------------------------------- | ------------------------------------------------------------- | ----- |
| ☐      | `/dashboard/endpoint`                                     | Список эндпоинтов + вкладки                                     |       |
| ☐      | `/dashboard/api-manager`                                  | Список API ключей, кнопка "Create" открывает модалку                  |       |
| ☐      | `/dashboard/providers`                                    | Таблица провайдеров загружается; фильтр статуса работает        |       |
| ☐      | `/dashboard/providers/new`                                | Форма нового провайдера; условные поля реагируют          |       |
| ☐      | `/dashboard/providers/anthropic` (любой `[id]` валидный) | Детали провайдера; вкладки "Connections", "Models", "Validate" |       |
| ☐      | `/dashboard/combos`                                       | Список комбо, drag/drop, режим cost-optimized               |       |
| ☐      | `/dashboard/quota`                                        | Глобальные квоты по провайдерам/моделям                            |       |

#### 3.3.1 Сжатие и Контекст

| Статус | URL                          | Проверка                                                                                                                  | Ошибки |
| ------ | ---------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ----- |
| ☐      | `/dashboard/context/caveman` | Правила Caveman + живой превью                                                                                           |       |
| ☐      | `/dashboard/context/rtk`     | DSL редактор (Monaco) — **внимание:** если Monaco падает с `vs/nls.messages-loader`, это регрессия фикса `MonacoEditor.tsx` |       |
| ☐      | `/dashboard/context/combos`  | Pipeline RTK→Caveman                                                                                                       |       |

#### 3.3.2 Инструменты

| Статус | URL                       | Проверка                                                | Ошибки |
| ------ | ------------------------- | -------------------------------------------------------- | ----- |
| ☐      | `/dashboard/cli-tools`    | Список инструментов, кнопка "Generate config" отвечает без 500 |       |
| ☐      | `/dashboard/agents`       | Список агентов                                          |       |
| ☐      | `/dashboard/cloud-agents` | 3 облачных агента (codex-cloud, devin, jules)      |       |

#### 3.3.3 Интеграции

| Статус | URL                        | Проверка                         | Ошибки |
| ------ | -------------------------- | --------------------------------- | ----- |
| ☐      | `/dashboard/api-endpoints` | OpenAPI auto-doc рендерится        |       |
| ☐      | `/dashboard/webhooks`      | Форма вебхука + список событий |       |

#### 3.3.4 Прокси

| Статус | URL                            | Проверка                           | Ошибки |
| ------ | ------------------------------ | ----------------------------------- | ----- |
| ☐      | `/dashboard/system/proxy`      | Конфиг прокси глобальный/по-провайдеру |       |
| ☐      | `/dashboard/system/mitm-proxy` | Кнопка установки серта, статус         |       |
| ☐      | `/dashboard/system/1proxy`     | UI фичи 1proxy                |       |

### 3.4 Sidebar — Analytics

| Статус | URL                                 | Проверка                                 | Ошибки |
| ------ | ----------------------------------- | ----------------------------------------- | ----- |
| ☐      | `/dashboard/analytics`              | Дашборд общего использования, графики загружаются |       |
| ☐      | `/dashboard/analytics/combo-health` | Таблица + sparklines по комбо             |       |
| ☐      | `/dashboard/analytics/utilization`  | Heatmap                                   |       |
| ☐      | `/dashboard/costs`                  | Общая стоимость + детализация                   |       |
| ☐      | `/dashboard/cache`                  | Метрики кэша, hit-rate               |       |
| ☐      | `/dashboard/analytics/compression`  | Метрики RTK/Caveman                   |       |
| ☐      | `/dashboard/analytics/search`       | Метрики поисковых провайдеров              |       |
| ☐      | `/dashboard/analytics/evals`        | Наборы оценок + история запусков              |       |

### 3.5 Sidebar — Monitoring

| Статус | URL                        | Проверка                                                  | Ошибки |
| ------ | -------------------------- | ---------------------------------------------------------- | ----- |
| ☐      | `/dashboard/logs`          | Хаб логов                                                |       |
| ☐      | `/dashboard/logs/proxy`    | Хвост запросов (живой) — подтвердить переподключение, если есть |       |
| ☐      | `/dashboard/logs/console`  | Захваченная консоль                                          |       |
| ☐      | `/dashboard/logs/activity` | Активность пользователя                                       |       |
| ☐      | `/dashboard/health`        | Статус провайдеров (circuit breakers, cooldowns)         |       |
| ☐      | `/dashboard/runtime`       | Runtime метрики + память/CPU                             |       |

#### 3.5.1 Costs / Parameters

| Статус | URL                            | Проверка                                | Ошибки |
| ------ | ------------------------------ | ---------------------------------------- | ----- |
| ☐      | `/dashboard/costs/pricing`     | Таблица цен по моделям, редактирование inline |       |
| ☐      | `/dashboard/costs/budget`      | Месячные лимиты + алерты                |       |
| ☐      | `/dashboard/costs/quota-share` | Превью распределения квоты                 |       |

#### 3.5.2 Audit

| Статус | URL                    | Проверка                       | Ошибки |
| ------ | ---------------------- | ------------------------------- | ----- |
| ☐      | `/dashboard/audit`     | Список аудит событий, фильтры |       |
| ☐      | `/dashboard/audit/mcp` | Audit MCP сервера             |       |
| ☐      | `/dashboard/audit/a2a` | Audit A2A                    |       |

### 3.6 Sidebar — DevTools

| Статус | URL                       | Проверка                             | Ошибки |
| ------ | ------------------------- | ------------------------------------- | ----- |
| ☐      | `/dashboard/translator`   | OpenAI ↔ Claude ↔ Gemini side-by-side |       |
| ☐      | `/dashboard/playground`   | Чат плейграунд, стриминг работает   |       |
| ☐      | `/dashboard/search-tools` | Список поисковых провайдеров             |       |

### 3.7 Sidebar — Agentic Features

| Статус | URL                       | Проверка                            | Ошибки |
| ------ | ------------------------- | ------------------------------------ | ----- |
| ☐      | `/dashboard/mcp`          | Конфиг MCP сервера, 37 инструментов |       |
| ☐      | `/dashboard/memory`       | Хранилище памяти, FTS5 поиск            |       |
| ☐      | `/dashboard/skills`       | 10 опубликованных навыков                 |       |
| ☐      | `/dashboard/agent-skills` | Назначение навыков по агенту           |       |
| ☐      | `/dashboard/a2a`          | Реестр A2A + 5 навыков              |       |

### 3.8 Sidebar — Other Features

| Статус | URL                             | Проверка                         | Ошибки |
| ------ | ------------------------------- | --------------------------------- | ----- |
| ☐      | `/dashboard/leaderboard`        | Рейтинг + фильтры                 |       |
| ☐      | `/dashboard/profile`            | Профиль пользователя, базовое редактирование     |       |
| ☐      | `/dashboard/tokens`             | Токены & API ключи пользователя         |       |
| ☐      | `/dashboard/gamification/admin` | Только для админа — только залогинен как админ |       |
| ☐      | `/dashboard/cache/media`        | Кэш медиа (изображения/аудио)    |       |
| ☐      | `/dashboard/batch`              | Batch jobs                        |       |
| ☐      | `/dashboard/batch/files`        | Files API                         |       |

### 3.9 Sidebar — Configuration

| Статус | URL                              | Проверка                      | Ошибки |
| ------ | -------------------------------- | ------------------------------ | ----- |
| ☐      | `/dashboard/settings`            | Хаб редиректит/показывает суб-табы |       |
| ☐      | `/dashboard/settings/general`    | Форма сохраняется без 500             |       |
| ☐      | `/dashboard/settings/appearance` | Смена темы применяется             |       |
| ☐      | `/dashboard/settings/ai`         | Конфиг AI моделей            |       |
| ☐      | `/dashboard/settings/routing`    | Стратегии комбо           |       |
| ☐      | `/dashboard/settings/resilience`    | Circuit breaker / cooldown     |       |
| ☐      | `/dashboard/settings/advanced`   | Расширенные переключатели              |       |
| ☐      | `/dashboard/settings/security`   | Auth, сессии, 2FA             |       |
| ☐      | `/dashboard/settings/pricing`    | Настройки ценообразования (устаревшие)   |       |

### 3.10 Sidebar — Help

| Статус | URL                         | Проверка                          | Ошибки |
| ------ | --------------------------- | ---------------------------------- | ----- |
| ☐      | `/docs` (уже проверено в 3.1) | —                                  |       |
| ☐      | `/dashboard/changelog`      | Рендерится markdown из CHANGELOG.md |       |

### 3.11 Оторванные страницы (существуют как роут, но не в сайдбаре)

Проверить, чтобы не были сломаны (кто-то мог забукмаркать старую ссылку).

| Статус | URL                      | Проверка                                                      | Ошибки                    |
| ------ | ------------------------ | -------------------------------------------------------------- | ------------------------ |
| ☐      | `/dashboard/auto-combo`  | Страница Auto-Combo (9-факторный скорринг)                        |                          |
| ☐      | `/dashboard/compression` | (устарело — возможно, поглощено `analytics/compression`) |                          |
| ☐      | `/dashboard/limits`      | Rate limits                                                    |                          |
| ☐      | `/dashboard/onboarding`  | Мастер первого запуска                                       |                          |
| ☐      | `/dashboard/usage`       | Статистика использования (устарело)                                          |                          |
| ☐      | `/auth/callback`         | OAuth callback — работает только через реальный flow                     | (не тестировать вручную) |
| ☐      | `/callback`              | То же, что и выше                                              | (не тестировать вручную) |

---

## 4. Процедура по странице

Для каждой строки чек-листа:

1. **Очистить консоль DevTools** (`Ctrl+L`).
2. **Перейти** кликнув в сайдбаре (предпочтительнее, чем ввод URL — также проверяйте навигацию).
3. **Дождаться загрузки** (до исчезновения спиннера и появления основного контента; субъективный таймаут: 10с).
4. **Посмотреть консоль DevTools**: любая красная ошибка `error` — это провал.
5. **Посмотреть терминал `tail -F /tmp/omniroute-dev.log`**: новая stack trace = провал.
6. **Взаимодействовать** с очевидным элементом страницы (1 клик на фильтр/вкладку/CTA). Если клик вызывает ошибку, это провал.
7. **Отметить `✅`**, если всё ок, **`❌` + заметка**, если провал.
8. **Если провал**:
   a. Категоризировать по таблице §2.
   b. Исправить.
   c. Сохранить; дождаться перекомпиляции Turbopack (~2-5с; посмотреть терминал dev server).
   d. Перезагрузить страницу; повторить §1–6.
   e. Когда пройдёт, обновить колонку **Ошибки** этой строки с "Fix: <краткое описание изменений>" и отметить `✅`.
9. **Следующая строка.**

---

## 5. Коммиты во время сессии

Не накапливайте огромные коммиты. **Один фикс на страницу**, с чётким охватом:

```bash
# пример
git add src/app/\(dashboard\)/dashboard/<страница>/page.tsx
git commit -m "fix(<область>): <краткое описание>

E2E shakedown v3.8.0: <страница> ломалась с <симптомом>.
<что изменилось и почему>"
```

Не использовать `Co-Authored-By` (жесткое правило #16). Не запускать `--no-verify`.

В конце сессии, **один push** со всеми фиксами:

```bash
git push origin release/v3.8.0
```

---

## 6. Завершение сессии

Когда все строки отмечены `✅`:

1. Запустить быструю санитарную проверку:
   ```bash
   npm run lint
   npm run typecheck:core
   npm run test:unit
   ```
2. Приложить этот файл (заполненный) к PR релиза или к тегу `v3.8.0` в качестве доказательства.
3. Обновить `CHANGELOG.md` строкой:
   > E2E dashboard shakedown completed — see `docs/ops/E2E_DASHBOARD_SHAKEDOWN_v3.8.0.md`.
4. Залить в `main` и запустить релиз.

---

## 7. Таблица "страница → применённое исправление" (заполнять во время сессии)

| Страница                          | Симптом                             | Причина            | Исправление                    | Коммит   |
| ------------------------------- | ----------------------------------- | --------------------- | --------------------------- | -------- |
| _пример: /dashboard/cli-tools_ | _500 на POST /api/cli-tools/config_ | _Отсутствует Zod schema_ | _Добавлен `.safeParse()`_ | _abc123_ |
|                                 |                                     |                       |                             |          |
|                                 |                                     |                       |                             |          |

Держите таблицу растущей по мере исправлений. Это аудитный след shakedown.
