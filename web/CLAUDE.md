# TicketScan — frontend (web/)

**Shared project context lives in the repo root `CLAUDE.md`.** Read that for the
stack, the API surface, the database schema, the SEO page inventory, and the
build/rate-limit rules.

This file used to be a full copy of that one. The two drifted — the copy still
claimed "City pages (37)" and "24 venue pages" long after both were wrong — so
it now holds only what is specific to this directory. **Do not paste the root
file back in here.** Duplicated documentation is how the stale numbers happened,
and duplicated *logic* caused the two worst bugs this codebase has shipped: a
date formatter copied onto three pages instead of imported, and a request pacer
copied into a second route.

## Commands

```bash
npm run dev            # Next dev server
npm run build          # Production build — see the root file on rate limits first
npm test               # node --test (offline, ~1s). Run before committing.
npx tsc --noEmit       # Typecheck
npm run check:design   # DESIGN.md invariants (offline)

npm run build:teams      # Resolve Ticketmaster attraction ids  (network, ~261 calls)
npm run build:venue-ids  # Resolve Ticketmaster venue ids       (network, ~266 calls)
npm run smoke:teams      # Verify live ids against the API; exits 1 on a real defect
npm run smoke:venues     # Same for venues
```

The four network scripts share the 5,000/day Ticketmaster quota with the build.
Check the budget in the root file before running them casually.

## Things that will bite you here

- **`src/lib/paced.ts` is a single shared gate.** Every build-time fetch imports
  that one module. Never give a route its own copy and never add an unpaced
  fetch — see the root file for why.
- **`cleanEvents` vs `cleanTeamEvents`** (`src/lib/events.ts`) are deliberately
  different. Name-dedup is right for mixed listings and silently deletes two of
  every three-game series on a team schedule. Do not merge them.
- **Dates from the feed are plain `YYYY-MM-DD` calendar dates**, not timestamps.
  Use `formatEtDate` / `formatEventDayParts`; `new Date(str)` renders a day
  early. Never write a local `formatDate` on a page.
- **`src/data/teams.ts` is hand-owned** and parsed by build scripts with a regex
  anchored on its single-line field order. Keep the shape.
- **Adding a venue to `venues` requires an id in `data/venue-ids.json`**, or the
  page renders perfectly and lists no events. A test enforces both directions.
- **Node 24 type-stripping** lets `.mjs` scripts and tests import `.ts` data
  files directly. That is why the resolvers are `.mjs` with no imports.

## No new dependencies

Same rule as the root file: no new frameworks or major dependencies without
discussion. Tests use the Node built-in runner for this reason.
