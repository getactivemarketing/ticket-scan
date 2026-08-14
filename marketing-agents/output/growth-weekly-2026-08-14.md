# TicketScan Growth & Retention — Week of 2026-08-08

**Prepared:** 2026-08-14 UTC  
**Agent:** Growth & Retention (Agent 8)  
**Status:** Strategy and handoff specification; no production changes made.

## Executive recommendation

Prioritize activation and trustworthy alert delivery before adding a paywall. The current product has demand, but the value loop stops at watchlist creation: 124 of 212 users have at least one watchlist item, while 0 of 209 watchlist rows has a target price. Affiliate monetization should be the first revenue experiment; introduce a paid tier only after event tracking, fresh price history, and alert delivery are reliable.

The next feature launch should be **reliable target-price alerts with browser push as an opt-in channel**, staged behind instrumentation and feed-health work. A referral beta can run alongside it using non-cash rewards that do not require a billing system.

## 1. Churn analysis — Week of 2026-08-08

### Data quality and limits

The production admin snapshot could not be authenticated during this run (`/api/admin/*` returned 401). The latest verified workspace reports provide aggregate snapshots and user/watchlist timestamps, but the current schema does not store `last_seen_at`, login/search/compare events, alert clicks, email opens, or win-back outcomes. Therefore, true 14-day churn cannot be calculated without inventing activity data.

### Churn metrics

| Metric | This Week | Last Week | Trend |
|---|---:|---:|---|
| Users churned (14d+ inactive) | N/A — no activity ledger | N/A | Instrument first |
| Churn rate | N/A | N/A | Cannot calculate |
| Average active days before churn | N/A | N/A | Cannot calculate |
| Win-back email success rate | N/A — no delivery/open/click/conversion events | N/A | Instrument first |
| Registered users | 212 snapshot | 200 snapshot | +6.0% directional |
| New signups, rolling 7 days | 12 | Prior comparison is not cohort-compatible | Directional growth |
| New-cohort users with a watchlist | 5/12 (41.7% activation proxy) | 6/6 prior observed proxy | -58.3 pp* |

\* Snapshot-derived proxies, not a production funnel rate.

### Observed churn risks and hypotheses

1. **The activation loop ends too early.** 124 users have a watchlist, but no watchlist row currently has a target price. Hypothesis: users do not understand the next step or cannot find the target-price control.
2. **Recent onboarding is weak.** Seven of the latest 12 signups are not yet activated by the watchlist proxy. They should be treated as an activation segment, not churned users.
3. **The product promise is not consistently observable.** Price history is stale after 2026-07-24 and the admin alerts detail endpoint is failing. Users may receive no reason to return if prices and alerts are not fresh.
4. **Email value cannot be evaluated.** Drip send records exist, but opens, clicks, bounces, and downstream actions are not tracked.

### Prevention actions

| Action | Target | Expected impact / test target |
|---|---|---|
| Add a post-signup checklist: Find event → Add to watchlist → Set target price | New users and the 7 unactivated recent users | Raise signup-to-watchlist proxy from 41.7% to 60% in 14 days |
| Make target price a visible second step with a suggested ceiling and saved-state confirmation | Watchlist users with no target price | Raise target-price adoption from 0% to 25% of new watchlist rows in 30 days |
| Add event-level activity and a 14/21/30-day win-back state machine | All registered users | Establish baseline; target 10% 7-day reactivation after baseline |
| Repair the tracker/admin alert path and show freshness timestamps | Users who expect monitoring | Zero stale-feed days and 95%+ successful alert jobs before monetization test |

### Required retention instrumentation

Store privacy-safe events for `signup_complete`, `first_search`, `compare_view`, `watchlist_add`, `target_price_set`, `return_session`, `price_alert_sent`, `price_alert_click`, `outbound_ticket_click`, and `referral_share`. Add `last_seen_at` or derive it from a durable event table. Record provider email delivery, open, click, bounce, unsubscribe, and complaint events. Do not use a 14-day churn label until these fields exist.

## 2. Referral program — beta design

No referral table, referral route, referral attribution, or referral dashboard exists in the current codebase. This is a new beta, not an optimization.

### Mechanic

- Authenticated user receives a stable share code and link: `https://www.ticketscan.io/?ref=CODE`.
- Landing page persists the code in first-party storage for 30 days and carries it through registration.
- A referral becomes **qualified** only after the new user verifies/registers and completes `watchlist_add` plus `target_price_set`. This prevents low-quality signups and aligns the reward with TicketScan's core value.
- No reward for self-referrals, duplicate email/account, suspicious bursts, or reversed/abusive accounts.

### Reward recommendation

Start with feature/content rewards rather than cash:

- Referee: a useful “World-class ticket buying checklist” and early access to alert improvements immediately after qualification.
- Referrer: one month of Pro preview when the paid tier launches, or an exclusive monthly price-insight report while the product remains free.
- Milestones: 3 qualified referrals unlock a Power User badge and a report; 10 unlock a 90-day Pro preview after billing exists.

Do not advertise a premium reward before the premium entitlement exists. Avoid a public leaderboard initially; it adds privacy and gaming risk without proving referral economics.

### Implementation spec

**Database**

```sql
referrals (
  id, referrer_id, referee_id, code, landing_session_id,
  status, qualified_at, reward_granted_at, created_at
)
-- UNIQUE(referrer_id, referee_id)
-- INDEX(code), INDEX(referrer_id, status), INDEX(referee_id)
```

Use parameterized queries and a server-side qualification transaction. Store UTM source/medium/campaign/content separately from the referral code; never trust a client-supplied user ID for attribution.

**API**

- `POST /api/referral/create` — authenticated; idempotently returns the user's code/link.
- `GET /api/referral/stats` — authenticated; returns qualified count, pending count, milestones, and share URL.
- `POST /api/referral/qualify` — internal/server-side event handler; validates the referee's qualifying events.
- `POST /api/referral/redeem` — authenticated; idempotent reward claim with eligibility checks.

**Frontend**

Add `/referrals` with copy-link, Web Share API, email, WhatsApp, and X share actions. Include copy such as: “I’m tracking ticket prices across marketplaces — use my link to set your own alert.” Add UTM tags to shared links.

### Success metrics and guardrails

- Share rate: users with at least one share / eligible active users. Initial target: 8%.
- Referred registration rate: qualified registrations / referred landing sessions. Initial target: 10%.
- Qualification rate: qualified referrals / referred registrations. Initial target: 35%.
- Viral coefficient: average referred registrations per sharing user × qualification rate. Initial target: ≥0.30.
- Guardrails: duplicate-account rate, abuse flags, unsubscribe rate, and support complaints.

Run a 10% authenticated-user beta for two weeks, then compare qualified referrals and 14-day retention against a holdout.

## 3. Pricing and monetization strategy

### Recommendation and order of operations

1. **Now: affiliate revenue.** Add transparent outbound attribution for Ticketmaster, SeatGeek, StubHub, and any approved partner. Use clearly labeled “View tickets” links and preserve the user's event/source context. This monetizes existing intent without reducing free access.
2. **Next: freemium experiment.** Only after price freshness, target-price setup, alert delivery, and conversion events are reliable. Keep comparison access free so SEO and acquisition are not paywalled.
3. **Later: advertising.** Test only on high-intent editorial/venue pages after traffic and page-level conversion measurement exist. Avoid ads inside alert setup and comparison decisions.

### Proposed initial tiers (hypothesis to test)

| Free | Pro — test at $7.99/month or $59.99/year |
|---|---|
| Compare available sources | 90-day price history |
| 7-day basic history | Unlimited watchlist |
| 3 watchlist items | Instant push/email alerts |
| Daily email digest | Price trend and buy-timing recommendation |
| Basic venue/event guides | No ads and priority support |

Use the annual plan as the default value anchor only if the product can deliver reliable history and alerts. Test $5.99/$49.99 against $7.99/$59.99; judge on paid conversion, 30-day retention, refund rate, and affiliate revenue per user—not checkout conversion alone.

### 90-day timeline

- **Weeks 1–2:** repair feed/alert health; add outbound and activation events; confirm partner-link terms.
- **Weeks 3–4:** ship affiliate link attribution and dashboard revenue events; QA with test events.
- **Weeks 5–8:** launch referral beta and push-alert beta; collect willingness-to-pay responses from activated users.
- **Weeks 9–12:** run a small Pro holdout test; gate only extended history, unlimited tracking, and instant alerts.

## 4. Feature launch plan — Reliable alerts + browser push

This is the recommended next launch because it reinforces retention and monetization at the moment users have already shown intent. It should not launch until the underlying tracker is current and alert jobs are observable.

### Pre-launch — two weeks before

- Engineering: repair alert detail failure, add job-health dashboard, freshness timestamp, event instrumentation, permission state, unsubscribe controls, and retry/de-duplication logic.
- Product: create a landing page and in-app preview: “Tell us your price; we’ll watch the market.”
- Content: publish “How to set a ticket price alert” and an all-in-price/marketplace comparison explainer. Use timestamped examples only.
- Email: send an existing-user teaser to users with a watchlist but no target price; do not claim a price drop.
- Social: countdown posts showing the three-step flow, with one CTA to set a target price.
- Recruitment: invite 25–50 activated users into a browser-push beta; maintain a no-push email fallback.

### Launch day

- Release to the beta cohort first, then expand after 24 hours of job-health monitoring.
- In-app banner: “Want fewer price checks? Set your number and choose how TicketScan should reach you.”
- Email announcement to opted-in users with a deep link to an event and target-price setup.
- Blog and social posts should demonstrate the workflow, not promise savings or guaranteed price drops.
- Skip Product Hunt and broad press until delivery reliability and permission opt-in are proven.

### Post-launch — days 2–14

- Review opt-in, target-price setup, delivery success, click-through, unsubscribe, complaint, and return-session metrics daily.
- Ask beta users whether alerts were timely, useful, too frequent, or confusing.
- Add frequency controls and quiet hours before expanding to all users.
- Publish a short “how to use alerts” follow-up and update onboarding based on the first failed step.

### Success metrics

- 25% of eligible watchlist users set a target price in the first two weeks.
- 30% push opt-in among users who reach the permission prompt; 95%+ alert-job success.
- 20% alert-click rate as an initial directional target; measure against email separately.
- 10% relative lift in 14-day return sessions for alert users versus holdout.
- Guardrails: unsubscribe/disable rate, duplicate alerts, stale-price sends, and complaint rate.

## 5. Paywall and upgrade flow specification

The paywall is **not ready for production** while the core alert loop is stale. Build the entitlement and event model behind a feature flag, then activate after the reliability gate above.

### Touchpoints

| Trigger | Copy | Design | Offer |
|---|---|---|---|
| User adds a 4th watchlist item | “Keep every event in one place. Pro includes unlimited watchlists and instant alerts.” | Inline limit card with preserved event and one primary CTA | $7.99 monthly / $59.99 annual; show annual savings only after confirming billing math |
| User opens history beyond 7 days | “See whether today’s price is actually low with 90 days of history.” | Blurred chart preview with timestamp and “Unlock history” | 7-day trial only if cancellation and billing flows are ready |
| User requests instant push alert | “Daily digest is free. Pro watches for changes and notifies you faster.” | Choice sheet; explain permission and fallback email | Monthly/annual toggle; no forced permission prompt |
| User receives first successful alert | “You found the moment worth watching. Keep deeper history and unlimited alerts with Pro.” | Success-state follow-up, not an interrupting modal | Soft upsell; dismissible and frequency-capped |
| Returning free user with 3 watchlist items | “Your next event is one click away—upgrade when tracking more becomes useful.” | Non-blocking dashboard banner | Annual plan as value anchor; retain free comparison access |

### CRO rules

- One primary action per touchpoint; preserve the user's event and return path.
- Do not block search, basic comparison, or existing free watchlist items.
- Show concrete limits and benefits, not fear or fake scarcity.
- Frequency-cap upgrade prompts to one per user per seven days.
- Track `paywall_view`, `upgrade_click`, `checkout_started`, `subscription_started`, `paywall_dismissed`, and `feature_used_after_upgrade`.
- A/B test copy and placement only after billing, entitlement, cancellation, and refund paths are tested.

## 6. Win-back sequence handoff — Email Agent (Agent 5)

The existing win-back draft is directionally correct; use it only after activity events exist. Recommended sequence:

1. **Day 14:** “We saved your seat-search shortcut” — return to comparison; personalize with last city/event.
2. **Day 21:** “Prices changed on events people are watching near you” — only include movement when a fresh comparison exists.
3. **Day 30:** “Last call: your watchlist can do the checking for you” — ask for a target price; include a clear unsubscribe.

Entry: no tracked activity for 14 days. Suppress on any activity, alert receipt, unsubscribe, bounce, or complaint. Cap at one message per seven days. Measure 7-day reactivation, watchlist add, target-price setup, alert click, unsubscribe, hard bounce, and complaint rate.

## 7. Onboarding handoff — CRO Agent (Agent 6)

- Replace the generic post-signup destination with a three-step checklist: search, compare, set target price.
- Ask for one intent signal (city/category or event) immediately after signup; do not add a long preference form.
- Make “Set target price” a visible next action after watchlist creation, with a suggested value and edit control.
- Add a 24-hour reminder only for users who signed up but did not add a watchlist item; stop immediately after activation.
- Test current flow vs. checklist using `signup_complete`, `watchlist_add`, `target_price_set`, and `return_session`.

## 8. Launch content requests — Content Agent (Agent 1)

- Blog: “How TicketScan price alerts work” — explain sources, timestamps, fees, and limitations.
- Blog: “When should you buy tickets?” — use the existing recommendation logic as guidance, clearly labeled as an estimate rather than a guarantee.
- Landing page: “Track the price you actually want to pay” — push-alert beta waitlist and target-price CTA.
- FAQ: alert timing, data freshness, source links, browser permissions, email fallback, and unsubscribing.
- Referral assets: one share-card image, three short share-copy variants, and a referral FAQ covering qualification and abuse prevention.

## 9. Launch social plan — Social Agent (Agent 3)

Use a two-week sequence across X, Instagram, TikTok, and email-social cross-posts:

- Week 1: problem framing (price checking is repetitive), behind-the-scenes feed-health work, teaser of “tell us your number.”
- Launch day: one workflow demo, one static explainer, one FAQ/permission post, and one user-beta invitation.
- Week 2: reminder tutorial, target-price example with timestamp, user feedback quote only with consent, and referral-beta invitation.

Primary CTA: `ticketscan.io/dashboard`. Secondary CTA: alert waitlist or referral dashboard only after the corresponding page exists. Avoid unsupported “lowest price,” “guaranteed savings,” or live-drop claims.

## Decisions and blockers for the next session

- Provide a valid admin read-only credential or export so churn and week-over-week metrics can be calculated.
- Repair `/api/admin/alerts` and determine why price history stopped on 2026-07-24.
- Confirm affiliate partner agreements and outbound-link requirements.
- Choose billing provider before activating Pro entitlements.
- Approve event schema and retention policy before labeling users churned.

**Source notes:** repository inspection of `index.js` and `web/src`, plus workspace reports `analytics-weekly-2026-08-14.md`, `customer-behavior-2026-08-14.md`, and `sequence-win-back-2026-08-14.md`. Named skills requested in the weekly prompt were not available in this session.
