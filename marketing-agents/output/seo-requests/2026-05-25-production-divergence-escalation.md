# Memo #5 — Production Divergence Escalation

**From:** SEO Agent
**To:** Lead Architect / Deploy Pipeline Owner
**Date:** 2026-05-25
**Severity:** High — supersedes Memos #1–#4

## TL;DR

The deployed Vercel build is **not the same code as `origin/main`**. The blog Article-schema patches in the working-tree bundle are live in production, but the matching commit doesn't exist in git history. The `lowPrice` patch in the same bundle is **not** live. The 5-memo "frozen bundle awaiting your commit" framing is wrong on premises — production has partially diverged through a deploy path that bypasses the canonical git history.

## Evidence

**Site-of-truth gap on `web/src/app/blog/[slug]/page.tsx`:**

1. `git rev-parse HEAD origin/main` → both `50dbcd3bc02c050484c8dea08c0c95332feefb52`. Local main is current with origin.
2. `git show HEAD:web/src/app/blog/[slug]/page.tsx` returns the **pre-patch** flat `articleJsonLd` object (no `@graph`, no `image` field, no `BreadcrumbList`, no `keywords`, no `articleSection`).
3. Working-tree version (`git hash-object` → `274227f5`) is the **post-patch** version with the `@graph` wrapper, image, breadcrumbs, etc.
4. Live HTML at `https://www.ticketscan.io/blog/world-cup-2026-final-ticket-10990-dynamic-pricing?_cb=$(date +%s)` returns the **post-patch** JSON-LD — `@graph`, `BreadcrumbList`, `image`, `keywords`, `articleSection`, `publisher.logo.@type:ImageObject`. Cache-busted URL, `x-vercel-cache: HIT` with `age: 46s` confirms Vercel built fresh HTML and the build emitted post-patch code.
5. Verified on three blog URLs (world-cup-2026-final-ticket-10990-dynamic-pricing, best-time-to-buy-concert-tickets, avoid-ticket-scams) — same pattern. Live build is uniformly post-patch on the blog template.

**Partial-deploy proof on `web/src/app/world-cup-2026/[stadium]/page.tsx`:**

1. Same working tree has the `lowPrice` patch (validated 5/23, expected to ship `~150` instead of `15000`).
2. `curl -s https://www.ticketscan.io/world-cup-2026/att-stadium?_cb=...` → `"lowPrice":15000`. Identical for `mercedes-benz-stadium=10000`, `lumen-field=8000`, `levis-stadium=6000`.
3. So the deployment that shipped the blog patches did **not** also ship the WC patches, even though both files live in the same working tree.

## What this changes

Memos #1–#4 (5/4, 5/11, 5/18, plus the strategic-planning handoff frame in last week's reports) all assumed the working-tree bundle was a single deploy unit waiting on your commit. That premise is false. Production accepts file-level partial deploys via some path that doesn't touch git main. Until we understand that path, every "frozen bundle" frame in prior memos is misdirected.

## Asks

1. **Confirm what production builds from.** Is Vercel pulling from a non-main branch, a non-repo source, or accepting CLI-promoted preview builds? If the latter, who has push rights to that path?
2. **Reconcile main with production.** Either commit the live-but-uncommitted blog-template state to `main` (preferred), or roll back the deployed artifact to match `main`. Whichever direction, source-of-truth needs to converge so downstream agents (SEO, Content, CRO) can reason from one history.
3. **Explain the `lowPrice` exclusion.** If the blog patches were ship-worthy via the deploy path you used, why was `lowPrice` left out? Day 16 of a four-digit price-data schema regression is a long time, and the answer determines whether `lowPrice` is awaiting an active decision or just got missed.
4. **Process safeguard going forward.** Whatever deploy path produced the divergence — please document it or close it. Selective file-level deploys without a commit manifest mean nobody downstream can run `git log` to understand what's in production at a given moment. That's a much bigger SEO problem than the immediate `lowPrice` regression, because it blocks every future schema-rotation audit from comparing against ground truth.

## Linkage

- Daily report: `marketing-agents/output/seo-daily-2026-05-25.md` (sections "Index status", "Errors found → NEW", "Schema markup validation").
- Working-tree file in question: `web/src/app/blog/[slug]/page.tsx` lines 79–116 (post-patch) vs `git show HEAD:` (pre-patch).
- Live verification cmd: `curl -s 'https://www.ticketscan.io/blog/world-cup-2026-final-ticket-10990-dynamic-pricing?_cb='$(date +%s) | grep -oE '"@type":"[^"]+"' | sort | uniq -c`
- WC verification cmd: `curl -s 'https://www.ticketscan.io/world-cup-2026/att-stadium?_cb='$(date +%s) | grep -oE '"lowPrice":"?[0-9]+"?'`

Both commands reproduce the findings deterministically. Run them and you'll see what I see.
