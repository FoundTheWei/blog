# Blog Refactor Notes - Markdown-Based Architecture

## What Was Changed

Instead of having all blog posts in a single `/lib/posts.tsx` file as React components, we moved to individual markdown files.

### New Structure:
```
/content/posts/
  ├── self-healing-documentation.md
  ├── second-brain-ai-navigate.md
  └── subagents-claude-automation.md
```

### Key Files Created:

1. **`/lib/markdown.ts`** - Utility functions to read markdown files:
   - `getPostBySlug()` - Get a single post by slug
   - `getAllPosts()` - Get all posts sorted by date
   - `getPostsByTag()` - Filter posts by tag
   - `getAllTags()` - Get unique tags
   - `searchPosts()` - Search functionality
   - Uses `gray-matter` for frontmatter parsing
   - Uses `reading-time` for reading time calculation

2. **`/components/blog-list.tsx`** - Client-side component for search/filtering
   - Handles search input
   - Tag filtering
   - Client-side state management

3. **`/components/markdown-components.tsx`** - Custom styled components for ReactMarkdown
   - Custom heading styles
   - Code block formatting
   - Table styling
   - Blockquote styling
   - Link styling

### Dependencies Added:
```bash
npm install gray-matter reading-time react-markdown remark-gfm
```

### Markdown File Format:
```markdown
---
title: "Post Title"
date: "2025-08-06"
excerpt: "Brief description"
tags: ["Tag1", "Tag2"]
readingTime: 7
---

Post content in markdown...
```

### Page Updates:
- `/app/page.tsx` - Now uses server-side `getAllPosts()` and passes to client BlogList
- `/app/blog/[slug]/page.tsx` - Uses `getPostBySlug()` and ReactMarkdown for rendering

### Benefits:
1. Each blog post is its own file (easier to manage)
2. Can use any markdown editor
3. Better for version control (see individual post changes)
4. Can easily add new posts without touching code
5. Proper separation of content and code

### To Implement Again:
1. Create `/content/posts/` directory
2. Add markdown files with frontmatter
3. Install dependencies: `gray-matter`, `reading-time`, `react-markdown`, `remark-gfm`
4. Create `/lib/markdown.ts` utility file
5. Update pages to use markdown utilities
6. Create BlogList client component for search/filtering