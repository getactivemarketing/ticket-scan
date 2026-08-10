# Signup Flow Optimization Specification — 2026-08-10

## Recommendation

Keep email + password for the first iteration, but remove the confirm-password field, add password requirements inline, preserve the triggering event, and make the first alert the completion moment. Add Google sign-in only after the baseline is instrumented and only if implementation can maintain the same pending-event handoff. Defer Apple sign-in until demand and platform support justify the extra complexity.

Do not use email-only registration without a clear verification/recovery design. The current JWT flow can support a faster form, but collecting a password later creates an additional return-session dependency and can weaken activation.

## Redesigned flow

### Step 0: Intent capture

When a visitor clicks an alert CTA, store a validated pending event reference, search context, and suggested target price. The registration page should say “Set an alert for [Event Name]” rather than generic “Start tracking ticket prices today.”

### Step 1: Create account

Wireframe: centered card with a compact progress label “Step 1 of 2 · Create your free account,” event summary at the top, email field, password field, password requirements shown before typing, primary CTA “Continue to set your alert,” and a small login link. Remove confirm password; use server-side validation and a show/hide control.

Optional Google button: place below the primary CTA with “Continue with Google,” but only when the backend can issue the same JWT and attach the pending event safely.

### Step 2: Set first alert

Wireframe: event card with date/venue, current lowest observed price, target-price input prefilled to a sensible rounded threshold, a simple “Notify me when price is at or below” label, email notification consent, and CTA “Start tracking.” Include “Skip for now” as a low-emphasis action.

### Success state

Show a confirmation panel: “You’re tracking [Event]. We’ll email you when it reaches $X.” Include “Compare current prices” as the primary next action and a secondary “Add another event.” Redirect to `/event/[id]` or `/watchlist`, not a blank search state.

## Preference capture

Do not ask for favorite teams, cities, and event types before the first alert. These are useful personalization fields but are secondary to activation. Ask one optional question after the first alert or in the onboarding continuation: “What do you usually shop for?” with Sports, Concerts, Theater, World Cup, and Other.

## Progress and friction rules

- Maximum two required screens after an alert CTA.
- Keep the email field prefilled when a user returns from an interruption.
- Return API errors inline near the relevant field; keep entered values.
- Explain that TicketScan compares and alerts but does not sell tickets.
- Track form start, validation error, submit, completion, first alert, and skip separately.

## Activation definition

Activated user = registration completed, at least one watchlist item created, and a target price set within 60 seconds of registration. This definition should be the signup optimization north star, with completed registration as a secondary diagnostic metric.
