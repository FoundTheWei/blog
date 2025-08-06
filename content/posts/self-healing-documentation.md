---
title: "Building Self-Healing Documentation: A Three-Layer Approach with Claude Code and Haiku"
date: "2025-08-06"
excerpt: "I recently tested whether Claude Code could identify and fix documentation inconsistencies without manual intervention. The system found 20 issues across 4 client folders and successfully resolved 15 of them automatically."
tags: ["Documentation Systems", "AI Tools", "Process Automation"]
readingTime: 7
---

I recently tested whether Claude Code could identify and fix documentation inconsistencies without manual intervention. The system found 20 issues across 4 client folders and successfully resolved 15 of them automatically. Here's the architecture and methodology.

## The Initial Test

**Hypothesis:** By combining specialized audit tools with execution capabilities, Claude Code could identify and resolve documentation inconsistencies autonomously.

**Test command:** "Do a deep review of each client and create a list of issues we can fix"

### Results:
- Client audits completed: 4
- Issues identified: 20
- Issues auto-resolved: 15
- Time elapsed: 45 minutes
- Manual fixes required: 5 (data calculation dependencies)

## System Architecture

The solution uses three integrated layers:

### Layer 1: Haiku-Powered Analysis Tools

These Python scripts use Claude Haiku's API for semantic understanding:

```python
def audit_test_documentation(client_name: str) -> List[Issue]:
    """
    Identifies discrepancies between claims and actual documentation.
    
    Example: Detects "40+ tests documented" claim when only 20 test files exist.
    Returns: Specific issues with severity and fix recommendations
    """
```

**Key capability:** Understanding context beyond pattern matching. The tool recognizes that "winning," "winner," and "successful" represent the same concept but flags the inconsistency.

### Layer 2: Specialized Subagents

Behavioral definitions that tell Claude Code what each agent does:

```markdown
# test-analyzer.md
Function: Audit test documentation completeness and consistency
Tools: 
  - intelligent_pattern_extractor (finds tests in any format)
  - data_normalizer (identifies terminology variations)
Output: Actionable issues with specific locations and fix strategies
```

### Layer 3: Orchestration and Execution

Claude Code coordinates the workflow:

1. Deploys subagents for targeted audits
2. Aggregates findings into prioritized task list
3. Executes fixes using appropriate tools
4. Verifies completion

## Findings by Client

### Client A (5 issues, 5 resolved)

| Issue | Type | Resolution | Method |
|-------|------|------------|---------|
| Missing test summaries (Batches 1-3) | Structural | Created | Generated from test files |
| Status value variations | Consistency | Standardized | Bulk find-replace with validation |
| Outdated frontmatter schema | Format | Upgraded | Template application |
| Missing financial fields | Incomplete | Added | Calculated from existing data |
| Unstructured midweek files | Format | Restructured | Content parsing and reformatting |

### Client B (7 issues, 3 resolved)

| Issue | Type | Resolution | Method |
|-------|------|------------|---------|
| Test count mismatch (claims 40+, has 20) | Data integrity | Documented | Added note about historical tests |
| Broken timeline references | Dead links | Fixed | Updated to existing documents |
| Test ID inconsistencies | Format | Standardized | Batch rename operation |
| Missing midweek folders | Structural | Pending | Requires content creation |
| Uncalculated financial data | Incomplete | Pending | Needs source data |

### Client C (2 issues, 2 resolved)

Simple fixes: Dashboard relocated to proper folder, empty file removed.

### Client D (4 issues, 4 resolved)

Navigation fixes and reference corrections completed automatically.

## How Semantic Understanding Changes Detection

**Traditional script capabilities:**
- File exists/doesn't exist
- Link works/broken
- Field present/missing

**Haiku-enhanced detection:**
- "This document claims X but evidence shows Y"
- "These three terms mean the same thing but aren't standardized"
- "Financial impact mentioned but never calculated"
- "Pattern described in prose but not in structured data"

### Example:

```bash
# Traditional: Misses this entirely
"December testing showed remarkable results with simplified checkout"

# Haiku-powered: Extracts and flags
Issue: Test result in narrative not in test file
Location: Batch_Summary.md, line 47
Suggested fix: Create Test_12_Simplified_Checkout.md
Confidence: High (clear test description)
```

## Implementation Methodology

### Phase 1: Build Audit Tools

Created specific analyzers for common problems:
- `audit_test_claims()` - Verifies documented counts match files
- `check_terminology_consistency()` - Finds variations of same concept
- `validate_financial_data()` - Identifies placeholder values
- `scan_navigation_integrity()` - Tests all cross-references

### Phase 2: Define Subagent Behaviors

Wrote markdown specifications for each agent's capabilities and tool access.

### Phase 3: Test and Refine

Ran iterative tests, adding error handling and edge case management.

### Phase 4: Production Run

Full audit and fix cycle across all clients.

## Key Technical Insights

**Caching critical for cost control:**
```
cache_hit_rate = 67%
api_cost_reduction = 65%
performance_improvement = 3x
```

**Graceful degradation essential:**
- Haiku API fails → falls back to pattern matching
- Can't auto-fix → creates manual fix instructions
- Uncertain about fix → flags for human review

**Batching improves reliability:** Instead of fixing issues as found, collecting all issues first prevents cascade failures and allows prioritization.

## Measurable Improvements

**Before:** Manual audit would identify 5-8 surface-level issues  
**After:** Automated audit finds 20 issues including semantic problems

**Before:** Each fix required understanding context, making change, verifying  
**After:** 75% of fixes execute automatically with verification

**Time analysis:**
- Manual audit and fix: 2-3 days
- Automated audit and fix: 45 minutes
- Remaining manual work: 2 hours

## Building Your Own Self-Healing Documentation

**Required components:**
1. Detection tools that understand your specific documentation patterns
2. Execution tools that can modify files safely
3. Orchestration layer that coordinates detection and fixing
4. Verification methods that confirm fixes worked

**Start small:**
- Pick one type of recurring issue
- Build detection for that specific problem
- Add execution capability
- Test thoroughly before expanding

## Current Limitations

The system cannot:
- Create content requiring human judgment
- Calculate metrics without source data
- Resolve conflicting information without rules
- Fix issues requiring external system access

These represent 25% of discovered issues, requiring manual intervention.

## Conclusion

The combination of semantic understanding (via Haiku) and execution capability (via Claude Code) creates a system that can identify and resolve documentation inconsistencies autonomously. The key innovation isn't the individual components but their integration into a self-correcting workflow.

> 75% of documentation issues are mechanical inconsistencies that, once detected with semantic understanding, can be fixed programmatically.

This suggests that maintaining high-quality documentation is less about perfect initial creation and more about continuous, automated correction.

**Next research direction:** Expanding the system to prevent issues by validating changes before they're committed.

This approach reduced documentation maintenance from 20 hours/month to 3 hours/month while improving consistency. The tools and methodology are adaptable to any structured documentation system where patterns can be identified and rules can be defined.