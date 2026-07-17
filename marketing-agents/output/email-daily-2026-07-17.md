## Email Daily — 2026-07-17

### Drip Campaign
- Emails sent (24h): **0** — zero drip emails have been sent in platform lifetime
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: unknown (no sends to report failures from)
- Open rates / click rates: n/a (no sends)

**Overdue sends (action required):**
| Email # | Trigger | Users overdue | Status |
|---------|---------|--------------|--------|
| Email 1 | Day 3   | 13           | Stuck  |
| Email 2 | Day 7   | 3            | Stuck  |
| Email 3 | Day 14  | 0            | —      |

13 registered users have passed the Day 3 threshold and never received Email 1. 3 have passed Day 7 with no emails at all. The drip cron is not firing — this is a production infrastructure issue, not a content issue.

**Root cause to investigate:** Confirm whether the `node-cron` drip job (`0 10 * * *`) is running on Railway. The `drip-stats` endpoint returning `stats: []` (not `null` or error) confirms the job is either not reaching the send step or the cron itself isn't firing.

**Do not trigger `/api/admin/drip-run` manually** until verified: 16 real user email addresses in the pending queue would receive live email.

---

### Price Alerts
- Alerts triggered (24h): **0**
- Events with price drops: none (price_history table is empty — price-tracking cron not populating data)
- Active alerts armed: **0** (of 178 watchlist items — no target prices set, UI has no target price input)
- Delivery failures: n/a (nothing to deliver)

**Blocker:** The watchlist UI never prompts users to set a target price, so `activeAlerts` will stay at 0 regardless of price data. Fix = one small front-end input on the Add to Watchlist flow.

---

### Subscriber Growth
- New subscribers (24h): n/a — newsletter_subscribers table only has 3 lifetime entries (1 homepage, 1 test, 1 api-test). No timestamp data for today specifically.
- Unsubscribes (24h): 0
- Net: 0
- Total active: **3** (effectively 1 real subscriber: roos_leeuwen@eaglesmail.net)

Note: Newsletter subscriber count (3) is separate from registered users (168). The registration flow does not create newsletter_subscribers rows — only the explicit subscribe form does.

---

### Watchlist Digest Prep

Cannot generate personalized price digests today — price_history is empty (cron not populating data), so current prices vs. target are unavailable for all 178 watchlist items.

**Template ready for when price data is live:**

```
Subject: Your Ticket Watchlist Update — [X] events tracked
Preview: Prices moved on [Event Name]. Here's what to do.

Hi [First Name],

Here's today's update on the [X] events you're watching:

🟢 [Event] — Prices DOWN $X (now $Y) — [BUY NOW if at/below target]
🔴 [Event] — Prices UP $X (now $Y) — Hold and watch
⚪ [Event] — No change ($Y) — [X days until event]

[View your full watchlist → ticketscan.io/watchlist]
```

Digest send is blocked until: (1) price-tracking cron is confirmed live, (2) target price input is shipped to UI.

---

### Subject Line A/B Variants

For **Email 1** (Day 3 drip — first to send once drip is fixed):

| Variant | Subject | Hook |
|---------|---------|------|
| A | "3 Tips to Save on Your First Ticket Purchase" | Utility / list |
| B | "Most fans overpay by $40+. Here's how to avoid it." | Loss aversion |
| C | "Your first TicketScan tip is waiting" | Personalization + curiosity |

Recommendation: Test B vs. A first — loss aversion outperforms utility lists in ticket/travel verticals. Volume is low (13 users for first send) so results won't be statistically significant, but it sets a benchmark.

---

### Escalations

1. **CRITICAL — Drip cron not firing**: 16 real users overdue, 0 emails ever sent. Check Railway cron logs for the drip job. If cron is not running, drip revenue (retention, re-engagement) is completely dark.

2. **HIGH — Price tracking cron not populating data**: Without `price_history` rows, price alerts, trend charts, and watchlist digests are all inert. Same cron infrastructure issue likely affects both.

3. **MEDIUM — Target price UI missing**: Even once crons are fixed, `activeAlerts` stays 0. Single front-end input needed on watchlist Add flow.

---

### For Analytics Agent (Agent 7)
- Registered users: 168 (17 this week, 2 today)
- Watchlist items: 178
- Newsletter subscribers: 3 active
- Drip emails sent lifetime: 0
- Price alerts triggered lifetime: 0
