import React from 'react';
import Link from 'next/link';

interface HeaderProps {
  activeTab?: 'home' | 'h5p-hub';
  onTabChange?: (tab: 'home' | 'h5p-hub') => void;
  activePath?: string;
}

export default function Header({ activeTab, onTabChange, activePath }: HeaderProps) {
  return (
    <header className="main-header">
      <div className="header-inner">
        <div className="brand">
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div className="brand-logo">M3</div>
            <div className="brand-titles">
              <span className="site-title">Erklärung und mehr</span>
              <span className="site-subtitle">Die Lernplattform</span>
            </div>
          </Link>
        </div>

        <nav className="site-nav">
          {onTabChange ? (
            <>
              <button
                type="button"
                onClick={() => onTabChange('home')}
                className={`nav-btn ${activeTab === 'home' ? 'active' : ''}`}
              >
                Startseite
              </button>
              <button
                type="button"
                onClick={() => onTabChange('h5p-hub')}
                className={`nav-btn ${activeTab === 'h5p-hub' ? 'active' : ''}`}
              >
                H5P Übungen & Player
              </button>
            </>
          ) : (
            <>
              <Link href="/" className={`nav-btn ${activePath === '/' ? 'active' : ''}`}>
                Startseite
              </Link>
              <Link
                href="/mathematik"
                className={`nav-btn ${activePath?.startsWith('/mathematik') ? 'active' : ''}`}
              >
                Mathematik
              </Link>
              <Link
                href="/informatik"
                className={`nav-btn ${activePath?.startsWith('/informatik') || activePath?.startsWith('/medien-und-informatik') ? 'active' : ''}`}
              >
                Informatik
              </Link>
              <Link
                href="/physik"
                className={`nav-btn ${activePath?.startsWith('/physik') ? 'active' : ''}`}
              >
                Physik
              </Link>
              <Link
                href="/chemie"
                className={`nav-btn ${activePath?.startsWith('/chemie') ? 'active' : ''}`}
              >
                Chemie
              </Link>
              <Link
                href="/biologie"
                className={`nav-btn ${activePath?.startsWith('/biologie') ? 'active' : ''}`}
              >
                Biologie
              </Link>
              <Link
                href="/geographie"
                className={`nav-btn ${activePath?.startsWith('/geographie') ? 'active' : ''}`}
              >
                Geographie
              </Link>
            </>
          )}
          <a
            href="https://eduki.com/de/autor/1430402/about-the-world-org?query=&t=3752"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-external"
          >
            Eduki Materialien
          </a>
        </nav>
      </div>
    </header>
  );
}
