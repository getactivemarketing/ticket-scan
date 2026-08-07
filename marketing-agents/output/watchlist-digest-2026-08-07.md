# Watchlist Digest — 2026-08-07

## Send status

Ready for review, not sent. Production returned **56 future-dated watchlist items across 33 users**, with **10 items within Aug 7–Aug 21 across 9 users**. No item has a target price, and the admin API exposes no usable current-versus-previous price payload. This draft therefore uses timing-only urgency and makes no up/down, buy-now, or hold claims. The ticket market has enough drama without us manufacturing more.

The API provides recipient email addresses but no display names. Use `{{first_name}}` with recipient-level merge data and send only to active/consented recipients.

## Recommended message

**Subject:** Your watchlist has 10 events coming up soon  
**Preview:** Four events are this weekend. Here’s what’s coming up and what to do next.

Hi {{first_name}},

Here’s today’s update on the tickets you’re watching. We found **{{tracked_count}} future events** on your list.

Several events are close enough to deserve a look, including four on August 8. TicketScan is tracking the dates, but today’s admin data does not include a fresh price comparison or your target price. We’re not going to slap a fake “BUY NOW” label on stale or missing numbers. That’s not advice; that’s a ransom note with a button.

### Coming up within 14 days

{{event_summary}}

**[Review My Watchlist](https://ticketscan.io/watchlist)**

We’ll keep watching. When fresh prices arrive, you’ll get something more useful than a countdown clock and a seller’s opinion.

— The TicketScan Team

## Recipient-ready event inventory

Use each row only for that recipient. `days` is measured from Aug 7, 2026; all target prices and price movements are currently unavailable.

| Recipient | Event | Date | Venue / city | Days | Suggested line |
|---|---|---:|---|---:|---|
| jeffgordonkc@yahoo.com | ZZ Top | Aug 8 | Mountain Winery, Saratoga | 1 | ⚪ ZZ Top — still tracking; 1 day away. Fresh pricing unavailable. |
| prosaji97@gmail.com | Raja 50 - Ilaiyaraaja Live In Concert | Aug 8 | NOW Arena, Hoffman Estates | 1 | ⚪ Raja 50 — still tracking; 1 day away. Fresh pricing unavailable. |
| blubberboi@yahoo.com | Ed Sheeran: LOOP Tour | Aug 8 | SoFi Stadium, Inglewood | 1 | ⚪ Ed Sheeran: LOOP Tour — still tracking; 1 day away. Fresh pricing unavailable. |
| edithdionne@hotmail.com | Avenged Sevenfold and Good Charlotte: North American Tour 2026 | Aug 8 | Centre Bell, Montreal | 1 | ⚪ Avenged Sevenfold and Good Charlotte — still tracking; 1 day away. Fresh pricing unavailable. |
| ldholman@ymail.com | Motionless In White: The Sweat and Blood Tour | Aug 11 | OKC Zoo Amphitheatre / Zoo Amphitheatre, Oklahoma City | 4 | ⚪ Motionless In White — duplicate venue records; still tracking; 4 days away. Fresh pricing unavailable. |
| umcane06@gmail.com | The Return Of The Carnival Of Sins: Mötley Crüe | Aug 14 | iTHINK Financial Amphitheatre, West Palm Beach | 7 | ⚪ Mötley Crüe — still tracking; 7 days away. Fresh pricing unavailable. |
| rebdav13@gmail.com | Noah Kahan: The Great Divide Tour | Aug 17 | Petco Park, San Diego | 10 | ⚪ Noah Kahan — still tracking; 10 days away. Fresh pricing unavailable. |
| chungvungocminh@gmail.com | MAMAMOO 2026 US TOUR | Aug 18 | Dickies Arena, Fort Worth | 11 | ⚪ MAMAMOO — still tracking; 11 days away. Fresh pricing unavailable. |
| taranimeramaro@gmail.com | Bruno Mars - The Romantic Tour | Aug 21 | MetLife Stadium, East Rutherford | 14 | ⚪ Bruno Mars — still tracking; 14 days away. Fresh pricing unavailable. |

## Personalization and send rules

- `{{tracked_count}}`: that recipient’s future-dated watchlist count, not the 10-item campaign total
- `{{event_summary}}`: render only that recipient’s rows from the inventory above
- Do not claim a price direction, target hit, or buy/wait recommendation until fresh price history is available
- Do not send to unsubscribed recipients; current newsletter data shows 4 active subscribers and no inactive records
- The nine near-term watchlist recipients are not the same as the four newsletter subscribers; confirm consent/audience eligibility before sending

## Conditional copy when fresh prices are available

- Down: `🟢 {{event_name}} — prices down {{price_change}} (now {{current_price}}) — BUY NOW if it fits your budget.`
- Up: `🔴 {{event_name}} — prices up {{price_change}} (now {{current_price}}) — HOLD and keep comparing.`
- Stable: `⚪ {{event_name}} — no meaningful change ({{current_price}}) — {{days_until_event}} days until the event.`
- No data: `⚪ {{event_name}} — we’re still tracking it; fresh pricing is not available yet.`
