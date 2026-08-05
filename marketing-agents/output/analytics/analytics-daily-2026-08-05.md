## TicketScan Daily Dashboard — 2026-08-05

Window: 2026-08-04 06:00 UTC–2026-08-05 06:00 UTC. Yesterday is the immediately preceding 24-hour window. Seven-day averages use the seven windows ending 2026-08-04 06:00 UTC. Data source: authenticated admin API, frontend source inspection, and live production checks.

### Key Metrics (24h)

| Metric | Today | Yesterday | 7-Day Avg | Trend |
|---|---:|---:|---:|:---:|
| Unique Visitors | N/A | N/A | N/A | — |
| New Signups | 1 | 1 | 1.00 | → |
| Watchlist Items Added | 1 | 1 | 0.57 | ↑ |
| Price Comparisons Run | N/A | N/A | N/A | — |
| Newsletter Subscribers | 0 | 0 | 0.00 | → |
| Price Alerts Triggered | N/A* | N/A* | N/A* | — |
| Drip Emails Sent | 0 | 0 | N/A | — |

* `/api/admin/alerts` returned HTTP 500. `/api/admin/stats` reports 0 total triggered alerts, but a 24-hour alert count cannot be validated.

### Totals

- Total registered users: **198**
- Total active watchlist items: **201**
- Total newsletter subscribers (active): **4**
- Total price history records: **202 last-known records**; the endpoint returns only a 50-row sample and does not expose the full count.
- Total triggered alerts: **0** according to `/api/admin/stats`; alert detail endpoint is failing.

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

### Popular Events Being Tracked

The endpoint returns tied event listings, not unique tour-level popularity. Top five returned listings:

1. Noah Kahan: The Great Divide Tour — Kia Center, Orlando — 2 watches
2. Harry Styles: Together, Together — Madison Square Garden, New York — 2 watches
3. Flyleaf with Lacey Sturm - 20th Anniversary Tour — House of Blues Chicago — 2 watches
4. Ariana Grande - The Eternal Sunshine Tour — Barclays Center, Brooklyn — 2 watches
5. Noah Kahan: The Great Divide Tour — Citi Field, Queens — 2 watches

### 🚨 Anomalies & Alerts

- **Critical — conversion instrumentation gap:** GTM is present, but no explicit runtime events were found for signup, watchlist add, price comparison, or newsletter subscription.
- **Critical — attribution gap:** No UTM capture or persistence logic was found; paid, social, referral, and email attribution cannot be trusted.
- **High — analytics gap:** Unique visitors, traffic sources, top pages, bounce rate, and comparison completions remain unavailable.
- **High — price tracking stale:** The newest price-history record is `2026-07-24T20:01:07Z`, about 11 days before this dashboard window. The expected four-hour cadence is not being met.
- **High — alert monitoring broken:** `/api/admin/alerts` returned HTTP 500 while stats report zero triggered alerts.
- **High — drip campaign inactive:** `/api/admin/drip-stats` returned no sent rows and 20 pending users, including users at or beyond the day-3 milestone.
- **Watch — small sample:** Watchlist adds were 75% above the seven-day average (1 versus 0.57), but this is one item versus a very small baseline.

### Competitor Quick Check

- **SeatGeek:** No August 5 launch or promotion was confirmed. Its official newsroom still highlights the May 19 “Game Day Your Way” product suite and a March 31 ChatGPT launch; both are relevant product-positioning signals, not same-day news. [SeatGeek newsroom](https://seatgeek.com/enterprise/newsroom) · [Game Day Your Way](https://seatgeek.com/press/SeatGeek%20Launches%20Game%20Day%20Your%20Way)
- **StubHub:** No new buyer-facing pricing feature or broad August 5 promotion was confirmed in the official newsroom scan. [StubHub newsroom](https://newsroom.stubhub.com/)
- **Vivid Seats:** No material new official product launch was found in the current press scan. Treat third-party August coupon claims as unverified; Vivid itself warns that third-party promotions may not work. [Vivid Seats press](https://www.vividseats.com/press) · [Vivid Seats support](https://support.vividseats.com/support/solutions/articles/1000210422-does-vivid-seats-offer-deals-or-discounts-)

### Agent Handoff

- Content: use the five tied listings as a “what fans are tracking” signal; do not call it visitor popularity.
- SEO: organic landing-page performance is unavailable until pageview/source reporting is wired.
- Social/Paid/Email: do not optimize against conversion or attribution numbers until UTM and event tracking are implemented.
- CRO: prioritize signup, watchlist-add, compare-completion, and newsletter-success events.
- Growth: retention and churn cannot be calculated from the exposed endpoints.

