# Content Refresh Log

## 2026-04-17 — American Airlines Center (venues.ts)

**Page refreshed:** `american-airlines-center` in `web/src/data/venues.ts`

**What changed:**
1. **Sections expanded** from 5 (1 floor, 2 lower, 2 upper) to 75 sections matching AAC's actual layout:
   - 1 Floor section (Courtside for Mavs, Ice Level for Stars)
   - 24 Lower Bowl sections (101-124) — full wrap-around 100 level
   - 20 Platinum Club boxes (Platinum P1-P20) — added entirely new premium mid-level tier with private lounges and in-seat service
   - 30 Upper Mezzanine sections (301-330) — full upper wrap
2. **Description** upgraded from 1 generic sentence to a full paragraph covering: event volume (200+ per year), dual-league tenancy (Mavericks NBA + Stars NHL), Victory Park neighborhood context north of downtown Dallas, Platinum Club perks, Upper Mezzanine value, and TicketScan CTA
3. **Keywords** expanded from 4 to 10, adding: "Dallas arena tickets," "American Airlines Center seating chart," "Dallas concert tickets," "Mavericks playoff tickets," "Stars playoff tickets," "American Airlines Center events," "Victory Park Dallas tickets"

**Why this venue:**
- Most sparse remaining venue data after TD Garden (4/10) and Wells Fargo Center (4/11) refreshes (only 4 sections vs 60+ for comparable dual-tenant arenas)
- **Perfect timing**: Stars vs Wild NHL first-round Game 1 is tonight at AAC, Game 2 Sunday. Mavericks are also in the NBA first round with home games next week. Both active playoff series drive peak search volume for "Stars playoff tickets" and "Mavericks playoff tickets" right now
- Yesterday's content hook explicitly flagged this venue page as a refresh candidate tied to the Stars-Wild price gap narrative
- Platinum Club is a legitimate premium tier at AAC that wasn't represented at all in the prior data

**SEO impact expected:**
- Full section data populates the seating guide sidebar and gives Google more on-page entity signals
- Richer description lifts the "About" content depth to match MSG/TD Garden/Wells Fargo
- Dual playoff keyword cluster ("Mavericks playoff tickets" + "Stars playoff tickets") captures Dallas's April-May seasonal search surge
- Victory Park mention opens internal-link potential to Dallas city page and future AT&T Stadium (Cowboys / World Cup 2026 venue) cross-references

**Verification:**
- `npx tsc --noEmit` ran clean -- no TypeScript errors introduced

---

## 2026-04-11 — Wells Fargo Center (venues.ts)

**Page refreshed:** `wells-fargo-center` in `web/src/data/venues.ts`

**What changed:**
1. **Sections expanded** from 5 (1 floor, 2 lower, 2 upper) to 61 sections with accurate Wells Fargo Center layout:
   - 1 Floor section
   - 24 Lower Bowl sections (101-124) — full wrap-around lower level
   - 12 Club sections (Club 1-12) — added entirely new mezzanine club tier
   - 24 Upper Bowl sections (201-224) — full upper level
2. **Description** upgraded from 1 generic sentence to a rich description covering: event volume (250+ per year), location context (South Philly Sports Complex alongside Citizens Bank Park and Lincoln Financial Field), club level perks (padded seating, in-seat service), upper-level value angle, and TicketScan CTA
3. **Keywords** expanded from 4 to 9, adding: "Wells Fargo Center seating chart", "Philadelphia concert tickets", "76ers playoff tickets", "Flyers playoff tickets", "Wells Fargo Center events"

**Why this venue:**
- Most sparse venue data remaining after TD Garden refresh (was only 5 sections vs 30+ for comparable arenas)
- Both home teams (76ers, Flyers) are in the 2025-26 playoff picture, driving high search volume
- "76ers playoff tickets" and "Flyers playoff tickets" are high-intent seasonal keywords we were missing
- South Philly Sports Complex context adds internal linking potential to Lincoln Financial Field (World Cup 2026 venue)

**SEO impact expected:**
- Full section data populates the seating guide sidebar on the venue page
- Richer description gives Google more content to index
- Playoff-related keywords capture April/May seasonal search spikes
- Sports complex mention creates natural association with World Cup 2026 venue page

---

## 2026-04-10 — TD Garden (venues.ts)

**Page refreshed:** `td-garden` in `web/src/data/venues.ts`

**What changed:**
1. **Sections expanded** from 6 (3 lower, 3 upper) to 63 sections with accurate TD Garden naming:
   - 1 Floor section
   - 22 Loge sections (Loge 1-22) — TD Garden uses "Loge" not generic numbered sections
   - 10 Club sections (Club 101-110) — added entirely new club tier
   - 30 Balcony sections (BAL 301-330) — TD Garden uses "Balcony" not "Upper"
2. **Description** upgraded from 1 generic sentence to a rich 3-sentence description covering: event volume (200+ per year), transit accessibility (above North Station), club seat perks, and a TicketScan CTA
3. **Keywords** expanded from 4 to 9, adding: "TD Garden seating chart", "Boston concert tickets", "Celtics playoff tickets", "Bruins playoff tickets", "TD Garden events"

**Why this venue:**
- Most sparse venue data in the entire dataset (was 6 sections vs 30+ for comparable arenas like MSG, United Center)
- Both home teams (Celtics, Bruins) are in the 2025-26 playoff picture, driving high search volume right now
- "TD Garden seating chart" and "Celtics playoff tickets" are high-intent keywords we were missing

**SEO impact expected:**
- Better section data improves the seating guide sidebar on the venue page
- Richer description gives Google more content for the "About" section
- Playoff-related keywords should capture seasonal search spikes
