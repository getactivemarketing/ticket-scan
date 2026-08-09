## TicketScan Tracking Validation — 2026-08-09

### Results

| Check | Result | Evidence |
|---|---|---|
| GTM loads on homepage | PASS (HTML presence) | `GTM-T476F9S4` and `googletagmanager.com/gtm.js` found |
| GTM loads on `/dashboard` | PASS (HTML presence) | Container found in rendered HTML |
| GTM loads on `/compare` | PASS (HTML presence) | Container found in rendered HTML |
| GTM loads on `/watchlist` | PASS (HTML presence) | Container found in rendered HTML |
| GTM loads on `/world-cup-2026` | PASS (HTML presence) | Container found in rendered HTML |
| Signup conversion event | UNVERIFIED | No explicit `dataLayer.push` or named event found in `web/src` |
| Watchlist-add conversion event | UNVERIFIED | API call exists; no explicit analytics event found |
| Price-comparison conversion event | UNVERIFIED | API call exists; no explicit analytics event found |
| Newsletter conversion event | UNVERIFIED | Form/API call exists; no explicit analytics event found |
| UTM capture | UNVERIFIED | No local UTM persistence or event instrumentation found |
| Page views / bounce rate | UNAVAILABLE | Not exposed by the admin API |
| Alert reporting | FAIL | `/api/admin/alerts` returned `Failed to get alerts`; stats endpoint reports 0 |
| Price-tracking freshness | FAIL | Latest price-history record is 2026-07-24 20:01 UTC |

### Recommended fixes

1. Add a small typed analytics helper that pushes named events (`sign_up`, `watchlist_add`, `price_comparison`, `newsletter_subscribe`) to `window.dataLayer`.
2. Persist `utm_source`, `utm_medium`, `utm_campaign`, and landing page in first-party storage and attach them to signup/newsletter submissions.
3. Add an admin/analytics endpoint backed by daily aggregates or connect GA4 reporting for visitors, sources, pages, bounce rate, and comparisons.
4. Repair `/api/admin/alerts` and verify the four-hour price-tracking cron and provider responses.

