'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ernaehrungTopics } from '@/lib/ernaehrung-data';
import H5PPlayer, { XAPIStatement } from '@/components/H5PPlayer';
import MathText from '@/components/MathText';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ErnaehrungDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const topic = ernaehrungTopics[resolvedParams.slug];

  if (!topic) {
    notFound();
  }

  const [activeExerciseIndex, setActiveExerciseIndex] = useState(0);
  
  const currentExercise = topic.exercises[activeExerciseIndex];

  
  return (
    <div className="site-wrapper">
      <Header activePath="/ernaehrung" />

      {/* Main Content */}
      <main className="content-container">
        {/* Breadcrumb Navigation */}
        <div className="breadcrumb-nav">
          <Link href="/">Startseite</Link>
          <span>/</span>
          <Link href="/ernaehrung">Ernährung</Link>
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
            <h2>Wichtige Grundlagen, Regeln und Fakten</h2>
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
                    }}
                  className={`exercise-tab-btn ${activeExerciseIndex === idx ? 'active' : ''}`}
                >
                  {idx + 1}. {ex.title}
                </button>
              ))}
            </div>
          )}

          
          {currentExercise ? (
            <div className="exercise-player-wrapper">
              <H5PPlayer
                key={currentExercise.folder}
                h5pJsonPath={`/h5p-content/${currentExercise.folder}`}
                title={currentExercise.title}
                courseId={topic.slug}
                courseTitle={topic.title}
                totalExercises={topic.exercises.length}
                exerciseId={currentExercise.folder}
              />
            </div>
          ) : (
            <div className="info-box-section" style={{ textAlign: 'center', padding: '30px' }}>
              <p>Zu diesem Thema werden in Kürze weitere interaktive Übungen bereitgestellt.</p>
            </div>
          )}
        </section>

        {/* Eduki Material Box */}
        <section className="info-box-section" style={{ marginTop: '40px' }}>
          <h3>Unterrichtsmaterialien & Arbeitsblätter</h3>
          <p>
            Passend zu <strong>{topic.title}</strong> gibt es auf EDUKI vertiefende Kopiervorlagen, Nährwerttabellen, Tests und Arbeitshefte.
          </p>
          <a
            href={topic.worksheetLink || `https://eduki.com/de/autor/1430402/about-the-world-org?query=${encodeURIComponent(topic.title)}+ernaehrung&t=3752`}
            target="_blank"
            rel="noopener noreferrer"
            className="button-link"
            style={{ marginTop: '8px' }}
          >
            Passende Materialien auf EDUKI öffnen
          </a>
        </section>
      </main>

      <Footer activePath="/ernaehrung" />
    </div>
  );
}
