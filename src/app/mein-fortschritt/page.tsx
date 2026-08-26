'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface ProgressEntry {
  h5pId: string;
  h5pTitle: string;
  score: number;
  updatedAt: string;
}

interface AssignedExercise {
  id: string;
  title: string;
  subject: string;
  subjectSlug: string;
  topicTitle: string;
  topicSlug: string;
  url: string;
  completed: boolean;
  score: number | null;
  updatedAt: string | null;
}

export default function MeinFortschrittPage() {
  const router = useRouter();
  const [progress, setProgress] = useState<ProgressEntry[]>([]);
  const [assignments, setAssignments] = useState<AssignedExercise[]>([]);
  const [className, setClassName] = useState('');
  const [loading, setLoading] = useState(true);
  const [studentCode, setStudentCode] = useState('');

  useEffect(() => {
    fetch('/api/auth/me')
      .then((r) => r.json())
      .then((data) => {
        if (!data.user || data.user.role !== 'student') {
          router.replace('/');
        } else {
          setStudentCode(data.user.code || '');
        }
      })
      .catch(() => router.replace('/'));
  }, [router]);

  useEffect(() => {
    Promise.all([
      fetch('/api/student/progress').then((r) => r.json()),
      fetch('/api/student/assignments').then((r) => r.json()),
    ])
      .then(([progressData, assignmentsData]) => {
        setProgress(progressData.progress || []);
        setAssignments(assignmentsData.assignments || []);
        setClassName(assignmentsData.className || '');
      })
      .catch(() => {
        setProgress([]);
        setAssignments([]);
      })
      .finally(() => setLoading(false));
  }, []);

  const completedAssignmentsCount = assignments.filter((a) => a.completed).length;
  const assignmentPercentage = assignments.length > 0
    ? Math.round((completedAssignmentsCount / assignments.length) * 100)
    : 0;

  return (
    <div className="site-wrapper">
      <Header />
      <main className="content-main" style={{ padding: '32px 24px', maxWidth: 880, margin: '0 auto', width: '100%' }}>
        <h1 style={{ marginBottom: 4 }}>Mein Fortschritt</h1>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap', marginBottom: 24 }}>
          <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: 14 }}>
            Schüler-Code: <strong style={{ fontFamily: 'monospace', fontSize: 15, color: 'var(--green-dark)' }}>{studentCode}</strong>
          </p>
          {className && (
            <span
              style={{
                fontSize: 12,
                background: 'var(--green-light)',
                color: 'var(--green-dark)',
                border: '1px solid var(--green-border)',
                padding: '2px 8px',
                borderRadius: 4,
                fontWeight: 600,
              }}
            >
              Klasse {className}
            </span>
          )}
        </div>

        {loading ? (
          <p style={{ color: 'var(--text-muted)' }}>Lädt...</p>
        ) : (
          <>
            {/* 1. Zugewiesene Übungen der Lehrperson */}
            <div className="dashboard-section" style={{ marginBottom: 28 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10, marginBottom: 14 }}>
                <h2 style={{ margin: 0, fontSize: 18 }}>
                  Aufgaben für deine Klasse {className ? `(${className})` : ''}
                </h2>
                {assignments.length > 0 && (
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: completedAssignmentsCount === assignments.length ? '#2e6b0e' : 'var(--text-muted)',
                    }}
                  >
                    {completedAssignmentsCount} von {assignments.length} erledigt ({assignmentPercentage} %)
                  </span>
                )}
              </div>

              {assignments.length > 0 && (
                <div
                  style={{
                    width: '100%',
                    height: 8,
                    background: '#e2e8f0',
                    borderRadius: 4,
                    overflow: 'hidden',
                    marginBottom: 18,
                  }}
                >
                  <div
                    style={{
                      width: `${assignmentPercentage}%`,
                      height: '100%',
                      background: completedAssignmentsCount === assignments.length ? '#4a7c2e' : 'var(--green-primary)',
                      transition: 'width 0.3s ease',
                    }}
                  />
                </div>
              )}

              {assignments.length === 0 ? (
                <p style={{ color: 'var(--text-muted)', fontSize: 14, margin: 0 }}>
                  Deine Lehrperson hat für deine Klasse aktuell noch keine speziellen Übungen zugewiesen.
                </p>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {assignments.map((item, idx) => (
                    <div
                      key={item.id}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: 12,
                        padding: '12px 16px',
                        background: item.completed ? '#f9fcf7' : '#ffffff',
                        border: `1px solid ${item.completed ? '#c8e4b6' : 'var(--border-light)'}`,
                        borderRadius: 6,
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12, minWidth: 0, flex: 1 }}>
                        <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-muted)', minWidth: 20 }}>
                          #{idx + 1}
                        </span>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 2 }}>
                            <span
                              style={{
                                fontSize: 11,
                                background: 'var(--green-light)',
                                color: 'var(--green-dark)',
                                padding: '1px 6px',
                                borderRadius: 3,
                                fontWeight: 600,
                              }}
                            >
                              {item.subject}
                            </span>
                            <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--green-dark)' }}>
                              {item.title}
                            </span>
                          </div>
                          {item.topicTitle && (
                            <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                              Thema: {item.topicTitle}
                            </div>
                          )}
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                        {item.completed ? (
                          <span
                            className="dashboard-score-badge"
                            style={{
                              background: (item.score ?? 0) >= 80 ? '#e6f4d7' : (item.score ?? 0) >= 50 ? '#fff8e1' : '#fdecea',
                              color: (item.score ?? 0) >= 80 ? '#4a7c2e' : (item.score ?? 0) >= 50 ? '#8a6000' : '#c62828',
                              fontSize: 12,
                            }}
                          >
                            Erledigt: {item.score} %
                          </span>
                        ) : (
                          <span
                            style={{
                              fontSize: 12,
                              fontWeight: 600,
                              color: '#64748b',
                              background: '#f1f5f9',
                              padding: '3px 8px',
                              borderRadius: 4,
                            }}
                          >
                            Noch offen
                          </span>
                        )}

                        <Link
                          href={item.url}
                          className="admin-action-btn"
                          style={{
                            fontSize: 13,
                            padding: '5px 12px',
                            background: item.completed ? 'var(--green-light)' : 'var(--green-primary)',
                            color: item.completed ? 'var(--green-dark)' : '#ffffff',
                            textDecoration: 'none',
                          }}
                        >
                          {item.completed ? 'Nochmal üben' : 'Übung starten'}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 2. Alle bisher bearbeiteten Kurse */}
            <div className="dashboard-section">
              <h2 style={{ fontSize: 18, marginBottom: 14 }}>Alle bearbeiteten Übungen ({progress.length})</h2>
              {progress.length === 0 ? (
                <div>
                  <p style={{ color: 'var(--text-muted)', fontSize: 14 }}>
                    Du hast noch keine Übungen selbstständig bearbeitet.
                  </p>
                  <Link href="/" style={{ color: 'var(--green-dark)', marginTop: 8, display: 'inline-block', fontWeight: 600 }}>
                    Zu allen Themen und Fächern
                  </Link>
                </div>
              ) : (
                <div style={{ overflowX: 'auto' }}>
                  <table className="dashboard-progress-table">
                    <thead>
                      <tr>
                        <th style={{ textAlign: 'left' }}>Kurs / Thema</th>
                        <th>Ergebnis</th>
                        <th>Zuletzt gespielt</th>
                      </tr>
                    </thead>
                    <tbody>
                      {progress.map((p) => {
                        const match = p.h5pId.match(/(\d+)(?:\/?$)/);
                        const idTarget = match ? match[1] : p.h5pId.replace(/^\/h5p-content\//, '').replace(/^\//, '');
                        return (
                          <tr key={p.h5pId}>
                            <td style={{ fontWeight: 500 }}>
                              <Link
                                href={`/${idTarget}`}
                                style={{
                                  color: 'var(--green-dark)',
                                  textDecoration: 'underline',
                                  fontWeight: 600,
                                }}
                              >
                                {p.h5pTitle || p.h5pId}
                              </Link>
                            </td>
                            <td className="dashboard-score-cell">
                              <span
                                className="dashboard-score-badge"
                                style={{
                                  background: p.score >= 80 ? '#e6f4d7' : p.score >= 50 ? '#fff8e1' : '#fdecea',
                                  color: p.score >= 80 ? '#4a7c2e' : p.score >= 50 ? '#8a6000' : '#c62828',
                                }}
                              >
                                {p.score} %
                              </span>
                            </td>
                            <td style={{ color: 'var(--text-muted)', fontSize: 13 }}>
                              {new Date(p.updatedAt).toLocaleDateString('de-AT')}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </>
        )}

        <div style={{ marginTop: 32 }}>
          <Link href="/" className="dashboard-back-link">&larr; Zurück zur Startseite</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
