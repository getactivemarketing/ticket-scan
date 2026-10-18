# Growth Daily — 2026-10-18

Source: live deployed admin API, pulled 2026-10-18. Counts are observed data, not estimates. Compared with the 2026-10-17 snapshot where available.

The requested `churn-prevention` and `marketing-psychology` skills are not available in this session; equivalent lifecycle and behavioral frameworks were applied manually. The product-status restriction is in force. This report does not claim price tracking, price history, price movement, or working price alerts.

## User Health

| Segment | Count | % of total | vs yesterday |
|---|---:|---:|---|
| New (last 7 days) | 2 | 0.8% | 0 |
| Activated (has saved event) | 153 | 57.5% | 0 |
| Active (visited in 7 days) | n/a | n/a | Not measurable: no login/visit timestamp is exposed |
| At-risk (no visit 7–14d) | n/a | n/a | Not measurable: no login/visit timestamp is exposed |
| Churned (no visit 14d+) | n/a | n/a | Not measurable: no login/visit timestamp is exposed |

Context: 266 total users, 256 saved-event records, 113 users with zero saved events, 7 active newsletter subscribers, and 27 favorites. “Activated” means at least one saved event; it does not prove recent activity.

## Activation Gap

- **2** users signed up in the last 7 days with 0 saved events (**100% of the current two-user cohort**).
- Both accounts were created October 12–13; neither has a saved event.
- Top reason: **not determinable from current instrumentation**. Signup and saved-event activity are available, but onboarding completion, search results, bounce, and feature comprehension are not.
- CRO handoff: [cro-growth-handoff-2026-10-18.md](cro-growth-handoff-2026-10-18.md)

## Churn Signals

- Unsubscribes in the last 24 hours: **0 observed**. The newsletter endpoint exposes current subscriber state, not a complete unsubscribe event stream.
- Users entering “at-risk” today: **n/a**. Visit recency is not stored.
- Alert-fatigue candidates: **n/a**. `/api/admin/alerts` returned HTTP 500, click-through data is not exposed, and price tracking is currently down. Stats report 0 target-price fields and 0 triggered alerts; that is not engagement evidence.
- Drip status: **0 recorded sends**; `/api/admin/drip-stats` returned 20 pending users. The broad drip runner was not called because delivery, suppression, and product-claim checks are not sufficient.

## Churn Intervention

No emails were sent or queued. Drafts are in [growth-churn-interventions-2026-10-18.md](growth-churn-interventions-2026-10-18.md).

| Tier | Eligible cohort | Count today | Send timing |
|---|---|---:|---|
| Gentle nudge | 7–10 days inactive | n/a | Hold until visit tracking and consent checks exist |
| Value reminder | 10–14 days inactive | n/a | Hold until inactivity and email engagement are verifiable |
| Win-back | 14+ days inactive | n/a | Hold until inactivity, consent, suppression, and delivery logging exist |

## Actions Triggered

- Win-back emails queued: **0**.
- Re-engagement nudges sent: **0**.
- Public posts: **0**.
- `/api/admin/drip-run`: **not called**; it may send to a backlog without safe delivery controls.

## Psychology-Driven Optimization

**Principle:** commitment and consistency.

**Where:** the first successful search result and the empty saved-events state.

**Exact UX copy:**

> Save one event so it’s ready when you are. We’ll keep the date, venue, and official ticket links together in your saved events.

Button: **Save this event**

Empty state: **Your first saved event is one search away — try a team, artist, venue, or city.**

**Expected impact:** make the first activation step concrete and reduce cognitive load. Measure signup-to-first-saved-event conversion and first-session saves; do not claim an uplift percentage until instrumentation exists.

## Handoffs

- **CRO Agent:** [cro-growth-handoff-2026-10-18.md](cro-growth-handoff-2026-10-18.md) — two-user activation gap; improve the post-signup path to the first saved event and instrument it.
- **Email Agent:** [growth-churn-interventions-2026-10-18.md](growth-churn-interventions-2026-10-18.md) — compliant, send-ready drafts, blocked pending last-seen, consent/suppression, and delivery telemetry.

## Engineering Follow-ups

1. Add privacy-safe `last_seen_at` or equivalent activity events.
2. Add email delivery, open, click, and unsubscribe attribution before automated win-back or fatigue segmentation.
3. Fix `/api/admin/alerts`.
4. Add an idempotent lifecycle-email queue with suppression and audit logging.
5. Store daily metric snapshots so “vs yesterday” is evidence-based rather than dependent on prior reports.
