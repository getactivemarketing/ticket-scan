# Email Daily — 2026-10-16

Source: deployed admin API, checked 2026-10-16 (America/New_York). The
product-status guardrail was applied: this report does not turn watchlist data
into price, alert, trend, or buy/wait claims.

## Drip Campaign

- Emails sent (24h): 0 recorded
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: Not exposed by the admin endpoint
- Open/click rates: Not available; the current `drip_emails_sent` table and
  `/api/admin/drip-stats` endpoint expose sends only
- Pending users shown by the API: 20 (all have `last_email_sent: 0`)

Operational note: the campaign appears not to have recorded any sends. Do not
run the current drip sequence until E2 and any other price-alert copy is
updated to reflect the current product status.

## Price Alerts

- Alerts triggered (24h): Not available — `/api/admin/alerts` returned HTTP
  500 (`Failed to get alerts`)
- Events with drops: Not available; price tracking is down
- Delivery failures: Not available; the alert endpoint and email telemetry do
  not expose a usable 24-hour failure count
- Cross-check: `/api/admin/stats` reports `activeAlerts: 0` and
  `triggeredAlerts: 0` (the latter is an all-time aggregate, not a 24-hour
  delivery metric)

Escalation: fix `/api/admin/alerts`, then add time-bounded delivery and failure
telemetry before resuming any alert messaging.

## Subscriber Growth

- New subscribers today: 0 (no source breakdown)
- Unsubscribes today: 0 observed
- Net: 0
- Total active: 7
- All-time source mix: site-footer 4, onsales 1, homepage 1, test 1

## Watchlist Digest Prep

Audience snapshot: 256 watchlist items across 153 users. Eight users have nine
watchlisted events between 2026-10-16 and 2026-10-30. The digest should be
positioned as an event-date reminder, not a price update.

Suggested subject: `Your TicketScan watchlist: 9 dates coming up`

Preview: `Your next watchlist dates are on the calendar — with time to check
the official ticket links.`

### Digest-ready segments

Use the recipient's existing account/watchlist link for `[VIEW WATCHLIST]`.

- `mdawg1981@aol.com` — Twenty One Pilots - Ohio Stadium — 2026-10-17,
  Columbus
- `wbgoodman77@gmail.com` — KATSEYE: THE WILDWORLD TOUR — 2026-10-20,
  Spectrum Center, Charlotte
- `karenmreich@gmail.com` — KATSEYE: THE WILDWORLD TOUR — 2026-10-22,
  Capital One Arena, Washington
- `diny_85@hotmail.com` — Earth, Wind & Fire — 2026-10-24, The Venetian
  Theatre at The Venetian Resort, Las Vegas
- `chelsesak34@gmail.com` — Kansas Jayhawks Mens Basketball vs. Duke Blue
  Devils Mens Basketball — 2026-10-25, Allen Fieldhouse, Lawrence
- `guyncognito@duck.com` — Philadelphia 76ers vs. Detroit Pistons — 2026-10-25,
  Xfinity Mobile Arena, Philadelphia
- `mfishman93@gmail.com` — Baltimore Ravens v Cincinnati Bengals — 2026-10-25,
  M&T Bank Stadium, Baltimore
- `rck2001@hotmail.ca` — Olivia Rodrigo: The Unraveled Tour — 2026-10-26 and
  2026-10-27, Scotiabank Arena, Toronto

### Safe body copy

Hi there,

You have events coming up in your TicketScan watchlist. Here are the dates
worth putting on the calendar:

`[EVENT NAME]` — `[DATE]` — `[VENUE], [CITY]`

TicketScan can help you find the event and jump out to the available ticket
source. Before checking out, compare the all-in total, confirm the delivery
date, and watch for speculative listings. Ticket math is already weird enough
without surprise fees joining the party.

`[VIEW WATCHLIST]`

— TicketScan

## Subject Line / CTA Test

No volume-based A/B test was launched because the campaign recorded no sends.
Queue these variants for the next approved event-date digest:

- A — `Your TicketScan watchlist: 9 dates coming up`
- B — `Your next ticket dates are closer than you think`

Primary CTA: `View your watchlist`

CTA destination: the authenticated TicketScan watchlist page. Keep the CTA
above the fold. Do not use `Set a price alert`, `Buy now`, `Prices dropped`,
or similar wording.

## Analytics Handoff

- Send count: 0 recorded today
- Active subscribers: 7
- New subscribers today: 0
- Watchlist audience: 153 users / 256 items
- Near-term digest audience: 8 users / 9 events
- Follow-up needed from Analytics Agent: confirm whether send/open/click
  telemetry exists outside the admin endpoint; currently it is not exposed.
