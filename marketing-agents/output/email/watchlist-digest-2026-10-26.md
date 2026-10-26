# Watchlist Digest Prep — 2026-10-26

Status: ready for review, not sent.

This digest intentionally uses only event dates, venues, and cities. TicketScan
price tracking is currently unavailable, so it contains no price movement,
alert, recommendation, or savings claims.

## Send-ready template

**Subject A:** Your TicketScan watchlist — [X] events coming up

**Subject B:** Your next ticket dates, in one quick scan

**Preview:** [X] events on your list are coming up soon. Here are the dates and venues.

Hi [Name],

Here’s a quick look at the events on your TicketScan watchlist:

📅 [Event] — [Date] — [Venue], [City]
📅 [Event] — [Date] — [Venue], [City]

TicketScan can help you find the event and see where tickets are available. Before
you check out, compare the all-in price, confirm the seat section, and watch for
speculative listings.

→ [View my watchlist](https://www.ticketscan.io/watchlist)

The TicketScan Team

## Current 14-day audience

Window: 2026-10-26 through 2026-11-09, inclusive. The live admin data contains
6 qualifying event rows across 5 recipients. The API exposes email addresses,
not names; use “there” as the greeting fallback until a safe display name exists.

- `emily.guilbeault2@gmail.com`: Sleeping With Sirens: An Ending In Itself Tour — Oct 31 — History Ottawa, Ottawa
- `ibmztrdqkxtwibiuqg@onldm.net`: Seattle Seahawks vs. Chicago Bears — Nov 2 — Lumen Field, Seattle
- `guyncognito@duck.com`: Philadelphia 76ers vs. Chicago Bulls — Nov 2 — Xfinity Mobile Arena, Philadelphia
- `ones-unsaved5g@icloud.com`: STING 3.0 Tour — Nov 9 — Toyota Oakdale Theatre, Wallingford
- `rck2001@hotmail.ca`: Olivia Rodrigo: The Unraveled Tour — Oct 26 — Scotiabank Arena, Toronto
- `rck2001@hotmail.ca`: Olivia Rodrigo: The Unraveled Tour — Oct 27 — Scotiabank Arena, Toronto

Verify recipient grouping before any send because the admin endpoint exposes flat
rows rather than a digest-ready user object.

## Additional future watchlist items

These fall outside the 14-day digest window and should not be included in today’s
short digest unless the campaign is intentionally broadened:

- `guyncognito@duck.com`: Philadelphia 76ers vs. Toronto Raptors — Nov 12 — Xfinity Mobile Arena, Philadelphia
- `lskerkela@yahoo.com`: Noah Kahan — The Great Divide Tour — Nov 13 and Nov 14 — The O2, London
- `guyncognito@duck.com`: Philadelphia 76ers vs. Indiana Pacers — Nov 15 — Xfinity Mobile Arena, Philadelphia
- `deathcump@gmail.com`: The Neighbourhood THE WORLD TOUR — Nov 16 — T-Mobile Center, Kansas City
- `hermesmoragas@gmail.com`: Orlando Magic vs. Philadelphia 76ers — Nov 18 — Kia Center, Orlando
- `hermesmoragas@gmail.com`: Orlando Magic vs. Detroit Pistons — Nov 24 — Kia Center, Orlando
- `dan.lewis905@gmail.com`: Miami Dolphins v New York Jets — Nov 29 — Hard Rock Stadium, Miami
- `sarah.stawicki@gmail.com`: An Evening with Lord Huron — Dec 6 — GLC Live at 20 Monroe, Grand Rapids

## Send guardrails

- Do not send until the audience and SMTP health are reviewed by an owner.
- Do not mention price drops, price history, target prices, alerts, buy/wait calls, or TicketScan savings statistics.
- Keep the single watchlist CTA above the fold.
- Confirm the flat-row grouping and recipient count before personalization.
