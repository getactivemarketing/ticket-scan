# AI Search Optimization Recommendations — 2026-08-10

## Visibility assessment

Public search found TicketScan for “how it works,” but generic queries such as ticket-price comparison and cheapest concert tickets were dominated by SeatCompare, SeatSonar, marketplace explainers, and competitors. ChatGPT, Perplexity, and Google AI Overviews cannot be reliably audited from this environment, so citation presence is **unverified**, with weak organic visibility as the working hypothesis.

## Highest-value changes

1. Put a direct answer block near the top of `/`, `/how-it-works`, `/faq`, and `/compare`: “TicketScan compares supported Ticketmaster, SeatGeek, StubHub, and other listings side by side, tracks price history, and can alert you when a target price is reached.” Keep the platform list factual and current.
2. Rework FAQ answers into question H2s followed by a 40–70 word answer, then evidence, caveats, and a relevant internal link. Keep `FAQPage` JSON-LD synchronized with visible content.
3. Publish a methodology page covering listing matching, duplicate suppression, price timestamps, fees/all-in status, unavailable sources, and buy/wait/hold logic.
4. Add visible `Last updated`, `Data checked`, and `Sources compared` fields to every high-intent programmatic page.
5. Replace generic “save hundreds” claims with dated, reproducible examples: event, date, comparable seat/section, sources, observed spread, and fee basis.
6. Turn World Cup pages into a clearly labeled archive/results cluster so assistants do not quote stale active-buying guidance.

## Quotable answer paragraphs to add

### Where can I compare ticket prices?

“TicketScan lets fans review supported Ticketmaster, SeatGeek, StubHub, and other marketplace listings in one place. It also tracks price history and can send an alert when an event reaches a target price. Checkout happens on the third-party seller’s site, so the final total and availability can change.”

### What is the cheapest way to buy concert tickets?

“No marketplace is cheapest for every concert. Compare the same event, date, section, row, quantity, and all-in fees across sources, then use price history to judge whether today’s listing is unusually high or low. Availability and checkout totals can change after the comparison.”

### What happened to World Cup 2026 ticket prices?

“The 2026 World Cup ended July 19, 2026. TicketScan’s World Cup pages are now an archive of venue, match, and observed-price information, not a promise of current inventory. For current events, use live search and price alerts.”

## Structured content

- Keep Organization and WebSite JSON-LD stable and cross-reference their `@id` values.
- Use `BreadcrumbList` on every new hub and leaf.
- Use `Article` plus author/editor/date fields on methodology and research pages.
- Keep `FAQPage` only where the questions and answers are visible and genuinely useful; structured data must not introduce claims absent from the page.
- Do not add `SearchAction` until a crawlable search URL exists.

## Measurement

Run a monthly 20-query panel across comparison, fees, best-time, venue, and World Cup archive intent on ChatGPT, Perplexity, Google AI Overview, and Bing/Copilot where available. Record query, date, cited/not cited, cited URL, competitor mentions, factual errors, and conversion path. Compare against Search Console impressions/CTR for the answer-block pages.

