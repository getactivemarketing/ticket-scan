## TicketScan Daily Dashboard — 2026-10-04

**Run note:** Metrics below use UTC calendar dates. “Today” is 2026-10-04; “yesterday” is 2026-10-03. The admin API does not expose GA/GTM visitor, pageview, bounce-rate, UTM, or comparison-event aggregates, so those fields are marked unavailable rather than estimated.

### Key Metrics (24h)

| Metric | Today | Yesterday | 7-Day Avg | Trend |
|---|---:|---:|---:|:---:|
| Unique Visitors | N/A | N/A | N/A | — |
| New Signups | 0 | 0 | 1.29 | ↓ |
| Watchlist Items Added | 0 | 0 | 0.43 | ↓ |
| Price Comparisons Run | N/A | N/A | N/A | — |
| Newsletter Subscribers | 0 | 0 | N/A | — |
| Price Alerts Triggered | N/A — endpoint failed | N/A — endpoint failed | N/A | — |
| Drip Emails Sent | N/A — no send rows | N/A — no send rows | N/A | — |

The 7-day averages are totals from 2026-09-27 through 2026-10-03 divided by seven: 9 signups and 3 watchlist additions. Newsletter history contains only six total records, so a meaningful 7-day average is not calculated.

### Totals

- Total registered users: **264**
- Total active watchlist items: **255**
- Total newsletter subscribers (active): **6**
- Total price history records returned: **50**, all dated **2026-07-16 through 2026-07-24**; no current price data is present.

### Traffic Sources (24h)

| Source | Visitors | Signups | Conversion |
|---|---:|---:|---:|
| Organic Search | N/A | N/A | N/A |
| Direct | N/A | N/A | N/A |
| Social | N/A | N/A | N/A |
| Paid | N/A | N/A | N/A |
| Email | N/A | N/A | N/A |
| Referral | N/A | N/A | N/A |

No traffic-source or UTM dataset is available from the admin API, and the current implementation does not push campaign attribution into a reporting endpoint.

### Top Pages (24h)

Unavailable. No pageview or bounce-rate data is exposed by the admin API, and no GA reporting connection is configured for this run.

### Popular Events Being Tracked

Top five rows returned by `/api/admin/popular-events` (watch counts are currently tied at 2):

1. Harry Styles: Together, Together — Madison Square Garden, New York — 2 watchlist items
2. Harry Styles: Together, Together — Madison Square Garden, New York — 2 watchlist items
3. Ariana Grande - The Eternal Sunshine Tour — Barclays Center, Brooklyn — 2 watchlist items
4. NBA Finals: TBD at New York Knicks RD4 HM GM3 — Madison Square Garden, New York — 2 watchlist items
5. Harry Styles: Together, Together — Madison Square Garden, New York — 2 watchlist items

The endpoint returns event/date rows rather than a deduplicated attraction rollup, so repeated Harry Styles rows are retained as returned.

### Competitor Quick Check

No clearly attributable SeatGeek, StubHub, or Vivid Seats feature launch or broad pricing change was found in the last month’s news results. Current media/affiliate coverage did surface short-term promos:

- Vivid Seats: reported codes include $20 off $200+ and a $30 first-purchase code.
- SeatGeek: reported codes include $5 off $300+ and a $10 code.
- StubHub: appeared in the coverage, but no comparable new promo was identified.

Treat those codes as publication-specific offers, not verified platform-wide promotions. Sources: [Syracuse.com ticket guide](https://www.syracuse.com/live-entertainment/2026/10/daughtry-extends-20-years-unplugged-tour-into-2027-how-to-secure-tickets.html), [Billboard ticket guide](https://www.billboard.com/culture/product-recommendations/madison-square-garden-concerts-events-tickets-buy-online-1236058273/).

### 🚨 Anomalies & Alerts

- **Critical data gap:** `/api/admin/alerts` returned HTTP 500 (`Failed to get alerts`). Alert counts cannot be independently validated.
- **Critical data gap:** `/api/admin/price-history` returned 50 rows, but the newest row is 2026-07-24. Price tracking remains stale/down; do not use these rows for current marketing claims.
- **Tracking gap:** GTM is present on all five checked live pages, but no explicit `dataLayer.push` conversion events were found for signup, watchlist add, comparison, or newsletter subscription.
- **Email gap:** `/api/admin/drip-stats` returned an empty `stats` array and 20 pending users. Sent-email totals are not available from the response.
- **Low activity:** Signups and watchlist additions were both 0 on 2026-10-03 and 2026-10-04 to the time of this run, versus prior-7-day averages of 1.29 and 0.43 per day.

### Data sources checked

`/api/admin/stats`, `/users`, `/watchlist`, `/newsletter`, `/alerts`, `/activity`, `/popular-events`, `/drip-stats`, and `/price-history`, using the deployed Railway API on 2026-10-04. Live page spot check: `/`, `/dashboard`, `/compare`, `/onsales`, and `/venues/metlife-stadium` all returned HTTP 200 and included GTM container `GTM-T476F9S4`.
