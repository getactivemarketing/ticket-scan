## Tracking Validation Log — 2026-10-26

### Result

**GTM container loads on sampled live pages. Conversion-event validation failed because the site does not emit identifiable custom conversion events in the current frontend source. UTM capture is not implemented.**

### Checks

| Check | Result | Evidence |
|---|---|---|
| GTM on homepage | PASS | Live HTML contains `GTM-T476F9S4`, `dataLayer`, and `googletagmanager.com` |
| GTM on dashboard | PASS | Same container markers present |
| GTM on compare | PASS | Same container markers present |
| GTM on register | PASS | Same container markers present |
| GTM on watchlist | PASS | Same container markers present |
| Signup conversion event | FAIL / unverified | Registration submits through API, but no `dataLayer.push` or named analytics event was found |
| Watchlist-add conversion event | FAIL / unverified | Watchlist API call exists, but no named analytics event was found |
| Price-comparison conversion event | FAIL / unverified | Compare API call exists, but no named analytics event was found |
| Newsletter conversion event | FAIL / unverified | Newsletter API call exists, but no named analytics event was found |
| UTM capture | FAIL | No `utm_source`, `utm_medium`, `utm_campaign`, referrer, or storage persistence logic found |
| New pages missing GTM | No issue in sample | Five high-value routes checked; broader crawl not performed |

### API checks

- `/api/admin/stats`: reachable; 268 users, 257 watchlist items, 7 active subscribers, zero alerts reported.
- `/api/admin/alerts`: **application failure** — `Failed to get alerts`.
- `/api/admin/drip-stats`: reachable but returns an empty stats array.
- `/api/admin/price-history`: reachable but stale; newest record is July 24, 2026.

### Recommended repair order

1. Add one shared analytics helper that pushes stable event names for `signup`, `watchlist_add`, `comparison_run`, and `newsletter_subscribe` after successful API responses.
2. Persist first-touch and latest-touch UTM values in consent-appropriate storage and attach them to conversion events.
3. Add a date-filtered activity/analytics endpoint or connect GA reporting so daily and 7-day metrics are complete rather than lower bounds.
4. Fix `/api/admin/alerts` and add a smoke test for the admin metrics endpoints.
