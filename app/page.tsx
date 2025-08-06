import { getAllPosts, getAllTags } from "@/lib/markdown"
import ASCIIHero from "@/components/ascii-hero"
import BlogList from "@/components/blog-list"

export default function HomePage() {
  const posts = getAllPosts()
  const allTags = getAllTags()
  
  return (
    <>
      {/* Hero section with animated ASCII art */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 lg:pt-28">
        <ASCIIHero />
      </section>

      {/* Blog posts section */}
      <main className="max-w-3xl mx-auto px-4 pt-8 pb-16 sm:pt-12 sm:pb-24">
        <BlogList posts={posts} tags={allTags} />
      </main>
    </>
  )
}