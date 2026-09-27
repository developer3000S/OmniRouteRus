# TIERS (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../marketing/TIERS.md) · 🇸🇦 [ar](../../../ar/docs/marketing/TIERS.md) · 🇦🇿 [az](../../../az/docs/marketing/TIERS.md) · 🇧🇬 [bg](../../../bg/docs/marketing/TIERS.md) · 🇧🇩 [bn](../../../bn/docs/marketing/TIERS.md) · 🇨🇿 [cs](../../../cs/docs/marketing/TIERS.md) · 🇩🇰 [da](../../../da/docs/marketing/TIERS.md) · 🇩🇪 [de](../../../de/docs/marketing/TIERS.md) · 🇪🇸 [es](../../../es/docs/marketing/TIERS.md) · 🇮🇷 [fa](../../../fa/docs/marketing/TIERS.md) · 🇫🇮 [fi](../../../fi/docs/marketing/TIERS.md) · 🇫🇷 [fr](../../../fr/docs/marketing/TIERS.md) · 🇮🇳 [gu](../../../gu/docs/marketing/TIERS.md) · 🇮🇱 [he](../../../he/docs/marketing/TIERS.md) · 🇮🇳 [hi](../../../hi/docs/marketing/TIERS.md) · 🇭🇺 [hu](../../../hu/docs/marketing/TIERS.md) · 🇮🇩 [id](../../../id/docs/marketing/TIERS.md) · 🇮🇩 [in](../../../in/docs/marketing/TIERS.md) · 🇮🇹 [it](../../../it/docs/marketing/TIERS.md) · 🇯🇵 [ja](../../../ja/docs/marketing/TIERS.md) · 🇰🇷 [ko](../../../ko/docs/marketing/TIERS.md) · 🇮🇳 [mr](../../../mr/docs/marketing/TIERS.md) · 🇲🇾 [ms](../../../ms/docs/marketing/TIERS.md) · 🇳🇱 [nl](../../../nl/docs/marketing/TIERS.md) · 🇳🇴 [no](../../../no/docs/marketing/TIERS.md) · 🇵🇭 [phi](../../../phi/docs/marketing/TIERS.md) · 🇵🇱 [pl](../../../pl/docs/marketing/TIERS.md) · 🇵🇹 [pt](../../../pt/docs/marketing/TIERS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/marketing/TIERS.md) · 🇷🇴 [ro](../../../ro/docs/marketing/TIERS.md) · 🇸🇰 [sk](../../../sk/docs/marketing/TIERS.md) · 🇸🇪 [sv](../../../sv/docs/marketing/TIERS.md) · 🇰🇪 [sw](../../../sw/docs/marketing/TIERS.md) · 🇮🇳 [ta](../../../ta/docs/marketing/TIERS.md) · 🇮🇳 [te](../../../te/docs/marketing/TIERS.md) · 🇹🇭 [th](../../../th/docs/marketing/TIERS.md) · 🇹🇷 [tr](../../../tr/docs/marketing/TIERS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/marketing/TIERS.md) · 🇵🇰 [ur](../../../ur/docs/marketing/TIERS.md) · 🇻🇳 [vi](../../../vi/docs/marketing/TIERS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/marketing/TIERS.md)

---

---
title: "OmniRoute Tiers — Руководство пользователя"
version: 3.8.2
lastUpdated: 2026-05-15
---

# OmniRoute Tiers — Руководство пользователя

OmniRoute организует более 207 поддерживаемых провайдеров в 3 экономических уровня. Каждый запрос проходит через них по порядку, пока один из них не вернет успешный ответ — вы получаете самый дешевый приемлемый ответ, не писав код для резервных вариантов.

## Уровень 1 — Подписка

**Провайдеры, за которые вы уже платите.** OmniRoute использует каждый капельку квоты до истечения срока действия.

| Провайдер                            | Почему Уровень 1                                   |
| ----------------------------------- | -------------------------------------------- |
| Claude Code OAuth                   | Anthropic Pro/Team — фиксированная стоимость, часто неиспользуемая |
| OpenAI Codex (ChatGPT subscription) | Plus/Team включает квоту Codex               |
| GitHub Copilot                      | По-месту — квота сбрасывается ежемесячно              |
| Cursor IDE                          | Квота Pro-плана                               |
| Antigravity / Windsurf              | Встроенные квоты                              |

**Стратегия**: сначала направляйте сюда каждый запрос, который соответствует силе модели. Монитор квоты отслеживает приближающийся сброс; комбо-стратегии `reset-aware` и `subscription` приоритезируют соответственно.

## Уровень 2 — Дешево

**Провайдеры с оплатой за токен под $1/1M токенов.** Резервируются для высокообъемной работы или после достижения лимитов квот Уровня 1.

| Провайдер                     | Цена (вход/выход) | Сильные стороны            |
| ---------------------------- | -------------------- | -------------------- |
| DeepSeek V4 Pro              | $0.27 / $1.10 за 1M | Код, рассуждение      |
| GLM-4.5                      | $0.60 / $2.20 за 1M | Длинный контекст         |
| MiniMax M1                   | $0.20 / $1.10 за 1M | Скорость                |
| Qwen Coder                   | $0.30 / $1.20 за 1M | Код                 |
| OpenRouter (price-optimized) | варьируется               | 100+ моделей, динамические |

**Стратегия**: комбо `cost-optimized` выбирает модель с наименьшей стоимостью $/токен, которая соответствует фильтру способностей задачи (видение, режим JSON, инструменты, максимальный контекст).

## Уровень 3 — Бесплатно

**Провайдеры с нулевой стоимостью** — бесплатные тарифы, кредитные программы, OAuth-квоты на день.

| Провайдер         | Бесплатная квота / кредиты                 |
| ---------------- | ------------------------------------ |
| Kiro AI          | Бесплатный уровень Claude (щедрое использование) |
| OpenCode Free    | Без аутентификации, щедрые лимиты скорости        |
| Qoder            | Бесплатный OAuth                           |
| Gemini CLI OAuth | Щедрая дневная квота                 |
| Google Vertex AI | $300 кредитов для новых аккаунтов             |
| Amazon Q         | Бесплатный тариф для пользователей AWS              |
| Pollinations     | Открытый публичный API                      |
| Cloudflare AI    | Бесплатный тариф Workers AI                 |

**Стратегия**: комбо `auto` с ограничением бюджета направляет сюда, когда Уровень 1+2 не удается или когда установлено `useFreeOnly=true`. Бесплатные провайдеры часто имеют слабые лимиты скорости — автоматический выключатель восстанавливает их при отказе.

## Настройка уровней

Панель управления → **Уровни** → назначьте свои провайдеры. Значения по умолчанию (из `tierDefaults.json`) разумны; редактируйте, когда у вас есть конкретные подписки для приоритизации или провайдеры для исключения.

9-факторное оценивание Auto-Combo также учитывает уровень. Смотрите [`docs/routing/AUTO-COMBO.md`](../routing/AUTO-COMBO.md).

## Телеметрия

Панель управления → **Использование** показывает количество токенов, потраченных на каждый уровень в день. Используйте это, чтобы:

- Убедиться, что Уровень 1 используется полностью (иначе вы тратите ценность подписки)
- Определить, какие модели Уровня 2 чаще всего выбираются (консолидируйте до 1-2)
- Убедиться, что Уровень 3 экономит деньги на тестовых/исследовательских рабочих нагрузках

## Распространенные шаблоны

### Чисто-бесплатная рабочая нагрузка

```json
{
  "strategy": "auto",
  "config": { "auto": { "weights": { "costInv": 0.5, "tierPriority": 0.3 } } }
}
```

Сильно направляет на Уровень 3; использует Уровень 2 только в случае недоступности Уровня 3.

### Подписка в первую очередь с дешевым резервом

```json
{
  "strategy": "priority",
  "targets": [
    { "provider": "claude-code-oauth", "weight": 1 },
    { "provider": "deepseek", "weight": 1 },
    { "provider": "kiro", "weight": 1 }
  ]
}
```

Явный упорядоченный список, соответствующий Уровень 1 → Уровень 2 → Уровень 3.
