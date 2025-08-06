"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { GitCommit, Clock, ExternalLink, Bot } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Commit {
  sha: string
  commit: {
    message: string
    author: {
      name: string
      date: string
    }
  }
  html_url: string
  author?: {
    login: string
    avatar_url: string
  }
}

export default function CommitsPage() {
  const [commits, setCommits] = useState<Commit[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch("/api/commits")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch commits")
        return res.json()
      })
      .then(data => {
        setCommits(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60)
    
    if (diffInHours < 24) {
      if (diffInHours < 1) {
        const diffInMinutes = Math.floor(diffInHours * 60)
        return `${diffInMinutes} minute${diffInMinutes !== 1 ? 's' : ''} ago`
      }
      const hours = Math.floor(diffInHours)
      return `${hours} hour${hours !== 1 ? 's' : ''} ago`
    } else if (diffInHours < 168) { // Less than a week
      const days = Math.floor(diffInHours / 24)
      return `${days} day${days !== 1 ? 's' : ''} ago`
    } else {
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: date.getFullYear() !== now.getFullYear() ? "numeric" : undefined
      })
    }
  }

  const parseCommitMessage = (message: string) => {
    const lines = message.split('\n')
    const title = lines[0]
    const body = lines.slice(1).join('\n').trim()
    const isClaude = message.includes("🤖 Generated with") || message.includes("Claude Code")
    return { title, body, isClaude }
  }

  return (
    <main className="pt-24 sm:pt-32 pb-16 sm:pb-24">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight tracking-tighter mb-4 flex items-center gap-3">
            <GitCommit className="w-10 h-10 sm:w-12 sm:h-12 text-lime-500" />
            Commits
          </h1>
          <p className="text-muted-foreground text-lg">
            Every change to this blog, crafted with Claude Code. Watch the evolution in real-time.
          </p>
          <div className="mt-4 flex items-center gap-4">
            <Badge variant="outline" className="gap-1">
              <Bot className="w-3 h-3" />
              Powered by Claude Code
            </Badge>
            <Link 
              href="https://github.com/FoundTheWei/blog" 
              target="_blank"
              className="text-sm text-muted-foreground hover:text-lime-500 transition-colors flex items-center gap-1"
            >
              View on GitHub
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Commits List */}
        {loading ? (
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="border border-border rounded-lg p-6 animate-pulse">
                <div className="h-4 bg-neutral-800 rounded w-3/4 mb-3"></div>
                <div className="h-3 bg-neutral-800 rounded w-1/4"></div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Failed to load commits: {error}</p>
          </div>
        ) : (
          <div className="space-y-4">
            {commits.map((commit, index) => {
              const { title, body, isClaude } = parseCommitMessage(commit.commit.message)
              const isClaudeAuthor = commit.commit.author.name === "claude" || 
                                    commit.author?.login === "claude" ||
                                    isClaude
              
              return (
                <Link
                  key={commit.sha}
                  href={commit.html_url}
                  target="_blank"
                  className="block group"
                >
                  <div className="border border-border rounded-lg p-6 hover:border-lime-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-lime-500/10">
                    {/* Commit Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl font-mono text-neutral-600">
                          {String(commits.length - index).padStart(3, '0')}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg group-hover:text-lime-500 transition-colors line-clamp-1">
                            {title}
                          </h3>
                          <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                            <span className="font-mono text-xs">
                              {commit.sha.substring(0, 7)}
                            </span>
                            <span>·</span>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {formatDate(commit.commit.author.date)}
                            </div>
                            {isClaudeAuthor && (
                              <>
                                <span>·</span>
                                <Badge variant="secondary" className="text-xs gap-1">
                                  <Bot className="w-3 h-3" />
                                  Claude
                                </Badge>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* Commit Body Preview */}
                    {body && (
                      <div className="mt-4 text-sm text-muted-foreground">
                        <pre className="whitespace-pre-wrap font-sans line-clamp-3">
                          {body.split('🤖')[0].trim()}
                        </pre>
                        {isClaude && (
                          <div className="mt-3 flex items-center gap-2 text-xs">
                            <Bot className="w-3 h-3 text-lime-500" />
                            <span className="text-lime-500">Generated with Claude Code</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </Link>
              )
            })}
          </div>
        )}

        {/* View More */}
        {!loading && !error && commits.length >= 30 && (
          <div className="mt-8 text-center">
            <Link
              href="https://github.com/FoundTheWei/blog/commits/main"
              target="_blank"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-lime-500 transition-colors"
            >
              View all commits on GitHub
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </main>
  )
}