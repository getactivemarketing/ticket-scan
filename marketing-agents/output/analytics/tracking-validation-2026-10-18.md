## Tracking Validation — 2026-10-18

### Results

| Check | Result | Evidence |
|---|---|---|
| GTM loads on homepage | PASS | `GTM-T476F9S4` present in live HTML |
| GTM loads on dashboard | PASS | `GTM-T476F9S4` present in live HTML |
| GTM loads on compare | PASS | `GTM-T476F9S4` present in live HTML |
| GTM loads on watchlist | PASS | `GTM-T476F9S4` present in live HTML |
| GTM loads on FAQ | PASS | `GTM-T476F9S4` present in live HTML |
| Signup conversion event | NOT VERIFIED | No explicit `dataLayer.push`, `gtag`, or analytics call found in `web/src`; no signup activity after October 13 |
| Watchlist-add conversion event | NOT VERIFIED | No explicit conversion instrumentation found; no watchlist additions after October 4 |
| Price-comparison conversion event | NOT VERIFIED | No explicit conversion instrumentation found; comparison metric is absent from admin data |
| Newsletter-subscribe conversion event | NOT VERIFIED | No explicit conversion instrumentation found; latest recorded subscription is October 12 |
| UTM capture | NOT VERIFIED | No `utm_source`, `utm_medium`, or `utm_campaign` handling found in `web/src` |

### Action Required

1. Add or verify explicit conversion pushes for signup, watchlist add, comparison, and newsletter subscribe.
2. Confirm the corresponding GTM triggers and tags in GTM Preview mode.
3. Preserve campaign UTM parameters through landing pages and store or forward them to analytics.
4. Investigate the activity-log gap after October 13 before using conversion totals for campaign decisions.

### Scope Note

The requested `analytics-tracking` skill is not installed in this environment. This validation used live HTML checks plus repository source inspection as a fallback; it does not replace a GTM Preview/session-level test.
