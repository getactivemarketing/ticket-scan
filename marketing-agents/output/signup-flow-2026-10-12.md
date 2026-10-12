# Signup Flow Optimization Spec — 2026-10-12

## Recommendation

Keep email + password registration as the first release. Do not introduce Google/Apple login or email-only account creation in this iteration: both require additional backend, privacy, recovery, and account-linking work, while the current larger problem is the absence of a useful post-signup action.

## Proposed flow

### Step 1 — Create account

Retain the current fields: email, password, confirm password. Add a concise value line:

> Save events, revisit seller links, and keep upcoming onsale dates in one place.

Keep password requirements visible before submission. Preserve inline server errors and do not clear valid fields after a failed request.

### Step 2 — Personalize the first search (optional but recommended)

Ask for:

- one city, with a searchable input and a `Skip for now` action;
- one interest type: Sports, Concerts, Theater, or World Cup 2026.

This should be a client-side preference step until a durable preferences endpoint exists. If persistence is not ready, pass the values into the dashboard query and do not imply that a profile has been permanently configured.

### Step 3 — First action

Open `/dashboard` with the city prefilled and the search prompt focused. Show a progress label: `Step 2 of 2 · Find an event to save`. After the visitor saves an event, show a confirmation:

> Saved. You can revisit this event, its onsale details, and seller links from your watchlist.

Do not mention price alerts, price history, or price movement.

## Wireframe description

Desktop: centered card, logo, progress indicator at top, one question per view, primary button on the right, skip link beneath. Mobile: full-width card with the same hierarchy, sticky bottom action area, 44px minimum controls, and no dense multi-column form.

## Behavioral rules

- Preserve the intended destination when signup began from an event card.
- If signup began from a compare result, return to the result only after the compare guest path is made functional; otherwise return to dashboard with a clear message.
- If the user skips preferences, land on dashboard with the default city and a visible search prompt.
- If the first search returns no results, show nearby date/category suggestions and a link to onsales, not a blank state.
- If watchlist save fails, keep the event context and provide retry plus a direct event link.

## Success metrics

- signup completion from signup start;
- first search submission within 10 minutes of registration;
- first event view;
- first watchlist add within the first session;
- first seller click within seven days;
- seven-day return to watchlist or dashboard.

All metrics require the event taxonomy in the weekly audit before they can be reported.

