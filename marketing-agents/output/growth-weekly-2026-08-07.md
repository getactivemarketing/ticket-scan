# Growth & Retention — Weekly Report — 2026-08-07

> **Data discipline:** `churn-prevention`, `referral-program`, `pricing-strategy`, `launch-strategy`, `paywall-upgrade-cro`, and `marketing-psychology` are not installed in this runtime. Their requested frameworks were applied manually. Metrics below use the latest authenticated snapshot already recorded in the workspace; the live stats endpoint was checked and returned `401 Unauthorized` without the admin key.

## Executive decision

Do not launch a paywall or referral campaign this week. Make the core value loop reliable and measurable first: **signup → compare → watchlist → target price → alert → outbound ticket click**. Monetize purchase intent through affiliate links now; revisit freemium after alert delivery and retention data are trustworthy.

## 1. Churn analysis — week of 2026-08-03

### Churn metrics

| Metric | This week | Last week | Trend / confidence |
|---|---:|---:|---|
| Users churned (14d+ inactive) | N/A | N/A | No `last_seen_at`, login history, or activity table |
| Churn rate | N/A | N/A | Cohort denominator unavailable |
| Average active days before churn | N/A | N/A | Activity history unavailable |
| Win-back email success rate | N/A | N/A | No delivery, open, click, or return-session events |
| Registered users | 200 | 196 | +2.0%, snapshot-based |
| Watchlist rows | 203 | 199 | +2.0%, net snapshot change |
| Users with a watchlist | 117 | 114 on Jul 31 | 59.1% of 198 in the last complete segmentation |
| Rows with a target price | 0 | 0 | 0%; core alert loop is inactive |

### What can and cannot be concluded

The 83 users without a watchlist in the last complete snapshot are an activation gap, not proven churn. No defensible answer exists yet for last action before churn, active days, common events, or drip-email opens. Drip sends are stored, but opens and clicks are not; the current admin report showed 20 pending users and no reliable sent-history total.

### Churn patterns / retention hypotheses

1. **Shallow activation:** roughly 41% of registered users have no watchlist item. Users who never create a tracked event have no reason to return.
2. **Alert value is not being realized:** 0/203 watchlist rows has a target price, while the tracker’s newest known price-history row is July 24.
3. **Retention is unobservable:** `/api/admin/alerts` returns HTTP 500 and there are no alert-click or return-session events.

### Prevention actions

1. Add privacy-safe `last_seen_at` / activity events and cohort queries — target all registered users — expected impact: establish a valid 14/30-day churn baseline within 30 days.
2. Require or strongly prompt for a target price during watchlist creation — target the 83 no-watchlist users and all new watchlist adds — initial test target: +10 percentage points in first-value completion.
3. Repair price tracking and alert reporting before win-back automation — target activated users — success gate: ≥98% provider-confirmed delivery and <1% duplicate alerts.

## 2. Referral program — greenfield recommendation

No referral implementation was found in the backend schema or `index.js`.

### Recommended mechanic

- Link: `https://ticketscan.io/?ref=[CODE]` with first-touch UTM persistence.
- Credit only after the referred user verifies an account and adds a watchlist item with a target price.
- Initial reward: both users receive 30 days of a future **Power User** status and a badge. Do not promise a premium feature or cash reward before entitlements exist.
- Share actions: copy link, X, email, and WhatsApp. Show the card after the user’s first successful watchlist setup.
- Milestones: 3 activated referrals = 90 days; 10 = one year. Defer public leaderboards until abuse controls exist.

### MVP implementation

```sql
referrals (
  id, referrer_id, referee_id, code, status, source,
  created_at, activated_at
)
```

Use `pending`, `activated`, and `rejected` statuses; enforce one credited referrer per referee; reject self-referrals; use parameterized queries. Add `POST /api/referral/code`, `GET /api/referral/stats`, and transactional attribution on registration. Activate only on verified registration plus target-price watchlist creation.

### Targets

Share rate 8% of eligible users; referred-visit-to-signup conversion 12%; referred signup-to-activation 35%; viral coefficient >0.30 after the alert loop works.

## 3. Pricing and monetization

### Recommendation: affiliate first, freemium second, ads last

1. **Affiliate now:** apply to Ticketmaster, SeatGeek, and StubHub programs; tag outbound buy links; record `outbound_ticket_click`, source, event, and campaign; reconcile clicks and commissions weekly.
2. **Freemium later:** only after target prices persist, alerts deliver, 90-day history exists, and a meaningful active cohort has repeated value.
3. **Advertising later:** keep high-intent comparison and venue pages ad-light. Ads can reduce trust and distract from affiliate conversion.

### Future pricing hypothesis

| Free | Premium test |
|---|---|
| 3 watchlist items | Unlimited watchlist |
| 7-day history | 90-day history |
| Daily digest | Instant alerts |
| Basic comparison | Prediction/recommendation history and priority support |

Test at **$7.99/month or $59/year** (“2 months free”) only after the readiness gate. This is a hypothesis, not a launch commitment.

## 4. Feature launch plan — Target Price + Price Alerts

This is the highest-leverage launch because the current product promise is not yet observable. It should follow reliability work, not precede it.

### Pre-launch: two weeks

- Ship target-price input and saved-state confirmation in the watchlist flow.
- Fix the tracker freshness issue and `/api/admin/alerts` 500.
- Add events: `signup_complete`, `compare_view`, `watchlist_add`, `target_price_set`, `price_alert_sent`, `alert_email_click`, and `outbound_ticket_click`.
- Publish “How to set a ticket price target without panic-buying.”
- Tease the feature to activated users; use qualified language and no unsupported savings claims.

### Launch day

- Release first to the activated cohort; expand only after delivery/error checks.
- Send the announcement email, publish a short demo, and place a dashboard/event-detail banner.
- Hold paid acquisition and Product Hunt until seven days of clean alert data exist.

### Post-launch: 14 days

- Interview five activated and five non-activated users.
- Monitor target-price set rate, alert delivery, click rate, duplicate rate, and second-session return.
- Publish a follow-up “How to use your price target” guide and iterate copy/placement before gating features.

### Success metrics

70% of new users search/compare within 24 hours; 50% add a watchlist item within 24 hours; 35% set a target within 24 hours of adding; ≥98% delivery; <1% duplicate alerts; establish a seven-day return baseline.

## 5. Paywall and upgrade flow

**Deferred.** A paywall would charge against an unreliable alert promise and create avoidable refund and trust risk.

After reliability is proven, test these non-blocking touchpoints:

| Trigger | Copy | Design |
|---|---|---|
| Fourth watchlist item | “Keep tracking every event. Premium keeps all your targets in one place.” | Inline limit card |
| History beyond 7 days | “See the 90-day pattern before you buy.” | Locked chart range with preview |
| First successful alert | “You caught a price drop. Upgrade for instant alerts on every event.” | Dismissible post-alert banner |
| Two or more tracked events | “Make your next ticket decision easier with unlimited tracking.” | Small dashboard banner |

Show `$7.99/month` and `$59/year` only when billing, entitlements, cancellation, and restore flows exist. Include affiliate disclosure where relevant.

## 6. Win-back sequence → Email Agent (Agent 5)

Hold until `last_seen_at`/activity segmentation and provider delivery events exist.

1. **At risk, day 7:** “Your tracked event may be getting cheaper.” One watchlist CTA.
2. **Churned, day 14:** “Still waiting for the right ticket price?” CTA to set a target.
3. **Final, day 21:** “Should we stop tracking this for you?” One-click return or unsubscribe; suppress non-engagers.

Test benefit-led copy against loss-aversion copy. Define success as a return session followed by a watchlist or target-price action, not an open.

## 7. Onboarding improvements → CRO Agent (Agent 6)

- Replace the post-registration dead end with **Find an event → Track it → Set a target price**.
- Route new users to populated results and preserve their search query.
- Give users without a watchlist one primary “Find an event” CTA and an example empty state.
- Add `activation_step_viewed`, `event_search_after_signup`, `watchlist_added_after_signup`, and `first_alert_configured`.
- Test one activation CTA at a time; primary metric is signup → first watchlist within 24 hours.

## 8. Launch content requests → Content Agent (Agent 1)

- Product guide: “How TicketScan price alerts work: compare, set a target, buy with confidence.”
- Evergreen guide: “When to buy NFL, NBA, concert, and resale tickets.”
- Three onboarding tooltips for compare, watchlist, and target price.
- Referral landing page explaining Power User rewards without implying guaranteed savings.

## 9. Launch social plan → Social Agent (Agent 3)

Seven-day slate: day -7 price-waiting poll; day -5 compare → target demo; day -3 panic-buying myth; day -1 countdown; day 0 launch across X, Instagram, Threads, and TikTok; day +2 walkthrough/FAQ; day +6 referral prompt after successful target setup. Use one canonical UTM-tagged URL and report clicks separately from signups.

## Priority order

1. Engineering: alert endpoint, tracker freshness, target-price UI, activity/email/click events.
2. CRO: onboarding checklist and activation experiment.
3. Email: segmented win-back only after delivery instrumentation.
4. Content and Social: alert-launch assets after readiness checks.
5. Growth: referral MVP after activation instrumentation; affiliate applications immediately.

### Bottom line

TicketScan has acquisition and activation signals, but not a measurable retention loop. The best growth move this week is to make the alert promise real and observable, then monetize outbound purchase intent before introducing a premium tier.
