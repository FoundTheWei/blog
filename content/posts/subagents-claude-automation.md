---
title: "How Subagents Turned My CLAUDE.md Files Into Actual Automation"
date: "2025-08-05"
excerpt: "Remember my post about CLAUDE.md files for every folder? Well, something wild happened. These context files I was obsessing over just became... executable."
tags: ["AI", "Automation", "Claude Code", "Subagents", "CLAUDE.md"]
readingTime: 8
---

Remember my post about CLAUDE.md files for every folder? Well, something wild happened. These context files I was obsessing over just became... executable. Like, actually doing the work, not just describing it.

## What Changed Everything

I was in Claude Code yesterday, frustrated about broken links in my vault (you know the ones - you click and Obsidian creates a new empty file. I HATE that).

I typed: "Let's review and make sure all links are properly linked"

What happened next broke my brain a little.

Claude didn't just find the broken links. It created a plan, spawned specialized agents, and fixed everything. 15+ broken links across 400+ documents. Fixed. In 45 minutes.

## The "Hierarchical Context Cascade" Thing

Okay, so I've been calling it this fancy name, but really it's just context files that know about each other:

- Root CLAUDE.md - "Hey, here's how to navigate around"
- Methodology Hub - "Here's how we do things"
- Project CLAUDE.md - "Here's what's special about THIS folder"

Each layer inherits from above. So when I cd into a client folder, Claude immediately knows the universal patterns AND the client-specific weird stuff.

## What My Actual Subagents Do

In `.claude/agents/` I have these specialized workers that started as wishful thinking but now... actually work:

**vault-navigator** - Started because I kept asking "where's that document about..." Now it finds anything instantly.

**link-validator** - Born from pure frustration. Checks 1,400+ links and tells me which ones are broken.

**test-analyzer** - Reads my A/B test results and pulls out patterns. Added statistical stuff today because it was being too basic.

**pattern-finder** - This one uses Opus (the good model) because pattern recognition needs the heavy artillery.

Here's the crazy part: I wrote these as "this is what this agent WOULD do" and Claude just... does it.

## Today's Actual Session (Copy-Pasted)

```
⏺ vault-navigator(Analyze vault structure)
  ⎿ Done (10 tool uses · 43.2k tokens · 1m 3.8s)

⏺ link-validator(Find all broken links)
  ⎿ Done (12 tool uses · 64.2k tokens · 1m 24.2s)

⏺ [Created Pattern Library for Primal Queen]
⏺ [Created 6 Planning documents]
⏺ [Fixed 10+ reference issues]
```

It created actual documents. With correct frontmatter. In the right folders. With proper linking.

## What I've Learned (Round 2)

### 1. Agents need to be DEEP, not broad
My first agents were like "find documents please." Now they have error handling, fallback strategies, and handle edge cases. The difference is night and day.

### 2. "Fake it till you make it" works for automation
I documented tools that didn't exist. Claude Code just... ran with it. Now they're real.

### 3. My imperfect structure is actually perfect
Different clients have different folder structures. Instead of forcing consistency, my agents just adapt. The chaos has become a feature.

### 4. Context windows are still annoying
Even with smart cascading, I hit limits. But it's workable.

## The Weirdest Discovery

**My subagents are teaching me about my own system.**

The link-validator found patterns I didn't know existed. The test-analyzer showed me I was calculating ROI wrong. It's like having a very smart intern who actually reads all your documentation.

## What's Still Frustrating

- When agents interact, debugging gets weird
- Sometimes an agent will "improve" something I didn't want improved
- I still can't track WHERE specific decisions come from
- No idea if this scales to 1,000+ documents (currently at 400+)

## My Updated Advice

**Start with YOUR biggest annoyance** - Mine was broken links. What's yours?

**Write what you WISH existed** - Document the agent before it's real

**Layer your context** - Don't put everything in one file

**Use actual names** - /nav, vault-navigator - Claude treats them as real

**Embrace the mess** - Perfect structure is the enemy of working automation

## The Thing That Keeps Blowing My Mind

Yesterday: "I need to check all my links"

Today: "Hey Claude, check all my links" [goes to make coffee]

The CLAUDE.md files aren't just documentation anymore. They're instructions that execute.

## Where This Is Going

I don't know, honestly. But I'm working on:

- Agents that update other agents
- Cross-project pattern detection
- Automated weekly reviews that actually write themselves

> Every week something that was impossible becomes normal. I'm not even trying to keep up anymore, just trying to document what works.

What are you all doing with subagents? Are your CLAUDE.md files getting smart too? Feels like we're all discovering this stuff together.