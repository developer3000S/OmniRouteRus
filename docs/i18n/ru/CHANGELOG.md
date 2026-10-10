# Changelog (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../CHANGELOG.md) · 🇸🇦 [ar](../ar/CHANGELOG.md) · 🇦🇿 [az](../az/CHANGELOG.md) · 🇧🇬 [bg](../bg/CHANGELOG.md) · 🇧🇩 [bn](../bn/CHANGELOG.md) · 🇨🇿 [cs](../cs/CHANGELOG.md) · 🇩🇰 [da](../da/CHANGELOG.md) · 🇩🇪 [de](../de/CHANGELOG.md) · 🇪🇸 [es](../es/CHANGELOG.md) · 🇮🇷 [fa](../fa/CHANGELOG.md) · 🇫🇮 [fi](../fi/CHANGELOG.md) · 🇫🇷 [fr](../fr/CHANGELOG.md) · 🇮🇳 [gu](../gu/CHANGELOG.md) · 🇮🇱 [he](../he/CHANGELOG.md) · 🇮🇳 [hi](../hi/CHANGELOG.md) · 🇭🇺 [hu](../hu/CHANGELOG.md) · 🇮🇩 [id](../id/CHANGELOG.md) · 🇮🇩 [in](../in/CHANGELOG.md) · 🇮🇹 [it](../it/CHANGELOG.md) · 🇯🇵 [ja](../ja/CHANGELOG.md) · 🇰🇷 [ko](../ko/CHANGELOG.md) · 🇮🇳 [mr](../mr/CHANGELOG.md) · 🇲🇾 [ms](../ms/CHANGELOG.md) · 🇳🇱 [nl](../nl/CHANGELOG.md) · 🇳🇴 [no](../no/CHANGELOG.md) · 🇵🇭 [phi](../phi/CHANGELOG.md) · 🇵🇱 [pl](../pl/CHANGELOG.md) · 🇵🇹 [pt](../pt/CHANGELOG.md) · 🇧🇷 [pt-BR](../pt-BR/CHANGELOG.md) · 🇷🇴 [ro](../ro/CHANGELOG.md) · 🇸🇰 [sk](../sk/CHANGELOG.md) · 🇸🇪 [sv](../sv/CHANGELOG.md) · 🇰🇪 [sw](../sw/CHANGELOG.md) · 🇮🇳 [ta](../ta/CHANGELOG.md) · 🇮🇳 [te](../te/CHANGELOG.md) · 🇹🇭 [th](../th/CHANGELOG.md) · 🇹🇷 [tr](../tr/CHANGELOG.md) · 🇺🇦 [uk-UA](../uk-UA/CHANGELOG.md) · 🇵🇰 [ur](../ur/CHANGELOG.md) · 🇻🇳 [vi](../vi/CHANGELOG.md) · 🇨🇳 [zh-CN](../zh-CN/CHANGELOG.md)

---

## [Unreleased]

### ✨ New Features

### 🔧 Bug Fixes

---

---

---

## [3.8.3] — 2026-05-24

### ✨ New Features

- **feat(combos):** универсальная передача контекста для обеспечения непрерывности разговора между моделями — структурированная система XML-суммаризации (`<context_handoff>`), которая сохраняет непрерывность разговора и обрабатывает передачу состояния при переключении моделей в комбо-маршрутизации. ([#2653](https://github.com/diegosouzapw/OmniRoute/pull/2653) — спасибо @herjarsa)
- **feat(docs):** миграция `/docs` в Fumadocs MDX с вложенными маршрутами — заменяет пользовательский движок документации на Fumadocs, добавляя маршрутизацию `[...slug]`, API поиска по `/docs/api/search`, конфигурацию содержимого через `source.config.ts` и файлы навигации `meta.json` в 8 разделах документации (`architecture/`, `compression/`, `frameworks/`, `guides/`, `ops/`, `reference/`, `routing/`, `security/`). Включает 50+ URL-перенаправлений для обратной совместимости через `next.config.mjs`. ([#2614](https://github.com/diegosouzapw/OmniRoute/pull/2614) — спасибо @ovehbe)
- **feat(dashboard):** добавление поиска и фильтров в `/dashboard/api-manager` — панель фильтров с поиском по имени/ключу, переключателем активных (сохраняется в localStorage), фильтром статуса (активен/отключен/забанен/истёк), фильтром типа (стандартный/управляемый/ограниченный), значками количества фильтров и состоянием пустого результата с кнопкой "Очистить фильтры". ([#2628](https://github.com/diegosouzapw/OmniRoute/pull/2628) / [#2641](https://github.com/diegosouzapw/OmniRoute/pull/2641) — спасибо @diegosouzapw)
- **feat(dashboard):** группировка бесплатных провайдеров с символической ссылкой в `/dashboard/providers` — динамически группирует и отображает все бесплатные провайдеры из всех категорий, используя свойства `hasFree: true`, без удаления их из родных списков. Отображает точку категории и оранжевую точку с локализуемыми подсказками, удаляет дубликаты в результатах поиска по ID провайдера и исправляет статистику бесплатных тарифов. ([#2632](https://github.com/diegosouzapw/OmniRoute/pull/2632) — спасибо @diegosouzapw)
- **feat(dashboard):** модальное окно с предупреждением о рисках для чувствительных провайдеров — отображает мягкое, информативное предупреждение при подключении к сессионным или OAuth-провайдерам (например, Claude, Cursor, Copilot) в первый раз. Добавляет свойства `subscriptionRisk` для 20 провайдеров, локализуемые шаблоны и сохраняет подтверждение в localStorage. ([#2633](https://github.com/diegosouzapw/OmniRoute/pull/2633) / [#2638](https://github.com/diegosouzapw/OmniRoute/pull/2638) — спасибо @diegosouzapw)
- **feat(dashboard):** рефакторинг макета бесплатных провайдеров — очищает визуальный шум, перераспределяет категории, скрывает избыточные баннеры и интегрирует категории бесплатных провайдеров в основной интерфейс провайдеров. ([#2640](https://github.com/diegosouzapw/OmniRoute/pull/2640) — спасибо @diegosouzapw)
- **feat(dashboard):** мини-игровая площадка встроенная (Фаза 4) — интегрирует интерактивные возможности мини-игровой площадки на страницы деталей провайдеров, включая поддержку специализированных примеров карт (Embedding, Image, LLM Chat, Music, STT, TTS, Video, Web Fetch, Web Search), унифицированные хуки загрузки API-ключей, хуки списка моделей и конструктор команд curl. ([#2648](https://github.com/diegosouzapw/OmniRoute/pull/2648) — спасибо @diegosouzapw)
- **feat(webfetch):** поддержка категорий с выделенной страницей медиа-провайдеров и исполнителями для Firecrawl, Jina Reader и Tavily. ([#2645](https://github.com/diegosouzapw/OmniRoute/pull/2645) — спасибо @diegosouzapw)
- **feat(adapta):** интеграция провайдера Adapta Org (`adapta-web`) с автоматической аутентификацией через Clerk и пользовательским модальным окном обучения. ([#2643](https://github.com/diegosouzapw/OmniRoute/pull/2643) — спасибо @df4p)
- **feat(i18n):** завершение переводов для упрощенного китайского — переводит 1220 недостающих ключей, обеспечивая покрытие интерфейса на 98.8% с 0 заполнителями. ([#2655](https://github.com/diegosouzapw/OmniRoute/pull/2655) — спасибо @L-aros)
- **feat(dashboard):** добавление командной палитры Cmd+K / Ctrl+K для навигации по боковой панели и панельной страницы для тестирования провайдеров LLM. ([#2656](https://github.com/diegosouzapw/OmniRoute/pull/2656) — спасибо @mrmm)
- **feat(i18n):** завершение покрытия интерфейса для упрощенного китайского (zh-CN) с 377 переведенными записями. ([#2659](https://github.com/diegosouzapw/OmniRoute/pull/2659) — спасибо @L-aros)
- **feat(dashboard):** макет чата в первую очередь с тестовой страницей — объединяет элементы управления заголовком (выбор модели/ключа, кнопка очистки) в единую панель инструментов, максимизирует вертикальное пространство для разговора, интегрирует в реальном времени хвост провайдерских логов во вкладке Логи и блокирует фокус композитора для удобства работы с клавиатурой. ([#2660](https://github.com/diegosouzapw/OmniRoute/pull/2660) — спасибо @mrmm)
- **feat(cli):** обновления для рабочего стола, автозапуска и фонового режима CLI — интегрирует проверки автообновления, автозапуск при входе в систему (Linux .desktop, macOS/Windows login items) и фоновый серверный демон CLI в режиме (`--headless` или `OMNIROUTE_HEADLESS=true`) в оболочку Electron. ([#2662](https://github.com/diegosouzapw/OmniRoute/pull/2662) — спасибо @benzntech)
- **feat(quota):** сетка карточек и заголовки групп провайдеров в управлении квотами — заменяет монолитную таблицу на красивую сетку карточек 4 колонки в лимитах. ([#2667](https://github.com/diegosouzapw/OmniRoute/pull/2667) — спасибо @Gi99lin)
- **feat(dashboard):** демон реального времени для мониторинга WebSocket — запускает демон WebSocket на порту `20129` для передачи событий в реальном времени о запуске/завершении/ошибках запросов, попытках комбо и статусе учетных данных в журналах панели управления. ([#2668](https://github.com/diegosouzapw/OmniRoute/pull/2668) — спасибо @herjarsa)
- **feat(copilot):** AI-ассистент с CodeGraph + CLI + базой знаний — интегрирует ассистента панели управления с доступом к базе знаний CodeGraph и возможностями CLI для исследования приложения. ([#2669](https://github.com/diegosouzapw/OmniRoute/pull/2669) — спасибо @ovehbe / @herjarsa)
- **feat(pipeline):** предварительные хуки middleware для запросов — выполняет пользовательские JS-хуки перед маршрутизацией/комбо-логикой для изменения заголовков/тела или прерывания запросов. ([#2670](https://github.com/diegosouzapw/OmniRoute/pull/2670) — спасибо @herjarsa)
- **feat(resilience):** проверка здоровья учетных данных + адаптивный переключатель цепей v2 — планировщик фоновой проверки здоровья соединения с прогрессивным переключателем цепей, добавляющим состояние DEGRADED и HALF-OPEN для восстановления, чтобы избежать скачков задержки. ([#2671](https://github.com/diegosouzapw/OmniRoute/pull/2671) — спасибо @herjarsa)
- **feat(playground):** визуальный симулятор комбо-маршрутизации — интерактивная страница симуляции маршрутов на `/dashboard/combos/playground` для демонстрации каскадных переходов, задержек и оценок стоимости. ([#2672](https://github.com/diegosouzapw/OmniRoute/pull/2672) — спасибо @herjarsa)
- **feat(auth):** группы API-ключей с разрешениями на уровне моделей — определения групп с разрешениями на уровне моделей с подстановочными знаками/запретами, где API-ключи наследуют ограничения с областью действия группы. ([#2673](https://github.com/diegosouzapw/OmniRoute/pull/2673) — спасибо @herjarsa)
- **feat(pwa):** улучшенный манифест + поддержка push-уведомлений — улучшает офлайн ярлыки, скриншоты, метаданные отображения и сервисные рабочие для push-уведомлений. ([#2674](https://github.com/diegosouzapw/OmniRoute/pull/2674) — спасибо @herjarsa)
- **feat(proxy):** конечные точки серверного реле-прокси с ограничением скорости — публичные конечные точки реле-прокси с ограничениями по стоимости и скорости, API CRUD и отслеживание использования в панели управления. ([#2675](https://github.com/diegosouzapw/OmniRoute/pull/2675) — спасибо @herjarsa)

### 🔧 Bug Fixes

- **fix(settings):** Текст кнопки Отмена модального окна Require Login и его закрытие — модальное окно теперь отображает локализованную метку отмены через пространство имен `common` и закрывается правильно без изменения настроек при отмене. ([#2649](https://github.com/diegosouzapw/OmniRoute/pull/2649) — спасибо @Chewji9875)
- **fix(deepseek-web):** повторно применить парсер SSE, формат подсказки и обработку ошибок — обрабатывает все 3 формата потоков SSE DeepSeek (начальные фрагменты, операции APPEND, отдельные токены), использует нежадный регекс для удаления изображений в markdown, упрощает подсказку до одноходовой, проверяет `json.code` перед извлечением токенов и использует резервный `accessToken` для очистки кэша сеанса при ошибках аутентификации. ([#2616](https://github.com/diegosouzapw/OmniRoute/pull/2616) — спасибо @ovehbe)
- **fix(deepseek-web):** маршрутизация thinking/search в SSE и жизненный цикл сеанса — правильно маршрутизирует фрагменты thinking vs content на основе флага `thinking_enabled`, обрабатывает результаты поиска с индексами цитирования, добавляет сноски к результатам поиска, рефакторит `transformSSE()` и `collectSSEContent()` с общими помощниками. ([#2624](https://github.com/diegosouzapw/OmniRoute/pull/2624) — спасибо @ovehbe)
- **fix(codex):** использовать белый список для удаления неполей API Responses в непути passthrough — удаляет остаточные поля Chat Completions (`stream_options`, `service_tier`, `store`, `metadata`) из тела запроса при маршрутизации через непуть passthrough (перевода), предотвращая получение GPT-5.5 недопустимых параметров. ([#2615](https://github.com/diegosouzapw/OmniRoute/pull/2615) — спасибо @diegosouzapw)
- **fix(catalog):** пропускать статические PROVIDER_MODELS при наличии синхронизированных моделей — предотвращает устаревшие/дублированные записи моделей в `/v1/models` для автосинхронизированных провайдеров. ([#2625](https://github.com/diegosouzapw/OmniRoute/pull/2625) — спасибо @herjarsa)
- **fix(qoder):** резервная аутентификация Cosy для PAT-токенов + поддержка зрения для qwen3-vl-plus — при получении 401 PAT-токеном переключается на аутентификацию Cosy против `api1.qoder.sh`; добавляет `supportsVision: true` для qwen3-vl-plus. ([#2629](https://github.com/diegosouzapw/OmniRoute/pull/2629) — спасибо @herjarsa)
- **fix(cli):** регистрация загрузчика tsx и добавление подкоманды конфигурации opencode — регистрирует `tsx/esm` при запуске CLI, чтобы динамические импорты `.ts` разрешались; добавляет удобный псевдоним `omniroute config opencode`. ([#2631](https://github.com/diegosouzapw/OmniRoute/pull/2631) — спасибо @amogus22877769)
- **fix(claude):** улучшить совместимость с Pi и OpenCode — добавляет якоря Pi Coding Agent в удаление системного преобразования, хранит `_toolNameMap` как неперечисляемое, удаляет `context_management` при отключении thinking. ([#2621](https://github.com/diegosouzapw/OmniRoute/pull/2621) — спасибо @unitythemaker)
- **fix(passthrough):** восстановить семантическую передачу passthrough только с ролью system — откатывает полный `normalizeClaudeUpstreamMessages()` к более легкому `extractSystemRoleMessages()` в семантических путях passthrough CC, предотвращая повреждение цепочек документов/инструментов. ([#2620](https://github.com/diegosouzapw/OmniRoute/pull/2620) — спасибо @Tentoxa)
- **fix(kiro):** стабилизировать conversationId при сжатии подсказки — захватывает тело до сжатия и использует оригинальное первое пользовательское сообщение в качестве семени для UUID v5, сохраняя контекст разговора Kiro в AWS стабильным. ([#2630](https://github.com/diegosouzapw/OmniRoute/pull/2630) — спасибо @HALDRO)
- **fix(t3-chat-web):** закрыть пробелы в реализации t3.chat TanStack Start, отслеживания stream_options и конфигураций повторов — парсит TSS Turbo Stream Serialization из `_serverFn/*`, отслеживает `combo_strategy` запроса через миграцию базы данных `062_usage_history_combo_strategy.sql` и делает пакетные повторные задержки настраиваемыми через переменные среды. ([#2634](https://github.com/diegosouzapw/OmniRoute/pull/2634) — спасибо @oyi77)
- **fix(reasoning):** расширить инъекцию пустого `reasoning_content` для предотвращения циклов вызовов инструментов в Kimi K2 и моделях воспроизведения — инъектирует пустое поле `reasoning_content` в модели Kimi во время последовательностей вызовов инструментов для обхода проблем с циклами. ([#2639](https://github.com/diegosouzapw/OmniRoute/pull/2639) — спасибо @herjarsa)
- **fix(cli):** автозапуск Linux через systemd user service в фоновом режиме VPS — добавляет автогенерируемый юнит systemd user service для фоновых установок на Linux, обновляя конфигурации трея и белый список системных переменных (`LOGNAME` и `XDG_CURRENT_DESKTOP`). ([#2635](https://github.com/diegosouzapw/OmniRoute/pull/2635) — спасибо @janeza2)
- **fix(combo):** сохранить тег `<omniModel>` в выходном потоке SSE для комбо при использовании `context_cache_protection` для обеспечения правильной фиксации контекста. ([#2646](https://github.com/diegosouzapw/OmniRoute/pull/2646) — спасибо @herjarsa)
- **fix(rtk):** предотвратить ложные срабатывания в RTK сжатии, пропуская сопоставление фильтра на основе содержимого для неинструментальных результатов (например, read_file, grep_search). ([#2642](https://github.com/diegosouzapw/OmniRoute/pull/2642) — спасибо @HALDRO)
- **fix(translator):** включить расширенное thinking для Claude в запросах Copilot Responses-API — обрабатывает бюджет рассуждений и переводы для Copilot. ([#2647](https://github.com/diegosouzapw/OmniRoute/pull/2647) — спасибо @ivan-mezentsev)
- **fix(tests):** удалить дублирующее утверждение в схеме приведения и fix(cli): игнорировать системные переменные в проверке env. (спасибо @diegosouzapw)
- **fix(combo):** разрешить утечки ожидающих запросов на неотзывчивые цели комбо — реализует тайм-аут по умолчанию в 60 секунд для каждой цели во время циклов маршрутизации комбо для прерывания висящих запросов и освобождения лимитов емкости. ([#2663](https://github.com/diegosouzapw/OmniRoute/pull/2663) — спасибо @Chewji9875)
- **fix(proxy):** сохранять пользовательские прокси панели управления непосредственно в реестре SQLite — записывает новые провайдер/учетная запись/глобальные/комбо-прокси непосредственно в современный `proxy_registry` базу данных и назначает их через `proxy_assignments` вместо создания дублирующих конфигураций. ([#2661](https://github.com/diegosouzapw/OmniRoute/pull/2661) — спасибо @terence71-glitch)
- **fix(settings):** расширить перечисление effortLevel для поддержки xhigh и max уровней рассуждений — добавляет уровни `xhigh` и `max` в updateThinkingBudgetSchema для разрешения ошибок проверки, которые молча отбрасывали полезные нагрузки с максимальным уровнем усилий. ([#2666](https://github.com/diegosouzapw/OmniRoute/pull/2666) — спасибо @mrmm)
- **fix(codex):** устранить состояние гонки повторного использования токена обновления OAuth в Codex при параллельных запросах. ([#2667](https://github.com/diegosouzapw/OmniRoute/pull/2667) — спасибо @diegosouzapw)

### 📝 Maintenance

- **chore(config):** игнорировать дополнительные файлы команд агентов рабочего процесса (`.agents/commands/`). (спасибо @diegosouzapw)
- **chore(config):** игнорировать правила `memory-bank` и Cursor агентов из отслеживания. (спасибо @ovehbe)
- **chore(ci):** опубликовать @omniroute/opencode-plugin в npm — добавляет параллельную задачу сборки, тестирования и публикации в рабочий процесс npm release для автоматического развертывания пакета. ([#2666](https://github.com/diegosouzapw/OmniRoute/pull/2666) — спасибо @mrmm)

---

---

---

## [3.8.2] — 2026-05-22

### ✨ New Features

- **feat(@omniroute/opencode-plugin):** суффикс upstream-provider в отображаемом имени модели — добавляет метку провайдера к обогащенным именам (например, `Claude Opus 4.7 · Claude` vs `Claude Opus 4.7 · Kiro`), чтобы TUI-выборщик моделей OC мог различать модели с одинаковыми идентификаторами, маршрутизируемые через разные подключения к upstream. По умолчанию включено, можно отключить через `features.providerTag: false`. ([#2602](https://github.com/diegosouzapw/OmniRoute/pull/2602) — thanks @mrmm)
- **feat(@omniroute/opencode-plugin):** provider-tag становится префиксом + сжатием эмодзи — метка провайдера теперь добавляется в начало (`Claude - Claude Opus 4.7`) для лучшей группировки в TUI, с умным сокращением для длинных меток (`GitHub Models` → `GHM`). Конвейеры сжатия отображают интенсивность как эмодзи (🟢🟡🟠🔴). ([#2604](https://github.com/diegosouzapw/OmniRoute/pull/2604) — thanks @mrmm)
- **feat(providers):** добавлено 7 провайдеров с бесплатным тарифом (Wave 1) — Arcee AI, InclusionAI, Krutrim, Liquid AI, MonsterAPI, Nomic и Poolside теперь доступны как новые API-key провайдеры с иконками провайдеров, спецификациями моделей и полной поддержкой маршрутизации. ([#2479](https://github.com/diegosouzapw/OmniRoute/pull/2479) — thanks @oyi77)
- **feat(providers):** добавлена поддержка провайдера Astraflow с глобальными и китайскими конечными точками — новый провайдер с двойными региональными базовыми URL-адресами для глобального и китайского доступа. ([#2486](https://github.com/diegosouzapw/OmniRoute/pull/2486) — thanks @ucloudnb666)
- **feat(providers):** добавлен провайдер `claude-web` — доступ к веб-чату Claude без OAuth через куки. ([#2476](https://github.com/diegosouzapw/OmniRoute/pull/2476) — thanks @oyi77)
- **feat(providers):** добавлено 14 провайдеров с бесплатным тарифом (Wave 1b) — 360AI, Baichuan, Baidu, ByteDance/Doubao, IDEO, Kuaishou/Kling, Kunlun/Skywork, SenseTime/SenseNova, Stepfun, Tencent HunYuan, Zhipu GLM, Replicate, RunPod и Modal с иконками провайдеров, спецификациями моделей и поддержкой маршрутизации. ([#2488](https://github.com/diegosouzapw/OmniRoute/pull/2488) — thanks @oyi77)
- **feat(hermes):** добавлена поддержка богатых многоролевых Hermes Agent CLI — 7 настраиваемых ролей (default, delegation, vision, compression, web_extract, skills_hub, approval), выбор модели для каждой роли с генерацией конфигурации YAML, карточка дашборда с предпросмотром и интеграция с виджетом домашней страницы. ([#2526](https://github.com/diegosouzapw/OmniRoute/pull/2526) — thanks @apoapostolov)
- **feat(cloud-agents):** переработан UX облачных агентов — вкладки (tasks/agents/settings), фильтры статуса, Material icons, форматирование продолжительности, API-эндпоинты облачных агентов и их состояния, эндпоинт статистики памяти. ([#2516](https://github.com/diegosouzapw/OmniRoute/pull/2516) — thanks @oyi77)
- **feat(authz):** API-ключи с областью `manage-scope` могут достигать `/api/mcp/*` из не-loopback — система Route Guard Tiers (LOCAL_ONLY / ALWAYS_PROTECTED / MANAGEMENT), сужение carve-out для удаленного доступа к MCP с областью `manage`; `/api/cli-tools/runtime/*` остается строго loopback. Включает раздел AuthzSection в дашборде, API инвентаризации и всеобъемлющую документацию. ([#2473](https://github.com/diegosouzapw/OmniRoute/pull/2473) — thanks @mrmm)
- **feat(home):** настройка домашней страницы для опытных пользователей — закрепить Provider Quota на главной, переключить видимость Quick Start и Provider Topology через настройки Appearance. ([#2531](https://github.com/diegosouzapw/OmniRoute/pull/2531) — thanks @apoapostolov)
- **feat(home):** автоматическое обновление Provider Quota — настраиваемый интервал (60с–600с) с переключателем в настройках Appearance; автоматически обновляет закрепленный quota на главной странице. ([#2532](https://github.com/diegosouzapw/OmniRoute/pull/2532) — thanks @apoapostolov)
- **feat(@omniroute/opencode-plugin):** плагин OmniRoute OpenCode — живые модели, полученные из OmniRoute API, комбо-осведомленное перечисление моделей, санитизация запросов Gemini, поддержка нескольких экземпляров, интеграция потока аутентификации и 10 тестовых файлов. ([#2529](https://github.com/diegosouzapw/OmniRoute/pull/2529) — thanks @mrmm)
- **feat(executors):** перенаправление заголовков клиента OpenCode в upstream-провайдеров — OpenCode-специфические заголовки теперь перенаправляются через конвейер исполнителя для улучшенной совместимости. ([#2538](https://github.com/diegosouzapw/OmniRoute/pull/2538) — thanks @kang-heewon)
- **feat(fireworks):** добавлены новые модели с поддержкой `modelIdPrefix` — общее поле реестра, которое хранит короткие идентификаторы моделей и добавляет полный путь префикса перед вызовами upstream API. Добавляет 6 новых моделей Fireworks, `modelsUrl` для динамической синхронизации и reranker Qwen3. ([#2560](https://github.com/diegosouzapw/OmniRoute/pull/2560) — thanks @HALDRO)
- **feat(@omniroute/opencode-plugin):** читаемый, фильтруемый и оффлайн-устойчивый выбор модели — фильтр `usableOnly` (показывать только провайдеров с рабочими подключениями), `diskCache` для оффлайн-гидратации, метка `Combo:` и теги метаданных сжатия в отображаемых именах комбо. ([#2572](https://github.com/diegosouzapw/OmniRoute/pull/2572) — thanks @mrmm)
- **feat(smart-pipeline):** многоступенчатый конвейер для автоматической маршрутизации комбо — правило-классификатор-домен-специфические этапы с настраиваемым маршрутизатором конвейера, бенчмарками точности и всеобъемлющими тестами. ([#2551](https://github.com/diegosouzapw/OmniRoute/pull/2551) — thanks @oyi77)
- **feat(ops):** пропустить проверку состояния БД при запуске через `OMNIROUTE_SKIP_DB_HEALTHCHECK=1` — заменяет медленную `integrity_check` (7+ мин на больших WAL) на `quick_check`, и добавляет переменную окружения для полного пропуска. ([#2554](https://github.com/diegosouzapw/OmniRoute/pull/2554) — thanks @soyelmismo)
- **refactor(dashboard):** сгруппированный макет Provider Quota с вертикальной панелью — переструктурирует страницу в 2-колоночный макет по провайдерам (левая панель с иконкой/названием/статусом, правая часть с динамическими колонками по провайдерам), новые компоненты `providerColumns.ts` / `ProviderGroup.tsx` / `AccountRow.tsx`, строка фильтра env chip, массовое обновление по группам и встроенные расширенные панели. ([#2528](https://github.com/diegosouzapw/OmniRoute/pull/2528) — thanks @Gi99lin)
- **feat(providers):** добавлено 26 бесплатных провайдеров, отсутствующих в реестре — Novita, Avian, Chutes, Kluster, Targon, Nineteen, Celery, Ditto, Atoma и другие. ([#2590](https://github.com/diegosouzapw/OmniRoute/pull/2590) — thanks @oyi77)
- **feat(providers):** добавлен бесплатный провайдер api-airforce с 55 моделями. ([#2587](https://github.com/diegosouzapw/OmniRoute/pull/2587) — thanks @oyi77)
- **feat(dashboard):** настраиваемая боковая панель — пресеты, перетаскивание для упорядочивания, умная группировка и новая страница Settings → Sidebar. ([#2581](https://github.com/diegosouzapw/OmniRoute/pull/2581) — thanks @Gi99lin)

### 🔧 Bug Fixes

- **fix(validation):** прекратить добавление второго `/models` в конце URL-адреса Gemini, если он уже заканчивается на `/models` — подключения к Google AI Studio с использованием URL-адреса по умолчанию проверялись на `.../v1beta/models/models` и возвращали `404` для каждого подключения. ([#2545](https://github.com/diegosouzapw/OmniRoute/issues/2545))
- **fix(cloudflare-ai):** уплощение массивов частей содержимого OpenAI для исполнителя Workers AI (`cf/`) — Workers AI's `/ai/v1/chat/completions` отклоняет `content: [{type:"text",...}]` с HTTP 400, поэтому запросы с массивом содержимого теперь имеют их текстовые части объединены в строку. ([#2539](https://github.com/diegosouzapw/OmniRoute/issues/2539))
- **fix(i18n):** замена оставшихся португальских строк на английский в английских источниках на дашбордах Quota — уведомление о бета-версии quota-share (`betaConfigSaved*`) и резервные значения `Edit cutoffs` / `Refresh now` строки Provider Quota отображались на португальском. ([#2540](https://github.com/diegosouzapw/OmniRoute/issues/2540))

- **fix(proxy):** соблюдение старого конфигурации прокси на уровне провайдера/глобального в `resolveProxyForProvider` — обмен токенами OAuth Claude и обновление токенов только консультировали новый реестр прокси, поэтому прокси, настроенный старым способом (`/api/settings/proxy?level=provider`), игнорировался, и обмен шел напрямую с хоста, что вызывало `rate_limit_error` IP-адресов Anthropic на VPS-развертываниях. Теперь он возвращается к старому конфигу, отражая `resolveProxyForConnection`. ([#2456](https://github.com/diegosouzapw/OmniRoute/issues/2456))
- **fix(antigravity):** автоматическое обнаружение отсутствующего `projectId` Cloud Code через `loadCodeAssist` перед сбоем — вновь добавленный аккаунт Antigravity, у которого хранимый `projectId` был пустым (обнаружение во время OAuth вернуло пустоту), теперь восстанавливает проект при первом запросе вместо возврата `422 Missing Google projectId`, отражая загрузку `gemini-cli`. ([#2334](https://github.com/diegosouzapw/OmniRoute/issues/2334), [#2541](https://github.com/diegosouzapw/OmniRoute/issues/2541))
- **fix(stream):** поддержание активного соединения `/v1/responses` SSE для строгих клиентов — генерация раннего keepalive во время производства первого токена upstream и снижение частоты heartbeat до 4s, чтобы клиент `reqwest` Codex CLI (≈5s таймаут на бездействие) больше не отбрасывал поток "до завершения" на медленных/модели рассуждений. `curl` был не затронут, так как у него нет таймаута на бездействие. ([#2544](https://github.com/diegosouzapw/OmniRoute/issues/2544))
- **fix(electron):** дольше ждать сервера при первом запуске и перезагрузить окно после ответа сервера — длительные миграции БД после обновления могли превысить 30-секундный проб сервера, оставляя настольное приложение застрявшим на экране "Запуск сервера", хотя бэкенд был здоров. Проб теперь направлен на конечную точку здоровья без защиты аутентификации с щедрым таймаутом и перезагружает окно после запуска сервера. ([#2460](https://github.com/diegosouzapw/OmniRoute/issues/2460))

- **fix(cli):** отметить `bin/omniroute.mjs` как исполняемый (режим 755), чтобы глобально установленный CLI запускался напрямую без ручного `chmod +x`. ([#2469](https://github.com/diegosouzapw/OmniRoute/issues/2469) — thanks @disonjer)
- **fix(settings):** восстановление Global System Prompt в оперативную память конфигурации при запуске сервера и после импорта JSON/SQLite — он загружался только через PUT-эндпоинт, поэтому переключатель/промпт молча возвращались к значениям по умолчанию после любого перезапуска или импорта. ([#2470](https://github.com/diegosouzapw/OmniRoute/issues/2470) — thanks @disonjer)
- **fix(settings):** добавление Global System Prompt **после** существующего системного содержимого вместо предварительного добавления, чтобы инструкции провайдера/агента (Kiro, OpenCode, Hermes, …) внедренные в системное сообщение, больше не переопределяли глобальный промпт пользователя через смещение по времени. ([#2468](https://github.com/diegosouzapw/OmniRoute/issues/2468) — thanks @disonjer)
- **fix(kiro):** обновление импортированных социальных токенов (`authMethod === "imported"`) через эндпоинт социальной аутентификации Kiro вместо AWS SSO OIDC — импортированные токены несут зарегистрированный `clientId`/`clientSecret`, но токен обновления, выданный социальными сетями, который клиент OIDC не может обновить, поэтому автообновление терпело неудачу с "провайдер не вернул новый токен". ([#2467](https://github.com/diegosouzapw/OmniRoute/issues/2467) — thanks @disonjer)
- **fix(antigravity):** разрешение `projectId` Cloud Code из `providerSpecificData` в качестве резервного варианта (и сохранение его при обновлении токена), чтобы путь `/v1beta` Gemini больше не возвращал ложное `422 Missing Google projectId` для подключений, которые хранят проект там. ([#2480](https://github.com/diegosouzapw/OmniRoute/issues/2480))
- **fix(api):** `GET /v1beta/models` теперь перечисляет только те модели, чей провайдер имеет активное/проверенное подключение, соответствующее поведению OpenAI-формата `/v1/models`, вместо возврата всего каталога. ([#2483](https://github.com/diegosouzapw/OmniRoute/issues/2483))

- **fix(cli):** сохранение `STORAGE_ENCRYPTION_KEY` в `DATA_DIR` (а не только в `~/.omniroute`) и отказ от автоматической генерации нового ключа, когда `storage.sqlite` уже существует — новый ключ не может расшифровать ранее зашифрованные учетные данные, поэтому молчая перегенерация ключа блокировала пользователей от их базы данных. CLI теперь отражает защиту `bootstrapEnv` сервера. (сообщено Daniel Nach; оригинальное сохранение ключа @Chewji9875 — продолжение [#1622](https://github.com/diegosouzapw/OmniRoute/issues/1622))
- **fix(gemini):** сохранение и повторное подключение `thoughtSignature` в инструментах модели мышления Gemini — поток подписи пространства имен через `FORMATS.GEMINI` и `FORMATS.GEMINI_CLI` переводчиков запросов, чтобы подпись (ключ по подключению + идентификатор вызова инструмента) была найдена на последующем повороте. Исправляет `[400]: Function call is missing a thought_signature in functionCall parts` на агентском использовании инструментов Gemini. ([#2504](https://github.com/diegosouzapw/OmniRoute/issues/2504))
- **fix(translator):** принятие PDF, отправленных в форме `input_file` API Responses, на пути Gemini, и форма `document` Gemini на пути Responses/Codex — части содержимого теперь нормализованы через `input_file` / `file` / `document`, чтобы PDF достигал модели независимо от того, какое имя поля использовал клиент. ([#2515](https://github.com/diegosouzapw/OmniRoute/issues/2515))
- **fix(stream):** подсчет массивов `thinking` и `reasoning_details` как полезного потокового вывода — ответ только с рассуждениями (например, Mistral/StepFun с низким `max_tokens`) был ошибочно классифицирован как "Поток завершился до производства полезного содержимого" и превращен в ложный 502; теперь он признается как допустимый вывод. ([#2520](https://github.com/diegosouzapw/OmniRoute/issues/2520))
- **fix(claude):** извлечение системных/разработчиков сообщений ролей в семантическом пути passthrough Claude Code — перемещает `role:"system"` / `role:"developer"` сообщения из массива `messages[]` в верхний уровень `system` параметра перед отправкой в Anthropic, который отклоняет их внутри сообщений. Исправляет контекст памяти, внедренный в контекст. ([#2497](https://github.com/diegosouzapw/OmniRoute/pull/2497) — thanks @unitythemaker)
- **fix(vision-bridge):** автоматическая маршрутизация моделей, не поддерживающих стандартный провайдер, через OmniRoute self-loop — vision-bridge теперь обнаруживает, когда модель не поддерживает зрение нативно, и автоматически перенаправляет изображение через собственный конечный пункт OmniRoute для форматирования. ([#2487](https://github.com/diegosouzapw/OmniRoute/pull/2487) — thanks @herjarsa)
- **fix(mitm):** добавление перенаправления DNS IPv6, модульного целевого антигравитации, улучшенное логирование — обработчик DNS MITM теперь правильно перенаправляет запросы IPv6 (AAAA) вместе с IPv4, добавляет отдельный модуль `antigravity.ts`, и улучшает логирование DNS/TLS для отладки. ([#2514](https://github.com/diegosouzapw/OmniRoute/pull/2514) — thanks @herjarsa)
- **fix(usage):** улучшение обнаружения меток плана Claude и MiniMax — лучшее разрешение имени уровня для использования OAuth Claude (поля tier/plan/subscription_type/org) и новое выведение метки плана MiniMax из квот. ([#2498](https://github.com/diegosouzapw/OmniRoute/pull/2498) — thanks @Gi99lin)
- **fix(codex):** параллельное распространение запросов изображения `n` — когда Codex запрашивает `n > 1` изображений, обработчик генерации изображений теперь отправляет их параллельно вместо последовательно, значительно сокращая общую задержку. ([#2499](https://github.com/diegosouzapw/OmniRoute/pull/2499) — thanks @nmime)
- **fix(embeddings):** удаление устаревших заголовков `Content-Encoding` из ответа upstream — предотвращает получение клиентами ответов с кодировкой gzip с объявленной кодировкой `identity`, что приводило к тихому повреждению данных. ([#2477](https://github.com/diegosouzapw/OmniRoute/pull/2477) — thanks @lordavadon2)
- **fix(model):** возврат четкой ошибки вместо молчаливого OpenAI по умолчанию для нераспознанных моделей — ранее, нераспознанная модель молча возвращалась к OpenAI; теперь возвращает 404 с описательным сообщением, перечисляющим известных провайдеров. ([#2492](https://github.com/diegosouzapw/OmniRoute/pull/2492) — thanks @herjarsa)
- **fix(dark-mode):** исправление токена фона на переопределении сжатия Compression — комбо переопределение сжатия `<select>` использовало жестко закодированный белый фон, который был невидим в темном режиме. ([#2513](https://github.com/diegosouzapw/OmniRoute/pull/2513) — thanks @apoapostolov)
- **fix(antigravity):** выравнивание обнаружения уровня подписки с Antigravity Manager — `extractCodeAssistSubscriptionTier` теперь разбирает правильное вложенное поле из ответа `loadCodeAssist`, и новый `extractCodeAssistOnboardTierId` резервный вариант обрабатывает процесс онбординга. Информация о подписке кэшируется по токену доступа с TTL 5 мин. ([#2496](https://github.com/diegosouzapw/OmniRoute/pull/2496) — thanks @Gi99lin)
- **fix(opencode-zen):** добавление псевдонима `opencode` и синхронизация списка моделей с живым API — `opencode-zen` и `opencode-go` теперь также доступны через более короткий псевдоним `opencode`, и список моделей по умолчанию синхронизируется с живым каталогом `/v1/models`. ([#2508](https://github.com/diegosouzapw/OmniRoute/pull/2508) — thanks @herjarsa)
- **fix(combo):** уточнение сообщения журнала, когда цель комбо пропускается из-за недоступных учетных данных — ранее сообщение журнала было ложным "провайдер не найден"; теперь говорит "пропущено: учетные данные недоступны". ([#2494](https://github.com/diegosouzapw/OmniRoute/pull/2494) — thanks @herjarsa)
- **fix(security):** замена `Math.random` на `crypto.randomUUID` в `generateTaskId`/`ActivityId` и исправление проверки имени хоста URL в тесте — устраняет использование слабого PRNG, отмеченного CodeQL. ([#2489](https://github.com/diegosouzapw/OmniRoute/pull/2489))
- **fix(electron):** откат к Electron 41.x для совместимости V8 с better-sqlite3 — Electron 42.x поставлялся с версией V8, которая нарушила нативные привязки `better-sqlite3` во время выполнения; фиксация на 41.x восстанавливает стабильность.
- **fix(@omniroute/opencode-provider):** включение `limit.context` в записи модели для обнаружения окна контекста OpenCode — OpenCode читает `limit.context` для определения подходящей длины контекста для компактификации и обнаружения переполнения.
- **fix(providers):** сделать запись модели `gitlawb/gitlawb-gmi` необязательной — предотвращает сбой инициализации провайдера, когда модель недоступна в каталоге. ([#2476](https://github.com/diegosouzapw/OmniRoute/pull/2476) — thanks @oyi77)
- **fix(translator):** внедрение `omniroute_web_search` в плоскую форму инструмента API Responses (`{ type, name }`), когда целевой провайдер говорит на API Responses — ранее он всегда выдавался в вложенной форме Chat Completions, поэтому Codex/передающие upstream отклоняли запрос. ([#2390](https://github.com/diegosouzapw/OmniRoute/issues/2390))
- **fix(kiro):** сериализация нестрокового `role:"tool"` содержимого сообщения перед отправкой в CodeWhisperer — структурированный/массивной вывод инструмента сжимался до `content:[{ text: "" }]`, который Kiro отклонял с `400 Improperly formed request`. ([#2446](https://github.com/diegosouzapw/OmniRoute/issues/2446))
- **fix(claude):** ограничение тяжелых агентских бета-заголовков (`context-1m`, `effort`, `advanced-tool-use`) только для Opus/Sonnet — Haiku с OAuth получал `context-1m` и отклонял его с 400. Также санитизирует исторические блоки `thinking` в passthrough. ([#2454](https://github.com/diegosouzapw/OmniRoute/issues/2454) — thanks @havockdev)
- **fix(perplexity-web):** маршрутизация запросов через клиент, имитирующий TLS Firefox-148, чтобы Cloudflare edge Perplexity больше не отклонял IP-адреса VPS/датацентра с 403 challenge. ([#2459](https://github.com/diegosouzapw/OmniRoute/issues/2459) — thanks @havockdev)
- **fix(validation):** защита `apiKey`/`modelsUrl` от нестроковых значений перед вызовом `.startsWith()` / `.trim()` на пути проверки подключения провайдера. ([#2463](https://github.com/diegosouzapw/OmniRoute/issues/2463))
- **fix(cost):** предотвращение двойного учета `cache_creation_input_tokens` — `prompt_tokens` из экстракторов токенов уже включают оба типа кэша `cache_read` и `cache_creation`, поэтому `nonCachedInput` теперь вычитает оба типа кэша, чтобы не учитывать кэш по полной ставке ввода. ([#2522](https://github.com/diegosouzapw/OmniRoute/pull/2522) — thanks @herjarsa)
- **fix(handler):** всегда нормализовать сообщения системной роли в пути passthrough Claude — `normalizeClaudeUpstreamMessages()` теперь вызывается безусловно как в `compatibleBridge`, так и в чистом passthrough, чтобы гарантировать, что `role:"system"` сообщения всегда извлекаются в верхний уровень `system` параметра. ([#2519](https://github.com/diegosouzapw/OmniRoute/pull/2519) — thanks @herjarsa)
- **fix(handler):** захват `thought_signature` Gemini в непоточном пути ответа — теперь непоточный переводчик захватывает `thoughtSignature` из частей инструментов мышления Gemini и сохраняет их, чтобы последующие повороты могли правильно их разрешить. ([#2518](https://github.com/diegosouzapw/OmniRoute/pull/2518) — thanks @herjarsa)
- **fix(kiro):** замена сломанного социального OAuth на поток устройства — переписывает социальный вход Kiro из сломанного PKCE `kiro://` пользовательского протокола на поток устройства AWS Cognito, который работает правильно в веб/прокси-окружениях. ([#2524](https://github.com/diegosouzapw/OmniRoute/pull/2524) — thanks @disonjer)
- **fix(providers):** разрешение несоответствия `opencode/` → `opencode-zen` slug + добавление 40+ новых моделей — `opencode` теперь является правильным псевдонимом для `opencode-zen` в исполнителе, резолвере модели и реестре провайдеров; добавляет GPT 5.x, Claude 4.x, Gemini 3.x, Grok, Kimi и другие модели с тестами. ([#2517](https://github.com/diegosouzapw/OmniRoute/pull/2517) — thanks @herjarsa)
- **fix(antigravity):** переключение зависших сеансов Antigravity — новый `ANTIGRAVITY_PRE_RESPONSE_TIMEOUT_CODE` общий константа для обнаружения таймаута до ответа, автоматическое переключение на следующий аккаунт при зависании сеанса до прибытия заголовков. Диапазон движков Node.js расслаблен до `>=20.20.2`. ([#2464](https://github.com/diegosouzapw/OmniRoute/pull/2464) — thanks @dhaern)
- **fix(deepseek-web):** исправление парсера SSE, формата промпта и обработки ошибок — обрабатывает все 3 формата потока DeepSeek SSE (начальные фрагменты, операции APPEND, строковые токены), упрощает промпт до одноходового, чтобы предотвратить утечку маркеров чата, и проверяет `json.code` перед извлечением токенов. ([#2502](https://github.com/diegosouzapw/OmniRoute/pull/2502) — thanks @ovehbe)
- **fix(codex):** принятие `auth.json` без поля `auth_mode` при импорте — Codex CLI больше не записывает `auth_mode`; импорт теперь принимает оба формата, если присутствуют обязательные токены. Чтение семантического кэша теперь требует явного `temperature: 0`. ([#2536](https://github.com/diegosouzapw/OmniRoute/pull/2536) — thanks @janeza2)
- **fix(freetheai):** добавление `/chat/completions` к baseUrl для разрешения ошибок 404. ([#2557](https://github.com/diegosouzapw/OmniRoute/pull/2557) — thanks @lordavadon2)
- **fix(qoder):** маршрутизация токенов PAT к родному API Qoder вместо DashScope — обнаруживает токены с префиксом `pt-` и маршрутизирует их к `api.qoder.com` с правильным заголовком User-Agent. ([#2559](https://github.com/diegosouzapw/OmniRoute/pull/2559) — thanks @herjarsa)
- **fix(perf):** кэширование скомпилированного RegExp в горячем пути сжатия RTK — устраняет тысячи избыточных повторных вызовов `new RegExp()` в секунду. ([#2553](https://github.com/diegosouzapw/OmniRoute/pull/2553) — thanks @soyelmismo)
- **fix(reasoning-cache):** автоматический запуск периодической очистки при загрузке модуля — задание `server-init.ts` никогда не импортировалось (мертвый код), что приводило к бесконечному росту таблицы `reasoning_cache`. Теперь запускает 30-минутные циклы очистки автоматически. ([#2552](https://github.com/diegosouzapw/OmniRoute/pull/2552) — thanks @soyelmismo)
- **fix(claude):** опустить `context-1m` бета для Sonnet — ограничить только Opus, чтобы избежать ошибок кредитов шлюза для длинного контекста. Добавить `afk-mode-2026-01-31`, заменить `redact-thinking` на `thinking-token-count-2026-05-13`. ([#2568](https://github.com/diegosouzapw/OmniRoute/pull/2568) — thanks @unitythemaker)
- **fix(codex):** расслабление проверки `auth_mode` в предварительном просмотре импорта фронтенда — принять `undefined`/`null`/`"chatgpt"` вместо строгого требования `"chatgpt"`, соответствующего исправлению бэкенда в #2536. ([#2567](https://github.com/diegosouzapw/OmniRoute/pull/2567) — thanks @janeza2)
- **fix(kimi):** объявление возможности зрения для Kimi K2.6 во всех 4 слоях — `providerRegistry`, `modelSpecs`, список ключевых слов `catalog.ts` и `VISION_MODELS` Playground; ранее модель молча отклоняла загрузку изображений. ([#2573](https://github.com/diegosouzapw/OmniRoute/pull/2573) — thanks @herjarsa)
- **fix(dashboard):** постраничный просмотрщик журнала запросов за пределами 300 строк — `getCallLogs` теперь принимает `offset` с параметризованным SQL (устраняет строковое интерполированное `LIMIT`); `RequestLoggerV2` увеличивает свой окно через "Load more" + IntersectionObserver бесконечную прокрутку, сбрасывая при изменении фильтра. ([#2576](https://github.com/diegosouzapw/OmniRoute/pull/2576))
- **fix(cli):** использование `/api/monitoring/health` для проверки готовности сервера — `waitForServer()` опрашивал защищенный аутентификацией `/api/health` (401), что приводило к бесконечному ожиданию `omniroute serve`. ([#2578](https://github.com/diegosouzapw/OmniRoute/pull/2578) — thanks @amogus22877769)
- **fix(combo):** обнаружение недопустимых ошибок модели через структурированные коды ошибок + резервный вариант regex — когда цель комбо отклоняет модель (например, бесплатный аккаунт vs Pro), маршрутизатор теперь распознает коды `model_not_found` / `deployment_not_found` и 6 шаблонов regex, и переходит к следующей цели вместо остановки цикла. ([#2534](https://github.com/diegosouzapw/OmniRoute/pull/2534) — thanks @HALDRO)
- **fix(security):** пакетное усиление после рецензии — `spawnSync` arg-array заменяет `execSync` string-template (инъекция команд), CSP `unsafe-eval` ограничен `!app.isPackaged`, `requireManagementAuth` защита на бюджет/bulk и эндпоинты устойчивости/сброса, сообщения об ошибках очищены в блоках catch gemini-web/claude-web/copilot-web/oauth/agents, цепь отказов сохраняет `lastFailureKind`, и комбо сбрасывает `exhaustedProviders` на итерацию set-retry. ([#2435](https://github.com/diegosouzapw/OmniRoute/pull/2435))
- **fix(@omniroute/opencode-plugin):** соблюдение `geminiSanitization` и `fetchInterceptor` флагов функций — оба применялись безусловно; теперь каждая слой fetch регулируется своим флагом (по умолчанию ВКЛ), и отключение обоих приводит к обычному SDK fetch. ([#2546](https://github.com/diegosouzapw/OmniRoute/pull/2546))
- **fix(#2575):** проверка переопределения флага функции DB в `arePrivateProviderUrlsAllowed()` — поддерживает переключение без перезапуска. ([#2595](https://github.com/diegosouzapw/OmniRoute/pull/2595) — thanks @herjarsa)
- **fix(mimo):** добавление флага `supportsVision` к MiMo-V2.5, V2.5-Pro и V2-Omni — ранее загрузка изображений молча отклонялась. ([#2592](https://github.com/diegosouzapw/OmniRoute/pull/2592) — thanks @herjarsa)
- **fix(ops):** распространение `OMNIROUTE_SKIP_DB_HEALTHCHECK` переменной окружения на планировщик периодической проверки состояния БД — компаньонский исправление для #2554. ([#2591](https://github.com/diegosouzapw/OmniRoute/pull/2591) — thanks @soyelmismo)
- **fix(github):** удаление неверного `openai-responses` targetFormat из моделей Haiku/Sonnet GitHub Copilot. ([#2583](https://github.com/diegosouzapw/OmniRoute/pull/2583) — thanks @oyi77)
- **fix(copilot):** стабилизация конфигурации ответов — удаляет 865 строк нестабильной конфигурации, упрощает обработчик. ([#2579](https://github.com/diegosouzapw/OmniRoute/pull/2579) — thanks @ivan-mezentsev)
- **fix(#2544):** добавление keepalive heartbeat в поток преобразования API Responses — предотвращает отключение клиента Codex CLI 0.130.0 во время длительных фаз мышления/рассуждений. ([#2599](https://github.com/diegosouzapw/OmniRoute/pull/2599) — thanks @herjarsa)
- **fix(memory):** извлечение сообщений системной роли в семантическом пути passthrough для предотвращения 400 на внедрение памяти — системные сообщения передавались как есть провайдерам, которые отклоняют смешанные роли. ([#2474](https://github.com/diegosouzapw/OmniRoute/pull/2474) — thanks @Tentoxa)
- **fix(@omniroute/opencode-provider):** включение `limit.context` в записи модели для обнаружения окна контекста OpenCode — ранее OpenCode не мог определить размер контекста модели. ([#2482](https://github.com/diegosouzapw/OmniRoute/pull/2482) — thanks @herjarsa)
- **fix(mimo):** добавление флага `supportsVision` к Kimi K2.6 в providerRegistry + всеобъемлющие тесты зрения для MiMo V2.5/V2.5-Pro/V2-Omni. ([#2600](https://github.com/diegosouzapw/OmniRoute/pull/2600) — thanks @herjarsa)
- **fix(proxy):** предпочтение прокси с областью перед глобальным резервным вариантом реестра — устаревший прокси провайдера уровня был затмевался глобальным резервным вариантом реестра в обоих бэкендах хранения. Разрешение теперь следует строгой специфичности: account → provider → combo → global. ([#2606](https://github.com/diegosouzapw/OmniRoute/pull/2606) — thanks @terence71-glitch)
- **fix(@omniroute/opencode-plugin):** дедупликация канонического двойника + обогащение резервного варианта псевдонима — `/v1/models` возвращал одну и ту же модель под обоими именами псевдонима (`cc/claude-opus-4-7`) и канонического (`claude/claude-opus-4-7`); теперь удаляет ~75 дубликатов канонических и восстанавливает ~88 строк с идентификатором raw-id с правильным префиксом провайдера через резервный вариант индекса псевдонима. Также выдает `cost`, `release_date`, `modalities` поля в статическом каталоге и повышает порог метки провайдера до 12 символов (сохраняет `AssemblyAI`, `Antigravity` буквально). ([#2607](https://github.com/diegosouzapw/OmniRoute/pull/2607) — thanks @mrmm)
- **fix(registry):** заполнение пустых массивов моделей для HuggingFace (6 моделей) и HackClub (3 модели) + исправление шаблона baseUrl Snowflake на `{account}` шаблонный шаблон. ([#2611](https://github.com/diegosouzapw/OmniRoute/pull/2611) — thanks @oyi77)

### 🌐 Internationalization

- **i18n(zh-CN):** перевод 830 отсутствующих строк UI — заменяет все `__MISSING__:` заполнители на правильные китайские переводы. ([#2523](https://github.com/diegosouzapw/OmniRoute/pull/2523) — thanks @InkshadeWoods)
- **i18n(dashboard):** добавление отсутствующих ключей дашборда и исправление резервных значений EN — сотни жестко закодированных английских строк по всему кэшу, пещерному человеку, затратам, навыкам, памяти и страницам оценок заменены вызовами `t()`. ([#2500](https://github.com/diegosouzapw/OmniRoute/pull/2500) — thanks @Gi99lin)
- **i18n(pt-BR):** завершение и исправление бразильского португальского перевода — всеобъемлющее обновление локали pt-BR с ~3000 строк качественных переводов, заполнение всех отсутствующих ключей и исправление существующих записей. ([#2543](https://github.com/diegosouzapw/OmniRoute/pull/2543) — thanks @alltomatos)
- **i18n(ru):** всеобъемлющее обновление русского перевода — ~2000 строк исправленных и заполненных переводов. ([#2550](https://github.com/diegosouzapw/OmniRoute/pull/2550) — thanks @AgentAlexAI)
- **i18n(all):** всеобъемлющая локализация и рефакторинг UI — 42 файла локали синхронизированы с отсутствующими ключами, переписанная страница облачных агентов i18n и последовательное использование `t()` по 21 компонентам дашборда. ([#2580](https://github.com/diegosouzapw/OmniRoute/pull/2580) — thanks @alltomatos)
- **i18n(all):** перевод строк бесплатных провайдеров через 41 локаль — заменяет `__MISSING__:Free Tier Providers` заполнители на правильные переводы в обоих пространствах имен `common` и `providers`. ([#2609](https://github.com/diegosouzapw/OmniRoute/pull/2609) — thanks @leninejunior)
- **i18n(pt-BR):** устранение всех 1270 оставшихся `__MISSING__` маркеров — завершает перевод pt-BR через 41 пространство имен до истинного 100% покрытия. ([#2610](https://github.com/diegosouzapw/OmniRoute/pull/2610) — thanks @leninejunior)

### 📝 Maintenance

- **chore:** удаление развертывания VPS Akamai из рабочего процесса выпуска и навыков.
- **chore(deps):** обновление `actions/setup-node` с v4 до v6 + исправление безопасности для `randomBytes` для идентификаторов задач облачных агентов. ([#2589](https://github.com/diegosouzapw/OmniRoute/pull/2589))
- **chore(deps):** обновление `actions/upload-artifact` с v4 до v7. ([#2588](https://github.com/diegosouzapw/OmniRoute/pull/2588))
- **chore:** игнорирование `.claude/worktrees` из отслеживания git.
- **chore(ci):** автоматическая блокировка ветки выпуска при публикации версии — новый рабочий процесс CI применяет защиту `lock_branch` при публикации GitHub Release. ([#2542](https://github.com/diegosouzapw/OmniRoute/pull/2542))
- **docs:** переработка README — маркетинговый макет с точным количеством провайдеров. ([#2490](https://github.com/diegosouzapw/OmniRoute/pull/2490))

---

---

---

## [3.8.1] — 2026-05-21

### ✨ New Features

- **feat(settings):** Страница настроек Feature Flags (Card Grid + DB overrides) — полностью реализует пользовательский интерфейс дашборда feature flags с использованием варианта A (Card Grid) с эффектом Glassmorphism, включая глобальные API-маршруты `GET/PUT/DELETE`, валидацию Zod, debounced search, фильтры категорий и полную поддержку 30+ локалей i18n. Приоритетная иерархия: DB > ENV > Defaults. ([#2457](https://github.com/diegosouzapw/OmniRoute/pull/2457))
- **feat(db):** много-драйверный абстракционный слой SQLite — новый интерфейс `SqliteAdapter` с 3 конкретными адаптерами (`betterSqliteAdapter`, `nodeSqliteAdapter`, `sqljsAdapter`) и `driverFactory`, который каскадирует `better-sqlite3` → `node:sqlite` → `sql.js (WASM)`. Позволяет OmniRoute работать в любом JavaScript-окружении (Node.js, Bun, Deno, Cloudflare Workers) без зависимостей от нативных библиотек. `better-sqlite3` перемещен в `optionalDependencies`. ([#2447](https://github.com/diegosouzapw/OmniRoute/pull/2447))
- **feat(settings):** Переключатель Claude Fast Mode в Settings › AI — опциональный переключатель, который отправляет заголовок `X-CPA-Force-Fast-Mode`, чтобы связанная сборка CLIProxyAPI могла достичь режима Fast Mode Anthropic (`speed:"fast"`). Модель ограничена моделями Opus, соответствующими бинарной проверке KT() от Anthropic. ([#2449](https://github.com/diegosouzapw/OmniRoute/pull/2449) — спасибо @NomenAK)
- **feat(settings):** Codex Fast Tier — выпадающий список (`default`/`priority`/`flex`) + ограничение на уровне модели, предотвращающее ошибки 400 от OpenAI, когда переключатель был включен для моделей, не поддерживающих Fast Mode. ([#2451](https://github.com/diegosouzapw/OmniRoute/pull/2451) — спасибо @NomenAK)
- **feat:** поддержка Antigravity 2.0.1 — обновленный клиентский профиль, заголовки upstream и псевдонимы моделей. ([#2443](https://github.com/diegosouzapw/OmniRoute/pull/2443) — спасибо @dhaern)
- **feat:** улучшение `extractBearer` для поддержки `x-api-key` в стиле аутентификации Anthropic API. ([#2436](https://github.com/diegosouzapw/OmniRoute/pull/2436) — спасибо @thedtvn)
- **feat(memory):** подключение `createMemory` к `upsertSemanticMemoryPoint` (Qdrant). ([#2439](https://github.com/diegosouzapw/OmniRoute/pull/2439) — спасибо @NomenAK)

### 🔧 Bug Fixes & Refactors

- **fix(deepseek-web):** переписанная аутентификация с использованием userToken Bearer + WASM PoW solver. ([#2452](https://github.com/diegosouzapw/OmniRoute/pull/2452) — спасибо @ovehbe)
- **chore:** обновление зависимостей node и поддержки runtime. ([#2453](https://github.com/diegosouzapw/OmniRoute/pull/2453) — спасибо @backryun)
- **fix(translator):** исправление 3 дефектов Kiro `tool_result`, вызывающих ошибку 400 на последующих ходах — отсутствие `tool_use_id` mapping, блоки результатов-сирот и коллизия идентификаторов разговора на ходах, начинающихся с ассистента. ([#2447](https://github.com/diegosouzapw/OmniRoute/pull/2447))
- **fix(translator):** обработка роли `developer` как system в переводе OpenAI → Claude — `openAIToClaude` теперь извлекает сообщения с ролью `developer` в `systemParts` (как `system`) и фильтрует их из списка сообщений, не являющихся системными, предотвращая внедрение контекста идентичности через роль `developer` в API Responses, который молча превращается в ход ассистента при маршрутизации к поставщику в формате Claude. ([#2407](https://github.com/diegosouzapw/OmniRoute/issues/2407))
- **fix(antigravity):** удаление дублирующегося `removeHeaderCaseInsensitive` — экспорт канонической реализации из `antigravityClientProfile.ts` и удаление локальной копии в `antigravity.ts`; экспорт типа `AntigravityCredentialsLike` для межмодульного использования. (#2433 — спасибо @Gi99lin)
- **refactor(docs):** улучшение обработки frontmatter в DocPage — исправление ошибки парсинга объекта Date в gray-matter. ([#2448](https://github.com/diegosouzapw/OmniRoute/pull/2448) — спасибо @ovehbe)
- **fix(jules):** соответствие Jules API и регистрация провайдера cloud-agent. ([#2438](https://github.com/diegosouzapw/OmniRoute/pull/2438))
- **fix(i18n):** усиление санитизации тегов при извлечении ключей diff в `extract-keys-from-diff.mjs`.
- **chore(i18n):** обновление локалей fr/es/de + добавление отсутствующего ключа `settings.update`. ([#2437](https://github.com/diegosouzapw/OmniRoute/pull/2437))
- **fix(dashboard):** разрешение имен в квадратных скобках — выравнивание валидатора имен комбо в дашборде с обновленной общей схемой сервера в PR #2354; имена вроде `Claude [1m]` теперь принимаются в форме создания/редактирования. ([#2458](https://github.com/diegosouzapw/OmniRoute/pull/2458) — спасибо @congvc-dev)
- **docs(agentrouter):** рекомендация использования нативного провайдера как простого пути — руководство теперь предпочитает встроенный провайдер AgentRouter вместо ручной настройки OpenAI-compatible. ([#2429](https://github.com/diegosouzapw/OmniRoute/pull/2429) — спасибо @leninejunior)
- **feat(settings):** отображение переключателя Codex Fast Tier в Settings › AI — сопровождающий UI-переключатель для функции Codex Fast Tier. ([#2440](https://github.com/diegosouzapw/OmniRoute/pull/2440) — спасибо @NomenAK)

### 🔒 Security Fixes

- **fix(security):** замена строкового шаблона `execSync` на массив аргументов `spawnSync` в `plugin.mjs` — устраняет инъекцию команд оболочки через вредоносные имена плагинов.
- **fix(security):** ограничение Electron CSP `unsafe-eval` на `!app.isPackaged` вместо сопоставления подстроки URL — утечка `unsafe-eval` в производственные сборки; объединение дублирующихся директив `connect-src`.
- **fix(api):** добавление `requireManagementAuth` к `/api/usage/budget/bulk` и `/api/resilience/reset` — оба конечных пункта открывают данные о расходах и управление circuit-breaker без аутентификации.
- **fix(security):** маршрутизация сообщений об ошибках через `sanitizeErrorMessage()` в `gemini-web`, `claude-web`, `copilot-web` исполнителях, маршруте `oauth` и маршрутах задач cloud-agent — предотвращает утечку стектрейсов и внутренних путей в HTTP-ответах.
- **fix(codex):** `refreshCredentials` возвращает `null` (а не объект ошибки) при сбое обновления токена — предотвращает распространение `{error}` на активные учетные данные базового исполнителя.
- **fix(tokenRefresh):** безопасный доступ к `unknown`-ошибке в блоке `catch` (`error instanceof Error ? error.message : String(error)`).
- **fix(combo):** сброс множества `exhaustedProviders` в начале каждой итерации set-retry — провайдеры, исключенные в неудачном проходе, теперь получают второй шанс на повтор.
- **fix(circuitBreaker):** сохранение и восстановление `lastFailureKind` через столбец `options` JSON — переопределения на основе kind (`cooldownByKind`) теперь сохраняются при перезапуске сервера.

---

---

---

## [3.8.0] — 2026-05-06

### 🚀 Исправления и дополнения после релиза (2026-05-06 → 2026-05-20)

#### 2026-05-20

- **feat(batch):** реализовано 10 запросов на новые функции, собранных из проблем — исполнитель T3 Chat Web (на основе cookie), отслеживание исчерпанных провайдеров для каждого запроса (пропуск провайдеров с исчерпанным квотом в комбинации), обнаружение Docker Zed, панель состояния здоровья ротатора ключей API, изоляция нескольких аккаунтов Kiro, фильтрация моделей по окну контекста, смешивание стоимости в комбинациях, тесты конфигурации комбинаций, ветки проверки провайдеров и сценарии поддержки после установки. ([#2414](https://github.com/diegosouzapw/OmniRoute/pull/2414))
- **feat(combos):** добавлена стратегия `falloverBeforeRetry` — маршрутизация комбинаций теперь переходит к следующему целевому объекту перед повторной попыткой того же модели, что исключает хвостовую задержку из-за исчерпания всех повторных попыток модели на сбоевом конце. Также оборачивает цикл повторных попыток во внешний цикл `setTry` для координации повторных попыток на уровне целевого объекта. ([#2417](https://github.com/diegosouzapw/OmniRoute/pull/2417) — спасибо @hartmark)
- **fix(gamification):** устранены 6 пробелов в реализации — отсутствующий `SELECT` в SQL `checkActionCountBadges` (тихо пропускал 8 значков), принудительное выполнение аутентификации в таблице лидеров федерации, параметр `offset` для пагинации больше не тихо отбрасывается, представление аномалий администратора теперь вычисляет реальные z-оценки, `addXp` правильно вычисляет начальный уровень из количества XP, и баррель `index.ts` для чистого экспорта модулей. Набор тестов в 72 покрывает все исправления. ([#2421](https://github.com/diegosouzapw/OmniRoute/pull/2421) — спасибо @oyi77)
- **docs:** добавлено руководство по настройке провайдера AgentRouter — пошаговые инструкции по подключению OmniRoute к релейному конечной точке AgentRouter.org, совместимой с Claude, включая конфигурацию ключа API и заголовки wire-image. ([#2422](https://github.com/diegosouzapw/OmniRoute/pull/2422) — спасибо @leninejunior)
- **fix(claude):** удалены оставшиеся блоки `tool_result`, когда `fixToolAdjacency` удаляет висящий `tool_use` — решает HTTP 400 "неожиданный tool_use_id в блоках tool_result" от API Anthropic на усеченных историях. `fixToolPairs` теперь повторно запускается после каждого прохода `fixToolAdjacency` по всем трем точкам вызова (`contextManager.ts`, `base.ts`, `claudeCodeCompatible.ts`). (обсуждение [#2410](https://github.com/diegosouzapw/OmniRoute/discussions/2410))
- **fix(playground):** защита от `null`/нестроковых идентификаторов моделей в выпадающих списках Playground — проверка `typeof m?.id !== "string"` предотвращает тихий сбой в цикле обнаружения провайдеров и вычислении `filteredModels`, которая оставляла все выпадающие списки Playground пустыми, когда `/v1/models` возвращал записи с `id: null`; добавлена дедупликация через `Set`, чтобы устранить предупреждения о дублировании ключей React.
- **fix(mitm):** указать на перекомпилированную конечную точку `.js` для повторного экспорта менеджера времени выполнения MITM — исправляет разрешение модулей после сборки, когда исходный файл `.ts` больше не присутствует.
- **fix(storage):** сохранять `STORAGE_ENCRYPTION_KEY` при обновлениях (закрывает #1622) — гарантирует сохранение ключей шифрования SQLite при обновлениях версий. ([#2428](https://github.com/diegosouzapw/OmniRoute/pull/2428) — спасибо @Chewji9875)
- **fix(auth):** автоматический сброс состояния `apiKeyHealth` при успешном тесте подключения. ([#2427](https://github.com/diegosouzapw/OmniRoute/pull/2427) — спасибо @clousky2020)
- **fix(mitm):** удалить расширение `.js` из повторного экспорта `manager.runtime`, чтобы исправить проблему с упаковкой webpack. ([#2425](https://github.com/diegosouzapw/OmniRoute/pull/2425) — спасибо @NomenAK)
- **fix(image):** поддержка генерации изображений Antigravity и добавление поддержки Gemini 3.5 Flash. ([#2423](https://github.com/diegosouzapw/OmniRoute/pull/2423) — спасибо @backryun)

#### 2026-05-19

- **chore(i18n):** полное покрытие интернационализации дашборда — 6 раундов параллельной рефакторизации, заменяющих жестко закодированный английский/португальский текст на вызовы `t()` на 57+ страницах дашборда; добавлено 420+ новых ключей в `en.json`, охватывающих `settings`, `playground`, `analytics`, `apiManager`, `providers`, `skills`, `memory`, `agents` и 15 других пространств имен (покрытие: ~88%, в сравнении с ~20%).
- **fix(offline):** избежать несоответствия гидратации SSR/CSR на странице статуса оффлайн — переключение с ленивой инициализации `useState` (которая обращалась к `navigator.onLine` на сервере) на `useSyncExternalStore` с отдельным снимком сервера `false`, что устраняет предупреждение о гидратации React.
- **fix(cli-tools):** защитить тип `modelId` перед вызовом `.indexOf()` — предотвращает `TypeError`, когда запись модели без строкового `id` достигает логики сравнения в CLI Tools.
- **fix(providers):** добавить отсутствующий импорт `isLocalProvider` и обновить changelog.
- **fix(resilience):** добавить отслеживание состояния API-ключа с автоматической ротацией и оповещениями в UI. ([#2412](https://github.com/diegosouzapw/OmniRoute/pull/2412) — спасибо @clousky2020)
- **feat(providers):** поддержка API-ключей Gemini для исполнителя CLI Gemini. ([#2408](https://github.com/diegosouzapw/OmniRoute/pull/2408) — спасибо @benzntech)
- **feat(gamification):** реализовать систему геймификации и лидерборда с неблокирующими обновлениями, основанными на событиях. ([#2405](https://github.com/diegosouzapw/OmniRoute/pull/2405) — спасибо @oyi77)
- **fix(providers):** провайдер Kilo Code больше не блокируется отсутствующим локальным бинарным файлом `kilocode` CLI — провайдер использует OAuth device flow + прямой HTTPS к `api.kilo.ai` и никогда не требовал CLI во время выполнения; тест подключения жестко завершался с "Локальный бинарный файл CLI не установлен", даже когда токен OAuth был действительным. Интеграция CLI Tools (`/api/cli-tools/kilo-settings`) сохраняет свою собственную проверку времени выполнения. ([#2404](https://github.com/diegosouzapw/OmniRoute/issues/2404) — спасибо @Flexible78)
- **fix(db):** `bun add -g omniroute` (и другие среды выполнения, которые пропускают postinstall) больше не вызывает общий 500 — `isNativeSqliteLoadError` теперь также обнаруживает "Не удалось найти файл привязок" / `MODULE_NOT_FOUND`, поэтому пользователь получает дружественное руководство по пересборке вместо этого. ([#2358](https://github.com/diegosouzapw/OmniRoute/issues/2358) — спасибо @yamansin)
- **fix(kiro):** включить опцию входа через Google OAuth в модальном окне авторизации Kiro — отображает кнопку Google SSO наряду с существующими поставщиками удостоверений. ([#2392](https://github.com/diegosouzapw/OmniRoute/pull/2392) — спасибо @congvc-dev)
- **fix(security):** удалить слой хеширования в `sessionPoolKey` после перехода на стратегию получения ключа, не связанную с криптографией, которая устраняет предупреждение CodeQL #247. ([#2396](https://github.com/diegosouzapw/OmniRoute/pull/2396))
- **feat(providers):** провайдер Gemini Web на основе cookie — проксирует google.com chat через сессионный cookie, позволяя бесплатный доступ к Gemini без API-ключей. ([#2380](https://github.com/diegosouzapw/OmniRoute/pull/2380) — спасибо @oyi77)
- **model:** добавить Composer 2.5 в каталог провайдера Cursor. ([#2381](https://github.com/diegosouzapw/OmniRoute/pull/2381) — спасибо @backryun)
- **fix:** `tool_use` без соседнего `tool_result` вызывает ошибку 400 у Claude — теперь также применяется защита смежности внутри `compressContext`. ([#2383](https://github.com/diegosouzapw/OmniRoute/pull/2383) — спасибо @oyi77)
- **build(deps):** обновить `electron` с 42.0.1 до 42.1.0 в `/electron`. ([#2397](https://github.com/diegosouzapw/OmniRoute/pull/2397))
- **build(deps):** обновления в производственной группе — 4 обновления. ([#2398](https://github.com/diegosouzapw/OmniRoute/pull/2398))
- **build(deps):** обновления в группе разработки — 4 обновления. ([#2399](https://github.com/diegosouzapw/OmniRoute/pull/2399))
- **chore:** синхронизировать `release/v3.8.0` с `main` (горячие исправления CodeQL + обновления Dependabot) через коммит слияния.

#### 2026-05-18

- **fix(security):** исправлены предупреждения CodeQL #243/#244/#245 — неполная очистка подстроки URL и усиление криптосигналов. ([#2391](https://github.com/diegosouzapw/OmniRoute/pull/2391))
- **fix(security):** переключение `sessionPoolKey` на HMAC-SHA256 для устранения предупреждения CodeQL #246 (небезопасный хэш для конфиденциальных данных). ([#2394](https://github.com/diegosouzapw/OmniRoute/pull/2394))
- **docs(readme):** восстановлено признание 9router, которое было случайно удалено во время переработки README v3.8.0. ([#2393](https://github.com/diegosouzapw/OmniRoute/pull/2393))
- **refactor(dashboard):** всеобъемлющий редизайн навигации, провайдеров, конечных точек, времени выполнения, квот, цен и бюджета + предварительный просмотр совместного использования квот (перестройка боковой панели → 12 сворачиваемых разделов, 22 новых маршрута). ([#2384](https://github.com/diegosouzapw/OmniRoute/pull/2384))
- **fix(dashboard):** исправления после рецензирования PR #2384 — локализация квот времени выполнения, логика проекции бюджета, внешняя локализация QuotaShare, семантическая разметка лимитов провайдера, массовое использование конечных точек. ([#2389](https://github.com/diegosouzapw/OmniRoute/pull/2389))
- **feat(content):** добавлены Haiper, Leonardo, Ideogram, Suno и Udio в качестве провайдеров контента/медиа. ([#2377](https://github.com/diegosouzapw/OmniRoute/pull/2377) — спасибо @oyi77)
- **feat(@omniroute/opencode-provider):** расширены помощники конфигурации, добавлена запись MCP, живая выборка модели и конструктор комбо. ([#2375](https://github.com/diegosouzapw/OmniRoute/pull/2375) — спасибо @mrmm)
- **fix(claude-oauth):** включен конвейер system-transforms для нативного исполнителя Claude (закрывает 400 billing-gate). ([#2370](https://github.com/diegosouzapw/OmniRoute/pull/2370) — спасибо @thepigdestroyer)
- **feat(content):** расширены провайдеры с возможностями видео, аудио, TTS и музыки — Pollinations, MiniMax, Together, Replicate по реестрам аудио TTS и транскрипции. ([#2369](https://github.com/diegosouzapw/OmniRoute/pull/2369) — спасибо @oyi77)
- **feat(providers):** добавлен Veo AI Free в качестве провайдера-обертки веб-интерфейса для генерации видео, изображений и TTS без API-ключа. ([#2366](https://github.com/diegosouzapw/OmniRoute/pull/2366) — спасибо @oyi77)
- **feat(providers):** добавлен Replicate в качестве бесплатного провайдера для вывода сообщений, совместимых с OpenAI, с моделями сообщества. ([#2364](https://github.com/diegosouzapw/OmniRoute/pull/2364) — спасибо @oyi77)
- **fix(claude):** избегание избыточного глубокого клонирования сообщений Claude Code во время подготовки семантического пропуска, что улучшает эффективность памяти/CPU для больших историй. ([#2362](https://github.com/diegosouzapw/OmniRoute/pull/2362) — спасибо @terence71-glitch)
- **fix(providers):** зарегистрирован `llm7` в реестре исполнителей и маршрутизация Cohere через слой, совместимый с OpenAI. ([#2361](https://github.com/diegosouzapw/OmniRoute/pull/2361), [#2360](https://github.com/diegosouzapw/OmniRoute/pull/2360))
- **fix(rate-limiter):** Redis теперь опционален — если `REDIS_URL` не установлен, ограничитель скорости переключается на хранилище в памяти вместо спама `ECONNREFUSED`. ([#2357](https://github.com/diegosouzapw/OmniRoute/pull/2357))
- **fix(streaming):** эмит ошибок потока, зависящих от протокола — `createDisconnectAwareStream()` теперь эмитирует блоки ошибок SSE API или Claude API на основе протокола клиента. ([#2355](https://github.com/diegosouzapw/OmniRoute/pull/2355) — спасибо @dhaern)
- **fix(combos):** разрешены скобочные имена комбо (например, `Claude [1m]`) путем обновления схем валидации. ([#2354](https://github.com/diegosouzapw/OmniRoute/pull/2354) — спасибо @congvc-dev)
- **fix(claude-code):** семантический пропуск — сохранение структуры `messages[]` для нативных маршрутов Claude OAuth и ретрансляции. ([#2351](https://github.com/diegosouzapw/OmniRoute/pull/2351) — спасибо @terence71-glitch)
- **fix(usage):** извлечение плоских `cached_tokens` и `reasoning_tokens` из объектов использования, совместимых с OpenAI. ([#2350](https://github.com/diegosouzapw/OmniRoute/pull/2350) — спасибо @TF0rd)
- **fix(translator):** DeepSeek tool-call response lookup читает кэшированные данные перед возвратом к пустой строке. ([#2349](https://github.com/diegosouzapw/OmniRoute/pull/2349) — спасибо @herjarsa)
- **fix(ui/tooltip):** рендеринг в портале + ограничение по области просмотра, чтобы подсказки не обрезались в диалогах модальных окон. ([#2352](https://github.com/diegosouzapw/OmniRoute/pull/2352) — спасибо @slider23)
- **fix(auto-routing):** замена `getSettings()` на `getCachedSettings`, чтобы остановить 500 на запросах `auto/*`. ([#2346](https://github.com/diegosouzapw/OmniRoute/pull/2346))
- **fix(docker):** включение документации Dashboard Docs в контейнерный образ. ([#2348](https://github.com/diegosouzapw/OmniRoute/pull/2348))
- **fix(combo/validator):** обработка ответов от верхнего уровня, содержащих непустое `reasoning_content`, как допустимый вывод. ([#2341](https://github.com/diegosouzapw/OmniRoute/pull/2341))
- **fix(account-fallback):** классификация `Usage Limit Reached` от Anthropic как `QUOTA_EXHAUSTED` с 1-часовым перерывом. ([#2321](https://github.com/diegosouzapw/OmniRoute/pull/2321))
- **feat(providers):** добавлен GitHub Models в качестве бесплатного провайдера — GPT-5, o-series, DeepSeek-R1, Llama 4, Grok 3. ([#2344](https://github.com/diegosouzapw/OmniRoute/pull/2344) — спасибо @oyi77)
- **feat(providers):** добавлен Hackclub AI в качестве бесплатного провайдера — 30+ моделей, без требования кредитной карты. ([#2339](https://github.com/diegosouzapw/OmniRoute/pull/2339) — спасибо @oyi77)
- **feat(providers):** добавлен исполнитель Microsoft Copilot Web — провайдер на основе WebSocket. ([#2340](https://github.com/diegosouzapw/OmniRoute/pull/2340) — спасибо @oyi77)
- **feat(routing):** LKGP хранит последний известный хороший `connectionId` аккаунта вместе с провайдером. ([#2338](https://github.com/diegosouzapw/OmniRoute/pull/2338) — спасибо @oyi77)
- **feat(dashboard):** добавлен интерфейс импорта/экспорта аутентификации Claude Code + локализация (серия из трех PR: библиотеки, API-маршруты, интерфейс панели управления).
- **feat(dashboard):** добавлен интерфейс импорта/экспорта аутентификации Gemini CLI + локализация (серия из трех PR: библиотеки, API-маршруты, интерфейс панели управления).
- **fix(routing):** реализованы комбо для встраивания, локальная проверка провайдера, разрешение конфликтов миграции.
- **fix(build):** импорт Monaco ESM API для исправления ошибки `nls.messages-loader` webpack.
- **fix(ui):** полировка v3.8.0 — граница соединений, липкие вкладки, переводы EN, тосты сохранения, авто-каталог комбо. ([#2305](https://github.com/diegosouzapw/OmniRoute/pull/2305) — спасибо @mrmm)
- **fix(auth+build):** область Bearer manage на маршрутах управления + ленивая загрузка решателя PoW deepseek. ([#2308](https://github.com/diegosouzapw/OmniRoute/pull/2308) — спасибо @mrmm)
- **fix(claude):** защита сиротских пар tool_use/tool_result перед отправкой на верхний уровень. ([#2312](https://github.com/diegosouzapw/OmniRoute/pull/2312) — спасибо @mrmm)
- **fix(ui):** удаление счетчика из кнопки массового удаления. ([#2309](https://github.com/diegosouzapw/OmniRoute/pull/2309) — спасибо @hartmark)
- **fix:** удаление неявных ограничений запросов API-ключей — удаляет стандартные ограничения скорости 1K/5K/20K. ([#2289](https://github.com/diegosouzapw/OmniRoute/pull/2289) — спасибо @josephvoxone)
- **fix(sse):** удаление устаревших заголовков `Content-Encoding`, `Content-Length` и `Transfer-Encoding` при непоточной пересылке. ([#2264](https://github.com/diegosouzapw/OmniRoute/pull/2264) — спасибо @gleber)
- **chore(providers):** обновление метаданных моделей провайдеров и их порядка. ([#2318](https://github.com/diegosouzapw/OmniRoute/pull/2318) — спасибо @backryun)
- **chore(providers):** объединение записей провайдера Alibaba. ([#2319](https://github.com/diegosouzapw/OmniRoute/pull/2319) — спасибо @backryun)
- **fix(streaming):** усиление обнаружения готовности потока. ([#2317](https://github.com/diegosouzapw/OmniRoute/pull/2317) — спасибо @dhaern)
- **fix(v1/messages):** по умолчанию непоточный режим, когда поле `stream` отсутствует для формата Anthropic. ([#2326](https://github.com/diegosouzapw/OmniRoute/pull/2326) — спасибо @thepigdestroyer)
- **fix(claude):** `fitThinkingToMaxTokens` ограничивает бюджет мышления верхней границей вывода модели. ([#2327](https://github.com/diegosouzapw/OmniRoute/pull/2327) — спасибо @thepigdestroyer)
- **fix(codex):** приоритет рассуждений Codex разрешает `modelEffort` перед `explicitReasoning`. ([#2335](https://github.com/diegosouzapw/OmniRoute/pull/2335) — спасибо @terence71-glitch)
- **fix(providers):** страница провайдеров больше не блокируется, когда провайдеры не настроены. ([#2329](https://github.com/diegosouzapw/OmniRoute/pull/2329) — спасибо @slider23)
- **chore(providers):** обновление HuggingFace для использования нового конечного маршрута `/v1/`. ([#2322](https://github.com/diegosouzapw/OmniRoute/pull/2322) — спасибо @backryun)

- **fix(security):** исправление предупреждений CodeQL ReDoS + URL-санитизации.
- **fix(auth):** прекращение повторных попыток невосстановимых ошибок обновления токена и включение идентификатора соединения в проверку состояния токена.
- **fix(auth):** возврат синтетических учетных данных для бесплатных провайдеров без авторизации и отображение карты "no-auth" в панели управления вместо модального окна OAuth.
- **fix(endpoint):** замена вложенных `<button>` на `<div role=button>` в строках переключения туннеля для исправления предупреждений гидратации.
- **fix(migrations):** разрешение конфликта версий в слоте миграции 056 и добавление API массового удаления. ([#2294](https://github.com/diegosouzapw/OmniRoute/pull/2294) — спасибо @hartmark)
- **feat(batch):** глобальный кэш заголовков ограничения скорости с TTL 60 секунд + окно повторных попыток 24 часа. ([#2299](https://github.com/diegosouzapw/OmniRoute/pull/2299) — спасибо @hartmark)
- **feat(cc-bridge):** конфигурация, управляемая системой, для преобразования DSL на основе провайдера. ([#2286](https://github.com/diegosouzapw/OmniRoute/pull/2286), закрывает #2260 — спасибо @mrmm)
- **feat(deepseek-web):** полный исполнитель веб-API DeepSeek с решателем Keccak PoW. ([#2295](https://github.com/diegosouzapw/OmniRoute/pull/2295) — спасибо @oyi77)
- **feat(i18n):** добавлена поддержка азербайджанского языка (az / 🇦🇿) — новый локаль в `config/i18n.json`, всего поддерживается 42 языка.
- **build(deps):** обновление `actions/checkout` с 4 до 6 в рабочих процессах CI. ([#2288](https://github.com/diegosouzapw/OmniRoute/pull/2288))

#### 2026-05-17

- **fix(codex):** массовый импорт Codex `auth.json` — поддержка многократной загрузки файлов, вставки из буфера обмена и архивов ZIP. ([#2343](https://github.com/diegosouzapw/OmniRoute/pull/2343))
- **feat(codex):** импорт одного файла Codex `auth.json` как соединения OAuth (однократная миграция с Codex Desktop). ([#2336](https://github.com/diegosouzapw/OmniRoute/pull/2336))
- **feat(codex-auth):** переименование действия `export` + блокировка "Apply Local" за модальным окном подтверждения для предотвращения случайного перезаписи локальной конфигурации. ([#2332](https://github.com/diegosouzapw/OmniRoute/pull/2332))
- **fix(providers):** пустое состояние страницы провайдеров — отсутствующие ключи i18n и CTA "Add Provider", чтобы пользователи могли добавить провайдера. ([#2333](https://github.com/diegosouzapw/OmniRoute/pull/2333), [#2337](https://github.com/diegosouzapw/OmniRoute/pull/2337))
- **fix(providers):** Исправление пустого состояния провайдеров, блокирующего настройку первого провайдера. (спасибо @slider23)
- **feat(providers):** массовое добавление API-ключей с вкладками Single/Bulk.
- **feat(ui):** всеобъемлющая переработка UX панели управления, включая простые/продвинутые режимы для RTK/Caveman, человекочитаемые значки ошибок, общие компоненты InfoTooltip/PresetSlider, подзаголовки боковой панели и фильтры категорий провайдеров. ([#2315](https://github.com/diegosouzapw/OmniRoute/pull/2315), [#2316](https://github.com/diegosouzapw/OmniRoute/pull/2316) — спасибо @oyi77)
- **feat(provider):** добавлен провайдер Gitlawb Opengateway (xiaomi-mimo + gmi-cloud) с поддержкой флага hasFree. ([#2314](https://github.com/diegosouzapw/OmniRoute/pull/2314) — спасибо @oyi77)
- **feat(i18n):** добавлены ключи простых/продвинутых режимов и отсутствующие ключи фильтров провайдеров (`allProviders`, `audioProviders`, `showFreeOnly`).

#### 2026-05-16

- **feat(deepseek-web):** полный исполнитель веб-API DeepSeek с решателем PoW — также добавлен через PR #2295. (спасибо @oyi77)
- **feat(batch):** глобальный кэш заголовков ограничения скорости с TTL 60 секунд — также через #2299.
- **feat(cc-bridge):** конфигурируемое преобразование DSL для системных блоков по провайдерам — также через #2286.
- **feat(dashboard):** карточка сводки провайдера, бесплатная кнопка теста, порядок боковой панели, исправление i18n.
- **feat(dashboard):** страница аудита A2A, панель статистики на странице аудита MCP, удаление дубликатов в боковой панели.
- **feat(skills):** добавлено 5 манифестов CLI навыков + страницы AgentSkills / OmniSkills в панели управления. ([#2284](https://github.com/diegosouzapw/OmniRoute/pull/2284))
- **fix(translator):** отображение `developer` → `system` по умолчанию для провайдеров, не относящихся к семейству OpenAI. ([#2281](https://github.com/diegosouzapw/OmniRoute/pull/2281))
- **fix(api/combos):** добавлен безопасный для API-ключа конечный пункт `GET /v1/combos`. ([#2300](https://github.com/diegosouzapw/OmniRoute/pull/2300))
- **fix(embeddings/registry):** добавлен DeepInfra в реестр провайдеров эмбеддингов. ([#2298](https://github.com/diegosouzapw/OmniRoute/pull/2298))
- **fix(opencode-zen):** флаг `qwen3.6-plus` и `qwen3.6-plus-free` с `targetFormat: "claude"`. ([#2292](https://github.com/diegosouzapw/OmniRoute/pull/2292))
- **fix(settings):** значение `debugMode` по умолчанию установлено в `true` для новых установок.
- **fix(sse):** удаление мертвого кода в `claudeCodeToolRemapper`. ([#2290](https://github.com/diegosouzapw/OmniRoute/pull/2290) — спасибо @thepigdestroyer)
- **fix(sse):** удаление устаревших `Content-Encoding`, `Content-Length`, `Transfer-Encoding` из ответов от сервера. ([#2291](https://github.com/diegosouzapw/OmniRoute/pull/2291) — спасибо @thepigdestroyer)
- **fix(migrations):** разрешение конфликтов версий и добавление схемы восстановления для порогов квот.

#### 2026-05-15

- **feat(cli):** CLI v4 — архитектура Commander.js, более 50 команд, интерактивный TUI, полный i18n (42 локали), система плагинов (Фазы 0–9). ([#2280](https://github.com/diegosouzapw/OmniRoute/pull/2280))
- **feat(skills):** публикация 3 операционных манифестов SKILL.md + запись AI Skills в панели управления. ([#2276](https://github.com/diegosouzapw/OmniRoute/pull/2276))
- **feat(termux):** поддержка Termux для Android — автоматическое обнаружение платформы Android для режима без графического интерфейса. ([#2273](https://github.com/diegosouzapw/OmniRoute/pull/2273) — спасибо @t-way666)
- **feat(limits):** квоты на окно по всем провайдерам с данными использования. ([#2267](https://github.com/diegosouzapw/OmniRoute/pull/2267) — спасибо @payne0420)
- **feat(api-keys):** настраиваемые ограничения скорости по умолчанию через переменную окружения `DEFAULT_RATE_LIMIT_PER_DAY`. ([#2266](https://github.com/diegosouzapw/OmniRoute/pull/2266) — спасибо @gleber)
- **feat(authz):** `managementPolicy` принимает API-ключи с областью `manage`. ([#2265](https://github.com/diegosouzapw/OmniRoute/pull/2265) — спасибо @gleber)
- **feat(mcp):** движок фильтрации дерева доступности MCP — сворачивает ≥30 повторяющихся соседних строк, экономия токенов 60-80%.
- **feat(auth):** токен HMAC-SHA256 идентификатора машины CLI для аутентификации без JWT/пароля.
- **feat(security):** уровни защиты маршрутов — 5 уровней: public/read-only/protected/always/local-only.
- **feat(compression):** `SHARED_BOUNDARIES` Caveman — все 6 языков × 3 интенсивности встраивают граничный пункт.
- **feat(runtime):** динамическая цепочка отката SQLite 5 шагов — встроенная → установленная в среде выполнения → ленивая установка → node:sqlite → sql.js.
- **feat(cli):** автономная системная лента с резервным вариантом PowerShell на Windows (`omniroute --tray`).
- **fix(providers/command-code):** отправка обязательных полей `skills` и `stream`. ([#2271](https://github.com/diegosouzapw/OmniRoute/pull/2271) — спасибо @ddarkr)
- **chore:** игнорирование артефактов `.playwright-mcp/`. ([#2269](https://github.com/diegosouzapw/OmniRoute/pull/2269) — спасибо @backryun)
- **chore:** уборка устаревших моделей из реестра провайдеров Windsurf. ([#2279](https://github.com/diegosouzapw/OmniRoute/pull/2279) — спасибо @backryun)
- **chore(deps):** обновления зависимостей node. ([#2259](https://github.com/diegosouzapw/OmniRoute/pull/2259) — спасибо @backryun)
- **build(deps):** обновление `mermaid` с 11.14.0 до 11.15.0. ([#2178](https://github.com/diegosouzapw/OmniRoute/pull/2178))

#### 2026-05-08 a 2026-05-14

- **feat(guardrails/vision-bridge):** добавление `VISION_BRIDGE_BASE_URL` + `VISION_BRIDGE_API_KEY` переменных окружения для переопределения не-Anthropic vision-bridge маршрутизации. ([#2232](https://github.com/diegosouzapw/OmniRoute/pull/2232))
- **feat(claude-web):** реализация сессионного исполнителя для Claude Web с автоматической аутентификацией. ([#2283](https://github.com/diegosouzapw/OmniRoute/pull/2283) — спасибо @oyi77)
- **refactor(@omniroute/opencode-provider):** полная переработка npm-хелпера — сборка с помощью tsup (CJS + ESM + `.d.ts`), корректный вывод схемы, дедупликация `baseURL`, валидация входных данных, 13 юнит-тестов. Версионировано как `0.1.0`.
- **BREAKING:** удалена поддержка Node 20.x. Минимальная версия Node теперь 22.22.2 (или 24.0.0+).
- **fix(auth):** добавлено принятие заголовка `x-api-key` в `extractApiKey` для соответствия политике Anthropic-native клиентов. ([#2225](https://github.com/diegosouzapw/OmniRoute/pull/2225))
- **fix(translator/claude-to-openai):** остановка включения `cache_creation_input_tokens` в `prompt_tokens`. ([#2215](https://github.com/diegosouzapw/OmniRoute/pull/2215))
- **fix(kiro):** усиление OpenAI-to-Kiro переводчика для соответствия API. ([#2251](https://github.com/diegosouzapw/OmniRoute/pull/2251) — спасибо @8mbe)
- **fix(models):** синхронизация управляемых псевдонимов моделей с видимостью моделей провайдера. ([#2250](https://github.com/diegosouzapw/OmniRoute/pull/2250) — спасибо @InkshadeWoods)
- **fix(models/cleanup):** выравнивание управляемой очистки моделей для импортированных моделей. ([#2261](https://github.com/diegosouzapw/OmniRoute/pull/2261) — спасибо @InkshadeWoods)
- **fix(executor/claude-code):** хранение метаданных tool-name round-trip в не-перечисляемом `_toolNameMap`. ([#2254](https://github.com/diegosouzapw/OmniRoute/pull/2254) — спасибо @Rikonorus)
- **fix(streaming):** удаление заголовков `Content-Encoding`, `Content-Length`, `Transfer-Encoding` из ответов SSE. ([#2253](https://github.com/diegosouzapw/OmniRoute/pull/2253) — спасибо @Rikonorus)
- **fix(security):** устранение уязвимостей CodeQL (ReDoS, криптографическая предвзятость, раскрытие стека вызовов, слабая хэширование паролей). ([#216](https://github.com/diegosouzapw/OmniRoute/issues/216), [#215](https://github.com/diegosouzapw/OmniRoute/issues/215), [#211](https://github.com/diegosouzapw/OmniRoute/issues/211), [#208](https://github.com/diegosouzapw/OmniRoute/issues/208), [#206](https://github.com/diegosouzapw/OmniRoute/issues/206), [#210](https://github.com/diegosouzapw/OmniRoute/issues/210))
- **fix(providers/blackbox-web):** добавление `BLACKBOX_WEB_VALIDATED_TOKEN` переменной окружения и разграничение ошибок токена 403. ([#2252](https://github.com/diegosouzapw/OmniRoute/pull/2252))
- **fix(auth):** `REQUIRE_API_KEY=false` невалидный Bearer больше не вызывает 401 для всего запроса. ([#2257](https://github.com/diegosouzapw/OmniRoute/pull/2257))
- **feat(resilience):** добавление панели управления model cooldowns с реальным временем, индивидуальным/массовым включением и автообновлением.
- **feat(resilience):** переключатель `useUpstream429BreakerHints`. ([#2133](https://github.com/diegosouzapw/OmniRoute/pull/2133) — спасибо @eleata)
- **feat(auto):** автоматическая маршрутизация без конфигурации с префиксом `auto/` — динамический виртуальный комбо из подключенных провайдеров с 6 вариантами профилей. ([#2131](https://github.com/diegosouzapw/OmniRoute/pull/2131) — спасибо @oyi77)
- **feat(kiro):** безголовый аутентификатор через kiro-cli SQLite, поддержка изображений, обработка переполнения инструментов, синхронизация списка моделей. ([#2129](https://github.com/diegosouzapw/OmniRoute/pull/2129) — спасибо @christlau)
- **feat(cursor):** отображение использования плана Cursor Pro на панели ограничений провайдера. ([#2128](https://github.com/diegosouzapw/OmniRoute/pull/2128) — спасибо @payne0420)
- **feat(mitm):** динатическое обнаружение пути к сертификату Linux для доверия сертификату MITM в разных дистрибутивах. ([#2134](https://github.com/diegosouzapw/OmniRoute/pull/2134) — спасибо @flyingmongoose)
- **feat(1proxy):** добавление отдельной вкладки настроек с поддержкой ротации прокси. ([#2135](https://github.com/diegosouzapw/OmniRoute/pull/2135) — спасибо @oyi77)
- **feat(responses):** понижение `background: true` до синхронного выполнения с предупреждением. ([#2164](https://github.com/diegosouzapw/OmniRoute/pull/2164) — спасибо @Yosee11)
- **feat(api):** агрегация метаданных комбо-моделей в конечной точке каталога. ([#2166](https://github.com/diegosouzapw/OmniRoute/pull/2166) — спасибо @faisalill)
- **feat(oauth):** завершение OAuth + API-token потоков для Windsurf и Devin CLI. ([#2168](https://github.com/diegosouzapw/OmniRoute/pull/2168) — спасибо @Zhaba1337228)
- **feat(antigravity):** поддержка пользовательского ID проекта Google Cloud. ([#2227](https://github.com/diegosouzapw/OmniRoute/pull/2227) — спасибо @nickwizard)
- **feat(cli):** Набор команд CLI — 5 новых команд управления, 3 API-конечные точки, генераторы конфигурации для 6 инструментов. ([#2240](https://github.com/diegosouzapw/OmniRoute/pull/2240) — спасибо @oyi77)
- **fix(sanitizer):** сохранение `reasoning_content` на сообщениях ассистента с `tool_calls`. ([#2140](https://github.com/diegosouzapw/OmniRoute/pull/2140) — спасибо @DavyMassoneto)
- **fix(catalog):** обеспечение того, что индивидуальные модели выставляют `context_length` через `getTokenLimit()` цепочку резервных копий. ([#2136](https://github.com/diegosouzapw/OmniRoute/pull/2136) — спасибо @herjarsa)
- **fix(docker):** удаление директории docs из `.dockerignore`. ([#2137](https://github.com/diegosouzapw/OmniRoute/pull/2137), [#2120](https://github.com/diegosouzapw/OmniRoute/pull/2120) — спасибо @hartmark)
- **fix(providers):** восстановление экспортов провайдера облачных агентов и импорта логгера. ([#2138](https://github.com/diegosouzapw/OmniRoute/pull/2138) — спасибо @backryun)
- **fix(providers):** удаление дублирующегося объявления `CLOUD_AGENT_PROVIDERS`. ([#2141](https://github.com/diegosouzapw/OmniRoute/pull/2141) — спасибо @backryun)
- **fix(translator):** сохранение `body.system` в openai→claude при отправке Claude Code в собственном формате. ([#2130](https://github.com/diegosouzapw/OmniRoute/pull/2130))
- **fix(authz):** классификация `/dashboard/onboarding` как PUBLIC для разблокировки мастера настройки. ([#2127](https://github.com/diegosouzapw/OmniRoute/pull/2127))
- **fix(i18n):** завершение переводов на Упрощенный Китайский. ([#2115](https://github.com/diegosouzapw/OmniRoute/pull/2115) — спасибо @boa-z)
- **fix(sse):** классификация ошибок лимита часов как QUOTA_EXHAUSTED. ([#2119](https://github.com/diegosouzapw/OmniRoute/pull/2119) — спасибо @clousky2020)
- **fix(sse):** исправление CC-совместимого моста потоковой передачи. ([#2118](https://github.com/diegosouzapw/OmniRoute/pull/2118) — спасибо @rdself)
- **fix(cliproxyapi):** обнаружение тел запросов, похожих на Anthropic, и маршрутизация на `/v1/messages`. ([#2165](https://github.com/diegosouzapw/OmniRoute/pull/2165) — спасибо @Brkic-Nikola)
- **fix(claudeHelper):** сохранение последних блоков мышления ассистента в неизменном виде. ([#2224](https://github.com/diegosouzapw/OmniRoute/pull/2224) — спасибо @NomenAK)
- **fix(deepseek):** сохранение `reasoning_content` через весь конвейер для моделей DeepSeek V4. ([#2231](https://github.com/diegosouzapw/OmniRoute/pull/2231) — спасибо @kang-heewon)
- **fix(chatcore):** остановка утечки учетных данных провайдера в заголовках ответа.
- **fix(export):** исключение таблиц телеметрии/истории использования из резервных копий JSON-конфигураций по умолчанию. ([#2125](https://github.com/diegosouzapw/OmniRoute/pull/2125))
- **build(deps):** регенерация `package-lock.json` для соответствия `http-proxy-middleware` 4.x. ([#2228](https://github.com/diegosouzapw/OmniRoute/pull/2228) — спасибо @NomenAK)

#### 2026-05-06 a 2026-05-07 (первоначальный выпуск v3.8.0)

- **feat(zed):** Поддержка Zed IDE Docker — когда OmniRoute работает в Docker, а Zed находится на хосте, поток импорта теперь возвращает 422 с `zedDockerEnvironment: true`, и панель управления автоматически разворачивает панель вручную импортированного токена (новый конечный пункт `POST /api/providers/zed/manual-import` с валидацией Zod). Включает утилиту обнаружения Docker (`/.dockerenv` + эвристика cgroup) и руководство по настройке по адресу [`docs/providers/ZED-DOCKER.md`](docs/providers/ZED-DOCKER.md). ([#2306])
- **feat(workflow):** `/implement-features` получает предварительный скрипт триажа (`scripts/features/feature-triage.mjs`), который классифицирует открытые запросы на функции в 8 категорий — свежие вопросы (<14d) остаются неактивными, чтобы дать сообществу время отреагировать, переопределение вовлеченности (≥5 👍 или ≥3 уникальных комментаторов, не являющихся ботами) поглощает ранние, обнаружение уже доставленных функций через объединенные PR, CHANGELOG и git log закрывает вопросы с указанием версии и ссылкой на PR, устаревшие `need_details/` (>30d) закрываются вежливо, устаревшие `defer/` (>90d) переоцениваются, а внешне закрытые вопросы автоматически очищают `_ideia/`. Файлы идей теперь содержат YAML frontmatter снимок, позволяющий выполнять инкрементную синхронизацию комментариев. 53 модульных теста покрывают новую логику.
- **feat(providers):** добавлен GitHub Models как бесплатный провайдер — GPT-5, o-series, DeepSeek-R1, Llama 4, Grok 3 с аутентификацией GitHub PAT и динамическим получением моделей из `api.github.com`. ([#2344](https://github.com/diegosouzapw/OmniRoute/pull/2344) — спасибо @oyi77)
- **feat(providers):** добавлен Hackclub AI как бесплатный провайдер — 30+ моделей, без необходимости предоставления кредитной карты, с возможностью аутентификации по API-ключу и поддержкой передачи моделей. ([#2339](https://github.com/diegosouzapw/OmniRoute/pull/2339) — спасибо @oyi77)
- **feat(providers):** добавлен исполнитель Microsoft Copilot Web — провайдер на основе WebSocket, который преобразует завершения чата OpenAI в проприетарный протокол событий Copilot с изоляцией сеанса пула на токен. ([#2340](https://github.com/diegosouzapw/OmniRoute/pull/2340) — спасибо @oyi77)
- **feat(routing):** LKGP хранит последний известный хороший идентификатор подключения `connectionId` вместе с провайдером — комбинированное маршрутирование теперь приоритезирует точное подключение, которое последнее успешно завершилось, с плавным переходом на уровень провайдера для старых записей. ([#2338](https://github.com/diegosouzapw/OmniRoute/pull/2338) — спасибо @oyi77)
- **feat(i18n):** добавлена поддержка азербайджанского языка (az / 🇦🇿) — новый локаль в `config/i18n.json` (источник истины), `src/i18n/messages/az.json` (строки интерфейса), `docs/i18n/az/` (полный набор документации), панель языков в README, индекс документации i18n и оба скрипта конвейера перевода (`generate-multilang.mjs`, `i18n_autotranslate.py`). Общее количество поддерживаемых языков: **42**.
- **feat(limits):** квоты на окно по всем провайдерам с данными об использовании — операторы могут устанавливать пороговые значения для каждой квоты на окно (например, `session=95%, weekly=80%`) с каскадным резолвером (подключение → провайдер по умолчанию → глобальный 98%) и нулевой задержкой при отсутствии конфигурации. Новая миграция 056, новый конечный пункт `GET /api/providers/quota-windows` и модальное окно ограничений в панели управления. ([#2267](https://github.com/diegosouzapw/OmniRoute/pull/2267) — спасибо @payne0420)
- **feat(api-keys):** настраиваемые ограничения скорости по умолчанию через переменную окружения `DEFAULT_RATE_LIMIT_PER_DAY` — заменяет жестко закодированное ограничение 1000/день резервной копией с валидацией Zod и сохранением безопасных значений по умолчанию для существующих развертываний. ([#2266](https://github.com/diegosouzapw/OmniRoute/pull/2266) — спасибо @gleber)
- **feat(authz):** `managementPolicy` принимает API-ключи с областью `manage` — позволяет управлять без браузера (создание провайдеров, установка ограничений скорости) программным способом. ([#2265](https://github.com/diegosouzapw/OmniRoute/pull/2265) — спасибо @gleber)
- **feat(termux):** поддержка Termux для Android в автономном режиме — автоматическое обнаружение платформы Android для автономного режима (без открытия браузера), перемещение `wreq-js` и `tls-client-node` в `optionalDependencies` для совместимости с ARM, отложенная загрузка прокси WS с плавным 503 при недоступности, установка `GYP_DEFINES` для сборки `better-sqlite3` ARM, увеличенное время сборки до 600с. ([#2273](https://github.com/diegosouzapw/OmniRoute/pull/2273) — спасибо @t-way666)
- **feat(deepseek-web):** полный исполнитель веб-API DeepSeek с решателем Keccak PoW (`DeepSeekHashV1`), потоковой передачей SSE и автоматической перезагрузкой сеанса через `ds_session_id`. ([#2295](https://github.com/diegosouzapw/OmniRoute/pull/2295) — спасибо @oyi77)
- **feat(cc-bridge):** DSL для трансформации системного блока с учетом конфигурации на уровне провайдера — операторы теперь могут настраивать трансформации системных подсказок на уровне провайдера через интерфейс настроек панели управления. ([#2286](https://github.com/diegosouzapw/OmniRoute/pull/2286), закрывает #2260 — спасибо @mrmm)
- **feat(batch):** глобальный кэш заголовков ограничения скорости с TTL 60с + 24-часовым окном повторной попытки — разделяет состояние ограничения скорости между последовательными пакетами и использует ограничения повторной попытки на основе времени для надежной обработки больших пакетов. ([#2299](https://github.com/diegosouzapw/OmniRoute/pull/2299) — спасибо @hartmark)
- **feat(providers):** улучшена поддержка провайдера Cohere, расширены модели и точно обновлены ограничения контекста OpenAI. ([#2313](https://github.com/diegosouzapw/OmniRoute/pull/2313) — спасибо @backryun)
- **feat(claude-web):** исполнитель Claude Web на основе сеанса с автоматической перезагрузкой аутентификации — позволяет получать прямой доступ к веб-API Claude без API-ключа. ([#2283](https://github.com/diegosouzapw/OmniRoute/pull/2283) — спасибо @oyi77)
- **feat(skills):** добавлено 5 манифестов навыков CLI + страницы AgentSkills / OmniSkills в панели управления — позволяет внешним агентам AI обнаруживать и вызывать возможности OmniRoute. ([#2284](https://github.com/diegosouzapw/OmniRoute/pull/2284))
- **feat(providers):** добавлен провайдер локального llama.cpp — `llama-cpp` (псевдоним `llamacpp`) добавлен в `LOCAL_PROVIDERS` и `SELF_HOSTED_CHAT_PROVIDER_IDS`; базовый URL по умолчанию `http://127.0.0.1:8080/v1`; API-ключ не требуется; использует исполнитель по умолчанию, совместимый с OpenAI ([#1980](https://github.com/diegosouzapw/OmniRoute/issues/1980))
- **feat(providers):** массовое добавление API-ключей с вкладками Single/Bulk.
- **feat(provider):** добавлен провайдер Gitlawb Opengateway (xiaomi-mimo + gmi-cloud) с поддержкой флага hasFree. ([#2314](https://github.com/diegosouzapw/OmniRoute/pull/2314) — спасибо @oyi77)
- **feat(ui):** всеобъемлющая переработка UX панели управления, включая простые/расширенные режимы для RTK/Caveman, удобочитаемые значки ошибок, общие компоненты InfoTooltip/PresetSlider, подзаголовки боковой панели и фильтры категорий провайдеров. ([#2315](https://github.com/diegosouzapw/OmniRoute/pull/2315), [#2316](https://github.com/diegosouzapw/OmniRoute/pull/2316) — спасибо @dhaern, @oyi77)
- **feat(i18n):** добавлены ключи простых/расширенных режимов и отсутствующие ключи фильтра провайдеров (`allProviders`, `audioProviders`, `showFreeOnly`).
- **feat(cli):** полная поддержка i18n — 42 локали, флаг `--lang`, команды `config lang get/set/list` для выбора языка CLI. ([#2285](https://github.com/diegosouzapw/OmniRoute/pull/2285))
- **feat(claude-code):** семантическая передача для полезных нагрузок Claude Code `/v1/messages` — сохраняет структуру `messages[]` клиента (блоки документов, цепочки tool_use/tool_result, cache_control, неизвестные типы содержимого) для нативной аутентификации Claude OAuth и маршрутов реле `anthropic-compatible-cc-*`, пропуская широкое нормализацию, которая могла бы переписать допустимую семантику Claude Code. ([#2351](https://github.com/diegosouzapw/OmniRoute/pull/2351) — спасибо @terence71-glitch)

```markdown
### Changed

- **CLI**: Архитектура переработана для использования Commander.js в качестве фреймворка. Монорепозиторий `bin/cli-commands.mjs` (2853 строки) удален — команды теперь находятся отдельно в `bin/cli/commands/`. Нет критичных изменений в обычном использовании; все ранее перечисленные подкоманды продолжают работать.

### Removed

- `bin/cli-commands.mjs` — заменен модульной структурой в `bin/cli/commands/`.
- `bin/cli/index.mjs` — заменен на `bin/cli/program.mjs` + `bin/cli/commands/registry.mjs`.
- `bin/cli/args.mjs` — заменен на нативную поддержку разбора аргументов от Commander.js.

- **refactor(@omniroute/opencode-provider):** полная переработка npm-хелпера. Артефакт `1.0.0` был неработоспособен — `index.js` реэкспортировался из `.ts` (незапускаемый при установке) и эмитированная форма не соответствовала схеме OpenCode `https://opencode.ai/config.json`. Новый релиз содержит реальный `tsup` сборку (CJS + ESM + `.d.ts`), корректный вывод по схеме (`npm: "@ai-sdk/openai-compatible"`, с каталогом `models`), дедупликацию `baseURL` (больше нет `/v1/v1`), валидацию входных данных, 13 юнит-тестов и полную документацию в [`docs/frameworks/OPENCODE.md`](docs/frameworks/OPENCODE.md). Версионирован как `0.1.0` для обозначения сброса до версии 1.0.
- **chore(npm):** [`@omniroute/opencode-provider@0.1.0`](https://www.npmjs.com/package/@omniroute/opencode-provider) опубликован в npmjs.com под новой организацией `@omniroute`. Установите с помощью `npm install --save-dev @omniroute/opencode-provider`.
- **BREAKING**: поддержка Node 20.x удалена. Минимальная версия Node теперь 22.22.2 (или 24.0.0+). Требуется из-за того, что http-proxy-middleware 4.x требует `node >=22.15.0`. Пользователи на Node 20 должны обновиться — см. поле `engines` в [`package.json`](package.json) и значок Node в README.

### Security

- **fix(oauth/windsurf):** Обновление токена Firebase в Windsurf теперь читает `WINDSURF_CONFIG.firebaseApiKey` вместо прямого чтения `process.env.WINDSURF_FIREBASE_API_KEY`.
- **fix(kiro/translator):** Беседа с приоритетом на ассистентах больше не сталкивается на одном `conversationId`.
- **fix(utils/publicCreds):** `decodePublicCred()` больше не скрыто изменяет необработанные учетные данные, которые не соответствуют `RAW_VALUE_PATTERN`.
- **fix(auth/extractApiKey):** Резервный вариант `x-api-key` теперь срабатывает только при наличии заголовка `anthropic-version`.
- **fix(providers/qoder):** Сообщение о разграничении OAuth+PAT теперь действительно отображается.
- **fix(authz/clientApi):** при `REQUIRE_API_KEY=false` неверный Bearer больше не вызывает 401 для всего запроса — переходит к анонимному (соответствует семантике флага "нет необходимости в аутентификации") с одним предупреждением в логе, содержащим замаскированный идентификатор ключа. Исправляет неожиданные 401, которые попадают в интеграции CLI (Codex Desktop auto-config, Hermes Agent), которые хранят устаревший Bearer в сохраненной конфигурации. (#2257)
```

```markdown
### Исправлено

- **fix(providers/llm7):** добавлен `llm7` в реестр исполнителей (`open-sse/config/providerRegistry.ts`). Провайдер был представлен в каталоге дашборда, но отсутствовал в таблице исполнителей, поэтому каждый тест подключения завершался ошибкой аутентификации. Теперь маршрутизируется через стандартный совместимый с OpenAI `https://api.llm7.io/v1/chat/completions` с необязательной аутентификацией по токену. (#2361)
- **fix(providers/cohere):** переключен Cohere upstream с `https://api.cohere.com/v2/chat` (собственная форма) на `https://api.cohere.com/compatibility/v1/chat/completions` (совместимый с OpenAI). Собственный конечный пункт возвращал `{ message: { content: [...] } }`, который валидатор теста комбо не мог прочитать, что приводило к `Provider returned HTTP 200 but no text content.` (#2360)
- **fix(combo/dispatch):** добавлены защитные `typeof target.modelStr === "string"` вокруг резервного поиска индекса LKGP и конструктора цели теста комбо. Записи комбо, у которых `modelStr` не удалось разрешить при маршрутизации (регрессия после #2338, добавленного LKGP на уровне учетной записи), ранее вызывали сбой запроса с `TypeError: e.startsWith is not a function`; теперь отображается чистая ошибка вместо этого. (#2359)
- **fix(rate-limiter):** Redis теперь опционален. При отсутствии `REDIS_URL` ограничитель скорости и кэш аутентификации API-ключей молча переходят на хранилище в памяти вместо спама `connect ECONNREFUSED 127.0.0.1:6379` для каждого запроса. Журналирование ошибок подключения также дублируется, чтобы журналы docker не заполнялись при длительных сбоях. Развертывания с одним экземпляром работают из коробки; развертывания с несколькими экземплярами продолжают использовать Redis, когда `REDIS_URL` предоставлен. (#2357)
- **fix(auto-routing):** остановлен `ReferenceError: getSettings is not defined` 500, который поднимался каждый запрос `auto` / `auto/*`. `src/sse/handlers/chat.ts` вызывал символ `getSettings` без импорта; заменен на уже импортированный `getCachedSettings` (такая же форма, плюс горячий путь авто-маршрутизации получает преимущества от кэша). (#2346)
- **fix(combo/validator):** рассматривать ответы от провайдеров, содержащие непустое поле `reasoning_content` (или `reasoning`), как допустимый вывод, даже если `content` равен null. Модели рассуждений, такие как `moonshotai/Kimi-K2.5-TEE`, `zai-org/GLM-5-TEE` и семейство QwQ, помещают свой ответ только в `reasoning_content` — валидатор качества отклонял их с `502: empty content` и вызывал ненужные резервные комбо. (#2341)
- **fix(docker):** теперь в обозревателе документации дашборда есть документы для показа. `.dockerignore` скрывал все файлы под `docs/` кроме `openapi.yaml`, поэтому встроенный в продукт `/docs/*` обозреватель выбрасывал `ENOENT: no such file or directory, open '/app/docs/...'` для каждой страницы. Теперь мы доставляем ~5 МБ английского markdown-дерева и все еще исключаем ~45 МБ переводов/скриншотов/растровых диаграмм, которые были первоначальной целью оптимизации. (#2348)
- **fix(account-fallback):** Ответы Anthropic OAuth (Claude Code Pro/Team) с кодом 429, содержащие фразы вроде `Usage Limit Reached`, `Claude Pro usage limit reached`, или `you've reached your usage limit`, теперь классифицируются как `QUOTA_EXHAUSTED` с 1-часовым охлаждением вместо `RATE_LIMIT_EXCEEDED` с ~5-секундным временным откладыванием. Ранее каждая учетная запись Claude Pro каскадировалась в цикл紧密ных повторных попыток до тех пор, пока 5-часовое окно подписки не сбрасывалось. Также учитывает абсолютные временные метки ISO, встроенные в тело ошибки (`Try again at 2026-05-17T10:00:00Z`), чтобы время охлаждения соответствовало заявленному временем восстановления провайдера. (#2321)
- **fix(ui/tooltip):** компонент `<Tooltip>` теперь отображается в портал React, привязанный к `document.body` по умолчанию, поэтому подсказки в модальных диалогах (редактор комбо и т.д.) больше не обрезаются родителями с `overflow:hidden`. Добавляет необязательный проп `multiline`, который меняет устаревший `whitespace-nowrap` на `max-w-xs whitespace-normal break-words` при длинной метке. Координаты ограничиваются областью просмотра, чтобы триггеры у правого края не выходили за пределы экрана. (#2352)
- **fix(claude):** избежать избыточного глубокого клонирования сообщений Claude Code во время подготовки семантического пропуска, улучшая эффективность памяти/CPU для больших историй. ([#2362](https://github.com/diegosouzapw/OmniRoute/pull/2362) — спасибо @terence71-glitch)
- **fix(streaming):** испускать ошибки потока, зависящие от протокола — `createDisconnectAwareStream()` теперь испускает блоки ошибок API Responses (`response.failed`) или Claude API (`event: error`) на основе протокола клиента вместо возврата к необработанным фрагментам Chat Completions, что решает ошибки разбора клиента на отключении во время потока. ([#2355](https://github.com/diegosouzapw/OmniRoute/pull/2355) — спасибо @dhaern)
- **fix(combos):** разрешены комбо с квадратными скобками (например, `Claude [1m]`), обновлены схемы валидации и закреплено точное поведение поиска комбо перед разбором суффикса модели. ([#2354](https://github.com/diegosouzapw/OmniRoute/pull/2354) — спасибо @congvc-dev)
- **fix(v1/messages):** `POST /v1/messages` теперь по умолчанию не потоковый, когда поле `stream` отсутствует и обнаружен формат источника Anthropic — предотвращает ошибки `STREAM_EARLY_EOF` от клиентов Anthropic SDK, которые опускают поле по спецификации. ([#2326](https://github.com/diegosouzapw/OmniRoute/pull/2326) — спасибо @thepigdestroyer)
- **fix(claude):** `fitThinkingToMaxTokens` ограничивает бюджет рассуждений верхней границей модели — устраняет HTTP 400 от Anthropic, когда `max_tokens + budget` превышает лимиты модели (например, 128K верхней границы Opus 4.7). ([#2327](https://github.com/diegosouzapw/OmniRoute/pull/2327) — спасибо @thepigdestroyer)
- **fix(codex):** приоритет рассуждений Codex теперь разрешает `modelEffort` перед `explicitReasoning` — выравнивается с ожидаемым приоритетом и исправляет несоответствия псевдонимов суффикса. ([#2335](https://github.com/diegosouzapw/OmniRoute/pull/2335) — спасибо @terence71-glitch)
- **fix(translator):** DeepSeek tool-call response lookup читает кэшированное рассуждение перед возвратом к пустой строке — сохраняет содержимое рассуждения в многоходовых потоках tool-call. ([#2349](https://github.com/diegosouzapw/OmniRoute/pull/2349) — спасибо @herjarsa)
- **fix(providers):** страница провайдеров больше не зависнет, если не настроены провайдеры — вместо пустого отфильтрованного списка отображается подсказка по настройке, позволяющая добавить первый провайдер. ([#2329](https://github.com/diegosouzapw/OmniRoute/pull/2329) — спасибо @slider23)
- **fix(usage):** извлекать плоские `cached_tokens` и `reasoning_tokens` из объектов использования, совместимых с OpenAI — провайдеры, такие как Xiaomi MiMo, которые возвращают эти поля на верхнем уровне вместо вложения в `prompt_tokens_details`/`completion_tokens_details`, теперь правильно отображаются в журналах вызовов и дашборде. ([#2350](https://github.com/diegosouzapw/OmniRoute/pull/2350) — спасибо @TF0rd)
- **chore(providers):** обновлен HuggingFace для использования нового конечного пункта `/v1/` с динамическим списком моделей (`router.huggingface.co/v1/`), удален устаревший статический список моделей. ([#2322](https://github.com/diegosouzapw/OmniRoute/pull/2322) — спасибо @backryun)
- **fix(security):** устранение предупреждений CodeQL ReDoS + URL sanitization.
- **fix(auth):** прекратить повторные попытки невосстановимых ошибок обновления токена и включить идентификатор подключения в проверку состояния токена.
- **fix(auth):** возвращать синтетические учетные данные для бесплатных провайдеров без аутентификации и показывать карточку без аутентификации в дашборде вместо модального окна OAuth.
- **fix(endpoint):** заменить вложенную `<button>` на `<div role=button>` в строках переключения туннеля для исправления предупреждений гидратации.
- **fix(claude):** защита сиротских пар tool_use/tool_result перед отправкой в провайдер, что устраняет критическую ошибку Anthropic 400 на обрезанных историях. ([#2312](https://github.com/diegosouzapw/OmniRoute/pull/2312) — спасибо @mrmm)
- **fix(ui):** удалить счетчик из кнопки пакетного удаления для более чистого интерфейса. ([#2309](https://github.com/diegosouzapw/OmniRoute/pull/2309) — спасибо @hartmark)
- **fix(sse):** удалить устаревшие заголовки `Content-Encoding`, `Content-Length` и `Transfer-Encoding` на не потоковом пересылке — исправляет усечение JSON на сжатых ответах Gemini, где клиенты, соблюдающие `Content-Length`, читают только байтовый счетчик сжатого содержимого распакованного полезного нагрузки, что приводит к `"Unterminated string in JSON"` ошибкам разбора. Соответствует RFC 7230 §6.1. ([#2264](https://github.com/diegosouzapw/OmniRoute/pull/2264) — спасибо @gleber)
- **fix(executor/claude-code):** хранить метаданные обратного хода имен инструментов в не перечисляемом `_toolNameMap`, чтобы они сохранялись в памяти, но были удалены `JSON.stringify()` — предотвращает утечку внутренних метаданных OmniRoute в провайдеры. ([#2254](https://github.com/diegosouzapw/OmniRoute/pull/2254) — спасибо @Rikonorus)
```

- **fix(streaming):** удаление заголовков `Content-Encoding`, `Content-Length` и `Transfer-Encoding` из ответов SSE — предотвращает повреждение при распаковке на стороне клиента, когда прокси передает текстовые потоковые события через nginx/caddy. ([#2253](https://github.com/diegosouzapw/OmniRoute/pull/2253) — спасибо @Rikonorus)
- **fix(kiro):** усиление OpenAI-to-Kiro переводчика для соответствия API: рекурсивное удаление `additionalProperties` и пустых `required: []` из схем инструментов; объединение последовательных сообщений от ассистента; добавление синтетического пользователя для разговоров, начинающихся с ассистента; преобразование результатов инструментов в инлайн-текст; установка `origin: "AI_EDITOR"` для всех пользовательских сообщений в истории; детерминированное кэширование сессий с помощью `uuidv5`. Закрывает #2213. ([#2251](https://github.com/diegosouzapw/OmniRoute/pull/2251) — спасибо @8mbe)
- **fix(models):** синхронизация управляемых псевдонимов моделей с видимостью моделей провайдера — удаление псевдонимов при скрытии/удалении моделей, пропуск создания псевдонимов для скрытых моделей при синхронизации, восстановление псевдонимов при отображении, защита от удаления псевдонимов, которые все еще действительны из другого соединения. ([#2250](https://github.com/diegosouzapw/OmniRoute/pull/2250) — спасибо @InkshadeWoods)
- **fix(models/cleanup):** выравнивание очистки управляемых моделей для импортированных моделей — уровень провайдера "Удалить все" теперь также удаляет хранилище доступных моделей; кнопка удаления псевдонима отображается только для строк с источником псевдонима; раздел совместимых моделей использует правильную логику удаления с учетом трех источников. ([#2261](https://github.com/diegosouzapw/OmniRoute/pull/2261) — спасибо @InkshadeWoods)
- **fix(auth):** принятие заголовка `x-api-key` в `extractApiKey`, чтобы клиенты Anthropic (Claude Code, `@anthropic-ai/sdk`) попадали в ту же политику по ключам, что и клиенты Bearer. Ранее эти запросы обрабатывались как анонимные, обходя политики модели/бюджета/ограничения скорости и отображаясь как `NULL` в `usage_history.api_key_id` (~50% трафика невидимо в Costs/Analytics). `Authorization: Bearer` по-прежнему имеет приоритет, если оба заголовка присутствуют (обратная совместимость). (#2225)
- **fix(translator/claude-to-openai):** прекращение включения `cache_creation_input_tokens` в `prompt_tokens`. Anthropic дополняет короткие запросы до 1024 токенов при создании кэша, поэтому короткий запрос `"hi"` мог быть отображен как ~2008 `prompt_tokens` и привести к занижению стоимости в Sub2API/NewAPI/OneAPI (~250x). `prompt_tokens` теперь соответствует "Total In" в дашборде (`input + cache_read`); `cache_creation_tokens` теперь доступен отдельно в `prompt_tokens_details.cache_creation_tokens` для аудита. (#2215)
- **fix(ui/claude-extra-usage):** уточнение текста уведомления о переключении, чтобы указать связь переключателя и его эффекта ("Claude extra-usage blocking enabled/disabled" вместо неоднозначного "blocked/allowed"). (#2157)
- **fix(providers/qoder):** устранение неоднозначности ошибки "Local CLI runtime is not installed", когда пользователь вставляет личный токен доступа, но соединение находится в режиме OAuth/CLI. Тестовый маршрут теперь отображает одно действие сообщение ("switch this connection to API Key auth") вместо каскадных ошибок CLI + 401. (#2247)
- **fix(dashboard/api-manager):** передача пользовательских идентификаторов провайдеров, совместимых с OpenAI-/Anthropic, через `getProviderDisplayName`, чтобы метка группировки моделей отображала `Compatible (openai)` вместо утечки исходного синтетического значения `openai-compatible-chat-<uuid>`. (#2021)
- **fix(providers/blackbox-web):** добавление `BLACKBOX_WEB_VALIDATED_TOKEN` и устранение неоднозначности ошибки 403 при работе с токеном. Blackbox `/api/chat` начал отклонять запросы, чье поле `validated` не совпадало с фронтенд-токеном `tk`, даже при наличии действительного cookie и активной подписки. Операторы с реальным токеном теперь могут установить переменную окружения; в противном случае предыдущий резервный токен с случайным UUID по-прежнему работает, и ошибка 403 с токен-специфическим телом теперь отображает однострочное сообщение "set BLACKBOX_WEB_VALIDATED_TOKEN" вместо общего сообщения "cookie expired". (#2252)
- **fix(guardrails/vision-bridge):** добавление `VISION_BRIDGE_BASE_URL` + `VISION_BRIDGE_API_KEY` для переопределения переменных окружения, чтобы вызовы vision-bridge, не связанные с Anthropic, могли быть направлены через собственный `/v1` OmniRoute, совместимый с OpenAI-эндпоинт Google's Gemini, OpenRouter или любой другой совместимой с OpenAI URL — вместо жесткого кодирования в `https://api.openai.com/v1` (что приводило к 401 для пользователей без ключа OpenAI, даже если они настроили `visionBridgeModel: "google/gemini-2.0-flash"`). Модели Anthropic сохраняют свой специальный путь. (#2232)
- **docs(security):** документирование нарушения условий использования `ANTIGRAVITY_CREDITS=always` в `STEALTH_GUIDE.md`, включая причину более агрессивного обнаружения Google при использовании и рекомендуемую позицию (`=retry`, Auto-Combo spread, ограничения RPM на уровне соединения). (#2246)
- **fix(translator/developer-role):** преобразование роли OpenAI `developer` → `system` по умолчанию для несемейных провайдеров OpenAI. Клиенты Codex/Responses API, обращающиеся к DeepSeek (и другим шлюзам, совместимым с OpenAI: MiniMax, Mimo, GLM, Fireworks, Together и т.д.), получали `400: unknown variant 'developer'`, потому что предыдущий стандарт сохранял `developer` для любого `targetFormat=openai` вверх по цепочке. Новый стандарт: сохранять только для `openai`/`azure-openai`/`azure`/`github` (и любых идентификаторов, содержащих `"openai"`); преобразовывать везде. Операторы все еще могут принудительно сохранить роль по модели через переключатель "Compatibility → preserveOpenAIDeveloperRole = true" в дашборде. (#2281)
- **fix(api/combos):** добавление безопасного для API-ключа эндпоинта `GET /v1/combos`, который отражает модель авторизации `/v1/models`. Ранее `/api/combos` был защищен управлением, блокируя только для чтения интеграции (например, плагин `opencode-omniroute-auth`), которые нуждаются в обогащении возможностей комбо из обычного Bearer API-ключа. Новый эндпоинт проектирует только общедоступные метаданные (имя, стратегия, идентификаторы моделей, providerId, описание) — внутренние детали маршрутизации, такие как `connectionId`, веса и метки, удалены. `/api/combos` (управление) остается без изменений. (#2300)
- **fix(embeddings/registry):** добавление DeepInfra в реестр провайдеров встраиваний. Пользовательские модели встраиваний на провайдере DeepInfra (например, `Qwen/Qwen3-Embedding-8B`, `BAAI/bge-large-en-v1.5`) не работали с ошибкой `Unknown embedding provider: deepinfra`, потому что реестр включал только Nebius/OpenAI/Together/Fireworks/NVIDIA и т.д. Теперь поставляется 8 популярных моделей встраиваний DeepInfra из коробки и маршрутизируется через `https://api.deepinfra.com/v1/openai/embeddings`. (#2298)
- **fix(opencode-zen):** добавление флага `qwen3.6-plus` и `qwen3.6-plus-free` с `targetFormat: "claude"`. Upstream opencode-zen возвращает тела SSE в формате Claude (`type: "message_start"`, без массива `choices`) для этих моделей Qwen3.6, даже когда запрос достигает конечной точки OpenAI-compatible `/chat/completions`, что приводит к сбоям Zod на стороне клиента (`expected "choices" (array), received undefined`). Маршрутизация через конечную точку `/messages` Claude + переводчик исправляет несоответствие форматов. (#2292)
- **fix(settings):** установка `debugMode` по умолчанию в `true` для новых установок — раздел Debug в боковой панели (Translator, Playground, Search Tools) был скрыт в новых установках, потому что `debugMode` не был в объекте настроек по умолчанию, что делало `data?.debugMode === true` равным `false`. Переключатель в System & Storage выглядел активным, но не имел эффекта до ручного установки. Теперь все разделы боковой панели видны из коробки.
- **fix(providers/command-code):** отправка обязательных полей `skills` и `stream` — обертка Command Code upstream теперь включает `skills: ""` и принудительно устанавливает `params.stream: true` для соответствия требованиям API upstream. Проверка подлинности по умолчанию: `deepseek/deepseek-v4-flash`. ([#2271](https://github.com/diegosouzapw/OmniRoute/pull/2271) — спасибо @ddarkr)
- **fix(sse):** удаление устаревших заголовков `Content-Encoding`, `Content-Length` и `Transfer-Encoding` из ответов upstream — предотвращает усечение JSON и `ZlibError` при передаче сжатых ответов провайдера через прокси. ([#2291](https://github.com/diegosouzapw/OmniRoute/pull/2291) — спасибо @thepigdestroyer)
- **fix(sse):** удаление мертвого кода с утечкой флага в `claudeCodeToolRemapper` — устраняет устаревший логический флаг, который мог вызывать неверное поведение инструментов при последующих запросах. ([#2290](https://github.com/diegosouzapw/OmniRoute/pull/2290) — спасибо @thepigdestroyer)
- **fix(ui):** полировка v3.8.0 — граница соединений, липкие вкладки, переводы на EN, тосты сохранения, каталог auto-combo. ([#2305](https://github.com/diegosouzapw/OmniRoute/pull/2305) — спасибо @mrmm)

- **fix:** удалить неявные ограничения запросов API — удаляет стандартные дневные/недельные/месячные ограничения (1K/5K/20K), которые неявно применяли 429 к API-ключам без явных настроек ограничений, что приводило к неожиданному ограничению скорости для операторов, которые не устанавливали пользовательские политики ограничения. ([#2289](https://github.com/diegosouzapw/OmniRoute/pull/2289) — спасибо @josephvoxone)
- **fix(auth+build):** Управление областью действия Bearer на маршрутах управления + ленивая загрузка решателя PoW DeepSeek — разблокирует удаленное использование MCP и автономные сборки Docker Next.js. ([#2308](https://github.com/diegosouzapw/OmniRoute/pull/2308) — спасибо @mrmm)
- **fix(migrations):** разрешить конфликт версий в слоте миграции 056, переименовав миграцию порогов квоты в 057, и добавить API пакетного удаления с поддержкой массовой очистки и интерфейса управления пакетами/файлами. ([#2294](https://github.com/diegosouzapw/OmniRoute/pull/2294) — спасибо @hartmark)
- **chore:** игнорировать артефакты `.playwright-mcp/` (логи ошибок CSP, снимки дерева доступности) — удаляет отслеживаемые артефакты тестов и добавляет каталог в `.gitignore`. ([#2269](https://github.com/diegosouzapw/OmniRoute/pull/2269) — спасибо @backryun)
- **chore:** убрать устаревшие модели из реестра провайдеров Windsurf. ([#2279](https://github.com/diegosouzapw/OmniRoute/pull/2279) — спасибо @backryun)
- **build(deps):** обновить `actions/checkout` с 4 до 6 в рабочих процессах CI. ([#2288](https://github.com/diegosouzapw/OmniRoute/pull/2288))
- **build(deps):** перегенерировать `package-lock.json` для соответствия обновлению `http-proxy-middleware` до версии 4.x. ([#2228](https://github.com/diegosouzapw/OmniRoute/pull/2228) — спасибо @NomenAK)
- **fix(streaming):** укрепить обнаружение готовности потока — распознавать события жизненного цикла API ответов OpenAI (`response.created`, `response.in_progress`, `response.output_item.added`) и начальные фрагменты завершения чата как сигналы готовности; переключить GLM с таймаута простоя на таймаут готовности; уплотнить интерфейс ограничений провайдера с резервными метками i18n; исправить предупреждение о динамическом импорте DeepSeek PoW; статическая локаль для предварительной отрисовки документации. ([#2317](https://github.com/diegosouzapw/OmniRoute/pull/2317) — спасибо @dhaern)
- **chore(providers):** обновить метаданные моделей провайдеров, отсортировать записи панели управления по имени отображения, исправить относительные ссылки и frontmatter генератора документации. ([#2318](https://github.com/diegosouzapw/OmniRoute/pull/2318) — спасибо @backryun)
- **chore(providers):** объединить записи провайдера Alibaba — объединить `alicode`/`alicode-intl` в общий массив `ALIBABA_DASHSCOPE_MODELS`, обновить 42 файла i18n llm.txt. ([#2319](https://github.com/diegosouzapw/OmniRoute/pull/2319) — спасибо @backryun)
- **chore:** сузить `.claude/` gitignore до файлов времени выполнения и не отслеживать `scheduled_tasks.lock`.
- **Docs:** 270 исправленных внутренних сломанных ссылок markdown.

### 🏆 v3.8.0 Hall of Fame — extended credits (post-release)

Следующие вкладки были внесены после первоначального выпуска v3.8.0 и дополняют список из более чем 55 участников сообщества ниже. Обновленные итоги:

| Contributor                                              | New PRs in this cycle                                                | Full v3.8.0 PR list                                                                                                  |
| :------------------------------------------------------- | :------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------- |
| [@oyi77](https://github.com/oyi77)                       | #2338, #2339, #2340, #2344, #2364, #2366, #2369, #2377, #2380, #2383 | (+ already listed: #2010, #2014, #2041, #2052, #2061, #2074, #2091, #2094, #2096, #2131, #2135, #2240, #2283, #2295) |
| [@backryun](https://github.com/backryun)                 | #2269, #2279, #2313, #2318, #2319, #2381                             | (+ already listed: #1992, #2033, #2088, #2123, #2138, #2141, #2150, #2177)                                           |
| [@thepigdestroyer](https://github.com/thepigdestroyer)   | #2326, #2327, #2370                                                  | (+ already listed: #2290, #2291)                                                                                     |
| [@mrmm](https://github.com/mrmm)                         | #2375, #2286 _(closes #2260)_, #2305, #2308, #2312                   | (consolidates the row)                                                                                               |
| [@dhaern](https://github.com/dhaern)                     | #2315, #2316, #2317, #2355                                           | (+ already listed: #2028, #2039, #2087, #2090)                                                                       |
| [@hartmark](https://github.com/hartmark)                 | #2294, #2299, #2309                                                  | (+ already listed: #2045, #2137)                                                                                     |
| [@gleber](https://github.com/gleber)                     | #2264, #2265, #2266                                                  | (+ already listed: #2103)                                                                                            |
| [@herjarsa](https://github.com/herjarsa)                 | #2349                                                                | (+ already listed: #2030, #2136, #2152)                                                                              |
| [@congvc-dev](https://github.com/congvc-dev)             | #2354, #2392                                                         | (+ already listed: #2004)                                                                                            |
| [@terence71-glitch](https://github.com/terence71-glitch) | #2335, #2351, #2362                                                  | (new contributor — 3 PRs)                                                                                            |
| [@TF0rd](https://github.com/TF0rd)                       | #2350                                                                | (new contributor — 1 PR)                                                                                             |
| [@slider23](https://github.com/slider23)                 | #2329, #2352                                                         | (new contributor — 2 PRs)                                                                                            |
| [@t-way666](https://github.com/t-way666)                 | #2273                                                                | (new contributor — 1 PR)                                                                                             |
| [@payne0420](https://github.com/payne0420)               | #2267                                                                | (+ already listed: #2082, #2128)                                                                                     |
| [@Rikonorus](https://github.com/Rikonorus)               | #2253, #2254                                                         | (new contributor — 2 PRs)                                                                                            |
| [@8mbe](https://github.com/8mbe)                         | #2251                                                                | (new contributor — 1 PR)                                                                                             |
| [@InkshadeWoods](https://github.com/InkshadeWoods)       | #2250, #2261                                                         | (+ already listed: #2202)                                                                                            |
| [@clousky2020](https://github.com/clousky2020)           | #2412                                                                | (+ already listed: 15 PRs)                                                                                           |
| [@benzntech](https://github.com/benzntech)               | #2408                                                                | (+ already listed: 8 PRs)                                                                                            |

Также благодарим **@app/dependabot** за поддержание актуальности нашего дерева зависимостей через #2178, #2228, #2288, #2397, #2398, #2399.

---

### Полные детали — функции релиза (2026-05-15)

- **feat(providers):** расширенные возможности для Pollinations, MiniMax, Together и Replicate в реестрах Video, Audio TTS и Transcription. ([#2369](https://github.com/diegosouzapw/OmniRoute/pull/2369) — спасибо @oyi77)
- **feat(providers):** добавлен Veo AI Free в качестве веб-обёртки для генерации видео, изображений и TTS без API-ключа. ([#2366](https://github.com/diegosouzapw/OmniRoute/pull/2366) — спасибо @oyi77)
- **feat(providers):** добавлен Replicate в качестве бесплатного провайдера для OpenAI-совместимого вывода с моделями сообщества. ([#2364](https://github.com/diegosouzapw/OmniRoute/pull/2364) — спасибо @oyi77)
- `feat(mcp): движок фильтрации дерева доступности MCP` — сворачивает ≥30 повторяющихся соседних строк, сохраняет якоря `[ref=eXX]`, экономия 60-80% на выводах снимков браузера (Задача 1)
- `docs(skills): публикация 10 манифестов SKILL.md для внешних AI-агентов` — нулевое трение при онбординге для Claude Desktop, ChatGPT, Cursor, Cline (Задача 2)
- `feat(cli): автономный системный трей с резервным вариантом PowerShell на Windows` — без Electron; `omniroute --tray`; автозапуск через LaunchAgent/.desktop/registry (Задача 3)
- `feat(auth): токен CLI machine-ID HMAC-SHA256` — нулевое трение локальной аутентификации без JWT/пароля; loopback-only; сравнение за постоянное время (Задача 4)
- `feat(security): уровни защиты маршрутов` — 5 уровней: public/read-only/protected/always/local-only; маршруты с возможностью запуска принудительно применяют loopback даже с действительным JWT (Задача 5)
- `feat(compression): общие границы Caveman` — все 6 языков × 3 интенсивности встраивают пункт границы; исправлен порядок проверки `alreadyApplied` (Задача 6)
- `feat(runtime): динамическая цепочка отката SQLite 5 шагов` — встроенная → установленная в runtime → ленивая установка → node:sqlite → sql.js; проверка магических байтов (ELF/Mach-O/PE) (Задача 7)
- `docs/ux: маркетинг первого/второго/третьего уровня, тур по онбордингу, виджет дашборда` — ASCII-диаграмма уровня в README, `docs/marketing/TIERS.md`, шаг TierTour онбординга, виджет Tier Coverage (Задача 8)
- `docs(comparison): OMNIROUTE_VS_ALTERNATIVES.md` — объективное сравнение с LiteLLM, OpenRouter, Portkey

### Изменено

- `getDbInstance()` требует предварительного вызова `ensureDbInitialized()` — запуск сервера автоматически ожидает его (см. примечания к релизу для миграции)
- Caveman-промпты встраивают `SHARED_BOUNDARIES` дословно (LITE/FULL/ULTRA × 6 языков)
- Улучшен раздел "Why OmniRoute?" в README с ASCII-диаграммой 3-х уровней и таблицей сравнения
- Мастер онбординга получает дополнительный шаг "How It Works" с туром по уровням (после Welcome, перед Security)
- Главный дашборд показывает виджет "Tier coverage" (количество настроенных и активных маршрутов по уровням)

### Безопасность

- Hard Rule #15: маршруты с возможностью запуска должны вызывать `assertRouteAllowed(req)` (CLAUDE.md)
- CLI-токен отклоняется на нелокальных хостах даже при правильном HMAC
- Защищенные маршруты (`always`) (shutdown, db export) отклоняют CLI-токены безусловно

### Документация

- `docs/security/CLI_TOKEN.md`
- `docs/security/ROUTE_GUARD_TIERS.md`
- `docs/ops/SQLITE_RUNTIME.md`
- `docs/marketing/TIERS.md`
- `docs/comparison/OMNIROUTE_VS_ALTERNATIVES.md`
- `docs/releases/v3.8.0.md`

---

### Зависимости

- **chore(deps):** обновление зависимостей node — обновление нескольких зависимостей времени выполнения и разработки до последних патчей и минорных версий. ([#2259](https://github.com/diegosouzapw/OmniRoute/pull/2259) — спасибо @backryun)

### Полные детали — функции и исправления релиза (2026-05-06 до 2026-05-14)

#### ✨ Новые функции

- **feat(providers):** добавлен провайдер Command Code (#2199 — спасибо @ddarkr)
- **feat(providers):** добавлена специфическая для ModelScope обработка ошибок 429 и логика повторной попытки (#2202 — спасибо @InkshadeWoods)
- **feat(providers):** обновлен каталог моделей провайдера Gemini CLI (#2196 — спасибо @nickwizard)
- **feat(antigravity):** интеграция провайдера Antigravity с динамическим расчетом `maxOutputTokens`, пересмотром отпечатка идентичности и санитизацией полезной нагрузки конверта Cloud Code (#2055, #2063)
- **feat(gemini-cli):** добавлена поддержка пользовательского projectId для транспорта Gemini CLI (UI, DB, executor) (#1991)
- **feat(providers):** добавлена поддержка провайдера KIE media с динамическим опросом, текстовыми моделями и расширенным каталогом видео моделей (#2009 — спасибо @wauputr4)
- **feat(providers):** добавлена поддержка провайдера Z.AI с обработкой квоты GLM и новыми метками квоты — спасибо @JxnLexn
- **feat(providers):** добавлено 9 новых бесплатных провайдеров AI — LLM7, Lepton, Kluster, UncloseAI, BazaarLink, Completions, Enally, FreeTheAi (#2096 — спасибо @oyi77)
- **feat(providers):** пакетное удаление соединений провайдеров через мульти-выбор чекбоксов (#2094 — спасибо @oyi77)
- **feat(cursor):** полное соответствие OpenAI — вызовы инструментов, потоковая передача и управление сеансами (#2082 — спасибо @payne0420)
- **feat(cursor):** отображение использования плана Cursor Pro на панели ограничений провайдера (#2128 — спасибо @payne0420)
- **feat(cli):** комплексное улучшение CLI с 20+ новыми командами, включая `omniroute providers`, `omniroute combos`, `omniroute doctor` (#2074 — спасибо @oyi77)
- **feat(cli):** добавлены модульные команды настройки CLI и управления провайдерами (#2046 — спасибо @wauputr4)
- **feat(mcp):** добавлена функция мониторинга квоты и ограничений DeepSeek (#2089 — спасибо @HoaPham98)
- **feat(circuit-breaker):** классификация ошибок 429 и применение перерыва по видам (#2116 — спасибо @eleata)
- **feat(multi):** маршрутизация с учетом манифеста — W1-W4 завершена (#2014 — спасибо @oyi77)
- **feat(combos):** добавлена стратегия маршрутизации с учетом сброса для провайдеров на основе квоты — спасибо @JxnLexn
- **feat(combo):** добавлено поле ввода `context_length` в форму редактирования комбо (#2047 — спасибо @ddarkr)
- **feat(combo):** добавлено `fallbackDelayMs` в конфигурацию комбо и связанные настройки — спасибо @JxnLexn
- **feat(chat):** динатическое обнаружение ограничений инструментов с проактивной обрезкой (#2061 — спасибо @oyi77)
- **feat(chat):** добавлено `STREAM_READINESS_TIMEOUT_MS` и интеграция в обработку чата — спасибо @JxnLexn
- **feat(chat):** улучшена обработка ошибок для емкости семафора с логикой резервного копирования — спасибо @JxnLexn
- **feat(sse):** обновлен образ OAuth для Claude с claude-cli/2.1.131 (#2011 — спасибо @Tentoxa)
- **feat(github):** добавлено `targetFormat: openai-responses` для всех моделей GitHub (#2122 — спасибо @abhinavjnu)
- **feat(api):** настройка через API-вызовы — открытые маршруты управления для Bearer-ключей с областью manage (#2103 — спасибо @gleber)
- **feat(api):** обновлен тайм-аут прокси API-моста до 600,000 мс (#2019 — спасибо @JxnLexn)
- **feat(api):** агрегация метаданных моделей комбо в конечной точке каталога — `buildComboCatalogMetadata()` встраивает contextLength, стратегию и количество целей для записей комбо (#2166 — спасибо @faisalill)
- **feat(usage):** добавлен раздел использования сервиса, аналитика быстрого сервиса Codex и учет быстрого уровня — спасибо @JxnLexn
- **feat(qdrant):** обнаружение моделей встраивания (#2086 — спасибо @rafacpti23)
- **feat(auth):** липкий маршрут для Codex на уровне сеанса (#1887)
- **feat(oauth):** завершены OAuth-потоки Windsurf и Devin CLI + API-токен — WindsurfExecutor (gRPC-web/protobuf), DevinCliExecutor (ACP JSON-RPC 2.0 через stdio), карта псевдонимов моделей, конфигурация провайдера OAuth (#2168 — спасибо @Zhaba1337228)
- **feat(inworld):** улучшена поддержка TTS Inworld (#2123 — спасибо @backryun)
- **feat(kiro):** аутентификация без головы через SQLite kiro-cli, поддержка изображений, обработка переполнения инструментов и синхронизация списка моделей (#2129 — спасибо @christlau)
- **feat(auto):** автоматическое маршрутирование без настройки с префиксом `auto/` — динамическое виртуальное комбо из подключенных провайдеров с 6 вариантами профилей (кодирование, быстрое, дешевое, оффлайн, умное, lkgp), вкладка аналитики и интерфейс настроек (#2131 — спасибо @oyi77)
- **feat(resilience):** добавлена панель управления перерывами моделей с реальным временем, индивидуальным/пакетным повторным включением и автоматической перезагрузкой (#2146 — спасибо @rafacpti23)
- **feat(resilience):** переключатель `useUpstream429BreakerHints` — политика по умолчанию для доверия подсказкам 429 от вышестоящего уровня на уровне перерыва цепи с трисоставной семантикой PATCH (#2133 — спасибо @eleata)
- **feat(search):** добавлен Ollama Search как провайдер веб-поиска с интеграцией реестра и проверкой (#2176 — спасибо @andrewmunsell)
- **feat(search):** добавлен поиск Z.AI Coding Plan через интеграцию протокола MCP (#2238 — спасибо @andrewmunsell)
- **feat(debug):** настраиваемые ограничения обрезки журнала чата через переменные среды (`CHAT_LOG_TEXT_LIMIT`, `CHAT_LOG_ARRAY_TAIL_ITEMS`, `CHAT_LOG_MAX_DEPTH`, `CHAT_LOG_MAX_OBJECT_KEYS`) и режим `CHAT_DEBUG_FILE` для необработанных JSON-полезных нагрузок (#2156 — спасибо @bypanghu)
- **feat(responses):** понижение `background: true` до синхронного выполнения с предупреждением вместо выброса `unsupportedFeature` (#2164 — спасибо @Yosee11)
- **feat(mitm):** динатическое обнаружение пути к сертификату Linux для мультидистрибутивного доверия сертификату MITM (Debian, Arch/CachyOS, Fedora/RHEL, openSUSE) с внедрением базы данных браузера NSS (#2134 — спасибо @flyingmongoose)
- **feat(1proxy):** добавлена выделенная вкладка настроек с поддержкой ротации прокси (#2135 — спасибо @oyi77)
- **feat(antigravity):** поддержка пользовательского идентификатора проекта Google Cloud для провайдера Antigravity (#2227 — спасибо @nickwizard)
- **feat(cli):** Набор интеграции CLI — 5 новых команд управления (`config`, `status`, `logs`, `update`, `provider`), 3 API-конечные точки, генераторы конфигураций для 6 инструментов (Claude, Cline, Codex, Continue, KiloCode, OpenCode), автоматическое маршрутирование `auto/`, и пакет npm `@omniroute/opencode-provider` (#2240 — спасибо @oyi77)

### 🐛 Исправления ошибок

- **fix(pricing):** сделать `getPricingForModel` полностью регистронезависимым, чтобы пользовательские цены корректно отражались в расчетах стоимости новых входящих запросов
- **fix(gemini):** предотвратить удаление `functionDeclarations` санитайзером, когда присутствует инструмент `googleSearch` (#2077)
- **fix(pollinations):** добавить флаг `jsonMode: true` в преобразование запроса для обеспечения корректной структуры JSON от API Pollinations (#2109)
- **fix(docker):** обновить Dockerfile для копирования директории `/docs` во время сборки, обеспечивая доступность каталога API во время выполнения (#2083)
- **fix(docker):** включить спецификацию OpenAPI в образ времени выполнения (#2007 — спасибо @tatsster)
- **fix(providers):** удалить специфичные для OpenAI поля в переводчике Kiro для предотвращения ошибок 400 (#2037)
- **fix(kiro):** нормализовать полезные нагрузки использования инструментов для предотвращения ошибок 400 от агентов (#2104 — спасибо @rilham97)
- **fix(kiro):** объединить смежные ходы истории пользователя после нормализации ролей (#2105 — спасибо @Gioxaa)
- **fix(ui):** решить проблемы с контрастом текста для предупреждающего баннера нулевой конфигурации в светлом режиме (#2050)
- **fix(core):** корректно внедрить глобальный системный запрос в конвейер завершения чата (#2080)
- **fix(core):** восстановить адаптивные настройки мышления Claude Code и исправить регрессию транскрипции аудио
- **fix(routing):** добавить отсутствующие перезаписи v1beta в next.config для решения проблемы 404 на конечной точке моделей Gemini (#2102)
- **fix(routing):** исправить маршрутизацию GPT-5.5 для установок только с Codex (#2054 — спасибо @guanbear)
- **fix(routing):** добавить нечеткое авто-комбо маршрутирование для префикса модели `auto/*` (#2010 — спасибо @oyi77)
- **fix(cache):** оптимизировать логику сохранения cache_control и явно выровнять схему инструментов с ожиданиями верхнего уровня Claude Code
- **fix(db):** сохранить путь к базе данных SQLite по умолчанию в Windows для предотвращения потери данных (#1973)
- **fix(db):** уменьшить нагрузку на горячий путь сохранения (#2039 — спасибо @dhaern)
- **fix(db):** решить конфликт миграции путем перенумерации перекрывающихся записей миграции (#2041 — спасибо @oyi77)
- **fix(settings):** решить проблему сохранения псевдонимов моделей, предотвращающую обновления UI (#2018)
- **fix(routing):** динамически фильтровать авто-разрешение моделей по активным подключениям провайдеров для предотвращения мертвого маршрутирования (#2029)
- **fix(embeddings):** добавить совместимость встраиваний Google Gemini через сопоставление конечных точек, совместимых с OpenAI (#2006)
- **fix(sse):** предотвратить корреляцию нескольких учетных записей Claude OAuth через metadata.user_id (#2053 — спасибо @Tentoxa)
- **fix(sse):** предотвратить переопределение маски идентичности Claude Code и исправить устойчивость резервного копирования (#2053 — спасибо @Tentoxa)
- **fix(sse):** классифицировать ошибки исчерпания квот в час как QUOTA_EXHAUSTED (#2119 — спасибо @clousky2020)
- **fix(sse):** исправить мост потоковой передачи, совместимый с CC (#2118 — спасибо @rdself)
- **fix(antigravity):** санитизировать полезные нагрузки облачного кода Claude (#2090 — спасибо @dhaern)
- **fix(antigravity):** добавить дуплексное полудуплексное соединение для потоковых тел — спасибо @Gi99lin
- **fix(antigravity):** выровнять протокол и поведение идентификации с официальным AM — спасибо @Gi99lin
- **fix(chatgpt-web):** передать прокси через нативный tls-client (#2022, #2023 — спасибо @xssdem)
- **fix(codex):** раскрыть нативные идентификаторы моделей в каталоге (#2012 — спасибо @Tr0sT)
- **fix(glm):** добавить специализированный транспорт для кодирования (#2087 — спасибо @dhaern)
- **fix(compression):** поддерживать входные данные Responses и расширить правила сжатия на испанском (#2028 — спасибо @dhaern)
- **fix(catalog):** автоматически рассчитать длину контекста комбо из ограничений целевой модели (#2030 — спасибо @herjarsa)
- **fix(api):** исправить аналитику использования и идентичность ключа API (#2008, #2092 — спасибо @AveryanAlex, @yoviarpauzi)
- **fix(api-key):** разрешить буквы Unicode в проверке имени ключа API (#1996 — спасибо @rodrigogbbr-stack)
- **fix(auth):** разрешить загрузку без пароля (#2048 — спасибо @tces1)
- **fix(proxy):** очистить избыточность страницы прокси и исправить ошибку пустого тела синхронизации 1proxy (#2052 — спасибо @oyi77)
- **fix(dashboard):** решить отображение неизвестного плана в ограничениях провайдера — спасибо @congvc-dev
- **fix(usage):** добавить расширяемое отображение CURRENCY_SYMBOLS для валют deepseek
- **fix(runtime):** укрепить обработку таймера и резервное копирование ценообразования модели
- **fix(i18n):** завершить переводы на упрощенный китайский (#2115 — спасибо @boa-z)
- **fix(mitm):** добавить установку сертификата для Linux и пропустить пароль sudo при наличии root (#1999 — спасибо @NekoMonci12)
- **fix(mitm):** предотвратить загрузку заглушки во время выполнения через модуль обхода — спасибо @NekoMonci12
- **fix:** удалить заголовок Anthropic-Beta из не-Anthropic провайдеров для исправления загрязнения идентичности (#1989)
- **fix(cli):** решить проблему загрузки .env для глобальных установок npm
- **fix(authz):** классифицировать `/dashboard/onboarding` как PUBLIC для разблокировки мастера настройки (#2127)
- **fix(chatcore):** прекратить утечку учетных данных провайдера в заголовках ответа
- **fix(analytics):** точное SQL-соответствие для моделей с префиксом `auto/`
- **fix(export):** исключить таблицы telemetry/usage-history из резервных копий JSON конфигурации по умолчанию для предотвращения неограниченного роста файлов (#2125)
- **fix(translator):** сохранить `body.system` в переводчике openai→claude при отправке нативного массива систем Anthropic через /chat/completions — исправляет регрессию v3.7.9, где системный запрос был молча удален, что привело к ошибке Anthropic 429 (#2130)
- **fix(sanitizer):** сохранить `reasoning_content` на сообщениях ассистента с `tool_calls` или `function_call` — исправляет ошибки 400 при возврате Kimi и других провайдеров, поддерживающих мышление, когда reasoning_content был некорректно удален (#2140 — спасибо @DavyMassoneto)
- **fix(catalog):** убедиться, что отдельные (не комбо) модели раскрывают `context_length` через цепочку резервных копий `getTokenLimit()` — предотвращает возврат OpenCode и других клиентов к консервативному ограничению ~4000 токенов (#2136 — спасибо @herjarsa)
- **fix(docker):** удалить директорию docs из `.dockerignore`, чтобы документация каталога API была доступна во время выполнения внутри контейнеров (#2137, #2120 — спасибо @hartmark)
- **fix(types):** систематическое устранение типов `any` в 8 основных файлах — `antigravity.ts`, `accountFallback.ts`, `usage.ts`, `geminiHelper.ts`, `error.ts`, `apiKeys.ts`, `settings.ts`, `logger.ts` (#2137 — спасибо @hartmark)
- **fix(providers):** восстановить экспорты провайдера облачного агента и импорт логгера (#2138 — спасибо @backryun)
- **fix(providers):** удалить дублирующееся объявление `CLOUD_AGENT_PROVIDERS`, переместить псевдонимы моделей Kiro dash→dot в `PROVIDER_MODEL_ALIASES` и обрезать устаревшие записи реестра Kiro (#2141 — спасибо @backryun)
- **fix:** Следовать спецификации OpenAI, обрабатывать регулирование в пакетном режиме и исправлять интерфейс (#2045)
- **fix(cliproxyapi):** проверять `/v1/models` на работоспособность, когда у CPA 6.x нет конечной точки `/health` (#2189 — спасибо @Brkic-Nikola)
- **fix(cliproxyapi):** обнаруживать тела запросов, похожие на Anthropic, и маршрутизировать на `/v1/messages`, удалять лишние Capy, и циклически преобразовывать перезаписи `mcp_*` в `Mcp_*` (#2165 — спасибо @Brkic-Nikola)
- **fix(cliproxyapi):** обнаруживать форму Anthropic на минимальных телах Capy (#2192 — спасибо @Brkic-Nikola)
- **fix(stream):** пропустить `[DONE]` для клиентов SSE Claude (#2190 — спасибо @Brkic-Nikola)
- **fix(claudeHelper):** выводить поле `data` на `redacted_thinking`, удалить ложную подпись (#2191 — спасибо @Brkic-Nikola)
- **fix(modelSpecs):** ограничить бюджет мышления для Claude Opus 4.6 / 4.7 / Sonnet 4.6 (#2197 — спасибо @Brkic-Nikola)
- **fix(reasoning-cache):** включить xiaomi-mimo в обнаружение провайдера/модели при повторном воспроизведении (#2198 — спасибо @Brkic-Nikola)
- **fix(kiro):** синтезировать минимальную схему инструментов, когда `body.tools` опущен, но история сообщений содержит `tool_calls`, предотвращая ошибки 400 от Claude Code и OpenCode (#2149 — спасибо @Gioxaa)
- **fix(kiro):** избегать классификации высоконагруженных 429 как исчерпания квоты — использовать `classify429FromError` для предотвращения преждевременного деактивации учетной записи (#2153 — спасибо @Gioxaa)
- **fix(responses):** распространять массив `include` (например, `reasoning.encrypted_content`) во время перевода API Chat→Responses, исправляя сломанную панель мышления в Codex/OpenCode (#2154 — спасибо @Gioxaa)
- **fix(responses):** выводить резюме мышления как `delta.reasoning_content` (плоский) вместо `delta.reasoning.summary` (вложенный) для совместимости с клиентом Chat Completions (#2159 — спасибо @Gioxaa)
- **fix(cloudflare):** добавить блокировку сериализации записи файла состояния для предотвращения состояний гонки в `cloudflaredTunnel.ts` (#2156 — спасибо @bypanghu)
- **fix(providers):** разрешить провайдерам с необязательными ключами проходить тест подключения (#2169 — спасибо @andrewmunsell)
- **fix(providers):** исправить запросы и состояние панели управления провайдеров Pollinations

- **fix(providers):** исправлена обработка подключения провайдера Azure AI Foundry (#2236 — спасибо @one-vs)
- **fix(providers/command-code):** исправлен формат запроса валидации для API Command Code (#2243 — спасибо @ddarkr)
- **fix(antigravity):** удалено `generationConfig.thinkingConfig` для моделей Claude, маршрутизируемых через Antigravity, чтобы предотвратить ошибки на стороне сервера (#2217 — спасибо @NomenAK)
- **fix(antigravity):** загрузка проекта через `loadCodeAssist` + `fetchAvailableModels` в качестве резервного варианта для надежного запуска (#2219 — спасибо @NomenAK)
- **fix(rateLimit):** никогда не вызывать `.stop()` во время сброса времени выполнения, вместо этого очищать кэш, чтобы предотвратить устаревшее состояние ограничения скорости (#2218 — спасибо @NomenAK)
- **fix(ModelSync):** общий шлюз готовности loopback + принудительное использование IPv4 для предотвращения сбоев синхронизации моделей на хостах с двойным стеком (#2221 — спасибо @NomenAK)
- **fix(proxyFetch):** повторить попытку один раз при сбое диспетчера undici перед переходом на родной резервный вариант (#2222 — спасибо @NomenAK)
- **fix(model):** локальные псевдонимы переопределяют вывод модели через прокси-провайдера, чтобы предотвратить неверное разрешение модели (#2223 — спасибо @NomenAK)
- **fix(claudeHelper):** сохранять последние блоки мышления ассистента в неизменном виде, чтобы предотвратить ошибки HTTP 400 от Anthropic (#2224 — спасибо @NomenAK)
- **fix(deepseek):** сохранять `reasoning_content` через весь конвейер для моделей DeepSeek V4 — предотвращает потерю контекста рассуждений в многоходовых разговорах (#2231 — спасибо @kang-heewon)
- **fix(sse-heartbeat):** keepalives с учетом формы поддерживают живые потоки через строгие прокси (#2233 — спасибо @NomenAK)
- **fix(translator):** преобразовать `submit_pr_review` `functionalChanges`/`findings` в массивы, чтобы предотвратить ошибки схемы на стороне сервера (#2242 — спасибо @NomenAK)
- **fix(api):** валидировать полезную нагрузку удаления модели cooldown
- **fix(ci):** запускать шлюз покрытия последовательно, выровнять устойчивость и проверки мышления, выровнять тесты мышления облачного кода и каталога моделей

### 🔒 Безопасность

- **fix(security):** устранение уязвимостей CodeQL (ReDoS, смещение криптографии, раскрытие трассировки стека и слабая хэширование паролей) (#216, #215, #211, #208, #206, #210)
- **fix(security):** очистка сообщений об ошибках в маршрутах API для предотвращения раскрытия трассировки стека (CodeQL js/stack-trace-exposure) (#2209)
- **fix(security):** устранение пути обратной связи в валидации регулярных выражений в основной очистке сжатия (#1990)
- **fix(core):** усиление обработки входных данных и стабилизация для краевых случаев сжатия подсказок

### 📝 Документация

- **docs:** добавлены таблицы конкурентного маркетинга и оптимизации SEO/AEO в README (#2091)
- **docs:** обновление провайдеров, каталогов моделей и документации для версии v3.8.0 (#2088)
- **docs:** обновление Claude MD и обновление максимального контекста GLM-CN до 200k (#2027)
- **docs(env):** добавлено `GITLAB_DUO_OAUTH_CLIENT_ID` в `.env.example` (#2031)
- **docs:** добавлена ссылка на группу Brazilian WhatsApp в README (#2201 — спасибо @rafacpti23)

### 🔧 Улучшения

- **refactor(executor):** хук `sanitizeReasoningEffortForProvider()` в `BaseExecutor.execute()` — понижает `xhigh`→`high` для неподдерживающих провайдеров, удаляет усилия для моделей mistral/devstral и github claude (#2162 — спасибо @hachimed)
- **refactor(translator):** удалить избыточную защиту провайдера из заполнителя мышления Claude — применяется ко всем `targetFormat === FORMATS.CLAUDE` телам (#2161 — спасибо @JohnDoe-oss)
- **refactor(catalog):** удалить 11 импортов с расширением `.ts`, устранить все приведения `as any`, добавить интерфейс `CustomModelEntry` и предикат типа `ComboModelStep`, нормализовать разрешение псевдонимов с помощью `resolveCanonicalProviderId()` (#2152 — спасибо @herjarsa)
- **feat(resilience):** трисостояние поля PATCH `useUpstream429BreakerHints` — `true`/`false` сохраняются, `null` сбрасывается в undefined (исключается из JSON) (#2146 tests — спасибо @rafacpti23)

### 🧹 Разные работы и поддержка

- **chore(providers):** удалить избыточные локальные ресурсы значков провайдеров в пользу веб-шрифтов `@lobehub/icons` (#1992)
- **chore(providers):** удалить устаревшие модели (#2033)
- **chore(providers):** улучшить поддержку BazaarLink и Completions.me (#2177 — спасибо @backryun)
- **chore(registry):** обновить `contextLength` и `maxOutputTokens` для моделей claude, kiro, github, kimi-coding, xiaomi-mimo, codex/gpt-5.5 (#2163 — спасибо @brucevoin)
- **chore(models):** упорядочить базовый URL Alibaba Coding Plan, переорганизовать список моделей Cursor по семейству, исправить идентификатор модели `gpt-4o`, обновить модель OpenCode Zen (#2150 — спасибо @backryun)
- **chore(deps):** устранить умеренную уязвимость npm audit (hono)
- **chore(deps):** переместить `gray-matter` из devDependencies в dependencies (требование времени выполнения) (#2156 — спасибо @bypanghu)
- **deps:** обновить `fast-uri` с 3.1.0 до 3.1.2 (#2078)
- **deps:** обновить `hono` с 4.12.14 до 4.12.18 (#2065, #2079)
- **deps:** обновить группу разработки с 6 обновлениями (#2184)
- **deps:** обновить `electron-builder` с 26.9.1 до 26.10.0 (#2183)
- **ci:** обновить рабочий процесс build-fork для сборки из ветки main (#2055)
- **ci:** пропустить сканирование SonarCloud при push в main для оптимизации времени CI
- **test:** стабилизировать случай прерывания охвата cooldown в интеграционном тестировании
- **build(deps):** перегенерировать `package-lock.json` для соответствия `http-proxy-middleware` 4.x (#2228 — спасибо @NomenAK)
- **fix(requestLogger):** исключить поле tools из усечения массива для полной видимости отладки (#2234 — спасибо @NomenAK)

### 🏆 v3.8.0 Сообщество участников

Большое спасибо всем **55+ участникам сообщества**, которые сделали возможным выпуск v3.8.0! 🎉

| Участник                                                   | PRs | Вклад                                                                                            |
| :--------------------------------------------------------- | :-: | :----------------------------------------------------------------------------------------------- |
| [@NomenAK](https://github.com/NomenAK)                     | 12  | #2217, #2218, #2219, #2221, #2222, #2223, #2224, #2228, #2233, #2234, #2242, #2192               |
| [@oyi77](https://github.com/oyi77)                         | 14  | #2010, #2014, #2041, #2052, #2061, #2074, #2091, #2094, #2096, #2131, #2135, #2240, #2283, #2295 |
| [@backryun](https://github.com/backryun)                   |  9  | #1992, #2033, #2088, #2123, #2138, #2141, #2150, #2177, #2279                                    |
| [@Brkic-Nikola](https://github.com/Brkic-Nikola)           |  6  | #2165, #2189, #2190, #2191, #2192, #2197                                                         |
| [@Gioxaa](https://github.com/Gioxaa)                       |  5  | #2105, #2149, #2153, #2154, #2159                                                                |
| [@dhaern](https://github.com/dhaern)                       |  4  | #2028, #2039, #2087, #2090                                                                       |
| [@andrewmunsell](https://github.com/andrewmunsell)         |  3  | #2169, #2176, #2238                                                                              |
| [@ddarkr](https://github.com/ddarkr)                       |  4  | #2047, #2199, #2243, #2271                                                                       |
| [@nickwizard](https://github.com/nickwizard)               |  3  | #1991, #2196, #2227                                                                              |
| [@herjarsa](https://github.com/herjarsa)                   |  3  | #2030, #2136, #2152                                                                              |
| [@rafacpti23](https://github.com/rafacpti23)               |  3  | #2086, #2146, #2201                                                                              |
| [@Tentoxa](https://github.com/Tentoxa)                     |  2  | #2011, #2053                                                                                     |
| [@wauputr4](https://github.com/wauputr4)                   |  2  | #2009, #2046                                                                                     |
| [@hartmark](https://github.com/hartmark)                   |  4  | #2045, #2137, #2294, #2299                                                                       |
| [@payne0420](https://github.com/payne0420)                 |  2  | #2082, #2128                                                                                     |
| [@bypanghu](https://github.com/bypanghu)                   |  2  | #2027, #2156                                                                                     |
| [@eleata](https://github.com/eleata)                       |  2  | #2116, #2133                                                                                     |
| [@Tr0sT](https://github.com/Tr0sT)                         |  1  | #2012                                                                                            |
| [@AveryanAlex](https://github.com/AveryanAlex)             |  1  | #2008                                                                                            |
| [@rodrigogbbr-stack](https://github.com/rodrigogbbr-stack) |  1  | #1996                                                                                            |
| [@NekoMonci12](https://github.com/NekoMonci12)             |  1  | #1999                                                                                            |
| [@congvc-dev](https://github.com/congvc-dev)               |  1  | #2004                                                                                            |
| [@tatsster](https://github.com/tatsster)                   |  1  | #2007                                                                                            |
| [@xssdem](https://github.com/xssdem)                       |  1  | #2023                                                                                            |
| [@wucm667](https://github.com/wucm667)                     |  1  | #2031                                                                                            |
| [@tces1](https://github.com/tces1)                         |  1  | #2048                                                                                            |
| [@guanbear](https://github.com/guanbear)                   |  1  | #2054                                                                                            |
| [@Gi99lin](https://github.com/Gi99lin)                     |  1  | #2055                                                                                            |
| [@ivan-mezentsev](https://github.com/ivan-mezentsev)       |  1  | #2063                                                                                            |
| [@JxnLexn](https://github.com/JxnLexn)                     |  1  | #2019                                                                                            |
| [@yoviarpauzi](https://github.com/yoviarpauzi)             |  1  | #2092                                                                                            |
| [@gleber](https://github.com/gleber)                       |  1  | #2103                                                                                            |
| [@rilham97](https://github.com/rilham97)                   |  1  | #2104                                                                                            |
| [@boa-z](https://github.com/boa-z)                         |  1  | #2115                                                                                            |
| [@rdself](https://github.com/rdself)                       |  1  | #2118                                                                                            |
| [@clousky2020](https://github.com/clousky2020)             |  1  | #2119                                                                                            |
| [@abhinavjnu](https://github.com/abhinavjnu)               |  1  | #2122                                                                                            |
| [@HoaPham98](https://github.com/HoaPham98)                 |  1  | #2089                                                                                            |
| [@christlau](https://github.com/christlau)                 |  1  | #2129                                                                                            |
| [@flyingmongoose](https://github.com/flyingmongoose)       |  1  | #2134                                                                                            |
| [@05dunski](https://github.com/05dunski)                   |  1  | #1978 (cherry-picked)                                                                            |
| [@DavyMassoneto](https://github.com/DavyMassoneto)         |  1  | #2140                                                                                            |
| [@Zhaba1337228](https://github.com/Zhaba1337228)           |  1  | #2168                                                                                            |
| [@faisalill](https://github.com/faisalill)                 |  1  | #2166                                                                                            |
| [@Yosee11](https://github.com/Yosee11)                     |  1  | #2164                                                                                            |
| [@hachimed](https://github.com/hachimed)                   |  1  | #2162                                                                                            |
| [@JohnDoe-oss](https://github.com/JohnDoe-oss)             |  1  | #2161                                                                                            |
| [@brucevoin](https://github.com/brucevoin)                 |  1  | #2163                                                                                            |

| [@InkshadeWoods](https://github.com/InkshadeWoods) | 1 | #2202 |
| [@kang-heewon](https://github.com/kang-heewon) | 1 | #2231 |
| [@one-vs](https://github.com/one-vs) | 1 | #2236 |
| [@thepigdestroyer](https://github.com/thepigdestroyer) | 2 | #2290, #2291 |
| [@josephvoxone](https://github.com/josephvoxone) | 1 | #2289 |
| [@mrmm](https://github.com/mrmm) | 3 | #2286, #2305, #2308 |

---

---

## [3.7.9] — 2026-05-03

### ✨ New Features

- **feat(docs):** интеграция многостраничной документации в панель управления OmniRoute (#1969)
- **feat(settings):** добавление настройки лимита тела запроса (#1968)
- **feat(auth):** добавление значения по умолчанию для секрета OAuth-клиента CLI Gemini (#1974)
- **feat(models):** предоставление контекстных окон моделей.dev в /v1/models (#1972)

- **feat(compression):** значительное улучшение конвейеров сжатия Caveman и RTK (#1876, #1889):
  - Добавление сжатия вывода инструментов RTK, стекированные конвейеры Caveman + RTK, назначения комбинаций сжатия, страницы контекста панели управления, инструменты управления MCP и языковые наборы правил Caveman.
  - Расширение параллелизма RTK с каталогом из 39 фильтров, стадиями JSON DSL в стиле RTK, встроенной проверкой/бенчмарком, доверенными пользовательскими фильтрами, расширенным обнаружением команд и восстановлением необработанного вывода.
  - Предоставление интенсивностей правил, отслеживание экономии в USD, унификация проверки конфигурации и сохранение экономии MCP.
  - Расширение параллелизма Caveman и сжатие метаданных MCP.
- **feat(provider):** обновление каталога моделей Jina AI для поддержки Embeddings и Rerank (#1874 — спасибо @backryun)
- **feat(provider):** добавление провайдера генерации изображений NanoGPT (#1899 — спасибо @Aculeasis)
- **feat(ui):** перемещение конфигурации прокси на отдельную страницу System → Proxy (#1907 — спасибо @oyi77)
- **feat(ui):** добавление утилиты сокращения стоимости K/M/B/T (#1902 — спасибо @oyi77)
- **feat(providers):** реализация массового вставки для дополнительных ключей API (#1916 — спасибо @0xtbug)
- **feat(analytics):** заполнение ключа API истории использования + ценообразование в темном режиме (#1896 — спасибо @Gi99lin)
- **feat(logs):** отображение точной экономии токенов RTK и Caveman в пользовательском интерфейсе журнала запросов (#1923 — спасибо @emdash)
- **feat(routing):** автоматический пропуск исчерпавших квоту учетных записей (Issue #1952)
- **feat(docs):** редизайн сайта документации (#1976 — спасибо @oyi77)
- **feat(db):** объединение всех настроек базы данных в SystemStorageTab (закрывает #1935) (#1947 — спасибо @oyi77)
- **feat(sse):** переключение учетных записей при ошибке 429 во время выполнения задачи codex (#1888 — спасибо @smartenok-ops)
- **feat(auto-assessment):** добавление движка автоматической оценки для самоисцеления комбинаций (#1918 — спасибо @oyi77)
- **feat(usage):** извлечение токенов из кэша DeepSeek V4 (#1930 — спасибо @smartenok-ops)
- **feat(cost):** улучшение форматирования стоимости и добавление поддержки ценообразования Codex GPT-5.5 (#1944 — спасибо @JxnLexn)

### 🐛 Bug Fixes

- **fix(auth):** реализация логики привязки сеанса и маршрутизации
- **fix(dashboard):** получение базового URL для отображения из origin вместо жесткого кодирования localhost (#1960 — спасибо @jeanfbrito)
- **fix(proxy):** использование credentials.connectionId вместо несуществующего credentials.id для разрешения прокси изображений (#1929 — спасибо @Aculeasis)
- **fix(routing):** разрешение неоднозначных имен codex + семейный родной резервный вариант (#1933 — спасибо @smartenok-ops)
- **fix(infrastructure):** перемещение wreq-js в optionalDependencies и добавление Node 25/26 в политику безопасного времени выполнения (#1924)
- **fix(providers):** разрешение ошибки аутентификации ChatGPT Web путем выравнивания строк User-Agent TLS fingerprint (#1925)
- **fix(mitm):** поддержка пользователя root для обработки sudo MITM (#1948 — спасибо @NekoMonci12)
- **fix(db):** разрешение резервного варианта шифрования для предотвращения циклов повторного шифрования (#1941, #1945)
- **fix(auth):** исправление очистки ответа final_answer ассистента Codex (#1965)
- **fix(mcp):** переклассификация конечных точек MCP для обеспечения работы аутентификации ключа API даже при включенной аутентификации панели управления (#1970)
- **fix(providers):** разрешение добавления локальных конечных точек, совместимых с OpenAI (например, Ollama), без ключа API (исправляет #1893)
- **fix(providers):** обход ошибки unauthorized_client_error AgentRouter путем подделки заголовков CLI Claude через конечные точки Anthropic (исправляет #1921)
- **fix(copilot):** эмиссия совместимых текстовых дельт рассуждений (#1919 — спасибо @ivan-mezentsev)
- **fix(api-manager):** отображение ошибок проверки встроенными в модальные окна, а не за ними (#1920 — спасибо @andrewmunsell)
- **fix(compression):** выравнивание комбинации стандартных экономий с запачканным значением по умолчанию, сохранение запачканных значений по умолчанию и защита маршрутов метаданных.
- **fix(gemini-cli):** разделение транспорта Cloud Code от Antigravity (#1869 — спасибо @dhaern)
- **fix(codex):** отображение поля prompt в массив input для совместимости с Cursor (исправляет #1872)
- **fix(core):** выравнивание параметра stream по умолчанию с false в соответствии со строгим спецификацией OpenAI (исправляет #1873)
- **fix(ui):** восстановление CSP `unsafe-eval` Next.js в `script-src` для производства для исправления нереактивной кнопки Onboarding (исправляет #1883)
- **fix(proxy):** глобальное удаление `prompt_cache_retention` в `BaseExecutor` для предотвращения ошибок 400 от строгих конечных точек, таких как droid/gemini-2-pro (исправляет #1884)
- **fix(ui):** включение `isOpen` в зависимость состояния `EditConnectionModal` для обеспечения правильной гидратации `maxConcurrent` при повторном открытии модального окна (исправляет #1859)
- **fix(security):** устранение 4 предупреждений CodeQL о полиномиальном-redos в регулярных выражениях сжатия путем ограничения повторений и удаления перекрывающихся квантификаторов
- **fix(codex):** уплощение формата инструментов Chat Completions в формат ответов Codex в `normalizeCodexTools` — предотвращает ошибки `Missing required parameter: tools[0].name` на стороне сервера (#1914 — спасибо @tranduykhanh030)
- **fix(proxy):** добавление контекста выполнения с учетом прокси в маршрут генерации изображений — настройки прокси теперь правильно применяются для провайдеров изображений за ограниченными сетями (#1904 — спасибо @Aculeasis)
- **fix(translator):** внедрение `properties: {}` в схемы инструментов MCP с нулевыми аргументами во время перевода Anthropic→OpenAI — предотвращает ошибки 400 от строгой проверки схемы OpenAI (#1898 — спасибо @bryceIT)
- **fix(codex):** очистка входных данных необработанных ответов (#1895 — спасибо @dhaern)
- **fix(combos):** выравнивание контрактов стратегий (#1892 — спасибо @dhaern)
- **fix(combos):** исправление обработки профиля перерыва провайдера комбинации (#1891 — спасибо @rdself)
- **fix(migrations):** исправление no-op для дублирующегося столбца (#1886 — спасибо @smartenok-ops)
- **fix(auth):** мьютекс обновления OAuth для каждой подключения (#1885 — спасибо @smartenok-ops)
- **fix(auth):** требование аутентификации управления панели для предварительного просмотра сжатия

### 🔄 Updates

- **chore(provider):** Добавление списка моделей reka (#1956 — спасибо @backryun)
- **chore(model):** Обновление новых моделей, Удаление устаревших моделей (#1949 — спасибо @backryun)

### 📝 Documentation

- **docs(compression):** документирование диапазонов экономии RTK+Caveman

### 🏆 Release Attribution & Retroactive Credits

- **@payne0420** (PR #1828 / #1839) — Реализация **Rate Limit Watchdog** и переопределения окружения. (Эта функция была вручную перенесена в v3.7.8, что вызвало автоматическое опущение авторского права в примечаниях к выпуску GitHub).

---

```

---

---

## [3.7.8] — 2026-05-01

### ✨ New Features

- **feat(docs):** интегрировать многостраничную документацию в панель управления OmniRoute (#1969)
- **feat(settings):** добавить настройку лимита тела запроса (#1968)
- **feat(auth):** добавить стандартный секрет клиента OAuth для Gemini CLI (#1974)
- **feat(models):** экспонировать окна контекста models.dev в /v1/models (#1972)
- **fix(db):** решить проблему с резервным шифрованием, вызывающую циклы повторного шифрования (#1941)
- **fix(auth):** исправить санитизацию ответа final_answer для помощника Codex (#1965)

- **feat(providers):** добавить поставщика Grok 4.3 и Xiaomi Mimo TTS (#1837)
- **feat(core):** реализовать Rate Limit Watchdog с возможностью переопределения через переменные окружения для обнаружения и сброса зависших очередей (#1839)
- **feat(providers):** добавить поставщика muse-spark-web с поддержкой нескольких моделей и рассуждений (#1843)
- **feat(1proxy):** интегрировать 1proxy с рынком бесплатных прокси, управлением через панель и новыми инструментами MCP (закрывает #1788) (#1847)

### 🐛 Bug Fixes

- **fix(codex):** санитизировать состояние replay Responses для предотвращения утечки внутренних комментариев помощника (#1868 — спасибо @dhaern)
- **fix(cli):** добавить отпечаток Gemini CLI с поддержкой capture-backed (#1866)
- **fix(ui):** скрыть элементы управления сжатием комбо, когда глобальная настройка отключена (#1840)
- **fix(db):** допустить отсутствие таблицы request_detail_logs для устаревших развертываний (#1848)
- **fix(core):** удалить ненужный параметр `store` для поставщиков, не поддерживающих его (закрывает #1841)
- **fix(core):** убедиться, что safeOutboundFetch и A2A роутеры возвращают 503 Service Unavailable при срабатывании защитных механизмов
- **fix(usage):** исправить логику парсинга Unix секунд vs миллисекунд для сброса квоты Kiro AI (закрывает #1849)
- **fix(ui):** применить надежную обработку NaN, обеспечить согласованность 24 часов и исправить отсутствующие часы в аналитике сжатия (закрывает #1844)
- **fix(ui):** реализовать форматирование коротких чисел для метрик потребления токенов на страницах кэша, чтобы предотвратить переполнение (закрывает #1842)
- **fix(combo):** стабилизировать маршрутизацию поставщиков при 500+ соединениях, ограничив очереди семафоров и скорректировав отслеживание цепей (закрывает #1846) (#1854)
- **fix(maritalk):** обновить список моделей Maritalk, использовать заголовок Authorization Key и выровнять с последними API-эндпоинтами (#1856)
- **fix(grok-web):** стабилизировать вызов инструментов (bash, readFile, webSearch) и парсинг ответов, отобразив нативные намерения Grok на стандартные полезные нагрузки OpenAI (#1857)
- **fix(providers):** правильно отобразить и экспонировать каталоги моделей Upstage для встраивания и чата (#1855)
- **fix(executor):** применить правильные urlSuffix и custom authHeaders для неизвестных поставщиков на основе реестра в DefaultExecutor (закрывает #1846) (#1861)

### 🛠️ Maintenance

- **fix(workflow):** собирать docker-образы при тегах версий (#1838)

---

---

---

## [3.7.7] — 2026-04-30

### ✨ New Features

- **feat(docs):** интегрировать многостраничную документацию в панель управления OmniRoute (#1969)
- **feat(settings):** добавить настройку лимита тела запроса (#1968)
- **feat(auth):** добавить стандартный секрет клиента OAuth для Gemini CLI (#1974)
- **feat(models):** экспонировать окна контекста models.dev в /v1/models (#1972)
- **fix(db):** решить проблему с резервным шифрованием, вызывающую циклы повторного шифрования (#1941)
- **fix(auth):** исправить санитизацию ответа final_answer для помощника Codex (#1965)

- **Конвейер сжатия промптов:** Реализован многофазовый движок сжатия промптов, включая режимы `lite` (сжатие пробелов и дубликатов), `aggressive` (суммаризация, сжатие инструментов) и `ultra` (эвристическое усечение и SLM-заглушка) (#1633, #1738, #1739, #1741)
- **Панель управления и аналитика сжатия:** Добавлен интерфейс настроек сжатия, просмотр логов в реальном времени, статистика конвейера и интерактивный предпросмотр игрового поля (#1756)
- **Кэширование сжатия и MCP:** Добавлены стратегии сжатия с учетом кэширования, а также новые инструменты MCP для статуса и конфигурации (#1758)
- **Пользовательские фильтры аналитики:** Добавлен выбор пользовательского диапазона дат, фильтрация по API-ключам и заполнение аналитики для NULL-ключей на панели затрат (#1830)

### 🐛 Bug Fixes

- **Маршрутизация комбо:** Исправлена проблема, при которой модели Gemini `-preview` неправильно нормализовались в их канонические имена, вызывая ошибки 404 при комбо-маршрутизации (#1834)
- **Прямой проход Codex:** Добавлена поддержка Cursor 5.5 для отправки массивов `messages` на эндпоинт `responses/compact`, предотвращающая отвержение пустыми запросами (#1832)
- **Сторожевой таймер ограничения скорости:** Реализован новый сторожевой таймер ограничения скорости с возможностью переопределения через переменные окружения и трассировкой этапов для предотвращения и диагностики скрытых зависаний (#1828)
- **Устойчивость шифрования:** Предотвратить отправку зашифрованных токенов поставщикам, возвращая null при сбое расшифровки (#763d353)
- **i18n и локали:** Исправлены заполнители локалей OpenCode baseUrl и добавлены ключи сжатия для 32 языков
- **Стабильность запуска:** Укреплена логика интеграции сервера при запуске (#9aa89b17)

### 🛠️ Maintenance

- **Тесты и документация:** Расширен набор тестов на 61 единицу/интеграционного теста для конвейера сжатия и обновлена `AGENTS.md`
- **Workflow:** Исправлена логика извлечения changelog для точного захвата описаний релизов GitHub
---

---

---

## [3.7.6] — 2026-04-30

### ✨ New Features

- **feat(docs):** интеграция многостраничной документации в панель управления OmniRoute (#1969)
- **feat(settings):** добавление настройки лимита тела запроса (#1968)
- **feat(auth):** добавление стандартного секрета OAuth-клиента Gemini CLI (#1974)
- **feat(models):** предоставление контекстных окон моделей.dev в /v1/models (#1972)
- **fix(db):** устранение проблемы с резервным шифрованием, вызывающей циклы повторного шифрования (#1941)
- **fix(auth):** исправление санитизации ответа final_answer в Codex assistant (#1965)

- **feat(api-keys):** добавление поддержки переименования в модальном окне разрешений — редактируемое поле имени ключа с валидацией (#1796)
- **feat(chatgpt-web):** поддержка параметра `thinking_effort` (Standard/Extended) для моделей с возможностью мышления (#1821)
- **feat(dashboard):** реализация оставшихся функций панели управления v3.7.6 — вкладки Costs overview, Translator pipeline и улучшения вкладок Endpoint
- **feat(tools):** внедрение резервных имен инструментов для предотвращения ошибок 400 на провайдерах, требующих имена инструментов (#1775)
- **feat(db):** автоматическое восстановление базы данных после сбоя проверки на старте для предотвращения потери данных после неудачных обновлений (#1810)
- **feat(analytics):** добавление аналитики на основе стоимости использования и активности в панели управления аналитикой

### 🔒 Security

- **fix(security):** устранение уязвимости ReDoS в шаблонах регулярных выражений исполнителя Codex (#1797, #1789)

### 🐛 Bug Fixes

- **fix(stability):** устранение проблемы с валидацией входных данных в Codex, активация комбинированного цепного переключателя и исправление сломанных юнит-тестов (#1804, #1805)
- **fix(stability):** безопасное приведение входных данных к строкам перед вызовом `.trim()` для предотвращения сбоев на числовых полях в модальном окне прокси (#1825)
- **fix(stability):** очистка активных запросов и восстановление провайдеров после сбоев соединения (#1824)
- **fix(xiaomi-mimo):** обновление моделей до V2.5, исправление валидации плана токенов и региона по умолчанию (#1823)
- **fix(codex):** исключение компактных метаданных клиента для предотвращения отклонений на стороне провайдера (#1822)
- **fix(dashboard):** исправление видимости конечных точек, отображения статуса A2A и согласованности каталога API (#1806)
- **fix(analytics):** использование чистых SQL-агрегатов — без загрузки строк истории в память (#1802)
- **fix(dashboard):** исправление ошибки ReferenceError в `loadPresets` в CostOverviewTab
- **fix(mitm):** применение прозрачного перехвата только на порту 443

### 🧹 Chores

- **chore(workflow):** обязательное создание плана реализации в `/resolve-issues` workflow перед кодированием
- **chore(release):** расширение кредитов участников до 155 PRs по всей истории проекта

### 🏆 Community Contributors Acknowledgment

Мы обнаружили, что **155 community PRs** по всей истории проекта (с момента создания до v3.7.5) были вручную интегрированы в релизные ветки, но закрыты вместо того, чтобы быть правильно объединены через GitHub, что препятствовало получению кредитов за слияние на профилях участников. Мы искренне извиняемся за это упущение и с тех пор обновили наши рабочие процессы, чтобы гарантировать, что это больше никогда не повторится.

**Следующие участники получили интегрированный код и идеи в нескольких релизах без должного кредита за слияние. Спасибо вам за ваши ценные вклад в OmniRoute:**

| Contributor                                                  | PRs (Total) | All Contributions                                                                                                                                                                   |
| :----------------------------------------------------------- | :---------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [@rdself](https://github.com/rdself)                         |     28      | #542, #705, #717, #737, #738, #841, #851, #853, #875, #880, #888, #891, #903, #904, #974, #1069, #1089, #1196, #1267, #1272, #1299, #1300, #1356, #1357, #1441, #1443, #1549, #1742 |
| [@oyi77](https://github.com/oyi77)                           |     27      | #644, #672, #700, #850, #859, #862, #868, #874, #881, #883, #908, #926, #931, #983, #990, #1019, #1020, #1021, #1103, #1281, #1286, #1363, #1368, #1377, #1411, #1689, #1717        |
| [@clousky2020](https://github.com/clousky2020)               |     15      | #1244, #1323, #1365, #1366, #1408, #1442, #1484, #1595, #1598, #1599, #1611, #1618, #1620, #1621, #1644                                                                             |
| [@benzntech](https://github.com/benzntech)                   |      8      | #158, #1264, #1435, #1436, #1437, #1440, #1444, #1677                                                                                                                               |
| [@kang-heewon](https://github.com/kang-heewon)               |      5      | #530, #854, #884, #1235, #1574                                                                                                                                                      |
| [@herjarsa](https://github.com/herjarsa)                     |      4      | #1472, #1474, #1477, #1480                                                                                                                                                          |
| [@backryun](https://github.com/backryun)                     |      4      | #1358, #1609, #1627, #1722                                                                                                                                                          |
| [@tombii](https://github.com/tombii)                         |      4      | #708, #856, #900, #1013                                                                                                                                                             |
| [@christopher-s](https://github.com/christopher-s)           |      3      | #868, #885, #992                                                                                                                                                                    |
| [@zen0bit](https://github.com/zen0bit)                       |      3      | #561, #650, #912                                                                                                                                                                    |
| [@k0valik](https://github.com/k0valik)                       |      3      | #554, #587, #596                                                                                                                                                                    |
| [@zhangqiang8vip](https://github.com/zhangqiang8vip)         |      2      | #470, #575                                                                                                                                                                          |
| [@wlfonseca](https://github.com/wlfonseca)                   |      2      | #997, #1016                                                                                                                                                                         |
| [@RaviTharuma](https://github.com/RaviTharuma)               |      2      | #1188, #1277                                                                                                                                                                        |
| [@prakersh](https://github.com/prakersh)                     |      2      | #419, #480                                                                                                                                                                          |
| [@payne0420](https://github.com/payne0420)                   |      2      | #1593, #1670                                                                                                                                                                        |
| [@only4copilot](https://github.com/only4copilot)             |      2      | #855, #1039                                                                                                                                                                         |
| [@jay77721](https://github.com/jay77721)                     |      2      | #581, #582                                                                                                                                                                          |
| [@hijak](https://github.com/hijak)                           |      2      | #295, #578                                                                                                                                                                          |
| [@hartmark](https://github.com/hartmark)                     |      2      | #1494, #1500                                                                                                                                                                        |
| [@defhouse](https://github.com/defhouse)                     |      2      | #906, #946                                                                                                                                                                          |
| [@xiaoge1688](https://github.com/xiaoge1688)                 |      1      | #1304                                                                                                                                                                               |
| [@xandr0s](https://github.com/xandr0s)                       |      1      | #1376                                                                                                                                                                               |
| [@willbnu](https://github.com/willbnu)                       |      1      | #882                                                                                                                                                                                |
| [@slewis3600](https://github.com/slewis3600)                 |      1      | #1624                                                                                                                                                                               |
| [@sergey-v9](https://github.com/sergey-v9)                   |      1      | #594                                                                                                                                                                                |
| [@razllivan](https://github.com/razllivan)                   |      1      | #987                                                                                                                                                                                |
| [@nmime](https://github.com/nmime)                           |      1      | #1271                                                                                                                                                                               |
| [@Moutia-Ben-Yahia](https://github.com/Moutia-Ben-Yahia)     |      1      | #1663                                                                                                                                                                               |
| [@Mind-Dragon](https://github.com/Mind-Dragon)               |      1      | #467                                                                                                                                                                                |
| [@mercs2910](https://github.com/mercs2910)                   |      1      | #1001                                                                                                                                                                               |
| [@MAINER4IK](https://github.com/MAINER4IK)                   |      1      | #196                                                                                                                                                                                |
| [@luandiasrj](https://github.com/luandiasrj)                 |      1      | #996                                                                                                                                                                                |
| [@knopki](https://github.com/knopki)                         |      1      | #1434                                                                                                                                                                               |
| [@kfiramar](https://github.com/kfiramar)                     |      1      | #389                                                                                                                                                                                |
| [@ken2190](https://github.com/ken2190)                       |      1      | #166                                                                                                                                                                                |
| [@keith8496](https://github.com/keith8496)                   |      1      | #569                                                                                                                                                                                |
| [@jonesfernandess](https://github.com/jonesfernandess)       |      1      | #1118                                                                                                                                                                               |
| [@JasonLandbridge](https://github.com/JasonLandbridge)       |      1      | #1626                                                                                                                                                                               |
| [@i1hwan](https://github.com/i1hwan)                         |      1      | #1386                                                                                                                                                                               |
| [@Gorchakov-Pressure](https://github.com/Gorchakov-Pressure) |      1      | #754                                                                                                                                                                                |
| [@foxy1402](https://github.com/foxy1402)                     |      1      | #934                                                                                                                                                                                |
| [@dt418](https://github.com/dt418)                           |      1      | #896                                                                                                                                                                                |
| [@dhaern](https://github.com/dhaern)                         |      1      | #1647                                                                                                                                                                               |
| [@DavyMassoneto](https://github.com/DavyMassoneto)           |      1      | #211                                                                                                                                                                                |
| [@dail45](https://github.com/dail45)                         |      1      | #1413                                                                                                                                                                               |
| [@congvc-dev](https://github.com/congvc-dev)                 |      1      | #1569                                                                                                                                                                               |
| [@be0hhh](https://github.com/be0hhh)                         |      1      | #1581                                                                                                                                                                               |
| [@andruwa13](https://github.com/andruwa13)                   |      1      | #1457                                                                                                                                                                               |
| [@AndrewDragonIV](https://github.com/AndrewDragonIV)         |      1      | #898                                                                                                                                                                                |
| [@AndersonFirmino](https://github.com/AndersonFirmino)       |      1      | #362                                                                                                                                                                                |
| [@alexsvdk](https://github.com/alexsvdk)                     |      1      | #1280                                                                                                                                                                               |
| [@abhinavjnu](https://github.com/abhinavjnu)                 |      1      | #550                                                                                                                                                                                |

---
---

---

---

## [3.7.5] — 2026-04-29

### ✨ New Features

- **feat(docs):** интеграция многостраничной документации в панель управления OmniRoute (#1969)
- **feat(settings):** добавление настройки лимита тела запроса (#1968)
- **feat(auth):** добавление значения по умолчанию для клиентского секрета OAuth Gemini CLI (#1974)
- **feat(models):** предоставление контекстных окон моделей в /v1/models (#1972)
- **fix(db):** исправление обратной совместимости шифрования, вызывающего циклы повторного шифрования (#1941)
- **fix(auth):** исправление очистки ответа final_answer для помощника Codex (#1965)

- **feat(tunnels):** интеграция нативной поддержки туннелей ngrok с соответствием интерфейса панели управления (#1753)

### 🐛 Bug Fixes

- **fix(dashboard):** добавление кнопки 'Очистить все' для завершения зависших длительных запросов в панели активных запросов (#1799)
- **fix(schema):** удаление пустых строковых значений из необязательных параметров инструментов для предотвращения ошибок проверки на стороне сервера (#1674)
- **fix(providers):** обеспечение правильной очистки потоковой передачи и освобождения семафора для предотвращения зависания с nanoGPT (#1781)
- **fix(db):** обертывание доступа к quota_snapshots в try/catch для корректной обработки ожидающих миграций базы данных (#1784)
- **feat(providers):** добавление поддержки провайдера glm-cn (BigModel) (#1770)
- **fix(grok-web):** исправление валидатора и парсинга cookie Grok (#1793)
- **fix(antigravity):** очистка внутренних заголовков OmniRoute (#1794)
- **fix(chatgpt-web):** восстановление валидатора и расширение каталога моделей до уровня ChatGPT Plus (#1792)
- **fix(codex):** стабилизация состояния ответа Copilot (#1791)
- **fix(antigravity):** ограничение вывода токенов для моста Claude (#1785)
- **fix(schema):** удаление свойств `default` из JSON-схем вызовов инструментов при выходе для предотвращения ошибок внедрения (#1782)
- **fix(db):** добавление таблицы `quota_snapshots` в инициализацию схемы основной базы данных для предотвращения сбоев запуска на новых установках
- **fix(models):** применение фильтра заблокированных провайдеров к не-чатовым каталогам моделей (изображения, встраивания, аудио и т.д.) (#1752)
- **fix(antigravity):** стабилизация парсинга полезной нагрузки потоковой передачи и дедупликация обновлений использования/метаданных модели (#1748)
- **fix(antigravity):** нормализация полезных нагрузок моста Gemini — очистка имен инструментов, ограничение вывода токенов и исправление бюджета мышления (#1769)
- **fix(sse):** распространение AbortSignal на предварительную семафорную очередь и ожидание ограничения скорости для предотвращения утечек памяти (#1771)
- **fix(models):** исправление обработки импорта синхронизации моделей — разделение синхронизированных моделей от пользовательских моделей для предотвращения потери данных (#1755)
- **fix(codex):** улучшение рассуждений и последующих вызовов инструментов для VS Code Copilot /responses (#1750)
- **fix(memory):** решение проблем сборки и реализация логики UPSERT памяти для предотвращения дублирования записей (#1763)
- **fix(kiro):** поддержка OAuth организации IDC с региональными конечными точками и обновлением (#1754)
- **fix(combo):** включение 429 в цепь отключения провайдера для остановки бесконечных циклов повторных попыток при исчерпанных квотах (#1767)
- **fix(claude):** соблюдение параметров мышления/усилий, установленных клиентом — только внедрять адаптивное мышление и высокие усилия, когда клиент явно не установил их, предотвращая принудительное истощение квоты на аккаунтах Claude Max (#1761)
- **fix(blackbox-web):** исправление имени cookie и заполнение полей сессии/подписки (#1776)
- **fix(codex):** выравнивание метаданных идентификации клиента (#1778)
- **fix(claude):** исправление поддержки claude-cli с использованием провайдера Gemini (#1779)
- **test(reasoning-cache):** изоляция состояния базы данных с использованием mkdtempSync для предотвращения ошибок 401 посредника

### 🛠️ Maintenance

- **chore(docs):** добавление значка оценки безопасности MseeP.ai в README (#1727)
- **chore(xiaomi):** обновление списка моделей провайдера Xiaomi (#1759)
- **chore(db):** перемещение конечной точки проверки состояния базы данных в API управления (#1757)
- **chore(ui):** ускорение начального рендеринга конечной точки с фоновой загрузкой задач (#1760)
- **chore(workflows):** добавление строгой политики кредитования участников PR для предотвращения будущей потери кредитов при слиянии

---

---

## [3.7.4] — 2026-04-28

### ✨ New Features

- **feat(docs):** интеграция многостраничной документации в панель управления OmniRoute (#1969)
- **feat(settings):** добавление настройки лимита тела запроса (#1968)
- **feat(auth):** добавление значения по умолчанию для секрета OAuth-клиента CLI Gemini (#1974)
- **feat(models):** предоставление контекстных окон моделей.dev в /v1/models (#1972)
- **fix(db):** исправление проблемы с резервным шифрованием, вызывающим циклы повторного шифрования (#1941)
- **fix(auth):** исправление очистки ответа final_answer для помощника Codex (#1965)

- **feat(ui):** добавление настроек видимости туннеля конечных точек (#1743)
- **feat(cli):** обновление профилей поставщиков отпечатков CLI (#1746)
- **feat(proxy):** реализация массового импорта прокси через парсер с разделителями-вертикальными чертами с логикой обновления или создания (upsert) и таблицей предварительного просмотра в реальном времени
- **feat(pwa):** добавление устанавливаемого PWA в полноэкранном режиме с манифестом, сервисным работником и кроссплатформенными значками приложений (#1728)

### 🔒 Security

- **security:** замена небезопасного `Math.random` на `crypto.getRandomValues` для генерации UUID в резервном варианте, чтобы устранить нахождение CodeQL CWE-338 (#182)

### 🐛 Bug Fixes

- **fix(cc-compatible):** исправление формата и копирования UI для совместимого с CC (#1742)
- **fix(codex):** нормализация максимальной нагрузки на рассуждение для маршрутизации Codex (#1744)
- **fix(claude-code):** исправление помощника конфигурации шлюза для Claude Code (#1745)
- **fix(db):** согласование миграции `create_reasoning_cache` для предотвращения перекрытия версий на `032` и устранения предупреждений при запуске (#1734)
- **fix(db):** перехват миграции `007` для использования идемпотентной логики `IF NOT EXISTS` через `PRAGMA table_info`, предотвращающей синтаксические сбои при установке с нуля (#1733)
- **fix(cc-compatible):** сохранение скелета системы для Claude Code, чтобы предотвратить отклонение строгими поставщиками верхнего уровня (#1740)

- **fix(providers):** добавление проверки ключа API для поставщиков только с изображениями и исправление запросов Stability AI для использования `multipart/form-data` вместо JSON (#1726)
- **fix(codex):** сохранение полей `previous_response_id` и `conversation_id` при пустом массиве входных данных, чтобы предотвратить ошибки проверки схемы (#1729)
- **fix(searxng):** обход блокировки проверки UI, когда `apiKeyOptional` равно true, и исправление ошибок типизации в панели поставщиков, чтобы разрешить сохранение поставщиков поиска без учетных данных (#1721)
- **fix(proxy):** отключение поддержки HTTP keep-alive и конвейеризации в диспетчере прокси Undici для предотвращения сбоев ротации "Socket hang up"
- **stream:** правильная идентификация блоков `thought` и `error` в потоках Antigravity/Gemini SSE для предотвращения преждевременных таймаутов 502 (#1725, #1705)

### 🛠️ Maintenance

- **workflow:** добавление инструкций по мониторингу фазы 4 в `/generate-release` workflow
- **test:** исправление ошибок компиляции TypeScript в модульных тестах для поддержания зеленого состояния конвейера проверки типов CI
- **test:** обновление ожиданий хранилища ответов для пустых массивов входных данных

---

---

---

## [3.7.3] — 2026-04-28

### 🐛 Bug Fixes

- **fix(claude):** удаление существующих заголовков выставления счетов из массива системы перед внедрением, чтобы предотвратить промахи кэша Anthropic — накопленные блоки `x-anthropic-billing-header` нарушали префиксное сопоставление, вызывая ~100% cache_create вместо cache_read (#1712)
- **fix(claude):** удаление `output_config.format` для не-Anthropic совместимых поставщиков Claude во время передачи — сторонние конечные точки Claude (MiniMax, DeepSeek через агрегаторы) отклоняют поля структурированного вывода с ошибками 400 (#1719)
- **fix(combo):** установка терминального состояния ошибки при сбое проверки качества ответа — предотвращает обманчивое состояние `ALL_ACCOUNTS_INACTIVE` 503, когда на самом деле проблема заключается в проверке качества ответа (#1707, #1710)
- **fix(combo):** обработка резервного варианта combo как оркестрация уровня цели — все не-ок ответы (включая общие 400) теперь переходят к следующей цели вместо того, чтобы быть терминальными; удаляет сложный список разрешенных регулярных выражений для плохих запросов (#1713)
- **fix(codex):** восстановление инструментов MCP и белого списка размещенных инструментов — регрессия от #1581, которая бесшумно удаляла все группы инструментов MCP и размещенные инструменты API Responses (#1715)
- **fix(codex):** добавление нейтральных инструкций для запросов на чит — бэкенд Responses Codex отклоняет запросы без `instructions`, делая Codex непригодным для обычного чата (#1709)
- **fix(proxy):** обертывание запросов назначения прокси в try-catch для отсутствующей таблицы `proxy_assignments` — установки Electron, где миграция 004 не была запущена, больше не вызывают сбоев с ошибкой `no such table` (#1706)
- **fix(migration):** улучшение разрешения путей URL файлов в Windows в миграционном исполнителе — добавлено прямое извлечение пути URL и резервный `process.cwd()` для сборок CI с утечками путей сборки (#1704)
- **fix(ui):** исправление активной модальной панели полезной нагрузки запроса в светлом режиме — добавлен отсутствующий токен темы `--color-card`, использован непрозрачный `bg-surface` вместо полупрозрачного `bg-card/70`, добавлен размытие фона (#1714)

### 🔄 Updates

- **chore(image-models):** обновление реестра моделей генерации изображений — замена устаревших псевдонимов FLUX на FLUX Kontext / FLUX.2, удаление устаревших вариантов FLUX Redux/Depth/Canny (#1722)

---

---

## [3.7.2] — 2026-04-28

### ✨ New Features

- **feat(docs):** интеграция многостраничной документации в панель управления OmniRoute (#1969)
- **feat(settings):** добавление настройки лимита тела запроса (#1968)
- **feat(auth):** добавление значения по умолчанию для секрета OAuth-клиента Gemini CLI (#1974)
- **feat(models):** предоставление контекстных окон моделей.dev в /v1/models (#1972)
- **fix(db):** исправление ошибки с резервным шифрованием, вызывающим циклы повторного шифрования (#1941)
- **fix(auth):** исправление очистки ответа final_answer для помощника Codex (#1965)

- **feat(authz):** введение централизованной прокси-ориентированной конвейерной обработки авторизации и политики жизненного цикла (#1632)
- **feat(logs):** настройка артефактов конвейера журналов вызовов (#1650)
- **feat(network):** добавление утилиты для зашищенной выборки удаленных изображений
- **feat(codex):** включение нативных ответов Codex через веб-сокеты на моделях с бета-доступом (#1658)
- **feat(muse-spark-web):** продолжение одного и того же разговора meta.ai на протяжении нескольких сеансов (#1673)

### 🐛 Bug Fixes

- **fix(responses):** очистка пустых строковых заполнителей из необязательных аргументов вызовов инструментов в потоке дельт для предотвращения сбоев строгих клиентов (#1674)
- **fix(codex):** предотвращение неожиданного утечки протокола и сфабрикованных инструкций на запросах завершения чата без инструментов (#1686)
- **fix(executors):** обрезка массива инструментов до 128 элементов в исполнителях GitHub Copilot и OpenCode для предотвращения ошибок 400 Bad Request от вышестоящего уровня (#1687)
- **fix:** добавление тайм-аута чтения тела для предотвращения зависших ожидающих запросов (#1680)
- **fix(rate-limit):** замена не поддерживаемой опции `maxWait` Bottleneck на уровень задания `expiration` для предотвращения бесконечных зависаний очереди (#1694)
- **fix(sse):** очистка схем инструментов OpenAI для строгих валидаторов вышестоящего уровня — удаляет null из массивов enum, нормализует элементы кортежей, фильтрует недопустимые ключи required (#1692)
- **fix(stream):** завершение потоков SSE с ошибкой перед принятием ответа — возвращает 504 вместо бесконечного ожидания, включает резервный вариант combo (#1693)
- **fix(combo):** завершение горячего исправления обрезки контекста — кэширование getCombos() с TTL 10 секунд, передача allCombosData в resolveComboTargets() для вложенного разрешения combo, консолидация дублированных шаблонов переполнения контекста (#1685)
- **fix(codex):** повышение порога квоты по умолчанию с 90% до 99% для предотвращения преждевременного блокирования аккаунта при наличии доступной квоты (#1697)
- **fix(memory):** использование роли `user` для провайдеров GLM/ZAI/Qianfan — провайдеры с жесткими ограничениями ролей (без роли `system`) теперь правильно получают контекст памяти в виде сообщения `user` вместо сообщения `system`, предотвращая ошибки валидации 422 (#1701)
- **fix(oauth):** целевой подключение по ID при обмене токенами повторной аутентификации — предотвращает создание дублирующегося аккаунта при повторной аутентификации существующего подключения OAuth (#1702 — спасибо @namhhitvn)
- **feat(email-privacy):** интеграция переключателя видимости электронной почты в RequestLoggerV2 — модальное окно деталей журнала теперь учитывает глобальное состояние конфиденциальности электронной почты, по умолчанию скрывая адреса электронной почты (#1700 — спасибо @namhhitvn)
- **fix(combo):** активация резервного варианта при ошибках `Invalid signature in thinking block` Anthropic вместо прямого возврата 400 (#1696)
- **fix:** цикл повторных попыток combo немедленно останавливается при отключении клиента (499) (#1681)
- **fix(search):** поддержка необязательной аутентификации носителя для SearXNG (#1683)
- **fix(vision):** учет нативной поддержки GPT vision — предотвращает перехват VisionBridge моделями, которые уже обрабатывают изображения нативно (#1678)
- **fix(qwen):** использование формата `security.auth` вместо `modelProviders` для генерации конфигурации Qwen Code (#1677)
- **fix(codex):** удаление устаревшего поиска транспорта веб-сокета, вызывающего ошибки резервного варианта (#1676)
- **fix(chatgpt-web):** ограничение нативных блокировок tls-client, чтобы запросы никогда не зависали (#1664)
- **fix(codex):** использование HTTP-транспорта вместо WebSocket по умолчанию для gpt-5.5 (#1660)
- **fix(codex):** [urgent] исправление транспорта веб-сокета gpt-5.5 и меток моделей (#1656)
- **fix(grokweb):** обновление спецификаций запросов и ответов (#1655)
- **fix(blackbox-web):** установка флага isPremium в значение true для включения доступа к премиум-моделям (#1661)
- **fix(core):** избегание параметров потока OpenAI для провайдеров, совместимых с Anthropic (#1654)
- **fix(electron):** разрешение сбоя запуска сервера MCP на Windows (#1662)
- **fix(electron):** сделать тест Windows smoke test неблокирующим (continue-on-error), предварительно создать каталог userData для Windows + потоковые логи в CI, а также добавить --no-sandbox и env sandbox для тестов CI smoke tests
- **fix(codex):** исправление ошибки ReferenceError `getWreqWebsocket`, вызывающей 502 на всех запросах Codex (#1652, #1653)
- **fix(codex):** установка `store` по умолчанию в `false` — бэкэнд OAuth Codex отклоняет `store=true` (#1635)
- **fix(db):** добавление постмиграционных защит для отсутствующей таблицы `batches` и столбца `combos.sort_order` при обновлении базы данных (#1648, #1657)
- **fix(db):** перенумерация дублирующейся миграции `032` для предотвращения коллизии
- **fix(perplexity-web):** обновление версии API и user-agent для соответствия требованиям вышестоящего уровня (#1666)
- **fix(docker):** копирование файлов миграции SQLite и явное трассирование в автономной сборке (#1665)
- **fix(muse-spark-web):** обновление до запроса с сохранением состояния Meta Ecto — исправляет 502 `Unknown type "RewriteOptionsInput"` после того, как Meta прекратила использование мутации Abra (#1668)
- **fix(dev):** включение Turbopack по умолчанию и восстановление заголовков CORS Codex (#1669)
- **fix(authz):** восстановление поддержки `REQUIRE_API_KEY` в политике clientApi
- **fix(auth):** выравнивание формата резервного API-ключа с настройкой теста

### 🛠️ Maintenance

- **build(prepublish):** сделать конфигурацию сборщика Next.js настраиваемой (webpack/turbopack)
- **ci:** выравнивание области анализа sonar
- **ci:** стабилизация проверок ветки выпуска
- **ci:** удаление истекшего задания сканирования расширенной безопасности

### 🧪 Tests

- **test:** исправление ошибок конфигурации TypeScript в plan3-p0.test.ts
- **test:** исправление неявных типов any в наборах тестов
- **test:** отключение проверки типов в ненадежных модульных тестах
- **test:** исправление сбоев тестов из-за последних рефакторингов
- **fix(tests):** выравнивание интеграционных тестов с рефакторингом конвейера authz
- **fix(tests):** выравнивание утверждений тестов с изменениями исходного кода v3.7.2
- **fix(tests):** тест CORS теперь проверяет объект тела вместо всего файла
- **fix(e2e):** исправление нестабильности E2E и неявных ошибок типа any

---

---

---

## [3.7.1] — 2026-04-26

### ✨ New Features

- **feat(docs):** интеграция многостраничной документации в панель управления OmniRoute (#1969)
- **feat(settings):** добавление настройки лимита тела запроса (#1968)
- **feat(auth):** добавление значения по умолчанию для секрета OAuth-клиента Gemini CLI (#1974)
- **feat(models):** предоставление контекстных окон моделей.dev в /v1/models (#1972)
- **fix(db):** исправление проблемы с резервным шифрованием, вызывающим циклы повторного шифрования (#1941)
- **fix(auth):** исправление очистки ответа final_answer для помощника Codex (#1965)

- **feat(providers):** Добавлена поддержка GPT-5.5 в провайдере Codex — включает 1.05M контекстное окно, вызов инструментов, зрение и возможности рассуждения с правильными ценами для провайдеров `cx` и `openai`. Рефакторинг `splitCodexReasoningSuffix()` в общий вспомогательный метод для более чистого парсинга уровня усилий (#1617 — спасибо @Zhaba1337228).
- **feat(cli):** Добавлена команда `omniroute reset-encrypted-columns` для восстановления — обнуляет зашифрованные столбцы учетных данных (`api_key`, `access_token`, `refresh_token`, `id_token`) в `provider_connections`, сохраняя метаданные провайдера, что позволяет пользователям, затронутым #1622, очистить конфигурации без потери настроек.
- **feat(i18n):** Расширение покрытия языков с девятью новыми языковыми пакетами (бенгальский, персидский, гуджарати, индонезийский, маратхи, суахили, тамильский, телугу, урду), что увеличивает количество поддерживаемых языков с 32 до 41 локалей.

### 🐛 Bug Fixes

- **fix(rate-limit):** Добавлено ограничение скорости по моделям для провайдера GitHub Copilot — 429 на одной модели (например, `gpt-5.1-codex-max`) больше не блокирует всю связь, соответствующее существующему шаблону квоты по моделям для Gemini (#1624 — спасибо @slewis3600).
- **fix(cli-tools):** Сохранение существующей конфигурации OpenCode (серверы MCP, пользовательские провайдеры, комментарии) при сохранении настроек OmniRoute — использует `jsonc-parser` для редактирования с сохранением дерева вместо разрушительного цикла JSON. Исправление копирования API-ключа в буфер обмена для использования необработанных ключей вместо замаскированных заполнителей. Добавление логотипов OpenCode с учетом темы светлый/темный (#1626 — спасибо @JasonLandbridge).
- **fix(cli-tools):** Исправление шага 3 `{{baseUrl}}` в руководстве OpenCode для использования стиля ICU `{baseUrl}` во всех 41 локалях, восстановление интерполяции next-intl (#1626).
- **fix(codex):** Сделать импорт нативного модуля `wreq-js` ленивым и необязательным, чтобы предотвратить сбой сервера при запуске, когда отсутствует двоичный файл для конкретной платформы — влияет на установки pnpm, Docker Alpine, macOS ARM и Windows (#1612, #1613, #1616).
- **fix(i18n):** Добавление 14 отсутствующих ключей перевода (`logs.runningRequests`, `logs.model`, `logs.provider`, `logs.account`, `logs.elapsed`, `logs.count`, `logs.payloads` и т.д.) для панели активных запросов во всех локалях. Замена 83 значений заполнителей в пространстве имен usage/evals. Добавление 5 отсутствующих ключей пространства имен health для статуса ограничения скорости.
- **fix(encryption):** Предотвращение повторной генерации `STORAGE_ENCRYPTION_KEY` во время `npm install -g` обновлений, что делало все ранее зашифрованные учетные данные провайдера невосстановимыми из-за несоответствия тега аутентификации AES-GCM (#1622).
- **fix(startup):** Добавление диагностики проверки расшифровки при запуске сервера — если `STORAGE_ENCRYPTION_KEY` не совпадает с зашифрованными учетными данными в базе данных, выводится предупреждение, направляющее пользователей на восстановление ключа или использование новой команды восстановления.
- **fix(cli-tools):** Разрешение значений `null` для API-ключей в `cliModelConfigSchema`, чтобы предотвратить ошибки 400 Bad Request при сохранении конфигураций инструментов CLI, основанных на облаке. Исправление обработки ошибок во всех 10 компонентах ToolCard для безопасного извлечения сообщений из структурированных объектов ошибок, предотвращающее сбои React Error #31.
- **fix(docker):** Установка `NPM_CONFIG_LEGACY_PEER_DEPS=true` в слое сборки Docker перед `npm ci` и удаление дублирующейся инструкции COPY `postinstallSupport.mjs` — исправляет сбои сборки образа контейнера, внесенные в v3.7.0 (#1630 — спасибо @rdself).
- **fix(antigravity):** Скрытие устаревших моделей Gemini, маршрутизируемых в Claude 4.5, из публичных каталогов и списков моделей. Устаревшие псевдонимы `gemini-claude-*` теперь тихо разрешаются в текущие эквиваленты Claude 4.6. Замена динамического генерации обратных псевдонимов явным списком для предсказуемого отображения моделей (#1631 — спасибо @backryun).
- **fix(types):** Добавление явных аннотаций типов к вспомогательным средствам тестирования sync-env и приведение динамических импортов к приведению типов для удовлетворения `typecheck:noimplicit:core` в CI.
- **fix(reasoning):** Реализация кэша повтора рассуждений — гибридное хранение в памяти/SQLite для `reasoning_content` в многоходовых потоках вызова инструментов. Автоматически захватывает рассуждения от DeepSeek V4, Kimi K2, Qwen-Thinking и моделей GLM и повторно внедряет их на последующих ходах, чтобы предотвратить ошибки HTTP 400 из-за строгой проверки содержимого рассуждений. Включает вклад телеметрии в панели управления, REST API и 21 модульных тестов (#1628 — спасибо @JasonLandbridge).
- **fix(postinstall):** Расширение восстановления нативных модулей postinstall на `wreq-js` — обнаруживает отсутствующие двоичные файлы `.node` для конкретной платформы внутри `app/node_modules/wreq-js/rust/` и копирует их из корневой установки. Исправляет глобальные установки `pnpm` на macOS arm64, где каталог автономного приложения содержал только двоичные файлы Linux (#1634 — спасибо @MarcosT96).
- **fix(migration):** Предотвращение перекрытия слотов миграций с совместимыми переименованиями на новых миграциях с тем же номером версии. После переписывания `028_provider_connection_max_concurrent` → `029` раннер теперь проверяет, что старый слот версии пуст, обеспечивая выполнение `028_create_files_and_batches` при обновлениях v3.6.x → v3.7.x. Добавляет таблицу `batches` как физический сентинел схемы для восстановления обновлений (#1637 — спасибо @V8-Software).
- **fix(registry):** Маршрутизация моделей GitHub Copilot GPT 5.4/5.5 через Responses API (`targetFormat: "openai-responses"`). Исправляет отклонение `gpt-5.4-mini` и `gpt-5.4` на `/chat/completions` в GitHub (#1641 — спасибо @dhaern).
- **fix(usage):** Исправление отображения квот токенов MiniMax — новый конечный пункт `/v1/token_plan/remains` сообщает о количестве использованных токенов, а не оставшихся. Округление артефактов с плавающей запятой процентов в пользовательском интерфейсе ограничений провайдера (#1642 — спасибо @CruxExperts).
- **fix(codex):** Ленивая загрузка транспорта WebSocket `wreq-js` через `createRequire` вместо импорта верхнего уровня. Сервер запускается чисто, когда нативный модуль недоступен, и возвращает 503 только при фактическом запросе WebSocket Codex. Исправляет #1612 (#1640 — спасибо @dendyadinirwana).
- **fix(electron):** Упаковка зависимостей среды выполнения Electron в `resources/app/node_modules/` через отдельный набор файлов `extraResources`. Добавляет скрипт тестирования пакета автономного приложения и интеграцию CI для предотвращения будущих регрессий. Закрывает #1636 (#1639 — спасибо @prateek).
- **feat(account-fallback):** Добавление блокировки дневного квоты на уровне модели. При возврате провайдером 429 с `quota_exhausted` время ожидания устанавливается на 00:00 завтра вместо экспоненциального возврата. Обнаруживает шаблоны дневных квот через `isDailyQuotaExhausted()` в обработчике чата (#1644 — спасибо @clousky2020).
- **fix(codex):** Использование `session_id`/`conversation_id` из тела запроса клиента как `prompt_cache_key` вместо общего `workspaceId`. Официальный Codex CLI использует `conversation_id` (уникальный UUID на сессию); использование общего `workspaceId` ограничивало частоту попаданий кэша до ~49%. Включает 10 модульных тестов (#1643).
- **fix(claude):** Стабилизация отпечатка заголовка выставления счетов для предотвращения инвалидации префикса кэша подсказок Anthropic. Отпечаток ранее выводился из текста первого сообщения пользователя, который изменялся на каждом ходе, мутируя `system[]` и вызывая ~100% `cache_create`. Теперь используется стабильный хэш на день, сохраняя ~96% частоту попаданий `cache_read` (#1638).
- **fix(transport):** Укрепление потоковой передачи GitHub и Kiro — передача `clientHeaders` через `BaseExecutor.buildHeaders()` для устранения состояния гонки изменяемого синглтона при параллельных запросах. Удаление избыточного потока TransformStream `[DONE]` из исполнителя GitHub. Добавление защитного `parseToolInput()` для некорректных аргументов вызова инструментов Kiro. Вынесение `TextEncoder`/`TextDecoder` в синглтоны модуля и использование `subarray()` без копирования (#1645 — спасибо @dhaern).
- **fix(transport):** Предотвращение раздувания памяти и истощения базы данных от больших, фрагментированных потоковых ответов. Реализована `ByteQueue` в `kiro.ts` для накопления бинарных данных без копирования, рефакторинг `antigravity.ts` для инкрементного парсинга SSE и строгое ограничение 512KB (`MAX_CALL_LOG_ARTIFACT_BYTES`) на журналы потоковых запросов и артефакты вызовов (#1647).
- **chore(ci):** Обновление зависимостей среды сборки — переход на Node `24.15.0`, `actions/checkout@v6`, `docker/build-push-action@v7`, закрепление `actions/setup-python` за основным тегом (#1646 — спасибо @backryun).

### 📝 Documentation

- **docs(env):** Добавление `OMNIROUTE_ALLOW_PRIVATE_PROVIDER_URLS` в `.env.example` с документацией для использования локальных провайдеров, таких как LM Studio (#1623).

---
```

---

---

## [3.7.0] — 2026-04-26

### ✨ New Features

- **feat(docs):** интеграция многостраничной документации в панель управления OmniRoute (#1969)
- **feat(settings):** добавление настройки лимита тела запроса (#1968)
- **feat(auth):** добавление значения по умолчанию для секрета OAuth-клиента Gemini CLI (#1974)
- **feat(models):** предоставление контекстных окон моделей в `/v1/models` (#1972)
- **fix(db):** исправление ошибки с резервным шифрованием, вызывающей циклы повторного шифрования (#1941)
- **fix(auth):** исправление очистки ответа final_answer для помощника Codex (#1965)

- **feat(providers):** Реализация возможностей генерации и редактирования изображений для ChatGPT Web, включая генерацию изображений в чате и кэширование (#1606).
- **feat(ui):** Интеграция SVG-логотипа OpenCode Zen/Go API и улучшение взаимодействий с API-ключом для копирования в буфер обмена (#1607).
- **feat(providers):** Добавление CrofAI в качестве встроенного провайдера с API-ключом и мониторингом квот/использования, интегрированного с панелью управления (#1604, #1606).
- **feat(skills):** Добавление встроенных навыков с областью видимости рабочей области (`file_read`, `file_write`, `http_request`, `eval_code`, `execute_command`) с реальным выполнением через Docker, заменяющего заглушки. Навыки браузера теперь явно завершаются с ошибкой, если среда выполнения не настроена.

- **feat(providers):** Интеграция AgentRouter в качестве нового провайдера, совместимого с OpenAI, с $200 бесплатных кредитов при регистрации (Issue #1572).
- **feat(ui):** Реализация тестирования моделей по запросу в панели управления провайдерами, позволяющая выполнять диагностические проверки с одним токеном без срабатывания ограничений скорости (Issue #1532).

- **feat(provider):** добавление провайдера сеанса ChatGPT Web (Plus/Pro) (#1593)
- **feat(provider):** добавление провайдера чата Baidu Qianfan (#1582)
- **feat(codex):** поддержка ответов GPT-5.5 через websocket (#1573)
- **feat(sse):** генерация изображений Codex CLI + маршрут изображений в стиле DALL-E (#1544)
- **feat(dashboard):** Завершение набора задач панели управления v3.7.0: инструменты кэша MCP, количество видео, видимость конечной точки, таксономия провайдеров, видимость прокси-сервера, значки количества провайдеров, обзор затрат, управление набором оценок, конструктор Custom CLI, копирование Агентов с фокусом на ACP, трансформер потока Translator, сходимость журналов, карточки состояния здоровья ограниченных скоростей, расширение документации и проверка активных полезных нагрузок запросов.
- **feat(mcp):** Регистрация `omniroute_cache_stats` и `omniroute_cache_flush` по всем схемам MCP, регистрация сервера, обработчики, документация и тесты.
- **feat(providers):** Завершение волны онбординга провайдеров v3.7.0 с самоподдерживаемыми/локальными провайдерами (`lm-studio`, `vllm`, `lemonade`, `llamafile`, `triton`, `docker-model-runner`, `xinference`, `oobabooga`), шлюзами, совместимыми с OpenAI (`glhf`, `cablyai`, `thebai`, `fenayai`, `empower`, `poe`), корпоративными провайдерами (`datarobot`, `azure-openai`, `azure-ai`, `bedrock`, `watsonx`, `oci`, `sap`), специализированными провайдерами (`clarifai`, `modal`, `reka`, `nous-research`, `nlpcloud`, `petals`, `vertex-partner`), `amazon-q`, GitLab/GitLab Duo и Chutes.ai.
- **feat(providers):** Добавление интеграции Cloudflare Workers AI и поддержки UI для надежного выполнения на бэкенде.
- **feat(telemetry):** Реализация проактивного захвата общедоступного IP-адреса из заголовков клиента (`x-forwarded-for`, `x-real-ip` и т.д.) в `safeLogEvents` для точной наблюдаемости базы данных.
- **feat(audio):** Добавление AWS Polly в качестве провайдера речевого аудио с подписью запросов SigV4, статическим каталогом движков, проверкой провайдера, покрытием UI для управляемых провайдеров и очисткой для полей секрета/сессии AWS.
- **feat(search):** Добавление поддержки провайдера поиска You.com с открытием в панели управления, проверкой, обработкой опции livecrawl и нормализацией обработчика поиска.
- **feat(video):** Добавление поддержки генерации видео на основе задач RunwayML, опроса задач, метаданных каталога провайдеров, проверки и покрытия списка моделей в панели управления.
- **feat(providers):** Добавление функции поиска в панель управления провайдерами с поддержкой i18n. (#1511 — спасибо @th-ch)
- **feat(providers):** Регистрация 6 новых моделей в каталоге провайдера opencode-go. (#1510 — спасибо @kang-heewon)
- **feat(providers):** Добавление провайдера ModelScope (китайский рынок ИИ) с интеграцией Kimi K2.5, GLM-5 и Step-3.5-Flash. (#1430 — спасибо @clousky2020)
- **feat(providers):** Добавление LM Studio в качестве локального провайдера, совместимого с OpenAI, для самостоятельного размещения модели.
- **feat(providers):** Добавление поддержки модели Grok 4.3 для запросов веб-исполнителя xAI.
- **feat(core):** Реализация Circuit Breaker на уровне провайдера для предотвращения каскадных сбоев в соединениях, с принудительным 10-минутным перерывом после 5 последовательных временных сбоев. (#1430)
- **feat(core):** Добавление блокировки исчерпания дневной квоты для обнаружения сигналов "квота исчерпана" и блокировки конкретной модели до полуночи. (#1430)
- **feat(core):** Автоматическая инъекция `stream_options.include_usage = true` для потоков в формате OpenAI для гарантии отчета о токенах во время потоковой передачи. (#1423)
- **feat(core):** Добавление поддержки OpenAI Batch Processing API — отправка, мониторинг и управление пакетными заданиями через прокси с полным отслеживанием жизненного цикла.
- **feat(vision-bridge):** Добавление автоматического резервного описания изображений для моделей без зрения через `VisionBridgeGuardrail` (приоритет 5). Перехватывает запросы с изображениями к моделям без зрения, извлекает описания через конфигурируемую модель зрения (по умолчанию: gpt-4o-mini) и заменяет изображения текстом перед отправкой. Открывается при любой ошибке. (#1476)
- **feat(dashboard):** Введение значков состояния модели в реальном времени с таймерами обратного отсчета в интерфейсах деталей провайдера и комбо-панели. (#1430)
- **feat(dashboard):** Добавление таблицы управления пакетами/файлами с полными переводами i18n для рабочих процессов пакетной обработки. (#1479)
- **feat(usage):** Отслеживание квот MiniMax + MiniMax-CN в панели управления лимитами провайдеров. (#1516)
- **feat(providers):** Исправление открытия OpenRouter и объединение синхронизации управляемых моделей. (#1521)
- **feat(providers):** Реализация ограничения параллелизма на уровне провайдера и аккаунта (`maxConcurrent`) с использованием надежных механизмов семафоров. (#1524)
- **feat(core):** Реализация генерации конфигурации Hermes CLI и очистки содержимого сообщения. (#1475)
- **feat(combos):** Добавление режима конфигурации экспертного комбо для расширенных контролов маршрутизации. (#1547)
- **feat(providers):** Регистрация Codex auto review и расширение покрытия иконок.
- **feat(tunnels):** Добавление маршрутов управления туннелями Tailscale и вспомогательных средств выполнения для установки, входа, запуска демона, включения/отключения и проверки состояния.

### 🐛 Bug Fixes

- **fix(mitm):** Компиляция утилит MITM в виде NodeNext ESM во время prepublish, копирование сервера MITM CommonJS в автономный артефакт и разрешение путей данных MITM без зависимости от псевдонимов Next.js в упакованной среде выполнения.
- **fix(build):** Перемещение локального префикса `.tmp/wine32` Wine вне пути сборки Next.js, чтобы артефакты упаковки Windows Electron не вызывали сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Копирование каталога `wreq-js` в автономный вывод Next.js, чтобы упакованные Playwright/E2E могли загружать хук инструментации на Linux.
- **fix(api):** Проверка веб-сокета Codex Responses и `/v1/batches` JSON-полезных нагрузок с помощью Zod перед использованием, сохраняя зеленую проверку `request.json()` и возвращая явные 400-ответы для недопустимых тел.
- **fix(providers):** Добавление явного типирования для помощников псевдонимов и категорий провайдеров, чтобы пройти шлюз `typecheck:noimplicit:core` CI.
- **fix(ui):** Поддержка метки страницы деталей прокси-сервера провайдера с резервной поверхностью "Управляется через настройки прокси-сервера" при отсутствии переводов.
- **fix(electron):** Укрепление CSP для рабочей среды путем удаления `unsafe-eval` вне разработки и добавления ограничений объекта, URI базы, действия формы, предка фрейма и рабочего процесса.
- **fix(cli):** Замена интерполированных путей установки и привилегированных команд выполнения с помощью помощников `spawn`/`execFile` на основе аргументов для установки базы данных, команд Tailscale sudo, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Поддержка иконок провайдеров с использованием прямых компонентов `@lobehub/icons`, а затем резервных PNG/SVG, избегая среды выполнения `@lobehub/ui` в панели управления.

- **fix(chatgpt-web):** Исправление гонки пустых файлов в `tlsFetchStreaming`, где `waitForFile` принимал файлы нулевого размера, молча деградируя потоковые запросы до буферизованного режима. Заменено на `waitForContent`, требующее `file.size > 0` с ранним выходом при завершении запроса. (#1597 — спасибо @trader-payne)
- **fix(chatgpt-web):** Исправление устаревших куки сеанса NextAuth при изменении формы (неразбитый↔разбитый). `mergeRefreshedCookie` теперь удаляет всех членов семейства сеанса-токен через `SESSION_TOKEN_FAMILY_RE` перед добавлением обновленного набора, предотвращая ошибки аутентификации от двойной отправки куки. (#1597 — спасибо @trader-payne)
- **fix(codex):** Удержание памяти веб-сокета и обработка еженедельных лимитов (#1581)
- **fix(providers):** Логика списка моделей по умолчанию (#1577)
- **fix(ui):** Гидратация URL-адреса конечной точки панели управления уважает `NEXT_PUBLIC_BASE_URL` при использовании с обратным прокси (#1579)
- **fix(providers):** Восстановление строгого заголовка PascalCase для Claude Code, чтобы решить ошибки HTTP 429 (#1556)
- **fix(sse):** Укрепление прохождения Responses для чувствительных к размеру клиентов (#1580)
- **fix(codex):** Обновление версии клиента для gpt-5.5 (#1578)
- **fix(vision-bridge):** Принудительное использование семейства GPT для резервного изображения (#1571)
- **fix(claude):** Пропуск адаптивных настроек мышления для неподдерживаемых моделей (#1563)
- **fix(claude):** Сохранение смежности tool_result в родных и совместимых с CC-путях (#1555)
- **fix(reasoning):** Сохранение `reasoning_effort` OpenAI Chat Completions через запросы предварительной подготовки помощника и явное обозначение протоколов запросов OpenAI как `OpenAI-Chat` или `OpenAI-Responses`. (#1550)
- **fix(codex):** Исправление маршрутизации моделей Codex auto-review, чтобы трафик проверки разрешался на нужную настроенную модель. (#1551)
- **fix(resilience):** Маршрутизация HTTP 429 через настройки среды выполнения, чтобы поведение перерыва следовало настроенному профилю устойчивости. (#1548)
- **fix(providers):** Нормализация ключей заголовков Anthropic в нижнем регистре в реестре провайдеров, чтобы избежать дублирующихся или вариантных заголовков. (#1527)
- **fix(providers):** Сохранение метаданных аудио, встраивания, переранжирования, изображений, видео и совместимых с OpenAI псевдонимов при слиянии `/v1/models` статического и обнаруженного каталогов.
- **fix(providers):** Обнаружение развертываний Azure OpenAI из конечных точек ресурсов с использованием аутентификации `api-key` и настраиваемой версии API.
- **fix(providers):** Поддержка локальных провайдеров в стиле OpenAI без ключа API при отсутствии настроенного ключа.
- **fix(translator):** Сохранение системных инструкций по умолчанию Antigravity и системных инструкций, предоставленных вызывающим, как отдельные части Gemini `systemInstruction` вместо их конкатенации.
- **fix(security):** Очистка провайдер-специфичных секретов и токенов сеанса AWS из ответов API управления провайдерами.
- **fix(release):** Исправление регрессий комбо-префиксов, упаковки Electron, аутентификации CLI и интеграции ветки выпуска. (#1471, #1492, #1496, #1497, #1486)
- **fix(providers):** Решение ошибок 400 для GLM и адаптера Claude Antigravity при переводе запросов путем ограничения кэширования подсказок к совместимым с Anthropic конечным точкам и уплощения системных инструкций. (#1514, #1520, #1522)
- **fix(core):** Удаление `reasoning_content` из сообщений в формате OpenAI для моделей без рассуждений, чтобы предотвратить ошибки HTTP 400 при проверке. (#1505)
- **fix(sse):** Отображение `output_config/thinking` Claude на `reasoning_effort` OpenAI для правильного перевода инструментов Antigravity. (#1528)
- **fix(combo):** Резервная модель при всех ограниченных по аккаунту (HTTP 503/429), чтобы обеспечить высокую доступность. (#1523)
- **fix(api):** Укрепление конечных точек пакетов и файлов для аутентификации и восстановления, чтобы предотвратить коллизии состояния схемы.
- **fix(ui):** Добавление отсутствующей проводки UI для кнопок "Добавить память" и "Импорт" на странице `/dashboard/memory`. (#1506)
- **fix(ui):** Предотвращение FOUC (Flash of Unstyled Content) в темном режиме путем внедрения синхронного скрипта инициализации темы в корневой `layout.tsx`.
- **fix(ui):** Исправление переполнения текста на мобильных устройствах в карточках провайдеров и комбо, а также включение прикосновений для переупорядочивания стрелок во всех стратегиях комбо.
- **fix(core):** Добавление периодических проверок ротации журналов выполнения, чтобы предотвратить истощение диска в долгосрочных экземплярах. (#1504 — спасибо @ether-btc)
- **fix(build):** Решение отсутствия модуля `process` в сборке клиента webpack для pino-abstract-transport. (#1509 — спасибо @hartmark)
- **fix(ui):** Добавление поддержки темного режима для нативных элементов `<option>` выпадающего списка на Linux/Windows, исправляя невидимый текст в настройках и конструкторах комбо (#1488)
- **fix(batch):** Добавление отправки элементов пакета в конкретные обработчики на основе URL-адреса для поддержки встраиваний и других модульностей (#1495 — спасибо @hartmark)
- **fix(dashboard):** Исправление коррупции TOML при циклическом прохождении в сериализаторе конфигурации Codex, декотирование ключей и сохранение структур массива/булева правильно. (#1438 — спасибо @benzntech)
- **fix(security):** Решение предупреждений CodeQL 164 (ReDoS в извлечении) и 163 (неполная очистка URL). (#163, #164)
- **fix(providers):** Добавление необязательной цепочки для объекта соединения перед доступом к `providerSpecificData`, предотвращая ошибки выполнения, когда соединение равно null/undefined.
- **fix(codex):** Сохранение пространства имен MCP инструментов, пересылаемых в API Codex Responses, предотвращая удаление имен инструментов во время перевода. (#1483)
- **fix(codex):** Удаление дублирующегося заголовка `anthropic-version` в исправлении Claude Code, чтобы предотвратить двойное внедрение заголовка. (#1481)
- **fix(fallback):** Использование общего `CircuitBreaker` вместо неопределенных констант, исправляющее ошибки выполнения в обработке сбоев провайдера. (#1485)
- **fix(fallback):** Слияние новых полей порога сбоя провайдера (`providerFailureThreshold`, `providerFailureWindowMs`, `providerCooldownMs`) в профили устойчивости.
- **fix(fallback):** Удаление 429 из `PROVIDER_FAILURE_ERROR_CODES` — ограничения скорости уже обрабатываются блокировками уровня модели и аккаунта; включение их в цепь предотвращения сбоев провайдера вызывает преждевременный перерыв.
- **fix(sse):** Включение вызова инструментов для моделей GPT OSS и DeepSeek Reasoner. (#1455)
- **fix(encryption):** Возврат null при сбое расшифровки, чтобы предотвратить отправку зашифрованных токенов провайдерам. (#1462)
- **fix(combo):** Решение ошибок 400 мышления и проблем с буфером обмена HTTP при маршрутизации комбо. (#1444)
- **fix(core):** Решение проблем с навыками, памятью и системой шифрования, влияющих на стабильность запуска и выполнения. (#1456)
- **fix(core):** Исправление анализа идентификатора модели для провайдеров с косой чертой в именах моделей — использование `indexOf`/`substring` вместо `split` для обработки моделей, таких как `modelscope/moonshotai/Kimi-K2.5`.
- **fix(core):** Исправление подсчета ссылок в `ModelStatusContext` — изменение `registeredModels` с `Set` на `Map<string, number>`, чтобы предотвратить остановку опроса, когда одна компонента размонтируется, а другие все еще отслеживают одну и ту же модель.
- **fix(security):** Сбои защиты от инъекции подсказок теперь возвращают явный ответ 500 вместо молчаливого прохождения (политика fail-closed).
- **fix(security):** Шифрование теперь выводит новые ключи из соли на основе секрета, сохраняя резервный статический ключ соли при расшифровке, чтобы сохранить существующие учетные данные.
- **fix(combo):** Решение ошибки усечения контекста при маршрутизации комбо для предотвращения неполных состояний выполнения. (#1517)
- **fix(compression):** Реализация двусторонней очистки tool_pair для входных данных anthropic (исправляет #1592).
- **fix:** Решение проблем стабилизации v3.7.0, включая навигацию по панели управления, макет компонента ProxyRegistryManager и слияние ответов API моделей (#1566, #1560, #1559).
- **fix(cli):** Сохранение типов целых чисел/булева в TOML при циклическом прохождении конфигурации Codex для предотвращения ошибок проверки `tui.model_availability_nux`.
- **fix(tailscale):** Поддержка запросов sudo и обнаружения живого сокета демона для управления туннелями без прав root.
- **fix(dashboard):** Стабилизация загрузки и поведения обновления вкладки использования для предотвращения состояния пустого экрана.
- **fix(i18n):** Перевод 519 непереведенных ключей pt-BR и добавление отсутствующих ключей документации Windsurf/Cline/Kimi.
- **fix(i18n):** Добавление отсутствующих ключей сообщений панели управления для всех 30 локалей.
- **fix(cli):** Выравнивание предварительного просмотра конфигурации OpenCode и добавление выбора нескольких моделей (#1602).
- **fix(security):** Укрепление аутентификации API управления и конечной точки try-proxy OpenAPI.
- **fix(security):** Решение проблем сканирования уязвимостей для маршрутов, защищенных аутентификацией.

### ♻️ Refactoring

- **refactor(fallback):** Сделать пороги сбоя провайдера настраиваемыми через `PROVIDER_PROFILES` вместо жестко закодированных констант, поддерживая разную толерантность к сбоям для разных типов провайдеров. (#1449)
- **refactor(resilience):** Единообразие контролов устойчивости по всему коду для согласованного поведения цепи предотвращения сбоев и резервного копирования. (#1449)
- **refactor(core):** Реализация общих утилит пути, добавление пользовательского форматирования даты, улучшение безопасности типов и объединение импортов базы данных по модулям.
- **refactor(security):** Укрепление создания архива резервной копии путем переключения на `execFileSync`, проверка идентификаторов агентов ACP, расширение общего обработчика CORS.
- **refactor(release):** Удаление устаревших рабочих процессов агентов и артефакта `src/lib/dataPaths.js`. (#1541)

### 🧪 Tests

- **test(providers):** Добавление целевого покрытия для речи и проверки AWS Polly SigV4, обнаружения развертываний Azure OpenAI, обнаружения локального Lemonade, таксономии панели управления провайдерами, поведения каталога управляемых провайдеров и метаданных псевдонимов слияния `/v1/models`.
- **test(catalog):** Добавление покрытия каталога v3.7.0 для текстовых моделей Pollinations, Sonar Perplexity через Puter и разрешения бесплатных моделей NVIDIA.
- **test(vision-bridge):** Добавление 51 юнит-теста, покрывающих все сценарии спецификации VisionBridge (VB-S01 через VB-S10), включая вспомогательные функции для `callVisionModel`, `extractImageParts`, `replaceImageParts` и `resolveImageAsDataUri`.
- **test(batch-api):** Изоляция юнит-тестов API пакетов с временным `DATA_DIR`, чтобы предотвратить коллизии состояния схемы.
- **test(settings-api):** Добавление тестового стенда с функцией `createSettingsApiHarness` для правильной настройки временного каталога и сброса хранилища между тестами.
- **test(security):** Обновление теста на инъекцию подсказок для выравнивания с политикой fail-closed.
- **test(core):** Восстановление локальных исправлений тестов для модулей шифрования и устойчивости.
- **test(next):** Выравнивание ожиданий пакета для сборки Next.js standalone.
- **test(ci):** Исправление сбоев тестов только CI из-за различий в среде — очистка `INITIAL_PASSWORD` и `JWT_SECRET` в интеграционных тестах, обработка `XDG_CONFIG_HOME` для тестов guide-settings.

### 📚 Documentation

- **docs:** Обновление корневого changelog со всеми изменениями ветки выпуска до 2026-04-24, включая PR #1544, #1555, #1551, #1550, #1548, #1547, #1541, #1538, #1536 и #1527.
- **docs:** Исправление сломанных ссылок на README и локализованную документацию. (#1536)
- **docs:** Добавление покрытия документации панели управления для текущих конечных точек API, API управления, ACP, инструментов MCP, онбординга провайдеров и согласования задач v3.7.0.
- **docs:** Добавление заметок об установке Arch Linux AUR для поддержки пакетов сообщества. (#1478)
- **docs(i18n):** Улучшение качества перевода на украинский (uk-UA) — полный украинский перевод для документов README, SECURITY, A2A-SERVER, API_REFERENCE, AUTO-COMBO и USER_GUIDE. Исправление смешанных латинских/кириллических опечаток, перевод записей таблицы моделей и стандартизация заголовков разделов.

### 🛠️ Maintenance

- **chore:** Добавление `.tmp/` в `.gitignore`, чтобы держать локальные артефакты сборки/тестирования вне диффов выпуска. (#1538)
- **chore(release):** Уточнение правил согласования версий выпуска и разделения changelog для сгенерированных рабочих процессов выпуска.

### 📦 Dependencies

- **deps:** Обновление группы разработки с 4 обновлениями. (#1464)
- **deps:** Обновление группы продакшена с 4 обновлениями. (#1463)
- **deps:** Обновление `@lobehub/icons` до `5.5.4`, добавление явного `react-is@19.2.5` для Recharts, фиксация установок npm для пропуска неиспользуемых автоустановок peer, и переопределение транзитивного `@xmldom/xmldom` Electron на `0.9.10`, чтобы оставшиеся находки аудита оставались закрытыми.

---

---

---

## [3.6.9] — 2026-04-19

### ✨ New Features

- **feat(docs):** интегрировать многостраничную документацию в панель управления OmniRoute (#1969)
- **feat(settings):** добавить настройку лимита тела запроса (#1968)
- **feat(auth):** добавить стандартный секрет OAuth-клиента Gemini CLI (#1974)
- **feat(models):** предоставить контекстные окна models.dev в /v1/models (#1972)
- **fix(db):** решить проблему с резервным шифрованием, вызывающим циклы повторного шифрования (#1941)
- **fix(auth):** исправить очистку ответа final_answer для помощника Codex (#1965)

- **feat(providers):** Реализовать возможности генерации и редактирования изображений для ChatGPT Web, включая генерацию изображений в чате и кэширование (#1606).
- **feat(ui):** Интегрировать SVG-логотип API-инструмента OpenCode Zen/Go и улучшить взаимодействие с копированием API-ключа в буфер обмена (#1607).

- **feat(providers):** Пометить провайдера Qwen OAuth как устаревший после завершения бесплатного уровня на стороне поставщика 2026-04-15. Добавляет предупреждение об устаревании в UI инструмента CLI и переписывает `saveQwenConfig` для внедрения OmniRoute как много-провайдерного (openai, anthropic, gemini) через `.qwen/settings.json` и `.qwen/.env` (#1437)
- **feat(cc-compatible):** Выровнять форму запроса Claude Code-compatible с официальным протоколом CLI Claude, включая правильную систему скелетов и нормализацию запросов (#1411)
- **feat(skills):** Провайдер-ориентированный UX рынка с оценкой AUTO и укреплением конвейера памяти. Навыки теперь показывают оценки релевантности и могут автоматически внедрять контекст в запросы (#1411)
- **feat(claude-code):** Обновить обфусцирование Claude Code до версии 2.1.114, централизовать жестко закодированные строки версии и использовать стандартный логгер (#1403)
- **feat(cli-tools):** Добавить прямое создание и переопределение конфигурационных файлов для локальных настроек Qwen Code (#1394)
- **feat(providers):** Динамически извлекать модели по умолчанию для CLI Claude из реестра провайдеров, чтобы оставаться в курсе изменений в API (#1393)
- **feat(core):** Реализовать постоянный API-ключ, очистку резервных копий и оптимизацию GPU (#1350, #1367, #1369)

### 🐛 Bug Fixes

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать сервер MITM CommonJS в автономный артефакт и решить пути данных MITM без зависимости от псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать каталог `wreq-js` с нативным временем выполнения в изолированный выходной каталог Next.js standalone, чтобы упакованные Playwright/E2E могли загрузить хук инструментации на Linux.
- **fix(api):** Проверять мост веб-сокета Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую проверку `request.json()` и возвращая явные 400 ответы для недопустимых тел.
- **fix(providers):** Добавить явную типизацию для помощников псевдонимов и категорий провайдеров, чтобы строгий `typecheck:noimplicit:core` CI gate прошел.
- **fix(ui):** Сохранять страницу деталей провайдера через прокси с меткой "Управляется через настройки прокси-сервера" при отсутствии переводов.
- **fix(electron):** Укрепление CSP для рабочей среды путем удаления `unsafe-eval` вне разработки и добавления ограничений объекта, базового URI, действия формы, предка фрейма и рабочего процесса.
- **fix(cli):** Заменить пути установки и выполнения привилегированных команд с интерполяцией оболочки на помощников `spawn`/`execFile` на основе аргументов для установки базы данных, команд sudo Tailscale, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранять устойчивость значков провайдеров, используя сначала компоненты `@lobehub/icons`, затем локальные резервные копии PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели управления.

- **fix(cli-tools):** Предотвратить запись замаскированных API-ключей (`sk-31c4****8600`) в конфигурационные файлы инструментов CLI. UI панели управления теперь передает `key.id` в бэкенд, который разрешает не замаскированный ключ из базы данных через новый помощник `resolveApiKey()`. Исправляет сбои аутентификации во всех инструментах CLI (Claude, Codex, Cline, Kilo, Droid, OpenClaw, Antigravity) (#1435)
- **fix(cc-compatible):** Обрезать стандартный скелет системного подсказка Claude Code-compatible с многоабзацного набора инструкций до одной строки идентификатора, уменьшая избыточное использование токенов, так как Claude Code уже внедряет свой обширный системный контекст (#1433)
- **fix(security):** Решить проблему статической оценки окружения SSRF, где защита исходящего URL могла быть обойдена через вычисляемые выражения (#1427)
- **fix(auth):** Перезагрузить свежее состояние токена и унифицировать сохранение срока действия, чтобы предотвратить использование устаревших учетных данных, вызывающих каскадные сбои аутентификации
- **fix(core):** Стабилизационные исправления для обновления токена, перевода использования и инфраструктуры тестирования
- **fix(api):** Перестать отправлять неподдерживаемые параметры в API-интерфейсы Gemini и Codex, предотвращая ошибки 400 Bad Request
- **fix(skills):** Оптимизировать алгоритм оценки AUTO и включить контекст входных данных API Responses для более точного соответствия релевантности навыков (#1418)
- **fix(responses):** Сохранять содержимое рассуждений при переводе формата Chat Completions в формат API Responses, предотвращая потерю данных цепочки мышления (#1414)
- **fix(cc-compatible):** Добавить скелет системы CLI Claude для входных данных в формате OpenAI, чтобы обеспечить согласованное поведение при получении провайдерами, совместимыми с CC, полезных нагрузок в стиле OpenAI
- **fix(providers):** Добавить `ref` в `GEMINI_UNSUPPORTED_SCHEMA_KEYS`, чтобы исправить ошибки 400 в CLI Gemini при наличии полей `$ref` в схемах инструментов
- **fix(codex):** Предотвратить проактивное обновление токена от потребления действительных токенов и удалить неподдерживаемый параметр `background` из исходящих запросов
- **fix(providers):** Исправить недооценку `usage.prompt_tokens` при переводе ответов кэширования Claude в формат OpenAI (#1426)
- **fix(core):** Исправить устойчивость обновления токена для провайдеров Codex. Невосстановимые ошибки обновления OAuth (`token_expired` и `invalid_token`) теперь правильно помечают соединение как недействительное, чтобы предложить пользователю повторную аутентификацию, а не завершаться сбоем (#1415)
- **fix(providers):** Исправить вызов инструментов Gemini, удалив неподдерживаемое поле схемы `additionalProperties`, что решило ошибки 400 во время сложных вызовов инструментов (#1421)
- **fix(providers):** Удалить произвольное внедрение подписи мыслей пользователя в ответы Gemini в соответствии с обновленными ограничениями API (#1410)
- **fix(providers):** Исправить несоответствие количества частей API для потоковых ответов Gemini (#1412)
- **fix(codex):** Учитывать настройку `openaiStoreEnabled` во время нативного пропуска для API Responses, чтобы предотвратить неподдерживаемые аргументы входящих запросов (#1432)
- **fix(ui):** Сделать текст выпадающего списка видимым в темном режиме в модальном окне Combo Builder (#1409)
- **fix(chatcore):** Применить проактивное сжатие перед переводом провайдера, чтобы предотвратить ошибки превышения лимита токенов в маршрутах комбо (#1406)
- **fix(claude-code):** Ограничить удаление мыслей границами исполнителя, чтобы предотвратить проблемы с обычными API-запросами (#1401)
- **fix(claude-code):** Ограничить логику обфусцирования только для клиентов CLI и исправить связанные утверждения тестов
- **fix(mitm):** Исправить проблему с MITM при подключении Antigravity (#1399)
- **fix(security):** Решить предупреждение CodeQL о хэше пароля и исправить сбой CI TruffleHog (#161)
- **fix(combo):** Перейти к следующей модели, когда все учетные записи провайдеров возвращают сигнал 503 rate-limited, вместо прерывания последовательности маршрутизации (#1398)
- **fix(codex):** Удалить идентификаторы, сгенерированные сервером, из элементов входных данных, чтобы предотвратить ошибки 404 при поиске в многоходовых Codex Conversations (#1397)
- **fix(codex):** Оптимизировать пути Chat Completions, преобразуя роли `system` в `developer` вместо их подъема в инструкции, что позволяет кэшировать подсказки для сообщений системы на моделях GPT-5 (#1400)
- **fix(providers):** Решить проблему пропуска Claude (#1359), отклонение заголовков рассуждений Kimi-k2 (#1360), утечки параметров мыслей (#1361) и сброс перенаправлений Ollama proxy (#1381)
- **fix(core):** Поиск прокси в проверке ключа уважает новые среды ProxyRegistry, и контексты прокси правильно наследуются вниз во время обновления токена, предотвращая циклы истечения (#1384, #1390)
- **fix(providers):** Обрабатывать ответы HTTP 5xx валидации старого формата как допустимый обход для токенов PAT Qoder, чтобы предотвратить ложные отрицательные результаты недействительности (#1391)
- **fix(electron):** Решить ошибку типа в свойствах electronAPI Header
- **fix(security):** Решить предупреждения безопасности CodeQL, включая безопасные привязки прототипов (#151, #152, #154, #155-159)
- **fix(tsc):** Заглушить предупреждения об устаревании `baseUrl` для конфигураций TypeScript 5.5+

### 🧪 Tests

- **test(core):** Решить жалобы строгой типизации TypeScript и исправить регрессию теста combo-routing-engine
- **test(core):** Решить оставшиеся ошибки строгой типизации во всех файлах модульных тестов
- **test(providers):** Исправить утверждение службы провайдера для формата заголовка anthropic-compatible
- **test(codex):** Выровнять утверждения пропуска Codex с явной политикой сохранения хранилища
- **test(codex):** Исправить утверждение хранилища для ответов Codex
- **test(cli):** Решить строгие проверки null в модульных тестах Qoder

### 🛠️ Maintenance

- **chore:** Синхронизировать инфраструктуру с компонентами postinstall docker и вторичными правилами анализа CodeQL
- **chore:** Применить правило кредитования участников в workflow review-prs
- **chore:** Исправить ошибки TS и обновить workflow review-prs для улучшения автоматизации
- **ci:** Разрешить ручное запуск CI для веток релиза
- **ci:** Разделить длинные наборы тестов и расслабить тайм-ауты для стабильности
- **ci:** Восстановить конвейер сборки релиза v3.6.9 и исправить хрупкие тесты
- **docs:** Обновить workflow generate-release для использования полного changelog в теле PR
- **docs:** Применить слияние PR вместо ручного закрытия в workflows

---

---

---

## [3.6.8] — 2026-04-17

### ✨ New Features

- **feat(docs):** интеграция многостраничной документации в панель управления OmniRoute (#1969)
- **feat(settings):** добавление настройки лимита тела запроса (#1968)
- **feat(auth):** добавление значения по умолчанию для секрета OAuth-клиента Gemini CLI (#1974)
- **feat(models):** предоставление контекстных окон моделей в /v1/models (#1972)
- **fix(db):** исправление ошибки с резервным шифрованием, вызывающей циклы повторного шифрования (#1941)
- **fix(auth):** исправление очистки ответа final_answer для ассистента Codex (#1965)

- **feat(providers):** Реализация возможностей генерации и редактирования изображений для ChatGPT Web, включая генерацию изображений в чате и кэширование (#1606).
- **feat(ui):** Интеграция SVG-логотипа инструмента API OpenCode Zen/Go и улучшение взаимодействий с API-ключом копирования в буфер обмена (#1607).

- **feat(providers):** Интеграция AgentRouter в качестве нового провайдера, совместимого с OpenAI, с $200 бесплатных кредитов при регистрации (Issue #1572).
- **feat(ui):** Реализация тестирования моделей по запросу в панели управления провайдерами, позволяющая выполнять диагностические проверки с одним токеном без триггера лимитов скорости (Issue #1532).

- **feat(providers):** Поддержка уровня рассуждений `xhigh` исключительно для моделей Claude, которые его предоставляют (#1356)
- **feat(providers):** Добавление переключателя уровня соединения 1M контекста CC Compatible (#1357)
- **feat(core):** Полная поддержка LTS-окружения Node.js 24 (Krypton) с покрытием непрерывной интеграции (#1340)
- **feat(dashboard):** Отображение баланса кредитов Antigravity в разделе Лимиты и квоты панели управления (#1338)
- **feat(i18n):** Добавлена поддержка интернационализации для комбинированных функций и компонентов панели управления; синхронизация переводов по 31 ключам (#1318)
- **feat(providers):** Добавление модели Claude Opus 4.7 в нативные модели OAuth-клиента Claude Code с расширенным контекстом и кэшированием (#1347)
- **feat(core):** Добавлена поддержка stopSequences и расширение определений инструментов для включения возможностей Google Search
- **feat(auth):** Принудительная аутентификация сеанса панели управления на всех маршрутах API управления, предотвращающая неаутентифицированный доступ к конечным точкам конфигурации
- **feat(runtime):** Добавление горячей перезагрузки защитных правил и диагностики моделей для оценки правил в реальном времени без перезагрузки
- **feat(core):** Добавление правил полезной нагрузки, маршрутизации на основе тегов и систем бюджетирования для тонкого управления запросами
- **feat(providers):** Предоставление псевдонимов моделей Antigravity и потока онбординга Gemini CLI для первоначальной настройки
- **feat(antigravity):** Добавление псевдонимов моделей клиента и режимов обхода thoughtSignature для соединений Antigravity OAuth
- **feat(providers):** Расширение реестра провайдеров изображений с поддержкой расширенных моделей, включая конфигурации SD3.5, FLUX и DALL-E 3 HD
- **feat(combos):** Добавление новых стратегий маршрутизации и полной поддержки i18n для раздела функций агента на 31 языках

### 🔒 Security

- **security:** Решение 18 предупреждений сканирования GitHub CodeQL, включая ReDoS, неполную очистку и шаблоны regexp для фильтрации плохого HTML
- **fix(auth):** Закрытие вектора повышения привилегий путем принудительной проверки JWT-сессии исключительно на конечных точках управления `/api/keys` (#1353)
- **fix(providers):** Решение состояния гонки обновления токена Codex через мьютекс `getAccessToken`, предотвращающее отзывы `refresh_token_reused` Auth0

### 🔧 Maintenance & Architecture

- **refactor(core):** Разделение запуска CLI и отсоединение движка миграции для расширяемости (#1358)
- **refactor(audit):** Переподключение панели управления аудитом от мертвого хранилища `configAudit` в оперативную таблицу SQLite `audit_log` — 331+ скрытых записей соответствия теперь видны в `/dashboard/audit`
- **build(deps):** Обновление `softprops/action-gh-release` с v2 до v3
- **ci:** Обновление версии node в GitHub Actions CI до Node.js 24
- **fix(types):** Решение ошибок компиляции TypeScript в `claudeCodeCompatible.ts` (предикаты типов, доступ к индексу `cache_control`) и `proxyFetch.ts` (`signal` nullability)

### 🐛 Bug Fixes

- **fix(mitm):** Компиляция утилит MITM как NodeNext ESM во время prepublish, копирование сервера MITM CommonJS в автономный артефакт и решение путей данных MITM без зависимости от псевдонимов Next.js в среде выполнения.
- **fix(build):** Перемещение локального префикса Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Копирование каталога `wreq-js` в изолированный выходной каталог Next.js, чтобы упакованные запуски Playwright/E2E могли загружать хук инструментации на Linux.
- **fix(api):** Валидация вебсокет-моста Codex Responses и полезных нагрузок `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую валидацию `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавление явного типизирования к помощникам псевдонимов и категорий провайдеров, чтобы строгий шлюз `typecheck:noimplicit:core` CI прошел.
- **fix(ui):** Поддержание иконок провайдеров устойчивыми путем использования компонентов `@lobehub/icons` напрямую, а затем резервных локальных PNG/SVG, избегая среды выполнения `@lobehub/ui` в панели управления.
- **fix(context):** Масштабирование зарезервированных токенов контекста динамически с использованием 15%-го скользящего окна для более мелких моделей
- **test(core):** Замена модульного теста интеграционным тестом для проактивного сжатия контекста для соответствия правилам изолированного исполнителя (#1378)
- **fix(services):** Передача исходного провайдера в refreshWithRetry, чтобы избежать срабатывания универсального "неизвестного" разрыва цепи (исправляет ошибочное отключение учетных записей Codex)
- **fix(db):** Предотвращение аварийных загрузок нативных модулей ABI от предположения о повреждении базы данных и пропуска баз данных
- **fix(db):** Увеличение порога массовой миграции с 5 до 50 ожидающих миграций для защиты пользователей с устаревшими версиями
- **fix(db):** Предотвращение аварийных прерываний миграционного исполнителя при установке свежих `DATA_DIR`, обнаружение новых баз данных (#1328)
- **fix(mcp):** Контрольная точка и безопасное закрытие базы данных SQLite аудита MCP при сигналах процесса и завершении работы (#1348)
- **fix(mcp):** Полное отсоединение кэширования соединений базы данных SQLite аудита MCP через globalThis для исправления необработанного завершения в автономных частях Next.js (#1349)
- **fix(cli):** Предотвращение создания каталога маршрутизатора приложений во время инициализации postinstall на нескомпилированных исходных деревьях (#1351)
- **fix(codex):** Правильное преобразование роли `system` в `developer` в массиве входных данных для разблокировки автоматического кэширования подсказок GPT-5 (#1346)
- **fix(core):** Передача заголовков клиента в исполнитель в chatCore (#1335)
- **fix(providers):** Разделение пакетных вызовов тестирования и игнорирование неизвестных соединений
- **fix(providers):** Добавление обработчика проверки cookie SSO для grok-web (#1334)
- **fix(db):** Сохранение настроек key_value (пароли панели управления, сохраненные псевдонимы) при пересоздании базы данных (#1333)
- **fix(routing):** Разрешение каскадных ошибок переполнения контекста 400 вместо немедленных прерываний для резервных комбо (#1331)
- **fix(core):** Исправление утечек мышления, последовательных ролей и отсутствующих thoughtSignatures для переводчика Antigravity (#1316)
- **fix(translator):** Применение thoughtSignature только к первой части `functionCall` в параллельных вызовах инструментов Gemini, предотвращая дублирование подписей
- **fix(providers):** Использование блоков выполнения тестирования пакетов по умолчанию для веб-модальностей, поиска и аудио, чтобы предотвратить тайм-ауты соединения
- **fix(cli):** Решение несовместимости точек входа TS Node 22 с использованием компиляции esbuild (#1315)
- **fix(chat):** Сохранение max_output_tokens для целевых моделей API Responses в очистке chatCore (#1313)
- **fix(api):** Статистика использования API Manager показывает 0 для всех зарегистрированных ключей (#1310)
- **fix(api):** Поддержка моделей только для изображений в каталоге и разрешение провайдерам поиска без аутентификации обходить требования валидации
- **fix(routes):** Требование подсказок для запросов на генерацию медиа (`/images`, `/videos`, `/music`), возвращение 400 при отсутствующих полезных нагрузках
- **fix(dashboard):** Автоматическая прокрутка ActivityHeatmap для отображения текущей даты (#1309)
- **fix(dashboard):** Восстановление горизонтального макета с оберткой `w-max` в компонентах heatmap
- **fix(i18n):** Обновление `nodeIncompatibleHint` для рекомендации Node 24 LTS на всех 31 языках
- **fix(i18n):** Добавление поддержки китайского языка для оставшихся компонентов панели управления (`Loading.tsx`, `DataTable` и т.д.)
- **fix(requestLogger):** Добавление отсутствующих столбцов `cacheSource` и `tps` в детальные представления журнала i18n

---

---

## [3.6.6] — 2026-04-15

### ✨ New Features

- **feat(docs):** интеграция многостраничной документации в панель управления OmniRoute (#1969)
- **feat(settings):** добавление настройки лимита тела запроса (#1968)
- **feat(auth):** добавление значения по умолчанию для секрета OAuth-клиента Gemini CLI (#1974)
- **feat(models):** предоставление контекстных окон моделей в /v1/models (#1972)
- **fix(db):** устранение проблемы с резервным шифрованием, вызывающим циклы повторного шифрования (#1941)
- **fix(auth):** исправление очистки ответа final_answer для помощника Codex (#1965)

- **feat(providers):** Реализация возможностей генерации и редактирования изображений для ChatGPT Web, включая генерацию изображений в чате и кэширование (#1606).
- **feat(ui):** Интеграция логотипа SVG инструмента API OpenCode Zen/Go и улучшение взаимодействий с API-ключами (#1607).

- **feat(providers):** Интеграция AgentRouter в качестве нового провайдера, совместимого с OpenAI, с $200 бесплатных кредитов при регистрации (Issue #1572).
- **feat(ui):** Реализация тестирования моделей по запросу в панели управления провайдером, позволяющее выполнять диагностические проверки с одним токеном без срабатывания ограничений скорости (Issue #1532).

- **feat(storage):** Добавление элементов управления очисткой резервных копий базы данных, управления через интерфейс и настраиваемых переменных окружения для периода хранения (#1304)
- **feat(providers):** Добавление провайдера генерации изображений Freepik Pikaso с поддержкой аутентификации на основе cookie и подписки (#1277)
- **feat(providers):** Добавление провайдера Perplexity Web (Session) — маршрутизация через внутренний API SSE Perplexity с использованием сессионного cookie, предоставляющего нативный прокси-доступ к GPT-5.4, Claude Opus, Gemini 3.1 Pro и Nemotron через настройки предпочтений (#1289)
- **feat(api):** Синхронизация токенов и мост V1 WebSocket — выделенное хранилище синхронизированных токенов, выдача, отзыв и загрузка пакетов, поддерживаемые стабильной версией конфигурационного пакета с поддержкой ETag. Открывает маршрут `/v1/ws` для обновления WebSocket и мост сервера Next.js (`scripts/v1-ws-bridge.mjs`), чтобы трафик WebSocket, совместимый с OpenAI, мог проксироваться через шлюз. Аудит соответствия расширен с структурированными метаданными, пагинацией, контекстом запроса, событиями аутентификации и учетных данных провайдера, а также ведением журнала попыток валидации с заблокированным SSRF. Новые миграции: `024_create_sync_tokens.sql`. Новые модули: `syncTokens.ts`, `src/lib/sync/bundle.ts`, `src/lib/sync/tokens.ts`, `src/lib/ws/handshake.ts`, `src/lib/apiBridgeServer.ts`, `src/lib/compliance/providerAudit.ts`.
- **feat(models):** GLM Thinking Preset & Hybrid Token Counting — GLM Thinking (`glmt`) зарегистрирован как первый класс провайдера с общей метаданными модели GLM, ценообразованием, синхронизацией использования на соединение, поддержкой панели управления и значениями по умолчанию `maxTokens: 65536 / thinkingBudgetTokens: 24576` с расширенным таймаутом 900s. Используется конечная точка `/messages/count_tokens` на стороне провайдера, когда верхний поток поддерживает ее; плавно переходит на оценку при отсутствующих моделях, отсутствующих учетных данных или сбоях на стороне провайдера. Начальная загрузка значений по умолчанию для псевдонимов модели (`src/lib/modelAliasSeed.ts`) нормализует распространенные диалекты моделей через прокси, чтобы канонические идентификаторы моделей с косой чертой не были неправильно маршрутизированы. Новый файл `open-sse/config/glmProvider.ts`.
- **feat(core):** Укрепленные исходящие вызовы провайдера и повторные попытки с охлаждением — защищенные вспомогательные функции исходящего fetch (`src/shared/network/safeOutboundFetch.ts`, `src/shared/network/outboundUrlGuard.ts`), блокирующие частные/локальные URL-адреса с настраиваемыми повторными попытками, нормализацией таймаута и распространением статуса на уровне маршрута для валидации провайдера и обнаружения модели. Повторные попытки с учетом охлаждения чата (`src/sse/services/cooldownAwareRetry.ts`) с настраиваемыми параметрами `requestRetry` и `maxRetryIntervalSec` и ответами на охлаждение на уровне модели. Улучшенное обучение ограничениям скорости из заголовков и тел ошибок, чтобы короткие блокировки на стороне провайдера могли восстанавливаться автоматически. Проверка среды выполнения (`src/lib/env/runtimeEnv.ts`) проверяет env при запуске. Pollinations теперь требует API-ключ. Обработка заголовков Antigravity и Codex выровнена через `open-sse/config/antigravityUpstream.ts` и `open-sse/config/codexClient.ts`. Имена инструментов Gemini восстановлены в переведенных ответах; синтетический текстовый блок Claude внедряется, когда поток SSE верхнего уровня завершается пустым.
- **feat(logs):** Добавление метрики TPS (Токенов в секунду) в модальное окно деталей журнала (#1182)
- **feat(memory+skills):** Полнофункциональные системы памяти и навыков с поиском FTS5 SQLite, динамической пагинацией интерфейса, наблюдаемостью на стороне сервера и обширным покрытием тестами (#1228)
- **feat(bailian-quota):** Мониторинг квот Alibaba Coding Plan, извлечение квот из нескольких окон и проверка учетных данных в интерфейсе (#1235)
- **feat(storage):** Рефакторинг хранилища журналов вызовов — тяжелые полезные нагрузки запроса/ответа JSON были извлечены из основной базы данных SQLite (`storage.sqlite`) и сохранены в виде артефактов файловой системы в `DATA_DIR/call_logs`. Это значительно уменьшает раздутие WAL и исключает сбои `SQLITE_FULL` на высоконагруженных узлах (#1307).
- **feat(providers):** Добавление провайдера Grok Web (Subscription) — маршрутизация через веб-интерфейс xAI для пользователей с подпиской через отображение сессии cookie (#1295).
- **feat(api):** Расширенная поддержка мультимедиа — расширяет общий прокси-сервер OpenAI для нативной поддержки рабочих процессов `image`, `embeddings`, `audio-transcriptions` и `audio-speech` (#1297).
- **feat(cli-tools):** Интеграция Qwen Code CLI — полная интеграция для отображения выполнения Qwen Code, разрешения модели и динамического получения API-ключа (#1266, #1263).
- **feat(oauth):** Поддержка `cursor-agent` CLI в качестве нативного источника учетных данных Cursor наряду со стандартной конфигурацией (#1258).
- **feat(models):** Пользовательские и импортированные модели теперь корректно объединяются в списки фильтров для всех доступных глобальных провайдеров (#1191).

### 🐛 Bug Fixes

- **fix(mitm):** Компиляция утилит MITM как NodeNext ESM во время prepublish, копирование сервера MITM CommonJS в автономный артефакт и разрешение путей данных MITM без зависимости от псевдонимов Next.js в среде выполнения пакета.
- **fix(build):** Перемещение локального префикса `.tmp/wine32` Wine из пути сборки Next.js, чтобы артефакты пакета Windows Electron не вызывали сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Копирование каталога времени выполнения `wreq-js` в изолированный выходной каталог Next.js, чтобы упакованные Playwright/E2E могли загружать хук инструментации на Linux.
- **fix(api):** Проверка веб-сокет-моста Codex Responses и JSON-полезных нагрузок `/v1/batches` с помощью Zod перед использованием, сохраняя зеленый маршрут проверки `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавление явного типирования для помощников псевдонимов и категорий провайдера, чтобы пройти шлюз `typecheck:noimplicit:core` CI.
- **fix(ui):** Поддержка страницы деталей провайдера верхнего потока с меткой "Управляется через настройки прокси-сервера верхнего уровня", когда переводы недоступны.
- **fix(electron):** Укрепление CSP рабочей среды путем удаления `unsafe-eval` за пределами разработки и добавления ограничений объекта, базового URI, действия формы, предка фрейма и рабочего процесса.
- **fix(cli):** Замена интерполированных оболочкой путей установки и привилегированного выполнения команд с помощью помощников `spawn`/`execFile` на основе аргументов для установки базы данных, команд Tailscale sudo, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Поддержка значков провайдеров с использованием компонентов `@lobehub/icons` напрямую, а затем резервных локальных PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели управления.

- **fix(providers):** соответствие правильной конечной точки api.xiaomimimo.com для Xiaomi MiMo (#1303)
- **fix(core):** удаление префикса маршрутизации псевдонима провайдера из полезной нагрузки для пользовательских конечных точек, чтобы исправить ошибки Azure OpenAI 400 (#1261)
- **fix(core):** Диспетчер ProxyFetch Undici автоматически обходит локальные сетевые адреса, предотвращая сбои fetch при внутренних запросах OpenRouter (#1254)
- **fix(core):** Обновление обнаружения подписи потока мыслей Gemini до использования нативного булева значения part.thought, предотвращая утечки текста рассуждений (#1298)
- **deps:** обновление hono с 4.12.12 до 4.12.14 для устранения уязвимости CVE SSR HTML-инъекции (#1306, #59)
- **deps:** обновление dompurify до 3.4.0 в переопределениях фронтенда для устранения уязвимости XSS HTML-инъекции (CVE-XYZ / Dependabot #60)
- **test:** Отключение автоматических резервных копий SQLite во время тестирования в непрерывной интеграции (CI) для устранения проблем с таймаутами E2E, ограничивающих масштабирование исполнителей (#24481475058)
- **feat(core):** Проактивное сжатие контекста — `chatCore` теперь проактивно сжимает перегруженные контексты сообщений перед отправкой на верхние провайдеры, что значительно уменьшает ошибки `context_length_exceeded`. Использует двоичный поиск для обрезки сообщений с гарантией сохранения структурной целостности, отслеживая явные границы `tool_use`, чтобы обрезанные входные данные инструментов правильно удаляли соответствующие выходные данные (#1292, #1293)

- **fix(cli):** Устранение ошибок разбора конфигурации маршрутизации Codex путем строгого цитирования массива ключей секции, принудительного использования wire_api с резервным значением и стандартизации положения кнопки выбора модели, отражающей интерфейс Claude
- **fix(providers):** Исправление рендеринга значков провайдера Lobehub путем удаления неподдерживаемых локальных ссылок, обеспечивая вызов механизма резервного копирования локального SVG/PNG
- **fix(db):** Реализация защитных механизмов отключения миграции базы данных (предварительные резервные копии через `VACUUM INTO` и предупреждения о массовой нумерации) для защиты существующих структур базы данных при запуске обновлений (#1281)
- **fix(dashboard):** Очистка структуры целевого файла `config.toml` Codex, предотвращающая рекурсивный рендеринг секций путем принудительного цитирования точечных путей секции и отображения правильных имен UI `OMNIROUTE_API_KEY`.
- **fix(mcp):** Добавление выделенных ограничений времени выполнения для обработчиков поиска (#1280)
- **fix(crypto):** Добавление защитного механизма проверки в слой шифрования для отображения ясных ошибок интерфейса при отсутствии переменных среды криптографии, заменяя ошибки TypeError Node.js. Устаревшие переменные среды `OMNIROUTE_CRYPT_KEY` и `OMNIROUTE_API_KEY_BASE64` теперь также принимаются в качестве резервных (#1165)
- **fix(providers):** Обновление определения провайдера Pollinations для требования API-ключей и указания их нового бесплатного лимита pollen/hour (#1177)
- **Исправление артефактов потоковой передачи `\n\n` (#1211):** Изменение регулярного выражения для удаления тегов `<omniModel>` с `?` на `*` квантификатор в `combo.ts`, `comboAgentMiddleware.ts` и `contextHandoff.ts` для жадного удаления всех последовательностей новых строк JSON, окружающих тег. Это предотвращает появление артефактов литеральных `\n\n` в потребительских потоковых ответах
- **Локатор E2E Combo Test:** Исправление нарушения строгого режима Playwright в `combo-unification.spec.ts` путем замены неоднозначного локатора `getByRole` на составной фильтр локатора для вкладки стратегии "All"
- **fix(cc-compatible):** Удаление флагов бета-версии и сохранение кэша для совместимости с третьими сторонами HTTP-прокси (#1230)
- **fix(providers):** Обновление конечных точек Xiaomi MiMo на живой план токенов, мигрируя от мертвых URL-адресов API (#1238)
- **fix:** Пересылка клиентского заголовка `x-initiator` в верхний поток GitHub Copilot для точного различения ходов агента и пользователя (#1227)
- **fix:** Устранение ошибок в очереди, включая крайние случаи потоковой передачи, необработанные отклонения и сбои разбора квот (#1206, #1220, #1231, #1175, #1187, #1218, #1202)
- **fix(tests):** Устранение ошибок миграции памяти и пагинации маршрутов навыков, вызванных перекрытием PR
- **fix(i18n):** Добавление поддержки китайского языка в компоненты панели управления (`DataTable`, `EmptyState` и т.д.), обновление ключей маршрутизации `en.json/zh-CN.json` и нативное разрешение значений по умолчанию JSX через `next-intl` (#1274)

### 🔧 Internal Improvements

- **Расширение аудита соответствия:** `src/lib/compliance/index.ts` расширен с структурированными метаданными, поддержкой пагинации, обогащением контекста запроса и новым модулем `providerAudit.ts`, который ведет журнал событий аутентификации и учетных данных провайдера, попыток валидации с заблокированным SSRF и операций CRUD провайдера
- **Конфигурация синхронизации пакета:** `src/lib/sync/bundle.ts` экспортирует `buildConfigBundle()`, создающий версионированный JSON-сниппет настроек, соединений провайдеров, узлов, псевдонимов моделей, комбо и API-ключей (пароли удалены) с поддержкой ETag для эффективного опроса по полосе пропускания
- **Константы клиента Codex:** Централизация `CODEX_CLIENT_VERSION`, `CODEX_USER_AGENT_PLATFORM` и шаблонно проверенных переопределений env (`CODEX_CLIENT_VERSION`, `CODEX_USER_AGENT`) в `open-sse/config/codexClient.ts`
- **Константы верхнего потока Antigravity:** `open-sse/config/antigravityUpstream.ts` объединяет все базовые URL-адреса Antigravity и строители путей модели/fetchAvailableModels для обнаружения
- **Псевдоним модели:** `src/lib/modelAliasSeed.ts` загружает 30+ псевдонимов диалектов моделей через прокси (например, `openai/gpt-5` → `gpt-5`, `anthropic/claude-opus-4-6` → `cc/claude-opus-4-6`) при запуске через идемпотентный `upsert`
- **Покрытие тестами:** 15+ новых наборов юнит-тестов, охватывающих маршруты синхронизации, мост WebSocket, индекс соответствия, конфигурацию провайдера GLM, повторные попытки с учетом охлаждения, безопасный исходящий fetch, утилиты потоков, исполнитель Codex, ветки валидации провайдера, совместимость моделей через прокси и загрузку псевдонимов моделей
- **Миграция TypeScript:** Завершена миграция оставшихся JS-тестов (`proxy-load` и `testFromFile`) в модули TypeScript ES, обеспечивая полностью синхронизированный стек TS.
- **Надежность и устойчивость:** Добавлен экспоненциальный откат для автоматической синхронизации `models.dev`, чтобы справиться с временными сбоями сети, повышен нижний предел интервала до 1 часа и добавлено отладочное ведение журнала LKGP для повышенной наблюдаемости во время маршрутизации. (#1286)

---

---

---

---

## [3.6.5] — 2026-04-13

### ✨ New Features

- **feat(docs):** интеграция многостраничной документации в панель управления OmniRoute (#1969)
- **feat(settings):** добавление настройки лимита тела запроса (#1968)
- **feat(auth):** добавление значения по умолчанию для секрета OAuth-клиента Gemini CLI (#1974)
- **feat(models):** предоставление контекстных окон моделей.dev в /v1/models (#1972)
- **fix(db):** исправление ошибки с резервным шифрованием, вызывающим циклы перешифровки (#1941)
- **fix(auth):** исправление очистки ответа final_answer для помощника Codex (#1965)

- **feat(providers):** Реализация возможностей генерации и редактирования изображений для ChatGPT Web, включая генерацию изображений в чате и кэширование (#1606).
- **feat(ui):** Интеграция SVG-логотипа OpenCode Zen/Go API и улучшение взаимодействий с API-ключами (#1607).

- **feat(providers):** Интеграция AgentRouter в качестве нового провайдера, совместимого с OpenAI, с $200 бесплатных кредитов при регистрации (Issue #1572).
- **feat(ui):** Реализация тестирования моделей по запросу в панели управления провайдерами, позволяющее выполнять диагностические проверки с одним токеном без срабатывания лимитов скорости (Issue #1532).

- **Резервные кредиты Antigravity AI:** Автоматическая повторная попытка с внедрением кредитов `GOOGLE_ONE_AI` при исчерпании квоты бесплатного тарифа. Баланс кредитов (5-часовой TTL) кэшируется из SSE `remainingCredits` и отображается в виде числового значка в панели использования провайдера (#1190 — спасибо @sFaxsy)
- **Полная совместимость с Claude Code:** Полная совместимость с OAuth-клиентом Claude Code 2.1.87 — CCH xxHash64 подпись тела с обещанием инициализации WASM, динамический отпечаток запроса, двустороннее преобразование имен инструментов (14 инструментов), и обязательные ограничения API (`temperature=1` для мышления, максимум 4 блоков `cache_control`, автоматическая инъекция ephemeral в последнем сообщении пользователя), а также опциональная обфускация ZWJ. Интегрировано в `BaseExecutor` для автоматической подписи CCH на всех провайдерах `anthropic-compatible-cc-*` и в `chatCore` для синхронных шагов обработки (#1188 — спасибо @RaviTharuma)
- **Настройки Codex по умолчанию для каждого соединения:** Настройки уровня сервиса Codex и усилий рассуждения теперь задаются для каждого соединения, а не глобально. Существующие соединения автоматически мигрируются при запуске через идемпотентную миграцию (#1176 — спасибо @rdself)
- **Панель использования Cursor:** Новая функция `getCursorUsage()` получает квоты из эндпоинтов Cursor `/api/usage`, `/api/auth/me` и `/api/subscription`. Отображает стандартные запросы, использование по запросу и лимиты по планам (Free/Pro/Business/Team). Версия клиента обновлена до `3.1.0`, добавлен заголовок `x-cursor-user-agent` для обеспечения совместимости
- **Система проверки здоровья базы данных:** Автоматическое периодическое мониторинг целостности SQLite через `runDbHealthCheck()` — обнаруживает сиротские строки квот/доменов, сломанные комбо-ссылки, устаревшие снимки и недопустимые состояния JSON. Запускается каждые 6 часов (настраивается через `OMNIROUTE_DB_HEALTHCHECK_INTERVAL_MS`), с авторемонтом и резервным копированием. Представлено как **MCP инструмент #18** (`omniroute_db_health_check`) со схемами Zod и опцией `autoRepair`. Панель на странице здоровья с карточкой статуса, количеством проблем, количеством исправленных и кнопкой однократного ремонта
- **API-хранилище OpenAI Responses с опцией включения:** Флаг `openaiStoreEnabled` для каждого соединения управляет сохранением поля `store` в запросах Codex Responses API. При включении `previous_response_id`, `prompt_cache_key`, `session_id` и `conversation_id` передаются через перевод Chat Completions → Responses, что позволяет кэшировать контекст нескольких ходов на поддерживаемых провайдерах
- **Переключатель конфиденциальности email (страница Combos):** Глобальный переключатель видимости email (`EmailPrivacyToggle`) добавлен в заголовок страницы Combos с адаптивным макетом, подсказками и маскировкой меток соединений через `pickDisplayValue()`. Все опции конструктора комбо, списки соединений провайдеров и экраны квот теперь учитывают глобальное состояние конфиденциальности из `emailPrivacyStore`
- **Интеграция skills.sh:** Добавлен `skills.sh` в качестве внешнего провайдера навыков. Пользователи теперь могут искать, просматривать и устанавливать навыки агентов напрямую из новой вкладки "skills.sh" в панели навыков. Включает бэкенд-API-резолверы, фронтенд-реализацию с состояниями поиска/установки и отдельный набор юнит-тестов (#1223 — спасибо @RaviTharuma)
- **Настройки стабилизации:** Добавлена поддержка сохранения настроек `lkgpEnabled` и `backgroundDegradation`, интегрированная в `instrumentation-node.ts` для улучшенного понимания жизненного цикла (#1212)
- **Зависимость xxhash-wasm:** Добавлен `xxhash-wasm@^1.1.0` для подписи CCH (xxHash64 с сидом `0x6E52736AC806831E`)

### 🐛 Bug Fixes

- **fix(mitm):** Компиляция утилит MITM как NodeNext ESM во время prepublish, копирование сервера MITM CommonJS в автономный артефакт и разрешение путей данных MITM без зависимости от псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Перемещение локального префикса `.tmp/wine32` Wine вне пути сборки Next.js, чтобы артефакты упаковки Windows Electron не вызывали сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Копирование каталога `wreq-js` в изолированный выходной каталог Next.js, чтобы упакованные Playwright/E2E могли загружать хук инструментации на Linux.
- **fix(api):** Валидация вебсокет-моста Codex Responses и JSON-полезной нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленый маршрут валидации `request.json()` и возвращая явные 400-ответы для недопустимых тел.
- **fix(providers):** Добавление явного типирования для помощников псевдонимов и категорий провайдеров, чтобы пройти строгий шлюз `typecheck:noimplicit:core` CI.
- **fix(ui):** Поддержание страницы деталей провайдера с прокси-верхнего уровня с меткой "Управляется через настройки прокси-верхнего уровня", когда переводы недоступны.
- **fix(electron):** Укрепление CSP рабочей станции в производстве путем удаления `unsafe-eval` вне разработки и добавления ограничений объекта, базового URI, действия формы, предка фрейма и рабочего.
- **fix(cli):** Замена интерполированных оболочкой путей установки и привилегированных команд на помощников `spawn`/`execFile` с аргументами для установки базы данных, команд sudo Tailscale, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Поддержание устойчивости иконок провайдеров с использованием компонентов `@lobehub/icons` напрямую, затем локальных резервных копий PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели управления.

- **Codex `stream: false` через Combo (ALL_ACCOUNTS_INACTIVE):** Исправлена критическая ошибка, при которой комбо Codex возвращали `ALL_ACCOUNTS_INACTIVE` или пустое содержимое, когда клиент отправлял `stream: false`. Корневая причина состояла из трех частей: (1) `CodexExecutor.transformRequest()` изменял `body.stream` на `true` в месте, что загрязняло проверку качества комбо, которое пропускало валидацию, думая, что это поток; (2) не-потоковой парсер SSE использовал неправильный формат (Chat Completions вместо Responses API) для выходных данных Codex SSE; (3) валидация качества комбо читала измененное `body.stream` вместо исходного намерения клиента. Исправлено путем: клонирования тела через `structuredClone()` в CodexExecutor, обнаружения формата Codex/Responses SSE в пути резервного не-потокового пути (с авто-переводом обратно в Chat Completions) и захвата `clientRequestedStream` до цикла комбо
- **Отклонение схемы инструмента Gemini CLI:** Исправлены ошибки 400 Bad Request от Google API путем строгого фильтрации нестандартных расширений поставщика (начинающихся с `x-`) и полей `deprecated` из схем параметров инструментов (#1206)
- **Интероперабельность SOCKS5 Proxy (Node.js 22):** Исправлены аварийные завершения `invalid onRequestStart method`, вызванные несоответствиями версий `undici` между диспетчерами и встроенным fetch. Укреплен `proxyFetch.ts` для строгого использования реализации fetch библиотеки для пользовательских диспетчеров (#1219)
- **Совместимость кэша поиска с TTL=0:** Исправлена ошибка, при которой провайдеры, настроенные с `cacheTTLMs: 0` (кэширование явно отключено), все равно имели запросы, объединенные и возвращаемые с `{ cached: true }`. Теперь каждый вызов получает независимый независимый запрос к верхнему уровню (#1178 — спасибо @sjhddh)
- **Выравнивание кэша кредитов Antigravity (PR #1190):** Выровнены `accountId` между `AntigravityExecutor.collectStreamToResponse` и `getAntigravityUsage` для использования согласованных ключей кэша (`email || sub || "unknown"`). Ранее балансы кредитов, полученные из SSE, могли быть записаны под другим ключом, чем тот, который использовался панелью использования, вызывая устаревшие/отсутствующие значки кредитов
- **Дублирование reasoning_content в не-потоковом режиме:** Исправлено отображение дублированных панелей рассуждений, когда как `reasoning_content`, так и видимое `content` присутствовали в не-потоковых ответах. `responseSanitizer` теперь удаляет `reasoning_content` из сообщений, которые уже имеют видимое текстовое содержимое, сохраняя его только для сообщений, содержащих только рассуждения
- **Исправление регрессии потоковой передачи:** Укреплен `sanitize` TransformStream в движке комбо для удаления как буквальных, так и JSON-экранированных последовательностей новой строки, что устраняет ведущие префиксы `\n\n` в ответах ассистента (#1211)
- **Исправление пустого выбора Gemini:** Обеспечено, что начальные дельты ассистента всегда включают пустую строку `content: ""`, чтобы удовлетворить строгие требования клиента OpenAI и предотвратить пустые ответы выбора в инструментах (#1209)
- **Дублирование очистки инструментов Gemini:** Извлечена общая логика преобразования инструментов в помощник `buildGeminiTools()` (`geminiToolsSanitizer.ts`), устраняя дублирующиеся реализации между `openai-to-gemini.ts` и `claude-to-gemini.ts`. Новый помощник правильно обрабатывает типы инструментов `web_search` / `web_search_preview`, выдавая инструменты `googleSearch` с приоритетом перед объявлениями функций
- **Конфликт Qwen/Qoder Thinking+Tool_Choice:** Добавлен `sanitizeQwenThinkingToolChoice()` как в `DefaultExecutor` (для провайдера Qwen), так и в `QoderExecutor`, чтобы предотвратить ошибки 400 на стороне провайдера, когда клиенты отправляют `tool_choice` вместе с параметрами мышления/рассуждений, которые являются взаимно исключающими на стороне провайдера
- **Очистка сиротских данных при удалении API-ключа:** Удаление API-ключа теперь также удаляет связанные строки `domain_budgets` и `domain_cost_history`, предотвращая накопление сиротских данных
- **Тест утверждения совместимости CC-compatible:** Исправлен существующий тест, который ожидал отсутствия `cache_control` в блоках системы — теперь блок заголовка биллинга содержит `cache_control: { type: "ephemeral" }` в соответствии с дизайном PR #1188
- **Ложные срабатывания теста Smoke Test Codex Combo:** Исправлены тесты комбо, ошибочно сообщающие `ERROR` для допустимых потоковых ответов Codex, когда `response.output` пуст, но были отправлены текстовые дельты. Теперь сводка отображает накопленный текст дельт (#1176 — спасибо @rdself)
- **Несоответствие версий Electron Builder:** Исправлены сбои запуска рабочего стола Electron на упакованных сборках Windows, вызванные тем, что нативные модули (`better-sqlite3`) находились в `app.asar.unpacked`, а помощники — в `app/node_modules`. `resolveServerNodePath()` теперь объединяет оба местоположения с дедупликацией и проверками существования (#1172 — спасибо @backryun)

### 🔧 Internal Improvements

- **SSE Parser: Responses API Non-Stream Conversion:** Добавлена полная реализация `parseSSEToResponsesOutput()` в `sseParser.ts` (255+ строк) — воссоздает полные объекты Responses API из потоков событий SSE, обрабатывая `response.output_text.delta/done`, `response.reasoning_summary_text.delta/done`, `response.function_call_arguments.delta/done` и терминальные события. Используется новым резервным путем chatCore для Codex
- **Cursor Executor Version Sync:** Обновлен User-Agent клиента Cursor до `3.1.0` и централизованы константы версий (`CURSOR_CLIENT_VERSION`, `CURSOR_USER_AGENT`) для согласованного отпечатка во всех исполнителях, фетчерах использования и потоках OAuth
- **Responses API Translator Parity:** `convertResponsesApiFormat()` теперь принимает учетные данные и передает их через переводчик, что позволяет сохранять поля хранилища. Круговое сохранение полей `previous_response_id`, `prompt_cache_key`, `session_id` и `conversation_id`
- **Provider Schema Validation:** Добавлена валидация булева `openaiStoreEnabled` в схему Zod `providerSpecificData`
- **Combo Error Response Normalization:** Пустые цели комбо теперь возвращают 404 (`comboModelNotFoundResponse`) вместо универсального 503, что улучшает дифференциацию ошибок на стороне клиента
- **Dependency Updates:** Обновления `typescript-eslint` до `8.58.2` (dev), `axios` до `1.15.0` (prod) и `next` до `16.2.2` (prod) (#1224, #1225)

### ⚠️ Breaking Changes

- **`DELETE /api/settings/codex-service-tier` удален:** Этот эндпоинт больше не существует. Настройки уровня сервиса Codex перемещены в `providerSpecificData.requestDefaults` для каждого соединения. Существующие соединения автоматически мигрируются при первом запуске после обновления. Любые внешние скрипты или интеграции, вызывающие этот эндпоинт, должны быть обновлены — используйте `PUT /api/providers/:id` с `providerSpecificData.requestDefaults.serviceTier` вместо этого (#1176).
- **Подпись CCH на совместимых с CC провайдерах:** Все запросы к провайдерам `anthropic-compatible-cc-*` теперь включают токен целостности xxHash64 (`cch=...`) в заголовок биллинга. Провайдеры, которые не проверяют CCH, проигнорируют его (без изменения поведения), но любое пользовательское промежуточное ПО, проверяющее заголовок биллинга, должно ожидать 5-значный шестнадцатеричный токен вместо заполнителя `00000`

---

---

## [3.6.4] — 2026-04-12

### ✨ New Features

- **feat(docs):** интеграция многостраничной документации в панель управления OmniRoute (#1969)
- **feat(settings):** добавление настройки лимита тела запроса (#1968)
- **feat(auth):** добавление стандартного секрета OAuth-клиента CLI Gemini (#1974)
- **feat(models):** предоставление контекстных окон моделей.dev в /v1/models (#1972)
- **fix(db):** исправление устаревшей шифрования с возвратом к перешифровке (#1941)
- **fix(auth):** исправление очистки ответа final_answer ассистента Codex (#1965)

- **feat(providers):** Реализация возможностей генерации и редактирования изображений для ChatGPT Web, включая внутриканальную генерацию и кэширование изображений в чате (#1606).
- **feat(ui):** Интеграция SVG-логотипа OpenCode Zen/Go API и улучшение взаимодействий с копированием API-ключа в буфер обмена (#1607).

- **feat(providers):** Интеграция AgentRouter в качестве нового провайдера, совместимого с OpenAI, с $200 бесплатных кредитов при регистрации (Issue #1572).
- **feat(ui):** Реализация тестирования моделей по запросу в панели управления провайдерами, позволяющее выполнять диагностические проверки с одним токеном без срабатывания ограничений скорости (Issue #1532).

- **Combo Builder v2 (Wizard UI):** Полностью переработан интерфейс создания/редактирования комбо в виде многоэтапного мастера с этапами: Basics → Steps → Strategy → Review. Построитель получает метаданные провайдера, модели и соединения через новый эндпоинт `GET /api/combos/builder/options`, что позволяет точно выбирать провайдера, модель и учетную запись с обнаружение дубликатов и автоматической подсказкой следующего соединения. Тяжелые UI-компоненты (`ModelSelectModal`, `ProxyConfigModal`, `ModelRoutingSection`) теперь загружаются лениво через `next/dynamic` для более быстрого начального рендеринга страницы.
- **Combo Step Architecture (Schema v2):** Введен структурированная модель шага (`ComboModelStep`, `ComboRefStep`), заменяющая устаревшие плоские строковые/объектные записи комбо. Шаги несут явные поля `id`, `kind`, `providerId`, `connectionId`, `weight`, и `label`, что позволяет выполнять маршрутизацию с привязкой к учетной записи, ссылки на комбо между собой и метрики по каждому шагу. Все операции CRUD комбо нормализуют записи через новый модуль `src/lib/combos/steps.ts`. Схемы Zod обновлены с добавлением `comboModelStepInputSchema` и `comboRefStepInputSchema` объединений.
- **Composite Tiers System:** Добавлена маршрутизация моделей через `config.compositeTiers` — каждый уровень сопоставляет именованный этап с конкретным шагом комбо с возможными цепочками резервных вариантов. Включает комплексную валидацию (`src/lib/combos/compositeTiers.ts`), обеспечивающую существование шагов, предотвращение циклических резервных цепочек и валидацию ссылок на уровни по умолчанию. Схема Zod блокирует композитные уровни для глобальных настроек по умолчанию (только конкретные комбо).
- **Model Capabilities Registry:** Создан `src/lib/modelCapabilities.ts`, предоставляющий `getResolvedModelCapabilities()` — унифицированный резолвер, объединяющий статические спецификации, данные реестра провайдеров и синхронизированные в реальном времени возможности в один объект `ResolvedModelCapabilities`, охватывающий вызов инструментов, рассуждение, зрение, окно контекста, бюджет мышления, модальности и метаданные жизненного цикла модели.
- **Observability Module:** Извлечена конструкция полезной нагрузки здоровья и телеметрии в `src/lib/monitoring/observability.ts` с `buildHealthPayload()`, `buildTelemetryPayload()`, и `buildSessionsSummary()`. Эндпоинт здоровья теперь возвращает активность сессий, статус монитора квот и разбивку по провайдерам наряду с существующими метриками системы.
- **Session & Quota Monitor Dashboard:** Добавлены панели активности сессий и монитора квот в панель управления здоровьем, показывающие количество активных сессий, сессии с привязкой, разбивку по API-ключам и топовые детали сессий наряду с состоянием предупреждений/истощения/ошибок монитора квот с возможностью детализации по провайдерам.
- **Combo Health Per-Target Analytics:** API здоровья комбо теперь разрешает метрики по целям с помощью новой функции `resolveNestedComboTargets()`, предоставляя показатели успеха, задержек и исторического использования по каждому ключу выполнения — что позволяет видеть здоровье по каждой учетной записи и соединению.
- **Auto-Combo → Combos Unification:** Объединены отдельная страница `/dashboard/auto-combo` с основной страницей `/dashboard/combos`. Авто/LKGP комбо теперь управляются наряду со всеми другими комбо с новой системой фильтров стратегий (All / Intelligent / Deterministic). Старый маршрут auto-combo перенаправляет на `/dashboard/combos?filter=intelligent`. Удалена запись `auto-combo` в боковой панели, объединив навигацию в один пункт `Combos`.
- **Intelligent Routing Panel (`IntelligentComboPanel`):** Новая встроенная панель (371 строки) внутри страницы комбо, показывающая реальные оценки провайдеров, разбивку по 6 факторам (квота, здоровье, стоимость, задержка, соответствие задаче, стабильность), селектор пакетов режимов, статус режима инцидентов и исключенные провайдеры для комбо `auto`/`lkgp` — заменяя бывшую отдельную панель управления auto-combo.
- **Builder Intelligent Step (`BuilderIntelligentStep`):** Новый условный шаг мастера (280 строк) появляется в потоке Builder v2 только при выборе `strategy=auto` или `strategy=lkgp`. Предоставляет выбор пула кандидатов, пресеты пакетов режимов, селектор подстратегий маршрутизатора, ползунок скорости исследования, лимит бюджета и сворачиваемую конфигурацию расширенных весов оценки.
- **Intelligent Routing Module (`intelligentRouting.ts`):** Извлечена логика категоризации и фильтрации стратегий в отдельный общий модуль (210 строк) с `getStrategyCategory()`, `isIntelligentStrategy()`, `filterCombosByStrategyCategory()`, `normalizeIntelligentRoutingFilter()`, и `normalizeIntelligentRoutingConfig()`.
- **LKGP Standalone Strategy:** Реализована `lkgp` (Last Known Good Provider) как полностью функциональная самостоятельная стратегия комбо. Ранее, `lkgp` как стратегия комбо молча переходила к упорядочиванию по приоритету — поиск LKGP выполнялся только внутри движка `auto`. Теперь `strategy: "lkgp"` корректно запрашивает состояние LKGP, перемещает последнего успешного провайдера в начало списка целей и сохраняет состояние LKGP после каждого успешного запроса. Переходит к упорядочиванию по приоритету, когда состояние LKGP отсутствует.
- **Unified Routing Rules & Model Aliases:** Объединены правила маршрутизации и управление псевдонимами моделей в странице настроек, уменьшая фрагментацию по панели управления.

### ⚡ Performance

- **Middleware Lazy Loading:** Переработан `src/proxy.ts` для ленивой загрузки модулей `apiAuth`, `db/settings`, и `modelSyncScheduler`, уменьшая нагрузку на холодный старт middleware. Добавлен встроенный `isPublicApiRoute()` для избежания загрузки полного модуля auth для публичных маршрутов.
- **E2E Auth Bypass:** Добавлен флаг окружения `NEXT_PUBLIC_OMNIROUTE_E2E_MODE` для обхода аутентификационных ворот для маршрутов панели управления и API управления во время запуска тестов Playwright E2E.

### 🐛 Bug Fixes

- **fix(mitm):** Компиляция утилит MITM как NodeNext ESM во время prepublish, копирование сервера MITM CommonJS в автономный артефакт и разрешение путей данных MITM без зависимости от псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Перемещение локального префикса `.tmp/wine32` Wine вне пути изолированной сборки Next.js, чтобы артефакты упаковки Windows Electron не могли инициировать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Копирование каталога времени выполнения `wreq-js` в изолированный выходной каталог Next.js, чтобы упакованные запуски Playwright/E2E могли загрузить хук инструментации на Linux.
- **fix(api):** Валидация вебсокет-моста Codex Responses и JSON-полезной нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленый маршрут валидации `request.json()` и возвращая явные 400 ответы для недопустимых тел.
- **fix(providers):** Добавление явного типирования помощникам псевдонимов и категорий провайдеров, чтобы пройти шлюз `typecheck:noimplicit:core` CI.
- **fix(ui):** Поддержание страницы деталей провайдера через прокси с меткой "Управляется через настройки прокси" при отсутствии переводов.
- **fix(electron):** Укрепление CSP для рабочей среды десктопа путем удаления `unsafe-eval` вне разработки и добавления ограничений объекта, базового URI, действия формы, предка фрейма и рабочего процесса.
- **fix(cli):** Замена интерполированных путей установки и привилегированных команд с помощью помощников `spawn`/`execFile` на основе аргументов для установки базы данных, команд sudo Tailscale, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Поддержание устойчивости иконок провайдеров с использованием прямых компонентов `@lobehub/icons`, затем локальных резервных PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели управления.

- **P2C Credential Selection:** Реализована стратегия выбора соединений Power-of-Two-Choices (P2C) в `src/sse/services/auth.ts` с учетом запаса квоты, штрафов за ошибки/давность, и поддержкой принудительных/исключенных соединений. Новая функция `getProviderCredentialsWithQuotaPreflight()` интегрирует проверку квоты непосредственно в выбор учетных данных, устраняя отдельный путь предварительной проверки только для Codex.
- **Fixed-Account Combo Steps:** Шаги комбо с явным `connectionId` теперь корректно обходят моделировщики задержек и переключатели цепей провайдера, предотвращая блокировку маршрутизации с привязкой к соединению для одной и той же модели из-за сбоя одной учетной записи.
- **Combo Metrics Per-Target Tracking:** Расширен `comboMetrics.ts` для отслеживания метрик `byTarget`, ключевых по пути выполнения, записывающих `provider`, `providerId`, `connectionId` и `label` по каждому шагу наряду с существующими агрегатами по моделям.
- **Call Logs Schema Expansion:** Добавлены столбцы `requested_model`, `request_type`, `tokens_cache_read`, `tokens_cache_creation`, `tokens_reasoning`, `combo_step_id`, и `combo_execution_key` в `call_logs` с автоматической миграцией. Добавлен составной индекс `idx_cl_combo_target` для эффективных исторических запросов по целям.
- **Quota Monitor Enrichment:** Расширен `quotaMonitor.ts` с полным отслеживанием состояния жизненного цикла (`status`, `startedAt`, `lastPolledAt`, `consecutiveFailures`, `totalPolls`, `totalAlerts`), ISO-форматированными снимками через `getQuotaMonitorSnapshots()`, и отсортированным резюме через `getQuotaMonitorSummary()`.
- **Codex Quota Fetcher Hardening:** Улучшен `codexQuotaFetcher.ts` с более безопасной регистрацией соединений и обработкой ошибок получения квоты.
- **LKGP Save Refactored to Async/Await:** Заменена цепочка `.then()` для сохранения LKGP после успешного маршрутизации комбо на правильный `async/await` + `try/catch`, предотвращая необработанные отклонения обещаний и обеспечивая надежное сохранение состояния LKGP перед возвратом ответа.
- **Duplicate `auto` in Combo Strategy Schema:** Удален дублирующийся `"auto"` из `comboStrategySchema` (был указан как на строке 104, так и на строке 108). Невреден для времени выполнения Zod, но очищен для избежания путаницы. Схема теперь имеет ровно 13 уникальных значений стратегии.
- **Legacy Combo Refs Normalization:** Исправлена нормализация шагов комбо для сохранения устаревших строковых ссылок на комбо во время операций CRUD, предотвращая потерю данных при редактировании комбо, созданных до архитектуры шагов v2.

### 🔒 Security

- **Auth Bypass on Backup Routes (Critical):** Добавлены `isAuthenticated` для `/api/db-backups/exportAll` (полный экспорт базы данных) и `/api/db-backups` (список, создание и восстановление резервных копий) — оба ранее были доступны без аутентификации.
- **Auth Guard on Translator Save:** Добавлен `isAuthenticated` для `/api/translator/save` для обеспечения защиты в глубину.
- **API Key Secret Hardening:** Удален жестко закодированный `"omniroute-default-insecure-api-key-secret"` из `apiKey.ts` — функция теперь быстро завершает работу, если `API_KEY_SECRET` не установлен, полагаясь на валидатор запуска для автоматической генерации.
- **NPM Tarball Leak Fix:** Добавлен `app/.env*` в `.npmignore` для предотвращения попадания рабочего файла `.env` в дистрибутив npm.
- **Electron Builder CVE Fix:** Обновлен `electron-builder` до 26.8.1 для исправления уязвимостей `tar` в конвейере сборки десктопа.

### 🔧 Maintenance & Infrastructure

- **DB Migration 021:** Добавлена миграция `combo_call_log_targets` для столбцов `combo_step_id` и `combo_execution_key` в call_logs.
- **Combo CRUD Normalization:** `db/combos.ts` теперь нормализует все хранимые записи комбо через конвейер нормализации шагов при чтении, обеспечивая согласованные идентификаторы шагов и аннотации типов независимо от времени создания комбо.
- **Playwright Config:** Обновлена конфигурация Playwright и скрипт `run-next-playwright.mjs` для улучшенной оркестрации E2E тестов.
- **Build Script:** Обновлен `build-next-isolated.mjs` с дополнительными улучшениями надежности.
- **Auto-Combo UI Cleanup:** Удален `AutoComboModal.tsx` (161 строки), заменен `auto-combo/page.tsx` (478→5 строк) на перенаправление на серверной стороне на `/dashboard/combos?filter=intelligent`.
- **Sidebar Consolidation:** Удален `"auto-combo"` из `HIDEABLE_SIDEBAR_ITEM_IDS` и `PRIMARY_SIDEBAR_ITEMS` — `normalizeHiddenSidebarItems()` молча игнорирует любые устаревшие `"auto-combo"` записи в настройках пользователя.
- **Schema Cleanup:** Удалена устаревшая `createAutoComboSchema` из `schemas.ts`. Экспортирована `comboStrategySchema` для прямого использования в тестах и модулях фильтрации.
- **A2A Agent Card Update:** Переименован идентификатор навыка с `auto-combo` на `intelligent-routing` с обновленным описанием, ссылающимся на объединенную панель управления комбо.
- **Builder Draft Refactor:** Расширен `builderDraft.ts` с динамическим созданием списка этапов через `getComboBuilderStages()` и `isIntelligentBuilderStrategy()`. Навигация по этапам (`getNextComboBuilderStage`, `getPreviousComboBuilderStage`, `canAccessComboBuilderStage`) теперь принимает опции для условного включения/пропуска шага `intelligent` в мастере.
- **i18n Consolidation:** Удален отдельный блок `"autoCombo"` (22 ключа) из всех 30 языковых файлов. Перенесены ключи в блок `"combos"` с новыми добавлениями для фильтров вкладок, панели интеллектуального маршрутизации и меток шагов мастера.

### 🧪 Tests

- **16 New Test Suites:** Добавлено комплексное покрытие тестами, включая:
  - `combo-builder-draft.test.mjs` (186 строк) — Конструкция и валидация шагов черновика мастера.
  - `combo-builder-options-route.test.mjs` (228 строк) — Эндпоинт API опций мастера.
  - `combo-health-route.test.mjs` (266 строк) — Аналитика здоровья комбо с метриками по целям.
  - `combo-routes-composite-tiers.test.mjs` (157 строк) — Интеграция API композитных уровней.
  - `composite-tiers-validation.test.mjs` (131 строк) — Правила валидации композитных уровней.
  - `db-combos-crud.test.mjs` — CRUD комбо с нормализацией шагов.
  - `db-core-init.test.mjs` (129 строк) — Инициализация базы данных и миграция столбцов.
  - `model-capabilities-registry.test.mjs` (105 строк) — Разрешение возможностей модели.
  - `observability-payloads.test.mjs` (165 строк) — Конструкция полезной нагрузки здоровья/телеметрии.
  - `openapi-spec-route.test.mjs` — Генерация спецификации OpenAPI.
  - `proxy-e2e-mode.test.mjs` (74 строк) — Обход аутентификации в режиме E2E.
  - `quota-monitor.test.mjs` — Состояние жизненного цикла монитора квот.
  - `run-next-playwright.test.mjs` (119 строк) — Скрипт запуска Playwright.
  - `sse-auth.test.mjs` (154 строк) — Выбор учетных данных P2C и предварительная проверка квоты.
  - `telemetry-summary-route.test.mjs` (35 строк) — Эндпоинт резюме телеметрии.
  - Плюс обновления для 12 существующих файлов тестов для совместимости с новой архитектурой шагов.
- **Auto-Combo Unification Tests:**
  - `autocombo-unification.test.mjs` (156 строк) — Категоризация стратегий, удаление дубликатов в схеме, очистка боковой панели и метаданные стратегий маршрутизации.
  - `combo-unification.spec.ts` (189 строк) — E2E тесты Playwright для фильтров вкладок, рендеринга панели интеллектуального маршрутизации, перенаправления со старого маршрута, удаления записи в боковой панели и потока интеллектуального шага мастера Builder v2.
  - 3 новых теста LKGP standalone в `combo-routing-engine.test.mjs` — Проверяют приоритизацию провайдера LKGP, откат к упорядочиванию по приоритету при отсутствии состояния и сохранение состояния LKGP после успешных запросов.
  - Обновлен `combo-builder-draft.test.mjs` с тестами навигации по этапам интеллектуального маршрутизации.
  - Обновлен `sidebar-visibility.test.mjs` для отражения удаления `auto-combo`.

---

---

## [3.6.3] — 2026-04-11

### ✨ New Features

- **feat(docs):** интегрировать многостраничную документацию в панель управления OmniRoute (#1969)
- **feat(settings):** добавить настройку лимита тела запроса (#1968)
- **feat(auth):** добавить стандартный секрет OAuth-клиента Gemini CLI (#1974)
- **feat(models):** открыть контекстные окна моделей.dev в /v1/models (#1972)
- **fix(db):** решить проблему с резервным шифрованием, вызывающим циклы повторного шифрования (#1941)
- **fix(auth):** исправить очистку ответа final_answer ассистента Codex (#1965)

- **feat(providers):** Реализовать возможности генерации и редактирования изображений для ChatGPT Web, включая внутриканальную генерацию и кэширование изображений в чате (#1606).
- **feat(ui):** Интегрировать логотип SVG инструмента API OpenCode Zen/Go и улучшить взаимодействие копирования API-ключа в буфер обмена (#1607).

- **feat(providers):** Интегрировать AgentRouter в качестве нового провайдера, совместимого с OpenAI, с $200 бесплатных кредитов при регистрации (Issue #1572).
- **feat(ui):** Реализовать тестирование по запросу для каждой модели в панели управления провайдером, позволяющее выполнять диагностические проверки с одним токеном без срабатывания ограничений скорости (Issue #1532).

- **Свободная валидация совместимости с OpenAI:** Теперь пустые API-ключи могут быть естественно отправлены и сохранены для любых провайдеров `openai-compatible-*` (например, Pollinations, локализованные маршруты) непосредственно в пользовательском интерфейсе вместо блокировки действий сохранения (#1152)
- **Конфигурация Cloudflare:** Обновлена схема провайдера и интеграция пользовательского интерфейса для Cloudflare AI, чтобы официально открыть и поддерживать поле `accountId` на бэкенде безопасно без переопределений (#1150)

### 🐛 Bug Fixes

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать сервер MITM CommonJS в автономный артефакт и решить пути данных MITM без зависимости от псевдонимов Next.js в пакетированном времени выполнения.
- **fix(build):** Переместить локальный префикс `.tmp/wine32` Wine вне пути сборки Next.js, чтобы артефакты упаковки Windows Electron не вызывали сканирование `EACCES` во время сборок Node 24.
- **fix(build):** Копировать каталог нативного времени выполнения `wreq-js` в изолированный выходной каталог Next.js, чтобы упакованные Playwright/E2E могли загружать хук инструментации на Linux.
- **fix(api):** Валидировать JSON-полезные нагрузки моста веб-сокета Codex и `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую проверку маршрута `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавить явное типизирование помощникам псевдонимов и категорий провайдеров, чтобы строгий `typecheck:noimplicit:core` CI-шлюз прошел.
- **fix(ui):** Сохранить страницу деталей провайдера прокси-сервера с меткой "Управляется через настройки прокси-сервера" при отсутствии переводов.
- **fix(electron):** Укрепить CSP рабочего стола в производстве, удалив `unsafe-eval` вне разработки и добавив ограничения объекта, базового URI, действия формы, предка фрейма и рабочего.
- **fix(cli):** Заменить пути установки и выполнения команд с интерполяцией оболочки на помощников `spawn`/`execFile` на основе аргументов для настройки базы данных, команд Tailscale с повышенными привилегиями, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранить иконки провайдеров устойчивыми, используя сначала компоненты `@lobehub/icons`, затем локальные резервные копии PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели управления.

- **Аварийное завершение работы из-за JSON-валидации Vertex:** Предотвращено аварийное завершение работы `invalid character in header` внутри конечной точки `/validate` путем создания нативного парсера аутентификации, который корректно обрабатывает потоки Google Identity Service Account JSON до обращения к конечным точкам (#1153)
- **Отклонение избыточной полезной нагрузки:** Глобально предотвращено выполнение аварийных завершений `400 Bad Request` путем принудительного удаления атрибута `prompt_cache_retention`, искусственно прикрепленного движками Cursor/Cline IDE при нацеливании на строгие маршруты OpenAI/Anthropic (#1154)
- **Потеря содержимого рассуждений:** Предотвращено прерывание пакетов рассуждений, распространенных в продвинутых моделях резервного копирования, таких как DeepSeek, путем явного настройки прерывателей `Empty Content (502)` для признания состояний `reasoning_content` как допустимых (#1155)
- **Аварийное завершение сборки рабочего стола Windows:** Исправлено `better_sqlite3.node is not a valid Win32 application`, препятствующее запуску OmniRoute Desktop на Windows, путем правильного удаления кэша sqlite с несовместимым ABI из автономного Next.js и возврата к эквиваленту Electron, перекрестно скомпилированному во время шагов сборки пакетировщика (#1163)
- **Визуальная безопасность входа:** Удален сырой дамп хэша, искусственно отображаемый под модальным окном входа в Docker-экземплярах, отсутствующих флагах `OMNIROUTE_API_KEY_BASE64` (#1148)

### 🔧 Maintenance & Dependencies

- **Обновления Dependabot:** безопасно обновлены GitHub Actions `docker/build-push-action` до версии 7 и `actions/download-artifact` до версии 8
- **Обновления Electron:** обновлены основные оболочки рабочего стола до Electron `41.2.0` и `electron-builder` до `26.8.1`, включены важные патчи безопасности V8/Chromium
- **Группы пакетов NPM:** обновлены группы `production` и `development` NPM для безопасной обработки предупреждений аудита и поддержания современности инструментальных цепочек
- **Надежность CI/CD:** Исправлены постоянные сбои токена `Snyk` на автоматизированных запросах на слияние, соответствующим образом обходя их на действиях dependabot

```

---

---

## [3.6.2] — 2026-04-11

### ✨ Новые возможности

- **feat(docs):** интеграция многостраничной документации в панель управления OmniRoute (#1969)
- **feat(settings):** добавление настройки ограничения размера тела запроса (#1968)
- **feat(auth):** добавление значения по умолчанию для секрета OAuth-клиента Gemini CLI (#1974)
- **feat(models):** отображение контекстных окон models.dev в /v1/models (#1972)
- **fix(db):** устранение проблемы с резервным механизмом шифрования устаревших версий, вызывавшим циклы повторного шифрования (#1941)
- **fix(auth):** исправление санитизации ответа final_answer ассистента Codex (#1965)

- **feat(providers):** реализация возможностей генерации и редактирования изображений для ChatGPT Web, включая генерацию изображений в чате и кэширование (#1606).
- **feat(ui):** интеграция SVG-логотипа инструмента OpenCode Zen/Go API и улучшение взаимодействия с копированием API-ключей в буфер обмена (#1607).

- **feat(providers):** интеграция AgentRouter в качестве нового провайдера, совместимого с OpenAI, с бесплатным кредитом $200 при регистрации (Issue #1572).
- **feat(ui):** реализация тестирования моделей по запросу в панели управления провайдерами, позволяющая выполнять диагностические проверки с одним токеном без срабатывания ограничений частоты запросов (Issue #1532).

- **33 новых провайдера API-ключей:** Масштабное расширение списка провайдеров с добавлением DeepInfra, Vercel AI Gateway, Lambda AI, SambaNova, nScale, OVHcloud AI, Baseten, PublicAI, Moonshot AI, Meta Llama API, v0 (Vercel), Morph, Featherless AI, FriendliAI, LlamaGate, Galadriel, Weights & Biases Inference, Volcengine, AI21 Labs, Venice.ai, Codestral, Upstage, Maritalk, Xiaomi MiMo, Inference.net, NanoGPT, Predibase, Bytez, Heroku AI, Databricks, Snowflake Cortex и GigaChat (Sber). Теперь OmniRoute поддерживает **более 100 провайдеров** (4 бесплатных + 8 OAuth + 91 API-ключ + пользовательские совместимые)
- **Глобальный переключатель конфиденциальности электронной почты:** Добавлена постоянная кнопка-переключатель с иконкой глаза на всех страницах панели управления (Провайдеры, Ограничения использования, Playground), которая показывает или скрывает замаскированные адреса электронной почты. Состояние переключателя сохраняется в localStorage и синхронизируется глобально через хранилище Zustand
- **Обновление документации:** Обновлены README, ARCHITECTURE, FEATURES, AGENTS.md и API_REFERENCE для v3.6.2 с точным количеством провайдеров (100+), новым списком исполнителей и документацией по системному API
- **Руководство по удалению:** Создано комплексное руководство `docs/guides/UNINSTALL.md`, охватывающее чистое удаление для всех методов развертывания (npm, Docker, Electron, исходный код)

### 🐛 Исправления ошибок

- **fix(mitm):** Компиляция утилит MITM как NodeNext ESM во время prepublish, копирование сервера MITM CommonJS в автономный артефакт и разрешение путей данных MITM без использования алиасов Next.js в упакованном рантайме.
- **fix(build):** Перемещение локального префикса Wine `.tmp/wine32` за пределы изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не вызывали сканирование `EACCES` при сборках на Node 24.
- **fix(build):** Копирование каталога нативного рантайма `wreq-js` в изолированный автономный вывод Next.js, чтобы упакованные запуски Playwright/E2E могли загрузить хук инструментирования на Linux.
- **fix(api):** Валидация websocket-моста Codex Responses и JSON-нагрузок `/v1/batches` с помощью Zod перед использованием, что сохраняет валидацию маршрута `request.json()` в рабочем состоянии и возвращает явные ответы 400 для недействительных тел запросов.
- **fix(providers):** Добавление явного типизирования для вспомогательных функций псевдонимов и категорий провайдеров, чтобы строгий CI-гейт `typecheck:noimplicit:core` проходил успешно.
- **fix(ui):** Сохранение метки страницы деталей провайдера прокси upstream с запасным интерфейсом управления "Управляется через настройки прокси upstream", когда переводы недоступны.
- **fix(electron):** Укрепление CSP для производственной настольной версии путем удаления `unsafe-eval` вне режима разработки и добавления ограничений для object, base URI, form action, frame ancestor и worker.
- **fix(cli):** Замена путей выполнения команд с интерполяцией shell и привилегированных команд на вспомогательные функции `spawn`/`execFile` на основе аргументов для настройки базы данных, команд Tailscale с sudo, редактирования DNS для MITM и процессов установки/удаления сертификатов.
- **fix(ui):** Обеспечение устойчивости иконок провайдеров путем использования компонентов `@lobehub/icons` напрямую в первую очередь, а затем локальных резервных PNG/SVG, избегая peer-рантайма `@lobehub/ui` в панели управления.

- **Вложения PDF:** Разблокирована глубокая парсинг строковых объектов (`geminiHelper`), что обеспечивает успешную передачу сложных PDF-нагрузок от потоков, совместимых с OpenAI, через перевод Gemini без их скрытого отбрасывания (#993)
- **Движок SkillsMP:** Исправлены пути отображения извлечения объектов внутри API-роутера для устранения проблемы с отображением рынка в UI при изолированных развертываниях Docker/Standalone Node (#988)

---

---

---

## [3.6.1] — 2026-04-10

### ✨ New Features

- **feat(docs):** интеграция многостраничной документации в панель управления OmniRoute (#1969)
- **feat(settings):** добавление настройки лимита тела запроса (#1968)
- **feat(auth):** добавление стандартного секрета OAuth-клиента Gemini CLI (#1974)
- **feat(models):** предоставление контекстных окон моделей.dev в /v1/models (#1972)
- **fix(db):** устранение проблемы с резервной шифрованием, вызывающей циклы перешифровки (#1941)
- **fix(auth):** исправление очистки ответов final_answer для помощника Codex (#1965)

- **feat(providers):** Реализация возможностей генерации и редактирования изображений для ChatGPT Web, включая генерацию изображений в чате и кэширование (#1606).
- **feat(ui):** Интеграция логотипа SVG и улучшение взаимодействий с API-ключами в инструментах API OpenCode Zen/Go (#1607).

- **feat(providers):** Интеграция AgentRouter в качестве нового провайдера, совместимого с OpenAI, с $200 бесплатных кредитов при регистрации (Issue #1572).
- **feat(ui):** Реализация тестирования моделей по запросу в панели управления провайдерами, позволяющее выполнять диагностические проверки с одним токеном без триггера лимитов скорости (Issue #1532).

- **Действие по восстановлению OAuth Env:** Добавлена кнопка "Repair env" в панели управления OAuth-провайдерами, которая обнаруживает и восстанавливает отсутствующие идентификаторы клиентов OAuth из `.env.example` — с резервным копированием с временными метками и безопасностью только для добавления. Включает полную поддержку 33 языков i18n и очищенные API-ответы (#1116, автор @yart)

### 🐛 Bug Fixes

- **fix(mitm):** Компиляция утилит MITM как NodeNext ESM во время prepublish, копирование сервера MITM CommonJS в автономный артефакт, и разрешение путей данных MITM без зависимости от псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Перемещение локального префикса `.tmp/wine32` Wine из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не вызывали сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Копирование каталога `wreq-js` в изолированный выходной каталог Next.js, чтобы упакованные Playwright/E2E могли загружать хук инструментации на Linux.
- **fix(api):** Валидация вебсокет-моста Codex Responses и JSON-полезных нагрузок `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую валидацию маршрута `request.json()` и возвращая явные 400-ответы для недопустимых тел.
- **fix(providers):** Добавление явного типирования для помощников псевдонимов и категорий провайдеров, чтобы пройти гейт `typecheck:noimplicit:core` CI.
- **fix(ui):** Сохранение страницы деталей провайдера через прокси с меткой "Managed via Upstream Proxy Settings" поверхности управления, когда переводы недоступны.
- **fix(electron):** Укрепление CSP для рабочей версии десктопа, удаление `unsafe-eval` за пределами разработки и добавление ограничений объекта, базового URI, действия формы, предка фрейма и работника.
- **fix(cli):** Замена интерполированных путей установки и привилегированных команд выполнения с помощью помощников `spawn`/`execFile` на основе аргументов для установки базы данных, команд Tailscale sudo, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранение устойчивости иконок провайдеров, используя сначала компоненты `@lobehub/icons`, затем локальные PNG/SVG-резервные копии, избегая времени выполнения `@lobehub/ui` в панели управления.

- **i18n: Отсутствующие ключи провайдера:** Добавлены отсутствующие ключи `filterModels`, `modelsActive`, `showModel`, `hideModel` во всех 32 языковых файлах, исправлены ошибки времени выполнения `MISSING_MESSAGE` в UI провайдеров. Также очищены дублирующиеся ключи в `en.json` (#1111, автор @rilham97)
- **Маршрутизация GPT-5.4:** Добавлен отсутствующий `targetFormat: "openai-responses"` для моделей `gpt-5.4` и `gpt-5.4-mini` в провайдерах Codex и GitHub Copilot, исправлены ошибки `[400]: model not accessible via /chat/completions` (#1114, автор @ask33r)

---
---

---

---

## [3.6.0] — 2026-04-10

### ✨ New Features & Analytics

- **feat(docs):** интеграция многостраничной документации в панель управления OmniRoute (#1969)
- **feat(settings):** добавление настройки лимита тела запроса (#1968)
- **feat(auth):** добавление значения по умолчанию для секретного ключа OAuth-клиента Gemini CLI (#1974)
- **feat(models):** предоставление контекстных окон моделей.dev в /v1/models (#1972)
- **fix(db):** исправление проблемы с резервным шифрованием, вызывающим циклы повторного шифрования (#1941)
- **fix(auth):** исправление очистки ответа final_answer для помощника Codex (#1965)

- **feat(providers):** Реализация возможностей генерации и редактирования изображений для ChatGPT Web, включая генерацию изображений в чате и кэширование (#1606).
- **feat(ui):** Интеграция SVG-логотипа OpenCode Zen/Go API и улучшение взаимодействий с API-ключами (#1607).

- **feat(providers):** Интеграция AgentRouter в качестве нового провайдера, совместимого с OpenAI, с $200 бесплатных кредитов при регистрации (Issue #1572).
- **feat(ui):** Реализация тестирования моделей по запросу в панели управления провайдерами, позволяющее выполнять диагностические проверки с одним токеном без срабатывания лимитов скорости (Issue #1532).

- **Combo Smoke Test:** Увеличен бюджет токенов до 2048, чтобы предотвратить обрезку моделей мышления во время предварительных проверок, и полностью случайный арифметический пробный запрос, чтобы обойти детерминированное кэширование от пересылающих узлов (#1105)

### 🐛 Bug Fixes & Compliance

- **fix(mitm):** Компиляция утилит MITM как NodeNext ESM во время prepublish, копирование сервера MITM CommonJS в автономный артефакт, и разрешение путей данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Перемещение локального префикса Wine `.tmp/wine32` вне пути сборки Next.js, чтобы артефакты упаковки Windows Electron не вызывали сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Копирование каталога `wreq-js` в изолированный выходной каталог Next.js, чтобы упакованные Playwright/E2E могли загружать хук инструментации на Linux.
- **fix(api):** Валидация вебсокет-моста Codex Responses и JSON-полезной нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую проверку `request.json()` и возвращая явные 400-ответы для недопустимых тел.
- **fix(providers):** Добавление явного типизирования для помощников псевдонимов и категорий провайдеров, чтобы пройти строгий `typecheck:noimplicit:core` CI-шлюз.
- **fix(ui):** Сохранение страницы деталей провайдера через прокси с меткой "Управляется через настройки прокси" при отсутствии переводов.
- **fix(electron):** Укрепление CSP для рабочей среды, удаление `unsafe-eval` за пределами разработки и добавление ограничений для объектов, базового URI, действий формы, предков фрейма и рабочих процессов.
- **fix(cli):** Замена интерполированных команд оболочки для установки и привилегированного выполнения команд аргументными помощниками `spawn`/`execFile` для установки базы данных, команд Tailscale sudo, редактирования DNS MITM и установки/удаления сертификатов.
- **fix(ui):** Сохранение устойчивости иконок провайдеров с использованием компонентов `@lobehub/icons` напрямую, затем локальных PNG/SVG, избегая `@lobehub/ui` в панели управления.

- **DB Bloat / Row Limits:** Добавлены `CALL_LOGS_TABLE_MAX_ROWS` и `PROXY_LOGS_TABLE_MAX_ROWS` (по умолчанию: 100,000) в очиститель базы данных для соблюдения требований, чтобы предотвратить неконтролируемый рост SQLite. Лимиты применяются автоматически на цикле TTL (#1104, исправляет #1101)
- **HTML Error Handling:** Роутер теперь корректно идентифицирует неожиданные HTML-ответы (например, `<!DOCTYPE html>`), отправляемые провайдерами верхнего уровня (такими как Azure/Copilot), вместо того, чтобы выдавать запутанные ошибки `Unexpected token '<'`, всплывающие как 502 Bad Gateway (#1104, исправляет #1066)
- **Android/Termux SQLite Native Support:** `better-sqlite3` теперь корректно собирается из исходников с флагами кросс-компиляции в ARM64 локальных развертываний Termux без сбоев из-за отсутствующих предварительно собранных бинарных файлов (#1107)

---
---

---

---

## [3.5.9] — 2026-04-09

### ✨ New Features

- **feat(docs):** интеграция многостраничной документации в панель управления OmniRoute (#1969)
- **feat(settings):** добавление настройки лимита тела запроса (#1968)
- **feat(auth):** добавление значения по умолчанию для секрета OAuth-клиента Gemini CLI (#1974)
- **feat(models):** предоставление контекстных окон моделей.dev в /v1/models (#1972)
- **fix(db):** устранение проблемы с резервным шифрованием, вызывающим циклы повторного шифрования (#1941)
- **fix(auth):** исправление очистки ответа final_answer для помощника Codex (#1965)

- **feat(providers):** Реализация возможностей генерации и редактирования изображений для ChatGPT Web, включая генерацию изображений в чате и кэширование (#1606).
- **feat(ui):** Интеграция логотипа SVG и улучшение взаимодействий с API-ключами для OpenCode Zen/Go (#1607).

- **feat(providers):** Интеграция AgentRouter в качестве нового провайдера, совместимого с OpenAI, с $200 бесплатных кредитов при регистрации (Issue #1572).
- **feat(ui):** Реализация тестирования моделей по запросу в панели управления провайдерами, позволяющее выполнять диагностические проверки с одним токеном без срабатывания лимитов скорости (Issue #1532).

- **Постоянное упорядочивание комбо:** Перетаскивайте карточки комбо за ручку, чтобы изменить их порядок в панели управления; порядок сохраняется в SQLite через новый столбец `sort_order` и конечную точку `POST /api/combos/reorder`. Включает миграцию БД `020_combo_sort_order.sql` и сохранение импорта JSON (#1095)
- **Переупорядочивание групп в боковой панели:** Перемещено "Logs" перед "Health" в разделе "System" и "Limits & Quotas" после "Cache" в разделе "Primary" для более логичного навигационного потока (#1095)

### 🐛 Bug Fixes

- **fix(mitm):** Компиляция утилит MITM как NodeNext ESM во время prepublish, копирование сервера MITM CommonJS в автономный артефакт и разрешение путей данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Перемещение локального префикса Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не вызывали сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Копирование каталога `wreq-js` в изолированный выходной каталог Next.js, чтобы упакованные Playwright/E2E могли загружать хук инструментации на Linux.
- **fix(api):** Проверка веб-сокета моста ответов Codex и JSON-тела `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую проверку маршрута `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавление явного типирования для помощников псевдонимов и категорий провайдеров, чтобы строгий `typecheck:noimplicit:core` CI-шлюз прошел.
- **fix(ui):** Поддержание страницы деталей провайдера прокси-сервера с меткой "Управляется через настройки прокси-сервера" при отсутствии переводов.
- **fix(electron):** Укрепление CSP для рабочего стола в производстве путем удаления `unsafe-eval` вне разработки и добавления ограничений объекта, базового URI, действия формы, предка фрейма и рабочего процесса.
- **fix(cli):** Замена интерполированных оболочкой путей установки и выполнения привилегированных команд на помощников `spawn`/`execFile` на основе аргументов для установки базы данных, команд Tailscale sudo, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Поддержание иконок провайдеров устойчивыми путем использования компонентов `@lobehub/icons` напрямую, а затем резервных локальных PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели управления.

- **Поверхность сбоев потока:** События `response.failed` (например, ошибки лимита скорости Codex) теперь правильно отображаются как не-200 ошибки вместо того, чтобы быть молча игнорируемыми как пустые потоки 200 OK. Ошибки лимита скорости возвращают HTTP 429 (#1098, закрывает #1093)
- **Сохранение модели провайдера:** Теперь транслятор потоков ответов в OpenAI сохраняет фактическую модель провайдера (например, `gpt-5.4`) вместо жесткого кодирования резервной модели `gpt-4` (#1098, закрывает #1094)
- **Исправление EXDEV для Docker:** `build-next-isolated.mjs` теперь переходит от `fs.rename()` к `cp/rm`, когда Docker buildx вызывает `EXDEV` (ссылка на другое устройство), разблокируя рабочий процесс публикации образа Docker (#1097)
- **Разрешение пути CLI для macOS:** `cliRuntime.ts` разрешает родительские символические ссылки с помощью `fs.realpath()`, чтобы обработать цепочки `/var` → `/private/var` в macOS, предотвращая ложные отклонения `symlink_escape` (#1097)
- **Макет токенов журнала запросов:** Разделение значков токенов на отдельные группы входных (Total In, Cache Read, Cache Write) и выходных (Total Out, Reasoning) данных для лучшей читаемости; переименование метки "Time" в "Completed Time" (#1096)

---

---

---

## [3.5.8] — 2026-04-09

### ✨ New Features & Analytics

- **feat(docs):** интеграция многостраничной документации в панель управления OmniRoute (#1969)
- **feat(settings):** добавление настройки лимита тела запроса (#1968)
- **feat(auth):** добавление значения по умолчанию для секретного ключа OAuth-клиента Gemini CLI (#1974)
- **feat(models):** предоставление контекстных окон моделей.dev в /v1/models (#1972)
- **fix(db):** исправление проблемы с резервным шифрованием, вызывающим циклы повторного шифрования (#1941)
- **fix(auth):** исправление очистки ответов final_answer для помощника Codex (#1965)

- **feat(providers):** Реализация возможностей генерации и редактирования изображений для ChatGPT Web, включая генерацию изображений в чате и кэширование (#1606).
- **feat(ui):** Интеграция логотипа инструмента OpenCode Zen/Go API и улучшение взаимодействий с API-ключами (#1607).

- **feat(providers):** Интеграция AgentRouter в качестве нового провайдера, совместимого с OpenAI, с $200 бесплатных кредитов при регистрации (Issue #1572).
- **feat(ui):** Реализация тестирования моделей по запросу в панели управления провайдерами, позволяющее выполнять диагностические проверки с одним токеном без триггера лимитов скорости (Issue #1532).

- **Analytics Layout Redesign:** Замена плоских метрик на адаптивную сетку `CompactStatGrid`, группирующую данные визуально по разделам (#1089)

### 🐛 Bug Fixes

- **fix(mitm):** Компиляция утилит MITM как NodeNext ESM во время prepublish, копирование сервера MITM CommonJS в автономный артефакт и разрешение путей данных MITM без зависимости от псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Перемещение локального префикса `.tmp/wine32` Wine из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не вызывали сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Копирование каталога `wreq-js` в изолированный выходной каталог Next.js, чтобы упакованные Playwright/E2E могли загружать хук инструментации на Linux.
- **fix(api):** Валидация вебсокет-моста Codex Responses и JSON-полезных нагрузок `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую валидацию маршрута `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавление явного типирования для помощников псевдонимов и категорий провайдеров, чтобы пройти шлюз CI `typecheck:noimplicit:core`.
- **fix(ui):** Сохранение страницы деталей провайдера прокси-сервера с меткой "Управляется через настройки прокси-сервера" при отсутствии переводов.
- **fix(electron):** Укрепление CSP для рабочей среды, удаление `unsafe-eval` за пределами разработки и добавление ограничений для объектов, базового URI, действий формы, предков фрейма и рабочих процессов.
- **fix(cli):** Замена интерполированных путей командной оболочки для установки и привилегированного выполнения команд с помощниками `spawn`/`execFile` на основе аргументов для установки базы данных, команд Tailscale sudo, редактирования DNS MITM и установки/удаления сертификатов.
- **fix(ui):** Сохранение устойчивости иконок провайдеров с использованием компонентов `@lobehub/icons` напрямую, затем резервных PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели управления.

- **Build Core:** Принудительная очистка Turbopack через скрипт Prepbulish для предотвращения конфликтов маршрутизации app/ Next.js 16 на времени выполнения.
- **Provider Quarantine:** Внедрение предохранителей моделей/провайдеров с адаптивным TTL экспоненциального обратного отсчета для повторяющихся ошибок на стороне провайдера (#1090)
- **Oauth Keep-Alive:** Безопасная защита аутентифицированных активных учетных записей от случайного отключения от роутера из-за временных сбоев обновления токенов (#1085)

### 🔒 Security & Maintenance

- **Dependabot:** обновление axios с 1.14.0 до 1.15.0 для устранения флагов SSRF (#1088)

---

---

---

## [3.5.7] — 2026-04-09

### 🐛 Исправления ошибок и безопасность

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, скопировать сервер CommonJS MITM в автономный артефакт и разрешить пути данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать каталог нативного времени выполнения `wreq-js` в изолированный выходной каталог Next.js standalone, чтобы упакованные запуски Playwright/E2E могли загрузить хук инструментации на Linux.
- **fix(api):** Проверять вебсокет-мост Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую проверку маршрута `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавить явное типизирование для помощников псевдонимов и категорий поставщиков, чтобы строгий шлюз `typecheck:noimplicit:core` CI прошел.
- **fix(ui):** Сохранить страницу деталей поставщика прокси-сервера вверх потоком с меткой резервного копирования "Управляется через настройки прокси-сервера вверх потоком", когда переводы недоступны.
- **fix(electron):** Усилить CSP рабочего стола в производстве, удалив `unsafe-eval` вне разработки и добавив ограничения объекта, базового URI, действия формы, предка фрейма и рабочего.
- **fix(cli):** Заменить пути установки и выполнения привилегированных команд, интерполированные оболочкой, на помощников `spawn`/`execFile` на основе аргументов для настройки базы данных, команд sudo Tailscale, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сделать значки поставщиков устойчивыми, используя сначала компоненты `@lobehub/icons`, затем резервные копии PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели инструментов.

- **Фрагменты автономного Turbopack:** Исправлена критическая ошибка в `scripts/prepublish.mjs`, где отсутствующие фрагменты Turbopack из трассировки `.next/standalone` приводили к ошибке `500 ChunkLoadError` (например, сбой страницы `_not-found`) во время производственных развертываний через NPM или Docker. Теперь автономные фрагменты явно копируются и правильно очищаются от хэшей Turbopack.

---

---

---

## [3.5.6] — 2026-04-09

### ✨ Новые функции

- **feat(docs):** интегрировать многостраничную документацию в панели инструментов OmniRoute (#1969)
- **feat(settings):** добавить настройку лимита тела запроса (#1968)
- **feat(auth):** добавить резервный секрет OAuth-клиента Gemini CLI (#1974)
- **feat(models):** открыть контекстные окна models.dev в /v1/models (#1972)
- **fix(db):** решить резервное шифрование, вызывающее циклы повторного шифрования (#1941)
- **fix(auth):** исправить очистку ответов final_answer ассистента Codex (#1965)

- **feat(providers):** Реализовать возможности генерации и редактирования изображений для веб-версии ChatGPT, включая генерацию изображений в чате и кэширование (#1606).
- **feat(ui):** Интегрировать SVG-логотип API-инструмента OpenCode Zen/Go и улучшить взаимодействия копирования API-ключа в буфер обмена (#1607).

- **feat(providers):** Интегрировать AgentRouter в качестве нового поставщика, совместимого с OpenAI, с $200 бесплатных кредитов при регистрации (Проблема #1572).
- **feat(ui):** Реализовать тестирование по запросу для каждой модели в панели инструментов поставщика, позволяющее выполнять диагностические проверки с одним токеном без срабатывания ограничений скорости (Проблема #1532).

- **Маскировка конфиденциальности электронной почты:** Электронные адреса учетных записей OAuth теперь маскируются в панели инструментов поставщика (например, `di*****@g****.com`), чтобы предотвратить случайное раскрытие при совместном использовании скриншотов. Полный адрес виден при наведении курсора через атрибут `title` (#1025).
- **OpenRouter и GitHub в реестрах встраивания/изображений:** OpenRouter (3 модели встраивания, 4 модели изображений) и GitHub Models (2 модели встраивания через Azure) теперь являются основными записями в реестрах поставщиков, что позволяет использовать их для `/v1/embeddings` и `/v1/images/generations` (#960).
- **Переключатель видимости модели и фильтр поиска:** Список моделей на странице поставщика теперь включает панель поиска/фильтра в реальном времени и переключатель видимости для каждой модели (👁 значок). Скрытые модели выделены серым цветом и исключены из каталога `/v1/models`. Значок активного-счета (`N/M активных`) показывает наглядно, сколько моделей включено (#750).
- **Локализация на китайском языке (zh-CN):** Добавлены недостающие переводы для функций Context Relay, Memory, LKGP и Models.dev, а также стандартизирована терминология по всему приложению (#1079).
- **Автосинхронизация среды:** Добавлен `sync-env.mjs` для автоматической генерации и добавления `.env` из `.env.example` во время установки, автоматически генерируя криптографические секреты при первом запуске.
- **Обновление панели инструментов режима источника:** Исправлено обновление источника (git-checkout) в реальном времени в панели инструментов, что позволяет обеспечить безопасные, реальные обновления для установок, не связанных с NPM.

### 🐛 Исправления ошибок и безопасность

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, скопировать сервер CommonJS MITM в автономный артефакт и разрешить пути данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать каталог нативного времени выполнения `wreq-js` в изолированный выходной каталог Next.js standalone, чтобы упакованные запуски Playwright/E2E могли загрузить хук инструментации на Linux.
- **fix(api):** Проверять вебсокет-мост Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую проверку маршрута `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавить явное типизирование для помощников псевдонимов и категорий поставщиков, чтобы строгий шлюз `typecheck:noimplicit:core` CI прошел.
- **fix(ui):** Сохранить страницу деталей поставщика прокси-сервера вверх потоком с меткой резервного копирования "Управляется через настройки прокси-сервера вверх потоком", когда переводы недоступны.
- **fix(electron):** Усилить CSP рабочего стола в производстве, удалив `unsafe-eval` вне разработки и добавив ограничения объекта, базового URI, действия формы, предка фрейма и рабочего.
- **fix(cli):** Заменить пути установки и выполнения привилегированных команд, интерполированные оболочкой, на помощники `spawn`/`execFile` на основе аргументов для настройки базы данных, команд sudo Tailscale, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сделать значки поставщиков устойчивыми, используя сначала компоненты `@lobehub/icons`, затем резервные копии PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели инструментов.

- **Очистка жестко закодированных секретов:** Удалены 12 резервных жестко закодированных учетных данных OAuth из исходного кода, что заставляет надежно полагаться на переменные среды и устраняет предупреждения безопасности статического анализа.
- **Патч безопасности Next.js:** Обновлено `next` с 16.2.2 до 16.2.3 для устранения критической уязвимости RCE десериализации RSC (SNYK-JS-NEXT-15954202).
- **Сбой UI памяти/кеша:** Добавлены защитники от нулевых значений (`?? 0`) для вызовов `.toLocaleString()` на страницах панели инструментов Memory и Cache, предотвращающие сбои `TypeError`, когда таблицы базы данных пусты или содержат нулевые числовые значения (#1083).
- **Перевод tool_choice WebSearch:** Исправлено, что перевод OpenAI-to-Claude отбрасывает объекты `tool_choice` с `type: "function"` как есть, которые отвергает Claude. Теперь правильно отображает все варианты `tool_choice` OpenAI (`function`, `required`, `none`) в формат, совместимый с Claude (`tool`, `any`, `auto`), что исправляет "Did 0 searches" в веб-поиске Claude Code (#1072).
- **Переопределение baseUrl для проверки поставщика:** Добавлен пропуск `baseUrl` из запросов проверки на стороне клиента к конечной точке проверки на стороне сервера. Пользователи китайских сайтов, использующие Alibaba Coding Plan (bailian-coding-plan), теперь могут проверять API-ключи против своего пользовательского URL-адреса Base вместо того, чтобы всегда обращаться к международной конечной точке (#1078).
- **Заголовок авторизации Minimax:** Переключено Minimax на формат заголовка `Authorization: Bearer` вместо `x-api-key`, соответствующий текущему спецификации API (#1076).
- **Резервный нативный fetch:** Добавлен изящный резервный вариант нативного `fetch`, когда диспетчер `undici` не удается, что улучшает устойчивость в средах, где недоступен undici (#1054).
- **Исправление EPIPE Flood:** Добавлена логика цепного разрыва, чтобы предотвратить ошибки EPIPE, создающие обратную связь, которая заполняет журналы на GB/s (#1006).
- **Проверка PAT Qoder:** Улучшена проверка личного токена доступа Qoder с информативными сообщениями об ошибках, которые направляют пользователей к правильному формату токена (#966).
- **Конвейер CI/CD:** Исправлен сбой `check:docs-sync`, синхронизировав версию OpenAPI с 3.5.6 и завершив заголовок релиза CHANGELOG. Закомментирован `DATA_DIR` в `.env.example`, чтобы предотвратить сбои тестов E2E в CI-раннерах, не имеющих корневых разрешений.

### 🌍 i18n

- **Автоматическая генерация языка (CI):** Добавлен конвейер CI для автоматической генерации недостающих языковых файлов и строк через рабочий процесс `feat(CI,i18n)`, охватывающий 30+ локалей (#1071).

---
```

---

---

## [3.5.5] — 2026-04-08

### ✨ New Features

- **feat(docs):** интегрировать многостраничную документацию в панель управления OmniRoute (#1969)
- **feat(settings):** добавить настройку лимита тела запроса (#1968)
- **feat(auth):** добавить стандартный секрет OAuth-клиента Gemini CLI (#1974)
- **feat(models):** открыть контекстные окна моделей.dev в /v1/models (#1972)
- **fix(db):** решить проблему с резервным шифрованием, вызывающим циклы перешифровки (#1941)
- **fix(auth):** исправить очистку ответа final_answer ассистента Codex (#1965)

- **feat(providers):** Реализовать возможности генерации и редактирования изображений для ChatGPT Web, включая генерацию изображений в чате и кэширование (#1606).
- **feat(ui):** Интегрировать логотип SVG инструмента OpenCode Zen/Go API и улучшить взаимодействия копирования API-ключа в буфер обмена (#1607).

- **feat(providers):** Интегрировать AgentRouter в качестве нового провайдера, совместимого с OpenAI, с $200 бесплатных кредитов при регистрации (Issue #1572).
- **feat(ui):** Реализовать тестирование моделей по запросу в панели управления провайдером, позволяющее выполнять диагностические проверки с одним токеном без срабатывания ограничений скорости (Issue #1532).

- **Предупреждение о совместимости Node.js 24:** Добавлено предупреждение о несовместимости версий на странице входа для руководства пользователей к стабильной версии Node.js 22 LTS, предотвращающее аварийное завершение работы из-за сбоев связывания sqlite.
- **Стратегия комбинированного реле контекста:** Добавлена новая стратегия комбинированного реле контекста с приоритетным стилем маршрутизации, структурированным генерацией резюме передачи при достижении порога использования квоты, и внедрением передачи после следующей реальной смены учетной записи.
- **Глобальные настройки реле контекста:** Добавлены глобальные настройки по умолчанию, а также настройки уровня комбинации для `handoffThreshold`, `handoffModel` и `handoffProviders`, чтобы новые или ненастроенные комбинации могли использовать эту функцию согласованно.

### 🐛 Bug Fixes

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать сервер MITM CommonJS в автономный артефакт и разрешить пути данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` вне пути сборки Next.js, чтобы артефакты упаковки Windows Electron не вызывали сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать каталог нативного времени выполнения `wreq-js` в изолированный выходной каталог Next.js standalone, чтобы упакованные запуски Playwright/E2E могли загрузить хук инструментации на Linux.
- **fix(api):** Проверять вебсокет-мост Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленый маршрут проверки `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавить явное типизирование помощников псевдонимов и категорий провайдеров, чтобы строгий шлюз `typecheck:noimplicit:core` CI прошел.
- **fix(ui):** Сохранять иконки провайдеров устойчивыми, используя сначала компоненты `@lobehub/icons`, затем локальные резервные копии PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели управления.
- **fix(electron):** Укрепление CSP для рабочей среды, удаление `unsafe-eval` вне разработки и добавление ограничений объекта, URI базы, действия формы, предка фрейма и работника.
- **fix(cli):** Заменить пути установки и выполнения команд с интерполяцией оболочки на помощники `spawn`/`execFile` на основе аргументов для установки базы данных, команд Tailscale sudo, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранять иконки провайдеров устойчивыми, используя сначала компоненты `@lobehub/icons`, затем локальные резервные копии PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели управления.

- **Проверки состояния соединения прокси:** Применены проверки разрешения прокси для каждого соединения в цикле очистки (`tokenHealthCheck.ts`) и глобальных проверок провайдеров, что улучшило стабильность прокси (#1051, #1056, #1061).
- **Устранение уязвимостей безопасности:** Устранены несколько предупреждений сканирования CodeQL, включая SSRF в синхронизации моделей, небезопасную случайность в веб-криптографии (`generateSessionId`) и неполную очистку URL.
- **Типизация и синхронизация реле контекста:** Отменены сбои тестирования вне области действия и устранены ошибки типизации `handoffProvider` и извлечения полезной нагрузки ответа `input`.
- **Маршрутизация ответов совместимых с OpenAI:** Исправлена маршрутизация трафика завершенных чатов для устаревших/импортированных провайдеров, совместимых с OpenAI (например, `openai-compatible-sp-openai`), которые неправильно направляли трафик в `/chat/completions`, когда реальный узел провайдера был настроен как `apiType: "responses"`. OmniRoute теперь рассматривает `providerSpecificData.apiType` как авторитетный во всех маршрутах, исполнителях и инструментах переводчика, избегая ложных сбоев с пустым содержимым во время тестов комбо/провайдера (#1069).
- **Интеграция PDF-вложений Gemini:** Исправлено создание полезной нагрузки и формат для разбора `inline_data` и общих источников base64 для глубокого маршрутизации PDF Gemini (#993, #1021).
- **Резервные варианты SDK Vercel AI:** Сопоставлены `max_output_tokens` с `max_tokens` для строгих провайдеров, совместимых с OpenAI, что устранило ошибки от стандартных агентов и фреймворков (#994).
- **Внешняя аутентификация и надежность UI:** Обработаны сбои с нулевым `state` в обмене Cline OAuth (#1016), добавлены шаблоны ошибок 400 сторонних разработчиков в резервный вариант комбо (#1024) и устранены переполнения макета боковой панели и всплывающих окон (#1039, #1001).
- **Дедупликация реле контекста в полете:** Предотвращена генерация дублирующихся передач для одной и той же сессии/комбо, пока предыдущий запрос резюме все еще выполняется.
- **Включение провайдеров реле контекста:** Выровняли поведение времени выполнения с конфигурацией, чтобы явные исключения `handoffProviders`, включая пустой массив, теперь отключали генерацию передачи по ожиданию.

### 🛠️ Maintenance & Dependabot

- **Обновление подзависимостей:** Обновлено `hono` до `4.12.12` и `@hono/node-server` до `1.19.13` для устранения критических уязвимостей безопасности (#1063, #1064, #1067, #1068).

### 📚 Documentation

- **Синхронизация документации:** Обновлена системная документация (README, Architecture, Features, Tools, Troubleshooting) и синхронизированы конфигурации `i18n` для соответствия шаблонам контекстной передачи v3.5.5 и шагам устранения неполадок с прокси.
- **Примечания к доставке реле контекста:** Документированы текущая архитектура, поток времени выполнения и акцент на Codex в документации функций, журнале изменений и руководстве по агентам.

---

---

---

## [3.5.4] — 2026-04-07

### ✨ New Features

- **feat(docs):** интеграция многостраничной документации в панель управления OmniRoute (#1969)
- **feat(settings):** добавление настройки лимита тела запроса (#1968)
- **feat(auth):** добавление значения по умолчанию для секрета OAuth-клиента Gemini CLI (#1974)
- **feat(models):** предоставление контекстных окон моделей.dev в /v1/models (#1972)
- **fix(db):** исправление проблемы с резервным шифрованием, вызывающим циклы повторного шифрования (#1941)
- **fix(auth):** исправление очистки ответа final_answer для помощника Codex (#1965)

- **feat(providers):** Реализация возможностей генерации и редактирования изображений для ChatGPT Web, включая генерацию изображений в чате и кэширование (#1606).
- **feat(ui):** Интеграция логотипа инструмента API OpenCode Zen/Go и улучшение взаимодействий копирования API-ключа в буфер обмена (#1607).

- **feat(providers):** Интеграция AgentRouter в качестве нового провайдера, совместимого с OpenAI, с $200 бесплатных кредитов при регистрации (Issue #1572).
- **feat(ui):** Реализация тестирования моделей по запросу в панели управления провайдером, позволяющее выполнять диагностические проверки с одним токеном без срабатывания ограничений скорости (Issue #1532).

- **Подробное отслеживание токенов:** Добавлены столбцы с подробным разделением токенов (чтение кэша, запись в кэш, рассуждение) в журналы вызовов с правильным различением null и нуля. Включает миграцию БД 018 и отображение 5 меток UI в зависимости от возможностей провайдера (#1017 — спасибо @rdself).
- **Импорт/экспорт конфигурации JSON:** Восстановлен экспорт и импорт настроек в формате JSON для миграции из устаревших конфигураций. Укреплен с точки зрения безопасности с помощью редактирования Zero-Trust для паролей и полей `requireLogin`, а также автоматических резервных копий базы данных перед импортом (#1012 — спасибо @luandiasrj).
- **Псевдонимы без потоковой передачи:** Добавлена поддержка API для явных псевдонимов без потоковой передачи (`non_stream`, `disable_stream`, `disable_streaming`, `streaming=false`), нормализованных на границе перед переводом провайдера (#1036 — спасибо @wlfonseca).
- **Локализация панели управления на русском языке:** Полный перевод интерфейса панели управления на русский язык, включая исправления для 2 ключей локали украинского языка (#1003 — спасибо @mercs2910).

### 🐛 Bug Fixes

- **fix(mitm):** Компиляция утилит MITM в формате NodeNext ESM во время prepublish, копирование сервера MITM в формате CommonJS в автономный артефакт, и разрешение путей данных MITM без использования псевдонимов Next.js в пакетированном времени выполнения.
- **fix(build):** Перемещение локального префикса Wine `.tmp/wine32` вне пути сборки Next.js, чтобы артефакты пакетирования Windows Electron не вызывали сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Копирование каталога `wreq-js` в изолированный выходной каталог Next.js, чтобы пакетированные Playwright/E2E могли загружать хук инструментации на Linux.
- **fix(api):** Валидация веб-сокет-моста Codex Responses и JSON-полезной нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленый маршрут валидации `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавление явного типирования для помощников псевдонимов и категорий провайдеров, чтобы строгий `typecheck:noimplicit:core` CI-шлюз прошел.
- **fix(ui):** Поддержание страницы деталей провайдера с прокси-сервером с меткой "Управляется через настройки прокси-сервера" при отсутствии переводов.
- **fix(electron):** Укрепление CSP для рабочей среды на настольных компьютерах путем удаления `unsafe-eval` вне разработки и добавления ограничений для объектов, URI базы, действий формы, предков фрейма и рабочих процессов.
- **fix(cli):** Замена интерполированных оболочкой путей установки и привилегированных команд на помощников `spawn`/`execFile` с аргументами для установки базы данных, команд Tailscale sudo, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Поддержание устойчивости значков провайдеров с использованием компонентов `@lobehub/icons` напрямую, а затем резервных PNG/SVG, избегая `@lobehub/ui` в рантайме панели управления.

- **Недостаточный подсчет входных токенов в потоке Anthropic:** Исправлена критичная ошибка, при которой в потоке Anthropic `prompt_tokens` отображались только некешированные токены (например, `in=3`, когда фактическое общее количество составляло 113,616). Токены кэша теперь суммируются в prompt_tokens во время потоковой передачи (#1017).
- **Типы инструментов API встроенных ответов:** Сохранение встроенных инструментов API Responses (`web_search`, `file_search`, `computer`, `code_interpreter`, `image_generation`) от тихой фильтрации пустыми именами инструментов — эти инструменты не содержат поле `.name` (#1014 — спасибо @rdself).
- **Совместимость ответов Cursor/Codex:** Исправление пустого вывода в Cursor при использовании моделей Codex путем подъема элементов ввода системы в `instructions`, очистки недопустимых имен инструментов и обнаружения полезных нагрузок в формате Responses на конечной точке chat/completions (#1002 — спасибо @mercs2910).
- **Отображение истечения срока действия токена OAuth:** Исправление отображения подключений OAuth с меткой "истекло", даже при наличии действительных токенов, путем чтения `tokenExpiresAt` (обновляется при обновлении) вместо `expiresAt` (время выдачи оригинального разрешения) (#1032 — спасибо @tombii).
- **Копирование быстрых ответов Codex:** Исправление копирования настроек панели управления с `service_tier=fast` на `service_tier=priority`, соответствующее фактическому формату проводов Codex (#1045 — спасибо @kfiramar).
- **Запуск настольного приложения macOS:** Устойчивость запуска пакетированного приложения macOS путем исключения артефактов рабочего стола из автономного пакета и улучшения обнаружения пути запуска (#1004 — спасибо @mercs2910).
- **Макет боковой панели macOS:** Исправление перекрытия кнопок управления, расстояния боковой панели и переполнения кнопок в настольном приложении Electron для macOS (#1001 — спасибо @mercs2910).

### ⚡ Performance

- **Загрузка страницы аналитики:** Значительное уменьшение времени загрузки страницы аналитики (30с→1-2с для 50К записей) за счет запросов к БД с фильтрацией по дате, параллельных `Promise.all()` расчетов затрат и объединения 6 запросов COUNT в один агрегат CASE WHEN (#1038 — спасибо @oyi77).

### 🔒 Security & Dependencies

- **Базовое изображение Node:** Обновление базы Docker с `22-bookworm-slim` на `22.22.2-trixie-slim` (#1011 — Snyk).
- **Производственные зависимости:** Обновление 5 производственных зависимостей (#1044 — Dependabot).
- **Vite:** Обновление с 8.0.3 до 8.0.5 (#1031 — Dependabot).
- **Разработческие зависимости:** Обновление 4 разработческих зависимостей (#1030 — Dependabot).

### 🧪 Tests

- **Тесты учета токенов:** Добавлено 18 новых модульных тестов, охватывающих подробное разделение токенов, семантику null vs zero, извлечение токенов по провайдерам и исправление потокового ввода Anthropic (#1017).
- **Тесты встроенных инструментов:** Добавлено 3 новых тестовых случая для сохранения типов встроенных инструментов API Responses (#1014).
- **Санитизация ChatCore:** Обновление тестов санитизации для учета обнаружения формата Responses (PR #1002) и сохранения встроенных инструментов (PR #1014).

### 🛠️ Maintenance

- **Рабочий процесс PR:** Обновление рабочего процесса `/review-prs` для слияния PR в ветку выпуска (`release/vX.Y.Z`) вместо прямого слияния в `main`, обеспечивая правильное предварительное размещение релиза.

### Coverage

- **2537 тестов, 2532 прошедших** — Покрытие операторов: 91.95%, Покрытие ветвей: 78.79%, Покрытие функций: 93.19%

---

---

## [3.5.3] - 2026-04-07

### Security

- **Уязвимости:** Полностью устранены 12 уязвимостей высокого уровня CodeQL, мигрировав с Math.random на `crypto.randomUUID()`, обернув точки инъекции SSE агрессивным обратным экранированием, очистив конечные фрагменты HTTP, и внедрив строгие схемы проверки SSRF HTTP для внутренних маршрутов.
- **Зависимости:** Обновлено Next.js до `^16.2.2` и Vite до `>=8.0.5`, что устранило критические векторы DoS, произвольного чтения файлов и CSRF в средах сборки/сервера.

### Исправлено

- **Стабильность E2E:** Устранена крайняя нестабильность CI и временные тайм-ауты тестов (Playwright) за счет правильного распространения внутренних автономных ресурсов `_next/static` и рефакторинга глубоких взаимодействий с UI внутри защитных циклов `expect().toPass()`.
- **Middleware:** Исправлен бесконечный цикл перенаправления на панели управления для новых экземпляров при отключенной опции requireLogin.
- **Основные резервные механизмы:** Сохранены основные контексты сбоев и улучшено управление ошибками в крайних случаях для чатов и резервных циклов.
- **Proxy/Hooks:** Оптимизированы локальные git хуки, нормализованы конечные точки покрытия токенов в `/coverage`, и защищены регионные поиски GLM.

### 🛠️ Обслуживание

- **Стабилизация CI/CD:** Предотвращены случайные зависания GitHub Runner за счет отсоединения шардированных процессов, настройки параллельности тестов, освобождения активных соединений при завершении сервера и строгого ограничения длительности заданий.

### Документация

- **Движок I18n:** Синхронизированы и отправлены глубокие обновления машинного перевода для всех 32 поддерживаемых языков (682 узла перевода выровнены).

### Покрытие

- **Тестирование:** Консолидирована рабочая область тестового покрытия, достигнуто 92.1% покрытия строк, с новыми строгими юнит-тестами, соответствующими политикам API ключей и областям инструментов.

---

---

---

## [3.5.2] — 2026-04-05

### ✨ Новые возможности

- **feat(docs):** интегрирована многостраничная документация в панель OmniRoute (#1969)
- **feat(settings):** добавлена настройка лимита тела запроса (#1968)
- **feat(auth):** добавлен стандартный секрет OAuth клиента Gemini CLI (#1974)
- **feat(models):** открыты контекстные окна моделей.dev в /v1/models (#1972)
- **fix(db):** устранена проблема с резервным шифрованием, вызывающая циклы перешифровки (#1941)
- **fix(auth):** исправлена очистка ответов final_answer для помощника Codex (#1965)

- **feat(providers):** Реализованы возможности генерации и редактирования изображений для ChatGPT Web, включая генерацию изображений в чате и кэширование (#1606).
- **feat(ui):** Интегрирован логотип SVG OpenCode Zen/Go API и улучшены взаимодействия копирования API ключа в буфер обмена (#1607).

- **feat(providers):** Интегрирован AgentRouter как новый провайдер, совместимый с OpenAI, с $200 бесплатных кредитов при регистрации (Issue #1572).
- **feat(ui):** Реализована возможность тестирования моделей по запросу в панели провайдеров, позволяющая выполнять диагностические проверки с одним токеном без триггера лимитов скорости (Issue #1532).

- **Интеграция Qoder API:** Полностью рефакторизован Qoder Executor для обхода устаревшего алгоритма шифрования COSY AES/RSA, направляя запросы напрямую в нативный URL DashScope OpenAi-совместимый. Устраняет сложные зависимости от модулей Node `crypto`, улучшая надежность потоков.
- **Переработка движка устойчивости:** Интегрированы грациозные резервные механизмы для переполнения контекста, проактивное обнаружение токенов OAuth и предотвращение эмиссии пустого содержимого (#990).
- **Стратегия маршрутизации, оптимизированная для контекста:** Добавлена новая интеллектуальная возможность маршрутизации для нативного максимизации окон контекста в автоматизированных комбо-развертываниях (#990).

### 🐛 Исправление ошибок

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать сервер MITM CommonJS в автономный артефакт, и разрешить пути данных MITM без зависимости от псевдонимов Next.js в среде выполнения.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` вне изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не вызывали сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать каталог нативного времени выполнения `wreq-js` в изолированный выходной путь Next.js standalone, чтобы упакованные Playwright/E2E могли загрузить хук инструментации на Linux.
- **fix(api):** Проверка вебсокет-моста Codex Responses и JSON-полезных нагрузок `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую валидацию маршрута `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавлена явная типизация для помощников псевдонимов и категорий провайдеров, чтобы строгий шлюз `typecheck:noimplicit:core` CI прошел.
- **fix(ui):** Сохранить страницу деталей провайдера upstream proxy с меткой "Управляется через настройки прокси upstream", когда переводы недоступны.
- **fix(electron):** Укрепление CSP для рабочей среды десктопа за счет удаления `unsafe-eval` вне разработки и добавления ограничений для объектов, базового URI, действий формы, предков фрейма и рабочих процессов.
- **fix(cli):** Замена интерполированных путей установки и привилегированных команд выполнения с помощью помощников `spawn`/`execFile` на основе аргументов для настройки базы данных, команд Tailscale sudo, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранение устойчивости иконок провайдеров за счет использования компонентов `@lobehub/icons` напрямую, затем локальных резервных PNG/SVG, избегая среды выполнения `@lobehub/ui` в панели управления.

- **Исправление потоковой коррупции API ответов:** Исправлена глубокая коррупция клонирования, где границы перевода Anthropic/OpenAI устраняли специфичные для `response.` префиксы SSE из границ потоковой передачи (#992).
- **Выравнивание кэша Claude Passthrough:** Выровнены маркеры совместимости CC-кеша с режимом прохождения клиента через верхний уровень, сохраняя кэширование подсказок.
- **Утечка памяти Turbopack:** Закреплено Next.js на строгой версии `16.0.10`, предотвращая утечки памяти и устаревание сборки из-за регрессий хешированных модулей Turbopack (#987).

---

---

## [3.5.1] — 2026-04-04

### ✨ New Features

- **feat(docs):** интегрировать многостраничную документацию в панель управления OmniRoute (#1969)
- **feat(settings):** добавить настройку лимита тела запроса (#1968)
- **feat(auth):** добавить стандартный секрет OAuth-клиента Gemini CLI (#1974)
- **feat(models):** открыть контекстные окна моделей.dev в /v1/models (#1972)
- **fix(db):** решить проблему с резервным шифрованием, вызывающим циклы повторного шифрования (#1941)
- **fix(auth):** исправить очистку ответа final_answer для помощника Codex (#1965)

- **feat(providers):** Реализовать возможности генерации и редактирования изображений для ChatGPT Web, включая генерацию изображений в чате и кэширование (#1606).
- **feat(ui):** Интегрировать логотип SVG инструмента OpenCode Zen/Go API и улучшить взаимодействие копирования API-ключа в буфер обмена (#1607).

- **feat(providers):** Интегрировать AgentRouter как нового провайдера, совместимого с OpenAI, с $200 бесплатных кредитов при регистрации (Issue #1572).
- **feat(ui):** Реализовать тестирование моделей по запросу в панели управления провайдерами, позволяющее выполнять диагностические проверки с одним токеном без триггера лимитов скорости (Issue #1532).

- **Интеграция Models.dev:** Интегрирована models.dev как авторитетный источник времени выполнения для ценообразования, возможностей и спецификаций моделей, переопределяющая жестко закодированные цены. Включает интерфейс настройки для управления интервалами синхронизации, строки перевода для всех 30 языков и надежное тестовое покрытие.
- **Родные возможности провайдера:** Добавлена поддержка объявления и проверки родных функций API (например, `systemInstructions_supported`), предотвращающая сбои путем очистки недопустимых ролей. В настоящее время настроена для провайдеров Gemini Base и Antigravity OAuth.
- **Расширенные настройки API провайдера:** Добавлены индивидуальные переопределения `User-Agent` для соединений с провайдерами API-ключей. Переопределение хранится в `providerSpecificData.customUserAgent` и теперь применяется к проверкам валидности и запросам выполнения на верхнем уровне.

### 🐛 Bug Fixes

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать сервер MITM CommonJS в автономный артефакт и разрешить пути данных MITM без зависимости от псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборок Node 24.
- **fix(build):** Копировать каталог времени выполнения `wreq-js` в изолированный выходной каталог Next.js standalone, чтобы упакованные Playwright/E2E могли загружать хук инструментации на Linux.
- **fix(api):** Проверять мост веб-сокета Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленый маршрут проверки `request.json()` и возвращая явные 400-ответы для недопустимых тел.
- **fix(providers):** Добавить явное типизирование помощников псевдонимов и категорий провайдеров, чтобы шлюз `typecheck:noimplicit:core` CI прошел.
- **fix(ui):** Сохранять страницу деталей провайдера верхнего прокси-сервера с меткой "Управляется через настройки прокси-сервера верхнего уровня", когда переводы недоступны.
- **fix(electron):** Усилить CSP для рабочей среды, удалив `unsafe-eval` за пределами разработки и добавив ограничения объекта, базового URI, действия формы, предка фрейма и рабочего процесса.
- **fix(cli):** Заменить пути установки и выполнения команд с интерполяцией оболочки на помощников на основе аргументов `spawn`/`execFile` для установки базы данных, команд Tailscale sudo, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранять устойчивость значков провайдеров, используя сначала компоненты `@lobehub/icons`, затем локальные резервные копии PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели управления.

- **Надежность Qwen OAuth:** Решены ряд проблем интеграции OAuth, включая блокировку 400 Bad Request для истекших токенов, резервное создание для анализа свойств OIDC `access_token`, когда `id_token` опущен, ошибки каталога моделей и строгое фильтрование заголовков `X-Dashscope-*`, чтобы избежать отклонения конечных точек, совместимых с OpenAI.

---

---

## [3.5.0] — 2026-04-03

### ✨ New Features

- **feat(docs):** интеграция многостраничной документации в панель управления OmniRoute (#1969)
- **feat(settings):** добавление настройки лимита тела запроса (#1968)
- **feat(auth):** добавление стандартного секрета OAuth-клиента Gemini CLI (#1974)
- **feat(models):** предоставление контекстных окон моделей.dev в /v1/models (#1972)
- **fix(db):** устранение проблемы с резервным шифрованием, вызывающим циклы повторного шифрования (#1941)
- **fix(auth):** исправление очистки ответов final_answer для помощника Codex (#1965)

- **feat(providers):** Реализация возможностей генерации и редактирования изображений для ChatGPT Web, включая генерацию изображений в чате и кэширование (#1606).
- **feat(ui):** Интеграция логотипа SVG и улучшение взаимодействий с API-ключами в OpenCode Zen/Go (#1607).

- **feat(providers):** Интеграция AgentRouter в качестве нового провайдера, совместимого с OpenAI, с бесплатными кредитами в размере $200 при регистрации (Issue #1572).
- **feat(ui):** Реализация тестирования моделей по запросу в панели управления провайдерами, позволяющее выполнять диагностические проверки с одним токеном без срабатывания лимитов скорости (Issue #1532).

- **Auto-Combo & Routing:** Завершена нативная интеграция жизненного цикла CRUD для расширенного движка Auto-Combo (#955).
- **Core Operations:** Исправлены отсутствующие переводы для новых нативных опций Auto-Combos (#955).
- **Security Validation:** Отключены задачи автоматического резервного копирования SQLite нативно во время выполнения модульных тестов CI для явного разрешения утечек памяти в Event Loop Node 22 (#956).
- **Ecosystem Proxies:** Завершена явная интеграция планировщиков синхронизации моделей, циклов OAuth и обновлений токенов через нативные системные прокси OmniRoute (#953).
- **MCP Extensibility:** Добавлен и успешно зарегистрирован новый инструмент MCP-фреймворка `omniroute_web_search` из бета-версии в производственные схемы (#951).
- **Tokens Buffer Logic:** Добавлены ограничения времени выполнения для расширенных буферов ввода/вывода токенов для точного отслеживания метрик использования (#959).

### 🐛 Bug Fixes

- **fix(mitm):** Компиляция утилит MITM как NodeNext ESM во время prepublish, копирование сервера MITM CommonJS в автономный артефакт и разрешение путей данных MITM без зависимости от псевдонимов Next.js в пакетированном времени выполнения.
- **fix(build):** Перемещение локального префикса `.tmp/wine32` Wine вне пути сборки Next.js, чтобы артефакты упаковки Windows Electron не вызывали сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Копирование каталога `wreq-js` в изолированный выходной каталог Next.js, чтобы пакетированные запуски Playwright/E2E могли загружать хук инструментации на Linux.
- **fix(api):** Проверка веб-сокет-моста ответов Codex и JSON-полезных нагрузок `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую проверку маршрута `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавление явной типизации для помощников псевдонимов и категорий провайдеров, чтобы строгий шлюз `typecheck:noimplicit:core` CI прошел.
- **fix(ui):** Сохранение страницы деталей провайдера с меткой "Управляется через настройки прокси" при отсутствии переводов.
- **fix(electron):** Укрепление CSP для рабочей среды путем удаления `unsafe-eval` вне разработки и добавления ограничений объекта, базового URI, действия формы, предка фрейма и рабочего процесса.
- **fix(cli):** Замена интерполированных команд оболочки для установки и привилегированного выполнения команд аргументами `spawn`/`execFile` для настройки базы данных, команд Tailscale sudo, редактирования DNS MITM и установки/удаления сертификатов.
- **fix(ui):** Сохранение устойчивости иконок провайдеров с использованием компонентов `@lobehub/icons` напрямую, затем локальных резервных копий PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели управления.

- **CodeQL Remediation:** Полностью устранены и защищены критические операции индексирования строк, предотвращающие эвристики массивов SSRF и полиномиальные алгоритмы обратного отслеживания (ReDoS) внутри глубоких модулей диспетчера прокси.
- **Crypto Hashes:** Замена слабых неверифицированных хэшей OAuth 1.0 на надежные примитивы валидации HMAC-SHA-256, обеспечивающие жесткие контролы доступа.
- **API Boundary Protection:** Правильная проверка и отображение защитных маршрутов, обеспечивающих строгую логику промежуточного программного обеспечения `isAuthenticated()` для новых динамических конечных точек, направленных на манипуляцию настройками и загрузку нативных навыков.
- **CLI Ecosystem Compat:** Устранены сбои нативных привязок парсера времени выполнения, вызывающие аварийное завершение детекторов среды `where` строго для случаев `.cmd/.exe`, обеспечивая плавное выполнение для внешних плагинов (#969).
- **Cache Architecture:** Рефакторинг точной структуры параметров кэша дашборда аналитики и системных настроек для поддержания стабильных циклов повторного гидратирования, устраняющих визуальные вспышки невыровненного состояния (#952).
- **Claude Caching Standards:** Нормализация и точное сохранение критически важных временных меток `ephemeral` для кэширования TTL заказов для узлов вниз, обеспечивающих стандартную совместимость запросов CC без потери метрик (#948).
- **Internal Aliases Auth:** Упрощение внутренних отображений времени выполнения, нормализация поиска полезных нагрузок учетных данных Codex внутри глобальных параметров перевода, устраняющих сбои 401 (#958).

### 🛠️ Maintenance

- **UI Discoverability:** Правильная корректировка категорий макета, явно разделяющих логику провайдеров бесплатного уровня, улучшая потоки сортировки UX внутри общих страниц реестра API (#950).
- **Deployment Topology:** Унификация артефактов развертывания Docker, обеспечивающих соответствие корневого `fly.toml` ожидаемым параметрам экземпляра облака, нативно обрабатывающих автоматические развертывания и масштабирование.
- **Development Tooling:** Декоплирование параметров `LKGP` времени выполнения в явные утилиты кэширования слоев базы данных, обеспечивающие строгое покрытие изоляции тестов для основных слоев кэширования.

---

---

## [3.4.9] — 2026-04-03

### Features & Refactoring

- **Dashboard Auto-Combo Panel:** Полностью переработан интерфейс `/dashboard/auto-combo` для беспрепятственной интеграции с нативными элементами Dashboard Cards и стандартизированными визуальными отступами/заголовками. Добавлены динамические визуальные индикаторы прогресса, отображающие механизмы весового выбора моделей.
- **Settings Routing Sync:** Полностью раскрыты внутренние схемы `priority` и `weighted` для целей маршрутизации внутри глобальных списков резервных настроек.

### Bug Fixes

- **Memory & Skills Locale Nodes:** Исправлены пустые теги рендеринга для опций Memory и Skills непосредственно внутри глобальных представлений настроек путем внутреннего связывания всех значений `settings.*` с `en.json` (также неявно отображается для инструментов межпереводов).

### Internal Integrations

- Интегрирован PR #946 — fix: сохранение совместимости с Claude Code в преобразованиях ответов
- Интегрирован PR #944 — fix(gemini): сохранение подписей мыслей при вызове антигравитационных инструментов
- Интегрирован PR #943 — fix: восстановление тела GitHub Copilot
- Интегрирован PR #942 — Fix cc-compatible cache markers
- Интегрирован PR #941 — refactor(auth): улучшение поиска псевдонимов NVIDIA + добавление ведения журнала ошибок LKGP
- Интегрирован PR #939 — Restore Claude OAuth localhost callback handling
- _(Примечание: PR #934 был опущен в цикле 3.4.9 для предотвращения регрессий конфликтов ядра)_

---

---

---

## [3.4.8] — 2026-04-03

### Security

- Полностью устранены все оставшиеся уязвимости Github Advanced Security (CodeQL) и предупреждения Dependabot.
- Исправлены уязвимости в случайных числах путем миграции с `Math.random` на `crypto.randomUUID()`.
- Защищены команды оболочки в автоматизированных скриптах от инъекций строк.
- Перенесены уязвимые шаблоны RegEx с катастрофическим обратным отслеживанием в конвейерах чата/перевода.
- Улучшены средства санитизации вывода внутри компонентов React UI и событий Server Sent Events (SSE).

---

---

---

## [3.4.7] — 2026-04-03

### Features

- Добавлен узел `Cryptography` в проверки состояния Monitoring и MCP (#798)
- Укреплены разрешения маршрута каталога моделей (`/models`) (#781)

### Bug Fixes

- Исправлены сбои обновления токенов Claude OAuth, не сохраняющие контексты кэша (#937)
- Исправлены ошибки CC-Compatible провайдера, делающие кэшированные модели недоступными (#937)
- Исправлены ошибки исполнителя GitHub, связанные с недопустимыми массивами контекста (#937)
- Исправлены сбои проверки состояния NPM-установленных CLI-инструментов на Windows (#935)
- Исправлено удаление содержимого в процессе перевода из-за недопустимых полей API (#927)
- Исправлена ошибка времени выполнения в Node 25, связанная с выполнением API-ключа (#867)
- Исправлено разрешение модуля MCP в автономном режиме (`ERR_MODULE_NOT_FOUND`) через `esbuild` (#936)
- Исправлено разрешение учетных данных маршрутизации NVIDIA NIM из-за несоответствия псевдонимов (#931)

### Security

- Добавлена защита границ ввода от необработанных инъекций удаленного выполнения кода через `shell: true`.

---

---

---

## [3.4.6] - 2026-04-02

### ✨ New Features

- **feat(docs):** интеграция многостраничной документации в OmniRoute dashboard (#1969)
- **feat(settings):** добавлена настройка лимита тела запроса (#1968)
- **feat(auth):** добавлен стандартный секрет клиента OAuth для Gemini CLI (#1974)
- **feat(models):** раскрытие контекстных окон моделей в /v1/models (#1972)
- **fix(db):** разрешение устаревшего резервного шифрования, вызывающего циклы повторного шифрования (#1941)
- **fix(auth):** исправление санитизации ответов final_answer для помощника Codex (#1965)

- **feat(providers):** Реализована возможность генерации и редактирования изображений для ChatGPT Web, включая генерацию изображений в чате и кэширование (#1606).
- **feat(ui):** Интеграция SVG-логотипа OpenCode Zen/Go API и улучшение взаимодействий копирования API-ключа в буфер обмена (#1607).

- **feat(providers):** Интеграция AgentRouter в качестве нового провайдера, совместимого с OpenAI, с бесплатными кредитами в размере $200 после регистрации (Issue #1572).
- **feat(ui):** Реализация тестирования моделей по запросу в панели управления провайдерами, позволяющая выполнять диагностические проверки с одним токеном без триггера ограничений скорости (Issue #1532).

- **Providers:** Зарегистрированы новые провайдеры генерации изображений, видео и аудио из списка запросов сообщества (#926).
- **Dashboard UI:** Добавлена автономная боковая навигация для новых модулей Memory и Skills (#926).
- **i18n:** Добавлены строки перевода и маппинги макета для 30 языков в пространствах имен Memory и Skills.

### 🐛 Bug Fixes

- **fix(mitm):** Компиляция утилит MITM как NodeNext ESM во время prepublish, копирование сервера MITM CommonJS в автономный артефакт и разрешение путей данных MITM без зависимости от псевдонимов Next.js в пакетированном времени выполнения.
- **fix(build):** Перемещение локального префикса `.tmp/wine32` Wine вне пути сборки Next.js, чтобы артефакты пакетирования Windows Electron не вызывали сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Копирование каталога `wreq-js` в изолированный выходной путь Next.js, чтобы пакетированные Playwright/E2E могли загружать хук инструментации на Linux.
- **fix(api):** Валидация вебсокет-моста Codex Responses и JSON-тела `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую валидацию маршрута `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавление явного типирования для помощников псевдонимов и категорий провайдеров, чтобы строгий `typecheck:noimplicit:core` CI-шлюз прошел.
- **fix(ui):** Сохранение страницы деталей провайдера upstream proxy с меткой "Управляется через настройки Upstream Proxy", когда переводы недоступны.
- **fix(electron):** Укрепление CSP для рабочего стола в производстве путем удаления `unsafe-eval` вне разработки и добавления ограничений объекта, базового URI, действия формы, предка фрейма и рабочего.
- **fix(cli):** Замена интерполированных команд оболочки для установки и привилегированного выполнения команд аргументами `spawn`/`execFile` для установки базы данных, команд Tailscale sudo, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Поддержание устойчивости иконок провайдеров путем использования компонентов `@lobehub/icons` напрямую, а затем локальных резервных копий PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели управления.

- **Resilience:** Предотвращено застревание Circuit Breaker в состоянии OPEN бесконечно путем обработки прямых переходов в состояние CLOSED внутри резервных комбо-путей (#930).
- **Protocol Translation:** Исправлен трансформер потоковой передачи для санитизации блоков ответов на основе ожидаемого _исходного_ протокола, а не _целевого_ протокола провайдера, что исправило сбои моделей Anthropics, обернутых в OpenAI-полезные нагрузки (#929).
- **Providers:** Очистка конечных точек, несовместимых с OpenAI, препятствующих действительным подключениям upstream (#926).
- **Cache Trends:** Исправлена недопустимая несоответствующая карта данных свойств, вызывающая сбои графиков Cache Trends UI, и извлечение избыточных виджетов метрик кэша (#926).

---

---

---

## [3.4.5] - 2026-04-02

### ✨ New Features

- **feat(docs):** интеграция многостраничной документации в панель управления OmniRoute (#1969)
- **feat(settings):** добавление настройки лимита тела запроса (#1968)
- **feat(auth):** добавление значения по умолчанию для секрета OAuth-клиента Gemini CLI (#1974)
- **feat(models):** предоставление контекстных окон моделей.dev в /v1/models (#1972)
- **fix(db):** исправление проблемы с резервным шифрованием, вызывающим циклы повторного шифрования (#1941)
- **fix(auth):** исправление очистки ответа final_answer для помощника Codex (#1965)

- **feat(providers):** Реализация возможностей генерации и редактирования изображений для ChatGPT Web, включая генерацию изображений в чате и кэширование (#1606).
- **feat(ui):** Интеграция SVG-логотипа OpenCode Zen/Go API и улучшение взаимодействий с API-ключами (#1607).

- **feat(providers):** Интеграция AgentRouter в качестве нового провайдера, совместимого с OpenAI, с $200 бесплатных кредитов при регистрации (Issue #1572).
- **feat(ui):** Реализация тестирования моделей по запросу в панели управления провайдерами, позволяющее выполнять диагностические проверки с одним токеном без триггера лимитов скорости (Issue #1532).

- **Интеграция экосистемы CLIProxyAPI:** Добавлен исполнитель `cliproxyapi` с встроенным кэшированием на уровне модуля и маршрутизацией прокси. Введен комплексный сервис Version Manager для автоматической проверки состояния, загрузки бинарных файлов с GitHub, запуска изолированных фоновых процессов и управления жизненным циклом внешних CLI-инструментов напрямую через интерфейс. Включает таблицы БД для конфигурации прокси, чтобы обеспечить автоматическую маршрутизацию внешних запросов OpenAI через локальный слой CLI-инструментов (#914, #915, #916).
- **Поддержка PAT Qoder:** Интегрирована поддержка личных токенов доступа (PAT) напрямую через локальный транспорт `qodercli` вместо устаревших удаленных конфигураций `.cn` (#913).
- **Предварительный просмотр Gemini 3.1 Pro (GitHub):** Добавлена поддержка модели `gemini-3.1-pro-preview` в провайдере GitHub Copilot с сохранением старых псевдонимов маршрутизации (#924).

### 🐛 Bug Fixes

- **fix(mitm):** Компиляция утилит MITM как NodeNext ESM во время prepublish, копирование сервера MITM CommonJS в автономный артефакт и разрешение путей данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Перемещение локального префикса `.tmp/wine32` Wine из пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Копирование каталога `wreq-js` в изолированный выходной каталог Next.js, чтобы упакованные Playwright/E2E могли загружать хук инструментации на Linux.
- **fix(api):** Проверка вебсокета Codex Responses и `/v1/batches` JSON с помощью Zod перед использованием, сохраняя зеленую проверку `request.json()` и возвращая явные 400 ответы для недопустимых тел.
- **fix(providers):** Добавление явного типизирования для помощников псевдонимов и категорий провайдеров, чтобы пройти строку `typecheck:noimplicit:core` CI.
- **fix(ui):** Сохранение страницы деталей провайдера с прокси-сервером с меткой "Управляется через настройки прокси-сервера" при отсутствии переводов.
- **fix(electron):** Укрепление CSP для рабочей среды, удаление `unsafe-eval` за пределами разработки и добавление ограничений для объектов, URI базы, действий формы, предков фрейма и рабочих процессов.
- **fix(cli):** Замена интерполированных путей командной строки для настройки и привилегированного выполнения команд с помощью помощников `spawn`/`execFile` для настройки базы данных, команд Tailscale sudo, редактирования DNS MITM и установки/удаления сертификатов.
- **fix(ui):** Сохранение устойчивости иконок провайдеров с использованием компонентов `@lobehub/icons` напрямую, затем локальных резервных копий PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели управления.

- **Стабильность токенов GitHub Copilot:** Исправлен цикл обновления токенов Copilot, где устаревшие токены не объединялись с БД, и удалены поля `reasoning_text`, которые фатально нарушали преобразование блоков Anthropic для многократных чатов (#923).
- **Матрица глобальных тайм-аутов:** Централизованные и параметризованные тайм-ауты запросов явно из `REQUEST_TIMEOUT_MS`, чтобы предотвратить скрытые (~300s) буферы fetch, которые преждевременно обрывали длинные SSE-потоковые ответы от тяжелых моделей рассуждений (#918).
- **Состояние быстрых туннелей Cloudflare:** Исправлена серьезная несоответствие состояния, где перезапущенные экземпляры OmniRoute ошибочно показывали уничтоженные туннели как активные, и по умолчанию туннелирование cloudflared установлено на `HTTP/2`, чтобы устранить спам журнала буфера приема UDP (#925).
- **Пересмотр i18n (чешский и хинди):** Исправлен код хинди из УСТАРЕВШЕГО `in.json` на канонический `hi.json`, пересмотрены текстовые отображения чешского языка, извлечены `untranslatable-keys.json` для исправления ложных срабатываний валидации CI/CD, и сгенерированы всесторонние `I18N.md` для руководства переводчиков (#912).
- **Восстановление провайдера токенов:** Исправлено Qwen, теряющее конкретные конечные точки `resourceUrl` после автоматических проверок состояния токенов, из-за отсутствия глубоких слияний БД (#917).
- **CC Совместимый UX и потоковая передача:** Унифицированные действия добавления CC/OpenAI/Anthropic вокруг обработки Anthropic UI, принудительное использование SSE для запросов CC-совместимых, возвращающее потоковые или не потоковые ответы на основе запроса клиента, удаление поддержки конфигурации/импорта списка моделей CC в пользу явной ошибки не поддерживаемого списка моделей, и доступные модели CC-совместимые отражают список реестра OAuth Claude Code (#921).

---

```

---

---

## [3.4.4] - 2026-04-02

### 🐛 Исправления ошибок

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать CommonJS сервер MITM в автономный артефакт и разрешать пути данных MITM без использования псевдонимов Next.js в упакованном runtime.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать директорию `wreq-js` в изолированный выходной артефакт Next.js, чтобы упакованные Playwright/E2E могли загрузить хук инструментации на Linux.
- **fix(api):** Валидировать вебсокет-мост Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую валидацию маршрута `request.json()` и возвращая явные 400 ответы для неверных тел.
- **fix(providers):** Добавить явную типизацию для помощников псевдонимов и категорий провайдеров, чтобы строгий CI-шлюз `typecheck:noimplicit:core` прошел.
- **fix(ui):** Сохранить страницу деталей провайдера прокси-сервера с меткой резервного копирования "Managed via Upstream Proxy Settings", когда переводы недоступны.
- **fix(electron):** Усилить CSP для рабочей среды, удалив `unsafe-eval` вне разработки и добавив ограничения для объектов, базового URI, действия формы, предка фрейма и работника.
- **fix(cli):** Заменить пути установки и привилегированных команд, интерполируемых оболочкой, на помощники `spawn`/`execFile` на основе аргументов для настройки базы данных, команд Tailscale sudo, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранить устойчивость иконок провайдеров, используя сначала компоненты `@lobehub/icons`, затем локальные резервные копии PNG/SVG, избегая runtime `@lobehub/ui` в панели управления.

- **Отчет токенов API Responses:** Выпустить `response.completed` с правильными полями `input_tokens`/`output_tokens` для клиентов Codex CLI, исправив отображение использования токенов (#909 — спасибо @christopher-s).
- **Точка контроля WAL SQLite при завершении работы:** Сбросить изменения WAL в основной файл базы данных во время корректного завершения работы/перезапуска, предотвращая потерю данных при остановке контейнера Docker (#905 — спасибо @rdself).
- **Грациозное завершение работы по сигналу:** Изменить маршруты `/api/restart` и `/api/shutdown` с `process.exit(0)` на `process.kill(SIGTERM)`, чтобы обработчик завершения работы выполнялся перед выходом.
- **Период остановки Docker:** Добавить `stop_grace_period: 40s` в файлы Docker Compose и `--stop-timeout 40` в примеры запуска Docker.

### 🛠️ Поддержка

- Закрыто 5 решенных/не-ошибок (#872, #814, #816, #890, #877).
- Обработано 6 проблем с запросами информации (#892, #887, #886, #865, #895, #870).
- Ответ на проблему отслеживания обнаружения CLI (#863) с руководством для участников.

---

---

---

## [3.4.3] - 2026-04-02

### ✨ Новые функции

- **feat(docs):** интегрировать многостраничную документацию в панели OmniRoute (#1969)
- **feat(settings):** добавить настройку лимита тела запроса (#1968)
- **feat(auth):** добавить резервный секрет OAuth клиента Gemini CLI (#1974)
- **feat(models):** выставить контекстные окна моделей.dev в /v1/models (#1972)
- **fix(db):** решить резервное восстановление шифрования, вызывающее циклы повторного шифрования (#1941)
- **fix(auth):** исправить очистку ответов final_answer для помощника Codex (#1965)

- **feat(providers):** Реализовать возможности генерации и редактирования изображений для ChatGPT Web, включая генерацию изображений в чате и кэширование (#1606).
- **feat(ui):** Интегрировать SVG логотипа OpenCode Zen/Go API и улучшить взаимодействия копирования API-ключа в буфер обмена (#1607).

- **feat(providers):** Интегрировать AgentRouter как нового провайдера, совместимого с OpenAI, с $200 бесплатных кредитов при регистрации (Проблема #1572).
- **feat(ui):** Реализовать тестирование моделей по запросу в панели управления провайдерами, позволяющее выполнять диагностические проверки с одним токеном без срабатывания ограничений скорости (Проблема #1532).

- **Память и навыки Antigravity:** Завершено удаленное хранение памяти и внедрение навыков для провайдера Antigravity на уровне прокси-сети.
- **Совместимость Claude Code:** Построен нативно скрытый мост совместимости для Claude Code, передающий инструменты и форматирование чисто.
- **Поиск по веб-сайту MCP:** Добавлен инструмент `omniroute_web_search` с областью `execute:search`.
- **Компоненты кэша:** Реализованы динамические компоненты кэша с использованием TDD.
- **UI и настройка:** Добавлена поддержка пользовательского значка, вкладки внешнего вида, подключение белого этикета к боковой панели и добавлены шаги руководства Windsurf на всех 33 языках.
- **Удержание журналов:** Единое хранение журналов запросов и артефактов нативно.
- **Улучшения моделей:** Добавлена явная `contextLength` для всех моделей opencode-zen.
- **i18n и переводы:** Интегрированы переводы на 33 языках нативно, включая проверку заполнителей CI и обновления китайской документации (#873, #869).

### 🐛 Исправления ошибок

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать CommonJS сервер MITM в автономный артефакт и разрешать пути данных MITM без использования псевдонимов Next.js в упакованном runtime.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать директорию `wreq-js` в изолированный выходной артефакт Next.js, чтобы упакованные Playwright/E2E могли загрузить хук инструментации на Linux.
- **fix(api):** Валидировать вебсокет-мост Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую валидацию маршрута `request.json()` и возвращая явные 400 ответы для неверных тел.
- **fix(providers):** Добавить явную типизацию для помощников псевдонимов и категорий провайдеров, чтобы строгий CI-шлюз `typecheck:noimplicit:core` прошел.
- **fix(ui):** Сохранить страницу деталей провайдера прокси-сервера с меткой резервного копирования "Managed via Upstream Proxy Settings", когда переводы недоступны.
- **fix(electron):** Усилить CSP для рабочей среды, удалив `unsafe-eval` вне разработки и добавив ограничения для объектов, базового URI, действия формы, предка фрейма и работника.
- **fix(cli):** Заменить пути установки и привилегированных команд, интерполируемых оболочкой, на помощники `spawn`/`execFile` на основе аргументов для настройки базы данных, команд Tailscale sudo, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранить устойчивость иконок провайдеров, используя сначала компоненты `@lobehub/icons`, затем локальные резервные копии PNG/SVG, избегая runtime `@lobehub/ui` в панели управления.

- **Сопоставление OAuth Qwen:** Откатить зависимость `id_token` к `access_token` и включить динамическое внедрение конечной точки API `resource_url` для правильного регионального маршрутизации (#900).
- **Движок синхронизации моделей:** Сохранить строгий внутренний идентификатор провайдера в `getCustomModels()` процедурах синхронизации вместо формата псевдонима канала UI, предотвращая неудачи вставки каталога SQLite (#903).
- **Claude Code и Codex:** Стандартизировать пустые ответы без потоковой передачи в формат Anthropic `(empty response)`, чтобы предотвратить сбои прокси CLI (#866).
- **Совместимость CC:** Решено дублирование коллизии конечной точки `/v1` во время конкатенации путей для универсальных шлюзов Claude Code (#904).
- **Панели Antigravity:** Заблокировать модели с неограниченным квотой от ложного регистрации как исчерпанных состояний `100% Usage` в UI использования провайдера (#857).
- **Прокси-сервер изображений Claude:** Исправлено отсутствие прокси-сервера блоков изображений для моделей Claude (#898).
- **Маршрутизация Gemini CLI:** Решено блокировки авторизации 403 и накопление контента путем обновления идентификатора проекта через `loadCodeAssist` (#868).
- **Стабильность Antigravity:** Исправлены списки доступа к моделям, применены блокировки 404, исправлены каскады 429, блокирующие стандартные подключения, и ограничен вывод токенов `gemini-3.1-pro` (#885).
- **Каденция синхронизации провайдера:** Восстановлена каденция синхронизации лимитов провайдера через внутренний планировщик (#888).
- **Оптимизация панели управления:** Решено зависание UI `/dashboard/limits` при обработке 70+ аккаунтов через параллелизацию чанков (#784).
- **Укрепление SSRF:** Применено строгое фильтрование диапазонов IP SSRF и заблокирован интерфейс обратной связи `::1`.
- **MIME-типы:** Стандартизированы `mime_type` в snake_case для соответствия спецификациям API Gemini.
- **Стабилизация CI:** Исправлены неудачные селекторы Playwright для аналитики/настроек и утверждения запросов, чтобы запуски E2E GitHub Actions проходили надежно на локализованных UI и переключаемых элементах управления.
- **Детерминированные тесты:** Удалены дата-чувствительные фикстуры квоты из тестов использования Copilot и выровнены тесты идемпотентности/каталога моделей с поведением объединенного runtime.
- **Укрепление типов MCP:** Удалены явные регрессии `any` с нулевым бюджетом из пути регистрации инструментов сервера MCP.
- **Движок синхронизации моделей:** Обойти разрушительные перезаписи `replace`, когда авто-синхронизация провайдера дает пустой список моделей, сохраняя стабильность для динамических каталогов (#899).

### 🛠️ Поддержка

- **Журналирование конвейера:** Улучшено журналирование артефактов конвейера и применены ограничения удержания (#880).
- **Переработка AGENTS.md:** Сокращено с 297→153 строк. Добавлены руководства по сборке/тестированию/стилю, рабочие процессы кода (Prettier, TypeScript, ESLint) и удалены избыточные таблицы (#882).
- **Интеграция ветки релиза:** Согласованы активные ветки функций в `release/v3.4.2` поверх текущего `main` и проверены ветка с помощью линтера, модульных тестов, покрытия, сборки и E2E-режима CI.
- **Тестирование:** Добавлена конфигурация vitest для тестирования компонентов и спецификаций Playwright для переключателей настроек.
- **Обновления документации:** Расширены корневые readme, переведены китайские документы нативно и очищены устаревшие файлы.

---

---

## [3.4.1] - 2026-03-31

> [!WARNING]
> **BREAKING CHANGE: request logging, retention, and logging environment variables have been redesigned.**
> On the first startup after upgrading, OmniRoute archives legacy request logs from `DATA_DIR/logs/`, legacy `DATA_DIR/call_logs/`, and `DATA_DIR/log.txt` into `DATA_DIR/log_archives/*.zip`, then removes the deprecated layout and switches to the new unified artifact format under `DATA_DIR/call_logs/`.

### ✨ New Features

- **feat(docs):** интегрировать многостраничную документацию в панель управления OmniRoute (#1969)
- **feat(settings):** добавить настройку ограничения размера тела запроса (#1968)
- **feat(auth):** добавить стандартный секрет клиента OAuth для Gemini CLI (#1974)
- **feat(models):** экспонировать контекстные окна моделей.dev в /v1/models (#1972)
- **fix(db):** решить проблему с резервным шифрованием, вызывающим циклы перешифровки (#1941)
- **fix(auth):** исправить очистку ответов final_answer для помощника Codex (#1965)

- **feat(providers):** Реализовать возможности генерации и редактирования изображений для ChatGPT Web, включая генерацию изображений в чате и кэширование (#1606).
- **feat(ui):** Интегрировать SVG-логотип инструмента OpenCode Zen/Go API и улучшить взаимодействие копирования API-ключа в буфер обмена (#1607).

- **feat(providers):** Интегрировать AgentRouter как нового провайдера, совместимого с OpenAI, с $200 бесплатных кредитов при регистрации (Issue #1572).
- **feat(ui):** Реализовать тестирование моделей по запросу в панели управления провайдерами, позволяющее выполнять диагностические проверки с одним токеном без триггера ограничений скорости (Issue #1532).

- **.ENV Migration Utility:** Включен `scripts/migrate-env.mjs` для плавного переноса конфигураций `<v3.3` в `v3.4.x` строгие ограничения проверки безопасности (FASE-01), исправляющий сбои запуска из-за коротких экземпляров `JWT_SECRET`.
- **Kiro AI Cache Optimization:** Реализована детерминированная генерация `conversationId` (uuidv5) для корректного кэширования промптов AWS Builder ID (#814).
- **Dashboard UI Restoration & Consolidation:** Исправлена логика боковой панели, исключающая раздел Debug, и устранены предупреждения маршрутизации Nextjs, переместив отдельные страницы `/dashboard/mcp` и `/dashboard/a2a` в встроенные компоненты UI прокси-конечной точки.
- **Unified Request Log Artifacts:** Журналы запросов теперь хранят одну строку индекса SQLite и один артефакт JSON на запрос в `DATA_DIR/call_logs/`, с возможностью встраивания конвейера при необходимости.
- **Language:** Улучшена китайская локализация (#855)
- **Opencode-Zen Models:** Добавлены 4 бесплатные модели в реестр opencode-zen (#854)
- **Tests:** Добавлены модульные и E2E тесты для переключателей настроек и исправлений ошибок (#850)

### 🐛 Bug Fixes

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать сервер MITM CommonJS в автономный артефакт, и разрешить пути данных MITM без зависимости от псевдонимов Next.js в пакетном времени выполнения.
- **fix(build):** Переместить локальный префикс `.tmp/wine32` Wine вне пути сборки Next.js, чтобы артефакты упаковки Windows Electron не вызывали сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать каталог времени выполнения `wreq-js` в изолированный выходной артефакт Next.js, чтобы пакетные запуски Playwright/E2E могли загрузить хук инструментации на Linux.
- **fix(api):** Проверять вебсокет-мост ответов Codex и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленый валидатор маршрута `request.json()` и возвращая явные 400 ответы для недопустимых тел.
- **fix(providers):** Добавить явное типизирование помощникам псевдонимов и категорий провайдеров, чтобы строгий `typecheck:noimplicit:core` CI-шлюз прошел.
- **fix(ui):** Сохранить страницу деталей провайдера прокси-сервера с меткой "Управляется через настройки прокси-сервера" при отсутствии переводов.
- **fix(electron):** Укрепить CSP для рабочего стола, удалив `unsafe-eval` вне разработки и добавив ограничения объекта, базового URI, действия формы, предка фрейма и рабочего процесса.
- **fix(cli):** Заменить пути установки и привилегированных команд, интерполируемых оболочкой, на помощников `spawn`/`execFile` на основе аргументов для настройки базы данных, команд Tailscale sudo, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранить иконки провайдеров устойчивыми, используя сначала компоненты `@lobehub/icons`, затем локальные резервные копии PNG/SVG, избегая `@lobehub/ui` в панели управления.

- **429 Quota Parsing:** Разобрал длинные времена сброса квот из тел ошибок, чтобы соблюдать правильные паузы и предотвратить бан аккаунтов из-за ограничения скорости (#859)
- **Prompt Caching:** Сохранил заголовки `cache_control` клиента для всех провайдеров протокола Claude (например, Minimax, GLM и Bailian), корректно распознавая поддержку кэширования (#856)
- **Model Sync Logs:** Уменьшил спам в журналах, записывая `sync-models` только при фактическом изменении списка каналом (#853)
- **Provider Quota & Token Parsing:** Переключил ограничения Antigravity на использование `retrieveUserQuota` нативно и правильно отобразил полезные нагрузки обновления токенов Claude на формы URL-кодировки (#862)
- **Rate-Limiting Stability:** Унифицировал архитектуру разбора Retry-After для 429, ограничив перерывы, вызванные провайдерами, до 24 часов максимум (#862)
- **Dashboard Limit Rendering:** Перепроектировал отображение квот `/dashboard/limits`, чтобы отображать их сразу внутри чанков, исправив серьезную задержку загрузки UI на аккаунтах с более 70 активными подключениями (#784)
- **QWEN OAuth Authorization:** Отобразил `id_token` OIDC как основной токен API Bearer для запросов Dashscope, исправив немедленные ошибки 401 Unauthorized после подключения аккаунтов или обновления токенов (#864)
- **ZAI API Stability:** Укрепил компилятор Server-Sent Events, чтобы он корректно обрабатывал пустые строки при потоковой передаче математически нулевого содержимого провайдерами DeepSeek во время фаз рассуждений (#871)
- **Claude Code/Codex Translations:** Защитил преобразования полезных нагрузок без потоковой передачи от пустых ответов от инструментов верхнего уровня Codex, избегая катастрофических TypeErrors (#866)
- **NVIDIA NIM Rendering:** Условно удалил идентичные префиксы провайдеров, динамически добавляемые аудиомоделями, устранив дублирующиеся структуры `nim/nim`, которые вызывали 404 в Media Playground (#872)

### ⚠️ Breaking Changes

- **Request Log Layout:** Удалены старые сессии журнала запросов `DATA_DIR/logs/` и файл `DATA_DIR/log.txt`. Новые запросы записываются как единые артефакты JSON в `DATA_DIR/call_logs/YYYY-MM-DD/`.
- **Logging Environment Variables:** Заменены `LOG_*`, `ENABLE_REQUEST_LOGS`, `CALL_LOGS_MAX`, `CALL_LOG_PAYLOAD_MODE`, и `PROXY_LOG_MAX_ENTRIES` на новую модель конфигурации `APP_LOG_*` и `CALL_LOG_RETENTION_DAYS`.
- **Pipeline Toggle Setting:** Заменена устаревшая настройка `detailed_logs_enabled` на `call_log_pipeline_enabled`. Новые детали конвейера встроены в артефакт запроса вместо хранения как отдельные записи `request_detail_logs`.

### 🛠️ Maintenance

- **Legacy Request Log Upgrade Backup:** Обновления теперь архивируют старые `data/logs/`, устаревшие `data/call_logs/`, и `data/log.txt` в `DATA_DIR/log_archives/*.zip` перед удалением устаревшей структуры.
- **Streaming Usage Persistence:** Потоковые запросы теперь записывают одну строку `usage_history` при завершении вместо эмиссии дублирующей строки использования в процессе с пустыми метаданными состояния.
- **Logging Follow-up Cleanup:** Журналы конвейера больше не захватывают `SOURCE REQUEST`, записи артефактов запросов теперь соблюдают `CALL_LOG_MAX_ENTRIES`, и архивы журналов приложений теперь соблюдают `APP_LOG_MAX_FILES`.
---

---

---

## [3.4.0] - 2026-03-31

### 🚀 Features

- **Аналитика использования подписки:** Добавлено отслеживание временных рядов снимков квот, вкладки Provider Utilization и Combo Health с визуализациями recharts и соответствующие API-эндпоинты (#847)
- **Управление резервным копированием SQLite:** Новый флаг окружения `OMNIROUTE_DISABLE_AUTO_BACKUP` для отключения автоматического резервного копирования SQLite (#846)
- **Обновление реестра моделей:** Внедрён `gpt-5.4-mini` в массив моделей провайдера Codex (#756)
- **Отслеживание лимитов провайдера:** Отслеживание и отображение времени последнего обновления лимитов провайдера для каждого аккаунта (#843)

### 🐛 Bug Fixes

- **fix(mitm):** Компиляция утилит MITM как NodeNext ESM во время prepublish, копирование сервера MITM CommonJS в автономный артефакт и разрешение путей данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Перемещение локального префикса `.tmp/wine32` Wine из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборок Node 24.
- **fix(build):** Копирование каталога `wreq-js` в изолированный выходной каталог Next.js, чтобы упакованные Playwright/E2E могли загружать хук инструментации на Linux.
- **fix(api):** Валидация вебсокет-моста Codex Responses и JSON-полезной нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленый маршрут валидации `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавление явного типизирования для помощников псевдонимов и категорий провайдера, чтобы строгий шлюз `typecheck:noimplicit:core` CI прошел.
- **fix(ui):** Сохранение страницы деталей провайдера через прокси с меткой "Управляется через настройки прокси-сервера" при отсутствии переводов.
- **fix(electron):** Укрепление CSP для рабочей среды путем удаления `unsafe-eval` за пределами разработки и добавления ограничений объекта, URI базы, действия формы, предка фрейма и рабочего процесса.
- **fix(cli):** Замена интерполированных путей командной оболочки для установки и привилегированного выполнения команд аргументами `spawn`/`execFile` для настройки базы данных, команд Tailscale sudo, редактирования DNS MITM и установки/удаления сертификатов.
- **fix(ui):** Поддержка иконок провайдеров с использованием прямых компонентов `@lobehub/icons`, затем локальных PNG/SVG резервных копий, избегая времени выполнения `@lobehub/ui` в панели инструментов.

- **Маршрутизация авторизации Qwen:** Перенаправление завершений OAuth Qwen с API DashScope на Web Inference API (`chat.qwen.ai`), решение проблем с авторизацией (#844, #807, #832)
- **Цикл автоматического повтора Qwen:** Добавлено целевое управление задержкой 429 Quota Exceeded внутри `chatCore` для защиты от всплесков запросов
- **Резервный вариант OAuth Codex:** Блокировка всплывающих окон браузера больше не ловит пользователя; автоматически переключается на ручной ввод URL (#808)
- **Обновление токена Claude:** Строгие границы `application/json` Anthropic теперь соблюдаются во время генерации токенов вместо закодированных URL (#836)
- **Схема сообщений Codex:** Удалены строгие инъекции `messages` из нативных запросов передачи, чтобы избежать структурных отклонений от апстрима ChatGPT (#806)
- **Ограничение размера обнаружения CLI:** Безопасное увеличение верхней границы сканирования двоичных файлов Node с 100 МБ до 350 МБ, позволяя тяжелым автономным инструментам, таким как Claude Code (229 МБ) и OpenCode (153 МБ), быть правильно обнаруженными средой выполнения VPS (#809)
- **Среда выполнения CLI:** Восстановлена возможность для конфигураций CLI учитывать переопределенные пути пользователя (`CLI_{PROVIDER}_BIN`), обходя строгие правила обнаружения путей
- **Конфликты заголовков Nvidia:** Удалены свойства `prompt_cache_key` из заголовков апстрима при вызове провайдеров, не связанных с Anthropic (#848)
- **Переключатель быстрого уровня Codex:** Восстановлен контраст переключателя уровня службы Codex в светлом режиме (#842)
- **Инфраструктура тестирования:** Обновление теста `t28-model-catalog-updates`, который неверно ожидал устаревшего конечного пункта DashScope для нативного реестра Qwen

---

---

## [3.3.9] - 2026-03-31

### 🐛 Исправления ошибок

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать сервер CommonJS MITM в автономный артефакт и разрешать пути данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать каталог нативного времени выполнения `wreq-js` в изолированный выходной каталог Next.js, чтобы упакованные запуски Playwright/E2E могли загрузить хук инструментации на Linux.
- **fix(api):** Проверять вебсокет-мост Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую проверку маршрута `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавить явное типизирование помощников псевдонимов и категорий поставщиков, чтобы строгий шлюз CI `typecheck:noimplicit:core` прошел.
- **fix(ui):** Сохранить страницу деталей поставщика прокси-сервера вверх по потоку с меткой резервной копии "Управляется через настройки прокси-сервера вверх по потоку", когда переводы недоступны.
- **fix(electron):** Усилить CSP рабочего стола в производстве, удалив `unsafe-eval` вне разработки и добавив ограничения объекта, базового URI, действия формы, предка фрейма и работника.
- **fix(cli):** Заменить пути установки и выполнения привилегированных команд, интерполированные оболочкой, помощниками на основе аргументов `spawn`/`execFile` для настройки базы данных, команд sudo Tailscale, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранить значки поставщиков устойчивыми, используя компоненты `@lobehub/icons` напрямую, а затем резервные копии PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели инструментов.

- **Поворот пользовательского поставщика:** Интегрирован `getRotatingApiKey` внутри DefaultExecutor, обеспечивая правильное срабатывание поворота `extraApiKeys` для пользовательских и совместимых поставщиков вверх по потоку (#815)

---

---

---

## [3.3.8] - 2026-03-30

### 🚀 Новые возможности

- **Фильтрация API моделей:** Конечная точка `/v1/models` теперь динамически фильтрует свой список на основе разрешений, связанных с `Authorization: Bearer <token>`, когда включен ограниченный доступ (#781)
- **Интеграция Qoder:** Родная интеграция для Qoder AI, заменяющая устаревшую платформу сопоставлений iFlow (#660)
- **Отслеживание кэша запросов:** Добавлены возможности отслеживания и визуализация на фронтенде (карточка статистики) для семантического и кэширования запросов в пользовательском интерфейсе панели инструментов

### 🐛 Исправления ошибок

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать сервер CommonJS MITM в автономный артефакт и разрешать пути данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать каталог нативного времени выполнения `wreq-js` в изолированный выходной каталог Next.js, чтобы упакованные запуски Playwright/E2E могли загрузить хук инструментации на Linux.
- **fix(api):** Проверять вебсокет-мост Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую проверку маршрута `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавить явное типизирование помощников псевдонимов и категорий поставщиков, чтобы строгий шлюз CI `typecheck:noimplicit:core` прошел.
- **fix(ui):** Сохранить страницу деталей поставщика прокси-сервера вверх по потоку с меткой резервной копии "Управляется через настройки прокси-сервера вверх по потоку", когда переводы недоступны.
- **fix(electron):** Усилить CSP рабочего стола в производстве, удалив `unsafe-eval` вне разработки и добавив ограничения объекта, базового URI, действия формы, предка фрейма и работника.
- **fix(cli):** Заменить пути установки и выполнения привилегированных команд, интерполированные оболочкой, помощниками на основе аргументов `spawn`/`execFile` для настройки базы данных, команд sudo Tailscale, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранить значки поставщиков устойчивыми, используя компоненты `@lobehub/icons` напрямую, а затем резервные копии PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели инструментов.

- **Размер панели инструментов кэша:** Улучшена компоновка пользовательского интерфейса и размеры заголовков контекста для расширенных страниц кэша (#835)
- **Видимость боковой панели отладки:** Исправлена проблема, из-за которой переключатель отладки не мог правильно показывать/скрывать детали отладки в боковой панели (#834)
- **Префикс модели Gemini:** Изменен резервный префикс для правильного маршрутизации через `gemini-cli/` вместо `gc/` для соблюдения спецификаций вверх по потоку (#831)
- **Синхронизация OpenRouter:** Улучшена совместимость синхронизации для автоматического правильного ввода каталога доступных моделей из OpenRouter (#830)
- **Потоковые полезные нагрузки:** Пересериализация полей рассуждений разрешает конфликтные пути псевдонимов при потоковой передаче на устройства на краю сети

---

---

## [3.3.7] - 2026-03-30

### 🐛 Исправления ошибок

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать сервер CommonJS MITM в автономный артефакт и разрешать пути данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать каталог нативного времени выполнения `wreq-js` в изолированный выходной каталог Next.js standalone, чтобы упакованные запуски Playwright/E2E могли загружать инструментальный хук на Linux.
- **fix(api):** Проверять вебсокет-мост Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую проверку маршрута `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавить явную типизацию для помощников псевдонимов и категорий поставщиков, чтобы строгий шлюз CI `typecheck:noimplicit:core` прошел.
- **fix(ui):** Сохранить страницу деталей поставщика прокси-сервера вверху, пометив ее резервной поверхностью управления "Managed via Upstream Proxy Settings", когда переводы недоступны.
- **fix(electron):** Усилить CSP рабочего стола в производстве, удалив `unsafe-eval` вне разработки и добавив ограничения объекта, базового URI, действия формы, предка фрейма и рабочего процесса.
- **fix(cli):** Заменить пути установки и выполнения привилегированных команд с интерполяцией оболочки на помощники `spawn`/`execFile` на основе аргументов для настройки базы данных, команд sudo Tailscale, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранить значки поставщиков устойчивыми, используя сначала компоненты `@lobehub/icons`, затем резервные PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели инструментов.

- **Конфигурация OpenCode:** Переструктурирован сгенерированный `opencode.json` для использования схемы `@ai-sdk/openai-compatible` на основе записей с `options` и `models` в виде объектов карт вместо плоских массивов, исправляя неудачи проверки конфигурации (#816)
- **Отсутствующие ключи i18n:** Добавлены отсутствующие ключи перевода `cloudflaredUrlNotice` во всех 30 языковых файлах для предотвращения ошибок консоли `MISSING_MESSAGE` на странице Endpoint (#823)

---

---

---

## [3.3.6] - 2026-03-30

### 🐛 Исправления ошибок

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать сервер CommonJS MITM в автономный артефакт и разрешать пути данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать каталог нативного времени выполнения `wreq-js` в изолированный выходной каталог Next.js standalone, чтобы упакованные запуски Playwright/E2E могли загружать инструментальный хук на Linux.
- **fix(api):** Проверять вебсокет-мост Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую проверку маршрута `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавить явную типизацию для помощников псевдонимов и категорий поставщиков, чтобы строгий шлюз CI `typecheck:noimplicit:core` прошел.
- **fix(ui):** Сохранить страницу деталей поставщика прокси-сервера вверху, пометив ее резервной поверхностью управления "Managed via Upstream Proxy Settings", когда переводы недоступны.
- **fix(electron):** Усилить CSP рабочего стола в производстве, удалив `unsafe-eval` вне разработки и добавив ограничения объекта, базового URI, действия формы, предка фрейма и рабочего процесса.
- **fix(cli):** Заменить пути установки и выполнения привилегированных команд с интерполяцией оболочки на помощники `spawn`/`execFile` на основе аргументов для настройки базы данных, команд sudo Tailscale, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранить значки поставщиков устойчивыми, используя сначала компоненты `@lobehub/icons`, затем резервные PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели инструментов.

- **Учет токенов:** Включены токены кэша запросов безопасно в расчеты входных данных исторического использования для правильного списания квот (PR #822)
- **Пробные тесты комбо:** Исправлены ложные отрицательные результаты логики тестирования комбо, разрешены парсинг для ответов только с логикой и включена массовая параллелизация через Promise.all (PR #828)
- **Быстрые туннели Docker:** Встроены необходимые сертификаты ca в базовый контейнер времени выполнения для разрешения неудач запуска Cloudflared TLS и поверхностные ошибки сети stdout, заменяющие общие коды выхода (PR #829)

---

---

---

## [3.3.5] - 2026-03-30

### ✨ New Features

- **feat(docs):** интеграция многостраничной документации в панель управления OmniRoute (#1969)
- **feat(settings):** добавление настройки лимита тела запроса (#1968)
- **feat(auth):** добавление значения по умолчанию для секретного ключа OAuth-клиента Gemini CLI (#1974)
- **feat(models):** предоставление контекстных окон моделей.dev в /v1/models (#1972)
- **fix(db):** устранение проблемы с резервным шифрованием, вызывающим циклы повторного шифрования (#1941)
- **fix(auth):** исправление очистки ответа final_answer для помощника Codex (#1965)

- **feat(providers):** Реализация возможностей генерации и редактирования изображений для ChatGPT Web, включая генерацию изображений в чате и кэширование (#1606).
- **feat(ui):** Интеграция логотипа SVG и улучшение взаимодействий с API-ключами для OpenCode Zen/Go (#1607).

- **feat(providers):** Интеграция AgentRouter в качестве нового провайдера, совместимого с OpenAI, с бесплатными кредитами в размере $200 при регистрации (Issue #1572).
- **feat(ui):** Реализация тестирования моделей по запросу в панели управления провайдерами, позволяющее выполнять диагностические проверки с одним токеном без триггера лимитов скорости (Issue #1532).

- **Отслеживание квоты Gemini:** Добавлено отслеживание квоты Gemini CLI в реальном времени через API `retrieveUserQuota` (PR #825)
- **Панель кэша:** Улучшена панель кэша для отображения метрик кэша запросов, 24-часовой динамики и оценки экономии затрат (PR #824)

### 🐛 Bug Fixes

- **fix(mitm):** Компиляция утилит MITM как NodeNext ESM во время prepublish, копирование сервера MITM CommonJS в автономный артефакт и разрешение путей данных MITM без зависимости от псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Перемещение локального префикса `.tmp/wine32` Wine из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Копирование каталога `wreq-js` в изолированный выходной каталог Next.js, чтобы упакованные Playwright/E2E могли загружать хук инструментации на Linux.
- **fix(api):** Валидация вебсокет-моста Codex Responses и JSON-полезных нагрузок `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую валидацию маршрута `request.json()` и возвращая явные 400-ответы для недопустимых тел.
- **fix(providers):** Добавление явного типизирования для помощников псевдонимов и категорий провайдеров, чтобы пройти шлюз CI `typecheck:noimplicit:core`.
- **fix(ui):** Сохранение страницы деталей провайдера через прокси с меткой "Управляется через настройки прокси-сервера" при отсутствии переводов.
- **fix(electron):** Укрепление CSP для рабочей среды путем удаления `unsafe-eval` за пределами разработки и добавления ограничений для объектов, базового URI, действий формы, предков фрейма и рабочих процессов.
- **fix(cli):** Замена интерполированных команд установки и привилегированных путей аргументами для помощников `spawn`/`execFile` для установки базы данных, команд Tailscale sudo, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранение устойчивости иконок провайдеров с использованием компонентов `@lobehub/icons` напрямую, затем резервных PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели управления.

- **Пользовательский опыт:** Удалены навязчивые циклы автоматического открытия модальных окон OAuth на пустых страницах деталей провайдера (PR #820)
- **Обновления зависимостей:** Обновлены и зафиксированы зависимости для деревьев разработки и производства, включая Next.js 16.2.1, Recharts и TailwindCSS 4.2.2 (PR #826, #827)

---
---

---

---

## [3.3.4] - 2026-03-30

### ✨ New Features

- **feat(docs):** интегрировать многостраничную документацию в панель управления OmniRoute (#1969)
- **feat(settings):** добавить настройку лимита тела запроса (#1968)
- **feat(auth):** добавить стандартный секрет OAuth-клиента Gemini CLI (#1974)
- **feat(models):** предоставить контекстные окна моделей.dev в /v1/models (#1972)
- **fix(db):** устранить проблему с резервным шифрованием, вызывающую циклы повторного шифрования (#1941)
- **fix(auth):** исправить очистку ответов final_answer для помощника Codex (#1965)

- **feat(providers):** Реализовать возможности генерации и редактирования изображений для ChatGPT Web, включая генерацию изображений в чате и кэширование (#1606).
- **feat(ui):** Интегрировать логотип SVG инструмента OpenCode Zen/Go API и улучшить взаимодействие с буфером обмена для копирования API-ключей (#1607).

- **feat(providers):** Интегрировать AgentRouter в качестве нового провайдера, совместимого с OpenAI, с $200 бесплатных кредитов при регистрации (Issue #1572).
- **feat(ui):** Реализовать тестирование по запросу для каждой модели в панели управления провайдерами, позволяющее выполнять диагностические проверки с одним токеном без срабатывания ограничений скорости (Issue #1532).

- **A2A Workflows:** Добавлен детерминированный оркестратор FSM для многошаговых рабочих процессов агентов.
- **Graceful Degradation:** Добавлен новый многослойный фреймворк отказов для сохранения основной функциональности при частичных сбоях системы.
- **Config Audit:** Добавлен аудитный след с детектированием различий для отслеживания изменений и возможности отката конфигурации.
- **Provider Health:** Добавлено отслеживание срока действия провайдеров с предупреждениями в интерфейсе для истекающих API-ключей.
- **Adaptive Routing:** Добавлен адаптивный детектор объема и сложности для динамического переопределения стратегий маршрутизации на основе нагрузки.
- **Provider Diversity:** Реализовано оценка разнообразия провайдеров через энтропию Шеннона для улучшения распределения нагрузки.
- **Auto-Disable Bounds:** Добавлен переключатель Auto-Disable Banned Accounts в панели управления устойчивостью.

### 🐛 Bug Fixes

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать сервер MITM CommonJS в автономный артефакт и устранить пути данных MITM без зависимости от псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не вызывали сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать каталог нативного времени выполнения `wreq-js` в изолированный выходной каталог Next.js standalone, чтобы упакованные Playwright/E2E могли загружать хук инструментации на Linux.
- **fix(api):** Проверять мост websocket Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую проверку `request.json()` маршрута и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавить явное типизирование помощникам псевдонимов и категорий провайдеров, чтобы пройти проверку `typecheck:noimplicit:core` в CI.
- **fix(ui):** Сохранять страницу деталей провайдера прокси-сервера с меткой "Управляется через настройки прокси-сервера" при отсутствии переводов.
- **fix(electron):** Усилить CSP для рабочего стола в производстве, удалив `unsafe-eval` вне разработки и добавив ограничения объекта, URI базы, действия формы, предка фрейма и рабочего.
- **fix(cli):** Заменить пути установки и выполнения команд с интерполяцией оболочки на помощники `spawn`/`execFile` на основе аргументов для настройки базы данных, команд Tailscale sudo, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранять устойчивость иконок провайдеров, используя сначала компоненты `@lobehub/icons`, затем локальные резервные копии PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели управления.

- **Codex & Claude Compatibility:** Исправлены резервные варианты интерфейса, исправлены проблемы интеграции Codex без потоковой передачи и определение времени выполнения CLI на Windows.
- **Release Automation:** Расширены разрешения, необходимые для сборки приложения Electron в GitHub Actions.
- **Cloudflare Runtime:** Исправлены правильные коды выхода изолированного времени выполнения для компонентов туннеля Cloudflared.

### 🧪 Tests

- **Test Suite Updates:** Расширение покрытия тестами для детекторов объема, разнообразия провайдеров, аудита конфигурации и FSM.

---

---

## [3.3.3] - 2026-03-29

### 🐛 Исправления ошибок

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать сервер CommonJS MITM в автономный артефакт и разрешать пути данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать каталог `wreq-js` в изолированный выходной каталог Next.js, чтобы упакованные запуски Playwright/E2E могли загрузить хук инструментации на Linux.
- **fix(api):** Проверять веб-сокетный мост Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую проверку маршрута `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавить явную типизацию для помощников псевдонимов и категорий поставщиков, чтобы строгий шлюз `typecheck:noimplicit:core` CI прошел.
- **fix(ui):** Сохранить страницу сведений о поставщике прокси-сервера вверх по цепочке с меткой резервного копирования "Управляется через настройки прокси-сервера вверх по цепочке", когда переводы недоступны.
- **fix(electron):** Усилить CSP для рабочей среды, удалив `unsafe-eval` вне разработки и добавив ограничения для объектов, базового URI, действия формы, предка фрейма и рабочего процесса.
- **fix(cli):** Заменить пути установки и выполнения привилегированных команд с интерполяцией оболочки на помощники `spawn`/`execFile` на основе аргументов для настройки базы данных, команд sudo Tailscale, редактирования DNS MITM и установки/удаления сертификатов.
- **fix(ui):** Сделать значки поставщиков устойчивыми, используя сначала компоненты `@lobehub/icons`, затем локальные резервные копии PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели инструментов.

- **Надежность CI/CD:** Исправлены GitHub Actions до стабильных версий зависимостей (`actions/checkout@v4`, `actions/upload-artifact@v4`) для предотвращения неожиданных устареваний сред сборки.
- **Резервные изображения:** Заменены произвольные цепочки резервных копий в `ProviderIcon.tsx` на явную проверку активов, чтобы предотвратить загрузку компонентов `<Image>` для файлов, которые не существуют, устраняя ошибки `404` в журналах консоли панели инструментов (#745).
- **Обновление администратора:** Динамическое обнаружение установки из источника для обновления панели инструментов. Безопасно отключает кнопку `Update Now`, когда OmniRoute собирается локально, а не через npm, предлагая `git pull` (#743).
- **Ошибка ERESOLVE:** Внедрены переопределения `package.json` для `react`/`react-dom` и включена `--legacy-peer-deps` внутри внутренних скриптов автоматического обновления для разрешения конфликтов дерева зависимостей, нарушающих `@lobehub/ui`.

---

---

---

## [3.3.2] - 2026-03-29

### ✨ Новые функции

- **feat(docs):** интеграция многостраничной документации в панели инструментов OmniRoute (#1969)
- **feat(settings):** добавлено ограничение на размер тела запроса (#1968)
- **feat(auth):** добавлен секрет клиента OAuth Gemini CLI по умолчанию (#1974)
- **feat(models):** открытые окна контекста models.dev в /v1/models (#1972)
- **fix(db):** исправлена резервная шифровка, вызывающая циклы повторной шифровки (#1941)
- **fix(auth):** исправлена очистка ответа final_answer ассистента Codex (#1965)

- **feat(providers):** Реализована возможность генерации и редактирования изображений для ChatGPT Web, включая генерацию изображений в чате и кэширование (#1606).
- **feat(ui):** Интеграция SVG логотипа OpenCode Zen/Go API и улучшение взаимодействий копирования API-ключа в буфер обмена (#1607).

- **feat(providers):** Интеграция AgentRouter в качестве нового поставщика, совместимого с OpenAI, с $200 бесплатных кредитов при регистрации (Issue #1572).
- **feat(ui):** Реализована проверка по запросу для каждой модели в панели инструментов поставщика, позволяющая выполнять диагностические проверки с одним токеном без срабатывания ограничений скорости (Issue #1532).

- **Cloudflare Tunnels:** Интеграция Cloudflare Quick Tunnel с элементами управления в панели инструментов (PR #772).
- **Diagnostics:** Обход семантического кэша для комбинированных тестов в реальном времени (PR #773).

### 🐛 Исправления ошибок

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать сервер CommonJS MITM в автономный артефакт и разрешать пути данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать каталог `wreq-js` в изолированный выходной каталог Next.js, чтобы упакованные запуски Playwright/E2E могли загрузить хук инструментации на Linux.
- **fix(api):** Проверять веб-сокетный мост Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую проверку маршрута `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавить явную типизацию для помощников псевдонимов и категорий поставщиков, чтобы строгий шлюз `typecheck:noimplicit:core` CI прошел.
- **fix(ui):** Сохранить страницу сведений о поставщике прокси-сервера вверх по цепочке с меткой резервного копирования "Управляется через настройки прокси-сервера вверх по цепочке", когда переводы недоступны.
- **fix(electron):** Усилить CSP для рабочей среды, удалив `unsafe-eval` вне разработки и добавив ограничения для объектов, базового URI, действия формы, предка фрейма и рабочего процесса.
- **fix(cli):** Заменить пути установки и выполнения привилегированных команд с интерполяцией оболочки на помощники `spawn`/`execFile` на основе аргументов для настройки базы данных, команд sudo Tailscale, редактирования DNS MITM и установки/удаления сертификатов.
- **fix(ui):** Сделать значки поставщиков устойчивыми, используя сначала компоненты `@lobehub/icons`, затем локальные резервные копии PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели инструментов.

- **Streaming Stability:** Применить `FETCH_TIMEOUT_MS` к начальному вызову `fetch()` потоковых запросов, чтобы предотвратить 300-секундный тайм-аут TCP Node.js, вызывающий скрытые сбои задач (#769).
- **i18n:** Добавлены отсутствующие записи `windsurf` и `copilot` в `toolDescriptions` для всех 33 языковых файлов (#748).
- **GLM Coding Audit:** Завершена проверка поставщика, исправлены уязвимости ReDoS, размеры окон контекста (128k/16k) и синхронизация реестра моделей (PR #778).

---

---

## [3.3.1] - 2026-03-29

### 🐛 Исправления ошибок

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать сервер CommonJS MITM в автономный артефакт и разрешать пути данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборок Node 24.
- **fix(build):** Скопировать каталог нативного времени выполнения `wreq-js` в изолированный выходной каталог Next.js, чтобы упакованные запуски Playwright/E2E могли загрузить хук инструментации на Linux.
- **fix(api):** Проверять вебсокет-мост Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленый валидатор маршрута `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавить явное типизирование помощников псевдонимов и категорий поставщиков, чтобы строгий шлюз CI `typecheck:noimplicit:core` прошел.
- **fix(ui):** Сохранить страницу деталей поставщика прокси-сервера вверху, пометив ее резервной поверхностью управления "Управляется через настройки прокси-сервера вверху", когда переводы недоступны.
- **fix(electron):** Усилить CSP рабочего стола в производстве, удалив `unsafe-eval` вне разработки и добавив ограничения объекта, базового URI, действия формы, предка фрейма и рабочего.
- **fix(cli):** Заменить пути установки и выполнения привилегированных команд, интерполированные оболочкой, на помощники на основе аргументов `spawn`/`execFile` для установки базы данных, команд sudo Tailscale, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранить значки поставщиков устойчивыми, используя сначала компоненты `@lobehub/icons`, затем локальные резервные копии PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели инструментов.

- **OpenAI Codex:** Исправление резервной обработки для элементов `type: "text"`, несущих наборы данных null или пустые, которые вызывали отклонение 400 (#742).
- **Opencode:** Обновить выравнивание схемы до единственного `provider`, чтобы соответствовать официальной спецификации (#774).
- **Gemini CLI:** Внедрить отсутствующие заголовки квот конечных пользователей, предотвращающие блокировку авторизации 403 (#775).
- **DB Recovery:** Переработать импорт полезных нагрузок с несколькими частями в массивы буферизованных бинарных данных, чтобы обойти ограничения максимального тела обратного прокси (#770).

---

---

---

## [3.3.0] - 2026-03-29

### ✨ Улучшения и рефакторинг

- **Стабилизация релиза** — Завершена версия v3.2.9 (комбо-диагностика, шлюзы качества, исправление инструмента Gemini) и создан отсутствующий тег git. Все стадии изменений объединены в один атомарный коммит релиза.

### 🐛 Исправления ошибок

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать сервер CommonJS MITM в автономный артефакт и разрешать пути данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборок Node 24.
- **fix(build):** Скопировать каталог нативного времени выполнения `wreq-js` в изолированный выходной каталог Next.js, чтобы упакованные запуски Playwright/E2E могли загрузить хук инструментации на Linux.
- **fix(api):** Проверять вебсокет-мост Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленый валидатор маршрута `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавить явное типизирование помощников псевдонимов и категорий поставщиков, чтобы строгий шлюз CI `typecheck:noimplicit:core` прошел.
- **fix(ui):** Сохранить страницу деталей поставщика прокси-сервера вверху, пометив ее резервной поверхностью управления "Управляется через настройки прокси-сервера вверху", когда переводы недоступны.
- **fix(electron):** Усилить CSP рабочего стола в производстве, удалив `unsafe-eval` вне разработки и добавив ограничения объекта, базового URI, действия формы, предка фрейма и рабочего.
- **fix(cli):** Заменить пути установки и выполнения привилегированных команд, интерполированные оболочкой, на помощники на основе аргументов `spawn`/`execFile` для установки базы данных, команд sudo Tailscale, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранить значки поставщиков устойчивыми, используя сначала компоненты `@lobehub/icons`, затем локальные резервные копии PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели инструментов.

- **Тест автоматического обновления** — Исправлен тест `buildDockerComposeUpdateScript`, чтобы утверждение соответствовало неразвернутым ссылкам на переменные оболочки (`$TARGET_TAG`, `${TARGET_TAG#v}`) в сгенерированном скрипте развертывания, соответствующем переработанному шаблону из v3.2.8.
- **Тест автоматического обновления** — Укреплен `combo-circuit-breaker.test.mjs`, внедрив `maxRetries: 0`, чтобы предотвратить увеличение попыток, искажающее утверждения счетчика неудач во время переходов состояния переключателя.

---

---

## [3.2.9] - 2026-03-29

### ✨ Улучшения и рефакторинг

- **Комбинированная диагностика** — Введен флаг обхода теста (`forceLiveComboTest`), позволяющий администраторам выполнять реальные проверки состояния апстрима, обходя все локальные механизмы цепей отказов и охлаждения, что обеспечивает точную диагностику во время отказов (PR #759)
- **Контроль качества** — Добавлена автоматизированная проверка качества ответов для комбо и официальная интеграция поддержки модели `claude-4.6` в основные схемы маршрутизации (PR #762)

### 🐛 Исправление ошибок

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать сервер CommonJS MITM в автономный артефакт и разрешать пути данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать каталог нативного времени выполнения `wreq-js` в изолированный выходной каталог Next.js standalone, чтобы упакованные запуски Playwright/E2E могли загрузить хук инструментации на Linux.
- **fix(api):** Проверять мост веб-сокета Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую проверку маршрута `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавить явное типизирование помощников псевдонимов и категорий поставщиков, чтобы строгий шлюз CI `typecheck:noimplicit:core` прошел.
- **fix(ui):** Сохранять страницу деталей поставщика апстрим-прокси с меткой резервной поверхности управления "Управляется через настройки апстрим-прокси", когда переводы недоступны.
- **fix(electron):** Усилить CSP для рабочего стола, удалив `unsafe-eval` вне разработки и добавив ограничения объекта, базового URI, действия формы, предка фрейма и рабочего.
- **fix(cli):** Заменить пути установки и выполнения привилегированных команд с интерполяцией оболочки на помощники на основе аргументов `spawn`/`execFile` для настройки базы данных, команд sudo Tailscale, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранять значки поставщиков устойчивыми, используя сначала компоненты `@lobehub/icons`, затем локальные резервные копии PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели инструментов.

- **Валидация определения инструмента** — Исправлена интеграция API Gemini путем нормализации типов перечислений внутри определений инструментов, предотвращая ошибки параметров HTTP 400 на апстриме (PR #760)

---

---

---

## [3.2.8] - 2026-03-29

### ✨ Улучшения и рефакторинг

- **Docker Auto-Update UI** — Интегрирован фоновый процесс обновления для развертываний Docker Compose. Интерфейс панели инструментов теперь беспрепятственно отслеживает события жизненного цикла обновления, объединяя ответы JSON REST с потоковыми накладными SSE для надежности в разных средах.
- **Cache Analytics** — Восстановлена визуализация нулевых метрик путем прямой миграции журналов телеметрии кэша Semantic в модуль централизованного отслеживания SQLite.

### 🐛 Исправление ошибок

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать сервер CommonJS MITM в автономный артефакт и разрешать пути данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать каталог нативного времени выполнения `wreq-js` в изолированный выходной каталог Next.js standalone, чтобы упакованные запуски Playwright/E2E могли загрузить хук инструментации на Linux.
- **fix(api):** Проверять мост веб-сокета Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую проверку маршрута `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавить явное типизирование помощников псевдонимов и категорий поставщиков, чтобы строгий шлюз CI `typecheck:noimplicit:core` прошел.
- **fix(ui):** Сохранять страницу деталей поставщика апстрим-прокси с меткой резервной поверхности управления "Управляется через настройки апстрим-прокси", когда переводы недоступны.
- **fix(electron):** Усилить CSP для рабочего стола, удалив `unsafe-eval` вне разработки и добавив ограничения объекта, базового URI, действия формы, предка фрейма и рабочего.
- **fix(cli):** Заменить пути установки и выполнения привилегированных команд с интерполяцией оболочки на помощники на основе аргументов `spawn`/`execFile` для настройки базы данных, команд sudo Tailscale, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранять значки поставщиков устойчивыми, используя сначала компоненты `@lobehub/icons`, затем локальные резервные копии PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели инструментов.

- **Логика аутентификации** — Исправлена ошибка, при которой сохранение настроек панели инструментов или добавление моделей завершалось ошибкой 401 Unauthorized, когда `requireLogin` был отключен. API-эндпоинты теперь правильно оценивают глобальный переключатель аутентификации. Восстановлено глобальное перенаправление путем повторной активации `src/middleware.ts`.
- **Обнаружение инструмента CLI (Windows)** — Предотвращена фатальная инициализация исключений во время обнаружения среды CLI, правильно перехватывая ошибки `cross-spawn` ENOENT. Добавляет явные пути обнаружения для `\AppData\Local\droid\droid.exe`.
- **Codex Native Passthrough** — Нормализовать параметры перевода модели, предотвращая загрязнение контекста в режиме прокси-обхода, явно применяя ограничения `store: false` для всех запросов, исходящих из Codex.
- **SSE Token Reporting** — Нормализовать обнаружение `finish_reason` фрагментов вызова инструмента поставщика, исправив аналитику использования 0% для потоковых ответов, не содержащих строгие индикаторы `<DONE>`.
- **DeepSeek <think> Tags** — Реализована явная извлекающая карта `<think>` внутри `responsesHandler.ts`, обеспечивающая эквивалентное отображение потоков рассуждений DeepSeek нативным структурам Anthropic `<thinking>`.

---

---

## [3.2.7] - 2026-03-29

### Исправлено

- **Бесшовные обновления интерфейса**: Функция "Обновить сейчас" на панели управления теперь предоставляет живую, прозрачную обратную связь с использованием Server-Sent Events (SSE). Она надежно выполняет установку пакетов, пересборку нативных модулей (better-sqlite3) и перезапуск PM2, показывая загрузчики в реальном времени вместо молчаливого зависания.

---

---

---

## [3.2.6] — 2026-03-29

### ✨ Улучшения и рефакторинг

- **Отображение API-ключа (#740)** — Добавлен поток копирования API-ключа в Api Manager, защищенный переменной окружения `ALLOW_API_KEY_REVEAL`.
- **Управление видимостью боковой панели (#739)** — Администраторы теперь могут скрывать любую ссылку навигации в боковой панели через настройки внешнего вида для уменьшения визуального шума.
- **Строгое тестирование комбо (#735)** — Укреплена конечная точка проверки состояния комбо, чтобы она требовала живых текстовых ответов от моделей вместо просто сигналов доступности.
- **Потоковая передача подробных журналов (#734)** — Переключение детального ведения журнала запросов на потоковые события SSE для реконструкции конечного полезного нагрузки, что экономит огромное количество места в базе данных SQLite и значительно очищает интерфейс.

### 🐛 Исправление ошибок

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать сервер MITM CommonJS в автономный артефакт и разрешать пути данных MITM без зависимости от псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс `.tmp/wine32` Wine из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать каталог `wreq-js` нативного времени выполнения в изолированный выходной каталог Next.js, чтобы упакованные Playwright/E2E могли загружать хук инструментации на Linux.
- **fix(api):** Проверять вебсокет-мост Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую проверку `request.json()` и возвращая явные 400-ответы для недопустимых тел.
- **fix(providers):** Добавить явное типизирование помощников псевдонимов и категорий поставщиков, чтобы строгий `typecheck:noimplicit:core` CI-шлюз прошел.
- **fix(ui):** Сохранять страницу деталей поставщика прокси-сервера вверху, помеченную меткой "Управляется через настройки прокси-сервера вверху", когда переводы недоступны.
- **fix(electron):** Укрепить CSP для рабочей версии настольного приложения, убрав `unsafe-eval` вне разработки и добавив ограничения объектов, базового URI, действия формы, предка фрейма и рабочего процесса.
- **fix(cli):** Заменить пути установки и выполнения привилегированных команд, интерполированные оболочкой, на помощники `spawn`/`execFile` на основе аргументов для настройки базы данных, команд Tailscale sudo, редактирования DNS MITM и установки/удаления сертификатов.
- **fix(ui):** Сохранять значки поставщиков устойчивыми, используя сначала компоненты `@lobehub/icons`, затем локальные резервные копии PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели управления.

- **OpenCode Go MiniMax Auth (#733)** — Исправлена логика заголовка аутентификации для моделей `minimax` в OpenCode Go, чтобы использовать `x-api-key` вместо стандартных токенов носителя в протоколе `/messages`.

---

---

## [3.2.5] — 2026-03-29

### ✨ Улучшения и рефакторинг

- **Поддержка развертывания Void Linux (#732)** — Интегрирован шаблон пакета `xbps-src` и инструкции для нативной компиляции и установки OmniRoute с привязками `better-sqlite3` через целевую платформу кросс-компиляции.

---

---

## [3.2.4] — 2026-03-29

### ✨ Улучшения и рефакторинг

- **Миграция Qoder AI (#660)** — Полностью перенесен устаревший провайдер ядра `iFlow` на `Qoder AI`, сохраняя стабильные возможности маршрутизации API.

### 🐛 Исправления ошибок

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, скопировать сервер CommonJS MITM в автономный артефакт и разрешить пути данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборок Node 24.
- **fix(build):** Скопировать каталог нативного времени выполнения `wreq-js` в изолированный выходной каталог Next.js standalone, чтобы упакованные запуски Playwright/E2E могли загружать хук инструментации на Linux.
- **fix(api):** Проверять веб-сокетный мост и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую проверку маршрута `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавить явное типизирование для помощников псевдонимов и категорий провайдеров, чтобы строгий шлюз CI `typecheck:noimplicit:core` прошел.
- **fix(ui):** Сохранять страницу деталей провайдера прокси-сервера с меткой резервного копирования "Управляется через настройки прокси-сервера" при отсутствии переводов.
- **fix(electron):** Усилить CSP рабочего стола в производстве, удалив `unsafe-eval` вне разработки и добавив ограничения объекта, базового URI, действия формы, предка фрейма и рабочего.
- **fix(cli):** Заменить пути установки и выполнения привилегированных команд с интерполяцией оболочки на помощники на основе аргументов `spawn`/`execFile` для настройки базы данных, команд sudo Tailscale, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранять значки провайдеров устойчивыми, используя сначала компоненты `@lobehub/icons`, затем локальные резервные копии PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели инструментов.

- **Gemini Tools HTTP 400 Payload Invalid Argument (#731)** — Предотвращено внедрение массивов `thoughtSignature` внутри стандартных последовательностей вызовов функций Gemini, блокирующих потоки маршрутизации агентов.

---

---

---

## [3.2.3] — 2026-03-29

### ✨ Улучшения и рефакторинг

- **Интерфейс лимитов провайдера (#728)** — Нормализована логика и маркировка лимитов внутри интерфейса лимитов.

### 🐛 Исправления ошибок

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, скопировать сервер CommonJS MITM в автономный артефакт и разрешить пути данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборок Node 24.
- **fix(build):** Скопировать каталог нативного времени выполнения `wreq-js` в изолированный выходной каталог Next.js standalone, чтобы упакованные запуски Playwright/E2E могли загружать хук инструментации на Linux.
- **fix(api):** Проверять веб-сокетный мост и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую проверку маршрута `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавить явное типизирование для помощников псевдонимов и категорий провайдеров, чтобы строгий шлюз CI `typecheck:noimplicit:core` прошел.
- **fix(ui):** Сохранять страницу деталей провайдера прокси-сервера с меткой резервного копирования "Управляется через настройки прокси-сервера" при отсутствии переводов.
- **fix(electron):** Усилить CSP рабочего стола в производстве, удалив `unsafe-eval` вне разработки и добавив ограничения объекта, базового URI, действия формы, предка фрейма и рабочего.
- **fix(cli):** Заменить пути установки и выполнения привилегированных команд с интерполяцией оболочки на помощники на основе аргументов `spawn`/`execFile` для настройки базы данных, команд sudo Tailscale, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранять значки провайдеров устойчивыми, используя сначала компоненты `@lobehub/icons`, затем локальные резервные копии PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели инструментов.

- **Схемы маршрутизации ядра и утечки** — Расширен `comboStrategySchema` для нативной поддержки стратегий `fill-first` и `p2c`, чтобы разблокировать сложное редактирование комбо.
- **Извлечение тегов мышления (CLI)** — Переструктурирован очиститель токенов ответов CLI RegEx для захвата структур мышления модели внутри потоков, избегая поврежденных извлечений `<thinking>`, которые нарушают формат вывода текста ответа.
- **Строгие требования к формату** — Укреплено выполнение очистки конвейера, сделав его универсально применяемым к целям режима перевода.

---

---

## [3.2.2] — 2026-03-29

### ✨ New Features

- **feat(docs):** интеграция многостраничной документации в панель управления OmniRoute (#1969)
- **feat(settings):** добавление настройки лимита тела запроса (#1968)
- **feat(auth):** добавление значения по умолчанию для клиентского секрета OAuth Gemini CLI (#1974)
- **feat(models):** предоставление контекстных окон моделей.dev в /v1/models (#1972)
- **fix(db):** исправление проблемы с резервным шифрованием, вызывающим циклы повторного шифрования (#1941)
- **fix(auth):** исправление очистки ответа final_answer для помощника Codex (#1965)

- **feat(providers):** Реализация возможностей генерации и редактирования изображений для ChatGPT Web, включая генерацию изображений в чате и кэширование (#1606).
- **feat(ui):** Интеграция логотипа SVG инструмента OpenCode Zen/Go API и улучшение взаимодействий с API-ключами (#1607).

- **feat(providers):** Интеграция AgentRouter в качестве нового провайдера, совместимого с OpenAI, с $200 бесплатных кредитов при регистрации (Issue #1572).
- **feat(ui):** Реализация тестирования моделей по запросу в панели управления провайдерами, позволяющее выполнять диагностические проверки с одним токеном без триггера лимитов скорости (Issue #1532).

- **Четырехэтапный конвейер журнала запросов (#705)** — Рефакторинг сохранения журналов для сохранения полных полезных нагрузок на четырех различных этапах конвейера: Запрос клиента, Переведенный запрос провайдера, Ответ провайдера и Переведенный ответ клиента. Введен `streamPayloadCollector` для надежного обрезания и сериализации полезных нагрузок SSE.

### 🐛 Bug Fixes

- **fix(mitm):** Компиляция утилит MITM как NodeNext ESM во время prepublish, копирование сервера MITM CommonJS в автономный артефакт и разрешение путей данных MITM без зависимости от псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Перемещение локального префикса `.tmp/wine32` Wine вне пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Копирование каталога `wreq-js` в изолированный выходной каталог Next.js, чтобы упакованные Playwright/E2E могли загружать хук инструментации на Linux.
- **fix(api):** Валидация вебсокет-моста ответов Codex и полезных нагрузок `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую валидацию `request.json()` и возвращая явные 400 ответы для недопустимых тел.
- **fix(providers):** Добавление явного типирования для помощников псевдонимов и категорий провайдеров, чтобы строгий `typecheck:noimplicit:core` CI-шлюз прошел.
- **fix(ui):** Поддержание страницы деталей провайдера с прокси-сервером, помеченной как "Управляется через настройки прокси-сервера", когда переводы недоступны.
- **fix(electron):** Укрепление CSP для рабочей станции в производстве, удаление `unsafe-eval` за пределами разработки и добавление ограничений объекта, базового URI, действия формы, предка фрейма и рабочего процесса.
- **fix(cli):** Замена интерполированных путей установки и привилегированных команд выполнения с помощью помощников `spawn`/`execFile` на основе аргументов для настройки базы данных, команд Tailscale sudo, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Поддержание иконок провайдеров устойчивыми с использованием компонентов `@lobehub/icons` напрямую, а затем локальных резервных копий PNG/SVG, избегая `@lobehub/ui` в рантайме панели управления.

- **Исправления мобильного интерфейса (#659)** — Предотвращение разрыва компонентов таблицы на панели управления на узких вьюпортах путем добавления горизонтальной прокрутки и содержания переполнения в `DashboardLayout`.
- **Исправления кэша промптов Claude (#708)** — Обеспечение того, что блоки `cache_control` в циклах обратной связи Claude-to-Claude сохраняются верно и передаются безопасно обратно в модели Anthropic.
- **Определения инструментов Gemini (#725)** — Исправление ошибок перевода схемы при объявлении простых типов параметров `object` для вызова функций Gemini.

---

---

## [3.2.1] — 2026-03-29

### ✨ New Features

- **feat(docs):** интеграция многостраничной документации в панель управления OmniRoute (#1969)
- **feat(settings):** добавление настройки лимита тела запроса (#1968)
- **feat(auth):** добавление значения по умолчанию для клиентского секрета OAuth Gemini CLI (#1974)
- **feat(models):** предоставление контекстных окон моделей.dev в /v1/models (#1972)
- **fix(db):** исправление проблемы с резервным шифрованием, вызывающим циклы повторного шифрования (#1941)
- **fix(auth):** исправление очистки ответа final_answer для помощника Codex (#1965)

- **feat(providers):** Реализация возможностей генерации и редактирования изображений для ChatGPT Web, включая генерацию изображений в чате и кэширование (#1606).
- **feat(ui):** Интеграция SVG-логотипа OpenCode Zen/Go API и улучшение взаимодействий с API-ключами (#1607).

- **feat(providers):** Интеграция AgentRouter в качестве нового провайдера, совместимого с OpenAI, с $200 бесплатных кредитов при регистрации (Issue #1572).
- **feat(ui):** Реализация тестирования моделей по запросу в панели управления провайдерами, позволяющее выполнять диагностические проверки с одним токеном без срабатывания лимитов скорости (Issue #1532).

- **Глобальный резервный провайдер (#689)** — Когда все комбинированные модели исчерпаны (502/503), OmniRoute теперь пытается использовать глобальную резервную модель перед возвратом ошибки. Установите `globalFallbackModel` в настройках для активации.

### 🐛 Bug Fixes

- **fix(mitm):** Компиляция утилит MITM как NodeNext ESM во время prepublish, копирование сервера MITM CommonJS в автономный артефакт и разрешение путей данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Перемещение локального префикса Wine `.tmp/wine32` вне пути сборки Next.js, чтобы артефакты упаковки Windows Electron не вызывали сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Копирование каталога `wreq-js` в изолированный выходной каталог Next.js, чтобы упакованные Playwright/E2E могли загружать хук инструментации на Linux.
- **fix(api):** Валидация вебсокет-моста Codex Responses и JSON-полезной нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую проверку `request.json()` и возвращая явные 400-ответы для недопустимых тел.
- **fix(providers):** Добавление явного типирования для помощников псевдонимов и категорий провайдеров, чтобы пройти строгий `typecheck:noimplicit:core` в CI.
- **fix(ui):** Сохранение страницы деталей провайдера прокси-сервера с меткой "Управляется через настройки прокси-сервера" при отсутствии переводов.
- **fix(electron):** Укрепление CSP для рабочей среды, удаление `unsafe-eval` за пределами разработки и добавление ограничений для объектов, базового URI, действий формы, предков фрейма и рабочих процессов.
- **fix(cli):** Замена интерполированных оболочкой путей установки и привилегированных команд на помощников `spawn`/`execFile` с аргументами для установки базы данных, команд Tailscale sudo, редактирования DNS MITM и установки/удаления сертификатов.
- **fix(ui):** Сохранение иконок провайдеров устойчивыми, используя сначала компоненты `@lobehub/icons`, затем локальные PNG/SVG-резервные копии, избегая `@lobehub/ui` в панели управления.

- **Исправление #721** — Исправлена обход фиксации контекста во время ответов на вызовы инструментов. Непотоковая тегировка использовала неправильный путь JSON (`json.messages` → `json.choices[0].message`). Потоковая инъекция теперь срабатывает на фрагментах `finish_reason` для потоков только с вызовами инструментов. `injectModelTag()` теперь добавляет синтетические сообщения фиксации для нестрокового содержимого.
- **Исправление #709** — Подтверждено, что уже исправлено (v3.1.9) — `system-info.mjs` создает каталоги рекурсивно. Закрыто.
- **Исправление #707** — Подтверждено, что уже исправлено (v3.1.9) — очистка пустого имени инструмента в `chatCore.ts`. Закрыто.

### 🧪 Tests

- Добавлено 6 модульных тестов для фиксации контекста с ответами на вызовы инструментов (нулевое содержимое, содержимое массива, цикл, повторная инъекция)

---

---

## [3.2.0] — 2026-03-28

### ✨ New Features

- **feat(docs):** интеграция многостраничной документации в панель управления OmniRoute (#1969)
- **feat(settings):** добавление настройки лимита тела запроса (#1968)
- **feat(auth):** добавление значения по умолчанию для клиентского секрета OAuth Gemini CLI (#1974)
- **feat(models):** предоставление контекстных окон моделей.dev в /v1/models (#1972)
- **fix(db):** исправление проблемы с резервным шифрованием, вызывающим циклы повторного шифрования (#1941)
- **fix(auth):** исправление очистки ответа final_answer для помощника Codex (#1965)

- **feat(providers):** Реализация возможностей генерации и редактирования изображений для ChatGPT Web, включая генерацию изображений в чате и кэширование (#1606).
- **feat(ui):** Интеграция SVG-логотипа инструмента OpenCode Zen/Go API и улучшение взаимодействий копирования API-ключа в буфер обмена (#1607).

- **feat(providers):** Интеграция AgentRouter в качестве нового провайдера, совместимого с OpenAI, с $200 бесплатных кредитов при регистрации (Issue #1572).
- **feat(ui):** Реализация тестирования моделей по запросу в панели управления провайдерами, позволяющее выполнять диагностические проверки с одним токеном без срабатывания ограничений скорости (Issue #1532).

- **Управление кэшем UI** — Добавлена специализированная панель управления семантическим кэшированием по адресу \`/dashboard/cache\` с возможностью целевого инвалидации API и поддержкой 31 языка (PR #701 от @oyi77)
- **Отслеживание квот GLM** — Добавлено отслеживание использования и квот сессий для провайдера GLM Coding (Z.AI) (PR #698 от @christopher-s)
- **Подробные журналы полезной нагрузки** — Подключены полные захваты полезной нагрузки четырехступенчатого конвейера (оригинал, переведенный, ответ провайдера, потоковые дельты) непосредственно в интерфейс (PR #705 от @rdself)

### 🐛 Bug Fixes

- **fix(mitm):** Компиляция утилит MITM как NodeNext ESM во время prepublish, копирование сервера MITM CommonJS в автономный артефакт и разрешение путей данных MITM без зависимости от псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Перемещение локального префикса `.tmp/wine32` Wine вне пути сборки Next.js, чтобы артефакты упаковки Windows Electron не вызывали сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Копирование каталога `wreq-js` в изолированный выходной каталог Next.js, чтобы упакованные Playwright/E2E могли загружать хук инструментации на Linux.
- **fix(api):** Проверка вебсокет-моста ответов Codex и JSON-полезной нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую проверку `request.json()` и возвращая явные 400-ответы для недопустимых тел.
- **fix(providers):** Добавление явного типизирования для помощников псевдонимов и категорий провайдеров, чтобы пройти шлюз `typecheck:noimplicit:core` CI.
- **fix(ui):** Поддержание страницы деталей провайдера прокси-сервера с меткой "Управляется через настройки прокси-сервера" при отсутствии переводов.
- **fix(electron):** Укрепление CSP для рабочей среды путем удаления `unsafe-eval` вне разработки и добавления ограничений объекта, URI базы, действия формы, предка фрейма и рабочего процесса.
- **fix(cli):** Замена интерполированных путей командной строки для установки и привилегированного выполнения команд аргументами `spawn`/`execFile` для установки базы данных, команд Tailscale sudo, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Поддержание иконок провайдеров устойчивыми путем использования компонентов `@lobehub/icons` напрямую, а затем резервных PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели управления.

- **Исправление #708** — Предотвращено протекание токенов для пользователей Claude Code, маршрутизируемых через OmniRoute, путем правильного сохранения нативных заголовков \`cache_control\` во время передачи Claude-to-Claude (PR #708 от @tombii)
- **Исправление #719** — Настроены внутренние границы аутентификации для \`ModelSyncScheduler\`, чтобы предотвратить сбои демона при запуске без аутентификации (PR #719 от @rdself)
- **Исправление #718** — Перестроено отображение значков в интерфейсе лимитов провайдеров, предотвращающее плохое перекрытие границ квот (PR #718 от @rdself)
- **Исправление #704** — Исправлены сбои комбо-резервных копий при ошибках HTTP 400 content-policy, предотвращающие мертвую маршрутизацию моделей (PR #704 от @rdself)

### 🔒 Security & Dependencies

- Обновлено \`path-to-regexp\` до \`8.4.0\` для устранения уязвимостей dependabot (PR #715)

---

---

## [3.1.10] — 2026-03-28

### 🐛 Исправления ошибок

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать сервер CommonJS MITM в автономный артефакт и разрешать пути данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборок Node 24.
- **fix(build):** Скопировать каталог нативного времени выполнения `wreq-js` в изолированный выходной каталог Next.js, чтобы упакованные запуски Playwright/E2E могли загрузить хук инструментации на Linux.
- **fix(api):** Проверять веб-сокетный мост Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую проверку маршрута `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавить явную типизацию для помощников псевдонимов и категорий поставщиков, чтобы строгий шлюз `typecheck:noimplicit:core` CI прошел.
- **fix(ui):** Сохранить страницу деталей поставщика прокси-сервера вверх по цепочке с меткой резервного копирования "Управляется через настройки прокси-сервера вверх по цепочке", когда переводы недоступны.
- **fix(electron):** Усилить CSP для рабочей среды, удалив `unsafe-eval` вне разработки и добавив ограничения объекта, базового URI, действия формы, предка фрейма и рабочего процесса.
- **fix(cli):** Заменить пути установки и выполнения привилегированных команд с интерполяцией оболочки на помощники `spawn`/`execFile` на основе аргументов для настройки базы данных, команд sudo Tailscale, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сделать значки поставщиков устойчивыми, используя сначала компоненты `@lobehub/icons`, затем локальные резервные копии PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели инструментов.

- **Fix #706** — Исправлено рендеринг значков резервной копии, вызванный переопределением `font-sans` Tailwind V4, применением `!important` к `.material-symbols-outlined`.
- **Fix #703** — Исправлены сломанные потоки GitHub Copilot, включив `responses` в формат перевода `openai` для любых пользовательских моделей, использующих `apiFormat: "responses"`.
- **Fix #702** — Заменить отслеживание использования с фиксированной ставкой на точные расчеты ценообразования DB для потоковых и не потоковых ответов.
- **Fix #716** — Очистить состояние перевода инструментов Claude, правильно разобрать потоковые аргументы и предотвратить повторение поля `id` в фрагментах `tool_calls` OpenAI.

---

---

## [3.1.9] — 2026-03-28

### ✨ Новые функции

- **feat(docs):** интегрировать многостраничную документацию в панель инструментов OmniRoute (#1969)
- **feat(settings):** добавить настройку лимита тела запроса (#1968)
- **feat(auth):** добавить резервный секрет клиента OAuth Gemini CLI (#1974)
- **feat(models):** показать окна контекста models.dev в /v1/models (#1972)
- **fix(db):** решить резервное восстановление шифрования, вызывающее циклы повторного шифрования (#1941)
- **fix(auth):** исправить очистку ответа final_answer помощника Codex (#1965)

- **feat(providers):** Реализовать возможности генерации и редактирования изображений для ChatGPT Web, включая генерацию изображений в чате и кэширование (#1606).
- **feat(ui):** Интегрировать SVG логотипа инструмента OpenCode Zen/Go API и улучшить взаимодействия копирования API-ключа в буфер обмена (#1607).

- **feat(providers):** Интегрировать AgentRouter в качестве нового поставщика, совместимого с OpenAI, с $200 бесплатных кредитов при регистрации (Issue #1572).
- **feat(ui):** Реализовать тестирование моделей по запросу в панели инструментов поставщиков, позволяющее выполнять диагностические проверки с одним токеном без срабатывания ограничений скорости (Issue #1532).

- **Принудительное соответствие схеме** — Автоматически привести строковые числовые ограничения JSON Schema (например, `"minimum": "1"`) к правильным типам, предотвращая ошибки 400 от Cursor, Cline и других клиентов, отправляющих неверные схемы инструментов.
- **Санитизация описания инструмента** — Гарантировать, что описания инструментов всегда являются строками; преобразовать `null`, `undefined` или числовые описания в пустые строки перед отправкой поставщикам.
- **Кнопка "Очистить все модели"** — Добавлены переводы i18n для действия "Очистить все модели" поставщика для всех 30 языков.
- **Экспорт аутентификации Codex** — Добавлены кнопки экспорта и применения локально для Codex `auth.json` для бесперебойной интеграции CLI.
- **Примечания Windsurf BYOK** — Добавлены официальные предупреждения об ограничениях в карточке инструмента Windsurf CLI, документирующие ограничения BYOK.

### 🐛 Исправления ошибок

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать сервер CommonJS MITM в автономный артефакт и разрешать пути данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборок Node 24.
- **fix(build):** Скопировать каталог нативного времени выполнения `wreq-js` в изолированный выходной каталог Next.js, чтобы упакованные запуски Playwright/E2E могли загрузить хук инструментации на Linux.
- **fix(api):** Проверять веб-сокетный мост Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую проверку маршрута `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавить явную типизацию для помощников псевдонимов и категорий поставщиков, чтобы строгий шлюз `typecheck:noimplicit:core` CI прошел.
- **fix(ui):** Сохранить страницу деталей поставщика прокси-сервера вверх по цепочке с меткой резервного копирования "Управляется через настройки прокси-сервера вверх по цепочке", когда переводы недоступны.
- **fix(electron):** Усилить CSP для рабочей среды, удалив `unsafe-eval` вне разработки и добавив ограничения объекта, базового URI, действия формы, предка фрейма и рабочего процесса.
- **fix(cli):** Заменить пути установки и выполнения привилегированных команд с интерполяцией оболочки на помощники `spawn`/`execFile` на основе аргументов для настройки базы данных, команд sudo Tailscale, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сделать значки поставщиков устойчивыми, используя сначала компоненты `@lobehub/icons`, затем локальные резервные копии PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели инструментов.

- **Fix #709** — `system-info.mjs` больше не вызывает сбоя, когда каталог вывода не существует (добавлен `mkdirSync` с флагом рекурсии).
- **Fix #710** — Синглтон `TaskManager` A2A теперь использует `globalThis`, чтобы предотвратить утечку состояния между повторными компиляциями маршрутов API Next.js в режиме разработки. Набор тестов E2E обновлен для обработки 401 с благожелательностью.
- **Fix #711** — Добавлено принудительное соблюдение `max_tokens` для запросов вверх по цепочке.
- **Fix #605 / #592** — Удалить префикс `proxy_` из имен инструментов в не потоковых ответах Claude; исправлен URL проверки LongCat.
- **Максимальный предел журналов вызовов** — Обновлено `getMaxCallLogs()` с кэширующим слоем, поддержкой переменных среды (`CALL_LOGS_MAX`) и интеграцией настроек DB.

### 🧪 Тесты

- Набор тестов расширен с 964 → 1027 тестов (63 новых теста)
- Добавлен `schema-coercion.test.mjs` — 9 тестов для принудительного соответствия числовым полям и санитизации описаний инструментов
- Добавлен `t40-opencode-cli-tools-integration.test.mjs` — тесты интеграции инструментов OpenCode/Windsurf CLI
- Улучшенная ветвь feature-tests с всесторонним покрытием инструментами

### 📁 Новые файлы

| File                                                     | Purpose                                                     |
| -------------------------------------------------------- | ----------------------------------------------------------- |
| `open-sse/translator/helpers/schemaCoercion.ts`          | Утилиты принудительного соответствия схеме и санитизации описаний инструментов |
| `tests/unit/schema-coercion.test.mjs`                    | Юнит-тесты для принудительного соответствия схеме                              |
| `tests/unit/t40-opencode-cli-tools-integration.test.mjs` | Тесты интеграции инструментов CLI                                  |
| `COVERAGE_PLAN.md`                                       | Документ планирования покрытия тестами                             |

### 🐛 Исправления ошибок

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать сервер CommonJS MITM в автономный артефакт и разрешать пути данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборок Node 24.
- **fix(build):** Скопировать каталог нативного времени выполнения `wreq-js` в изолированный выходной каталог Next.js, чтобы упакованные запуски Playwright/E2E могли загрузить хук инструментации на Linux.
- **fix(api):** Проверять веб-сокетный мост Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую проверку маршрута `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавить явную типизацию для помощников псевдонимов и категорий поставщиков, чтобы строгий шлюз `typecheck:noimplicit:core` CI прошел.
- **fix(ui):** Сохранить страницу деталей поставщика прокси-сервера вверх по цепочке с меткой резервного копирования "Управляется через настройки прокси-сервера вверх по цепочке", когда переводы недоступны.
- **fix(electron):** Усилить CSP для рабочей среды, удалив `unsafe-eval` вне разработки и добавив ограничения объекта, базового URI, действия формы, предка фрейма и рабочего процесса.
- **fix(cli):** Заменить пути установки и выполнения привилегированных команд с интерполяцией оболочки на помощники `spawn`/`execFile` на основе аргументов для настройки базы данных, команд sudo Tailscale, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сделать значки поставщиков устойчивыми, используя сначала компоненты `@lobehub/icons`, затем локальные резервные копии PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели инструментов.

- **Потоковое кэширование промптов** — Исправлено удаление маркеров cache_control в режиме прокси Claude (Claude → OmniRoute → Claude), что приводило к тому, что пользователи Claude Code истощали квоту Anthropic API в 5-10 раз быстрее, чем при прямых подключениях. OmniRoute теперь сохраняет маркеры cache_control клиента, когда sourceFormat и targetFormat оба равны Claude, что обеспечивает правильную работу кэширования промптов и значительно снижает потребление токенов.

---

---

## [3.1.8] - 2026-03-27

### 🐛 Исправления ошибок и новые функции

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать сервер CommonJS MITM в автономный артефакт и разрешать пути данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать каталог нативного времени выполнения `wreq-js` в изолированный выходной каталог Next.js, чтобы упакованные запуски Playwright/E2E могли загрузить хук инструментации на Linux.
- **fix(api):** Проверять вебсокет-мост Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую проверку маршрута `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавить явное типизирование помощников псевдонимов и категорий поставщиков, чтобы строгий шлюз CI `typecheck:noimplicit:core` прошел.
- **fix(ui):** Сохранить страницу деталей поставщика прокси-сервера вверх по потоку с меткой резервного копирования "Управляется через настройки прокси-сервера вверх по потоку", когда переводы недоступны.
- **fix(electron):** Усилить CSP рабочего стола в производстве, удалив `unsafe-eval` вне разработки и добавив ограничения объекта, базового URI, действия формы, предка фрейма и работника.
- **fix(cli):** Заменить пути установки и выполнения привилегированных команд с интерполяцией оболочки на помощники `spawn`/`execFile` на основе аргументов для настройки базы данных, команд sudo Tailscale, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранить значки поставщиков устойчивыми, используя сначала компоненты `@lobehub/icons`, затем локальные резервные копии PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели инструментов.

- **Платформа Core:** Реализовано глобальное управление состоянием для скрытых моделей и комбо, предотвращающее их загромождение каталога или утечку в подключенные агенты MCP (#681).
- **Стабильность:** Исправлены аварийные остановки потоков, связанные с нативной интеграцией поставщика Antigravity, из-за необработанных массивов состояния, не имеющих значения (#684).
- **Синхронизация локализации:** Развернута полностью переработанная синхронизатор `i18n`, обнаруживающая отсутствующие вложенные свойства JSON и последовательно подгоняющая 30 локалей (#685).

---

---

## [3.1.7] - 2026-03-27

### 🐛 Исправления ошибок

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать сервер CommonJS MITM в автономный артефакт и разрешать пути данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать каталог нативного времени выполнения `wreq-js` в изолированный выходной каталог Next.js, чтобы упакованные запуски Playwright/E2E могли загрузить хук инструментации на Linux.
- **fix(api):** Проверять вебсокет-мост Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую проверку маршрута `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавить явное типизирование помощников псевдонимов и категорий поставщиков, чтобы строгий шлюз CI `typecheck:noimplicit:core` прошел.
- **fix(ui):** Сохранить страницу деталей поставщика прокси-сервера вверх по потоку с меткой резервного копирования "Управляется через настройки прокси-сервера вверх по потоку", когда переводы недоступны.
- **fix(electron):** Усилить CSP рабочего стола в производстве, удалив `unsafe-eval` вне разработки и добавив ограничения объекта, базового URI, действия формы, предка фрейма и работника.
- **fix(cli):** Заменить пути установки и выполнения привилегированных команд с интерполяцией оболочки на помощники `spawn`/`execFile` на основе аргументов для настройки базы данных, команд sudo Tailscale, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранить значки поставщиков устойчивыми, используя сначала компоненты `@lobehub/icons`, затем локальные резервные копии PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели инструментов.

- **Стабильность потоковой передачи:** Исправлено `hasValuableContent`, возвращающее `undefined` для пустых фрагментов в потоках SSE (#676).
- **Вызов инструментов:** Исправлена проблема в `sseParser.ts`, где не потоковые ответы Claude с несколькими вызовами инструментов теряли `id` последующих вызовов инструментов из-за неверной дедупликации на основе индекса (#671).

---

---

## [3.1.6] — 2026-03-27

### 🐛 Исправления ошибок

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать сервер CommonJS MITM в автономный артефакт и разрешать пути данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать каталог `wreq-js` в изолированный выходной каталог Next.js, чтобы упакованные запуски Playwright/E2E могли загрузить хук инструментации на Linux.
- **fix(api):** Проверять вебсокет-мост Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую проверку маршрута `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавить явное типизирование помощников псевдонимов и категорий поставщиков, чтобы строгий шлюз CI `typecheck:noimplicit:core` прошел.
- **fix(ui):** Сохранять страницу деталей поставщика прокси-сервера вверху, помеченную резервной надписью "Управляется через настройки прокси-сервера вверху", когда переводы недоступны.
- **fix(electron):** Усилить CSP рабочего стола в производстве, удалив `unsafe-eval` вне разработки и добавив ограничения объекта, базового URI, действия формы, предка фрейма и работника.
- **fix(cli):** Заменить пути установки и выполнения привилегированных команд, интерполированные оболочкой, на помощники `spawn`/`execFile` на основе аргументов для настройки базы данных, команд sudo Tailscale, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранять значки поставщиков устойчивыми, используя сначала прямые компоненты `@lobehub/icons`, затем резервные PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели управления.

- **Восстановление имени инструмента Native Tool** — Имена инструментов, такие как `TodoWrite`, больше не имеют префикса `proxy_` в ответах Claude passthrough (как потоковых, так и не потоковых). Включает покрытие модульными тестами (PR #663 by @coobabm)
- **Очистка псевдонима Clear All Models** — Кнопка "Очистить все модели" теперь также удаляет связанные псевдонимы моделей, предотвращая призрачные модели в пользовательском интерфейсе (PR #664 by @rdself)

---

---

---

## [3.1.5] — 2026-03-27

### 🐛 Исправления ошибок

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать сервер CommonJS MITM в автономный артефакт и разрешать пути данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать каталог `wreq-js` в изолированный выходной каталог Next.js, чтобы упакованные запуски Playwright/E2E могли загрузить хук инструментации на Linux.
- **fix(api):** Проверять вебсокет-мост Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую проверку маршрута `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавить явное типизирование помощников псевдонимов и категорий поставщиков, чтобы строгий шлюз CI `typecheck:noimplicit:core` прошел.
- **fix(ui):** Сохранять страницу деталей поставщика прокси-сервера вверху, помеченную резервной надписью "Управляется через настройки прокси-сервера вверху", когда переводы недоступны.
- **fix(electron):** Усилить CSP рабочего стола в производстве, удалив `unsafe-eval` вне разработки и добавив ограничения объекта, базового URI, действия формы, предка фрейма и работника.
- **fix(cli):** Заменить пути установки и выполнения привилегированных команд, интерполированные оболочкой, на помощники `spawn`/`execFile` на основе аргументов для настройки базы данных, команд sudo Tailscale, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранять значки поставщиков устойчивыми, используя сначала прямые компоненты `@lobehub/icons`, затем резервные PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели управления.

- **Автоматическое затухание Backoff** — Аккаунты с ограничением скорости теперь автоматически восстанавливаются при истечении их окна охлаждения, исправляя взаимоблокировку, при которой высокий `backoffLevel` навсегда деприоритизировал аккаунты (PR #657 by @brendandebeasi)

### 🌍 i18n

- **Переработка китайского перевода** — Комплексная переработка `zh-CN.json` с улучшенной точностью (PR #658 by @only4copilot)

---

---

## [3.1.4] — 2026-03-27

### 🐛 Исправления ошибок

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать сервер CommonJS MITM в автономный артефакт и разрешать пути данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать каталог `wreq-js` в изолированный выходной каталог Next.js, чтобы упакованные запуски Playwright/E2E могли загрузить хук инструментации на Linux.
- **fix(api):** Проверять вебсокетный мост Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую проверку маршрута `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавить явное типизирование помощников псевдонимов и категорий поставщиков, чтобы строгий шлюз CI `typecheck:noimplicit:core` прошел.
- **fix(ui):** Сохранить страницу деталей поставщика прокси-сервера вверху, помеченную резервной надписью "Управляется через настройки прокси-сервера вверху", когда переводы недоступны.
- **fix(electron):** Усилить CSP рабочего стола в производстве, удалив `unsafe-eval` за пределами разработки и добавив ограничения объекта, базового URI, действия формы, предка фрейма и рабочего.
- **fix(cli):** Заменить пути установки и выполнения привилегированных команд, интерполированные оболочкой, помощниками на основе аргументов `spawn`/`execFile` для настройки базы данных, команд sudo Tailscale, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранить значки поставщиков устойчивыми, используя сначала компоненты `@lobehub/icons`, затем локальные резервные копии PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели инструментов.

- **Исправление переопределения потоковой передачи** — явное `stream: true` в теле запроса теперь имеет приоритет над заголовком `Accept: application/json`. Клиенты, отправляющие оба, правильно получат потоковые ответы SSE (#656)

### 🌍 i18n

- **Улучшения строк на чешском языке** — Улучшенная терминология по всему `cs.json` (PR #655 от @zen0bit)

---

---

---

## [3.1.3] — 2026-03-26

### 🌍 i18n & Сообщество

- **~70 отсутствующих ключей перевода** добавлены в `en.json` и 12 языках (PR #652 от @zen0bit)
- **Обновлена документация на чешском языке** — Руководства CLI-TOOLS, API_REFERENCE, VM_DEPLOYMENT (PR #652)
- **Сценарии проверки перевода** — `check_translations.py` и `validate_translation.py` для CI/QA (PR #651 от @zen0bit)

---

---

---

## [3.1.2] — 2026-03-26

### 🐛 Исправления ошибок

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать сервер CommonJS MITM в автономный артефакт и разрешать пути данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать каталог `wreq-js` в изолированный выходной каталог Next.js, чтобы упакованные запуски Playwright/E2E могли загрузить хук инструментации на Linux.
- **fix(api):** Проверять вебсокетный мост Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую проверку маршрута `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавить явное типизирование помощников псевдонимов и категорий поставщиков, чтобы строгий шлюз CI `typecheck:noimplicit:core` прошел.
- **fix(ui):** Сохранить страницу деталей поставщика прокси-сервера вверху, помеченную резервной надписью "Управляется через настройки прокси-сервера вверху", когда переводы недоступны.
- **fix(electron):** Усилить CSP рабочего стола в производстве, удалив `unsafe-eval` за пределами разработки и добавив ограничения объекта, базового URI, действия формы, предка фрейма и рабочего.
- **fix(cli):** Заменить пути установки и выполнения привилегированных команд, интерполированные оболочкой, помощниками на основе аргументов `spawn`/`execFile` для настройки базы данных, команд sudo Tailscale, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранить значки поставщиков устойчивыми, используя сначала компоненты `@lobehub/icons`, затем локальные резервные копии PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели инструментов.

- **Критическое: Регрессия вызова инструментов** — Исправлены ошибки `proxy_Bash`, отключив префикс имени инструмента `proxy_` в пути передачи Claude. Инструменты, такие как `Bash`, `Read`, `Write`, переименовывались в `proxy_Bash`, `proxy_Read` и т.д., что приводило к отказу Claude (#618)
- **Документация о запрете аккаунта Kiro** — Документировано как ложное срабатывание защиты от мошенничества AWS, а не проблема OmniRoute (#649)

### 🧪 Тесты

- **936 тестов, 0 неудач**

---

---

## [3.1.1] — 2026-03-26

### ✨ New Features

- **feat(docs):** интегрировать многостраничную документацию в панель управления OmniRoute (#1969)
- **feat(settings):** добавить настройку лимита тела запроса (#1968)
- **feat(auth):** добавить стандартный секрет OAuth-клиента Gemini CLI (#1974)
- **feat(models):** открыть контекстные окна моделей.dev в /v1/models (#1972)
- **fix(db):** решить проблему с резервным шифрованием, вызывающим циклы повторного шифрования (#1941)
- **fix(auth):** исправить очистку ответа final_answer для помощника Codex (#1965)

- **feat(providers):** Реализовать возможности генерации и редактирования изображений для ChatGPT Web, включая генерацию изображений в чате и кэширование (#1606).
- **feat(ui):** Интегрировать логотип инструмента OpenCode Zen/Go API и улучшить взаимодействие копирования API-ключа в буфер обмена (#1607).

- **feat(providers):** Интегрировать AgentRouter в качестве нового провайдера, совместимого с OpenAI, с $200 бесплатных кредитов при регистрации (Issue #1572).
- **feat(ui):** Реализовать тестирование моделей по запросу в панели управления провайдерами, позволяющее выполнять диагностические проверки с одним токеном без срабатывания лимитов скорости (Issue #1532).

- **Vision Capability Metadata**: Добавлены `capabilities.vision`, `input_modalities`, и `output_modalities` в записи `/v1/models` для моделей с поддержкой зрения (PR #646)
- **Gemini 3.1 Models**: Добавлены `gemini-3.1-pro-preview` и `gemini-3.1-flash-lite-preview` в провайдер Antigravity (#645)

### 🐛 Bug Fixes

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать сервер MITM CommonJS в автономный артефакт и разрешить пути данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс `.tmp/wine32` Wine из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не вызывали сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать каталог нативного времени выполнения `wreq-js` в изолированный выходной каталог Next.js standalone, чтобы упакованные Playwright/E2E могли загрузить хук инструментации на Linux.
- **fix(api):** Проверять вебсокет-мост ответов Codex и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую проверку `request.json()` и возвращая явные 400-ответы для недопустимых тел.
- **fix(providers):** Добавить явное типизирование для помощников псевдонимов и категорий провайдеров, чтобы строгий `typecheck:noimplicit:core` CI-шлюз прошел.
- **fix(ui):** Сохранить страницу деталей провайдера прокси-сервера с меткой "Управляется через настройки прокси-сервера" при отсутствии переводов.
- **fix(electron):** Укрепить CSP для рабочей версии десктопа, удалив `unsafe-eval` за пределами разработки и добавив ограничения для объектов, базового URI, действия формы, предка фрейма и рабочего процесса.
- **fix(cli):** Заменить пути команд установки и выполнения с привилегиями, интерполируемые оболочкой, на помощников `spawn`/`execFile` на основе аргументов для установки базы данных, команд Tailscale sudo, редактирования DNS MITM и установки/удаления сертификатов.
- **fix(ui):** Сохранить иконки провайдеров устойчивыми, используя сначала прямые компоненты `@lobehub/icons`, затем локальные PNG/SVG-резервные копии, избегая времени выполнения `@lobehub/ui` в панели управления.

- **Ollama Cloud 401 Error**: Исправлена неверная базовая URL-адреса API — изменена с `api.ollama.com` на официальный `ollama.com/v1/chat/completions` (#643)
- **Expired Token Retry**: Добавлен повтор с ограниченным временем ожидания и экспоненциальным затуханием (5→10→20 мин) для истекших OAuth-соединений вместо их постоянного пропуска (PR #647)

### 🧪 Tests

- **936 tests, 0 failures**

---
```

---

---

## [3.1.0] — 2026-03-26

### ✨ Новые функции

- **feat(docs):** интеграция многостраничной документации в панель управления OmniRoute (#1969)
- **feat(settings):** добавление настройки лимита тела запроса (#1968)
- **feat(auth):** добавление значения по умолчанию для секретного ключа OAuth-клиента Gemini CLI (#1974)
- **feat(models):** предоставление контекстных окон моделей.dev в /v1/models (#1972)
- **fix(db):** устранение проблемы с резервным шифрованием, вызывающим циклы повторного шифрования (#1941)
- **fix(auth):** исправление очистки ответа final_answer для помощника Codex (#1965)

- **feat(providers):** Реализация возможностей генерации и редактирования изображений для ChatGPT Web, включая генерацию изображений в чате и кэширование (#1606).
- **feat(ui):** Интеграция логотипа SVG инструмента OpenCode Zen/Go API и улучшение взаимодействий с API-ключами (#1607).

- **feat(providers):** Интеграция AgentRouter в качестве нового провайдера, совместимого с OpenAI, с $200 бесплатных кредитов при регистрации (Issue #1572).
- **feat(ui):** Реализация тестирования моделей по запросу в панели управления провайдерами, позволяющее выполнять диагностические проверки с одним токеном без триггера лимитов скорости (Issue #1532).

- **Шаблоны GitHub Issues**: Добавлены стандартизированные шаблоны для отчетов об ошибках, запросов на функции и проблем с конфигурацией/прокси (#641)
- **Очистка всех моделей**: Добавлена кнопка "Очистить все модели" на странице деталей провайдера с поддержкой i18n на 29 языках (#634)

### 🐛 Исправления ошибок

- **fix(mitm):** Компиляция утилит MITM как NodeNext ESM во время prepublish, копирование сервера MITM CommonJS в автономный артефакт и разрешение путей данных MITM без зависимости от псевдонимов Next.js в пакетированном времени выполнения.
- **fix(build):** Перемещение локального префикса Wine `.tmp/wine32` вне пути сборки Next.js, чтобы артефакты упаковки Windows Electron не вызывали сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Копирование каталога `wreq-js` в изолированный выходной каталог Next.js, чтобы пакетированные Playwright/E2E могли загружать хук инструментации на Linux.
- **fix(api):** Валидация вебсокет-моста Codex Responses и JSON-полезной нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую валидацию маршрута `request.json()` и возвращая явные 400-ответы для недопустимых тел.
- **fix(providers):** Добавление явного типизирования для помощников псевдонимов и категорий провайдеров, чтобы пройти шлюз `typecheck:noimplicit:core` CI.
- **fix(ui):** Сохранение страницы деталей провайдера прокси-сервера с меткой "Управляется через настройки прокси-сервера" при отсутствии переводов.
- **fix(electron):** Укрепление CSP для рабочей среды путем удаления `unsafe-eval` вне разработки и добавления ограничений для объектов, URI базы, действий формы, предков фрейма и рабочих процессов.
- **fix(cli):** Замена интерполированных оболочкой путей установки и выполнения привилегированных команд на помощников `spawn`/`execFile` с аргументами для установки базы данных, команд Tailscale sudo, редактирования DNS MITM и установки/удаления сертификатов.
- **fix(ui):** Поддержка иконок провайдеров с использованием компонентов `@lobehub/icons` напрямую, затем резервных PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели управления.

- **Конфликт локалей (`in.json`)**: Переименование файла локали на хинди с `in.json` (ISO-код Индонезии) на `hi.json` для исправления конфликтов переводов в Weblate (#642)
- **Пустые имена инструментов Codex**: Перемещение очистки имен инструментов перед нативным пропуском Codex, исправление ошибок 400 от провайдеров вышестоящего уровня при пустых именах инструментов (#637)
- **Артефакты потоковых символов новой строки**: Добавление `collapseExcessiveNewlines` в очиститель ответов, сжатие последовательностей из 3+ новых строк от моделей мышления в стандартные двойные новые строки (#638)
- **Усилия рассуждений Claude**: Преобразование параметра `reasoning_effort` OpenAI в нативный блок `thinking` бюджета Claude по всем путям запросов, включая автоматическое регулирование `max_tokens` (#627)
- **Обновление токена Qwen**: Реализация проактивного обновления OAuth-токенов до истечения срока действия (с запасом 5 минут), чтобы предотвратить сбои запросов при использовании короткоживущих токенов (#631)

### 🧪 Тесты

- **936 тестов, 0 сбоев** (+10 тестов с момента 3.0.9)

---

---

---

## [3.0.9] — 2026-03-26

### 🐛 Исправления ошибок

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать сервер CommonJS MITM в автономный артефакт и разрешать пути данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать каталог `wreq-js` в изолированный выходной каталог Next.js, чтобы упакованные запуски Playwright/E2E могли загрузить хук инструментации на Linux.
- **fix(api):** Проверять вебсокет-мост Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленый маршрут проверки `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавить явное типизирование для помощников псевдонимов и категорий поставщиков, чтобы строгий шлюз `typecheck:noimplicit:core` CI прошел.
- **fix(ui):** Сохранить страницу деталей поставщика прокси-сервера вверху с меткой резервного копирования "Управляется через настройки прокси-сервера вверху" при отсутствии переводов.
- **fix(electron):** Усилить CSP рабочего стола в производстве, удалив `unsafe-eval` вне разработки и добавив ограничения объекта, базового URI, действия формы, предка фрейма и рабочего.
- **fix(cli):** Заменить пути установки и выполнения привилегированных команд с интерполяцией оболочки на помощников `spawn`/`execFile` на основе аргументов для настройки базы данных, команд sudo Tailscale, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранить значки поставщиков устойчивыми, используя сначала компоненты `@lobehub/icons`, затем локальные резервные копии PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели инструментов.

- **NaN токены в ответах Claude Code / клиента (#617):**
  - `sanitizeUsage()` теперь перекрестно отображает `input_tokens`→`prompt_tokens` и `output_tokens`→`completion_tokens` перед фильтром белого списка, исправляя ответы, показывающие NaN/0 счетчики токенов, когда поставщики возвращают имена полей использования в стиле Claude

### 🔒 Безопасность

- Обновлен пакет `yaml` для исправления уязвимости переполнения стека (GHSA-48c2-rrv3-qjmp)

### 📋 Трайаж вопросов

- Закрыто #613 (Codestral — решено с помощью обходного пути Custom Provider)
- Прокомментировано #615 (OpenCode dual-endpoint — предоставлен обходной путь, отслеживается как запрос на функцию)
- Прокомментировано #618 (видимость вызова инструмента — запрос теста v3.0.9)
- Прокомментировано #627 (уровень усилий — уже поддерживается)

---

---

---

## [3.0.8] — 2026-03-25

### 🐛 Исправления ошибок

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать сервер CommonJS MITM в автономный артефакт и разрешать пути данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать каталог `wreq-js` в изолированный выходной каталог Next.js, чтобы упакованные запуски Playwright/E2E могли загрузить хук инструментации на Linux.
- **fix(api):** Проверять вебсокет-мост Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленый маршрут проверки `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавить явное типизирование для помощников псевдонимов и категорий поставщиков, чтобы строгий шлюз `typecheck:noimplicit:core` CI прошел.
- **fix(ui):** Сохранить страницу деталей поставщика прокси-сервера вверху с меткой резервного копирования "Управляется через настройки прокси-сервера вверху" при отсутствии переводов.
- **fix(electron):** Усилить CSP рабочего стола в производстве, удалив `unsafe-eval` вне разработки и добавив ограничения объекта, базового URI, действия формы, предка фрейма и рабочего.
- **fix(cli):** Заменить пути установки и выполнения привилегированных команд с интерполяцией оболочки на помощники `spawn`/`execFile` на основе аргументов для настройки базы данных, команд sudo Tailscale, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранить значки поставщиков устойчивыми, используя сначала компоненты `@lobehub/icons`, затем локальные резервные копии PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели инструментов.

- **Ошибки перевода для поставщиков в формате OpenAI в CLI Claude (#632):**
  - Обработка формата массива `reasoning_details[]` из StepFun/OpenRouter — преобразуется в `reasoning_content`
  - Обработка поля `reasoning` из некоторых поставщиков → нормализовано в `reasoning_content`
  - Перекрестное отображение имен полей использования: `input_tokens`↔`prompt_tokens`, `output_tokens`↔`completion_tokens` в `filterUsageForFormat`
  - Исправление `extractUsage` для принятия как `input_tokens`/`output_tokens`, так и `prompt_tokens`/`completion_tokens` в качестве допустимых полей использования
  - Применено как к потоковой (`sanitizeStreamingChunk`, `openai-to-claude.ts` переводчик), так и к не потоковой (`sanitizeMessage`) путям

---

---

---

## [3.0.7] — 2026-03-25

### 🐛 Исправления ошибок

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, скопировать сервер MITM CommonJS в автономный артефакт и разрешить пути данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс `.tmp/wine32` Wine из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать каталог нативного времени выполнения `wreq-js` в изолированный выходной каталог Next.js, чтобы упакованные Playwright/E2E могли загрузить хук инструментации на Linux.
- **fix(api):** Проверять вебсокетный мост Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую проверку маршрута `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавить явное типизирование для помощников псевдонимов и категорий поставщиков, чтобы строгий `typecheck:noimplicit:core` CI-шлюз прошел.
- **fix(ui):** Сохранить страницу деталей поставщика прокси-сервера с меткой "Управляется через настройки прокси-сервера" при отсутствии переводов.
- **fix(electron):** Укрепление CSP для рабочей среды путем удаления `unsafe-eval` за пределами разработки и добавления ограничений объекта, базового URI, действия формы, предка фрейма и рабочего процесса.
- **fix(cli):** Заменить пути установки и выполнения привилегированных команд с помощью интерполированных оболочек на помощников `spawn`/`execFile` на основе аргументов для настройки базы данных, команд Tailscale sudo, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранить иконки поставщиков устойчивыми, используя сначала прямые компоненты `@lobehub/icons`, затем локальные резервные копии PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели управления.

- **Обновление токена Antigravity:** Исправлена ошибка `client_secret is missing` для пользователей, установивших npm — `clientSecretDefault` был пустым в providerRegistry, что приводило к отказу Google в обновлении токенов (#588)
- **Модели OpenCode Zen:** Добавлен `modelsUrl` в запись реестра OpenCode Zen, чтобы "Импорт из /models" работал правильно (#612)
- **Потоковые артефакты:** Исправлены избыточные новые строки, оставшиеся в ответах после удаления подписи тега thinking (#626)
- **Резервный прокси:** Добавлено автоматическое повторение без прокси при сбое реле SOCKS5
- **Тест прокси:** Тестовый конечный пункт теперь разрешает реальные учетные данные из БД через proxyId

### ✨ Новые функции

- **feat(docs):** интеграция многостраничной документации в панели OmniRoute (#1969)
- **feat(settings):** добавление настройки лимита тела запроса (#1968)
- **feat(auth):** добавление клиентского секрета OAuth по умолчанию для CLI Gemini (#1974)
- **feat(models):** предоставление контекстных окон моделей в /v1/models (#1972)
- **fix(db):** исправление резервного варианта шифрования, вызывающего циклы повторного шифрования (#1941)
- **fix(auth):** исправление очистки ответа final_answer для помощника Codex (#1965)

- **feat(providers):** Реализована возможность генерации и редактирования изображений для ChatGPT Web, включая встроенную генерацию изображений в чате и кэширование (#1606).
- **feat(ui):** Интеграция SVG-логотипа OpenCode Zen/Go API и улучшение взаимодействий копирования API-ключа в буфер обмена (#1607).

- **feat(providers):** Интеграция AgentRouter в качестве нового поставщика, совместимого с OpenAI, с бесплатными кредитами в размере $200 при регистрации (Проблема #1572).
- **feat(ui):** Реализована проверка моделей по запросу в панели поставщиков, позволяющая выполнять диагностические проверки с одним токеном без срабатывания ограничений скорости (Проблема #1532).

- **Селектор учетной записи/ключа Playground:** Постоянный, всегда видимый выпадающий список для выбора конкретных учетных записей/ключей поставщиков для тестирования — получает все соединения при запуске и фильтрует по выбранному поставщику
- **Динамические модели инструментов CLI:** Выбор модели теперь динамически получает из API `/v1/models` — поставщики, такие как Kiro, теперь показывают полный каталог моделей
- **Список моделей Antigravity:** Обновлен с Claude Sonnet 4.5, Claude Sonnet 4, GPT 5, GPT 5 Mini; включены `passthroughModels` для динамического доступа к моделям (#628)

### 🔧 Обслуживание

- Объединен PR #625 — Исправление фона ограничений поставщиков в светлом режиме

---

---

## [3.0.6] — 2026-03-25

### 🐛 Исправления ошибок

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать сервер CommonJS MITM в автономный артефакт и разрешать пути данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс `.tmp/wine32` Wine из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать каталог нативного времени выполнения `wreq-js` в изолированный выходной каталог Next.js standalone, чтобы упакованные Playwright/E2E могли загрузить хук инструментации на Linux.
- **fix(api):** Проверять вебсокет-мост ответов Codex и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую проверку `request.json()` и возвращая явные 400 ответы для недопустимых тел.
- **fix(providers):** Добавить явную типизацию помощникам псевдонимов и категорий поставщиков, чтобы строгий `typecheck:noimplicit:core` CI-шлюз прошел.
- **fix(ui):** Сохранить страницу деталей поставщика прокси-сервера с меткой "Управляется через настройки прокси-сервера" при отсутствии переводов.
- **fix(electron):** Укрепить CSP для рабочей среды, удалив `unsafe-eval` вне разработки и добавив ограничения для объектов, базового URI, действия формы, предка фрейма и рабочего процесса.
- **fix(cli):** Заменить пути команд установки и выполнения с интерполяцией оболочки на помощники `spawn`/`execFile` на основе аргументов для настройки базы данных, команд sudo Tailscale, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранить устойчивость значков поставщиков, используя сначала компоненты `@lobehub/icons`, затем локальные резервные копии PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели управления.

- **Limits/Proxy:** Исправлено получение лимитов Codex для аккаунтов за SOCKS5-прокси — обновление токена теперь выполняется в контексте прокси.
- **CI:** Исправлено несоответствие утверждения `v1/models` в тестах интеграции в средах CI без подключения поставщиков.
- **Settings:** Кнопка тестирования прокси теперь сразу показывает результаты успеха/неудачи (ранее скрытые за данными о состоянии).

### ✨ Новые функции

- **feat(docs):** интегрировать многостраничную документацию в панель управления OmniRoute (#1969).
- **feat(settings):** добавить настройку лимита тела запроса (#1968).
- **feat(auth):** добавить стандартный секрет клиента OAuth Gemini CLI (#1974).
- **feat(models):** открыть контекстные окна models.dev в /v1/models (#1972).
- **fix(db):** решить проблему с резервным шифрованием, вызывающей циклы повторного шифрования (#1941).
- **fix(auth):** исправить очистку ответов final_answer ассистента Codex (#1965).

- **feat(providers):** Реализовать возможности генерации и редактирования изображений для ChatGPT Web, включая генерацию изображений в чате и кэширование (#1606).
- **feat(ui):** Интегрировать логотип SVG OpenCode Zen/Go API и улучшить взаимодействие копирования API-ключа в буфер обмена (#1607).

- **feat(providers):** Интегрировать AgentRouter в качестве нового поставщика, совместимого с OpenAI, с $200 бесплатных кредитов при регистрации (Issue #1572).
- **feat(ui):** Реализовать тестирование по запросу для каждой модели в панели управления поставщиками, позволяющее выполнять диагностические проверки с одним токеном без триггера лимитов скорости (Issue #1532).

- **Playground:** Добавлен выпадающий список выбора аккаунта — тестировать конкретные подключения отдельно, когда у поставщика несколько аккаунтов.

### 🔧 Обслуживание

- Объединен PR #623 — Исправление базового URL-пути API LongCat.

---

---

## [3.0.5] — 2026-03-25

### ✨ New Features

- **feat(docs):** интеграция многостраничной документации в панель управления OmniRoute (#1969)
- **feat(settings):** добавление настройки лимита тела запроса (#1968)
- **feat(auth):** добавление значения по умолчанию для клиентского секрета OAuth Gemini CLI (#1974)
- **feat(models):** предоставление контекстных окон моделей.dev в /v1/models (#1972)
- **fix(db):** исправление ошибки с резервным шифрованием, вызывающей циклы повторного шифрования (#1941)
- **fix(auth):** исправление очистки ответа final_answer для помощника Codex (#1965)

- **feat(providers):** Реализация возможностей генерации и редактирования изображений для ChatGPT Web, включая генерацию изображений в чате и кэширование (#1606).
- **feat(ui):** Интеграция SVG-логотипа инструмента OpenCode Zen/Go API и улучшение взаимодействий с API-ключом при копировании в буфер обмена (#1607).

- **feat(providers):** Интеграция AgentRouter в качестве нового провайдера, совместимого с OpenAI, с бесплатными кредитами в размере $200 при регистрации (Issue #1572).
- **feat(ui):** Реализация тестирования моделей по запросу в панели управления провайдерами, позволяющее выполнять диагностические проверки с одним токеном без триггера лимитов скорости (Issue #1532).

- **Limits UI:** Добавлена функция группировки тегов в панели управления подключениями для улучшения визуальной организации для аккаунтов с пользовательскими тегами.

---

---

---

## [3.0.4] — 2026-03-25

### 🐛 Bug Fixes

- **fix(mitm):** Компиляция утилит MITM как NodeNext ESM во время prepublish, копирование сервера MITM CommonJS в автономный артефакт и разрешение путей данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Перемещение локального префикса Wine `.tmp/wine32` за пределы изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не вызывали сканирования `EACCES` во время сборки Node 24.
- **fix(build):** Копирование каталога `wreq-js` в изолированный выходной каталог Next.js, чтобы упакованные Playwright/E2E могли загружать хук инструментации на Linux.
- **fix(api):** Валидация вебсокет-моста Codex Responses и JSON-полезной нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую валидацию `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавление явного типирования для помощников псевдонимов и категорий провайдеров, чтобы строгий `typecheck:noimplicit:core` CI-шлюз прошел.
- **fix(ui):** Поддержание страницы деталей провайдера прокси-сервера с меткой "Управляется через настройки прокси-сервера" при отсутствии переводов.
- **fix(electron):** Укрепление CSP для рабочей среды путем удаления `unsafe-eval` вне разработки и добавления ограничений для объектов, базового URI, действия формы, предка фрейма и рабочего процесса.
- **fix(cli):** Замена интерполированных оболочкой путей установки и привилегированных команд на помощников `spawn`/`execFile` на основе аргументов для настройки базы данных, команд Tailscale sudo, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Поддержание устойчивости значков провайдеров с использованием компонентов `@lobehub/icons` напрямую, а затем резервных PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели управления.

- **Streaming:** Исправление повреждения состояния `TextDecoder` внутри комбинированного потока `sanitize`, которое вызвало искажение вывода SSE, соответствующее многобайтовым символам (PR #614)
- **Providers UI:** Безопасный рендеринг HTML-тегов внутри подсказок об ошибках подключения провайдера с использованием `dangerouslySetInnerHTML`
- **Proxy Settings:** Добавлены отсутствующие свойства `username` и `password` в тело полезной нагрузки, позволяющие успешно проверять аутентифицированные прокси из панели управления.
- **Provider API:** Ограничение мягких исключений возврата для `getCodexUsage`, предотвращающее сбои API HTTP 500 при сбое получения токена

---

---

## [3.0.3] — 2026-03-25

### ✨ New Features

- **feat(docs):** интеграция многостраничной документации в панель управления OmniRoute (#1969)
- **feat(settings):** добавление настройки лимита тела запроса (#1968)
- **feat(auth):** добавление значения по умолчанию для секрета OAuth-клиента Gemini CLI (#1974)
- **feat(models):** предоставление контекстных окон моделей.dev в /v1/models (#1972)
- **fix(db):** устранение проблемы с резервным шифрованием, вызывающей циклы повторного шифрования (#1941)
- **fix(auth):** исправление очистки ответов final_answer для помощника Codex (#1965)

- **feat(providers):** Реализация возможностей генерации и редактирования изображений для ChatGPT Web, включая генерацию изображений в чате и кэширование (#1606).
- **feat(ui):** Интеграция SVG-логотипа инструмента OpenCode Zen/Go API и улучшение взаимодействий копирования API-ключа в буфер обмена (#1607).

- **feat(providers):** Интеграция AgentRouter в качестве нового провайдера, совместимого с OpenAI, с $200 бесплатных кредитов при регистрации (Issue #1572).
- **feat(ui):** Реализация тестирования моделей по запросу в панели управления провайдерами, позволяющее выполнять диагностические проверки с одним токеном без срабатывания ограничений скорости (Issue #1532).

- **Auto-Sync Models:** Добавлен переключатель UI и конечная точка `sync-models` для автоматической синхронизации списков моделей по провайдерам с использованием планировщика интервалов (PR #597)

### 🐛 Bug Fixes

- **fix(mitm):** Компиляция утилит MITM как NodeNext ESM во время prepublish, копирование сервера MITM CommonJS в автономный артефакт и разрешение путей данных MITM без зависимости от псевдонимов Next.js в пакетированном времени выполнения.
- **fix(build):** Перемещение локального префикса Wine `.tmp/wine32` вне пути сборки Next.js, чтобы артефакты упаковки Windows Electron не вызывали сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Копирование каталога `wreq-js` в изолированный выходной каталог Next.js, чтобы пакетированные Playwright/E2E могли загружать хук инструментации на Linux.
- **fix(api):** Валидация вебсокет-моста ответов Codex и JSON-полезной нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую валидацию маршрута `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавление явного типизирования помощникам псевдонимов и категорий провайдеров, чтобы шлюз `typecheck:noimplicit:core` CI прошел.
- **fix(ui):** Сохранение страницы деталей провайдера прокси-сервера с меткой "Управляется через настройки прокси-сервера" при отсутствии переводов.
- **fix(electron):** Укрепление CSP для рабочей версии десктопа путем удаления `unsafe-eval` вне разработки и добавления ограничений объекта, базового URI, действия формы, предка фрейма и рабочего процесса.
- **fix(cli):** Замена интерполированных оболочкой путей установки и привилегированных команд на помощников `spawn`/`execFile` на основе аргументов для установки базы данных, команд Tailscale sudo, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранение иконок провайдеров устойчивыми путем использования компонентов `@lobehub/icons` напрямую, а затем резервных локальных PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели управления.

- **Timeouts:** Повышение значений по умолчанию `FETCH_TIMEOUT_MS` и `STREAM_IDLE_TIMEOUT_MS` для прокси-серверов до 10 минут для правильной поддержки моделей глубокого анализа (например, o1) без прерывания запросов (Исправляет #609)
- **CLI Tool Detection:** Улучшенное кросс-платформенное обнаружение путей NVM, обработка `PATHEXT` в Windows (предотвращение проблемы оболочек `.cmd`) и пользовательские префиксы NPM (PR #598)
- **Streaming Logs:** Реализация накопления дельт `tool_calls` в потоковых журналах ответов для точного отслеживания и сохранения вызовов функций в БД (PR #603)
- **Model Catalog:** Удалено исключение аутентификации, правильное скрытие моделей `comfyui` и `sdwebui` при отсутствии явно настроенного провайдера (PR #599)

### 🌐 Translations

- **cs:** Улучшены строки перевода на чешский язык по всему приложению (PR #601)

---

---

## [3.0.2] — 2026-03-25

### 🚀 Улучшения и новые функции

#### feat(ui): Группировка тегов подключений

- Добавлено поле Tag/Group в `EditConnectionModal` (хранится в `providerSpecificData.tag`) без необходимости миграций схемы БД.
- Подключения в представлении провайдера теперь динамически группируются по тегам с визуальными разделителями.
- Непомеченные подключения появляются первыми без заголовка, за которыми следуют группы с тегами в алфавитном порядке.
- Группировка по тегам автоматически применяется к разделу Codex/Copilot/Antigravity Limits, так как переключатели существуют внутри строк подключений.

### 🐛 Исправления ошибок

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, скопировать сервер MITM CommonJS в автономный артефакт и разрешить пути данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать каталог `wreq-js` в изолированный выходной каталог Next.js, чтобы упакованные Playwright/E2E могли загрузить хук инструментации на Linux.
- **fix(api):** Проверять вебсокет-мост Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленый маршрут `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавить явное типизирование для помощников псевдонимов и категорий провайдеров, чтобы строгий `typecheck:noimplicit:core` прошел в CI.
- **fix(ui):** Сохранять иконки провайдеров устойчивыми, используя сначала компоненты `@lobehub/icons`, затем локальные резервные копии PNG/SVG, избегая `@lobehub/ui` в рантайме панели управления.
- **fix(electron):** Укрепление CSP для рабочей среды, удаление `unsafe-eval` за пределами разработки и добавление ограничений объектов, базового URI, действия формы, предка фрейма и рабочего процесса.
- **fix(cli):** Заменить пути установки и выполнения привилегированных команд, интерполируемых оболочкой, на помощники `spawn`/`execFile` на основе аргументов для установки базы данных, команд Tailscale sudo, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранять иконки провайдеров устойчивыми, используя сначала компоненты `@lobehub/icons`, затем локальные резервные копии PNG/SVG, избегая `@lobehub/ui` в рантайме панели управления.

#### fix(ui): Стабилизация интерфейса управления прокси

- **Отсутствующие значки на карточках подключений:** Исправлено использованием `resolveProxyForConnection()` вместо статического отображения.
- **Отключенная кнопка "Тест подключения" в сохраненном режиме:** Включена кнопка "Тест" путем разрешения конфигурации прокси из сохраненного списка.
- **Зависание модального окна конфигурации:** Добавлены вызовы `onClose()` после сохранения/очистки, чтобы предотвратить зависание интерфейса.
- **Двойное подсчет использования:** `ProxyRegistryManager` теперь загружает использование с дедупликацией по `scope` + `scopeId`. Счетчики использования заменены кнопкой "Тест", отображающей IP/задержку встроенно.

#### fix(translator): Удаление префикса `function_call`

- Восстановлено неполное исправление из PR #607, где только блоки `tool_use` удаляли префикс `proxy_` у инструментов Claude. Теперь клиенты, использующие формат OpenAI Responses API, также будут правильно получать инструменты без префикса `proxy_`.

---

---

## [3.0.1] — 2026-03-25

### 🔧 Hotfix Patch — Критические исправления ошибок

Три критические регрессии, сообщенные пользователями после запуска v3.0.0, были исправлены.

#### fix(translator): strip `proxy_` prefix in non-streaming Claude responses (#605)

Префикс `proxy_`, добавленный OAuth Claude, был удален только из **потоковых** ответов. В **непотоковом** режиме `translateNonStreamingResponse` не имел доступа к `toolNameMap`, из-за чего клиенты получали искаженные имена инструментов, такие как `proxy_read_file` вместо `read_file`.

**Исправление:** Добавлен необязательный параметр `toolNameMap` в `translateNonStreamingResponse` и применено удаление префикса в обработчике блока `tool_use` для Claude. `chatCore.ts` теперь передает карту через.

#### fix(validation): add LongCat specialty validator to skip /models probe (#592)

LongCat AI не предоставляет `GET /v1/models`. Общий валидатор `validateOpenAICompatibleProvider` перешел к резервному варианту чат-полноценных решений только в том случае, если был установлен `validationModelId`, который LongCat не настраивает. Это привело к тому, что проверка провайдера завершилась неудачей с несоответствующей ошибкой при добавлении/сохранении.

**Исправление:** Добавлен `longcat` в карту специализированных валидаторов, который напрямую проверяет `/chat/completions` и считает любой ответ без аутентификации успешным.

#### fix(translator): normalize object tool schemas for Anthropic (#595)

Инструменты MCP (например, `pencil`, `computer_use`) пересылают определения инструментов с `{type:"object"}` без поля `properties`. API Anthropic отклоняет эти схемами с сообщением: `object schema missing properties`.

**Исправление:** В `openai-to-claude.ts` внедрена `properties: {}` в качестве безопасного значения по умолчанию, когда `type` равен `"object"` и `properties` отсутствует.

---

### 🔀 Community PRs Merged (2)

| PR       | Author  | Summary                                                                                  |
| -------- | ------- | ---------------------------------------------------------------------------------------- |
| **#589** | @flobo3 | docs(i18n): исправлена русская локализация для Playground и Testbed                      |
| **#591** | @rdself | fix(ui): улучшена контрастность и отображение плана в светлом режиме для Provider Limits |

---

### ✅ Issues Resolved

`#592` `#595` `#605`

---

### 🧪 Tests

- **926 tests, 0 failures** (не изменилось с v3.0.0)

---

---

---

## [3.0.0] — 2026-03-24

### 🎉 OmniRoute v3.0.0 — The Free AI Gateway, Now with 67+ Providers

> **Самый крупный релиз когда-либо.** От 36 провайдеров в v2.9.5 до **67+ провайдеров** в v3.0.0 — с MCP Server, A2A Protocol, авто-комбо движком, Provider Icons, Registered Keys API, 926 тестами и вкладом **12 сообщества** через **10 объединенных PR**.
>
> Объединено из v3.0.0-rc.1 через rc.17 (17 кандидатов на выпуск за 3 дня интенсивной разработки).

---

### 🆕 New Providers (+31 since v2.9.5)

| Provider                      | Alias           | Tier        | Notes                                                                                    |
| ----------------------------- | --------------- | ----------- | ---------------------------------------------------------------------------------------- |
| **OpenCode Zen**              | `opencode-zen`  | Free        | 3 модели через `opencode.ai/zen/v1` (PR #530 by @kang-heewon)                            |
| **OpenCode Go**               | `opencode-go`   | Paid        | 4 модели через `opencode.ai/zen/go/v1` (PR #530 by @kang-heewon)                         |
| **LongCat AI**                | `lc`            | Free        | 50M токенов/день (Flash-Lite) + 500K/день (Chat/Thinking) во время публичной бета-версии |
| **Pollinations AI**           | `pol`           | Free        | Не требуется API-ключ — GPT-5, Claude, Gemini, DeepSeek V3, Llama 4 (1 запрос/15с)       |
| **Cloudflare Workers AI**     | `cf`            | Free        | 10K Neurons/день — ~150 ответов LLM или 500s Whisper аудио, edge inference               |
| **Scaleway AI**               | `scw`           | Free        | 1M бесплатных токенов для новых аккаунтов — EU/GDPR compliant (Paris)                    |
| **AI/ML API**                 | `aiml`          | Free        | $0.025/день бесплатных кредитов — 200+ моделей через один конечный пункт                 |
| **Puter AI**                  | `pu`            | Free        | 500+ моделей (GPT-5, Claude Opus 4, Gemini 3 Pro, Grok 4, DeepSeek V3)                   |
| **Alibaba Cloud (DashScope)** | `ali`           | Paid        | Международные + Китайские конечные точки через `alicode`/`alicode-intl`                  |
| **Alibaba Coding Plan**       | `bcp`           | Paid        | Alibaba Model Studio с совместимым API Anthropic                                         |
| **Kimi Coding (API Key)**     | `kmca`          | Paid        | Выделенный доступ к Kimi через API-ключ (отдельно от OAuth)                              |
| **MiniMax Coding**            | `minimax`       | Paid        | Международная конечная точка                                                             |
| **MiniMax (China)**           | `minimax-cn`    | Paid        | Китайская специфическая конечная точка                                                   |
| **Z.AI (GLM-5)**              | `zai`           | Paid        | Zhipu AI next-gen GLM модели                                                             |
| **Vertex AI**                 | `vertex`        | Paid        | Google Cloud — Service Account JSON или OAuth access_token                               |
| **Ollama Cloud**              | `ollamacloud`   | Paid        | Хостированный API-сервис Ollama                                                          |
| **Synthetic**                 | `synthetic`     | Paid        | Шлюз моделей с прямой передачей                                                          |
| **Kilo Gateway**              | `kg`            | Paid        | Шлюз моделей с прямой передачей                                                          |
| **Perplexity Search**         | `pplx-search`   | Paid        | Выделенный поисковый конечный пункт с учетом контекста                                   |
| **Serper Search**             | `serper-search` | Paid        | Интеграция API поиска в интернете                                                        |
| **Brave Search**              | `brave-search`  | Paid        | Интеграция API поиска Brave Search                                                       |
| **Exa Search**                | `exa-search`    | Paid        | Интеграция API нейросетевого поиска                                                      |
| **Tavily Search**             | `tavily-search` | Paid        | Интеграция API поиска с ИИ                                                               |
| **NanoBanana**                | `nb`            | Paid        | API генерации изображений                                                                |
| **ElevenLabs**                | `el`            | Paid        | Синтез голоса из текста                                                                  |
| **Cartesia**                  | `cartesia`      | Paid        | Ультрабыстрый синтез голоса из текста                                                    |
| **PlayHT**                    | `playht`        | Paid        | Клонирование голоса и синтез голоса из текста                                            |
| **Inworld**                   | `inworld`       | Paid        | Голосовой чат с ИИ-персонажами                                                           |
| **SD WebUI**                  | `sdwebui`       | Self-hosted | Локальная генерация изображений Stable Diffusion                                         |
| **ComfyUI**                   | `comfyui`       | Self-hosted | Локальная генерация на основе узлового рабочего процесса ComfyUI                         |
| **GLM Coding**                | `glm`           | Paid        | Кодинг-специфическая конечная точка BigModel/Zhipu                                       |

**Total: 67+ providers** (4 Free, 8 OAuth, 55 API Key) + unlimited OpenAI/Anthropic-Compatible custom providers.

---

### ✨ Major Features

#### 🔑 Registered Keys Provisioning API (#464)

Автоматическое создание и выдача API-ключей OmniRoute программным способом с учетом квот на провайдера и аккаунта.

| Endpoint                        | Method       | Description                                                           |
| ------------------------------- | ------------ | --------------------------------------------------------------------- |
| `/api/v1/registered-keys`       | `POST`       | Выпустить новый ключ — исходный ключ возвращается **только один раз** |
| `/api/v1/registered-keys`       | `GET`        | Список зарегистрированных ключей (замаскированных)                    |
| `/api/v1/registered-keys/{id}`  | `GET/DELETE` | Получить метаданные / Отозвать                                        |
| `/api/v1/quotas/check`          | `GET`        | Предварительная проверка квоты перед выдачей                          |
| `/api/v1/providers/{id}/limits` | `GET/PUT`    | Настроить лимиты выдачи на провайдера                                 |
| `/api/v1/accounts/{id}/limits`  | `GET/PUT`    | Настроить лимиты выдачи на аккаунт                                    |
| `/api/v1/issues/report`         | `POST`       | Сообщить о событиях квоты в GitHub Issues                             |

**Безопасность:** Ключи хранятся в виде хэшей SHA-256. Исходный ключ отображается только один раз при создании, больше не может быть извлечен.

#### 🎨 Provider Icons via @lobehub/icons (#529)

130+ логотипов провайдеров с использованием компонентов React `@lobehub/icons` (SVG). Цепочка резервных вариантов: **Lobehub SVG → существующий PNG → универсальная иконка**. Применено на страницах Dashboard, Providers и Agents с использованием стандартизированного компонента `ProviderIcon`.

#### 🔄 Model Auto-Sync Scheduler (#488)

Автоматически обновляет списки моделей для подключенных провайдеров каждые **24 часа**. Запускается при запуске сервера. Настраивается через `MODEL_SYNC_INTERVAL_HOURS`.

#### 🔀 Per-Model Combo Routing (#563)

Сопоставляет шаблоны имен моделей (glob) с конкретными комбо для автоматического маршрутизации:

- `claude-sonnet*` → code-combo, `gpt-4o*` → openai-combo, `gemini-*` → google-combo
- Новая таблица `model_combo_mappings` с сопоставлением glob-to-regex
- Раздел в интерфейсе: "Правила маршрутизации моделей" с возможностью добавления/редактирования/переключения/удаления встроенными

#### 🧭 API Endpoints Dashboard

Интерактивный каталог, управление вебхуками, просмотр OpenAPI — все в одной вкладке на `/dashboard/endpoint`.

#### 🔍 Web Search Providers

5 новых интеграций поисковых провайдеров: **Perplexity Search**, **Serper**, **Brave Search**, **Exa**, **Tavily** — для обеспечения ИИ-ответов с учетом реальных данных из интернета.

#### 📊 Search Analytics

Новая вкладка в `/dashboard/analytics` — разбивка по провайдерам, процент попаданий в кэш, отслеживание затрат. API: `GET /api/v1/search/analytics`.

#### 🛡️ Per-API-Key Rate Limits (#452)

`max_requests_per_day` и `max_requests_per_minute` столбцы с применением скользящего окна в памяти для выполнения с возвратом HTTP 429.

#### 🎵 Media Playground

Полноценный медиа-плейграунд на `/dashboard/media`: Генерация изображений, видео, музыки, транскрипция аудио (лимит загрузки 2ГБ) и синтез текста в речь.

---

### 🔒 Security & CI/CD

- **CodeQL remediation** — Исправлено 10+ предупреждений: 6 polynomial-redos, 1 insecure-randomness (`Math.random()` → `crypto.randomUUID()`), 1 shell-command-injection
- **Route validation** — Схемы Zod + `validateBody()` на **176/176 API маршрутах** — CI enforced
- **CVE fix** — Уязвимость XSS в dompurify (GHSA-v2wj-7wpq-c8vv) решена через npm overrides
- **Flatted** — Обновлено 3.3.3 → 3.4.2 (CWE-1321 prototype pollution)
- **Docker** — Обновлено `docker/setup-buildx-action` v3 → v4

---

### 🐛 Bug Fixes (40+)

- **fix(mitm):** Компиляция утилит MITM как NodeNext ESM во время prepublish, копирование сервера MITM CommonJS в автономный артефакт и разрешение путей данных MITM без зависимости от псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Перемещение локального `.tmp/wine32` префикса Wine вне пути изолированной сборки Next.js, чтобы артефакты упаковки Electron для Windows не вызывали `EACCES` сканирования во время сборки Node 24.
- **fix(build):** Копирование каталога времени выполнения `wreq-js` в изолированный выходной каталог Next.js standalone, чтобы упакованные Playwright/E2E могли загружать хук инструментации.
- **fix(api):** Валидация вебсокет-моста Codex Responses и `/v1/batches` JSON-полезной нагрузки с помощью Zod перед использованием, сохраняя `request.json()` маршрут валидации зеленым и возвращая явные 400 ответы для недопустимых тел.
- **fix(providers):** Добавление явного типирования для помощников псевдонимов и категорий провайдеров, чтобы строгий `typecheck:noimplicit:core` CI gate прошел.
- **fix(ui):** Поддержка иконок провайдеров с использованием компонентов `@lobehub/icons` напрямую, затем локальных PNG/SVG резервных вариантов, избегая `@lobehub/ui` peer runtime в dashboard.
- **fix(electron):** Укрепление CSP для рабочего стола в производстве путем удаления `unsafe-eval` вне разработки и добавления ограничений объекта, базового URI, действия формы, предка фрейма и рабочего.
- **fix(cli):** Замена интерполированных оболочкой путей установки и привилегированных команд выполнения с помощью помощников `spawn`/`execFile` на основе аргументов для установки базы данных, команд sudo Tailscale, редактирования DNS MITM и установки/удаления сертификатов.

#### OAuth & Auth

- **#537** — Gemini CLI OAuth: ясная ошибка при отсутствии `GEMINI_OAUTH_CLIENT_SECRET` в Docker
- **#549** — Маршруты настроек CLI теперь разрешают реальный API-ключ из `keyId` (а не замаскированные строки)
- **#574** — Вход больше не зависает после пропуска настройки пароля в мастере
- **#506** — Переписанный `machineId` для кроссплатформенности (Windows REG.exe → macOS ioreg → Linux → резервный вариант hostname)

#### Providers & Routing

- **#536** — Исправлен `baseUrl` и `authHeader` для LongCat AI
- **#535** — Переопределение закрепленной модели: `body.model` правильно установлен в `pinnedModel`
- **#570** — Модели Claude без префикса теперь разрешаются в провайдере Anthropic
- **#585** — Внутренние теги `<omniModel>` больше не утекают к клиентам в потоковом SSE
- **#493** — Название модели пользовательского провайдера больше не искажается удалением префикса
- **#490** — Защита потокового контекста кэша через `TransformStream` инъекцию
- **#511** — Тег `<omniModel>` внедрен в первый фрагмент содержимого (а не после `[DONE]`)

#### CLI & Tools

- **#527** — Цикл Claude Code + Codex: блоки `tool_result` теперь преобразованы в текст
- **#524** — Конфигурация OpenCode сохранена правильно (XDG_CONFIG_HOME, формат TOML)
- **#522** — Менеджер API: удалена кнопка "Копировать замаскированный ключ"
- **#546** — `--version` возвращает `unknown` в Windows (PR by @k0valik)
- **#544** — Безопасное обнаружение инструментов CLI через известные пути установки (PR by @k0valik)
- **#510** — Автоматическая нормализация путей Windows MSYS2/Git-Bash
- **#492** — CLI обнаруживает Node, управляемый `mise`/`nvm`, когда `app/server.js` отсутствует

#### Streaming & SSE

- **PR #587** — Откат импорта `resolveDataDir` в responsesTransformer для совместимости с Cloudflare Workers (@k0valik)
- **PR #495** — Бесконечное ожидание Bottleneck 429: сброс ожидающих заданий при ограничении скорости (@xandr0s)
- **#483** — Остановка конечного `data: null` после сигнала `[DONE]`
- **#473** — Зомби SSE-потоки: тайм-аут уменьшен с 300s до 120s для более быстрого переключения

#### Media & Transcription

- **Транскрипция** — Deepgram `video/mp4` → `audio/mp4` сопоставление MIME, автоматическое определение языка, пунктуация
- **TTS** — Исправлено отображение ошибки `[object Object]` для ошибок ElevenLabs-стиля с вложенными ошибками
- **Лимиты загрузки** — Транскрипция медиа увеличена до 2ГБ (nginx `client_max_body_size 2g` + `maxDuration=300`)

---

### 🔧 Infrastructure & Improvements

#### Sub2api Gap Analysis (T01–T15 + T23–T42)

- **T01** — Столбец `requested_model` в журналах вызовов (миграция 009)
- **T02** — Удаление пустых текстовых блоков из вложенных `tool_result.content`
- **T03** — Разбор заголовков квоты `x-codex-5h-*` / `x-codex-7d-*`
- **T04** — Заголовок `X-Session-Id` для внешнего липкого маршрутизации
- **T05** — Сохранение квот с ограничением скорости через выделенный API
- **T06** — Деактивированный аккаунт → постоянный блок (12-месячный период охлаждения)
- **T07** — Валидация IP X-Forwarded-For (`extractClientIp()`)
- **T08** — Лимиты сеанса на основе API-ключа с применением скользящего окна
- **T09** — Области ограничения скорости Codex vs Spark (отдельные пулы)
- **T10** — Квота исчерпана → отдельный резервный вариант 1h
- **T11** — `max` уровень рассуждений → 131072 бюджетных токенов
- **T12** — Записи о ценообразовании MiniMax M2.7
- **T13** — Исправление отображения устаревшей квоты (осведомленность о сбросе окна)
- **T14** — Быстрое сбоя TCP-прокси (≤2s, кэширование 30s)
- **T15** — Нормализация массива содержимого для Anthropic
- **T23** — Интеллектуальный сброс квоты резервный вариант (извлечение заголовков)
- **T24** — `503` период охлаждения + `406` сопоставление
- **T25** — Резервный вариант проверки провайдера
- **T29** — Аутентификация Vertex AI Service Account JWT
- **T33** — Преобразование уровня мышления в бюджетные токены
- **T36** — Классификация ошибок `403` vs `429`
- **T38** — Централизованные спецификации моделей (`modelSpecs.ts`)
- **T39** — Резервный конечный пункт для `fetchAvailableModels`
- **T41** — Автоматическое перенаправление фоновых задач для обновления моделей
- **T42** — Сопоставление соотношения сторон изображения для генерации

#### Other Improvements

- **Пользовательские заголовки на основе модели** — через интерфейс конфигурации (PR #575 by @zhangqiang8vip)
- **Длина контекста модели** — настраивается в метаданных модели (PR #578 by @hijak)
- **Удаление префикса модели** — опция для удаления префикса провайдера из имен моделей (PR #582 by @jay77721)
- **Устаревшая Gemini CLI** — помечена как устаревшая с предупреждением о ограничении OAuth Google
- **Парсер YAML** — заменен пользовательский парсер на `js-yaml` для корректного разбора спецификаций OpenAPI
- **ZWS v5** — Исправление утечки HMR (485 соединений с БД → 1, память 2.4GB → 195MB)
- **Экспорт логов** — Новая кнопка экспорта JSON на dashboard с выпадающим списком диапазона времени
- **Баннер уведомления об обновлении** — домашняя страница dashboard показывает, когда доступны новые версии

---

### 🌐 i18n & Documentation

- **30 языков** на 100% соответствие — 2,788 отсутствующих ключей синхронизированы
- **Чешский** — Полный перевод: 22 документа, 2,606 строк UI (PR by @zen0bit)
- **Китайский (zh-CN)** — Полный переведен (PR by @only4copilot)
- **Руководство по развертыванию VM** — Переведено на английский как исходный документ
- **Справочник API** — Добавлены конечные точки `/v1/embeddings` и `/v1/audio/speech`
- **Количество провайдеров** — Обновлено с 36+/40+/44+ до **67+** по всему README и всем 30 i18n READMEs

---

### 🔀 Community PRs Merged (10)

| PR       | Author          | Summary                                                                              |
| -------- | --------------- | ------------------------------------------------------------------------------------ |
| **#587** | @k0valik        | fix(sse): откат импорта resolveDataDir для совместимости с Cloudflare Workers compat |
| **#582** | @jay77721       | feat(proxy): опция удаления префикса имени модели                                    |
| **#581** | @jay77721       | fix(npm): связь electron-release с npm-publish workflow                              |
| **#578** | @hijak          | feat: настраиваемая длина контекста в метаданных модели                              |
| **#575** | @zhangqiang8vip | feat: заголовки провайдера на основе модели, совместимость PATCH, выравнивание чата  |
| **#562** | @coobabm        | fix: управление сеансами MCP, передача Claude, detectFormat                          |
| **#561** | @zen0bit        | fix(i18n): исправления чешского перевода                                             |
| **#555** | @k0valik        | fix(sse): централизованный `resolveDataDir()` для разрешения пути                    |
| **#546** | @k0valik        | fix(cli): `--version` возвращает `unknown` в Windows                                 |
| **#544** | @k0valik        | fix(cli): безопасное обнаружение инструментов CLI через пути установки               |
| **#542** | @rdself         | fix(ui): переменные CSS-темы для контрастности светлого режима                       |
| **#530** | @kang-heewon    | feat: провайдеры OpenCode Zen + Go с `OpencodeExecutor`                              |
| **#512** | @zhangqiang8vip | feat: совместимость моделей на основе протокола (`compatByProtocol`)                 |
| **#497** | @zhangqiang8vip | fix: утечки ресурсов HMR в режиме разработки (ZWS v5)                                |
| **#495** | @xandr0s        | fix: Бесконечное ожидание Bottleneck 429 (сброс ожидающих заданий)                   |
| **#494** | @zhangqiang8vip | feat: исправление роли разработчика→системы для MiniMax                              |
| **#480** | @prakersh       | fix: извлечение использования flush из потоков                                       |
| **#479** | @prakersh       | feat: записи о ценообразовании Codex 5.3/5.4 и Anthropic                             |
| **#475** | @only4copilot   | feat(i18n): улучшенный китайский перевод                                             |

**Спасибо всем участникам!** 🙏

---

### 📋 Issues Resolved (50+)

`#452` `#458` `#462` `#464` `#466` `#473` `#474` `#481` `#483` `#487` `#488` `#489` `#490` `#491` `#492` `#493` `#506` `#508` `#509` `#510` `#511` `#513` `#520` `#521` `#522` `#524` `#525` `#527` `#529` `#531` `#532` `#535` `#536` `#537` `#541` `#546` `#549` `#563` `#570` `#574` `#585`

---

### 🧪 Tests

- **926 tests, 0 failures** (увеличено с 821 в v2.9.5)
- +105 новых тестов, охватывающих: сопоставление моделей-combo, зарегистрированные ключи, OpencodeExecutor, провайдер Bailian, валидацию маршрутов, классификацию ошибок, сопоставление соотношения сторон и многое другое

---

### 📦 Database Migrations

| Migration | Description                                                            |
| --------- | ---------------------------------------------------------------------- |
| **008**   | таблицы `registered_keys`, `provider_key_limits`, `account_key_limits` |
| **009**   | столбец `requested_model` в `call_logs`                                |
| **010**   | таблица `model_combo_mappings` для маршрутизации на основе модели      |

---

### ⬆️ Upgrading from v2.9.5

```bash
# npm
npm install -g omniroute@3.0.0

# Docker
docker pull diegosouzapw/omniroute:3.0.0

# Миграции запускаются автоматически при первом запуске
```

> **Критические изменения:** Отсутствуют. Все существующие конфигурации, комбо и API-ключи сохранены.
> Миграции базы данных 008-010 запускаются автоматически при запуске.

---

---

---

## [3.0.0-rc.17] — 2026-03-24

### 🔒 Безопасность & CI/CD

- **CodeQL исправления** — Исправлено более 10 предупреждений:
  - 6 polynomial-redos в `provider.ts` / `chatCore.ts` (заменены `(?:^|/)` альтернативные шаблоны на сегментное сопоставление)
  - 1 insecure-randomness в `acp/manager.ts` (`Math.random()` → `crypto.randomUUID()`)
  - 1 shell-command-injection в `prepublish.mjs` (`JSON.stringify()` экранирование пути)
- **Route validation** — Добавлены Zod схемы + `validateBody()` для 5 маршрутов без валидации:
  - `model-combo-mappings` (POST, PUT), `webhooks` (POST, PUT), `openapi/try` (POST)
  - CI `check:route-validation:t06` теперь проходит: **176/176 маршрутов валидированы**

### 🐛 Исправления ошибок

- **fix(mitm):** Компилировать MITM утилиты как NodeNext ESM во время prepublish, скопировать CommonJS MITM сервер в автономный артефакт и разрешить пути данных MITM без зависимости от Next.js алиасов в упакованном времени выполнения.
- **fix(build):** Переместить локальный `.tmp/wine32` Wine префикс вне изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не вызывали сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать директорию `wreq-js` в изолированный выходной путь Next.js, чтобы упакованные Playwright/E2E могли загрузить хук инструментации на Linux.
- **fix(api):** Валидировать вебсокет-мост Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленый `request.json()` валидацию маршрутов и возвращая явные 400 ответы для неверных тел.
- **fix(providers):** Добавить явное типизирование для помощников псевдонимов и категорий провайдеров, чтобы пройти строгий `typecheck:noimplicit:core` CI gate.
- **fix(ui):** Сохранить страницу деталей провайдера апстрима с меткой "Управляется через настройки прокси апстрима", когда переводы недоступны.
- **fix(electron):** Укрепить CSP для рабочей версии десктопа, удалив `unsafe-eval` вне разработки и добавив ограничения для объектов, базового URI, действий формы, предков фрейма и воркеров.
- **fix(cli):** Заменить пути установки и выполнения привилегированных команд с помощью интерполяции оболочки на помощников `spawn`/`execFile` на основе аргументов для установки базы данных, команд Tailscale sudo, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранить иконки провайдеров устойчивыми, используя сначала компоненты `@lobehub/icons`, затем локальные PNG/SVG резервные копии, избегая времени выполнения `@lobehub/ui` в панели инструментов.

- **#585** — Внутренние теги `<omniModel>` больше не утекают к клиентам в ответах SSE. Добавлен поток `TransformStream` для очистки исходящих данных в `combo.ts`

### ⚙️ Инфраструктура

- **Docker** — Обновлено `docker/setup-buildx-action` с v3 → v4 (исправление устаревания Node.js 20)
- **CI очистка** — Удалено более 150 запусков рабочих процессов с ошибками/отменено

### 🧪 Тесты

- Набор тестов: **926 тестов, 0 неудач** (+3 новых)

---

---

---

## [3.0.0-rc.16] — 2026-03-24

### ✨ Новые функции

- **feat(docs):** интеграция многостраничной документации в панель OmniRoute (#1969)
- **feat(settings):** добавлена настройка лимита тела запроса (#1968)
- **feat(auth):** добавлен секрет клиента OAuth Gemini CLI по умолчанию (#1974)
- **feat(models):** отображение окон контекста models.dev в /v1/models (#1972)
- **fix(db):** исправление резервного варианта шифрования, вызывающего циклы повторного шифрования (#1941)
- **fix(auth):** исправление очистки ответов final_answer ассистента Codex (#1965)

- **feat(providers):** Реализована возможность генерации и редактирования изображений для ChatGPT Web, включая генерацию изображений в чате и кэширование (#1606).
- **feat(ui):** Интеграция SVG логотипа OpenCode Zen/Go API и улучшение взаимодействий копирования API-ключа в буфер обмена (#1607).

- **feat(providers):** Интеграция AgentRouter в качестве нового провайдера, совместимого с OpenAI, с $200 бесплатных кредитов при регистрации (Issue #1572).
- **feat(ui):** Реализована проверка моделей по запросу в панели провайдеров, позволяющая диагностические проверки с одним токеном без триггера лимитов скорости (Issue #1532).

- Увеличены лимиты транскрипции медиа
- Добавлена длина контекста модели в метаданные реестра
- Добавлены пользовательские заголовки для каждого модели через UI конфигурации
- Исправлены несколько ошибок, валидация Zod для патчей и решение различных проблем сообщества.

---

---

## [3.0.0-rc.15] — 2026-03-24

### ✨ New Features

- **feat(docs):** интеграция многостраничной документации в панель управления OmniRoute (#1969)
- **feat(settings):** добавление настройки лимита тела запроса (#1968)
- **feat(auth):** добавление значения по умолчанию для клиентского секрета OAuth Gemini CLI (#1974)
- **feat(models):** предоставление контекстных окон моделей.dev в /v1/models (#1972)
- **fix(db):** исправление проблемы с резервным шифрованием, вызывающим циклы повторного шифрования (#1941)
- **fix(auth):** исправление очистки ответа final_answer для помощника Codex (#1965)

- **feat(providers):** Реализация возможностей генерации и редактирования изображений для ChatGPT Web, включая генерацию изображений в чате и кэширование (#1606).
- **feat(ui):** Интеграция SVG-логотипа инструмента API OpenCode Zen/Go и улучшение взаимодействий с API-ключом для копирования в буфер обмена (#1607).

- **feat(providers):** Интеграция AgentRouter в качестве нового провайдера, совместимого с OpenAI, с $200 бесплатных кредитов при регистрации (Issue #1572).
- **feat(ui):** Реализация тестирования моделей по запросу в панели управления провайдером, позволяющее выполнять диагностические проверки с одним токеном без срабатывания лимитов скорости (Issue #1532).

- **#563** — Комбинированное маршрутизация по моделям: сопоставление шаблонов имен моделей (glob) с конкретными комбо для автоматического маршрутизации
  - Новая таблица `model_combo_mappings` (миграция 010) с полями pattern, combo_id, priority, enabled
  - Функция `resolveComboForModel()` в БД с преобразованием glob в регулярные выражения (регистронезависимое, `*` и `?` в качестве подстановочных знаков)
  - `getComboForModel()` в `model.ts`: дополняет `getCombo()` резервным сопоставлением шаблонов моделей
  - `chat.ts`: решение о маршрутизации теперь проверяет сопоставления моделей-комбо перед обработкой одной модели
  - API: `GET/POST /api/model-combo-mappings`, `GET/PUT/DELETE /api/model-combo-mappings/:id`
  - Панель управления: добавлен раздел "Правила маршрутизации моделей" на странице Комбо с возможностью добавления/редактирования/переключения/удаления
  - Примеры: `claude-sonnet*` → code-combo, `gpt-4o*` → openai-combo, `gemini-*` → google-combo

### 🌐 i18n

- **Полная синхронизация i18n**: добавлено 2,788 отсутствующих ключей в 30 языковых файлах — все языки теперь на 100% соответствуют `en.json`
- **i18n страницы агентов**: полностью интернационализированный раздел интеграции OpenCode (заголовок, описание, метки сканирования и загрузки)
- **6 новых ключей** добавлено в пространство имен `agents` для раздела OpenCode

### 🎨 UI/UX

- **Иконки провайдеров**: добавлено 16 отсутствующих иконок провайдеров (3 скопировано, 2 загружено, 11 создано в формате SVG)
- **Резервный SVG**: компонент `ProviderIcon` обновлен с 4-ступенчатой стратегией: Lobehub → PNG → SVG → общая иконка
- **Отпечатки агентов**: синхронизировано с инструментами CLI — добавлены droid, openclaw, copilot, opencode в список отпечатков (всего 14)

### 🔒 Security

- **Исправление CVE**: устранена уязвимость XSS в dompurify (GHSA-v2wj-7wpq-c8vv) через переопределения npm, принудительно устанавливающие `dompurify@^3.3.2`
- `npm audit` теперь сообщает об **0 уязвимостях**

### 🧪 Tests

- Набор тестов: **923 теста, 0 неудач** (+15 новых тестов для сопоставления моделей-комбо)

---

---

---

## [3.0.0-rc.14] — 2026-03-23

### 🔀 Community PRs Merged

| PR       | Author   | Summary                                                                                                   |
| -------- | -------- | --------------------------------------------------------------------------------------------------------- |
| **#562** | @coobabm | fix(ux): управление сессиями MCP, нормализация passthrough для Claude, модальное окно OAuth, detectFormat |
| **#561** | @zen0bit | fix(i18n): исправления чешского перевода — имена методов HTTP и обновления документации                   |

### 🧪 Tests

- Набор тестов: **908 тестов, 0 неудач**

---

---

---

## [3.0.0-rc.13] — 2026-03-23

### 🔧 Исправления ошибок

- **config:** исправлено получение реального API ключа из `keyId` в маршрутах CLI настроек (`codex-settings`, `droid-settings`, `kilo-settings`) для предотвращения записи замаскированных строк (#549)

---

---

---

## [3.0.0-rc.12] — 2026-03-23

### 🔀 Объединенные сообществами PR

| PR       | Автор    | Краткое описание                                                                                                                                                                                             |
| -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **#546** | @k0valik | fix(cli): `--version` возвращает `unknown` на Windows — используйте `JSON.parse(readFileSync)` вместо импорта ESM                                                                                            |
| **#555** | @k0valik | fix(sse): централизованное `resolveDataDir()` для разрешения путей в учетных данных, autoCombo, логгере ответов и логгере запросов                                                                           |
| **#544** | @k0valik | fix(cli): безопасное обнаружение CLI инструмента через известные пути установки (8 инструментов) с проверкой символических ссылок, проверкой типа файла, границами размера, минимальной средой в healthcheck |
| **#542** | @rdself  | fix(ui): улучшение контрастности светлого режима — добавлены отсутствующие CSS переменные темы (`bg-primary`, `bg-subtle`, `text-primary`) и исправлены цвета только для темного режима в деталях лога       |

### 🔧 Исправления ошибок

- **Исправление TDZ в `cliRuntime.ts`** — `validateEnvPath` использовался до инициализации при запуске модуля `getExpectedParentPaths()`. Переупорядочил объявления для исправления `ReferenceError`.
- **Исправления сборки** — Добавлены `pino` и `pino-pretty` в `serverExternalPackages` для предотвращения сбоев Turbopack при загрузке внутреннего рабочего процесса Pino.

### 🧪 Тесты

- Набор тестов: **905 тестов, 0 неудач**

---

---

---

## [3.0.0-rc.10] — 2026-03-23

### 🔧 Исправления ошибок

- **#509 / #508** — Регрессия сборки Electron: понизил Next.js с `16.1.x` до `16.0.10` для устранения нестабильности хэширования модулей Turbopack, которая вызывала пустые экраны в сборке Electron.
- **Исправления юнит-тестов** — Исправил два устаревших утверждения тестов (`nanobanana-image-handler` соотношение сторон/разрешение, `thinking-budget` поле `thinkingConfig` в Gemini) после недавних изменений реализации.
- **#541** — Отреагировал на отзывы пользователей о сложности установки; изменения кода не требуются.

---

---

---

## [3.0.0-rc.9] — 2026-03-23

### ✨ Новые возможности

- **feat(docs):** интеграция многостраничной документации в панель OmniRoute (#1969)
- **feat(settings):** добавлена настройка лимита тела запроса (#1968)
- **feat(auth):** добавлен клиентский секрет OAuth по умолчанию для Gemini CLI (#1974)
- **feat(models):** предоставлены контекстные окна моделей.dev в /v1/models (#1972)
- **fix(db):** исправлено использование резервного шифрования, вызывающее циклы повторного шифрования (#1941)
- **fix(auth):** исправлена очистка ответа final_answer для Codex assistant (#1965)

- **feat(providers):** Реализована возможность генерации и редактирования изображений для ChatGPT Web, включая встроенную генерацию изображений в чате и кэширование (#1606).
- **feat(ui):** Интегрирован SVG логотип инструмента OpenCode Zen/Go API и улучшены взаимодействия копирования API ключа в буфер обмена (#1607).

- **feat(providers):** Интегрирован AgentRouter как новый провайдер, совместимый с OpenAI, с $200 бесплатных кредитов при регистрации (Issue #1572).
- **feat(ui):** Реализована проверка моделей по запросу в панели провайдера, позволяющая выполнять диагностические проверки с одним токеном без срабатывания ограничений скорости (Issue #1532).

- **T29** — Исполнитель JSON для Vertex AI SA: реализован с использованием библиотеки `jose` для обработки аутентификации JWT/Service Account, а также с настраиваемыми регионами в UI и автоматической сборкой URL-адресов партнерских моделей.
- **T42** — Соотношение сторон для генерации изображений: создана логика `sizeMapper` для универсальных форматов OpenAI (`size`), добавлено нативное обращение к `imagen3`, обновлены конечные точки NanoBanana для автоматического использования сопоставленных соотношений сторон.
- **T38** — Централизованные спецификации моделей: создан `modelSpecs.ts` для ограничений и параметров на каждую модель.

### 🔧 Улучшения

- **T40** — Интеграция инструментов OpenCode CLI: завершена нативная интеграция `opencode-zen` и `opencode-go` в предыдущем PR.

---

---

## [3.0.0-rc.8] — 2026-03-23

### 🔧 Исправления ошибок и улучшения (Резервное копирование, Квота и Бюджет)

- **T24** — Исправление ожидания `503` cooldown + сопоставление `406`: сопоставлено `406 Not Acceptable` с `503 Service Unavailable` с правильными интервалами cooldown.
- **T25** — Резервное копирование проверки провайдера: плавное резервное копирование к стандартным моделям проверки, когда конкретный `validationModelId` отсутствует.
- **T36** — Уточнение обработки провайдера `403` vs `429`: извлечено в `errorClassifier.ts` для правильного разделения ошибок жестких разрешений (`403`) и ограничений скорости (`429`).
- **T39** — Резервное копирование конечной точки для `fetchAvailableModels`: реализована трехступенчатая механика (`/models` -> `/v1/models` -> локальный универсальный каталог) + обновления инструмента MCP `list_models_catalog` для отражения `source` и `warning`.
- **T33** — Преобразование уровня мышления в бюджет: переводит качественные уровни мышления в точные выделения бюджета.
- **T41** — Автоматическое перенаправление фоновых задач: направляет тяжелые фоновые задачи оценки на модели flash/эффективности автоматически.
- **T23** — Интеллектуальное резервное копирование сброса квоты: точно извлекает значения заголовков `x-ratelimit-reset` / `retry-after` или сопоставляет статические cooldown.

---

---

---

## [3.0.0-rc.7] — 2026-03-23 _(Что нового по сравнению с v2.9.5 — будет выпущено как v3.0.0)_

> **Обновление с v2.9.5:** 16 решённых проблем · 2 объединённых сообществами PR · 2 новых провайдера · 7 новых API-конечных точек · 3 новых функции · Миграция БД 008+009 · 832 теста проходят · 15 улучшений sub2api (T01–T15 завершены).

### 🆕 Новые провайдеры

| Провайдер        | Псевдоним      | Уровень    | Примечания                                                       |
| ---------------- | -------------- | ---------- | ---------------------------------------------------------------- |
| **OpenCode Zen** | `opencode-zen` | Бесплатный | 3 модели через `opencode.ai/zen/v1` (PR #530 от @kang-heewon)    |
| **OpenCode Go**  | `opencode-go`  | Платный    | 4 модели через `opencode.ai/zen/go/v1` (PR #530 от @kang-heewon) |

Оба провайдера используют новый `OpencodeExecutor` с маршрутизацией в нескольких форматах (`/chat/completions`, `/messages`, `/responses`, `/models/{model}:generateContent`).

---

### ✨ Новые функции

- **feat(docs):** интеграция многостраничной документации в панель OmniRoute (#1969)
- **feat(settings):** добавление настройки лимита тела запроса (#1968)
- **feat(auth):** добавление секрета клиента OAuth Gemini CLI по умолчанию (#1974)
- **feat(models):** отображение контекстных окон models.dev в /v1/models (#1972)
- **fix(db):** исправление резервного копирования устаревшего шифрования, вызывающего циклы повторного шифрования (#1941)
- **fix(auth):** исправление очистки ответа final_answer ассистента Codex (#1965)

- **feat(providers):** Реализация возможностей генерации и редактирования изображений для ChatGPT Web, включая генерацию изображений в чате и кэширование (#1606).
- **feat(ui):** Интеграция SVG логотипа инструмента OpenCode Zen/Go API и улучшение взаимодействий копирования API-ключа в буфер обмена (#1607).

- **feat(providers):** Интеграция AgentRouter в качестве нового провайдера, совместимого с OpenAI, с бесплатными кредитами в размере $200 при регистрации (Issue #1572).
- **feat(ui):** Реализация тестирования моделей по запросу в панели провайдера, позволяющая выполнять диагностические проверки с одним токеном без срабатывания ограничений скорости (Issue #1532).

#### 🔑 API выдачи зарегистрированных ключей (#464)

Автоматическое создание и выдача API-ключей OmniRoute программным способом с контролем квоты на уровне провайдера и аккаунта.

| Конечная точка                        | Метод     | Описание                                                           |
| ------------------------------------- | --------- | ------------------------------------------------------------------ |
| `/api/v1/registered-keys`             | `POST`    | Выдать новый ключ — исходный ключ возвращается **только один раз** |
| `/api/v1/registered-keys`             | `GET`     | Список зарегистрированных ключей (замаскированных)                 |
| `/api/v1/registered-keys/{id}`        | `GET`     | Получить метаданные ключа                                          |
| `/api/v1/registered-keys/{id}`        | `DELETE`  | Отозвать ключ                                                      |
| `/api/v1/registered-keys/{id}/revoke` | `POST`    | Отозвать (для клиентов без поддержки DELETE)                       |
| `/api/v1/quotas/check`                | `GET`     | Предварительная проверка квоты перед выдачей                       |
| `/api/v1/providers/{id}/limits`       | `GET/PUT` | Настроить лимиты выдачи на уровне провайдера                       |
| `/api/v1/accounts/{id}/limits`        | `GET/PUT` | Настроить лимиты выдачи на уровне аккаунта                         |
| `/api/v1/issues/report`               | `POST`    | Сообщить о событиях квоты в GitHub Issues                          |

**БД — Миграция 008:** Три новые таблицы: `registered_keys`, `provider_key_limits`, `account_key_limits`.
**Безопасность:** Ключи хранятся в виде хэшей SHA-256. Исходный ключ отображается один раз при создании, больше не извлекается.
**Типы квоты:** `maxActiveKeys`, `dailyIssueLimit`, `hourlyIssueLimit` на уровне провайдера и аккаунта.
**Идемпотентность:** Поле `idempotency_key` предотвращает дублирование выдачи. Возвращает `409 IDEMPOTENCY_CONFLICT`, если ключ уже использовался.
**Бюджет на ключ:** `dailyBudget` / `hourlyBudget` — ограничивает количество запросов, которые может маршрутизировать ключ за окно.
**Отчет в GitHub:** Опционально. Установите `GITHUB_ISSUES_REPO` + `GITHUB_ISSUES_TOKEN`, чтобы автоматически создавать вопросы GitHub при превышении квоты или сбоях выдачи.

#### 🎨 Иконки провайдеров — @lobehub/icons (#529)

Все иконки провайдеров в панели управления теперь используют компоненты React `@lobehub/icons` (130+ провайдеров с SVG).
Цепочка резервного копирования: **SVG Lobehub → существующий `/providers/{id}.png` → универсальная иконка**. Использует правильный шаблон `ErrorBoundary` React.

#### 🔄 Планировщик автоматической синхронизации моделей (#488)

OmniRoute теперь автоматически обновляет списки моделей для подключенных провайдеров каждые **24 часа**.

- Запускается при запуске сервера через существующий хук `/api/sync/initialize`
- Настраивается через переменную среды `MODEL_SYNC_INTERVAL_HOURS`
- Охватывает 16 основных провайдеров
- Записывает время последней синхронизации в базу данных настроек

---

### 🔧 Исправления ошибок

#### OAuth & Auth

- **#537 — Gemini CLI OAuth:** Четкая ошибка при отсутствии `GEMINI_OAUTH_CLIENT_SECRET` в развертываниях Docker/self-hosted. Ранее показывал криптическую `client_secret is missing` от Google. Теперь предоставляет конкретные инструкции для `docker-compose.yml` и `~/.omniroute/.env`.

#### Провайдеры & Маршрутизация

- **#536 — LongCat AI:** Исправлен `baseUrl` (`api.longcat.chat/openai`) и `authHeader` (`Authorization: Bearer`).
- **#535 — Переопределение закрепленной модели:** `body.model` теперь правильно установлен на `pinnedModel`, когда активна защита контекстного кэша.
- **#532 — Проверка ключа OpenCode Go:** Теперь использует тестовую конечную точку `zen/v1` (`testKeyBaseUrl`) — один и тот же ключ работает для обоих уровней.

#### CLI & Инструменты

- **#527 — Цикл Claude Code + Codex:** Блоки `tool_result` теперь преобразуются в текст вместо удаления, останавливая бесконечные циклы tool-result.
- **#524 — Сохранение конфигурации OpenCode:** Добавлен обработчик `saveOpenCodeConfig()` (учитывает XDG_CONFIG_HOME, записывает TOML).
- **#521 — Зависание входа:** Вход больше не зависает после пропуска настройки пароля — правильно перенаправляет на онбординг.
- **#522 — Менеджер API:** Удалена вводящая в заблуждение кнопка "Копировать замаскированный ключ" (заменена значком блокировки с подсказкой).
- **#532 — Конфигурация OpenCode Go:** Обработчик настроек теперь обрабатывает `opencode` toolId.

#### Опыт разработчика

- **#489 — Antigravity:** Отсутствующий `googleProjectId` возвращает структурированную ошибку 422 с рекомендациями по переподключению вместо криптического сбоя.
- **#510 — Пути Windows:** Пути MSYS2/Git-Bash (`/c/Program Files/...`) теперь автоматически нормализуются в `C:\Program Files\...`.
- **#492 — Запуск CLI:** `omniroute` CLI теперь обнаруживает Node, управляемый `mise`/`nvm`, когда `app/server.js` отсутствует, и показывает целевые инструкции по исправлению.
- **#513 — Сброс пароля Docker:** Документирован обходной путь для переменной среды `INITIAL_PASSWORD`
- **#520 — pnpm:** Документирован шаг `pnpm approve-builds better-sqlite3`

---

### ✅ Проблемы, решенные в v3.0.0

`#464` `#488` `#489` `#492` `#510` `#513` `#520` `#521` `#522` `#524` `#527` `#529` `#532` `#535` `#536` `#537`

---

### 🔀 Объединенные сообществами PR

| PR       | Автор        | Краткое описание                                                        |
| -------- | ------------ | ----------------------------------------------------------------------- |
| **#530** | @kang-heewon | OpenCode Zen + Go провайдеры с `OpencodeExecutor` и улучшенными тестами |

---

```

---

---

## [3.0.0-rc.7] — 2026-03-23 _(Что нового по сравнению с v2.9.5 — будет выпущено как v3.0.0)_

> **Обновление с v2.9.5:** 16 решённых проблем · 2 объединённых сообществами PR · 2 новых провайдера · 7 новых API-конечных точек · 3 новых функции · Миграция БД 008+009 · 832 теста проходят · 15 улучшений sub2api (T01–T15 завершены).

### 🆕 Новые провайдеры

| Провайдер         | Псевдоним       | Уровень | Примечания                                                                 |
| ---------------- | -------------- | ---- | ------------------------------------------------------------------------ |
| **OpenCode Zen** | `opencode-zen` | Бесплатный | 3 модели через `opencode.ai/zen/v1` (PR #530 от @kang-heewon)            |
| **OpenCode Go**  | `opencode-go`  | Платный | 4 модели через `opencode.ai/zen/go/v1` (PR #530 от @kang-heewon)         |

Оба провайдера используют новый `OpencodeExecutor` с маршрутизацией в нескольких форматах (`/chat/completions`, `/messages`, `/responses`, `/models/{model}:generateContent`).

---

### ✨ Новые функции

- **feat(docs):** интеграция многостраничной документации в панель OmniRoute (#1969)
- **feat(settings):** добавление настройки лимита тела запроса (#1968)
- **feat(auth):** добавление секрета клиента OAuth Gemini CLI по умолчанию (#1974)
- **feat(models):** отображение контекстных окон models.dev в /v1/models (#1972)
- **fix(db):** исправление резервного копирования устаревшего шифрования, вызывающего циклы повторного шифрования (#1941)
- **fix(auth):** исправление очистки ответа final_answer ассистента Codex (#1965)

- **feat(providers):** Реализация возможностей генерации и редактирования изображений для ChatGPT Web, включая генерацию изображений в чате и кэширование (#1606).
- **feat(ui):** Интеграция SVG логотипа инструмента OpenCode Zen/Go API и улучшение взаимодействий копирования API-ключа в буфер обмена (#1607).

- **feat(providers):** Интеграция AgentRouter в качестве нового провайдера, совместимого с OpenAI, с бесплатными кредитами в размере $200 при регистрации (Issue #1572).
- **feat(ui):** Реализация тестирования моделей по запросу в панели провайдера, позволяющая выполнять диагностические проверки с одним токеном без срабатывания ограничений скорости (Issue #1532).

#### 🔑 API выдачи зарегистрированных ключей (#464)

Автоматическое создание и выдача API-ключей OmniRoute программным способом с контролем квоты на уровне провайдера и аккаунта.

| Конечная точка                              | Метод    | Описание                                      |
| ------------------------------------- | --------- | ------------------------------------------------ |
| `/api/v1/registered-keys`             | `POST`    | Выдать новый ключ — исходный ключ возвращается **только один раз** |
| `/api/v1/registered-keys`             | `GET`     | Список зарегистрированных ключей (замаскированных)                    |
| `/api/v1/registered-keys/{id}`        | `GET`     | Получить метаданные ключа                                 |
| `/api/v1/registered-keys/{id}`        | `DELETE`  | Отозвать ключ                                     |
| `/api/v1/registered-keys/{id}/revoke` | `POST`    | Отозвать (для клиентов без поддержки DELETE)      |
| `/api/v1/quotas/check`                | `GET`     | Предварительная проверка квоты перед выдачей                |
| `/api/v1/providers/{id}/limits`       | `GET/PUT` | Настроить лимиты выдачи на уровне провайдера           |
| `/api/v1/accounts/{id}/limits`        | `GET/PUT` | Настроить лимиты выдачи на уровне аккаунта            |
| `/api/v1/issues/report`               | `POST`     | Сообщить о событиях квоты в GitHub Issues             |

**БД — Миграция 008:** Три новые таблицы: `registered_keys`, `provider_key_limits`, `account_key_limits`.
**Безопасность:** Ключи хранятся в виде хэшей SHA-256. Исходный ключ отображается один раз при создании, больше не извлекается.
**Типы квоты:** `maxActiveKeys`, `dailyIssueLimit`, `hourlyIssueLimit` на уровне провайдера и аккаунта.
**Идемпотентность:** Поле `idempotency_key` предотвращает дублирование выдачи. Возвращает `409 IDEMPOTENCY_CONFLICT`, если ключ уже использовался.
**Бюджет на ключ:** `dailyBudget` / `hourlyBudget` — ограничивает количество запросов, которые может маршрутизировать ключ за окно.
**Отчет в GitHub:** Опционально. Установите `GITHUB_ISSUES_REPO` + `GITHUB_ISSUES_TOKEN`, чтобы автоматически создавать вопросы GitHub при превышении квоты или сбоях выдачи.

#### 🎨 Иконки провайдеров — @lobehub/icons (#529)

Все иконки провайдеров в панели управления теперь используют компоненты React `@lobehub/icons` (130+ провайдеров с SVG).
Цепочка резервного копирования: **SVG Lobehub → существующий `/providers/{id}.png` → универсальная иконка**. Использует правильный шаблон `ErrorBoundary` React.

#### 🔄 Планировщик автоматической синхронизации моделей (#488)

OmniRoute теперь автоматически обновляет списки моделей для подключенных провайдеров каждые **24 часа**.

- Запускается при запуске сервера через существующий хук `/api/sync/initialize`
- Настраивается через переменную среды `MODEL_SYNC_INTERVAL_HOURS`
- Охватывает 16 основных провайдеров
- Записывает время последней синхронизации в базу данных настроек

---

### 🔧 Исправления ошибок

#### OAuth & Auth

- **#537 — Gemini CLI OAuth:** Четкая ошибка при отсутствии `GEMINI_OAUTH_CLIENT_SECRET` в развертываниях Docker/self-hosted. Ранее показывал криптическую `client_secret is missing` от Google. Теперь предоставляет конкретные инструкции для `docker-compose.yml` и `~/.omniroute/.env`.

#### Провайдеры & Маршрутизация

- **#536 — LongCat AI:** Исправлен `baseUrl` (`api.longcat.chat/openai`) и `authHeader` (`Authorization: Bearer`).
- **#535 — Переопределение закрепленной модели:** `body.model` теперь правильно установлен на `pinnedModel`, когда активна защита контекстного кэша.
- **#532 — Проверка ключа OpenCode Go:** Теперь использует тестовую конечную точку `zen/v1` (`testKeyBaseUrl`) — один и тот же ключ работает для обоих уровней.

#### CLI & Инструменты

- **#527 — Цикл Claude Code + Codex:** Блоки `tool_result` теперь преобразуются в текст вместо удаления, останавливая бесконечные циклы tool-result.
- **#524 — Сохранение конфигурации OpenCode:** Добавлен обработчик `saveOpenCodeConfig()` (учитывает XDG_CONFIG_HOME, записывает TOML).
- **#521 — Зависание входа:** Вход больше не зависает после пропуска настройки пароля — правильно перенаправляет на онбординг.
- **#522 — Менеджер API:** Удалена вводящая в заблуждение кнопка "Копировать замаскированный ключ" (заменена значком блокировки с подсказкой).
- **#532 — Конфигурация OpenCode Go:** Обработчик настроек теперь обрабатывает `opencode` toolId.

#### Опыт разработчика

- **#489 — Antigravity:** Отсутствующий `googleProjectId` возвращает структурированную ошибку 422 с рекомендациями по переподключению вместо криптического сбоя.
- **#510 — Пути Windows:** Пути MSYS2/Git-Bash (`/c/Program Files/...`) теперь автоматически нормализуются в `C:\Program Files\...`.
- **#492 — Запуск CLI:** `omniroute` CLI теперь обнаруживает Node, управляемый `mise`/`nvm`, когда `app/server.js` отсутствует, и показывает целевые инструкции по исправлению.
- **#513 — Сброс пароля Docker:** Документирован обходной путь для переменной среды `INITIAL_PASSWORD`
- **#520 — pnpm:** Документирован шаг `pnpm approve-builds better-sqlite3`

---

### ✅ Проблемы, решенные в v3.0.0

`#464` `#488` `#489` `#492` `#510` `#513` `#520` `#521` `#522` `#524` `#527` `#529` `#532` `#535` `#536` `#537`

---

### 🔀 Объединенные сообществами PR

| PR       | Автор       | Краткое описание                                                                |
| -------- | ------------ | ---------------------------------------------------------------------- |
| **#530** | @kang-heewon | OpenCode Zen + Go провайдеры с `OpencodeExecutor` и улучшенными тестами |

---
```

---

---

## [3.0.0-rc.6] - 2026-03-23

### 🔧 Исправления ошибок и улучшения (анализ разрыва sub2api — T01–T15)

- **T01** — Столбец `requested_model` в `call_logs` (миграция 009): отслеживает, какую модель изначально запросил клиент, а какую фактически использовал роутер. Позволяет анализировать резервные случаи ограничения скорости.
- **T02** — Удаление пустых текстовых блоков из вложенных `tool_result.content`: предотвращает ошибки Anthropic 400 (`текстовые блоки контента должны быть непустыми`) при цепочке результатов инструментов Claude Code.
- **T03** — Разбор заголовков `x-codex-5h-*` / `x-codex-7d-*`: `parseCodexQuotaHeaders()` + `getCodexResetTime()` извлекают окна квоты Codex для точного планирования охлаждения вместо универсального 5-минутного резервного варианта.
- **T04** — Заголовок `X-Session-Id` для внешнего липкого маршрутизации: `extractExternalSessionId()` в `sessionManager.ts` читает заголовки `x-session-id` / `x-omniroute-session` с префиксом `ext:` для избежания коллизий с внутренними SHA-256 идентификаторами сессий. Совместим с Nginx (заголовок с дефисом).
- **T06** — Учетная запись деактивирована → постоянный блок: `isAccountDeactivated()` в `accountFallback.ts` обнаруживает сигналы деактивации 401 и применяет 1-летнее охлаждение, чтобы предотвратить повторные попытки с мертвыми учетными записями.
- **T07** — Валидация IP в X-Forwarded-For: новый `src/lib/ipUtils.ts` с `extractClientIp()` и `getClientIpFromRequest()` — пропускает `unknown`/не-IP записи в цепочках `X-Forwarded-For` (запросы Nginx/proxy-forwarded).
- **T10** — Кредиты исчерпаны → отдельный резервный вариант: `isCreditsExhausted()` в `accountFallback.ts` возвращает охлаждение 1ч с флагом `creditsExhausted`, отличным от общего 429 ограничения скорости.
- **T11** — `max` уровень рассуждений → 131072 бюджетных токенов: `EFFORT_BUDGETS` и `THINKING_LEVEL_MAP` обновлены; обратное отображение теперь возвращает `"max"` для ответов с полным бюджетом. Тест обновлен.
- **T12** — Добавлены цены MiniMax M2.7: `minimax-m2.7`, `MiniMax-M2.7`, `minimax-m2.7-highspeed` добавлены в таблицу цен (sub2api PR #1120). Цены M2.5/GLM-4.7/GLM-5/Kimi уже существовали.
- **T15** — Нормализация массивов контента: помощник `normalizeContentToString()` в `openai-to-claude.ts` корректно сводит сообщения системы/инструментов в формате массива к строке перед отправкой в Anthropic.

### 🧪 Тесты

- Набор тестов: **832 теста, 0 неудач** (не изменилось с rc.5)

---

---

---

## [3.0.0-rc.5] - 2026-03-22

### ✨ New Features

- **feat(docs):** интеграция многостраничной документации в панель управления OmniRoute (#1969)
- **feat(settings):** добавление настройки лимита размера тела запроса (#1968)
- **feat(auth):** добавление значения по умолчанию для секретного ключа OAuth клиента Gemini CLI (#1974)
- **feat(models):** предоставление контекстных окон моделей.dev в /v1/models (#1972)
- **fix(db):** исправление проблемы с резервным шифрованием, вызывающим циклы повторного шифрования (#1941)
- **fix(auth):** исправление очистки ответа final_answer для помощника Codex (#1965)

- **feat(providers):** Реализация возможностей генерации и редактирования изображений для ChatGPT Web, включая генерацию изображений в чате и кэширование (#1606).
- **feat(ui):** Интеграция SVG-логотипа инструмента API OpenCode Zen/Go и улучшение взаимодействий с API-ключами для копирования в буфер обмена (#1607).

- **feat(providers):** Интеграция AgentRouter в качестве нового провайдера, совместимого с OpenAI, с $200 бесплатных кредитов при регистрации (Issue #1572).
- **feat(ui):** Реализация тестирования моделей по запросу в панели управления провайдерами, позволяющая выполнять диагностические проверки с одним токеном без срабатывания лимитов скорости (Issue #1532).

- **#464** — API для предоставления зарегистрированных ключей: автоматическое выдача API-ключей с контролем квот на провайдера и аккаунт
  - `POST /api/v1/registered-keys` — выдача ключей с поддержкой идемпотентности
  - `GET /api/v1/registered-keys` — список (замаскированных) зарегистрированных ключей
  - `GET /api/v1/registered-keys/{id}` — получение метаданных ключа
  - `DELETE /api/v1/registered-keys/{id}` / `POST ../{id}/revoke` — отзыв ключей
  - `GET /api/v1/quotas/check` — предварительная проверка перед выдачей
  - `PUT /api/v1/providers/{id}/limits` — установка лимитов выдачи для провайдера
  - `PUT /api/v1/accounts/{id}/limits` — установка лимитов выдачи для аккаунта
  - `POST /api/v1/issues/report` — необязательная отправка отчетов в GitHub
  - Миграция БД 008: таблицы `registered_keys`, `provider_key_limits`, `account_key_limits`

---

---

---

## [3.0.0-rc.4] - 2026-03-22

### ✨ New Features

- **feat(docs):** интеграция многостраничной документации в панель управления OmniRoute (#1969)
- **feat(settings):** добавление настройки лимита размера тела запроса (#1968)
- **feat(auth):** добавление значения по умолчанию для секретного ключа OAuth клиента Gemini CLI (#1974)
- **feat(models):** предоставление контекстных окон моделей.dev в /v1/models (#1972)
- **fix(db):** исправление проблемы с резервным шифрованием, вызывающим циклы повторного шифрования (#1941)
- **fix(auth):** исправление очистки ответа final_answer для помощника Codex (#1965)

- **feat(providers):** Реализация возможностей генерации и редактирования изображений для ChatGPT Web, включая генерацию изображений в чате и кэширование (#1606).
- **feat(ui):** Интеграция SVG-логотипа инструмента API OpenCode Zen/Go и улучшение взаимодействий с API-ключами для копирования в буфер обмена (#1607).

- **feat(providers):** Интеграция AgentRouter в качестве нового провайдера, совместимого с OpenAI, с $200 бесплатных кредитов при регистрации (Issue #1572).
- **feat(ui):** Реализация тестирования моделей по запросу в панели управления провайдерами, позволяющая выполнять диагностические проверки с одним токеном без срабатывания лимитов скорости (Issue #1532).

- **#530 (PR)** — Добавлены провайдеры OpenCode Zen и OpenCode Go (от @kang-heewon)
  - Новый `OpencodeExecutor` с маршрутизацией в нескольких форматах (`/chat/completions`, `/messages`, `/responses`)
  - 7 моделей в обоих уровнях

---

---

---

## [3.0.0-rc.3] - 2026-03-22

### ✨ New Features

- **feat(docs):** интеграция многостраничной документации в панель управления OmniRoute (#1969)
- **feat(settings):** добавление настройки лимита тела запроса (#1968)
- **feat(auth):** добавление значения по умолчанию для секрета OAuth-клиента Gemini CLI (#1974)
- **feat(models):** предоставление контекстных окон моделей.dev в /v1/models (#1972)
- **fix(db):** исправление проблемы с резервным шифрованием, вызывающим циклы повторного шифрования (#1941)
- **fix(auth):** исправление очистки ответа final_answer для помощника Codex (#1965)

- **feat(providers):** Реализация возможностей генерации и редактирования изображений для ChatGPT Web, включая генерацию изображений в чате и кэширование (#1606).
- **feat(ui):** Интеграция SVG-логотипа инструмента OpenCode Zen/Go API и улучшение взаимодействий с API-ключом копирования в буфер обмена (#1607).

- **feat(providers):** Интеграция AgentRouter в качестве нового провайдера, совместимого с OpenAI, с бесплатными кредитами в размере $200 при регистрации (Issue #1572).
- **feat(ui):** Реализация тестирования моделей по запросу в панели управления провайдерами, позволяющее выполнять диагностические проверки с одним токеном без срабатывания ограничений скорости (Issue #1532).

- **#529** — Иконки провайдеров теперь используют [@lobehub/icons](https://github.com/lobehub/lobe-icons) с плавным переходом на PNG и компонентом `ProviderIcon` (поддерживается 130+ провайдеров)
- **#488** — Автоматическое обновление списков моделей каждые 24 часа через `modelSyncScheduler` (настраивается через `MODEL_SYNC_INTERVAL_HOURS`)

### 🔧 Bug Fixes

- **#537** — Gemini CLI OAuth: теперь показывает четкую, действующую ошибку, когда `GEMINI_OAUTH_CLIENT_SECRET` отсутствует в развертываниях Docker/self-hosted

---

---

---

## [3.0.0-rc.2] - 2026-03-22

### 🔧 Bug Fixes

- **#536** — Валидация ключа LongCat AI: исправлен baseUrl (`api.longcat.chat/openai`) и authHeader (`Authorization: Bearer`)
- **#535** — Переопределение закрепленной модели: `body.model` теперь устанавливается в `pinnedModel`, когда защита контекстного кэша обнаруживает закрепленную модель
- **#524** — Конфигурация OpenCode теперь сохраняется правильно: добавлен обработчик `saveOpenCodeConfig()` (с учетом XDG_CONFIG_HOME, запись в формате TOML)

---

---

---

## [3.0.0-rc.1] - 2026-03-22

### 🔧 Bug Fixes

- **#521** — Вход больше не застревает после пропуска настройки пароля (перенаправление на онбординг)
- **#522** — Менеджер API: удалена вводящая в заблуждение кнопка "Копировать замаскированный ключ" (заменена подсказкой с иконкой замка)
- **#527** — Цикл суперспособностей Claude Code + Codex: блоки `tool_result` теперь преобразуются в текст вместо удаления
- **#532** — Валидация ключа OpenCode GO API теперь использует правильный конечный пункт `zen/v1` (`testKeyBaseUrl`)
- **#489** — Antigravity: отсутствие `googleProjectId` возвращает структурированную ошибку 422 с рекомендациями по переподключению
- **#510** — Windows: пути MSYS2/Git-Bash (`/c/Program Files/...`) теперь нормализованы в `C:\Program Files\...`
- **#492** — CLI `omniroute` теперь обнаруживает `mise`/`nvm`, когда `app/server.js` отсутствует, и показывает целевую исправление

### 📖 Documentation

- **#513** — Сброс пароля Docker: описано использование обходного пути переменной окружения `INITIAL_PASSWORD`
- **#520** — pnpm: документировано `pnpm approve-builds better-sqlite3`

### ✅ Closed Issues

#489, #492, #510, #513, #520, #521, #522, #525, #527, #532

---

---

---

## [2.9.5] — 2026-03-22

> Sprint: New OpenCode providers, embedding credentials fix, CLI masked key bug, CACHE_TAG_PATTERN fix.

### 🐛 Bug Fixes

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, скопировать сервер MITM CommonJS в автономный артефакт и разрешить пути данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать каталог нативного времени выполнения `wreq-js` в изолированный выходной каталог Next.js standalone, чтобы упакованные Playwright/E2E могли загружать хук инструментации на Linux.
- **fix(api):** Проверять вебсокетный мост Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую проверку маршрута `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавить явное типизирование помощников псевдонимов и категорий поставщиков, чтобы строгий шлюз `typecheck:noimplicit:core` CI прошел.
- **fix(ui):** Сохранять страницу деталей поставщика прокси-сервера вверху, помеченную меткой "Управляется через настройки прокси-сервера вверху", когда переводы недоступны.
- **fix(electron):** Усилить CSP для рабочей версии десктопа, удалив `unsafe-eval` за пределами разработки и добавив ограничения объекта, базового URI, действия формы, предка фрейма и рабочего процесса.
- **fix(cli):** Заменить пути установки и выполнения привилегированных команд, интерполированные оболочкой, на помощники `spawn`/`execFile` на основе аргументов для установки базы данных, команд Tailscale sudo, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранять значки поставщиков устойчивыми, используя сначала компоненты `@lobehub/icons`, затем локальные резервные копии PNG/SVG, избегая времени выполнения `@lobehub/ui` peer в панели инструментов.

- **Инструменты CLI сохраняют замаскированный API-ключ в файлах конфигурации** — POST-маршруты `claude-settings`, `cline-settings` и `openclaw-settings` теперь принимают параметр `keyId` и разрешают реальный API-ключ из БД перед записью на диск. `ClaudeToolCard` обновлен для отправки `keyId` вместо строки отображения с маской. Исправляет #523, #526.
- **Пользовательские поставщики встраивания: ошибка `No credentials`** — `/v1/embeddings` теперь отслеживает `credentialsProviderId` отдельно от префикса маршрутизации, поэтому учетные данные извлекаются из соответствующего узла ID поставщика, а не из строки префикса. Исправляет регрессию, при которой `google/gemini-embedding-001` и аналогичные модели пользовательских поставщиков всегда завершались ошибкой учетных данных. Исправляет #532-related. (PR #528 от @jacob2826)
- **Регулярное выражение защиты кэша контекста пропускает префикс `
`** — `CACHE_TAG_PATTERN` в `comboAgentMiddleware.ts` обновлен для соответствия как буквальному `
` (обратная косая черта-n), так и фактическому символу новой строки U+000A, который `combo.ts` потоковой передачи вставляет вокруг тега `<omniModel>` после исправления #515. Исправляет #531.

### ✨ New Providers

- **OpenCode Zen** — Бесплатный шлюз на `opencode.ai/zen/v1` с 3 моделями: `minimax-m2.5-free`, `big-pickle`, `gpt-5-nano`
- **OpenCode Go** — Подписка на `opencode.ai/zen/go/v1` с 4 моделями: `glm-5`, `kimi-k2.5`, `minimax-m2.7` (формат Claude), `minimax-m2.5` (формат Claude)
- Оба поставщика используют новый `OpencodeExecutor`, который динамически маршрутизирует на `/chat/completions`, `/messages`, `/responses` или `/models/{model}:generateContent` в зависимости от запрошенной модели. (PR #530 от @kang-heewon)

---

---

---

---

## [2.9.4] — 2026-03-21

> Sprint: Bug fixes — preserve Codex prompt cache key, fix tagContent JSON escaping, sync expired token status to DB.

### 🐛 Bug Fixes

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, скопировать сервер MITM CommonJS в автономный артефакт и разрешить пути данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не вызывали сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать каталог `wreq-js` в изолированный выходной каталог Next.js standalone, чтобы упакованные Playwright/E2E могли загрузить хук инструментации на Linux.
- **fix(api):** Проверять вебсокетный мост Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленый маршрут `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавить явное типизирование для помощников псевдонимов и категорий поставщиков, чтобы строгий `typecheck:noimplicit:core` CI gate прошел.
- **fix(ui):** Сохранять страницу деталей поставщика прокси-сервера с меткой "Управляется через настройки прокси-сервера" при отсутствии переводов.
- **fix(electron):** Укрепление CSP для рабочей среды путем удаления `unsafe-eval` вне разработки и добавления ограничений объекта, базового URI, действия формы, предка фрейма и рабочего процесса.
- **fix(cli):** Заменить пути команд установки и выполнения с интерполяцией оболочки на помощники `spawn`/`execFile` на основе аргументов для настройки базы данных, команд Tailscale sudo, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранять иконки поставщиков устойчивыми, используя сначала компоненты `@lobehub/icons`, затем локальные резервные копии PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели инструментов.

- **fix(translator)**: Сохранять `prompt_cache_key` в переводе Responses API → Chat Completions (#517)
  — Это поле является сигналом сродства кэша, используемым Codex; его удаление препятствовало попаданиям в кэш подсказок.
  Исправлено в `openai-responses.ts` и `responsesApiHelper.ts`.

- **fix(combo)**: Экранировать `в`tagContent`, чтобы внедренная JSON-строка была допустимой (#515)
— Новые строки литералов шаблонов (U+000A) не допускаются без экранирования внутри строковых значений JSON.
Заменено на последовательности литералов `\n`в`open-sse/services/combo.ts`.

- **fix(usage)**: Синхронизировать статус истекшего токена обратно в БД при сбое аутентификации (#491)
  — Когда проверка ограничений и квот возвращает 401/403, `testStatus` соединения теперь обновляется до `"expired"` в базе данных, чтобы страница поставщиков отображала такое же ухудшенное состояние.
  Исправлено в `src/app/api/usage/[connectionId]/route.ts`.

---

---

---

## [2.9.3] — 2026-03-21

> Sprint: Add 5 new free AI providers — LongCat, Pollinations, Cloudflare AI, Scaleway, AI/ML API.

### ✨ New Providers

- **feat(providers/longcat)**: Добавить LongCat AI (`lc/`) — 50M токенов/день бесплатно (Flash-Lite) + 500K/день (Chat/Thinking) во время публичной бета-версии. Совместим с OpenAI, стандартная аутентификация Bearer.
- **feat(providers/pollinations)**: Добавить Pollinations AI (`pol/`) — API-ключ не требуется. Проксирует GPT-5, Claude, Gemini, DeepSeek V3, Llama 4 (1 запрос/15с бесплатно). Пользовательский исполнитель обрабатывает необязательную аутентификацию.
- **feat(providers/cloudflare-ai)**: Добавить Cloudflare Workers AI (`cf/`) — 10K нейронов/день бесплатно (~150 ответов LLM или 500с аудио Whisper). 50+ моделей на глобальном крае. Пользовательский исполнитель строит динамический URL с `accountId` из учетных данных.
- **feat(providers/scaleway)**: Добавить Scaleway Generative APIs (`scw/`) — 1M бесплатных токенов для новых аккаунтов. Соответствует EU/GDPR (Париж). Qwen3 235B, Llama 3.1 70B, Mistral Small 3.2.
- **feat(providers/aimlapi)**: Добавить AI/ML API (`aiml/`) — $0.025 бесплатно в день, 200+ моделей (GPT-4o, Claude, Gemini, Llama) через один конечный пункт агрегатора.

### 🔄 Provider Updates

- **feat(providers/together)**: Добавить `hasFree: true` + 3 бесплатных модели ID: `Llama-3.3-70B-Instruct-Turbo-Free`, `Llama-Vision-Free`, `DeepSeek-R1-Distill-Llama-70B-Free`
- **feat(providers/gemini)**: Добавить `hasFree: true` + `freeNote` (1,500 запросов/день, без кредитной карты, aistudio.google.com)
- **chore(providers/gemini)**: Переименовать отображаемое имя на `Gemini (Google AI Studio)` для ясности

### ⚙️ Infrastructure

- **feat(executors/pollinations)**: Новый `PollinationsExecutor` — опускает заголовок `Authorization`, когда API-ключ не предоставлен
- **feat(executors/cloudflare-ai)**: Новый `CloudflareAIExecutor` — построение динамического URL требует `accountId` в учетных данных поставщика
- **feat(executors)**: Зарегистрировать сопоставления исполнителей `pollinations`, `pol`, `cloudflare-ai`, `cf`

### 📝 Documentation

- **docs(readme)**: Расширенный бесплатный стек комбо до 11 поставщиков ($0 навсегда)
- **docs(readme)**: Добавлены 4 новых раздела бесплатных поставщиков (LongCat, Pollinations, Cloudflare AI, Scaleway) с таблицами моделей
- **docs(readme)**: Обновлена таблица цен с 4 новыми строками бесплатного тарифа
- **docs(i18n/pt-BR)**: Обновлена таблица цен + добавлены разделы LongCat/Pollinations/Cloudflare AI/Scaleway на португальском
- **docs(new-features/ai)**: 10 файлов спецификаций задач + мастер-план реализации в `docs/new-features/ai/`

### 🧪 Tests

- Набор тестов: **821 тестов, 0 неудач** (без изменений)

---

---

## [2.9.2] — 2026-03-21

> Спринт: Исправление транскрипции медиа (Content-Type для Deepgram/HuggingFace, определение языка) и отображения ошибок TTS.

### 🐛 Исправления ошибок

- **fix(mitm):** Компиляция утилит MITM как NodeNext ESM во время prepublish, копирование сервера MITM в формате CommonJS в автономный артефакт и разрешение путей данных MITM без использования алиасов Next.js в упакованном рантайме.
- **fix(build):** Перемещение локального префикса Wine `.tmp/wine32` за пределы изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не вызывали сканирование `EACCES` при сборках на Node 24.
- **fix(build):** Копирование каталога нативного рантайма `wreq-js` в изолированный автономный вывод Next.js, чтобы упакованные запуски Playwright/E2E могли загрузить хук инструментирования на Linux.
- **fix(api):** Валидация websocket-моста Codex Responses и JSON-нагрузок `/v1/batches` с помощью Zod перед использованием, что сохраняет валидацию маршрутов `request.json()` в рабочем состоянии и возвращает явные ответы 400 для недействительных тел запроса.
- **fix(providers):** Добавление явного типизирования для вспомогательных функций псевдонимов и категорий провайдеров, чтобы строгий CI-гейт `typecheck:noimplicit:core` проходил успешно.
- **fix(ui):** Сохранение метки страницы деталей провайдера прокси upstream с запасным интерфейсом управления «Управляется через настройки прокси upstream», когда переводы недоступны.
- **fix(electron):** Укрепление CSP для продакшн-десктопной версии путем удаления `unsafe-eval` вне режима разработки и добавления ограничений для object, base URI, form action, frame ancestor и worker.
- **fix(cli):** Замена путей выполнения команд с интерполяцией shell на вспомогательные функции `spawn`/`execFile` на основе аргументов для настройки базы данных, команд Tailscale с sudo, редактирования DNS MITM и процессов установки/удаления сертификатов.
- **fix(ui):** Повышение устойчивости иконок провайдеров путем использования компонентов `@lobehub/icons` напрямую в первую очередь, а затем локальных резервных PNG/SVG, избегая peer-рантайма `@lobehub/ui` в дашборде.

- **fix(transcription)**: Транскрипция аудио Deepgram и HuggingFace теперь корректно отображает `video/mp4` → `audio/mp4` и другие MIME-типы медиа с помощью нового вспомогательного метода `resolveAudioContentType()`. Ранее загрузка файлов `.mp4` последовательно возвращала «Речь не обнаружена», так как Deepgram получал `Content-Type: video/mp4`.
- **fix(transcription)**: Добавлен параметр `detect_language=true` в запросы Deepgram — автоматическое определение языка аудио (португальский, испанский и т. д.) вместо использования английского по умолчанию. Исправляет проблему, когда транскрипция неанглийских языков возвращала пустые или бессмысленные результаты.
- **fix(transcription)**: Добавлен параметр `punctuate=true` в запросы Deepgram для получения транскрипции более высокого качества с правильной пунктуацией.
- **fix(tts)**: Исправлено отображение ошибки `[object Object]` в ответах Text-to-Speech в обоих файлах `audioSpeech.ts` и `audioTranscription.ts`. Функция `upstreamErrorResponse()` теперь корректно извлекает вложенные строковые сообщения от провайдеров, таких как ElevenLabs, которые возвращают `{ error: { message: "...", status_code: 401 } }`, а не плоскую строку ошибки.

### 🧪 Тесты

- Набор тестов: **821 тест, 0 сбоев** (без изменений)

### Отсортированные проблемы

- **#508** — Регрессия формата вызова инструментов: запрошены журналы прокси и информация о цепочке провайдеров (`needs-info`)
- **#510** — Путь healthcheck CLI для Windows: запрошена информация о версии shell/Node (`needs-info`)
- **#485** — Вызовы инструментов Kiro MCP: закрыто как внешняя проблема Kiro (не OmniRoute)
- **#442** — Эндпоинт /models Baseten: закрыто (задокументировано ручное решение)
- **#464** — API предоставления ключей: признано элементом дорожной карты

---

---

---

## [2.9.1] — 2026-03-21

> Sprint: Fix SSE omniModel data loss, merge per-protocol model compatibility.

### Bug Fixes

- **#511** — Critical: Тег `<omniModel>` отправлялся после `finish_reason:stop` в потоковых SSE, что приводило к потере данных. Теперь тег вставляется в первый непустой контентный чанк, гарантируя доставку перед закрытием соединения SDK.

### Merged PRs

- **PR #512** (@zhangqiang8vip): Совместимость моделей по протоколам — `normalizeToolCallId` и `preserveOpenAIDeveloperRole` теперь могут быть настроены по протоколам клиента (OpenAI, Claude, Responses API). Новое поле `compatByProtocol` в конфигурации модели с валидацией Zod.

### Triaged Issues

- **#510** — Windows CLI healthcheck_failed: запрошены PATH/version info
- **#509** — Turbopack Electron regression: баг в Next.js, описаны обходные пути
- **#508** — macOS black screen: предложен обходной путь `--disable-gpu`

---

---

---

## [2.9.0] — 2026-03-20

> Sprint: Cross-platform machineId fix, per-API-key rate limits, streaming context cache, Alibaba DashScope, search analytics, ZWS v5, and 8 issues closed.

### ✨ New Features

- **feat(docs):** интеграция многостраничной документации в OmniRoute dashboard (#1969)
- **feat(settings):** добавлена настройка лимита размера тела запроса (#1968)
- **feat(auth):** добавлен клиентский секрет OAuth по умолчанию для Gemini CLI (#1974)
- **feat(models):** контекстные окна моделей.dev теперь доступны через /v1/models (#1972)
- **fix(db):** исправлена проблема с резервным шифрованием, вызывающая циклы перешифровки (#1941)
- **fix(auth):** исправлена очистка ответа final_answer для Codex assistant (#1965)

- **feat(providers):** Реализована генерация и редактирование изображений для ChatGPT Web, включая генерацию изображений в чате и кэширование (#1606).
- **feat(ui):** Интеграция логотипа OpenCode Zen/Go API и улучшение взаимодействия с API ключами (#1607).

- **feat(providers):** Добавлен AgentRouter как новый провайдер, совместимый с OpenAI, с $200 бесплатных кредитов при регистрации (Issue #1572).
- **feat(ui):** Реализована возможность тестирования моделей по запросу в панели провайдера, позволяющая выполнять диагностические проверки с одним токеном без триггера лимитов (Issue #1532).

- **feat(search)**: Вкладка аналитики поиска в `/dashboard/analytics` — разбивка по провайдерам, кэш-попадания, отслеживание затрат. Новый API: `GET /api/v1/search/analytics` (#feat/search-provider-routing)
- **feat(provider)**: Добавлен Alibaba Cloud DashScope с валидацией пользовательских путей конечных точек — настраиваемые `chatPath` и `modelsPath` для каждого узла (#feat/custom-endpoint-paths)
- **feat(api)**: Лимиты запросов по API-ключам — `max_requests_per_day` и `max_requests_per_minute` с контролем скользящего окна в памяти, возвращающим HTTP 429 (#452)
- **feat(dev)**: ZWS v5 — исправление утечек HMR (485 соединений БД → 1), память 2.4GB → 195MB, `globalThis` синглтоны, исправление предупреждений Edge Runtime (@zhangqiang8vip)

### 🐛 Bug Fixes

- **fix(mitm):** Компиляция утилит MITM как NodeNext ESM во время prepublish, копирование сервера MITM CommonJS в автономный артефакт, и исправление путей данных MITM без зависимости от алиасов Next.js в упакованном рантайме.
- **fix(build):** Перемещение локального префикса `.tmp/wine32` Wine вне пути сборки Next.js, чтобы артефакты Windows Electron не вызывали `EACCES` сканирования во время сборки Node 24.
- **fix(build):** Копирование директории `wreq-js` в изолированный выходной путь Next.js, чтобы упакованные Playwright/E2E могли загружать хук инструментации на Linux.
- **fix(api):** Валидация вебсокет-моста Codex Responses и `/v1/batches` JSON с Zod перед использованием, сохраняя валидацию `request.json()` и возвращая явные 400 для неверных тел.
- **fix(providers):** Добавлена явная типизация для помощников псевдонимов и категорий провайдеров, чтобы пройти проверку `typecheck:noimplicit:core` в CI.
- **fix(ui):** Сохранение страницы деталей провайдера с прокси-метками, помеченной "Управляется через настройки прокси" при отсутствии переводов.
- **fix(electron):** Укрепление CSP для продакшена: удаление `unsafe-eval` вне разработки, добавление ограничений для объектов, базового URI, действий формы, предков фреймов и воркеров.
- **fix(cli):** Замена интерполированных путей установки и привилегированных команд на аргумент-ориентированные хелперы `spawn`/`execFile` для настройки БД, sudo-команд Tailscale, редактирования DNS MITM и установки/удаления сертификатов.
- **fix(ui):** Устойчивость иконок провайдеров: использование компонентов `@lobehub/icons` напрямую, затем локальных PNG/SVG, избегая `@lobehub/ui` в рантайме панели.

- **fix(#506)**: Cross-platform `machineId` — `getMachineIdRaw()` переписан с try/catch водопадом (Windows REG.exe → macOS ioreg → чтение файла Linux → hostname → `os.hostname()`). Устраняет ветвление `process.platform`, которое Next.js bundler удалил как мертвый код, исправляя `'head' is not recognized` на Windows. Также исправляет #466.
- **fix(#493)**: Наименование моделей пользовательских провайдеров — удалено неверное удаление префикса в `DefaultExecutor.transformRequest()`, что искажало именование моделей с префиксом организации, например, `zai-org/GLM-5-FP8`.
- **fix(#490)**: Защита контекста кэша для потоковых ответов — `TransformStream` перехватывает SSE для вставки тега `<omniModel>` перед маркером `[DONE]`, обеспечивая защиту контекста кэша.
- **fix(#458)**: Валидация комбо-схем — поля `system_message`, `tool_filter_regex`, `context_cache_protection` теперь проходят валидацию Zod при сохранении.
- **fix(#487)**: Очистка карточек KIRO MITM — удален ZWS_README, унифицирован `AntigravityToolCard` для использования динамических метаданных инструментов.

### 🧪 Tests

- Добавлены юнит-тесты для фильтра инструментов в формате Anthropic (PR #397) — 8 регрессионных тестов для `tool.name` без обертки `.function`
- Тестовый набор: **821 тестов, 0 неудач** (было 813)

### 📋 Issues Closed (8)

- **#506** — Windows machineId `head` not recognized (fixed)
- **#493** — Наименование моделей пользовательских провайдеров (fixed)
- **#490** — Защита контекста кэша для потоковых ответов (fixed)
- **#452** — Лимиты запросов по API-ключам (implemented)
- **#466** — Windows login failure (same root cause as #506)
- **#504** — MITM inactive (expected behavior)
- **#462** — Gemini CLI PSA (resolved)
- **#434** — Electron app crash (duplicate of #402)

---

---

## [2.8.9] — 2026-03-20

> Sprint: Merge community PRs, fix KIRO MITM card, dependency updates.

### Merged PRs

- **PR #498** (@Sajid11194): Исправлена ошибка сбоя идентификатора машины Windows (`undefined\REG.exe`). Заменен `node-machine-id` на нативные запросы к реестру ОС. **Закрывает #486.**
- **PR #497** (@zhangqiang8vip): Исправлены утечки ресурсов HMR в режиме разработки — 485 утерянных подключений к БД → 1, память 2.4GB → 195MB. Синглтоны `globalThis`, исправление предупреждения Edge Runtime, стабильность тестов на Windows. (+1168/-338 в 22 файлах)
- **PRs #499-503** (Dependabot): Обновления GitHub Actions — `docker/build-push-action@7`, `actions/checkout@6`, `peter-evans/dockerhub-description@5`, `docker/setup-qemu-action@4`, `docker/login-action@4`.

### Bug Fixes

- **#505** — Карта KIRO MITM теперь отображает инструмент-специфичные инструкции (`api.anthropic.com`) вместо текста, специфичного для Antigravity.
- **#504** — Ответ с уточнением UX (MITM "Inactive" — ожидаемое поведение, когда прокси не запущен).

---

---

---

## [2.8.8] — 2026-03-20

> Sprint: Fix OAuth batch test crash, add "Test All" button to individual provider pages.

### Bug Fixes

- **OAuth batch test crash** (ERR_CONNECTION_REFUSED): Заменен последовательный for-loop на ограничение 5 одновременных соединений + таймаут 30 секунд на соединение через `Promise.race()` + `Promise.allSettled()`. Предотвращает сбой сервера при тестировании больших групп провайдеров OAuth (~30+ соединений).

### Features

- **"Test All" button on provider pages**: Страницы отдельных провайдеров (например, `/providers/codex`) теперь показывают кнопку "Test All" в заголовке Connections, если есть 2+ соединения. Использует `POST /api/providers/test-batch` с `{mode: "provider", providerId}`. Результаты отображаются в модальном окне с сводкой по прохождению/непрохождению и диагностикой по каждому соединению.

---

---

---

## [2.8.7] — 2026-03-20

> Sprint: Merge PR #495 (Bottleneck 429 drop), fix #496 (custom embedding providers), triage features.

### Bug Fixes

- **Bottleneck 429 infinite wait** (PR #495 by @xandr0s): При получении 429, `limiter.stop({ dropWaitingJobs: true })` немедленно отменяет все ожидающие запросы, чтобы вызывающие функции могли активировать резервный вариант. Лимитер удаляется из Map, чтобы следующий запрос создал новый экземпляр.
- **Custom embedding models unresolvable** (#496): `POST /v1/embeddings` теперь разрешает пользовательские модели встраивания из ВСЕХ provider_nodes (а не только localhost). Включает модели, такие как `google/gemini-embedding-001`, добавленные через панель управления.

### Issues Responded

- **#452** — Ограничения на количество запросов по API-ключам (подтверждено, в планах)
- **#464** — Автоматическое создание API-ключей с ограничениями провайдера/аккаунта (требуется больше деталей)
- **#488** — Автоматическое обновление списков моделей (подтверждено, в планах)
- **#496** — Разрешение пользовательских провайдеров встраивания (исправлено)

---

---

---

## [2.8.6] — 2026-03-20

> Sprint: Merge PR #494 (MiniMax role fix), fix KIRO MITM dashboard, triage 8 issues.

### Features

- **MiniMax developer→system role fix** (PR #494 by @zhangqiang8vip): Переключатель `preserveDeveloperRole` для каждой модели. Добавлен интерфейс "Compatibility" на странице провайдеров. Исправляет ошибку 422 "role param error" для MiniMax и аналогичных шлюзов.
- **roleNormalizer**: `normalizeDeveloperRole()` теперь принимает параметр `preserveDeveloperRole` с трехсоставным поведением (undefined=сохранить, true=сохранить, false=преобразовать).
- **DB**: Новые функции `getModelPreserveOpenAIDeveloperRole()` и `mergeModelCompatOverride()` в `models.ts`.

### Bug Fixes

- **KIRO MITM dashboard** (#481/#487): `CLIToolsPageClient` теперь перенаправляет любой `configType: "mitm"` инструмент на `AntigravityToolCard` (управление MITM Start/Stop). Ранее только Antigravity был жестко закодирован.
- **AntigravityToolCard generic**: Использует `tool.image`, `tool.description`, `tool.id` вместо жестко закодированных значений Antigravity. Защита от отсутствующих `defaultModels`.

### Cleanup

- Удален `ZWS_README_V2.md` (документация для разработки из PR #494).

### Issues Triaged (8)

- **#487** — Закрыто (KIRO MITM исправлен в этом релизе)
- **#486** — needs-info (проблема с REG.exe PATH в Windows)
- **#489** — needs-info (отсутствует projectId в Antigravity, требуется повторное подключение OAuth)
- **#492** — needs-info (отсутствует app/server.js в mise-managed Node)
- **#490** — Подтверждено (потоковая передача + кэш контекста блокирует, исправление запланировано)
- **#491** — Подтверждено (несоответствие состояния аутентификации Codex)
- **#493** — Подтверждено (префикс имени модели провайдера Modal, предоставлено временное решение)
- **#488** — Запрос на функцию в бэклоге (автоматическое обновление списков моделей)

---

---

## [2.8.5] — 2026-03-19

> Sprint: Fix zombie SSE streams, context cache first-turn, KIRO MITM, and triage 5 external issues.

### Bug Fixes

- **Zombie SSE Streams** (#473): Уменьшить `STREAM_IDLE_TIMEOUT_MS` с 300s → 120s для более быстрого переключения на резервный вариант, когда провайдеры зависают во время потока. Настраивается через переменную окружения.
- **Context Cache Tag** (#474): Исправить `injectModelTag()` для обработки запросов с первого хода (без сообщений от ассистента) — защита контекстного кэша теперь работает с самого первого ответа.
- **KIRO MITM** (#481): Изменить `configType` для KIRO с `guide` → `mitm`, чтобы панель управления отображала элементы управления запуском/остановкой MITM.
- **E2E Test** (CI): Исправить `providers-bailian-coding-plan.spec.ts` — закрыть существующее модальное окно перед нажатием кнопки "Добавить API-ключ".

### Closed Issues

- #473 — Zombie SSE streams bypass combo fallback
- #474 — Context cache `<omniModel>` tag missing on first turn
- #481 — MITM for KIRO not activatable from dashboard
- #468 — Gemini CLI remote server (superseded by #462 deprecation)
- #438 — Claude unable to write files (external CLI issue)
- #439 — AppImage doesn't work (documented libfuse2 workaround)
- #402 — ARM64 DMG "damaged" (documented xattr -cr workaround)
- #460 — CLI not runnable on Windows (documented PATH fix)

---

---

---

## [2.8.4] — 2026-03-19

> Sprint: Gemini CLI deprecation, VM guide i18n fix, dependabot security fix, provider schema expansion.

### Features

- **Gemini CLI Deprecation** (#462): Пометить провайдер `gemini-cli` как устаревший с предупреждением — Google ограничивает использование OAuth-авторизации сторонними приложениями с марта 2026 года.
- **Provider Schema** (#462): Расширить валидацию Zod с добавлением необязательных полей `deprecated`, `deprecationReason`, `hasFree`, `freeNote`, `authHint`, `apiHint`.

### Bug Fixes

- **VM Guide i18n** (#471): Добавить `VM_DEPLOYMENT_GUIDE.md` в конвейер перевода i18n, перегенерировать все 30 языковых версий из исходного английского (были застряли на португальском).

### Security

- **deps**: Обновить `flatted` с 3.3.3 → 3.4.2 — исправляет CWE-1321 загрязнение прототипа (#484, @dependabot).

### Closed Issues

- #472 — Model Aliases regression (fixed in v2.8.2)
- #471 — VM guide translations broken
- #483 — Trailing `data: null` after `[DONE]` (fixed in v2.8.3)

### Merged PRs

- #484 — deps: bump flatted from 3.3.3 to 3.4.2 (@dependabot)

---

---

---

## [2.8.3] — 2026-03-19

> Sprint: Czech i18n, SSE protocol fix, VM guide translation.

### Features

- **Czech Language** (#482): Полный перевод на чешский (cs) — 22 документа, 2606 строк интерфейса, обновление переключателя языков (@zen0bit).
- **VM Deployment Guide**: Переведено с португальского на английский как исходный документ (@zen0bit).

### Bug Fixes

- **SSE Protocol** (#483): Прекратить отправку `data: null` после сигнала `[DONE]` — исправляет `AI_TypeValidationError` в строгих клиентах AI SDK (валидаторы на основе Zod).

### Merged PRs

- #482 — Add Czech language + Fix VM_DEPLOYMENT_GUIDE.md English source (@zen0bit)

---

---

---

## [2.8.2] — 2026-03-19

> Sprint: 2 merged PRs, model aliases routing fix, log export, and issue triage.

### Features

- **Log Export**: Новая кнопка "Экспорт" на `/dashboard/logs` с выпадающим списком временных интервалов (1ч, 6ч, 12ч, 24ч). Загружает JSON с логами запросов, прокси и вызовов через API `/api/logs/export` (#user-request).

### Bug Fixes

- **Model Aliases Routing** (#472): Настройки → Псевдонимы моделей теперь правильно влияют на маршрутизацию провайдеров, а не только на обнаружение форматов. Ранее вывод `resolveModelAlias()` использовался только для `getModelTargetFormat()`, но оригинальный идентификатор модели отправлялся провайдеру.
- **Stream Flush Usage** (#480): Данные об использовании из последнего события SSE в буфере теперь правильно извлекаются во время сброса потока (слияно от @prakersh).

### Merged PRs

- #480 — Extract usage from remaining buffer in flush handler (@prakersh)
- #479 — Add missing Codex 5.3/5.4 and Anthropic model ID pricing entries (@prakersh)

---

---

---

## [2.8.1] — 2026-03-19

> Sprint: Five community PRs — streaming call log fixes, Kiro compatibility, cache token analytics, Chinese translation, and configurable tool call IDs.

### ✨ Features

- **feat(logs)**: Контент ответа в логах вызовов теперь корректно накапливается из исходных чанков провайдеров (OpenAI/Claude/Gemini) перед переводом, что исправляет пустые полезные нагрузки ответов в режиме потоковой передачи (#470, @zhangqiang8vip)
- **feat(providers)**: Настраиваемые 9-символьные идентификаторы вызовов инструментов (стиль Mistral) — только модели с включенной опцией получают усеченные идентификаторы (#470)
- **feat(api)**: API PATCH ключа расширен для поддержки полей `allowedConnections`, `name`, `autoResolve`, `isActive`, и `accessSchedule` (#470)
- **feat(dashboard)**: Макет с приоритетом ответа в детальном интерфейсе логов запросов (#470)
- **feat(i18n)**: Улучшен перевод на китайский (zh-CN) — полная переработка (#475, @only4copilot)

### 🐛 Bug Fixes

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, скопировать сервер MITM CommonJS в автономный артефакт и разрешить пути данных MITM без зависимости от псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс `.tmp/wine32` Wine из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборок Node 24.
- **fix(build):** Скопировать каталог `wreq-js` в изолированный выходной каталог Next.js, чтобы упакованные Playwright/E2E могли загрузить хук инструментации на Linux.
- **fix(api):** Проверять вебсокет-мост Codex Responses и `/v1/batches` JSON полезные нагрузки с помощью Zod перед использованием, сохраняя зеленый маршрут проверки `request.json()` и возвращая явные 400 ответы для недопустимых тел.
- **fix(providers):** Добавить явное типизирование для помощников псевдонимов и категорий провайдеров, чтобы пройти строгий `typecheck:noimplicit:core` CI gate.
- **fix(ui):** Сохранить страницу деталей прокси-провайдера с меткой "Управляется через настройки прокси-сервера" при отсутствии переводов.
- **fix(electron):** Укрепление CSP для рабочей среды десктопа путем удаления `unsafe-eval` вне разработки и добавления ограничений объекта, базового URI, действия формы, предка фрейма и работника.
- **fix(cli):** Заменить пути установки и выполнения команд с интерполяцией оболочки на помощники `spawn`/`execFile` на основе аргументов для настройки базы данных, команд Tailscale sudo, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранить иконки провайдеров устойчивыми, используя сначала компоненты `@lobehub/icons`, затем локальные резервные PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели управления.

- **fix(kiro)**: Удалить внедренное поле `model` из тела запроса — API Kiro отклоняет неизвестные поля верхнего уровня (#478, @prakersh)
- **fix(usage)**: Включить токены чтения кэша и создания кэша в общие суммы входных данных истории использования для точной аналитики (#477, @prakersh)
- **fix(callLogs)**: Поддержка полей использования в формате Claude (`input_tokens`/`output_tokens`) наряду с форматом OpenAI, включение всех вариантов токенов кэша (#476, @prakersh)

---

---

---

## [2.8.0] — 2026-03-19

> Sprint: Bailian Coding Plan provider with editable base URLs, plus community contributions for Alibaba Cloud and Kimi Coding.

### ✨ Features

- **feat(providers)**: Добавлен провайдер Bailian Coding Plan (`bailian-coding-plan`) — Alibaba Model Studio с совместимым API от Anthropic. Статический каталог из 8 моделей, включая Qwen3.5 Plus, Qwen3 Coder, MiniMax M2.5, GLM 5 и Kimi K2.5. Включает пользовательскую проверку аутентификации (400=валидный, 401/403=невалидный) (#467, @Mind-Dragon)
- **feat(admin)**: Редактируемый базовый URL в потоке создания/редактирования провайдера в Админке — пользователи могут настраивать пользовательские базовые URL-адреса для каждого подключения. Сохраняется в `providerSpecificData.baseUrl` с валидацией схемы Zod, которая отклоняет схемы, не являющиеся http(s) (#467)

### 🧪 Tests

- Добавлено 30+ юнит-тестов и 2 сценария e2e для провайдера Bailian Coding Plan, покрывающих проверку аутентификации, усиление схемы, поведение на уровне маршрута и межслойную интеграцию

---

---

---

## [2.7.10] — 2026-03-19

> Sprint: Two new community-contributed providers (Alibaba Cloud Coding, Kimi Coding API-key) and Docker pino fix.

### ✨ Features

- **feat(providers)**: Добавлена поддержка Alibaba Cloud Coding Plan с двумя совместимыми с OpenAI конечными точками — `alicode` (Китай) и `alicode-intl` (Международный), каждая из которых имеет 8 моделей (#465, @dtk1985)
- **feat(providers)**: Добавлен отдельный путь провайдера `kimi-coding-apikey` — доступ к Kimi Coding через API-ключ больше не принудительно осуществляется через маршрут OAuth-only `kimi-coding`. Включает реестр, константы, API моделей, конфигурацию и тесты валидации (#463, @Mind-Dragon)

### 🐛 Bug Fixes

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, скопировать сервер MITM CommonJS в автономный артефакт и разрешить пути данных MITM без зависимости от псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс `.tmp/wine32` Wine из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать каталог времени выполнения `wreq-js` в изолированный выходной каталог Next.js standalone, чтобы упакованные Playwright/E2E могли загрузить хук инструментации на Linux.
- **fix(api):** Валидировать мост websocket Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую валидацию маршрута `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавить явное типизирование помощников псевдонимов и категорий провайдера, чтобы пройти шлюз CI `typecheck:noimplicit:core`.
- **fix(ui):** Сохранить страницу деталей провайдера прокси-сервера в состоянии с меткой "Управляется через настройки прокси-сервера вверху" при отсутствии переводов.
- **fix(electron):** Усилить CSP рабочего стола в производстве, удалив `unsafe-eval` вне разработки и добавив ограничения объекта, базового URI, действия формы, предка фрейма и работника.
- **fix(cli):** Заменить пути установки и выполнения команд с интерполяцией оболочки на помощников `spawn`/`execFile` на основе аргументов для настройки базы данных, команд Tailscale sudo, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сделать значки провайдеров устойчивыми, используя сначала прямые компоненты `@lobehub/icons`, затем локальные резервные копии PNG/SVG, избегая времени выполнения `@lobehub/ui` peer в панели инструментов.

- **fix(docker)**: Добавлена отсутствующая зависимость `split2` в образ Docker — `pino-abstract-transport` требует ее во время выполнения, но она не копировалась в автономный контейнер, что приводило к сбоям `Cannot find module 'split2'` (#459)

---

---

## [2.7.9] — 2026-03-18

> Sprint: Codex responses subpath passthrough natively supported, Windows MITM crash fixed, and Combos agent schemas adjusted.

### ✨ Features

- **feat(codex)**: Нативный перенаправление ответов subpath для Codex — перенаправляет `POST /v1/responses/compact` в Codex upstream, сохраняя совместимость с Claude Code без удаления суффикса `/compact` (#457)

### 🐛 Bug Fixes

- **fix(mitm):** Компилировать MITM утилиты как NodeNext ESM во время prepublish, копировать CommonJS MITM сервер в автономный артефакт, и разрешать MITM data пути без зависимости от Next.js aliases в упакованном runtime.
- **fix(build):** Переместить локальный `.tmp/wine32` Wine prefix из изолированного Next.js build path, чтобы Windows Electron packaging artifacts не могли вызвать `EACCES` сканирование во время Node 24 builds.
- **fix(build):** Копировать директорию `wreq-js` native runtime в изолированный Next.js standalone output, чтобы упакованный Playwright/E2E мог загрузить instrumentation hook на Linux.
- **fix(api):** Валидировать Codex Responses websocket bridge и `/v1/batches` JSON payloads с Zod перед использованием, сохраняя `request.json()` route validation green и возвращая явные 400 responses для невалидных тел.
- **fix(providers):** Добавить явное типирование для provider alias и category helpers, чтобы strict `typecheck:noimplicit:core` CI gate прошел.
- **fix(ui):** Сохранить upstream proxy provider detail page с меткой fallback "Managed via Upstream Proxy Settings" management surface, когда переводы недоступны.
- **fix(electron):** Усилить production desktop CSP, удалив `unsafe-eval` вне development и добавив object, base URI, form action, frame ancestor, и worker restrictions.
- **fix(cli):** Заменить shell-interpolated setup и privileged command execution paths на argument-based `spawn`/`execFile` helpers для database setup, Tailscale sudo commands, MITM DNS edits, и certificate install/uninstall flows.
- **fix(ui):** Сохранить provider icons устойчивыми, используя direct `@lobehub/icons` components сначала, затем local PNG/SVG fallbacks, избегая `@lobehub/ui` peer runtime в dashboard.

- **fix(combos)**: Zod схемы (`updateComboSchema` и `createComboSchema`) теперь включают `system_message`, `tool_filter_regex`, и `context_cache_protection`. Исправляет баг, где agent-specific настройки, созданные через dashboard, были молча отброшены backend validation layer (#458)
- **fix(mitm)**: Kiro MITM profile crash на Windows исправлен — `node-machine-id` упал из-за отсутствия `REG.exe` env, и fallback выбросил fatal `crypto is not defined` error. Fallback теперь безопасно и корректно импортирует crypto (#456)

---

---

---

## [2.7.8] — 2026-03-18

> Sprint: Budget save bug + combo agent features UI + omniModel tag security fix.

### 🐛 Bug Fixes

- **fix(mitm):** Компилировать MITM утилиты как NodeNext ESM во время prepublish, копировать CommonJS MITM сервер в автономный артефакт, и разрешать MITM data пути без зависимости от Next.js aliases в упакованном runtime.
- **fix(build):** Переместить локальный `.tmp/wine32` Wine prefix из изолированного Next.js build path, чтобы Windows Electron packaging artifacts не могли вызвать `EACCES` сканирование во время Node 24 builds.
- **fix(build):** Копировать директорию `wreq-js` native runtime в изолированный Next.js standalone output, чтобы упакованный Playwright/E2E мог загрузить instrumentation hook на Linux.
- **fix(api):** Валидировать Codex Responses websocket bridge и `/v1/batches` JSON payloads с Zod перед использованием, сохраняя `request.json()` route validation green и возвращая явные 400 responses для невалидных тел.
- **fix(providers):** Добавить явное типирование для provider alias и category helpers, чтобы strict `typecheck:noimplicit:core` CI gate прошел.
- **fix(ui):** Сохранить upstream proxy provider detail page с меткой fallback "Managed via Upstream Proxy Settings" management surface, когда переводы недоступны.
- **fix(electron):** Усилить production desktop CSP, удалив `unsafe-eval` вне development и добавив object, base URI, form action, frame ancestor, и worker restrictions.
- **fix(cli):** Заменить shell-interpolated setup и privileged command execution paths на argument-based `spawn`/`execFile` helpers для database setup, Tailscale sudo commands, MITM DNS edits, и certificate install/uninstall flows.
- **fix(ui):** Сохранить provider icons устойчивыми, используя direct `@lobehub/icons` components сначала, затем local PNG/SVG fallbacks, избегая `@lobehub/ui` peer runtime в dashboard.

- **fix(budget)**: "Save Limits" больше не возвращает 422 — `warningThreshold` теперь корректно отправляется как дробь (0–1) вместо процента (0–100) (#451)
- **fix(combos)**: `<omniModel>` internal cache tag теперь удаляется перед перенаправлением запросов к провайдерам, предотвращая cache session breaks (#454)

### ✨ Features

- **feat(combos)**: Добавлен раздел Agent Features в combo create/edit modal — экспонировать `system_message` override, `tool_filter_regex`, и `context_cache_protection` напрямую из dashboard (#454)

---

---

---

## [2.7.7] — 2026-03-18

> Sprint: Docker pino crash, Codex CLI responses worker fix, package-lock sync.

### 🐛 Bug Fixes

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать сервер CommonJS MITM в автономный артефакт и разрешать пути данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать каталог `wreq-js` в изолированный выходной каталог Next.js, чтобы упакованные запуски Playwright/E2E могли загрузить хук инструментации на Linux.
- **fix(api):** Проверять веб-сокетный мост Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую проверку маршрута `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавить явное типизирование помощников псевдонимов и категорий поставщиков, чтобы строгий шлюз CI `typecheck:noimplicit:core` прошел.
- **fix(ui):** Сохранять страницу сведений о поставщике прокси-сервера вверх по потоку с меткой резервного варианта "Управляется через настройки прокси-сервера вверх по потоку", когда переводы недоступны.
- **fix(electron):** Усилить CSP рабочего стола в производстве, удалив `unsafe-eval` вне разработки и добавив ограничения объекта, базового URI, действия формы, предка фрейма и рабочего процесса.
- **fix(cli):** Заменить пути установки и выполнения привилегированных команд с интерполяцией оболочки на помощников `spawn`/`execFile` на основе аргументов для настройки базы данных, команд sudo Tailscale, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранять значки поставщиков устойчивыми, используя сначала компоненты `@lobehub/icons`, затем резервные варианты PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели инструментов.

- **fix(docker)**: `pino-abstract-transport` и `pino-pretty` теперь явно скопированы в этапе Docker runner — трассировка Next.js standalone пропускает эти зависимые от сверстников, вызывая сбой `Cannot find module pino-abstract-transport` при запуске (#449)
- **fix(responses)**: Удалить `initTranslators()` из маршрута `/v1/responses` — он вызывал сбой Next.js worker с `the worker has exited` uncaughtException на запросах Codex CLI (#450)

### 🔧 Maintenance

- **chore(deps)**: `package-lock.json` теперь фиксируется при каждом увеличении версии, чтобы Docker `npm ci` использовал точные версии зависимостей

---

---

---

## [2.7.5] — 2026-03-18

> Sprint: UX improvements and Windows CLI healthcheck fix.

### 🐛 Bug Fixes

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать сервер CommonJS MITM в автономный артефакт и разрешать пути данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать каталог `wreq-js` в изолированный выходной каталог Next.js, чтобы упакованные запуски Playwright/E2E могли загрузить хук инструментации на Linux.
- **fix(api):** Проверять веб-сокетный мост Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую проверку маршрута `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавить явное типизирование помощников псевдонимов и категорий поставщиков, чтобы строгий шлюз CI `typecheck:noimplicit:core` прошел.
- **fix(ui):** Сохранять страницу сведений о поставщике прокси-сервера вверх по потоку с меткой резервного варианта "Управляется через настройки прокси-сервера вверх по потоку", когда переводы недоступны.
- **fix(electron):** Усилить CSP рабочего стола в производстве, удалив `unsafe-eval` вне разработки и добавив ограничения объекта, базового URI, действия формы, предка фрейма и рабочего процесса.
- **fix(cli):** Заменить пути установки и выполнения привилегированных команд с интерполяцией оболочки на помощники `spawn`/`execFile` на основе аргументов для настройки базы данных, команд sudo Tailscale, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранять значки поставщиков устойчивыми, используя сначала компоненты `@lobehub/icons`, затем резервные варианты PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели инструментов.

- **fix(ux)**: Показать подсказку пароля по умолчанию на странице входа — новые пользователи теперь видят `"Default password: 123456"` под полем ввода пароля (#437)
- **fix(cli)**: Инструменты Claude CLI и другие, установленные через npm, теперь корректно определяются как запускаемые на Windows — spawn использует `shell:true` для разрешения оболочек `.cmd` через PATHEXT (#447)

---

---

---

## [2.7.4] — 2026-03-18

> Sprint: Search Tools dashboard, i18n fixes, Copilot limits, Serper validation fix.

### 🚀 Features

- **feat(search)**: Добавлен Search Playground (10-й эндпоинт), страница Search Tools с Compare Providers/Rerank Pipeline/Search History, локальное маршрутирование rerank, защита auth на search API (#443 by @Regis-RCR)
  - Новый маршрут: `/dashboard/search-tools`
  - Запись в боковой панели в разделе Debug
  - `GET /api/search/providers` и `GET /api/search/stats` с защитой auth
  - Локальное маршрутирование provider_nodes для `/v1/rerank`
  - 30+ ключей i18n в пространстве имен search

### 🐛 Bug Fixes

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать сервер CommonJS MITM в артефакт standalone, и разрешать пути данных MITM без зависимости от псевдонимов Next.js в упакованном runtime.
- **fix(build):** Переместить локальный префикс `.tmp/wine32` Wine из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборок Node 24.
- **fix(build):** Скопировать директорию `wreq-js` в изолированный вывод standalone Next.js, чтобы упакованные Playwright/E2E могли загружать хук инструментации на Linux.
- **fix(api):** Валидировать payloadы вебсокета Codex Responses и `/v1/batches` с помощью Zod перед использованием, сохраняя зеленый `request.json()` и возвращая явные 400 ответы для неверных тел.
- **fix(providers):** Добавить явное типизирование для помощников псевдонимов и категорий провайдеров, чтобы пройти строгий `typecheck:noimplicit:core` CI gate.
- **fix(ui):** Сохранить страницу деталей провайдера upstream proxy с меткой "Managed via Upstream Proxy Settings" при отсутствии переводов.
- **fix(electron):** Усилить CSP для продакшена на десктопе, удалив `unsafe-eval` вне разработки и добавив ограничения для объектов, базового URI, действий формы, предков фрейма и воркеров.
- **fix(cli):** Заменить пути установки и выполнения привилегированных команд с интерполяцией shell на помощников `spawn`/`execFile` на основе аргументов для настройки базы данных, sudo команд Tailscale, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранить иконки провайдеров устойчивыми, используя сначала компоненты `@lobehub/icons`, затем локальные PNG/SVG резервные копии, избегая runtime `@lobehub/ui` в дашборде.

- **fix(search)**: Исправлен нормализатор новостей Brave (возвращал 0 результатов), применена обрезка max_results после нормализации, исправлен URL fetch на странице Endpoints (#443 by @Regis-RCR)
- **fix(analytics)**: Локализовать метки дня/даты аналитики — заменить жестко закодированные португальские строки на `Intl.DateTimeFormat(locale)` (#444 by @hijak)
- **fix(copilot)**: Исправить отображение типа аккаунта GitHub Copilot, отфильтровать вводящие в заблуждение строки с неограниченным квотом из дашборда лимитов (#445 by @hijak)
- **fix(providers)**: Прекратить отклонение допустимых ключей API Serper — считать не-4xx ответы допустимой аутентификацией (#446 by @hijak)

---

---

---

## [2.7.3] — 2026-03-18

> Sprint: Codex direct API quota fallback fix.

### 🐛 Bug Fixes

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать сервер CommonJS MITM в артефакт standalone, и разрешать пути данных MITM без зависимости от псевдонимов Next.js в упакованном runtime.
- **fix(build):** Переместить локальный префикс `.tmp/wine32` Wine из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборок Node 24.
- **fix(build):** Скопировать директорию `wreq-js` в изолированный вывод standalone Next.js, чтобы упакованные Playwright/E2E могли загружать хук инструментации на Linux.
- **fix(api):** Валидировать payloadы вебсокета Codex Responses и `/v1/batches` с помощью Zod перед использованием, сохраняя зеленый `request.json()` и возвращая явные 400 ответы для неверных тел.
- **fix(providers):** Добавить явное типизирование для помощников псевдонимов и категорий провайдеров, чтобы пройти строгий `typecheck:noimplicit:core` CI gate.
- **fix(ui):** Сохранить страницу деталей провайдера upstream proxy с меткой "Managed via Upstream Proxy Settings" при отсутствии переводов.
- **fix(electron):** Усилить CSP для продакшена на десктопе, удалив `unsafe-eval` вне разработки и добавив ограничения для объектов, базового URI, действий формы, предков фрейма и воркеров.
- **fix(cli):** Заменить пути установки и выполнения привилегированных команд с интерполяцией shell на помощников `spawn`/`execFile` на основе аргументов для настройки базы данных, sudo команд Tailscale, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранить иконки провайдеров устойчивыми, используя сначала компоненты `@lobehub/icons`, затем локальные PNG/SVG резервные копии, избегая runtime `@lobehub/ui` в дашборде.

- **fix(codex)**: Блокировать аккаунты с исчерпанным недельным квотом в прямом API fallback (#440)
  - `resolveQuotaWindow()` префиксное соответствие: `"weekly"` теперь соответствует ключам кэша `"weekly (7d)"`
  - `applyCodexWindowPolicy()` корректно применяет переключатели `useWeekly`/`use5h`
  - 4 новых регрессионных теста (766 всего)

---

---

## [2.7.2] — 2026-03-18

> Sprint: Исправления контраста интерфейса в светлом режиме.

### 🐛 Исправления ошибок

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать сервер MITM CommonJS в автономный артефакт и разрешать пути данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс `.tmp/wine32` Wine из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать каталог нативного времени выполнения `wreq-js` в изолированный выходной каталог Next.js standalone, чтобы упакованные Playwright/E2E могли загружать хук инструментации на Linux.
- **fix(api):** Проверять веб-сокетный мост Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую проверку маршрута `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавить явную типизацию помощникам псевдонимов и категорий поставщиков, чтобы строгий `typecheck:noimplicit:core` CI gate прошел.
- **fix(ui):** Сохранять страницу деталей поставщика верхнего уровня с меткой "Управляется через настройки прокси-сервера верхнего уровня", когда переводы недоступны.
- **fix(electron):** Укрепить CSP для рабочей среды, удалив `unsafe-eval` вне разработки и добавив ограничения объекта, базового URI, действия формы, предка фрейма и работника.
- **fix(cli):** Заменить пути команд установки и привилегированного выполнения оболочки на помощники `spawn`/`execFile` на основе аргументов для установки базы данных, команд Tailscale sudo, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранить иконки поставщиков устойчивыми, используя сначала компоненты `@lobehub/icons`, затем локальные резервные копии PNG/SVG, избегая времени выполнения `@lobehub/ui` peer в панели инструментов.

- **fix(logs)**: Исправление контраста в светлом режиме для кнопок фильтрации запросов в журналах и значка комбо (#378)
  - Кнопки фильтрации ошибок/успеха/комбо теперь читаемы в светлом режиме
  - Значок строки комбо использует более яркий фиолетовый цвет в светлом режиме

---

---

---

## [2.7.1] — 2026-03-17

> Sprint: Унифицированное веб-поисковое маршрутизация (POST /v1/search) с 5 поставщиками + исправления безопасности Next.js 16.1.7 (6 CVE).

### ✨ Новые функции

- **feat(docs):** интеграция многостраничной документации в панели OmniRoute (#1969)
- **feat(settings):** добавление настройки лимита тела запроса (#1968)
- **feat(auth):** добавление секрета клиента OAuth Gemini CLI по умолчанию (#1974)
- **feat(models):** предоставление контекстных окон моделей.dev в /v1/models (#1972)
- **fix(db):** исправление резервного шифрования, вызывающего циклы повторного шифрования (#1941)
- **fix(auth):** исправление очистки ответа final_answer ассистента Codex (#1965)

- **feat(providers):** Реализация возможностей генерации и редактирования изображений для ChatGPT Web, включая генерацию изображений в чате и кэширование (#1606).
- **feat(ui):** Интеграция логотипа OpenCode Zen/Go API tool SVG и улучшение взаимодействий копирования API-ключа в буфер обмена (#1607).

- **feat(providers):** Интеграция AgentRouter в качестве нового поставщика, совместимого с OpenAI, с $200 бесплатных кредитов после регистрации (Issue #1572).
- **feat(ui):** Реализация тестирования по запросу для каждой модели в панели поставщиков, позволяющее выполнять диагностические проверки с одним токеном без триггера ограничений скорости (Issue #1532).

- **feat(search)**: Унифицированное веб-поисковое маршрутизация — `POST /v1/search` с 5 поставщиками (Serper, Brave, Perplexity, Exa, Tavily)
  - Автоматическое переключение между поставщиками, 6,500+ бесплатных поисков в месяц
  - Кэш в памяти с объединением запросов (настраиваемый TTL)
  - Панель инструментов: вкладка "Аналитика поиска" в `/dashboard/analytics` с разбивкой по поставщикам, показателем попадания в кэш, отслеживанием затрат
  - Новый API: `GET /api/v1/search/analytics` для статистики запросов поиска
  - Миграция БД: столбец `request_type` в `call_logs` для отслеживания не-чатовых запросов
  - Проверка Zod (`v1SearchSchema`), защита авторизацией, учет затрат через `recordCost()`

### 🔒 Безопасность

- **deps**: Next.js 16.1.6 → 16.1.7 — исправляет 6 CVE:
  - **Критический**: CVE-2026-29057 (HTTP-запрос smuggling через http-proxy)
  - **Высокий**: CVE-2026-27977, CVE-2026-27978 (WebSocket + Server Actions)
  - **Средний**: CVE-2026-27979, CVE-2026-27980, CVE-2026-jcc7

### 📁 Новые файлы

| File                                                             | Purpose                                                    |
| ---------------------------------------------------------------- | ---------------------------------------------------------- |
| `open-sse/handlers/search.ts`                                    | Обработчик поиска с маршрутизацией 5 поставщиков           |
| `open-sse/config/searchRegistry.ts`                              | Реестр поставщиков (аутентификация, стоимость, квота, TTL) |
| `open-sse/services/searchCache.ts`                               | Кэш в памяти с объединением запросов                       |
| `src/app/api/v1/search/route.ts`                                 | Маршрут Next.js (POST + GET)                               |
| `src/app/api/v1/search/analytics/route.ts`                       | API статистики поиска                                      |
| `src/app/(dashboard)/dashboard/analytics/SearchAnalyticsTab.tsx` | Вкладка аналитики в панели инструментов                    |
| `src/lib/db/migrations/007_search_request_type.sql`              | Миграция БД                                                |
| `tests/unit/search-registry.test.mjs`                            | 277 строк юнит-тестов                                      |

---

---

---

## [2.7.0] — 2026-03-17

> Sprint: ClawRouter-inspired features — toolCalling flag, multilingual intent detection, benchmark-driven fallback, request deduplication, pluggable RouterStrategy, Grok-4 Fast + GLM-5 + MiniMax M2.5 + Kimi K2.5 pricing.

### ✨ Новые модели и ценообразование

- **feat(pricing)**: xAI Grok-4 Fast — `$0.20/$0.50 per 1M tokens`, 1143ms p50 latency, tool calling supported
- **feat(pricing)**: xAI Grok-4 (standard) — `$0.20/$1.50 per 1M tokens`, reasoning flagship
- **feat(pricing)**: GLM-5 via Z.AI — `$0.5/1M`, 128K output context
- **feat(pricing)**: MiniMax M2.5 — `$0.30/1M input`, reasoning + agentic tasks
- **feat(pricing)**: DeepSeek V3.2 — updated pricing `$0.27/$1.10 per 1M`
- **feat(pricing)**: Kimi K2.5 via Moonshot API — direct Moonshot API access
- **feat(providers)**: Z.AI provider added (`zai` alias) — GLM-5 family with 128K output

### 🧠 Интеллектуальное маршрутизирование

- **feat(registry)**: `toolCalling` flag per model in provider registry — combos can now prefer/require tool-calling capable models
- **feat(scoring)**: Multilingual intent detection for AutoCombo scoring — PT/ZH/ES/AR script/language patterns influence model selection per request context
- **feat(fallback)**: Benchmark-driven fallback chains — real latency data (p50 from `comboMetrics`) used to re-order fallback priority dynamically
- **feat(dedup)**: Request deduplication via content-hash — 5-second idempotency window prevents duplicate provider calls from retrying clients
- **feat(router)**: Pluggable `RouterStrategy` interface in `autoCombo/routerStrategy.ts` — custom routing logic can be injected without modifying core

### 🔧 Улучшения сервера MCP

- **feat(mcp)**: 2 new advanced tool schemas: `omniroute_get_provider_metrics` (p50/p95/p99 per provider) and `omniroute_explain_route` (routing decision explanation)
- **feat(mcp)**: MCP tool auth scopes updated — `metrics:read` scope added for provider metrics tools
- **feat(mcp)**: `omniroute_best_combo_for_task` now accepts `languageHint` parameter for multilingual routing

### 📊 Наблюдаемость

- **feat(metrics)**: `comboMetrics.ts` extended with real-time latency percentile tracking per provider/account
- **feat(health)**: Health API (`/api/monitoring/health`) now returns per-provider `p50Latency` and `errorRate` fields
- **feat(usage)**: Usage history migration for per-model latency tracking

### 🗄️ Миграции базы данных

- **feat(migrations)**: New column `latency_p50` in `combo_metrics` table — zero-breaking, safe for existing users

### 🐛 Исправления ошибок / Закрытие задач

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **close(#411)**: better-sqlite3 hashed module resolution on Windows — fixed in v2.6.10 (f02c5b5)
- **close(#409)**: GitHub Copilot chat completions fail with Claude models when files attached — fixed in v2.6.9 (838f1d6)
- **close(#405)**: Duplicate of #411 — resolved

---

## [2.6.10] — 2026-03-17

> Исправление для Windows: загрузка prebuilt better-sqlite3 без node-gyp/Python/MSVC (#426).

### 🐛 Исправление ошибок

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать CommonJS сервер MITM в автономный артефакт и разрешать пути данных MITM без использования псевдонимов Next.js в упакованном runtime.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызвать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать директорию `wreq-js` в изолированный выходной артефакт Next.js, чтобы упакованный Playwright/E2E мог загрузить хук инструментации на Linux.
- **fix(api):** Валидировать payloadы вебсокет-моста Codex Responses и `/v1/batches` с помощью Zod перед использованием, сохраняя валидацию маршрута `request.json()` и возвращая явные 400 ответы для неверных тел.
- **fix(providers):** Добавить явное типизирование для помощников псевдонимов и категорий провайдеров, чтобы строгий CI gate `typecheck:noimplicit:core` прошел.
- **fix(ui):** Сохранить страницу деталей провайдера upstream proxy с меткой "Managed via Upstream Proxy Settings" при отсутствии переводов.
- **fix(electron):** Усилить CSP для продакшена на десктопе, убрав `unsafe-eval` вне разработки и добавив ограничения для объектов, базового URI, действий формы, предков фрейма и воркеров.
- **fix(cli):** Заменить пути командной оболочки для установки и привилегированного выполнения команд на помощники `spawn`/`execFile` с аргументами для установки базы данных, sudo команд Tailscale, редактирования DNS MITM и установки/удаления сертификатов.
- **fix(ui):** Сделать иконки провайдеров устойчивыми, используя сначала компоненты `@lobehub/icons`, затем локальные PNG/SVG резервные копии, избегая runtime `@lobehub/ui` в дашборде.

- **fix(install/#426)**: На Windows, `npm install -g omniroute` ранее не удавалось из-за ошибки `better_sqlite3.node is not a valid Win32 application`, потому что собранный нативный бинарный файл был скомпилирован для Linux. Добавляет **Strategy 1.5** в `scripts/postinstall.mjs`: использует `@mapbox/node-pre-gyp install --fallback-to-build=false` (встроенный в `better-sqlite3`) для загрузки правильного prebuilt бинарного файла для текущей ОС/архитектуры без необходимости в каких-либо инструментах сборки (нет node-gyp, нет Python, нет MSVC). Переходит к `npm rebuild`, только если загрузка не удалась. Добавляет платформенно-специфичные сообщения об ошибках с четкими инструкциями для ручного исправления.

---

---

---

## [2.6.9] — 2026-03-17

> Исправления CI (t11 any-budget), исправление ошибки #409 (вложения файлов через Copilot+Claude), коррекция workflow релиза.

### 🐛 Исправление ошибок

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать CommonJS сервер MITM в автономный артефакт и разрешать пути данных MITM без использования псевдонимов Next.js в упакованном runtime.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызвать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать директорию `wreq-js` в изолированный выходной артефакт Next.js, чтобы упакованный Playwright/E2E мог загрузить хук инструментации на Linux.
- **fix(api):** Валидировать payloadы вебсокет-моста Codex Responses и `/v1/batches` с помощью Zod перед использованием, сохраняя валидацию маршрута `request.json()` и возвращая явные 400 ответы для неверных тел.
- **fix(providers):** Добавить явное типизирование для помощников псевдонимов и категорий провайдеров, чтобы строгий CI gate `typecheck:noimplicit:core` прошел.
- **fix(ui):** Сохранить страницу деталей провайдера upstream proxy с меткой "Managed via Upstream Proxy Settings" при отсутствии переводов.
- **fix(electron):** Усилить CSP для продакшена на десктопе, убрав `unsafe-eval` вне разработки и добавив ограничения для объектов, базового URI, действий формы, предков фрейма и воркеров.
- **fix(cli):** Заменить пути командной оболочки для установки и привилегированного выполнения команд на помощники `spawn`/`execFile` с аргументами для установки базы данных, sudo команд Tailscale, редактирования DNS MITM и установки/удаления сертификатов.
- **fix(ui):** Сделать иконки провайдеров устойчивыми, используя сначала компоненты `@lobehub/icons`, затем локальные PNG/SVG резервные копии, избегая runtime `@lobehub/ui` в дашборде.

- **fix(ci)**: Удалить слово "any" из комментариев в `openai-responses.ts` и `chatCore.ts`, которые не прошли проверку t11 `any` budget (ложное срабатывание от regex, считающего комментарии)
- **fix(chatCore)**: Нормализовать неподдерживаемые типы частей контента перед отправкой провайдерам (#409 — Cursor отправляет `{type:"file"}` при вложении `.md` файлов; Copilot и другие OpenAI-совместимые провайдеры отклоняют с "type has to be either 'image_url' or 'text'"; исправление конвертирует блоки `file`/`document` в `text` и удаляет неизвестные типы)

### 🔧 Workflow

- **chore(generate-release)**: Добавить ATOMIC COMMIT RULE — версия должна быть увеличена (`npm version patch`) ДО коммита файлов с функциями, чтобы тег всегда указывал на коммит, содержащий все изменения версии вместе

---

---

## [2.6.8] — 2026-03-17

> Sprint: Combo as Agent (system prompt + tool filter), Context Caching Protection, Auto-Update, Detailed Logs, MITM Kiro IDE.

### 🗄️ DB Migrations (zero-breaking — safe for existing users)

- **005_combo_agent_fields.sql**: `ALTER TABLE combos ADD COLUMN system_message TEXT DEFAULT NULL`, `tool_filter_regex TEXT DEFAULT NULL`, `context_cache_protection INTEGER DEFAULT 0`
- **006_detailed_request_logs.sql**: New `request_detail_logs` table with 500-entry ring-buffer trigger, opt-in via settings toggle

### ✨ Features

- **feat(combo)**: Системное сообщение переопределения для каждого Combo (#399 — поле `system_message` заменяет или добавляет системный промпт перед отправкой к провайдеру)
- **feat(combo)**: Фильтр инструментов Regex для каждого Combo (#399 — `tool_filter_regex` сохраняет только инструменты, соответствующие шаблону; поддерживает форматы OpenAI + Anthropic)
- **feat(combo)**: Защита кэширования контекста (#401 — `context_cache_protection` помечает ответы с `` и фиксирует модель для сессии)
- **feat(settings)**: Автообновление через настройки (#320 — `GET /api/system/version` + `POST /api/system/update` — проверяет npm реестр и обновляет в фоновом режиме с перезапуском pm2)
- **feat(logs)**: Подробные логи запросов (#378 — захватывает полные тела конвейера на 4 этапах: запрос клиента, переведенный запрос, ответ провайдера, ответ клиенту — опциональный переключатель, обрезка 64KB, кольцевой буфер 500 записей)
- **feat(mitm)**: Профиль MITM Kiro IDE (#336 — `src/mitm/targets/kiro.ts` целевые api.anthropic.com, повторное использование существующей инфраструктуры MITM)

---

---

---

## [2.6.7] — 2026-03-17

> Sprint: SSE improvements, local provider_nodes extensions, proxy registry, Claude passthrough fixes.

### ✨ Features

- **feat(health)**: Фоновая проверка состояния локальных `provider_nodes` с экспоненциальным затуханием (30с→300с) и `Promise.allSettled` для избежания блокировки (#423, @Regis-RCR)
- **feat(embeddings)**: Маршрут `/v1/embeddings` к локальным `provider_nodes` — `buildDynamicEmbeddingProvider()` с валидацией имени хоста (#422, @Regis-RCR)
- **feat(audio)**: Маршрут TTS/STT к локальным `provider_nodes` — `buildDynamicAudioProvider()` с защитой от SSRF (#416, @Regis-RCR)
- **feat(proxy)**: Реестр прокси, API управления и обобщение лимитов квоты (#429, @Regis-RCR)

### 🐛 Bug Fixes

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, скопировать сервер MITM CommonJS в автономный артефакт и разрешить пути данных MITM без зависимости от псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс `.tmp/wine32` Wine из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать каталог нативного времени выполнения `wreq-js` в изолированный выходной путь Next.js standalone, чтобы упакованные Playwright/E2E могли загружать хук инструментации на Linux.
- **fix(api):** Валидировать тело вебсокета Codex Responses и `/v1/batches` с помощью Zod перед использованием, сохраняя зеленый маршрут валидации `request.json()` и возвращая явные 400 ответы для неверных тел.
- **fix(providers):** Добавить явное типизирование помощникам псевдонимов и категорий провайдеров, чтобы пройти строгий `typecheck:noimplicit:core` CI gate.
- **fix(ui):** Сохранить страницу деталей провайдера прокси с меткой "Управляется через настройки прокси" при отсутствии переводов.
- **fix(electron):** Укрепить CSP для рабочего стола в производстве, удалив `unsafe-eval` вне разработки и добавив ограничения объекта, базового URI, действия формы, предка фрейма и рабочего.
- **fix(cli):** Заменить пути установки и выполнения команд с интерполяцией оболочки на помощники `spawn`/`execFile` на основе аргументов для установки базы данных, sudo-команд Tailscale, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранить иконки провайдеров устойчивыми, используя сначала компоненты `@lobehub/icons`, затем локальные PNG/SVG резервные копии, избегая времени выполнения `@lobehub/ui` в панели инструментов.

- **fix(sse)**: Удалить специфичные для Claude поля (`metadata`, `anthropic_version`) при совместимости с OpenAI (#421, @prakersh)
- **fix(sse)**: Извлечь использование Claude SSE (`input_tokens`, `output_tokens`, cache tokens) в режиме потоковой передачи (#420, @prakersh)
- **fix(sse)**: Сгенерировать резервный `call_id` для вызовов инструментов с отсутствующими/пустыми ID (#419, @prakersh)
- **fix(sse)**: Передача Claude-to-Claude — передача тела полностью без изменений, без повторного перевода (#418, @prakersh)
- **fix(sse)**: Фильтровать отсоединенные элементы `tool_result` после сжатия контекста Claude Code, чтобы избежать ошибок 400 (#417, @prakersh)
- **fix(sse)**: Пропустить вызовы инструментов с пустыми именами в API Responses для предотвращения бесконечных циклов `placeholder_tool` (#415, @prakersh)
- **fix(sse)**: Удалить пустые текстовые блоки перед переводом (#427, @prakersh)
- **fix(api)**: Добавить `refreshable: true` в конфигурацию теста OAuth Claude (#428, @prakersh)

### 📦 Dependencies

- Обновить `vitest`, `@vitest/*` и связанные devDependencies (#414, @dependabot)

---

---

---

## [2.6.6] — 2026-03-17

> Hotfix: Совместимость Turbopack/Docker — удалить префикс `node:` из всех импортов `src/`.

### 🐛 Исправления ошибок

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, скопировать сервер CommonJS MITM в автономный артефакт и разрешать пути данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать каталог нативного времени выполнения `wreq-js` в изолированный выходной каталог Next.js standalone, чтобы упакованные запуски Playwright/E2E могли загрузить хук инструментации на Linux.
- **fix(api):** Проверять веб-сокетный мост Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую проверку маршрута `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавить явное типизирование помощников псевдонимов и категорий поставщиков, чтобы строгий шлюз CI `typecheck:noimplicit:core` прошел.
- **fix(ui):** Сохранить страницу деталей поставщика прокси-сервера с меткой резервного варианта "Управляется через настройки прокси-сервера Upstream", когда переводы недоступны.
- **fix(electron):** Усилить CSP для рабочей среды настольных приложений, удалив `unsafe-eval` вне разработки и добавив ограничения для объектов, базового URI, действия формы, предка фрейма и рабочего процесса.
- **fix(cli):** Заменить пути установки и выполнения привилегированных команд с интерполяцией оболочки на помощники на основе аргументов `spawn`/`execFile` для настройки базы данных, команд sudo Tailscale, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранить значки поставщиков устойчивыми, используя сначала компоненты `@lobehub/icons`, затем локальные резервные варианты PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели инструментов.

- **fix(build)**: Удален префикс `node:` из операторов `import` в 17 файлах под `src/`. Импорты `node:fs`, `node:path`, `node:url`, `node:os` и т. д. вызвали `Ecmascript file had an error` на сборках Turbopack (Next.js 15 Docker) и при обновлениях из более старых глобальных установок npm. Затронутые файлы: `migrationRunner.ts`, `core.ts`, `backup.ts`, `prompts.ts`, `dataPaths.ts` и 12 других в `src/app/api/` и `src/lib/`.
- **chore(workflow)**: Обновлен `generate-release.md`, чтобы синхронизация Docker Hub и развертывание на двух VPS стали **обязательными** шагами в каждом выпуске.

---

---

---

## [2.6.5] — 2026-03-17

> Спринт: фильтрация параметров модели рассуждений, исправление 404 локального поставщика, поставщик Kilo Gateway, обновление зависимостей.

### ✨ Новые функции

- **feat(docs):** интеграция многостраничной документации в панели инструментов OmniRoute (#1969)
- **feat(settings):** добавлена настройка лимита тела запроса (#1968)
- **feat(auth):** добавлен клиентский секрет OAuth Gemini CLI по умолчанию (#1974)
- **feat(models):** отображение контекстных окон моделей в /v1/models (#1972)
- **fix(db):** исправление резервного варианта шифрования, вызывающего циклы повторного шифрования (#1941)
- **fix(auth):** исправление очистки ответов final_answer ассистента Codex (#1965)

- **feat(providers):** Реализована возможность генерации и редактирования изображений для ChatGPT Web, включая встроенную генерацию изображений в чате и кэширование (#1606).
- **feat(ui):** Интеграция SVG логотипа API-инструмента OpenCode Zen/Go и улучшение взаимодействий копирования API-ключа в буфер обмена (#1607).

- **feat(providers):** Интегрирован AgentRouter в качестве нового поставщика, совместимого с OpenAI, с $200 бесплатных кредитов при регистрации (Issue #1572).
- **feat(ui):** Реализована проверка моделей по запросу в панели инструментов поставщиков, позволяющая выполнять диагностические проверки с одним токеном без срабатывания ограничений скорости (Issue #1532).

- **feat(api)**: Добавлен **Kilo Gateway** (`api.kilo.ai`) в качестве нового поставщика API-ключей (псевдоним `kg`) — 335+ моделей, 6 бесплатных моделей, 3 модели автоматического маршрутизации (`kilo-auto/frontier`, `kilo-auto/balanced`, `kilo-auto/free`). Поддерживаются модели передачи через конечную точку `/api/gateway/models`. (PR #408 by @Regis-RCR)

### 🐛 Исправления ошибок

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, скопировать сервер CommonJS MITM в автономный артефакт и разрешать пути данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать каталог нативного времени выполнения `wreq-js` в изолированный выходной каталог Next.js standalone, чтобы упакованные запуски Playwright/E2E могли загрузить хук инструментации на Linux.
- **fix(api):** Проверять веб-сокетный мост Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую проверку маршрута `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавить явное типизирование помощников псевдонимов и категорий поставщиков, чтобы строгий шлюз CI `typecheck:noimplicit:core` прошел.
- **fix(ui):** Сохранить страницу деталей поставщика прокси-сервера с меткой резервного варианта "Управляется через настройки прокси-сервера Upstream", когда переводы недоступны.
- **fix(electron):** Усилить CSP для рабочей среды настольных приложений, удалив `unsafe-eval` вне разработки и добавив ограничения для объектов, базового URI, действия формы, предка фрейма и рабочего процесса.
- **fix(cli):** Заменить пути установки и выполнения привилегированных команд с интерполяцией оболочки на помощники на основе аргументов `spawn`/`execFile` для настройки базы данных, команд sudo Tailscale, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранить значки поставщиков устойчивыми, используя сначала компоненты `@lobehub/icons`, затем локальные резервные варианты PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели инструментов.

- **fix(sse)**: Удалить неподдерживаемые параметры для моделей рассуждений (o1, o1-mini, o1-pro, o3, o3-mini). Модели семейства `o1`/`o3` отклоняют `temperature`, `top_p`, `frequency_penalty`, `presence_penalty`, `logprobs`, `top_logprobs` и `n` с HTTP 400. Параметры теперь удаляются на уровне `chatCore` перед передачей. Используется декларативное поле `unsupportedParams` для каждой модели и предварительно вычисленная карта O(1) для поиска. (PR #412 by @Regis-RCR)
- **fix(sse)**: Локальный поставщик 404 теперь приводит к **блокировке только модели (5 секунд)** вместо блокировки уровня соединения (2 минуты). Когда локальный бэкенд вывода (Ollama, LM Studio, oMLX) возвращает 404 для неизвестной модели, соединение остается активным, и другие модели продолжают работать немедленно. Также исправляет существующий баг, когда `model` не передавался в `markAccountUnavailable()`. Локальные поставщики определяются по имени хоста (`localhost`, `127.0.0.1`, `::1`, расширяется через переменную окружения `LOCAL_HOSTNAMES`). (PR #410 by @Regis-RCR)

### 📦 Зависимости

- `better-sqlite3` 12.6.2 → 12.8.0
- `undici` 7.24.2 → 7.24.4
- `https-proxy-agent` 7 → 8
- `agent-base` 7 → 8

---

---

---

## [2.6.4] — 2026-03-17

### 🐛 Исправления ошибок

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать сервер CommonJS MITM в автономный артефакт и разрешать пути данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать каталог `wreq-js` в изолированный выходной каталог Next.js, чтобы упакованные Playwright/E2E могли загрузить хук инструментации на Linux.
- **fix(api):** Проверять вебсокет-мост Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую проверку маршрута `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавить явное типизирование для помощников псевдонимов и категорий поставщиков, чтобы строгий шлюз `typecheck:noimplicit:core` CI прошел.
- **fix(ui):** Сохранять страницу сведений о поставщике прокси-сервера вверх по потоку с меткой резервного варианта "Управляется через настройки прокси-сервера вверх по потоку", когда переводы недоступны.
- **fix(electron):** Усилить CSP рабочего стола в производстве, удалив `unsafe-eval` вне разработки и добавив ограничения объекта, базового URI, действия формы, предка фрейма и рабочего.
- **fix(cli):** Заменить пути установки и выполнения привилегированных команд с интерполяцией оболочки на помощники `spawn`/`execFile` на основе аргументов для установки базы данных, команд Tailscale sudo, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранять значки поставщиков устойчивыми, используя сначала компоненты `@lobehub/icons`, затем резервные варианты PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели инструментов.

- **fix(providers)**: Удалены несуществующие имена моделей у 5 поставщиков:
  - **gemini / gemini-cli**: удалены `gemini-3.1-pro/flash` и `gemini-3-*-preview` (не существуют в Google API v1beta); заменены на `gemini-2.5-pro`, `gemini-2.5-flash`, `gemini-2.0-flash`, `gemini-1.5-pro/flash`
  - **antigravity**: удалены `gemini-3.1-pro-high/low` и `gemini-3-flash` (недопустимые внутренние псевдонимы); заменены на реальные модели 2.x
  - **github (Copilot)**: удалены `gemini-3-flash-preview` и `gemini-3-pro-preview`; заменены на `gemini-2.5-flash`
  - **nvidia**: исправлено `nvidia/llama-3.3-70b-instruct` → `meta/llama-3.3-70b-instruct` (NVIDIA NIM использует пространство имен `meta/` для моделей Meta); добавлены `nvidia/llama-3.1-70b-instruct` и `nvidia/llama-3.1-405b-instruct`
- **fix(db/combo)**: Обновлен `free-stack` combo на удаленной БД: удален `qw/qwen3-coder-plus` (истекший токен обновления), исправлено `nvidia/llama-3.3-70b-instruct` → `nvidia/meta/llama-3.3-70b-instruct`, исправлено `gemini/gemini-3.1-flash` → `gemini/gemini-2.5-flash`, добавлен `if/deepseek-v3.2`

---

---

---

## [2.6.3] — 2026-03-16

> Спринт: zod/pino hash-strip встроен в конвейер сборки, добавлен Synthetic provider, исправлен путь PM2 VPS.

### 🐛 Исправления ошибок

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать сервер CommonJS MITM в автономный артефакт и разрешать пути данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать каталог `wreq-js` в изолированный выходной каталог Next.js, чтобы упакованные Playwright/E2E могли загрузить хук инструментации на Linux.
- **fix(api):** Проверять вебсокет-мост Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую проверку маршрута `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавить явное типизирование для помощников псевдонимов и категорий поставщиков, чтобы строгий шлюз `typecheck:noimplicit:core` CI прошел.
- **fix(ui):** Сохранять страницу сведений о поставщике прокси-сервера вверх по потоку с меткой резервного варианта "Управляется через настройки прокси-сервера вверх по потоку", когда переводы недоступны.
- **fix(electron):** Усилить CSP рабочего стола в производстве, удалив `unsafe-eval` вне разработки и добавив ограничения объекта, базового URI, действия формы, предка фрейма и рабочего.
- **fix(cli):** Заменить пути установки и выполнения привилегированных команд с интерполяцией оболочки на помощники `spawn`/`execFile` на основе аргументов для установки базы данных, команд Tailscale sudo, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранять значки поставщиков устойчивыми, используя сначала компоненты `@lobehub/icons`, затем резервные варианты PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели инструментов.

- **fix(build)**: Turbopack hash-strip теперь работает **на этапе компиляции** для ВСЕХ пакетов — не только для `better-sqlite3`. Шаг 5.6 в `prepublish.mjs` проходит по каждому `.js` в `app/.next/server/` и удаляет суффикс 16-значного шестнадцатеричного числа из любого хешированного `require()`. Исправляет `zod-dcb22c...`, `pino-...` MODULE_NOT_FOUND при глобальной установке npm. Закрывает #398
- **fix(deploy)**: PM2 на обоих VPS указывал на устаревшие каталоги git-clone. Переконфигурировано для `app/server.js` в глобальном пакете npm. Обновлен `/deploy-vps` workflow для использования `npm pack + scp` (npm registry отклоняет пакеты размером 299MB).

### ✨ Новые возможности

- **feat(provider)**: Synthetic ([synthetic.new](https://synthetic.new)) — приватно-ориентированная OpenAI-совместимая инференция. `passthroughModels: true` для динамического каталога моделей HuggingFace. Начальные модели: Kimi K2.5, MiniMax M2.5, GLM 4.7, DeepSeek V3.2. (PR #404 by @Regis-RCR)

### 📋 Закрытые вопросы

- **close #398**: регрессия npm hash — исправлено за счет hash-strip на этапе компиляции в prepublish
- **triage #324**: баг с изображением без шагов — запрошены детали воспроизведения

---

---

## [2.6.2] — 2026-03-16

> Sprint: module hashing fully fixed, 2 PRs merged (Anthropic tools filter + custom endpoint paths), Alibaba Cloud DashScope provider added, 3 stale issues closed.

### 🐛 Bug Fixes

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, скопировать сервер MITM CommonJS в автономный артефакт и разрешить пути данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать каталог `wreq-js` в изолированный выходной каталог Next.js standalone, чтобы упакованные Playwright/E2E могли загрузить хук инструментации на Linux.
- **fix(api):** Проверять вебсокетный мост Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленый маршрут `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавить явное типизирование помощников псевдонимов и категорий поставщиков, чтобы строгий `typecheck:noimplicit:core` CI-шлюз прошел.
- **fix(ui):** Сохранять страницу деталей поставщика прокси-сервера вверх потоком с меткой "Управляется через настройки прокси-сервера вверх потоком", когда переводы недоступны.
- **fix(electron):** Усилить CSP для рабочей среды, удалив `unsafe-eval` вне разработки и добавив ограничения объекта, базового URI, действия формы, предка фрейма и рабочего процесса.
- **fix(cli):** Заменить пути установки и выполнения команд с интерполяцией оболочки на помощники `spawn`/`execFile` на основе аргументов для установки базы данных, команд sudo Tailscale, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранять значки поставщиков устойчивыми, используя сначала компоненты `@lobehub/icons`, затем локальные резервные копии PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели инструментов.

- **fix(build)**: Расширенный хэш-стрип webpack `externals` для покрытия ВСЕХ `serverExternalPackages`, а не только `better-sqlite3`. Next.js 16 Turbopack хэширует `zod`, `pino` и все остальные внешние пакеты сервера в имена, такие как `zod-dcb22c6336e0bc69`, которые не существуют в `node_modules` во время выполнения. Теперь регулярное выражение HASH_PATTERN catch-all удаляет суффикс из 16 символов и возвращается к базовому имени пакета. Также добавлен `NEXT_PRIVATE_BUILD_WORKER=0` в `prepublish.mjs` для усиления режима webpack, а также пост-сканирование сборки, которое сообщает о любых оставшихся хэшированных ссылках. (#396, #398, PR #403)
- **fix(chat)**: Имена инструментов в формате Anthropic (`tool.name` без обертки `.function`) были молча отфильтрованы пустым фильтром имен, представленным в #346. LiteLLM проксирует запросы с префиксом `anthropic/` в формате Anthropic Messages API, что приводит к фильтрации всех инструментов и возврату Anthropic `400: tool_choice.any может быть указан только при предоставлении инструментов`. Исправлено путем возврата к `tool.name`, когда `tool.function.name` отсутствует. Добавлено 8 регрессионных модульных тестов. (PR #397)

### ✨ Features

- **feat(api)**: Пользовательские пути конечных точек для узлов поставщиков, совместимых с OpenAI — настройте `chatPath` и `modelsPath` для каждого узла (например, `/v4/chat/completions`) в пользовательском интерфейсе подключения поставщика. Включает миграцию БД (`003_provider_node_custom_paths.sql`) и очистку пути URL (нет обхода `..`, должен начинаться с `/`). (PR #400)
- **feat(provider)**: Alibaba Cloud DashScope добавлен как поставщик, совместимый с OpenAI. Международная конечная точка: `dashscope-intl.aliyuncs.com/compatible-mode/v1`. 12 моделей: `qwen-max`, `qwen-plus`, `qwen-turbo`, `qwen3-coder-plus/flash`, `qwq-plus`, `qwq-32b`, `qwen3-32b`, `qwen3-235b-a22b`. Авторизация: Bearer API-ключ.

### 📋 Issues Closed

- **close #323**: Ошибка подключения Cline `[object Object]` — исправлено в v2.3.7; пользователю предложено обновиться с v2.2.9
- **close #337**: Отслеживание кредитов Kiro — реализовано в v2.5.5 (#381); пользователю предложено перейти в Dashboard → Usage
- **triage #402**: Поврежденный DMG для ARM64 macOS — запрошена версия macOS, точная ошибка и предложен обходной путь `xattr -d com.apple.quarantine`

---

---

## [2.6.1] — 2026-03-15

> Критическое исправление при запуске: глобальные установки npm v2.6.0 аварийно завершались с ошибкой 500 из-за ошибки хеширования имен модулей Turbopack/webpack в инструментации Next.js 16.

### 🐛 Исправления ошибок

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать сервер CommonJS MITM в автономный артефакт и разрешать пути данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли запускать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать каталог `wreq-js` в изолированный автономный вывод Next.js, чтобы упакованные запуски Playwright/E2E могли загрузить хук инструментации на Linux.
- **fix(api):** Проверять веб-сокетный мост Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую проверку маршрута `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавить явное типизирование помощников псевдонимов и категорий поставщиков, чтобы строгий шлюз CI `typecheck:noimplicit:core` прошел.
- **fix(ui):** Сохранить страницу деталей поставщика прокси-сервера вверху, помеченную резервной поверхностью управления "Управляется через настройки прокси-сервера вверху", когда переводы недоступны.
- **fix(electron):** Усилить CSP рабочего стола в производстве, удалив `unsafe-eval` вне разработки и добавив ограничения объекта, базового URI, действия формы, предка фрейма и рабочего процесса.
- **fix(cli):** Заменить пути к командам установки и привилегированного выполнения, интерполированные оболочкой, помощниками на основе аргументов `spawn`/`execFile` для настройки базы данных, команд sudo Tailscale, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранить иконки поставщиков устойчивыми, используя сначала компоненты `@lobehub/icons`, затем локальные резервные копии PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели инструментов.

- **fix(build)**: Принудительно заставить `better-sqlite3` всегда требоваться по точному имени пакета в серверном пакете webpack. Next.js 16 скомпилировал хук инструментации в отдельный чанк и выдал `require('better-sqlite3-<hash>')` — хешированное имя модуля, которое не существует в `node_modules` — даже though пакет был перечислен в `serverExternalPackages`. Добавлена явная функция `externals` в конфигурацию серверного webpack, чтобы сборщик всегда выдавал `require('better-sqlite3')`, что решает ошибку `500 Internal Server Error` при чистых глобальных установках. (#394, PR #395)

### 🔧 CI

- **ci**: Добавлен `workflow_dispatch` в `npm-publish.yml` с синхронизацией версий для ручных триггеров (#392)
- **ci**: Добавлен `workflow_dispatch` в `docker-publish.yml`, обновлены версии GitHub Actions (#392)

---

---

---

## [2.6.0] - 2026-03-15

> Спринт по решению проблем: 4 исправления ошибок, улучшение UX журналов, добавлено отслеживание кредитов Kiro.

### 🐛 Исправления ошибок

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать сервер CommonJS MITM в автономный артефакт и разрешать пути данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли запускать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать каталог `wreq-js` в изолированный автономный вывод Next.js, чтобы упакованные запуски Playwright/E2E могли загрузить хук инструментации на Linux.
- **fix(api):** Проверять веб-сокетный мост Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую проверку маршрута `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавить явное типизирование помощников псевдонимов и категорий поставщиков, чтобы строгий шлюз CI `typecheck:noimplicit:core` прошел.
- **fix(ui):** Сохранить страницу деталей поставщика прокси-сервера вверху, помеченную резервной поверхностью управления "Управляется через настройки прокси-сервера вверху", когда переводы недоступны.
- **fix(electron):** Усилить CSP рабочего стола в производстве, удалив `unsafe-eval` вне разработки и добавив ограничения объекта, базового URI, действия формы, предка фрейма и рабочего процесса.
- **fix(cli):** Заменить пути к командам установки и привилегированного выполнения, интерполированные оболочкой, помощниками на основе аргументов `spawn`/`execFile` для настройки базы данных, команд sudo Tailscale, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранить иконки поставщиков устойчивыми, используя сначала компоненты `@lobehub/icons`, затем локальные резервные копии PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели инструментов.

- **fix(media)**: ComfyUI и SD WebUI больше не появляются в списке поставщиков на странице Media, когда они не настроены — выполняет запрос `/api/providers` при монтировании и скрывает локальных поставщиков без подключений (#390)
- **fix(auth)**: Round-robin больше не выбирает учетные записи с ограниченной скоростью сразу после охлаждения — `backoffLevel` теперь используется в качестве основного ключа сортировки в LRU-ротации (#340)
- **fix(oauth)**: Qoder (и другие поставщики, которые перенаправляют на свой собственный UI) больше не оставляют модальное окно OAuth застрявшим на "Ожидание авторизации" — детектор закрытия всплывающего окна автоматически переходит в режим ввода URL вручную (#344)
- **fix(logs)**: Таблица журнала запросов теперь читаема в светлом режиме — значки состояния, счетчики токенов и комбо-теги используют адаптивные классы цвета `dark:` (#378)

### ✨ Новые возможности

- **feat(kiro)**: Добавлено отслеживание кредитов Kiro в фетчере использования — запрашивает `getUserCredits` из конечной точки AWS CodeWhisperer (#337)

### 🛠 Разное

- **chore(tests)**: Выровнял `test:plan3`, `test:fixes`, `test:security` для использования того же загрузчика `tsx/esm`, что и `npm test` — устраняет ложные срабатывания разрешения модулей в целевых запусках (PR #386)

---

---

---

## [2.5.9] - 2026-03-15

> Исправление нативного прохождения Codex + усиление проверки тела маршрута.

### 🐛 Исправления ошибок

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать сервер CommonJS MITM в автономный артефакт и разрешать пути данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборок Node 24.
- **fix(build):** Скопировать каталог нативного времени выполнения `wreq-js` в изолированный выходной каталог Next.js standalone, чтобы упакованные запуски Playwright/E2E могли загрузить хук инструментации на Linux.
- **fix(api):** Проверять полезные нагрузки веб-сокета Codex и `/v1/batches` JSON с помощью Zod перед использованием, сохраняя зеленую проверку маршрута `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавить явное типизирование помощников псевдонимов и категорий поставщиков, чтобы строгий шлюз CI `typecheck:noimplicit:core` прошел.
- **fix(ui):** Сохранить страницу деталей поставщика прокси-сервера вверху, помеченную резервной надписью "Управляется через настройки прокси-сервера вверху", когда переводы недоступны.
- **fix(electron):** Усилить CSP рабочего стола в производстве, удалив `unsafe-eval` вне разработки и добавив ограничения объекта, базового URI, действия формы, предка фрейма и работника.
- **fix(cli):** Заменить пути установки и выполнения привилегированных команд, интерполированные оболочкой, помощниками на основе аргументов `spawn`/`execFile` для настройки базы данных, команд sudo Tailscale, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранить значки поставщиков устойчивыми, используя сначала компоненты `@lobehub/icons`, затем локальные резервные копии PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели инструментов.

- **fix(codex)**: Сохранить нативный проход API Responses для клиентов Codex — избегает ненужных изменений переводов (PR #387)
- **fix(api)**: Проверять тела запросов на маршрутах ценообразования/синхронизации и маршрутизации задач — предотвращает сбои из-за неправильных входных данных (PR #388)
- **fix(auth)**: Секреты JWT сохраняются при перезапусках через `src/lib/db/secrets.ts` — устраняет ошибки 401 после перезапуска pm2 (PR #388)

---

---

---

## [2.5.8] - 2026-03-15

> Исправление сборки: восстановление подключения VPS, нарушенного неполным публикацией v2.5.7.

### 🐛 Исправления ошибок

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать сервер CommonJS MITM в автономный артефакт и разрешать пути данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборок Node 24.
- **fix(build):** Скопировать каталог нативного времени выполнения `wreq-js` в изолированный выходной каталог Next.js standalone, чтобы упакованные запуски Playwright/E2E могли загрузить хук инструментации на Linux.
- **fix(api):** Проверять полезные нагрузки веб-сокета Codex и `/v1/batches` JSON с помощью Zod перед использованием, сохраняя зеленую проверку маршрута `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавить явное типизирование помощников псевдонимов и категорий поставщиков, чтобы строгий шлюз CI `typecheck:noimplicit:core` прошел.
- **fix(ui):** Сохранить страницу деталей поставщика прокси-сервера вверху, помеченную резервной надписью "Управляется через настройки прокси-сервера вверху", когда переводы недоступны.
- **fix(electron):** Усилить CSP рабочего стола в производстве, удалив `unsafe-eval` вне разработки и добавив ограничения объекта, базового URI, действия формы, предка фрейма и работника.
- **fix(cli):** Заменить пути установки и выполнения привилегированных команд, интерполированные оболочкой, помощниками на основе аргументов `spawn`/`execFile` для настройки базы данных, команд sudo Tailscale, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранить значки поставщиков устойчивыми, используя сначала компоненты `@lobehub/icons`, затем локальные резервные копии PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели инструментов.

- **fix(build)**: `scripts/prepublish.mjs` все еще использовал устаревший флаг `--webpack`, из-за чего сборка Next.js standalone завершалась безуспешно — публикация npm завершилась без `app/server.js`, нарушив развертывание VPS

---

---

## [2.5.7] - 2026-03-15

> Исправления обработки ошибок в медиа-плеере.

### 🐛 Исправления ошибок

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать сервер CommonJS MITM в автономный артефакт и разрешать пути данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать директорию нативного времени выполнения `wreq-js` в изолированный выходной файл Next.js, чтобы упакованные запуски Playwright/E2E могли загрузить хук инструментации на Linux.
- **fix(api):** Проверять вебсокет-мост Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую проверку маршрута `request.json()` и возвращая явные ответы 400 для неверных тел.
- **fix(providers):** Добавить явное типизирование помощников псевдонимов и категорий провайдеров, чтобы строгий шлюз CI `typecheck:noimplicit:core` прошел.
- **fix(ui):** Сохранить страницу деталей провайдера прокси-сервера вверху с меткой резервного копирования "Управляется через настройки прокси-сервера вверху" при отсутствии переводов.
- **fix(electron):** Усилить CSP для рабочей версии десктопа, удалив `unsafe-eval` вне разработки и добавив ограничения для объектов, базового URI, действия формы, предка фрейма и рабочего процесса.
- **fix(cli):** Заменить пути командной оболочки для установки и привилегированного выполнения команд аргументами `spawn`/`execFile` для установки базы данных, команд sudo Tailscale, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранить иконки провайдеров устойчивыми, используя сначала компоненты `@lobehub/icons`, затем резервные копии PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели инструментов.

- **fix(media)**: Ложное срабатывание "Требуется ключ API" при транскрипции, если аудио не содержит речи (музыка, тишина) — теперь отображается "Речь не обнаружена".
- **fix(media)**: `upstreamErrorResponse` в `audioTranscription.ts` и `audioSpeech.ts` теперь возвращает правильный JSON (`{error:{message}}`), что позволяет правильно определять ошибки 401/403 для учетных данных в MediaPageClient.
- **fix(media)**: `parseApiError` теперь обрабатывает поле `err_msg` Deepgram и определяет `"api key"` в сообщениях об ошибках для точного определения ошибок учетных данных.

---

---

---

## [2.5.6] - 2026-03-15

> Критические исправления безопасности/аутентификации: Сломанный OAuth Antigravity + потеря сессий JWT после перезапуска.

### 🐛 Исправления ошибок

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать сервер CommonJS MITM в автономный артефакт и разрешать пути данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать директорию нативного времени выполнения `wreq-js` в изолированный выходной файл Next.js, чтобы упакованные запуски Playwright/E2E могли загрузить хук инструментации на Linux.
- **fix(api):** Проверять вебсокет-мост Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую проверку маршрута `request.json()` и возвращая явные ответы 400 для неверных тел.
- **fix(providers):** Добавить явное типизирование помощников псевдонимов и категорий провайдеров, чтобы строгий шлюз CI `typecheck:noimplicit:core` прошел.
- **fix(ui):** Сохранить страницу деталей провайдера прокси-сервера вверху с меткой резервного копирования "Управляется через настройки прокси-сервера вверху" при отсутствии переводов.
- **fix(electron):** Усилить CSP для рабочей версии десктопа, удалив `unsafe-eval` вне разработки и добавив ограничения для объектов, базового URI, действия формы, предка фрейма и рабочего процесса.
- **fix(cli):** Заменить пути командной оболочки для установки и привилегированного выполнения команд аргументами `spawn`/`execFile` для установки базы данных, команд sudo Tailscale, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранить иконки провайдеров устойчивыми, используя сначала компоненты `@lobehub/icons`, затем резервные копии PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели инструментов.

- **fix(oauth) #384**: Antigravity Google OAuth теперь правильно отправляет `client_secret` на конечную точку токена. Резервное значение для `ANTIGRAVITY_OAUTH_CLIENT_SECRET` было пустой строкой, что является ложным — поэтому `client_secret` никогда не включался в запрос, вызывая ошибки `"client_secret is missing"` для всех пользователей без пользовательской переменной окружения. Закрывает #383.
- **fix(auth) #385**: `JWT_SECRET` теперь сохраняется в SQLite (`namespace='secrets'`) при первом создании и перезагружается при последующих запусках. Ранее генерировался новый случайный секрет при каждом запуске процесса, что приводило к недействительности всех существующих файлов cookie/сессий после любого перезапуска или обновления. Затрагивает как `JWT_SECRET`, так и `API_KEY_SECRET`. Закрывает #382.

---

---

## [2.5.5] - 2026-03-15

> Исправление дублирования списка моделей, усиление сборки Electron и отслеживание кредитов Kiro.

### 🐛 Исправления ошибок

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, скопировать сервер MITM CommonJS в автономный артефакт и разрешить пути данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс `.tmp/wine32` Wine из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызвать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать каталог нативного времени выполнения `wreq-js` в изолированный выходной каталог Next.js standalone, чтобы упакованные Playwright/E2E могли загрузить хук инструментации на Linux.
- **fix(api):** Проверять вебсокет-мост Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую проверку маршрута `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавить явную типизацию для помощников псевдонимов и категорий поставщиков, чтобы строгий `typecheck:noimplicit:core` CI-шлюз прошел.
- **fix(ui):** Сохранять страницу деталей поставщика прокси-сервера с меткой "Управляется через настройки прокси-сервера" при отсутствии переводов.
- **fix(electron):** Усилить CSP для рабочей среды, удалив `unsafe-eval` вне разработки и добавив ограничения для объектов, базового URI, действия формы, предка фрейма и рабочего процесса.
- **fix(cli):** Заменить пути команд установки и выполнения с привилегиями, интерполированные оболочкой, на помощники `spawn`/`execFile` на основе аргументов для установки базы данных, команд Tailscale sudo, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранять значки поставщиков устойчивыми, используя сначала прямые компоненты `@lobehub/icons`, затем локальные резервные копии PNG/SVG, избегая времени выполнения `@lobehub/ui` в панели управления.

- **fix(models) #380**: `GET /api/models` теперь включает псевдонимы поставщиков при построении фильтра активных поставщиков — модели для `claude` (псевдоним `cc`) и `github` (псевдоним `gh`) всегда отображались независимо от того, была ли настроена подключение, потому что ключи `PROVIDER_MODELS` являются псевдонимами, но подключения к базе данных хранятся под идентификаторами поставщиков. Исправлено путем расширения каждого идентификатора активного поставщика, чтобы также включать его псевдоним через `PROVIDER_ID_TO_ALIAS`. Закрывает #353.
- **fix(electron) #379**: Новый `scripts/prepare-electron-standalone.mjs` создает отдельный пакет `/.next/electron-standalone` перед упаковкой Electron. Прерывает выполнение с ясным сообщением об ошибке, если `node_modules` является символической ссылкой (electron-builder отправил бы зависимость времени выполнения на машину сборки). Кроссплатформенная санитизация путей через `path.basename`. Автор @kfiramar.

### ✨ Новые функции

- **feat(docs):** интеграция многостраничной документации в панели управления OmniRoute (#1969)
- **feat(settings):** добавление настройки лимита тела запроса (#1968)
- **feat(auth):** добавление клиентского секрета OAuth Gemini CLI по умолчанию (#1974)
- **feat(models):** предоставление окон контекста моделей.dev в /v1/models (#1972)
- **fix(db):** исправление резервного варианта шифрования, вызывающего циклы повторного шифрования (#1941)
- **fix(auth):** исправление очистки ответа final_answer ассистента Codex (#1965)

- **feat(providers):** Реализация возможностей генерации и редактирования изображений для ChatGPT Web, включая генерацию изображений в чате и кэширование (#1606).
- **feat(ui):** Интеграция SVG-логотипа OpenCode Zen/Go API и улучшение взаимодействий копирования API-ключа в буфер обмена (#1607).

- **feat(providers):** Интеграция AgentRouter в качестве нового поставщика, совместимого с OpenAI, с $200 бесплатных кредитов при регистрации (Проблема #1572).
- **feat(ui):** Реализация тестирования по запросу для каждой модели в панели управления поставщиками, позволяющее выполнять диагностические проверки с одним токеном без срабатывания ограничений скорости (Проблема #1532).

- **feat(kiro) #381**: Отслеживание баланса кредитов Kiro — конечная точка использования теперь возвращает данные о кредитах для учетных записей Kiro, вызывая `codewhisperer.us-east-1.amazonaws.com/getUserCredits` (тот же конечный пункт, который использует Kiro IDE внутренне). Возвращает оставшиеся кредиты, общий лимит, дату обновления и уровень подписки. Закрывает #337.

---

---

## [2.5.4] - 2026-03-15

> Исправление запуска логгера, исправление безопасности загрузки логина и улучшение надежности HMR в разработке. Усилена инфраструктура CI.

### 🐛 Исправления ошибок (PRs #374, #375, #376 by @kfiramar)

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, скопировать сервер CommonJS MITM в автономный артефакт и разрешить пути данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать каталог нативного времени выполнения `wreq-js` в изолированный выходной каталог Next.js, чтобы упакованные Playwright/E2E могли загрузить хук инструментации на Linux.
- **fix(api):** Проверять вебсокет-мост Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленый маршрут проверки `request.json()` и возвращая явные ответы 400 для недопустимых тел.
- **fix(providers):** Добавить явное типизирование для помощников псевдонимов и категорий провайдеров, чтобы строгий `typecheck:noimplicit:core` CI gate прошел.
- **fix(ui):** Сохранять страницу деталей провайдера через прокси-сервер с меткой "Управляется через настройки прокси-сервера" при отсутствии переводов.
- **fix(electron):** Усилить CSP для рабочей среды, удалив `unsafe-eval` вне разработки и добавив ограничения для объектов, базового URI, действий формы, предков фрейма и рабочих процессов.
- **fix(cli):** Заменить пути команд установки и выполнения с интерполяцией оболочки на помощники `spawn`/`execFile` на основе аргументов для установки базы данных, команд Tailscale с sudo, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сохранять иконки провайдеров устойчивыми, используя сначала компоненты `@lobehub/icons`, затем локальные PNG/SVG резервные варианты, избегая времени выполнения `@lobehub/ui` в панели управления.

- **fix(logger) #376**: Восстановить путь логгера pino transport — `formatters.level` в сочетании с `transport.targets` отклоняется pino. Конфигурации, поддерживающие транспорт, теперь удаляют форматировщик уровня через `getTransportCompatibleConfig()`. Также исправляет отображение числовых уровней в `/api/logs/console`: `30→info, 40→warn, 50→error` (было смещено на один).
- **fix(login) #375**: Страница входа теперь загружается из общедоступного конечной точки `/api/settings/require-login` вместо защищенной `/api/settings`. В настройках с защитой паролем страница до аутентификации получала 401 и возвращалась к безопасным значениям по умолчанию ненужным образом. Общедоступный маршрут теперь возвращает все метаданные загрузки (`requireLogin`, `hasPassword`, `setupComplete`) с консервативным резервным ответом 200 при ошибке.
- **fix(dev) #374**: Добавлены `localhost` и `127.0.0.1` в `allowedDevOrigins` в `next.config.mjs` — HMR вебсокет блокировался при доступе к приложению через адрес обратной петли, вызывая повторяющиеся предупреждения о кросс-оригине.

### 🔧 CI & Инфраструктура

- **Исправление OOM ESLint**: `eslint.config.mjs` теперь игнорирует `vscode-extension/**`, `electron/**`, `docs/**`, `app/.next/**` и `clipr/**` — ESLint выходил из строя с ошибкой JS heap OOM, сканируя двоичные файлы VS Code и скомпилированные чанки.
- **Исправление модульных тестов**: Удалено устаревшее `ALTER TABLE provider_connections ADD COLUMN "group"` из 2 тестовых файлов — столбец теперь является частью базовой схемы (добавлен в #373), вызывая `SQLITE_ERROR: duplicate column name` на каждом запуске CI.
- **Хук pre-commit**: Добавлен `npm run test:unit` в `.husky/pre-commit` — модульные тесты теперь блокируют коммиты с ошибками до их достижения CI.

---

---

## [2.5.3] - 2026-03-14

> Критические исправления ошибок: миграция схемы БД, загрузка env при запуске, очистка состояния ошибок провайдера, и исправление подсказки i18n. Улучшения качества кода поверх каждого PR.

### 🐛 Исправления ошибок (PRs #369, #371, #372, #373 by @kfiramar)

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать CommonJS сервер MITM в автономный артефакт, и разрешать пути данных MITM без зависимости от псевдонимов Next.js в упакованном рантайме.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать директорию `wreq-js` в изолированный выходной артефакт Next.js, чтобы упакованные Playwright/E2E запуски могли загрузить хук инструментации на Linux.
- **fix(api):** Валидировать вебсокет-мост Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую валидацию маршрута `request.json()` и возвращая явные 400 ответы для неверных тел.
- **fix(providers):** Добавить явное типирование для помощников псевдонимов и категорий провайдеров, чтобы строгий CI-шлюз `typecheck:noimplicit:core` прошел.
- **fix(ui):** Сохранить страницу деталей провайдера прокси-сервера с меткой резервного варианта "Управляется через настройки прокси-сервера" при отсутствии переводов.
- **fix(electron):** Укрепить CSP для рабочего стола, удалив `unsafe-eval` вне разработки и добавив ограничения для объектов, базового URI, действий формы, предков фрейма и рабочих процессов.
- **fix(cli):** Заменить интерполированные оболочкой пути установки и привилегированных команд выполнения на помощников `spawn`/`execFile` на основе аргументов для установки базы данных, sudo-команд Tailscale, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сделать значки провайдеров устойчивыми, используя сначала компоненты `@lobehub/icons`, затем локальные резервные варианты PNG/SVG, избегая рантайма `@lobehub/ui` в панели инструментов.

- **fix(db) #373**: Добавить столбец `provider_connections.group` в базовую схему + миграцию с обратной заполнкой для существующих баз данных — столбец использовался во всех запросах, но отсутствовал в определении схемы.
- **fix(i18n) #371**: Заменить несуществующий ключ `t("deleteConnection")` на существующий ключ `providers.delete` — исправляет ошибку `MISSING_MESSAGE: providers.deleteConnection` во время выполнения на странице деталей провайдера.
- **fix(auth) #372**: Очистить устаревшие метаданные ошибок (`errorCode`, `lastErrorType`, `lastErrorSource`) из учетных записей провайдеров после успешного восстановления — ранее восстановленные учетные записи продолжали отображаться как неудачные.
- **fix(startup) #369**: Унифицировать загрузку env в `npm run start`, `run-standalone.mjs` и Electron для соблюдения приоритета `DATA_DIR/.env → ~/.omniroute/.env → ./.env` — предотвращает генерацию нового `STORAGE_ENCRYPTION_KEY` поверх существующей зашифрованной базы данных.

### 🔧 Улучшения качества кода

- Документировать шаблоны `result.success` vs `response?.ok` в `auth.ts` (оба намеренные, теперь объяснены).
- Нормализовать `overridePath?.trim()` в `electron/main.js` для соответствия `bootstrap-env.mjs`.
- Добавить комментарий о порядке слияния `preferredEnv` в запуске Electron.

> Политика квот Codex с автовращением, быстрым переключением уровня, моделью gpt-5.4 и исправлением метки аналитики.

### ✨ Новые функции (PRs #366, #367, #368)

- **feat(docs):** интегрировать многостраничную документацию в панель OmniRoute (#1969).
- **feat(settings):** добавить настройку лимита тела запроса (#1968).
- **feat(auth):** добавить секрет клиента OAuth Gemini CLI по умолчанию (#1974).
- **feat(models):** раскрыть окна контекста моделей.dev в /v1/models (#1972).
- **fix(db):** устранить резервное восстановление шифрования, вызывающее циклы перешифрования (#1941).
- **fix(auth):** исправить очистку ответов final_answer ассистента Codex (#1965).

- **feat(providers):** Реализовать возможности генерации и редактирования изображений для ChatGPT Web, включая встроенную генерацию изображений в чате и кэширование (#1606).
- **feat(ui):** Интегрировать SVG логотипа OpenCode Zen/Go API и улучшить взаимодействия копирования API-ключа в буфер обмена (#1607).

- **feat(providers):** Интегрировать AgentRouter как нового провайдера, совместимого с OpenAI, с $200 бесплатных кредитов через регистрацию (Issue #1572).
- **feat(ui):** Реализовать проверку по запросу для каждой модели в панели провайдера, позволяя диагностические проверки с одним токеном без срабатывания лимитов скорости (Issue #1532).

- **Политика квот Codex (PR #366)**: Переключатели окон квот 5ч/недельно в панели провайдера. Учетные записи автоматически пропускаются при достижении 90% порога включенных окон и снова допускаются после `resetAt`. Включает `quotaCache.ts` с безэффектными геттерами статуса.
- **Быстрое переключение уровня Codex (PR #367)**: Панель управления → Настройки → Уровень сервиса Codex. Переключатель по умолчанию выключен, внедряет `service_tier: "flex"` только для запросов Codex, снижая стоимость на ~80%. Полный стек: вкладка UI + конечная точка API + исполнитель + переводчик + восстановление запуска.
- **Модель gpt-5.4 (PR #368)**: Добавляет `cx/gpt-5.4` и `codex/gpt-5.4` в реестр моделей Codex. Включен тест регрессии.

### 🐛 Исправления ошибок

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать CommonJS сервер MITM в автономный артефакт, и разрешать пути данных MITM без зависимости от псевдонимов Next.js в упакованном рантайме.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать директорию `wreq-js` в изолированный выходной артефакт Next.js, чтобы упакованные Playwright/E2E запуски могли загрузить хук инструментации на Linux.
- **fix(api):** Валидировать вебсокет-мост Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую валидацию маршрута `request.json()` и возвращая явные 400 ответы для неверных тел.
- **fix(providers):** Добавить явное типирование для помощников псевдонимов и категорий провайдеров, чтобы строгий CI-шлюз `typecheck:noimplicit:core` прошел.
- **fix(ui):** Сохранить страницу деталей провайдера прокси-сервера с меткой резервного варианта "Управляется через настройки прокси-сервера" при отсутствии переводов.
- **fix(electron):** Укрепить CSP для рабочего стола, удалив `unsafe-eval` вне разработки и добавив ограничения для объектов, базового URI, действий формы, предков фрейма и рабочих процессов.
- **fix(cli):** Заменить интерполированные оболочкой пути установки и привилегированных команд выполнения на помощники `spawn`/`execFile` на основе аргументов для установки базы данных, sudo-команд Tailscale, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сделать значки провайдеров устойчивыми, используя сначала компоненты `@lobehub/icons`, затем локальные резервные варианты PNG/SVG, избегая рантайма `@lobehub/ui` в панели инструментов.

- **fix #356**: Графики аналитики (Top Provider, By Account, Provider Breakdown) теперь отображают читаемые имена провайдеров/метки вместо внутренних идентификаторов для провайдеров, совместимых с OpenAI.

> Основной релиз: стратегия строго-случайного маршрутизации, управление доступом к API-ключам, группы подключений, синхронизация внешних цен и критические исправления для моделей мышления, комбо-тестирования и валидации имен инструментов.

### ✨ Новые функции (PRs #363 & #365)

- **feat(docs):** интегрировать многостраничную документацию в панель OmniRoute (#1969).
- **feat(settings):** добавить настройку лимита тела запроса (#1968).
- **feat(auth):** добавить секрет клиента OAuth Gemini CLI по умолчанию (#1974).
- **feat(models):** раскрыть окна контекста моделей.dev в /v1/models (#1972).
- **fix(db):** устранить резервное восстановление шифрования, вызывающее циклы перешифрования (#1941).
- **fix(auth):** исправить очистку ответов final_answer ассистента Codex (#1965).

- **feat(providers):** Реализовать возможности генерации и редактирования изображений для ChatGPT Web, включая встроенную генерацию изображений в чате и кэширование (#1606).
- **feat(ui):** Интегрировать SVG логотипа OpenCode Zen/Go API и улучшить взаимодействия копирования API-ключа в буфер обмена (#1607).

- **feat(providers):** Интегрировать AgentRouter как нового провайдера, совместимого с OpenAI, с $200 бесплатных кредитов через регистрацию (Issue #1572).
- **feat(ui):** Реализовать проверку по запросу для каждой модели в панели провайдера, позволяя диагностические проверки с одним токеном без срабатывания лимитов скорости (Issue #1532).

- **Стратегия строго-случайного маршрутизации**: Перетасовка колоды Fisher-Yates с гарантией антиповтора и сериализацией мьютекса для параллельных запросов. Независимые колоды для каждого комбо и каждого провайдера.
- **Управление доступом к API-ключам**: `allowedConnections` (ограничить подключения, которые может использовать ключ), `is_active` (включить/отключить ключ с 403), `accessSchedule` (доступ на основе времени), переключатель `autoResolve`, переименовать ключи через PATCH.
- **Группы подключений**: Группировать подключения провайдеров по среде. Аккордеонное представление на странице Limits с сохранением в localStorage и умным автопереключением.
- **Синхронизация внешних цен (LiteLLM)**: Разрешение цен в 3-х уровнях (переопределения пользователя → синхронизированные → значения по умолчанию). Опционально через `PRICING_SYNC_ENABLED=true`. Инструмент MCP `omniroute_sync_pricing`. 23 новых теста.
- **i18n**: 30 языков обновлены со стратегией строго-случайного маршрутизации, строками управления API-ключами. pt-BR полностью переведен.

### 🐛 Исправления ошибок

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать CommonJS сервер MITM в автономный артефакт, и разрешать пути данных MITM без зависимости от псевдонимов Next.js в упакованном рантайме.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать директорию `wreq-js` в изолированный выходной артефакт Next.js, чтобы упакованные Playwright/E2E запуски могли загрузить хук инструментации на Linux.
- **fix(api):** Валидировать вебсокет-мост Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую валидацию маршрута `request.json()` и возвращая явные 400 ответы для неверных тел.
- **fix(providers):** Добавить явное типирование для помощников псевдонимов и категорий провайдеров, чтобы строгий CI-шлюз `typecheck:noimplicit:core` прошел.
- **fix(ui):** Сохранить страницу деталей провайдера прокси-сервера с меткой резервного варианта "Управляется через настройки прокси-сервера" при отсутствии переводов.
- **fix(electron):** Укрепить CSP для рабочего стола, удалив `unsafe-eval` вне разработки и добавив ограничения для объектов, базового URI, действий формы, предков фрейма и рабочих процессов.
- **fix(cli):** Заменить интерполированные оболочкой пути установки и привилегированных команд выполнения на помощники `spawn`/`execFile` на основе аргументов для установки базы данных, sudo-команд Tailscale, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сделать значки провайдеров устойчивыми, используя сначала компоненты `@lobehub/icons`, затем локальные резервные варианты PNG/SVG, избегая рантайма `@lobehub/ui` в панели инструментов.

- **fix #355**: Тайм-аут простоя потока увеличен с 60с до 300с — предотвращает прерывание моделей с долгим мышлением (claude-opus-4-6, o3 и т.д.) во время фаз долгого рассуждения. Настраивается через `STREAM_IDLE_TIMEOUT_MS`.
- **fix #350**: Тест комбо теперь обходит `REQUIRE_API_KEY=true` с использованием внутреннего заголовка, и использует универсальный формат OpenAI-compatible. Тайм-аут увеличен с 15с до 20с.
- **fix #346**: Инструменты с пустым `function.name` (переданные от Claude Code) теперь фильтруются перед тем, как они достигают провайдеров, предотвращая ошибки "Invalid input[N].name: empty string".

### 🗑️ Закрытые вопросы

- **#341**: Раздел отладки удален — заменой является `/dashboard/logs` и `/dashboard/health`.

> Поддержка Round-Robin для API-ключей в настройках провайдера, и подтверждение поддержки маршрутизации с подстановочными знаками и скользящего окна квот уже встроены.

### ✨ Новые функции

- **feat(docs):** интегрировать многостраничную документацию в панель OmniRoute (#1969).
- **feat(settings):** добавить настройку лимита тела запроса (#1968).
- **feat(auth):** добавить секрет клиента OAuth Gemini CLI по умолчанию (#1974).
- **feat(models):** раскрыть окна контекста моделей.dev в /v1/models (#1972).
- **fix(db):** устранить резервное восстановление шифрования, вызывающее циклы перешифрования (#1941).
- **fix(auth):** исправить очистку ответов final_answer ассистента Codex (#1965).

- **feat(providers):** Реализовать возможности генерации и редактирования изображений для ChatGPT Web, включая встроенную генерацию изображений в чате и кэширование (#1606).
- **feat(ui):** Интегрировать SVG логотипа OpenCode Zen/Go API и улучшить взаимодействия копирования API-ключа в буфер обмена (#1607).

- **feat(providers):** Интегрировать AgentRouter как нового провайдера, совместимого с OpenAI, с $200 бесплатных кредитов через регистрацию (Issue #1572).
- **feat(ui):** Реализовать проверку по запросу для каждой модели в панели провайдера, позволяя диагностические проверки с одним токеном без срабатывания лимитов скорости (Issue #1532).

- **Round-Robin API-ключей (T07)**: Подключения провайдеров теперь могут содержать несколько API-ключей (Редактировать подключение → Дополнительные API-ключи). Запросы вращаются по кругу между основным и дополнительными ключами через `providerSpecificData.extraApiKeys[]`. Ключи хранятся в памяти, индексируемые по подключению — без изменений в схеме БД.

### 📝 Уже реализовано (подтверждено в аудите)

- **Маршрутизация моделей с подстановочными знаками (T13)**: `wildcardRouter.ts` с сопоставлением подстановочных знаков в стиле glob (`gpt*`, `claude-?-sonnet` и т.д.) уже интегрирован в `model.ts` с ранжированием по специфичности.
- **Скользящее окно квот (T08)**: `accountFallback.ts:isModelLocked()` уже автоматически продвигает окно — если `Date.now() > entry.until`, блокировка удаляется немедленно (без блокировки устаревших данных).

> Улучшения интерфейса, добавление стратегий маршрутизации и корректная обработка ошибок для лимитов использования.

### ✨ Новые функции

- **feat(docs):** интегрировать многостраничную документацию в панель OmniRoute (#1969).
- **feat(settings):** добавить настройку лимита тела запроса (#1968).
- **feat(auth):** добавить секрет клиента OAuth Gemini CLI по умолчанию (#1974).
- **feat(models):** раскрыть окна контекста моделей.dev в /v1/models (#1972).
- **fix(db):** устранить резервное восстановление шифрования, вызывающее циклы перешифрования (#1941).
- **fix(auth):** исправить очистку ответов final_answer ассистента Codex (#1965).

- **feat(providers):** Реализовать возможности генерации и редактирования изображений для ChatGPT Web, включая встроенную генерацию изображений в чате и кэширование (#1606).
- **feat(ui):** Интегрировать SVG логотипа OpenCode Zen/Go API и улучшить взаимодействия копирования API-ключа в буфер обмена (#1607).

- **feat(providers):** Интегрировать AgentRouter как нового провайдера, совместимого с OpenAI, с $200 бесплатных кредитов через регистрацию (Issue #1572).
- **feat(ui):** Реализовать проверку по запросу для каждой модели в панели провайдера, позволяя диагностические проверки с одним токеном без срабатывания лимитов скорости (Issue #1532).

- **Стратегии Fill-First & P2C**: Добавлены стратегии `fill-first` (истощение квоты перед переходом) и `p2c` (выбор по принципу Power-of-Two-Choices для низкой задержки) в выбор стратегии комбо, с полными руководствами и цветными значками.
- **Модели Free Stack Preset**: Создание комбо с шаблоном Free Stack теперь автоматически заполняет 7 лучших моделей провайдеров с нулевой стоимостью (Gemini CLI, Kiro, Qoder×2, Qwen, NVIDIA NIM, Groq). Пользователи просто активируют провайдеров и получают комбо с нулевой стоимостью из коробки.
- **Шире модальное окно комбо**: Модальное окно создания/редактирования комбо теперь использует `max-w-4xl` для комфортного редактирования больших комбо.

### 🐛 Исправления ошибок

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать CommonJS сервер MITM в автономный артефакт, и разрешать пути данных MITM без зависимости от псевдонимов Next.js в упакованном рантайме.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать директорию `wreq-js` в изолированный выходной артефакт Next.js, чтобы упакованные Playwright/E2E запуски могли загрузить хук инструментации на Linux.
- **fix(api):** Валидировать вебсокет-мост Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую валидацию маршрута `request.json()` и возвращая явные 400 ответы для неверных тел.
- **fix(providers):** Добавить явное типирование для помощников псевдонимов и категорий провайдеров, чтобы строгий CI-шлюз `typecheck:noimplicit:core` прошел.
- **fix(ui):** Сохранить страницу деталей провайдера прокси-сервера с меткой резервного варианта "Управляется через настройки прокси-сервера" при отсутствии переводов.
- **fix(electron):** Укрепить CSP для рабочего стола, удалив `unsafe-eval` вне разработки и добавив ограничения для объектов, базового URI, действий формы, предков фрейма и рабочих процессов.
- **fix(cli):** Заменить интерполированные оболочкой пути установки и привилегированных команд выполнения на помощники `spawn`/`execFile` на основе аргументов для установки базы данных, sudo-команд Tailscale, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сделать значки провайдеров устойчивыми, используя сначала компоненты `@lobehub/icons`, затем локальные резервные варианты PNG/SVG, избегая рантайма `@lobehub/ui` в панели инструментов.

- **HTTP 500 для Codex & GitHub на странице Limits**: `getCodexUsage()` и `getGitHubUsage()` теперь возвращают дружелюбное сообщение пользователю, когда провайдер возвращает 401/403 (истекший токен), вместо выбрасывания и вызова 500 ошибки на странице Limits.
- **Ложное срабатывание MaintenanceBanner**: Баннер больше не показывает "Сервер недоступен" ложно при загрузке страницы. Исправлено вызовом `checkHealth()` немедленно при монтировании и удалением устаревшего состояния `show`.
- **Подсказки значков провайдера**: Кнопки редактирования (карандаш) и удаления значков в строке подключения провайдера теперь имеют нативные HTML-подсказки — все 6 значков действий теперь самодокументированы.

> Множественные улучшения из анализа сообществ, новая поддержка провайдеров, исправления для отслеживания токенов, маршрутизации моделей и надежности потоков.

### ✨ Новые функции

- **feat(docs):** интегрировать многостраничную документацию в панель OmniRoute (#1969).
- **feat(settings):** добавить настройку лимита тела запроса (#1968).
- **feat(auth):** добавить секрет клиента OAuth Gemini CLI по умолчанию (#1974).
- **feat(models):** раскрыть окна контекста моделей.dev в /v1/models (#1972).
- **fix(db):** устранить резервное восстановление шифрования, вызывающее циклы перешифрования (#1941).
- **fix(auth):** исправить очистку ответов final_answer ассистента Codex (#1965).

- **feat(providers):** Реализовать возможности генерации и редактирования изображений для ChatGPT Web, включая встроенную генерацию изображений в чате и кэширование (#1606).
- **feat(ui):** Интегрировать SVG логотипа OpenCode Zen/Go API и улучшить взаимодействия копирования API-ключа в буфер обмена (#1607).

- **feat(providers):** Интегрировать AgentRouter как нового провайдера, совместимого с OpenAI, с $200 бесплатных кредитов через регистрацию (Issue #1572).
- **feat(ui):** Реализовать проверку по запросу для каждой модели в панели провайдера, позволяя диагностические проверки с одним токеном без срабатывания лимитов скорости (Issue #1532).

- **Задаче-сознательное умное маршрутирование (T05)**: Автоматический выбор модели на основе типа контента запроса — программирование → deepseek-chat, анализ → gemini-2.5-pro, зрение → gpt-4o, суммирование → gemini-2.5-flash. Настраивается через Настройки. Новый `GET/PUT/POST /api/settings/task-routing` API.
- **Провайдер HuggingFace**: Добавлен HuggingFace Router как провайдер, совместимый с OpenAI, с Llama 3.1 70B/8B, Qwen 2.5 72B, Mistral 7B, Phi-3.5 Mini.
- **Провайдер Vertex AI**: Добавлен провайдер Vertex AI (Google Cloud) с Gemini 2.5 Pro/Flash, Gemma 2 27B, Claude через Vertex.
- **Загрузки файлов в Playground**: Загрузка аудио для транскрипции, загрузка изображений для моделей зрения (автоопределение по имени модели), встроенное отображение изображений для результатов генерации изображений.
- **Визуальная обратная связь выбора модели**: Уже добавленные модели в выборе комбо теперь показывают ✓ зеленый значок — предотвращает путаницу с дубликатами.
- **Совместимость Qwen (PR #352)**: Обновлены настройки User-Agent и CLI отпечатка для совместимости провайдера Qwen.
- **Управление состоянием Round-Robin (PR #349)**: Улучшена логика round-robin для обработки исключенных учетных записей и правильного сохранения состояния ротации.
- **UX буфера обмена (PR #360)**: Укреплены операции буфера обмена с резервным вариантом для небезопасных контекстов; улучшения нормализации инструментов Claude.

### 🐛 Исправления ошибок

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать CommonJS сервер MITM в автономный артефакт, и разрешать пути данных MITM без зависимости от псевдонимов Next.js в упакованном рантайме.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из изолированного пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать директорию `wreq-js` в изолированный выходной артефакт Next.js, чтобы упакованные Playwright/E2E запуски могли загрузить хук инструментации на Linux.
- **fix(api):** Валидировать вебсокет-мост Codex Responses и JSON-полезные нагрузки `/v1/batches` с помощью Zod перед использованием, сохраняя зеленую валидацию маршрута `request.json()` и возвращая явные 400 ответы для неверных тел.
- **fix(providers):** Добавить явное типирование для помощников псевдонимов и категорий провайдеров, чтобы строгий CI-шлюз `typecheck:noimplicit:core` прошел.
- **fix(ui):** Сохранить страницу деталей провайдера прокси-сервера с меткой резервного варианта "Управляется через настройки прокси-сервера" при отсутствии переводов.
- **fix(electron):** Укрепить CSP для рабочего стола, удалив `unsafe-eval` вне разработки и добавив ограничения для объектов, базового URI, действий формы, предков фрейма и рабочих процессов.
- **fix(cli):** Заменить интерполированные оболочкой пути установки и привилегированных команд выполнения на помощники `spawn`/`execFile` на основе аргументов для установки базы данных, sudo-команд Tailscale, редактирования DNS MITM и потоков установки/удаления сертификатов.
- **fix(ui):** Сделать значки провайдеров устойчивыми, используя сначала компоненты `@lobehub/icons`, затем локальные резервные варианты PNG/SVG, избегая рантайма `@lobehub/ui` в панели инструментов.

- **Fix #302 — OpenAI SDK stream=False drops tool_calls**: T01 Accept header negotiation больше не заставляет использовать поток, когда `body.stream` явно `false`. Это приводило к тому, что tool_calls молча отбрасывались при использовании OpenAI Python SDK в не-потоковом режиме.
- **Fix #73 — Claude Haiku routed to OpenAI without provider prefix**: Модели `claude-*`, отправленные без префикса провайдера, теперь правильно маршрутизируются к провайдеру `antigravity` (Anthropic). Добавлена эвристика `gemini-*`/`gemma-*` → `gemini`.
- **Fix #74 — Token counts always 0 for Antigravity/Claude streaming**: Событие `message_start` SSE, которое несет `input_tokens`, не было разобрано `extractUsage()`, что приводило к тому, что все счетчики входных токенов обнулялись. Теперь отслеживание входных/выходных токенов работает правильно для потоковых ответов.
- **Fix #180 — Model import duplicates with no feedback**: `ModelSelectModal` теперь показывает ✓ зеленый акцент для моделей, уже находящихся в комбо, делая очевидным, что они уже добавлены.
- **Ошибки генерации страниц медиа**: Результаты изображений теперь отображаются как теги `<img>`, а не как необработанный JSON. Результаты транскрипции показаны как читаемый текст. Ошибки учетных данных показывают баннер с предупреждением вместо молчаливого сбоя.
- **Кнопка обновления токена на странице провайдера**: Добавлен ручной интерфейс обновления токена для OAuth-провайдеров.

### 🔧 Улучшения

- **Реестр провайдеров**: HuggingFace и Vertex AI добавлены в `providerRegistry.ts` и `providers.ts` (фронтенд).
- **Кэш чтения**: Новый `src/lib/db/readCache.ts` для эффективного кэширования чтения БД.
- **Кэш квот**: Улучшен кэш квот с вытеснением по TTL.

### 📦 Зависимости

- `dompurify` → 3.3.3 (PR #347)
- `undici` → 7.24.2 (PR #348, #361)
- `docker/setup-qemu-action` → v4 (PR #342)
- `docker/setup-buildx-action` → v4 (PR #343)

### 📁 Новые файлы

| File                                          | Purpose                                                     |
| --------------------------------------------- | ----------------------------------------------------------- |
| `open-sse/services/taskAwareRouter.ts`        | Логика задаче-сознательного маршрутирования (7 типов задач) |
| `src/app/api/settings/task-routing/route.ts`  | API конфигурации задаче-сознательного маршрутирования       |
| `src/app/api/providers/[id]/refresh/route.ts` | Ручной обновления токена OAuth                              |
| `src/lib/db/readCache.ts`                     | Эффективный кэш чтения БД                                   |
| `src/shared/utils/clipboard.ts`               | Укрепленные операции буфера обмена с резервным вариантом    |

---

---

## [2.4.1] - 2026-03-13

### 🐛 Исправление

- **Модальное окно Combos: Free Stack виден и выделяется** — Шаблон Free Stack был скрыт (4-й в сетке 3x3). Исправлено: перемещен на позицию 1, переключен на сетку 2x2, чтобы все 4 шаблона были видны, зеленая рамка + FREE-значок выделения.

---

---

## [2.4.0] - 2026-03-13

> **Основной релиз** — Экосистема Free Stack, переработка плейграунда транскрипции, 44+ провайдеров, всесторонняя документация бесплатного тарифа и улучшения интерфейса во всех направлениях.

### ✨ Новые возможности

- **Combos: Шаблон Free Stack** — Новый 4-й шаблон "Free Stack ($0)" с использованием round-robin для Kiro + Qoder + Qwen + Gemini CLI. Предлагает предварительно собранный комбо с нулевой стоимостью при первом использовании.
- **Медиа/Транскрипция: Deepgram по умолчанию** — Deepgram (Nova 3, $200 бесплатно) теперь является провайдером транскрипции по умолчанию. AssemblyAI ($50 бесплатно) и Groq Whisper (бесплатно навсегда) показаны с значками бесплатных кредитов.
- **README: Раздел "Start Free"** — Новый ранний раздел README с 5-ступенчатой таблицей, показывающей, как настроить бесплатный AI за несколько минут.
- **README: Free Transcription Combo** — Новый раздел с предложением комбо Deepgram/AssemblyAI/Groq и деталями бесплатных кредитов для каждого провайдера.
- **providers.ts: флаг hasFree** — NVIDIA NIM, Cerebras и Groq отмечены значком hasFree и freeNote для интерфейса провайдеров.
- **i18n: ключи templateFreeStack** — Комбо шаблона Free Stack переведено и синхронизировано со всеми 30 языками.

---

---

## [2.3.16] - 2026-03-13

### 📖 Документация

- **README: 44+ Провайдеров** — Обновлены все 3 упоминания "36+ провайдеров" до "44+", отражающих фактическое количество в providers.ts (44 провайдера)
- **README: Новый раздел "🆓 Бесплатные модели — то, что вы действительно получаете"** — Добавлена таблица с 7 провайдерами и лимитами скорости для: Kiro (Claude неограниченно через AWS Builder ID), Qoder (5 моделей неограниченно), Qwen (4 модели неограниченно), Gemini CLI (180K/мес), NVIDIA NIM (~40 RPM dev-forever), Cerebras (1M токенов/день / 60K TPM), Groq (30 RPM / 14.4K RPD). Включает рекомендацию \/usr/bin/bash Ultimate Free Stack combo.
- **README: Обновленная таблица цен** — Добавлен Cerebras в уровень API KEY, исправлен NVIDIA с "1000 кредитов" на "dev-forever бесплатно", обновлены количество и названия моделей Qoder/Qwen
- **README: Qoder 8→5 моделей** (названы: kimi-k2-thinking, qwen3-coder-plus, deepseek-r1, minimax-m2, kimi-k2)
- **README: Qwen 3→4 моделей** (названы: qwen3-coder-plus, qwen3-coder-flash, qwen3-coder-next, vision-model)

---

---

## [2.3.15] - 2026-03-13

### ✨ Новые возможности

- **Auto-Combo Dashboard (Tier Priority)**: Добавлен `🏷️ Tier` как 7-й фактор оценки в отображении разбора факторов в `/dashboard/auto-combo` — теперь все 7 факторов оценки Auto-Combo видны.
- **i18n — раздел autoCombo**: Добавлено 20 новых ключей перевода для панели Auto-Combo (`title`, `status`, `modePack`, `providerScores`, `factorTierPriority` и т.д.) во все 30 языковых файлов.

---

---

## [2.3.14] - 2026-03-13

### 🐛 Исправления ошибок

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать сервер CommonJS MITM в автономный артефакт и разрешать пути данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать каталог `wreq-js` в автономный выходной каталог Next.js, чтобы упакованные Playwright/E2E могли загружать хук инструментации на Linux.
- **fix(api):** Проверять вебсокет-мост Codex Responses и `/v1/batches` JSON-полезные нагрузки с помощью Zod перед использованием, сохраняя зеленую проверку `request.json()` и возвращая явные 400 ответы для недопустимых тел.
- **fix(providers):** Добавить явное типизирование для помощников псевдонимов и категорий провайдеров, чтобы строгий `typecheck:noimplicit:core` CI-шлюз прошел.
- **fix(ui):** Сохранять страницу деталей провайдера прокси-сервера с меткой "Управляется через настройки прокси-сервера" при отсутствии переводов.
- **fix(electron):** Усилить CSP для рабочей версии десктопа, удалив `unsafe-eval` вне разработки и добавив ограничения объекта, базового URI, действия формы, предка фрейма и работника.
- **fix(cli):** Заменить пути установки и выполнения привилегированных команд с помощью интерполированных оболочек на помощники `spawn`/`execFile` на основе аргументов для установки базы данных, команд Tailscale sudo, редактирования DNS MITM и установки/удаления сертификатов.
- **fix(ui):** Сохранять значки провайдеров устойчивыми, используя сначала компоненты `@lobehub/icons`, затем локальные PNG/SVG резервные копии, избегая времени выполнения `@lobehub/ui` в панели инструментов.

- **Qoder OAuth (#339)**: Восстановлен действительный `clientSecret` по умолчанию — ранее он был пустой строкой, вызывая "Bad client credentials" при каждой попытке подключения. Публичная учетная запись теперь является резервной по умолчанию (можно переопределить через переменную окружения `QODER_OAUTH_CLIENT_SECRET`).
- **MITM server not found (#335)**: `prepublish.mjs` теперь компилирует `src/mitm/*.ts` в JavaScript с помощью `tsc` перед копированием в пакет npm. Ранее копировались только исходные файлы `.ts` — это означало, что `server.js` никогда не существовал в установках npm/Volta global.
- **GeminiCLI missing projectId (#338)**: Вместо того, чтобы выдавать жесткую ошибку 500 при отсутствии `projectId` в сохраненных учетных данных (например, после перезапуска Docker), OmniRoute теперь регистрирует предупреждение и пытается выполнить запрос — возвращая значимую ошибку с провайдера вместо аварийного завершения OmniRoute.
- **Electron version mismatch (#323)**: Синхронизирована версия `electron/package.json` с `2.3.13` (была `2.0.13`), чтобы версия двоичного файла десктопа совпадала с пакетом npm.

### ✨ Новые модели (#334)

- **Kiro**: `claude-sonnet-4`, `claude-opus-4.6`, `deepseek-v3.2`, `minimax-m2.1`, `qwen3-coder-next`, `auto`
- **Codex**: `gpt5.4`

### 🔧 Улучшения

- **Tier Scoring (API + Validation)**: Добавлен `tierPriority` (вес `0.05`) в схему Zod `ScoringWeights` и маршрут API `combos/auto` — 7-й фактор оценки теперь полностью принимается REST API и проверяется на входе. Вес `stability` скорректирован с `0.10` до `0.05`, чтобы сохранить сумму `1.0`.

### ✨ Новые возможности

- **feat(docs):** интеграция многостраничной документации в панель OmniRoute (#1969)
- **feat(settings):** добавлено ограничение размера тела запроса (#1968)
- **feat(auth):** добавлен клиентский секрет OAuth по умолчанию для Gemini CLI (#1974)
- **feat(models):** открытие контекстных окон моделей в /v1/models (#1972)
- **fix(db):** исправление резервного шифрования, вызывающего циклы повторного шифрования (#1941)
- **fix(auth):** исправление очистки ответа final_answer для Codex assistant (#1965)

- **feat(providers):** Реализована возможность генерации и редактирования изображений для ChatGPT Web, включая генерацию изображений в чате и кэширование (#1606).
- **feat(ui):** Интегрирован SVG логотипа OpenCode Zen/Go API и улучшены взаимодействия копирования API-ключа в панель инструментов (#1607).

- **feat(providers):** Интегрирован AgentRouter как новый провайдер, совместимый с OpenAI, с бесплатными кредитами в размере $200 при регистрации (Issue #1572).
- **feat(ui):** Реализована проверка моделей по запросу в панели провайдеров, позволяющая выполнять диагностические проверки с одним токеном без срабатывания лимитов скорости (Issue #1532).

- **Tiered Quota Scoring (Auto-Combo)**: Добавлен `tierPriority` как 7-й фактор оценки — учетные записи с тарифами Ultra/Pro теперь предпочитаются тарифам Free при равенстве других факторов. Новые необязательные поля `accountTier` и `quotaResetIntervalSecs` в `ProviderCandidate`. Все 4 пакета режимов обновлены (`ship-fast`, `cost-saver`, `quality-first`, `offline-friendly`).
- **Intra-Family Model Fallback (T5)**: При недоступности модели (404/400/403) OmniRoute теперь автоматически переключается на родственные модели из той же семьи перед возвратом ошибки (`modelFamilyFallback.ts`).
- **Configurable API Bridge Timeout**: Переменная окружения `API_BRIDGE_PROXY_TIMEOUT_MS` позволяет операторам настраивать тайм-аут прокси (по умолчанию 30с). Исправляет ошибки 504 при медленных ответах от вышестоящего уровня. (#332)
- **Star History**: Заменен виджет star-history.com на starchart.cc (`?variant=adaptive`) во всех 30 README — адаптируется к светлой/темной теме и обновляется в реальном времени.

### 🐛 Исправления ошибок

- **fix(mitm):** Компилировать утилиты MITM как NodeNext ESM во время prepublish, копировать сервер CommonJS MITM в автономный артефакт и разрешать пути данных MITM без использования псевдонимов Next.js в упакованном времени выполнения.
- **fix(build):** Переместить локальный префикс Wine `.tmp/wine32` из пути сборки Next.js, чтобы артефакты упаковки Windows Electron не могли вызывать сканирование `EACCES` во время сборки Node 24.
- **fix(build):** Скопировать каталог `wreq-js` в автономный выходной каталог Next.js, чтобы упакованные Playwright/E2E могли загружать хук инструментации на Linux.
- **fix(api):** Проверять вебсокет-мост Codex Responses и `/v1/batches` JSON-полезные нагрузки с помощью Zod перед использованием, сохраняя зеленую проверку `request.json()` и возвращая явные 400 ответы для недопустимых тел.
- **fix(providers):** Добавить явное типизирование для помощников псевдонимов и категорий провайдеров, чтобы строгий `typecheck:noimplicit:core` CI-шлюз прошел.
- **fix(ui):** Сохранять страницу деталей провайдера прокси-сервера с меткой "Управляется через настройки прокси-сервера" при отсутствии переводов.
- **fix(electron):** Усилить CSP для рабочей версии десктопа, удалив `unsafe-eval` вне разработки и добавив ограничения объекта, базового URI, действия формы, предка фрейма и работника.
- **fix(cli):** Заменить пути установки и выполнения привилегированных команд с помощью интерполированных оболочек на помощники `spawn`/`execFile` на основе аргументов для установки базы данных, команд Tailscale sudo, редактирования DNS MITM и установки/удаления сертификатов.
- **fix(ui):** Сохранять значки провайдеров устойчивыми, используя сначала компоненты `@lobehub/icons`, затем локальные PNG/SVG резервные копии, избегая времени выполнения `@lobehub/ui` в панели инструментов.

- **Auth — First-time password**: Переменная окружения `INITIAL_PASSWORD` теперь принимается при установке первого пароля панели. Использует `timingSafeEqual` для сравнения с постоянным временем, предотвращая атаки по времени. (#333)
- **README Truncation**: Исправлен отсутствующий закрывающий тег `</details>` в разделе Troubleshooting, который заставлял GitHub прекратить рендеринг всего, что было ниже (Tech Stack, Docs, Roadmap, Contributors).
- **pnpm install**: Удалено избыточное переопределение `@swc/helpers` из `package.json`, которое конфликтовало с прямым зависимым пакетом, вызывая ошибки `EOVERRIDE` в pnpm. Добавлена конфигурация `pnpm.onlyBuiltDependencies`.
- **CLI Path Injection (T12)**: Добавлен валидатор `isSafePath()` в `cliRuntime.ts` для блокировки обхода пути и метасимволов оболочки в переменных окружения `CLI_*_BIN`.
- **CI**: Перегенерирован `package-lock.json` после удаления переопределения для исправления сбоев `npm ci` в GitHub Actions.

### 🔧 Улучшения

- **Response Format (T1)**: `response_format` (json_schema/json_object) теперь внедряется как системный подсказка для Claude, обеспечивая совместимость со структурированным выводом.
- **429 Retry (T2)**: Повторная попытка для ответов 429 (2× попытки с задержкой 2с) перед переходом к следующему URL.
- **Gemini CLI Headers (T3)**: Добавлены заголовки `User-Agent` и `X-Goog-Api-Client` для совместимости с Gemini CLI.
- **Pricing Catalog (T9)**: Добавлены записи `deepseek-3.1`, `deepseek-3.2` и `qwen3-coder-next`.

### 📁 Новые файлы

| File                                       | Purpose                                                             |
| ------------------------------------------ | ------------------------------------------------------------------- |
| `open-sse/services/modelFamilyFallback.ts` | Определения семейства моделей и логика внутрисемейного переключения |

### Исправлено

- **KiloCode**: тайм-аут проверки здоровья kilocode уже исправлен в v2.3.11
- **OpenCode**: Добавлен opencode в регистр cliRuntime с тайм-аутом проверки здоровья 15с
- **OpenClaw / Cursor**: Увеличен тайм-аут проверки здоровья до 15с для медленных вариантов запуска
- **VPS**: Установка пакетов droid и openclaw npm; активация CLI_EXTRA_PATHS для kiro-cli
- **cliRuntime**: Добавлена регистрация инструмента opencode и увеличен тайм-аут для continue

---

---

## [2.3.11] - 2026-03-12

### Исправлено

- **Проверка здоровья KiloCode**: Увеличено значение `healthcheckTimeoutMs` с 4000ms до 15000ms — kilocode отображает ASCII-логотип при запуске, что приводит к ложным срабатываниям `healthcheck_failed` в медленных/холодных средах

---

---

## [2.3.10] - 2026-03-12

### Исправлено

- **Lint**: Исправлена ошибка `check:any-budget:t11` — заменено `as any` на `as Record<string, unknown>` в OAuthModal.tsx (3 случая)

### Документация

- **CLI-TOOLS.md**: Полное руководство по всем 11 инструментам командной строки (claude, codex, gemini, opencode, cline, kilocode, continue, kiro-cli, cursor, droid, openclaw)
- **i18n**: CLI-TOOLS.md синхронизирован с 30 языками, включая переведенный заголовок и введение

---

---

## [2.3.8] - 2026-03-12

---

## [2.3.9] - 2026-03-12

### Добавлено

- **/v1/completions**: Новый эндпоинт для завершения OpenAI — принимает как `prompt` строку, так и массив `messages`, автоматически нормализует в формат чата
- **EndpointPage**: Теперь отображает все 3 типа эндпоинтов, совместимых с OpenAI: Chat Completions, Responses API и Legacy Completions
- **i18n**: Добавлены `completionsLegacy/completionsLegacyDesc` в 30 языковых файлов

### Исправлено

- **OAuthModal**: Исправлено отображение `[object Object]` при всех ошибках подключения OAuth — правильно извлекается `.message` из объектов ошибок в 3 вызовах `throw new Error(data.error)` (exchange, device-code, authorize)
- Затрагивает Cline, Codex, GitHub, Qwen, Kiro и все остальные провайдеры OAuth

---

---

## [2.3.7] - 2026-03-12

### Исправлено

- **Cline OAuth**: Добавлено `decodeURIComponent` перед декодированием base64, чтобы правильно обрабатывать URL-кодированные коды авторизации из URL-адреса обратного вызова, исправляя ошибки "invalid or expired authorization code" в удаленных (LAN IP) настройках
- **Cline OAuth**: `mapTokens` теперь заполняет `name = firstName + lastName || email`, чтобы аккаунты Cline отображали реальные имена пользователей вместо "Account #ID"
- **Имена аккаунтов OAuth**: Все потоки обмена OAuth (exchange, poll, poll-callback) теперь нормализуют `name = email`, если имя отсутствует, чтобы все аккаунты OAuth отображали свою электронную почту как метку в панели управления провайдерами
- **Имена аккаунтов OAuth**: Удален последовательный "Account N" в `db/providers.ts` — аккаунты без электронной почты/имени теперь используют стабильную метку на основе ID через `getAccountDisplayName()` вместо последовательного номера, который меняется при удалении аккаунтов

---

---

## [2.3.6] - 2026-03-12

### Исправлено

- **Пакетное тестирование провайдера**: Исправлена схема Zod для принятия `providerId: null` (фронтенд отправляет null для режимов без провайдера); ранее неправильно возвращала "Invalid request" для всех тестов пакета
- **Модальное окно тестирования провайдера**: Исправлено отображение `[object Object]` — нормализация объектов ошибок API в строки перед отображением в `setTestResults` и `ProviderTestResultsView`
- **i18n**: Добавлены отсутствующие ключи `cliTools.toolDescriptions.opencode`, `cliTools.toolDescriptions.kiro`, `cliTools.guides.opencode`, `cliTools.guides.kiro` в `en.json`
- **i18n**: Синхронизированы 1111 отсутствующих ключей во всех 29 неанглийских языковых файлах, используя значения на английском языке в качестве резервных

---

---

## [2.3.5] - 2026-03-11

### Исправлено

- **@swc/helpers**: Добавлен постоянный исправленный `postinstall` для копирования `@swc/helpers` в `node_modules` автономного приложения — предотвращает сбой MODULE_NOT_FOUND при глобальной установке npm

---

---

## [2.3.4] - 2026-03-10

### Добавлено

- Интеграции с несколькими провайдерами и улучшения дашборда

---

---
