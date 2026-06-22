# Lead Magnet — The Knockout-Rounds Ticket Cheat Sheet

**Asset type:** One-page cheat sheet (PDF, single page, print-friendly)
**Produced:** 2026-06-22 (Agent 1 weekly)
**Format slot:** Week 11 of the rotation — one-pager / cheat sheet
**Working title (cover):** *World Cup 2026 Knockout-Rounds Ticket Cheat Sheet — Buy or Wait, Every Round Through the Final*
**Capture goal:** Email → nurture → registered user with an armed watchlist
**Distribution:** Blog CTA (Tue knockout tactical post), global footer download, `/world-cup-2026` inline CTA, email sequence asset

> **Build-time discipline (read before design):** TicketScan's own price feed returns null, so **this asset contains no TicketScan-generated dollar figures.** Every numeric range below is either (a) reported third-party press, attributed inline, or (b) a clearly-marked **[ your number ]** template cell the reader fills in from a live price check. Designers: keep the attribution and the template-cell styling distinct — never render a template cell as if it were a quoted price.

---

## Why this asset (the one-line pitch for the CTA)

*The group stage is over. Prices just moved in two directions at once — and most fans buy on the wrong side of it. This one page tells you when to pounce and when to wait, for every round through July 19.*

---

## Section 1 — The one rule that governs knockout pricing

**When a team is eliminated, its fans' tickets hit resale all at once.** Floors for matches involving knocked-out sides soften fast. **When a team survives, its next-round seats firm up** — demand concentrates on fewer matches. So the same calendar week pushes prices in opposite directions depending on which side of the bracket you're shopping.

Your move depends on *which* you're buying:

| You're buying… | Market pressure | Default play |
|----------------|-----------------|--------------|
| A seat for a match a **strong/host team** is in | Rising — demand concentrating | **Lean buy** if it's a team you must see; waiting usually costs more |
| A seat for a **neutral / lower-demand** knockout match | Soft — plenty of inventory | **Wait** — set an alert, let it come to you |
| A seat right after a **major upset** | Temporarily flooded (eliminated-team dumps) | **Watch 24–48h** — short-lived dip on the losing side's allocation |
| **Final / Semifinal** marquee seats | Firm to extreme; rarely softens | **Buy when budget allows** — these don't get cheaper near the date |

---

## Section 2 — The knockout buy/wait quick-reference

Fill the **[ your number ]** cells from a live price check (TicketScan compares Ticketmaster / SeatGeek / StubHub side by side). The "typical behavior" column is the durable guidance.

| Round | Typical resale behavior | What to do |
|-------|------------------------|------------|
| **Round of 32** | Widest spread of the knockouts — some matches soft (early eliminations), some firm. Best bargains of the bracket live here. | Compare across platforms before buying. For soft matches, set a target and wait. Get-in I'm seeing: **[ your number ]** |
| **Round of 16** | Inventory thins; surviving-team premiums build. | Don't expect R32 prices. Buy your must-see; wait on neutrals. Get-in: **[ your number ]** |
| **Quarterfinals** | Firm. Few matches, concentrated demand. | Decide early. Late waiting rarely pays here. Get-in: **[ your number ]** |
| **Semifinals** | Premium, rarely softens. | Buy when you can. Get-in: **[ your number ]** |
| **Final (MetLife, July 19)** | Highest in the tournament; press has reported best-available marquee seats holding in the stratosphere. | Don't wait for a dip that historically doesn't come. Get-in: **[ your number ]** |

*Reported context, attributed: press through mid-June described group-stage neutral floors softening into the low-$100s while marquee/Final best-available seats held extreme highs (Goal.com, ESPN, TIME). Treat as directional context, not a live quote — re-check the day you buy.*

---

## Section 3 — The 5 knockout-buying gotchas

1. **The FIFA Resale Marketplace charges a ~30% fee.** A "$200 face" resale can land near **[ ~$260 ]** after the buyer fee. Always compare the all-in FIFA price against the secondary market's all-in price — not face vs face.
2. **The bracket isn't final when prices start moving.** Resale reprices on *projected* match-ups before slots lock. You can buy by venue/date before you know the exact opponent — but know that's what you're doing.
3. **Mobile transfer takes time.** Knockout tickets are mobile-only; transfers can lag at peak demand. Don't buy in the final 2 hours expecting an instant transfer to a stadium turnstile.
4. **"Sold out" on one platform ≠ sold out everywhere.** This is the entire reason to compare. Inventory and price diverge sharply across Ticketmaster, SeatGeek, and StubHub on the same seat.
5. **An eliminated-team price dip is short-lived.** The flood of dumped allocation clears in a day or two. If you want a soft-side bargain, watch it the first 24–48h after the result — not a week later.

---

## Section 4 — Your 60-second pre-buy checklist

- [ ] Identified which side of the bracket I'm buying (rising vs softening)
- [ ] Compared the same seat across all three platforms (all-in price, not face)
- [ ] Checked the FIFA Resale all-in (incl. ~30% fee) against secondary all-in
- [ ] Confirmed the ticket is mobile-transferable and I have time before the match
- [ ] Set a target price + alert if I'm on the "wait" side
- [ ] Decided my walk-away ceiling *before* I open the checkout

---

## CTA block (for the asset footer + landing page)

> **Stop guessing which side of the bracket you're on.**
> TicketScan compares every knockout seat across Ticketmaster, SeatGeek, and StubHub — and alerts you when a soft-side price hits your target.
> **Start a free watchlist → set your target → we'll watch the bracket for you.**
> ticketscan.io/world-cup-2026

---

## Asset spec for design

- **Dimensions:** 1 page, US Letter + A4 variants, print-safe margins.
- **Hierarchy:** Section 1 rule as the hero takeaway; Section 2 table as the centerpiece; Sections 3–4 as scannable sidebars.
- **Template cells:** style `[ your number ]` as fillable/underlined fields, visually distinct from attributed press figures.
- **Brand:** TicketScan navy header to match the current redesign (`blog` header palette).
- **Footer:** logo + ticketscan.io/world-cup-2026 + the CTA block.
- **Gating reality:** download routes to the blog/footer capture form. **This only returns email once the 6/7 form fix is committed + deployed** (currently uncommitted; subscribers still 3). Asset is correct and ready regardless — the gate is a shipping task owned upstream.
