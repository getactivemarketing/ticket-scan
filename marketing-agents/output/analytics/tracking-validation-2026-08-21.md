## TicketScan Tracking Validation — 2026-08-21

### Results

| Check | Result | Evidence |
|---|---|---|
| GTM loading on homepage | PASS | Live HTML includes `GTM-T476F9S4`; root layout includes both script and noscript iframe. |
| GTM loading across all pages | PARTIAL | Root layout is global, but only homepage HTML was spot-checked live. |
| Signup conversion event | FAIL / UNVERIFIED | No explicit `dataLayer.push` or `gtag` conversion call found in register/auth source. |
| Watchlist-add conversion event | FAIL / UNVERIFIED | No explicit conversion push found around watchlist API calls or EventCard add flow. |
| Price-comparison event | FAIL / UNVERIFIED | No explicit conversion push found around `compareEvents`. |
| Newsletter-subscribe event | FAIL / UNVERIFIED | No explicit conversion push found around NewsletterSignup submission. |
| UTM capture | UNVERIFIED | No reporting endpoint or visible source/UTM persistence was available in the checked code/API. |

### Immediate action

Add named conversion pushes for `signup`, `watchlist_add`, `price_comparison`, and `newsletter_subscribe`, including event metadata and UTM persistence. Then validate each event in GTM Preview/GA4 DebugView on `/register`, `/dashboard` or event cards, `/compare`, and the newsletter form. Do not use the current conversion fields for campaign optimization until this is complete.

### Data-health checks

- `/api/admin/stats`: reachable; 228 users, 221 watchlist items, 4 active subscribers, 0 alerts.
- `/api/admin/alerts`: endpoint returned an error response during the validation batch; stats still reported 0 total triggered alerts. Recheck endpoint implementation before depending on alert detail rows.
- `/api/admin/price-history`: reachable but latest returned record is 2026-07-24 20:01 UTC; investigate scheduler/database freshness.
