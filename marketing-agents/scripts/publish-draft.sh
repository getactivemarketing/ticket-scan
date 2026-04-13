#!/bin/bash
# Publish a blog draft from marketing-agents/output/content/ to the live site.
#
# Usage:
#   ./publish-draft.sh <draft-filename>
#   ./publish-draft.sh 2026-04-07-world-cup-final-10990-dynamic-pricing.md
#
# What it does:
# 1. Reads the draft markdown file (expects YAML frontmatter with metadata)
# 2. Converts it to a BlogPost TypeScript object
# 3. Prepends it to the blogPosts array in web/src/data/blog.ts
# 4. Moves the draft to marketing-agents/output/content/published/
# 5. Commits and pushes — Vercel auto-deploys
#
# Expected frontmatter format (at top of draft .md file):
# ---
# title: "Your Title Here"
# slug: url-friendly-slug
# excerpt: "Short 1-2 sentence summary (under 200 chars)"
# category: guides | tips | news | comparisons
# tags: ["tag1", "tag2", "tag3"]
# readTime: 8
# featured: false
# ---
#
# (Body follows after the closing ---)

set -e

PROJECT_DIR="/Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan"
BLOG_FILE="$PROJECT_DIR/web/src/data/blog.ts"
DRAFT_DIR="$PROJECT_DIR/marketing-agents/output/content"
PUBLISHED_DIR="$DRAFT_DIR/published"

# Validate input
if [ -z "$1" ]; then
    echo "Usage: $0 <draft-filename>"
    echo ""
    echo "Available drafts:"
    ls -1 "$DRAFT_DIR" 2>/dev/null | grep -v "^published$" | grep -v "content-hook" | grep "\.md$" || echo "  (none)"
    exit 1
fi

# Accept either basename or full path
INPUT="$1"
if [ -f "$DRAFT_DIR/$INPUT" ]; then
    DRAFT_FILE="$DRAFT_DIR/$INPUT"
elif [ -f "$INPUT" ]; then
    DRAFT_FILE="$INPUT"
else
    echo "❌ Draft not found: $INPUT"
    echo ""
    echo "Looked in:"
    echo "  $DRAFT_DIR/$INPUT"
    echo "  $INPUT"
    exit 1
fi

DRAFT_BASENAME=$(basename "$DRAFT_FILE")
echo "📝 Publishing: $DRAFT_BASENAME"

mkdir -p "$PUBLISHED_DIR"

# Extract frontmatter and body using awk
FRONTMATTER=$(awk '/^---$/{f=!f; if(!f) exit; next} f' "$DRAFT_FILE")
BODY=$(awk 'BEGIN{f=0; c=0} /^---$/{c++; if(c==2){f=1; next}} f' "$DRAFT_FILE")

if [ -z "$FRONTMATTER" ]; then
    echo "❌ No YAML frontmatter found. Expected format:"
    echo ""
    echo "---"
    echo "title: \"Your Title\""
    echo "slug: your-slug"
    echo "excerpt: \"Your excerpt\""
    echo "category: guides"
    echo "tags: [\"tag1\", \"tag2\"]"
    echo "readTime: 8"
    echo "---"
    echo ""
    echo "Body content here..."
    exit 1
fi

# Parse frontmatter fields using Python (tolerant of variations in field names)
METADATA=$(FRONTMATTER_CONTENT="$FRONTMATTER" BODY_CONTENT="$BODY" python3 <<'PY'
import sys, re, os

frontmatter = os.environ.get('FRONTMATTER_CONTENT', '')
body = os.environ.get('BODY_CONTENT', '')

fields = {}
for line in frontmatter.strip().split('\n'):
    if ':' not in line:
        continue
    key, val = line.split(':', 1)
    fields[key.strip().lower()] = val.strip()

def clean(s):
    s = s.strip()
    if (s.startswith('"') and s.endswith('"')) or (s.startswith("'") and s.endswith("'")):
        s = s[1:-1]
    return s

title = clean(fields.get('title', ''))
slug = clean(fields.get('slug', ''))
excerpt = clean(fields.get('excerpt', '') or fields.get('description', '') or fields.get('summary', ''))

cat_raw = clean(fields.get('category', 'guides')).lower()
if cat_raw not in ('guides', 'tips', 'news', 'comparisons'):
    cat_raw = 'guides'
category = cat_raw

read_time_raw = clean(fields.get('readtime', '') or fields.get('read_time', ''))
if read_time_raw and read_time_raw.isdigit():
    read_time = read_time_raw
else:
    word_count = len(body.split())
    read_time = str(max(3, round(word_count / 200)))

featured = clean(fields.get('featured', 'false')).lower()
if featured not in ('true', 'false'):
    featured = 'false'

tags_raw = fields.get('tags', '[]').strip()
if tags_raw.startswith('[') and tags_raw.endswith(']'):
    tags_raw = tags_raw[1:-1]
tags = [clean(t) for t in tags_raw.split(',') if t.strip()]
if not tags:
    tags = ['tickets']

print(f"TITLE={title}")
print(f"SLUG={slug}")
print(f"EXCERPT={excerpt}")
print(f"CATEGORY={category}")
print(f"READTIME={read_time}")
print(f"FEATURED={featured}")
print(f"TAGS={','.join(tags)}")
PY
)

# Load parsed metadata into shell vars (safe — no eval)
TITLE=$(echo "$METADATA" | grep "^TITLE=" | cut -d'=' -f2-)
SLUG=$(echo "$METADATA" | grep "^SLUG=" | cut -d'=' -f2-)
EXCERPT=$(echo "$METADATA" | grep "^EXCERPT=" | cut -d'=' -f2-)
CATEGORY=$(echo "$METADATA" | grep "^CATEGORY=" | cut -d'=' -f2-)
READTIME=$(echo "$METADATA" | grep "^READTIME=" | cut -d'=' -f2-)
FEATURED=$(echo "$METADATA" | grep "^FEATURED=" | cut -d'=' -f2-)
TAGS=$(echo "$METADATA" | grep "^TAGS=" | cut -d'=' -f2-)

# Validate required fields
if [ -z "$TITLE" ] || [ -z "$SLUG" ] || [ -z "$EXCERPT" ]; then
    echo "❌ Missing required frontmatter: title, slug, and excerpt are required"
    exit 1
fi

# Check slug doesn't already exist in blog.ts
if grep -q "slug: '$SLUG'" "$BLOG_FILE" || grep -q "slug: \"$SLUG\"" "$BLOG_FILE"; then
    echo "❌ Slug '$SLUG' already exists in blog.ts — choose a different slug"
    exit 1
fi

PUBLISHED_AT=$(date +%Y-%m-%d)

# Build TypeScript tags array
TS_TAGS=""
IFS=',' read -ra TAG_ARRAY <<< "$TAGS"
for t in "${TAG_ARRAY[@]}"; do
    TS_TAGS="$TS_TAGS'$(echo "$t" | sed "s/'/\\\\'/g")', "
done
TS_TAGS="[${TS_TAGS%, }]"

# Escape backticks in body so they don't break the template literal
ESCAPED_BODY=$(echo "$BODY" | sed 's/`/\\`/g' | sed 's/\${/\\${/g')

# Build the new BlogPost object as a temp file
NEW_POST_FILE=$(mktemp)
cat > "$NEW_POST_FILE" <<EOF
  {
    slug: '$SLUG',
    title: \`$(echo "$TITLE" | sed 's/`/\\`/g')\`,
    excerpt: \`$(echo "$EXCERPT" | sed 's/`/\\`/g')\`,
    category: '$CATEGORY',
    tags: $TS_TAGS,
    author: 'Ticket Scan Team',
    publishedAt: '$PUBLISHED_AT',
    readTime: $READTIME,
    featured: $FEATURED,
    content: \`
$ESCAPED_BODY
    \`,
  },
EOF

# Insert the new post right after "export const blogPosts: BlogPost[] = ["
python3 <<PY
import re

with open("$BLOG_FILE", 'r') as f:
    content = f.read()

with open("$NEW_POST_FILE", 'r') as f:
    new_post = f.read()

marker = 'export const blogPosts: BlogPost[] = ['
idx = content.find(marker)
if idx == -1:
    print("ERROR: Couldn't find blogPosts array marker")
    exit(1)

insert_at = idx + len(marker)
new_content = content[:insert_at] + '\n' + new_post + content[insert_at:]

with open("$BLOG_FILE", 'w') as f:
    f.write(new_content)

print(f"✅ Inserted new post at position {insert_at}")
PY

rm "$NEW_POST_FILE"

# Move draft to published archive
mv "$DRAFT_FILE" "$PUBLISHED_DIR/$DRAFT_BASENAME"
echo "📦 Draft moved to: published/$DRAFT_BASENAME"

# Show diff and confirm
cd "$PROJECT_DIR"
echo ""
echo "📄 Changes to commit:"
git diff --stat web/src/data/blog.ts

# Commit and push
git add "$BLOG_FILE" "marketing-agents/output/content/published/$DRAFT_BASENAME" "$DRAFT_FILE" 2>/dev/null || true
git add -u marketing-agents/output/content/ 2>/dev/null || true
git add web/src/data/blog.ts

git commit -m "Publish blog post: $TITLE

Slug: $SLUG
Category: $CATEGORY
Read time: $READTIME min
Published: $PUBLISHED_AT

Auto-published from marketing-agents/output/content/$DRAFT_BASENAME

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"

git push origin main

echo ""
echo "✅ Published!"
echo "🔗 Will be live at: https://www.ticketscan.io/blog/$SLUG"
echo "⏱  Vercel deploy usually takes 1-2 minutes"
