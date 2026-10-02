# TicketScan Growth & Retention — Week of 2026-10-02

## Executive decision

TicketScan should stay free for now and focus on two measurable foundations:

1. Fix lifecycle and conversion instrumentation before making churn or funnel claims.
2. Launch a small, content-based referral MVP after attribution is captured.

Monetization should be affiliate-first. A paid tier is premature while the product’s price data pipeline, alert loop, drip sender, and event-level outbound attribution are unreliable. Public growth copy must focus on event discovery, onsale timing, venue guidance, and links to buy—not price tracking, price history, alerts, or buy/wait recommendations.

## Evidence snapshot

Live admin checks on 2026-10-02:

| Metric | Current value | Interpretation |
|---|---:|---|
| Total users | 263 | Verified live count |
| New users, last 7 days | 8 | Verified live count |
| New users, last 24 hours | 1 | Verified live count |
| Watchlist rows | 255 | Rows, not active price tracking |
| Active newsletter subscribers | 6 | Verified live count |
| Total favorites | 1 | Verified live count |
| Triggered alerts | 0 | Price-alert system is currently unavailable |
| Drip emails recorded | 0 | `/api/admin/drip-stats` returned an empty sent-stats array |
| Users with pending drip state shown | 20 | Includes users 35 days after signup with `last_email_sent: 0` |

Recent activity shows three watchlist additions attached to signups in the displayed seven-day window. This is a directional activation signal only; it is not a complete cohort conversion rate because the activity endpoint is capped at 20 records and has no session or search events.

## Churn analysis

### Churn metrics

| Metric | This week | Last week | Trend |
|---|---:|---:|---|
| Users churned: 14+ days inactive | Not measurable | Not measurable | No `last_seen_at` or activity-event table |
| Churn rate | Not measurable | Not measurable | Do not infer from signup age |
| Average active days before churn | Not measurable | Not measurable | No login/session history |
| Win-back email success rate | Not measurable | Not measurable | No sends, opens, clicks, bounces, or complaints recorded |

### What can be said safely

- The live system has no last-login/last-seen field. A user who has not appeared in the admin activity feed cannot be classified as churned.
- The admin activity feed records only recent signups, watchlist additions, and newsletter subscriptions. It does not record searches, event-detail visits, outbound ticket clicks, or return sessions.
- The drip campaign has recorded zero sends. Do not send a manual blast while the sender and suppression checks remain unverified.
- The `/api/admin/alerts` endpoint is still failing because it queries `triggered_at` while the live schema uses `sent_at`; this blocks reliable alert diagnostics.

### Retention hypotheses to test after instrumentation

1. Users who complete one watchlist add within their first session will retain better than signup-only users.
2. Users who choose an interest and city during onboarding will return more often than users dropped onto the generic dashboard.
3. A useful event/venue email that contains onsale timing or venue guidance can bring users back without relying on unavailable price data.

### Prevention actions

1. Add `last_seen_at` plus an idempotent `user_activity` event stream. Target: all signed-in users. Success: weekly active, dormant, and reactivated cohorts become queryable.
2. Add conversion events for `signup`, `onboarding_completed`, `watchlist_add`, `outbound_ticket_click`, and `newsletter_subscribe`. Target: the full funnel. Success: activation and referral rates can be calculated from first-party events.
3. Repair drip delivery and add delivery-state logging (`queued`, `sent`, `bounced`, `clicked`, `unsubscribed`). Target: new users and dormant users. Success: no campaign is called successful without provider evidence.

## Referral program recommendation

### Decision

Build a gated MVP with a simple first-touch link: `ticketscan.io/?ref=[CODE]`. Credit the referrer when a new visitor creates an account; avoid requiring a price target or alert action while those systems are down.

### Reward

Use a low-cost, truthful reward that is available today:

- Referrer: “TicketScan Scout” badge and a shareable referral count.
- New user: a curated World Cup 2026 or venue-guide starter pack after signup.
- Three successful referrals: an expanded custom guide pack or early access to new venue content.

Do not promise premium alerts, extended price history, or price reports as rewards. Defer leaderboards until abuse and identity controls exist.

### Implementation spec

```sql
referrals (
  id,
  referrer_id,
  referee_id,
  code,
  status,
  source,
  created_at,
  activated_at
)
```

Required behavior:

- Persist the first-touch referral code and UTM values through signup.
- Enforce one credited referral per referee and reject self-referrals.
- Use parameterized queries and a unique constraint on the credited referee.
- Add `POST /api/referral/code` and `GET /api/referral/stats` behind JWT auth.
- Add copy-link, email, X, and WhatsApp share actions with canonical UTM parameters.
- Track `referral_link_viewed`, `referral_signup`, `referral_activated`, and `referral_shared`.

### Targets for the first 30 days

- 5% of eligible users share a referral link.
- 10% of referred visits create an account.
- 25% of referred accounts complete onboarding or add an event to their watchlist.
- Viral coefficient target: greater than 0.20 initially; raise the target only after clean attribution exists.

## Pricing and monetization

### Recommendation: affiliate-first, premium later

1. Instrument `outbound_ticket_click` with event, page, partner, placement, and `sid` before judging affiliate performance.
2. Continue CJ/TicketNetwork diagnosis and subscribe to the product feed if approved; event-level deep links are more useful than generic performer or venue pages.
3. Apply to Stay22 and Viator for venue-guide monetization, then evaluate TickPick and other ticket programs after attribution is reliable.
4. Defer advertising until page-speed and user trust impact are understood.
5. Defer a paid tier until at least one durable paid feature is live, measurable, and working consistently for 30 days.

### Future premium hypothesis

The earlier $7.99/month or $59/year idea can remain a hypothesis, but its proposed price history, instant alerts, and predictions are not launchable now. Revisit only after data delivery, billing, entitlements, cancellation, and refund handling are implemented and tested.

## Next feature launch: Referral MVP

### Pre-launch: two weeks

- Add referral attribution and funnel events.
- Create a referral landing state with one clear promise: share useful event and venue discovery resources with friends.
- Prepare an in-product invite card after onboarding completion.
- Create a short FAQ covering attribution, reward eligibility, and abuse prevention.
- Content request: one World Cup venue-guide bundle and one “how to choose a venue section” guide that can be shared as the reward.

### Launch day

- Email registered users with a concise invite and a copy-link CTA.
- Publish a blog post explaining the referral reward and how TicketScan helps people find events and venue information.
- Post five channel variants across X, Instagram, and Threads; use one canonical UTM-tagged URL.
- Avoid price claims, alert claims, or savings statistics.

### Post-launch: first two weeks

- Review share → referred visit → signup → onboarding/watchlist funnel daily.
- Suppress duplicate rewards and investigate abnormal referral bursts.
- Interview the first five referred users.
- Test reward framing before increasing incentive value.

### Launch gates

- Attribution events verified in GTM/GA4 DebugView.
- Referral code survives signup and is visible in the admin/reporting path.
- Duplicate and self-referral tests pass.
- Unsubscribe and privacy behavior is unchanged.

## Paywall and upgrade flow

### Decision

No paywall this week. Existing users should not be blocked from the free event discovery and venue-guide experience, and there is no reliable premium value to gate while price tracking and alerts are down.

### Future touchpoints, once eligible

| Trigger | UX | Copy direction |
|---|---|---|
| User reaches a verified free limit | Inline banner | Explain the concrete additional capability, with no fear or fabricated savings claim |
| User opens a genuinely live premium feature | Feature gate | Show what works today, price, cancellation terms, and a free preview where possible |
| User has completed onboarding and returned twice | Non-blocking card | Invite support for advanced organization or convenience, not unavailable tracking outcomes |

When a paid tier is eventually tested, show monthly and annual pricing, annual savings, billing terms, cancellation path, and a restore-purchase action. Do not gate the first watchlist add.

## Handoff: Email Agent (Agent 5)

See [email-handoff-win-back-2026-10-02.md](email-handoff-win-back-2026-10-02.md). No win-back send is approved until last-seen, consent, delivery, and click telemetry exist.

## Handoff: CRO Agent (Agent 6)

See [cro-onboarding-handoff-2026-10-02.md](cro-onboarding-handoff-2026-10-02.md). Prioritize an event-discovery onboarding path and explicit activation events; do not promise a working alert in confirmation copy.

## Handoff: Content Agent (Agent 1)

See [content-request-referral-2026-10-02.md](content-request-referral-2026-10-02.md). Produce shareable, fact-specific venue content from verified data.

## Handoff: Social Agent (Agent 3)

See [social-launch-referral-2026-10-02.md](social-launch-referral-2026-10-02.md). Use event discovery, onsale timing, and venue-guide education as the public message pillars.

## Priority order for next week

1. Fix conversion event instrumentation and `/api/admin/alerts`.
2. Verify or repair the drip sender without bulk-triggering it.
3. Add `last_seen_at`/activity events.
4. Implement and QA referral attribution.
5. Resume affiliate applications and product-feed work.
6. Reassess premium only after the above produce trustworthy retention and revenue signals.

