import { notFound } from "next/navigation"
import Link from "next/link"
import { getPostBySlug, getAllPosts } from "@/lib/markdown"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, Clock, Calendar, Hash } from "lucide-react"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { customMarkdownComponents } from '@/components/markdown-renderers'

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
      <article className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Back to blog link */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all posts
        </Link>

        <header className="mb-12 pb-8 border-b border-neutral-800">
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight tracking-tighter mb-6 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">{post.title}</h1>
          
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
                        prose-headings:font-bold prose-headings:text-white prose-headings:tracking-tight
                        prose-h1:text-4xl sm:prose-h1:text-5xl prose-h1:mb-8 prose-h1:mt-16 prose-h1:leading-[1.1]
                        prose-h2:text-3xl sm:prose-h2:text-4xl prose-h2:mb-6 prose-h2:mt-14 prose-h2:leading-[1.2]
                        prose-h3:text-2xl sm:prose-h3:text-3xl prose-h3:mb-4 prose-h3:mt-10 prose-h3:leading-[1.3]
                        prose-p:text-lg sm:prose-p:text-xl prose-p:leading-[1.75] sm:prose-p:leading-[1.8] prose-p:mb-8 prose-p:text-neutral-300 prose-p:font-light
                        prose-a:text-lime-400 prose-a:no-underline hover:prose-a:text-lime-300 prose-a:transition-colors
                        prose-strong:text-white prose-strong:font-semibold
                        prose-code:text-lime-400 prose-code:bg-neutral-900/70 prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-code:text-[0.875em] prose-code:font-mono prose-code:before:content-[''] prose-code:after:content-['']
                        prose-pre:bg-black prose-pre:border prose-pre:border-neutral-800 prose-pre:my-10 prose-pre:p-6 prose-pre:rounded-lg prose-pre:overflow-x-auto
                        prose-blockquote:border-l-4 prose-blockquote:border-l-lime-400 prose-blockquote:pl-6 prose-blockquote:my-10 prose-blockquote:text-neutral-300 prose-blockquote:text-xl prose-blockquote:italic
                        prose-ul:my-8 prose-ul:pl-0 prose-ol:my-8 prose-ol:pl-0
                        prose-li:text-lg sm:prose-li:text-xl prose-li:leading-[1.6] prose-li:text-neutral-300 prose-li:my-3 prose-li:ml-6 prose-li:font-light
                        prose-li:marker:text-lime-400
                        prose-hr:border-neutral-800 prose-hr:my-16
                        prose-th:text-white prose-th:font-semibold prose-th:text-left prose-th:py-3
                        prose-td:text-neutral-300 prose-td:py-3
                        prose-table:my-10
                        prose-thead:border-b prose-thead:border-neutral-700
                        prose-tr:border-b prose-tr:border-neutral-800 last:prose-tr:border-0
                        prose-img:rounded-xl prose-img:my-10
                        prose-figcaption:text-center prose-figcaption:text-base prose-figcaption:text-neutral-500 prose-figcaption:mt-4">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={customMarkdownComponents}
          >
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