import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TeacherHeroBanner from '@/components/TeacherHeroBanner';
import { subjectCategories } from '@/lib/subject-categories';

export const metadata: Metadata = {
  title: 'Erklärung und mehr – Kostenlose Lernplattform für Schule & Unterricht',
  description:
    'Entdecke Erklärvideos mit passenden interaktiven Übungen, Arbeitsblättern und weiteren spannenden Lernmaterialien in über 25 Schulfächern!',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Erklärung und mehr – Kostenlose Lernplattform für Schule & Unterricht',
    description:
      'Entdecke Erklärvideos mit passenden interaktiven Übungen, Arbeitsblättern und weiteren spannenden Lernmaterialien in über 25 Schulfächern!',
    url: '/',
    siteName: 'Erklärung und mehr',
    locale: 'de_AT',
    type: 'website',
    images: [
      {
        url: '/images/klasse-1.jpg',
        width: 800,
        height: 480,
        alt: 'Erklärung und mehr – Die Lernplattform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Erklärung und mehr – Kostenlose Lernplattform für Schule & Unterricht',
    description:
      'Entdecke Erklärvideos mit passenden interaktiven Übungen, Arbeitsblättern und weiteren spannenden Lernmaterialien!',
    images: ['/images/klasse-1.jpg'],
  },
};

export default function Home() {
  return (
    <div className="site-wrapper">
      <Header activePath="/" />

      {/* Hauptinhalt */}
      <main className="content-container">
        {/* 1. Begrüßung Kopernikus & Thomas Felzmann */}
        <section className="intro-section">
          <div className="intro-main">
            <div className="kopernikus-layout">
              <div className="kopernikus-img-wrapper">
                <Image
                  src="/images/klasse-1.jpg"
                  alt="Kopernikus - Erklärung und mehr"
                  width={300}
                  height={180}
                  className="kopernikus-img"
                  priority
                />
              </div>
              <div className="kopernikus-text-block">
                <h1
                  style={{
                    fontSize: '1.65rem',
                    fontWeight: 700,
                    color: 'var(--green-dark)',
                    marginBottom: '10px',
                    lineHeight: 1.3,
                  }}
                >
                  Erklärung und mehr – Deine Lernplattform für die Schule
                </h1>
                <p
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: 'var(--text-color)',
                    marginBottom: '8px',
                  }}
                >
                  Hallo, ich bin Kopernikus. Herzlich Willkommen bei Erklärung und mehr!
                </p>
                <p>
                  Auf meiner Webseite Erklärung und mehr geht es um schlaue Köpfe, wie ich einer bin. Ich erkläre dir viele interessante Dinge über Tiere, Geschichte, Mathematik und mehr. Der Wissenssack ist randvoll mit spannenden Themen, Erklärungsvideos, Übungen und lustigen Lernspielen.
                </p>
              </div>
            </div>
          </div>

          <aside className="intro-side">
            <div className="side-card">
              <div className="felzmann-img-wrapper">
                <Image
                  src="/images/thomas.png"
                  alt="Thomas Felzmann"
                  width={280}
                  height={120}
                  className="felzmann-img"
                />
              </div>
              <h3>Digital & Kreativ von Thomas Felzmann</h3>
              <p>Digitale Themen für Eltern und Lehrpersonen.</p>
              <a
                href="https://thomasfelzmann.at/"
                target="_blank"
                rel="noopener noreferrer"
                className="button-link"
              >
                Mehr erfahren
              </a>
            </div>
          </aside>
        </section>

        {/* 2. & 3. Partner-Banner: Lernarena & KI-Schulgenie nebeneinander */}
        <section className="banners-row">
          <div className="banner-card">
            <div className="banner-inner">
              <a
                href="https://lernarena.org"
                target="_blank"
                rel="noopener noreferrer"
                className="banner-img-wrapper"
              >
                <Image
                  src="/images/lernarena.jpg"
                  alt="Lernarena Logo"
                  width={85}
                  height={85}
                  className="banner-img"
                  unoptimized
                />
              </a>
              <div className="banner-text">
                <p>Onlinekurse und verschiedene Tools für den Unterricht findest du jetzt auf</p>
                <h3>
                  <a href="https://lernarena.org" target="_blank" rel="noopener noreferrer">
                    www.lernarena.org
                  </a>
                </h3>
                <a
                  href="https://lernarena.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-link"
                >
                  Mehr erfahren
                </a>
              </div>
            </div>
          </div>

          <div className="banner-card">
            <div className="banner-inner">
              <Link
                href="/kischulgenie"
                className="banner-img-wrapper"
              >
                <Image
                  src="/images/logo-de.webp"
                  alt="KI-Schulgenie Logo"
                  width={100}
                  height={60}
                  className="banner-img"
                />
              </Link>
              <div className="banner-text">
                <h3>
                  <Link href="/kischulgenie" style={{ textDecoration: 'none', color: 'inherit' }}>
                    Erstelle tolles Material mit KI-Schulgenie und spare Zeit!
                  </Link>
                </h3>
                <p>
                  Spare 10 % mit dem Gutscheincode <strong>&quot;erklaerung10&quot;</strong>.
                </p>
                <p style={{ fontSize: '11px', color: 'var(--text-muted)', margin: '4px 0 10px 0' }}>
                  (Kooperationspartner / Affiliate-Link)
                </p>
                <Link
                  href="/kischulgenie"
                  className="button-link"
                >
                  Mehr erfahren
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Info-Banner für Lehrpersonen & Schulklassen */}
        <TeacherHeroBanner />

        {/* 4. Themen und Lernfächer */}
        <section className="section-block" style={{ marginTop: 24 }}>
          <h2 className="section-main-heading">Themen und Lernfächer</h2>

          {subjectCategories.map((cat, idx) => (
            <div key={idx} className="category-group">
              <h3 className="category-heading">{cat.category}</h3>
              <div className="buttons-grid">
                {cat.items.map((item, i) => (
                  <Link
                    key={i}
                    href={item.link}
                    className="subject-button-tile"
                    title={item.title}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={300}
                      height={200}
                      className="subject-button-img"
                      unoptimized
                    />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* 5. Spenden-Banner für Server- & Betriebskosten */}
        <section className="donation-banner" aria-label="Spende für Serverkosten" style={{ marginTop: 28, marginBottom: 0 }}>
          <div className="donation-banner-main">
            <div className="donation-banner-icon" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
            <div className="donation-banner-text">
              <h3>Server- &amp; Betriebskosten unterstützen</h3>
              <p>
                Erklärung und mehr ist ein kostenloses Bildungsangebot. Damit die Lernplattform weiterhin zuverlässig und werbefrei für Kinder online bleibt, freuen wir uns über jede kleine freiwillige Unterstützung für Server und Technik.
              </p>
            </div>
          </div>

          <div className="donation-banner-actions">
            <a
              href="https://www.paypal.com/donate/?business=m3m3m4u%40gmail.com&no_recurring=0&item_name=Unterst%C3%BCtzung+Serverkosten+Erkl%C3%A4rung+und+mehr&currency_code=EUR"
              target="_blank"
              rel="noopener noreferrer"
              className="donation-paypal-btn"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="#002c6c" aria-hidden="true">
                <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.283-.44 2.805-2.03 4.673-4.52 5.518 1.472.502 2.37 1.624 2.115 3.308-.344 2.28-2.062 3.847-4.484 4.31a10.978 10.978 0 0 1-2.083.187H8.814a.64.64 0 0 0-.633.543l-1.105 5.378zm7.394-14.887c.07-.44-.02-.74-.265-.924-.316-.24-.878-.345-1.74-.345H8.38l-1.32 8.358h2.647c2.31 0 4.093-.787 4.763-5.089z" />
              </svg>
              <span>Mit PayPal spenden</span>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer activePath="/" />
    </div>
  );
}
