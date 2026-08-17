# A/B Test: First Alert Activation Checklist

**Page:** Post-registration route (`/onboarding` versus current `/dashboard`)  
**Audience:** New users completing registration; exclude existing users and API/test accounts.  
**Hypothesis:** If new users are sent to a three-step first-alert checklist instead of a generic dashboard, signup-to-watchlist activation will increase by at least 20% relative because the next action is explicit, contextual, and ends in a visible payoff.

## Control

Current registration form → JWT stored → `router.push('/dashboard')` → generic Orlando search form. No progress indicator, event context, or target-price prompt.

## Variant

Registration → `/onboarding`:

1. Select event type and city, with skip links.
2. Search or select one suggested event.
3. Add it to the watchlist and set a target price.
4. Confirm: “You’re set. We’ll email you when this reaches $X.”

Keep the user’s event/query context through the route and use the account email for the alert. Do not claim an alert is active unless `target_price_set` and backend persistence both succeed.

## Metrics

- **Primary:** `watchlist_add / signup_complete` within 24 hours.
- **Activation guardrail:** `target_price_set / signup_complete` within 24 hours.
- **Secondary:** onboarding completion, time to first watchlist add, time to target price, search submit, signup error rate, next-7-day return session, newsletter opt-in.
- **Guardrails:** API errors, duplicate watchlist rows, alert creation errors, bounce/complaint rate once email telemetry exists.

## Sample and duration

The current weekly signup volume is about 8–13 users, so a conventional powered test would take too long. Use a **directional pilot of 100 new users per arm or 28 days, whichever comes later**, and do not declare a winner before at least 50 users per arm. Analytics must report confidence intervals and absolute counts; if traffic cannot reach 200 users in 28 days, ship the better UX as a product experiment and continue monitoring rather than calling it statistically significant.

## Implementation

- Add assignment at registration completion with a stable `cro_onboarding_v1` cookie/user attribute.
- Preserve `returnTo`, event ID, query, city, and source/UTM context.
- Add named events with `experiment_id` and `variant`: `signup_complete`, `onboarding_step_view`, `watchlist_add`, `target_price_set`, `onboarding_complete`.
- Ensure the target-price write is parameterized and idempotent.
- Do not expose variant to users who already have a watchlist item.

