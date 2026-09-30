# Email Daily — 2026-09-30

Data checked against the production admin API on 2026-09-30. No email, drip run, or blast was triggered.

## Drip Campaign

- Emails sent (24h): **0 recorded**; `/api/admin/drip-stats` returned an empty aggregate.
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0 recorded.
- Pending users returned: **20** (the endpoint caps this list at 20). Several are beyond the Day 3 eligibility threshold and still show `last_email_sent: 0`.
- Failures/bounces: **Not exposed** by the current API.
- Open/click rates: **Not tracked or exposed** by the current API.

## Price Alerts

- Alerts triggered (24h): **0 recorded**; `/api/admin/stats` reports `triggeredAlerts: 0`.
- Events with drops: **None verifiable**. `/api/admin/price-history` returned 202 records, newest observation `2026-07-24T20:01:07.151Z`; 0 records were observed in the last 24-hour window.
- Delivery failures: **Not exposed**.
- Audit issue: `/api/admin/alerts` returned HTTP 500 (`Failed to get alerts`). The route/schema mismatch documented in the handoff remains unresolved.

## Subscriber Growth

- New subscribers today: **0** (UTC day; sources: none).
- Unsubscribes today: **0 observed**; all 6 returned subscriber records are active and no unsubscribe timestamp was present.
- Net: **0**.
- Total active: **6**.
- Active source mix: `site-footer` 2, `api-test` 1, `homepage` 1, `onsales` 1, `test` 1.

## Watchlist Digest Readiness

- Platform watchlist rows: **254**.
- Upcoming within the next 14 days (2026-09-30 through 2026-10-14): **4 rows across 4 users**.
- Upcoming events:
  - New York Giants vs. Arizona Cardinals — Oct 4 — MetLife Stadium
  - Malcolm Todd: Do That Again Tour (MOVED TO THE SALT SHED OUTDOORS) — Oct 6 — The Salt Shed Outdoors (Fairgrounds)
  - Prospa — Oct 9 — History Toronto
  - Philadelphia Eagles v Jacksonville Jaguars — Oct 11 — Tottenham Hotspur Stadium
- Rows with a target price: **0 of 4**.
- Price movement/recommendation changes: **Unavailable** because no fresh price history exists and no target prices are set.
- Send status: digest copy is prepared in [watchlist-digest-2026-09-30.md](./watchlist-digest-2026-09-30.md), but hold it until price tracking is fresh.

## Subject Line and CTA Test

- Version A — utility/personalization: `Your TicketScan watchlist update — [X] events coming up`
- Version B — urgency/consumer advocate: `[Event] is [X] days away — check prices before they move`
- Preview A: `You have [X] upcoming events on your watchlist. Here’s what we can verify today.`
- Preview B: `Ticket prices move. We’ll flag a real deal when the market data checks in.`
- Primary CTA: `Open my watchlist` → https://www.ticketscan.io/watchlist
- Test note: with 4 recipients and no open/click telemetry, this is a copy test only; do not declare a winner.

## Escalation

1. **P1:** Restore price tracking; the newest production observation is 68 days old.
2. **P1:** Fix `/api/admin/alerts` to match the live `price_alerts.sent_at` schema, or migrate both route and table together.
3. **P2:** Investigate why eligible users remain at `last_email_sent: 0` and confirm the drip scheduler/SMTP path.
4. **P2:** Add provider-level send, bounce, open, click, and unsubscribe telemetry with 24-hour aggregation.

## Analytics Handoff — Agent 7

**0 new subscribers, 0 observed unsubscribes, net 0, 6 active subscribers.** Source mix: site-footer 2, api-test 1, homepage 1, onsales 1, test 1. Upcoming digest cohort: 4 users / 4 rows. Drip sends recorded: 0. Triggered alerts reported: 0. Price data stale since 2026-07-24.
