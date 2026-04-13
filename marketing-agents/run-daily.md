# Daily Agent Execution Order
**Run every day — agents execute in this sequence due to data dependencies.**

## Execution Schedule (UTC)

```
06:00  Agent 7 — Analytics & Intelligence    [RUNS FIRST — produces daily dashboard]
07:00  Agent 2 — SEO Specialist              [uses analytics dashboard]
08:00  Agent 1 — Content Strategist           [uses SEO keywords + analytics]
09:00  Agent 3 — Social Media Manager         [uses content + analytics]
10:00  Agent 4 — Paid Ads Manager             [uses analytics + social data]
10:00  Agent 5 — Email Marketing Specialist   [uses analytics + content]
11:00  Agent 6 — CRO Specialist              [uses analytics + ad landing page data]
11:00  Agent 8 — Growth & Retention           [uses analytics + email + CRO data]
```

## How to Run Each Agent

For each agent, start a Claude Code session with:

```bash
# Agent 7 — Analytics (runs first)
claude --print "$(cat marketing-agents/prompts/07-analytics-intelligence-daily.md)"

# Agent 2 — SEO
claude --print "$(cat marketing-agents/prompts/02-seo-specialist-daily.md)"

# Agent 1 — Content
claude --print "$(cat marketing-agents/prompts/01-content-strategist-daily.md)"

# Agent 3 — Social Media
claude --print "$(cat marketing-agents/prompts/03-social-media-daily.md)"

# Agent 4 — Paid Ads (can run parallel with Agent 5)
claude --print "$(cat marketing-agents/prompts/04-paid-ads-daily.md)"

# Agent 5 — Email Marketing (can run parallel with Agent 4)
claude --print "$(cat marketing-agents/prompts/05-email-marketing-daily.md)"

# Agent 6 — CRO (can run parallel with Agent 8)
claude --print "$(cat marketing-agents/prompts/06-cro-specialist-daily.md)"

# Agent 8 — Growth & Retention (can run parallel with Agent 6)
claude --print "$(cat marketing-agents/prompts/08-growth-retention-daily.md)"
```

## Parallel Execution Groups

Agents within the same time slot can run in parallel:

```
Sequential:  7 → 2 → 1 → 3
Parallel:    4 + 5 (both at 10:00)
Parallel:    6 + 8 (both at 11:00)
```

## Output Locations

Each agent writes its daily report to:
```
marketing-agents/output/analytics/analytics-daily-YYYY-MM-DD.md    (Agent 7)
marketing-agents/output/seo-requests/seo-daily-YYYY-MM-DD.md      (Agent 2)
marketing-agents/output/content/content-hook-YYYY-MM-DD.md         (Agent 1)
marketing-agents/output/social/social-daily-YYYY-MM-DD.md          (Agent 3)
marketing-agents/output/ads/ads-daily-YYYY-MM-DD.md                (Agent 4)
marketing-agents/output/email/email-daily-YYYY-MM-DD.md            (Agent 5)
marketing-agents/output/cro/cro-daily-YYYY-MM-DD.md                (Agent 6)
marketing-agents/output/growth/growth-daily-YYYY-MM-DD.md          (Agent 8)
```

## Dependency Chain

```
Agent 7 (Analytics)
  ├── feeds → Agent 2 (SEO)
  ├── feeds → Agent 1 (Content) ← also fed by Agent 2
  ├── feeds → Agent 3 (Social) ← also fed by Agent 1
  ├── feeds → Agent 4 (Paid Ads) ← also fed by Agent 3
  ├── feeds → Agent 5 (Email) ← also fed by Agent 1
  ├── feeds → Agent 6 (CRO) ← also fed by Agents 4, 2
  └── feeds → Agent 8 (Growth) ← also fed by Agents 5, 6
```
