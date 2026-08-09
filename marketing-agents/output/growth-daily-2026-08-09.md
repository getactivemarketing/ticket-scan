## Growth Daily — 2026-08-09

Data checked: 2026-08-09, using the live admin API. Cohort windows use UTC signup timestamps. The API exposes signup time and watchlist counts, but not last-login timestamps; therefore inactivity segments below are signup-age/watchlist proxies, not confirmed visit behavior.

### User Health

| Segment | Count | % of Total | vs Yesterday |
|---|---:|---:|---:|
| New (last 7 days) | 7 | 3.4% | N/A — no prior snapshot available |
| Activated (has watchlist) | 121 | 59.6% | N/A — all-user count, no prior snapshot |
| Active (visited in 7 days) | Unknown | Unknown | Not tracked by admin API |
| At-risk (no visit 7–14d; proxy: signed up 7–14d with watchlist) | 7 | 3.4% | N/A |
| Churned (no visit 14d+; proxy: signed up 14d+ with watchlist) | 108 | 53.2% | N/A |

Additional baseline: 82 of 203 users have no watchlist items (40.4%); 206 total watchlist items; 4 active newsletter subscribers.

### Activation Gap

- **1** user signed up in the last 7 days with 0 watchlist items (14.3% of new users).
- **6/7** new users have activated via watchlist (85.7%).
- Most likely fix: show a one-step “Find an event to track” prompt immediately after signup, with popular nearby/event-category shortcuts. The data cannot determine whether the gap came from no interesting events, feature confusion, or an immediate bounce.

### Churn Signals

- Unsubscribes today: **0 confirmed**. The newsletter endpoint returned 4 active subscribers and no unsubscribe in the available records.
- Users entering at-risk today: **not determinable from visit data**. Signup-age/watchlist proxy: 7.
- Alert fatigue candidates: **0 confirmed**. `/api/admin/alerts` returned `success:false`, while `/api/admin/stats` reports 0 triggered alerts; alert history/click data is not currently verifiable.
- Important instrumentation gap: persist `last_seen_at`, alert delivery, and alert click events before treating these segments as operational truth.

### Actions Triggered

- Win-back emails queued: **0 sent / 0 queued through API**. No win-back endpoint exists, and no send was attempted without a supported route.
- Re-engagement nudges sent: **0**.
- Intervention queue prepared: **115 watchlist users** grouped by signup-age proxy: Tier 1 = 3, Tier 2 = 4, Tier 3 = 108. See [growth-churn-queue-2026-08-09.md](growth-churn-queue-2026-08-09.md).
- The current drip system has 5 scheduled emails, but `/api/admin/drip-stats` reports no sent-email stats; avoid stacking a win-back message until suppression and delivery tracking are available.

### Psychology-Driven Micro-Optimization

**Principle:** Commitment and consistency.

**Where:** post-signup onboarding and the empty watchlist state.

**Exact UX copy:**

> You’re one event away from your first price alert. Track a game, concert, or show and we’ll keep watch while ticket prices do their usual little dance.

Button: **Find an event to track**

Add a three-step progress cue: `Account created → Pick an event → Set your price ceiling`. Keep the first step checked and make the second step the only primary action. Expected impact: reduce the new-user activation gap by making the next commitment concrete; validate with watchlist-add rate among new signups, targeting a lift from 85.7% to 90%+.

### Data Sources / Limitations

- `/api/admin/stats`: 203 users, 206 watchlist items, 0 active alerts, 0 triggered alerts, 4 active subscribers.
- `/api/admin/users?limit=500&offset=0`: complete 203-user result with signup timestamps and watchlist counts.
- `/api/admin/activity`: 20 most recent records, limited to signup/watchlist events; no login events.
- `/api/admin/alerts`: returned `success:false`; no alert history or click-through data was available.

