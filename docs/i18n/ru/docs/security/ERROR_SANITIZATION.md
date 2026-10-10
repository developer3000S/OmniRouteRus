# ERROR_SANITIZATION (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../security/ERROR_SANITIZATION.md) · 🇸🇦 [ar](../../../ar/docs/security/ERROR_SANITIZATION.md) · 🇦🇿 [az](../../../az/docs/security/ERROR_SANITIZATION.md) · 🇧🇬 [bg](../../../bg/docs/security/ERROR_SANITIZATION.md) · 🇧🇩 [bn](../../../bn/docs/security/ERROR_SANITIZATION.md) · 🇨🇿 [cs](../../../cs/docs/security/ERROR_SANITIZATION.md) · 🇩🇰 [da](../../../da/docs/security/ERROR_SANITIZATION.md) · 🇩🇪 [de](../../../de/docs/security/ERROR_SANITIZATION.md) · 🇪🇸 [es](../../../es/docs/security/ERROR_SANITIZATION.md) · 🇮🇷 [fa](../../../fa/docs/security/ERROR_SANITIZATION.md) · 🇫🇮 [fi](../../../fi/docs/security/ERROR_SANITIZATION.md) · 🇫🇷 [fr](../../../fr/docs/security/ERROR_SANITIZATION.md) · 🇮🇳 [gu](../../../gu/docs/security/ERROR_SANITIZATION.md) · 🇮🇱 [he](../../../he/docs/security/ERROR_SANITIZATION.md) · 🇮🇳 [hi](../../../hi/docs/security/ERROR_SANITIZATION.md) · 🇭🇺 [hu](../../../hu/docs/security/ERROR_SANITIZATION.md) · 🇮🇩 [id](../../../id/docs/security/ERROR_SANITIZATION.md) · 🇮🇩 [in](../../../in/docs/security/ERROR_SANITIZATION.md) · 🇮🇹 [it](../../../it/docs/security/ERROR_SANITIZATION.md) · 🇯🇵 [ja](../../../ja/docs/security/ERROR_SANITIZATION.md) · 🇰🇷 [ko](../../../ko/docs/security/ERROR_SANITIZATION.md) · 🇮🇳 [mr](../../../mr/docs/security/ERROR_SANITIZATION.md) · 🇲🇾 [ms](../../../ms/docs/security/ERROR_SANITIZATION.md) · 🇳🇱 [nl](../../../nl/docs/security/ERROR_SANITIZATION.md) · 🇳🇴 [no](../../../no/docs/security/ERROR_SANITIZATION.md) · 🇵🇭 [phi](../../../phi/docs/security/ERROR_SANITIZATION.md) · 🇵🇱 [pl](../../../pl/docs/security/ERROR_SANITIZATION.md) · 🇵🇹 [pt](../../../pt/docs/security/ERROR_SANITIZATION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/ERROR_SANITIZATION.md) · 🇷🇴 [ro](../../../ro/docs/security/ERROR_SANITIZATION.md) · 🇸🇰 [sk](../../../sk/docs/security/ERROR_SANITIZATION.md) · 🇸🇪 [sv](../../../sv/docs/security/ERROR_SANITIZATION.md) · 🇰🇪 [sw](../../../sw/docs/security/ERROR_SANITIZATION.md) · 🇮🇳 [ta](../../../ta/docs/security/ERROR_SANITIZATION.md) · 🇮🇳 [te](../../../te/docs/security/ERROR_SANITIZATION.md) · 🇹🇭 [th](../../../th/docs/security/ERROR_SANITIZATION.md) · 🇹🇷 [tr](../../../tr/docs/security/ERROR_SANITIZATION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/ERROR_SANITIZATION.md) · 🇵🇰 [ur](../../../ur/docs/security/ERROR_SANITIZATION.md) · 🇻🇳 [vi](../../../vi/docs/security/ERROR_SANITIZATION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/ERROR_SANITIZATION.md)

---

---
title: "Санитизация сообщений об ошибках"
version: 3.8.2
lastUpdated: 2026-05-14
---

# Санитизация сообщений об ошибках

> **Источник правды:** `open-sse/utils/error.ts` — `sanitizeErrorMessage`, `buildErrorBody`, `createErrorResult`
> **Тесты:** `tests/unit/error-message-sanitization.test.ts`
> **Последнее обновление:** 2026-05-14 — v3.8.0
> **Аудитория:** Любой инженер, работающий с ответами об ошибках (HTTP-маршруты, SSE-потоки, исполнители, обработчики MCP).
> **Статус:** **ОБЯЗАТЕЛЕН** для каждого кода, который возвращает сообщение об ошибке клиенту.

## Зачем это существует

Правило CodeQL `js/stack-trace-exposure` (CWE-209) помечает любой код, где сообщение об ошибке, происходящее из исключения времени выполнения, достигает HTTP / SSE-ответа без санитизации. Трассировки стека и абсолютные пути файлов в производственных ответах дают атакующим:

- Внутреннюю структуру каталогов (`/srv/app/src/lib/...`) → разведку для дальнейших атак.
- Версии библиотек / фреймворков, выводимые из кадров стека → выбор целевых эксплойтов.
- Чувствительные значения времени выполнения, которые могут быть интерполированы в ошибки (запросы к БД, значения конфигурации).

Помощник `sanitizeErrorMessage` в `open-sse/utils/error.ts` удаляет оба класса утечки:

1. Многострочные трассировки стека — сохраняется только первая строка (само сообщение об ошибке).
2. Абсолютные пути (`/...*.{ts,js,tsx,jsx,mjs,cjs}[:line[:col]]` и `C:\...`) — заменяются на `<path>`.

## Обязательный шаблон

### 1. Создание ответа об ошибке (HTTP / API-маршруты)

Используйте `buildErrorBody()` — санитизация встроена:

```ts
import { buildErrorBody } from "@omniroute/open-sse/utils/error.ts";

export async function POST(req: Request) {
  try {
    // ... логика обработчика ...
  } catch (err) {
    return new Response(JSON.stringify(buildErrorBody(500, String(err))), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
```

Или для удобных обёрток в том же модуле:

```ts
import {
  errorResponse, // одноразовый объект Response
  writeStreamError, // писатель SSE
  createErrorResult, // форма { success: false, status, response, ... }
  unavailableResponse, // добавляет Retry-After
  providerCircuitOpenResponse,
  modelCooldownResponse,
} from "@omniroute/open-sse/utils/error.ts";
```

Все они проходят через `buildErrorBody` и, следовательно, через `sanitizeErrorMessage`. **Вам никогда не нужно вызывать `sanitizeErrorMessage` вручную**, когда вы используете эти помощники.

### 2. Пользовательские обёртки ошибок (редко)

Когда вы не можете использовать вышеуказанные помощники (например, форма ответа определяется вышестоящим протоколом, таким как Connect-RPC), импортируйте `sanitizeErrorMessage` напрямую:

```ts
import { sanitizeErrorMessage } from "@omniroute/open-sse/utils/error.ts";

const body = JSON.stringify({
  error: {
    message: sanitizeErrorMessage(rawMessage),
    type: "invalid_request_error",
    code: "",
  },
});
```

Это единственный санкционированный способ собрать пользовательское тело ошибки. См. `open-sse/executors/cursor.ts::buildErrorResponse` для реализации ссылки.

### 3. Логирование против ответа

`sanitizeErrorMessage` должен **только** оборачивать значение, которое пересекает сетевую границу. Внутренние логи (`pino`, `console`) должны сохранять полное сообщение, включая стек, чтобы операторы могли отлаживать. Шаблон:

```ts
try {
  // ...
} catch (err) {
  log.error({ err }, "handler failed"); // полный err с трассировкой стека — внутренний лог
  return errorResponse(500, getErrorMessage(err)); // санитизирован — отправляется клиенту
}
```

### 4. Запрещённые шаблоны

❌ **Никогда** не помещайте сырые данные исключения в тело Response:

```ts
// ПЛОХО: трассировка стека и пути файлов достигают клиента
return new Response(JSON.stringify({ error: { message: err.stack || err.message } }), {
  status: 500,
});
```

❌ **Никогда** не создавайте собственный разделитель первой строки:

```ts
// ПЛОХО: забывает удалять абсолютные пути, может отклоняться от канонического помощника
const safe = String(err).split("\n")[0];
```

❌ **Никогда** не санитизируйте в маршруте и забывайте путь SSE. Все, что пишет в поток, проходит через `writeStreamError` (или его базовый `buildErrorBody`).

❌ **Никогда** не включайте `process.cwd()`, `__filename`, `__dirname`, пути, полученные из env, в сообщения об ошибках — они обходят регулярное выражение пути и раскрывают топологию развёртывания.

## Покрытие в CI

`tests/unit/error-message-sanitization.test.ts` обеспечивает:

- Каждый маршрут под `/api/model-combo-mappings/*` возвращает очищенные тела на 4xx/5xx.
- `sanitizeErrorMessage` удаляет многострочные трассировки стека.
- `sanitizeErrorMessage` заменяет абсолютные пути POSIX и Windows на `<path>`.
- `sanitizeErrorMessage` корректно обрабатывает входные данные `null`/`undefined`/`Error` instance.
- `buildErrorBody` никогда не раскрывает трассировки стека в поле `message`.

При добавлении нового маршрута или исполнителя скопируйте шаблон утверждения из этого файла. Шлюз покрытия (`npm run test:coverage`) обеспечивает ≥75% операторов/строк/функций и ≥70% ветвей — пути ошибок должны быть покрыты.

## Связанные элементы управления

- `js/stack-trace-exposure` предупреждения CodeQL в `.github/security` всегда должны быть **либо** исправлены с помощью этих помощников **либо** отклонены с комментарием, ссылающимся на этот документ.
- Конфигурация редактирования `pino` (`src/lib/log/redaction.ts` — если присутствует) обрабатывает редактирование структурированных журналов отдельно. Этот документ охватывает только поверхность сообщения ответа.
- Черный список заголовков (`src/shared/constants/upstreamHeaders.ts`) охватывает утечку заголовков — поддерживайте оба файла в согласованном состоянии при добавлении новой проблемы с утечкой.

## Детали передачи вверх

`buildErrorBody` принимает необязательный третий аргумент `upstreamDetails` (сырое разобранное тело от поставщика). При наличии он очищается с помощью `sanitizeUpstreamDetails` перед включением в ответ как `upstream_details`.

Правила очистки, применяемые к `upstreamDetails`:

1. Листья строк: проходят через `sanitizeErrorMessage` (удаляют стеки + абсолютные пути).
2. Блокировка ключей: ключи, соответствующие `/stack|trace|path|file|cwd|dir|password|secret|token|key/i`, удаляются.
3. Ограничение глубины: вложенность более 4 уровней заменяется строкой `"[truncated]"`.
4. Массивы ограничены 32 элементами.

Только семь вызовов `createErrorResult` в `chatCore.ts` передают `upstreamErrorBody`. Внутренние ошибки OmniRoute (ошибки разбора SSE, пустое содержимое, блокировка) не включают `upstream_details`.

НЕ передавайте сырые `err.stack`, `err.message` или любую строку из исключения времени выполнения в `upstreamDetails`. Эти данные должны по-прежнему проходить через `errorResponse` / `buildErrorBody(code, msg)` без тела от поставщика.

## Известное ограничение CodeQL: пользовательские очистители не распознаются

Запрос CodeQL [`js/stack-trace-exposure`](https://codeql.github.com/codeql-query-help/javascript/js-stack-trace-exposure/) использует фиксированный список разрешенных шаблонов очистителей (например, встроенный `.split("\n")[0]`, `String#replace` с конкретными формами регулярных выражений, доступ к `.message` на `Error`). Он **не** распознает перенаправление через пользовательский помощник, такой как наш `sanitizeErrorMessage()`.

Это означает, что вызовы, которые демонстративно очищают через этот модуль — например, `open-sse/utils/error.ts::errorResponse` и `open-sse/executors/cursor.ts::buildErrorResponse` — могут продолжать вызывать предупреждение, даже если код функционально безопасен. Прецедент отклонений: `#224`, `#231` (май 2026), оба отмечены `false positive` с техническим обоснованием.

**Как обрабатывать новое появление:**

1. Убедитесь, что вызов действительно перенаправляет сообщение через `sanitizeErrorMessage` / `buildErrorBody` / один из оберток, документированных выше (прочитайте цепочку вызовов до конца — не доверяйте комментарию).
2. Убедитесь, что `tests/unit/error-message-sanitization.test.ts` проверяет путь (или добавьте покрытие).
3. Отклоните предупреждение через `gh api ... -X PATCH state=dismissed -f 'dismissed_reason=false positive'`, сославшись на этот документ.
4. Не "исправляйте" путем встраивания `.split("\n")[0]` везде — помощник является единственным источником истины; дублирование шаблона ослабляет очиститель (теряет очистку путей, ограничение длины, приведение типов) для внешнего вида удовлетворения сканера.

Принятие опциональных функций, таких как [`@codeql/javascript-models` пользовательская конфигурация очистителя](https://codeql.github.com/docs/codeql-language-guides/customizing-library-models-for-javascript/), является долгосрочным исправлением; это живет вне этого документа.

## Ссылки

- [CWE-209: Exposure of Information Through an Error Message](https://cwe.mitre.org/data/definitions/209.html)
- [CodeQL `js/stack-trace-exposure`](https://codeql.github.com/codeql-query-help/javascript/js-stack-trace-exposure/)
- [OWASP: Error Handling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Error_Handling_Cheat_Sheet.html)
- Коммит, объединяющий вспомогательную функцию: `1a39c31f` — _fix(security): маскирование публичных учетных данных + централизация санитизации ошибок_
