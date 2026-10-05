# TicketScan site architecture review — 2026-10-05

## Current architecture

```text
/
├── /dashboard                 client-side event search
├── /onsales                   public onsale/presale calendar
├── /venues                    venue hub → 242 venue URLs including hub
├── /teams                     team hub → 261 team URLs
├── /tickets                   category/city hub → 196 URLs including hub
├── /world-cup-2026            tournament/venue historical cluster
├── /blog                      editorial hub → 21 post URLs
├── /faq /how-it-works         explanatory/support pages
├── /compare                   authenticated comparison tool
├── /watchlist /favorites      authenticated account areas
└── /event/[id]                dynamic detail route, blocked from crawling
```

The URL hierarchy is understandable and the main public hubs are linked from
sitewide navigation. The deployed sitemap contains 749 unique URLs, so the
architecture now behaves like a large programmatic site rather than the 78-page
site described in the task brief.

## Findings

### 1. Add a first-class “Onsale & Presales” hub to the hierarchy

`/onsales` exists and is in the sitemap, but it should be treated as the primary
transactional hub for the current product state. Link to it from every city,
category, team, venue, and relevant blog page. Give it child views only when
there is enough confirmed data; do not create empty date pages.

Recommended path model:

```text
/onsales
├── /onsales/[city]       optional, only with current confirmed events
├── /onsales/[category]   optional, only with current confirmed events
└── /onsales/[date]       optional, only for a useful event set
```

### 2. Keep one canonical model for city/category combinations

The current `/tickets/[city]/[category]` route is useful, but it is a generated
subset rather than a complete matrix. That is fine if the index clearly links
only qualifying combinations and omitted combinations return a useful 404.
Document the qualification rule in the build inventory and ensure old links are
redirected or gracefully handled.

Do not add a second city + venue convention until canonical ownership is chosen.
Possible future model: `/venues/[venue]/events/[city]` or
`/tickets/[city]/venues/[venue]`; select one, not both.

### 3. Make venue ↔ city ↔ team links systematic

Venue detail pages already link to a city page and related venue pages. Extend
the same graph consistently:

```text
city hub ↔ category hub
   ↕           ↕
venue guide ↔ team/artist page
   ↕           ↕
event/onsale detail → seller link
```

Every detail page should expose at least one parent hub, two related siblings,
and one current onsale/event path. This distributes internal authority and gives
users a next action even when a feed returns no events.

### 4. Separate public discovery from authenticated tools

The compare route redirects unauthenticated users to login and the event route is
blocked in `robots.txt`. That is acceptable for private functionality, but the
public SEO layer should not promise a crawlable comparison experience if the
tool requires authentication or cannot return reliable data.

Use public, indexable pages for facts and discovery. Use authenticated routes for
watchlist/account actions. If comparison becomes reliable again, create a
server-renderable public event summary and link users into the authenticated
workflow after the value is clear.

### 5. Add a historical status boundary for World Cup pages

The 2026 tournament cluster should remain discoverable as a historical venue and
schedule resource, but it should not compete with live ticket-discovery pages.
Add “historical schedule”/“tournament completed” framing, remove current-price
CTAs, and link users to current events, venue guides, or onsale pages.

## Navigation depth

The main hubs are reachable within one click from the global navigation. Venue,
city, category, team, and World Cup details are generally two clicks away from
the homepage through their hubs. The main gap is the onsale calendar: promote it
as a primary navigation destination and add contextual links from all detail
templates.

## Visual sitemap

```text
Home
├── Search / Dashboard
│   └── authenticated event actions
├── Onsales & Presales
│   ├── city/category views
│   └── event → seller
├── Ticket Guides
│   ├── Cities
│   │   └── city × qualifying category
│   └── Categories
├── Venue Guides
│   ├── arenas/stadiums
│   └── related city/team/event links
├── Teams
│   └── team schedules and home venue
├── World Cup 2026
│   └── historical host-stadium guides
├── Blog / Buying Guides
└── Help
    ├── FAQ
    ├── How it works
    ├── Contact
    └── Legal
```

## Priority backlog

1. Reposition `/onsales` as the main public conversion/search hub.
2. Add a generated URL inventory and orphan/internal-link report.
3. Add shared parent/sibling links to every detail template.
4. Establish a canonical policy before any venue-city expansion.
5. Align World Cup pages with completed-tournament status.
6. Keep private/unstable comparison and event routes out of the index until
   server-rendered, reliable public content exists.

