# Stadium venues — follow-ups

Written 2026-09-04 at Task 7 (the plan's final task). Everything here was found during
execution, judged non-blocking, and deliberately not fixed unless noted. The plan and spec live
alongside this file at `docs/superpowers/plans/2026-09-04-stadium-venues.md` and
`.superpowers/sdd/2026-09-04-stadium-venues/`.

## Resolution counts

- **159 stadiums added** (30 NFL, 129 college), joining the 25 pre-existing arenas for **184
  venues total**, every one carrying a resolved Ticketmaster id in `data/venue-ids.json`
  (`counts: { resolved: 184, unresolved: 0 }`; the file's `ids` map has exactly 184 keys and
  every one has a matching entry in `venues`, and vice versa — enforced by a dedicated test).
- **`homeVenueSlug` coverage: 201/261 teams.** By league: nfl 32/32, college-football 134/137,
  nba 21/30, nhl 13/32, mlb 1/30. The NBA/NHL/MLB gaps are **missing venue guides in
  `venues.ts`**, not a wiring failure — those leagues' teams have nowhere to point `homeVenueSlug`
  at yet, since this plan only ever targeted football. It is the obvious next expansion if arena
  coverage is worth extending league by league.

## Three FBS programs deliberately have no stadium entry

- **Boise State** — Albertsons Stadium is mid-renovation; the official athletics page is
  internally inconsistent about post-renovation capacity (32,423 in one place on the same page,
  32,343 in another), and no reliable post-renovation figure has been published. Omitted rather
  than approximated.
- **Memphis** — sources ranged from a stale ~50,000 figure to a gameday report putting capacity
  under 34,000, with no way to reconcile them to a single trustworthy number. Omitted.
- **Buffalo** — not a sourcing problem: Ticketmaster's own events feed contains **no Buffalo home
  game at all** (all 8 events returned for the team are true road games, confirmed by direct
  query, not a paging artifact). A stadium page would have had nothing to list. Removed.

## A dated fact that expires: Northwestern

Northwestern's entry describes the temporary 12,023-seat **Northwestern Medicine Field at Martin
Stadium**, because the new $862M Ryan Field does not open until **2026-10-02**. That is correct
today (2026-09-04) and wrong in four weeks. Whoever revisits this data after that date should
replace the entry with Ryan Field rather than assume the temporary venue is still current.

## Sourcing lessons (they will recur)

**Ten of thirty NFL capacities were wrong**, all traced to the same root cause: trusting
Wikipedia's aggregate "List of current NFL stadiums" table over each stadium's own dedicated
page or official site. Three distinct traps produced those errors, and each will happen again on
any future venue data pass if the same shortcut is taken:

1. **A stale infobox contradicted by its own article's prose.** Rynearson Stadium's dedicated
   Wikipedia infobox said 26,188; the same article's prose said 30,200. The prose was current;
   the infobox was stale.
2. **A figure taken from a program's infobox rather than the venue's.** Kelly/Shorts Stadium's
   35,127 came from the football program's own infobox rather than the venue's — the two can
   diverge, and only the venue's own figure is the stadium's actual capacity.
3. **An attendance record mistaken for a capacity.** Kelly/Shorts's 35,127 turned out to be a
   2012 attendance record, not a capacity at all — a real number from a real source that simply
   answers a different question than the one being asked.

The sourcing hierarchy that held up under a full re-verification sweep: **the venue's own
official site, then its dedicated article, and never an aggregate table.** But apply it as a
hierarchy, not mechanically — Lucas Oil Stadium's official site (67,000 for football) correctly
overrode its own Wikipedia infobox (63,000, the house-reduced base configuration). The rule is
"prefer the most specific, most authoritative source," not "always take the last item on the
list."

## A contested figure, left as-is

**Brooks Stadium** is recorded at 20,000 seats, sourced from Coastal Carolina's own game notes
(2021, 2024, 2025 editions all agree), while Wikipedia and most aggregators say 21,000. This is a
genuine, unresolved source conflict, not a typo — stated plainly here so nobody "corrects" it
back to 21,000 without knowing there is a real dispute and that 20,000 was the deliberate,
source-hierarchy-consistent choice.

## Ticketmaster indexes some venues under former names

Three venues resolve to their correct Ticketmaster id only through a fallback, not through name
search, because Ticketmaster's own listing still uses the old name:

- **Renasant Stadium** is indexed as "M M Roberts Stadium"
- **FMOL Health | St. Francis Stadium** is indexed as "Malone Stadium"
- **Space City Financial Stadium** is indexed as "TDECU Stadium"

Our names are current and correct for 2026 — Ticketmaster's search index is simply stale. Since
searching by name can never reach these buildings, the resolver instead fetches the home team's
already-verified Ticketmaster `attractionId`, reads its upcoming events, and picks whichever
venue id appears most often among events whose city/state match ours (`pickVenueFromEvents` in
`web/src/lib/venue-resolve.mjs`). This sidesteps venue-name search entirely for exactly the cases
where venue-name search is broken, and it is why this plan's resolver reads two independent
Ticketmaster surfaces (venue search and team schedules) instead of one.

## The smoke check's known limitation, and what was done about it

`web/scripts/smoke-venues.mjs` originally compared an event's Ticketmaster city to the venue's
stored city with plain string equality, which produced false `WRONG CITY` reports for campus
buildings whose Ticketmaster city label differs harmlessly from ours — sometimes even
inconsistently *within the same venue id*. Confirmed directly against Ticketmaster's live feed:
Notre Dame Stadium's own football event records say "Notre Dame IN" while an AC/DC concert at
the identical venue id says "South Bend IN."

Fixed by having the smoke check import and reuse `citiesMatch` from `web/src/lib/venue-resolve.mjs`
— the same evidenced `CITY_ALIASES` logic the id resolver already trusts — instead of
re-litigating city equality with a separate, cruder rule. `citiesMatch` is now exported for this
purpose. Four venues needed a new alias entry, each confirmed against Ticketmaster's live event
feed and, for two of them, its venue endpoint directly (which carries the venue's own street
address, ruling out a wrong-building match):

- `davis-wade-stadium`: Starkville -> Mississippi State (already present, pre-dated this task)
- `notre-dame-stadium`: South Bend -> Notre Dame
- `falcon-stadium`: Colorado Springs -> USAF Academy (venue endpoint confirms address "2169
  United States Afa", city Colorado Springs — the alias exists because event-level records
  sometimes carry the academy's own campus place name instead)
- `jordan-hare-stadium`: Auburn -> Auburn University (venue endpoint confirms address "251 South
  Donahue Drive", city Auburn — same pattern, event-level noise around a venue record that
  already agrees with us exactly)

This is a narrow, evidenced alias list, not a loosened city check — the state comparison inside
`citiesMatch`'s caller still runs unconditionally, so an alias can never bridge two different
states, and two same-named venues in different states still cannot cross-match. See "Ticketmaster
quota exhausted mid-verification" below for why a full `npm run smoke:venues` re-run could not be
completed live in this session; the fix was instead verified directly against the real
Ticketmaster city strings captured earlier in the same session, plus a partial live re-run (65 of
184 venues checked before the quota died) that found zero `WRONG CITY` lines.

## `findVenue`'s substring matching deserves a tightening pass

`findVenue` in `web/src/data/venues.ts` matches candidate venue names by two-way substring
containment (`normalized.includes(venue.name) || venue.name.includes(normalized)`). That was safe
across the original 25 arenas, whose names rarely nest inside one another. Across 184 venues it
is much less safe: a short stadium name is now much more likely to be a substring of an unrelated
longer one (or vice versa) purely by chance, and `findVenue` returns the first match in insertion
order with no city or state disambiguation at all — unlike the Ticketmaster id resolver, which
always requires city and state to agree. This function is not used by the id-resolution pipeline
built in this plan, but it is used elsewhere in the app to map a free-text venue name to a
`Venue` record, so it inherits the same growing collision risk as the venue corpus grows. Flagged
as deserving a dedicated tightening pass (city/state disambiguation, or requiring the full
normalized name rather than either-direction substring), not fixed here — out of this task's
scope.

## The nightly automation is dead, and has been since 2026-08-26

Two independent reasons, either one sufficient on its own:

- `launchctl list` reports `com.ticketscan.daily` at exit status 126, most likely because the
  repo lives on an external volume that is not mounted at the 06:00 fire time.
- `run-daily.sh:63` exits FATAL when `ADMIN_KEY` is unset, and
  `~/.config/ticketscan/marketing.env` currently holds only `OPENAI_API_KEY` — no `ADMIN_KEY` and
  no `TICKETMASTER_API_KEY`.

Consequence: `build:combos`, `build:tn-index`, `build:teams`, and now `build:venue-ids` (wired in
this task) refresh **nothing** until this is fixed — every nightly run since 2026-08-26 has
failed before reaching any of them. This is the user's own launchd config and secrets file,
already surfaced to them directly in the team-pages follow-ups; not attempted here.

## Ticketmaster's daily quota was exhausted mid-verification, blocking Step 2's full build

This is new, not something the plan anticipated. Ticketmaster's key
(`AdZSoihw1hGbWzaGix9YUBWJ37B2uMmA`, the only key configured — no backup exists) hit its
5,000-calls/day cap during this task's own verification work, confirmed directly from
Ticketmaster's response headers (`rate-limit: 5000`, `rate-limit-available: 0`,
`rate-limit-over: 1`, `rate-limit-reset` decoding to **2026-09-05 04:30:29 UTC**, roughly 8.5
hours after the quota died at 19:52 UTC). The evidence points at cumulative pressure rather than
one culprit:

- A second, independent `node index.js` process (pid 62283, started 12:22PM, well before this
  task) has been running unattended and was already sharing the same key's budget — the same
  leftover-process pattern the team-pages follow-ups already flagged as a build-time risk.
- Today's task work (tasks 1-6 of this same plan, each doing its own resolver runs and
  verification builds against live Ticketmaster) had already been drawing on the same daily
  budget for hours before this task started.
- This task's own smoke-check investigation (the "Addition" above) added roughly 250-300 more
  live calls while chasing down the `davis-wade-stadium` / `notre-dame-stadium` false positives
  and the two further ones (`falcon-stadium`, `jordan-hare-stadium`) it surfaced along the way.

Net effect: the local build against a freshly booted API (`PORT=4080 node index.js`, per this
task's instructions) failed immediately on the first team page it tried to prerender
(`/teams/arizona-cardinals`, `HTTP 429 for attraction K8vZ917198f`) because the daily quota was
already fully consumed by the time the build started, not because of anything wrong with the
650ms pacer or the build's own request volume. **The build could not be completed in this
session** — see the Task 7 report for the exact timeline and what was verified instead (tests,
type-check, design invariants, and a direct logic-level re-verification of the smoke-check fix
against already-captured real Ticketmaster data). Re-running `npm run build` against a locally
booted API after 2026-09-05 04:30 UTC, on a machine with no other process sharing the key, is the
outstanding follow-up this note exists to record. Do not shorten any revalidate window or loosen
the pacer to route around this — the constraint is Ticketmaster's daily cap, not this codebase's
pacing.

## Next expansions

- Extend arena venue guides into `venues.ts` for NBA, NHL, and MLB so `homeVenueSlug` coverage
  can rise past its current 21/30, 13/32, and 1/30.
- Tighten `findVenue`'s substring matching (see above) before the venue corpus grows further.
- Re-run the full `npm run build` verification once Ticketmaster's daily quota resets, on a
  machine with no other `node index.js` process sharing the same API key.
- Fix the nightly automation's two independent breaks (external-volume mount timing, missing
  `ADMIN_KEY`/`TICKETMASTER_API_KEY` in `marketing.env`) — the user's own config, not fixed here.

## Date-only parsing on the logged-in pages

`ea1c060` fixed the public pages: an event's `date` is a plain YYYY-MM-DD
calendar date, and `new Date('2026-09-05')` reads that as UTC midnight, which
renders as the previous day anywhere west of Greenwich.

The same class of bug is still on the client-rendered pages — `watchlist`,
`favorites`, `compare`, `EventCard`, `admin`. They are not indexed, so nothing
wrong is being published, but a signed-in user sees dates a day early.

Two reasons this was left rather than folded in:

1. **The watchlist case has a different root cause.** Its `event_date` comes
   from Postgres serialized as a UTC-midnight *timestamp*, not a bare calendar
   date, so `calendarDate` will not match it and the ET path still shifts it
   back a day. It needs its own fix at the DB boundary — most likely returning
   the column as a date string rather than a timestamp — not a formatter patch.
2. Sweeping five client pages into a build-verification commit would have
   buried the public-page fix.

The durable lesson is the one the bug itself teaches: `UpcomingEvents.tsx`
already had the correct implementation *and* a comment naming this exact trap,
and it still recurred three times, because each page wrote its own `formatDate`
instead of importing the shared one. Any fix here should delete the duplicate,
not correct it in place.
