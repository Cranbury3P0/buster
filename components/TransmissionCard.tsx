import Link from 'next/link'
import type { Post } from '@/lib/types'
import ArchivalImage from './ArchivalImage'

interface Props {
  post: Post
}

function formatDate(iso: string): string {
  const d = new Date(iso)
  return d.toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

function getExcerpt(caption: string): string {
  const first = caption.split(/\n\n+/)[0].trim()
  const words = first.split(/\s+/)
  if (words.length <= 52) return first
  return words.slice(0, 50).join(' ') + '…'
}

export default function TransmissionCard({ post }: Props) {
  return (
    <Link
      href={`/buster/archive/${post.id}`}
      style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
    >
      <article>

        {/* Mounted object */}
        <div
          style={{
            background: 'var(--mount)',
            padding: '20px',
            border: '1px solid var(--mount-border)',
            boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '4 / 5',
              overflow: 'hidden',
              background: 'var(--mount)',
            }}
          >
            <ArchivalImage
              src={post.imagePath}
              alt={`Transmission ${post.postNumber}`}
              sizes="(max-width: 720px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Text plate */}
        <div style={{ paddingTop: '1.25rem' }}>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.925rem',
              fontWeight: 400,
              lineHeight: 1.8,
              color: 'var(--text)',
              margin: '0 0 1.1rem',
            }}
          >
            {getExcerpt(post.caption)}
          </p>

          {/* Catalog line */}
          <div
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8rem',
              lineHeight: 1.7,
              color: 'var(--dim)',
            }}
          >
            <div>{post.postNumber} — {formatDate(post.dateUtc)}</div>
            {post.imageCredit && <div>Image: {post.imageCredit}</div>}
          </div>

        </div>
      </article>
    </Link>
  )
}
