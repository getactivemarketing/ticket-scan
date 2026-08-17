# Signup Flow Optimization Spec — 2026-08-17

## Recommendation

Keep email + password as the baseline, but reduce the first screen to email and password only. Remove confirm-password as a separate required field; show a password reveal control and inline requirement (“8+ characters”). Add Google sign-in as a secondary option after the baseline event taxonomy is in place. Defer Apple until iOS traffic justifies the integration.

Do not make registration email-only. A passwordless or deferred-password flow adds recovery and delivery dependencies while the existing JWT flow is simple and working. Test social login after the activation checklist, not before.

## Proposed flow

```text
/register
  Create your free price-alert account
  [Continue with Google]
  ───────── or ────────
  Email + Password
  [Create account]
  “Free forever. We only email about your alerts and chosen updates.”
        ↓
/onboarding
  Step 1 of 3: Choose interests + city (optional)
        ↓
  Step 2 of 3: Find one event
        ↓
  Step 3 of 3: Set your price ceiling
        ↓
/watchlist
  “Your first alert is ready.”
```

## Preferences

Ask for interests and city after account creation, not on the registration form. Both are skippable and should personalize the search default. Use existing favorite storage where supported; do not block account creation on preference writes.

## Wireframe notes

- Desktop: centered card, max width 480px, logo, one primary CTA, one secondary social CTA.
- Mobile: single-column full-height card; keyboard must not obscure the CTA.
- Show progress only after registration, as `1 of 3`, `2 of 3`, `3 of 3`.
- Preserve the event a user selected before signup; returning them to a blank dashboard is a context break.
- Inline errors should identify the field and recovery action. Server errors should not erase entered email.

## Success criteria

- Signup completion rate does not decline by more than 5% relative to current baseline.
- Signup → watchlist add rises toward 70%+ in the first measured cohort.
- At least 50% of new accounts set a target price within 24 hours once the backend field is functional.
- Median registration-to-first-alert time is under 60 seconds.

