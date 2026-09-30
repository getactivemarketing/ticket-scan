## Email Agent Handoff — Win-back Content — 2026-09-30

No emails were sent or queued today. The production API has no last-login/last-seen field, no alert-click telemetry, and no admin queue endpoint. Use these drafts only after the missing signals are implemented.

### Recommended sequence

- Day 7–10 inactive: “A price changed on one of your watched events” — one concrete price movement.
- Day 10–14 inactive: “You may have missed [count] price changes on your watchlist” — summarize savings.
- Day 14+ inactive: “We kept watching. Here’s what changed.” — strongest return-to-watchlist message, then a 30-day cooldown.

Full copy, personalization fields, timing, and suppression rules are in [churn-interventions-2026-09-30.md](churn-interventions-2026-09-30.md).

### Data needed before launch

- `last_seen_at` or equivalent authenticated activity timestamp
- Per-user watchlist price movement since `last_seen_at`
- Alert delivery, open, click, bounce, complaint, and unsubscribe events
- A parameterized admin queue endpoint with idempotency protection
