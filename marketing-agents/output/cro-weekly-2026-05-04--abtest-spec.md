# A/B Test Spec — Compare Page Hard-gate vs Soft-gate

**Author:** CRO Specialist • **Date:** 2026-05-04 • **Companion to:** `cro-weekly-2026-05-04.md` §2

---

## Test summary

```
A/B Test: Compare Page — Hard-gate vs Soft-gate
Page: /compare
Hypothesis: If we replace the hard auth gate with a soft gate (show comparison content; gate only target-price + watchlist deep actions), then Compare-page anonymous-arrival → signup conversion will increase ≥40% relative because anonymous users currently cannot see the value before the ask.
Control: Current — `compare/page.tsx:87–90` `if (!authLoading && !user) router.push('/login')` — full page redirect to login.
Variant: Soft-gate — render full comparison content for anon users; gate only "Set price alert" and "Add to watchlist" CTAs behind an inline email capture.
Primary metric: anonymous-arrival → signup conversion rate on /compare landings (event: signup_completed where session_origin = 'compare')
Secondary metrics: bounce rate; scroll depth; "Set alert" click rate; navbar `Compare`-link CTR (after navbar-visibility flips with the variant); time-on-page.
Sample size: ~6,000 anon arrivals per arm (MDE 40% relative lift on baseline ~3% signup rate at α=0.05, β=0.8).
Duration: 14 days minimum (covers two weekly traffic cycles incl. weekend skew).
Implementation: variant gate in `compare/page.tsx` keyed off `featureFlags.compareSoftGate` boolean (deterministic visitor-id hash for anon, user-id hash for auth-mid-session edge cases).
```

---

## 1. Why this test, why now

The full reasoning is in the weekly file (§2). In short:

1. **Largest funnel loss on the platform.** Per the §1 funnel audit, ~70% of search→compare traffic is lost at the hard gate. No other A/B test on the candidate list has comparable unit economics.
2. **Underlying fix is already specified (Day 20 unmerged).** The soft-gate spec was written in the 4/20 weekly. The variant code change is well-understood.
3. **It's the only candidate test where control and variant differ materially.** The other 7 candidates from the brief either need new UI to exist first (target-price-modal copy test, signup-form one-step vs two-step, social-proof badges) or test wording variants on a missing component (homepage hero copy — needs `<HomeHeroButtons />` rendered first).
4. **It forces the analytics pipeline to ship.** Day 26 of zero `dataLayer.push`. Wiring this test wires the platform's first conversion-event taxonomy.

---

## 2. Hypothesis derivation

### Why we expect ≥40% relative lift

**Baseline:** the hard gate forces 100% of anon-arrivals to `/login`. Anon→signup rate on the redirected `/login` surface is approximately the platform's baseline signup rate, ~3% (industry benchmark for ticket-domain consumer signup-on-redirect, anchored against the platform's known low absolute volume).

**Variant mechanism for lift:**

- **Content-parity restored.** The page renders the actual side-by-side comparison the JSON-LD claims. Visitors who arrived via SEO see the content they searched for.
- **Value demonstrated before the ask.** The user *sees* `Lakers vs Celtics — $89 (Ticketmaster) vs $124 (SeatGeek), Save $35`. The signup ask now follows a demonstrated value.
- **Inline email-only capture on each card.** "Notify me when this drops to $___" — single-step, single-field. The ask is at the moment of intent (the user just looked at a price), not at page load.

**Why 40% specifically (not 20%, not 80%):**

- 40% is the lower bound of typical content-parity-restoration tests in the e-commerce / aggregator space (Booking.com's 2018 pricing-visibility tests reported 35–60% lifts; Skyscanner reported 28–55%).
- 80% would imply the soft-gate is a near-product-market-fit unlock, which is plausible but optimistic for a low-volume platform without paid traffic. Reserve that as the upside scenario.
- 20% is the floor below which the test would be statistically inconclusive given our sample-size constraints (see §3).

**Failure modes (why the test could lose):**

- If anon arrivals don't have intent (e.g., scraping/bot traffic), the variant gives them the content for free without converting.
- If the inline email capture's copy is weak, the variant captures less than the "redirect to /login" coercion.
- If `signup_completed` has different definitions across the two arms (control = full account, variant = email-only with optional password later), we may need to define a "signup_event" superset that includes both.

These failure modes are addressed in the §6 implementation notes.

---

## 3. Sample-size math

**Baseline signup rate:** ~3% (anon→signup on hard-gate redirect path).
**Minimum detectable effect (MDE):** 40% relative = +1.2 percentage points absolute (3% → 4.2%).
**Significance level:** α = 0.05 (two-tailed).
**Power:** 1 − β = 0.80.

Standard sample-size formula for two-proportion comparison:

```
n = (Z_{α/2} + Z_β)² × [p₁(1−p₁) + p₂(1−p₂)] / (p₁ − p₂)²
n = (1.96 + 0.84)² × [0.03 × 0.97 + 0.042 × 0.958] / (0.012)²
n = 7.84 × [0.0291 + 0.0402] / 0.000144
n = 7.84 × 0.0693 / 0.000144
n ≈ 3,773 per arm
```

Rounding up + adding a 50% buffer for traffic variance and exclusion of bot/scraper sessions: **~6,000 per arm = ~12,000 total.**

**Daily volume estimate for `/compare`:** the page has been a hard gate for 20 days; raw `/compare` URL traffic is unknown without analytics. From sitemap + SEO ranking signals, I estimate ~300–600 anon-arrivals per day (rough; will be calibrated when analytics ships). At 450/day midpoint: 12,000 / 450 ≈ **27 days** to ship. **Run for 14 days minimum** to cover two weekly cycles, accept that the test may need to extend to ~30 days for full power.

**Decision rule:** plan for 14 days; if the leading indicator (Day 7 directional read) shows the variant trending ≥40% lift, ship at Day 14. If trending <40% but >0%, extend to Day 28. If trending negative or flat at Day 7, abort the test, debug instrumentation.

---

## 4. The first five `dataLayer.push` events on the platform

The test cannot run without analytics. Spec the events here so they ship together with the variant.

```typescript
// Event 1: Compare page view (fires on every /compare load, both arms)
window.dataLayer.push({
  event: 'compare_view',
  is_authenticated: !!user,
  test_arm: 'control' | 'variant',
  visitor_id: <stable-uuid>,
  user_id: user?.id || null,
  source: searchParams.get('source') || null,
  event_id: searchParams.get('event_id') || null,
});

// Event 2: Soft-gate alert click (fires on variant only when anon clicks "Notify me")
window.dataLayer.push({
  event: 'compare_alert_set_clicked',
  test_arm: 'variant',
  visitor_id,
  matched_event_id: card.id,
  current_price: card.minPrice,
});

// Event 3: Email capture success (fires on inline form success in variant)
window.dataLayer.push({
  event: 'compare_alert_set',
  test_arm: 'variant',
  visitor_id,
  email_hash: <SHA-256 first 16 chars>,
  matched_event_id: card.id,
  target_price: <numeric>,
  source: 'compare-soft-gate',
});

// Event 4: Signup completed (fires on /register submit; both arms)
window.dataLayer.push({
  event: 'signup_completed',
  visitor_id,
  user_id: <new>,
  source: searchParams.get('source') || 'direct',
  returnTo: searchParams.get('returnTo') || null,
  prior_compare_view: <bool, derived from visitor_id session>,
});

// Event 5: Newsletter subscribed (fires on /api/newsletter/subscribe success site-wide)
window.dataLayer.push({
  event: 'newsletter_subscribed',
  visitor_id,
  email_hash: <SHA-256 first 16 chars>,
  source: <component source string>,
});
```

**`visitor_id` strategy:**

```typescript
// Add to web/src/lib/visitor.ts (new file, ~15 lines)
export function getVisitorId(): string {
  if (typeof window === 'undefined') return 'ssr';
  let id = localStorage.getItem('vid');
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem('vid', id);
  }
  return id;
}
```

**Test-arm assignment:**

```typescript
// Add to web/src/lib/featureFlags.ts (new file, ~25 lines)
import { getVisitorId } from './visitor';

function hash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

export function compareSoftGateArm(): 'control' | 'variant' {
  const vid = getVisitorId();
  return hash(vid + ':compareSoftGate') % 2 === 0 ? 'control' : 'variant';
}
```

50/50 split, deterministic per visitor, persisted via `localStorage`. If the visitor clears localStorage they're rebucketed — accept this as ~5% noise (industry standard).

---

## 5. Variant code (the actual change)

The control is **today's `compare/page.tsx`**. The variant requires three changes to the same file plus one inline email-capture form.

### Change 1: replace the hard-gate redirect with a flag check

```typescript
// web/src/app/compare/page.tsx — current line 86–90
// REMOVE:
//   if (!authLoading && !user) {
//     router.push('/login');
//     return null;
//   }

// REPLACE WITH:
import { compareSoftGateArm } from '@/lib/featureFlags';
const arm = compareSoftGateArm();
const isAnon = !authLoading && !user;
const isSoftGate = isAnon && arm === 'variant';

if (isAnon && arm === 'control') {
  router.push('/login');
  return null;
}
// otherwise: render the full page (auth users see deep actions enabled; soft-gate anon sees inline capture)
```

### Change 2: per-card inline price-alert capture (variant only)

After each matched-event card (today the matched-event cards are rendered around `compare/page.tsx` ~line 250–350; precise location depends on the current matched-render block), insert:

```tsx
{isSoftGate ? (
  <CompareAlertCapture
    eventId={match.ticketmaster?.id || match.seatgeek?.id || ''}
    eventName={match.name}
    currentPrice={Math.min(match.ticketmaster?.minPrice ?? Infinity, match.seatgeek?.minPrice ?? Infinity)}
  />
) : (
  <Link
    href={`/watchlist?prefill=${encodeURIComponent(match.name)}`}
    className="..."
  >
    Set price alert
  </Link>
)}
```

### Change 3: navbar `Compare` visibility flip for variant arm

```typescript
// web/src/components/Navbar.tsx — currently `Compare` only shown to user (line 62)
// Add: also show to anon users in the variant arm
const navbarShowsCompare = !!user || compareSoftGateArm() === 'variant';
```

### New component: `CompareAlertCapture.tsx`

```tsx
'use client';

import { useState } from 'react';
import { getVisitorId } from '@/lib/visitor';

export default function CompareAlertCapture({
  eventId,
  eventName,
  currentPrice,
}: {
  eventId: string;
  eventName: string;
  currentPrice: number;
}) {
  const [email, setEmail] = useState('');
  const [target, setTarget] = useState(Math.floor(currentPrice * 0.9));
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'compare_alert_set_clicked',
      test_arm: 'variant',
      visitor_id: getVisitorId(),
      matched_event_id: eventId,
      current_price: currentPrice,
    });

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL!;
      const res = await fetch(`${apiUrl}/api/newsletter/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'compare-soft-gate' }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        window.dataLayer.push({
          event: 'compare_alert_set',
          test_arm: 'variant',
          visitor_id: getVisitorId(),
          matched_event_id: eventId,
          target_price: target,
          source: 'compare-soft-gate',
        });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="mt-2 p-3 bg-green-50 text-green-700 text-sm rounded">
        ✓ We'll email you when {eventName} drops to ${target}.
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="mt-2 flex flex-col sm:flex-row gap-2 text-sm">
      <span className="text-gray-700 self-center">Notify me at</span>
      <input
        type="number"
        min={1}
        max={currentPrice}
        value={target}
        onChange={(e) => setTarget(parseInt(e.target.value, 10) || 0)}
        className="w-24 px-3 py-2 border border-gray-300 rounded"
      />
      <input
        type="email"
        required
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 px-3 py-2 border border-gray-300 rounded"
        autoComplete="email"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="bg-brand text-white px-4 py-2 rounded font-medium"
      >
        {status === 'loading' ? '...' : 'Set alert'}
      </button>
    </form>
  );
}
```

**Why this captures email + target price together (not just email):** the §1 weekly funnel audit identifies "no `target_price`" as the central retention failure. The compare-page variant *is* the right form for both — the user is looking at a price, has decided they want it lower, and is ready to specify "lower than what." Capturing both at once means the variant's `compare_alert_set` event composes directly with a `watchlist` row write (when the email-only signup converts to a full account, the prior alert can be backfilled via email).

---

## 6. Implementation notes (failure-mode mitigations)

1. **Bot/scraper exclusion.** Add `if (navigator.webdriver || /bot|crawler|spider/i.test(navigator.userAgent)) return null;` to the test-arm-assignment hook so bots see neither arm.
2. **Signup-event definition consistency.** The variant's `compare_alert_set` event is *email-only*; the control's `signup_completed` is a *full account*. For the primary metric, define a superset: `compare_funnel_conversion = signup_completed OR compare_alert_set`. Track both arms on the superset for parity.
3. **Inline-form abandonment recovery.** If the user types an email but doesn't click submit, fire a `compare_alert_email_typed` event on blur (debounced) so we measure intent even when conversion fails. This isn't a metric for the test but is useful for post-test diagnosis.
4. **Mobile-keyboard behavior.** Test the inline form with iOS + Android keyboards. The number input should default to numeric keyboard (`inputMode="numeric"` if needed); the email input should default to email keyboard.
5. **Copy A/B within the variant.** Optional secondary test: "Notify me at" vs "Watch this price" vs "Track when it drops." This is a within-variant copy test, not a control-vs-variant test. Defer until the primary test is complete.

---

## 7. Success / failure criteria

**Ship-the-variant criteria** (all required):

1. Day-14 read shows variant `compare_funnel_conversion` ≥ 40% relative to control.
2. Variant bounce rate is ≤ control bounce rate (no SEO-traffic-quality regression).
3. Variant time-on-page is ≥ control × 1.5 (engagement-with-content signal).
4. No instrumentation issues (event-fire counts on `compare_view` are within 5% across arms).

**Abort criteria** (any one triggers abort + diagnose):

1. Variant `compare_funnel_conversion` is < 50% of control at Day 7 (suggests the inline form is broken or the variant rendering has a JS error).
2. Variant bounce rate is > control × 1.3 (signals the variant is somehow worse for engagement, e.g., a layout regression).
3. Variant `compare_view` event-fire count is < control × 0.7 (instrumentation bug; the variant page is failing to mount the dataLayer push).

**Inconclusive criteria** (run longer):

1. Day-14 read shows lift between 0–40%. Extend to Day 28 for fuller power.

**Post-ship plan:**

If the variant wins, ship the variant code path as the default and remove the feature flag and the control branch. **Do not retain both code paths — feature-flag debt is a documented anti-pattern.** Net code change post-ship: net negative LoC (the redirect block + flag wiring both go away; the inline form stays as a permanent feature).

---

## 8. Test calendar (looking ahead)

Recommended next 4 tests after this one wins:

| # | Test | Earliest start | Dependency |
|---|---|---|---|
| 1 | Compare hard-gate vs soft-gate (this spec) | Week 1 (after items 1–7 ship) | — |
| 2 | Signup form: 1-step vs 2-step (email-only first) | Week 5 | Signup-flow rewrite (see signup-flow.md) |
| 3 | EventCard "Compare prices" CTA: present vs absent | Week 5 | Item #2 from weekly ship list (EventCard CTA addition) |
| 4 | Watchlist CTA copy: "Track" vs "Get alerts" vs "Watch price" | Week 7 | Target-price modal ships |
| 5 | Homepage hero copy A/B: "Compare Ticket Prices" vs "Find the Cheapest Tickets" vs "Save $X on Your Next Ticket" | Week 4 | Homepage P0 cluster ships first; cannot run on a hero with a fabricated savings stat |

The test calendar assumes one test running at a time on each surface. Multiple parallel tests on the same surface (e.g. Compare gate × Compare CTA copy) require multivariate analysis — not recommended for a platform that's never run a single A/B test.

---

## 9. Effort summary

- **Variant code** (compare page + Navbar + new `CompareAlertCapture.tsx`): 4 hrs
- **Analytics pipeline** (`visitor.ts` + `featureFlags.ts` + 5 events + dataLayer integration): 3 hrs
- **GTM dashboard** (one report per primary + secondary metric, segmented by `test_arm`): 2 hrs
- **QA** (5 events × 2 arms × desktop/mobile = 20 manual checks): 2 hrs
- **Test running**: 14–28 days passive
- **Post-test cleanup** (remove flag, ship winner): 1 hr

**Total dev effort to ship + instrument + analyze: 12 hrs** (~1.5 dev days).

The 12 hrs is also the effort to run **every subsequent A/B test on the platform**, since the analytics pipeline is reusable. This is the single highest-leverage 12 hrs of test-infrastructure work available — it makes A/B testing a permanent capability.
