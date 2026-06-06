import type { Post } from '@/lib/types'

interface Props {
  post: Post
}

function formatDate(iso: string): string {
  const d = new Date(iso)
  return d.toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

const Row = ({ label, value }: { label: string; value: React.ReactNode }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '72px 1fr',
      gap: '0.5rem',
      paddingBottom: '0.7rem',
      borderBottom: '1px solid var(--border)',
    }}
  >
    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--dim)', paddingTop: '0.1rem' }}>
      {label}
    </span>
    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--secondary)', wordBreak: 'break-word', lineHeight: 1.5 }}>
      {value}
    </span>
  </div>
)

export default function MetadataPanel({ post }: Props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
      <Row label="Record" value={post.postNumber} />
      <Row label="Date" value={formatDate(post.dateUtc)} />
      {post.imageCredit && <Row label="Image" value={post.imageCredit} />}
      <Row label="Source" value={
        <a href={post.postUrl} target="_blank" rel="noopener noreferrer"
          style={{ color: 'var(--dim)', textDecoration: 'none', borderBottom: '1px solid var(--border)' }}>
          instagram ↗
        </a>
      } />
      <Row label="Length" value={`${post.captionLength.toLocaleString()} chars`} />
    </div>
  )
}
