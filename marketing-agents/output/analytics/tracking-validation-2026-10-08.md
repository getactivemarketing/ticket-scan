# Tracking Validation Log — 2026-10-08

## Scope

Validated the live site and repository implementation for GTM loading, conversion-event instrumentation, and UTM capture. The requested `analytics-tracking` skill was not available in this session; this is a direct code/API/site validation.

## Checks

| Check | Result | Evidence |
|---|---|---|
| GTM on homepage | PASS | Live HTML contains `GTM-T476F9S4` and the GTM bootstrap |
| GTM on dashboard | PASS | Live HTML contains the same container |
| GTM on compare | PASS | Live HTML contains the same container |
| GTM on watchlist | PASS | Live HTML contains the same container |
| GTM on register | PASS | Live HTML contains the same container |
| GTM on city/category page | PASS | Live HTML contains the same container |
| GTM on venue page | PASS | Live HTML contains the same container |
| Signup event | FAIL / UNINSTRUMENTED | No `dataLayer.push` or `gtag` in `web/src`; no recent signup activity |
| Watchlist-add event | FAIL / UNINSTRUMENTED | No `dataLayer.push` or `gtag` in `web/src`; backend activity stops at 2026-10-04 |
| Price-comparison event | FAIL / UNINSTRUMENTED | No event push or admin counter exists |
| Newsletter-subscribe event | FAIL / UNINSTRUMENTED | No event push; subscriber API has no attribution/event telemetry |
| UTM capture | FAIL / UNINSTRUMENTED | Test UTM parameters were not persisted or surfaced by live pages/API |
| Admin alert endpoint | FAIL | `GET /api/admin/alerts` returned HTTP 500 |
| Price-history freshness | FAIL | 202 records; newest `checked_at` is 2026-07-24T20:01:07.151Z |

## Routes tested

`/`, `/dashboard`, `/compare`, `/watchlist`, `/register`, `/tickets/chicago`, `/venues/madison-square-garden`.

## API snapshot

- `/api/admin/stats`: HTTP 200; 264 users, 256 watchlist items, 6 active subscribers, 0 reported triggered alerts.
- `/api/admin/activity`: HTTP 200; 20 returned records, newest 2026-10-04T21:07:06.755Z.
- `/api/admin/drip-stats`: HTTP 200; empty sent-stat array, 20 pending users.
- `/api/admin/alerts`: HTTP 500; `Failed to get alerts`.

## Priority

P0: instrument the four requested conversion events and persist UTM attribution. P0: repair the alert endpoint and stale activity pipeline. P1: expose page views, landing pages, traffic source, and bounce rate in the daily reporting surface.
