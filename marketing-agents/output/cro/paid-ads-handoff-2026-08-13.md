# Paid Ads → CRO Handoff — 2026-08-13

## Recommendation

Keep paid acquisition on hold. `/compare` is the recommended destination when activation is approved, but paid-source attribution and conversion events are not yet reliable enough to optimize spend.

## Priority checks

- Fire `compare_started`, `signup_completed`, and `watchlist_added` only after successful actions.
- Persist first-touch and last-touch UTM values through comparison and signup.
- QA anonymous mobile `/compare` flow and confirm no login wall blocks the first comparison.
- Report conversion rate by landing page, campaign, ad group, and creative.
- Keep price-alert claims restrained while price tracking and alert reporting remain unhealthy.
