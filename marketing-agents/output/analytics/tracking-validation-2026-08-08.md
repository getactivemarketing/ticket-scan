## TicketScan Tracking Validation — 2026-08-08

### Result

**Partial pass with blocking instrumentation gaps.** GTM loads on the sampled public routes, but application conversion events and UTM capture cannot be verified from the current frontend source or admin API.

### Checks

| Check | Result | Evidence |
|---|---|---|
| GTM on homepage | Pass | HTTP 200; GTM-T476F9S4 present |
| GTM on compare page | Pass | HTTP 200; GTM-T476F9S4 present |
| GTM on registration page | Pass | HTTP 200; GTM-T476F9S4 present |
| GTM on dashboard page | Pass | HTTP 200; GTM-T476F9S4 present |
| Signup event | Unverified | Signup is persisted in `users`, but no explicit `dataLayer.push` is present |
| Watchlist-add event | Unverified | Watchlist rows are persisted, but no explicit analytics event is present |
| Price-comparison event | Fail / unavailable | No comparison event in admin activity and no explicit frontend event push found |
| Newsletter event | Unverified | Subscriber rows exist, but no explicit analytics event is present |
| UTM capture | Fail / unavailable | No UTM parsing or persistence was found in the frontend/backend search |

### Recommended fix

Add a typed analytics helper that pushes named events to `window.dataLayer` after successful API responses: `sign_up`, `watchlist_add`, `price_comparison`, and `newsletter_subscribe`. Persist first-touch UTM parameters in a first-party cookie or signup payload, then configure GTM tags/triggers and a GA4 export for daily reporting.

### Scope note

This validation used the repository source and live HTML responses. It did not claim a browser-level GTM Preview session or GA4 Realtime confirmation because those credentials/data were not available.
