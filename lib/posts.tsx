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
  },  {
    slug: "the-art-of-subtlety",
    title: "The Art of Subtlety in Digital Design",
    date: "2025-07-22",
    excerpt:
      "Exploring how small details, micro-interactions, and thoughtful spacing can transform a good design into a great one.",
    heroImage: "/placeholder.svg?height=1080&width=1920",
    content: (
      <>
        <p className="first-letter:text-7xl first-letter:font-bold first-letter:text-lime-500 dark:first-letter:text-lime-400 first-letter:mr-3 first-letter:float-left">
          In a world saturated with digital noise, the quietest voices often speak the loudest. Subtlety in design isn't
          about being boring; it's about being intentional. It's the gentle fade of an element as it enters the
          viewport, the satisfying snap of a well-tuned animation, or the perfect amount of whitespace that lets content
          breathe.
        </p>
        <p>
          These details are not mere decoration. They are the invisible threads that weave together a user's experience,
          guiding them, reassuring them, and ultimately, respecting their attention. When we focus on subtlety, we shift
          from designing for the screen to designing for the human on the other side.
        </p>
        <PullQuote>Great design is a conversation, not a monologue. Subtlety is how you listen.</PullQuote>
        <p>
          Consider the power of a single accent color. In a monochrome layout, a splash of coral or lime doesn't just
          draw the eye—it assigns meaning. It can signify interactivity, highlight importance, or simply inject a moment
          of delight. This restraint is a form of confidence in the design's core structure.
        </p>
        <CodeBlock>
          {`
.link-underline {
  position: relative;
  display: inline-block;
}

.link-underline::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: currentColor;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease-out;
}

.link-underline:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}
        `}
        </CodeBlock>
        <p>
          The code above demonstrates a simple yet elegant way to animate link underlines. It's a small touch, but it
          replaces a jarring, instant state change with a smooth, organic transition. This is the essence of subtlety:
          elevating the mundane into something memorable.
        </p>
      </>
    ),
  },
  {
    slug: "ai-as-a-creative-partner",
    title: "AI as a Creative Partner, Not a Replacement",
    date: "2025-06-15",
    excerpt:
      "How generative AI can be used as a tool for inspiration and iteration, augmenting human creativity rather than supplanting it.",
    heroImage: "/placeholder.svg?height=1080&width=1920",
    content: (
      <>
        <p className="first-letter:text-7xl first-letter:font-bold first-letter:text-lime-500 dark:first-letter:text-lime-400 first-letter:mr-3 first-letter:float-left">
          The discourse around artificial intelligence often frames it as a binary choice: human versus machine. But
          what if we viewed it as a collaboration? Generative AI, in particular, offers a powerful new paradigm for
          creative work, acting as an tireless brainstorming partner, a skilled apprentice, or a source of unexpected
          inspiration.
        </p>
        <p>
          Instead of asking an AI to "create a logo," a more fruitful approach is to ask it to "generate 50 variations
          of a logo concept based on brutalism and nature." The human creator then curates, refines, and imbues the
          final product with intent and narrative—qualities that remain uniquely human.
        </p>
        <PullQuote>AI can generate options. The artist makes the choice.</PullQuote>
        <p>
          This partnership allows us to explore creative avenues we might never have considered. It can break us out of
          our stylistic ruts and accelerate the tedious parts of the creative process, leaving more time for high-level
          thinking and refinement. The future of creativity isn't about who creates, but how we create together.
        </p>
      </>
    ),
  },
]
