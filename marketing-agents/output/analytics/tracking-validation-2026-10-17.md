## Tracking Validation — 2026-10-17

### Results

| Check | Result | Evidence |
|---|---|---|
| GTM loads on homepage | PASS | `GTM-T476F9S4` present in live HTML |
| GTM loads on dashboard | PASS | `GTM-T476F9S4` present in live HTML |
| GTM loads on compare | PASS | `GTM-T476F9S4` present in live HTML |
| GTM loads on watchlist | PASS | `GTM-T476F9S4` present in live HTML |
| GTM loads on FAQ | PASS | `GTM-T476F9S4` present in live HTML |
| Signup conversion event | NOT VERIFIED | No explicit `dataLayer.push`, `gtag`, or tracking call found in `web/src`; no recent signup activity after Oct 13 |
| Watchlist-add conversion event | NOT VERIFIED | No explicit conversion instrumentation found; no recent watchlist activity |
| Price-comparison conversion event | NOT VERIFIED | No explicit conversion instrumentation found; price-comparison metric is absent from admin data |
| Newsletter-subscribe conversion event | NOT VERIFIED | No explicit conversion instrumentation found; latest recorded subscription is Oct 12 |
| UTM capture | NOT VERIFIED | No `utm_source`, `utm_medium`, or `utm_campaign` handling found in `web/src` |

### Action Required

Add or verify explicit conversion pushes in the frontend and confirm the corresponding GTM triggers/tags in Preview mode. Confirm that campaign landing URLs preserve UTM parameters and that those parameters are stored or forwarded to analytics.
