## Growth Daily — 2026-08-26

Data checked against the production admin API on 2026-08-26. The API reports 243 total users, 243 watchlist rows, 143 users with at least one watchlist item, and 20 signups in the last 7 days. “Visited” cannot be measured because the current admin API exposes no login, last-seen, pageview, or comparison events.

### User Health

| Segment | Count | % of Total | vs Yesterday |
|---|---:|---:|---|
| New (last 7 days) | 20 | 8.2% | N/A — no prior snapshot available |
| Activated (has watchlist) | 143 | 58.8% | N/A |
| Active (visited in 7 days) | N/A | N/A | Not tracked |
| At-risk (no visit 7–14d) | N/A | N/A | Not tracked |
| Churned (no visit 14d+) | N/A | N/A | Not tracked |

### Activation Gap

- **8** users signed up in the last 7 days with 0 watchlist items (40.0% of the new-user cohort).
- Top reason: **not determinable** from the available data. The API does not expose search, compare, onboarding, or bounce events.
- New-user activation rate: **12/20 (60.0%)**.

### Churn Signals

- Unsubscribes today: **0 observed**; the subscriber endpoint returned no unsubscribed rows, but it does not provide an unsubscribe-event audit.
- Users entering “at-risk” today: **N/A**; no visit or last-login field is exposed.
- Alert-fatigue candidates: **N/A**; `/api/admin/alerts` returned HTTP 500, and opens/clicks are not tracked. Aggregate stats report 0 triggered alerts and 0 active target-price alerts.

### Actions Triggered

- Win-back emails queued: **0**. No supported admin send/queue endpoint exists, and recipients cannot be identified reliably without activity data.
- Re-engagement nudges sent: **0**. Suppressed pending instrumentation and recipient segmentation.
- Prepared tiered copy and send rules in [churn-interventions-2026-08-26.md](../churn-interventions-2026-08-26.md).

### Psychology-Driven Micro-Optimization

**Principle:** Commitment and consistency.

**Apply on:** dashboard onboarding state for registered users with an empty watchlist.

**Exact copy/UX change:** Add a compact progress module: “You’re 1 step from your first price alert” → “Search an event, then tap **Track price**.” After the first watchlist add, change it to “Nice — TicketScan is watching this. Set a target price to make the alert smarter.” Link the CTA directly to event search.

**Expected impact:** Reduce ambiguity at the activation step and increase first-watchlist conversion. Treat this as a hypothesis; measure signup → first watchlist add and first watchlist add → target-price set once named funnel events are instrumented.

### Measurement Blockers

- `/api/admin/alerts?limit=1000&offset=0` returned `{ success: false, error: "Failed to get alerts" }`.
- `/api/admin/activity` contains signup, watchlist, and newsletter records only; it has no visit, login, search, compare, click, or attribution events.
- `/api/admin/drip-stats` returned an empty sent-statistics array; email delivery, open, click, bounce, complaint, and unsubscribe attribution are unavailable.

