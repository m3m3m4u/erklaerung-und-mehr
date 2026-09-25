import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { medienTopics, medienCategories } from '@/lib/medien-data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: 'Medien – Themen, Erklärungen & interaktive Übungen',
  description:
    'Medienkompetenz, Kommunikation und Informationsgesellschaft: Von der Geschichte der Massenmedien (Buchdruck, Fotografie, Film, TV, Videospiele) über Medien in Wissenschaft, Kunst, Medizin und Wirtschaft bis hin zu Berichterstattung in Krisen, Zensur, Medienrecht und Datenschutz.',
  alternates: {
    canonical: '/medien',
  },
  openGraph: {
    title: 'Medien – Themen, Erklärungen & interaktive Übungen | Erklärung und mehr',
    description:
      'Medienkompetenz, Kommunikation und Informationsgesellschaft: Von der Geschichte der Massenmedien (Buchdruck, Fotografie, Film, TV, Videospiele) über Medien in Wissenschaft, Kunst, Medizin und Wirtschaft bis hin zu Berichterstattung in Krisen, Zensur, Medienrecht und Datenschutz.',
    url: '/medien',
    siteName: 'Erklärung und mehr',
    locale: 'de_AT',
    type: 'website',
    images: [
      {
        url: '/images/klasse-1.jpg',
        width: 800,
        height: 480,
        alt: 'Medien – Erklärung und mehr',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medien – Themen, Erklärungen & interaktive Übungen | Erklärung und mehr',
    description:
      'Medienkompetenz, Kommunikation und Informationsgesellschaft: Von der Geschichte der Massenmedien (Buchdruck, Fotografie, Film, TV, Videospiele) über Medien in Wissenschaft, Kunst, Medizin und Wirtschaft bis hin zu Berichterstattung in Krisen, Zensur, Medienrecht und Datenschutz.',
    images: ['/images/klasse-1.jpg'],
  },
};

export default function MedienOverviewPage() {
  const allTopics = Object.values(medienTopics);

  return (
    <div className="site-wrapper">
      <Header activePath="/medien" />

      {/* Main Container */}
      <main className="content-container">
        {/* Intro Banner */}
        <section className="math-intro-banner">
          <div className="math-intro-content">
            <h1 className="math-page-title">Medien</h1>
            <p className="math-page-desc">
              Medienkompetenz, Kommunikation und Informationsgesellschaft: Von der Geschichte der Massenmedien (Buchdruck, Fotografie, Film, TV, Videospiele) über Medien in Wissenschaft, Kunst, Medizin und Wirtschaft bis hin zu Berichterstattung in Krisen, Zensur, Medienrecht und Datenschutz.
            </p>
            <p className="math-page-note">
              Mit über 80 interaktiven H5P-Übungen zu Fake News, Fact-Checking, Social-Media-Algorithmen, Gaming, Journalismus und Medienrecht.
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
        {medienCategories.map((categoryName) => {
          const categoryTopics = allTopics.filter(
            (t) => t.category === categoryName
          );
          if (categoryTopics.length === 0) return null;

          return (
            <section key={categoryName} id={categoryName} className="math-category-section" style={{ scrollMarginTop: 80 }}>
              <h2 className="math-category-title">{categoryName}</h2>
              <div className="math-grid">
                {categoryTopics.map((topic) => (
                  <Link
                    key={topic.slug}
                    href={`/medien/${topic.slug}`}
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
          <h3>Arbeitsblätter & Medienbildung-Materialien</h3>
          <p>
            Zu allen Themen der Mediengeschichte, Fake News, Medienethik, Pressefreiheit und Journalismus findest du auf EDUKI passende Kopiervorlagen, Diskussionsanregungen und Unterrichtseinheiten zum Download.
          </p>
          <a
            href="https://eduki.com/de/autor/1430402/about-the-world-org?query=medien&t=1721"
            target="_blank"
            rel="noopener noreferrer"
            className="button-link"
            style={{ marginTop: '8px' }}
          >
            Zu den Medien-Materialien auf EDUKI
          </a>
        </section>
      </main>

      <Footer activePath="/medien" />
    </div>
  );
}
