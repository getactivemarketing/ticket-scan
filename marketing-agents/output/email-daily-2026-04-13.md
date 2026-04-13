# Email Daily — 2026-04-13

## Drip Campaign
- Emails sent (24h): 0
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: 0 recorded (no sends attempted)
- **Pending users (overdue, never received any drip): 20**
  - 20/20 have `last_email_sent = 0` — zero drip emails have ever been delivered
  - Breakdown by eligibility:
    - E1 eligible (3+ days): 19 users (blubberboi now at 3d — newly eligible)
    - E2 eligible (7+ days): 18 users
    - E3 eligible (14+ days): 16 users (chocolateyu1083 + arin.gelbaugh now at 13d each — eligible tomorrow)
    - E4 eligible (21+ days): 12 users
    - E5 eligible (30+ days): 10 users (tate.sheppard now at 29d — eligible tomorrow; danielbuchanan2020 at 31d — newly eligible)
  - Newest users: pete.uzelac77 + goldy.pec.2012 (2 days — not yet eligible for E1)
  - Oldest pending: ldholman@ymail.com (40 days) — should have received all 5 emails
- **ESCALATION (Day 7):** `POST /api/admin/drip-run` timed out again (exit code 28). SMTP pipeline remains completely broken. Zero drip emails have EVER been sent to any user since platform launch. **This is now a full week of confirmed outage.**

## Price Alerts
- Alerts triggered (24h): 0
- Active alerts: 0
- Triggered alerts (all time): 0
- Root cause unchanged: 0 out of 72 watchlist items have a `target_price` set. The alert engine has nothing to evaluate against. This is a UX problem — users are never prompted to set target prices.

## Subscriber Growth
- New subscribers (24h): 0
- Unsubscribes (24h): 0
- Net: 0
- Total active: 3
  - roos_leeuwen@eaglesmail.net (homepage, 2026-02-01) — only organic signup
  - samir.sgpatel@gmail.com (test, 2026-01-27)
  - test@example.com (api-test, 2026-01-04)
- **Stall duration:** 71 days since last organic subscriber signup

## Platform Context
- Total users: 51 (0 new today, +3 this week)
- Watchlist items: 72 (unchanged)
- Favorites: 0

---

## Watchlist Digest Prep

### Upcoming Events (within 14 days) — URGENCY TRIGGERS
| Event | Venue | Date | Days Out | User |
|-------|-------|------|----------|------|
| TWICE World Tour | Moody Center ATX, Austin | Apr 17 | **4 days** | yuehsu@gmail.com |
| TWICE World Tour | Moody Center ATX, Austin | Apr 18 | **5 days** | yuehsu@gmail.com |
| Viva El Jaripeo 2026 | Allstate Arena, Rosemont | Apr 25 | 12 days | 2510soccerboy@gmail.com |

### Digest Templates (ready for send once SMTP is fixed)

**For yuehsu@gmail.com — 4-5 days out (HIGH URGENCY):**
```
Subject: TWICE in Austin is THIS WEEK — prices are likely near their floor
Preview: Both Austin dates are under a week away. Compare now.

Hi there,

Your watchlist has 2 events coming up fast:

🔥 TWICE [THIS IS FOR] World Tour — Moody Center ATX, Austin
   April 17 (4 days away) — No target price set
   → Ticket prices typically bottom out 3-7 days before the show.
     You're in the sweet spot RIGHT NOW.

🔥 TWICE [THIS IS FOR] World Tour — Moody Center ATX, Austin
   April 18 (5 days away) — No target price set
   → Compare both nights and grab the better deal.

Pro tip: Check all three sources — Ticketmaster, SeatGeek, and
StubHub often have different inventory at different prices.

[CTA: Compare Prices on TicketScan →]
```

**For 2510soccerboy@gmail.com — 12 days out:**
```
Subject: Viva El Jaripeo is in 12 days — time to start watching prices
Preview: Allstate Arena on April 25. Set a target and we'll alert you.

Hi there,

📅 Viva El Jaripeo 2026 — Allstate Arena, Rosemont
   April 25 (12 days away) — No target price set
   → You've still got time for a dip, but the window is closing.
     Set a target price so we can alert you if prices drop.

[CTA: Set a Target Price on TicketScan →]
```

### Other Notable Watchlist Items (next 30 days)
- **Florence + The Machine** @ State Farm Arena, Atlanta (May 1) — tate.sheppard@gmail.com — 18 days
- **Bilmuri - Kinda Hard Tour** @ The Sylvee, Madison (May 2) — goldy.pec.2012@gmail.com — 19 days
- **Bruno Mars - The Romantic Tour** @ Soldier Field, Chicago (May 16-17) — konman87@gmail.com — 33-34 days

### Past Events Still on Watchlist (cleanup candidates)
23 watchlist items reference events that have already occurred (before 2026-04-13):
- **Newly past:** Cardi B - Little Miss Drama Tour (Apr 12) — bhaygood728@gmail.com
- Previously flagged: Super Bowl LX (Feb 8), Denver Nuggets (Jan 29), Bruno Mars tribute (Jan 30), Raptors (Feb 24-25), WWE Elimination Chamber (Feb 28), Lady Gaga (Mar 4-5, 20), Mexico vs US (Mar 9), Josiah Queen (Mar 11 x2), Ottawa Senators (Mar 11), BAD OMENS (Mar 22), NCAA 2nd Round (Mar 21-22), Shen Yun (Mar 29, Apr 1-2), Hawks vs Celtics (Mar 30), Oilers vs Kraken (Mar 31), NCAA Final Four (Apr 4), Warriors vs Rockets (Apr 5), RAYE (Apr 8)

---

## Subject Line A/B Tests

### 4-Day Urgency — TWICE (THIS WEEK)
- **A:** `TWICE in Austin is THIS WEEK — prices are likely near their floor`
- **B:** `4 days to TWICE in Austin — compare prices before they spike`
- **Hypothesis:** A uses data-driven "price floor" language that matches brand voice. B creates FOMO with "spike" urgency. A should win on trust; B should win on click-through. Test both.

### 12-Day Window — Viva El Jaripeo
- **A:** `Viva El Jaripeo is in 12 days — time to start watching prices`
- **B:** `Set a target price for Viva El Jaripeo and we'll watch for you`
- **Hypothesis:** B is a direct CTA that drives the missing target-price behavior. Testing whether action-oriented subject lines improve engagement over informational ones.

### CTA Review
- Watchlist digest CTA → `ticketscan.io/watchlist` — clear, correct
- TWICE urgency CTA → `ticketscan.io/dashboard` (compare flow) — correct
- Target price CTA → `ticketscan.io/watchlist` — correct destination
- Primary CTA placement: above the fold in all templates

---

## Action Items

### P0 — Critical (Day 7 of outage)
1. **SMTP/drip pipeline is completely dead.** `POST /api/admin/drip-run` has timed out (exit code 28) for 7 consecutive days. Zero drip emails have EVER been sent to any user. 20 users in backlog, oldest at 40 days. **This is now a one-week outage with zero lifecycle email capability.** Root cause investigation needed: is SMTP configured? Are Gmail app-specific password credentials valid? Is the drip-run endpoint hanging on a DB query or SMTP connection?
2. **yuehsu@gmail.com — TWICE is in 4-5 days.** This user has been tracking since Feb 3 (69 days!) with zero emails received. They are in the optimal buying window RIGHT NOW. If SMTP remains broken, this is another missed conversion.
3. **2510soccerboy@gmail.com — Viva El Jaripeo in 12 days.** Entering the decision window with no target price set and no email ever received.

### P1 — High
4. **Target price UX (unchanged):** 0/72 watchlist items have a target price. This blocks all price alert functionality. Recommend: auto-suggest a target price on watchlist add (e.g., 10% below current lowest) or add a prompt/nudge to set one.
5. **Auto-archive past events:** 23 of 72 watchlist items (32%) are for past events — up from 22 yesterday (Cardi B now past). These inflate metrics and create noise in the digest pipeline.
6. After SMTP fix, trigger `POST /api/admin/drip-run` to clear the 20-user backlog. Users 30+ days old (10 users) need accelerated catch-up sequencing.

### P2 — Medium
7. **Newsletter growth:** 71-day stall. 3 subscribers total (1 organic). Homepage signup form is the only acquisition channel. Add newsletter CTAs to blog, venue pages, World Cup pages, and watchlist confirmation flows.
8. **Build watchlist digest endpoint** for automated per-user sends (no endpoint exists).
9. **Post-mortem needed:** Once SMTP is fixed, document what went wrong and why it took 7+ days to detect/resolve. Implement health check monitoring for the email pipeline.

---

## Handoff → Analytics Agent (Agent 7)
- **Subscriber total:** 3 active, 0 net change, 71-day stall
- **Drip pipeline:** BROKEN — Day 7 of outage, 0 sends ever, 20 users in backlog
- **Price alerts:** 0 ever triggered — 0/72 watchlist items have target prices
- **User growth:** 0 today, 51 total (+3 this week)
- **Watchlist:** 72 items (unchanged), 3 events within 14 days (TWICE Apr 17-18, Viva El Jaripeo Apr 25)
- **Critical miss:** yuehsu has TWICE in 4 days and has never received any email (69-day engagement gap)
- **Newly past:** Cardi B (Apr 12) — bhaygood728 never received the day-of alert we prepped yesterday
- **Cleanup opportunity:** 23 past-event watchlist items (32%) need archiving
- **Email channel status:** Completely dormant. Zero emails of any kind have ever reached a user. Day 7.
