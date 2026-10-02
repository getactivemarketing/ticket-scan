# Post-Signup Activation Sequence — 2026-10-02

**Audience:** Registered users with zero watchlist rows  
**Entry trigger:** Account created and no watchlist item exists  
**Exit conditions:** User adds a watchlist item, unsubscribes, hard-bounces, or completes the sequence  
**Guardrail:** This sequence promotes event discovery, saved event details, onsale/date information, and venue guidance. It does not promise price tracking, alerts, price history, recommendations, or savings.

## Email 1 — Day 1

**Subject:** Start with the event you actually want to attend

**Preview:** Search by team, artist, venue, or city and save the details in one place.

Hi {{first_name}},

Your TicketScan account is ready. The fastest way to make it useful is to search for one real event: a team you follow, an artist you like, or a venue you already know.

When you find it, add it to your watchlist. That keeps the date, venue, and event details easy to find while you decide what works for you.

**[Browse events →](https://www.ticketscan.io/dashboard)**

**Trigger logic:** Send 24 hours after signup if the user has zero watchlist rows and has not unsubscribed.  
**Success metric:** Dashboard visit; secondary metric is first event-detail view.

## Email 2 — Day 3

**Subject:** A better ticket search takes two minutes

**Preview:** Check the date, venue, section layout, and seller terms before you buy.

Hi {{first_name}},

Found an event you might attend? Before checkout, run through four quick checks:

- Is the date and city correct?
- Does the venue guide match the section you’re considering?
- Is the seller showing the final all-in total?
- Do you understand delivery, transfer, refund, and buyer-protection terms?

Save the event to your watchlist so you can return to the same details later instead of starting over.

**[Find an event to save →](https://www.ticketscan.io/dashboard)**

**Trigger logic:** Send on Day 3 if still zero watchlist rows and Email 1 was delivered.  
**Success metric:** First watchlist add within 24 hours; secondary metric is venue-guide click.

## Email 3 — Day 7

**Subject:** Know the venue before you buy the seat

**Preview:** Section maps and venue notes can prevent an expensive seating mistake.

Hi {{first_name}},

The same venue can have very different sightlines, entry routes, and seat experiences from one section to the next. TicketScan’s venue guides help you check the building before you follow a ticket link.

Look for the venue’s capacity, section layout, seating notes, and practical tips. Then return to the event page and verify the exact date, section, delivery method, and final checkout terms.

**[Explore venue guides →](https://www.ticketscan.io/venues)**

**Trigger logic:** Send on Day 7 if still zero watchlist rows, the user has not unsubscribed, and no hard bounce is recorded.  
**Success metric:** Event-detail or outbound-ticket click; secondary metric is watchlist add within 48 hours.

## Sequence measurement

Track per user and per step: delivered, bounced, opened, clicked, dashboard visit, event-detail view, watchlist add, outbound seller click, unsubscribe, and complaint. Use a 14-day holdout or subject-line split once the list is large enough; the current subscriber base is too small to infer a statistically meaningful winner.
