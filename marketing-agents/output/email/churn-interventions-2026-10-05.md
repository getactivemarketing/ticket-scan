## Churn intervention drafts — 2026-10-05

Status: **drafts only; nothing sent or queued**.

The current API cannot identify users by last visit and has no lifecycle-email queue. These templates must not be sent until `last_seen_at`/activity events, consent, suppression, delivery, and click tracking are available. They intentionally avoid price changes, price history, alerts, buy/wait calls, and TicketScan price claims.

### Tier 1 — Gentle nudge (7–10 days inactive)

**Subject:** Your {{event_name}} plan is still here

**Timing:** Weekday late morning in the recipient’s local time, after activity-based eligibility exists.

**Body:**

Hi {{first_name}},

You saved **{{event_name}}** at {{venue}} to your TicketScan watchlist. If you’re still planning to go, the event page keeps the date, venue details, onsale information, and links to buy together:

→ Review your watchlist: {{watchlist_url}}

TicketScan doesn’t know whether you’re ready to buy—and we won’t pretend it does. We’re just keeping your ticket plan easy to find.

— TicketScan

Unsubscribe: {{unsubscribe_url}}

### Tier 2 — Value reminder (10–14 days inactive)

**Subject:** A quick way to get back to your ticket shortlist

**Timing:** Weekday early evening in the recipient’s local time, only after activity-based eligibility exists.

**Body:**

Hi {{first_name}},

You have {{watchlist_count}} event{{plural}} saved in your TicketScan watchlist. We’ve kept the useful details in one place—dates, venues, onsale timing, seating guidance, and links to the ticket seller.

Pick up where you left off:

→ Open your watchlist: {{watchlist_url}}

Tip: compare the final all-in price at checkout, and be cautious with speculative listings. Ticketing is already complicated enough without mystery fees.

— TicketScan

Unsubscribe: {{unsubscribe_url}}

### Tier 3 — Win-back (14+ days inactive)

**Subject:** We saved your ticket shortlist

**Timing:** Tuesday or Wednesday late morning in the recipient’s local time, with a frequency cap and a one-click unsubscribe.

**Body:**

Hi {{first_name}},

It’s been a while. Your TicketScan watchlist still has {{watchlist_count}} saved event{{plural}}, including **{{event_name}}** at {{venue}}.

If the plan is still alive, start here:

→ Reopen your watchlist: {{watchlist_url}}

If your plans changed, no hard feelings—unsubscribe here: {{unsubscribe_url}}. We’d rather lose an address honestly than clog your inbox.

— TicketScan

### Sending guardrails

- Do not populate “price changed,” “price drop,” savings, scarcity, or alert language.
- Suppress unsubscribed, bounced, recently contacted, and recently active users.
- Require explicit marketing consent and a valid unsubscribe URL.
- Record queued, delivered, bounced, opened, clicked, and unsubscribed events with timestamps.
