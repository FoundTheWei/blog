# Blog Post Formatting Instructions for Claude Code

This document contains the exact formatting rules and pattern recognition logic for enhancing blog posts in this repository. When working with markdown files in `/content/posts/`, apply these rules consistently.

## Core Formatting Principles

1. **Technical content should feel conversational, not like documentation**
2. **Every formatting decision must reduce cognitive load**
3. **Maintain high information density while improving scannability**
4. **Performance matters - beautiful but slow is unacceptable**

## Typography Values to Apply

```css
/* Exact values for blog post formatting */
--body-text-size: 20px (desktop), 18px (mobile)
--line-height: 1.85 (desktop), 1.75 (mobile)
--paragraph-spacing: 32px
--section-spacing: 64px
--font-weight-body: 300-400 (light)
--font-weight-headers: 700 (bold)
```

## Pattern Recognition Rules

### Header Hierarchy

- `#` - Post title only (rarely used in content)
- `##` - Major sections → Add bottom border, 64px top margin
- `###` - Subsections → Add lime accent bar left side, 48px top margin
- `####` - Minor points → Simple bold, minimal spacing

### Bold Text Context Analysis

Analyze what follows `**bold text**` to determine treatment:

| Pattern | Example | Treatment |
|---------|---------|-----------|
| Comparison | `**Before:** / **After:**` | Lime accent color, block display |
| Tool/Agent | `**vault-navigator**` | Cyan monospace if hyphenated lowercase |
| Status | `**What's working:**` | Add CheckCircle icon |
| Challenge | `**Current challenges:**` | Add AlertCircle icon |
| Default | `**Important point**` | White color, semibold weight |

### List Formatting Logic

```markdown
- Regular item → Chevron marker (▸)
- **Tool** - Description → Cyan monospace tool name
- Item: Value → Format as label-value pair
- Numbered sequence → Auto-add circular badges if detected
```

### Code Block Detection

Examine code content to determine styling:

```python
# Contains function/class → Standard syntax highlighting
```

```bash
$ command or > prompt → Terminal styling with icon
```

```
metric = value → Metrics display box
```

### Inline Code Patterns

- File paths (`/path/to/file.md`) → Cyan monospace
- Function names (`functionName()`) → Lime with background
- Constants (`CONSTANT_VALUE`) → Different shade
- Commands (`--flag`) → Terminal style

## Special Content Blocks

### Results/Metrics Sections

When you see patterns like:
```
- Tests run: 45
- Passed: 43
- Failed: 2
```

Format as results block with:
- Dimmed labels
- Emphasized values
- Consistent alignment

### Terminal Output

Recognize by:
- `$` or `>` prompts
- `✓` or `✗` status symbols
- `⏺` progress indicators

Apply terminal-specific styling with monospace font and terminal icon.

### File Structure Trees

```
/folder
  /subfolder
    file.ext
```

Maintain indentation, add folder/file icons if possible.

## Color Semantic System

```yaml
lime (#84CC16): Primary accent, positive emphasis, success states
cyan (#06B6D4): File paths, technical terms, tool/agent names
white (#FFFFFF): Headers, strong emphasis
neutral-300 (#D3D3D3): Body text (reduces eye strain)
neutral-800 (#404040): Borders, dividers, subtle elements
red (sparingly): Errors only
green (muted): Success states
amber: Warnings (always with icon)
```

## Table Enhancement Rules

1. Header row gets background tint
2. Add hover states to rows
3. Minimum 16px cell padding
4. Remove vertical borders
5. Keep only horizontal dividers

## Blockquote Interpretation

- Standard quotes → Lime left border, italic, subtle background
- Statistics/metrics → Emphasize numbers
- Warnings → Add warning icon if context suggests
- Key insights → Stronger visual treatment

## Performance Optimizations

### Lazy Loading Strategy

1. **Syntax highlighting**: Use Intersection Observer, trigger at viewport -200px
2. **Images**: Native `loading="lazy"`
3. **Heavy components**: Load at 30% scroll depth
4. **Comments/Related posts**: Load after main content

### Font Loading

```css
font-display: optional; /* Prevent layout shift */
font-size-adjust: 0.545; /* Match system font metrics */
```

## Edge Case Handling

### Mixed Nesting
Handle gracefully:
- Lists containing blockquotes
- Code blocks in lists
- Bold text within italics
- Multiple inline codes in one line

### Long Content
- Code blocks: Horizontal scroll
- URLs: Break at appropriate points
- Tables: Responsive scroll wrapper

## Spacing Rhythm

Maintain consistent spacing ratios:
```
Base unit: 4px
Inline: 1-2 units (4-8px)
List items: 3 units (12px)
Paragraphs: 8 units (32px)
Subsections: 12 units (48px)
Major sections: 16 units (64px)
```

## Priority Resolution

When multiple patterns could apply:
1. Semantic meaning > visual appearance
2. Document consistency > global rules
3. Readability > aesthetics
4. Performance > perfect formatting

## Implementation Notes

### When enhancing a blog post:

1. **First pass**: Identify all special patterns
2. **Second pass**: Apply formatting hierarchically
3. **Third pass**: Verify consistency
4. **Final check**: Ensure no performance regressions

### Remember:

- Don't over-format - not everything needs special treatment
- Maintain the author's voice and intent
- If unsure, choose subtle over dramatic
- Test on both mobile and desktop viewports

## Validation Checklist

After formatting, verify:
- [ ] Headers create clear visual hierarchy
- [ ] Lists are scannable and organized
- [ ] Code blocks are properly identified
- [ ] Colors are used semantically
- [ ] Spacing creates rhythm not gaps
- [ ] Performance remains under 3s load time
- [ ] Mobile experience is excellent

## Evolution Protocol

When encountering undocumented patterns:
1. Infer intent from context
2. Apply closest matching rule
3. Maintain consistency
4. Document new pattern if it appears 5+ times

## Final Directive

You're not just applying styles - you're translating technical content into its most accessible form. Every decision should make complex information feel approachable.

The formatted output should be so natural that readers focus on content, not formatting.