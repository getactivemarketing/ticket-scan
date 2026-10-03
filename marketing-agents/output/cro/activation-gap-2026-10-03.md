## CRO Handoff — Activation Gap — 2026-10-03

Production admin snapshot:

- Total users: **264**
- New users in the last 7 days: **9**
- New users who added at least one watchlist item: **3 (33.3%)**
- New users with no watchlist item: **6 (66.7%)**
- All users with at least one watchlist item: **153 (58.0%)**

The six-user gap is an observed signup-to-watchlist drop-off, not a diagnosed cause. The admin API does not record search, compare, onboarding, error, or bounce events, so do not label the reason as “no interesting events,” “feature confusion,” or “immediate bounce.”

### Recommended test

On the empty-watchlist state, use one primary CTA:

> You’re one search away from a useful ticket plan. Find an event, save it to **your watchlist**, and get the onsale details in one place.

Button: **Find an event**

After the first save:

> Saved to **your watchlist**. Check the event page for onsale timing, venue sections, and links to buy.

### Measurement request

Instrument `signup_completed`, `event_search`, `event_view`, `watchlist_add`, `watchlist_remove`, `onsale_click`, and `return_visit`, each with a user/session identifier and timestamp. Report signup → search → event view → watchlist add conversion by cohort.

Do not promise price monitoring, price history, price-drop alerts, or buy/wait recommendations in the onboarding copy while those systems are unavailable.
