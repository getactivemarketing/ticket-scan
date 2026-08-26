# TicketScan Tracking Validation — 2026-08-26

## Result

**FAIL / incomplete.** GTM is present in the Next.js root layout and the live homepage includes `GTM-T476F9S4`, but the required conversion events and attribution capture are not implemented or queryable.

## Checks

| Check | Result | Evidence |
|---|---|---|
| GTM loads site-wide | Pass in source; runtime container/debug status not queryable | `web/src/app/layout.tsx` includes the GTM script and noscript iframe; live homepage source contains `GTM-T476F9S4` and `dataLayer` |
| Signup conversion event | Fail | No `dataLayer.push` or equivalent signup event in `web/src`; backend activity records signup rows only |
| Watchlist-add conversion event | Fail | `EventCard.tsx` invokes the watchlist API, but no watchlist conversion push exists |
| Price-comparison conversion event | Fail | `compare/page.tsx` invokes `api.compareEvents`, but no comparison conversion push exists |
| Newsletter-subscribe event | Fail | `NewsletterSignup.tsx` posts to the API, but no newsletter conversion push exists |
| New-page tracking coverage | Incomplete | Global GTM container is in the root layout, but event-level validation is impossible without a browser/debug stream |
| UTM capture | Fail / not verifiable | No UTM persistence or admin attribution report was found |

## Operational API Checks

- `/api/admin/stats`: reachable; 243 users, 243 watchlist rows, 5 active subscribers, 0 reported triggered alerts.
- `/api/admin/alerts`: **application failure**; response is `{ success: false, error: "Failed to get alerts" }`.
- `/api/admin/price-history`: reachable; 50 rows, latest record **2026-07-24 20:01 UTC**.
- `/api/admin/drip-stats`: reachable; sent-statistics array is empty.
- `/api/admin/activity`: reachable, but exposes only `signup` and `watchlist` activity in the returned sample; no pageview, visitor, comparison, or attribution events.

## Immediate Recommendations

1. Add a small typed analytics helper that pushes `signup_completed`, `watchlist_add`, `price_comparison`, and `newsletter_subscribe` after successful actions.
2. Persist first-touch and last-touch UTM fields for signup/newsletter attribution.
3. Add queryable daily counters or a GA4 export for visitors, sources, pages, bounce, and comparisons.
4. Repair the price-tracking cron and `/api/admin/alerts` before using price-alert metrics in campaign decisions.
5. Add a browser/debug-stream check to confirm GTM requests and event delivery in production.

## Skill Note

The requested `analytics-tracking` skill is not installed or exposed in this session. This log therefore records a source-level and live-homepage fallback validation, not a full GTM preview/debug validation.
