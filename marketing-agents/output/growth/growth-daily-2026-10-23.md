## Growth Daily — 2026-10-23

Production snapshot pulled from the deployed admin API on 2026-10-23. Percentages use 267 registered users. The requested `churn-prevention` and `marketing-psychology` skills are not installed in this workspace; equivalent retention and behavioral frameworks were applied manually. Product-status restrictions are in force.

### User Health

| Segment | Count | % of Total | vs Yesterday |
|---|---:|---:|---:|
| New (last 7 days) | 1 | 0.4% | 0 |
| Activated (has saved event) | 153 | 57.3% | 0 |
| Active (visited in 7 days) | unavailable | — | No visit data exposed |
| At-risk (no visit 7–14d) | unavailable | — | No visit data exposed |
| Churned (no visit 14d+) | unavailable | — | No visit data exposed |

“Activated” means at least one saved-event row exists; it does not prove a recent visit or engagement.

### Activation Gap

- **1** user signed up in the last 7 days and has 0 saved events (**100%** of this cohort).
- Across the full user base, **114/267 (42.7%)** have no saved event; **153/267 (57.3%)** have at least one.
- Top reasons: **not determinable**. Search history, onboarding completion, event-result quality, and bounce data are not exposed by the admin API.
- CRO handoff: [activation-gap-2026-10-23.md](activation-gap-2026-10-23.md)

### Churn Signals

- Unsubscribes in the last 24 hours: **0 observed**. All 7 newsletter records are active; no unsubscribe-event audit exists, so this is not proof that no unsubscribe occurred.
- Users entering “at-risk” today: **unavailable**; no `last_login_at`, `last_seen_at`, or visit event exists.
- Alert-fatigue candidates: **unavailable**. `/api/admin/alerts` returned HTTP 500, and email delivery/open/click telemetry is absent. The aggregate reports 0 active target-price rows and 0 triggered alerts, but those values are not engagement evidence while price tracking is down.

### Actions Triggered

- Win-back emails queued: **0**.
- Re-engagement nudges sent: **0**.
- Reason: no lifecycle-email queue/send endpoint, no verified inactive-user segment, and no safe delivery/suppression audit.
- Compliant intervention drafts: [churn-interventions-2026-10-23.md](churn-interventions-2026-10-23.md)
- Email-agent handoff: [email-agent-winback-2026-10-23.md](email-agent-winback-2026-10-23.md)

### Psychology-Driven Micro-Optimization

**Principle:** Endowment effect, reinforced by commitment and consistency.

**Where:** First-save confirmation and the returning-user dashboard.

**Exact copy/UX change:**

> Saved to **your ticket list**: {{event_name}} on {{event_date}} at {{venue}}. Review onsale timing, venue tips, and buying links whenever you’re ready.

Primary CTA: **Review your saved event**. Secondary CTA: **Find another event**. Add: “You can remove it anytime.”

**Expected impact:** Hypothesis: improve first-save completion and repeat dashboard visits by making the saved item tangible while reducing perceived commitment. Measure signup → first save, first save → list review, and seven-day return after funnel instrumentation.

Detail: [psychology-optimization-2026-10-23.md](psychology-optimization-2026-10-23.md)

### Measurement Blockers

- `/api/admin/alerts` returned HTTP 500 (`Failed to get alerts`).
- `/api/admin/activity` exposes signup, saved-event, and newsletter events only; it has no visit, login, search, compare, email-open, or email-click events.
- `/api/admin/drip-stats` returned no sent-statistics rows and 20 pending users; do not trigger the existing drip while its copy contains unavailable product claims.
- Add `last_seen_at`, email delivery/open/click/unsubscribe attribution, daily metric snapshots, and an idempotent lifecycle-email queue with suppression and audit logging.
