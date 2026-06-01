# WorldCup Data Erratum + Cross-Piece Reconciliation — 2026-06-01

Filed by Content Strategist (Agent 1) during Monday capstone-blog composition. Two data-integrity items surfaced; both should clear before the World Cup blog cluster publishes so the on-site venue pages and the blog posts agree.

## §1 — `worldcup.ts` NRG description: "only retractable roof" claim is factually wrong

**Location:** `web/src/data/worldcup.ts`, `nrg-stadium` entry `description`.

**Current text (incorrect):** "...and is **the only US WC venue with a retractable roof**, a structural weather-management hedge no other US WC venue can claim."

**Why it's wrong:** Two other US WC venues have retractable roofs:
- **AT&T Stadium** (`att-stadium`) — retractable roof + retractable end-zone doors.
- **Mercedes-Benz Stadium** (`mercedes-benz-stadium`) — the pinwheel ETFE retractable roof is described in detail in that venue's own `description` two entries up ("eight triangular ETFE panels that rotate open or closed in roughly 8 minutes").

So three US WC venues retract (AT&T, Mercedes-Benz, NRG); SoFi and Hard Rock carry fixed canopies; the other six are open-air.

**Suggested 1-line fix (Lead Architect, ~3 lines of edit):** Replace "the only US WC venue with a retractable roof" with "one of three US WC venues with a retractable roof (alongside AT&T and Mercedes-Benz), and the only one in the Texas/Gulf heat corridor." This preserves the genuine NRG weather-hedge angle without the false exclusivity claim.

**Blast radius:** NRG stadium page renders this description verbatim. Today's capstone blog (`2026-06-01-all-11-...`) already uses the *correct* roof breakdown, so once the source line is fixed the page and the blog will agree. If the source line is NOT fixed before publish, the NRG page will contradict the capstone blog's roof column.

## §2 — Cross-piece match-count reconciliation (5/25 flagship vs 6/01 capstone)

The two WC content-cluster anchors currently disagree on per-venue match counts:

| Venue | 5/25 "Three Cheapest" table | 6/01 capstone (matches-array round counts) |
|---|---|---|
| MetLife | 8 | **9** (GS4 + R32 + R16 + QF + SF + Final) |
| SoFi | 8 | **8** (GS4 + R32 + R16 + QF + SF) |
| AT&T | 9 | **7** (GS4 + R32 + R16 + QF) |

The 6/01 counts are derived directly from the `worldcup.ts` `matches` array — i.e. exactly what the live venue pages render from — so they are the site-consistent source of truth. The three pure-Group-Stage venues (Levi's / Gillette / Lincoln Financial = 3/3/3) agree across both pieces; only the marquee-venue counts drift.

**Ask:** Before BOTH drafts publish, update the 5/25 flagship's broad venue table to the matches-array counts (MetLife 9, AT&T 7). One-table edit, no body rewrite. This keeps the cluster internally consistent for the reciprocal cross-links.

## Handoff
- **Lead Architect:** §1 is a ~3-line `worldcup.ts` edit; bundle with the standing `extractLowestPrice` patch (Day 22) and the publish-queue session if/when that window opens.
- **SEO Agent (Agent 2):** §2 reconciliation is a copy edit on an unpublished draft — flagging so it's not missed if the 5/25 flagship is published before the 6/01 capstone.
