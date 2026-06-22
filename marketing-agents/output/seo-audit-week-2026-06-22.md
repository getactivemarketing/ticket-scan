# SEO Audit — Week of 2026-06-22

**Agent:** SEO Specialist (Agent 2) · **Method:** verified against current `web/` source + live HTTP checks. No metrics are fabricated — items I cannot measure without external tooling (PageSpeed/Search Console/GA4) are marked *needs-tooling*, not estimated.

---

## TL;DR
Two real, unfixed issues remain; several previously-flagged items are now **resolved**. The single highest-impact fix is unchanged from prior weeks: **`/compare` is in the sitemap and cited in `llms.txt` but client-side redirects logged-out visitors to `/login`.** That is the one thing worth shipping this week.

---

## Resolved since last audit (verified — do not re-flag)
- **Index hubs are live.** `/venues`, `/tickets`, `/contact` all return **HTTP 200** (previously 404). Pages exist in source and are in `sitemap.ts`. The "built-but-undeployed" blocker is closed.
- **AI-SEO assets shipped.** `public/llms.txt` exists (31 lines, well-structured: what-it-does, key pages, WC2026, citation facts). Good foundation for ChatGPT/Perplexity citation.
- **Structured data is broad.** 15 files emit `application/ld+json`; `/faq` carries `FAQPage` schema; homepage/layout/how-it-works/world-cup all have JSON-LD. AI-extraction structure is in good shape.
- **WC schedule UI shipped.** New `WorldCupSchedule.tsx` renders a filterable fixture grid from `worldcup.ts`.

---

## Open findings, ranked by impact

### P0 — `/compare` is indexed + AI-cited but login-gated
- **Verified:** `web/src/app/compare/page.tsx:86-90` — `if (!authLoading && !user) { router.push('/login'); return null; }`.
- **Conflict:** `/compare` is in `sitemap.ts` (priority 0.8) **and** listed as a key page in `public/llms.txt`. We are actively pointing Google and AI crawlers at a URL that bounces every logged-out human to `/login`. This wastes crawl budget, kills the landing-page conversion, and undercuts the AI-citation pitch (an AI that follows the llms.txt link lands on a login wall).
- **Fix (CRO Agent 6 owns the ship):** render the comparison read-only for anonymous visitors; gate only the save/watchlist-add action behind login. One conditional, not a rebuild.

### P1 — Competitor comparison pages still 404 (programmatic gap)
- **Verified:** `/compare/ticketscan-vs-seatgeek` → **404**; `src/app/compare/` contains only `page.tsx` + `layout.tsx` (no `[slug]` route).
- These "X vs Y" queries are high-intent and low-competition for us to own. Recommendation unchanged: **build ONE** as a test — `/compare/ticketscan-vs-seatgeek` — before speccing a full set. Template below.

### P2 — Uncommitted source/production divergence (hygiene risk)
- **Verified:** the live SEO pages (`venues/page.tsx`, `tickets/page.tsx`, `contact/page.tsx`, `public/llms.txt`, several `layout.tsx`) are **deployed (200)** yet show as **untracked/modified** in git. Source of truth has drifted from production.
- Not an SEO ranking issue, but a real risk: an uncommitted file can be lost or silently reverted on the next clean deploy. **Action:** commit the deployed SEO work to `main`. (Routing/ownership: dev, not a marketing deliverable — flagging for visibility.)

### Not a bug — closing the loop on `/event/`
- `/event/` is **intentionally `disallow`ed in `robots.ts`** and the page is login-gated. From an *SEO* standpoint this is correct (noindexed proof page), so I am **not** flagging it as an SEO blocker. Its anon-preview/orphan status is a CRO concern, not an indexation one.

---

## Programmatic SEO expansion — prioritized

| Opportunity | Intent / volume | Difficulty | Data ready? | Verdict |
|---|---|---|---|---|
| `/compare/ticketscan-vs-seatgeek` (single competitor pg) | High intent, low comp | Low | Yes (static positioning copy) | **Build 1 now** |
| `/tickets/[city]/[venue]` combos | Long-tail, high volume | Med | Partial — need venue↔city mapping | Spec next week |
| `/artist/[slug]` (top artists) | High volume | High (competitive) | **No** — no artist-level API data cached | Defer |
| `/best-time-to-buy/[category]` | Med, evergreen | Low | **No** — price-history table is empty (see note) | Defer until data exists |

**Template spec — `/compare/ticketscan-vs-[competitor]` (static, no API):**
- H1: "TicketScan vs SeatGeek: Which is cheaper for tickets?"
- Comparison table: coverage, fees transparency, price history, alerts, who-it's-for.
- Quotable answer paragraph up top (for AI extraction) + `FAQPage` JSON-LD.
- Internal links to `/compare`, `/how-it-works`, relevant venue/city hubs.
- Honest framing: we're a comparison tool, not a seller (matches `llms.txt` positioning).

> **Data honesty note:** "best time to buy" and any price-trend programmatic pages depend on `price_history`, which prior audits confirmed returns 0 rows platform-wide. Do **not** ship data-driven price pages claiming trends we can't compute.

---

## AI Search Optimization
- **Shipped & good:** `llms.txt`, broad JSON-LD, `FAQPage` schema, clear quotable differentiator ("side-by-side same-event comparison + price history").
- **One inconsistency:** `llms.txt` lists `/compare` as a key page, but that page is login-gated (see P0). Either fix the gate (preferred) or point the AI-facing link at an ungated value page. Low effort, removes a credibility gap for crawlers that follow the link.
- **Cannot verify externally this run:** actual citation presence in ChatGPT/Perplexity/Google AI Overviews requires live querying — *needs-tooling*. Not asserting a position we haven't measured.

## Site Architecture
- Hub structure is now sound: `/venues` and `/tickets` index pages are live, giving crawlers and users a 2-click path to all programmatic children. This was the main architectural gap and it's closed.
- Remaining nit: confirm the global nav/footer link to the new `/venues` and `/tickets` hubs (not just the sitemap) so PageRank flows to them. (`Footer.tsx` is modified in the working tree — verify the links landed before claiming done.)

---

## WC2026 data caveat (carry-forward)
The new `WorldCupSchedule.tsx` is only as accurate as `worldcup.ts`, which prior audits flagged as **pre-draw placeholder fixtures** (wrong venue match counts/groups/dates vs real FIFA draw). The UI shipping does **not** resolve the data accuracy issue. Do not assert specific fixtures from these pages until `worldcup.ts` is rebuilt against the real draw.

---

## Handoffs
- **→ CRO Agent 6:** un-gate `/compare` for anonymous visitors (P0). Highest-leverage SEO+conversion fix.
- **→ Content Agent 1:** brief for `/compare/ticketscan-vs-seatgeek` (template above).
- **→ Dev/owner:** commit the deployed-but-untracked SEO pages to `main` (P2).

## Verified this run
- Live HTTP: `/`, `/venues`, `/tickets`, `/contact`, `/compare`, `/event/test` = 200; `/compare/ticketscan-vs-seatgeek` = 404.
- Source: compare login gate, robots disallow list, sitemap contents, llms.txt, JSON-LD coverage, WCSchedule data import.
