## TicketScan Daily Dashboard — 2026-08-03

Window: rolling 24 hours ending approximately 2026-08-03 10:00 UTC. Seven-day averages use the preceding seven rolling 24-hour windows. Data source: authenticated admin API, plus code/live-site tracking checks.

### Key Metrics (24h)

| Metric | Today | Yesterday | 7-Day Avg | Trend |
|---|---:|---:|---:|:---:|
| Unique Visitors | N/A | N/A | N/A | — |
| New Signups | 0 | 0 | 1.57 | ↓ |
| Watchlist Items Added | 0 | 0 | 1.00 | ↓ |
| Price Comparisons Run | N/A | N/A | N/A | — |
| Newsletter Subscribers | 0 | 0 | 0.00 | → |
| Price Alerts Triggered | 0* | 0* | 0* | → |
| Drip Emails Sent | 0 | 0 | N/A | — |

\* `/api/admin/alerts` returned HTTP 500. Zero is the platform total reported by `/api/admin/stats`, not a fully validated 24-hour alert count.

### Totals

- Total registered users: **196**
- Total active watchlist items: **199**
- Total newsletter subscribers (active): **4**
- Total price history records: **202**
- Total triggered alerts: **0** (stats endpoint)

### Traffic Sources (24h)

Not available. The current backend does not expose visitor, source, UTM, or attributed-signup data through the admin API.

### Top Pages (24h)

Not available. No pageview or bounce-rate data is exposed by the current analytics integration/API.

### Popular Events Being Tracked

The first five results from `/api/admin/popular-events` are tied at two watchlist records each:

1. Noah Kahan: The Great Divide Tour — Kia Center, Orlando
2. Harry Styles: Together, Together — Madison Square Garden, New York
3. Flyleaf with Lacey Sturm - 20th Anniversary Tour — House of Blues Chicago
4. Ariana Grande - The Eternal Sunshine Tour — Barclays Center, Brooklyn
5. Noah Kahan: The Great Divide Tour — Citi Field, Queens

### 🚨 Anomalies & Alerts

- **Tracking gap — high priority:** GTM container `GTM-T476F9S4` is present on all five sampled live routes, but no explicit `dataLayer.push` conversion events were found for signup, watchlist add, price comparison, or newsletter subscription.
- **UTM gap — high priority:** No frontend UTM capture or persistence logic was found. Paid and email attribution cannot currently be trusted.
- **Analytics gap — high priority:** Unique visitors, traffic sources, top pages, bounce rate, and comparison completions are not available through the current API/integration.
- **Price tracking stale — high priority:** The newest price-history record is `2026-07-24T20:01:07Z`, approximately 9.6 days old at the dashboard window end. The expected four-hour tracking cadence is not being met.
- **Alerts monitoring broken — high priority:** `/api/admin/alerts` returned HTTP 500; investigate the route/database failure before relying on alert counts.
- **Drip campaign inactive:** `/api/admin/drip-stats` returned no sent rows and 20 pending users, including users at or beyond the day-3/day-7 milestones.
- **Growth signal:** signups were 0 versus a preceding seven-day average of 1.57; small sample, but worth watching.

### Competitor Quick Check

- **SeatGeek:** Smart Pricing remains documented as an automated listing-price adjustment based on demand, recent sales, and inventory. Its all-in pricing is also established, not a new launch. See [Smart Pricing](https://support.seatgeek.com/hc/en-us/articles/50928255187603-What-is-Smart-Pricing) and [all-in pricing](https://seatgeek.com/blog/seatgeek-all-in-pricing-explained-how-to-avoid-hidden-ticket-fees).
- **StubHub:** The notable recent activity is its July 27 strategic partnership with Chicago Stars FC, rather than a confirmed new buyer pricing feature. See the [StubHub newsroom](https://newsroom.stubhub.com/).
- **Vivid Seats:** Rewards remains the visible loyalty lever—stamps, discounts, upgrades, and perks—with no authoritative source confirming a new material promotion today. See [Vivid Seats Rewards](https://www.vividseats.com/rewards).

### Agent Handoff

- Content: use the five tied events above as a “what fans are tracking” signal; do not claim visitor popularity.
- SEO: organic landing-page performance is unavailable until pageview/source reporting is wired.
- Social/Paid/Email: do not optimize against conversion or attribution numbers until UTM and event tracking are implemented.
- CRO: prioritize signup, watchlist add, compare completion, and newsletter-success events.
- Growth: retention/churn cannot be calculated from the exposed endpoints.

