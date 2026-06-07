'use client'

import { submitPassword } from '@/app/actions/auth'

interface Props {
  error?: boolean
}

export default function PasswordGate({ error }: Props) {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        backgroundColor: 'rgba(250, 250, 250, 0.35)',
      }}
    >
      {/* White card */}
      <div
        style={{
          width: '100%',
          maxWidth: '380px',
          background: '#ffffff',
          borderRadius: '4px',
          padding: 'clamp(1.5rem, 5vw, 2.5rem)',
          boxShadow: '0 2px 40px rgba(0,0,0,0.10), 0 1px 6px rgba(0,0,0,0.06)',
        }}
      >
        {/* Eyebrow + title */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginBottom: '2rem' }}>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              fontWeight: 400,
              color: 'var(--dim)',
              margin: 0,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          >
            Private Archive
          </p>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.1rem, 3.5vw, 1.5rem)',
              fontWeight: 400,
              color: 'var(--text)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              margin: 0,
            }}
          >
            BUSTER FREQUENCY PROJECT
          </h2>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'var(--border)', marginBottom: '1.75rem' }} />

        {/* Form */}
        <form action={submitPassword} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <input
            type="password"
            name="password"
            autoComplete="current-password"
            placeholder="Access code"
            autoFocus
            required
            style={{
              width: '100%',
              background: 'transparent',
              border: 'none',
              borderBottom: `1px solid ${error ? '#c0392b' : 'var(--border)'}`,
              color: 'var(--text)',
              padding: '0.6rem 0',
              fontFamily: 'var(--font-body)',
              fontSize: '0.9rem',
              outline: 'none',
            }}
          />

          {error && (
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.8rem',
                color: '#c0392b',
                margin: 0,
              }}
            >
              Incorrect access code.
            </p>
          )}

          <div style={{ paddingTop: '0.5rem' }}>
            <button
              type="submit"
              style={{
                background: 'transparent',
                border: 'none',
                borderBottom: '1px solid var(--border)',
                color: 'var(--secondary)',
                padding: '0.35rem 0',
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                cursor: 'pointer',
              }}
            >
              Open archive →
            </button>
          </div>
        </form>

        {/* Footer note */}
        <p
          style={{
            marginTop: '2.5rem',
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            color: 'var(--faint)',
            margin: '2.5rem 0 0',
          }}
        >
          Not for distribution.
        </p>
      </div>
    </div>
  )
}
