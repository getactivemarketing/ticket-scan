## Churn Intervention Drafts — 2026-09-30

Status: **draft only; nothing sent or queued**. The current admin API cannot prove inactivity and has no intervention-email queue endpoint. Personalize only after last-seen and watchlist price history are available, and suppress anyone who has unsubscribed.

### Tier 1 — Gentle nudge (7–10 days inactive)

**Subject:** A price changed on one of your watched events

**Send timing:** 10:00–11:00 AM recipient local time, one message only.

**Body:**

Hi [first name],

You asked TicketScan to keep an eye on **[event name]** at [venue]. Since you last checked, the lowest listed price moved from **[old price]** to **[new price]** ([direction] [percent]).

See the current comparison before the market changes again: [watchlist link]

No ticket-selling theater. Just the numbers.

— TicketScan

### Tier 2 — Value reminder (10–14 days inactive)

**Subject:** You may have missed [count] price change[s] on your watchlist

**Send timing:** 10:00 AM recipient local time, with a seven-day cooldown.

**Body:**

Hi [first name],

While you were away, **[count] event[s]** on your watchlist changed price. The biggest move was **[event name]**: [old price] → [new price], a difference of **[savings]** ([percent]).

Your watchlist is still doing its job. Take another look: [watchlist link]

— TicketScan

### Tier 3 — Win-back (14+ days inactive)

**Subject:** We kept watching. Here’s what changed.

**Send timing:** Tuesday or Thursday at 10:30 AM recipient local time; one win-back per 30 days.

**Body:**

Hi [first name],

You’ve been gone [days] days. In that time, **[count]** of your watched events changed price, including **[event name]** at [venue], now starting at **[current price]**.

Come back when you’re ready: [watchlist link]

And if ticket emails are not your thing, unsubscribe here: [unsubscribe link]. We will not make you negotiate with a robot.

— TicketScan

### Current action

No recipient list was generated. Last-login, last-seen, price-history-per-user, email-open, and email-click data are not exposed by the production admin API. Sending these drafts now would be guesswork.
