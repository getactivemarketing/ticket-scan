## TicketScan Tracking Validation — 2026-10-20

**Requested skill:** `analytics-tracking` was not available in this session. Validation used deployed HTML checks, repository inspection, and live admin API checks.

### Results

| Check | Result | Evidence |
|---|---|---|
| GTM loads on homepage | PASS | HTTP 200; `GTM-T476F9S4` and `googletagmanager.com` present |
| GTM loads on dashboard | PASS | HTTP 200; container present |
| GTM loads on compare | PASS | HTTP 200; container present |
| GTM loads on watchlist | PASS | HTTP 200; container present |
| GTM loads on World Cup page | PASS | HTTP 200; container present |
| Signup conversion event | UNVERIFIED | No first-party `dataLayer.push` conversion implementation or event-report endpoint found |
| Watchlist-add event | UNVERIFIED | UI/API path exists, but no analytics event proof or aggregate is exposed |
| Price-comparison event | UNVERIFIED | Compare API usage is not evidence that an analytics event fires |
| Newsletter-subscribe event | UNVERIFIED | Subscription API exists, but no analytics event proof or aggregate is exposed |
| UTM capture | UNVERIFIED | No persisted UTM fields or reporting endpoint found |
| Admin alerts endpoint | FAIL | HTTP 500: `Failed to get alerts` |
| Price tracking freshness | FAIL / known outage | 202 records; latest `2026-07-24T20:01:07Z`, all Ticketmaster |
| Drip delivery reporting | FLAG | Empty sent-stats array; 19 of 20 pending users are at least three days old |

### Immediate Follow-ups

1. Fix `/api/admin/alerts` and add a health check for its SQL query.
2. Use Google Tag Manager Preview or a browser network trace to confirm actual tag firing; HTML presence only proves installation.
3. Add first-party daily aggregates for pageviews, visitors, conversions, and UTM source/medium/campaign.
4. Investigate the drip cron and SMTP delivery logs; pending users are beyond scheduled windows.
5. Keep public copy clear of price tracking, price history, alerts, and buy/wait recommendations until fresh records resume.
