# Email Agent Handoff — Win-back — 2026-08-23

## Status

**Draft-only. Nothing sent or queued.** The admin API has no targeted churn-send endpoint, and visit recency is not available. Do not use the all-user World Cup blast for this segment.

## Available signal

- 233 total users.
- 17 signups in the trailing seven-day cohort; 9 have no watchlist item.
- 0 active price alerts and 0 recorded triggered alerts.
- 0 recorded drip sends; 20 pending users in the drip stats response.

## Required before send

Expose `last_seen_at`, alert delivery/click events, unsubscribe timestamps, and a targeted queue with suppression, idempotency, and delivery status. Then populate the tiered copy in [churn-interventions-2026-08-23.md](churn-interventions-2026-08-23.md) only for users with verified watchlist price movement.

## Recommended first test

Tier 1 subject: **Prices changed on {{watchlist_event_count}} events you’re tracking**

Control: no email. Primary metric: return session within 72 hours. Guardrails: unsubscribe, bounce, and complaint rates.
