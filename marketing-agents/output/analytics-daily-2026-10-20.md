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

All five returned rows have two watchlist entries:

1. **Harry Styles: Together, Together** — Madison Square Garden, New York — 2 watches
2. **Harry Styles: Together, Together** — Madison Square Garden, New York — 2 watches
3. **Ariana Grande — The Eternal Sunshine Tour** — Barclays Center, Brooklyn — 2 watches
4. **NBA Finals: TBD at New York Knicks RD4 HM GM3** — Madison Square Garden, New York — 2 watches
5. **Harry Styles: Together, Together** — Madison Square Garden, New York — 2 watches

The endpoint ranks separate event IDs, so repeated titles are separate dates/listings rather than a deduplicated demand total.

### Competitor Quick Check

- **SeatGeek:** Official newsroom updates show the launch of conversational **Ask SeatGeek** in August and **TourIQ**, a predictive pricing-intelligence product, in October. This is the clearest current competitive move: discovery plus pricing intelligence in the marketplace itself. [SeatGeek newsroom](https://seatgeek.com/enterprise/newsroom)
- **StubHub:** Its newsroom is emphasizing partnerships and buyer education, including Formula DRIFT fan experiences, L.A. Comic Con distribution, seat-view technology, and fee/pricing explainers. [StubHub newsroom](https://newsroom.stubhub.com/)
- **Vivid Seats:** No verified first-party October 2026 product launch or promotion surfaced in this quick check.

### 🚨 Anomalies & Alerts

- **Price tracking outage/staleness:** 202 records exist, but the newest is **2026-07-24 20:01 UTC**; all 202 are from Ticketmaster. This is incompatible with the documented four-hour cadence.
- **Alerts endpoint failure:** `/api/admin/alerts` returned HTTP 500 (`Failed to get alerts`). The stats endpoint reports zero triggered alerts, but that cannot be independently validated from the detail endpoint.
- **Activation gap:** One signup occurred today, but there were zero watchlist adds in the last seven days and zero watchlist items have a target price.
- **Drip delivery gap:** `/api/admin/drip-stats` reports no sent statistics and 19 of its 20 pending users are at least three days old, including users past the Day 3 and Day 7 windows.
- **Instrumentation blind spot:** GTM container `GTM-T476F9S4` is present on the homepage, dashboard, compare, watchlist, and World Cup pages. HTML presence does not prove that signup, watchlist-add, comparison, newsletter, or UTM events fire; those remain unverified.

### Feed Notes for Other Agents

- Content/Social: use Harry Styles, Ariana Grande, NBA Finals, and World Cup listings as the current admin-side watchlist signals; avoid describing them as price trends.
- SEO/Paid/CRO: visitor, source, page-performance, bounce, and comparison-conversion metrics are unavailable until event-level analytics are queryable.
- Email: active subscriber base is **7**; no new subscriptions were recorded in seven days. Investigate the drip worker before promoting email automation.
- Growth: the latest signup has not yet produced a measurable watchlist action; treat activation as unconfirmed.
