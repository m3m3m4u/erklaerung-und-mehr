'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { lehrberufeTopics } from '@/lib/lehrberufe-data';
import H5PPlayer, { XAPIStatement } from '@/components/H5PPlayer';
import MathText from '@/components/MathText';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function LehrberufeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const topic = lehrberufeTopics[resolvedParams.slug];

  if (!topic) {
    notFound();
  }

  const [activeExerciseIndex, setActiveExerciseIndex] = useState(0);
  const [scoreNotification, setScoreNotification] = useState<string | null>(null);

  const currentExercise = topic.exercises[activeExerciseIndex];

  const handleXAPI = (statement: XAPIStatement) => {
    if (statement.result?.score) {
      const { raw, max } = statement.result.score;
      setScoreNotification(
        `Ergebnis: ${raw ?? 0} von ${max ?? 0} Punkten erreicht!`
      );
    }
  };

  return (
    <div className="site-wrapper">
      <Header activePath="/lehrberufe" />

      {/* Main Content */}
      <main className="content-container">
        {/* Breadcrumb Navigation */}
        <div className="breadcrumb-nav">
          <Link href="/">Startseite</Link>
          <span>/</span>
          <Link href="/lehrberufe">Lehrberufe</Link>
          <span>/</span>
          <strong>{topic.title}</strong>
        </div>

        {/* Topic Header */}
        <div className="topic-header-box">
          <span className="topic-category-badge">{topic.category}</span>
          <h1 className="topic-main-title">{topic.title}</h1>
          <p className="topic-intro-text"><MathText text={topic.longDesc} /></p>
        </div>

        {/* Key Rules & Summary Box */}
        {topic.keyPoints.length > 0 && (
          <div className="topic-rules-card">
            <h2>Wichtige Grundlagen, Gesetze und Merksätze</h2>
            <ul className="topic-rules-list">
              {topic.keyPoints.map((point, i) => (
                <li key={i}><MathText text={point} /></li>
              ))}
            </ul>
          </div>
        )}

        {/* Interactive H5P Exercises Area */}
        <section className="topic-exercises-section">
          <h2 className="section-main-heading">Interaktive Übungen ({topic.exercises.length})</h2>

          {topic.exercises.length > 1 && (
            <div className="exercise-tabs">
              {topic.exercises.map((ex, idx) => (
                <button
                  key={ex.id}
                  onClick={() => {
                    setActiveExerciseIndex(idx);
                    setScoreNotification(null);
                  }}
                  className={`exercise-tab-btn ${activeExerciseIndex === idx ? 'active' : ''}`}
                >
                  {idx + 1}. {ex.title}
                </button>
              ))}
            </div>
          )}

          {scoreNotification && (
            <div className="score-status">{scoreNotification}</div>
          )}

          {currentExercise ? (
            <div className="exercise-player-wrapper">
              <H5PPlayer
                key={currentExercise.folder}
                h5pJsonPath={`/h5p-content/${currentExercise.folder}`}
                title={currentExercise.title}
                onXAPIStatement={handleXAPI}
              />
            </div>
          ) : (
            <div className="info-box-section">
              <p>Für dieses Thema sind derzeit noch keine H5P-Übungen hinterlegt.</p>
            </div>
          )}
        </section>

        {/* Worksheets & Eduki Link */}
        {topic.worksheetLink && (
          <section className="info-box-section" style={{ marginTop: '40px' }}>
            <h3>Passende Arbeitsblätter & Kopiervorlagen</h3>
            <p>
              Möchtest du das Thema <strong>{topic.title}</strong> zusätzlich im Unterricht oder zu Hause auf Papier vertiefen? Auf EDUKI findest du passende Arbeitsblätter und Kopiervorlagen zum Download.
            </p>
            <a
              href={topic.worksheetLink}
              target="_blank"
              rel="noopener noreferrer"
              className="button-link"
              style={{ marginTop: '6px' }}
            >
              Arbeitsblätter zu {topic.title} auf EDUKI ➔
            </a>
          </section>
        )}
      </main>

      <Footer activePath="/lehrberufe" />
    </div>
  );
}
