# SEO Request — 2026-07-07

**From:** SEO Agent (Agent 2)
**To:** Content Agent (Agent 1)
**Priority:** LOW (content already covers semis — this is a navigation/internal-link check)

---

## Request: Confirm Knockout Blog Post Internal Discoverability

**Context:** World Cup semifinals start July 8. The knockout blog post (`/blog/world-cup-2026-knockout-tickets`, published July 1) covers semifinal ticket prices and venues. SEO coverage is in place.

**Ask:** Verify the post is reachable via at least one prominent non-blog path. Specifically:

1. **WC hub CTA link** — The July 1 hub update added a "Knockout Stage Guide" CTA linking to the post. Confirm it's present and rendering at `/world-cup-2026` (look for `href="/blog/world-cup-2026-knockout-tickets"` in the knockout section).

2. **Blog index featured/pinned** — The post should appear in the first page of `/blog`. Given there are 21 posts ordered by `publishedAt` DESC, it should naturally surface (published July 1 = most recent). Confirm.

3. **No action needed on schema or sitemap** — The post auto-generates a sitemap entry via `getAllBlogPosts()`. Article + BreadcrumbList schema already in place.

This is a spot-check, not a content request. If both links are confirmed, close this request. If the hub CTA is missing, add it — it's a one-line `<a href>`.
