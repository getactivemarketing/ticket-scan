# Email Daily — 2026-04-12

## Drip Campaign
- Emails sent (24h): 0
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: 0 recorded (no sends attempted)
- **Pending users (overdue, never received any drip): 20**
  - 20/20 have `last_email_sent = 0` — zero drip emails have ever been delivered
  - Breakdown by eligibility:
    - E1 eligible (3+ days): 18 users (excludes 2 newest at 1 day)
    - E2 eligible (7+ days): 18 users
    - E3 eligible (14+ days): 16 users
    - E4 eligible (21+ days): 12 users (tucwildcat now at 21d — newly eligible)
    - E5 eligible (30+ days): 9 users (danielbuchanan2020 now at 30d — newly eligible)
  - Newest users: pete.uzelac77 + goldy.pec.2012 (1 day — not yet eligible for E1)
  - Oldest pending: ldholman@ymail.com (39 days) — should have received all 5 emails
- **ESCALATION (Day 6):** `POST /api/admin/drip-run` timed out again (exit code 28). SMTP pipeline remains completely broken. Zero drip emails have EVER been sent to any user since platform launch.

## Price Alerts
- Alerts triggered (24h): 0
- Active alerts: 0
- Triggered alerts (all time): 0
- Root cause unchanged: 0 out of 72 watchlist items have a `target_price` set. The alert engine has nothing to evaluate against. This is a UX problem, not a backend problem.

## Subscriber Growth
- New subscribers (24h): 0
- Unsubscribes (24h): 0
- Net: 0
- Total active: 3
  - roos_leeuwen@eaglesmail.net (homepage, 2026-02-01) — only organic signup
  - samir.sgpatel@gmail.com (test, 2026-01-27)
  - test@example.com (api-test, 2026-01-04)
- **Stall duration:** 70 days since last organic subscriber signup

## Platform Context
- Total users: 51 (0 new today, +3 this week)
- Watchlist items: 72 (unchanged from yesterday)
- Favorites: 0

---

## Watchlist Digest Prep

### Upcoming Events (within 14 days) — URGENCY TRIGGERS
| Event | Venue | Date | Days Out | User |
|-------|-------|------|----------|------|
| Cardi B - Little Miss Drama Tour | Spectrum Center, Charlotte | Apr 12 | **TODAY** | bhaygood728@gmail.com |
| TWICE World Tour | Moody Center ATX, Austin | Apr 17 | 5 days | yuehsu@gmail.com |
| TWICE World Tour | Moody Center ATX, Austin | Apr 18 | 6 days | yuehsu@gmail.com |
| Viva El Jaripeo 2026 | Allstate Arena, Rosemont | Apr 25 | 13 days | 2510soccerboy@gmail.com |

### Digest Templates (ready for send once SMTP is fixed)

**For bhaygood728@gmail.com — EVENT IS TODAY:**
```
Subject: Cardi B is TONIGHT in Charlotte — go time
Preview: The Little Miss Drama Tour at Spectrum Center is today.

Hi there,

🔥 Cardi B - Little Miss Drama Tour
   Spectrum Center, Charlotte — April 12 (TODAY)
   → If you're still looking for tickets, last-minute deals
     often appear on resale sites the day of the show.
   → Compare prices across Ticketmaster, SeatGeek, and StubHub now.

[CTA: Compare Prices Now on TicketScan →]
```

**For yuehsu@gmail.com — 5-6 days out:**
```
Subject: TWICE in Austin is next week — prices may be near their floor
Preview: Both Austin dates are under a week away. Time to compare.

Hi there,

⏳ TWICE [THIS IS FOR] World Tour — Moody Center ATX, Austin
   April 17 (5 days away) — No target price set
   → Prices typically bottom out 3-7 days before the show.
     This is your sweet spot to buy.

⏳ TWICE [THIS IS FOR] World Tour — Moody Center ATX, Austin
   April 18 (6 days away) — No target price set
   → Compare both nights and grab the better deal.

[CTA: Compare Prices on TicketScan →]
```

**For 2510soccerboy@gmail.com — 13 days out:**
```
Subject: Your Ticket Watchlist Update — Viva El Jaripeo in 2 weeks
Preview: Allstate Arena on April 25. Here's when to buy.

Hi there,

📅 Viva El Jaripeo 2026 — Allstate Arena, Rosemont
   April 25 (13 days away) — No target price set
   → Still time to wait for a dip, but start watching closely.
     Set a target price so we can alert you if prices drop.

[CTA: View Your Watchlist on TicketScan →]
```

### Other Notable Watchlist Items (next 30 days)
- **Bilmuri - Kinda Hard Tour** @ The Sylvee, Madison (May 2) — goldy.pec.2012@gmail.com — 20 days
- **Florence + The Machine** @ State Farm Arena, Atlanta (May 1) — tate.sheppard@gmail.com — 19 days
- **Bruno Mars - The Romantic Tour** @ Soldier Field, Chicago (May 16-17) — konman87@gmail.com — 34-35 days

### Past Events Still on Watchlist (cleanup candidates)
22 watchlist items reference events that have already occurred (before 2026-04-12):
- Super Bowl LX (Feb 8), Denver Nuggets (Jan 29), Raptors games (Feb 24-25), Lady Gaga (Mar 4-5, 20), Josiah Queen (Mar 11), Senators vs Canadiens (Mar 11), BAD OMENS (Mar 22), NCAA 2nd Round (Mar 21-22), Shen Yun (Mar 29-Apr 2), Hawks vs Celtics (Mar 30), Oilers vs Kraken (Mar 31), NCAA Final Four (Apr 4), Warriors vs Rockets (Apr 5), RAYE (Apr 8), Mexico vs US (Mar 9), Bruno Mars tribute (Jan 30)

---

## Subject Line A/B Tests

### Same-Day Urgency — Cardi B (TODAY)
- **A:** `Cardi B is TONIGHT in Charlotte — go time`
- **B:** `Last-minute ticket deals: Cardi B at Spectrum Center today`
- **Hypothesis:** A's punchy, conversational tone matches brand voice. B is more informational. A should win on opens.

### 5-Day Urgency — TWICE
- **A:** `TWICE in Austin is next week — prices may be near their floor`
- **B:** `Your watchlist update: TWICE Austin tickets — best time to buy?`
- **Hypothesis:** A's data-driven hook (price floor timing) aligns with brand voice better than B's generic update framing.

### 2-Week Window — Viva El Jaripeo
- **A:** `Your Ticket Watchlist Update — Viva El Jaripeo in 2 weeks`
- **B:** `Viva El Jaripeo is Apr 25 — set a target price and we'll watch for you`
- **Hypothesis:** B drives engagement by prompting the user to set a target price, which also solves the 0-target-prices UX problem.

### CTA Review
- Watchlist digest CTA → `ticketscan.io/watchlist` ✅
- Day-of urgency CTA → `ticketscan.io/dashboard` (search/compare) ✅
- Primary CTA placement: above the fold ✅

---

## Action Items

### P0 — Critical (Day 6 of outage)
1. **SMTP/drip pipeline is still broken.** `POST /api/admin/drip-run` times out (exit code 28) for the 6th consecutive day. Zero drip emails have EVER been sent to any user. This is the single biggest gap in the entire product — 51 users have received no lifecycle emails.
2. **bhaygood728@gmail.com — Cardi B is TODAY.** This user added the event on Apr 3 and has never received any communication. The event is tonight. If SMTP remains broken, consider manual outreach outside the platform. This is a missed opportunity we cannot recover from.
3. **yuehsu@gmail.com — TWICE in 5-6 days.** This user has been tracking since Feb 3 (68 days!) and has received zero emails. Next urgency window.

### P1 — High
4. **Target price UX (unchanged):** 0/72 watchlist items have a target price. This blocks all price alert functionality. Recommend: auto-suggest a target price on watchlist add (e.g., 10% below current lowest) or prompt users to set one.
5. **Auto-archive past events:** 22 of 72 watchlist items (31%) are for past events. These inflate metrics and create noise. Add a nightly cleanup job.
6. After SMTP fix, trigger `POST /api/admin/drip-run` to clear the 20-user backlog immediately. Users 30+ days old need catch-up sequencing (accelerated drip sends, not 1-per-interval).

### P2 — Medium
7. **Newsletter growth:** 70-day stall. 3 subscribers total (1 organic). Need signup CTAs on blog, venue pages, and World Cup pages.
8. **Build watchlist digest endpoint** for automated per-user sends (no endpoint currently exists).
9. **Watchlist analytics:** Track which events get added most to inform content strategy.

---

## Handoff → Analytics Agent (Agent 7)
- **Subscriber total:** 3 active, 0 net change, 70-day stall
- **Drip pipeline:** BROKEN — Day 6 of outage, 0 sends ever, 20 users in backlog
- **Price alerts:** 0 ever triggered — 0/72 watchlist items have target prices
- **User growth:** 0 today, 51 total (+3 this week)
- **Watchlist:** 72 items (unchanged), 4 events within 14 days (1 TODAY)
- **Critical miss:** bhaygood728 has Cardi B TODAY and has never received any email from us
- **Cleanup opportunity:** 22 past-event watchlist items (31%) need archiving
- **Email channel status:** Completely dormant. Zero emails of any kind have ever reached a user. Day 6.
