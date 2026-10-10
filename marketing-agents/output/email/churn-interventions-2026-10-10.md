## Churn intervention drafts — 2026-10-10

No messages were sent or queued. The API cannot identify inactive users, has no lifecycle-email queue, and does not expose delivery, open, click, or unsubscribe events. These drafts are ready for the Email Agent after those controls exist.

All placeholders must be populated from the recipient’s saved events. Do not mention price movement, price alerts, price history, or a buy/wait recommendation.

### Tier 1 — gentle nudge, 7–10 days inactive

**Subject:** Still considering {{event_name}}?

Hi {{first_name}},

You saved **{{event_name}}** for {{event_date}} at {{venue}}. Your list keeps the event details, onsale or presale timing, venue guidance, and links to buy in one place.

Take another look when you have a minute: **{{review_link}}**

— TicketScan

**Timing:** one send around 10:00 a.m. recipient local time; suppress if the user has returned or unsubscribed.

### Tier 2 — value reminder, 10–14 days inactive

**Subject:** Your saved events are waiting for a quick check

Hi {{first_name}},

You have {{watchlist_count}} saved event{{plural}} in TicketScan. Review the dates, onsale details, venue tips, and buying links before your plans get buried under the internet’s usual avalanche of tabs.

**Review your list:** {{review_link}}

If these events are no longer on your radar, you can remove them anytime.

— TicketScan

**Timing:** one send around 10:00 a.m. recipient local time; cap this tier at one message per 30 days.

### Tier 3 — win-back, 14+ days inactive

**Subject:** Want to keep your ticket list or clear it out?

Hi {{first_name}},

We saved your TicketScan list while you were away. It currently has {{watchlist_count}} event{{plural}}. Come back to review what’s still relevant, check upcoming onsale dates, and jump to the seller when you’re ready.

**Open your list:** {{review_link}}

Not planning anything? No problem—remove old events or unsubscribe here: {{preferences_link}}

— TicketScan

**Timing:** one send around 10:00 a.m. recipient local time, with a 30-day cooldown and a hard suppression check.

