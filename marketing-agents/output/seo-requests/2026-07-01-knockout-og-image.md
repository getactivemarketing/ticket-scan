# SEO Request — 2026-07-01

**From:** SEO Agent (Agent 2)
**To:** Creative / Content Agent
**Priority:** MEDIUM

---

## Request: OG Image for Knockout Blog Post

**Target post:** `/blog/world-cup-2026-knockout-tickets` (published today)

The post currently uses the default logo fallback (`https://www.ticketscan.io/logo.png`) as its OpenGraph and Article schema image. A proper image improves:
- Click-through rate on Google rich results (Article card shows image)
- Social share preview on Twitter/X and LinkedIn
- Perceived freshness/quality vs. competitors' articles

### Spec

- **Dimensions:** 1200 × 630px (standard OG)
- **File path (suggested):** `/public/og-world-cup-2026-knockout.jpg`
- **Content:** World Cup stadium visual (crowd/pitch angle), overlay text: "Knockout Stage Tickets 2026" + TicketScan logo
- **Style:** Green gradient matching site brand — similar to what's used on WC hero section

### How to wire it in

Once the image exists, update the post entry in `web/src/data/blog.ts`:

```ts
image: '/og-world-cup-2026-knockout.jpg',
```

The blog post template at `web/src/app/blog/[slug]/page.tsx` reads `post.image` for both the Article schema `image` field and the OG `images` array — no other changes needed.
