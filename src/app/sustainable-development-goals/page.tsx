import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { klimaTopics } from '@/lib/klima-data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: 'Klima, Umwelt & SDGs – Themen, Erklärungen & interaktive Übungen',
  description:
    'Gemeinsam für eine lebenswerte Zukunft: Von den 17 globalen Nachhaltigkeitszielen (Sustainable Development Goals) der Vereinten Nationen über Klimazonen und Treibhauseffekt bis hin zu Ressourcenschutz, Kreislaufwirtschaft und sauberer Energie.',
  alternates: {
    canonical: '/sustainable-development-goals',
  },
  openGraph: {
    title: 'Klima, Umwelt & SDGs – Themen, Erklärungen & interaktive Übungen | Erklärung und mehr',
    description:
      'Gemeinsam für eine lebenswerte Zukunft: Von den 17 globalen Nachhaltigkeitszielen (Sustainable Development Goals) der Vereinten Nationen über Klimazonen und Treibhauseffekt bis hin zu Ressourcenschutz, Kreislaufwirtschaft und sauberer Energie.',
    url: '/sustainable-development-goals',
    siteName: 'Erklärung und mehr',
    locale: 'de_AT',
    type: 'website',
    images: [
      {
        url: '/images/klasse-1.jpg',
        width: 800,
        height: 480,
        alt: 'Klima, Umwelt & SDGs – Erklärung und mehr',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Klima, Umwelt & SDGs – Themen, Erklärungen & interaktive Übungen | Erklärung und mehr',
    description:
      'Gemeinsam für eine lebenswerte Zukunft: Von den 17 globalen Nachhaltigkeitszielen (Sustainable Development Goals) der Vereinten Nationen über Klimazonen und Treibhauseffekt bis hin zu Ressourcenschutz, Kreislaufwirtschaft und sauberer Energie.',
    images: ['/images/klasse-1.jpg'],
  },
};

export default function KlimaOverviewPage() {
  const allTopics = Object.values(klimaTopics);

  return (
    <div className="site-wrapper">
      <Header activePath="/sustainable-development-goals" />

      {/* Main Container */}
      <main className="content-container">
        {/* Intro Banner */}
        <section className="math-intro-banner">
          <div className="math-intro-content">
            <h1 className="math-page-title">Klima, Umwelt & SDGs</h1>
            <p className="math-page-desc">
              Gemeinsam für eine lebenswerte Zukunft: Von den 17 globalen Nachhaltigkeitszielen (Sustainable Development Goals) der Vereinten Nationen über Klimazonen und Treibhauseffekt bis hin zu Ressourcenschutz, Kreislaufwirtschaft und sauberer Energie.
            </p>
            <p className="math-page-note">
              Mit anschaulichen Erklärungen, Hintergrundberichten und interaktiven H5P-Lernmodulen.
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

        

        {/* Flat Grid: All 3 Topics in 1 Row */}
        <div className="math-grid">
            {allTopics.map((topic) => (
              <Link
                key={topic.slug}
                href={`/sustainable-development-goals/${topic.slug}`}
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
            Zu allen 17 Nachhaltigkeitszielen (SDGs), Klimaschutzprojekten und Umweltbildungs-Themen findest du auf EDUKI passende Kopiervorlagen, Stationenarbeiten und Arbeitsblätter zum Download.
          </p>
          <a
            href="https://eduki.com/de/material/1454278"
            target="_blank"
            rel="noopener noreferrer"
            className="button-link"
            style={{ marginTop: '8px' }}
          >
            Zu den SDG-Materialien auf EDUKI
          </a>
        </section>
      </main>

      <Footer activePath="/sustainable-development-goals" />
    </div>
  );
}
