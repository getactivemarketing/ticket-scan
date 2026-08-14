# Win-Back Sequence — Users Inactive 14+ Days

## Entry and suppression

**Enter when:** a registered user has no tracked activity event for 14 consecutive days. Activity means login, event search, comparison, watchlist add/update, or price-alert interaction.

**Suppress when:** the user becomes active, adds/updates a watchlist item, receives an alert, unsubscribes, hard-bounces, or completes all three emails. Do not send more than one win-back email per 7 days.

**Personalization:** nearest upcoming watchlist event, preferred city, or most recent search. Never claim prices dropped without a fresh comparison.

## Email 1 — Day 14

**Subject:** We saved your seat-search shortcut  
**Preview:** Compare three marketplaces and set a target price in under a minute.

Hi {{first_name}},

Ticket shopping gets expensive when you check every marketplace yourself. TicketScan puts the comparison in one place, then lets you set the price you actually want to pay.

Search for an event in {{city}}, compare the sources, and add it to your watchlist. We’ll keep the number in view while you get on with your day.

[Find an event to track →](https://www.ticketscan.io/dashboard)

**Success metric:** comparison started within 7 days; secondary, watchlist add.

## Email 2 — Day 21

**Subject:** Prices changed on events people are watching near you  
**Preview:** See verified movement for your city before you decide to buy.

Hi {{first_name}},

The useful question isn’t “what’s the cheapest listing right now?” It’s “is today’s price good for this event?” TicketScan helps by putting marketplace prices and history beside each other.

{{#if nearby_event_name}}One event near {{city}} worth checking: **{{nearby_event_name}}**.{{/if}}

Open your dashboard to see current availability. If the price is above your ceiling, set an alert and wait. If it hits your number, move with confidence.

[Check current prices →](https://www.ticketscan.io/dashboard)

**Success metric:** returning session within 7 days; secondary, target-price alert created.

## Email 3 — Day 30

**Subject:** Last call: your watchlist can do the checking for you  
**Preview:** One target price turns ticket research into an alert.

Hi {{first_name}},

If tickets are still on your radar, give your watchlist one useful instruction: the most you’re willing to pay. TicketScan will keep the event organized and help you compare when it matters.

No event in mind? Start with a concert, game, or show in {{city}} and compare before checkout.

[Set up your next price check →](https://www.ticketscan.io/compare)

If ticket shopping isn’t relevant right now, you can unsubscribe below. We’ll respect the decision.

**Success metric:** watchlist add or comparison within 7 days; guardrail, unsubscribe and complaint rate.

## Recommended metrics

- Reactivation rate within 7 days.
- Watchlist activation rate.
- Comparison CTR and completion rate.
- Alert-setup rate.
- Unsubscribe, hard-bounce, and complaint rate.
- Revenue or affiliate conversion, once attribution exists.
