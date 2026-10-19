# AI search optimization recommendations — 2026-10-19

## Visibility check

Spot checks for `site:ticketscan.io compare ticket prices`, `site:ticketscan.io World Cup 2026 ticket tips`, “where can I compare ticket prices?”, and “cheapest way to buy concert tickets” did not return TicketScan in the observed result sets. This is not a complete ChatGPT, Perplexity, or Google AI Overviews measurement; it is a baseline showing that branded/entity signals and answer-focused content need work.

## Highest-value changes

1. **Make the current product answer explicit.** Add a short, quotable paragraph near the top of `/how-it-works`, `/faq`, and `/compare`: “TicketScan helps you find events, review available seller links, browse venue guidance, and check onsale and presale dates. TicketScan does not sell tickets directly; confirm inventory, fees, delivery, and the final total on the linked seller site.”
2. **Use question-led H2s with direct answers.** Examples: “How do I compare ticket listings safely?”, “Where do I check the final ticket total?”, “What is the difference between an onsale and a presale?”, and “How do I choose a seat section?” Keep the answer in the first 40–70 words, then add detail.
3. **Publish first-party facts, not vague superlatives.** Venue pages should lead with capacity, city, sections, access, event configuration, and a source/last-reviewed note. City pages should lead with the event types and venues actually returned by the current feed.
4. **Repair entity consistency.** Use the same brand name, logo, social profiles, canonical URLs, and organization description in every page family. Add `sameAs` only for verified profiles.
5. **Keep schema aligned with visible text.** Continue BreadcrumbList and FAQPage where visible. Add `Event`/`SportsEvent` only when the page exposes a real event with valid date, location, and seller/offer data. Do not create offer/price schema from unavailable or stale price data.
6. **Add citations and provenance.** For capacities and venue facts, link to the venue’s official site in visible source notes or an editorial methodology page. For schedules, state the feed source and retrieval timestamp. This improves extraction confidence and user trust.
7. **Remove contradictions before expansion.** AI systems are especially likely to quote the existing blog and World Cup claims about alerts, price history, “cheapest,” and TicketScan-derived timing. Rewrite or unpublish those sections before asking AI agents to cite the site.

## Recommended quotable answer blocks

### Homepage / How it works

“TicketScan is an event-discovery and ticket-research tool. Search concerts, sports, theater, and other events; open the seller links available for an event; save events to revisit; and check onsale and presale dates. TicketScan does not sell tickets directly, so the linked seller remains the source of truth for inventory and checkout.”

### FAQ

“The safest comparison is between the same event date, section or row, ticket quantity, delivery method, buyer guarantee, and final checkout total. A lower advertised listing is not necessarily lower after fees or a different seat location.”

### Venue guide

“A TicketScan venue guide explains the building’s capacity, named seating areas, event-specific configuration, access, and nearby event pages. Seating can change between sports and concerts, so confirm the exact map on the seller’s event listing.”

## AI-search content brief for Content Agent

Title: **How to Compare Ticket Listings Before You Buy**

Answer target: “What is the cheapest way to buy tickets?”

Editorial angle: avoid promising one universal cheapest platform. Explain that the correct comparison is the same event/date/seat and the all-in checkout total, then cover official onsales, presales, reputable resale marketplaces, delivery, guarantees, and scam avoidance. Link to `/dashboard`, `/onsales`, `/faq`, relevant city pages, and venue guides. Do not cite TicketScan price history or claim TicketScan ranks a cheapest source.
