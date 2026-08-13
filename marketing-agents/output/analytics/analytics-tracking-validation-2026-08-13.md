## TicketScan Tracking Validation — 2026-08-13

**Method:** Direct source inspection plus live HTML spot-check. The requested `analytics-tracking` skill is not installed, so this is the fallback validation.

### Checks

| Check | Result | Evidence |
|---|---|---|
| GTM loads on homepage | PASS | HTTP 200 live HTML contains `googletagmanager`, `dataLayer`, and `GTM-T476F9S4` |
| GTM loads on dashboard | PASS | HTTP 200 live HTML contains `googletagmanager`, `dataLayer`, and `GTM-T476F9S4` |
| GTM loads on compare page | PASS | HTTP 200 live HTML contains `googletagmanager`, `dataLayer`, and `GTM-T476F9S4` |
| GTM loads on register page | PASS | HTTP 200 live HTML contains `googletagmanager`, `dataLayer`, and `GTM-T476F9S4` |
| GTM loads on watchlist page | PASS | HTTP 200 live HTML contains `googletagmanager`, `dataLayer`, and `GTM-T476F9S4` |
| GTM loads on blog page | PASS | HTTP 200 live HTML contains `googletagmanager`, `dataLayer`, and `GTM-T476F9S4` |
| GTM loads on World Cup page | PASS | HTTP 200 live HTML contains `googletagmanager`, `dataLayer`, and `GTM-T476F9S4` |
| Signup conversion event | FAIL / unverified | No explicit `dataLayer.push` conversion event found in the checked frontend source; backend signup rows exist |
| Watchlist-add conversion event | FAIL / unverified | Watchlist API calls exist, but no explicit `dataLayer.push` event was found |
| Price-comparison conversion event | FAIL / unverified | Compare API flow exists, but no explicit analytics event was found |
| Newsletter-subscribe conversion event | FAIL / unverified | `NewsletterSignup.tsx` posts to the API, but no explicit analytics event was found |
| UTM capture/persistence | UNAVAILABLE | No admin acquisition report or frontend persistence implementation was found |
| New-page coverage | PASS for GTM / PARTIAL for events | Shared `web/src/app/layout.tsx` injects GTM globally; event-level tracking remains unverified |

### Immediate flags

1. Add a small typed analytics helper that pushes `signup`, `watchlist_add`, `price_comparison`, and `newsletter_subscribe` to `window.dataLayer`.
2. Persist `utm_source`, `utm_medium`, `utm_campaign`, and related parameters at landing time and expose daily aggregates in the admin API.
3. Run GTM Preview/Tag Assistant QA for each event after implementation; source presence alone does not prove that tags fire.
4. Add admin reporting for unique visitors, pageviews, bounce rate, conversions, and UTM dimensions.

