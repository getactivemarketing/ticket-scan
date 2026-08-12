# Paid Ads → CRO Handoff — 2026-08-12

## Acquisition destination

Use `/compare` as the default landing page for comparison-led ads. Production smoke check returned HTTP 200.

## Measurement blockers

- No ad-platform spend, CPA, ROAS, CTR, or audience-quality export is connected.
- No reliable paid-source or visitor denominator is available in the current analytics handoff.
- GTM presence is confirmed, but frontend conversion events and UTM persistence remain unverified.

## CRO priorities before spend changes

1. Emit `compare_started`, `signup_completed`, and `watchlist_added` after successful actions.
2. Persist first-touch and last-touch UTM values through the comparison and signup flow.
3. Validate anonymous `/compare` access and the mobile comparison interaction.
4. Report conversion rate by landing page, campaign, and creative so paid traffic can be triaged against a real denominator.
5. Keep alert-related ad copy conservative while the platform reports 0 active and 0 triggered alerts.
