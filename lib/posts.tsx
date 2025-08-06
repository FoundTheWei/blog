import type { ReactNode } from "react"

export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  heroImage?: string
  content: ReactNode
  tags?: string[]
  readingTime?: number
}

const PullQuote = ({ children }: { children: ReactNode }) => (
  <blockquote className="border-l-4 border-lime-400 dark:border-lime-500 pl-6 italic text-2xl my-12 text-neutral-800 dark:text-neutral-200">
    {children}
  </blockquote>
)

const CodeBlock = ({ children }: { children: ReactNode }) => (
  <pre className="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-md overflow-x-auto text-sm my-8">
    <code className="!bg-transparent !text-current">{children}</code>
  </pre>
)

const allPosts: Post[] = [
  {
    slug: "build-second-brain-ai-navigate",
    title: "How to Build a Second Brain That Your AI Can Actually Navigate",
    date: "2025-08-03",
    excerpt:
      "Everything in our world can be translated into words or numbers. This simple realization is the key to building a knowledge system that AI can traverse as naturally as you navigate your own memories.",
    tags: ["AI", "Knowledge Management", "Obsidian", "Claude"],
    readingTime: 5,
    content: (
      <>
        <p className="first-letter:text-7xl first-letter:font-bold first-letter:text-lime-500 dark:first-letter:text-lime-400 first-letter:mr-3 first-letter:float-left">
          Everything in our world can be translated into words or numbers. This simple realization is the key to building a knowledge system that AI can traverse as naturally as you navigate your own memories.
        </p>
        
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-12 mb-6">The Setup: Obsidian + Claude Code</h2>
        <p className="mb-6">
          I'm running 210+ documents through an Obsidian vault, but here's what makes it work:
        </p>
        
        <div className="space-y-6 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-2">CLAUDE documents in every folder.</h3>
            <p className="text-muted-foreground">These files tell AI:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
              <li>Where to find specific information</li>
              <li>Current file structure</li>
              <li>Folder-specific instructions</li>
            </ul>
            <p className="mt-4 text-muted-foreground">Think of them as navigation beacons for your AI assistant.</p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-2">Sub-agents that process everything.</h3>
            <p className="text-muted-foreground">Using Claude Code, I created agents that:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
              <li>Review and chunk transcripts into logical pieces</li>
              <li>Maintain interconnected file structures</li>
              <li>Update documentation as the system evolves</li>
            </ul>
          </div>
        </div>
        
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-12 mb-6">The Four Principles That Actually Matter</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-lg mb-2">1. Dense interconnection beats perfect organization</h3>
            <p className="text-muted-foreground">Link everything. The more pathways between documents, the faster AI finds what it needs.</p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-2">2. Context is multi-dimensional</h3>
            <p className="text-muted-foreground mb-2">Words are just the start. Capture:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Who was involved</li>
              <li>When it happened</li>
              <li>Why it matters</li>
              <li>What situation prompted it</li>
            </ul>
            <p className="mt-2 text-muted-foreground">Different documents extract different contexts. Use that.</p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-2">3. Version control isn't optional</h3>
            <p className="text-muted-foreground">Git everything. Your knowledge evolves—track that evolution.</p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-2">4. Embrace messy evolution</h3>
            <p className="text-muted-foreground">Your structure will break. Projects will demand different setups. That's fine. Have your agent periodically review and update the navigation docs.</p>
          </div>
        </div>
        
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-12 mb-6">Real-World Results (and Problems)</h2>
        
        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-3 text-lime-500">What's working:</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>AI gives responses that feel like they're from someone who knows my entire history</li>
              <li>Complex project context stays intact across conversations</li>
              <li>Cross-pollination of ideas happens naturally</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-3 text-orange-500">Current challenges:</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Can't pinpoint where AI pulls specific facts from</li>
              <li>Unknown if this scales beyond 1,000 documents</li>
              <li>Local models can't handle the context length (yet)</li>
            </ul>
          </div>
        </div>
        
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-12 mb-6">The Bigger Picture</h2>
        <p className="mb-4">
          Yesterday's impossible is today's normal. Since ChatGPT 3.5, keeping up isn't optional anymore.
        </p>
        
        <PullQuote>
          The goal isn't perfect capture—it's maximum navigability.
        </PullQuote>
        
        <p>
          But here's what most miss: yes, there's data loss when translating reality into words and numbers. That's fine. An interconnected database is still the closest thing we have to a digital brain that AI can actually use.
        </p>
        
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-12 mb-6">Start Here</h2>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-8">
          <li>Pick your tool (I use Obsidian)</li>
          <li>Create navigation documents for AI</li>
          <li>Build sub-agents for processing</li>
          <li>Link aggressively</li>
          <li>Accept imperfection</li>
        </ol>
        
        <p className="mb-12">
          Because in this new dawn of AI, your knowledge is only as powerful as your AI's ability to traverse it.
        </p>
        
        <div className="border-t border-border pt-6 mt-12">
          <p className="text-sm text-muted-foreground italic">
            Currently testing on Claude's Max plan. Share your approach—we're all figuring this out together.
          </p>
        </div>
      </>
    ),
  },
  {
    slug: "subagents-turned-claude-md-into-automation",
    title: "How Subagents Turned My CLAUDE.md Files Into Actual Automation",
    date: "2025-08-05",
    excerpt:
      "Remember my post about CLAUDE.md files for every folder? Well, something wild happened. These context files I was obsessing over just became... executable.",
    tags: ["AI", "Automation", "Claude Code", "Subagents", "CLAUDE.md"],
    readingTime: 8,
    content: (
      <>
        <p className="first-letter:text-7xl first-letter:font-bold first-letter:text-lime-500 dark:first-letter:text-lime-400 first-letter:mr-3 first-letter:float-left">
          Remember my post about CLAUDE.md files for every folder? Well, something wild happened. These context files I was obsessing over just became... executable. Like, actually doing the work, not just describing it.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-12 mb-6">What Changed Everything</h2>
        <p className="mb-4">
          I was in Claude Code yesterday, frustrated about broken links in my vault (you know the ones - you click and Obsidian creates a new empty file. I HATE that).
        </p>
        <p className="mb-4">
          I typed: "Let's review and make sure all links are properly linked"
        </p>
        <p className="mb-6">
          What happened next broke my brain a little.
        </p>
        <p className="mb-8">
          Claude didn't just find the broken links. It created a plan, spawned specialized agents, and fixed everything. 15+ broken links across 400+ documents. Fixed. In 45 minutes.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-12 mb-6">The "Hierarchical Context Cascade" Thing</h2>
        <p className="mb-4">
          Okay, so I've been calling it this fancy name, but really it's just context files that know about each other:
        </p>
        
        <ul className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
          <li>Root CLAUDE.md - "Hey, here's how to navigate around"</li>
          <li>Methodology Hub - "Here's how we do things"</li>
          <li>Project CLAUDE.md - "Here's what's special about THIS folder"</li>
        </ul>
        
        <p className="mb-8">
          Each layer inherits from above. So when I cd into a client folder, Claude immediately knows the universal patterns AND the client-specific weird stuff.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-12 mb-6">What My Actual Subagents Do</h2>
        <p className="mb-4">
          In <code className="bg-neutral-100 dark:bg-neutral-900 px-2 py-1 rounded text-sm">.claude/agents/</code> I have these specialized workers that started as wishful thinking but now... actually work:
        </p>
        
        <div className="space-y-4 mb-6">
          <div>
            <code className="bg-neutral-100 dark:bg-neutral-900 px-2 py-1 rounded text-sm font-bold">vault-navigator</code>
            <span className="text-muted-foreground"> - Started because I kept asking "where's that document about..." Now it finds anything instantly.</span>
          </div>
          <div>
            <code className="bg-neutral-100 dark:bg-neutral-900 px-2 py-1 rounded text-sm font-bold">link-validator</code>
            <span className="text-muted-foreground"> - Born from pure frustration. Checks 1,400+ links and tells me which ones are broken.</span>
          </div>
          <div>
            <code className="bg-neutral-100 dark:bg-neutral-900 px-2 py-1 rounded text-sm font-bold">test-analyzer</code>
            <span className="text-muted-foreground"> - Reads my A/B test results and pulls out patterns. Added statistical stuff today because it was being too basic.</span>
          </div>
          <div>
            <code className="bg-neutral-100 dark:bg-neutral-900 px-2 py-1 rounded text-sm font-bold">pattern-finder</code>
            <span className="text-muted-foreground"> - This one uses Opus (the good model) because pattern recognition needs the heavy artillery.</span>
          </div>
        </div>
        
        <p className="mb-8 font-semibold">
          Here's the crazy part: I wrote these as "this is what this agent WOULD do" and Claude just... does it.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-12 mb-6">Today's Actual Session (Copy-Pasted)</h2>
        
        <CodeBlock>
{`⏺ vault-navigator(Analyze vault structure)
  ⎿ Done (10 tool uses · 43.2k tokens · 1m 3.8s)

⏺ link-validator(Find all broken links)
  ⎿ Done (12 tool uses · 64.2k tokens · 1m 24.2s)

⏺ [Created Pattern Library for Primal Queen]
⏺ [Created 6 Planning documents]
⏺ [Fixed 10+ reference issues]`}
        </CodeBlock>
        
        <p className="mb-8">
          It created actual documents. With correct frontmatter. In the right folders. With proper linking.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-12 mb-6">What I've Learned (Round 2)</h2>
        
        <div className="space-y-6 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-2">1. Agents need to be DEEP, not broad</h3>
            <p className="text-muted-foreground">My first agents were like "find documents please." Now they have error handling, fallback strategies, and handle edge cases. The difference is night and day.</p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-2">2. "Fake it till you make it" works for automation</h3>
            <p className="text-muted-foreground">I documented tools that didn't exist. Claude Code just... ran with it. Now they're real.</p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-2">3. My imperfect structure is actually perfect</h3>
            <p className="text-muted-foreground">Different clients have different folder structures. Instead of forcing consistency, my agents just adapt. The chaos has become a feature.</p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-2">4. Context windows are still annoying</h3>
            <p className="text-muted-foreground">Even with smart cascading, I hit limits. But it's workable.</p>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-12 mb-6">The Weirdest Discovery</h2>
        <p className="mb-4 font-semibold">
          My subagents are teaching me about my own system.
        </p>
        <p className="mb-8">
          The link-validator found patterns I didn't know existed. The test-analyzer showed me I was calculating ROI wrong. It's like having a very smart intern who actually reads all your documentation.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-12 mb-6">What's Still Frustrating</h2>
        <ul className="list-disc list-inside space-y-2 mb-8 text-muted-foreground">
          <li>When agents interact, debugging gets weird</li>
          <li>Sometimes an agent will "improve" something I didn't want improved</li>
          <li>I still can't track WHERE specific decisions come from</li>
          <li>No idea if this scales to 1,000+ documents (currently at 400+)</li>
        </ul>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-12 mb-6">My Updated Advice</h2>
        <div className="space-y-4 mb-8">
          <div>
            <span className="font-bold">Start with YOUR biggest annoyance</span>
            <span className="text-muted-foreground"> - Mine was broken links. What's yours?</span>
          </div>
          <div>
            <span className="font-bold">Write what you WISH existed</span>
            <span className="text-muted-foreground"> - Document the agent before it's real</span>
          </div>
          <div>
            <span className="font-bold">Layer your context</span>
            <span className="text-muted-foreground"> - Don't put everything in one file</span>
          </div>
          <div>
            <span className="font-bold">Use actual names</span>
            <span className="text-muted-foreground"> - /nav, vault-navigator - Claude treats them as real</span>
          </div>
          <div>
            <span className="font-bold">Embrace the mess</span>
            <span className="text-muted-foreground"> - Perfect structure is the enemy of working automation</span>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-12 mb-6">The Thing That Keeps Blowing My Mind</h2>
        <p className="mb-2">
          Yesterday: "I need to check all my links"
        </p>
        <p className="mb-6">
          Today: "Hey Claude, check all my links" [goes to make coffee]
        </p>
        <p className="mb-8 font-semibold">
          The CLAUDE.md files aren't just documentation anymore. They're instructions that execute.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-12 mb-6">Where This Is Going</h2>
        <p className="mb-4">
          I don't know, honestly. But I'm working on:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
          <li>Agents that update other agents</li>
          <li>Cross-project pattern detection</li>
          <li>Automated weekly reviews that actually write themselves</li>
        </ul>
        
        <PullQuote>
          Every week something that was impossible becomes normal. I'm not even trying to keep up anymore, just trying to document what works.
        </PullQuote>
        
        <p className="mb-12">
          What are you all doing with subagents? Are your CLAUDE.md files getting smart too? Feels like we're all discovering this stuff together.
        </p>
        
        <div className="border-t border-border pt-6 mt-12">
          <p className="text-sm text-muted-foreground italic">
            Join the discussion about CLAUDE.md files and subagents. We're all figuring this out together.
          </p>
        </div>
      </>
    ),
  },
]

// Sort posts by date (newest first)
export const posts = allPosts.sort((a, b) => 
  new Date(b.date).getTime() - new Date(a.date).getTime()
)

// Helper function to filter posts by tag
export const getPostsByTag = (tag: string) => 
  posts.filter(post => post.tags?.includes(tag))

// Helper function to get all unique tags
export const getAllTags = () => {
  const tags = new Set<string>()
  posts.forEach(post => {
    post.tags?.forEach(tag => tags.add(tag))
  })
  return Array.from(tags).sort()
}

// Helper function to search posts
export const searchPosts = (query: string) => {
  const lowercaseQuery = query.toLowerCase()
  return posts.filter(post => 
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  )
}
