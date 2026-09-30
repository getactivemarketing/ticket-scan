# CRO Handoff — Paid Ads — 2026-09-30

## Priority

Make `/compare` measurable before spending. The page is the clearest match for
comparison-led ads, but the current stack does not expose paid traffic,
conversion, or UTM performance.

## Recommended changes

1. Add a shared typed analytics helper and fire `compare_started` when a user submits a comparison, `signup_completed` after registration, `watchlist_add` after a successful add, and `newsletter_subscribe` after a successful subscription.
2. Persist landing UTMs through registration and subscription so Google/Meta conversions retain source and creative.
3. Keep one primary above-the-fold CTA: **Compare Ticketmaster, SeatGeek & StubHub**.
4. Add a visible trust/expectation line: **Compare available options before you choose where to buy.** Avoid unverified savings claims.
5. Repair price-history freshness and alert observability before using price-drop creative.

## Evidence

- Live product totals: 260 users, 254 watchlist items, 6 active subscribers.
- GTM container is present, but application-level conversion pushes were not verified in source inspection.
- Paid source attribution and pageview data are unavailable.
- Latest reported price-history record is July 24; `/api/admin/alerts` returns HTTP 500.

## Suggested test

Run a 50/50 `/compare` CTA test after event instrumentation is deployed:

- Control: `Search tickets`
- Variant: `Compare Ticketmaster, SeatGeek & StubHub`

Primary metric: `compare_started` rate. Secondary metrics: registration and
watchlist-add rate. Do not judge on clicks alone.
