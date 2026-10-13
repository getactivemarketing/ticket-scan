# Content handoff — remove unsupported product claims

The current product-status file says TicketScan price tracking, price history, price trends, price-drop/target-price alerts, and buy/wait calls are unavailable. `web/src/data/blog.ts` still publishes those claims in multiple posts.

Priority examples:

- World Cup guide content around lines 65–87 and 2042–2062.
- Concert guide content around lines 134–152.
- NBA guide content around lines 236–251.

Rewrite toward supported claims: event discovery, links to Ticketmaster/TicketNetwork when available, onsale and presale dates, venue seating/access guidance, seller-side availability, all-in fee checks, and general anti-scam advice. Do not replace the unsupported claims with statistics attributed to TicketScan.

Keep the existing URLs and article structure where possible so the cleanup preserves accumulated internal links and avoids unnecessary redirects. Re-run the product-status grep before publishing.
