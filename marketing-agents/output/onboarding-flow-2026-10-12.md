# Lightweight Onboarding Flow — 2026-10-12

## Goal

Move a new account from registration to one meaningful action in under 60 seconds: a useful event search followed by saving an event for later revisiting. Onboarding is skippable, mobile-first, and based on currently working product value.

## Flow

### 1. Welcome / interest

Headline: `What do you want to find?`

Choices: Sports, Concerts, Theater, World Cup 2026. Allow one or more selections, plus `Skip for now`.

### 2. City

Headline: `Where should we start?`

Use a searchable city field with a small set of popular suggestions. Preselect nothing unless a trustworthy source already provides location. Primary action: `Show events`; secondary: `Skip`.

### 3. Search and save

Open the dashboard with the chosen values applied. Focus the search input and show a single helper line:

> Search an event, then save it so you can revisit the details and seller links.

After a successful save, show a success toast/banner and link to `My Watchlist`.

### 4. Completion

Headline: `Your first event is saved`

Body: `Find it anytime in your watchlist, along with its event details, onsale information, and seller links.`

Actions: `Open my watchlist` and `Keep browsing`.

## Interaction rules

- Maximum two setup questions before the dashboard.
- Persist the onboarding step locally so refresh does not restart the flow.
- If the API or search fails, keep the user on the current step, show an actionable error, and allow skip.
- If there are no results, suggest removing the date filter, browsing onsales, or opening a venue guide.
- Never require a price target or reference price data.
- Do not say “set your first alert,” “we’ll notify you when it drops,” or “prices changed.”

## Minimal implementation surface

- `web/src/app/register/page.tsx`: preserve the return source and route to onboarding after successful registration.
- New `web/src/app/onboarding/page.tsx`: render the two setup steps and hand off to dashboard.
- `web/src/app/dashboard/page.tsx`: accept safe query parameters for city/category and render the first-action helper.
- `web/src/context/AuthContext.tsx`: expose no new auth provider or dependency; registration remains the current JWT flow.
- `web/src/lib/api.ts`: reuse existing search and watchlist methods; do not add tracking endpoints as part of onboarding.

## Measurement

Emit `onboarding_started`, `onboarding_interest_selected`, `onboarding_city_selected`, `onboarding_skipped`, `onboarding_search_submitted`, `onboarding_watchlist_added`, and `onboarding_completed`. Include `source_surface`, selected category count, and whether the user skipped. Do not include raw email or token data.

