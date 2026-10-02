# TicketScan — handoff, updated 2026-10-01

Read this first. It's the current state, what changed recently, and what's next.
Affiliate strategy lives in `docs/affiliate-programs-2026-10.md`.

---

## The biggest problem: price tracking is down

**No price has been recorded since 2026-07-24.** The tracker in `index.js`
(`trackWatchlistPrices`, every 4 hours) still runs. It finds about 26 watchlist
events and saves nothing, because every source fails:

- **Ticketmaster** Discovery no longer returns `priceRanges` for most events. In
  a 100-event sample on 2026-10-01, 13 had prices, all small local shows.
  Major events (e.g. Sharks game `G5vYZ_CrQn_ih`) return no price field.
- **SeatGeek** finds the events but returns `lowest=$undefined`.
- **StubHub** `Failed to get StubHub access token`, HTTP 400.

So price-drop alerts, price history, the buy-now signal and the price
comparison don't work. `marketing-agents/PRODUCT-STATUS.md` tells every agent
not to claim them (see below).

**Fix options, in order:** the TicketNetwork CJ data feed (needs Samir to
subscribe in CJ), the SeatGeek stats call (debug it), StubHub credentials
(renew). See `docs/affiliate-programs-2026-10.md`.

---

## State on 2026-10-01

- **Agents work.** OpenAI credits returned 2026-09-30. Both the 09-30 and
  10-01 runs had 0 agent failures.
- **Social posts with false price claims went out on 09-30 and 10-01.** The
  10-01 ones were kept up, Samir's call. Agents get the new rules from the
  10-02 run.
- **`~/Sites/ticketscan` is the only copy.** The external-drive copy was
  deleted 2026-09-30. Start sessions there.
- **The 06:00 run commits everything uncommitted under `web/src`** and pushes
  `main` whenever it is ahead. Don't leave half-done work there overnight.

---

## Done 2026-10-01

- **`marketing-agents/PRODUCT-STATUS.md`:** the product claims that are false
  right now. It's included in every agent's shared context (daily and both
  weekly runs) and overrides the task prompts. Remove its price section when
  tracking works again.
- **The Social pillars and the Content call to action** that asked for price
  claims are rewritten.
- **The Content agent's Fri/Sat page refresh** used to edit
  `venues.ts`/`cities.ts`/`blog.ts` and commit straight to live, and its brief
  asked for "updated pricing data". It now writes a sourced proposal to
  `marketing-agents/output/content/refresh-proposals/` and must not touch
  `web/src`.
- **The Blotato scheduler** now saves Blotato's post id and raw response.
  Every earlier row has `postId: null`, so those posts can only be cancelled in
  the Blotato dashboard.
- **Agent output reviewed.** It's mostly good. The California AB 1349 blog
  draft (`output/content/2026-09-30-california-ghost-ticket-law.md`) checks
  out and is ready to publish with `publish-draft.sh`.
- **Not a failure:** 10-01's log shows "AGENT FAILED: Agent 7". That's old
  September log text another agent printed. Trust the `AGENT FAILURES:` summary
  line at the end of each log.

## Done 2026-09-30

- **Wrigley Field** no longer shows a Floor/Courtside tier. The floor-tier test
  now covers every stadium, not just the football batch.
- **Dates a day early on logged-in pages** — fixed. The API returns
  `watchlist.event_date` as `YYYY-MM-DD`; watchlist, favorites, compare and
  admin format through `formatEtDate`. The admin popular-events panel also
  read fields the API never sent; fixed.
- **Thin team pages** — 57 new venue guides in `web/src/data/team-venues/`.
  Only the Blue Jays and Buffalo Bulls have no home venue: Ticketmaster lists
  none of their home events, so their guides sit unpublished in
  `team-venues/unlisted.ts`.
- **`content-calendar.json`** is committed by the daily run and trimmed to 30
  days (`trim-content-calendar.js`).
- **TikTok** removed from the Social agent's prompts. There is no TicketScan
  TikTok account.
- **Branches**: 8 stale local branches deleted. The one unpushed commit is
  kept as tag `archive/cj-affiliate-first-attempt`.

---

## Do not do these

- **Never run `run-daily.sh` by hand to "test" it.** A real run posts to
  Instagram and pushes to `main`. Even `DRY_RUN=1` spends OpenAI tokens and
  ~530 Ticketmaster calls.
- **Do not delete `marketing-agents/scheduled-log.json`.** It is untracked local
  state, 483+ rows, and it is the record of every post Blotato already has.
  Losing it removes one of the three guards (the staleness guard still holds).
- **Do not grant Full Disk Access to `/bin/bash`** as a shortcut if a job breaks
  again. It would give every background script full access to your disk. Moving
  the repo was the narrow fix.
- **Do not "correct" stadium capacities from Wikipedia.** The school's own
  athletics site wins; a Wikipedia sweep was measured to introduce about twice
  as many errors as it fixed.

---

## Next, in order

1. **Samir:** in CJ, pull clicks by `sid`, valid/invalid clicks and the
   commission tier, then subscribe to the TicketNetwork product feed. Checklist
   in `docs/affiliate-programs-2026-10.md`.
2. **Debug the SeatGeek price call.** It may be a free price source.
3. **Samir:** apply to Stay22 (hotel map) and Viator (stadium tours).
4. **Fix `/api/admin/alerts`.** It returns HTTP 500.
5. **Conversion tracking:** GTM loads but the site pushes no events (signup,
   watchlist add, outbound click).
6. **Drip emails promote price alerts** ("How Price Alerts Can Save You
   Hundreds"). Check whether they send at all; drip stats come back empty.

## Still open

- **Venue pages with little on Ticketmaster.** Chase Field and Coors Field are
  the right buildings, but the Diamondbacks and Rockies do not sell home games
  on Ticketmaster, so those pages show only tours and concerts. Coors Field had
  0 events on 2026-09-30.
- **Capacities worth a manual check** (all explained in FAQs on the pages):
  Albertsons Stadium (32,423 vs older 36,387), PNC Park (team page 38,362 vs
  MLB.com 38,747), Rogers Arena (Ticketmaster blog figure; official sites
  blocked automated reading), Lenovo Center (renumbered and expanded summer
  2026, no official hockey figure), Camden Yards and Kauffman (team pages may
  predate 2026 seat changes).
- **Pre-existing lint:** an unescaped `'` in `compare/page.tsx` and a
  missing hook dependency in `favorites/page.tsx`.
