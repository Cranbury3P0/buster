import Image from 'next/image'
import type { Metadata } from 'next'
import WaiverCheckbox from '@/components/WaiverCheckbox'

export const metadata: Metadata = {
  title: 'The Buster Frequency Project',
  description: 'A private archive of original demos and outtakes, 2017–2025.',
  robots: { index: false, follow: false },
}

export default function LandingPage() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>

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
                fontSize: 'clamp(1.6rem, 4.2vw, 3.25rem)',
                fontWeight: 400,
                color: 'var(--text)',
                margin: 0,
                lineHeight: 1,
                letterSpacing: '-0.02em',
                whiteSpace: 'nowrap',
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
              A man with no future reclaiming his past through art and violence.
            </p>
          </div>
        </div>
      </header>

      {/* Main */}
      <main style={{ maxWidth: '860px', margin: '0 auto', padding: '5rem 1.5rem 7rem' }}>

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
        <div style={{ marginTop: '5rem', maxWidth: '560px' }}>

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
              It is a story of a man with no future reclaiming his past through art and violence. It is set in a city that is parallel in time to the one that you are living in now but the rhythm is slightly off. It&rsquo;s out of sequence, blurring, tipping off the edge of the coffee table.
            </p>
            <p style={{ margin: 0 }}>
              The city is illuminated by the light that you remember it by. Too bright for comfort in the morning; too sallow in the afternoon.
            </p>
            <p style={{ margin: 0 }}>
              It&rsquo;s a city where people crawl all over each other to live.
            </p>
            <p style={{ margin: 0 }}>
              A city of imperious glass towers and sewers choked with refuse. Of abandoned psychiatric hospitals sitting dark, the doors chained, while the alleys fill with shivering ghosts.
            </p>
            <p style={{ margin: 0 }}>
              A city of Maseratis and volleyball beaches and cruise ships bigger than the town you grew up in.
            </p>
            <p style={{ margin: 0 }}>
              It&rsquo;s beautiful. People love it.
            </p>
            <p style={{ margin: 0 }}>
              The stars wink out behind the seaplanes as they glide into the bay at dusk.
            </p>
          </div>

          <div style={{ height: '1px', background: 'var(--border)', margin: '2.5rem 0' }} />

          <WaiverCheckbox />

        </div>

      </main>

    </div>
  )
}
