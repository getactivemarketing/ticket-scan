## TicketScan Daily Dashboard — 2026-10-21

Reporting window: **2026-10-20 10:00 UTC–2026-10-21 10:00 UTC**. Yesterday is the preceding 24-hour window. Seven-day averages use seven complete 24-hour windows ending at the cutoff. Visitor, attribution, pageview, bounce-rate, and comparison-event metrics are not exposed by the available admin API and are marked `N/A`.

### Headline

**A quiet day in the measurable funnel.** No new signup, watchlist addition, or newsletter subscription was recorded in the current window. The main operational alerts remain unchanged: price history is stale, the alerts endpoint returns HTTP 500, and drip stats report 20 pending users with no sent records.

### Key Metrics (24h)

| Metric | Today | Yesterday | 7-Day Avg | Trend |
|---|---:|---:|---:|:---:|
| Unique Visitors | N/A | N/A | N/A | — |
| New Signups | 0 | 1 | 0.14 | ↓ |
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

The `/api/admin/popular-events` response returned these top five rows, each with two watchlist entries:

1. Harry Styles: Together, Together — Madison Square Garden, New York — 2026-09-04
2. Harry Styles: Together, Together — Madison Square Garden, New York — 2026-08-28
3. Ariana Grande - The Eternal Sunshine Tour — Barclays Center, Brooklyn — 2026-07-13
4. NBA Finals: TBD at New York Knicks RD4 HM GM3 — Madison Square Garden, New York — 2026-06-16
5. Harry Styles: Together, Together — Madison Square Garden, New York — 2026-08-29

### Competitor Quick Check

- **StubHub:** Announced a Paze promotion on October 19: spend $150 or more and receive $20 off through November 15, 2026, or while supplies last. [StubHub announcement](https://newsroom.stubhub.com/2026/10/19/stubhub-paze-promotion-20-off/)
- **SeatGeek:** Its current press page highlights the October 2 TourIQ predictive-pricing product and August 26 Ask SeatGeek conversational search launch. [SeatGeek press page](https://seatgeek.com/press)
- **Vivid Seats:** No comparable October product launch or promotion surfaced in this quick scan of its official press page. [Vivid Seats press](https://corporate.vividseats.com/press/)

### 🚨 Anomalies & Alerts

- **Price data outage remains active:** all 202 price-history records predate July 24, 2026; do not use them for current price, trend, alert, or buy/wait reporting.
- **Alerts endpoint failure:** `/api/admin/alerts` returned HTTP 500 (`Failed to get alerts`). The zero in `/stats` is not independently validated.
- **Low activation:** zero watchlist additions have been recorded since October 4 in the available activity feed; zero of 256 saved items has a target price.
- **Drip gap:** `/api/admin/drip-stats` returned no sent records and 20 pending users, including users 31–45 days after signup.
- **Tracking gap:** GTM loaded on five sampled deployed pages, but conversion events and UTM capture are not verifiable from the current app source or available admin API.

### Feed Notes

Visitor, attribution, page-performance, bounce, and comparison-conversion metrics remain unavailable until event-level analytics are queryable. Public copy must continue to omit price tracking, price history, alerts, and buy/wait recommendations.

### Data Sources

Queried at the reporting cutoff: `/api/admin/stats`, `/users?limit=1000`, `/watchlist?limit=1000`, `/newsletter`, `/alerts`, `/activity?limit=1000`, `/popular-events`, `/drip-stats`, and `/price-history?limit=100000`.
