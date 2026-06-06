import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'

const ARCHIVE_DIR = '/Users/sean/Documents/Buster Frequency/Instagram Origin Archive/Archive'
const OUT_DIR = join(process.cwd(), 'lib')
const POST_COUNT = 148

function extractFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/)
  if (!match) return {}
  const fm = {}
  for (const line of match[1].split('\n')) {
    const colon = line.indexOf(':')
    if (colon === -1) continue
    const key = line.slice(0, colon).trim()
    const val = line.slice(colon + 1).trim().replace(/^["']|["']$/g, '')
    fm[key] = val
  }
  return fm
}

function extractCaption(content) {
  const match = content.match(/## Caption\n+```text\n([\s\S]*?)```/)
  if (!match) return ''
  return match[1].replace(/\nImage:.*$/, '').trim()
}

const posts = []

for (let i = 1; i <= POST_COUNT; i++) {
  const num = String(i).padStart(3, '0')
  const filePath = join(ARCHIVE_DIR, `${num}.md`)
  const content = readFileSync(filePath, 'utf8')
  const fm = extractFrontmatter(content)
  const caption = extractCaption(content)

  const credit = fm.image_credit_or_artist_handle || null
  const cleanCredit = credit && credit !== 'NOT FOUND' ? credit : null

  posts.push({
    id: num,
    sequence: parseInt(fm.sequence || i),
    postNumber: fm.post_number || num,
    shortcode: fm.shortcode || '',
    postUrl: fm.post_url || '',
    dateUtc: fm.date_utc || '',
    imageCredit: cleanCredit,
    imagePath: `/archive-images/post-${num}.jpg`,
    captionLength: parseInt(fm.caption_length_chars || 0),
    caption,
  })
}

// Newest first: post 001 (most recent) at top, post 148 (oldest) at bottom

mkdirSync(OUT_DIR, { recursive: true })
const outPath = join(OUT_DIR, 'posts.json')
writeFileSync(outPath, JSON.stringify(posts, null, 2))
console.log(`Generated ${posts.length} posts (newest first) → ${outPath}`)
