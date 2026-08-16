## TicketScan Daily Dashboard — 2026-08-16

Reporting window: **2026-08-15 06:00 UTC–2026-08-16 06:00 UTC**. The 7-day average uses the seven complete UTC windows ending at the reporting cutoff. Visitor, attribution, pageview, comparison, and bounce metrics are marked `N/A` because no reporting endpoint or event series exposes them.

### Key Metrics (24h)

| Metric | Today | Yesterday | 7-Day Avg | Trend |
|---|---:|---:|---:|:---:|
| Unique Visitors | N/A | N/A | N/A | — |
| New Signups | 2 | 2 | 1.86 | → |
| Watchlist Items Added | 1 | 5 | 1.29 | ↓ |
| Price Comparisons Run | N/A | N/A | N/A | — |
| Newsletter Subscribers | 0 | 0 | 0.00 | → |
| Price Alerts Triggered | 0 reported | N/A | N/A | — |
| Drip Emails Sent | 0 reported | N/A | N/A | — |

The watchlist-add metric is down **22%** versus the 7-day average. Signup volume is approximately **8% above** average and is treated as flat under the 20% alert threshold.

### Totals

- Total registered users: **216**
- Total active watchlist items: **215**
- Total newsletter subscribers (active): **4**
- Total price history records: **202**

### Traffic Sources (24h)

| Source | Visitors | Signups | Conversion |
|---|---:|---:|---:|
| Organic Search | N/A | N/A | N/A |
| Direct | N/A | N/A | N/A |
| Social | N/A | N/A | N/A |
| Paid | N/A | N/A | N/A |
| Email | N/A | N/A | N/A |
| Referral | N/A | N/A | N/A |

No visitor/source/UTM aggregation is exposed by the supplied admin API.

### Top Pages (24h)

1. N/A — pageview and bounce-rate data unavailable
2. N/A — pageview and bounce-rate data unavailable
3. N/A — pageview and bounce-rate data unavailable
4. N/A — pageview and bounce-rate data unavailable
5. N/A — pageview and bounce-rate data unavailable

### Popular Events Being Tracked

All five leaders are tied at two watchlist records:

1. Noah Kahan: The Great Divide Tour — Kia Center, Orlando
2. Harry Styles: Together, Together — Madison Square Garden, New York
3. Flyleaf with Lacey Sturm - 20th Anniversary Tour — House of Blues Chicago, Chicago
4. Ariana Grande - The Eternal Sunshine Tour — Barclays Center, Brooklyn
5. Noah Kahan: The Great Divide Tour — Citi Field, Queens

### Competitor Quick Check

- **SeatGeek:** Its most notable current product move is the ChatGPT app, which blends primary and resale inventory with conversational discovery, Deal Score, seat-view imagery, and seat perks. The official press page also lists the May 2026 “Game Day Your Way” enterprise suite. [SeatGeek in ChatGPT](https://seatgeek.com/press/SeatGeek%20Launches%20in%20ChatGPT) · [Game Day Your Way](https://seatgeek.com/press/SeatGeek%20Launches%20Game%20Day%20Your%20Way)
- **StubHub:** No clearly dated August 2026 product launch or broad consumer promotion surfaced in the official newsroom scan. The most relevant current official content is its Harry Styles 2026 buying guide, which is useful competitive content around an event TicketScan users are tracking. [StubHub newsroom](https://newsroom.stubhub.com/)
- **Vivid Seats:** The official offer page currently promotes “Buy 10 tickets, get the 11th on us,” with exclusions and terms. Its core consumer differentiators remain Rewards and the Lowest Price Guarantee. [Vivid Seats promotions](https://www.vividseats.com/promo-codes.html) · [Lowest Price Guarantee](https://www.vividseats.com/blog/vivid-seats-lowest-price-guarantee)

### 🚨 Anomalies & Alerts

- **Critical:** Latest price-history record is **2026-07-24 20:01 UTC**, roughly 22 days before this reporting cutoff. This conflicts with the documented four-hour tracker cadence and should be investigated first.
- **Critical:** `/api/admin/alerts?limit=1000` returned **HTTP 500** with `Failed to get alerts`. The zero shown above comes only from the stats total and is not a validated 24-hour alert count.
- **Tracking gap:** GTM container `GTM-T476F9S4` is present in the live homepage and root layout, but no explicit `dataLayer.push` conversion events were found for signup, watchlist add, price comparison, or newsletter subscription.
- **Attribution gap:** No UTM capture/persistence or traffic-source reporting was found in the checked frontend/API code.
- **Lifecycle gap:** `/api/admin/drip-stats` returned an empty sent-statistics array while its pending list contains users aged up to 12 days. Verify the cron and send log, especially the Day 3 cohort.
- **Behavior signal:** Watchlist adds fell 22% below the 7-day average even as signups held above average; inspect the post-registration activation path.

### Feed Notes for Other Agents

- Content/Social: lead with Noah Kahan, Harry Styles, Flyleaf, Ariana Grande, and Philadelphia 76ers games; the top five are tied, so do not overstate one winner.
- SEO/Paid/Email/CRO: visitor, source, page-performance, comparison, and email-attributed conversion metrics are unavailable until analytics events and an aggregation endpoint exist.
- Growth: 216 users, 13 users in the API’s rolling seven-day total, and 215 watchlist items. Activation is the clearest near-term diagnostic because signup volume is not collapsing while watchlist adds are soft.
