'use client'

import { useState } from 'react'

export default function WaiverCheckbox() {
  const [checked, setChecked] = useState(false)
  const [open, setOpen] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setChecked(e.target.checked)
    if (e.target.checked) setOpen(true)
  }

  return (
    <>
      {/* Checkbox row */}
      <label
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '0.75rem',
          cursor: 'pointer',
          fontFamily: 'var(--font-body)',
          fontSize: '1rem',
          fontWeight: 400,
          color: 'var(--text)',
          lineHeight: 1.6,
        }}
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          style={{
            marginTop: '0.25rem',
            width: '1rem',
            height: '1rem',
            flexShrink: 0,
            accentColor: 'var(--text)',
            cursor: 'pointer',
          }}
        />
        I understand that the area I am about to enter does not exist.
      </label>

      {/* Lightbox */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(250,250,250,0.5)',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: '#ffffff',
              borderRadius: '4px',
              padding: '2.5rem 3rem',
              boxShadow: '0 2px 40px rgba(0,0,0,0.10), 0 1px 6px rgba(0,0,0,0.06)',
              maxWidth: '380px',
              width: '100%',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.75rem',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                fontWeight: 400,
                color: 'var(--text)',
                margin: 0,
                lineHeight: 1.65,
              }}
            >
              The Project is not yet ready.<br />Please come back soon.
            </p>

            <button
              onClick={() => setOpen(false)}
              style={{
                background: 'transparent',
                border: 'none',
                borderBottom: '1px solid var(--border)',
                color: 'var(--dim)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                fontWeight: 400,
                padding: '0.25rem 0',
                cursor: 'pointer',
                alignSelf: 'center',
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}
