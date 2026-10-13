# Paid Ads → CRO Handoff — 2026-10-13

Paid traffic remains on measurement hold. Before launch, CRO should:

1. Add first-touch and last-touch UTM persistence through signup, newsletter, watchlist, and outbound seller-click completion.
2. Verify `outbound_ticket_click` as the primary event for event-discovery ads and `signup_completed` as a secondary event.
3. QA message match and freshness for `/dashboard`, `/onsales`, event pages, and verified venue guides.
4. Keep the primary CTA specific to the landing-page intent: find an event, check venue details, or review onsale/presale timing.
5. Report page-level conversion rate, mobile load performance, and abandonment once an authenticated ad export is available.

Do not optimize paid traffic from CTR alone, and do not launch until attribution is observable end to end.
