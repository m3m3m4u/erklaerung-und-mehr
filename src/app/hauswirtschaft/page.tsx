'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { hauswirtschaftTopics } from '@/lib/hauswirtschaft-data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function HauswirtschaftOverviewPage() {
  const allTopics = Object.values(hauswirtschaftTopics);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredTopics = allTopics.filter((topic) => {
    const matchesSearch =
      searchQuery.trim() === '' ||
      topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.keyPoints.some((kp) =>
        kp.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesSearch;
  });

  return (
    <div className="site-wrapper">
      <Header activePath="/hauswirtschaft" />

      {/* Main Container */}
      <main className="content-container">
        {/* Intro Banner */}
        <section className="math-intro-banner">
          <div className="math-intro-content">
            <h1 className="math-page-title">Hauswirtschaft & Alltagskompetenz</h1>
            <p className="math-page-desc">
              Praktisches Wissen fürs Leben: Von der gesunden Ernährungspyramide und Küchenhygiene über die Haushaltsbudgetierung und Vermeidung von Schuldenfallen bis hin zur nachhaltigen Haushaltsführung und Textilpflege.
            </p>
            <p className="math-page-note">
              Mit anschaulichen Erklärungen, Merksätzen und interaktiven H5P-Übungsmodulen.
            </p>
          </div>
          <div className="image-placeholder math-mascot">
            <span>[Hauswirtschaft Lernmaskottchen]</span>
          </div>
        </section>

        {/* Search Bar */}
        <section
          style={{
            background: 'var(--bg-white)',
            border: '1px solid var(--border-light)',
            borderRadius: '4px',
            padding: '16px 20px',
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <input
            type="text"
            placeholder="🔍 Thema suchen..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              flex: '1 1 300px',
              padding: '10px 14px',
              borderRadius: '4px',
              border: '1px solid var(--border-light)',
              fontSize: '14px',
              outline: 'none',
            }}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              style={{
                padding: '8px 14px',
                background: '#f1f1f1',
                border: '1px solid var(--border-light)',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '13px',
              }}
            >
              Suche löschen
            </button>
          )}
        </section>

        {/* Direct Topics Grid */}
        {filteredTopics.length === 0 ? (
          <div className="info-box-section" style={{ textAlign: 'center', padding: '40px 20px' }}>
            <p style={{ fontSize: '16px', color: 'var(--text-muted)' }}>
              Keine Themen gefunden für deine Suche &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="button-link"
              style={{ marginTop: '12px' }}
            >
              Alle Themen anzeigen
            </button>
          </div>
        ) : (
          <section className="math-category-section">
            <div className="math-grid">
              {filteredTopics.map((topic) => (
                <Link
                  key={topic.slug}
                  href={`/hauswirtschaft/${topic.slug}`}
                  className="math-card"
                >
                  <div className="math-card-header">
                    <h3 className="math-card-title">{topic.title}</h3>
                    {topic.exercises.length > 0 && (
                      <span className="math-badge">
                        {topic.exercises.length}{' '}
                        {topic.exercises.length === 1 ? 'Übung' : 'Übungen'}
                      </span>
                    )}
                  </div>
                  <p className="math-card-desc">{topic.shortDesc}</p>
                  <div className="math-card-footer">
                    <span className="math-open-btn">Thema öffnen ➔</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Eduki Material Box */}
        <section className="info-box-section" style={{ marginTop: '40px' }}>
          <h3>Arbeitsblätter, Arbeitshefte und weiteres Lernmaterial</h3>
          <p>
            Zu allen Themen findest du auf EDUKI passende Kopiervorlagen, Tests und Arbeitshefte zum Download.
          </p>
          <a
            href="https://eduki.com/de/autor/1430402/about-the-world-org?query=hauswirtschaft+alltagskompetenz&t=3752"
            target="_blank"
            rel="noopener noreferrer"
            className="button-link"
            style={{ marginTop: '8px' }}
          >
            Zu den Hauswirtschafts-Materialien auf EDUKI
          </a>
        </section>
      </main>

      <Footer activePath="/hauswirtschaft" />
    </div>
  );
}
