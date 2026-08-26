'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { geschichteTopics, geschichteCategories } from '@/lib/geschichte-data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function GeschichteOverviewPage() {
  const allTopics = Object.values(geschichteTopics);

  return (
    <div className="site-wrapper">
      <Header activePath="/geschichte" />

      {/* Main Container */}
      <main className="content-container">
        {/* Intro Banner */}
        <section className="math-intro-banner">
          <div className="math-intro-content">
            <h1 className="math-page-title">Geschichte</h1>
            <p className="math-page-desc">
              Reise durch die Epochen der Menschheit: Von der Steinzeit und den Hochkulturen der Antike über das Mittelalter, die Französische Revolution und das Kaiserreich bis hin zu den Weltkriegen, der NS-Diktatur, dem Kalten Krieg und der Deutschen Einheit.
            </p>
            <p className="math-page-note">
              Mit anschaulichen Erklärungen, Zeitleisten, Merksätzen und interaktiven H5P-Übungsmodulen.
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
          geschichteCategories.map((categoryName) => {
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
                      href={`/geschichte/${topic.slug}`}
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
          <h3>Arbeitsblätter, Arbeitshefte und weiteres Lernmaterial</h3>
          <p>
            Zu allen geschichtlichen Epochen und Themen findest du auf EDUKI passende Kopiervorlagen, Quellenanalysen, Tests und Arbeitshefte zum Download.
          </p>
          <a
            href="https://eduki.com/de/autor/1430402/about-the-world-org?query=geschichte&t=3752"
            target="_blank"
            rel="noopener noreferrer"
            className="button-link"
            style={{ marginTop: '8px' }}
          >
            Zu den Geschichte-Materialien auf EDUKI
          </a>
        </section>
      </main>

      <Footer activePath="/geschichte" />
    </div>
  );
}
