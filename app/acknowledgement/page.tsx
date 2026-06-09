const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://busterfrequency.com'

export const metadata = {
  title: 'Land and Place Acknowledgement — The Buster Frequency Project',
  description:
    'The Buster Frequency Project takes place on the unceded territories of the xʷməθkʷəy̓əm (Musqueam), Sḵwx̱wú7mesh Úxwumixw (Squamish Nation), and səlilwətaɬ (Tsleil-Waututh Nation).',
  alternates: { canonical: `${siteUrl}/acknowledgement` },
  openGraph: {
    title: 'Land and Place Acknowledgement — The Buster Frequency Project',
    description:
      'On the unceded territories of the Musqueam, Squamish, and Tsleil-Waututh Nations, and the histories carried by Chinatown, Powell Street, and the Downtown Eastside.',
    url: `${siteUrl}/acknowledgement`,
    type: 'website',
  },
}

// Shared style for Sources section headings (h3 — sub-sections within the h2).
const sectionHeadingStyle: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: 'clamp(0.85rem, 2vw, 1rem)',
  fontWeight: 400,
  color: 'var(--text)',
  margin: 0,
  lineHeight: 1.2,
  letterSpacing: '-0.01em',
}

// System-font fallback for spans containing specialized phonetic / Indigenous-language
// characters that display fonts (Archivo Black, Radio Canada) may not cover.
const nativeFontStyle: React.CSSProperties = {
  fontFamily:
    '"Segoe UI", "Noto Sans", "DejaVu Sans", "Arial Unicode MS", system-ui, sans-serif',
}

export default function AcknowledgementPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '5rem 2rem 7rem',
        background: 'var(--bg)',
      }}
    >
      <div style={{ width: '100%', maxWidth: '560px' }}>

        {/* Eyebrow */}
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
          Acknowledgement
        </p>

        <div style={{ height: '1px', background: 'var(--border)', marginBottom: '2rem' }} />

        {/* H1 */}
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.4rem, 4vw, 2rem)',
            fontWeight: 400,
            color: 'var(--text)',
            margin: '0 0 2rem',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
          }}
        >
          Land and Place Acknowledgement
        </h1>

        {/* Body */}
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
            The Buster Frequency Project takes place on the unceded territories of the{' '}
            <span style={nativeFontStyle}>xʷməθkʷəy̓əm</span> (Musqueam),{' '}
            <span style={nativeFontStyle}>Sḵwx̱wú7mesh</span> Úxwumixw (Squamish Nation), and{' '}
            <span style={nativeFontStyle}>səlilwətaɬ</span> (Tsleil-Waututh Nation). Unceded
            means what the word says: this land was never sold, never surrendered, never signed
            over to the Crown. The people who belong to it were here long before the city that
            sits on top of them, and they are still here.
          </p>

          <p style={{ margin: 0 }}>
            I live and write here too, a settler. The taking that cleared the ground for this
            city is not finished, and I&rsquo;m one of the people it was meant to benefit.
          </p>

          <p style={{ margin: 0 }}>
            The book barely leaves a few square blocks of that city. Chinatown, built and held
            by people the rest of Canada spent decades trying to tax out, exclude, and erase, and
            standing anyway. Powell Street, Paueru Gai, the heart of Japanese Canadian Vancouver
            until 1942, when the government uprooted its residents, sold everything they owned,
            and made them live off the proceeds in the internment camps. And the Downtown Eastside
            as it is now, which outsiders read as nothing but crisis, and the people who live
            there know as a neighbourhood.
          </p>

          <p style={{ margin: 0 }}>
            A novel this concerned with stolen things owes its locations more than a footnote.
            These streets carry a long record of land taken, homes seized, and neighbourhoods
            sold off. The story borrows their weight, and I have tried to be honest about that.
            Honesty isn&rsquo;t where the debt ends. The Musqueam, Squamish, and Tsleil-Waututh
            hold title and authority here that no acknowledgement grants and none can revoke, and
            the work is to live as if that&rsquo;s true, which is slower and harder than writing
            it down.
          </p>
        </div>

        {/* Signature */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.9rem',
            fontWeight: 400,
            fontStyle: 'italic',
            color: 'var(--dim)',
            margin: '2rem 0 0',
          }}
        >
          — Sean Cranbury
        </p>

        {/* Divider before sources */}
        <div style={{ height: '1px', background: 'var(--border)', margin: '2.5rem 0' }} />

        {/* Sources */}
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            fontWeight: 400,
            color: 'var(--text)',
            margin: '0 0 1.5rem',
            lineHeight: 1.3,
            letterSpacing: '-0.01em',
          }}
        >
          Sources &amp; further reading
        </h2>

        <div
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.875rem',
            fontWeight: 400,
            lineHeight: 1.7,
            color: 'var(--secondary)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.75rem',
          }}
        >

          {/* Group 1 — Musqueam, Squamish, and Tsleil-Waututh */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <h3 style={sectionHeadingStyle}>Musqueam, Squamish, and Tsleil-Waututh</h3>
            <p style={{ margin: 0, lineHeight: 1.75 }}>
              The Buster Frequency Project takes place on the unceded territories of the{' '}
              <span style={nativeFontStyle}>xʷməθkʷəy̓əm</span> (Musqueam),{' '}
              <span style={nativeFontStyle}>Sḵwx̱wú7mesh</span> Úxwumixw (Squamish Nation), and{' '}
              <span style={nativeFontStyle}>səlilwətaɬ</span> (Tsleil-Waututh Nation). These
              nations have lived on and cared for these lands and waters since time immemorial and
              continue to shape the cultural, political, and social life of the region today.
            </p>

            <p style={{ margin: 0, color: 'var(--dim)' }}>The nations, in their own words:</p>
            <ul style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <li>
                Musqueam Indian Band →{' '}
                <a href="https://www.musqueam.bc.ca" target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--text)', textDecoration: 'none', borderBottom: '1px solid var(--border)' }}>
                  musqueam.bc.ca
                </a>
              </li>
              <li>
                Squamish Nation →{' '}
                <a href="https://www.squamish.net" target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--text)', textDecoration: 'none', borderBottom: '1px solid var(--border)' }}>
                  squamish.net
                </a>
              </li>
              <li>
                Tsleil-Waututh Nation →{' '}
                <a href="https://twnation.ca" target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--text)', textDecoration: 'none', borderBottom: '1px solid var(--border)' }}>
                  twnation.ca
                </a>
              </li>
            </ul>

            <p style={{ margin: 0, color: 'var(--dim)' }}>Culture, art, and history:</p>
            <ul style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <li>
                Museum of Anthropology (MOA), University of British Columbia →{' '}
                <a href="https://moa.ubc.ca" target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--text)', textDecoration: 'none', borderBottom: '1px solid var(--border)' }}>
                  moa.ubc.ca
                </a>
              </li>
              <li>
                Bill Reid Gallery of Northwest Coast Art →{' '}
                <a href="https://www.billreidgallery.ca" target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--text)', textDecoration: 'none', borderBottom: '1px solid var(--border)' }}>
                  billreidgallery.ca
                </a>
              </li>
              <li>
                Squamish Lil&rsquo;wat Cultural Centre →{' '}
                <a href="https://www.slcc.ca" target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--text)', textDecoration: 'none', borderBottom: '1px solid var(--border)' }}>
                  slcc.ca
                </a>
              </li>
              <li>
                Indigenous Foundations, University of British Columbia →{' '}
                <a href="https://indigenousfoundations.arts.ubc.ca" target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--text)', textDecoration: 'none', borderBottom: '1px solid var(--border)' }}>
                  indigenousfoundations.arts.ubc.ca
                </a>
              </li>
            </ul>

            <p style={{ margin: 0, color: 'var(--dim)' }}>Contemporary Indigenous arts, culture, and community:</p>
            <ul style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <li>
                Full Circle: First Nations Performance →{' '}
                <a href="https://fullcircle.ca" target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--text)', textDecoration: 'none', borderBottom: '1px solid var(--border)' }}>
                  fullcircle.ca
                </a>
              </li>
              <li>
                Vancouver Indigenous Fashion Week →{' '}
                <a href="https://www.vancouverindigenousfashionweek.com" target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--text)', textDecoration: 'none', borderBottom: '1px solid var(--border)' }}>
                  vancouverindigenousfashionweek.com
                </a>
              </li>
              <li>
                Indigenous Tourism BC →{' '}
                <a href="https://indigenousbc.com" target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--text)', textDecoration: 'none', borderBottom: '1px solid var(--border)' }}>
                  indigenousbc.com
                </a>
              </li>
            </ul>
          </div>

          {/* Group 2 — Chinatown */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <h3 style={sectionHeadingStyle}>Chinatown</h3>
            <p style={{ margin: 0, lineHeight: 1.75 }}>
              Chinatown is one of the oldest and most significant Chinese Canadian communities in
              the country. Built by migrants who endured the Head Tax, the Chinese Exclusion Act,
              and decades of discrimination, it remains a centre of cultural memory, community
              life, and ongoing renewal.
            </p>
            <p style={{ margin: 0, color: 'var(--dim)' }}>Learn more:</p>
            <ul style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <li>
                Chinese Canadian Museum →{' '}
                <a href="https://www.chinesecanadianmuseum.ca" target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--text)', textDecoration: 'none', borderBottom: '1px solid var(--border)' }}>
                  chinesecanadianmuseum.ca
                </a>
              </li>
              <li>
                Dr. Sun Yat-Sen Classical Chinese Garden →{' '}
                <a href="https://vancouverchinesegarden.com/" target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--text)', textDecoration: 'none', borderBottom: '1px solid var(--border)' }}>
                  vancouverchinesegarden.com
                </a>
              </li>
              <li>
                Vancouver Chinatown Foundation →{' '}
                <a href="https://chinatownfoundation.org/" target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--text)', textDecoration: 'none', borderBottom: '1px solid var(--border)' }}>
                  chinatownfoundation.org
                </a>
              </li>
              <li>
                Chinese Canadian Historical Society of British Columbia →{' '}
                <a href="http://www.cchsbc.ca/" target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--text)', textDecoration: 'none', borderBottom: '1px solid var(--border)' }}>
                  cchsbc.ca
                </a>
              </li>
              <li>
                Vancouver Chinatown Storytelling Centre →{' '}
                <a href="https://www.chinatownstorytellingcentre.org/" target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--text)', textDecoration: 'none', borderBottom: '1px solid var(--border)' }}>
                  chinatownstorytellingcentre.org
                </a>
              </li>
              <li>
                Vancouver Chinatown Millennium Gate (0 block of West Pender Street) →{' '}
                <a href="https://jywarchitecture.com/#/vancouver-chinatown-millennium-gate/" target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--text)', textDecoration: 'none', borderBottom: '1px solid var(--border)' }}>
                  jywarchitecture.com
                </a>
              </li>
            </ul>
          </div>

          {/* Group 3 — Powell Street */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <h3 style={sectionHeadingStyle}>Powell Street / Paueru Gai</h3>
            <p style={{ margin: 0, lineHeight: 1.75 }}>
              Before 1942, Powell Street was the heart of Japanese Canadian Vancouver. The forced
              uprooting, internment, and dispossession of Japanese Canadians transformed the
              neighbourhood, but its history continues to be remembered and celebrated by community
              organizations and cultural institutions.
            </p>
            <p style={{ margin: 0, color: 'var(--dim)' }}>Learn more:</p>
            <ul style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <li>
                Landscapes of Injustice (University of Victoria) →{' '}
                <a href="https://www.landscapesofinjustice.com" target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--text)', textDecoration: 'none', borderBottom: '1px solid var(--border)' }}>
                  landscapesofinjustice.com
                </a>
              </li>
              <li>
                Nikkei National Museum &amp; Cultural Centre →{' '}
                <a href="https://centre.nikkeiplace.org" target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--text)', textDecoration: 'none', borderBottom: '1px solid var(--border)' }}>
                  centre.nikkeiplace.org
                </a>
              </li>
              <li>
                Powell Street Festival Society →{' '}
                <a href="https://powellstreetfestival.com" target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--text)', textDecoration: 'none', borderBottom: '1px solid var(--border)' }}>
                  powellstreetfestival.com
                </a>
              </li>
              <li>
                Vancouver Asahi Baseball Association →{' '}
                <a href="https://www.asahibaseball.com/history.html" target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--text)', textDecoration: 'none', borderBottom: '1px solid var(--border)' }}>
                  asahibaseball.com
                </a>
              </li>
            </ul>
          </div>

          {/* Group 4 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <h3 style={sectionHeadingStyle}>The Downtown Eastside</h3>
            <p style={{ margin: 0, lineHeight: 1.75 }}>
              The Downtown Eastside is one of Vancouver&rsquo;s oldest neighbourhoods and home to
              generations of residents, artists, workers, activists, elders, families, and
              survivors. While often portrayed through the lens of poverty, addiction, and crisis,
              it is also a place of deep community knowledge, mutual aid, creativity, political
              organizing, and enduring cultural life. The neighbourhood continues to be shaped by
              the people who live there, care for one another there, and fight for its future.
            </p>
            <p style={{ margin: 0, color: 'var(--dim)' }}>Learn more:</p>
            <ul style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <li>
                Drug User Liberation Front (DULF) →{' '}
                <a href="https://dulf.ca/" target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--text)', textDecoration: 'none', borderBottom: '1px solid var(--border)' }}>
                  dulf.ca
                </a>
              </li>
              <li>
                Vancouver Area Network of Drug Users (VANDU) →{' '}
                <a href="https://vandu.org/" target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--text)', textDecoration: 'none', borderBottom: '1px solid var(--border)' }}>
                  vandu.org
                </a>
              </li>
              <li>
                Downtown Eastside Women&rsquo;s Centre →{' '}
                <a href="https://dewc.ca/" target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--text)', textDecoration: 'none', borderBottom: '1px solid var(--border)' }}>
                  dewc.ca
                </a>
              </li>
              <li>
                Heart of the City Festival →{' '}
                <a href="https://www.heartofthecityfestival.com/" target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--text)', textDecoration: 'none', borderBottom: '1px solid var(--border)' }}>
                  heartofthecityfestival.com
                </a>
              </li>
              <li>
                Carnegie Community Centre →{' '}
                <a href="https://vancouver.ca/parks-recreation-culture/carnegie-community-centre.aspx" target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--text)', textDecoration: 'none', borderBottom: '1px solid var(--border)' }}>
                  vancouver.ca
                </a>
              </li>
              <li>
                Downtown Eastside SRO Collaborative →{' '}
                <a href="https://dtescollaborative.org" target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--text)', textDecoration: 'none', borderBottom: '1px solid var(--border)' }}>
                  dtescollaborative.org
                </a>
              </li>
              <li>
                Union Gospel Mission →{' '}
                <a href="https://ugm.ca" target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--text)', textDecoration: 'none', borderBottom: '1px solid var(--border)' }}>
                  ugm.ca
                </a>
              </li>
              <li>
                First United →{' '}
                <a href="https://firstunited.ca" target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--text)', textDecoration: 'none', borderBottom: '1px solid var(--border)' }}>
                  firstunited.ca
                </a>
              </li>
              <li>
                WISH Drop-In Centre Society →{' '}
                <a href="https://wish-vancouver.net" target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--text)', textDecoration: 'none', borderBottom: '1px solid var(--border)' }}>
                  wish-vancouver.net
                </a>
              </li>
              <li>
                Powell Street Getaway →{' '}
                <a href="https://lookoutsociety.ca" target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--text)', textDecoration: 'none', borderBottom: '1px solid var(--border)' }}>
                  lookoutsociety.ca
                </a>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  )
}
