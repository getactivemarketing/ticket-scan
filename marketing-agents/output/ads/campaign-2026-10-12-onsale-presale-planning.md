# Campaign Brief — Search-Onsale-Presale-Planning-US-2026-10-12

**Status:** Launch-ready draft; not launched.  
**Platform:** Google Search  
**Proposed cap:** $15/day for 7 days ($105 maximum), pending approval  
**Primary destination:** matching event page or `/onsales`  
**Fallback destination:** `/dashboard` for broad discovery only

## Hypothesis

Specific sale-window searches will produce more qualified downstream actions than
broad “cheap tickets” language because the destination can answer the exact event,
onsale/presale, venue, and seller-link question.

## Audience and ad groups

1. **Event sale window** — `[event] onsale`, `[artist] presale`, `[team] tickets`
2. **Venue sale window** — `[venue] presale`, `[venue] events`, `[venue] tickets`
3. **Event planning** — `[event] date`, `[event] schedule`, `[event] where to buy`

Start with phrase and exact match. Use only verified event, venue, artist, and team
terms. Do not use unsupported TicketScan price, alert, or buy-timing claims.

## Negative-keyword starting list

Review against actual search terms before upload; these are not account-wide
negatives:

- `ticket refund`
- `sell my tickets`
- `resell tickets`
- `ticket customer service`
- `ticket barcode`
- `printable ticket`
- `ticket jobs`

Keep `price`, `compare`, `ticketmaster`, `ticketnetwork`, `onsale`, `presale`,
`ticketscan`, `event`, `venue`, and `ticket` eligible until query evidence says
otherwise.

## Measurement

- Primary: `outbound_ticket_click`
- Secondary: `signup_completed`, `watchlist_added`, `newsletter_subscribe`
- Required UTM fields: `utm_source=google`, `utm_medium=cpc`,
  `utm_campaign=search-onsale-presale-planning-us-2026-10`, unique `utm_content`
- Required QA: event fires once, survives route changes, and carries source surface
  without email addresses, JWTs, or other sensitive data.

## Launch gate

- [ ] Google Ads account read/control access confirmed
- [ ] Owner approves $15/day cap and target CPA
- [ ] `/onsales` and all matching event destinations pass mobile QA
- [ ] Conversion events and UTM persistence verified in production
- [ ] Search-term and negative-keyword review process ready
- [ ] Ad-policy review complete
- [ ] Campaign uploaded and reviewed by account owner

No external campaign action was taken from this workspace.
