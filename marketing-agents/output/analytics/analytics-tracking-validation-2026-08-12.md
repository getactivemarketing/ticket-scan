## TicketScan Tracking Validation — 2026-08-12

### Checks

| Check | Result | Evidence |
|---|---|---|
| GTM loads on homepage | PASS | Live HTML contains `googletagmanager`, `dataLayer`, and `GTM-T476F9S4` |
| GTM loads on dashboard | PASS | Live HTML contains `googletagmanager`, `dataLayer`, and `GTM-T476F9S4` |
| GTM loads on compare page | PASS | Live HTML contains `googletagmanager`, `dataLayer`, and `GTM-T476F9S4` |
| Signup conversion event | FAIL / unverified | No explicit `dataLayer.push` event in source; backend activity shows signup records but not analytics events |
| Watchlist-add conversion event | FAIL / unverified | `EventCard.tsx` calls the API but does not push a dataLayer event |
| Price-comparison conversion event | FAIL / unverified | `compareEvents()` calls the API but no dataLayer event was found |
| Newsletter-subscribe conversion event | FAIL / unverified | `NewsletterSignup.tsx` posts to the API but no dataLayer event was found |
| UTM capture/persistence | UNAVAILABLE | No admin report or frontend persistence implementation was found in the checked source |
| New-page coverage | PARTIAL | Shared `layout.tsx` injects GTM globally; event-level tracking remains unverified |

### Recommended repair

Add a small typed analytics helper that pushes `signup`, `watchlist_add`, `price_comparison`, and `newsletter_subscribe` events to `window.dataLayer`, including source/medium/campaign when present. Add a QA-only GTM preview test for each event and expose an admin export of event counts by day and UTM dimensions.

**Skill note:** The requested `analytics-tracking` skill is not installed in this environment; this log is the direct source inspection/live HTML fallback.

