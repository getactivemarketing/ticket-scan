## TicketScan Daily Dashboard — 2026-08-17

Generated 2026-08-17 from the production admin API. Daily counts use UTC calendar boundaries (00:00–24:00 UTC); the API does not expose visitor/session analytics, page views, bounce rate, UTM attribution, or comparison-event counts.

### Key Metrics (24h)

| Metric | Today | Yesterday | 7-Day Avg | Trend |
|---|---:|---:|---:|:---:|
| Unique Visitors | — | — | — | — |
| New Signups | 2 | 2 | 1.9 | → |
| Watchlist Items Added | 2 | 1 | 1.6 | ↑ |
| Price Comparisons Run | — | — | — | — |
| Newsletter Subscribers | 0 | 0 | 0.0 | → |
| Price Alerts Triggered | unavailable (API 500) | unavailable | unavailable | — |
| Drip Emails Sent | 0 recorded | 0 recorded | 0 recorded | → |

The seven-day averages are based on the completed UTC days 2026-08-10 through 2026-08-16. “Drip emails sent” reflects an empty `drip_emails_sent` aggregate, not verified inbox delivery.

### Totals

- Total registered users: 219
- Total active watchlist items: 217
- Total newsletter subscribers (active): 4
- Total price history records returned: 202
- Active watchlist price targets: 0
- Total recorded price alerts: 0 in `/api/admin/stats`; alert detail endpoint is failing

### Traffic Sources (24h)

| Source | Visitors | Signups | Conversion |
|---|---:|---:|---:|
| Organic Search | — | — | — |
| Direct | — | — | — |
| Social | — | — | — |
| Paid | — | — | — |
| Email | — | — | — |
| Referral | — | — | — |

Not reportable from the current admin API: no source, referrer, UTM, visitor, or attributed-signup fields are exposed.

### Top Pages (24h)

Unavailable: page views and bounce rates are not exposed. Production smoke checks returned HTTP 200 for `/`, `/dashboard`, `/compare`, `/register`, `/watchlist`, `/world-cup-2026`, and `/blog`.

### Popular Events Being Tracked

1. Noah Kahan: The Great Divide Tour — Kia Center, Orlando — 2 watches
2. Harry Styles: Together, Together — Madison Square Garden, New York — 2 watches
3. Flyleaf with Lacey Sturm - 20th Anniversary Tour — House of Blues Chicago, Chicago — 2 watches
4. Ariana Grande - The Eternal Sunshine Tour — Barclays Center, Brooklyn — 2 watches
5. Noah Kahan: The Great Divide Tour — Citi Field, Queens — 2 watches

The API returns multiple event IDs for repeated event/venue combinations; rankings above preserve the API’s event-ID-level grouping.

### 🚨 Anomalies & Alerts

- **Critical — price-tracking outage/data gap:** newest price-history record is 2026-07-24 20:01 UTC. No records have been added for more than three weeks despite the documented four-hour cron. Check Railway cron execution, provider credentials, and database writes.
- **Critical — alert reporting failure:** `/api/admin/alerts` returns HTTP 500 (`Failed to get alerts`). The stats endpoint says zero recorded alerts, but alert activity cannot be independently validated.
- **Tracking integrity gap:** GTM loads, but source inspection found no explicit `dataLayer.push` events for signup, watchlist add, price comparison, or newsletter subscription. Conversion tracking is not currently verifiable.
- **Coverage gap:** unique visitors, page views, bounce rate, traffic sources, UTM capture, price-comparison runs, and email-attributed conversions are unavailable.
- **No >20% movement in reportable signup metric:** today’s 2 signups are approximately 7% above the 1.9/day seven-day average. Watchlist adds are approximately 27% above the 1.6/day average.

### Competitor Quick Check

- **SeatGeek:** its official blog is actively publishing 2026 event guides and promotes price-drop tracking that monitors tickets and notifies users when prices change. This reinforces TicketScan’s need to restore its own stale tracker before making “real-time” claims. [SeatGeek price-drop guide](https://seatgeek.com/blog/how-to-track-price-drops-and-find-the-best-ticket-deals-on-seatgeek) · [SeatGeek blog](https://seatgeek.com/blog)
- **StubHub:** recent official newsroom activity includes conversational ticket discovery through Claude and group-ticket buying/payment coordination. The marketplace is pushing beyond listing search into assisted purchase workflows. [StubHub on Claude](https://newsroom.stubhub.com/2026/04/23/stubhub-launches-on-claude/) · [StubHub newsroom](https://newsroom.stubhub.com/)
- **Vivid Seats:** Rewards remains a visible retention/promotion angle: buy 10 tickets and receive the 11th as reward credit. [Vivid Seats Rewards](https://www.vividseats.com/rewards)

### Feed Notes for Other Agents

- Content/social: use the five popular events above; there is no verified traffic or viral-lift signal.
- SEO/paid/CRO: do not infer channel or page performance; visitor and source reporting is unavailable.
- Email/growth: active newsletter base is 4; no drip rows are recorded; alert reporting is broken.
- Product/engineering: prioritize price-history cron recovery, `/api/admin/alerts` repair, and explicit conversion-event instrumentation.
