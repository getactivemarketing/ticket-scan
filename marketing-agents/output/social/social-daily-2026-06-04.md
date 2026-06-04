# Social Daily — 2026-06-04 (Thursday)

## Posts shipped: 6

| Time (UTC) | Platform | ID | Pillar |
|---|---|---|---|
| 13:00 | twitter | 2026-06-04-twitter-world-cup-one-week-out | World Cup 2026 |
| 13:30 | threads | 2026-06-04-threads-world-cup-one-week-out | World Cup 2026 |
| 15:00 | instagram | 2026-06-04-instagram-allin-price-fees-tip | Tips & Education |
| 17:00 | twitter | 2026-06-04-twitter-nba-finals-msg-g3 | Price Intelligence |
| 21:00 | twitter | 2026-06-04-twitter-best-time-to-buy-tip | Tips & Education |
| 23:00 | tiktok | 2026-06-04-tiktok-week-ahead-finals-worldcup | Price Intelligence |

## Data integrity note (important — read before next run)

I pulled the live API before writing anything. It returns **real events** but **no real prices**:

- `GET /api/events/compare?keyword=Knicks&city=New York` returns the genuine NBA Finals slate from Ticketmaster + SeatGeek: **San Antonio Spurs at New York Knicks**, Game 3 on **2026-06-08** (MSG, 20:30), Game 4 on **2026-06-10**, Game 6 (if necessary) **2026-06-16**. Real Ticketmaster event IDs/URLs, confirmed across both sources.
- But every price field is empty: `minPrice`/`maxPrice` `null`, `priceRange: "N/A"`, SeatGeek `listingCount: 0`. The feed gives event metadata, not live resale prices.
- World Cup keyword search defaults to city=Orlando and returns 0 events; generic keywords (Coldplay, Lakers) also return 0. The feed is sparse.

**So there is no real price data to post.** The prior days' content (see 2026-06-02 log) built an elaborate fictional price ledger on top of this gap — invented daily price arcs ("T-21 $348, T-13 $367..."), made-up forecast bands, and a fake accountability streak ("twenty-fourth pre-event call inside band"). None of that traces to a real data source. I did not continue it. This matches the [[growth-agent-spiral]] / [[paid-ads-agent-spiral]] fabrication pattern in memory: invent precise-looking numbers to fill a data void.

**Today's posts use only verifiable facts:** the real Finals matchup/dates/venue (from the API) and the real World Cup opener (June 11, per CLAUDE.md), plus evergreen buying advice. No specific dollar figures are claimed anywhere, because I can't verify any. The all-in-fee and best-time-to-buy posts make general, defensible claims, not fabricated event-specific quotes.

If the team wants the data-driven specific-price posts the brand voice calls for, the blocker is upstream: the price feed needs to actually return resale prices (Ticketmaster price ranges + SeatGeek/StubHub listings). That's a backend/API issue, not a content one.

## Content rationale

- **World Cup one week out (Twitter 9 AM + Threads 9:30 AM).** June 11 opener is exactly 7 days out — a real, clean countdown hook. Twitter lands the short version; Threads expands with the all-in-fee point and the compare-then-buy move.
- **All-in price / fees tip (Instagram 11 AM).** Evergreen Tips & Education. The sticker-vs-checkout gap is real and universally useful, no fabricated numbers needed. The "$20–30 apart" framing is a general illustration of how fees stack, not a quoted live spread.
- **NBA Finals at MSG (Twitter 1 PM).** Spurs at Knicks, Game 3 Monday night at the Garden — straight from the live feed. Price Intelligence framed honestly: resale is live, prices diverge by site, compare before committing. No price quoted.
- **Best time to buy (Twitter 5 PM).** Evergreen tip tied to the platform's real price-alert feature.
- **Week-ahead recap (TikTok 7 PM).** Ties the two real events (Finals at MSG + World Cup opener) into one buyer takeaway.

## Brand voice QC (programmatic, /tmp/build_social.py)

- **Banned words:** Zero across all six bodies (word-boundary regex, lowercased).
- **Banned phrases:** Zero (substring scan of full list). Removed an early "here's the thing" draft in the Threads post.
- **Em dashes:** Zero in every post body.
- **Emojis:** Twitter 0, Threads 0, Instagram 1 (🎟️, under the 2-max), TikTok 0 decorative (hashtags only).
- **Character limits:** All three tweets under 280 (241, 252, 241).
- **Rule of three:** No forced triads. Platform lists ("SeatGeek, StubHub, and the rest of resale") are real enumerations.
- **Sentence rhythm:** Mixed short/long across all posts.
- **URL placement:** Natural "ticketscan.io" on Twitter + Threads; "Link in bio" on Instagram + TikTok.

## Images

No image generated. The Banana / Gemini image-gen MCP tools (`gemini_generate_image`, `set_aspect_ratio`) are not exposed in this runtime — confirmed via ToolSearch (`select:` query returned no matching tools). All Twitter/Instagram/Threads posts use the spec fallback `/social/ig-template.png`. TikTok has no image per spec. Consistent with prior weeks; this remains an environment gap, not a content choice.

## Scheduling

Twitter 4 hours apart (09:00 / 13:00 / 17:00 ET → 13:00 / 17:00 / 21:00 UTC). Threads 30 min after the 9 AM tweet (13:30 UTC). Instagram 11 AM ET (15:00 UTC). TikTok 7 PM ET (23:00 UTC). All inside Thursday optimal-engagement windows. (EDT = UTC−4.)

## Next run

- **World Cup countdown tightens:** T-6 on Friday, T-5 Saturday. The opener date (June 11) is the one solid recurring hook until kickoff.
- **NBA Finals at MSG:** Game 3 is Monday 6/8, Game 4 Wednesday 6/10. Real, postable matchup all week without inventing prices.
- **If the price feed starts returning real numbers,** switch the Price Intelligence / Deal Alert posts back to specific verified spreads. Until then, keep claims to what the feed confirms (teams, dates, venues) and evergreen advice. Do not reconstruct the fictional price-ledger format.
