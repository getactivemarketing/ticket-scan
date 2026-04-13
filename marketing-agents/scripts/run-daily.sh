#!/bin/bash
# TicketScan Daily Marketing Team Runner
# Runs all 8 marketing agents in sequence. Scheduled via launchd at 6 AM ET daily.

set -e

# Config
PROJECT_DIR="/Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan"
PROMPTS_DIR="$PROJECT_DIR/marketing-agents/prompts"
OUTPUT_DIR="$PROJECT_DIR/marketing-agents/output"
LOG_DIR="$PROJECT_DIR/marketing-agents/logs"
CLAUDE_BIN="/Users/samir/.local/bin/claude"
DATE=$(date +%Y-%m-%d)
LOG_FILE="$LOG_DIR/daily-$DATE.log"

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
- Admin key: 42031664234009a8214ed6084d72a8627fd4764049023fd83aa495462152a956

"

# Run each daily agent in sequence
run_agent() {
    local name="$1"
    local prompt_file="$2"

    echo "" | tee -a "$LOG_FILE"
    echo ">>> $name — $(date +%H:%M:%S)" | tee -a "$LOG_FILE"
    echo "-------------------------------------------" | tee -a "$LOG_FILE"

    if [ ! -f "$prompt_file" ]; then
        echo "ERROR: Prompt file not found: $prompt_file" | tee -a "$LOG_FILE"
        return 1
    fi

    local full_prompt="$SHARED_CONTEXT
$(cat "$prompt_file")"

    "$CLAUDE_BIN" --print --permission-mode bypassPermissions "$full_prompt" 2>&1 | tee -a "$LOG_FILE" || echo "Agent failed: $name" | tee -a "$LOG_FILE"
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

# Commit generated images if any exist
if [ -n "$(git status --porcelain web/public/social/generated/)" ]; then
    git add web/public/social/generated/
    git commit -m "Add generated social images — $DATE" 2>&1 | tee -a "$LOG_FILE"
fi

# Deploy to Vercel so image URLs are live
cd "$PROJECT_DIR/web"
npx vercel --prod --yes 2>&1 | tee -a "$LOG_FILE" || echo "Vercel deploy failed" | tee -a "$LOG_FILE"
cd "$PROJECT_DIR"

# Schedule posts via Blotato
cd "$PROJECT_DIR/marketing-agents"
node scripts/schedule-blotato-posts.js 2>&1 | tee -a "$LOG_FILE" || echo "Blotato scheduling failed" | tee -a "$LOG_FILE"
cd "$PROJECT_DIR"

run_agent "Agent 4: Paid Ads Manager"          "$PROMPTS_DIR/04-paid-ads-daily.md"
run_agent "Agent 5: Email Marketing"           "$PROMPTS_DIR/05-email-marketing-daily.md"
run_agent "Agent 6: CRO Specialist"            "$PROMPTS_DIR/06-cro-specialist-daily.md"
run_agent "Agent 8: Growth & Retention"        "$PROMPTS_DIR/08-growth-retention-daily.md"

# Commit outputs to repo if there are changes
echo "" | tee -a "$LOG_FILE"
echo ">>> Committing outputs — $(date +%H:%M:%S)" | tee -a "$LOG_FILE"
cd "$PROJECT_DIR"
if [ -n "$(git status --porcelain marketing-agents/output)" ]; then
    git add marketing-agents/output
    git commit -m "Daily marketing agent output — $DATE

Automated daily run of all 8 marketing agents.
See marketing-agents/output/ for agent deliverables.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>" | tee -a "$LOG_FILE"
    git push origin main 2>&1 | tee -a "$LOG_FILE" || echo "Push failed" | tee -a "$LOG_FILE"
else
    echo "No output changes to commit" | tee -a "$LOG_FILE"
fi

echo "" | tee -a "$LOG_FILE"
echo "===========================================" | tee -a "$LOG_FILE"
echo "Finished: $(date)" | tee -a "$LOG_FILE"
echo "===========================================" | tee -a "$LOG_FILE"
