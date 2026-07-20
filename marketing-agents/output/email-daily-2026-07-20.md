# Email Daily — 2026-07-20

## Drip Campaign

- Emails sent (24h): 0
- Emails sent (all-time): 0
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: unknown (no delivery receipts in drip_emails_sent)

**ESCALATION — drip has never fired.**
173 registered users, zero have received any drip email. Users overdue for E1 (Day 3) include at least:

| User ID | Email | Days Since Signup |
|---------|-------|-------------------|
| 168 | jlombardo427@gmail.com | 3 |
| 167 | frerqrfq3@gmail.com | 3 |
| 166 | ryan.tatusko@gmail.com | 4 |
| 165 | rebdav13@gmail.com | 4 |
| 164 | meaganlong19@gmail.com | 5 |
| 163 | roadmap-fizz.38@icloud.com | 5 |
| 162 | jgagznos@gmail.com | 5 |
| 161 | yeynermunoz124@gmail.com | 6 |
| 160 | danielldk930@gmail.con | 7 (typo domain — will bounce) |
| 159 | danielldk930@gmail.com | 7 |

Many more users further out (days 8–30+) are overdue for E1 through E5.

**Do not blind-trigger `/api/admin/drip-run` without verifying SMTP is configured correctly first** — risk of sending duplicate or broken emails to real users. Root cause to verify: SMTP credentials in Railway env vars, cron schedule running on prod.

---

## Price Alerts

- Alerts triggered (24h): 0
- Events with drops: n/a
- Delivery failures: n/a

Price history table has 0 rows (no price-tracking cron results). Alerts cannot arm without target prices set in UI (no target price input exists in EventCard). Both issues are known platform-level blockers.

---

## Subscriber Growth

- New subscribers today: 0
- New users registered today: 2 (rajneeshg@gmail.com, jeff.neiheisel@gmail.com)
- Unsubscribes today: 0
- Net newsletter growth: 0
- Total active newsletter subscribers: 3 (2 are test/internal)

Note: user registrations ≠ newsletter subscribers. Newsletter form is present on blog/footer since June 7 fix but conversion remains near zero. /register opt-in flow not yet implemented.

---

## Watchlist Digest Prep

**Platform state:** 184 watchlist items across users, 0 with price movement data (price history empty). A digest cannot show real price deltas today.

**Template ready for when price data is live:**

```
Subject A: Your Ticket Watchlist Update — [X] events tracked
Subject B: [Event] prices just changed — here's what to do

Preview: You're watching [X] events. Here's today's status.

Hi [first name or "there"],

Here's today's update on the tickets you're tracking:

🟢 [Event] — Prices DOWN $X (now $Y avg) — consider buying
🔴 [Event] — Prices UP $X (now $Y avg) — hold for now
⚪ [Event] — No change (avg $Y) — [X] days until event

[Button: View Your Watchlist →]

— The TicketScan team
```

**Sending criteria (hold until):**
1. Price history cron is running and returning non-zero rows
2. At least one watchlist item has a recorded price delta
3. SMTP delivery confirmed working (drip issue resolved first)

---

## Subject Line A/B Variants — Day 3 Drip (E1)

For the overdue E1 cohort once SMTP is confirmed:

| Version | Subject | Hook |
|---------|---------|------|
| A (current) | 3 Tips to Save on Your First Ticket Purchase | Utility |
| B | You're paying too much for tickets. Here's why. | Curiosity + pain |
| C | How to never overpay for tickets again | Outcome |

Recommended test: A vs B on the next send batch (split by user ID odd/even).

---

## Action Items

1. **Verify Railway SMTP env vars are set** (SMTP_USER, SMTP_PASS, SMTP_HOST) — this is the likely root cause of zero drip sends
2. **Check cron schedule is running on prod** — local cron won't fire against prod DB
3. **Fix typo address** `danielldk930@gmail.con` (user 160) — update or suppress before any send
4. **Target price UI** — still no input control in EventCard; alerts remain unarmed until fixed
5. **Register opt-in** — add newsletter checkbox to /register to convert new signups
