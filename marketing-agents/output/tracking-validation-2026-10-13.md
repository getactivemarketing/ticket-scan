## Tracking Validation Log — 2026-10-13

### Checks performed

| Check | Result | Evidence / limitation |
|---|---|---|
| GTM loads on homepage | Pass | `GTM-T476F9S4` and `dataLayer` present in the rendered HTML |
| GTM loads on dashboard | Pass | `GTM-T476F9S4` and `dataLayer` present |
| GTM loads on watchlist | Pass | `GTM-T476F9S4` and `dataLayer` present |
| GTM loads on compare | Pass | `GTM-T476F9S4` and `dataLayer` present |
| Signup conversion event | Partial | Live admin activity recorded one signup on Oct. 13, but GTM Preview/GA4 event receipt was not available |
| Watchlist-add conversion event | Partial | API activity contains historical watchlist events; no event was recorded in the current seven-day window |
| Price-comparison conversion event | Unverified | No matching metric was exposed by the admin API; public HTML cannot confirm a fired event |
| Newsletter-subscribe conversion event | Partial | API activity recorded one newsletter subscription on Oct. 12; GTM/GA4 receipt was not available |
| UTM capture from paid campaigns | Unverified | Requires a tagged test visit plus analytics/session inspection |
| New pages missing tracking | No issue found in sampled routes | Four sampled public routes all included the same GTM container |

### Issues to resolve

1. Repair `GET /api/admin/alerts` (HTTP 500) and add an automated health check.
2. Expose or connect GA4/GTM event reporting so conversion events, page views, bounce rate, traffic source, and UTM persistence can be verified rather than inferred.
3. Investigate why `/newsletter` returns 404 if it is intended to be a public route; the newsletter API subscription path may still function independently.
4. Confirm whether the zero watchlist additions in the last seven days reflect real user behavior or missing client-side event logging.

### Scope note

The requested `analytics-tracking` skill is not available in this environment. These results are a fallback validation using live API responses and public HTML inspection; they do not replace a GTM Preview/GA4 DebugView session.
