## Growth Daily — 2026-10-11

Production snapshot pulled from the deployed admin API on 2026-10-11. The requested `churn-prevention` and `marketing-psychology` skills are not installed in this workspace; equivalent retention and behavioral frameworks were applied manually. All copy follows `marketing-agents/PRODUCT-STATUS.md`.

### User Health

| Segment | Count | % of Total | vs prior available snapshot (2026-10-10) |
|---|---:|---:|---:|
| New (last 7 days) | 0 | 0.0% | 0 |
| Activated (has watchlist) | 153 | 58.0% | 0 |
| Active (visited in 7 days) | N/A | N/A | Not tracked |
| At-risk (no visit 7–14d) | N/A | N/A | Not tracked |
| Churned (no visit 14d+) | N/A | N/A | Not tracked |

“Activated” means at least one watchlist row; it does not prove a recent visit. The admin API exposes no `last_login`, `last_seen`, visit, pageview, or return-session field, so visit-based retention segments cannot be calculated.

### Activation Gap

- **0** users signed up in the last 7 days, so **0** current-window users are confirmed to have zero watchlist items.
- Across the full user base, **111/264 (42.0%)** have no watchlist item.
- Overall activation is **153/264 (58.0%)**.
- Top reasons: **not determinable**. Signup source, search, compare, event-result, onboarding, and bounce data are not exposed by the admin API.

### Churn Signals

- Unsubscribes in the last 24 hours: **0 observed**. All 6 newsletter records are active; there is no unsubscribe-event audit, so this is not proof that no unsubscribe occurred.
- Users entering “at-risk” today: **N/A**. Inactivity is not measurable.
- Alert-fatigue candidates: **N/A**. Email opens/clicks are not tracked, price tracking is down, and `/api/admin/alerts` returned HTTP 500. The stats endpoint reports 0 active and 0 triggered alerts, but that is not engagement evidence.

### Actions Triggered

- Win-back emails queued: **0**. No lifecycle-email queue/send endpoint exists, and inactive users cannot be identified safely.
- Re-engagement nudges sent: **0**. Suppressed rather than emailing a guessed segment.
- Send-ready drafts: [churn-interventions-2026-10-11.md](../email/churn-interventions-2026-10-11.md)

### Psychology-Driven Micro-Optimization

**Principle:** Endowment effect, reinforced by commitment and consistency.

**Where:** First-save confirmation and returning-user dashboard.

**Exact copy/UX change:**

> Saved to **your ticket list**: {{event_name}} on {{event_date}} at {{venue}}. Review onsale timing, venue tips, and buying links whenever you’re ready.

Primary CTA: **Review your saved event**. Secondary CTA: **Find another event**. Add: “You can remove it anytime.”

**Expected impact:** Hypothesis: improve first-save completion and repeat dashboard visits by making the saved item tangible while reducing perceived commitment. Measure signup → first save, first save → list review, and seven-day return after funnel instrumentation.

### Handoffs

- CRO Agent: [activation-gap-2026-10-11.md](../cro/activation-gap-2026-10-11.md)
- Email Agent: [churn-interventions-2026-10-11.md](../email/churn-interventions-2026-10-11.md)
- Win-back content: [win-back-email-content-2026-10-11.md](../email/win-back-email-content-2026-10-11.md)
- Psychology detail: [psychology-optimization-2026-10-11.md](psychology-optimization-2026-10-11.md)

### Measurement Blockers

- `/api/admin/alerts` returned HTTP 500 with `{ success: false, error: "Failed to get alerts" }`.
- `/api/admin/activity` exposes signup, watchlist, and newsletter events only; it has no visit, login, search, compare, email-open, or email-click events.
- `/api/admin/drip-stats` returned an empty send-statistics array and 20 pending users with `last_email_sent: 0`.
