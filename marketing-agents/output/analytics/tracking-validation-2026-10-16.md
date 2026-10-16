## TicketScan Tracking Validation — 2026-10-16

### Result: PARTIAL / ACTION REQUIRED

### GTM loading

The deployed smoke check returned HTTP 200 and exposed Google Tag Manager container `GTM-T476F9S4` plus `dataLayer` on:

- `/`
- `/dashboard`
- `/compare`
- `/watchlist`

`/newsletter` returned HTTP 404, although it also included the root layout's GTM markup in the response.

### Conversion-event checks

Source inspection found the GTM bootstrap in `web/src/app/layout.tsx`, but no explicit `dataLayer.push`, `gtag`, or project analytics helper for these events:

| Event | Status | Evidence |
|---|---|---|
| Signup | **Not verifiable** | No explicit event push/helper found; live admin data can confirm registrations, not client attribution |
| Watchlist add | **Not verifiable** | No explicit event push/helper found |
| Price comparison | **Not verifiable** | No explicit event push/helper found; price tracking is currently down and must not be marketed |
| Newsletter subscribe | **Not verifiable** | No explicit event push/helper found; backend has subscriber rows |

GTM may still be configured with click/form triggers, but that requires a browser session or GTM Preview/GA4 DebugView to prove. The current code and HTTP smoke check do not prove event delivery.

### UTM capture

No explicit UTM parsing, persistence, or `dataLayer` forwarding was found in the frontend source inspected. Paid-campaign attribution is therefore **not validated**.

### Recommended fixes

1. Add one typed analytics helper that pushes named events for signup success, watchlist add success, comparison initiation, and newsletter success.
2. Persist first-touch and last-touch UTM values before navigation/authentication, subject to the project’s privacy policy.
3. Verify each event in GTM Preview and GA4 DebugView, then test one production conversion per event.
4. Resolve or remove the `/newsletter` route reference; it currently returns 404.

### Caveat

The requested `analytics-tracking` skill was not installed in this session. This log uses repository inspection plus live deployed-page smoke checks as the fallback validation method.
