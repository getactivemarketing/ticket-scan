# SEO request — legacy price-feature copy refresh

The 2026-10-11 SEO audit found more legacy blog copy that promises price history, price alerts, or buy/wait advice even though those TicketScan features are currently unavailable.

Please refresh the affected posts in `web/src/data/blog.ts` toward supported search intent:

- event discovery and seller links;
- onsale and presale timing;
- venue sections, access, and game-day logistics;
- fee comparison and all-in checkout totals as general consumer advice.

Do not claim that TicketScan tracks prices, keeps price history, sends price-drop alerts, or recommends buying now/waiting. Do not invent TicketScan statistics. Preserve factual venue and event details, and cite official sources when adding current facts.

Evidence from today’s audit:

- `web/src/data/blog.ts` still contains multiple “set a price alert” and “track resale prices” instructions.
- The city/category landing-page SEO copy was corrected today to remove “Compare Ticket Prices” language.
- The rotated production JSON-LD pages were valid and need no schema change today.
