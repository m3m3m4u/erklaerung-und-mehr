'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { physikTopics, physikCategories } from '@/lib/physik-data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PhysikOverviewPage() {
  const allTopics = Object.values(physikTopics);

  return (
    <div className="site-wrapper">
      <Header activePath="/physik" />

      {/* Main Container */}
      <main className="content-container">
        {/* Intro Banner */}
        <section className="math-intro-banner">
          <div className="math-intro-content">
            <h1 className="math-page-title">Physik</h1>
            <p className="math-page-desc">
              Die faszinierende Welt der Naturgesetze: Entdecke die Geheimnisse von Kräften,
              Bewegung, Licht, Wärme, Stromkreisen, Magnetismus und Atomphysik mit anschaulichen
              Erklärungen und interaktiven Übungen.
            </p>
            <p className="math-page-note">
              Experimentiere virtuell mit interaktiven H5P-Modulen und meistere Physik Schritt für Schritt.
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
          physikCategories.map((categoryName) => {
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
                      href={`/physik/${topic.slug}`}
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
            Zu allen Themen der Physik findest du auf EDUKI passende Kopiervorlagen,
            Versuchsanleitungen und Arbeitsblätter zum Download.
          </p>
          <a
            href="https://eduki.com/de/autor/1430402/about-the-world-org?query=&t=3752"
            target="_blank"
            rel="noopener noreferrer"
            className="button-link"
            style={{ marginTop: '8px' }}
          >
            Zu den Physik-Materialien auf EDUKI
          </a>
        </section>
      </main>

      <Footer activePath="/physik" />
    </div>
  );
}
