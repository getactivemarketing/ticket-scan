# Growth Daily — 2026-06-12

**Agent 8: Growth & Retention** · All figures pulled live from admin API this run. Segments that require data the platform doesn't store are marked **n/a (not instrumented)** rather than estimated.

---

## User Health

| Metric                        | Today | vs Yesterday | Source |
|-------------------------------|-------|--------------|--------|
| Total users                   | 114   | +1           | stats.totalUsers |
| New (last 7 days)             | 10    | −3           | stats.usersThisWeek |
| New (today)                   | 1     | flat         | stats.usersToday |
| Watchlist items (total)       | 145   | flat (0 net) | stats.totalWatchlistItems |
| **Active price alerts**       | **0** | flat         | stats.activeAlerts |
| Triggered alerts (all-time)   | 0     | flat         | stats.triggeredAlerts |
| Newsletter subscribers        | 3     | flat         | stats.activeSubscribers |
| Favorites (all-time)          | 0     | flat         | stats.totalFavorites |

### Segments I cannot measure (and why)
| Segment                     | Status | Reason |
|-----------------------------|--------|--------|
| Active (visited in 7d)      | n/a    | No `last_login`/session column exists. Visit-based retention is uninstrumented. |
| At-risk (no visit 7–14d)    | n/a    | Same — no login timestamps. |
| Churned (no visit 14d+)     | n/a    | Same. |
| Alert fatigue (3+ alerts, 0 clicks) | n/a | 0 alerts have ever fired; no click tracking. Nothing to measure. |

> These were fabricated in past runs. They remain genuinely unmeasurable until a `last_login` column (or analytics events) is added. Not estimating them.

---

## Activation Gap (the part I *can* measure)

Activation — signup → first watchlist item — is **not** the bottleneck.

- **Last 7 days: 8 of 11 new signups added a watchlist item (73% activated).** 3 are still at 0 items:
  - `kellileeriach@yahoo.com` (signed up today — too early to count)
  - `dilanozusta@gmail.com` (2 days, 0 items)
  - `mbhall99@icloud.com` (7 days, 0 items)
- Among the 50 most-recent users (API caps the user list at 50), 30 are activated, 20 have 0 items. The genuine top-of-funnel activation rate is healthy.

The recent activation funnel works. The retention failure is **one step later**, and it is unchanged from yesterday.

---

## Churn Signals

- **Unsubscribes (24h): 0** — all 3 of 3 subscribers still active.
- **At-risk / churn entries today: n/a** — uninstrumented (see above).
- The real "churn" risk isn't visit-based — it's that **no retention loop has ever fired**:
  - **0 of 145 watchlist items have a `target_price` set** (verified: 0 of 50 sampled rows; `activeAlerts = 0` confirms it across all). Price alerts — the #1 reason-to-return — have never been able to arm.
  - **Drip campaign: 0 emails sent all-time** (`drip-stats.stats` is empty). **20 users are overdue** for an email they will never get under the current state.

Both designed retention mechanisms are inert. Users who signed up have no automated reason to come back.

---

## Actions Triggered

- Win-back emails queued: **0** — deliberately. Drip has delivered 0 emails ever; blind-triggering risks blasting real inboxes (kellileeriach, dilanozusta et al. are real addresses). This is a wiring fix, not a send-more problem. Do **not** trigger drip-run without confirming the send path is safe.
- Re-engagement nudges sent: **0** — no `last_login` data to target by, and no win-back template is live.
- The honest "action" today is the handoff below: fix the two dead loops before adding more interventions on top of them.

---

## Psychology-Driven Micro-Optimization (1 recommendation)

**Principle:** Commitment/Consistency + Endowment effect
**Where:** The "Add to Watchlist" success state (Next.js — watchlist add flow / EventCard CTA).
**The problem it solves:** 145 items watched, 0 with a target price → the alert engine is severed at the source. Users complete step 1 (add) and never do step 2 (set target), so they never receive the email that would bring them back.

**Exact change:** Immediately after an item is added, show an inline prompt instead of a passive toast:

> ✅ **Added to your watchlist.** You're **one step from your first price alert** — tell us your target and we'll email you the moment it drops.
> `[ Set target price → ]`  *(prefill with current price × 0.90 as a one-tap default)*

- "**your** watchlist / **your** first alert" = endowment/ownership framing.
- "one step from" = commitment-consistency (they've already started; closing the loop feels natural).
- The 10%-below prefill removes the blank-field decision cost — the dominant reason target-setting gets skipped.

**Expected impact:** Converting even a fraction of the 145 (and all future) watchlist items into *armed* alerts is what finally lets the 4-hour price cron send a single retention email. This is the highest-leverage retention change on the platform — every other loop depends on it.

---

## Handoffs

1. **→ CRO Agent (6):** Activation is fine (~73% last-7d / 60% of recent-50). Stop optimizing signup→watchlist. Redirect onboarding effort to **watchlist→target_price**: ship the inline "1 step from your first alert" prompt with a prefilled 10%-below default.
2. **→ Email Agent (5):** Drip is at 0 sent / 20 overdue. The blocker is the send path, not content. Confirm SMTP + drip-run safety before any send; don't queue win-back content on top of a pipe that doesn't fire.
3. **→ Eng / Architecture:** Two one-line-of-business fixes unlock all retention reporting and mechanics: (a) require/encourage `target_price` on watchlist add; (b) add a `last_login` timestamp so the Active/At-risk/Churned segments in this report stop being permanently `n/a`.

---

### Bottom line
Growth is healthy (114 users, +10/wk, ~73% activate). Retention is structurally broken and **unchanged from yesterday**: both designed loops are off — 0/145 watchlist items have a target price so price alerts have never armed, and the drip campaign has sent 0 emails all-time. Fix the two loops before stacking more interventions on top of them.

*Methodology: stats/users/watchlist/activity/drip-stats pulled live 2026-06-12. `admin/alerts` returns HTTP 500 (unchanged). User list is API-capped at 50 rows; total-counts use the authoritative `stats` endpoint. No login/session/click data exists, so visit-based retention segments are reported as n/a, not estimated.*
