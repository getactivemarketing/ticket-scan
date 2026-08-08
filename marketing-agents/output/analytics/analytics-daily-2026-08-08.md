## TicketScan Daily Dashboard — 2026-08-08

**Reporting window:** 2026-08-08 UTC, compared with 2026-08-07 and the prior seven calendar days (2026-08-01 through 2026-08-07). App metrics are from the production admin API. GA4 visitor/page/source metrics were not exposed to this run.

### Key Metrics (24h)

| Metric | Today | Yesterday | 7-Day Avg | Trend |
|---|---:|---:|---:|:---:|
| Unique Visitors | N/A | N/A | N/A | — |
| New Signups | 2 | 0 | 0.57 | ↑ |
| Watchlist Items Added | 1 | 0 | 0.57 | ↑ |
| Price Comparisons Run | N/A | N/A | N/A | — |
| Newsletter Subscribers | 0 | 0 | 0.00 | → |
| Price Alerts Triggered | 0 | 0 | 0.00 | → |
| Drip Emails Sent | 0 | 0 | 0.00 | → |

*The “today” bucket is based on UTC calendar dates. A comparison or visitor value is marked N/A when no authoritative event stream was available; it is not treated as zero.*

### Totals

- Total registered users: **202**
- Total active watchlist items: **204**
- Total newsletter subscribers (active): **4**
- Total price history records returned: **202**

### Traffic Sources (24h)

| Source | Visitors | Signups | Conversion |
|---|---:|---:|---:|
| Organic Search | N/A | N/A | N/A |
| Direct | N/A | N/A | N/A |
| Social | N/A | N/A | N/A |
| Paid | N/A | N/A | N/A |
| Email | N/A | N/A | N/A |
| Referral | N/A | N/A | N/A |

GA4/GTM source and UTM exports were not available through the admin API or repository instrumentation.

### Top Pages (24h)

1. N/A — GA4 pageview data unavailable
2. N/A — GA4 pageview data unavailable
3. N/A — GA4 pageview data unavailable
4. N/A — GA4 pageview data unavailable
5. N/A — GA4 pageview data unavailable

### Popular Events Being Tracked

The API returns a tie at two watchers for each of the following event records:

1. Noah Kahan: The Great Divide Tour — Kia Center, Orlando — 2 watchers
2. Harry Styles: Together, Together — Madison Square Garden, New York — 2 watchers
3. Flyleaf with Lacey Sturm - 20th Anniversary Tour — House of Blues Chicago, Chicago — 2 watchers
4. Ariana Grande - The Eternal Sunshine Tour — Barclays Center, Brooklyn — 2 watchers
5. Noah Kahan: The Great Divide Tour — Citi Field, Queens — 2 watchers

The endpoint groups by event ID, so separate dates/venues appear as separate records.

### Tracking Validation Summary

- **GTM loading:** Pass for `/`, `/compare`, `/register`, and `/dashboard`; all returned HTTP 200 and contained GTM-T476F9S4.
- **Signup, watchlist, and newsletter backend activity:** Pass at the database/API level; today’s rows are visible in the admin data.
- **Explicit conversion events:** Not verified. The code contains the GTM bootstrap but no explicit `dataLayer.push` calls for signup, watchlist add, comparison, newsletter subscribe, or UTM capture.
- **Price comparison telemetry:** Not available. Comparison requests are not represented in the admin activity feed.

See [tracking-validation-2026-08-08.md](tracking-validation-2026-08-08.md) for detail.

### 🚨 Anomalies & Alerts

- **High priority — price tracking data gap:** the newest price-history row is 2026-07-24 20:01 UTC, despite the current date being 2026-08-08. The 202 rows are stale; no price history was recorded in the reporting window.
- **High priority — conversion telemetry gap:** GTM is present, but custom conversion and UTM events are not visible in the frontend source. Marketing attribution and comparison-funnel reporting are therefore unavailable.
- **Moderate — signup spike from a low baseline:** 2 signups today versus a 0.57/day prior-seven-day average (+250%). Worth checking acquisition source once GA4 data is available.
- **Moderate — watchlist activity above baseline:** 1 add today versus a 0.57/day prior-seven-day average (+75%).
- No triggered price alerts and no drip emails have been recorded in the API totals.

### Competitor Quick Check

No clearly documented new feature launch was found in the quick scan. Current competitive signals worth monitoring:

- SeatGeek is actively merchandising August 2026 inventory and emphasizing in-product price comparison on its August ticket hub ([SeatGeek August tickets](https://seatgeek.com/august-tickets)).
- Vivid Seats continues to foreground its Rewards program, including discounts, upgrades, and perks ([Vivid Seats Rewards](https://www.vividseats.com/rewards)).
- Vivid Seats promo-code pages and third-party promotion coverage are active, so price/discount messaging remains a live competitive pressure ([Vivid Seats promo codes](https://www.vividseats.com/promo-codes.html?option=encore-savings-redeem)).

### Data Sources and Method

- Production admin API endpoints: `stats`, `users?limit=10000`, `watchlist?limit=10000`, `newsletter?limit=10000`, `alerts?limit=10000`, `popular-events`, `drip-stats`, and `price-history?limit=10000`.
- User, watchlist, newsletter, and alert daily counts were bucketed by their UTC timestamp fields.
- Visitor, pageview, bounce, traffic-source, UTM, and comparison-event metrics were unavailable from the supplied API surface.
