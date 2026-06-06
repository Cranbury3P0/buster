import type { Metadata } from 'next'
import { Archivo_Black, Radio_Canada } from 'next/font/google'
import './globals.css'

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

export const metadata: Metadata = {
  title: 'The Buster Frequency Project — Instagram Origin Archive',
  description: 'A private archive. Selected image/caption pairs, preserved.',
  robots: { index: false, follow: false },
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
        {children}
      </body>
    </html>
  )
}
