## TicketScan Daily Dashboard — 2026-08-12

**Run time:** 2026-08-12, UTC-based API snapshot  
**Data quality note:** The admin API does not expose GA/GTM visitor, source, pageview, bounce-rate, comparison, or UTM reports. Those fields are marked **N/A**, not zero.

### Key Metrics (24h)

| Metric | Today | Yesterday | 7-Day Avg | Trend |
|---|---:|---:|---:|:---:|
| Unique Visitors | N/A | N/A | N/A | ? |
| New Signups | 3 | 0 | 1.43 | ↑ |
| Watchlist Items Added | 1 | 0 | 1.00 | ↑ |
| Price Comparisons Run | N/A | N/A | N/A | ? |
| Newsletter Subscribers | 0 observed | 0 observed | 0 observed | → |
| Price Alerts Triggered | 0 reported; endpoint failed | 0 | 0 | ? |
| Drip Emails Sent | 0 reported | 0 | 0 | → |

**Calculation note:** Seven-day averages use calendar dates Aug 5–11 and include zero-activity days. Signup counts observed: Aug 5: 2, Aug 8: 2, Aug 9: 2, Aug 10: 1, Aug 11: 0, Aug 12: 3. Watchlist counts: Aug 5: 2, Aug 8: 1, Aug 9: 2, Aug 10: 1, Aug 11: 0, Aug 12: 1.

### Totals

- Total registered users: **208**
- Total active watchlist items: **208 reported**
- Total newsletter subscribers (active): **4**
- Total price history records returned: **50**

### Traffic Sources (24h)

| Source | Visitors | Signups | Conversion |
|---|---:|---:|---:|
| Organic Search | N/A | N/A | N/A |
| Direct | N/A | N/A | N/A |
| Social | N/A | N/A | N/A |
| Paid | N/A | N/A | N/A |
| Email | N/A | N/A | N/A |
| Referral | N/A | N/A | N/A |

GTM is installed, but no queryable acquisition report or UTM persistence data is available through the supplied admin endpoints.

### Top Pages (24h)

Not available. No pageview or bounce-rate feed is exposed by the admin API.

### Popular Events Being Tracked

The popular-events endpoint returned a ten-way tie at **2 watches**. Top examples:

1. Noah Kahan: The Great Divide Tour — Kia Center, Orlando — 2 watches
2. Harry Styles: Together, Together — Madison Square Garden, New York — 2 watches
3. Flyleaf with Lacey Sturm — 20th Anniversary Tour — House of Blues Chicago — 2 watches
4. Ariana Grande: The Eternal Sunshine Tour — Barclays Center, Brooklyn — 2 watches
5. World Cup: Match 68 Group L — Croatia vs Ghana — Lincoln Financial Field, Philadelphia — 2 watches

The endpoint returns event-level rows rather than a deduplicated artist/event rollup, so repeated tour names may represent separate dates.

### Competitor Quick Check

- No clearly dated new SeatGeek promotion or product launch was found in the quick scan. SeatGeek’s current support material highlights Smart Pricing, which automatically adjusts seller listing prices based on demand, recent sales, and inventory: [SeatGeek Smart Pricing](https://support.seatgeek.com/hc/en-us/articles/50928255187603-What-is-Smart-Pricing).
- StubHub’s newsroom is currently highlighting summer 2026 event trends and a Chicago Stars FC partnership: [StubHub Newsroom](https://newsroom.stubhub.com/).
- Vivid Seats continues to promote its Rewards program and maintains a promo-code landing page: [Vivid Seats Rewards](https://support.vividseats.com/support/solutions/articles/11000106875-vivid-seats-rewards), [Vivid Seats promo codes](https://www.vividseats.com/promo-codes.html?option=group-discount-redeem).
- Consumer-risk signal worth watching: recent reporting covered StubHub World Cup fulfillment litigation and proposed resale-fee restrictions. This strengthens TicketScan’s consumer-advocate angle around all-in price comparison and inventory verification.

### 🚨 Anomalies & Alerts

- **Critical — price tracking stale:** The newest price-history record returned is July 24, 2026 at 20:01 UTC; there are no August records. The four-hour tracking cron appears not to be writing current data.
- **Critical — alerts endpoint unhealthy:** `/api/admin/alerts` returned HTTP 500 (`Failed to get alerts`). The stats endpoint reports zero active/triggered alerts, but this cannot be independently verified until the endpoint is fixed.
- **High — conversion tracking incomplete:** Activity contains signup and watchlist records only. No comparison, newsletter-subscribe, or price-alert activity events were returned.
- **High — drip reporting empty:** `/api/admin/drip-stats` returned an empty stats array while 20 users are listed as pending drip eligibility. No sends are evidenced.
- **Medium — acquisition/page analytics unavailable:** Unique visitors, traffic sources, UTM capture, top pages, and bounce rate cannot be reported from the current admin API.
- **Medium — watchlist integrity check:** Stats reports 208 watchlist items, while the admin watchlist feed is paginated/limited and its returned rows are not enough to independently reconcile the total.

### Agent Handoff

- Content: prioritize Noah Kahan, Harry Styles, Flyleaf, Ariana Grande, and World Cup comparison content; demand data is tied, so avoid claiming a single winner.
- SEO: organic landing-page performance is unavailable; do not infer SEO winners from the popular-events feed.
- Social: no social-attributed traffic or conversion data is available.
- Paid Ads: pause performance conclusions until UTM/source reporting is restored.
- Email: four active subscribers total; drip delivery is unverified and should be checked before sending another campaign.
- CRO: funnel conversion rates cannot be calculated from current instrumentation.
- Growth: three signups today is above the seven-day daily average, but retention/churn signals are unavailable.

