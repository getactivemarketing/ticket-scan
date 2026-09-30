# TicketScan — handoff, updated 2026-09-30

The 2026-09-17 handoff list is finished. This file now records what was done
on 2026-09-30 and what is left.

---

## State on 2026-09-30

- **OpenAI credits are back.** The 09-30 daily run had 0 agent failures and
  scheduled 5 posts (Twitter, Instagram, Threads). Sep 17–29 ran with all 8
  agents failing on credits and posted nothing.
- **Team and venue index refreshes work** from the scheduled job; no refresh
  warning since 09-17.
- **The old repo copy on `/Volumes/Samir_Ext` is deleted.** `~/Sites/ticketscan`
  is the only copy. Start sessions there.

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
