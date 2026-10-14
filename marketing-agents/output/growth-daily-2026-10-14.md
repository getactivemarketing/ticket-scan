# Growth Daily — 2026-10-14

Source: live deployed admin API, pulled 2026-10-14. Counts are observed data, not estimates. Compared with the 2026-10-13 snapshot where available.

## User Health

| Segment | Count | % of total | vs yesterday |
|---|---:|---:|---|
| New (last 7 days) | 2 | 0.8% | 0 |
| Activated (has saved event) | 153 | 57.5% | 0 |
| Active (visited in 7 days) | n/a | n/a | Not measurable: no login/visit timestamp is exposed |
| At-risk (no visit 7–14d) | n/a | n/a | Not measurable: no login/visit timestamp is exposed |
| Churned (no visit 14d+) | n/a | n/a | Not measurable: no login/visit timestamp is exposed |

Context: 266 total users, 256 saved-event records, 113 users with zero saved events, 7 active newsletter subscribers, and 27 favorites.

## Activation Gap

- **2** users signed up in the last 7 days with 0 saved events (**100% of the two-user new cohort**).
- Both new users registered on October 12 or October 13 and have no saved event.
- Top reason: **not determinable from current instrumentation**. The API records signup and saved-event activity, but not onboarding completion, search results, bounce, or feature comprehension.
- CRO handoff: [handoff-cro-2026-10-14.md](handoff-cro-2026-10-14.md)

## Churn Signals

- Unsubscribes observed today: **0**. All 7 newsletter records returned by the admin API are active; no recent unsubscribe record is available.
- Users entering at-risk today: **n/a**. Visit recency is not stored.
- Alert-fatigue candidates: **n/a**. `/api/admin/alerts` is failing with `Failed to get alerts`, click-through data is not exposed, and price tracking is currently down. The stats endpoint reports 0 target-price fields and 0 triggered alerts; that is not evidence of engagement.
- Drip status: **0 sends reported** by `/api/admin/drip-stats`; 20 pending users are visible. Do not trigger a catch-up blast without owner approval and an SMTP delivery test.

## Churn Intervention

No intervention emails were sent. Drafts are prepared for Email Agent 5 in [growth-winback-emails-2026-10-14.md](growth-winback-emails-2026-10-14.md). They use saved-event context, onsale information, official ticket links, and venue guidance only. They do not mention price changes, price history, price alerts, savings, or buy/wait recommendations.

| Tier | Eligible cohort | Count today | Send timing |
|---|---|---:|---|
| Gentle nudge | 7–10 days inactive | n/a | Hold until visit tracking exists; then weekday late morning in the recipient’s local time |
| Value reminder | 10–14 days inactive | n/a | Hold until visit tracking exists; then 3–5 days after the gentle nudge |
| Win-back | 14+ days inactive | n/a | Hold until visit tracking and consent/delivery checks exist |

## Actions Triggered

- Win-back emails queued for sending: **0**; 3 draft tiers handed to Email Agent 5.
- Re-engagement nudges sent: **0**.
- Public posts: **0**.
- `/api/admin/drip-run`: **not called**; it could email a backlog without confirmed delivery instrumentation.

## Psychology-Driven Optimization

**Principle:** commitment and consistency, applied without promising unavailable price features.

**Where:** the first successful search result and empty saved-events state.

**Exact UX copy:**

> Save one event so it’s ready when you are. We’ll keep the date, venue, and official ticket links together in your saved events.

Button: **Save this event**

Empty-state follow-up: **Your first saved event is one search away — try a team, artist, or venue.**

**Expected impact:** lower the cognitive cost of the first activation step and give new users a concrete completion goal. Measure signup-to-first-saved-event conversion and first-session saves; do not claim an uplift percentage until instrumentation exists.

## Data Quality / Engineering Handoff

1. Add `last_login_at` or equivalent activity events so active, at-risk, and churned cohorts can be computed.
2. Add email delivery, open, and click events before using automated win-back or fatigue segmentation.
3. Fix `/api/admin/alerts` (currently failing) and keep price-related lifecycle copy disabled while tracking is down.
