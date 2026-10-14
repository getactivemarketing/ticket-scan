# SEO request — remove legacy product claims

## Priority

High. This is a public trust issue, not a keyword optimization request.

## Source

`web/src/data/blog.ts`

## Problem

Multiple published articles still say TicketScan tracks prices, stores price history, sends price-drop/target-price alerts, or provides buy/wait guidance. Those claims are currently false per `marketing-agents/PRODUCT-STATUS.md`. The live `/blog` page also exposes “price trend” language.

## Requested cleanup

1. Start with the featured `best-time-to-buy-concert-tickets` post and any post containing `price alerts`, `price history`, `price trends`, `buy now`, or TicketScan-specific price-analysis claims.
2. Rewrite toward verified functionality: event discovery, seller links, venue guides, onsale/presale dates, all-in fee comparisons, and general ticket-buying safety advice.
3. Remove unsupported statistics, price ranges presented as TicketScan data, and alert CTAs. Do not replace them with new TicketScan price claims.
4. Recheck generated blog metadata, sitemap inclusion, and JSON-LD after the cleanup.
