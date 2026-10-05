# Signup Flow Optimization — 2026-10-05

## Recommendation

Keep email + password registration as the first implementation, but reduce the post-signup blank state and preserve the user’s originating event. Do not add preference questions before the user sees value. Social login is a later experiment, not the immediate fix: it requires provider setup, account-linking rules, privacy review, and a new recovery path.

## Proposed flow

### 1. Intent-preserving entry

When an anonymous user clicks save on an EventCard, open the registration route with a short-lived, signed or validated `returnTo`/pending-event context. Example: `/register?returnTo=%2Fdashboard&eventId=...`. Never trust arbitrary redirect URLs; allow only same-origin routes and validate the event ID against the current payload.

The registration page should say:

> Save this event to revisit its onsale details and seller links.

This is safe, concrete, and matches the current product.

### 2. Account creation

Retain the three-field form for now: email, password, confirm password. Add a password requirement hint before submit, an accessible show/hide password control, autocomplete attributes, and inline errors. Add a small progress indicator: `1 of 2 — Create account`.

Do not ask for favorite teams, cities, or categories here. Those fields add cognitive load before the first useful result and can be inferred later from the user’s first search/save.

### 3. Immediate continuation

After registration, show `2 of 2 — Save your first event` rather than routing to an unmodified dashboard. If there is a pending event, show its title/date/venue and a confirmation CTA: “Save this event.” If not, show the search form with the first field focused and a city placeholder.

Secondary action: “Skip for now — browse events.” The skip path must still land on the dashboard and must not create an empty or misleading watchlist row.

### 4. Success state

After the first save, show a compact confirmation:

> Saved to your watchlist. Revisit it anytime for the event date, venue details, onsale/presale information, and seller links.

Actions: “View watchlist” (primary) and “Search another event” (secondary).

## Wireframe description

Mobile: single-column card, progress label above heading, event context or search fields, one full-width primary button, text skip link below. No modal that obscures the whole viewport.

Desktop: centered max-width panel with the same order. If a pending event exists, use a two-column layout: event summary on the left, save confirmation on the right. Keep the search fallback below or behind “Find a different event.”

## Social login decision

Defer Google/Apple login until email signup, activation, and attribution are instrumented. If later added, offer it above the email form as “Continue with Google” and preserve the same pending-event and first-save continuation. Add account-linking and duplicate-email acceptance tests before launch.

## Preference capture decision

Defer preferences until after the first save. On the success state or a later optional prompt, ask one question at a time: “What should we show you more often?” with sports, concerts, theater, and World Cup. Store explicit answers separately from inferred interests.

## Acceptance criteria

- A user who starts from an EventCard returns to that event after registration.
- A direct signup reaches a first-action prompt, not an empty generic dashboard.
- Skip remains available and usable by keyboard and screen reader.
- Refreshing or opening a second tab does not duplicate the save.
- Copy contains no price-alert, price-history, target-price, trend, or buy/wait promise.

