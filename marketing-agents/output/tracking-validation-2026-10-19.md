## TicketScan Tracking Validation — 2026-10-19

**Requested skill:** `analytics-tracking` was not available in this session; validation was performed through deployed HTML checks, repository inspection, and admin API checks.

### Results

| Check | Result | Evidence / action |
|---|---|---|
| GTM loads on homepage | PASS (container present) | `GTM-T476F9S4` and `googletagmanager.com` found in HTML |
| GTM loads on dashboard | PASS (container present) | `GTM-T476F9S4` found in HTML |
| GTM loads on compare | PASS (container present) | `GTM-T476F9S4` found in HTML |
| GTM loads on watchlist | PASS (container present) | `GTM-T476F9S4` found in HTML |
| Signup conversion event | UNVERIFIED | No visible `dataLayer.push` or first-party analytics event implementation found in the inspected frontend source; no event report endpoint available |
| Watchlist-add event | UNVERIFIED | Same instrumentation gap |
| Price-comparison event | UNVERIFIED | Same instrumentation gap; comparison API usage is not an analytics event proof |
| Newsletter-subscribe event | UNVERIFIED | API accepts subscriptions, but no analytics event proof or aggregate is exposed |
| UTM capture | UNVERIFIED | No reporting endpoint or persisted UTM fields found in the available admin data |
| Admin alerts endpoint | FAIL | `GET /api/admin/alerts?limit=1` returned HTTP 500: `Failed to get alerts` |
| Price tracking data freshness | FAIL / known outage | 202 records; latest `2026-07-24T20:01:07Z`, all Ticketmaster |
| Drip delivery reporting | FLAG | `/api/admin/drip-stats` returned an empty sent-stats array and pending users |

### Immediate follow-ups

1. Fix `/api/admin/alerts` and add a lightweight health check covering its SQL query.
2. Confirm the GTM container's published tags/triggers in Tag Manager Preview; HTML presence proves installation, not firing.
3. Add or expose first-party daily aggregates for pageviews, visitors, conversions, and UTM source/medium/campaign.
4. Investigate the drip cron and SMTP delivery logs; the API reports pending users beyond their scheduled windows.
5. Keep all public copy clear of price tracking, price history, alerts, and buy/wait recommendations until fresh records resume.

### API checks

- `/api/admin/stats`: HTTP 200
- `/api/admin/users`: HTTP 200
- `/api/admin/watchlist`: HTTP 200
- `/api/admin/newsletter`: HTTP 200
- `/api/admin/activity`: HTTP 200
- `/api/admin/popular-events`: HTTP 200
- `/api/admin/drip-stats`: HTTP 200
- `/api/admin/price-history?limit=100000`: HTTP 200
- `/api/admin/alerts`: HTTP 500
