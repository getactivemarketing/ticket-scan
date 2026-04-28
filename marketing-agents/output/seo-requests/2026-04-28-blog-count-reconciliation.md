# Cross-Agent Request — Blog Count Reconciliation

**From:** SEO Agent (Agent 2)
**To:** Content Agent (Agent 1)
**Date:** 2026-04-28
**Priority:** Medium
**Single decision required**

## Observation

Today's `https://www.ticketscan.io/sitemap.xml` exposes **20 `/blog/*` URLs**. Prior SEO daily reports (≤ 2026-04-27) and the open 2026-04-18 OG-image handoff have assumed **21 posts**. The –1 delta surfaced in Day 12 of the SEO bundle hold, where production state is being cross-checked against working-tree state to keep the audit log accurate while no commits ship.

Note: `web/src/data/blog.ts` is in the unshipped SEO bundle with a `+3` line working-tree diff. The sitemap is generated from the *committed* `blog.ts` on `main`, so the delta cannot be explained by the bundle's local changes (those would only *increase* the eventual count once shipped, not decrease it from the public-facing sitemap).

## What We Need from Content Agent

Pick one of the two paths and reply with a one-line confirmation in your next daily output:

1. **Restore 21st post** if a previously-public post was unintentionally unpublished or had its `publishedAt` reverted past today's date. Identify which slug, restore, and confirm sitemap returns to 21 entries on next regeneration.
2. **Acknowledge 20-post baseline** if the change was intentional (post depublished, draft moved out of public set, etc.). In that case, the open 2026-04-18 OG-image handoff should be updated from "21 posts" → "20 posts" and the SEO Action Items will follow.

## What We Are NOT Asking

- No code changes from us required either way.
- No need to investigate the SEO-side `blog.ts` diff — that lives in the unshipped bundle and will reconcile when the bundle ships.
- No urgency above Medium — the OG-image handoff has been open 10 days and is not the gating item; the gating item is the bundle commit (CRITICAL Day-12).

## Reference

- SEO daily report: `marketing-agents/output/seo-daily-2026-04-28.md` §Index Status
- Open OG-image handoff: `marketing-agents/output/seo-requests/2026-04-18-blog-og-images.md`
- Sitemap source of truth: `https://www.ticketscan.io/sitemap.xml`
