# TicketScan — handoff, 2026-09-17

Written the evening of 2026-09-17, before a 4-day absence (back ~2026-09-21).
Ordered by what matters, not chronologically.

---

## The one thing only you can fix

**The OpenAI account has no credits. All 8 marketing agents fail.**

```
ERROR: stream disconnected before completion: You have no credits remaining.
       Add credits to continue using the API at
       https://platform.openai.com/settings/organization/billing/
```

Every agent in this morning's run exited 1 for this reason and nothing else.
Until credits are added, the daily and weekly runs will keep completing while
producing **no content** — no social posts, no SEO work, no email drafts. The
plumbing around them is fine; there is simply nothing coming out of the models.

Nothing in the repo can work around this. It is a billing action.

---

## Where things stand

**The scheduled jobs work again.** Today's 06:00 run was the first successful
start since 2026-08-26 — 22 days. It ran 06:00:04 → 06:13:39.

Fixed and verified over 09-14 … 09-17:

| Problem | Status |
|---|---|
| macOS refused launchd access to the external drive (`Operation not permitted`, exit 126, 25 failed runs) | Fixed — repo moved to `~/Sites/ticketscan`, all 3 plists repointed |
| `ADMIN_KEY` missing from `marketing.env` | Fixed — verified 200 with the key, 401 without |
| Scheduler would have re-sent 64 April posts to Blotato | Fixed — 3 independent guards; **in production today it skipped all 64 and sent 0** |
| Posts scheduled before their images were live | Fixed — scheduling moved after the push, waits for each image to return 200 |
| `vercel --prod` deploying the domain-less `web` project daily | Removed — it published nothing and ran a full prerender against Ticketmaster every day |
| Image commit never pushed on a day with no other output | Fixed — pushes whenever local `main` is ahead, still only from `main` |
| `build:teams` / `build:venue-ids` failing with `TICKETMASTER_API_KEY is required` | Fixed — shared `web/scripts/load-env.mjs` |

That last one had never worked from the nightly job. It was wired in during the
stadium work and only ever tested from a shell that already had the key.

**One commit is not pushed:** `237a19b` (the env loader). Tomorrow's 06:00 run
pushes it automatically, since the run now pushes whenever `main` is ahead.
Nothing is waiting on it.

---

## What will happen each day while you are away

- **06:00 daily** — agents all fail (no credits). `build:combos` refreshes (it
  uses the deployed API, so it works), and `build:teams` + `build:venue-ids`
  should now refresh too — **this is the first time they will ever have run
  here**, so it is the thing most likely to surprise. Tests gate the commit; on
  failure only the generated data is reverted. Then commit + push, which
  redeploys Vercel and Railway.
- **Fri 09-18 07:00** — weekly analysis run. Agents will fail the same way. It
  neither deploys nor schedules posts.
- **Mon 09-21 09:00** — weekly strategy run. Same.

**Nothing will post publicly.** With the agents failing, no new calendar entries
are written, so the scheduler has nothing new and the guards block everything
old. Today it reported `0 scheduled, 0 skipped, 0 errors`.

**Ticketmaster budget:** roughly 1,100 calls/day of 5,000 while the agents are
down (combos ~336, the two builders ~530, one cold prerender ~590 on days that
push). Comfortable.

---

## When you are back, in this order

1. **Add OpenAI credits.** Everything else is cosmetic until this is done.
2. **Read the newest daily log** — `~/Sites/ticketscan/marketing-agents/logs/`
   and `~/Library/Logs/ticketscan/daily-stderr.log`. Specifically check:
   - `AGENT FAILURES:` — expect 8 until credits are added
   - `WARNING: team index refresh failed` / `venue id refresh failed` — these
     should be **gone**. If they are back, the env loader did not take.
   - The Blotato block — should stay at `0 scheduled` while agents are down
3. **Confirm the indexes are actually refreshing.** `git log --oneline -5` should
   show daily output commits touching `teams.generated.json` and
   `data/venue-ids.json`. Before today those were 9–13 days stale.
4. **Delete the old copy** at `/Volumes/Samir_Ext/Sites/ticketscan` once you are
   satisfied. It is 4 commits behind and editing it by mistake loses work.

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

## Still open, none urgent

- **Thin team pages** — 60 teams have no home venue. They send `noindex` only
  when they also have no games, which starts mattering in November when MLB's
  season ends (29 pages at once).
- **Logged-in pages show some dates a day early** — watchlist, favorites,
  compare, admin. Not indexed. The watchlist case needs a database-side fix
  (Postgres returns a UTC-midnight timestamp, not a calendar date).
- **Wrigley Field** shows a "Floor/Courtside" seating tier.
- **`content-calendar.json` is never trimmed or committed** by the run. It is
  tracked, so a `git checkout` wipes the day's entries — which is what happened
  on 08-27 and is why the dedupe logic was lost. Worth deciding whether the run
  should commit it.
- **`DOCUMENTATION.md`** is legacy and untouched. Eight stale local branches.
- **`vercel whoami` reports `getactivemarketingnow-6110`** while the projects sit
  under `samir-patels-projects`. Deploys work, so this is probably just a
  personal-account vs team-slug difference — worth one look if a deploy ever
  fails auth.
