# Onboarding Flow Design — Week 3 (Compressed Ship-List + Pre-Onboarding Watchlist Intercept)

**Author:** CRO Specialist • **Date:** 2026-05-11 • **Companion to:** `cro-weekly-2026-05-11.md` §5

> **Week 3 on this spec.** The 4-step onboarding (event categories → city → first search → target price) is fully specified in `cro-weekly-2026-05-04--onboarding-flow.md`, including route mount, component skeleton, schema mapping, and instrumentation. **Nothing has shipped.** No `/onboarding` route exists. This week's file compresses to a ship-list and adds **one new path**: the Pre-Onboarding Watchlist Intercept.

---

## 1. State verified today (2026-05-11)

- `/onboarding` route does not exist (`web/src/app/onboarding/` does not exist).
- `register/page.tsx:36` still redirects to `/dashboard`.
- `dashboard/page.tsx:27` still hardcodes `useState('Orlando')` for city — new users land on Orlando regardless of their location.
- `user_favorites` table exists (per CLAUDE.md schema) with types `team`, `artist`, `venue`. **Zero rows are written by any frontend flow.** The schema is fully unused on the user-input side.
- `watchlist` table has `target_price` column. **Zero rows have non-NULL `target_price`** because `EventCard.tsx:43–49` omits the field from the payload.

The retention loop is structurally broken in two places: no preferences captured (so no personalization is possible) and no target prices set (so no price-alert email can fire).

---

## 2. Ship-list — what should ship this week

Onboarding is not a 1-hour ship. The full 4-step flow is ~1 day of dev work. **This week's ship-list is the prerequisites** to onboarding, plus the new intercept path.

| # | Item | File | Effort | Why this week |
|---|---|---|---|---|
| 1 | `targetPrice` input added to `addToWatchlist` flow | `EventCard.tsx:43–49` + new `<WatchlistAddModal>` | 2 hr | Without this, onboarding step 4 has no operational equivalent — onboarding is moot if the path to setting a target price doesn't exist outside it |
| 2 | Pre-Onboarding Watchlist Intercept route handling | `register/page.tsx:36` + `EventCard.tsx:89–94` | 30 min | The right "first action" for users who arrived via EventCard intent — bypasses onboarding |
| 3 | `/dashboard` city default ≠ `'Orlando'` — read from `?city=` param or default to empty (with placeholder text) | `dashboard/page.tsx:27` | 30 min | Removes the worst-case onboarding-less first impression |
| 4 | `/watchlist?welcome=1` welcome banner | `web/src/app/watchlist/page.tsx` | 1 hr | The signup-flow `returnTo` default lands here; needs a meaningful empty state |
| 5 | `/onboarding/page.tsx` scaffold (steps 1–4, skippable) | new `web/src/app/onboarding/` | full day | The full 4-step flow per the 2026-05-04 spec |

Items 1–4 total ~4 hours of dev work. Item 5 is a full day. **Recommend shipping items 1–4 this week** and scoping item 5 for next week.

---

## 3. New this week: Pre-Onboarding Watchlist Intercept

### 3.1 Why this path

The onboarding flow assumes users arrive via the `/register` form with no prior intent context. **Many users arrive via a different path:** they were browsing the dashboard or a venue page, saw an event they liked, clicked the EventCard `+` button, were intercepted by the signup overlay (`EventCard.tsx:80–104`), and registered. **These users have already shown intent for a specific event.** Asking them "what events are you interested in?" (onboarding step 1) is *demoting* their already-revealed preference back to a generic question.

The right path for this cohort: skip onboarding, go straight to setting `target_price` on the event they were looking at.

### 3.2 Implementation

**Step 1: `EventCard.tsx:89-94` — pass intent through the register URL.**

```tsx
// Current
<Link
  href="/register"
  className="block w-full bg-brand hover:bg-brand-dark text-white py-2 px-4 rounded-lg font-medium transition-colors"
>
  Sign Up Free
</Link>

// Target
<Link
  href={`/register?source=eventcard&event_id=${encodeURIComponent(event.id)}&returnTo=${encodeURIComponent(`/watchlist?action=add-target&event_id=${event.id}&event_name=${encodeURIComponent(event.name)}`)}`}
  className="block w-full bg-brand hover:bg-brand-dark text-white py-2 px-4 rounded-lg font-medium transition-colors"
>
  Sign Up Free
</Link>
```

**Step 2: `register/page.tsx:36` — honor `?returnTo=`.**

(Already on the signup-flow ship-list as Fix 2.)

```tsx
const searchParams = useSearchParams();
const returnTo = searchParams.get('returnTo');
// ...
router.push(returnTo || '/watchlist?welcome=1');
```

**Step 3: `/watchlist/page.tsx` — handle `?action=add-target&event_id=X&event_name=Y`.**

On mount, if these URL params are present, the watchlist page:

1. POSTs to `/api/watchlist` with `{ eventId, eventName, ... }` to add the event (the user already showed intent; auto-add).
2. Opens a `<TargetPriceModal>` (new) prompting "Set your target price for [event_name]" with a single number input and a "Save alert" button.
3. On save, PATCHes `/api/watchlist/:id` with `{ target_price }`.
4. Removes the query params from the URL via `router.replace('/watchlist')`.
5. Shows a "Alert set! We'll email you when [event_name] drops to $[target_price] or less." success toast.

**Total time from EventCard `+` click → alert set: ~45 seconds** (assuming a confident user). This is **faster than onboarding** (target was <60s) and delivers a more specific outcome (named alert on a named event vs. generic preferences).

### 3.3 Onboarding vs. Pre-Onboarding decision tree

```
User completes signup
  ↓
Does ?returnTo= param exist in URL?
  ├─ Yes → redirect to returnTo (Pre-Onboarding Watchlist Intercept path)
  └─ No → has user completed onboarding before?
            ├─ Yes (localStorage.onboardingCompleted = '1') → redirect to /watchlist
            └─ No → redirect to /onboarding (full 4-step flow)
```

The full 4-step onboarding is the **default for net-new users** who arrived via the homepage or a navbar Sign Up button. The intercept is for **intent-laden users** who arrived via an event-specific action.

Both paths converge on the same desired end state: a user with at least one watchlist row that has a non-NULL `target_price`. The retention loop is operational once this row exists; the path that produced it matters less than the existence of it.

---

## 4. Stale items from 2026-05-04 spec (still relevant)

- **Step 1: Event-category preference capture.** 6 chips (Sports, Concerts, Theater, Festivals, World Cup, Comedy). Multi-select. Stores rows in `user_favorites` with type `event_category`. Schema change required (`event_category` is not currently in the type enum).
- **Step 2: City selection.** Search input + ~20 popular-city chips. Stores in `user_favorites` with type `city`. Populates `dashboard/page.tsx:27` city default.
- **Step 3: First search.** Renders dashboard's search form pre-populated with the user's city and a generic keyword. Shows results. User clicks `+` on one event.
- **Step 4: Target price.** Modal asks for target price on the just-added event. On save, the user's watchlist has 1 row with a non-NULL `target_price`.

This is the full path from signup to operational retention. All four steps are skippable but each step has a "Skip for now" link, not a "Skip all" button.

Full code skeleton and route mount in `cro-weekly-2026-05-04--onboarding-flow.md`.

---

## 5. Handoffs

- **Content Agent (Agent 1):** copy for the 4-step onboarding (step headlines, body, CTA, skip text) — the 2026-05-04 spec has placeholder copy that needs brand-voice refinement.
- **Content Agent (Agent 1):** copy for the `<TargetPriceModal>` (new, for the Pre-Onboarding Watchlist Intercept path). Headline: "Set your alert for [event]". Body: "We'll email you the moment [event_name] drops to your target or below." CTA: "Save alert". Empty-state placeholder text on the input: a smart default (e.g., 80% of the event's current min price if `priceRanges` is available; otherwise blank).
- **Growth Agent (Agent 8):** cohort instrumentation — measure activation rate (% of new users with ≥1 non-NULL target_price after 7 days) split by signup path (`source=eventcard` vs `source=` empty/homepage). The Pre-Onboarding Intercept path should crush the standard onboarding path on this metric if the design is correct.
- **Analytics Agent (Agent 7):** events `onboarding_started`, `onboarding_step_completed {step, value}`, `onboarding_skipped {step}`, `target_price_set {event_id, target_price, source}`, `target_price_set_path {via: 'onboarding' | 'intercept' | 'manual'}`.

---

## 6. Closing — why onboarding has been Week 3-unbuilt

Onboarding is a 1-day dev project. It has been on every weekly CRO report since 2026-04-13 (Week 1). It is the largest single high-leverage item that *requires net-new code* (vs. the compare-gate refactor and the hero-CTA swap which modify existing files). The dev cost is real but proportional to its impact.

**Recommendation for this week:** ship items 1–4 from the ship-list above (~4 hours total). They unblock the activation path *without* the full onboarding flow. The full `/onboarding` route can ship in 2026-05-18 weekly's window with one focused day of dev. By 2026-05-25 the platform has both the onboarding flow and the intercept path operational.
