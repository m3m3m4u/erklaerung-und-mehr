'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { informatikTopics } from '@/lib/informatik-data';
import H5PPlayer, { XAPIStatement } from '@/components/H5PPlayer';
import MathText from '@/components/MathText';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function InformatikDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const topic = informatikTopics[resolvedParams.slug];

  if (!topic) {
    notFound();
  }

  const [activeExerciseIndex, setActiveExerciseIndex] = useState(0);
  
  const currentExercise = topic.exercises[activeExerciseIndex];

  
  return (
    <div className="site-wrapper">
      <Header activePath="/informatik" />

      {/* Main Content */}
      <main className="content-container">
        {/* Breadcrumb Navigation */}
        <div className="breadcrumb-nav">
          <Link href="/">Startseite</Link>
          <span>/</span>
          <Link href="/informatik">Informatik</Link>
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
            <h2>Wichtige Grundlagen und Merksätze</h2>
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
            <div className="info-box-section">
              <p>Für dieses Thema sind derzeit noch keine H5P-Übungen hinterlegt.</p>
            </div>
          )}
        </section>

        {/* Word-Vorlagen & Begleitdateien (.docx) */}
        {topic.attachments && topic.attachments.length > 0 && (
          <section className="info-box-section" style={{ marginTop: '32px', background: 'var(--bg-white)', border: '1.5px solid var(--green-primary)' }}>
            <h3 style={{ marginBottom: 6 }}>Übungsdateien &amp; Vorlagen (.docx) zum Download</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: 13, marginBottom: 14 }}>
              Lade dir die passenden Word-Dateien für die praktischen Übungen herunter:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 10 }}>
              {topic.attachments.map((att, idx) => (
                <a
                  key={idx}
                  href={`/${att.filename}`}
                  download={att.filename}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 12,
                    padding: '10px 14px',
                    background: '#f8fafc',
                    border: '1px solid var(--border-light)',
                    borderRadius: 6,
                    textDecoration: 'none',
                    transition: 'border-color 0.15s, background 0.15s',
                  }}
                >
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--green-dark)' }}>
                      {att.title}
                    </div>
                    <div style={{ fontSize: 11, color: 'var(--text-muted)', fontFamily: 'monospace', marginTop: 2 }}>
                      {att.filename}
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: '#ffffff',
                      background: 'var(--green-primary)',
                      padding: '4px 10px',
                      borderRadius: 4,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Download
                  </span>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Worksheets & Eduki Link */}
        {topic.worksheetLink && (
          <section className="info-box-section" style={{ marginTop: '32px' }}>
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

      <Footer activePath="/informatik" />
    </div>
  );
}
