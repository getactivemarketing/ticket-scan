# Watchlist Digest — 2026-08-18

## Send status

Draft is ready for personalization, but should not be sent as a price-alert digest yet. The current audience has 0 target prices and no current price snapshots, so price direction and BUY NOW/HOLD recommendations would be made up—the exact opposite of useful consumer advocacy.

## Subject line options

- A: `Your TicketScan watchlist update: 21 events need a price check`
- B: `Your tickets are getting close — here’s what to check`

Preview: `You’re tracking events in the next 14 days. We found the ones that need attention before prices move.`

## Email body template

Hi {{first_name}},

Here’s today’s update on the events you’re watching. A few are within the next 14 days, so this is a good moment to compare the final checkout price—not just the tempting number shown before fees.

{{event_rows}}

We don’t have a current price snapshot or target budget for these events yet, so we’re not going to pretend a green arrow means “buy now.” Set a target price in your watchlist and TicketScan can tell you when the numbers actually line up.

**[View my watchlist](https://ticketscan.io/watchlist)**

TicketScan compares Ticketmaster, SeatGeek, and StubHub so the fees don’t get the last word.

— TicketScan

## Event rows for merge

Use this honest row format until price tracking is repaired:

`⚪ {{event_name}} — {{event_date}} at {{venue}}, {{city}} — No current price snapshot. Set a target price to get a real alert.`

Upcoming events in the 14-day window:

- Aug 18 — MAMAMOO 2026 US TOUR — Dickies Arena, Fort Worth
- Aug 20 — Backstreet Boys: Into The Millennium — Sphere, Las Vegas
- Aug 21 — Bruno Mars — MetLife Stadium, East Rutherford
- Aug 22 — Bruno Mars — MetLife Stadium, East Rutherford
- Aug 25 — Bruno Mars — MetLife Stadium, East Rutherford
- Aug 25 — Olivia Dean: The Art Of Loving Live — Toyota Center, Houston
- Aug 26 — Harry Styles: Together, Together — Madison Square Garden, New York
- Aug 26 — Bruno Mars Wed 8/26/26 — MetLife Stadium Suites, East Rutherford
- Aug 26 — Harry Styles: Together, Together — Madison Square Garden, New York
- Aug 27 — Goose — Red Rocks Amphitheatre, Morrison
- Aug 27 — My Chemical Romance The Black Parade 2026 — Coors Field, Denver
- Aug 27 — Ishay Ribo with The Israel Philharmonic Orchestra — Radio City Music Hall, New York
- Aug 27 — Preseason Game 2: Buffalo Bills v Pittsburgh Steelers — Highmark Stadium, Orchard Park
- Aug 28 — Harry Styles: Together, Together — Madison Square Garden, New York
- Aug 28 — Harry Styles: Together, Together — MSG Suites, New York
- Aug 28 — Harry Styles: Together, Together — Madison Square Garden, New York
- Aug 29 — The Red Clay Strays — Moda Center, Portland
- Aug 29 — Jason Aldean: Songs About Us Tour 2026 — The Wharf Amphitheater, Orange Beach
- Aug 29 — Harry Styles: Together, Together — Madison Square Garden, New York
- Aug 29 — Harry Styles: Together, Together — Madison Square Garden, New York
- Aug 30 — My Chemical Romance The Black Parade 2026 — Petco Park, San Diego

The API returned 21 items in the date window, represented above. Deduplicate by watchlist ID at send time, not by event name alone; two same-user/date/venue duplicates are present in the admin response.

## CTA and send notes

- Primary CTA: `View my watchlist`
- URL: `https://ticketscan.io/watchlist`
- Place above the fold and repeat once after the final row.
- Do not label rows BUY NOW, HOLD, up, down, or stable until a current price snapshot and target price exist.
