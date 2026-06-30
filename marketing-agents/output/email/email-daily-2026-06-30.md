## Email Daily — 2026-06-30

### Drip Campaign
- Emails sent (24h): 0
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: 0 (cron not firing — 0 emails ever sent)
- Pending queue: 20 users
  - Overdue E1 (≥day 3): 19 users
  - Overdue E2 (≥day 7): 13 users
  - Overdue E3 (≥day 14): 4 users (oldest at 16 days with 0 emails received)

**ESCALATION:** Drip cron has never delivered a single email. 19 users are overdue for
their Day 3 welcome email — 4 are past Day 14. Do NOT trigger `/api/admin/drip-run`
without confirming SMTP is live and the endpoint sends only the next-due email per
user (not all overdue emails in bulk). Requires human verification before any send.

### Price Alerts
- Alerts triggered (24h): 0
- Events with drops: n/a (price tracking inert — /price-history returns 0 rows)
- Delivery failures: 0 (nothing to deliver)
- Root cause: All 162 watchlist items have target_price = null; no alert can arm until
  the UI exposes a target-price input on EventCard. This is a shipping task, not an email
  task.

### Subscriber Growth
- New subscribers: 0
- Unsubscribes: 0
- Net: 0
- Total active: 3 (2 test accounts, 1 real — roos_leeuwen@eaglesmail.net since 2/1/2026)
- Newsletter list has been flat at 3 since February. Register opt-in form is the remaining
  fix needed (blog/footer forms shipped per memory entry).

---

### Watchlist Digest Prep

**Situation:** 162 watchlist items, 0 with target prices set. No price-change triggers
available. Digest must hook on event urgency instead.

**World Cup urgency window — live now:**
FIFA 2026 group stage runs through July 3; knockout rounds start July 4. Users tracking
World Cup matches have a genuine 3–19 day urgency window. Digest template below uses
event-date urgency rather than fabricated price moves:

```
Subject: Your Ticket Watchlist — [X] events coming up
Preview: A few on your list are less than 2 weeks out. Here's where things stand.

Hi [Name],

Quick update on the events you're watching on TicketScan:

⏰ [Event] — [X] days away — Tickets still available
⏰ [Event] — [X] days away — Prices typically spike inside 7 days
⚪ [Event] — [Date] — Plenty of runway

Compare current prices → ticketscan.io/dashboard

The TicketScan Team
```

**Blocker:** This digest can't be personalized until the backend exposes a user-specific
watchlist query without auth (or the agent is given user JWTs). Current digest output
is a generic template only.

**To unlock personalized digests:** Ship the target-price input on EventCard so watchlist
items have target_price populated. Then `/api/watchlist` data becomes actionable.

---

### Subject Line A/B Variants

Targeting Day 3 drip email (E1 — "3 Tips to Save on Your First Ticket Purchase").
This is the highest-priority send: 19 users overdue.

**Version A (original):**
> 3 Tips to Save on Your First Ticket Purchase

**Version B (curiosity + personalization):**
> The #1 mistake first-time ticket buyers make

**Version C (urgency + specificity):**
> Tickets for your events just moved — here's how to track them

**Recommendation:** Test B vs A if volume allows (≥19 sends). B's curiosity hook
typically outperforms instructional subject lines. C is best reserved for users who
have already added something to their watchlist.

**CTA audit for E1:**
- Primary CTA should be: "Set your first price alert" → ticketscan.io/dashboard
- Secondary CTA: "See how it works" → ticketscan.io/how-it-works
- Ensure CTA is above the fold; single button, not two competing links

---

### Platform Metrics (for Agent 7 — Analytics)
- Total registered users: 135 (+2 since 6/26)
- Users this week: 7
- Newsletter subscribers: 3 (unchanged)
- Watchlist items: 162 (up from 149 last verified)
- Active alerts: 0
- Drip emails ever sent: 0
