## CRO Handoff — 2026-10-08

### Finding

The Oct 1–8 signup cohort contains 3 users; 2 have no watchlist item. This is a **66.7% activation gap** in the observed cohort. The admin API does not expose search history, onboarding completion, or page-level conversion events, so the reason is unknown.

### Recommendation

After registration, send users directly to an event-discovery state with a single CTA: **Find an event to save**. Explain that a saved event keeps onsale timing, venue information, and purchase links together. Preserve the current product-status constraint: do not promise price tracking or alerts.

### Instrumentation

Record `signup_completed`, `event_search_started`, `event_viewed`, and `watchlist_item_created` with timestamps and an anonymous/user identifier. Report first-watchlist activation within 24 hours and 7 days.

### Acceptance criteria

- Empty-watchlist state has one primary next action.
- First-watchlist creation is measurable from signup.
- Copy contains no unsupported price or alert claims.
- Compare activation against the existing flow before declaring lift.
