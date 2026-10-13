## Analytics Anomaly Alerts — 2026-10-13

- **P1 data reliability:** `/api/admin/alerts` returns HTTP 500. Alert counts are not trustworthy until repaired.
- **P1 product-data gap:** price history stops at 2026-07-24; price tracking remains unavailable per product status.
- **P2 reporting gap:** drip stats are empty while 20 users are pending, so campaign delivery cannot be audited.
- **P2 instrumentation gap:** traffic sources, page views, bounce rate, comparison events, and UTM capture are unavailable from the current reporting surface.
- **P2 behavior signal:** no watchlist additions were returned for Oct. 6–13, despite 256 total watchlist rows. Validate against client events and database writes.
