# TicketScan Tracking Validation — 2026-08-14

## Checks performed

| Check | Result | Evidence / limitation |
|---|---|---|
| GTM loads on live homepage | PASS | Live HTML includes GTM container `GTM-T476F9S4`, `dataLayer`, and the Google Tag Manager loader. |
| GTM coverage in app shell | PASS (code) | `web/src/app/layout.tsx` installs the GTM script and noscript iframe at the root layout. |
| Signup conversion event | NOT VERIFIED / RISK | No explicit `dataLayer.push` or analytics event call found in `web/src`; API signup route exists. |
| Watchlist-add conversion event | NOT VERIFIED / RISK | `EventCard` calls the API, but no explicit analytics event call found in `web/src`. |
| Price-comparison conversion event | NOT VERIFIED / RISK | Compare API/client route exists, but no explicit analytics event call found in `web/src`. |
| Newsletter-subscribe conversion event | NOT VERIFIED / RISK | API route exists, but no explicit analytics event call found in `web/src`. |
| New pages missing tracking | NO shell gap found | All Next pages inherit the root layout; runtime tag firing was not available for inspection. |
| UTM capture/persistence | NOT VERIFIED / RISK | No UTM persistence implementation found in the inspected frontend source; GA attribution data unavailable. |

## Immediate action

Create a small shared client analytics helper that pushes named events (`signup`, `watchlist_add`, `price_comparison`, `newsletter_subscribe`) with non-PII event metadata, and persist campaign UTM parameters for attribution. Then validate each event in GTM Preview and GA4 DebugView. Do not use email addresses or other PII as event parameters.

## API health observations

- `/api/admin/alerts` returned HTTP 500, so alert history validation is blocked.
- `/api/admin/price-history` returned 50 records, newest `2026-07-24T20:01:07.151Z`; investigate tracking freshness.
- `/api/admin/drip-stats` returned no sent-email rows; verify cron and SMTP logs.

