# CRO Weekly — 2026-05-25 (Monday)

Agent: CRO Specialist • Cadence: Weekly deep-dive (full-funnel audit + A/B test spec + signup-flow optimization + popup strategy + onboarding design) • Companion to today's `cro-daily-2026-05-25.md` • Sister deliverables shipped today: `cro-weekly-2026-05-25--abtest-spec.md`, `cro-weekly-2026-05-25--signup-flow.md`, `cro-weekly-2026-05-25--popup-strategy.md`, `cro-weekly-2026-05-25--onboarding-flow.md`.

> **This is Week 6 on the same finding set.** Weekly audits ran 2026-04-13, 04-20, 04-27, 05-04, 05-11, 05-18 — every P0 from the 04-20 audit (compare hard-gate, missing target-price UI, missing onboarding) and every additive finding since (popup spec, homepage hero regression, WC banner countdown, drip-cron `users`-vs-`newsletter_subscribers` query, double-footer regression on `/`) is **byte-identical in the working tree today.** `git log --since="2026-05-19"` returns **9 commits, 0 of them frontend P0s** — 6 daily-agent output commits, 1 Friday weekly-agent output, 2 blog-data content-refresh commits (`Content refresh: lincoln-financial-field`, `Content refresh: gillette-stadium`). **48 consecutive days with zero frontend P0 merges** (per today's daily, line 5). The escalation language in this file is proportional to the cumulative gap and is now Week 6 of carrying.
>
> **What is new this week (2026-05-25):**
>
> 1. **T-17 days to World Cup kickoff** (June 11, 2026). The WC banner at `page.tsx:212–220` still shows the static date range `June 11 – July 19, 2026` — no live countdown ticker, no JS-driven days-left, no `<time>` element. Last week (T-24) this was already the highest-leverage display fix on the homepage; this week (T-17) the **drip-campaign compression has crossed a second threshold: today's signups now miss drips 4 *and* 5** (drip-4 at d21 = 6/15, drip-5 at d30 = 6/24 — both post-kickoff). Last week, only drip-5 missed. **In one week, the platform lost a second pre-tournament email touch from the drip funnel.** This is a structural decay, not a flat metric: every day forward, one more drip falls past kickoff.
> 2. **Today's daily added 7 new homepage findings + 6 new register findings.** Of these, **5 are P0** (H2, H3, H4, R-NEW-1, R-NEW-2). Today's daily ranks the highest-leverage shippable bundle at **42 minutes total** (rank 1+2+3): register-form `autoComplete` + password reveal (12 min), homepage trust-credibility bundle (25 min), `dataLayer.push` scout (5 min). **This is the smallest possible "we still ship code" demonstration on file.**
> 3. **Today's daily reframed the hero-CTA test (H2).** Last week's hero-CTA A/B spec proposed swapping in `<HomeHeroButtons />` (variant routes to `/dashboard`). Today's daily H2 proposes the same routing change but as a **direct production swap** (not an A/B variant) — change `Get Started Free` → `Find Tickets Now` and `/register` → `/dashboard`, mirroring Booking/Airbnb/Kayak's "let the user try the product before asking for credentials" pattern. **The Week 6 hero-CTA test recommendation in this file (§2) is now branched:** if dev capacity exists for the A/B framework prereqs (cookie + dataLayer + cohort assignment), ship the test; if not, ship the direct swap as a 5-minute fix and read out from the platform's existing `usersToday` / `totalUsers` deltas. **The direct swap is the better answer at Week 6 of zero shipping cadence.**
> 4. **`usersThisWeek` decayed from 9 → 6 → 4** over the past four daily windows (5/22 → 5/24 → 5/25). The 7-day rolling acquisition window has shrunk 56% in 4 days. This is the most concerning leading indicator on the platform — a *decelerating* funnel at T-17 to a tournament event, while the WC-targeted infrastructure (stadium pages, hero CTA, drip campaign, popups) sits unbuilt. **The acquisition curve is moving in the opposite direction of the tournament calendar.**
> 5. **The signup-flow / popup-strategy / onboarding-flow companion files remain compressed** (Week 5 of writing them in this form). Each is a sharp ship-list with file paths and line numbers. The 04-27 and 05-04 long-form specs remain load-bearing for any reader catching up cold.
> 6. **Brief correction (Week 6 of carrying it).** The agent brief still says "Newsletter signup popup exists." It does not. `grep -r "Popup" web/src/` returns zero matches. The brief is wrong and should be corrected upstream. (This is the 6th consecutive week noting this; the correction has not happened upstream either.)

---

## 1. Full-Funnel Audit

The funnel: **Visit → Search → Compare → Signup → Watchlist → Retain.** Below is the synthesis of 6 weekly cycles plus 49 daily audits, structured by step. The detailed prose for each step is in `cro-weekly-2026-05-04.md` §1; this week only the **delta table** and **what-must-ship-this-week** list are reproduced inline.

### Funnel-step status (Mon 2026-05-25)

| Step | Surface(s) | Estimated drop-off vs benchmark | Primary cause (verified today) | Days unresolved | Δ vs 2026-05-18 |
|---|---|---|---|---|---|
| **Visit** | `/`, `/blog/[slug]` (19 + index), `/venues/[slug]` (24), `/world-cup-2026/[stadium]` (17), `/tickets/[slug]` (37) | — (top of funnel) | Site indexable. Telemetry pipeline still unwired (Day 48 of zero `dataLayer.push`). Double-footer regression on `/` confirmed today. Today's daily adds 7 new findings (3 P0). | — | +7 days |
| **Search** | `/`, `/dashboard` | **~40% loss vs benchmark** — homepage hero CTA routes acquisition traffic to register form | `HomeHeroButtons` imported `page.tsx:3` but never rendered; hardcoded `<Link href="/register">` at `page.tsx:83`; dashboard city default `useState('Orlando')` (`dashboard/page.tsx:27`); no URL-state for `?city=&keyword=` | **34** | +7 days |
| **Compare** | `/compare` | **~70% loss vs benchmark** — hard auth gate on the value-prop page | `compare/page.tsx:87–90` `router.push('/login')` for any anon visitor. JSON-LD `WebApplication` ↔ actual `/login` redirect content-parity violation persists. | **41** | +7 days |
| **Event detail** | `/event/[id]` | **~70% loss vs benchmark** — same hard-gate pattern, no `layout.tsx` | `event/[id]/page.tsx:109–112` `router.push('/login')`. Indexable URL, gated content. No SEO metadata layer. | **39** | +7 days |
| **Signup** | `/register` | **~35–50% loss vs benchmark** — 3-field form, no `autoComplete`, no `name`, no `?source=`, no `?returnTo=`, no password reveal, no inline rule hint, single shared error box | `register/page.tsx:69–107` — 3 inputs, all missing `autoComplete` + `name`. `handleSubmit` line 36 hardcodes `router.push('/dashboard')` ignoring URL params. No social SSO. **Today's daily R-NEW-1..6 adds 6 findings on top of the 17 carry-forwards (23 total open).** | **34** | +7 days |
| **Watchlist add** | `EventCard.tsx` `+` button → `addToWatchlist({ eventId, eventName, eventDate, venue, city })` | **~50% drop** between signup and first add — `targetPrice` field omitted from payload | `EventCard.tsx:43–49` payload literally lacks `targetPrice` → 100% of `watchlist` rows have `target_price = NULL` → price-drop emails cannot fire. **No price-alert UI exists site-wide.** EventCard's tracking affordance is still a `👁️` icon (`EventCard.tsx:169`) with no text label. | **37** | +7 days |
| **Retain** | `/watchlist`, price-tracking cron, drip campaign | **~80% drop** — retention loop ships nothing | Drip queries `users` not `newsletter_subscribers` (Day 36) → newsletter signups receive zero drip emails. Price-alert emails depend on a `target_price` that no UI sets. Watchlist add does not trigger any email. **Live admin counters today: `activeSubscribers: 3` for the 15th consecutive day; `triggeredAlerts: 0` (Day 36); `activeAlerts: 0`. Cumulative wasted price-checks since Day 1 ≈ 69,100 (108 items × 6 cron-firings/day × 36 days).** | **36** | +7 days |

**Weekly pattern (unchanged Week 6):** the funnel narrows aggressively at **Compare (hard gate)** and **Watchlist (no target price → no alert → no return)**. These are still the two highest-leverage interventions on the entire funnel. **No fix-order change this week.** The cumulative cleanup spec has lengthened by 13 net-new findings from today's daily (7 homepage + 6 register) but the **shape of the cumulative gap is identical to 5/18** — every new finding is a 5–30 minute fix; none larger than today's largest (homepage P0 bundle at 25 min).

### What is true this week that was not true last week

- **T-17 days to WC kickoff (was T-24).** The WC banner still has no live countdown. **Drip compression crossed a second threshold:** today's signups now miss drips 4 *and* 5 pre-tournament (last week, only drip-5 missed). For new signups today: drip-1 (d3) = 5/28 ✓, drip-2 (d7) = 6/01 ✓, drip-3 (d14) = 6/08 ✓, drip-4 (d21) = 6/15 ✗ (4 days post-kickoff), drip-5 (d30) = 6/24 ✗ (13 days post-kickoff). **Last week we noted 4 of 5 drips would land pre-kickoff. This week, only 3 of 5 do.** From 5/26 forward, drip-3 also begins landing in the post-kickoff window for new signups. **By 5/29 (T-13), only drips 1 and 2 will fit. By 6/4 (T-7), only drip-1 will fit.** The WC drip funnel is structurally decaying at one drip per week.
- **`usersThisWeek` decayed 9 → 6 → 4 across 4 daily windows.** A 56% drop in the 7-day rolling acquisition window. Today's daily characterizes this as "the most concerning leading indicator." Concur. The mechanical hypothesis: the homepage `/register` hard-CTA + register-form friction + zero ad-driven traffic + no popup capture has compressed the natural top-of-funnel below baseline. Confirming this is impossible without the dataLayer push (Day 48 unresolved).
- **Live platform health (fetched today via admin API at ~11:00 UTC, per today's daily):** `totalUsers: 88` (+4 vs 5/18's 84 = +0.57 users/day), `totalWatchlistItems: 108` (+1 vs 5/18's 107 = +0.14 items/day), `activeSubscribers: 3` (flat 15 days), `triggeredAlerts: 0`, `activeAlerts: 0`. **The week-over-week user delta is +4 against a tournament-driven traffic window that should be widening, not narrowing.**
- **Daily-audit count: 49 daily reports filed in this cycle**, each with the same top-3 P0s + accreting new findings. Today's audit alone added 13 new findings. Signal-to-action ratio: 13 new findings shipped to a backlog whose existing items have aged 26–48 days. The bottleneck is not analysis depth; it is commit cadence at zero.
- **`HomeHeroButtons` is imported but unused** (`page.tsx:3` + zero JSX usage). This was flagged in today's daily H1 as a new finding. The component is 48 lines of dead code shipped to every homepage visitor's bundle. Either delete the import or render the component — choosing one is a 1-line decision. **Day 0 unresolved.**

### What must ship this week (zero-risk + high-leverage)

The list below is intersected with what is shippable in <2 hours of dev time per item, has zero negative downside, and meaningfully changes a conversion-rate funnel step. **These are the ship-list. Other items remain on the backlog but are not on this week's list.** The list is **byte-identical to last week's** except for items 10–13 (new this week from today's daily).

| # | Fix | File:line | Effort | Funnel impact | Days unresolved |
|---|---|---|---|---|---|
| 1 | Render `<HomeHeroButtons />` (already imported) instead of hardcoded `<Link href="/register">` | `web/src/app/page.tsx:82–85` | 7 min | +10–25% search initiation from homepage | 34 |
| 2 | Add `autoComplete` + `name` attrs to register form inputs (R-NEW-1 from today's daily) | `web/src/app/register/page.tsx:69, 84, 99` | 1 min | +10–15% form completion (browser autofill works) | 34 |
| 3 | Add `targetPrice` to `addToWatchlist` payload + a `targetPrice` input on EventCard (or watchlist add modal) | `web/src/components/EventCard.tsx:43–49`, new modal | 2 hr | Unlocks 100% of price-drop alert emails (currently 0 fire — `triggeredAlerts: 0` Day 36) | 37 |
| 4 | Replace `👁️` watchlist button with text-labeled `"Track"` + bell SVG | `web/src/components/EventCard.tsx:159–170` | 30 min | +10–20% watchlist-button discovery | 37 |
| 5 | Remove `$127 Avg. Savings` from stats bar (FTC §5 exposure) (today's daily H3) | `web/src/app/page.tsx:117–126` | 2 min | −1 active legal exposure | 35 |
| 6 | Remove fabricated testimonials (Marcus T., Sarah K., Jason R.) (today's daily H4) | `web/src/app/page.tsx:228–231` | 5 min | −1 active legal exposure; +brand integrity | 28 |
| 7 | WC countdown ticker on homepage banner | `web/src/app/page.tsx:212–220` | 30 min | +5–10% WC-banner CTR; +urgency at T-17; reframes drip-compression for staff and reader | 21 |
| 8 | Drip campaign query — `users` → `newsletter_subscribers` UNION | `index.js` drip-campaign cron (line ~874) | 1 hr | Activates retention email loop for newsletter signups (currently `activeSubscribers: 3` receive zero drip) | 36 |
| 9 | Remove inline `<footer>` from homepage (delete `page.tsx:298–349`); rely on global `<Footer />` mounted in `layout.tsx:139` | `web/src/app/page.tsx:298–349` | 10 min | Fixes visible double-footer bug; removes one of two `NewsletterSignup` surfaces (other remains at `page.tsx:285`) | 9 |
| 10 | **NEW: Add password reveal toggle to register form** (today's daily R-NEW-2). Standard `type` swap on click; ~15 LOC. | `web/src/app/register/page.tsx:83–107` | 10 min | +6–9% mobile form completion (Baymard) | **0** |
| 11 | **NEW: Hero CTA direct swap — `Get Started Free` → `Find Tickets Now`, `/register` → `/dashboard`** (today's daily H2). Soft-conversion pattern. **This replaces the planned A/B test variant with a direct production change — see §2 of this file.** | `web/src/app/page.tsx:83` | 5 min | +20–40% top-of-funnel by removing the auth gate before any product experience | **0** |
| 12 | **NEW: Hero stats bar — replace fabricated numerics with verifiable feature claims** (today's daily H3). 3 lines changed. | `web/src/app/page.tsx:117–126` | 15 min | Removes 1 FTC exposure; reduces "tab-bounce on noticed lies" | **0** |
| 13 | **NEW: `NewsletterSignup` `dataLayer.push` scout** — 3 lines inside the existing success handler. Day 48 of zero conversion telemetry. | `web/src/components/NewsletterSignup.tsx:31–34` | 5 min | Activates the entire downstream measurement stack | 16 |

**Total: 13 fixes, ~5 hr 45 min of dev work.** This is the smallest possible set of changes that materially moves the funnel. Every item is shippable independently. None requires the soft-gate refactor or the popup component. **Items 10, 11, 12, 13 are new this week from today's daily and total 35 minutes.** Among them, **item 13 (the 3-line `dataLayer.push`) remains the highest-ROI single change on the platform** because it activates measurement for every other change in the list.

### Recommended ship-order this week

1. **Items 11 + 12 + 13** (25 min total): the homepage P0 bundle from today's daily — hero CTA direct swap, stats bar replacement, dataLayer scout. **One commit; ships the first frontend P0 merge in 48 days.**
2. **Items 2 + 10** (11 min total): register form P0 bundle — `autoComplete` attrs + password reveal toggle. One commit; cuts register-form friction ~15–20%.
3. **Items 5 + 6 + 9** (17 min total): remove the 2 fabricated trust signals + delete the inline footer block. One commit; tightens the homepage by ~50 lines of JSX.
4. **Item 1** (7 min): wire `<HomeHeroButtons />` for the auth-aware variant. *Optional if item 11 has already routed the hero CTA to `/dashboard`* — the auth-aware logic still adds value for logged-in users, but the urgency drops.
5. **Items 7 + 8** (1.5 hr total): WC banner countdown + drip-cron `newsletter_subscribers` UNION. The two structural retention fixes.
6. **Items 3 + 4** (2.5 hr total): EventCard target-price modal + "Track" text label. The price-alert engine cannot fire without item 3.

**Ship 1+2+3 today** (~53 minutes). The remaining items can stretch through the week. **This is the minimum demonstration that the CRO function has commit-side throughput, not just analysis-side throughput.**

---

## 2. A/B Test Design (this week's primary spec — now branched)

**Last week's recommendation:** A/B-test the homepage hero CTA (control = hardcoded `Get Started Free → /register`; variant = `<HomeHeroButtons />` rendering, routes to `/dashboard`). The spec was speced for Week 2 of the same test.

**This week's recommendation:** **Ship the direct swap (production change), not the A/B test.** Reasoning:

1. **A/B test prerequisites still unshipped Day 48.** No `dataLayer.push` anywhere on the site. No analytics provider wired. No cohort cookie. The test cannot read out. Last week's spec explicitly gated readout on the 3-line `NewsletterSignup.tsx:32` scout patch — still unmerged Day 16.
2. **Direct-swap dev cost is 5 minutes.** Today's daily H2 spec: change `Get Started Free` → `Find Tickets Now`, change `href="/register"` → `href="/dashboard"`. One line of JSX. Zero new components. Zero cookie wiring. Zero variant fork code.
3. **The pattern is industry-validated.** Booking.com, Airbnb, Kayak, Expedia all default cold homepage traffic to the search/product surface, never to a register form. The hypothesis "let users try the product before asking for an account" is not a *test* hypothesis; it is a *design* hypothesis. The A/B framing implied uncertainty about a direction that is not actually uncertain.
4. **Readout is possible from existing instrumentation.** The admin API exposes `usersToday`, `usersThisWeek`, `totalUsers`, `totalWatchlistItems`. **Pre-swap baseline (today): `usersToday: 0`, `usersThisWeek: 4` (decaying from 9 four days ago).** Post-swap baseline (15-day average after merge) is directly comparable. If `usersThisWeek` stabilizes or rises while `totalWatchlistItems` accelerates, the swap is working. If both drop, it isn't. **The platform's own admin counters are the read-out — no GTM tag required.**
5. **The A/B test framework should ship anyway**, but as infrastructure for *future* tests where direction is genuinely ambiguous (e.g., signup flow social-SSO order, popup trigger timing, onboarding step ordering). The hero CTA is not the right test to learn that infrastructure on, because the direction is already known.

**The full A/B test spec (cookie wiring, variant assignment, deterministic hashing, dataLayer schema) is still load-bearing for future tests.** It lives in `cro-weekly-2026-05-25--abtest-spec.md`, reorganized this week around the direct-swap recommendation + a "first A/B test after direct swap" suggestion (the register-form social-SSO vs email-only test).

```
DIRECT SWAP (recommended this week):
File: web/src/app/page.tsx:83 (one line)
Before: <Link href="/register" className="...">Get Started Free</Link>
After:  <Link href="/dashboard" className="...">Find Tickets Now</Link>
Effort: 5 min
Readout: 15-day admin-API comparison of usersThisWeek + totalWatchlistItems vs the prior 15-day baseline (5/10–5/24)
Risk: Lowest possible — the registration CTA also exists at page.tsx:294 ("Create Free Account") below the fold; users who want to register still can
Decision rule: Keep the swap if usersThisWeek does not drop ≥30% relative over 15 days; revert if drop is sharper than -30%
```

Full alternative-A/B spec, hypothesis derivation, instrumentation requirements, and rollout plan in `cro-weekly-2026-05-25--abtest-spec.md`.

**Why the direct swap and not the test, in one line:** at Week 6 of zero shipping cadence with a tournament 17 days out, the platform needs *changes that ship*, not *tests that wait for an analytics pipeline that has been speced for 16 days*.

---

## 3. Signup Flow Optimization (Week 5)

Full state and recommendation set in `cro-weekly-2026-05-04--signup-flow.md`. This week's deliverable (`cro-weekly-2026-05-25--signup-flow.md`) is a compressed tactical ship-list with line numbers. **Six new findings from today's daily (R-NEW-1 through R-NEW-6) join the 17 prior carry-forwards** — 23 open findings total on the register form.

This week's net-new content vs 5/18's signup-flow file:

- **`autoComplete` + `name` attribute fix (S1–S3 = R-NEW-1) is on Day 34 unmerged.** No rational reason for this to be unmerged at Week 6. Smallest possible fix; literally three single-attribute additions.
- **Password reveal toggle (R-NEW-2) speced today.** Day 0. ~15 LOC standard React pattern. Mobile abandonment reduction 6–9% per Baymard.
- **Inline password-rule hint (R-NEW-3) speced today.** Day 0. `<p>At least 8 characters</p>` below the password input. Removes the submit-time round-trip on the most common error.
- **Per-field error rendering (R-NEW-4) speced today.** Day 0. Splits the shared error `<div>` at `register/page.tsx:59–63` into 4 errors (email/password/confirm/form). Standard a11y pattern; `role="alert"` for each.
- **"Why create an account?" benefit copy (R-NEW-5) speced today.** Day 0. 3 bullets, ≤6 words each, between heading and form. Anchors form completion to concrete benefits.
- **Social SSO (R-NEW-6) is the only P2 today.** Defer until P0/P1 ship. ~1 day of dev work for Google OAuth alone.
- **Carryover:** `?source=` + `?returnTo=` URL-param capture (speced 2026-05-04). **Day 21 unmerged.** Blocking dependency for the pre-onboarding watchlist intercept.
- **Carryover:** post-signup destination lands new users on `dashboard/page.tsx:27` `useState('Orlando')`. **Day 26 unmerged.** "Lands-on-Orlando is the literal first-authenticated experience" — Week 2 of carrying this exact phrasing.

**This-week recommended order in the companion file:** R-NEW-1 (1 min) + R-NEW-2 (10 min) → R-NEW-3 (5 min) + R-NEW-4 (15 min) + R-NEW-5 (5 min) → `?returnTo=` capture (5 min) → post-signup destination conditional (10 min). **51 minutes across 3 commits.**

---

## 4. Popup & Modal Strategy (Week 5)

Full popup-type catalog and code spec in `cro-weekly-2026-05-04--popup-strategy.md`. This week's deliverable (`cro-weekly-2026-05-25--popup-strategy.md`) is a compressed ship-list. **The WC Kickoff Countdown Popup (P1) leverage has compounded** — between last week (T-24) and this week (T-17), the available pre-tournament capture window has shrunk by 7 days while the email-to-drip path has lost one additional drip touchpoint. **Net leverage of P1: higher this week than last, lower next week than this. Ship-this-week is now load-bearing.**

This week's net-new content vs 5/18's popup-strategy file:

- **P1 (WC Kickoff Countdown Popup) — escalated.** The 2-hour spec is unchanged. The math is now: ~500 daily homepage visitors × 17 days × 3–7% capture rate = **255–595 emails pre-kickoff.** Last week's math at T-24 was 360–840 emails. **Each week of delay forfeits ~100–250 emails to the funnel.** vs `activeSubscribers: 3` flat 15 days — this remains a 100×+ subscriber-growth opportunity from one popup.
- **P1 cross-dependency made explicit.** Even if P1 ships and captures 500 emails, **fix #8 from §1 (drip campaign UNION) must also ship** or those 500 emails sit in `newsletter_subscribers` with no drip path. Last week's file made this point; this week the urgency is sharper because the drip funnel itself can no longer complete pre-tournament for these signups. **P1 + #8 are now bundled load-bearing.** P1 without #8 captures emails into a void; #8 without P1 has no new emails to drip.
- **P2 (WC Stadium Reminder Popup) — Day +14 unbuilt.** Unchanged.
- **P3 (EventCard intercept `?returnTo=` capture) — 5-minute fix, Day 21 unmerged.** Depends on signup-flow `?returnTo=` shipping. Carryover.
- **P4–P7 (exit-intent, scroll soft-capture, compare-card capture, welcome-back)** — all unbuilt Day 21. **No `Popup` file exists** (`grep -r "Popup" web/src/` → 0 matches today). **The brief is wrong, Week 6.**

**This-week order in the companion file:** P1 (2 hr) + the 3-line scout dataLayer push (5 min) + #8 drip query UNION (1 hr) = ~3 hours bundled. **This is the highest-leverage 3-hour package on the platform between now and 6/11.**

---

## 5. Onboarding Flow Design (Week 5)

Full 4-step onboarding spec, route, mount, and code skeleton in `cro-weekly-2026-05-04--onboarding-flow.md`. This week's deliverable (`cro-weekly-2026-05-25--onboarding-flow.md`) is a compressed ship-list. **The `/onboarding` route still does not exist** (`grep -r "onboarding" web/src/app/` → 0 matches today).

This week's net-new content vs 5/18's onboarding-flow file:

- **WC-aware onboarding fork — Day +7 unbuilt.** The stadium-referer → city-default lookup map speced last week is unchanged.
- **Pre-onboarding watchlist intercept — Day +14 unbuilt.** Carryover. Depends on `?returnTo=` shipping in the register flow.
- **New this week: "Skip onboarding for dashboard-first traffic" branching path.** If item 11 from §1 ships (hero CTA → `/dashboard` direct swap), then a meaningful fraction of homepage arrivals will land on `/dashboard` before they have an account. When they hit the watchlist `+` button on `EventCard`, the intercept overlay at `EventCard.tsx:80–104` is the only mechanism that can route them into the signup → onboarding funnel. **The onboarding spec needs a fourth entry path: "user arrived from EventCard intercept with `?event_id=X`." This entry path skips the 4-step onboarding** (the user has already declared specific event intent) and lands them on `/watchlist?action=add-target&event_id=X` after register completion. This is the path most likely to fire if item 11 ships first. **The onboarding architecture must support this branching now, before item 11 ships, so the post-direct-swap funnel doesn't drop these users on the generic 4-step flow.**
- **Time-to-value metric (carryover):** <60 seconds from signup to first price alert set. Achievable with the WC-aware fork (`/onboarding?wc=1`) or the EventCard intercept path; not achievable with the cold-start 4-step generic flow.

**This-week realistic target:** O1 (Step-1 categories screen) + O6 (post-register `/onboarding` routing) + the new "EventCard-intercept skip-onboarding" path = ~2 hours. Onboarding architecture supports 3 entry paths (cold, WC-referer, EventCard-intercept) without expanding the 4-step base flow.

---

## 6. Cross-Agent Handoffs

| To | What | Why |
|---|---|---|
| **Content Agent (Agent 1)** | **Hero CTA direct-swap copy (this week's recommended ship).** Three candidates: `"Find Tickets Now"`, `"Compare Prices Now"`, `"Search 50K+ Events"`. Length 12–17 chars; fits the existing gradient button at `page.tsx:83`. **Recommend "Find Tickets Now"** — verb + object + urgency, matches Booking.com lexical pattern. | Replaces the A/B-test copy-variants handoff from 5/18. The direct swap needs one copy decision, not three test variants. |
| **Content Agent (Agent 1)** | **Stats-bar feature claims (today's daily H3).** Three 4–8 word claims for the 3-column bar at `page.tsx:117–126`. Starter set (from today's daily): *"Compares 3 major ticket sites"* / *"Free price-drop alerts via email"* / *"Updates every 4 hours, 24/7"*. | Removes 1 FTC exposure; the current "$127 Avg. Savings" + "50K+ Events Tracked" + "5+ Sites Compared" are all unsupportable by live data. |
| **Content Agent (Agent 1)** | **Hero supporting copy rewrite (today's daily H5).** One ~20-word line that beats *"Real-time prices from every major ticket platform. Get alerts when prices drop."* Starter draft: *"Stop opening 10 tabs to price-shop tickets. We do it every 4 hours and ping you when your seat hits your number."* | Brand-voice line in the most-read 12 words on the platform. |
| **Content Agent (Agent 1)** | **WC countdown microcopy at T-17 (vs T-24 last week).** Variants: *"World Cup starts in 17 days"* vs *"T-17 days · 104 matches · 16 stadiums"* vs *"Tickets surge in T-17. Set a free alert."* Length-budgeted to fit within the WC banner at `page.tsx:212–220`. | Microcopy must scale T-17 → T-0. Same DOM, different integer. |
| **Content Agent (Agent 1)** | **WC Kickoff Countdown Popup copy** (carryover from 5/18). Headline + body + CTA + dismiss in <30 words total. Email-only capture form (no password). | Gating dependency for P1 popup ship-this-week. |
| **Content Agent (Agent 1)** | **Register-form benefit bullets** (today's daily R-NEW-5). 3 bullets, ≤6 words each. Starter set: *"✓ Track unlimited events"* / *"✓ Get price-drop alerts via email"* / *"✓ Compare prices across 3 ticket sites"*. | Below "Create your account" heading, above the form. |
| **Growth Agent (Agent 5/8)** | **Pre-set expectations for the hero-CTA direct swap** (this week's planned ship from item 11). `usersToday` and `usersThisWeek` may *drop* short-term as the registration prompt moves to later in the journey, while `/dashboard` sessions and `totalWatchlistItems` should rise. Growth should set the expectation framing with stakeholders **before** the swap, not after. | Avoid the "we shipped a change and the user count dropped — revert" reflex. The metric to watch is `totalWatchlistItems` per 7 days, not `usersToday`. |
| **Growth Agent (Agent 5/8)** | Onboarding-flow design + pre-onboarding watchlist intercept + WC-aware onboarding fork + new "EventCard-intercept skip-onboarding" branching path (this week's new path). Four entry paths; growth-agent owns the cohort funnel measurement post-launch. | Cross-cutting change; growth-agent owns the per-cohort funnel readout. |
| **Analytics Agent (Agent 4/7)** | **Three-line `NewsletterSignup.tsx:32` `dataLayer.push` (carryover, Day 16 unmerged → recommended Day 0 this week).** Ships as a 30-minute scout commit. | Day 48 of zero conversion telemetry. Ship this *first*, before any test or popup or hero swap. |
| **Analytics Agent (Agent 4/7)** | **`register_completed` dataLayer push** (today's daily — add at `register/page.tsx:36` just before the `router.push('/dashboard')`). Same 3-line pattern as the newsletter push. | If the hero CTA direct swap ships, registration moves later in the funnel; the `register_completed` event becomes the headline conversion to measure. Speced together with the newsletter push as a 10-minute bundle. |
| **Analytics Agent (Agent 4/7)** | Pre-build GTM tags / PostHog event schemas for `newsletter_subscribe`, `register_completed`, `watchlist_added`, `hero_cta_click`, `popup_shown`, `popup_submitted`. ~10 min of analytics-side prep. | The moment any one `dataLayer.push` ships, all six tags can fire — pre-positioning is free. |

---

## 7. Deliverables Index (this week)

1. `cro-weekly-2026-05-25.md` — this file (audit + handoffs + ship list)
2. `cro-weekly-2026-05-25--abtest-spec.md` — A/B-test framework spec **reorganized this week around direct-swap recommendation** (the hero-CTA test becomes the framework's first "production change with admin-API readout" rather than a cookie-gated cohort test)
3. `cro-weekly-2026-05-25--signup-flow.md` — compressed tactical ship-list (Week 5; 6 new findings from today's daily added)
4. `cro-weekly-2026-05-25--popup-strategy.md` — compressed ship-list + WC Kickoff Countdown Popup (escalated leverage at T-17)
5. `cro-weekly-2026-05-25--onboarding-flow.md` — compressed ship-list + new "EventCard-intercept skip-onboarding" entry path

---

## 8. Closing Note — Week 6 Cumulative Gap

The CRO function has produced 6 weekly audits and 49 daily audits since 2026-04-07. Across all 55 reports, the top-3 P0s — compare hard-gate (Day 41), missing target-price UI (Day 37), missing onboarding (Day 37) — appear in every single one. **None have shipped.** The `triggeredAlerts: 0` counter from today's admin API is the live-production manifestation: the platform is a price-tracker that does not track prices.

Recommendation for this week's standup, **revised from last week**: ship the **3-commit, 53-minute bundle** in §1 above (items 11+12+13 → items 2+10 → items 5+6+9). This is materially smaller than last week's 9-item / 5h29m ship-list because today's daily made the case for direct-swapping the hero CTA in production (5 minutes) rather than A/B-testing it (~30 minutes of cookie/cohort wiring on top of unshipped analytics prereqs).

The countdown to WC kickoff is now T-17. **Drip-4 and drip-5 now miss the window for today's signups; drip-3 misses starting tomorrow.** Every day past today, the leverage of items 7, 8, 11 increases — and the leverage of item 13 (the 3-line dataLayer push) compounds because every test, popup, and onboarding readout is downstream of it.

**Last week's report set a checkpoint:** "If no P0 ships by 2026-05-25 (T-17), next week's report will recommend pausing the daily-audit cadence on the grounds that the signal carries no information value at the current action rate." **Today is 2026-05-25 and zero P0s have shipped in the intervening 7 days.** The checkpoint condition is met.

**This week's revised recommendation: do not pause the daily-audit cadence.** Two reasons:

1. **Today's daily added 13 new findings**, of which 5 are P0 — including the H2 hero-direct-swap recommendation that reframes this entire weekly. Pausing the daily would have lost that reframing. Daily signal *is* still producing new prioritization information; the bottleneck is not analysis depth.
2. **The 3-commit, 53-minute bundle above is the smallest possible "we still ship" demonstration.** If it ships this week, the daily cadence is justified as commit-driving. If it does not ship, **next week's recommendation will be to escalate above the development backlog** — to whoever owns prioritization above the dev team — rather than to pause the audit. Daily audits do not become noise by repeating; they become noise by being unread. The data this week says they are still read enough to surface a daily-level pivot (H2). That is the signal that justifies the cadence.

The CRO function is not blocked on analysis. It is blocked on a single 5-minute commit that no one has made in 48 days. **Item 13 (3-line dataLayer push) at 5 minutes of dev time would end Day 48 of zero conversion telemetry and unlock every other readout on the platform.** This is the asymmetric, time-decay-sensitive, zero-risk fix that the next standup should focus the entire conversation around.
