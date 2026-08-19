# TicketScan Tracking Validation — 2026-08-19

## Result

**Partial pass with material gaps.** GTM is installed in the shared Next.js root layout. Conversion-event firing, UTM capture, and live browser tag behavior could not be verified because the requested `analytics-tracking` skill is not installed and the project has no local event instrumentation to inspect.

## Checks

| Check | Result | Evidence |
|---|---|---|
| GTM container present | Pass | `web/src/app/layout.tsx` injects `GTM-T476F9S4` and noscript fallback |
| Signup event | Fail/unverified | `AuthContext.tsx` calls register; no `dataLayer.push` or named analytics event found |
| Watchlist add event | Fail/unverified | `EventCard.tsx` calls `api.addToWatchlist`; no conversion event found |
| Price comparison event | Fail/unverified | `compare/page.tsx` calls `api.compareEvents`; no conversion event found |
| Newsletter subscribe event | Fail/unverified | `NewsletterSignup.tsx` posts subscription; no conversion event found |
| UTM capture | Fail | No UTM persistence, parsing, or dataLayer mapping found |
| New-page GTM coverage | Pass in source review | GTM is mounted in `RootLayout`, above all app routes |
| Live tag firing | Not tested | Requires browser/GTM preview or analytics access |

## Backend validation

- `/api/admin/stats`: reachable; reports 223 users, 219 watchlist items, 4 active subscribers, 0 triggered alerts.
- `/api/admin/alerts`: returns `Failed to get alerts`.
- `/api/admin/price-history`: reachable; 202 records, latest `2026-07-24T20:01:07Z`.
- `/api/admin/drip-stats`: reachable; empty sent-stat rows.

## Immediate fixes

1. Add one shared client-side analytics helper that safely pushes named events to `window.dataLayer`.
2. Emit `signup`, `watchlist_add`, `price_comparison`, and `newsletter_subscribe` only after successful API responses, with event IDs/categories but no email or other PII.
3. Persist first-touch and last-touch UTM values with consent-aware storage and pass them to signup/newsletter attribution.
4. Repair `/api/admin/alerts` and investigate the price-tracking job / database freshness before trusting alert or recommendation reporting.
