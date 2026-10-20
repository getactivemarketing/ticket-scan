## TicketScan Daily Dashboard — 2026-10-20

Reporting window: **2026-10-19 10:00 UTC–2026-10-20 10:00 UTC**. Yesterday is the preceding 24-hour window. Seven-day averages are seven complete 24-hour windows ending at the cutoff. Visitor, attribution, pageview, bounce-rate, and comparison-event metrics are not exposed by the available admin API and are marked `N/A`.

### Headline

**One new account, but no measurable activation.** The API recorded one signup in the last 24 hours and no watchlist additions or newsletter subscriptions in the last seven days. The most urgent operational signals are the stale price-history feed, a broken alerts endpoint, and 19 overdue drip candidates.

### Key Metrics (24h)

| Metric | Today | Yesterday | 7-Day Avg | Trend |
|---|---:|---:|---:|:---:|
| Unique Visitors | N/A | N/A | N/A | — |
| New Signups | 1 | 0 | 0.14 | ↑ |
| Watchlist Items Added | 0 | 0 | 0.00 | → |
| Price Comparisons Run | N/A | N/A | N/A | — |
| Newsletter Subscribers | 0 | 0 | 0.00 | → |
| Price Alerts Triggered | Unverified | Unverified | Unverified | — |
| Drip Emails Sent | 0 reported | 0 reported | 0.00 reported | → |

### Totals

- Total registered users: **267**
- Total active watchlist items: **256**
- Total newsletter subscribers (active): **7**
- Total price history records: **202**
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

All five returned rows have two watchlist entries: Harry Styles at Madison Square Garden (three separate event IDs), Ariana Grande at Barclays Center, and the NBA Finals TBD at Madison Square Garden.

### Competitor Quick Check

- **SeatGeek:** Official newsroom updates show the launch of conversational **Ask SeatGeek** in August and **TourIQ**, a predictive pricing-intelligence product, in October. [SeatGeek newsroom](https://seatgeek.com/enterprise/newsroom)
- **StubHub:** Its newsroom is emphasizing partnerships and buyer education, including Formula DRIFT fan experiences, L.A. Comic Con distribution, seat-view technology, and fee/pricing explainers. [StubHub newsroom](https://newsroom.stubhub.com/)
- **Vivid Seats:** No verified first-party October 2026 product launch or promotion surfaced in this quick check.

### 🚨 Anomalies & Alerts

- 202 price-history records remain frozen at **2026-07-24 20:01 UTC**, all from Ticketmaster.
- `/api/admin/alerts` returned HTTP 500; zero triggered alerts is not independently validated.
- Zero watchlist adds occurred in seven days, and zero of 256 watchlist items has a target price.
- Drip stats show no sent records and 19 overdue pending users.
- GTM is present on five sampled deployed pages, but conversion and UTM events remain unverified.

### Feed Notes

Visitor, attribution, page-performance, bounce, and comparison-conversion metrics remain unavailable until event-level analytics are queryable. Public copy must continue to omit price tracking, price history, alerts, and buy/wait recommendations.
