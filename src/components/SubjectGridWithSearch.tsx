'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { CategorySection } from '@/lib/subject-categories';

interface SubjectGridWithSearchProps {
  categories: CategorySection[];
}

export default function SubjectGridWithSearch({ categories }: SubjectGridWithSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const normalizedQuery = searchQuery.trim().toLowerCase();

  // All flat items for searching
  const allItems = useMemo(() => {
    const list: { item: CategorySection['items'][0]; category: string }[] = [];
    for (const cat of categories) {
      for (const it of cat.items) {
        list.push({ item: it, category: cat.category });
      }
    }
    return list;
  }, [categories]);

  // Filtered results
  const filteredItems = useMemo(() => {
    if (!normalizedQuery) return null;

    return allItems.filter(({ item, category }) => {
      if (item.title.toLowerCase().includes(normalizedQuery)) return true;
      if (category.toLowerCase().includes(normalizedQuery)) return true;
      if (item.keywords && item.keywords.some((kw) => kw.toLowerCase().includes(normalizedQuery))) {
        return true;
      }
      return false;
    });
  }, [allItems, normalizedQuery]);

  const totalSubjectsCount = allItems.length;

  return (
    <section className="section-block" style={{ marginTop: 24 }}>
      <div className="section-header-row" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px', marginBottom: '20px' }}>
        <div>
          <h2 className="section-main-heading" style={{ margin: 0 }}>Themen und Lernfächer</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', margin: '4px 0 0 0' }}>
            27 Schulfächer mit über 7.700 interaktiven Übungen und Erklärungen
          </p>
        </div>

        {/* Live Search Input */}
        <div style={{ position: 'relative', minWidth: '280px', maxWidth: '420px', flex: '1 1 300px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#ffffff',
              border: '2px solid #8cb82b',
              borderRadius: '24px',
              padding: '6px 14px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#8cb82b"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginRight: '8px', flexShrink: 0 }}
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Fach oder Thema suchen (z. B. Sport, Bruchrechnen, KI...)"
              aria-label="Schulfächer durchsuchen"
              style={{
                border: 'none',
                outline: 'none',
                width: '100%',
                fontSize: '0.95rem',
                backgroundColor: 'transparent',
                color: 'var(--text-color, #333333)',
              }}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="Suche zurücksetzen"
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#888888',
                  cursor: 'pointer',
                  fontSize: '16px',
                  lineHeight: 1,
                  padding: '2px 4px',
                }}
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>

      {/* FILTERED VIEW */}
      {filteredItems !== null ? (
        <div style={{ marginTop: '16px' }}>
          <div style={{ marginBottom: '14px', fontSize: '0.92rem', color: 'var(--text-muted)' }}>
            {filteredItems.length === 1
              ? '1 passendes Fach gefunden:'
              : `${filteredItems.length} von ${totalSubjectsCount} Fächern gefunden:`}
          </div>

          {filteredItems.length > 0 ? (
            <div className="buttons-grid">
              {filteredItems.map(({ item }, i) => (
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
          ) : (
            <div
              style={{
                textAlign: 'center',
                padding: '40px 20px',
                backgroundColor: '#f9fbf4',
                borderRadius: '12px',
                border: '1px dashed #c0d890',
              }}
            >
              <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-color)', marginBottom: '8px' }}>
                Kein Schulfach zu &quot;{searchQuery}&quot; gefunden.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '14px' }}>
                Probiere einen anderen Begriff wie z. B. &quot;Biologie&quot;, &quot;Sport&quot;, &quot;Geographie&quot;, &quot;Mathematik&quot; oder &quot;Geschichte&quot;.
              </p>
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="button-link"
                style={{ cursor: 'pointer', border: 'none' }}
              >
                Alle 27 Schulfächer anzeigen
              </button>
            </div>
          )}
        </div>
      ) : (
        /* STANDARD CATEGORY GROUP VIEW */
        categories.map((cat, idx) => (
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
        ))
      )}
    </section>
  );
}
