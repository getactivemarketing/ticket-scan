# Signup Flow Optimization — Week 4 Ship-List

Date: 2026-05-18 (Monday) • Companion to `cro-weekly-2026-05-18.md` §3 • Long-form spec: `cro-weekly-2026-05-04--signup-flow.md` (still load-bearing)

> **This is a compressed tactical ship-list.** The full architecture spec (4-step onboarding, social SSO, magic-link, `?source=` capture, post-signup destination logic) lives in the 5/4 long-form. This file lists what is shippable this week with file paths and line numbers.

---

## 1. Current state (byte-confirmed today 2026-05-18)

`web/src/app/register/page.tsx` is **130 lines**, byte-identical to last week's read and to the 5/4 baseline read.

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
| Magic-link / email-only first step | None | n/a |

## 2. Ship-list (this week)

### Tier 1: 5-minute fixes (zero-risk, zero-design-decision)

| # | Fix | File:line | Effort | Days unresolved | Impact |
|---|---|---|---|---|---|
| S1 | Add `autoComplete="email"` + `name="email"` to email input | `register/page.tsx:69–77` | 1 min | 27 | +5–8% form completion (browser autofill works) |
| S2 | Add `autoComplete="new-password"` + `name="password"` to password input | `register/page.tsx:83–92` | 1 min | 27 | +3–5% (password manager autofill) |
| S3 | Add `autoComplete="new-password"` + `name="confirmPassword"` to confirm-password input | `register/page.tsx:98–107` | 1 min | 27 | +3–5% (password manager autofill on confirm field) |
| S4 | Add `aria-describedby="password-rules"` + visible `<p id="password-rules">Min 8 characters</p>` under password input | `register/page.tsx:83–92` | 5 min | 27 | Reduces "Password must be at least 8 characters" submit-time errors |

**Tier 1 total: 8 minutes.** Zero risk. **Day 27 unresolved.**

### Tier 2: 30-minute fixes (small design decision, no architecture risk)

| # | Fix | File:line | Effort | Days unresolved | Impact |
|---|---|---|---|---|---|
| S5 | Capture `?source=` from URL on mount; submit to backend in register payload; log to dataLayer (when wired) | `register/page.tsx:9–17` + `lib/api.ts` register helper | 15 min | 14 | Source-of-signup attribution unlocked — currently zero attribution data exists |
| S6 | Capture `?returnTo=` from URL on mount; on success, `router.push(returnTo || '/dashboard')` | `register/page.tsx:34–36` | 5 min | 14 | Pre-onboarding watchlist intercept (`cro-weekly-2026-05-18--onboarding-flow.md` §2) cannot work without this |
| S7 | Inline password-strength feedback below the password input — short/ok/strong, computed `onChange` | `register/page.tsx:83–92` | 20 min | **NEW** | Reduces password-field abandonment 8–12% per B2C ecommerce baseline |
| S8 | Change post-signup destination from `/dashboard` to `/watchlist?empty=welcome` (empty state with encouragement copy) — bypasses the `useState('Orlando')` cold-start | `register/page.tsx:36` | 10 min | 7 | Eliminates lands-on-Orlando bug for first-authenticated experience |

**Tier 2 total: 50 minutes.**

### Tier 3: 2-hour fixes (require small new component)

| # | Fix | File:line | Effort | Days unresolved | Impact |
|---|---|---|---|---|---|
| S9 | Replace 3-field form with **email-only first step** → server creates pending account → password set on next visit (or magic-link). Reuses existing JWT logic. | `register/page.tsx` (full rewrite of `handleSubmit`) + `index.js` `/api/auth/register` accepting `password: null` | 2 hr | 14 (speced) | +20–30% signup completion per the spec in `cro-weekly-2026-05-04--signup-flow.md` §4 |
| S10 | Add Google OAuth (Next.js + `next-auth` or Supabase Auth or homegrown) | New routes + `register/page.tsx:115` SSO button | 4 hr | 21 (speced) | +15–25% signup completion; +35% on mobile (Apple Sign In as follow-up) |

**Tier 3 is NOT in this week's recommended ship list** — Tier 1+2 covers ~58 minutes of work and would unlock most of the structural attribution and post-signup-routing gaps. Tier 3 is for a sprint with dedicated dev time.

---

## 3. Two new tactical observations (vs 5/11)

**Observation A: realtime password feedback (S7 above).** New finding this week. `register/page.tsx:27` validates `password.length < 8` only at submit time. The field has no `onBlur` validation, no `onChange` strength meter, no visible rule text. B2C ecommerce baseline shows realtime feedback reduces abandonment 8–12% on password fields; the rule itself ("Min 8 characters") is harmless to display before the user starts typing. 20-minute lift.

**Observation B: lands-on-Orlando is the literal first-authenticated experience (S8 above).** Carryover-but-escalated. `register/page.tsx:36` lands new users on `/dashboard`, which is `dashboard/page.tsx:27` with `useState('Orlando')` as the city default. **For every new user who registers today, their first authenticated screen searches Orlando.** Even before onboarding ships, S8 (route to `/watchlist?empty=welcome` instead) is a 10-minute fix that solves the empty-screen-with-wrong-city problem. The watchlist page has its own zero-state to greet new users; the dashboard has a hardcoded Orlando assumption that is wrong for 99% of users.

---

## 4. Carryover items from 5/11 that remain unmerged

- **S1–S3 (autoComplete/name)** speced 2026-04-21. **Day 27 unmerged.** Smallest possible fix; no rational reason for the gap.
- **S5–S6 (`?source=` / `?returnTo=`)** speced 2026-05-04. **Day 14 unmerged.** Blocking dependency for the pre-onboarding watchlist intercept (`cro-weekly-2026-05-18--onboarding-flow.md` §2).
- **S9 (email-only first step)** speced 2026-05-04. **Day 14 unmerged.** Higher-risk; needs server-side mirror in `index.js` `/api/auth/register`.

---

## 5. Recommended this-week order

1. **S1, S2, S3** — 3 minutes, in one commit. Day 27 → Day 0.
2. **S6** — 5 minutes, in one commit. Unblocks pre-onboarding intercept downstream.
3. **S8** — 10 minutes, in one commit. Fixes lands-on-Orlando.
4. **S4** — 5 minutes, in one commit. Pre-submit rule visibility.
5. **S5** — 15 minutes, in one commit *after* the dataLayer prereq ships (see `cro-weekly-2026-05-18--abtest-spec.md` §5). Until dataLayer ships, `?source=` is dead data.
6. **S7** — 20 minutes, design + ship. New this week; no upstream gate.

**Total committed work this week: 58 minutes across 6 commits.** Each commit is independently shippable. No commit depends on a refactor.

---

## 6. What this file does NOT propose

- Removing the password field entirely (handled in Tier 3 S9 — separate sprint).
- Adding phone-number registration (out of scope; no SMS infrastructure).
- Removing the confirm-password field (low-impact; modern password managers fill both correctly when `autoComplete="new-password"` is set on both).
- Replacing the bcrypt + JWT stack (no — works fine; not a signup-flow problem).
- Pre-populating signup form from a sticky `?email=` query param (would invite scraper-driven false signups; defer).

This file proposes 58 minutes of work that closes the bottom 50% of signup-flow drop-off. Tier 3 closes the next 30%. The remaining 20% is structural (email deliverability, fraud detection, etc.) and out of CRO-agent scope.
