# CRO Handoff from Paid Ads — 2026-08-07

## Priority findings

1. Paid performance cannot be attributed: GTM is present, but explicit signup, compare, watchlist, and newsletter events plus UTM persistence were not verified.
2. The latest price-history record is July 24, 2026, and `/api/admin/alerts` returns HTTP 500. Alert-led ad promises should remain off.
3. The latest daily dashboard recorded 0 signups and 0 watchlist additions, so there is no defensible paid-funnel winner to scale.

## Recommended CRO work

- Add and validate `search_initiated`, `compare_completed`, `watchlist_added`, `first_alert_configured`, and `newsletter_subscribe` events.
- Persist `utm_source`, `utm_medium`, `utm_campaign`, and `utm_content` through registration and watchlist actions.
- Browser-test anonymous search and comparison on `/compare`; retain `/` as the paid fallback until it passes.
- Repair price tracking freshness and the alerts endpoint before testing price-drop creative.
- Report conversion rate by landing page and campaign after at least seven days of clean attribution.
