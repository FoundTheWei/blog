import Link from "next/link"
import { posts } from "@/lib/posts"
import HeroBackground from "@/components/hero-background"

export default function HomePage() {
  return (
    <>
      {/* Hero section with animated background */}
      <section className="relative flex items-center justify-center pt-20 pb-10 sm:pt-24 sm:pb-12 lg:pt-28 lg:pb-14 overflow-hidden">
        <HeroBackground />
        
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center">
          {/* Main tagline with creative typography */}
          <h1 className="relative">
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-tight">
              A <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-600">design-focused</span> blog.
            </span>
            <span className="block text-sm sm:text-base md:text-lg lg:text-xl font-light text-muted-foreground mt-1 sm:mt-2">
              Exploring <span className="font-semibold text-foreground">AI</span>,
              <span className="font-semibold text-foreground"> creativity</span>
              <span className="text-sm sm:text-base md:text-lg mx-0.5">&</span>
              the <span className="italic">details</span> that
              <span className="inline-block ml-1 bg-lime-400 text-black px-1.5 py-0.5 text-xs sm:text-sm font-bold transform -rotate-1">matter</span>.
            </span>
          </h1>
        </div>
      </section>

      {/* Blog posts section */}
      <main className="max-w-3xl mx-auto px-4 pt-8 pb-16 sm:pt-12 sm:pb-24">

        <div className="space-y-10 sm:space-y-12 lg:space-y-16">
        {posts.map((post, index) => (
          <article key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="group block">
              <div className="flex items-start space-x-4 sm:space-x-6">
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-neutral-300 dark:text-neutral-700 group-hover:text-lime-400 dark:group-hover:text-lime-500 transition-colors duration-300 flex-shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight tracking-tight mb-2 text-foreground break-words">
                    <span className="link-underline link-underline-black">{post.title}</span>
                  </h2>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed line-clamp-3 sm:line-clamp-none">{post.excerpt}</p>
                </div>
              </div>
            </Link>
          </article>
        ))}
        </div>
      </main>
    </>
  )
}
