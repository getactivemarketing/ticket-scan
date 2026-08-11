## TicketScan Daily Dashboard — 2026-08-11

**Reporting basis:** authenticated admin API snapshot taken 2026-08-11 UTC. “Today” is a rolling 24-hour window where the endpoint data supports timestamps; 7-day averages use the prior seven UTC calendar days when available. Visitor, pageview, attribution, bounce-rate, and comparison telemetry is not exposed by the current admin API.

### Key Metrics (24h)

| Metric | Today | Yesterday | 7-Day Avg | Trend |
|---|---:|---:|---:|:---:|
| Unique Visitors | unavailable | unavailable | unavailable | — |
| New Signups | 1 | 1 | 1.14 | ↓ |
| Watchlist Items Added | 1 | 0 | 1.00 | → |
| Price Comparisons Run | unavailable | unavailable | unavailable | — |
| Newsletter Subscribers | 0 | 0 | 0.00 | → |
| Price Alerts Triggered | unavailable — endpoint failing | unavailable | unavailable | — |
| Drip Emails Sent | 0 | 0 | 0.00 | → |

### Totals

- Total registered users: **205**
- Total active watchlist items: **207**
- Total newsletter subscribers (active): **4**
- Total price history records: **202**

### Traffic Sources (24h)

| Source | Visitors | Signups | Conversion |
|---|---:|---:|---:|
| Organic Search | unavailable | unavailable | unavailable |
| Direct | unavailable | unavailable | unavailable |
| Social | unavailable | unavailable | unavailable |
| Paid | unavailable | unavailable | unavailable |
| Email | unavailable | unavailable | unavailable |
| Referral | unavailable | unavailable | unavailable |

GA4/GTM reporting is not connected to this agent’s data feed, and UTM values are not persisted in the application source.

### Top Pages (24h)

Unavailable: pageview and bounce-rate data is not exposed by the admin API or an analytics export.

### Popular Events Being Tracked

1. Noah Kahan: The Great Divide Tour — Kia Center, Orlando — 2 watches
2. Harry Styles: Together, Together — Madison Square Garden, New York — 2 watches
3. Flyleaf with Lacey Sturm - 20th Anniversary Tour — House of Blues Chicago, Chicago — 2 watches
4. Ariana Grande - The Eternal Sunshine Tour — Barclays Center, Brooklyn — 2 watches
5. Noah Kahan: The Great Divide Tour — Citi Field, Queens — 2 watches

### Competitor Activity Notes

- **SeatGeek:** its newsroom lists the March 2026 ChatGPT launch and February 2026 Spotify concert-discovery integration, both relevant to natural-language event discovery and acquisition surfaces. [SeatGeek in ChatGPT](https://seatgeek.com/press/SeatGeek%20Launches%20in%20ChatGPT) · [Spotify integration](https://seatgeek.com/enterprise/newsroom)
- **StubHub:** its newsroom shows July partnership expansion plus recent FanProtect and group-ticket-buying education. [StubHub newsroom](https://newsroom.stubhub.com/)
- **Vivid Seats:** current first-order discount messaging is visible on its promo page; verify terms at checkout before using it in competitive copy. [Vivid Seats promo page](https://www.vividseats.com/promo-codes.html)

### 🚨 Anomalies & Alerts

- **P0 — Price tracking stale:** newest price-history record is **2026-07-24 20:01 UTC**, despite 202 active watchlist items. No price data exists in the reporting window.
- **P0 — Alert reporting broken:** `GET /api/admin/alerts?limit=1000` returned HTTP 500 (`Failed to get alerts`). Triggered-alert totals cannot be independently validated.
- **P1 — Conversion analytics gap:** no explicit `dataLayer.push` events were found for signup, watchlist add, price comparison, or newsletter subscribe.
- **P1 — Attribution gap:** no first-touch/last-touch UTM persistence was found; channel performance and paid-campaign conversion cannot be reported.
- **P1 — Funnel visibility gap:** unique visitors, top pages, bounce rate, and comparisons are unavailable from the current admin surface.
- **Watch — Drip telemetry:** `/api/admin/drip-stats` reports zero sent rows and exposes no delivery, open, click, bounce, or unsubscribe metrics.

### Handoff Notes

- Content/SEO: use the five tied popular events as directional topics only; event-level demand is sparse.
- Paid/Social/Email/CRO: do not claim channel ROI or conversion rates from this snapshot.
- Engineering: repair the price-tracker schedule and alert endpoint before using price-intelligence claims in campaign copy.
