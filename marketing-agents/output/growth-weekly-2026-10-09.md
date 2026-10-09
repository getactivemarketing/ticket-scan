# TicketScan Growth & Retention — Week of 2026-10-09

## Executive decision

Keep TicketScan free and make the next growth investment measurable first: repair lifecycle and conversion instrumentation, then ship a small referral MVP based on event discovery and venue-guide content. Monetization should remain affiliate-first. Do not launch a paid tier while price data, alerts, drip delivery, and outbound-click attribution are unreliable.

The next feature launch is **Referral MVP**, gated on clean first-touch attribution, duplicate/self-referral protection, and a truthful content reward.

## Evidence snapshot

Production admin API checked 2026-10-09:

| Metric | Value | Interpretation |
|---|---:|---|
| Total users | 264 | Verified live count |
| New users, last 7 days | 1 | Verified live count |
| Watchlist rows | 256 | Saved rows; not evidence of price tracking |
| Active subscribers | 6 | Verified live count |
| Total favorites | 1 | Verified live count |
| Triggered alerts | 0 | Alert system is unavailable |
| Drip emails recorded | 0 | No delivery evidence |
| Pending drip users shown | 20 | Several users are already beyond the intended schedule |

The activity endpoint exposes recent signups, watchlist additions, and newsletter subscriptions, but no sessions, searches, event-detail visits, outbound ticket clicks, email opens, or bounces. The daily report’s 153-user “activated” count is a useful watchlist proxy only; it is not a retention or revenue metric.

## Churn analysis

### Churn metrics

| Metric | This week | Last week | Trend |
|---|---:|---:|---|
| Users churned: 14+ days inactive | Not measurable | Not measurable | No last-seen signal |
| Churn rate | Not measurable | Not measurable | No eligible cohort denominator |
| Average active days before churn | Not measurable | Not measurable | No session history |
| Win-back email success rate | Not measurable | Not measurable | 0 sends and no opens/clicks |

### Observed patterns and hypotheses

- The signup-to-saved-event path is the only observable activation proxy. One user signed up in the last seven days without a watchlist row in the daily snapshot; the reason is not determinable from current telemetry.
- Recent activity shows users can save an event immediately after signup, but the feed is capped and cannot establish a cohort conversion rate.
- The drip system has 20 pending users and zero recorded sends. Several pending users are 14–40 days from signup, so the issue is delivery/state handling, not merely campaign timing.
- No alert-fatigue pattern can be assessed because the alert endpoint is failing and no delivery/open/click events exist.

### Prevention actions

1. Add `last_seen_at` plus an idempotent `user_activity` table. Target: all signed-in users. Success: weekly active, at-risk, churned, and reactivated cohorts are queryable.
2. Instrument `signup_success`, `search_submit`, `event_detail_view`, `save_event_success`, `watchlist_view`, `seller_outbound_click`, `newsletter_subscribe`, and referral events. Target: the full funnel. Success: activation and referral rates can be calculated from first-party events.
3. Repair the lifecycle sender with consent, suppression, idempotent send logging, and provider delivery states. Target: new and dormant users. Success: no campaign is called successful without send and click evidence.

## Priority order

1. Fix conversion instrumentation and `/api/admin/alerts`.
2. Verify or repair drip delivery; do not manually trigger a blast yet.
3. Add last-seen/activity data.
4. Implement and QA referral attribution.
5. Instrument affiliate outbound clicks and continue CJ/TicketNetwork work.
6. Reassess premium only after a reliable, durable feature has operated for 30 days.

## Handoffs

- Email Agent: [email-handoff-win-back-2026-10-09.md](email-handoff-win-back-2026-10-09.md)
- CRO Agent: [cro-onboarding-handoff-2026-10-09.md](cro-onboarding-handoff-2026-10-09.md)
- Content Agent: [content-request-referral-2026-10-09.md](content-request-referral-2026-10-09.md)
- Social Agent: [social-launch-referral-2026-10-09.md](social-launch-referral-2026-10-09.md)
- Referral design: [referral-program-2026-10-09.md](referral-program-2026-10-09.md)
- Monetization: [pricing-monetization-2026-10-09.md](pricing-monetization-2026-10-09.md)
- Launch plan: [feature-launch-referral-mvp-2026-10-09.md](feature-launch-referral-mvp-2026-10-09.md)
- Paywall spec: [paywall-upgrade-cro-2026-10-09.md](paywall-upgrade-cro-2026-10-09.md)
