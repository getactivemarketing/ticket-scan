## Tracking Validation — 2026-07-18

### GTM Container
- **ID:** GTM-T476F9S4
- **Installed in:** `web/src/app/layout.tsx` (both `<head>` noscript and body script tags)
- **Status:** Container loads on all App Router pages ✓
- **Tags/Triggers defined:** None confirmed — container appears empty

### Conversion Events Status

| Event               | Expected Trigger       | Firing | Notes |
|---------------------|------------------------|--------|-------|
| Signup              | /register form submit  | ✗      | No dataLayer push in AuthContext or register page |
| Watchlist Add       | Add to watchlist click | ✗      | No dataLayer push in EventCard |
| Price Comparison    | /compare page load     | ✗      | Not instrumented |
| Newsletter Subscribe| Form submit            | ✗      | No dataLayer push in footer/blog subscribe forms |
| Pageview            | Route change           | ✓?     | GTM default pageview may fire, unconfirmed |

### UTM Capture
- No GA4 property connected → UTM parameters captured nowhere
- All paid/social/email traffic attribution is blind
- `?utm_source=` params present in URLs do nothing measurable

### New Pages Missing Tracking
None newly identified. All pages share the same layout.tsx GTM snippet — coverage is consistent but all events are still dark.

### Priority Fix
Configure GA4 property + connect to GTM. Define 4 conversion events: `signup`, `watchlist_add`, `newsletter_subscribe`, `price_compare`. Until then, all funnel metrics remain n/a.

### API Health Check

| Endpoint                        | Status |
|---------------------------------|--------|
| GET /api/admin/stats            | ✓ 200  |
| GET /api/admin/users            | ✓ 200  |
| GET /api/admin/newsletter       | ✓ 200  |
| GET /api/admin/popular-events   | ✓ 200  |
| GET /api/admin/drip-stats       | ✓ 200  |
| GET /api/admin/price-history    | ✓ 200  |
| GET /api/admin/alerts           | ✗ 500 (broken — persistent) |
