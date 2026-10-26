## Compliant churn intervention drafts — 2026-10-26

No messages were sent or queued. The API does not expose last-seen data or a lifecycle queue, and price-tracking claims are prohibited while that system is down.

### Tier 1 — gentle nudge (7–10 days inactive)

**Subject:** Your saved ticket list is still here

Hi {{first_name}},

You saved {{event_count}} event{{plural}} on TicketScan. A quick check-in can show the event date, onsale or presale timing, venue details, and links to start your ticket search.

Open your saved events: {{watchlist_url}}

Ticket-buying reminder: compare the final all-in total before checkout, and be cautious with listings that do not clearly identify the seller.

**Timing:** next available weekday at 10:00 a.m. recipient local time. Send only after verified inactivity and suppression checks.

### Tier 2 — value reminder (10–14 days inactive)

**Subject:** A cleaner way to revisit your ticket plans

Hi {{first_name}},

Your TicketScan list has {{event_count}} saved event{{plural}}. Revisit it when you have a minute to check dates, venue seating guidance, onsale details, and the available purchase links in one place.

Review your list: {{watchlist_url}}

If plans changed, you can remove saved events at any time.

**Timing:** next available weekday at 10:00 a.m. recipient local time, with a 7-day cooldown.

### Tier 3 — win-back (14+ days inactive)

**Subject:** Still planning to go to {{event_name}}?

Hi {{first_name}},

It’s been a while since you visited TicketScan. Your saved list has {{event_count}} event{{plural}}. Come back to review what is still relevant, check onsale timing and venue tips, or clean up the list if your plans changed.

Return to TicketScan: {{watchlist_url}}

No hard sell: check the final all-in price, read the listing terms, and buy only when the details make sense for you.

**Timing:** next available weekday at 10:00 a.m. recipient local time, one message maximum per 30 days.

### Send guardrails

- Do not send until `last_seen_at` or an equivalent engagement event exists.
- Suppress unsubscribed, bounced, complained, and recently contacted recipients.
- Do not mention price drops, price history, alerts, savings, trends, or buy/wait recommendations.
- Log delivery, bounce, open, click, unsubscribe, and suppression decisions per recipient.
