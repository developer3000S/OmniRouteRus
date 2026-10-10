# OmniRoute AI Agent Skills

Drop-in skills that let any AI agent (Claude Desktop, ChatGPT, Cursor, Cline, Continue, etc.)
consume OmniRoute via OpenAI-compatible REST in one fetch.

## Как агенты используют эти навыки

```
Пользователь к агенту: "Используйте OmniRoute для генерации кода. Получите этот URL и следуйте ему:
https://raw.githubusercontent.com/diegosouzapw/OmniRoute/main/skills/omniroute/SKILL.md"
```

Агент получает манифест, видит настройку + конечные точки и маршрутизирует вызовы
через `$OMNIROUTE_URL/v1/...` с `Authorization: Bearer $OMNIROUTE_KEY`.

## Индекс навыков

| Возможность                            | Манифест                                                             |
| -------------------------------------- | -------------------------------------------------------------------- |
| Точка входа + настройка                | [omniroute/SKILL.md](omniroute/SKILL.md)                             |
| Чат / генерация кода                   | [omniroute-chat/SKILL.md](omniroute-chat/SKILL.md)                   |
| Генерация изображений                  | [omniroute-image/SKILL.md](omniroute-image/SKILL.md)                 |
| Текст в речь                           | [omniroute-tts/SKILL.md](omniroute-tts/SKILL.md)                     |
| Речь в текст                           | [omniroute-stt/SKILL.md](omniroute-stt/SKILL.md)                     |
| Вложения                               | [omniroute-embeddings/SKILL.md](omniroute-embeddings/SKILL.md)       |
| Веб-поиск                              | [omniroute-web-search/SKILL.md](omniroute-web-search/SKILL.md)       |
| Веб-запрос (URL→markdown)              | [omniroute-web-fetch/SKILL.md](omniroute-web-fetch/SKILL.md)         |
| MCP сервер (37 инструментов)           | [omniroute-mcp/SKILL.md](omniroute-mcp/SKILL.md)                     |
| A2A протокол                           | [omniroute-a2a/SKILL.md](omniroute-a2a/SKILL.md)                     |
| Маршрутизация и комбинации             | [omniroute-routing/SKILL.md](omniroute-routing/SKILL.md)             |
| Сжатие токенов                         | [omniroute-compression/SKILL.md](omniroute-compression/SKILL.md)     |
| Мониторинг и здоровье                  | [omniroute-monitoring/SKILL.md](omniroute-monitoring/SKILL.md)       |
| CLI точка входа                        | [omniroute-cli/SKILL.md](omniroute-cli/SKILL.md)                     |
| CLI администрирование и жизненный цикл | [omniroute-cli-admin/SKILL.md](omniroute-cli-admin/SKILL.md)         |
| CLI провайдеры и ключи                 | [omniroute-cli-providers/SKILL.md](omniroute-cli-providers/SKILL.md) |
| CLI облачные агенты                    | [omniroute-cli-cloud/SKILL.md](omniroute-cli-cloud/SKILL.md)         |
| CLI оценки и бенчмарки                 | [omniroute-cli-eval/SKILL.md](omniroute-cli-eval/SKILL.md)           |

## Формат

Каждый `SKILL.md` следует спецификации манифеста навыков Anthropic с YAML frontmatter
(`name`, `description`) и самодостаточным телом markdown: настройка, конечные точки,
примеры и коды ошибок. Предполагается, что читатель — агент без предварительного контекста.

## Навыки, исключительные для OmniRoute

Эти 5 навыков не имеют эквивалентов в других маршрутизаторах AI:

- `omniroute-mcp` — 37 инструментов MCP (память, навыки, провайдеры, маршрутизация, сжатие) через SSE/stdio/HTTP
- `omniroute-a2a` — 5 навыков A2A (умная маршрутизация, квота, обнаружение, стоимость, здоровье) через JSON-RPC 2.0
- `omniroute-routing` — создание/настройка комбинаций, 14 стратегий, Auto-combo оценка, цепочки резервного копирования
- `omniroute-compression` — RTK + Caveman + режим стека + фильтр доступности MCP (экономия токенов 60–90%)
- `omniroute-monitoring` — предохранители цепей, задержки p50/p95/p99, бюджетная охрана, MCP журнал аудита
