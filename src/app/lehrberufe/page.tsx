'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { lehrberufeTopics, lehrberufeCategories } from '@/lib/lehrberufe-data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function LehrberufeOverviewPage() {
  const allTopics = Object.values(lehrberufeTopics);
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
      <Header activePath="/lehrberufe" />

      {/* Main Container */}
      <main className="content-container">
        {/* Intro Banner */}
        <section className="math-intro-banner">
          <div className="math-intro-content">
            <h1 className="math-page-title">Lehrberufe & Berufsorientierung</h1>
            <p className="math-page-desc">
              Finde deinen passenden Weg in die Arbeitswelt: Alles über das duale Ausbildungssystem, handwerkliche, technische, kaufmännische und soziale Berufe sowie Tipps für die perfekte Bewerbung und deine Rechte als Azubi.
            </p>
            <p className="math-page-note">
              Mit anschaulichen Berufsbildern, interaktiven Übungen und Bewerbungshilfen.
            </p>
          </div>
          <div className="image-placeholder math-mascot">
            <span>[Lehrberufe & Ausbildung]</span>
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
              placeholder="🔍 Beruf oder Thema suchen..."
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
                borderColor: selectedCategory === 'all' ? 'var(--green-primary)' : 'var(--border-light)',
                background: selectedCategory === 'all' ? 'var(--green-primary)' : 'var(--bg-surface)',
                color: selectedCategory === 'all' ? '#ffffff' : 'var(--text-main)',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Alle Themen ({allTopics.length})
            </button>
            {lehrberufeCategories.map((cat) => {
              const count = allTopics.filter((t) => t.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '20px',
                    border: '1px solid',
                    borderColor: selectedCategory === cat ? 'var(--green-primary)' : 'var(--border-light)',
                    background: selectedCategory === cat ? 'var(--green-primary)' : 'var(--bg-surface)',
                    color: selectedCategory === cat ? '#ffffff' : 'var(--text-main)',
                    fontSize: '13px',
                    fontWeight: 500,
                    cursor: 'pointer',
                  }}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        </section>

        {/* Topics Grid */}
        <section className="math-grid-section">
          {filteredTopics.length === 0 ? (
            <div
              style={{
                padding: '40px',
                textAlign: 'center',
                background: 'var(--bg-white)',
                border: '1px solid var(--border-light)',
                borderRadius: '4px',
              }}
            >
              <h3>Keine Themen gefunden</h3>
              <p>Probiere einen anderen Suchbegriff oder setze den Filter zurück.</p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                style={{
                  marginTop: '12px',
                  padding: '8px 16px',
                  background: 'var(--green-primary)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                Filter zurücksetzen
              </button>
            </div>
          ) : (
            <div className="math-cards-grid">
              {filteredTopics.map((topic) => (
                <article key={topic.slug} className="math-card">
                  <div className="math-card-header">
                    <span className="math-card-badge">{topic.category}</span>
                    <span
                      style={{
                        fontSize: '12px',
                        color: 'var(--text-muted)',
                        fontWeight: 600,
                      }}
                    >
                      {topic.exercises.length} {topic.exercises.length === 1 ? 'Übung' : 'Übungen'}
                    </span>
                  </div>
                  <div className="math-card-body">
                    <h2 className="math-card-title">{topic.title}</h2>
                    <p className="math-card-desc">{topic.shortDesc}</p>
                    <ul className="math-keypoints-list">
                      {topic.keyPoints.slice(0, 3).map((kp, idx) => (
                        <li key={idx}>{kp}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="math-card-footer">
                    <Link
                      href={`/lehrberufe/${topic.slug}`}
                      className="math-learn-btn"
                    >
                      <span>Thema öffnen & Übungen</span>
                      <svg
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <Footer activePath="/lehrberufe" />
    </div>
  );
}
