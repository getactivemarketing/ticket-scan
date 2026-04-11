# Email Daily — 2026-04-11

## Drip Campaign
- Emails sent (24h): 0
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: 0 recorded (no sends attempted)
- **Pending users (overdue, never received any drip): 20**
  - 20/20 have `last_email_sent = 0` — zero drip emails have ever been delivered
  - Breakdown by eligibility:
    - E1 eligible (3+ days): 20 users
    - E2 eligible (7+ days): 19 users
    - E3 eligible (14+ days): 16 users (chocolateyu1083 + arin.gelbaugh now at 11d)
    - E4 eligible (21+ days): 11 users (leofearon15 now at 21d — newly eligible)
    - E5 eligible (30+ days): 8 users (danielbuchanan2020 now at 29d, near-eligible)
  - Newest users: pete.uzelac77 + goldy.pec.2012 (0 days — not yet eligible)
  - Oldest pending: still likely 38+ day users who should have received all 5 emails
- **🚨 ESCALATION (Day 5):** Drip campaign outage continues. `POST /api/admin/drip-run` timed out again (30s timeout, exit code 28). SMTP connection hanging confirmed for 5th consecutive day. Zero drip emails have EVER been sent to any user.

## Price Alerts
- Alerts triggered (24h): 0
- Active alerts: 0
- Triggered alerts (all time): 0
- Root cause unchanged: 0 out of 72 watchlist items have a `target_price` set — the alert engine has no targets to evaluate against.

## Subscriber Growth
- New subscribers (24h): 0
- Unsubscribes (24h): 0
- Net: 0
- Total active: 3
  - roos_leeuwen@eaglesmail.net (homepage, 2026-02-01) — only organic signup
  - samir.sgpatel@gmail.com (test, 2026-01-27)
  - test@example.com (api-test, 2026-01-04)
- **Stall duration:** 69 days since last organic subscriber signup

## Platform Context
- Total users: 51 (+2 today, +3 this week)
- Watchlist items: 72 (+7 from yesterday's 65)
- Favorites: 0

---

## Watchlist Digest Prep

### Upcoming Events (within 14 days) — URGENCY TRIGGERS
| Event | Venue | Date | Days Out | User |
|-------|-------|------|----------|------|
| Cardi B - Little Miss Drama Tour | Spectrum Center, Charlotte | Apr 12 | **1 day** | bhaygood728@gmail.com |
| TWICE World Tour | Moody Center ATX, Austin | Apr 17 | 6 days | yuehsu@gmail.com |
| TWICE World Tour | Moody Center ATX, Austin | Apr 18 | 7 days | yuehsu@gmail.com |
| Florence + The Machine | State Farm Arena, Atlanta | May 1 | 20 days | tate.sheppard@gmail.com |

### Digest Template (ready for send once SMTP is fixed)

**For bhaygood728@gmail.com — CRITICAL URGENCY:**
```
Subject: ⚡ Cardi B is TOMORROW — last chance to buy
Preview: The Little Miss Drama Tour in Charlotte is tomorrow night.

Hi there,

🔥 Cardi B - Little Miss Drama Tour
   Spectrum Center, Charlotte — April 12 (TOMORROW)
   → Prices only go up from here. If you're going, buy now.
   → No target price set — but at this point, compare and pull the trigger.

[CTA: Compare Prices Now on TicketScan →]
```

**For yuehsu@gmail.com:**
```
Subject: Your Ticket Watchlist Update — TWICE in Austin next week
Preview: Both Austin dates are 6-7 days away. Here's the move.

Hi there,

⏳ TWICE [THIS IS FOR] World Tour — Moody Center ATX, Austin
   April 17 (6 days away) — No target price set
   → One week out — prices are likely near their floor. Good window to buy.

⏳ TWICE [THIS IS FOR] World Tour — Moody Center ATX, Austin
   April 18 (7 days away) — No target price set
   → Compare both nights and grab the better deal.

[CTA: Compare Prices on TicketScan →]
```

### Other Notable Watchlist Items
- **Ed Sheeran: LOOP Tour** @ SoFi Stadium (Aug 8) — blubberboi@yahoo.com
- **Shakira World Tour** @ Barclays Center (Jul 20) & UBS Arena (Jul 23) — laye.aurelien@wanadoo.fr
- **Harry Styles: Together, Together** @ MSG (Sep 16) — tosophiameyer@gmail.com
- **Flyleaf 20th Anniversary** @ House of Blues Chicago (Jul 17-18) — lvasub6@gmail.com

---

## Subject Line A/B Tests

### Urgency Digest — Cardi B (tomorrow)
- **A:** `⚡ Cardi B is TOMORROW — last chance to buy`
- **B:** `Your watchlist alert: Cardi B in Charlotte is in 24 hours`
- **Hypothesis:** A's urgency framing should outperform B's more neutral tone. Loss aversion + countdown.

### Urgency Digest — TWICE (next week)
- **A:** `Your Ticket Watchlist Update — TWICE in Austin next week`
- **B:** `TWICE prices won't get cheaper — Austin dates in 6 days`
- **Hypothesis:** B's scarcity framing drives urgency better for 6-7 day window.

### Drip Email 1 (queued when fixed)
- **A (control):** `3 Tips to Save on Your First Ticket Purchase`
- **B (variant):** `You're overpaying for tickets. Here's the fix.`

### CTA Review
- Drip CTAs → `ticketscan.io/dashboard` ✅
- Watchlist digest CTA → `ticketscan.io/watchlist` ✅
- Primary CTA placement: above the fold ✅

---

## Action Items

### P0 — Critical (Day 5 of outage)
1. **SMTP/drip pipeline is still broken.** `POST /api/admin/drip-run` times out for the 5th consecutive day. The Resend HTTP API alternative (commit `e8621a5`) needs to be verified as the active email provider. This is the #1 priority for the engineering team.
2. **bhaygood728@gmail.com needs manual outreach.** Cardi B in Charlotte is TOMORROW. This user has been tracking it since Apr 3 and has received zero communications from us. If SMTP can't be fixed today, consider a direct manual email outside the platform.
3. After SMTP fix, trigger `POST /api/admin/drip-run` to clear the 20-user backlog immediately.

### P1 — High
4. **Target price UX:** Still 0/72 watchlist items with target prices. Blocking all price alert functionality. Suggest adding a smart default (e.g., 10% below current lowest price) when users add items.
5. **Auto-archive past events:** Past-event watchlist items are growing. Add cleanup job.

### P2 — Medium
6. **Newsletter growth:** 69-day stall. Need signup CTAs on blog posts, venue pages, and World Cup pages.
7. **Build watchlist digest endpoint** for automated per-user sends.
8. **Drip catch-up logic:** When SMTP is fixed, users 30+ days old should receive emails at an accelerated pace (not one per interval) to catch up on missed content.

---

## Handoff → Analytics Agent (Agent 7)
- **Subscriber total:** 3 active, 0 net change, 69-day stall
- **Drip pipeline:** BROKEN — Day 5 of outage, 0 sends ever, 20 users in backlog
- **Price alerts:** 0 ever triggered — 0/72 watchlist items have target prices (UX gap)
- **User growth:** +2 today (pete.uzelac77, goldy.pec.2012), 51 total
- **Watchlist:** 72 items (+7 from yesterday), 3 events within 7 days
- **Critical miss:** bhaygood728 has Cardi B tomorrow and has never received any email from us
- **Email channel status:** Completely dormant. Zero emails of any kind have ever reached a user. Day 5.
