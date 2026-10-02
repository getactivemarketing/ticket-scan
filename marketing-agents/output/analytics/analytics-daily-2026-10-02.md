## TicketScan Daily Dashboard — 2026-10-02

Reporting window: 2026-10-01 06:00 UTC through 2026-10-02 06:00 UTC. Application activity is from the deployed admin API; GA/GTM visitor reporting is not exposed to this agent.

### Key Metrics (24h)

| Metric | Today | Yesterday | 7-Day Avg | Trend |
|---|---:|---:|---:|:---:|
| Unique Visitors | N/A | N/A | N/A | — |
| New Signups | 1 | 2 | 1.14 observed | ↓ |
| Watchlist Items Added | 1 | 0 | 0.43 observed | ↑ |
| Price Comparisons Run | N/A | N/A | N/A | — |
| Newsletter Subscribers | 0 observed | 0 observed | 0 observed | → |
| Price Alerts Triggered | 0 reported | 0 reported | 0 reported | → |
| Drip Emails Sent | 0 reported | 0 reported | 0 reported | → |

Notes: “Yesterday” is the immediately preceding UTC 24-hour window. The 7-day averages are based on the activity rows returned by `/api/admin/activity`; the endpoint currently returns only the 20 most recent rows. Visitor, comparison, acquisition-source, and page-level analytics are not available through the current admin API.

### Totals

- Total registered users: **263**
- Total active watchlist items: **255**
- Total newsletter subscribers (active): **6**
- Price history records returned: **50** (the endpoint is a latest-50 view, not a database total; newest record is 2026-07-24 20:01 UTC)

### Traffic Sources (24h)

| Source | Visitors | Signups | Conversion |
|---|---:|---:|---:|
| Organic Search | N/A | N/A | N/A |
| Direct | N/A | N/A | N/A |
| Social | N/A | N/A | N/A |
| Paid | N/A | N/A | N/A |
| Email | N/A | N/A | N/A |
| Referral | N/A | N/A | N/A |

GA4/GTM reporting and UTM capture are not connected to an accessible reporting surface. Do not use this dashboard to make channel-budget decisions until that is fixed.

### Top Pages (24h)

Unavailable: no page-view or bounce-rate data is exposed by the current admin API. Live smoke checks returned HTTP 200 for `/`, `/dashboard`, `/compare`, `/watchlist`, `/onsales`, and `/faq`.

### Popular Events Being Tracked

The popular-events endpoint reports historical watch counts, not price tracking. Top returned entries are tied at two watchlist records:

1. Harry Styles: Together, Together — Madison Square Garden, New York — 2 watches
2. Ariana Grande - The Eternal Sunshine Tour — Barclays Center, Brooklyn — 2 watches
3. NBA Finals: TBD at New York Knicks RD4 HM GM3 — Madison Square Garden, New York — 2 watches
4. World Cup: Match 68 Group L - Croatia vs Ghana — Lincoln Financial Field, Philadelphia — 2 watches
5. Noah Kahan: The Great Divide Tour — Kia Center, Orlando — 2 watches

### Competitor Quick Check

No credible new feature launch or permanent pricing change from SeatGeek, StubHub, or Vivid Seats was confirmed in the past week. Recent editorial coverage does show active promotional offers: a SeatGeek $5-off-$300+ code in a Syracuse.com ticket article and a Vivid Seats $30-off code / newsletter offer in Billboard’s Sphere guide. These are campaign or affiliate offers, not verified permanent price changes: [Syracuse.com](https://www.syracuse.com/live-entertainment/2026/10/daughtry-extends-20-years-unplugged-tour-into-2027-how-to-secure-tickets.html), [Billboard](https://www.billboard.com/culture/product-recommendations/las-vegas-sphere-residencies-concerts-1235921455/).

### 🚨 Anomalies & Alerts

- **Critical — conversion tracking unavailable:** no explicit `dataLayer.push`/`gtag` calls were found for signup, watchlist add, comparison, or newsletter subscribe. GTM is present, but event collection is unverified.
- **Critical — price data remains stale:** the latest returned price-history record is July 24; the product-status restriction remains in force. Do not publish price-history, trend, alert, or buy/wait claims.
- **High — admin alerts endpoint failing:** `/api/admin/alerts` returns HTTP 500; the backend query still references fields that do not match the live schema.
- **Medium — route mismatch:** `/onsale` returns 404 while `/onsales` returns 200. Check redirects, internal links, sitemap references, and any campaign URLs using the singular spelling.
- **Data gap — acquisition and engagement reporting:** no unique visitors, traffic sources, page views, bounce rates, comparison counts, or UTM attribution are available.
- **Positive signal:** one signup and one watchlist addition were observed in the current 24-hour window; totals increased to 263 users and 255 watchlist items.

### Recommended handoff

1. Add and verify one shared client-side analytics helper for signup, watchlist add, outbound ticket click, comparison, and newsletter subscribe events.
2. Fix `/api/admin/alerts` and add a real count query for price history rather than exposing the latest-50 row count as `total`.
3. Audit singular `/onsale` links and add a redirect if that URL has ever been published.

