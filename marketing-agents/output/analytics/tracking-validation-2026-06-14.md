# Tracking Validation — 2026-06-14

Method: source inspection of `web/src` + live admin-API endpoint checks. (`analytics-tracking` skill not present in this environment; validated manually.)

## GTM / container
- ✅ GTM container `GTM-T476F9S4` is installed in `web/src/app/layout.tsx` (standard async snippet + `dataLayer` init).
- ⚠️ Container loads, but I cannot confirm what tags/triggers are configured **inside** GTM (no GTM/GA4 read access). Anything beyond container load is unverifiable from here.

## Conversion events
Searched all of `web/src` for `dataLayer.push` / `gtag(` / `trackEvent` / `analytics.*`:
- ❌ **Signup event** — not instrumented
- ❌ **Watchlist add event** — not instrumented
- ❌ **Price comparison event** — not instrumented
- ❌ **Newsletter subscribe event** — not instrumented

**Zero** custom event pushes exist anywhere in the frontend. The funnel is invisible to client-side analytics; conversions can only be inferred from the database after the fact (as this dashboard does).

## UTM capture
- ❌ No UTM parsing/persistence found in source. Paid-campaign attribution is not being captured. (Moot today — $0 paid spend, no ad accounts.)

## API endpoint health (this run)
- ✅ `/api/admin/stats` — 200 (0.42s)
- ✅ `/api/admin/users` — 200 (capped ~50 most recent)
- ✅ `/api/admin/watchlist` — 200 (capped ~50)
- ✅ `/api/admin/newsletter` — 200
- ❌ `/api/admin/alerts` — **500** "Failed to get alerts" (endpoint error, not empty)
- ✅ `/api/admin/activity` — 200 (last ~20 events)
- ✅ `/api/admin/popular-events` — 200 (has same-event duplicates)
- ✅ `/api/admin/drip-stats` — 200 (stats empty, 20 pending)
- ✅ `/api/admin/price-history` — 200 (0 rows)

## Data gaps (cannot report without fabricating)
- Unique visitors, sessions, traffic sources, top pages, bounce rates
- Price-comparison run counts (no event, no API counter)
- Email open/click rates
- Retention/churn (no `last_login` column)

## To unblock measurement
1. Add `dataLayer.push` calls on signup, watchlist-add, compare, subscribe (highest leverage).
2. Grant GA4 read access (or expose a server-side pageview/source counter) to this run.
3. Fix `/api/admin/alerts` 500.
4. Reconcile `stats.usersToday` counter (returned 3; actual = 1).
