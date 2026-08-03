# TicketScan CRO Weekly Audit — 2026-08-03

## Executive summary

The largest measurable funnel risk is activation, not ticket discovery. Visitors can search without an account, but the product does not carry the selected event into signup, and a new account lands on a generic search dashboard. The result is avoidable intent loss between “I want to track this event” and “my first price alert is set.”

Recommended order:

1. Preserve event context through registration and land new users in a one-screen “set your target price” step.
2. Replace hard auth redirects on `/compare` with a value-preview and contextual signup path.
3. Add funnel instrumentation before declaring page or channel winners.
4. Test the alert-oriented CTA (“Get price-drop alerts”) against the current watchlist icon treatment.

## Evidence and measurement limits

This is a code and UX audit of the local Next.js frontend and backend route inventory. No product analytics export, session recordings, experiment history, or production conversion dashboard was available in the repository. Therefore, numeric conversion rates and drop-off percentages are **not currently known**. The rates below are measurement requirements, not observed performance.

Required events: `landing_view`, `search_started`, `search_completed`, `zero_results`, `event_card_view`, `compare_clicked`, `compare_viewed`, `signup_started`, `signup_completed`, `watchlist_add_started`, `watchlist_added`, `target_price_set`, `alert_delivered`, `return_visit`, and `outbound_ticket_click`. Include `source_page`, `event_id`, `auth_state`, `device_type`, and experiment assignment.

## Funnel audit

### 1. Landing → Search

Observed:

- The homepage hero communicates “Compare. Track. Save.” and explains price alerts.
- The primary hero CTA is `Get Started Free` → `/register`.
- The homepage’s `HomeHeroButtons` component also offers `Find Tickets` → `/dashboard`; its loading/auth states create multiple CTA variants.
- The global anonymous navbar links `Search` → `/dashboard` and `Sign Up` → `/register`.
- SEO landing pages, venue pages, blog pages, and World Cup pages exist, but page-specific search-initiation tracking is not visible in the inspected code.

Assessment:

- Search initiation is likely clearest from the navbar and dashboard route, but the homepage’s highest-visibility CTA asks for account creation before the visitor experiences search.
- The hero proves the concept visually, but the sample price tracker is illustrative and does not let a visitor search immediately.
- Entry pages need a consistent primary action: “Search events” for discovery intent, with signup framed as the next step for alerts.

Rate status: landing-to-search rate by page is not instrumented. Add `landing_view` and `search_started` with `landing_path`.

Priority fixes:

- Make `/dashboard` the primary homepage hero action: “Compare ticket prices.”
- Keep “Get price alerts” as the secondary CTA and pass `returnTo`/event context when applicable.
- Add a compact search field or popular-search shortcuts to high-intent venue, city, and World Cup pages.

### 2. Search → Compare

Observed:

- `/dashboard` allows anonymous searches and shows city, keyword, and date filters.
- The default city is Orlando, which may be surprising for users arriving from another market.
- Results use `EventCard`. The card shows event type, name, date/time, venue, city/state, an optional price range, “Buy Tickets,” and a watchlist icon.
- There is a useful no-results state, but it only says to try another city, keyword, or date range; it does not offer popular alternatives or a broader search.
- `/compare` has a dedicated search and side-by-side all-in price presentation, but unauthenticated users are redirected to `/login` before seeing the tool.

Assessment:

- Search results are actionable for outbound purchase and watchlist intent, but there is no obvious “Compare prices” action on each dashboard card. The user must understand that the card’s buy link is an external purchase path.
- The event card’s watchlist icon has weak discoverability and no visible label on desktop/mobile. Its unauthenticated overlay copy is good but only appears after an icon click.
- The compare page’s auth wall is a major dead-end for anonymous comparison intent.

Rate status: search-to-compare and zero-result rates are not instrumented. Add result-set, event-card, compare-click, and zero-result events.

Priority fixes:

- Add a visible secondary CTA: “Compare prices” or “See price history” on each card.
- On zero results, offer “Search without a date,” nearby cities, and links to popular categories.
- Let anonymous users view at least a comparison preview; require signup only for saving, alerting, and historical tracking.

### 3. Compare → Signup

Observed:

- The dedicated compare page calls `router.push('/login')` when the visitor is not authenticated.
- The register flow asks for email, password, and confirm password, then stores JWT state and redirects to `/dashboard`.
- There is no social login, password-recovery link in the inspected register surface, preference capture, progress indicator, or contextual return path.

Assessment:

- Signup value is described in banners and EventCard copy (“track prices and get alerts”), but it is not presented at the exact moment of comparison intent.
- A login redirect adds an unnecessary decision: a new user who wanted a comparison must decide whether to log in or find the signup link.
- The product should not hide price information that establishes trust. Gate persistent monitoring and alerts, not the basic comparison proof.

Rate status: compare-to-signup and signup completion rates are not instrumented.

Priority fixes:

- Replace the compare auth redirect with a public comparison preview and inline alert CTA.
- Use a contextual modal or `/register?eventId=...&source=compare` that returns the user to the same event.
- Explain the exchange directly: “Create a free account to save this event and get notified when it reaches your target.”

### 4. Signup → Watchlist

Observed:

- Registration completes successfully through the API and redirects to the generic `/dashboard`.
- No onboarding tour, first-action checklist, pending-event handoff, or automatic watchlist add exists in the inspected frontend.
- The watchlist empty state links back to the dashboard and says tracking enables alerts and recommendations.
- Watchlist items can show current min/max price, trend, target, last checked time, and “AT TARGET!” status.

Assessment:

- This is the clearest activation drop-off risk. A user who registered from an event card has to search again and locate the same event.
- The empty watchlist page explains value but waits for the user to reconstruct the workflow.
- Target price capture is not surfaced in the EventCard add flow; the backend supports `target_price`, but the primary add action does not ask for it.

Rate status: signup-to-first-watchlist and watchlist-to-target-price rates are not instrumented.

Priority fixes:

- Preserve event ID/name/date/venue through signup and preselect it after registration.
- Make the first post-signup screen a target-price sheet with a suggested target and editable amount.
- If no context exists, show a 3-choice starter path: search event, choose interest, or browse popular events.

### 5. Watchlist → Retention

Observed:

- Backend cron checks watchlist prices every four hours and can send price-drop alerts.
- The watchlist page exposes trends, targets, timestamps, recommendations, and a “View Details” path.
- Email templates and drip campaigns exist in the backend.
- No frontend evidence shows alert delivery status, email click attribution, return-visit prompts, or “prices changed since last visit” messaging.

Assessment:

- The underlying retention loop is strong: price monitoring plus target alerts is a recurring reason to return.
- The product needs to close the loop visibly. Users should know whether an alert is active, when the last check happened, and what changed since their previous visit.
- Alert emails should deep-link to the event/watchlist item and preserve campaign attribution.

Rate status: alert-delivery-to-return and watchlist retention are not instrumented.

Priority fixes:

- Add alert status (“Monitoring every 4 hours,” target, last check, notification preference) to every item.
- Track email open/click and return-to-event sessions with UTM/campaign parameters.
- On return, show a short change summary: price movement, current best source, and next recommendation.

## Prioritized backlog

| Priority | Fix | Funnel stage | Success signal |
| --- | --- | --- | --- |
| P0 | Preserve event context through signup and target-price setup | Signup → Watchlist | `target_price_set / signup_completed` |
| P0 | Instrument the complete funnel | All | Complete event coverage and reliable rates |
| P1 | Remove `/compare` hard auth redirect | Compare → Signup | Compare view rate; qualified signup rate |
| P1 | Add labeled alert/compare actions to EventCard | Search → Compare | Card-to-compare and card-to-watchlist rate |
| P1 | Improve zero-results recovery | Search | Search refinement rate; lower abandonment |
| P2 | Add return-visitor change summary | Retention | 7-day return and alert-email click rate |

## A/B test recommendation

See [ab-test-2026-08-03-alert-cta.md](./ab-test-2026-08-03-alert-cta.md). This targets the highest-confidence activation issue: users see tracking as an unlabeled icon and do not receive a first-alert setup path.

## Signup, popup, and onboarding recommendations

- [Signup flow spec](./signup-flow-2026-08-03.md)
- [Popup strategy](./popup-strategy-2026-08-03.md)
- [Onboarding flow](./onboarding-flow-2026-08-03.md)

## Agent handoffs

See [cro-handoffs-2026-08-03.md](./cro-handoffs-2026-08-03.md) for copy requests to Content, onboarding work for Growth, and measurement requirements for Analytics.

## QA plan

Before launch, test anonymous search, zero results, compare preview, signup with an event context, refresh after JWT creation, target-price persistence, duplicate watchlist prevention, alert email deep links, mobile modal behavior, and accessibility of every CTA. Validate with a production-like API environment; do not treat static UI success as proof that an alert was scheduled.
