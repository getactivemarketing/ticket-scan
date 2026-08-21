# Drip Email 1 — Optimized Copy

**Email:** 1 of 5 · Day 3 after signup  
**Goal:** First watchlist add, followed by target-price setup  
**Status:** Ready for implementation; do not send until consent/suppression and event tracking are available.

## Subject-line test

Run each variant against the same body for a 25/25/25% split, retaining 25% as a control if volume permits:

1. **Default:** Your first ticket deal starts with one number
2. What’s the most you’d pay for {{event_name}}?
3. Set your price target. We’ll watch the rest.

**Preview text:** Pick an event, set your ceiling, and get notified when prices reach it.

## Body copy

Hi {{first_name|there}},

The easiest way to avoid overpaying is to decide your ceiling before the ticket rush starts.

TicketScan lets you compare available listings, save an event, and tell us the most you want to pay. When a tracked price reaches that number, we’ll let you know.

### Set up your first alert

1. Search for {{event_name|an event you want to attend}}.
2. Add it to your watchlist.
3. Enter your target price—the most you’re comfortable paying.

That’s it. You keep your budget; TicketScan keeps watch across the marketplaces we support.

**[Find an event to track →](https://www.ticketscan.io/dashboard?utm_source=drip&utm_medium=email&utm_campaign=onboarding&utm_content=drip-1-primary-cta)**

**A practical starting point:** choose a target below today’s price, then adjust it if your date or seat preference changes. A target is a decision tool, not a promise that inventory will reach it.

Already tracking an event? Open your watchlist and add a target price so your alert is ready.

— The TicketScan Team

TicketScan.io · [Unsubscribe]({{unsubscribe_url}})

## Implementation notes

- Keep send timing at Day 3, 10:00 UTC until delivery telemetry exists.
- Personalize `{{event_name}}` only from a confirmed watchlist item; otherwise use “an event you want to attend.”
- Suppress if the user already has a watchlist item, unsubscribed, hard-bounced, or received a price alert in the prior 24 hours.
- Track `drip-1-primary-cta`, `watchlist_add`, and `target_price_save`.
- Remove the previous unsupported “users save an average of $127” claim.
