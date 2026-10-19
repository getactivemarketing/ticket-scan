# Email Daily — 2026-10-19

Source: deployed admin API, checked 2026-10-19 (America/New_York). All
figures below are live API observations. The product-status guardrail was
applied: no public copy claims price tracking, price history, price trends,
price alerts, or buy/wait recommendations.

## Drip Campaign

- Emails sent (24h): **0 recorded**
- By email #: **E1: 0, E2: 0, E3: 0, E4: 0, E5: 0** (`stats: []`)
- Pending users shown by the API: **20**; every visible user has
  `last_email_sent: 0`
- Failures/bounces: **Not exposed** by `/api/admin/drip-stats`
- Open/click rates: **Not available**; the endpoint exposes sends only

Operational decision: **did not trigger `/api/admin/drip-run`**. The existing
sequence contains price-alert and price-data claims that are currently false,
and the 20-user backlog could produce an uncontrolled send. Update the copy,
confirm safe rate limiting and delivery telemetry, then run a scoped test.

## Price Alerts

- Alerts triggered (24h): **Not available** — `/api/admin/alerts?limit=10000`
  returned HTTP 500 (`Failed to get alerts`)
- Events with drops: **Not available; price tracking is down**
- Delivery failures: **Not available**; the endpoint and email telemetry do
  not expose a usable 24-hour failure count
- Cross-check: `/api/admin/stats` reports `activeAlerts: 0` and
  `triggeredAlerts: 0`. These are aggregate counters, not a 24-hour delivery
  metric.

Escalation: repair `/api/admin/alerts` and add time-bounded send/failure
telemetry before resuming alert messaging.

## Subscriber Growth

- New subscribers today: **0** (no source breakdown)
- Unsubscribes today: **0 observed**
- Net: **0**
- Total active: **7**
- All-time source mix: site-footer 3, onsales 1, homepage 1, test 1,
  api-test 1

## Watchlist Digest Prep

Audience snapshot: **256 watchlist items** across **8 users with 10 event
dates from 2026-10-19 through 2026-11-02 inclusive**. This is an event-date
reminder segment, not a price-status segment.

Suggested subject: `Your TicketScan watchlist: 10 dates coming up`

Preview: `Your next ticket dates are on the calendar — with time to check the official links.`

Safe body copy:

> Hi there,
>
> You have events coming up in your TicketScan watchlist. Here are the dates
> worth putting on the calendar:
>
> `[EVENT NAME]` — `[DATE]` — `[VENUE], [CITY]`
>
> TicketScan can help you find the event and jump out to the available ticket
> source. Before checking out, compare the all-in total, confirm the delivery
> date, and watch for speculative listings. Ticket math is already weird enough
> without surprise fees joining the party.
>
> `[VIEW WATCHLIST]`
>
> — TicketScan

### Digest-ready segments

Use each recipient's authenticated TicketScan watchlist link for `[VIEW WATCHLIST]`.

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
- `guyncognito@duck.com` — Philadelphia 76ers vs. Chicago Bulls — 2026-11-02,
  Xfinity Mobile Arena, Philadelphia
- `mfishman93@gmail.com` — Baltimore Ravens v Cincinnati Bengals — 2026-10-25,
  M&T Bank Stadium, Baltimore
- `rck2001@hotmail.ca` — Olivia Rodrigo: The Unraveled Tour — 2026-10-26 and
  2026-10-27, Scotiabank Arena, Toronto
- `ibmztrdqkxtwibiuqg@onldm.net` — Seattle Seahawks vs. Chicago Bears —
  2026-11-02, Lumen Field, Seattle

Note: 10 event dates are represented above; Olivia Rodrigo has two dates and
the Philadelphia 76ers recipient has two events.

## Subject Line / CTA Test

No volume-based A/B test was launched because the campaign recorded no sends.
Queue these variants for the next approved event-date digest:

- A — `Your TicketScan watchlist: 10 dates coming up`
- B — `Your next ticket dates are closer than you think`

Primary CTA: **View your watchlist**

CTA destination: authenticated TicketScan watchlist page. Keep it above the
fold. Do not use `Set a price alert`, `Buy now`, `Prices dropped`, `Price
history`, or similar wording.

## Analytics Handoff

- Send count: **0 recorded today**
- Active subscribers: **7**
- New subscribers today: **0**
- Watchlist audience: **8 users / 10 event dates in the next 14 days**
- Drip backlog visible to API: **20 users**
- Follow-up needed: confirm whether send/open/click/bounce telemetry exists
  outside the admin endpoint; currently it is not exposed.

## Delivery Issue Escalation

1. **Engineering — P0:** `/api/admin/alerts` returned HTTP 500; repair the
   endpoint and add 24-hour alert/send failure counters.
2. **Lifecycle engineering — P0:** drip has recorded zero sends and shows 20
   pending users. Do not manually trigger the current sequence until its
   price-related copy is rewritten and the send path is safely scoped.
3. **Analytics — P1:** expose delivery, bounce, open, and click telemetry so
   email health can be measured rather than inferred from send rows.
