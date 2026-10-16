# TicketScan Growth & Retention — Weekly Report

**Week of:** 2026-10-16  
**Owner:** Agent 8 — Growth & Retention  
**Status:** Strategy and implementation handoff; no campaigns sent and no product code changed.

## Executive decision

Prioritize activation and affiliate measurement before a premium tier:

1. Instrument the first-use funnel: signup → search → save an event → open saved event → outbound seller click.
2. Launch a lightweight referral beta around useful event pages and venue guides.
3. Repair lifecycle-email measurement and rewrite the drip around the product that works today.
4. Defer a paywall until the underlying paid value is real, measurable, and stable.

The current product can help users find events, save events, review onsale/presale timing, use venue guidance, and follow outbound ticket links. This report intentionally makes no price-history, price-alert, trend, recommendation, or target-price claim.

## 1. Churn analysis

### Current snapshot

Production API checked 2026-10-16:

| Metric | Current value | Interpretation |
|---|---:|---|
| Total users | 266 | Registered accounts |
| Users created in last 7 days | 2 | Signup volume, not active-user count |
| Users with at least one saved event | 153 | Activation proxy only |
| Users with no saved event | 113 | Activation opportunity |
| Users with 2+ saved events | 41 | Possible high-intent segment |
| Saved-list items | 256 | Saved events, not events currently being price-tracked |
| Active newsletter subscribers | 7 | Small audience; do not over-segment |
| Drip send statistics | Empty | No reliable delivery/open/click evidence |
| Users pending in drip endpoint | 20 | `last_email_sent: 0`; operational backlog, not proof of deliverability |

### What cannot be measured yet

True 14-day churn, churn rate, last action, active days before churn, email opens/clicks, and win-back success are **N/A**. The admin API does not expose a reliable last-seen/session field or email engagement events. The empty drip statistics array cannot be treated as zero engagement.

### Evidence-based patterns

- 113 of 266 users currently have no saved event (42.5%); this is the clearest measurable activation gap.
- Both users who joined in the last seven days have zero saved events. The sample is too small for a conversion-rate claim, but it supports an immediate onboarding test.
- 41 users have two or more saved events. They are the first cohort for a voluntary referral prompt because they have demonstrated repeated product use.
- No churn pattern involving alerts can be inferred; alert and price-tracking data are not usable for retention analysis.

### Prevention actions

1. **First-save onboarding** — target: new accounts with no saved event after signup; expected outcome: increase signup-to-first-save, measured after instrumentation.
2. **Saved-list review reminder** — target: users with a saved event and a measured return gap of 7–14 days; expected outcome: more saved-event reviews and seller-link visits. Do not send until last-seen and suppression logic exist.
3. **Referral prompt** — target: users with 2+ saved events or a completed seller-link click; expected outcome: qualified referred signups, not raw shares.

## 2. Referral program design

### Recommendation: invite-only beta, no cash promise

Use a simple two-sided recognition mechanic first:

- Referrer receives a **TicketScan Scout** badge and a private referral count.
- New user receives a short “getting started” guide after signup.
- At 3 qualified referrals, the referrer receives early access to a new venue-guide or event-discovery feature.
- A qualified referral means a new account that verifies its email and saves at least one event within 14 days.

This avoids promising unavailable premium price features, avoids a cash/gift-card liability before attribution works, and rewards meaningful activation rather than low-quality traffic.

### Mechanics

- Link: `https://www.ticketscan.io/?ref={code}`
- Persist `ref` for 30 days in first-party storage; attach it to signup.
- One referral credit per new email/account; self-referrals and duplicate accounts are excluded.
- Show the share prompt after a successful save or on the saved-event page, not on first page load.
- Share actions: copy link, email, and native share where supported. Do not add TikTok; TicketScan has no TikTok account.

### Implementation spec

```sql
referrals (
  id, referrer_id, referee_id, code, status,
  landing_at, signup_at, qualified_at, created_at,
  UNIQUE (referrer_id, referee_id),
  UNIQUE (code)
)
```

API: `POST /api/referral/create`, `GET /api/referral/stats`, and an internal/admin qualification job. Store attribution and qualification events with parameterized queries. Frontend: a small “Invite a ticket-planning friend” card on the saved-event page plus a referral dashboard only after the beta proves demand.

### Metrics and guardrails

- Share rate among eligible users
- Landing → signup conversion
- Signup → first-save conversion
- Qualified referrals per eligible referrer
- 30-day return rate for referred vs. organic signups, after last-seen instrumentation exists
- Abuse rate and duplicate-account rate

Initial targets are hypotheses: 8% eligible-user share rate, 20% landing-to-signup, 35% referred signup-to-first-save, and viral coefficient ≥0.10 in beta. Revisit targets after 100 eligible users, not before.

## 3. Pricing and monetization recommendation

### Recommendation: affiliate-first, premium-later, ads-last

**Phase 1 — affiliate measurement (now, 2–4 weeks).** Prioritize the TicketNetwork/CJ feed and outbound-click attribution described in `docs/affiliate-programs-2026-10.md`. Add events for seller-link impression, seller-link click, destination, event, and session. Reconcile clicks and commissions before changing the user experience.

**Phase 2 — free product expansion (after measurement).** Keep event discovery, saved events, venue guides, onsale/presale information, and outbound links free. A healthy free utility gives the affiliate channel scale and avoids charging users for a broken promise.

**Phase 3 — premium discovery tools (only after validated demand).** Consider a $5–8/month or $49–69/year tier for genuinely available benefits such as saved-list organization, advanced event filters, calendar/export tools, or early access to new guides. Do not sell price history, alerts, or recommendations until those features are working and monitored.

**Advertising — selective only.** Test non-intrusive placements on high-intent venue and city pages after outbound conversion is measured. Do not place ads above the primary event or seller action, and do not accept sponsored listings without clear labeling.

### Why not freemium now

The proposed free/premium split in the original brief depends heavily on unavailable price data and alerts. A paywall built around those features would increase refund/trust risk and make retention worse. The first monetization gate should be attributable outbound demand, not a subscription checkout.

## 4. Feature launch plan: Saved Event Starter Loop

### Feature definition

After signup, TicketScan asks for one interest and one city (both skippable), sends the user to event search, and makes the next action explicit: save an event, then review its onsale timing, venue tips, and seller links. A saved-event confirmation offers an optional referral share.

### Pre-launch: two weeks

- Add funnel instrumentation and QA event payloads.
- Build a 60-second onboarding path with a visible skip option.
- Create a landing section: “Find an event, save the details, and know where to continue.”
- Email existing users with 2+ saved events for five usability interviews; do not claim price benefits.
- Prepare one venue-guide article and one social explainer about saved event lists and onsale timing.

### Launch day

- Release to 25% of new accounts first; expand after error and funnel checks.
- Email: “Your ticket plan starts with one saved event.”
- Blog/help article: “How to use TicketScan to plan a ticket purchase.”
- Social: three posts across X, Instagram, and Threads; use event discovery, venue guidance, and onsale timing as the proof points.
- Add a referral prompt only after the save confirmation; no intrusive modal.

### Post-launch: 14 days

- Review signup → first-save, first-save → saved-page view, saved-page view → seller click, and referral-qualified-signup rates.
- Interview five users who skipped onboarding and five who completed it.
- Remove any step that adds time without increasing first-save completion.
- Do not infer retention impact until last-seen instrumentation has a full 30-day window.

### Success criteria

- Primary: +20% relative improvement in signup-to-first-save vs. baseline, measured with the same event definition.
- Secondary: ≥50% of new users who save an event open the saved-event page within 7 days.
- Guardrail: onboarding completion time under 60 seconds; no increase in signup errors or unsubscribe complaints.

## 5. Paywall and upgrade flow

### Decision: no production paywall this week

Do not gate saved events, venue guides, event discovery, onsale timing, or outbound seller links. Do not show upgrade prompts for unavailable price features.

### Future upgrade architecture

When a paid feature is real and instrumented:

1. **Feature education card:** Explain one available benefit in context; include monthly and annual pricing only after the value is clear.
2. **Soft limit:** Let the user finish the current task, then explain the limit and offer an upgrade; never delete saved data.
3. **Settings upgrade page:** Show plan comparison, billing terms, cancellation path, and support contact.
4. **Post-value prompt:** Trigger only after a measurable successful action, never after a failed API response.

Copy template: “Keep your ticket planning organized with [available feature]. Choose monthly or annual access. You can cancel anytime.”

## 6. Win-back sequence handoff to Email Agent

Do not send from signup age alone. First add `last_seen_at`, delivery/bounce/open/click/unsubscribe events, suppression checks, and an idempotent queue.

### Draft sequence

**Email 1 — 7–10 days after measured inactivity**  
Subject: `Your saved ticket list is still here`  
CTA: `Review your saved events`  
Body angle: remind the user of saved event names, venue details, onsale timing, and outbound ticket links.

**Email 2 — 14 days after measured inactivity**  
Subject: `A quick look at your saved events`  
CTA: `Open your ticket list`  
Body angle: invite cleanup and review; do not mention price movement or alerts.

**Email 3 — 30 days after measured inactivity**  
Subject: `Keep only the events that matter`  
CTA: `Manage your saved events`  
Body angle: clean-slate utility and unsubscribe preference.

Suppress after return, unsubscribe, hard bounce, or a recent lifecycle send. Measure return-to-site, saved-page view, seller click, unsubscribe, and complaint rate.

## 7. Onboarding handoff to CRO Agent

- Route new registrants to `/dashboard` with a one-screen welcome state.
- Ask: “What are you planning to see?” and “Which city should we search?” Both optional.
- Primary CTA: `Find an event`.
- After first save: `Saved to your ticket list: {event} on {date} at {venue}.` CTA: `Review your saved event`; secondary: `Find another event`.
- Include “You can remove it anytime.”
- Instrument `onboarding_started`, `onboarding_skipped`, `search_submitted`, `event_opened`, `watchlist_added`, `saved_event_viewed`, and `seller_link_clicked`.

## 8. Content requests to Agent 1

1. Help article: **How to plan a ticket purchase with TicketScan** — event discovery, saved events, onsale timing, venue guidance, seller-link hygiene.
2. Venue guide refresh: one real seating/capacity/tips page with a “what to check before buying” box.
3. Referral landing copy: **Share the event you’re planning** — explain the useful action, not a savings promise.
4. World Cup content: venue-specific planning guides with verified stadium facts and official onsale information only.

## 9. Social request to Agent 3

Launch week posts should use these compliant angles:

- “Found the event? Save the date, venue, onsale details, and where to continue in one place.”
- “Before you buy: check the all-in total, seller policy, transfer terms, and whether the listing is speculative.”
- “Planning a stadium visit? Start with the venue guide: sections, capacity, and practical tips.”

CTA: `Find your event at ticketscan.io`. Avoid price claims, price-history language, alert promises, buy/wait calls, or “our data shows” statistics.

## Next engineering priorities

1. Add conversion events and GTM data-layer pushes; current handoff says GTM loads but pushes no signup, save, or outbound-click events.
2. Add `last_seen_at` and lifecycle-email telemetry.
3. Fix `/api/admin/alerts` 500, while keeping alert claims out of public copy until tracking is verified.
4. Validate TicketNetwork/CJ attribution before any affiliate-placement optimization.

## Source notes

- Production admin API snapshot: `/api/admin/stats`, `/api/admin/users`, `/api/admin/newsletter`, `/api/admin/drip-stats`, and `/api/admin/activity`, checked 2026-10-16.
- `docs/HANDOFF.md`, updated 2026-10-01.
- `marketing-agents/PRODUCT-STATUS.md`, last checked 2026-10-01.
