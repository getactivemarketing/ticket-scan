# Social Daily — 2026-05-31 (Sunday)

## Posts shipped: 6

| Time (UTC) | Platform | ID | Pillar |
|---|---|---|---|
| 13:00 | twitter | 2026-05-31-twitter-ecf-g1-t2-walkup-model-transfer | Price Intelligence |
| 13:30 | threads | 2026-05-31-threads-ecf-g1-model-transfer-arc | Price Intelligence |
| 15:00 | instagram | 2026-05-31-instagram-ecf-g1-resolution-wcf-setup | Price Intelligence |
| 17:00 | twitter | 2026-05-31-twitter-world-cup-r32-t11-compression-fourth-day | World Cup 2026 |
| 21:00 | twitter | 2026-05-31-twitter-round3-ecf-wcf-cross-series-ladder | Price Intelligence |
| 23:00 | tiktok | 2026-05-31-tiktok-day-arc-resolve-round3-model-transfer | Price Intelligence |

## Narrative threads

**ECF Game 1 T-2 walk-up resolves — first Round 3 day-of forecast call (Twitter 9 AM + Threads 9:30 AM).** Per yesterday's setup, Sunday morning's ECF Game 1 T-2 walk-up was the first conference-finals day-of call and the cleanest test of whether the Round 2 single-pool supply model transfers to Round 3. Today's read: $304 on the home-court lower bowl 100s, SeatGeek floor, inside the $295 to $312 forecast band. Off Saturday's $288 inventory open, that's a sixteen-buck overnight climb straight into band. The second-round single-window dynamic with no parallel-pool fallback carried clean onto the conference-finals stage — under $292 (secondary depression) and over $318 (cheapest entry shifts West) both stayed off the table. Twenty-first pre-event call inside band this week, and the first outside the regular four-arc rotation. Twitter lands the short data point with the model-transfer framing; Threads carries the full arc (why the single-pool question mattered, the $288 inventory-open buy-window note, the twenty-first-call accountability tag).

**World Cup R32 T-11 compression, fourth consecutive weekend-window print (Twitter 1 PM).** Per yesterday's setup, Sunday T-11 was the third weekend-window break-or-hold test on the R32 lift-rate compression arc. Today's read: $370 MetLife Cat 2 lower bowl ends SeatGeek floor, two-buck lift from Saturday's $368, inside the $369 to $373 forecast band and under the over-$374 late-buyer-fire threshold. Compression held for the fourth straight day. Eleven-day arc walks T-21 $348, T-15 $363, T-13 $367, T-12 $368, T-11 $370 — twenty-two bucks across eleven days, one-to-two-buck per-day lift through the window. The post-T-14 late-buyer wave still hasn't fired.

**Round 3 ECF-vs-WCF cross-series ladder — East-vs-West conference premium test (Twitter 5 PM).** ECF Game 1 home court ran $304 today; WCF Game 1 inventory opened on the West Coast venue at $271 on the same lower-bowl tier. Thirty-three bucks, East conference over West. The structural conference home-court premium reads real, and the cheapest conference-finals entry sits out West — which sets up the Tuesday WCF Game 1 T-2 walk-up forecast of $278 to $294.

**ECF G1 resolution + WCF G1 forward setup (Instagram 11 AM).** Carries the first Round 3 day-of call ($304 inside $295-312), the model-transfer confirmation, the twenty-one-call accountability stack, and the WCF Game 1 West Coast setup (Monday inventory open, Tuesday T-2 forecast $278-294) with the East-conference-premium read. Buyer takeaway: cheapest ECF home-court entry of the cycle landed at the $288 open, two days before the walk-up.

**Full day-of arc resolution (TikTok 7 PM).** Four-print resolution: ECF G1 T-2 walk-up ($304 inside $295-312, first Round 3 call, model transfers), R32 T-11 compression ($370 inside $369-373, fourth straight hold, eleven-day arc), the ECF-vs-WCF cross-series ladder (thirty-three bucks East over West, Tuesday WCF setup). Accountability stack: twenty-one pre-event calls inside band this week across four arcs, plus the conference-finals model-transfer test inside band too.

## Brand voice QC

- **Banned words:** Zero. Programmatic word-boundary scan (substring on lowercased text) against the full banned list returned zero hits across all six post bodies (verified via /tmp/build_posts.py).
- **Banned phrases:** Zero. Substring scan against the full banned-phrase list returned zero hits. The Threads "Why it matters." was written deliberately as a two-word fragment to avoid the banned "Here's the thing" / "Here's what you need to know" construction.
- **Em dashes:** Zero across all six post bodies (programmatic "—" scan returned zero). Cadence breaks use periods and commas only. Em dashes appear in this log file's prose only, never in a post body.
- **Emojis:** Zero on Twitter (3 posts), zero on Threads, zero on Instagram (under the 2-max), zero decorative emoji in the TikTok body (hashtags only).
- **Character limits:** All three Twitter posts under 280 (257, 253, 267). Verified programmatically.
- **Rule of three:** Avoided as a rhetorical device. Enumerations are real and counted (eleven-day arc = five quoted rows, four-arc accountability stack = four named arcs). No forced triads.
- **Sentence rhythm:** Mixed across all posts. Twitter alternates the data row with short verdict clauses ("dead in band", "Late-buyer wave still hasn't fired"). Threads and Instagram alternate the print, the model read, the arc walk, and the buyer takeaway.
- **Specific data points:** Every post anchored on concrete numbers — floors ($304, $370, $288, $271), deltas (sixteen bucks, two bucks, twenty-two bucks, thirty-three bucks), forecast bands ($295-312, $369-373, $278-294), day counters (T-2, T-11, twenty-first call). Dollar amounts spelled out selectively for variety.
- **URL placement:** Natural end-of-post "ticketscan.io" on all Twitter + Threads. "Link in bio" on Instagram and TikTok per platform convention.

## Images

All Twitter, Instagram, and Threads posts use the standard fallback (`/social/ig-template.png`). The Banana / Gemini image-generation MCP tools (`set_aspect_ratio`, `gemini_generate_image`) are not exposed in this agent runtime — re-confirmed via ToolSearch this run (query "gemini generate image set aspect ratio nanobanana banana" returned no matching deferred image tools). Fallback path is per spec ("If generation still fails, skip the image and set mediaUrls to the fallback"). Consistent with the prior 19 consecutive days. TikTok has no image attached per spec.

## Scheduling

Twitter posts spaced 4 hours apart (09:00, 13:00, 17:00 ET → 13:00, 17:00, 21:00 UTC). Threads at 9:30 AM ET (13:30 UTC), 30 minutes after the 9 AM ET Twitter (the ECF G1 first-Round-3-call resolution is the Sunday marquee post). Instagram at 11:00 ET (15:00 UTC). TikTok at 7 PM ET (23:00 UTC). All inside platform optimal-engagement windows for a Sunday.

## Tomorrow's setup (Monday 2026-06-01)

- **WCF Game 1 Monday inventory-open read — leading indicator into Tuesday T-2.** Today's $271 West Coast inventory open and the $33 East-over-West premium set the leading read. Monday morning inventory climb confirms (or breaks) the Tuesday T-2 walk-up forecast band of $278 to $294. Over $300 means the West venue ran hotter than the East-premium model assumed; under $272 means the West secondary stayed soft and the cross-conference cheapest-seat thesis holds.
- **World Cup R32 T-10 compression test, first weekday print after four weekend-window holds.** Today's $370 T-11 held the compression a fourth straight day. Monday T-10 forecast band $371 to $375 on the held one-to-two-buck per-day lift. Pass/fail: over $376 means the late-buyer wave finally fired on the post-T-14 window; under $371 means compression deepened and FIFA resale flow stays heavier than modeled. Twenty-second-call accountability stack continuation candidate.
- **ECF Game 1 outcome → ECF Game 2 supply-pool reset.** With ECF G1 tipped Sunday night, Monday's ECF Game 2 inventory open becomes the next single-pool day-of setup. Whether the home team held serve in G1 drives the G2 secondary supply read.
- **Rotation candidates for Monday Instagram + TikTok.** (a) WCF G1 Monday inventory-open read as the West-venue leading indicator into the Tuesday T-2 call with the East-vs-West premium framing — strongest pick, highest forward relevance. (b) R32 T-10 realized print with the twelve-day arc recap and the Tuesday T-9 forward setup. (c) ECF G1 outcome → G2 supply reset as the within-series single-pool repeat test. (d) Zach Bryan MetLife post-show resale-collapse pattern as the next tour-stop playbook reference.
- **Watch for:** Monday WCF G1 inventory climb toward the $278-294 band as the West-venue confirmation. R32 T-10 print as the first weekday compression test after four weekend holds. ECF G1 Sunday-night result as the G2 supply lead-in. Zach Bryan post-show secondary collapse for the next playbook reference.
