## TicketScan Daily Dashboard — 2026-07-31

_Reporting cutoff: 06:00 UTC. “Today” means the rolling 24 hours from 2026-07-30 06:00 UTC through 2026-07-31 06:00 UTC. The 7-day average uses the seven preceding 24-hour windows. Counts come from the live admin API unless marked unavailable._

### Key Metrics (24h)

| Metric | Today | Yesterday | 7-Day Avg | Trend |
|---|---:|---:|---:|:---:|
| Unique Visitors | N/A | N/A | N/A | — |
| New Signups | 4 | 1 | 1.71 | ↑ |
| Watchlist Items Added | 2 | 0 | 1.29 | ↑ |
| Price Comparisons Run | N/A | N/A | N/A | — |
| Newsletter Subscribers | 0 | 0 | 0.00 | → |
| Price Alerts Triggered | N/A* | N/A* | N/A* | — |
| Drip Emails Sent | 0** | 0 | 0.00 | → |

\* `/api/admin/alerts` returned HTTP 500, so daily alert counts cannot be validated. The summary endpoint reports 0 triggered alerts overall.

\*\* `/api/admin/drip-stats` returned an empty send-statistics array; 0 means no rows were reported, not proof that email delivery instrumentation is complete.

### Totals

- Total registered users: **195**
- Total active watchlist items: **198** (the API has no soft-delete field; this is total watchlist rows)
- Total newsletter subscribers (active): **4**
- Total price history records: **202**
- Watchlist rows with target prices: **0**

### Traffic Sources (24h)

| Source | Visitors | Signups | Conversion |
|---|---:|---:|---:|
| Organic Search | N/A | N/A | N/A |
| Direct | N/A | N/A | N/A |
| Social | N/A | N/A | N/A |
| Paid | N/A | N/A | N/A |
| Email | N/A | N/A | N/A |
| Referral | N/A | N/A | N/A |

GA4/GTM reporting endpoints are not available in this project, and UTM attribution is not persisted by the inspected frontend/API code.

### Top Pages (24h)

Unavailable. No page-view or bounce-rate dataset is exposed by the admin API, and the GTM container currently has no confirmed GA4 page-view reporting connection.

### Popular Events Being Tracked

The API returned a tie at two watches per event record. The first five records returned were:

1. Noah Kahan: The Great Divide Tour — Kia Center, Orlando — **2 watches**
2. Harry Styles: Together, Together — Madison Square Garden, New York — **2 watches**
3. Flyleaf with Lacey Sturm - 20th Anniversary Tour — House of Blues Chicago, Chicago — **2 watches**
4. Ariana Grande - The Eternal Sunshine Tour — Barclays Center, Brooklyn — **2 watches**
5. Noah Kahan: The Great Divide Tour — Citi Field, Queens — **2 watches**

The endpoint groups by event ID, so separate dates/venues appear as separate records.

### Competitor Activity

- **StubHub:** Its newsroom reports that it became the official ticket marketplace partner of Voices of America Country Music Fest on July 27, 2026. This is partnership activity, not a consumer pricing change. [StubHub newsroom](https://newsroom.stubhub.com/)
- **Vivid Seats:** A July 2026 deal report highlighted a 10% first-order promo, while Vivid’s official Lowest Price Guarantee advertises 115% of the difference as account credit on eligible comparisons. [WIRED deal report](https://www.wired.com/story/vivid-seats-promo-code/), [Vivid Seats Lowest Price Guarantee](https://priceguarantee.vividseats.com/)
- **SeatGeek:** No notable July 31 launch or broad consumer promotion was found in the quick scan. Its current support materials continue to emphasize price recommendations/Deal Score. [SeatGeek support](https://support.seatgeek.com/hc/en-us/articles/360012945474-What-is-SeatGeek)

### 🚨 Anomalies & Alerts

- **P0 — Price tracking data gap:** The newest price-history row is timestamped **2026-07-24 20:01 UTC**. There were 0 records in the current 24h window and only 10 in the prior seven-day comparison windows. Investigate the price-tracking cron/API credentials before using price content in campaigns.
- **P0 — Conversion analytics gap:** GTM is present globally, but no signup, watchlist-add, price-comparison, newsletter, or confirmed GA4 event wiring was found in the inspected implementation. Visitor, page, source, UTM, conversion, and bounce metrics are therefore unavailable.
- **P1 — Alerts endpoint broken:** `/api/admin/alerts` returned HTTP 500 today. The dashboard cannot verify alert volume or delivery status until fixed.
- **P1 — Alert adoption is zero:** The stats endpoint reports **0** watchlist rows with a target price. The alert CTA/input path should be checked alongside the broken reporting endpoint.
- Signups are **133% above** yesterday and **133% above** the preceding 7-day average; watchlist adds are up from zero yesterday and **55% above** the preceding 7-day average. These are small absolute samples, so treat as directional rather than a growth breakout.

### Feed Notes for Other Agents

- **Content/SEO:** Use the tied event interest carefully; World Cup and major-tour records are present, but event-level demand is sparse.
- **Social/Paid/Email:** Do not claim traffic or attributed conversions until GA4/GTM event wiring is confirmed.
- **CRO/Growth:** Prioritize target-price capture, alert observability, and conversion event instrumentation.
- **All agents:** Price-based claims should be paused or labeled historical until the July 24 data gap is explained.

### Data Sources Checked

`/api/admin/stats`, `/api/admin/users?limit=10000`, `/api/admin/watchlist?limit=10000`, `/api/admin/newsletter?limit=10000`, `/api/admin/alerts?limit=10000`, `/api/admin/popular-events`, `/api/admin/drip-stats`, and `/api/admin/price-history?limit=10000`.
