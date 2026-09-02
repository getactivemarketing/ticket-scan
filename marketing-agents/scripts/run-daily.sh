#!/bin/bash
# TicketScan Daily Marketing Team Runner
# Runs all 8 marketing agents in sequence. Scheduled via launchd at 6 AM ET daily.

set -e

# Config
# Derived from this script's own location rather than hardcoded. The absolute
# path was /Applications/XAMPP/... which stopped resolving on 2026-08-27 when
# the external volume remounted as Samir_Ext; the 6 AM run exited 127 and that
# day's agent output never ran. Deriving it means a move or rename can't break
# the schedule again.
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$(dirname "$SCRIPT_DIR")")"
PROMPTS_DIR="$PROJECT_DIR/marketing-agents/prompts"
OUTPUT_DIR="$PROJECT_DIR/marketing-agents/output"
LOG_DIR="$PROJECT_DIR/marketing-agents/logs"
CODEX_BIN="/opt/homebrew/bin/codex"
MODEL="gpt-5.6-luna"          # pinned for cost-predictable unattended runs
SANDBOX="danger-full-access"  # needs network egress + reads outside the workspace
DATE=$(date +%Y-%m-%d)
LOG_FILE="$LOG_DIR/daily-$DATE.log"
DRY_RUN="${DRY_RUN:-0}"

# Credentials live outside the repo, and must stay there. This file is tracked in
# a PUBLIC GitHub repo: the admin key was pasted straight into SHARED_CONTEXT below
# on 2026-04-13 (9f04cc4) and was world-readable until it was rotated on 2026-08-27.
# Never inline a secret here again — read it from the secrets file.
#
# Sourced unconditionally, before either consumer needs it: the Codex re-provision
# below, and ADMIN_KEY in the agent prompt.
SECRETS_FILE="$HOME/.config/ticketscan/marketing.env"
if [ -f "$SECRETS_FILE" ]; then
    # shellcheck disable=SC1090
    set -a; source "$SECRETS_FILE"; set +a
fi

# Bill to the metered OpenAI API (NOT a ChatGPT plan).
# Codex authenticates ONLY from ~/.codex/auth.json — it ignores OPENAI_API_KEY in the
# environment (verified 2026-07-31: env var set + auth.json absent => 401 Unauthorized).
# So this guard asserts the LOGIN MODE, not the presence of a variable. The key in the
# secrets file exists solely to re-provision that login unattended.
# NOTE: `codex login status` writes to stderr, hence 2>&1 before the pipe.
if ! "$CODEX_BIN" login status 2>&1 | grep -q 'using an API key'; then
    echo "WARN: Codex not in API-key mode. Attempting to re-provision from $SECRETS_FILE." >&2
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

# Every posting agent authenticates with this. Assert it up front rather than
# letting eight agents run for twenty minutes and each fail to publish at the
# end — the same class of silent failure the PIPESTATUS fix below was written for.
# Must match ADMIN_SECRET on the Railway service (index.js compares them exactly).
if [ -z "${ADMIN_KEY:-}" ]; then
    echo "FATAL: ADMIN_KEY not found in $SECRETS_FILE." >&2
    echo "Add it there, matching ADMIN_SECRET in the Railway tickethawk-api service." >&2
    exit 1
fi

# Ensure directories exist
mkdir -p "$OUTPUT_DIR"/{analytics,seo-requests,content,social,ads,email,cro,growth}
mkdir -p "$LOG_DIR"

# Start
echo "===========================================" | tee "$LOG_FILE"
echo "TicketScan Marketing Team — Daily Run" | tee -a "$LOG_FILE"
echo "Started: $(date)" | tee -a "$LOG_FILE"
echo "===========================================" | tee -a "$LOG_FILE"

cd "$PROJECT_DIR"

# Shared context prepended to each agent prompt
SHARED_CONTEXT="Working directory: $PROJECT_DIR
Today's date: $DATE

Output files should be written to: $OUTPUT_DIR
Brand voice: Helpful, data-driven, slightly irreverent consumer advocate.

Admin API endpoints (use these for posting):
- POST https://tickethawk-api-production.up.railway.app/api/admin/typefully/post
- POST https://tickethawk-api-production.up.railway.app/api/admin/typefully/daily-tip
- POST https://tickethawk-api-production.up.railway.app/api/admin/instagram/post
- POST https://tickethawk-api-production.up.railway.app/api/admin/instagram/daily-tip
- Admin key: $ADMIN_KEY

"

# Run each daily agent in sequence
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

    # `tee` used to mask the agent's exit code, so ~30 dead runs all reported success.
    # ${PIPESTATUS[0]} reads codex's status, not tee's. Keep it on ONE line: a bare
    # `local rc` is itself a command and would overwrite PIPESTATUS before it is read.
    # `< /dev/null` is required — codex exec otherwise blocks reading stdin, and under
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

# Execute agents in dependency order (Analytics first, parallel-safe groups)
run_agent "Agent 7: Analytics & Intelligence" "$PROMPTS_DIR/07-analytics-intelligence-daily.md"
run_agent "Agent 2: SEO Specialist"            "$PROMPTS_DIR/02-seo-specialist-daily.md"
run_agent "Agent 1: Content Strategist"        "$PROMPTS_DIR/01-content-strategist-daily.md"
run_agent "Agent 3: Social Media Manager"      "$PROMPTS_DIR/03-social-media-daily.md"

# Deploy generated social images to Vercel and schedule posts
echo "" | tee -a "$LOG_FILE"
echo ">>> Deploying social images + scheduling posts — $(date +%H:%M:%S)" | tee -a "$LOG_FILE"
echo "-------------------------------------------" | tee -a "$LOG_FILE"

if [ "$DRY_RUN" = "1" ]; then
    echo "[DRY_RUN] Skipping image commit, Vercel deploy, and Blotato scheduling" | tee -a "$LOG_FILE"
else
    # Commit generated images if any exist
    if [ -n "$(git status --porcelain web/public/social/generated/)" ]; then
        git add web/public/social/generated/
        git commit -m "Add generated social images — $DATE" 2>&1 | tee -a "$LOG_FILE"
    fi

    # Refresh the city x category combo index. Committed as a generated artifact
    # so the Next.js build never has to call the events API to decide which
    # pages exist. Deliberately placed before the deploy block and independent
    # of it: that block is stale (it deploys the `web` Vercel project, which no
    # longer owns the live domain) and will be reworked or removed.
    #
    # Deliberately NOT committed here. A standalone commit at this point makes
    # `git status --porcelain` clean again before the push gate further down
    # ever sees it, so the refreshed index only reached production as a side
    # effect of some other agent's output changing that day — and a day late,
    # because deploy_production (above) runs before that push. Leave the file
    # uncommitted so it flows through the COMMIT_PATHS block below instead,
    # inheriting that block's guard and push.
    ( cd "$PROJECT_DIR/web" && npm run build:combos ) 2>&1 | tee -a "$LOG_FILE"
    if [ "${PIPESTATUS[0]}" -ne 0 ]; then echo "WARNING: combo index refresh failed; previous index left intact" | tee -a "$LOG_FILE"; fi

    # Same scheduling rationale as the combo index above: refreshed daily, left
    # uncommitted here so it flows through the COMMIT_PATHS block and inherits
    # its branch guard and push.
    ( cd "$PROJECT_DIR/web" && npm run build:tn-index ) 2>&1 | tee -a "$LOG_FILE"
    if [ "${PIPESTATUS[0]}" -ne 0 ]; then echo "WARNING: TicketNetwork index refresh failed; previous index left intact" | tee -a "$LOG_FILE"; fi

    # Deploy to Vercel so image URLs are live BEFORE Blotato consumes them.
    #
    # `vercel --prod` uploads a DIRECTORY, not a git ref. Running it from the
    # shared working tree shipped whichever branch happened to be checked out:
    # on 2026-08-26 that silently reverted the live site by five commits and
    # 404'd /onsales, because the tree was sitting on a feature branch. Build
    # from an explicit ref instead so production is always a known commit.
    #
    # Generated social images are overlaid from the working tree because
    # Blotato consumes them by URL and they may not be committed to the deploy
    # ref yet. The whole accumulated directory is copied, not just today's, so
    # posts scheduled on earlier runs keep resolving.
    deploy_production() {
        local ref="${DEPLOY_REF:-origin/main}"
        local dir rc
        git fetch origin main --quiet || return 1
        git rev-parse --verify --quiet "$ref" >/dev/null || return 1
        dir=$(mktemp -d) || return 1
        git archive "$ref" | tar -x -C "$dir" || { rm -rf "$dir"; return 1; }
        # .vercel/ is gitignored, so the project link is never in the archive.
        cp -R "$PROJECT_DIR/web/.vercel" "$dir/web/.vercel" || { rm -rf "$dir"; return 1; }
        mkdir -p "$dir/web/public/social/generated"
        if [ -d "$PROJECT_DIR/web/public/social/generated" ]; then
            cp -R "$PROJECT_DIR/web/public/social/generated/." \
                  "$dir/web/public/social/generated/" || true
        fi
        echo "Deploying $ref ($(git rev-parse --short "$ref")) to production" | tee -a "$LOG_FILE"
        ( cd "$dir/web" && npx vercel --prod --yes ) 2>&1 | tee -a "$LOG_FILE"
        rc=${PIPESTATUS[0]}
        rm -rf "$dir"
        return "$rc"
    }
    deploy_production || echo "Vercel deploy failed" | tee -a "$LOG_FILE"

    # Schedule posts via Blotato
    cd "$PROJECT_DIR/marketing-agents"
    node scripts/schedule-blotato-posts.js 2>&1 | tee -a "$LOG_FILE" || echo "Blotato scheduling failed" | tee -a "$LOG_FILE"
    cd "$PROJECT_DIR"
fi

run_agent "Agent 4: Paid Ads Manager"          "$PROMPTS_DIR/04-paid-ads-daily.md"
run_agent "Agent 5: Email Marketing"           "$PROMPTS_DIR/05-email-marketing-daily.md"
run_agent "Agent 6: CRO Specialist"            "$PROMPTS_DIR/06-cro-specialist-daily.md"
run_agent "Agent 8: Growth & Retention"        "$PROMPTS_DIR/08-growth-retention-daily.md"

# Commit outputs to repo if there are changes
echo "" | tee -a "$LOG_FILE"
echo ">>> Committing outputs — $(date +%H:%M:%S)" | tee -a "$LOG_FILE"
cd "$PROJECT_DIR"
# Commit agent deliverables AND any source the agents edited. `vercel --prod`
# uploads the working directory, not a git ref, so a web/src edit ships to
# production whether or not it is committed. Leaving it untracked let prod
# drift from git silently for days. Recording it here means `git log` is an
# accurate account of what is live, and a bad edit can be found and reverted.
COMMIT_PATHS=(marketing-agents/output web/src web/src/data/combos.generated.json web/src/data/ticketnetwork.generated.json)
if [ "$DRY_RUN" = "1" ]; then
    echo "[DRY_RUN] Skipping output commit and push" | tee -a "$LOG_FILE"
elif [ -n "$(git status --porcelain -- "${COMMIT_PATHS[@]}")" ]; then
    echo "Agent-edited source (review these):" | tee -a "$LOG_FILE"
    git status --porcelain -- web/src | tee -a "$LOG_FILE"
    git add -- "${COMMIT_PATHS[@]}"
    git commit -m "Daily marketing agent output — $DATE

Automated daily run of all 8 marketing agents.
See marketing-agents/output/ for agent deliverables.
Any web/src changes were made by the agents and are already live." | tee -a "$LOG_FILE"
    # Push ONLY from main. `git push origin main` pushes the LOCAL main ref, so
    # when the tree is on a feature branch it tries to push a stale main, is
    # rejected non-fast-forward, and the `||` swallows it — output then sits
    # unpushed for days (observed 2026-08-26). Never push a feature branch to
    # main implicitly: production deploys from origin/main.
    BRANCH=$(git rev-parse --abbrev-ref HEAD)
    if [ "$BRANCH" = "main" ]; then
        git push origin main 2>&1 | tee -a "$LOG_FILE" || echo "Push failed" | tee -a "$LOG_FILE"
    else
        echo "WARNING: on branch '$BRANCH', not main. Output committed locally, NOT pushed." | tee -a "$LOG_FILE"
        echo "WARNING: production deploys from origin/main, so these changes are NOT live." | tee -a "$LOG_FILE"
    fi
else
    echo "No output changes to commit" | tee -a "$LOG_FILE"
fi

# Greppable failure signal. A dead key now surfaces on day one instead of day thirty.
echo "" | tee -a "$LOG_FILE"
echo "AGENT FAILURES: $FAILED_AGENTS" | tee -a "$LOG_FILE"
if [ "$FAILED_AGENTS" -ne 0 ]; then
    for n in "${FAILED_NAMES[@]}"; do
        echo "  - $n" | tee -a "$LOG_FILE"
    done
fi

echo "" | tee -a "$LOG_FILE"
echo "===========================================" | tee -a "$LOG_FILE"
echo "Finished: $(date)" | tee -a "$LOG_FILE"
echo "===========================================" | tee -a "$LOG_FILE"
