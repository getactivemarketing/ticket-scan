# Tracking Audit Findings — July 31, 2026

## Status

GTM container `GTM-T476F9S4` is present on the root layout and confirmed in the live homepage, compare page, and dashboard HTML. The container loads, but the application source contains no GA4 tag/configuration or custom `dataLayer.push` conversion events.

## Audit matrix

| Check | Result | Evidence / action |
|---|---|---|
| GTM loads sitewide | Pass | Root layout; live pages expose `GTM-T476F9S4` |
| Signup event | Fail | Add `signup_complete` after successful registration |
| Search event | Fail | Add `search_submit` with category, city, date-range, result count |
| Compare event | Fail | Add `compare_view` with event ID/source count; avoid PII |
| Watchlist event | Fail | Add `watchlist_add` and `target_price_set` |
| Newsletter event | Fail | Add `newsletter_subscribe` with source/form placement |
| Outbound click | Fail | Add `outbound_ticket_click` with source/event ID |
| Alert sent/clicked | Fail | Add server-side delivery event and client click event |
| UTM persistence | Unknown/fail | Define `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`; persist first and last touch |
| Cross-domain tracking | Unverified | Configure only if API or checkout domains are part of the measurement journey |
| GTM vs admin API reconciliation | Blocked | Current DB counts: 195 users, 198 watchlist, 4 subscribers; no GA4 totals to compare |
| Alert admin endpoint | Fail | `/api/admin/alerts` returns HTTP 500; inspect `triggered_at`/schema mismatch and add endpoint test |

## Priority implementation plan

### P0 this week

1. Connect GA4 to GTM and publish a web data stream.
2. Create the seven client events above with a documented event/parameter contract.
3. Add a debug/test checklist for register, search, compare, watchlist, target price, newsletter, and outbound click.
4. Fix `/api/admin/alerts` and add a read-only integration test.

### P1 next week

1. Add server-side `price_alert_sent` only after an email provider response is known; do not treat an attempted send as a delivered email.
2. Preserve UTMs through registration and outbound ticket links.
3. Add a daily reconciliation job: GA4 signups vs `users`, server watchlist adds vs `watchlist`, newsletter subscribes vs `newsletter_subscribers`.
4. Add consent-aware anonymous session IDs and authenticated `user_id` only after login/registration.

## New event recommendations from this week

`target_price_set`, `price_history_view`, `recommendation_view`, `outbound_ticket_click`, `duplicate_event_merged`, `alert_email_click`, and `activation_24h`.

## Acceptance criteria

An analyst can see one event per intended action in GTM Preview and GA4 DebugView, with no duplicate fires on React rerender; UTM values persist across the signup path; every admin count can be reconciled to a server event within an agreed tolerance.
