# Email Daily — 2026-04-10

## Drip Campaign
- Emails sent (24h): 0
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: 0 recorded (because no sends attempted)
- **Pending users (overdue, never received any drip): 20**
  - 20/20 have `last_email_sent = 0` — no drip emails have ever been delivered
  - Breakdown by eligibility:
    - E1 eligible (3+ days): 20 users
    - E2 eligible (7+ days): 19 users (bhaygood728 now at 7 days)
    - E3 eligible (14+ days): 15 users
    - E4 eligible (21+ days): 11 users (leofearon15 now at 20d, close)
    - E5 eligible (30+ days): 7 users (tosophiameyer + garretth9090 now at 30d)
  - Newest user: blubberboi@yahoo.com (1 day — not yet eligible for E1)
  - Oldest pending: krusesin2023@gmail.com (41 days, should have received all 5 emails)
- **🚨 ESCALATION (Day 4):** Drip campaign remains completely non-functional. `POST /api/admin/drip-run` times out — likely SMTP connection hanging. This was first flagged on 2026-04-07. Zero drip emails have ever been sent to any user. **This is now a P0 outage entering its 4th day.**
- Manual drip-run attempted today: **timed out** (>60s) — confirms SMTP stall, not a cron scheduling issue

## Price Alerts
- Alerts triggered (24h): 0
- Active alerts: 0 (per `/api/admin/stats`)
- Triggered alerts (all time): 0
- **Contributing factor:** 0 out of 50 watchlist items have a `target_price` set — users are not setting price targets. Without targets, the alert logic (`currentPrice <= targetPrice`) can never fire. This is a UX gap, not just a backend issue.

## Subscriber Growth
- New subscribers (24h): 0
- Unsubscribes (24h): 0
- Net: 0
- Total active: 3
  - roos_leeuwen@eaglesmail.net (homepage, 2026-02-01) — only organic signup
  - samir.sgpatel@gmail.com (test, 2026-01-27)
  - test@example.com (api-test, 2026-01-04)
- **Stall duration:** 68 days since last organic subscriber signup

## Platform Context
- Total users: 49 (+1 today, +1 this week)
- Watchlist items: 65 (50 via API; some pruned)
- Unique users with active watchlists: 23
- Favorites: 0

---

## Watchlist Digest Prep

### Upcoming Events (within 14 days) — URGENCY TRIGGERS
| Event | Venue | Date | Days Out | User |
|-------|-------|------|----------|------|
| Cardi B - Little Miss Drama Tour | Spectrum Center, Charlotte | Apr 12 | **2 days** | bhaygood728@gmail.com |
| TWICE World Tour | Moody Center ATX, Austin | Apr 17 | 7 days | yuehsu@gmail.com |
| TWICE World Tour | Moody Center ATX, Austin | Apr 18 | 8 days | yuehsu@gmail.com |

### Digest Template (ready for send once SMTP is fixed)

**For bhaygood728@gmail.com:**
```
Subject: ⚡ 2 days until Cardi B — your ticket watchlist update
Preview: The Little Miss Drama Tour in Charlotte is THIS Sunday.

Hi there,

Here's your TicketScan watchlist update:

⚡ Cardi B - Little Miss Drama Tour
   Spectrum Center, Charlotte — April 12 (2 DAYS AWAY)
   → No target price set. Set one now to get alerted if prices drop.
   → Recommendation: BUY NOW — event is in 2 days, prices only go up from here.

[CTA: Compare Prices on TicketScan →]
```

**For yuehsu@gmail.com:**
```
Subject: Your Ticket Watchlist Update — 2 events tracked
Preview: TWICE in Austin is next week. Here's the move.

Hi there,

Here's your TicketScan watchlist update:

⏳ TWICE [THIS IS FOR] World Tour — Moody Center ATX, Austin
   April 17 (7 days away) — No target price set
   → With a week out, prices are likely near their floor. Good time to buy.

⏳ TWICE [THIS IS FOR] World Tour — Moody Center ATX, Austin
   April 18 (8 days away) — No target price set
   → Same window. Compare both nights and grab the better deal.

[CTA: Compare Prices on TicketScan →]
```

### Other Notable Watchlist Items (future events)
- **Ed Sheeran: LOOP Tour** @ SoFi Stadium (Aug 8) — blubberboi@yahoo.com — just added yesterday
- **Shakira World Tour** @ Barclays Center (Jul 20) & UBS Arena (Jul 23) — laye.aurelien@wanadoo.fr
- **Harry Styles: Together, Together** @ MSG (Sep 16) — tosophiameyer@gmail.com
- **Florence + The Machine** @ State Farm Arena (May 1) — tate.sheppard@gmail.com — 21 days out
- **Flyleaf 20th Anniversary** @ House of Blues Chicago (Jul 17-18) — lvasub6@gmail.com

### Past Events Still on Watchlist (cleanup candidates)
13 watchlist items reference events that have already occurred. These should be auto-archived or users should be notified to clean up their watchlists.

---

## Subject Line A/B Tests

### Urgency Digest (for events within 7 days)
- **A (control):** `Your Ticket Watchlist Update — [X] events tracked`
- **B (urgency):** `⚡ [Event Name] is in [X] days — here's the move`
- **Hypothesis:** Urgency + specificity outperforms generic subject. Expected +15-25% open rate.

### Drip Email 1 (queued for next working run)
- **A (control):** `3 Tips to Save on Your First Ticket Purchase`
- **B (variant):** `You're overpaying for tickets. Here's the fix.`
- **Hook:** Loss aversion + curiosity gap

### Drip Email 2
- **A (control):** `How Price Alerts Can Save You Hundreds`
- **B (variant):** `The $200 mistake 73% of ticket buyers make`
- **Hook:** Specificity + social proof

### CTA Review
- All drip email CTAs link to `https://www.ticketscan.io/dashboard` — ✅ correct
- Watchlist digest CTA should link to `https://www.ticketscan.io/watchlist` — ✅ correct
- Primary CTA placement: above the fold in all templates — ✅

---

## Action Items

### P0 — Critical (Day 4 of outage)
1. **Fix SMTP/drip pipeline.** `POST /api/admin/drip-run` times out. Root cause is likely SMTP connection hanging (identified in prior SMTP diagnostics commit `9c7cce5`). The Resend HTTP API was added as an alternative (`e8621a5`) — **verify Resend is configured as the active provider and drip-run uses it instead of SMTP.**
2. After SMTP fix, trigger `POST /api/admin/drip-run` to clear the 20-user backlog.
3. Manually send urgency emails to bhaygood728@gmail.com (Cardi B in 2 days) and yuehsu@gmail.com (TWICE in 7-8 days).

### P1 — High
4. **Target price UX fix:** 0/50 watchlist items have target prices set. The "add to watchlist" flow either doesn't prompt for a target price or users skip it. Without targets, price alerts can never fire. Recommend making target price a **prompted field** (with smart default based on current lowest price).
5. **Auto-archive past events:** 13 watchlist items are for past events — add a cleanup job or at minimum exclude them from digest queries.

### P2 — Medium
6. **Newsletter growth:** 68-day stall. Audit homepage signup CTA placement, add signup prompts to blog posts and venue pages.
7. **Build `/api/admin/watchlist-digest` endpoint** for programmatic per-user digest generation with price deltas.
8. **Add `/api/admin/price-alert-stats` endpoint** for alert delivery visibility.

---

## Handoff → Analytics Agent (Agent 7)
- **Subscriber total:** 3 active, 0 net change, 68-day stall
- **Drip pipeline:** BROKEN — Day 4 of outage, 0 sends ever, 20 users in backlog
- **Price alerts:** 0 ever triggered — root cause identified: no users have set target prices (UX gap)
- **User growth:** +1 today (blubberboi@yahoo.com), 49 total
- **Watchlist:** 65 items, 23 unique users, 3 events within 14 days (urgency window)
- **Key insight:** Email channel is completely dormant. Zero emails of any kind (drip, alert, digest) have ever reached a user. This is the single biggest conversion gap in the funnel.
