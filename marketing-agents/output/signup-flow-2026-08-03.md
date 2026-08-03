# Signup Flow Optimization — 2026-08-03

## Recommendation

Keep email and password in one short form for the first iteration. Do not make email-only registration and defer password creation: that creates a second recovery moment and does not reduce the total commitment enough to justify the complexity. Add Google sign-in when the team can support provider setup, account linking, and recovery; it is a likely friction reducer, but should be a follow-up test rather than a prerequisite for activation.

## Proposed flow

1. User clicks “Get price alerts” from an event card, comparison preview, or event detail.
2. Signup sheet/page shows the event name and the promise: “We’ll watch this price and email you when it reaches your target.”
3. Form: email, password, show-password toggle, password requirements, terms/privacy link, and primary CTA “Create account & set alert.” Keep confirm-password only if backend policy requires it; otherwise remove it and use inline password validation.
4. On success, restore the originating event context and show “Set your target price” with a suggested target based on the current lowest price. User can edit, skip once, or confirm.
5. Confirmation: “You’re tracking [event]. We’ll check every 4 hours.” Link to watchlist and event details.

## Wireframe description

Desktop: centered card with a small event summary at the top, a two-field form, one primary CTA, and a short three-item value row: compare, track, alert. A narrow progress label reads “1 of 2 — Create account” and after submission “2 of 2 — Set alert.”

Mobile: bottom sheet or full-screen card with event title, current low price, one-column fields, large thumb-friendly CTA, and a visible “Not now” link. Keep the event context above the fold and do not require a new search after signup.

## Preference capture

Do not add teams, cities, or event types before the first alert. Capture preferences after the first alert is set, or offer them as optional personalization on the confirmation screen. The first action should deliver direct value; preference questions are secondary.

## Required implementation changes

- Preserve `eventId`, event metadata, source page, and intended action in a signed/validated server-side or short-lived client state; never trust a client-provided price as authoritative.
- Add a post-registration continuation route/state.
- Add target-price capture to the UI and submit it through the existing parameterized watchlist API.
- Handle expired/invalid event context with a graceful “Search another event” fallback.
- Add `signup_started`, `signup_completed`, `watchlist_added`, `target_price_set`, and `onboarding_skipped` events.

## Success criteria

Primary: signup completion among users who open the contextual signup. Secondary: target price set within 60 seconds, first watchlist item within 24 hours, and 7-day return. Watch error rate, duplicate tracking, alert-delivery success, and unsubscribes as guardrails.
