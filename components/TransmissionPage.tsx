import Image from 'next/image'
import type { Post } from '@/lib/types'
import CaptionBlock from './CaptionBlock'
import PostNavigation from './PostNavigation'

interface Props {
  post: Post
  prev: Post | null
  next: Post | null
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

const GRAIN_SVG = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='300' height='300' filter='url(%23n)'/></svg>`

export default function TransmissionPage({ post, prev, next }: Props) {
  return (
    <article style={{ maxWidth: '760px', margin: '0 auto', padding: '4rem 1.5rem 6rem' }}>

      {/* Record header */}
      <header
        style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          marginBottom: '2rem',
          gap: '1rem',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.875rem',
            color: 'var(--dim)',
          }}
        >
          Transmission {post.postNumber}
        </span>
        <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.875rem',
            color: 'var(--dim)',
          }}
        >
          {post.dateUtc.slice(0, 10)}
        </span>
      </header>

      {/* Mounted object */}
      <div
        style={{
          background: 'var(--mount)',
          padding: '24px',
          border: '1px solid var(--mount-border)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.07)',
          marginBottom: '3.5rem',
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
          <Image
            src={post.imagePath}
            alt={`Transmission ${post.postNumber}`}
            fill
            priority
            sizes="(max-width: 760px) 100vw, 760px"
            style={{
              objectFit: 'contain',
              filter: 'saturate(0.92) contrast(1.01)',
            }}
          />
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url("${GRAIN_SVG}")`,
              backgroundRepeat: 'repeat',
              backgroundSize: '300px 300px',
              opacity: 0.022,
              mixBlendMode: 'multiply',
              pointerEvents: 'none',
            }}
          />
        </div>
      </div>

      {/* Full text */}
      <CaptionBlock caption={post.caption} />

      {/* Catalog record */}
      <div
        style={{
          marginTop: '3rem',
          paddingTop: '1.75rem',
          borderTop: '1px solid var(--border)',
          fontFamily: 'var(--font-body)',
          fontSize: '0.875rem',
          lineHeight: 1.8,
          color: 'var(--dim)',
        }}
      >
        <div>{post.postNumber} — {formatDate(post.dateUtc)}</div>
        {post.imageCredit && <div>Image: {post.imageCredit}</div>}
        <div style={{ marginTop: '0.25rem' }}>
          <a
            href={post.postUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--faint)',
              textDecoration: 'none',
              borderBottom: '1px solid var(--border)',
            }}
          >
            instagram ↗
          </a>
        </div>
      </div>

      <div style={{ marginTop: '4rem' }}>
        <PostNavigation prev={prev} next={next} />
      </div>

    </article>
  )
}
