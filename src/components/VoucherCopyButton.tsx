'use client';

import React, { useState } from 'react';

interface VoucherCopyButtonProps {
  code?: string;
  label?: string;
}

export default function VoucherCopyButton({
  code = 'erklaerung10',
  label = 'Code kopieren',
}: VoucherCopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 12,
        background: '#ffffff',
        border: '1.5px dashed #2e6b0e',
        borderRadius: 8,
        padding: '8px 14px',
        margin: '10px 0 16px 0',
        flexWrap: 'wrap',
      }}
    >
      <span style={{ fontSize: 13, color: '#444' }}>Exklusiver Gutscheincode:</span>
      <span
        style={{
          fontFamily: 'monospace',
          fontWeight: 800,
          fontSize: 16,
          color: '#2e6b0e',
          letterSpacing: '1px',
          background: '#f4faf0',
          padding: '2px 8px',
          borderRadius: 4,
          border: '1px solid #dbead2',
        }}
      >
        {code}
      </span>
      <button
        type="button"
        onClick={handleCopy}
        style={{
          background: copied ? '#2e6b0e' : '#eaf4e2',
          color: copied ? '#ffffff' : '#2e6b0e',
          border: '1px solid #c2dfae',
          borderRadius: 6,
          padding: '6px 12px',
          fontSize: 12,
          fontWeight: 700,
          cursor: 'pointer',
          transition: 'all 0.15s ease',
        }}
      >
        {copied ? '✓ In die Zwischenablage kopiert!' : label}
      </button>
    </div>
  );
}
