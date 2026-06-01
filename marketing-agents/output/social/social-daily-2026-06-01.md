# Social Daily — 2026-06-01 (Monday)

## Posts shipped: 6

| Time (UTC) | Platform | ID | Pillar |
|---|---|---|---|
| 13:00 | twitter | 2026-06-01-twitter-wcf-g1-monday-inventory-open-read | Price Intelligence |
| 13:30 | threads | 2026-06-01-threads-wcf-g1-inventory-open-cross-conference-arc | Price Intelligence |
| 15:00 | instagram | 2026-06-01-instagram-wcf-g1-read-tuesday-setup | Price Intelligence |
| 17:00 | twitter | 2026-06-01-twitter-world-cup-r32-t10-compression-first-weekday | World Cup 2026 |
| 21:00 | twitter | 2026-06-01-twitter-ecf-g2-supply-pool-reset | Price Intelligence |
| 23:00 | tiktok | 2026-06-01-tiktok-monday-three-arc-print | Price Intelligence |

## Narrative threads

**WCF Game 1 Monday inventory-open read — first West-conference leading indicator (Twitter 9 AM + Threads 9:30 AM).** Per Sunday's setup, Monday's job was the WCF Game 1 inventory climb as the leading read into Tuesday's T-2 walk-up. Today's read: $276 on the West Coast venue lower-bowl 100s, SeatGeek floor, up five bucks from Sunday's $271 inventory open and tracking dead center into the $278 to $294 Tuesday T-2 forecast band. Over $300 (West ran hotter than the East-premium model) and under $272 (West secondary depression) both stayed off the table. The cross-conference gap held: East home court ran $304 at its Game 1 walk-up, so West sits $28 under on the same lower-bowl tier, and the cheapest finals seat of the cycle stays out West. Twitter lands the short five-buck-climb data point; Threads carries the full arc (the cross-conference premium, the Tuesday confirmation thresholds, the dead-center tracking note).

**World Cup R32 T-10 compression — first weekday print after four weekend holds (Twitter 1 PM).** Per Sunday's setup, Monday T-10 was the first weekday break-or-hold test on the R32 lift-rate compression arc. Today's read: $372 on MetLife Cat 2 lower bowl ends, SeatGeek floor, two-buck lift from Sunday's $370, inside the $371 to $375 forecast band and under the over-$376 late-buyer-fire threshold. Compression held a fifth straight day and carried clean from the weekend window into a weekday print. Twelve-day arc walks T-21 $348, T-15 $363, T-13 $367, T-12 $368, T-11 $370, T-10 $372 — twenty-four bucks across twelve days, one-to-two-buck per-day lift through the window. The post-T-14 late-buyer wave still hasn't fired. Twenty-second pre-event call inside band.

**ECF Game 1 outcome → Game 2 supply-pool reset (Twitter 5 PM).** ECF Game 1 went to the home team Sunday night. Game 2 inventory opened Monday at $295 on the home-court lower bowl 100s, seven over the G1 $288 open — holding serve firms the secondary supply read. Sets up the next single-pool day-of test at the G2 T-2 walk-up, the within-series repeat of the model that resolved clean on G1.

**WCF read + Tuesday confirmation setup (Instagram 11 AM).** Carries the Monday $276 inventory read (up five from $271, tracking into $278-294), the East-over-West premium ($28 under on the same tier, cheapest finals seat out West), the Tuesday T-2 confirmation thresholds, and the buyer takeaway (cheapest entry keeps landing at the inventory open — ECF G1's cycle low was the $288 open, two days before tip).

**Three-arc Monday print (TikTok 7 PM).** Three-print recap: WCF G1 inventory read ($276, up five, tracking into $278-294, $28 East premium), R32 T-10 compression ($372 inside $371-375, fifth straight hold, twelve-day arc, twenty-fourth buck), ECF G1 outcome → G2 supply reset ($295 open, seven over G1). Accountability stack: twenty-second pre-event call inside band on the R32 arc plus the WCF read tracking center two days out.

## Brand voice QC

- **Banned words:** Zero. Programmatic substring scan (lowercased) against the full banned-word list returned zero hits across all six post bodies (verified via /tmp/build_posts.py).
- **Banned phrases:** Zero. Substring scan against the full banned-phrase list returned zero hits. "The East-over-West premium is the story" and "the cross-conference gap holds" are plain statements, not banned constructions.
- **Em dashes:** Zero across all six post bodies (programmatic "—" count returned 0). Cadence breaks use periods, commas, and colons only. Em dashes appear in this log file's prose only, never in a post body.
- **Emojis:** Zero everywhere — Twitter (3 posts), Threads, Instagram (under the 2-max), and zero decorative emoji in the TikTok body (hashtags only). Programmatic codepoint scan confirmed.
- **Character limits:** All three Twitter posts under 280 (258, 265, 255). Verified programmatically.
- **Rule of three:** Avoided as a rhetorical device. Enumerations are real and counted (twelve-day arc = six quoted rows; three-arc Monday print = three named arcs). No forced triads.
- **Sentence rhythm:** Mixed across all posts. Twitter alternates the data row with short verdict clauses ("Cheaper finals seat stays West", "Late-buyer wave still cold"). Threads and Instagram alternate the print, the cross-conference read, the confirmation thresholds, and the buyer takeaway.
- **Specific data points:** Every post anchored on concrete numbers — floors ($276, $271, $372, $295, $288), deltas (five bucks, two bucks, twenty-four bucks, $28, seven bucks), forecast bands ($278-294, $371-375), day counters (T-2, T-10, twenty-second call). Dollar amounts spelled out selectively for variety.
- **URL placement:** Natural end-of-post "ticketscan.io" on all Twitter + Threads. "Link in bio" on Instagram and TikTok per platform convention.

## Images

All Twitter, Instagram, and Threads posts use the standard fallback (`/social/ig-template.png`). The Banana / Gemini image-generation MCP tools are not exposed in this agent runtime (ToolSearch query returned no matching deferred image tools), and the direct-API fallback script (`generate.py`) fails with "No API key" — no `GOOGLE_AI_API_KEY` / `GEMINI_API_KEY` set in env, `.env`, or `~/.banana/`. Fallback path is per spec ("If generation still fails, skip the image and set mediaUrls to the fallback"). Consistent with the prior 20 consecutive days. TikTok has no image attached per spec.

## Scheduling

Twitter posts spaced 4 hours apart (09:00, 13:00, 17:00 ET → 13:00, 17:00, 21:00 UTC). Threads at 9:30 AM ET (13:30 UTC), 30 minutes after the 9 AM ET Twitter (the WCF G1 inventory-open read is the Monday marquee post). Instagram at 11:00 ET (15:00 UTC). TikTok at 7 PM ET (23:00 UTC). All inside platform optimal-engagement windows for a Monday.

## Tomorrow's setup (Tuesday 2026-06-02)

- **WCF Game 1 T-2 walk-up — confirmation call on the West read.** Monday's $276 inventory climb tracks dead center into the $278 to $294 T-2 band. Tuesday's T-2 walk-up resolves it: inside band confirms the cross-conference model and keeps the cheapest finals seat out West; over $300 means the West venue ran hotter than the East-premium model assumed; under $272 means the West secondary stayed soft and the cheapest-seat thesis holds harder. Twenty-third-call accountability candidate.
- **World Cup R32 T-9 compression test, second weekday print.** Monday's $372 T-10 held compression a fifth straight day. Tuesday T-9 forecast band $373 to $377 on the held one-to-two-buck per-day lift. Pass/fail: over $378 means the late-buyer wave finally fired on the post-T-14 window; under $373 means compression deepened. Twenty-fourth-call continuation candidate.
- **ECF Game 2 inventory climb — single-pool repeat lead-in.** Monday's $295 G2 inventory open sets the within-series day-of setup. Tuesday's G2 inventory climb becomes the leading read into the G2 T-2 walk-up, the repeat test of the single-pool model that resolved clean on G1.
- **Rotation candidates for Tuesday Instagram + TikTok.** (a) WCF G1 T-2 walk-up resolution as the West-read confirmation with the East-vs-West premium framing — strongest pick, marquee resolution. (b) R32 T-9 realized print with the thirteen-day arc recap and the T-8 forward setup. (c) ECF G2 inventory climb → G2 walk-up single-pool repeat. (d) Zach Bryan MetLife post-show resale-collapse pattern as the next tour-stop playbook reference.
- **Watch for:** Tuesday WCF G1 T-2 walk-up landing inside or outside the $278-294 band as the marquee resolution. R32 T-9 print as the second weekday compression test. ECF G2 inventory climb as the single-pool repeat lead-in. Zach Bryan post-show secondary collapse for the next playbook reference.
