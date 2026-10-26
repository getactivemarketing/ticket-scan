## Growth Daily — 2026-10-26

Production snapshot pulled from the deployed admin API on 2026-10-26. Percentages use 268 registered users. The requested `churn-prevention` and `marketing-psychology` skills are not installed in this workspace; equivalent retention and behavioral frameworks were applied manually. Product-status restrictions are in force.

### User Health

| Segment | Count | % of Total | vs Yesterday |
|---|---:|---:|---:|
| New (last 7 days) | 2 | 0.7% | — (no 2026-10-25 snapshot) |
| Activated (has saved event) | 154 | 57.5% | — (no 2026-10-25 snapshot) |
| Active (visited in 7 days) | unavailable | — | Visit data not exposed |
| At-risk (no visit 7–14d) | unavailable | — | Visit data not exposed |
| Churned (no visit 14d+) | unavailable | — | Visit data not exposed |

“Activated” means at least one saved-event row exists. It does not prove a recent visit or engagement. The last available report, 2026-10-23, recorded 267 users and 153 activated users; today is +1 in each measure, but this is not a yesterday comparison.

### Activation Gap

- **1** user signed up in the last 7 days and has 0 saved events (**50%** of this cohort).
- **1** of 2 new users has saved an event.
- Across the full user base, **114/268 (42.5%)** have no saved event; **154/268 (57.5%)** have at least one.
- Top reasons: **not determinable**. Search history, onboarding completion, event-result quality, and bounce data are not exposed by the admin API.
- CRO handoff: [activation-gap-2026-10-26.md](activation-gap-2026-10-26.md)

### Churn Signals

- Unsubscribes in the last 24 hours: **0 observed**. All 7 newsletter records are active; no unsubscribe-event audit exists, so this is not proof that no unsubscribe occurred.
- Users entering “at-risk” today: **unavailable**; no `last_login_at`, `last_seen_at`, or visit event exists.
- Alert-fatigue candidates: **unavailable**. `/api/admin/alerts` returned `{"success":false,"error":"Failed to get alerts"}`. The aggregate reports 0 active target-price rows and 0 triggered alerts, but those values are not engagement evidence while price tracking is down.

### Actions Triggered

- Win-back emails queued: **0**.
- Re-engagement nudges sent: **0**.
- Reason: no lifecycle-email queue/send endpoint, no verified inactive-user segment, and no safe delivery/suppression audit. The existing drip has no sent-statistics rows and 20 pending users; 18 of those are at least 7 days old. It was not triggered because its existing campaign copy references unavailable product functionality.
- Compliant intervention drafts: [churn-interventions-2026-10-26.md](churn-interventions-2026-10-26.md)
- Email-agent handoff: [email-agent-winback-2026-10-26.md](email-agent-winback-2026-10-26.md)

### Psychology-Driven Micro-Optimization

**Principle:** Endowment effect, reinforced by commitment and consistency.

**Where:** First-save confirmation and the returning-user dashboard.

**Exact copy/UX change:**

> Saved to **your ticket list**: {{event_name}} on {{event_date}} at {{venue}}. Review onsale timing, venue tips, and purchase links whenever you’re ready.

Primary CTA: **Review your saved event**. Secondary CTA: **Find another event**. Add: “You can remove it anytime.”

**Expected impact:** Hypothesis: improve first-save completion and repeat dashboard visits by making the saved item tangible while reducing perceived commitment. Measure signup → first save, first save → list review, and seven-day return after funnel instrumentation.

Detail: [psychology-optimization-2026-10-26.md](psychology-optimization-2026-10-26.md)

### Measurement Blockers

- `/api/admin/alerts` returned HTTP 500.
- `/api/admin/activity` exposes signup, saved-event, and newsletter events only; it has no visit, login, search, compare, email-open, or email-click events.
- `/api/admin/drip-stats` returned no sent-statistics rows and 20 pending users.
- Add `last_seen_at`, email delivery/open/click/bounce/complaint/unsubscribe attribution, daily metric snapshots, and an idempotent lifecycle-email queue with suppression and audit logging.
