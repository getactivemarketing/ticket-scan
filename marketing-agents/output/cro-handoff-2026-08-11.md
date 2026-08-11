## CRO Handoff — Activation Gap — 2026-08-11

Agent 6: the live seven-day signup cohort is 8 users; 2 users (25.0%) have no watchlist item. The six activated users produce a 75.0% cohort activation rate.

### Gap cohort

| User ID | Email | Signup UTC |
|---:|---|---|
| 204 | patsfancdn@gmail.com | 2026-08-09 22:12 |
| 202 | gemmaba1991@gmail.com | 2026-08-08 06:56 |

### Recommended onboarding test

After signup, land users in an event picker rather than an empty dashboard. Use category and location shortcuts, one-click “Track this event,” and the progress cue:

`Account created ✓ → Pick an event → Set your price ceiling`

Empty-state copy: “You’re one event away from your first price alert. Track a game, concert, or show and we’ll keep watch while ticket prices do their usual little dance.”

Primary CTA: **Find an event to track**.

Instrument `signup_complete`, `event_picker_view`, `event_search`, `watchlist_add`, and `first_alert_set`. Primary metric: watchlist add within 24 hours of signup; secondary metric: first alert set within 24 hours. The API cannot currently distinguish no-interest, feature confusion, or bounce.

