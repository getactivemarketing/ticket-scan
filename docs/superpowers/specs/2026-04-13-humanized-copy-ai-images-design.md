# Agent 3 upgrade: humanized copy + AI-generated images

## Goal

Update the daily social media agent (Agent 3) to:
1. Write post copy that sounds human, not AI-generated
2. Generate unique images for Twitter, Instagram, and Threads posts using Banana (Gemini image generation)

## Scope

- Rewrite `marketing-agents/prompts/03-social-media-daily.md`
- Add image generation instructions to the agent prompt
- Update `marketing-agents/scripts/run-daily.sh` to deploy images before scheduling
- Create `web/public/social/generated/` directory for output images
- TikTok is out of scope (text-only now, Remotion video later)

## 1. Humanizer rules baked into agent prompt

Rewrite the Brand Voice section of `03-social-media-daily.md` with concrete anti-AI rules drawn from the humanizer skill.

### Banned patterns

- **AI vocabulary:** delve, crucial, pivotal, landscape (abstract), tapestry, testament, underscore, showcase, vibrant, nestled, groundbreaking, renowned, breathtaking, foster, garner, interplay, intricate
- **Significance inflation:** "stands as," "serves as," "marks a pivotal moment," "reflects broader trends," "is a testament to"
- **Copula avoidance:** "serves as," "stands as," "boasts," "features" when "is" or "has" works
- **Rule of three:** don't force ideas into groups of three
- **Negative parallelisms:** "It's not just X; it's Y" and "Not only...but also"
- **Tailing negations:** "No guessing." "No wasted clicks." as sentence fragments
- **Signposting:** "Here's the thing," "Let's break this down," "Here's what you need to know"
- **Em dash overuse:** use commas or periods instead
- **Superficial -ing phrases:** "highlighting," "showcasing," "underscoring," "reflecting"
- **Generic positive conclusions:** "The future looks bright," "exciting times ahead"
- **Excessive hedging:** "could potentially," "it might be argued"
- **Persuasive authority tropes:** "The real question is," "At its core," "What really matters"

### Required voice qualities

- Have opinions. React to data, don't just report it.
- Vary sentence length. Short punchy lines. Then longer ones.
- Use contractions. Sound like a person who buys tickets.
- Be specific with numbers and details, not vague claims.
- Acknowledge when something is weird, surprising, or annoying.
- First person is fine when it fits ("We checked," "I keep seeing").
- No emojis except on Instagram (max 2) and TikTok hashtags.

### Example in prompt (calibration)

**Bad (AI-sounding):**
> NBA Play-In starts Tuesday. Lower bowl at Crypto.com Arena: $189 on StubHub, $147 on SeatGeek. That's $42 you keep. Compare every platform in seconds at ticketscan.io

**Good (human):**
> Crypto.com Arena lower bowl for Play-In: $189 on StubHub, $147 on SeatGeek. Same seat. Forty-two bucks apart. Just checked -- ticketscan.io

The good version drops the "That's $42 you keep" formula, uses "forty-two bucks" instead of "$42" for variety, and ends with a casual "just checked" instead of a CTA slogan.

## 2. Image generation via Banana

### Platforms that get images

| Platform | Aspect ratio | Required? |
|----------|-------------|-----------|
| Instagram | 1:1 | Yes (text-only fails at publish) |
| Twitter | 16:9 | Yes (engagement boost) |
| Threads | 1:1 | Yes (visual consistency) |
| TikTok | None | No (text-only, Remotion later) |

### Generation flow per post

1. Agent writes the post copy (humanized)
2. Determines which content pillar the post falls under
3. Constructs a Banana prompt based on the pillar-to-style mapping
4. Generates the image with the correct aspect ratio
5. Saves to `web/public/social/generated/YYYY-MM-DD-platform-topic.png`
6. Sets `mediaUrls` to `["https://www.ticketscan.io/social/generated/<filename>.png"]`

### Content pillar to image style mapping

**Deal Alerts** -- Data-visual style
- Price comparison graphics with bold numbers
- Brand colors: navy background, green/white accent text
- Clean, minimal, no stock photo feel
- Example prompt direction: "Commercial infographic card on navy background showing price comparison between ticket platforms, bold white and green typography, clean flat design"

**Price Intelligence** -- Data-visual style
- Trend indicators, buy/wait/hold visuals
- Chart-like graphics, arrow indicators
- Same brand color palette
- Example prompt direction: "Minimal data visualization card showing a downward price trend arrow in green on dark navy, clean typography, commercial design for social media"

**World Cup 2026** -- Atmospheric/photorealistic style
- Stadium exteriors/interiors, crowd energy, flags, golden hour lighting
- Cinematic feel, shot on a real camera
- Example prompt direction: "MetLife Stadium exterior at golden hour, World Cup flags and banners, crowd streaming toward gates, shot with Sony A7R IV, 24mm wide angle, warm natural light"

**Tips & Education** -- Data-visual style
- Tip cards, numbered list graphics
- Clean layout, readable at small sizes
- Example prompt direction: "Clean social media tip card on dark navy background with the text '3 things to check' in bold white sans-serif, numbered list layout, minimal design"

**Savings Wins** -- Hybrid style
- Savings amount overlaid on atmospheric event background
- Bold number callout over a blurred stadium/arena scene
- Example prompt direction: "Concert arena interior with dramatic stage lighting, shallow depth of field, with a bold '$47 saved' text overlay in white, commercial social media style"

### Banana prompt construction rules

- Always use the 5-component formula: Subject, Action, Location/Context, Composition, Style
- For data-visual posts: use UI/Web domain mode
- For atmospheric posts: use Cinema or Landscape domain mode
- Name real cameras for photorealistic shots (Sony A7R IV, Canon EOS R5)
- Never use banned keywords (8K, masterpiece, ultra-realistic, high resolution)
- Keep text in images under 25 characters (short callouts only)
- Brand colors: navy (#0a1628), green (#22c55e), white (#ffffff)

## 3. Image storage and serving

- **Save path:** `web/public/social/generated/<filename>.png`
- **Public URL:** `https://www.ticketscan.io/social/generated/<filename>.png`
- **Naming convention:** `YYYY-MM-DD-platform-topic.png` (matches post ID)
- **Cleanup:** Old images can accumulate. Add a note in the prompt to only generate images for today's posts, not regenerate old ones.

## 4. Deployment pipeline update

Update `marketing-agents/scripts/run-daily.sh` to add a Vercel deploy step between image generation and Blotato scheduling:

```
Agent 3 runs (writes copy + generates images)
  --> cd web && vercel --prod (deploy images to Vercel)
  --> npm run schedule (push posts to Blotato)
```

## 5. Files to modify

| File | Change |
|------|--------|
| `marketing-agents/prompts/03-social-media-daily.md` | Rewrite brand voice with humanizer rules, add Banana image generation instructions |
| `marketing-agents/scripts/run-daily.sh` | Add `cd web && vercel --prod` step before scheduling |
| `web/public/social/generated/` | Create directory (add `.gitkeep`) |

## 6. What stays the same

- Content calendar JSON format (no schema changes)
- Blotato scheduling script (`schedule-blotato-posts.js`) -- already reads `mediaUrls`
- Platform cadence and timing
- TikTok posts (text-only)
- Weekly social agent (`03-social-media-weekly.md`) -- not in scope
- Other 7 marketing agents -- not in scope

## 7. Cost estimate

- ~4-5 Banana (Gemini) image generations per day
- Using `gemini-3.1-flash-image-preview` at 2K resolution
- Free tier allows ~20-500 requests per day depending on rate limits
- Well within budget for daily social content

## 8. Risks

- **Gemini safety filters:** Some prompts (crowd scenes, stadium shots) could trigger false positives. Mitigation: the agent prompt includes fallback instructions to rephrase and retry.
- **Image quality variance:** AI-generated images won't always be perfect. Mitigation: the human can review before the `vercel --prod` step if desired.
- **Vercel deploy adds latency:** The daily trigger will take longer to complete. Mitigation: deploy step is fast for static assets only.
