# Team pages — design

Written 2026-09-03. Sub-project 1 of two: the team surface. The editorial layer is a separate
project and a separate spec.

## Goal

A page per team, keyed on who is playing rather than where, so the site covers inventory the
city-keyed pages structurally cannot reach — and so it sells the way TicketNetwork sells.

## Why this rather than fixing the city filter

Measured 2026-09-03. `/api/public/events?city=X&category=nfl` returns **zero** for New York,
Dallas, Boston, Los Angeles, San Francisco, Washington DC and Newark. Not a data gap: NFL
stadiums sit in suburbs — East Rutherford, Arlington, Foxborough, Inglewood, Santa Clara,
Landover — and the city filter matches Ticketmaster's venue city exactly. The same effect holds
college football to one event each in Chicago and Detroit, because Northwestern and Michigan
play in Evanston and Ann Arbor.

Querying Ticketmaster by `attractionId` instead returns the whole schedule regardless of venue
city. The Dallas Cowboys attraction returns 15 games — AT&T Stadium in Arlington alongside
MetLife, Lambeau and Lincoln Financial. City aliasing would patch six markets by hand; this
removes the class of problem.

It also matches the merchant. TicketNetwork organises NFL **by team**, at
`/performers/<team>-tickets`. Our slug index already resolves **32/32** NFL teams, and 10/10,
8/8 and 8/8 of the NBA, NHL and MLB teams sampled. Every team page earns a working affiliate
link on day one.

## Scope

All major-league teams — NFL, NBA, NHL, MLB — plus college football. Roughly 250 pages.

## Non-goals

- **The editorial layer.** Per-team written copy is sub-project 2. These pages must stand up
  without it, and they do: schedule, venue, status, prices and links.
- **City aliasing.** Superseded by this design for teams. City pages still under-report the NFL;
  that is a separate, smaller decision.
- **Artist pages.** The same shape would serve music, but scope stops at teams.

## The scaled-content risk, stated plainly

250 near-identical pages is the shape Google's scaled-content-abuse policy targets, and these
pages exist to rank. Two rules follow, and they bind sub-project 2 as much as this one:

1. **Every page must carry facts specific to its team** — home venue and capacity, the actual
   schedule, onsale status, price range — not adjectives rearranged 250 times.
2. **Editorial is derived from data we already hold**, never free-written filler. A page with no
   editorial is acceptable; a page with generic editorial is worse than one without.

## Architecture

### 1. The roster seed — `web/src/data/teams.ts`

One entry per team: `slug`, `name`, `league`, and `homeVenueSlug` where a venue guide exists.

**Seeded once from Ticketmaster, then owned by hand.** Typing ~184 entries by hand is slow and
error-prone; deriving them on every run is what causes wrong-attraction failures. So the seed is
generated once by querying Ticketmaster's attractions by league classification, reviewed by a
human, and committed as source. From then on it is edited by hand and never regenerated — league
rosters are stable, finite and small (32 + 30 + 32 + 30), and the committed seed is what makes
resolution reproducible rather than dependent on whatever the attractions endpoint ranks highest
that day.

College football seeds every program with **3 or more upcoming events** at seed time, which
covers the majors and the active tail without hand-listing 130 programs.

### 2. The resolution index — `scripts/build-team-index.mjs` → `teams.generated.json`

For each seeded team, resolve and commit:

- the Ticketmaster `attractionId`, from the attractions API;
- the TicketNetwork performer slug, from the existing `ticketnetwork.generated.json`.

**Disambiguation is the whole job here.** A keyword lookup for "Dallas Cowboys" returns the NFL
team *and* a Pop/Electro Pop act of the same name; "Ohio State Buckeyes" exists separately from
"Ohio State Buckeyes Football". Candidates are therefore filtered by classification (the
league's genre and subgenre) and ranked by upcoming-event count, and a team that resolves no
qualifying candidate is **omitted rather than guessed**. A wrong attraction id silently ships a
page of somebody else's events.

Runs on the daily schedule beside the combo and TicketNetwork indexes, never at build time, and
leaves the previous index intact on any failure — the rule established by
`build-combo-index.mjs` and repeated for the same reason.

### 3. The backend parameter

`/api/public/events` accepts `venue, city, category, onsaleDate, country, sort, limit`. It gains
`attractionId`, validated and passed through to Ticketmaster. This is the one backend change.

### 4. The page — `web/src/app/teams/[slug]/page.tsx`

Construction follows the combo pages: light page ground, navy `OnsaleRow` cards, legacy-surface
`AffiliateDisclosure`. Per-row resale links use `OnsaleRow`'s existing `action` slot — no new row
primitive, and the shared-row-primitive question stays parked.

Content:

- Full schedule, home and away, each game carrying onsale/presale status through the DESIGN.md
  status triad and a price range where the feed provides one.
- Home-venue link into the existing venue guide where one exists, and the home-city link.
- Category link to `nfl` or `college-football`.
- One team-level affiliate link (`sid=team-<slug>`) plus per-row links.
- JSON-LD `SportsTeam` and an `ItemList` of upcoming games.

**Offseason.** A team with **zero** upcoming games renders rather than 404s: the URL should stay
indexed, the team-level resale link still works and still earns, and venue and capacity content
is evergreen. In that state the page shows the venue panel, the team-level resale link and a
plain statement that the schedule is not out yet. It must never render as an empty shell, and
the schedule section is omitted entirely rather than rendered empty.

**Failure.** `getEvents` rethrows rather than swallowing, so an outage fails the build loudly
instead of caching a wrong "no games" page for the ISR window.

### 5. Build strategy

`generateStaticParams` returns **football only** — roughly 90 pages. Other leagues render on
demand through ISR on a 6-hour window, matching the combo pages. Every team **present in the
generated index** appears in the sitemap, prerendered or not; ISR renders the rest on first
crawl. Teams that failed to resolve are absent from the index and therefore absent from the
sitemap, so we never advertise a URL that would 404.

The reason is recorded rather than assumed: a cold build already prerenders 304 pages in 4.6
minutes against a feed with a 5 req/s spike arrest, mitigated by a 220ms pacer and
`cpus: 1`. Prerendering 250 more would roughly double that against a limit that has already
broken one deploy.

## Testing

- Unit tests for resolution: classification filtering rejects the Pop/Electro Pop "Dallas
  Cowboys"; "Ohio State Buckeyes Football" is preferred over "Ohio State Buckeyes"; a team with
  no qualifying candidate resolves to null rather than to a wrong id.
- A test that the seed's every league maps to a TicketNetwork slug, mirroring the existing
  category test.
- The existing checker rule — every page rendering `TicketNetworkLink` also renders
  `AffiliateDisclosure` — covers the new route with no change.
- A build confirming football prerenders and the other leagues are dynamic.

## Risks

- **Wrong attraction ids are the worst failure**, because they are invisible: the page renders,
  it just shows another entity's events. Mitigated by classification filtering, by omitting
  unresolved teams, and by a smoke check sampling resolved ids against their expected league.
- **Roster drift.** Franchises relocate and rename. The seed is hand-maintained; a stale entry
  produces a page for a team that no longer exists under that name.
- **College football's tail is messy.** Program naming varies ("Texas A&M Aggies" did not
  resolve in the affiliate index, most likely ampersand normalisation) and the qualifying
  threshold shifts between seasons.
- **Build time** grows with any later decision to prerender more leagues.
