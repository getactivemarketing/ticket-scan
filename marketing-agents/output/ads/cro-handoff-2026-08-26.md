# Paid Ads → CRO Handoff — 2026-08-26

## Evidence

- HTTP smoke checks for `/`, `/compare`, `/dashboard`, and `/world-cup-2026/` returned 200.
- Live admin totals: 243 users, 243 watchlist items, 5 active subscribers, 0 active alerts, and 0 triggered alerts. No paid attribution is available.
- `/api/admin/alerts` returned HTTP 500.
- GTM is present, but source inspection did not verify named comparison, registration, watchlist, newsletter, or UTM-persistence events.

## Recommended CRO tests

1. On `/compare`, place “Compare Ticketmaster, SeatGeek & StubHub” beside the primary CTA; test against generic search language.
2. Preserve event/search parameters through registration so a paid visitor can return to the comparison they started.
3. Add and QA `compare_started`, `compare_completed`, `register_completed`, `watchlist_added`, and `newsletter_subscribe` events in GTM Preview and GA4 DebugView.
4. Persist first-touch and last-touch UTMs through the funnel and expose them in the conversion reporting layer.

## Guardrail

Do not use live-drop, lowest-price, guaranteed-alert, or specific-savings claims in paid creative until price tracking freshness and `/api/admin/alerts` are repaired and verified.
