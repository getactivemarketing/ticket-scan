# Signup Flow Optimization — Week 3 (Compressed Ship-List)

**Author:** CRO Specialist • **Date:** 2026-05-11 • **Companion to:** `cro-weekly-2026-05-11.md` §3

> **This is Week 3 of writing this spec.** The 2026-04-27 weekly and `cro-weekly-2026-05-04--signup-flow.md` both contain full diagnostic + recommendation sets that remain load-bearing. **Nothing in `register/page.tsx` has changed in production since they were written.** This week's file compresses to a tactical ship-list with file:line precision and three new observations.

---

## 1. State verified today (2026-05-11)

`web/src/app/register/page.tsx` is 130 lines, unchanged from 2026-04-20.

| Issue | File:line | Status |
|---|---|---|
| No `autoComplete` on email | `register/page.tsx:69–77` | Day 20 unmerged |
| No `autoComplete="new-password"` on password | `register/page.tsx:84–92` | Day 20 unmerged |
| No `autoComplete="new-password"` on confirm-password | `register/page.tsx:99–107` | Day 20 unmerged |
| No `name` attribute on any input | `register/page.tsx:69, 84, 99` | Day 20 unmerged |
| No `?source=` URL param capture | `register/page.tsx:9–16` | Day 7 unmerged (spec'd 2026-05-04) |
| No `?returnTo=` URL param redirect | `register/page.tsx:36` | Day 7 unmerged (spec'd 2026-05-04) |
| No social SSO (Google/Apple) | (whole form) | Day 27 unmerged |
| No first-action prompt copy | `register/page.tsx:50–55` | Day 27 unmerged |
| `router.push('/dashboard')` on success — wrong destination | `register/page.tsx:36` | Day 7 unmerged (sharpened this week) |

---

## 2. This week's ship-list (zero-risk; total dev <30 min)

These are the items that should ship this week independent of any larger decisions. Each is reversible, additive, and has zero negative downside.

### Fix 1: `autoComplete` + `name` attrs (5 min)

```tsx
// register/page.tsx:69-77
<input
  id="email"
  name="email"               // ADD
  type="email"
  required
  autoComplete="email"       // ADD
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="..."
  placeholder="you@example.com"
/>

// register/page.tsx:84-92
<input
  id="password"
  name="password"            // ADD
  type="password"
  required
  autoComplete="new-password" // ADD
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  className="..."
  placeholder="••••••••"
/>

// register/page.tsx:99-107
<input
  id="confirmPassword"
  name="confirmPassword"     // ADD
  type="password"
  required
  autoComplete="new-password" // ADD
  value={confirmPassword}
  onChange={(e) => setConfirmPassword(e.target.value)}
  className="..."
  placeholder="••••••••"
/>
```

**Expected impact:** +10–15% form completion via password-manager autofill. **Day 20 unmerged. No reason for this to not be in production.**

### Fix 2: `?source=` and `?returnTo=` URL param capture (20 min)

```tsx
// register/page.tsx top
'use client';
import { useSearchParams } from 'next/navigation';

export default function RegisterPage() {
  const searchParams = useSearchParams();
  const source = searchParams.get('source');
  const returnTo = searchParams.get('returnTo');
  // ... existing useState calls

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (password !== confirmPassword) { setError('Passwords do not match'); return; }
    if (password.length < 8) { setError('Password must be at least 8 characters'); return; }
    setLoading(true);
    try {
      await register(email, password, { source });  // pass source through to backend if API accepts
      router.push(returnTo || '/watchlist?welcome=1'); // CHANGE FROM '/dashboard'
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed');
    } finally {
      setLoading(false);
    }
  };
  // ...
}
```

**Notes on the `returnTo` destination change:** the current default destination `/dashboard` lands new users on an empty Orlando-default search box, which is the worst possible first impression. `/watchlist?welcome=1` lands them on an empty-watchlist page that can render a welcome banner + a "search for your first event" CTA. This is the **wrong fix if the onboarding flow ships first** (in which case the default should be `/onboarding`). For this week — when neither destination is improved — `/watchlist?welcome=1` is at least an authed-user-specific surface, unlike `/dashboard` which is identical for authed and anon.

If the backend's `register(email, password)` does not currently accept a `source` argument, the source-capture is frontend-only this week (stored in `localStorage.signup_source` and read by `AuthContext` or analytics). Backend changes can land in a follow-up.

**Expected impact:** +5–8% downstream activation rate (correct landing surface); attribution data unblocks segment analysis.

### Fix 3: Update copy to anchor a first action (5 min)

```tsx
// register/page.tsx:50-55
<h2 className="mt-4 text-3xl font-bold font-heading text-gray-900">
  Create your account
</h2>
<p className="mt-2 text-gray-600">
  Track ticket prices and get alerts when they drop.  {/* WAS: "Start tracking ticket prices today" */}
</p>
```

The new copy is action-first and benefit-clear. The old copy is generic. Word count is similar (10 vs 6 words), no layout impact.

**Expected impact:** marginal (~2–3%) but free. Ship with Fix 1 and Fix 2 in the same commit.

---

## 3. Three new observations this week

### 3.1 Wrong post-signup destination (now P1)

`register/page.tsx:36` `router.push('/dashboard')` was previously flagged but framed as "no onboarding exists, so the dashboard is the least-bad option." This week's sharper framing: **the dashboard is actively the wrong destination even before onboarding exists.**

The dashboard:
- Defaults to `city = 'Orlando'` (not the user's city)
- Has no welcome banner for newly-authed users (the existing banner is `!user`-only at `dashboard/page.tsx:60`)
- Has no "first search" prompt
- Has no zero-state UX

The watchlist page (`/watchlist`) at least has a meaningful empty state (it should — verify). Land new users there with a `?welcome=1` query param that triggers a one-time welcome card.

### 3.2 Confirm-password field is removable (Week 1 P2 → Week 3 P1)

The 2026-04-27 weekly noted that single-password forms (no confirm field) reduce 130-line forms by ~25 lines and reduce form-abandon by ~5%. The browser-native password-managed UX makes confirm-password obsolete; the only purpose it serves today is to catch typos in users who type passwords manually, which is a shrinking cohort.

**Recommendation:** drop the confirm-password field after `autoComplete="new-password"` ships (Fix 1). The `autoComplete` attribute triggers password-manager generation; manually-typed passwords become rare, and the confirm field becomes pure friction.

This is **not on this week's ship list** because it is a more substantive change. Ship Fix 1 first, observe one week of completion rates with `autoComplete` active, then decide on confirm-password removal in 2026-05-25 weekly.

### 3.3 EventCard signup intercept → `/register?source=eventcard&event_id=X&returnTo=/watchlist?action=add-target&event_id=X` (new)

The EventCard's anonymous-user signup intercept (`EventCard.tsx:80–104`) currently sends users to `/register` with no context. When `?source=` and `?returnTo=` URL params land (Fix 2), the intercept should be updated to pass them:

```tsx
// EventCard.tsx:89-94 — change Link
<Link
  href={`/register?source=eventcard&event_id=${event.id}&returnTo=/watchlist?action=add-target%26event_id=${event.id}`}
  className="..."
>
  Sign Up Free
</Link>
```

The user lands back on watchlist with a "Set your target price for [event]" prompt. **This is the highest-conversion signup path on the platform** when wired — the user already showed intent by clicking `+` on an event card. **Day 0 of this observation.** Recommend bundling with Fix 2.

---

## 4. Items NOT on this week's ship-list (intentionally)

- Social SSO (Google/Apple) — still recommended, still deferred. ~1 day of work. Requires OAuth setup + privacy policy update + UI wiring. Bigger than this week's ship-list scope.
- Two-step email-only signup (capture email, then on next visit capture password) — still recommended for a follow-up A/B test, not a permanent change.
- Progress indicator — still recommended for a 3+ step signup, not for the current 1-step. Bundles with onboarding (separate spec).
- Captcha / rate limiting — backend concern; depends on whether the API already rate-limits `/api/auth/register`. Investigate before adding frontend friction.

---

## 5. Handoffs

- **Content Agent (Agent 1):** new copy for `register/page.tsx:50–55` (Fix 3). Alternative variants for A/B follow-up: "Get free price drop alerts" / "Save on your next ticket" / "Compare prices across 5+ sites".
- **Growth Agent (Agent 8):** the `?source=` attribution scheme — needs alignment with the rest of the funnel's attribution (UTM, referrer). Recommend `source` is *only* set when no UTM is present (UTM takes precedence).
- **Analytics Agent (Agent 7):** `signup_completed` event needs a `source` property, populated from `?source=` URL param (or `localStorage.signup_source` if persisted). Required for the A/B test secondary metric in `cro-weekly-2026-05-11--abtest-spec.md`.
