# TicketScan Daily Dashboard — 2026-10-12

Reporting window: **2026-10-11 06:00 UTC–2026-10-12 06:00 UTC**. “Yesterday” is the preceding 24-hour UTC window. Seven-day averages use the seven complete daily windows ending at the reporting cutoff. Visitor, attribution, pageview, bounce-rate, and price-comparison metrics are not exposed by the supplied admin API and are marked `N/A`.

## Headline

**One new account and one newsletter subscription arrived in the latest window; activation was otherwise quiet.** The live admin API reports 265 total users, 256 watchlist records, 7 active subscribers, and no verifiable alert or drip-send activity. The analytics instrumentation gap remains the main reporting constraint.

## Key Metrics (24h)

| Metric | Today | Yesterday | 7-Day Avg | Trend |
|---|---:|---:|---:|:---:|
| Unique Visitors | N/A | N/A | N/A | — |
| New Signups | 1 | 0 | 0.00 | ↑ (new activity) |
| Watchlist Items Added | 0 | 0 | 0.14 | ↓ (-100%) |
| Price Comparisons Run | N/A | N/A | N/A | — |
| Newsletter Subscribers | 1 | 0 | 0.00 | ↑ (new activity) |
| Price Alerts Triggered | N/A* | N/A* | N/A* | — |
| Drip Emails Sent | N/A** | N/A** | N/A** | — |

\* `/api/admin/alerts` returned HTTP 500 (`Failed to get alerts`). The stats endpoint reports `triggeredAlerts: 0`, but that value is not independently validated.

\*\* `/api/admin/drip-stats` returned an empty sent-statistics array; send timestamps are unavailable. Its pending queue contains 20 users, including users beyond their scheduled send dates.

## Totals

- Total registered users: **265**
- Total watchlist records: **256**
- Total active newsletter subscribers: **7**
- Price-history records: **202**; newest record is **2026-07-24 20:01 UTC**
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

The endpoint returned a tie at 2 watchlist records. These are raw rows, not a clean “upcoming” ranking; the returned top five are historical events relative to this report:

1. **Harry Styles: Together, Together** — Madison Square Garden, New York — 2 (2026-09-04)
2. **Harry Styles: Together, Together** — Madison Square Garden, New York — 2 (2026-08-28)
3. **Ariana Grande — The Eternal Sunshine Tour** — Barclays Center, Brooklyn — 2 (2026-07-13)
4. **NBA Finals: TBD at New York Knicks RD4 HM GM3** — Madison Square Garden, New York — 2 (2026-06-16)
5. **Harry Styles: Together, Together** — Madison Square Garden, New York — 2 (2026-08-29)

Do not use this list as a current-demand signal without filtering for future event dates and deduplicating tour/event series.

## Competitor Quick Check

- **SeatGeek:** TourIQ launched October 2 as predictive pricing intelligence for promoters and venues. SeatGeek also lists Ask SeatGeek, its conversational marketplace search, as a recent product release. This is notable competitive movement in data-led discovery, but it is primarily B2B for TourIQ. Sources: [TourIQ announcement](https://seatgeek.com/press/SeatGeek%20Launches%20TourIQ), [SeatGeek newsroom](https://seatgeek.com/enterprise/newsroom).
- **StubHub:** Its newsroom currently highlights all-in pricing education, seat-view technology, fall event guides, and an October 9 L.A. Comic Con distribution partnership. No new consumer pricing feature was verified in this quick check. Source: [StubHub newsroom](https://newsroom.stubhub.com/).
- **Vivid Seats:** Its October blog archive shows National Fan Day content on October 8 and a 2027 concert-tour forecast on October 6; no major product launch or promotion was verified. Source: [Vivid Seats October 2026 archive](https://www.vividseats.com/blog/2026/10/).

## 🚨 Anomalies & Alerts

- **Priority 1 — Conversion analytics gap:** GTM loads on sampled live routes, but source inspection found no explicit conversion events for signup, watchlist add, comparison, newsletter subscription, or outbound ticket clicks. Visitor, page, bounce, source, UTM, and comparison metrics remain unavailable.
- **Priority 1 — Price-history gap:** The newest returned record is **2026-07-24 20:01 UTC**. Do not use price history for public claims or recommendations.
- **Priority 1 — Alerts endpoint failure:** `/api/admin/alerts` returns HTTP 500.
- **Priority 2 — Drip reporting/delivery gap:** `/api/admin/drip-stats` has no sent rows and 20 pending users, including users 9–36 days from signup. Audit scheduler execution, SMTP results, and send logging.
- **Priority 2 — Popular-events data quality:** Results are tied, include past events, and split repeated event series across IDs. Add an upcoming-event filter and clearer aggregation.
- **Monitoring signal — Low activation:** One signup and no watchlist additions landed in the latest window. The seven-day watchlist baseline is only 0.14/day, so this is not a statistically strong demand conclusion.

## Feed Notes for Other Agents

- Content/Social: use verified event discovery, onsale/presale, venue-guide, and general ticket-buying advice only. Do not infer demand from the popular-events endpoint.
- SEO/Paid/CRO: visitor, attribution, comparison, page-performance, and bounce metrics are unavailable until queryable event analytics exists.
- Email: active subscriber base is **7**; one new subscription arrived in the latest window. Do not promote price-alert functionality.
- Growth: one signup was recorded, but retention and funnel conversion cannot be inferred.
- Product/engineering: repair `/api/admin/alerts`, restore price ingestion, add typed conversion/attribution reporting, and filter popular events to upcoming inventory.

