# TicketScan Tracking Validation — 2026-08-23

## Result

**FAIL — GTM container loads, but conversion instrumentation is incomplete.**

## Checks

| Check | Result | Evidence |
|---|---|---|
| GTM present site-wide | PASS | `web/src/app/layout.tsx` includes `GTM-T476F9S4` script and noscript iframe. |
| Signup conversion event | FAIL | No `dataLayer.push`, `gtag`, or equivalent signup event in `web/src`. |
| Watchlist-add conversion event | FAIL | No client-side analytics event found; backend activity endpoint does record watchlist actions. |
| Price-comparison conversion event | FAIL | No client-side analytics event found. |
| Newsletter-subscribe conversion event | FAIL | No client-side analytics event found. |
| UTM capture | FAIL | No UTM parsing or persistence found in frontend source. |
| Admin alerts telemetry | FAIL | `GET /api/admin/alerts` returns `Failed to get alerts`. |
| Price tracking freshness | FAIL | Latest `/api/admin/price-history` record is 2026-07-24 20:01 UTC. |

## Recommended remediation

1. Add a small typed analytics helper that pushes `signup`, `watchlist_add`, `price_comparison`, and `newsletter_subscribe` events to `window.dataLayer`.
2. Persist first-touch and session UTM parameters, then pass them with conversion events.
3. Repair the admin alerts query/route and inspect the 4-hour price-tracking cron and scheduler logs.
4. Verify SMTP/drip scheduler execution for users at day 3, 7, and later milestones.
