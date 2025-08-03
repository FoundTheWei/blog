import { notFound } from "next/navigation"
import Image from "next/image"
import { posts } from "@/lib/posts"
import type { Post } from "@/lib/posts"

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug)
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="pt-24 sm:pt-32 pb-16 sm:pb-24">
      {post.heroImage && (
        <div className="w-full h-[40vh] sm:h-[60vh] relative mb-12">
          <Image
            src={post.heroImage || "/placeholder.svg"}
            alt={`Hero image for ${post.title}`}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <article className="max-w-3xl mx-auto px-4">
        <header className="mb-12 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight tracking-tighter mb-4">{post.title}</h1>
          <p className="text-muted-foreground">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </header>

        <div className="prose prose-lg max-w-none mx-auto">{post.content}</div>
      </article>
    </main>
  )
}
