# Psychology Optimization — 2026-10-01

## Principle: Commitment and consistency

**Where:** Post-registration dashboard empty state, immediately after signup when the user has zero watchlist items.

**Exact UX change:** Replace a generic empty state with:

> **You’re 1 step from your first price alert.** Search for an event and tap **Track price**. We’ll watch the listings so you don’t have to.

Add a single primary button, **Find an event to track**, plus a small progress indicator: `1 Create account  →  2 Track an event  →  3 Get a price alert`.

**Expected impact:** The current seven-user signup cohort has only 28.6% activation (2 of 7), leaving five users with no watchlist item. Making the next action concrete should improve first-watchlist conversion by reducing ambiguity; validate with an A/B test on `dashboard_empty_cta_click` and `watchlist_created` over at least one full signup cohort.

**Measurement:** Primary metric is signup → first watchlist within 24 hours. Secondary metrics are CTA click-through and 7-day return rate. Do not claim lift until event instrumentation exists.
