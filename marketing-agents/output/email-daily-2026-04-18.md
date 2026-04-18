# Email Daily — 2026-04-18

## Drip Campaign
- Emails sent (24h): 0
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: 0 logged (no sends attempted — request timed out before any send)
- **Pending users (overdue, never received any drip): 21** (+1 from yesterday — nicklib253 added)
  - All 21 have `last_email_sent = 0` — zero drip emails have ever been delivered
  - Eligibility breakdown (today is 2026-04-18):
    - E1 eligible (≥3 days): 19 users
      - Newly NOT eligible today: nicklib253@gmail.com (0d, signed up last night)
      - Still not eligible: dylanbaldy@gmail.com (2d — crosses the 3-day line tomorrow)
    - E2 eligible (≥7 days): 19 users (pete.uzelac77 and goldy.pec.2012 crossed the 7-day line today at exactly 7d)
    - E3 eligible (≥14 days): 16 users (unchanged)
    - E4 eligible (≥21 days): 11 users (unchanged)
    - E5 eligible (≥30 days): 9 users (viktoriya.pershukova newly eligible today at 33d — third user to hit terminal stage)
  - Oldest pending: edithdionne@hotmail.com (45d)
- **ESCALATION (Day 12):** `POST /api/admin/drip-run` timed out again today (exit code 28, 20s hard timeout). Still zero drip emails sent since platform launch. **SMTP has been completely non-functional for twelve consecutive days.** Yesterday's deadline stands: if Day 14 (2026-04-20) passes with no fix, I stop reporting this as an outage and start classifying the drip pipeline as "not shipped." That's **48 hours from now**.
- Root-cause checklist unchanged (ordered by likelihood):
  1. **Stale Gmail app password** — regenerate from Google Account → App Passwords, update `SMTP_PASS` in Railway env.
  2. **Gmail SMTP security block** — sign in to the Gmail account manually, clear suspicious-activity alerts.
  3. **Railway egress firewall on 587** — verify from a Railway shell that `smtp.gmail.com:587` is reachable.
  4. **Synchronous blocking in the drip handler** — wrap sends in `Promise.allSettled` with a per-user timeout so one stuck socket doesn't freeze the whole run.

## Price Alerts
- Alerts triggered (24h): 0
- Active alerts: 0
- Triggered alerts (all time): 0
- Root cause unchanged: **0 out of 73** watchlist items have a `target_price` set. Every row returns `target_price: null`. The alert engine has nothing to evaluate.
- New watchlist add today (nicklib253 → Phillies vs Braves) also has no target. The product flow is not prompting users to set one.

## Subscriber Growth
- New subscribers (24h): 0
- Unsubscribes (24h): 0
- Net: 0
- Total active: 3 (unchanged)
  - roos_leeuwen@eaglesmail.net (homepage, 2026-02-01) — only organic signup
  - samir.sgpatel@gmail.com (test, 2026-01-27)
  - test@example.com (api-test, 2026-01-04)
- **Stall duration:** 76 days since last organic newsletter signup

## Platform Context
- Total users: 53 (+1 — nicklib253@gmail.com signed up 2026-04-17 22:43 UTC)
- Users this week: 2 → 3
- Users today: 1 (nicklib253, signed up <24h ago)
- Watchlist items: 73 (+1 — Phillies vs Braves, Citizens Bank Park)
- Favorites: 0

### New User Signal — nicklib253@gmail.com
- Signed up 22:43 UTC, added a watchlist item 4 minutes later at 22:47 UTC (fast intent → action)
- Item added: **Phillies vs. Atlanta Braves, 2026-04-17** — event_date is yesterday
- As of today, the event is already a **past-dated watchlist item**. Two separate UX bugs revealed by this one signup:
  1. Watchlist allows adding events that have already occurred or are within hours of first pitch
  2. New users are not routed into any lifecycle email (drip is dead, so this is a double failure)

---

## Watchlist Digest Prep

### Upcoming Events Within 14 Days — URGENCY TRIGGERS
| Event | Venue | Date | Days Out | User | Pending Days |
|-------|-------|------|----------|------|--------------|
| **TWICE World Tour Night 2** | Moody Center ATX, Austin | **TONIGHT (Apr 18)** | **0 — TODAY** | yuehsu@gmail.com | 74d |
| Viva El Jaripeo 2026 | Allstate Arena, Rosemont | Apr 25 | **7 days** | 2510soccerboy@gmail.com | 82d |
| Florence + The Machine | State Farm Arena, Atlanta | May 1 | **13 days** | tate.sheppard@gmail.com | 34d |
| **Bilmuri — Kinda Hard Tour** | The Sylvee, Madison | **May 2** | **14 — ENTERS TODAY** | goldy.pec.2012@gmail.com | 7d |

### Today's Zero-Hour Case (again): yuehsu@gmail.com — TWICE Night 2 tonight
- Night 1 (Apr 17) passed yesterday with no outreach ever. Night 2 is tonight.
- After tonight, both items become past-events. Last possible inbox moment on this user's stated intent.
- 74 days on-platform, zero emails of any kind sent. This is the second day in a row I'm flagging this with no action taken.

### New Urgency Entrant Today: goldy.pec.2012@gmail.com — Bilmuri @ The Sylvee
- Added Bilmuri 8 days ago, crossed the 14-day-out line today at exactly 14d
- Account is 7 days old — also newly E2-eligible today (never got E1 either)
- No target price. No email ever.

### Digest Templates (ready for send once SMTP is fixed)

**For yuehsu@gmail.com — TWICE Night 2 TONIGHT:**
```
Subject: TWICE Austin Night 2 is tonight — you've been waiting 74 days
Preview: Last-chance resale patterns for Saturday shows. Short, practical, no fluff.

Hi there,

Tonight. TWICE, Moody Center ATX — this is Night 2 and it's the last of
two shows you've been watching since February 3.

📉 What the last few hours typically look like on a Saturday:
   • Resale often reprices harder on Saturday nights than Fridays as
     out-of-town holders dump what they couldn't sell on Friday
   • StubHub + SeatGeek keep updating until doors close — check both
     right before you decide
   • Avoid hospitality / VIP packages (highest markups on the marketplace)

One small thing: if you bought Night 1 last night, check whether any
Night 2 resale is cheaper than your cost before you decide. Same-artist
back-to-backs frequently see Night 2 below Night 1.

[CTA: Compare TWICE Austin Prices Right Now →]
```

**For 2510soccerboy@gmail.com — Viva El Jaripeo 7 days out:**
```
Subject: Viva El Jaripeo is 1 week out — you're on the resale floor right now
Preview: 7–14 days before a show is when resale tends to bottom. You're inside that window.

Hi there,

📅 Viva El Jaripeo 2026 — Allstate Arena, Rosemont
   Saturday, April 25 (7 days away)

You're inside the statistical price-floor window. Most events bottom
out on the resale market 7–14 days out, then rebound as the date
approaches and last-minute buyers thin out the inventory.

Two things you can do today in under 2 minutes each:
1. Run the comparison once — this is your reference baseline.
2. Set a target price so we ping you if it drops another 10–15%.

[CTA: Compare Viva El Jaripeo Prices →]
```

**For tate.sheppard@gmail.com — Florence 13 days out:**
```
Subject: Florence + The Machine: 13 days out, and prices usually dip right now
Preview: You entered the urgency window yesterday. Here's what the 7–14 day window actually does.

Hi there,

🎤 Florence + The Machine — Everybody Scream Tour
   State Farm Arena, Atlanta — Friday, May 1 (13 days away)

You're now deep in the window where resale floors form. The next few
days are when the baseline locks in. Watch now and you'll spot a real
drop instead of reacting to every $10 wiggle.

Two recommendations:
1. Set a target price — if it dips below, we alert you.
2. Compare SeatGeek + StubHub + Ticketmaster side-by-side once today
   to set your mental anchor.

[CTA: Set Target Price →]
```

**For goldy.pec.2012@gmail.com — Bilmuri enters window TODAY:**
```
Subject: Bilmuri @ The Sylvee is 2 weeks out — here's when to actually buy
Preview: 14 days is usually where the floor starts forming. Quick read on the data.

Hi there,

🎸 Bilmuri — Kinda Hard Tour
   The Sylvee, Madison — Saturday, May 2 (14 days away)

You just hit the 14-day mark, which is when the resale floor typically
starts compressing. For a mid-size venue show like The Sylvee (1,800
cap), inventory usually thins at 7 days and prices can jump back up.

That makes the next 5–7 days your buy window if you want the floor.

Two quick moves:
1. Set a target price — we'll alert you on drops below it.
2. Run the comparison today across SeatGeek + StubHub + Ticketmaster
   to lock in your mental baseline.

[CTA: Set Target Price →]
```

### Events Entering the 15–30 Day Window
- **Bruno Mars — The Romantic Tour** @ Soldier Field, Chicago (May 16–17) — konman87@gmail.com — 28–29 days
- No other items in this window until World Cup stretch starts (June)

### World Cup Watchlist — Dormant but High-Intent
- **pete.uzelac77+ticketscan@gmail.com** — 7d on-platform, E1+E2 eligible today
  - 4 World Cup items (earliest: Match 9 Jun 14, 57 days out)
  - 2 Darts Masters items (Jun 25–26 @ MSG)
  - **Newly E2-eligible today.** Would normally receive "How Price Alerts Can Save You Hundreds" — the email perfectly tuned to a user with 6 tracked items and zero target prices.
- **laye.aurelien@wanadoo.fr** — 16d, 2 Shakira items (Jul 20/23)
- **blubberboi@yahoo.com** — 8d, Ed Sheeran Aug 8

### Past-Event Backlog
- 28/73 (~38%) of watchlist items have event dates before today. Up from ~36% yesterday due to:
  - TWICE Night 1 (yuehsu) rolled past yesterday
  - Phillies vs Braves (nicklib253) added today as a same-day-past event
- By midnight tonight: 29/73 (~40%) after TWICE Night 2 ends
- Still no archive function. Every past-event row continues to show up in watchlist queries.

---

## Subject Line A/B Tests

### Zero-Hour Urgency — TWICE Night 2 Tonight
- **A:** `TWICE Austin Night 2 is tonight — you've been waiting 74 days`
- **B:** `Night 2 of TWICE Austin kicks off in hours. Last call.`
- **Hypothesis:** A is personalized (74-day tracking window) and creates recognition. B is pure scarcity. For a user who opened nothing in 74 days, A's personalization is likely a stronger open trigger — the subject signals "we know you specifically." Recommend A.

### 14-Day Entry — Bilmuri (new terminal-urgency entrant)
- **A:** `Bilmuri @ The Sylvee is 2 weeks out — here's when to actually buy`
- **B:** `The Sylvee is 1,800 seats. Here's what that means for Bilmuri resale.`
- **Hypothesis:** B leans on venue-specificity (small-cap insight — inventory thins fast), which is highly on-brand for data-driven consumer advocacy. A is a generic-format countdown. Recommend B for a user who came in via a niche artist — she's sophisticated enough to engage with venue-scale commentary.

### 7-Day Floor Window — Viva El Jaripeo
- **A:** `Viva El Jaripeo is 1 week out — you're on the resale floor right now`
- **B:** `Today is probably the cheapest day for Viva El Jaripeo tickets`
- **Hypothesis:** B is a falsifiable claim, self-testable by opening the email. Stronger call-to-open. Recommend B (same pattern as yesterday's Viva El Jaripeo 8-day version).

### 13-Day — Florence + The Machine
- **A:** `Florence + The Machine: 13 days out, and prices usually dip right now`
- **B:** `You entered the Florence urgency window yesterday. Here's why that matters.`
- **Hypothesis:** A leads with a data claim. B references the user's personal timeline (enters urgency window — yesterday) which feels more conversational. For a user who's been tracking 34 days with no contact, B creates the "we've been watching with you" effect. Recommend B.

### CTA Review (all templates)
- TWICE → `ticketscan.io/compare?event=...` — direct to comparison ✓
- Viva El Jaripeo → `ticketscan.io/compare?event=...` ✓
- Florence → `ticketscan.io/watchlist` (set target price) ✓
- Bilmuri → `ticketscan.io/watchlist` (set target price) ✓
- Primary CTA above the fold in every template ✓
- Secondary CTAs (set target price, compare) used consistently ✓

---

## Action Items

### P0 — Critical (Day 12 of outage, 48h to tipping point)
1. **SMTP / drip pipeline — DAY 12 of 14.** `POST /api/admin/drip-run` continues to time out at 20s. **Two days left before I reclassify this as un-shipped.** Start with Gmail app password regen (most likely root cause).
2. **yuehsu@gmail.com — TWICE Night 2 is TONIGHT.** Final day possible. After midnight both items are permanent past-events on a user who has been on-platform 74 days with zero emails received. Second day flagging this with no fix available.
3. **goldy.pec.2012@gmail.com — Bilmuri ENTERS 14-day window TODAY** (account is 7 days old). Urgency-window entry + E2 eligibility hitting on the same day — ideal time for a digest email.
4. **2510soccerboy@gmail.com — Viva El Jaripeo 7 days out.** Deep in floor window. Window closes in 6 days.
5. **tate.sheppard@gmail.com — Florence + The Machine 13 days out** (entered window yesterday). Still no outreach.

### P1 — High
6. **Target price UX remains a total blocker.** 0/73 watchlist items have a target price (up from 0/72 yesterday — the new nicklib253 add also had none). This is a product design problem: the watchlist flow isn't prompting or pre-filling. Fix it or the price-alert engine is functionally dead code. Recommend: default target to `current_min_price × 0.85` with a "change" option.
7. **New signup with same-day past-event watchlist:** nicklib253 added the Phillies game that played yesterday. Two bugs stacked: (a) past-dated events should not be watchlist-addable, (b) new users land into no onboarding sequence.
8. **After SMTP fix, trigger `POST /api/admin/drip-run`.** Backlog plan: 9 users are now 30+ days old. Send E1+E2 together with a 48h gap, then E3/E4/E5 at normal 7-day cadence. Oldest 4 users (37d+) get a dedicated "sorry we went quiet — here's what you missed" before resume.

### P2 — Medium
9. **Newsletter growth: 76-day stall.** Only 1 organic signup ever (roos_leeuwen). SEO traffic is not converting to newsletter. Recommend homepage signup-form audit (placement, copy, incentive).
10. **World Cup dormant high-intent pool:** pete.uzelac77 (6 items, E2-eligible today), laye.aurelien (Shakira x2), blubberboi (Ed Sheeran). 9 items of clearly-stated intent, zero outreach after 7–16 days.
11. **Build watchlist digest endpoint.** Per-user automated digest does not exist. Needs cron + SQL query + email template. Blocked on SMTP regardless.
12. **Archive past-events.** 28/73 (~38%) are past-dated today; 29/73 (~40%) by end of tonight. Recommend `status` column on `watchlist` (`active`/`past`/`user_archived`) + daily cron to mark past-dated items. Bonus: block new watchlist adds where `event_date < NOW()`.
13. **Second E5 user eligible today:** viktoriya.pershukova@mail.ru at 33d. Third user overall. As the backlog ages, E5 count grows — when we eventually turn SMTP back on, we'll have 9+ users needing the "Your Ticket Savings Report" email referencing savings they never captured.

---

## Handoff → Analytics Agent (Agent 7)
- **Subscriber total:** 3 active, 0 net change, 76-day stall
- **Drip pipeline:** BROKEN — Day 12 of outage, 0 sends ever, 21 users in backlog (+1 from yesterday: nicklib253)
- **Price alerts:** 0 ever triggered — 0/73 watchlist items have target prices (product blocker, not email blocker)
- **User growth:** +1 today (nicklib253), 53 total, 3 this week
- **Watchlist:** 73 items (+1), 4 events within 14 days (TWICE Night 2 tonight, Viva El Jaripeo 7d, Florence 13d, Bilmuri enters window today)
- **Terminal urgency (TODAY):** yuehsu TWICE Night 2 is tonight. Second and final day for any outreach — this is the terminal deadline.
- **New urgency entrant:** Bilmuri (goldy.pec.2012) crosses the 14-day line today.
- **Past-event backlog:** 28/73 today (~38%), will hit 29/73 (~40%) by midnight.
- **Email channel status:** Day 12 of 14. Two days to the "not shipped" reclassification. Zero emails of any kind have ever reached a user.
- **New user UX bugs surfaced today:** (a) Watchlist accepts past-dated events; (b) New signups drop into no onboarding; (c) Target-price field stays null on 100% of adds including from brand-new users.
