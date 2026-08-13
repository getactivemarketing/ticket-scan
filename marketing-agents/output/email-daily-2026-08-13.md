# Email Daily — 2026-08-13

Audit window: 2026-08-12 00:00 through 2026-08-13 23:59 America/New_York (where the API exposed timestamps). Live API checked: 2026-08-13.

## Executive summary

- Subscriber list is stable: 4 active subscribers, 0 new today, 0 unsubscribes reported today, net 0.
- The drip endpoint returned no aggregate send rows, so the observable sent count is 0; however, the endpoint does not provide a 24-hour query or failure log.
- Price-alert reporting is unavailable: `/api/admin/alerts` returned HTTP 500. No alert count, event-drop list, or delivery-failure count is claimable.
- Watchlist digest candidates: 55 future events across 32 users; 13 events are within 14 days. One event is tomorrow (Mötley Crüe, West Palm Beach).
- No watchlist row currently has a target price, so price movement and recommendation changes must remain “not available,” not guessed.

## Drip Campaign

- Emails sent (24h): **Not measurable** — `/api/admin/drip-stats` exposes lifetime totals only; it returned `stats: []`.
- Observable lifetime emails by number: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0.
- Failures/bounces: **Not tracked by the endpoint**.
- Opens/clicks: **Not tracked by the current backend/API**.
- Pending users returned by the API: 20 (the endpoint caps this preview at 20). The schedule remains E1 day 3, E2 day 7, E3 day 14, E4 day 21, E5 day 30.

### Delivery issue escalation

High priority: repair `/api/admin/alerts`. The route selects `pa.triggered_at` and `pa.email_sent`, but the table created in `index.js` defines `sent_at` and no `email_sent`; the route therefore returns 500. This blocks alert health monitoring and likely indicates schema/code drift. Add an error/bounce result store and 24-hour aggregates for sends, failures, opens, and clicks before relying on this report for deliverability decisions.

## Price Alerts

- Alerts triggered (24h): **Not measurable** — `/api/admin/alerts` returned `{"success":false,"error":"Failed to get alerts"}`.
- Events with drops: **Unavailable** — no alert rows could be read and no current-price feed is exposed by the admin routes.
- Delivery failures: **Not measurable** — no failure telemetry is exposed.

## Subscriber Growth

- New subscribers today: 0 observed (the newest active subscriber is dated 2026-07-21).
- Source breakdown for new today: none.
- Unsubscribes today: 0 observed; no unsubscribe event history is exposed, so this is based on current subscriber rows.
- Net: 0
- Total active: 4

Active subscriber source mix: site-footer 1, homepage 1, test 1, api-test 1. The last two are test-looking records and should be excluded from production campaign sends after confirmation.

## Watchlist Digest Prep

Data basis: `/api/admin/watchlist?limit=1000&offset=0`, checked 2026-08-13. There are 55 future events across 32 users. Thirteen events fall from Aug 14 through Aug 27, 2026. Every row has no target price; prices and direction are therefore intentionally marked unavailable.

### Digest defaults

- Subject: `Your Ticket Watchlist Update — [X] events tracked`
- Preview: `An event is coming up soon. Here's what TicketScan can confirm today.`
- Primary CTA: `View your watchlist` → `https://ticketscan.io/watchlist`
- Recommendation rule for this send: tracking only; do not label BUY NOW, HOLD, or price movement until a current price and target price exist.

### Ready-to-send urgent digest blocks

Use one block per recipient below. Replace `[X]` with that recipient's total future-event count if the template displays it. Dates are shown in local calendar format from the API event date.

#### umcane06@gmail.com

Subject: `Your Ticket Watchlist Update — 1 event tracked`

Preview: `Mötley Crüe is tomorrow. Your watchlist is watching; pricing data is not currently available.`

Hi there,

Your watched event is tomorrow:

- ⚪ **The Return Of The Carnival Of Sins: Mötley Crüe** — Aug 14, West Palm Beach — current price: unavailable; recommendation: check listings now.

TicketScan does not have a target price saved for this event, so it cannot call a buy signal yet. [View your watchlist](https://ticketscan.io/watchlist)

#### rebdav13@gmail.com

Subject: `Your Ticket Watchlist Update — 1 event tracked`

Preview: `Noah Kahan is 4 days away. Here's the honest status of your tracked ticket.`

Hi there,

- ⚪ **Noah Kahan: The Great Divide Tour** — Aug 17, Petco Park, San Diego — current price: unavailable; recommendation: check listings now.

No target price is saved, so price movement and buy timing cannot be calculated yet. [View your watchlist](https://ticketscan.io/watchlist)

#### chungvungocminh@gmail.com

Subject: `Your Ticket Watchlist Update — 1 event tracked`

Preview: `MAMAMOO is 5 days away. Your watchlist has the event; pricing data needs a target.`

Hi there,

- ⚪ **MAMAMOO 2026 US TOUR** — Aug 18, Dickies Arena, Fort Worth — current price: unavailable; recommendation: check listings now.

Add a target price so TicketScan knows when to stop politely watching and start yelling “buy.” [View your watchlist](https://ticketscan.io/watchlist)

#### savsaurusrex@gmail.com

Subject: `Your Ticket Watchlist Update — 1 event tracked`

Preview: `My Chemical Romance is 14 days away. Set a target and let the tracker do the staring.`

Hi there,

- ⚪ **My Chemical Romance The Black Parade 2026** — Aug 27, Coors Field, Denver — current price: unavailable; recommendation: tracking only.

No target price is saved yet. [View your watchlist](https://ticketscan.io/watchlist)

#### fnziman@gmail.com

Subject: `Your Ticket Watchlist Update — 1 event tracked`

Preview: `Your Radio City event is 14 days away. Here's what we can confirm.`

Hi there,

- ⚪ **Ishay Ribo with The Israel Philharmonic Orchestra** — Aug 27, Radio City Music Hall, New York — current price: unavailable; recommendation: tracking only.

Set a target price to make the alert useful. [View your watchlist](https://ticketscan.io/watchlist)

#### eemorkeviciute@gmail.com

Subject: `Your Ticket Watchlist Update — 1 event tracked`

Preview: `Bills vs. Steelers is 14 days away. Your watchlist is ready; your target price is not.`

Hi there,

- ⚪ **Preseason Game 2: Buffalo Bills v Pittsburgh Steelers** — Aug 27, Highmark Stadium, Orchard Park — current price: unavailable; recommendation: tracking only.

[View your watchlist](https://ticketscan.io/watchlist)

#### spcoog83@gmail.com

Subject: `Your Ticket Watchlist Update — 1 event tracked`

Preview: `Olivia Dean is 12 days away. Add a target price before the market gets dramatic.`

Hi there,

- ⚪ **Olivia Dean: The Art Of Loving Live** — Aug 25, Toyota Center, Houston — current price: unavailable; recommendation: tracking only.

[View your watchlist](https://ticketscan.io/watchlist)

#### taranimeramaro@gmail.com

Subject: `Your Ticket Watchlist Update — 3 events tracked`

Preview: `You have three Bruno Mars dates coming up. Compare them before picking a night.`

Hi there,

- ⚪ **Bruno Mars — The Romantic Tour** — Aug 21, Aug 22, and Aug 25, MetLife Stadium — current price: unavailable; recommendation: compare dates.

No target price is saved. [View your watchlist](https://ticketscan.io/watchlist)

#### cutekitten1234@icloud.com

Subject: `Your Ticket Watchlist Update — 7 events tracked`

Preview: `Harry Styles at MSG starts Aug 26. Seven dates are worth comparing.`

Hi there,

- ⚪ **Harry Styles: Together, Together** — Aug 26, Madison Square Garden — current price: unavailable; recommendation: compare dates.

Your other watched dates begin Aug 28 and continue through Sep 9. [View your watchlist](https://ticketscan.io/watchlist)

#### tosophiameyer@gmail.com

Subject: `Your Ticket Watchlist Update — 11 events tracked`

Preview: `Harry Styles at MSG starts Aug 26. Your 11-date watchlist needs a price target.`

Hi there,

- ⚪ **Harry Styles: Together, Together** — Aug 26, Madison Square Garden — current price: unavailable; recommendation: compare dates.

Your other watched dates run Aug 28 through Sep 16, including an MSG Suites listing. [View your watchlist](https://ticketscan.io/watchlist)

#### rgbarrasso@gmail.com

Subject: `Your Ticket Watchlist Update — 1 event tracked`

Preview: `Your MetLife Suites event is 13 days away. Here's the tracking status.`

Hi there,

- ⚪ **Bruno Mars Wed 8/26/26** — Aug 26, MetLife Stadium Suites — current price: unavailable; recommendation: tracking only.

[View your watchlist](https://ticketscan.io/watchlist)

## Subject-line and CTA A/B test

Use only if send volume is large enough to split; otherwise use Version A for the urgent digest.

| Variant | Subject | Hook |
|---|---|---|
| A | `Your Ticket Watchlist Update — [X] events tracked` | Personalization and clarity |
| B | `[Event] is coming up — should you buy yet?` | Urgency and curiosity |

- Primary CTA A: `View your watchlist`
- Primary CTA B: `Compare prices now`
- CTA destination: `https://ticketscan.io/watchlist` for A; `https://ticketscan.io/dashboard` for B.
- Above-the-fold check: put the first upcoming event and CTA before the event list.

## Analytics handoff — Agent 7

- Active newsletter subscribers: 4; source mix: site-footer 1, homepage 1, test 1, api-test 1.
- Watchlist total: 208 rows; future rows: 55; users with future rows: 32.
- Upcoming within 14 days: 13 rows across 11 recipients.
- New newsletter subscribers today: 0 observed; net growth: 0.
- Drip send/open/click/failure metrics: unavailable from current endpoint.
- Price-alert metrics: unavailable because `/api/admin/alerts` returns 500.

## Recommended next actions

1. Fix `/api/admin/alerts` column names (`sent_at` versus `triggered_at`; remove or add `email_sent`) and add a regression test.
2. Add time-windowed drip and alert metrics, plus SMTP failure/bounce/open/click tracking.
3. Require or prompt for `target_price` in the digest flow; currently every watchlist row is missing one.
4. Confirm whether `test@example.com` and `samir.sgpatel@gmail.com` are test records before any newsletter send.
