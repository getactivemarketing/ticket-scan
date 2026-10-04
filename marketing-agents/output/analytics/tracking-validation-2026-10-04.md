# Tracking Validation Log — 2026-10-04

## Result

**Partial / failing for conversion measurement.** Google Tag Manager loads, but conversion events are not implemented or are not observable in the checked source and rendered HTML.

## Checks

| Check | Result | Evidence |
|---|---|---|
| GTM loading | Pass | All five live pages returned HTTP 200 and contained `GTM-T476F9S4` four times. |
| Signup event | Fail | Registration/login handlers call auth APIs but contain no `dataLayer.push` or equivalent event call. |
| Watchlist-add event | Fail | `EventCard.handleAddToWatchlist` calls the API and updates UI state, but emits no analytics event. |
| Price-comparison event | Fail / unmeasurable | Compare UI calls the API, but no explicit conversion event or reporting endpoint exists. Current price-comparison feature is also affected by the product-status outage. |
| Newsletter-subscribe event | Fail | `NewsletterSignup.handleSubmit` posts to `/api/newsletter/subscribe` but emits no analytics event. |
| UTM capture | Not verifiable | No client-side UTM persistence or admin reporting path was found. |
| New pages missing GTM | Pass for spot check | `/`, `/dashboard`, `/compare`, `/onsales`, `/venues/metlife-stadium` all contained the container. This is not a full route crawl. |

## Recommended repair

Add one shared client-side analytics helper that pushes normalized events to `window.dataLayer` after successful actions, at minimum: `sign_up`, `watchlist_add`, `price_comparison`, and `newsletter_subscribe`. Persist first-touch and last-touch UTM parameters, then expose them to the reporting layer. Validate in GTM Preview and with browser network checks before relying on these metrics.
