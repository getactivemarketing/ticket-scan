# Social Daily — 2026-06-25

Six posts queued to `content-calendar.json` (3 Twitter, 1 Threads, 1 Instagram, 1 TikTok). All Twitter/Threads/Instagram posts have unique AI-generated images this run.

## Posts

| Platform | ID | Pillar | Scheduled (UTC) | Image |
|---|---|---|---|---|
| Twitter | 2026-06-25-twitter-worldcup-today | World Cup 2026 | 13:00 | atmospheric 16:9 |
| Threads | 2026-06-25-threads-worldcup-today | World Cup 2026 | 13:30 | atmospheric 1:1 |
| Instagram | 2026-06-25-instagram-worldcup-knockout | World Cup 2026 | 15:00 | atmospheric 1:1 |
| TikTok | 2026-06-25-tiktok-service-fees | Tips & Education | 16:00 | none (TikTok) |
| Twitter | 2026-06-25-twitter-prices-move | Price Intelligence | 17:00 | data-visual 16:9 |
| Twitter | 2026-06-25-twitter-allin-total | Tips & Education | 21:00 | tip card 16:9 |

## Themes (rotated to avoid repeating 6/24)

Yesterday covered: World Cup knockout dynamics, set-your-max pre-commitment, get-in price anchoring, concert season timing (IG), day-of drops (TikTok). Today rotates to:

- **Today's real WC matches** (Twitter/Threads/Instagram) — API confirmed Ecuador vs Germany, Japan vs Sweden, Curaçao vs Ivory Coast today (June 25). Used these real fixtures as anchors. Group stage ends this week; knockout pricing dynamics are about to kick in.
- **Prices move with news** (Twitter) — resale listings respond to trade rumors, injuries, lineup news. Fresh angle, no prior coverage.
- **All-in total vs. face value** (Twitter/TikTok) — service fee math is a perennial consumer trap, hadn't been covered in the recent rotation.

## Data sourcing (no fabricated prices)

Pulled `/api/events/search?keyword=sports&city=Los+Angeles` before writing. Confirmed three real World Cup group stage matches on June 25 from the Ticketmaster feed: Ecuador vs Germany, Japan vs Sweden, Curaçao vs Ivory Coast. Price ranges returned `min: 0 / max: 15.95` — likely primary face-value floor before sell-through; not usable as a resale comparison data point. Per [[social-agent-price-ledger-fabrication]], no specific dollar spread quoted. Posts use these matches as real anchors only.

## Images — generation pipeline

Used `gen-social-images-2026-06-25.py` (same pattern as 6/24 script, updated JOBS list for today's posts). Model: `gemini-2.5-flash-image` per [[banana-image-model-fallback]]. All 5 images generated on first attempt, no retries needed.

Results:
- `2026-06-25-twitter-worldcup-today.png` — 1654KB (atmospheric stadium exterior, golden hour)
- `2026-06-25-twitter-prices-move.png` — 928KB (data-visual wavy chart card)
- `2026-06-25-twitter-allin-total.png` — 223KB (tip card, "ALL-IN TOTAL")
- `2026-06-25-threads-worldcup-today.png` — 1817KB (stadium exterior, fans at gates)
- `2026-06-25-instagram-worldcup-knockout.png` — 1885KB (stadium interior, night match)

All placed at `web/public/social/generated/2026-06-25-*.png`.

## Notes / upstream blocker

Unchanged: the price feed must return resale min/listing data before deal-alert and savings-win pillars can use verified numbers. Until then, content stays on Tips/Education, World Cup, and honest Price-Intelligence framing. The [[watchlist-no-targets-alerts-cant-arm]] and [[price-history-empty-alerts-broken]] issues remain open upstream.
