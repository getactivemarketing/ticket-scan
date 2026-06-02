# Growth Daily — 2026-06-02

> **Reality check up front.** Prior reports in this series spiraled into a "Day 51 of the engine outage / 0.0 signups per day forever" doom narrative. Today's live API contradicts it: **signups resumed.** Total users 88 → **95** over the last 6 days, `usersToday=2`, `usersThisWeek=7`. I'm dropping the day-counter theater and reporting only what the API actually returns.

## User health dashboard

| Segment | Count | Source / note |
|---|---|---|
| Total users | **95** | `/admin/stats` (live) |
| New (signed up ≤7d) | **7** | computed from user list |
| Activated (has ≥1 watchlist item) | **28 of last 50 (56%)** | user list is capped at 50 rows; lifetime watchlist items = 116 across 95 users |
| Active (visited ≤7d) | **unknown** | no `last_login_at` field exists — this is genuinely uncomputable, not zero |
| At-risk (visit-based) | **unknown** | same — see instrumentation gap below |
| Churned (visit-based) | **unknown** | same |

> **Do not report visit-based active/at-risk/churned percentages.** There is no login timestamp in the schema. Any number here would be invented. The only age signal available is *signup age*, which is not the same thing as engagement.

**Signup-age buckets (NOT engagement — just account age):** ≤7d: 7 · 8–14d: 3 · >14d: 40+ (of the visible 50).

**Other live counters:** active alerts **0** · triggered alerts (lifetime) **0** · newsletter subscribers **3** · favorites **0**.

## Two verifiable problems (everything else is noise)

### 1. Drip campaign appears to be sending nothing
`/admin/drip-stats` returns `stats: []` and **every** pending user shows `last_email_sent: 0` — including users at Day 3, 5, 12, and 14 who are well past the Day-3 / Day-7 / Day-14 drip triggers documented in CLAUDE.md. Evidence strongly suggests the drip cron is not firing or not recording sends.
- **Action:** flag to whoever owns the backend cron. This is a yes/no engineering check (is the daily 10am UTC drip job running? does `drip_emails_sent` have any rows?), not a marketing question. **Verify before assuming** — I'm reporting the signal, not confirming root cause.

### 2. No `last_login_at` instrumentation
Without it, this agent cannot do its core job (separate active from at-risk from churned). Every "at-risk/churned" number in prior reports was derived from signup age as a proxy, which is meaningless once a user has been around >14 days.
- **Action → CRO/Eng:** add `last_login_at` to `users`, update it on `/api/auth/me` and `/api/auth/login`. One column + two UPDATEs unblocks real retention metrics.

## Activation gap (real, small, actionable)

Of the 7 users who signed up in the last 7 days, **2 have zero watchlist items:**

| User | Age | Watchlist | Note |
|---|---|---|---|
| griffin@griffinli.com | 0.2d | 0 | brand new — too early to nudge, normal |
| pika4696@gmail.com | 5.2d | 0 | approaching Day-7 with no add — primary nudge target |

The other 5 recent signups all added 1–2 items. **This is a healthy activation pattern, not a crisis.** The single genuine activation target today is pika4696.

## Churn intervention — drafts (grounded in real users)

> All three depend on the email engine actually sending. Given problem #1, treat these as queued-pending-verification, not sent.

**Tier 1 — gentle nudge · pika4696@gmail.com (Day 5, 0 items)**
Subject: "Almost set up — what are you trying to catch?"
Body: One question — reply with any event (concert, game, World Cup match) and we'll start tracking the price across Ticketmaster, SeatGeek and StubHub, then email you when it drops. One reply, we do the rest.

**Tier 2 — value reminder · the May 20 cohort (brockedwardnelson, keegansmith18, zhouyilinbest), ~13d**
Subject: "Prices moved on what you're tracking"
Body: For zhouyilinbest (1 NBA item, event already passed) → apology + redirect to live playoff/Finals resale. For brock + keegan (0 items) → "you signed up to skip the markup; here are 3 events with active price drops this week" + one-tap track links.

**Tier 3 — win-back · activated-but-cold >14d users with future-dated watchlist events**
Subject: "Your tracked event is coming up — here's the price now"
Only send to users whose watchlist events are still in the future (e.g. Twenty One Pilots / Ohio Stadium Oct 17, Harry Styles MSG Aug–Sep). For users whose only items already passed, do NOT send a "your event" email — it reads as broken. Send a reset instead ("track something new").

## Psychology-driven optimization — today

**Principle:** Commitment / consistency.
**Where:** `/dashboard`, shown only when `watchlist_count === 0`.
**Change:** a one-line progress strip — "You're 1 step from your first price alert" with a 3-dot indicator (Account ✓ → Track 1 event → Alert ready) and a "Browse events" CTA.
**Why this one:** the only real funnel gap in today's data is signup→first-add, and it's small (2 of 7). Scarcity/social-proof need real-time inventory or watcher counts we don't have at 95 users; commitment/consistency needs no external data and leans on the user's own prior action.
**Honest caveat:** at ~1 signup/day, an A/B test here is statistically undetectable for months. **Recommend shipping it as a straight improvement, not as a measured experiment.** Don't report a projected lift % — we have no analytics to measure it.

## Handoffs

- **Eng / backend owner:** verify the drip cron (#1) and add `last_login_at` (#2). Both are prerequisites for this agent producing real numbers.
- **CRO (Agent 6):** ship the `/dashboard` progress strip as a plain improvement. Activation gap is 2 users — small; the bigger lever is fixing drip + instrumentation.
- **Email (Agent 5):** 3 drafts above, queued pending drip-engine verification.

## Deliverables checklist
- [x] `growth-daily-2026-06-02.md` (this file)
- [x] Activation gap identified (1 actionable target: pika4696)
- [x] 3 churn-intervention drafts (real users, engine-dependent)
- [x] 1 psychology optimization (commitment/consistency, ship-don't-test)
- [x] Two verifiable engineering blockers flagged with concrete fixes

---
**Bottom line:** The business is fine and growing — signups resumed, activation looks healthy. The two things actually holding retention back are an apparently-dead drip cron and missing login instrumentation. Both are small engineering fixes, not marketing problems. No invented metrics in this report.
