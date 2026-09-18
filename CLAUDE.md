# TicketScan - Project Overview

## Claude's Role

You are the **Lead Software Architect** for TicketScan (ticketscan.io). Your responsibilities:

1. **Architecture Adherence**: Maintain consistency with established patterns. Never introduce new frameworks or major dependencies without discussion.

2. **Code Quality**: Write production-ready code with proper error handling, logging, and type safety. Frontend uses TypeScript, backend uses JavaScript.

3. **Database Safety**: Always use parameterized queries. Never run destructive operations without confirmation.

4. **Testing**: Validate changes work before committing. Test API endpoints, check price tracking, verify email delivery.

5. **Git Discipline**: Commit with clear messages. Push only when explicitly asked. Never force push to main.

## Project Goal

Build a **ticket price comparison platform** that:
- Compares ticket prices across Ticketmaster, SeatGeek, and StubHub
- Tracks price history and predicts optimal buy timing
- Sends price drop alerts when target prices are hit
- Provides venue-specific guides and insights
- Supports 2026 World Cup ticket discovery

## Tech Stack

### Backend (Railway)
- **Runtime**: Node.js 18+
- **Framework**: Express.js 4.18
- **Language**: JavaScript
- **Database**: PostgreSQL (Railway)
- **Email**: Nodemailer with Gmail SMTP
- **Scheduler**: node-cron

### Frontend (Vercel)
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **UI**: React 19 + Tailwind CSS 4
- **Charts**: Recharts 3.6

### External APIs
- **Ticketmaster**: Discovery API (free tier, 5K req/day)
- **SeatGeek**: Public API (free)
- **StubHub**: OAuth2 API (requires credentials)
- **Vivid Seats**: Optional integration

## Key Components

### API Server (`index.js`)
Main Express server (~4,060 lines) handling:

**Authentication:**
- `/api/auth/register` - User registration with bcrypt
- `/api/auth/login` - JWT token generation (7-day expiry)
- `/api/auth/me` - Token validation

**Events & Pricing:**
- `/api/events/search` - Multi-source event search
- `/api/events/compare` - Side-by-side price comparison
- `/api/prices/history` - Historical price data
- `/api/prices/trend` - Price trend analysis
- `/api/prices/recommendation` - Buy/wait/hold advice

**User Features:**
- `/api/watchlist` - CRUD for tracked events
- `/api/favorites` - Team/artist/venue following
- `/api/newsletter/subscribe` - Email list management

**Admin:**
- `/api/admin/stats` - Platform metrics
- `/api/admin/drip-run` - Trigger drip campaign
- `/api/admin/email-blast/world-cup` - World Cup announcement

### Cron Jobs

**Price Tracking** - Every 4 hours (`0 */4 * * *`):
1. Fetch all watchlist items
2. Get latest prices from Ticketmaster, SeatGeek, StubHub
3. Store in price_history table
4. Compare to user target prices
5. Send price drop alerts via email

**Drip Campaign** - Daily at 10am UTC (`0 10 * * *`):
- Email 1 (Day 3): "3 Tips to Save on Your First Ticket Purchase"
- Email 2 (Day 7): "How Price Alerts Can Save You Hundreds"
- Email 3 (Day 14): "The Best Time to Buy Tickets (Data-Backed)"
- Email 4 (Day 21): "Compare Like a Pro: Hidden Features"
- Email 5 (Day 30): "Your Ticket Savings Report"

### Price Recommendation Algorithm

```javascript
if (currentPrice <= lowestRecorded * 1.05) return "buy_now"  // Within 5% of lowest
if (currentPrice >= avgPrice * 1.20) return "wait"           // 20%+ above average
if (daysUntilEvent <= 7) return "buy_now"                    // Event soon
if (currentPrice <= targetPrice) return "buy_now"            // Target hit
return "hold"  // Default
```

## Database Schema

```sql
-- User authentication
users (id, email UNIQUE, password_hash, created_at)

-- Event tracking
watchlist (id, user_id, event_id, event_name, event_date, venue, city, target_price, created_at)

-- Price history for trends
price_history (id, event_id, source, min_price, avg_price, max_price, checked_at)
  -- Indexes: (event_id, checked_at DESC), (checked_at)

-- Prevent duplicate alerts
price_alerts (id, user_id, watchlist_id, event_id, triggered_price, sent_at)

-- Personalization
user_favorites (id, user_id, favorite_type, favorite_name, created_at)
  -- Types: team, artist, venue

-- Marketing
newsletter_subscribers (id, email UNIQUE, source, subscribed_at, unsubscribed_at, is_active)

-- Drip tracking
drip_emails_sent (id, user_id, email_number, sent_at)
  -- Unique: (user_id, email_number)
```

## Directory Structure

```
tickethawk/
├── index.js              # Main Express server (all routes)
├── package.json          # Backend dependencies
├── test-apis.js          # API testing script
├── .env.example          # Environment template
├── DOCUMENTATION.md      # Legacy docs
└── web/
    └── web/              # Next.js frontend
        ├── src/
        │   ├── app/      # Next.js App Router pages
        │   │   ├── page.tsx           # Homepage
        │   │   ├── dashboard/         # Main search
        │   │   ├── compare/           # Price comparison
        │   │   ├── watchlist/         # Tracked events
        │   │   ├── event/[id]/        # Event detail
        │   │   ├── venues/[slug]/     # 185 venue guides (24 arenas + 161 stadiums)
        │   │   ├── teams/[slug]/      # 261 team pages, keyed on Ticketmaster attractionId
        │   │   ├── tickets/[slug]/    # 24 city + 14 category pages
        │   │   ├── tickets/[slug]/[category]/  # 180 generated city × category combo pages
        │   │   ├── world-cup-2026/    # World Cup landing
        │   │   ├── blog/              # Blog posts
        │   │   └── admin/             # Admin dashboard
        │   ├── components/
        │   │   ├── Navbar.tsx
        │   │   ├── EventCard.tsx
        │   │   ├── PriceChart.tsx
        │   │   ├── PriceTrendIndicator.tsx
        │   │   └── BuyRecommendation.tsx
        │   ├── context/
        │   │   └── AuthContext.tsx    # JWT auth state
        │   ├── data/
        │   │   ├── venues.ts          # composes arenas + stadiums/ into `venues`
        │   │   ├── venue-types.ts     # Venue/VenueSection types (split out to avoid a cycle)
        │   │   ├── stadiums/          # 160 stadiums across nfl.ts + fbs-1..10.ts
        │   │   ├── teams.ts           # 261 teams, hand-owned; field ORDER is load-bearing
        │   │   ├── cities.ts          # City data
        │   │   ├── categories.ts      # Event categories
        │   │   ├── blog.ts            # Blog content
        │   │   └── worldcup.ts        # WC 2026 data
        │   └── lib/
        │       ├── api.ts             # API client
        │       ├── paced.ts           # SHARED build-time request gate — see below
        │       ├── events.ts          # feed helpers: cleanEvents vs cleanTeamEvents, date formatting
        │       ├── team-resolve.mjs   # attraction id resolution (import-free, tested)
        │       └── venue-resolve.mjs  # venue id resolution (import-free, tested)
        └── package.json
```

## Environment Variables

### Backend (.env)
```env
# Server
PORT=3000
NODE_ENV=development|production

# Database
DATABASE_URL=postgresql://user:pass@host:port/tickethawk

# Authentication
JWT_SECRET=change-in-production
ADMIN_SECRET=change-in-production

# Email (Gmail SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your@gmail.com
SMTP_PASS=app-specific-password

# Ticket APIs
TICKETMASTER_API_KEY=from-developer.ticketmaster.com
SEATGEEK_CLIENT_ID=from-seatgeek.com
STUBHUB_APP_KEY=from-developer.stubhub.com
STUBHUB_API_KEY=from-developer.stubhub.com
```

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=https://tickethawk-api-production.up.railway.app
```

## Live URLs

- **Frontend**: https://www.ticketscan.io (Vercel)
- **API**: https://tickethawk-api-production.up.railway.app (Railway)

## Common Commands

```bash
# Backend
cd tickethawk
npm install
npm run dev          # Start server with nodemon
npm test             # Run API tests

# Frontend
cd tickethawk/web/web
npm install
npm run dev          # Start Next.js dev server
npm run build        # Production build

# Database setup
curl http://localhost:3000/api/setup/database
```

## Development Guidelines

1. **Before changing code**: Read index.js first. All backend logic is in one file.

2. **API responses**: Always return consistent JSON format:
   ```javascript
   { success: true, data: {...} }
   { success: false, error: "message" }
   ```

3. **Authentication**: Use JWT Bearer tokens. Admin routes require `x-admin-key` header.

4. **Event deduplication**: Filter out hospitality packages, VIP reseller listings. Normalize team names for matching.

5. **StubHub OAuth**: Token is cached with 5-minute refresh buffer.

6. **Email sending**: Non-blocking async. Errors logged but don't halt requests.

## Event Deduplication Logic

```javascript
// Patterns to exclude
const excludePatterns = [/jernigan/i, /hospitality/i, /vip package/i, /suite/i];

// Team name normalization
"Magic vs Pacers" === "Pacers vs Magic"  // Same game
"LA Lakers" === "Los Angeles Lakers"     // Same team
```

## Authentication Flow

1. User registers → bcrypt hash (10 rounds) → store in `users`
2. User logs in → verify hash → generate JWT (7-day expiry)
3. Frontend stores token in localStorage
4. API calls include `Authorization: Bearer <token>`
5. Protected routes verify token via middleware

## World Cup 2026 Campaign

- **Dates**: June 11 - July 19, 2026
- **Venues**: 16 stadiums (11 USA, 2 Canada, 3 Mexico)
- **Matches**: 104 total
- **Pages**: 17 landing pages (main + 16 stadiums)

**US Venues**: MetLife, SoFi, Hard Rock, AT&T, Mercedes-Benz, Lumen Field, Levi's, Gillette, Lincoln Financial, NRG, Arrowhead

**Canada**: BMO Field, BC Place

**Mexico**: Estadio Azteca, Estadio Akron, Estadio BBVA

## SEO Pages

Roughly 714 indexed URLs. They are near-identical in shape, which is the
scaled-content pattern Google's spam policy targets, so two rules bind every
one of them: **each page carries facts specific to itself**, and **those facts
are derived from data we can verify, never free-written**. A page we cannot
give real content is omitted, not padded.

- **Venue guides** (185): 24 arenas + 161 stadiums. Each has a capacity, a
  tiered section map with real named zones, a description, FAQs and a live
  schedule. Data lives in `web/src/data/stadiums/`, composed by its `index.ts`.
- **Team pages** (261 in the sitemap, 169 prerendered): `/teams/[slug]`, keyed
  on a Ticketmaster **attractionId** rather than a city, which is the whole
  point — an attraction returns a team's AWAY games too, inventory a city-keyed
  page structurally cannot reach. Only football prerenders; the rest render on
  demand. Ids live in `web/src/data/teams.generated.json`.
- **City pages** (24) and **category pages** (14).
- **City × category** (180): e.g. /tickets/chicago/nba — only where the events
  feed shows 5+ upcoming events. The qualifying set lives in
  web/src/data/combos.generated.json, refreshed by the daily marketing agent.
- **World Cup** (17): Tournament + stadium-specific guides

### Rules that are easy to break by accident

- **A wrong id is invisible.** A wrong `attractionId` or `venueId` renders a
  perfect page listing another team's or another building's events. Nothing
  downstream catches it. Both resolvers therefore **omit rather than guess**,
  and name agreement is a qualifying filter, not a tiebreak. `npm run
  smoke:teams` / `smoke:venues` check live ids against the API and exit 1 on a
  confirmed defect.
- **Stadium capacities come from the venue's OWN official site**, not from
  Wikipedia's infobox and never from an aggregate list. Wikipedia is stale for
  several of these, sometimes carries an attendance record in the capacity
  field, and sometimes contradicts its own article body. A blanket
  "correct toward Wikipedia" pass was measured to introduce about twice as many
  errors as it fixed.
- **Never add a venue to `venues` without an id in `data/venue-ids.json`.** The
  API validates the slug against that map and rejects unknown ones, so the page
  renders perfectly and lists nothing. A test enforces both directions.
- `web/src/data/teams.ts` is hand-owned and two build scripts parse it with a
  regex anchored on its **single-line field order**. Keep the shape.

## Admin Dashboard

Access: Add an `x-admin-key` header. The value is `ADMIN_SECRET` on the Railway
tickethawk-api service, mirrored to `~/.config/ticketscan/marketing.env` as
`ADMIN_KEY` for the marketing agents. Never commit it — this repo is public.

**Tabs:**
- Overview: Key metrics (users, watchlist items, subscribers)
- Users: Registered user list
- Watchlist: All tracked events
- Subscribers: Newsletter list
- Activity: User action logs
- Email Drip: Campaign stats + manual trigger

## Current state / handoff

`docs/HANDOFF.md` carries the live operational state: what is broken right now,
what the scheduled jobs will do, and the ordered pick-up list. Read it before
touching the marketing automation. Note the repo moved to `~/Sites/ticketscan`
on 2026-09-16 — macOS refuses background launchd jobs access to external drives.

## Build and rate limits

The build is the fragile part of this project. Two independent limits apply:

1. **Ticketmaster: 5,000 calls/day.** Current worst case is ~3,975 (ISR ~2,860
   + nightly builders and one cold prerender ~1,115), leaving ~20% headroom.
   Every feed surface is on a **six-hour** revalidate except `/onsales`, which
   stays hourly on purpose — an onsale time is the one thing where six-hour
   staleness is a user-visible defect. Retries can multiply a single page render
   by up to 16 (4 in the route x 4 in the API's own spike-arrest retry), which
   is the real reason to hold headroom rather than tune to the line.
2. **The site's OWN limiter**, `generalLimiter` in index.js — 100 req/min per
   IP, and a whole build comes from one IP. This is 5x stricter than
   Ticketmaster's spike arrest and returns a bare 429 the API never logs, so it
   looks like an upstream failure from the outside. It is the binding
   constraint, and `web/src/lib/paced.ts` exists solely to stay under it.

**Every build-time fetch must go through the shared `paced()` gate.** Not a
copy of it — the one module-level gate. `next.config.ts` pins the prerender to a
single worker so that one gate can serialise everything; two pacers each admit
their own stream and the combined rate exceeds the limit. The gate applies at
build time only (`NEXT_PHASE === 'phase-production-build'`) and waits the
*remaining* interval since a request started, so a slow upstream is not charged
twice.

**Build against the DEPLOYED API, not a local one.** A local API answers in
~50ms and the deployed one takes ~2s, which hides pacing and retry problems
completely. Both were shipped and only surfaced in a real Vercel log.

**The site and the API deploy from the same push to `main`** (Vercel + Railway),
so a prerender routinely overlaps an API container restart. Feed routes retry 5
times over ~40s specifically to outlast that; a shorter window failed a deploy.

## Known Issues & Limitations

- **StubHub**: Requires OAuth credentials (harder to obtain)
- **Ticketmaster**: 5K requests/day limit on free tier
- **Email**: Requires Gmail app-specific password (not regular password)
- **Backend monolith**: All code in index.js (~4,060 lines)

## Recent Fixes

- **Team pages and stadium venues shipped (2026-09-08/09).** 261 teams, 160 new
  stadiums, the `attractionId` API parameter, and 185 venue guides.
- **Every event date rendered a day early.** The feed mixes real UTC onsale
  timestamps with plain `YYYY-MM-DD` calendar dates, and `new Date('2026-09-05')`
  reads the second shape as UTC midnight — 8pm the previous evening Eastern.
  Fixed in `events.ts`; a calendar date has no timezone to convert.
- **All 184 venue pages rendered a "Floor/Courtside" tier no football stadium
  has**, because the page used a hardcoded arena tier list instead of reading
  `venue.sections`. A test forbidding `floor` in the data passed the whole time.
- **`build-venue-ids.mjs` had an unreachable drop guard** (`resolved === 0`,
  which pinned entries made impossible) on a cron path that auto-commits and
  pushes to main. Now a 90% floor, and `run-daily.sh` gates the commit on tests.
- Price tracking cron properly initialized
- StubHub OAuth token caching with refresh
- Event deduplication for duplicate listings
- World Cup 2026 landing pages added

## Future Improvements

- [ ] Split index.js into modular routes
- [ ] Add TypeScript to backend
- [ ] Implement push notifications
- [ ] Add more ticket sources (Vivid Seats, Gametime)
- [ ] Build mobile app
- [ ] Add seat map visualization
- [ ] Implement dynamic pricing predictions with ML
