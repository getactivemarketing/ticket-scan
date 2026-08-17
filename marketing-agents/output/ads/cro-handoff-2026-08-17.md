## Paid Ads → CRO Handoff — 2026-08-17

### What is known

- `/`, `/dashboard`, `/compare`, `/register`, `/watchlist`, `/world-cup-2026`, and `/blog` returned HTTP 200 in the analytics smoke check.
- The last 24-hour platform totals were 2 new signups and 2 watchlist adds, but neither can be attributed to paid traffic.
- GTM loads across representative pages.

### Conversion blockers to prioritize

1. Add typed analytics events for `signup`, `watchlist_add`, `price_comparison`, and `newsletter_subscribe`.
2. Persist first-touch and last-touch UTM parameters and expose aggregate channel attribution.
3. Validate each event in GTM Preview and GA4 DebugView.
4. Repair the price-history pipeline, stale since 2026-07-24, before running price-alert creative.
5. Repair `/api/admin/alerts`, currently returning HTTP 500, before using alert conversion data.

### Suggested landing-page tests

- `/compare`: make the three-source comparison promise visible beside the primary CTA; test `Compare prices` against generic search language.
- `/dashboard`: explain target-price setup in one short step and show what the alert delivers.
- `/world-cup-2026/`: test a three-source comparison CTA against a guide-first CTA; avoid unverified price or savings claims.

### Measurement requirement

Do not declare a winning ad or landing page until each test has attributed sessions, CTA clicks, signup/watchlist/comparison events, and enough volume for a meaningful comparison.
