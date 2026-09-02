'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Clean SVG Icons without any emojis
function SearchIcon({ className = "icon-svg" }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function HomeIcon({ className = "icon-svg" }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function TargetIcon({ className = "icon-svg" }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function SparkleIcon({ className = "icon-svg" }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
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

function MathIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="12" y1="4" x2="12" y2="20" />
    </svg>
  );
}

function HistoryIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function MusicIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

function PhysicsIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function BiologyIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function ChemistryIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 2v7.31L4.19 19A2 2 0 0 0 6 22h12a2 2 0 0 0 1.81-3L14 9.31V2" />
      <line x1="8" y1="2" x2="16" y2="2" />
      <line x1="6" y1="16" x2="18" y2="16" />
    </svg>
  );
}

function GeographyIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function GermanIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

function EnglishIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function BikeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="5.5" cy="17.5" r="3.5" />
      <circle cx="18.5" cy="17.5" r="3.5" />
      <path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5L9 9l3-3h3l2 4" />
      <path d="M5.5 17.5h6l3.5-6.5" />
    </svg>
  );
}

function InformaticsIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}

interface QuickSubject {
  title: string;
  category: string;
  href: string;
  iconComponent: React.ReactNode;
  keywords: string[];
  desc: string;
}

const subjectsList: QuickSubject[] = [
  {
    title: 'Mathematik',
    category: 'Technik & Mathematik',
    href: '/mathematik',
    iconComponent: <MathIcon />,
    keywords: ['mathe', 'rechnen', 'geometrie', 'zahlen', 'brüche', 'terme', 'gleichungen', 'prozent', 'funktionen', 'pythagoras', 'statistik'],
    desc: 'Zahlen, Terme, Geometrie, Bruchrechnen und viele interaktive Übungsaufgaben.',
  },
  {
    title: 'Geschichte',
    category: 'Mensch & Gesellschaft',
    href: '/geschichte',
    iconComponent: <HistoryIcon />,
    keywords: ['geschichte', 'epochen', 'steinzeit', 'antike', 'mittelalter', 'neuzeit', 'weltkrieg', 'römer', 'ägypten', 'revolution', 'kaiserreich'],
    desc: 'Von der Steinzeit über das Mittelalter bis zur modernen Zeitgeschichte.',
  },
  {
    title: 'Musik & Rhythmus',
    category: 'Kunst',
    href: '/musik',
    iconComponent: <MusicIcon />,
    keywords: ['musik', 'noten', 'tonhöhe', 'rhythmus', 'klavier', 'instrumente', 'schlagzeug', 'komponisten', 'dur', 'moll', 'gehörbildung'],
    desc: 'Noten lesen, Instrumente kennenlernen, Rhythmusgefühl und Musikgeschichte.',
  },
  {
    title: 'Physik',
    category: 'Naturwissenschaften',
    href: '/physik',
    iconComponent: <PhysicsIcon />,
    keywords: ['physik', 'strom', 'elektrizität', 'magnetismus', 'mechanik', 'kräfte', 'optik', 'licht', 'wärme', 'energie', 'atom'],
    desc: 'Mechanik, Stromkreise, Optik, Magnetismus und anschauliche Experimente.',
  },
  {
    title: 'Biologie',
    category: 'Naturwissenschaften',
    href: '/biologie',
    iconComponent: <BiologyIcon />,
    keywords: ['biologie', 'tiere', 'pflanzen', 'mensch', 'körper', 'zellen', 'genetik', 'evolution', 'ökologie', 'sinnesorgane', 'herz'],
    desc: 'Der menschliche Körper, Tiere, Pflanzen, Ökologie und die Natur verstehen.',
  },
  {
    title: 'Chemie',
    category: 'Naturwissenschaften',
    href: '/chemie',
    iconComponent: <ChemistryIcon />,
    keywords: ['chemie', 'elemente', 'periodensystem', 'stoffe', 'reaktionen', 'säuren', 'basen', 'atome', 'moleküle', 'metalle'],
    desc: 'Chemische Reaktionen, Periodensystem, Bindungen und Stoffe.',
  },
  {
    title: 'Geographie',
    category: 'Naturwissenschaften',
    href: '/geographie',
    iconComponent: <GeographyIcon />,
    keywords: ['geographie', 'erdkunde', 'österreich', 'deutschland', 'europa', 'länder', 'kontinente', 'städte', 'klima', 'vulkane', 'karten'],
    desc: 'Länder, Kontinente, Geographie Österreichs und die Erde erforschen.',
  },
  {
    title: 'Deutsch',
    category: 'Sprachen',
    href: '/deutsch',
    iconComponent: <GermanIcon />,
    keywords: ['deutsch', 'grammatik', 'rechtschreibung', 'zeitformen', 'satzglieder', 'kommasetzung', 'texte', 'lesen'],
    desc: 'Grammatikregeln, Rechtschreibung, Zeitformen und Satzglieder trainieren.',
  },
  {
    title: 'Englisch',
    category: 'Sprachen',
    href: '/englisch',
    iconComponent: <EnglishIcon />,
    keywords: ['englisch', 'english', 'grammar', 'tenses', 'vocabulary', 'vokabeln', 'irregular verbs', 'simple past'],
    desc: 'Englische Grammatik, Zeiten, Vokabelübungen und Sprachverständnis.',
  },
  {
    title: 'Freiwillige Fahrradprüfung',
    category: 'Sachkunde',
    href: '/die-freiwillige-fahrradpruefung',
    iconComponent: <BikeIcon />,
    keywords: ['fahrrad', 'rad', 'verkehr', 'fahrradprüfung', 'verkehrszeichen', 'schilder', 'vorrang', 'helm', 'sicherheit'],
    desc: 'Alles für die Fahrradprüfung: Verkehrszeichen, Vorrangregeln und Quizze.',
  },
  {
    title: 'Medien & Informatik',
    category: 'Technik & Mathematik',
    href: '/medien-und-informatik',
    iconComponent: <InformaticsIcon />,
    keywords: ['informatik', 'medien', 'computer', 'internet', 'hardware', 'software', 'programmierung', 'sicherheit', 'ki'],
    desc: 'Digitale Welt, Computer-Grundlagen, Datenschutz und Medientechnik.',
  },
  {
    title: 'KI SchulGenie',
    category: 'Spezial',
    href: '/ki-schulgenie',
    iconComponent: <SparkleIcon />,
    keywords: ['ki', 'künstliche intelligenz', 'schulgenie', 'helfer', 'assistent', 'lernen', 'erklärungen'],
    desc: 'Dein intelligenter Lernbegleiter für Fragen, Hausaufgaben und Erklärungen.',
  },
];

export default function NotFound() {
  const [searchQuery, setSearchQuery] = useState('');

  const query = searchQuery.trim().toLowerCase();
  const filteredSubjects = query
    ? subjectsList.filter((s) => {
        return (
          s.title.toLowerCase().includes(query) ||
          s.category.toLowerCase().includes(query) ||
          s.desc.toLowerCase().includes(query) ||
          s.keywords.some((k) => k.includes(query))
        );
      })
    : [];

  return (
    <div className="site-wrapper">
      <Header />

      <main className="content-container">
        <div className="not-found-card">
          {/* Top Hero Section */}
          <div className="not-found-hero">
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
            <div className="not-found-search-box">
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
                      <Link key={item.href} href={item.href} className="not-found-search-result-item">
                        <span className="not-found-result-icon">{item.iconComponent}</span>
                        <div className="not-found-result-info">
                          <strong>{item.title}</strong>
                          <span className="not-found-result-cat">{item.category}</span>
                          <p>{item.desc}</p>
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

            {/* Action Buttons */}
            <div className="not-found-actions">
              <Link href="/" className="not-found-btn not-found-btn-primary">
                <HomeIcon />
                <span>Zur Startseite</span>
              </Link>
              <Link href="/#h5p" className="not-found-btn not-found-btn-secondary">
                <TargetIcon />
                <span>Alle H5P-Übungen</span>
              </Link>
              <Link href="/ki-schulgenie" className="not-found-btn not-found-btn-accent">
                <SparkleIcon />
                <span>KI SchulGenie</span>
              </Link>
            </div>
          </div>

          {/* Quick Subject Grid */}
          <div className="not-found-grid-section">
            <h2 className="not-found-grid-heading">
              Direkt zu den beliebtesten Fachbereichen
            </h2>

            <div className="not-found-grid">
              {subjectsList.map((subj) => (
                <Link key={subj.href} href={subj.href} className="not-found-grid-card">
                  <div className="not-found-card-header">
                    <span className="not-found-card-icon">{subj.iconComponent}</span>
                    <div>
                      <h3 className="not-found-card-title">{subj.title}</h3>
                      <span className="not-found-card-category">{subj.category}</span>
                    </div>
                  </div>
                  <p className="not-found-card-desc">{subj.desc}</p>
                  <span className="not-found-card-link">Fach öffnen →</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Tip Box */}
          <div className="not-found-tip-box">
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
