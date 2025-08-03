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
