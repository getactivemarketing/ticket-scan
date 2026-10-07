# TicketScan Tracking Validation — 2026-10-07

## Result

**GTM loads on the sampled pages. Conversion-event tracking is not validated and appears absent from the deployed bundle.**

## Checks

| Check | Result | Evidence |
|---|---|---|
| GTM on homepage | PASS | `GTM-T476F9S4` script and noscript iframe present |
| GTM on dashboard | PASS | `GTM-T476F9S4` script and noscript iframe present |
| GTM on watchlist | PASS | `GTM-T476F9S4` script and noscript iframe present |
| GTM on newsletter surface | PASS | `GTM-T476F9S4` script and noscript iframe present |
| Signup event | FAIL / not found | No explicit custom `dataLayer.push` event found in deployed JS |
| Watchlist-add event | FAIL / not found | No explicit custom `dataLayer.push` event found in deployed JS |
| Price-comparison event | FAIL / not found | No explicit custom `dataLayer.push` event found in deployed JS |
| Newsletter-subscribe event | FAIL / not found | Newsletter POST exists, but no explicit analytics event found |
| Outbound-ticket-click event | FAIL / not found | No explicit custom event found |
| UTM capture | NOT VERIFIED | No connected campaign analytics dataset or observable persistence path |

## Recommended fix

Add one shared typed client helper for analytics events and call it at the signup-success, watchlist-success, comparison-success, newsletter-success, and ticket-outbound boundaries. Define the matching GTM Custom Event triggers/tags, then verify in GTM Preview and a real browser session before relying on the dashboard.

Do not infer visitor, page-view, bounce, conversion, or traffic-source metrics from GTM's presence alone.

## Limitation

The requested `analytics-tracking` skill was not available in this workspace, so this is a static deployed-site validation rather than a GTM Preview/browser interaction test.
