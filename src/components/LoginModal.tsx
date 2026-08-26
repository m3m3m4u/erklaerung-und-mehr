'use client';

import React, { useState, useCallback } from 'react';

interface User {
  id: string;
  role: 'teacher' | 'student' | 'admin';
  email?: string;
  code?: string;
  name?: string | null;
}

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: User) => void;
}

type Step = 'choose' | 'teacher-login' | 'teacher-register' | 'student-login';

export default function LoginModal({ isOpen, onClose, onLoginSuccess }: LoginModalProps) {
  const [step, setStep] = useState<Step>('choose');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const reset = useCallback(() => {
    setStep('choose');
    setEmail('');
    setPassword('');
    setCode('');
    setError('');
    setLoading(false);
  }, []);

  const handleClose = useCallback(() => {
    reset();
    onClose();
  }, [reset, onClose]);

  const handleTeacherLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role: 'teacher', email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Login fehlgeschlagen.');
      } else {
        onLoginSuccess({ id: data.id || '', role: data.role || 'teacher', email: data.email });
        handleClose();
      }
    } catch {
      setError('Netzwerkfehler. Bitte erneut versuchen.');
    } finally {
      setLoading(false);
    }
  };

  const handleTeacherRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Registrierung fehlgeschlagen.');
      } else {
        onLoginSuccess({ id: data.id || '', role: 'teacher', email: data.email });
        handleClose();
      }
    } catch {
      setError('Netzwerkfehler. Bitte erneut versuchen.');
    } finally {
      setLoading(false);
    }
  };

  const handleStudentLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role: 'student', code }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Login fehlgeschlagen.');
      } else {
        onLoginSuccess({ id: data.id || '', role: 'student', code: data.code, name: data.name });
        handleClose();
      }
    } catch {
      setError('Netzwerkfehler. Bitte erneut versuchen.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="login-modal-overlay" onClick={handleClose}>
      <div className="login-modal" onClick={(e) => e.stopPropagation()}>
        <button className="login-modal-close" onClick={handleClose} aria-label="Schließen">
          &times;
        </button>

        {/* STEP: Choose role */}
        {step === 'choose' && (
          <div className="login-modal-body">
            <h2 className="login-modal-title">Anmeldung</h2>
            <p className="login-modal-subtitle">Bitte wählen Sie Ihre Rolle:</p>
            <div className="login-role-buttons">
              <button
                className="login-role-btn login-role-teacher"
                onClick={() => setStep('teacher-login')}
              >
                <span>Ich bin Lehrperson</span>
              </button>
              <button
                className="login-role-btn login-role-student"
                onClick={() => setStep('student-login')}
              >
                <span>Ich bin Schüler:in</span>
              </button>
            </div>
          </div>
        )}

        {/* STEP: Teacher Login */}
        {step === 'teacher-login' && (
          <div className="login-modal-body">
            <button className="login-back-btn" onClick={() => { setStep('choose'); setError(''); }}>
              ← Zurück
            </button>
            <h2 className="login-modal-title">Lehrperson – Anmelden</h2>
            <form onSubmit={handleTeacherLogin} className="login-form">
              <label className="login-label">
                E-Mail-Adresse / Benutzername
                <input
                  type="text"
                  className="login-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoFocus
                  placeholder="ihre@email.at oder Benutzername"
                  autoCapitalize="none"
                  autoCorrect="off"
                />
              </label>
              <label className="login-label">
                Passwort
                <input
                  type="password"
                  className="login-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                />
              </label>
              {error && <p className="login-error">{error}</p>}
              <button type="submit" className="login-submit-btn" disabled={loading}>
                {loading ? 'Anmelden …' : 'Anmelden'}
              </button>
            </form>
            <p className="login-switch-text">
              Noch kein Konto?{' '}
              <button
                className="login-link-btn"
                onClick={() => { setStep('teacher-register'); setError(''); }}
              >
                Jetzt registrieren
              </button>
            </p>
          </div>
        )}

        {/* STEP: Teacher Register */}
        {step === 'teacher-register' && (
          <div className="login-modal-body">
            <button className="login-back-btn" onClick={() => { setStep('teacher-login'); setError(''); }}>
              ← Zurück
            </button>
            <h2 className="login-modal-title">Lehrperson – Registrieren</h2>
            <form onSubmit={handleTeacherRegister} className="login-form">
              <label className="login-label">
                E-Mail-Adresse
                <input
                  type="email"
                  className="login-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoFocus
                  placeholder="ihre@email.at"
                />
              </label>
              <label className="login-label">
                Passwort <span className="login-hint">(mind. 6 Zeichen)</span>
                <input
                  type="password"
                  className="login-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  placeholder="••••••••"
                />
              </label>
              {error && <p className="login-error">{error}</p>}
              <button type="submit" className="login-submit-btn" disabled={loading}>
                {loading ? 'Registrieren …' : 'Konto erstellen'}
              </button>
            </form>
          </div>
        )}

        {/* STEP: Student Login */}
        {step === 'student-login' && (
          <div className="login-modal-body">
            <button className="login-back-btn" onClick={() => { setStep('choose'); setError(''); }}>
              ← Zurück
            </button>
            <h2 className="login-modal-title">Schüler:in – Anmelden</h2>
            <p className="login-modal-subtitle">
              Gib deinen 5-stelligen Code ein (Großbuchstaben und Ziffern).
            </p>
            <form onSubmit={handleStudentLogin} className="login-form">
              <label className="login-label">
                Dein Code
                <input
                  type="text"
                  className="login-input login-code-input"
                  value={code}
                  onChange={(e) => setCode(e.target.value.toUpperCase().replace(/[^A-Z1-9]/gi, '').slice(0, 5))}
                  required
                  autoFocus
                  placeholder="z. B. A3X9K"
                  maxLength={5}
                  spellCheck={false}
                  autoCapitalize="characters"
                />
              </label>
              {error && <p className="login-error">{error}</p>}
              <button type="submit" className="login-submit-btn" disabled={loading || code.length !== 5}>
                {loading ? 'Anmelden …' : 'Anmelden'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
