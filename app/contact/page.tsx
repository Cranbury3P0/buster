const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://busterfrequency.com'

export const metadata = {
  title: 'Contact — The Buster Frequency Project',
  description:
    'Get in touch with Sean Cranbury, Vancouver-based writer and creator of The Buster Frequency Project. Reach out at hello@seancranbury.com.',
  alternates: { canonical: `${siteUrl}/contact` },
  openGraph: {
    title: 'Contact — The Buster Frequency Project',
    description:
      'Reach Sean Cranbury, writer of The Buster Frequency Project, at hello@seancranbury.com.',
    url: `${siteUrl}/contact`,
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Contact — The Buster Frequency Project',
    description: 'Reach Sean Cranbury at hello@seancranbury.com.',
  },
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
            Thank you for visiting The Buster Frequency Project.
          </p>

          <p style={{ margin: 0 }}>
            This site is an ongoing work of fiction where words, images, music, and memory mingle with one another.
          </p>

          <p style={{ margin: 0 }}>
            If you have questions, comments, or simply wish to say hello, please reach out directly at{' '}
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
            You can also follow the project by{' '}
            <a
              href="https://app.cakemail.com/#/public/f/b3aeb54242044fd28c3f8f7b0bf32887bba15f1247bc422f4d93187c1b90cb682ee0915ea107273b41d261fec23634975b52a3054339656c"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'inherit',
                textDecoration: 'none',
                borderBottom: '1px solid var(--border)',
              }}
            >
              joining the mailing list
            </a>
            . Transmissions arrive when they arrive.
          </p>

          <p style={{ margin: 0 }}>
            I appreciate your curiosity.
          </p>

          <p style={{ margin: 0 }}>
            Support artists in your community directly whenever you can. Buy their work. Tell them what it meant to you. And if you&rsquo;re able, make something yourself. People love that stuff and you have it in you.
          </p>

          <p style={{ margin: 0 }}>
            It&rsquo;s one of the few reliable ways to change the world.
          </p>

          <p style={{ margin: 0 }}>
            Your voice and your art are valuable.
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
          <br />
          June 7, 2026
        </p>
      </div>
    </div>
  )
}
