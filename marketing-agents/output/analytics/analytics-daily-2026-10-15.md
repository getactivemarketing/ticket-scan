## TicketScan Daily Dashboard — 2026-10-15

Run time: 2026-10-15. Snapshot windows use UTC calendar dates, consistent with the 06:00 UTC agent schedule. Visitor and pageview metrics are unavailable from the current analytics/admin surfaces. Product-status constraints are applied: price tracking, price history, and alerts are not treated as live features.

### Key Metrics (24h)

| Metric | Today | Yesterday | 7-Day Avg | Trend |
|---|---:|---:|---:|:---:|
| Unique Visitors | N/A | N/A | N/A | — |
| New Signups | 0 | 0 | 0.29 | → |
| Watchlist Items Added | 0 | 0 | 0.00 | → |
| Price Comparisons Run | N/A | N/A | N/A | — |
| Newsletter Subscribers | 0 | 0 | 0.14 | → |
| Price Alerts Triggered | N/A | N/A | N/A | — |
| Drip Emails Sent | 0 recorded | 0 recorded | N/A | — |

Notes: “Today” is the current UTC date at snapshot time. The 7-day averages are for 2026-10-08 through 2026-10-14. Drip stats returned no sent rows; that is recorded as zero observed, not proof that every mail transport attempt was observed. The alerts endpoint returned HTTP 500, so alert volume is unknown rather than zero.

### Totals

- Total registered users: 266
- Total active watchlist items: 256
- Total active newsletter subscribers: 7
- Total price-history records returned: 202; latest record is 2026-07-24 20:01 UTC, so this dataset is stale and not usable for current price claims

### Traffic Sources (24h)

| Source | Visitors | Signups | Conversion |
|---|---:|---:|---:|
| Organic Search | N/A | N/A | N/A |
| Direct | N/A | N/A | N/A |
| Social | N/A | N/A | N/A |
| Paid | N/A | N/A | N/A |
| Email | N/A | N/A | N/A |
| Referral | N/A | N/A | N/A |

No accessible report exposes source attribution or UTM capture.

### Top Pages (24h)

Unavailable: no pageview or bounce-rate dataset is exposed by the current analytics/admin surfaces.

### Popular Events Being Tracked

These are watchlist rows, not live price tracking:

1. Harry Styles: Together, Together — Madison Square Garden, New York — 2 watchlist rows
2. Harry Styles: Together, Together — Madison Square Garden, New York — 2 watchlist rows (separate event ID)
3. Ariana Grande - The Eternal Sunshine Tour — Barclays Center, Brooklyn — 2 watchlist rows
4. NBA Finals: TBD at New York Knicks RD4 HM GM3 — Madison Square Garden, New York — 2 watchlist rows
5. Harry Styles: Together, Together — Madison Square Garden, New York — 2 watchlist rows (separate event ID)

### Competitor Activity

- SeatGeek launched TourIQ on October 2, a B2B predictive pricing product, and announced a Nashville SC ticketing partnership on October 7. This is meaningful category pressure around pricing intelligence and primary ticketing. Sources: [TourIQ announcement](https://seatgeek.com/press/SeatGeek%20Launches%20TourIQ), [SeatGeek press page](https://seatgeek.com/press).
- StubHub announced an official distribution partnership with L.A. Comic Con on October 9 and published a fees/pricing explainer on September 30. Source: [StubHub newsroom](https://newsroom.stubhub.com/).
- Vivid Seats announced its National Fan Day / Make-A-Wish campaign on October 8, including a four-week in-app trivia promotion with weekly $1,000 ticket prizes. Source: [Vivid Seats announcement](https://www.globenewswire.com/news-release/2026/10/08/3377253/0/en/index.html).

### 🚨 Anomalies & Alerts

- **Critical — price data gap:** all 202 price-history records predate the known July 24 outage. Do not use them for current price, trend, or recommendation claims.
- **Critical — alerts endpoint:** `/api/admin/alerts` returned HTTP 500 (`Failed to get alerts`); alert volume cannot be validated.
- **Critical — conversion measurement gap:** GTM is present on all five sampled deployed routes, but no explicit frontend event pushes/calls were found for signup, watchlist add, price comparison, or newsletter subscription.
- **Measurement gap:** unique visitors, top pages, bounce rate, traffic source, UTM capture, and comparison-run counts are unavailable; anomaly checks for those metrics cannot be performed.
- **Drip delivery gap:** `/api/admin/drip-stats` returned an empty sent-stat array while showing pending users, so campaign delivery is unverified.

### Data Sources Checked

- `GET /api/admin/stats`
- `GET /api/admin/users?limit=10000`
- `GET /api/admin/watchlist?limit=10000`
- `GET /api/admin/newsletter?limit=10000`
- `GET /api/admin/alerts` (HTTP 500)
- `GET /api/admin/activity?limit=10000`
- `GET /api/admin/popular-events`
- `GET /api/admin/drip-stats`
- `GET /api/admin/price-history?limit=100000`
- Deployed HTML spot-checks for `/`, `/dashboard`, `/compare`, `/watchlist`, and `/world-cup-2026`
