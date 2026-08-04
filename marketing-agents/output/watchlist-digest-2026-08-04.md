# Watchlist Digest — 2026-08-04

## Send status

Ready for review, not sent. The admin API returns event and subscriber email fields but no user display names; use `{{first_name}}` and recipient-level merge data in the email service.

## Recommended message

**Subject:** Prices changed on your watchlist — here’s what to do  
**Preview:** A quick look at upcoming events, price movement, and the next smart move.

Hi {{first_name}},

Here’s today’s update on the tickets you’re watching. We found **{{tracked_count}} events** on your list.

{{#each watchlist_events}}
**{{event_name}}** — {{status_line}}  
{{recommendation}}
{{/each}}

One important reality check: TicketScan has not received fresh price-history data since July 24, so today’s digest should not pretend a stale number is a live deal. We’ll keep tracking and update you when fresh data arrives.

**[Review My Watchlist](https://ticketscan.io/watchlist)**

Smart ticket buying is mostly patience, comparison, and refusing to pay a mystery markup because a countdown clock yelled at you.

— The TicketScan Team

## Event blocks requiring fresh-price enrichment

All 10 upcoming tracked items currently have no target price and therefore should use a neutral “still tracking” state until the next successful price check.

| Event | Date | Venue | City | Digest status |
|---|---:|---|---|---|
| Backstreet Boys: Into The Millennium | Aug 6 | Sphere | Las Vegas | Still tracking; 2 days away |
| ZZ Top | Aug 8 | Mountain Winery | Saratoga | Still tracking; 4 days away |
| Raja 50 - Ilaiyaraaja Live In Concert | Aug 8 | NOW Arena | Hoffman Estates | Still tracking; 4 days away |
| Ed Sheeran: LOOP Tour | Aug 8 | SoFi Stadium | Inglewood | Still tracking; 4 days away |
| Avenged Sevenfold and Good Charlotte: North American Tour 2026 | Aug 8 | Centre Bell | Montreal | Still tracking; 4 days away |
| Motionless In White: The Sweat and Blood Tour | Aug 11 | OKC Zoo Amphitheatre | Oklahoma City | Still tracking; 7 days away |
| Motionless In White: The Sweat and Blood Tour | Aug 11 | Zoo Amphitheatre | Oklahoma City | Still tracking; 7 days away |
| The Return Of The Carnival Of Sins: Mötley Crüe | Aug 14 | iTHINK Financial Amphitheatre | West Palm Beach | Still tracking; 10 days away |
| Noah Kahan: The Great Divide Tour | Aug 17 | Petco Park | San Diego | Still tracking; 13 days away |
| MAMAMOO 2026 US TOUR | Aug 18 | Dickies Arena | Fort Worth | Still tracking; 14 days away |

## Conditional copy when fresh prices are available

- Down: `🟢 {{event_name}} — prices down {{price_change}} (now {{current_price}}) — BUY NOW if it fits your budget.`
- Up: `🔴 {{event_name}} — prices up {{price_change}} (now {{current_price}}) — HOLD and keep comparing.`
- Stable: `⚪ {{event_name}} — no meaningful change ({{current_price}}) — {{days_until_event}} days until the event.`
- No data: `⚪ {{event_name}} — we’re still tracking it; fresh pricing is not available yet.`
