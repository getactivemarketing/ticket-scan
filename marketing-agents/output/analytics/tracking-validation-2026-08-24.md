# TicketScan Tracking Validation Log — 2026-08-24

## Live page spot-check

Checked with HTTP requests at 2026-08-24:

| Route | HTTP | GTM container | Server-rendered dataLayer marker |
|---|---:|---|---:|
| `/` | 200 | `GTM-T476F9S4` | Present |
| `/dashboard` | 200 | `GTM-T476F9S4` | Present |
| `/compare` | 200 | `GTM-T476F9S4` | Present |
| `/watchlist` | 200 | `GTM-T476F9S4` | Present |
| `/world-cup-2026` | 200 | `GTM-T476F9S4` | Present |
| `/blog` | 200 | `GTM-T476F9S4` | Present |

## Conversion-event validation

- Signup event: **FAIL / not verifiable** — no explicit `dataLayer.push` or shared tracking helper found in `web/src`.
- Watchlist-add event: **FAIL / not verifiable** — application action exists, but no explicit analytics event was found.
- Price-comparison event: **FAIL / not verifiable** — compare API/UI exists, but no explicit analytics event was found.
- Newsletter-subscribe event: **FAIL / not verifiable** — subscribe UI/API exists, but no explicit analytics event was found.
- GTM loading: **PASS for sampled server-rendered routes** — all six returned 200 and included the same container.
- New-page coverage: **PARTIAL** — sampled routes pass; a complete route crawl and browser execution were not available.
- UTM capture: **FAIL / not found** — no UTM persistence/capture implementation or admin attribution report found.

## API checks

- Admin stats: **PASS**, HTTP 200.
- Admin users/watchlist/newsletter/activity/popular-events/drip-stats/price-history: **PASS**, HTTP 200.
- Admin alerts: **FAIL**, HTTP 500. Likely schema mismatch: route uses `triggered_at` and `email_sent`; initialized schema uses `sent_at`.
- Price tracking freshness: **FAIL** — newest returned record is 2026-07-24 20:01 UTC.

## Action required

1. Correct `/api/admin/alerts` to use the actual `price_alerts.sent_at` schema (or migrate deliberately after confirmation).
2. Inspect the price-tracking cron logs and database writes after 2026-07-24.
3. Add and test a shared client-side event helper for `signup`, `watchlist_add`, `price_comparison`, and `newsletter_subscribe`.
4. Persist UTM parameters on landing and attach them to signup/newsletter conversion records.
