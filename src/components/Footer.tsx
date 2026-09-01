'use client';

import React from 'react';
import Link from 'next/link';

interface FooterProps {
  activePath?: string;
}

export default function Footer({ activePath }: FooterProps) {
  const handleOpenCookies = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('reopen_cookie_banner'));
    }
  };

  return (
    <footer className="main-footer">
      <div className="footer-inner">
        <div>
          <strong>Erklärung und mehr</strong> – Die Lernplattform
        </div>
        <div className="footer-social-links">
          <a
            href="https://www.youtube.com/@erklaerung-und-mehr"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            title="YouTube"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="social-icon">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            <span>YouTube</span>
          </a>
        </div>
        <div className="footer-links">
          <Link href="/datenschutz">Datenschutz</Link>
          <Link href="/impressum">Impressum</Link>
          <button
            type="button"
            onClick={handleOpenCookies}
            className="footer-cookie-btn"
          >
            Cookie-Einstellungen
          </button>
          <a
            href="https://eduki.com/de/autor/1430402/about-the-world-org?query=&t=3752"
            target="_blank"
            rel="noopener noreferrer"
          >
            Eduki
          </a>
        </div>
      </div>
    </footer>
  );
}
