## Tracking Validation — 2026-07-17

### GTM Status
- GTM container: installed (confirmed via site structure)
- GA4 data stream: connected but no conversion events configured
- Result: GTM fires, but no meaningful data flows into GA4

### Conversion Events — Status

| Event                   | Expected trigger        | Firing? |
|-------------------------|-------------------------|---------|
| signup_complete         | POST /api/auth/register | Unknown |
| watchlist_add           | POST /api/watchlist     | Unknown |
| price_compare           | GET /api/events/compare | Unknown |
| newsletter_subscribe    | POST /api/newsletter/subscribe | Unknown |

No GA4 read access — cannot verify event firing. All marked Unknown.

### Pages Missing Tracking
Cannot audit without GA4. Pages launched since last audit:
- /venues/* (24 pages) — tracking status unknown
- /tickets/* (37 pages) — tracking status unknown
- /world-cup-2026/* (17 pages) — tracking status unknown

### UTM Capture
No paid campaigns active ($0 ad spend), so UTM capture is not currently load-bearing. Still unverified.

### Recommendation
1. Add GA4 conversion events for signup, watchlist_add, newsletter_subscribe via GTM.
2. Grant GA4 read access to analytics agent service account.
3. Until done, all funnel metrics in daily dashboard remain n/a.
