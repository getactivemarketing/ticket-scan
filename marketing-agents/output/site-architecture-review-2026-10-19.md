# Site architecture review — 2026-10-19

## Current architecture assessment

The current URL families are understandable and mostly aligned with search intent:

```text
/
├── /dashboard                 event discovery
├── /onsales                  onsale/presale calendar
├── /tickets                  city/category directory
│   ├── /tickets/{city}
│   ├── /tickets/{category}
│   └── /tickets/{city}/{category}
├── /venues                   venue directory
│   └── /venues/{verified-slug}
├── /teams                    team directory
│   └── /teams/{verified-slug}
├── /world-cup-2026           completed tournament hub/archive
│   └── /world-cup-2026/{stadium}
└── /blog                     editorial guides
```

The site is generally within two or three clicks of important pages through the navbar, home directory, and contextual breadcrumbs. Venue pages link back to cities; city pages link to venues and categories; team pages link to venues, cities, and leagues. That is a good basis for PageRank distribution.

## Recommended changes

### 1. Keep the current families; do not introduce `/artist` yet

Use `/artists/{slug}` only after stable attraction-ID resolution, name agreement, event qualification, and enough distinct page content exist. The current team resolver pattern is a useful model. Do not create artist pages from a free-text search result or guessed ID.

### 2. Strengthen hub pages

Add short introductory copy plus curated link blocks to:

- `/tickets` — city and category hubs, with a note explaining that combo pages are only published where the feed qualifies.
- `/venues` — venue families by city/league/type, with capacity and seating-guide intent.
- `/teams` — league hubs and the distinction between home/away schedule coverage.
- `/onsales` — how presale and public onsale dates work, with links to city and venue hubs.
- `/world-cup-2026` — completed-tournament archive, results, host stadiums, and access/seating references.

### 3. Formalize contextual cross-links

Every city page should link to its represented venue guides and qualifying city/category pages. Every venue page should link to its city, home teams, and two or three genuinely related venues. Every team page should link to its home venue, city, and league hub. Every World Cup stadium page should link to the canonical venue page when one exists and to the archive hub.

### 4. Avoid a city+venue route explosion

The proposed `/tickets/new-york/madison-square-garden` route currently returns 404, while `/venues/msg` is canonical. Keep venue facts under `/venues/{slug}` and use city pages as discovery hubs unless a combined page adds substantial unique content: neighborhood access, event-specific configuration, verified schedule, and a non-duplicative FAQ. If combined pages are added, generate only from the verified venue map and include them in sitemap/CI tests.

### 5. Add architecture-level quality gates

- Sitemap URL set equals the intended generated route set.
- Every sitemap URL returns 200 and has the expected canonical.
- Every generated page has one H1, a title, a description, and at least one contextual inlink.
- Every combo page meets the current-event threshold.
- Every venue/team ID resolves through the existing omit-rather-than-guess resolver.
- No public route renders retired price-alert/history/recommendation claims.

## Visual crawl model

```text
Home
 ├─ Search / Onsales ──> event pages ──> verified seller links
 ├─ Cities ────────────> categories ────> venues ──> teams
 ├─ Venues ────────────> city + team + related venue pages
 ├─ Teams ─────────────> home venue + city + league
 ├─ World Cup archive ─> stadium guides ─> venue/city context
 └─ Blog ──────────────> relevant city/venue/onsale/FAQ hubs
```

## Architecture decision

No new broad page family should ship until the content-status cleanup and sitemap reconciliation are complete. The current opportunity is better internal linking and better answer structure across existing pages, not more near-identical URLs.
