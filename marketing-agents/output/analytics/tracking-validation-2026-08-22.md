# TicketScan Tracking Validation — 2026-08-22

## Result: PARTIAL / ACTION REQUIRED

| Check | Result | Evidence |
|---|---|---|
| GTM on homepage | PASS | HTTP 200; `GTM-T476F9S4` present |
| GTM on dashboard | PASS | HTTP 200; `GTM-T476F9S4` present |
| GTM on compare | PASS | HTTP 200; `GTM-T476F9S4` present |
| GTM on register | PASS | HTTP 200; `GTM-T476F9S4` present |
| GTM on World Cup page | PASS | HTTP 200; `GTM-T476F9S4` present |
| Signup conversion event | NOT VERIFIED | No `dataLayer.push` or `gtag` event found in registration flow |
| Watchlist conversion event | NOT VERIFIED | No conversion-event push found in add flow |
| Price comparison conversion event | NOT VERIFIED | No conversion-event push found in compare flow |
| Newsletter conversion event | NOT VERIFIED | No conversion-event push found in newsletter flow |
| UTM capture/persistence | NOT FOUND | No UTM handling found in frontend; no admin reporting endpoint |
| Analytics pageviews/bounce | UNAVAILABLE | No GA4/GTM reporting access in configured admin API |

## Notes

The GTM bootstrap and noscript fallback are present in `web/src/app/layout.tsx`, so container loading is structurally covered. This repository-level check cannot prove that tags inside the GTM container fire correctly. A browser debugger or GA4 event report is required for that confirmation.

