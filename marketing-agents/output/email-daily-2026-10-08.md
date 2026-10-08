# Email Daily — 2026-10-08

## Deliverability and performance

### Drip Campaign

- Emails sent (24h): **0 recorded**
- By email #: E1: **0**, E2: **0**, E3: **0**, E4: **0**, E5: **0**
- Failures/bounces: **Not available** — the drip stats endpoint exposes send counts only, not delivery or bounce telemetry.
- Pending drip users: **20 shown in the API snapshot** (the endpoint caps this list at 20). The schedule remains Day 3, 7, 14, 21, and 30.

### Price Alerts

- Alerts triggered (24h): **Not available; 0 recorded overall in admin stats**
- Events with drops: **None available**
- Delivery failures: **Not available**
- `/api/admin/alerts` returned **HTTP 500** (`Failed to get alerts`). Price tracking is down, so no price movement or alert copy should be sent.

### Subscriber Growth

- New subscribers today: **0** (no subscriber record dated 2026-10-08)
- Source breakdown today: **None**
- Unsubscribes today: **0 observed**; the admin response reports 6 total subscribers and 6 active subscribers.
- Net: **0**
- Total active: **6**

## Watchlist digest prep

There are **256 watchlist items across 153 users**. None has a target price set, and no current price status or recommendation is available. Do not send “prices moved,” “buy now,” “hold,” or alert language.

Six watchlist events fall within the next 14 days (2026-10-08 through 2026-10-22):

- Prospa — 2026-10-09 — History Toronto, Toronto
- Philadelphia Eagles v Jacksonville Jaguars — 2026-10-11 — Tottenham Hotspur Stadium, London
- Denver Broncos vs. Seattle Seahawks — 2026-10-15 — Empower Field At Mile High, Denver
- Twenty One Pilots - Ohio Stadium — 2026-10-17 — Ohio Stadium, Columbus
- KATSEYE: THE WILDWORLD TOUR — 2026-10-20 — Spectrum Center, Charlotte
- KATSEYE: THE WILDWORLD TOUR — 2026-10-22 — Capital One Arena, Washington

### Safe digest draft

**Subject:** Your TicketScan Watchlist — upcoming events inside

**Preview:** Six events on your list are coming up in the next two weeks.

Hi there,

Here’s a quick date check for the events on your TicketScan watchlist:

- Prospa — Oct 9, History Toronto
- Philadelphia Eagles v Jacksonville Jaguars — Oct 11, Tottenham Hotspur Stadium
- Denver Broncos vs. Seattle Seahawks — Oct 15, Empower Field At Mile High
- Twenty One Pilots — Oct 17, Ohio Stadium
- KATSEYE: THE WILDWORLD TOUR — Oct 20, Spectrum Center
- KATSEYE: THE WILDWORLD TOUR — Oct 22, Capital One Arena

Before you buy, compare the all-in total after fees, confirm the seller and seat details, and be skeptical of listings marked speculative. TicketScan can help you find the event and the places selling tickets.

**Primary CTA:** View your watchlist

**CTA URL:** `https://www.ticketscan.io/watchlist`

## Subject-line and CTA test

- Version A: **Your TicketScan Watchlist — upcoming events inside**
- Version B: **Six events on your watchlist happen soon**
- Primary CTA: **View your watchlist**
- Alternate CTA: **Check event details**

Use the A/B test only if the send system supports it. Keep the CTA above the fold and link it to the authenticated watchlist page.

## Escalation

1. **Pause the current drip run.** The existing Day 7, Day 14, and Day 30 templates reference price alerts, price data, or savings reports that cannot currently be substantiated.
2. Fix `/api/admin/alerts` and restore a verifiable price source before resuming alert or price-performance email.
3. Add delivery-provider telemetry for bounces, failures, opens, and clicks; today’s admin endpoints cannot report those metrics.
4. Pass this report to Analytics Agent 7: 0 new newsletter subscribers today, 6 active total, 256 watchlist items, and 153 users with watchlist items.
