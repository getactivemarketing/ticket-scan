## TicketScan Daily Dashboard — 2026-10-16

Window: trailing 24 hours ending 2026-10-16 10:00 UTC. Seven-day averages below are calculated from the available seven-day aggregate where the API exposes one; a dash means the source does not provide the underlying daily series.

### Key Metrics (24h)

| Metric | Today | Yesterday | 7-Day Avg | Trend |
|---|---:|---:|---:|:---:|
| Unique Visitors | — | — | — | — |
| New Signups | 0 | 0 | 0.29/day | → |
| Watchlist Items Added | 0 | 0 | 0/day | → |
| Price Comparisons Run | — | — | — | — |
| Newsletter Subscribers | 0 | 0 | 0.14/day | → |
| Price Alerts Triggered | 0* | 0* | — | — |
| Drip Emails Sent | 0 | — | — | — |

`—` means not instrumented or not available from the admin API. `*` The alerts endpoint failed with HTTP 500; the dashboard stats field reports 0 triggered alerts, but this should be treated as an operational/data-quality result rather than proof of a healthy alert pipeline.

### Totals

- Total registered users: **266**
- Total active watchlist items: **256** rows (these are saved watchlist rows, not events with working price tracking)
- Total newsletter subscribers (active): **7**
- Total price history records returned with an expanded request: **202**
- Price-history freshness: newest row **2026-07-24 20:01 UTC**; all 202 rows are Ticketmaster rows for one event

### Traffic Sources (24h)

| Source | Visitors | Signups | Conversion |
|---|---:|---:|---:|
| Organic Search | — | — | — |
| Direct | — | — | — |
| Social | — | — | — |
| Paid | — | — | — |
| Email | — | — | — |
| Referral | — | — | — |

Google Analytics/reporting data is not available through the admin API, so these fields are intentionally not estimated.

### Top Pages (24h)

Not available: no page-view or bounce-rate feed is exposed to this agent. The deployed smoke check returned HTTP 200 and GTM container `GTM-T476F9S4` on `/`, `/dashboard`, `/compare`, and `/watchlist`; `/newsletter` returned HTTP 404.

### Most-Added-to-Watchlist Events

The popular-events endpoint returns a tie at two saved rows each. Top five entries returned:

1. Harry Styles: Together, Together — Madison Square Garden, New York — 2
2. Harry Styles: Together, Together — Madison Square Garden, New York — 2
3. Ariana Grande - The Eternal Sunshine Tour — Barclays Center, Brooklyn — 2
4. NBA Finals: TBD at New York Knicks RD4 HM GM3 — Madison Square Garden, New York — 2
5. Harry Styles: Together, Together — Madison Square Garden, New York — 2

The endpoint groups by event ID/date, so repeated event names are separate scheduled instances, not necessarily duplicate rows.

### 🚨 Anomalies & Alerts

- **Price data gap remains critical:** no price-history row has been recorded since July 24. Do not use TicketScan price data, alerts, trends, or buy/wait recommendations in public copy.
- **Admin alerts endpoint is broken:** `GET /api/admin/alerts` returned `{"success":false,"error":"Failed to get alerts"}` while `/api/admin/stats` returned zero triggered alerts.
- **Drip campaign appears stalled:** `/api/admin/drip-stats` returned an empty sent-statistics array and 20 pending users, including users at or beyond the scheduled Day 3/7/14/21/30 thresholds.
- **Newsletter inventory is small but current:** one of seven active subscribers joined in the last seven days; there were no new subscribers in the trailing 24 hours.
- **Measurement gap:** visitor counts, page views, bounce rate, traffic source attribution, UTM capture, comparison runs, and event-level conversion telemetry are not available from the current admin surface.
- **Deployed route issue:** `/newsletter` is linked in the validation brief but returns 404; confirm whether the intended route is a component/footer form rather than a page.

### Competitor Activity — 2026-10-16

- **SeatGeek:** its official press page lists the October 2 launch of TourIQ, described as predictive pricing intelligence, and the August 26 launch of Ask SeatGeek, a conversational AI search experience. This is notable competitive positioning around discovery and intelligence. [SeatGeek press page](https://seatgeek.com/press), [Ask SeatGeek announcement](https://seatgeek.com/press/seatgeek-launches-ask-seatgeek-bringing-conversational-ai-search-to-its-marketplace)
- **StubHub:** its newsroom highlights an October 14 Formula DRIFT partnership and an October 9 L.A. Comic Con distribution partnership. The same newsroom also promoted seat-view technology and fee/pricing explainers in late September. [StubHub newsroom](https://newsroom.stubhub.com/)
- **Vivid Seats:** no fresh product launch or pricing change was found in the official material checked today. Its support documentation says promotions may be distributed through email and app push notifications; treat third-party coupon claims as unverified until checked at checkout. [Vivid Seats promotions support](https://support.vividseats.com/support/solutions/articles/1000210422-does-vivid-seats-offer-deals-or-discounts-)

### Source / Method Notes

- Live sources queried with the admin key: `stats`, `users`, `watchlist`, `newsletter`, `alerts`, `activity`, `popular-events`, `drip-stats`, and `price-history`.
- Users, watchlist rows, and subscribers were fetched with `limit=1000`; price history with `limit=10000`.
- No public claims about TicketScan price tracking, price history, alerts, or recommendations are made here; those systems are documented as down in `marketing-agents/PRODUCT-STATUS.md`.
