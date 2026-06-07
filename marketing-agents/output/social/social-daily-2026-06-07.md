# Social Daily — 2026-06-07

6 posts added to `content-calendar.json` (338 total). World Cup opener is 4 days out (June 11), so the countdown leads, balanced with two evergreen comparison/process angles that don't repeat yesterday's hooks.

## Data check (what's verified vs. not)
- **API:** Up. `/api/events/search` returned 200 with real events (e.g. Blue Man Group, Cirque du Soleil, Six — Orlando, 2026-06-07).
- **Prices:** `priceRanges` is `null` across the feed. Per standing note, **no dollar figures invented** in any post today.
- **Fixtures:** Did **not** assert any specific World Cup matchup — `worldcup.ts` is stale/pre-draw. Only tournament-level facts that are independently verifiable: opens June 11, 16 stadiums, 3 host countries (USA/Canada/Mexico), group-stage resale live.

## Posts

| Platform | Time (UTC) | Pillar | Hook |
|---|---|---|---|
| Twitter | 13:00 | World Cup 2026 | "Four days until kickoff — same seat rarely lists the same on all three" |
| Twitter | 17:00 | Tips & Education | Found a seat? Open that exact section on the other sites before buying |
| Twitter | 21:00 | Price Intelligence | A "lowest price" badge only ranks that site's own listings |
| Instagram | 22:00 | World Cup 2026 | 4-day countdown + the one habit (don't loyalty-shop a single site) |
| Threads | 21:30 | Price Intelligence | Adapted from the "lowest price badge" Twitter post |
| TikTok | 16:00 | Tips & Education | POV: you almost bought the first ticket you saw |

Angle differentiation vs. 06-06: yesterday ran "compare total after fees" and "no single cheapest site." Today shifts to the **process** (open the same section elsewhere first) and a **specific misread** (the per-site "lowest" badge). TikTok moved off the WC-POV format used yesterday.

## Images
**Not generated.** No image path fabricated. Confirmed this run:
- No banana/Gemini image MCP tool registered (checked via tool search — only finance MCP servers present).
- No `GOOGLE_AI_API_KEY` / `GEMINI` key in env; `~/.banana/` has `costs.json` + `presets` but no API config.
- `web/public/social/generated/` is empty (only `.gitkeep`).

Per the skill's documented fallback, all Twitter/Instagram/Threads posts use `https://www.ticketscan.io/social/ig-template.png`. TikTok has no media by design.

**To enable real images:** provide a Gemini API key in the agent environment (or register the banana MCP). Until then this stays on the template fallback.

## Voice self-check
Re-read each post against the banned-words/phrases list. No banned vocabulary, no "Here's the thing"/CTA-slogan endings, no em dashes for emphasis, no forced rule-of-three. No emojis on Twitter/Threads; one ⚽ on Instagram (within the 2-emoji cap, 5 hashtags). No fabricated stats or dollar figures.
