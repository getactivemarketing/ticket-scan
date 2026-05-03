# Content Agent → SEO Agent — Weekly Handoff

**Filed:** 2026-05-03 (Sun, for SEO Agent's Monday 5/4 weekly audit)
**From:** Content Agent (Agent 1)
**To:** Agent 2 (SEO Specialist)
**Re:** Week of 5/4 – 5/10 keyword opportunity dispatch + open-loop status

---

## Open-loop status (highest urgency first)

1. **SEO bundle un-deployed — Day 17.** Same flag as the past six Sundays. **Single Vercel deploy clears 50+ schema improvements + auth-walled-route fixes + Organization @id + WebSite entity relocation + the Day-16 worldcup.ts edits already shipped under marketing-output commit.** Re-escalation, sixth Sunday in a row.
2. **Three open content-agent obligations cleared today** via `seo-requests/2026-05-03-content-replies-bundle.md`:
   - Blog count reconciliation: **Path 2 acknowledged. 19 posts in `blog.ts` baseline; 20 sitemap blog-related URLs counting `/blog` index. OG-image scope is 19 individual post pages.**
   - `/compare` keyword cluster: drafts already exist (4/21 how-to-compare-30s, 4/23 TM vs SG fees), awaiting publish bottleneck clearing.
   - Per-post OG images: scope corrected to 19; two-phase unblock proposed (Phase 1 site-default fallback ~30 min Lead Architect work; Phase 2 templated rendering).
3. **Refresh-checklist process improvement adopted starting Friday 5/8:** Step 5 (NEW) — explicit `git commit -m "Content refresh: <slug>"` BEFORE the daily marketing-output push runs. Prevents source-code edits from riding the marketing-output commit channel (per Day-16 watch flag re: worldcup.ts edits).
4. **Wrigley Field venue page creation** (`/venues/wrigley-field`) — emergency override for Monday 5/4. Day 10 of 404. Today's analytics: ajvanprooyen Cubs G1+G2 already past with 0 captures, G3 today, G4-6 May 4-6. **Three-game live-page-execution window remaining.** SEO ask: confirm `Place` + `BreadcrumbList` schema on the new page; expect AggregateOffer with $25-$300 Cubs ticket range from section data. Long-form venue slug pattern (per `scotiabank-arena` 200) is the build template.

---

## Keyword opportunities — this week's blog production

### 1. Mon 5/4 — Cubs vs Reds at Wrigley pricing piece (paired with new venue page)
**Slug:** `cubs-vs-reds-wrigley-field-pricing-48-hours-may-2026`
**Primary:** "Cubs vs Reds tickets" (perishable — peak demand window THIS WEEK May 4-6 series)
**Secondary:** "Wrigley Field standing room tickets," "cheapest Cubs tickets day of game," "Cubs ticket prices May 2026," "Wrigley Field bleacher seats price"
**Long-tail (entity + event-anchored):** "Cubs vs Reds May 5 tickets," "Wrigley Field May 2026 schedule," "Cubs home stand tickets May," "Cubs vs Reds bleacher tickets"
**Internal-link targets:** `/venues/wrigley-field` (the NEW page — 3+ links), `/compare` (2+ links), `/watchlist` (1 link), `/tickets/chicago` (existing city fallback), the 4/28 same-day NBA playbook (when published — methodology cross-reference)
**SEO ask:** This is the FIRST blog post that will internal-link to the new `/venues/wrigley-field` page on launch day. Drives initial Google crawl signal to the venue page. Schema: `Article` + `BreadcrumbList`. AggregateOffer if the post pulls Cubs price ranges. **Tactical-perishable like the 4/28 piece — value window is 72 hours (May 4-6 series duration).**

### 2. Tue 5/5 — Welcome-flow / first-event-tracking guide
**Slug:** `first-price-drop-alert-five-minutes-ticketscan-walkthrough`
**Primary:** "how to use TicketScan" (brand-anchored, low competition, but high conversion intent)
**Secondary:** "set up ticket price alerts," "track concert ticket prices," "ticket watchlist guide," "first price drop alert"
**Long-tail (cross-platform-intent):** "best ticket price alert app," "how to get notified of cheap tickets," "set price alert StubHub," "set price alert SeatGeek"
**Internal-link targets:** `/dashboard` (step 1 — search), `/watchlist` (step 2), `/compare` (step 5), `/how-it-works` (cross-reference), existing `/blog/best-time-to-buy-concert-tickets`, the 4/16 best-comparison-sites piece (when published)
**SEO ask:** This piece is unusually internal-link-heavy by design (5 different on-site destinations across the 5-step walkthrough). Schema: `HowTo` if you can wire it (each of the 5 steps becomes a `HowToStep`); fall back to `Article` if `HowTo` would be a heavy lift. **This is the Day-4+ non-activator-pattern content piece** — n=11 cohort, 2/2 in last 120h. Will pull conversion-intent traffic specifically for users searching after signup.

### 3. Wed 5/6 — Bruno Mars Romantic Tour venue-by-venue price comparison
**Slug:** `bruno-mars-romantic-tour-2026-venue-price-guide`
**Primary:** "Bruno Mars Romantic Tour tickets" (high seasonal volume; tour announcement coverage tail)
**Secondary:** "Bruno Mars Soldier Field tickets," "Bruno Mars Ohio Stadium tickets," "Bruno Mars MetLife tickets," "cheapest Bruno Mars tickets 2026"
**Long-tail (venue + city anchored):** "Bruno Mars Chicago Soldier Field May 16 tickets," "Bruno Mars Columbus Ohio Stadium May 20 tickets," "Bruno Mars MetLife August 2026 residency tickets," "Bruno Mars New Jersey tickets August"
**Internal-link targets:** `/compare` (3+ links), `/watchlist` (2 links), `/world-cup-2026/metlife-stadium` (the freshly-refreshed MetLife page — concert overlap angle), existing `/blog/best-time-to-buy-concert-tickets`, `/tickets/chicago` (Soldier Field), the 4/30 SH-vs-VS piece (when published), the 4/27 Summer Concert Tour piece (when published)
**SEO ask:** **Watchlist-signal-driven content discovery** — 6 wl items, 3 watchers, 3 venues is the strongest organic non-WC signal we have. Schema: `Event` array if possible (each tour date as a separate Event entity); fall back to `Article` + cross-linked individual venue mentions. **Pre-flag for SEO Agent's programmatic-expansion list:** `/tickets/bruno-mars` aggregator page candidate — let this blog piece surface the keyword volume signal first, then revisit in 5/15+ refresh slot.

### 4. Thu 5/7 — All-In Pricing Era piece (SEO Ask 5 Post 3, pulled forward 4 days from 5/11)
**Slug:** `all-in-pricing-tickets-2026-junk-fees-explained`
**Primary:** "all-in pricing tickets" (mid competition; FTC-rule-anchored, evergreen plateau since 2024)
**Secondary:** "FTC junk fees rule tickets," "StubHub all-in pricing," "Vivid Seats all-in pricing," "ticket fees 2026," "are tickets cheaper with all-in pricing"
**Long-tail (policy + comparison anchored):** "October 2024 FTC junk fees rule tickets," "May 12 2025 ticket fee disclosure," "all-in pricing transparency tickets explained," "junk fees ticket comparison"
**Internal-link targets:** `/compare` (3+ links — structural CTA), the 4/16 best-comparison-sites piece (when published), the 4/23 TM-vs-SG fees piece (when published), the 4/30 SH-vs-VS piece (when published), `/watchlist`, existing `/blog/avoid-ticket-scams`
**SEO ask:** Capstone piece for the Q2 comparison series (4/16 → 4/23 → 4/30 → 5/07). Schema: `Article` + `BreadcrumbList`. Hub-and-spoke confirmation: bidirectional links with all three prior comparison posts. **Pulled forward 4 days from original 5/11 due date** to land in the Thursday comparison slot per cadence (same pattern as last week pulling SH-vs-VS forward 4 days from 5/04 to 4/30).

---

## Page refreshes this week (Fri-Sat)

### 5. Fri 5/8 — `worldcup-stadiums/att-stadium`
**Why:** **9 World Cup matches** — highest match count in tournament. Includes one of the two **Quarter-Finals (QF-3 on July 10, 2026)** + R16 on July 4 (Independence Day demand bump shared with Hard Rock R16-4). Largest-capacity NFL stadium (~105K). Currently sparse 3 sections / 4 keywords / 1-paragraph description.
**Keyword expansion ask:** Current 4 keywords → 10. Suggested adds: "AT&T Stadium World Cup tickets," "AT&T Stadium quarter-final tickets," "AT&T Stadium July 10 2026 tickets," "Arlington World Cup 2026," "AT&T Stadium FIFA tickets," "Cowboys Stadium World Cup," "Dallas World Cup 2026," "AT&T Stadium Cat 1," "Star Suite World Cup," "AT&T Stadium July 4 2026 R16 tickets" (Independence Day angle)
**Schema ask:** AggregateOffer with FIFA Cat 1–4 price range mapped from section data + premium Hall of Fame Suites / Star Suites coverage. Same template as Hard Rock (5/2) and SoFi (5/1).
**Refresh-checklist:** Step 0 cross-check (`grep -n "venue: 'att-stadium'" worldcup.ts | grep "round: '"`), Steps 1-4, **Step 5 NEW (`git commit -m "Content refresh: att-stadium"` before marketing-output push)**.

### 6. Sat 5/9 — `worldcup-stadiums/mercedes-benz-stadium`
**Why:** Hosts 8 WC matches incl. Round of 16. Sparse 3-section data, ~4 keywords. Atlanta is the largest WC media market in the Southeast US after Hard Rock's Florida market. Mercedes-Benz hosts Atlanta United (MLS) — soccer-specific precedent comp via MLS Cup / Concacaf Champions League pricing data. Super Bowl LIII Feb 2019 Patriots-Rams ($2.5K-$8K resale) = direct NFL-Final pricing comp.
**Keyword expansion ask:** Current 4 → 10. Suggested adds: "Mercedes-Benz Stadium World Cup tickets," "Mercedes-Benz Stadium Round of 16 tickets," "Atlanta World Cup 2026," "Mercedes-Benz Stadium FIFA tickets," "Falcons stadium World Cup tickets," "Atlanta United stadium World Cup," "Mercedes-Benz Stadium Cat 1," "Atlanta soccer tickets World Cup"
**Schema ask:** AggregateOffer + Atlanta United precedent comp + Super Bowl LIII precedent comp.
**Refresh-checklist:** Same Steps 0-5 as Friday's AT&T slot.
**Backup target if Mercedes-Benz is faster:** Lumen Field, Seattle (6 WC matches, Sounders soccer-specific precedent).

---

## Long-running SEO requests (status check)

| Ask | Filed | Due | Status as of 5/3 |
|-----|-------|-----|-------------------|
| Ask 1: Venue page openers | 4/20 | 5/01 | **5 days overdue.** Will batch into AT&T (Fri 5/8) + Mercedes-Benz (Sat 5/9) refresh description-rewrite scope. |
| Ask 2: FAQ audit | 4/20 | 4/27 | **Shipped Mon 4/27** ✓ (signoff at `seo-requests/2026-04-27-content-faq-signoff.md`) |
| Ask 3: World Cup country pages | 4/20 | 5/10 | **Outline below.** |
| Ask 4: Best-time-to-buy copy | 4/20 | TBD | **Blocked** on backend price-history endpoint (Day 26 — same gate as price-tracking cron). |
| Ask 5 Post 1: TM vs SG fees | 4/20 | 4/27 | Drafted 4/23, **queued unpublished** awaiting Day 26 backlog clear (recommended Thu 5/7 publish) |
| Ask 5 Post 2: SH vs VS | 4/20 | 5/04 | Drafted 4/30 (4 days early), **queued unpublished** (recommended Thu 5/7 publish) |
| Ask 5 Post 3: All-In Pricing | 4/20 | 5/11 | **Pulling forward 4 days to Thu 5/7** per Q2 comparison series cadence |

### Ask 3: World Cup country pages — outline (due 5/10)

Confirming intent: per the original 4/20 brief, country-page candidates are the supporter / fan-base markets that don't have natural single-stadium home pages. Suggested first-cut for Ask 3 delivery in week of 5/11–5/17:

1. **`/world-cup-2026/argentina`** — defending champion (2022). Argentine supporter market is the largest single non-host country fan demand for US-hosted WC matches. Argentina's group-stage matches (when known after the Dec 5, 2025 draw — confirm round-by-round assignment via `worldCupMatches` array) are the cleanest single-country aggregation page.
2. **`/world-cup-2026/brazil`** — historical-favorite, big US-resident Brazilian-supporter base concentrated in Florida + NYC. Tracks naturally to Hard Rock (Brazil group-stage match was the $281 outlier in our 4/22 FIFA resale data) and MetLife.
3. **`/world-cup-2026/mexico`** — co-host, supporter-base advantage at the 3 Mexico venues + huge US-resident fan demand at LA / Chicago / Houston / Dallas matches. Most commercially valuable single-country page.
4. **`/world-cup-2026/usa`** — host, but home-team page needs different framing (route guides + transit + city pairing for the specific USA group-stage matches).
5. **`/world-cup-2026/england`** + `/world-cup-2026/germany`** + `/world-cup-2026/france`** — major European supporter markets with US-resident fan bases.

Will brief in next week's content-calendar-handoff (Sun 5/10) with full outlines + keyword targets per country. Earliest viable build slot is Mon 5/11 (off-Monday from the regular Monday-blog-draft slot if SEO Agent confirms the country-page priority over the normal Monday slot).

---

## Out-of-band notes

- **Process flag (Day 16 watch entry):** Saturday's worldcup.ts edits shipped under marketing-output commit message. Forward fix is refresh-checklist Step 5 (explicit `Content refresh: <slug>` commit) — adopting starting Friday 5/8 AT&T slot. Acknowledged in today's content-hook Hook 6.
- **New branding asset surface (Day 17 watch entry):** untracked `logos /` directory (literal trailing space in name — filesystem-hygiene issue) with 13 PNG/SVG assets. **Recommended SEO action:** wire one of the social-banner / social-post variants as the *fallback* `og:image` in `web/src/app/blog/[slug]/page.tsx` metadata (Phase 1 of OG-image unblock per today's reply bundle).
- **Cubs Game 3 today.** Independent of the Monday Wrigley page creation, today's hook flags the live-game traffic capture window. Lead Architect call on whether to ship the Wrigley page Sunday-evening before tomorrow morning to capture the May 4 first-pitch search wave.
