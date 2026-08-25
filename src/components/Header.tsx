'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Image from 'next/image';

interface HeaderProps {
  activeTab?: 'home' | 'h5p-hub';
  onTabChange?: (tab: 'home' | 'h5p-hub') => void;
  activePath?: string;
}

interface MenuItem {
  title: string;
  href: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

interface MenuColumn {
  categories: MenuCategory[];
}

const megaMenuColumns: MenuColumn[] = [
  {
    categories: [
      {
        title: 'Naturwissenschaften',
        items: [
          { title: 'Physik', href: '/physik' },
          { title: 'Biologie', href: '/biologie' },
          { title: 'Chemie', href: '/chemie' },
          { title: 'Geographie', href: '/geographie' },
        ],
      },
      {
        title: 'Sachkunde',
        items: [
          { title: 'Politik & Gesellschaft', href: '/politik-und-gesellschaft' },
          { title: 'Verkehrserziehung', href: '/die-freiwillige-fahrradpruefung' },
          { title: 'Hauswirtschaft', href: '/hauswirtschaft' },
          { title: 'Lehrberufe', href: '/lehrberufe' },
        ],
      },
    ],
  },
  {
    categories: [
      {
        title: 'Mensch & Gesellschaft',
        items: [
          { title: 'Geschichte', href: '/geschichte' },
          { title: 'Wirtschaft', href: '/wirtschaft' },
          { title: 'Ernährung', href: '/ernaehrung' },
          { title: 'Philosophie', href: '/philosophie' },
          { title: 'Psychologie', href: '/psychologie' },
          { title: 'Religion', href: '/religion' },
          { title: 'Ethik', href: '/ethik' },
          { title: 'Soziales und emotionales Lernen', href: '/soziales-und-emotionales-lernen' },
          { title: 'Klima und Umwelt', href: '/sustainable-development-goals' },
          { title: 'Bedeutende Persönlichkeiten', href: '/wichtige-persoenlichkeiten-der-geschichte' },
        ],
      },
      {
        title: 'Kunst',
        items: [
          { title: 'Musik', href: '/musik' },
          { title: 'Kunst & Künstler', href: '/kunst-und-kuenstler' },
        ],
      },
    ],
  },
  {
    categories: [
      {
        title: 'Technik & Medien',
        items: [
          { title: 'Technik', href: '/technik' },
          { title: 'Mathematik', href: '/mathematik' },
          { title: 'Informatik', href: '/informatik' },
          { title: 'Medien', href: '/medien' },
        ],
      },
      {
        title: 'Sprachen',
        items: [
          { title: 'Deutsch', href: '/deutsch' },
          { title: 'Englisch', href: '/englisch' },
          { title: 'Französisch', href: '/franzoesisch' },
          { title: 'Spanisch', href: '/spanisch' },
        ],
      },
    ],
  },
];

export default function Header({ activeTab, onTabChange, activePath }: HeaderProps) {
  const [isThemenOpen, setIsThemenOpen] = useState(false);
  const pathname = usePathname();
  const currentPath = activePath || pathname || '';
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close dropdown on route change
  useEffect(() => {
    setIsThemenOpen(false);
  }, [pathname]);

  // Click outside to close
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsThemenOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsThemenOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setIsThemenOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsThemenOpen(false);
    }, 200);
  };

  return (
    <header className="main-header" onMouseLeave={handleMouseLeave}>
      <div className="header-inner">
        <div className="brand">
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div className="brand-logo-wrapper">
              <Image
                src="/images/favicon.png"
                alt="Erklärung und mehr"
                width={52}
                height={52}
                className="brand-favicon"
                priority
              />
            </div>
            <div className="brand-titles">
              <span className="site-title">Erklärung und mehr</span>
            </div>
          </Link>
        </div>

        <nav className="site-nav">
          {/* THEMEN Mega Menu Trigger */}
          <div className="themen-menu-wrapper" onMouseEnter={handleMouseEnter}>
            <button
              ref={triggerRef}
              type="button"
              onClick={() => setIsThemenOpen((prev) => !prev)}
              aria-expanded={isThemenOpen}
              aria-haspopup="true"
              className={`nav-btn themen-toggle-btn ${isThemenOpen ? 'themen-open active' : ''}`}
            >
              <svg
                className="themen-icon-bars"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
              <span>THEMEN</span>
              <svg
                className={`themen-icon-arrow ${isThemenOpen ? 'arrow-rotated' : ''}`}
                viewBox="0 0 24 24"
                width="16"
                height="16"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>

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

      {/* Mega Dropdown Menu */}
      {isThemenOpen && (
        <div
          ref={dropdownRef}
          className="mega-menu-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="mega-menu-inner">
            <div className="mega-menu-grid">
              {megaMenuColumns.map((col, colIdx) => (
                <div key={colIdx} className="mega-menu-column">
                  {col.categories.map((cat) => (
                    <div key={cat.title} className="mega-menu-category">
                      <h3 className="mega-category-title">{cat.title}</h3>
                      <ul className="mega-category-list">
                        {cat.items.map((item) => (
                          <li key={item.title}>
                            <Link
                              href={item.href}
                              onClick={() => setIsThemenOpen(false)}
                              className="mega-category-link"
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
