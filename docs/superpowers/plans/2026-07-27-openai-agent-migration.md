# Codex CLI Agent Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Move TicketScan's 8 marketing agents from Claude Code CLI to OpenAI's Codex CLI, so unattended runs bill the founder's funded OpenAI credit instead of an exhausted Anthropic key.

**Architecture:** This swaps the *harness*, not a model string. The agents are agentic CLI runs whose prompts assume file access, MCP image generation, and network egress. Three shell scripts change their invocation line from `claude --print` to `codex exec`; the 1,983 lines of agent prompts carry over untouched. A latent bug that hid a month of failures — `run_agent` masking exit codes behind a `tee` pipeline — is fixed in the same pass.

**Tech Stack:** bash, Codex CLI (`@openai/codex`), MCP (nanobanana-mcp / Google Gemini), launchd, Node.js (Blotato scheduler), Vercel CLI.

**Spec:** `docs/superpowers/specs/2026-07-27-openai-agent-migration-design.md`

## Global Constraints

- **Never commit secrets.** The API key lives only in `~/.config/ticketscan/marketing.env`, which is outside the repo and stays `chmod 600`.
- **Never weaken the missing-key hard abort.** It is what stops an unattended run from silently falling back to a plan-credit login. It must `exit 1`, not warn.
- **Agent prompts in `marketing-agents/prompts/` are not to be edited.** They carry tuned anti-AI voice calibration. This migration must not touch them.
- **Pin the model explicitly.** Do not float to a default alias. Rationale matches the existing `MODEL="claude-sonnet-4-6"` comment: cost-predictable unattended runs.
- **Ordering is load-bearing:** the Vercel deploy must run *before* Blotato scheduling. Blotato consumes `https://www.ticketscan.io/social/generated/*.png` URLs that 404 until deployed.
- **Verify, don't assume, three values** (Task 1 resolves all three): the API-key env var name, the exact model ID, and the sandbox flag name. Current model IDs postdate the assistant's knowledge cutoff.
- **No automated test suite exists for these shell scripts and none is being added** — three scripts differing by one line do not justify a harness. Verification is manual, with the explicit pass criteria stated in each task.

---

### Task 1: Install Codex CLI and resolve the three unknowns

**Files:**
- Create: `docs/superpowers/plans/2026-07-27-codex-resolved-values.md` (scratch record of verified values, committed so later tasks and future sessions can rely on it)

**Interfaces:**
- Produces: three verified values that every later task consumes — `CODEX_BIN` (absolute path), `CODEX_KEY_VAR` (exact env var name for API-key billing), `CODEX_MODEL` (exact pinned model ID), and `CODEX_SANDBOX` (exact sandbox flag value granting network + external reads).

- [ ] **Step 1: Install the Codex CLI**

```bash
npm i -g @openai/codex
```

- [ ] **Step 2: Confirm it installed and record the absolute path**

```bash
which codex
codex --version
```

Expected: a path (likely `/usr/local/bin/codex` or under your npm prefix) and a version string. Record the path — it becomes `CODEX_BIN` in Task 5.

- [ ] **Step 3: Resolve the API-key environment variable name**

The spec flags this as unresolved: sources disagree between `OPENAI_API_KEY` and `CODEX_API_KEY`. Getting it wrong bills a ChatGPT plan instead of API credit — a subtler replay of the failure being fixed.

```bash
codex --help
codex exec --help
```

Look for the auth/environment section naming the variable. If `--help` is ambiguous, check the live reference at https://developers.openai.com/codex/cli/reference.

**The rest of this plan is written assuming `OPENAI_API_KEY`.** If you determine it is `CODEX_API_KEY`, substitute that name everywhere `OPENAI_API_KEY` appears in Tasks 2 and 5, including inside the abort message string.

- [ ] **Step 4: Resolve the model ID**

```bash
codex exec --help | grep -i model
```

Cross-check available model IDs against https://developers.openai.com/codex/cli/reference. Candidates seen in July 2026 sources: `gpt-5.5`, `gpt-5.4`, `gpt-5.3-codex`. **Do not guess from memory** — these postdate the assistant's training cutoff, and a wrong ID fails at 6 AM unattended. Pick the cheapest model adequate for marketing-copy generation; these are writing tasks, not hard reasoning tasks. Record it as `CODEX_MODEL`.

- [ ] **Step 5: Resolve the sandbox flag**

```bash
codex exec --help | grep -iA3 sandbox
```

Expected per current docs: `--sandbox` accepts `read-only` (default), `workspace-write`, and `danger-full-access`. This pipeline needs `danger-full-access` — it requires network egress (Railway admin API, `git push`, `npx vercel`) and reads outside the workspace (`~/Documents/nanobanana_generated/`). Note `--full-auto` is documented as a deprecated compatibility flag; do not use it. Record the value as `CODEX_SANDBOX`.

- [ ] **Step 6: Authenticate with the API key and run a billing smoke test**

Export the key in your shell (do not write it into the repo):

```bash
export OPENAI_API_KEY='<the funded API key>'
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan
codex exec --sandbox read-only --model '<CODEX_MODEL>' 'Reply with exactly: CODEX OK'
```

Expected: `CODEX OK` on stdout, exit 0.

- [ ] **Step 7: Confirm billing landed on the API account, not a ChatGPT plan**

Open https://platform.openai.com/usage and confirm a small charge appeared for the smoke test just run. This is the single most important check in the plan — it is the exact failure mode that killed the Anthropic setup.

If usage does NOT appear, the CLI is using a saved ChatGPT sign-in from `~/.codex/auth.json` instead of the key. Fix by removing that file or by using whatever explicit API-key auth path `codex --help` documents, then re-run Step 6.

- [ ] **Step 8: Record the resolved values and commit**

Write `docs/superpowers/plans/2026-07-27-codex-resolved-values.md` with the four values (path, key var, model ID, sandbox flag). **Record the variable NAME only — never the key value.**

```bash
git add docs/superpowers/plans/2026-07-27-codex-resolved-values.md
git commit -m "docs: record verified Codex CLI values for agent migration"
```

---

### Task 2: Migrate the secrets file to the OpenAI key

**Files:**
- Modify: `~/.config/ticketscan/marketing.env` (outside the repo, not version controlled)

**Interfaces:**
- Consumes: `CODEX_KEY_VAR` from Task 1.
- Produces: a secrets file exporting the OpenAI key, sourced by all three run scripts.

- [ ] **Step 1: Back up the current file**

```bash
cp ~/.config/ticketscan/marketing.env ~/.config/ticketscan/marketing.env.anthropic.bak
```

Keeping the Anthropic key lets you roll back without hunting for it.

- [ ] **Step 2: Replace the contents**

The file currently holds exactly one line: `export ANTHROPIC_API_KEY=<redacted>`. Replace it:

```bash
printf 'export OPENAI_API_KEY=%s\n' '<the funded API key>' > ~/.config/ticketscan/marketing.env
```

- [ ] **Step 3: Re-assert restrictive permissions**

```bash
chmod 600 ~/.config/ticketscan/marketing.env
ls -la ~/.config/ticketscan/marketing.env
```

Expected: `-rw-------`.

- [ ] **Step 4: Verify it sources cleanly and the variable is set**

```bash
( source ~/.config/ticketscan/marketing.env && [ -n "$OPENAI_API_KEY" ] && echo "KEY PRESENT" || echo "KEY MISSING" )
```

Expected: `KEY PRESENT`. This prints presence only, never the value.

- [ ] **Step 5: Confirm nothing secret entered the repo**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan && git status --porcelain
```

Expected: no changes from this task. The secrets file is outside the repo by design; if it shows up here, stop and investigate.

---

### Task 3: Give Codex the project context via AGENTS.md

**Files:**
- Create: `AGENTS.md` (symlink to existing `CLAUDE.md`) at repo root

**Interfaces:**
- Produces: project architecture context (stack, endpoints, DB schema, conventions) readable by `codex exec`. Without it, agents run blind to the codebase they are writing about.

- [ ] **Step 1: Create the symlink**

Codex reads `AGENTS.md`; Claude Code reads `CLAUDE.md`. A copy would drift as the project evolves; a symlink means one file feeds both tools.

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan
ln -s CLAUDE.md AGENTS.md
```

- [ ] **Step 2: Verify the link resolves**

```bash
ls -la AGENTS.md && head -3 AGENTS.md
```

Expected: `AGENTS.md -> CLAUDE.md`, and the first lines of the TicketScan project overview.

- [ ] **Step 3: Verify Codex actually reads it**

```bash
codex exec --sandbox read-only --model '<CODEX_MODEL>' \
  'Based only on the project context file you were given, what database does this project use and what is the frontend framework? Answer in one line.'
```

Expected: an answer naming PostgreSQL and Next.js. If it cannot answer, Codex is not picking up `AGENTS.md` — check whether it requires the file to be committed, or consult `codex --help` for the context-file convention before continuing.

- [ ] **Step 4: Commit**

```bash
git add AGENTS.md
git commit -m "chore: symlink AGENTS.md to CLAUDE.md so Codex CLI gets project context"
```

---

### Task 4: Port the Banana MCP server to Codex

**Files:**
- Modify: `~/.codex/config.toml` (outside the repo; create it if absent)

**Interfaces:**
- Consumes: the existing registration in `~/.claude/settings.json` under `mcpServers.nanobanana-mcp`.
- Produces: MCP tools `set_aspect_ratio` and `gemini_generate_image`, which Agent 3's prompt calls by name. Agent 3's five pillar-to-style templates are unchanged.

- [ ] **Step 1: Read the existing values you must carry over**

The current Claude Code registration is:

```json
{
  "command": "npx",
  "args": ["-y", "@ycse/nanobanana-mcp"],
  "env": { "GOOGLE_AI_API_KEY": "<redacted>", "NANOBANANA_MODEL": "<redacted>" }
}
```

Read the two real env values out of `~/.claude/settings.json` (they are needed verbatim):

```bash
python3 -c "import json,os;d=json.load(open(os.path.expanduser('~/.claude/settings.json')));print(json.dumps(d['mcpServers']['nanobanana-mcp']['env'],indent=2))"
```

- [ ] **Step 2: Add the server to the Codex config**

Append to `~/.codex/config.toml`, substituting the two real values from Step 1:

```toml
[mcp_servers.nanobanana-mcp]
command = "npx"
args = ["-y", "@ycse/nanobanana-mcp"]
env = { GOOGLE_AI_API_KEY = "<value from step 1>", NANOBANANA_MODEL = "<value from step 1>" }
```

The server name must stay `nanobanana-mcp` so tool names resolve as Agent 3's prompt expects. (`nanobanana-mcp` is a valid TOML bare key — hyphens are permitted — so no quoting is needed.)

- [ ] **Step 3: Protect the config, since it now holds a Google API key**

```bash
chmod 600 ~/.codex/config.toml
ls -la ~/.codex/config.toml
```

Expected: `-rw-------`.

- [ ] **Step 4: Verify Codex sees the MCP server**

```bash
codex mcp list
```

Expected: `nanobanana-mcp` listed. If `codex mcp list` is not a valid subcommand on your version, run `codex mcp --help` to find the equivalent.

- [ ] **Step 5: Verify the image tool actually generates**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan
codex exec --sandbox '<CODEX_SANDBOX>' --model '<CODEX_MODEL>' \
  'Call set_aspect_ratio with "1:1", then call gemini_generate_image with this prompt: "A clean social media card on a dark navy (#0a1628) background with the text SAVE 42 in bold white sans-serif. Minimal flat design, green (#22c55e) accent." Then report the absolute path of the file it saved.'
ls -lt ~/Documents/nanobanana_generated/ | head -3
```

Expected: a PNG created in the last minute. This is the riskiest single integration in the migration, which is why it is proven in isolation before any agent runs.

---

### Task 5: Rewrite the runner in run-daily.sh for Codex

**Files:**
- Modify: `marketing-agents/scripts/run-daily.sh` (config block lines ~12-28, `run_agent` function lines ~59-76, summary block at end)

**Interfaces:**
- Consumes: `CODEX_BIN`, `CODEX_MODEL`, `CODEX_SANDBOX`, `CODEX_KEY_VAR` from Task 1; the secrets file from Task 2; `AGENTS.md` from Task 3; the MCP server from Task 4.
- Produces: a `run_agent` shell function with real exit-code capture, plus the greppable log line `AGENT FAILURES: <n>` consumed by Task 8's monitoring check.

- [ ] **Step 1: Replace the config and guard block**

Replace lines 12-28 (from `CLAUDE_BIN=` through the closing `fi` of the key guard) with:

```bash
CODEX_BIN="<CODEX_BIN from Task 1>"
MODEL="<CODEX_MODEL from Task 1>"   # pinned for cost-predictable unattended runs
SANDBOX="<CODEX_SANDBOX from Task 1>"   # needs network egress + reads outside the workspace
DATE=$(date +%Y-%m-%d)
LOG_FILE="$LOG_DIR/daily-$DATE.log"
DRY_RUN="${DRY_RUN:-0}"

# Bill to the metered OpenAI API (NOT a ChatGPT plan).
# An API key bills per token; a saved ChatGPT sign-in draws plan credits instead.
# launchd does not inherit the shell env, so source the key explicitly.
SECRETS_FILE="$HOME/.config/ticketscan/marketing.env"
if [ -f "$SECRETS_FILE" ]; then
    # shellcheck disable=SC1090
    source "$SECRETS_FILE"
fi
if [ -z "$OPENAI_API_KEY" ]; then
    echo "FATAL: OPENAI_API_KEY not set (expected in $SECRETS_FILE). Aborting to avoid billing a ChatGPT plan." >&2
    exit 1
fi
```

Note `DRY_RUN` is declared here but not used until Task 6.

- [ ] **Step 2: Replace the `run_agent` function**

The current version masks failures two ways: `tee` makes the pipeline's exit status `tee`'s, and the `||` branch only echoes. That is why ~30 dead runs all reported success. Replace the whole function with:

```bash
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

    set +e
    "$CODEX_BIN" exec --sandbox "$SANDBOX" --model "$MODEL" "$full_prompt" 2>&1 | tee -a "$LOG_FILE"
    local rc=${PIPESTATUS[0]}
    set -e

    if [ "$rc" -ne 0 ]; then
        echo "AGENT FAILED: $name (exit $rc)" | tee -a "$LOG_FILE"
        FAILED_AGENTS=$((FAILED_AGENTS + 1))
        FAILED_NAMES+=("$name (exit $rc)")
    fi
    return 0
}
```

`${PIPESTATUS[0]}` reads the exit code of `codex` rather than of `tee`. `set +e` around the pipeline keeps a single agent failure from aborting the whole run under the script's `set -e`, while still recording it; `set -e` is restored immediately after. Each `run_agent` returns 0 deliberately, for the same reason.

**Do not split `local rc=${PIPESTATUS[0]}` into two lines.** Writing `local rc` on its own line runs a command, which overwrites `PIPESTATUS` before you read it, and `rc` silently becomes 0 — restoring the exact bug this task exists to fix. It must stay a single statement.

- [ ] **Step 3: Add the failure summary before the final banner**

Insert immediately before the closing `echo "===..."` / `Finished:` block:

```bash
echo "" | tee -a "$LOG_FILE"
echo "AGENT FAILURES: $FAILED_AGENTS" | tee -a "$LOG_FILE"
if [ "$FAILED_AGENTS" -ne 0 ]; then
    for n in "${FAILED_NAMES[@]}"; do
        echo "  - $n" | tee -a "$LOG_FILE"
    done
fi
```

`AGENT FAILURES:` is the greppable signal. A dead key now surfaces on day one instead of day thirty.

- [ ] **Step 4: Syntax-check before running anything**

```bash
bash -n marketing-agents/scripts/run-daily.sh && echo "SYNTAX OK"
```

Expected: `SYNTAX OK`.

- [ ] **Step 5: Verify the key guard still aborts**

```bash
( unset OPENAI_API_KEY; env -u OPENAI_API_KEY HOME=/tmp/nonexistent-home bash marketing-agents/scripts/run-daily.sh; echo "exit=$?" )
```

Expected: the `FATAL: OPENAI_API_KEY not set` message and `exit=1`. This confirms the load-bearing guard survived the rewrite.

- [ ] **Step 6: Run Agent 2 (SEO) alone — the simplest agent**

Agent 2 has no MCP calls and no file appends, so it isolates auth and basic file-writing.

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan
source ~/.config/ticketscan/marketing.env
codex exec --sandbox '<CODEX_SANDBOX>' --model '<CODEX_MODEL>' \
  "$(cat marketing-agents/prompts/02-seo-specialist-daily.md)"
echo "exit=$?"
ls -lt marketing-agents/output/seo-requests/ | head -3
```

Expected: exit 0 and a file dated today in `output/seo-requests/`. Read it and confirm it is real marketing analysis, not a refusal or an empty stub.

- [ ] **Step 7: Commit**

```bash
git add marketing-agents/scripts/run-daily.sh
git commit -m "feat: run daily marketing agents on Codex CLI with real exit-code capture

Swaps claude --print for codex exec and fixes the latent bug that hid a
month of failures: tee masked the agent exit code, so every dead run
reported success. Adds a greppable 'AGENT FAILURES: n' summary line."
```

---

### Task 6: Add the DRY_RUN guard and prove the full daily run

**Files:**
- Modify: `marketing-agents/scripts/run-daily.sh` (the image-commit / Vercel / Blotato block, and the output-commit block)

**Interfaces:**
- Consumes: `DRY_RUN` declared in Task 5 Step 1.
- Produces: `DRY_RUN=1` mode, which runs all 8 agents with zero outward side effects. Task 8 relies on the default `DRY_RUN=0` preserving live behavior.

- [ ] **Step 1: Guard the image-commit, deploy, and scheduling block**

Wrap the existing block (image commit through the Blotato call) so the ordering inside is untouched:

```bash
if [ "$DRY_RUN" = "1" ]; then
    echo "[DRY_RUN] Skipping image commit, Vercel deploy, and Blotato scheduling" | tee -a "$LOG_FILE"
else
    # Commit generated images if any exist
    if [ -n "$(git status --porcelain web/public/social/generated/)" ]; then
        git add web/public/social/generated/
        git commit -m "Add generated social images — $DATE" 2>&1 | tee -a "$LOG_FILE"
    fi

    # Deploy to Vercel so image URLs are live BEFORE Blotato consumes them
    cd "$PROJECT_DIR/web"
    npx vercel --prod --yes 2>&1 | tee -a "$LOG_FILE" || echo "Vercel deploy failed" | tee -a "$LOG_FILE"
    cd "$PROJECT_DIR"

    # Schedule posts via Blotato
    cd "$PROJECT_DIR/marketing-agents"
    node scripts/schedule-blotato-posts.js 2>&1 | tee -a "$LOG_FILE" || echo "Blotato scheduling failed" | tee -a "$LOG_FILE"
    cd "$PROJECT_DIR"
fi
```

- [ ] **Step 2: Guard the output-commit block**

```bash
if [ "$DRY_RUN" = "1" ]; then
    echo "[DRY_RUN] Skipping output commit and push" | tee -a "$LOG_FILE"
elif [ -n "$(git status --porcelain marketing-agents/output)" ]; then
    git add marketing-agents/output
    git commit -m "Daily marketing agent output — $DATE

Automated daily run of all 8 marketing agents.
See marketing-agents/output/ for agent deliverables." | tee -a "$LOG_FILE"
    git push origin main 2>&1 | tee -a "$LOG_FILE" || echo "Push failed" | tee -a "$LOG_FILE"
else
    echo "No output changes to commit" | tee -a "$LOG_FILE"
fi
```

Note the `Co-Authored-By: Claude Opus 4.6` trailer in the old commit message is dropped — these are no longer Claude-authored runs.

- [ ] **Step 3: Syntax-check**

```bash
bash -n marketing-agents/scripts/run-daily.sh && echo "SYNTAX OK"
```

Expected: `SYNTAX OK`.

- [ ] **Step 4: Record the pre-run git state for comparison**

```bash
git rev-parse HEAD > /tmp/pre-dryrun-head.txt
cat /tmp/pre-dryrun-head.txt
```

- [ ] **Step 5: Run the full pipeline in dry-run mode**

This exercises all 8 agents including Agent 3's MCP image path and its JSON append.

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan
DRY_RUN=1 bash marketing-agents/scripts/run-daily.sh
```

Expect roughly 10-20 minutes. This costs real OpenAI credit — it is a full 8-agent run.

- [ ] **Step 6: Check the failure count**

```bash
grep "AGENT FAILURES:" marketing-agents/logs/daily-$(date +%Y-%m-%d).log
```

Expected: `AGENT FAILURES: 0`. If non-zero, the following lines name each failed agent — fix before proceeding to Task 7.

- [ ] **Step 7: Confirm no side effects escaped the guard**

```bash
# No new commit
[ "$(git rev-parse HEAD)" = "$(cat /tmp/pre-dryrun-head.txt)" ] && echo "NO NEW COMMIT — OK" || echo "FAIL: a commit was made"
# Guards actually fired
grep -c "\[DRY_RUN\]" marketing-agents/logs/daily-$(date +%Y-%m-%d).log
# No deploy, no scheduling
grep -ciE "vercel|blotato|Production:" marketing-agents/logs/daily-$(date +%Y-%m-%d).log
```

Expected: `NO NEW COMMIT — OK`, a `[DRY_RUN]` count of 2, and 0 deploy/scheduling matches.

Agent deliverables under `marketing-agents/output/` WILL be present and uncommitted — that is correct, since `DRY_RUN` skips the commit step.

- [ ] **Step 8: Validate Agent 3's JSON append did not corrupt the calendar**

```bash
node -e "const c=require('./marketing-agents/content-calendar.json'); console.log('entries:', c.length ?? Object.keys(c).length)"
```

Expected: parses without error and prints a count. A malformed append would break every future scheduling run, so this check matters.

- [ ] **Step 9: Confirm images were generated**

```bash
ls -lt web/public/social/generated/ | head -5
```

Expected: PNGs dated today, proving the MCP path works inside a real agent run and not just the isolated Task 4 test.

- [ ] **Step 10: Read two agent outputs by hand for quality**

Open today's files in `marketing-agents/output/social/` and `marketing-agents/output/content/`. Confirm the copy follows the brand voice and does not contain the banned AI patterns the prompts forbid (no "delve", "crucial", "stands as", "Here's the thing", forced rule-of-three, em-dash emphasis). This is the only check on output quality regression versus Claude, so do not skip it.

- [ ] **Step 11: Commit**

```bash
git add marketing-agents/scripts/run-daily.sh
git commit -m "feat: add DRY_RUN guard to daily agent run

DRY_RUN=1 runs all 8 agents with no commit, push, deploy, or Blotato
scheduling, so the pipeline can be exercised end-to-end safely."
```

---

### Task 7: Migrate the two weekly scripts

**Files:**
- Modify: `marketing-agents/scripts/run-weekly-monday.sh` (config/guard lines 11-28, `run_agent` lines ~42-51, summary at end)
- Modify: `marketing-agents/scripts/run-weekly-friday.sh` (same line ranges)

**Interfaces:**
- Consumes: the same resolved values and the identical `run_agent` shape proven in Task 5.
- Produces: all three scheduled entry points running on Codex.

- [ ] **Step 1: Apply the same config/guard replacement to both files**

Both scripts carry byte-identical config and guard blocks to the one you replaced in Task 5 Step 1. Apply that exact replacement to each, with one difference: neither weekly script has a `DRY_RUN` line, and neither needs one — they have no Vercel or Blotato steps, only a commit and push at the end.

- [ ] **Step 2: Apply the same `run_agent` replacement to both files**

Use the identical function body from Task 5 Step 2, including `FAILED_AGENTS=0` and `FAILED_NAMES=()` above it.

- [ ] **Step 3: Add the same failure summary to both files**

Insert before each script's `Finished:` line:

```bash
echo "" | tee -a "$LOG_FILE"
echo "AGENT FAILURES: $FAILED_AGENTS" | tee -a "$LOG_FILE"
if [ "$FAILED_AGENTS" -ne 0 ]; then
    for n in "${FAILED_NAMES[@]}"; do
        echo "  - $n" | tee -a "$LOG_FILE"
    done
fi
```

- [ ] **Step 4: Drop the stale co-author trailer in both commit messages**

Both scripts embed `Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>` in their `git commit -m` heredoc. Remove that line from each — these runs are no longer Claude-authored.

- [ ] **Step 5: Syntax-check both**

```bash
bash -n marketing-agents/scripts/run-weekly-monday.sh && bash -n marketing-agents/scripts/run-weekly-friday.sh && echo "SYNTAX OK"
```

Expected: `SYNTAX OK`.

- [ ] **Step 6: Verify both guards abort without a key**

```bash
for s in run-weekly-monday run-weekly-friday; do
  ( env -u OPENAI_API_KEY HOME=/tmp/nonexistent-home bash marketing-agents/scripts/$s.sh >/dev/null 2>&1; echo "$s exit=$?" )
done
```

Expected: `exit=1` for both.

- [ ] **Step 7: Run the Friday script live — it is the smallest, at 3 agents**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan
bash marketing-agents/scripts/run-weekly-friday.sh
grep "AGENT FAILURES:" marketing-agents/logs/weekly-fri-$(date +%Y-%m-%d).log
```

Expected: `AGENT FAILURES: 0`. This one runs live (it commits and pushes) — that is intentional, and it is why the 3-agent script is chosen over the 5-agent Monday one.

- [ ] **Step 8: Commit**

```bash
git add marketing-agents/scripts/run-weekly-monday.sh marketing-agents/scripts/run-weekly-friday.sh
git commit -m "feat: run weekly marketing agents on Codex CLI

Same runner swap and exit-code capture as the daily script."
```

---

### Task 8: Re-arm the schedule and verify the first live run

**Files:**
- Verify (no edit expected): `~/Library/LaunchAgents/com.ticketscan.daily.plist`, `com.ticketscan.weekly-monday.plist`, `com.ticketscan.weekly-friday.plist`

**Interfaces:**
- Consumes: `AGENT FAILURES: <n>` from Tasks 5 and 7.
- Produces: a verified-live automated pipeline.

- [ ] **Step 1: Confirm the plists need no change**

```bash
grep -A3 ProgramArguments ~/Library/LaunchAgents/com.ticketscan.daily.plist
```

The plists invoke the shell scripts by path, and the paths did not change, so no edit should be needed. If a plist references `claude` directly, update it to match the new script invocation.

- [ ] **Step 2: Confirm the jobs are still loaded**

```bash
launchctl list | grep ticketscan
```

Expected: all three jobs listed. They have been firing all along — they were just running dead agents.

- [ ] **Step 3: Trigger one real scheduled run rather than waiting for 6 AM**

```bash
launchctl kickstart -k gui/$(id -u)/com.ticketscan.daily
```

This runs the full live pipeline including commit, push, deploy, and Blotato scheduling.

- [ ] **Step 4: Verify the run succeeded end to end**

```bash
LOG=marketing-agents/logs/daily-$(date +%Y-%m-%d).log
grep "AGENT FAILURES:" $LOG
grep -c "Production:" $LOG
grep -E "Done: [0-9]+ scheduled" $LOG
```

Expected: `AGENT FAILURES: 0`, at least one `Production:` line from the Vercel deploy, and a Blotato `Done:` line.

**Note on Blotato:** the `Done:` line will likely still show scheduling errors, because `content-calendar.json` holds stale past-dated entries from July 13-20. That is the separate revival workstream and is explicitly out of scope for this plan — do not treat it as a migration failure. What matters here is that the agents ran and Agent 3 appended *new* future-dated entries.

- [ ] **Step 5: Confirm billing is flowing to the OpenAI API account**

Re-check https://platform.openai.com/usage. Expected: usage for today reflecting a full 8-agent run. Set a spend cap now if one is not already configured — the original Anthropic setup had no cap, which is part of why it silently ran dry.

- [ ] **Step 6: Update project memory**

Update `~/.claude/projects/-Applications-XAMPP-xamppfiles-htdocs-Sites/memory/ticketscan.md`: replace the "BROKEN: all 8 marketing agents dead" section with the migrated Codex setup — resolved model ID, key variable name, sandbox flag, the `AGENT FAILURES:` monitoring signal, and the `DRY_RUN=1` test path. Update the MEMORY.md one-liner to match.

- [ ] **Step 7: Final commit**

```bash
git add -A marketing-agents/output marketing-agents/logs
git commit -m "chore: first live Codex-driven agent run"
git push origin main
```

---

## Rollback

If the migration fails and the agents must return to Claude Code:

```bash
cp ~/.config/ticketscan/marketing.env.anthropic.bak ~/.config/ticketscan/marketing.env
git revert <commits from Tasks 5, 6, 7>
```

This requires funding the Anthropic key again, since the original failure was an exhausted balance rather than a broken setup.
