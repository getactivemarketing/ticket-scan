## TicketScan Tracking Validation — 2026-10-01

### Checks

| Check | Result | Evidence |
|---|---|---|
| GTM on homepage | PASS | Live homepage HTTP 200; `GTM-T476F9S4` present 4 times; GTM script present 2 times |
| GTM script reachable | PASS | `https://www.googletagmanager.com/gtm.js?id=GTM-T476F9S4` returned HTTP 200 |
| Signup conversion event | FAIL / unverified | No explicit `dataLayer.push` or `gtag` call found in `web/src` or rendered homepage source |
| Watchlist-add event | FAIL / unverified | No explicit conversion-event call found |
| Price-comparison event | FAIL / unverified | No explicit conversion-event call found |
| Newsletter-subscribe event | FAIL / unverified | No explicit conversion-event call found |
| GTM on all pages | UNVERIFIED | Root layout includes GTM, but no browser crawl or GA4 diagnostics are available |
| UTM capture | UNVERIFIED | No UTM persistence/reporting implementation or admin endpoint found |

### Immediate action

Treat conversion and acquisition reporting as unavailable. Add one shared client-side tracking helper and explicit events for `signup`, `watchlist_add`, `price_comparison`, and `newsletter_subscribe`; then verify them in GTM Preview/GA4 DebugView before using the dashboard for funnel decisions.

### Method limitation

The requested `analytics-tracking` skill is not installed in this environment. This log uses direct source inspection plus live HTTP checks instead.
