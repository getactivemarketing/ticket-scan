# Growth Daily — 2026-06-07

**Data source:** live `/api/admin/{stats,users,watchlist,activity,drip-stats,alerts}` pulled 2026-06-07. All figures below are from that pull — nothing modeled or estimated.

## Data caveats (read first)
- **No `last_login` / visit timestamp exists** in the schema. The user record exposes only `id, email, created_at, watchlist_count, alerts_count, favorites_count`. **Active / at-risk / churned-by-visit segments cannot be computed and are not reported.** (Do not invent them — see prior agent spiral.)
- **`/api/admin/users` returns only the 50 most-recent users** (totalUsers = 107). All-time activation-gap counts below are over that 50-row sample; new-cohort counts are complete because all 14 of this week's signups fall inside the sample.
- **`/api/admin/alerts` returns `{success:false,"Failed to get alerts"}`** — endpoint is broken, consistent with the platform-wide alert/price-history outage.

## User Health
| Segment                          | Count | Notes |
|----------------------------------|-------|-------|
| Total users                      | 107   | from stats |
| New (signed up ≤7 days)          | 14    | matches stats.usersThisWeek |
| New today                        | 2     | matches stats.usersToday |
| Activated (≥1 watchlist item)    | 28 of 50 returned | 132 watchlist items total |
| Active / At-risk / Churned       | — | **not measurable** (no last_login field) |
| Active subscribers (newsletter)  | 3     | of 3 total |
| Active price alerts (armed)      | **0** | structural failure — see below |
| Triggered alerts (ever)          | **0** | |

## Activation Gap
- **22 of the 50 returned users have 0 watchlist items.** Among the 14 who signed up this week, **4 have 0 watchlist items** (≈29% gap; conversely 10/14 = 71% activated, which is healthy).
- New-cohort users with 0 watchlist items:
  - mbhall99@icloud.com — joined 2026-06-05
  - belles_hayride_4b@icloud.com — joined 2026-06-03
  - doggycj6@gmail.com — joined 2026-06-02
  - griffin@griffinli.com — joined 2026-06-02
- Likely reason is not addressable from data (no event-search / bounce telemetry). Do not assert a cause.

## The real retention bottleneck (unchanged from prior days)
**Of 50 watchlist rows, 0 have a `target_price` set.** No targets → the price-alert loop has nothing to fire against → `activeAlerts = 0` and `triggeredAlerts = 0`. Adding more watchlist items does **not** improve retention while this link is severed. The single highest-leverage growth fix is making users set a target price, not driving more signups.

Supporting: drip campaign has sent **0 emails ever** (`drip-stats.stats = []`; every pending user shows `last_email_sent = 0`), so there is currently no automated re-engagement channel live either.

## Churn Signals
- Unsubscribes today: **0** (3 active of 3 total subscribers; none lost).
- Users entering "at-risk" today: **not measurable** (no last_login).
- Alert-fatigue candidates: **0** — impossible by construction (0 alerts have ever been sent).

## Actions Triggered
- Win-back / re-engagement emails queued: **0 — intentionally not sent.** The drip/email infrastructure has never delivered a message and the at-risk list cannot be computed; blind-triggering would risk blasting real inboxes (zachbirzon@gmail.com, etc.) with no targeting. **Held pending: (a) a working send path, (b) a last_login field to target on.** Content drafted below for when those exist.
- Re-engagement nudges sent: 0 (same dependency).

## Drafted win-back content (NOT sent — for Agent 5 / Email when infra is live)
- **Tier 3 subject (curiosity):** "Your Knicks tickets moved while you were gone"
- **Body skeleton:** "[Event] on your watchlist — here's where the price sits now. Set a target and we'll ping you the moment it drops." Requires per-user watchlist merge + a real price feed (currently null prices), so this is blocked on two upstream fixes, not ready to ship.

## Psychology-Driven Micro-Optimization (1 rec)
**Principle:** Commitment / consistency (+ goal-gradient / completion).

**Where:** The "Add to Watchlist" flow + the watchlist item row.

**Change:** When a user adds an item, immediately prompt **"Set your target price"** inline (default-suggest a value ~10–15% below the shown price), with a one-line progress cue: *"You're 1 step from your first price alert."* On the watchlist row, show an unfilled state: *"⚠ No target set — alerts off"* with a tap-to-set affordance.

**Why this one:** It is the only optimization that attacks the measured root cause (0/50 targets → 0 alerts). Every other psychology lever (scarcity, social proof, anchoring) optimizes a funnel step that dead-ends because the alert engine can't arm. Fix the commitment step and the entire retention loop (alert → email → return visit) becomes capable of firing for the first time.

**Expected impact:** Directly converts watchlist adds into armed alerts; turns a 0% alert-arm rate into a non-zero one. No conversion % is claimed because no funnel analytics exist to measure against.

## Handoffs
- **→ CRO (Agent 6):** Onboarding fix = inline target-price prompt on watchlist add. 22/50 users sit at 0 watchlist items; 0/50 set a target.
- **→ Email (Agent 5):** Win-back content is drafted but blocked on a working send path + real price data. Do not schedule until both exist.
