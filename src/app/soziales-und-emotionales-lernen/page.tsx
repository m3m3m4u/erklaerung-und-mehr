'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { sozialesLernenTopics, sozialesLernenCategories } from '@/lib/soziales-lernen-data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SozialesLernenOverviewPage() {
  const allTopics = Object.values(sozialesLernenTopics);

  return (
    <div className="site-wrapper">
      <Header activePath="/soziales-und-emotionales-lernen" />

      {/* Main Container */}
      <main className="content-container">
        {/* Intro Banner */}
        <section className="math-intro-banner">
          <div className="math-intro-content">
            <h1 className="math-page-title">Soziales und emotionales Lernen</h1>
            <p className="math-page-desc">
              Kompetenzen fürs Leben: Man lernt nicht nur für Schulfächer, sondern für das echte Leben und das Miteinander. Hier geht es um Selbstwahrnehmung, den konstruktiven Umgang mit Wut und Trauer, Empathie, Freundschaft, Feedbackkultur, gewaltfreie Konfliktlösung, Zivilcourage gegen Mobbing und mitreißende Lernlieder.
            </p>
            <p className="math-page-note">
              Mit lebensnahen Fallbeispielen, Strategien für den Schulalltag und interaktiven H5P-Übungen.
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
          sozialesLernenCategories.map((categoryName) => {
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
                      href={`/soziales-und-emotionales-lernen/${topic.slug}`}
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
          <h3>Arbeitsblätter & Sozialkompetenz-Materialien</h3>
          <p>
            Zu allen Bereichen des sozialen und emotionalen Lernens, Klassenrats, Achtsamkeitsübungen und Konflikttrainings findest du auf EDUKI passende Arbeitsblätter, Reflexionsbögen und Spiele zum Download.
          </p>
          <a
            href="https://eduki.com/de/autor/1430402/about-the-world-org?query=soziales+lernen+emotionen&t=3752"
            target="_blank"
            rel="noopener noreferrer"
            className="button-link"
            style={{ marginTop: '8px' }}
          >
            Zu den Soziales-Lernen-Materialien auf EDUKI
          </a>
        </section>
      </main>

      <Footer activePath="/soziales-und-emotionales-lernen" />
    </div>
  );
}
