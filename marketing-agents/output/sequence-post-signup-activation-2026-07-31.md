# New Sequence — Post-Signup Activation

**Audience:** Registered users with no watchlist item.  
**Entry trigger:** User registration succeeds and `watchlist_count = 0`.  
**Exit trigger:** First watchlist add; suppress remaining messages immediately.  
**Global suppression:** Unsubscribed, hard bounce, recent price-alert email, or account deletion.

## Email 1 — Day 1

**Subject:** Here’s how to save on your first ticket  
**Preview:** Compare first, choose your ceiling, and skip the panic buy.

Hi {{first_name}},

Buying your first ticket does not have to mean choosing the first listing you see. Start with one event, check the available marketplaces side by side, and decide the most you are willing to pay before you get pulled into the countdown.

TicketScan helps you make that comparison in one place. When you find an event you may attend, add it to your watchlist so you can come back to the same decision instead of starting over.

**CTA:** Find my first event → `https://www.ticketscan.io/dashboard`

**Success metric:** First watchlist add within 48 hours; secondary metric is comparison click-through.

## Email 2 — Day 3

**Subject:** Set up your first price target in 30 seconds  
**Preview:** Give TicketScan your ceiling, then let the numbers do the talking.

Hi {{first_name}},

Pick an event, add it to your watchlist, and set the maximum price you would actually pay. That target gives you a simple rule for a noisy market: compare the current listings, then buy when the price makes sense for you.

If your event is still above your number, waiting is a decision—not a missed opportunity.

**CTA:** Set my first target → `https://www.ticketscan.io/watchlist`

**Success metric:** Target-price completion after a watchlist add. Do not send the alert promise until the target and alert path is confirmed functional.

## Email 3 — Day 7

**Subject:** You’re missing the price changes that matter  
**Preview:** Check your event list before the next big move.

Hi {{first_name}},

Ticket prices can change while you are busy with everything else. A watchlist makes it easier to return to the events you actually care about and compare the current market before buying.

{{#if fresh_price_data}}This week, {{event_name}} moved {{movement_percent}}% {{direction}} across the latest recorded check.{{else}}We do not have a fresh movement to report for your area yet, so we will not invent one. You can still start with an event and compare the live listings yourself.{{/if}}

**CTA:** Review events to track → `https://www.ticketscan.io/dashboard`

**Success metric:** Return session, comparison, and watchlist activation within 7 days. Only populate movement fields from a fresh `price_history` row.

## Automation logic

```text
on user.registered:
  if watchlist_count == 0:
    schedule email_1 at +1 day
    schedule email_2 at +3 days
    schedule email_3 at +7 days

on watchlist.created:
  cancel pending activation emails

before each send:
  suppress if unsubscribed, hard_bounced, deleted, or recent alert email
  suppress if watchlist_count > 0
  add UTM campaign and write delivery event
```

## Measurement plan

Track `delivered`, `opened`, `clicked`, `watchlist_add`, `target_price_set`, `price_compare`, `unsubscribed`, and `hard_bounced` with message ID and sequence step. Report activation rate as `users_with_watchlist_add / eligible_users`, not as email clicks alone.
