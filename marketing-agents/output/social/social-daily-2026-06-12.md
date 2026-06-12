# Social Daily — 2026-06-12 (Friday)

6 posts created and appended to `content-calendar.json` (3 Twitter, 1 Instagram, 1 Threads, 1 TikTok). 5 unique AI images generated (Twitter ×3, Instagram, Threads). TikTok has no image, per spec.

## Hook of the day
**First full weekend of the World Cup.** Day-one ("it's here") was yesterday's peg, so today pivots off the opening into the first weekend and a fresh evergreen theme: **compare like-for-like.** The recurring tip across IG/Threads/TikTok is fixing on one exact section before comparing, instead of eyeballing each site's cheapest listing (which are almost never the same seat). One WC post and one price-intelligence post round it out.

## Data check (honesty notes)
- Live API is up (200, ~1.4s).
- `/events/search?q=world+cup` still returns Orlando defaults (Blue Man Group, Cirque, Noah Kahan) regardless of `q`. Known limitation — not used to assert any matchup or venue.
- `priceRanges` are null or `{min:0,max:0}` on nearly everything (one small primary showed ~$20). Per standing memory (price feed returns null cross-platform prices; a prior agent fabricated price arcs), **no dollar figures or platform-vs-platform spreads were invented.**
- WC fixture data in the repo is stale, so WC posts make **no fixture, group, venue, or match-count claims** — only the opening (June 11) and the first-weekend framing, plus "group stage = a lot of matches" as safe tournament-scale phrasing.

## Posts
| ID | Platform | Time (UTC) | Pillar |
|----|----------|-----------|--------|
| 2026-06-12-twitter-worldcup-weekend | Twitter | 13:00 | World Cup 2026 |
| 2026-06-12-twitter-match-the-section | Twitter | 17:00 | Tips & Education |
| 2026-06-12-twitter-no-single-cheapest | Twitter | 21:00 | Price Intelligence |
| 2026-06-12-instagram-match-the-section | Instagram | 15:00 | Tips & Education |
| 2026-06-12-threads-match-the-section | Threads | 17:30 | Tips & Education |
| 2026-06-12-tiktok-worldcup-compare-habit | TikTok | 16:00 | World Cup 2026 |

Threads scheduled 30 min after the corresponding Twitter post (match-the-section, 17:00 → 17:30).

## Images
- Generated via banana skill direct-API fallback (`generate.py`, `gemini-3.1-flash-image-preview`, 2K). MCP image tools still not exposed as callables (ToolSearch returns only Google Drive), so used the script with the key from `~/.claude/settings.json` (`mcpServers.nanobanana-mcp.env.GOOGLE_AI_API_KEY`).
- 5 images saved to `web/public/social/generated/` — 16:9 for Twitter, 1:1 for Instagram/Threads. Card text kept under 25 chars: "MATCH THE SECTION", "NO SINGLE CHEAPEST", "ONE SEAT, COMPARE IT".
- **Two regenerations this run (quality control, verified by viewing each):**
  1. First tip-card render invented a fake "SeatSync" wordmark + App Store/Google Play badges + filler body copy. Regenerated all three tip cards (T2/IG/Threads) with explicit "no logo, no brand name, no app-store badges, no buttons" — clean on retry.
  2. WC stadium first render put "ESTADIO AZTECA" signage on the building. Azteca is a real WC2026 host, so not false, but prior practice keeps these generic. Regenerated with "generic modern soccer stadium, no readable stadium name, no signage" — now a neutral stadium with crowds, no named venue.
- No IMAGE_SAFETY failures.
- Cost: 5 generated + 4 regenerated = 9 × ~$0.078 ≈ $0.70.

## Voice self-check
- Re-read all 6. No banned words (delve/crucial/showcase/etc.). No em dashes for emphasis.
- Caught and reworded a forced rule-of-three in the price-intel Twitter post ("different sellers, different fees, different days" → "each one has its own sellers and its own fees, and the winner shifts by the day").
- Varied sentence length, contractions throughout, URLs land naturally (not as CTA slogans).
- IG: 1 emoji (⚽), 4 hashtags — within limits. No emojis on Twitter/Threads.

## Not done / carry-forward
- Deal Alert and Savings Wins pillars remain **blocked at the data source** — can't run real numbers until the price feed returns non-null cross-platform prices. Not a content-layer problem.
- Posts are queued in the calendar only; not pushed to the admin posting endpoints this run (consistent with prior days, which append to the calendar for the scheduler to pick up).
