# City × Category Combo Pages

**Date:** 2026-08-30
**Status:** Approved design, ready for implementation planning

---

## 1. Context

TicketScan's organic traffic comes almost entirely from its SEO pages. Today there are
**100 indexed pages**, confirmed against the live sitemap:

| type | count | route |
|---|---|---|
| City | 24 | `/tickets/[slug]` |
| Category | 13 | `/tickets/[slug]` |
| Venue guide | 25 | `/venues/[slug]` |
| Blog | 22 | `/blog/[slug]` |
| World Cup archive | 16 | `/world-cup-2026/[stadium]` |

`/tickets/[slug]` enumerates cities **or** categories, never both:

```
/tickets/orlando          → 200
/tickets/concerts         → 200
/tickets/orlando-concerts → 404   ← the gap this spec fills
```

Note `CLAUDE.md` describes these as *"City pages (37): Orlando concerts, NYC sports"*, which
reads as though combos already exist. They do not. That line should be corrected when this
ships.

### Measured inventory

A 5×5 sample against the live events API (`/api/public/events?city=&category=`), events
returned per combo, capped at 50:

| | nba | nhl | concerts | theater | comedy |
|---|---|---|---|---|---|
| new-york | 44 | 45 | 50 | 26 | 42 |
| chicago | 43 | 43 | 49 | 9 | 50 |
| orlando | 42 | **0** | 50 | 50 | 50 |
| milwaukee | 42 | **0** | 49 | 50 | 22 |
| las-vegas | **1** | 42 | 50 | 46 | 50 |

The zeros are correct and meaningful: Orlando and Milwaukee have no NHL franchise, Las Vegas
has no NBA franchise. Inventory is therefore a sound gate, and a small non-zero count (Vegas
NBA = 1) is noise rather than signal.

Extrapolating: the non-sport categories (concerts, comedy, theater, family, festivals) hit
nearly every city; the sport categories hit wherever a franchise exists. **Expect roughly
180–220 of the 312 possible combos to qualify** — close to tripling the indexed site.

### Existing patterns this work must follow

- `app/tickets/[slug]/page.tsx:99` fetches events **server-side** with
  `next: { revalidate: 3600 }`. Event lists are in the HTML and therefore indexable. Combo
  pages follow this, not a client-side variant.
- `components/UpcomingEvents.tsx` does the same for venue pages, and already defends against
  a known API defect by confirming the venue it renders is the venue it requested.
- `components/OnsaleRow.tsx` is the site's canonical event row, carrying the DESIGN.md status
  triad (on sale / presale / not yet open, colour always paired with a word).

---

## 2. Goal

Add a city × category page type at `/tickets/[city]/[category]`, generated only where the
events feed shows real inventory, whose per-page value comes from **data joins rather than
generated prose**.

### In scope

1. The new route and its static generation.
2. A committed combo index, refreshed on a schedule, that decides which combos exist.
3. Page content assembled from facts the site genuinely holds.
4. Internal linking from the existing city and category pages, plus breadcrumb schema.
5. Sitemap entries for qualifying combos.
6. A checker rule guarding against empty-shell regressions.

### Out of scope

- Team pages, artist pages, and any other new page type.
- Changes to the 25 venue guides, the 22 blog posts, or the World Cup archive.
- Migrating any of these pages to the DESIGN.md 2.0 surface. Combo pages inherit whatever
  `/tickets/[slug]` looks like today (1.0), so the content surface stays internally
  consistent until the deferred 2.0 content pass.
- Any backend change to `index.js`. The public events API already accepts `city` and
  `category` and needs nothing new.

### Non-goals

- **No generated or templated prose describing places.** No sentence may assert a fact the
  data does not contain. This is the central quality constraint, not a stylistic preference.
- No increase in indexed pages beyond what the inventory gate admits.

---

## 3. Constraints

**API budget.** Ticketmaster's free tier allows 5,000 requests/day, and each page
revalidation is one call through the Railway proxy. At a 1-hour window combo pages alone
would exceed the budget:

| pages | @ 1h revalidate | @ 6h revalidate |
|---|---|---|
| 25 venue | 600 | 600 |
| 37 city/category | 888 | 888 |
| ~200 combo | 4,800 | **800** |
| **total** | **≈6,288 — over** | **≈2,288 — safe** |

Combo pages therefore use `revalidate: 21600` (6 hours). Combo listings change slowly and
hourly freshness buys nothing. The existing pages keep their 1-hour window.

These are worst-case figures assuming every page is requested in every window; real usage
will be lower, but crawlers approximate the worst case and the budget must survive it.

**Quality bar.** The venue guides set the site's standard at 168–178 words of sourced prose
each. Combo pages clear that bar differently — through specificity of data rather than volume
of text. A combo page with no derived venue and no events must not ship.

**Honesty.** This codebase has already had one cleanup pass removing price claims the product
could not support. Nothing here may reintroduce that pattern.

---

## 4. The combo index

A script writes `web/src/data/combos.generated.json`:

```json
{
  "generatedAt": "2026-08-30T00:00:00.000Z",
  "threshold": 5,
  "combos": [
    { "city": "chicago", "category": "nba", "eventCount": 43 },
    { "city": "chicago", "category": "theater", "eventCount": 9 }
  ]
}
```

- One API call per combo (312), run on a schedule — **not** on every build.
- A combo qualifies at **≥5 upcoming events**. This admits Chicago theater (9) and excludes
  Las Vegas NBA (1).
- The file is committed. Builds read it and never call the API to decide which pages exist,
  so a slow or rate-limited API cannot silently drop 200 pages from the sitemap mid-build.
- The **first** index is generated manually during implementation and committed, so the
  feature does not depend on a scheduled run to work.
- Thereafter the refresh runs from the daily marketing agent, which already runs on a
  schedule and already commits generated artifacts. Note that agent's `deploy_production`
  block is currently stale — it deploys the `web` Vercel project, which no longer owns the
  live domain. That is a separate open item; adding the index refresh must not depend on
  that block, and should be placed so it runs whether or not the deploy step survives.
- **The script must fail loudly and leave the previous file intact** if a significant share
  of probes error. A partial index is worse than a stale one: it would deindex real pages.

---

## 5. Page content — where uniqueness comes from

Every element below is derived from data the site holds. Nothing is asserted.

**Venue association is read off the feed, not inferred.** The tempting approach is to map
`venue.homeTeams` → category and declare that Chicago NBA happens at the United Center. That
encodes an assumption that breaks when a team moves or an arena is renamed — both of which
have already happened to this dataset (Footprint Center → Mortgage Matchup Center, Wells
Fargo Center → Xfinity Mobile Arena). Instead, read the venue names off the events the API
actually returns, and link to a venue guide only where the returned name matches one of the
25. Where it does not match, name it plainly without linking. This is correct by
construction and needs no maintenance.

Each page therefore carries:

1. **The venues genuinely hosting that category in that city**, derived from the returned
   events, linked to venue guides where one exists.
2. **The live event list**, rendered with `OnsaleRow` so status reads identically to the
   onsale calendar and watchlist.
3. **Seating tiers** from `venue.sections` for any matched venue guide.
4. **Onsale timing** derived from `onsaleStart` across the returned events — the fact this
   site holds and generic comparison sites do not.
5. **Internal links**: other categories in this city, the same category in other cities, and
   the parent city and category pages.

Structured data: `BreadcrumbList` (`Tickets → Chicago → NBA`) plus the `ItemList` pattern the
existing `/tickets/[slug]` page already emits.

---

## 6. Linking and sitemap

- City pages gain a "Browse by category in {city}" block linking to that city's qualifying
  combos. The existing page already renders a "Browse by Category" block pointing at
  standalone category pages; this extends rather than replaces it.
- Category pages gain the mirrored "Browse by city" block.
- `sitemap.ts` gains qualifying combos, at a priority **below** the city pages so the
  hierarchy is explicit.

---

## 7. Risks

| Risk | Mitigation |
|---|---|
| Tripling indexed pages in one release reads as a thin-content event. | The inventory gate, the derived-facts rule, and the no-empty-shell checker rule. Staged rollout available — see §9. |
| A template regression ships 200 near-identical empty pages. | Checker rule: no combo page without at least one derived venue or one event. |
| Inventory drops to zero between index refreshes. | Render an honest empty state; the next refresh removes the combo. |
| The index script half-fails and deindexes real pages. | Fail loudly, keep the previous file (§4). |
| API budget exceeded, pages serve stale or empty. | 6-hour revalidate; arithmetic in §3. |
| Slug collision between a city and a category. | Impossible by construction — the route is nested, so `[city]` and `[category]` are separate segments. This is why the nested URL was chosen over a flat `chicago-nba`. |

---

## 8. Verification

1. `npm run check:design` passes, including the new no-empty-shell rule.
2. `npm run build` succeeds and prerenders exactly the combos in the index — count asserted
   against the JSON, not eyeballed.
3. A spot-check of three combos with different shapes: one strong sports combo (chicago/nba),
   one thin-but-real combo (chicago/theater, 9 events), and one that must **not** exist
   (orlando/nhl → 404).
4. Every venue named on a page appears in that page's returned events. No page names a venue
   the feed did not supply.
5. The sitemap contains the qualifying combos and nothing else new.
6. Existing city, category and venue pages are unchanged apart from the new linking blocks.
7. API call arithmetic re-checked against the final page count.

---

## 9. Sequencing

The design ships all qualifying combos. A staged alternative is available and needs only a
change to the index threshold or a cap: ship the top ~50 combos by inventory, watch Search
Console for a month, then release the rest. Same code either way.

**The default is the full rollout.** The staged path is invoked by exactly one condition: if
the first index run yields **more than 220 qualifying combos**, ship the top 50 by event
count and hold the rest for a month. Below that, ship everything. This is a rule rather than
a judgement call so it does not get relitigated mid-implementation.

---

## 10. Follow-ups

- Correct the `CLAUDE.md` line describing 37 pages as "Orlando concerts, NYC sports".
- Combo pages inherit the 1.0 surface; they migrate with the deferred content-surface pass
  (`docs/superpowers/plans/2026-08-28-design-2-0-followups.md`).
- Team and artist pages remain unbuilt and are the natural next expansion.
