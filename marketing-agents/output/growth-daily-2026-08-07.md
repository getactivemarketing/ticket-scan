## Growth Daily — 2026-08-07

Snapshot pulled from the production admin API on 2026-08-07. The API does not expose last-login/last-visit timestamps, alert-click events, or a win-back send endpoint, so unsupported retention segments are marked N/A rather than inferred from signup age.

### User Health

| Segment | Count | % of Total | vs Yesterday |
|---|---:|---:|---|
| New (last 7 days; API rolling counter) | 5 | 2.5% | N/A — no prior snapshot |
| Activated (has watchlist) | 119 | 59.5% | N/A — no prior snapshot |
| Active (visited in 7 days) | N/A | N/A | Visit telemetry unavailable |
| At-risk (no visit 7–14d) | N/A | N/A | Visit telemetry unavailable |
| Churned (no visit 14d+) | N/A | N/A | Visit telemetry unavailable |

Calendar-window note: six accounts were created from 2026-07-31 through 2026-08-07 in the returned user data, and all six have one watchlist item. The API's rolling `usersThisWeek` value is 5, likely because its database clock/window has not included the full calendar window.

### Activation Gap

- 0 users in the observed calendar last-7-day cohort had 0 watchlist items (0 of 6).
- Top reason: no activation gap is visible in this cohort; every observed signup added a watchlist item.
- Broader product signal: 81 of 200 users have no watchlist item (40.5%). This is a historical onboarding opportunity, not a current-week failure.
- Handoff to CRO Agent (Agent 6): test a post-signup progress cue — “You’re 1 event away from your first price alert” — and a one-click event suggestion immediately after registration. Preserve the successful current-week behavior as the control.

### Churn Signals

- Unsubscribes today: 0 visible in the newsletter endpoint; 4 total subscribers are currently active.
- Users entering at-risk today: N/A — last-visit data is not exposed.
- Alert-fatigue candidates: 0 observable; active target-price alerts = 0 and triggered alerts = 0. The alerts endpoint returned an internal failure, so click/non-click analysis is unavailable.
- Drip stats: no drip sends returned; this warrants an Email Agent check before treating the campaign as healthy.

### Churn Intervention Queue

No emails were sent or queued. The production API exposes no safe bulk win-back endpoint, and there is no last-visit field to establish eligibility. Drafts are prepared below for Email Agent (Agent 5) once engagement telemetry and consent-safe sending are available.

#### Tier 1 — Gentle nudge (7–10 days inactive)

- Subject: `A quick price check on your TicketScan watchlist`
- Timing: next weekday at 10:00 AM recipient local time.
- Body:

  Hi there — prices move, sometimes quietly and sometimes like they’ve had three espressos. Your TicketScan watchlist is ready to check. Compare current prices across marketplaces and see whether anything has improved before you buy. Keep tracking: [View my watchlist]

  — TicketScan

#### Tier 2 — Value reminder (10–14 days inactive)

- Subject: `You may have missed a price move on your watchlist`
- Timing: next weekday at 10:00 AM recipient local time.
- Body:

  Your watchlist has been waiting while ticket prices did their usual little dance. We found [X] event(s) with a price change since your last visit. Take a look before the market changes again: [Review price changes]

  TicketScan compares the marketplaces so you do not have to open twelve tabs and lose the will to live.

#### Tier 3 — Win-back (14+ days inactive)

- Subject: `Here’s what changed while you were away`
- Timing: Tuesday or Thursday at 10:00 AM recipient local time; suppress after one send for 14 days.
- Body:

  We missed you — the ticket market did not. While you were away, [X] event(s) on your watchlist changed price, including [event name] at [current price / change]. Come back for a fresh comparison and decide whether to buy, wait, or hold: [Open TicketScan]

  No fake countdowns. No “trust us, it’s a deal.” Just the data.

### Actions Triggered

- Win-back emails queued: 0 (no eligible cohort telemetry or send endpoint).
- Re-engagement nudges sent: 0 (same constraint).
- Activation handoff written for Agent 6: yes.
- Win-back content handoff written for Agent 5: yes.

### Psychology-Driven Micro-Optimization

**Principle:** Commitment and consistency.

**Where:** Post-registration onboarding and the empty watchlist state.

**Exact UX copy:** `You’re 1 step from your first price alert` followed by `Add an event to your watchlist. We’ll track prices while you get on with your day.` Use a single primary CTA: `Find an event to track`.

**Expected impact:** reduce first-session hesitation and increase the registration-to-first-watchlist conversion by an estimated 5–10% relative lift. Validate with an A/B test; the estimate is a hypothesis, not an observed result.

### Measurement Gaps / Next Instrumentation

- Add `last_seen_at` or equivalent authenticated activity timestamp to support 7–14 day and 14+ day cohorts.
- Log alert delivery, open/click, and unsubscribe events with user and watchlist IDs.
- Repair or expose `/api/admin/alerts` so alert-fatigue candidates can be computed.
- Add a consent-safe admin action for individually reviewed Tier 1–3 sends; do not bulk-send from this report.

