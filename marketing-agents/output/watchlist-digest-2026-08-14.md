# Watchlist Digest Prep — 2026-08-14

Status: **Prepared as a date-only fallback; do not send price claims until tracking is current.** The API returned 56 future watchlist items across 33 users, with 13 events inside the next 14 days. User names are not available in the admin response, so merge the account name at send time.

## Send-ready fallback template

**Subject:** Your TicketScan watchlist: upcoming events to watch

**Preview:** You have [X] events tracked. [X] are coming up in the next 14 days.

Hi [Name],

Here’s today’s update on the tickets you’re watching. TicketScan currently has [X] upcoming events on your list, including [Y] within the next 14 days.

📅 **[Event]** — [Date] — [Venue], [City] — event coming up soon

📅 **[Event]** — [Date] — [Venue], [City] — event coming up soon

We’re refreshing price data before making a buy/wait call. That’s intentional: guessing is how ticket buyers end up funding somebody else’s yacht.

**[View my watchlist](https://ticketscan.io/watchlist)**

You’re receiving this because you track events on TicketScan. [Manage alerts](https://ticketscan.io/watchlist)

## Upcoming-event queue

These are the 13 tracked events currently due within 14 days of 2026-08-14. Duplicate event names represent separate tracked dates or users and should be merged per recipient during personalization.

- **MAMAMOO 2026 US TOUR** — Aug 18 — Dickies Arena, Fort Worth
- **Noah Kahan: The Great Divide Tour** — Aug 17 — Petco Park, San Diego
- **Bruno Mars — The Romantic Tour** — Aug 21 — MetLife Stadium, East Rutherford
- **Bruno Mars — The Romantic Tour** — Aug 22 — MetLife Stadium, East Rutherford
- **Bruno Mars — The Romantic Tour** — Aug 25 — MetLife Stadium, East Rutherford
- **Bruno Mars — The Romantic Tour** — Aug 26 — MetLife Stadium Suites, East Rutherford
- **Harry Styles: Together, Together** — Aug 26 — Madison Square Garden, New York
- **Harry Styles: Together, Together** — Aug 26 — Madison Square Garden, New York *(second tracked item; merge if it belongs to the same recipient)*
- **My Chemical Romance: The Black Parade 2026** — Aug 27 — Coors Field, Denver
- **Ishay Ribo with The Israel Philharmonic Orchestra** — Aug 27 — Radio City Music Hall, New York
- **Preseason Game 2: Buffalo Bills v Pittsburgh Steelers** — Aug 27 — Highmark Stadium, Orchard Park
- **Olivia Dean: The Art Of Loving Live** — Aug 25 — Toyota Center, Houston
- **The Return Of The Carnival Of Sins: Mötley Crüe** — Aug 14 — iTHINK Financial Amphitheatre, West Palm Beach

## Personalization rules when data recovers

- Green: current minimum is below the recipient’s target → `Prices DOWN $X (now $Y) — BUY NOW`.
- Red: current minimum is above the last observation → `Prices UP $X (now $Y) — HOLD`.
- White: no meaningful movement → `No change ($Y) — still tracking`.
- Urgency: event date is within 14 days → include days remaining and place the event first.
- Never send a price delta or recommendation when either the target price or a current observation is missing.
