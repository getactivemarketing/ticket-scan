# A/B Test Spec — Homepage Hero CTA (Week 2 of same spec)

Date: 2026-05-18 (Monday) • Companion to `cro-weekly-2026-05-18.md` §2

> **Status:** Spec body is byte-identical to `cro-weekly-2026-05-11--abtest-spec.md`. The variant code (`HomeHeroButtons.tsx`) is byte-identical. The control surface (`page.tsx:82–85`) is byte-identical. The only delta vs 5/11 is **§5 (Rollout prerequisites)** — the analytics dependency chain is now explicit, ordered, and ship-list-shaped. If the spec sounds familiar, that is because the homepage has not shipped a CRO change in 27 days.

---

## 1. Test summary

| Field | Value |
|---|---|
| Test name | Homepage Hero CTA — Hardcoded Register Link vs `<HomeHeroButtons />` |
| Page | `/` (homepage) |
| Surface | Hero block, `web/src/app/page.tsx:82–85` |
| Test type | 50/50 split, deterministic visitor-id hash, cookie-pinned for 30 days |
| Primary metric | Anonymous-arrival → `/dashboard` navigation rate from `/` |
| MDE | 15% relative lift on a ~25% baseline hero-CTA click-through |
| Sample size | ~12,000 anon homepage arrivals per arm (α=0.05, β=0.8) |
| Duration | 14 days minimum (two weekly traffic cycles, weekend coverage) |
| Decision rule | Ship variant if primary lifts ≥15% with p≤0.05 AND `/register` direct rate ≤ control + 10% absolute |

## 2. Hypothesis

**If we render the already-imported `HomeHeroButtons` component (`Find Tickets → /dashboard` for anon; `Search Events → /dashboard` for auth) instead of the hardcoded `Get Started Free → /register` button, then homepage→search initiation rate will increase ≥15% relative, because the component routes traffic to the search action users came to perform, not to a registration form blocking that action.**

The acquisition-intent on `/` is overwhelmingly *find tickets* / *compare prices*, evidenced by:

1. The `<title>` is "TicketScan - Compare Ticket Prices Across Multiple Sites" (`page.tsx:14`). Every search-paid and organic CTR is conditioned on "Compare Ticket Prices."
2. JSON-LD declares a `SearchAction` (`page.tsx:46–50`) with `target: 'https://ticketscan.io/dashboard?q=...'`. The structured data tells search engines the primary action is *search*, but the rendered hero CTA tells the user the primary action is *register*. **The site advertises one action and demands another. The variant fixes the lie.**
3. The hardcoded hero is `bg-gradient-to-r from-brand to-teal` (`page.tsx:83`) — visually the strongest CTA on the page — and routes to `/register`. Below the fold, the `HomeHeroButtons` component routes to `/dashboard`. Asymmetric force: hardcoded link wins on visual weight; component variant wins on intent-alignment.

## 3. Control vs Variant

### Control (current production)

```tsx
// page.tsx:82–85 (verbatim)
<div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
  <Link href="/register" className="inline-block bg-gradient-to-r from-brand to-teal text-white px-7 py-3 rounded-lg font-semibold transition-opacity hover:opacity-90">Get Started Free</Link>
  <a href="#how-it-works" className="inline-block border border-white/20 text-white px-7 py-3 rounded-lg font-medium hover:bg-white/5 transition-colors text-center">See How It Works</a>
</div>
```

- Primary CTA: `Get Started Free` → `/register`
- Secondary CTA: `See How It Works` → in-page anchor (`#how-it-works`)

### Variant (already exists in the codebase)

```tsx
// HomeHeroButtons.tsx:6–48 (verbatim, abridged)
export default function HomeHeroButtons() {
  const { user, loading } = useAuth();
  if (loading) { return <Loading />; }
  if (user) {
    return <Link href="/dashboard">Search Events</Link>;  // auth state
  }
  return (
    <>
      <Link href="/dashboard">Find Tickets</Link>           // primary anon
      <Link href="/login">Login</Link>                       // secondary anon
    </>
  );
}
```

Variant *also* needs a third CTA injected to preserve the value-prop scaffolding for anon users (otherwise the variant arm loses the "See How It Works" affordance):

```tsx
// Variant: add below <HomeHeroButtons /> for anon arm only
<Link href="/dashboard?demo=true">See a Sample Comparison</Link>
```

The `?demo=true` flag is a hook for a future change that pre-populates the dashboard with a synthetic Lakers-vs-Celtics comparison so anon users can see the value-prop in action without typing. **Not part of this test's primary read; it's a side-bet for the variant arm.** If `?demo=true` is not implemented, the variant ships without it and the secondary CTA degrades to `"How It Works" → /how-it-works`. Either is acceptable.

## 4. Implementation

```tsx
// page.tsx:82–85 (proposed)
<div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
  {variant === 'B' ? (
    <>
      <HomeHeroButtons />
      <Link href="/dashboard?demo=true" className="...">See a Sample Comparison</Link>
    </>
  ) : (
    <>
      <Link href="/register" className="...">Get Started Free</Link>
      <a href="#how-it-works" className="...">See How It Works</a>
    </>
  )}
</div>
```

Variant assignment:

```tsx
// page.tsx (server-side; top of Home())
import { cookies } from 'next/headers';
import { createHash } from 'crypto';

const cookieStore = cookies();
let visitorId = cookieStore.get('ts_vid')?.value;
if (!visitorId) {
  // first visit — assign and pin
  visitorId = createHash('sha256').update(crypto.randomUUID()).digest('hex').slice(0, 16);
}
const variant = parseInt(visitorId.slice(0, 2), 16) < 128 ? 'A' : 'B';
```

The cookie is set in the response (`Set-Cookie: ts_vid=...; Max-Age=2592000; SameSite=Lax; Path=/`). This pins the variant for 30 days, surviving the 14-day test window.

**Total dev time:** ~30 minutes (cookie wiring + variant fork + dataLayer push, see §5).

## 5. Rollout prerequisites (this is the only section that changed vs 5/11)

The hero-CTA test ships in 30 minutes of code. The *readout* is gated. Here is the explicit dependency chain:

| # | Prereq | Status today (2026-05-18) | Effort | Owner |
|---|---|---|---|---|
| 1 | A `dataLayer` ships *anywhere* on the site | **Day 41 of zero `dataLayer.push` across `web/src/`** | 5 min | Analytics Agent |
| 2 | An analytics provider is wired (GTM container OR PostHog SDK OR Plausible script) | **No script tag on any page** (verified by grepping `layout.tsx` and `app/`) | 30 min | Analytics Agent |
| 3 | The conversion-event taxonomy is defined: `hero_cta_click {variant, destination}`, `cohort_assigned {cohort, page}`, `search_initiated {city, keyword, source}` | **Speced 5/11; never implemented** | 30 min | Analytics Agent |
| 4 | The `ts_vid` cookie is set on first visit and propagated to the dataLayer as `cohort_assigned` | Not implemented | 15 min | CRO Agent (this file) |
| 5 | The hero CTA fires `hero_cta_click` on click for both arms | Not implemented | 10 min | CRO Agent (this file) |
| 6 | A readout dashboard exists (queries the events from step 3) | No dashboard exists | 1 hr | Analytics Agent |

**Critical insight: prereqs 1–3 are blocking on *one 3-line patch* that has been speced for 16 days.** From `NewsletterSignup.tsx:32` (inside the existing success handler):

```ts
// 3-line scout: ship anywhere first
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ event: 'newsletter_subscribe', source });
```

That single push validates the entire instrumentation stack: GTM tag fires, event lands in PostHog/whatever, the readout dashboard wires up. Then the hero-CTA test inherits a working pipeline for free. **Recommend: ship the 3-line patch this week regardless of the test.** Then the test can ship next week with a working readout pipeline. Without the patch, the test runs blind.

## 6. Risks and counter-arguments

- **Risk:** Variant routes anon users away from `/register`, lowering the registration rate. Counter: the variant secondary CTA is `Login`, and the page is full of other conversion paths (footer newsletter signup, final CTA at `page.tsx:294`, NewsletterSignup card at `page.tsx:285`). The hypothesis is that users will register *after* they search and find what they want, not before — which matches the JSON-LD declared funnel. The decision rule (§1) explicitly guards: variant only ships if `/register` direct rate is within 10% absolute of control.
- **Risk:** The `?demo=true` path doesn't exist yet. Counter: ship the test with the secondary CTA degraded to `"How It Works" → /how-it-works` (an existing route). The `?demo=true` enhancement is a parallel work item.
- **Risk:** The cookie assignment leaks to bots, inflating one arm. Counter: deterministic visitor-id hashing produces 50/50 split in expectation across any large population; bot traffic affects both arms equally. Filter bot UA in the readout, not at the assignment layer.
- **Counter-argument:** Why test at all when the compare-gate test (5/4) is more leveraged? **Because the compare-gate test depends on a soft-gate refactor that has not happened in 34 days. The hero-CTA test depends on a 7-minute swap-in. Test what you can ship.**

## 7. Decision pending after readout

If variant wins (≥15% lift, p≤0.05, register rate within guardrails):

- Ship variant to 100%, delete control branch.
- Promote `?demo=true` to its own backlog item (sample-comparison page).
- Pivot to the **compare-gate soft-gate test** as the next primary test, assuming the refactor has shipped by then.

If variant loses or no-difference:

- Default back to control.
- The dataLayer / analytics stack that shipped as a prereq is the *real* win — the next test (compare-gate or signup-form) inherits it for free.
- Run a follow-up copy test within the control arm: `Get Started Free` vs `Find Tickets Free` vs `Search 50K+ Events`. (Content Agent handoff in `cro-weekly-2026-05-18.md` §6.)

---

**Spec status:** Ready to ship. Code path is a 30-minute change. Analytics prereq is a 16-day-stale 3-line patch. Recommend: ship the 3-line patch this week, ship the test next week, read out 6/8.
