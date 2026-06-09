import Image from 'next/image'
import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://busterfrequency.com'

export const metadata: Metadata = {
  title: 'The Buster Frequency Project — A Vancouver Noir Fiction by Sean Cranbury',
  description:
    'Enter the Buster Frequency Project — a Vancouver noir fiction by Sean Cranbury. The story of a man with no future reclaiming his past through art and violence. 148 image-caption transmissions, 2017–2025.',
  alternates: {
    canonical: `${siteUrl}/buster/landing`,
  },
  openGraph: {
    title: 'The Buster Frequency Project — A Vancouver Noir Fiction by Sean Cranbury',
    description:
      'A man with no future reclaiming his past through art and violence. Vancouver noir fiction by Sean Cranbury, told through image and text, 2017–2025.',
    url: `${siteUrl}/buster/landing`,
    type: 'website',
    images: [
      {
        url: '/IDRIS_KHAN_ROLAND_BARTHES.png',
        width: 1704,
        height: 1382,
        alt: 'Idris Khan, Every page of Roland Barthes Camera Lucida — opening image for The Buster Frequency Project',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Buster Frequency Project — Vancouver Noir Fiction',
    description:
      'A man with no future reclaiming his past through art and violence. A fiction by Sean Cranbury, Vancouver.',
    images: ['/IDRIS_KHAN_ROLAND_BARTHES.png'],
  },
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${siteUrl}/buster/landing#webpage`,
  url: `${siteUrl}/buster/landing`,
  name: 'The Buster Frequency Project — A Vancouver Noir Fiction by Sean Cranbury',
  description:
    'Entry point to The Buster Frequency Project — a long-form Vancouver noir fiction by Sean Cranbury. The fictional character Buster Frequency: bass player, loner, misanthrope from the East Vancouver music scene, on a path of art and vengeance.',
  isPartOf: { '@id': `${siteUrl}/#website` },
  about: { '@id': `${siteUrl}/#creativeWork` },
  author: { '@id': `${siteUrl}/#person` },
  inLanguage: 'en-CA',
}

export default function LandingPage() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* Header */}
      <header style={{ borderBottom: '1px solid var(--border)', padding: '2.5rem 1.5rem 2rem' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                fontWeight: 400,
                color: 'var(--dim)',
                margin: 0,
                lineHeight: 1.3,
              }}
            >
              A fiction project by Sean Cranbury
            </p>
            <h1
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
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                fontWeight: 400,
                color: 'var(--secondary)',
                margin: 0,
                lineHeight: 1.4,
              }}
            >
              The story of a man with no future reclaiming his past through art and violence.
            </p>
          </div>
        </div>
      </header>

      {/* Main */}
      <main style={{ maxWidth: '860px', margin: '0 auto', padding: '2.5rem 1.5rem 7rem' }}>

        {/* Image block */}
        <figure style={{ margin: 0 }}>
          <div
            style={{
              width: '100%',
              position: 'relative',
              aspectRatio: '1704 / 1382',
            }}
          >
            <Image
              src="/IDRIS_KHAN_ROLAND_BARTHES.png"
              alt="Idris Khan, Every page of Roland Barthes Camera Lucida, 2004"
              fill
              style={{ objectFit: 'contain', objectPosition: 'left top' }}
              priority
              sizes="(max-width: 860px) 100vw, 860px"
            />
          </div>

          {/* Caption */}
          <figcaption
            style={{
              marginTop: '0.9rem',
              fontFamily: 'var(--font-body)',
              fontSize: '0.8rem',
              fontWeight: 400,
              color: 'var(--dim)',
              lineHeight: 1.5,
            }}
          >
            <a
              href="https://www.instagram.com/idriskhan_studio/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'inherit',
                textDecoration: 'none',
                borderBottom: '1px solid var(--border)',
              }}
            >
              Idris Khan
            </a>
            , <em>Every page of Roland Barthes Camera Lucida</em>, 2004.
          </figcaption>
        </figure>

        {/* Entry text */}
        <div style={{ marginTop: '2.5rem', maxWidth: '720px', margin: '2.5rem auto 0' }}>

          <div style={{ height: '1px', background: 'var(--border)', marginBottom: '2rem' }} />

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1rem, 2.5vw, 1.35rem)',
              fontWeight: 400,
              color: 'var(--text)',
              margin: '0 0 2rem',
              lineHeight: 1.3,
              letterSpacing: '-0.01em',
            }}
          >
            Before entry, please confirm that you understand and agree to the following Waiver of Expectations.
          </h2>

          <div
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.025rem',
              fontWeight: 400,
              fontStyle: 'italic',
              lineHeight: 1.75,
              color: 'var(--text)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            <p style={{ margin: 0 }}>
              I understand that the area that I am about to enter is a work of fiction.
            </p>
            <p style={{ margin: 0 }}>
              It is the story of a man with no future reclaiming his past through art and violence.
            </p>
            <p style={{ margin: 0 }}>
              I confirm that the city depicted in the pages and screens that follow is illuminated by the light that I remember it by. Too bright for comfort in the morning; too sallow in the afternoon.
            </p>
            <p style={{ margin: 0 }}>
              It&rsquo;s a city where people crawl all over each other to live.
            </p>
            <p style={{ margin: 0 }}>
              A city of imperious glass towers and sewers choked with refuse. Of abandoned psychiatric hospitals sitting dark, their doors chained shut, while the alleys fill with shivering ghosts.
            </p>
            <p style={{ margin: 0 }}>
              Maseratis and volleyball beaches and cruise ships bigger than the town I grew up in.
            </p>
            <p style={{ margin: 0 }}>
              It&rsquo;s beautiful. People love it.
            </p>
            <p style={{ margin: 0 }}>
              The stars wink out behind the seaplanes as they glide into the bay at dusk.
            </p>
          </div>

          <div style={{ height: '1px', background: 'var(--border)', margin: '2.5rem 0' }} />

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9rem',
              fontWeight: 400,
              lineHeight: 1.75,
              color: 'var(--secondary)',
              margin: '0 0 2rem',
            }}
          >
            Follow the project by{' '}
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
            .
          </p>

          <div
            style={{
              border: '1px solid var(--border)',
              borderRadius: '4px',
              padding: '1.5rem 1.75rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'calc(0.85rem + 2px)',
                fontWeight: 400,
                fontStyle: 'italic',
                lineHeight: 1.7,
                color: 'var(--dim)',
                margin: 0,
              }}
            >
              The innards of the site are not yet assembled in a way that befits an audience. In the meantime, please check out the scaffolding and the protective tarps riffling in the wind.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'calc(0.85rem + 2px)',
                fontWeight: 400,
                fontStyle: 'italic',
                lineHeight: 1.7,
                color: 'var(--dim)',
                margin: 0,
              }}
            >
              Please return later.
            </p>
          </div>

        </div>

      </main>

    </div>
  )
}
