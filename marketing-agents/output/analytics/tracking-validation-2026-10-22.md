## Tracking Validation — 2026-10-22

The requested `analytics-tracking` skill is not installed in this environment. This is a fallback validation using deployed HTML and repository source inspection; it does not replace a GTM Preview/session-level test.

### Results

| Check | Result | Evidence |
|---|---|---|
| GTM loads on homepage | PASS | `GTM-T476F9S4` present in deployed HTML |
| GTM loads on dashboard | PASS | `GTM-T476F9S4` present in deployed HTML |
| GTM loads on compare | PASS | `GTM-T476F9S4` present in deployed HTML |
| GTM loads on watchlist | PASS | `GTM-T476F9S4` present in deployed HTML |
| GTM loads on FAQ | PASS | `GTM-T476F9S4` present in deployed HTML |
| Signup conversion event | NOT VERIFIED | No explicit `dataLayer.push`, `gtag`, or analytics call found in `web/src`; no signup in the current reporting window |
| Watchlist-add conversion event | NOT VERIFIED | No explicit conversion instrumentation found in `web/src`; no add in the current reporting window |
| Price-comparison conversion event | NOT VERIFIED | No explicit conversion instrumentation found; comparison metric is absent from admin data |
| Newsletter-subscribe conversion event | NOT VERIFIED | No explicit conversion instrumentation found; no subscription in the current reporting window |
| UTM capture | NOT VERIFIED | No `utm_source`, `utm_medium`, or `utm_campaign` handling found in `web/src` |

### Action Required

1. Add explicit conversion pushes for signup, watchlist add, comparison, and newsletter subscribe.
2. Confirm GTM triggers and tags in GTM Preview mode.
3. Preserve campaign UTM parameters through landing pages and store or forward them to analytics.
4. Add a queryable event/traffic source report before using funnel or campaign conversion metrics.
