import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await fetch(
      'https://api.github.com/repos/FoundTheWei/blog/commits?per_page=30',
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        },
        next: { revalidate: 300 } // Cache for 5 minutes
      }
    )
    
    if (!response.ok) {
      throw new Error(`GitHub API responded with ${response.status}`)
    }
    
    const commits = await response.json()
    return NextResponse.json(commits)
  } catch (error) {
    console.error('Failed to fetch commits:', error)
    return NextResponse.json(
      { error: 'Failed to fetch commits' },
      { status: 500 }
    )
  }
}