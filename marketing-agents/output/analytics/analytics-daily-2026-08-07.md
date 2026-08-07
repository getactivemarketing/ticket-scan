## TicketScan Daily Dashboard — 2026-08-07

Reporting window: 2026-08-06 06:00 UTC–2026-08-07 06:00 UTC. “Yesterday” is the immediately preceding 24-hour window. Seven-day averages use the seven complete windows ending 2026-08-06 06:00 UTC. Data source: authenticated admin API, frontend source inspection, live production checks, and an official competitor press scan.

### Key Metrics (24h)

| Metric | Today | Yesterday | 7-Day Avg | Trend |
|---|---:|---:|---:|:---:|
| Unique Visitors | N/A | N/A | N/A | — |
| New Signups | 0 | 2 | 1.29 | ↓ |
| Watchlist Items Added | 0 | 2 | 1.00 | ↓ |
| Price Comparisons Run | N/A | N/A | N/A | — |
| Newsletter Subscribers | 0 | 0 | N/A | → |
| Price Alerts Triggered | N/A* | N/A* | N/A* | — |
| Drip Emails Sent | 0 reported | 0 reported | N/A | → |

\* `/api/admin/alerts` returned HTTP 500. `/api/admin/stats` reports 0 total triggered alerts, but a daily alert count cannot be validated.

### Totals

- Total registered users: **200**
- Total watchlist items: **203**
- Total newsletter subscribers (active): **4**
- Total price history records: **202**
- Total triggered alerts: **0** according to `/api/admin/stats`; detail endpoint is failing.

### Traffic Sources (24h)

Unavailable. The current admin API exposes no visitor, source, UTM, or attributed-signup data.

| Source | Visitors | Signups | Conversion |
|---|---:|---:|---:|
| Organic Search | N/A | N/A | N/A |
| Direct | N/A | N/A | N/A |
| Social | N/A | N/A | N/A |
| Paid | N/A | N/A | N/A |
| Email | N/A | N/A | N/A |
| Referral | N/A | N/A | N/A |

### Top Pages (24h)

Unavailable. No pageview or bounce-rate reporting is exposed by the current analytics integration/API.

1. N/A — pageview and bounce-rate data unavailable
2. N/A — pageview and bounce-rate data unavailable
3. N/A — pageview and bounce-rate data unavailable
4. N/A — pageview and bounce-rate data unavailable
5. N/A — pageview and bounce-rate data unavailable

### Popular Events Being Tracked

The API returns tied event listings, not unique tour-level popularity. Top five returned listings:

1. Noah Kahan: The Great Divide Tour — Kia Center, Orlando — 2 watches
2. Harry Styles: Together, Together — Madison Square Garden, New York — 2 watches
3. Flyleaf with Lacey Sturm - 20th Anniversary Tour — House of Blues Chicago — 2 watches
4. Ariana Grande - The Eternal Sunshine Tour — Barclays Center, Brooklyn — 2 watches
5. Noah Kahan: The Great Divide Tour — Citi Field, Queens — 2 watches

### 🚨 Anomalies & Alerts

- **Critical — price tracking stopped:** The newest price-history record is `2026-07-24T20:01:07Z`, despite the documented four-hour cadence. This is a 13-day data gap as of the reporting window.
- **High — alert monitoring broken:** `/api/admin/alerts` returns HTTP 500 while stats reports zero total alerts.
- **Critical — conversion instrumentation gap:** GTM is present, but no explicit frontend conversion events were found for signup, watchlist add, price comparison, or newsletter subscription.
- **Critical — attribution gap:** No UTM capture/persistence or source reporting was found.
- **High — analytics gap:** Unique visitors, traffic sources, top pages, bounce rate, and comparison completions are unavailable.
- **High — drip campaign inactive:** `/api/admin/drip-stats` reports no sent rows and 20 pending users, including users at or beyond scheduled milestones.
- **Watch — daily activity paused:** No signups or watchlist additions occurred in the current window, following two of each yesterday. The sample is too small to call this a demand trend.

### Competitor Quick Check

- **SeatGeek:** Its official press page lists a July 22, 2026 CMA Fest ticketing announcement and June product/partnership activity; no same-day consumer pricing promotion or feature launch was confirmed. [SeatGeek press](https://seatgeek.com/press)
- **StubHub:** Its official newsroom’s latest listed item is a July 27, 2026 American Conference open-distribution partnership; no new buyer-facing pricing feature or broad promotion was confirmed today. [StubHub newsroom](https://newsroom.stubhub.com/)
- **Vivid Seats:** Its official press page shows no 2026 launch or promotion in the current recent-release list. [Vivid Seats press](https://www.vividseats.com/press)

### Agent Handoff

- Content/Social: use the five tied listings as a “what fans are tracking” signal; do not call it visitor popularity.
- SEO/Paid/Email: organic, paid, social, email, page, and UTM performance are unavailable; do not optimize against inferred channel numbers.
- CRO: prioritize named events for signup, watchlist add, compare completion, and newsletter success.
- Growth: retention and churn cannot be calculated from the exposed endpoints.
- Engineering: repair `/api/admin/alerts`, restart/investigate price tracking after July 24, and add queryable event-level analytics with UTM persistence.
