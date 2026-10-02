## Growth Daily — 2026-10-02

Snapshot pulled from the production admin API on 2026-10-02. The requested `churn-prevention` and `marketing-psychology` skills are not installed in this environment; equivalent frameworks were applied manually. The API exposes signup and watchlist data, but not last-visit, email-click, or unsubscribe-event telemetry.

### User Health

| Segment | Count | % of Total | vs Yesterday |
|---|---:|---:|---|
| New (last 7 days) | 8 | 3.0% | +1 |
| Activated (has watchlist) | 153 | 58.2% | +1 |
| Active (visited in 7 days) | N/A | N/A | Not instrumented |
| At-risk (no visit 7–14d) | N/A | N/A | Not instrumented |
| Churned (no visit 14d+) | N/A | N/A | Not instrumented |

Total registered users: **263**. “Activated” means a user has at least one watchlist row; it does not prove recent activity. The stats endpoint reports **255** watchlist items, **0** active target-price alerts, and **0** triggered alerts.

### Activation Gap

- **5** users signed up in the last 7 days with 0 watchlist items; **3** activated.
- Cohort activation rate: **37.5%**; gap rate: **62.5%**.
- Gap users are internal IDs **262, 261, 259, 258, and 256**. No outbound message was sent: there is no approved re-engagement send endpoint.
- Top reasons: not determinable. Search history, onboarding completion, event-result quality, and bounce data are not exposed by the admin API.

### Churn Signals

- Unsubscribes in the last 24 hours: **0 observed**. All 6 newsletter records returned by `/api/admin/newsletter` are active; the endpoint does not expose an unsubscribe event stream.
- Users entering “at-risk” today: **N/A**; no login or last-visit timestamp exists.
- Alert-fatigue candidates: **N/A**; `/api/admin/alerts` still returns HTTP 500, and alert delivery/click telemetry is not exposed. The aggregate reports 0 triggered alerts.

### Actions Triggered

- Win-back emails queued: **0**. Send-ready, product-status-compliant templates are in [churn-interventions-2026-10-02.md](churn-interventions-2026-10-02.md).
- Re-engagement nudges sent: **0**. No approved send endpoint or measurable inactive-user segment is available.
- Psychology recommendation: [psychology-optimization-2026-10-02.md](psychology-optimization-2026-10-02.md).

### CRO and Email Handoffs

- **CRO Agent:** five-user activation gap; add a post-signup empty-watchlist state that points users to event discovery and instrument the first-watchlist funnel. Details: [cro-handoff-2026-10-02.md](cro-handoff-2026-10-02.md).
- **Email Agent:** use the compliant tiered templates only after last-visit, consent, bounce, delivery, and click data are available. Details: [churn-interventions-2026-10-02.md](churn-interventions-2026-10-02.md).

### Engineering Follow-ups

1. Add privacy-safe `last_seen_at` or activity events to make active, at-risk, and churned segments measurable.
2. Fix `/api/admin/alerts` and add delivery/open/click tracking.
3. Add a daily metric snapshot so “vs Yesterday” is stored rather than manually compared.
4. Add an approved lifecycle-email queue with consent, suppression, and audit logging.
