# Popup & Modal Strategy

**Author:** CRO Specialist • **Date:** 2026-05-04 • **Companion to:** `cro-weekly-2026-05-04.md` §4

---

## 1. Current state

**There are no popups.** Grep across `web/src/components/` confirms zero `*Popup*`, zero `*Modal*` matches outside the `EventCard` register-intercept overlay (`EventCard.tsx:80–104`), which is a register-required interrupt, not an email-capture popup.

The 4/27 weekly and the 5/04 daily both flag this as a 12+-day formalized gap. Today's strategy designs four distinct popup types across distinct trigger contexts. All four reuse the existing `<NewsletterSignup variant="inline">` form, so the backend dependency is zero. Each popup mounts at a strategic location in the route tree.

---

## 2. Popup types & trigger contexts

| # | Popup | Trigger | Audience | Composes with |
|---|---|---|---|---|
| 1 | Exit-intent newsletter | Mouse-up to top edge (desktop) / 30s timer (mobile) | All anon site-wide except suppressed paths | Every broken capture funnel |
| 2 | Compare-page price-alert inline modal | Click on "Notify me when this drops" CTA in compare card | Anon on /compare (after soft-gate) | Compare soft-gate; target-price modal |
| 3 | Welcome-back return-visitor toast | `localStorage.lastVisitedAt` >7 days; logged-in; ≥1 watchlist item | Logged-in returning users with prior watchlist | Watchlist surface; price-history infrastructure |
| 4 | Compare-page scroll soft-capture band | Scroll past 3rd matched-card on /compare | Anon on /compare engaged with content | Compare soft-gate |

---

## 3. Popup #1 — Exit-Intent Newsletter Popup

### Spec (finalized in `cro-daily-2026-05-04.md`; reproduced for completeness)

**File:** `web/src/components/NewsletterPopup.tsx` (new, ~120 lines).

**Trigger:**
- Desktop: mouse-move with `clientY <= 20` and rapid upward velocity → fires once per session.
- Mobile: `setTimeout(showPopup, 30000)` (30s on page) → fires once per session.

**Frequency cap:**
- Once per browser session via `sessionStorage.setItem('newsletterPopupShown', '1')`.
- Don't fire if `localStorage.getItem('newsletterSubscribed') === '1'` (set by existing `NewsletterSignup` `handleSubmit` success branch).

**Suppressed contexts:** `/login`, `/register`, `/dashboard`, `/watchlist`, any URL with `?utm_source=email`.

**Mount point:** `web/src/app/layout.tsx`, just below `<Navbar />`.

**Required adjacent changes (5 min):**
1. `NewsletterSignup.tsx` `handleSubmit` success branch: `localStorage.setItem('newsletterSubscribed', '1')`.
2. `dataLayer.push` events: `newsletter_popup_shown` on open, `newsletter_subscribed` (with `source="exit-intent-popup"`) on success.

### Component

```tsx
'use client';

import { useEffect, useState, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import NewsletterSignup from './NewsletterSignup';

const SUPPRESSED_PATHS = ['/login', '/register', '/dashboard', '/watchlist'];
const SESSION_KEY = 'newsletterPopupShown';
const SUBSCRIBED_KEY = 'newsletterSubscribed';

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const shouldSuppress = useCallback(() => {
    if (typeof window === 'undefined') return true;
    if (SUPPRESSED_PATHS.some((p) => pathname.startsWith(p))) return true;
    if (sessionStorage.getItem(SESSION_KEY) === '1') return true;
    if (localStorage.getItem(SUBSCRIBED_KEY) === '1') return true;
    if (new URLSearchParams(window.location.search).get('utm_source') === 'email') return true;
    return false;
  }, [pathname]);

  useEffect(() => {
    if (shouldSuppress()) return;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    if (isMobile) {
      const t = setTimeout(() => {
        if (shouldSuppress()) return;
        setIsOpen(true);
        sessionStorage.setItem(SESSION_KEY, '1');
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: 'newsletter_popup_shown', source: 'time-30s-mobile' });
      }, 30_000);
      return () => clearTimeout(t);
    }

    let prevY = 0;
    const onMouseMove = (e: MouseEvent) => {
      const movingUp = e.clientY < prevY;
      prevY = e.clientY;
      if (e.clientY <= 20 && movingUp) {
        if (shouldSuppress()) return;
        setIsOpen(true);
        sessionStorage.setItem(SESSION_KEY, '1');
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: 'newsletter_popup_shown', source: 'exit-intent-desktop' });
        document.removeEventListener('mousemove', onMouseMove);
      }
    };
    document.addEventListener('mousemove', onMouseMove);
    return () => document.removeEventListener('mousemove', onMouseMove);
  }, [shouldSuppress]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="newsletter-popup-title"
      onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}
    >
      <div className="bg-white rounded-2xl max-w-md w-full p-6 relative shadow-2xl">
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close"
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
        <h3 id="newsletter-popup-title" className="text-xl font-heading font-bold text-navy mb-2 pr-8">
          Wait — before you go.
        </h3>
        <p className="text-gray-500 text-sm mb-5">
          Get our weekly ticket-buying tips. Free, no spam, unsubscribe anytime.
        </p>
        <NewsletterSignup variant="inline" source="exit-intent-popup" />
      </div>
    </div>
  );
}
```

### Copy variants for A/B (hand to Content Agent)

| Headline | Body | CTA |
|---|---|---|
| Wait — before you go. (control) | Get our weekly ticket-buying tips. Free, no spam, unsubscribe anytime. | Get tips |
| Don't pay full price. | Get a heads-up when prices drop on the events you care about. | Set free alerts |
| One thing before you leave. | Be the first to know when ticket prices drop. Takes 10 seconds. | Sign me up |

Test these variants only after the popup is shipped and instrumented for ≥4 weeks.

### Expected conversion

2–5% of would-bounce traffic → email. Industry-standard exit-intent baseline.

### Effort: 3 hrs

- Component (with a11y + suppression logic): 2 hrs
- Layout mount + dataLayer wiring + `localStorage` flag in NewsletterSignup: 30 min
- QA (desktop exit-intent, mobile timer, session/local suppression, path suppression, dataLayer fire): 30 min

---

## 4. Popup #2 — Compare-Page Price-Alert Inline Modal

**Sequenced after** the Compare soft-gate (Day 20 unmerged) and the target-price modal (Day 16). The trigger is the soft-gate's per-card "Notify me when this drops" CTA.

### Spec

**File:** `web/src/components/CompareAlertModal.tsx` (new, ~140 lines).

**Trigger:** click on "Notify me when this drops" CTA in any compare-result card.
- Anon: opens this modal (email-only + target price).
- Auth: opens the in-watchlist target-price modal directly (different component, shared validation logic).

**Frequency cap:** none — the user is acting; the modal is the form for the action.

**Mobile adaptation:** full-screen sheet that slides up from the bottom (iOS-pattern), Cancel button in the top-right.

### Component (sketch)

```tsx
'use client';

import { useState } from 'react';
import { getVisitorId } from '@/lib/visitor';

export default function CompareAlertModal({
  eventId,
  eventName,
  currentPrice,
  open,
  onClose,
}: {
  eventId: string;
  eventName: string;
  currentPrice: number;
  open: boolean;
  onClose: () => void;
}) {
  const [email, setEmail] = useState('');
  const [target, setTarget] = useState(Math.floor(currentPrice * 0.9));
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  if (!open) return null;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL!;
      const res = await fetch(`${apiUrl}/api/newsletter/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'compare-alert-modal' }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'compare_alert_set',
          visitor_id: getVisitorId(),
          matched_event_id: eventId,
          target_price: target,
          source: 'compare-alert-modal',
        });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-end sm:items-center justify-center z-50 p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-t-2xl sm:rounded-2xl max-w-md w-full p-6 shadow-2xl">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-heading font-bold text-navy">Notify me when this drops</h3>
          <button onClick={onClose} aria-label="Close" className="text-gray-400 hover:text-gray-600">×</button>
        </div>
        {status === 'success' ? (
          <div className="bg-green-50 text-green-700 p-4 rounded">
            ✓ We'll email you when {eventName} drops to ${target}.
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-3">
            <p className="text-sm text-gray-600">
              {eventName} — currently ${currentPrice}
            </p>
            <label className="block text-sm">
              <span className="text-gray-700">Notify me when prices drop to:</span>
              <input
                type="number"
                inputMode="numeric"
                min={1}
                max={currentPrice}
                value={target}
                onChange={(e) => setTarget(parseInt(e.target.value, 10) || 0)}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded"
              />
            </label>
            <label className="block text-sm">
              <span className="text-gray-700">Email</span>
              <input
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded"
              />
            </label>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-brand text-white py-3 rounded font-medium"
            >
              {status === 'loading' ? '...' : 'Set my alert'}
            </button>
            <p className="text-xs text-gray-500 text-center">
              ✓ Free  ✓ No spam  ✓ Cancel anytime
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
```

### Why bottom-sheet on mobile

iOS users expect bottom-sheet patterns for in-context actions; full-screen modals on mobile are reserved for navigation context. The bottom-sheet stays visually anchored to the comparison card the user just acted on, reinforcing the action context.

### Expected conversion

25–40% of clicks → email + target captured. High because the user just demonstrated intent by clicking "Notify me"; the modal *is* the form for the intent, not an interruption.

### Effort: 2 hrs

Composes with the §3 inline form and the target-price modal (shared validation logic, shared `addToWatchlist` API call signature once `targetPrice` is added to the payload).

---

## 5. Popup #3 — Welcome-Back Return-Visitor Toast (low-priority)

**Trigger:** any visit where:
- `localStorage.lastVisitedAt` is >7 days old, AND
- the user is logged in (via `useAuth`), AND
- the user has at least 1 watchlist item.

**Mount point:** `app/layout.tsx`, conditionally rendered on auth state.

**Frequency cap:** once per `localStorage.lastVisitedAt` reset (the toast updates the `lastVisitedAt` on dismiss).

**Mobile adaptation:** same toast component, bottom-anchored on mobile.

### Component (sketch)

```tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import api from '@/lib/api';

const KEY = 'lastVisitedAt';
const DAYS_THRESHOLD = 7;

export default function ReturnVisitorToast() {
  const { user } = useAuth();
  const [show, setShow] = useState(false);
  const [changedCount, setChangedCount] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!user) return;

    const last = localStorage.getItem(KEY);
    const now = Date.now();
    if (last) {
      const days = (now - parseInt(last, 10)) / (1000 * 60 * 60 * 24);
      if (days >= DAYS_THRESHOLD) {
        // Fetch count of watchlist events with price changes since `last`
        api.getWatchlistChanges(parseInt(last, 10)).then((n) => {
          if (n > 0) {
            setChangedCount(n);
            setShow(true);
          }
        }).catch(() => {});
      }
    }
    localStorage.setItem(KEY, String(now));
  }, [user]);

  if (!show || changedCount === null) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 bg-navy text-white rounded-xl shadow-2xl px-5 py-3 max-w-sm flex items-center gap-3">
      <span className="text-2xl">👋</span>
      <div className="flex-1 text-sm">
        <p className="font-medium">Welcome back!</p>
        <p className="text-white/70">Prices changed on {changedCount} {changedCount === 1 ? 'event' : 'events'} you tracked.</p>
      </div>
      <Link
        href="/watchlist"
        className="bg-white text-navy text-xs font-medium px-3 py-1 rounded"
        onClick={() => setShow(false)}
      >
        View
      </Link>
      <button onClick={() => setShow(false)} className="text-white/50 hover:text-white" aria-label="Dismiss">×</button>
    </div>
  );
}
```

### Required backend support

A new helper endpoint or query: `GET /api/watchlist/changes?since={timestamp}` returning `{ count: N }` for the authenticated user — count of `watchlist` events whose latest `price_history.checked_at` is more recent than `since` AND whose latest `min_price` differs from the prior `min_price` for that event.

**Effort:** 4 hrs (2 hrs backend query + 2 hrs frontend component + QA).

### Why low-priority

The prerequisite is a *functioning* watchlist with target-price-driven alerts. Until the target-price modal ships, the watchlist is structurally inert — the toast has nothing meaningful to say. Reordering: ship target-price modal → ship onboarding → ship welcome-back toast.

### Expected conversion

Click-through to `/watchlist`: 30–50% (high — logged-in returning user with prior watchlist activity).

---

## 6. Popup #4 — Compare-Page Scroll Soft-Capture Band (medium-priority)

**Trigger:** anon user, `/compare` page, scrollY past `#compare-result-card-3` (the third matched-event card).

**Frequency cap:** once per `/compare` session (sessionStorage).

**Mount point:** `compare/page.tsx`, conditionally rendered when `isSoftGate && cardsScrolled >= 3`.

### Component

```tsx
'use client';

import { useEffect, useState } from 'react';
import NewsletterSignup from './NewsletterSignup';

export default function CompareScrollBand() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('compareScrollBandShown') === '1') {
      setDismissed(true);
      return;
    }
    const handle = () => {
      const target = document.getElementById('compare-result-card-3');
      if (!target) return;
      const rect = target.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        setShow(true);
        sessionStorage.setItem('compareScrollBandShown', '1');
        window.removeEventListener('scroll', handle);
      }
    };
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);

  if (!show || dismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 bg-navy text-white px-4 py-3 shadow-2xl">
      <div className="max-w-3xl mx-auto flex items-center gap-3">
        <span className="text-xl hidden sm:inline">📬</span>
        <p className="flex-1 text-sm">
          Set price alerts on the events you're comparing — free.
        </p>
        <div className="flex-shrink-0 w-64 hidden sm:block">
          <NewsletterSignup variant="inline" source="compare-scroll-band" />
        </div>
        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
          className="text-white/50 hover:text-white text-xl"
        >
          ×
        </button>
      </div>
    </div>
  );
}
```

### Mobile adaptation

The full inline form is desktop-only (the bottom band has limited horizontal real estate on mobile). Mobile shows a single CTA button "Get alerts →" that opens the same `CompareAlertModal` from popup #2 — letting the soft-capture band defer to the action-modal on mobile.

### Expected conversion

8–15% of scroll-engaged anon traffic → email.

### Effort: 1 hr

---

## 7. Sequencing & dependencies

```
Week 1: ship items 1–7 from cumulative ship-order (1.5 hrs cleanup work)
Week 1–2: ship Popup #1 (exit-intent newsletter) — 3 hrs
Week 2: ship Compare soft-gate (Day 20 unmerged) — 4 hrs
Week 2: ship Popup #4 (compare scroll band) — 1 hr [depends on soft-gate]
Week 3: ship target-price modal (Day 16 unmerged) — 8 hrs
Week 3: ship Popup #2 (compare alert modal) — 2 hrs [depends on soft-gate + target-price]
Week 4+: ship onboarding flow — 12 hrs
Week 4+: ship Popup #3 (welcome-back toast) — 4 hrs [depends on functioning retention loop]

Total popup work: 10 hrs across 4 weeks (excluding the prerequisite cleanup + soft-gate + target-price work).
Total program work: 10 hrs (popups) + 13 hrs (soft-gate + target-price + onboarding) + 1.5 hrs (cleanup) = ~25 hrs / 3 dev days.
```

### Why this sequencing

Each popup depends on a structurally different surface:
- Popup #1: zero dependencies — wraps existing form.
- Popup #4: depends on the soft-gate (no comparison content for anon to scroll past today).
- Popup #2: depends on the soft-gate + target-price modal (the modal action targets a watchlist row with a `target_price`).
- Popup #3: depends on the entire retention loop (price-history changes since `lastVisitedAt`).

Shipping in order matches the dependency graph. Skipping ahead breaks the popups silently.

---

## 8. Per-popup expected-conversion summary

| Popup | Audience size (estimate) | Conversion | New emails captured/wk (estimate) |
|---|---|---|---|
| #1 Exit-intent | ~80% of all anon arrivals (the 20% suppressed paths) | 2–5% | 50–200 |
| #2 Compare alert modal | Users who click the soft-gate CTA | 25–40% | 20–80 |
| #3 Welcome-back toast | Auth users with watchlist + 7-day gap | not-a-capture; engagement | retention metric |
| #4 Compare scroll band | Anon users on /compare past 3rd card | 8–15% | 10–40 |

**Combined: ~80–320 new newsletter subscribers per week** once all four popups ship and the prerequisite surfaces (soft-gate + target-price) are live.

For context: Day 26 of zero `dataLayer.push` means we don't know the *current* newsletter subscription rate. The numbers above are projections against industry benchmarks for the relevant trigger contexts. Calibrate after the first week of measurement.

---

## 9. A11y checklist (applies to all four popups)

- `role="dialog"` and `aria-modal="true"` on the modal container
- `aria-labelledby` pointing to the popup headline
- Close button is a `<button type="button">` with `aria-label="Close"`
- Escape key closes the popup
- Focus trap inside the popup while open
- Focus restores to the triggering element on close
- Background scroll is locked while modal is open (`document.body.style.overflow = 'hidden'`)
- No popup auto-fires before the user has interacted with the page (browser-blocking risk)
- Toast (popup #3) uses `role="status"` (non-modal); doesn't trap focus

---

## 10. Open questions for product

1. **Frequency cap on Popup #1 across multiple sessions?** Currently the spec is once-per-session; a returning user gets the popup once on Day 1 and again on Day 2 (different session). Industry standard for exit-intent allows this. **Recommendation: ship as specified; review after 4 weeks of data.**
2. **Should Popup #1 fire on `/event/[id]` after that page's hard-gate is removed?** Currently `/event/[id]` redirects to `/login` (Day 18), so the popup never gets to render. Once the page renders for anon, Popup #1 should fire on it (no path-suppression). **Confirmed in spec.**
3. **Should Popup #2 mobile bottom-sheet have swipe-down-to-dismiss?** iOS-pattern users expect this. **Recommendation: yes; add `react-swipeable` or vanilla pointer events. Adds ~30 min to effort.**
4. **Newsletter unsubscribed flag.** Today's spec uses `localStorage.newsletterSubscribed = '1'` to suppress popups for already-subscribed users. **What if the user unsubscribes via email link?** Recommend backend support: `POST /api/newsletter/unsubscribe` should also surface a query-param-based unsubscribe link that, when visited in browser, clears the localStorage flag. ~30 min addition.
