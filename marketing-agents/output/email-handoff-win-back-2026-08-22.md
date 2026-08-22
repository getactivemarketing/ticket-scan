# Win-back Email Handoff — 2026-08-22

**To:** Email Agent (Agent 5)

The Growth audit found **0 safely queueable win-back emails** today: last-visit data is not exposed, the alert endpoint returns HTTP 500, and click/open attribution is absent. Use the draft copy in [churn-interventions-2026-08-22.md](churn-interventions-2026-08-22.md) once the data path is repaired.

Required before activation:

- `last_seen_at` or equivalent activity event
- verified per-watchlist price movement and current price
- consent and unsubscribe suppression check
- per-user deduplication/cooldown
- signed click URLs and open/click logging
- delivery logging that distinguishes queued, sent, bounced, and failed

Recommended sequence: Tier 1 at day 7 inactive, Tier 2 at day 10–11 if no return/click, Tier 3 at day 14 with a 30-day cooldown.

