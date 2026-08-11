# Watchlist Digest — 2026-08-11

Prepared for send; do not send until current price data is available. The admin endpoints currently provide event/date/watchlist data but not current prices, price deltas, or recommendation changes.

## Email template

**Subject:** Your Ticket Watchlist Update — `{{event_count}}` events tracked

**Preview:** Your next ticket decision is getting closer. Here’s what’s on deck.

Hi `{{first_name}}`,

Here’s today’s update on the tickets you’re watching. We found `{{event_count}}` upcoming events in your watchlist.

`{{price_status_rows}}`

No current price movement is available in this digest yet. We also found no target price set on the upcoming records, so TicketScan cannot honestly call a buy-now moment. Set a target price and we’ll do the watching—because refreshing three ticket sites all day is a terrible hobby.

[Open my watchlist](https://www.ticketscan.io/watchlist)

— TicketScan

## Upcoming records to hydrate with price data

| Event | Date | City / venue | Days away | Status |
|---|---:|---|---:|---|
| The Return Of The Carnival Of Sins: Mötley Crüe | Aug 14 | West Palm Beach · iTHINK Financial Amphitheatre | 3 | Price data unavailable |
| Noah Kahan: The Great Divide Tour | Aug 17 | San Diego · Petco Park | 6 | Price data unavailable |
| MAMAMOO 2026 US TOUR | Aug 18 | Fort Worth · Dickies Arena | 7 | Price data unavailable |
| Bruno Mars - The Romantic Tour | Aug 21 | East Rutherford · MetLife Stadium | 10 | Price data unavailable |
| Bruno Mars - The Romantic Tour | Aug 22 | East Rutherford · MetLife Stadium | 11 | Price data unavailable |
| Bruno Mars - The Romantic Tour | Aug 25 | East Rutherford · MetLife Stadium | 14 | Price data unavailable |
| Olivia Dean: The Art Of Loving Live | Aug 25 | Houston · Toyota Center | 14 | Price data unavailable |

## Row format after price hydration

`🟢 {{event_name}} — Prices DOWN {{delta}} (now {{current_price}}) — {{recommendation}}`

`🔴 {{event_name}} — Prices UP {{delta}} (now {{current_price}}) — HOLD / Set a lower alert`

`⚪ {{event_name}} — No change ({{current_price}}) — {{days_until_event}} days until event`

## Alternate subject line

`Prices changed? Your watchlist knows first`
