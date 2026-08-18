## TicketScan Tracking Validation — 2026-08-18

### Result

**GTM container loads; conversion-event validation fails because the application does not emit explicit conversion events.** The requested `analytics-tracking` skill was unavailable in this environment, so checks used production HTML, local Next.js source, and route smoke tests.

### Checks

| Check | Result | Evidence |
|---|---|---|
| GTM loading on homepage | PASS | Production HTML contains `GTM-T476F9S4`, `dataLayer`, and `googletagmanager`; HTTP 200 |
| GTM loading on representative pages | PASS | `/dashboard`, `/compare`, `/register`, and `/blog` HTTP 200; shared root layout injects GTM |
| Signup event | FAIL / not verifiable | Registration calls the API; no `dataLayer.push` or `gtag` conversion call found |
| Watchlist-add event | FAIL / not verifiable | Watchlist action calls the API; no conversion event call found |
| Price-comparison event | FAIL / not verifiable | Compare page calls the API; no conversion event call found |
| Newsletter-subscribe event | FAIL / not verifiable | Newsletter form posts to the API; no conversion event call found |
| UTM capture | FAIL / not verifiable | No UTM persistence or source-attribution implementation found in `web/src`; no admin reporting endpoint exists |
| New pages missing tracking | PASS structurally / runtime unverified | Shared `web/src/app/layout.tsx` injects GTM for App Router pages |
| Admin alerts endpoint | FAIL | `/api/admin/alerts` returns HTTP 500 |
| Price tracking freshness | FAIL | Latest `/api/admin/price-history` record is 2026-07-24 20:01 UTC |

### Immediate Actions

1. Add a typed analytics helper that pushes named events for signup, watchlist add, price comparison, and newsletter subscription.
2. Persist first-touch and last-touch UTM parameters and expose aggregate attribution in admin reporting.
3. Repair `/api/admin/alerts` and investigate why price history stopped on 2026-07-24.
4. Validate events in GTM Preview/GA4 DebugView with test interactions before using campaign or CRO reports.

