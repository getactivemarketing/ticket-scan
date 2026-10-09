## TicketScan Daily Dashboard — 2026-10-09

**Data cutoff:** 2026-10-09 10:00 UTC (06:00 America/New_York). Database metrics are from the deployed admin API. “Unavailable” means the current API/GTM setup does not expose that metric; it is not a zero.

### Key Metrics (24h)

| Metric | Today | Yesterday | 7-Day Avg | Trend |
|---|---:|---:|---:|---|
| Unique Visitors | Unavailable | Unavailable | Unavailable | — |
| New Signups | 0 | 0 | 0.14/day | ↓ |
| Watchlist Items Added | 0 | 0 | 0.14/day | ↓ |
| Price Comparisons Run | Unavailable | Unavailable | Unavailable | — |
| Newsletter Subscribers | 0 | 0 | 0.00/day | → |
| Price Alerts Triggered | Unavailable; `/api/admin/alerts` returned 500 | Unavailable | Unavailable | ⚠ |
| Drip Emails Sent | 0 recorded | 0 recorded | 0 recorded | → |

The 7-day averages are calculated from the seven completed UTC 24-hour windows ending at the cutoff. Signups and watchlist additions are database records; visitor, comparison, alert, and email-delivery metrics are not instrumented in a queryable analytics feed.

### Totals

- Total registered users: **264**
- Total active watchlist items: **256** (watchlist rows; do not interpret as price tracking)
- Total active newsletter subscribers: **6**
- Price-history records returned: **50** (the admin endpoint is capped at 50, so this is not a database-wide total; newest returned record: 2026-07-24 20:01 UTC)

### Traffic Sources (24h)

Not available. No GA4/GTM export or admin endpoint exposes visitors, referrers, UTM attribution, or signup attribution. Do not infer traffic from database activity.

| Source | Visitors | Signups | Conversion |
|---|---:|---:|---:|
| Organic Search | N/A | N/A | N/A |
| Direct | N/A | N/A | N/A |
| Social | N/A | N/A | N/A |
| Paid | N/A | N/A | N/A |
| Email | N/A | N/A | N/A |
| Referral | N/A | N/A | N/A |

### Top Pages (24h)

Not available. The current data sources do not expose pageviews or bounce rate.

### Popular Events Being Tracked

These are watchlist rows only; they are not evidence of working price tracking.

1. Harry Styles: Together, Together — Madison Square Garden, New York — 2 watchlist items
2. Harry Styles: Together, Together — Madison Square Garden, New York — 2 watchlist items
3. Ariana Grande - The Eternal Sunshine Tour — Barclays Center, Brooklyn — 2 watchlist items
4. NBA Finals: TBD at New York Knicks RD4 HM GM3 — Madison Square Garden, New York — 2 watchlist items
5. Harry Styles: Together, Together — Madison Square Garden, New York — 2 watchlist items

The endpoint returns separate rows for distinct event IDs, which is why the same event title appears multiple times.

### Competitor Quick Check

No material SeatGeek, StubHub, or Vivid Seats feature launch, pricing change, or time-sensitive promotion was verified in the 2026-10-09 quick scan. Search results were primarily evergreen comparison pages and general ticket listings. Search record: `.firecrawl/competitor-news-2026-10-09.json`.

### 🚨 Anomalies & Alerts

- **Tracking gap:** GTM loads, but the site source contains no custom `dataLayer.push` conversion events for signup, watchlist add, comparison, newsletter subscribe, or outbound seller clicks. See [tracking-validation-2026-10-09.md](tracking-validation-2026-10-09.md).
- **Admin error:** `/api/admin/alerts` returned HTTP 500 (`Failed to get alerts`). Its failure prevents validation of alert history; the dashboard must not report the stats endpoint’s lifetime `triggeredAlerts: 0` as a daily alert count.
- **Price data outage persists:** the newest returned price-history record is 2026-07-24. No current price-history, trend, comparison, or price-alert performance claim is supportable.
- **Drip gap:** `/api/admin/drip-stats` returned an empty sent-statistics array, while pending users include signups aged 6–24 days with `last_email_sent: 0`. Email delivery and eligibility need investigation.
- **Low activity / possible data gap:** no signup, watchlist, or newsletter activity appears in the last 24 hours; the most recent activity record is 2026-10-04. This is unusual relative to the 264-user database and cannot be separated from tracking/API coverage using current endpoints.

### Recommended handoffs

- **Analytics/CRO:** add a first-party event endpoint or GA4 export for visitors, pageviews, UTM source, and conversion events; repair conversion pushes before using funnel metrics.
- **Backend:** fix `/api/admin/alerts`; add date-bounded admin queries for signups, watchlist adds, newsletter subscriptions, alerts, drip sends, and price-history counts.
- **Email/ops:** inspect the drip scheduler and SMTP logs; the current stats show no sends despite a growing pending queue.
