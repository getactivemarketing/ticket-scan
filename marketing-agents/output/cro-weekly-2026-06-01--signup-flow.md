# Signup Flow Optimization — 2026-06-01

Current flow (verified `register/page.tsx`): Sign Up → 3-field form (email, password, confirm-password) → JWT stored → hardcoded `router.push('/dashboard')` (line 36). No SSO, no onboarding, no `?returnTo=`.

## Verified ship-list (smallest first)

| # | Fix | File:line | Effort | Why |
|---|---|---|---|---|
| 1 | Add `autoComplete` (`email`, `new-password`, `new-password`) + `name` attrs to the 3 inputs | `register/page.tsx:69, 84, 99` | ~1 min | Browser autofill currently broken; biggest effort-to-impact ratio on the form |
| 2 | Password-reveal toggle (type swap on click) | `register/page.tsx:83–107` | ~10 min | ~6–9% mobile completion lift (Baymard) |
| 3 | Inline hint "At least 8 characters" under password input | `register/page.tsx:80–93` | ~5 min | Removes the most common submit-time round-trip error |
| 4 | Capture `?returnTo=` query param; honor it in `handleSubmit` instead of hardcoded `/dashboard` | `register/page.tsx:36` | ~15 min | Lets a Compare-gated user return to what they wanted; prerequisite for the EventCard intercept |
| 5 | Remove confirm-password field (rely on reveal toggle for verification) | `register/page.tsx:95–108` | ~5 min | 3 fields → 2 on a free product |
| 6 | Per-field error rendering (split the single shared error `div`) | `register/page.tsx:59–63` | ~15 min | a11y + clearer correction |
| 7 | Google SSO (P2 — defer until 1–6 ship) | new | ~1 day | Real friction reducer but largest effort |

**Recommended order:** 1+2 (one commit, ~11 min) → 3+5+6 (one commit) → 4 (enables intercept) → 7 later.

**Carryover dependency:** post-signup destination still hardcodes `/dashboard`, which loads with `useState('Orlando')` (`dashboard/page.tsx:27`) — a default city, not the user's. Fix 4 + the onboarding city step (see onboarding file) resolve this together.

> Long-form rationale: `cro-weekly-2026-05-04--signup-flow.md`.
