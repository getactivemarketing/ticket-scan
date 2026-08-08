# Watchlist Digest — Send-Ready Draft — 2026-08-08

Audience: users with an active watchlist item. Personalize the event block per user before sending. The current admin data has no target prices or current price snapshots, so this version intentionally avoids invented price movement and buy recommendations.

## Subject

`Your watchlist has {{event_count}} events coming up soon`

## Preview

`{{today_count}} watched events are today. Here’s what’s urgent—and what the data still can’t tell us.`

## Body

Hi {{first_name}},

Here’s today’s practical update on the tickets you’re watching. A few dates are getting close, so calendar urgency is real. Ticket-price movement is not currently available in this digest, which means we’re not going to manufacture a “buy now” alert for you. The internet has enough of those already.

{{#each watchlist_events}}
**{{urgency_emoji}} {{event_name}}** — {{event_date}} at {{venue}}, {{city}}

{{urgency_line}}

{{/each}}

Price status: current comparison data is unavailable in this update. Check the live listing before buying, and compare the final all-in total—not just the attractive-looking headline number.

[Review My Watchlist](https://ticketscan.io/watchlist)

Want a price alert? Open an event, choose a target price, and let TicketScan do the repetitive refreshing.

— TicketScan

P.S. If an event has already passed or your plans changed, remove it from your watchlist. Future-you will appreciate the cleanup.

## Personalization Rules

- `{{event_count}}`: number of that recipient’s active watchlist items included in the digest.
- `{{today_count}}`: recipient’s items dated 2026-08-08.
- Use `🟠` and `Today — verify availability now` for Aug 8 events.
- Use `🟡` and `Within 14 days — review listings and set a target price if you have a budget` for Aug 11–22 events.
- Do not render “prices down,” “prices up,” “stable,” “BUY NOW,” or a dollar amount until a current price snapshot and target price are available.
- Deduplicate identical event records for the same recipient only when they represent the same event ID; the two Motionless In White records are separate listings and should remain separate unless the recipient’s UI merges them.

## Upcoming Event Blocks From Today’s Snapshot

| Date | Event | Venue | City | Suggested line |
|---|---|---|---|---|
| Aug 8 | ZZ Top | Mountain Winery | Saratoga | Today — verify availability now |
| Aug 8 | Raja 50 - Ilaiyaraaja Live In Concert | NOW Arena | Hoffman Estates | Today — verify availability now |
| Aug 8 | Ed Sheeran: LOOP Tour | SoFi Stadium | Inglewood | Today — verify availability now |
| Aug 8 | Avenged Sevenfold and Good Charlotte: North American Tour 2026 | Centre Bell | Montreal | Today — verify availability now |
| Aug 11 | Motionless In White: The Sweat and Blood Tour | OKC Zoo Amphitheatre | Oklahoma City | Within 14 days — review listings and set a target price if you have a budget |
| Aug 11 | Motionless In White: The Sweat and Blood Tour | Zoo Amphitheatre | Oklahoma City | Within 14 days — review listings and set a target price if you have a budget |
| Aug 14 | The Return Of The Carnival Of Sins: Mötley Crüe | iTHINK Financial Amphitheatre | West Palm Beach | Within 14 days — review listings and set a target price if you have a budget |
| Aug 17 | Noah Kahan: The Great Divide Tour | Petco Park | San Diego | Within 14 days — review listings and set a target price if you have a budget |
| Aug 18 | MAMAMOO 2026 US TOUR | Dickies Arena | Fort Worth | Within 14 days — review listings and set a target price if you have a budget |
| Aug 21 | Bruno Mars - The Romantic Tour | MetLife Stadium | East Rutherford | Within 14 days — review listings and set a target price if you have a budget |
| Aug 22 | Bruno Mars - The Romantic Tour | MetLife Stadium | East Rutherford | Within 14 days — review listings and set a target price if you have a budget |

## QA Before Send

- Confirm the recipient has at least one active watchlist item.
- Populate and escape `first_name`, event names, dates, venues, and cities.
- Confirm `event_count` and `today_count` are recipient-specific.
- Verify the CTA resolves to `https://ticketscan.io/watchlist`.
- Do not send until price-tracking telemetry is restored if the campaign objective is a price-movement digest.
