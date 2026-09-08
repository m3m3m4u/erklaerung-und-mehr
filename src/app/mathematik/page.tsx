import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { mathTopics, mathCategories } from '@/lib/math-data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: 'Mathematik – Themen, Erklärungen & interaktive Übungen',
  description:
    'Achja, dieses Thema. Viele empfinden Mathematik als schwierig. Aber ich verrate dir ein Geheimnis: Hat man erst einmal verstanden, wie Mathematik funktioniert, ist jede Rechenaufgabe ein Klacks.',
  alternates: {
    canonical: '/mathematik',
  },
  openGraph: {
    title: 'Mathematik – Themen, Erklärungen & interaktive Übungen | Erklärung und mehr',
    description:
      'Achja, dieses Thema. Viele empfinden Mathematik als schwierig. Aber ich verrate dir ein Geheimnis: Hat man erst einmal verstanden, wie Mathematik funktioniert, ist jede Rechenaufgabe ein Klacks.',
    url: '/mathematik',
    siteName: 'Erklärung und mehr',
    locale: 'de_AT',
    type: 'website',
    images: [
      {
        url: '/images/klasse-1.jpg',
        width: 800,
        height: 480,
        alt: 'Mathematik – Erklärung und mehr',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mathematik – Themen, Erklärungen & interaktive Übungen | Erklärung und mehr',
    description:
      'Achja, dieses Thema. Viele empfinden Mathematik als schwierig. Aber ich verrate dir ein Geheimnis: Hat man erst einmal verstanden, wie Mathematik funktioniert, ist jede Rechenaufgabe ein Klacks.',
    images: ['/images/klasse-1.jpg'],
  },
};

export default function MathematikOverviewPage() {
  const allTopics = Object.values(mathTopics);

  return (
    <div className="site-wrapper">
      <Header activePath="/mathematik" />

      {/* Main Container */}
      <main className="content-container">
        {/* Intro Banner */}
        <section className="math-intro-banner">
          <div className="math-intro-content">
            <h1 className="math-page-title">Mathematik</h1>
            <p className="math-page-desc">
              Achja, dieses Thema. Viele empfinden Mathematik als schwierig. Aber
              ich verrate dir ein Geheimnis: Hat man erst einmal verstanden, wie
              Mathematik funktioniert, ist jede Rechenaufgabe ein Klacks.
            </p>
            <p className="math-page-note">
              Hier findest du alle Themen von den Grundlagen über Geometrie bis
              hin zu Algebra – mit Erklärungen, Merksätzen und interaktiven
              H5P-Übungen.
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
          mathCategories.map((categoryName) => {
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
                      href={`/mathematik/${topic.slug}`}
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
            Zu allen Themen der Mathematik findest du auf EDUKI passende
            Kopiervorlagen, Tests und Arbeitshefte zum Download.
          </p>
          <a
            href="https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=mathematik&t=1118"
            target="_blank"
            rel="noopener noreferrer"
            className="button-link"
            style={{ marginTop: '8px' }}
          >
            Zu den Mathe-Materialien auf EDUKI
          </a>
        </section>
      </main>

      {/* Footer */}
      <Footer activePath="/mathematik" />
    </div>
  );
}
