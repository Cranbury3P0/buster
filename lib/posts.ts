import type { Post } from './types'
import postsData from './posts.json'

export const posts: Post[] = postsData as Post[]

export function getPost(id: string): Post | undefined {
  return posts.find((p) => p.id === id)
}

export function getAdjacentPosts(id: string): { prev: Post | null; next: Post | null } {
  const idx = posts.findIndex((p) => p.id === id)
  return {
    prev: idx > 0 ? posts[idx - 1] : null,
    next: idx < posts.length - 1 ? posts[idx + 1] : null,
  }
}

export function searchPosts(query: string): Post[] {
  const q = query.toLowerCase().trim()
  if (!q) return posts
  return posts.filter(
    (p) =>
      p.postNumber.includes(q) ||
      p.caption.toLowerCase().includes(q) ||
      (p.imageCredit || '').toLowerCase().includes(q) ||
      p.dateUtc.slice(0, 10).includes(q)
  )
}
