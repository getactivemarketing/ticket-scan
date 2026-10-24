## TicketScan Tracking Validation — 2026-10-24

**Requested skill:** `analytics-tracking` was not available in this session. Validation used live deployed HTML checks, repository inspection, and live admin API checks.

### Results

| Check | Result | Evidence |
|---|---|---|
| GTM loads on homepage | PASS | Deployed HTML contains `GTM-T476F9S4`, `googletagmanager.com`, and the `dataLayer` bootstrap |
| GTM loads on dashboard | PASS | Same container and bootstrap found |
| GTM loads on compare | PASS | Same container and bootstrap found |
| GTM loads on watchlist | PASS | Same container and bootstrap found |
| Signup conversion event | UNVERIFIED | No first-party `dataLayer.push` or analytics event implementation found in inspected frontend source; backend activity is not an analytics event proof |
| Watchlist-add event | UNVERIFIED | Same instrumentation gap; admin activity only exposes recent aggregate rows |
| Price-comparison event | UNVERIFIED | No analytics event or aggregate report endpoint found |
| Newsletter-subscribe event | UNVERIFIED | Subscription API exists, but no analytics event or source/medium attribution is exposed |
| UTM capture | UNVERIFIED | No UTM parsing/persistence or reporting endpoint found |
| New-page coverage | PARTIAL | Root layout supplies GTM to App Router pages; representative pages pass, but all dynamic routes were not crawled |
| Admin alerts endpoint | FAIL | HTTP 500 / `Failed to get alerts` |
| Price tracking freshness | FAIL / known outage | 202 records; latest `2026-07-24T20:01:07Z`, all historical data is stale |
| Drip delivery reporting | FLAG | Empty sent-stats array and 20 pending users |

### Immediate Follow-ups

1. Fix `/api/admin/alerts` and add a health check for its SQL query.
2. Confirm GTM published tags/triggers in Tag Manager Preview; HTML presence proves installation, not firing.
3. Add first-party daily aggregates for pageviews, unique visitors, funnel conversions, and UTM source/medium/campaign.
4. Investigate the drip cron and SMTP delivery logs before triggering a campaign.
5. Remove or quarantine legacy public copy that still promises price tracking, alerts, price history, or buy/wait calls.
