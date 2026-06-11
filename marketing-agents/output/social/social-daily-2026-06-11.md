# Social Daily — 2026-06-11 (Thursday)

6 posts created and appended to `content-calendar.json` (3 Twitter, 1 Instagram, 1 Threads, 1 TikTok). 5 unique AI images generated (Twitter ×3, Instagram, Threads). TikTok has no image, per spec.

## Hook of the day
**The World Cup actually kicks off today (June 11).** Yesterday's posts said "tomorrow"; today it's live. Day one is the timed, verified peg, so two posts lead on it (Twitter + Instagram opening-day). The rest are evergreen tips and price-intelligence built around the five-week tournament window.

## Data check (honesty notes)
- Live API is up (200, ~0.3s).
- `/events/search` still defaults to Orlando regardless of the `q` param (queried "world cup", got Cirque/Blue Man/Noah Kahan in Orlando). Known limitation — not used to assert any matchup or pricing.
- `priceRanges` are null or `{min:0,max:0}` on nearly everything (one small club primary showed $21.18). Per standing memory (price feed returns null cross-platform prices; a prior agent fabricated price arcs), **no dollar figures or platform-vs-platform spreads were invented.** Posts stay on verified facts (the WC opening date, the ~5-week run) and methodology.
- WC fixture data in the repo is stale, so WC posts make **no fixture, group, venue, or match-count claims** — only the opening date and ~5-week length, both from CLAUDE.md. "Dozens of matches" used as safe tournament-scale phrasing, not a specific count.

## Posts
| ID | Platform | Time (UTC) | Pillar |
|----|----------|-----------|--------|
| 2026-06-11-twitter-worldcup-opening | Twitter | 13:00 | World Cup 2026 |
| 2026-06-11-twitter-checkout-fees | Twitter | 17:00 | Tips & Education |
| 2026-06-11-twitter-dont-panic-buy | Twitter | 21:00 | Price Intelligence |
| 2026-06-11-instagram-worldcup-opening | Instagram | 15:00 | World Cup 2026 |
| 2026-06-11-threads-dont-panic-buy | Threads | 21:30 | Price Intelligence |
| 2026-06-11-tiktok-worldcup-matchday-habit | TikTok | 16:00 | World Cup 2026 |

Threads scheduled 30 min after the corresponding Twitter post (don't-panic-buy, 21:00 → 21:30).

## Images
- Generated via banana skill direct-API fallback (`generate.py`, `gemini-3.1-flash-image-preview`, 2K). Gemini/MCP image tools still not exposed as callables (ToolSearch returned only Google Drive), so used the script with the key from `~/.claude/settings.json`.
- 5 images saved to `web/public/social/generated/` — 16:9 for Twitter, 1:1 for Instagram/Threads.
- WC images used a generic "modern soccer stadium" (no named real venue) to avoid asserting a specific stadium and to dodge IMAGE_SAFETY.
- Price-intelligence cards instructed "no specific numbers" so the graphic doesn't imply a fabricated comparison. Card text kept under 25 chars ("CHECK THE TOTAL", "WATCH, DON'T RUSH", "DON'T PANIC BUY").
- No IMAGE_SAFETY failures; all 5 generated on first try.
- iCloud workaround retained (`brctl download` before copy) — no EDEADLK this run.
- Cost: 5 × ~$0.078 ≈ $0.39.

## Voice self-check
- Re-read all 6. No banned words (delve/crucial/showcase/etc.). No em dashes for emphasis. Removed an accidental rule-of-three in the Twitter opener ("five weeks, dozens of matches, and prices"). Varied sentence length, contractions throughout, URLs land naturally rather than as CTA slogans.
- IG: 1 emoji (⚽), 5 hashtags — within limits. No emojis on Twitter/Threads.

## Not done / carry-forward
- Deal Alert and Savings Wins pillars remain **blocked at the data source** — can't run real numbers until the price feed returns non-null cross-platform prices. Not a content-layer problem.
