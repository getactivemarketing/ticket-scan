# Growth Daily — 2026-10-13

Source: live deployed admin API, pulled 2026-10-13. Counts below are observed data, not estimates.

## User Health

| Segment | Count | % of total | vs yesterday |
|---|---:|---:|---|
| New (last 7 days) | 2 | 0.8% | n/a — no prior snapshot in this run |
| Activated (has watchlist) | 153 | 57.5% | n/a |
| Active (visited in 7 days) | n/a | n/a | Not measurable: no login/visit timestamp is exposed |
| At-risk (no visit 7–14d) | n/a | n/a | Not measurable: no login/visit timestamp is exposed |
| Churned (no visit 14d+) | n/a | n/a | Not measurable: no login/visit timestamp is exposed |

Context: 266 total users, 256 saved watchlist items, 113 users with zero watchlist items, 7 active newsletter subscribers, and 27 favorites.

## Activation Gap

- **2** users signed up in the last 7 days with 0 watchlist items (**100% of the 2-user new cohort**).
- The two new users were registered on October 12 and October 13; neither has a saved event.
- Top reason: **not determinable from current instrumentation**. The API records signup and saved-watchlist events, but not onboarding completion, search results, bounce, or feature comprehension.
- CRO handoff: add a first-session prompt that asks for city, team/artist, or venue and offers “Save this event” after the first useful result. Instrument `search`, `event_view`, `watchlist_add`, and `outbound_click` so the next report can distinguish discovery failure from activation friction.

## Churn Signals

- Unsubscribes observed today: **0**. All 7 newsletter records returned by the admin API are active; no recent unsubscribe record was available.
- Users entering at-risk today: **n/a**. Visit recency is not stored.
- Alert-fatigue candidates: **n/a**. `/api/admin/alerts` returns HTTP 500, click-through data is not exposed, and price tracking is currently down. The stats endpoint reports 0 active target-price fields and 0 triggered alerts; this is not evidence of engagement.
- Drip status: **0 sends reported** by `/api/admin/drip-stats`; 20 pending users are visible, including users 14–37 days after signup. Do not trigger a catch-up blast without owner approval and an SMTP test.

## Churn Intervention

No intervention emails were sent. The three draft tiers are queued for the Email Agent in [growth-winback-emails-2026-10-13.md](growth-winback-emails-2026-10-13.md). They deliberately use event discovery, onsale information, and venue guidance; they do not mention price changes, price history, price alerts, savings, or buy/wait recommendations.

| Tier | Eligible cohort | Count today | Send timing |
|---|---|---:|---|
| Gentle nudge | 7–10 days inactive | n/a | Hold until visit tracking exists; then weekday late morning local time |
| Value reminder | 10–14 days inactive | n/a | Hold until visit tracking exists; then 3–5 days after the gentle nudge |
| Win-back | 14+ days inactive | n/a | Hold until visit tracking exists and consent/SMTP delivery are verified |

## Actions Triggered

- Win-back emails queued: **0 for sending; 3 drafts handed to Email Agent**.
- Re-engagement nudges sent: **0**.
- Social or public posts: **0**.
- Admin `/api/admin/drip-run`: **not called**; it would send real email to a backlog with no confirmed delivery instrumentation.

## Psychology-Driven Optimization

**Principle:** commitment and consistency, applied without promising unavailable price features.

**Where:** the first successful search result and empty watchlist state.

**Exact UX copy:**

> Save one event so it’s ready when you are. We’ll keep the date, venue, and official ticket links together in your watchlist.

Button: **Save this event**

Empty-state follow-up: **Your first saved event is one search away — try a team, artist, or venue.**

**Expected impact:** lower the cognitive cost of the first activation step and give new users a concrete completion goal. Measure signup-to-first-watchlist conversion and first-session watchlist adds; no uplift percentage is claimed until that instrumentation exists.

## Data Quality / Engineering Handoff

1. Add `last_login_at` or an equivalent activity event so active, at-risk, and churned cohorts can be computed.
2. Add email delivery/open/click events before using alert-fatigue or win-back automation.
3. Fix `/api/admin/alerts` (currently HTTP 500) and keep price-related lifecycle copy disabled while tracking is down.
