'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface User {
  id: string;
  role: 'teacher' | 'student' | 'admin';
  email?: string;
  code?: string;
}

export default function TeacherHeroBanner() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch('/api/auth/me')
      .then((r) => r.json())
      .then((data) => setUser(data.user || null))
      .catch(() => setUser(null));
  }, []);

  const handleOpenRegister = () => {
    window.dispatchEvent(
      new CustomEvent('open-auth-modal', { detail: { step: 'teacher-register' } })
    );
  };

  return (
    <div
      style={{
        marginTop: 32,
        marginBottom: 8,
        background: 'var(--bg-white)',
        border: '1.5px solid var(--green-primary)',
        borderRadius: 8,
        padding: '16px 20px',
        boxShadow: '0 2px 6px rgba(46, 107, 14, 0.06)',
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        flexWrap: 'wrap',
      }}
    >
      <div
        style={{
          background: 'var(--green-primary)',
          color: '#ffffff',
          fontSize: 13,
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.8px',
          padding: '8px 14px',
          borderRadius: 6,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minWidth: 54,
          flexShrink: 0,
        }}
      >
        Neu
      </div>

      <div style={{ flex: '1 1 340px', lineHeight: 1.55 }}>
        {user?.role === 'teacher' ? (
          <div>
            <div style={{ fontSize: 14, color: 'var(--text-color)' }}>
              <strong>Willkommen zurück!</strong> Du bist als Lehrperson angemeldet. Verwalte deine Klassen, erstelle Schüleraccounts oder weise interaktive H5P-Übungen zu.
            </div>
            <div style={{ fontSize: 12, color: 'var(--green-dark)', marginTop: 4, fontWeight: 600 }}>
              ✓ 100 % DSGVO-konform ohne Schüler-E-Mails
            </div>
          </div>
        ) : (
          <div>
            <div style={{ fontSize: 14, color: 'var(--text-color)' }}>
              <strong>Für Lehrpersonen:</strong> Klassen anlegen, Lernergebnisse anonym nachverfolgen und Übungen zuweisen.
            </div>
            <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 2 }}>
              Vollständig kostenlos &amp; <strong>100 % DSGVO-konform</strong>: Deine Schüler:innen loggen sich einfach mit 5-stelligen Codes ein.
            </div>
          </div>
        )}
      </div>

      <div style={{ flexShrink: 0 }}>
        {user?.role === 'teacher' ? (
          <Link
            href="/dashboard"
            className="button-link"
            style={{
              fontSize: 13,
              padding: '9px 18px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              whiteSpace: 'nowrap',
              fontWeight: 600,
            }}
          >
            <span>Zum Dashboard &amp; Klassen</span>
            <span>&rarr;</span>
          </Link>
        ) : user?.role === 'student' ? (
          <Link
            href="/mein-fortschritt"
            className="button-link"
            style={{
              fontSize: 13,
              padding: '9px 18px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              whiteSpace: 'nowrap',
              fontWeight: 600,
            }}
          >
            <span>Mein Fortschritt</span>
            <span>&rarr;</span>
          </Link>
        ) : (
          <button
            type="button"
            onClick={handleOpenRegister}
            className="button-link"
            style={{
              fontSize: 13,
              padding: '9px 18px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              whiteSpace: 'nowrap',
              fontWeight: 600,
              cursor: 'pointer',
              border: 'none',
            }}
          >
            <span>Kostenlos als Lehrperson starten</span>
            <span>&rarr;</span>
          </button>
        )}
      </div>
    </div>
  );
}
