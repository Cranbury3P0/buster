import Link from 'next/link'

const links = [
  { href: '/buster/landing', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/buster/archive', label: 'Archive' },
  { href: '/attribution', label: 'Attribution' },
  { href: '/contact', label: 'Contact' },
]

export default function NavBar() {
  return (
    <nav
      style={{
        borderBottom: '1px solid var(--border)',
        background: 'var(--bg)',
        padding: '0.9rem 1.5rem',
      }}
    >
      <div
        style={{
          maxWidth: '860px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.5rem',
        }}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8rem',
              fontWeight: 400,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--dim)',
              textDecoration: 'none',
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
