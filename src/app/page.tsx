'use client';

import React, { useState } from 'react';
import Link from 'next/link';
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
      { title: 'Chemie', image: 'chemie.jpg', link: '/chemie' },
      { title: 'Biologie', image: 'biologie.jpg', link: '/biologie' },
      { title: 'Geographie', image: 'geo.jpg', link: '/geographie' },
      { title: 'Physik', image: 'physik.jpg', link: '/physik' },
    ],
  },
  {
    category: 'Sachkunde',
    items: [
      { title: 'Politik & Gesellschaft', image: 'politik.jpg', link: '/politik-und-gesellschaft' },
      { title: 'Freiwillige Fahrradprüfung', image: 'verkehr-2.jpg', link: '/die-freiwillige-fahrradpruefung' },
      { title: 'Hauswirtschaft', image: 'hauswirtschaft-1.jpg', link: '/hauswirtschaft' },
      { title: 'Lehrberufe', image: 'lehrberufe.jpg', link: '/lehrberufe' },
    ],
  },
  {
    category: 'Mensch & Gesellschaft',
    items: [
      { title: 'Geschichte', image: 'geschichte.jpg', link: '/geschichte' },
      { title: 'Wirtschaft', image: 'wirtschaft.jpg', link: '/wirtschaft' },
      { title: 'Ernährung', image: 'ernaehrung.jpg', link: '/ernaehrung' },
      { title: 'Philosophie', image: 'phil.jpg', link: '/philosophie' },
      { title: 'Psychologie', image: 'psych.jpg', link: '/psychologie' },
      { title: 'Religion', image: 'religion.jpg', link: '/religion' },
      { title: 'Ethik', image: 'ethik.jpg', link: '/ethik' },
      { title: 'Soziales & emotionales Lernen', image: 'sozialeslernen.jpg', link: '/soziales-und-emotionales-lernen' },
      { title: 'Wichtige Persönlichkeiten', image: 'persoehnlichkeit.jpg', link: '/wichtige-persoenlichkeiten-der-geschichte' },
      { title: 'Sustainable Development Goals', image: 'Umwelt.jpg', link: '/sustainable-development-goals' },
    ],
  },
  {
    category: 'Kunst',
    items: [
      { title: 'Musik', image: 'musik.jpg', link: '/musik' },
      { title: 'Kunst & Künstler', image: 'kunst-1.jpg', link: '/kunst-und-kuenstler' },
    ],
  },
  {
    category: 'Technik & Mathematik',
    items: [
      { title: 'Technik', image: 'technik.jpg', link: '/technik' },
      { title: 'Mathematik', image: 'mathe.jpg', link: '/mathematik' },
      { title: 'Medien & Informatik', image: 'informatik.jpg', link: '/medien-und-informatik' },
      { title: 'Medien', image: 'medien.jpg', link: '/medien' },
    ],
  },
  {
    category: 'Sprachen',
    items: [
      { title: 'Deutsch', image: 'deutsch.jpg', link: '/deutsch' },
      { title: 'Englisch', image: 'englisch.jpg', link: '/englisch' },
      { title: 'Französisch', image: 'franzoesisch.jpg', link: '/franzoesisch' },
      { title: 'Spanisch', image: 'spanisch.jpg', link: '/spanisch' },
    ],
  },
];

const newsAndTopics: TopicItem[] = [
  { title: 'Aktuelle Themen', image: 'aktuellethemen.jpg', link: '/aktuelle-themen' },
  { title: 'Bundestagswahl', image: 'bundestagswahl.jpg', link: '/bundestagswahl' },
  { title: 'Kleinste Staaten', image: 'kleinste.jpg', link: '/kleinste-staaten' },
  { title: 'Tools für Lehrpersonen', image: 'tools.jpg', link: '/tools-fuer-lehrpersonen' },
  { title: 'Downloadbereich', image: 'download.jpg', link: '/download' },
  { title: 'Newsletter Anmeldung', image: 'newsletter.jpg', link: '/newsletter-anmeldung' },
  { title: 'Kahoot Quizze', image: 'Kahoot.jpg', link: '/kahoot' },
  { title: 'QR-Codes im Unterricht', image: 'qr.jpg', link: '/qr-codes' },
  { title: 'Die Jahre 1500 - 2022', image: 'diejahre.jpg', link: '/die-jahre-1500-2022' },
  { title: 'Werde Geschichte-Nerd', image: 'geschichtenerd.jpg', link: '/werde-geschichte-nerd' },
  { title: 'German Text Analyzer', image: 'analyzer.jpg', link: '/german-text-analyzer' },
];

const learningGames: TopicItem[] = [
  { title: 'Landkarten Europa', image: 'landkarten.jpg', link: '/landkarte-europa-staaten' },
  { title: 'Escape Rooms', image: 'escape.jpg', link: '/escape-rooms' },
  { title: 'Musik Memory', image: 'memory.jpg', link: '/musik-memory' },
  { title: 'Mathe mit Snake', image: 'snake.jpg', link: '/mathe-ueben-mit-snake' },
];

const partnerSites = [
  {
    title: 'MusEducation',
    url: 'http://museducation.org',
    logo: 'MusEducationklein-1.png',
    text: 'Unsere Webseite zum Thema Musik. Auf museducation.org findest du alles Wissenswerte.',
  },
  {
    title: 'About the World',
    url: 'http://about-the-world.org',
    logo: 'atwV2_Logo-300x300.png',
    text: 'Du möchtest alles über die Erde erfahren? Schau bei about-the-world.org vorbei.',
  },
  {
    title: 'JL Education',
    url: 'https://erklaerung-und-mehr.org/jl-education/',
    logo: '1zu1-YT-Sticker.png',
    text: 'Unser Partner in Sachen Wirtschaft: JL Education.',
  },
  {
    title: 'LearningbyListening',
    url: 'https://erklaerung-und-mehr.org/learning-by-listening/',
    logo: 'Logo2-298x300.png',
    text: 'Unser Partner in Sachen Lernsongs: LearningbyListening.',
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
                  <div className="image-placeholder kopernikus-img">
                    <span>[Bild: klasse-1-300x180.jpg]</span>
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

                <div className="eduki-banner-row">
                  <div className="image-placeholder eduki-img">
                    <span>[Bild: eduki.jpg]</span>
                  </div>
                  <div className="eduki-text-block">
                    <p>
                      Viele Lernmaterialien zu den unterschiedlichsten Themen findest du auf EDUKI!
                    </p>
                    <p className="signature">Wissensdurstige Grüße, euer Kopernikus</p>
                    <p className="ps-note">PS: Nicht vergessen: Übung macht den Meister.</p>
                  </div>
                </div>
              </div>

              <aside className="intro-side">
                <div className="side-card">
                  <div className="image-placeholder felzmann-img">
                    <span>[Bild: thomas.png]</span>
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

            {/* 2. Partner-Banner: Lernarena */}
            <section className="banner-section">
              <div className="banner-inner">
                <div className="image-placeholder banner-img">
                  <span>[Bild: neu-1-300x225.png]</span>
                </div>
                <div>
                  <p>Onlinekurse und verschiedene Tools für den Unterricht findest du jetzt auf</p>
                  <h3>
                    <a href="https://lernarena.org" target="_blank" rel="noopener noreferrer">
                      www.lernarena.org
                    </a>
                  </h3>
                </div>
              </div>
            </section>

            {/* 3. Banner: KI-Schulgenie */}
            <section className="banner-section">
              <div className="banner-inner">
                <div className="image-placeholder banner-img">
                  <span>[Bild: logo-de.webp]</span>
                </div>
                <div>
                  <h3>Erstelle tolles Material mit KI-Schulgenie und spare Zeit!</h3>
                  <p>
                    Spare 10 % mit dem Gutscheincode <strong>&quot;erklaerung10&quot;</strong>.
                  </p>
                  <a
                    href="https://kischulgenie.com/erklaerungundmehr?via=eum"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-link"
                  >
                    Mehr erfahren
                  </a>
                </div>
              </div>
            </section>

            {/* 4. Themen und Lernfächer */}
            <section className="section-block">
              <h2 className="section-main-heading">Themen und Lernfächer</h2>

              {subjectCategories.map((cat, idx) => (
                <div key={idx} className="category-group">
                  <h3 className="category-heading">{cat.category}</h3>
                  <div className="cards-grid">
                    {cat.items.map((item, i) => (
                      <Link key={i} href={item.link} className="tile-card" style={{ textDecoration: 'none', display: 'block' }}>
                        <div className="image-placeholder tile-img">
                          <span>[Bild: {item.image}]</span>
                        </div>
                        <h4 className="tile-title">{item.title}</h4>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </section>

            {/* 5. Neuigkeiten und aktuelle Themen */}
            <section className="section-block">
              <h2 className="section-main-heading">Neuigkeiten und aktuelle Themen</h2>
              <div className="cards-grid">
                {newsAndTopics.map((item, i) => (
                  <div key={i} className="tile-card">
                    <div className="image-placeholder tile-img">
                      <span>[Bild: {item.image}]</span>
                    </div>
                    <h4 className="tile-title">{item.title}</h4>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. Schnelle Lernspiele */}
            <section className="section-block">
              <h2 className="section-main-heading">Schnelle Lernspiele</h2>
              <div className="cards-grid">
                {learningGames.map((item, i) => (
                  <div key={i} className="tile-card">
                    <div className="image-placeholder tile-img">
                      <span>[Bild: {item.image}]</span>
                    </div>
                    <h4 className="tile-title">{item.title}</h4>
                  </div>
                ))}
              </div>
            </section>

            {/* 7. Partnerseiten */}
            <section className="section-block">
              <h2 className="section-main-heading">Partnerseiten</h2>
              <div className="partner-grid">
                {partnerSites.map((partner, i) => (
                  <div key={i} className="partner-card">
                    <div className="image-placeholder partner-logo">
                      <span>[Logo: {partner.logo}]</span>
                    </div>
                    <h4>
                      <a href={partner.url} target="_blank" rel="noopener noreferrer">
                        {partner.title}
                      </a>
                    </h4>
                    <p>{partner.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 8. Werbefreiheit & Unterstützung */}
            <section className="info-box-section">
              <h3>Werbefrei mit vielen gratis Angeboten</h3>
              <p>
                Wir versuchen, unsere Plattform Erklärung und mehr werbefrei zu halten und viele kostenlose Angebote, Übungen, Erklärvideos und Spiele zu bieten. Dennoch haben wir Kosten, wie Hosting, Weiterbildungen und Administration.
              </p>
            </section>

            {/* 9. Social Media */}
            <section className="social-section">
              <p>
                Noch mehr Erklärvideos, Spiele, Übungen und Arbeitsblätter von Erklärung und mehr findest du auf unseren Social-Media-Kanälen:
              </p>
              <div className="social-links">
                <a
                  href="https://www.youtube.com/@erklaerung-und-mehr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="social-icon">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  <span>YouTube</span>
                </a>
                <a
                  href="https://www.instagram.com/erklaerungundmehr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="social-icon">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.pinterest.at/erklaerungundmehr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="social-icon">
                    <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                  </svg>
                  <span>Pinterest</span>
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
