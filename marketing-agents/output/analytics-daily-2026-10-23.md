## TicketScan Daily Dashboard — 2026-10-23

Internal report. Generated from the deployed admin API and deployed-site checks. Times are reported in UTC unless noted. GA/GTM visitor and page-level analytics are not available through the current admin API, so those fields are marked unavailable rather than estimated.

### Key Metrics (24h)

| Metric | Today | Yesterday | 7-Day Avg | Trend |
|---|---:|---:|---:|:---:|
| Unique Visitors | N/A — no GA export/admin endpoint | N/A | N/A | — |
| New Signups | 0 | 0 | 0.14/day (1 in 7 days) | ↓ |
| Watchlist Items Added | 0 | 0 | 0/day | → |
| Price Comparisons Run | N/A — no event tracking | N/A | N/A | — |
| Newsletter Subscribers | 0 | 0 | 0/day | → |
| Price Alerts Triggered | N/A — endpoint returned HTTP 500 | N/A | N/A | ⚠ |
| Drip Emails Sent | 0 reported; endpoint has no rows | N/A | N/A | ⚠ |

Notes: “Today” uses the current 24-hour window ending 2026-10-23. The admin activity endpoint returns only the latest 20 combined records; signup/watchlist/newsletter counts above were cross-checked against the users, watchlist, and newsletter endpoints. There is no historical daily series, so yesterday and 7-day averages are unavailable for most metrics.

### Totals

- Total registered users: **267**
- Total active watchlist items: **256** (a count of saved items, not events with working price tracking)
- Total newsletter subscribers (active): **7**
- Total price history records: **Not exposed by the endpoint**; the endpoint returned its maximum 50-row sample, with the newest record at **2026-07-24 20:01 UTC**. No price data has been recorded since July 24.

### Traffic Sources (24h)

| Source | Visitors | Signups | Conversion |
|---|---:|---:|---:|
| Organic Search | N/A | N/A | N/A |
| Direct | N/A | N/A | N/A |
| Social | N/A | N/A | N/A |
| Paid | N/A | N/A | N/A |
| Email | N/A | N/A | N/A |
| Referral | N/A | N/A | N/A |

GTM is present, but UTM capture and a queryable traffic-source report were not found in the frontend source.

### Top Pages (24h)

Unavailable: no GA page-report export or equivalent admin endpoint is configured.

### Popular Events Being Tracked

The admin endpoint returned a ten-way tie at 2 saved items. Top five returned:

1. Harry Styles: Together, Together — Madison Square Garden, New York — 2
2. Harry Styles: Together, Together — Madison Square Garden, New York — 2
3. Ariana Grande — The Eternal Sunshine Tour — Barclays Center, Brooklyn — 2
4. NBA Finals: TBD at New York Knicks RD4 HM GM3 — Madison Square Garden, New York — 2
5. Harry Styles: Together, Together — Madison Square Garden, New York — 2

This endpoint groups event IDs separately, so repeated tour names at different dates are separate rows.

### Competitor Activity

- SeatGeek’s official newsroom lists **Ask SeatGeek**, a conversational AI marketplace search feature launched August 26, and **TourIQ**, predictive pricing intelligence for promoters/venues announced October 2. This raises the bar for ticket discovery and pricing intelligence positioning.
- StubHub is promoting a **$20 discount on purchases of $150+ paid with Paze**, running October 19 through November 15 or while supplies last.
- No material new Vivid Seats feature or promotion was identified in this quick official-source scan.

### 🚨 Anomalies & Alerts

- **P0 data gap:** `/api/admin/alerts` returned HTTP 500 (`Failed to get alerts`). Investigate the admin alerts query before treating the zero-alert count as meaningful.
- **Tracking gap:** GTM container `GTM-T476F9S4` is present on `/`, `/dashboard`, `/compare`, `/watchlist`, `/faq`, and `/venues/metlife-stadium`, but no explicit `dataLayer.push`, `gtag`, or equivalent conversion instrumentation was found in `web/src`.
- Signup, watchlist-add, comparison, newsletter, outbound-click, traffic-source, and UTM metrics cannot currently be validated through the available reporting surface.
- Price history remains stale: newest returned record is July 24. Do not use price history, alerts, or buy/wait recommendations in public copy.
- Drip stats returned an empty sent-statistics array while reporting 20 pending users. The campaign should be checked before relying on delivery.

### Recommended follow-up

1. Fix `/api/admin/alerts` and expose daily aggregates for alerts, comparisons, and drip sends.
2. Add explicit conversion events for signup, watchlist add, comparison, newsletter subscribe, and outbound ticket clicks; preserve UTM parameters.
3. Give the analytics agent read access to GA/GTM reporting or add a privacy-safe internal events table with daily rollups.
4. Keep all marketing copy clear that price tracking, alerts, history, and recommendations are currently unavailable.

