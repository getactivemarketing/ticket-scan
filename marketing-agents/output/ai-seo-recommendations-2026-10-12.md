# AI search optimization recommendations — 2026-10-12

## Current visibility snapshot

Firecrawl search checks on 2026-10-12 did not return TicketScan in the first
results for “where can I compare ticket prices,” “cheapest way to buy concert
tickets,” or “World Cup 2026 ticket tips.” Those results were led by specialist
comparators, marketplaces, publishers, FIFA, Ticketmaster, and SeatGeek.

Direct ChatGPT, Perplexity, Google AI Overview, and Search Console checks were
not available in this run. Treat brand-citation status in those systems as
unverified.

## Highest-leverage changes

### 1. Make the entity answer trustworthy

Add a short, stable answer near the top of `/how-it-works` and `/faq`:

> TicketScan helps you find concerts, sports, and theater events, check venue
> details, see onsale and presale dates, and follow links to available sellers.
> TicketScan is not the seller; the linked platform is the source of truth for
> inventory, fees, delivery, and the final checkout total.

Keep this wording aligned with the current product status. Do not describe price
history, alerts, buy/wait recommendations, or TicketScan-derived price data.

### 2. Use answer-first section structure

For each guide and programmatic page:

- H1 states the entity and intent.
- The first paragraph answers “what is this page and who is it for?” in 40–70
  words.
- Follow with factual sections: event schedule, venue/access, onsale timing,
  seller terms, and FAQs.
- Put caveats next to the claim, not only in a footer.
- Use short tables for dates, venue sections, and seller responsibilities.

This gives retrieval systems compact passages without manufacturing a product
differentiator that is currently unavailable.

### 3. Strengthen source and freshness signals

- Add “Updated” dates only when the underlying record changed.
- For venue capacity, seating, tournament dates, and seller rules, link to the
  official source or identify the verified data record internally.
- Add `author`, `datePublished`, and `dateModified` to editorial pages.
- Keep `Place`, `Event`, `ItemList`, and `BreadcrumbList` JSON-LD consistent
  with visible text; remove empty or speculative offers.

### 4. Build quotable FAQs

Expand FAQ coverage around currently true questions:

- What does TicketScan do?
- Does TicketScan sell tickets?
- Where do I confirm the final total?
- How current are event and seller links?
- How do I use a venue seating guide?
- What is an onsale versus a presale?
- What should I check on a resale listing?

Use one direct answer per question, followed by one qualification. Keep FAQ
answers identical in substance across the site to avoid conflicting entity
signals.

### 5. Improve entity graph connections

Every venue page should link to its city, resident team(s), onsale calendar, and
relevant event categories. Every city page should link back to its venue guides
and active teams. Every team page should link to its canonical venue and city.
Use names in anchors instead of generic “learn more.”

The existing pages already implement much of this; the next improvement is to
make `/compare` and `/how-it-works` intentional, accurate explanatory hubs.

## Content requests

1. Rewrite the homepage hero and “How It Works” copy around event discovery,
   venue guides, onsale/presale dates, and seller links.
2. Rewrite the World Cup hub as a post-tournament reference with venue facts,
   match results/schedule, official ticket-process references, and travel/access
   guidance. Remove future-tense alert and price-spread claims.
3. Refresh the top five evergreen blogs with direct-answer introductions and
   current seller/fee/scam guidance. Remove disabled feature claims before
   adding internal links.
4. Create an editorial “How to verify a ticket listing” guide and link it from
   city, venue, FAQ, and event pages.

## Validation checklist

- Search each target answer in quotes and verify the visible page says the same
  thing as the JSON-LD.
- Test the page as a no-JavaScript fetch; the answer paragraph must be in HTML.
- Validate schema after content changes.
- Re-run target searches monthly and log whether TicketScan appears in the top
  results or cited-answer sources.
