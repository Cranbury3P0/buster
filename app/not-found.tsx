import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page Not Found — The Buster Frequency Project',
  description: 'This transmission could not be located.',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5rem 2rem',
        background: 'var(--bg)',
      }}
    >
      <div style={{ width: '100%', maxWidth: '560px' }}>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.7rem',
            fontWeight: 400,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--dim)',
            margin: '0 0 1.25rem',
          }}
        >
          404
        </p>

        <div style={{ height: '1px', background: 'var(--border)', marginBottom: '2rem' }} />

        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            fontWeight: 400,
            color: 'var(--text)',
            margin: '0 0 1.5rem',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}
        >
          TRANSMISSION NOT FOUND
        </h1>

        <div
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.9rem',
            fontWeight: 400,
            lineHeight: 1.75,
            color: 'var(--secondary)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            marginBottom: '2rem',
          }}
        >
          <p style={{ margin: 0 }}>
            Whatever you were looking for has gone dark. Pulled from the feed. Buried in the alley
            behind the restaurant where Buster spent seven years not thinking about his past.
          </p>
          <p style={{ margin: 0 }}>
            It may have never existed. Or it existed once, and the city swallowed it whole.
          </p>
          <p style={{ margin: 0 }}>
            That&rsquo;s how it goes in a place built on forgetting.
          </p>
        </div>

        <div style={{ height: '1px', background: 'var(--border)', marginBottom: '2rem' }} />

        <Link
          href="/buster/landing"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.9rem',
            fontWeight: 500,
            color: 'var(--text)',
            textDecoration: 'none',
            borderBottom: '1px solid var(--border)',
            paddingBottom: '1px',
          }}
        >
          Return to the project
        </Link>
      </div>
    </div>
  )
}
