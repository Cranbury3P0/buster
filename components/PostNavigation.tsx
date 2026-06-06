import Link from 'next/link'
import type { Post } from '@/lib/types'

interface Props {
  prev: Post | null
  next: Post | null
}

export default function PostNavigation({ prev, next }: Props) {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '2rem',
        borderTop: '1px solid var(--border)',
        gap: '1rem',
      }}
    >
      <div style={{ flex: 1 }}>
        {prev && (
          <Link
            href={`/buster/archive/${prev.id}`}
            style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', textDecoration: 'none', color: 'inherit' }}
          >
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--dim)' }}>
              ← Earlier
            </span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--secondary)' }}>
              {prev.postNumber}
            </span>
          </Link>
        )}
      </div>

      <Link
        href="/buster/archive"
        style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--dim)', textDecoration: 'none' }}
      >
        Archive
      </Link>

      <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
        {next && (
          <Link
            href={`/buster/archive/${next.id}`}
            style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', alignItems: 'flex-end', textDecoration: 'none', color: 'inherit' }}
          >
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--dim)' }}>
              Later →
            </span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--secondary)' }}>
              {next.postNumber}
            </span>
          </Link>
        )}
      </div>
    </nav>
  )
}
