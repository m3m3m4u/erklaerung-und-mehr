import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { lehrberufeTopics, lehrberufeCategories } from '@/lib/lehrberufe-data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Lehrberufe & Berufsorientierung – Themen, Erklärungen & interaktive Übungen',
  description:
    'Finde deinen passenden Weg in die Arbeitswelt: Alles über das duale Ausbildungssystem, handwerkliche, technische, kaufmännische und soziale Berufe sowie Tipps für die perfekte Bewerbung und deine Rechte als Azubi.',
  alternates: {
    canonical: '/lehrberufe',
  },
  openGraph: {
    title: 'Lehrberufe & Berufsorientierung – Themen, Erklärungen & interaktive Übungen | Erklärung und mehr',
    description:
      'Finde deinen passenden Weg in die Arbeitswelt: Alles über das duale Ausbildungssystem, handwerkliche, technische, kaufmännische und soziale Berufe sowie Tipps für die perfekte Bewerbung und deine Rechte als Azubi.',
    url: '/lehrberufe',
    siteName: 'Erklärung und mehr',
    locale: 'de_AT',
    type: 'website',
    images: [
      {
        url: '/images/klasse-1.jpg',
        width: 800,
        height: 480,
        alt: 'Lehrberufe & Berufsorientierung – Erklärung und mehr',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lehrberufe & Berufsorientierung – Themen, Erklärungen & interaktive Übungen | Erklärung und mehr',
    description:
      'Finde deinen passenden Weg in die Arbeitswelt: Alles über das duale Ausbildungssystem, handwerkliche, technische, kaufmännische und soziale Berufe sowie Tipps für die perfekte Bewerbung und deine Rechte als Azubi.',
    images: ['/images/klasse-1.jpg'],
  },
};

export default function LehrberufeOverviewPage() {
  const allTopics = Object.values(lehrberufeTopics);

  return (
    <div className="site-wrapper">
      <Header activePath="/lehrberufe" />

      {/* Main Container */}
      <main className="content-container">
        {/* Intro Banner */}
        <section className="math-intro-banner">
          <div className="math-intro-content">
            <h1 className="math-page-title">Lehrberufe & Berufsorientierung</h1>
            <p className="math-page-desc">
              Finde deinen passenden Weg in die Arbeitswelt: Alles über das duale Ausbildungssystem, handwerkliche, technische, kaufmännische und soziale Berufe sowie Tipps für die perfekte Bewerbung und deine Rechte als Azubi.
            </p>
            <p className="math-page-note">
              Mit anschaulichen Erklärungen, Merksätzen und 58 interaktiven H5P-Übungsmodulen.
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
        {lehrberufeCategories.map((categoryName) => {
          const categoryTopics = allTopics.filter(
            (t) => t.category === categoryName
          );
          if (categoryTopics.length === 0) return null;

          return (
            <section
              key={categoryName}
              id={categoryName}
              className="math-category-section"
              style={{ scrollMarginTop: 80 }}
            >
              <h2 className="math-category-title">{categoryName}</h2>
              <div className="math-grid">
                {categoryTopics.map((topic) => (
                  <Link
                    key={topic.slug}
                    href={`/lehrberufe/${topic.slug}`}
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
          <h3>Arbeitsblätter, Arbeitshefte und weiteres Lernmaterial</h3>
          <p>
            Zu allen Themen findest du auf EDUKI passende Kopiervorlagen, Tests und Arbeitshefte zum Download.
          </p>
          <a
            href="https://eduki.com/de/autor/1430402/about-the-world-org?query=lehrberufe+berufsorientierung&t=3752"
            target="_blank"
            rel="noopener noreferrer"
            className="button-link"
            style={{ marginTop: '8px' }}
          >
            Zu den Lehrberufe-Materialien auf EDUKI
          </a>
        </section>
      </main>

      <Footer activePath="/lehrberufe" />
    </div>
  );
}
