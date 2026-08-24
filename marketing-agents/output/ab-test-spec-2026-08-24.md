# A/B Test Specification — 2026-08-24

## A/B Test: Compare first, alert second

**Page:** `/compare`, including entry from `/dashboard`

**Hypothesis:** If anonymous visitors can complete one real comparison and see a contextual “Set a price alert” CTA beside the result, then completed registrations per comparison session will increase by **20% relative** to the current login gate, because users experience the product’s price-saving value before credential friction.

**Control:** Anonymous visitors opening `/compare` are redirected to `/login`. Logged-in users see the current comparison form/results.

**Variant:** Anonymous visitors can run one comparison. Each matched result shows “Get a price-drop alert” with “Free account. Set your target price and we’ll email you when it’s reached.” Clicking opens registration with event ID, query, and suggested target price preserved. Price comparison remains visible; alert creation requires signup.

**Primary metric:** Completed registrations per anonymous comparison session.

**Secondary metrics:** comparison completion, alert CTA click-through, registration completion after alert CTA, watchlist add within 60 seconds, target price set within 60 seconds, outbound ticket click, no-result/API-error rate, and 7-day return.

**Guardrails:** outbound ticket clicks do not decline more than 5%; no duplicate watchlist rows, broken return links, API latency regression, or alert-creation errors.

**Sample size needed:** Establish baseline for two weeks. Use approximately 1,000 anonymous comparison sessions per arm for a directional read; Analytics Agent must calculate the final powered sample using baseline conversion, 80% power, 95% confidence, and 20% relative MDE.

**Duration:** Minimum 14 days and two full weekly cycles, or until the pre-registered sample size is reached.

**Implementation:** remove the unconditional redirect; assign a stable experiment variant; log exposure before interaction; add contextual alert CTA; carry validated event/search context through `/register`; create the watchlist/target price after registration; fire `compare_started`, `compare_completed`, `alert_cta_clicked`, `signup_started`, `signup_complete`, `watchlist_add`, and `target_price_set`.

**Decision rule:** Ship only if registration lift is credible, guardrails pass, and first-alert activation is not lower. Registration lift without alert activation is not a win.

