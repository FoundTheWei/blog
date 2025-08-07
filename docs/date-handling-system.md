# Date Handling System Documentation

## Overview

This blog uses a centralized date handling system to ensure consistent date parsing, formatting, and display across all pages. This prevents timezone-related inconsistencies and ensures dates appear the same whether viewing the homepage or individual blog posts.

## Architecture

### Core Components

1. **`/lib/dates.ts`** - Central date utilities module
   - `parsePostDate(dateString)` - Parses YYYY-MM-DD strings to UTC Date objects
   - `formatPostDate(date)` - Formats dates as "Month Day, Year" 
   - `getSortableDate(dateString)` - Returns timestamp for sorting
   - `isValidDateString(dateString)` - Validates date format

2. **`/lib/markdown.ts`** - Post processing
   - Imports date utilities
   - Validates dates from frontmatter
   - Adds `parsedDate` field to Post interface
   - Sorts posts using `getSortableDate()`

3. **Display Components**
   - `/components/blog-list.tsx` - Homepage listing
   - `/app/blog/[slug]/page.tsx` - Individual posts
   - Both import and use `formatPostDate()` for display

## How It Works

### Date Storage
Dates are stored in markdown frontmatter as strings:
```yaml
---
date: "2025-08-07"
---
```

### Date Parsing Flow
1. Markdown file is read by `getPostBySlug()`
2. Date string is validated with `isValidDateString()`
3. If invalid, falls back to current date
4. Date is parsed as UTC noon (12:00:00) to avoid boundary issues
5. Both raw string and parsed Date are stored on Post object

### Date Display Flow
1. Component receives Post object with date string
2. Calls `formatPostDate(post.date)`
3. Function parses as UTC and formats with UTC timezone
4. Returns consistent "Month Day, Year" format

### Sorting
Posts are sorted newest-first using:
```typescript
posts.sort((a, b) => {
  const date1 = getSortableDate(a.date)
  const date2 = getSortableDate(b.date)
  return date2 - date1
})
```

## Why UTC?

All dates are parsed and formatted as UTC to prevent:
- Different dates showing based on user timezone
- Posts jumping days at midnight local time
- Sorting inconsistencies
- Server/client hydration mismatches

The UTC noon (12:00:00) parsing ensures the date stays stable even with timezone conversions.

## Adding New Posts

When creating new blog posts, use this frontmatter format:
```yaml
---
title: "Your Post Title"
date: "2025-08-15"  # YYYY-MM-DD format
excerpt: "Brief description"
tags: ["tag1", "tag2"]
readingTime: 5
---
```

The date MUST be in YYYY-MM-DD format. Any other format will trigger the fallback to current date.

## Troubleshooting

### Date Shows as "Invalid Date"
- Check frontmatter uses YYYY-MM-DD format
- Ensure date value is quoted: `date: "2025-08-07"`
- Verify the date is valid (not Feb 30, etc)

### Dates Inconsistent Between Pages
- Run `npm run build` to rebuild static pages
- Clear Next.js cache: `rm -rf .next`
- Ensure all components use `formatPostDate()`

### Posts Not Sorting Correctly
- Check all dates are in YYYY-MM-DD format
- Verify no typos in date strings
- Ensure markdown files have frontmatter

## Testing Date Consistency

Create a test script to verify dates:
```javascript
// test-dates.mjs
import { getAllPosts } from './lib/markdown.js'
import { formatPostDate } from './lib/dates.js'

const posts = getAllPosts()
posts.forEach(post => {
  console.log(`${post.title}: ${formatPostDate(post.date)}`)
})
```

## Future Considerations

- All date operations should go through `/lib/dates.ts`
- Never use `new Date()` directly on date strings
- Always specify timezone when formatting dates
- Consider user preferences for date format in future