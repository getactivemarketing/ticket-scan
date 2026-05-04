# CRO Weekly — 2026-05-04 (Monday)

Agent: CRO Specialist • Cadence: Weekly deep-dive (full-funnel audit + A/B test spec + signup-flow optimization + popup strategy + onboarding design) • Companion to today's `cro-daily-2026-05-04.md` (homepage focus, 3rd consecutive Monday on the same surface) • Sister deliverables shipped today: `cro-weekly-2026-05-04--abtest-spec.md`, `cro-weekly-2026-05-04--signup-flow.md`, `cro-weekly-2026-05-04--popup-strategy.md`, `cro-weekly-2026-05-04--onboarding-flow.md`.

> **Brief correction (carry-over from 2026-04-27 weekly).** The agent brief says "Newsletter signup popup exists." It does not. Grep across `web/src/` returns zero `*Popup*`, zero `*Modal*` outside the `EventCard` register-intercept overlay (`EventCard.tsx:80–104`). There is no exit-intent, scroll-depth, time-delay, or return-visitor popup. There is no onboarding component. Both are designed against an empty starting state in this file, not optimizations of existing flows.
>
> **Weekly framing today.** This is the third weekly cycle on the same finding set. The 4/20 weekly raised the hard-gate compare cluster, the missing target-price UI, and the missing onboarding. The 4/27 weekly added the homepage hero regression and detailed the popup spec. The 5/04 daily promotes the WC banner countdown to P0 at T-38 days and adds the prioritization-gap framing (content-data merges; code cleanup does not). **Zero merges on any P0 between 4/20 and today.** The escalation language in this file is therefore proportional to the cumulative gap, not the individual findings.

---

## 1. Full-Funnel Audit

The funnel: **Visit → Search → Compare → Signup → Watchlist → Retain.** Below is the synthesis of three weekly cycles plus 28 daily audits, structured by step. Effort estimates are dev-hours from prior daily reports; no estimates have moved this week because no underlying code has moved.

### Funnel-step status (Mon 2026-05-04)

| Step | Surface(s) | Estimated drop-off vs benchmark | Primary cause | Days unresolved | Δ vs 2026-04-27 |
|---|---|---|---|---|---|
| **Visit** | `/`, `/blog/[slug]` (21), `/venues/[slug]` (24), `/world-cup-2026/[stadium]` (17), `/tickets/[slug]` (37) | — (top of funnel) | Site indexable; SEO ships pages. Telemetry to confirm visit→intent rate is unwired (Day 26 of zero `dataLayer.push`). | — | +7 days |
| **Search** | `/dashboard`, hero CTA `<Link href="/register">` (`page.tsx:82–85`), search default `useState('Orlando')` (`dashboard/page.tsx:27`) | **~40% loss vs benchmark** — homepage hero routes acquisition traffic to a register form when the action is search | `HomeHeroButtons` component imported at `page.tsx:3` but never rendered; hardcoded register link still live; dashboard city defaults to Orlando with no URL state, no zero-result UX | 13 / today | **+7 days** (was 6 → now 13) |
| **Compare** | `/compare` | **~70% loss vs benchmark** — hard auth gate in front of the page's value prop | `compare/page.tsx:87–90` `router.push('/login')` for any anonymous visitor. JSON-LD content-parity violation persists. | **20** | **+7 days** (was 13) |
| **Event detail** | `/event/[id]` | **~70% loss vs benchmark** — same hard gate pattern | `event/[id]/page.tsx:109–112` `router.push('/login')`. Indexable URL, gated content. | **18** | **+7 days** (was 11) |
| **Signup** | `/register` | **~25–35% loss vs benchmark** — 3-field form, no `autoComplete`, no source attribution, no `returnTo` | `register/page.tsx:69–107` — 3 inputs, no `autoComplete`, no `name` attributes, no `?source=` capture, no `?returnTo=` redirect after submit, no social SSO, no progress indicator | 13 | **+4 days** (was 9) |
| **Watchlist add** | `EventCard.tsx` `+` button → `addToWatchlist({ eventId, eventName, eventDate, venue, city })` | **~50% drop** between signup and first add — no immediate post-signup prompt; **`targetPrice` field is omitted** | `register/page.tsx:36` redirects to `/dashboard`, not to a "set your first alert" surface. `EventCard.tsx:43–49` payload omits `targetPrice` → 100% of `watchlist` rows have `target_price = NULL` → price-drop emails cannot fire. **No price-alert UI exists site-wide.** | 16 | **+7 days** (was 9) |
| **Retain** | `/watchlist`, price-tracking cron, drip campaign | **~80% drop** — no retention loop ships | Drip queries `users` not `newsletter_subscribers` (Day 15) → newsletter signups receive nothing. Price alert emails depend on a `target_price` no UI sets. Watchlist add does not trigger any email. | 15 | **+7 days** (was 8) |

**Weekly drop-off pattern (unchanged from 2026-04-27):** the funnel narrows aggressively at **Compare (hard gate)** and **Watchlist (no target price → no alert → no return)**. These remain the two highest-leverage interventions on the entire funnel. **What is new this week** is that the daily audit cycle has formalized seven additional findings (homepage hero, footer regression, blog `<Link>` leaks, fabricated savings claim, fabricated testimonials, dead-click trending-deals, missing WC countdown) that compose around the two structural failures. The fix order has not changed; the cumulative cleanup spec has lengthened.

### Step-by-step audit

#### Step 1: Landing → Search

**Landing-page footprint:** ~100 indexable pages (homepage + 21 blog + 24 venue + 17 WC + 37 tickets/[slug]). Per the daily-audit cycle, blog and venue pages are the highest organic-traffic share. The homepage receives the bulk of brand + paid traffic.

**Search initiation rate (intent: "I want to find an event"):** unmeasurable — Day 26 of zero `dataLayer.push` calls anywhere in `web/src/`. Indirect evidence from the codebase:

- **Homepage hero CTA misroute.** `page.tsx:3` imports `HomeHeroButtons`. `page.tsx:82–85` hardcodes `<Link href="/register">` and never renders the imported component. The hero of the highest-traffic page funnels search-intent traffic to a register form. This is the single highest-cardinality bug on the site (estimated 40% search-initiation loss from homepage). **63 days stale at the component layer, 7 days post-2026-04-27 audit.**
- **Homepage secondary CTA.** "See How It Works" → `#how-it-works` anchor scrolls past the strongest visual on the page (price-tracker mock-up) to a generic 3-icon explainer. Not a search route.
- **Homepage stats bar.** `page.tsx:118–126` publishes `$127 Avg. Savings` — unverifiable; the platform has zero shippable savings infrastructure (no completed price-drop alert has ever fired). FTC §5 exposure documented for 14 days.
- **Mobile navbar.** `Search` is buried inside the hamburger (`Navbar.tsx:113–127`). Mobile visitors must tap the menu icon, then the Search link, before reaching `/dashboard`. Industry benchmark: surfacing search as a primary mobile action lifts mobile search initiation 20–35%.
- **Blog → search funnel.** Blog posts (21 surfaces) have no inline "Search [keyword] tickets →" CTA. The dashboard's Tips Section (`dashboard/page.tsx:194–207`) inverts the relationship — links *out* of search to the blog instead of bringing blog visitors *into* search.
- **Venue page → search funnel.** Venue pages have Buy CTAs that link out to Ticketmaster but no in-page "see all events at this venue" search initiation. Day 10 carry-over.

**Diagnosis.** The homepage hero is the wrong shape for the dominant entry intent. A user landing on the homepage from organic search ("compare ticket prices", "cheapest [event] tickets") wants to *search*, not *register*. The hero misroutes them. Three weekly cycles have flagged this; zero merges.

**Fix priority (this week):**

| Fix | Impact estimate | Effort | Days open |
|---|---|---|---|
| Homepage hero `<HomeHeroButtons />` swap (auth-aware CTA) | +10–25% search initiation from homepage | 7 min | 13 |
| Homepage hero secondary CTA → `/dashboard?demo=true` (pre-populated search) instead of anchor jump | +15–25% combined hero CTR | 1 hr | 13 |
| Homepage stats-bar savings-claim removal | −1 active legal-exposure surface | 5 min | 14 |
| Blog inline "Search [keyword] tickets →" CTA at end of every post | +5–10% blog→search initiation | 30 min × 21 (templated) | 14 |
| Mobile navbar Search elevation | +20–35% mobile search initiation | 30 min | 14 |
| `/dashboard` zero-result UX (3 nearby cities + 3 trending events) | −20–30% bounce on zero-result | 1 hr | 13 |
| `/dashboard` URL-state for `?city=&keyword=&start=&end=` | +10–15% search-share rate | 1 hr | 13 |

#### Step 2: Search → Compare

**Search-results surface:** `/dashboard` returns `EventCard` grid (`dashboard/page.tsx:170–173`). `EventCard` has two CTAs: `Buy Tickets` (external link to `event.url`) and a `+` watchlist button (anon: prompts signup; auth: adds to watchlist with no `targetPrice`).

**Compare intent on EventCard: there is none.** No CTA on the card sends the user to `/compare?event_id=X` or `/compare?keyword=...`. The path from search-results to side-by-side comparison requires a navbar click — and the navbar `Compare` link is **only visible to logged-in users** (`Navbar.tsx:62`). Anonymous users cannot reach `/compare` without typing the URL or guessing.

Even if an anonymous visitor types `/compare`, they hit `compare/page.tsx:87–90` `router.push('/login')`. The full compare page redirects, regardless of search context. **20 days unresolved.**

**Dead-end pattern on EventCard:** if a search returns 24 events with `priceRanges`, the user sees 24 `Buy Tickets` buttons that exit the site to Ticketmaster. The platform's primary value prop (compare across 3+ sources) is not reachable from the result that just demonstrated the search worked. The card's "track this event" 👁️ icon (`EventCard.tsx:169`) is a non-obvious affordance — it has been flagged for replacement (per Day 9 daily) and is still in production.

**Anonymous-friendly compare path** (the right design once the soft-gate ships, per the 2026-04-27 weekly):
- Show **all** matched-event side-by-side comparisons for free (the pricing and `BEST` badge are the SEO-indexable content; gating them invalidates the page's `WebApplication` JSON-LD claim and tanks rankings).
- Gate **only** value-add features behind signup: target-price alert setup, watchlist add, price-history chart, buy-recommendation, "All Events" tab beyond the first 5.

**Fix priority (this week):**

| Fix | Impact estimate | Effort | Days open |
|---|---|---|---|
| Compare hard-gate → soft-gate | +40–60% signups from Compare cohort | 3 hrs (4 hrs bundled w/ event-detail) | **20** |
| EventCard: add "Compare prices" CTA next to Buy Tickets → `/compare?event_id=X&source=eventcard` | +15–25% search→compare transition | 1 hr | 12 |
| Navbar `Compare` link: show to anon (after soft-gate ships) | +10–20% compare visit rate | 5 min | 13 (gated on soft-gate) |
| `/dashboard` zero-result UX | see Step 1 | 1 hr | 13 |
| EventCard `+` icon → text-labeled "Track" button | +10–20% watchlist-button discovery | 30 min | 16 |

#### Step 3: Compare → Signup

**Hard truth (unchanged from 2026-04-27):** today the Compare page does not gate features behind signup. **It gates the entire page behind signup.** The full content-parity violation (JSON-LD says the page is a `WebApplication`; the actual page is a redirect to `/login`) is on Day 20.

When the soft-gate ships, the right signup pitch is **inline on each comparison card**:

```
[Lakers vs Celtics — Sat May 30, $89 → $124]
[BUY: Ticketmaster $89]   [BUY: SeatGeek $124]
[Notify me when this drops to $___ → email + go]   ← inline, anonymous-friendly
```

The pitch is action-led ("notify me at $X"), benefit-clear (price drop alert), and **does not require account creation upfront** — email-only capture that becomes a lightweight account on confirm.

**This week's compare→signup specific question (from the brief):** "Where exactly in the compare flow does signup friction appear?" Answer: **everywhere, because the page is a redirect.** The hard gate has zero gradation. Once the soft-gate lands, the answer becomes: at the moment the user wants to set a price alert or save a comparison — the value-add features are the right place for the email/account ask, not the content itself.

**Fix priority:**

| Fix | Impact estimate | Effort | Days open |
|---|---|---|---|
| Compare soft-gate (above) | +40–60% signups from Compare | 3 hrs (4 bundled) | **20** |
| Compare: inline target-price capture on each card (anon-friendly, email-only) | +15–25% on Compare→signup vs no inline pitch | 3 hrs (shares form spec w/ Day 16 target-price modal) | 7 |
| Compare: `?from=&returnTo=` on the (still-needed) login redirect for deep-action soft-gate | +10–15% post-login completion | 30 min | 13 |

#### Step 4: Signup → Watchlist

**Current post-signup flow** (`register/page.tsx:36`): `await register(...)` → `router.push('/dashboard')`. That is the entire onboarding. The user lands on `/dashboard` with `city='Orlando'` (default), an empty search box, the "Sign up banner" suppressed (because they're now authed at `dashboard/page.tsx:60`), and no prompt to do anything.

**Time-to-first-watchlist-add for a brand-new user** (unchanged from 2026-04-27):

1. Land on `/dashboard`.
2. Identify they need to type a city, keyword, or date.
3. Hit Search.
4. Wait for results.
5. See the `EventCard` `+` button (👁️ emoji — non-obvious).
6. Click it.
7. Watchlist add fires (no target-price capture).
8. Navigate to `/watchlist` (only via navbar — no in-card "View watchlist" link).
9. See the event listed with "Tracking started — prices coming soon."

The user does not learn until step 9 that there is no target-price field. They never saw a "set your first price alert" pitch. They never received a "welcome — here's how it works" email. **The watchlist they just created cannot trigger a price-drop email because no target was set.** This is the central retention failure on the platform, and it's a single-form-field problem: the watchlist add modal does not exist; the `addToWatchlist` payload omits `targetPrice`; the schema column exists; the cron-job comparison logic exists. Every dependency for price alerts is in place except the UI.

**Fix priority:**

| Fix | Impact estimate | Effort | Days open |
|---|---|---|---|
| Target-price modal on watchlist add (the central UX hole) | +60–100% retention via first-email-fire | 8 hrs | 16 |
| Post-signup redirect → `/onboarding` (3-step flow, see §5 below) | +30–50% time-to-first-watchlist-add | 4 hrs | new this week |
| EventCard `+` button → "Track Price" labeled button | +10–20% discovery | 30 min | 16 |
| Watchlist page: "View Watchlist (X)" badge in Navbar | +20–30% return rate within session | 30 min | 16 |

#### Step 5: Watchlist → Retain

**The retention loop has never run end-to-end.** Diagnosis from the daily-audit cycle:

1. Watchlist add stores `target_price = NULL` (no UI captures it).
2. Price-tracking cron compares `currentPrice <= targetPrice` (logic at the `index.js` price-tracking section). With `target_price` null, the comparison evaluates `currentPrice <= null` → false → no email fires.
3. Drip campaign queries the `users` table (where new accounts land) but newsletter signups land in `newsletter_subscribers`. Newsletter subscribers receive zero drip emails. (Day 15 carry-over.)
4. Watchlist-add does not trigger a confirmation email or "welcome — here's what's next" sequence.

**Net effect:** every newsletter subscriber is a quiet write to a database column that nothing reads. Every watchlist add is a quiet write to a database row that nothing reads. The retention surface is structurally inert.

**Fix priority:**

| Fix | Impact estimate | Effort | Days open |
|---|---|---|---|
| Drip query: `users` → `newsletter_subscribers` (1-line) | Activates 100% of captured emails | 5 min | **15** |
| Target-price modal (above) | Activates price-drop alert fire | 8 hrs | 16 |
| Watchlist-add → "we'll watch this for you" confirmation email | +20–30% Day-1 retention | 1 hr | new this week |
| Drip Email 0 (Day 0): "welcome, here's how to set your first alert" | +30–40% activation lift | 2 hrs (template + send hook) | new this week |
| Watchlist page: "Why no alerts yet?" hint when `target_price IS NULL` | -20–30% confused-user bounce | 30 min | new this week |

### Funnel-stage drop-off summary table

| Cumulative | Where the loss happens | Single highest-leverage fix |
|---|---|---|
| Visit → Search | ~40% (homepage hero misroute) | `<HomeHeroButtons />` swap (7 min) |
| Search → Compare | ~70% (hard gate + no in-card compare CTA) | Compare soft-gate (3 hrs) |
| Compare → Signup | hard-gate masks the metric | Compare soft-gate + inline target-price capture (6 hrs total) |
| Signup → Watchlist | ~50% (no onboarding, no `targetPrice`) | Target-price modal (8 hrs) + onboarding (4 hrs) |
| Watchlist → Retain | ~80% (drip table mismatch + no `target_price`) | Drip table fix (5 min) + target-price modal (8 hrs) |

**The two highest-leverage fixes for the whole funnel remain the same as 2026-04-27:** Compare soft-gate (3 hrs) + target-price modal (8 hrs) = **11 hours** of focused work that would unblock the platform's entire conversion narrative. Both have detailed specs ready. Neither has shipped.

---

## 2. A/B Test Design

**Detailed spec → `cro-weekly-2026-05-04--abtest-spec.md`** (companion file).

This week's biggest drop-off (per §1 above) is **Search → Compare**: ~70% loss caused by the hard gate at `compare/page.tsx:87–90`. The 4/27 weekly designed the soft-gate; today's A/B test designs the *measurement framework* that goes around it, so when the soft-gate ships we capture lift cleanly.

### Test summary

```
## A/B Test: Compare Page — Hard-gate vs Soft-gate
Page: /compare
Hypothesis: If we replace the hard auth gate with a soft gate (show comparison content; gate only target-price + watchlist deep actions), then Compare-page signup conversion will increase ≥40% because anonymous users currently cannot see the value before the ask.
Control: Current — `if (!authLoading && !user) router.push('/login')` — full page redirect.
Variant: Soft-gate — render full comparison content for anon; gate only "Set price alert" and "Add to watchlist" actions behind an inline email capture.
Primary metric: anon-arrival → signup conversion rate on /compare landings
Secondary metrics: bounce rate, scroll depth, "Set alert" click rate, navbar `Compare`-link CTR (after navbar visibility flips with the variant)
Sample size: ~6,000 anon-arrivals per arm (MDE 40% relative lift on a baseline ~3% signup rate at α=0.05, β=0.8)
Duration: 14 days minimum (covers two weekly traffic cycles incl. weekend skew)
Implementation: variant gate in `compare/page.tsx` keyed off a `featureFlags.compareSoftGate` boolean (initial flag value driven by user-id mod or visitor-id mod for anon)
```

The full spec includes: hypothesis derivation, sample-size math (showing why the 14-day window is necessary), the exact code diff for the variant, the analytics-event taxonomy needed (the **first** five `dataLayer.push` events on the platform), tracker-id strategy for anonymous-only test segmentation (since the audience is by definition not logged in), the success/failure criteria, and the post-test ship plan if the variant wins.

**Why this test specifically and not one of the seven other candidates listed in the brief?**

The brief lists seven A/B-test ideas (homepage hero copy, compare page gate, signup form one-step vs two-step, watchlist CTA copy, social proof, urgency badges, etc.). They are all reasonable. But:

1. **All seven require functioning analytics first.** Day 26 of zero `dataLayer.push`. No test can be measured without an instrumented `dataLayer.push` in the success branches. The compare-page A/B test specifies the first five events — every other test reuses them.
2. **Six of the seven require shipping the underlying surface before testing.** The signup-form one-step vs two-step test cannot run without a redesigned form (signup-flow spec, this file's §3). The watchlist-CTA test cannot run without target-price modal UI (16 days unmerged). The social-proof test cannot run without subscriber-count infrastructure. **The compare-page test is the only one whose underlying ship is already specified and ready, and where the variant is materially different from the control.**
3. **The compare hard-gate is the single largest funnel loss.** Per §1, ~70% of search→compare traffic is lost there. Lifting that conversion 40% is a ~28-percentage-point absolute lift on the Compare cohort. No other test on the candidate list has that kind of unit economics.

The other six candidates are sequenced behind this one in the spec file — the suggested test calendar runs the compare-gate test in weeks 1–2, then signup-form in weeks 3–4, etc.

---

## 3. Signup Flow Optimization

**Detailed spec → `cro-weekly-2026-05-04--signup-flow.md`** (companion file).

### Current state (verified today)

`register/page.tsx` is 130 lines. The form is 3 inputs (email, password, confirm password). On submit:

1. Validate `password === confirmPassword`.
2. Validate `password.length >= 8`.
3. Call `register(email, password)` from `AuthContext`.
4. Redirect to `/dashboard`.

There is no `autoComplete`, no `name` attributes, no `?source=` URL-param capture for attribution, no `?returnTo=` for post-signup redirection back to the user's original intent, no social SSO, no progress indicator, no captcha (which is a problem in itself — the API is open to scripted signups), no preference capture during signup, no welcome email send.

### Recommendations (full design in companion file)

1. **Add `autoComplete` + `name` attributes to all three inputs.** Browser password managers and iOS password autofill will populate them, materially reducing form-completion friction. 5-minute fix; 10–15% lift on form completion in industry benchmarks. **Should ship this week regardless of any other change.**
2. **Email-only first step → password on step 2.** The brief asks "should registration be email-only first?" Answer: **yes, with a caveat.** Email-only step 1 cuts time-to-first-touch and lets us send the welcome email immediately on email submit. Step 2 collects password before the redirect. Industry-standard 15–25% lift on email capture; ~5% degradation on completed signups (some users abandon between steps 1 and 2). **Net positive on email volume; mixed on account creation. Recommended only after the drip pipeline is fixed (`users` → `newsletter_subscribers` query swap), so email-only step-1 captures still receive drip.**
3. **Capture `?source=` and `?returnTo=` URL params.** The current register link from the homepage hero (`page.tsx:83`) and the navbar (`Navbar.tsx:101–106`) carries no source attribution. Adding `?source=hero&returnTo=/dashboard` to all register links + reading both via `useSearchParams` in `register/page.tsx` is a 30-minute change. Carries over from Day 13 daily ask.
4. **Social SSO (Google + Apple).** The brief asks: should we add it? **Yes, but not first.** Social SSO lifts signup completion 30–50% on consumer platforms but requires an OAuth callback handler, JWT-issue branch in the backend, and account-merge handling for users who later try email-signup with an SSO email. ~12 hrs of backend work + ~4 hrs frontend. **High-impact but high-cost; recommend only after the target-price modal ships (8 hrs) and the compare soft-gate ships (3 hrs).**
5. **Preference capture during signup.** The brief asks: should we capture favorite teams / cities / event types during signup? **No — capture them in onboarding, not in the signup form.** Mixing identity capture (email + password) with preference capture in the same form lengthens the perceived form length, hurts completion. The right place for preferences is **after** the account exists, in onboarding step 1 (see §5). Industry benchmark: every additional field at signup costs ~5% completion.
6. **Progress indicator if the form becomes 2-step.** "Step 1 of 2: Create account → Step 2: Set your first alert" — the second step is the onboarding's first action, not a second form on the register page. Frames the registration as a means to a useful end, not the end itself.
7. **Post-signup redirect: `/onboarding`, not `/dashboard`.** Currently `register/page.tsx:36` lands the user on an empty Orlando-default dashboard. The right destination is `/onboarding` (see §5), which captures preferences and pushes the user to set their first price alert in <60 seconds.

### Redesigned signup-flow spec (summary; full wireframe descriptions in companion file)

**Step 1 of 2: Email only.**

```
┌──────────────────────────────────────┐
│  TicketScan logo                     │
│                                      │
│  Get price alerts on tickets         │
│  Free forever. No spam.              │
│                                      │
│  [you@example.com               ]    │
│                                      │
│  [    Continue with email     →]    │
│                                      │
│  ─────────  or  ─────────           │
│                                      │
│  [G  Continue with Google      ]    │
│  [   Continue with Apple       ]    │
│                                      │
│  Already have an account? Log in    │
└──────────────────────────────────────┘
```

**Step 2 of 2: Password.**

```
┌──────────────────────────────────────┐
│  ● ●                                 │
│                                      │
│  Almost there!                       │
│  Create a password to secure your    │
│  account.                            │
│                                      │
│  [Password (8+ chars)           ]    │
│  [Confirm password              ]    │
│                                      │
│  [   Create account & continue →]    │
│                                      │
│  ← Back                              │
└──────────────────────────────────────┘
```

**Effort:** 6 hrs total — 2 hrs to split the form into two steps with shared state, 1 hr for `?source=`/`?returnTo=` plumbing, 1 hr for `autoComplete` and a11y polish, 30 min for analytics-event wiring (composes with the A/B test framework above), 1.5 hrs for QA across desktop/mobile/iOS-password-manager/Android-password-manager.

**Sequenced after** the target-price modal (16 days unmerged) so post-signup-redirect → `/onboarding` lands on a flow that actually delivers a useful first action.

---

## 4. Popup & Modal Strategy

**Detailed spec → `cro-weekly-2026-05-04--popup-strategy.md`** (companion file).

### Current state

**There are no popups.** The only modal-class element on the site is the `EventCard` register-intercept overlay (`EventCard.tsx:80–104`), which fires on watchlist-add by anonymous users. It is a register-required intercept, not an email-capture popup. The 4/27 weekly and the 5/04 daily both formalize this gap; today's weekly synthesizes the popup strategy across four distinct trigger contexts.

### Strategy: four popup types, all reusing `<NewsletterSignup variant="inline">`

Each popup mounts as a single component in `app/layout.tsx` (or in route-specific layouts where needed) and is conditionally rendered based on a small triggers state machine. None requires a backend change — they all wrap the existing `/api/newsletter/subscribe` endpoint via the inline form variant.

#### 4.1 Exit-Intent Newsletter Popup

Spec was finalized in `cro-daily-2026-05-04.md`. Component: `NewsletterPopup.tsx`. Trigger: desktop mouse-toward-tab-close (`clientY <= 20` with upward velocity); mobile 30s timer. Frequency: once per session. Suppressed paths: `/login`, `/register`, `/dashboard`, `/watchlist`, and any URL with `?utm_source=email`. Effort: 3 hrs. Composes with every broken capture funnel (blog→newsletter, WC→capture, venue→signup, footer regression).

**Expected conversion:** 2–5% of would-bounce traffic → email. Industry-standard exit-intent baseline.

#### 4.2 Price-Alert Inline Modal (compare page)

Triggered when an anonymous user clicks "Notify me when this drops" on a comparison card (after the compare soft-gate ships). Inline modal anchored to the comparison card, not full-screen. Captures email + target price in one step.

```
┌────────────────────────────────────────┐
│  Notify me when this drops             │
│                                        │
│  Lakers vs Celtics — Sat May 30        │
│  Currently $89 (Ticketmaster) ✓        │
│                                        │
│  Notify me when prices drop to:        │
│  [$ ____ ]  (currently $89)            │
│                                        │
│  Email: [you@example.com         ]     │
│                                        │
│  [    Set my alert     →]             │
│                                        │
│  ✓ Free  ✓ No spam  ✓ Cancel anytime  │
└────────────────────────────────────────┘
```

**Trigger:** click "Notify me when this drops" on any comparison card (only renders for anon; for auth users, opens the in-watchlist target-price modal directly).

**Frequency cap:** none — the user is acting; the modal is the natural form for the action.

**Mobile adaptation:** full-screen sheet that slides up from the bottom (iOS-pattern), with a Cancel button in the top-right.

**Expected conversion:** 25–40% of clicks (high — the user just demonstrated intent by clicking a "notify me" button; the modal is the form for the intent, not an interruption).

**Effort:** 2 hrs (composes with the §3 inline form and the target-price modal spec — share validation logic and the `addToWatchlist` API call signature once `targetPrice` is added to the payload). **Sequenced after** the compare soft-gate ships, since the modal's natural trigger is on the soft-gate's per-card "Notify me" CTA.

#### 4.3 Return-Visitor Welcome-Back Toast (low-priority)

For users with a `localStorage.lastVisitedAt` older than 7 days, show a non-blocking toast on next visit: "Welcome back! Prices changed on X events you tracked." Requires the price-history infrastructure to be useful (which exists). Composes with the watchlist surface.

**Trigger:** any visit where `localStorage.lastVisitedAt` is >7 days old AND the user is logged in AND has at least 1 watchlist item.

**Frequency cap:** once per `localStorage.lastVisitedAt` reset.

**Mobile adaptation:** same toast component, bottom-anchored on mobile.

**Expected conversion:** click-through to `/watchlist`: 30–50% (high — this is a logged-in returning user with prior watchlist activity).

**Effort:** 4 hrs (requires backend support for "events with price changes since {timestamp}" — `index.js` price-history query helper).

**Why low-priority:** the prerequisite is a functioning watchlist with target-price-driven alerts. Until the target-price modal ships, this toast has nothing meaningful to say.

#### 4.4 Compare-Result-Reached Anonymous Soft-Capture (medium-priority)

For anonymous users on `/compare` who scroll past the third comparison card (after the soft-gate ships), show a sticky bottom band: "Set price alerts on the events you're comparing — free." Single-line capture form.

**Trigger:** anon user, `/compare` page, scrollY past `#compare-result-card-3`.

**Frequency cap:** once per `/compare` session.

**Mobile adaptation:** sticky band collapses to a smaller "Get alerts →" button when keyboard is open (don't fight a native keyboard for screen real-estate).

**Expected conversion:** 8–15% of scroll-engaged anon traffic.

**Effort:** 1 hr.

### Popup-strategy sequencing recommendation

| Popup | When to ship | Effort | Composes with |
|---|---|---|---|
| Exit-intent (#4.1) | This week (Day 0 spec already detailed in 2026-05-04 daily) | 3 hrs | Every broken capture funnel |
| Compare soft-capture band (#4.4) | After compare soft-gate (Week 2) | 1 hr | Soft-gate landing |
| Price-alert inline modal (#4.2) | After compare soft-gate + target-price modal (Week 3) | 2 hrs | Soft-gate + target-price unlock |
| Return-visitor toast (#4.3) | After target-price modal ships (Week 4+) | 4 hrs | Functioning retention loop |

**Ship-order rationale:** start with the popup that has zero dependencies (exit-intent — it just wraps existing form), then compose with the soft-gate (small band), then with the price-alert modal (target-price), then with the retention loop (welcome-back toast). Each popup unlocks an audience the next one couldn't see.

**Total popup-strategy implementation: 10 hrs over 4 weeks.** Each ship slot is independent — partial completion has partial value.

---

## 5. Onboarding Flow Design

**Detailed spec → `cro-weekly-2026-05-04--onboarding-flow.md`** (companion file).

### Current state

There is no onboarding. `register/page.tsx:36` redirects new users to `/dashboard`, which renders an empty Orlando-default search box. The "Sign up banner" is suppressed for authed users (`dashboard/page.tsx:60`), so the post-signup dashboard is effectively visually identical to the unauthed dashboard except the banner is gone — a *negative* signal of progress, not a positive one.

The user-favorites schema (`user_favorites` table — types `team`, `artist`, `venue`) exists. The favorites page (`/favorites`) exists. **Nothing in the signup flow asks the user about favorites.** The schema is unused.

### Design principles

1. **Max 4 steps; skippable but not encouraged.** Industry standard: each onboarding step costs ~10–15% completion. 4 steps × 12% = ~40% of new users finish onboarding; lower-step counts complete higher but capture less. The 4-step design optimizes for completion-weighted preference data.
2. **Each step delivers visible value.** Step 1 personalizes the dashboard; step 2 personalizes search; step 3 sets the first alert (the platform's actual product); step 4 is celebratory + sets retention.
3. **Time-to-value < 60s from signup → first alert set.** Measured from `/register` submit to the alert-set confirmation modal.
4. **Mobile-first.** Each step is a full-screen overlay on mobile, a centered card on desktop.
5. **Progress indicator visible throughout.** "Step X of 4" + a 4-dot progress bar.

### Flow

#### Step 1: "What events are you interested in?"

```
┌──────────────────────────────────────┐
│  ●  ○  ○  ○                          │
│                                      │
│  Welcome! What kind of events do     │
│  you follow? (pick all that apply)   │
│                                      │
│  ☐ Sports         ☐ Concerts         │
│  ☐ Theater        ☐ Festivals        │
│  ☐ Comedy         ☐ World Cup 2026   │
│                                      │
│  [    Continue     →]                │
│                                      │
│  Skip for now                        │
└──────────────────────────────────────┘
```

**Schema write:** `INSERT INTO user_favorites (user_id, favorite_type, favorite_name)` — for `event_type` favorites, repurpose the existing `favorite_type` column or add a new `favorite_type='event_category'`. Recommend the latter, with values `sports`, `concerts`, `theater`, `festivals`, `comedy`, `world_cup_2026`.

#### Step 2: "Where are you based?"

```
┌──────────────────────────────────────┐
│  ●  ●  ○  ○                          │
│                                      │
│  Pick your city                      │
│  We'll personalize results.          │
│                                      │
│  [Search for your city          ]    │
│                                      │
│  Popular: New York · LA · Chicago    │
│  Boston · Miami · Seattle · Dallas   │
│                                      │
│  [    Continue     →]                │
│                                      │
│  Skip for now                        │
└──────────────────────────────────────┘
```

**Schema write:** `INSERT INTO user_favorites (user_id, favorite_type='city', favorite_name=<city>)`. Single row.

**Outcome:** the next dashboard render uses this city as the default `useState('Orlando')` replacement (read from `user_favorites` on mount). Day 13 carry-over (dashboard URL-state + city default) is partially solved by this step.

#### Step 3: "Search for your first event and set a price alert"

```
┌──────────────────────────────────────┐
│  ●  ●  ●  ○                          │
│                                      │
│  Search your first event             │
│  We'll watch the price for you.      │
│                                      │
│  [Lakers, Taylor Swift, etc...  ]    │
│                                      │
│  [    Search     →]                  │
│                                      │
│  Skip for now                        │
└──────────────────────────────────────┘
```

On submit, run the existing `/api/events/search` against the user's city (from step 2) + the keyword. Show the top 3 results inline. Each result has a "Set price alert" CTA that opens the **target-price modal** (the 16-day-unmerged P0). Setting the alert advances to step 4.

**This is the step that requires the target-price modal.** Without it, step 3 is degraded to "Add to watchlist (we'll track but can't alert)" — still useful but less compelling. Onboarding ships **after** target-price modal for full effect; can ship before in degraded form.

#### Step 4: "You're set!"

```
┌──────────────────────────────────────┐
│  ●  ●  ●  ●                          │
│                                      │
│  ✓ You're set!                       │
│                                      │
│  We'll email you the moment Lakers   │
│  vs Celtics drops below $89.         │
│                                      │
│  [    Go to my watchlist  →]         │
│                                      │
│  Want more? Browse trending events.  │
└──────────────────────────────────────┘
```

Triggers the welcome email (drip Email 0, see §1 fix priority — new this week). Lands on `/watchlist`, not `/dashboard`. The watchlist page is now non-empty; the user has a thing to look at.

### Onboarding instrumentation

Each step pushes `dataLayer.push({event: 'onboarding_step_completed', step: N, action: 'continue'|'skip'})`. Total: 8 new analytics events (4 steps × 2 actions). Composes with the A/B test analytics taxonomy in §2.

### Effort

- Wireframe + UI build: 6 hrs.
- Backend: 2 hrs (new `user_favorites` row writes + dashboard read-on-mount).
- Drip Email 0 template + send hook: 2 hrs.
- QA: 2 hrs.
- **Total: 12 hrs.** Sequenced after target-price modal (Week 3+).

### Why not a guided tour overlay (the popular AI-tutor pattern)?

Guided tour overlays ("click here", "now click here") are good for surfacing *features* in established products. They are bad for *new products without a habit yet*. The onboarding designed above is task-oriented: by the end, the user has done the platform's primary action (set a price alert) and received the platform's primary value (an email queued for that alert). That is more retention-effective than a tour of features the user has no reason to use yet.

---

## 6. Cumulative ship-order recommendation

The order below is by ROI per hour, accounting for blocking dependencies:

| # | Item | Effort | Days open | Dependencies | Unlocks |
|---|---|---|---|---|---|
| 1 | Footer `<NewsletterSignup variant="footer">` re-mount | 5 min | 10 | none | site-wide email capture |
| 2 | `dataLayer.push` in NewsletterSignup success branch | 3 min | 26 | none | first measurable conversion event |
| 3 | Drip query: `users` → `newsletter_subscribers` (1-line) | 5 min | 15 | #2 (for fire confirmation) | every captured email gets drip |
| 4 | Homepage P0 cluster (HeroButtons swap + register `?source=`/`?returnTo=` + remove savings claim + remove trending-deals + remove testimonials + remove anchor) | 24 min | 13 | none | homepage hero misroute fixed; legal exposure removed |
| 5 | Source-string normalization in NewsletterSignup | 15 min | 1 | #1, #2 | clean attribution |
| 6 | Blog `<Link href="/">` → form swaps × 2 (`blog/page.tsx:163–175`, `blog/[slug]/page.tsx:220–224`) | 25 min | 8 | #3 | blog→newsletter funnel |
| 7 | WC banner countdown (`<WorldCupCountdown />`) | 20 min | 7 (P0 today) | none | T-38 urgency activator |
| 8 | Exit-intent newsletter popup (§4.1) | 3 hrs | 0 | #1, #2 | site-wide bounce-recovery |
| 9 | Above-fold capture band on homepage | 15 min | 13 | #1 | first-fold capture |
| 10 | Final-CTA two-tier on homepage | 15 min | 13 | none | newsletter alternative to register |
| 11 | WC newsletter capture (main + stadium sidebar) | 45 min | 9 | #3 | T-38 fixed-deadline surface |
| 12 | Compare hard-gate → soft-gate (3 hrs) + content-parity ship | 4 hrs | **20** | none | unlocks ~70% of search→compare path |
| 13 | Target-price modal | 8 hrs | 16 | none | unlocks retention loop end-to-end |
| 14 | Compare A/B test wiring + analytics events (§2) | 2 hrs | 0 | #2, #12 | first measurable A/B test |
| 15 | Compare inline price-alert modal (§4.2) | 2 hrs | 0 | #12, #13 | high-intent capture |
| 16 | Compare scroll-soft-capture band (§4.4) | 1 hr | 0 | #12 | bonus capture |
| 17 | Signup-flow rewrite (autoComplete + step split + source/returnTo) (§3) | 6 hrs | 0 | #2, #3 | signup completion lift |
| 18 | Onboarding flow (§5) | 12 hrs | 0 | #13 | activation lift; first-alert TTV <60s |
| 19 | Welcome-back return-visitor toast (§4.3) | 4 hrs | 0 | #13, #18 | retention flywheel |
| 20 | Drip Email 0 (welcome + first-alert nudge) | 2 hrs | 0 | #18 | activation drip |

**Cumulative dev-hour cost:**

- **Items 1–7 = 87 minutes** (~1.5 hrs). One focused morning. Ships site-wide email capture, the first measurable conversion event, the homepage cleanup cluster, and WC urgency. **The single most leveraged 1.5 hrs on the backlog.**
- **Items 1–11 = ~3 hrs.** Half a focused afternoon. Adds the homepage above-fold capture band, the final-CTA tier, and the WC fixed-deadline surface.
- **Items 1–14 = ~13 hrs.** ~2 dev days. Adds the exit-intent popup, compare soft-gate, target-price modal, and first-ever A/B test.
- **Items 1–20 = ~37 hrs.** ~1 dev week. Ships the entire CRO program: capture surfaces site-wide, retention loop end-to-end, compare-page measurement, signup-flow rewrite, onboarding flow, return-visitor cohort.

**Single-week target this week:** items 1–7 (1.5 hrs). Items 1–7 are pure cleanup + 1-line query swaps. They unblock every downstream item and impose zero new product risk.

---

## 7. Cross-team handoffs

**To Content Agent (Agent 1).** Three copy items for this week:

1. **Onboarding step copy** (§5) — 4 step titles + 4 subtitles + 4 CTA labels. Each step needs one A/B variant for testing later (e.g. "What kind of events do you follow?" vs "What gets you off the couch?").
2. **Welcome-back toast copy** (§4.3) — short variants like "Welcome back! Prices changed on 3 events" vs "We've been watching for you."
3. **Drip Email 0 copy** ("welcome, here's how to set your first alert") — needs a 6-paragraph email template + subject-line A/B (e.g. "Set your first ticket alert in 30 seconds" vs "Welcome to TicketScan — here's how to start saving").
4. **Compare-page inline price-alert copy** (§4.2) — the modal headline "Notify me when this drops" + body + button. A/B candidate copy: "Get alerts" vs "Watch this price" vs "Track this drop."
5. **Carry-over from 2026-04-27:** homepage stats-bar replacement copy ("Events tracked", "Sites compared", "Free forever"); homepage testimonial replacement (3 platform signals); homepage hero subhead rewrite; WC countdown copy variants.

**To SEO Agent (Agent 4).** Two items:

1. **Compare soft-gate JSON-LD claim restoration.** When the soft-gate ships, the `WebApplication` JSON-LD becomes truthful again. Audit cached SERP snippets for `/compare` for the next 14 days post-ship — Google's snippet refresh cycle should naturally remove the redirect-only behavior from the cache. If the snippet doesn't refresh by Day 14 post-ship, request manual recrawl via Search Console.
2. **Cumulative legal/regulatory cache hardening.** Per the 2026-04-27 weekly + the 2026-05-04 daily, the homepage testimonials + savings claim have been indexed for 14+ days post-internal-awareness. When the cleanup ships, monitor SERP snippet cache, Bing/DDG cache, and Perplexity/Brave Search snapshots for at least 30 days. Document any persistent stale snippets for compliance record.

**To Email Agent (Agent 2).** Three items:

1. **Drip Email 0** (welcome) — new template needed; spec is in §5 (lands the new user on a useful first action). Should fire on `register/page.tsx:36` post-completion, before the redirect to `/onboarding`.
2. **Compare-source cohort** — once the compare soft-gate ships and `source="compare-soft-gate"` enters `newsletter_subscribers`, the cohort is **demonstration-of-intent** traffic (highest engagement on the platform). Drip first-email variant should lead with a comparison-specific framing: "you compared X vs Y; here's how we'll alert you when it drops."
3. **Exit-intent popup cohort** — `source="exit-intent-popup"` cohort is bounce-recovered traffic; expect lower engagement than blog-sourced subs but higher volume. Drip first-email variant: "you almost left; here's the 30-second version of what we do."

**To Ads Agent (Agent 5).** Three items:

1. **Homepage as ad-traffic LP remains compromised** until items 1–7 ship. 2026-04-27 recommendation stands: redirect ad spend to `/blog/[slug]` posts as the most truthful acquisition surface. Do not run paid traffic to `/` or `/compare` (hard gate) until soft-gate + cleanup ship.
2. **Per-blog-post ad CTAs.** Once blog `<Link href="/">` swaps land (item 6), every blog post's CTA captures email at the source. Materially changes the unit economics on `/blog/[slug]` paid traffic — the 1–3% blog→email conversion compounds with the eventual 5–10% email→account conversion typical for blog-sourced lists.
3. **WC fixed-deadline ads at T-38 days.** Once the WC countdown ships (item 7), the homepage WC banner becomes a viable LP for paid WC traffic. Until then, paid WC traffic lands on a static date label that does not communicate urgency. Recommend pausing paid WC traffic to `/` and routing only to `/world-cup-2026/[stadium]` pages until the homepage WC surface ships.

**To Analytics Agent (Agent 7).** Two items:

1. **First five `dataLayer.push` events on the platform** — the A/B-test framework in §2 specifies them. Briefly: `newsletter_subscribed`, `newsletter_popup_shown`, `compare_view`, `compare_alert_set`, `signup_completed`. These are the minimum viable conversion-event taxonomy. Should ship as soon as items 1–2 land (newsletter + dataLayer push). Day 26 of zero `dataLayer.push`.
2. **A/B-test segmentation for anonymous traffic.** The compare soft-gate test segments anon users (per §2). This requires a stable visitor-id (cookie or `localStorage` UUID) to be the deterministic test-arm assignment key. Spec the visitor-id implementation alongside the first dataLayer push. ~30 min of work.

**To Growth Agent (Agent 8).** Three items:

1. **Onboarding flow design (§5)** — full spec is in `cro-weekly-2026-05-04--onboarding-flow.md`. Ready for handoff once the target-price modal ships.
2. **Welcome-back return-visitor toast (§4.3)** — design is in `cro-weekly-2026-05-04--popup-strategy.md`. Composes with the watchlist surface; ready to ship once the watchlist becomes useful (i.e., post target-price modal).
3. **Activation funnel definition.** Recommend defining "activation" as **first price alert set** (not first watchlist add, not first login, not first search). The target-price modal makes this measurable; the onboarding flow makes it achievable in <60s from signup.

---

## 8. Recommendations summary

**Ship-this-week (smallest first, highest ROI):**

- Footer.tsx `<NewsletterSignup variant="footer">` mount — **5 min** — Day 10 regression, site-wide capture restored.
- `dataLayer.push` on newsletter success — **3 min** — Day 26, first measurable conversion event.
- Drip source-table fix — **5 min** — Day 15, unblocks every captured email.
- Homepage P0 cluster (6 items) — **24 min** — Day 13 cleanup; legal/regulatory exposure removed.
- Source-string normalization — **15 min** — Day 1, prevents `footer` vs `site-footer` collision.
- Blog `<Link href="/">` → form swaps × 2 — **25 min** — Day 8.
- WC banner countdown — **20 min** — Day 7, T-38 urgency activator (P0-promoted today).

**Sub-total of this-week pure-cleanup: 97 minutes (1.6 hrs).**

**Then this week if any dev capacity exists:**

- Above-fold capture band — 15 min — Day 13.
- Final-CTA two-tier on homepage — 15 min — Day 13.
- Exit-intent newsletter popup (§4.1) — 3 hrs — Day 0.
- WC newsletter capture (main + stadium sidebar) — 45 min — Day 9.

**Sub-total this-week if 5 hrs available: ~5 hrs total. One half-day, one focused afternoon.**

**Sequenced for week 2+:**

- Compare hard-gate → soft-gate — 4 hrs — Day 20.
- Target-price modal — 8 hrs — Day 16.
- Compare A/B test wiring (§2) — 2 hrs — composes with the soft-gate ship.
- Signup-flow rewrite (§3) — 6 hrs.
- Onboarding flow (§5) — 12 hrs.

**Persistent ask (Day 27 of zero P0 frontend merges):** A 4–6 hr CRO ship window weekly. Today's audit underscores a pattern that's now four weeks deep: **content data has been shipping consistently** (Wrigley Field venue page merged today; the 24th venue page) **while the homepage P0 cluster — 24 minutes of pure deletions and one component swap — has not.** This is a calendar-allocation issue, not a complexity issue. The homepage is the highest-traffic surface on the site; the cleanup cluster removes legal-risk exposure; the same code window that authors a venue page can ship the cleanup with time to spare. **The 4/27 weekly raised this; the 5/04 daily sharpened it; this 5/04 weekly re-iterates it. Three explicit asks in 8 days.**

---

## 9. Escalation note

This is the third weekly cycle on the same finding set. The 4/20, 4/27, and 5/04 weeklies have produced a consistent 6 P0 + 4 P1 finding set on the homepage and a consistent compare/target-price/drip/popup/onboarding gap stack on the funnel. **Zero merges across the three cycles.** The audit cycle is now load-bearing on:

1. **A fixed-deadline surface** — World Cup 2026 banner at T-38 days. The static date label is the homepage's weakest above-fold element on a fixed-deadline campaign. Each day closer to kickoff materially raises the cost of inaction.
2. **A regulatory-exposure surface** — homepage testimonials (FTC §5 + Endorsement Guides) + homepage savings claim now indexed for 14+ days post-internal-awareness. Knowledge of the issue is now a documented audit-trail fact; every additional day deepens the knowledge-and-failure-to-act gap if a state AG or FTC inquiry ever subpoenas server logs or audit records.
3. **A retention-loop surface** — the watchlist add → target_price NULL → no-alert-fire pipeline means **every watchlist row written in the last 16 days is structurally inert.** Day 16. Every watchlist add is a quiet write to a column that nothing reads.

Recommended single 1-hour ship window between now and Tuesday morning, in this order:

1. `<HomeHeroButtons />` swap (7 min) — regression fix, 63 days stale.
2. Register `?source=`/`?returnTo=` (3 min) — attribution unlock.
3. Remove `$127 Avg. Savings` claim (5 min) — legal-risk removal.
4. Remove trending-deals section (2 min) — dead-click cleanup.
5. Remove testimonials section (2 min) — Endorsement Guides risk removal.
6. Remove "See How It Works" anchor (5 min) — declutter.
7. WC banner countdown (20 min) — T-38 urgency activator.
8. Newsletter `dataLayer.push` (3 min) — first conversion event ever.
9. Footer NewsletterSignup mount (5 min) — Day 10 regression.
10. Drip source-table fix (5 min) — Day 15 unblock.

**Total: 57 minutes.** Projected impact: legal/regulatory exposure removed, regression bug fixed, attribution unlocked, urgency activated on the highest-deadline surface, first measurable conversion event in platform history, site-wide email capture recovered, drip pipeline activated.

If 3 hrs: add **above-fold capture band** (15) + **final-CTA two-tier** (15) + **blog `<Link>` swaps × 2** (25) + **source-string normalization** (15) = ~70 min more for capture surface online + blog leak closed.

If 6 hrs / 1 dev day: add the **exit-intent newsletter popup** (3 hrs). Items 1–11 = ~6 hrs / 1 dev day = the first day in 27 days that the conversion infrastructure visibly improves.

If 13 hrs / ~2 dev days: add the **compare soft-gate** (4 hrs) + **target-price modal** (8 hrs). The two items unblock the entire conversion and retention narrative. Day 1 of items 12–13 shipping is the first day the platform has a measurable retention loop.

**28th consecutive day with zero frontend P0 merges as of weekly close.**
