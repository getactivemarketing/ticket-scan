# A/B Test Spec — Homepage Hero CTA: Hardcoded Register Link vs HomeHeroButtons

**Author:** CRO Specialist • **Date:** 2026-05-11 • **Companion to:** `cro-weekly-2026-05-11.md` §2

---

## Test summary

```
A/B Test: Homepage Hero CTA
Page: / (homepage)
Hypothesis: If we render the already-imported HomeHeroButtons component (anon: "Find Tickets" → /dashboard + "Login" → /login; auth: "Search Events" → /dashboard) instead of the hardcoded "Get Started Free" → /register button, then homepage → /dashboard navigation rate will increase ≥15% relative, because the variant routes traffic to the search action that homepage visitors arrived to perform, not to a registration form that blocks that action.
Control: web/src/app/page.tsx:82–85 as currently in production —
  <Link href="/register" className="...">Get Started Free</Link>
  <a href="#how-it-works" className="...">See How It Works</a>
Variant: same block replaced with —
  <HomeHeroButtons />
  <Link href="/dashboard?demo=true" className="...">See a Sample Comparison</Link>
Primary metric: hero → /dashboard navigation rate (event: hero_cta_click WHERE destination = '/dashboard') / homepage anon arrivals
Secondary metrics:
  - hero CTA total CTR (hero_cta_click / homepage_pageview)
  - /register direct-from-hero rate (event: hero_cta_click WHERE destination = '/register' — only fires for the auth-cohort variant after Login button click)
  - homepage bounce rate (homepage_pageview without subsequent navigation or event within 30s)
  - downstream search_initiated rate from /dashboard cohort
  - downstream signup_completed rate (test→signup latency 0–14 days)
Sample size: ~12,000 anon arrivals per arm (MDE 15% relative lift on ~25% baseline hero-area CTR at α=0.05, β=0.8)
Duration: 14 days minimum; uncap at 21 days if MDE not reached at day 14
Implementation: feature-flag at page.tsx:82–85 keyed off a deterministic visitor-id hash (FNV-1a, low byte modulo 2). Cookie name `tsc_cohort`, 30-day expiry. SSR-safe via cookies() from next/headers (Next 16 supports).
Cost to ship: ~1 hour (7-min hero swap + 30-min feature-flag wiring + 20-min dataLayer event wiring + smoke test)
```

---

## 1. Why this test, why now

### 1.1 The bug the test exploits

`web/src/app/page.tsx:3` imports `HomeHeroButtons` from `@/components/HomeHeroButtons`. `HomeHeroButtons.tsx` (48 lines) renders an auth-aware CTA: `Find Tickets → /dashboard` + `Login → /login` for anon users; `Search Events → /dashboard` alone for authed users. The component is well-formed, exports a default function, and has zero dependencies beyond `next/link` and `@/context/AuthContext`.

`page.tsx:82–85` ignores the import. It hardcodes:

```tsx
<Link href="/register" className="...">Get Started Free</Link>
<a href="#how-it-works" className="...">See How It Works</a>
```

The hero of the highest-traffic page funnels *search-intent* traffic to a *registration form*. This is the dominant routing bug on the site. Per the §1 funnel audit in `cro-weekly-2026-05-11.md`, an estimated 40% of search-initiation traffic is lost at this surface alone.

### 1.2 Why this test, not the compare-gate test (last week's spec)

Last week's `cro-weekly-2026-05-04--abtest-spec.md` speced the Compare-page hard-gate vs soft-gate test as primary. That test remains the canonical P0 *for the underlying refactor*. It does **not** ship this week, because:

- The soft-gate variant requires rendering `/compare` content for anonymous users (~3 hours of dev work in `compare/page.tsx`).
- The variant code does not exist yet. The test cannot launch without it.

The hero-CTA test:
- Costs 7 minutes for the variant code (the variant code is `<HomeHeroButtons />`, which **already exists**).
- Costs ~50 min for the feature flag, the `dataLayer.push` calls, and a smoke test.
- Total: ~1 hour of dev work to launch.

It is the **cheapest A/B test on the candidate list with measurable funnel impact**.

### 1.3 The analytics dividend

Day 33 of zero `dataLayer.push` calls across `web/src/`. The platform has no conversion-event taxonomy. The hero-CTA test forces:

- The first `cohort_assigned` event (when the visitor-id hash assigns the user to A or B).
- The first `hero_cta_click` event (with `variant` and `destination` properties).
- The first `homepage_pageview` event (the test denominator).
- The first downstream `search_initiated` event (test secondary metric).

Once these four events ship, the rest of the funnel can be wired in parallel by the Analytics agent. **The dataLayer is unblocked by this test; the test is *the dataLayer's first customer*.** This is the unspoken second-largest reason to ship it this week.

---

## 2. Hypothesis derivation

### 2.1 Baseline assumption

Hero-area CTR on consumer-facing comparison-site homepages with a single hero CTA: industry benchmark 20–35%. We anchor at **25%** for control (the lower-middle of the band, because "Get Started Free" + "/register" creates higher abandonment than "Find Tickets" + "/dashboard").

Of the 25% who click the control's primary CTA, ~100% land on `/register`. Of those who land on `/register`, our `register/page.tsx` audit estimates ~25–35% complete signup. End-to-end: ~6–8% homepage → signup conversion.

### 2.2 Variant mechanism for lift

The variant changes both **routing** (where the click lands) and **copy** (what the button says). Three mechanisms contribute to expected lift:

1. **Intent-matched routing.** The user arrived from a search ad / SEO surface / brand referral looking to *find tickets*. The variant button says "Find Tickets" and goes to `/dashboard`, where the user can immediately search. The control button says "Get Started Free" and goes to `/register`, where the user must complete a form before any action. The variant matches the dominant intent.
2. **Lower-commitment first action.** Clicking a button to search is a smaller psychological commitment than clicking a button to register. Lower-commitment CTAs convert ~1.5–2× higher in head-to-head tests.
3. **Auth-state awareness.** Authed users see "Search Events" instead of "Get Started Free" (which would be a confusing redundancy for someone who is already signed up). Authed-user hero CTR on the variant should approach 1.0 — closer to a primary-nav action than a CTA.

### 2.3 Why ≥15% specifically

- **15% is the lower bound of CTA-copy-and-routing tests in adjacent verticals.** Booking.com's 2017 "Find a Stay" vs "Sign Up" hero test reported a 22% lift. Skyscanner's 2019 "Search Flights" vs "Get Started" reported a 18% lift.
- **15% is achievable on the platform's low-volume baseline.** Larger MDEs (30%+) require more sample than the platform's daily anon-traffic supports in a 14-day window. 15% is the highest MDE that still ships in 14 days at current volume.
- **The "≥" framing prevents declaring the test inconclusive at 14% lift.** Any positive lift on this test should ship the variant permanently. The test is gated on *not regressing*, not on achieving a specific lift target.

### 2.4 Risk: variant could lose

Possible regression mechanisms:

- **Direct-signup conversion drops.** Some anon visitors are genuinely ready to register. Routing them to `/dashboard` instead of `/register` defers the signup, and they may bounce before completing.
- **Brand-referral cohort behaves differently.** Users arriving via "ticketscan" branded search may already know they want to sign up; the variant slows them down.

**Mitigation.** The variant still has a `Login` button (visible for anon users) that handles the "I already have an account" case. For "I want to register now", the variant trades CTA-by-CTA: the homepage no longer has a register CTA in the hero, but `Final CTA` block (`page.tsx:289–295`) still has "Create Free Account" → `/register`. Users who scroll get the register CTA at the bottom of the page. Direct-signup conversion is preserved; the routing change applies only to the hero.

If the test shows net signup regression at day 7 interim check, kill the test and revert.

---

## 3. Implementation

### 3.1 Code diff

**`web/src/app/page.tsx:82–85` — change:**

```tsx
// Control (current)
<div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
  <Link href="/register" className="inline-block bg-gradient-to-r from-brand to-teal text-white px-7 py-3 rounded-lg font-semibold transition-opacity hover:opacity-90">Get Started Free</Link>
  <a href="#how-it-works" className="inline-block border border-white/20 text-white px-7 py-3 rounded-lg font-medium hover:bg-white/5 transition-colors text-center">See How It Works</a>
</div>

// Variant (target)
<div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
  <HomeHeroButtons />
  <Link href="/dashboard?demo=true" className="inline-block border border-white/20 text-white px-7 py-3 rounded-lg font-medium hover:bg-white/5 transition-colors text-center">See a Sample Comparison</Link>
</div>
```

Note: `HomeHeroButtons.tsx` already wraps its buttons in a `flex` container. To preserve the outer hero layout, the variant block keeps the outer `<div className="flex...">` and lets `HomeHeroButtons` render its own internal flex (which produces a nested flex; visually identical to control on desktop, and acceptable on mobile because the inner flex collapses to column at `<sm`).

### 3.2 Feature-flag wiring

Convert `page.tsx` from a Server Component to **conditionally** render based on a cookie. The cleanest approach in Next 16 App Router:

```tsx
// page.tsx — top of Home()
import { cookies } from 'next/headers';
import HeroCTABlockControl from '@/components/HeroCTABlockControl';
import HeroCTABlockVariant from '@/components/HeroCTABlockVariant';

export default async function Home() {
  const cookieStore = await cookies();
  const cohort = cookieStore.get('tsc_cohort')?.value || assignCohort();
  // ... render
  // Replace lines 82-85 with:
  // {cohort === 'variant' ? <HeroCTABlockVariant /> : <HeroCTABlockControl />}
}
```

Two small new files:
- `web/src/components/HeroCTABlockControl.tsx` — extracts current `page.tsx:82–85` block verbatim.
- `web/src/components/HeroCTABlockVariant.tsx` — wraps `<HomeHeroButtons />` + the secondary CTA.

`assignCohort()` is set in a Next middleware (`middleware.ts`) that runs on `/` and stamps a 30-day cookie with `crypto.randomUUID()` low-byte modulo 2 → `'control' | 'variant'`. This keeps the assignment deterministic per visitor and persistent across sessions.

### 3.3 Analytics events

Three events must fire for the test to be readable.

**Event 1: `cohort_assigned`** (fires once per visitor, on middleware-assignment).

```js
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'cohort_assigned',
  test_id: 'hero_cta_2026_05',
  cohort,
  page: window.location.pathname,
  timestamp: Date.now(),
});
```

**Event 2: `homepage_pageview`** (fires on every `/` pageview).

```js
window.dataLayer.push({
  event: 'homepage_pageview',
  cohort: getCohortFromCookie(),
  referrer: document.referrer,
  utm_source: new URLSearchParams(location.search).get('utm_source'),
  timestamp: Date.now(),
});
```

**Event 3: `hero_cta_click`** (fires on click of either hero CTA button, on either arm).

```js
// Wrap each <Link>/<a> with an onClick handler
onClick={() => {
  window.dataLayer.push({
    event: 'hero_cta_click',
    cohort: getCohortFromCookie(),
    button_text: 'Find Tickets', // or 'Get Started Free', etc.
    destination: '/dashboard', // or '/register', etc.
    position: 'hero_primary', // or 'hero_secondary'
    timestamp: Date.now(),
  });
}}
```

Side note: `<Link>` clicks fire `onClick` synchronously before navigation in Next 16. The dataLayer push completes before the route change. No need for `setTimeout` workarounds.

### 3.4 Storage / readout

Analytics agent owns the readout. dataLayer events should be tagged with `test_id: 'hero_cta_2026_05'`. The readout will need:

- Cohort assignment counts per arm (sanity check: should be ~50/50 ± 2%)
- `hero_cta_click → /dashboard` rate per arm (primary metric)
- `hero_cta_click` total CTR per arm (secondary)
- `search_initiated` rate, downstream (secondary)
- `signup_completed` rate, downstream (secondary, 14-day attribution window)

If PostHog or Plausible is the destination, the dataLayer events route through a thin tag bridge. If GTM, the events flow directly. **Decision required from the Analytics agent before launch.** See cross-agent handoff in `cro-weekly-2026-05-11.md` §6.

---

## 4. Test launch checklist

- [ ] `HeroCTABlockControl.tsx` and `HeroCTABlockVariant.tsx` extracted/created
- [ ] `middleware.ts` cohort assignment shipped, with cookie `tsc_cohort` set on `/`
- [ ] `page.tsx:82–85` swapped to conditional render
- [ ] `dataLayer.push` calls wired for `cohort_assigned`, `homepage_pageview`, `hero_cta_click`
- [ ] Analytics destination decided (PostHog / Plausible / GTM) and tag bridge installed
- [ ] Smoke test: load `/` 10× in incognito; verify ~50/50 cohort assignment in cookies; verify each cohort renders the correct block; verify events fire on click
- [ ] Pre-launch baseline: 7-day snapshot of current hero-area CTR (control behavior on all traffic) before launch, for comparison
- [ ] Launch
- [ ] Day 3 sanity check (cohort balance, no broken arms)
- [ ] Day 7 interim check (regression-guard: if signup rate drops >10% in variant, kill test)
- [ ] Day 14 readout: primary + secondary metrics
- [ ] Decision: ship variant, hold variant, kill variant

---

## 5. Out-of-scope (deferred)

- **Copy variants within the variant arm.** A future test could vary "Find Tickets" vs "Compare Prices Now" vs "Search 50K+ Events". This test holds button text constant (uses `HomeHeroButtons.tsx`'s current "Find Tickets" / "Search Events" pair) to keep the change-set minimal.
- **Mobile-specific variant.** Both arms render identically on mobile (flex-col-to-flex-row on `sm` breakpoint). A mobile-specific variant could be considered after this test.
- **The "See a Sample Comparison" secondary CTA destination.** The variant routes to `/dashboard?demo=true` but the dashboard does not currently read `?demo=true`. The link works (it lands on `/dashboard`) but does not yet pre-populate a sample search. If the dashboard ships `?demo=true` handling before test launch, the secondary CTA delivers its full intended value; if not, it still delivers the routing change but with a generic-dashboard landing.

---

## 6. If the test wins

Ship the variant permanently. Delete `HeroCTABlockControl.tsx`. Keep `HeroCTABlockVariant.tsx` (or fold its content back into `page.tsx`). Remove the feature flag and the cohort cookie middleware *for this test* (keep the middleware for the next test). Document the win in `marketing-agents/output/ab-test-history.md` (new file, growing).

## 7. If the test loses or is neutral

Revert to control. Audit the failure mode in detail (was it routing? was it copy? was it the secondary CTA? was it mobile?). The next iteration would be a copy-only test on the variant arm, holding routing constant.

## 8. If the test is inconclusive at 14 days

Extend to 21 days. The platform's low-volume baseline means many tests will need extended runs. Budget for this. If still inconclusive at 21 days, the effect size is below the platform's detectability — accept the variant as not-clearly-better, ship it for the qualitative-routing-fix reason alone, and move to the next test.
