## TicketScan Tracking Validation — 2026-08-15

Status: **PARTIAL / ACTION REQUIRED**

### Checks

| Check | Result | Evidence |
|---|---|---|
| GTM loads on site | Pass | Live homepage contains `GTM-T476F9S4`; GTM script returned HTTP 200. |
| GTM applied to representative routes | Pass | `/`, `/dashboard`, `/compare`, `/register`, `/watchlist`, `/world-cup-2026`, and `/blog` returned HTTP 200; GTM is injected from the shared Next.js root layout. |
| Signup conversion event | Fail / unverifiable | No explicit `dataLayer.push` or event helper found in `web/src`; signup API call exists but is not instrumented in source. |
| Watchlist-add conversion event | Fail / unverifiable | Watchlist API call exists, but no explicit analytics event was found. |
| Price-comparison conversion event | Fail / unverifiable | Compare API call exists, but no explicit analytics event was found. |
| Newsletter-subscribe conversion event | Fail / unverifiable | Newsletter API call exists, but no explicit analytics event was found. |
| UTM capture | Fail / unverifiable | No UTM parsing, persistence, or source-attribution code found in `web/src`. |
| New pages missing tracking | Pass at template level | App routes use the shared root layout, which contains GTM. Individual conversion instrumentation remains absent. |

### Immediate fixes

1. Add a typed analytics helper that pushes `signup`, `watchlist_add`, `price_comparison`, and `newsletter_subscribe` events to `dataLayer` after confirmed success.
2. Capture `utm_source`, `utm_medium`, `utm_campaign`, and `utm_content` on first landing and persist them for signup/newsletter attribution.
3. Add a server-side reporting endpoint or GA4 export for visitors, page views, bounce rate, conversion events, and source attribution.
4. Repair `/api/admin/alerts` and investigate why `/api/admin/price-history` has no record newer than 2026-07-24.
