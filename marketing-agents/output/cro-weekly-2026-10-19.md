# TicketScan CRO Weekly — 2026-10-19

**Scope:** Full-funnel audit, experiment design, signup optimization, popup strategy, and onboarding design.

**Evidence reviewed:** Production analytics report for the week ending 2026-10-16, tracking validation for 2026-10-17, and the current Next.js implementation in `web/src`. The requested `page-cro`, `form-cro`, `signup-flow-cro`, `ab-test-setup`, `popup-cro`, and `onboarding-cro` skills are not installed in this workspace; this report uses direct repository and analytics evidence instead.

## Executive summary

The largest observable leak is signup → first saved event. Two users registered this week and neither had a saved event in the current snapshot; no watchlist rows were added during the week. The product sends new registrants to a generic dashboard with Orlando prefilled, no welcome state, no preserved intent, and no first-action prompt.

The second major issue is measurement. GTM loads, but there are no verified first-party conversion events or UTM persistence. Visit → search, search → compare, compare → signup, and return-visit rates must therefore be reported as **N/A**, not estimated.

The third issue is trust and copy integrity. Several surfaces still expose unavailable price-comparison or alert-oriented language. The current product-status guardrail requires public copy to focus on event discovery, seller links, onsale/presale timing, saved events, venue facts, and general ticket-buying guidance.

### Recommended priority order

1. Remove or quarantine stale price/alert claims from public surfaces.
2. Instrument the funnel and UTM persistence before running acquisition or A/B decisions.
3. Preserve the event/search intent through registration and route new users to a first-save action.
4. Ship a three-step, skippable onboarding flow based on interests, city, and first saved event.
5. Use an onsite newsletter prompt only after the basic measurement and trust fixes are live.

## 1. Full funnel audit

### Measurement status

| Funnel step | Current conversion rate | Evidence | Assessment |
|---|---:|---|---|
| Visit → Search | N/A | No queryable pageview or search event export | Cannot rank landing pages or calculate initiation rate |
| Search → Compare | N/A | No search/compare event instrumentation; compare route redirects anonymous users to login | High-friction path and likely broken for anonymous visitors |
| Compare → Signup | N/A | `/compare` redirects unauthenticated users to `/login`; no attribution event | Hard gate with no preserved return context |
| Signup → Saved event | 0 of 2 observed new users had a saved event in the latest snapshot | Analytics snapshot, directional only | Primary activation hypothesis |
| Saved event → Return visit | N/A | No session/return event or `last_seen_at` | Retention cannot be evaluated |

Production baseline for the latest weekly window: **266 total users, 2 new signups, 0 watchlist rows added, 153 users with at least one saved event, 256 total saved-event rows, and 7 active newsletter subscribers**. These are internal operating figures, not public proof of product performance.

### Step 1 — Landing → Search

**What works:** The homepage has a clear primary CTA (`Get Started Free`) and a secondary “See How It Works” anchor. It also exposes “Popular Venues,” browse directories, onsale content, and event guidance.

**Problems:**

- The primary hero CTA sends users to `/register`, even though search is available without an account at `/dashboard`. This asks an anonymous visitor to commit before experiencing the core value.
- The homepage promise is diffuse: “Find it. Save it. Don’t miss it.” The actual first action is not explicit enough for a visitor who wants to search now.
- The hero watchlist mockup is persuasive, but it should demonstrate only currently supported value: saving an event, onsale timing, and seller links. Avoid implying automated price monitoring.
- There is no measurable CTA or search-initiation event, so “highest” and “lowest” landing pages cannot be identified.

**Fix:** Change the primary homepage CTA to `Search Events` → `/dashboard`, keep `Create a free account` as a secondary action after the value explanation, and add `search_start` plus `hero_cta_click` instrumentation.

### Step 2 — Search → Compare / seller click

**What works:** `/dashboard` permits anonymous search. Search has city, keyword, and date filters; result cards show event, date/time, venue, location, optional source price range, a seller link, and a save control. Empty states suggest changing the query or reading tips.

**Problems:**

- Search uses a hard-coded `Orlando` default, which is a poor first-run default for users arriving from another city or venue page.
- The result-card “Buy Tickets” link is actionable, but there is no verified outbound-click event.
- The comparison route is not a natural continuation from an event card. The card offers seller checkout and save, but no event-specific “Compare listings” path.
- `/compare` is authenticated-only and silently redirects an anonymous visitor to `/login`, losing the query and destination. This is a dead-end for a top-of-funnel user.
- Empty results offer only the blog as the next step. Add nearby-city, broaden-date, and browse-category recovery actions.

**Fix:** Treat the event card’s primary path as `View sellers`/`Buy Tickets` plus `Save event`. If comparison is restored and accurate, make it an explicit event-context action; until then, do not make it the main acquisition promise.

### Step 3 — Compare → Signup

The current `/compare` page calls `router.push('/login')` for unauthenticated users before they can use the page. The register and login routes both redirect to `/dashboard`, not back to the requested comparison or event.

This is both a conversion problem and an intent-integrity problem. If a user came from a particular event, the account creation must return them to that event or the saved-event action. Never force them to reconstruct the query.

**Fix:** Either allow anonymous comparison where the underlying data is reliable, or show a transparent account prompt that preserves `returnTo`, `event_id`, city, keyword, and date filters. The current product-status guardrail means any comparison copy must avoid implying live TicketScan price tracking, historical prices, trend charts, or alert delivery.

### Step 4 — Signup → Watchlist

**Current flow:** `/register` collects email, password, and confirmation, then routes directly to `/dashboard` (`web/src/app/register/page.tsx:34-36`). There is no query-param handling, social login, preference capture, onboarding, or first-action prompt.

**Observed weakness:** The new-user snapshot shows 0 of 2 observed new users with a saved event. This is a directional signal, not a complete conversion rate, because the system does not join signup, search, and save events.

**Fix:**

- Preserve `returnTo` and event context from every gated action.
- Route direct signups to `/onboarding`; route event-intent signups directly back to that event/save action.
- Make the first authenticated screen a concrete “Find and save your first event” task, not a blank search with Orlando preselected.
- Replace stale target-price or alert prompts with “Save this event to revisit seller links and onsale details.”

### Step 5 — Watchlist → Retention

**What works:** The watchlist has a useful empty state, saved-event rows, event detail links, remove controls, and a clear `+ Add Events` path. It positions the watchlist as a place to revisit event details and seller links.

**Problems:**

- The empty state still says “Get notified the moment it drops,” which is unavailable product behavior and must be removed.
- The watchlist component contains target-price, current-price, trend, and “Target met” states even though price ingestion is stale. These should be hidden or safely replaced until the data source is restored.
- There is no first-party return-visit instrumentation, so the retention loop is not measurable.
- The current email/drip performance cannot be evaluated: the latest analytics report records 0 drip sends.

**Fix:** Reframe retention around upcoming onsales/presales, saved event details, seller links, venue guides, and ticket-buying tips. Add `watchlist_view`, `saved_event_open`, `seller_outbound_click`, and `return_session` events.

## 2. A/B test specification

### A/B Test: First-save activation path

**Page:** `/register` → post-registration destination; supporting entry points `/dashboard` and anonymous `EventCard` save prompt.

**Hypothesis:** If newly registered users are routed to a contextual “save your first event” task instead of a generic Orlando dashboard, then signup → first saved event within 24 hours will increase by **at least 20% relative** because the next action is concrete, intent-preserving, and immediately connected to the reason for registration.

**Control:** Current flow: email + password + confirmation → `/dashboard`, city defaults to Orlando, no onboarding, no preserved `returnTo`, no first-action prompt.

**Variant:**

- Direct signup → three-step onboarding: choose event interests, choose/default a city, then search and save one event.
- Event-card save intent → register with a signed/validated return context → return to the originating event and complete “Save event.”
- Copy stays within supported value: “Save this event so you can revisit seller links, venue details, and onsale information.”

**Primary metric:** `first_saved_event_within_24h / signup_success`, deduplicated by user ID.

**Secondary metrics:** onboarding completion, time to first save, `search_start`, `search_success`, event-detail view, seller outbound click, registration completion, error rate, and 7-day return session.

**Guardrails:** registration error rate, bounce after register, duplicate saves, anonymous search success, and newsletter unsubscribe rate. Do not use price-alert, target-price, price-history, or price-trend events as success metrics while the product is down.

**Sample size needed:** Baseline is not currently measurable. After a 7-day instrumentation run, calculate the powered sample. Planning estimate: if baseline first-save activation is 10% and the target is 12% relative lift (10% → 11.2%), a conventional 95%/80% binary test needs roughly **14,000 users per arm**; if baseline is 20% and the target is a 20% relative lift (20% → 24%), it needs roughly **1,200 users per arm**. Do not start the experiment until the real baseline is known.

**Duration:** Minimum 14 days after reaching the predeclared sample; include at least one full weekday/weekend cycle. Stop only for a predeclared guardrail failure or completion of the powered sample.

**Implementation:** Add an experiment assignment persisted per user/session; add `signup_success`, `onboarding_step_complete`, `first_saved_event`, and `experiment_exposure` events; implement return-context validation; build `/onboarding`; QA desktop, mobile, refresh, back-button, expired-context, and API-error paths.

## 3. Signup flow optimization spec

### Recommended flow

1. User clicks `Create a free account` or attempts to save an event.
2. Registration collects email, password, and confirmation in one form for now. Keep the form simple before adding social authentication.
3. On success, branch by intent:
   - `returnTo` / event intent present → return to the originating event and complete save.
   - no intent → `/onboarding`.
4. Onboarding collects only the minimum preferences needed to create a useful first search: interest category and city.
5. User saves one event and lands on a confirmation state with links to seller details, onsale information, and venue guidance.

### Social login and email-only decision

Do not add Google or Apple login in this sprint. It introduces OAuth configuration, account-linking, privacy, and failure-state work before the existing flow is measurable. Revisit after instrumentation shows form abandonment and after the core first-save path is working.

Do not make registration email-only. The backend currently expects email + password and the security/recovery implications of magic-link or deferred-password authentication are material. First remove contextual friction and the generic post-signup dead-end.

### Preference capture

Capture category and city in onboarding, not in the registration form. Make both skippable and store them as preferences only if the existing backend contract supports them. Do not add favorite teams or detailed profile fields until the first saved event works.

### Wireframe description

**Register:** Logo, “Create a free account,” one-line supported value proposition, email, password, confirm password, primary button “Create account,” and a concise privacy/terms note. Keep login below the form.

**Intent return:** A compact confirmation sheet or page titled “Save [event name]” with event date/venue, one primary `Save event` button, and a secondary `Continue browsing` action.

**Direct signup onboarding:** Progress indicator `1 of 3`, one question per screen, visible skip link, back button, and a persistent primary CTA. Avoid a mandatory generic tour.

## 4. Popup and modal strategy

There is no verified popup trigger implementation in `web/src`; the existing newsletter component is an inline/card form, not an exit-intent system. Do not add several competing overlays before conversion events are available.

### Newsletter inline/card

- **Trigger:** Inline placement on homepage, blog index, venue guides, and onsale pages; no automatic popup in the first release.
- **Copy:** Headline: “Get onsale and presale dates in your inbox.” Body: “A short email with upcoming onsales, presales, venue guides, and practical ticket-buying tips.” CTA: `Subscribe`. Dismiss: no overlay dismiss needed.
- **Frequency:** Once per page placement; deduplicate success across the browser with a consented local flag.
- **Mobile:** Full-width stacked input/button; do not obscure event content.
- **Planning conversion target:** Establish baseline first. A provisional 1–3% submit rate is a planning range, not a forecast.

### Event save modal for anonymous users

- **Trigger:** User clicks the save/watchlist control on an event card.
- **Copy:** Headline: “Save this event.” Body: “Create a free account to revisit the event, seller links, venue details, and onsale information.” CTA: `Create free account`; dismiss: `Maybe later`.
- **Frequency:** Show once per event per session; preserve the event context on CTA.
- **Mobile:** Bottom sheet or centered modal with large tap targets; keep the event name and date visible.
- **Planning conversion target:** Measure registration completion from modal exposure; no invented rate until instrumented.

### No price-alert or price-change popups

Do not ship prompts such as “Want to know when this drops?”, “set a price alert,” “prices changed since your last visit,” or “price trending up/down.” Those claims are currently unsupported. A future popup can be reconsidered only after price ingestion, alert delivery, and public status are all verified.

### Exit intent

Do not ship an exit-intent modal this week. It would compete with the save flow and newsletter form while the site lacks reliable exposure and conversion telemetry. Reconsider after seven days of valid event-level data.

## 5. Onboarding flow design

### Goal

Move a new account from signup to a useful saved event in under 60 seconds, while making every step skippable and avoiding unsupported alert promises.

### Step 1 — Interests

- **Question:** “What are you looking for?”
- **Options:** Sports, concerts, theater, and World Cup 2026.
- **Primary CTA:** `Continue`.
- **Skip:** `Skip for now`.
- **Visible value:** The next search can start with relevant category suggestions.

### Step 2 — City

- **Question:** “Where should we search first?”
- **Control:** Searchable city field with a small list of popular cities and a `Use my city` option only if location permission is granted.
- **Primary CTA:** `Show events`.
- **Skip:** `Choose later`.
- **Visible value:** The dashboard opens with a relevant city, never an unexplained Orlando default.

### Step 3 — Save one event

- **Heading:** “Save an event to pick up where you left off.”
- **Content:** Search results based on the chosen category/city, or the standard dashboard with those values prefilled.
- **Primary CTA on card:** `Save event`.
- **Supported confirmation:** “Saved. You can revisit the event, venue details, onsale timing, and seller links from your watchlist.”
- **Skip:** `Go to search`.

### Completion state

Show a concise success state: “Your first event is saved.” Buttons: `View watchlist` and `Keep searching`. Do not promise alerts, price monitoring, or a target-price workflow.

### Behavior rules

- Persist onboarding progress locally and server-side only where a backend field already exists.
- Bypass generic onboarding for users who registered from an event-specific save action.
- Return users to their original event/query after login or registration.
- Make the flow mobile-first, keyboard accessible, and safe to refresh.
- Add a visible “Skip for now” link but keep the primary action dominant.

## 6. Copy needs and handoffs

### Content Agent (Agent 1)

- Homepage hero alternatives centered on `Search events`, `Save events`, and `Find onsale dates`; remove any unavailable price/alert promise.
- Event-save modal copy and confirmation state.
- Three onboarding screens and completion copy.
- Newsletter copy focused on onsale/presale dates, venue guides, and ticket-buying tips.
- Audit and replace stale phrases in homepage, watchlist, newsletter, venue, and event surfaces.

### Growth Agent (Agent 8)

- Build the activation brief around signup → first saved event within 24 hours.
- Define the re-engagement loop around saved events, upcoming onsales/presales, venue guides, and seller-link revisits.
- Do not build retention messaging around price drops or target prices while status is down.

### Analytics Agent (Agent 7)

- Implement and validate `page_view`, `hero_cta_click`, `search_start`, `search_success`, `event_card_view`, `save_prompt_view`, `signup_start`, `signup_success`, `onboarding_step_complete`, `first_saved_event`, `watchlist_view`, `saved_event_open`, `seller_outbound_click`, `newsletter_submit`, `return_session`, and `experiment_exposure`.
- Persist UTM parameters through registration and report source/medium/campaign.
- Provide a weekly funnel table with denominators and cohort dates; use N/A when a denominator is unavailable.

## 7. Engineering ship list

### P0 — trust and measurement

- Remove stale price-alert/trend/target language from public surfaces, especially `web/src/app/watchlist/page.tsx`, `web/src/components/NewsletterSignup.tsx`, and any comparison/event copy.
- Add conversion events and UTM persistence; validate in GTM Preview and with a production test account.
- Ensure event-card and compare/login registration links preserve validated return context.

### P1 — activation

- Create `web/src/app/onboarding/page.tsx`.
- Update registration routing to branch between onboarding and `returnTo` intent.
- Replace the Orlando-first post-signup state with interest/city defaults or an explicit empty state.
- Add first-save confirmation and event-level save instrumentation.

### P2 — experiment and retention

- Implement the first-save experiment only after the baseline event stream has passed a seven-day integrity check.
- Add watchlist and seller outbound events.
- Add the newsletter inline strategy and frequency controls.

## Data limitations

This report does not claim measured page-level conversion rates because the current stack exposes GTM but not a queryable first-party event export. The latest analytics report explicitly marks visitor, search, comparison, channel, and return metrics unavailable. The observed 0-of-2 signup-to-save result is directional only. No public copy should use internal watchlist counts as evidence of price tracking or ticket-price performance.

