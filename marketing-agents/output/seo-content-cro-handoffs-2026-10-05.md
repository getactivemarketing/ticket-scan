# SEO handoffs — Content Agent and CRO Agent — 2026-10-05

## Content Agent: new briefs

### 1. Ticket presales explained

**Working title:** How Ticket Presales Work: Artist, Venue, Cardholder, and Fan
Club Access

**Intent:** informational buyer preparing for an upcoming sale.

**Required sections:** presale types; registration versus guaranteed access;
timezone and onsale checklist; official-source verification; what to do when a
presale sells out; links to `/onsales`, one city page, and two verified venue
guides.

**Safe CTA:** “Check the onsale calendar.” Do not mention price alerts or price
history.

### 2. All-in ticket checkout checklist

**Working title:** Ticket Fees Explained: How to Check the Final Total Before
You Buy

**Intent:** commercial investigation.

**Required sections:** base price versus fees; taxes and delivery; same-event/
same-section comparison; speculative-listing warning; buyer protection and
delivery; seller checkout as source of truth.

**Safe CTA:** “Open the seller listing and verify the final total.”

### 3. Venue seating guide format

**Working title:** How to Read a Stadium Seating Chart

**Intent:** venue utility and pre-purchase research.

**Required sections:** upper/lower/club/suite tradeoffs; sightlines; entry and
accessibility questions; exact section/row verification; links to three
venue-specific guides.

**Data rule:** use only facts present in the verified venue data and official
venue sources. No inferred platform price multipliers.

### 4. Resale safety guide

**Working title:** Are Resale Tickets Safe? A Buyer Checklist

**Intent:** trust and risk reduction.

**Required sections:** established marketplace, buyer guarantee, delivery method,
seller identity, final checkout total, off-platform scam warnings, and what to
do if inventory changes.

**Safe CTA:** “Review the seller’s terms before completing checkout.”

## Content cleanup requests

Before publishing new pages, audit and rewrite existing public content that says
TicketScan tracks price history, sends price-drop alerts, identifies the cheapest
platform from live data, or provides buy/wait advice. This includes older blog
posts and shared venue/category CTAs. Internal reports may document the outage;
public copy must not preserve those promises.

## CRO Agent: landing-page requests

### P0 — Homepage

- Replace “Find it. Track it.” with a truthful event/onsale promise.
- Replace the chart/watchlist mock with an onsale/presale example.
- Make `/dashboard` or `/onsales` the primary action for unqualified visitors;
  keep registration as a secondary action.
- Replace “never miss a deal” with a verified benefit: event discovery, venue
  guides, or onsale dates.

### P0 — Shared venue/category templates

- Remove “Track Price,” “Get alerts when prices drop,” and savings claims.
- Lead with the page’s verified facts: event set, venue sections, capacity,
  onsale/presale date, and seller link.
- Add a clear “availability and final checkout total are confirmed on the seller
  page” note near outbound links.

### P1 — `/compare` and `/how-it-works`

- Do not drive cold SEO traffic to an authenticated or unreliable comparison
  experience.
- Either temporarily noindex/redirect the page to event discovery, or rewrite
  its public metadata and visible content to describe the currently supported
  workflow.
- Remove static mock prices, savings examples, target-price UI, and price-trend
  schema until the underlying feature is healthy.

### P1 — Newsletter

- Rename the offer to “Get onsale dates and useful ticket tips.”
- Add an associated email label, `name`, `autoComplete="email"`, and live
  success/error regions.
- Instrument view, start, submit, success, duplicate, and error events without
  sending the raw email address.

### P1 — Measurement

Instrument: hero CTA click, onsale-calendar click, event click, venue/city link,
outbound seller click, registration start/success, watchlist add, newsletter
success/error, and page template. Current reporting cannot calculate these
funnel rates.

## Acceptance criteria

- A rendered-copy scan finds no prohibited price/alert claims on public pages.
- New content has one sourced unique fact block and one useful internal-link path.
- CRO variants use only verified product capabilities.
- Search Console, analytics events, and outbound seller clicks are available for
  the next weekly review.

