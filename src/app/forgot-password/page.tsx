'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ForgotPasswordPage() {
  const [identifier, setIdentifier] = useState('');
  const [status, setStatus] = useState<string | undefined>();
  const [error, setError] = useState<string | undefined>();
  const [devLinks, setDevLinks] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(undefined);
    setError(undefined);
    setDevLinks([]);
    setLoading(true);

    try {
      const res = await fetch('/api/auth/password-reset/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier }),
      });
      const data = await res.json();

      if (data.ok) {
        setStatus(
          'Falls deine E-Mail-Adresse existiert, haben wir dir einen Link zum Zurücksetzen deines Passworts gesendet. Bitte überprüfe dein Postfach.'
        );
        if (data.resetLinks && Array.isArray(data.resetLinks)) {
          setDevLinks(data.resetLinks);
        } else if (data.resetLink) {
          setDevLinks([data.resetLink]);
        }
      } else {
        setError(data.error || 'Ein Fehler ist aufgetreten. Bitte versuche es später erneut.');
      }
    } catch {
      setError('Netzwerkfehler. Bitte überprüfe deine Internetverbindung.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="site-wrapper">
      <Header />
      <main
        className="content-main"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 20px',
          minHeight: 'calc(100vh - 200px)',
        }}
      >
        <div
          className="dashboard-section"
          style={{
            maxWidth: 460,
            width: '100%',
            margin: 0,
            padding: '32px 28px',
            borderRadius: 12,
            boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: 22 }}>
            <h1 style={{ fontSize: 24, marginBottom: 8, color: 'var(--green-dark)' }}>
              Passwort vergessen?
            </h1>
            <p style={{ fontSize: 14, color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>
              Gib deine E-Mail-Adresse ein und wir senden dir einen Link zum Zurücksetzen deines Passworts.
            </p>
          </div>

          <form onSubmit={submit} className="login-form">
            <label className="login-label">
              E-Mail-Adresse
              <input
                id="identifier"
                type="email"
                required
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                className="login-input"
                placeholder="ihre@email.at"
                autoComplete="email"
                autoFocus
              />
            </label>

            {error && <p className="login-error">{error}</p>}

            {status && (
              <div
                style={{
                  background: '#e6f4d7',
                  color: '#2e6b0e',
                  border: '1px solid #c3e6a4',
                  borderRadius: 6,
                  padding: '10px 14px',
                  fontSize: 13.5,
                  lineHeight: 1.5,
                }}
              >
                {status}
              </div>
            )}

            <button type="submit" disabled={loading} className="login-submit-btn">
              {loading ? 'Wird gesendet …' : 'Link anfordern'}
            </button>
          </form>

          {devLinks.length > 0 && (
            <div
              style={{
                marginTop: 16,
                padding: '12px 14px',
                background: '#fff8e1',
                border: '1px solid #ffe082',
                borderRadius: 8,
                fontSize: 12.5,
              }}
            >
              <p style={{ fontWeight: 700, marginBottom: 6, color: '#856404' }}>Dev-Modus:</p>
              {devLinks.map((link, index) => (
                <div key={index} style={{ marginTop: 4 }}>
                  <a
                    href={link}
                    style={{ color: 'var(--green-dark)', wordBreak: 'break-all', textDecoration: 'underline' }}
                  >
                    {link}
                  </a>
                </div>
              ))}
            </div>
          )}

          <div
            style={{
              marginTop: 22,
              paddingTop: 16,
              borderTop: '1px solid var(--border-light)',
              fontSize: 12.5,
              color: 'var(--text-muted)',
            }}
          >
            <p style={{ marginBottom: 4 }}>
              Der Link ist <strong>30 Minuten</strong> gültig.
            </p>
            <p style={{ marginBottom: 14 }}>
              Aus Sicherheitsgründen wird nicht angezeigt, ob ein Account existiert.
            </p>
            <div style={{ textAlign: 'center' }}>
              <Link href="/?login=teacher" style={{ fontWeight: 600, color: 'var(--green-dark)' }}>
                ← Zurück zum Login
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
