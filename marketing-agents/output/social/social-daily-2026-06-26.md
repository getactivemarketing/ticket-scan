# Social Daily — 2026-06-26

Six posts queued to `content-calendar.json` (3 Twitter, 1 Threads, 1 Instagram, 1 TikTok). All Twitter/Threads/Instagram posts have unique AI-generated images this run.

## Posts

| Platform | ID | Pillar | Scheduled (UTC) | Image |
|---|---|---|---|---|
| Twitter | 2026-06-26-twitter-worldcup-bracket | World Cup 2026 | 13:00 | atmospheric 16:9 |
| Threads | 2026-06-26-threads-worldcup-bracket | World Cup 2026 | 13:30 | atmospheric 1:1 |
| Instagram | 2026-06-26-instagram-presale-myth | Tips & Education | 15:00 | tip card 1:1 |
| TikTok | 2026-06-26-tiktok-group-size | Tips & Education | 16:00 | none (TikTok) |
| Twitter | 2026-06-26-twitter-weekday-price | Price Intelligence | 17:00 | data-visual 16:9 |
| Twitter | 2026-06-26-twitter-soldout-myth | Tips & Education | 21:00 | tip card 16:9 |

## Themes (rotated to avoid repeating 6/24–6/25)

Recent coverage: WC knockout timing, presale rush/concert season, day-of drops, service fees/all-in total, get-in price anchoring, prices move with news. Today rotates to:

- **WC bracket-lock window** (Twitter/Threads) — Final group stage days, knockout matchups resolving. Angle: resale reprices fast the moment a matchup confirms; now is a calmer buy window than post-result. Avoids specific fixture claims (no fixture API check this run); language stays bracket-level, not game-specific.
- **Presale myth** (Instagram) — Presale access = early access, not a discount. Face value during presale is usually identical to the public on-sale. When to rush it vs. when to wait and buy resale.
- **Group-size inventory trap** (TikTok) — Fresh angle: searching for 3 or 5 tickets together dramatically thins apparent inventory because pairs dominate listings. Practical workarounds.
- **Weekday vs. weekend pricing** (Twitter) — Multi-date events almost always run hotter on Friday/Saturday. Same section, bigger buyer pool, higher prices. Weeknight date is worth checking first.
- **"Sold out" misconception** (Twitter) — "Sold out" on the primary market doesn't mean no tickets. Resale usually has the same rows listed at varying prices.

## Data sourcing (no fabricated prices)

Per [[social-agent-price-ledger-fabrication]]: no specific dollar spreads quoted. All posts use general behavioral patterns (weekday/weekend demand, primary vs. resale market structure, presale pricing mechanics, group-size listing dynamics). These are defensible as known market patterns without requiring live price data. No fixture-specific claims on the WC post beyond "final group stage days" and "brackets resolving," which is accurate for June 26 in a tournament running through June 27 group stage.

## Images — generation pipeline

Script: `gen-social-images-2026-06-26.py`. Model: `gemini-2.5-flash-image` per [[banana-image-model-fallback]]. All 5 images generated on first attempt, no retries needed.

Results:
- `2026-06-26-twitter-worldcup-bracket.png` — 1903KB (atmospheric stadium exterior, golden hour)
- `2026-06-26-threads-worldcup-bracket.png` — 1888KB (stadium interior, upper deck, floodlights)
- `2026-06-26-instagram-presale-myth.png` — 261KB (tip card, "PRESALE ≠ CHEAPER")
- `2026-06-26-twitter-weekday-price.png` — 873KB (data-visual bar chart, TUE vs SAT)
- `2026-06-26-twitter-soldout-myth.png` — 865KB (tip card, "SOLD OUT" struck through)

All placed at `web/public/social/generated/2026-06-26-*.png`.

## Notes / upstream blockers

Unchanged: price feed must return resale listing data before deal-alert and savings-win pillars can use verified numbers. Until then, content stays on Tips/Education, World Cup, and honest Price-Intelligence framing. [[watchlist-no-targets-alerts-cant-arm]] and [[price-history-empty-alerts-broken]] remain open upstream.
