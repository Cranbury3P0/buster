const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://busterfrequency.com'

export const metadata = {
  title: 'About — The Buster Frequency Project',
  description:
    'About The Buster Frequency Project — the origin story of Buster Frequency, a bass player and loner from the East Vancouver music scene, and the Vancouver noir fiction written by Sean Cranbury since 2017.',
  alternates: { canonical: `${siteUrl}/about` },
  openGraph: {
    title: 'About — The Buster Frequency Project',
    description:
      'Buster Frequency: bass player, loner, misanthrope. A man with no future reclaiming his past through art and violence. A fiction by Sean Cranbury rooted in East Vancouver.',
    url: `${siteUrl}/about`,
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'About — The Buster Frequency Project',
    description:
      'The origin story of Buster Frequency and the Vancouver noir fiction by Sean Cranbury.',
  },
}

export default function AboutPage() {
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
          About
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
            The Buster Frequency Project started in the spring of 2017.
          </p>

          <p style={{ margin: 0 }}>
            I was looking for a place to put the things that interested me most at the time: writing, music, and the never-so-strange habit of spending hours staring into the lives of strangers online.
          </p>

          <p style={{ margin: 0 }}>
            Buster himself arrived sometime in late 2016 as a half-formed presence emerging from the smoking memories of the East Vancouver music scene of the early 2000s.
          </p>

          <p style={{ margin: 0 }}>
            He was a bass player, a loner, a misanthrope.
          </p>

          <p style={{ margin: 0 }}>
            Analog tools. Honoured imperfections. Late-night calls to the bootlegger.
          </p>

          <p style={{ margin: 0 }}>
            He had a band called The Chemical Spray. A four-piece that blended the pop immediacy of Elastica with the sonic explorations of Mogwai. They played the underground venues of the day, from the Silvertone Tavern to Miss T&rsquo;s to 1067.
          </p>

          <p style={{ margin: 0 }}>
            The band came to a tragic and unexpected end.
          </p>

          <p style={{ margin: 0 }}>
            Buster receded from view. Took jobs working for people who paid in cash and didn&rsquo;t ask questions.
          </p>

          <p style={{ margin: 0 }}>
            For many years he was able to ignore the rattling in his head. The persistence of memories pushing to be seen, enumerated, acted upon.
          </p>

          <p style={{ margin: 0 }}>
            Only recently have they begun to get through.
          </p>

          <p style={{ margin: 0 }}>
            The only way he can control them is by summoning them through art. Through images and experiences that call back to those days in East Vancouver. To people and places long gone.
          </p>

          <p style={{ margin: 0 }}>
            He is trying to assemble the pieces of his confusion. To see clearly the path that lies ahead.
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
          It is a path of blood and revenge against the very people who run the city that he calls home.
        </p>
      </div>
    </div>
  )
}
