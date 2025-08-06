"use client"

import Link from "next/link"
import { useState } from "react"
import { posts, getAllTags, searchPosts, getPostsByTag } from "@/lib/posts"
import HeroBackground from "@/components/hero-background"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Clock, Hash, X } from "lucide-react"

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  
  const allTags = getAllTags()
  
  // Filter posts based on search and tag
  let filteredPosts = posts
  if (searchQuery) {
    filteredPosts = searchPosts(searchQuery)
  }
  if (selectedTag) {
    filteredPosts = getPostsByTag(selectedTag).filter(post => 
      !searchQuery || searchPosts(searchQuery).includes(post)
    )
  }
  
  const clearFilters = () => {
    setSearchQuery("")
    setSelectedTag(null)
  }
  
  const hasFilters = searchQuery || selectedTag
  
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
        
        {/* Search and filter controls */}
        <div className="mb-8 space-y-4">
          {/* Search bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-10"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          
          {/* Tags filter */}
          <div className="flex flex-wrap gap-2">
            {allTags.map(tag => (
              <Badge
                key={tag}
                variant={selectedTag === tag ? "default" : "outline"}
                className="cursor-pointer hover:bg-lime-400 hover:text-black transition-colors"
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
              >
                <Hash className="h-3 w-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>
          
          {/* Active filters and post count */}
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>
              {hasFilters ? (
                <span>
                  Showing {filteredPosts.length} of {posts.length} posts
                  {selectedTag && <span> tagged with "{selectedTag}"</span>}
                  {searchQuery && <span> matching "{searchQuery}"</span>}
                </span>
              ) : (
                <span>{posts.length} posts</span>
              )}
            </div>
            {hasFilters && (
              <button
                onClick={clearFilters}
                className="text-lime-500 hover:text-lime-400 transition-colors"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>

        {/* Posts list */}
        <div className="space-y-10 sm:space-y-12 lg:space-y-16">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No posts found matching your filters.</p>
              {hasFilters && (
                <button
                  onClick={clearFilters}
                  className="mt-4 text-lime-500 hover:text-lime-400 transition-colors"
                >
                  Clear filters to see all posts
                </button>
              )}
            </div>
          ) : (
            filteredPosts.map((post, index) => (
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
                      
                      <div className="flex items-center gap-3 text-muted-foreground text-xs sm:text-sm mb-3">
                        <span>
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                        {post.readingTime && (
                          <>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {post.readingTime} min read
                            </span>
                          </>
                        )}
                      </div>
                      
                      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed line-clamp-3 sm:line-clamp-none mb-3">
                        {post.excerpt}
                      </p>
                      
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map(tag => (
                            <Badge 
                              key={tag} 
                              variant="secondary"
                              className="text-xs"
                              onClick={(e) => {
                                e.preventDefault()
                                setSelectedTag(tag)
                              }}
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              </article>
            ))
          )}
        </div>
      </main>
    </>
  )
}