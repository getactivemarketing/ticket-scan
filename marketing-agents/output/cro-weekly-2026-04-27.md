# CRO Weekly — 2026-04-27 (Monday)

Agent: CRO Specialist • Cadence: Weekly deep-dive (full-funnel + A/B spec + signup flow + popups + onboarding) • Companion to today's `cro-daily-2026-04-27.md` (homepage focus) • Daily-report carry-overs are not re-litigated; this file synthesizes them into the funnel and proposes structural fixes.

> **Brief correction.** The agent brief states "Newsletter signup popup exists." That is not true. Grep across `web/src/` confirms the only modal-class element is the `EventCard` sign-up prompt overlay (`web/src/components/EventCard.tsx:80–104`), which fires on **watchlist-add by anonymous users**, not on any newsletter trigger. There is **no exit-intent popup, no scroll-depth popup, no time-delay popup, no return-visitor popup, no newsletter popup of any kind**. This file therefore designs the popup strategy from a blank slate. Same for onboarding: no onboarding component exists anywhere. Both are "design specs against an empty starting state," not optimizations of existing flows.

---

## 1. Full-Funnel Audit

The funnel: **Visit → Search → Compare → Signup → Watchlist → Retain.** The audit below combines today's homepage findings (`cro-daily-2026-04-27.md`) with carry-overs across blog (Day 1), Footer mount (Day 2), WC (Day 2), venue (Day 3), register (Day 3), event detail (Day 4), JSON-LD (Day 5/6), dashboard (Day 5), compare (Day 6), drip (Day 8), Price Alert form (Day 9), Compare hard gate (Day 13), and GTM event tags (Day 19). Effort estimates and dev-day counts come from those reports.

### Funnel-step status (Mon 2026-04-27)

| Step | Surface(s) | Estimated drop-off vs benchmark | Primary cause | Days unresolved |
|---|---|---|---|---|
| **Visit** | `/`, `/blog/[slug]`, `/venues/[slug]`, `/world-cup-2026/[stadium]`, `/tickets/[slug]` | — (top of funnel) | Site is indexable; SEO ships pages; no measurable visit-side issue. **Telemetry to confirm visit→intent rate is unwired (Day 19).** | — |
| **Search** | `/dashboard`, hero CTA "Get Started Free" → `/register` (mis-route), search anchored to "Orlando" default | Estimated **~40% loss vs benchmark** (homepage hero routes acquisition traffic to a register page when the action is search) | Hero hardcoded `<Link href="/register">` (Day 0 today) + `dashboard` city defaults to Orlando with no URL state, no zero-result UX (Day 6) | 6 / today |
| **Compare** | `/compare` | Estimated **~70% loss vs benchmark** (hard auth gate in front of the page's value prop) | `compare/page.tsx:87–90` `router.push('/login')` for any anonymous visitor. JSON-LD content-parity violation persists. | **13** |
| **Signup** | `/register` form | Estimated **~25–35% loss vs benchmark** (3-field form, no autoComplete, no source attribution, no returnTo) | `register/page.tsx:69–107` — 3 inputs, no `autoComplete`, no `name`, no `?source=` capture, no `?returnTo=` redirect after submit | 9 |
| **Watchlist** | `EventCard.tsx` `+` button → modal "Sign Up Free" prompt for anonymous, direct add for logged-in (no target-price capture) | Estimated **~50% drop** between signup and first watchlist add (no immediate prompt post-signup, no target-price field on add) | `register/page.tsx:36` redirects to `/dashboard`, not to "set your first alert." Watchlist add modal does not ask for target price. **Price Alert UI does not exist site-wide (Day 9).** | 9 |
| **Retain** | `/watchlist` page, price-tracking cron, drip campaign | Estimated **~80% drop** (no retention loop ships) | Drip campaign queries `users` table, not `newsletter_subscribers` (Day 8) → newsletter signups receive nothing. Price alert emails depend on a target-price field that no UI sets (Day 9). Watchlist-add does not trigger any email. | 8 + 9 |

**Weekly drop-off pattern:** the funnel narrows aggressively at **Compare (hard gate)** and **Watchlist (no target price → no alert → no return)**. These are the two highest-leverage interventions on the entire funnel.

### Step-by-step audit

#### Step 1: Landing → Search

**Landing pages with traffic** (per SEO sitemap): `/`, 21 `/blog/[slug]`, 24 `/venues/[slug]`, 17 World Cup routes (`/world-cup-2026` + 16 stadiums), 37 `/tickets/[slug]`. The homepage and blog index account for the bulk of organic discovery.

**Search initiation rate** (intent: "I want to find an event"): unmeasurable today (Day 19 — no `dataLayer.push` events anywhere). Indirect signals from the codebase:

- Homepage hero CTA is `Get Started Free` → `/register` (`page.tsx:83`). **It does not link to search.** A visitor who lands on the homepage with intent to find a ticket is funneled to a registration form — friction-maximal.
- Homepage **secondary** CTA is `See How It Works` → `#how-it-works` anchor — also not search.
- Homepage Popular Venues + WC banner sections route to venue + WC pages, not to `/dashboard`.
- The **only direct search entry point above the fold** on the homepage is the navbar `Search` link (`Navbar.tsx:88` for anon, `:59` for auth). For mobile visitors, search is buried behind a hamburger menu (`Navbar.tsx:113–127`).
- Blog posts have no inline "Search for [topic] tickets" CTA. The Tips Section on the dashboard (`dashboard/page.tsx:194–207`) inverts the relationship — it links *out* of search to the blog.

**Diagnosis:** the homepage hero CTA is the wrong shape for the dominant entry intent. A user landing on the homepage from organic search ("compare ticket prices", "cheapest [event] tickets") wants to *search*, not *register*. The hero misroutes them.

**Fix priority:**

| Fix | Impact estimate | Effort | Days open |
|---|---|---|---|
| Homepage hero: dynamic `<HomeHeroButtons />` with auth-aware CTA + secondary "Try a search" route | +10–25% search-initiation from homepage | 7 min | new today |
| Homepage hero secondary CTA: `/dashboard?demo=true` (pre-populated search) instead of anchor jump | +15–25% combined hero CTR | 1 hr | new today |
| Blog post inline "Search [keyword] tickets →" CTA at end of every post | +5–10% search initiation from blog cohort | 30 min × 21 posts (templated) | new (this week) |
| Mobile navbar: surface `Search` as a primary action, not menu item | +20–35% mobile search initiation | 30 min | new (this week) |

#### Step 2: Search → Compare

**Search results surface:** `/dashboard` returns `EventCard` grid (`dashboard/page.tsx:170–173`). `EventCard` has two CTAs: `Buy Tickets` (external link to `event.url`) and a `+` watchlist button (anon: prompts signup; auth: adds to watchlist).

**Compare intent on EventCard: there is none.** No CTA on the card sends the user to `/compare?event_id=X` or `/compare?keyword=...`. The user has no in-card path from search results to side-by-side price comparison. They must:

1. Note the event name.
2. Navigate to `/compare` (only via navbar `Compare` link — only visible to **logged-in** users per `Navbar.tsx:62`).
3. Re-type the city + keyword.
4. Hit Compare.
5. Get hard-redirected to `/login` if they were anonymous.

**Anonymous users cannot reach `/compare` at all.** A visitor who searches `/dashboard` (no auth required), sees results, wants to compare prices across sources — the navbar `Compare` link is hidden from them, and even if they typed `/compare` directly, they get bounced to `/login` (`compare/page.tsx:87–90`).

**Dead-end pattern on EventCard:** if a search returns 24 events with `priceRanges`, the user sees 24 `Buy Tickets` buttons that exit the site to Ticketmaster. The platform's primary value prop (compare across 3+ sources) is not reachable from the result that just demonstrated the search worked.

**Fix priority:**

| Fix | Impact estimate | Effort | Days open |
|---|---|---|---|
| Compare hard-gate → soft-gate (show first 3 matched events, gate price detail) | +40–60% signups from Compare cohort | 2–3 hrs (plus 4 hr bundled w/ event-detail) | **13** |
| EventCard: add "Compare prices" CTA next to "Buy Tickets" → `/compare?event_id=X&source=eventcard` | +15–25% search→compare transition | 1 hr | 5 (Dashboard EventCard Compare CTA) |
| Navbar `Compare` link: show to anonymous users (after soft-gate ships) | +10–20% compare visit rate | 5 min | new (this week, gated on soft-gate) |
| `/dashboard` zero-result UX: if search returns 0, suggest 3 nearby cities + 3 trending events from same category | −20–30% bounce on zero-result | 1 hr | 6 |

#### Step 3: Compare → Signup

**Hard truth:** today, the Compare page does not gate features behind signup. **It gates the entire page behind signup.** The full content-parity violation (JSON-LD says the page is a `WebApplication`; the actual page is a redirect to `/login`) has been documented for 13 days.

When the soft-gate ships, the right design is:

- Show **all** matched-event side-by-side comparisons for free (the pricing and `BEST` badge are the SEO-indexable content; gating them invalidates the JSON-LD claim and tanks rankings).
- Gate **only** the value-add features behind signup: target-price alert setup, watchlist add, price-history chart, buy-recommendation, and the "All Events" tab beyond the first 5.

**Signup pitch on Compare:** today, none. The page either renders or redirects. There is no "Sign up to set a price alert on this comparison" CTA. Once the soft-gate ships, the right pitch is **inline on each comparison card**:

```
[Lakers vs Celtics — Sat May 30, $89 → $124]
[BUY: Ticketmaster $89]  [BUY: SeatGeek $124]
[ Notify me when this drops to $___ → email + go ]   ← inline, anonymous-friendly
```

The pitch is action-led ("notify me at $X"), benefit-clear (price drop alert), and **does not require account creation upfront** — email-only capture that becomes a lightweight account on confirm.

**Fix priority:**

| Fix | Impact estimate | Effort | Days open |
|---|---|---|---|
| Compare soft-gate (top of this section) | +40–60% signups from Compare | 3 hrs (4 hrs bundled w/ event-detail) | **13** |
| Compare: inline target-price capture on each comparison card (anonymous-friendly, email-only) | +15–25% on Compare→signup vs no inline pitch | 3 hrs (shares form spec w/ Day 9 work) | new (this week) |
| Compare: `?from=&returnTo=` on the (still-needed) login redirect for the deep-action-only soft-gate | +10–15% post-login completion | 30 min | 6 |

#### Step 4: Signup → Watchlist

**Current post-signup flow** (`register/page.tsx:36`): `await register(...)` → `router.push('/dashboard')`. That's it. The user lands on `/dashboard` with `city='Orlando'` (default), an empty search box, the "Sign up banner" suppressed (because they're now authed), and no prompt to do anything.

**Time-to-first-watchlist-add for a brand-new user:**

1. Land on `/dashboard`.
2. Identify they need to type a city, keyword, or date.
3. Hit Search.
4. Wait for results.
5. See the `EventCard` `+` button (a 👁️ emoji — see Day 9 daily-report finding).
6. Click it.
7. Watchlist add fires (no target-price capture).
8. Navigate to `/watchlist` (only via navbar — no in-card "View watchlist" link).
9. See the event listed with "Tracking started — prices coming soon."

The user does not learn until step 9 that there is no target-price field. They never saw a "set your first price alert" pitch. They never received a "welcome — here's how it works" email. The watchlist they just created cannot trigger a price-drop email because no target was set.

**Watchlist discoverability:** for an anonymous-then-newly-authed user, the **only** path to discover the watchlist exists is the navbar `Watchlist` link — which only appears post-auth (`Navbar.tsx:65`). There is no banner on `/dashboard` saying "Your watchlist is empty — here's how to add your first event." The `/dashboard` page renders identically pre- and post-add.

**Watchlist value clarity:** the `/watchlist` page (`watchlist/page.tsx:140–155`) shows a useful empty state ("Your watchlist is empty / Start tracking events to get price alerts and recommendations") but the user has to *navigate to it* to see this — they never see the empty state during signup.

**Fix priority (highest leverage on the entire funnel):**

| Fix | Impact estimate | Effort | Days open |
|---|---|---|---|
| **Onboarding flow (Section 5 below): post-signup, prompt user to set first price alert.** Time-to-value < 60s. | **+40–60% on post-signup activation rate** | **6–8 hrs** | new (this week) |
| **Price Alert setup form (Day 9 spec — `cro-daily-2026-04-27.md` Form Rotation section)** | First attributable savings event + unblocks 30+ feature lies | **8 hrs** | **9** |
| Watchlist add: capture target price in the same modal that handles add | +25–40% on watchlist→alert-set rate | 1.5 hr (uses the Day 9 form) | 9 |
| `/dashboard` post-auth banner: "Welcome — pick an event to track" with 3 trending suggestions | +15–25% on first-watchlist-add rate | 1 hr | new (this week) |

#### Step 5: Watchlist → Retention

**Retention loop (when it works):**

1. User adds event to watchlist with target price.
2. Cron fetches prices every 4 hours, stores in `price_history`.
3. When `min_price ≤ target_price`, cron sends email alert.
4. Alert email links back to `/watchlist` or `/event/[id]`.
5. User clicks through, sees the price, clicks `Buy Tickets`, exits to Ticketmaster (affiliate revenue moment).
6. Repeat across multiple watchlist events.

**Retention loop today:**

- Step 1: target-price not capturable in the UI.
- Step 2: works (cron exists per CLAUDE.md, populates `price_history`).
- Step 3: cannot fire — there is no target price to compare against. (Fallback "any price drop" alerts: also not implemented.)
- Step 4: alert emails do not get sent.
- Step 5: no return-visit driver.
- Step 6: there is no "across multiple watchlist events" because most users never add even one with a target price.

**Drip campaign as substitute retention loop:** runs daily at 10 UTC, queries `users` for users at days 3/7/14/21/30. Per Day 8 finding, drip queries `users` not `newsletter_subscribers`, so newsletter-only subscribers get nothing. For *registered* users, drip emails do fire on schedule — but the content (per CLAUDE.md) is generic ("3 Tips to Save..." etc.) and not personalized to their watchlist. A registered user with 0 watchlist items receives the same drip as a registered user with 8 watchlist items.

**Other retention drivers:** none in the codebase. No re-engagement email for inactive users. No "your watchlist event is in 30/14/7 days — final price check" email. No social re-share. No referral system.

**Fix priority:**

| Fix | Impact estimate | Effort | Days open |
|---|---|---|---|
| Drip bridge: drip queries `newsletter_subscribers` (or unions both tables) | Newsletter signups become reachable for first time | 1–4 hrs | **8** |
| Price Alert form (Day 9) — unlocks the entire price-drop email loop | First attributable retention event ever | 8 hrs | **9** |
| Pre-event reminder email (T-30, T-14, T-7, T-1 days before event date) for all watchlist items | +20–35% on watchlist→re-engagement | 2 hrs (cron handler + template) | new (this week) |
| Drip personalization: include user's watchlist preview + recent price-history snapshot | +15–25% drip CTR | 4 hrs | new (this week, gated on Day 9) |

### Funnel summary

| Step | Today's status | Highest-leverage fix this week |
|---|---|---|
| Visit | Healthy | (none) |
| Search | Hero misroutes acquisition traffic to `/register` | `<HomeHeroButtons />` swap (7 min) |
| Compare | Hard auth gate, hides product value prop | Soft-gate `/compare` (Day 13 carry-over, 3 hrs) |
| Signup | 3-field form, no attribution, no autoComplete | A/B test below + Section 3 spec |
| Watchlist | No target-price UI, no first-action prompt | Price Alert form (Day 9, 8 hrs) + Onboarding (Section 5, 6 hrs) |
| Retention | Drip mis-targeted; price alerts do not fire | Drip bridge fix (Day 8, 1–4 hrs) |

**The two interventions that unlock the entire downstream funnel:** Compare soft-gate (Day 13) and Price Alert form (Day 9). Together: **~11 dev hours.** Together they unlock ~30 feature lies + the platform's first attributable savings event + the entire retention loop.

---

## 2. A/B Test Spec (1 ready-to-implement)

This week's biggest drop-off is **Compare → Signup** (~70% loss; 13 days open). The test below targets that step. It is the single highest-impact, lowest-effort A/B candidate on the backlog and pairs with the soft-gate work that is already required for SEO content-parity reasons.

### A/B Test #001: `/compare` Soft-Gate vs Hard-Redirect

**Page:** `/compare`

**Hypothesis:** If we replace the hard `router.push('/login')` redirect with a soft-gate that shows the first 3 matched comparisons + an inline email-capture for price alerts, then the **/compare → signup conversion rate** will increase by **40–60%** because users currently see *zero* value before being asked to commit, and behavioral economics is unambiguous on this: demonstrating value before asking for the ask increases conversion when the demonstration itself is the value being purchased.

**Control (today's behavior):**
- Anonymous visitor lands on `/compare`.
- `useEffect`-equivalent fires: `router.push('/login')`.
- Visitor sees the login screen. No event data, no comparison, no pricing, no `BEST` badge, no savings calc.
- Visitor has two choices: log in (requires account they don't have) or close the tab.
- Estimated bounce: ~70% of anonymous Compare landings.

**Variant (soft-gate):**
- Anonymous visitor lands on `/compare`.
- The page renders normally — search form at top, results below.
- Visitor types a search and hits Compare. Results render.
- For the **first 3 matched-event comparison cards**, the full side-by-side rendering is shown (Ticketmaster price, SeatGeek price, `BEST` badge, savings calc, both `Buy on...` buttons). This is the page's value-prop demonstration.
- Below the first 3 cards, a **soft-gate band** appears:

  > **Want to compare more events?**
  > Create a free account to see all matches, set price alerts, and save events to your watchlist.
  > [ Email ▢ ]  [ Continue ]

- The band collects email-only first (no password). On submit, it creates a `newsletter_subscribers` row with `source='compare-softgate'` and a one-time-use token, emails a magic link to complete the account setup with password later.
- Anonymous visitors can still see the **first 3 comparisons** every time they visit `/compare` (no rate limiting in v1).

**Primary metric:** `/compare` → newsletter-subscriber conversion rate (sessions with `compare_softgate_submit` event divided by sessions with `compare_search_completed` event).

**Secondary metrics:**
- `/compare` → full account creation rate (downstream of email capture).
- `/compare` average session duration.
- `/compare` bounce rate (sessions with one pageview only).
- Compare → search-from-compare → comparison-rendered rate (does the soft-gate variant create a multi-search session?).
- Newsletter subscriber unsubscribe rate within 30 days (does compare-source signup retain?).

**Sample size needed:** Targeting 95% confidence on a 40% relative lift from a baseline of (estimated) ~5% control conversion to ~7% variant conversion. With those parameters and Evan Miller's calculator, ~3,500 sessions per variant = **7,000 sessions total.** At an estimated 800 weekly `/compare` sessions, **~9 weeks of data.** Reduce to ~5 weeks if the lift is closer to 60%.

**Duration:** **5 weeks minimum.** Run through any seasonal effects (e.g., World Cup-driven spikes) by either holding evenly across both variants or pausing the test during the spike.

**Implementation:**

1. **Backend:** add a `POST /api/newsletter/subscribe-with-token` route that:
   - Inserts into `newsletter_subscribers (email, source, magic_token, magic_token_expires_at)` with `source='compare-softgate'` and a uuid token expiring in 24h.
   - Emails the user a magic link `https://www.ticketscan.io/register/complete?token=<uuid>`.
2. **Frontend:** modify `compare/page.tsx`:
   - Remove the early `if (!authLoading && !user) { router.push('/login') }` block (`compare/page.tsx:87–90`).
   - In the matched-events render, slice to first 3 for anonymous users; render the soft-gate band after.
   - Wire the band to the new POST route.
3. **Register-complete page:** add `web/src/app/register/complete/page.tsx` that takes a `?token=<uuid>` query param, prefills the email from the token lookup, asks for password only, and on submit upgrades the `newsletter_subscribers` row to a full `users` row.
4. **A/B framework:** since none ships today, the simplest path is a **deterministic 50/50 split via cookie**: on first `/compare` load, set `ab_compare_gate=control|variant` based on a random byte; persist 30 days; honor the cookie for the duration of the test. Alternatively, use `crypto.subtle.digest('SHA-256', user_id_or_session_id)` modulo 2 if a session-id is reliably available. Manual analysis via Postgres queries against `compare_landings (cookie_id, variant, action, ts)` table or whatever telemetry table Agent 7 ships.
5. **GTM events** (Day 19 dependency, but the test cannot ship without them):
   - `compare_landing` with `variant: 'control'|'variant'`
   - `compare_search_completed`
   - `compare_softgate_submit` (variant only)
   - `compare_softgate_dismiss` (variant only)
   - `compare_login_link_click` (control only)

**Effort:**
- Backend: 2 hrs.
- Frontend: 3 hrs (page modifications + register-complete page).
- A/B framework + GTM wiring: 2 hrs.
- Test instrumentation + dashboard: 2 hrs (Agent 7).
- **Total: ~9 hrs to ship + 5 weeks to read.**

**Risks / what could go wrong:**
- **Cannibalization:** the soft-gate captures emails that would have become full registrations under the control. Need to monitor downstream account-creation rate — if email-only captures don't convert to full accounts within 14 days, the soft-gate is a vanity metric.
- **SEO regression:** the variant restores indexable content to `/compare` (Day 13 content-parity finding gets fixed as a side effect — net positive).
- **Login link erosion:** existing users who land on `/compare` and would have logged in via the control's redirect now have to find the `Login` link manually. Mitigate by keeping a prominent "Already have an account? Log in →" link on the soft-gate band.
- **Magic-link fatigue:** if the magic-link emails fail or land in spam, the email-only captures don't convert. Test deliverability via the SMTP setup (Gmail SMTP per CLAUDE.md) before launch.

**Why this test, not the other 9 candidates from the homepage report:** the homepage tests in `cro-daily-2026-04-27.md` are mostly **cleanup work** (regression fixes, removal of fabricated claims, hero rewrites). They have impact but are not test-shaped — they're "do the right thing" decisions. The Compare soft-gate is a true A/B candidate because (a) the control has been live for 13 days with measurable bad outcomes, (b) the variant is structurally different in a way reasonable people could disagree about (does soft-gate cannibalize hard-gate conversions?), and (c) the test outcome will inform a wider design pattern (event-detail soft-gate, watchlist soft-gate).

---

## 3. Signup Flow Optimization

**Current flow** (`register/page.tsx:9–129`):

1. User clicks "Sign Up" in navbar (`Navbar.tsx:101–106`, `:182–188` mobile).
2. Lands on `/register`.
3. Sees a 3-field form: email, password, confirmPassword.
4. Submits.
5. `useAuth().register(email, password)` fires → POST to `/api/auth/register` → JWT returned.
6. `router.push('/dashboard')` → user lands on `/dashboard` with default city 'Orlando', empty search, no prompt.

**Problems with the current flow:**

| # | Problem | Reference |
|---|---|---|
| 1 | No `?source=` query-param ingestion. The page has no way to attribute *which* CTA the user came from. | `register/page.tsx` (no `useSearchParams`) |
| 2 | No `?returnTo=` query-param. Post-register `router.push('/dashboard')` is hardcoded. A user who clicked "Track this event" on EventCard and got bounced to register lands back on `/dashboard`, not on the event they wanted to track. | `register/page.tsx:36` |
| 3 | No `autoComplete` attributes on form fields. Browsers don't auto-fill email or suggest a password. | `register/page.tsx:69–107` |
| 4 | No `name` attributes on form fields. Browsers and password managers can't reliably parse the form. | `register/page.tsx:69–107` |
| 5 | No social login (Google, Apple, GitHub). Industry data: single-tap social signup converts ~15–25% better than email+password forms in B2C. | (no OAuth integration in the codebase) |
| 6 | No preference capture during signup. The platform supports `user_favorites (favorite_type, favorite_name)` but never asks the user to populate it during the highest-attention moment. | `user_favorites` schema per CLAUDE.md, no UI |
| 7 | No progress indicator. The form is a single page; no signal that anything happens after submit. | `register/page.tsx:44–127` |
| 8 | Password requirements (≥8 chars) only surface as an error after submit. No inline strength indicator. | `register/page.tsx:27–30` |
| 9 | No "Continue as guest" or "Track without an account" path. Users who want to track one event but don't want to commit have to bounce. | (no anonymous-track API) |
| 10 | No explicit value-prop on the registration page. Headline: "Create your account / Start tracking ticket prices today." Generic. Doesn't say *what specifically* the user will get. | `register/page.tsx:50–55` |

### Proposed redesigned signup flow

**Two-step progressive disclosure** — email-first, password on next visit (or immediately, if user prefers).

#### Step 1: "What are you tracking?" (intent capture, 0 fields → context for value prop)

Triggered when a user clicks **any** Sign Up CTA. Replaces the current `/register` with a context-aware variant:

```
+------------------------------------------------------------+
|  TicketScan — set your first price alert in 30 seconds.   |
|                                                            |
|  What event are you tracking?                              |
|  +------------------------------------------------+       |
|  | [pre-filled if `?event=...` passed in URL]    |  Search|
|  +------------------------------------------------+       |
|                                                            |
|  Don't have a specific event in mind? [Skip → ]            |
|                                                            |
|  Already have an account? [Log in →]                       |
+------------------------------------------------------------+
```

If the user came from a CTA that knows the event (`/register?source=eventcard&event_id=12345`), the search input is pre-filled and the user can hit Search to see the comparison + alert-setup screen directly.

If they Skip, they continue to Step 2.

#### Step 2: Set the price alert (1 field — target price)

```
+------------------------------------------------------------+
|  Lakers vs Celtics — Sat May 30, 2026 — Crypto.com Arena   |
|  Current price: $89                                        |
|  Average over last 30 days: $112                           |
|                                                            |
|  Notify me when the price drops to:                        |
|  $ [85]  ← suggested 85% of current                        |
|                                                            |
|  Email for alerts:                                         |
|  [you@example.com]                                         |
|                                                            |
|  [ Set my alert →  ]                                       |
|                                                            |
|  No password needed. We'll save your alert and email you   |
|  when the price hits $85.                                  |
+------------------------------------------------------------+
```

**Backend:** create a row in `newsletter_subscribers` (email + magic-token) AND a row in `watchlist` with `target_price=85`, `user_id=NULL`, `magic_token=<same uuid>`. The cron handler, when it finds a watchlist row with NULL `user_id` and a magic token, treats it as an anonymous-watchlist row and emails the alert directly via the magic-token-resolved email.

#### Step 3: "Set a password to manage your alerts" (deferred, post-conversion)

The first price alert email contains:

> Your alert hit. The Lakers vs Celtics ticket is now $79 on SeatGeek. [Buy on SeatGeek] · [Buy on Ticketmaster]
>
> P.S. Want to manage your alerts on the web? [Set a password →] (one-click magic link)

The user only sets a password **after they have received value.** Industry-standard "value-first" funnel pattern.

#### Step 4: "Tell us your favorites" (post-account, optional)

After password is set, single page:

```
What are you into? (pick all that apply)
[ NBA ] [ NFL ] [ MLB ] [ NHL ] [ Concerts ] [ Theater ] [ World Cup ]

Favorite team(s)? (start typing)
[ Lakers x ] [ Add another ]

Favorite city for events?
[ Los Angeles, CA ]

[ Save preferences → goes to /dashboard prefilled ]
[ Skip for now → goes to /watchlist ]
```

This populates `user_favorites` and the dashboard's default city. The dashboard now opens to "LA Lakers tickets" instead of "Orlando" generic.

### Wireframe-level diff vs current

| Aspect | Current | Proposed |
|---|---|---|
| Number of fields before first conversion | 3 (email + 2 password fields) | 2 (event search + email — and event is pre-filled in 80% of cases) |
| Time to first watchlist + alert | ∞ (target-price UI doesn't exist) | < 60s |
| Password required upfront | Yes | No (deferred to post-value email) |
| Social login | No | Optional Google add (Phase 2 — see below) |
| Source attribution | None | Always present via `?source=` |
| Returns to original intent | No (always `/dashboard`) | Yes (via `?returnTo=` and event pre-fill) |
| Captures preferences | No | Yes (post-conversion, optional) |

### Should we add social login?

**Recommendation: Phase 2, not Phase 1.** Adding Google/Apple OAuth costs ~1.5 dev days (OAuth flow + token storage + edge-cases for email collisions) and the lift is meaningful (~15–25% on the registration step) but the **bigger problem today is that the registration step itself is wrong.** Email-first + magic-link converts strictly better than email+password+social-only on most B2C funnels because magic-link doesn't require *any* account-construction step at all. Ship email-first first; add Google as a secondary option once the conversion baseline is established.

**When to revisit social login:** if email-first + magic-link establishes a baseline ≥ 8% landing→alert-set rate, layer social login as an A/B variant for the password-setting step (Step 3). Until then, social-login dev time is better spent on the Compare soft-gate and the Price Alert form.

### Should signup capture preferences?

**Yes, but post-conversion (Step 4 above), not pre-conversion.** Preference capture in Step 1 or 2 increases time-to-value and lowers conversion. Preference capture *after* the user has already received value (the alert email) is high-quality data because the user is now invested.

### Progress indicator

The proposed flow has implicit progress:

- Step 1 → headline says "set your first price alert in 30 seconds"
- Step 2 → 1 button "Set my alert"
- (alert email arrives — value delivered)
- Step 3 → 1 button "Set a password" (in email)
- Step 4 → "Save preferences" or "Skip for now"

No explicit "1 of 4 / 2 of 4" indicator needed because each step is structurally short. Progress indicators help when steps are long; here, each step is single-action.

### Implementation cost estimate

| Component | Effort |
|---|---|
| Step 1 + Step 2 page (+ uses Day 9 Price Alert form) | 4 hrs |
| Backend: `newsletter_subscribers + watchlist + magic_token` row creation; magic-token-resolved alert path | 4 hrs |
| Step 3: register-complete (magic-link → password set) page | 2 hrs |
| Step 4: preferences page (writes to `user_favorites`) | 2 hrs |
| Email templates (welcome, alert-with-set-password CTA, preferences-saved confirmation) | 3 hrs |
| Testing + edge cases (email collision, expired tokens, etc.) | 3 hrs |
| **Total** | **~18 hrs / ~2.5 dev days** |

This is a ~2.5-day investment. Pairs with the Price Alert form (Day 9, 8 hrs) — they share most of Step 2's UI and backend. Combined: **~3.5 dev days for the entire signup flow rebuild.**

---

## 4. Popup & Modal Strategy

**Today's modal/popup inventory** (grep-confirmed):

| Component | File | Trigger | Behavior |
|---|---|---|---|
| EventCard sign-up overlay | `EventCard.tsx:80–104` | Anonymous user clicks `+` watchlist button | Modal: "Track This Event / Sign Up Free / Maybe Later" |

That's the entire list. **No newsletter popup, no exit-intent, no scroll-depth, no return-visitor, no time-delay, no abandoned-search recovery.**

The brief asserts a newsletter popup exists. It does not. This section therefore designs the popup strategy from scratch, anchored to the funnel-step drop-offs in Section 1.

### Strategy: 4 popups, ordered by leverage

#### Popup 1: Compare-page price-alert capture (replaces hard-gate redirect)

This is the same surface as A/B Test #001 in Section 2, but framed here as a popup-class pattern: the soft-gate band itself behaves like a popup (it appears below the first 3 comparison cards, scroll-anchored).

**Trigger condition:** anonymous user reaches the bottom of the first 3 matched comparisons on `/compare`. (Variant: trigger on first 30s of dwell time on `/compare`, whichever fires first.)

**Copy:**
- Headline: **Set a free price alert on this comparison**
- Body: *We'll email you when any of these prices drops. No account required to start.*
- CTA: **Set my alert →**
- Dismiss: *No thanks — just browsing*

**Frequency:** once per session per user. After dismiss, suppress for 24 hours.

**Mobile adaptation:** sticky bottom band (not full-screen modal). Mobile users on `/compare` are mid-comparison; full-screen interruption breaks the action.

**Expected conversion rate:** **6–9%** of `/compare` sessions → email submit. Anchor: industry benchmark for context-relevant inline capture is 3–5%; this is higher because the value prop is concretely tied to what the user is looking at.

**Effort:** ships with A/B Test #001 (Section 2). ~9 hrs total.

---

#### Popup 2: Watchlist-add price-alert prompt (post-add, modal)

**Trigger condition:** logged-in user successfully adds an event to their watchlist via `EventCard.tsx:43–51` — fires immediately after the API success, before the `+` button changes to `✓`.

**Copy:**
- Headline: **Track price drops on this event**
- Body: *Set a target price and we'll email you the moment it hits.*
  - Sub-line: *Current: $89 · 30-day average: $112 · Suggested target: $85*
- Field: `Notify me when the price drops to: $[__]` (default 85% of current)
- CTA: **Set alert →**
- Dismiss: *Track without alert*

**Frequency:** once per watchlist-add event (no suppression — every add gets the prompt because every add is a high-intent moment).

**Mobile adaptation:** full-screen sheet with the same fields, slide up from bottom. iOS pattern.

**Expected conversion rate:** **45–60%** of watchlist-adds → alert set. The user already invested in adding the event; the marginal ask of setting a target price is small.

**Effort:** uses the Day 9 Price Alert form spec. Frontend integration ~1.5 hrs once the form ships.

---

#### Popup 3: Newsletter capture (time-delay, dismissable, single-show)

**Trigger condition:** any session, fires on **either**:
- 60 seconds of dwell time on any page **and** scroll depth ≥ 40%, OR
- Exit intent detected (cursor moves toward browser chrome at the top of the viewport)

Whichever fires first. **Mobile:** scroll-only trigger (no exit intent on mobile). 70% scroll depth + 45 seconds dwell.

**Copy:**
- Headline: **Get the weekly ticket-deals digest**
- Body: *We email Tuesdays — best deals across Ticketmaster, SeatGeek, and StubHub. No spam.*
- Field: `[email] [Subscribe]`
- Dismiss: *No thanks*

**Frequency:** once per visitor (cookie-suppressed for 30 days after dismiss). If the user submits, suppress permanently.

**Mobile adaptation:** thin bottom slide-up sheet (60vh max). No full-screen takeover on mobile — that gets penalized by Google's intrusive-interstitial signal and Lighthouse SEO scores.

**Expected conversion rate:** **0.8–1.6%** of triggered sessions. Anchor: industry benchmark for non-intrusive newsletter popups is 1–3%; the lower band reflects the platform's current trust state (no real social proof until Section 1 fixes ship).

**Effort:** ~3 hrs (component + cookie suppression + mobile-vs-desktop branch + GTM events).

**Dependency:** drip bridge fix (Day 8) must ship first or every capture sits in a dead-letter queue.

---

#### Popup 4: Return-visitor "your watched prices changed" banner (not a modal — a banner)

**Trigger condition:** logged-in user, second-or-later session, has at least one watchlist item with non-null `current_min_price`, **and** any watchlist item has changed by ≥ 5% since the user's last `/watchlist` view.

**Surface:** thin banner at top of every page (above the navbar drop-shadow), visible until dismissed or user navigates to `/watchlist`.

**Copy:**
- *2 prices changed since you were last here. [View watchlist →] [×]*

**Frequency:** once per "return-visit session" (cookie suppression for 24 hours after dismiss or `/watchlist` view).

**Mobile adaptation:** same banner pattern, slightly shorter copy: *"2 price updates →"*.

**Expected conversion rate:** **40–55%** click-through to `/watchlist`. This is a high-rate banner because the relevance is high (it only fires when there's actual movement on the user's tracked items).

**Effort:** ~3 hrs (state tracking via `last_watchlist_view_at` column on `users` + `change_since_last_view` query + banner component).

**Dependency:** schema add `users.last_watchlist_view_at TIMESTAMP NULL`.

### Popup strategy summary

| # | Popup | Surface | Trigger | Expected rate | Effort | Status |
|---|---|---|---|---|---|---|
| 1 | Compare price-alert | `/compare` inline + sticky-bottom mobile | Anonymous, after first 3 cards | 6–9% capture | (ships w/ A/B #001) | new |
| 2 | Watchlist price-alert | EventCard modal | Post-add (logged-in) | 45–60% alert-set | 1.5 hr (uses Day 9 form) | new |
| 3 | Newsletter capture | Time + exit + scroll | 60s dwell + 40% scroll OR exit-intent | 0.8–1.6% capture | 3 hr | new (gated on Day 8) |
| 4 | Return-visit price banner | Top of page, all routes | 2nd+ session, ≥ 5% change since last view | 40–55% CTR | 3 hr | new |

**Total weekly ship:** ~7 hrs (pops 2 + 3 + 4 + integration). Pop 1 ships with the Compare A/B test (~9 hrs included in Section 2).

**Critical: Google intrusive-interstitial guidance.** Pops 3 and 4 must NOT be full-screen takeovers on mobile, or Google penalizes the page in mobile search results. The mobile patterns above (slide-up sheet, banner) are interstitial-safe.

---

## 5. Onboarding Flow Design

**Current state:** no onboarding component exists in `web/src/`. Grep for `onboard|tour|welcome|first.run|first.time|introjs|intro\.` matches in data files (`worldcup.ts`, `venues.ts`, `blog.ts`, `categories.ts`) and in unrelated pages — no onboarding UI anywhere. The post-signup experience is a 1-line `router.push('/dashboard')` that drops the user on a generic search page.

This section designs onboarding from scratch.

### Design principles

1. **Time to value < 60 seconds.** From clicking "Sign Up" to receiving a confirmable signal that "I just set a price alert" must take less than a minute. The success state is the moment the user thinks "okay, this works."
2. **Maximum 3 active steps.** Each step asks for at most 1 piece of information.
3. **Each step delivers visible value.** No "tell us about yourself before we let you in" gates. Each step must visibly progress the user toward their goal (a price alert).
4. **Skippable but not encouraged.** "Skip" is a small, low-contrast text link. The Continue button is the primary action.
5. **Mobile-first.** ~70% of cold traffic is mobile (anchor — site analytics will confirm). The flow must work in a 375x667 viewport.
6. **Reversible.** Every step has a back arrow. Users who realize they want to track a different event can back out.
7. **Pre-fillable from referrer context.** If the user clicked "Track this event" on `EventCard` and got bounced through signup, the event is pre-filled in onboarding. Don't ask for what the user already told us.

### Onboarding flow (4 steps total, last 2 are conditional)

```
                                    +---------------+
                                    |    SIGN UP    |
                                    | (Section 3)   |
                                    +-------+-------+
                                            |
                                            v
+--------------------+  if event ctx  +-----+----------+  no event ctx
| Step 1 (no event):  | <-----------+ |  ROUTER        | --------------+
| "What are you      |               +----------------+               |
|  tracking?"         |                                                |
| Search input ----+  |                                                |
+--------------------+ +-->+-------------------+                       v
        |                  | Step 2:           |              +-------------------+
        | (search done)    | Set target price  | <----+       | Step 1b (no ctx): |
        +----------------> | + email if anon   |      |       | "What are you     |
                           +-------------------+      |       |  into?"           |
                                    |                 |       | Multiselect       |
                                    | (alert set)     |       +-------------------+
                                    v                 |               |
                           +-------------------+      |               | (selected)
                           | Step 3 (success): |      |               v
                           | "Alert set! ..."   |      |       +-------------------+
                           | Suggest 2 more    |      |       | Step 2b:          |
                           | events.            |      +<------+ "What city?"      |
                           +-------------------+              | input              |
                                    |                          +-------------------+
                                    | (skip or add another)            |
                                    v                                  v
                           +---------------------------------------------+
                           |  /dashboard (pre-filled w/ user's city +    |
                           |   category preferences if set)              |
                           +---------------------------------------------+
```

### Step-by-step

#### Step 1: "What event are you tracking?" (intent capture, ~10s)

**Headline:** Set your first price alert.
**Field:** Event search (dashboard-style: city + keyword).

If the user came from `EventCard.tsx` "Track this event" with `?event_id=12345`, this step is **skipped entirely** and the user goes directly to Step 2 with the event pre-loaded.

If the user has no event context (came from generic homepage signup), this step shows. They type a search, see results inline (top 3 only), pick one → Step 2.

**Skip CTA:** *"I'm just exploring →"* (low-contrast text link, sends to Step 1b).

#### Step 1b: Category preference (conditional — only if user skipped Step 1)

**Headline:** What kind of events are you into?
**Field:** Multi-select chips: NBA · NFL · MLB · NHL · Concerts · Theater · World Cup 2026
**Continue CTA:** *"Continue →"* (writes to `user_favorites` with `favorite_type='category'`).

**Skip CTA:** *"Skip →"* (sends to /dashboard).

#### Step 2: "Notify me when this drops to..." (alert setup, ~15s)

Uses the Day 9 Price Alert form spec.

**Headline:** {event.name} — {event.date} — {event.venue}
**Context:** *Current: ${event.lowestKnownPrice} · 30-day average: ${event.avg30DayPrice}*
**Field 1:** Target price input (default 85% of current, see Day 9 spec).
**Field 2 (anonymous only):** Email input.
**Continue CTA:** *"Set alert →"*

**Skip CTA:** *"Track without alert →"* (writes the watchlist row with `target_price=NULL`, sends to Step 3).

#### Step 2b: City (conditional — only if user came through Step 1b)

**Headline:** Where do you go to events?
**Field:** City input (typeahead from `cities.ts`).
**Continue CTA:** *"Save my preferences →"* (writes `user_favorites` with `favorite_type='city'`, sends to Step 3-alt).

**Skip CTA:** *"Skip →"* (sends to Step 3-alt).

#### Step 3: Success state ("You're all set")

**Path A** (came through Step 1 + 2): Alert is set.

**Headline:** Alert set. We'll email you when it drops.
**Body:** *We'll check the price every 4 hours. The first email will arrive at {user.email} as soon as the price hits ${target_price}.*
**Suggestion section:** *People tracking this event also tracked:* [3 event cards, related by venue/team/category, each with a 1-click "Set alert" button].
**Primary CTA:** *Add another alert →* (back to Step 1)
**Secondary CTA:** *View my watchlist →* (sends to `/watchlist`).

**Path B** (came through Step 1b + 2b): No alert yet, only preferences.

**Headline:** Got it. Your dashboard is now personalized.
**Body:** *We'll show you {category} events in {city} first. Search for a specific event below to set your first price alert.*
**Section:** Inline trending events for the user's category + city, each with "Set alert" CTA.
**Primary CTA:** *Browse events →* (sends to `/dashboard?city={city}&category={category}`)

### Mobile considerations

- Each step renders as a single full-viewport screen — no horizontal scrolling, no nested modals.
- `< 375px` viewport: stack everything vertically; CTAs become full-width.
- Top-of-screen progress dots (1 of 3 / 2 of 3) for orientation, but no "step counter" text (visually noisy on mobile).
- Back-arrow is a top-left tap target ≥ 44pt per Apple HIG.

### Time-to-value math

Optimistic path (user came from `EventCard?event_id=...`):
- Sign up form: 10s (email + password if Step 3 comes later, OR email + magic-link if Step 1 captures email).
- Step 1: skipped.
- Step 2: 15s (default target price accepted in 1 click).
- Step 3: 5s (read success).
- **Total: ~30s.**

Generic path (user came from homepage Sign Up):
- Sign up form: 10s.
- Step 1: 15s (search + pick).
- Step 2: 20s (read context + adjust target).
- Step 3: 5s.
- **Total: ~50s.** Within the < 60s budget.

Skip path (user is exploring, doesn't want to commit to an event):
- Sign up form: 10s.
- Step 1: 5s (skip).
- Step 1b: 15s (multi-select 2–3 categories).
- Step 2b: 10s (city).
- Step 3-alt: 5s.
- **Total: ~45s.** No alert set, but personalized dashboard ready.

### Implementation cost estimate

| Component | Effort |
|---|---|
| Step 1 + Step 1b page | 2 hrs |
| Step 2 + Step 2b page | 3 hrs (uses Day 9 Price Alert form) |
| Step 3 (Path A + B success states + suggestion section) | 3 hrs |
| Backend: trending-events-by-related-team/venue endpoint for Step 3 suggestions | 2 hrs |
| Backend: write `user_favorites` from preference steps | 1 hr |
| Routing logic (post-signup → onboarding state machine) | 2 hrs |
| Mobile responsive QA | 2 hrs |
| **Total** | **~15 hrs / ~2 dev days** |

Combines with signup flow rebuild (Section 3, ~18 hrs) + Price Alert form (Day 9, ~8 hrs) for a **~5.5 dev-day fully-rebuilt acquisition + activation funnel.**

---

## Cross-Agent Handoffs

| To | Request | Section reference | Priority |
|---|---|---|---|
| **Content (Agent 1)** | Onboarding copy: 4 step headlines, 4 sub-headlines, all CTAs (primary + skip), 2 success states, suggestion-card copy | Section 5 | P0 |
| **Content (Agent 1)** | Compare-page soft-gate copy: headline + body + CTA + login-link + dismiss | Section 2 + Popup 1 | P0 |
| **Content (Agent 1)** | Newsletter popup copy: headline + body + CTA + dismiss + (mobile shorter variant) | Popup 3 | P1 |
| **Content (Agent 1)** | Return-visit banner copy: short variants for desktop + mobile | Popup 4 | P1 |
| **Content (Agent 1)** | Email templates: anonymous-watchlist alert email, magic-link "set a password" email, weekly digest, pre-event reminder | Section 1 retention + Section 3 Step 3 + Section 5 | P0 |
| **Growth (Agent 8)** | Onboarding state machine: 6-step routing logic + skippable paths (this is implementation work, not copy). Recommend bundling with the signup flow rebuild (Section 3) for one PR. | Section 5 | P0 |
| **Growth (Agent 8)** | Drip personalization: include user's watchlist preview + recent price-history snapshot | Section 1 retention | P1 |
| **Growth (Agent 8)** | Pre-event reminder cron handler + email template | Section 1 retention | P1 |
| **Analytics (Agent 7)** | A/B Test #001 GTM events: `compare_landing(variant)`, `compare_search_completed`, `compare_softgate_submit`, `compare_softgate_dismiss`, `compare_login_link_click` | Section 2 | P0 |
| **Analytics (Agent 7)** | Onboarding GTM events: `onboarding_step_view{step}`, `onboarding_step_complete{step}`, `onboarding_step_skip{step}`, `onboarding_alert_set` | Section 5 | P0 |
| **Analytics (Agent 7)** | Popup 2/3/4 dispatch + dismiss + submit events. Cohort by trigger condition. | Section 4 | P1 |
| **Analytics (Agent 7)** | A/B framework: cookie-based deterministic split logic, OR if Agent 7 prefers a managed solution (PostHog, GrowthBook), recommend before A/B Test #001 ships. **Same cookie infrastructure used for popup suppression.** | Section 2 + Section 4 | P0 |
| **Analytics (Agent 7)** | Funnel telemetry (Day 19 still open): `view_compare`, `submit_compare_search`, `submit_register`, `add_to_watchlist`, `set_target_price`, `view_watchlist`, `click_buy_external` — these are needed regardless of A/B work. | Section 1 (whole funnel) | P0 |
| **Dev backlog** | Compare soft-gate (A/B Test #001) — 9 hrs | Section 2 | P0 |
| **Dev backlog** | Signup flow rebuild (email-first + magic-link + register-complete + preferences) — 18 hrs | Section 3 | P0 |
| **Dev backlog** | Onboarding flow — 15 hrs | Section 5 | P0 |
| **Dev backlog** | Popup 2 + 3 + 4 — 7 hrs | Section 4 | P1 |
| **Dev backlog** | Schema: add `users.last_watchlist_view_at TIMESTAMP NULL`. | Popup 4 | P1 |
| **Dev backlog** | Schema: extend `watchlist` to allow `user_id NULL` + `magic_token UUID NULL` + `magic_token_expires_at TIMESTAMP NULL` for anonymous-watchlist row support. Cron handler updates. | Section 3 + Section 5 + Popup 1 | P0 |
| **Dev backlog (Day 9 carry)** | Price Alert form (frontend + backend + email) — 8 hrs. **Without this, Sections 3, 4, and 5 cannot fully ship.** | Day 9 | **P0 — gating** |
| **Dev backlog (Day 8 carry)** | Drip bridge: drip queries `newsletter_subscribers` (or unions both tables) | Section 1 retention + Popup 3 | **P0 — gating** |
| **Dev backlog (Day 13 carry)** | Compare hard-gate → soft-gate (formalized as A/B Test #001 above) | Section 2 | **P0 — gating** |
| **Dev backlog (Day 19 carry)** | Wire GTM event tags + per-form push | All sections require it | **P0 — gating** |
| **Compliance / Legal (no agent)** | Magic-link tokens are session-equivalent for the purposes of GDPR/CCPA. Confirm magic-link emails contain unsubscribe + privacy-policy links before launch. | Section 3 + Popup 1 | P1 |
| **SEO (Agent 4)** | Compare soft-gate ships indexable content to `/compare` for the first time in 13 days. Re-submit `/compare` URL to Google Search Console after launch + monitor `WebApplication` JSON-LD content-parity score. | Section 2 | P1 |
| **Ads (Agent 5)** | Compare soft-gate ships → `/compare` becomes a viable ad LP for the first time. Coordinate paid-traffic redirection from `/blog/[slug]` (current truthful LP) to `/compare?keyword={search_term}` deep-links once stable. | Section 2 | P2 (post-launch) |

---

## Weekly Action Items Summary

| # | Action | Effort | Days open | Section |
|---|---|---|---|---|
| 1 | A/B Test #001 — Compare soft-gate vs hard-redirect | 9 hrs | new (Day 13 carry) | 2 |
| 2 | Signup flow rebuild (email-first + magic-link + preferences) | 18 hrs | new (Day 3 carry) | 3 |
| 3 | Onboarding flow (4 steps, conditional path) | 15 hrs | new | 5 |
| 4 | Popup 2: Watchlist post-add price-alert prompt | 1.5 hrs | new (Day 9 carry) | 4 |
| 5 | Popup 3: Newsletter time-delay + exit-intent | 3 hrs | new (Day 8 carry) | 4 |
| 6 | Popup 4: Return-visit price-change banner | 3 hrs | new | 4 |
| 7 | Schema: anonymous-watchlist support (`user_id NULL` + magic-token) | 1.5 hrs | new | 3 + 5 |
| 8 | Schema: `users.last_watchlist_view_at` | 0.5 hr | new | 4 |
| 9 | Pre-event reminder cron handler + email template | 2 hrs | new | 1 (retention) |
| **Gating P0s carried over from daily reports** | | | | |
| G1 | Price Alert form (Day 9) | 8 hrs | **9** | gates 4 + 5 |
| G2 | Drip bridge (Day 8) | 1–4 hrs | **8** | gates retention |
| G3 | GTM event tags wiring (Day 19) | 4–6 hrs | **19** | gates A/B + telemetry |
| G4 | Register form rewrite (Day 6) — partially absorbed by Section 3 | 1.75 hrs | **9** | gates Section 3 |

**Cumulative weekly NEW work: ~57 hrs / ~7 dev days.** Plus ~17–22 hrs of gating P0 carry-overs from daily reports (Day 8 + 9 + 13 + 19) for a total of **~75–80 hrs / ~10 dev days.**

**The two interventions that unlock everything else:** Compare soft-gate (Day 13) and Price Alert form (Day 9). **Together: ~17 dev hours.** Together they fix the Compare drop-off, ship indexable content for the first time in 13 days, unlock the entire alert-and-retention loop, and remove ~30 site-wide feature lies.

---

## What this report is NOT

- A new audit of the homepage. That's `cro-daily-2026-04-27.md`. The findings there feed Section 1 of this report but are not duplicated.
- A re-litigation of carry-over P0s. They're flagged in the gating-P0 table; details live in the daily reports they came from.
- A copy spec. Copy hand-offs are in the Cross-Agent Handoffs table → Content (Agent 1).
- A finished implementation plan. The Effort columns are estimates anchored to comparable work in the codebase; they should be re-validated against engineer-of-record availability and current dev-stack capacity.

## Next Wednesday's weekly run

Per the agent brief, this is a Wednesday-cadence weekly. Today is Monday 2026-04-27 (the brief was triggered now). The next scheduled weekly fires Wednesday 2026-04-29, two days from now. Recommend the next weekly:

- **Re-measure the funnel** (Section 1) once any of A/B Test #001, signup flow rebuild, or onboarding has shipped.
- **Design A/B Test #002** based on the Wed-of-week's biggest unresolved drop-off. Most likely candidate: signup-flow A/B (current 3-field control vs Section 3 email-first variant), once both are wired.
- **Audit the Day 8 / 9 / 13 / 19 unblocks.** If they've shipped, the funnel arithmetic in Section 1 is rebuildable from telemetry instead of estimates. If they haven't shipped, the daily-report cadence has now compounded these into a critical-path debt — flag for executive review.
