import Image from 'next/image'

interface Props {
  src: string
  alt: string
  priority?: boolean
  sizes?: string
}

// Fine fractal grain — scanner/print texture, almost imperceptible
const GRAIN_SVG = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='300' height='300' filter='url(%23n)'/></svg>`

export default function ArchivalImage({ src, alt, priority, sizes }: Props) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes ?? '(max-width: 720px) 100vw, 50vw'}
        style={{
          objectFit: 'contain',
          // Catalogue reproduction: slight tonal compression, minimal desaturation
          filter: 'saturate(0.92) contrast(1.01)',
        }}
      />
      {/* Film grain — multiply on light surface keeps it almost invisible */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("${GRAIN_SVG}")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '300px 300px',
          opacity: 0.022,
          mixBlendMode: 'multiply',
          pointerEvents: 'none',
        }}
      />
    </div>
  )
}
