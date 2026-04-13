# CRO Weekly Report — 2026-04-13
**Agent:** CRO Specialist (Agent 6)
**Scope:** Full funnel audit, A/B test design, signup flow optimization, popup strategy, onboarding design

---

## 1. Full Funnel Audit

### Funnel Overview

```
Visit → Search → Compare → Signup → Watchlist → Retain
  |        |         |         |          |          |
  |   Public    Login-gated   Form    Discovery   Drip emails
  |                           friction  problem    only mechanism
```

### Step 1: Visit → Search

**Current State:**
- Homepage hero: "Compare. Track. Save." headline with "Get Started Free" CTA linking to `/register`
- No search bar on homepage — users must navigate to `/dashboard` to search
- Dashboard is labeled "Search" in navbar

**Friction Points:**
- **Critical: No homepage search bar.** Users land on a marketing page and must click through to search. Every extra click costs ~20-30% drop-off.
- "Get Started Free" CTA sends users to registration, not search. Users who want to explore before committing bounce here.
- "See How It Works" secondary CTA scrolls down but doesn't lead to search either.

**Recommendations:**
1. **Add a search bar directly in the homepage hero.** Let users search immediately without navigating away. This is the single highest-impact change.
2. Change primary CTA to "Search Events" or "Find Tickets" with a secondary "Create Free Account" link.
3. Add popular search suggestions below the search bar ("NBA Playoffs", "World Cup 2026", "Taylor Swift").

**Estimated Impact:** +15-25% increase in search initiation rate.

---

### Step 2: Search → Compare

**Current State:**
- Dashboard search: 4-field form (city, event/artist, from date, to date)
- Results display in EventCard grid (3 columns on desktop)
- EventCard shows: event name, date, venue, city, price range, "Buy Tickets" button
- No direct "Compare Prices" CTA on EventCards

**Friction Points:**
- **EventCard has "Buy Tickets" as primary CTA, not "Compare Prices."** This sends users off-site immediately, bypassing the comparison value prop entirely.
- Compare page (`/compare`) requires separate navigation and a new search — it doesn't carry context from dashboard search.
- No visual indicator that comparing is possible or valuable.
- Users who find events via search have no reason to visit the compare page.

**Recommendations:**
1. **Add "Compare Prices" as the primary CTA on EventCard**, with "Buy Tickets" as secondary.
2. Add a "Prices from X sources" label on each EventCard to signal comparison value.
3. Integrate comparison data directly into the search results (inline price comparison below each card).
4. Add a "Compare Selected" bulk action for selecting multiple events.

**Estimated Impact:** +20-30% increase in compare page visits.

---

### Step 3: Compare → Signup

**Current State:**
- Compare page is **fully gated behind login** — redirects to `/login` with message "You must be logged in to use this feature."
- No preview or teaser of what comparison looks like before signup.
- Users who haven't registered can't experience the core value prop.

**Friction Points:**
- **Hard gate is the biggest conversion killer.** Users who came to compare prices hit a wall. They haven't experienced value yet, so they have no reason to sign up.
- No social proof or value preview on the login redirect.
- Login page has no "Forgot Password?" link.

**Recommendations:**
1. **Allow unauthenticated comparison viewing.** Show full price comparison for 1-2 events free, then soft-gate with "Sign up to compare unlimited events and track prices."
2. Add a comparison preview/screenshot on the signup page so users can see what they're getting.
3. Move the signup prompt to after the user has seen comparison data, not before.
4. Add "Forgot Password?" link to login page (currently missing).

**Estimated Impact:** +30-50% increase in signup conversion from compare intent users.

---

### Step 4: Signup → Watchlist

**Current State:**
- Registration form: email + password + confirm password
- After signup → redirect to `/dashboard` (empty search page)
- No onboarding, no guided first action, no welcome prompt
- Watchlist link only appears in navbar after login
- Dashboard shows a small banner: "Track prices and get alerts when they drop!" with "Sign Up Free" (redundant post-signup)

**Friction Points:**
- **Empty dashboard after signup is a dead end.** Users just committed to signing up and are rewarded with... a blank search page.
- No prompt to set up their first price alert or add to watchlist.
- Watchlist is buried in navbar — no homepage or post-signup promotion.
- No preference capture during signup (what events they care about).

**Recommendations:**
1. **Post-signup onboarding flow** (see Section 5 below).
2. Auto-populate dashboard with trending events or events matching their interests.
3. Replace the "Sign Up Free" banner (which shows post-signup) with a "Set Your First Price Alert" prompt.
4. Add a "Watchlist" teaser section on the homepage showing sample tracked prices.

**Estimated Impact:** +25-35% increase in first watchlist addition within 24 hours.

---

### Step 5: Watchlist → Retention

**Current State:**
- Price tracking runs every 4 hours (backend cron)
- Price alert emails sent when target price is hit
- Drip email campaign: 5 emails over 30 days post-signup
- No push notifications, no in-app notifications
- No "welcome back" experience for returning users
- Watchlist page shows: event name, current price, target price, trend, last checked

**Friction Points:**
- **Email is the only retention mechanism.** No push notifications, no browser notifications, no SMS.
- Drip campaign starts at Day 3 — gap between signup and first value delivery.
- No "prices changed since your last visit" re-engagement prompt.
- No weekly digest of price movements for watchlisted events.

**Recommendations:**
1. Send a welcome email immediately on signup (Day 0) with a link to search events.
2. Add browser push notification opt-in after first watchlist item is added.
3. Add "X prices changed since your last visit" banner for returning users.
4. Create weekly price digest email summarizing all watchlisted event price movements.
5. Add "Share this deal" social features for organic growth.

**Estimated Impact:** +15-20% increase in 7-day return rate.

---

### Funnel Summary — Priority Matrix

| Issue | Impact | Effort | Priority |
|-------|--------|--------|----------|
| Add homepage search bar | Very High | Medium | **P0** |
| Ungated compare page (soft gate) | Very High | Medium | **P0** |
| Post-signup onboarding flow | High | Medium | **P1** |
| "Compare Prices" CTA on EventCard | High | Low | **P1** |
| Exit-intent popup | Medium | Low | **P1** |
| Social login (Google/Apple) | Medium | High | **P2** |
| Welcome email (Day 0) | Medium | Low | **P2** |
| Return visitor re-engagement | Medium | Medium | **P2** |
| Browser push notifications | Medium | High | **P3** |
| Password reset flow | Low | Medium | **P3** |

---

## 2. A/B Test Specification

### A/B Test: Compare Page Access Gate

```
## A/B Test: Open Compare vs. Gated Compare
**Page:** /compare
**Hypothesis:** If we allow unauthenticated users to view 1 price
comparison before requiring signup, then signup conversion rate from
compare-intent users will increase by 35-50% because users who
experience value before committing are more likely to register.

**Control (A):** Current behavior — hard redirect to /login when
non-logged user visits /compare. User sees: "You must be logged
in to use this feature."

**Variant (B):** Allow first comparison without login. After user
performs one search and views results:
  - Show full comparison data (Ticketmaster vs SeatGeek prices)
  - Overlay a soft gate after 10 seconds or on second search:
    "Create a free account to compare unlimited events, track
    prices, and get alerts when they drop."
  - CTA: "Sign Up Free" (primary) | "Maybe Later" (dismiss,
    but next comparison attempt gates again)

**Primary Metric:** Signup conversion rate (registrations /
compare page visits)

**Secondary Metrics:**
  - Compare page bounce rate
  - Time on compare page
  - First watchlist addition within 24 hours of signup
  - 7-day retention rate of users who signed up via compare

**Sample Size Needed:** ~2,000 compare-intent visitors per
variant (4,000 total) for 95% confidence at 5% MDE.

**Duration:** 14-21 days minimum (based on current traffic
estimates)

**Implementation:**
1. In `web/src/app/compare/page.tsx`:
   - Remove the early redirect for unauthenticated users
   - Add a `hasUsedFreeComparison` state (localStorage flag)
   - Allow first search to execute normally
   - After results render, show soft-gate modal if not logged in
2. Create new component: `SignupGateModal.tsx`
   - Overlay with backdrop blur
   - Copy emphasizing value: comparison data, price alerts, tracking
   - "Sign Up Free" button → /register?ref=compare-gate
   - "Maybe Later" dismiss → set localStorage flag
3. Track variant assignment in analytics
4. Track funnel: compare_visit → compare_search → gate_shown →
   gate_signup_click → registration_complete

**Rollback Plan:** Feature flag `COMPARE_SOFT_GATE` in env.
Set to false to revert to hard gate immediately.
```

---

## 3. Signup Flow Optimization

### Current Flow Analysis

```
Current: Click "Sign Up" → Form (email + password + confirm) → Submit → Dashboard (empty)
Time to value: Unknown (no guided path to first alert)
Steps to first value delivery: 4+ (signup → search → find event → add to watchlist)
```

### Recommended Optimized Flow

#### Phase 1: Reduce Registration Friction (Quick Win)

**Remove "Confirm Password" field.** Research shows confirm password fields reduce signup rates by 5-12% without meaningfully reducing password errors.

```
Optimized Step 1: Registration
- Email address [input]
- Password (8+ characters) [input with strength indicator]
- [Create Account] button
- "Or continue with" → Google | Apple (future)
- "Already have an account? Sign in"
```

**Add real-time password strength indicator:**
- Weak (red): < 8 chars
- Fair (yellow): 8+ chars, letters only
- Strong (green): 8+ chars, mixed case + number/symbol

#### Phase 2: Post-Signup Intent Capture (New)

```
Optimized Step 2: "What are you looking for?" (post-signup, skippable)
- [ ] Sports (NFL, NBA, MLB, NHL, MLS)
- [ ] Concerts & Music
- [ ] Theater & Broadway
- [ ] World Cup 2026
- [Continue] button
- "Skip for now" link
```

**Why:** Captures interest to personalize dashboard and email content. Also primes the user for search, reducing the "what do I do now?" moment.

#### Phase 3: Guided First Search (New)

```
Optimized Step 3: Dashboard with guided prompt
- Instead of empty dashboard, show:
  - "Welcome! Let's find your first event."
  - Pre-populated search based on Step 2 selections
  - Or trending events in their area (if location available)
  - Highlighted "Add to Watchlist" button with tooltip: "Track this event's price"
```

#### Phase 4: First Alert Confirmation (New)

```
Optimized Step 4: After first watchlist add
- Success modal: "You're tracking [Event Name]!"
- "We'll check prices every 4 hours and email you when they drop."
- "Set a target price" inline input (optional)
- "Search for more events" CTA
```

### Redesigned Flow Summary

```
New: Search (no login) → Find event → "Track Price" click → Signup modal
     → Email + password → Intent capture (skippable) → Return to event
     → Watchlist confirmed → "Set target price" prompt
Time to value: ~60 seconds (signup happens in context of desired action)
Steps to first value delivery: 2 (signup → auto-add to watchlist)
```

### Key Changes:
1. **Move signup to point of need** — don't ask users to sign up before they've found value
2. **Remove confirm password** — reduces form friction
3. **Add password strength meter** — visual guidance > error messages
4. **Capture intent post-signup** — personalize experience
5. **Auto-add the event** that triggered signup to watchlist
6. **Immediate value delivery** — confirm tracking is active

---

## 4. Popup & Modal Strategy

### Popup 1: Newsletter Signup (Optimize Existing)

**Current:** Newsletter form exists in 3 places (card section, footer, inline) but no popup/modal trigger.

**Recommended Popup:**
```
Trigger: 45 seconds on site OR 50% scroll depth (whichever first)
         AND user has not subscribed
         AND not shown in last 7 days
         AND not on /register or /login pages

Headline: "Get Ticket Deals in Your Inbox"
Body: "Join 2,000+ fans who save on tickets every week.
       Weekly price drops, buying tips, and exclusive deals."
CTA: "Send Me Deals" [email input] [button]
Dismiss: "No thanks, I'll pay full price" (light guilt nudge)

Frequency: Once per 7 days if dismissed
           Never again if subscribed
Mobile: Bottom sheet (slides up), not center modal
        50% screen height max
Desktop: Center modal with backdrop blur
Expected conversion: 3-5% of impressions
```

### Popup 2: Price Alert Prompt (New)

**Trigger when user views a price comparison or event detail page for 15+ seconds.**

```
Trigger: 15 seconds on /compare results OR /event/[id] page
         AND user is logged in
         AND event not already in watchlist

Headline: "Want to know when this price drops?"
Body: "We check prices every 4 hours. Set a target and
       we'll email you the moment it hits."
CTA: "Set Price Alert" → opens target price input inline
Dismiss: "Not for this event" (small text link)

Frequency: Once per event, max 2 per session
Mobile: Bottom sticky bar (not modal)
Desktop: Slide-in from bottom-right corner
Expected conversion: 8-12% of impressions (high intent)
```

### Popup 3: Exit Intent (New)

**Trigger on mouse movement toward browser close/back (desktop only).**

```
Trigger: Exit intent detected (cursor moves to top of viewport)
         AND user has not signed up
         AND session duration > 30 seconds
         AND not shown in last 14 days

Headline: "Before you go..."
Body: "Set a free price alert and we'll email you
       when ticket prices drop for events you care about."
CTA: "Set a Free Alert" → /register?ref=exit-intent
Dismiss: "X" close button (top-right)

Frequency: Once per 14 days
Mobile: Not shown (exit intent unreliable on mobile)
Desktop: Full-width bottom bar, not center modal
Expected conversion: 2-4% of impressions
```

### Popup 4: Return Visitor Welcome (New)

**For logged-in users returning after 3+ days.**

```
Trigger: Page load on any page
         AND user is logged in
         AND last visit > 3 days ago
         AND user has 1+ watchlist items

Headline: "Welcome back!"
Body: "[X] prices changed since your last visit.
       [Event Name] dropped to $Y (-Z%)."
CTA: "View Watchlist" → /watchlist
Dismiss: Auto-dismiss after 8 seconds OR click "X"

Frequency: Once per return visit (3+ day gap)
Mobile: Top banner (toast notification style)
Desktop: Top-right slide-in notification
Expected conversion: 15-25% click-through to watchlist
```

### Popup Priority & Implementation Order

| Popup | Effort | Impact | Ship Order |
|-------|--------|--------|------------|
| Newsletter (optimize existing) | Low | Medium | Week 1 |
| Exit Intent | Low | Medium | Week 1 |
| Price Alert Prompt | Medium | High | Week 2 |
| Return Visitor Welcome | Medium | Medium | Week 3 |

---

## 5. Onboarding Flow Design

### Current State
- No onboarding exists
- After signup: redirect to empty `/dashboard`
- User must self-discover search, compare, watchlist features
- Only guidance: small banner + blog links on dashboard

### Proposed Onboarding: "60-Second Setup"

#### Design Principles
- Max 3 steps (4th is success confirmation)
- Each step delivers visible value
- Skippable but incentivized ("Get personalized results")
- Mobile-first (single column, large tap targets)
- Progress indicator (dots, not numbered steps)

#### Step 1: "What do you want to see?" (Interest Selection)

```
[Progress: ● ○ ○]

"What events are you interested in?"
Personalize your feed and get better deals.

[🏈 Sports     ] [🎵 Concerts   ] [🎭 Theater   ]
[⚽ World Cup  ] [🎪 Comedy     ] [🎓 College   ]

(Toggle cards — select 1 or more, pre-highlight "Sports" and
"Concerts" as defaults)

[Continue →]                              Skip →
```

**Value delivered:** User feels the platform adapts to them.
**Data captured:** `user_preferences.interests` — used to personalize dashboard and emails.

#### Step 2: "Where are you?" (City Selection)

```
[Progress: ● ● ○]

"What's your city?"
We'll show you nearby events first.

[📍 Use my location]  (browser geolocation prompt)

Or pick a city:
[New York    ] [Los Angeles ] [Chicago     ]
[Miami       ] [Houston     ] [Dallas      ]
[Atlanta     ] [Phoenix     ] [Denver      ]
[More cities ▼]

[Continue →]                              Skip →
```

**Value delivered:** Relevant results immediately. No more "search for your city" friction.
**Data captured:** `user_preferences.city` — used to pre-filter search results.

#### Step 3: "Find your first event" (Guided Search)

```
[Progress: ● ● ●]

"Let's find your first event!"
Based on your interests, here are trending events near you:

[EventCard: NBA Playoffs - $89-$340 - "Track Price" button]
[EventCard: World Cup Group Stage - $120-$450 - "Track Price" button]
[EventCard: Concert nearby - $55-$180 - "Track Price" button]

Can't find what you want?
[🔍 Search for something specific]

                                          Skip →
```

**Value delivered:** Immediate discovery of relevant events. One tap to start tracking.
**Data captured:** First watchlist item (if they click "Track Price").

#### Step 4: Success (Confirmation)

```
[✓ checkmark animation]

"You're all set!"
We'll check prices every 4 hours and email you when they drop.

[If they added an event:]
"Tracking: [Event Name]"
"Current price: $X | Set a target price: [$___]"

[If they skipped:]
"Head to your dashboard to search for events and start tracking prices."

[Go to Dashboard →]
```

**Value delivered:** Confirmation that the system is working for them.
**Time to complete:** ~45-60 seconds (under target of 60 seconds).

### Implementation Notes

```
New files needed:
- web/src/app/onboarding/page.tsx (3-step flow)
- web/src/components/OnboardingStep.tsx (reusable step wrapper)
- web/src/components/InterestSelector.tsx (toggle cards)
- web/src/components/CitySelector.tsx (city grid + geolocation)

Auth flow change:
- After registration, redirect to /onboarding instead of /dashboard
- Store onboarding completion flag in localStorage
- If user navigates away mid-onboarding, show "Finish setup" banner on dashboard

Backend changes:
- POST /api/users/preferences — store interests + city
- GET /api/events/recommended — return events based on preferences

Database:
- New table: user_preferences (user_id, interests JSONB, city, onboarding_completed_at)
```

### Onboarding Metrics to Track

| Metric | Target |
|--------|--------|
| Onboarding start rate (post-signup) | 90%+ |
| Onboarding completion rate | 60%+ |
| Skip rate per step | < 30% |
| First watchlist add within onboarding | 40%+ |
| Time to complete onboarding | < 60 seconds |
| 7-day retention (onboarded vs. skipped) | +20% lift |

---

## 6. Cross-Agent Handoffs

### To Content Agent (Agent 1):
- **Need copy for:** Exit-intent popup, return visitor welcome, onboarding steps
- **A/B test copy variants:** "Compare Ticket Prices" vs. "Find the Cheapest Tickets" vs. "Save $X on Your Next Ticket" for homepage hero
- **Newsletter popup copy:** Needs guilt-nudge dismiss text review

### To Growth Agent (Agent 8):
- **Onboarding flow spec** ready for implementation planning
- **User preference capture** enables better segmentation for growth campaigns
- **Welcome email (Day 0)** should be added to drip campaign

### To Analytics Agent (Agent 7):
- **Funnel tracking events** needed for all new popups and onboarding steps
- **A/B test instrumentation** for compare page gate experiment
- **Baseline metrics needed** before implementing changes:
  - Current signup conversion rate
  - Compare page visit rate
  - Watchlist addition rate within 24h of signup
  - 7-day and 30-day retention rates

---

## Summary: Top 5 Actions This Week

1. **Design homepage search bar** — Remove the biggest friction point in the funnel (P0)
2. **Implement compare page soft gate** — A/B test spec ready, biggest signup conversion opportunity (P0)
3. **Build onboarding flow** — Spec complete, implementation ready (P1)
4. **Add "Compare Prices" CTA to EventCard** — Quick win, high impact (P1)
5. **Deploy exit-intent popup** — Low effort, captures abandoning visitors (P1)

---

*Generated by CRO Specialist Agent | TicketScan Marketing Automation*
*Next audit: 2026-04-20*
