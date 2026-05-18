# Onboarding Flow Design — Week 4 Ship-List

Date: 2026-05-18 (Monday) • Companion to `cro-weekly-2026-05-18.md` §5 • Long-form spec: `cro-weekly-2026-05-04--onboarding-flow.md` (still load-bearing)

> **This is a compressed tactical ship-list with two branching paths added:** the pre-onboarding watchlist intercept (carryover from 5/11, Day +7 unbuilt) and the WC-aware onboarding fork (new this week).

---

## 1. Current state (byte-confirmed today 2026-05-18)

```
grep -rln "onboarding" web/src/app/  →  0 matches
ls web/src/app/onboarding/           →  No such file or directory
```

**The `/onboarding` route does not exist.** No onboarding component, page, or flow has been built in the 14 days since the 5/4 long-form spec.

**Current post-signup experience:**

1. `register/page.tsx:36` — `router.push('/dashboard')`
2. `dashboard/page.tsx:27` — `useState('Orlando')` city default
3. **First authenticated screen: an empty Orlando search box, no greeting, no orientation, no next-action prompt.**

For a brand-new user in (say) Seattle, the first thing the platform does after they hand over an email and password is search Orlando. Even before onboarding exists, this is a bug. See `cro-weekly-2026-05-18--signup-flow.md` §3 Observation B — S8 fixes the immediate symptom (route to `/watchlist?empty=welcome` instead) in 10 minutes.

## 2. Onboarding architecture (4 steps, unchanged from 5/4 long-form)

| Step | Question | Output |
|---|---|---|
| 1 | "What events are you into?" — multi-select: Sports / Concerts / Theater / **World Cup 2026** (highlighted T-24 to T+0) | Writes 1+ rows to `user_favorites` with `favorite_type='category'` |
| 2 | "Which city should we default to?" — searchable input, geo-IP suggest, fallback to a top-10 list | Writes 1 row to `user_favorites` with `favorite_type='city'` |
| 3 | "Let's find your first event" — pre-filled search using step 1 + step 2, surfaces 6 matching event cards with target-price field shown by default | User picks an event, sets a target price, clicks "Set Alert" |
| 4 | "You're set." — confirmation screen with summary (X events tracked, alert active for Y) and "Go to dashboard" CTA | None — closes the flow |

**Time-to-value target:** <60 seconds from signup to first price alert set. Each step delivers visible value; the final step is the *first authenticated screen where the user has done something for themselves*, not for the platform.

**Skip behavior:** Each step shows a small "Skip for now" — present but de-emphasized. Step 3 specifically should *not* be easily skippable; it is the load-bearing step that creates the first `target_price`-set watchlist row (the platform's single biggest data gap).

## 3. Branching paths

### 3.1 Pre-onboarding watchlist intercept *(carryover from 5/11, Day +7 unbuilt)*

**Trigger:** User clicks the `+` watchlist button on an `EventCard` while anon (`EventCard.tsx:80–104` overlay shows). User clicks "Sign Up Free." Currently routes to `/register` with no context.

**Desired flow:**

1. EventCard overlay's "Sign Up Free" link becomes:
   ```tsx
   href={`/register?returnTo=/watchlist?action=add-target&event_id=${event.id}&source=eventcard`}
   ```
2. User completes register form.
3. `register/page.tsx:36` reads `?returnTo=` and routes there instead of `/dashboard` (depends on `S6` in `cro-weekly-2026-05-18--signup-flow.md`).
4. `/watchlist?action=add-target&event_id=X` mounts the watchlist page with a modal pre-open, asking "Set your target price for [event name]?" — single field, one button.
5. User sets target, submits. Done.

**Bypass onboarding:** This path *intentionally skips the 4-step onboarding* because the user has already demonstrated event-specific intent. Pushing them through 4 generic questions when they already clicked a specific event would be friction without value. **Onboarding fires for users who arrived at `/register` directly** (top-of-funnel signups), not for users who came via watchlist-intent.

**Effort:** ~30 minutes once `?returnTo=` capture is shipped on the register page. Cannot ship until `S6` lands.

### 3.2 WC-aware onboarding fork *(NEW this week, T-24-driven)*

**Trigger:** User completes register form AND HTTP referer is `https://ticketscan.io/world-cup-2026/*` OR `?source=wc_*` query param is set (covers popup-driven traffic from `cro-weekly-2026-05-18--popup-strategy.md`).

**Desired flow:**

1. Onboarding mounts at `/onboarding?wc=1`.
2. **Step 1 (categories):** "World Cup 2026" is pre-selected and bolded; other categories shown but unchecked. Copy: "Looks like you're here for the World Cup. We've pre-selected it — pick anything else you're into."
3. **Step 2 (city):** default the city to the nearest WC host city based on the stadium-referer:
   - `/world-cup-2026/metlife-stadium` → New York, NY
   - `/world-cup-2026/sofi-stadium` → Los Angeles, CA
   - `/world-cup-2026/hard-rock-stadium` → Miami, FL
   - `/world-cup-2026/at-t-stadium` → Dallas, TX
   - `/world-cup-2026/mercedes-benz-stadium` → Atlanta, GA
   - `/world-cup-2026/lumen-field` → Seattle, WA
   - `/world-cup-2026/levis-stadium` → San Francisco, CA
   - `/world-cup-2026/gillette-stadium` → Boston, MA
   - `/world-cup-2026/lincoln-financial-field` → Philadelphia, PA
   - `/world-cup-2026/nrg-stadium` → Houston, TX
   - `/world-cup-2026/arrowhead-stadium` → Kansas City, MO
   - Canada/Mexico stadiums → use stadium city directly
4. **Step 3 (first search):** pre-filled with the matching WC matches at that stadium (using the existing `worldcup.ts` data). Shows 4–6 match cards with target-price field on each.
5. **Step 4 (confirmation):** "You're set for the World Cup." Includes "T-24 days to kickoff" line so the user internalizes the urgency on exit.

**Why this fork is load-bearing this week:** The popup strategy (`cro-weekly-2026-05-18--popup-strategy.md`) explicitly deposits hundreds of `source=wc_*` emails into `newsletter_subscribers` between now and 6/11. *Some fraction will register.* The WC-aware fork is what turns the "I gave you my email about the World Cup" signal into a "I have one specific WC match in my watchlist with a target price set" outcome. Without this fork, the WC-curious cohort lands on a generic 4-step onboarding that asks them what they're interested in — *after* they already told us by clicking through a stadium-specific popup. That redundancy is the kind of friction that kills the funnel right before the conversion event.

**Effort:** ~2 hours on top of the base onboarding (Step 1 default-checked, Step 2 lookup map, Step 3 worldcup.ts query, Step 4 copy variant). All pure-frontend.

### 3.3 Default path (no referer, no `?source=`)

Standard 4-step flow per §2 above. ~4 hours total to build from zero.

## 4. Ship-list (this week)

| # | Item | File | Effort | Depends on | Notes |
|---|---|---|---|---|---|
| O1 | Create route `web/src/app/onboarding/page.tsx` with step-1 (categories) only | new file | 1 hr | S5/S6 in signup-flow (param capture); none for step 1 itself | First step is a 4-checkbox screen — no backend dependency for step 1 alone |
| O2 | Add Step 2 (city) — searchable input + geo-IP suggest | `onboarding/page.tsx` | 1 hr | O1 | Geo-IP can use a free service or skip; not load-bearing for step 2 to work |
| O3 | Add Step 3 (first search + target price) — pre-fills based on steps 1+2 | `onboarding/page.tsx` + `lib/api.ts` (existing search helper) | 1.5 hr | O1, O2, `EventCard` `targetPrice` payload fix from main weekly §1 item 3 | **Cannot fully work until `EventCard.tsx:43–49` accepts `targetPrice`.** Can ship without; Step 3 then becomes "Pick your first event to track" and target-price gets set on next visit — degraded but shippable. |
| O4 | Add Step 4 (confirmation) | `onboarding/page.tsx` | 30 min | O1–O3 | Static screen with summary; trivial |
| O5 | WC-aware fork: detect referer / `?source=`, default Step 1 to WC and Step 2 to the mapped city | `onboarding/page.tsx` | 1 hr | O1, O2 | Pure frontend logic |
| O6 | Wire `register/page.tsx:36` to route to `/onboarding` on success (instead of `/dashboard`) UNLESS `?returnTo=` is set | `register/page.tsx:34–36` | 5 min | O1; also `S6` from signup-flow file | One-line conditional |
| O7 | Pre-onboarding watchlist intercept: EventCard intercept link writes `?returnTo=/watchlist?action=add-target&event_id=X` and register page routes there | `EventCard.tsx:90`, `register/page.tsx:36`, `/watchlist` modal | 1 hr | S6 from signup-flow file | Bypasses onboarding for watchlist-intent users |

**Total: ~6 hours.** Cannot ship all of it this week unless dedicated dev time is allocated. **Realistic this-week target: O1 + O2 + O6** (~2 hours) — gets a 2-step skeleton live, lets new users at least pick a category and city before landing on dashboard, and unblocks `?returnTo=` users from the watchlist intercept path.

## 5. Carryover from 5/11

The carryover is the entire onboarding spec. **No code has moved on onboarding in 14 days.** The 5/4 long-form is still the authoritative architecture document; the 5/11 weekly added the pre-onboarding watchlist intercept; this week adds the WC-aware fork. Three concentric specs and zero implementation.

## 6. Recommended sequence

1. **Today / this week:** Ship O1 + O6 (~1 hr 5 min). Even a 1-step onboarding ("What are you into?") is materially better than landing on Orlando.
2. **Next week:** Ship O2 + O5 + O7 (~2 hr 5 min, depends on signup-flow `?returnTo=` shipping).
3. **Week of 6/1:** Ship O3 + O4 (~2 hr, depends on EventCard `targetPrice` payload fix).
4. **By T-7 (6/4):** Full onboarding live, WC-aware fork live, watchlist intercept live. This is the latest deadline at which the onboarding flow has any pre-tournament leverage.

## 7. Cross-agent handoffs

- **Content Agent:** copy for all 4 onboarding steps + the WC-aware variants for steps 1 and 4. Tone should match the existing "Real-time price intelligence" + "Compare. Track. Save." voice from `page.tsx:77–80`. Approx 12 distinct microcopy strings; budget ~1 hour of copy work.
- **Growth Agent:** measurement plan. Each onboarding step should emit a `onboarding_step_complete {step, time_on_step, user_id}` event so the funnel can be read out granularly. Without per-step instrumentation, we can't tell if Step 2 (city) or Step 3 (first event) is the drop-off point.
- **Analytics Agent:** the event taxonomy above. Same gating dependency as everything else this week — the dataLayer hasn't shipped yet (Day 41 of zero `dataLayer.push`).
