export const metadata = {
  title: 'Image Credits & Attribution — The Buster Frequency Project',
  robots: { index: false, follow: false },
}

export default function AttributionPage() {
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
      <div
        style={{
          width: '100%',
          maxWidth: '560px',
        }}
      >
        {/* Gallery card label — small caps heading */}
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
          Image Credits &amp; Attribution
        </p>

        {/* Hairline rule */}
        <div style={{ height: '1px', background: 'var(--border)', marginBottom: '2rem' }} />

        {/* Body copy */}
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
            The Buster Frequency Project incorporates visual material gathered from artists, photographers, sculptors, designers, archives, publications, and other cultural sources encountered during the writing and development of the work.
          </p>

          <p style={{ margin: 0 }}>
            Part of the conceit of the project is that its protagonist, Buster Frequency, uses Instagram as a kind of trawling mechanism to recover a life he can no longer fully remember.
          </p>

          <p style={{ margin: 0 }}>
            Certain memories return only when he encounters works of art capable of disturbing the surface of the present. An image, a painting, a photograph, a fragment of design emerge and instinctively inspire the text. These become catalysts. They trigger recollections and stories.
          </p>

          <p style={{ margin: 0 }}>
            The texts that accompany these images are responses to them. They are attempts to understand why certain works lodge themselves in memory and refuse to leave. In many cases the visual artwork came first and the writing followed.
          </p>

          <p style={{ margin: 0 }}>
            This project would not exist without the artists whose work appears throughout it. One of its aims is to demonstrate how deeply literature remains indebted to the visual arts, music, photography, film, and design as sources of inspiration.
          </p>

          <p style={{ margin: 0 }}>
            Whenever possible, creators are identified and credited. Links are provided directly to their websites, portfolios, publications, or social media accounts.
          </p>

          <p style={{ margin: 0 }}>
            The purpose of these images is not commercial reproduction but cultural reference, appreciation, criticism, documentation, and inspiration. All rights remain with their respective creators.
          </p>

          <p style={{ margin: 0 }}>
            If you are the creator of an image appearing on this site and would like additional credit, correction of attribution, or removal of a work, please get in touch and it will be addressed promptly.
          </p>
        </div>

        {/* Hairline rule */}
        <div style={{ height: '1px', background: 'var(--border)', margin: '2rem 0' }} />

        {/* Closing line — slightly more weight */}
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
          Support the artists. Visit their pages. Buy their books, records, prints, tickets, and artwork. Their work made this project possible.
        </p>

      </div>
    </div>
  )
}
