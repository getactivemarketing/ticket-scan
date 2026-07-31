# Growth & Retention — Weekly Report — 2026-07-31

> **Data discipline:** The six requested skills (`churn-prevention`, `referral-program`, `pricing-strategy`, `launch-strategy`, `paywall-upgrade-cro`, `marketing-psychology`) are not installed in this runtime. Their frameworks are applied manually. The July 31 snapshot comes from the latest production admin/API audit output; the repository does not expose a usable admin secret for a fresh API call in this session.

## Executive decision

Do not launch a paywall or referral campaign yet. Ship and instrument the first-value loop—signup → track an event → set a target price → receive/click an alert—then monetize through affiliate outbound links. The next launch should be **Target Price + Price Alerts**, not a new acquisition feature.

## 1. Churn Analysis — Week of 2026-07-27

### Platform snapshot

| Metric | Current snapshot | Prior verified weekly baseline (2026-07-17) | Trend |
|---|---:|---:|---|
| Registered users | 195 | 168 | +27 since prior baseline |
| New users, last 7 days | 13 | 17 in prior reported week | Current week lower |
| Watchlist rows | 198 | 178 | +20 since prior baseline |
| Users with at least one watchlist item | 114 | Not reported | 58.5% of users |
| Active target-price alerts | Not reported in current snapshot; prior API showed 0 | 0 | Must verify after alert fix |
| Triggered alerts | Not available; admin alerts endpoint previously returned 500 | 0 | Measurement blocked |
| Active newsletter subscribers | 4 | 3 | +1 |

### Required churn metrics

| Metric | This week | Last week | Status |
|---|---:|---:|---|
| Users churned (14d+ inactive) | N/A | N/A | No `last_login`/`last_seen_at` or activity event table |
| Churn rate | N/A | N/A | Denominator and inactive cohort unavailable |
| Average active days before churn | N/A | N/A | No session/activity history |
| Win-back email success rate | N/A | N/A | No delivery, open, click, or win-back event tracking |

**Interpretation:** 114/195 users have created a watchlist item. That is an activation proxy, not a retention metric. The remaining 81 users are a measurable onboarding gap, but cannot be called churned. No claim about last action, active days, common events, or drip-email opens is supportable from the current schema/API.

### Churn patterns that can be supported

1. **Activation is incomplete:** 41.5% of registered users have no watchlist row.
2. **The value loop is not observable:** target-price arming, alert delivery, alert click, and purchase/outbound click are not available as reliable metrics.
3. **Lifecycle attribution is incomplete:** drip sends are stored, but opens/clicks are not; email success cannot be evaluated.

### Prevention actions

1. Add `last_seen_at` plus a privacy-safe `user_activity_events` table; target all users; expected impact: makes 14/30-day churn and reactivation measurable.
2. Put target-price entry directly in watchlist creation and confirm “You’re now tracking price”; target the 81 users without a watchlist; expected impact: improve signup-to-activation by 10 percentage points as an initial test target.
3. Fix `/api/admin/alerts`, record provider-confirmed delivery and alert clicks, and send a human-approved win-back sequence; target activated users with no recent alert interaction; expected impact: establish a measurable reactivation baseline within 30 days.

## 2. Referral Program — greenfield design

No referral implementation was found in `index.js` or the current project schema.

### Recommended mechanic

- Unique link: `https://ticketscan.io/?ref=[CODE]`.
- Capture first-touch referral code and UTM values through registration.
- Credit the referrer only when the new user verifies an account and adds a watchlist item with a target price; this rewards meaningful activation rather than low-quality signups.
- Initial reward: both users receive a 30-day **Power User** status with priority alert eligibility and a badge. Do not promise premium features until they exist.
- Share actions: copy link, X, email, WhatsApp. Add a dashboard card after a user creates their first watchlist item.
- Milestones: 3 activated referrals = 90 days of Power User status; 10 = one year. Avoid a public leaderboard until abuse controls exist.

### Implementation spec

```sql
referrals (
  id, referrer_id, referee_id, code, status,
  source, created_at, activated_at
)
```

Recommended statuses: `pending`, `activated`, `rejected`. Add a unique constraint preventing a referee from receiving multiple credits. Use parameterized queries and validate that referrer and referee are different users.

API surface:

- `POST /api/referral/code` — authenticated, create/return a code.
- `GET /api/referral/stats` — authenticated, counts for clicks, signups, activated referrals.
- `POST /api/auth/register?ref=CODE` — store attribution transactionally.
- Internal activation hook on verified registration + target-price watchlist add.

### Success metrics

- Share rate: users generating at least one share link / eligible users; initial target 8%.
- Referred signup conversion: referred visits / registrations; initial target 12%.
- Referral activation: referred registrations adding a target-price watchlist item; initial target 35%.
- Viral coefficient: shares per eligible user × referred-signup conversion; target >0.30 after the alert loop is working.

Sequence: instrument activation first, build the referral MVP second, launch against NFL kickoff preparation—not as a late World Cup campaign.

## 3. Pricing & Monetization

### Recommendation: affiliate first; freemium later; ads last

1. **Affiliate revenue now:** apply to Ticketmaster, SeatGeek, and StubHub programs; add disclosed, source-specific tracking parameters to outbound buy links; reconcile outbound clicks and commissions weekly. This creates no user friction and does not charge for incomplete functionality.
2. **Freemium only after proof:** revisit after target-price alerts work, delivery/click tracking is live, 90-day history is populated, and at least 500 users or a demonstrably active cohort exists.
3. **Advertising later:** keep venue/city SEO pages ad-light until retention and affiliate economics are known. Ads can dilute trust at the exact moment users are comparing prices.

### Future tier hypothesis

| Free | Premium, test at $7.99/month or $59/year |
|---|---|
| 3 watchlist items | Unlimited watchlist |
| 7-day history | 90-day history |
| Daily email digest | Instant alerts |
| Basic compare view | Prediction/recommendation history and priority support |

These are hypotheses, not launch commitments. Annual pricing should be tested only after users receive a reliable alert. Anchor the annual plan as “2 months free,” never as an artificial discount on a non-working feature.

## 4. Feature Launch Plan — Target Price + Price Alerts

### Readiness gate

Before announcing: target price must persist from the UI, the cron must evaluate it, email delivery must be provider-confirmed, duplicate alerts must be prevented, and the alert admin endpoint must pass a regression test.

### Pre-launch: two weeks

- **Product:** add target-price input to EventCard/watchlist flow and a clear success state.
- **Measurement:** ship `signup_complete`, `watchlist_add`, `target_price_set`, `price_alert_sent`, `alert_email_click`, and `outbound_ticket_click`; preserve UTMs.
- **Email:** send a teaser to activated users: “You can soon tell TicketScan the price you’re waiting for.”
- **Content:** publish “How to set a ticket price target without panic-buying,” with a CTA to track one event.
- **Social:** three educational posts showing compare → target → alert, with no invented price claims.

### Launch day

- Email the activated cohort first; expand to the full list only after delivery and error rates are checked.
- Publish a product post and short demo video.
- Put an in-product banner on dashboard and event detail pages.
- Do not use Product Hunt or paid acquisition until the first 7-day activation/alert data is clean.

### Post-launch: 14 days

- Interview 5 activated users and 5 non-activators.
- Review target-price set rate, alert delivery rate, click rate, duplicate-alert rate, and second-session return.
- Send “How to use your price target” follow-up content.
- Iterate copy and placement before introducing a premium gate.

### Success metrics

- 70% of newly registered users start a search or compare within 24 hours.
- 50% of new registrants add a watchlist item within 24 hours.
- 35% of new watchlist items receive a target price within 24 hours.
- ≥98% provider-confirmed alert delivery; duplicate-alert rate <1%.
- Establish a baseline for 7-day return before setting a retention lift target.

## 5. Paywall / Upgrade Flow

**Deferred this week.** A paywall would charge against unproven alert value and create avoidable refund risk.

When the readiness gate passes, use these touchpoints:

| Trigger | Copy | Design |
|---|---|---|
| Fourth watchlist item | “Keep tracking every event. Premium removes the 3-event limit and keeps all your targets in one place.” | Inline limit card with Free vs Premium comparison |
| Request for history beyond 7 days | “See the 90-day pattern before you buy.” | Locked chart range with preview and annual anchor |
| First successful alert | “You caught a price drop. Upgrade for instant alerts on every event.” | Non-blocking post-alert banner; dismissible |
| Dashboard with 2+ tracked events | “Your next decision is easier with unlimited tracking and longer history.” | Small persistent banner, not a modal |

Display `$7.99/month` and `$59/year` only after billing and entitlement handling exist. Include a visible cancel path, restore purchase path, and clear affiliate disclosure where applicable.

## 6. Win-back sequence → Agent 5 (Email)

Do not send until the audience can be selected with `last_seen_at` or a documented watchlist-age proxy and the email provider is confirmed.

1. **At-risk, 7 days:** “Your tracked event may be getting cheaper.” Show the event name and a single CTA to open the watchlist.
2. **Churned, 14 days:** “Still waiting for the right ticket price?” Explain the product in one sentence and CTA to set a target price.
3. **Final, 21 days:** “Should we stop tracking this for you?” Offer one-click return or unsubscribe; suppress users who do not engage.

Test benefit-led copy against loss-aversion copy. Success is a return session followed by a watchlist or target-price action—not an email open alone.

## 7. Onboarding improvements → Agent 6 (CRO)

- Replace the post-registration dead end with a three-step checklist: **Find an event → Add to watchlist → Set target price**.
- Ask for one event preference only after the account exists; route directly to populated search results.
- Make “1 step from your first alert” visible only when the target-price control is actually functional.
- Add an empty-state example and one-click “Track an event” CTA for the 81 users with no watchlist item.
- Instrument each step and run a one-variable test on the activation CTA.

## 8. Launch content requests → Agent 1 (Content)

- Article: “How TicketScan price alerts work: compare, set a target, buy with confidence.”
- Evergreen guide: “When to buy NFL, NBA, concert, and World Cup resale tickets.”
- Onboarding microcopy: three benefit-led tooltips for compare, watchlist, and target price.
- Referral landing copy explaining the Power User reward without implying cash savings or guaranteed ticket prices.

## 9. Launch social plan → Agent 3 (Social)

Seven-day launch slate:

- Day -7: teaser poll — “What price are you waiting for?”
- Day -5: short compare → target setup demo.
- Day -3: myth-busting post on panic buying; use qualified language, no unsupported universal timing claims.
- Day -1: countdown and waitlist/early-access CTA.
- Day 0: launch announcement across X, Instagram, Threads, and TikTok.
- Day +2: user walkthrough and FAQ.
- Day +6: referral share prompt for users who successfully set a target.

Every post should use a single canonical URL with UTM parameters and report clicks separately from signups.

## Priority handoff order

1. **Engineering:** target-price UI, alert endpoint fix, activity/email/click events.
2. **Agent 6:** onboarding checklist and activation experiment.
3. **Agent 5:** at-risk/win-back sequence, held until segmentation and delivery are reliable.
4. **Agent 1 + Agent 3:** alert-launch content and social slate.
5. **Growth:** referral MVP after activation instrumentation; affiliate applications immediately.

### Bottom line

TicketScan has acquisition and basic activation signals, but not a measurable retention loop. The highest-leverage growth move this week is to make the alert promise real and observable. Monetize outbound purchase intent first; earn the right to add a premium tier after users repeatedly receive value.
