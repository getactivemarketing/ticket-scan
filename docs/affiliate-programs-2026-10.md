# Affiliates: why CJ isn't converting, and what to add

Written 2026-10-01. Samir's question: September brought ~1,000 TicketNetwork clicks
through CJ and no sales. How do we get more out of CJ, and which other affiliate
programs should we add?

Figures marked **(official)** come from the brand's own affiliate page. The rest come
from affiliate directories (FlexOffers, UpPromote, Lasso, affi.io), which often
disagree with each other. Treat those as leads and confirm the real terms in each
network's dashboard at sign-up. Nobody has signed up for or contacted any program.

---

## 1. The 1,000 clicks with 0 sales

### Ruled out on our side (2026-10-01)

- **Prefetching:** `TicketNetworkLink` is a plain `<a target="_blank"
  rel="sponsored nofollow noopener">`, not `next/link`. The browser never requests
  `/go/tn/...` until someone clicks.
- **Broken destinations:** `npm run smoke:tn` returned 59/59 with 200. It requests
  TicketNetwork pages directly, not through CJ, so it never creates clicks.
- **Missing attribution:** `/go/tn/[kind]/[slug]` returns 404 when the CJ env vars
  are missing, rather than sending an unattributed click. Every link carries a
  `sid` naming its page, e.g. `venue-pnc-park` or `team-pittsburgh-steelers`.
- **Crawlers:** `robots.txt` disallows `/go/`. Bots that ignore robots.txt can
  still click.

The site keeps no click log of its own. CJ's report is the only record of who
clicked. Vercel only streams live logs, so there's no history there either.

### Samir to check in CJ, in this order

1. **Clicks by `sid`, by day and hour, by device.** One page or one hour accounting
   for most clicks points to bots.
2. **Clicks against site sessions.** GA4, if it's configured inside GTM
   `GTM-T476F9S4`. The site sends no custom events, so sessions are the most it
   can show. If clicks come close to sessions, they aren't human.
3. **Valid vs. invalid clicks, and any locked or reversed actions.** A reversed
   sale is a different problem from no sale.
4. **Our commission tier.** One directory says TicketNetwork pays "ticket-level
   comparison websites" 6% instead of the advertised 12.5%.
5. **One test purchase** through a link on www.ticketscan.io, to prove a sale is
   attributed.

### Likely causes if the clicks are real

- **The landing page isn't a game.** Links resolve to TicketNetwork performer,
  venue or category pages, never a specific event, so the buyer has another
  choice to make there.
- **Buyers shop around and finish elsewhere.** Whichever site they buy on gets
  the last click. Resale buyers often move into an app, and the cookie doesn't
  cross into it.
- **No prices on our pages.** Price tracking has been down since 2026-07-24 (see
  `HANDOFF.md`). Visitors come for onsale dates, not to buy.

---

## 2. Getting more out of CJ

**The TicketNetwork CJ data feed is the biggest lever.** The 2026-09-02 affiliate
spec deferred it, and it has never been set up. If it carries prices, which CJ
product feeds normally do, it would:

- give event-level deep links ("Steelers vs. Ravens, from $X") instead of
  performer pages;
- restore price history and alerts, the core feature that's down;
- make the "compare" claim true again.

**Samir to do:** subscribe to TicketNetwork's product catalog in the CJ account (FTP
or HTTP delivery), or create a personal access token at developers.cj.com. Then send
one sample of the feed so its price fields can be checked before anything is built
on it.

---

## 3. Programs to add, best fit first

| # | Program | Network | Pays | Cookie | Prices via feed/API | Fit |
|---|---|---|---|---|---|---|
| 1 | **Stay22** (hotel map) | In-house; resells Booking, Expedia, Hotels.com, VRBO | 30%+ of the hotel site's commission, rising with volume (official) | Set by the hotel site | Not needed: the map shows live prices | One embed on all ~245 venue guides and event pages. Made for event sites. Easy approval. |
| 2 | **Viator** (stadium tours) | In-house | 8%, paid after the tour happens (official) | 30 days (official) | Yes, Affiliate API | Venue guides and city pages |
| 3 | **TickPick** | Impact, plus a direct partner tier | 4–5% (official) | 30 days, covers in-app purchases (official) | Yes, partner API/widgets by application | Event and team pages. No buyer fees. |
| 4 | **Vivid Seats** | Impact (official) | Unverified (directories say 0.8–6%) | 30 days (official) | No (links and banners only) | Event, team, venue |
| 5 | **StubHub** | Partnerize | ~4%; 0.8% on MLB (Sep 2024 Partnerize post) | 30 days | No | Events. Skip ballpark pages. |
| 6 | **Fanatics** | Impact | ~8% base, lower by category | 7 days | Product feeds | Team pages |
| 7 | **Fubo** | Impact | ~$24 per paid US subscription; trials unpaid | 30 days | n/a | Team "how to watch" |
| 8 | **Ticketmaster / Live Nation** | Impact, per-market contracts | Not public | Unverified | Discovery API, but `priceRanges` is now mostly empty | Primary onsales |
| 9 | **SeatGeek** | Impact | Unverified (~1–5%) | 30 days on Impact | API documents lowest/avg/high price; returned none for us on 2026-10-01 | More useful as a price source than for revenue |

**Skip:**
- **Booking.com direct:** cut partners under €1,000/month on 2025-06-20. Stay22
  covers it.
- **Gametime:** reported 2.4%, new customers only.
- **SpotHero:** fits venue pages, but pays 2–3% on a ~$28 basket.
- **No open program found:** AXS, Eventbrite (closed), SI Tickets, ParkWhiz,
  ESPN+, NFL Sunday Ticket.

### Sources

- Stay22: https://www.stay22.com/faq
- Viator: https://partnerresources.viator.com, https://partnerhelp.viator.com/en/articles/69
- TickPick: https://www.tickpick.com/affiliates/
- Vivid Seats: https://www.vividseats.com/affiliates
- StubHub: https://partnerize.com/resources/blog/stubhub-affiliate-program-spotlight-and-sign-up-information
- Ticketmaster: https://developer.ticketmaster.com/partners/distribution-partners/affiliate-sign-up
- SeatGeek: https://seatgeek.com/api-terms
- TicketNetwork 6% tier: https://referly.so/affiliate-programs/ticketnetwork
- Booking.com cuts: https://skift.com/2025/05/30/why-booking-com-cut-thousands-of-affiliate-partners-and-what-comes-next/
- Gametime: https://www.flexoffers.com/affiliate-programs/gametime-affiliate-program

---

## 4. Order of work

1. **Samir:** pull the CJ breakdowns in section 1 and subscribe to the TicketNetwork
   feed.
2. **Claude:** debug the SeatGeek price call. Its stats come back empty; it may need
   re-approval or a corrected request.
3. **Samir:** apply to Stay22 and Viator, the easiest approvals.
4. **Claude:** once they're approved, add a hotels map and a tours block to the venue
   guides. New third-party scripts on ranking pages need a performance check; the
   2026-09-02 spec rejected banners and widgets for that reason.
5. **Then:** TickPick, then Vivid Seats and StubHub, to route buyers to the cheapest
   listing once prices exist.
