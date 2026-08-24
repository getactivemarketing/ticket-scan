## TicketScan Daily Dashboard — 2026-08-24

Reporting window: 2026-08-23 10:00 UTC–2026-08-24 10:00 UTC. Database activity is available; GA/GTM event export is not exposed to this agent, so visitor, page, source, comparison, and bounce metrics are marked unavailable rather than guessed.

### Key Metrics (24h)

| Metric | Today | Yesterday | 7-Day Avg | Trend |
|---|---:|---:|---:|:---:|
| Unique Visitors | N/A | N/A | N/A | — |
| New Signups | 2 | 2 | 2.6 | ↓ |
| Watchlist Items Added | 4 | 0 | 1.7 | ↑ |
| Price Comparisons Run | N/A | N/A | N/A | — |
| Newsletter Subscribers | 1 | 0 | 0.1 | ↑ |
| Price Alerts Triggered | 0* | 0* | 0* | → |
| Drip Emails Sent | 0 | 0 | 0 | → |

*The alerts endpoint is failing with HTTP 500; the stats endpoint reports zero total triggered alerts, but the daily value is not independently verifiable until the route is fixed.

### Totals

- Total registered users: **235**
- Total active watchlist items: **227** (the API’s total includes all rows; no separate archived status exists)
- Total newsletter subscribers (active): **5**
- Total price history records: **at least 202 returned by the admin endpoint**; the endpoint does not expose a database total

### Traffic Sources (24h)

| Source | Visitors | Signups | Conversion |
|---|---:|---:|---:|
| Organic Search | N/A | N/A | N/A |
| Direct | N/A | N/A | N/A |
| Social | N/A | N/A | N/A |
| Paid | N/A | N/A | N/A |
| Email | N/A | N/A | N/A |
| Referral | N/A | N/A | N/A |

No analytics export or UTM attribution data is available through the current admin API.

### Top Pages (24h)

Unavailable: page-view and bounce-rate data is not exposed through the current API.

### Popular Events Being Tracked

The API returns a tie at two watches each for its top entries:

1. Noah Kahan: The Great Divide Tour — Kia Center, Orlando — 2
2. Flyleaf with Lacey Sturm — House of Blues Chicago — 2
3. World Cup Round of 16: W83 vs. W84 (Match 93) — AT&T Stadium — 2
4. Ariana Grande: The Eternal Sunshine Tour — Barclays Center — 2
5. Noah Kahan: The Great Divide Tour — Citi Field, Queens — 2

Also tied at two: World Cup Match 68 Croatia vs Ghana, Harry Styles at Madison Square Garden, and another Flyleaf listing.

### 🚨 Anomalies & Alerts

- **Critical data gap:** latest price-history record is 2026-07-24 20:01 UTC; no records appear for the last 30 days. Price tracking/cron or its persistence path needs investigation.
- **Critical API bug:** `/api/admin/alerts` returns HTTP 500. The route selects `pa.triggered_at` and `pa.email_sent`, but the database initializer creates `price_alerts.sent_at` only. This blocks alert reporting.
- **Tracking gap:** GTM is present on sampled pages, but explicit signup, watchlist-add, comparison, and newsletter `dataLayer` events are not present in the frontend source. These conversions cannot be validated from the current implementation.
- **Attribution gap:** no UTM capture or analytics reporting endpoint was found, so paid/social/email attribution is unavailable.
- Newsletter growth is concentrated: 1 new subscriber in the current window, with 5 active total.

### Competitor Quick Check

- SeatGeek’s newsroom lists its March 2026 ChatGPT launch, Spotify concert-discovery integration, and May “Game Day Your Way” product suite as recent notable product activity. Source: https://seatgeek.com/enterprise/newsroom
- StubHub’s newsroom highlights a July 2026 FanProtect Guarantee explainer, World Racing Group partnership, and August sports/ticket-buying content; no new consumer pricing change was identified in the scan. Source: https://newsroom.stubhub.com/
- Vivid Seats is being promoted heavily through August discount/rewards offers, including $20-off-$200+ offers and Rewards benefits. Treat coupon availability as third-party-reported and volatile. Source: https://www.wired.com/story/vivid-seats-promo-code/

### Recommended handoff

Fix the alert admin query and investigate the price-tracking write path first. Then add a small shared analytics helper for the four conversion events plus UTM persistence; without those, the other marketing agents are operating with blind spots.
