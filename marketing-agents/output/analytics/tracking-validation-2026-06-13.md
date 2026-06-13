# Tracking Validation — 2026-06-13

| Check | Status | Notes |
|-------|--------|-------|
| Admin API auth | ✅ working | Key authenticates; 200 on stats/users/watchlist/newsletter/activity/popular-events/drip-stats/price-history. First successful auth (prior runs 401). |
| `/api/admin/alerts` | ❌ 500 | "Failed to get alerts" — broken endpoint, flag to backend. |
| GTM container | ✅ present | GTM-T476F9S4 in layout.tsx. |
| Conversion events (signup/watchlist/compare/subscribe) | ❌ none | No custom dataLayer events in source → behavioral funnel unmeasurable. |
| GA4 reporting access | ❌ none | Cannot pull visitors/sources/pages/bounce. |
| Price tracking | ❌ inert | price_history = 0 rows. |
| Alert arming | ❌ severed | 145 watchlist items, all target_price null → 0 armed. |
| Drip pipeline | ❌ 0 sent | drip-stats empty; users overdue. |

**Bad-data risk:** none introduced — unmeasurable metrics marked n/a. **Single biggest unlock:** wire conversion events / GA4 read access so traffic & funnel become real. Internal platform metrics are now reportable live.
