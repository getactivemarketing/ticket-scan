## Growth Daily — 2026-07-31

Snapshot pulled from the production admin API on 2026-07-31. Percentages use 195 registered users unless noted. The requested `churn-prevention` and `marketing-psychology` skills are not installed; their frameworks were applied manually.

### User Health

| Segment | Count | % of Total | vs Yesterday |
|---|---:|---:|---|
| New (last 7 days) | 13 | 6.7% | N/A — no prior growth snapshot |
| Activated (has watchlist) | 114 | 58.5% | N/A — current-state API only |
| Active (visited in 7 days) | N/A | N/A | Not instrumented: no login/visit timestamp |
| At-risk (no visit 7–14d) | N/A | N/A | Not instrumented |
| Churned (no visit 14d+) | N/A | N/A | Not instrumented |

The API reports 198 watchlist rows and 114 distinct users with at least one watchlist item. This is activation, not proof of recent engagement.

### Activation Gap

- **5** users signed up in the last 7 calendar days with 0 watchlist items; **8** activated.
- Activation rate for the cohort: **61.5%**.
- Top reasons: not determinable from current events. The API has no signup funnel, search-result, or bounce reason data.
- CRO handoff: prioritize a post-signup “Track your first event” step with a one-click return to search and a visible “1 step from your first alert” progress cue.

### Churn Signals

- Unsubscribes today: **0** observed in `/api/admin/newsletter`.
- Users entering at-risk today: **N/A**; last-visit/login data is not available.
- Alert-fatigue candidates: **N/A**; `/api/admin/alerts?limit=10000` returned HTTP 500 and click-through events are not exposed.
- Watchlist-age proxy only: 6 users’ latest watchlist add falls in the 7–14 day window, and 99 falls before 14 days. These are **not churn counts** without visit data.

### Actions Triggered

- Win-back emails queued: **0 sends**. Three personalized templates are prepared in `churn-interventions-2026-07-31.md`; no win-back endpoint exists in the supplied admin API.
- Re-engagement nudges sent: **0 sends**. Sending requires an approved email job/endpoint and engagement timestamps.
- Social posts: none; this task produced retention assets, not a social campaign.

### Data Quality / Next Engineering Fixes

1. Fix `/api/admin/alerts` (HTTP 500) and add a regression test.
2. Record `last_seen_at` or a privacy-safe activity event so at-risk/churn segments can be calculated directly.
3. Add email delivery, open, click, unsubscribe, and alert-click events. Until then, alert fatigue and click-through cannot be measured.
4. Add a daily metric snapshot so “vs Yesterday” and 7-day trend comparisons are real, not reconstructed.

### Handoffs

- **CRO Agent:** 5-user activation gap; recommendation is in the CRO handoff section below and in `cro-handoff-2026-07-31.md`.
- **Email Agent:** tiered intervention copy is in `churn-interventions-2026-07-31.md`.
- **Psychology recommendation:** `psychology-optimization-2026-07-31.md`.

