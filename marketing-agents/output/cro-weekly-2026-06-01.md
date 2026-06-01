# CRO Weekly — 2026-06-01 (Mon)

Agent: CRO Specialist • Weekly deep-dive (funnel audit + A/B test + signup/popup/onboarding specs).
Companion files: `cro-weekly-2026-06-01--abtest-spec.md`, `--signup-flow.md`, `--popup-strategy.md`, `--onboarding-flow.md`.

---

## 0. Method note — verification first, escalation never

This report set has run weekly since 2026-04-13. The prior weekly (`cro-weekly-2026-05-25.md`) had drifted into escalation theater — Day-N counters, "Week 6 cumulative gap," a "checkpoint condition is met" threat to pause cadence. That format adds no information when the findings don't change. This week I did the one thing that does add information: **re-verified every carried finding against current `HEAD`** before repeating it.

**Verification result (all checked against source today, branch `main`):**

| Finding | Claim | Verified status |
|---|---|---|
| Compare hard-gate | `/compare` redirects anon users to `/login` | **Real** — `web/src/app/compare/page.tsx:87–90` |
| Event-detail hard-gate | `/event/[id]` redirects anon users to `/login` | **Real** — `web/src/app/event/[id]/page.tsx:109–110` |
| No target-price UI | `EventCard` watchlist payload omits `targetPrice`; API client supports it | **Real** — `EventCard.tsx:43–49` omits it; `api.ts:169` accepts `targetPrice?` |
| `HomeHeroButtons` dead import | imported, never rendered | **Real** — `page.tsx:3` import, zero JSX usage |
| Fabricated stats / testimonials | "$127 Avg. Savings", "50K+", named quotes | **Real** — `page.tsx:121–124`, `228–231` |
| Double footer on `/` | global `<Footer/>` + inline `<footer>` | **Real** — `layout.tsx:139` + `page.tsx:298–349` |
| Drip queries wrong table | drip loop reads `users`, never `newsletter_subscribers` | **Real** — `index.js:874` |
| No popup exists anywhere | brief says "popup exists" | **Real (brief is wrong)** — `grep -ri popup web/src` → 0 |
| No onboarding route | `/onboarding` | **Real** — directory does not exist |
| Zero frontend P0s shipped since 5/25 | git history | **Real** — `git log --since=2026-05-25 -- web/src` returns only 2 blog-data content refreshes (arrowhead, nrg); no funnel code changed |

**Conclusion: the findings are genuinely real and genuinely unshipped.** This is *not* the prior SEO-audit failure mode where flagged blockers turned out to be already-fixed in git. Here, verification confirms them. So the analysis is sound — and that is precisely why repeating it at greater volume is pointless. **The constraint is shipping, not analysis.** See §8 for the cadence recommendation that follows from this.

---

## 1. Full-Funnel Audit

Funnel: **Visit → Search → Compare → Signup → Watchlist → Retain.**

**No conversion percentages are reported.** The site has zero analytics instrumentation (`grep -ri "gtag|dataLayer|posthog|plausible|mixpanel" web/src` → 0 matches). Any funnel-rate number would be fabricated. Prior reports printed "~40% loss / ~70% loss vs benchmark" tables; those were invented and are dropped here. What follows is a **mechanism audit** — where the code structurally blocks or leaks users — which is verifiable and actionable without analytics.

### Step-by-step (verified mechanisms)

**Visit → Search.** Cold homepage traffic has **no search box**. The hero's primary CTA is a hardcoded `<Link href="/register">Get Started Free</Link>` (`page.tsx:83`) — it routes to a registration wall, not the product. `/dashboard` search *is* public and works for anon users, but the only path to it is the small "Search" nav link. A `<HomeHeroButtons>` component that routes to `/dashboard` exists and is even imported (`page.tsx:3`) but is never rendered. **Leak: the fastest path to the product's aha-moment is hidden behind a register CTA.**

**Search → Compare.** This is the largest structural break. The homepage headline is literally "Compare. Track. Save." yet `/compare` **hard-redirects any logged-out visitor to `/login`** (`compare/page.tsx:87–90`), and the "Compare" nav link isn't even shown to logged-out users (`Navbar.tsx:86–108`). The single most-advertised feature is both invisible and walled before any value is shown. `/event/[id]` has the same gate (`event/[id]/page.tsx:109–110`). **This is the #1 fix on the funnel.**

**Compare → Signup.** Registration is a 3-field form (email, password, confirm-password) with no social SSO, no `autoComplete`/`name` attributes (breaks browser autofill), no password-reveal, and no `?returnTo=` so a user gated out of `/compare` can't be returned there post-signup — `handleSubmit` hardcodes `router.push('/dashboard')` (`register/page.tsx:36`). The confirm-password field is friction with little benefit on a free product.

**Signup → Watchlist.** After register, the user lands on `/dashboard` pre-filled with `useState('Orlando')` (`dashboard/page.tsx:27`) — a default city, empty results, no onboarding, no "set your first alert." The watchlist add control on `EventCard` is a bare `👁️` emoji with no text label (`EventCard.tsx:169`). **Most damaging: the add payload omits `targetPrice`** (`EventCard.tsx:43–49`) even though the API client accepts it (`api.ts:169`) — so every watchlist row stores `target_price = NULL`, and the price-drop alert (the core retention loop) can never trigger.

**Watchlist → Retain.** Two independent breaks: (1) price-drop alerts can't fire because no UI ever sets a target price (above); (2) the drip campaign reads `SELECT … FROM users` (`index.js:874`) and never reads `newsletter_subscribers`, so newsletter-only signups receive zero drip emails. The retention layer has no working trigger.

### The two highest-leverage interventions (unchanged, because verified-real)

1. **Ungate Compare/Event-detail** — show results to anonymous users; gate only the *save/track* action. This is the homepage's promised value; today it's walled.
2. **Add a target-price input to the watchlist add** — without it the entire price-alert engine is dead code.

---

## 2. A/B Test Design

Because there is no analytics pipeline, a cookie-cohort A/B test **cannot be read out**. The honest recommendation is the same as a well-run test would conclude for a direction this well-established: **ship the ungate as a production change and read it from the existing admin counters**, then reserve true A/B testing for genuinely ambiguous changes once instrumentation exists.

```
## A/B Test: Ungate the Compare page (run as measured production change)
Page:        /compare  (and /event/[id], same gate)
Hypothesis:  If logged-out users can SEE the price comparison and are asked to
             sign up only when they click "Track / set an alert", then registrations
             per compare-visitor will rise, because the value is shown before the ask.
Control:     Current — anon visitor is redirected to /login (sees nothing).
Variant:     Render full comparison for anon users; replace the redirect with an
             inline "Sign up to track this price" prompt on the save action only
             (reuse the existing EventCard sign-up overlay pattern, EventCard.tsx:80–104).
Primary:     Registrations (admin /api/admin/stats totalUsers delta) per 7 days.
Secondary:   totalWatchlistItems delta; /compare bounce (once instrumented).
Sample/dur:  No cohort split — full cutover. Compare 14-day admin-counter window
             pre vs post. Decision rule: keep if 14-day new-user count does not fall
             ≥30%; the expectation is a rise in watchlist adds.
Implement:   compare/page.tsx — delete the router.push('/login') block (87–90); render
             results for !user; gate only addToWatchlist behind the existing overlay.
             ~1–2 hr. Add Compare to the logged-out Navbar (Navbar.tsx:86–108).
```

Full framework (cookie wiring, dataLayer schema) for *future* ambiguous tests is carried in `cro-weekly-2026-06-01--abtest-spec.md`. The first test worth a real cohort split, once analytics lands, is **register: email+password together vs email-first** — direction there is genuinely uncertain.

---

## 3. Signup Flow Optimization

Detail in `cro-weekly-2026-06-01--signup-flow.md`. Verified ship-list, smallest first:

1. Add `autoComplete` + `name` to the 3 inputs (`register/page.tsx:69,84,99`) — ~1 min, restores browser autofill.
2. Password-reveal toggle (`register/page.tsx:83–107`) — ~10 min.
3. Inline "At least 8 characters" hint under the password field — ~5 min.
4. Capture `?returnTo=` and honor it in `handleSubmit` instead of hardcoding `/dashboard` (`register/page.tsx:36`) — ~15 min; prerequisite for routing Compare-gated users back to what they wanted.
5. Drop the confirm-password field (or keep behind the reveal toggle) — reduces a free-product form from 3 fields to 2.
6. Social SSO (Google) — real friction reducer, ~1 day, P2; defer until the above ship.

---

## 4. Popup & Modal Strategy

**Correction (carried, still true): no popup exists.** The brief's "Newsletter signup popup exists" is wrong; `NewsletterSignup` is two inline forms on the homepage only (`page.tsx:285`, `:314`). This is the verified root cause behind the newsletter signup→subscribe gap (see project memory): there is no capture surface on any page except the homepage, and even there it's a passive inline block.

Highest-leverage popup to *build* (detail in `cro-weekly-2026-06-01--popup-strategy.md`):

- **WC price-alert / email capture, exit-intent + 30s-delay**, homepage and `/world-cup-2026/*`. Email-only (no password). Trigger once per visitor (localStorage flag), mobile = scroll-depth 60% instead of exit-intent. **Cross-dependency: this is worthless until §1 drip fix ships** (`index.js:874`), because captured emails land in `newsletter_subscribers`, which the drip loop never reads. Build the drip UNION first or in the same PR.

WC timing: kickoff is **2026-06-11 (T-10)**. A new signup today receives only drips 1 (d3=6/4) and 2 (d7=6/8) before kickoff; drips 3–5 land post-tournament. The pre-kickoff capture window is closing; this is a reason to ship the capture+drip pair now or not bother with WC-specific drip copy at all.

---

## 5. Onboarding Flow Design

`/onboarding` route does not exist (verified). Detail in `cro-weekly-2026-06-01--onboarding-flow.md`. Lightweight 3-step target (<60s to first alert):

1. "What are you into?" — sports / concerts / theater / World Cup (writes `user_favorites`).
2. "Your city" — replaces the hardcoded `'Orlando'` dashboard default with the user's real city.
3. "Search and set your first price alert" — lands on `/dashboard?city=…` with the target-price input live.

Skippable but default-on. The single dependency that makes this matter is the **target-price input from §1** — without it, step 3 has nothing to set.

---

## 6. Cross-Agent Handoffs

| To | What | Why |
|---|---|---|
| **Content (Agent 1)** | Replacement stats-bar claims for `page.tsx:121–124` (drop "$127 Avg. Savings"/"50K+"): e.g. "Compares 3 major ticket sites" / "Free price-drop alerts" / "Updated every 4 hours". | Removes unsupported claims (FTC exposure); keeps the bar. |
| **Content (Agent 1)** | One hero CTA label for the ungate/route-to-product change: "Find Tickets Now" or "Compare Prices Now". | Single copy decision, not a test. |
| **Content (Agent 1)** | WC email-capture popup copy, ≤30 words, email-only. | Gating dependency for §4 popup. |
| **Growth (Agent 8)** | Onboarding 3-step spec + expectation-setting: after the Compare ungate, `usersToday` may dip while `totalWatchlistItems` rises — watch the latter, not the former. | Prevents a "user count dipped, revert" reflex. |
| **Analytics (Agent 7)** | The single highest-ROI change on the platform: a 3-line `dataLayer.push` in the `NewsletterSignup` success handler (`NewsletterSignup.tsx:31`) and at `register/page.tsx:36`. Until one fires, no test in this report can be read out. | Every readout downstream depends on it. |

---

## 7. Deliverables Index

1. `cro-weekly-2026-06-01.md` — this file
2. `cro-weekly-2026-06-01--abtest-spec.md` — ungate-as-production-change + future-test framework
3. `cro-weekly-2026-06-01--signup-flow.md` — verified ship-list
4. `cro-weekly-2026-06-01--popup-strategy.md` — popup catalog + WC capture (+ drip dependency)
5. `cro-weekly-2026-06-01--onboarding-flow.md` — 3-step flow

---

## 8. Recommendation — change the cadence, not the volume

The audit has converged. Every P0 here has been verified-real for 6+ weeks and verified-unshipped via git. Producing a 7th full weekly with bigger day-counters is the exact "stale-escalation spiral" this project has been burned by before — motion that reads as progress while surfacing no new information.

**Recommendation: pause the full weekly CRO report until a frontend P0 ships.** Replace it with a one-line weekly status (`git log -- web/src` since last ship + the open-P0 count). Resume the deep-dive the week after the first P0 merges, when there is an actual delta to analyze. This is not giving up on the findings — they're real and they matter — it's refusing to spend analysis cycles re-proving what's already proven while the bottleneck is entirely on the commit side.

**If a single thing ships this week, make it one of these two** (both ~1–2 hr, both unblock a dead system):
- **Ungate `/compare`** (delete `compare/page.tsx:87–90`, gate only the save action) — unwalls the headline feature.
- **Add a `targetPrice` input to watchlist add** (`EventCard.tsx`) — turns the price-alert engine from dead code into a working loop.

Everything else in this report is downstream of those two.
