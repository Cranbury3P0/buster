const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://busterfrequency.com'

export default function SchemaOrg() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    name: 'The Buster Frequency Project',
    url: siteUrl,
    description:
      'A Vancouver noir fiction project by Sean Cranbury. The story of Buster Frequency — a man with no future reclaiming his past through art and violence.',
    author: {
      '@id': `${siteUrl}/#person`,
    },
    inLanguage: 'en-CA',
  }

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteUrl}/#person`,
    name: 'Sean Cranbury',
    url: siteUrl,
    email: 'hello@seancranbury.com',
    description:
      'Sean Cranbury is a Vancouver-based writer working on The Buster Frequency Project, a long-form noir fiction work rooted in the East Vancouver music scene of the early 2000s.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Vancouver',
      addressRegion: 'BC',
      addressCountry: 'CA',
    },
    knowsAbout: [
      'Noir fiction',
      'Vancouver literature',
      'Literary fiction',
      'Canadian writing',
      'Indie music culture',
      'East Vancouver',
    ],
  }

  const creativeWorkSchema = {
    '@context': 'https://schema.org',
    '@type': 'Book',
    '@id': `${siteUrl}/#creativeWork`,
    name: 'The Buster Frequency Project',
    url: siteUrl,
    description:
      'A long-form noir fiction work by Sean Cranbury set in Vancouver, British Columbia. The project follows the fictional character Buster Frequency — a bass player, loner, and misanthrope from the East Vancouver music scene — as he reclaims his past through art and violence. Originally developed through Instagram image-caption pairs, 2017–2025.',
    author: {
      '@id': `${siteUrl}/#person`,
    },
    genre: ['Noir', 'Literary Fiction', 'Canadian Fiction'],
    locationCreated: {
      '@type': 'Place',
      name: 'Vancouver, British Columbia, Canada',
    },
    workExample: {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
    },
    inLanguage: 'en-CA',
    dateCreated: '2017',
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkSchema) }}
      />
    </>
  )
}
