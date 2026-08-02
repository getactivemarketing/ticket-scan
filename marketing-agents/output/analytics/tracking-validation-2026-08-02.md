## TicketScan Tracking Validation — 2026-08-02

Status: **FAIL — conversion and attribution tracking is incomplete.**

### Checks

| Check | Result | Evidence |
|---|---|---|
| GTM loads globally | PASS (implementation) | `web/src/app/layout.tsx` injects `GTM-T476F9S4` in the shared layout and noscript body fallback. |
| Signup conversion event | FAIL | No explicit `dataLayer.push` or named analytics event found around registration success. |
| Watchlist-add conversion event | FAIL | `EventCard.tsx` calls the API, but no analytics event is emitted after a successful add. |
| Price-comparison conversion event | FAIL | Compare UI/API flow has no confirmed analytics event. |
| Newsletter conversion event | FAIL | `NewsletterSignup.tsx` posts to the API, but no success event is emitted. |
| GTM on all pages | PASS (layout coverage) | All inspected App Router pages inherit the root layout; live page-view reporting itself is not available to verify. |
| UTM capture/persistence | FAIL | No frontend capture or backend persistence for `utm_source`, `utm_medium`, `utm_campaign`, or related parameters found. |
| Admin alert reporting | FAIL | `/api/admin/alerts` returned HTTP 500. |
| Price tracking freshness | FAIL | Newest `/api/admin/price-history` record is `2026-07-24 20:01:07 UTC`; no records were written in the current or prior seven daily windows. |

### Immediate Actions

1. Add post-success `dataLayer.push` events for `signup_complete`, `watchlist_add`, `price_comparison_complete`, and `newsletter_subscribe` with non-PII event metadata.
2. Persist sanitized UTM parameters at first visit/session and associate them with signup/newsletter records.
3. Repair `/api/admin/alerts` and add a health check for the four-hour price-tracking job, including last-success timestamp and source-level failures.
4. Verify GA4/GTM tags in Preview mode and in browser network traces on `/`, `/dashboard`, `/compare`, `/watchlist`, and `/world-cup-2026`.

No external posts or API mutations were made by this run.
