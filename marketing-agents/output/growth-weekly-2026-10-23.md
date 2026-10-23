# TicketScan Growth & Retention — Week of 2026-10-23

## Executive decision

Keep the product free and make activation measurable before adding a paywall. The next growth bet is a small referral beta, but only after first-party funnel events and lifecycle-email delivery are repaired. Monetization should remain affiliate-first.

Public copy must stay within the current product status: event discovery, saved events, onsale/presale details, venue guides, and outbound seller links. Do not claim price tracking, price history, alerts, predictions, buy/wait calls, or TicketScan price statistics.

## Evidence snapshot

Production admin API checked 2026-10-23:

| Metric | This week | Prior snapshot | Interpretation |
|---|---:|---:|---|
| Registered users | 267 | 266 | Verified account count |
| New users, last 7 days | 1 | 2 | Signup volume, not active users |
| Saved-event rows | 256 | 256 | Saved rows, not price tracking |
| Users with at least one saved event | 153 / 267 (57.3%) | 153 | Activation proxy only |
| Users with no saved event | 114 / 267 (42.7%) | 113 | Largest measurable activation gap |
| Active newsletter subscribers | 7 | 7 | Small owned audience |
| Drip sends recorded | 0 | 0 | No delivery evidence |
| Triggered alerts | 0; endpoint returns 500 | 0; endpoint returns 500 | Not a usable engagement metric |

## Churn analysis

| Metric | This week | Last week | Status |
|---|---:|---:|---|
| Users churned: 14+ days inactive | Not measurable | Not measurable | No last-seen/session field |
| Churn rate | Not measurable | Not measurable | No eligible cohort denominator |
| Average active days before churn | Not measurable | Not measurable | No activity history |
| Win-back success rate | Not measurable | Not measurable | No sends, opens, clicks, or returns |

The one signup in the current seven-day window had no saved-event row at the snapshot. This is an observation, not a conversion-rate diagnosis. The admin activity endpoint exposes only recent signup, saved-event, and newsletter rows; it does not expose searches, event views, seller clicks, logins, sessions, or email engagement.

### Retention hypotheses

1. A first-save prompt shown immediately after signup will improve activation versus a generic dashboard.
2. Users with two or more saved events are the best initial referral audience because they have demonstrated repeated intent.
3. A useful reminder about dates, venues, onsale information, and seller-checkout hygiene can bring users back without relying on unavailable price features.

### Prevention actions

1. Add `last_seen_at` and an idempotent `user_activity` table. Target: all signed-in users. Success: 1-day, 7-day, and 30-day return cohorts are queryable.
2. Add typed success events for signup, search, event view, saved-event add, saved-event view, newsletter subscribe, and seller outbound click. Target: full funnel. Success: activation and channel conversion are measurable.
3. Repair lifecycle delivery with consent, suppression, provider IDs, delivery states, and click tracking. Target: new and dormant users. Success: no campaign is evaluated from database send rows alone.

## Weekly priorities

1. Fix GTM/first-party conversion instrumentation and `/api/admin/alerts`.
2. Verify the drip sender and rewrite unsupported templates before any scheduled send.
3. Add last-seen/activity telemetry.
4. Implement and QA the referral beta.
5. Implement affiliate outbound-click attribution and continue CJ/TicketNetwork work.
6. Reassess premium only after a real, measurable feature has operated reliably for 30 days.

## Handoffs

- Referral: [referral-program-2026-10-23.md](referral-program-2026-10-23.md)
- Monetization: [pricing-monetization-2026-10-23.md](pricing-monetization-2026-10-23.md)
- Launch: [feature-launch-saved-event-loop-2026-10-23.md](feature-launch-saved-event-loop-2026-10-23.md)
- Paywall: [paywall-upgrade-cro-2026-10-23.md](paywall-upgrade-cro-2026-10-23.md)
- Email: [email-agent-winback-2026-10-23.md](email-agent-winback-2026-10-23.md)
- CRO: [cro-onboarding-handoff-2026-10-23.md](cro-onboarding-handoff-2026-10-23.md)
- Content: [content-request-launch-2026-10-23.md](content-request-launch-2026-10-23.md)
- Social: [social-launch-plan-2026-10-23.md](social-launch-plan-2026-10-23.md)
