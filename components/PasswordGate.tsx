'use client'

import { submitPassword } from '@/app/actions/auth'

interface Props {
  error?: boolean
}

export default function PasswordGate({ error }: Props) {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        background: 'var(--bg)',
      }}
    >
      <div style={{ width: '100%', maxWidth: '400px' }}>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', marginBottom: '2.5rem' }}>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9rem',
              fontWeight: 300,
              color: 'var(--dim)',
              margin: 0,
              lineHeight: 1,
            }}
          >
            Original Demos 2017–2025
          </p>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.9rem, 6vw, 2.75rem)',
              fontWeight: 400,
              color: 'var(--text)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              margin: 0,
            }}
          >
            BUSTER FREQUENCY PROJECT
          </h1>
        </div>

        <div style={{ height: '1px', background: 'var(--border)', marginBottom: '2.5rem' }} />

        <form action={submitPassword} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <input
            type="password"
            name="password"
            autoComplete="current-password"
            placeholder="Access code"
            required
            style={{
              width: '100%',
              background: 'transparent',
              border: 'none',
              borderBottom: '1px solid var(--border)',
              color: 'var(--text)',
              padding: '0.6rem 0',
              fontFamily: 'var(--font-body)',
              fontSize: '0.9rem',
              outline: 'none',
            }}
          />

          {error && (
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--secondary)' }}>
              Not recognized.
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

        <p
          style={{
            marginTop: '5rem',
            fontFamily: 'var(--font-body)',
            fontSize: '0.8rem',
            color: 'var(--faint)',
          }}
        >
          Private. Not for distribution.
        </p>

      </div>
    </div>
  )
}
