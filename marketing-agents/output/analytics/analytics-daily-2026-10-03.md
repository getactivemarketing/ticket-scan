# TicketScan Daily Dashboard — 2026-10-03

Reporting window: **2026-10-02 06:00 UTC–2026-10-03 06:00 UTC**. “Yesterday” is the preceding 24-hour UTC window. Seven-day averages use the seven complete windows ending at the reporting cutoff. Visitor, attribution, pageview, bounce-rate, and price-comparison metrics are not exposed by the supplied admin API and are marked `N/A`.

## Headline

**The platform added one user, but activation was quiet.** One signup was recorded in the latest window and no watchlist adds or newsletter subscriptions were recorded. The API reports 264 total users, 255 watchlist records, and 6 active newsletter subscribers. The analytics surface still cannot report traffic or funnel events, and price tracking remains stale.

## Key Metrics (24h)

| Metric | Today | Yesterday | 7-Day Avg | Trend |
|---|---:|---:|---:|:---:|
| Unique Visitors | N/A | N/A | N/A | — |
| New Signups | 1 | 1 | 1.14 | → (-12%) |
| Watchlist Items Added | 0 | 1 | 0.43 | ↓ (-100%) |
| Price Comparisons Run | N/A | N/A | N/A | — |
| Newsletter Subscribers | 0 | 0 | 0.00 | → |
| Price Alerts Triggered | 0 reported* | N/A | N/A | — |
| Drip Emails Sent | 0 reported | 0 reported | 0.00 | → |

\* `/api/admin/alerts` currently fails with `Failed to get alerts`; the zero is from `/api/admin/stats` and is not independently validated.

## Totals

- Total registered users: **264**
- Total active watchlist items: **255**
- Total newsletter subscribers (active): **6**
- Total price history records: **50**
- Total favorites: **1**

## Traffic Sources (24h)

| Source | Visitors | Signups | Conversion |
|---|---:|---:|---:|
| Organic Search | N/A | N/A | N/A |
| Direct | N/A | N/A | N/A |
| Social | N/A | N/A | N/A |
| Paid | N/A | N/A | N/A |
| Email | N/A | N/A | N/A |
| Referral | N/A | N/A | N/A |

The admin API exposes no GA/GTM event query, source breakdown, or UTM report.

## Top Pages (24h)

1. N/A — pageviews and bounce rate unavailable
2. N/A — pageviews and bounce rate unavailable
3. N/A — pageviews and bounce rate unavailable
4. N/A — pageviews and bounce rate unavailable
5. N/A — pageviews and bounce rate unavailable

## Popular Events Being Tracked

The endpoint returned a tie at 2 watches. The first five rows returned were:

1. **Harry Styles: Together, Together** — Madison Square Garden, New York — 2 watches
2. **Harry Styles: Together, Together** — Madison Square Garden, New York — 2 watches
3. **Ariana Grande — The Eternal Sunshine Tour** — Barclays Center, Brooklyn — 2 watches
4. **NBA Finals: TBD at New York Knicks RD4 HM GM3** — Madison Square Garden, New York — 2 watches
5. **Harry Styles: Together, Together** — Madison Square Garden, New York — 2 watches

The endpoint returns separate event IDs for separate performances. Several returned event dates are already in the past relative to this report, so this is a raw popularity signal rather than a clean upcoming-events ranking.

## Competitor Quick Check

- **SeatGeek:** Announced TourIQ on October 2, a predictive intelligence product for promoters and venues that forecasts show value and generates seat-level pricing. This is a notable B2B/data positioning move. [SeatGeek press release](https://seatgeek.com/press/SeatGeek%20Launches%20TourIQ)
- **StubHub:** Announced it is the official distribution partner for ComplexCon 2026, covering verified access for the October 3–4 festival. [StubHub newsroom](https://newsroom.stubhub.com/2026/09/14/stubhub-named-official-distribution-partner-of-complexcon-2026-bringing-verified-access-to-the-festivals-10th-anniversary-in-los-angeles/)
- **Vivid Seats:** No notable current first-party product launch or promotion was verified in this quick check. Treat this as “no finding,” not evidence that none exists.

## 🚨 Anomalies & Alerts

- **High-priority analytics gap:** Visitors, traffic sources, UTM capture, page performance, bounce rate, and comparison events remain unavailable.
- **Conversion instrumentation gap:** GTM loads, but no explicit frontend `dataLayer.push` events were found for signup, watchlist add, price comparison, or newsletter subscription.
- **Price tracking outage/staleness:** The 50 price-history records stop at **2026-07-24 20:01:07 UTC**, despite the documented four-hour cadence. Do not use this data for public price claims or recommendations.
- **Alerts endpoint failure:** `/api/admin/alerts` returns `{ success: false, error: "Failed to get alerts" }`.
- **Drip reporting gap:** `/api/admin/drip-stats` returns an empty sent-statistics array; no drip sends are verifiable.
- **Popular-events data quality:** The top rows are tied at 2 watches and include past event dates, suggesting the endpoint needs an upcoming-event filter and/or clearer ranking semantics.
- **Low activation:** One signup produced zero watchlist adds in the latest window; the latest 24-hour watchlist volume is 100% below the seven-day average, though the absolute baseline is only 0.43 adds/day.

## Feed Notes for Other Agents

- Content/Social: raw demand signals include Harry Styles, Ariana Grande, NBA Finals, and World Cup listings; validate dates before using them as timely content angles.
- SEO/Paid/CRO: visitor, attribution, comparison, page-performance, and bounce metrics remain unavailable until event-level analytics are queryable.
- Email: active subscriber base is **6**, with no new subscriptions in the latest or prior window.
- Growth: one signup occurred in the latest window; do not infer retention or funnel conversion from the admin API.
- Product/engineering: repair `/api/admin/alerts`, restore price ingestion, and add queryable conversion/attribution reporting before using those metrics operationally.

