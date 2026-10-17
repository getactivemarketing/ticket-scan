## TicketScan Daily Dashboard — 2026-10-17

Reporting window: 2026-10-16 00:00 UTC through 2026-10-17 00:00 UTC. The admin activity feed has no records in this window; its newest record is 2026-10-13.

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

The 7-day average uses the seven completed UTC days from October 9 through October 15. The API does not expose visitor, pageview, or comparison-event data, so those values are not treated as zero.

### Totals

- Total registered users: **266**
- Total active watchlist items: **256** (these are saved items, not active price tracking)
- Total newsletter subscribers (active): **7**
- Total price history records: **50**, newest record **2026-07-24 20:01 UTC**

### Traffic Sources (24h)

Not available from the admin API. No source-level visitor, signup, or UTM report was returned.

### Top Pages (24h)

Not available. No pageview or bounce-rate data is exposed through the current admin endpoints.

### Popular Events Being Tracked

The popular-events endpoint returns all-time watch counts, not a 24-hour window. The top five returned records are tied at two saved items each:

1. Harry Styles: Together, Together — Madison Square Garden, New York — 2
2. Harry Styles: Together, Together — Madison Square Garden, New York — 2
3. Ariana Grande - The Eternal Sunshine Tour — Barclays Center, Brooklyn — 2
4. NBA Finals: TBD at New York Knicks RD4 HM GM3 — Madison Square Garden, New York — 2
5. Harry Styles: Together, Together — Madison Square Garden, New York — 2

### 🚨 Anomalies & Alerts

- **Data gap:** no activity has been recorded since October 13, and there are no October 16–17 conversion records. This may be real inactivity, delayed logging, or a broken activity pipeline.
- **Tracking validation issue:** GTM loads on the checked live routes, but the frontend source contains no explicit `dataLayer.push`, `gtag`, conversion-event, or UTM-capture instrumentation. Signup, watchlist-add, comparison, and newsletter events therefore cannot be confirmed as firing.
- **Price data outage remains active:** the price-history endpoint has no records after July 24; the alerts endpoint currently returns `Failed to get alerts`. Do not use price, alert, trend, or buy/wait metrics in public reporting.
- **Drip campaign:** the drip-stats endpoint returned an empty sent-statistics array; 20+ eligible/pending users still show `last_email_sent: 0`. Verify the scheduler and delivery logs before assuming the campaign is sending.

### Competitor Quick Check

- SeatGeek’s notable recent product move is **Ask SeatGeek**, a conversational AI search experience announced August 26, 2026: [official announcement](https://seatgeek.com/press/seatgeek-launches-ask-seatgeek-bringing-conversational-ai-search-to-its-marketplace).
- StubHub’s newsroom shows recent partnership and product-content activity, including a Formula DRIFT partnership on October 14 and seat-view technology coverage on September 29: [StubHub newsroom](https://newsroom.stubhub.com/).
- No significant, verified new Vivid Seats product launch or platform-wide promotion was identified in this quick check.

### Source Notes

- Live admin endpoints: `https://tickethawk-api-production.up.railway.app/api/admin/{stats,users,watchlist,newsletter,alerts,activity,popular-events,drip-stats,price-history}`
- Live GTM spot-check: `https://www.ticketscan.io/`, `/dashboard`, `/compare`, `/watchlist`, `/faq`
