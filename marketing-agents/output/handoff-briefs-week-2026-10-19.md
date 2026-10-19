# SEO handoff briefs — week of 2026-10-19

## Content Agent

### Brief 1: Compare ticket listings safely

Create a practical guide answering: “How should I compare tickets before buying?” Cover same event/date, section/row, quantity, delivery method, buyer guarantee, seller reputation, and final checkout total. Mention official onsales and presales. Link to `/faq`, `/onsales`, `/dashboard`, city pages, and venue guides.

Do not claim TicketScan tracks prices, stores price history, sends price-drop alerts, produces buy/wait calls, or identifies the cheapest listing from TicketScan data.

### Brief 2: Presales and onsales explained

Explain artist/team/venue presales, public onsales, account preparation, queue expectations, and calendar reminders. Include a clear glossary and links to `/onsales` plus relevant venue/team pages. Use current dates only when verified by the event feed.

### Brief 3: Venue guide methodology

Explain how to use capacity, named seating tiers, access information, and event-specific seating maps. Link three real venue guides. Include a visible note that the seller’s event-specific map controls the final seat description.

### Brief 4: World Cup 2026 archive refresh

Convert the completed tournament pages into a factual archive: results, host stadiums, seating/access, and historical schedule. Remove expired “buy now,” price-alert, price-history, and current resale-price language unless independently sourced as clearly dated editorial history—and do not attribute it to TicketScan data.

## CRO Agent

1. Homepage: replace “Track it”/price-adjacent messaging with “Save it” and “Check onsale dates.”
2. Venue pages: use “See upcoming events” and “Check seller availability.”
3. Event pages: make date, venue, seller/source, delivery, buyer protection, and final-total disclaimer prominent.
4. City pages: add “Browse venue guides” and “See upcoming onsales” CTAs.
5. World Cup archive: use “Explore host stadiums” and “Browse match results,” not acquisition or alert CTAs.

## Engineering follow-up

- Add a forbidden-copy test based on `marketing-agents/PRODUCT-STATUS.md`.
- Reconcile `/tickets/miami/festivals` between internal links, combo qualification, and sitemap output.
- Run full sitemap status/canonical/internal-link checks in CI.
- Retry PageSpeed Insights after quota reset and record mobile/desktop results for representative templates.
