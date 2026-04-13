# Content Calendar — Week of April 14-20, 2026

## This Week's Audit (April 7-13)

### What shipped
| Date | Type | Title/Action | Status |
|------|------|-------------|--------|
| Apr 7 (Mon) | Blog post | "FIFA Just Pushed a World Cup Final Ticket to $10,990" | Published |
| Apr 8 (Tue) | Blog draft | "NBA and NHL Playoffs — How to Get Tickets Without Getting Gouged" | Drafted, NOT published |
| Apr 9 (Wed) | — | No blog draft produced | Gap |
| Apr 10 (Thu) | Venue refresh | TD Garden — expanded 6 to 63 sections, added playoff keywords | Committed |
| Apr 11 (Fri) | Venue refresh | Wells Fargo Center — expanded 5 to 61 sections, added playoff keywords | Committed |
| Apr 12 (Sat) | — | No refresh produced (should have been refresh day) | Gap |
| Apr 13 (Sun) | Audit + plan | This document | Done |

### What worked
- **World Cup dynamic pricing piece (Apr 7)** — strong topic, timely with Last-Minute Sales Phase launch. Good data ($10,990 final, 38% increase). Voice is on-brand: consumer advocate, not clickbait.
- **Venue refreshes (Apr 10-11)** — TD Garden and Wells Fargo Center now have production-quality section data (63 and 61 sections respectively). Playoff keyword additions are well-timed for April search spikes.
- **SEO schema fixes (Apr 13)** — Agent 2 fixed invalid Blog schema, removed duplicate FAQPage on homepage, added OG/Twitter cards to FAQ and How It Works. Build verified. Good technical SEO progress.
- **Content hooks** — daily hooks have been consistent and actionable with clear keyword targets.
- **Social content calendar** — loaded through April 26 with 4 posts/day across Twitter, Instagram, Threads, and TikTok. Voice is consistent and data-driven.

### What didn't work / gaps
- **Wednesday blog draft missing** — schedule calls for a news/timely piece. Nothing produced. Missed a high-news week (FIFA Last-Minute Phase, playoff races).
- **Thursday blog draft missing** — no comparison/listicle piece. Two missed blog slots in one week.
- **Saturday refresh skipped (Apr 12)** — no venue or city page updated. Chase Center, United Center, or an LA city page were good candidates.
- **Playoff blog draft STILL unpublished** — the Apr 8 draft has been sitting in output/content/ for 5 days. Playoffs are now underway. This is the most urgent action item. **Must publish immediately on Monday.**
- **Only 1 blog post published this week** vs. the target of 4. Content velocity was 25% of plan.
- **SMTP pipeline still broken (Day 6+)** — per Email Agent, zero drip emails have EVER been sent. 20 users in backlog. This isn't a content problem but it means our blog content has no email distribution channel.
- **No featured images in blog data** — SEO Agent flagged that blog posts have no `image` field, reducing Article schema rich snippet eligibility and social sharing quality.

### Copy review of queued content

**"NBA and NHL Playoffs" blog draft (Apr 8):**
- Quality: Strong. Voice matches brand perfectly — data-driven, consumer advocate, slightly irreverent.
- Frontmatter: All fields present, slug is clean (`nba-nhl-playoff-tickets-2026-buying-guide`), excerpt under 200 chars.
- Issue: `category: news` should be `category: guides`. This is an evergreen buying guide with a timely hook, not a news piece. The content is instructional (playbook structure, timing advice, fee breakdowns).
- Highlight: "Same game. Same row. Different price depending on where you click 'buy.'" — excellent line.
- CTA at end links to /watchlist and /compare. Both correct.
- No unescaped backticks or template literal issues.
- **Verdict: Ready to publish. Change category to `guides`. Do it Monday morning.**

**Social content calendar (Apr 13-26):**
- Reviewed all 40+ posts across Twitter, Instagram, Threads, and TikTok.
- Voice is consistent: data-driven, specific price examples, consumer-advocate tone.
- Twitter posts are appropriately concise with strong hooks. Good mix of price-gap stats, event-day urgency, and World Cup countdown.
- Instagram posts are slightly long but within acceptable range. Each includes CTA ("Link in bio") and relevant hashtags.
- Issue: All Instagram posts reference the same `ig-template.png` image. Need variety — at least 2-3 image templates rotating.
- Issue: "#SoccerTickets" tag on several Instagram posts feels off for US audience. Recommend "#FootballTickets" or drop entirely.
- Threads posts are good conversational tone — the right platform voice.
- TikTok script (Apr 12) reads well for voiceover format.
- **Verdict: Approved for posting. Minor hashtag adjustment needed on Instagram.**

**Email digest templates (Apr 12):**
- Three urgency-tiered templates (same-day, 5-day, 2-week) are well-structured.
- Subject line A/B tests are thoughtful with clear hypotheses.
- All blocked by SMTP outage. Templates are ready to send when pipeline is fixed.
- **Verdict: Copy approved. Blocked by infrastructure.**

**Ads creative (Apr 12):**
- Three variations generated (event-day, playoffs, World Cup resale). Copy is on-brand.
- All blocked by lack of conversion tracking and ad platform setup.
- **Verdict: Copy approved. Blocked by infrastructure.**

**SEO Agent output (Apr 13):**
- Schema fixes are technically sound: Blog type corrected, duplicate FAQPage removed, OG cards added.
- Remaining backlog is reasonable (World Cup main page schema, image properties, geo coordinates).
- Content request: blog posts need `image` field in blog.ts. This should be a standing task for all new posts.
- **Verdict: Good technical progress. Image field is a valid request — add to blog template requirements.**

---

## Next Week's Blog Plan (April 14-20)

### Monday, April 14 — Big-Idea Piece
**Title:** "When to Buy World Cup 2026 Tickets: A Data-Backed Guide (59 Days Out)"
**Slug:** `when-to-buy-world-cup-2026-tickets`
**Category:** `guides`
**Angle:** The definitive timing guide for World Cup ticket purchases. Cover: FIFA direct vs. resale pricing trends since the Last-Minute Sales Phase launched April 1, which venues still have near-face-value inventory (BC Place, Lumen Field for group stage), the host-city cost matrix (tickets + travel + lodging), and historical data on when FIFA tournament ticket prices dip. Use comparison data as the throughline — "official" is not always cheapest.
**Why now:** SEO Agent Request #1 (high priority). 59 days out. Last-Minute Sales Phase is 13 days old with enough data to analyze. Congressional pricing controversy adds timeliness.
**Target keywords:** "when to buy World Cup 2026 tickets," "World Cup 2026 ticket prices," "cheapest World Cup tickets"
**Internal links:** /world-cup-2026/, individual stadium pages, /compare
**Word count target:** 1000-1200

### Tuesday, April 15 — Tactical/How-To
**Title:** "NBA Playoff Tickets 2026: How to Compare Prices and Save $40+ Per Seat"
**Slug:** `nba-playoff-tickets-2026-compare-prices`
**Category:** `tips`
**Angle:** Playoffs are underway. Walk fans through the exact comparison workflow: check all platforms, account for fees, set alerts for price dips in the 4-6 hour pre-game window. Include specific examples from Round 1 matchups with real price gaps. Reference the Apr 8 buying guide for deeper strategy.
**Why now:** NBA Play-In started Apr 14, Round 1 imminent. Maximum search intent for "NBA playoff tickets" keywords.
**Target keywords:** "NBA playoff tickets 2026," "NBA playoff tickets compare prices," "cheap NBA playoff tickets"
**Internal links:** /compare, /watchlist, relevant venue pages, Apr 8 buying guide blog post
**Word count target:** 800-1000

### Wednesday, April 16 — News/Timely
**Title:** "FIFA's Resale Marketplace vs. StubHub vs. SeatGeek: Where World Cup Tickets Are Actually Cheapest"
**Slug:** `fifa-resale-vs-stubhub-seatgeek-world-cup-2026`
**Category:** `comparisons`
**Angle:** FIFA's resale marketplace is 14 days old. Compare it head-to-head against StubHub and SeatGeek for specific World Cup matches. Pull real pricing examples across 3-4 matches at different venues. Show where "official" resale is more expensive than third-party — the dirty secret. Congressional pricing backlash adds context.
**Why now:** FIFA resale opened April 2. Two weeks of data enables real comparisons. Validates TicketScan's multi-platform approach.
**Target keywords:** "FIFA resale marketplace," "World Cup tickets StubHub vs SeatGeek," "cheapest World Cup 2026 tickets where to buy"
**Internal links:** /world-cup-2026/, /compare, Apr 7 dynamic pricing blog post
**Word count target:** 1000-1200

### Thursday, April 17 — Comparison/Listicle
**Title:** "Best Ticket Comparison Sites in 2026: An Honest Breakdown"
**Slug:** `best-ticket-comparison-sites-2026`
**Category:** `comparisons`
**Angle:** SEO Agent Request #2. Objective comparison of ticket comparison tools: TicketScan, SeatPick, TicketWhiz, Google Events, and direct-platform search. Pros/cons format. Be honest about competitors' strengths — credibility matters more than a hard sell. Position TicketScan's unique advantages (price history, cross-platform alerts, World Cup coverage). Also serves as a high-value paid ads landing page.
**Why now:** "Best ticket comparison sites" is a commercial investigation keyword with consistent search volume. No existing content targets it.
**Target keywords:** "best ticket comparison sites," "ticket price comparison tools 2026," "TicketScan vs SeatGeek"
**Internal links:** /dashboard, /compare, /how-it-works
**Word count target:** 1000-1200

### Friday, April 18 — Page Refresh
**Target:** Chase Center (Golden State Warriors)
**Why:** Warriors are in the playoffs. Chase Center section data is likely sparse (similar to TD Garden pre-refresh). "Warriors playoff tickets" and "Chase Center seating chart" are high-intent seasonal keywords. Bay Area is a premium market.
**Scope:** Expand sections to full layout, enhance description, add playoff keywords, ensure internal links to related city/blog pages.

### Saturday, April 19 — Page Refresh
**Target:** United Center (Chicago Bulls / Blackhawks) or "new-york-concerts" city page
**Why:** United Center hosts two potential playoff teams. If neither is in, fall back to NYC concerts page which captures Broadway + Madison Square Garden + Barclays Center traffic — consistently high volume.
**Scope:** Same pattern as Chase Center refresh.

---

## Immediate Actions (Priority Order)

1. **PUBLISH the Apr 8 playoff buying guide** — change `category: news` to `category: guides`, then run `./marketing-agents/scripts/publish-draft.sh 2026-04-08-nba-nhl-playoff-tickets-2026-buying-guide.md`. This is 5 days overdue and playoffs are happening NOW.
2. **Add `image` field requirement** to blog draft template — all new posts should include a featured image path for Article schema and social sharing.
3. **Post today's social content** — 4 posts scheduled for Apr 13 (2 Twitter, 1 Instagram, 1 Threads).
4. **Rotate Instagram images** — request 2-3 additional templates beyond `ig-template.png` for visual variety.
5. **Fix Instagram hashtags** — replace "#SoccerTickets" with "#Football" or remove on US-audience posts.

## Cross-Agent Notes

- **SEO Agent:** Both SEO content requests (World Cup timing, best comparison sites) are slotted for Mon and Thu. Mark as scheduled. Blog image field is a valid request — adding to template requirements.
- **Social Agent:** Monday's World Cup piece and Tuesday's NBA piece should each generate 2-3 social posts. Wednesday's FIFA resale piece is the strongest social hook of the week. Coordinate day-of.
- **Email Agent:** The playoff blog (once published) is a strong candidate for newsletter send to watchlist users with playoff events. BUT: SMTP is still broken (Day 6+). Escalate to Lead Architect.
- **Paid Ads Agent:** Wednesday's FIFA resale comparison and Thursday's "best comparison sites" piece are both high-intent landing page candidates for paid search. Ready when conversion tracking is live.
- **CRO Agent:** Target price adoption is still 0% across 72 watchlist items. This blocks price alerts entirely. Needs UX fix (auto-suggest target price on add).
