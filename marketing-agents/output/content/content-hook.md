## Today's Content Hook — 2026-06-12 (Friday)

**Topic:** The USMNT opens its home World Cup TONIGHT vs Paraguay at SoFi Stadium (LA) — and it is the rare host-nation opener that *isn't* sold out. FIFA priced regular seats from **$1,120 to $2,735** (with Front Category tiers up to **$4,105**), yet FIFA's own site reportedly still showed ~132 unsold tickets days out, and resale platforms (StubHub, SeatGeek, FIFA's marketplace) are sitting on **3,000+ listings starting around $900–$1,000** — *below face value*. Buying secondhand beating face value for a host-nation opener almost never happens.

**Angle:** Consumer-advocate price check. The story writes itself: FIFA over-priced the marquee game, demand didn't clear it, and the secondary market is now *cheaper than the box office*. TicketScan's job is to tell fans the counterintuitive truth — for this specific match, **check resale before you buy from FIFA**, and compare every source before tapping buy. This is the exact inversion of the usual "resale = markup" assumption, which makes it a strong myth-busting hook.

**Target keyword:** usa vs paraguay tickets / world cup 2026 usa opener price / sofi stadium world cup tickets / world cup tickets below face value

**Content type:** Social snippet + email hook (Friday = page refresh day, no new blog draft per schedule)

**Priority:** High (perishable — peaks today through kickoff; resale-below-face angle is evergreen-adjacent for "is resale cheaper than face value" searches)

---

### Today's deliverable (Friday = page refresh)

Refreshed **State Farm Arena** (`web/src/data/venues.ts`) — see `refresh-log.md`. Picked for the World Cup tie-in: it's the most-trafficked sparse venue in a 2026 host city (Atlanta / Mercedes-Benz Stadium next door).

### Handoffs

- **Agent 3 (Social):** Clean standalone snippet: "Host-nation World Cup opener. Resale is *cheaper* than FIFA face value. Read that again." All figures are press-attributed (NPR, Goal.com, Yahoo Sports / Sportico) — NOT from our feed (still returns null prices). Keep the attribution; never invent a price arc (see social-agent-price-ledger memo).
- **Agent 5 (Email):** Subject-line candidate: "The USA's World Cup opener is *cheaper* on resale than from FIFA." Tie to free price-alert signup. Do NOT fabricate per-user savings.
- **Agent 2 (SEO):** "world cup tickets below face value" + "usa vs paraguay tickets" are timely. Internal-link cluster: `/world-cup-2026` ↔ `/world-cup-2026/sofi-stadium` ↔ 6/11 "Opening Weekend Price Check" ↔ 6/8 "Buy-or-Wait Every Seat Tier."

### Discipline notes
- Every dollar figure traces to third-party press (FIFA pricing via NPR/Goal.com; resale-listing counts via Yahoo Sports/Sportico), attributed inline. None come from our own price feed.
- Do NOT assert WC fixture counts/groups/dates from `worldcup.ts` — it holds stale pre-draw placeholders for most venues. Today's facts come from press, not the repo.

Sources:
- [With days left, the U.S. opener is still not sold out — NPR](https://www.npr.org/2026/06/08/nx-s1-5849905/fifa-world-cup-tickets-prices)
- [How to buy USA vs Paraguay tickets — Goal.com](https://www.goal.com/en/news/usa-vs-paraguay-world-cup-tickets-how-to-buy/blt060e391c4dffa6f1)
- [Thousands of World Cup tickets remain unsold for USMNT's opener — Yahoo Sports](https://sports.yahoo.com/articles/thousands-world-cup-tickets-remain-115259383.html)
- [Why World Cup 2026 tickets are so expensive — UVA Darden](https://news.darden.virginia.edu/2026/06/10/why-world-cup-2026-tickets-are-so-expensive-and-why-some-matches-still-arent-sold-out/)
