# Paid Ads → CRO Handoff — 2026-08-25

## Acquisition destination

Use `/compare` for comparison-led acquisition once measurement is repaired. Keep the first comparison as low-friction as possible; require signup only for watchlist and alert actions.

## Evidence and blockers

- No Google Ads or Meta spend, CPA, ROAS, CTR, audience, or campaign export is connected.
- No paid-source, visitor, pageview, bounce, or comparison-event denominator is queryable.
- GTM loads, but explicit conversion events and UTM persistence are not implemented.
- Price history is stale after 2026-07-24 20:01 UTC; `/api/admin/alerts` is failing.
- The latest internal window shows 4 signups and 11 watchlist adds, but 9 watchlist adds came from one account and all 238 watchlist items have no target price. Treat this as a product/measurement signal, not paid performance.

## CRO priorities

1. Add and validate `compare_started`, `compare_completed`, `signup_completed`, `watchlist_added`, and `target_price_set` events with `page_path` and non-PII campaign metadata.
2. Persist first-touch and last-touch UTM values through comparison and signup.
3. QA anonymous mobile comparison and preserve event/query context through registration.
4. Repair the price-tracking pipeline and alerts before advertising live price-drop notifications.
5. Add an explicit “Compare prices” CTA to search results and report conversion by campaign and creative.

## Creative test handoff

Three draft variants are ready in `marketing-agents/output/ads/creative-2026-08-25-v1.md` through `v3.md`. Test comparison, fee clarity, and budget-control angles with `utm_content=paid-v1/v2/v3`; do not scale on CTR alone.

