import React from 'react';

/*
  ImageSlot — a drop-in image placeholder with clear swap instructions.

  Usage:
    <ImageSlot
      src={require('../assets/images/hero.jpg')}   // <- add this once you have the file
      alt="Migrant workers in Singapore"
      height={520}
      hint="Hero image — suggested: wide shot of workers or legal team"
    />

  To add a real image:
    1. Copy your image file into src/assets/images/
    2. Replace the src prop: src={require('../assets/images/your-file.jpg')}
    3. Remove the `hint` prop — the placeholder label disappears automatically
*/

export default function ImageSlot({ src, alt, height = 400, width = '100%', hint, style = {}, objectFit = 'cover' }) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        style={{
          width,
          height,
          objectFit,
          display: 'block',
          borderRadius: 'inherit',
          ...style,
        }}
      />
    );
  }

  return (
    <div
      style={{
        width,
        height,
        backgroundColor: 'var(--stone-100)',
        borderRadius: 'inherit',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px dashed var(--stone-300)',
        padding: '24px',
        textAlign: 'center',
        ...style,
      }}
    >
      <div
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          backgroundColor: 'var(--stone-200)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '12px',
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--stone-500)" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
      </div>
      <p style={{ fontSize: '12px', fontWeight: 500, color: 'var(--stone-600)', marginBottom: '4px' }}>
        Image slot
      </p>
      {hint && (
        <p style={{ fontSize: '11px', color: 'var(--stone-400)', lineHeight: 1.5, maxWidth: '200px' }}>
          {hint}
        </p>
      )}
      <p style={{ fontSize: '10px', color: 'var(--stone-400)', marginTop: '8px', fontFamily: 'monospace' }}>
        src/assets/images/
      </p>
    </div>
  );
}
