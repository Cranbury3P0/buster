export const metadata = {
  title: 'Contact — The Buster Frequency Project',
  robots: { index: false, follow: false },
}

export default function ContactPage() {
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
          Contact
        </p>

        <div style={{ height: '1px', background: 'var(--border)', marginBottom: '2rem' }} />

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
          }}
        >
          <p style={{ margin: 0 }}>
            Thank you for visiting the Buster Frequency Project site.
          </p>

          <p style={{ margin: 0 }}>
            It is an ongoing creative scenario where words, images, and music comingle.
          </p>

          <p style={{ margin: 0 }}>
            If you have questions then please reach out to me directly at{' '}
            <a
              href="mailto:hello@seancranbury.com"
              style={{
                color: 'inherit',
                textDecoration: 'none',
                borderBottom: '1px solid var(--border)',
              }}
            >
              hello@seancranbury.com
            </a>
            .
          </p>

          <p style={{ margin: 0 }}>
            I appreciate your curiosity and your thoughts.
          </p>

          <p style={{ margin: 0 }}>
            Support artists directly if you can. Buy their work, send them a message about what it means to you, and if you can create something yourself.
          </p>

          <p style={{ margin: 0 }}>
            It&rsquo;s the best way to affect change in the world.
          </p>

          <p style={{ margin: 0 }}>
            Your voice and your art is valuable.
          </p>

          <p style={{ margin: 0 }}>
            Don&rsquo;t let the bastards grind you down.
          </p>
        </div>

        <div style={{ height: '1px', background: 'var(--border)', margin: '2rem 0' }} />

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.9rem',
            fontWeight: 400,
            lineHeight: 1.65,
            color: 'var(--text)',
            margin: 0,
          }}
        >
          Sean Cranbury
          <br />
          June 7, 2026
        </p>
      </div>
    </div>
  )
}
