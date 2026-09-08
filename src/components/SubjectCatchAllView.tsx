'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import H5PPlayer from '@/components/H5PPlayer';
import MathText from '@/components/MathText';
import type { GenericTopic, ResolveCatchAllResult } from '@/lib/catchall-resolver';

interface SubjectCatchAllViewProps<T extends GenericTopic> {
  result: ResolveCatchAllResult<T>;
  subjectTitle: string;
  subjectPath: string;
  summaryTitle?: string;
  defaultWorksheetLink?: string;
}

export default function SubjectCatchAllView<T extends GenericTopic>({
  result,
  subjectTitle,
  subjectPath,
  summaryTitle = 'Wichtige Grundlagen, Gesetze und Merksätze',
  defaultWorksheetLink,
}: SubjectCatchAllViewProps<T>) {
  if (result.type === 'not-found') {
    notFound();
  }

  const [activeExerciseIndex, setActiveExerciseIndex] = useState(0);

  const isTopic = result.type === 'topic';
  const topic = isTopic ? result.topic : null;
  const currentExercise =
    topic && topic.exercises && topic.exercises.length > 0
      ? topic.exercises[activeExerciseIndex] || topic.exercises[0]
      : null;

  const worksheetLink = topic?.worksheetLink || defaultWorksheetLink;

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://erklaerung-und-mehr.org';

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: result.breadcrumbs.map((bc, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: bc.label,
      ...(bc.href ? { item: `${baseUrl}${bc.href}` } : {}),
    })),
  };

  const topicJsonLd =
    isTopic && topic
      ? {
          '@context': 'https://schema.org',
          '@type': 'LearningResource',
          name: topic.title,
          description: topic.shortDesc,
          learningResourceType: 'Interactive Resource / Practice',
          educationalLevel: 'Sekundarstufe 1 / Grundschule',
          inLanguage: 'de',
          provider: {
            '@type': 'EducationalOrganization',
            name: 'Erklärung und mehr',
            url: baseUrl,
          },
        }
      : null;

  return (
    <div className="site-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {topicJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(topicJsonLd) }}
        />
      )}

      <Header activePath={subjectPath} />

      <main className="content-container">
        {/* Breadcrumbs */}
        <div className="breadcrumb-nav">
          {result.breadcrumbs.map((bc, i) => (
            <React.Fragment key={i}>
              {i > 0 && <span>/</span>}
              {bc.href ? <Link href={bc.href}>{bc.label}</Link> : <strong>{bc.label}</strong>}
            </React.Fragment>
          ))}
        </div>

        {/* Category Overview Mode */}
        {result.type === 'category' && (
          <div className="category-catchall-container">
            <div className="topic-header-box" style={{ marginBottom: 28 }}>
              <span className="topic-category-badge">{subjectTitle}</span>
              <h1 className="topic-main-title">{result.categoryName}</h1>
              <p className="topic-intro-text">
                Alle Themen und interaktiven Übungen zur Kategorie &quot;{result.categoryName}&quot; im Fach {subjectTitle}.
              </p>
            </div>

            <div className="math-grid">
              {result.topics.map((t) => (
                <Link key={t.slug} href={`${subjectPath}/${t.slug}`} className="math-card">
                  <div className="math-card-header">
                    <h3 className="math-card-title">{t.title}</h3>
                    {t.exercises && t.exercises.length > 0 && (
                      <span className="math-badge">
                        {t.exercises.length} {t.exercises.length === 1 ? 'Übung' : 'Übungen'}
                      </span>
                    )}
                  </div>
                  <p className="math-card-desc">{t.shortDesc}</p>
                  <div className="math-card-footer">
                    <span className="math-open-btn">Thema öffnen ➔</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Topic Detail Mode */}
        {isTopic && topic && (
          <>
            {/* Topic Header Box */}
            <div className="topic-header-box">
              <span className="topic-category-badge">{topic.category}</span>
              <h1 className="topic-main-title">{topic.title}</h1>
              <p className="topic-intro-text">
                <MathText text={topic.longDesc} />
              </p>
            </div>

            {/* Key Rules / Summary Box */}
            {topic.keyPoints && topic.keyPoints.length > 0 && (
              <div className="topic-rules-card">
                <h2>{summaryTitle}</h2>
                <ul className="topic-rules-list">
                  {topic.keyPoints.map((point, i) => (
                    <li key={i}>
                      <MathText text={point} />
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Interactive Exercises Section */}
            <section className="topic-exercises-section">
              <h2 className="section-main-heading">
                Interaktive Übungen ({topic.exercises ? topic.exercises.length : 0})
              </h2>

              {topic.exercises && topic.exercises.length > 1 && (
                <div className="exercise-tabs">
                  {topic.exercises.map((ex, idx) => (
                    <button
                      key={ex.id}
                      onClick={() => setActiveExerciseIndex(idx)}
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
                  />
                </div>
              ) : (
                <div className="no-exercises-notice">
                  Für dieses Thema werden in Kürze weitere interaktive Übungen bereitgestellt.
                </div>
              )}
            </section>

            {/* Attachments Download Section (e.g. Informatik Word-Vorlagen) */}
            {topic.attachments && topic.attachments.length > 0 && (
              <section
                className="info-box-section"
                style={{
                  marginTop: '32px',
                  background: 'var(--bg-white)',
                  border: '1.5px solid var(--green-primary)',
                }}
              >
                <h3 style={{ marginBottom: 6 }}>Übungsdateien &amp; Vorlagen zum Download</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 13, marginBottom: 14 }}>
                  Lade dir die passenden Dateien für die praktischen Übungen herunter:
                </p>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: 10,
                  }}
                >
                  {topic.attachments.map((att, idx) => (
                    <a
                      key={idx}
                      href={att.url || `/${att.filename}`}
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
                        <div
                          style={{
                            fontSize: 11,
                            color: 'var(--text-muted)',
                            fontFamily: 'monospace',
                            marginTop: 2,
                          }}
                        >
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

            {/* Eduki Worksheet Banner */}
            {worksheetLink && (
              <section className="info-box-section" style={{ marginTop: '32px' }}>
                <h3>Passende Arbeitsblätter & Kopiervorlagen</h3>
                <p>
                  Möchtest du das Thema <strong>{topic.title}</strong> zusätzlich im Unterricht oder zu Hause auf Papier vertiefen? Auf EDUKI findest du passende Arbeitsblätter und Kopiervorlagen zum Download.
                </p>
                <a
                  href={worksheetLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-link"
                  style={{ marginTop: '6px' }}
                >
                  Arbeitsblätter zu {topic.title} auf EDUKI ➔
                </a>
              </section>
            )}
          </>
        )}
      </main>

      <Footer activePath={subjectPath} />
    </div>
  );
}
