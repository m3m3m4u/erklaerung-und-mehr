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

export default function MeinFortschrittPage() {
  const router = useRouter();
  const [progress, setProgress] = useState<ProgressEntry[]>([]);
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
    fetch('/api/student/progress')
      .then((r) => r.json())
      .then((data) => setProgress(data.progress || []))
      .catch(() => setProgress([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="site-wrapper">
      <Header />
      <main className="content-main" style={{ padding: '32px 24px', maxWidth: 800, margin: '0 auto', width: '100%' }}>
        <h1 style={{ marginBottom: 4 }}>Mein Fortschritt</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: 28, fontSize: 14 }}>
          Schüler-Code: <strong>{studentCode}</strong>
        </p>

        {loading ? (
          <p style={{ color: 'var(--text-muted)' }}>Lädt...</p>
        ) : progress.length === 0 ? (
          <div className="dashboard-section">
            <p style={{ color: 'var(--text-muted)' }}>
              Du hast noch keine Kurse oder Übungen bearbeitet. Geh auf eine Themen-Seite und probiere eine H5P-Übung!
            </p>
            <Link href="/" style={{ color: 'var(--green-dark)', marginTop: 16, display: 'inline-block' }}>
              Zu den Themen
            </Link>
          </div>
        ) : (
          <div className="dashboard-section">
            <h2>Bearbeitete Kurse ({progress.length})</h2>
            <div style={{ overflowX: 'auto', marginTop: 16 }}>
              <table className="dashboard-progress-table">
                <thead>
                  <tr>
                    <th style={{ textAlign: 'left' }}>Kurs / Thema</th>
                    <th>Gesamtfortschritt</th>
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
          </div>
        )}

        <div style={{ marginTop: 32 }}>
          <Link href="/" className="dashboard-back-link">&larr; Zurück zur Startseite</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
