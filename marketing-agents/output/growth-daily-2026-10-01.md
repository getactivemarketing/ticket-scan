## Growth Daily — 2026-10-01

Snapshot pulled from the production admin API on 2026-10-01. The requested `churn-prevention` and `marketing-psychology` skills are not installed in this environment; their frameworks were applied manually. The API exposes signup and watchlist data, but not last-visit, email-click, or alert-delivery telemetry.

### User Health

| Segment | Count | % of Total | vs Yesterday |
|---|---:|---:|---|
| New (last 7 days) | 7 | 2.7% | Baseline unavailable |
| Activated (has watchlist) | 152 | 58.0% | Baseline unavailable |
| Active (visited in 7 days) | N/A | N/A | Not instrumented |
| At-risk (no visit 7–14d) | N/A | N/A | Not instrumented |
| Churned (no visit 14d+) | N/A | N/A | Not instrumented |

Total registered users: **262**. The activated count means a user has at least one watchlist row; it does not prove recent activity. The production stats endpoint reports 254 watchlist items and 0 active target-price alerts.

### Activation Gap

- **5** users signed up in the last 7 days with 0 watchlist items; **2** activated.
- Cohort activation rate: **28.6%**; gap rate: **71.4%**.
- Gap users are the five newest non-activated accounts (internal user IDs **262, 261, 259, 258, 256**). No outbound message was sent because no approved re-engagement send endpoint is available.
- Top reasons: not determinable. Search history, onboarding-step completion, event-result quality, and bounce data are not exposed by the admin API.

### Churn Signals

- Unsubscribes in the last 24 hours: **0 observed**. All 6 newsletter records returned by `/api/admin/newsletter` are active; the endpoint does not provide an unsubscribe event stream.
- Users entering “at-risk” today: **N/A**; no login or last-visit timestamp exists.
- Alert-fatigue candidates: **N/A**; `/api/admin/alerts` returned an error, alert delivery/click telemetry is not exposed, and the aggregate reports 0 triggered alerts.

### Actions Triggered

- Win-back emails queued: **0**. Tiered intervention copy is prepared in [churn-interventions-2026-10-01.md](churn-interventions-2026-10-01.md).
- Re-engagement nudges sent: **0**. No approved send endpoint or last-visit segment is available.
- Psychology recommendation: [psychology-optimization-2026-10-01.md](psychology-optimization-2026-10-01.md).

### CRO and Email Handoffs

- **CRO Agent:** 5-user activation gap; add a post-signup “Track your first event” state and instrument the first-watchlist-add funnel. Details: [cro-handoff-2026-10-01.md](cro-handoff-2026-10-01.md).
- **Email Agent:** use the tiered intervention templates only after last-visit, price movement, unsubscribe, bounce, and delivery/click data are available. Details: [churn-interventions-2026-10-01.md](churn-interventions-2026-10-01.md).

### Engineering Follow-ups

1. Add privacy-safe `last_seen_at` or activity events to make active, at-risk, and churned segments measurable.
2. Fix `/api/admin/alerts` and add alert delivery/open/click tracking.
3. Add a daily metric snapshot so “vs Yesterday” is based on stored data rather than manual report comparison.
