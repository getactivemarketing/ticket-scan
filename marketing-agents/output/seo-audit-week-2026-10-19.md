# TicketScan SEO audit — week of 2026-10-19

Audit date: 2026-10-19  
Site: https://www.ticketscan.io  
Platform: Next.js 16, App Router, Vercel  
Audit mode: live crawl plus repository review

## Executive summary

The deployed site is materially larger than the weekly brief says: the live sitemap contains 744 URLs and a Firecrawl map found 745 internal URLs. The main technical foundations are healthy on sampled indexable routes: HTTPS works, robots.txt points at the sitemap, representative venue/team/city/World Cup/blog pages return 200, each sampled page has one H1, and canonicals are present.

The highest-impact problems are content accuracy and index governance, not URL mechanics:

1. **P0 — stale product claims are still public.** The live homepage, blog, venue data, World Cup data, and several templates still mention price tracking, price alerts, price history, “cheapest” claims, or price-derived recommendations. Product status says these claims are false and must not appear in public copy.
2. **P1 — the sitemap and crawl disagree.** `/tickets/miami/festivals` is internally linked and discovered but is not in the sitemap. Reconcile the combo index, sitemap generation, and qualifying-page policy.
3. **P1 — the site’s programmatic inventory is larger and more repetitive than the current brief assumes.** There are 242 venue pages, 261 team pages, 192 ticket/city/category pages, 22 blog posts, and 17 World Cup URLs. Additions should be gated by verified facts, live event availability, and unique page utility.
4. **P1 — performance evidence is incomplete.** The PageSpeed Insights API returned HTTP 429 quota exhaustion during this run, so Core Web Vitals are unverified. Do not report scores until a fresh PSI or CrUX run succeeds.
5. **P2 — query-shape expectations need documenting.** `/venues/madison-square-garden` and `/tickets/new-york/madison-square-garden` both return 404. The valid representations are `/venues/msg` and `/tickets/new-york`; this is acceptable if intentional, but should be explicit in architecture/content briefs to prevent invalid links.

## Scope and evidence

Checked live:

- `https://www.ticketscan.io/`
- `https://www.ticketscan.io/venues`
- `https://www.ticketscan.io/tickets`
- `https://www.ticketscan.io/faq`
- `https://www.ticketscan.io/how-it-works`
- `https://www.ticketscan.io/world-cup-2026`
- `https://www.ticketscan.io/sitemap.xml`
- `https://www.ticketscan.io/robots.txt`
- Representative venue, team, city, World Cup stadium, and blog URLs.

Repository evidence:

- `web/src/app/sitemap.ts`
- `web/src/app/robots.ts`
- `web/src/app/layout.tsx`
- `web/src/app/page.tsx`
- `web/src/app/venues/[slug]/page.tsx`
- `web/src/app/tickets/[slug]/page.tsx`
- `web/src/app/tickets/[slug]/[category]/page.tsx`
- `web/src/app/teams/[slug]/page.tsx`
- `web/src/data/blog.ts`, `web/src/data/worldcup.ts`, and venue/stadium/team-venue data.

The live map was collected with Firecrawl on 2026-10-19. A bounded route sample returned 14/15 HTTP 200 responses; one sampled blog request timed out at the TLS layer and should be retried, not treated as a 5xx. The two intentionally invalid MSG route guesses returned 404.

## Technical audit

### Crawlability and indexation

| Check | Result | Impact | Action |
|---|---|---:|---|
| robots.txt | 200; allows `/`; disallows account, event, API, admin, auth, and affiliate redirect paths; sitemap declared | Good | Keep, but regression-test after route changes |
| Sitemap | 744 URLs in the live XML | Good with mismatch | Compare generated sitemap set to crawl/discovered set in CI |
| Crawl discovery | 745 internal URLs; `/tickets/miami/festivals` is map-only | Medium | Decide whether the combo is eligible; if yes, add to sitemap, otherwise remove/label the link |
| Canonicals | Present on sampled homepage, hubs, venue, city, team, World Cup and FAQ pages | Good | Add an automated all-sitemap canonical check |
| H1 | One H1 on all sampled indexable routes | Good | Preserve this invariant |
| 404 behavior | Invalid MSG guesses 404 as expected | Low | Document canonical slugs and add redirects only if search logs show demand |
| Orphans | No obvious sitemap orphan from the sampled map; map/sitemap mismatch exists | Medium | Run a full link graph against sitemap and report zero inlinks |
| 404 internal links | No sampled internal 404 surfaced; invalid guessed MSG paths are external test cases | Medium | Crawl every internal href nightly, excluding dynamic affiliate redirects |

### Internal linking

The architecture has the right basic links:

- Venue pages link to their city page, related venue pages, teams, blog, and relevant conversion routes.
- City pages link to venue pages, category parents, combo pages, and adjacent ticket hubs.
- Team pages link to the team’s home venue, home city, league hub, event pages, and related content.
- World Cup stadium pages link to the World Cup hub, other stadium pages, venue pages, city pages, and the live search surface.

The weak point is consistency at scale. The homepage only exposes a small selection of city and venue links, while the directory pages carry much of the PageRank load. Keep explicit breadcrumbs and add a crawlable “related venues / nearby city / event category” module to any page that lacks one. Avoid adding broad footer links to all 744 URLs; that would create noise and dilute contextual signals.

### On-page metadata and structured data

Sampled metadata is generally strong and page-specific. Examples:

- Homepage: `TicketScan - Event Search, Venue Guides and Onsale Dates` with a clear discovery/onsale description.
- Venue: `Kia Center Tickets - Seating Guide and Onsale Dates | Ticket Scan` with capacity and venue-specific copy.
- City: `New York Event Tickets - Venues, Schedules and Onsales | Ticket Scan`.
- Team: `Arizona Cardinals Tickets — Schedule and Onsale Dates | Ticket Scan`.
- World Cup: the hub correctly says the tournament wrapped and presents results/venue guides, which is appropriate after 2026-07-19.

FAQPage, BreadcrumbList, Organization, and WebSite JSON-LD are present in the reviewed templates. Keep structured data limited to content actually visible on the page. Add an automated test that checks every FAQ JSON-LD answer matches rendered FAQ text.

### Mobile usability and performance

The HTML contains responsive Tailwind layouts and the viewport is configured correctly. This is a source-level positive, not a substitute for device testing.

PageSpeed Insights was attempted for the homepage on 2026-10-19 and returned HTTP 429 quota exhaustion. LCP, CLS, and INP are therefore **not measured in this audit**. Run PSI from an account/project with available quota and supplement it with Search Console CrUX where available. Prioritize the homepage, `/venues`, `/tickets`, one venue page, one team page, and one World Cup page.

### Duplicate and thin-content risk

The page families have useful unique inputs—venue capacity/sections, team identity and home/away schedule, city event feed, and World Cup stadium facts—but they also share repeated shells and repeated ticket-buying language. The risk is highest when:

- a city/category feed has few or no qualifying upcoming events;
- a team cannot resolve a verified attraction ID or has no meaningful schedule;
- a World Cup page retains stale event-time or resale-price copy after the tournament;
- a venue description is mostly a template paragraph with one changed noun.

The repository already has omission behavior for unresolved teams/venues and qualifying combo pages. Keep that rule. Do not create new pages merely to increase URL count.

## P0 content-governance findings

These are internal findings, but they require public-copy cleanup before SEO expansion:

- `web/src/data/blog.ts` contains price alerts, price history, price-trend analysis, “cheapest” claims attributed to TicketScan, and claims that TicketScan will notify users when prices drop.
- `web/src/data/worldcup.ts` contains historical/current resale-price claims and price-alert CTAs.
- Venue/stadium/team-venue descriptions repeatedly say TicketScan tracks onsales (valid) but also contain “cheapest/value” language that can be read as TicketScan-derived price intelligence; review each sentence for attribution.
- `web/src/app/page.tsx`, `web/src/app/layout.tsx`, and live metadata contain comparison/“best deals” positioning that should be limited to availability, seller links, fees, and general buying guidance.
- `web/src/app/admin/page.tsx` still contains price-drop labels. Admin UI is blocked from indexing, but it is operationally misleading and should be removed or marked unavailable.
- `web/src/lib/api.ts` and `PriceChart.tsx` still expose price-history APIs/components. They are not a crawlability issue, but their public rendering paths need a product-status gate.

Required copy rule for all new SEO pages: describe event discovery, seller availability, onsale/presale timing, venue facts, seating guidance, and general fee/safety advice. Do not claim TicketScan has price history, price trends, price alerts, buy/wait calls, or TicketScan-derived “cheapest” results.

## Prioritized recommendations

### P0 — this week

1. Remove or rewrite stale price/alert claims from blog and World Cup data before publishing or refreshing any page. Preserve general advice such as checking the seller’s all-in total and comparing section, delivery, and buyer-protection terms.
2. Add a content-status test that fails if public app/data files contain forbidden phrases from `marketing-agents/PRODUCT-STATUS.md`.
3. Change the homepage/blog metadata and visible copy from “track it,” “best deals,” or equivalent where the wording implies price tracking. “Save an event to revisit” and “find onsale dates” are accurate.

### P1 — next 1–2 weeks

4. Reconcile the sitemap and internal-link graph; specifically resolve `/tickets/miami/festivals`.
5. Add CI checks for: sitemap URL returns 200, canonical equals expected URL, one H1, no internal 404, and every generated page has at least one contextual inlink.
6. Run a full mobile PSI/CrUX pass after quota is available and record field/lab dates in the weekly report.
7. Add a clear “last checked” or “schedule source” label wherever live event feeds are rendered; seller inventory remains third-party and can change.

### P2 — next month

8. Build cluster hubs for cities, leagues/categories, venues, teams, and World Cup archive content with concise explanatory copy and curated links.
9. Add a “how to compare safely” content module to event/city pages: same event/date, section/row, delivery method, buyer guarantee, and final checkout total.
10. Retire or redirect stale World Cup acquisition pages into an evergreen results, venue, and travel/access archive rather than leaving outdated “buy now” language live.

## Handoff summary

- Content Agent: use `handoff-briefs-week-2026-10-19.md`; do not refresh price-alert or price-history articles until claims are rewritten.
- CRO Agent: use the same brief for homepage, venue, city, and World Cup CTA changes.
- Programmatic SEO plan: `programmatic-seo-expansion-2026-10-19.md`.
- AI search plan: `ai-seo-recommendations-2026-10-19.md`.
- Architecture plan: `site-architecture-review-2026-10-19.md`.

## Sources and rerun inputs

- Live site: https://www.ticketscan.io/
- Sitemap: https://www.ticketscan.io/sitemap.xml
- Robots: https://www.ticketscan.io/robots.txt
- Venue hub: https://www.ticketscan.io/venues
- Ticket hub: https://www.ticketscan.io/tickets
- FAQ: https://www.ticketscan.io/faq
- How it works: https://www.ticketscan.io/how-it-works
- World Cup hub: https://www.ticketscan.io/world-cup-2026
- Search visibility spot checks: `site:ticketscan.io compare ticket prices`, `site:ticketscan.io World Cup 2026 ticket tips`, and two generic ticket-comparison queries. TicketScan did not appear in the returned result sets; this is a spot check, not a ranking guarantee.

Rerun: crawl the live sitemap, compare sitemap URLs to discovered internal URLs, fetch metadata/canonicals/statuses, run PSI/CrUX when quota is available, and repeat the exact search spot checks.
