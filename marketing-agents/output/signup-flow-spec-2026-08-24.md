# Signup Flow Optimization Specification — 2026-08-24

## Recommendation

Keep email + password for the first release, remove confirm-password, show password requirements inline, and preserve the event that caused signup. Add Google sign-in after baseline instrumentation and only if it creates the same JWT plus pending-event handoff. Defer Apple sign-in. Do not use email-only registration until verification, recovery, and return-session behavior are designed.

## Redesigned flow

1. **Intent capture:** `/register?eventId=...&returnTo=...` displays “Set an alert for [Event]” when signup began from an event. Validate and sanitize context server-side.
2. **Account:** progress label “Step 1 of 2 · Create your free account”; email, password, show/hide control, inline requirements, primary CTA “Continue to set your alert.” Remove confirm password.
3. **First alert:** event/date/venue, current lowest observed price, target-price input prefilled to a rounded suggestion, label “Notify me when price is at or below,” email consent, “Start tracking,” and low-emphasis “Skip for now.”
4. **Success:** “You’re tracking [Event]. We’ll email you when it reaches $X.” Primary “Compare current prices,” secondary “Add another event,” and next-check expectation.

## Preference capture

Do not add teams, cities, or event types to the required signup. Ask one optional preference question after the first alert or in onboarding: Sports, Concerts, Theater, World Cup, Other.

## Wireframe rules

Centered mobile-first card; one primary action per screen; persistent event summary during target entry; accessible labels and errors; preserve values after API failure; maximum two required screens; allow skip without losing the pending event.

**Activation definition:** registration complete + watchlist item + target price set within 60 seconds.

