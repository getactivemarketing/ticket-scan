# TicketScan Marketing Team — Scheduled Cloud Triggers

Managed at: https://claude.ai/code/scheduled

## Active Triggers (3 of 3 slots used)

### 1. Daily — All 8 Marketing Agents
- **ID:** `trig_019kuKboqehbNhcjHir9g9iM`
- **Schedule:** Every day at 6:00 AM ET (10:00 UTC)
- **Cron:** `0 10 * * *`
- **Next run:** Tomorrow
- **Agents:** Analytics → SEO → Content → Social → Paid Ads → Email → CRO → Growth
- **Outputs:** Writes to `marketing-agents/output/` (8 files, one per agent)
- **Link:** https://claude.ai/code/scheduled/trig_019kuKboqehbNhcjHir9g9iM

### 2. Weekly Part 1 — Strategy & Planning (Mon)
- **ID:** `trig_01UaKHKYyMeBxmBPik9Jrxzy`
- **Schedule:** Every Monday at 9:00 AM ET (13:00 UTC)
- **Cron:** `0 13 * * 1`
- **Next run:** Monday, April 13, 2026
- **Agents:** Content (calendar + lead magnet) → Social (weekly plan + hero piece) → SEO (full audit) → CRO (funnel audit + A/B test) → Paid Ads (creative refresh + new campaign)
- **Outputs:** 5 weekly strategy files
- **Link:** https://claude.ai/code/scheduled/trig_01UaKHKYyMeBxmBPik9Jrxzy

### 3. Weekly Part 2 — Analysis & Retention (Fri)
- **ID:** `trig_01UJ4dahFhvR6MLmotogY7dj`
- **Schedule:** Every Friday at 7:00 AM ET (11:00 UTC)
- **Cron:** `0 11 * * 5`
- **Next run:** Friday, April 10, 2026
- **Agents:** Email (drip optimization + newsletter + new sequence) → Analytics (weekly report + competitor deep-dive) → Growth (churn analysis + referral + monetization + psychology)
- **Outputs:** 3 weekly analysis files
- **Link:** https://claude.ai/code/scheduled/trig_01UJ4dahFhvR6MLmotogY7dj

## Output Directory

All agents write to `marketing-agents/output/`:
```
marketing-agents/output/
├── analytics/
│   ├── analytics-daily.md          (daily)
│   └── weekly-analytics-report.md  (Friday)
├── seo-requests/
│   ├── seo-daily.md                (daily)
│   └── weekly-seo-audit.md         (Monday)
├── content/
│   ├── content-hook.md             (daily)
│   ├── blog-draft.md               (daily)
│   └── weekly-content-plan.md      (Monday)
├── social/
│   ├── social-daily.md             (daily)
│   └── weekly-social-plan.md       (Monday)
├── ads/
│   ├── ads-daily.md                (daily)
│   └── weekly-ads-strategy.md      (Monday)
├── email/
│   ├── email-daily.md              (daily)
│   └── weekly-email-strategy.md    (Friday)
├── cro/
│   ├── cro-daily.md                (daily)
│   └── weekly-cro-audit.md         (Monday)
└── growth/
    ├── growth-daily.md             (daily)
    └── weekly-growth-strategy.md   (Friday)
```

## Weekly Rhythm

```
Mon  6am  Daily mega-agent (all 8 agents)
Mon  9am  Weekly Part 1: Content + Social + SEO + CRO + Ads planning
Tue  6am  Daily mega-agent
Wed  6am  Daily mega-agent
Thu  6am  Daily mega-agent
Fri  6am  Daily mega-agent
Fri  7am  Weekly Part 2: Email + Analytics + Growth analysis
Sat  6am  Daily mega-agent
Sun  6am  Daily mega-agent
```

## Configuration

- **Model:** claude-sonnet-4-6
- **Repo:** https://github.com/getactivemarketing/ticket-scan
- **Environment:** Anthropic Cloud (env_015KA11TYVGJdrZGDVzPY6he)
- **Tools:** Bash, Read, Write, Edit, Glob, Grep, WebSearch, WebFetch

## Notes

- Plan limit: 3 cloud triggers max. All 8 agents consolidated into 3 mega-triggers.
- Agents run in sequence within each trigger (not parallel).
- Daily trigger runs all 8 roles; weekly triggers split strategy (Mon) and analysis (Fri).
- Code fixes (SEO, schema, meta tags) are committed directly to the repo.
- To manage triggers: https://claude.ai/code/scheduled
