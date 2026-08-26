## CRO Handoff — Agent 6 — 2026-08-26

### Activation gap

- New users in the last 7 days: **20**
- New users with no watchlist item: **8 (40.0%)**
- New users with a watchlist item: **12 (60.0%)**
- Evidence source: production `/api/admin/users?limit=1000&offset=0`, matched on `created_at` and `watchlist_count`.

### Recommended onboarding fix

For a registered user with an empty watchlist, show: **“You’re 1 step from your first price alert.”** Add a direct **Search events** CTA, followed by an explanation that the user can tap **Track price** on any result. After the first add, prompt: **“Set a target price to make the alert smarter.”**

### Instrumentation request

Track `signup_completed`, `search_started`, `compare_viewed`, `watchlist_added`, and `target_price_set` with user/session identifiers. The current API cannot distinguish “no interesting events,” “feature confusion,” or immediate bounce, so those reasons remain unverified.

