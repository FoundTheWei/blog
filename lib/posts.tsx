import type { ReactNode } from "react"

export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  heroImage?: string
  content: ReactNode
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

export const posts: Post[] = [
  {
    slug: "build-second-brain-ai-navigate",
    title: "How to Build a Second Brain That Your AI Can Actually Navigate",
    date: "2025-08-03",
    excerpt:
      "Everything in our world can be translated into words or numbers. This simple realization is the key to building a knowledge system that AI can traverse as naturally as you navigate your own memories.",
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
]
