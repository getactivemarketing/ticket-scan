# Lightweight Onboarding Flow — 2026-10-05

## Goal

Move a new user from registration to one saved event in under 60 seconds while delivering verified value: event discovery, onsale/presale context, venue information, and seller links. The flow must be skippable and must not depend on unavailable price tracking.

## Steps

### Step 1 of 3 — Choose a starting point

Heading: **What are you looking for?**

Choices: Sports, Concerts, Theater, World Cup 2026, or Search by artist/team/event. Keep this optional. Selecting a category should prefill the search context, not create a commitment.

### Step 2 of 3 — Choose a city

Heading: **Where should we start?**

Use a searchable city field with common city suggestions. Allow “Anywhere” and “Use my current city” only if location permission is explicitly requested and explained. Store the selection as a preference only after the user continues.

### Step 3 of 3 — Save one event

Heading: **Save your first event**

Open the dashboard search with the selected category/city prefilled. After results, emphasize the save control and explain: “Save events so you can revisit dates, venue details, onsale/presale information, and seller links.”

Success state: **You’re set.** “Your event is in the watchlist.” Buttons: `View watchlist` and `Search another event`.

## Rules

- Max three screens; no required preference survey before search.
- Every step has `Skip` or `Do this later`.
- Preserve a pending EventCard save intent and complete it after registration.
- Mobile-first: one primary button, large tap targets, no dense multi-column forms.
- Do not say “set your first alert,” “watch the price,” “price changed,” “buy now,” or similar.

## Growth handoff

Growth should recruit 3–5 recent non-activating signups and 3 power-user proxies for a five-minute usability check. Ask where they expected to land after signup, what they wanted to do next, and whether “save this event” or “watchlist” is clearer. Do not lead with the unavailable monitoring feature.

## Success metrics

- First-session `save_event_success` within 24 hours.
- Time from `signup_success` to first search and first save.
- Completion vs skip rate for each step.
- 7-day `watchlist_view` return rate.
- Seller outbound click from a saved event.

