import { isAuthenticated } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { posts } from '@/lib/posts'
import ArchiveGrid from '@/components/ArchiveGrid'
import { logout } from '@/app/actions/auth'

export default async function ArchivePage() {
  const authed = await isAuthenticated()
  if (!authed) redirect('/buster')

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>

      <header className="archive-header" style={{ borderBottom: '1px solid var(--border)', padding: '2.5rem 1.5rem 2rem', background: 'var(--bg)', zIndex: 10 }}>
        <style>{`
          @media (min-width: 681px) {
            .archive-header { position: sticky; top: 0; }
          }
          @media (max-width: 680px) {
            .archive-header { padding: 1.25rem 1.25rem 1rem; }
            .archive-h1 { font-size: clamp(1.6rem, 8vw, 2.25rem) !important; }
            .archive-eyebrow { font-size: 0.7rem !important; }
            .archive-count { font-size: 0.75rem !important; }
            .archive-close { display: none !important; }
          }
        `}</style>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          {/* Close session — desktop only */}
          <div className="archive-close" style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1.5rem' }}>
            <form action={logout}>
              <button
                type="submit"
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--faint)',
                  padding: 0,
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                }}
              >
                Close session
              </button>
            </form>
          </div>

          {/* Title block */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <p
              className="archive-eyebrow"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                fontWeight: 300,
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
                fontSize: 'clamp(2.25rem, 5.5vw, 4rem)',
                fontWeight: 400,
                color: 'var(--text)',
                margin: 0,
                lineHeight: 1,
                letterSpacing: '-0.02em',
              }}
            >
              BUSTER FREQUENCY PROJECT
            </h1>

            <p
              className="archive-count"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                fontWeight: 300,
                color: 'var(--dim)',
                margin: 0,
                lineHeight: 1,
              }}
            >
              {posts.length} Transmissions
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

    </div>
  )
}
