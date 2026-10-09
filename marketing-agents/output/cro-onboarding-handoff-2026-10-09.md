# CRO Handoff — Onboarding Improvement — 2026-10-09

## Objective

Move a new user from signup to one saved event or useful venue guide in the first session. Current instrumentation cannot explain why users stop, so measure before optimizing aggressively.

## Proposed flow

1. After signup, show a short “What are you planning to see?” path: team/artist/event search or venue guide.
2. Put one clear “Save event” action on the result and detail view; keep “watchlist” as supporting language.
3. Confirm the saved event and offer a next step: view venue guide or browse onsale details.
4. Ask for newsletter consent separately; do not make it a hidden prerequisite.

## Events

Track `signup_success`, `onboarding_started`, `search_submit`, `event_detail_view`, `save_event_success`, `watchlist_view`, `venue_guide_view`, and `seller_outbound_click`. Include anonymous session ID, user ID after signup, source, and event/venue identifier.

## Test plan

- Compare “Save event” with “Add to watchlist.”
- Compare event-first versus venue-guide-first onboarding.
- Recruit 3–5 recent signup-only users and 3 multi-save users for short interviews.

Success is a measurable increase in first-session saved-event completion, not an inferred retention claim.
