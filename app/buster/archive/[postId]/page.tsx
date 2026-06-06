import { notFound, redirect } from 'next/navigation'
import { isAuthenticated } from '@/lib/auth'
import { getPost, getAdjacentPosts, posts } from '@/lib/posts'
import TransmissionPage from '@/components/TransmissionPage'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ postId: string }>
}

export async function generateStaticParams() {
  return posts.map((p) => ({ postId: p.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { postId } = await params
  const post = getPost(postId)
  if (!post) return {}
  const excerpt = post.caption.split(/\n\n+/)[0].slice(0, 120).replace(/\s+\S*$/, '') + '…'
  return {
    title: `${post.postNumber} — The Buster Frequency`,
    description: excerpt,
  }
}

export default async function PostPage({ params }: Props) {
  const authed = await isAuthenticated()
  if (!authed) {
    redirect('/buster')
  }

  const { postId } = await params
  const post = getPost(postId)
  if (!post) notFound()

  const { prev, next } = getAdjacentPosts(postId)

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <TransmissionPage post={post} prev={prev} next={next} />
    </div>
  )
}
