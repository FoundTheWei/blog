# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal blog about AI automation, knowledge management, and making tech work while having three jobs. Built with Next.js 15, React 19, and Tailwind CSS. Features animated ASCII art because why not.

## Blog Voice & Style

The blog has a specific conversational tone:
- **Real talk, not corporate speak** - "This broke my brain" not "This was transformative"
- **Time is the currency** - Focus on hours saved, not dollars earned
- **Practical over perfect** - "Working automation is income" not "Best practices"
- **Context matters** - Start posts with real situations (3am debugging, client meetings, etc.)
- **Self-deprecating honesty** - Admit when things are held together with duct tape
- **No unnecessary formality** - Use contractions, casual language, occasional profanity where it fits

Example opening: "400+ documents. 4 clients. 3 jobs. 1 brain trying not to melt."

## Commands

```bash
# Development
npm run dev        # Start development server on port 3000 (or 3001 if occupied)

# Build & Production
npm run build      # Build for production
npm run start      # Start production server

# Code Quality
npm run lint       # Run Next.js linting (currently ignores errors in config)
```

## Architecture

### Blog Post System
- **Posts are stored in `/content/posts/`** as individual markdown files with frontmatter
- Each post is a `.md` file with YAML frontmatter containing `title`, `date`, `excerpt`, `tags`, `readingTime`
- Posts are automatically sorted by date (newest first)
- Markdown processing: `gray-matter` for frontmatter, `react-markdown` for rendering
- Helper functions in `/lib/markdown.ts`: `getAllPosts()`, `getPostBySlug()`, `searchPosts()`, `getPostsByTag()`, `getAllTags()`

### Key Components

**ASCII Hero (`/components/ascii-hero.tsx`)**
- 10 animated ASCII patterns that morph between each other
- Interactive controls (play/pause, pattern navigation)
- Hover-activated minimalist UI
- Optimized for both light/dark modes

**Main Pages**
- `/app/page.tsx` - Homepage with search, tag filtering, and post listing
- `/app/blog/[slug]/page.tsx` - Individual blog post with prev/next navigation

### Styling Approach
- Tailwind CSS v4 with PostCSS
- Dark mode support via `next-themes`
- Custom animations in component files using `styled-jsx`
- Shadcn/ui components in `/components/ui/`

## Git Workflow

**Important**: The main branch is `main`, not `master`. When pushing:
```bash
git push origin master:main  # Push local master to remote main
```

## Configuration Notes

- TypeScript and ESLint errors are ignored during builds (see `next.config.mjs`)
- Images are unoptimized for faster builds
- Path alias `@/` maps to root directory

## Deployment

The project auto-syncs with v0.dev and deploys via Vercel. Manual deployments should be avoided as v0.dev manages the deployment pipeline.

## Security Guidelines

**IMPORTANT**: This repository is public. All commits are visible on the `/commits` page.

### Never commit:
- API keys, tokens, or secrets (use environment variables)
- Client names or identifying information (use "Client A", "Client_Redacted", etc.)
- Personal information (emails, phone numbers, addresses)
- Database credentials or connection strings
- Private server URLs or internal network details
- Any `.env` files with real values

### Best practices:
- Keep all sensitive configuration in Vercel environment variables
- Use placeholder values in example configs
- Review changes before committing
- Keep commits focused on site functionality and design
- Avoid debugging information that reveals system details
- Redact client names in all blog posts and examples