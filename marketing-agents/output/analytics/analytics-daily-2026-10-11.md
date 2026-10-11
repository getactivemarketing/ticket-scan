# TicketScan Daily Dashboard — 2026-10-11

Reporting window: **2026-10-10 06:00 UTC–2026-10-11 06:00 UTC**. “Yesterday” is the preceding 24-hour UTC window. Seven-day averages use the seven complete daily windows ending at the reporting cutoff. Visitor, attribution, pageview, bounce-rate, and price-comparison metrics are not exposed by the supplied admin API and are marked `N/A`.

## Headline

**No measurable acquisition or activation activity landed in the latest window.** The live admin data shows 264 total users, 256 watchlist records, and 6 active newsletter subscribers. The analytics surface still cannot report traffic or funnel events. Price tracking remains stale, and the alerts endpoint is failing.

## Key Metrics (24h)

| Metric | Today | Yesterday | 7-Day Avg | Trend |
|---|---:|---:|---:|:---:|
| Unique Visitors | N/A | N/A | N/A | — |
| New Signups | 0 | 0 | 0.00 | → |
| Watchlist Items Added | 0 | 0 | 0.14 | ↓ (-100%) |
| Price Comparisons Run | N/A | N/A | N/A | — |
| Newsletter Subscribers | 0 | 0 | 0.00 | → |
| Price Alerts Triggered | N/A* | N/A* | N/A* | — |
| Drip Emails Sent | N/A** | N/A** | N/A** | — |

\* `/api/admin/alerts` returned HTTP 500 (`Failed to get alerts`). `/api/admin/stats` reports `triggeredAlerts: 0`, but that value is not independently validated today.

\*\* `/api/admin/drip-stats` returned an empty sent-statistics array; daily send timestamps are unavailable.

## Totals

- Total registered users: **264**
- Total watchlist records: **256**
- Total active newsletter subscribers: **6**
- Price-history records: **50 returned by the endpoint (capped at 50)**; newest record is **2026-07-24 20:01 UTC**
- Total favorites: **1**

“Watchlist records” is used deliberately: these records are not evidence that price tracking or price alerts are working.

## Traffic Sources (24h)

| Source | Visitors | Signups | Conversion |
|---|---:|---:|---:|
| Organic Search | N/A | N/A | N/A |
| Direct | N/A | N/A | N/A |
| Social | N/A | N/A | N/A |
| Paid | N/A | N/A | N/A |
| Email | N/A | N/A | N/A |
| Referral | N/A | N/A | N/A |

The admin API exposes no GA/GTM event query, traffic-source breakdown, or UTM report.

## Top Pages (24h)

1. N/A — pageviews and bounce rate unavailable
2. N/A — pageviews and bounce rate unavailable
3. N/A — pageviews and bounce rate unavailable
4. N/A — pageviews and bounce rate unavailable
5. N/A — pageviews and bounce rate unavailable

## Popular Events Being Tracked

The endpoint returned a tie at 2 watchlist records. These are raw rows, not a clean “upcoming” ranking; all five below have event dates in the past relative to this report:

1. **Harry Styles: Together, Together** — Madison Square Garden, New York — 2
2. **Harry Styles: Together, Together** — Madison Square Garden, New York — 2
3. **Ariana Grande — The Eternal Sunshine Tour** — Barclays Center, Brooklyn — 2
4. **NBA Finals: TBD at New York Knicks RD4 HM GM3** — Madison Square Garden, New York — 2
5. **Harry Styles: Together, Together** — Madison Square Garden, New York — 2

## Competitor Quick Check

- **SeatGeek:** Launched TourIQ on October 2, a predictive intelligence product for promoters and venues that forecasts show value and generates seat-level pricing. It is a notable move toward B2B pricing intelligence. [SeatGeek announcement](https://seatgeek.com/press/SeatGeek%20Launches%20TourIQ)
- **StubHub:** Its newsroom is emphasizing all-in pricing, fee education, seat-view technology, and fresh event guides; no major new consumer product launch was verified in this scan. [StubHub newsroom](https://newsroom.stubhub.com/)
- **Vivid Seats:** No notable current first-party feature launch, pricing change, or promotion was verified in this quick scan. Treat this as “no finding,” not proof that none exists.

## 🚨 Anomalies & Alerts

- **High-priority analytics gap:** Visitors, traffic sources, UTM capture, page performance, bounce rate, and comparison events remain unavailable.
- **Conversion instrumentation gap:** GTM is embedded, but source inspection found no explicit frontend `dataLayer.push` events for signup, watchlist add, price comparison, or newsletter subscription.
- **Price tracking outage/staleness:** The latest returned price-history record is **2026-07-24 20:01 UTC**. Do not use price history for public claims or recommendations.
- **Alerts endpoint failure:** `/api/admin/alerts` returns HTTP 500 with `Failed to get alerts`.
- **Drip reporting gap:** `/api/admin/drip-stats` returned no sent-statistics rows, so daily sends cannot be verified.
- **Popular-events data quality:** The endpoint returns tied rows for past events and separate event IDs for separate performances; it needs an upcoming-event filter and clearer ranking semantics.
- **Low activation:** Zero signups and zero watchlist adds were recorded in the latest window. The seven-day watchlist baseline is only 0.14/day, so this is a monitoring signal, not a statistically meaningful demand conclusion.

## Feed Notes for Other Agents

- Content/Social: do not infer current demand from the popular-events list; validate event dates before using any as timely angles.
- SEO/Paid/CRO: visitor, attribution, comparison, page-performance, and bounce metrics are unavailable until event-level analytics are queryable.
- Email: active subscriber base is **6**; no new subscriptions were recorded in the latest or prior window.
- Growth: no signup activity was recorded in the latest window; retention and funnel conversion cannot be inferred from this API.
- Product/engineering: repair `/api/admin/alerts`, restore price ingestion, add queryable conversion/attribution reporting, and filter popular events to upcoming inventory.
