---
title: "Self-Healing Documentation: When Your Docs Fix Themselves During Dinner"
date: "2025-08-06"
excerpt: "I asked Claude to 'do a deep review of each client and create a list of issues we can fix.' 45 minutes later, it had found 20 issues and fixed 15 of them. While I was making dinner."
tags: ["Documentation Systems", "AI Tools", "Process Automation"]
readingTime: 7
---

> **Context**: 4 clients. 400+ documents. Documentation that's always slightly broken. Until it started fixing itself.

I asked Claude to "do a deep review of each client and create a list of issues we can fix."

45 minutes later, it had found 20 issues and fixed 15 of them. While I was making dinner.

## What Actually Happened

**The command I typed**: "Do a deep review of each client and create a list of issues we can fix"

**What Claude did**:
- Audited 4 client folders
- Found 20 documentation issues
- Fixed 15 automatically
- Left me notes about the 5 it couldn't fix
- All in 45 minutes

The 5 it couldn't fix? They needed actual human judgment about financial calculations. Fair enough.

## The Three-Layer Stack That Makes This Work

### Layer 1: Haiku-Powered Analysis Tools

These Python scripts use Claude Haiku (the cheap, fast model) for semantic understanding:

```python
def audit_test_documentation(client_name: str) -> List[Issue]:
    """
    Identifies when your docs are lying to you.
    
    Example: "40+ tests documented" but only 20 test files exist
    Returns: Specific issues with "here's how to fix this"
    """
```

The magic: It understands that "winning," "winner," and "successful" mean the same thing but flags the inconsistency. A regex would never catch that.

### Layer 2: Specialized Subagents

These are just markdown files that tell Claude what to do:

```markdown
# test-analyzer.md
Function: Find where test docs are broken or lying
Tools: 
  - intelligent_pattern_extractor (finds tests hidden in prose)
  - data_normalizer (catches "winner" vs "winning" nonsense)
Output: Here's what's broken and exactly how to fix it
```

### Layer 3: Claude Code Orchestrates Everything

Claude Code is the conductor:
- Deploys the right subagent for each audit
- Collects all the issues into one list
- Fixes what it can
- Tells me what it can't

## What It Found (And Fixed)

### Client A: 5 issues, all fixed
- Missing test summaries for Batches 1-3 → Generated from actual test files
- "Winner" vs "winning" vs "successful" → Standardized everything
- Outdated frontmatter → Applied new template
- Missing financial fields → Calculated from existing data
- Messy midweek files → Restructured automatically

### Client B: 7 issues, 3 fixed
- Claims "40+ tests" but only has 20 → Added note about historical tests
- Broken timeline links → Fixed references
- Test ID chaos → Batch renamed everything
- Missing folders → Can't create from nothing (fair)
- No financial data → Needs source numbers (also fair)

### Client C & D: Simple Fixes
Dashboard was in wrong folder. Empty files deleted. References fixed. Boring but necessary.

## The Difference Between Smart and Dumb Detection

**What a normal script sees:**
- File exists ✓/✗
- Link works ✓/✗
- Field present ✓/✗

**What Haiku-powered detection sees:**
- "This document claims X but evidence shows Y"
- "These three terms mean the same thing"
- "Financial impact mentioned but never calculated"
- "Test result buried in prose, not in test file"

Real example from my vault:
```markdown
# Normal script: Sees nothing wrong
"December testing showed remarkable results with simplified checkout"

# Haiku: Finds the hidden test
Issue: Test result in narrative not in test file
Location: Batch_Summary.md, line 47
Fix: Create Test_12_Simplified_Checkout.md
Why: Clear test description without documentation
```

## How I Built This (So You Can Too)

### Phase 1: Built specific audit tools
- `audit_test_claims()` - Catches lies about test counts
- `check_terminology_consistency()` - Finds "winner/winning" disasters
- `validate_financial_data()` - Spots placeholder numbers
- `scan_navigation_integrity()` - Tests every single link

### Phase 2: Told Claude what each agent does
Just markdown files describing capabilities. Nothing fancy.

### Phase 3: Let it run wild
First on test data. Then on one client. Then on everything.

### Phase 4: Watch it work
Full audit across all clients. Made dinner. Came back to fixed docs.

## The Economics That Matter

**Caching saves everything:**
- 67% cache hit rate
- 65% cost reduction
- 3x faster

**Graceful failure is mandatory:**
- Haiku fails → Pattern matching backup
- Can't fix → Creates manual instructions
- Not sure → Flags for human review

**Batching prevents disasters:**
Collect all issues first. Then fix. Otherwise you create cascade failures.

## Real Numbers

**Before:** Manual audit finds 5-8 obvious issues
**After:** Auto audit finds 20 issues including subtle semantic problems

**Before:** Each fix takes understanding → changing → verifying
**After:** 75% of fixes happen automatically with verification

**Time saved:**
- Manual audit and fix: 2-3 days
- Automated: 45 minutes
- Remaining manual work: 2 hours

That's 20 hours → 3 hours per month. 17 hours to do actual work.

## Build Your Own

**You need:**
1. Detection tools that understand YOUR patterns
2. Execution tools that can modify files safely
3. Something to coordinate detection and fixing
4. Verification that confirms fixes worked

**Start stupid simple:**
1. Pick ONE recurring issue
2. Build detection for that specific thing
3. Add ability to fix it
4. Test until you trust it
5. Then expand

## What It Can't Do (Yet)

The 25% it can't fix:
- Create content needing human judgment
- Calculate metrics without source data
- Resolve conflicting information without rules
- Fix things requiring external systems

These still need me. For now.

## The Real Discovery

75% of documentation issues are mechanical inconsistencies. Once you can detect them semantically (not just with regex), they're trivial to fix programmatically.

This means good documentation isn't about perfect initial creation. It's about continuous, automated correction.

Your docs can be messy. As long as they're self-healing messy.

## What's Next

Working on: Preventing issues by validating changes BEFORE they're committed. Why fix what you can prevent?

**The bottom line:** Documentation maintenance went from 20 hours/month to 3 hours/month. And it's actually more consistent now.

The tools work with any structured documentation where you can define patterns and rules. Which is basically everything if you squint right.

Your documentation doesn't need to be perfect. It just needs to fix itself while you sleep.