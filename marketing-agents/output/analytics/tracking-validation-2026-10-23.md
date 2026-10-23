## Tracking Validation — 2026-10-23

The requested `analytics-tracking` skill is not installed in this environment. This is a fallback validation using deployed HTML, HTTP checks, repository source inspection, and admin activity data; it does not replace a GTM Preview/session-level test.

### Results

| Check | Result | Evidence |
|---|---|---|
| GTM loads on homepage | PASS | `GTM-T476F9S4` present in deployed HTML |
| GTM loads on dashboard | PASS | `GTM-T476F9S4` present in deployed HTML |
| GTM loads on compare | PASS | `GTM-T476F9S4` present in deployed HTML |
| GTM loads on watchlist | PASS | `GTM-T476F9S4` present in deployed HTML |
| GTM loads on FAQ | PASS | `GTM-T476F9S4` present in deployed HTML |
| GTM loads on venue guide | PASS | `GTM-T476F9S4` present in deployed HTML |
| Sampled page HTTP responses | PASS | All six sampled routes returned HTTP 200 |
| Signup conversion event | NOT VERIFIED | No explicit `dataLayer.push`, `gtag`, or analytics call found in `web/src`; 0 signups in the current 24h window |
| Watchlist-add conversion event | NOT VERIFIED | No explicit conversion instrumentation found; 0 adds in the current 24h window |
| Price-comparison conversion event | NOT VERIFIED | No explicit conversion instrumentation found; no comparison metric exists in admin reporting |
| Newsletter-subscribe conversion event | NOT VERIFIED | No explicit conversion instrumentation found; 0 subscriptions in the current 24h window |
| Outbound ticket-click event | NOT VERIFIED | No explicit outbound-click instrumentation found |
| UTM capture | NOT VERIFIED | No `utm_source`, `utm_medium`, or `utm_campaign` handling found in `web/src` |

### Action required

1. Add explicit conversion pushes for signup, watchlist add, comparison, newsletter subscribe, and outbound ticket clicks.
2. Confirm GTM triggers/tags in GTM Preview mode.
3. Preserve campaign UTM parameters through landing pages and store or forward them to analytics.
4. Add a queryable daily event and traffic-source report before using funnel or campaign conversion metrics.

