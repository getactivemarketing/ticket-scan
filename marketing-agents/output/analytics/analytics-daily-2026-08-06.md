## TicketScan Daily Dashboard — 2026-08-06

Reporting window: 2026-08-05 06:00 UTC–2026-08-06 06:00 UTC. “Today” and “yesterday” use consecutive 24-hour UTC windows. The API activity feed is limited to its most recent 20 records, and the users/watchlist feeds are paginated; unavailable analytics are marked `N/A` rather than estimated.

### Key Metrics (24h)

| Metric | Today | Yesterday | 7-Day Avg | Trend |
|---|---:|---:|---:|:---:|
| Unique Visitors | N/A | N/A | N/A | — |
| New Signups | 2 | 1 | 1.29 | ↑ |
| Watchlist Items Added | 2 | 1 | 1.00 | ↑ |
| Price Comparisons Run | N/A | N/A | N/A | — |
| Newsletter Subscribers | 0 | N/A | N/A | — |
| Price Alerts Triggered | 0 | N/A | N/A | → |
| Drip Emails Sent | 0 reported | N/A | N/A | → |

Notes: the signup/watchlist 7-day averages are calculated from the seven complete UTC windows ending at the reporting cutoff. Newsletter, alert, and drip endpoints do not provide a usable comparable daily series.

### Totals

- Total registered users: **200**
- Total active watchlist items: **203**
- Total newsletter subscribers (active): **4**
- Total price history records: **50 reported by endpoint** (latest returned record: 2026-07-24 20:01 UTC)

### Traffic Sources (24h)

| Source | Visitors | Signups | Conversion |
|---|---:|---:|---:|
| Organic Search | N/A | N/A | N/A |
| Direct | N/A | N/A | N/A |
| Social | N/A | N/A | N/A |
| Paid | N/A | N/A | N/A |
| Email | N/A | N/A | N/A |
| Referral | N/A | N/A | N/A |

GTM is installed, but no admin reporting endpoint exposed visitor/source/UTM data in this run.

### Top Pages (24h)

1. N/A — pageview and bounce-rate data unavailable
2. N/A — pageview and bounce-rate data unavailable
3. N/A — pageview and bounce-rate data unavailable
4. N/A — pageview and bounce-rate data unavailable
5. N/A — pageview and bounce-rate data unavailable

### Popular Events Being Tracked

The API returns ties at the top (watch count 2):

1. Noah Kahan: The Great Divide Tour — Kia Center, Orlando
2. Harry Styles: Together, Together — Madison Square Garden, New York
3. Flyleaf with Lacey Sturm - 20th Anniversary Tour — House of Blues Chicago
4. Ariana Grande - The Eternal Sunshine Tour — Barclays Center, Brooklyn
5. Noah Kahan: The Great Divide Tour — Citi Field, Queens

### Competitor Quick Check

- SeatGeek’s notable current product positioning is its ChatGPT app, announced March 31, 2026, which supports natural-language ticket discovery; its official product materials also highlight Deal Score and Seat Perks. [SeatGeek ChatGPT announcement](https://seatgeek.com/press/SeatGeek%20Launches%20in%20ChatGPT) · [SeatGeek Next Fan Up](https://seatgeek.com/enterprise/release/next-fan-up)
- StubHub’s latest notable official product activity found was Distribution Manager, an AI-assisted self-serve tool for rights holders, announced March 18, 2026. Its newsroom is also promoting summer 2026 event-trend coverage. [StubHub Distribution Manager](https://newsroom.stubhub.com/2026/03/18/stubhub-launches-distribution-manager-an-ai-powered-tool-for-artists-teams-and-venues/) · [StubHub newsroom](https://newsroom.stubhub.com/)
- No verified new Vivid Seats feature launch or first-party promotion was found in this quick check. Treat third-party coupon claims as unverified.

### 🚨 Anomalies & Alerts

- **Critical data gap:** price history has no record newer than July 24, despite the platform’s documented four-hour tracking cadence.
- **Endpoint failure:** `/api/admin/alerts` returned `{ success: false, error: "Failed to get alerts" }`; today’s zero alert count is from `/api/admin/stats`, not a successful alert-detail query.
- **Tracking gap:** GTM container `GTM-T476F9S4` is present on the homepage, but the frontend has no explicit conversion-event pushes for signup, watchlist add, price comparison, or newsletter subscribe. Backend activity currently exposes only `signup` and `watchlist` events.
- **Reporting gap:** no unique visitors, traffic sources/UTMs, top pages, bounce rate, or price-comparison event series is available from the supplied admin endpoints.
- **Drip gap:** `/api/admin/drip-stats` reports an empty sent-statistics array and 20 pending users; verify the scheduler and send log before relying on lifecycle performance.

### Feed Notes for Other Agents

- Content/Social: current strongest tracked-interest signals are Noah Kahan, Harry Styles, Flyleaf, Ariana Grande, and World Cup matches.
- SEO/Paid/Email/CRO: visitor, attribution, page-performance, comparison, and email-conversion metrics are unavailable until event-level analytics are wired and queryable.
- Growth: 200 total users, 9 users this week, 2 in the latest 24-hour window; 203 total watchlist items.
