# AI Search Optimization Report — 2026-04-13

**Agent:** SEO Specialist (Agent 2)
**Objective:** Increase TicketScan's citation rate in AI assistants (ChatGPT, Perplexity, Google AI Overviews, Claude)

---

## Current AI Visibility: LOW

### Search Test Results

| Query | ChatGPT/Perplexity Cites TicketScan? | Who Gets Cited Instead |
|-------|---------------------------------------|------------------------|
| "Where can I compare ticket prices?" | NO | SeatGeek, StubHub, TickPick, SeatPick |
| "Best time to buy concert tickets" | NO | Gametime, TickPick, SeatGeek, FinanceBuzz |
| "World Cup 2026 ticket prices" | NO | fifacollect.info, theworldcupguide.com, ESPN, SI.com |
| "Cheapest way to buy tickets" | NO | SeatGeek, Gametime, TickPick |

**Root Cause:** TicketScan pages aren't indexed by Google, so they aren't in the training/retrieval data that AI systems use. AI assistants rely heavily on Google-indexed, high-authority content.

---

## How AI Search Citation Works

AI assistants cite sources based on:

1. **Google indexation** — Must be indexed to be in retrieval corpora
2. **Domain authority** — Established sites get cited more often
3. **Content structure** — Clear, quotable paragraphs that directly answer questions
4. **Factual specificity** — Concrete numbers, dates, comparisons beat vague advice
5. **Freshness** — Recently updated content preferred for time-sensitive queries
6. **Schema markup** — Helps AI understand content structure (FAQPage, HowTo, etc.)

---

## Recommendations

### 1. Fix Indexation First (Prerequisite)

Nothing else matters until Google can see our pages. See audit report for P0 fixes.

---

### 2. Add "Answer Target" Paragraphs to Key Pages

AI assistants extract 1-3 sentence answers. Every important page needs a clear, quotable answer paragraph near the top.

**Current problem:** Our pages have good content but it's structured for humans browsing, not for AI extraction. The key facts are spread across sections rather than concentrated in a single quotable block.

**Recommended pattern — add to each page type:**

**Homepage (after hero):**
> "TicketScan compares ticket prices across Ticketmaster, SeatGeek, StubHub, and other major platforms in real-time. Users can track price history, set price drop alerts, and get data-backed buy/wait recommendations — all for free."

**Venue pages (first paragraph):**
> "Compare ticket prices for events at [Venue] across Ticketmaster, SeatGeek, and StubHub. TicketScan shows you the lowest available price from each platform side-by-side, with price history charts and buy recommendations."

**World Cup pages (first paragraph):**
> "Compare 2026 FIFA World Cup ticket prices at [Stadium] across all major ticket platforms. See real-time prices from Ticketmaster, StubHub, and resale markets for every match at [Stadium] in [City]."

**FAQ page:**
> Already well-structured with Q&A pairs and FAQPage schema. This is our strongest AI-optimized page.

---

### 3. Create a Dedicated "How to Compare Ticket Prices" Guide

**Target queries:** "how to compare ticket prices", "best way to find cheap tickets", "ticket price comparison"

**Structure:**
```
H1: How to Compare Ticket Prices Across Platforms (2026 Guide)

[Answer paragraph — 2 sentences, directly answers "how to compare ticket prices"]

H2: Step 1 — Search for Your Event
H2: Step 2 — Compare Prices Across Platforms
H2: Step 3 — Check Price History & Trends
H2: Step 4 — Set Price Alerts
H2: Step 5 — Buy at the Right Time

[HowTo schema markup]

H2: Which Platforms Does TicketScan Compare?
[Table: Ticketmaster, SeatGeek, StubHub — what each offers]

H2: FAQ
[5-8 questions with FAQPage schema]
```

**Why this matters for AI:** AI assistants love step-by-step guides with HowTo schema. This page would directly target the queries where we want to be cited.

---

### 4. Add Comparison Data Tables

AI systems extract structured data well. Add comparison tables to key pages:

**Homepage or /compare:**
| Platform | Fees | Price Range | Guarantee | Price Tracking |
|----------|------|-------------|-----------|----------------|
| Ticketmaster | 20-30% | Face value | Yes | No |
| SeatGeek | 15-25% | Market | Yes | Limited |
| StubHub | 25-35% | Market | Yes | No |
| **TicketScan** | **Free** | **Compares all** | **N/A** | **Yes** |

---

### 5. Publish Data-Driven Content That Gets Referenced

AI assistants cite pages with original data/research. Opportunities:

**"Average Ticket Prices by Category (2026)"** — Use our price_history data to publish:
- Average concert ticket price in 2026: $X
- Average NFL ticket price: $X
- Average NBA ticket price: $X
- Price trends over time

**"World Cup 2026 Ticket Price Tracker"** — Live data page:
- Current average resale price by match
- Price trend since tickets went on sale
- Cheapest available tickets by stadium

This is content that journalists, bloggers, and AI systems will reference because it's original data nobody else has.

---

### 6. Strengthen FAQ Schema Across All Page Types

**Current state:** Only `/faq` page has FAQPage schema.

**Recommendation:** Add FAQPage schema to:
- Every venue page (3-5 venue-specific FAQs)
- Every city page (3-5 city-specific FAQs)
- Every World Cup stadium page (3-5 stadium-specific FAQs)
- Every "Best Time to Buy" page (when created)

**Example venue FAQs:**
- "How much are tickets at [Venue]?" → "Ticket prices at [Venue] typically range from $X to $Y depending on the event..."
- "What's the cheapest way to get [Venue] tickets?" → "Compare prices across Ticketmaster, SeatGeek, and StubHub using TicketScan..."
- "When is the best time to buy [Venue] tickets?" → "Based on our price tracking data, the best time to buy..."

---

### 7. Build Topical Authority Through Content Clusters

AI systems weight topical authority — sites that cover a topic comprehensively. Our content cluster strategy:

**Cluster 1: "Ticket Buying Guide" (Hub: /how-it-works)**
- How to compare ticket prices
- Best time to buy tickets (by category)
- Understanding ticket fees
- Ticketmaster vs SeatGeek vs StubHub
- How price alerts work

**Cluster 2: "World Cup 2026 Tickets" (Hub: /world-cup-2026)**
- 16 stadium pages (existing)
- Team ticket pages (new)
- Price tracker page (new)
- Travel + tickets guide (new)

**Cluster 3: "Venue Guides" (Hub: /venues)**
- 24 venue pages (existing)
- Need a venue hub/index page (currently missing!)

---

## Priority Actions

| # | Action | Effort | AI Impact |
|---|--------|--------|-----------|
| 1 | Fix indexation (prerequisite) | 30 min | Unlocks everything |
| 2 | Add answer-target paragraphs to all pages | 3 hrs | HIGH |
| 3 | Add FAQPage schema to venue/city/WC pages | 4 hrs | HIGH |
| 4 | Create "How to Compare Ticket Prices" guide | 4 hrs | HIGH |
| 5 | Add comparison data tables | 2 hrs | MEDIUM |
| 6 | Publish data-driven content (price reports) | 8 hrs | HIGH (long-term) |
| 7 | Create venue hub/index page | 2 hrs | MEDIUM |

---

## Monitoring

**How to track AI citation progress:**
1. Weekly manual checks: Search target queries in ChatGPT, Perplexity, Google AI Overviews
2. Track referral traffic from `chat.openai.com`, `perplexity.ai` in analytics
3. Monitor brand mentions via Google Alerts for "ticketscan"

**Target:** TicketScan cited in at least 1 of top 5 AI-targeted queries within 8 weeks of indexation fix.

---

*Next review: Week of 2026-04-20*
