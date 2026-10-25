# Growth Daily — 2026-10-25

Source: live deployed admin API, pulled 2026-10-25. Counts below are observed data, not estimates. The requested `churn-prevention` and `marketing-psychology` skills are not installed in this session; equivalent lifecycle and behavioral frameworks were applied manually. Product-status restrictions are in force.

## User Health

| Segment | Count | % of total | vs yesterday |
|---|---:|---:|---|
| New (last 7 days, calendar-date review) | 1 | 0.4% | Flat (1 → 1) |
| Activated (has saved event) | 153 | 57.3% | Flat (153 → 153) |
| Active (visited in 7 days) | n/a | n/a | Not measurable: no login/visit timestamp is exposed |
| At-risk (no visit 7–14d) | n/a | n/a | Not measurable: no login/visit timestamp is exposed |
| Churned (no visit 14d+) | n/a | n/a | Not measurable: no login/visit timestamp is exposed |

Context: 267 total users, 256 saved-event records, 114 users with zero saved events, 7 active newsletter subscribers, 27 favorites, 0 active alerts, and 0 triggered alerts reported. “Activated” means at least one saved event; it does not prove recent activity. The zero-alert figures are system state, not engagement evidence, and must not be used to claim alert performance.

## Activation Gap

- **1** user signed up during the October 18–25 calendar-date window and has 0 saved events (**100% of the current one-user cohort**).
- The newest account was created October 20 and has no saved event.
- Top reason: **not determinable from current instrumentation**. Signup and saved-event records exist, but search completion, result quality, onboarding exposure, bounce, and feature-comprehension events do not.
- CRO handoff: [cro-growth-handoff-2026-10-25.md](cro-growth-handoff-2026-10-25.md)

## Churn Signals

- Unsubscribes in the last 24 hours: **0 observed**. The newsletter endpoint exposes current subscriber state, not a complete unsubscribe-event stream; all 7 returned subscribers are active.
- Users entering “at-risk” today: **n/a**. Visit recency is not stored.
- Alert-fatigue candidates: **n/a**. The alerts endpoint returned HTTP 500, click-through data is not exposed, and the product’s price-tracking/alert system is currently unavailable.
- Drip status: **0 recorded sends**; `/api/admin/drip-stats` returned **20 pending users**, all with `last_email_sent: 0`. The broad drip runner was not called.

## Churn Intervention

No emails were sent or queued. Compliant drafts are in [growth-churn-interventions-2026-10-25.md](growth-churn-interventions-2026-10-25.md).

| Tier | Eligible cohort | Count today | Send timing |
|---|---|---:|---|
| Gentle nudge | 7–10 days inactive | n/a | Hold until last-seen and consent checks exist |
| Value reminder | 10–14 days inactive | n/a | Hold until inactivity and email engagement are verifiable |
| Win-back | 14+ days inactive | n/a | Hold until inactivity, suppression, consent, and delivery logging exist |

## Actions Triggered

- Win-back emails queued: **0**; three compliant drafts prepared for Email Agent 5.
- Re-engagement nudges sent: **0**.
- `/api/admin/drip-run`: **not called**; it may send to a backlog without safe delivery controls.

## Psychology-Driven Optimization

**Principle:** endowment effect, reinforced by commitment and consistency.

**Where:** post-signup saved-events empty state and the first event card.

**Exact UX change:**

> Your first saved event is one search away. Save the date, venue, onsale details, venue guide, and official ticket links in one place.

Button: **Save this event**

Expected impact: make the next action feel like completing something the user already owns, reducing post-signup hesitation. Measure signup-to-first-saved-event within 24 hours, first-session save rate, and 7-day return rate; do not claim an uplift percentage until instrumentation exists. Details: [psychology-optimization-2026-10-25.md](psychology-optimization-2026-10-25.md)

## Handoffs

- **CRO Agent:** [cro-growth-handoff-2026-10-25.md](cro-growth-handoff-2026-10-25.md) — one recent signup has no saved event; improve and instrument the post-signup path.
- **Email Agent:** [growth-churn-interventions-2026-10-25.md](growth-churn-interventions-2026-10-25.md) — compliant drafts, blocked pending last-seen, consent/suppression, and delivery telemetry.

## Engineering Follow-ups

1. Add privacy-safe `last_seen_at` or equivalent activity events.
2. Add email delivery, open, click, and unsubscribe attribution before automated win-back or fatigue segmentation.
3. Fix `/api/admin/alerts`.
4. Add an idempotent lifecycle-email queue with suppression and audit logging.
5. Store daily metric snapshots so “vs yesterday” is evidence-based.
