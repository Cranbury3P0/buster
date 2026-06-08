'use client'

import { useState } from 'react'
import Link from 'next/link'

const links = [
  { href: '/buster/landing', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/buster/archive', label: 'Archive' },
  { href: '/attribution', label: 'Attribution' },
  { href: '/contact', label: 'Contact' },
]

const linkStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: '0.8rem',
  fontWeight: 400,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'var(--dim)',
  textDecoration: 'none',
}

export default function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <nav
      className="nav-bar"
      style={{
        borderBottom: '1px solid var(--border)',
        background: 'var(--bg)',
      }}
    >
      <style>{`
        .nav-bar .nav-row {
          display: none;
        }
        .nav-bar .nav-links {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
        }
        @media (max-width: 640px) {
          .nav-bar .nav-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .nav-bar .nav-toggle {
            display: inline-flex;
            flex-direction: column;
            justify-content: center;
            gap: 0.3rem;
            background: transparent;
            border: none;
            padding: 0.6rem;
            margin: -0.6rem;
            cursor: pointer;
          }
          .nav-bar .nav-toggle span {
            display: block;
            width: 1.35rem;
            height: 1px;
            background: var(--text);
            transition: transform 0.15s ease, opacity 0.15s ease;
          }
          .nav-bar .nav-toggle[aria-expanded="true"] span:nth-child(1) {
            transform: translateY(6px) rotate(45deg);
          }
          .nav-bar .nav-toggle[aria-expanded="true"] span:nth-child(2) {
            opacity: 0;
          }
          .nav-bar .nav-toggle[aria-expanded="true"] span:nth-child(3) {
            transform: translateY(-6px) rotate(-45deg);
          }
          .nav-bar .nav-panel {
            display: ${open ? 'block' : 'none'};
          }
          .nav-bar .nav-links {
            flex-direction: column;
            gap: 1.1rem;
            padding-top: 1.1rem;
          }
        }
      `}</style>
      <div
        style={{
          maxWidth: '860px',
          margin: '0 auto',
          padding: '0.9rem 1.5rem',
        }}
      >
        <div className="nav-row">
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.85rem',
              letterSpacing: '0.04em',
              color: 'var(--text)',
            }}
            className="nav-brand"
          >
            BFP
          </span>

          <button
            type="button"
            className="nav-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className="nav-panel">
          <div className="nav-links">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={linkStyle}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
