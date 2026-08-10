## Growth Daily — 2026-08-10

Data checked: 2026-08-10, from the live admin API. Signup and watchlist counts are measured. The API does not expose `last_login` or a general last-seen event, so visit-based activity, at-risk, and churn segments are **n/a**, not inferred from signup age.

### User Health

| Segment | Count | % of Total | vs Yesterday |
|---|---:|---:|---:|
| New (last 7 days) | 8 | 3.9% | +1 |
| Activated (has watchlist) | 121 | 59.3% | 0 |
| Active (visited in 7 days) | n/a | n/a | Not tracked |
| At-risk (no visit 7–14d) | n/a | n/a | Not tracked |
| Churned (no visit 14d+) | n/a | n/a | Not tracked |

Additional baseline: 83 of 204 users have no watchlist items (40.7%); 206 total watchlist items; 4 active newsletter subscribers; 0 active target-price alerts recorded by `/api/admin/stats`.

### Activation Gap

- **2** users signed up in the last 7 days with 0 watchlist items (**25.0%** of new users; +1 user vs yesterday’s snapshot).
- **6/8** new users activated through a watchlist (**75.0%**).
- The API cannot distinguish “no interesting events,” feature confusion, or an immediate bounce. The clearest CRO test is a post-signup event picker with category and location shortcuts, followed by one-click tracking.

### Churn Signals

- Unsubscribes in the last 24 hours: **0 confirmed**. The live newsletter response contains 4 active subscribers and no recent unsubscribe record.
- Users entering at-risk today: **n/a**. No last-visit or last-login field exists.
- Alert-fatigue candidates: **n/a**. `/api/admin/alerts` returned HTTP 500, and the API has no alert-click telemetry. Stats report 0 triggered alerts, but that is not a substitute for a working history query.
- Drip delivery signal: `/api/admin/drip-stats` returned 0 sent-stat rows; no new win-back send should be layered on top of this unverified email pipeline.

### Actions Triggered

- Win-back emails queued: **0 sent / 0 API-queued**. A copy queue for **115 signup-age proxy candidates** is prepared in [growth-churn-queue-2026-08-10.md](growth-churn-queue-2026-08-10.md): Tier 1 = 1, Tier 2 = 4, Tier 3 = 110.
- Re-engagement nudges sent: **0**. No supported win-back endpoint exists, and `drip-run` was not invoked because it can affect the full overdue cohort.
- Activation-gap handoff to CRO Agent (Agent 6): **2 users / 25.0% of the 7-day signup cohort**. Test the “pick an event” step and measure watchlist-add rate.
- Win-back copy handoff to Email Agent (Agent 5): templates and timing are in the queue file. Require suppression, last-seen data, verified price movement, and delivery/open/click tracking before sending.

### Psychology-Driven Micro-Optimization

**Principle:** Commitment and consistency.

**Where:** Post-signup onboarding and the empty-watchlist state.

**Exact UX copy:**

> You’re one event away from your first price alert. Track a game, concert, or show and we’ll keep watch while ticket prices do their usual little dance.

Primary button: **Find an event to track**

Progress cue: `Account created ✓ → Pick an event → Set your price ceiling`

Expected impact: reduce the activation gap by making the next commitment concrete. Validate against watchlist-add rate for new users; target an initial lift from 75.0% toward 85%+.

### Data Sources / Limitations

- `/api/admin/stats`: 204 users, 8 users this week, 206 watchlist items, 0 active alerts, 0 triggered alerts, 4 active subscribers.
- `/api/admin/users?limit=10000`: complete user result with signup time and watchlist counts.
- `/api/admin/watchlist?limit=10000`: 206 watchlist rows with signup-independent item timestamps.
- `/api/admin/newsletter?limit=10000`: 4 subscriber rows; no unsubscribe in the last 24 hours.
- `/api/admin/activity`: signup/watchlist activity only; no login events.
- `/api/admin/alerts?limit=10000`: HTTP 500, `Failed to get alerts`.
- `/api/admin/drip-stats`: 0 sent-stat rows; pending users are capped at 20 by the endpoint.

