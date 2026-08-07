# Optimized Drip Email 1 — Day 3 Activation

## Subject-line test

- A: `Your first ticket deal starts with one number` **(default)**
- B: `What’s the most you’d pay for {{event_name}}?`
- C: `Set your price target. We’ll watch the rest.`

**Preview:** Set a maximum price once, then let TicketScan keep comparing.

## Personalization rules

Use `{{event_name}}` only when the user has a real watchlist event. Otherwise use “your next event.” Do not claim a savings amount or a price drop without a corresponding price-history/alert event.

## HTML-ready body

Hi {{first_name}},

The easiest way to avoid overpaying is to decide your maximum price **before** the ticket hunt gets emotional.

If you’re watching **{{event_name}}**, or searching for your next event, TicketScan lets you compare available prices and save a target. When the data shows a listing at or below that number, we can tell you it’s time to take another look.

### Set it up in about 30 seconds

1. Search for the event.
2. Add it to your watchlist.
3. Enter the most you’re comfortable paying.

That’s it. You keep control of the budget; TicketScan keeps the comparison handy.

**[Set My Price Target →](https://www.ticketscan.io/dashboard)**

One tip: compare the same event and section across marketplaces, and include fees before deciding. A low headline price is not always the lowest checkout total.

— The TicketScan Team

TicketScan · [How it works](https://www.ticketscan.io/how-it-works) · [Unsubscribe]({{unsubscribe_url}})

## Send logic

Send on Day 3 at 10:00 UTC. Suppress when the user has a watchlist item, a target price, or a price-alert email in the previous 24 hours. Track `email_1_subject_variant`, `watchlist_add`, `target_price_saved`, `comparison_started`, and unsubscribe.
