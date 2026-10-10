# TicketScan Tracking Validation — 2026-10-10

## Result

**GTM loads on sampled deployed pages. Conversion-event tracking is not validated and appears absent from the deployed bundle.**

## Checks

| Check | Result | Evidence |
|---|---|---|
| GTM on homepage | PASS | HTTP 200; `GTM-T476F9S4` script and noscript iframe present |
| GTM on dashboard | PASS | HTTP 200; `GTM-T476F9S4` script and noscript iframe present |
| GTM on venue page | PASS | HTTP 200; `GTM-T476F9S4` script and noscript iframe present |
| Signup event | FAIL / not found | No explicit custom `dataLayer.push` event found in source/bundle inspection |
| Watchlist-add event | FAIL / not found | No explicit custom `dataLayer.push` event found |
| Price-comparison event | FAIL / not found | No explicit custom `dataLayer.push` event found |
| Newsletter-subscribe event | FAIL / not found | Newsletter POST exists, but no explicit analytics event found |
| Outbound-ticket-click event | FAIL / not found | No explicit custom event found |
| UTM capture | NOT VERIFIED | No connected campaign analytics dataset or observable persistence path |

## API validation

- `/api/admin/activity` is reachable but returns only 20 recent records; it is not a complete conversion-event source.
- No activity records for Oct 5–10 were returned.
- `/api/admin/alerts` returned HTTP 500, so alert-event measurement cannot be validated.

## Recommended fix

Add one shared typed client helper for analytics events and call it at signup-success, watchlist-success, comparison-success, newsletter-success, and ticket-outbound boundaries. Define matching GTM Custom Event triggers/tags, then verify in GTM Preview and a real browser session before relying on the dashboard.

Do not infer visitor, page-view, bounce, conversion, or traffic-source metrics from GTM’s presence alone.

## Limitation

The requested `analytics-tracking` skill was unavailable in this workspace. This is a static deployed-site and API validation, not a GTM Preview/browser interaction test.
