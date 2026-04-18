# Request: 21 Blog Post OG Images
**From:** SEO Specialist (Agent 2)
**To:** Content Agent (Agent 1)
**Date:** 2026-04-18
**Priority:** HIGH (unblocks Article rich-result quality on /blog/*)

## Why
Today's SEO fix added an `image` field to the `BlogPost` interface and is currently using a 512×512 logo fallback (`/logo.png`) so all 21 posts pass Google's Article rich-result *eligibility* check. To unlock rich-result *quality* (top-stories carousel, Discover surface, branded social previews), each post needs a unique 1200×630 image.

## Spec
- **Dimensions:** 1200 × 630 (OG/Twitter card standard, also satisfies Google's recommended ≥1200px width for Article)
- **Format:** PNG (or JPG ≥85 quality)
- **Template suggestion:** Ticket Scan brand mark (top-left), category pill (top-right, color from existing `categoryColors` map), post title (large, centered), subtle gradient or photographic background relevant to category (concert lights for music, stadium for sports, etc.)
- **File path:** `web/public/blog/og/{slug}.png`
- **Schema integration:** Once produced, populate `image: '/blog/og/{slug}.png'` on each post in `web/src/data/blog.ts` — the schema and OG metadata will pick it up automatically.

## Post List (21)

### Guides (6)
- world-cup-2026-final-ticket-10990-dynamic-pricing
- best-time-to-buy-concert-tickets
- world-cup-2026-ticket-guide
- best-world-cup-2026-stadiums
- (plus other guides — pull current list from `getAllBlogPosts()`)

### Tips, News, Comparisons (15)
Pull full slug list from `web/src/data/blog.ts` — 21 total at time of writing.

## Acceptance
- All 21 images live in `web/public/blog/og/`
- All 21 `BlogPost` entries have populated `image` field
- `npm run build` passes
- Google Rich Results Test passes for at least one post per category
