# Email Daily — 2026-04-15

## Drip Campaign
- Emails sent (24h): 0
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: 0 recorded (no sends attempted)
- **Pending users (overdue, never received any drip): 20**
  - 20/20 have `last_email_sent = 0` — zero drip emails have ever been delivered
  - Breakdown by eligibility:
    - E1 eligible (3+ days): 20 users (pete.uzelac77 at 4d + goldy.pec.2012 at 5d — both now eligible)
    - E2 eligible (7+ days): 18 users
    - E3 eligible (14+ days): 18 users (chocolateyu1083 at 15d + arin.gelbaugh at 15d — both now eligible since Apr 14)
    - E4 eligible (21+ days): 12 users
    - E5 eligible (30+ days): 11 users (viktoriya.pershukova at 30d — newly eligible today)
  - Oldest pending: ldholman@ymail.com (42 days) — should have received all 5 emails
- **ESCALATION (Day 9):** `POST /api/admin/drip-run` timed out again (exit code 28, 15s timeout). SMTP pipeline remains completely broken. Zero drip emails have EVER been sent to any user since platform launch. **This is now a nine-day confirmed outage.**

## Price Alerts
- Alerts triggered (24h): 0
- Active alerts: 0
- Triggered alerts (all time): 0
- Root cause unchanged: 0 out of 72 watchlist items have a `target_price` set. The alert engine has nothing to evaluate against.

## Subscriber Growth
- New subscribers (24h): 0
- Unsubscribes (24h): 0
- Net: 0
- Total active: 3
  - roos_leeuwen@eaglesmail.net (homepage, 2026-02-01) — only organic signup
  - samir.sgpatel@gmail.com (test, 2026-01-27)
  - test@example.com (api-test, 2026-01-04)
- **Stall duration:** 73 days since last organic subscriber signup

## Platform Context
- Total users: 51 (0 new today, +3 this week)
- Watchlist items: 72 (unchanged)
- Favorites: 0

---

## Watchlist Digest Prep

### Upcoming Events (within 14 days) — URGENCY TRIGGERS
| Event | Venue | Date | Days Out | User |
|-------|-------|------|----------|------|
| TWICE World Tour | Moody Center ATX, Austin | Apr 17 | **2 days** | yuehsu@gmail.com |
| TWICE World Tour | Moody Center ATX, Austin | Apr 18 | **3 days** | yuehsu@gmail.com |
| Viva El Jaripeo 2026 | Allstate Arena, Rosemont | Apr 25 | **10 days** | 2510soccerboy@gmail.com |

### Digest Templates (ready for send once SMTP is fixed)

**For yuehsu@gmail.com — 2-3 days out (CRITICAL URGENCY):**
```
Subject: TWICE in Austin is TOMORROW — this is your last shot at a deal
Preview: Both Austin shows are days away. Compare prices now or risk paying door price.

Hi there,

Your watchlist has 2 events that are basically here:

🔥 TWICE [THIS IS FOR] World Tour — Moody Center ATX, Austin
   April 17 (2 DAYS AWAY) — No target price set
   → Last-minute resale inventory is hitting the market NOW.
     This is typically when you find desperate sellers.

🔥 TWICE [THIS IS FOR] World Tour — Moody Center ATX, Austin
   April 18 (3 days away) — No target price set
   → Compare both nights — Friday vs Saturday pricing
     can differ by 20-30%.

Don't overpay. Check all three sources before you buy.

[CTA: Compare Prices on TicketScan →]
```

**For 2510soccerboy@gmail.com — 10 days out:**
```
Subject: Viva El Jaripeo in 10 days — the price sweet spot is now
Preview: Allstate Arena on April 25. Prices typically bottom out 7-14 days before the show.

Hi there,

📅 Viva El Jaripeo 2026 — Allstate Arena, Rosemont
   April 25 (10 days away) — No target price set
   → You're in the statistical sweet spot for buying.
     Data shows prices tend to be lowest 7-14 days before events,
     then climb as the date approaches.

Set a target price and we'll alert you if there's a drop.

[CTA: Set a Target Price on TicketScan →]
```

### Other Notable Watchlist Items (next 30 days)
- **Florence + The Machine** @ State Farm Arena, Atlanta (May 1) — tate.sheppard@gmail.com — 15 days
- **Bilmuri - Kinda Hard Tour** @ The Sylvee, Madison (May 2) — goldy.pec.2012@gmail.com — 16 days
- **Bruno Mars - The Romantic Tour** @ Soldier Field, Chicago (May 16-17) — konman87@gmail.com — 30-31 days

### World Cup Watchlist Activity
- **pete.uzelac77+ticketscan@gmail.com** — 4 World Cup events + 2 Darts Masters at MSG (Jun 14 – Jul 4)
  - Earliest: Match 9 Ivory Coast vs Ecuador (Jun 14, 59 days)
  - All at Lincoln Financial Field, Philadelphia except Darts at MSG
  - No target prices set on any of them

### Past Events Still on Watchlist (cleanup candidates)
24 watchlist items reference events that have already occurred (before 2026-04-15):
- **Newly past since last report:** TWICE Apr 17-18 will drop off after this week; no new ones since Apr 13
- Previously flagged: Cardi B (Apr 12), RAYE (Apr 8), Warriors vs Rockets (Apr 5), NCAA Final Four (Apr 4), Oilers vs Kraken (Mar 31), Hawks vs Celtics (Mar 30), Shen Yun (Mar 29, Apr 1-2), BAD OMENS (Mar 22), NCAA 2nd Round (Mar 21-22), Ottawa Senators (Mar 11), Josiah Queen (Mar 11 x2), Mexico vs US (Mar 9), Lady Gaga (Mar 4-5, 20), WWE Elimination Chamber (Feb 28), Raptors (Feb 24-25), Bruno Mars tribute (Jan 30), Denver Nuggets (Jan 29), Super Bowl LX (Feb 8)

---

## Subject Line A/B Tests

### 2-Day Urgency — TWICE (TOMORROW)
- **A:** `TWICE in Austin is TOMORROW — this is your last shot at a deal`
- **B:** `48 hours to TWICE in Austin — desperate sellers are listing now`
- **Hypothesis:** A creates raw urgency with "TOMORROW" and "last shot." B uses a more data-savvy angle about resale market dynamics. Both should drive immediate action. A is cleaner; B is more on-brand for price-focused users.

### 10-Day Window — Viva El Jaripeo
- **A:** `Viva El Jaripeo in 10 days — the price sweet spot is now`
- **B:** `Ticket prices for Viva El Jaripeo are likely at their lowest right now`
- **Hypothesis:** A is specific and action-oriented with "sweet spot." B leads with the data-backed claim directly. B may perform better with price-sensitive users who respond to factual framing.

### CTA Review
- Watchlist digest CTA → `ticketscan.io/watchlist` — clear, correct
- TWICE urgency CTA → `ticketscan.io/dashboard` (compare flow) — correct
- Target price CTA → `ticketscan.io/watchlist` — correct destination
- Primary CTA placement: above the fold in all templates

---

## Action Items

### P0 — Critical (Day 9 of outage)
1. **SMTP/drip pipeline is completely dead.** `POST /api/admin/drip-run` has timed out (exit code 28) for 9 consecutive days. Zero drip emails have EVER been sent to any user. 20 users in backlog, oldest at 42 days. **This is a nine-day outage with zero lifecycle email capability.** At this point this must be treated as an infrastructure incident, not a bug.
2. **yuehsu@gmail.com — TWICE is in 2 DAYS.** This user has been tracking since Feb 3 (71 days) with zero emails received. They are past the optimal buying window and into "buy now or miss it" territory. After April 18, both events will become past items. **This is the last day to meaningfully reach this user and it will not happen without SMTP.** This represents a concrete, attributable missed conversion.
3. **2510soccerboy@gmail.com — Viva El Jaripeo in 10 days.** Entering optimal buy window with no target price set and no email ever received. Window is closing.

### P1 — High
4. **Target price UX (unchanged):** 0/72 watchlist items have a target price. This blocks all price alert functionality. Every single watchlist item has `target_price: None`.
5. **Auto-archive past events:** 24 of 72 watchlist items (33%) are for past events. Increasing by ~1/week.
6. **Florence + The Machine (15 days) and Bilmuri (16 days)** are entering the 14-day urgency window this week. Both users (tate.sheppard, goldy.pec.2012) have never received any email.
7. After SMTP fix, trigger `POST /api/admin/drip-run` to clear the 20-user backlog. Users 30+ days old (11 users now, was 10) need accelerated catch-up sequencing.

### P2 — Medium
8. **Newsletter growth:** 73-day stall. 3 subscribers total (1 organic). No new acquisition channels added.
9. **World Cup watchlist engagement:** pete.uzelac77 has 4 WC matches + 2 darts events tracked. Zero emails, zero target prices. World Cup is 57 days away — this is the most engaged WC user and they've gotten nothing from us.
10. **Build watchlist digest endpoint** for automated per-user sends (no endpoint exists yet).

---

## Handoff → Analytics Agent (Agent 7)
- **Subscriber total:** 3 active, 0 net change, 73-day stall
- **Drip pipeline:** BROKEN — Day 9 of outage, 0 sends ever, 20 users in backlog
- **Price alerts:** 0 ever triggered — 0/72 watchlist items have target prices
- **User growth:** 0 today, 51 total (+3 this week)
- **Watchlist:** 72 items (unchanged), 3 events within 14 days (TWICE Apr 17-18, Viva El Jaripeo Apr 25)
- **Critical miss:** yuehsu has TWICE in 2 DAYS and has never received any email (71-day engagement gap). After Apr 18 this user's events are in the past — total loss.
- **New urgency:** Florence + The Machine (15d) and Bilmuri (16d) entering 14-day window this week
- **World Cup:** pete.uzelac77 tracking 4 WC matches starting Jun 14 (59 days) — most engaged WC user, zero outreach
- **Cleanup opportunity:** 24 past-event watchlist items (33%) need archiving
- **Email channel status:** Completely dormant. Zero emails of any kind have ever reached a user. Day 9. This is now a structural failure, not a transient bug.
