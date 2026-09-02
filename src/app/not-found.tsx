'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { subjectCategories } from '@/lib/subject-categories';

function SearchIcon({ className = "icon-svg" }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function InfoIcon({ className = "icon-svg" }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}

const allSubjects = subjectCategories.flatMap((cat) =>
  cat.items.map((item) => ({
    ...item,
    category: cat.category,
  }))
);

export default function NotFound() {
  const [searchQuery, setSearchQuery] = useState('');

  const query = searchQuery.trim().toLowerCase();
  const filteredSubjects = query
    ? allSubjects.filter((s) => {
        return (
          s.title.toLowerCase().includes(query) ||
          s.category.toLowerCase().includes(query) ||
          (s.keywords && s.keywords.some((k) => k.includes(query)))
        );
      })
    : [];

  return (
    <div className="site-wrapper">
      <Header />

      <main className="content-container">
        <div className="not-found-card">
          {/* Top Hero Section */}
          <div className="not-found-hero" style={{ marginBottom: 28 }}>
            <div className="not-found-code-badge">
              <span className="not-found-icon">
                <SearchIcon />
              </span>
              <span>Fehler 404</span>
            </div>

            <h1 className="not-found-title">
              Hier ist wohl etwas verloren gegangen!
            </h1>

            <p className="not-found-desc">
              Die von dir gesuchte Seite existiert leider nicht oder wurde verschoben.
              Keine Sorge – auf <strong>Erklärung und mehr</strong> findest du hunderte spannende Erklärungen
              und über 10.000 interaktive Übungen.
            </p>

            {/* Instant Search Bar */}
            <div className="not-found-search-box" style={{ marginBottom: 0 }}>
              <div className="not-found-search-input-wrap">
                <span className="search-icon-symbol">
                  <SearchIcon />
                </span>
                <input
                  type="text"
                  placeholder="Thema oder Fach eingeben (z. B. Bruchrechnen, Noten, Strom, Ötzi)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="not-found-search-input"
                  aria-label="Suchbegriff für Themen oder Fächer"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="not-found-search-clear"
                    title="Suche leeren"
                  >
                    ×
                  </button>
                )}
              </div>

              {/* Live search results */}
              {query && (
                <div className="not-found-search-results">
                  {filteredSubjects.length > 0 ? (
                    filteredSubjects.map((item) => (
                      <Link key={item.link} href={item.link} className="not-found-search-result-item">
                        <div
                          style={{
                            width: 52,
                            height: 35,
                            position: 'relative',
                            flexShrink: 0,
                            borderRadius: 6,
                            overflow: 'hidden',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'var(--bg-light, #f4f6f8)',
                          }}
                        >
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={52}
                            height={35}
                            style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                            unoptimized
                          />
                        </div>
                        <div className="not-found-result-info">
                          <strong>{item.title}</strong>
                          <span className="not-found-result-cat">{item.category}</span>
                        </div>
                        <span className="not-found-result-arrow">→</span>
                      </Link>
                    ))
                  ) : (
                    <div className="not-found-search-empty">
                      <p>Keine direkten Treffer für &ldquo;{searchQuery}&rdquo; gefunden.</p>
                      <Link href="/#h5p" className="not-found-search-empty-link">
                        Stattdessen den H5P-Übungskatalog durchstöbern →
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Themen und Lernfächer mit den normalen Icons der Startseite */}
          <section className="section-block" style={{ marginTop: 24 }}>
            <h2 className="section-main-heading">Themen und Lernfächer</h2>

            {subjectCategories.map((cat, idx) => (
              <div key={idx} className="category-group">
                <h3 className="category-heading">{cat.category}</h3>
                <div className="buttons-grid">
                  {cat.items.map((item, i) => (
                    <Link
                      key={i}
                      href={item.link}
                      className="subject-button-tile"
                      title={item.title}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={300}
                        height={200}
                        className="subject-button-img"
                        unoptimized
                      />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* Tip Box */}
          <div className="not-found-tip-box" style={{ marginTop: 32 }}>
            <div className="not-found-tip-icon">
              <InfoIcon />
            </div>
            <div className="not-found-tip-content">
              <strong>Tipp für Schüler & Lehrkräfte:</strong>
              <p>
                Suchst du nach einer bestimmten Übung aus dem Unterricht? Du kannst die Nummer der Übung
                auch direkt als Kurzadresse aufrufen (z. B. <code>/1</code> oder <code>/h5p-0001</code>).
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
