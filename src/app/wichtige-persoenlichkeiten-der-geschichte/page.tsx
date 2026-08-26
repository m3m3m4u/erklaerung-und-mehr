'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { persoenlichkeitenTopics } from '@/lib/persoenlichkeiten-data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PersoenlichkeitenOverviewPage() {
  const allTopics = Object.values(persoenlichkeitenTopics);

  return (
    <div className="site-wrapper">
      <Header activePath="/wichtige-persoenlichkeiten-der-geschichte" />

      {/* Main Container */}
      <main className="content-container">
        {/* Intro Banner */}
        <section className="math-intro-banner">
          <div className="math-intro-content">
            <h1 className="math-page-title">Berühmte Persönlichkeiten</h1>
            <p className="math-page-desc">
              Menschen, die Geschichte schrieben: Von antiken Feldherren und Staatsmännern über geniale Entdecker, Wissenschaftler und IT-Pioniere bis hin zu unvergesslichen Künstlern, Schriftstellern, Philosophen, religiösen Führern und Sportlegenden.
            </p>
            <p className="math-page-note">
              Mit biografischen Steckbriefen, Meilensteinen und über 800 interaktiven H5P-Übungen.
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

        

        {/* Direct Topics Grid */}
        <div className="math-grid">
            {allTopics.map((topic) => (
              <Link
                key={topic.slug}
                href={`/wichtige-persoenlichkeiten-der-geschichte/${topic.slug}`}
                className="math-card"
              >
                <div className="math-card-header">
                  <h3 className="math-card-title">{topic.title}</h3>
                  {topic.exercises.length > 0 && (
                    <span className="math-badge">
                      {topic.exercises.length}{' '}
                      {topic.exercises.length === 1 ? 'Person' : 'Personen'}
                    </span>
                  )}
                </div>
                <p className="math-card-desc">{topic.shortDesc}</p>
                <div className="math-card-footer">
                  <span className="math-open-btn">Bereich öffnen ➔</span>
                </div>
              </Link>
            ))}
          </div>
        {/* Eduki Material Box */}
        <section className="info-box-section" style={{ marginTop: '40px' }}>
          <h3>Biografien & Unterrichtsmaterialien</h3>
          <p>
            Zu allen bedeutenden Persönlichkeiten der Weltgeschichte findest du auf EDUKI passende Steckbriefe, Lesetexte, Kopiervorlagen und Klassenarbeiten zum Download.
          </p>
          <a
            href="https://eduki.com/de/autor/1430402/about-the-world-org?query=persoenlichkeiten+biografie&t=3752"
            target="_blank"
            rel="noopener noreferrer"
            className="button-link"
            style={{ marginTop: '8px' }}
          >
            Zu den Materialien auf EDUKI
          </a>
        </section>
      </main>

      <Footer activePath="/wichtige-persoenlichkeiten-der-geschichte" />
    </div>
  );
}
