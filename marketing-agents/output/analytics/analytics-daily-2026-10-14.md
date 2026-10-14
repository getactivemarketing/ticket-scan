## TicketScan Daily Dashboard — 2026-10-14

Run time: 2026-10-14; reporting windows use UTC calendar dates to match the 06:00 UTC scheduled job. Product-status constraints are applied: price tracking and alerts are not treated as live features.

### Key Metrics (24h)

| Metric | Today | Yesterday | 7-Day Avg | Trend |
|---|---:|---:|---:|:---:|
| Unique Visitors | N/A | N/A | N/A | — |
| New Signups | 0 | 1 | 0.29 | — |
| Watchlist Items Added | 0 | 0 | 0.00 | → |
| Price Comparisons Run | N/A | N/A | N/A | — |
| Newsletter Subscribers | 0 | 0 | 0.14 | — |
| Price Alerts Triggered | N/A | N/A | N/A | — |
| Drip Emails Sent | 0 recorded | 0 recorded | N/A | — |

Notes: visitor, pageview, bounce, UTM, and price-comparison events are not available from the admin API. The alerts endpoint returned HTTP 500. Drip stats returned no sent rows; that is recorded as zero, not proof that every mail transport attempt was observed.

### Totals

- Total registered users: 266
- Total active watchlist items: 256
- Total newsletter subscribers (active): 7
- Total price history records returned: 202 (latest record: 2026-07-24 20:01 UTC; stale and not usable for current price claims)

### Traffic Sources (24h)

| Source | Visitors | Signups | Conversion |
|---|---:|---:|---:|
| Organic Search | N/A | N/A | N/A |
| Direct | N/A | N/A | N/A |
| Social | N/A | N/A | N/A |
| Paid | N/A | N/A | N/A |
| Email | N/A | N/A | N/A |
| Referral | N/A | N/A | N/A |

GTM is present in the deployed HTML, but no accessible report or event stream exposes source attribution.

### Top Pages (24h)

Unavailable: no pageview or bounce-rate dataset is exposed by the current analytics/admin surfaces.

### Popular Events Being Tracked

The admin endpoint returns grouped watchlist rows; ties are preserved rather than invented into a single ranking:

1. Harry Styles: Together, Together — Madison Square Garden, New York — 2 watchlist rows
2. Harry Styles: Together, Together — Madison Square Garden, New York — 2 watchlist rows (separate event ID)
3. Ariana Grande - The Eternal Sunshine Tour — Barclays Center, Brooklyn — 2 watchlist rows
4. NBA Finals: TBD at New York Knicks RD4 HM GM3 — Madison Square Garden, New York — 2 watchlist rows
5. Harry Styles: Together, Together — Madison Square Garden, New York — 2 watchlist rows (separate event ID)

### Competitor Activity

- SeatGeek's official press page lists TourIQ, a predictive-pricing-intelligence launch dated October 2, and a Nashville SC ticketing partnership dated October 7. This is notable category pressure, but TicketScan must not echo price-prediction claims while its own price data is stale.
- StubHub published an official explainer on fees and pricing on September 30; no newer major feature or promotion was confirmed in this check.
- Vivid Seats' October blog archive is active, but no material product launch or platform-wide promotion was confirmed.

### 🚨 Anomalies & Alerts

- **Critical:** `/api/admin/alerts` returned HTTP 500 (`Failed to get alerts`). Alert volume cannot be validated.
- **Critical:** price history is stale; all 202 returned records predate the July 24 outage. Do not use it for current price, trend, or recommendation claims.
- **Tracking gap:** GTM container `GTM-T476F9S4` is present on `/`, `/dashboard`, `/compare`, `/watchlist`, and `/world-cup-2026`; no matching signup, watchlist-add, comparison, or newsletter event instrumentation was found in the frontend source or exposed admin data.
- **Measurement gap:** unique visitors, top pages, bounce rate, traffic source, UTM capture, and comparison-run counts are unavailable, so >20% anomaly checks for those metrics cannot be performed.
- **Drip gap:** `/api/admin/drip-stats` returned an empty sent-stat array. Treat campaign delivery as unverified until mail-provider logs are checked.

### Data Sources Checked

- `GET /api/admin/stats`
- `GET /api/admin/users?limit=10000`
- `GET /api/admin/watchlist?limit=10000`
- `GET /api/admin/newsletter?limit=10000`
- `GET /api/admin/alerts` (HTTP 500)
- `GET /api/admin/activity`
- `GET /api/admin/popular-events`
- `GET /api/admin/drip-stats`
- `GET /api/admin/price-history?limit=100000`
- Deployed HTML spot-checks for `/`, `/dashboard`, `/compare`, `/watchlist`, and `/world-cup-2026`
