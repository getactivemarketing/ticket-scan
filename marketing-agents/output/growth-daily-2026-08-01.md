## Growth Daily — 2026-08-01

Snapshot pulled from the production admin API at 2026-08-01 11:00 UTC. The requested `churn-prevention` and `marketing-psychology` skills are not installed; their frameworks were applied manually. Percentages use 196 registered users unless noted.

### User Health

| Segment | Count | % of Total | vs Yesterday |
|---|---:|---:|---|
| New (last 7 days) | 13 | 6.6% | 0 |
| Activated (has watchlist) | 115 | 58.7% | +1 |
| Active (visited in 7 days) | N/A | N/A | Not instrumented |
| At-risk (no visit 7–14d) | N/A | N/A | Not instrumented |
| Churned (no visit 14d+) | N/A | N/A | Not instrumented |

The platform reports 199 watchlist rows. “Activated” means the user has at least one watchlist row; it does not prove a recent visit.

### Activation Gap

- **5** users signed up in the last 7 days with 0 watchlist items; **8** activated.
- Cohort activation rate: **61.5%**; gap rate: **38.5%**.
- Gap users: `alexalcole@gmail.com`, `dbrenterprises1@gmail.com`, `dlosie@me.com`, `joshuamichaelchambers@gmail.com`, `travis.hurdelbrink@gmail.com`.
- Top reasons: not determinable. Current admin data does not include search, onboarding-step, or bounce events.

### Churn Signals

- Unsubscribes in the last 24 hours: **0 observed** in `/api/admin/newsletter`.
- Users entering “at-risk” today: **N/A**; no login or last-visit timestamp exists.
- Alert-fatigue candidates: **N/A**; alert delivery/click events are not exposed and `/api/admin/alerts` currently returns HTTP 500. Platform aggregate reports 0 triggered alerts.
- Watchlist-age proxy only: 7 users’ latest watchlist add is 7–14 days old; 100 is older than 14 days. These are **not churn counts**.

### Actions Triggered

- Win-back emails queued: **0**. Personalized tiered copy is prepared in `churn-interventions-2026-08-01.md`; no approved win-back email endpoint exists.
- Re-engagement nudges sent: **0**. Engagement timestamps and a send endpoint are unavailable.
- Psychology recommendation: in `psychology-optimization-2026-08-01.md`.

### CRO and Email Handoffs

- **CRO Agent:** 5-user activation gap; use a post-signup “Track your first event” state and instrument the first-watchlist-add funnel. Details: `cro-handoff-2026-08-01.md`.
- **Email Agent:** use the tiered intervention templates only after last-visit, price-history, unsubscribe, bounce, and delivery/click data are available. Details: `churn-interventions-2026-08-01.md`.

### Engineering Follow-ups

1. Add privacy-safe `last_seen_at` or activity events to make active, at-risk, and churned segments measurable.
2. Fix `/api/admin/alerts` HTTP 500 and add alert delivery/open/click tracking.
3. Add a daily metric snapshot so “vs Yesterday” is based on stored snapshots rather than prior reports.
