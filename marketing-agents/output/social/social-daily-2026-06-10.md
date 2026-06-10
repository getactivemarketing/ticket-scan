# Social Daily — 2026-06-10 (Wednesday)

6 posts created and appended to `content-calendar.json` (3 Twitter, 1 Instagram, 1 Threads, 1 TikTok). 5 unique AI images generated (Twitter ×3, Instagram, Threads). TikTok has no image, per spec.

## Hook of the day
**World Cup kicks off tomorrow (June 11).** This is the one timed, verified peg today, so two posts lead on it. The rest are evergreen price-intelligence and tips.

## Data check (honesty notes)
- Live API is up (200, ~1.1s).
- `/events/search` defaults to Orlando regardless of the `q` param (Beyonce, Knicks, soccer all returned identical Orlando results). Known limitation — not used to assert any specific matchup pricing.
- Cross-platform `priceRanges` are null on almost everything (only a few small-club primaries had any price). Per standing memory (price feed returns null prices; prior agent fabricated price arcs), **no dollar figures or platform-vs-platform spreads were invented.** Posts stay on verified facts (the WC kickoff date) and methodology.
- World Cup fixture data in the repo is stale, so WC posts make no fixture/venue/group claims — only the kickoff date and the ~5-week run, both from CLAUDE.md.

## Posts
| ID | Platform | Time (UTC) | Pillar |
|----|----------|-----------|--------|
| 2026-06-10-twitter-worldcup-kickoff | Twitter | 13:00 | World Cup 2026 |
| 2026-06-10-twitter-pick-your-number | Twitter | 17:00 | Tips & Education |
| 2026-06-10-twitter-same-seat-different-site | Twitter | 21:00 | Price Intelligence |
| 2026-06-10-instagram-worldcup-kickoff | Instagram | 15:00 | World Cup 2026 |
| 2026-06-10-threads-same-seat-different-site | Threads | 13:30 | Price Intelligence |
| 2026-06-10-tiktok-worldcup-buying-habit | TikTok | 16:00 | World Cup 2026 |

## Images
- Generated via banana skill direct-API fallback (`gemini-3.1-flash-image-preview`, 2K). MCP tools weren't exposed as callables, so used `scripts/generate.py` with the key pulled from `settings.json`.
- 5 images saved to `web/public/social/generated/` (16:9 for Twitter, 1:1 for Instagram/Threads).
- WC images used a generic "modern soccer stadium" (not a named real stadium) to avoid asserting a specific venue and to dodge IMAGE_SAFETY.
- Price-viz cards instructed "no specific numbers" so the graphic doesn't imply a fabricated price comparison.
- Cost logged: 5 × $0.078 = $0.39 (running total $1.794, 23 images).
- Note: `~/Documents/nanobanana_generated` is iCloud-synced; copies hit EDEADLK on dataless files. Worked around with `brctl download` + `dd` retry loop.

## Not done / carry-forward
- Still cannot run real Deal Alert / Savings Wins posts with actual numbers until the price feed returns non-null cross-platform prices. Those pillars remain blocked at the data source, not the content layer.
