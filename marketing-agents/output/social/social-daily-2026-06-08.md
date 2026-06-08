# Social Daily — 2026-06-08

6 posts added to `content-calendar.json` (344 total). World Cup opener is 3 days out (June 11), so the countdown leads. Balanced with one fresh logistics tip and a price-behavior post — no angle repeats from 06-06 or 06-07.

## Data check (what's verified vs. not)
- **API:** Up. `/api/events/search` returned 200 with real events across Chicago, NYC, LA, Miami for 2026-06-08 (e.g. Terrace Martin @ Blue Note LA, Banksy Museum NYC, Balloon Museum Chicago/Miami).
- **Prices:** Still effectively unusable for comparison content. `priceRanges` is `null` across nearly the whole feed. One event (Terrace Martin) returned a single-source range ($18.80–$54.54), but that's **one platform's** number, not a cross-platform spread — so it can't support an honest "$X here vs $Y there" post. Per standing note, **no dollar figures invented** in any post today.
- **Fixtures:** Did **not** assert any specific World Cup matchup — `worldcup.ts` is stale/pre-draw. Only tournament-level facts that are independently verifiable: opens June 11, 16 stadiums, 3 host countries (USA/Canada/Mexico), group-stage resale live.

## Posts

| Platform | Time (UTC) | Pillar | Hook |
|---|---|---|---|
| Twitter | 13:00 | World Cup 2026 | "Three days until kickoff — the seat usually lists on more than one site" |
| Twitter | 17:00 | Tips & Education | Check delivery method (mobile transfer vs. late QR), not just price |
| Twitter | 21:00 | Price Intelligence | Resale prices move, aren't always above face; yesterday's screenshot is stale |
| Instagram | 22:00 | World Cup 2026 | Pre-buy game plan: pick your section + set a ceiling before you open a tab |
| Threads | 21:30 | Price Intelligence | Adapted from the "resale prices move" Twitter post |
| TikTok | 16:00 | Tips & Education | POV: you sorted by lowest price (= worst seat behind a pole) |

Angle differentiation: 06-07 ran the WC countdown ("same seat rarely lists the same"), "open the same section elsewhere first," and the per-site "lowest price" badge. Today moves to **logistics** (how the ticket is delivered), **price behavior over time** (resale isn't fixed / not always above face), and a **pre-buy game plan** for the IG WC post instead of the "don't loyalty-shop" framing used yesterday. TikTok shifted from the first-ticket POV to the sort-by-price trap.

## Images
**Not generated.** No image path fabricated. Re-confirmed this run:
- No banana/Gemini image MCP tool registered (tool search returned no `gemini_generate_image` / `set_aspect_ratio`).
- No `GEMINI` / `GOOGLE_AI` / banana key in env; `~/.banana/` has only `costs.json` + empty `presets/`, no config.
- `web/public/social/generated/` is empty.

Per the skill's documented fallback, all Twitter/Instagram/Threads posts use `https://www.ticketscan.io/social/ig-template.png`. TikTok has no media by design.

**To enable real images:** provide a Gemini API key in the agent environment (or register the banana MCP). Until then this stays on the template fallback.

## Voice self-check
Re-read each post against the banned-words/phrases list. No banned vocabulary, no "Here's the thing"/CTA-slogan endings, no em dashes for emphasis, no forced rule-of-three. No emojis on Twitter/Threads; one ⚽ on Instagram (within the 2-emoji cap, 5 hashtags). No fabricated stats or dollar figures.
