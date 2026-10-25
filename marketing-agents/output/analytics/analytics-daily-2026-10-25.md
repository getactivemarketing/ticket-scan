# TicketScan Daily Dashboard — 2026-10-25

**Run completed:** 2026-10-25 06:00 UTC reporting window  
**Data window:** 2026-10-24 06:00 UTC through 2026-10-25 06:00 UTC unless noted  
**Source:** live Railway admin API, deployed Vercel HTML/GTM checks, frontend source review

## Executive readout

- The platform has 267 registered users, 256 saved watchlist items, and 7 active newsletter subscribers.
- No new signup, watchlist item, or newsletter subscription appears in the last 24 hours. One signup appears in the last seven days.
- Price tracking remains down: the 202 price-history rows stop at 2026-07-24 20:01 UTC. Do not use these rows for current pricing, trends, or recommendations.
- `/api/admin/alerts` is still failing with HTTP 500. Triggered-alert reporting is unavailable; the stats endpoint reports zero historical triggered alerts.
- Drip stats are empty while eligible users remain pending. This is a likely campaign-delivery or instrumentation issue.
- GTM loads on deployed pages, but no conversion events are pushed by the app. Visitor, traffic-source, pageview, bounce-rate, UTM, and conversion metrics are therefore unavailable.

## Key Metrics (24h)

| Metric | Today | Yesterday | 7-Day Avg | Trend |
|---|---:|---:|---:|:---:|
| Unique Visitors | N/A | N/A | N/A | — |
| New Signups | 0 | N/A | 0.14/day* | ↓ |
| Watchlist Items Added | 0 | N/A | 0/day* | → |
| Price Comparisons Run | N/A | N/A | N/A | — |
| Newsletter Subscribers | 0 | N/A | 0/day* | → |
| Price Alerts Triggered | N/A — endpoint 500 | N/A | N/A | ⚠ |
| Drip Emails Sent | 0 recorded | N/A | 0 recorded | ⚠ |

`*` Seven-day averages are calculated from the available live records, not analytics events. The users endpoint shows 1 signup in the seven-day window; watchlist and newsletter endpoints show 0 additions.

## Totals

- Total registered users: **267**
- Total saved watchlist items: **256**
- Total active newsletter subscribers: **7**
- Total price-history records: **202**, all stale; latest row: **2026-07-24 20:01 UTC**
- Active watchlist items with a target price: **0**
- Triggered alerts: stats endpoint reports **0**; alerts detail endpoint fails with **HTTP 500**, so this value requires repair before relying on it

## Traffic Sources (24h)

Unavailable. No GA4 export or traffic-source admin endpoint is configured, and the frontend does not capture UTM parameters into a reporting store.

| Source | Visitors | Signups | Conversion |
|---|---:|---:|---:|
| Organic Search | N/A | N/A | N/A |
| Direct | N/A | N/A | N/A |
| Social | N/A | N/A | N/A |
| Paid | N/A | N/A | N/A |
| Email | N/A | N/A | N/A |
| Referral | N/A | N/A | N/A |

## Top Pages (24h)

Unavailable. GTM is installed, but pageview and bounce-rate data are not exposed through the admin API and no analytics export was available for this run.

## Popular Saved Events

These are saved watchlist records, not price-tracking activity. The API returns event/date rows separately, so the list contains multiple dates for the same tour.

1. Harry Styles: Together, Together — Madison Square Garden, New York — 2 saves
2. Harry Styles: Together, Together — Madison Square Garden, New York — 2 saves
3. Ariana Grande - The Eternal Sunshine Tour — Barclays Center, Brooklyn — 2 saves
4. NBA Finals: TBD at New York Knicks RD4 HM GM3 — Madison Square Garden, New York — 2 saves
5. Harry Styles: Together, Together — Madison Square Garden, New York — 2 saves

## Anomalies & Alerts

- **Critical — price data gap:** no price-history row has been recorded since July 24. Price alerts, price history, price trends, and buy/wait recommendations must remain disabled in public reporting.
- **High — alerts endpoint broken:** `/api/admin/alerts` returns `{"success":false,"error":"Failed to get alerts"}` with HTTP 500.
- **High — drip campaign gap:** `/api/admin/drip-stats` returns an empty `stats` array while 20 users are shown as pending in the endpoint’s capped list, including users 5–49 days after signup.
- **High — conversion measurement gap:** GTM loads, but source review found no `dataLayer.push` calls for signup, watchlist add, comparison, newsletter subscribe, or outbound ticket clicks.
- **Medium — analytics coverage gap:** no visitor, pageview, bounce, traffic-source, UTM, or comparison-run metric is available from the current admin API.
- **Low — stale saved events:** the popular-events response is dominated by older 2026 event dates; this is a product-data observation, not evidence of current demand.

## Competitor quick check

- **SeatGeek:** Its newsroom lists recent product releases for **TourIQ**, described as predictive pricing intelligence, and **Ask SeatGeek**, a conversational search product. No current offer was visible on SeatGeek’s public offers page during the check. Source: [SeatGeek newsroom](https://seatgeek.com/enterprise/newsroom).
- **StubHub:** The newsroom highlights a Paze promotion dated October 19, plus recent partnership and seller-content activity. No broad pricing change was confirmed in the quick scan. Source: [StubHub newsroom](https://newsroom.stubhub.com/).
- **Vivid Seats:** Its National Fan Day campaign runs a comedy trivia week October 25–31 in the app, with a $1,000 ticket prize; the same announcement promotes its rewards and buyer-guarantee positioning. Source: [Vivid Seats announcement](https://www.globenewswire.com/de/news-release/2026/10/08/3377253/0/en/vivid-seats-celebrates-national-fan-day-by-giving-back-and-granting-wishes.html).

## Recommended follow-up

1. Repair `/api/admin/alerts` and confirm the underlying `price_alerts` query independently.
2. Keep public price claims suppressed until a fresh post-July-24 row is verified across the sources.
3. Add a single shared analytics helper that pushes named events for signup, watchlist add, comparison run, newsletter subscribe, and outbound seller click, including UTM/session context.
4. Audit the drip cron and email-send logging; `stats: []` with pending users is not a healthy steady state.
5. Connect GA4/GTM reporting or add a privacy-safe internal event aggregate so the next dashboard can report visitors, sources, top pages, and funnel conversion.
