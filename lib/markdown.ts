import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { parsePostDate, getSortableDate, isValidDateString } from './dates'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  tags?: string[]
  readingTime?: number
  parsedDate?: Date // Add parsed date for consistent handling
}

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace(/\.md$/, ''))
}

export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = path.join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const time = readingTime(content)
  
  // Validate and parse the date
  const dateString = data.date || ''
  const validDate = isValidDateString(dateString) ? dateString : new Date().toISOString().split('T')[0]
  
  return {
    slug: realSlug,
    title: data.title || '',
    date: validDate,
    excerpt: data.excerpt || '',
    content,
    tags: data.tags || [],
    readingTime: Math.ceil(time.minutes),
    parsedDate: parsePostDate(validDate),
  }
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs()
  const posts = slugs
    .map(slug => getPostBySlug(slug))
    .sort((post1, post2) => {
      // Use the centralized date parsing for consistent sorting
      const date1 = getSortableDate(post1.date)
      const date2 = getSortableDate(post2.date)
      return date2 - date1 // Sort newest first
    })
  return posts
}

export function getPostsByTag(tag: string): Post[] {
  return getAllPosts().filter(post => post.tags?.includes(tag))
}

export function getAllTags(): string[] {
  const tags = new Set<string>()
  getAllPosts().forEach(post => {
    post.tags?.forEach(tag => tags.add(tag))
  })
  return Array.from(tags).sort()
}

export function searchPosts(query: string): Post[] {
  const lowercaseQuery = query.toLowerCase()
  return getAllPosts().filter(post => 
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.content.toLowerCase().includes(lowercaseQuery) ||
    post.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  )
}