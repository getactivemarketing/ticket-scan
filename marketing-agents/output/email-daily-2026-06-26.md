## Email Daily — 2026-06-26

### Drip Campaign
- Emails sent (24h): 0
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: 0 (drip has never fired — `drip_emails_sent` is empty)
- Pending users (overdue for E1): 16 users at 3–15 days since signup, all with `last_email_sent: 0`
- Not yet overdue (days 1–2): 4 users

**Critical:** 16 users signed up 3–15 days ago and have received zero drip emails. The cron job either isn't running or the `/api/admin/drip-run` endpoint hasn't been triggered. DO NOT blind-trigger drip-run without confirming what it will send — risk of blasting all 16 overdue users at once. Needs Samir review before firing.

Most urgent overdue users (days ≥ 3, eligible for E1):
- vince12000000@gmail.com — day 3
- meghanheindel1@gmail.com — day 3
- starmanspiff@protonmail.com — day 4
- accounts@edwintrejo.com — day 5
- jerrykielbasa@gmail.com — day 5
- gmalzberg@gmail.com — day 5
- rodaguirre5@gmail.com — day 7 (overdue for E1 and E2)
- ... +9 more (days 9–15)

### Price Alerts
- Alerts triggered (24h): 0
- Events with drops: n/a (no active alerts — 0 watchlist items have target prices set)
- Delivery failures: 0
- Root cause: No target-price input exists in the UI; API supports it but EventCard sends no `targetPrice`. Alert system is structurally inert until UI fix ships.

### Subscriber Growth
- New subscribers: 0 (no activity today)
- Unsubscribes: 0
- Net: 0
- Total active: 3 (1 real — roos_leeuwen@eaglesmail.net via homepage; 2 test accounts)

---

### Watchlist Digest — Content Prepared (Not Sendable)

160 watchlist items tracked across 132 users, but no target prices exist in the dataset so personalized buy/hold signals can't be generated. Digest template ready for when the UI fix ships.

**Template (ready to use):**
```
Subject A: Your Ticket Watchlist Update — [X] events tracked
Subject B: Prices moved on [Event]. Here's what to do.
Preview: [Event Name] is [up/down] $X. See your full update.

Hi [Name],

Here's today's update on the tickets you're watching:

🟢 [Event] — Prices DOWN $X (now $Y) — [BUY NOW / Still tracking]
🔴 [Event] — Prices UP $X (now $Y) — [HOLD / Set a lower alert]
⚪ [Event] — No change ($Y) — [X days until event]

[CTA: View your watchlist → ticketscan.io/watchlist]
```

---

### Subject Line A/B Variants — Drip Email 1

Prepared for when drip-run is cleared to fire:

| Version | Subject |
|---------|---------|
| A (current) | 3 Tips to Save on Your First Ticket Purchase |
| B (curiosity) | You're paying too much for tickets. Here's proof. |
| C (urgency) | Before you buy another ticket, read this |

Recommendation: Test B vs A if list reaches sufficient volume. C for re-engagement of oldest overdue users (days 10+).

---

### Action Items for Samir
1. **Drip not firing** — confirm whether Railway cron is running or trigger manually after review. 16 users waiting up to 15 days.
2. **Target price UI fix** — single input on EventCard unblocks all alert functionality and watchlist digest.
3. **Newsletter** — only 1 real subscriber. Consider adding a visible subscribe CTA to the new blog/footer forms that were shipped.
