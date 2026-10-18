## TicketScan Daily Dashboard — 2026-10-18

Reporting window: 2026-10-17 00:00 UTC through 2026-10-18 00:00 UTC. The API's activity feed has no records in this window; its newest record is 2026-10-13.

### Key Metrics (24h)

| Metric | Today | Yesterday | 7-Day Avg | Trend |
|---|---:|---:|---:|:---:|
| Unique Visitors | Unavailable | Unavailable | Unavailable | — |
| New Signups | 0 | 0 | 0.29/day | → |
| Watchlist Items Added | 0 | 0 | 0/day | → |
| Price Comparisons Run | Unavailable | Unavailable | Unavailable | — |
| Newsletter Subscribers | 0 | 0 | 0.14/day | → |
| Price Alerts Triggered | Unavailable | Unavailable | Unavailable | — |
| Drip Emails Sent | 0 reported | 0 reported | 0 reported | → |

The 7-day average uses the seven completed UTC days from October 9 through October 15. Visitor, pageview, comparison, and source-level telemetry is not exposed by the current admin API, so unavailable values are not treated as zero. The alerts endpoint returned HTTP 500, and price tracking is known to be stale.

### Totals

- Total registered users: **266**
- Total active watchlist items: **256** (saved items, not active price tracking)
- Total newsletter subscribers (active): **7**
- Total price history records: **50**, newest record **2026-07-24 20:01 UTC**

### Traffic Sources (24h)

Not available from the admin API. No source-level visitor, signup, or UTM report was returned.

### Top Pages (24h)

Not available. No pageview or bounce-rate data is exposed through the current admin endpoints.

### Popular Saved Events

The popular-events endpoint returns all-time saved-event counts, not a 24-hour window. The top five returned records are tied at two saves each:

1. Harry Styles: Together, Together — Madison Square Garden, New York — 2
2. Harry Styles: Together, Together — Madison Square Garden, New York — 2
3. Ariana Grande - The Eternal Sunshine Tour — Barclays Center, Brooklyn — 2
4. NBA Finals: TBD at New York Knicks RD4 HM GM3 — Madison Square Garden, New York — 2
5. Harry Styles: Together, Together — Madison Square Garden, New York — 2

### 🚨 Anomalies & Alerts

- **P1 — Activity data gap:** no activity has been recorded since October 13, including no October 17 conversion records. This may be real inactivity, delayed logging, or a broken activity pipeline.
- **P1 — Conversion tracking unverified:** GTM loads on all five checked live routes, but no explicit `dataLayer.push`, `gtag`, conversion-event, or UTM-capture instrumentation was found in `web/src`.
- **P1 — Price data outage remains active:** price history has no records after July 24; `/api/admin/alerts` returns HTTP 500. Do not use price, alert, trend, or buy/wait metrics in public reporting.
- **P2 — Drip delivery unverified:** drip stats contain no sent rows and 20 users are pending, including users beyond the campaign thresholds. Check the scheduler and SMTP delivery logs.

### Competitor Quick Check

- **SeatGeek:** launched TourIQ on October 2, a predictive pricing/intelligence product for promoters and venues. This is a notable B2B move toward data-led pricing and is strategically relevant to TicketScan's positioning. [Official announcement](https://seatgeek.com/press/SeatGeek%20Launches%20TourIQ)
- **StubHub:** its newsroom lists a Formula DRIFT partnership on October 14, an L.A. Comic Con distribution partnership on October 9, and seat-view technology coverage on September 29. [StubHub newsroom](https://newsroom.stubhub.com/)
- **Vivid Seats:** no comparable new official product launch or platform-wide promotion was identified in this quick check. Its official press page's newest listed release remains August 25, 2025. [Official press page](https://www.vividseats.com/press)

### Source Notes

- Live admin endpoints: `https://tickethawk-api-production.up.railway.app/api/admin/{stats,users,watchlist,newsletter,alerts,activity,popular-events,drip-stats,price-history}`
- Live GTM spot-check: `https://www.ticketscan.io/`, `/dashboard`, `/compare`, `/watchlist`, `/faq`
- 7-day averages are calculated from UTC-dated records returned by the users, watchlist, and newsletter endpoints.
