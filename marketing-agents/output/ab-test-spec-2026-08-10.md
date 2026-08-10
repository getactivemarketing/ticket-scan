# A/B Test Specification — 2026-08-10

## A/B Test: Compare first, alert second

**Page:** `/compare` and the comparison entry path from `/dashboard`

**Hypothesis:** If anonymous visitors can see a real price comparison and are offered a contextual “Get a price-drop alert” CTA beside the result, then completed account registrations per comparison session will increase by 20% relative to the current page-level login gate, because visitors will experience the product’s value before being asked for credentials.

**Control:** Anonymous visitors who open `/compare` are redirected to `/login` and cannot run a comparison. Logged-in visitors see the existing comparison form and results.

**Variant:** Anonymous visitors can run one comparison. Each result includes “Get a price-drop alert,” with supporting copy: “Free account. Set your target price and we’ll email you when it’s reached.” Clicking opens the existing registration flow with the event/query context preserved. Logged-in behavior remains unchanged except for the new CTA.

**Primary metric:** Completed registrations per anonymous comparison session.

**Secondary metrics:**

- Comparison search completion rate
- Alert CTA click-through rate
- Registration completion rate after alert CTA click
- First watchlist item added within 60 seconds
- Target price set within 60 seconds
- Outbound ticket click rate
- No-result rate and API error rate
- 7-day return rate

**Guardrails:** Do not reduce successful outbound ticket clicks by more than 5%; monitor API latency, duplicate registrations, support complaints, and alert creation failures.

**Sample size needed:** Use the first two weeks of instrumentation to establish the control registration rate. Plan for approximately 1,000 anonymous comparison sessions per arm for directional readout; power the final test at 80% power, 95% confidence, baseline conversion, and a minimum detectable relative lift of 20%. Analytics Agent must calculate the final number before launch.

**Duration:** Minimum 14 days and two full weekly cycles; continue until the pre-registered sample size is reached. Do not stop on an early daily spike.

**Implementation:**

1. Remove the client-side anonymous redirect in `web/src/app/compare/page.tsx`.
2. Add a stable experiment assignment cookie/user ID and log exposure before interaction.
3. Add the alert CTA to matched comparison cards and carry `eventId`, search parameters, and suggested target price into `/register?returnTo=...`.
4. Validate and sanitize the return context server-side before creating a watchlist item.
5. Log `compare_started`, `compare_completed`, `alert_cta_clicked`, `signup_started`, `signup_completed`, `watchlist_added`, and `target_price_set`.

**Decision rule:** Ship the variant only if the primary metric has a statistically credible positive lift, guardrails pass, and activation is not lower. If registration rises but first-alert activation falls, iterate on the handoff rather than shipping the registration result alone.
