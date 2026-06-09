import Link from 'next/link'

const MAILING_LIST_URL =
  'https://app.cakemail.com/#/public/f/b3aeb54242044fd28c3f8f7b0bf32887bba15f1247bc422f4d93187c1b90cb682ee0915ea107273b41d261fec23634975b52a3054339656c'

// System-font fallback for specialized phonetic / Indigenous-language characters.
const nativeFontStyle: React.CSSProperties = {
  fontFamily:
    '"Segoe UI", "Noto Sans", "DejaVu Sans", "Arial Unicode MS", system-ui, sans-serif',
}

const linkStyle: React.CSSProperties = {
  color: 'var(--text)',
  textDecoration: 'none',
  borderBottom: '1px solid var(--border)',
}

const dimLinkStyle: React.CSSProperties = {
  ...linkStyle,
  color: 'inherit',
}

export default function SiteFooter() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: '2rem 1.5rem',
        marginTop: 'auto',
      }}
    >
      <div
        style={{
          maxWidth: '860px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.65rem',
        }}
      >
        {/* Mailing list */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.8rem',
            fontWeight: 400,
            color: 'var(--dim)',
            margin: 0,
            lineHeight: 1.5,
          }}
        >
          Follow the transmissions —{' '}
          <a
            href={MAILING_LIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            join the mailing list
          </a>
          .
        </p>

        {/* Acknowledgement snippet */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            fontWeight: 400,
            color: 'var(--faint)',
            margin: 0,
            lineHeight: 1.6,
          }}
        >
          This project was made on the unceded territories of the{' '}
          <span style={nativeFontStyle}>xʷməθkʷəy̓əm</span> (Musqueam),{' '}
          <span style={nativeFontStyle}>Sḵwx̱wú7mesh</span> (Squamish), and{' '}
          <span style={nativeFontStyle}>səlilwətaɬ</span> (Tsleil-Waututh) Nations. Its stories live in
          Chinatown, Powell Street (Paueru Gai), and the Downtown Eastside.{' '}
          <Link href="/acknowledgement" style={dimLinkStyle}>
            Read the full acknowledgement →
          </Link>
        </p>

        {/* Byline */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            fontWeight: 400,
            color: 'var(--faint)',
            margin: 0,
          }}
        >
          The Buster Frequency Project — Sean Cranbury, Vancouver
        </p>
      </div>
    </footer>
  )
}
