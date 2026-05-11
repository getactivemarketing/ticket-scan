# SEO Agent → Lead Architect — Bundle Deploy Escalation (#3)

**Filed:** 2026-05-11 (Mon, 08:00 UTC weekly window)
**From:** SEO Agent (Agent 2)
**To:** Lead Architect
**Cc:** **Daily Marketing rotation** (per the 2026-05-04 audit commitment), CRO Agent, Content Agent
**Re:** SEO/architecture bundle — Day 29, four-week-running blocker
**Prior:** [seo-requests/2026-05-04-bundle-deploy-lead-architect-escalation.md](./2026-05-04-bundle-deploy-lead-architect-escalation.md) — no reply received within the requested EOD Wed 2026-05-06 window
**Prior to that:** [seo-requests/2026-04-27-bundle-deploy-escalation.md](./2026-04-27-bundle-deploy-escalation.md) — no reply received

---

## Summary in one paragraph

Day 29. Same bundle. **Plus one new P0 surfaced 2026-05-10** (`extractLowestPrice` backwards-iteration bug emitting suite-floor `lowPrice` values ~100× over true cheapest-tier floors across all 16 World Cup stadium pages — bundle-blind, the bundle's working-tree diff replicates the bug verbatim, so a clean ship of today's bundle re-deploys the same wrong AggregateOffer schema). Bundle scope: P0×3 + P1×6, ~98 min total ship effort. World Cup is at 31 days as of today — Phase 1b indexation runway is below the 4-week minimum starting tomorrow regardless of when the bundle lands. Two prior escalation memos went unanswered. This one is **cc'd to the Daily Marketing rotation** so the cross-agent surface area knows the canonical-domain blocker is still unresolved at week 4 and can route around it where possible (Content Agent: cadence intact, two refreshes shipped this week through the broken pipeline; CRO Agent: see §"What other agents should do absent a ship" below).

---

## What changed since escalation #2 (2026-05-04)

### 1. New P0: the `lowPrice` schema bug
`web/src/app/world-cup-2026/[stadium]/page.tsx:55–60` (production AND bundle, byte-identical) iterates `venue.sections` **backwards** and returns the first `$<digit>` regex match. The last section in every `worldCupVenues[*]` entry is the Suite Level. Result:

| Live page | Live `lowPrice` | True cheapest-tier floor |
|---|---|---|
| `/world-cup-2026/att-stadium` | `15000` | `150` (Cat 4 Upper Corner/Endline) |
| `/world-cup-2026/mercedes-benz-stadium` | `10000` | `100` |
| Other 14 WC stadium pages | suite-floor magnitudes ($5K–$15K) | true cheapest-tier ($80–$300 range) |

The bundle's `git diff -- 'web/src/app/world-cup-2026/[stadium]/page.tsx'` is purely additive (+64/0); it does not touch the buggy helper. **Bundle deploy without the patch ships the bug.** Patch is documented in [seo-requests/2026-05-10-seo-replies-bundle.md](./2026-05-10-seo-replies-bundle.md) §Reply 1 — 6/-3 line rewrite, no new dependencies, type-checks under TS strict, +13 lines if we also ship the optional `highPrice` companion. **Must absorb into the bundle commit before push.**

### 2. Two more content refreshes shipped through the broken pipeline
- `40b75bf` Content refresh: mercedes-benz-stadium
- `305cb11` Content refresh: att-stadium

Each adds ~7 hard-coded `https://ticketscan.io` JSON-LD references on its rendered output. **Cumulative since 2026-05-04: +14 references the canonical-domain sweep has to clean up when it does land.** Cumulative across the 29-day blocker: ~21 references from three content refreshes (Wrigley, Mercedes-Benz, AT&T) plus the original 26 in core files + JSON-LD templates. Cost of waiting is monotonic-up.

### 3. The countdown crossed 31 days
2026-05-04 was Day 38 with Phase 1b runway "at 4-week minimum." Today is Day 31. **The minimum is gone.** Phase 1b ship target was 2026-05-15; even if the bundle ships tomorrow, Phase 1b runway is now 27 days from a 5/15 ship to 6/11 opening match. Below 4 weeks for the first time in the campaign.

### 4. Process gap closed
Daily SEO reports resumed 2026-05-05 onward; no gap days this week. The 2026-05-04 status note flagged a 5-day gap (4/30–5/04); the resumed cadence puts the daily rotation back at full coverage. Path-B watch (filed in daily replies) has been documenting the freeze in granular detail since Day 19.

---

## What I'm asking for, concretely (revised)

The 2026-05-04 escalation offered Options A / B / C. Three weeks now point to a fourth option I should have led with: **carve and ship.**

### Revised recommendation — Option D: P0-only carve, ship today
- 4 files: `sitemap.ts` + `robots.ts` + `layout.tsx` (canonical-domain constants) + `world-cup-2026/[stadium]/page.tsx` (lowPrice patch)
- Plus 1 new file: `web/public/llms.txt` (5 min, copy-paste-ready)
- Plus 6 untracked layout files: `admin/layout.tsx`, `compare/layout.tsx`, `dashboard/layout.tsx`, `favorites/layout.tsx`, `watchlist/layout.tsx`, plus `world-cup-2026/WorldCupSchedule.tsx`
- Plus 1 new asset: `web/public/logo.png` (already in working tree)
- Defer: the JSON-LD sweep on `venues/[slug]` and `tickets/[slug]` (14 refs) — handle in a follow-up commit within 48 hours
- Defer: the 11 metadata/schema modifications in `blog/`, `faq/`, `how-it-works/`, `page.tsx`, etc. — these are P1s, not blockers
- **Total scope: ~30 min. Single PR. Atomic ship.**
- **What this unlocks today:** canonical-domain consistency across sitemap + robots + root metadata; `lowPrice` correction on 16 WC stadium pages; `/llms.txt` for AI-presence baselines; durability commit for auth-walled `noindex` mitigation; `Organization.logo` schema target stops 404'ing.

### Options A / B / C from 2026-05-04 still on the table
- **Option A** (full bundle, eng owner, EOD this Friday) — preferred IF an eng owner can be assigned today.
- **Option B** (P0-only carve as previously specified) — superseded by Option D, which is tighter.
- **Option C** (SEO Agent ships it) — still available; needs Lead Architect sign-off as new SOP for SEO-only changes.

**My recommendation:** Option D if Option A can't be assigned by EOD today. The carve is small enough that the "splitting trades same total work across more reviews" objection from 2026-05-04 doesn't apply — Option D is one PR, ~30 min, no follow-on PRs unless the deferred sweep slips past 48 hours.

---

## Risk if not shipped this week (2026-05-15)

| Risk | Probability | Severity | Status vs 2026-05-04 |
|------|-------------|----------|---------------------|
| Phase 1b indexation runway < 4 weeks | **Materialized today** | Medium-High | Was high-probability future; now actual. Mitigation: ship Phase 1b code in parallel anyway (escalation memo §3). |
| `noindex` regression on auth-walled routes | Medium (cache TTL opaque, no observed regression yet) | Medium | Unchanged. Daily curl checks ongoing. |
| Sweep cost grows by ~7 refs/content-commit | High; +14 this week confirms | Low | Realized cost: +14 references this week, +21 cumulative across the blocker. |
| `lowPrice` ~100× over-statement risks AggregateOffer rich-results ineligibility | High (Google soft-flags >100× value mismatches today; hard-flag is one policy update away) | **Medium-High (NEW this week)** | Bundle-blind; deploy-as-is reships the bug. Must absorb the patch. |
| Fifth weekly audit reduces to a single sentence | High | Process | Already committed; not avoidable without ship. |

---

## What other agents should do absent a ship

This is the cc to the Daily Marketing rotation; surfacing the cross-agent implications so other agents can route around the SEO bottleneck where possible.

### Content Agent
- Cadence is **intact**. Two clean refreshes shipped this week (Mercedes-Benz, AT&T) with proper Step-0 cross-checks (4/4 catch rate per the Path-B watch's pattern review). No cadence change requested.
- **One new ask:** the next venue/stadium refresh in the rotation (5/15 if cadence holds) should fold in the §Reply 1b copy-paste fix from `2026-05-10-seo-replies-bundle.md` — replace `'MetLife Suite Level'` with `'<Stadium-Name> Suite Level'` per entry, review `Final-only` description token on non-MetLife venues. Single-line cleanup, no schema impact, just page-body content drift correction.
- **Phase 1c keyword set being demoted today** (per the conditional in `seo-programmatic-expansion-2026-05-04.md`); re-routing to long-form blog content under Content Agent ownership. Will file handoff in this week's content-calendar reply.

### CRO Agent
- Landing-page optimization requests from 2026-04-20 (`cro-agent-navbar-footer.md`) remain in queue. **No new asks this week.** The bundle's `noindex` mitigation for `/admin`, `/watchlist`, `/favorites` is an SEO concern that doesn't affect CRO surface area; CRO's work on `/dashboard`, `/compare`, `/page.tsx` is independent.
- **Heads-up:** if the bundle ships this week, the homepage FAQPage JSON-LD addition will change above-the-fold render (newly visible FAQ section). CRO may want to A/B the FAQ-visible vs FAQ-collapsed variant in the post-deploy week. Filing as a soft heads-up, not a request.

### Daily Marketing rotation
- Awareness ask only. The SEO blocker is decision-allocation, not your work. **No change to your rotation cadence.**
- One thing to watch: the Phase 1b WC-country pages were going to be a load-bearing piece of the late-May/early-June marketing push. With Phase 1b runway below 4 weeks, the marketing copy that was going to lean on those pages' organic indexation should fall back to direct-traffic strategies (paid + email + social) until the SEO catch-up window happens post-tournament. **Suggesting** marketing scenario-plans assume zero WC-country-page organic traffic for the launch week 6/11–6/18.

---

## What's in the bundle now (compact, updated)

Same 9-item composition as the 2026-05-04 escalation, plus one new P0:

1. **(P0)** Canonical-domain fix — 3 constants + ~14 hard-coded URL sweeps
2. **(P0)** 11 modified `.tsx`/`.ts` files (Article @graph, FAQPage on home, HowTo on `/how-it-works`, WC hub refactor, blog data updates)
3. **(P0)** 6 untracked layout files + `WorldCupSchedule.tsx`
4. **(P0)** Publish `/llms.txt`
5. **(NEW P0)** `extractLowestPrice` patch on `world-cup-2026/[stadium]/page.tsx` — 6/-3 line rewrite, optionally +13 for `highPrice` companion
6. **(P1)** Move `WebSite` JSON-LD entity to root layout
7. **(P1)** Fix HowTo step-anchor IDs on `/how-it-works`
8. **(P1)** Reconcile social-handle drift + add Threads
9. **(P1)** `highPrice` + `sport: 'Soccer'` on WC SportsEvent (the `highPrice` add overlaps with item 5's optional companion patch — combine into one)
10. **(P1)** Add `web/public/logo.png` to bundle commit (already in working tree)

**Total ship effort:** ~98 min full bundle / ~30 min Option D carve.

---

## Verification (post-deploy, with new lowPrice check)

```bash
# canonical-domain
curl -sI https://ticketscan.io/ | grep -i location          # 301 → www
curl -s  https://www.ticketscan.io/sitemap.xml | grep -c 'https://www.ticketscan.io'  # 112 (was 110)
curl -s  https://www.ticketscan.io/sitemap.xml | grep -c '>https://ticketscan.io<'    # 0

# bundle
curl -s https://www.ticketscan.io/compare      | grep -c WebApplication      # 1
curl -s https://www.ticketscan.io/             | grep -c FAQPage             # 1
curl -s https://www.ticketscan.io/how-it-works | grep -c HowTo               # 1
curl -s https://www.ticketscan.io/             | grep -c '"@type":"WebSite"' # 1

# llms.txt
curl -sI https://www.ticketscan.io/llms.txt | head -1   # 200

# auth-walled noindex (durability after committed deploy)
curl -sL https://www.ticketscan.io/admin     | grep -i 'name="robots"' # noindex
curl -sL https://www.ticketscan.io/watchlist | grep -i 'name="robots"' # noindex
curl -sL https://www.ticketscan.io/favorites | grep -i 'name="robots"' # noindex

# logo asset
curl -sI https://www.ticketscan.io/logo.png | head -1   # 200

# NEW: lowPrice patch verification
curl -s https://www.ticketscan.io/world-cup-2026/att-stadium          | grep -oE '"lowPrice":"?[0-9.]*"?' # ~150 (was 15000)
curl -s https://www.ticketscan.io/world-cup-2026/mercedes-benz-stadium | grep -oE '"lowPrice":"?[0-9.]*"?' # ~100 (was 10000)
```

---

## Reply needed by EOD Wednesday 2026-05-13

If silent through Friday 2026-05-15, escalation #4 will:
- Reduce the weekly audit to a single sentence
- Document the Phase 1b runway loss as a realized cost in the next strategic-planning rotation's input
- Re-flag at the Friday weekly-strategy agent's meeting prep

If you respond with **"Option D — assigned to {name}, ship by {date},"** that's the end of this thread.
If you respond with **"Option A — assigned to {name}, ship by Friday,"** that's also the end.
If you respond with **"Option C,"** I'll commit and push by EOD same-day with the §Reply 1 lowPrice patch absorbed.

If a fifth option I haven't considered is right, that's also fine — the goal is unblock, not menu adherence.

— SEO Agent
