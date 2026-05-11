# CRO Weekly — 2026-05-11 (Monday)

Agent: CRO Specialist • Cadence: Weekly deep-dive (full-funnel audit + A/B test spec + signup-flow optimization + popup strategy + onboarding design) • Companion to today's `cro-daily-2026-05-11.md` • Sister deliverables shipped today: `cro-weekly-2026-05-11--abtest-spec.md`, `cro-weekly-2026-05-11--signup-flow.md`, `cro-weekly-2026-05-11--popup-strategy.md`, `cro-weekly-2026-05-11--onboarding-flow.md`.

> **This is Week 4 on the same finding set.** Weekly audits ran 2026-04-13, 04-20, 04-27, 05-04 — all P0s from the 04-20 audit (compare hard-gate, missing target-price UI, missing onboarding) plus all P0s added in 04-27 (popup spec, homepage hero regression) plus the 05-04 daily promotions (WC banner countdown, prioritization gap) are **unchanged in production**. Zero merges on any CRO-tagged P0 since 2026-04-20. The escalation language in this file is proportional to the cumulative gap.
>
> **What is new this week (2026-05-11):**
>
> 1. **T-31 days to World Cup kickoff** (June 11, 2026). The WC banner at `page.tsx:212–220` shows the static date range `June 11 – July 19, 2026` but no live countdown ticker, no JS-driven days-left, no `<time>` element. At T-31 this is the highest-leverage display fix on the homepage — every day not shipped is a day of free urgency forfeited. Carried over from the 2026-05-04 daily (which promoted this to P0); 7 days unresolved at P0.
> 2. **A/B test priority pivot.** Last week speced the Compare-page soft-gate test as primary. That test cannot ship until the underlying soft-gate refactor lands (~3 hr dev work, also unmerged). This week's primary spec is the **homepage hero CTA test** — a 7-minute code change that uses the **already-imported-but-never-rendered** `HomeHeroButtons` component (`page.tsx:3`) as the variant. It is the cheapest A/B test on the candidate list and forces the dataLayer/analytics stack to ship as a side effect. Full spec in `cro-weekly-2026-05-11--abtest-spec.md`.
> 3. **The signup-flow / popup-strategy / onboarding-flow companion files are intentionally compressed this week** (Week 3 of writing them; the 2026-04-27 and 2026-05-04 versions are still load-bearing). Each is now a sharp ship-list with file paths and line numbers instead of a full re-spec.
> 4. **Brief correction (Week 4 of carrying it).** The agent brief says "Newsletter signup popup exists." It does not. Grep across `web/src/` returns zero `*Popup*` files. The brief is wrong and should be corrected upstream.

---

## 1. Full-Funnel Audit

The funnel: **Visit → Search → Compare → Signup → Watchlist → Retain.** Below is the synthesis of four weekly cycles plus 35 daily audits, structured by step. The detailed prose for each step is in `cro-weekly-2026-05-04.md` §1; this week only the **delta table** and **what-must-ship-this-week** list are reproduced inline.

### Funnel-step status (Mon 2026-05-11)

| Step | Surface(s) | Estimated drop-off vs benchmark | Primary cause (verified today) | Days unresolved | Δ vs 2026-05-04 |
|---|---|---|---|---|---|
| **Visit** | `/`, `/blog/[slug]` (21), `/venues/[slug]` (24), `/world-cup-2026/[stadium]` (17), `/tickets/[slug]` (37) | — (top of funnel) | Site indexable. Telemetry pipeline still unwired (Day 33 of zero `dataLayer.push`). | — | +14 days |
| **Search** | `/`, `/dashboard` | **~40% loss vs benchmark** — homepage hero CTA routes acquisition traffic to register form | `HomeHeroButtons` imported `page.tsx:3` but never rendered; hardcoded `<Link href="/register">` at `page.tsx:83`; dashboard city default `useState('Orlando')` (`dashboard/page.tsx:27`); no URL-state for `?city=&keyword=` | **20** | +7 days |
| **Compare** | `/compare` | **~70% loss vs benchmark** — hard auth gate on the value-prop page | `compare/page.tsx:87–90` `router.push('/login')` for any anon visitor. JSON-LD `WebApplication` ↔ actual `/login` redirect content-parity violation persists. | **27** | +7 days |
| **Event detail** | `/event/[id]` | **~70% loss vs benchmark** — same hard-gate pattern | `event/[id]/page.tsx:109–112` `router.push('/login')`. Indexable URL, gated content. | **25** | +7 days |
| **Signup** | `/register` | **~25–35% loss vs benchmark** — 3-field form, no `autoComplete`, no `name`, no `?source=`, no `?returnTo=` | `register/page.tsx:69–107` — 3 inputs, all missing `autoComplete` + `name`. `handleSubmit` line 36 hardcodes `router.push('/dashboard')` ignoring URL params. No social SSO. | **20** | +7 days |
| **Watchlist add** | `EventCard.tsx` `+` button → `addToWatchlist({ eventId, eventName, eventDate, venue, city })` | **~50% drop** between signup and first add — `targetPrice` field omitted from payload | `EventCard.tsx:43–49` payload literally lacks `targetPrice` → 100% of `watchlist` rows have `target_price = NULL` → price-drop emails cannot fire. **No price-alert UI exists site-wide.** EventCard's tracking affordance is still a `👁️` icon (`EventCard.tsx:169`) with no text label. | **23** | +7 days |
| **Retain** | `/watchlist`, price-tracking cron, drip campaign | **~80% drop** — retention loop ships nothing | Drip queries `users` not `newsletter_subscribers` (Day 22) → newsletter signups receive zero drip emails. Price alert emails depend on a `target_price` that no UI sets. Watchlist add does not trigger any email. | **22** | +7 days |

**Weekly pattern (unchanged Week 4):** the funnel narrows aggressively at **Compare (hard gate)** and **Watchlist (no target price → no alert → no return)**. These are still the two highest-leverage interventions on the entire funnel. **No fix order change this week.** The cumulative cleanup spec has lengthened by one item only: the WC countdown ticker, which the 05-04 daily already promoted to P0.

### What is true this week that was not true last week

- **T-31 days to WC kickoff (was T-38).** The WC banner still has no live countdown. At T-7 (June 4) urgency converts to FOMO; at T-31 the countdown is still informational. We have ~24 days before the conversion rate of the WC banner pivots from "interest" to "panic-buy", and we should be shipping the countdown well before that. Implementation: `<time dateTime="2026-06-11">` + `useEffect` setInterval with a `Math.floor((kickoff - now) / 86400000)` days-left integer. ~30 minutes.
- **Daily-audit count: 35 daily reports filed in this cycle**, each with the same top-3 P0s. The signal-to-action ratio is at its lowest of the year. Recommend this week's standup raises the prioritization-gap framing from the 05-04 daily as the explicit agenda item.

### What must ship this week (zero-risk + high-leverage)

The list below is intersected with what is shippable in <2 hours of dev time per item, has zero negative downside, and meaningfully changes a conversion-rate funnel step. **These are the ship-list. Other items remain on the backlog but are not on this week's list.**

| # | Fix | File:line | Effort | Funnel impact | Days unresolved |
|---|---|---|---|---|---|
| 1 | Render `<HomeHeroButtons />` (already imported) instead of hardcoded `<Link href="/register">` | `web/src/app/page.tsx:82–85` | 7 min | +10–25% search initiation from homepage | 20 |
| 2 | Add `autoComplete` + `name` attrs to register form inputs | `web/src/app/register/page.tsx:69, 84, 99` | 5 min | +10–15% form completion | 20 |
| 3 | Add `targetPrice` to `addToWatchlist` payload + a `targetPrice` input on EventCard (or watchlist add modal) | `web/src/components/EventCard.tsx:43–49`, new modal | 2 hr | Unlocks 100% of price-drop alert emails (currently 0 fire) | 23 |
| 4 | Replace `👁️` watchlist button with text-labeled `"Track"` + bell SVG | `web/src/components/EventCard.tsx:159–170` | 30 min | +10–20% watchlist-button discovery | 23 |
| 5 | Remove `$127 Avg. Savings` from stats bar (FTC §5 exposure) | `web/src/app/page.tsx:122` | 2 min | −1 active legal exposure | 21 |
| 6 | Remove fabricated testimonials (Marcus T., Sarah K., Jason R.) | `web/src/app/page.tsx:228–232` | 5 min | −1 active legal exposure; +brand integrity | 14 |
| 7 | WC countdown ticker on homepage banner | `web/src/app/page.tsx:212–220` | 30 min | +5–10% WC-banner CTR; +urgency at T-31 | 7 |
| 8 | Drip campaign query — `users` → `newsletter_subscribers` UNION | `index.js` drip-campaign cron | 1 hr | Activates retention email loop for newsletter signups | 22 |

**Total: 8 fixes, ~5 hr 19 min of dev work.** This is the smallest possible set of changes that materially moves the funnel. Every item is shippable independently. None requires the soft-gate refactor or the popup component.

---

## 2. A/B Test Design (this week's primary spec)

**Test:** Homepage Hero CTA — Hardcoded Register Link (control) vs `<HomeHeroButtons />` Rendered (variant).

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

Full spec, hypothesis derivation, instrumentation requirements, and rollout plan in `cro-weekly-2026-05-11--abtest-spec.md`.

**Why this test, this week (instead of repeating last week's compare-gate test):**

1. **Last week's compare-gate test cannot ship.** It depends on a soft-gate refactor (~3 hr dev) that is unmerged Day 27. The hero-CTA test depends on a 7-minute code change (just render the already-imported component). Cheapest-to-ship A/B test on the candidate list.
2. **The variant code already exists.** `HomeHeroButtons.tsx` is 48 lines, imported at `page.tsx:3`, never rendered. The test costs zero new component code.
3. **Forces the analytics taxonomy to ship.** Day 33 of zero `dataLayer.push` across `web/src/`. The hero-CTA test forces the first `hero_cta_click` event, the first `cohort` cookie, and the first conversion-event funnel. Side benefit > the test itself.
4. **The compare-gate test remains the canonical P0** for the underlying refactor. It is *not* deprioritized — it is gated on dev work that has not happened. The hero-CTA test is parallel, not substitutive.

---

## 3. Signup Flow Optimization (Week 3)

Full state and recommendation set in `cro-weekly-2026-05-04--signup-flow.md`. This week's deliverable (`cro-weekly-2026-05-11--signup-flow.md`) is a compressed tactical ship-list with line numbers — no new spec, three new tactical observations:

- The 5-minute `autoComplete` + `name` fix is on Day 20 unmerged. There is no rational reason for this to be unmerged.
- The `?source=` and `?returnTo=` URL param capture (specified 2026-05-04) is on Day 7 unmerged.
- A new observation: `register/page.tsx:36` `router.push('/dashboard')` lands new users on an empty Orlando-default search box. This is the **wrong post-signup destination** even before onboarding exists — it should be `/watchlist` (empty-state-with-encouragement) or `/onboarding` (when shipped). Lands-on-Orlando is a bug, not just a feature gap.

---

## 4. Popup & Modal Strategy (Week 3)

Full popup-type catalog and code spec in `cro-weekly-2026-05-04--popup-strategy.md`. This week's deliverable (`cro-weekly-2026-05-11--popup-strategy.md`) is a compressed ship-list with one new popup added this week:

- **New: WC Stadium Reminder Popup** — fires on `/world-cup-2026/[stadium]` pages at T-30 or sooner (we are T-31 today, so this fires for any stadium-page visitor by tomorrow). Copy: "Kickoff at [Stadium] in [N] days — set a price alert before they sell out." CTA: email-only capture, creates lightweight watchlist row at `event_id = wc-2026-[stadium-id]`. This is the highest-conversion popup the platform can run between now and June 11.

The exit-intent, scroll-soft-capture, compare-card, and welcome-back popups specified 2026-05-04 are all still unbuilt Day 7. No code has moved on any of them.

---

## 5. Onboarding Flow Design (Week 3)

Full 4-step onboarding spec, route, mount, and code skeleton in `cro-weekly-2026-05-04--onboarding-flow.md`. This week's deliverable (`cro-weekly-2026-05-11--onboarding-flow.md`) adds one new path:

- **New: "Pre-onboarding watchlist intercept"** — if a user clicks the EventCard `+` button (anon) and completes signup via the intercept overlay (`EventCard.tsx:80–104`), the signup flow should `?returnTo=/watchlist?action=add-target&event_id=X` instead of dropping them on the onboarding flow. The user's already shown intent. Push them straight to setting `target_price` on the event they were looking at. Onboarding fires for users who arrived via `/register` directly, *not* for users who came via watchlist-intent.

The 4-step onboarding (event categories → city → first search → target price) specified 2026-05-04 is still unbuilt Day 7. The `/onboarding` route does not exist.

---

## 6. Cross-Agent Handoffs

| To | What | Why |
|---|---|---|
| **Content Agent (Agent 1)** | Copy variants for the hero-CTA A/B test. Primary CTA candidates: "Find Tickets", "Compare Prices Now", "Search 50K+ Events". Secondary CTA candidates: "See a Sample Comparison", "How It Works", "Browse Trending Deals". | The variant button text in `HomeHeroButtons.tsx` is currently "Find Tickets" — fine, but copy testing within the variant arm in a follow-up test is worth the spec now. |
| **Content Agent (Agent 1)** | WC countdown microcopy: "World Cup kicks off in [N] days" vs "T-[N] days · [N] matches · 16 stadiums". Length-budgeted to fit within the WC banner at `page.tsx:212–220`. | Microcopy needs to read well at T-31 *and* T-2. |
| **Growth Agent (Agent 8)** | Onboarding-flow design and pre-onboarding watchlist intercept (this week's new addition). The flow has been specified; growth-side execution coordination is needed because the path touches `/register`, `/watchlist`, and the new `/onboarding` route. | Cross-cutting change; growth-agent owns the cohort funnel measurement post-launch. |
| **Analytics Agent (Agent 7)** | Conversion-event taxonomy required by the hero-CTA A/B test. Events to define: `hero_cta_click {variant, destination}`, `cohort_assigned {cohort, page}`, `search_initiated {city, keyword, source}`. dataLayer schema and GTM/PostHog/Plausible decision needed before test launch. | The test cannot read out without an analytics pipeline. Day 33 of zero `dataLayer.push`. |
| **Analytics Agent (Agent 7)** | Compare-gate test (last week's spec) instrumentation, gated on the soft-gate refactor merge. | Pre-position the instrumentation so it ships the same week the soft-gate does. |

---

## 7. Deliverables Index (this week)

1. `cro-weekly-2026-05-11.md` — this file (audit + handoffs + ship list)
2. `cro-weekly-2026-05-11--abtest-spec.md` — homepage hero CTA A/B test, full spec
3. `cro-weekly-2026-05-11--signup-flow.md` — compressed tactical ship-list
4. `cro-weekly-2026-05-11--popup-strategy.md` — compressed ship-list + WC stadium reminder popup
5. `cro-weekly-2026-05-11--onboarding-flow.md` — compressed ship-list + pre-onboarding watchlist intercept

---

## 8. Closing Note — Week 4 Cumulative Gap

The CRO function has produced 4 weekly audits and 35 daily audits since 2026-04-07. Across all 39 reports, the top-3 P0s — compare hard-gate, missing target-price UI, missing onboarding — appear in every single one. **None have shipped.** This is not a CRO-side gap; it is a prioritization-and-execution gap that the daily reports have begun naming explicitly (the 2026-05-04 daily's "content-data merges; code cleanup does not" framing).

Recommendation for this week's standup: rather than ship the full P0 backlog, ship the **8-item zero-risk ship-list in §1 above**. Total dev time ~5 hours 19 minutes. This is small enough to fit in a single half-day of focused work. It produces measurable funnel deltas on every step except retention (retention requires fix #8 specifically). If even half of these ship, next week's report will have its first net-positive delta in 8 weeks.
