'use client';

import React, { useState, useEffect, useCallback } from 'react';
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
  const [menuOpen, setMenuOpen] = useState(false);

  // Load current session on mount
  useEffect(() => {
    fetch('/api/auth/me')
      .then((r) => r.json())
      .then((data) => setUser(data.user || null))
      .catch(() => setUser(null));
  }, []);

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
          onClick={() => setModalOpen(true)}
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
    <div className="login-user-wrapper">
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
        <div className="login-user-menu">
          {user.role === 'admin' ? (
            <Link href="/admin" className="login-user-menu-item" onClick={() => setMenuOpen(false)}>
              Admin-Bereich
            </Link>
          ) : user.role === 'teacher' ? (
            <Link href="/dashboard" className="login-user-menu-item" onClick={() => setMenuOpen(false)}>
              Mein Dashboard
            </Link>
          ) : (
            <Link href="/mein-fortschritt" className="login-user-menu-item" onClick={() => setMenuOpen(false)}>
              Mein Fortschritt
            </Link>
          )}
          <button className="login-user-menu-item login-user-menu-logout" onClick={handleLogout}>
            Abmelden
          </button>
        </div>
      )}
    </div>
  );
}
