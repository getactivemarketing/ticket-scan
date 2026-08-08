## Growth Daily — 2026-08-08

Snapshot pulled from the production admin API on 2026-08-08. The requested `churn-prevention` and `marketing-psychology` skills are not installed; their frameworks were applied manually. Percentages use 202 registered users unless noted.

### User Health

| Segment | Count | % of Total | vs Yesterday |
|---|---:|---:|---|
| New (last 7 days; API rolling counter) | 6 | 3.0% | +1 |
| Activated (has watchlist) | 120 | 59.4% | +1 |
| Active (visited in 7 days) | N/A | N/A | Visit telemetry unavailable |
| At-risk (no visit 7–14d) | N/A | N/A | Visit telemetry unavailable |
| Churned (no visit 14d+) | N/A | N/A | Visit telemetry unavailable |

The platform reports 204 watchlist rows. “Activated” means the user has at least one watchlist row; it does not prove a recent visit. The six-user current cohort is based on the API’s rolling `usersThisWeek` value and returned user timestamps.

### Activation Gap

- **1** user signed up in the last 7 days with 0 watchlist items; **5** activated.
- Cohort activation rate: **83.3%**; gap rate: **16.7%**.
- Gap user: `gemmaba1991@gmail.com`.
- Top reason: not determinable. Search, onboarding-step, and bounce events are not exposed.
- Historical opportunity: **82 of 202** users have no watchlist item (40.6%); this is not a current-week churn measure.

### Churn Signals

- Unsubscribes in the last 24 hours: **0 observed** in `/api/admin/newsletter`; 4 total subscribers are currently active.
- Users entering “at-risk” today: **N/A** — no last-visit or login timestamp.
- Alert-fatigue candidates: **N/A** — alert delivery/click data is not exposed. Active target-price alerts and triggered alerts both report 0; `/api/admin/alerts` still returns HTTP 500.

### Churn Intervention Queue

- Win-back emails queued: **0** — no last-visit eligibility data and no approved send endpoint.
- Re-engagement nudges sent: **0** — same constraint.
- Tiered email drafts and timing are in `churn-interventions-2026-08-08.md` for Email Agent review.

### Psychology-Driven Micro-Optimization

Recommendation is in `psychology-optimization-2026-08-08.md`: use commitment/consistency in the post-registration empty-watchlist state with the copy “You’re 1 step from your first price alert.”

### Handoffs

- **CRO Agent:** 1-user current activation gap plus the broader 82-user no-watchlist population; see `cro-handoff-2026-08-08.md`.
- **Email Agent:** tiered intervention copy, timing, and suppression guidance; see `email-handoff-2026-08-08.md`.

### Measurement Gaps

1. Add privacy-safe `last_seen_at` or equivalent authenticated activity timestamp.
2. Log alert delivery, open/click, and unsubscribe events.
3. Repair `/api/admin/alerts` and expose a consent-safe, individually reviewed intervention-send action.
4. Persist daily metric snapshots so all “vs Yesterday” values are API-backed.
