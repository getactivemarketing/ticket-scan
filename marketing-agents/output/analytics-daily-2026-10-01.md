## TicketScan Daily Dashboard — 2026-10-01

Reporting window: **2026-09-30 10:01 UTC–2026-10-01 10:01 UTC** (database clock). The application has no visitor, pageview, bounce-rate, comparison, UTM, or traffic-source reporting endpoint, so those fields are marked N/A rather than guessed.

### Key Metrics (24h)

| Metric | Today | Yesterday | 7-Day Avg | Trend |
|---|---:|---:|---:|:---:|
| Unique Visitors | N/A | N/A | N/A | — |
| New Signups | 2 | 0 | 0.71 | ↑ |
| Watchlist Items Added | 0 | 0 | 0.29 | ↓ |
| Price Comparisons Run | N/A | N/A | N/A | — |
| Newsletter Subscribers | 0 | 0 | 0.00 | → |
| Price Alerts Triggered | 0 | 0 | 0.00 | → |
| Drip Emails Sent | 0 | 0 | 0.00 | → |

Seven-day averages use the seven complete 24-hour periods preceding the current window. Signups were the only tracked product metric above its recent baseline: 2 versus 0.71/day (+181%).

### Totals

- Total registered users: **262**
- Total active watchlist items: **254**
- Total newsletter subscribers (active): **6**
- Total price history records: **202**
- Total triggered price alerts: **0**

### Traffic Sources (24h)

| Source | Visitors | Signups | Conversion |
|---|---:|---:|---:|
| Organic Search | N/A | N/A | N/A |
| Direct | N/A | N/A | N/A |
| Social | N/A | N/A | N/A |
| Paid | N/A | N/A | N/A |
| Email | N/A | N/A | N/A |
| Referral | N/A | N/A | N/A |

No GA4/GTM export, UTM persistence report, or attribution endpoint is exposed.

### Top Pages (24h)

1. N/A — pageviews and bounce rate unavailable
2. N/A — pageviews and bounce rate unavailable
3. N/A — pageviews and bounce rate unavailable
4. N/A — pageviews and bounce rate unavailable
5. N/A — pageviews and bounce rate unavailable

### Popular Events Being Tracked

Grouped by event name and venue from the watchlist table:

1. **Harry Styles: Together, Together** — Madison Square Garden, New York — **18 watches**
2. **Backstreet Boys: Into The Millennium** — Sphere, Las Vegas — **11 watches**
3. **Ariana Grande — The Eternal Sunshine Tour** — Barclays Center, Brooklyn — **7 watches**
4. **Flyleaf with Lacey Sturm — 20th Anniversary Tour** — House of Blues Chicago, Chicago — **4 watches**
5. **Garth Brooks — Blame It All On My Roots Arena Tour** — Ball Arena, Denver — **4 watches**

### Competitor Quick Check

- **SeatGeek:** its Aug. 26 launch of “Ask SeatGeek” remains the clearest product move: conversational ticket discovery built around seat-level data. It also announced a Manchester City ticketing-technology partnership on Sep. 17. [SeatGeek press page](https://seatgeek.com/press) · [Ask SeatGeek announcement](https://seatgeek.com/press/seatgeek-launches-ask-seatgeek-bringing-conversational-ai-search-to-its-marketplace)
- **StubHub:** its newsroom is actively publishing buyer education around fees, seat-view technology, and price fluctuation; the Sep. 30 “How StubHub Fees and Pricing Work” post is especially relevant to TicketScan’s consumer-advocate positioning. [StubHub newsroom](https://newsroom.stubhub.com/)
- **Vivid Seats:** no verified new feature launch or major official promotion surfaced in this quick check.

### 🚨 Anomalies & Alerts

- **Critical:** price tracking is stale. There are 202 records, but the newest `checked_at` is **2026-07-24 20:01 UTC**; there were 0 records in the last 7 days.
- **Critical:** `/api/admin/alerts` returns HTTP 500. The route queries `price_alerts.triggered_at`, but the live table has `sent_at`; the stats total of 0 is therefore not independently validated through the admin route.
- **Critical:** GTM loads, but no explicit app-level dataLayer pushes or `gtag` calls were found for signup, watchlist add, price comparison, or newsletter subscription. Conversion reporting is not trustworthy.
- **Warning:** 0 watchlist adds in the current window versus a 0.29/day seven-day average. This may be a real lull, but the missing event instrumentation prevents funnel diagnosis.
- **Warning:** drip stats are empty and the direct `drip_emails_sent` table has 0 sends in the current and prior seven-day windows.

### Feed Notes for Other Agents

- Content/Social: lead with Harry Styles, Backstreet Boys, Ariana Grande, Flyleaf, and Garth Brooks demand signals.
- SEO/Paid/CRO: do not claim traffic, landing-page, attribution, or funnel performance until analytics events are queryable.
- Email: active subscriber base is **6**; no new subscribers are verified in this window.
- Growth: treat the 2 signup events as application activity, not full-funnel acquisition.

### Data Sources and Limitations

- Live admin API queried with the required admin header: stats, users, watchlist, newsletter, alerts, activity, popular-events, drip-stats, and price-history.
- Read-only PostgreSQL checks supplied exact rolling-window counts and grouped watchlist demand.
- Live homepage returned HTTP 200; GTM container `GTM-T476F9S4` and `gtm.js` both loaded successfully.
- Requested `analytics-tracking` skill was unavailable; repository/source inspection and live-page checks were used as the fallback.
