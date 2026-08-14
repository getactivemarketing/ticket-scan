# Channel Recommendations — 2026-08-14

These are handoffs, not measured channel-performance claims. The current system has no source/medium, pageview, paid-account, or email-engagement export.

## Content / SEO

- Publish `/compare/ticketscan-vs-vivid-seats` with neutral feature and methodology tables.
- Build an all-in-fees explainer and “same event, same section, different marketplace” examples.
- Use Harry Styles, Noah Kahan, Ariana Grande, Bruno Mars, and Backstreet Boys as demand hypotheses only; validate with Search Console/pageview data after instrumentation.

## Paid

- Hold scale until UTMs and `compare_completed`, `signup_complete`, and `watchlist_add` are verified end to end.
- First test: high-intent “compare ticket prices” and “Vivid Seats alternative” queries to `/compare` or the comparison page.
- Use “compare/check/track” language; avoid “cheapest,” live price-drop, and guaranteed-alert claims until data freshness is restored.

## Email

- Suppress test/API-test subscribers from production sends and confirm consent.
- Add provider webhooks and campaign IDs before reporting open rate, CTR, or conversion.
- Use activation email for the seven unactivated current-cohort users: one CTA to find an event, then a second CTA to set a target price.

## CRO

- Test a post-signup progress state: `Find an event → Add it → Set your target price`.
- After watchlist add, make target price the only primary next step.
- Instrument each step and an exit reason for users who do not add a watchlist item.

## Growth

- Treat the 88 no-watchlist users and current seven unactivated users as activation cohorts, not churn.
- Define power users as 3+ watchlist items or 2+ comparisons in 30 days once comparisons are tracked.
- Create win-back suppression rules for any user who returns, adds a watchlist item, sets a target, unsubscribes, bounces, or complains.

## Engineering / Analytics

- Fix alert reporting and price-tracker freshness before strategic claims.
- Ship the event taxonomy and UTM persistence, then create daily snapshots so next Friday’s report can calculate actual WoW funnel and channel metrics.
