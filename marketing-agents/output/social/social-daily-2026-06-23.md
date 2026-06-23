# Social Daily — 2026-06-23

Six posts queued to `content-calendar.json` (3 Twitter, 1 Threads, 1 Instagram, 1 TikTok).

## Posts

| Platform | ID | Pillar | Scheduled (UTC) |
|---|---|---|---|
| Twitter | 2026-06-23-twitter-worldcup-compare | World Cup 2026 / Tips | 13:00 |
| Twitter | 2026-06-23-twitter-dodgers-july4 | Tips & Education | 17:00 |
| Twitter | 2026-06-23-twitter-cheapest-listing | Price Intelligence | 21:00 |
| Threads | 2026-06-23-threads-worldcup-compare | World Cup 2026 | 13:30 |
| Instagram | 2026-06-23-instagram-big-games | Tips & Education | 22:00 |
| TikTok | 2026-06-23-tiktok-first-tab | Tips & Education | 16:00 |

## Data sourcing (verified, no fabricated prices)

Pulled the live feed before writing. Findings:
- `/api/events/search` returns **real events with `priceRanges: null`** (e.g. Dodgers vs. Padres at Dodger Stadium, July 2–5 2026 — a real holiday-weekend series; LA WC watch-party listings show $0 prices).
- `/api/events/compare` defaults to Orlando and returned 0 results for test keywords.
- No populated `min`/`max` price data anywhere usable.

Per the standing note ([[social-agent-price-ledger-fabrication]]), I anchored posts to verifiable facts only — real series (Dodgers/Padres July 4 weekend), the live World Cup, and qualitative fee/price-spread behavior. **No specific dollar figures quoted.** No "tracking ledger" / "inside band" format.

## Images

Image-gen MCP tools (`gemini_generate_image`, `set_aspect_ratio`) are **not present in this runtime** (confirmed via tool search — only Google Drive MCP available). Per spec, Twitter/Instagram/Threads `mediaUrls` fall back to `https://www.ticketscan.io/social/ig-template.png`. TikTok has no image.

## Notes / upstream blocker
- The real fix remains backend: the price feed must return resale min/listing data so deal-alert and savings-win pillars can use verified numbers. Until then, content leans Tips/Education, World Cup, and honest Price-Intelligence framing.
