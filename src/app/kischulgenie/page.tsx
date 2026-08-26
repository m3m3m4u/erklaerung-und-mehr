'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function KiSchulgeniePage() {
  const partnerLink = 'https://kischulgenie.com/erklaerungundmehr?via=eum';

  return (
    <div className="site-wrapper">
      <Header activePath="/kischulgenie" />

      <main className="content-container">
        {/* Breadcrumb Navigation */}
        <div className="breadcrumb-nav">
          <Link href="/">Startseite</Link>
          <span>/</span>
          <strong>KI-Schulgenie</strong>
        </div>

        {/* Header Box */}
        <div className="topic-header-box">
          <span className="topic-category-badge">Kooperationspartner</span>
          <h1 className="topic-main-title">KI-Schulgenie – Kooperationspartner</h1>
          <p className="topic-intro-text">
            KI Schulgenie ist eine Plattform mit über 100 KI-Tools, die Lehrkräften hilft, Arbeitsblätter, Quizze und komplette Unterrichtseinheiten schnell und individuell zu erstellen. Die Tools reichen von klassischen Lückentext-Generatoren bis zu innovativen Helfern wie dem „Songlerner“ für den Fremdsprachenunterricht oder dem „Mathe Kontext“, der Alltagsbezüge für mathematische Themen liefert.
          </p>
        </div>

        {/* Partner Logo & Intro Description */}
        <div className="info-box-section" style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
          <div style={{ flexShrink: 0 }}>
            <a
              href={partnerLink}
              target="_blank"
              rel="noopener noreferrer"
              title="KI-Schulgenie öffnen"
            >
              <Image
                src="/images/logo-de.webp"
                alt="KI-Schulgenie Logo"
                width={140}
                height={70}
                style={{ objectFit: 'contain' }}
              />
            </a>
          </div>
          <div style={{ flex: '1 1 300px' }}>
            <p style={{ margin: 0, lineHeight: 1.6 }}>
              Ziel ist es, Lehrkräfte bei Routineaufgaben spürbar zu entlasten, damit mehr Zeit für pädagogische Kernaufgaben und individuelle Förderung bleibt. Die Bedienung ist einfach, erfordert keine technischen Vorkenntnisse und ist DSGVO-konform, da keine Schülerdaten benötigt werden. Die Plattform wurde vom österreichischen Lehrer René Mayer entwickelt und kann 14 Tage kostenlos getestet werden.
            </p>
          </div>
        </div>

        {/* Key Features & Points */}
        <div className="topic-rules-card">
          <h2>Wichtige Merkmale und Funktionen</h2>
          <ul className="topic-rules-list">
            <li>
              <strong>Über 100 KI-Tools:</strong> Umfangreiche Werkzeuge für Arbeitsblätter, Lückentexte, Tests, differenzierte Aufgaben und Verlaufspläne.
            </li>
            <li>
              <strong>Fächerübergreifend:</strong> Geeignet für Deutsch, Fremdsprachen, Mathematik, Naturwissenschaften und Gesellschaftswissenschaften.
            </li>
            <li>
              <strong>Spezialisierte Helfer:</strong> Innovative Tools wie der „Songlerner“ für Sprachunterricht oder „Mathe Kontext“ für lebensnahe Alltagsbezüge.
            </li>
            <li>
              <strong>100 % DSGVO-konform:</strong> Es werden keine personenbezogenen Daten von Schülerinnen und Schülern verarbeitet oder gespeichert.
            </li>
            <li>
              <strong>Von Lehrkräften entwickelt:</strong> Praxisorientiert aufgebaut von Pädagoge René Mayer aus Österreich.
            </li>
            <li>
              <strong>14 Tage kostenlos testen:</strong> Unverbindliche Testphase zum Kennenlernen aller Funktionen im Schulalltag.
            </li>
          </ul>
        </div>

        {/* Discount Voucher & Action Box */}
        <section className="info-box-section" style={{ marginTop: '24px' }}>
          <h3>Gutscheincode und Registrierung</h3>
          <p>
            Mit dem Gutscheincode <strong>erklaerung10</strong> erhalten Nutzer bei der Registrierung einen Rabatt von <strong>10 %</strong>.
          </p>
          <div style={{ marginTop: '16px' }}>
            <a
              href={partnerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="button-link"
            >
              Hier zum KI-Schulgenie (14 Tage kostenlos testen)*
            </a>
          </div>
          <p style={{ marginTop: '14px', fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.4 }}>
            * Hinweis: Bei diesem Link handelt es sich um einen Affiliate-Link / Partnerlink. Wenn du dich über diesen Link registrierst, erhalten wir eine kleine Provision zur Unterstützung unserer Plattform. Für dich entstehen dabei keine zusätzlichen Kosten – mit dem Code „erklaerung10“ sparst du 10 %.
          </p>
        </section>
      </main>

      <Footer activePath="/kischulgenie" />
    </div>
  );
}
