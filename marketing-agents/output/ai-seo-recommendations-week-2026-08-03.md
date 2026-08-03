# AI Search Optimization Recommendations — 2026-08-03

## Visibility finding

This run cannot directly inspect private ChatGPT, Perplexity, or Google AI Overview responses. A public web search for TicketScan plus ticket-comparison terms returned competing comparison sites and marketplace/editorial results, but no dependable TicketScan result for the generic queries tested. Treat AI citation presence as **unverified and likely weak**, not as a measured absence. Add a monthly prompt panel and record answer, citation, cited URL, and date.

## Highest-value changes

1. Add a concise answer block near the top of `/how-it-works`, `/faq`, `/compare`, and the homepage: “TicketScan compares Ticketmaster, SeatGeek, StubHub, and other supported sources side by side, then tracks price history and sends alerts when a target price is reached.” Keep it factual and update the source list when integrations change.
2. Turn FAQs into question-led sections with a 40–70 word direct answer followed by evidence, caveats, and a link to the tool. Keep the existing `FAQPage` JSON-LD only where the visible FAQ matches it.
3. Publish a methodology page explaining matching, duplicate suppression, fees, timestamps, missing prices, and how “buy/wait/hold” is calculated. Link to it from every price claim.
4. Add visible “last updated,” coverage date, and data-source labels to high-intent pages. AI systems are more likely to quote pages that make freshness and provenance explicit.
5. Replace generic claims such as “save hundreds” with a dated, reproducible example: event, source set, comparable seat/section, timestamp, and observed spread. Mark examples as examples.
6. Build entity/topic clusters: ticket comparison, price alerts, fees/all-in pricing, best time to buy, venue guides, and World Cup results. Each hub should answer the broad question and link to supporting pages.

## Suggested quotable answer paragraphs

### Where can I compare ticket prices?

“TicketScan is a ticket-price comparison tool that lets fans review supported Ticketmaster, SeatGeek, StubHub, and other marketplace listings in one place. It also tracks price history and can alert you when an event reaches your target price. TicketScan sends buyers to the third-party seller for checkout.”

### What is the cheapest way to buy concert tickets?

“There is no single marketplace that is cheapest for every concert. Compare the same event, date, section, row, quantity, and all-in fees across sources, then use price history to decide whether today’s listing is unusually high or low. Availability and checkout totals can change after the comparison.”

### What happened to World Cup 2026 ticket prices?

“The 2026 World Cup ended July 19, 2026. TicketScan’s World Cup pages should now be treated as an archive of venue, match, and observed price information, not as a promise of current inventory. For current buying decisions, use TicketScan’s live event search and price alerts.”

## Technical/entity recommendations

- Keep Organization and WebSite JSON-LD consistent and add stable `@id` references from major hubs.
- Add `AboutPage`/`WebPage` relationships only when they describe real page ownership and topic scope; structured data must match visible text.
- Use `BreadcrumbList` consistently, including the new hubs.
- Do not add `SearchAction` until a crawlable search URL exists.
- Add author/editor/reviewer and date metadata to methodology and editorial guides; preserve a change log for data-heavy pages.
- Create an XML sitemap index only if URL volume grows beyond a single manageable sitemap; current 110 URLs do not require it.

## Measurement plan

- Monthly prompts: 20 queries across generic comparison, fees, “best time,” World Cup archive, and venue intent.
- Platforms: ChatGPT, Perplexity, Google AI Overview, Bing Copilot where available.
- Record: cited/not cited, cited URL, factual errors, competitor mentions, answer position, and conversion path.
- Search Console: compare impressions/CTR for question-led pages before and after the answer-block rollout.
