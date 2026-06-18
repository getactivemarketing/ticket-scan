# Social Daily — 2026-06-18

6 posts created and appended to `content-calendar.json` (398 entries total). World Cup is in its second week (group stage), so today mixes the tournament with evergreen comparison/tracking tips. No fabricated prices or fixtures — see Data note.

## Posts

| ID | Platform | Time (UTC) | Pillar |
|----|----------|-----------|--------|
| 2026-06-18-twitter-no-single-winner | Twitter | 13:00 | Price Intelligence |
| 2026-06-18-twitter-track-the-price | Twitter | 17:00 | Tips & Education |
| 2026-06-18-twitter-worldcup-groupstage | Twitter | 21:00 | World Cup 2026 |
| 2026-06-18-instagram-no-single-winner | Instagram | 15:00 | Price Intelligence |
| 2026-06-18-threads-track-the-price | Threads | 17:30 | Tips & Education |
| 2026-06-18-tiktok-worldcup-snapshot | TikTok | 16:00 | World Cup 2026 |

Threads scheduled 30 min after its corresponding Twitter post (track-the-price, 17:00 → 17:30). Twitter spaced 9am/1pm/5pm ET; IG 11am ET; TikTok 12pm ET (June = EDT, UTC-4).

## Topic freshness
Last several days leaned hard on fees-at-checkout, scarcity nudges ("only 2 left"), and the resale-is-a-snapshot angle. Rotated to two fresher hooks today:
- **"No single winner"** — there's no platform you can stay loyal to; cheapest flips by event. New framing of the compare habit (Twitter + IG).
- **"Track the price"** — the screenshot from last week is fiction now; set a target and let it come to you rather than refreshing one tab. Nods to the watchlist/target-price feature without claiming alerts are firing (they aren't — see [[watchlist-no-targets-alerts-cant-arm]]).
- World Cup kept general (week-two group stage, match-day repricing), no specific fixtures.

## Images
- Generated via the banana skill's direct-API fallback (`skills/banana/scripts/generate.py`, `gemini-3.1-flash-image-preview`, 2K), key pulled from `~/.claude/settings.json` (`GOOGLE_AI_API_KEY`, nested under `env`). MCP image tools still not exposed as callables this session.
- One driver-script gotcha: the script prints pretty-printed multi-line JSON; my first parser grabbed only the last line and wrongly logged FALLBACK. Images had actually generated fine — re-mapped the real `path`s, copied them, and fixed mediaUrls without regenerating (no wasted cost). Temp scripts removed after the run.
- 5 images saved to `web/public/social/generated/` — 16:9 for Twitter, 1:1 for Instagram/Threads. TikTok gets no image.
- All 5 valid, QC'd by viewing each:
  - "No single winner" cards (16:9 + 1:1): text correct, navy/green/white comparison bars + green check over a shorter bar. No wordmark, no dollar figures.
  - "Track the price" cards (16:9 + 1:1): text correct, green price line chart (16:9 has a small ticket+down-arrow glyph). No wordmark, no dollar figures.
  - WC exterior (16:9): generic modern stadium at golden hour, fans in mixed national jerseys (Mexico/Brazil/Argentina/France), "MATCH DAY 2026"/"FIFA"/"ENTRANCE GATES A-F" signage. No specific real venue, no TicketScan wordmark.
- Card text kept under 25 chars; "no wordmark/logo text, no dollar figures" carried forward in prompts.
- Cost: 5 × ~$0.13 (2K) ≈ $0.65.

## Voice self-check
- Re-read all 6. No banned words (delve/crucial/showcase/landscape/etc.). No em dashes for emphasis.
- Watched the rule-of-three: "no single winner" copy uses "flips from one event to the next, sometimes within the same afternoon" (a pair, not a forced triple).
- Varied sentence length, contractions throughout. URLs land naturally at the end, not as CTA slogans.
- IG: 1 emoji (🎟️), 4 hashtags — within limits. No emojis on Twitter/Threads.

## Data note (verified facts only)
- Per [[social-agent-price-ledger-fabrication]] and [[price-history-empty-alerts-broken]]: re-confirmed today `/api/events/search` returns real events (e.g. Orlando Pride at Inter&Co Stadium, July dates) but `priceRanges":null` on essentially every listing. So **no specific dollar figures or savings claims** were posted. Posts assert only evergreen truths: cheapest platform varies by event, resale reprices constantly, the tournament is live.
- No specific WC fixtures/venues/dates asserted (per [[worldcup-schedule-stale-predraw]] — worldcup.ts is stale). WC post and image are atmospheric/general only.

## Not done / carry-forward
- Deal Alert and Savings Wins pillars remain **blocked at the data source** — can't run real cross-platform numbers until the price feed returns non-null prices. Not a content-layer problem.
- "Track the price" copy gently promotes the target-price/watchlist flow, but alerts still can't actually fire (no targets set, price history empty). Kept the framing as a user habit ("decide the most you'd pay"), not a claim that the product is alerting anyone.
