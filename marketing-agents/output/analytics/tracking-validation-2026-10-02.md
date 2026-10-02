## TicketScan Tracking Validation — 2026-10-02

The requested `analytics-tracking` skill is not installed in this environment. This validation uses direct source inspection plus live HTTP checks.

### Checks

| Check | Result | Evidence |
|---|---|---|
| GTM on homepage | PASS | Live homepage HTTP 200; `GTM-T476F9S4` appears 4 times; GTM script appears 2 times in rendered HTML |
| GTM script reachable | PASS | `https://www.googletagmanager.com/gtm.js?id=GTM-T476F9S4` returned HTTP 200 |
| GTM layout coverage | PASS / source-level | Root layout includes the GTM script and noscript iframe; live smoke checks returned 200 for `/`, `/dashboard`, `/compare`, `/watchlist`, `/onsales`, and `/faq` |
| Signup conversion event | FAIL / unverified | No explicit `dataLayer.push` or `gtag` call found in `web/src` for signup |
| Watchlist-add event | FAIL / unverified | `EventCard.tsx` calls the API but no analytics event call was found |
| Price-comparison event | FAIL / unverified | Compare UI exists, but no explicit conversion-event call was found |
| Newsletter-subscribe event | FAIL / unverified | `NewsletterSignup.tsx` posts to the API but no analytics event call was found |
| Outbound ticket-click event | FAIL / unverified | No explicit outbound-click event call was found |
| UTM capture | FAIL / unverified | No UTM persistence or reporting implementation was found |
| Singular onsale route | FAIL | `/onsale` returned 404; `/onsales` returned 200 |
| Admin alerts API | FAIL | `/api/admin/alerts` returned HTTP 500 |

### Immediate action

Treat visitor, funnel, channel, and conversion reporting as unavailable. Add a shared client-side tracking helper and verify events in GTM Preview/GA4 DebugView before using marketing analytics for optimization decisions.

### Scope limitation

This is not a browser-level GTM Preview test; it confirms source wiring and public HTTP responses only. A successful GTM container load does not prove that conversion tags fire.

