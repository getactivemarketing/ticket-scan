# TicketNetwork affiliate links via CJ — design

Written 2026-09-02, the day the TicketNetwork program approval landed. The program runs on
Commission Junction: 30-day cookie, deep links, banners, widgets and a data feed. This spec
covers deep links only.

## Goal

Put a working, attributed purchase path on the SEO surface — venue guides, city pages and the
160 city x category combo pages — so the traffic those pages already earn can convert.

## Non-goals

- The CJ **data feed**. It is the path to TicketNetwork as a fourth priced source alongside
  Ticketmaster, SeatGeek and StubHub, and to event-level deep links. It needs feed access, a
  sync job and storage, and none of that is required to start earning. Deliberately later.
- **Banners and widgets.** Third-party JavaScript on pages built to rank is a cost with no
  offsetting benefit here.
- **Restyling the pages.** City pages and venue guides are still Design 1.0. New links match
  their current surroundings and get migrated by the Design 2.0 content pass. Half-migrating
  a page inside an affiliate task produces a seam nobody asked for.
- **Compare and event detail.** Out of scope for this pass.

## What the research established

Four facts shaped every decision below. Each was verified on 2026-09-02, not assumed.

**1. The SEO pages have no outbound buy link at all today.** Venue-guide and city-page event
rows CTA to `/register` ("Track Price"); combo-page rows link internally to `/event/[id]`; the
event detail page offers a watchlist and a buy recommendation and no way to buy. So this work
adds the first purchase path these pages have had. Nothing is demoted, and the comparison
premise is not compromised — which is why the links can be additive rather than replacing
anything.

**2. TicketNetwork has no city pages.** Their published URL space, read from
`ticketnetwork.com/sitemap.xml`:

| Surface | Pattern | Count |
|---|---|---|
| Performers | `/performers/<slug>-tickets` | 27,104 |
| Venues | `/venues/<slug>-tickets` | 10,407 |
| Categories | `/category/<slug>-tickets` | 325 |
| Events | `/tickets/<id>/...` | 4 sitemap files |

City filtering on their site is JavaScript-driven and there is no query-string search. Las
Vegas is the single exception (`/category/las-vegas-tickets`). **A city x category combo page
therefore has no TicketNetwork equivalent to point at.** The link has to attach to the
performer or venue on each row, not to the page's topic. Placement is settled by the URL
space, not by preference.

**3. A CJ deep link is** `https://{click-domain}/click-{PID}-{AID}?url={encoded}&sid={subid}`,
where the click domain is one of `anrdoezrs.net`, `tkqlhce.com`, `jdoqocy.com`, `dpbolvw.net`,
`kqzyfj.com`. `sid` is publisher-defined, alphanumeric, case-sensitive, truncated at 64
characters, and must carry no PII. Deep linking works only through a creative that permits it,
so one TicketNetwork link ID must be confirmed to allow it before the numbers go in.

**4. `OnsaleRow` is a whole-row anchor.** Its shell is a `<Link>` to `/event/{id}`. An anchor
cannot contain an anchor, so a second link cannot simply be added inside it.

## Architecture

Three pieces, each independently testable.

### 1. The slug index — `scripts/build-tn-index.mjs`

Fetches the TicketNetwork performers, venues and category sitemaps, normalizes each name into a
lookup key, and writes `web/src/data/ticketnetwork.generated.json` — roughly 2MB across ~37,800
entries, storing the key and the slug only, not the full URL or the `-tickets` suffix.

The file is **committed** and refreshed by the existing daily agent run. It is never fetched
during a Next build. The combo-page follow-ups record that a cold build already fires 160 API
calls at a feed with a 5 req/s spike arrest, and that this caused a real deploy failure; adding
a second third-party dependency to the build path repeats a known mistake.

Normalization: lowercase, strip diacritics, strip punctuation, drop a leading "the", collapse
whitespace. Applied identically when building the index and when resolving, so the two cannot
drift — one exported function, used by both.

### 2. The resolver — `web/src/lib/ticketnetwork.ts`

```
resolveTicketNetwork({ performer?, venue?, category? })
  -> { kind: 'performers' | 'venues' | 'category', slug: string } | null
```

The `kind` and `slug` are what the link component puts in the `/go/tn/` href; the resolver
deals in slugs and never in URLs.

Tries performer, then venue, then category, and returns `null` when none matches. **It never
constructs a slug it has not seen in the index.** A link either points at a page TicketNetwork
published or does not render — a fabricated slug is a 404, and a 404 earns nothing while
looking broken to the reader.

The module is `server-only` and reads the JSON through `fs`, so 2MB of index cannot reach a
client bundle. All consuming pages are server components.

### 3. The redirect — `web/src/app/go/tn/[kind]/[slug]/route.ts`

The href on the page is `/go/tn/{kind}/{slug}?sid={sid}`, where `kind` is one of `performers`,
`venues` or `category`. **The route never accepts a destination URL.** It reconstructs the
TicketNetwork URL server-side as `https://www.ticketnetwork.com/{kind}/{slug}-tickets`, wraps
it in the CJ click URL built from `CJ_PID`, `CJ_TN_AID` and `CJ_CLICK_DOMAIN`, and issues a 302
with `Cache-Control: no-store`.

Passing a `kind` and a `slug` rather than a URL makes an open redirect impossible by
construction rather than by validation — the handler has no code path that can emit a host it
was given. `kind` is checked against the three literals and `slug` against `[a-z0-9-]{1,120}`;
anything else is a 404.

Why a first-party redirect rather than CJ URLs in the markup:

- Credentials live in Vercel env vars, not baked into 160 prerendered pages. A program change
  is one env var, not a rebuild of the whole SEO surface.
- `sid` carries the originating page, so CJ's own reports answer which pages earn.
- Ad blockers routinely block the CJ click domains outright. A first-party href survives to at
  least reach our own server.
- One file to change if the program terms move.

`sid` convention: `{surface}-{slug}`, e.g. `combo-atlanta-comedy`, `city-chicago`,
`venue-madison-square-garden`. Sanitized to `[A-Za-z0-9_-]`, truncated to 64 characters. It
carries a page identity and never a user identity.

### Configuration

`CJ_PID`, `CJ_TN_AID`, `CJ_CLICK_DOMAIN` (defaulting to `anrdoezrs.net`), set on the **`web`**
Vercel project — the one that owns `ticketscan.io`, not the git-linked `tickethawk` project.

**Absent credentials, nothing renders.** `resolveTicketNetwork` returns null everywhere and the
route 404s. The feature can therefore merge and deploy before the CJ numbers are in hand, with
no dead affiliate UI on the live site.

## Placement

| Surface | Match | Placement |
|---|---|---|
| `venues/[slug]` | Venue name, exact | Hero link plus a per-row link |
| `tickets/[slug]` (city) | Performer per event | Per-row link where the performer resolves |
| `tickets/[slug]/[category]` (combo) | Performer per event | Per-row link via `OnsaleRow`'s action slot |
| `venues`, `tickets` (indexes) | Category | One category-level link |

Venue guides carry the highest-quality links on the site, because a venue name matches
TicketNetwork's venue slugs exactly where a performer name often will not.

Link label: **"Resale tickets"**, never "Buy tickets". TicketNetwork is a resale marketplace,
and a site whose premise is telling people where to buy must not blur that distinction.

### The `OnsaleRow` change

`OnsaleRow` gains an optional action slot. Its wrapper becomes a `<div>`, the internal
navigation to `/event/{id}` becomes a stretched-link overlay (`after:absolute after:inset-0`),
and the action renders as a sibling at `z-10`. The whole row stays clickable, the markup stays
valid, and because the slot is optional and defaults to nothing, `/onsales` renders identically
to today.

This is a narrow version of the shared-row-primitive question that
`2026-08-28-design-2-0-followups.md` parks. It is deliberately **not** resolved here — unifying
`OnsaleRow`, `EventCard` and the watchlist row requires agreeing one data shape first, and that
is not this task.

## Disclosure

The TicketNetwork agreement requires FTC compliance. The FTC standard is clear and conspicuous
— near the links, not buried in a footer.

`AffiliateDisclosure` renders one line directly above any event list carrying TicketNetwork
links: *"Resale links are affiliate links — we may earn a commission if you buy, at no extra
cost to you."* The fuller statement is added to `/terms`.

Links carry `rel="sponsored nofollow noopener"` and `target="_blank"`. `sponsored` is what
Google asks for on paid links and its absence on 1,600 outbound links is a real ranking risk on
pages whose entire value is that they rank.

## Mechanical enforcement

`web/scripts/check-design.mjs` already expresses design rules as greppable assertions. Three
rules join it:

1. No CJ click domain appears literally anywhere in `src` — every affiliate link routes through
   `/go/tn/`.
2. Every TicketNetwork link carries `rel` containing `sponsored`.
3. Any page importing the link component also renders `AffiliateDisclosure`.

## Testing

- Unit tests for `normalize` and `resolveTicketNetwork` against fixtures taken from the real
  sitemaps, **including the misses** — "The Weeknd" against "Weeknd", venues carrying
  punctuation, performers whose names collide.
- A test asserting the route handler 404s on an unknown `kind` and on a `slug` outside
  `[a-z0-9-]`, and that no input can make it redirect off ticketnetwork.com.
- A test asserting that with no `CJ_PID` set, no link renders and the route 404s.
- A non-blocking smoke script sampling ~50 generated deep links and reporting any that do not
  return 200. A silently 404ing destination earns nothing, and without this we would never
  learn it.

## Rollout

1. Merge dark. No env vars, no links, no visible change.
2. Confirm with CJ that a TicketNetwork link ID permits deep linking; record the PID and AID.
3. Set the env vars on the `web` Vercel project.
4. Deploy `web` explicitly, or wait for the daily agent run — a git push does not update the
   live site (see `ticketscan-deploy-split`).
5. Links appear as ISR revalidates. Combo pages sit on a 6-hour window, so allow up to a day
   for full coverage.
6. Verify a real click registers in CJ before trusting any of it.

## Risks

- **Match rate is unknown until measured.** Performer names from Ticketmaster and SeatGeek may
  not normalize onto TicketNetwork's slugs at a useful rate. The smoke script and a resolution
  count per page are how we find out. If the rate is poor, the data feed moves up the list.
- **The index goes stale.** A performer page retired by TicketNetwork becomes a 404 that still
  renders. Mitigated by the daily refresh and the smoke script, not eliminated.
- **Deep linking may not be permitted** on the available creatives, in which case links fall
  back to the category level and the per-row placement loses most of its value. Confirm at
  step 2, before building on the assumption.
