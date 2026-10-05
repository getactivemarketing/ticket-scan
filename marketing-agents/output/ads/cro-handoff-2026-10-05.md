# CRO Handoff — Paid Ads — 2026-10-05

## Priority

Make the event-discovery funnel measurable before spending. Paid platform data
and conversion attribution are unavailable, so landing-page changes cannot be
ranked by paid performance yet.

## Recommended changes

1. Add and validate typed events for `signup_completed`, `watchlist_added`, `newsletter_subscribe`, `comparison_started`, and `outbound_ticket_click`.
2. Persist landing UTMs through registration and newsletter signup.
3. Keep one clear above-the-fold CTA on discovery pages: **Find events and where to buy**.
4. Add an expectation line: **Find event details, onsale timing, venue guides, and seller links in one place.**
5. Keep comparison-led and price-led ad tests paused until product status and instrumentation support those claims.

## Suggested test

After instrumentation, test:

- Control: **Search tickets**
- Variant: **Find events and where to buy**

Primary metric: `outbound_ticket_click` rate. Secondary metrics: signup and
watchlist-add rate. Do not judge on clicks alone.
