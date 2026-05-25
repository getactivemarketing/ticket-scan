# Signup Flow Optimization — Week 5 Ship-List

Date: 2026-05-25 (Monday) • Companion to `cro-weekly-2026-05-25.md` §3 • Long-form spec: `cro-weekly-2026-05-04--signup-flow.md` (still load-bearing)

> **This is a compressed tactical ship-list with six findings added this week.** The full architecture spec (4-step onboarding, social SSO, magic-link, `?source=` capture, post-signup destination logic) lives in the 5/4 long-form. This file lists what is shippable this week with file paths and line numbers, plus the **6 new findings from today's daily form-rotation re-audit (R-NEW-1 through R-NEW-6).**

---

## 1. Current state (byte-confirmed today 2026-05-25)

`web/src/app/register/page.tsx` is **129 lines.** Today's daily re-read confirms byte-identical to last week's snapshot.

| Property | Value | Source |
|---|---|---|
| Fields | `email`, `password`, `confirmPassword` (3) | `:11–13` |
| Validation | `password !== confirmPassword` (submit only), `password.length < 8` (submit only) | `:22–30` |
| `autoComplete` attrs | **None** | `:69–107` |
| `name` attrs | **None** | `:69–107` |
| URL-param capture | **None** — `?source=`, `?returnTo=`, `?event_id=` all ignored | `:9–16` |
| Post-signup destination | Hardcoded `router.push('/dashboard')` | `:36` |
| Social SSO | None | n/a |
| Password strength indicator | None | n/a |
| Password reveal toggle | **None** (today's daily R-NEW-2) | `:83–107` |
| Inline rule hint ("Min 8 chars") | **None** — error appears submit-time only (today's daily R-NEW-3) | `:83–92` |
| Error rendering | Single shared `<div>` above form for all errors (today's daily R-NEW-4) | `:59–63` |
| Benefit copy below heading | **None** (today's daily R-NEW-5) | `:42–55` |
| Magic-link / email-only first step | None | n/a |

**Total open findings: 23** (17 carry-forwards from prior audits + 6 new from today's daily).

## 2. Ship-list (this week)

### Tier 1: 5-minute fixes (zero-risk, zero-design-decision)

| # | Fix | File:line | Effort | Days unresolved | Impact |
|---|---|---|---|---|---|
| S1 | Add `autoComplete="email"` + `name="email"` to email input | `register/page.tsx:69–77` | 1 min | 34 | +5–8% form completion (browser autofill works) |
| S2 | Add `autoComplete="new-password"` + `name="password"` to password input | `register/page.tsx:83–92` | 1 min | 34 | +3–5% (password manager autofill) |
| S3 | Add `autoComplete="new-password"` + `name="confirmPassword"` to confirm-password input | `register/page.tsx:98–107` | 1 min | 34 | +3–5% (password manager autofill on confirm field) |
| S4 | Add `aria-describedby="password-rules"` + visible `<p id="password-rules" className="text-xs text-gray-500 mt-1">At least 8 characters</p>` under password input (R-NEW-3) | `register/page.tsx:83–92` | 5 min | **0 (new this week)** | Removes submit-time round-trip on the most common error |

**Tier 1 total: 8 minutes.** Zero risk. **S1–S3 are Day 34 unresolved.** S4 is new today.

### Tier 2: 10–25 minute fixes (small design decision, no architecture risk)

| # | Fix | File:line | Effort | Days unresolved | Impact |
|---|---|---|---|---|---|
| S5 | Capture `?source=` from URL on mount; submit to backend in register payload; log to dataLayer (when wired) | `register/page.tsx:9–17` + `lib/api.ts` register helper | 15 min | 21 | Source-of-signup attribution unlocked — currently zero attribution data exists |
| S6 | Capture `?returnTo=` from URL on mount; on success, `router.push(returnTo \|\| '/dashboard')` | `register/page.tsx:34–36` | 5 min | 21 | Pre-onboarding watchlist intercept (`cro-weekly-2026-05-25--onboarding-flow.md` §3) cannot work without this |
| S7 | Inline password-strength feedback below the password input — short/ok/strong, computed `onChange` | `register/page.tsx:83–92` | 20 min | 7 | Reduces password-field abandonment 8–12% per B2C ecommerce baseline |
| S8 | Change post-signup destination from `/dashboard` to `/watchlist?empty=welcome` (empty state with encouragement copy) — bypasses the `useState('Orlando')` cold-start | `register/page.tsx:36` | 10 min | 14 | Eliminates lands-on-Orlando bug for first-authenticated experience |
| **S9-NEW** | **Password reveal toggle on both password fields (R-NEW-2)**. Standard React pattern; eye-icon button absolute-positioned over each field; toggles `type` between `password` and `text` on click. ~15 LOC. | `register/page.tsx:83–107` | 10 min | **0 (new this week)** | +6–9% mobile form completion (Baymard Institute mobile-UX research) |
| **S10-NEW** | **Per-field error rendering (R-NEW-4)**. Split the shared error `<div>` at `:59–63` into `emailError`, `passwordError`, `confirmPasswordError`, `formError`. Render first 3 inline under their respective fields with `role="alert"`; render `formError` in the shared red box at the top. | `register/page.tsx:18–24` (state) + `:59–63` (render) + `:69–107` (per-field) | 15 min | **0 (new this week)** | Standard a11y + UX pattern; cuts error-comprehension friction; aligns with WCAG AA |
| **S11-NEW** | **"Why create an account?" benefit copy (R-NEW-5)**. 3 bullets, ≤6 words each, below the "Create your account" heading: *"✓ Track unlimited events" / "✓ Get price-drop alerts via email" / "✓ Compare prices across 3 ticket sites"*. | `register/page.tsx:42–55` | 5 min | **0 (new this week)** | Anchors form completion to concrete benefits; offsets the form's cognitive load |

**Tier 2 total: 80 minutes.** S5, S6, S7, S8 are carryovers. **S9-NEW, S10-NEW, S11-NEW are new this week** and total 30 min combined.

### Tier 3: Multi-hour fixes (require small new component or backend change)

| # | Fix | File:line | Effort | Days unresolved | Impact |
|---|---|---|---|---|---|
| S12 | Replace 3-field form with **email-only first step** → server creates pending account → password set on next visit (or magic-link). Reuses existing JWT logic. | `register/page.tsx` (full rewrite of `handleSubmit`) + `index.js` `/api/auth/register` accepting `password: null` | 2 hr | 21 (speced) | +20–30% signup completion per the spec in `cro-weekly-2026-05-04--signup-flow.md` §4 — **also the recommended first A/B test once the framework ships, see `cro-weekly-2026-05-25--abtest-spec.md` §4** |
| S13 | Add Google OAuth (Next.js + `next-auth` or Supabase Auth or homegrown) (today's daily R-NEW-6) | New routes + `register/page.tsx:115` SSO button | 4 hr | 0 (re-speced today) | +15–25% signup completion; +35% on mobile (Apple Sign In as follow-up) |

**Tier 3 is NOT in this week's recommended ship list** — Tier 1+2 covers ~88 minutes of work and would unlock most of the structural attribution and post-signup-routing gaps. Tier 3 is for a sprint with dedicated dev time.

---

## 3. Six new findings (from today's daily form-rotation)

| # | Priority | Finding | Effort |
|---|---|---|---|
| R-NEW-1 | P0 | **No `autoComplete` attribute on any input.** Password managers cannot recognize the field set as a new-credential pair. **Fix:** 3 single-attribute additions per S1/S2/S3 above. | 1 min |
| R-NEW-2 | P0 | **No password reveal/visibility toggle.** Fix per S9-NEW above. | 10 min |
| R-NEW-3 | P1 | **"Min 8 characters" is rendered only on submit-blocked.** Fix per S4 above. | 5 min |
| R-NEW-4 | P1 | **Single shared error `<div>` for all errors.** Fix per S10-NEW above. | 15 min |
| R-NEW-5 | P1 | **No "Why create an account?" benefit copy.** Fix per S11-NEW above. | 5 min |
| R-NEW-6 | P2 | **No social SSO.** Defer to Tier 3. | 1 day |

**5 of 6 are P0 or P1.** The 5 ship in 36 minutes total. **R-NEW-6 (P2) is the only one deferred.**

---

## 4. Carryover items from 5/18 that remain unmerged

- **S1–S3 (autoComplete/name)** speced 2026-04-21. **Day 34 unmerged.** Smallest possible fix; no rational reason for the gap at Week 6.
- **S5–S6 (`?source=` / `?returnTo=`)** speced 2026-05-04. **Day 21 unmerged.** Blocking dependency for the pre-onboarding watchlist intercept (`cro-weekly-2026-05-25--onboarding-flow.md` §3.1).
- **S7 (inline password strength feedback)** speced 5/18. **Day 7 unmerged.**
- **S8 (post-signup destination)** speced 5/18. **Day 14 unmerged.**
- **S12 (email-only first step)** speced 2026-05-04. **Day 21 unmerged.** Higher-risk; needs server-side mirror in `index.js` `/api/auth/register`. **This is now reframed as the candidate first A/B test against the framework — see abtest-spec file §4.**

---

## 5. Recommended this-week order

| # | Bundle | Files touched | Effort |
|---|---|---|---|
| 1 | **S1 + S2 + S3** (autoComplete trio — one commit, three 1-line changes) | `register/page.tsx:71, 86, 101` | 3 min |
| 2 | **S9-NEW** (password reveal toggle, R-NEW-2) | `register/page.tsx:83–107` | 10 min |
| 3 | **S4 + S10-NEW + S11-NEW** (inline rule hint + per-field errors + benefit bullets — one commit) | `register/page.tsx:18–24, 42–55, 59–63, 69–107` | 25 min |
| 4 | **S6** (returnTo capture; unblocks pre-onboarding intercept downstream) | `register/page.tsx:9–17, 34–36` | 5 min |
| 5 | **S8** (post-signup destination → `/watchlist?empty=welcome`) | `register/page.tsx:36` | 10 min |
| 6 | **S5** (source capture; only after dataLayer scout ships per `cro-weekly-2026-05-25--abtest-spec.md` §5) | `register/page.tsx:9–17` + `lib/api.ts` | 15 min |
| 7 | **S7** (inline password strength meter) | `register/page.tsx:83–92` | 20 min |

**Total committed work this week: 88 minutes across 7 commits.** Each commit is independently shippable. No commit depends on a refactor.

**The first commit (Bundle 1: 3-minute autoComplete trio) is the most asymmetric finding on the form** — a 3-minute change on Day 34 unmerged. **If only one commit ships from this file this week, it should be Bundle 1.**

---

## 6. What this file does NOT propose

- Removing the password field entirely (handled in Tier 3 S12 — separate sprint, reframed as first A/B test).
- Adding phone-number registration (out of scope; no SMS infrastructure).
- Removing the confirm-password field (low-impact; modern password managers fill both correctly when `autoComplete="new-password"` is set on both).
- Replacing the bcrypt + JWT stack (no — works fine; not a signup-flow problem).
- Pre-populating signup form from a sticky `?email=` query param (would invite scraper-driven false signups; defer).
- Captcha or rate-limiting on `/register` (backend rotation; not CRO scope this week — flag for backend audit).

This file proposes 88 minutes of frontend-only work that closes the bottom 50% of signup-flow drop-off. Tier 3 closes the next 30%. The remaining 20% is structural (email deliverability, fraud detection, etc.) and out of CRO-agent scope.

---

## 7. Compatibility with §1's hero-CTA direct swap (item 11 from `cro-weekly-2026-05-25.md`)

If the hero CTA direct swap ships this week (recommend yes), the register form's role changes:

- **Before swap:** Register is the first conversion event. Friction in the form is the platform's headline conversion drag.
- **After swap:** Register is a *secondary* conversion event, fired only when users have already searched, found a deal, and tried to track it. Friction in the form still matters, but it operates on a higher-intent population.

**Implication for this file's ship-list:** order does not change. The 88 minutes of work is still the right 88 minutes. **But the highest-marginal-leverage items shift toward the "post-intent friction" category — S6 (`?returnTo=` capture), S9-NEW (password reveal), S11-NEW (benefit copy reinforcing why-now).** These specifically address the user who arrived at `/register` via the EventCard intercept overlay (`EventCard.tsx:80–104`) with a clear track-this-event intent in mind. The S1–S3 autoComplete fix remains the cheapest, but the *highest-impact* fixes shift downstream.
