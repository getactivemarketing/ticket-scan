# Programmatic SEO expansion plan — 2026-10-26

## Guardrail

Do not launch pages whose value depends on TicketScan price history, price
trends, live cross-platform price comparison, price alerts, or buy/wait/hold
calls. Those capabilities are down per `marketing-agents/PRODUCT-STATUS.md`.

The live sitemap currently contains 746 URLs: 262 teams, 243 venues, 194
tickets paths, 23 blog posts, 17 World Cup paths, and 7 static/legal/help
pages. Expand only where verified event, venue, onsale, or official source data
can make the page materially different.

## Prioritized opportunities

| Priority | Page type | Demand potential | Difficulty | Feasibility now | Recommendation |
|---|---|---:|---:|---|---|
| 1 | City × venue hubs: `/tickets/[city]/[venue]` | High, local intent | Medium | High; venue/city maps and event feed exist | Pilot 10 cities × 2–3 high-demand venues. Index only when venue belongs to city and has verified upcoming events or durable guide facts. |
| 2 | Event-type hubs: `/tickets/nfl-playoffs`, `/tickets/music-festivals-2026` | High seasonal intent | Medium | Medium; category data exists, but seasonal taxonomy and inventory qualification need explicit rules | Build evergreen/seasonal hubs with official dates, participating teams/venues, onsale calendar links, and current event listings. No price claims. |
| 3 | Artist/team landing pages: `/artists/[slug]` or extend `/teams/[slug]` | High for headliners and franchises | High | Teams are already implemented; artist identity data and safe resolver are not | Start with teams/attractions already resolved. Add artists only from a curated, verified attraction index with a minimum event threshold. |
| 4 | Tournament/event hubs: `/events/[slug]` | High for World Cup, playoffs, finals | High | Medium; event IDs and event detail routes exist, but stable slug/data contract is needed | Build for a small curated set with verified date, venue, official onsale and seller links. Keep historical events clearly marked. |
| 5 | Venue × team pages: `/venues/[venue]/[team]` | Medium-high local/team intent | Medium | Medium; home-team mapping exists | Prefer a hub section or canonical link from existing venue/team pages before creating a new URL layer. |
| Hold | `/compare/[event-slug]` | High | High | Not safe now; price data/compare feature is down | Revisit only after each source works, prices are fresh, fee semantics are defined, and the product-status file is cleared. |
| Reject for now | `/best-time-to-buy/[category]` | High | High | Not safe now; would require trustworthy TicketScan price history | Replace with a general “onsale/presale planning” guide that makes no timing claim from TicketScan data. |

## Template specifications

### 1. City × venue hub

**URL:** `/tickets/[city]/[venue]`

**Index gate:** valid city/venue relationship, verified venue guide, and either
upcoming events or a strong evergreen seating/access guide. No empty listing
pages.

**Required modules:**

- H1: `[Venue] tickets and events in [City]`;
- 60–100 word verified intro with capacity, home teams/major use, and access;
- upcoming event list with date, time, event type, and seller link;
- seating sections derived from the venue record;
- onsale/presale panel only when feed data includes a date/time;
- links to the parent city, venue guide, team pages, and 2–4 related venues;
- FAQPage only for facts with a source in the data record;
- BreadcrumbList + Place + ItemList JSON-LD.

**Differentiation:** event inventory and venue-specific sections, not a city
name swap. Canonical to itself; noindex when the relationship is invalid or the
page has no meaningful content.

### 2. Seasonal/event-type hub

**URL:** `/tickets/nfl-playoffs`, `/tickets/music-festivals-2026`

**Index gate:** curated category definition, verified season/tournament dates,
at least five qualifying upcoming events or a durable official schedule, and a
named editor/data source.

**Required modules:** definition, dates, participating teams/venues, upcoming
event list, onsale calendar link, buyer checklist, related city/venue/team
links, and visible “last updated” date. Use Event/ItemList/Breadcrumb JSON-LD.

### 3. Curated artist page

**URL:** `/artists/[slug]`

**Index gate:** stable attraction ID, name agreement, at least three upcoming
events in the feed, and no ambiguous aliases. Omit rather than guess.

**Required modules:** artist name, verified event schedule, venues/cities,
onsale/presale dates, seller links, related city and venue guides, and an FAQ
about finding official onsale information. Do not publish price history or
“cheapest” language.

## Rollout order

1. Add data validation and forbidden-copy CI gates.
2. Pilot city×venue for 10 high-intent combinations.
3. Measure indexed pages, impressions, clicks, rendered event freshness, and
   conversion to seller links/newsletter signup for four weeks.
4. Expand only if each page has unique event/venue facts and no empty-feed
   pattern.
5. Defer broad artist generation until resolver and data-quality tests exist.

## Data requirements

- stable entity IDs and slug maps;
- verified city↔venue↔team relationships;
- API response freshness and outage/empty-feed monitoring;
- source field for capacities, seating sections, dates, and match results;
- route-level `revalidate` matched to the API budget;
- per-entity last-modified value rather than a blanket “today” stamp;
- noindex/drop behavior for unresolved or thin entities.

## Content Agent handoff

Produce briefs for the first ten city×venue pages only after the data gate is
green. Each brief should name the exact venue record, city, upcoming-event
query, official capacity source, seating sections, and internal-link targets.
