## TicketScan Daily Dashboard — 2026-10-19

**Run time:** 2026-10-19 10:09 UTC  
**Data sources:** deployed admin API, public site HTML spot checks, repository instrumentation review.  
**Important:** Visitor, pageview, bounce-rate, comparison, and UTM aggregates are not exposed by the current admin API. They are marked `N/A`, not estimated.

### Key Metrics

| Metric | Today / last 24h | Previous 24h | 7-day average | Trend |
|---|---:|---:|---:|:---:|
| Unique Visitors | N/A | N/A | N/A | — |
| New Signups | 0 | 0 | 0.14/day | → |
| Watchlist Items Added | 0 | 0 | 0/day | → |
| Price Comparisons Run | N/A | N/A | N/A | — |
| Newsletter Subscribers | 0 | 0 | 0.14/day | → |
| Price Alerts Triggered | 0* | 0* | 0* | → |
| Drip Emails Sent | 0 | 0 | 0/day | → |

`*` The alerts endpoint returned HTTP 500. The zero is the platform stats counter, not a successful alerts-query result.

The 7-day figures above are derived only where the API's recent activity feed supports it. The API does not provide historical daily aggregates, so several rows cannot support a real 7-day baseline.

### Totals

- Total registered users: **266**
- Total watchlist items: **256** (these are saved items, not active price tracking)
- Total active newsletter subscribers: **7**
- Total price-history records: **202** (all Ticketmaster; latest record 2026-07-24 20:01 UTC)
- Total triggered alerts: **0** in `/api/admin/stats`; `/api/admin/alerts` is currently failing

### Traffic Sources (24h)

| Source | Visitors | Signups | Conversion |
|---|---:|---:|---:|
| Organic Search | N/A | N/A | N/A |
| Direct | N/A | N/A | N/A |
| Social | N/A | N/A | N/A |
| Paid | N/A | N/A | N/A |
| Email | N/A | N/A | N/A |
| Referral | N/A | N/A | N/A |

No GA/GTM reporting endpoint or exported analytics data was available to this run. UTM capture is therefore unverified.

### Top Pages (24h)

Unavailable: no pageview or bounce-rate data is exposed by the deployed admin API.

### Popular Events Being Tracked

These are the top records returned by `/api/admin/popular-events`; “tracked” means saved to a watchlist, not price-tracked.

1. Harry Styles: Together, Together — Madison Square Garden, New York — 2 saved items
2. Ariana Grande - The Eternal Sunshine Tour — Barclays Center, Brooklyn — 2 saved items
3. NBA Finals: TBD at New York Knicks RD4 HM GM3 — Madison Square Garden, New York — 2 saved items
4. World Cup: Match 68 Group L - Croatia vs Ghana — Lincoln Financial Field, Philadelphia — 2 saved items
5. Noah Kahan: The Great Divide Tour — Kia Center, Orlando — 2 saved items

The endpoint returns several event instances tied at two saves; the list above groups the most repeated event names for readability.

### Competitor Activity

- **SeatGeek:** announced TourIQ on October 2, a predictive pricing product for promoters and venues, and lists Ask SeatGeek, a conversational AI search experience, as an August 26 launch. [SeatGeek TourIQ announcement](https://seatgeek.com/press/SeatGeek%20Launches%20TourIQ) · [SeatGeek newsroom](https://seatgeek.com/enterprise/newsroom)
- **StubHub:** newsroom activity includes a September 29 seat-view technology article and a September 30 explanation of fees and pricing; it also announced Formula DRIFT partnership activity on October 14. [StubHub newsroom](https://newsroom.stubhub.com/)
- **Vivid Seats:** no notable October product launch or promotion was found in its official press page during this quick check. [Vivid Seats press](https://www.vividseats.com/press)

### 🚨 Anomalies & Alerts

- **Critical data gap:** price tracking remains down. The database contains 202 records, all from Ticketmaster, with no records after July 24. Do not use these records for public pricing claims.
- **API defect:** `/api/admin/alerts` returns HTTP 500 (`Failed to get alerts`) despite `/api/admin/stats` returning zero triggered alerts. Investigate the alerts query/schema before relying on alert reporting.
- **Drip campaign gap:** `/api/admin/drip-stats` reports no sent emails while returning many pending users, including users past scheduled send windows. Verify the cron and email-delivery logs.
- **Analytics gap:** GTM is present on all four sampled routes, but visitor, pageview, bounce, conversion-event, and UTM aggregates were not verifiable from source or admin API.
- No >20% movement can be established for unavailable metrics because there is no reliable historical baseline.

### Data Capture Notes

- `/api/admin/stats`: 266 users, 1 signup in the trailing week, 0 today, 256 watchlist items, 7 active subscribers, 0 triggered alerts.
- `/api/admin/activity`: recent activity feed contains no events in the last 24 hours; it is capped at 20 records and is not a daily fact table.
- `/api/admin/price-history?limit=100000`: 202 records, latest 2026-07-24 20:01 UTC.
- GTM container spot-check: `GTM-T476F9S4` found in homepage, dashboard, compare, and watchlist HTML.
