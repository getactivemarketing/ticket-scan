# TicketScan Tracking Validation — 2026-09-30

## Result

**Partial failure / not decision-grade.** The deployed homepage loads Google Tag Manager, but application-level conversion events could not be verified. The requested `analytics-tracking` skill is not available in this session, so validation used live HTML plus repository source inspection.

## Checks

| Check | Result | Evidence |
|---|---|---|
| GTM loads on homepage | Pass | Live `https://www.ticketscan.io/` contains `GTM-T476F9S4`, `dataLayer`, and the GTM script/noscript tags. |
| Signup event | Fail / unverified | No explicit `dataLayer.push` or `gtag` conversion call found in `web/src` for registration. |
| Watchlist-add event | Fail / unverified | Watchlist API/UI code exists, but no explicit analytics event push was found. |
| Price-comparison event | Fail / unverified | Compare UI exists, but no explicit analytics event push was found. |
| Newsletter-subscribe event | Fail / unverified | `NewsletterSignup.tsx` posts to the API, but no explicit analytics event push was found. |
| GTM on all pages | Likely, not fully validated | GTM is injected from the root layout, but a full route crawl was not run. |
| UTM capture | Fail / unverified | No UTM persistence or admin attribution report was found. |

## Recommended fix

Add one shared typed analytics helper that pushes named events (`signup`, `watchlist_add`, `price_comparison`, `newsletter_subscribe`) to the existing `dataLayer`, including stable event IDs where applicable. Add UTM capture at landing and persistence through registration/subscription, then expose a queryable daily export or admin endpoint. Re-run this check after deployment.

## Supporting observations

- `/api/admin/activity` exposes only `signup`, `watchlist`, and newsletter-style product activity; it does not expose visitors, pageviews, sources, comparisons, bounce rate, or GTM event health.
- `/api/admin/alerts` currently returns HTTP 500, so alert conversion cannot be reconciled.
