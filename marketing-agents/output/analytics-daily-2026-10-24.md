## TicketScan Daily Dashboard — 2026-10-24

**Run window:** 2026-10-23 06:00 UTC–2026-10-24 06:00 UTC. **Collected:** 2026-10-24. Live admin API totals were available; visitor, page-view, comparison, and attribution metrics are not exposed by the current admin API.

### Key Metrics (24h)

| Metric | Today | Yesterday | 7-Day Avg | Trend |
|---|---:|---:|---:|:---:|
| Unique Visitors | N/A | N/A | N/A | — |
| New Signups | 0 | 0 | 0.14/day | → |
| Watchlist Items Added | 0 | 0 | 0/day | → |
| Price Comparisons Run | N/A | N/A | N/A | — |
| Newsletter Subscribers | 0 | 0 | 0/day | → |
| Price Alerts Triggered | 0* | N/A | N/A | — |
| Drip Emails Sent | 0** | N/A | N/A | — |

\* `/api/admin/stats` reports zero triggered alerts, but `/api/admin/alerts` returned an error, so alert reporting is provisional.

\*\* `/api/admin/drip-stats` returned no sent rows; this is a delivery/reporting gap, not evidence that scheduled emails were delivered.

### Totals

- Total registered users: **267**
- Total active watchlist items: **256**
- Total newsletter subscribers (active): **7**
- Total price history records: **202**

Price history is stale: the latest record is **2026-07-24 20:01:07 UTC**. This dashboard does not use the stale records for any public pricing claim.

### Traffic Sources (24h)

| Source | Visitors | Signups | Conversion |
|---|---:|---:|---:|
| Organic Search | N/A | N/A | N/A |
| Direct | N/A | N/A | N/A |
| Social | N/A | N/A | N/A |
| Paid | N/A | N/A | N/A |
| Email | N/A | N/A | N/A |
| Referral | N/A | N/A | N/A |

GA4/GTM reporting and UTM fields are not available through the current admin endpoints.

### Top Pages (24h)

Unavailable: no page-view, visitor, or bounce-rate report is exposed by the current admin API.

### Popular Events Being Tracked

The popular-events endpoint returned ties at two watches. The first five records returned were:

1. Harry Styles: Together, Together — Madison Square Garden, New York — **2 watches**
2. Harry Styles: Together, Together — Madison Square Garden, New York — **2 watches**
3. Ariana Grande - The Eternal Sunshine Tour — Barclays Center, Brooklyn — **2 watches**
4. NBA Finals: TBD at New York Knicks RD4 HM GM3 — Madison Square Garden, New York — **2 watches**
5. Harry Styles: Together, Together — Madison Square Garden, New York — **2 watches**

These are watchlist saves, not live price tracking.

### Competitor Quick Check

- **SeatGeek:** Recent product activity is significant: SeatGeek announced conversational “Ask SeatGeek” search on August 26 and TourIQ predictive pricing intelligence on October 2. Its newsroom also lists a Manchester City partnership announced September 17. [SeatGeek newsroom](https://seatgeek.com/enterprise/newsroom) · [TourIQ announcement](https://seatgeek.com/press/SeatGeek%20Launches%20TourIQ)
- **StubHub:** Its newsroom is active around fall sports and promotions, including a Paze partnership/offer, Formula DRIFT fan experiences, and World Series buying guidance published October 19–22. [StubHub newsroom](https://newsroom.stubhub.com/)
- **Vivid Seats:** No comparable October product launch was found in its official investor/press pages; the latest official material remains its August 4 Q2 results and World Cup-driven outlook. [Vivid Seats investor page](https://investors.vividseats.com/) · [Q2 results](https://investors.vividseats.com/news-releases/news-release-details/vivid-seats-reports-second-quarter-2026-results)

### 🚨 Anomalies & Alerts

- **CRITICAL — Price data stale:** 202 records exist, but the latest is July 24. Price tracking remains down and must not appear in public claims.
- **CRITICAL — Alerts endpoint broken:** `/api/admin/alerts` returned `{"success":false,"error":"Failed to get alerts"}`. The stats count of zero is provisional.
- **HIGH — Drip delivery gap:** zero sent rows and 20 pending users are reported; several users are beyond their scheduled email windows. Investigate scheduler and SMTP logs.
- **HIGH — Funnel instrumentation gap:** unique visitors, page views, bounce rate, comparison runs, traffic sources, conversions, and UTM capture are unavailable. GTM is installed, but client-side conversion events were not found in the source.
- **HIGH — Public-copy risk:** repository search still finds legacy price-tracking, price-alert, and price-comparison claims in content/source files. These conflict with `marketing-agents/PRODUCT-STATUS.md` and need a content cleanup pass.
- **LOW — Watchlist activation:** no watchlist adds were recorded in the run window or the preceding seven-day period, despite 256 total saved items.

### Feed to Other Agents

- Content: use the tied popular-event list and venue/onsale content only; avoid price tracking, alerts, price history, and buy/wait recommendations.
- SEO: organic landing-page performance is unavailable; do not infer it from registrations.
- Social/Paid/Email: channel attribution and conversion data are unavailable.
- CRO/Growth: prioritize event instrumentation, the broken alerts query, drip delivery, and watchlist activation.
