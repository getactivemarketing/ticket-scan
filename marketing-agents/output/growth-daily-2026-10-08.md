## Growth Daily — 2026-10-08

Snapshot pulled from the production admin API on 2026-10-08. The requested `churn-prevention` and `marketing-psychology` skills are not available in this environment; equivalent frameworks were applied manually. The product-status restriction is in force, so this report does not claim price tracking, price history, alerts, or price movement.

### User Health

| Segment | Count | % of Total | vs Yesterday |
|---|---:|---:|---|
| New (Oct 1–8) | 3 | 1.1% | Baseline unavailable |
| Activated (has watchlist) | 153 | 58.0% | Baseline unavailable |
| Active (visited in 7 days) | N/A | N/A | Not instrumented |
| At-risk (no visit 7–14d) | N/A | N/A | Not instrumented |
| Churned (no visit 14d+) | N/A | N/A | Not instrumented |

Total registered users: **264**. “Activated” means at least one watchlist row exists; it does not prove recent activity. The API reports **256** total watchlist items, **0** rows with a target price, and **0** triggered alerts.

### Activation Gap

- **2** of the **3** users who signed up during the Oct 1–8 window have 0 watchlist items.
- Cohort activation rate: **33.3%**; activation gap: **66.7%**.
- Reasons are not determinable: search history, onboarding completion, event-result quality, and bounce data are not exposed by the admin API.
- No outbound message was sent. There is no approved lifecycle-email queue or scoped re-engagement endpoint.

### Churn Signals

- Unsubscribes in the last 24 hours: **0 observed**. All 6 newsletter records are active, but the API does not expose a complete unsubscribe-event stream.
- Users entering “at-risk” today: **N/A**; no `last_login_at`, `last_seen_at`, or equivalent visit signal exists.
- Alert-fatigue candidates: **N/A**; `/api/admin/alerts` still returns HTTP 500 and delivery/open/click telemetry is unavailable. The aggregate reports 0 triggered alerts.

### Actions Triggered

- Win-back emails queued: **0**.
- Re-engagement nudges sent: **0**.
- Draft intervention copy: [email/churn-interventions-2026-10-08.md](email/churn-interventions-2026-10-08.md)
- Psychology recommendation: [psychology-optimization-2026-10-08.md](psychology-optimization-2026-10-08.md)

### Handoffs

- **CRO Agent:** [cro-handoff-2026-10-08.md](cro-handoff-2026-10-08.md) — two-user activation gap; improve the post-signup path to the first saved event and instrument it.
- **Email Agent:** [email/churn-interventions-2026-10-08.md](email/churn-interventions-2026-10-08.md) — compliant, send-ready drafts, blocked pending last-seen, consent/suppression, and delivery telemetry.

### Engineering Follow-ups

1. Add privacy-safe `last_seen_at` or activity events.
2. Fix `/api/admin/alerts` and add email delivery/open/click/unsubscribe attribution.
3. Add an idempotent lifecycle-email queue with suppression and audit logging.
4. Store daily metric snapshots so “vs Yesterday” is evidence-based.
