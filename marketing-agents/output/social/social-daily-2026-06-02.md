# Social Daily — 2026-06-02 (Tuesday)

## Posts shipped: 6

| Time (UTC) | Platform | ID | Pillar |
|---|---|---|---|
| 13:00 | twitter | 2026-06-02-twitter-wcf-g1-t2-walkup-resolution | Price Intelligence |
| 13:30 | threads | 2026-06-02-threads-wcf-g1-walkup-resolved-cross-conference | Price Intelligence |
| 15:00 | instagram | 2026-06-02-instagram-wcf-g1-walkup-confirmation | Price Intelligence |
| 17:00 | twitter | 2026-06-02-twitter-world-cup-r32-t9-compression-second-weekday | World Cup 2026 |
| 21:00 | twitter | 2026-06-02-twitter-ecf-g2-inventory-climb-repeat-leadin | Price Intelligence |
| 23:00 | tiktok | 2026-06-02-tiktok-tuesday-three-arc-resolution | Price Intelligence |

## Narrative threads

**WCF Game 1 T-2 walk-up — marquee resolution of the West read (Twitter 9 AM + Threads 9:30 AM + Instagram 11 AM).** Per Monday's setup, Tuesday's T-2 walk-up was the confirmation call on the West-conference finals read. Today's resolution: $283 on the West lower-bowl 100s, SeatGeek floor, dead inside the $278 to $294 band called Monday. The three-day arc walked clean — Sunday inventory open $271, Monday climb $276, Tuesday walk-up $283, twelve bucks across three days. Both off-band scenarios stayed dead: over $300 (West ran hotter than the East-premium model) and under $272 (West secondary depression). The cross-conference gap held the whole way: East home court ran its Game 1 walk-up at $304, so West resolved $21 under on the same lower-bowl tier (the premium narrowed a few bucks off the inventory-open $28 read but never flipped). Cheapest finals seat of the cycle stays West. Twenty-third pre-event call inside band. Twitter lands the short three-print verdict; Threads carries the full arc plus the buyer takeaway; Instagram repeats the confirmation with the early-buy-window lesson.

**World Cup R32 T-9 compression — second weekday print (Twitter 1 PM).** Per Monday's setup, Tuesday T-9 was the second weekday break-or-hold on the R32 lift-rate compression arc. Today's read: $374 on MetLife Cat 2 lower bowl ends, SeatGeek floor, two-buck lift from Monday's $372, inside the $373 to $377 forecast band and under the over-$378 late-buyer-fire line. Compression held a sixth straight day. Thirteen-day arc: T-21 $348, T-13 $367, T-11 $370, T-10 $372, T-9 $374 — twenty-six bucks across thirteen days, one-to-two-buck per-day lift. The post-T-14 late-buyer wave still hasn't fired. Twenty-fourth pre-event call inside band.

**ECF Game 2 inventory climb — single-pool repeat lead-in (Twitter 5 PM).** Monday's $295 G2 inventory open climbed to $300 Tuesday on the home-court lower bowl 100s, five over the open — same shape Game 1 walked before its clean T-2 print. Sets up the G2 walk-up as the within-series repeat of the single-pool model that resolved clean on G1.

**Two-marquee-resolution Tuesday print (TikTok 7 PM).** Three-print recap: WCF G1 T-2 walk-up ($283 inside $278-294, three-day arc, $21 East premium held), R32 T-9 compression ($374 inside $373-377, sixth straight hold, thirteen-day arc), ECF G2 inventory climb ($300, five over the open). Accountability stack: twenty-third pre-event call inside band on the WCF arc and twenty-fourth on the R32 arc, two marquee forecasts inside band the same day.

## Brand voice QC

- **Banned words:** Zero. Word-boundary regex scan (lowercased) against the full banned-word list returned zero hits across all six post bodies (verified via /tmp/build_posts.py).
- **Banned phrases:** Zero. Substring scan against the full banned-phrase list returned zero hits. "The cross-conference gap held" and "the buy window opens early" are plain statements, not banned constructions.
- **Em dashes:** Zero across all six post bodies (programmatic "—" count returned 0 each). Cadence breaks use periods, commas, and colons only. Em dashes appear in this log file's prose only, never in a post body.
- **Emojis:** Zero everywhere — Twitter (3 posts), Threads, Instagram (under the 2-max), and zero decorative emoji in the TikTok body (hashtags only). Programmatic codepoint scan confirmed.
- **Character limits:** All three Twitter posts under 280 (258, 276, 231). Verified programmatically.
- **Rule of three:** Avoided as a rhetorical device. Enumerations are real and counted (thirteen-day arc = quoted rows; three-arc Tuesday recap = three named arcs). No forced triads.
- **Sentence rhythm:** Mixed across all posts. Twitter alternates the data row with short verdict clauses ("Cheapest finals seat stays West", "Late wave still cold"). Threads and Instagram alternate the arc, the cross-conference read, and the buyer takeaway.
- **Specific data points:** Every post anchored on concrete numbers — floors ($283, $271, $276, $374, $300, $295), deltas (twelve bucks, two bucks, twenty-six bucks, $21, five bucks), forecast bands ($278-294, $373-377), day counters (T-2, T-9, twenty-third call). Dollar amounts spelled out selectively for variety.
- **URL placement:** Natural end-of-post "ticketscan.io" on all Twitter + Threads. "Link in bio" on Instagram and TikTok per platform convention.

## Images

All Twitter, Instagram, and Threads posts use the standard fallback (`/social/ig-template.png`). The Banana / Gemini image-generation MCP tools are not exposed in this agent runtime (ToolSearch query returned no matching image-gen tools — `gemini_generate_image` / `set_aspect_ratio` absent), and the direct-API fallback continues to lack a configured key. Fallback path is per spec ("If generation still fails, skip the image and set mediaUrls to the fallback"). Consistent with the prior 21 consecutive days. TikTok has no image attached per spec.

## Scheduling

Twitter posts spaced 4 hours apart (09:00, 13:00, 17:00 ET → 13:00, 17:00, 21:00 UTC). Threads at 9:30 AM ET (13:30 UTC), 30 minutes after the 9 AM ET Twitter (the WCF G1 walk-up resolution is the Tuesday marquee post). Instagram at 11:00 ET (15:00 UTC). TikTok at 7 PM ET (23:00 UTC). All inside platform optimal-engagement windows for a Tuesday.

## Tomorrow's setup (Wednesday 2026-06-03)

- **World Cup R32 T-8 compression test — third weekday print.** Tuesday's $374 T-9 held compression a sixth straight day. Wednesday T-8 forecast band $375 to $379 on the held one-to-two-buck per-day lift. Pass/fail: over $380 means the post-T-14 late-buyer wave finally fired; under $375 means compression deepened. Twenty-fifth-call continuation candidate. Note: T-8 is the closest-in R32 read yet; watch for the late-buyer line ($378-380) being tested as the window tightens.
- **ECF Game 2 T-2 walk-up — single-pool repeat resolution.** Tuesday's $300 G2 inventory climb (five over the $295 open) sets the leading read. Wednesday's G2 walk-up resolves the within-series repeat of the single-pool model. Inside-band confirm firms the model two-for-two; an over/under print breaks it. Forecast band to set off the G1 walk-up baseline.
- **WCF Game 2 inventory open — West-series day-of cross-read.** With WCF G1 resolved, watch for the Game 2 inventory open on the West venue as the next leading indicator (parallels the ECF G1→G2 supply reset). If WCF G2 opens above the $271 G1 open, the home-court-holds-serve read repeats on the West side.
- **Rotation candidates for Wednesday Instagram + TikTok.** (a) R32 T-8 as the closest-in compression print with the late-buyer-line stress test — strongest pick as the window tightens. (b) ECF G2 T-2 walk-up single-pool repeat resolution. (c) WCF G2 inventory open cross-series read. (d) Zach Bryan MetLife post-show resale-collapse pattern as the next tour-stop playbook reference (still un-shipped, good evergreen rotation).
- **Watch for:** R32 T-8 testing the $378-380 late-buyer line as the window tightens. ECF G2 T-2 walk-up landing inside or outside band as the single-pool repeat. WCF G2 inventory open as the West-series day-of cross-read.
