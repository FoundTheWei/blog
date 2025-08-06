import { notFound } from "next/navigation"
import Link from "next/link"
import { getPostBySlug, getAllPosts } from "@/lib/markdown"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, Clock, Calendar, Hash } from "lucide-react"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

function getAdjacentPosts(currentSlug: string) {
  const posts = getAllPosts()
  const currentIndex = posts.findIndex((post) => post.slug === currentSlug)
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null
  return { prevPost, nextPost }
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

  const { prevPost, nextPost } = getAdjacentPosts(params.slug)

  return (
    <main className="pt-24 sm:pt-32 pb-16 sm:pb-24">
      <article className="max-w-3xl mx-auto px-4">
        {/* Back to blog link */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all posts
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight tracking-tighter mb-4">{post.title}</h1>
          
          {/* Post metadata */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            {post.readingTime && (
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readingTime} min read
              </span>
            )}
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <Link key={tag} href={`/?tag=${encodeURIComponent(tag)}`}>
                  <Badge 
                    variant="secondary"
                    className="cursor-pointer hover:bg-lime-400 hover:text-black transition-colors"
                  >
                    <Hash className="h-3 w-3 mr-1" />
                    {tag}
                  </Badge>
                </Link>
              ))}
            </div>
          )}
        </header>

        <div className="prose prose-lg max-w-none mx-auto dark:prose-invert 
                        prose-headings:tracking-tight prose-headings:font-bold
                        prose-h2:text-2xl sm:prose-h2:text-3xl
                        prose-h3:text-xl sm:prose-h3:text-2xl
                        prose-p:text-muted-foreground prose-p:leading-relaxed
                        prose-a:text-lime-500 dark:prose-a:text-lime-400 prose-a:no-underline hover:prose-a:underline
                        prose-strong:text-foreground
                        prose-code:text-lime-600 dark:prose-code:text-lime-400 prose-code:bg-neutral-100 dark:prose-code:bg-neutral-900 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                        prose-pre:bg-neutral-100 dark:prose-pre:bg-neutral-900
                        prose-blockquote:border-l-lime-500 dark:prose-blockquote:border-l-lime-400 prose-blockquote:text-muted-foreground
                        prose-th:text-foreground prose-td:text-muted-foreground
                        prose-table:border prose-table:border-border
                        prose-li:text-muted-foreground
                        prose-img:rounded-lg prose-img:shadow-lg">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Navigation between posts */}
        <nav className="mt-16 pt-8 border-t border-border">
          <div className="grid sm:grid-cols-2 gap-6">
            {prevPost ? (
              <Link href={`/blog/${prevPost.slug}`} className="group">
                <div className="space-y-2">
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <ArrowLeft className="h-4 w-4" />
                    Previous post
                  </span>
                  <h3 className="font-semibold group-hover:text-lime-500 transition-colors line-clamp-2">
                    {prevPost.title}
                  </h3>
                </div>
              </Link>
            ) : (
              <div />
            )}
            
            {nextPost ? (
              <Link href={`/blog/${nextPost.slug}`} className="group text-right">
                <div className="space-y-2">
                  <span className="text-sm text-muted-foreground flex items-center justify-end gap-1">
                    Next post
                    <ArrowRight className="h-4 w-4" />
                  </span>
                  <h3 className="font-semibold group-hover:text-lime-500 transition-colors line-clamp-2">
                    {nextPost.title}
                  </h3>
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </nav>
      </article>
    </main>
  )
}