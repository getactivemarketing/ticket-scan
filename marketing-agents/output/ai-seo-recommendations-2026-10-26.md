# AI search optimization recommendations — 2026-10-26

## Baseline

Search checks for `site:ticketscan.io` surfaced the homepage and venue pages,
but did not establish visibility for the target questions “Where can I compare
ticket prices?”, “What is the cheapest way to buy concert tickets?”, or “World
Cup 2026 ticket tips.” This is a baseline observation, not a claim about all
AI systems. No reliable automated test here can prove ChatGPT/Perplexity/Google
AI Overview inclusion.

The current strongest, supportable entity is: TicketScan searches events,
publishes venue guides, and shows onsale/presale dates. Do not optimize toward
unsupported price-history or alert claims while those features are down.

## Highest-value changes

### 1. Put a quotable answer paragraph near the top of each page

Use a 40–70 word answer immediately after the H1. Example pattern:

> TicketScan helps fans find upcoming concerts, sports, theater, and other
> events, review venue details, and check official onsale or presale timing.
> It links to third-party sellers; it is not the ticket seller.

Customize the entity facts below it. Avoid superlatives such as “cheapest,”
“best price,” or “all platforms” unless the live product and source coverage
actually support them.

### 2. Convert venue facts into extractable Q&A

Every venue page should answer, with short direct paragraphs:

- What events are coming up at `[venue]`?
- What is `[venue]` capacity?
- Which seating levels/sections exist?
- How do I get there?
- When do listed events go on sale or enter presale?

Use FAQPage only when the same answers are visibly rendered and factually
maintained. Keep dates and “historical/current” labels explicit.

### 3. Create entity relationships in both prose and JSON-LD

Link venue → city, city → venue, team → venue, World Cup hub → stadium, and
blog guide → the relevant operational page. Use stable IDs in JSON-LD and make
the visible names match the structured-data names. Breadcrumbs should mirror
the URL hierarchy.

### 4. Add source and freshness cues

For capacity, seating, tournament schedule, and onsale facts, store a source
or source class in data and render “Last checked” where appropriate. For event
feeds, render “Upcoming events” based on the feed and avoid implying inventory
or price freshness beyond what the page actually fetched.

### 5. Repair answer consistency

The live homepage says “price trends,” the how-it-works page says “compare
prices,” and World Cup/venue data contains alert or resale-price language.
Conflicting answers are particularly damaging to AI extraction. Run a single
status-aware copy linter across visible text, metadata, JSON-LD, and blog data.

## Query-to-page map

| User question | Best TicketScan page type | Answer shape |
|---|---|---|
| Where can I find upcoming events in [city]? | `/tickets/[city]` | City summary, upcoming list, venue links, onsale link. |
| What is the seating layout at [venue]? | `/venues/[venue]` | Capacity, named tiers/sections, sightline/access caveats. |
| When do [event] tickets go on sale? | `/onsales` + event/venue page | Date/time/time-zone, presale vs public sale, official seller link. |
| How do I compare ticket options safely? | `/how-it-works` or buyer guide | Compare all-in checkout totals, seller policies, and listing details; no TicketScan price statistic. |
| Where are the 2026 World Cup host stadiums? | `/world-cup-2026` + stadium pages | Host city, stadium facts, match schedule/history, official-ticketing guidance. |

## AI-readable content checklist

- one H1 with entity and intent;
- answer paragraph before decorative UI;
- fact table for capacity, city, home teams, and seating tiers;
- short definitions for onsale, presale, resale, and seller;
- visible dates in ISO-compatible structured data and human-readable format;
- no hidden content that contradicts visible copy;
- no unsupported product claims in CTA, metadata, alt text, or JSON-LD;
- source/freshness note for volatile facts;
- related links with descriptive anchors, not “click here.”

## Measurement

Track weekly, per page type: impressions/clicks for question-shaped queries,
brand/non-brand split, rich-result appearance, AI referral traffic where
available, answer-box/AI Overview observations captured manually, crawl errors,
and content-status lint failures. Store screenshots/query logs as evidence;
never report “AI cited us” from a single personalized result.

## Immediate AI SEO backlog

1. Rewrite the homepage/how-it-works/World Cup answer paragraphs to current,
   supportable functionality.
2. Add venue fact tables and concise FAQs to the top 20 venue pages.
3. Add an onsale/presale glossary page and link it from event, city, venue,
   and World Cup pages.
4. Add visible data freshness/source labels to volatile schedule modules.
5. Validate Organization, WebSite, Place, SportsTeam, Event, ItemList,
   BreadcrumbList, and FAQPage nodes with Google’s Rich Results Test.
