# TicketScan Tracking Validation — 2026-10-03

## Result

**FAIL / incomplete.** The deployed homepage and Next.js root layout load GTM container `GTM-T476F9S4`, but conversion instrumentation is not implemented or queryable from the available admin API.

## Checks

| Check | Result | Evidence |
|---|---|---|
| GTM loads site-wide | Pass in source and deployed homepage | `web/src/app/layout.tsx` includes GTM container `GTM-T476F9S4`; live HTML contains the GTM script, `dataLayer`, and noscript iframe references. |
| Signup conversion event | Fail | No `dataLayer.push` or equivalent event found in the frontend; backend activity only exposes signup rows. |
| Watchlist-add conversion event | Fail | `EventCard.tsx` calls the watchlist API but does not push an analytics event. |
| Price-comparison conversion event | Fail | `compare/page.tsx` calls `api.compareEvents` but does not push an analytics event. |
| Newsletter-subscribe conversion event | Fail | `NewsletterSignup.tsx` posts to the API but does not push an analytics event. |
| New-page tracking coverage | Incomplete | Global GTM is present through the root layout, but runtime event coverage cannot be verified without a browser/debug stream. |
| UTM capture | Fail / not verifiable | No frontend UTM persistence or admin attribution report was found. |

## Operational API checks

- `/api/admin/stats`: reachable; 264 users, 255 watchlist items, 6 active subscribers, 0 reported triggered alerts.
- `/api/admin/alerts`: application failure with `Failed to get alerts`.
- `/api/admin/price-history`: reachable, but latest record is 2026-07-24 20:01:07 UTC.
- `/api/admin/drip-stats`: reachable, but sent statistics are empty.
- `/api/admin/activity`: reachable; exposes only 20 recent activity rows and no visitor/source/pageview events.

## Immediate recommendations

1. Add a small typed analytics helper that pushes `signup`, `watchlist_add`, `price_comparison`, and `newsletter_subscribe` events after successful actions.
2. Persist first-touch and last-touch UTM fields for signup/newsletter attribution.
3. Add a queryable GA4 export or first-party event counters for visitors, sources, pages, bounce, and comparisons.
4. Repair `/api/admin/alerts` and restore price ingestion before using alert or price metrics in campaigns.

Note: the requested `analytics-tracking` skill was not available in this environment; this validation used source inspection, deployed HTML inspection, and live admin API checks instead.

