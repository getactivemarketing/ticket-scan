# A/B Test: First-session save prompt

**Page:** First authenticated visit to `/dashboard` after registration.

**Hypothesis:** If new users see a focused first-session prompt that takes them directly from account creation to searching and saving one event, then signup→first-watchlist-save within 24 hours will increase by 25% relative to the current dashboard redirect, because the current flow ends registration at a blank, generic search surface with no guided next action.

**Control:** Current behavior. Registration succeeds, JWT is stored, and the user is redirected to `/dashboard`. The dashboard shows the standard search form and no onboarding prompt.

**Variant:** On the first authenticated dashboard visit, show a dismissible, mobile-first panel:

1. “Find an event to save” with city and event/artist/team inputs.
2. A single primary CTA: “Search events.”
3. After results load, highlight the first save action with helper text: “Save this event to revisit its onsale details and seller links.”
4. A secondary “Browse onsale dates” link and a “Skip for now” action.

If registration began from an anonymous EventCard save action, return the user to that event and complete the pending save after consent/confirmation rather than starting from a blank search.

**Primary metric:** `signup_success` → `save_event_success` within 24 hours, per newly registered user.

**Secondary metrics:** time to first search; search→result rate; result→save rate; first-session dashboard completion; seller outbound click within 24 hours; onboarding skip rate; registration error rate; 7-day return to watchlist.

**Guardrails:** no increase in duplicate watchlist rows, API errors, registration abandonment, or newsletter unsubscribes. Do not use price-alert setup, target-price entry, price trend, or buy/wait signals as experiment steps or metrics while product status is red.

**Sample size needed:** Use a calculator after the baseline is instrumented. As a planning assumption, if the baseline is 37.5%, a 25% relative lift means 46.9%; a two-sided 95%/80% test needs roughly 450 users per arm. At the current volume, this is a multi-week or multi-month test, so run it as a sequential rollout with a pre-registered minimum sample and stop rules rather than calling a result from a small weekly cohort.

**Duration:** Minimum 14 days after reaching the planned sample; run across at least two full weekday/weekend cycles. Do not end on a calendar date if the sample threshold is not reached.

**Randomization:** User-level assignment, sticky by anonymous ID before signup and preserved after signup. If a user starts from an event-save prompt, assign at the first exposure and retain the assignment through registration.

**Implementation:**

- Add a first-session flag to the auth/session client state; do not change JWT claims for the experiment.
- Add a `returnTo`/`pendingEvent` mechanism for anonymous save intent, validated against the known event payload and expiring after 30 minutes.
- Add the event schema in `cro-analytics-handoff-2026-10-05.md`.
- Keep public copy limited to saving events, onsale/presale information, venue context, and seller links.
- QA desktop/mobile, refresh behavior, skip behavior, registration failure, duplicate-submit, and anonymous-to-authenticated continuation.

