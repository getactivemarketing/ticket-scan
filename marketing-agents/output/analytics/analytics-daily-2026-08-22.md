# TicketScan Daily Dashboard — 2026-08-22

Generated 2026-08-22 from the production admin API and local/live frontend checks. Daily counts use UTC calendar days; the 7-day average is the average of Aug 15–21. `—` means the metric is not exposed by the current analytics/API implementation.

## Key Metrics (24h)

| Metric | Today | Yesterday | 7-Day Avg | Trend |
|---|---:|---:|---:|:---:|
| Unique Visitors | — | — | — | — |
| New Signups | 4 | 1 | 2.43 | ↑ |
| Watchlist Items Added | 3 | 1 | 1.29 | ↑ |
| Price Comparisons Run | — | — | — | — |
| Newsletter Subscribers | 0 | 0 | 0.00 | → |
| Price Alerts Triggered | 0* | 0* | 0.00* | → |
| Drip Emails Sent | 0 | 0 | 0.00 | → |

\* The alerts endpoint failed, so zero is the aggregate value returned by `/api/admin/stats`, not a verified 24-hour event count.

## Totals

- Total registered users: **231**
- Total watchlist records: **223** (the API does not distinguish active from past-event records)
- Total newsletter subscribers (active): **4**
- Total price history records returned: **202**

## Traffic Sources (24h)

| Source | Visitors | Signups | Conversion |
|---|---:|---:|---:|
| Organic Search | — | — | — |
| Direct | — | — | — |
| Social | — | — | — |
| Paid | — | — | — |
| Email | — | — | — |
| Referral | — | — | — |

The admin API has no visitor/session/source attribution endpoint. The four lifetime newsletter records have sources `api-test`, `homepage`, `site-footer`, and `test`; these are not valid 24-hour traffic-source data.

## Top Pages (24h)

Unavailable: no pageview or bounce-rate data is exposed to this agent.

## Popular Events Being Tracked

1. **Harry Styles: Together, Together** — 20 watchlist records; Madison Square Garden, New York
2. **Backstreet Boys: Into The Millennium** — 11; Sphere, Las Vegas
3. **Ariana Grande - The Eternal Sunshine Tour** — 8; State Farm Arena, Atlanta
4. **Noah Kahan: The Great Divide Tour** — 7; Citi Field, Queens
5. **Bruno Mars - The Romantic Tour** — 6; MetLife Stadium, East Rutherford

## Tracking Validation

- **GTM loading:** PASS for `/`, `/dashboard`, `/compare`, `/register`, and `/world-cup-2026`; all returned HTTP 200 and contained GTM container `GTM-T476F9S4`.
- **Signup event:** NOT VERIFIED. The registration flow calls the auth API but contains no visible `dataLayer.push`/`gtag` conversion event in the repository.
- **Watchlist-add event:** NOT VERIFIED. The add flow calls the API but contains no visible conversion-event push.
- **Price-comparison event:** NOT VERIFIED. The compare flow calls the API but contains no visible conversion-event push.
- **Newsletter-subscribe event:** NOT VERIFIED. The form calls the API but contains no visible conversion-event push.
- **New-page coverage:** Sampled public routes load GTM. A full route-by-route browser event test was not possible without an analytics debugger/GA4 data access.
- **UTM capture:** NOT FOUND in the frontend code; no UTM fields are exposed by the admin API.

## 🚨 Anomalies & Alerts

- **CRITICAL — price tracking data gap:** latest price-history record is `2026-07-24T20:01:07Z`; no records appear in the current 24-hour or 7-day window. This is roughly four weeks stale and undermines price-trend/alert reliability.
- **HIGH — alerts reporting broken:** `/api/admin/alerts?limit=1000` returned `{success:false,error:"Failed to get alerts"}`. The stats aggregate reports `triggeredAlerts: 0`, but recent alert activity cannot be independently verified.
- **HIGH — conversion analytics gap:** GTM is installed, but the codebase has no explicit conversion-event instrumentation or UTM persistence visible for the four required actions.
- **DATA QUALITY — admin stats window mismatch:** `/api/admin/stats` reports `usersToday: 3` using a rolling 24-hour query, while the UTC calendar-day extraction from `/api/admin/users` finds 4 signups on Aug 21. Dashboard uses the calendar-day count for consistency.
- **Watchlist momentum:** 3 watchlist additions in the latest calendar day versus a 1.29/day seven-day average (+133%).

## Competitor Activity Notes

- **StubHub:** Q2 2026 results announced Aug 12: record $3.1B GMS and $573.1M revenue; full-year GMS outlook raised to $10.1–$10.3B. Its newsroom also highlighted a Chicago Stars FC partnership on Aug 11. [StubHub Q2 results](https://investors.stubhub.com/news/news-details/2026/StubHub-Announces-Second-Quarter-2026-Results/default.aspx) · [StubHub newsroom](https://newsroom.stubhub.com/)
- **SeatGeek:** recent official activity is content/discovery-led, including August event guides and the previously announced ChatGPT launch and Spotify concert-discovery integration. No new August product launch or broad pricing change was identified. [SeatGeek newsroom](https://seatgeek.com/enterprise/newsroom) · [SeatGeek blog](https://seatgeek.com/blog)
- **Vivid Seats:** Q2 results emphasized growth tied to World Cup demand; consumer press is promoting August discount codes, including a reported 10% offer. Treat promo availability as unverified until checked at checkout. [Vivid Seats Q2 results](https://www.globenewswire.com/news-release/2026/08/04/3338110/0/en/vivid-seats-reports-second-quarter-2026-results.html) · [WIRED promo check](https://www.wired.com/story/vivid-seats-promo-code/)

## Feed-Forward Notes

- Content/SEO: prioritize Harry Styles, Backstreet Boys, Ariana Grande, Noah Kahan, and Bruno Mars coverage; these are the strongest tracked-event signals.
- CRO/Growth: treat the funnel as unmeasured until event instrumentation and UTM persistence are added.
- Pricing/alerts: do not claim fresh price movement or alert performance until the stale price-history pipeline and failing alerts endpoint are repaired.

