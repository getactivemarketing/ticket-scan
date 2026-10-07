## Growth Daily — 2026-10-07

Production snapshot pulled from the deployed admin API on 2026-10-07. The API returned 264 total users, 256 watchlist rows, and 153 users with at least one watchlist item. The requested `churn-prevention` and `marketing-psychology` skills are not installed in this workspace; equivalent retention and behavioral frameworks were applied manually below.

### User Health

| Segment | Count | % of Total | vs Yesterday |
|---|---:|---:|---|
| New (last 7 days) | 4 | 1.5% | 0 |
| Activated (has watchlist) | 153 | 58.0% | 0 |
| Active (visited in 7 days) | N/A | N/A | Not tracked |
| At-risk (no visit 7–14d) | N/A | N/A | Not tracked |
| Churned (no visit 14d+) | N/A | N/A | Not tracked |

“Activated” means at least one watchlist row; it does not prove a recent visit. The API has no `last_login`, `last_seen`, visit, pageview, or return-session field, so visit-based retention segments remain unavailable.

### Activation Gap

- **3** users signed up in the last 7 days with 0 watchlist items (**75.0%** of the cohort).
- New-user activation: **1/4 (25.0%)**.
- Overall users with at least one watchlist row: **153/264 (58.0%)**.
- Top reasons: **not determinable**. Search, compare, onboarding, event-result, and bounce data are not exposed by the admin API.

### Churn Signals

- Unsubscribes in the last 24 hours: **0 observed**. All 6 newsletter records are active; there is no unsubscribe-event audit, so this is not proof that no unsubscribe occurred.
- Users entering “at-risk” today: **N/A**. Inactivity is not measurable.
- Alert-fatigue candidates: **N/A**. Email opens/clicks are not tracked, price tracking is down, and `/api/admin/alerts` returns HTTP 500. The stats endpoint reports 0 active and 0 triggered alerts, but that is not engagement evidence.

### Actions Triggered

- Win-back emails queued: **0**. No lifecycle-email queue/send endpoint exists, and inactive users cannot be identified safely.
- Re-engagement nudges sent: **0**. Suppressed rather than emailing a guessed segment.
- Send-ready, product-status-compliant drafts: [churn-interventions-2026-10-07.md](../email/churn-interventions-2026-10-07.md)

### Psychology-Driven Micro-Optimization

**Principle:** Commitment and consistency, supported by endowment framing.

**Where:** Empty-watchlist state immediately after signup and the first-save confirmation.

**Exact copy/UX change:**

Empty state:

> You’re one search away from a useful ticket plan. Find an event, save it to **your watchlist**, and keep its date, venue, onsale details, and buying links in one place.

First-save confirmation:

> Saved to **your watchlist**. Next step: check the event page for onsale timing, venue sections, and links to buy.

Use **Find an event** as the sole primary CTA, and link the confirmation directly to the saved event. Avoid unavailable price-monitoring or alert promises.

**Expected impact:** Hypothesis: improve first-watchlist conversion from the observed 25.0% new-user cohort rate. Measure signup → first watchlist add and first watchlist add → return visit after funnel events are instrumented.

### Handoffs

- CRO Agent: [activation-gap-2026-10-07.md](../cro/activation-gap-2026-10-07.md)
- Email Agent: [churn-interventions-2026-10-07.md](../email/churn-interventions-2026-10-07.md)
- Psychology detail: [psychology-optimization-2026-10-07.md](psychology-optimization-2026-10-07.md)

### Measurement Blockers

- `/api/admin/alerts` returned HTTP 500 with `{ success: false, error: "Failed to get alerts" }`.
- `/api/admin/activity` exposes signup, watchlist, and newsletter events only; it has no visit, login, search, compare, email-open, or email-click events.
- `/api/admin/drip-stats` returned an empty send-statistics array; its pending list contains users aged 4–38 days with `last_email_sent: 0`.
