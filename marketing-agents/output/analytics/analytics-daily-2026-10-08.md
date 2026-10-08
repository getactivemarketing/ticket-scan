# TicketScan Daily Dashboard — 2026-10-08

Snapshot taken 2026-10-08 (America/New_York). Admin API data is the source of truth for product metrics. The API's activity endpoint only exposes its 20 most recent records; it has no records newer than 2026-10-04.

## Key Metrics (24h)

| Metric | Today | Yesterday | 7-Day Avg | Trend |
|---|---:|---:|---:|:---:|
| Unique Visitors | N/A | N/A | N/A | — |
| New Signups | 0 | 0 | 0.57/day | ↓ |
| Watchlist Items Added | 0 | 0 | 0.29/day | ↓ |
| Price Comparisons Run | N/A | N/A | N/A | — |
| Newsletter Subscribers | 0 | 0 | 0/day | → |
| Price Alerts Triggered | 0* | 0* | N/A | — |
| Drip Emails Sent | N/A | N/A | N/A | — |

\* `/api/admin/stats` reports `triggeredAlerts: 0`, but `/api/admin/alerts` returns HTTP 500, so this is not independently validated.

The 7-day averages use calendar days 2026-10-01 through 2026-10-07 and the records available from the admin endpoints. “Today” and “yesterday” are zero observed product records, not zero traffic.

## Totals

- Total registered users: **264**
- Total watchlist items: **256** (the API does not expose an active/past-event distinction in this endpoint)
- Total newsletter subscribers (active): **6**
- Total price-history records: **202**; newest record: **2026-07-24 20:01 UTC**

## Traffic Sources (24h)

| Source | Visitors | Signups | Conversion |
|---|---:|---:|---:|
| Organic Search | N/A | N/A | N/A |
| Direct | N/A | N/A | N/A |
| Social | N/A | N/A | N/A |
| Paid | N/A | N/A | N/A |
| Email | N/A | N/A | N/A |
| Referral | N/A | N/A | N/A |

GTM is installed, but no GA4/reporting endpoint or UTM persistence is available to this agent. The live site also does not render the supplied UTM parameters into HTML or expose them through the product API.

## Top Pages (24h)

Unavailable. No page-view or bounce-rate data is exposed by the admin API, and no analytics reporting connector is configured in this workspace.

## Popular Events Being Tracked

The popular-events endpoint currently returns a tie at two watchlist entries each:

1. Harry Styles: Together, Together — Madison Square Garden, New York
2. Ariana Grande - The Eternal Sunshine Tour — Barclays Center, Brooklyn
3. NBA Finals: TBD at New York Knicks RD4 HM GM3 — Madison Square Garden, New York
4. Harry Styles: Together, Together — Madison Square Garden, New York (2026-08-29 listing)
5. World Cup: Match 68 Group L - Croatia vs Ghana — Lincoln Financial Field, Philadelphia

Note: the endpoint returns event listings, not a normalized artist/event rollup; the Harry Styles listing appears more than once across dates.

## 🚨 Anomalies & Alerts

- **Critical — analytics conversion tracking is incomplete.** The live site loads GTM on all seven sampled routes, but the frontend source contains no `dataLayer.push`, `gtag`, or UTM-capture implementation beyond the GTM bootstrap. Signup, watchlist-add, comparison, and newsletter conversion events cannot be validated.
- **Critical — product activity data is stale.** The most recent admin activity is 2026-10-04 21:07 UTC. There are no admin activity records for 2026-10-05 through 2026-10-08.
- **Known — price tracking remains down.** Price history stops on 2026-07-24, so no price, trend, alert, or comparison conclusions should be made from it.
- **Known — alerts endpoint is broken.** `/api/admin/alerts` returned HTTP 500 (“Failed to get alerts”).
- **Warning — drip reporting is empty.** `/api/admin/drip-stats` returned an empty `stats` array and 20 pending users; sent-email counts are not available.
- The apparent >20% drops in signups and watchlist adds are measurement/data-gap signals, not confirmed demand declines.

## Tracking Validation Summary

- GTM container `GTM-T476F9S4`: **present** on `/`, `/dashboard`, `/compare`, `/watchlist`, `/register`, `/tickets/chicago`, and `/venues/madison-square-garden`.
- Signup event: **not validated**; no frontend event push and no recent admin activity.
- Watchlist-add event: **not validated**; no frontend event push. Backend-created watchlist records exist through 2026-10-04.
- Price-comparison event: **not validated**; no frontend event push or comparison counter.
- Newsletter-subscribe event: **not validated**; no frontend event push. Six active subscribers exist, newest 2026-09-18.
- UTM capture: **not validated / apparently absent**; query parameters were accepted by the live pages but not persisted or surfaced.

## Competitor Activity

- **SeatGeek:** its official press page lists the October 2 launch of TourIQ, a predictive intelligence product for promoters/venues, and an October 7 Nashville SC ticketing partnership. This is the clearest current competitive signal: SeatGeek is pushing intelligence and enterprise distribution, not just marketplace inventory. [SeatGeek press page](https://seatgeek.com/press)
- **StubHub:** its newsroom is emphasizing seat-view technology, fee/pricing explainers, and fall event content; its latest listed item is a NASCAR partnership dated October 6. [StubHub newsroom](https://newsroom.stubhub.com/)
- **Vivid Seats:** no October 2026 product launch or promotion was visible on its official press pages; the latest listed financial release is its August 4 Q2 2026 results. [Vivid Seats press releases](https://investors.vividseats.com/news-and-events/press-releases)

## Recommended next actions

1. Add a small shared analytics helper that pushes named events for signup, watchlist add, comparison start/complete, newsletter subscribe, and outbound seller click.
2. Persist `utm_source`, `utm_medium`, `utm_campaign`, and landing page in a first-party session/local-storage layer and attach attribution to signup/newsletter records.
3. Fix `/api/admin/alerts`, then add a health check that fails the daily run when activity has gone stale for more than 24 hours.
4. Keep all public marketing copy clear of price-history, alert, and buy/wait claims until the price feed is repaired.
