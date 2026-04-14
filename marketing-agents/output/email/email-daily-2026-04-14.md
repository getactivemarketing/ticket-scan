# Email Daily — 2026-04-14

## Drip Campaign
- Emails sent (24h): 0
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: 0 recorded (no sends attempted)
- **Pending users (overdue, never received any drip): 20**
  - 20/20 have `last_email_sent = 0` — zero drip emails have ever been delivered
  - Breakdown by eligibility:
    - E1 eligible (3+ days): 20 users (pete.uzelac77 + goldy.pec.2012 now at 3 days — newly eligible)
    - E2 eligible (7+ days): 18 users
    - E3 eligible (14+ days): 18 users (chocolateyu1083 at 14d, arin.gelbaugh at 14d — newly eligible)
    - E4 eligible (21+ days): 12 users
    - E5 eligible (30+ days): 11 users (tate.sheppard now at 30d — newly eligible)
  - Oldest pending: ldholman@ymail.com (41 days) — should have received all 5 emails
- **ESCALATION (Day 8):** `POST /api/admin/drip-run` timed out again (exit code 28). SMTP pipeline remains completely broken. Zero drip emails have EVER been sent to any user since platform launch. **This is now 8 consecutive days of confirmed outage.**

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
- **Stall duration:** 72 days since last organic subscriber signup

## Platform Context
- Total users: 51 (0 new today, +3 this week)
- Watchlist items: 72 (unchanged)
- Favorites: 0

---

## Watchlist Digest Prep

### Upcoming Events (within 14 days) — URGENCY TRIGGERS
| Event | Venue | Date | Days Out | User |
|-------|-------|------|----------|------|
| TWICE World Tour | Moody Center ATX, Austin | Apr 17 | **3 days** | yuehsu@gmail.com |
| TWICE World Tour | Moody Center ATX, Austin | Apr 18 | **4 days** | yuehsu@gmail.com |
| Viva El Jaripeo 2026 | Allstate Arena, Rosemont | Apr 25 | 11 days | 2510soccerboy@gmail.com |

### Digest Templates (ready for send once SMTP is fixed)

**For yuehsu@gmail.com — 3-4 days out (CRITICAL URGENCY):**
```
Subject: TWICE in Austin is in 3 DAYS — this is the buying window
Preview: April 17 & 18 at Moody Center. Prices tend to bottom out now.

Hi there,

Your watchlist has 2 events coming up fast:

🔥 TWICE [THIS IS FOR] World Tour — Moody Center ATX, Austin
   April 17 (3 days away) — No target price set
   → Resale prices typically hit their floor 2-5 days before the show.
     This is the window. Compare prices across all three sources now.

🔥 TWICE [THIS IS FOR] World Tour — Moody Center ATX, Austin
   April 18 (4 days away) — No target price set
   → Check both nights and grab whichever has better inventory.

Pro tip: Ticketmaster, SeatGeek, and StubHub often have wildly different
pricing for the same section. A 30-second comparison can save you $50+.

[CTA: Compare Prices on TicketScan →]
```

**For 2510soccerboy@gmail.com — 11 days out:**
```
Subject: Viva El Jaripeo is 11 days away — set a target price now
Preview: Allstate Arena on April 25. We'll watch for price drops for you.

Hi there,

📅 Viva El Jaripeo 2026 — Allstate Arena, Rosemont
   April 25 (11 days away) — No target price set
   → Prices can still dip in the next week. Set a target price
     and we'll alert you the moment it drops to what you want to pay.

[CTA: Set a Target Price on TicketScan →]
```

### Other Notable Watchlist Items (next 30 days)
- **Florence + The Machine** @ State Farm Arena, Atlanta (May 1) — tate.sheppard@gmail.com — 17 days
- **Bilmuri - Kinda Hard Tour** @ The Sylvee, Madison (May 2) — goldy.pec.2012@gmail.com — 18 days
- **Bruno Mars - The Romantic Tour** @ Soldier Field, Chicago (May 16-17) — konman87@gmail.com — 32-33 days

### Past Events Still on Watchlist (cleanup candidates)
24 watchlist items reference events that have already occurred (before 2026-04-14):
- **Newly past:** None since yesterday (Cardi B Apr 12 was flagged yesterday)
- Full list: Super Bowl LX (Feb 8), Denver Nuggets (Jan 29), Bruno Mars tribute (Jan 30), Raptors (Feb 24-25), WWE Elimination Chamber (Feb 28), Lady Gaga (Mar 4-5, 20), Mexico vs US (Mar 9), Josiah Queen (Mar 11 x2), Ottawa Senators (Mar 11), BAD OMENS (Mar 22), NCAA 2nd Round (Mar 21-22), Shen Yun (Mar 29, Apr 1-2), Hawks vs Celtics (Mar 30), Oilers vs Kraken (Mar 31), NCAA Final Four (Apr 4), Warriors vs Rockets (Apr 5), RAYE (Apr 8), Cardi B (Apr 12)
- **24 of 72 items (33%)** are for past events — up from 23 yesterday

---

## Subject Line A/B Tests

### 3-Day Urgency — TWICE (THIS FRIDAY)
- **A:** `TWICE in Austin is in 3 DAYS — this is the buying window`
- **B:** `Don't miss the price floor — TWICE in Austin is Friday`
- **Hypothesis:** A is direct and urgent with the day count. B uses "price floor" language (data-driven brand voice) and anchors to the day of the week. B should resonate with the TicketScan value prop of informed buying.

### 11-Day Window — Viva El Jaripeo
- **A:** `Viva El Jaripeo is 11 days away — set a target price now`
- **B:** `We'll watch Viva El Jaripeo prices for you — just set your target`
- **Hypothesis:** A leads with urgency (days), B leads with value (we do the work for you). B positions TicketScan as a service rather than a countdown clock.

### CTA Review
- Watchlist digest CTA → `ticketscan.io/watchlist` — clear, correct
- TWICE urgency CTA → `ticketscan.io/dashboard` (compare flow) — correct
- Target price CTA → `ticketscan.io/watchlist` — correct destination
- All primary CTAs placed above the fold in templates

---

## Action Items

### P0 — Critical (Day 8 of outage)
1. **SMTP/drip pipeline is completely dead.** `POST /api/admin/drip-run` has timed out (exit code 28) for 8 consecutive days. Zero drip emails have EVER been sent to any user. 20 users in backlog, oldest at 41 days. **This is a week+ outage with zero lifecycle email capability.** Root cause investigation needed: is SMTP configured? Are Gmail app-specific password credentials valid? Is the drip-run endpoint hanging on a DB query or SMTP connection?
2. **yuehsu@gmail.com — TWICE is in 3 days.** This user has been tracking since Feb 3 (70 days!) with zero emails received. They are past the optimal buying window and entering the last-chance zone. If SMTP remains broken for 3 more days, the event passes with zero engagement from TicketScan.
3. **2510soccerboy@gmail.com — Viva El Jaripeo in 11 days.** Entering the decision window with no target price set and no email ever received.

### P1 — High
4. **New drip eligibility today:**
   - pete.uzelac77 + goldy.pec.2012 hit Day 3 — eligible for E1
   - chocolateyu1083 + arin.gelbaugh hit Day 14 — eligible for E3
   - tate.sheppard hits Day 30 — eligible for E5 (and has Florence + The Machine in 17 days)
5. **Target price UX (unchanged):** 0/72 watchlist items have a target price. This blocks all price alert functionality. Recommend: auto-suggest a target price on watchlist add (e.g., 10% below current lowest) or add a prompt/nudge to set one.
6. **Auto-archive past events:** 24 of 72 watchlist items (33%) are for past events. These inflate metrics and create noise. Build a cleanup job or at minimum stop including them in digest calculations.
7. After SMTP fix, trigger `POST /api/admin/drip-run` to clear the 20-user backlog. Users 30+ days old (11 users) need accelerated catch-up sequencing.

### P2 — Medium
8. **Newsletter growth:** 72-day stall. 3 subscribers total (1 organic). Homepage signup form is the only acquisition channel. Add newsletter CTAs to blog, venue pages, World Cup pages, and watchlist confirmation flows.
9. **Build watchlist digest endpoint** for automated per-user sends (no endpoint exists today).
10. **Post-mortem needed:** Once SMTP is fixed, document what went wrong and why it took 8+ days to detect/resolve. Implement health check monitoring for the email pipeline.

---

## Handoff → Analytics Agent (Agent 7)
- **Subscriber total:** 3 active, 0 net change, 72-day stall
- **Drip pipeline:** BROKEN — Day 8 of outage, 0 sends ever, 20 users in backlog
- **Price alerts:** 0 ever triggered — 0/72 watchlist items have target prices
- **User growth:** 0 today, 51 total (+3 this week)
- **Watchlist:** 72 items (unchanged), 3 events within 14 days (TWICE Apr 17-18, Viva El Jaripeo Apr 25)
- **Critical miss:** yuehsu has TWICE in 3 days and has never received any email (70-day engagement gap)
- **New drip eligibility:** 5 users crossed thresholds today (2x E1, 2x E3, 1x E5)
- **Cleanup opportunity:** 24 past-event watchlist items (33%) need archiving
- **Email channel status:** Completely dormant. Zero emails of any kind have ever reached a user. Day 8.
