# Weekly Agent Execution Schedule
**Each agent runs its weekly deep-dive once per week on a staggered schedule.**

## Weekly Calendar (UTC)

```
MONDAY
  09:00  Agent 1 — Content Strategist     (content calendar + lead magnet)
  10:00  Agent 3 — Social Media Manager   (weekly plan + hero content)

TUESDAY
  08:00  Agent 2 — SEO Specialist         (full audit + programmatic expansion)

WEDNESDAY
  10:00  Agent 6 — CRO Specialist         (funnel audit + A/B test design)
  11:00  Agent 4 — Paid Ads Manager       (performance report + new campaign)

THURSDAY
  09:00  Agent 5 — Email Marketing        (sequence optimization + newsletter)

FRIDAY
  07:00  Agent 7 — Analytics & Intelligence  (weekly report + competitor analysis)
  10:00  Agent 8 — Growth & Retention        (churn analysis + referral + pricing)
```

## How to Run Weekly Agents

```bash
# Monday
claude --print "$(cat marketing-agents/prompts/01-content-strategist-weekly.md)"
claude --print "$(cat marketing-agents/prompts/03-social-media-weekly.md)"

# Tuesday
claude --print "$(cat marketing-agents/prompts/02-seo-specialist-weekly.md)"

# Wednesday
claude --print "$(cat marketing-agents/prompts/06-cro-specialist-weekly.md)"
claude --print "$(cat marketing-agents/prompts/04-paid-ads-weekly.md)"

# Thursday
claude --print "$(cat marketing-agents/prompts/05-email-marketing-weekly.md)"

# Friday
claude --print "$(cat marketing-agents/prompts/07-analytics-intelligence-weekly.md)"
claude --print "$(cat marketing-agents/prompts/08-growth-retention-weekly.md)"
```

## Weekly Output Locations

```
marketing-agents/output/content/content-calendar-week-YYYY-MM-DD.md
marketing-agents/output/content/content-performance-week-YYYY-MM-DD.md
marketing-agents/output/content/lead-magnet-YYYY-MM-DD.md
marketing-agents/output/seo-requests/seo-audit-week-YYYY-MM-DD.md
marketing-agents/output/social/social-weekly-YYYY-MM-DD.md
marketing-agents/output/ads/ads-weekly-YYYY-MM-DD.md
marketing-agents/output/email/email-weekly-YYYY-MM-DD.md
marketing-agents/output/cro/cro-weekly-YYYY-MM-DD.md
marketing-agents/output/analytics/analytics-weekly-YYYY-MM-DD.md
marketing-agents/output/growth/growth-weekly-YYYY-MM-DD.md
```

## Why This Order

**Monday** — Content and Social plan the week while data from Friday's analytics report is fresh.

**Tuesday** — SEO runs after Content has planned, so it can validate keyword targets and add technical requirements.

**Wednesday** — CRO and Paid Ads mid-week to incorporate early-week data and launch tests/campaigns that still have the rest of the week to collect data.

**Thursday** — Email goes out after Content + CRO have prepared assets and optimized flows.

**Friday** — Analytics wraps the week with a comprehensive report. Growth uses the full picture to plan retention strategy.

## Cross-Agent Handoffs (Weekly)

```
Agent 7 (Fri) → ALL agents get weekly performance data
Agent 1 (Mon) → Agent 3 (social content), Agent 5 (lead magnets), Agent 2 (keywords)
Agent 2 (Tue) → Agent 1 (content briefs), Agent 6 (landing page specs)
Agent 6 (Wed) → Agent 1 (copy needs), Agent 8 (onboarding data)
Agent 4 (Wed) → Agent 6 (landing page data), Agent 7 (conversion data)
Agent 5 (Thu) → Agent 6 (signup flow data), Agent 8 (churn triggers)
Agent 8 (Fri) → Agent 5 (win-back sequences), Agent 6 (upgrade flows), Agent 1 (launch copy)
```
