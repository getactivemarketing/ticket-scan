# SEO / Data Request — World Cup schedule data is stale (pre-draw placeholder)

**Filed:** 2026-06-05 (Content Agent, Friday refresh session)
**Severity:** HIGH — factual accuracy + SEO credibility, 6 days before kickoff (June 11)
**For:** SEO Agent + Lead Architect

## What I found

While refreshing the BMO Field (Toronto) page, I cross-checked the venue's matches against the real post-draw FIFA schedule for the first time (prior refreshes only verified copy against `worldcup.ts` itself). They do not match.

| | `web/src/data/worldcup.ts` (what the site renders) | Real schedule (FIFA.com, Goal.com, Vivid, SeatGeek) |
|---|---|---|
| BMO matches | 3, all Group Stage, no knockout | **6, including a Round of 32** |
| BMO match dates | 6/14, 6/19, 6/27 | **6/12, 6/17, 6/20, 6/23, 6/26, 7/2** |
| Canada's group | Group F (M12) | **Group B (Canada vs Bosnia, June 12)** |

The file uses TBD teams and generic group letters throughout `worldCupSchedule` — i.e. it looks like **pre-draw placeholder data** that was never updated after the December 2025 draw.

## Why it matters

1. **All 16 venue pages may carry wrong fixtures.** The US-venue arc (MetLife → Arrowhead, 11 refreshes) verified internal consistency against this file but never against the real schedule, so the "Step-0 grep gate" was validating against a wrong source. Every venue's match count / group / date claims are suspect.
2. **Schema risk.** Any Event / AggregateOffer schema built off `worldCupSchedule` would publish wrong dates and matchups to Google days before the event.
3. **Ranking/credibility risk.** Publishing "BMO hosts 3 matches, Canada Group F" when Google's knowledge graph shows 6 matches and Group B is actively worse than a sparse stub.

## What I did NOT do (deliberately)

- Did **not** edit `worldCupSchedule`. Correcting it is a full-array migration (real match numbers like M3/M33/M62/M83 collide with the placeholder numbering; dates/groups/teams all change), not a single-venue Friday tweak — it needs explicit sign-off and a coordinated pass.
- Today's BMO refresh sticks to **evergreen, verifiable facts** (soccer-specific stadium, downtown waterfront, transit, capacity expansion ~30k→~45.5k, Canada co-host home matches, open-air June weather, FIFA pricing/resale fee context). It does **not** assert match counts, groups, or dates.

## Requested actions

1. **Audit + rebuild `worldCupSchedule`** against the official post-draw FIFA fixtures (all 104 matches, real teams/groups/dates/venues) before any further WC venue refreshes.
2. **Re-verify the 11 already-refreshed US venue pages** against the corrected schedule and fix any wrong match-count/group/date claims that shipped.
3. **Hold WC schema work** until the schedule is corrected.
4. Once corrected, I'll do a **follow-up BMO refresh** adding verified fixtures (and proceed to BC Place / Azteca / Akron / BBVA on real data).

## Sources
- FIFA.com Toronto host city: https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/canada/toronto
- Goal.com BMO Field guide: https://www.goal.com/en/lists/bmo-field-stadium-guide-history-stay/bltb15d51079e27f74b
- Vivid Seats (Canada vs Bosnia, 6/12, Group B): https://www.vividseats.com/world-cup-soccer-tickets-bmo-field-6-12-2026--sports-soccer/production/5080436
