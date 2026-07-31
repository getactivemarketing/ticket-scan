# Codex CLI — resolved values for the agent migration

**Resolved:** 2026-07-31 (Task 1 of `2026-07-27-openai-agent-migration.md`)
**Status:** verified live against `codex-cli 0.145.0`, not inferred from docs or memory.

No secret values appear in this file. Paths and identifiers only.

## The four values

| Value | Resolved to | How it was verified |
|---|---|---|
| `CODEX_BIN` | `/opt/homebrew/bin/codex` | `which codex`; `codex --version` => `codex-cli 0.145.0` |
| `CODEX_MODEL` | `gpt-5.6-luna` | live `codex exec` round-trip returned the requested string, exit 0 |
| `CODEX_SANDBOX` | `danger-full-access` | `codex exec --help`: `-s, --sandbox [read-only\|workspace-write\|danger-full-access]` |
| auth mechanism | `~/.codex/auth.json` **only** | see "Auth" below — the env-var assumption was tested and disproved |

## Auth — the corrected finding

**Codex ignores `OPENAI_API_KEY` in the environment.** This was tested directly rather than
assumed: with `~/.codex/auth.json` moved aside and `OPENAI_API_KEY` exported, `codex exec` fails
with `401 Unauthorized: Missing bearer or basic authentication in header`.

Auth comes only from `~/.codex/auth.json`, written by `codex login --with-api-key` reading the key
from **stdin**. The original plan's `source marketing.env` design authenticated nothing and would
have failed at 6 AM. Task 2 was amended accordingly.

Current state: `codex login status` => `Logged in using an API key - sk-proj-***R0fsA`.
API-key mode confirmed, so spend meters against API credit rather than a ChatGPT plan.

**`codex login --with-api-key` does not validate the key.** It reports `Successfully logged in`
for any string, including a malformed one. Only `codex login status` (prefix check) and a live
`codex exec` (validity check) actually verify it.

## Key provenance and its accepted risk

The marketing agents reuse the **existing CardScope OpenAI key**
(`CardScope-MVP/.env.local`, `sk-proj-`, 164 chars) rather than a TicketScan-specific one.
Founder decision, 2026-07-31.

Accepted risk: agents and CardScope draw on one balance, and CardScope has open signup with no
rate limiting on paid per-scan vision calls. A scan loop there can starve the 6 AM agent run.
Splitting into a per-project key remains the clean fix if that ever bites.

## Model choice and cost

Pinned `gpt-5.6-luna` on a **start-cheap, escalate-if-bad** basis. The quality gate is Task 5
Step 6 (Agent 2 output) and Task 6 Step 10 (hand-read of two agent outputs). If the copy reads as
AI-generated — which is precisely what the prompts' banned-word calibration exists to prevent —
re-pin `gpt-5.6-terra` and re-run.

Pricing per 1M tokens, from OpenAI's pricing page on 2026-07-31:

| Model | Input | Cached in | Output | Est. monthly, 8 agents daily |
|---|---|---|---|---|
| `gpt-5.6-sol` (Codex default) | $5.00 | $0.50 | $30.00 | ~$290 |
| `gpt-5.6-terra` | $2.00 | $0.20 | $12.00 | ~$115 |
| `gpt-5.6-luna` **(pinned)** | $0.20 | $0.02 | $1.20 | ~$11 |

Estimates assume ~150k input + ~15k output per agent, extrapolated from an 11.8k-token
hello-world (that floor is harness system-prompt overhead, charged on every single agent call).

**Leaving the model unpinned is the worst case**, not a neutral default: Codex floats to `sol`,
the most expensive tier.

**Unclaimed optimization:** flex pricing is 50% off across all tiers, and these are 6 AM cron jobs
where latency does not matter. Worth wiring up once the migration is proven; deliberately not
folded into this migration.

## Platform gotchas worth keeping

- **BSD sed has no `\?`.** macOS `sed` does not support `\?` as an optional quantifier in a basic
  regex. An extraction that relied on it silently failed to strip an `OPENAI_API_KEY=` prefix and
  stored the whole line as the key. Use `sed 's/^[^=]*=//'`.
- **`PIPESTATUS` is empty in zsh.** zsh spells it `$pipestatus` and indexes from 1. The runner
  scripts are `#!/bin/bash`, where `${PIPESTATUS[0]}` is correct — but testing that line by hand
  in an interactive zsh shell makes correct code look broken.
- **`codex exec` blocks on stdin**, printing `Reading additional input from stdin...`. Redirect
  `< /dev/null` in unattended runs or launchd jobs can hang instead of failing. A hang is worse
  than a failure here: it produces no `AGENT FAILURES:` line at all.
- **`codex login status` writes to stderr, not stdout.** Any guard that pipes it must use
  `2>&1 | grep -q`. Using `2>/dev/null` — the natural instinct, to keep the key prefix out of a
  log — inspects an empty stream, so a healthy login reads as failed. In the runner's auth guard
  that inverts a cost safeguard into a total outage: every run would abort.
- **`--full-auto` does not exist** in 0.145.0. The plan described it as deprecated; it is simply
  absent. Use `--sandbox`.
- **`codex mcp` is a real subcommand**, so Task 4 can register the Banana server through the CLI
  instead of hand-editing `~/.codex/config.toml`.
