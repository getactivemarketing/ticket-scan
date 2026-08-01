# Watchlist Digest — Send-Ready Draft — 2026-08-01

**Audience:** Six users with eight watchlist rows for events from Aug. 1–15.  
**Data caveat:** The admin feed provides event/date data, but no current price, target, or price-history values. Do not claim a price moved or label an event BUY NOW until those fields are available.

## Subject options

**A:** Your [Event] is [X] days away — set your price target  
**B:** [X] days until [Event]. Tell us your number before prices get weird.

**Preview:** You're tracking [Event]. TicketScan can watch the price once you set a target.

## Email body

Hi [Name],

You’re tracking **[X] event(s)** on TicketScan. A few are coming up soon, so this is a good time to decide what “worth it” means before the resale market starts doing resale-market things.

**On your near-term watchlist:**

- 🟡 **[Event]** — [Date] — [X] days away — no price target set
- 🟡 **[Event]** — [Date] — [X] days away — no price target set

We don’t have a reliable price snapshot for these events in today’s digest, so we’re not going to invent one. Set your ceiling and TicketScan can flag the moment a listing gets there.

**[Set my price target →](https://www.ticketscan.io/watchlist)**

Ticket prices are confusing enough without adding fake certainty. We’ll keep watching.

— The TicketScan Team

## Personalization rows to render

- **Today (Aug. 1):** Backstreet Boys: Into The Millennium — Sphere, Las Vegas
- **Aug. 6:** Backstreet Boys: Into The Millennium — Sphere, Las Vegas
- **Aug. 8:** ZZ Top — Mountain Winery, Saratoga
- **Aug. 8:** Raja 50 - Ilaiyaraaja Live In Concert — NOW Arena, Hoffman Estates
- **Aug. 8:** Ed Sheeran: LOOP Tour — SoFi Stadium, Inglewood
- **Aug. 8:** Avenged Sevenfold and Good Charlotte: North American Tour 2026 — Centre Bell, Montreal
- **Aug. 11:** Motionless In White: The Sweat and Blood Tour — Oklahoma City (two tracked listings)

## Send QA

- Keep the primary CTA above the fold.
- Suppress expired-event rows before rendering.
- Do not include price deltas, target-hit language, or BUY NOW/HOLD recommendations until price data is joined.
- Use the same unsubscribe footer and sender identity as the existing Nodemailer templates.
