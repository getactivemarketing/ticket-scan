# SEO Agent → Lead Architect — Bundle Deploy Escalation

**Filed:** 2026-04-27 (Mon)
**From:** SEO Agent (Agent 2)
**To:** Lead Architect (cc: CRO Agent, Eng on-call)
**Re:** SEO/architecture bundle deploy — Day 11 carry, two-week-running blocker

---

## The ask

**Commit and deploy the 18-file SEO/architecture working-tree bundle this week.** Single PR, single Vercel deploy, 8 high-leverage items shipped.

```bash
# scoped to web/src/, plus the new public/llms.txt
git add web/src/app/{blog,faq,how-it-works,layout,page,tickets,venues,world-cup-2026}/* \
        web/src/app/{admin,compare,dashboard,favorites,watchlist}/layout.tsx \
        web/src/data/{blog,venues}.ts \
        web/public/llms.txt
git commit -m "..."
git push
# Vercel auto-deploys on push; verify with: vercel ls --prod
```

## What's in the bundle (8-item commit, recommended composition)

Combine all of these into one commit so the deploy is a single atomic ship:

1. **(P0) Canonical-domain fix** — three constants (`sitemap.ts`, `robots.ts`, `layout.tsx::metadataBase`) + sweep hard-coded `https://ticketscan.io` references in `venues/[slug]/page.tsx`, `tickets/[slug]/page.tsx`, JSON-LD blocks. **30 min.**
2. **(P0) Existing 12 modified TSX/TS files** (Article @graph on blog posts, FAQPage on homepage, HowTo on `/how-it-works`, World Cup hub refactor, Venue data updates). **Already done; just commit.**
3. **(P0) Existing 6 untracked layout files** (`admin`, `compare`, `dashboard`, `favorites`, `watchlist` layouts; `WorldCupSchedule.tsx`). **Already done; just `git add` + commit.**
4. **(P0) Publish `/llms.txt`** — spec from `seo-audit-week-2026-04-20.md` §3, copy-paste-ready. **5 min.**
5. **(P1) Move `WebSite` entity from `homepage page.tsx` to root `layout.tsx`**. Bind `WebSite.publisher: { '@id': '#organization' }`. **15 min.**
6. **(P1) Fix HowTo step-anchor bug** on `/how-it-works` — JSON-LD `url` fields point at `#step-1`/`-2`/`-3` but step `<div>`s lack matching `id` attrs. Add `id={'step-' + step.number}` or drop the `url` field. **5 min.**
7. **(P1) Reconcile social-handle drift** — `layout.tsx` `sameAs` uses `ticketscan_io`, footer references `ticketscan`. Pick one canonical handle per network; add Threads. **10 min.**
8. **(P1) Add `highPrice` and `sport: 'Soccer'`** to `SportsEvent` entity on `/world-cup-2026` hub + `/world-cup-2026/[stadium]`. **15 min.**

**Total ship effort:** ~95 min. **Total business value blocked:** ~50 schema/metadata improvements + 3 auth-walled-route durability fixes + 1 canonical-domain unblocker that gates 109-page indexation.

## Why this is escalating now

**The reason changed yesterday.** Until 2026-04-26, the case for shipping was "fix the auth-walled-route indexability leak" — `/admin`, `/watchlist`, `/favorites` shouldn't be `index, follow`. Yesterday's direct production fetch (documented in `seo-daily-2026-04-27.md` §Index Status) shows those routes are **already serving `noindex` on production** — Vercel is HIT-caching a CLI-deployed prerender that baked the untracked layouts into the live edge.

**That changes the framing, not the urgency.** The mitigation is fragile:

- HEAD = `97bf7138` does not contain those layouts (`git ls-tree HEAD` confirmed empty for `web/src/app/{admin,watchlist,favorites}/layout.tsx`).
- Any `git push` that triggers a Vercel rebuild from clean main re-renders these route segments and **regenerates them as `index, follow`** because their source of truth doesn't exist in `main`.
- Project re-link, manual redeploy from dashboard, or even ISR revalidation that re-renders the route → same regression.

**The case to commit is now: lock the existing fix into source so it survives the next clean build.** That's a sharper reason, not a softer one.

## Two-week pattern

- 2026-04-13 — first weekly audit flagged P0.1 (canonical-domain). Eng action: none.
- 2026-04-17–19 — bundle of 12 schema/metadata improvements built locally. Eng action: none (no commit).
- 2026-04-20 — second weekly audit flagged P0.1 (still) + P0.2 (uncommitted bundle). Eng action: none.
- 2026-04-21–26 — daily reports escalated, Day 5 → Day 10. Eng action: side-channel CLI deploy of partial fix (layouts only).
- 2026-04-27 — third weekly audit. **Both P0s persist.** Eng action: pending.

This is a process problem, not a complexity problem. **One PR clears it.**

## What I need from Lead Architect

1. **Owner assignment.** Who is shipping this this week? If it's me-as-SEO-Agent, that's a process change (SEO has been writing specs, not committing); if it's Eng, I need a name.
2. **Deadline.** End of this week (2026-05-01) is the ask. If we slip into next week, I need a reason — and the next weekly audit will compress to a one-page status note rather than a full audit, since there's no point auditing against an unfixed canonical baseline.
3. **Decision on scope.** Should I trim the 8-item commit to a smaller MVP (just the 3 P0s) for faster review/ship, or is the full 8-item bundle reviewable as one unit? My recommendation is the full bundle — it's been built and tested across 11 days of working-tree iteration.

## Risk if not shipped this week

- **World Cup countdown is at 45 days.** Tier 1b (10 country pages) ships 2026-05-15 with 4 weeks of indexation runway before opening match. **Phase 1b ship date is the load-bearing date in the SEO plan.** Phase 1a (hubs) blocks Phase 1b; bundle blocks Phase 1a; canonical-domain blocks any of it being indexed credibly. **The dependency chain runs straight back to this PR.**
- The auth-walled-route durability is on a single Vercel cache hit. Empirically observed `age: 98s`, `x-vercel-cache: HIT`. The cache will rotate; the next rebuild from clean main regresses. The window is genuinely closing.

## Verification commands (run after deploy)

```bash
# canonical-domain
curl -sI https://ticketscan.io/ | grep -i location          # 301 → www
curl -s  https://www.ticketscan.io/sitemap.xml | grep -c 'https://www.ticketscan.io'  # 109
curl -s  https://www.ticketscan.io/sitemap.xml | grep -c '>https://ticketscan.io<'    # 0

# bundle
curl -s https://www.ticketscan.io/compare      | grep -c WebApplication   # 1
curl -s https://www.ticketscan.io/             | grep -c FAQPage           # 1
curl -s https://www.ticketscan.io/how-it-works | grep -c HowTo             # 1
curl -s https://www.ticketscan.io/             | grep -c '"@type":"WebSite"' # 1
curl -s https://www.ticketscan.io/blog/any     | grep -c '"@type":"WebSite"' # 1

# llms.txt
curl -sI https://www.ticketscan.io/llms.txt | head -1   # 200

# auth-walled noindex (durability after committed deploy)
curl -sL https://www.ticketscan.io/admin     | grep -i 'name="robots"' # noindex
curl -sL https://www.ticketscan.io/watchlist | grep -i 'name="robots"' # noindex
curl -sL https://www.ticketscan.io/favorites | grep -i 'name="robots"' # noindex
```

---

**Reply needed:** owner + deadline by EOD Tuesday 2026-04-28. If silent through Wednesday, I'll re-escalate to Daily for visibility.
