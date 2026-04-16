# Email Daily — 2026-04-16

## Drip Campaign
- Emails sent (24h): 0
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: 0 recorded (no sends attempted)
- **Pending users (overdue, never received any drip): 20**
  - 20/20 have `last_email_sent = 0` — zero drip emails have ever been delivered
  - Breakdown by eligibility (today is 2026-04-16):
    - E1 eligible (3+ days): 19 users — dylanbaldy@gmail.com (signed up yesterday, 0d) is the only non-eligible pending user
    - E2 eligible (7+ days): 16 users (pete.uzelac77 now 5d, goldy.pec.2012 now 6d — both still pre-E2 but past E1)
    - E3 eligible (14+ days): 16 users (laye.aurelien newly eligible today at 14d)
    - E4 eligible (21+ days): 13 users (billstromkel newly eligible today at 22d)
    - E5 eligible (30+ days): 12 users (jkaiser newly eligible today at 30d)
  - Oldest pending: edithdionne@hotmail.com (42d) — should have received all 5 emails. ldholman dropped off pending list (past 30d and still 0 sent).
- **ESCALATION (Day 10):** `POST /api/admin/drip-run` timed out again (exit code 28, 15s timeout). Zero drip emails sent since platform launch. **SMTP is completely dead for ten consecutive days.** At this point the drip pipeline is not a lifecycle channel — it is a feature that does not exist in production.
- New user today: dylanbaldy@gmail.com (joined 2026-04-15). Will be E1-eligible on 2026-04-18 (2 days).

## Price Alerts
- Alerts triggered (24h): 0
- Active alerts: 0
- Triggered alerts (all time): 0
- Root cause unchanged: 0 out of 72 watchlist items have a `target_price` set. The alert engine has nothing to evaluate against. Every single row in `watchlist` returns `target_price: null`.

## Subscriber Growth
- New subscribers (24h): 0
- Unsubscribes (24h): 0
- Net: 0
- Total active: 3 (unchanged)
  - roos_leeuwen@eaglesmail.net (homepage, 2026-02-01) — only organic signup
  - samir.sgpatel@gmail.com (test, 2026-01-27)
  - test@example.com (api-test, 2026-01-04)
- **Stall duration:** 74 days since last organic subscriber signup

## Platform Context
- Total users: 52 (+1 since yesterday — dylanbaldy@gmail.com)
- Users this week: 4
- Watchlist items: 72 (unchanged)
- Favorites: 0

---

## Watchlist Digest Prep

### Upcoming Events (within 14 days) — URGENCY TRIGGERS
| Event | Venue | Date | Days Out | User |
|-------|-------|------|----------|------|
| TWICE World Tour | Moody Center ATX, Austin | Apr 17 | **1 day** | yuehsu@gmail.com |
| TWICE World Tour | Moody Center ATX, Austin | Apr 18 | **2 days** | yuehsu@gmail.com |
| Viva El Jaripeo 2026 | Allstate Arena, Rosemont | Apr 25 | **9 days** | 2510soccerboy@gmail.com |

### Digest Templates (ready for send once SMTP is fixed)

**For yuehsu@gmail.com — TWICE TOMORROW (terminal urgency):**
```
Subject: TWICE Austin is TOMORROW — check resale now, door price is a trap
Preview: You've got two shots: tomorrow and Saturday. Here's how resale inventory looks right now.

Hi there,

This is it — TWICE Austin is tomorrow:

🔥 TWICE [THIS IS FOR] World Tour — Moody Center ATX
   Friday, April 17 (TOMORROW) — No target price set
   → Resale market floods with last-minute inventory
     in the final 24 hours. Compare all three sources
     before you commit.

🔥 TWICE [THIS IS FOR] World Tour — Moody Center ATX
   Saturday, April 18 (2 days away) — No target price set
   → Saturday shows historically price 10–20% higher
     than Friday shows for the same artist. Check both nights.

Don't pay door price. Don't pay hospitality markup.
Compare SeatGeek, StubHub, and Ticketmaster in one view.

[CTA: Compare Prices Now →]
```

**For 2510soccerboy@gmail.com — 9 days out (mid-window):**
```
Subject: Viva El Jaripeo is 9 days away — the floor is probably right now
Preview: Ticket prices tend to bottom 7–14 days out. You're standing on that line.

Hi there,

📅 Viva El Jaripeo 2026 — Allstate Arena, Rosemont
   Saturday, April 25 (9 days away) — No target price set
   → You're in the statistical price floor window.
     Most events drop to their lowest resale prices
     7–14 days before the show, then rebound as
     the date approaches.

Two actions that will save you money:
1. Set a target price so we alert you on drops.
2. Check SeatGeek + StubHub side-by-side now —
   today's price is probably better than next week's.

[CTA: Set a Target Price →]
```

### Entering 14-Day Window THIS WEEK (Apr 17–21)
- **Florence + The Machine** @ State Farm Arena, Atlanta (May 1) — tate.sheppard@gmail.com — 15 days → enters urgency window tomorrow (Apr 17)
- **Bilmuri - Kinda Hard Tour** @ The Sylvee, Madison (May 2) — goldy.pec.2012@gmail.com — 16 days → enters urgency window Saturday (Apr 18)
- Both users have `last_email_sent = 0`. Neither has a target price. They will hit 14-day urgency while the drip pipeline is dead.

### Other Notable Watchlist Items (next 30 days)
- **Bruno Mars - The Romantic Tour** @ Soldier Field, Chicago (May 16–17) — konman87@gmail.com — 30–31 days

### World Cup Watchlist Activity
- **pete.uzelac77+ticketscan@gmail.com** — 4 World Cup matches + 2 Darts Masters at MSG
  - Earliest: Match 9 Ivory Coast vs Ecuador (Jun 14, 59 days)
  - All WC at Lincoln Financial Field, Philadelphia; Darts at MSG
  - Still no target prices set on any of them
  - Most engaged WC user — has received zero outreach

### Past Events Still on Watchlist (cleanup candidates)
- Still 24+ items reference past events (33% of watchlist). No archive function exists. After Apr 18, the two TWICE items will also roll into this pile.

---

## Subject Line A/B Tests

### 1-Day Terminal Urgency — TWICE (TOMORROW)
- **A:** `TWICE Austin is TOMORROW — check resale now, door price is a trap`
- **B:** `TWICE is tomorrow. Last-minute resale is live. Don't buy blind.`
- **Hypothesis:** A names the threat (door price) to create loss aversion. B is shorter, command-style, with concrete actionable language. A probably wins on curiosity; B wins on scannability in a crowded inbox. Data-focused users may prefer B.

### 9-Day Window — Viva El Jaripeo
- **A:** `Viva El Jaripeo is 9 days away — the floor is probably right now`
- **B:** `This is the cheapest Viva El Jaripeo tickets will probably get`
- **Hypothesis:** A leads with countdown, B leads with the claim. B is more aggressive and testable (a user can verify later). A plays better to urgency-responsive users; B plays better to data-skeptical users who want the claim up front.

### CTA Review
- Watchlist digest CTA → `ticketscan.io/watchlist` — correct
- TWICE urgency CTA → `ticketscan.io/dashboard` (compare flow) — correct
- Target price CTA → `ticketscan.io/watchlist` — correct
- Primary CTA: above the fold in all templates ✓

---

## Action Items

### P0 — Critical (Day 10 of outage)
1. **SMTP/drip pipeline — DAY 10.** `POST /api/admin/drip-run` has timed out for 10 consecutive days. Zero drip emails have EVER been sent. 20 users in backlog, oldest at 42d (edithdionne). **This is now a two-week-long structural outage of the lifecycle email channel.** Must be treated as an incident, not a bug. Recommend: check Nodemailer/Gmail SMTP credentials in Railway env vars first — most likely a stale app password or a Gmail SMTP block after too many retries.
2. **yuehsu@gmail.com — TWICE is in 1 DAY.** 72-day engagement gap, zero emails received, two events expire in 48 hours. **This is the FINAL day to reach this user about these events.** After Apr 18 they join the past-events pile as a permanent zero-attribution user. This is a concrete, attributable missed conversion.
3. **2510soccerboy@gmail.com — Viva El Jaripeo in 9 days.** Inside optimal buy window. No target price, no email ever. Window narrowing daily.

### P1 — High
4. **Florence + The Machine enters 14-day urgency window TOMORROW.** tate.sheppard (33d pending). Bilmuri enters Saturday (goldy.pec.2012, 6d pending). This week adds 2 users to the terminal-urgency bucket.
5. **Target price UX (unchanged):** 0/72 watchlist items have a target price. Blocks all price alert functionality. This is a product design failure, not a backend issue — the signup flow should probably suggest a target.
6. After SMTP fix, trigger `POST /api/admin/drip-run`. Backlog: 12 users are now 30+ days old and need an accelerated catch-up sequence (send E1+E2 together with a 48hr gap, then E3/E4/E5 at normal cadence).

### P2 — Medium
7. **Newsletter growth:** 74-day stall. 3 subscribers total, 1 organic. No new acquisition channels added since launch.
8. **World Cup engagement dormant:** pete.uzelac77 tracking 4 WC matches + 2 darts events, 58 days to first match, zero outreach. Most engaged WC user on the platform.
9. **Build watchlist digest endpoint** — per-user automated digest does not exist. Would require new cron + SQL query for active-watchlist users.
10. **Archive past events:** 24 of 72 watchlist items (33%) are for events that have already happened. No archive function exists.

---

## Handoff → Analytics Agent (Agent 7)
- **Subscriber total:** 3 active, 0 net change, 74-day stall
- **Drip pipeline:** BROKEN — Day 10 of outage, 0 sends ever, 20 users in backlog
- **Price alerts:** 0 ever triggered — 0/72 watchlist items have target prices
- **User growth:** +1 today (dylanbaldy@gmail.com), 52 total, 4 this week
- **Watchlist:** 72 items (unchanged), 3 events within 14 days
- **Terminal urgency:** yuehsu TWICE events expire in 48hrs. Last chance for outreach ever on this user for these events.
- **This week:** Florence (Apr 17) + Bilmuri (Apr 18) enter 14-day urgency window. Both users have received zero lifecycle emails.
- **World Cup:** pete.uzelac77 — 4 matches + 2 darts, 58 days out, zero outreach
- **Cleanup:** 24 past-event watchlist items (33%) awaiting archive
- **Email channel status:** Dormant for 10 consecutive days. Zero emails of any kind have ever reached a user. Structural failure.
