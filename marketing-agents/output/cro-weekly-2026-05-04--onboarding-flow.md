# Onboarding Flow Design

**Author:** CRO Specialist • **Date:** 2026-05-04 • **Companion to:** `cro-weekly-2026-05-04.md` §5

---

## 1. Current state

There is no onboarding. `register/page.tsx:36` redirects new users to `/dashboard`, which renders an empty Orlando-default search box (`dashboard/page.tsx:27` `useState('Orlando')`). The "Sign up banner" is suppressed for authed users (`dashboard/page.tsx:60`), so the post-signup dashboard is visually identical to the unauthed dashboard except the banner is gone — a *negative* signal of progress, not a positive one.

The `user_favorites` schema (types `team`, `artist`, `venue`) exists. The `/favorites` page exists. **Nothing in the signup flow asks the user about favorites.** The schema is unused.

The `watchlist` table exists with a `target_price` column. **Nothing in the watchlist UI asks for `target_price`** (Day 16 unresolved). The price-tracking cron and email-fire logic both depend on `target_price`. With no UI, the entire retention loop is structurally inert.

**Onboarding's job:** turn a new user into someone who has done the platform's primary action (set a price alert) within 60 seconds of signup, so the welcome email can promise something concrete.

---

## 2. Design principles

1. **Max 4 steps; skippable but not encouraged.** Each onboarding step costs ~10–15% completion (industry standard). 4 steps × 12% = ~40% of new users complete onboarding; lower-step counts complete higher but capture less. The 4-step design optimizes for completion-weighted preference data.
2. **Each step delivers visible value.** Step 1 personalizes the dashboard. Step 2 personalizes search. Step 3 sets the platform's primary action. Step 4 is celebratory + sets retention.
3. **Time-to-value < 60s from signup → first alert set.** Measured from `register/page.tsx:36` redirect to onboarding step 4 confirmation.
4. **Mobile-first.** Each step is a full-screen overlay on mobile, a centered card on desktop. Maximum width 480px on desktop.
5. **Progress indicator visible throughout.** "Step X of 4" + a 4-dot progress bar at the top of every step.
6. **Skippable but not "Skip All".** Each step has a tiny "Skip for now" link; there's no "skip onboarding entirely" button. Skipping a step advances to the next; skipping the last step lands on `/watchlist` (still the goal destination, just without the primary action set).

---

## 3. Route + mount

**Route:** `/onboarding` (new). Single page with internal step state (no URL changes between steps).

**Auth requirement:** must be logged in. If `!user`, redirect to `/login?returnTo=/onboarding`.

**Skip detection:** if the user has already completed onboarding (`user_favorites` row with type `event_category` exists OR `localStorage.onboardingCompleted = '1'`), redirect to `/watchlist`.

**Component file:** `web/src/app/onboarding/page.tsx` (new). Uses internal `useState<1|2|3|4>(1)`.

---

## 4. Step-by-step design

### Step 1: "What kind of events do you follow?"

```
┌──────────────────────────────────────────┐
│  ●  ○  ○  ○        Step 1 of 4           │
│                                          │
│  Welcome! What kind of events            │
│  do you follow?                          │
│  Pick all that apply.                    │
│                                          │
│  ┌──────────────┐  ┌──────────────┐     │
│  │  ⚽           │  │  🎵          │     │
│  │  Sports      │  │  Concerts    │     │
│  └──────────────┘  └──────────────┘     │
│  ┌──────────────┐  ┌──────────────┐     │
│  │  🎭          │  │  🎉          │     │
│  │  Theater     │  │  Festivals   │     │
│  └──────────────┘  └──────────────┘     │
│  ┌──────────────┐  ┌──────────────┐     │
│  │  😂          │  │  🏆          │     │
│  │  Comedy      │  │  World Cup   │     │
│  └──────────────┘  └──────────────┘     │
│                                          │
│  [    Continue     →]                    │
│                                          │
│  Skip for now                            │
└──────────────────────────────────────────┘
```

**Interaction:** tap-to-toggle each tile. At least 1 must be selected to enable Continue (or use Skip for now).

**Backend write:** for each selected category, `INSERT INTO user_favorites (user_id, favorite_type, favorite_name)`. Recommend extending `favorite_type` enum to include `event_category` with values `sports`, `concerts`, `theater`, `festivals`, `comedy`, `world_cup_2026`.

**Why these 6 categories:** they map directly to the platform's existing event-discovery surfaces — `sports` and `concerts` are the dominant Ticketmaster + SeatGeek event types; `theater`, `festivals`, `comedy` are smaller but distinct cohorts; `world_cup_2026` is the platform's headline campaign and the second-most-trafficked landing destination after the homepage.

**Why not allow custom entry:** custom entry forces an autocomplete-against-real-event-types dance; defer to v2.

**Time estimate:** 5–8 seconds.

### Step 2: "Where are you based?"

```
┌──────────────────────────────────────────┐
│  ●  ●  ○  ○        Step 2 of 4           │
│                                          │
│  Pick your city                          │
│  We'll personalize your search results.  │
│                                          │
│  ┌────────────────────────────────────┐  │
│  │ 🔍 Search for your city           │  │
│  │ [Type to search...           ]    │  │
│  └────────────────────────────────────┘  │
│                                          │
│  Popular: New York · Los Angeles · LA    │
│  Chicago · Boston · Miami · Seattle ·    │
│  Dallas · Houston · Atlanta · Phoenix    │
│  · Philadelphia · Denver · Toronto       │
│                                          │
│  [    Continue     →]                    │
│                                          │
│  Skip for now                            │
└──────────────────────────────────────────┘
```

**Interaction:** type-to-search with autocomplete against `data/cities.ts` (37 known city pages). Click a popular-city tag for instant fill. Click Continue.

**Backend write:** `INSERT INTO user_favorites (user_id, favorite_type='city', favorite_name=<city>)`. Single row.

**Outcome:** the next dashboard render reads `user_favorites WHERE favorite_type='city'` on mount and uses it as the default `city` state instead of `'Orlando'`. Day 13 carry-over (dashboard URL-state + city default) is partially solved by this step.

**Why a search box AND popular cities:** search supports any city; popular tags accelerate the 80% of new users in major metros.

**Time estimate:** 5–10 seconds.

### Step 3: "Search for your first event and set a price alert"

```
┌──────────────────────────────────────────┐
│  ●  ●  ●  ○        Step 3 of 4           │
│                                          │
│  Search your first event                 │
│  We'll watch the price for you.          │
│                                          │
│  ┌────────────────────────────────────┐  │
│  │ 🔍 [Lakers, Taylor Swift, etc...] │  │
│  └────────────────────────────────────┘  │
│                                          │
│  [    Search     →]                      │
│                                          │
│  Skip for now                            │
└──────────────────────────────────────────┘

[ON SUBMIT, INLINE BELOW THE SEARCH:]

┌──────────────────────────────────────────┐
│  Top results in {city}                   │
│                                          │
│  ┌──────────────────────────────────┐   │
│  │ Lakers vs Celtics                │   │
│  │ Sat May 30 · 7:30 PM             │   │
│  │ Crypto.com Arena                  │   │
│  │ from $89                          │   │
│  │ [   Set price alert →]           │   │
│  └──────────────────────────────────┘   │
│  ┌──────────────────────────────────┐   │
│  │ Lakers vs Warriors               │   │
│  │ ...                              │   │
│  │ [   Set price alert →]           │   │
│  └──────────────────────────────────┘   │
│                                          │
│  Don't see what you're looking for?      │
│  Try different keywords.                 │
└──────────────────────────────────────────┘
```

**Interaction:** keyword search inline; on submit, run `/api/events/search?city={step2_city}&keyword={input}`. Show the top 3 results with a "Set price alert" CTA on each.

**Click "Set price alert":** opens the **target-price modal** (Day 16 P0). Modal captures: target price (default = current min price × 0.9), confirms email is the user's account email, writes to `watchlist` with `target_price`. Setting the alert advances to step 4.

**Why this step is dependency-blocked:** the target-price modal does not exist yet. Onboarding can ship in a degraded form before target-price (the "Set price alert" CTA falls back to "Add to watchlist" with a "we'll watch but can't alert until you set a target" microcopy), but the *full* effect of onboarding requires the modal. Recommend onboarding shipping in week 4+, after target-price.

**Skip semantics:** if the user clicks "Skip for now", they advance to step 4 *without* a watchlist row written. Step 4 then reads "When you're ready, search for an event and set your first alert."

**Time estimate:** 15–30 seconds (depends on what they search for; searching an arbitrary keyword has API latency).

### Step 4: "You're set!"

**Variant A (alert was set in step 3):**

```
┌──────────────────────────────────────────┐
│  ●  ●  ●  ●        Step 4 of 4           │
│                                          │
│  ✓ You're set!                           │
│                                          │
│  We'll email you the moment              │
│  Lakers vs Celtics drops below $89.      │
│                                          │
│  [    Go to my watchlist  →]             │
│                                          │
│  Want more? Browse trending events.      │
└──────────────────────────────────────────┘
```

**Variant B (step 3 skipped):**

```
┌──────────────────────────────────────────┐
│  ●  ●  ●  ●        Step 4 of 4           │
│                                          │
│  Welcome to TicketScan!                  │
│                                          │
│  When you're ready, search for an        │
│  event and set your first price alert.   │
│  We'll email you the moment it drops.    │
│                                          │
│  [    Start searching  →]                │
│                                          │
│  We'll also email you weekly tips.       │
└──────────────────────────────────────────┘
```

**Click destination:**
- Variant A: `/watchlist` (the watchlist now has at least 1 row; the page is non-empty).
- Variant B: `/dashboard?city=<step2_city>` (search ready to go).

**Backend trigger:** fire `dataLayer.push({event: 'onboarding_completed', has_first_alert: A | B})`. Trigger drip Email 0 (welcome) — see Email Agent handoff in main weekly file.

**Set local flag:** `localStorage.onboardingCompleted = '1'` to prevent re-entry on next visit.

**Time estimate:** 3–5 seconds.

### Total time-to-value (variant A): 28–48 seconds. Hits the <60s target.

---

## 5. Component sketch

```tsx
// web/src/app/onboarding/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import OnboardingStep1 from '@/components/onboarding/Step1';
import OnboardingStep2 from '@/components/onboarding/Step2';
import OnboardingStep3 from '@/components/onboarding/Step3';
import OnboardingStep4 from '@/components/onboarding/Step4';
import ProgressIndicator from '@/components/onboarding/ProgressIndicator';

interface OnboardingState {
  categories: string[];
  city: string | null;
  alert: { eventName: string; targetPrice: number } | null;
}

export default function OnboardingPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [state, setState] = useState<OnboardingState>({
    categories: [],
    city: null,
    alert: null,
  });

  useEffect(() => {
    if (!loading && !user) router.push('/login?returnTo=/onboarding');
    if (typeof window !== 'undefined' && localStorage.getItem('onboardingCompleted') === '1') {
      router.push('/watchlist');
    }
  }, [user, loading, router]);

  if (loading || !user) return null;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8">
        <ProgressIndicator current={step} total={4} />
        {step === 1 && (
          <OnboardingStep1
            selected={state.categories}
            onContinue={(cats) => {
              setState((s) => ({ ...s, categories: cats }));
              setStep(2);
            }}
            onSkip={() => setStep(2)}
          />
        )}
        {step === 2 && (
          <OnboardingStep2
            onContinue={(city) => {
              setState((s) => ({ ...s, city }));
              setStep(3);
            }}
            onSkip={() => setStep(3)}
          />
        )}
        {step === 3 && (
          <OnboardingStep3
            city={state.city}
            onAlertSet={(alert) => {
              setState((s) => ({ ...s, alert }));
              setStep(4);
            }}
            onSkip={() => setStep(4)}
          />
        )}
        {step === 4 && (
          <OnboardingStep4
            hasAlert={!!state.alert}
            alert={state.alert}
            city={state.city}
            onComplete={() => {
              localStorage.setItem('onboardingCompleted', '1');
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                event: 'onboarding_completed',
                has_first_alert: !!state.alert,
                categories_count: state.categories.length,
                city: state.city || null,
              });
              router.push(state.alert ? '/watchlist' : `/dashboard?city=${encodeURIComponent(state.city || '')}`);
            }}
          />
        )}
      </div>
    </div>
  );
}
```

---

## 6. Backend changes

### 6.1 Schema

```sql
-- Extend favorite_type enum (or just allow new strings — depends on how the column is constrained)
-- Add new value: 'event_category'
-- Existing types: 'team', 'artist', 'venue', 'city'
-- New type: 'event_category' (for sports/concerts/theater/festivals/comedy/world_cup_2026)
```

**Verify:** `index.js` user_favorites POST handler accepts arbitrary `favorite_type` strings (likely yes per the existing schema). If constrained to a CHECK/enum, expand it.

### 6.2 New endpoints (or reuse existing)

- `POST /api/favorites` — already exists; called in step 1 (× N categories) and step 2 (× 1 city).
- `GET /api/events/search` — already exists; called in step 3.
- `POST /api/watchlist` — already exists; called by the target-price modal opened in step 3.

**No new endpoints required.**

### 6.3 Drip Email 0 trigger

The drip campaign currently runs daily at 10am UTC. For onboarding-complete users, the welcome email should fire **immediately** on completion, not on the next daily run. Spec a new `index.js` route:

```javascript
// POST /api/onboarding/complete
// (called from the frontend on step 4 completion)
// Triggers welcome email send via existing nodemailer + writes drip_emails_sent (user_id, email_number=0)
```

~1 hr backend work. Composes with the Email Agent handoff in the main weekly file.

---

## 7. Effort

| Item | Effort |
|---|---|
| Step 1 component (category tiles) | 1.5 hrs |
| Step 2 component (city search + popular tags) | 2 hrs |
| Step 3 component (search + result cards + target-price modal trigger) | 2 hrs |
| Step 4 component (variants A/B) | 1 hr |
| ProgressIndicator component | 30 min |
| Onboarding page state machine + skip logic + auth gating | 1.5 hrs |
| Dashboard reads user_favorites for default city | 1 hr |
| Backend: drip Email 0 send hook (`/api/onboarding/complete`) | 1 hr |
| dataLayer.push events × 8 (step start/skip/complete × 4 steps) | 30 min |
| QA (desktop + mobile, all variants A/B, skip paths) | 2 hrs |
| **Total** | **~12 hrs** |

**Excluded** (sequenced separately): the target-price modal itself (8 hrs, Day 16 unmerged); the drip Email 0 template copy (Email Agent scope); Step 3's degraded fallback when target-price modal doesn't exist (1 hr extra if shipping onboarding before target-price).

---

## 8. A/B test ideas (post-ship)

After onboarding ships and runs ≥4 weeks for baseline metrics, candidate tests:

1. **3-step vs 4-step.** Drop step 3 (move alert-setting to post-onboarding). Hypothesis: lower friction increases completion but lowers retention. Measure: completion rate × 7-day retention.
2. **Mandatory step 1 vs skippable.** Force category selection before continue. Hypothesis: more preference data = better personalization downstream. Measure: post-onboarding 30-day engagement on personalized vs un-personalized cohorts.
3. **Step 3 with vs without "popular events in your city" pre-fill.** Pre-fill with the top 3 events in step 2's city. Hypothesis: removing the keyword-typing friction lifts step 3 completion. Measure: step 3 completion rate.

Defer all three until onboarding has been live ≥4 weeks (need baseline data first).

---

## 9. Failure modes & mitigations

1. **User completes step 1+2 but bails on step 3.** They're now in onboarding's "city set, no alert" state. Step 4 variant B (welcome + nudge to dashboard) handles this; the user is still functionally onboarded — they have a personalized dashboard waiting.
2. **User abandons onboarding entirely (closes tab on step 1).** They're logged in but `localStorage.onboardingCompleted` is unset. Next login, redirect to `/onboarding` again — but cap at 2 attempts (track in `localStorage.onboardingAttempts`); after the second abandonment, treat them as "permanently skipped" and stop redirecting. Otherwise we trap users who don't want to onboard in a redirect loop.
3. **User has multiple devices.** `localStorage.onboardingCompleted` is per-browser; a user who onboards on desktop and then signs in on mobile would re-enter onboarding. Mitigation: also write a server-side "onboarded_at" column on `users` (or check `user_favorites` row count > 0); read both on `/onboarding` mount.
4. **Step 3 search returns zero results.** Show "Don't see what you're looking for? Try different keywords." inline, and allow Skip. The step doesn't block on having results.
5. **Backend latency on step 3 search > 5s.** Show loading state. If >10s, show "Slow connection? Skip for now" link. The platform's API is hosted on Railway with reasonable latency, but tickets/search can be slow.
6. **User submits step 3 with a keyword that returns disallowed results.** The existing search excludes hospitality packages (per CLAUDE.md `excludePatterns`). The dedupe logic applies. No additional handling needed.

---

## 10. Open questions for product

1. **Should step 1 categories influence step 2 city autocomplete?** E.g., if the user picked `world_cup_2026`, prioritize WC-host cities? **Recommendation: no for v1; the dependency adds complexity without clear value. Consider for v2.**
2. **Should onboarding run for users who signed up via social SSO (when SSO ships)?** Same flow; same skip semantics. **Confirmed.**
3. **Should there be a "Welcome to TicketScan" video/tutorial in step 4?** **Recommendation: no — the platform's product is fast and self-explanatory; a video adds friction and dates poorly.**
4. **Should onboarding be re-shown to long-dormant users (returning after 90+ days)?** Use case: user onboarded in March, returns in August, may want to update preferences. **Recommendation: no auto-redirect; instead surface "Update your preferences" link in `/favorites`. Simpler.**
5. **Step 3 result count: 3 events. Should we show 5 instead?** **Recommendation: 3.** More results = more decision paralysis on a single-action flow. The user can always skip and search the full dashboard later.
