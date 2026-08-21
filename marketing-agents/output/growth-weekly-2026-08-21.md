# TicketScan Growth & Retention — Week of 2026-08-15

**Prepared:** 2026-08-21 UTC  
**Owner:** Agent 8 — Growth & Retention  
**Status:** Strategy and handoff specification; no production changes, emails, referrals, paywalls, or destructive data actions performed.

> The requested `churn-prevention`, `referral-program`, `pricing-strategy`, `launch-strategy`, `paywall-upgrade-cro`, and `marketing-psychology` skills are not installed in this runtime. Their frameworks were applied manually.

## Executive decision

Prioritize the first-value loop before scaling acquisition or charging users:

**signup → search/compare → watchlist → target price → fresh alert → outbound ticket click**

Affiliate revenue should be the first monetization test. Defer a paywall and broad referral launch until target-price setup, price freshness, alert delivery, and activity measurement are reliable.

## 1. Churn deep-dive

### Data quality

The live admin endpoint was checked read-only and returned `401 Unauthorized`; no usable admin secret is available locally. The latest verified workspace snapshot is used below. The current schema does not store `last_seen_at`, login/session activity, search/compare events, alert clicks, email opens, bounces, or win-back outcomes. Consequently, true 14-day churn and “last action before churn” cannot be calculated without inventing data.

### Churn metrics

| Metric | This week | Last week | Trend / confidence |
|---|---:|---:|---|
| Users churned (14d+ inactive) | N/A | N/A | No activity ledger |
| Churn rate | N/A | N/A | Denominator unavailable |
| Average active days before churn | N/A | N/A | No session history |
| Win-back email success rate | N/A | N/A | No delivery/open/click data |
| Registered users | 228 | 212 | +7.5%, snapshot-based |
| New users, rolling 7 days | 16 | 16 | Flat, snapshot-based |
| Watchlist rows | 221 | 203 | +8.9% |
| Rows with target price | 0 | 0 | 0%; alert loop not activated |
| Triggered alerts | 0 reported | 0 reported | Unverified; alert reporting is unreliable |

### Observable patterns and hypotheses

1. **Activation stops at watchlist creation.** There are 221 watchlist rows but zero recorded target prices. Treat this as a UX/data-path problem until proven otherwise.
2. **Freshness is a retention dependency.** The newest known price-history row is 2026-07-24 20:01 UTC. Users cannot receive credible monitoring value from stale data.
3. **Retention is unmeasurable.** The product cannot identify a user's last session, search, comparison, alert click, or outbound purchase click.
4. **Email cannot currently win users back.** Drip rows are zero and provider engagement telemetry is absent.

### Prevention roadmap

| Priority | Action | Target | Test target |
|---|---|---|---|
| P0 | Restore price tracking and `/api/admin/alerts`; expose last-refresh timestamps | All users | No stale-feed days; alert job success ≥98% |
| P1 | Make target price the explicit second step after watchlist creation, with saved-state confirmation | New watchlist users | 25% of new rows set a target within 30 days |
| P1 | Add privacy-safe activity events and `last_seen_at` derivation | All registered users | Valid 14/30-day churn baseline within 30 days |
| P2 | Add consent-aware delivery, click, bounce, and unsubscribe telemetry | Email recipients | Measure reactivation on return action, not opens alone |

## 2. Referral program — greenfield beta

No referral table, route, attribution, or dashboard exists in the current backend. Build only after target-price setup is instrumented; launch to a 10% authenticated-user cohort for two weeks.

### Mechanic and reward

- Stable link: `https://www.ticketscan.io/?ref=CODE`.
- Persist first-touch referral and UTM values for 30 days through registration.
- Qualify only after verified registration, `watchlist_add`, and `target_price_set`.
- Referee receives a ticket-buying checklist and alert-beta access.
- Referrer receives one month of future Power User/Pro preview, or an exclusive price-insight report while the product remains free.
- Milestones: 3 qualified referrals unlock a badge/report; 10 unlock a longer Pro preview after billing exists.
- Defer public leaderboards. Reject self-referrals, duplicate accounts, suspicious bursts, and reversed accounts.

### Implementation spec

```sql
referrals (
  id, referrer_id, referee_id, code, landing_session_id,
  source, medium, campaign, status, qualified_at,
  reward_granted_at, created_at
)
-- UNIQUE(referrer_id, referee_id)
-- INDEX(code), INDEX(referrer_id, status), INDEX(referee_id)
```

Recommended routes: `POST /api/referral/create`, `GET /api/referral/stats`, an internal qualification hook, and idempotent `POST /api/referral/redeem`. Use parameterized queries and server-side attribution; never trust a client-supplied user ID.

### Success metrics

- Share rate: 8% of eligible active users.
- Referred visit → registration: 10% initial target.
- Referred registration → qualified activation: 35% initial target.
- Viral coefficient: ≥0.30.
- Guardrails: duplicate-account rate, abuse flags, unsubscribe rate, and support complaints.

## 3. Pricing and monetization

### Recommended order

1. **Affiliate first.** Add clearly labeled Ticketmaster, SeatGeek, and StubHub outbound links with event/source/campaign attribution and a weekly commission reconciliation.
2. **Freemium second.** Gate only proven, incremental value after feed and alert reliability are established.
3. **Advertising third.** Test on editorial/venue pages, not in comparison or alert setup. Preserve trust and affiliate intent.

### Premium hypothesis

| Free | Pro — test hypothesis: $7.99/month or $59.99/year |
|---|---|
| Basic comparison | 90-day price history |
| 7-day history | Unlimited watchlist |
| 3 watchlist items | Instant email/push alerts |
| Daily digest | Price trend and buy-timing recommendation |
| Basic guides | No ads and priority support |

The price is a test hypothesis, not a launch commitment. Measure paid conversion, 30-day retention, refund rate, and affiliate revenue per user together. Do not paywall search or basic comparison.

### 90-day sequence

- **Weeks 1–2:** repair tracker/alerts; implement conversion, outbound, and email events.
- **Weeks 3–4:** ship affiliate attribution and QA commission paths.
- **Weeks 5–8:** run referral and push-alert beta; survey activated users for willingness to pay.
- **Weeks 9–12:** small Pro holdout, gating extended history, unlimited tracking, and instant alerts only.

## 4. Feature launch plan — reliable target-price alerts + browser push

This is the next launch because it strengthens retention and creates a legitimate future premium boundary. It is not launch-ready while price data is stale.

### Pre-launch: two weeks

- Fix tracker freshness and `/api/admin/alerts`; add job-health and retry/de-duplication reporting.
- Add target-price UI, suggested ceiling, saved-state confirmation, frequency controls, quiet hours, and email fallback.
- Create a waitlist/preview page: “Tell us your price. We’ll watch the market.”
- Invite 25–50 activated users to browser-push beta; request permission only after value is established.
- Content: publish “How TicketScan price alerts work” and an all-in-fee comparison explainer.
- Email: teaser only to users with a watchlist and no target price; no unsupported price-drop claims.
- Social: demonstrate compare → set target → receive alert with timestamps and source labels.

### Launch day

- Release to beta first; expand after 24 hours of delivery/job-health review.
- Email opted-in users, publish a workflow demo, and place a dashboard/event-detail banner.
- Use one primary CTA: **Set my target price**.
- Skip Product Hunt, press, and scaled paid media until seven days of clean delivery data exist.

### Post-launch: days 2–14

- Monitor opt-in, target-price setup, provider delivery, alert click, second-session return, duplicate alerts, and opt-out rates.
- Interview five activated and five non-activated users.
- Add an alert tutorial and fix the highest-drop-off step.

### Success metrics

- 25% of eligible watchlist users set a target within two weeks.
- 30% push opt-in among users reaching permission prompt.
- ≥98% provider-confirmed alert delivery; <1% duplicate alerts.
- 10% relative lift in 14-day return sessions versus holdout.

## 5. Paywall and upgrade flow

**Status: deferred behind a reliability gate.** Implement entitlements behind a feature flag, but do not expose billing until tracker freshness, alerts, cancellation, refunds, and measurement pass QA.

| Trigger | Copy | Design / offer |
|---|---|---|
| Fourth watchlist item | “Keep every event in one place. Pro includes unlimited watchlists and instant alerts.” | Inline limit card; $7.99 monthly / $59.99 annual |
| History beyond 7 days | “See whether today’s price is actually low with 90 days of history.” | Locked chart range with preview |
| Instant-alert request | “Daily digest is free. Pro watches for changes and notifies you faster.” | Choice sheet; explain browser permission and fallback |
| First successful alert | “You caught the moment worth watching. Keep deeper history and unlimited alerts with Pro.” | Dismissible success-state banner |
| Three watchlist items | “Your next event is one click away—upgrade when tracking more becomes useful.” | Non-blocking dashboard banner |

Rules: one primary CTA, preserve event context and return path, never block search/basic comparison, frequency-cap prompts at one per seven days, and track `paywall_view`, `upgrade_click`, `checkout_started`, `subscription_started`, `paywall_dismissed`, and `feature_used_after_upgrade`.

## 6. Win-back sequence → Email Agent (Agent 5)

Do not send until activity and provider suppression telemetry exist. Suppress on any recent activity, alert receipt, unsubscribe, bounce, complaint, or prior message within seven days.

1. **Day 14 — “Still waiting for the right ticket price?”** Personalize with the last verified event; CTA: open watchlist and set a target.
2. **Day 21 — “Prices changed on events you’re tracking.”** Send only with fresh data; show one concrete movement and timestamp.
3. **Day 30 — “Should we stop tracking this for you?”** Give a return CTA and a clear unsubscribe/control preference.

Measure reactivated session, target-price setup, alert click, and outbound ticket click. Treat open rate as diagnostic only.

## 7. Onboarding improvements → CRO Agent (Agent 6)

- Replace the post-signup empty state with **Find an event → Track it → Set a target price**.
- Preserve event and venue context through registration and deep-link back to alert setup.
- Change registration CTA to **Create account & track prices**.
- Make target price a visible second step with a suggested value and confirmation.
- Send one 24-hour reminder only to signups with no watchlist; stop on activation.
- Instrument `signup_complete`, `search_started`, `compare_view`, `watchlist_add`, `target_price_set`, and `return_session`.

Primary experiment: `Compare prices` versus `Track price` venue/event CTA. Primary metric is signup → target-price setup; guardrails are registration errors and abandonment.

## 8. Launch content requests → Content Agent (Agent 1)

- Product guide: “How TicketScan price alerts work: compare, set a target, buy with confidence.”
- Evergreen guide: “When to buy concert, NBA, NFL, and resale tickets.”
- Landing page: “Track the price you actually want to pay.”
- FAQ: source freshness, fees, browser permissions, email fallback, alert frequency, and unsubscribe.
- Lead magnet: “The 5-Minute Ticket Price Check” covering all-in fees, comparable sections, target prices, and buyer protection.
- Referral assets: share card, three short share-copy variants, and qualification/abuse FAQ.

Avoid “guaranteed savings,” “lowest price,” or live price-movement claims while the feed is stale.

## 9. Launch social plan → Social Agent (Agent 3)

Use one UTM-tagged canonical URL and report clicks separately from signups.

- **Week -2:** poll about repetitive price checking; explain the problem and show source/freshness transparency.
- **Week -1:** three-step teaser: compare → set target → alert; invite 25–50 beta users.
- **Launch day:** workflow demo, static explainer, permission/FAQ post, and beta invitation across X, Instagram, Threads, and TikTok.
- **Week +1:** tutorial, timestamped example, consented user feedback, and referral-beta invitation.

Primary CTA: dashboard/target-price setup. Do not publish a price-drop claim without a fresh observation.

## Measurement backlog and decision gates

1. P0: restore price tracking and admin alert reporting.
2. P1: add `user_activity_events`/`last_seen_at`, funnel events, UTM persistence, and outbound attribution.
3. P1: add email provider message IDs and delivery/open/click/bounce/complaint/unsubscribe events.
4. P2: add daily cohort aggregates and reconcile GTM, API, and database counts.
5. Do not label users churned, send automated win-back, launch referral rewards, or activate Pro billing until the relevant gates pass.

**Evidence used:** `analytics-weekly-2026-08-21.md`, `customer-behavior-2026-08-21.md`, `tracking-audit-2026-08-21.md`, `cro-daily-2026-08-21.md`, `email-weekly-2026-08-21.md`, prior growth reports, and source inspection of `index.js`.
