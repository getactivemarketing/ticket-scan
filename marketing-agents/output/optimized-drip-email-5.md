# Optimized Drip Email 5 — Day 30

**Audience:** Registered users with no recent meaningful activity  
**Personalization:** {{first_name}}, {{top_event_name}}, {{city}}  
**Primary CTA:** Compare prices

## Subject-line test

1. Still looking for tickets? Let TicketScan watch the price.
2. Your next ticket deal may already be moving.
3. Before you buy, check these 3 ticket prices side by side.

**Preview:** Set a target price once. We’ll keep checking the marketplaces for you.

## Body copy

Hi {{first_name}},

Ticket prices move while you’re busy doing literally anything else. The easiest way to avoid paying the “I need it now” price is to choose your event, set your ceiling, and let TicketScan keep watch.

Here’s the 30-second version:

1. Search for a concert, game, or show in {{city}}.
2. Compare Ticketmaster, SeatGeek, and StubHub in one view.
3. Add the event to your watchlist and set the most you’re willing to pay.

When a tracked price reaches your target, you’ll know. No refreshing tabs. No guessing whether the first listing is actually the best deal.

{{#if top_event_name}}You were looking at **{{top_event_name}}**. Start there, or search for something new in {{city}}.{{/if}}

**Compare your next event before you buy:**

[Compare prices on TicketScan →](https://www.ticketscan.io/compare)

P.S. If you’re not shopping today, add one event anyway. A target price turns “maybe” into a useful alert.

— TicketScan

## Implementation

- Keep this as Day 30 for the first cohort.
- Use a 50/25/25 random subject split with the same body and CTA.
- Suppress after watchlist add, comparison CTA click, unsubscribe, or hard bounce.
- Track sent, opened, compare clicked, watchlist added, and registered.
