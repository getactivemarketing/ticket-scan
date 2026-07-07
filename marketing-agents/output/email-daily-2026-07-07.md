## Email Daily — 2026-07-07

### Drip Campaign
- Emails sent (24h): 0
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: 0
- Total ever sent: 0 (`stats: []` — drip has never fired)

**⚠️ P1 — DRIP NEVER FIRES**
All 146 users have `last_email_sent: 0`. The cron job is configured but has delivered nothing.
Do NOT blind-trigger `/api/admin/drip-run` — risk of blasting all real inboxes at once.

Users overdue for Email 1 (≥ day 3 with no emails received):

| User (masked) | Days since signup | Overdue emails |
|---|---|---|
| lori.r.sabet@… | 3 | E1 |
| eemorkeviciute@… | 3 | E1 |
| erickchen@… | 3 | E1 |
| thellrung@… | 4 | E1 |
| dsh1105@… | 5 | E1 |
| goldpassconcierge@… | 6 | E1 |
| ambeargram@… | 6 | E1 |
| dreasommers@… | 8 | E1 |
| britishcpa@… | 10 | E1 |
| sameerqure@… | 10 | E1 |
| gimlithepirate@… | 12 | E1, E2 |
| areola3@… | 12 | E1, E2 |
| wvolz8926@… | 13 | E1, E2 |
| allyleblanc@… | 13 | E1, E2 |
| vince12000000@… | 14 | E1, E2 |
| meghanheindel1@… | 14 | E1, E2 |

*(These are just the first 20 returned — all 146 users carry `last_email_sent: 0`.)*

Recommendation: Investigate why the cron doesn't fire before triggering manually.
Check Railway logs for the `0 10 * * *` drip job. A single controlled test send
to 1 user would confirm SMTP is live before any bulk send.

---

### Price Alerts
- Alerts triggered (24h): 0
- Events with drops: n/a (price history table is empty — tracking cron not producing data)
- Delivery failures: 0
- `activeAlerts` platform-wide: 0

Root cause (from prior audit): No target-price input exists in the UI. `EventCard`
add-to-watchlist sends no `targetPrice`, so alerts can never arm. Fix is one
frontend input field — see memory note `watchlist-no-targets-alerts-cant-arm.md`.

---

### Subscriber Growth
- New subscribers today: 0
- Unsubscribes today: 0
- Net: 0
- Total active: 3 (homepage: 1, test/api-test: 2)

Newsletter list is effectively test-only. Real subscriber growth is via user
registration (146 users) but those are not in `newsletter_subscribers`.

---

### Platform Signal — New Registrations
- New users today (UTC): 3
  - tscheck0707@mailinator.com (likely test)
  - jonmeisburg@gmail.com
  - mgoff0324@gmail.com
- New users this week: 11
- Total registered users: 146
- Total watchlist items: 168 (avg ~1.15 per user)

---

### Watchlist Digest Prep
**Status: Cannot send meaningful digest today.**

Reason: `price_history` table returns 0 rows — the price tracking cron is not
storing data. Without price movement data, a "prices moved on X" digest would be
fabricated. Do not send.

Template is ready for when price tracking is live:

```
Subject A: Your Ticket Watchlist Update — [X] events tracked
Subject B: Prices just moved on one of your events — check it

Preview: [Event Name] price changed. Here's what to do.

Hi [Name],

Here's your watchlist snapshot for today:

🟢 [Event] — Price DOWN $X (now $Y) — [BUY NOW button]
🔴 [Event] — Price UP $X (now $Y) — [HOLD / lower your target]
⚪ [Event] — No change ($Y) — [X days until event]

→ View your full watchlist: ticketscan.io/watchlist
```

---

### Subject Line A/B Test Queue
No live drip sends today. Variants staged for when drip fires:

**Email 1 — "3 Tips to Save on Your First Ticket Purchase"**
- A (original): 3 Tips to Save on Your First Ticket Purchase
- B (curiosity): The ticket-buying mistake most people make (and how to avoid it)

**Email 2 — "How Price Alerts Can Save You Hundreds"**
- A (original): How Price Alerts Can Save You Hundreds
- B (social proof): Why 140+ fans are watching ticket prices right now

---

### Action Items (for human review)
1. **Debug drip cron** — Check Railway scheduler logs; confirm SMTP credentials live
2. **Test single drip send** — One user only, confirm delivery before bulk
3. **Add target-price input to EventCard** — Unblocks all alert/savings functionality
4. **Consider newsletter list merge** — Registered users could opt into newsletter at signup
