import type { Post } from '@/lib/types'
import TransmissionCard from './TransmissionCard'

interface Props {
  posts: Post[]
}

export default function ArchiveGrid({ posts }: Props) {
  return (
    <>
      <div className="archive-grid">
        {posts.map((post) => (
          <TransmissionCard key={post.id} post={post} />
        ))}
      </div>
      <style>{`
        .archive-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 5.5rem 4rem;
        }
        @media (max-width: 680px) {
          .archive-grid {
            grid-template-columns: 1fr;
            gap: 4.5rem;
          }
        }
      `}</style>
    </>
  )
}
