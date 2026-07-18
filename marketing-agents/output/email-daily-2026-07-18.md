## Email Daily — 2026-07-18

### Drip Campaign
- Emails sent (24h): 0
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Total ever sent: 0 (`drip_emails_sent` table empty — `stats: []` confirmed)
- Failures: n/a (nothing attempted)

**Status: Drip is fully inert — cron job not firing or silently failing**

Pending users (from API, most recent 20 of 169 total):
- Eligible for E1 (≥3 days, no email received): IDs 164, 163, 162 (day 3), 161 (day 4), 160, 159 (day 5), 158, 157, 156 (day 6)
- Eligible for E1 + E2 (≥7 days): IDs 155, 154, 153, 152 (day 7), 151, 150 (day 8)
- All 169 registered users show `last_email_sent: 0`

⚠️ NOT triggering `POST /api/admin/drip-run` manually — risks mass-blasting real inboxes. Needs human review to diagnose cron failure before any trigger.

### Price Alerts
- Alerts triggered (24h): 0
- Active alerts: 0 (platform-wide, per `/api/admin/stats`)
- Delivery failures: 0 (nothing to deliver)
- Root cause: No target-price input exists in the add-to-watchlist UI; watchlist items are created without target prices, so alert conditions can never arm.
- Fix required: Add target price field to EventCard's add-to-watchlist form.

### Subscriber Growth (newsletter_subscribers table)
- New subscribers today: 0
- Unsubscribes today: 0
- Net: 0
- Total active: 3 (includes samir.sgpatel@gmail.com [test] and test@example.com [api-test]; 1 real subscriber)
- Note: 169 registered users are in the `users` table, not `newsletter_subscribers` — no auto-add on signup.

---

### Watchlist Digest Status
- 180 watchlist items tracked across 169 users
- Digest blocked: `price_history` table empty → no price movement data (up/down/stable vs target)
- Cannot generate personalized digest until price tracking cron is running and recording data

### Subject Line A/B Variants (prepared for when drip goes live)

**Email 1 — Day 3 ("3 Tips to Save")**
- A: "3 Tips to Save on Your First Ticket Purchase"
- B: "You're overpaying for tickets. Here's how to stop."

**Email 2 — Day 7 ("How Price Alerts Can Save You Hundreds")**
- A: "How Price Alerts Can Save You Hundreds"
- B: "Set it, forget it, save $40+ — here's how TicketScan alerts work"

**Email 3 — Day 14 ("The Best Time to Buy")**
- A: "The Best Time to Buy Tickets (Data-Backed)"
- B: "7–14 days out is the sweet spot. Here's the data."

---

### Open Issues (persistent)
1. **Drip cron not firing** — 0 emails sent to 169 users ever. Investigate cron job in `index.js` and Railway scheduler.
2. **Price alerts broken** — Requires target-price UI input fix in EventCard.
3. **Price tracking inert** — `price_history` empty; 4-hour cron not recording data.
4. **Newsletter vs users disconnect** — 169 users, 3 newsletter subscribers. No opt-in path at registration.

### For Analytics Agent (Agent 7)
- Total registered users: 169 (+1 today, +14 this week)
- Newsletter active: 3 (unchanged)
- Drip sent total: 0
- Price alerts fired: 0
