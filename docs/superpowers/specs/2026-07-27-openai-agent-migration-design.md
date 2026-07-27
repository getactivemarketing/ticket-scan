# Migrate marketing agents from Claude Code to Codex CLI

**Date:** 2026-07-27
**Status:** Approved, not yet implemented

## Problem

All 8 TicketScan marketing agents have been dead since 2026-06-27. Every run fails with
`Credit balance is too low`. The Jun 24 conversion to metered Anthropic API billing pointed
the agents at an API key that ran out of credit two days later.

The launchd jobs still fire on schedule (daily 6 AM, weekly Mon 9 AM, weekly Fri 7 AM) and
produce nothing. Because `run_agent` swallows non-zero exits, every one of those ~30 dead
runs reported success. The failure was invisible for a month.

Downstream, social posting is dark: Agent 3 refreshes `content-calendar.json`, so with Agent 3
dead the Blotato scheduler retries stale Jul 13-20 slots and reports
`0 scheduled, 71 skipped, 132 errors` — all `422 Cannot schedule a post in the past`.

## Goal

Move agent spend to OpenAI, where funded credit already exists, and get the 8 agents running
again. Preserve the expensive-to-recreate asset: 1,983 lines of tuned agent prompts, including
the anti-AI voice calibration (banned words, banned structures, calibration examples) added
2026-04-13.

## Non-goals

Explicitly out of scope, tracked as the separate agent-revival workstream:

- Funding the OpenAI credit (owner: founder)
- Regenerating the stale `content-calendar.json` with future-dated slots
- Fixing the 132 past-dated Blotato scheduling errors
- Creating the missing TikTok account (`No tiktok account in blotato-accounts.json`)
- Refreshing post-final World Cup content (final was ~Jul 19; pages read as pre-tournament)

## Key constraint

This is not a model swap. The agents are Claude Code *agent runs*, not API calls:

```
"$CLAUDE_BIN" --print --model "$MODEL" --permission-mode bypassPermissions "$full_prompt"
```

The prompts assume a full agentic harness. Agent 3 alone appends entries to
`content-calendar.json`, calls MCP tools `set_aspect_ratio` and `gemini_generate_image`, copies
PNGs from `~/Documents/nanobanana_generated/` into `web/public/social/generated/`, and writes a
summary to `marketing-agents/output/social/`. Other agents read repo files and curl the Railway
admin API. The wrapper then commits, pushes, and runs `npx vercel --prod`.

So the migration swaps the harness, not the model string.

## Approach

Chosen: **swap Claude Code for Codex CLI** (`codex exec`).

Codex is a genuine 1:1 match — non-interactive exec mode, MCP support, sandbox policies, and
JSONL output. The prompts are provider-agnostic markdown and carry over untouched.

Rejected alternatives:

- **Rewrite agents as OpenAI API scripts** (Responses API + function calling). Cheapest per run
  and full control, but reimplements file tooling from scratch, requires direct Gemini API calls
  instead of MCP, and restructures ~2,000 lines of prompts that assume agentic freedom. Multi-day
  job, high regression risk.
- **Keep Claude Code, point at OpenAI via a translation proxy** (`ANTHROPIC_BASE_URL` + LiteLLM).
  Smallest diff on paper, but tool-call schema translation is lossy and it adds a local daemon
  that must be running at 6 AM. Fragile in exactly the unattended scenario required.

## Design

### 1. Secrets

`~/.config/ticketscan/marketing.env` (chmod 600, out of git) swaps `ANTHROPIC_API_KEY` for the
OpenAI key. The existing hard-abort guard retargets to the new variable name:

```bash
if [ -z "$<OPENAI_KEY_VAR>" ]; then
    echo "FATAL: <OPENAI_KEY_VAR> not set (expected in $SECRETS_FILE)." >&2
    exit 1
fi
```

This guard is load-bearing. It is what prevents an unattended run from silently falling back to
a subscription login. Codex has the same two-mode billing split as Claude Code: ChatGPT sign-in
draws plan credits, an API key bills per token.

**Open item resolved at implementation time:** sources disagree on whether the variable is
`CODEX_API_KEY` or `OPENAI_API_KEY`. Confirm against the installed CLI (`codex --help`, live
docs) before writing the file. Getting this wrong repeats the exact failure being fixed.

### 2. Runner

In `run-daily.sh`, `run-weekly-monday.sh`, and `run-weekly-friday.sh`, replace the Claude
invocation with `codex exec` plus a pinned model.

**Model pinning:** current model IDs (GPT-5.5, GPT-5.4, GPT-5.3-Codex) postdate the assistant's
knowledge cutoff. Verify exact IDs against live OpenAI docs before pinning; do not assume from
memory. Pin explicitly rather than float, for cost-predictable unattended runs — matching the
existing `MODEL="claude-sonnet-4-6"` rationale.

`codex exec` streams progress to stderr and the final message to stdout. The existing
`2>&1 | tee -a "$LOG_FILE"` handles both, so log shape stays comparable to the Claude-era logs.

### 3. Sandbox policy

The pipeline requires network egress (Railway admin API, `git push`, `npx vercel --prod`) and
reads outside the workspace (`~/Documents/nanobanana_generated/`). Codex's `workspace-write`
sandbox blocks both by default.

Use full access. These jobs already run under `--permission-mode bypassPermissions`, so this is
not a change in trust posture — it is the same posture expressed in Codex's vocabulary. Confirm
the exact flag name at implementation time (`--sandbox danger-full-access` per current docs;
`--full-auto` is documented as a deprecated compatibility flag).

### 4. Project context

Codex reads `AGENTS.md`; Claude Code reads `CLAUDE.md`. Without action the agents lose the
architecture context in the repo's existing `CLAUDE.md` (stack, endpoints, schema, conventions).

Symlink `AGENTS.md -> CLAUDE.md` at the repo root. A copy would drift; a symlink means one file
feeds both tools.

### 5. Banana MCP

Re-register the existing Banana server in `~/.codex/config.toml` under `[mcp_servers]`, ported
from its current Claude Code registration (present in `~/.claude/settings.json` and
`~/.claude.json`).

Agent 3's `set_aspect_ratio` and `gemini_generate_image` calls and its five pillar-to-style
prompt templates stay exactly as written. Image generation remains billed to Google — only the
text agents move to OpenAI.

### 6. Failure visibility

`run_agent` currently swallows failures:

```bash
... | tee -a "$LOG_FILE" || echo "Agent failed: $name" | tee -a "$LOG_FILE"
```

A `tee` in a pipeline masks the agent's exit code, and the `||` branch only logs. This is why a
dead API key ran unnoticed for a month.

Add per-agent exit-code capture (via `PIPESTATUS` or equivalent) and a failure count in the
final summary block, so a bad key surfaces on day one with a greppable signal in the log.

## Data flow

Unchanged by this migration:

```
Agent 7 (Analytics) -> Agent 2 (SEO) -> Agent 1 (Content) -> Agent 3 (Social)
  -> commit generated images
  -> npx vercel --prod   (make image URLs live before scheduling)
  -> node scripts/schedule-blotato-posts.js
-> Agent 4 (Ads) -> Agent 5 (Email) -> Agent 6 (CRO) -> Agent 8 (Growth)
-> commit + push marketing-agents/output
```

The Vercel deploy must stay ordered before Blotato scheduling: Blotato consumes
`https://www.ticketscan.io/social/generated/*.png` URLs, which 404 until deployed.

## Cutover plan

One agent first, then the rest. Staged so the cheapest thing fails first.

1. **Auth smoke test** — `codex exec` hello-world. Confirm it runs and that billing lands on the
   API account, not a ChatGPT plan.
2. **Agent 2 (SEO)** — simplest agent: no MCP, no file appends. Run manually, verify it writes to
   `marketing-agents/output/seo-requests/` and exits 0.
3. **Agent 3 (Social)** — riskiest path: MCP image generation, file copy out of
   `~/Documents/nanobanana_generated/`, JSON append to `content-calendar.json`. Run manually.
4. **Full `run-daily.sh` under `DRY_RUN=1`** — a new guard added by this work that skips commit,
   push, Vercel deploy, and Blotato scheduling. Proves all 8 agents run without side effects.
5. **Re-arm launchd** and watch the next 6 AM run. Confirm the new failure-count line reads zero.

Roll the weekly scripts (`run-weekly-monday.sh`, `run-weekly-friday.sh`) after step 4 passes;
they share the same `run_agent` shape.

## Testing

No automated test suite covers these shell scripts, and adding one is not justified for three
scripts that differ by a single line. Verification is the staged manual cutover above, with these
explicit pass criteria:

- Auth smoke test exits 0 and usage appears on the OpenAI API account
- Agent 2 produces a dated file in `output/seo-requests/`
- Agent 3 produces a PNG in `web/public/social/generated/` and appends valid JSON to
  `content-calendar.json` (validate with `node -e "JSON.parse(...)"`)
- `DRY_RUN=1 ./run-daily.sh` reports 8 agents run, 0 failed. Agent deliverables under
  `marketing-agents/output/` will be present and uncommitted — that is expected, since `DRY_RUN`
  skips the commit step. What must NOT appear: any new commit, any push to origin, any Vercel
  deployment, or any Blotato API call in the log.
- The first live launchd run logs a zero failure count

## Risks

| Risk | Mitigation |
|---|---|
| Wrong API key variable → silent subscription billing | Verify against installed CLI before writing; hard-abort guard retained |
| Sandbox blocks network or external reads | Full-access policy, proven in step 4 before going live |
| Banana MCP fails to register under Codex | Step 3 exercises it in isolation, before the full run |
| Output quality regression vs Claude | Prompts carry over unchanged; step 2/3 output reviewed by hand |
| Model ID guessed from memory | Verify against live docs; pin explicitly |
