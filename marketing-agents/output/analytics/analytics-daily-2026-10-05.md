## TicketScan Daily Dashboard — 2026-10-05

Reporting window: **2026-10-04 06:00 UTC–2026-10-05 06:00 UTC**. Yesterday is the preceding 24-hour UTC window. Seven-day averages use the seven complete windows ending at the reporting cutoff. Visitor, attribution, pageview, bounce-rate, and comparison-event metrics are not exposed by the admin API and are marked `N/A`.

### Key Metrics (24h)

| Metric | Today | Yesterday | 7-Day Avg | Trend |
|---|---:|---:|---:|:---:|
| Unique Visitors | N/A | N/A | N/A | — |
| New Signups | 0 | 0 | 1.00 | ↓ (-100%) |
| Watchlist Items Added | 1 | 0 | 0.29 | ↑ (+250%, low base) |
| Price Comparisons Run | N/A | N/A | N/A | — |
| Newsletter Subscribers | 0 | 0 | 0.00 | → |
| Price Alerts Triggered | 0 reported | N/A | N/A | — |
| Drip Emails Sent | 0 reported | N/A | N/A | — |

The watchlist and signup counts are calculated from the full admin users/watchlist exports. Alert and drip figures are endpoint-reported values; they are not independent delivery or event telemetry.

### Totals

- Total registered users: **264**
- Total active watchlist items: **256**
- Total newsletter subscribers (active): **6**
- Total price history records: **50**
- Total favorites: **1**

Price history is stale: the newest record is **2026-07-24 20:01 UTC**.

### Traffic Sources (24h)

| Source | Visitors | Signups | Conversion |
|---|---:|---:|---:|
| Organic Search | N/A | N/A | N/A |
| Direct | N/A | N/A | N/A |
| Social | N/A | N/A | N/A |
| Paid | N/A | N/A | N/A |
| Email | N/A | N/A | N/A |
| Referral | N/A | N/A | N/A |

The admin API has no GA/GTM event query, source breakdown, or UTM report.

### Top Pages (24h)

1. N/A — pageviews and bounce rate unavailable
2. N/A — pageviews and bounce rate unavailable
3. N/A — pageviews and bounce rate unavailable
4. N/A — pageviews and bounce rate unavailable
5. N/A — pageviews and bounce rate unavailable

### Popular Events Being Tracked

The endpoint returned eight events tied at 2 watches. The first five rows returned were:

1. **Harry Styles: Together, Together** — Madison Square Garden, New York — 2 watches
2. **Harry Styles: Together, Together** — Madison Square Garden, New York — 2 watches
3. **Ariana Grande — The Eternal Sunshine Tour** — Barclays Center, Brooklyn — 2 watches
4. **NBA Finals: TBD at New York Knicks RD4 HM GM3** — Madison Square Garden, New York — 2 watches
5. **Harry Styles: Together, Together** — Madison Square Garden, New York — 2 watches

The endpoint ranks separate event IDs separately, so repeated event names represent separate listings/dates.

### Competitor Quick Check

- **SeatGeek:** The official newsroom lists **TourIQ**, a predictive pricing-intelligence product, on October 2, and **Ask SeatGeek**, a conversational AI search experience, on August 26. Its blog is also publishing fresh presale, onsale, and event-guide content.
- **StubHub:** The newsroom is actively publishing consumer education on all-in pricing, seat-view technology, ticket-price psychology, and fraud red flags. It also announced an official distribution partnership with ComplexCon in September.
- **Vivid Seats:** No new October product launch or promotion was verified in the official press results. Its current official consumer differentiators remain Seat Saver and the Rewards program.

### 🚨 Anomalies & Alerts

- **P0 tracking gap:** GTM loads on sampled live routes, but no verified `dataLayer.push` events exist for signup completion, watchlist add, comparison, newsletter subscription, UTM capture, or outbound ticket clicks.
- **P0 data outage:** Price history has not advanced since July 24. Do not interpret the 50 historical rows as current pricing coverage.
- **P0 API failure:** `/api/admin/alerts` returned HTTP 500 with `Failed to get alerts`; the stats endpoint reports zero triggered alerts, but alert detail cannot be validated.
- **P1 reporting blind spot:** Unique visitors, traffic sources, top pages, bounce rate, and price-comparison volume are unavailable. No conversion rate can be calculated.
- **P1 email observability:** `/api/admin/drip-stats` returned an empty sent-statistics array and 20 pending users; sends, delivery, opens, clicks, and bounces are not independently observable.
- **Watchlist spike:** 1 add today versus a 0.29/day seven-day average. This is a small-base signal and not enough to call a trend.

### Feed Notes for Other Agents

- Content/Social: use the current popular-event names only as interest signals; do not convert watch counts into audience or price claims.
- SEO/Paid/CRO: traffic, attribution, page performance, and compare conversion are not measurable from the current stack.
- Email: active subscriber base is 6; no subscriber was added in the reporting window; drip sending remains unverified.
- Growth: 264 registered users and 256 watchlist items are verified totals. Treat today’s one watchlist add as low-volume until broader activity is observable.

### Source Checks

- Admin API queried at 2026-10-05: `/stats`, `/users`, `/watchlist`, `/newsletter`, `/alerts`, `/activity`, `/popular-events`, `/drip-stats`, `/price-history`.
- Live route spot-checks: `/`, `/dashboard`, `/compare`, `/world-cup-2026`.
- Competitor sources: [SeatGeek newsroom](https://seatgeek.com/enterprise/newsroom), [StubHub newsroom](https://newsroom.stubhub.com/), [Vivid Seats press](https://corporate.vividseats.com/press/).
