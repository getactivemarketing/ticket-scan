# TicketScan Tracking Validation — 2026-08-25

## Result

**FAIL / incomplete.** GTM loads from the Next.js root layout, but conversion instrumentation is not implemented or queryable.

## Checks

| Check | Result | Evidence |
|---|---|---|
| GTM loads site-wide | Pass in source; runtime analytics not queryable | `web/src/app/layout.tsx` includes GTM container `GTM-T476F9S4` in `<head>` and the noscript body iframe |
| Signup conversion event | Fail | No `dataLayer.push` or equivalent event in the frontend; backend activity only records signup rows |
| Watchlist-add conversion event | Fail | `EventCard.tsx` calls the API but does not push an analytics event |
| Price-comparison conversion event | Fail | `compare/page.tsx` calls `api.compareEvents` but does not push an analytics event |
| Newsletter-subscribe conversion event | Fail | `NewsletterSignup.tsx` posts to the API but does not push an analytics event |
| New-page tracking coverage | Incomplete | Global GTM container is present through the root layout, but no event-level validation is possible without a browser/debug stream |
| UTM capture | Fail / not verifiable | No frontend UTM persistence or admin attribution report found |

## Operational API checks

- `/api/admin/stats`: reachable; 239 users, 238 watchlist items, 5 active subscribers, 0 triggered alerts.
- `/api/admin/alerts`: **500-style application failure** with `Failed to get alerts`.
- `/api/admin/price-history`: reachable, but latest record is 2026-07-24 20:01 UTC.
- `/api/admin/drip-stats`: reachable, but sent statistics are empty.

## Immediate recommendations

1. Add a small typed analytics helper that pushes `signup`, `watchlist_add`, `price_comparison`, and `newsletter_subscribe` events to `window.dataLayer` after successful actions.
2. Persist first-touch and last-touch UTM fields for signup/newsletter conversion attribution.
3. Add queryable event counters or a GA4 export endpoint for visitors, sources, pages, bounce, and comparisons.
4. Investigate the price-tracking cron and repair `/api/admin/alerts` before using alert metrics in campaign decisions.

