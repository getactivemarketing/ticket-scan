# Tracking Validation Log — 2026-10-25

## Result

**PARTIAL / FAIL for conversion tracking.** GTM itself is loading, but the application does not emit the conversion events the analytics brief requires.

## Checks performed

| Check | Result | Evidence |
|---|---|---|
| GTM container present in deployed HTML | PASS | `https://www.ticketscan.io/` contains `GTM-T476F9S4`, `dataLayer`, and `googletagmanager` markers |
| GTM loads from Google | PASS | `https://www.googletagmanager.com/gtm.js?id=GTM-T476F9S4` returned HTTP 200 |
| GTM on register route | PASS | `/register` returned HTTP 200 and included GTM markers |
| GTM on dashboard route | PASS | `/dashboard` returned HTTP 200 and included GTM markers |
| GTM on compare route | PASS | `/compare` returned HTTP 200 and included GTM markers |
| Signup event | FAIL | `AuthContext.tsx` calls `api.register()` but contains no `dataLayer.push` or analytics helper call |
| Watchlist-add event | FAIL | `EventCard.tsx` calls `api.addToWatchlist()` but contains no analytics event call |
| Price-comparison event | FAIL | `compare/page.tsx` calls `api.compareEvents()` but contains no analytics event call |
| Newsletter-subscribe event | FAIL | `NewsletterSignup.tsx` posts to `/api/newsletter/subscribe` but contains no analytics event call |
| Outbound seller-click event | FAIL | `EventCard.tsx` renders external ticket links without click-event instrumentation |
| UTM capture | FAIL | No `utm_*`, `URLSearchParams`, cookie, or session persistence implementation found in `web/src` |
| New pages missing GTM | PASS by spot check | Register, dashboard, and compare all inherit the root layout; `/newsletter` is not a route and returned 404 |

## Code references

- GTM bootstrap: `web/src/app/layout.tsx`
- Signup flow: `web/src/context/AuthContext.tsx`
- Watchlist CTA: `web/src/components/EventCard.tsx`
- Newsletter form: `web/src/components/NewsletterSignup.tsx`
- Comparison flow: `web/src/app/compare/page.tsx`
- API methods: `web/src/lib/api.ts`

## Action required

Implement one shared client-side analytics helper and instrument the five failed events. Preserve the existing GTM container ID, avoid sending email addresses or raw auth data, and include only event name plus non-sensitive context such as source page, event type, and UTM campaign fields.
