#!/bin/bash
# TicketScan Weekly — Monday Strategy Session
# Content + Social + SEO + CRO + Paid Ads deep dives
# Scheduled via launchd Mondays 9 AM ET

set -e

PROJECT_DIR="/Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan"
PROMPTS_DIR="$PROJECT_DIR/marketing-agents/prompts"
LOG_DIR="$PROJECT_DIR/marketing-agents/logs"
CLAUDE_BIN="/Users/samir/.local/bin/claude"
DATE=$(date +%Y-%m-%d)
LOG_FILE="$LOG_DIR/weekly-mon-$DATE.log"

mkdir -p "$LOG_DIR"
cd "$PROJECT_DIR"

echo "===========================================" | tee "$LOG_FILE"
echo "TicketScan Weekly Strategy — Monday" | tee -a "$LOG_FILE"
echo "Started: $(date)" | tee -a "$LOG_FILE"
echo "===========================================" | tee -a "$LOG_FILE"

SHARED_CONTEXT="Working directory: $PROJECT_DIR
Today's date: $DATE
Output files should be written to: $PROJECT_DIR/marketing-agents/output/
"

run_agent() {
    local name="$1"
    local prompt_file="$2"
    echo "" | tee -a "$LOG_FILE"
    echo ">>> $name — $(date +%H:%M:%S)" | tee -a "$LOG_FILE"
    echo "-------------------------------------------" | tee -a "$LOG_FILE"
    local full_prompt="$SHARED_CONTEXT
$(cat "$prompt_file")"
    "$CLAUDE_BIN" --print --permission-mode bypassPermissions "$full_prompt" 2>&1 | tee -a "$LOG_FILE" || echo "Agent failed: $name" | tee -a "$LOG_FILE"
}

run_agent "Content Strategist — Weekly" "$PROMPTS_DIR/01-content-strategist-weekly.md"
run_agent "Social Media — Weekly"       "$PROMPTS_DIR/03-social-media-weekly.md"
run_agent "SEO Specialist — Weekly"     "$PROMPTS_DIR/02-seo-specialist-weekly.md"
run_agent "CRO Specialist — Weekly"     "$PROMPTS_DIR/06-cro-specialist-weekly.md"
run_agent "Paid Ads Manager — Weekly"   "$PROMPTS_DIR/04-paid-ads-weekly.md"

if [ -n "$(git status --porcelain marketing-agents/output)" ]; then
    git add marketing-agents/output
    git commit -m "Weekly strategy agent output — Monday $DATE

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>" | tee -a "$LOG_FILE"
    git push origin main 2>&1 | tee -a "$LOG_FILE" || echo "Push failed" | tee -a "$LOG_FILE"
fi

echo "Finished: $(date)" | tee -a "$LOG_FILE"
