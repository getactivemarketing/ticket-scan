## Tracking Validation — 2026-06-27

### GTM / GA4 Status

| Item                          | Status       | Notes                                         |
|-------------------------------|--------------|-----------------------------------------------|
| GTM container on site         | ✅ Installed  | Confirmed in layout.tsx                       |
| GA4 property connected        | ❌ Unknown    | No read access to GA4 — can't verify          |
| Signup conversion event       | ❌ Not firing | No event in code; GTM fires but nothing mapped|
| Watchlist add event           | ❌ Not firing | Same — no dataLayer push in EventCard         |
| Newsletter subscribe event    | ❌ Not firing | Form submits but no event tracked             |
| Price comparison event        | ❌ Not firing | No tracking on compare page                   |
| UTM parameter capture         | ❌ Blocked    | GA4 would capture UTMs, but no events flowing |

### Admin Endpoint Health

| Endpoint                   | Status         |
|----------------------------|----------------|
| GET /api/admin/stats       | ✅ 200          |
| GET /api/admin/newsletter  | ✅ 200          |
| GET /api/admin/drip-stats  | ✅ 200          |
| GET /api/admin/popular-events | ✅ 200       |
| GET /api/admin/price-history | ✅ 200        |
| GET /api/admin/watchlist   | ✅ 200          |
| GET /api/admin/users       | ✅ 200          |
| GET /api/admin/alerts      | ❌ 500 (broken) |

### Pages Missing Tracking

All pages lack conversion event tracking at the code level. GTM is present in `<head>` via `layout.tsx` but no `dataLayer.push()` calls exist anywhere in the frontend codebase.

### Recommended Fix (one-time setup)
1. Add `dataLayer.push({event: 'signup'})` to auth registration success handler
2. Add `dataLayer.push({event: 'watchlist_add'})` to EventCard add handler
3. Add `dataLayer.push({event: 'newsletter_subscribe'})` to form submit handlers
4. Create corresponding GA4 triggers in GTM for each event
5. Set up GA4 conversion goals: signup, watchlist_add, newsletter_subscribe

Until then, all traffic/funnel reporting for downstream agents is n/a.
