'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { technikTopics, technikCategories } from '@/lib/technik-data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TechnikOverviewPage() {
  const allTopics = Object.values(technikTopics);

  return (
    <div className="site-wrapper">
      <Header activePath="/technik" />

      {/* Main Container */}
      <main className="content-container">
        {/* Intro Banner */}
        <section className="math-intro-banner">
          <div className="math-intro-content">
            <h1 className="math-page-title">Technik</h1>
            <p className="math-page-desc">
              Erfindungsgeist, Werkstoffe und ingenieurmäßiges Denken: Von Metall- und Kunststoffverarbeitung über Hebel, Getriebe und Verbrennungsmotoren bis hin zu Elektrotechnik, Sensoren, Kraftfahrzeugen, erneuerbaren Energien und moderner Haushaltstechnik.
            </p>
            <p className="math-page-note">
              Mit praxisnahen Funktionsanalysen, technischen Zeichnungen, Sicherheitsregeln und 65 interaktiven H5P-Übungen.
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
        {technikCategories.map((categoryName) => {
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
                    href={`/technik/${topic.slug}`}
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
          <h3>Arbeitsblätter, Bauanleitungen & Werkunterricht-Materialien</h3>
          <p>
            Zu allen Themen des Technik- und Werkunterrichts, Werkstoffkunde, Maschinenelementen und Konstruktionsaufgaben findest du auf EDUKI passende Kopiervorlagen, Sicherheitsunterweisungen und Schülerversuche zum Download.
          </p>
          <a
            href="https://eduki.com/de/autor/1430402/about-the-world-org?query=technik&t=1251"
            target="_blank"
            rel="noopener noreferrer"
            className="button-link"
            style={{ marginTop: '8px' }}
          >
            Zu den Technik-Materialien auf EDUKI
          </a>
        </section>
      </main>

      <Footer activePath="/technik" />
    </div>
  );
}
