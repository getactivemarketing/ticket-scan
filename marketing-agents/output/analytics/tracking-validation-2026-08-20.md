# TicketScan Tracking Validation — 2026-08-20

**Requested skill:** `analytics-tracking` was not installed in this environment. Validation used direct live-route probes and local source inspection.

| Check | Result | Evidence |
|---|---|---|
| GTM on homepage | PASS | HTTP 200; live HTML contains `googletagmanager`, `dataLayer`, and `GTM-T476F9S4` |
| GTM on dashboard | PASS | HTTP 200; same GTM container markers |
| GTM on compare | PASS | HTTP 200; same GTM container markers |
| GTM on register | PASS | HTTP 200; same GTM container markers |
| GTM on watchlist | PASS | HTTP 200; same GTM container markers |
| GTM on blog | PASS | HTTP 200; same GTM container markers |
| GTM on World Cup page | PASS | HTTP 200; same GTM container markers |
| Signup conversion event | FAIL / unverified | No explicit `dataLayer.push` event found; backend recorded 3 signups in the window |
| Watchlist-add conversion event | FAIL / unverified | Watchlist API call exists, but no explicit `dataLayer.push` event found |
| Price-comparison event | FAIL / unverified | Compare API call exists, but no explicit event found and no admin count is exposed |
| Newsletter-subscribe event | FAIL / unverified | Subscribe API call exists, but no explicit event found; 0 new subscribers in the window |
| UTM capture | FAIL / unverified | No admin attribution endpoint or persisted UTM data available |
| New-page GTM coverage | PASS for sampled routes | Shared app layout serves GTM across the sampled public routes |

## Immediate actions

1. Add a typed analytics helper that pushes `signup`, `watchlist_add`, `price_comparison`, and `newsletter_subscribe` events to `window.dataLayer` after successful actions.
2. Persist first-touch and last-touch UTM fields with signup/conversion records, or connect this agent to GA4 Data API/BigQuery export.
3. Run GTM Preview/Tag Assistant against each event; source presence alone does not prove a tag fired.
4. Repair `/api/admin/alerts` and expose comparison/event analytics before using funnel percentages.
