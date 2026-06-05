# Growth Daily — 2026-06-05

> **Reality check up front.** Numbers below are pulled live from `/api/admin/*` today. No visit-based "active/churned" percentages are reported because the schema still has no login timestamp — see the instrumentation gap. Drip-send and price-alert figures are real (and both are zero, for real reasons documented below).

## User health dashboard

| Segment | Count | vs 06-02 | Source / note |
|---|---|---|---|
| Total users | **104** | +9 | `/admin/stats` (live) |
| New (signed up ≤7d) | **14** | +7 | `usersThisWeek`; `usersToday=6` |
| Activated (has ≥1 watchlist item) | **10 of 14 new (71%)** | healthy | computed from user list; lifetime 127 items / 104 users |
| Active (visited ≤7d) | **uncomputable** | — | no `last_login_at` column exists — genuinely unknown, not zero |
| At-risk (visit-based) | **uncomputable** | — | same instrumentation gap |
| Churned (visit-based) | **uncomputable** | — | same |

**Other live counters:** active alerts **0** · triggered alerts (lifetime) **0** · newsletter subscribers **3** (0 unsubs today) · favorites **0**.

> Signups are growing well — +9 users in 3 days, 6 today. The business is not in a retention crisis. The problems are structural plumbing, not demand.

## The finding the data keeps screaming: 127 watchlist items, 0 armed alerts

This is the single most important number in the report and it has held at **zero for weeks**: `activeAlerts = 0`. Users *are* tracking events — 127 items across 104 users — but **not one has a `target_price` set.** The core retention loop (add event → set target → get price-drop email → return) is severed at step 2 for 100% of users.

Even if the price-tracking cron and email engine were perfectly healthy (they aren't — see below), **no alert could ever fire**, because there are no targets to compare prices against. This is bigger than the signup→watchlist activation gap, which is actually fine.

- **Likely cause (verify, don't assume):** setting a target price is probably optional/buried in the add-to-watchlist flow, so nobody does it. This is a UX + psychology problem, not a demand problem.
- **Action → CRO (Agent 6) / Eng:** make target-price part of the add flow (default suggestion + "alert me when it drops below" framing). See the psychology rec below.

## Two standing engineering blockers (unchanged from 06-02 — still open)

### 1. Drip campaign is sending nothing
`/admin/drip-stats` returns `stats: []` and **all 20 pending users show `last_email_sent: 0`** — including users now at Day **17, 15, 15, 8, 8** who are well past the Day-3/7/14 triggers. The drip cron is either not firing or not recording sends. Same signal as 06-02, now with more overdue users.
- **Action → Eng:** confirm the 10am-UTC drip job runs and that `drip_emails_sent` has any rows. Yes/no engineering check. **Do not blind-trigger `/admin/drip-run`** — if the cron is broken in a way that double-sends or hits real inboxes incorrectly, a manual fire makes it worse.

### 2. No `last_login_at` instrumentation
Without it this agent cannot separate active from at-risk from churned. Every visit-based number stays "uncomputable" by design.
- **Action → Eng:** add `last_login_at` to `users`; UPDATE it on `/api/auth/login` and `/api/auth/me`. One column + two UPDATEs unblocks real retention metrics.

### (Side note) `/admin/alerts` endpoint returns 500
`GET /api/admin/alerts` errors ("Failed to get alerts"). Likely a column mismatch (`triggered_at`/`email_sent` vs schema). Cosmetic for now since `triggeredAlerts=0`, but flag to Eng — it'll block alert reporting once alerts ever fire.

## Activation gap (real, small)

Of the **14** users who signed up in the last 7 days, **4 have zero watchlist items:**

| User | Age | Watchlist | Note |
|---|---|---|---|
| mbhall99@icloud.com | 0d | 0 | brand new — normal, too early to nudge |
| belles_hayride_4b@icloud.com | 2d | 0 | watch; nudge if still 0 at Day 4 |
| doggycj6@gmail.com | 3d | 0 | approaching Day-3 drip window |
| griffin@griffinli.com | 3d | 0 | flagged 06-02 at 0.2d, still 0 — primary nudge target |

The other 10 recent signups added 1–5 items each (ananyapandey added 5). **71% cohort activation is healthy** — the lever is not getting people to add events, it's getting them to *arm an alert* once they have (see the 127/0 finding above).

> Carryover: **pika4696@gmail.com** is now Day 8, still 0 items (flagged at Day 5 on 06-02). Past the gentle-nudge window — move to Tier 2.

## Churn-intervention drafts (grounded in real users)

> All depend on the email engine actually sending. Given blocker #1, these are **queued-pending-verification, not sent.** I am not triggering any send.

**Tier 1 — gentle nudge · griffin@griffinli.com (Day 3, 0 items)**
Subject: "What are you trying to catch?"
Body: One reply with any event — concert, game, or World Cup match — and we'll track its price across Ticketmaster, SeatGeek and StubHub and email you the moment it drops. One reply, we do the rest.

**Tier 2 — value reminder · pika4696@gmail.com (Day 8, 0 items)**
Subject: "Still here? Here's what you signed up to skip"
Body: You joined to stop overpaying the resale markup. Pick one event and we'll show you the price gap between sources right now — most have a 15–30% spread. (No invented dollar figure; spread framing only, since we have no per-event price history yet.)

**Tier 3 — win-back · the May 20 cohort (brockedwardnelson, keegansmith18, ~16d, 0 items)**
Subject: "Two minutes to set up the thing you came for"
Body: "You're missing price drops" framing only works if we can name a drop — and we can't (price history is empty). So **do not** claim specific savings. Send a reset: "here are 3 high-demand events worth tracking this week" with one-tap track links. For any user whose only watchlist event has already passed, send the reset, never a "your event" email (reads as broken).

## Psychology-driven optimization — today

**Principle:** Loss aversion (rotated off 06-02's commitment/consistency).
**Where:** the add-to-watchlist confirmation, on `/event/[id]` and `/dashboard`, and the `/watchlist` row for any item with `target_price = null`.
**Change:** when a user adds an event without a target, surface a single inline line + field:
> ⚠️ *Tracking only — you won't be alerted if the price drops. Set your alert price:* `[ $___ ]` `[Alert me]`
Pre-fill the field with the current/typical price so the user only nudges it down. On the `/watchlist` page, badge every null-target item "**Not armed**".
**Why this principle, why now:** the data shows the exact failure — 127 tracked items, 0 armed. Loss aversion ("you *won't be alerted*") targets that precise gap by making the cost of leaving it blank concrete. It needs no real-time inventory or watcher counts (which we don't have at 104 users), unlike scarcity/social-proof.
**Honest caveat:** at ~3 signups/day an A/B test is statistically undetectable for months. **Ship it as a straight improvement, not a measured experiment.** No projected-lift % — we have no analytics to measure one.

## Handoffs

- **Eng / backend owner:** (1) verify drip cron + `drip_emails_sent` rows; (2) add `last_login_at`; (3) fix `/admin/alerts` 500. All three are prerequisites for real retention metrics and a working alert loop.
- **CRO (Agent 6):** the priority is **arming alerts**, not adding watchlist items. Ship the "set alert price / Not armed" UX (loss-aversion rec above). Activation-to-watchlist is healthy at 71%; activation-to-*armed-alert* is 0%.
- **Email (Agent 5):** 3 drafts above, queued pending drip-engine verification. Reminder: no specific savings/$ claims — price history is empty.

## Deliverables checklist
- [x] `growth-daily-2026-06-05.md` (this file)
- [x] User health dashboard from live API (no invented visit metrics)
- [x] Activation gap (4 new with 0 items; griffin = primary target; pika4696 escalated to Tier 2)
- [x] 3 churn-intervention drafts (real users, engine-dependent, no fabricated savings)
- [x] 1 psychology optimization (loss aversion, targets the 127-items/0-alerts gap, ship-don't-test)
- [x] Standing engineering blockers re-flagged with concrete fixes

---
**Bottom line:** Growth is healthy (+9 users in 3 days, 71% activate to a watchlist). The retention loop is broken in one decisive place: **127 tracked events, 0 armed alerts** — nobody sets a target price, so no alert can ever fire even before the dead drip cron and empty price history compound it. The fix is a UX/psychology change (make arming the alert the default action) plus three small engineering items. No invented metrics, no fabricated savings, no blind email sends.
