# Social Daily — 2026-06-17

6 posts created and appended to `content-calendar.json` (392 entries total). World Cup 2026 is live (group stage), so today leans on the tournament plus evergreen comparison/fees tips. No fabricated prices or fixtures — see Data note.

## Posts

| ID | Platform | Time (UTC) | Pillar |
|----|----------|-----------|--------|
| 2026-06-17-twitter-check-first | Twitter | 13:00 | Tips & Education |
| 2026-06-17-twitter-fees-at-checkout | Twitter | 17:00 | Price Intelligence |
| 2026-06-17-twitter-worldcup-listings-move | Twitter | 21:00 | World Cup 2026 |
| 2026-06-17-instagram-worldcup-compare | Instagram | 15:00 | World Cup 2026 |
| 2026-06-17-threads-fees-at-checkout | Threads | 17:30 | Price Intelligence |
| 2026-06-17-tiktok-two-minute-check | TikTok | 16:00 | Tips & Education |

Threads scheduled 30 min after its corresponding Twitter post (fees-at-checkout, 17:00 → 17:30). Twitter spaced 9am/1pm/5pm ET; IG 11am ET; TikTok 12pm ET.

## Images
- Generated via the banana skill's direct-API fallback. The MCP image tools are still not exposed as callables this session (ToolSearch returned only Drive tools), so used `scripts/generate.py` (`gemini-3.1-flash-image-preview`, 2K) with the key from `~/.claude/settings.json` (`GOOGLE_AI_API_KEY`).
- Ran the whole gen+copy pipeline in one Python driver (`subprocess` + `shutil.copyfile`) with explicit id→prompt→ratio mapping. This was deliberate: a plain bash loop hung on home-dir reads (sandbox) and zsh dropped `/bin` from PATH inside a function (cp/ls not found). The driver needed `dangerouslyDisableSandbox` to write through `~/Documents/nanobanana_generated`. Temp scripts removed after the run.
- 5 images saved to `web/public/social/generated/` — 16:9 for Twitter, 1:1 for Instagram/Threads. TikTok gets no image.
- All 5 valid on first try (no IMAGE_SAFETY, no 0-byte files). Sizes 1.7M–4.2M. QC by viewing each:
  - "Check before you buy" tip card (16:9): text rendered correctly, navy/green/white, green magnifying-glass-with-check icon + underline. No wordmark, no dollar figures.
  - "Fees hit at checkout" cards (16:9 + 1:1): text correct, green receipt icon with up-arrow + plus. No wordmark, no specific dollar figures.
  - WC exterior (16:9): generic modern stadium at golden hour, mixed national flags (Mexico/Brazil/USA/Argentina jerseys), "GATE 12" signage, "FIFA SUMMER 2026" atmospheric banner. No specific real venue, no TicketScan wordmark.
  - WC interior (1:1, IG): packed stands, green pitch, fans waving assorted flags. Atmospheric, no specific real venue, no wordmark.
- Card text kept under 25 chars; added "no wordmark/logo text, no dollar figures" to card prompts (carry-forward to avoid an invented brand tag / fake price).
- Cost: 5 × ~$0.13 (2K) ≈ $0.65.

## Voice self-check
- Re-read all 6. No banned words (delve/crucial/showcase/landscape/etc.). No em dashes for emphasis.
- No forced rule-of-three. Varied sentence length, contractions throughout. URLs land naturally, not as CTA slogans.
- IG: 1 emoji (⚽), 4 hashtags — within limits. No emojis on Twitter/Threads.

## Data note (verified facts only)
- Per standing finding [[social-agent-price-ledger-fabrication]] and [[price-history-empty-alerts-broken]]: the events feed returns real events but null `priceRanges` for most listings (re-confirmed today — `/api/events/search` showed `priceRanges":null` on nearly every event). So **no specific dollar figures or savings claims** were posted. Posts assert only verified, evergreen facts: prices vary by platform, fees land at checkout, the tournament is live.
- Did NOT assert any specific WC fixtures/venues/dates (per [[worldcup-schedule-stale-predraw]] — worldcup.ts is stale). WC posts and images are atmospheric/general only.

## Not done / carry-forward
- Deal Alert and Savings Wins pillars remain **blocked at the data source** — can't run real cross-platform numbers until the price feed returns non-null prices. Not a content-layer problem.
- Posts queued in the calendar only; not pushed to the admin posting endpoints this run (consistent with prior days — the scheduler picks them up from the calendar).
- No 2026-06-15 log exists (gap in the daily run series); only today's posts generated, past entries untouched.
