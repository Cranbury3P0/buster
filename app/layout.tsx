import type { Metadata } from 'next'
import { Archivo_Black, Radio_Canada } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'
import SchemaOrg from '@/components/SchemaOrg'
import SiteFooter from '@/components/SiteFooter'

const archivoBlack = Archivo_Black({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-display',
})

const radioCanada = Radio_Canada({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-body',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://busterfrequency.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'The Buster Frequency Project — A Fiction by Sean Cranbury',
    template: '%s — The Buster Frequency Project',
  },
  description:
    'A Vancouver noir fiction project by Sean Cranbury. The story of a man with no future reclaiming his past through art and violence — told through image, caption, and memory.',
  robots: { index: false, follow: false },
  openGraph: {
    type: 'website',
    siteName: 'The Buster Frequency Project',
    locale: 'en_CA',
    url: siteUrl,
    title: 'The Buster Frequency Project — A Fiction by Sean Cranbury',
    description:
      'A Vancouver noir fiction project by Sean Cranbury. The story of a man with no future reclaiming his past through art and violence.',
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
    title: 'The Buster Frequency Project — A Fiction by Sean Cranbury',
    description:
      'Vancouver noir fiction. A man with no future reclaiming his past through art and violence.',
    images: ['/IDRIS_KHAN_ROLAND_BARTHES.png'],
  },
  alternates: {
    canonical: siteUrl,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${archivoBlack.variable} ${radioCanada.variable}`}
    >
      <body
        style={{
          fontFamily: 'var(--font-body), system-ui, sans-serif',
          background: 'var(--bg)',
          color: 'var(--text)',
          minHeight: '100vh',
        }}
      >
        <NavBar />
        <SchemaOrg />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
