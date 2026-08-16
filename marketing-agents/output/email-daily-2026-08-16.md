# Email Daily — 2026-08-16

Snapshot taken from the production admin API on 2026-08-16 UTC. The API does not expose open/click telemetry, SMTP/Resend delivery logs, or date-filtered email metrics, so unavailable values are explicitly marked rather than estimated.

## Drip Campaign

- Emails sent (24h): **0 recorded**; `/api/admin/drip-stats` returned no sent rows.
- By email #: **E1: 0, E2: 0, E3: 0, E4: 0, E5: 0 recorded**.
- Failures/bounces: **Unavailable**. No delivery-log endpoint is exposed.
- Open/click rates: **Unavailable**. No tracking data is exposed.
- Pending users: 20 returned by the endpoint; all have `last_email_sent: 0`. The endpoint caps this list at 20, so it is not a complete pending-user count.

## Price Alerts

- Alerts triggered (24h): **0 recorded**; production stats show `triggeredAlerts: 0` overall.
- Events with drops: **None recorded**.
- Delivery failures: **Unavailable**.
- Admin alert detail check: `/api/admin/alerts` returned HTTP 500, so alert-level verification is blocked. Escalate to backend owner; likely inspect the alert query/schema alignment before the next tracking run.

## Subscriber Growth

- New subscribers today: **0** (UTC date window beginning 2026-08-16).
- Sources today: **None**.
- Unsubscribes today: **0 observed**; all 4 returned subscriber records are active and have no unsubscribe timestamp.
- Net: **0**.
- Total active: **4**.
- Total records: **4**.

## Watchlist Digest — Ready for Send

Audience: **127 users / 215 watchlist items**. The admin watchlist snapshot contains **0 target prices**, so no user qualifies for a personalized buy-now/hold recommendation today. Current-price and price-history data are not available through the admin endpoints; do not insert dollar movements or claim a drop.

Recommended subject: **Your TicketScan watchlist: 20 events are coming up**

Preview: **A few events are within 14 days. We’re tracking them, but no target price is set yet.**

### Send copy

Hi [Name],

Here’s today’s update on the tickets you’re watching:

We’re tracking **[X] events** for you. No target price is set yet, so there’s no honest “buy now” signal today—and we refuse to invent one just to make the email look exciting.

Upcoming events include:

- **MAMAMOO 2026 US TOUR** — Aug 18 — Dickies Arena, Fort Worth
- **Noah Kahan: The Great Divide Tour** — Aug 17 — Petco Park, San Diego
- **Bruno Mars — The Romantic Tour** — Aug 21, 22, and 25 — MetLife Stadium
- **Harry Styles: Together, Together** — Aug 26, 28, and 29 — Madison Square Garden
- **Bruno Mars Wed 8/26/26** — Aug 26 — MetLife Stadium Suites
- **My Chemical Romance: The Black Parade 2026** — Aug 27 and 30 — Coors Field / Petco Park
- **Ishay Ribo with The Israel Philharmonic Orchestra** — Aug 27 — Radio City Music Hall
- **Preseason Game 2: Buffalo Bills v Pittsburgh Steelers** — Aug 27 — Highmark Stadium
- **The Red Clay Strays** — Aug 29 — Moda Center
- **Jason Aldean: Songs About Us Tour 2026** — Aug 29 — The Wharf Amphitheater
- **Olivia Dean: The Art Of Loving Live** — Aug 25 — Toyota Center

Set a target price in your watchlist and we can make the next update much more useful: price movement, target status, and a clearer buy/wait recommendation.

[View your watchlist](https://ticketscan.io/watchlist)

Ticket prices are weird enough without us pretending otherwise.

— TicketScan

### Urgency segment

Create a separate urgency block for the 2 users tracking events within 48 hours:

- Noah Kahan — Aug 17 — Petco Park
- MAMAMOO — Aug 18 — Dickies Arena

Copy: **Your event is within 48 hours. We’re still tracking it, but no target price is set. Check current listings now and set your ceiling before buying.**

## Subject-Line A/B Test

No email volume exists today for a statistically meaningful test. If the digest is sent, use an even split and keep the CTA identical:

- **A — Utility:** Your TicketScan watchlist: 20 events are coming up
- **B — Curiosity/urgency:** Two watched events happen this week—are you ready?

Primary CTA for both: **View your watchlist** → `https://ticketscan.io/watchlist`.

## Handoff to Analytics Agent (Agent 7)

- Users: 216 total; 13 users in the last 7 days; 1 user in the last day per `/api/admin/stats`.
- Watchlist: 215 items across 127 users.
- Active target-price alerts: 0.
- Active newsletter subscribers: 4.
- New newsletter subscribers today: 0.
- No drip sends, alert triggers, or measurable delivery telemetry recorded in the available admin APIs.

## Escalation

Backend owner should investigate the HTTP 500 from `/api/admin/alerts` and add date-filtered email/alert delivery metrics. Until then, report “unavailable” for failures, bounces, opens, and clicks; do not report them as zero.
