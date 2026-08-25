'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { mathTopics, mathCategories } from '@/lib/math-data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function MathematikOverviewPage() {
  const allTopics = Object.values(mathTopics);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredTopics = allTopics.filter((topic) => {
    const matchesCategory =
      selectedCategory === 'all' || topic.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.keyPoints.some((kp) =>
        kp.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="site-wrapper">
      <Header activePath="/mathematik" />

      {/* Main Container */}
      <main className="content-container">
        {/* Intro Banner */}
        <section className="math-intro-banner">
          <div className="math-intro-content">
            <h1 className="math-page-title">Mathematik</h1>
            <p className="math-page-desc">
              Achja, dieses Thema. Viele empfinden Mathematik als schwierig. Aber
              ich verrate dir ein Geheimnis: Hat man erst einmal verstanden, wie
              Mathematik funktioniert, ist jede Rechenaufgabe ein Klacks.
            </p>
            <p className="math-page-note">
              Hier findest du alle Themen von den Grundlagen über Geometrie bis
              hin zu Algebra – mit Erklärungen, Merksätzen und interaktiven
              H5P-Übungen.
            </p>
          </div>
          <div className="image-placeholder math-mascot">
            <span>[M3 Lernmaskottchen]</span>
          </div>
        </section>

        {/* Filter & Search Bar */}
        <section
          style={{
            background: 'var(--bg-white)',
            border: '1px solid var(--border-light)',
            borderRadius: '4px',
            padding: '16px 20px',
            marginBottom: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
            <input
              type="text"
              placeholder="🔍 Thema suchen (z. B. Pythagoras, Bruch, KlaPuStri, Dreisatz...)"
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
          </div>

          {/* Category Filter Pills */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setSelectedCategory('all')}
              style={{
                padding: '6px 14px',
                borderRadius: '20px',
                border: '1px solid',
                borderColor:
                  selectedCategory === 'all'
                    ? 'var(--green-primary)'
                    : 'var(--border-light)',
                background:
                  selectedCategory === 'all'
                    ? 'var(--green-primary)'
                    : 'var(--bg-white)',
                color: selectedCategory === 'all' ? '#fff' : 'var(--text-color)',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              Alle Bereiche
            </button>
            {mathCategories.map((cat) => {
              const count = allTopics.filter((t) => t.category === cat).length;
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '20px',
                    border: '1px solid',
                    borderColor: isActive
                      ? 'var(--green-primary)'
                      : 'var(--border-light)',
                    background: isActive ? 'var(--green-primary)' : 'var(--bg-white)',
                    color: isActive ? '#fff' : 'var(--text-color)',
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </section>

        {/* Categories & Topics Grid */}
        {filteredTopics.length === 0 ? (
          <div className="info-box-section" style={{ textAlign: 'center', padding: '40px 20px' }}>
            <p style={{ fontSize: '16px', color: 'var(--text-muted)' }}>
              Keine Themen gefunden für deine Suche &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="button-link"
              style={{ marginTop: '12px' }}
            >
              Alle Themen anzeigen
            </button>
          </div>
        ) : (
          mathCategories.map((categoryName) => {
            const categoryTopics = filteredTopics.filter(
              (t) => t.category === categoryName
            );
            if (categoryTopics.length === 0) return null;

            return (
              <section key={categoryName} className="math-category-section">
                <h2 className="math-category-title">{categoryName}</h2>
                <div className="math-grid">
                  {categoryTopics.map((topic) => (
                    <Link
                      key={topic.slug}
                      href={`/mathematik/${topic.slug}`}
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
            );
          })
        )}

        {/* Eduki Material Box */}
        <section className="info-box-section" style={{ marginTop: '40px' }}>
          <h3>Arbeitsblätter, Arbeitshefte und weiteres Lernmaterial</h3>
          <p>
            Zu allen Themen der Mathematik findest du auf EDUKI passende
            Kopiervorlagen, Tests und Arbeitshefte zum Download.
          </p>
          <a
            href="https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=mathematik&t=1118"
            target="_blank"
            rel="noopener noreferrer"
            className="button-link"
            style={{ marginTop: '8px' }}
          >
            Zu den Mathe-Materialien auf EDUKI
          </a>
        </section>
      </main>

      {/* Footer */}
      <Footer activePath="/mathematik" />
    </div>
  );
}
