## Growth Daily — 2026-10-22

Snapshot pulled from the production admin API on 2026-10-22. The requested `churn-prevention` and `marketing-psychology` skills are not installed; equivalent frameworks were applied manually. Product-status restrictions are in force, so this report does not claim price tracking, price history, price movement, or working price alerts.

### User Health

| Segment | Count | % of Total | vs Yesterday |
|---|---:|---:|---|
| New (last 7 days) | 1 | 0.4% | 0 |
| Activated (has saved event) | 153 | 57.3% | 0 |
| Active (visited in 7 days) | unavailable | — | No visit data exposed |
| At-risk (no visit 7–14d) | unavailable | — | No visit data exposed |
| Churned (no visit 14d+) | unavailable | — | No visit data exposed |

Total registered users: **267**. There are **256** saved-event rows and **153** users with at least one saved event; **114** users have none. “Activated” means a saved-event row exists, not that the user is recently active.

### Activation Gap

- **1** user signed up in the last 7 days and has 0 saved events (**100%** of this cohort).
- The reason is not determinable: search history, onboarding completion, result quality, and bounce data are not exposed.
- CRO handoff: [activation-gap-2026-10-22.md](activation-gap-2026-10-22.md)

### Churn Signals

- Unsubscribes in the last 24 hours: **0 observed**. All 7 newsletter records returned by the API are active; this is not a complete unsubscribe-event stream.
- Users entering “at-risk” today: **unavailable**; no `last_login_at` or `last_seen_at` exists.
- Alert-fatigue candidates: **unavailable**. `/api/admin/alerts` still returns HTTP 500, and delivery/open/click telemetry is absent. The aggregate reports 0 target-price rows and 0 triggered alerts; do not interpret that as engagement evidence.

### Actions Triggered

- Win-back emails queued: **0**.
- Re-engagement nudges sent: **0**.
- Drip runner: **not called**; existing drip copy includes disabled product claims and there is no safe suppression/delivery audit.
- Intervention drafts: [email-agent-winback-2026-10-22.md](email-agent-winback-2026-10-22.md)
- Psychology recommendation: [psychology-optimization-2026-10-22.md](psychology-optimization-2026-10-22.md)

### Handoffs

- **CRO Agent:** one-user activation gap; make saving an event the clear post-signup action and instrument signup → first saved event.
- **Email Agent:** use the compliant intervention drafts only after last-seen, consent/suppression, idempotency, and delivery tracking exist.

### Engineering Follow-ups

1. Add privacy-safe `last_seen_at` or equivalent activity events.
2. Add delivery, open, click, and unsubscribe attribution.
3. Fix `/api/admin/alerts`.
4. Add an idempotent lifecycle-email queue with suppression and audit logging.
5. Store daily metric snapshots so “vs yesterday” is evidence-based.
