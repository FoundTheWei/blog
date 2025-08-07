/**
 * Centralized date handling utilities to ensure consistent date parsing and formatting
 * across the entire blog. This prevents timezone-related inconsistencies.
 */

/**
 * Parse a date string from frontmatter into a Date object
 * Ensures consistent parsing regardless of timezone
 * @param dateString - Date string in YYYY-MM-DD format
 * @returns Date object
 */
export function parsePostDate(dateString: string): Date {
  // Parse as UTC to avoid timezone issues
  // Add time component to ensure consistent parsing
  const [year, month, day] = dateString.split('-').map(Number)
  // Month is 0-indexed in JavaScript Date
  return new Date(Date.UTC(year, month - 1, day, 12, 0, 0))
}

/**
 * Format a date for display on the blog
 * @param date - Date object or date string
 * @returns Formatted date string
 */
export function formatPostDate(date: Date | string): string {
  const dateObj = typeof date === 'string' ? parsePostDate(date) : date
  
  return dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: 'UTC' // Use UTC to match parsing
  })
}

/**
 * Get a sortable date value for comparing posts
 * @param dateString - Date string in YYYY-MM-DD format
 * @returns Sortable timestamp
 */
export function getSortableDate(dateString: string): number {
  return parsePostDate(dateString).getTime()
}

/**
 * Validate date string format
 * @param dateString - Date string to validate
 * @returns Boolean indicating if date is valid
 */
export function isValidDateString(dateString: string): boolean {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/
  if (!dateRegex.test(dateString)) return false
  
  const date = parsePostDate(dateString)
  return !isNaN(date.getTime())
}