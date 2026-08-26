'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ernaehrungTopics } from '@/lib/ernaehrung-data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ErnaehrungOverviewPage() {
  const allTopics = Object.values(ernaehrungTopics);

  return (
    <div className="site-wrapper">
      <Header activePath="/ernaehrung" />

      {/* Main Container */}
      <main className="content-container">
        {/* Intro Banner */}
        <section className="math-intro-banner">
          <div className="math-intro-content">
            <h1 className="math-page-title">Ernährung</h1>
            <p className="math-page-desc">
              Gesund und bewusst leben: Von der Ernährungspyramide und den Makro- sowie Mikronährstoffen (Kohlenhydrate, Fette, Proteine, Vitamine, Mineralstoffe) über Lebensmittelkunde und moderne Ernährungsformen bis hin zum Verdauungssystem, Allergien und Gesundheit.
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
        <div className="math-grid">
            {allTopics.map((topic) => (
              <Link
                key={topic.slug}
                href={`/ernaehrung/${topic.slug}`}
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
        {/* Eduki Material Box */}
        <section className="info-box-section" style={{ marginTop: '40px' }}>
          <h3>Arbeitsblätter & Unterrichtsmaterialien</h3>
          <p>
            Zu allen Themen der Ernährungslehre, Nährstoffanalysen und gesunden Lebensweise findest du auf EDUKI passende Kopiervorlagen, Tests und strukturierte Arbeitshefte zum Download.
          </p>
          <a
            href="https://eduki.com/de/autor/1430402/about-the-world-org?query=ernaehrung&t=3752"
            target="_blank"
            rel="noopener noreferrer"
            className="button-link"
            style={{ marginTop: '8px' }}
          >
            Zu den Ernährung-Materialien auf EDUKI
          </a>
        </section>
      </main>

      <Footer activePath="/ernaehrung" />
    </div>
  );
}
