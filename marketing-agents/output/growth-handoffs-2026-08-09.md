## Growth Handoffs — 2026-08-09

### To CRO Agent (Agent 6)

The last-7-day cohort is 7 users. Six activated with at least one watchlist item; one did not, creating a 14.3% activation gap. Recommend an immediate post-signup checklist with the exact copy in the daily report:

`You’re one event away from your first price alert.`

Primary CTA: `Find an event to track`. Measure signup → first watchlist add within 24 hours. The current admin API cannot identify why the one user failed to activate, so add funnel events for onboarding view, event search, event detail, and watchlist add.

### To Email Agent (Agent 5)

The prepared churn copy is in [growth-churn-queue-2026-08-09.md](growth-churn-queue-2026-08-09.md). It contains three intervention tiers and send timing. Do not send from this queue until the email system can enforce `is_active`, unsubscribe suppression, and a per-user cooldown. The current API offers no win-back send route.

### Required product instrumentation

- `users.last_seen_at` updated on authenticated activity.
- Alert delivery, open, click, and unsubscribe events.
- A supported admin route for win-back queueing with idempotency and suppression checks.
- Daily snapshots so “vs Yesterday” and 7-day trend comparisons are real, not guesses.

