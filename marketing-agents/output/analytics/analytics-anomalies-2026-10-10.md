# TicketScan Analytics Anomalies — 2026-10-10

## Priority 1 — Tracking and alert data are not reliable

- GTM container loads on sampled pages, but no explicit conversion events were found for signup, watchlist add, comparison, newsletter subscription, or outbound ticket clicks.
- `/api/admin/alerts` returns HTTP 500 (`Failed to get alerts`).
- Visitor, page-view, bounce-rate, traffic-source, UTM, and price-comparison metrics are unavailable from the current data connections.

## Priority 1 — Price-history gap

- The price-history endpoint returns 202 records, with the latest at 2026-07-24 20:01 UTC.
- This confirms the existing product-status restriction: marketing must not claim price tracking, price history, trends, price-drop alerts, or buy/wait/hold calls.

## Priority 2 — Drip campaign gap

- `/api/admin/drip-stats` returned no sent-statistics rows.
- It returned 20 pending users, all at or beyond seven days since signup.
- Audit the scheduler and email-send logging before treating campaign performance as zero or promoting the drip program.

## Priority 3 — Recent activity is effectively flat

- No signups or watchlist additions were observed on Oct 5–10.
- The seven-day Oct 3–9 period contained one watchlist addition and no signups.
- This may be a real lull, a tracking gap, or both; fix conversion instrumentation before drawing growth conclusions.

## Recommended owners/actions

1. Engineering: restore alert endpoint and investigate the price-ingestion outage separately.
2. Analytics/engineering: instrument typed conversion events and verify them in GTM Preview.
3. Lifecycle: inspect drip scheduler execution, SMTP results, and unique-send records.
4. Marketing: use only verified event discovery, onsale/presale, venue-guide, and general ticket-buying claims until the data systems recover.
