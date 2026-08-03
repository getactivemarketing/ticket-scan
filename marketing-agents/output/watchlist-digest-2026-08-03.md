# Watchlist Digest — Send-Ready Draft — 2026-08-03

**Audience:** Eight users with nine upcoming watchlist rows for events from Aug. 6–17.  
**Data caveat:** No current price or price-history rows were available for these events. Do not claim a price moved or label an event BUY NOW, HOLD, or WAIT.

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

- `brigitte.theisen@gmail.com`: Backstreet Boys: Into The Millennium — Aug. 6 — Sphere, Las Vegas — 3 days away
- `jeffgordonkc@yahoo.com`: ZZ Top — Aug. 8 — Mountain Winery, Saratoga — 5 days away
- `prosaji97@gmail.com`: Raja 50 - Ilaiyaraaja Live In Concert — Aug. 8 — NOW Arena, Hoffman Estates — 5 days away
- `blubberboi@yahoo.com`: Ed Sheeran: LOOP Tour — Aug. 8 — SoFi Stadium, Inglewood — 5 days away
- `edithdionne@hotmail.com`: Avenged Sevenfold and Good Charlotte: North American Tour 2026 — Aug. 8 — Centre Bell, Montreal — 5 days away
- `ldholman@ymail.com`: Motionless In White: The Sweat and Blood Tour — Aug. 11 — OKC Zoo Amphitheatre / Zoo Amphitheatre, Oklahoma City — 8 days away; two tracked rows
- `umcane06@gmail.com`: The Return Of The Carnival Of Sins: Mötley Crüe — Aug. 14 — iTHINK Financial Amphitheatre, West Palm Beach — 11 days away
- `rebdav13@gmail.com`: Noah Kahan: The Great Divide Tour — Aug. 17 — Petco Park, San Diego — 14 days away

## Send QA

- Suppress expired events, including WWE SummerSlam Sunday on Aug. 2.
- Do not include price deltas, target-hit language, or BUY NOW/HOLD/WAIT recommendations until price data is joined.
- Deduplicate the two Motionless In White rows only if they represent the same listing; otherwise retain both tracked rows.
- Keep the primary CTA above the fold and use the existing Nodemailer unsubscribe footer and sender identity.
