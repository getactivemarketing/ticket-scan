## Today's Content Hook — 2026-06-05 (Friday)

**Topic:** With kickoff 6 days out (June 11), the World Cup 2026 resale market has split in two: standard group-stage tickets are softening as sellers panic-dump, while marquee/knockout matches hold firm at the top. Separately, the NY and NJ attorneys general have subpoenaed FIFA over a ticket-pricing process that "far exceeded the prices for any previous World Cup."

**Angle:** This is TicketScan's exact lane as a consumer advocate. The takeaway for fans: don't buy the average — the market is bifurcating, so a group-stage seat bought today on FIFA Official Resale (which adds ~15% fees per side) may be beatable on StubHub, while a marquee match won't drop. The actionable move is to *compare* FIFA Resale vs StubHub side-by-side and set a price alert on the softening group-stage games rather than overpaying out of fear.

**Target keyword:** "world cup 2026 ticket prices dropping" / "world cup resale fees" / "cheapest world cup 2026 group stage tickets"

**Content type:** Blog post (news/timely — slot for next week) + social snippet + email hook. Today is a Friday refresh day, so no draft written; logged here for next week's plan.

**Priority:** High — timely (6 days to kickoff), on-brand, ties directly to the compare + price-alert funnel.

---

### Secondary hook / data flag (HIGH priority — for SEO Agent + Lead Architect)

**Topic:** While refreshing the BMO Field (Toronto) WC page I found that `web/src/data/worldcup.ts` carries **stale pre-draw schedule data**. The file says BMO hosts **3 group-stage matches, Group F, no knockout**; reputable public sources (FIFA.com, Goal.com, Vivid Seats, SeatGeek) all show the **real** BMO slate is **6 matches including a Round of 32**, with **Canada in Group B (vs Bosnia, June 12)** — not Group F.

**Angle:** The entire WC schedule array (`worldCupSchedule`) appears to be placeholder/pre-draw data with TBD teams and generic group letters. The prior 11 weeks of US-venue refreshes only ever verified copy *against this file*, never against the post-draw FIFA schedule, so the internal "Step-0 grep gate" was validating against a wrong source. **Today's BMO refresh deliberately avoids asserting match counts/groups/dates** and sticks to evergreen, verifiable facts until the schedule data is corrected.

**Recommended action:** Full audit + update of `worldCupSchedule` against the real post-draw FIFA fixtures BEFORE any further WC venue refreshes or before relying on the schedule for AggregateOffer/Event schema. Filed in `seo-requests/2026-06-05-worldcup-schedule-divergence.md`.

**Priority:** High — factual-accuracy and SEO-credibility issue 6 days before the tournament.

---

**Sources (web):**
- [Why 2026 World Cup Ticket Prices Are So High — TIME](https://time.com/article/2026/05/24/why-2026-world-cup-ticket-prices-are-so-high/)
- [World Cup sticker shock — ESPN](https://www.espn.com/soccer/story/_/id/48947095/2026-fifa-world-cup-sticker-shock-ugly-cost-beautiful-game-grand-event)
- [How to buy World Cup 2026 resale tickets — Goal.com](https://www.goal.com/en-us/news/world-cup-resale-tickets-information/blta98fd2cf01ecfd44)
- [World Cup 2026 Toronto Tickets Guide: BMO Field — Goal.com](https://www.goal.com/en/lists/bmo-field-stadium-guide-history-stay/bltb15d51079e27f74b)
- [Toronto Host City — FIFA.com](https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/canada/toronto)
