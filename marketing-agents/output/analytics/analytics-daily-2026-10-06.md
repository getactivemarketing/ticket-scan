## TicketScan Daily Dashboard — 2026-10-06

Reporting window: **2026-10-05 06:00 UTC–2026-10-06 06:00 UTC**. Yesterday is the preceding 24-hour UTC window. Seven-day averages use the seven complete windows ending at the reporting cutoff. Visitor, attribution, pageview, bounce-rate, and comparison-event metrics are not exposed by the admin API and are marked `N/A`.

### Key Metrics (24h)

| Metric | Today | Yesterday | 7-Day Avg | Trend |
|---|---:|---:|---:|:---:|
| Unique Visitors | N/A | N/A | N/A | — |
| New Signups | 0 | 0 | 1.00 | ↓ (-100%) |
| Watchlist Items Added | 0 | 1 | 0.43 | ↓ (-100%, low base) |
| Price Comparisons Run | N/A | N/A | N/A | — |
| Newsletter Subscribers | 0 | 0 | 0.00 | → |
| Price Alerts Triggered | N/A — endpoint failed | N/A | N/A | — |
| Drip Emails Sent | N/A — no sent-stat rows | N/A | N/A | — |

The signup, watchlist, and newsletter counts are calculated from the admin exports using the UTC windows above. Alert and drip figures cannot be independently validated from the current endpoints.

### Totals

- Total registered users: **264**
- Total active watchlist items: **256**
- Total newsletter subscribers (active): **6**
- Total price-history records returned: **50**
- Total favorites: **1**

Price history is stale: the newest returned record is **2026-07-24 20:01 UTC**. Price tracking remains down; these records must not be treated as current pricing coverage.

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

The endpoint returned eight events tied at two watches. The first five rows returned were:

1. **Harry Styles: Together, Together** — Madison Square Garden, New York — 2 watches
2. **Harry Styles: Together, Together** — Madison Square Garden, New York — 2 watches
3. **Ariana Grande — The Eternal Sunshine Tour** — Barclays Center, Brooklyn — 2 watches
4. **NBA Finals: TBD at New York Knicks RD4 HM GM3** — Madison Square Garden, New York — 2 watches
5. **Harry Styles: Together, Together** — Madison Square Garden, New York — 2 watches

The endpoint ranks separate event IDs separately, so repeated event names represent separate event dates/listings.

### Competitor Quick Check

- **SeatGeek:** Launched [TourIQ](https://seatgeek.com/press/SeatGeek%20Launches%20TourIQ) on October 2, a predictive pricing product for promoters and venues. Its newsroom also lists [Ask SeatGeek](https://seatgeek.com/press/seatgeek-launches-ask-seatgeek-bringing-conversational-ai-search-to-its-marketplace), a conversational search experience launched in August.
- **StubHub:** Its newsroom is currently emphasizing [all-in pricing and fee transparency](https://newsroom.stubhub.com/2026/09/30/how-stubhub-pricing-works/) plus fall concert planning and buyer education. No new October consumer product launch or broad promotion was verified.
- **Vivid Seats:** No new October product launch or promotion was verified in the official press material checked. Its [Rewards program](https://corporate.vividseats.com/vivid-seats-rewards/) remains a visible consumer differentiator.

### 🚨 Anomalies & Alerts

- **P0 tracking gap:** GTM loads on all four sampled live routes, but no verified `dataLayer.push`, `gtag`, or typed event exists for signup completion, watchlist add, comparison, newsletter subscription, UTM capture, or outbound ticket clicks.
- **P0 data outage:** The newest price-history record is July 24. Do not publish price-history, price-trend, alert, or buy/wait claims.
- **P0 API failure:** `/api/admin/alerts` returned HTTP 500 with `Failed to get alerts`; the stats endpoint reports zero triggered alerts, but alert detail cannot be validated.
- **P1 reporting blind spot:** Unique visitors, traffic sources, top pages, bounce rate, and price-comparison volume are unavailable, so conversion rates cannot be calculated.
- **P1 email observability:** `/api/admin/drip-stats` returned an empty sent-statistics array and 20 pending users; delivery, opens, clicks, and bounces are not observable.
- **Low-base movement:** No signup or watchlist add occurred in today’s window versus a 1.00 signup and 0.43 watchlist-add seven-day average. This is a reporting signal, not enough evidence of demand change.

### Feed Notes for Other Agents

- Content/Social: use the popular-event names only as interest signals; do not convert watch counts into audience or price claims.
- SEO/Paid/CRO: traffic, attribution, page performance, and comparison conversion are not measurable from the current stack.
- Email: active subscriber base is 6; no subscriber was added in the reporting window; drip sending remains unverified.
- Growth: 264 registered users and 256 watchlist items are verified totals. “Watchlist items” are saved events, not events with active price tracking.

### Source Checks

- Admin API queried on 2026-10-06: `/stats`, `/users`, `/watchlist`, `/newsletter`, `/alerts`, `/activity`, `/popular-events`, `/drip-stats`, `/price-history`.
- Live route spot-checks: `/`, `/dashboard`, `/compare`, `/world-cup-2026` — GTM container `GTM-T476F9S4` present on all four.
- Competitor sources: official SeatGeek press/newsroom, StubHub newsroom, and Vivid Seats corporate Rewards/press pages linked above.
