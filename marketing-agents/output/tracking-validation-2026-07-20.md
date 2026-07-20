## Tracking Validation — 2026-07-20

_Run at ~06:00 UTC_

### GTM Status
- Container ID: GTM-T476F9S4
- Installed in: `web/src/app/layout.tsx`
- Status: **Loads on all pages** via root layout ✓

### Conversion Events
| Event                   | Defined? | Firing? | Notes |
|-------------------------|----------|---------|-------|
| Signup                  | ✗        | ✗       | No GTM tag/trigger configured |
| Watchlist add           | ✗        | ✗       | No GTM tag/trigger configured |
| Price comparison run    | ✗        | ✗       | No GTM tag/trigger configured |
| Newsletter subscribe    | ✗        | ✗       | No GTM tag/trigger configured |
| Any GA4 event           | ✗        | ✗       | GA4 not connected to GTM |

### UTM Capture
- Status: **Unknown** — no GA4 property receiving data, so UTM parameters from social/email/paid campaigns are not captured anywhere.

### Pages Missing Tracking
- No pages are "missing" GTM (it loads globally via root layout).
- All pages are missing meaningful analytics because GTM has no tags defined.

### Price Cron
- Status: **Running ✓**
- Last records: IDs 173 (00:01), 174 (04:01), 175 (08:01) UTC today
- Tracked event: SELENA Tribute DREAMING OF YOU @ Gaslamp Long Beach
- Price stable at $30.07 ($38.19 with fees) for 8+ days

### Admin Endpoints
| Endpoint                    | Status      |
|-----------------------------|-------------|
| GET /api/admin/stats        | ✓ 200       |
| GET /api/admin/newsletter   | ✓ 200       |
| GET /api/admin/popular-events | ✓ 200     |
| GET /api/admin/drip-stats   | ✓ 200       |
| GET /api/admin/users        | ✓ 200       |
| GET /api/admin/price-history | ✓ 200      |
| GET /api/admin/alerts       | ✗ 500 (broken) |

### Action Items
1. **P0:** Connect GA4 to GTM and define conversion events (signup, watchlist_add, newsletter_sub)
2. **P0:** Add target price input to EventCard UI to arm alert system
3. **P1:** Fix /api/admin/alerts HTTP 500
4. **P1:** Investigate why price cron only tracks 1 event (184 watchlist items, 1 tracked)
