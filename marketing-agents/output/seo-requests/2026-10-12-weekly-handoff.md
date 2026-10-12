# SEO weekly handoff — 2026-10-12

Recipients: Content Agent (Agent 1), CRO Agent (Agent 6), engineering/lead
architect.

## Content Agent briefs

### Brief 1 — truthful homepage and evergreen copy refresh

Rewrite homepage, `/how-it-works`, `/faq`, and the highest-traffic evergreen
guides around:

- event discovery across available sources;
- venue seating/access facts;
- onsale and presale dates;
- seller links and the seller as the source of truth for inventory, fees,
  delivery, and final checkout total;
- general safety and fee-comparison advice.

Remove all TicketScan claims about price history, price tracking, alerts, target
prices, buy/wait/hold calls, and TicketScan-derived pricing statistics. Do not
add substitute statistics.

Suggested answer paragraph:

> TicketScan helps you find events, understand the venue, check onsale and
> presale dates, and follow links to available ticket sellers. We do not sell
> tickets; confirm inventory, fees, delivery, and the final total on the linked
> seller page.

### Brief 2 — post-tournament World Cup refresh

Update `/world-cup-2026` and stadium pages as reference content. Keep verified
venue capacity, seating/access, match schedule/results, and official FIFA
process links. Remove future-tense copy that asks readers to set a TicketScan
price alert or promises a cross-platform price spread. Add a visible updated
date and an “official source” block.

### Brief 3 — listing-verification guide

Draft a practical guide targeting “how to verify a resale ticket listing” and
“what to check before buying concert tickets.” Cover seller identity, event/date,
section/row/view, delivery method, buyer guarantee, fees, refund terms, and the
final checkout total. Link to `/faq`, `/venues`, `/onsales`, and relevant city
pages. Do not frame it as a TicketScan price-data feature.

## CRO Agent requests

### Request 1 — replace disabled-feature CTAs

Audit homepage, registration, watchlist, compare, venue, city, and World Cup
CTAs. Replace “track prices,” “set a price alert,” “we’ll alert you,” and similar
copy with “save an event,” “check onsale dates,” “browse venue details,” or
“review seller availability,” depending on the actual action.

### Request 2 — clarify seller handoff

On event/venue/city pages, add a compact disclosure near seller links:

> TicketScan is not the ticket seller. Availability, fees, delivery, and the
> final checkout total are set by the linked platform.

This should reduce expectation mismatch while preserving the affiliate click.

### Request 3 — `/compare` policy

Decide whether `/compare` is a current indexable landing page or an app-only
route. If indexable, add it to the sitemap and rewrite the visible promise to
match live integrations. If not, add `noindex,follow` and keep internal links
focused on the routes that currently deliver value.

## Engineering follow-up

- Investigate the four live-map 404 combos listed in the weekly SEO audit.
- Add a forbidden-public-claims test for `web/src` using the product-status
  vocabulary.
- Add `/compare` to sitemap tests or document its intentional exclusion.
- Add a production route smoke test for each URL family and venue alias policy.
