## TicketScan Analytics Alerts — 2026-10-06

### Critical

- **Tracking instrumentation is incomplete.** GTM is present, but conversion and UTM events are not verifiable in source or through the available admin API.
- **Price tracking data is stale.** No price-history record has been returned after 2026-07-24. Public marketing must not claim price tracking, alerts, trends, recommendations, or current TicketScan price data.
- **Alert endpoint failure.** `/api/admin/alerts` returned HTTP 500, so alert detail cannot be reconciled with the zero count reported by `/api/admin/stats`.

### Reporting gaps

- Visitor counts, traffic sources, top pages, bounce rates, comparison volume, email delivery, and UTM attribution are unavailable.
- `/api/admin/drip-stats` returned no sent-stat rows and 20 pending users; sending and delivery are unverified.

### Volume signal

- 0 signups and 0 watchlist adds in the 2026-10-05 06:00–2026-10-06 06:00 UTC window, versus seven-day averages of 1.00 and 0.43 respectively. Both are low-volume signals and should not be interpreted as a confirmed demand change.
