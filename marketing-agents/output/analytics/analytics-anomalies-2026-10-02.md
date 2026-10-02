## TicketScan Analytics Anomalies — 2026-10-02

### Critical

- Conversion events are not implemented or verifiable: signup, watchlist add, comparison, newsletter subscribe, and outbound ticket clicks have no explicit data-layer instrumentation.
- Price history remains stale since 2026-07-24. This is an internal product-health alert; it must not become public price or alert copy.

### High

- `/api/admin/alerts` returns HTTP 500.
- GA4/GTM reporting is not available to the analytics agent, so visitors, top pages, bounce rate, acquisition source, UTM attribution, and comparison volume cannot be reported.

### Medium

- `/onsale` returns 404 while `/onsales` returns 200. Audit links and add a redirect if the singular URL is in circulation.
- `/api/admin/price-history` labels its latest-50 result count as `total`; it is not a database-wide record count.

### Positive signals

- One signup and one watchlist addition were observed in the 2026-10-01 06:00–2026-10-02 06:00 UTC window.
- The deployed core pages and GTM script returned successfully during the smoke check.

