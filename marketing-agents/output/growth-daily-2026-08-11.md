## Growth Daily — 2026-08-11

Snapshot pulled from the live admin API at 2026-08-11 11:00 UTC. The requested `churn-prevention` and `marketing-psychology` skills are not installed, so the specified tier framework and principles were applied manually.

### User Health

| Segment | Count | % of Total | vs Yesterday |
|---|---:|---:|---|
| New (last 7 days) | 8 | 3.9% | 0 |
| Activated (has watchlist) | 122 | 59.5% | +1 |
| Active (visited in 7 days) | n/a | n/a | Not tracked |
| At-risk (no visit 7–14d) | n/a | n/a | Not tracked |
| Churned (no visit 14d+) | n/a | n/a | Not tracked |

The platform reports 205 registered users and 207 watchlist rows. “Activated” means the user has at least one watchlist row; it does not prove a recent visit.

### Activation Gap

- **2** users signed up in the last 7 days with 0 watchlist items (**25.0%** of the new-user cohort); 6 of 8 activated.
- Gap users for the CRO handoff: `patsfancdn@gmail.com` and `gemmaba1991@gmail.com`.
- Top reason: not determinable. The current API has no search, onboarding-step, bounce, or last-seen events.

### Churn Signals

- Unsubscribes in the last 24 hours: **0 observed**. The newsletter endpoint returned 4 active subscribers and no recent unsubscribe record; this is not a complete unsubscribe audit.
- Users entering “at-risk” today: **n/a**. No login or last-visit field exists.
- Alert-fatigue candidates: **n/a**. `/api/admin/alerts?limit=10000` returned HTTP 500; alert delivery/open/click telemetry is not exposed. Stats show 0 active target-price alerts and 0 triggered alerts, but that cannot establish engagement.
- Signup-age watchlist proxy, **not churn**: 1 latest watchlist add is 7–10 days old, 3 are 10–14 days old, and 112 are 14+ days old. These must not be emailed as churn cohorts without last-seen data.

### Actions Triggered

- Win-back emails queued: **0**. No supported win-back send/queue endpoint exists; intervention copy is prepared in `churn-interventions-2026-08-11.md`.
- Re-engagement nudges sent: **0**. No safe audience predicate or send endpoint is available.
- Activation-gap handoff: **2 users** to Agent 6; see `cro-handoff-2026-08-11.md`.
- Win-back copy handoff: see `email-handoff-2026-08-11.md` for Agent 5.

### Psychology-Driven Micro-Optimization

Recommendation: **Commitment and consistency** on the post-signup empty-watchlist state.

Exact copy:

> You’re one event away from your first price alert. Track a game, concert, or show and we’ll keep watch while ticket prices do their usual little dance.

Primary CTA: **Find an event to track**

Progress cue: `Account created ✓ → Pick an event → Set your price ceiling`

Expected impact: make the next action concrete and reduce the 25.0% activation gap. Validate with `watchlist_add / signup_complete`; initial target is to move cohort activation from 75.0% toward 85%+.

### Data Sources / Limitations

- `/api/admin/stats`: 205 users, 8 users this week, 207 watchlist items, 0 active target-price alerts, 0 triggered alerts, 4 active subscribers.
- `/api/admin/users?limit=10000`: complete user list with signup time and watchlist counts.
- `/api/admin/watchlist?limit=10000`: 207 watchlist rows with event timestamps.
- `/api/admin/newsletter?limit=10000`: 4 subscriber rows; no recent unsubscribe record.
- `/api/admin/alerts?limit=10000`: HTTP 500, `Failed to get alerts`.
- `/api/admin/drip-stats`: 0 sent-stat rows; pending users are endpoint-capped.

