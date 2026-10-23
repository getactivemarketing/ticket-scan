# Analytics Channel Recommendations — 2026-10-23

## Content / SEO

- Build verified venue and onsale/presale content around the highest saved-event hubs: Madison Square Garden, Sphere, Wrigley Field, Barclays Center, and AT&T Stadium.
- Add one comparison page for SeatGeek, with research-vs-marketplace positioning and seller disclosure.
- Do not optimize around unsupported price-history, alert, or buy-timing claims.

## Paid

- Do not report spend efficiency, CPA, or ROAS from the current stack; no reliable channel attribution exists.
- Prepare UTM standards: `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, and `utm_term`; persist first-touch and last-touch values before the next test.

## Email

- Repair the drip pipeline before optimizing subject lines: confirm scheduler, SMTP, suppression, and `drip_emails_sent` writes.
- Remove price-alert promises from all templates while the product-status outage remains active.
- Add provider message IDs and sent/delivered/opened/clicked/bounced/unsubscribed events without sending raw email addresses to analytics.

## CRO

- Instrument successful signup, event view, saved-event add, newsletter subscribe, and seller outbound click.
- Use the first-login state to guide a new user to “find an event → check the venue → save an event,” with no unsupported price CTA.

## Growth / Retention

- Segment by saved-event breadth only until return-session telemetry exists: 0 rows, 1–2 rows, and 3+ rows.
- After instrumentation, publish 1-day, 7-day, and 30-day activation/return cohorts.
- Treat “0 target prices” as an unavailable-feature state, not a churn or preference signal.

## Analytics Engineering

- Add a typed `track()` helper and five core success events plus `event_viewed` and session events.
- Add date-bounded first-party event queries and a daily telemetry health check.
- Fix `/api/admin/alerts` so HTTP failure cannot be mistaken for zero engagement.
