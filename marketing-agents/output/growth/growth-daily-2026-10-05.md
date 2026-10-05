## Growth Daily — 2026-10-05

Production snapshot pulled from the deployed admin API on 2026-10-05. The API returned 264 total users, 256 watchlist rows, and 153 users with at least one watchlist item. The requested `churn-prevention` and `marketing-psychology` skills are not installed in this workspace; equivalent frameworks were applied manually below.

### User Health

| Segment | Count | % of Total | vs Yesterday |
|---|---:|---:|---|
| New (last 7 days) | 7 | 2.7% | 0 (same) |
| Activated (has watchlist) | 153 | 58.0% | 0 (same) |
| Active (visited in 7 days) | N/A | N/A | Not tracked |
| At-risk (no visit 7–14d) | N/A | N/A | Not tracked |
| Churned (no visit 14d+) | N/A | N/A | Not tracked |

“Activated” means at least one watchlist row; it does not prove a recent visit. The product has no `last_login`, `last_seen`, visit, pageview, or return-session field, so signup age cannot be used as a churn proxy.

### Activation Gap

- **5** users signed up in the last 7 days with 0 watchlist items (**71.4%** of the cohort).
- New-user activation: **2/7 (28.6%)**.
- The five gap accounts are recorded in the CRO handoff, not in public copy.
- Top reasons: **not determinable**. Search, compare, onboarding, event-result, and bounce data are not exposed by the admin API.

### Churn Signals

- Unsubscribes in the last 24 hours: **0 observed**. All 6 newsletter records are active; there is no unsubscribe-event audit, so this is not proof that no unsubscribe occurred.
- Users entering “at-risk” today: **N/A**. Inactivity is not measurable.
- Alert-fatigue candidates: **N/A**. `/api/admin/alerts` returns HTTP 500, email opens/clicks are not tracked, and price tracking is down. Aggregate stats show 0 triggered alerts and 0 active target-price rows, which is not engagement evidence.

### Actions Triggered

- Win-back emails queued: **0**. No lifecycle-email queue/send endpoint exists, and inactive users cannot be identified safely.
- Re-engagement nudges sent: **0**. Suppressed rather than emailing a guessed segment.
- Send-ready, product-status-compliant drafts: [churn-interventions-2026-10-05.md](../email/churn-interventions-2026-10-05.md)

### Psychology-Driven Micro-Optimization

**Principle:** Commitment and consistency, supported by endowment framing.

**Where:** Empty-watchlist state immediately after signup.

**Exact copy/UX change:**

> You’re one search away from a useful ticket plan. Find an event, save it to **your watchlist**, and keep its date, venue, onsale details, and buying links in one place.

After the first save:

> Saved to **your watchlist**. Next step: check the event page for onsale timing, venue sections, and links to buy.

Use one primary CTA, **Find an event**, and link the confirmation to the saved event instead of a generic dashboard. This creates a concrete next action without promising unavailable price monitoring.

**Expected impact:** Hypothesis: improve first-watchlist conversion from the observed 28.6% new-user cohort rate. Measure signup → first watchlist add and first watchlist add → return visit after funnel events are instrumented.

### Handoffs

- CRO Agent: [activation-gap-2026-10-05.md](../cro/activation-gap-2026-10-05.md)
- Email Agent: [churn-interventions-2026-10-05.md](../email/churn-interventions-2026-10-05.md)

### Measurement Blockers

- `/api/admin/alerts` returned `{ success: false, error: "Failed to get alerts" }` with HTTP 500.
- `/api/admin/activity` exposes signup, watchlist, and active-newsletter events only; it has no visit, login, search, compare, email-open, or email-click events.
- `/api/admin/drip-stats` returned an empty send-statistics array. Delivery, opens, clicks, bounces, complaints, and unsubscribe attribution are unavailable.
- No admin endpoint exists to queue or send a personalized churn intervention email.
