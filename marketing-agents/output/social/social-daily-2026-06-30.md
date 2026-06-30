# Social Daily — 2026-06-30

Six posts queued to `content-calendar.json` (3 Twitter, 1 Threads, 1 Instagram, 1 TikTok). All Twitter/Threads/Instagram posts have unique AI-generated images.

## Posts

| Platform | ID | Pillar | Scheduled (UTC) | Image |
|---|---|---|---|---|
| Twitter | 2026-06-30-twitter-worldcup-knockout | World Cup 2026 | 13:00 | atmospheric 16:9 |
| Threads | 2026-06-30-threads-worldcup-knockout | World Cup 2026 | 13:30 | atmospheric 1:1 |
| Instagram | 2026-06-30-instagram-worldcup-knockout | World Cup 2026 | 15:00 | atmospheric 1:1 |
| TikTok | 2026-06-30-tiktok-showday-drops | Tips & Education | 16:00 | none (TikTok) |
| Twitter | 2026-06-30-twitter-showday-drops | Tips & Education | 17:00 | tip card 16:9 |
| Twitter | 2026-06-30-twitter-platform-spread | Price Intelligence | 21:00 | data-visual 16:9 |

## Themes (rotated to avoid repeating 6/25–6/26)

Recent coverage: presale myth, group-size inventory trap, weekday vs. weekend pricing, "sold out" misconception, all-in total vs. listed price, bracket-lock pricing windows. Today rotates to:

- **Round of 32 knockout pricing** (Twitter/Threads/Instagram) — Round of 32 matches are live as of June 28-29. Core angle: demand follows results not schedules in the knockout stage. Sellers reprice within hours when a major nation advances. Best window to buy is before the result that determines the matchup. Applies to QF/SF seats at US venues (MetLife, SoFi, Hard Rock). No specific fixture claims or invented prices.
- **Showday price drops** (Twitter/TikTok) — For non-sellout concerts and events, sellers holding unsold tickets cut their ask as the event approaches. Where it works (weeknight shows, summer festivals, non-sellout second nights) vs. where it doesn't (genuine sellouts). Practical and defensible; no dollar figures invented.
- **No single platform wins** (Twitter) — General price intelligence point. Cheapest site varies by event. No fabricated spread data.

## Data sourcing (no fabricated prices)

Per [[social-agent-price-ledger-fabrication]]: no specific dollar spreads quoted. All posts use:
- Known behavioral patterns in resale markets (result-driven WC repricing, showday seller psychology)
- General factual statements (Round of 32 is live; MetLife/SoFi/Hard Rock are confirmed US WC venues)
- No invented price arcs, fake platform comparisons with specific figures, or fictional event names

## Images — generation pipeline

Model: `gemini-2.5-flash-image` (per [[banana-image-model-fallback]] — 3.1 preview degraded 6/19; 2.5 flash clean on retry).

All 5 images generated on first attempt via `marketing-agents/scripts/gen-social-images.py`.

| Post ID | Ratio | Size | Result |
|---|---|---|---|
| 2026-06-30-twitter-worldcup-knockout | 16:9 | 1.7MB | OK |
| 2026-06-30-threads-worldcup-knockout | 1:1 | 1.8MB | OK |
| 2026-06-30-instagram-worldcup-knockout | 1:1 | 2.1MB | OK |
| 2026-06-30-twitter-showday-drops | 16:9 | 282KB | OK |
| 2026-06-30-twitter-platform-spread | 16:9 | 875KB | OK |

Images saved to `web/public/social/generated/` and referenced via `https://www.ticketscan.io/social/generated/`.
