## TicketScan Daily Dashboard — 2026-10-26

Generated at 06:00 EDT / 10:00 UTC. Admin API data is live; web analytics data is not available to this agent.

### Key Metrics (24h)

| Metric | Today | Yesterday | 7-Day Avg | Trend |
|---|---:|---:|---:|:---:|
| Unique Visitors | N/A | N/A | N/A | — |
| New Signups | 1 observed | 0 observed | 0.29/day* | ↑ |
| Watchlist Items Added | 1 observed | 0 observed | 0.14/day* | ↑ |
| Price Comparisons Run | N/A | N/A | N/A | — |
| Newsletter Subscribers | 0 observed | 0 observed | 0.00/day | → |
| Price Alerts Triggered | 0 | 0 | 0 | → |
| Drip Emails Sent | 0 reported | 0 reported | N/A | — |

\* Computed from the limited admin activity/users records returned by the API, not a complete event warehouse. “Today” means the preceding 24 hours ending 10:00 UTC.

### Totals

- Total registered users: **268**
- Total active watchlist items: **257** (saved events; not price tracking)
- Total newsletter subscribers (active): **7**
- Total price history records exposed: **50**; newest record is **2026-07-24 20:01 UTC**

### Traffic Sources (24h)

| Source | Visitors | Signups | Conversion |
|---|---:|---:|---:|
| Organic Search | N/A | N/A | N/A |
| Direct | N/A | N/A | N/A |
| Social | N/A | N/A | N/A |
| Paid | N/A | N/A | N/A |
| Email | N/A | N/A | N/A |
| Referral | N/A | N/A | N/A |

No GA/GTM reporting export is connected to this run. The application also does not currently persist UTM parameters.

### Top Pages (24h)

Unavailable: no pageview/bounce-rate dataset was returned by the admin API, and this agent has no Google Analytics reporting credentials.

### Popular Events Being Tracked

Top returned rows are tied at two watchlist saves each:

1. Harry Styles: Together, Together — Madison Square Garden, New York
2. Ariana Grande — The Eternal Sunshine Tour — Barclays Center, Brooklyn
3. NBA Finals: TBD at New York Knicks RD4 HM GM3 — Madison Square Garden, New York
4. World Cup: Match 68 Group L — Croatia vs Ghana — Lincoln Financial Field, Philadelphia
5. Noah Kahan: The Great Divide Tour — Kia Center, Orlando

The endpoint returns event instances as separate rows, so the same tour appears multiple times.

### 🚨 Anomalies & Alerts

- **Critical data gap:** price tracking remains down. No new price-history record has appeared since July 24; do not use the exposed historical prices for public claims.
- **Critical tracking gap:** GTM loads, but no explicit `dataLayer.push` conversion events were found for signup, watchlist add, comparison, or newsletter subscribe. These conversions cannot be validated in GTM from the current code.
- **Attribution gap:** no UTM capture/persistence logic was found.
- **API defect:** `/api/admin/alerts` returns `{success:false,error:"Failed to get alerts"}`. Stats still report `activeAlerts: 0` and `triggeredAlerts: 0`, but alert totals should be treated as unverified.
- **Drip gap:** `/api/admin/drip-stats` returns an empty stats array; no sends were reported.
- **Data freshness:** `/api/admin/activity` returns only the latest 20 records and has no date filter, so 24-hour and 7-day activity figures are lower-bound observations.

### Competitor Quick Check

- **SeatGeek:** announced “Ask SeatGeek,” a conversational AI search experience, and “TourIQ,” a predictive pricing intelligence product, in early October. This is the clearest notable product acceleration in the set. [SeatGeek newsroom](https://seatgeek.com/enterprise/newsroom) · [Ask SeatGeek announcement](https://seatgeek.com/press/seatgeek-launches-ask-seatgeek-bringing-conversational-ai-search-to-its-marketplace)
- **StubHub:** newsroom activity is focused on fall sports, partnerships, seller education, and a Paze promotion; no clearly documented major consumer product launch surfaced in this check. [StubHub newsroom](https://newsroom.stubhub.com/)
- **Vivid Seats:** official support highlights newsletter/app discount distribution; no major new product launch surfaced in this check. [Vivid Seats promotions support](https://support.vividseats.com/support/solutions/articles/1000210422-does-vivid-seats-offer-deals-or-discounts-)

### Agent Feed

- Content: use venue guides, onsale/presale information, and the popular-event names above; do not reference TicketScan price history or alerts.
- SEO: organic landing-page and query performance are unavailable today.
- Social: no social-attributed traffic or conversion data is available.
- Paid/email/CRO/growth: attribution and funnel metrics are unavailable; repair event instrumentation before drawing conclusions.
