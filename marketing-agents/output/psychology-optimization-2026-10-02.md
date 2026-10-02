# Psychology Optimization — 2026-10-02

## Principle: Commitment and consistency

**Where:** The authenticated dashboard empty state immediately after signup, when the user has zero watchlist items.

**Exact UX change:**

> **You’re one event away from a useful watchlist.** Find a show, game, or concert you care about and save it here.

Primary button: **Find an event**

Progress indicator: `1 Create account → 2 Save an event → 3 Review ticket options`

**Expected impact:** The current seven-day signup cohort has a 62.5% activation gap (5 of 8 users have no watchlist item). A concrete next step should reduce ambiguity and improve first-watchlist conversion. Validate with `dashboard_empty_viewed`, `dashboard_empty_cta_clicked`, and `watchlist_created`; do not claim lift without instrumentation and a sufficiently large cohort.
