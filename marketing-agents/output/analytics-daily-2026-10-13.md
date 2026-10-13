## TicketScan Daily Dashboard — 2026-10-13

Report window: UTC calendar day 2026-10-13 through 06:01 UTC, compared with 2026-10-12 and the seven-day baseline 2026-10-06 through 2026-10-12. The current-day window is partial. API-backed counts are from the live Railway admin endpoints; unavailable analytics fields are marked N/A rather than inferred.

### Key Metrics

| Metric | Today | Yesterday | 7-Day Avg | Trend |
|---|---:|---:|---:|:---:|
| Unique Visitors | N/A | N/A | N/A | — |
| New Signups | 1 | 1 | 0.14/day | ↑ |
| Watchlist Items Added | 0 | 0 | 0/day | → |
| Price Comparisons Run | N/A | N/A | N/A | — |
| Newsletter Subscribers | 0 | 1 | 0.14/day | ↓* |
| Price Alerts Triggered | 0 reported; endpoint failed | 0 reported; endpoint failed | N/A | ⚠ |
| Drip Emails Sent | N/A; no send stats returned | N/A | N/A | ⚠ |

\* Today is a partial UTC day. The newsletter endpoint shows one new active subscriber on Oct. 12.

### Totals

- Total registered users: **266**
- Total active watchlist items: **256**
- Total active newsletter subscribers: **7**
- Price history records: **50 returned by the endpoint**; the newest returned record is 2026-07-24 20:01 UTC. This is a limited response, not evidence of current tracking.

### Traffic Sources (24h)

| Source | Visitors | Signups | Conversion |
|---|---:|---:|---:|
| Organic Search | N/A | N/A | N/A |
| Direct | N/A | N/A | N/A |
| Social | N/A | N/A | N/A |
| Paid | N/A | N/A | N/A |
| Email | N/A | N/A | N/A |
| Referral | N/A | N/A | N/A |

GA4/source-level reporting was not exposed by the admin API, and no analytics-console credentials were available in this run.

### Top Pages (24h)

Unavailable: no page-view or bounce-rate feed was exposed by the available admin endpoints.

### Popular Events Being Tracked

The API returned these top five rows; the endpoint reports two watches for each row:

1. Harry Styles: Together, Together — Madison Square Garden, New York — 2
2. Harry Styles: Together, Together — Madison Square Garden, New York — 2
3. Ariana Grande - The Eternal Sunshine Tour — Barclays Center, Brooklyn — 2
4. NBA Finals: TBD at New York Knicks RD4 HM GM3 — Madison Square Garden, New York — 2
5. Harry Styles: Together, Together — Madison Square Garden, New York — 2

The repeated Harry Styles rows are separate event IDs/dates, not a deduplicated event total.

### 🚨 Anomalies & Alerts

- **Alerts API failure:** `GET /api/admin/alerts` returned HTTP 500. The stats endpoint reports zero active/triggered alerts, but that value needs verification after the endpoint is repaired.
- **Price data gap remains:** the price-history response contains no record newer than July 24, consistent with the product-status notice. Do not use price-history data for public claims or performance analysis.
- **Drip reporting gap:** `/api/admin/drip-stats` returned an empty `stats` array and 20 pending users, so sends and delivery performance cannot be measured.
- **Low-volume acquisition:** one signup today and one yesterday; the seven-day signup average is 0.14/day because only one signup occurred during Oct. 6–12.
- **No watchlist additions in the last seven UTC days** in the returned watchlist data. This is worth checking against the client event stream because the activity endpoint is a short recent list.

### Competitor Quick Check

Firecrawl searches for SeatGeek, StubHub, and Vivid Seats promotion/product activity found coupon and discount pages but no credible, material feature launch or pricing change to escalate today. This is a lightweight search, not a full competitive-monitoring pass.

### Source / Method Notes

- Live endpoints queried with the admin key: `stats`, `users`, `watchlist`, `newsletter`, `alerts`, `activity`, `popular-events`, `drip-stats`, and `price-history`.
- Public route checks: homepage, `/dashboard`, `/watchlist`, and `/compare`.
- The requested `analytics-tracking` skill is not installed in this workspace; the companion validation log records the fallback checks and limitations.
