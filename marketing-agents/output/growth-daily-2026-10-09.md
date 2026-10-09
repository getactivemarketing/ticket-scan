## Growth Daily — 2026-10-09

Snapshot pulled from the production admin API on 2026-10-09. The requested `churn-prevention` and `marketing-psychology` skills are not available in this environment; equivalent retention and behavioral frameworks were applied manually. The product-status restriction is in force: this report does not claim price tracking, price history, alerts, price movement, or buy/wait recommendations.

### User Health

| Segment | Count | % of Total | vs Yesterday |
|---|---:|---:|---|
| New (last 7 days) | 1 | 0.4% | -2 |
| Activated (has watchlist) | 153 | 58.0% | 0 |
| Active (visited in 7 days) | N/A | N/A | Not instrumented |
| At-risk (no visit 7–14d) | N/A | N/A | Not instrumented |
| Churned (no visit 14d+) | N/A | N/A | Not instrumented |

Total registered users: **264**. “Activated” means the user has at least one watchlist row; it does not prove recent activity. The API reports **256** total watchlist items, **0** rows with a target price, and **0** triggered alerts.

The new-user window is the API’s rolling seven-day window, with one signup since 2026-10-02 00:00 UTC. The prior report recorded three new users, so today’s count is down by two.

### Activation Gap

- **1** user signed up in the last seven days and has 0 watchlist items.
- Cohort activation rate: **0.0%**; activation gap: **100.0%**.
- Top reason: **not determinable**. The admin API exposes signup and watchlist-add records, but not search history, onboarding completion, event-result quality, or bounce data.
- No activation email was sent. There is no approved lifecycle-email queue or scoped re-engagement endpoint.

### Churn Signals

- Unsubscribes in the last 24 hours: **0 observed**. All 6 newsletter records are active, but the API does not expose a complete unsubscribe-event stream.
- Users entering “at-risk” today: **N/A**; no `last_login_at`, `last_seen_at`, or equivalent visit signal exists.
- Alert-fatigue candidates: **N/A**; `/api/admin/alerts` still returns HTTP 500, and delivery/open/click telemetry is unavailable. The aggregate reports 0 triggered alerts.

### Actions Triggered

- Win-back emails queued: **0**.
- Re-engagement nudges sent: **0**.
- Draft intervention copy: [email/churn-interventions-2026-10-09.md](email/churn-interventions-2026-10-09.md)
- Psychology recommendation: [psychology-optimization-2026-10-09.md](psychology-optimization-2026-10-09.md)

### Handoffs

- CRO Agent: [cro-handoff-2026-10-09.md](cro-handoff-2026-10-09.md) — one-user activation gap; improve the post-signup path to the first saved event and instrument it.
- Email Agent: [email/churn-interventions-2026-10-09.md](email/churn-interventions-2026-10-09.md) — compliant drafts, blocked pending last-seen data, consent/suppression checks, and delivery telemetry.

### Engineering Follow-ups

1. Add privacy-safe `last_seen_at` or activity events so at-risk and churned cohorts can be identified.
2. Fix `/api/admin/alerts` and add email delivery/open/click/unsubscribe attribution.
3. Add an idempotent lifecycle-email queue with suppression and audit logging.
4. Store daily metric snapshots so “vs Yesterday” is evidence-based rather than dependent on the prior report.
