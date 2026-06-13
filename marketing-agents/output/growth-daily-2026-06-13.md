# Growth Daily — 2026-06-13

**Source:** live admin API (`/api/admin/stats`, `/users`, `/drip-stats`), pulled 2026-06-13. Admin key authenticated (HTTP 200). All figures below are measured, not modeled.

> Skills `churn-prevention` / `marketing-psychology` are not installed in this environment — applied their logic manually rather than fabricating an invocation.

## User Health
| Segment                        | Count | Notes |
|--------------------------------|-------|-------|
| Total users                    | 115   | +1 today, +10–12 last 7d |
| Activated (≥1 watchlist item)  | 72 (63%) | healthy top-of-funnel |
| Armed alerts (target_price set)| **0** | **funnel severed here** |
| Active subscribers (newsletter)| 3     | tiny list |
| Active / At-risk / Churned     | n/a   | no `last_login` column exists — cannot segment by recency. Not estimated. |

*Active/at-risk/churned are left n/a deliberately. There is no per-user login/visit timestamp in the schema and no analytics in the web app, so any recency segmentation would be invented.*

## Activation Gap
- **4** users signed up in last 7 days with 0 watchlist items:
  `b.shaan1021@gmail.com`, `kellileeriach@yahoo.com`, `dilanozusta@gmail.com`, `mbhall99@icloud.com`
- The other 8 of the recent cohort added ≥1 item, so add-to-watchlist activation is working (~63% all-time).

## The Real Retention Blocker (verified today)
The retention story is not a recency problem — it's two broken mechanisms feeding it:

1. **Alerts cannot arm.** 0 of 115 users have a `target_price` set → `activeAlerts: 0`, `triggeredAlerts: 0`. The price-drop email — the single biggest reason to come back — has never been able to fire for anyone. Users add to watchlist (72 did) but the flow never asks them to set a target, so the loop dead-ends.
2. **Drip campaign still sends nothing.** `drip-stats` returns `stats: []` and `last_email_sent: 0` for every user; ~20 users are past their Day-3/7/14 triggers (days_since_signup 7–10) with zero emails delivered. Same finding as prior runs — unchanged.
3. **`/api/admin/alerts` endpoint errors** (`"Failed to get alerts"`) — broken query, separate from the empty-data issue.

**Did NOT trigger `drip-run`** — these are real user inboxes and a blind blast 20 emails deep is a deliverability/spam risk, not a growth win. The fix is making the drip cron actually execute, not manually firing it once.

## Churn Intervention — Status
No win-back/re-engagement emails queued today. Reason: there is no sending mechanism wired for this agent, the recipients are real inboxes, and — critically — we cannot identify *who* is inactive (no `last_login`). Queuing tiered nudges against fabricated "days inactive" values would be guessing. **Prerequisite for any churn tier: add a `last_login` (or `last_active`) timestamp to `users`.** Flagged to Email Agent (Agent 5) as a blocker.

## Psychology-Driven Optimization (1)
**Principle:** Commitment/Consistency + Endowment effect
**Where:** Watchlist add confirmation + event/watchlist row (`web/src/app/watchlist`, `EventCard`)
**Change:** Immediately after a user adds an event, show an inline one-tap prompt:

> ⏰ **You're one step from your first price alert.** Set a target price for *{event}* and we'll email you the moment it drops.
> `[ Set target: $___ ]`  ·  *Most savers aim ~15% below today's price.*

**Why this and not a generic nudge:** the data says the funnel breaks at exactly one place — target_price is null for 100% of users. Every other retention mechanism (alerts, drip, win-back) is downstream of someone setting a target. Converting even 20% of the 72 activated users into armed alerts would, for the first time, give the price-tracking cron something to fire on and create a genuine reason to return.
**Expected impact:** moves armed-alert count from 0 → first non-zero cohort; unblocks the entire price-alert retention loop. Directly measurable via `activeAlerts` in `/admin/stats`.

## Handoffs
- **→ CRO (Agent 6):** add the "set a target price" step to onboarding/watchlist-add. This is the #1 activation→retention fix. 4 recent signups also never added any watchlist item — review whether search surfaced relevant events for them.
- **→ Email (Agent 5):** (1) drip cron delivers 0 — needs to actually run; ~20 users overdue. (2) No `last_login` column → win-back tiers can't be targeted; request schema add before building win-back content.
- **→ Engineering:** `/api/admin/alerts` query is broken (500).

## What I deliberately did NOT report
No open/click/CTR figures (no email analytics), no visit-based segments (no last_login), no price/savings numbers (price_history empty, alerts never fired). Per prior fabrication-spiral findings, these stay blank rather than invented.
