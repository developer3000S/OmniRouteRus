# Adaptive Stream Readiness Timeout (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../specs/2026-05-16-adaptive-stream-readiness-design.md) · 🇸🇦 [ar](../../../ar/docs/specs/2026-05-16-adaptive-stream-readiness-design.md) · 🇦🇿 [az](../../../az/docs/specs/2026-05-16-adaptive-stream-readiness-design.md) · 🇧🇬 [bg](../../../bg/docs/specs/2026-05-16-adaptive-stream-readiness-design.md) · 🇧🇩 [bn](../../../bn/docs/specs/2026-05-16-adaptive-stream-readiness-design.md) · 🇨🇿 [cs](../../../cs/docs/specs/2026-05-16-adaptive-stream-readiness-design.md) · 🇩🇰 [da](../../../da/docs/specs/2026-05-16-adaptive-stream-readiness-design.md) · 🇩🇪 [de](../../../de/docs/specs/2026-05-16-adaptive-stream-readiness-design.md) · 🇪🇸 [es](../../../es/docs/specs/2026-05-16-adaptive-stream-readiness-design.md) · 🇮🇷 [fa](../../../fa/docs/specs/2026-05-16-adaptive-stream-readiness-design.md) · 🇫🇮 [fi](../../../fi/docs/specs/2026-05-16-adaptive-stream-readiness-design.md) · 🇫🇷 [fr](../../../fr/docs/specs/2026-05-16-adaptive-stream-readiness-design.md) · 🇮🇳 [gu](../../../gu/docs/specs/2026-05-16-adaptive-stream-readiness-design.md) · 🇮🇱 [he](../../../he/docs/specs/2026-05-16-adaptive-stream-readiness-design.md) · 🇮🇳 [hi](../../../hi/docs/specs/2026-05-16-adaptive-stream-readiness-design.md) · 🇭🇺 [hu](../../../hu/docs/specs/2026-05-16-adaptive-stream-readiness-design.md) · 🇮🇩 [id](../../../id/docs/specs/2026-05-16-adaptive-stream-readiness-design.md) · 🇮🇩 [in](../../../in/docs/specs/2026-05-16-adaptive-stream-readiness-design.md) · 🇮🇹 [it](../../../it/docs/specs/2026-05-16-adaptive-stream-readiness-design.md) · 🇯🇵 [ja](../../../ja/docs/specs/2026-05-16-adaptive-stream-readiness-design.md) · 🇰🇷 [ko](../../../ko/docs/specs/2026-05-16-adaptive-stream-readiness-design.md) · 🇮🇳 [mr](../../../mr/docs/specs/2026-05-16-adaptive-stream-readiness-design.md) · 🇲🇾 [ms](../../../ms/docs/specs/2026-05-16-adaptive-stream-readiness-design.md) · 🇳🇱 [nl](../../../nl/docs/specs/2026-05-16-adaptive-stream-readiness-design.md) · 🇳🇴 [no](../../../no/docs/specs/2026-05-16-adaptive-stream-readiness-design.md) · 🇵🇭 [phi](../../../phi/docs/specs/2026-05-16-adaptive-stream-readiness-design.md) · 🇵🇱 [pl](../../../pl/docs/specs/2026-05-16-adaptive-stream-readiness-design.md) · 🇵🇹 [pt](../../../pt/docs/specs/2026-05-16-adaptive-stream-readiness-design.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/2026-05-16-adaptive-stream-readiness-design.md) · 🇷🇴 [ro](../../../ro/docs/specs/2026-05-16-adaptive-stream-readiness-design.md) · 🇸🇰 [sk](../../../sk/docs/specs/2026-05-16-adaptive-stream-readiness-design.md) · 🇸🇪 [sv](../../../sv/docs/specs/2026-05-16-adaptive-stream-readiness-design.md) · 🇰🇪 [sw](../../../sw/docs/specs/2026-05-16-adaptive-stream-readiness-design.md) · 🇮🇳 [ta](../../../ta/docs/specs/2026-05-16-adaptive-stream-readiness-design.md) · 🇮🇳 [te](../../../te/docs/specs/2026-05-16-adaptive-stream-readiness-design.md) · 🇹🇭 [th](../../../th/docs/specs/2026-05-16-adaptive-stream-readiness-design.md) · 🇹🇷 [tr](../../../tr/docs/specs/2026-05-16-adaptive-stream-readiness-design.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/2026-05-16-adaptive-stream-readiness-design.md) · 🇵🇰 [ur](../../../ur/docs/specs/2026-05-16-adaptive-stream-readiness-design.md) · 🇻🇳 [vi](../../../vi/docs/specs/2026-05-16-adaptive-stream-readiness-design.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/2026-05-16-adaptive-stream-readiness-design.md)

---

## Проблема

Длинные сессии Codex могут генерировать очень большие полезные нагрузки API (сотни сообщений, 20 инструментов и большие кэшированные входные данные). OmniRoute в настоящее время использует фиксированное значение `STREAM_READINESS_TIMEOUT_MS` по умолчанию в 30 секунд для первого полезного события SSE. Это фиксированное значение слишком короткое для некоторых больших запросов Codex, даже если в дальнейшем поток успешно завершается.

Недавние локальные данные показали:

- Маленькие и средние запросы Codex подтверждают готовность примерно за 0.8-2.5 секунды.
- Большие запросы Codex могут выполняться 60+ секунд и все же успешно завершаться.
- Фиксированный таймаут готовности в 30 секунд может поэтому создавать ложные сбои: `Stream produced no useful content within 30000ms`.

Решение должно избегать общего увеличения времени ожидания вручную, потому что это замедлит резервное копирование для действительно мертвых потоков.

## Цели

- Обеспечить быструю обработку маленьких запросов, чтобы они могли быстро завершиться, если поток вверху мертв.
- Дать большим/tool-heavy запросам Codex Responses больше времени для производства первого полезного содержимого.
- Сделать решения о времени ожидания видимыми в журналах для будущего отладки.
- Сохранить существующее поведение по умолчанию, если форма запроса не оправдывает дополнительный бюджет.
- Сохранить жесткий верхний предел, чтобы зомби-потоки не могли висеть бесконечно.

## Нецелевые задачи

- Не изменять порядок резервного копирования провайдеров в этом спецификации.
- Не изменять политику здоровья учетной записи/ограничения скорости.
- Не изменять поведение потока в состоянии ожидания после готовности.
- Не реализовывать сжатие или суммирование в рамках этого изменения.

## Дизайн

Добавить небольшой вспомогательный инструмент политики, который вычисляет время ожидания готовности из формы запроса:

`open-sse/utils/streamReadinessPolicy.ts`

Вспомогательный инструмент принимает:

- `baseTimeoutMs`
- `provider`
- `model`
- `body`

Он возвращает:

- `timeoutMs`
- `reasons`

Начальная эвристика намеренно консервативна:

- Начните с настроенного базового времени ожидания, обычно 30 секунд.
- Добавьте бюджет для больших массивов входных данных или массивов сообщений.
- Добавьте бюджет для запросов с большим количеством инструментов.
- Добавьте бюджет для запросов Codex GPT-5.5 Responses, поскольку локальные данные показывают, что эти запросы могут занимать больше времени на больших сессиях.
- Ограничьте результат 120 секундами по умолчанию.

Это адаптивное, а не чисто на основе провайдера: Codex получает дополнительный бюджет только тогда, когда полезная нагрузка достаточно велика и содержит много инструментов, чтобы оправдать это.

## Интеграция

В `open-sse/handlers/chatCore.ts`, замените прямое использование `STREAM_READINESS_TIMEOUT_MS` в `ensureStreamReadiness` результатом политики.

Зарегистрируйте выбранное время ожидания и причины, когда оно отличается от базового времени ожидания, например:

```text
[sse] stream readiness timeout=90000ms base=30000ms reason=codex,gpt-5.5,large_input,tool_heavy
```

## Поведение при сбое

Если полезное содержимое потока не появляется до адаптивного времени ожидания, OmniRoute должен продолжать использовать существующий путь сбоя и вернуть `STREAM_READINESS_TIMEOUT`. Это изменение изменяет только бюджет, а не семантику резервного копирования/ошибок.

## Тестирование

Добавьте модульные тесты для вспомогательного инструмента политики:

- Маленький запрос сохраняет базовое время ожидания.
- Большой массив сообщений увеличивает время ожидания.
- Запрос с большим количеством инструментов увеличивает время ожидания.
- Большой запрос Codex GPT-5.5 получает больше времени ожидания.
- Время ожидания ограничено максимумом.
- Нулевое/отключенное базовое время ожидания остается нулевым, чтобы проверки готовности все еще можно было отключить с помощью конфигурации.

Добавьте или обновите тест уровня обработчика только в случае необходимости после покрытия модульными тестами.

## Критерии принятия

- Большие сессии продолжения Codex получают адаптивное время ожидания готовности более 30 секунд.
- Маленькие запросы по-прежнему используют 30 секунд по умолчанию.
- Максимальное адаптивное время ожидания не может превышать 120 секунд, если только это не изменено явно в коде позже.
- Модульные тесты покрывают политику и проходят.
- Существующие предварительные проверки перед коммитом проходят.
