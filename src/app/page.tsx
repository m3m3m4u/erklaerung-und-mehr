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
                  <p>Digitale Themen für Eltern und Lehrpersonen im Videoformat.</p>
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
