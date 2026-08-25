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
        <div className="footer-links">
          <Link href="/">Startseite</Link>
          <Link href="/mathematik">Mathematik</Link>
          <Link href="/informatik">Informatik</Link>
          <Link href="/physik">Physik</Link>
          <Link href="/chemie">Chemie</Link>
          <Link href="/biologie">Biologie</Link>
          <Link href="/geographie">Geographie</Link>
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
