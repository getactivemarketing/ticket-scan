# Onboarding Flow Design — Week 5 Ship-List

Date: 2026-05-25 (Monday) • Companion to `cro-weekly-2026-05-25.md` §5 • Long-form spec: `cro-weekly-2026-05-04--onboarding-flow.md` (still load-bearing)

> **This is a compressed tactical ship-list with three branching paths now in scope:** (1) the pre-onboarding watchlist intercept (carryover from 5/11, Day +14 unbuilt), (2) the WC-aware onboarding fork (carryover from 5/18, Day +7 unbuilt), and (3) the new "EventCard-intercept skip-onboarding" path (this week's new branching path, downstream of the hero CTA direct swap recommended in this week's main weekly §1 item 11).

---

## 1. Current state (byte-confirmed today 2026-05-25)

```
grep -rln "onboarding" web/src/app/  →  0 matches
ls web/src/app/onboarding/           →  No such file or directory
```

**The `/onboarding` route does not exist.** No onboarding component, page, or flow has been built in the 21 days since the 5/4 long-form spec. Three weekly specs and zero implementation.

**Current post-signup experience:**

1. `register/page.tsx:36` — `router.push('/dashboard')`
2. `dashboard/page.tsx:27` — `useState('Orlando')` city default
3. **First authenticated screen: an empty Orlando search box, no greeting, no orientation, no next-action prompt.**

For a brand-new user in (say) Seattle, the first thing the platform does after they hand over an email and password is search Orlando. Even before onboarding exists, this is a bug. See `cro-weekly-2026-05-25--signup-flow.md` §2 S8 — routes new users to `/watchlist?empty=welcome` in 10 minutes, fixing the immediate symptom.

## 2. Onboarding architecture (4 steps, unchanged from 5/4 long-form)

| Step | Question | Output |
|---|---|---|
| 1 | "What events are you into?" — multi-select: Sports / Concerts / Theater / **World Cup 2026** (highlighted T-17 to T+0) | Writes 1+ rows to `user_favorites` with `favorite_type='category'` |
| 2 | "Which city should we default to?" — searchable input, geo-IP suggest, fallback to a top-10 list | Writes 1 row to `user_favorites` with `favorite_type='city'` |
| 3 | "Let's find your first event" — pre-filled search using step 1 + step 2, surfaces 6 matching event cards with target-price field shown by default | User picks an event, sets a target price, clicks "Set Alert" |
| 4 | "You're set." — confirmation screen with summary (X events tracked, alert active for Y) and "Go to dashboard" CTA | None — closes the flow |

**Time-to-value target:** <60 seconds from signup to first price alert set. Each step delivers visible value; the final step is the *first authenticated screen where the user has done something for themselves*, not for the platform.

**Skip behavior:** Each step shows a small "Skip for now" — present but de-emphasized. Step 3 specifically should *not* be easily skippable; it is the load-bearing step that creates the first `target_price`-set watchlist row (the platform's single biggest data gap).

## 3. Three branching paths (one new this week)

### 3.1 Pre-onboarding watchlist intercept *(carryover from 5/11, Day +14 unbuilt)*

**Trigger:** User clicks the `+` watchlist button on an `EventCard` while anon (`EventCard.tsx:80–104` overlay shows). User clicks "Sign Up Free." Currently routes to `/register` with no context.

**Desired flow:**

1. EventCard overlay's "Sign Up Free" link becomes:
   ```tsx
   href={`/register?returnTo=/watchlist?action=add-target&event_id=${event.id}&source=eventcard`}
   ```
2. User completes register form.
3. `register/page.tsx:36` reads `?returnTo=` and routes there instead of `/dashboard` (depends on `S6` in `cro-weekly-2026-05-25--signup-flow.md`).
4. `/watchlist?action=add-target&event_id=X` mounts the watchlist page with a modal pre-open, asking "Set your target price for [event name]?" — single field, one button.
5. User sets target, submits. Done.

**Bypass onboarding:** This path *intentionally skips the 4-step onboarding* because the user has already demonstrated event-specific intent. Pushing them through 4 generic questions when they already clicked a specific event would be friction without value. **Onboarding fires for users who arrived at `/register` directly** (top-of-funnel signups), not for users who came via watchlist-intent.

**Effort:** ~30 minutes once `?returnTo=` capture is shipped on the register page. Cannot ship until `S6` lands.

### 3.2 WC-aware onboarding fork *(carryover from 5/18, Day +7 unbuilt)*

**Trigger:** User completes register form AND HTTP referer is `https://ticketscan.io/world-cup-2026/*` OR `?source=wc_*` query param is set (covers popup-driven traffic from `cro-weekly-2026-05-25--popup-strategy.md`).

**Desired flow:**

1. Onboarding mounts at `/onboarding?wc=1`.
2. **Step 1 (categories):** "World Cup 2026" is pre-selected and bolded; other categories shown but unchecked. Copy: *"Looks like you're here for the World Cup. We've pre-selected it — pick anything else you're into."*
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
5. **Step 4 (confirmation):** *"You're set for the World Cup."* Includes *"T-17 days to kickoff"* line so the user internalizes the urgency on exit. (Variable; updates by tournament countdown.)

**Why this fork is load-bearing this week:** The popup strategy (`cro-weekly-2026-05-25--popup-strategy.md`) explicitly deposits hundreds of `source=wc_*` emails into `newsletter_subscribers` between now and 6/11. *Some fraction will register.* The WC-aware fork is what turns the "I gave you my email about the World Cup" signal into a "I have one specific WC match in my watchlist with a target price set" outcome. Without this fork, the WC-curious cohort lands on a generic 4-step onboarding that asks them what they're interested in — *after* they already told us by clicking through a stadium-specific popup. That redundancy is the kind of friction that kills the funnel right before the conversion event.

**Effort:** ~2 hours on top of the base onboarding (Step 1 default-checked, Step 2 lookup map, Step 3 worldcup.ts query, Step 4 copy variant). All pure-frontend.

### 3.3 EventCard-intercept skip-onboarding *(NEW this week, downstream of hero-CTA direct swap)*

**Why this path is new:** If item 11 from this week's main weekly (`cro-weekly-2026-05-25.md` §1) ships — the hero CTA direct swap from `/register` to `/dashboard` — a meaningful fraction of homepage arrivals will reach `/dashboard` *before* they have an account. When they click the watchlist `+` button on `EventCard`, the intercept overlay at `EventCard.tsx:80–104` is the only mechanism that routes them into the signup → onboarding funnel.

**The architecture decision:** these users have *already* declared event-specific intent (they searched, found a card, clicked track). They should not be routed through the generic 4-step onboarding — they have already answered Step 1 (event category) and Step 3 (specific event) implicitly. The right path is:

1. EventCard intercept routes to `/register?returnTo=/watchlist?action=add-target&event_id=X&source=eventcard`.
2. Register completes; reads `?returnTo=`; routes to `/watchlist?action=add-target&event_id=X`.
3. Watchlist page mounts with the target-price modal pre-open for event X.
4. User sets target, submits. **No onboarding screen ever shown.** Time-to-value: ~30 seconds from "click track" to "alert set."

**Implementation:** this is mostly the same code path as §3.1 above — both paths skip onboarding via the `?returnTo=` mechanism. The difference is *what populates the cohort*: §3.1 was the existing EventCard intercept anywhere on the site; §3.3 is specifically the new EventCard intercept volume that materializes from the hero CTA swap. The code is the same; **the cohort size is what changes.**

**Implication for onboarding ship-order:** the onboarding architecture must support this skip-path **before** item 11 (hero CTA swap) ships. If item 11 ships first without `?returnTo=` capture in the register flow (signup-flow S6), then 100% of the EventCard-intercept cohort lands on `/dashboard` (Orlando default) post-register and is permanently lost from the watchlist-add intent. **The dependency chain is: signup-flow S6 (`?returnTo=` capture, 5 min) → EventCard intercept link update (P3 in popup-strategy, 5 min) → hero CTA direct swap (item 11, 5 min). The whole chain is 15 minutes.**

### 3.4 Default path (no referer, no `?source=`, no `?returnTo=`)

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
| O7 | Pre-onboarding watchlist intercept: EventCard intercept link writes `?returnTo=/watchlist?action=add-target&event_id=X` and register page routes there | `EventCard.tsx:90`, `register/page.tsx:36`, `/watchlist` modal | 1 hr | S6 from signup-flow file | Bypasses onboarding for watchlist-intent users (covers paths §3.1 and §3.3 in the same code) |

**Total: ~6 hours.** Cannot ship all of it this week unless dedicated dev time is allocated. **Realistic this-week target this week shifts to support the hero CTA swap:**

| Bundle | Effort | Why this bundle, this week |
|---|---|---|
| **S6 (signup-flow file) + P3 (popup file) + item 11 (main weekly hero swap)** | 15 min total | This is the minimum bundle that prevents the hero CTA swap from leaking the EventCard-intercept cohort to `/dashboard` Orlando default. **Ship before or with the hero swap, never after.** |
| **O1 + O6** | 1 hr 5 min | First-step onboarding skeleton + post-register routing. Even a 1-step onboarding ("What are you into?") is materially better than landing on Orlando. |
| **O7** | 1 hr | Pre-onboarding watchlist intercept; covers paths §3.1 and §3.3 |

**This-week minimum: 2 hr 20 min** for the three bundles above. **Without item 11 shipping**, the EventCard-intercept path (§3.3) doesn't fire at scale and only the §3.1 use case matters; without §3.1, the `/watchlist?action=add-target` path isn't wired.

## 5. Carryover from 5/18

- The full onboarding 4-step architecture remains unbuilt.
- The WC-aware fork remains unbuilt.
- The pre-onboarding watchlist intercept remains unbuilt.

**Three concentric specs, zero implementation, 21 days elapsed.** This week adds a fourth: the EventCard-intercept skip-onboarding path. The architecture supports it without expanding the 4-step base flow — but only if S6 ships.

## 6. Recommended sequence

1. **Today / this week:** Ship S6 + P3 + item 11 (15 min total, see main weekly §1). **First frontend P0 merge of the past 48 days.** Plus O1 + O6 (1 hr 5 min) to scaffold the onboarding skeleton.
2. **Next week:** Ship O7 + O2 + O5 (~3 hours total, depends on signup-flow `?returnTo=` shipping).
3. **Week of 6/1:** Ship O3 + O4 (~2 hr, depends on EventCard `targetPrice` payload fix from main weekly §1 item 3).
4. **By T-7 (6/4):** Full onboarding live, WC-aware fork live, watchlist intercept live. This is the latest deadline at which the onboarding flow has any pre-tournament leverage.

## 7. Cross-agent handoffs

- **Content Agent:** copy for all 4 onboarding steps + the WC-aware variants for steps 1 and 4 + the EventCard-intercept skip-path target-price modal copy. Tone should match the existing "Real-time price intelligence" + "Compare. Track. Save." voice from `page.tsx:77–80`. Approx 14 distinct microcopy strings (12 onboarding + 2 watchlist-modal); budget ~1 hour of copy work.
- **Growth Agent:** measurement plan. Each onboarding step should emit a `onboarding_step_complete {step, time_on_step, user_id, entry_path}` event so the funnel can be read out granularly **and the four entry paths (cold / WC-referer / EventCard-intercept / popup-WC) are separable**. Without per-step + per-entry-path instrumentation, we can't tell if Step 2 (city) or Step 3 (first event) is the drop-off point, *and* we can't tell whether the skip-onboarding cohorts (§3.1, §3.3) outperform the default 4-step path (§3.4) on the metric that matters: 7-day return rate.
- **Analytics Agent:** the event taxonomy above. Same gating dependency as everything else this week — the dataLayer hasn't shipped yet (Day 48 of zero `dataLayer.push`). **One 3-line scout patch on `NewsletterSignup.tsx:32` unblocks every downstream measurement; that patch is highlighted in the main weekly §1 item 13.**

## 8. Notes on the new branching path (§3.3) — design decisions worth preserving

When the EventCard-intercept skip-onboarding path fires:

1. **The user has not seen the platform's value-prop framing for "alert" or "target price" yet.** They saw an event card, clicked track. The post-register `/watchlist?action=add-target` modal must briefly explain *what* a target price is and *how* the alert fires. Suggested modal copy: *"Set your target price for [event name]. When prices drop to or below this, we'll email you immediately. Average alert response time: under 4 hours from the price change."* Three sentences max.
2. **The `target_price` input must allow "any drop" as a default** — some users won't have a specific number in mind. A "Notify me on any drop" checkbox that sets `target_price = current_max_price - 1` is a graceful default.
3. **Confirmation screen should preview the next email** — "Here's an example of what we'll send: 'Lakers vs Celtics — price dropped from $120 to your target of $95. View on Ticketmaster.'" This anchors the abstract "we'll email you" promise into a concrete artifact.

These three design notes apply only to §3.3 (and by extension §3.1). The default 4-step onboarding (§3.4) has its own Step-3 / Step-4 copy that the Content Agent has already been asked to draft.
