## Growth Daily — 2026-10-10

Production snapshot pulled from the deployed admin API at 2026-10-10 10:31 UTC. The requested `churn-prevention` and `marketing-psychology` skills are not installed in this workspace; equivalent retention and behavioral frameworks were applied manually. All copy below follows `PRODUCT-STATUS.md`.

### User Health

| Segment | Count | % of Total | vs prior available snapshot (2026-10-07) |
|---|---:|---:|---:|
| New (last 7 days) | 0 | 0.0% | -4 |
| Activated (has watchlist) | 153 | 58.0% | 0 |
| Active (visited in 7 days) | N/A | N/A | Not tracked |
| At-risk (no visit 7–14d) | N/A | N/A | Not tracked |
| Churned (no visit 14d+) | N/A | N/A | Not tracked |

“Activated” means at least one watchlist row; it does not prove a recent visit. The API has no `last_login`, `last_seen`, visit, pageview, or return-session field, so visit-based retention segments cannot be calculated.

### Activation Gap

- **0** users signed up in the last 7 days; therefore **0** current-window users are confirmed to have zero watchlist items.
- Across the full user base, **111/264 (42.0%)** have no watchlist item.
- Overall activation: **153/264 (58.0%)**.
- Top reasons: **not determinable**. Search, compare, onboarding, event-result, and bounce data are not exposed by the admin API.

### Churn Signals

- Unsubscribes in the last 24 hours: **0 observed**. All 6 newsletter records are active; there is no unsubscribe-event audit, so this is not proof that no unsubscribe occurred.
- Users entering “at-risk” today: **N/A**. Inactivity is not measurable.
- Alert-fatigue candidates: **N/A**. Email opens/clicks are not tracked, price tracking is down, and `/api/admin/alerts` returns HTTP 500. The stats endpoint reports 0 active and 0 triggered alerts, but that is not engagement evidence.

### Actions Triggered

- Win-back emails queued: **0**. No lifecycle-email queue/send endpoint exists, and inactive users cannot be identified safely.
- Re-engagement nudges sent: **0**. Suppressed rather than emailing a guessed segment.
- Send-ready drafts: [churn-interventions-2026-10-10.md](../email/churn-interventions-2026-10-10.md)

### Psychology-Driven Micro-Optimization

**Principle:** Endowment effect, reinforced by commitment and consistency.

**Where:** The first-save confirmation and returning-user dashboard.

**Exact copy/UX change:**

> Your ticket list is ready. Keep **your saved events** together with onsale timing, venue tips, and links to buy.

Primary CTA: **Review your saved events**. Secondary CTA: **Find another event**. Show the saved event name and date in the confirmation so the user sees a concrete item they own, not an abstract account feature.

**Expected impact:** Hypothesis: increase first-save completion and repeat dashboard visits by making the benefit tangible. Measure signup → first save, first save → event-page return, and saved-event review clicks once funnel events are instrumented.

### Handoffs

- CRO Agent: [activation-gap-2026-10-10.md](../cro/activation-gap-2026-10-10.md)
- Email Agent: [churn-interventions-2026-10-10.md](../email/churn-interventions-2026-10-10.md)
- Psychology detail: [psychology-optimization-2026-10-10.md](psychology-optimization-2026-10-10.md)
- Win-back handoff: [win-back-email-content-2026-10-10.md](win-back-email-content-2026-10-10.md)

### Measurement Blockers

- `/api/admin/alerts` returned HTTP 500 with `{ success: false, error: "Failed to get alerts" }`.
- `/api/admin/activity` exposes signup, watchlist, and newsletter events only; it has no visit, login, search, compare, email-open, or email-click events.
- `/api/admin/drip-stats` returned an empty send-statistics array and 20 pending users with `last_email_sent: 0`.

