import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { musikTopics, musikCategories } from '@/lib/musik-data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: 'Musik – Themen, Erklärungen & interaktive Übungen',
  description:
    'Die faszinierende Welt der Klänge: Von Musikinstrumenten und Notenlehre über die großen Epochen der Musikgeschichte und unvergessliche Meisterwerke von Bach, Mozart und Beethoven bis hin zu Opern, Musicals, Jazz, Blues, Rock und Pop.',
  alternates: {
    canonical: '/musik',
  },
  openGraph: {
    title: 'Musik – Themen, Erklärungen & interaktive Übungen | Erklärung und mehr',
    description:
      'Die faszinierende Welt der Klänge: Von Musikinstrumenten und Notenlehre über die großen Epochen der Musikgeschichte und unvergessliche Meisterwerke von Bach, Mozart und Beethoven bis hin zu Opern, Musicals, Jazz, Blues, Rock und Pop.',
    url: '/musik',
    siteName: 'Erklärung und mehr',
    locale: 'de_AT',
    type: 'website',
    images: [
      {
        url: '/images/klasse-1.jpg',
        width: 800,
        height: 480,
        alt: 'Musik – Erklärung und mehr',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Musik – Themen, Erklärungen & interaktive Übungen | Erklärung und mehr',
    description:
      'Die faszinierende Welt der Klänge: Von Musikinstrumenten und Notenlehre über die großen Epochen der Musikgeschichte und unvergessliche Meisterwerke von Bach, Mozart und Beethoven bis hin zu Opern, Musicals, Jazz, Blues, Rock und Pop.',
    images: ['/images/klasse-1.jpg'],
  },
};

export default function MusikOverviewPage() {
  const allTopics = Object.values(musikTopics);

  return (
    <div className="site-wrapper">
      <Header activePath="/musik" />

      {/* Main Container */}
      <main className="content-container">
        {/* Intro Banner */}
        <section className="math-intro-banner">
          <div className="math-intro-content">
            <h1 className="math-page-title">Musik</h1>
            <p className="math-page-desc">
              Die faszinierende Welt der Klänge: Von Musikinstrumenten und Notenlehre über die großen Epochen der Musikgeschichte und unvergessliche Meisterwerke von Bach, Mozart und Beethoven bis hin zu Opern, Musicals, Jazz, Blues, Rock und Pop.
            </p>
            <p className="math-page-note">
              Mit verständlichen Einführungen, Formenlehre, Notenbeispielen und über 100 interaktiven H5P-Übungen.
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
          musikCategories.map((categoryName) => {
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
                      href={`/musik/${topic.slug}`}
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
          <h3>Arbeitsblätter, Arbeitshefte & Musikunterricht-Materialien</h3>
          <p>
            Zu allen Epochen der Musikgeschichte, Instrumentenkunde, Formenlehre und Komponistenporträts findest du auf EDUKI passende Kopiervorlagen, Hörbeispiele und Tests zum Download.
          </p>
          <a
            href="https://eduki.com/de/autor/1430402/about-the-world-org?query=musik&t=1251"
            target="_blank"
            rel="noopener noreferrer"
            className="button-link"
            style={{ marginTop: '8px' }}
          >
            Zu den Musik-Materialien auf EDUKI
          </a>
        </section>
      </main>

      <Footer activePath="/musik" />
    </div>
  );
}
