# Social Daily — 2026-06-19

6 posts queued to `content-calendar.json` (3 Twitter, 1 Threads, 1 Instagram, 1 TikTok). Theme of the day: **fees / the all-in checkout total** — fresh angle, not run in the prior week.

## Posts

| ID | Platform | Time (UTC) | Pillar |
|---|---|---|---|
| 2026-06-19-twitter-all-in-total | twitter | 13:00 | Tips & Education |
| 2026-06-19-threads-fee-gap | threads | 13:30 | Tips & Education |
| 2026-06-19-tiktok-worldcup-fees | tiktok | 16:00 | World Cup 2026 / Tips |
| 2026-06-19-twitter-midweek-softer | twitter | 17:00 | Price Intelligence |
| 2026-06-19-twitter-worldcup-shop-around | twitter | 21:00 | World Cup 2026 |
| 2026-06-19-instagram-all-in-total | instagram | 22:00 | Tips & Education |

### Angles
- **All-in total** (Twitter + Threads + IG) — same face price, different checkout totals because fees vary by site. Compare the final number, not the sticker. Core consumer-advocate tip, no dollar figures needed.
- **Midweek runs softer** (Twitter, Price Intelligence) — Tuesday vs Saturday demand for the same matchup. Qualitative, no invented prices.
- **Shop around / World Cup** (Twitter + TikTok) — first-time resale buyers this month; the same seat is usually listed on several marketplaces. Kept general, no fixtures/venues/prices.

## Data integrity (standing constraints honored)
- `/api/events/search` re-checked today: returns real events (Orlando defaults regardless of `q`) but `priceRanges` is null on essentially every listing. Per [[social-agent-price-ledger-fabrication]] and [[price-history-empty-alerts-broken]], **no specific dollar figures, spreads, or savings claims were posted.** Every post asserts only evergreen, verifiable facts (fees vary by platform and land at checkout, weekend demand runs hotter, the tournament is live).
- No WC fixtures, groups, venues, or match counts claimed, per [[worldcup-schedule-stale-predraw]]. WC posts and the stadium image are general/atmospheric only.
- Deal Alert and Savings Wins pillars remain blocked at the data source (null price feed). Not a content-layer problem.

## Images (5: 3 Twitter 16:9, IG + Threads 1:1; TikTok none)
- **Model fallback this run:** the default `gemini-3.1-flash-image-preview` model is **degraded right now** — first pass of 5 (plus 2 retries with thinking=high and simplified prompts) all returned blurry, illegible output (garbled text cards, a featureless brown blur for the stadium). 7 wasted generations confirmed it's systemic, not prompt-related.
- Switched to **`gemini-2.5-flash-image`** via the banana direct-API script (`.../banana-claude/1.4.1/skills/banana/scripts/generate.py`, 2K, key from `~/.claude/settings.json` → `GOOGLE_AI_API_KEY`). All 5 regenerated clean and legible on the first try. **Carry-forward: use `gemini-2.5-flash-image` until the 3.1 preview is healthy again.** (`gemini-2.5-flash-image-preview` is 404 / not a valid id.)
- QC by viewing each: cards are sharp navy/green/white, text under ~20 chars ("CHECK THE ALL-IN", "MIDWEEK RUNS SOFTER", "ALL-IN / NOT STICKER", "THE FEE IS THE GAP"), no wordmark/logo, no dollar figures. Stadium shot is a clear golden-hour exterior with fans + flags (generic, no named real stadium → no safety trip).
- Saved to `web/public/social/generated/`. TikTok gets no image.
- Cost: ~7 failed (3.1) + 5 good (2.5) ≈ 12 generations this run, higher than usual due to the model swap.

## Voice self-check
- Re-read all 6: no banned words (delve/crucial/showcase/landscape/testament/etc.), no em dashes for emphasis, no forced rule-of-three. Varied sentence length, contractions throughout. URLs land naturally, not as CTA slogans.
- IG: 1 emoji (🎟️), 5 hashtags — within limits. No emojis on Twitter/Threads.

## Notes
- Posts queued to the calendar only; not pushed to the admin posting endpoints this run (consistent with prior days — the scheduler picks them up).
- Only today's entries added (calendar now 404 entries); past entries untouched. Dedup guard skips any id already present.
