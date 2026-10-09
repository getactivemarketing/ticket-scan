## TicketScan Tracking Validation — 2026-10-09

### Checks

| Check | Result | Evidence |
|---|---|---|
| GTM container loads | PASS at source level | Live homepage HTML contains `GTM-T476F9S4`, the Google Tag Manager script, `dataLayer` initialization, and the noscript iframe. |
| Signup event | FAIL / not found | No custom `dataLayer.push` or analytics event implementation found in `web/src`. Database signup activity exists, but that is not an analytics event. |
| Watchlist-add event | FAIL / not found | No custom conversion push found in `web/src`; admin activity is a database query only. |
| Price-comparison event | FAIL / not found | Compare UI exists, but no custom analytics event push was found. |
| Newsletter-subscribe event | FAIL / not found | Newsletter UI/API exists, but no custom analytics event push was found. |
| Outbound seller-click event | FAIL / not found | No custom outbound-click event implementation found. |
| GTM on all pages | PASS with limitation | GTM is injected from the root layout, so it should cover App Router pages; this was verified from source, not a browser crawl of every route. |
| UTM capture | NOT VERIFIABLE | No queryable analytics export or first-party attribution endpoint is available. |

### Immediate action

Treat visitor and conversion reporting as unavailable until event pushes and an export/query path are added. Do not optimize campaigns or report conversion rates from the current admin activity feed.

### Method

- Fetched `https://www.ticketscan.io` and inspected the deployed HTML.
- Inspected `web/src/app/layout.tsx` and searched `web/src` for GTM/dataLayer/analytics event implementations.
- Queried the deployed admin endpoints with the configured admin header. No public copy was created and no posting endpoint was called.
