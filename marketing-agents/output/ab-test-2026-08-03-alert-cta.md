# A/B Test: Alert CTA vs. Watchlist Icon

**Page:** `/dashboard` event results, with the same component treatment on event detail where available.

**Hypothesis:** If the anonymous EventCard replaces the unlabeled watchlist icon with a visible “Get price-drop alerts” CTA, then `watchlist_added / eligible_event_card_view` will increase by 20% relative because the benefit is explicit at the moment of intent. The test should also improve signup-to-target-price activation once context is preserved.

**Control:** Current EventCard: “Buy Tickets” button plus an icon-only watchlist action. Anonymous users see an overlay after clicking the icon, with “Track This Event,” “Sign Up Free,” and “Maybe Later.”

**Variant:** Keep “Buy Tickets,” add a full-width or equal-weight secondary button labeled “Get price-drop alerts.” On click, open an inline/modal signup prompt that includes event name, “Set your target price,” and a continuation path. Authenticated users see “Set price alert” and can add/edit a target without leaving the results page.

**Primary metric:** `target_price_set / eligible_event_card_view`.

**Secondary metrics:** signup start rate, signup completion rate, watchlist add rate, compare/outbound click rate, zero-result rate, dismiss rate, duplicate-add/error rate, 7-day return rate, and alert delivery rate.

**Guardrails:** outbound ticket click-through must not fall more than 5%; search completion latency and API error rate must not increase; no duplicate watchlist rows.

**Sample size needed:** Estimate from the current baseline after instrumentation. For planning, detect a 20% relative lift with 80% power and 95% confidence; if baseline target-price activation is 5%, this requires roughly 3,000 eligible users per arm (final calculator should use actual baseline and traffic).

**Duration:** Minimum 14 days and at least one full weekday/weekend cycle; extend until both arms reach the precomputed sample size.

**Randomization:** User-level when authenticated; anonymous first-party experiment ID persisted in local storage/cookie. Do not reassign across visits.

**Implementation:**

1. Add experiment assignment and exposure events to `EventCard`.
2. Add a contextual signup route/query containing event ID and source page.
3. Add a post-registration continuation that creates the watchlist item and captures target price.
4. Keep current auth behavior as the control to isolate CTA copy/visibility first; do not change compare gating inside this test.
5. Exclude internal/admin traffic and users with the same event already tracked.

**Decision rule:** Ship the variant only if the primary metric has a statistically credible lift, guardrails pass, and the effect persists across mobile and desktop. If signup completion rises but target-price activation does not, keep the copy but fix the post-signup handoff before rerunning.
