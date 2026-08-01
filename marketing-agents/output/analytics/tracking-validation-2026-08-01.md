## TicketScan Tracking Validation — 2026-08-01

### Checks

| Check | Result | Evidence |
|---|---|---|
| GTM loads in shared app shell | PASS | `web/src/app/layout.tsx` includes `GTM-T476F9S4` script and noscript iframe |
| GTM on homepage | PASS | Live `https://www.ticketscan.io/` returned container ID |
| GTM on dashboard | PASS | Live `/dashboard` returned container ID |
| GTM on compare | PASS | Live `/compare` returned container ID |
| GTM on watchlist | PASS | Live `/watchlist` returned container ID |
| GTM on World Cup page | PASS | Live `/world-cup-2026` returned container ID |
| Signup conversion event | FAIL / NOT IMPLEMENTED | No `dataLayer.push` or equivalent event found in frontend source |
| Watchlist-add conversion event | FAIL / NOT IMPLEMENTED | API action exists, but no explicit analytics event found |
| Price-comparison conversion event | FAIL / NOT IMPLEMENTED | Compare API call exists, but no explicit analytics event found |
| Newsletter-subscribe conversion event | FAIL / NOT IMPLEMENTED | Subscribe API call exists, but no explicit analytics event found |
| UTM capture/persistence | FAIL / NOT IMPLEMENTED | No UTM parsing/storage logic found in frontend source |
| Visitor/pageview/bounce reporting | BLOCKED | No exposed admin endpoint or reportable dataset found |

### Recommended fixes

1. Add a typed analytics helper that pushes `signup_completed`, `watchlist_added`, `price_comparison_completed`, and `newsletter_subscribed` to `dataLayer` only after successful API responses.
2. Capture `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, and `utm_term` on first landing; persist them for signup/newsletter attribution.
3. Add GA4/GTM reporting for users, sessions, pageviews, landing pages, source/medium, and bounce/engagement metrics.
4. Repair `/api/admin/alerts` and the price-tracking cron before using alert or price-health dashboards operationally.

