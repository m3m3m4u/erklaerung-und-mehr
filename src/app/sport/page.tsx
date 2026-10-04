import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { sportTopics, sportCategories } from '@/lib/sport-data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Sport & Bewegung – Sportarten, Regeln & interaktive Übungen',
  description:
    'Entdecke die Welt des Sports: Von beliebten Ballsportarten und Rückschlagspielen über Leichtathletik, Turnen, Winter- und Wassersport bis hin zur gesellschaftlichen Bedeutung von Bewegung und Fitness.',
  alternates: {
    canonical: '/sport',
  },
  openGraph: {
    title: 'Sport & Bewegung – Sportarten, Regeln & interaktive Übungen | Erklärung und mehr',
    description:
      'Entdecke die Welt des Sports: Von beliebten Ballsportarten und Rückschlagspielen über Leichtathletik, Turnen, Winter- und Wassersport bis hin zur gesellschaftlichen Bedeutung von Bewegung und Fitness.',
    url: '/sport',
    siteName: 'Erklärung und mehr',
    locale: 'de_AT',
    type: 'website',
    images: [
      {
        url: '/images/sport.png',
        width: 300,
        height: 200,
        alt: 'Sport & Bewegung – Erklärung und mehr',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sport & Bewegung – Sportarten, Regeln & interaktive Übungen | Erklärung und mehr',
    description:
      'Entdecke die Welt des Sports: Von beliebten Ballsportarten und Rückschlagspielen über Leichtathletik, Turnen, Winter- und Wassersport bis hin zur gesellschaftlichen Bedeutung von Bewegung und Fitness.',
    images: ['/images/sport.png'],
  },
};

export default function SportOverviewPage() {
  const allTopics = Object.values(sportTopics);
  const totalExercises = allTopics.reduce((sum, t) => sum + (t.exercises?.length || 0), 0);

  return (
    <div className="site-wrapper">
      <Header activePath="/sport" />

      {/* Main Container */}
      <main className="content-container">
        {/* Intro Banner */}
        <section className="math-intro-banner">
          <div className="math-intro-content">
            <h1 className="math-page-title">Sport & Bewegung</h1>
            <p className="math-page-desc">
              Entdecke die Welt des Sports: Von beliebten Ballsportarten und Rückschlagspielen über Leichtathletik, Turnen, Winter- und Wassersport bis hin zur gesellschaftlichen Bedeutung von Bewegung und Fitness.
            </p>
            <p className="math-page-note">
              Mit anschaulichen Erklärungen, Merksätzen und {totalExercises} interaktiven H5P-Übungsmodulen.
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

        {/* Topics Grid */}
        <section className="math-category-section">
          <div className="math-grid">
            {allTopics.map((topic) => (
              <Link
                key={topic.slug}
                href={`/sport/${topic.slug}`}
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
          <h3>Arbeitsblätter, Regelkunde und weiteres Lernmaterial</h3>
          <p>
            Zu vielen Themen findest du auf EDUKI passende Kopiervorlagen, Regelwerke und Arbeitshefte zum Download.
          </p>
          <a
            href="https://eduki.com/de/autor/1430402/about-the-world-org?query=sport&t=153"
            target="_blank"
            rel="noopener noreferrer"
            className="button-link"
            style={{ marginTop: '8px' }}
          >
            Zu den Sport-Materialien auf EDUKI
          </a>
        </section>
      </main>

      <Footer activePath="/sport" />
    </div>
  );
}
