# Content Calendar — Week of June 8 – 14, 2026

**Strategist:** Content Agent (Agent 1) — Weekly Planning Session
**Session date:** 2026-06-08 (Mon — **WC T-3**, kickoff Thu June 11)
**Covers:** Monday 6/8 → Sunday 6/14
**Carry-over source:** `content/next-week-plan.md` (Sun 6/7). This locks the slots from that plan and integrates this morning's deltas (Monday flagship composed 06:06, content-hook filed 06:06, API health re-checked, publish-state re-verified against git).

This is the **highest-relevance content week of the entire campaign.** The World Cup opens Thursday and the NBA Finals are live. The plan front-loads time-decaying pieces and keeps the evergreen venue work on the back half.

---

## Environment check (what changed / what's true this morning)

- **Monday flagship composed on schedule.** `2026-06-08-world-cup-2026-opens-buy-or-wait-every-seat-tier.md` — 7-min read, `category: guides`, `featured: true`, slug matches the plan placeholder verbatim, excerpt ~177 chars (**under the 200 limit — clean, no trim needed**). Opens on the "two World Cups at once" split: panic-sold group-stage floors (~$116–$120) vs marquee/knockout seats holding in the stratosphere (Cat-1 final best-available tripled to $33K per ESPN). One buy-or-wait framework across every tier. **Seventh consecutive Monday big-idea slot landing — cadence is structural.** Cross-link hub: the 6/1 venue-ranking flagship, `/world-cup-2026`, `/compare`. All dollar figures attributed inline to press (Goal.com, ESPN, TIME); **none from our own feed** (still returns null).
- **API is up.** Public events endpoint returned `200` in ~1.5s this morning — not timing out. (Contrast with the email-cron probe, which is a separate route.) Admin stats are **not authable locally** (real `ADMIN_SECRET` not in repo), so funnel figures below are carried as **last-known (6/1)**, not today's — flagged as such, not invented.
- **Publish velocity still 0 — Day 62.** Last published post: `c0dcf5a` (2026-04-07), confirmed against `git log -- web/src/data/blog.ts`. `blog.ts` holds **21 published entries**; the draft backlog is now ~32 (28 prior + 4 this week). This is a shipping-bandwidth problem, not a drafting one. Status only — **not re-escalated** (see CRO/shipping standing note). Nothing actionable from this seat except keeping the queue clean and ordered.
- **`worldcup.ts` schedule data is still stale (pre-draw placeholders).** Match counts/groups/dates are wrong vs real FIFA. A rebuild was requested before further WC refreshes lean on it. Until then, **WC pages stay on evergreen venue facts + Category floor guidance only — no fixture specifics.** Friday's bmo-field refresh followed this; this week's Mexico refreshes must too.
- **Price feed returns null; drip/email cron and `target_price` arming are inert.** Every dollar figure in drafts and hooks this week comes from attributed third-party press — never from our own feed. Keep that discipline platform-wide.
- **Style watch (carried from 6/7):** excerpts/leads lean hard on em-dashes (3–4 per excerpt), compounding into an AI-tell across the WC cluster. This week, vary it — a period or colon where the dash has gone reflexive.

### Live funnel (last-known, 6/1 admin pull — NOT re-pulled today)
93 users (`usersThisWeek: 5`), 115 watchlist items, **0 alerts ever fired**, 115/115 null `target_price`, 3 subscribers (all pre-launch/test rows, last organic signup Feb 1), 0 favorites. Acquisition is alive; every downstream loop (alerts, drip, newsletter) is still sealed by upstream UI/cron/capture-surface defects the content layer cannot touch. **No conversion/traffic percentages reported — no analytics is wired (GSC/GA4 still not connected).**

---

## This week's content items (locked)

### Priority 1 — The four-blog WC kickoff week (drafts; publish-gated)

| Day | Slot | File / working title | Category | Hub links | Status |
|-----|------|----------------------|----------|-----------|--------|
| **Mon 6/8 (DONE)** | Big-idea | `2026-06-08-world-cup-2026-opens-buy-or-wait-every-seat-tier.md` | guides | 6/1 venue-ranking flagship, `/world-cup-2026`, `/compare` | **Composed 06:06.** Tournament-eve buy-or-wait flagship across all tiers. Frontmatter clean, no pre-publish edits. |
| Tue 6/9 (T-2) | Tactical | "Game-Day at the World Cup: Landing a Seat in the Final 48 Hours Without Overpaying" — slug `world-cup-2026-game-day-final-48-hours` | tips | Mon flagship, `/compare`, `/watchlist`, this week's lead magnet | Compose Tue AM. 700–900w, two H2s + H3 checklist. Last-minute buyer playbook: resale timing, mobile-transfer gotchas, FIFA-resale vs secondary under deadline. **Direct CRO support** + the on-site companion to the lead magnet. |
| Wed 6/10 (T-1 / Finals) | News/timely | "Same Finals, 6× the Price: How One MSG Seat Costs More Than a Whole Trip to the Same Series Elsewhere" — slug `nba-finals-2026-msg-price-disparity` | news | `/compare`, NBA venue pages, the 5/28 Finals-vs-Finals piece | **Re-pull prices Wed AM** (Finals resale moves hourly) and attribute every figure to press. Reframe to whatever the series actually is by Wednesday (verify standings before drafting). |
| Thu 6/11 (KICKOFF) | Comparison | "Opening Weekend Price Check: Which Group-Stage Matches Are Overpriced — and Which Are the Bargains" — slug `world-cup-2026-opening-weekend-price-check` | comparisons | Mon flagship, `/world-cup-2026`, `/compare` | Compose Thu AM, WC live. Cross-match comparison of opening-weekend fixtures by reported get-in price vs demand. Reported resale bands only ($650–$1,100 standard), attributed — **no feed numbers, no stale-`worldcup.ts` fixture specifics.** Highest-volume content day of the program. |

**Wednesday verification rule:** Before drafting the Finals piece, confirm the actual series state and venues (the 6/7 hook assumed a Knicks-led matchup; re-verify, don't carry it forward). If the Finals price-disparity angle has gone stale or the series ended, pivot to a WC opening-eve snapshot. The *angle* (consumer-advocate price disparity) is the asset; the specific matchup is replaceable.

### Priority 2 — Page refreshes (Fri–Sat) — first Mexico venues

| Slot | Target | Scope |
|------|--------|-------|
| Fri 6/12 | `worldcup-stadiums/estadio-azteca` (Mexico City) | **Step 0 mandatory: grep `worldcup.ts` before drafting** — prior-memory match counts are unverified and should be treated as wrong until grep-confirmed (every US/Canada venue before this was off-spec). Evergreen angles only: most storied WC stadium in history (1970/1986 finals, hosting a third tournament — the only venue ever to do so), altitude (~2,240m) as a genuine play-conditions angle, Metro Line 2 transit access, capacity scale. **Keep all fixture specifics off the page until `worldcup.ts` is rebuilt** — venue facts + Category floor guidance only. Add the 4–6 item FAQ block (parking, transit, best seats, cheapest get-in, weather/altitude) to unlock `FAQPage` schema. |
| Sat 6/13 | `worldcup-stadiums/estadio-akron` (Guadalajara) | Same Step-0 grep gate. Evergreen angles: Chivas home ground, "the volcano" bowl design/sightlines, Guadalajara as a second-city WC host, transit/parking honesty. Same FAQ-block requirement. Same fixture-specifics embargo. |

**Refresh checklist (canonical Forward Fix v2):** Step 1 — file `seo-requests/2026-06-12-content-data-touch.md` (Azteca) / `2026-06-13-content-data-touch.md` (Akron) as the **literal first artifact** of the day's run, ≥90 min before the absorbing commit. Step 0 — re-verify match data against `worldcup.ts` before drafting (and **do not assert fixtures the file gets wrong — flag instead**). Step 2 — edit description/sections/ticketTips/keywords + FAQ block. Step 3 — cross-check vs Step 0. Step 4 — `npx tsc --noEmit`. Step 5 — `git diff --stat -- web/src/data/worldcup.ts` (single-file scope). Step 6 — commit `Content refresh: estadio-azteca` / `Content refresh: estadio-akron`.

### Priority 3 — Sunday audit + next-week planning
Sunday 6/14 — produce the **Week of June 15–21 plan.** The tournament is live; the content center of gravity shifts from "buy-or-wait previews" to **live matchday price reporting + knockout-stage previews** (Round of 32 begins late June). Anticipated refresh pair: the remaining Mexico venue (`estadio-bbva`, Monterrey) + first revisit-refresh of a high-value US venue now that the cluster arc is complete.

### Priority 4 — Lead magnet (see separate file)
**"The World Cup 2026 Matchday Survival Kit: Your Last-48-Hours Ticket-Buying Checklist."** Full content in `lead-magnet-world-cup-2026-matchday-survival-kit.md`. Format rotation: 4/13 PDF guide → 4/20 cheat sheet → 4/27 spreadsheet → 5/04 checklist → 5/11 infographic → 5/18 PDF guide → 5/25 comparison chart → 6/1 price-map one-pager → **6/8 checklist (week 9).** Chosen deliberately: a checklist is **the one format that stays useful for all six weeks of the tournament** (every matchday is a fresh last-48-hours decision), and it's the on-site companion to Tuesday's game-day tactical blog.

> **⚠️ CAPTURE-SURFACE STATUS (do not re-flag as broken).** Per the newsletter root-cause finding, the homepage-only form problem was **FIXED in the working tree 2026-06-07** — real signup forms now live on the blog index, blog posts, and the global footer. The lead magnet's blog/footer download CTAs now route to capture surfaces that actually capture. Remaining gap: `/register` opt-in is still TODO, and the working-tree fix needs to **deploy to production** to return a single email. Build the asset (correct and cheap); the gate is now real on the surfaces that ship.

---

## Keyword opportunity list → SEO Agent (Agent 2)

Filed in today's `content/content-hook.md`. Primary targets this week:
- `world cup 2026 tickets buy now or wait`
- `are world cup tickets getting cheaper`
- `world cup 2026 ticket prices june`
- `cheapest world cup 2026 group stage tickets`
- `world cup 2026 last minute tickets` (Tue tactical piece)
- `nba finals 2026 ticket prices` (Wed news piece — verify series state first)

Strong internal-link cluster: today's flagship ↔ the 6/1 venue-ranking flagship (`all-11-us-world-cup-2026-venues-ranked-cheapest-get-in`) ↔ `/world-cup-2026`.

## Social-ready snippets → Social Agent (Agent 3)
From today's flagship: **"Two World Cups are happening at once. Neutral group-stage matches: down to ~$116 (panic-selling). The Final: $33K best-available. Same tournament, same week."** Facts only; every figure attributed to press (Goal.com, ESPN). **No invented price arcs, no fabricated "Nth call inside band" streaks** (standing discipline).

## Lead magnet + subject lines → Email Agent (Agent 5)
- Lead magnet: the Matchday Survival Kit (this week's asset) for the nurture sequence.
- Subject candidates: "World Cup opens Thursday: buy these seats, wait on those." / "The $116 seat and the $33K seat are at the same tournament."
- **Do not blind-trigger drip-run** (standing memory: drip has delivered 0 emails ever, 20 users overdue — a blind trigger risks blasting real inboxes). Cron path is a separate fix.

---

## Backlog hygiene
The older WC drafts (4/15, 4/22, 4/29) **lose nearly all value the moment the tournament starts Thursday.** If they don't publish before June 11, treat them as forfeited — stop carrying them as "high freshen-burden, publish ASAP" each week. The two April playoff guides (4/08, 4/14) should move to `archived/` or drop off the list. Order of publish if bandwidth opens: (1) today's flagship, (2) the 6/1 venue-ranking flagship, (3) Tue game-day tactical — these three are the peak-relevance core.
