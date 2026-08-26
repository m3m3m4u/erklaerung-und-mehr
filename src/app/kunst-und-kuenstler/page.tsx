'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { kunstTopics, kunstCategories } from '@/lib/kunst-data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function KunstOverviewPage() {
  const allTopics = Object.values(kunstTopics);

  return (
    <div className="site-wrapper">
      <Header activePath="/kunst-und-kuenstler" />

      {/* Main Container */}
      <main className="content-container">
        {/* Intro Banner */}
        <section className="math-intro-banner">
          <div className="math-intro-content">
            <h1 className="math-page-title">Kunst und Künstler</h1>
            <p className="math-page-desc">
              Kreativität, Epochen und Meisterwerke: Von Renaissance, Barock, Impressionismus und Moderne über berühmte Gemälde und Skulpturen bis hin zu künstlerischen Techniken, Medien, Darstellungsformen und räumlicher Wahrnehmung.
            </p>
            <p className="math-page-note">
              Mit Bildanalysen, Stilmerkmalen, Biografien und interaktiven H5P-Übungen zu allen Kunstrichtungen.
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
        {
          kunstCategories.map((categoryName) => {
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
                      href={`/kunst-und-kuenstler/${topic.slug}`}
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
        }

        {/* Eduki Material Box */}
        <section className="info-box-section" style={{ marginTop: '40px' }}>
          <h3>Arbeitsblätter & Kunstunterricht-Materialien</h3>
          <p>
            Zu allen Epochen der Kunstgeschichte, Künstlerbiografien, Bildanalysen und praktischen Gestaltungsaufgaben findest du auf EDUKI passende Kopiervorlagen, Zeichenanleitungen und Arbeitshefte zum Download.
          </p>
          <a
            href="https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=&t=284"
            target="_blank"
            rel="noopener noreferrer"
            className="button-link"
            style={{ marginTop: '8px' }}
          >
            Zu den Kunst-Materialien auf EDUKI
          </a>
        </section>
      </main>

      <Footer activePath="/kunst-und-kuenstler" />
    </div>
  );
}
