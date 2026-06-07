import { posts } from '@/lib/posts'
import { isAuthenticated } from '@/lib/auth'
import ArchiveGrid from '@/components/ArchiveGrid'
import PasswordGate from '@/components/PasswordGate'

interface Props {
  searchParams: Promise<{ error?: string }>
}

export default async function ArchivePage({ searchParams }: Props) {
  const authed = await isAuthenticated()
  const params = await searchParams
  const hasError = params.error === '1'

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>

      <header className="archive-header" style={{ borderBottom: '1px solid var(--border)', padding: '2.5rem 1.5rem 2rem', background: 'var(--bg)', zIndex: 10 }}>
        <style>{`
          .archive-header { position: sticky; top: 0; }
          @media (max-width: 680px) {
            .archive-header { padding: 1.25rem 1.25rem 1rem; }
            .archive-h1 { font-size: clamp(1.6rem, 8vw, 2.25rem) !important; }
            .archive-eyebrow { font-size: 0.7rem !important; }
            .archive-count { font-size: 0.75rem !important; }
          }
        `}</style>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <p
              className="archive-eyebrow"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                fontWeight: 400,
                color: 'var(--text)',
                margin: 0,
                lineHeight: 1.3,
              }}
            >
              ORIGINAL ARCHIVE: DEMOS AND OUTTAKES 2017 – 2025
            </p>

            <h1
              className="archive-h1"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 4.2vw, 3.25rem)',
                fontWeight: 400,
                color: 'var(--text)',
                margin: 0,
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
              }}
            >
              BUSTER FREQUENCY PROJECT
            </h1>

            <p
              className="archive-count"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.025rem',
                fontWeight: 400,
                color: 'var(--dim)',
                margin: 0,
                lineHeight: 1,
              }}
            >
              A man with no future reclaims his past through art and violence.
            </p>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '4.5rem 1.5rem 7rem' }}>
        <ArchiveGrid posts={posts} />
      </main>

      <footer style={{ borderTop: '1px solid var(--border)', padding: '1.75rem 1.5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8rem',
              color: 'var(--faint)',
            }}
          >
            Private archive — not for public distribution
          </p>
        </div>
      </footer>

      {!authed && <PasswordGate error={hasError} />}

    </div>
  )
}
