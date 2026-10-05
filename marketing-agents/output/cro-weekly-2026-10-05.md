# CRO Weekly Audit — 2026-10-05

## Executive summary

TicketScan’s largest measurable conversion opportunity is the first authenticated session. Registrations increased to 8 for the week ending October 2, while only 3 new signups produced a watchlist row in the same window: a directional signup→watchlist proxy of 37.5%. The product currently sends a new user to a general dashboard with no guided next action, no preference capture, and no explicit handoff from registration to saving an event.

The rest of the requested funnel cannot be reported as a rate. Visit→search, search→compare, compare→signup, and watchlist→return are **N/A**, not zero: page/session events and named conversion events are not collected. The compare page also redirects anonymous visitors to `/login`, while its price-dependent comparison output is not currently reliable. Fix measurement and the first-session path before optimizing downstream promises.

Product-status guardrail: public CRO copy in this report uses event discovery, onsale/presale information, venue context, seller links, and a watchlist for revisiting saved events. It does not promise price tracking, price history, price-drop alerts, target-price alerts, or buy/wait recommendations.

## Evidence and scope

- Analytics snapshot for September 25–October 2: 263 registered users, 255 watchlist rows, 153 users with at least one watchlist row, 110 users with none, 3 new watchlist rows from 8 new registrations, and 6 active newsletter subscribers.
- The 3/8 figure is a same-window product proxy, not a complete cohort conversion rate.
- No GA4/session export, UTM persistence, named `dataLayer` conversion events, outbound seller-click events, or return-visit events were verified.
- `/compare` redirects unauthenticated users to `/login` before search can begin (`web/src/app/compare/page.tsx`).
- `/register` collects email, password, and password confirmation, then redirects directly to `/dashboard` (`web/src/app/register/page.tsx`).
- `/dashboard` has a useful search form and a non-logged-in save banner, but no post-registration activation state (`web/src/app/dashboard/page.tsx`).
- `EventCard` has a save icon. Anonymous users receive an overlay with “Track This Event” and a registration link; the link does not preserve the event for return (`web/src/components/EventCard.tsx`).
- The newsletter is an inline homepage card plus footer form. There is no timed, exit-intent, scroll-depth, or return-visitor popup component in `web/src/components/`.

## Funnel audit

| Stage | Current evidence | Rate | Main issue | Priority |
|---|---|---:|---|---:|
| Visit → Search | No page/session or search-submit event | N/A | Cannot rank entry pages or diagnose homepage CTA performance | P0 measurement |
| Landing → Search | Homepage has “Get Started Free” to `/register`, while the actual search surface is `/dashboard` | N/A | The primary CTA asks for an account before a visitor experiences search | P1 |
| Search → Compare | Dashboard search and cards exist; no click instrumentation. `/compare` is login-gated | N/A | Anonymous intent is interrupted before comparison; price-dependent comparison is not a safe current promise | P0/P1 |
| Compare → Signup | Compare redirects anonymous visitors to login; no event telemetry | N/A | Login wall hides value and loses the originating search/event context | P1, after compare reliability |
| Signup → Watchlist | 3 of 8 weekly signups added a watchlist item in-window | 37.5% proxy | Registration ends at a generic dashboard; no first-action prompt or deep link | P0 |
| Watchlist → Return | No session/return or seller-outbound telemetry | N/A | Saved-event value is not surfaced through a measured re-entry loop | P0 measurement / P1 UX |

### Step 1: Landing → Search

The homepage communicates a broad promise—events, venues, and onsale dates—but the hero headline “Find it. Track it. Don’t miss it.” and the watchlist mockup still suggest monitoring behavior. That is risky while price tracking is unavailable and creates a mismatch with the strongest verified value: finding an event, understanding its venue, and checking onsale/presale details.

The hero’s “Get Started Free” CTA leads to registration, not search. A visitor who is still exploring must create an account before reaching the search form. The secondary “See How It Works” link is lower-intent education. Recommended direction: make the primary hero action “Search events” → `/dashboard`, keep “Create a free watchlist” as the secondary path, and use onsale/presale language consistently.

### Step 2: Search → Compare

The dashboard search form is actionable: city, event/artist/team, and date range. Results show event name, date/time, venue, city/state, optional source-provided price range, a “Buy Tickets” outbound link, and a save icon. The no-results state gives a blog fallback but no alternative search suggestions or popular city/category recovery path.

There is no measured search-submit, result-view, card-open, save, or outbound-click event. The anonymous dashboard banner says “Save events and keep your ticket search organized,” which is a safe and clear value proposition. Keep that behavior, but add search telemetry and an empty-state recovery path.

The compare route is not a usable anonymous funnel step today: it redirects unauthenticated visitors to login. It should not be the first CRO test surface until the underlying available-listing experience is verified and the page is rewritten around currently supported facts.

### Step 3: Compare → Signup

There is no measurable compare→signup rate. The route’s authentication wall appears before search, so it cannot learn whether a visitor would have engaged with a comparison result. If comparison is restored as a supported surface, test a limited anonymous preview or preserve the user’s query and redirect them back after authentication. Do not gate basic event discovery or seller links behind signup.

### Step 4: Signup → Watchlist

This is the strongest observed opportunity. Registration requires three fields and then routes to `/dashboard`; there is no welcome state, no preference selection, and no prompt to continue the action that likely motivated signup. The dashboard itself starts with a blank search form.

The EventCard’s anonymous save flow also loses context: the sign-up overlay links to `/register`, but the selected event is not encoded in the URL or stored for post-registration continuation. A user must remember and repeat the search. Preserve the event intent with a return URL or a short-lived pending-save record.

### Step 5: Watchlist → Retention

The authenticated watchlist is useful as a saved-event index: it shows date, venue/city, event name, and seller availability text when current price data is absent. Empty-state guidance still contains stale target-price and drop-notification language and needs to be rewritten to “save events so you can revisit onsale details and seller links.”

The retention loop should be: saved event → onsale/presale context → return to saved event → outbound seller visit or event-detail revisit. Measure those steps. Do not use price-alert email as a current retention dependency.

## Prioritized fixes

### P0 — make the funnel measurable

Instrument `dataLayer` events with a stable schema:

`page_view`, `search_submit`, `search_results`, `event_card_view`, `save_event_click`, `save_event_success`, `signup_start`, `signup_success`, `login_success`, `compare_start`, `compare_results`, `seller_outbound_click`, `watchlist_view`, `newsletter_submit`.

Persist first-touch and last-touch UTM fields locally and associate them with signup. Add `event_id`, `source_page`, `city`, `category`, `auth_state`, and `result_count` where relevant. Do not send email addresses or raw JWTs to analytics.

### P0 — fix the first authenticated session

After successful registration, route to a first-session dashboard state with one clear next action: “Find an event to save.” Carry through the intended event when signup began. Provide a skip option and a visible “Browse onsale dates” path.

### P1 — remove misleading or unavailable value language

Replace “Track it,” “price,” “target price,” and “when it drops” in active UI copy with “save it,” “revisit event details,” “check onsale/presale dates,” and “open seller links.” This includes homepage mockups, registration copy, compare metadata, watchlist empty states, and newsletter copy.

### P1 — improve recovery from no results

Show the submitted city/keyword, offer one-click edits, link to popular cities/categories, and keep the ticket-buying tips link as secondary content. Log `search_zero_results`.

### P2 — restore a trustworthy comparison path

First verify a currently supported, source-neutral listing experience. Then decide whether anonymous users can view event/source links and whether signup adds saving or personalization. Avoid an experiment that optimizes a broken or unsupported price promise.

## Handoffs

- **Content Agent:** copy requests are in `cro-copy-needs-2026-10-05.md`.
- **Growth Agent:** first-session onboarding and pending-save continuation are in `cro-growth-handoff-2026-10-05.md`.
- **Analytics Agent:** instrumentation and test-result requirements are in `cro-analytics-handoff-2026-10-05.md`.
- **Implementation-ready experiment:** `ab-test-first-session-save-2026-10-05.md`.
- **Signup specification:** `signup-flow-optimization-2026-10-05.md`.
- **Popup strategy:** `popup-modal-strategy-2026-10-05.md`.
- **Onboarding design:** `onboarding-flow-2026-10-05.md`.

