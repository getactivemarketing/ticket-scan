## TicketScan Daily Dashboard — 2026-10-22

Reporting window: **2026-10-21 10:00 UTC–2026-10-22 10:00 UTC**. Yesterday is the preceding 24-hour window. Seven-day averages use seven complete 24-hour windows ending at the cutoff. Visitor, attribution, pageview, bounce-rate, and comparison-event metrics are not exposed by the available admin API and are marked `N/A`.

### Headline

**A quiet measurable day, with the same operational caveats.** No signup, watchlist addition, or newsletter subscription landed in the current window. The price-history feed remains frozen, the alerts endpoint is failing, and the drip campaign reports 20 pending users with no sent records.

### Key Metrics (24h)

| Metric | Today | Yesterday | 7-Day Avg | Trend |
|---|---:|---:|---:|:---:|
| Unique Visitors | N/A | N/A | N/A | — |
| New Signups | 0 | 0 | 0.14 | → |
| Watchlist Items Added | 0 | 0 | 0.00 | → |
| Price Comparisons Run | N/A | N/A | N/A | — |
| Newsletter Subscribers | 0 | 0 | 0.00 | → |
| Price Alerts Triggered | Unverified | Unverified | Unverified | — |
| Drip Emails Sent | 0 reported | 0 reported | 0.00 reported | → |

### Totals

- Total registered users: **267**
- Total active watchlist items: **256** (saved items, not active price tracking)
- Total newsletter subscribers (active): **7**
- Total price-history records: **202**; latest record **2026-07-24 20:01 UTC**
- Watchlist items with a target price: **0**

### Traffic Sources (24h)

| Source | Visitors | Signups | Conversion |
|---|---:|---:|---:|
| Organic Search | N/A | N/A | N/A |
| Direct | N/A | N/A | N/A |
| Social | N/A | N/A | N/A |
| Paid | N/A | N/A | N/A |
| Email | N/A | N/A | N/A |
| Referral | N/A | N/A | N/A |

The admin API exposes no GA/GTM event query, source breakdown, or persisted UTM report.

### Top Pages (24h)

1. N/A — pageviews and bounce rate unavailable
2. N/A — pageviews and bounce rate unavailable
3. N/A — pageviews and bounce rate unavailable
4. N/A — pageviews and bounce rate unavailable
5. N/A — pageviews and bounce rate unavailable

### Popular Events Being Tracked

The `/api/admin/popular-events` response returned these top five rows. These are saved watchlist entries; they do not represent live price tracking.

1. Harry Styles: Together, Together — Madison Square Garden, New York — 2026-09-04 — 2 saves
2. Harry Styles: Together, Together — Madison Square Garden, New York — 2026-08-28 — 2 saves
3. Ariana Grande - The Eternal Sunshine Tour — Barclays Center, Brooklyn — 2026-07-13 — 2 saves
4. NBA Finals: TBD at New York Knicks RD4 HM GM3 — Madison Square Garden, New York — 2026-06-16 — 2 saves
5. Harry Styles: Together, Together — Madison Square Garden, New York — 2026-08-29 — 2 saves

### Competitor Quick Check

- **StubHub:** Expanded its Capital Showcase partnership on October 21, becoming the Official Open Distribution Partner and Official Secondary Ticket Marketplace for the November 8 Virginia–Arkansas game at Capital One Arena. It also continues to promote the October 19 Paze offer: spend $150+ and receive $20 off through November 15, subject to terms. [Partnership announcement](https://newsroom.stubhub.com/2026/10/21/following-record-setting-inaugural-event-stubhub-expands-partnership-with-capital-showcase/) · [Paze promotion](https://newsroom.stubhub.com/2026/10/19/paze-x-stubhub-falls-busiest-season-just-got-a-lot-more-rewarding/)
- **SeatGeek:** Its latest notable product activity remains TourIQ, announced October 2, plus the October 7 Nashville SC ticketing partnership. [SeatGeek press page](https://seatgeek.com/press) · [TourIQ announcement](https://seatgeek.com/press/SeatGeek%20Launches%20TourIQ)
- **Vivid Seats:** No new October product launch or promotion was visible in its current official press listing. [Vivid Seats press](https://corporate.vividseats.com/press/)

### 🚨 Anomalies & Alerts

- **Price data outage remains active:** all 202 price-history records predate July 24, 2026. Do not use them for current price, trend, alert, or buy/wait reporting.
- **Alerts endpoint failure:** `/api/admin/alerts` returned HTTP 500 (`Failed to get alerts`). The zero in `/stats` is not independently validated.
- **Low activation:** no watchlist additions have been recorded since October 4 in the available activity feed; zero of 256 saved items has a target price.
- **Drip gap:** `/api/admin/drip-stats` returned no sent records and 20 pending users, including users 32–46 days after signup.
- **Tracking gap:** GTM loaded on five sampled deployed pages, but conversion events and UTM capture are not verifiable from the current app source or available admin API.

### Feed Notes

Visitor, attribution, page-performance, bounce, and comparison-conversion metrics remain unavailable until event-level analytics are queryable. Public copy must continue to omit price tracking, price history, alerts, and buy/wait recommendations.

### Data Sources

Queried at the reporting cutoff: `/api/admin/stats`, `/users?limit=1000`, `/watchlist?limit=1000`, `/newsletter`, `/alerts`, `/activity?limit=1000`, `/popular-events`, `/drip-stats`, and `/price-history?limit=100000`.
