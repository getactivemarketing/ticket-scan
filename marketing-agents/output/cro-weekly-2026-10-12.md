# TicketScan CRO Weekly Audit — 2026-10-12

## Executive summary

The funnel cannot currently be scored because the site loads GTM but does not push the core events needed to measure search, registration, watchlist adds, or outbound seller clicks. The first CRO task is therefore measurement repair, not declaring a winning page.

The implementation audit shows four material friction points:

1. The homepage CTA sends visitors to registration even though the clearest first value is event search.
2. Guests can search, but the compare route redirects unauthenticated users to login; this is a hard dead-end for a high-intent action.
3. Registration ends at `/dashboard` with no next-action guidance.
4. The product's current public value is event discovery, seller links, onsale/presale dates, venue guides, and a revisit-oriented watchlist. Price tracking, price history, price trends, price-drop alerts, and buy/wait calls must not be used in CRO copy while those systems are down.

## Evidence and measurement limits

### Repository evidence

- `web/src/app/page.tsx`: the hero CTA says “Get Started Free” and links to `/register`; the homepage also contains a live “Upcoming Events” surface, venue directory, browse tabs, guides, and newsletter signup.
- `web/src/app/dashboard/page.tsx`: search is available to guests; the guest banner says an account is needed to save events.
- `web/src/components/EventCard.tsx`: “Buy Tickets” is available directly; the watchlist control opens a signup overlay for guests with “Create a free account to save this event.”
- `web/src/app/compare/page.tsx`: unauthenticated visitors are redirected to `/login` before using the comparison flow.
- `web/src/app/register/page.tsx`: registration is one page with email, password, confirmation, and redirect to `/dashboard` after success.
- `web/src/app/watchlist/page.tsx`: the empty state explains search → save → revisit, but still contains stale “Get notified the moment it drops” copy and price fields in the component. This needs a status-safe copy pass before it is used as onboarding inspiration.
- `web/src/components/NewsletterSignup.tsx`: the newsletter form is embedded, not a timed modal; copy is appropriately centered on onsale/presale information and guides, but should be checked for consistency across variants.
- `docs/HANDOFF.md`: GTM is present but no signup, watchlist-add, or outbound-click events are being pushed. The admin alert endpoint is also reported as failing.

### What is not known

No reliable visit, search, compare, registration, watchlist, retention, or outbound-click conversion rates were found in the repository. The rates below are therefore explicitly `unknown`, not estimates.

## Funnel audit

| Stage | Current experience | Evidence-based diagnosis | Rate | Priority |
|---|---|---|---:|---:|
| Landing → Search | Homepage leads with registration, while search is surfaced lower through upcoming events and browse links. | CTA asks for commitment before the visitor has performed the core job. “Get Started Free” is less concrete than “Search Events.” | Unknown | P0 |
| Search → Compare / seller review | Dashboard search is guest-accessible. Event cards offer direct “Buy Tickets”; compare is a separate authenticated route and is not a natural continuation of a search result. | Search has an actionable exit, but the comparison path is fragmented and gated. | Unknown | P0 |
| Compare → Signup | `/compare` redirects guests to login. | This is a hard drop-off for new visitors; there is no explanation of why login is needed and no return-state guarantee visible in the route. | Unknown | P0 |
| Signup → Watchlist | Registration redirects to `/dashboard`; no tour, preference capture, deep link, or first-event prompt. | Account creation does not immediately produce a saved event or a visible “next best action.” | Unknown | P0 |
| Watchlist → Retention | Watchlist supports revisit and seller links. Email/price-alert retention claims are not safe while tracking is down. | Retention loop should be based on upcoming event dates, onsale/presale dates, new relevant events, and useful venue/ticket-buying guides. | Unknown | P1 |

## Prioritized fixes

### P0 — Repair measurement before testing

Push these events through the existing GTM data layer. Do not add a new analytics framework.

```text
ticket_scan_search_submitted { surface, city, keyword_present, date_filter_present }
ticket_scan_search_result { surface, result_count }
ticket_scan_event_viewed { event_id, source_surface }
ticket_scan_seller_click { event_id, seller, source_surface }
ticket_scan_watchlist_prompted { event_id, authenticated }
ticket_scan_watchlist_added { event_id, source_surface }
ticket_scan_signup_started { source_surface }
ticket_scan_signup_completed { source_surface }
ticket_scan_newsletter_subscribed { source }
```

Use a stable `source_surface` value (`homepage`, `dashboard`, `event_card`, `onsales`, `venue_page`, `compare`) and never include email addresses or JWTs. QA each event in preview mode and confirm duplicate suppression on React re-renders.

### P0 — Make search the homepage's primary first action

Change the hero primary CTA to `Search Events` → `/dashboard`, retain `Create Free Account` as a secondary CTA, and update the visual mockup to show an event card with date, venue, onsale status, seller link, and save action. Remove any price-chart implication from the hero.

### P0 — Remove the compare dead-end

Preferred path: allow the compare page to render a guest search and results, then require an account only when saving a result. If the backend cannot support that immediately, replace the redirect with a clear explanation and a link back to `/dashboard`, preserving the visitor's search parameters where possible. Do not send a guest to a blank login page.

### P0 — Add a first-action handoff after registration

After registration, send the user to a lightweight welcome state that asks for one city and one event interest, then deep-links to a prefilled search. The first success state should be “Saved to your watchlist — revisit details and seller links here.” Avoid claims about alerts or changing prices.

### P1 — Make watchlist retention useful while tracking is unavailable

Replace stale alert/price language with upcoming-date and revisit language. Useful return triggers are:

- an event's onsale or presale window is approaching;
- a new matching event is found for a selected team, artist, venue, or city;
- a saved event's seller link or event details need revisiting;
- a new venue guide or ticket-buying guide is published.

### P1 — Keep newsletter messaging scoped

Use the newsletter for onsale/presale dates, venue guides, and ticket-buying tips. Cap any future popup at one display per 14 days, suppress it for subscribers, and suppress it on the registration and login routes.

## Recommended sequence

1. Add and QA funnel event instrumentation.
2. Correct status-sensitive copy in watchlist, registration, homepage visual mockup, and any emails that still reference price alerts.
3. Repair the compare guest path or replace the redirect with a useful fallback.
4. Ship the post-registration first-action state.
5. Run the homepage CTA A/B test in the companion spec.
6. Review results only after one full weekly cycle and a minimum event threshold is reached.

## Handoffs

- Content Agent: use the copy brief in `cro-content-handoff-2026-10-12.md`.
- Growth Agent: use `onboarding-flow-2026-10-12.md` for the first-action experience.
- Analytics Agent: implement the event taxonomy in this report before calculating conversion rates.

