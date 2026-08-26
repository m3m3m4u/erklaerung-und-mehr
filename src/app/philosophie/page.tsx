'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { philosophieTopics, philosophieCategories } from '@/lib/philosophie-data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PhilosophieOverviewPage() {
  const allTopics = Object.values(philosophieTopics);

  return (
    <div className="site-wrapper">
      <Header activePath="/philosophie" />

      {/* Main Container */}
      <main className="content-container">
        {/* Intro Banner */}
        <section className="math-intro-banner">
          <div className="math-intro-content">
            <h1 className="math-page-title">Philosophie & Ethik</h1>
            <p className="math-page-desc">
              Die Kunst des Fragens und vernünftigen Denkens: Von den antiken Meistern Sokrates, Platon und Aristoteles über Kants Aufklärung und Pflichtethik bis hin zu Existenzialismus, Utilitarismus, moderner Bio- und Medienethik sowie Staatsphilosophie.
            </p>
            <p className="math-page-note">
              Mit prägnanten Erläuterungen, Grundbegriffen und interaktiven H5P-Übungsmodulen.
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
          philosophieCategories.map((categoryName) => {
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
                      href={`/philosophie/${topic.slug}`}
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
          <h3>Arbeitsblätter, Textanalysen & Ethik-Materialien</h3>
          <p>
            Zu allen Themen der Philosophie und Ethik findest du auf EDUKI passende Primärtextanalysen, Dilemma-Diskussionen, Tests und Arbeitshefte zum Download.
          </p>
          <a
            href="https://eduki.com/de/autor/1430402/about-the-world-org?query=philosophie+ethik&t=3752"
            target="_blank"
            rel="noopener noreferrer"
            className="button-link"
            style={{ marginTop: '8px' }}
          >
            Zu den Philosophie-Materialien auf EDUKI
          </a>
        </section>
      </main>

      <Footer activePath="/philosophie" />
    </div>
  );
}
