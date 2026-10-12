## Growth Daily — 2026-10-12

Production snapshot pulled from the deployed admin API on 2026-10-12. The requested `churn-prevention` and `marketing-psychology` skills are not installed in this workspace; equivalent retention and behavioral frameworks were applied manually. All copy follows `marketing-agents/PRODUCT-STATUS.md`.

### User Health

| Segment | Count | % of Total | vs prior available snapshot (2026-10-11) |
|---|---:|---:|---:|
| New (last 7 days) | 1 | 0.4% | +1 |
| Activated (has watchlist) | 153 | 57.7% | 0 |
| Active (visited in 7 days) | N/A | N/A | Not tracked |
| At-risk (no visit 7–14d) | N/A | N/A | Not tracked |
| Churned (no visit 14d+) | N/A | N/A | Not tracked |

“Activated” means at least one watchlist row; it does not prove a recent visit. The current admin API exposes signup and watchlist timestamps, but no `last_login`, `last_seen`, visit, pageview, or return-session field. The one current-window signup has zero watchlist items.

### Activation Gap

- **1** user signed up in the last 7 days with 0 watchlist items.
- Across the full user base, **112/265 (42.3%)** have no watchlist item; overall activation is **153/265 (57.7%)**.
- Top reasons: **not determinable**. Signup source, search, compare, event-result, onboarding, and bounce data are not exposed by the admin API.
- Handoff: [activation-gap-2026-10-12.md](../cro/activation-gap-2026-10-12.md)

### Churn Signals

- Unsubscribes in the last 24 hours: **0 observed**. All 7 newsletter records are active; there is no unsubscribe-event audit, so this is not proof that no unsubscribe occurred.
- Users entering “at-risk” today: **N/A**. Inactivity is not measurable.
- Alert-fatigue candidates: **N/A**. Email opens/clicks are not tracked, price tracking is down, and `/api/admin/alerts?limit=1000` returned HTTP 500 (`Failed to get alerts`). The stats endpoint reports 0 active and 0 triggered alerts, but that is not engagement evidence.

### Actions Triggered

- Win-back emails queued: **0**. No lifecycle-email queue/send endpoint exists, and inactive users cannot be identified safely.
- Re-engagement nudges sent: **0**. Suppressed rather than emailing a guessed segment.
- Send-ready drafts: [churn-interventions-2026-10-12.md](../email/churn-interventions-2026-10-12.md)
- Win-back handoff: [win-back-email-content-2026-10-12.md](../email/win-back-email-content-2026-10-12.md)

### Psychology-Driven Micro-Optimization

**Principle:** Endowment effect, reinforced by commitment and consistency.

**Where:** First-save confirmation and the returning-user dashboard.

**Exact copy/UX change:**

> Saved to **your ticket list**: {{event_name}} on {{event_date}} at {{venue}}. Review onsale timing, venue tips, and buying links whenever you’re ready.

Primary CTA: **Review your saved event**. Secondary CTA: **Find another event**. Add: “You can remove it anytime.”

**Expected impact:** Hypothesis: improve first-save completion and repeat dashboard visits by making the saved item tangible while reducing perceived commitment. Measure signup → first save, first save → list review, and seven-day return after funnel instrumentation.

Detail: [psychology-optimization-2026-10-12.md](psychology-optimization-2026-10-12.md)

### Measurement Blockers

- `/api/admin/alerts` returned HTTP 500 with `{ success: false, error: "Failed to get alerts" }`.
- `/api/admin/activity` exposes signup, watchlist, and newsletter events only; it has no visit, login, search, compare, email-open, or email-click events.
- `/api/admin/drip-stats` returned an empty send-statistics array and 20 pending users with `last_email_sent: 0`.
- Current stats also report 0 active target-price alerts and 0 triggered alerts; because price tracking is down, these values must not be used as retention or alert-engagement evidence.
