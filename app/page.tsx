import Link from "next/link"
import { posts } from "@/lib/posts"

export default function HomePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="text-center sm:text-left mb-16">
        <p className="text-lg text-muted-foreground">
          A design-focused blog. Exploring AI, creativity, and the details that matter.
        </p>
      </div>

      <div className="space-y-16">
        {posts.map((post, index) => (
          <article key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="group block">
              <div className="flex items-start space-x-6">
                <span className="text-4xl font-bold text-neutral-300 dark:text-neutral-700 group-hover:text-lime-400 dark:group-hover:text-lime-500 transition-colors duration-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tighter mb-2 text-foreground">
                    <span className="link-underline link-underline-black">{post.title}</span>
                  </h2>
                  <p className="text-muted-foreground text-sm mb-4">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </main>
  )
}
