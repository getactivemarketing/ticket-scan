## TicketScan Daily Dashboard — 2026-08-18

Generated 2026-08-18 from the production admin API. “Today” means the preceding 24 hours ending 2026-08-18 06:00 UTC; “yesterday” is the prior 24-hour window. Seven-day averages use completed UTC-day data available from the full users/watchlist endpoints. Visitor, page, source, and comparison analytics are not exposed by the current admin API.

### Key Metrics (24h)

| Metric | Today | Yesterday | 7-Day Avg | Trend |
|---|---:|---:|---:|:---:|
| Unique Visitors | — | — | — | — |
| New Signups | 4 | 2 | 2.0 | ↑ |
| Watchlist Items Added | 3 | 1 | 1.4 | ↑ |
| Price Comparisons Run | — | — | — | — |
| Newsletter Subscribers | 0 | 0 | — | → |
| Price Alerts Triggered | unavailable (API 500) | unavailable | unavailable | — |
| Drip Emails Sent | 0 recorded* | 0 recorded* | 0 recorded* | → |

\* `/api/admin/drip-stats` returned an empty sent-email aggregate; this is not proof of inbox delivery. Newsletter history is not available as a complete daily event stream, so its seven-day average is not calculated.

### Totals

- Total registered users: **222**
- Total active watchlist items: **219**
- Total newsletter subscribers (active): **4**
- Total price-history records reported by endpoint: **50** (newest record: 2026-07-24 20:01 UTC; endpoint returns a limited result set)
- Active watchlist price targets: **0**
- Total recorded price alerts: **0** in `/api/admin/stats`; alert detail endpoint is failing

### Traffic Sources (24h)

| Source | Visitors | Signups | Conversion |
|---|---:|---:|---:|
| Organic Search | — | — | — |
| Direct | — | — | — |
| Social | — | — | — |
| Paid | — | — | — |
| Email | — | — | — |
| Referral | — | — | — |

The current backend exposes no visitor, session, referrer, UTM, or source-attributed signup reporting.

### Top Pages (24h)

Unavailable: page views and bounce rates are not exposed by the current analytics/admin integration. Production smoke checks returned HTTP 200 for `/`, `/dashboard`, `/compare`, `/register`, and `/blog`; GTM was present in each response.

### Popular Events Being Tracked

1. Noah Kahan: The Great Divide Tour — Kia Center, Orlando — 2 watches
2. Harry Styles: Together, Together — Madison Square Garden, New York — 2 watches
3. Flyleaf with Lacey Sturm - 20th Anniversary Tour — House of Blues Chicago, Chicago — 2 watches
4. Ariana Grande - The Eternal Sunshine Tour — Barclays Center, Brooklyn — 2 watches
5. Noah Kahan: The Great Divide Tour — Citi Field, Queens — 2 watches

The API groups by event ID, so repeated event names at different venues remain separate entries.

### 🚨 Anomalies & Alerts

- **Critical — price-tracking data gap:** newest price-history record is 2026-07-24 20:01 UTC. No newer records were returned despite the documented four-hour tracker. Check Railway cron execution, provider credentials, and database writes.
- **Critical — alert reporting failure:** `/api/admin/alerts` returned HTTP 500 (`Failed to get alerts`). Stats report zero alerts, but alert activity cannot be independently validated.
- **Tracking integrity gap:** GTM loads, but source inspection found no explicit `dataLayer.push` events for signup, watchlist add, price comparison, or newsletter subscription.
- **Signup spike:** 4 signups versus a 2.0/day seven-day average (**+100%**). Confirm these are legitimate registrations.
- **Watchlist spike:** 3 adds versus a 1.4/day seven-day average (**+110%**). Check for automated or duplicate behavior.
- **Coverage gap:** unique visitors, page views, bounce rate, traffic sources, UTM capture, price comparisons, and email-attributed conversions are unavailable.

### Competitor Quick Check

- **SeatGeek:** its current editorial/product messaging emphasizes price alerts, Deal Score, interactive seat maps, multiple-event tracking, and all-in pricing. This is a direct overlap with TicketScan’s value proposition; the differentiator should be cross-marketplace comparison and independent price history. [SeatGeek price-drop guide](https://seatgeek.com/blog/how-to-track-price-drops-and-find-the-best-ticket-deals-on-seatgeek) · [SeatGeek all-in pricing](https://seatgeek.com/blog/seatgeek-all-in-pricing-explained-how-to-avoid-hidden-ticket-fees)
- **Vivid Seats:** its official rewards page promotes “buy 10 tickets, get the 11th on us” reward credit. That is a visible retention hook to monitor in lifecycle comparisons. [Vivid Seats Rewards](https://www.vividseats.com/rewards?irgwc=1)
- **StubHub:** no fresh, verifiable product launch or pricing change was found in this quick check. Continue monitoring its newsroom and app surfaces.

### Feed Notes for Other Agents

- Content/social: use the five popular events above; there is no verified traffic or viral-lift signal.
- SEO/paid/CRO: do not infer channel or page performance; visitor, source, and bounce data are unavailable.
- Email/growth: active newsletter base is 4; no drip rows are recorded; alert reporting is broken.
- Product/engineering: prioritize price-history cron recovery, `/api/admin/alerts` repair, and explicit conversion-event instrumentation.

