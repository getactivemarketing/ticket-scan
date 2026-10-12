# TicketScan Analytics Anomaly Alerts — 2026-10-12

## Priority 1 — Conversion instrumentation is not queryable

- GTM is present on five sampled live routes.
- No explicit frontend conversion events were found for signup, watchlist add, comparison, newsletter subscription, or outbound ticket clicks.
- Visitor, pageview, bounce, traffic-source, UTM, and comparison metrics cannot be reported.

## Priority 1 — Price-history gap

- `/api/admin/price-history` returns 202 records.
- The newest record is **2026-07-24 20:01 UTC**.
- This confirms the existing product-status restriction: public marketing must not claim price tracking, price history, trends, price-drop alerts, or buy/wait/hold calls.

## Priority 1 — Alert endpoint failure

- `/api/admin/alerts` returns HTTP 500 with `Failed to get alerts`.
- `/api/admin/stats` reports `triggeredAlerts: 0`, but that summary is not independently verifiable while the detail endpoint fails.

## Priority 2 — Drip scheduler/reporting gap

- `/api/admin/drip-stats` returns no sent-statistics rows.
- It returns 20 pending users; several are 9–36 days from signup and have `last_email_sent: 0`.
- Audit the scheduler, SMTP response logging, and unique-send inserts before treating campaign performance as zero or promoting the campaign.

## Priority 2 — Popular-event quality

- The endpoint returns ties at two watches, includes past events, and splits repeat series into separate event IDs.
- Add an upcoming-date filter and series-level aggregation before this feeds content or social decisions.

## Monitoring signal — Activation

- One signup and one newsletter subscription were recorded in the latest 24-hour window.
- No watchlist additions were recorded.
- The seven-day watchlist baseline is only 0.14/day, so this is a watch item rather than a statistically meaningful demand conclusion.

## Recommended owners/actions

1. Engineering: repair `/api/admin/alerts` and investigate the price-ingestion outage separately.
2. Analytics/engineering: instrument typed conversion and outbound-click events and verify them in GTM Preview.
3. Lifecycle: inspect drip scheduler execution, SMTP results, and unique-send records.
4. Marketing: rely on event discovery, onsale/presale, venue-guide, and general ticket-buying claims until data systems recover.

