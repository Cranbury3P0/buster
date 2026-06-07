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
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.9rem',
            fontWeight: 400,
            lineHeight: 1.75,
            color: 'var(--secondary)',
            margin: 0,
          }}
        >
          Coming soon.
        </p>
      </div>
    </div>
  )
}
