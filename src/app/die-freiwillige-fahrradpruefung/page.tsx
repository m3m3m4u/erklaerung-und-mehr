import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { verkehrTopics, verkehrCategories } from '@/lib/verkehr-data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Freiwillige Fahrradprüfung & Verkehrserziehung – Themen, Erklärungen & interaktive Übungen',
  description:
    'Sicher und unfallfrei im Straßenverkehr unterwegs: Alles zur gesetzlichen Fahrradausrüstung, den wichtigsten Verkehrszeichen, Vorfahrtsregeln, dem sicheren Linksabbiegen in 8 Schritten, Bahnnetzen, E-Mobilität und nachhaltiger Logistik.',
  alternates: {
    canonical: '/die-freiwillige-fahrradpruefung',
  },
  openGraph: {
    title: 'Freiwillige Fahrradprüfung & Verkehrserziehung – Themen, Erklärungen & interaktive Übungen | Erklärung und mehr',
    description:
      'Sicher und unfallfrei im Straßenverkehr unterwegs: Alles zur gesetzlichen Fahrradausrüstung, den wichtigsten Verkehrszeichen, Vorfahrtsregeln, dem sicheren Linksabbiegen in 8 Schritten, Bahnnetzen, E-Mobilität und nachhaltiger Logistik.',
    url: '/die-freiwillige-fahrradpruefung',
    siteName: 'Erklärung und mehr',
    locale: 'de_AT',
    type: 'website',
    images: [
      {
        url: '/images/klasse-1.jpg',
        width: 800,
        height: 480,
        alt: 'Freiwillige Fahrradprüfung & Verkehrserziehung – Erklärung und mehr',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Freiwillige Fahrradprüfung & Verkehrserziehung – Themen, Erklärungen & interaktive Übungen | Erklärung und mehr',
    description:
      'Sicher und unfallfrei im Straßenverkehr unterwegs: Alles zur gesetzlichen Fahrradausrüstung, den wichtigsten Verkehrszeichen, Vorfahrtsregeln, dem sicheren Linksabbiegen in 8 Schritten, Bahnnetzen, E-Mobilität und nachhaltiger Logistik.',
    images: ['/images/klasse-1.jpg'],
  },
};

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
            <h1 className="math-page-title">Fahrradprüfung, Verkehr & Mobilität</h1>
            <p className="math-page-desc">
              Sicher und unfallfrei unterwegs: Alles zur gesetzlichen Fahrradausrüstung, Verkehrszeichen, Vorfahrtsregeln, dem Toten Winkel sowie Schienenverkehr, Automobilindustrie und nachhaltiger Zukunftslogistik.
            </p>
            <p className="math-page-note">
              Mit anschaulichen Erklärungen, Merksätzen und 34 interaktiven H5P-Übungsmodulen in 5 Themenbereichen.
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
        {verkehrCategories.map((categoryName) => {
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
          );
        })}

        {/* Eduki Material Box */}
        <section className="info-box-section" style={{ marginTop: '40px' }}>
          <h3>Arbeitsblätter, Fahrradprüfungsbögen & Verkehrsmaterialien</h3>
          <p>
            Zu allen Themen der Verkehrserziehung und Fahrradprüfung findest du auf EDUKI passende Kopiervorlagen, Tests und Prüfungsbögen zum Download.
          </p>
          <a
            href="https://eduki.com/de/autor/1430402/about-the-world-org?query=fahrradpruefung+verkehrserziehung&t=3752"
            target="_blank"
            rel="noopener noreferrer"
            className="button-link"
            style={{ marginTop: '8px' }}
          >
            Zu den Verkehr-Materialien auf EDUKI
          </a>
        </section>
      </main>

      <Footer activePath="/die-freiwillige-fahrradpruefung" />
    </div>
  );
}
