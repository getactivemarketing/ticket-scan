# TicketScan CRO Weekly Audit — 2026-08-24

## Executive summary

The biggest funnel break is activation, not acquisition: users can register and add watchlist rows, but the product does not reliably carry them to a target-price alert. The latest production snapshot reports **235 users, 227 watchlist items, 5 active newsletter subscribers, and 0 active price alerts**. A separate activation snapshot reports **137 users with a watchlist**, but target-price completion is not exposed.

The second major break is the anonymous comparison path. `/compare` redirects unauthenticated visitors to `/login` before a comparison can run. This asks for credentials before the product demonstrates its strongest value. The highest-priority experiment is therefore: allow one comparison, then ask for signup at the contextual “set an alert” moment.

Actual visit, search, compare-click, signup, and retention conversion rates are **not available**. GTM is present, but no named funnel events were found in the reviewed frontend source. Counts below are production snapshot facts, not calculated conversion rates.

## Evidence reviewed

- `web/src/app/page.tsx`: hero, direct registration CTA, static proof stats, trending deals, browse links, and an inline newsletter form.
- `web/src/app/dashboard/page.tsx`: four-field search, anonymous signup banner, EventCard results, and no-result state.
- `web/src/app/compare/page.tsx`: client-side redirect to `/login` for anonymous users; two-source comparison after authentication.
- `web/src/app/register/page.tsx`: email, password, confirm password; redirect to `/dashboard` after JWT registration.
- `web/src/components/EventCard.tsx`: anonymous watchlist click opens a signup overlay; CTA says “Sign Up Free”; no event context is carried to registration.
- `web/src/app/watchlist/page.tsx`: useful price/trend display, but no first-alert setup prompt and no target-price editor in the visible flow.
- `web/src/components/NewsletterSignup.tsx`: inline/card/footer forms exist; no timed or exit-intent popup implementation was found.
- Production snapshots dated 2026-08-24 and recent analytics/tracking reports.

## Funnel audit

| Funnel step | Observed experience | Likely drop-off | Rate status | Priority |
|---|---|---|---|---|
| Landing → Search | Homepage has “Get Started Free” to `/register` and no primary above-fold “Compare prices” path. Search is available through nav and secondary content links. | Registration-first CTA creates commitment before proof; content/venue pages do not consistently surface search immediately. | N/A: no pageview or CTA events | P1 |
| Search → Compare | Dashboard search is actionable and EventCard shows date, venue, city, range, image, and “Buy Tickets.” There is no visible compare CTA on the card. | Users may buy directly or stop after search; “Compare” is a separate authenticated nav route. Empty results end with only “try a different…” guidance. | N/A | P1 |
| Compare → Signup | `/compare` redirects anonymous users to `/login`; authenticated results show fees, source, savings, and outbound buy links. | Hard gate removes the product’s proof moment and creates a login detour. | N/A | P0 |
| Signup → Watchlist | Registration redirects to a generic dashboard. Watchlist is not pre-populated and no pending event is retained. | New user must remember/search again; no immediate reward. | 137 users with watchlist / 235 users is a directional 58.3% account-to-watchlist proxy, not a cohort conversion rate. | P0 |
| Watchlist → Retention | Watchlist shows current price, trend, target, and last checked when available. Price alerts depend on target prices; latest snapshot shows 0 active alerts. | No target-price onboarding, no empty-state checklist, no clear next update expectation beyond generic info box. | Return, email open, click, and alert rates N/A | P0 |

## Prioritized fixes

1. **P0 — Restore the alert activation loop.** After signup, preserve the originating event and require or strongly prompt a target price. Define activation as registration + watchlist item + target price within 60 seconds.
2. **P0 — Remove the anonymous `/compare` hard redirect for the experiment.** Permit one comparison, then gate alert creation—not price discovery—with a contextual signup prompt.
3. **P1 — Add a visible compare action to result cards.** Use “Compare prices” as the primary product action and “Buy tickets” as the outbound action. Keep the event and query context in the URL.
4. **P1 — Replace generic post-signup dashboard landing with a two-step activation handoff.** Show event summary, current lowest price, target input, and confirmation.
5. **P1 — Instrument the funnel.** Add `page_view`, `search_submit`, `compare_started`, `compare_completed`, `signup_started`, `signup_complete`, `watchlist_add`, `target_price_set`, `newsletter_*`, `popup_*`, `outbound_ticket_click`, and `return_session` events with anonymous/user IDs.
6. **P1 — Fix dead ends.** No-result states should offer “Alert me when events appear,” a newsletter alternative, and a clear new-search action; stale inventory should show a last-checked timestamp.
7. **P2 — Reduce proof friction.** Replace unsupported “$127 Avg. Savings” and “50K+ Events Tracked” precision with a methodology link, date, or verified source.
8. **P2 — Remove duplicate newsletter/footer placement on the homepage.** The page renders a local footer while the root layout also renders the shared Footer, producing repeated subscribe surfaces.

## Recommended KPI tree

Primary activation KPI: **first target-price alert set within 60 seconds of signup**.

Diagnostic metrics: landing CTA click-through, search completion, results-to-compare click, comparison completion, alert CTA click, signup completion, watchlist add, target-price set, outbound purchase click, 7-day return, alert email click, and unsubscribe rate.

Do not publish numeric funnel conversion rates until Analytics Agent supplies event-level denominators. Do not infer retention from total watchlist rows.

## Decision backlog

- Ship the anonymous comparison/alert test first.
- Add Google sign-in only after the pending-event handoff and baseline instrumentation work.
- Do not launch broad popups until high-intent alert and newsletter exposure are mutually capped.
- Treat current alert and price-history data as a trust dependency; stale data invalidates urgency copy.

