#!/bin/bash
# TicketScan Weekly — Friday Analysis Session
# Email + Analytics + Growth & Retention deep dives
# Scheduled via launchd Fridays 7 AM ET

set -e

PROJECT_DIR="/Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan"
PROMPTS_DIR="$PROJECT_DIR/marketing-agents/prompts"
LOG_DIR="$PROJECT_DIR/marketing-agents/logs"
CODEX_BIN="/opt/homebrew/bin/codex"
MODEL="gpt-5.6-luna"          # pinned for cost-predictable unattended runs
SANDBOX="danger-full-access"  # needs network egress + reads outside the workspace
DATE=$(date +%Y-%m-%d)
LOG_FILE="$LOG_DIR/weekly-fri-$DATE.log"

# Bill to the metered OpenAI API (NOT a ChatGPT plan).
# Codex authenticates ONLY from ~/.codex/auth.json - it ignores OPENAI_API_KEY in the
# environment (verified 2026-07-31: env var set + auth.json absent => 401 Unauthorized).
# So this guard asserts the LOGIN MODE, not the presence of a variable.
# NOTE: `codex login status` writes to stderr, hence 2>&1 before the pipe.
SECRETS_FILE="$HOME/.config/ticketscan/marketing.env"

if ! "$CODEX_BIN" login status 2>&1 | grep -q 'using an API key'; then
    echo "WARN: Codex not in API-key mode. Attempting to re-provision from $SECRETS_FILE." >&2
    if [ -f "$SECRETS_FILE" ]; then
        # shellcheck disable=SC1090
        set -a; source "$SECRETS_FILE"; set +a
    fi
    if [ -z "${OPENAI_API_KEY:-}" ]; then
        echo "FATAL: Codex is not in API-key mode and no OPENAI_API_KEY found in $SECRETS_FILE." >&2
        echo "Aborting to avoid billing a ChatGPT plan instead of metered API credit." >&2
        exit 1
    fi
    printf '%s' "$OPENAI_API_KEY" | "$CODEX_BIN" login --with-api-key >/dev/null 2>&1
    if ! "$CODEX_BIN" login status 2>&1 | grep -q 'using an API key'; then
        echo "FATAL: re-provisioning failed; Codex still not in API-key mode. Aborting." >&2
        exit 1
    fi
    echo "Codex login re-provisioned in API-key mode." >&2
fi

mkdir -p "$LOG_DIR"
cd "$PROJECT_DIR"

echo "===========================================" | tee "$LOG_FILE"
echo "TicketScan Weekly Analysis — Friday" | tee -a "$LOG_FILE"
echo "Started: $(date)" | tee -a "$LOG_FILE"
echo "===========================================" | tee -a "$LOG_FILE"

SHARED_CONTEXT="Working directory: $PROJECT_DIR
Today's date: $DATE
Output files should be written to: $PROJECT_DIR/marketing-agents/output/
"

FAILED_AGENTS=0
FAILED_NAMES=()

run_agent() {
    local name="$1"
    local prompt_file="$2"
    echo "" | tee -a "$LOG_FILE"
    echo ">>> $name — $(date +%H:%M:%S)" | tee -a "$LOG_FILE"
    echo "-------------------------------------------" | tee -a "$LOG_FILE"

    if [ ! -f "$prompt_file" ]; then
        echo "ERROR: Prompt file not found: $prompt_file" | tee -a "$LOG_FILE"
        FAILED_AGENTS=$((FAILED_AGENTS + 1))
        FAILED_NAMES+=("$name (missing prompt)")
        return 0
    fi

    local full_prompt="$SHARED_CONTEXT
$(cat "$prompt_file")"

    # `tee` used to mask the agent's exit code, so dead runs reported success.
    # ${PIPESTATUS[0]} reads codex's status, not tee's. Keep it on ONE line: a bare
    # `local rc` is itself a command and would overwrite PIPESTATUS before it is read.
    # `< /dev/null` is required - codex exec otherwise blocks reading stdin, and under
    # launchd (no tty) the job would hang instead of failing.
    set +e
    "$CODEX_BIN" exec --sandbox "$SANDBOX" --model "$MODEL" "$full_prompt" < /dev/null 2>&1 | tee -a "$LOG_FILE"
    local rc=${PIPESTATUS[0]}
    set -e

    if [ "$rc" -ne 0 ]; then
        echo "AGENT FAILED: $name (exit $rc)" | tee -a "$LOG_FILE"
        FAILED_AGENTS=$((FAILED_AGENTS + 1))
        FAILED_NAMES+=("$name (exit $rc)")
    fi
    return 0
}

run_agent "Email Marketing — Weekly"           "$PROMPTS_DIR/05-email-marketing-weekly.md"
run_agent "Analytics & Intelligence — Weekly"  "$PROMPTS_DIR/07-analytics-intelligence-weekly.md"
run_agent "Growth & Retention — Weekly"        "$PROMPTS_DIR/08-growth-retention-weekly.md"

if [ -n "$(git status --porcelain marketing-agents/output)" ]; then
    git add marketing-agents/output
    git commit -m "Weekly analysis agent output — Friday $DATE" | tee -a "$LOG_FILE"
    git push origin main 2>&1 | tee -a "$LOG_FILE" || echo "Push failed" | tee -a "$LOG_FILE"
fi

# Greppable failure signal. A dead key now surfaces on day one instead of day thirty.
echo "" | tee -a "$LOG_FILE"
echo "AGENT FAILURES: $FAILED_AGENTS" | tee -a "$LOG_FILE"
if [ "$FAILED_AGENTS" -ne 0 ]; then
    for n in "${FAILED_NAMES[@]}"; do
        echo "  - $n" | tee -a "$LOG_FILE"
    done
fi

echo "Finished: $(date)" | tee -a "$LOG_FILE"
