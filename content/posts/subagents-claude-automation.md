---
title: "How Subagents Turned My CLAUDE.md Files Into Actual Automation"
date: "2025-08-04"
excerpt: "Remember my post about CLAUDE.md files for every folder? Well, something wild happened. These context files I was obsessing over just became... executable."
tags: ["AI", "Automation", "Claude Code", "Subagents", "CLAUDE.md"]
readingTime: 4
---

> **Context**: 400+ documents. 4 clients. 3 jobs. 1 brain trying not to melt. This is how I automated the part that was killing me.

Remember my post about CLAUDE.md files for every folder? Well, something wild happened. These context files I was obsessing over just became... executable. Like, actually doing the work, not just describing it.

## What Changed Everything

I was in Claude Code yesterday at 2am, frustrated about broken links in my vault (you know the ones - you click and Obsidian creates a new empty file instead of finding the actual document).

Why does this matter? Because broken links at 2am when you're trying to find test results for a client meeting at 9am is how you accidentally show the wrong data to the wrong client. That's how you lose an income stream.

I typed: "Let's review and make sure all links are properly linked"

What happened next broke my brain a little.

Claude didn't just find the broken links. It created a plan, spawned specialized agents, and fixed everything. 15+ broken links across 400+ documents. Fixed. In 45 minutes. While I made coffee and questioned my life choices.

## The "Hierarchical Context Cascade" Thing

Okay, so I've been calling it this fancy name, but really it's just context files that know about each other:

```
Root CLAUDE.md ─── "Navigate without dying"
├── Methodology Hub ─── "Universal patterns across all jobs"
└── Project CLAUDE.md ─── "THIS client's specific insanity"
```

Each layer inherits from above. So when I `cd` into a client folder, Claude immediately knows:
- The universal patterns (how I work)
- The client-specific weird stuff (their terminology, their metrics)
- **Most importantly: What NOT to mix with other clients**

## What My Actual Subagents Do

In `.claude/agents/` I have these specialized workers that started as wishful thinking but now... actually work:

**vault-navigator** - Started because I kept asking "where's that document about..." at 3am. Now it finds anything instantly. Saves me 20 min/day minimum.

**link-validator** - Born from pure frustration and fear. Checks 1,400+ links and tells me which ones are broken before they betray me in a meeting.

**test-analyzer** - Reads my A/B test results and pulls out patterns. Added statistical validation because one wrong number could end a contract.

**pattern-finder** - This one uses Opus (the expensive model) because pattern recognition across multiple clients needs the heavy artillery.

Here's the crazy part: I wrote these as "this is what this agent WOULD do if it existed" and Claude just... started doing it.

## Today's Actual Session (Copy-Pasted)

```bash
⏺ vault-navigator(Analyze vault structure)
  ⎿ Done (10 tool uses · 43.2k tokens · 1m 3.8s)
  ⎿ Cost: $0.73 (worth not losing a $3k/month client)

⏺ link-validator(Find all broken links)
  ⎿ Done (12 tool uses · 64.2k tokens · 1m 24.2s)
  ⎿ Found: 23 broken links that could have killed me

⏺ [Created Pattern Library for Client_Redacted]
⏺ [Created 6 Planning documents]
⏺ [Fixed 10+ reference issues]
```

It created actual documents. With correct frontmatter. In the right folders. With proper linking. Without me touching anything.

That's 2 hours of work I didn't do. 2 hours I can bill elsewhere. Or sleep. (Probably bill elsewhere.)

## What I've Learned (Round 2)

### 1. Agents need to be DEEP, not broad

My first agents were like "find documents please." Now they have:
- Error handling (for when everything breaks at once)
- Fallback strategies (for when Claude is down)
- Edge case handling (for client-specific weirdness)

The difference between "helpful" and "essential for survival."

### 2. "Fake it till you make it" works for automation

I documented tools that didn't exist. Claude Code just... ran with it. Now they're real.

This might be the most important discovery: **You can manifest automation by describing it well enough.**

### 3. My imperfect structure is actually perfect

Different clients have different folder structures. Different jobs have different conventions. Instead of forcing consistency, my agents just adapt.

The chaos has become a feature. Just like my life.

### 4. Context windows are still the enemy

Even with smart cascading, I hit limits. But workable > perfect when perfect means poverty.

## The Weirdest Discovery

**My subagents are teaching me about my own system.**

The link-validator found patterns I didn't know existed. The test-analyzer showed me I was calculating ROI wrong (fixed before client noticed). It's like having a very smart intern who:
- Actually reads all your documentation
- Never sleeps
- Never asks for equity
- Never realizes you have three jobs

## What's Still Terrifying

- When agents interact, debugging gets weird
- Sometimes an agent will "improve" something (translation: break my system)
- I still can't track WHERE specific decisions come from (audit trail problem)
- No idea if this scales to 1,000+ documents (currently at 400+ and sweating)
- If Claude API dies, I'm fucked (working on local alternatives)

## My Updated Advice

**Start with YOUR biggest pain point** - Mine was broken links that could expose client mixing

**Write what you WISH existed** - Document the agent before it's real, Claude will manifest it

**Layer your context** - Don't put everything in one file (single point of failure)

**Use actual names** - `vault-navigator` not `nav` - Claude treats real names as real things

**Embrace the mess** - Perfect structure is poverty. Working automation is income.

## The Thing That Keeps Blowing My Mind

Yesterday: "I need to check all my links before tomorrow's meetings" *[panics for 2 hours]*

Today: "Hey Claude, check all my links" *[goes to make coffee]*

The CLAUDE.md files aren't just documentation anymore. They're instructions that execute. They're employees that cost $20/month instead of $5k/month.

## Where This Is Going

I don't know, honestly. But I'm working on:

- Agents that update other agents (recursive automation)
- Cross-project pattern detection (reusable solutions across clients)
- Automated weekly reviews that actually write themselves
- Emergency protocols (for when two clients need something at the same time)

Every week something that was impossible becomes normal. I'm not even trying to keep up anymore, just trying to document what works before I forget it exists.

## The Real Metric

- **Time saved per week**: ~15 hours
- **Mental capacity freed up**: Priceless
- **Stress reduced**: Immeasurable
- **Still checking broken links manually**: Never again