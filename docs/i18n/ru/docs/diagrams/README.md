# README (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../diagrams/README.md) · 🇸🇦 [ar](../../../ar/docs/diagrams/README.md) · 🇦🇿 [az](../../../az/docs/diagrams/README.md) · 🇧🇬 [bg](../../../bg/docs/diagrams/README.md) · 🇧🇩 [bn](../../../bn/docs/diagrams/README.md) · 🇨🇿 [cs](../../../cs/docs/diagrams/README.md) · 🇩🇰 [da](../../../da/docs/diagrams/README.md) · 🇩🇪 [de](../../../de/docs/diagrams/README.md) · 🇪🇸 [es](../../../es/docs/diagrams/README.md) · 🇮🇷 [fa](../../../fa/docs/diagrams/README.md) · 🇫🇮 [fi](../../../fi/docs/diagrams/README.md) · 🇫🇷 [fr](../../../fr/docs/diagrams/README.md) · 🇮🇳 [gu](../../../gu/docs/diagrams/README.md) · 🇮🇱 [he](../../../he/docs/diagrams/README.md) · 🇮🇳 [hi](../../../hi/docs/diagrams/README.md) · 🇭🇺 [hu](../../../hu/docs/diagrams/README.md) · 🇮🇩 [id](../../../id/docs/diagrams/README.md) · 🇮🇩 [in](../../../in/docs/diagrams/README.md) · 🇮🇹 [it](../../../it/docs/diagrams/README.md) · 🇯🇵 [ja](../../../ja/docs/diagrams/README.md) · 🇰🇷 [ko](../../../ko/docs/diagrams/README.md) · 🇮🇳 [mr](../../../mr/docs/diagrams/README.md) · 🇲🇾 [ms](../../../ms/docs/diagrams/README.md) · 🇳🇱 [nl](../../../nl/docs/diagrams/README.md) · 🇳🇴 [no](../../../no/docs/diagrams/README.md) · 🇵🇭 [phi](../../../phi/docs/diagrams/README.md) · 🇵🇱 [pl](../../../pl/docs/diagrams/README.md) · 🇵🇹 [pt](../../../pt/docs/diagrams/README.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/diagrams/README.md) · 🇷🇴 [ro](../../../ro/docs/diagrams/README.md) · 🇸🇰 [sk](../../../sk/docs/diagrams/README.md) · 🇸🇪 [sv](../../../sv/docs/diagrams/README.md) · 🇰🇪 [sw](../../../sw/docs/diagrams/README.md) · 🇮🇳 [ta](../../../ta/docs/diagrams/README.md) · 🇮🇳 [te](../../../te/docs/diagrams/README.md) · 🇹🇭 [th](../../../th/docs/diagrams/README.md) · 🇹🇷 [tr](../../../tr/docs/diagrams/README.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/diagrams/README.md) · 🇵🇰 [ur](../../../ur/docs/diagrams/README.md) · 🇻🇳 [vi](../../../vi/docs/diagrams/README.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/diagrams/README.md)

---

---
title: "Диаграммы"
version: 3.8.2
lastUpdated: 2026-05-13
---

# Диаграммы

Исходные файлы Mermaid (`.mmd`) и экспортированные SVG для архитектуры OmniRoute v3.8.0.

## Основные диаграммы

| Источник                                             | Экспортировано                                 | Используется                                                                        |
| -------------------------------------------------- | ---------------------------------------- | ------------------------------------------------------------------------------ |
| [request-pipeline.mmd](./request-pipeline.mmd)     | [SVG](./exported/request-pipeline.svg)   | docs/architecture/ARCHITECTURE.md, docs/architecture/CODEBASE_DOCUMENTATION.md |
| [auto-combo-9factor.mmd](./auto-combo-9factor.mmd) | [SVG](./exported/auto-combo-9factor.svg) | docs/routing/AUTO-COMBO.md                                                     |
| [resilience-3layers.mmd](./resilience-3layers.mmd) | [SVG](./exported/resilience-3layers.svg) | docs/architecture/RESILIENCE_GUIDE.md, CLAUDE.md                               |
| [i18n-flow.mmd](./i18n-flow.mmd)                   | [SVG](./exported/i18n-flow.svg)          | docs/guides/I18N.md                                                            |
| [mcp-tools-37.mmd](./mcp-tools-37.mmd)             | [SVG](./exported/mcp-tools-37.svg)       | docs/frameworks/MCP-SERVER.md                                                  |
| [cloud-agent-flow.mmd](./cloud-agent-flow.mmd)     | [SVG](./exported/cloud-agent-flow.svg)   | docs/frameworks/CLOUD_AGENT.md                                                 |
| [authz-pipeline.mmd](./authz-pipeline.mmd)         | [SVG](./exported/authz-pipeline.svg)     | docs/architecture/AUTHZ_GUIDE.md                                               |
| [db-schema-overview.mmd](./db-schema-overview.mmd) | [SVG](./exported/db-schema-overview.svg) | docs/architecture/CODEBASE_DOCUMENTATION.md                                    |

## Как обновить

1. Редактируйте `*.mmd`.
2. Перерендерите: `npm run docs:render-diagrams` (использует `@mermaid-js/mermaid-cli`).
3. Зафиксируйте оба `.mmd` и `.svg`.

Если `@mermaid-js/mermaid-cli` недоступен локально, установите его один раз:

```bash
npm install -g @mermaid-js/mermaid-cli
```

Скрипт рендерит каждый `.mmd` в `docs/diagrams/` в `docs/diagrams/exported/*.svg`
с белым фоном, подходящим для темной и светлой тем.

## Ссылки из документа

Из документа в `docs/<subfolder>/`, относительный путь становится `../diagrams/...`:

```markdown
![Request pipeline](../diagrams/exported/request-pipeline.svg)

> Источник: [../diagrams/request-pipeline.mmd](../diagrams/request-pipeline.mmd)
```

Из корня репозитория (например, `CLAUDE.md`):

```markdown
![Resilience layers](./docs/diagrams/exported/resilience-3layers.svg)
```

## Соглашения

- Один концепт на диаграмму. Не пытайтесь уместить всю платформу в одной диаграмме.
- Короткие метки узлов (3-6 слов). Используйте `<br/>` для переносов строк внутри узлов.
- Предпочитайте `flowchart LR` для конвейеров и `flowchart TB` для моделей с уровнями.
- Используйте `sequenceDiagram` для интерактивных (запрос/ответ) потоков.
- Используйте `erDiagram` для обзоров схемы базы данных.
- Обновляйте оба `.mmd` и `.svg` в одном коммите. Держите их синхронизированными.
