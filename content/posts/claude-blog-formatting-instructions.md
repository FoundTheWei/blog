---
title: "How Claude Code Should Format My Blog Posts: A Living Style Guide"
date: "2025-08-07"
excerpt: "These are the exact markdown patterns and formatting rules Claude Code uses when enhancing my blog posts. If you're curious how an AI formats technical content for maximum readability, this is the system."
tags: ["Claude Code", "Documentation", "Markdown", "AI Instructions", "Style Guide"]
readingTime: 12
---

This document serves as both instructions for Claude Code and a reference for anyone curious about how I structure my blog posts for AI-enhanced formatting. When Claude sees these patterns in my markdown, it triggers specific visual enhancements.

## Core Philosophy for Claude

When you encounter my blog posts, remember: **Technical content should feel like a conversation, not documentation.** Every formatting decision should reduce cognitive load while maintaining information density.

## Typography Instructions

### Base Settings Claude Should Apply

```css
/* Claude, these are the exact values that work */
--text-base: 20px;  /* Desktop body text */
--line-height: 1.85; /* Maximum readability */
--paragraph-gap: 32px; /* Breathing room */
--section-gap: 64px; /* Clear breaks */
```

When formatting text, Claude should recognize that lighter weights (300-400) make technical content less intimidating. Headers should be bold (700) for contrast, but body text stays light.

### How Claude Interprets Headers

```markdown
# This is rarely used (post title only)
## Major sections - Add bottom border, 64px margin top
### Subsections - Add lime accent bar, 48px margin top
#### Rarely used - Keep simple
```

Claude knows that `##` headers represent major topic shifts and should include visual separation (border-bottom). The `###` headers are for subsections within a topic and get the lime accent bar treatment.

## Pattern Recognition Rules

### When Claude Sees Bold Text

Claude analyzes the context of `**bold text**` to determine formatting:

```markdown
**Before:** Something old
**After:** Something new
```
↳ Claude formats these as comparison markers with lime accent

```markdown
**vault-navigator** - Does something
```
↳ Claude recognizes hyphenated lowercase as tool/agent names, applies monospace cyan

```markdown
**What's working:**
**Current challenges:**
```
↳ Claude adds CheckCircle or AlertCircle icons accordingly

### List Formatting Intelligence

Claude interprets list context to apply appropriate styling:

```markdown
- Regular bullet point
  ↳ Standard formatting with chevron marker

- **Tool Name** - Description here
  ↳ Cyan monospace for tool, regular for description

- Step one of a process
- Step two continues
  ↳ Claude may auto-number if pattern suggests sequence

1. Explicitly numbered item
   ↳ Gets circular number badge
```

### Code Block Contextual Formatting

Claude examines code content to determine treatment:

````markdown
```python
def function():
    return "code"
```
↳ Standard syntax highlighting

```bash
$ npm run build
✓ Compiled successfully
```
↳ Terminal styling with Terminal icon

```
cache_hit_rate = 67%
api_cost_reduction = 65%
```
↳ Metrics display with special formatting
````

## Special Patterns Claude Recognizes

### File Paths and References

When Claude sees paths or filenames in any context:

```markdown
In the `/components/ui/button.tsx` file...
The `CLAUDE.md` document explains...
Navigate to `.claude/agents/`
```

Claude applies cyan monospace formatting to make these stand out from regular text.

### Results and Metrics

Claude recognizes result patterns:

```markdown
- Client audits completed: 4
- Issues identified: 20
- Time elapsed: 45 minutes
```

These get formatted as label-value pairs with the value emphasized.

### Terminal Output

Claude identifies terminal sessions by specific markers:

```markdown
⏺ vault-navigator(Analyze vault structure)
  ⎿ Done (10 tool uses · 43.2k tokens · 1m 3.8s)
```

Gets special terminal treatment with appropriate icons and spacing.

## Tables Claude Should Enhance

When Claude encounters tables, apply these enhancements:

```markdown
| Column | Traditional | Enhanced |
|--------|------------|----------|
| Data   | Plain      | Hover effect, padding |
```

Rules:
- Header row gets colored background
- Rows get hover state
- Generous padding (16px minimum)
- Remove vertical borders, keep horizontal only

## Blockquote Interpretation

Claude transforms blockquotes based on content:

```markdown
> Standard quote or important note
```
↳ Gets lime left border, subtle background, italic text

```markdown
> 75% of documentation issues are mechanical...
```
↳ If it contains statistics or key insights, Claude emphasizes differently

## The Hierarchy Claude Maintains

### Visual Weight Order (Strongest to Weakest)
1. **H2 Headers** - Major sections, bottom border
2. **H3 with accent** - Subsections with lime bar
3. **Bold key terms** - White, semibold
4. **Inline code** - Lime with background
5. **Body text** - Neutral-300, light weight
6. **Blockquotes** - Neutral-400, italic

### Spacing Rhythm Claude Follows
```
H2 margin-top: 64px (16 units)
H3 margin-top: 48px (12 units)
Paragraph gap: 32px (8 units)
List item gap: 12px (3 units)
Inline spacing: 4-8px (1-2 units)
```

## Color Coding System

Claude applies colors semantically:

```markdown
**Lime (#84CC16):** Primary accent, positive actions, emphasis
**Cyan (#06B6D4):** File paths, technical references, tools
**White (#FFFFFF):** Headers, strong emphasis
**Neutral-300:** Body text, readable but not harsh
**Neutral-800:** Borders, dividers, subtle elements
```

## Performance Optimizations Claude Implements

### Lazy Loading Triggers

Claude knows to defer heavy operations:

```javascript
// Code blocks: Load syntax highlighting on viewport entry
// Images: Native lazy loading attribute
// Heavy components: Intersection Observer at 30% scroll
// Comments: Load after main content interaction
```

### Font Loading Strategy

Claude prevents layout shift with:

```css
font-display: optional; /* Not swap */
font-size-adjust: 0.545; /* Match fallback metrics */
```

## Edge Cases Claude Handles

### Mixed Content Patterns

When Claude sees complex nested structures:

```markdown
- List item with **bold start** and regular end
  > With a blockquote inside
  ```
  And code too
  ```
```

Claude maintains proper hierarchy without breaking the visual flow.

### Long Code Lines

Claude ensures code blocks handle overflow:
- Horizontal scroll for code blocks
- Word wrap for inline code
- Preserve formatting for ASCII art

## Real-World Examples

### Pattern: Test Results

When I write:
```markdown
### Results:
- Tests run: 45
- Passed: 43
- Failed: 2
- Time: 12.3s
```

Claude formats this as a results block with emphasized values.

### Pattern: Agent Description

When I write:
```markdown
**link-validator** - Checks 1,400+ links and tells me which ones are broken.
```

Claude recognizes this as a tool description and formats accordingly.

### Pattern: Process Steps

When I write:
```markdown
1. Pick your tool (I use Obsidian)
2. Create navigation documents
3. Build sub-agents
4. Link aggressively
5. Accept imperfection
```

Claude creates numbered badges and maintains consistent spacing.

## The Meta Instructions

### When Claude Encounters This Document

If Claude is reading this document to format other posts, it should:

1. Extract the patterns described here
2. Apply them consistently across all blog posts
3. Maintain the conversational tone while enhancing readability
4. Remember that every formatting decision should serve the reader

### Priority Order for Formatting

When multiple patterns could apply, Claude prioritizes:

1. **Semantic meaning** over visual appearance
2. **Consistency** within the document over global rules
3. **Readability** over aesthetic preferences
4. **Performance** over perfect formatting

## Evolution Notes

This system evolves. When Claude encounters patterns not documented here, it should:

- Infer intent from context
- Apply the closest matching pattern
- Maintain consistency with existing formatting
- Err on the side of subtle rather than dramatic

## Testing Claude's Understanding

If Claude correctly interprets this document, it should be able to:

- Format any of my blog posts with consistent styling
- Recognize new patterns that fit the established system
- Make intelligent decisions about edge cases
- Maintain the balance between visual enhancement and readability

> The ultimate test: Can a human read the formatted output and understand the content better than the raw markdown? If yes, Claude has succeeded.

## Final Instruction

Claude, when you format my blog posts, you're not just applying styles—you're translating my thoughts into their most accessible form. Every chevron, every color choice, every spacing decision should make complex technical content feel approachable.

Remember: You're not formatting documentation. You're crafting an experience.

---

*This document is both instruction manual and demonstration. If you're implementing similar formatting, steal liberally. If you're Claude Code, you already know what to do.*