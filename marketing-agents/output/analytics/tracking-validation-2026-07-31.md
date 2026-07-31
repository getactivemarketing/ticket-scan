## Tracking Validation — 2026-07-31

### Result: FAIL / incomplete conversion measurement

#### GTM

- Container ID: `GTM-T476F9S4`
- Installation: present in `web/src/app/layout.tsx` and loaded from the root layout, including a noscript iframe. This should cover routed pages rendered by the Next.js app.
- Live configuration validation: not possible from repository/API access alone; Google Tag Manager preview or GA4 DebugView access is required.

#### Conversion events

| Event | Defined in inspected frontend? | Live firing verified? | Status |
|---|---|---|---|
| Signup | No event push/tag found | No | FAIL |
| Watchlist add | No event push/tag found | No | FAIL |
| Price comparison | No event push/tag found | No | FAIL |
| Newsletter subscribe | No event push/tag found | No | FAIL |

The live API confirms 4 signups and 2 watchlist adds in the reporting window, but those database actions are not a substitute for analytics events.

#### UTM capture

- No frontend persistence or API field for UTM parameters was found in the inspected code.
- Status: **UNKNOWN / likely not captured**. Validate with a tagged test URL and confirm values in GA4/GTM before relying on paid, social, or email attribution.

#### Pages missing tracking

- No page is missing the GTM bootstrap because it is mounted globally.
- All pages remain missing confirmed meaningful conversion instrumentation until GTM preview/GA4 DebugView shows the four events above.

#### Related operational checks

- `/api/admin/stats`: HTTP 200.
- `/api/admin/price-history?limit=10000`: HTTP 200, 202 total rows, newest row 2026-07-24 20:01 UTC; no current-window records.
- `/api/admin/alerts?limit=10000`: **HTTP 500** (`Failed to get alerts`).
- `/api/admin/drip-stats`: HTTP 200, but send-statistics array is empty.

### Immediate fixes

1. Add a shared analytics helper that pushes `signup`, `watchlist_add`, `price_comparison`, and `newsletter_subscribe` events to `dataLayer`.
2. Connect GA4 in GTM and define tags/triggers plus key-event marking.
3. Persist UTM source/medium/campaign on first visit or signup.
4. Fix `/api/admin/alerts` and add a regression test.
5. Investigate the price-tracking cron/data-provider gap beginning after 2026-07-24 20:01 UTC.
