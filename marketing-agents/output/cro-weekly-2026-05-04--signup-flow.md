# Signup Flow Optimization Spec

**Author:** CRO Specialist • **Date:** 2026-05-04 • **Companion to:** `cro-weekly-2026-05-04.md` §3

---

## 1. Current state (verified today)

`web/src/app/register/page.tsx` is 130 lines. The form is 3 inputs (email, password, confirmPassword), submits to `register(email, password)` from `AuthContext`, redirects to `/dashboard`. Validation: `password === confirmPassword`, `password.length >= 8`. No further checks.

### Observed friction points (annotated against the file)

| Line | Observation | Impact |
|---|---|---|
| 9 | No `useSearchParams` — `?source=` and `?returnTo=` URL params are not captured. | Attribution impossible; users who arrived from `/event/123 → login → register` lose their original intent. |
| 36 | `router.push('/dashboard')` on success. | Lands on empty Orlando-default search box (`dashboard/page.tsx:27`). No first-action prompt. |
| 69–77 | Email input: no `autoComplete`, no `name` attribute. | Browser password managers and iOS autofill can't find the field; form completion drops 10–15%. |
| 84–92 | Password input: no `autoComplete="new-password"`. | Same as above + missing the standard semantic that triggers password-manager generation. |
| 99–107 | Confirm-password input: no `autoComplete="new-password"`. | Same as above + duplicates the password ask without explanation; ~5% completion drop on long forms. |
| (whole form) | No social SSO (Google/Apple). | ~30–50% of consumer signups choose social when available; absent here. |
| (whole form) | No progress indicator. | Users don't know whether this is a 1-step or 2-step process; guessing increases abandonment. |
| (whole form) | No first-action prompt copy. | "Create your account" + "Start tracking ticket prices today" — generic; doesn't surface a specific use case. |
| (whole form) | No captcha or rate limit visible. | Open API surface; scriptable signup attacks possible. (Backend may rate-limit; not visible from frontend audit.) |

---

## 2. Recommendations

### 2.1 Add `autoComplete` + `name` (5-min ship, ship this week regardless)

```tsx
<input id="email" name="email" type="email" required autoComplete="email" ... />
<input id="password" name="password" type="password" required autoComplete="new-password" ... />
<input id="confirmPassword" name="confirmPassword" type="password" required autoComplete="new-password" ... />
```

**Impact:** browser password managers populate the form. Industry baseline: 10–15% lift on form completion. **Zero-risk change.** Should ship even before any other signup work is decided.

### 2.2 Capture `?source=` and `?returnTo=` URL params (30-min ship, ship this week)

```tsx
import { useSearchParams } from 'next/navigation';

const searchParams = useSearchParams();
const source = searchParams.get('source') || 'direct';
const returnTo = searchParams.get('returnTo') || '/dashboard';

// In handleSubmit success branch:
await register(email, password);
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'signup_completed',
  source,
  returnTo,
});
router.push(returnTo);
```

**Update upstream register links** (homepage hero, navbar, EventCard intercept, etc.) to include `?source=hero` / `?source=navbar` / `?source=eventcard` / `?source=compare-soft-gate` / etc., and `?returnTo=` where the post-signup intent is known.

**Impact:** unblocks attribution forever. Currently impossible to know which surface drives signups; this is the prerequisite for every funnel-segmentation analysis the Analytics Agent has been asking for since Day 13.

### 2.3 Email-only step 1 → password step 2 (full redesign)

The brief asks: "Should registration be email-only first step?" **Yes — but only after the drip pipeline ships (Day 15 fix).** Here's why:

**Pros of email-only step 1:**
- 15–25% lift on email capture (industry-standard).
- Email is captured even if the user abandons before password — drip campaign re-engages them.
- "Continue with email" → "Create password" frames registration as a process, not a wall.

**Cons:**
- ~5% degradation on completed signups (some users abandon between step 1 and step 2).
- Net positive on email volume; mixed on full-account creation.

**Why fix drip first:** today's drip campaign queries `users` (where step-1 emails *don't* land — they only land in `users` after step 2 completes a password). If we ship email-only step 1 today, all the captured emails from step-1 abandoners would land in `newsletter_subscribers` (via the inline form approach) and receive zero drip emails — exactly the bug that's been documented for 15 days.

**Sequence:** ship the drip query fix (5 min) → then ship email-only step 1 (3 hrs).

### 2.4 Social SSO (Google + Apple)

**The brief asks:** should we add it? **Yes, but not first.**

**Why high-impact:** social SSO lifts signup completion 30–50% on consumer platforms. It eliminates the password-creation friction entirely. iOS users especially expect Apple Sign-In as a default option.

**Why not first:**
- Backend cost: ~12 hrs (OAuth callback handler in Express, JWT-issue branch, account-merge handling for users who later try email-signup with the same email).
- Frontend cost: ~4 hrs (button components, OAuth-popup handling, post-callback redirect).
- Apple Developer account requirement: Apple Sign-In requires an Apple Developer membership ($99/yr) and verified domain ownership.
- The current platform doesn't have *anything* that makes social SSO uniquely useful — the value isn't in the SSO itself, it's in what the platform does with the account afterward. Until target-price modal + onboarding ship, SSO accelerates signups into a dead-end retention surface.

**Sequence:** ship target-price modal (8 hrs) → ship onboarding (12 hrs) → ship social SSO (16 hrs). Total: ~5 dev days. SSO becomes high-leverage **after** the platform has a working post-signup loop.

### 2.5 Preference capture during signup

**The brief asks:** should we capture favorite teams / cities / event types during signup? **No — capture them in onboarding, not in the signup form.**

Mixing identity capture (email + password) with preference capture in the same form lengthens perceived form length, hurts completion. Industry benchmark: every additional field at signup costs ~5% completion. The right place for preferences is **after** the account exists, in onboarding step 1 + step 2 (see `cro-weekly-2026-05-04--onboarding-flow.md`).

**The signup form should remain identity-only.**

### 2.6 Progress indicator

If the form becomes 2-step (recommendation 2.3), add a `● ○` / `● ●` indicator at the top of each step. Standard pattern; 2-line CSS implementation. Frames step 1 as "step 1 of 2" rather than "step 1 of unknown."

**Onboarding** (a separate 4-step flow post-signup) should *not* be presented as "step 3, 4, 5, 6 of 6 from registration." It's a distinct flow — different progress indicator, different visual frame, different cancellation semantics. The signup form is a 1- or 2-step process; onboarding is a 4-step process. Don't merge them.

### 2.7 Post-signup redirect: `/onboarding`, not `/dashboard`

Currently `register/page.tsx:36` lands the user on `/dashboard` (Orlando-default search box, "Sign up banner" suppressed because they're authed → visually identical to the unauthed dashboard except the banner is gone — a *negative* signal of progress).

The right destination is `/onboarding` (see companion onboarding spec), which captures preferences and pushes the user to set their first price alert in <60s.

**Migration:** change `router.push('/dashboard')` → `router.push(returnTo === '/dashboard' ? '/onboarding' : returnTo)`. Users who arrived from a specific intent (`returnTo=/event/123`) still get sent to their intent. Users with no intent (most signups) go to onboarding.

---

## 3. Redesigned signup-flow

### Step 1: Email-only

```
┌────────────────────────────────────────┐
│  TicketScan logo                       │
│                                        │
│  Get price alerts on tickets           │
│  Free forever. No spam.                │
│                                        │
│  ┌──────────────────────────────────┐  │
│  │ Email                            │  │
│  │ [you@example.com           ]     │  │
│  │ autoComplete="email"             │  │
│  └──────────────────────────────────┘  │
│                                        │
│  [    Continue with email     →]      │
│                                        │
│  ─────────  or  ─────────             │
│                                        │
│  [G  Continue with Google      ]      │
│  [   Continue with Apple       ]      │
│                                        │
│  Already have an account? Log in      │
└────────────────────────────────────────┘
```

**On submit:** validate email format, store in component state, advance to step 2. **Do not yet write to backend** — the account doesn't exist until password is set. (Alternative: write a `pending_users` row with email-only that converts on password-set. More robust but more backend complexity. Recommend the simpler client-side state path for v1.)

### Step 2: Password

```
┌────────────────────────────────────────┐
│  ● ●                                   │
│                                        │
│  Almost there!                         │
│  Create a password to secure your      │
│  account.                              │
│                                        │
│  Email: you@example.com  (edit)        │
│                                        │
│  ┌──────────────────────────────────┐  │
│  │ Password (8+ chars)              │  │
│  │ [••••••••••           ]          │  │
│  │ autoComplete="new-password"      │  │
│  └──────────────────────────────────┘  │
│                                        │
│  ┌──────────────────────────────────┐  │
│  │ Confirm password                 │  │
│  │ [••••••••••           ]          │  │
│  │ autoComplete="new-password"      │  │
│  └──────────────────────────────────┘  │
│                                        │
│  [   Create account & continue →]      │
│                                        │
│  ← Back                                │
└────────────────────────────────────────┘
```

**On submit:** call `register(email, password)` (existing AuthContext function), `dataLayer.push({event: 'signup_completed', source, ...})`, redirect to `returnTo === '/dashboard' ? '/onboarding' : returnTo`.

### Why two steps, not one

1. **Email is captured even if the user bails on password.** Drip campaign re-engages.
2. **Password creation is a meaningfully different cognitive task than typing an email.** Forcing them in the same form spreads attention thin; both completions suffer.
3. **The "edit" affordance on step 2 lets users fix typos** without the annoying "back to step 1, retype password" pattern of multi-page forms.

### State management

```tsx
'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
// ...

export default function RegisterPage() {
  const [step, setStep] = useState<1 | 2>(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const searchParams = useSearchParams();
  const source = searchParams.get('source') || 'direct';
  const returnTo = searchParams.get('returnTo') || '/dashboard';
  // ...

  if (step === 1) return <EmailStep onContinue={(e) => { setEmail(e); setStep(2); }} source={source} />;
  return <PasswordStep email={email} onBack={() => setStep(1)} onSubmit={handleFinalSubmit} />;
}
```

---

## 4. Effort

| Item | Effort |
|---|---|
| autoComplete + name attributes (recommendation 2.1) | 5 min |
| `?source=` + `?returnTo=` capture + upstream link updates (2.2) | 30 min |
| Step 1 / Step 2 split with shared state (2.3) | 2 hrs |
| Progress indicator component (2.6) | 30 min |
| Post-signup redirect logic (2.7) | 15 min |
| `dataLayer.push` events on step transitions + completion | 30 min |
| QA: desktop, mobile, iOS Safari + autofill, Android + autofill, password-manager (1Password, Bitwarden) | 1.5 hrs |
| **Total** | **~5 hrs** |

**Excluded** (sequenced later): social SSO (~16 hrs, after target-price + onboarding); preference capture (in onboarding spec, not signup form); captcha/rate-limit hardening (security review, separate scope).

---

## 5. Sequencing within the broader CRO program

| Order | Item | Reason |
|---|---|---|
| 1 | autoComplete + name (5 min) | Zero-risk, ship today |
| 2 | `?source=` + `?returnTo=` (30 min) | Attribution unlock; composes with every other signup-driving change |
| 3 | Drip query: `users` → `newsletter_subscribers` (5 min) | Prerequisite for email-only step 1 (Day 15 carry-over) |
| 4 | Step 1 / Step 2 split (2 hrs) | After #3 — captured emails now reach drip |
| 5 | Post-signup redirect to `/onboarding` (15 min, conditional on onboarding spec ready) | After onboarding ships |
| 6 | Social SSO (16 hrs) | After target-price + onboarding give the account a useful destination |

**Recommended this-week ship: items 1–2 (35 min total).** They don't depend on anything; they unblock everything; they should ship even if the larger redesign waits.

---

## 6. Open questions for product

1. **Email verification?** Should the email-only step 1 send a verification email immediately (and gate step 2 behind clicking it)? **Recommendation: no — too much friction for v1.** Verify lazily on first password-reset request or first email-driven action. Industry standard for low-stakes consumer accounts.
2. **Backend `pending_users` row vs client-side state?** Either works for v1. Client-side state is simpler; backend pending row handles cross-device step-1 → step-2 (rare). **Recommendation: client-side for v1; revisit if cross-device step abandonment becomes a measurable issue.**
3. **Captcha?** The current API endpoint may or may not be rate-limited; from the frontend audit, no captcha is rendered. **Recommendation: defer to a separate security-review pass.** This spec is CRO scope; captcha is anti-fraud scope.
4. **Re-engagement of step-1 abandoners?** If a user submits email at step 1 but bails on step 2, they're now in `newsletter_subscribers`. Should they receive a "you started signing up — finish here" email? **Recommendation: yes, as the first drip email for the `source="register-step-1"` cohort. Compose with Email Agent.**
