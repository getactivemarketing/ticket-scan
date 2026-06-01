# A/B Test Spec — 2026-06-01

## Reality check first
The site has **no analytics instrumentation** (`grep -ri "gtag|dataLayer|posthog|plausible" web/src` → 0). A cookie-cohort split test produces no readable result today. So this spec has two parts: (A) the one change to ship now as a *measured production cutover*, and (B) the framework to stand up for genuine future tests.

---

## A. Ship now (production cutover, read from admin counters)

### Ungate the Compare / Event-detail pages
- **Files:** `web/src/app/compare/page.tsx:87–90` (delete the `if (!user) router.push('/login')` block), `web/src/app/event/[id]/page.tsx:109–110` (same), `web/src/components/Navbar.tsx:86–108` (add Compare to logged-out nav).
- **Behavior:** render full comparison for anonymous users; gate **only** the add-to-watchlist / set-alert action, reusing the existing overlay at `EventCard.tsx:80–104`.
- **Hypothesis:** showing the price comparison before asking for an account raises registrations-per-visitor and watchlist adds.
- **Readout:** `/api/admin/stats` → `totalUsers` and `totalWatchlistItems`, 14-day window pre vs post. No GTM required.
- **Decision rule:** keep unless 14-day new-user count falls ≥30%; expect watchlist adds to rise.
- **Effort:** ~1–2 hr.

Why not a cohort A/B test for this: the direction (let users see the product before the wall) is an industry-default design decision, not an open question. Booking/Kayak/Airbnb all do it. Testing it would mostly test the unbuilt analytics pipeline.

---

## B. Framework for future tests (stand up once analytics exists)

Minimum viable instrumentation, in ship order:
1. Add `dataLayer.push({event:'newsletter_subscribe'})` in `NewsletterSignup.tsx:31` success branch and `dataLayer.push({event:'register_completed'})` at `register/page.tsx:36`. (~10 min total.)
2. Add a lightweight provider (Plausible custom events or PostHog) in `layout.tsx`.
3. Cohort assignment: deterministic hash of a first-party cookie `ts_cohort` (set once, 50/50), read server-side in the page component.

### First test worth a real split (once B is live)
**Register: email+password together (control) vs email-first two-step (variant).**
- Page: `/register`.
- Primary: register-completion rate (`register_completed` / `register_view`).
- Secondary: 7-day activation (first watchlist add).
- Direction genuinely uncertain → worth the cohort split.
- Sample: needs ~1,000 starts/arm for a ±5pp effect at current volumes; given low traffic this may run 3–4 weeks. Do not start until instrumentation B is verified firing.

> Carried unchanged from prior weeks except reframed around the ungate-now recommendation. Long-form framework detail: `cro-weekly-2026-05-04--abtest-spec.md`.
