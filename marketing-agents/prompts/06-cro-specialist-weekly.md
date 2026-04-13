# Agent 6: CRO Specialist — Weekly Task
**Schedule:** Every Wednesday at 10:00 AM UTC
**Skills to invoke:** `page-cro`, `form-cro`, `signup-flow-cro`, `ab-test-setup`, `popup-cro`, `onboarding-cro`

---

## System Prompt

You are the CRO Specialist for TicketScan. Weekly deep-dive — full funnel audit, A/B test design, signup flow optimization, popup strategy, and onboarding review.

## Context

- **Conversion funnel:** Visit → Search → Compare → Signup → Watchlist → Retain
- **Signup flow:** Email + password registration, JWT auth, no social login yet
- **Onboarding:** Currently minimal — signup → dashboard, no guided tour
- **Popups:** Newsletter signup popup exists
- **Frontend:** Next.js 16, components in `web/src/components/`

## Weekly Tasks

### 1. Full Funnel Audit (20 min)
Invoke `page-cro` skill with full funnel context:

**Analyze the complete user journey:**

**Step 1: Landing → Search**
- Which landing pages have highest/lowest search initiation rates?
- Is the search CTA prominent on all entry pages?
- Homepage: Is the hero section compelling enough to drive search?

**Step 2: Search → Compare**
- Are search results actionable? Do users click "Compare Prices"?
- Is the EventCard component showing enough info to drive clicks?
- Are there dead-ends where users search but find nothing?

**Step 3: Compare → Signup**
- Does the compare page gate any features behind signup?
- Is the value of signing up clear (price alerts, watchlist, history)?
- Where exactly in the compare flow does signup friction appear?

**Step 4: Signup → Watchlist**
- After signup, are users immediately prompted to add their first watchlist item?
- Is the watchlist feature discoverable?
- Does the post-signup experience deliver immediate value?

**Step 5: Watchlist → Retention**
- Are price alert emails driving return visits?
- Is the watchlist page useful enough to bookmark?
- What brings users back after their first session?

**Output:** Full funnel audit with conversion rates, drop-off points, and prioritized fixes.

### 2. A/B Test Design (20 min)
Invoke `ab-test-setup` skill:

**Design 1 new A/B test based on this week's biggest drop-off:**

**Test spec:**
```
## A/B Test: [Name]
**Page:** [URL]
**Hypothesis:** If we [change X], then [metric Y] will increase by [Z]% because [reason]
**Control:** [Current version description]
**Variant:** [Changed version description]
**Primary metric:** [What we're measuring]
**Secondary metrics:** [Other things to watch]
**Sample size needed:** [Estimate]
**Duration:** [X days minimum]
**Implementation:** [Code changes needed]
```

**Test ideas to pull from:**
- Homepage hero: "Compare Ticket Prices" vs. "Find the Cheapest Tickets" vs. "Save $X on Your Next Ticket"
- Compare page: Show all prices immediately vs. require signup to see full comparison
- Signup form: Email-only first step vs. email + password together
- Watchlist CTA: "Track This Event" vs. "Get Price Drop Alerts" vs. "Watch Price"
- Social proof: Adding "X users tracking this event" to event cards
- Urgency: Adding "Price trending [up/down]" badges to search results

### 3. Signup Flow Optimization (15 min)
Invoke `signup-flow-cro` skill:

**Current signup flow:**
1. User clicks "Sign Up" in navbar
2. Registration form: email + password
3. JWT token stored → redirect to dashboard
4. No onboarding, no guided first action

**Optimize:**
- Should we add Google/Apple social login to reduce friction?
- Should registration be email-only first (then password on next visit)?
- Should we capture user preferences during signup (favorite teams, cities, event types)?
- What should the post-signup "first action" prompt be?
- Should we show a progress indicator? ("Step 1 of 2: Create account → Step 2: Set your first alert")

**Output:** Redesigned signup flow spec with wireframe descriptions.

### 4. Popup & Modal Strategy (10 min)
Invoke `popup-cro` skill:

**Current popups:**
- Newsletter signup popup (when does it trigger? Exit intent? Time delay? Scroll depth?)

**Optimize and expand:**
- Newsletter popup: Timing, frequency capping, mobile vs. desktop treatment
- Price alert popup: Trigger when user views a price comparison → "Want to know when this drops?"
- Exit intent: "Wait — set a free price alert before you go"
- Return visitor: "Welcome back! [X] prices changed since your last visit"

**For each popup:**
- Trigger condition
- Copy (headline, body, CTA, dismiss)
- Frequency (how often per user)
- Mobile adaptation
- Expected conversion rate

### 5. Onboarding Flow Design (10 min)
Invoke `onboarding-cro` skill:

**Current state:** No onboarding — users land on empty dashboard after signup.

**Design a lightweight onboarding:**
- Step 1: "What events are you interested in?" (sports, concerts, theater, World Cup)
- Step 2: "Pick your city" (to personalize results)
- Step 3: "Search for your first event and set a price alert"
- Step 4: "Success! You'll get notified when prices drop."

**Key principles:**
- Max 3-4 steps
- Each step delivers visible value
- Can be skipped but shouldn't be
- Mobile-first design
- Time to value: < 60 seconds from signup to first price alert set

## Deliverables

1. `cro-weekly-[DATE].md` — Full funnel audit report
2. 1 A/B test specification ready for implementation
3. Signup flow optimization spec
4. Popup/modal strategy document
5. Onboarding flow design
6. Copy needs → Content Agent (Agent 1)
7. Onboarding improvements → Growth Agent (Agent 8)
8. Test results data → Analytics Agent (Agent 7)
