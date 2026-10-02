# Tracking Audit Findings — 2026-10-02

## Result

**FAIL — GTM is present site-wide, but the conversion and attribution layer remains unverified or missing.**

## Checks

| Check | Result | Evidence / impact |
|---|---|---|
| GTM container | PASS for presence | `GTM-T476F9S4` is embedded in `web/src/app/layout.tsx`; presence does not prove a published GA4 tag is firing |
| Signup conversion | FAIL / unverified | No explicit `dataLayer.push`, `gtag`, or typed event found in frontend source |
| Watchlist-add conversion | FAIL / unverified | API call exists; no named client analytics event found |
| Compare conversion | FAIL / unverified | `/api/events/compare` exists; no verified frontend event or GA4 series |
| Newsletter conversion | FAIL / unverified | Subscribe API exists; no verified frontend event or GA4 series |
| Onsale/presale engagement | FAIL / uninstrumented | No named event for onsale detail views was found |
| Outbound seller click | FAIL / uninstrumented | No verified outbound-click event was found |
| UTM capture | FAIL | No first-/last-touch persistence or attribution fields found |
| Cross-domain tracking | UNVERIFIED | Frontend and API are separate origins; no documented linker/session strategy was found |
| Admin vs analytics reconciliation | FAIL | Visitors, channels, pageviews, searches, comparisons, and returns are absent from the admin API |
| Email telemetry | FAIL | Drip endpoint returns zero sent rows; delivery/open/click/bounce fields are not exposed |
| Alert telemetry | FAIL | `/api/admin/alerts` returns `Failed to get alerts`; current triggered alerts are 0 |
| Price-data freshness | FAIL | Latest price-history row is 2026-07-24 20:01 UTC |

## Recommended implementation

### P0 — make current product behavior measurable

Add a small typed client helper and fire: `page_view`, `search_submit`, `compare_view`, `signup_complete`, `watchlist_add`, `onsale_view`, `newsletter_subscribe`, `return_session`, and `outbound_ticket_click`. Include route, event ID where available, provider/source, timestamp, anonymous session ID, and authenticated user ID only under the project’s consent policy.

### P1 — attribution and reconciliation

Persist first-touch and last-touch `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, landing page, and referrer. Define a daily aggregate or GA4 Reporting API export for sessions, users, pageviews, channels, searches, compares, signups, watchlist adds, newsletter subscriptions, and outbound clicks. Reconcile daily aggregates against admin totals.

### P1 — email and alert observability

Record provider message ID, sent, delivered, bounced, opened, clicked, complained, and unsubscribed states. Repair the alert admin query and add a regression test for alert creation, dispatch, and reporting once the underlying price flow is operational.

### P2 — quality controls

Add a dashboard freshness timestamp, event-schema validation, duplicate-event detection, and a weekly discrepancy report. Document whether the API origin shares a session or attribution key with the Vercel origin.

## New events justified by this week’s findings

- `onsale_view`: TicketScan’s currently valid product promise and a better near-term content KPI.
- `outbound_ticket_click`: measures referral intent without claiming TicketScan completes sales.
- `save_event_success`: distinguishes an attempted watchlist click from a successful save.
- `activation_checklist_complete`: optional composite event for the post-signup path.

## Public-copy note

Until the tracker, alerts, and data freshness are repaired, analytics dashboards and marketing copy must not describe price history, price trends, alerts, target-price notifications, or buy/wait recommendations as working features.
