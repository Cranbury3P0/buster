import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default async function Icon() {
  // Fetch Archivo Black from Google Fonts at build time.
  // Falls back to a system bold-sans if the fetch fails (e.g. offline build).
  let fontData: ArrayBuffer | null = null
  try {
    const css = await fetch(
      'https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap',
      { headers: { 'User-Agent': 'Mozilla/5.0' } }
    ).then((r) => r.text())
    const fontUrl = css.match(/url\(([^)]+\.woff2)\)/)?.[1]
    if (fontUrl) {
      fontData = await fetch(fontUrl).then((r) => r.arrayBuffer())
    }
  } catch {
    // silent — fallback font used below
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
          fontFamily: fontData ? 'Archivo Black' : '"Arial Black", sans-serif',
          fontSize: 26,
          fontWeight: 400,
          color: '#1d1d1d',
          lineHeight: 1,
        }}
      >
        B
      </div>
    ),
    {
      ...size,
      ...(fontData
        ? {
            fonts: [
              {
                name: 'Archivo Black',
                data: fontData,
                style: 'normal' as const,
                weight: 400,
              },
            ],
          }
        : {}),
    }
  )
}
