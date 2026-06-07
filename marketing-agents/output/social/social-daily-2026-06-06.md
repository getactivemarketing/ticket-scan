# Social Daily — 2026-06-06

6 posts added to `content-calendar.json` (332 total entries). World Cup is 5 days out (opens June 11), so countdown leads today, balanced with two evergreen comparison/timing angles.

## Data check (what's verified vs. not)
- **API:** Up. `/api/events/search` returned 200 with real events.
- **Prices:** Still mostly `null` in the feed (one small punk show had a real $14.98 figure, not usable). Per standing note, **no dollar figures invented** in any post today.
- **Fixtures:** Did **not** assert any specific World Cup matchups — `worldcup.ts` is stale/pre-draw. Only used tournament-level facts that are independently verified: opens June 11, 16 stadiums, 3 countries (USA/Canada/Mexico), group-stage resale live.

## Posts

| Platform | Time (UTC) | Pillar | Hook |
|---|---|---|---|
| Twitter | 13:00 | World Cup 2026 | "Five days until the World Cup… same seat, different price" |
| Twitter | 17:00 | Tips & Education | Compare the **total after fees**, not the sticker |
| Twitter | 21:00 | Price Intelligence | "There isn't one" cheapest site — winner flips per event |
| Instagram | 22:00 | World Cup 2026 | 5-day countdown, 16 stadiums, don't loyalty-shop one platform |
| Threads | 21:30 | Price Intelligence | Adapted from the "no single cheapest site" Twitter post |
| TikTok | 23:00 | World Cup 2026 | POV countdown, two-minute compare move |

## Images
**Not generated.** No image path is fabricated. Reasons confirmed this run:
- No banana MCP server registered in this session.
- No `GOOGLE_AI_API_KEY` / `GOOGLE_API_KEY` in env, `.env`, or `~/.banana/config.json`.
- `web/public/social/generated/` is empty (only `.gitkeep`); all 258 prior `mediaUrls` already use the `ig-template.png` fallback — image generation has never run in production here.

Per the skill's documented fallback, all Twitter/Instagram/Threads posts point to `https://www.ticketscan.io/social/ig-template.png`. TikTok has no media (by design).

**To enable real images:** set `GOOGLE_AI_API_KEY` in the agent's environment (or run `/banana setup` to configure the MCP). Until then this stays on the template fallback.

## Voice self-check
Read each post against the banned-words/phrases list. Removed "Here's the thing" from an early IG draft. No emojis on Twitter/Threads; one ⚽ on Instagram. No rule-of-three, no em dashes for emphasis, no fabricated stats.
