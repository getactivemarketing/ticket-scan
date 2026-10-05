## CRO handoff — activation gap — 2026-10-05

Live cohort: **7** users registered in the rolling 7-day window; **2** have at least one watchlist item and **5** have none. Cohort activation is **28.6%**. The API does not expose search, compare, onboarding completion, event-result quality, or bounce data, so the reason for the gap is unknown.

Recommended experiment:

- Show an empty-watchlist state immediately after signup.
- Use one primary CTA: **Find an event**.
- Explain the value using only verified features: dates, venues, onsale details, seating guidance, and links to buy.
- After the first save, confirm “Saved to your watchlist” and link directly to that event.
- Instrument `signup_complete`, `search_submit`, `event_view`, `watchlist_add`, `return_session`, and `outbound_ticket_click`.

Do not describe the watchlist as price tracking or promise alerts while the product-status restriction is active.
