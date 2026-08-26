'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { verkehrTopics } from '@/lib/verkehr-data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function VerkehrOverviewPage() {
  const allTopics = Object.values(verkehrTopics);

  return (
    <div className="site-wrapper">
      <Header activePath="/die-freiwillige-fahrradpruefung" />

      {/* Main Container */}
      <main className="content-container">
        {/* Intro Banner */}
        <section className="math-intro-banner">
          <div className="math-intro-content">
            <h1 className="math-page-title">Freiwillige Fahrradprüfung & Verkehrserziehung</h1>
            <p className="math-page-desc">
              Sicher und unfallfrei im Straßenverkehr unterwegs: Alles zur gesetzlichen Fahrradausrüstung, den wichtigsten Verkehrszeichen, Vorfahrtsregeln, dem sicheren Linksabbiegen in 8 Schritten und dem Toten Winkel.
            </p>
            <p className="math-page-note">
              Mit anschaulichen Erklärungen, Merksätzen und interaktiven H5P-Übungsmodulen.
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

        

        {/* Direct Topics Grid */}
        <section className="math-category-section">
            <div className="math-grid">
              {allTopics.map((topic) => (
                <Link
                  key={topic.slug}
                  href={`/die-freiwillige-fahrradpruefung/${topic.slug}`}
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
        {/* Eduki Material Box */}
        <section className="info-box-section" style={{ marginTop: '40px' }}>
          <h3>Arbeitsblätter, Arbeitshefte und weiteres Lernmaterial</h3>
          <p>
            Zu allen Themen findest du auf EDUKI passende Kopiervorlagen, Tests und Arbeitshefte zum Download.
          </p>
          <a
            href="https://eduki.com/de/autor/1430402/about-the-world-org?query=fahrradpruefung+verkehrserziehung&t=3752"
            target="_blank"
            rel="noopener noreferrer"
            className="button-link"
            style={{ marginTop: '8px' }}
          >
            Zu den Fahrradprüfungs-Materialien auf EDUKI
          </a>
        </section>
      </main>

      <Footer activePath="/die-freiwillige-fahrradpruefung" />
    </div>
  );
}
