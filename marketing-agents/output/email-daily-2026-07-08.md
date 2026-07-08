## Email Daily — 2026-07-08

### Drip Campaign
- Emails sent (24h): 0
- All-time sent: 0 (drip has never fired)
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: n/a (no sends attempted)
- Open/click rates: n/a (no sends)

**Pending queue as of today:**
- Total users with last_email_sent=0: 20
- Eligible for Email 1 (≥3 days since signup): 16 users
- Eligible for Email 2 (≥7 days since signup): 11 users
- Eligible for Email 3 (≥14 days since signup): 4 users
- Not yet eligible (<3 days): 4 users (ids 143-146)

**Notable overdue users:**
| User ID | Days Since Signup | Emails Overdue |
|---------|------------------|----------------|
| 127–130 | 14–15 days       | E1 + E2 + E3   |
| 131–136 | 7–13 days        | E1 + E2        |
| 138–142 | 4–6 days         | E1             |

**Status:** Drip is silently failing — 146 registered users, 0 drip emails ever delivered. Root cause unconfirmed (SMTP config, cron not running in prod, or code path bug). Do NOT trigger `/api/admin/drip-run` blindly — risks blasting 16+ real inboxes with a backlog of emails simultaneously.

**Recommended action:** Investigate why the prod cron isn't firing before triggering manually. Test with a single seed user first.

---

### Price Alerts
- Alerts triggered (24h): 0
- Active alerts armed: 0
- Events with price drops: n/a (price history table empty — no tracking running)
- Delivery failures: n/a

**Blocker:** No price alerts can fire because:
1. No target prices are set on any watchlist item (UI has no target price input — confirmed bug)
2. Price history table has 0 rows (price tracking cron appears inert in production)

---

### Subscriber Growth
- New subscribers (24h): 0 (newsletter table unchanged)
- Unsubscribes: 0
- Net: 0
- Total active newsletter subscribers: 3 (all appear to be test/seed accounts)

**Note:** 146 registered users ≠ newsletter subscribers. The `users` table and `newsletter_subscribers` table are separate. Of 146 registered users, only 3 have ever subscribed to the newsletter. This is a large gap — onboarding opt-in is missing from the registration flow.

---

### Watchlist Digest Status
- Watchlist items: 168 (across active users)
- Price data available: None (price_history empty)
- Digest sendable today: No — cannot report price movements without price history data

**Digest template is ready** (below) but cannot be populated with real price data. Sending a digest with no price movement data provides no value. Hold until price tracking is operational.

---

### Watchlist Digest Template (Ready When Data Available)

```
Subject A: Your Ticket Watchlist Update — [X] events tracked
Subject B: Prices moved on [Event Name] — here's what to do

Preview text: Quick update on the tickets you're watching.

Hi [First Name],

Here's today's update on the tickets you're tracking:

🟢 [Event] — [Venue], [Date]
   Price DOWN $[X] → now $[Y] | [BUY NOW if ≤ target / Still [X] days away]

🔴 [Event] — [Venue], [Date]
   Price UP $[X] → now $[Y] | Hold — target is $[target]

⚪ [Event] — [Venue], [Date]
   No change — $[Y] | [X] days until event

[CTA BUTTON: View Your Watchlist → https://ticketscan.io/watchlist]

—
TicketScan | Your data-driven ticket companion
Unsubscribe | ticketscan.io
```

---

### Subject Line A/B Variants — Email 1 (Day 3 Drip)

Prepared for when Email 1 send is authorized. Volume too low for statistical significance but qualitative differentiation is useful.

**Current subject:** "3 Tips to Save on Your First Ticket Purchase"

| Variant | Subject | Hook |
|---------|---------|------|
| A (control) | 3 Tips to Save on Your First Ticket Purchase | Listicle / utility |
| B | Most people overpay for tickets. Here's how not to. | Social proof / fear of loss |
| C | Before you buy your next ticket, read this | Curiosity / urgency |

**Recommended test order:** B then A then C (B addresses the highest-intent moment for new signups).

**CTA review for Email 1:**
- Primary CTA should be: "Search Tickets Now" → https://ticketscan.io
- Must appear above fold (within first 200px of email body)
- Secondary CTA: "Set a Price Alert" — add only if primary CTA is clicked enough to warrant it

---

### Escalations

1. **CRITICAL — Drip never fires:** 16 users are overdue for Email 1, 4 users overdue for Email 3. Investigate prod cron status before next daily run. Do not trigger drip-run blindly.
2. **HIGH — Price tracking inert:** 0 rows in price_history = watchlist is decorative. Fix target_price UI input + confirm price-check cron is running in Railway.
3. **MEDIUM — Newsletter ↔ user gap:** 146 registered users, 3 newsletter subs. Add opt-in checkbox to /register flow.

---

### Subscriber Data → Analytics Agent (Agent 7)

- Total users: 146
- New this week: 9
- New today: 0
- Newsletter subs: 3 (active)
- Watchlist items: 168
- Active alerts: 0
- Drip emails sent all-time: 0
