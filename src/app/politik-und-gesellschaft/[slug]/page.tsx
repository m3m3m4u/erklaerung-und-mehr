'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { politikTopics } from '@/lib/politik-data';
import H5PPlayer, { XAPIStatement } from '@/components/H5PPlayer';
import MathText from '@/components/MathText';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PolitikDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const topic = politikTopics[resolvedParams.slug];

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
      <Header activePath="/politik-und-gesellschaft" />

      {/* Main Content */}
      <main className="content-container">
        {/* Breadcrumb Navigation */}
        <div className="breadcrumb-nav">
          <Link href="/">Startseite</Link>
          <span>/</span>
          <Link href="/politik-und-gesellschaft">Politik & Gesellschaft</Link>
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
            <div className="score-badge-live">
              <span>🎯 {scoreNotification}</span>
            </div>
          )}

          {currentExercise ? (
            <div className="h5p-player-container">
              <div className="h5p-card-header">
                <h3>{currentExercise.title}</h3>
                <span className="h5p-id-tag">ID #{currentExercise.id}</span>
              </div>
              <H5PPlayer
                key={`${currentExercise.folder}-${activeExerciseIndex}`}
                h5pJsonPath={currentExercise.folder}
                title={currentExercise.title}
                onXAPIStatement={handleXAPI}
              />
            </div>
          ) : (
            <div className="no-exercises-card">
              <p>Für dieses Thema sind noch keine interaktiven Übungen hinterlegt.</p>
            </div>
          )}
        </section>

        {/* Material & Eduki Section */}
        {topic.worksheetLink && (
          <div className="eduki-box-card">
            <div className="eduki-box-content">
              <h3>Passendes Unterrichtsmaterial & Arbeitsblätter</h3>
              <p>
                Vertiefe dein Wissen mit Arbeitsblättern, Lernzielkontrollen und didaktischen Handreichungen zu <strong>{topic.title}</strong> auf Eduki.
              </p>
            </div>
            <a
              href={topic.worksheetLink}
              target="_blank"
              rel="noopener noreferrer"
              className="eduki-cta-btn"
            >
              <span>Arbeitsblätter auf Eduki ansehen</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer activePath="/politik-und-gesellschaft" />
    </div>
  );
}
