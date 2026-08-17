# TicketScan CRO Weekly Audit — 2026-08-17

**Owner:** Agent 6 — CRO Specialist  
**Scope:** Visit → Search → Compare → Signup → Watchlist → Retain  
**Evidence:** repository inspection plus the latest available analytics, growth, email, and tracking reports.

> The requested CRO skills were not installed in this environment. Their frameworks were applied manually. No visitor, session, comparison, or page-level conversion data is exposed, so unavailable rates are explicitly marked N/A.

## Executive diagnosis

The largest observable leak is signup → first watchlist action. Registration immediately redirects to a generic dashboard; there is no guided first action, no target-price capture, and no visible “first alert” completion state. The latest verified cohort proxy was **5 of 12 new users activated (41.7%)**, leaving 7 without a watchlist item. The latest operational snapshot reports **216 users, 215 watchlist rows, 127 users with watchlists, 0 target prices, and 0 recorded alerts**.

The product currently asks users to trust a price-alert promise that the UI does not complete: `target_price` is not collected in the visible watchlist flow, price history is stale after 2026-07-24, and `/api/admin/alerts` is failing. Fix the activation path and the alert/data dependencies before scaling paid traffic.

## Funnel audit

| Funnel step | Current implementation | Rate | Drop-off / CRO assessment | Priority |
|---|---|---:|---|---|
| Landing → Search | Homepage hero primarily sends visitors to `/register`; the functional search CTA is lower-friction `/dashboard` via `HomeHeroButtons`, while the visible hero uses “Get Started Free.” SEO venue, city, World Cup, and blog pages have varied CTAs. | N/A | Search initiation is not instrumented. The hero leads with “Compare. Track. Save.” but does not let a visitor search immediately. Registration-first CTA adds an unnecessary commitment before value. | P0 |
| Search → Compare | `/dashboard` searches one source via `/api/events/search`; result cards expose date, venue, city, price range, “Buy Tickets,” and a watchlist icon. `/compare` is a separate authenticated route and is not linked from `EventCard`. | N/A | The result card is actionable for buying/tracking but not for comparison. A user can search successfully and never discover the multi-source comparison surface. | P0 |
| Search → No result recovery | Empty state says “Try a different city, keyword, or date range.” | N/A | Helpful but passive. No suggested searches, popular events, broaden-date action, or fallback to the comparison page. | P1 |
| Compare → Signup | `/compare` redirects unauthenticated users to `/login` before comparison. There is no return-to context visible in the inspected route. | N/A | This is a hard gate before value. The user is asked to log in to compare, while the product promise is comparison. Best test: allow a limited anonymous comparison and gate alert/watchlist actions instead. | P0 |
| Signup → Watchlist | `/register` collects email, password, confirmation, then redirects to generic `/dashboard`. No onboarding, preferences, first-event handoff, or alert setup. | **41.7% proxy** (5/12) | Observable largest funnel loss. A new account has no immediate payoff and must invent the next action. | P0 |
| Watchlist → Target price | Watchlist shows current range/trend/target if present, but the inspected add flow does not collect a target price. Latest reports show 0 target prices. | 0 recorded target-price rows | The core alert loop is structurally incomplete. “Track prices” does not become “get notified at my price.” | P0 |
| Watchlist → Retain | Watchlist has useful price/trend presentation and “View Details,” but no verified login/session, alert-click, or return-visit telemetry. Email reports show 0 recorded drip sends and 0 recorded alerts. | N/A | Retention cannot be evaluated. Current email/price infrastructure cannot yet provide the promised reason to return. | P0 |

### Landing page findings

- Homepage copy is credible and visually clear, but the primary hero CTA is account creation rather than an immediate search. “Get Started Free” communicates low cost, not the first value: finding the cheapest comparable ticket.
- The homepage contains a static “Trending Deals” section with no click-through or comparison CTA. It looks like a dead end at the exact point where a high-intent user should continue.
- Venue, city, category, World Cup, and blog pages are acquisition surfaces, but no landing-page attribution or CTA conversion data exists. Add `page_view`, `landing_cta_click`, and `search_submit` before ranking them.

### Search and compare findings

- `EventCard` has a strong minimum information set, but “Buy Tickets” is the dominant action and the watchlist control is an unlabeled eye icon. Add explicit “Compare prices” and “Track price” labels.
- `/dashboard` and `/compare` use separate searches. Comparison is currently authenticated-only, creating a value-before-account mismatch.
- The compare route matches Ticketmaster and SeatGeek results but exposes no StubHub result in the inspected client type. Confirm source coverage before promising “all major platforms” in conversion copy.

### Signup and activation findings

- Registration requires three fields (email, password, confirmation) and has no social login, password-strength guidance, inline validation, or privacy reassurance beyond the form itself.
- After registration, the user lands in an Orlando-default search state. That is not a personalized first-run experience.
- The best first action is not “browse the dashboard”; it is “track one specific event and set a price ceiling.” The user should see progress: `Account created → Pick an event → Set your price ceiling`.

### Retention findings

- The watchlist page is useful once populated, including trend and “AT TARGET!” states, but empty-state onboarding stops at “Search Events.” It does not explain the next 30-second path.
- The database and admin snapshot show no target prices, so the recommendation and alert loop cannot generate a meaningful return trigger.
- There is no reliable `last_login_at`, return-session event, email click event, or alert delivery telemetry. Do not label users churned from signup age alone.

## Prioritized fixes

1. **P0 — Repair the promised value loop:** make target price a first-class watchlist action, repair price tracking and `/api/admin/alerts`, and verify alert delivery end to end.
2. **P0 — Add a post-signup activation route:** send new users to a three-step checklist that ends with one watchlist item and a target price.
3. **P0 — Remove premature comparison gating:** allow anonymous search/compare where API policy permits; gate only “save/alert” with an inline signup modal that preserves event context.
4. **P1 — Make comparison discoverable:** add a “Compare prices” action to each search result and make the best source/savings explicit.
5. **P1 — Instrument the funnel:** `page_view`, `search_submit`, `compare_started`, `compare_completed`, `signup_complete`, `watchlist_add`, `target_price_set`, `newsletter_subscribe`, `outbound_ticket_click`, `return_session`.
6. **P1 — Replace generic empty states:** recommend popular events, preserve the search query through signup, and provide one clear next action.
7. **P2 — Add low-friction identity options:** test Google sign-in after the core email flow is measurable; do not add Apple first without a meaningful iOS audience.

## This week’s test decision

Test the post-signup activation checklist against the current generic dashboard. It addresses the only measurable funnel loss and does not depend on speculative homepage traffic data. Full specification: [cro-ab-test-2026-08-17.md](cro-ab-test-2026-08-17.md).

## Handoffs

- **Agent 1 — Content:** [cro-handoffs-2026-08-17.md](cro-handoffs-2026-08-17.md) for CTA, popup, onboarding, and empty-state copy.
- **Agent 8 — Growth:** use the activation checklist, 24-hour unactivated-user nudge, and return-visitor messaging in [cro-handoffs-2026-08-17.md](cro-handoffs-2026-08-17.md).
- **Agent 7 — Analytics:** implement the event taxonomy and report the missing funnel denominators in [cro-handoffs-2026-08-17.md](cro-handoffs-2026-08-17.md).
- Signup, popup, and onboarding details are separated into [cro-signup-flow-2026-08-17.md](cro-signup-flow-2026-08-17.md), [cro-popup-strategy-2026-08-17.md](cro-popup-strategy-2026-08-17.md), and [cro-onboarding-flow-2026-08-17.md](cro-onboarding-flow-2026-08-17.md).

