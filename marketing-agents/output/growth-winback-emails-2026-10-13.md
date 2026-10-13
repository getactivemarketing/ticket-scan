# Growth Retention Drafts — 2026-10-13

These are drafts for the Email Agent, not sends. They are intentionally compatible with the current product status: TicketScan can find events, onsale dates, venue information, and official ticket links, but price tracking and price alerts are unavailable.

## Tier 1 — Gentle nudge

**Subject:** Your saved events are still waiting for you

Hi {{first_name}},

You saved {{event_count}} event{{event_plural}} on TicketScan. When you’re ready to revisit, your watchlist keeps the date, venue, and ticket links in one place.

There may also be new events for {{city_or_interest}}. Take a quick look, check the onsale details, and compare the all-in total before you buy.

**CTA:** Open my watchlist

## Tier 2 — Value reminder

**Subject:** A quicker way to plan your next ticket night

Hi {{first_name}},

Ticket buying gets messy when dates, venues, and ticket links are scattered across six tabs. TicketScan puts the event details together so you can decide what’s actually worth your time.

Browse {{city_or_interest}} events, save the ones you’re considering, and use the venue guide for section tips before checkout.

**CTA:** Find an event

## Tier 3 — Win-back

**Subject:** We saved your ticket-search shortcut

Hi {{first_name}},

It’s been a while. Your TicketScan account is still here, along with {{event_count}} saved event{{event_plural}}.

If your plans changed, start fresh: search by city, team, artist, or venue. We’ll show you where the event is listed and when tickets go on sale. Before buying, compare fees and confirm the final all-in price.

**CTA:** Start a new search

P.S. If you’d rather not hear from us, {{unsubscribe_link}}.

## Send guardrails

- Do not send until `last_login_at`/activity data identifies the cohort.
- Do not trigger the current drip campaign as a substitute; its queue has 20 pending users and its stats report zero sends.
- Verify SMTP with a single owner-approved test, then send a small cohort and record delivery, opens, clicks, and unsubscribes.
