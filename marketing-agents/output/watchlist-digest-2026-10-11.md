# Watchlist Digest — Send-Ready Safe Template

Status: template prepared; do not send until recipient-level rows are filtered to upcoming events and the email job has a verified recipient query.

## Subject-line variants

**A:** Your TicketScan watchlist update

**B:** A cleaner way to plan your next ticket outing

Preview: See upcoming event dates, onsale details, and practical ticket-buying checks in one place.

## Email body

Hi {{first_name_or_friend}},

Here’s a quick look at the events on your TicketScan watchlist:

{{#each upcoming_events}}
### {{event_name}}

- **When:** {{event_date_and_time}}
- **Where:** {{venue}}, {{city}}
- **Next useful step:** {{onsale_or_event_link}}
{{/each}}

Before you check out, do the boring-but-profitable stuff:

- Compare the all-in total, including fees, before choosing a listing.
- Confirm the event date, venue, and entry rules.
- Be cautious with speculative listings and verify the seller/platform.

TicketScan helps you find events and where to buy them. For venue-specific seating information and planning tips, check the venue guide linked from your event page.

{{#if upcoming_events}}
[View your watchlist]({{watchlist_url}})
{{else}}
No upcoming events are currently available in this digest. [Browse upcoming events]({{events_url}})
{{/if}}

Happy ticket hunting—and may the fees be less ridiculous than usual.

— TicketScan

## Personalization rules

- Include only events with a future event date in the recipient’s local timezone.
- Omit price, price-change, target-price, buy/wait/hold, alert, and price-history fields.
- If onsale/presale data is unavailable, omit that line rather than inventing it.
- Use the recipient’s first name only if it is already available from an approved profile field; otherwise use “Hi there”.
- Do not expose email addresses, target prices, or other users’ watchlist items in the message.
- Suppress users with no future events from this digest and route them to the browse-events CTA.

## Delivery note

The current admin API can return watchlist rows, but the daily check did not expose a recipient-safe, date-filtered digest query. Price status and recommendation sections are intentionally absent because product status says price tracking is down.
