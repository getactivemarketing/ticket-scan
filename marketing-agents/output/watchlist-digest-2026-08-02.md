# Watchlist Digest — Send-Ready Draft — 2026-08-02

**Audience:** Eight users with nine watchlist rows for events from Aug. 2–15.  
**Data caveat:** The admin feed provides event/date/venue data, but no current price, target, or price-history values. Do not claim a price moved or label an event BUY NOW, HOLD, or WAIT until those fields are available.

## Subject options

**A:** Your [Event] is [X] days away — set your price target  
**B:** [X] days until [Event]. Tell us your number before prices get weird.

**Preview:** You're tracking [Event]. TicketScan can watch the price once you set a target.

## Email body

Hi [Name],

You’re tracking **[X] event(s)** on TicketScan. A few are coming up soon, so this is a good time to decide what “worth it” means before the resale market starts doing resale-market things.

**On your near-term watchlist:**

- 🟡 **[Event]** — [Date] — [X] days away — no price target set

We don’t have a reliable price snapshot for these events in today’s digest, so we’re not going to invent one. Set your ceiling and TicketScan can flag the moment a listing gets there.

**[Set my price target →](https://www.ticketscan.io/watchlist)**

Ticket prices are confusing enough without adding fake certainty. We’ll keep watching.

— The TicketScan Team

## Personalization rows to render

- `umcane06@gmail.com`: The Return Of The Carnival Of Sins: Mötley Crüe — Aug. 14 — iTHINK Financial Amphitheatre, West Palm Beach — 12 days away
- `jeffgordonkc@yahoo.com`: ZZ Top — Aug. 8 — Mountain Winery, Saratoga — 6 days away
- `prosaji97@gmail.com`: Raja 50 - Ilaiyaraaja Live In Concert — Aug. 8 — NOW Arena, Hoffman Estates — 6 days away
- `mjw26@msn.com`: WWE SummerSlam Sunday — Aug. 2 — U.S. Bank Stadium, Minneapolis — today; suppress if the event has ended at send time
- `blubberboi@yahoo.com`: Ed Sheeran: LOOP Tour — Aug. 8 — SoFi Stadium, Inglewood — 6 days away
- `edithdionne@hotmail.com`: Avenged Sevenfold and Good Charlotte: North American Tour 2026 — Aug. 8 — Centre Bell, Montreal — 6 days away
- `ldholman@ymail.com`: Motionless In White: The Sweat and Blood Tour — Aug. 11 — OKC Zoo Amphitheatre / Zoo Amphitheatre, Oklahoma City — 9 days away; two tracked rows
- `brigitte.theisen@gmail.com`: Backstreet Boys: Into The Millennium — Aug. 6 — Sphere, Las Vegas — 4 days away

## Send QA

- Suppress expired events, including the Aug. 2 row once the event has ended.
- Do not include price deltas, target-hit language, or BUY NOW/HOLD/WAIT recommendations until price data is joined.
- Deduplicate the two Motionless In White rows only if they represent the same listing; otherwise retain both tracked rows.
- Keep the primary CTA above the fold and use the existing Nodemailer unsubscribe footer and sender identity.
