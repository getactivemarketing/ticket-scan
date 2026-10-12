# Site architecture review — 2026-10-12

## Verdict

The URL hierarchy is understandable and the core hubs are reachable in one or
two clicks from the global navigation: `/tickets`, `/venues`, `/teams`,
`/onsales`, and `/blog`. City/category combos correctly sit under `/tickets` and
link back to both city and category parents.

The architecture is ready for consolidation and cleanup, not an immediate
namespace expansion. The deployed sitemap already has 744 URLs, so the next
gain is clearer hub ownership, better crawl signals, and truthful content.

## Current sitemap

```text
/
├── /dashboard                 app search; keep out of SEO sitemap if thin/client-only
├── /tickets                   ticket hub
│   ├── /tickets/{city}        city hubs
│   ├── /tickets/{category}    category hubs
│   └── /tickets/{city}/{cat} qualified city/category pages
├── /venues                    venue hub
│   └── /venues/{slug}         venue guides
├── /teams                     team hub
│   └── /teams/{slug}          team schedules
├── /world-cup-2026            tournament hub
│   └── /world-cup-2026/{stadium}
├── /blog                      editorial hub
│   └── /blog/{slug}
├── /onsales                   onsale calendar
├── /compare                   product route; currently absent from sitemap
└── /faq, /how-it-works, /contact, /privacy, /terms
```

## Findings

### Strengths

- Parent/child URL structure is logical and readable.
- City pages link to active categories, related venues, and buying guides.
- Venue pages link back to city pages and related venues.
- Team pages link to home venue, city, and league/category pages.
- Robots disallows private/account and redirect routes while exposing the
  sitemap.
- Dynamic resolvers omit unknown slugs rather than guessing.

### Gaps

1. `/compare` is an important explanatory/product route but is only visible in
   the footer and is omitted from the sitemap. Choose deliberately: include it
   as an accurate indexable landing page, or mark it noindex if it is primarily
   an app flow.
2. `/how-it-works` and `/faq` are useful entity/explanation hubs but are not
   prominent in the primary navigation. A footer link is adequate for users,
   but a visible “How it works” link from the homepage and `/compare` would
   improve discovery.
3. The live map found four 404 city/category URLs that are not in the sitemap.
   This suggests stale cached links, an old build, or a source outside the
   current route data. Make the combo index the sole authority and audit emitted
   links after refreshes.
4. There is no explicit artist/performer hub, although the platform has a large
   generated TicketNetwork performer index. Do not expose that raw index without
   a quality threshold and stable event identity.
5. Venue-name aliases are not consistently handled: `/venues/msg` works while
   `/venues/madison-square-garden` returns 404. Decide whether canonical aliases
   are worth maintaining for high-volume entities.

## Recommended internal-link model

```text
Home
 ├─ Tickets hub ── City hub ── City/category combo
 │       └──────── Category hub
 ├─ Venues hub ── Venue guide ── City hub + resident team(s)
 ├─ Teams hub ── Team page ── Venue guide + City hub + league hub
 ├─ Onsale calendar ── Event detail ── Seller link
 ├─ Blog hub ── Guide ── relevant city/venue/team/onsale page
 └─ How it works / FAQ ── every major SEO cluster
```

Add a visible breadcrumb on every detail page and a contextual “related pages”
block that is generated from verified relationships only. Avoid sitewide exact-
match anchor repetition.

## Navigation recommendations

1. Keep `/tickets`, `/venues`, `/teams`, `/onsales`, and `/blog` in the main nav.
2. Add `/how-it-works` to the homepage hero or utility navigation.
3. Decide the `/compare` indexability policy, then make its nav placement match:
   prominent if it is a current user-facing research tool; noindex/footer-only
   if it is not an SEO surface.
4. Keep private pages out of the SEO graph; the current robots policy is broadly
   correct.

## Architecture guardrails for expansion

- One authoritative source for each dynamic URL family.
- Sitemap entries must pass the same resolver as the route.
- A page must have unique facts and a verified relationship to its parent hub.
- Do not create pages for every raw performer, venue, or city/category pair.
- Treat stale 404s as a release blocker for that family.
- Do not use price comparison, price history, alerts, or buy/wait language as
  cluster glue while those product capabilities are down.
