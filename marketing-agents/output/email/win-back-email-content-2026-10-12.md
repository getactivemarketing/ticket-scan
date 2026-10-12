## Email Agent handoff — win-back content — 2026-10-12

No emails were sent or queued today. The production API cannot identify inactive users: it has no last-login/last-seen field and no engagement telemetry. The alert endpoint is also failing, and price tracking is down, so win-back content must not promise price changes, alerts, or savings.

Use the three drafts in [churn-interventions-2026-10-12.md](churn-interventions-2026-10-12.md):

- Day 7–10: remind the user that a saved event contains onsale timing, venue guidance, and purchase links.
- Day 10–14: summarize the number of saved events and invite a list review.
- Day 14+: offer a simple return-or-clean-up choice, with a 30-day cooldown.

Required before launch:

- `last_seen_at` or equivalent authenticated activity timestamp
- Per-user watchlist and event-page state
- Delivery, open, click, bounce, complaint, and unsubscribe events
- A parameterized admin queue endpoint with idempotency and suppression checks
