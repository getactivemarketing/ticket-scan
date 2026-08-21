## TicketScan Daily Dashboard — 2026-08-21

Data pulled from the production admin API at approximately 10:00 UTC on 2026-08-21. “Today” API figures are rolling 24-hour values where noted; calendar-day buckets are used for trend calculations. Visitor/page analytics are unavailable because no GA4/GTM reporting endpoint is configured.

### Key Metrics (24h)

| Metric | Today | Yesterday | 7-Day Avg | Trend |
|---|---:|---:|---:|:---:|
| Unique Visitors | N/A | N/A | N/A | — |
| New Signups | 2 rolling 24h | 1 calendar day | 2.3/day (Aug 14–20) | → |
| Watchlist Items Added | 1 | 1 | 1.6/day (Aug 14–20) | ↓ |
| Price Comparisons Run | N/A | N/A | N/A | — |
| Newsletter Subscribers | 0 | 0 | 0/day | → |
| Price Alerts Triggered | 0 | 0 | 0/day | → |
| Drip Emails Sent | 0 reported | 0 reported | 0/day reported | → |

### Totals

- Total registered users: **228**
- Total active watchlist items: **221** (the API’s total watchlist count; no separate active/inactive flag is exposed)
- Total newsletter subscribers (active): **4**
- Total price history records returned: **202**

### Traffic Sources (24h)

| Source | Visitors | Signups | Conversion |
|---|---:|---:|---:|
| Organic Search | N/A | N/A | N/A |
| Direct | N/A | N/A | N/A |
| Social | N/A | N/A | N/A |
| Paid | N/A | N/A | N/A |
| Email | N/A | N/A | N/A |
| Referral | N/A | N/A | N/A |

UTM capture and source attribution cannot be validated from the current API or repository instrumentation.

### Top Pages (24h)

1. N/A — pageview reporting unavailable
2. N/A — pageview reporting unavailable
3. N/A — pageview reporting unavailable
4. N/A — pageview reporting unavailable
5. N/A — pageview reporting unavailable

### Popular Events Being Tracked

All five leaders are tied at two watchlist records:

1. Noah Kahan: The Great Divide Tour — Kia Center, Orlando — 2
2. Flyleaf with Lacey Sturm - 20th Anniversary Tour — House of Blues Chicago, Chicago — 2
3. World Cup Round of 16: W83 vs. W84 (Match 93) — AT&T Stadium, Arlington — 2
4. Ariana Grande - The Eternal Sunshine Tour — Barclays Center, Brooklyn — 2
5. Noah Kahan: The Great Divide Tour — Citi Field, Queens — 2

### 🚨 Anomalies & Alerts

- **Critical tracking gap:** GTM loads, but no explicit conversion-event pushes were found for signup, watchlist add, price comparison, or newsletter subscription. Treat conversion reporting as untrusted until event instrumentation and GA4 validation are added.
- **Price-history freshness gap:** the newest record returned is 2026-07-24 20:01 UTC, despite 202 active watchlist items. This indicates price tracking has not produced a fresh record for roughly four weeks, or the endpoint is only retaining stale data.
- **No alert activity:** 0 triggered price alerts and 0 watchlist items with a target price. This may be genuine, but it also means the alert funnel has no observable activity.
- **Drip reporting:** `/api/admin/drip-stats` returned no sent-stat rows. There are users at the Day 3 and Day 7 thresholds in the pending list, so confirm the cron job and email-delivery logging.
- **Growth signal:** production reports 16 users in the last 7 days and 2 in the rolling 24-hour window; calendar-day signup pace is broadly stable versus the prior week.

### Competitor Activity Notes

- StubHub demand signal: Axios reported that searches for Philadelphia 76ers games were up more than 12x year over year after the schedule release, with the Sixers described as the NBA’s hottest ticket. This is a useful content angle for demand-vs-price education, not evidence of a TicketScan price movement. [Axios report](https://www.axios.com/local/philadelphia/2026/08/18/sixers-tickets-stubhub-demand-nba)
- StubHub’s newsroom lists a new Chicago Stars FC strategic partnership announced August 5. [StubHub newsroom](https://newsroom.stubhub.com/)
- Vivid Seats is actively promoting Rewards and third-party August promo offers; verify any code or discount at checkout before publishing. [Vivid Seats Rewards](https://www.vividseats.com/rewards?irgwc=1), [Condé Nast Traveler promo coverage](https://www.cntraveler.com/story/vivid-seats-promo-code)
- No clearly documented new SeatGeek product launch was found in this quick check. SeatGeek continues merchandising August inventory with price, ticket-count, and seat-perk filters. [SeatGeek August tickets](https://seatgeek.com/august-tickets)

### Agent Feed

- Content: use the tied event leaders and the StubHub demand spike as story inputs; do not claim traffic winners.
- SEO: organic landing-page performance is unavailable until GA4/Search Console reporting is connected.
- Social: social-attributed traffic is unavailable; avoid performance claims.
- Paid Ads: paid traffic, UTM capture, and conversion data are unavailable.
- Email: active list is 4; no email-attributed conversions or drip sends are reported.
- CRO: funnel event data is unavailable; prioritize instrumentation before optimization decisions.
- Growth: 228 total users, 16 new users in the API’s seven-day window, 221 watchlist records, and zero active target-price alerts.

Source endpoints checked: `/api/admin/stats`, `/users`, `/watchlist`, `/newsletter`, `/alerts`, `/activity`, `/popular-events`, `/drip-stats`, and `/price-history` with the production admin key.
