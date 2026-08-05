# Watchlist Digest — 2026-08-05

## Send status

Ready for review, not sent. Production returned 55 future-dated watchlist items across 36 users, with 11 events occurring within 14 days. No watchlist item has a target price, and the newest price-history row is from July 24, so this draft intentionally makes no up/down or buy/wait claims.

The admin API provides recipient email addresses but no display names. Use `{{first_name}}` with recipient-level merge data.

## Recommended message

**Subject:** Your watchlist has 11 events coming up soon  
**Preview:** We’re tracking the dates. Fresh price data is the next piece of the puzzle.

Hi {{first_name}},

Here’s today’s update on the tickets you’re watching. We found **{{tracked_count}} future events** on your list.

The useful update today is timing: several events are close enough to deserve a look. TicketScan does not currently have a fresh price check for these listings, so we’re not going to slap a fake “buy now” label on a stale number. The ticket market already has enough drama.

### Coming up within 14 days

- ⚪ **Kesha: The Freedom Tour** — Aug 5, Walmart AMP, Rogers — event date is today; fresh pricing unavailable
- ⚪ **Backstreet Boys: Into The Millennium** — Aug 6, Sphere, Las Vegas — still tracking; 1 day away
- ⚪ **ZZ Top** — Aug 8, Mountain Winery, Saratoga — still tracking; 3 days away
- ⚪ **Raja 50 - Ilaiyaraaja Live In Concert** — Aug 8, NOW Arena, Hoffman Estates — still tracking; 3 days away
- ⚪ **Ed Sheeran: LOOP Tour** — Aug 8, SoFi Stadium, Inglewood — still tracking; 3 days away
- ⚪ **Avenged Sevenfold and Good Charlotte: North American Tour 2026** — Aug 8, Centre Bell, Montreal — still tracking; 3 days away
- ⚪ **Motionless In White: The Sweat and Blood Tour** — Aug 11, Oklahoma City — still tracking; 6 days away
- ⚪ **Motionless In White: The Sweat and Blood Tour** — Aug 11, Oklahoma City — duplicate watchlist venue record; still tracking; 6 days away
- ⚪ **The Return Of The Carnival Of Sins: Mötley Crüe** — Aug 14, iTHINK Financial Amphitheatre, West Palm Beach — still tracking; 9 days away
- ⚪ **Noah Kahan: The Great Divide Tour** — Aug 17, Petco Park, San Diego — still tracking; 12 days away
- ⚪ **MAMAMOO 2026 US TOUR** — Aug 18, Dickies Arena, Fort Worth — still tracking; 13 days away

**[Review My Watchlist](https://ticketscan.io/watchlist)**

We’ll keep watching. When fresh prices arrive, you’ll have something more useful than a countdown clock and a seller’s opinion.

— The TicketScan Team

## Personalization and send rules

- `{{tracked_count}}`: recipient’s future-dated watchlist count
- Include only the recipient’s own event rows; the list above is the current high-priority content inventory
- If fresh price data is available at send time, replace the neutral line with one of the conditional blocks below
- Do not send to unsubscribed recipients; current newsletter API data shows 4 active subscribers and no inactive records

## Conditional copy when fresh prices are available

- Down: `🟢 {{event_name}} — prices down {{price_change}} (now {{current_price}}) — BUY NOW if it fits your budget.`
- Up: `🔴 {{event_name}} — prices up {{price_change}} (now {{current_price}}) — HOLD and keep comparing.`
- Stable: `⚪ {{event_name}} — no meaningful change ({{current_price}}) — {{days_until_event}} days until the event.`
- No data: `⚪ {{event_name}} — we’re still tracking it; fresh pricing is not available yet.`
