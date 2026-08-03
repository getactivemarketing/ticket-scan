# First-Alert Onboarding Flow — 2026-08-03

## Goal

Move a new user from account creation to a first active price alert in under 60 seconds. Keep the flow to three screens plus a confirmation and allow skipping without losing the account.

## Flow

### Step 1 — Pick interests (optional, 10 seconds)

Headline: “What do you want to see first?”

Show four large chips: Sports, Concerts, Theater, World Cup. Selecting one changes suggested searches and can be skipped. Persist only after explicit save.

### Step 2 — Pick a city (optional, 10 seconds)

Headline: “Where do you want to go?”

Use a searchable city field with popular city shortcuts. Pre-fill from the originating landing page when available. The default should not silently assume Orlando for every user; label any default clearly.

### Step 3 — Set the first alert (required for completion, 30 seconds)

If signup started from an event, show that event immediately: current all-in low, trend, source, and a target-price input with a suggested target. CTA: “Start tracking this price.”

If no event context exists, show a search field plus three popular event shortcuts, then return to the same target-price sheet.

### Step 4 — Success

Headline: “You’re covered.”

Copy: “We’ll check this event every 4 hours and email you when it reaches $X.”

Actions: “View my watchlist” and secondary “Find another event.”

## UX requirements

- Progress indicator: “Step 1 of 3,” “Step 2 of 3,” “Step 3 of 3.” Do not count the success state.
- Skip links are visible but subordinate; skipped users see a dashboard checklist with one prominent “Set your first alert” action.
- Mobile-first cards, 44px minimum targets, no tour overlay, and no more than one decision per screen.
- Restore state after refresh and handle API failure without discarding entered values.
- The target-price action must create or update the watchlist item idempotently.

## Growth handoff

Growth should own the checklist, completion nudges, and 1/3/7-day reminders. The first reminder should deep-link to the last event context; stop reminders immediately after `target_price_set`.

## Measurement

Track step view, completion, skip, back, validation error, API error, target price set, time to first alert, and 1/7-day return. Report completion by source page, device, and whether event context was present.
