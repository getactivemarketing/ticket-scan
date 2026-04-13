#!/bin/bash
# TicketScan Weekly — Friday Analysis Session
# Email + Analytics + Growth & Retention deep dives
# Scheduled via launchd Fridays 7 AM ET

set -e

PROJECT_DIR="/Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan"
PROMPTS_DIR="$PROJECT_DIR/marketing-agents/prompts"
LOG_DIR="$PROJECT_DIR/marketing-agents/logs"
CLAUDE_BIN="/Users/samir/.local/bin/claude"
DATE=$(date +%Y-%m-%d)
LOG_FILE="$LOG_DIR/weekly-fri-$DATE.log"

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

run_agent "Email Marketing — Weekly"           "$PROMPTS_DIR/05-email-marketing-weekly.md"
run_agent "Analytics & Intelligence — Weekly"  "$PROMPTS_DIR/07-analytics-intelligence-weekly.md"
run_agent "Growth & Retention — Weekly"        "$PROMPTS_DIR/08-growth-retention-weekly.md"

if [ -n "$(git status --porcelain marketing-agents/output)" ]; then
    git add marketing-agents/output
    git commit -m "Weekly analysis agent output — Friday $DATE

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>" | tee -a "$LOG_FILE"
    git push origin main 2>&1 | tee -a "$LOG_FILE" || echo "Push failed" | tee -a "$LOG_FILE"
fi

echo "Finished: $(date)" | tee -a "$LOG_FILE"
