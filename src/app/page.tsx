'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import H5PPlayer, { XAPIStatement } from '@/components/H5PPlayer';
import H5PUploader from '@/components/H5PUploader';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { subjectCategories } from '@/lib/subject-categories';


export default function Home() {
  const [activeTab, setActiveTab] = useState<'home' | 'h5p-hub'>('home');
  const [lastScoreInfo, setLastScoreInfo] = useState<string | null>(null);

  const handleXAPIStatement = (statement: XAPIStatement) => {
    if (statement.result?.score) {
      const { raw, max } = statement.result.score;
      setLastScoreInfo(
        `Ergebnis erfasst: ${raw ?? 0} von ${max ?? 0} Punkten.`
      );
    }
  };

  return (
    <div className="site-wrapper">
      <Header activeTab={activeTab} onTabChange={setActiveTab} activePath="/" />

      {/* Hauptinhalt */}
      <main className="content-container">
        {activeTab === 'home' ? (
          <>
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
                    <h2>
                      Hallo, ich bin Kopernikus. Herzlich Willkommen bei Erklärung und mehr!
                    </h2>
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
                    href="https://shop.thomasfelzmann.at/"
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

            {/* Info-Banner über den Fächern (Weißes Layout mit 2-zeiligem Neu-Symbol und grünem Rahmen) */}
            <div
              style={{
                marginTop: 32,
                marginBottom: 8,
                background: 'var(--bg-white)',
                border: '1.5px solid var(--green-primary)',
                borderRadius: 6,
                padding: '16px 20px',
                boxShadow: '0 1px 4px rgba(0, 0, 0, 0.04)',
                display: 'flex',
                alignItems: 'center',
                gap: 16,
              }}
            >
              <div
                style={{
                  background: 'var(--green-primary)',
                  color: '#ffffff',
                  fontSize: 14,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.8px',
                  padding: '8px 14px',
                  borderRadius: 6,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'stretch',
                  minWidth: 54,
                  flexShrink: 0,
                }}
              >
                Neu
              </div>
              <div style={{ fontSize: 14, color: 'var(--text-color)', lineHeight: 1.55, flex: 1 }}>
                <div>
                  <strong>Neues Layout &amp; schnellere Ladezeiten:</strong> Lehrpersonen können Ergebnisse von Schülern einfach und datenschutzkonform nachverfolgen sowie Aufgaben den Lernenden zuordnen.
                </div>
                <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 4 }}>
                  Fehlt etwas? Hast du einen Fehler gefunden?{' '}
                  <a
                    href="mailto:m3m3m4u@gmail.com?subject=Feedback%20zu%20Erkl%C3%A4rung%20und%20mehr"
                    style={{ color: 'var(--green-dark)', fontWeight: 600, textDecoration: 'underline' }}
                  >
                    Schreib uns eine E-Mail
                  </a>
                </div>
              </div>
            </div>

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

          </>
        ) : (
          /* H5P Hub & Upload (Separater Reiter) */
          <section className="management-section">
            <h2 className="section-main-heading">H5P-Verwaltung & Player</h2>
            {lastScoreInfo && (
              <div className="score-status">{lastScoreInfo}</div>
            )}
            <div className="two-columns">
              <div>
                <H5PUploader />
              </div>
              <div>
                <H5PPlayer
                  h5pJsonPath="/h5p-content/zehn-gebote-damals-und-heute-1787656087295"
                  title="Zehn Gebote - damals und heute"
                  onXAPIStatement={handleXAPIStatement}
                />
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <Footer activePath="/" />
    </div>
  );
}
