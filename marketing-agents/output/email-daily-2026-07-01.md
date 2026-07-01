## Email Daily — 2026-07-01

### Drip Campaign
- Emails sent (24h): 0
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: 0 (drip has never fired — `drip_emails_sent` is empty, `stats: []`)
- Pending queue: 20 users, all `last_email_sent: 0`
  - E1 overdue (≥3 days): **17 users**
  - E2 overdue (≥7 days): **13 users**
  - E3 overdue (≥14 days): **4 users** (days 14–17 — signed up June 14–16)

**Critical — escalating:** 4 users are now 14–17 days past signup with zero contact:
- webbercycle@gmail.com — day 16 (E1, E2, E3 overdue)
- l.ilyman.de.rson.8.13@googlemail.com — day 17 (E1, E2, E3 overdue)
- lukew25073@gmail.com — day 14 (E1, E2, E3 overdue)
- kondadz@gmail.com — day 14 (E1, E2, E3 overdue)

Newest users (not yet overdue): goldpassconcierge@gmail.com (day 0), ambeargram@gmail.com (day 0), dreasommers@gmail.com (day 2).

DO NOT blind-trigger drip-run without Samir review — risk of sending all 5 overdue emails at once to some users.

### Price Alerts
- Alerts triggered (24h): 0
- Events with drops: n/a (activeAlerts=0, triggeredAlerts=0)
- Delivery failures: 0
- Root cause: No target-price input in UI → all 163 watchlist items have `target_price = null`. Alert system structurally inert until UI fix ships (see Action Items).

### Subscriber Growth
- New subscribers: 0
- Unsubscribes: 0
- Net: 0
- Total active: 3 (1 real — roos_leeuwen@eaglesmail.net; 2 test accounts)

---

### Watchlist Digest — World Cup Urgency Frame (Not Sendable Yet)

163 watchlist items across 137 users. No target prices in DB, price history empty — can't generate buy/hold signals. However, the World Cup knockout phase is live (tournament runs through July 19), which provides a genuine urgency hook even without prices.

**Urgency-first digest template for WC window:**

```
Subject A: World Cup knockouts are live — are your tickets sorted?
Subject B: 18 days left to buy World Cup tickets. Here's what we know.
Preview: The matches fans are tracking on TicketScan right now.

Hi [Name],

The World Cup knockout rounds are underway — semifinals and the Final
(July 19 at MetLife) are 18 days out.

Here's what we're watching on TicketScan:

⚽ Events you're tracking:
  • [Event] — [X] days until kickoff
  • [Event] — [X] days until kickoff

Set a target price on any event and we'll alert you the moment tickets
drop. (Takes 10 seconds.)

[CTA: Set your target price → ticketscan.io/watchlist]

– The TicketScan Team
```

*Note: CTA directs to watchlist rather than event page because event page is still login-gated and lacks a target-price input. Both pages need the fix.*

---

### Subject Line A/B Variants — Ready for Drip E1

Updated with World Cup context since WC is happening now:

| Version | Subject | Hook |
|---------|---------|------|
| A (current) | 3 Tips to Save on Your First Ticket Purchase | Educational |
| B (curiosity) | You're paying too much for tickets. Here's proof. | Challenge |
| C (WC urgency) | World Cup Final tickets are still on sale — here's when to buy | Timely |

Recommendation: Version C is the highest-relevance hook for the 17 E1-overdue users given the WC live window. If drip-run is cleared, test C vs A (split by signup date — older users get C, newer get A).

---

### Action Items for Samir

1. **Drip cron still dead** — 17 users haven't received a single email (up to 17 days waiting). Please confirm whether the Railway cron job is running, or manually trigger drip-run after verifying it sends only the next-due email per user (not all overdue emails at once).
2. **Target-price UI** — one input field on EventCard unblocks all alert and digest functionality. Nothing downstream can work without it.
3. **Newsletter flat at 3** — the new blog/footer signup forms shipped (per memory); may need a week of traffic to show up in subscriber counts.
