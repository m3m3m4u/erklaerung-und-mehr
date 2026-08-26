'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import H5PPlayer, { XAPIStatement } from '@/components/H5PPlayer';
import H5PUploader from '@/components/H5PUploader';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface TopicItem {
  title: string;
  image: string;
  link: string;
}

interface CategorySection {
  category: string;
  items: TopicItem[];
}

const subjectCategories: CategorySection[] = [
  {
    category: 'Naturwissenschaften',
    items: [
      { title: 'Chemie', image: '/images/chemie.png', link: '/chemie' },
      { title: 'Biologie', image: '/images/biologie.png', link: '/biologie' },
      { title: 'Geographie', image: '/images/geo.png', link: '/geographie' },
      { title: 'Physik', image: '/images/physik.png', link: '/physik' },
    ],
  },
  {
    category: 'Sachkunde',
    items: [
      { title: 'Politik & Gesellschaft', image: '/images/politik.png', link: '/politik-und-gesellschaft' },
      { title: 'Freiwillige Fahrradprüfung', image: '/images/verkehr-2.png', link: '/die-freiwillige-fahrradpruefung' },
      { title: 'Hauswirtschaft', image: '/images/hauswirtschaft-1.png', link: '/hauswirtschaft' },
      { title: 'Lehrberufe', image: '/images/lehrberufe.png', link: '/lehrberufe' },
    ],
  },
  {
    category: 'Mensch & Gesellschaft',
    items: [
      { title: 'Geschichte', image: '/images/geschichte.png', link: '/geschichte' },
      { title: 'Wirtschaft', image: '/images/wirtschaft.png', link: '/wirtschaft' },
      { title: 'Ernährung', image: '/images/ernaehrung.png', link: '/ernaehrung' },
      { title: 'Philosophie', image: '/images/phil.png', link: '/philosophie' },
      { title: 'Psychologie', image: '/images/psych.png', link: '/psychologie' },
      { title: 'Religion', image: '/images/religion.png', link: '/religion' },
      { title: 'Ethik', image: '/images/ethik.png', link: '/ethik' },
      { title: 'Soziales & emotionales Lernen', image: '/images/sozialeslernen.png', link: '/soziales-und-emotionales-lernen' },
      { title: 'Wichtige Persönlichkeiten', image: '/images/persoehnlichkeit.png', link: '/wichtige-persoenlichkeiten-der-geschichte' },
      { title: 'Sustainable Development Goals', image: '/images/umwelt.png', link: '/sustainable-development-goals' },
    ],
  },
  {
    category: 'Kunst',
    items: [
      { title: 'Musik', image: '/images/musik.png', link: '/musik' },
      { title: 'Kunst & Künstler', image: '/images/kunst-1.png', link: '/kunst-und-kuenstler' },
    ],
  },
  {
    category: 'Technik & Mathematik',
    items: [
      { title: 'Technik', image: '/images/technik.png', link: '/technik' },
      { title: 'Mathematik', image: '/images/mathe.png', link: '/mathematik' },
      { title: 'Medien & Informatik', image: '/images/informatik.png', link: '/medien-und-informatik' },
      { title: 'Medien', image: '/images/medien.png', link: '/medien' },
    ],
  },
  {
    category: 'Sprachen',
    items: [
      { title: 'Deutsch', image: '/images/deutsch.png', link: '/deutsch' },
      { title: 'Englisch', image: '/images/englisch.png', link: '/englisch' },
    ],
  },
];


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
                    Zum Angebot
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

            {/* 4. Themen und Lernfächer */}
            <section className="section-block">
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
