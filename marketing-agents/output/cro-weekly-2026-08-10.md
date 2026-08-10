# TicketScan CRO Weekly — 2026-08-10

## Executive summary

The biggest observed funnel break is between intent and usable product value: the homepage’s primary “Get Started Free” CTA sends a new visitor to a three-field registration form, while the product’s strongest proof—searching and comparing prices—is behind authentication on `/compare`. A visitor who reaches search can buy directly from an `EventCard`, but there is no visible compare-price action, and anonymous watchlist intent ends at a signup overlay without carrying the selected event into the account.

The first priority is to make comparison an ungated acquisition action, then use a specific price-alert moment to earn signup. The second is to preserve context through signup and deliver the first watchlist alert setup immediately after registration.

## Measurement status

No analytics event data or experiment platform configuration was found in the reviewed frontend. Therefore, conversion rates cannot be responsibly reported from the repository alone. The rates below are required baseline metrics, not observed values. Instrument before making numeric claims.

Recommended event schema:

| Funnel stage | Event | Required properties |
|---|---|---|
| Landing → Search | `search_cta_view`, `search_started` | `page`, `entry_page`, `city`, `keyword_present` |
| Search → Compare | `search_results_viewed`, `event_card_click`, `compare_started` | `result_count`, `event_id`, `source` |
| Compare → Signup | `compare_viewed`, `alert_cta_clicked`, `signup_started` | `event_id`, `gate_location`, `is_returning` |
| Signup → Watchlist | `signup_completed`, `onboarding_started`, `watchlist_added` | `method`, `event_id`, `target_price_set` |
| Watchlist → Retention | `alert_sent`, `alert_clicked`, `return_session`, `event_revisited` | `event_id`, `price`, `trend`, `days_since_signup` |

## Full funnel audit

### 1. Landing → Search

**Observed implementation:** The homepage hero says “Compare. Track. Save.” and explains real-time pricing, but its primary CTA is “Get Started Free” linking to `/register`; the secondary CTA only jumps to the on-page “How It Works” section. Homepage trending deals are static cards without links. Search begins at `/dashboard`, where the form defaults to Orlando and asks for city, keyword, and optional date range. SEO city/category pages include several registration CTAs, but their search initiation behavior is not instrumented.

**Likely drop-off:** Visitors must commit to an account before experiencing the core comparison value. The default Orlando location can also create an irrelevant first impression for visitors elsewhere.

**Required baseline:** `search_started / landing_sessions`, segmented by homepage, city page, category page, blog, and World Cup page.

**Priority fixes:**

1. Change the hero primary CTA to “Compare ticket prices” and link directly to a search experience. Keep “Create a free price alert” as the secondary CTA.
2. Add a compact search form or “Search events” CTA above the fold on the homepage.
3. Turn trending deals into actionable links with event context, or label them clearly as examples.
4. Replace the hard-coded Orlando default with location detection, a popular-city selector, or a neutral “Choose a city” state.

### 2. Search → Compare

**Observed implementation:** `/dashboard` results render `EventCard`. The primary card action is “Buy Tickets,” which goes directly to the provider. The secondary watchlist icon is unlabeled visually and opens a signup prompt only after click for logged-out users. The dedicated `/compare` page has a robust side-by-side comparison view, but it redirects anonymous visitors to `/login` before they can search.

**Likely drop-off:** Users who came to compare may not discover `/compare`; users who click the watch icon receive a modal but lose the selected event if they continue to registration. No-result states only suggest changing the query and do not offer popular searches, nearby cities, or a newsletter fallback.

**Required baseline:** `compare_started / search_results_viewed`, plus `event_card_click` and `no_results_rate` by query and landing page.

**Priority fixes:**

1. Add a clear “Compare prices” action to every event card, linking with encoded event/search context.
2. Allow anonymous users to use `/compare`; gate only alert creation, watchlist persistence, and historical tracking.
3. Keep the selected event and search query through authentication with a signed or validated `returnTo`/pending-alert payload.
4. Improve no-results recovery with suggested cities, category links, and an email alert option.

### 3. Compare → Signup

**Observed implementation:** The compare page currently gates the entire experience behind login. The comparison UI shows fee estimates, best-source badges, savings, listing counts, and outbound buy links once available. There is no visible alert CTA in the reviewed comparison view and no contextual signup request at the point where a user sees a price.

**Likely drop-off:** The auth redirect interrupts the product promise before the user sees evidence of savings. Conversely, once comparison is ungated, signup should be requested at a high-intent moment: “alert me when this price reaches $X.”

**Required baseline:** `signup_started / compare_viewed`, segmented by gate location, plus `signup_completed / signup_started` and alert creation rate.

**Priority fixes:**

1. Remove the page-level login redirect.
2. Add “Track this price” / “Get a price-drop alert” beside each comparison result.
3. Explain the exchange: free account, target price, email notification, no ticket purchase required.
4. Preserve the event and prefill a suggested target price after signup; let the user edit it.

### 4. Signup → Watchlist

**Observed implementation:** Registration asks for email, password, and password confirmation, then stores the JWT and redirects to `/dashboard`. There is no social login, preference capture, progress indicator, guided tour, or pending event handoff. The watchlist page requires authentication and has a useful empty state, but a new account lands on search rather than a first-alert task.

**Likely drop-off:** Account creation completes without an immediate reward. The user has to repeat search and understand the watchlist icon independently.

**Required baseline:** `watchlist_added / signup_completed` within 60 seconds, and `target_price_set / watchlist_added`.

**Priority fixes:**

1. Redirect a user with pending event context to “Set your first alert,” not the generic dashboard.
2. Redirect users without context to a three-step onboarding checklist with one-click continuation to search.
3. Make target price setting part of the add-to-watchlist action; do not silently create an item with no target.
4. Add a lightweight “You’re protected from price changes” confirmation after the first alert.

### 5. Watchlist → Retention

**Observed implementation:** Watchlist cards display current min/max price, trend, target, last update, and “AT TARGET!” status. There is a “View Details” action and an “Add Events” action. The backend context specifies scheduled price tracking and email alerts, but the frontend has no visible alert history, notification preferences, or post-alert return-state experience.

**Likely drop-off:** The watchlist is useful only when data is fresh and a target is set. “Tracking started - prices coming soon” can feel like a dead end unless the user knows when to return or receives a confirmation email.

**Required baseline:** 7-day return rate after `watchlist_added`, alert email open/click rate, and `event_revisited` after an alert.

**Priority fixes:**

1. Show next check time and “last checked” freshness consistently.
2. Add alert status per item: target set, monitoring active, last notification, and notification preferences.
3. Deep-link alert emails to the event comparison view, not only the watchlist.
4. Add a return-visitor summary: “3 prices changed since your last visit.”

## Prioritized backlog

| Priority | Fix | Funnel impact | Effort |
|---|---|---|---|
| P0 | Ungate anonymous comparison and add contextual alert CTA | Compare → Signup | Medium |
| P0 | Preserve event context through signup | Signup → Watchlist | Medium |
| P0 | Change homepage CTA to search/compare | Landing → Search | Low |
| P1 | Add first-alert onboarding and target-price step | Signup → Watchlist | Medium |
| P1 | Add visible compare CTA to EventCard | Search → Compare | Low |
| P1 | Instrument funnel and source/segment properties | All | Medium |
| P2 | Add return-visitor change summary and alert history | Retention | Medium |
| P2 | Test social login after email/password baseline is measured | Signup | Medium/High |

## Handoff summary

- **Content Agent (Agent 1):** Write homepage hero variants, alert CTA copy, no-results recovery copy, onboarding microcopy, and popup variants. Required claims must be substantiated; avoid implying guaranteed savings.
- **Growth Agent (Agent 8):** Own first-alert onboarding, pending-event handoff, return-visitor summary, and activation definition: account created + first watchlist item + target price set within 60 seconds.
- **Analytics Agent (Agent 7):** Implement the event schema above, dashboard funnel report, cohort retention, alert email attribution, and experiment assignment/exposure logging before interpreting lift.

## Evidence limits

This is a code-and-flow audit, not a production analytics report. No conversion-rate data, popup trigger configuration, experiment assignment service, or email engagement export was present in the reviewed repository. Rates, sample sizes, and expected popup conversions in companion documents are planning estimates and must be replaced with observed baselines after instrumentation.
