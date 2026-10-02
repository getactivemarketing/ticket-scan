# Email Daily — 2026-10-02

Data checked against the production admin API on 2026-10-02. No drip run,
digest, or other email send was triggered.

## Drip Campaign

- Emails sent (24h): **0 recorded**; `/api/admin/drip-stats` returned an empty
  sent-statistics aggregate.
- By email #: E1: **0**, E2: **0**, E3: **0**, E4: **0**, E5: **0** recorded.
- Pending users returned: **20** (endpoint cap). **17** are at least three days
  from signup and appear eligible for at least E1; the oldest returned pending
  user is at **35 days** with `last_email_sent: 0`.
- Failures/bounces: **Not exposed** by the current API.
- Open/click rates: **Not tracked or exposed**.
- Action: **Do not trigger `/api/admin/drip-run` blindly.** The backlog includes
  real inboxes and the send log is empty; confirm SMTP health and choose a
  backfill policy before sending.

## Price Alerts

- Alerts triggered (24h): **0 reported** by `/api/admin/stats` (`triggeredAlerts: 0`).
- Events with drops: **None verifiable**. `/api/admin/price-history` returned
  202 total records in its payload, with newest observation
  `2026-07-24T20:01:07.151Z`; there were **0** records in the last 24 hours.
- Delivery failures: **Not exposed**.
- Audit issue: `/api/admin/alerts` returned **HTTP 500** (`Failed to get alerts`),
  so the zero cannot be independently validated from the alert ledger.
- Product-status guardrail: do not write or send copy claiming current price
  movement, price history, price-drop alerts, target-price alerts, or buy/wait
  recommendations.

## Subscriber Growth

- New subscribers today (UTC): **0** (sources: none).
- Unsubscribes today: **0 observed**; all 6 returned records are active and
  have no unsubscribe timestamp.
- Net: **0**.
- Total active: **6**.
- Active source mix: `site-footer` 2, `api-test` 1, `homepage` 1, `onsales` 1,
  `test` 1.

## Watchlist Digest Readiness

- Platform totals: **255 watchlist rows**, **0** with a target price.
- Upcoming cohort (2026-10-02 through 2026-10-16): **5 rows across 5 users**.
- Price movement/recommendation fields: **Unavailable** because no fresh price
  history exists and no watchlist rows have target prices.
- Send status: **Hold.** A price digest cannot be sent honestly today. A
  non-price date/venue reminder is drafted separately in
  [watchlist-digest-2026-10-02.md](./watchlist-digest-2026-10-02.md), but should
  remain unsent until the email owner confirms that limitation-focused copy is
  wanted.

## Subject Line and CTA Test

- Version A — utility/personalization: `Your TicketScan watchlist — [X] upcoming events`
- Version B — urgency without a price claim: `[Event] is [X] days away — check the details`
- Preview A: `Your saved events are coming up. Here are the dates and venues to keep handy.`
- Preview B: `A quick date-and-venue check for your next ticket outing.`
- Primary CTA: `Open my watchlist` → https://www.ticketscan.io/watchlist
- Test note: there is no send volume and no open/click telemetry, so this is a
  copy test only; do not declare a winner.

## Escalation

1. **P1:** Restore price data before sending any price-based digest or alert.
   The newest production observation remains July 24.
2. **P1:** Fix `/api/admin/alerts`; it still returns HTTP 500.
3. **P2:** Investigate why eligible users remain at `last_email_sent: 0` and
   confirm SMTP/send-log behavior before running the drip campaign.
4. **P2:** Add provider-level send, bounce, open, click, and unsubscribe
   telemetry with 24-hour aggregation.

## Analytics Handoff — Agent 7

**0 new subscribers, 0 observed unsubscribes, net 0, 6 active subscribers.**
There are 255 watchlist rows, 5 upcoming rows across 5 users, 0 recorded drip
sends, 0 reported triggered alerts, and no fresh price data since 2026-07-24.

