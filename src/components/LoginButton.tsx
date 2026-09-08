'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import LoginModal from './LoginModal';

interface User {
  id: string;
  role: 'teacher' | 'student' | 'admin';
  email?: string;
  code?: string;
  name?: string | null;
}

export default function LoginButton() {
  const [user, setUser] = useState<User | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState<'choose' | 'teacher-login' | 'teacher-register' | 'student-login'>('choose');
  const [menuOpen, setMenuOpen] = useState(false);
  const menuWrapperRef = useRef<HTMLDivElement>(null);

  // Load current session on mount
  useEffect(() => {
    fetch('/api/auth/me')
      .then((r) => r.json())
      .then((data) => setUser(data.user || null))
      .catch(() => setUser(null));
  }, []);

  // Handle URL params (?register=teacher or ?login=teacher) and custom events
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('register') === 'teacher') {
        setModalStep('teacher-register');
        setModalOpen(true);
      } else if (params.get('login') === 'teacher') {
        setModalStep('teacher-login');
        setModalOpen(true);
      }
    }

    const handleCustomOpen = (e: Event) => {
      const customEvent = e as CustomEvent<{ step?: 'choose' | 'teacher-login' | 'teacher-register' | 'student-login' }>;
      if (customEvent.detail?.step) {
        setModalStep(customEvent.detail.step);
      } else {
        setModalStep('choose');
      }
      setModalOpen(true);
    };

    window.addEventListener('open-auth-modal', handleCustomOpen);
    return () => window.removeEventListener('open-auth-modal', handleCustomOpen);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuWrapperRef.current && !menuWrapperRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  const handleLoginSuccess = useCallback((loggedInUser: User) => {
    setUser(loggedInUser);
  }, []);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    setUser(null);
    setMenuOpen(false);
  };

  // Logged out → show Login button
  if (!user) {
    return (
      <>
        <button
          className="login-header-btn"
          onClick={() => {
            setModalStep('choose');
            setModalOpen(true);
          }}
          title="Anmelden"
        >
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <span>Anmelden</span>
        </button>
        <LoginModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onLoginSuccess={handleLoginSuccess}
          initialStep={modalStep}
        />
      </>
    );
  }

  // Logged in -> show user badge + dropdown menu
  const displayLabel =
    user.role === 'admin'
      ? 'Admin'
      : user.role === 'teacher'
      ? (user.email || 'Lehrperson')
      : (user.code || 'Schüler:in');

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      {/* Prominenter Direkt-Link je nach Rolle */}
      {user.role === 'teacher' && (
        <Link
          href="/dashboard"
          className="nav-direct-dashboard-btn"
          title="Direkt zu deinem Dashboard & Klassen"
        >
          <svg
            viewBox="0 0 24 24"
            width="15"
            height="15"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
          </svg>
          <span>Mein Dashboard</span>
        </Link>
      )}

      {user.role === 'student' && (
        <Link
          href="/mein-fortschritt"
          className="nav-direct-dashboard-btn"
          title="Zu meinen Fortschritten & Aufgaben"
        >
          <svg
            viewBox="0 0 24 24"
            width="15"
            height="15"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
          </svg>
          <span>Mein Fortschritt</span>
        </Link>
      )}

      {user.role === 'admin' && (
        <Link
          href="/admin"
          className="nav-direct-dashboard-btn"
          title="Zum Admin-Bereich"
        >
          <span>Admin</span>
        </Link>
      )}

      {/* User Avatar / Dropdown Button */}
      <div className="login-user-wrapper" ref={menuWrapperRef}>
        <button
          className="login-user-btn"
          onClick={() => setMenuOpen((v) => !v)}
          title={displayLabel}
        >
          <span className="login-user-label">{displayLabel}</span>
          <svg
            viewBox="0 0 24 24"
            width="14"
            height="14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ transform: menuOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', marginLeft: 4 }}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        {menuOpen && (
          <div className="login-user-menu" style={{ minWidth: 240, padding: '6px 0', border: '1.5px solid var(--green-primary)' }}>
            {/* User profile header */}
            <div style={{ padding: '10px 16px 8px', borderBottom: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--green-dark)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {user.email || user.code || 'Angemeldet'}
              </div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.4px', marginTop: 2 }}>
                {user.role === 'teacher' ? 'Lehrperson' : user.role === 'admin' ? 'Administrator' : 'Schüler-Konto'}
              </div>
            </div>

            {/* Role-specific menu items */}
            {user.role === 'admin' && (
              <Link href="/admin" className="login-user-menu-item" onClick={() => setMenuOpen(false)}>
                Admin-Bereich
              </Link>
            )}

            {user.role === 'teacher' && (
              <>
                <Link href="/dashboard" className="login-user-menu-item" onClick={() => setMenuOpen(false)}>
                  Mein Dashboard &amp; Klassen
                </Link>
              </>
            )}

            {user.role === 'student' && (
              <>
                <Link href="/mein-fortschritt" className="login-user-menu-item" onClick={() => setMenuOpen(false)}>
                  Mein Fortschritt &amp; Aufgaben
                </Link>
                <Link href="/" className="login-user-menu-item" onClick={() => setMenuOpen(false)}>
                  Zu den Themen &amp; Fächern
                </Link>
              </>
            )}

            <button className="login-user-menu-item login-user-menu-logout" onClick={handleLogout}>
              Abmelden
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
