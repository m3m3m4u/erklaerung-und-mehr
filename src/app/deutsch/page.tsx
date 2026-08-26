'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { deutschTopics, deutschCategories } from '@/lib/deutsch-data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function DeutschOverviewPage() {
  const allTopics = Object.values(deutschTopics);

  return (
    <div className="site-wrapper">
      <Header activePath="/deutsch" />

      {/* Main Container */}
      <main className="content-container">
        {/* Intro Banner */}
        <section className="math-intro-banner">
          <div className="math-intro-content">
            <h1 className="math-page-title">Deutsch</h1>
            <p className="math-page-desc">
              Sprachgewandt und literatursicher: Von den Grundregeln der deutschen Grammatik (Wortarten, Satzglieder, Kommasetzung) und den 6 Zeitformen des Verbs über die großen Epochen der Literaturgeschichte bis hin zu Meisterwerken und Tiefeninterpretationen von Goethe, Schiller, Lessing, Büchner, Kafka, Fontane, Thomas Mann und Jenny Erpenbeck.
            </p>
            <p className="math-page-note">
              Mit präzisen Erklärungen, Lektüreschlüsseln, Gedichtsanalysen und über 130 interaktiven H5P-Übungen.
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
        {deutschCategories.map((categoryName) => {
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
                    href={`/deutsch/${topic.slug}`}
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
          <h3>Arbeitsblätter, Lektürehilfen & Deutschunterricht-Materialien</h3>
          <p>
            Zu allen Themen des Deutschunterrichts, Grammatiktraining, Rechtschreibstrategien und Abiturlektüren findest du auf EDUKI passende Kopiervorlagen, Klassenarbeiten und Arbeitshefte zum Download.
          </p>
          <a
            href="https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=&t=284"
            target="_blank"
            rel="noopener noreferrer"
            className="button-link"
            style={{ marginTop: '8px' }}
          >
            Zu den Deutsch-Materialien auf EDUKI
          </a>
        </section>
      </main>

      <Footer activePath="/deutsch" />
    </div>
  );
}
