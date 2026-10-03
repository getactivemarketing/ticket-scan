## Email Agent Handoff — Win-back Content — 2026-10-03

No emails were sent or queued today. The production API has no last-login/last-seen field, no engagement telemetry, and no admin queue endpoint. The compliant three-tier drafts are in [churn-interventions-2026-10-03.md](churn-interventions-2026-10-03.md).

Recommended sequence:

- Day 7–10 inactive: remind the user that a saved event contains onsale timing, venue guidance, and purchase links.
- Day 10–14 inactive: summarize the number of saved events and invite a watchlist review.
- Day 14+ inactive: offer a simple return-or-clean-up choice, with a 30-day cooldown.

Required data before launch:

- `last_seen_at` or equivalent authenticated activity timestamp
- Per-user watchlist and event-page state
- Delivery, open, click, bounce, complaint, and unsubscribe events
- A parameterized admin queue endpoint with idempotency and suppression checks
