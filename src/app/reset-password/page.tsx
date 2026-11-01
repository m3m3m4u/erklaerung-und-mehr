'use client';

import React, { Suspense, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ResetPasswordConfirmPage() {
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
        <Suspense
          fallback={
            <div style={{ color: 'var(--text-muted)', fontSize: 14 }}>Lade…</div>
          }
        >
          <ResetPasswordInner />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

function ResetPasswordInner() {
  const sp = useSearchParams();
  const token = sp?.get('token') || '';
  const u = sp?.get('u') || '';
  const [pw, setPw] = useState('');
  const [pw2, setPw2] = useState('');
  const [status, setStatus] = useState<string | undefined>();
  const [error, setError] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(undefined);
    setError(undefined);

    if (pw.length < 6) {
      setError('Das Passwort muss mindestens 6 Zeichen lang sein.');
      return;
    }

    if (pw !== pw2) {
      setError('Die Passwörter stimmen nicht überein.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/auth/password-reset/confirm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, userId: u, password: pw }),
      });
      const data = await res.json();

      if (data.ok) {
        setSuccess(true);
        setStatus('Passwort erfolgreich geändert! Du wirst zum Login weitergeleitet …');
        setTimeout(() => router.push('/?login=teacher'), 2000);
      } else {
        setError(data.error || 'Fehler beim Speichern. Der Link könnte abgelaufen sein.');
      }
    } catch {
      setError('Netzwerkfehler. Bitte überprüfe deine Internetverbindung.');
    } finally {
      setLoading(false);
    }
  }

  if (!token || !u) {
    return (
      <div
        className="dashboard-section"
        style={{
          maxWidth: 460,
          width: '100%',
          margin: 0,
          padding: '32px 28px',
          borderRadius: 12,
          textAlign: 'center',
          boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
        }}
      >
        <div
          style={{
            width: 52,
            height: 52,
            margin: '0 auto 14px',
            borderRadius: '50%',
            background: '#fdecea',
            color: '#c62828',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 24,
            fontWeight: 700,
          }}
        >
          !
        </div>
        <h1 style={{ fontSize: 22, marginBottom: 8, color: 'var(--green-dark)' }}>
          Ungültiger Link
        </h1>
        <p style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 20 }}>
          Dieser Link zum Zurücksetzen des Passworts ist ungültig oder unvollständig.
        </p>
        <Link
          href="/forgot-password"
          className="login-submit-btn"
          style={{ display: 'inline-block', textDecoration: 'none', width: '100%' }}
        >
          Neuen Link anfordern
        </Link>
      </div>
    );
  }

  return (
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
        <div
          style={{
            width: 48,
            height: 48,
            margin: '0 auto 12px',
            borderRadius: 12,
            background: 'var(--green-light)',
            border: '1px solid var(--green-border)',
            color: 'var(--green-dark)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>
        <h1 style={{ fontSize: 24, marginBottom: 6, color: 'var(--green-dark)' }}>
          Neues Passwort setzen
        </h1>
        <p style={{ fontSize: 14, color: 'var(--text-muted)', margin: 0 }}>
          Wähle ein sicheres Passwort mit mindestens 6 Zeichen.
        </p>
      </div>

      {success ? (
        <div
          style={{
            background: '#e6f4d7',
            color: '#2e6b0e',
            border: '1px solid #c3e6a4',
            borderRadius: 6,
            padding: '14px 16px',
            fontSize: 14,
            lineHeight: 1.5,
          }}
        >
          <div style={{ fontWeight: 700, marginBottom: 4 }}>✓ Erfolgreich!</div>
          <div>{status}</div>
        </div>
      ) : (
        <form onSubmit={submit} className="login-form">
          <label className="login-label">
            Neues Passwort
            <input
              id="pw"
              type="password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              className="login-input"
              required
              minLength={6}
              placeholder="Mindestens 6 Zeichen"
              autoComplete="new-password"
              disabled={loading}
              autoFocus
            />
          </label>

          <label className="login-label">
            Passwort wiederholen
            <input
              id="pw2"
              type="password"
              value={pw2}
              onChange={(e) => setPw2(e.target.value)}
              className="login-input"
              required
              minLength={6}
              placeholder="Passwort bestätigen"
              autoComplete="new-password"
              disabled={loading}
            />
          </label>

          {pw.length > 0 && (
            <div style={{ fontSize: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
              <div
                style={{
                  flex: 1,
                  height: 6,
                  background: '#e4e9df',
                  borderRadius: 4,
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: pw.length < 6 ? '33%' : pw.length < 10 ? '66%' : '100%',
                    background:
                      pw.length < 6 ? '#c62828' : pw.length < 10 ? '#f59e0b' : 'var(--green-primary)',
                    transition: 'all 0.2s',
                  }}
                />
              </div>
              <span
                style={{
                  fontWeight: 600,
                  color: pw.length < 6 ? '#c62828' : pw.length < 10 ? '#d97706' : 'var(--green-dark)',
                }}
              >
                {pw.length < 6 ? 'Schwach' : pw.length < 10 ? 'Mittel' : 'Stark'}
              </span>
            </div>
          )}

          {error && <p className="login-error">{error}</p>}

          <button type="submit" disabled={loading || success} className="login-submit-btn">
            {loading ? 'Wird gespeichert …' : 'Passwort speichern'}
          </button>
        </form>
      )}

      <div
        style={{
          marginTop: 22,
          paddingTop: 16,
          borderTop: '1px solid var(--border-light)',
          textAlign: 'center',
          fontSize: 12.5,
          color: 'var(--text-muted)',
        }}
      >
        <p style={{ marginBottom: 8 }}>
          Dieser Link ist <strong>30 Minuten</strong> gültig und kann nur einmal verwendet werden.
        </p>
        {!success && (
          <Link href="/forgot-password" style={{ fontWeight: 600, color: 'var(--green-dark)' }}>
            ← Neuen Link anfordern
          </Link>
        )}
      </div>
    </div>
  );
}
