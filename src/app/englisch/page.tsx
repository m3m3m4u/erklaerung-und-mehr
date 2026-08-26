'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { englischTopics, englischCategories } from '@/lib/englisch-data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function EnglischOverviewPage() {
  const allTopics = Object.values(englischTopics);

  return (
    <div className="site-wrapper">
      <Header activePath="/englisch" />

      {/* Main Container */}
      <main className="content-container">
        {/* Intro Banner */}
        <section className="math-intro-banner">
          <div className="math-intro-content">
            <h1 className="math-page-title">Englisch</h1>
            <p className="math-page-desc">
              My English is not the yellow from the egg? Dann bist du hier genau richtig! Verbessere deine Sprachkenntnisse mit strukturierten Grammatikregeln, allen Zeitformen (Tenses & Mixed Tenses), Passive Voice, Uhrzeit, Vokabeltraining und spannender Musikgeschichte auf Englisch.
            </p>
            <p className="math-page-note">
              Mit klaren Beispielsätzen, Signalwörtern, Merksätzen und 35 interaktiven H5P-Übungen.
            </p>
          </div>
          <div className="math-mascot">
            <Image
              src="/images/kopernikus-daumen.png"
              alt="Kopernikus Maskottchen"
              width={100}
              height={130}
              className="math-mascot-img"
              priority
            />
          </div>
        </section>

        {/* Categories & Topics Grid */}
        {englischCategories.map((categoryName) => {
          const categoryTopics = allTopics.filter(
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
                    href={`/englisch/${topic.slug}`}
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
        })}

        {/* Eduki Material Box */}
        <section className="info-box-section" style={{ marginTop: '40px' }}>
          <h3>Worksheets, Grammar Practice & Teaching Materials</h3>
          <p>
            Zu allen Themen des Englischunterrichts, Grammatikübungen, Reading Comprehension und Vokabeltests findest du auf EDUKI passende Kopiervorlagen und Arbeitshefte zum Download.
          </p>
          <a
            href="https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=&t=468"
            target="_blank"
            rel="noopener noreferrer"
            className="button-link"
            style={{ marginTop: '8px' }}
          >
            Zu den Englisch-Materialien auf EDUKI
          </a>
        </section>
      </main>

      <Footer activePath="/englisch" />
    </div>
  );
}
