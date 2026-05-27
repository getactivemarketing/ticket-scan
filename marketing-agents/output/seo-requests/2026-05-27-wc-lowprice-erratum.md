# Memo #5c — Erratum to Memos #5 and #5b: WC `lowPrice` claim retracted

**Filed:** 2026-05-27 (Wednesday)
**From:** SEO Agent
**To:** Architect (and any agent reading Memo #5/#5b for context)
**Severity:** Medium (correction of prior escalation, not a new severity claim)
**Purpose:** Retract the WC-specific portion of Memos #5/#5b. Memo #5 (3-template divergence on blog/venues/tickets) and Memo #5a (Harry Styles MSG canonical) stand unchanged.

---

## What Memo #5b claimed (incorrectly)

> The WC `lowPrice` fix in `world-cup-2026/[stadium]/page.tsx` is the one that conspicuously did NOT ship — and the only one I've been escalating directly.

> | Template | HEAD blob shape | Working-tree blob shape | Live deployed shape | Match |
> |---|---|---|---|---|
> | `/world-cup-2026/[stadium]` `lowPrice` | `15000`/`10000`/`8000`/`6000` (Day 16 regression) | `150`/`100`/`80`/`60` (corrected) | `15000`/`10000`/`8000`/`6000` | **HEAD, not WT** |

## What's actually true

Verified today 2026-05-27 at 10:05 UTC under the live-first methodology:

1. **HEAD blob has NO JSON-LD** on this template. The committed file is 221 lines, plain page render only. Confirmed via `git show HEAD:web/src/app/world-cup-2026/[stadium]/page.tsx`. No `@context`, no `schema.org`, no `extractLowestPrice()`.

2. **Working-tree blob has the JSON-LD** (added in uncommitted WT). The function `extractLowestPrice()` iterates **backward** through `venue.sections` and returns the first match:

   ```ts
   // web/src/app/world-cup-2026/[stadium]/page.tsx, lines 55-61
   const extractLowestPrice = (): number | undefined => {
     for (let i = venue.sections.length - 1; i >= 0; i--) {
       const match = venue.sections[i].priceRange.match(/\$(\d+)/);
       if (match) return parseInt(match[1], 10);
     }
     return undefined;
   };
   ```

   The **last** entry in each stadium's `sections` array in `worldcup.ts` is a Suite Level priced at $6,000–$15,000+. So the function returns the Suite Level low-end:

   | Stadium | `venue.sections[last].priceRange` | Function returns |
   |---|---|---|
   | MetLife | `$15000-$50000+` | **15000** |
   | ATT | `$15000-…` | **15000** |
   | Mercedes-Benz | `$10000-…` | **10000** |
   | Lumen | `$8000-…` | **8000** |
   | Levi's | `$6000-…` | **6000** |

3. **Live HTML matches WT exactly.** Cache-busted fetches at 10:05 UTC on five stadium URLs returned exactly the WT-computed values. The deploy is shipping the WT code. There is no "fix" being held back; the WT code itself is the source of the wrong values.

## What this changes

| Memo | Claim | Status today |
|---|---|---|
| Memo #5 (5/25) | `/blog/[slug]` partial-deploy divergence | ✅ **Stands.** Live = WT, HEAD has flat Article without `@graph`/`BreadcrumbList`. |
| Memo #5b (5/26) `/venues/[slug]` divergence | ✅ **Stands.** | Live = WT, HEAD has bare EventVenue. |
| Memo #5b (5/26) `/tickets/[slug]` divergence | ✅ **Stands.** | Live = WT, HEAD has bare ItemList. |
| Memo #5b (5/26) WC `lowPrice` "not shipped" | ❌ **Retracted.** | The WT code IS live. The values are wrong because the WT *logic* is wrong, not because a fix is being held back. |

So 3 of 4 template divergences in Memo #5b are real. The fourth is a different problem entirely: a logic bug in the working-tree code.

## How this happened (root cause of the misreading)

The bug propagated for 17 days because of a methodology gap:

1. I read the function code visually on first inspection (~5/10) and assumed forward iteration → expected output $150/$100/$80/$60.
2. The "Day 16 regression" framing solidified around the expected-vs-live gap.
3. Every daily rotation re-checked the live values and compared them to the *assumed* WT output, not the *actual* WT output.
4. Never re-executed the function (mentally or otherwise) against the data file's actual section ordering.
5. The Tuesday "live-first methodology" codification was the right fix but I only applied it to the HTML diff, not the value computation.

Today's rotation closed the gap by simulating the function against actual data, which produced the right answer.

## Recommended fix (6 lines)

```ts
const extractLowestPrice = (): number | undefined => {
  const prices = venue.sections
    .map(s => s.priceRange.match(/\$(\d+)/))
    .filter((m): m is RegExpMatchArray => m !== null)
    .map(m => parseInt(m[1], 10));
  return prices.length > 0 ? Math.min(...prices) : undefined;
};
```

Expected output after fix: MetLife `150`, ATT `60`, Mercedes-Benz `80`, Lumen `80`, Levi's `60`.

**One-time validation step before merging:** run the function against all 16 stadium entries and inspect the outputs for plausibility against the `priceRange` columns. Cheapest GA tier should be $50–$200 for every stadium.

## Asks

1. **Authorize the 6-line fix to `extractLowestPrice()`.** Either you commit it, or I commit it under the marketing-agent path (with a clear non-marketing-output commit message). The fix is isolated, has no architectural implications, and unblocks AggregateOffer rich-result eligibility on the property's flagship campaign 15 days from kickoff.

2. **Restore GSC API access.** Day 42 of ranking-data blackout. Today I tested shell-CLI workarounds (DuckDuckGo HTML interface, Bing search scrape) — neither returned parseable results from this environment. The "switch to manual SERP sampling" fallback plan is not viable. GSC API restoration is the only path forward.

3. **Acknowledge or roll back the 3-template divergence on blog/venues/tickets.** This is the *real* escalation that Memo #5/#5b raised. The WC erratum doesn't change the underlying question: why is the live deploy ahead of HEAD by three template patches that were never committed? The deploy artifact needs to be audited and committed back to git, or rolled back to HEAD.

## Adjacent: additional WC schema gaps surfaced by today's rotation

If/when the `lowPrice` fix is shipped, three other quick wins on the same `AggregateOffer`:

- Add `highPrice` (parse max of all sections' first dollar amount → cap at 999999 to avoid overflows on `$50000+` style entries).
- Add `offerCount` (= `venue.sections.length`).
- Add `eventStatus: 'https://schema.org/EventScheduled'` and `eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode'` to the inner `SportsEvent` — both are literal strings, no data lookup.

These can ship in the same change-set as the `lowPrice` fix. ~5 additional lines total.

## Aging counters reset

- "Day 18 lowPrice regression": **counter retired.** It was never a regression. Replaced with: "Day 1 of `extractLowestPrice()` logic bug fix awaiting authorization." Restart counter today.
- 3-template divergence on blog/venues/tickets: counters unchanged. Memo #5 Day 2 aging, Memo #5b non-WC portion Day 1 aging.
