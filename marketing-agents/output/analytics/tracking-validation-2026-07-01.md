## Tracking Validation — 2026-07-01

### GTM Status
- Installed: Yes (script present site-wide per prior audit)
- Container firing: Unverified (no programmatic GTM API access)
- Events configured: None confirmed

### Conversion Events — Status
| Event               | Expected Trigger            | GTM Configured | GA4 Receiving |
|---------------------|-----------------------------|----------------|---------------|
| signup              | POST /api/auth/register     | No             | No            |
| watchlist_add       | POST /api/watchlist         | No             | No            |
| compare_run         | GET /api/events/compare     | No             | No            |
| newsletter_subscribe| POST /api/newsletter/subscribe | No          | No            |
| price_alert_view    | GET /api/prices/history     | No             | No            |

**All conversion events are dark.** No funnel data available until these are wired.

### Pages Missing Tracking (known)
- No new pages deployed since last audit (June 27)
- Conversion event gaps exist on all pages — not page-specific

### UTM Parameter Capture
- Status: Unknown — no paid campaigns running, no GA4 to verify capture
- Risk: When paid campaigns launch, UTM attribution will be unavailable unless wired first

### What to Fix (priority order)
1. **Wire GA4 conversion event for `signup`** — highest-value first-touch signal
2. **Wire `watchlist_add`** — primary engagement signal
3. **Wire `newsletter_subscribe`** — email funnel visibility
4. **Wire `compare_run`** — feature usage signal
5. **Connect GA4 to GTM and verify data flows before any paid spend**

### Price Tracker Health Check
- Cron schedule: Every 4 hours (`0 */4 * * *`)
- Status: **HEALTHY** — 3 checks logged today (00:01, 04:01, 08:01 UTC)
- Coverage: 1 of 163 watchlist items (SELENA Tribute DREAMING OF YOU)
- Root cause of limited coverage: under investigation — may be scoped to events that have a matching Ticketmaster event_id with live pricing

### Admin API Health Check
| Endpoint              | Status  | Notes                              |
|-----------------------|---------|------------------------------------|
| /api/admin/stats      | ✅ 200  | Returns correct totals             |
| /api/admin/users      | ✅ 200  | Paginated, 50/page                 |
| /api/admin/watchlist  | ✅ 200  | Paginated, 50/page                 |
| /api/admin/newsletter | ✅ 200  | 3 subscribers                      |
| /api/admin/popular-events | ✅ 200 | Returns top events              |
| /api/admin/drip-stats | ✅ 200  | 0 emails sent, many pending users  |
| /api/admin/activity   | ✅ 200  | 20 most recent events              |
| /api/admin/price-history | ✅ 200 | 61 records, 1 event             |
| /api/admin/alerts     | ❌ 500  | Consistent failure — needs fix     |
