# Drip Email 1 — Optimized Copy — 2026-10-02

**Audience:** Registered users, Day 3, with no prior activation email recorded  
**Goal:** Get the new user to search for an event and save one event to the watchlist  
**CTA:** Browse events → `https://www.ticketscan.io/dashboard`

## Subject test

- **A — recommended:** Your next ticket search starts here
- **B:** Find an event, save the details, and plan with confidence
- **C:** Your first TicketScan watchlist is one search away

**Preview text:** Find an event, check the date and venue, and keep the details handy.

## Body copy

Hi there,

You’re signed up. Now make TicketScan useful for the event you actually want to attend.

Search by artist, team, venue, or city. When you find a promising event, add it to your watchlist so the date, venue, and event details are easy to return to later.

Before you buy, use this quick checklist:

1. Confirm the date, time, city, and venue.
2. Open the venue guide and check the section layout and sightlines.
3. Follow the ticket link to the seller and review the all-in checkout total.
4. Read the delivery, transfer, refund, and buyer-protection terms.

TicketScan helps you get from “I might go” to the right event page with the details you need in one place.

**[Browse events →](https://www.ticketscan.io/dashboard)**

Not sure where to start? Try your favorite team, artist, or venue. You can always update your watchlist later.

— The TicketScan Team

P.S. A lower headline price is not always a lower final cost. Check fees and the final checkout total before paying.

## Implementation notes

- Replace the current Email 1 template in `index.js` with this copy and one subject variant per test cell.
- Keep the Day 3 schedule unchanged until send/open/click telemetry is available.
- Do not include “price alert,” “price drop,” “target price,” “we monitor,” “buy now,” or unsupported savings statistics.
- Primary conversion: watchlist add within 24 hours of click. Secondary conversions: dashboard visit, event-detail view, outbound ticket click.
