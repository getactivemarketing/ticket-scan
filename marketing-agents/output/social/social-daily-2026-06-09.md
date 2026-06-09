# Social Daily — 2026-06-09

6 posts added to `content-calendar.json` (350 total). World Cup opener is 2 days out (June 11), so the countdown leads again. The rest spread across buy-timing and fee-transparency angles — no angle repeats from 06-06, 06-07 or 06-08.

## Data check (what's verified vs. not)
- **API:** Up. `/api/events/search` returned 200 with real events for 2026-06-09 (Banksy Museum NYC, Edwin Honoret / Terrace Martin @ Blue Note LA, Balloon Museum Chicago). World Cup keyword search returned 0 (defaults to Orlando; no WC inventory exposed through the search feed).
- **Prices:** Still unusable for comparison content. `priceRanges` is `null` across nearly the whole feed. Terrace Martin again returned a single-source range ($18.80–$54.54) — that's **one platform's** number, not a cross-platform spread, so it can't back an honest "$X here vs $Y there" post. Per standing note, **no dollar figures invented** anywhere today (no illustrative numbers either).
- **Fixtures:** Did **not** assert any specific World Cup matchup — `worldcup.ts` is stale/pre-draw. Only tournament-level facts used: opens June 11 (2 days from today), 16 stadiums, group-stage resale live.

## Posts

| Platform | Time (UTC) | Pillar | Hook |
|---|---|---|---|
| Twitter | 13:00 | World Cup 2026 | Two days out — don't assume one app is cheapest; lowest seat floats by the hour |
| Twitter | 17:00 | Price Intelligence | "Wait for the drop" works for a 30-city tour, not a one-night event |
| Twitter | 21:00 | Tips & Education | Compare the checkout total (fees + "processing" line), not the sticker |
| Instagram | 22:00 | World Cup 2026 | Long-form fees gameplan: take the same seat to the cart on all three |
| Threads | 17:30 | Price Intelligence | Adapted from the "wait for the drop" Twitter post |
| TikTok | 16:00 | Tips & Education | POV: you bought from your default app (loyalty = paying extra) |

Angle differentiation vs. recent days: 06-08 ran delivery-method, resale-prices-move/stale-screenshot, and sort-by-price-trap. Today moves to **buy-timing by event type** (one-off vs tour, the day's strongest idea — carried to Threads), **fee/checkout-total transparency** (Twitter + IG), and **default-app loyalty** (TikTok). The WC countdown keeps the timely hook but uses the "lowest seat floats between sites" framing rather than yesterday's "seat lists on more than one site."

## Images
**Not generated.** No image path fabricated. Re-confirmed this run:
- No banana/Gemini image MCP tool registered (ToolSearch for `gemini_generate_image` / `set_aspect_ratio` returned nothing).
- No `GEMINI` / `GOOGLE_AI` / banana key in env.
- `web/public/social/generated/` is empty (`.gitkeep` only).

Per the skill's documented fallback, all Twitter/Instagram/Threads posts use `https://www.ticketscan.io/social/ig-template.png` (file present in repo at `web/public/social/ig-template.png`). TikTok has no media by design.

**To enable real images:** register the banana/Gemini image MCP or supply a Gemini API key in the agent environment. Until then this stays on the template fallback.

## Voice self-check
Re-read each post against the banned-words/phrases/structures list. No banned vocabulary, no "Here's the thing"/CTA-slogan endings, no em dashes for emphasis, no forced rule-of-three (trimmed fee lists to two items). No emojis on Twitter/Threads; one ⚽ on Instagram (within the 2-emoji cap, 5 hashtags). No fabricated stats or dollar figures.
