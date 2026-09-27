# COMPRESSION_LANGUAGE_PACKS (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../compression/COMPRESSION_LANGUAGE_PACKS.md) · 🇸🇦 [ar](../../../ar/docs/compression/COMPRESSION_LANGUAGE_PACKS.md) · 🇦🇿 [az](../../../az/docs/compression/COMPRESSION_LANGUAGE_PACKS.md) · 🇧🇬 [bg](../../../bg/docs/compression/COMPRESSION_LANGUAGE_PACKS.md) · 🇧🇩 [bn](../../../bn/docs/compression/COMPRESSION_LANGUAGE_PACKS.md) · 🇨🇿 [cs](../../../cs/docs/compression/COMPRESSION_LANGUAGE_PACKS.md) · 🇩🇰 [da](../../../da/docs/compression/COMPRESSION_LANGUAGE_PACKS.md) · 🇩🇪 [de](../../../de/docs/compression/COMPRESSION_LANGUAGE_PACKS.md) · 🇪🇸 [es](../../../es/docs/compression/COMPRESSION_LANGUAGE_PACKS.md) · 🇮🇷 [fa](../../../fa/docs/compression/COMPRESSION_LANGUAGE_PACKS.md) · 🇫🇮 [fi](../../../fi/docs/compression/COMPRESSION_LANGUAGE_PACKS.md) · 🇫🇷 [fr](../../../fr/docs/compression/COMPRESSION_LANGUAGE_PACKS.md) · 🇮🇳 [gu](../../../gu/docs/compression/COMPRESSION_LANGUAGE_PACKS.md) · 🇮🇱 [he](../../../he/docs/compression/COMPRESSION_LANGUAGE_PACKS.md) · 🇮🇳 [hi](../../../hi/docs/compression/COMPRESSION_LANGUAGE_PACKS.md) · 🇭🇺 [hu](../../../hu/docs/compression/COMPRESSION_LANGUAGE_PACKS.md) · 🇮🇩 [id](../../../id/docs/compression/COMPRESSION_LANGUAGE_PACKS.md) · 🇮🇩 [in](../../../in/docs/compression/COMPRESSION_LANGUAGE_PACKS.md) · 🇮🇹 [it](../../../it/docs/compression/COMPRESSION_LANGUAGE_PACKS.md) · 🇯🇵 [ja](../../../ja/docs/compression/COMPRESSION_LANGUAGE_PACKS.md) · 🇰🇷 [ko](../../../ko/docs/compression/COMPRESSION_LANGUAGE_PACKS.md) · 🇮🇳 [mr](../../../mr/docs/compression/COMPRESSION_LANGUAGE_PACKS.md) · 🇲🇾 [ms](../../../ms/docs/compression/COMPRESSION_LANGUAGE_PACKS.md) · 🇳🇱 [nl](../../../nl/docs/compression/COMPRESSION_LANGUAGE_PACKS.md) · 🇳🇴 [no](../../../no/docs/compression/COMPRESSION_LANGUAGE_PACKS.md) · 🇵🇭 [phi](../../../phi/docs/compression/COMPRESSION_LANGUAGE_PACKS.md) · 🇵🇱 [pl](../../../pl/docs/compression/COMPRESSION_LANGUAGE_PACKS.md) · 🇵🇹 [pt](../../../pt/docs/compression/COMPRESSION_LANGUAGE_PACKS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/compression/COMPRESSION_LANGUAGE_PACKS.md) · 🇷🇴 [ro](../../../ro/docs/compression/COMPRESSION_LANGUAGE_PACKS.md) · 🇸🇰 [sk](../../../sk/docs/compression/COMPRESSION_LANGUAGE_PACKS.md) · 🇸🇪 [sv](../../../sv/docs/compression/COMPRESSION_LANGUAGE_PACKS.md) · 🇰🇪 [sw](../../../sw/docs/compression/COMPRESSION_LANGUAGE_PACKS.md) · 🇮🇳 [ta](../../../ta/docs/compression/COMPRESSION_LANGUAGE_PACKS.md) · 🇮🇳 [te](../../../te/docs/compression/COMPRESSION_LANGUAGE_PACKS.md) · 🇹🇭 [th](../../../th/docs/compression/COMPRESSION_LANGUAGE_PACKS.md) · 🇹🇷 [tr](../../../tr/docs/compression/COMPRESSION_LANGUAGE_PACKS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/compression/COMPRESSION_LANGUAGE_PACKS.md) · 🇵🇰 [ur](../../../ur/docs/compression/COMPRESSION_LANGUAGE_PACKS.md) · 🇻🇳 [vi](../../../vi/docs/compression/COMPRESSION_LANGUAGE_PACKS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/compression/COMPRESSION_LANGUAGE_PACKS.md)

---

---
title: "Пакеты языков сжатия"
version: 3.8.2
lastUpdated: 2026-05-13
---

# Пакеты языков сжатия

Caveman compression может загружать пакеты правил, специфичные для языка, в дополнение к встроенным правилам на английском языке.
Это позволяет поддерживать стабильность основного движка, в то время как пакеты на португальском, испанском, немецком, французском, японском и будущих языках могут развиваться независимо.

## Расположение

Пакеты языков находятся в:

```txt
open-sse/services/compression/rules/<language>/
```

Текущие поставляемые пакеты (проверено по содержимому директории `rules/`):

| Язык               | Директория      | Категории правил, присутствующие                          |
| ------------------- | -------------- | --------------------------------------------------- |
| Английский          | `rules/en/`    | `context`, `dedup`, `filler`, `structural`, `ultra` |
| Испанский           | `rules/es/`    | `context`, `dedup`, `filler`, `structural`, `ultra` |
| Португальский (Бразилия) | `rules/pt-BR/` | `context`, `filler`, `structural`                   |
| Немецкий            | `rules/de/`    | `context`, `filler`, `structural`                   |
| Французский         | `rules/fr/`    | `context`, `filler`, `structural`                   |
| Японский            | `rules/ja/`    | `context`, `filler`, `structural`                   |

> **Примечание о совместимости:** пакеты `en` и `es` имеют все 5 категорий; `pt-BR`, `de`, `fr`, `ja` поставляются с 3 категориями. Отсутствующие категории `dedup` и `ultra` тихо переходят на встроенные правила на английском. Приветствуются вклад в добавление `dedup.json` и `ultra.json` для более мелких пакетов.
>
> Канонический список категорий и схема для каждой категории находятся в [`open-sse/services/compression/rules/_schema.json`](../../open-sse/services/compression/rules/_schema.json) (JSON Schema draft 2020-12).

## Определение языка

`languageDetector.ts` использует легковесные эвристики для вывода языка из текста запроса. Настроенный язык по умолчанию все еще уважается, и определение можно отключить через конфигурацию, когда требуется точный контроль.

Вывод определения используется только для выбора пакетов правил. Он не влияет на маршрутизацию провайдеров, выбор локали или язык интерфейса.

## Форма конфигурации

Настройки сжатия могут включать:

```json
{
  "languageConfig": {
    "enabled": true,
    "defaultLanguage": "en",
    "autoDetect": true,
    "enabledPacks": ["en", "pt-BR", "es", "de", "fr", "ja"]
  },
  "cavemanConfig": {
    "language": "en",
    "autoDetectLanguage": true,
    "enabledLanguagePacks": ["en", "pt-BR", "es", "de", "fr", "ja"]
  }
}
```

`languageConfig` управляет настройками по умолчанию для панели управления и предварительного просмотра. `cavemanConfig` — это конфигурация движка времени выполнения, используемая при сжатии текста сообщений Caveman.

## Добавление пакета языка

1. Создайте `open-sse/services/compression/rules/<language>/<pack>.json`.
2. Используйте формат правил Caveman из `docs/compression/COMPRESSION_RULES_FORMAT.md`.
3. Держите замены умеренными и избегайте изменения кода, идентификаторов, URL-адресов или JSON.
4. Добавьте или обновите тесты для выбора языка и поведения замены.
5. Покажите новые метки панели управления/i18n, если язык появляется в селекторах интерфейса.

## API

Доступные пакеты можно запросить с помощью:

```bash
curl http://localhost:20128/api/compression/language-packs
```

Конечная точка предварительного просмотра принимает переопределения конфигурации языка:

```bash
curl -X POST http://localhost:20128/api/compression/preview \
  -H "Content-Type: application/json" \
  -d '{
    "mode": "standard",
    "text": "Por favor, eu gostaria que voce basicamente resumisse isso.",
    "config": {
      "languageConfig": {
        "defaultLanguage": "pt-BR",
        "autoDetect": true
      }
    }
  }'
```

## SHARED_BOUNDARIES (v3.8.0)

Все 6 пакетов языков получили предложение `SHARED_BOUNDARIES` в v3.8.0, которое применяется на каждом уровне интенсивности Caveman (LITE, FULL, ULTRA). Оно инструктирует движок сохранять эти шаблоны дословно, независимо от удаления окружающего заполнителя:

| Тип шаблона                     | Пример                                |
| -------------------------------- | -------------------------------------- |
| Блоки кода с ограждениями        | ` ```python\n...\n``` `                |
| Встроенный код                   | `` `my_var` ``                         |
| URL-адреса                       | `https://example.com/path`             |
| Пути к файлам (абсолютные + относительные) | `/etc/hosts`, `./src/index.ts`         |
| Заголовки ошибок                 | `Error:`, `TypeError:`, `SyntaxError:` |
| Строки трассировки стека         | `  at functionName (file.ts:12:3)`     |

Эти шаблоны заполняются в `DEFAULT_CAVEMAN_CONFIG.preservePatterns` (ранее `[]`). Константа находится в `open-sse/services/compression/types.ts`.

### Почему это важно

Без SHARED_BOUNDARIES агрессивные режимы Caveman могли бы удалять контент, который выглядел как повторяющаяся проза, но на самом деле был фрагментом кода, путем к файлу или трассировкой ошибки. SHARED_BOUNDARIES действует как языково-независимая защита, применяемая перед запуском правил заполнителя.

### Настройка preservePatterns

Дополнительные шаблоны можно добавить во время выполнения через настройки сжатия:

````json
{
  "cavemanConfig": {
    "preservePatterns": [
      "```[\\s\\S]*?```",
      "`[^`]+`",
      "https?://\\S+",
      "(?:/|\\./)[^\\s]+",
      "\\b(?:Error|TypeError|SyntaxError|RangeError):",
      "\\s+at\\s+\\S+\\s+\\(\\S+:\\d+:\\d+\\)"
    ]
  }
}
````

Пользовательские шаблоны расширяют (а не заменяют) 6 шаблонов по умолчанию.

---

## Операционные примечания

- Встроенные правила на английском языке остаются резервным вариантом, когда пакет языка отсутствует.
- Недопустимые встроенные JSON-пакеты не проходят валидацию, чтобы активы выпуска не ухудшались бесшумно.
- Пакеты правил являются только данными и не должны импортировать код или выполнять произвольную логику.
- Слой аналитики сжатия записывает выбранный режим и движок, а не полный текст запроса.
