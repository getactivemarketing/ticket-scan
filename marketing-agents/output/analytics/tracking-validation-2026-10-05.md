## TicketScan Tracking Validation — 2026-10-05

### Result

**FAIL — GTM is present on sampled live routes, but conversion and attribution events remain uninstrumented or unverified.**

### Checks

| Check | Result | Evidence / impact |
|---|---|---|
| GTM container | PASS for presence | `GTM-T476F9S4` appeared in the HTML for `/`, `/dashboard`, `/compare`, and `/world-cup-2026`. Presence does not prove a published GA4 tag is firing. |
| Signup conversion | FAIL | No explicit `dataLayer.push`, `gtag`, or typed analytics event in the registration flow/source review. |
| Watchlist-add conversion | FAIL | `EventCard` calls `api.addToWatchlist`, but does not emit a named analytics event after success. |
| Price comparison conversion | FAIL / unavailable | Compare API/UI exists, but no verified frontend conversion event or admin series exists. Price tracking is also currently down; do not report price results. |
| Newsletter conversion | FAIL | `NewsletterSignup` posts to the subscribe endpoint, but emits no analytics event. |
| Onsale/presale engagement | FAIL | No named `onsale_view` or `presale_view` event was verified. |
| Outbound seller click | FAIL | Ticket links open externally, but no verified outbound-click event was found. |
| UTM capture | FAIL | No first-/last-touch persistence or attribution fields were verified. |
| Cross-domain tracking | UNVERIFIED | Vercel frontend and Railway API are separate origins; no documented linker/session strategy was found. |
| Admin/analytics reconciliation | FAIL | Admin API has user/watchlist counts but no visitors, channels, pageviews, searches, comparisons, or return-session metrics. |
| Email telemetry | FAIL | Drip stats returned no sent-statistics rows; delivery/open/click/bounce fields are not exposed. |
| Alert telemetry | FAIL | `/api/admin/alerts` returned HTTP 500. Current triggered-alert count is 0 in stats, but detail cannot be validated. |
| Price-data freshness | FAIL | `/api/admin/price-history` returned 50 rows; newest `checked_at` is `2026-07-24T20:01:07.151Z`. |

### Immediate Actions

1. Add a small typed analytics helper and emit `page_view`, `search_submit`, `compare_view`, `signup_complete`, `watchlist_add`, `onsale_view`, `newsletter_subscribe`, `return_session`, and `outbound_ticket_click`.
2. Persist first-touch and last-touch UTM fields with landing page and referrer, subject to the project’s consent policy.
3. Add a daily aggregate/export for sessions, users, pageviews, channels, searches, comparisons, signups, watchlist adds, newsletter subscriptions, and outbound clicks.
4. Repair `/api/admin/alerts` and add delivery telemetry for drip and alert email providers.
5. Add freshness timestamps, event-schema validation, and duplicate-event detection to the dashboard.

### Validation Method

- Source review of `web/src/app/layout.tsx`, `web/src/components/EventCard.tsx`, and `web/src/components/NewsletterSignup.tsx`.
- Live HTML spot-checks of four routes.
- Admin API status and payload checks performed at 2026-10-05.
