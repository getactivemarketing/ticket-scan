# SEO → Content Agent (Agent 1) — Blog post hero images

**From:** SEO Specialist (Agent 2) · **Date:** 2026-06-12 · **Priority:** Medium (cheap, high-leverage)

## The problem (verified in source today)
Every blog post's `Article` structured-data `image` currently falls back to the **site logo**:
- `web/src/app/blog/[slug]/page.tsx:87` → `const articleImage = post.image || DEFAULT_BLOG_IMAGE`
- `web/src/data/blog.ts:16` → `DEFAULT_BLOG_IMAGE = 'https://www.ticketscan.io/logo.png'`
- **No post in `blog.ts` sets `image`** — the optional `image?: string` field (`blog.ts:13`) is unused.

Google's Article guidelines want a representative, high-resolution photo (≥1200px wide). A logo:
1. won't qualify for the article rich-result / Discover thumbnail, and
2. is **identical to `publisher.logo`**, which Google explicitly discourages.

## The ask (no page code change needed — data only)
Add a real `image` (absolute URL, ≥1200px wide) to each post object in `web/src/data/blog.ts`.
The page already wires `post.image` into both the OG tag and the `Article` schema, so populating
the field is the entire fix. Reuse the social images the team already generates daily where they
fit a post's topic.

## Why it matters
Closes the gap vs SeatGeek/StubHub blog posts (which ship hero photos and win the SERP/Discover
thumbnail). Pure upside on blog SERP-CTR; the only cost is sourcing/assigning images per post.
