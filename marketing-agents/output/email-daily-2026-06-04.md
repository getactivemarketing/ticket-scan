## Email Daily — 2026-06-04

> All figures pulled live from the admin API this run. Where a metric can't be
> verified, it's marked N/A rather than estimated. No price movements are
> reported because watchlist `target_price` is null on every item and the price
> feed returns null prices — there is no verified price data to alert on.

### Drip Campaign
- Emails sent (24h): **0**
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: N/A (nothing attempted)
- **Lifetime drip sends: 0** — `/api/admin/drip-stats` returns `stats: []` and all
  20 pending users show `last_email_sent: 0`.

🚨 **ESCALATION — drip campaign is not sending.** 20 users are queued with zero
emails delivered, several long overdue against the 3/7/14/21/30-day schedule:

| Overdue for | Users (days since signup) |
|---|---|
| Email #5 (Day 30) | none yet — oldest pending is Day 20 |
| Email #4 (Day 21) | vlanza@sbcglobal.net (20) |
| Email #3 (Day 14) | nunemakerc (19), belder4308 (18), cutekitten1234 (18), lisallam (17), eduardo@del-valle (17), 9440111 (16), keegansmith18 (14), zhouyilinbest (14), brockedwardnelson (14) |
| Email #2 (Day 7) | pika4696 (7), samvirsujan (7) |
| Email #1 (Day 3) | mattfleischer4 (5), coleesparrago (5), officialrizk72 (5) |

Root cause is upstream of this agent (drip cron not delivering / SMTP not firing
for the drip job). **Not auto-triggering `/api/admin/drip-run`** — firing it
blind against 20 users who've each received nothing risks a multi-email blast to
real inboxes. Needs a human to confirm SMTP creds are live and that drip-run
sends only the next-due email per user before it's run. Flagged to Analytics
(Agent 7) and for human review.

### Price Alerts
- Alerts triggered (24h): **0** (`activeAlerts: 0`, `triggeredAlerts: 0`)
- Events with drops: none — no verified price data exists to compare against
- Delivery failures: N/A
- Note: every watchlist item has `target_price: null`, so no alert can fire by
  design. The alert funnel is effectively dormant until users set targets.

### Subscriber Growth (newsletter_subscribers)
- New subscribers: **0**
- Unsubscribes: 0
- Net: **0**
- Total active: **3** (newest subscribed 2026-02-01; the other two are test rows)

⚠️ Newsletter list has not grown since February. Consistent with the known issue
that the signup form only exists on the homepage and blog/footer CTAs dead-end.
This is a product/CRO fix, not an email-send fix.

### User Growth (users table — drip audience, distinct from newsletter)
- New signups today: **2** (belles_hayride_4b@icloud.com, paradajoseph41@gmail.com)
- New signups this week: 8 | Total users: 98 | Total watchlist items: 117
- The drip audience IS growing (8/week) — which makes the 0-sends drip failure
  the single highest-leverage email fix available right now.

### Subject Line / CTA Notes
No drip, alert, or digest emails were actually sent today, so no live A/B test
ran. Variants drafted below for the watchlist digest are ready to test the moment
sending is unblocked.
