## TicketScan Tracking Validation — 2026-08-17

### Result

**GTM container loads; conversion-event validation fails because the application does not emit explicit conversion events.** The requested `analytics-tracking` skill was unavailable in this environment, so checks were performed against production HTML, the local Next.js source, and route smoke tests.

### Checks

| Check | Result | Evidence |
|---|---|---|
| GTM loading on homepage | PASS | Production HTML contains `GTM-T476F9S4`, `dataLayer`, and `googletagmanager`; homepage HTTP 200 |
| GTM loading on representative pages | PASS | `/dashboard`, `/compare`, `/register`, `/watchlist`, `/world-cup-2026`, and `/blog` all HTTP 200; shared root layout injects GTM |
| Signup event | FAIL / not verifiable | `AuthContext.tsx` calls `/api/auth/register`; no `dataLayer.push` or `gtag` conversion call found |
| Watchlist-add event | FAIL / not verifiable | `EventCard.tsx` calls `api.addToWatchlist`; no conversion event call found |
| Price-comparison event | FAIL / not verifiable | `/compare` calls `api.compareEvents`; no conversion event call found |
| Newsletter-subscribe event | FAIL / not verifiable | `NewsletterSignup.tsx` posts to `/api/newsletter/subscribe`; no conversion event call found |
| UTM capture | FAIL / not verifiable | No UTM persistence or source-attribution implementation found in `web/src`; no admin reporting endpoint exists |
| New pages missing tracking | PASS structurally / runtime unverified | Shared `web/src/app/layout.tsx` injects GTM for App Router pages; event-level behavior remains unverified |

### Immediate Actions

1. Add a small typed analytics helper that pushes named events for `signup`, `watchlist_add`, `price_comparison`, and `newsletter_subscribe`, including event ID/page/source where appropriate.
2. Persist first-touch and last-touch UTM parameters without storing sensitive query data; expose aggregate attribution in admin reporting.
3. Repair `/api/admin/alerts` and investigate why price history stopped on 2026-07-24.
4. Validate the events in GTM Preview/GA4 DebugView with test interactions before relying on campaign or CRO reports.
