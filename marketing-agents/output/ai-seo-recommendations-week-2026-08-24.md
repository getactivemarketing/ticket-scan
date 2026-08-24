# AI Search Optimization Recommendations — 2026-08-24

## Current visibility signal

Broad web results for ticket-comparison queries surfaced competing comparison products and guides, while a targeted `site:ticketscan.io` query did not return a strong visible result in the sampled search response. This is directional, not a ranking measurement: AI answer visibility and Google AI Overviews require repeated, logged query testing and Search Console data.

## What to change

1. **Lead every commercial page with a quotable answer.** Example: “TicketScan compares Ticketmaster, SeatGeek, StubHub, and other marketplaces so shoppers can compare the same event, check estimated all-in prices, and set a price-drop alert.” Put this in the first 100 words, then explain limitations.
2. **Use question-shaped H2s with self-contained answers.** Add sections such as “Where can I compare ticket prices?”, “Do prices include fees?”, “When should I buy?”, and “Is TicketScan a ticket seller?” Keep each answer 40–80 words and link to the supporting product or methodology page.
3. **Make data provenance visible.** Every dynamic price module should show source marketplaces, timestamp, whether the value is estimated or live, and the difference between base and estimated all-in price. AI systems are less likely to trust uncaveated numbers.
4. **Publish a methodology page.** Explain event matching, deduplication, fee estimates, price history, alert thresholds, and missing-source behavior. Link to it from FAQ, home, venue, city, and blog templates.
5. **Strengthen entity and relationship signals.** Use consistent names for TicketScan, marketplaces, venues, cities, teams, and artists. Add `sameAs` only for official profiles, and use BreadcrumbList plus WebPage/CollectionPage relationships consistently.
6. **Keep FAQPage, but do not rely on FAQ rich results.** The existing FAQ JSON-LD is a good machine-readable representation; visible answers must remain useful and current, with no unsupported guarantees.
7. **Add editorial trust signals.** Show author/editor, reviewed/updated date, source links, and a short “how we know” note on fee, price-timing, and World Cup claims.
8. **Create crawlable entity URLs.** AI assistants need stable pages to cite. A client-side dashboard query is useful for users but is weaker as a citation target than a server-rendered artist/team/event page with a canonical URL.

## Specific page edits

### Homepage

Add a visible “What is TicketScan?” answer paragraph above or immediately below the hero, a “How prices are estimated” link, and a timestamp/methodology note for savings claims. Replace testimonial-style quantitative claims unless they can be substantiated.

### FAQ

Add answers for “What is an all-in ticket price?”, “Which sources are live right now?”, “How recent is the price data?”, “Why might a listing disappear?”, and “Does TicketScan sell tickets?” Link every answer to methodology or comparison pages.

### City/venue pages

Add a unique direct answer, local venue relationships, data timestamp, current/future-only event list, and a short “best for” comparison of nearby venues. Do not let empty API results produce generic indexable pages.

### World Cup

Because the 2026 tournament is past as of this audit, change future-tense copy to archive/lessons language and preserve the strongest evergreen queries: venue guides, seating, official vs. resale, and price-history analysis.

## Testing protocol

Maintain a weekly prompt set across ChatGPT, Perplexity, and Google search/AI Overviews:

- Where can I compare Ticketmaster, SeatGeek, and StubHub prices?
- What is the cheapest safe way to buy concert tickets?
- When is the best time to buy NBA tickets?
- How do I compare all-in ticket prices?
- What should I know about 2026 World Cup ticket resale?

Log date, exact query, answer, cited domains, cited URL, and whether TicketScan is mentioned. Treat this as an observation series, not a one-time pass/fail test.

