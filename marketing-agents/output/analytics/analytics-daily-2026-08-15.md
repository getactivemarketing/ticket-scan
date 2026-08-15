## TicketScan Daily Dashboard — 2026-08-15

Generated 2026-08-15 10:00 UTC from the production admin API. “Today” means the preceding 24 hours at generation time; 7-day averages use the available rolling seven-day totals. Visitor/page analytics are not exposed by the current admin API.

### Key Metrics (24h)

| Metric | Today | Yesterday | 7-Day Avg | Trend |
|---|---:|---:|---:|:---:|
| Unique Visitors | — | — | — | — |
| New Signups | 3 | 4 | 1.9 | ↑ |
| Watchlist Items Added | 5 | 1 | 0.7 | ↑ |
| Price Comparisons Run | — | — | — | — |
| Newsletter Subscribers | 0 | 0 | 0.0 | → |
| Price Alerts Triggered | unavailable (API 500) | unavailable | unavailable | — |
| Drip Emails Sent | 0* | 0* | 0* | → |

\* The drip endpoint returned no sent-email rows; it does not provide a 24-hour event feed, so this is “no recorded sends,” not proof that an email delivery system was exercised.

### Totals

- Total registered users: 215
- Total active watchlist items: 214
- Total newsletter subscribers (active): 4
- Total price history records returned: 202
- Active price targets: 0
- Total recorded price alerts: 0 (stats endpoint); alert-detail endpoint currently fails

### Traffic Sources (24h)

| Source | Visitors | Signups | Conversion |
|---|---:|---:|---:|
| Organic Search | — | — | — |
| Direct | — | — | — |
| Social | — | — | — |
| Paid | — | — | — |
| Email | — | — | — |
| Referral | — | — | — |

The current backend has no visitor, session, referrer, UTM, or source-attributed signup reporting endpoint.

### Top Pages (24h)

Unavailable: page-view and bounce-rate data are not exposed by the current analytics/admin integration. Live smoke checks returned HTTP 200 for `/`, `/dashboard`, `/compare`, `/register`, `/watchlist`, `/world-cup-2026`, and `/blog`.

### Popular Events Being Tracked

1. Noah Kahan: The Great Divide Tour — Kia Center, Orlando — 2 watches
2. Harry Styles: Together, Together — Madison Square Garden, New York — 2 watches
3. Flyleaf with Lacey Sturm - 20th Anniversary Tour — House of Blues Chicago, Chicago — 2 watches
4. Ariana Grande - The Eternal Sunshine Tour — Barclays Center, Brooklyn — 2 watches
5. Noah Kahan: The Great Divide Tour — Citi Field, Queens — 2 watches

The API groups by event ID, so repeated artist names at different venues remain separate entries.

### 🚨 Anomalies & Alerts

- **Critical — price tracking data gap:** newest price-history record returned was 2026-07-24 20:01 UTC. The documented four-hour tracker has produced no newer records; investigate the cron process, API credentials, and database writes immediately.
- **Tracking integrity — alert endpoint failure:** `/api/admin/alerts` returned HTTP 500 (`Failed to get alerts`). The stats endpoint reports zero recorded alerts, but alert activity cannot be independently validated until the detail endpoint is repaired.
- **Conversion instrumentation gap:** GTM loads, but source inspection found no explicit `dataLayer.push` events for signup, watchlist add, price comparison, or newsletter subscription. These conversions are not currently verifiable in this run.
- **Signup spike:** 3 signups in the last 24h versus a 1.9/day seven-day average (~58% above average).
- **Watchlist spike:** 5 watchlist adds versus a 0.7/day seven-day average (~600% above average). This is directionally positive but should be checked for bot/duplicate behavior.
- **Data coverage gap:** unique visitors, page views, bounce rate, price comparisons, traffic sources, UTM capture, and email-attributed conversions are unavailable from the current reporting surface.

### Competitor Quick Check

- **StubHub:** notable current product activity includes conversational ticket discovery through Claude (April 2026) and recent group-ticket buying/payment coordination coverage (July 30, 2026). [StubHub launches on Claude](https://newsroom.stubhub.com/2026/04/23/stubhub-launches-on-claude/) · [StubHub newsroom](https://newsroom.stubhub.com/)
- **SeatGeek:** its Android listing highlights one-tap ticket transfers, seller price recommendations, and the daily “Daily Tap” free-ticket giveaway; listing updated July 2, 2026. [Google Play listing](https://play.google.com/store/apps/details?hl=en&id=com.seatgeek.android)
- **Vivid Seats:** Rewards remains the clearest active promotion: buy 10 tickets, receive the 11th reward credit, with app enrollment. [Vivid Seats Rewards](https://www.vividseats.com/rewards?irgwc=1)

No competitor price change was verified from a primary source today. Marketing implication: TicketScan’s strongest counter-position remains independent all-in comparison plus price-history transparency—especially while the internal price tracker is stale.

### Feed Notes for Other Agents

- Content/social: use the five popular events above, but avoid claiming site traffic or viral lift.
- SEO/paid/CRO: organic, paid, landing-page, funnel, and bounce metrics are unavailable; do not infer channel performance from signups.
- Email/growth: 4 active newsletter subscribers, no recorded drip rows, and no alert-detail data; lifecycle conclusions are limited.
