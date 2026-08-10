# Onboarding Flow Design — 2026-08-10

## Goal

Move a newly registered user from account creation to a first target-price alert in under 60 seconds. The onboarding must be skippable, but the recommended path should always expose a concrete next action.

## Flow

### Step 1 — Choose interests (optional)

Prompt: “What are you shopping for?”

Use large, tap-friendly chips: Sports, Concerts, Theater, World Cup, and Other. Allow multi-select. Save only after the user continues. This personalizes suggestions but should never block search.

### Step 2 — Choose a city (optional)

Prompt: “Where do you usually go?”

Show recent/popular cities plus search. Let the user skip and change it later. Do not force Orlando as the default. Use the selection to prefill the dashboard search.

### Step 3 — Search and set an alert (required for activation, skippable for navigation)

Prompt: “Find one event to watch.”

Show a focused search field with city already selected, a few relevant suggested searches, and a result card with a prominent “Set price alert” action. On selection, ask for a target price using the current low as context. Preserve the choice if the user leaves and returns.

### Step 4 — Success

Message: “You’re set. We’ll watch [Event] and email you at or below $X.” Show current comparison and “Add another event.” Explain the next expected check/update time.

## Mobile-first wireframe

Full-screen single-column flow; progress indicator at the top (“1 of 3,” “2 of 3,” “3 of 3”), one primary CTA fixed near the bottom above the safe area, text links for Skip, and no more than one decision per screen. Keep event summary sticky during target-price entry.

## Entry logic

- From an alert CTA: skip interest/city steps and go directly to target-price setup after registration.
- From navbar registration: show interests, city, then search.
- From an existing watchlist event: show confirmation and allow editing the target.
- If onboarding is skipped: show a dismissible dashboard checklist with “Search an event,” “Set a target price,” and “Review your alert.”

## Success metrics

- First alert set within 60 seconds
- First alert set within 24 hours
- Step completion and skip rates
- Search-to-alert conversion
- 7-day return rate
- Alert email open/click and event revisit

## Growth handoff

Growth Agent should own the onboarding state model, pending-event deep link, target-price API contract, and dashboard checklist. Content Agent should provide concise interest labels, target-price helper text, confirmation copy, and recovery messages.
