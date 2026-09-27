# SQLITE_RUNTIME (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/SQLITE_RUNTIME.md) · 🇸🇦 [ar](../../../ar/docs/ops/SQLITE_RUNTIME.md) · 🇦🇿 [az](../../../az/docs/ops/SQLITE_RUNTIME.md) · 🇧🇬 [bg](../../../bg/docs/ops/SQLITE_RUNTIME.md) · 🇧🇩 [bn](../../../bn/docs/ops/SQLITE_RUNTIME.md) · 🇨🇿 [cs](../../../cs/docs/ops/SQLITE_RUNTIME.md) · 🇩🇰 [da](../../../da/docs/ops/SQLITE_RUNTIME.md) · 🇩🇪 [de](../../../de/docs/ops/SQLITE_RUNTIME.md) · 🇪🇸 [es](../../../es/docs/ops/SQLITE_RUNTIME.md) · 🇮🇷 [fa](../../../fa/docs/ops/SQLITE_RUNTIME.md) · 🇫🇮 [fi](../../../fi/docs/ops/SQLITE_RUNTIME.md) · 🇫🇷 [fr](../../../fr/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [gu](../../../gu/docs/ops/SQLITE_RUNTIME.md) · 🇮🇱 [he](../../../he/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [hi](../../../hi/docs/ops/SQLITE_RUNTIME.md) · 🇭🇺 [hu](../../../hu/docs/ops/SQLITE_RUNTIME.md) · 🇮🇩 [id](../../../id/docs/ops/SQLITE_RUNTIME.md) · 🇮🇩 [in](../../../in/docs/ops/SQLITE_RUNTIME.md) · 🇮🇹 [it](../../../it/docs/ops/SQLITE_RUNTIME.md) · 🇯🇵 [ja](../../../ja/docs/ops/SQLITE_RUNTIME.md) · 🇰🇷 [ko](../../../ko/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [mr](../../../mr/docs/ops/SQLITE_RUNTIME.md) · 🇲🇾 [ms](../../../ms/docs/ops/SQLITE_RUNTIME.md) · 🇳🇱 [nl](../../../nl/docs/ops/SQLITE_RUNTIME.md) · 🇳🇴 [no](../../../no/docs/ops/SQLITE_RUNTIME.md) · 🇵🇭 [phi](../../../phi/docs/ops/SQLITE_RUNTIME.md) · 🇵🇱 [pl](../../../pl/docs/ops/SQLITE_RUNTIME.md) · 🇵🇹 [pt](../../../pt/docs/ops/SQLITE_RUNTIME.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/SQLITE_RUNTIME.md) · 🇷🇴 [ro](../../../ro/docs/ops/SQLITE_RUNTIME.md) · 🇸🇰 [sk](../../../sk/docs/ops/SQLITE_RUNTIME.md) · 🇸🇪 [sv](../../../sv/docs/ops/SQLITE_RUNTIME.md) · 🇰🇪 [sw](../../../sw/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ta](../../../ta/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [te](../../../te/docs/ops/SQLITE_RUNTIME.md) · 🇹🇭 [th](../../../th/docs/ops/SQLITE_RUNTIME.md) · 🇹🇷 [tr](../../../tr/docs/ops/SQLITE_RUNTIME.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/SQLITE_RUNTIME.md) · 🇵🇰 [ur](../../../ur/docs/ops/SQLITE_RUNTIME.md) · 🇻🇳 [vi](../../../vi/docs/ops/SQLITE_RUNTIME.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/SQLITE_RUNTIME.md)

---

---
title: "Решение SQLite во время выполнения"
---

# Решение SQLite во время выполнения

OmniRoute разрешает свой драйвер SQLite при запуске через 5-ступенчатую цепочку резервных вариантов:

1. **Встроенный `better-sqlite3`** (через `dependencies` в `package.json`)
   — самый быстрый, нативный бинарный файл, устанавливается командой `npm install`, если инструменты сборки присутствуют.

2. **Установленный во время выполнения `better-sqlite3`** (в `~/.omniroute/runtime/`)
   — устанавливается лениво при первом запуске **ИЛИ** через `scripts/build/postinstall.mjs → scripts/postinstall.mjs`.
   Проверяет магические байты нативного файла `.node` (ELF / Mach-O / PE) перед загрузкой,
   чтобы защититься от поврежденных или бинарных файлов для неподходящей платформы.

3. **`node:sqlite`** (стандартная библиотека Node ≥22.5) — не требует нативной сборки; используется, когда
   оба пути better-sqlite3 не удались. Ограниченный набор функций.

4. **`sql.js`** (WASM) — последний резервный вариант. Работает везде, но медленнее
   и записывает данные с интервалом, а не синхронно.

## Почему такая сложность?

- **Windows EBUSY**: `npm install -g omniroute@latest` может не удаться, если предыдущая
  версия `better_sqlite3.node` заблокирована запущенным процессом. Установка во время выполнения в `~/.omniroute/runtime/` обходит глобальный кэш npm.
- **Отсутствие инструментов сборки**: Некоторые среды (корпоративный Windows без VS Build
  Tools, минимальные образы Docker) не могут компилировать `better-sqlite3`. Установщик во время выполнения
  разрешает предварительно собранный бинарный файл из реестра npm; резервные драйверы
  гарантируют, что OmniRoute все равно запустится, даже если это не удастся.
- **Системы без доступа к сети**: Если реестр npm недоступен, `node:sqlite`
  или `sql.js` обеспечивают базовую функциональность.

## Проверка магических байтов

Перед загрузкой файла `.node`, установленного во время выполнения, OmniRoute читает первые 8
байтов и сравнивает с известными магическими байтами платформы:

| Платформа             | Байты (hex)    | Метка       |
| --------------------- | ------------- | ----------- |
| Linux                 | `7F 45 4C 46` | `elf`       |
| macOS 64-bit BE       | `FE ED FA CF` | `macho`     |
| macOS 64-bit LE       | `CF FA ED FE` | `macho-le`  |
| macOS fat (universal) | `CA FE BA BE` | `macho-fat` |
| Windows               | `4D 5A` (MZ)  | `pe`        |

Несоответствующий магический байт → файл игнорируется, резервный вариант продолжается на следующем шаге.

## Проверка активного драйвера

```typescript
import { getDriverInfo } from "@/lib/db/core";

const info = getDriverInfo();
// { source: "bundled" | "runtime" | "runtime-installed-now" | "node-sqlite" | "sql-js",
//   kind: "better-sqlite3" | "node-sqlite" | "sql-js" }
```

## Ручной контроль

```bash
# Пропустить пост-установку (для быстрой установки в CI)
OMNIROUTE_SKIP_POSTINSTALL=1 npm install -g omniroute

# Принудительно переустановить runtime better-sqlite3
rm -rf ~/.omniroute/runtime
omniroute  # переустановит при следующем запуске

# Проверить, какой драйвер активен
omniroute config db-info  # (если существует команда CLI)
```

## Ссылки

Реализация:

- `bin/cli/runtime/magicBytes.mjs` — вспомогательные функции проверки магических байтов бинарных файлов
- `bin/cli/runtime/sqliteRuntime.mjs` — 5-ступенчатый резолвер во время выполнения + ленивый установщик
- `bin/cli/runtime/index.mjs` — оркестратор запуска (`warmUpRuntimes()`)
- `scripts/postinstall.mjs` — хук пост-установки npm (не фатальный прогрев)
- `src/lib/db/core.ts` — экспорты `ensureDbInitialized()` / `getDriverInfo()`
