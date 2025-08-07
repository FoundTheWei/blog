"use client"

import Link from "next/link"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Clock, Hash, X } from "lucide-react"
import { formatPostDate } from "@/lib/dates"

interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  tags?: string[]
  readingTime?: number
}

interface BlogListProps {
  posts: Post[]
  tags: string[]
}

export default function BlogList({ posts, tags }: BlogListProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  
  // Separate README from regular posts
  const readmePost = posts.find(post => post.title.toLowerCase().includes('readme'))
  const regularPosts = posts.filter(post => !post.title.toLowerCase().includes('readme'))
  
  // Filter posts based on search and tag
  let filteredPosts = regularPosts
  if (searchQuery) {
    const lowercaseQuery = searchQuery.toLowerCase()
    filteredPosts = regularPosts.filter(post => 
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    )
  }
  if (selectedTag) {
    filteredPosts = filteredPosts.filter(post => 
      post.tags?.includes(selectedTag)
    )
  }
  
  const clearFilters = () => {
    setSearchQuery("")
    setSelectedTag(null)
  }
  
  const hasFilters = searchQuery || selectedTag
  
  return (
    <>
      {/* README Section */}
      {readmePost && (
        <div className="mb-12">
          <Link href={`/blog/${readmePost.slug}`} className="group block">
            <div className="p-6 sm:p-8 bg-gradient-to-r from-neutral-900 to-black border-2 border-lime-400/20 rounded-lg hover:border-lime-400/40 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-lime-400 font-mono text-sm">README.md</span>
                <span className="text-xs text-neutral-500 uppercase tracking-wider">Start Here</span>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight tracking-tight mb-3 text-white">
                {readmePost.title.replace('README.md: ', '')}
              </h2>
              <p className="text-neutral-300 text-base sm:text-lg leading-relaxed mb-4">
                {readmePost.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-neutral-400 text-sm">
                  {readmePost.readingTime && (
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {readmePost.readingTime} min read
                    </span>
                  )}
                </div>
                <span className="text-lime-400 group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* Separator */}
      <div className="mb-8 flex items-center gap-4">
        <div className="flex-1 h-px bg-neutral-800"></div>
        <span className="text-xs text-neutral-600 uppercase tracking-wider">Posts</span>
        <div className="flex-1 h-px bg-neutral-800"></div>
      </div>

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
          {tags.map(tag => (
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
                Showing {filteredPosts.length} of {regularPosts.length} posts
                {selectedTag && <span> tagged with "{selectedTag}"</span>}
                {searchQuery && <span> matching "{searchQuery}"</span>}
              </span>
            ) : (
              <span>{regularPosts.length} posts</span>
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
                        {formatPostDate(post.date)}
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
    </>
  )
}