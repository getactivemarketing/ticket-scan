# Activation Gap Handoff — 2026-08-23

## Audience

9 of 17 users registered in the trailing seven-day cohort have no watchlist item (52.9%). The 9 accounts are recent signups, so this is an activation opportunity—not a churn diagnosis.

## CRO recommendation

On the first post-signup screen, replace a generic empty state with the event-specific promise:

> You’re one step from your first price alert. Track an event now, then set the price you’d actually pay.

CTA: **Track my first event**

After the first save, display `Event tracked → Target price set → Alert ready`, with the next action visually primary.

## Measurement

Primary: `watchlist_add / signup_completed` within 24 hours. Secondary: `target_price_set` within 24 hours and 7-day return. Guardrails: duplicate watchlist adds, error rate, and unsubscribe rate.

## Data limitation

The admin users endpoint provides signup time and watchlist count, but no acquisition source, session path, search result, or form abandonment reason. Do not attribute the gap to a specific cause until those events are instrumented.
