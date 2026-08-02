## TicketScan Daily Dashboard — 2026-08-02

Reporting window: 2026-08-01 06:00 UTC through 2026-08-02 06:00 UTC. The 7-day average uses the seven preceding rolling 24-hour windows (2026-07-25 06:00 UTC through 2026-08-01 06:00 UTC). Counts are from the authenticated live admin API unless marked unavailable.

### Key Metrics (24h)

| Metric | Today | Yesterday | 7-Day Avg | Trend |
|---|---:|---:|---:|:---:|
| Unique Visitors | N/A | N/A | N/A | — |
| New Signups | 0 | 1 | 1.86 | ↓ |
| Watchlist Items Added | 0 | 1 | 1.29 | ↓ |
| Price Comparisons Run | N/A | N/A | N/A | — |
| Newsletter Subscribers | 0 | 0 | 0.00 | → |
| Price Alerts Triggered | N/A* | N/A* | N/A* | — |
| Drip Emails Sent | 0** | 0 | N/A | — |

\* `/api/admin/alerts` returned HTTP 500. `/api/admin/stats` reports 0 triggered alerts lifetime, but that does not validate the daily count.

\*\* `/api/admin/drip-stats` returned an empty sent-statistics array. The endpoint currently shows pending users but no sent rows.

### Totals

- Total registered users: **196**
- Total watchlist items: **199** (the API exposes no soft-delete field)
- Total newsletter subscribers (active): **4**
- Total price-history records returned: **202**
- Total triggered alerts reported by stats: **0**

### Traffic Sources (24h)

| Source | Visitors | Signups | Conversion |
|---|---:|---:|---:|
| Organic Search | N/A | N/A | N/A |
| Direct | N/A | N/A | N/A |
| Social | N/A | N/A | N/A |
| Paid | N/A | N/A | N/A |
| Email | N/A | N/A | N/A |
| Referral | N/A | N/A | N/A |

No visitor, source, UTM, or attributed-signup dataset is exposed by the current admin API or persisted by the inspected frontend code.

### Top Pages (24h)

Unavailable. No page-view or bounce-rate data is exposed by the current analytics integration/API.

### Popular Events Being Tracked

The API’s event-ID-level endpoint returns many separate dates/listings. Aggregating the full watchlist response by event name gives:

1. Harry Styles: Together, Together — **19** watches
2. Backstreet Boys: Into The Millennium — **10** watches
3. Ariana Grande - The Eternal Sunshine Tour — **8** watches
4. Noah Kahan: The Great Divide Tour — **7** watches
5. Bruno Mars - The Romantic Tour — **6** watches

### 🚨 Anomalies & Alerts

- **P0 — Price tracking outage/data gap:** The newest price-history row is `2026-07-24 20:01 UTC`; there are 0 records in the current window and 0 in each of the seven preceding windows. This is incompatible with the documented four-hour cron. Pause fresh price-based marketing claims until the tracker/API credentials and scheduler are checked.
- **P0 — Conversion analytics gap:** GTM container `GTM-T476F9S4` is present in the shared Next.js layout, but no explicit `dataLayer.push` events were found for signup, watchlist add, price comparison, or newsletter success. Visitors, page views, funnels, and conversion rates are not measurable.
- **P0 — Alerts monitoring broken:** `/api/admin/alerts` returned HTTP 500. The alert count and delivery history cannot be validated.
- **P1 — UTM attribution missing:** No frontend UTM capture or persistence logic was found. Paid, social, email, and referral performance cannot be attributed.
- **P1 — Drip observability/inactivity:** `/api/admin/drip-stats` returned no sent rows and lists pending users, including users at the day-3/day-7 thresholds. Confirm scheduler execution and SMTP delivery before counting this campaign as active.
- **Directional growth signal:** 0 signups and 0 watchlist adds are below the preceding 7-day averages, but with very small volumes and broken visitor telemetry this is a monitoring alert, not proof of a traffic collapse.

### Competitor Quick Check

- **StubHub:** The official newsroom lists recent partnership activity, including Voices of America Country Music Fest (July 27), American Conference (July 22), and Chicago Stars FC (July 16). Separately, Axios reports StubHub saw nearly 200x demand and 470% higher team searches for the 76ers preseason game after the LeBron James announcement. This is a demand/partnership signal, not a confirmed pricing-feature launch. [StubHub newsroom](https://newsroom.stubhub.com/) · [Axios](https://www.axios.com/local/philadelphia/2026/07/27/lebron-james-sixers-first-game-ticket-prices)
- **SeatGeek:** Its current enterprise newsroom highlights the March ChatGPT launch, Spotify concert-discovery integration, and recent sports partnerships; no newer August feature or broad promotion was confirmed in the quick check. [SeatGeek newsroom](https://seatgeek.com/enterprise/newsroom) · [SeatGeek summer concert report](https://seatgeek.com/press/SeatGeek%20Summer%20Concert%20Report%202026)
- **Vivid Seats:** No newer official 2026 press release or major platform feature was confirmed in the quick check. Its public positioning continues to emphasize discount pricing, a Buyer Guarantee, Rewards, and promo-code offers. [Vivid Seats press](https://www.vividseats.com/press) · [Vivid Seats promotions](https://www.vividseats.com/promo-codes.html?option=group-discount-redeem)

### Agent Handoff

- Content/SEO: use the five event-interest leaders above, but do not describe them as visitor-popularity rankings.
- Social/Paid/Email: do not optimize on attributed conversions until GTM events and UTM persistence are instrumented.
- CRO: prioritize four conversion events—signup success, watchlist add success, compare completion, and newsletter success—plus a GA4/GTM page-view path.
- Growth: retention/churn cannot be calculated from the exposed endpoints; the price-tracking outage is the highest-value operational fix.

### Data Sources Checked

`/api/admin/stats`, `/api/admin/users?limit=10000`, `/api/admin/watchlist?limit=10000`, `/api/admin/newsletter?limit=10000`, `/api/admin/alerts`, `/api/admin/activity`, `/api/admin/popular-events`, `/api/admin/drip-stats`, `/api/admin/price-history?limit=10000`, local frontend source, and the live competitor quick-check pages.
