interface Props {
  caption: string
}

export default function CaptionBlock({ caption }: Props) {
  const paragraphs = caption
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean)

  return (
    <div
      style={{
        fontFamily: 'var(--font-body)',
        fontSize: 'clamp(1rem, 1.5vw, 1.1rem)',
        fontWeight: 400,
        lineHeight: 1.85,
        color: 'var(--text)',
        maxWidth: '62ch',
      }}
    >
      {paragraphs.map((para, i) => (
        <p
          key={i}
          style={{ marginBottom: i < paragraphs.length - 1 ? '1.4em' : 0 }}
        >
          {para}
        </p>
      ))}
    </div>
  )
}
