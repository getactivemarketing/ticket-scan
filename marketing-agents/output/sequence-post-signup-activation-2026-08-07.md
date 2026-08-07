# Post-Signup Activation Sequence — 2026-08-07

## Trigger and guardrails

Trigger for users who registered but have no watchlist row. Require active consent and a deliverable address. Check suppression immediately before each send. Stop after the first watchlist add, target-price save, unsubscribe, hard bounce, or price-alert email in the prior 24 hours.

**Primary success metric:** first watchlist add within 7 days.  
**Secondary metrics:** target-price save, comparison start, alert trigger, click-to-watchlist rate, unsubscribe rate.

## Email 1 — Day 1

**Subject:** Here’s how to save on your first ticket  
**Preview:** Compare the same event across marketplaces before you check out.

Hi {{first_name}},

Your first ticket search does not need to start with the first listing you see. Start with the event, compare the available marketplaces, and check the all-in total before you buy.

TicketScan puts that comparison in one place so you can make the decision with the same event and section in view. You can also save an event and come back without starting over.

**[Compare My First Event →](https://www.ticketscan.io/dashboard)**

No savings number is promised here because prices depend on event, section, timing, and fees. The useful first step is seeing the market side by side.

— The TicketScan Team  
[Unsubscribe]({{unsubscribe_url}})

## Email 2 — Day 3

**Subject:** Set up your first price alert in 30 seconds  
**Preview:** Pick your ceiling once, then let the watchlist do the remembering.

Hi {{first_name}},

Found an event you might attend? Add it to your watchlist and enter the most you’re comfortable paying. That target gives you a clear rule instead of a vague feeling that prices “might get better.”

1. Add the event.
2. Set your target price.
3. Keep comparing while TicketScan tracks the event.

**[Create My First Watchlist →](https://www.ticketscan.io/dashboard)**

You can change the target whenever your budget changes. If fresh data shows a qualifying price, the alert path can do the reminding for you.

— The TicketScan Team  
[Unsubscribe]({{unsubscribe_url}})

## Email 3 — Day 7

**Subject:** You may be missing price changes on events you care about  
**Preview:** One watchlist item is all it takes to start tracking.

Hi {{first_name}},

A week after signing up, the most useful next step is still small: save one event you might actually attend. That gives you a place to compare marketplaces, record a target, and return when timing matters.

We won’t call a price “down” unless the tracker has fresh comparison data. But you can make the next check faster by putting the event on your watchlist today.

**[Add an Event to My Watchlist →](https://www.ticketscan.io/dashboard)**

If you’re not shopping right now, you can ignore this email and return when you are.

— The TicketScan Team  
[Unsubscribe]({{unsubscribe_url}})

## Implementation logic

- Schedule at Day 1, Day 3, and Day 7 after `users.created_at`, at 10:00 UTC.
- Query for an existing `watchlist` row immediately before sending.
- Add a sequence ledger with `(user_id, sequence_key, email_number)` uniqueness; do not reuse `drip_emails_sent` without a sequence column.
- Record provider message ID, delivery outcome, bounce, open, click, and conversion events.
- Use one primary CTA per message and UTM values such as `utm_source=email`, `utm_campaign=post_signup_activation`, and `utm_content=email_1`.
- Remove “may be missing” language if the system cannot calculate a real recent price-change count.
