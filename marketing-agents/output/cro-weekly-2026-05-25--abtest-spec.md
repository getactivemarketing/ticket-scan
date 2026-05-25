# A/B Test Spec — Hero CTA: Direct Swap vs A/B Test (Week 3, reorganized)

Date: 2026-05-25 (Monday) • Companion to `cro-weekly-2026-05-25.md` §2 • Supersedes (does not delete) `cro-weekly-2026-05-18--abtest-spec.md`

> **Reframing:** Last week's spec proposed an A/B test for the homepage hero CTA. This week's daily (H2) proposed the same routing change as a **direct production swap** instead, with admin-API counters as the readout. This file resolves the conflict: **this week's recommendation is the direct swap, not the A/B test.** The A/B framework spec is preserved for the first test where direction is genuinely uncertain (signup-flow social-SSO ordering is the recommended candidate).

---

## 1. The conflict, named

Week 1 (2026-05-04) recommendation: **A/B test** hero CTA, control = current `/register`-hardcoded button, variant = `<HomeHeroButtons />` rendering routing to `/dashboard`.

Week 5 (2026-05-25) daily H2 recommendation: **direct production swap** of the hero CTA from `/register` to `/dashboard` (one-line change), no A/B framework, no cookie wiring.

Both recommendations target the same surface (`page.tsx:83`). Both target the same change (`/register` → `/dashboard`). They differ only on **how to ship it.**

**This week's resolution:** ship the direct swap. The A/B framework remains valuable, just not for this change.

## 2. Why direct swap beats A/B test for THIS change, at THIS week

| Factor | A/B test path | Direct swap path |
|---|---|---|
| Dev time to ship | ~30 min (cookie wiring + variant fork + dataLayer push) | **5 min** (one line of JSX) |
| Analytics prereqs | Hard gate: dataLayer, GTM/PostHog wired, cohort cookie, conversion event taxonomy. **Day 48 of zero `dataLayer.push`.** | **None.** Admin API exposes `usersToday`, `usersThisWeek`, `totalUsers`, `totalWatchlistItems` already. |
| Decision uncertainty | "Will routing to `/dashboard` lower or raise top-of-funnel conversion?" | **Low uncertainty** — Booking.com, Airbnb, Kayak, Expedia all default cold traffic to the product surface. The pattern is industry-validated. |
| Cost of being wrong | A revert (one line) | A revert (one line) |
| Time to readout | 14 days minimum (per Week 1 spec) + analytics prereq shipping | 15 days of admin-API counter comparison against the prior 15-day baseline |
| Risk of running unmeasured | High (the A/B test runs blind without dataLayer) | **None** — the direct swap *is* the production state; admin-API counters read out on it natively |
| Demonstration of shipping cadence | Zero (test infrastructure ships, not the change itself) | **High** — first frontend P0 merge in 48 days |
| Compatibility with future A/B tests | Same | Same — the A/B framework still needs to ship for the *next* test, just not blocking this change |

**The asymmetry is decisive:** the A/B test path adds friction (analytics prereqs that have been speced 16 days unshipped) without buying meaningful information (the directional answer is already known). The direct swap captures the value immediately and uses existing admin-API counters for the readout.

## 3. Direct-swap spec (this week's recommended ship)

```
File: web/src/app/page.tsx
Line: 83

Before:
<Link href="/register" className="inline-block bg-gradient-to-r from-brand to-teal text-white px-7 py-3 rounded-lg font-semibold transition-opacity hover:opacity-90">Get Started Free</Link>

After:
<Link href="/dashboard" className="inline-block bg-gradient-to-r from-brand to-teal text-white px-7 py-3 rounded-lg font-semibold transition-opacity hover:opacity-90">Find Tickets Now</Link>

Effort: 5 minutes (one href change + 3-word copy change)
Risk: Lowest possible — the registration CTA also exists at page.tsx:294 ("Create Free Account") below the fold; users who want to register still can. The site's other auth surfaces (Navbar, EventCard intercept, /compare gate) are unchanged.
```

### 3.1 Why "Find Tickets Now" specifically

Three candidates (recommend the first):

| Candidate | Length | Voice fit | Reasoning |
|---|---|---|---|
| **"Find Tickets Now"** | 17 chars | ✓ Action verb + object + urgency | Mirrors Booking.com's "Find your next stay". Imperative; matches the verb already used in `HomeHeroButtons.tsx:38` ("Find Tickets") so the codebase is internally consistent. **Recommend.** |
| "Compare Prices Now" | 18 chars | ✓ Matches the `<title>` lexically | Direct copy of the metadata title's verb. Slightly weaker imperative ("compare" implies comparison, but users want *tickets*, comparison is the means). |
| "Search 50K+ Events" | 19 chars | △ Uses unsupportable claim | The "50K+" number is part of the stats-bar exposure today's daily H3 flagged. Don't propagate the lie into the hero. **Reject.** |

### 3.2 Readout plan (no dataLayer required)

**Baseline window:** 2026-05-10 to 2026-05-24 (15 days, pre-swap).
**Post-swap window:** 15 days after merge.
**Source of truth:** `GET /api/admin/stats` with `x-admin-key: ticketscan-admin-2026`.

Metrics to compare:

| Metric | Pre-swap baseline (estimated from daily logs) | Decision rule |
|---|---|---|
| `usersThisWeek` (7-day rolling) | 4–9 (decaying — today's value 4, was 9 four days ago) | **No worse than the 7-day trailing average pre-swap.** A *floor* metric, not a ceiling. If it rises, that's gravy. |
| `totalWatchlistItems` delta per 7 days | +1 to +9 per week (today's delta vs 5/18 = +1) | **Should rise** if the swap works. The mechanism: cold traffic that previously bounced at the register form now reaches the search → dashboard surface and at least browses; some fraction will hit the EventCard `+` button and complete signup *with intent*. |
| `activeSubscribers` | Flat at 3 (15 days) | **Orthogonal.** The newsletter form is unchanged; this metric won't move from the hero change. |

**Decision criteria:**

- **Keep the swap if:** `usersThisWeek` stays within −30% of the pre-swap 7-day average AND `totalWatchlistItems` delta per 7 days rises.
- **Revert the swap if:** `usersThisWeek` drops more than −30% sustained over a 7-day window AND `totalWatchlistItems` delta does not rise.
- **Modify the swap if:** `usersThisWeek` drops modestly but `totalWatchlistItems` rises sharply — in that case, the swap is working but `/register` needs a more prominent secondary surface (e.g., a sticky "Save your alerts" banner on `/dashboard` for anon users after their first search).

**Why these criteria, not p-values:** the platform's traffic volume is too low for traditional A/B significance testing at this MDE. The admin-API counters are integer-valued at a sparse cadence (one new user per day, +1 watchlist per week). The right readout is direction-of-trend over 15 days, not a t-test on a normalized rate.

## 4. The A/B framework still needs to ship — for a different test

The A/B framework spec (cookie wiring, variant assignment, deterministic hashing, dataLayer schema) is **preserved as a backlog item for the first test where direction is genuinely uncertain.** Recommended first A/B test (Week 7 or later):

### Candidate: Signup form — Email-only first step vs Email+password together

```
Test name: Signup Form — Two-Step Email-First vs Single-Step Email+Password
Page: /register
Surface: web/src/app/register/page.tsx
Hypothesis: An email-only first step (creating a pending account, password set via magic-link on next visit) will increase signup completion ≥20% relative, because the lift from removing the password-field cognitive load on a cold visitor exceeds the loss from password set being deferred to a second visit (some fraction of which never returns).
Why this needs a test (and the hero swap didn't): The direction is genuinely uncertain. Email-only-first lifts completion by removing fields, but lowers per-completion quality (some users never set a password and never return). The net effect is not industry-canonical. Booking.com uses email-first for hotel-search, Airbnb uses email+password together, Kayak uses neither (pure search-first). Without a test, no priors.
Primary metric: register form submission rate (form_started → form_submitted)
Secondary metric: 7-day return rate (form_submitted → first /dashboard visit)
Compound metric: 7-day return rate × form submission rate (catches both effects)
MDE: 20% relative lift on primary; sample size ~3,000 form-starts per arm
Duration: 30 days minimum (low traffic volume; needs the longer window)
Implementation: requires the analytics framework to ship first (dataLayer, GTM, event taxonomy)
```

**This test is the right one to learn the A/B framework on** because (a) the direction is uncertain, (b) the compound metric requires per-cohort tracking that the admin API doesn't expose, and (c) the test runs against a form that is downstream of the hero, so the readout is decoupled from the hero-CTA change.

## 5. The minimum prereq stack the A/B framework needs

When the signup-form A/B test ships (post-hero direct-swap window):

| # | Prereq | Status today (2026-05-25) | Effort | Owner |
|---|---|---|---|---|
| 1 | A `dataLayer` ships *anywhere* on the site | **Day 48 of zero `dataLayer.push` across `web/src/`** | 5 min | Analytics Agent |
| 2 | An analytics provider is wired (GTM container OR PostHog SDK OR Plausible script) | **No script tag on any page** | 30 min | Analytics Agent |
| 3 | The conversion-event taxonomy is defined: `register_completed {source, returnTo}`, `cohort_assigned {cohort, page}`, `form_field_focused {field, form}` | **Speced 5/11; never implemented** | 30 min | Analytics Agent |
| 4 | The `ts_vid` cookie is set on first visit and propagated to the dataLayer as `cohort_assigned` | Not implemented | 15 min | CRO Agent |
| 5 | A readout dashboard exists (queries the events from step 3) | No dashboard exists | 1 hr | Analytics Agent |

**Total: ~2 hr 20 min of prereq work** before the first A/B test can ship. All five prereqs ship in one sprint. The current rate of zero P0 merges per 48 days is the binding constraint, not the prereq complexity.

## 6. Risks and counter-arguments (direct swap)

- **Risk:** Direct swap lowers registration rate. **Counter:** registration is *not* the platform's headline conversion. Registrations exist to enable persistent watchlists and price alerts. A user who searches the dashboard, finds a deal, copies the link to their phone, and never registers — has still received product value. Today's `triggeredAlerts: 0` for 36 days is the evidence that the registration → activation funnel is fundamentally broken downstream of registration. **Lowering registrations short-term while raising actual product engagement is the right tradeoff.**
- **Risk:** Anon users on `/dashboard` cannot save watchlists. **Counter:** True. They can still search and view results. The EventCard intercept overlay (`EventCard.tsx:80–104`) is the existing surface that catches "user tries to track, isn't logged in" — it routes them to `/register`. This intercept becomes the platform's primary registration funnel, *after* product trial, not before.
- **Risk:** SEO penalty from changing the highest-weight CTA on the homepage. **Counter:** none. The link still exists, still has anchor text, still points within the site. No structured data changes. The `SearchAction` JSON-LD at `page.tsx:46–50` already declares `/dashboard?q=...` as the search target — the variant *aligns* the rendered CTA with the structured data; today they disagree.
- **Risk:** "Find Tickets Now" could be misread as a paid-search ad CTA. **Counter:** the gradient styling and full-bleed visual weight signal "site CTA" not "ad." This is a visual-design risk that is reverted in 5 minutes if it materializes.
- **Counter-argument:** "Why not A/B test it for certainty?" **Because the certainty cost is 16+ days of waiting for the analytics framework to ship, during which 16+ days of users see the worse-performing variant by default. At Week 6 of zero shipping cadence with a tournament 17 days out, shipping confidence is more valuable than statistical confidence.**

## 7. Decision pending after 15-day readout

If the direct swap holds:

- Permanent.
- Pivot to the **compare-gate soft-gate** as the next surface change (still requires the ~3 hr refactor; defer for separate sprint).
- The signup-form A/B test (§4) becomes the first test against the framework (now needed for measurement, not for direction).

If the direct swap shows a sustained −30% drop with no compensating watchlist lift:

- Revert (5 minutes, one line).
- Pivot to a **softer intermediate variant**: keep `/register` as the primary CTA but add an immediate `<Link href="/dashboard">` secondary CTA labelled "Browse events first" with equal visual weight. Tests the same hypothesis (product-first vs auth-first) with lower variance.
- Run the A/B framework on the intermediate variant.

## 8. Summary

| Decision | Recommendation |
|---|---|
| Ship the hero CTA change this week? | **Yes — as a direct production swap, not an A/B test.** |
| File:line | `web/src/app/page.tsx:83` |
| Time to ship | 5 minutes |
| Readout | Admin-API `usersThisWeek` and `totalWatchlistItems` over 15 days post-swap |
| Decision criteria | `usersThisWeek` within −30% of pre-swap 7-day avg AND `totalWatchlistItems` delta rises |
| First test for the A/B framework (post-swap) | **Signup form: email-only first step vs email+password together.** Requires the analytics framework to ship first. |
| Analytics framework prereq | The 3-line `NewsletterSignup.tsx:32` `dataLayer.push` scout (Day 16 unmerged). Ship this regardless of any test. |

**Spec status:** Ready to ship. The 5-minute direct-swap is the first frontend P0 merge candidate of the past 48 days.
