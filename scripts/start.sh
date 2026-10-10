#!/usr/bin/env bash
#
# start.sh — clean rebuild and start of OmniRoute in Docker.
#
# Usage:
#   ./start.sh                    # profile "base" (default)
#   ./start.sh cli                # profile "cli"
#   ./start.sh "cli cliproxyapi"  # multiple profiles
#   PROFILE=host ./start.sh
#   COMPOSE_FILE=docker-compose.prod.yml ./start.sh
#
# Steps:
#   1. Stop containers and delete old images
#   2. Check ports; free them if busy
#   3. Build images WITHOUT cache
#   4. Start containers and wait for health
#
# Data volumes are preserved — only images and containers are removed.

set -Eeuo pipefail

# ── Config ────────────────────────────────────────────────────────────────
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

COMPOSE_FILE="${COMPOSE_FILE:-docker-compose.yml}"
PROFILE="${1:-${PROFILE:-base}}"
ENV_FILE=".env"

if [[ ! -f "$COMPOSE_FILE" ]]; then
  echo "[!] Compose file not found: $COMPOSE_FILE" >&2
  exit 1
fi

# Split "cli cliproxyapi" → repeated --profile flags
PROFILE_FLAGS=()
for _p in $PROFILE; do
  PROFILE_FLAGS+=(--profile "$_p")
done

# ── Colors ────────────────────────────────────────────────────────────────
if [[ -t 1 ]] && [[ -z "${NO_COLOR:-}" ]]; then
  GREEN=$'\e[32m'; YELLOW=$'\e[33m'; RED=$'\e[31m'; CYAN=$'\e[36m'; BOLD=$'\e[1m'; NC=$'\e[0m'
else
  GREEN=""; YELLOW=""; RED=""; CYAN=""; BOLD=""; NC=""
fi

log()  { printf '%s→%s %s\n'        "$CYAN"   "$NC" "$*"; }
ok()   { printf '%s✓%s %s\n'        "$GREEN"  "$NC" "$*"; }
warn() { printf '%s!%s %s\n'        "$YELLOW" "$NC" "$*"; }
err()  { printf '%s✗%s %s\n'        "$RED"    "$NC" "$*" >&2; }
die()  { err "$*"; exit 1; }

# ── Helpers ───────────────────────────────────────────────────────────────
# Read a key from .env (last match wins, comments ignored, quotes stripped).
env_value() {
  local key="$1"
  grep -E "^[[:space:]]*${key}=" "$ENV_FILE" 2>/dev/null \
    | tail -n 1 | cut -d= -f2- | tr -d "\"'" | tr -d ' \r' || true
}

# True (0) if something is listening on the TCP port.
port_busy() {
  local port="$1"
  [[ "$(ss -H -ltn "sport = :${port}" 2>/dev/null | wc -l)" -gt 0 ]]
}

# Resolve the ports the deployment will publish, honouring shell env, .env,
# and compose defaults in that order.
collect_ports() {
  HOST_PORTS=()
  local p dash api redis clip

  if [[ "$COMPOSE_FILE" == *".prod.yml" ]]; then
    p="${PROD_DASHBOARD_PORT:-$(env_value PROD_DASHBOARD_PORT)}"; [[ -z "$p" ]] && p=20130
    api="${PROD_API_PORT:-$(env_value PROD_API_PORT)}";            [[ -z "$api" ]] && api=20131
    HOST_PORTS+=("$p" "$api")
    APP_CONTAINER="omniroute-prod"
  else
    p="${PORT:-$(env_value PORT)}";                       [[ -z "$p" ]]    && p=20128
    dash="${DASHBOARD_PORT:-$(env_value DASHBOARD_PORT)}"; [[ -z "$dash" ]] && dash="$p"
    api="${API_PORT:-$(env_value API_PORT)}";             [[ -z "$api" ]]   && api=20129
    redis="${REDIS_PORT:-$(env_value REDIS_PORT)}";       [[ -z "$redis" ]] && redis=6379
    HOST_PORTS+=("$dash" "$api" "$redis")
    case "$PROFILE" in *cliproxyapi*)
      clip="${CLIPROXYAPI_PORT:-$(env_value CLIPROXYAPI_PORT)}"; [[ -z "$clip" ]] && clip=8317
      HOST_PORTS+=("$clip")
    esac
    APP_CONTAINER="omniroute"
  fi
}

# Free a busy port: stop publishing containers first, then kill host PIDs.
free_port() {
  local port="$1"
  warn "Port ${port} is busy — freeing it..."

  # 1) Docker containers that publish this port
  local cids
  cids="$(docker ps -q --filter "publish=${port}" 2>/dev/null || true)"
  if [[ -n "$cids" ]]; then
    log "  Stopping container(s) publishing :${port}: $(echo "$cids" | tr '\n' ' ')"
    # shellcheck disable=SC2086
    docker stop $cids >/dev/null 2>&1 || true
    # shellcheck disable=SC2086
    docker rm -f $cids >/dev/null 2>&1 || true
    sleep 2
  fi

  # 2) Host processes still listening (last resort)
  if port_busy "$port"; then
    local pids pid name
    pids="$(ss -H -ltnp "sport = :${port}" 2>/dev/null \
              | sed -n 's/.*pid=\([0-9]\{1,\}\).*/\1/p' | sort -u || true)"
    for pid in $pids; do
      [[ "$pid" == "1" || "$pid" == "$$" || "$pid" == "$PPID" ]] && continue
      name="$(ps -p "$pid" -o comm= 2>/dev/null || echo "unknown")"
      log "  Killing PID ${pid} (${name}) holding :${port}"
      kill "$pid" 2>/dev/null || true
    done
    sleep 3
    for pid in $pids; do
      [[ "$pid" == "1" || "$pid" == "$$" || "$pid" == "$PPID" ]] && continue
      kill -9 "$pid" 2>/dev/null || true
    done
    sleep 1
  fi

  if port_busy "$port"; then
    die "Cannot free port ${port} — it is still in use. Resolve it manually and re-run."
  fi
  ok "Port ${port} is free"
}

# ── Banner ────────────────────────────────────────────────────────────────
printf '%s== OmniRoute — Docker clean rebuild ==%s\n' "$BOLD" "$NC"
log "Compose file : $COMPOSE_FILE"
log "Profile      : $PROFILE"
log "Env file     : $ENV_FILE"
echo

collect_ports
log "Ports in use : ${HOST_PORTS[*]}"
echo

# ── 1. Stop containers + delete old images ────────────────────────────────
printf '%s[1/4] Removing old containers and images...%s\n' "$BOLD" "$NC"

# Stops profile services + default services (redis) and removes locally-built
# images. Volumes (./data, named volumes) are preserved.
docker compose -f "$COMPOSE_FILE" "${PROFILE_FLAGS[@]}" \
  down --remove-orphans --rmi local >/dev/null 2>&1 || true

# Second sweep without a profile: removes profile-gated leftovers from other
# profiles as "orphans".
docker compose -f "$COMPOSE_FILE" down --remove-orphans >/dev/null 2>&1 || true

# Explicitly drop tagged app images (covers cross-profile leftovers).
for img in omniroute:base omniroute:cli omniroute:prod; do
  if docker image inspect "$img" >/dev/null 2>&1; then
    log "Removing image $img"
    docker image rm -f "$img" >/dev/null 2>&1 || true
  fi
done

# Drop dangling layers from previous builds.
docker image prune -f >/dev/null 2>&1 || true

ok "Old containers and images removed"
echo

# ── 2. Check and free ports ───────────────────────────────────────────────
printf '%s[2/4] Checking ports...%s\n' "$BOLD" "$NC"
sleep 2
for port in "${HOST_PORTS[@]}"; do
  if port_busy "$port"; then
    free_port "$port"
  else
    ok "Port ${port} is free"
  fi
done
echo

# ── 3. Build without cache ────────────────────────────────────────────────
printf '%s[3/4] Building images (no cache)...%s\n' "$BOLD" "$NC"
log "This may take several minutes — base images are pulled fresh."

docker compose -f "$COMPOSE_FILE" "${PROFILE_FLAGS[@]}" build --no-cache --pull \
  || die "Build failed. See output above."

ok "Images built without cache"
echo

# ── 4. Start and wait for health ──────────────────────────────────────────
printf '%s[4/4] Starting containers...%s\n' "$BOLD" "$NC"
docker compose -f "$COMPOSE_FILE" "${PROFILE_FLAGS[@]}" up -d \
  || die "Failed to start containers."

# Wait for the app container healthcheck (up to ~2.5 min).
if docker inspect "$APP_CONTAINER" >/dev/null 2>&1; then
  log "Waiting for ${APP_CONTAINER} health (timeout 150s)..."
  declare -i waited=0 max=150
  while (( waited < max )); do
    status="$(docker inspect --format '{{.State.Health.Status}}' "$APP_CONTAINER" 2>/dev/null || echo "none")"
    case "$status" in
      healthy)   ok "${APP_CONTAINER} is healthy"; break ;;
      unhealthy) warn "${APP_CONTAINER} reports UNHEALTHY — inspect logs:"; break ;;
    esac
    sleep 5; waited+=5
    if (( waited % 15 == 0 )); then log "  still ${status:-starting}... (${waited}s)"; fi
  done
  (( waited >= max )) && warn "Health check timed out — container may still be starting."
fi
echo

# ── Status ────────────────────────────────────────────────────────────────
printf '%s== Status ==%s\n' "$BOLD" "$NC"
docker compose -f "$COMPOSE_FILE" "${PROFILE_FLAGS[@]}" ps || true
echo

if [[ "$COMPOSE_FILE" == *".prod.yml" ]]; then
  printf 'Dashboard: %shttp://localhost:%s%s\n' "$GREEN" "${HOST_PORTS[0]}" "$NC"
  printf 'API:       %shttp://localhost:%s%s\n'   "$GREEN" "${HOST_PORTS[1]}" "$NC"
else
  printf 'Dashboard: %shttp://localhost:%s%s\n' "$GREEN" "${HOST_PORTS[0]}" "$NC"
  printf 'API:       %shttp://localhost:%s%s\n' "$GREEN" "${HOST_PORTS[1]}" "$NC"
  printf 'Redis:     %slocalhost:%s%s\n'        "$GREEN" "${HOST_PORTS[2]}" "$NC"
fi
echo
log "Logs: docker compose -f $COMPOSE_FILE logs -f"
ok "Done."
