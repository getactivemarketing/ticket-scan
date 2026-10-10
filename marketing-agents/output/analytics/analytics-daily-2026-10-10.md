# TicketScan Daily Dashboard — 2026-10-10

Internal analytics report. Counts are from the deployed admin API unless noted. Calendar-day comparisons use UTC dates. The requested `analytics-tracking` skill is not installed; tracking validation used deployed HTML, source inspection, and direct endpoint checks.

## Key Metrics (calendar day)

| Metric | Today | Yesterday | 7-Day Avg | Trend |
|---|---:|---:|---:|:---:|
| Unique Visitors | N/A | N/A | N/A | — |
| New Signups | 0 | 0 | 0.1 | → |
| Watchlist Items Added | 0 | 0 | 0.1 | → |
| Price Comparisons Run | N/A | N/A | N/A | — |
| Newsletter Subscribers | 0 | 0 | 0.0 | → |
| Price Alerts Triggered | N/A | N/A | N/A | — |
| Drip Emails Sent | 0 observed* | 0 observed* | 0 observed* | → |

The seven-day averages use Oct 3–9 calendar totals divided by seven: 1 watchlist addition and 0 signups/subscriptions. The user and watchlist endpoints support full retrieval with `limit=1000`; the activity endpoint exposes only its 20 most recent records. “N/A” means no corresponding measurement is exposed by the current API, not zero.

\* `/api/admin/drip-stats` returned an empty sent-statistics array. This is zero observed sends, not proof that email delivery infrastructure is healthy.

## Totals

- Total registered users: **264**
- Total watchlist items: **256**
- Total active newsletter subscribers: **6**
- Total price history records: **202**; latest record is **2026-07-24 20:01 UTC**
- API-reported active alerts: **0**; triggered alerts: **0**

## Traffic Sources (24h)

| Source | Visitors | Signups | Conversion |
|---|---:|---:|---:|
| Organic Search | N/A | N/A | N/A |
| Direct | N/A | N/A | N/A |
| Social | N/A | N/A | N/A |
| Paid | N/A | N/A | N/A |
| Email | N/A | N/A | N/A |
| Referral | N/A | N/A | N/A |

No GA4, Search Console, ads, or source-attribution dataset is connected to the agent. GTM loading does not provide these counts by itself.

## Top Pages (24h)

Unavailable. No page-view or bounce-rate dataset is exposed through the current admin API.

## Popular Events Being Watched

The API returned a five-way tie at two watchlist rows each:

1. Harry Styles: Together, Together — Madison Square Garden, New York — 2
2. Harry Styles: Together, Together — Madison Square Garden, New York — 2
3. Ariana Grande - The Eternal Sunshine Tour — Barclays Center, Brooklyn — 2
4. NBA Finals: TBD at New York Knicks RD4 HM GM3 — Madison Square Garden, New York — 2
5. Harry Styles: Together, Together — Madison Square Garden, New York — 2

These are saved watchlist rows, not price-tracking records.

## 🚨 Anomalies & Alerts

- **Price tracking remains down:** no price history has been recorded since July 24. Do not use price history, price-alert, trend, or buy/wait/hold claims in public marketing.
- **Alerts endpoint is broken:** `/api/admin/alerts` returned HTTP 500 with `Failed to get alerts`. The zero in `/api/admin/stats` cannot validate 24-hour alert activity.
- **Drip delivery needs investigation:** sent statistics are empty and 20 pending users were returned, all at or beyond seven days since signup. The campaign contains price-alert messaging and should not be promoted publicly while tracking is down.
- **Conversion tracking is not validated:** GTM is present, but no explicit custom `dataLayer.push` events were found for signup, watchlist add, comparison, newsletter subscribe, or ticket-outbound actions.
- **Low recent activity:** no signups or watchlist additions were observed on Oct 5–10; the only Oct 3–9 activity was one watchlist addition on Oct 4.

## Competitor quick check

- SeatGeek launched **Ask SeatGeek**, a conversational AI search experience, on Aug 26, and its press page also lists **TourIQ**, a predictive-pricing product announced Oct 2. [Ask SeatGeek announcement](https://seatgeek.com/press/seatgeek-launches-ask-seatgeek-bringing-conversational-ai-search-to-its-marketplace) · [SeatGeek press page](https://seatgeek.com/press)
- StubHub published a current explainer on how its fees and pricing work on Sep 30. No new consumer promotion was confirmed in this check. [StubHub pricing explainer](https://newsroom.stubhub.com/2026/09/30/how-stubhub-pricing-works/) · [StubHub newsroom](https://newsroom.stubhub.com/)
- No material new Vivid Seats product launch or promotion was confirmed in the quick check. [Vivid Seats press page](https://corporate.vividseats.com/press/)

## Source and method notes

- Queried: `stats`, `users?limit=1000`, `watchlist?limit=1000`, `newsletter?limit=1000`, `alerts`, `activity?limit=1000`, `popular-events`, `drip-stats`, and `price-history?limit=1000`.
- GTM/site spot-checks: `/`, `/dashboard`, and `/venues/metlife-stadium` all returned HTTP 200 and contained container `GTM-T476F9S4`.
- No write or posting endpoints were called.
- Watchlist and user counts describe saved records; they do not mean events are being price-tracked.
