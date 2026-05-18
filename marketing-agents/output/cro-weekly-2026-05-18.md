# CRO Weekly — 2026-05-18 (Monday)

Agent: CRO Specialist • Cadence: Weekly deep-dive (full-funnel audit + A/B test spec + signup-flow optimization + popup strategy + onboarding design) • Companion to today's `cro-daily-2026-05-18.md` • Sister deliverables shipped today: `cro-weekly-2026-05-18--abtest-spec.md`, `cro-weekly-2026-05-18--signup-flow.md`, `cro-weekly-2026-05-18--popup-strategy.md`, `cro-weekly-2026-05-18--onboarding-flow.md`.

> **This is Week 5 on the same finding set.** Weekly audits ran 2026-04-13, 04-20, 04-27, 05-04, 05-11 — all P0s from the 04-20 audit (compare hard-gate, missing target-price UI, missing onboarding) plus the 04-27 additions (popup spec, homepage hero regression) plus 05-04 additions (WC banner countdown) plus 05-11 additions (drip-cron `users` vs `newsletter_subscribers` query) are **byte-identical in the working tree.** Zero CRO-tagged P0 merges since 2026-04-20. **41 consecutive days with zero frontend P0 merges** (per today's daily, §"Morning context"). The escalation language in this file is proportional to the cumulative gap.
>
> **What is new this week (2026-05-18):**
>
> 1. **T-24 days to World Cup kickoff** (June 11, 2026). The WC banner at `page.tsx:212–220` still shows the static date range `June 11 – July 19, 2026` — no live countdown ticker, no JS-driven days-left, no `<time>` element. Last week (T-31) this was the highest-leverage display fix on the homepage; this week (T-24) it is *more* leveraged, not less. **The 30-day drip campaign now overshoots kickoff by 6 days for today's signups; from tomorrow forward, every new signup misses one more pre-tournament drip touch.** (See today's daily §"Morning context" line 41.)
> 2. **Double-footer regression visible in production.** Yesterday's (5/17) audit surfaced this and today's (5/18) confirmed: `layout.tsx:139` renders the global `<Footer />` *and* `page.tsx:298–349` renders an inline `<footer>` on the homepage. Both ship on `/`. Visible duplicate ships every homepage load. **Day +1 unresolved as a regression**, but it lives on top of the larger 8-week stack.
> 3. **A/B test priority — unchanged.** Last week speced the homepage hero-CTA test as the cheapest-to-ship test (a 7-min `<HomeHeroButtons />` swap-in). It did not ship. **The hero-CTA test is the same test this week.** No new primary spec; only a tightened rollout note acknowledging that the test cannot read out without the analytics taxonomy (Day 41 of zero `dataLayer.push`). The dependency chain is now explicit: hero-CTA test → blocked on analytics events → blocked on first `dataLayer.push` → blocked on the 3-line `NewsletterSignup.tsx:32` push that has been speced for 16 days.
> 4. **The signup-flow / popup-strategy / onboarding-flow companion files remain compressed** (Week 4 of writing them). Each is a sharp ship-list with file paths and line numbers. The 04-27 and 05-04 long-form specs remain load-bearing for any reader catching up cold.
> 5. **Brief correction (Week 5 of carrying it).** The agent brief still says "Newsletter signup popup exists." It does not. `grep -r "Popup" web/src/` returns zero matches. The brief is wrong and should be corrected upstream.

---

## 1. Full-Funnel Audit

The funnel: **Visit → Search → Compare → Signup → Watchlist → Retain.** Below is the synthesis of 5 weekly cycles plus 42 daily audits, structured by step. The detailed prose for each step is in `cro-weekly-2026-05-04.md` §1; this week only the **delta table** and **what-must-ship-this-week** list are reproduced inline.

### Funnel-step status (Mon 2026-05-18)

| Step | Surface(s) | Estimated drop-off vs benchmark | Primary cause (verified today) | Days unresolved | Δ vs 2026-05-11 |
|---|---|---|---|---|---|
| **Visit** | `/`, `/blog/[slug]` (19 + index), `/venues/[slug]` (24), `/world-cup-2026/[stadium]` (17), `/tickets/[slug]` (37) | — (top of funnel) | Site indexable. Telemetry pipeline still unwired (Day 41 of zero `dataLayer.push`). Double-footer regression on `/` confirmed today. | — | +7 days |
| **Search** | `/`, `/dashboard` | **~40% loss vs benchmark** — homepage hero CTA routes acquisition traffic to register form | `HomeHeroButtons` imported `page.tsx:3` but never rendered; hardcoded `<Link href="/register">` at `page.tsx:83`; dashboard city default `useState('Orlando')` (`dashboard/page.tsx:27`); no URL-state for `?city=&keyword=` | **27** | +7 days |
| **Compare** | `/compare` | **~70% loss vs benchmark** — hard auth gate on the value-prop page | `compare/page.tsx:87–90` `router.push('/login')` for any anon visitor. JSON-LD `WebApplication` ↔ actual `/login` redirect content-parity violation persists. | **34** | +7 days |
| **Event detail** | `/event/[id]` | **~70% loss vs benchmark** — same hard-gate pattern | `event/[id]/page.tsx:109–112` `router.push('/login')`. Indexable URL, gated content. | **32** | +7 days |
| **Signup** | `/register` | **~25–35% loss vs benchmark** — 3-field form, no `autoComplete`, no `name`, no `?source=`, no `?returnTo=` | `register/page.tsx:69–107` — 3 inputs, all missing `autoComplete` + `name`. `handleSubmit` line 36 hardcodes `router.push('/dashboard')` ignoring URL params. No social SSO. | **27** | +7 days |
| **Watchlist add** | `EventCard.tsx` `+` button → `addToWatchlist({ eventId, eventName, eventDate, venue, city })` | **~50% drop** between signup and first add — `targetPrice` field omitted from payload | `EventCard.tsx:43–49` payload literally lacks `targetPrice` → 100% of `watchlist` rows have `target_price = NULL` → price-drop emails cannot fire. **No price-alert UI exists site-wide.** EventCard's tracking affordance is still a `👁️` icon (`EventCard.tsx:169`) with no text label. | **30** | +7 days |
| **Retain** | `/watchlist`, price-tracking cron, drip campaign | **~80% drop** — retention loop ships nothing | Drip queries `users` not `newsletter_subscribers` (Day 29) → newsletter signups receive zero drip emails. Price-alert emails depend on a `target_price` that no UI sets. Watchlist add does not trigger any email. **Live admin counters today: `activeSubscribers: 3` for the 8th consecutive day; `triggeredAlerts: 0`; `activeAlerts: 0`.** | **29** | +7 days |

**Weekly pattern (unchanged Week 5):** the funnel narrows aggressively at **Compare (hard gate)** and **Watchlist (no target price → no alert → no return)**. These are still the two highest-leverage interventions on the entire funnel. **No fix-order change this week.** The cumulative cleanup spec has lengthened by one regression item (double-footer on `/`) and is otherwise byte-identical to 5/11.

### What is true this week that was not true last week

- **T-24 days to WC kickoff (was T-31).** The WC banner still has no live countdown. The 30-day drip campaign no longer fits before kickoff for new signups: **today's signups complete drips 1–3 (d3/d7/d14 = 5/21, 5/25, 6/01) pre-kickoff but drip-4 (d21 = 6/08) lands 3 days before kickoff and drip-5 (d30 = 6/17) lands 6 days *after* kickoff.** From tomorrow forward, every new signup loses one more pre-tournament touch. This converts the WC banner countdown from a "nice urgency display" to a "drip-funnel compression forcing function" — the countdown forces the reader to internalize that drip-5 already misses the window. (Source: today's daily, line 41.)
- **Double-footer regression confirmed on `/`.** Both global `<Footer />` (`layout.tsx:139`) and inline `<footer>` (`page.tsx:298–349`) ship on the homepage. Visible duplicate, Day +1.
- **Live platform health (fetched today via admin API at ~11:00 UTC, per today's daily):** `totalUsers: 84` (+2 vs yesterday), `totalWatchlistItems: 107` (+1 vs yesterday — sharp decel from +9 the day prior), `activeSubscribers: 3` (flat 8 days), `triggeredAlerts: 0`, `activeAlerts: 0`. **The two registered users today did not convert to newsletter.** The watchlist+1 with `triggeredAlerts: 0` is a direct confirmation that the `target_price` payload gap is live in production — adding to watchlist works, but the price-drop alert loop has nothing to fire on.
- **Daily-audit count: 42 daily reports filed in this cycle**, each with the same top-3 P0s. Signal-to-action ratio is at its lowest of the year. Recommend this week's standup raises the prioritization-gap framing from the 05-04 daily as the explicit standing agenda item until at least one P0 ships.

### What must ship this week (zero-risk + high-leverage)

The list below is intersected with what is shippable in <2 hours of dev time per item, has zero negative downside, and meaningfully changes a conversion-rate funnel step. **These are the ship-list. Other items remain on the backlog but are not on this week's list.** The list is **byte-identical to last week's** except for item 7 (countdown leverage now compounded by drip compression) and item 9 (new this week — double-footer regression).

| # | Fix | File:line | Effort | Funnel impact | Days unresolved |
|---|---|---|---|---|---|
| 1 | Render `<HomeHeroButtons />` (already imported) instead of hardcoded `<Link href="/register">` | `web/src/app/page.tsx:82–85` | 7 min | +10–25% search initiation from homepage | 27 |
| 2 | Add `autoComplete` + `name` attrs to register form inputs | `web/src/app/register/page.tsx:69, 84, 99` | 5 min | +10–15% form completion | 27 |
| 3 | Add `targetPrice` to `addToWatchlist` payload + a `targetPrice` input on EventCard (or watchlist add modal) | `web/src/components/EventCard.tsx:43–49`, new modal | 2 hr | Unlocks 100% of price-drop alert emails (currently 0 fire — `triggeredAlerts: 0` confirmed today) | 30 |
| 4 | Replace `👁️` watchlist button with text-labeled `"Track"` + bell SVG | `web/src/components/EventCard.tsx:159–170` | 30 min | +10–20% watchlist-button discovery | 30 |
| 5 | Remove `$127 Avg. Savings` from stats bar (FTC §5 exposure) | `web/src/app/page.tsx:122` | 2 min | −1 active legal exposure | 28 |
| 6 | Remove fabricated testimonials (Marcus T., Sarah K., Jason R.) | `web/src/app/page.tsx:228–232` | 5 min | −1 active legal exposure; +brand integrity | 21 |
| 7 | WC countdown ticker on homepage banner | `web/src/app/page.tsx:212–220` | 30 min | +5–10% WC-banner CTR; +urgency at T-24; reframes drip-compression for staff and reader | 14 |
| 8 | Drip campaign query — `users` → `newsletter_subscribers` UNION | `index.js` drip-campaign cron (line ~874) | 1 hr | Activates retention email loop for newsletter signups (currently `activeSubscribers: 3` receive zero drip) | 29 |
| 9 | **NEW: Remove inline `<footer>` from homepage** (delete `page.tsx:298–349`); rely on global `<Footer />` mounted in `layout.tsx:139` | `web/src/app/page.tsx:298–349` | 10 min | Fixes visible double-footer bug; removes one of two `NewsletterSignup` surfaces (other remains at `page.tsx:285`) | **2 (regression)** |

**Total: 9 fixes, ~5 hr 29 min of dev work.** This is the smallest possible set of changes that materially moves the funnel. Every item is shippable independently. None requires the soft-gate refactor or the popup component. **Item 9 is a regression and is shippable in 10 minutes — recommend it ships first today as a "we still ship code" signal.**

---

## 2. A/B Test Design (this week's primary spec)

**Test:** Homepage Hero CTA — Hardcoded Register Link (control) vs `<HomeHeroButtons />` Rendered (variant). **Test spec is byte-identical to last week's** because the variant code is byte-identical and the surface is byte-identical. The only delta is the **rollout-prerequisite section** at the bottom of `cro-weekly-2026-05-18--abtest-spec.md`, which now makes the analytics dependency chain explicit.

```
A/B Test: Homepage Hero CTA
Page: / (homepage)
Hypothesis: If we render the already-imported HomeHeroButtons component (Find Tickets → /dashboard for anon; Search Events → /dashboard for auth) instead of the hardcoded Get Started Free → /register button, then homepage→search initiation rate will increase ≥15% relative, because the component routes traffic to the search action users came to perform, not to a registration form blocking that action.
Control: `<Link href="/register">Get Started Free</Link>` + `<a href="#how-it-works">See How It Works</a>` (current state, `page.tsx:82–85`)
Variant: `<HomeHeroButtons />` (renders Find Tickets → /dashboard + Login → /login for anon; Search Events → /dashboard alone for auth) + secondary CTA `<Link href="/dashboard?demo=true">See a Sample Comparison</Link>`
Primary metric: anonymous-arrival → /dashboard navigation rate from / (event: hero_cta_click, destination = /dashboard)
Secondary metrics: hero CTA total CTR; /register direct-from-hero rate; homepage bounce rate; /dashboard zero-result rate (downstream)
Sample size: ~12,000 anon homepage arrivals per arm (MDE 15% relative lift on ~25% baseline hero CTR at α=0.05, β=0.8)
Duration: 14 days minimum (two weekly traffic cycles, weekend coverage)
Implementation: feature-flag the hero block in `page.tsx:82–85` keyed off `searchParams.cohort` or a deterministic visitor-id hash. The variant code already exists in `HomeHeroButtons.tsx`; the test ships the *rendering* of it.
```

Full spec, hypothesis derivation, instrumentation requirements, and rollout plan in `cro-weekly-2026-05-18--abtest-spec.md`.

**Why this test, this week (Week 2 of the same spec):**

1. **Last week's compare-gate test still cannot ship.** Soft-gate refactor (~3 hr dev) unmerged Day 34. Hero-CTA test depends on a 7-minute code change (just render the already-imported component). Cheapest-to-ship A/B test on the candidate list, week over week.
2. **The variant code already exists.** `HomeHeroButtons.tsx` is 48 lines, imported at `page.tsx:3`, never rendered. Test costs zero new component code.
3. **Forces the analytics taxonomy to ship.** Day 41 of zero `dataLayer.push` across `web/src/`. The hero-CTA test forces the first `hero_cta_click` event, the first `cohort` cookie, and the first conversion-event funnel. **Side benefit > the test itself.**
4. **Acknowledged dependency chain (new this week).** Spec is unchanged but the readout is gated on the 3-line `NewsletterSignup.tsx:32` `dataLayer.push` that has been speced for 16 days. Ship that first as a 30-minute scout commit. Then the hero-CTA test has somewhere to read.
5. **The compare-gate test remains the canonical P0** for the underlying refactor. It is *not* deprioritized — it is gated on dev work that has not happened. Hero-CTA is parallel, not substitutive.

---

## 3. Signup Flow Optimization (Week 4)

Full state and recommendation set in `cro-weekly-2026-05-04--signup-flow.md`. This week's deliverable (`cro-weekly-2026-05-18--signup-flow.md`) is a compressed tactical ship-list with line numbers — no new spec, two new tactical observations and one carryover escalation:

- The 5-minute `autoComplete` + `name` fix is on Day 27 unmerged. There is no rational reason for this to be unmerged. (Carryover, escalated from Day 20 last week.)
- The `?source=` and `?returnTo=` URL-param capture (specified 2026-05-04) is on Day 14 unmerged.
- **New:** `register/page.tsx:11–13` still uses three separate `useState` calls for `email` / `password` / `confirmPassword`. With `password.length < 8` validated only on submit (`register/page.tsx:27`), the field shows zero realtime feedback. **Inline strength meter + length validator** is a 20-minute lift; conversion lift small but the *abandonment* curve on password fields without realtime feedback is consistently 8–12% on B2C ecommerce. The cumulative case (autoComplete + name + realtime password feedback + `?source=` + `?returnTo=`) is now an **hour of work that has produced four weekly specs.**
- **New:** `register/page.tsx:36` `router.push('/dashboard')` after registration lands new users on a Dashboard prefilled with `useState('Orlando')`. Was speced last week; today's daily confirms `dashboard/page.tsx:27` is byte-identical. **Lands-on-Orlando is the literal in-prod default for the first authenticated experience every new user has.**

---

## 4. Popup & Modal Strategy (Week 4)

Full popup-type catalog and code spec in `cro-weekly-2026-05-04--popup-strategy.md`. This week's deliverable (`cro-weekly-2026-05-18--popup-strategy.md`) is a compressed ship-list with **two new popups added** this week, both WC-driven:

- **WC Kickoff Countdown Popup (homepage-only, anon visitors)** — fires on `/` for visitors with no auth cookie AND no `ts_dismissed_wc_countdown` localStorage flag, 8 seconds after first scroll. Copy: "World Cup starts in [N] days. Set a price alert before tickets surge." CTA: email-only capture, creates lightweight subscription with `source = "wc_countdown_popup"`. This is the **highest-conversion popup the platform can run between now (T-24) and June 11**.
- **WC Stadium Reminder Popup** — fires on `/world-cup-2026/[stadium]` pages at T-24 or sooner. Copy: "Kickoff at [Stadium] in [N] days — set a price alert before they sell out." CTA: email-only capture, creates lightweight watchlist row at `event_id = wc-2026-[stadium-id]`. **Carryover from last week — Day +7 unbuilt.**

The exit-intent, scroll-soft-capture, compare-card, and welcome-back popups specified 2026-05-04 are all still unbuilt Day 14. **No `Popup` file exists in `web/src/components/` (`grep -r "Popup" web/src/` → 0 matches today).** No code has moved on any popup in 14 days; the brief's claim "Newsletter signup popup exists" is now Week 5 of being factually wrong.

---

## 5. Onboarding Flow Design (Week 4)

Full 4-step onboarding spec, route, mount, and code skeleton in `cro-weekly-2026-05-04--onboarding-flow.md`. This week's deliverable (`cro-weekly-2026-05-18--onboarding-flow.md`) adds one new branching path and escalates one carryover:

- **Carryover from last week:** the "Pre-onboarding watchlist intercept" — if a user clicks the EventCard `+` button (anon) and completes signup via the intercept overlay (`EventCard.tsx:80–104`), the signup flow should `?returnTo=/watchlist?action=add-target&event_id=X` instead of dropping them on the onboarding flow. Day +7 unbuilt.
- **New: "WC-aware onboarding fork."** Between today and June 11, the onboarding's Step 1 (event categories) should pre-select "World Cup" if the user arrived from any `/world-cup-2026/*` URL (referer-based). Step 2 (city) should default to the nearest WC host city (NYC → MetLife, LA → SoFi, Boston → Gillette, etc.). This is the smallest possible "we know why you came" signal we can ship pre-tournament; it is also load-bearing if any of the WC stadium popups (§4) drives signups in the next 24 days. Spec is in `cro-weekly-2026-05-18--onboarding-flow.md` §3.

The 4-step onboarding (event categories → city → first search → target price) specified 2026-05-04 is still unbuilt Day 14. The `/onboarding` route does not exist (`grep -r "onboarding" web/src/app/` → 0 matches today).

---

## 6. Cross-Agent Handoffs

| To | What | Why |
|---|---|---|
| **Content Agent (Agent 1)** | Copy variants for the hero-CTA A/B test (carryover from 5/11). Primary CTA candidates: "Find Tickets", "Compare Prices Now", "Search 50K+ Events". Secondary CTA candidates: "See a Sample Comparison", "How It Works", "Browse Trending Deals". | The variant button text in `HomeHeroButtons.tsx` is currently "Find Tickets" — fine, but copy testing within the variant arm in a follow-up test is worth the spec now. |
| **Content Agent (Agent 1)** | **WC countdown microcopy at T-24 (vs T-31 last week).** Variants to test: "World Cup starts in 24 days" vs "T-24 days · 104 matches · 16 stadiums" vs "Tickets surge in T-24. Set a free alert." Length-budgeted to fit within the WC banner at `page.tsx:212–220`. | Microcopy needs to read well at T-24 *and* T-2. The T-2 version is the same DOM with a different integer; the writing must scale across the full window. |
| **Content Agent (Agent 1)** | **NEW: WC Kickoff Countdown Popup copy (§4 new popup).** Headline + body + CTA + dismiss text in <30 words total. Email-only capture form (no password). | New popup spec this week; copy is the gating dependency. |
| **Growth Agent (Agent 8)** | Onboarding-flow design + pre-onboarding watchlist intercept + WC-aware onboarding fork (this week's new fork). Three branching paths in one flow; growth-side execution coordination is needed because each path touches `/register`, `/watchlist`, the new `/onboarding` route, and the `/world-cup-2026/*` referer chain. | Cross-cutting change; growth-agent owns the cohort funnel measurement post-launch. |
| **Analytics Agent (Agent 7)** | **Three-line `NewsletterSignup.tsx:32` `dataLayer.push` (carryover, Day 16 unmerged).** This is the gating dependency for every downstream A/B test readout. Ships as a 30-minute scout commit — `window.dataLayer = window.dataLayer || []; window.dataLayer.push({event: 'newsletter_subscribe', source})`. | Day 41 of zero conversion telemetry. Ship this *first*, before any test. |
| **Analytics Agent (Agent 7)** | Conversion-event taxonomy required by the hero-CTA A/B test (carryover from 5/11). Events to define: `hero_cta_click {variant, destination}`, `cohort_assigned {cohort, page}`, `search_initiated {city, keyword, source}`. dataLayer schema and GTM/PostHog/Plausible decision needed before test launch. | Test cannot read out without the pipeline. |
| **Analytics Agent (Agent 7)** | Compare-gate test (5/4 spec) instrumentation, gated on the soft-gate refactor merge. | Pre-position the instrumentation so it ships the same week the soft-gate does. |

---

## 7. Deliverables Index (this week)

1. `cro-weekly-2026-05-18.md` — this file (audit + handoffs + ship list)
2. `cro-weekly-2026-05-18--abtest-spec.md` — homepage hero CTA A/B test, full spec (Week 2 of same spec; adds analytics dependency chain)
3. `cro-weekly-2026-05-18--signup-flow.md` — compressed tactical ship-list (Week 4; two new findings)
4. `cro-weekly-2026-05-18--popup-strategy.md` — compressed ship-list + WC Kickoff Countdown Popup (new) + WC Stadium Reminder Popup (carryover)
5. `cro-weekly-2026-05-18--onboarding-flow.md` — compressed ship-list + pre-onboarding watchlist intercept (carryover) + WC-aware onboarding fork (new)

---

## 8. Closing Note — Week 5 Cumulative Gap

The CRO function has produced 5 weekly audits and 42 daily audits since 2026-04-07. Across all 47 reports, the top-3 P0s — compare hard-gate (Day 34), missing target-price UI (Day 30), missing onboarding (Day 30) — appear in every single one. **None have shipped.** The `triggeredAlerts: 0` counter from today's admin API is the live-production manifestation: the platform is a price-tracker that does not track prices.

Recommendation for this week's standup, **unchanged from last week**: rather than ship the full P0 backlog, ship the **9-item zero-risk ship-list in §1 above**. Total dev time ~5 hours 29 minutes. This is small enough to fit in a single half-day of focused work. **Item 9 (delete the inline footer block on the homepage) is shippable in 10 minutes and would be the first frontend P0 merge in 41 days.** It is also the right symbolic first ship: a fix that removes broken-looking duplicate UI, no functional risk, no analytics dependency, no copy decision required.

The countdown to WC kickoff is now T-24. The drip campaign cannot complete pre-tournament for any new signup. Every day past today, the leverage of fixes 1–8 increases and the leverage of fix 7 (countdown ticker) compounds. **If no P0 ships by 2026-05-25 (T-17), next week's report will recommend pausing the daily-audit cadence on the grounds that the signal carries no information value at the current action rate.**
