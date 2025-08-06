# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a design-focused blog built with Next.js 15, React 19, and Tailwind CSS. The blog features animated ASCII art, advanced filtering, and a unique visual design.

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
- **Posts are defined in `/lib/posts.tsx`** as React components, not markdown files
- Each post is a JavaScript object with `title`, `date`, `excerpt`, `tags`, `readingTime`, and JSX `content`
- Posts are automatically sorted by date (newest first)
- Helper functions: `searchPosts()`, `getPostsByTag()`, `getAllTags()`

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