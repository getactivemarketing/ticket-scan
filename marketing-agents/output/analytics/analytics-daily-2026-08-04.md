## TicketScan Daily Dashboard — 2026-08-04

Window: 2026-08-03 06:00 UTC–2026-08-04 06:00 UTC, matching the 6:00 AM UTC run. Seven-day averages use the preceding seven 24-hour windows. Data source: authenticated admin API, frontend source inspection, and live-site checks.

### Key Metrics (24h)

| Metric | Today | Yesterday | 7-Day Avg | Trend |
|---|---:|---:|---:|:---:|
| Unique Visitors | N/A | N/A | N/A | — |
| New Signups | 1 | 0 | 1.29 | ↑ |
| Watchlist Items Added | 1 | 0 | 0.71 | ↑ |
| Price Comparisons Run | N/A | N/A | N/A | — |
| Newsletter Subscribers | 0 | 0 | 0.00 | → |
| Price Alerts Triggered | 0* | 0* | 0* | → |
| Drip Emails Sent | 0 | 0 | N/A | — |

\* `/api/admin/alerts` returned HTTP 500. The zero is the platform total from `/api/admin/stats`, not a fully validated 24-hour alert count.

### Totals

- Total registered users: **197**
- Total active watchlist items: **200**
- Total newsletter subscribers (active): **4**
- Total price history records: **202** (last known total; the endpoint currently returns a 50-row sample)
- Total triggered alerts: **0** (stats endpoint)

### Traffic Sources (24h)

Not available. The current admin API exposes no visitor, source, UTM, or attributed-signup data.

| Source | Visitors | Signups | Conversion |
|---|---:|---:|---:|
| Organic Search | N/A | N/A | N/A |
| Direct | N/A | N/A | N/A |
| Social | N/A | N/A | N/A |
| Paid | N/A | N/A | N/A |
| Email | N/A | N/A | N/A |
| Referral | N/A | N/A | N/A |

### Top Pages (24h)

Not available. No pageview or bounce-rate reporting is exposed by the current analytics integration/API.

### Popular Events Being Tracked

The first five results from `/api/admin/popular-events` are tied at two watchlist records each:

1. Noah Kahan: The Great Divide Tour — Kia Center, Orlando
2. Harry Styles: Together, Together — Madison Square Garden, New York
3. Flyleaf with Lacey Sturm - 20th Anniversary Tour — House of Blues Chicago
4. Ariana Grande - The Eternal Sunshine Tour — Barclays Center, Brooklyn
5. Noah Kahan: The Great Divide Tour — Citi Field, Queens

The endpoint returns venue/event IDs separately, so these are five tracked listings, not necessarily five distinct tours.

### 🚨 Anomalies & Alerts

- **Critical — conversion tracking gap:** GTM is present, but no explicit runtime conversion events were found for signup, watchlist add, price comparison, or newsletter subscription.
- **Critical — attribution gap:** No frontend UTM capture or persistence logic was found; paid, social, referral, and email attribution cannot be trusted.
- **High — analytics gap:** Unique visitors, traffic sources, top pages, bounce rate, and comparison completions are unavailable.
- **High — price tracking stale:** The newest price-history record is `2026-07-24T20:01:07Z`, roughly 10 days before this dashboard window. The expected four-hour tracking cadence is not being met.
- **High — alert monitoring broken:** `/api/admin/alerts` returned HTTP 500 while `/api/admin/stats` reports zero triggered alerts.
- **High — drip campaign inactive:** `/api/admin/drip-stats` returned no sent rows and 20 pending users, including users at or beyond day-3/day-7 milestones.
- **Watch — small-sample growth:** one signup and one watchlist add today are above their low seven-day averages, but the sample is too small for a meaningful growth conclusion.

### Competitor Quick Check

- **SeatGeek:** Its newsroom currently highlights the Game Day Your Way product suite, while its support documentation describes Smart Pricing as demand-, sales-, and inventory-driven automatic repricing. This is relevant competitive context, but not a confirmed launch today. [SeatGeek newsroom](https://seatgeek.com/enterprise/newsroom) · [Smart Pricing](https://support.seatgeek.com/hc/en-us/articles/50928255187603-What-is-Smart-Pricing)
- **StubHub:** Its newsroom’s notable recent item is a July 27, 2026 strategic partnership with Chicago Stars FC. No new buyer-pricing feature or broad promotion was confirmed in today’s scan. [StubHub newsroom](https://newsroom.stubhub.com/)
- **Vivid Seats:** No material new product launch was confirmed. Its current consumer-facing positioning continues to emphasize all-in pricing and rewards; treat third-party coupon claims as unverified. [Vivid Seats support](https://support.vividseats.com/support/solutions/articles/1000210422-does-vivid-seats-offer-deals-or-discounts-)

### Agent Handoff

- Content: use the five tied events above as a “what fans are tracking” signal; do not call it visitor popularity.
- SEO: organic landing-page performance is unavailable until pageview/source reporting is wired.
- Social/Paid/Email: do not optimize against conversion or attribution numbers until UTM and event tracking are implemented.
- CRO: prioritize signup, watchlist-add, compare-completion, and newsletter-success events.
- Growth: retention and churn cannot be calculated from the exposed endpoints.

