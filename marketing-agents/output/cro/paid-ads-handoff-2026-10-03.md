# Paid Ads → CRO Handoff — 2026-10-03

## Current recommendation

Keep paid acquisition on measurement hold. Use `/dashboard` for event-discovery creative and `/venues` for venue-guide creative once tracking is ready. Do not optimize or scale from the latest platform totals; they are not paid-attributed.

## Evidence and blockers

- No Google Ads or Meta Ads account export/API is connected; spend, budget, CPA, ROAS, CTR, and campaign status are unavailable.
- GTM loads, but explicit signup, watchlist-add, newsletter, comparison, outbound-ticket-click, and UTM events are not queryable.
- Latest internal window: 1 signup, 0 watchlist adds, 0 newsletter subscriptions. These are not ad conversions.
- Price tracking remains down/stale. Paid copy must not promise price history, trends, alerts, buy/wait calls, or savings.

## CRO priorities

1. Add typed `signup_completed`, `watchlist_added`, `newsletter_subscribe`, and `outbound_ticket_click` dataLayer events after successful actions.
2. Persist first-touch and last-touch UTM values through discovery and registration.
3. QA mobile event discovery and preserve event context through outbound seller clicks.
4. Give `/dashboard` one clear above-the-fold “Find an event” CTA and `/venues` one clear “Browse venue events” CTA.
5. Provide a seven-day campaign export before making pause, boost, or budget decisions.

## Creative test handoff

Three drafts are ready in `output/ads/creative-2026-10-03-v1.md` through `v3.md`. Test discovery, onsale/presale clarity, and venue planning with `utm_content=paid-20261003-v1/v2/v3`. Do not judge winners on CTR alone; require an attributed downstream event.
