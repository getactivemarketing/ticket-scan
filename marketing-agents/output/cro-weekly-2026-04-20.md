# CRO Weekly Report — 2026-04-20
**Agent:** CRO Specialist (Agent 6)
**Scope:** Full-funnel audit, A/B test design, signup flow optimization, popup strategy, onboarding design
**Prior report:** `cro-weekly-2026-04-13.md`

---

## 0. Progress Since Last Week

Code-level audit of what shipped vs. what the 2026-04-13 plan called for:

| Recommendation (P0/P1) | Status | Evidence |
|---|---|---|
| Homepage search bar in hero | ❌ Not shipped | `web/src/app/page.tsx:82-84` — CTAs still send to `/register` and `#how-it-works`, no search input |
| Compare page soft gate (ungate) | ❌ Not shipped | `web/src/app/compare/page.tsx:87-90` — still hard-redirects to `/login` |
| Post-signup onboarding | ❌ Not shipped | `web/src/app/register/page.tsx:36` — still redirects straight to `/dashboard` |
| "Compare Prices" CTA on EventCard | ❌ Not shipped | `web/src/components/EventCard.tsx:151-158` — "Buy Tickets" still primary |
| Exit-intent popup | ❌ Not shipped | No popup component exists |
| Signup prompt for non-logged users on EventCard | ✅ **Shipped** | `web/src/components/EventCard.tsx:79-104` — modal overlay with "Sign Up Free" / "Maybe Later" |
| Remove confirm-password field | ❌ Not shipped | `web/src/app/register/page.tsx:95-108` — confirm field present |
| Password strength indicator | ❌ Not shipped | Simple 8-char check only |

**Net progress:** 1 of 8 P0/P1 recommendations shipped. EventCard sign-up prompt is a real win — it converts watchlist intent into registration at the point of interest rather than up front. This is exactly the right model to extend to the Compare page.

**Biggest blocker staying blocked:** Compare page hard-gate is still the single largest conversion killer in the funnel. Unauthenticated users who come specifically to *comparison shop* are redirected to login before they've seen one byte of comparison data. This week's A/B test (Section 2) prioritizes that again.

---

## 1. Full Funnel Audit

### Funnel overview (same structure as last week for continuity)

```
Visit → Search → Compare → Signup → Watchlist → Retain
  |        |         |         |          |          |
 homepage  dashboard hard-gate   form    post-signup   drip+alerts
           (logged   (login)   (3-field)  dead-end    (day 3 first)
           -optional)
```

### Step 1: Visit → Search (unchanged from last week)

**Current state (2026-04-20):**
- Homepage hero CTA: "Get Started Free" → `/register` (primary), "See How It Works" → `#how-it-works` (secondary) — `web/src/app/page.tsx:82-85`
- No search input on any public marketing surface
- Navbar shows a "Search" link for unauthenticated users that routes to `/dashboard`

**Friction:** Still the biggest volume leak at the top of the funnel. Users who want to *scan prices* cannot do so without either a navbar click or a register click. The "Trending Deals" section on the homepage (`page.tsx:162-188`) teases the product but is hardcoded, not live — it does not convert into an actual search.

**Recommendation (re-iterated, now P0):**
1. Replace "Get Started Free" / "See How It Works" with a single hero search form: city + keyword + [Search]. Same visual weight.
2. Wire "Trending Deals" cards to real `/api/events/search` results (city-scoped) so clicking a card opens a real comparison.
3. Keep "Create Free Account" as secondary CTA below the search bar.

**Estimated impact:** +15–25% search initiation rate (carried from last week — unchanged since the page hasn't changed).

### Step 2: Search → Compare (minor update)

**Current state:**
- Dashboard search → `EventCard` grid — `web/src/app/dashboard/page.tsx:170-174`
- EventCard primary CTA: "Buy Tickets" (external link) — `web/src/components/EventCard.tsx:151-158`
- Secondary CTA: watchlist button (eye emoji). For non-logged users, now shows a sign-up modal — **shipped this week** (`EventCard.tsx:79-104`)

**What's working:** The new sign-up modal on the watchlist button is good — it captures signup intent at the point of value. Keep it.

**Still missing:**
- No "Compare Prices" CTA on EventCard. Users reach search results but have no clear path to cross-source comparison.
- Dashboard search and Compare search are separate, uncoupled flows. A user who searches on `/dashboard` can see single-source prices, then has to re-enter the same query on `/compare` to see side-by-side comparison (and get hard-gated there).
- Comparison page search state is not persisted between pages or even shared with the dashboard.

**Recommendation (P1):**
1. Add a third button to EventCard: "Compare" — opens `/compare?eventId=<id>&keyword=<name>&city=<city>` pre-populated.
2. Eliminate the re-search on Compare when arriving with query params. Auto-run the comparison.
3. Add a "Compare this" badge on EventCards when ≥2 sources have the event (derive from search result metadata).

### Step 3: Compare → Signup (critical, unchanged)

**Current state:**
- `web/src/app/compare/page.tsx:87-90` — unauthenticated users hard-redirect to `/login`. No preview. No soft sell. No feature comparison on the login screen.

**Why this is the biggest P0 still open:**
The Compare page IS the product's core value prop. Gating it before the user sees a single price comparison is backwards. Users who arrive here are *already intent-qualified* (they navigated specifically to compare) and we are sending them to a login form with no context.

**Recommendation (P0) — see A/B test spec in Section 2.**

### Step 4: Signup → Watchlist (unchanged)

**Current state:**
- Register form: email + password + confirm password — `web/src/app/register/page.tsx:58-118`
- On success: redirect to `/dashboard` — empty, no guidance
- No intent capture, no guided first search, no first-alert prompt
- "Sign Up Free" banner on dashboard still renders for logged-out users only — conditional check correct (`dashboard/page.tsx:60-75`)

**Friction (same as last week):** Empty dashboard after registration is the biggest post-signup leak. No visible reason to return tomorrow.

### Step 5: Watchlist → Retention (unchanged)

Same findings as 2026-04-13. Email drip starts Day 3 (4-day gap from signup to first value delivery). No Day 0 welcome. No return-visitor prompt. No browser push.

### Priority Matrix (updated)

| Issue | Impact | Effort | Priority | Change vs. last week |
|---|---|---|---|---|
| Hero search bar | Very High | Medium | P0 | Still open |
| Compare page soft gate | Very High | Medium | P0 | Still open — **this week's A/B test target** |
| Post-signup onboarding | High | Medium | P1 | Still open |
| "Compare" CTA on EventCard | High | Low | P1 | Still open |
| Exit-intent popup | Medium | Low | P1 | Still open |
| Day-0 welcome email | Medium | Low | P1 | Escalated to P1 (low effort, fills drip gap) |
| Remove confirm-password field | Low | Very Low | P2 | Quick win — bundle with other form changes |
| Password strength meter | Low | Low | P2 | New this week |
| Social login (Google/Apple) | Medium | High | P2 | Unchanged |
| Browser push | Medium | High | P3 | Unchanged |

---

## 2. A/B Test Specification

### A/B Test: Compare Page Soft Gate vs. Hard Gate

This week's test doubles down on last week's unshipped P0. The spec below is tightened based on the current code (`web/src/app/compare/page.tsx`) to make implementation unambiguous.

```
## A/B Test: Compare Soft Gate
**Page:** /compare
**Hypothesis:** If we allow unauthenticated users to view one full
comparison result before requiring signup, then signup conversion rate
from compare-page visits will increase by 35–50% because users who
experience the core value prop before committing are more likely to
register. (Secondary: overall session depth increases, even for
non-converters, improving downstream email-capture chances.)

**Control (A):** Current behavior (compare/page.tsx:87-90). Unauthenticated
users hit router.push('/login') on mount. Never see a comparison.

**Variant (B):** Remove the early redirect. Allow the comparison form
to render and execute for unauthenticated users. After the FIRST
comparison result renders:
  - The first matched event shows full price comparison data
    (Ticketmaster + SeatGeek side-by-side, savings badge, section
    estimates).
  - Subsequent matched events show a blurred overlay with a modal:
    "Sign up free to see all comparisons."
  - Form is still usable for searching — the gate is on result
    visibility past the first match, not on the search itself.
  - Modal CTA: "Sign Up Free" → /register?ref=compare-gate&next=/compare
  - Modal secondary: "I'll come back later" (dismissible, but next
    search re-gates).

**Primary metric:**
  signups_from_compare / compare_page_visits (unauthenticated only)

**Secondary metrics:**
  - compare_page_time_on_page (unauthenticated)
  - compare_page_bounce_rate (unauthenticated)
  - compare_to_dashboard_bounceback (did they leave to /dashboard?)
  - 24h_watchlist_add_rate for users who signed up via this gate
  - 7d_retention for users who signed up via this gate

**Guardrails:**
  - Backend API load: /api/events/compare currently requires no auth
    (verify in index.js before launch — may need to add rate limits
    keyed on IP for unauthenticated users).
  - Event deduplication logic must run identically for both cohorts.

**Sample size:** ~2,000 compare-page sessions per variant for 95%
confidence at a 5% minimum detectable effect on signup rate.
Assuming current compare-page traffic of ~X/week (Analytics Agent
to confirm baseline), duration is likely 14–21 days.

**Implementation:**
  1. web/src/app/compare/page.tsx:
     - Remove lines 87-90 (the if-not-user redirect).
     - Add a `gateShown` state; after `matchedEvents` renders,
       if !user and matchedEvents.length > 1, render blurred
       cards behind an overlay modal for index 1+.
     - First match (index 0) renders in full.
  2. New component: web/src/components/SignupGateModal.tsx
     - Centered modal, backdrop blur.
     - Copy:
         H1: "See every price. Free."
         Body: "Create a free account to compare all events,
                track prices, and get drop alerts."
         Primary: [Sign Up Free →]
         Secondary: [I'll come back later]
     - Link to /register?ref=compare-gate&next=/compare to
       round-trip the user back.
  3. Post-registration redirect: if `next` query param is set,
     redirect there instead of /dashboard (register/page.tsx:36).
  4. Analytics instrumentation (Analytics Agent handoff):
     events: compare_view, compare_search, compare_gate_shown,
     compare_gate_signup_click, compare_gate_dismiss,
     compare_signup_complete.

**Feature flag:** COMPARE_SOFT_GATE (env var) — default false.
Flip to true for variant cohort. Cohort assignment by user IP hash
(stable across session).

**Rollback:** Flip flag to false. No database migration required.
```

### Other test ideas queued (not running this week)

- Homepage hero copy: "Compare Ticket Prices" (control) vs. "Save $127 On Your Next Ticket" (uses existing stats-bar number for specificity) vs. "Find the Cheapest Tickets, Every Time."
- EventCard CTA: "Buy Tickets" (control) vs. "Compare & Buy" (adds comparison hint) vs. "See All Prices".
- Signup form: email-first (variant splits into 2 steps) vs. current single-form.

Bank these for the next 2–3 weeks — don't run concurrently with the Compare Gate test to avoid cohort contamination.

---

## 3. Signup Flow Optimization

### Current flow (code-verified this week)

```
User clicks "Sign Up" (navbar) / "Sign Up Free" (modal / dashboard banner)
  → /register (web/src/app/register/page.tsx)
  → Form: email + password + confirm password
  → On success: router.push('/dashboard')   [line 36]
  → Dashboard: empty search form
```

**Form friction points:**
- Confirm-password field — no strength meter to justify it. Research (Baymard, Nielsen) consistently shows confirm-password fields lose 5–12% of signups without meaningful accuracy gain.
- No social login. Google/Apple one-tap would remove password friction entirely.
- No way to recover from typos on email (no visible retyping prompt or format hint beyond `type="email"`).
- Post-signup has zero contextual continuation — even if the user arrived from a specific event, they lose that context at registration.

### Redesigned flow spec

#### Step A: Context-aware entry (preserve intent)

Any link that sends a user to `/register` should include a `next` query param and, where relevant, an `intent` param:

- From EventCard sign-up modal: `/register?ref=eventcard&next=/dashboard&intent=watchlist&eventId=<id>`
- From Compare gate: `/register?ref=compare-gate&next=/compare`
- From navbar: `/register?ref=navbar&next=/`
- From exit-intent popup (future): `/register?ref=exit-intent&next=/`

After successful registration, honor `next`. If `intent=watchlist&eventId=...`, auto-add that event to the new user's watchlist and surface a success toast.

#### Step B: Lightened form

```
Registration form (redesigned)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Email address     [input]
Password (8+ chars) [input] [strength meter: red/yellow/green dots]
                   [hint: "Use letters, numbers, and symbols for a stronger password"]

[ Create Account ]

         ─── or ───
[ Continue with Google ]   (future — Phase 2)

Already have an account? Sign in
```

Changes from current form:
- **Remove** confirm password field.
- **Add** inline password strength meter (client-side only, no extra backend calls).
- **Add** social login placeholder (wire after Phase 1 ships).
- Keep "Already have an account? Sign in" link.

#### Step C: Intent capture (new, skippable, ≤15 seconds)

Post-registration, show a single-step modal before redirecting to `next`:

```
[× Skip]

What are you looking for?
(Pick 1 or more — we'll personalize your feed.)

[🏀 NBA]  [🏒 NHL]  [🏈 NFL]  [⚾ MLB]
[🎵 Concerts]  [🎭 Theater]  [⚽ World Cup]

[ Continue → ]
```

Store as `user_favorites` rows (reuse existing table — `favorite_type='category'`, `favorite_name=<selection>`). No schema change required.

#### Step D: Guaranteed first value

If `intent=watchlist` in query params, the post-signup flow auto-adds the event and lands the user on `/watchlist` with a success toast:

> "✓ You're tracking [Event Name]. We'll email you when the price drops."

If no intent, redirect to `/dashboard` with a dismissible banner at the top:

> "Welcome! Search for your first event and hit the 👁️ button to track its price."

### Success metrics

| Metric | Current (assumed) | Target |
|---|---|---|
| Registration form completion rate | Unknown (Analytics Agent to instrument) | +8–12% from removing confirm password |
| Time from `/register` GET to successful POST | Unknown | <45 seconds median |
| 24h first-watchlist-add rate | Unknown | >40% |
| 24h return rate | Unknown | >30% |

Handoff: Analytics Agent — instrument the funnel (`register_view → register_submit → register_success → intent_captured → first_watchlist_add`).

---

## 4. Popup & Modal Strategy

### Current state (code-verified)

- `NewsletterSignup` component exists (`web/src/components/NewsletterSignup.tsx`). Three variants (card/inline/footer). **None fire as a popup** — all are inline on the page.
- `EventCard` shows a sign-up prompt modal when a non-logged user clicks the watchlist button (`EventCard.tsx:79-104`). This is the only modal in the app.

There is no popup manager, no frequency-capping mechanism, and no exit-intent handler.

### Proposed popup roster

#### Popup 1: Newsletter (new trigger mechanism — the component exists, wire it to a popup)

```
Trigger: (time_on_site >= 45s OR scroll_depth >= 50%)
         AND !user
         AND !isSubscribed (localStorage: ts_subscribed)
         AND !shownRecently (localStorage: ts_newsletter_shown < 7 days)
         AND pathname NOT IN ['/register', '/login', '/compare', '/dashboard']

Copy:
  Headline: "Get ticket deals in your inbox"
  Body: "Weekly drops, buying tips, and deals — built on TicketScan's
         real-time price data. No spam."
  Input: email
  Primary: [ Get Deals ]
  Dismiss: [ No thanks ]

Mobile: bottom sheet (slide up from bottom, 50% viewport max)
Desktop: centered modal with backdrop blur
Frequency: once per 7 days if dismissed; never again if subscribed
Expected conversion: 3–5% of impressions
```

Implementation: wrap `NewsletterSignup variant="card"` in a new `<PopupShell>` component with trigger logic. No backend change — reuses `/api/newsletter/subscribe`.

#### Popup 2: Price-alert prompt on Compare (new)

```
Trigger: pathname === '/compare'
         AND searched === true (at least one comparison rendered)
         AND time_on_results >= 20s
         AND !user (for logged-out: leads to signup)
         OR  user && !eventAlreadyInWatchlist (for logged-in: leads to watchlist-add)

Copy (logged-out):
  Headline: "Don't miss the drop"
  Body: "We check this price every 4 hours. Create a free account to
         get an email when it hits your target."
  Primary: [ Set a free alert → ] (link to /register?ref=compare-alert-popup)
  Dismiss: [ Not for this event ]

Copy (logged-in, event not in watchlist):
  Headline: "Track this event's price?"
  Body: "We'll email you when it drops."
  Primary: [ Add to watchlist ] (inline add — no navigation)
  Dismiss: [ Not this time ]

Mobile: bottom sticky bar
Desktop: slide-in card from bottom-right
Frequency: once per event per session; max 2 per session total
Expected conversion: 8–12% for logged-in, 3–5% for logged-out
```

#### Popup 3: Exit-intent (new)

```
Trigger: mouseleave on document toward top of viewport
         AND !user
         AND session_duration >= 30s
         AND !shownRecently (localStorage: ts_exit_shown < 14 days)
         AND viewport.width >= 768 (desktop only — mouseleave unreliable on touch)

Copy:
  Headline: "Before you go…"
  Body: "Set a free price alert on any event. We'll email you when it
         drops. Takes 20 seconds."
  Primary: [ Set a free alert ] → /register?ref=exit-intent
  Dismiss: X (top-right)

Layout: full-width bottom bar (not center modal — less intrusive)
Frequency: once per 14 days
Expected conversion: 2–4% of impressions
```

#### Popup 4: Return-visitor banner (new, inline not modal)

```
Trigger: pathname === '/' OR '/dashboard' OR '/watchlist'
         AND user
         AND last_visit > 3 days ago (from users.last_login_at — needs backend column)
         AND watchlist_count >= 1

Copy (dynamic, from API):
  "Welcome back! {N} prices changed since your last visit.
   [Event Name] dropped to ${price} ({pct}%) — view watchlist →"

Layout: top banner (sticky), auto-dismiss after 10s or click X
Mobile: same, full-width banner
Desktop: same, centered inside main column
Frequency: once per return-session (3+ day gap)
Expected CTR to watchlist: 15–25%
```

Backend ask: add `last_login_at` column to `users` (update on `/api/auth/me` hits). Add `GET /api/prices/since?timestamp=<last_login>` to return aggregate movement summary for the user's watchlist.

### Rollout order

| Popup | Effort | Impact | Ship |
|---|---|---|---|
| Newsletter popup wrapper | Low | Medium | Week 1 (copy reuse from existing component) |
| Exit-intent popup | Low | Medium | Week 1 (ships with newsletter popup via shared `<PopupShell>`) |
| Price-alert prompt on compare | Medium | High | Week 2 (after compare soft-gate A/B test launches) |
| Return-visitor banner | Medium | Medium | Week 3 (requires backend change) |

---

## 5. Onboarding Flow Design

### Current state (unchanged from last week)

No onboarding exists. `register/page.tsx:36` redirects straight to `/dashboard`. EventCard's sign-up modal helps bridge from intent to registration but there's no post-registration experience.

### Proposed: "60-second setup"

Four steps. Third and fourth are conditional on intent. Progress dots, not numbered steps.

#### Step 1 — What do you want to track?

```
[● ○ ○]                                        [ Skip → ]

What events are you into?
Pick one or more. We'll personalize your feed.

[🏀 NBA]    [🏒 NHL]    [🏈 NFL]    [⚾ MLB]
[🎵 Concerts]  [🎭 Theater]  [⚽ World Cup]  [🎪 Comedy]

[ Continue → ]
```

Storage: `user_favorites(user_id, favorite_type='category', favorite_name)` — reuse existing table.

#### Step 2 — Where are you?

```
[● ● ○]                                        [ Skip → ]

What's your city?
We'll surface nearby events first.

[📍 Use my location]  (browser geolocation; silent fallback)

Popular cities:
[New York]  [Los Angeles]  [Chicago]
[Miami]     [Houston]      [Dallas]
[Atlanta]   [Phoenix]      [Denver]

[ More cities ▼ ]

[ Continue → ]
```

Storage: new column `users.default_city` (non-destructive migration — nullable). Populates the `city` default on `/dashboard` search form.

#### Step 3 — Conditional: intent-aware

**If user arrived with `intent=watchlist&eventId=<id>`:**
```
[● ● ●]

🔔 Tracking [Event Name]
Current: ${price} · We check every 4 hours.

Set a target price? (optional)
[$___] [ Set alert ]

[ Go to my watchlist → ]
```

Auto-adds the event to watchlist on render. User lands on watchlist, sees their first item, done.

**Else (no intent):**
```
[● ● ●]                                        [ Skip → ]

Let's find your first event.
Based on your interests: {categories}

[EventCard: trending event 1]  [ Track Price ]
[EventCard: trending event 2]  [ Track Price ]
[EventCard: trending event 3]  [ Track Price ]

[ 🔍 Search for something specific → ]
```

Trending events sourced from Ticketmaster Discovery API `/events?city=<user.default_city>&category=<user.favorites>`, ranked by sales. Each card has inline "Track Price" that auto-adds to watchlist.

#### Step 4 — Success

```
[✓ animated checkmark]

You're all set.

{if added_watchlist:
  "We're tracking {N} event(s). You'll get an email when prices drop."
 else:
  "Head to the dashboard and search for your first event."
}

[ Go to dashboard → ]
```

### Success metrics

| Metric | Target |
|---|---|
| Onboarding start rate (of signups) | ≥90% |
| Onboarding completion rate (all 4 steps) | ≥60% |
| Step-1 skip rate | ≤25% |
| Step-2 skip rate | ≤30% |
| First watchlist add during onboarding | ≥40% |
| Time-to-complete (median) | ≤60s |
| D7 retention uplift vs. signups who skipped | ≥+20pp |

### Implementation handoff

Files to create:
- `web/src/app/onboarding/page.tsx` — route-level container with step state
- `web/src/components/OnboardingStep.tsx` — shared step wrapper (progress dots, skip, layout)
- `web/src/components/InterestPicker.tsx` — toggle-card grid
- `web/src/components/CityPicker.tsx` — geolocation + static city grid
- `web/src/components/OnboardingSuccess.tsx` — step 4

Routing change:
- `web/src/app/register/page.tsx:36` — replace `router.push('/dashboard')` with `router.push('/onboarding?' + new URLSearchParams(queryParams))`
- `web/src/app/login/page.tsx` (if onboarding incomplete flag on user, redirect to `/onboarding/resume`)

Backend changes (minimal):
- `POST /api/users/preferences` — accepts `{ categories: [], city: '' }`, upserts into `user_favorites` + sets `users.default_city`
- `GET /api/events/recommended` — returns trending events for the user's city + favorite categories (reuse existing `/api/events/search` internals)
- Migration: `ALTER TABLE users ADD COLUMN default_city TEXT NULL, ADD COLUMN onboarding_completed_at TIMESTAMPTZ NULL;`

---

## 6. Cross-Agent Handoffs

### To Content Agent (Agent 1)
- **Copy needed:**
  - Exit-intent popup body ("Before you go…" variant + 2 alternates for testing)
  - Newsletter popup guilt-nudge dismiss text (current "No thanks" is fine — test "I'd rather pay full price" vs. "I'll take my chances" as variants)
  - Onboarding step 1 header variants: "What events are you into?" vs. "What do you want to track?" vs. "Pick your favorites"
  - Compare gate modal: "See every price. Free." (my draft) — needs review against brand voice guide
  - Day-0 welcome email (new — see below, Email handoff)
- **A/B test copy for homepage hero** (when the hero search bar ships): three variants listed in Section 2 queue.

### To Growth / Engineering Agent (Agent 8)
- **Highest priority this week:** implement Compare Soft Gate A/B test (Section 2 spec). Feature-flagged, reversible, ~2 days of work including analytics instrumentation.
- **Second priority:** hero search bar on homepage. Self-contained change in `web/src/app/page.tsx`. ~0.5 days.
- **Third priority:** onboarding flow spec (Section 5). ~3–5 days including backend migration.
- **Quick win available:** remove confirm-password field, add password strength meter in `web/src/app/register/page.tsx`. ~2 hours.

### To Analytics Agent (Agent 7)
- **Baseline metrics needed** before the Compare Soft Gate test can launch:
  1. Compare page visit rate (unauthenticated vs. authenticated split)
  2. Current registration conversion rate (% of compare-page-visit → registration)
  3. 24h first-watchlist-add rate post-registration
  4. 7d and 30d retention for newly registered users
  5. Drop-off rates at each step of the funnel (visit → search → compare → register → watchlist)
- **Funnel event instrumentation needed** for every popup, onboarding step, and A/B test cohort (see Sections 2, 4, 5 for specific event names).
- **Dashboard needed:** a compact CRO dashboard in `/admin` surfacing funnel drop-offs, popup impressions/conversions, and onboarding completion — so this audit can be grounded in numbers next week.

### To Email Agent (Agent 3)
- **New drip email needed: Day 0 welcome.** The current drip starts at Day 3, leaving a 4-day value-delivery gap immediately after signup. Day 0 should:
  - Confirm registration
  - Prompt first watchlist add (deep-link to `/dashboard` with prefilled city if `default_city` set)
  - Preview what the Day 3 email will cover
  - Keep it short (≤150 words, mobile-friendly)
- **Weekly price digest (future):** once watchlist users accumulate ≥3 events, send a Saturday summary of weekly price movement.

---

## 7. Summary — Top 5 Actions for Week of 2026-04-20

1. **Ship Compare Soft Gate A/B test** (Section 2) — largest unlocked-signup opportunity, spec ready, feature-flag-able. **P0.**
2. **Ship hero search bar on homepage** — second-largest funnel leak, self-contained change. **P0.**
3. **Launch Day-0 welcome email** — fills the 4-day gap between registration and first drip. Low-effort, high-leverage. **P1.**
4. **Remove confirm-password field + add strength meter** — 2-hour quick win on registration form. **P1.**
5. **Wire newsletter popup (reuse existing component) + exit-intent popup** — low-effort, captures currently-abandoning traffic. **P1.**

Onboarding (Section 5) is the biggest single multi-day project. If the above 5 ship this week, Week of 2026-04-27 should be scoped around onboarding implementation.

---

*Generated by CRO Specialist Agent | TicketScan Marketing Automation*
*Next audit: 2026-04-27*
