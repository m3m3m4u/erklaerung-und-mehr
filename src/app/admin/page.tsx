'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ConfirmModal from '@/components/ConfirmModal';
import { AnalyticsReport, Timeframe } from '@/lib/analytics';

interface Teacher {
  id: string;
  email: string;
  createdAt: string;
  studentCount: number;
  completedTasksCount: number;
}

export default function AdminPage() {
  const router = useRouter();

  // Active Tab
  const [activeTab, setActiveTab] = useState<'analytics' | 'users'>('analytics');

  // Teachers State
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [totalStudents, setTotalStudents] = useState<number>(0);
  const [totalCompletedTasks, setTotalCompletedTasks] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Analytics State
  const [timeframe, setTimeframe] = useState<Timeframe>('7d');
  const [analytics, setAnalytics] = useState<AnalyticsReport | null>(null);
  const [analyticsLoading, setAnalyticsLoading] = useState(false);
  const [pageSearch, setPageSearch] = useState('');

  // Confirmation overlay modal state
  const [confirmModal, setConfirmModal] = useState<{
    isOpen: boolean;
    title: string;
    message: React.ReactNode;
    confirmLabel: string;
    loading: boolean;
    onConfirm: () => Promise<void>;
  }>({
    isOpen: false,
    title: '',
    message: null,
    confirmLabel: 'Löschen',
    loading: false,
    onConfirm: async () => {},
  });

  // Per-teacher reset state
  const [resetTeacherId, setResetTeacherId] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [resetLoading, setResetLoading] = useState(false);

  // Verify admin session
  useEffect(() => {
    fetch('/api/auth/me')
      .then((r) => r.json())
      .then((data) => {
        if (!data.user || data.user.role !== 'admin') {
          router.replace('/');
        }
      })
      .catch(() => router.replace('/'));
  }, [router]);

  // Load User Data
  const loadUserData = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/admin/users');
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Fehler beim Laden.');
      } else {
        setTeachers(data.teachers || []);
        setTotalStudents(data.totalStudents ?? 0);
        setTotalCompletedTasks(data.totalCompletedTasks ?? 0);
      }
    } catch {
      setError('Netzwerkfehler.');
    } finally {
      setLoading(false);
    }
  }, []);

  // Load Analytics Data
  const loadAnalyticsData = useCallback(async (tf: Timeframe) => {
    setAnalyticsLoading(true);
    try {
      const res = await fetch(`/api/admin/analytics?timeframe=${tf}`);
      const data = await res.json();
      if (res.ok) {
        setAnalytics(data);
      }
    } catch (e) {
      console.error('Failed to load analytics:', e);
    } finally {
      setAnalyticsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (activeTab === 'users') {
      loadUserData();
    } else {
      loadAnalyticsData(timeframe);
    }
  }, [activeTab, timeframe, loadUserData, loadAnalyticsData]);

  const showSuccess = (msg: string) => {
    setSuccess(msg);
    setTimeout(() => setSuccess(''), 4000);
  };

  // Reset teacher password
  const handlePasswordReset = async (teacherId: string) => {
    if (!newPassword.trim()) { setError('Bitte neues Passwort eingeben.'); return; }
    if (newPassword.trim().length < 6) { setError('Passwort muss mindestens 6 Zeichen lang sein.'); return; }
    setResetLoading(true);
    setError('');
    try {
      const res = await fetch('/api/admin/reset', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'teacher-password', id: teacherId, newPassword }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Fehler.');
      } else {
        setResetTeacherId('');
        setNewPassword('');
        showSuccess('Passwort wurde erfolgreich zurückgesetzt.');
      }
    } catch {
      setError('Netzwerkfehler.');
    } finally {
      setResetLoading(false);
    }
  };

  // Delete teacher + all data
  const promptDeleteTeacher = (teacherId: string, email: string, studentCount: number) => {
    setError('');
    setConfirmModal({
      isOpen: true,
      title: 'Lehrperson löschen?',
      message: (
        <>
          Möchtest du die Lehrperson <strong>„{email}“</strong> und alle zugehörigen <strong>{studentCount}</strong> Schüleraccounts sowie alle Fortschrittsdaten wirklich unwiderruflich löschen?
        </>
      ),
      confirmLabel: 'Lehrperson löschen',
      loading: false,
      onConfirm: async () => {
        setConfirmModal((prev) => ({ ...prev, loading: true }));
        try {
          const res = await fetch('/api/admin/users', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ teacherId }),
          });
          const data = await res.json();
          if (!res.ok) {
            setError(data.error || 'Fehler.');
          } else {
            showSuccess(`Lehrperson „${email}“ wurde gelöscht.`);
            await loadUserData();
          }
        } catch {
          setError('Netzwerkfehler.');
        } finally {
          setConfirmModal((prev) => ({ ...prev, isOpen: false, loading: false }));
        }
      },
    });
  };

  // Filtered pages for table search
  const filteredPages = (analytics?.pages || []).filter(
    (p) =>
      p.path.toLowerCase().includes(pageSearch.toLowerCase()) ||
      p.name.toLowerCase().includes(pageSearch.toLowerCase())
  );

  const maxHourlyViews = Math.max(...(analytics?.hourly || []).map((h) => h.views), 1);
  const maxPageViews = Math.max(...(analytics?.pages || []).map((p) => p.views), 1);

  return (
    <div className="site-wrapper">
      <Header />
      <main className="content-main" style={{ padding: '32px 24px', maxWidth: 1060, margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
          <div>
            <h1 style={{ marginBottom: 4 }}>Admin-Bereich</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: 14, margin: 0 }}>
              Verwaltung der Plattform, Benutzerkonten und Besucher-Statistiken.
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="admin-tab-nav">
          <button
            type="button"
            className={`admin-tab-btn ${activeTab === 'analytics' ? 'active' : ''}`}
            onClick={() => setActiveTab('analytics')}
          >
            📊 Website-Analytics
          </button>
          <button
            type="button"
            className={`admin-tab-btn ${activeTab === 'users' ? 'active' : ''}`}
            onClick={() => setActiveTab('users')}
          >
            👥 Benutzer &amp; Klassen ({teachers.length > 0 ? teachers.length : '...'})
          </button>
        </div>

        {error && <p className="login-error" style={{ marginBottom: 16 }}>{error}</p>}
        {success && (
          <p style={{ background: '#e6f4d7', color: '#2e6b0e', borderRadius: 6, padding: '10px 14px', marginBottom: 16, fontSize: 14, fontWeight: 600 }}>
            {success}
          </p>
        )}

        {/* ========================================================================= */}
        {/* TAB 1: WEBSITE ANALYTICS                                                  */}
        {/* ========================================================================= */}
        {activeTab === 'analytics' && (
          <div>
            {/* Header Controls: Timeframe Filter + Live Indicator */}
            <div className="analytics-header-controls">
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                <div className="analytics-live-badge">
                  <span className="analytics-live-dot" />
                  <span>
                    <strong>{analytics?.activeNow ?? 0}</strong> {analytics?.activeNow === 1 ? 'Besucher' : 'Besucher'} aktuell online
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                <div className="analytics-filter-group">
                  <button
                    type="button"
                    className={`analytics-filter-btn ${timeframe === 'today' ? 'active' : ''}`}
                    onClick={() => setTimeframe('today')}
                  >
                    Heute
                  </button>
                  <button
                    type="button"
                    className={`analytics-filter-btn ${timeframe === '7d' ? 'active' : ''}`}
                    onClick={() => setTimeframe('7d')}
                  >
                    Letzte 7 Tage
                  </button>
                  <button
                    type="button"
                    className={`analytics-filter-btn ${timeframe === '30d' ? 'active' : ''}`}
                    onClick={() => setTimeframe('30d')}
                  >
                    Letzte 30 Tage
                  </button>
                  <button
                    type="button"
                    className={`analytics-filter-btn ${timeframe === 'all' ? 'active' : ''}`}
                    onClick={() => setTimeframe('all')}
                  >
                    Gesamt
                  </button>
                </div>

                <button
                  type="button"
                  className="analytics-refresh-btn"
                  onClick={() => loadAnalyticsData(timeframe)}
                  title="Statistiken aktualisieren"
                  disabled={analyticsLoading}
                >
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 4 23 10 17 10" />
                    <polyline points="1 20 1 14 7 14" />
                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                  </svg>
                  <span>{analyticsLoading ? 'Lädt...' : 'Aktualisieren'}</span>
                </button>
              </div>
            </div>

            {/* 4 KPI Summary Cards */}
            <div className="analytics-kpi-grid">
              <div className="analytics-kpi-card">
                <div className="analytics-kpi-label">
                  👁️ Aufrufe gesamt
                </div>
                <div className="analytics-kpi-value">
                  {analytics?.summary.totalViews.toLocaleString('de-AT') ?? 0}
                </div>
                <div className="analytics-kpi-sub">
                  Seitenaufrufe ({timeframe === 'today' ? 'Heute' : timeframe === '7d' ? '7 Tage' : timeframe === '30d' ? '30 Tage' : 'Gesamt'})
                </div>
              </div>

              <div className="analytics-kpi-card">
                <div className="analytics-kpi-label">
                  👤 Besucher (Sitzungen)
                </div>
                <div className="analytics-kpi-value">
                  {analytics?.summary.uniqueVisitors.toLocaleString('de-AT') ?? 0}
                </div>
                <div className="analytics-kpi-sub">
                  Eindeutige Browser-Sitzungen
                </div>
              </div>

              <div className="analytics-kpi-card">
                <div className="analytics-kpi-label">
                  ⏱️ Ø Verweildauer
                </div>
                <div className="analytics-kpi-value" style={{ fontSize: 24 }}>
                  {analytics?.summary.avgDurationFormatted || '0 Sek.'}
                </div>
                <div className="analytics-kpi-sub">
                  Durchschnitt pro Seitenaufruf
                </div>
              </div>

              <div className="analytics-kpi-card">
                <div className="analytics-kpi-label">
                  🕒 Haupt-Uhrzeit
                </div>
                <div className="analytics-kpi-value" style={{ fontSize: 22 }}>
                  {analytics?.summary.peakHour.label || '–'}
                </div>
                <div className="analytics-kpi-sub">
                  Spitze: {analytics?.summary.peakHour.views ?? 0} Aufrufe
                </div>
              </div>
            </div>

            {/* SECTION 4: 24h-Verteilung auf den Tag */}
            <div className="analytics-section-card">
              <div className="analytics-section-header">
                <div>
                  <h2 className="analytics-section-title">
                    🕒 4) Verteilung auf den Tag (24-Stunden-Aktivität)
                  </h2>
                  <div className="analytics-section-subtitle">
                    Wann greifen Schüler:innen und Lehrpersonen auf die Lerninhalte zu?
                  </div>
                </div>
                {analytics?.summary.peakHour && (
                  <span style={{ fontSize: 13, background: 'var(--green-light)', color: 'var(--green-dark)', padding: '4px 10px', borderRadius: 6, fontWeight: 600, border: '1px solid var(--green-border)' }}>
                    ⭐ Spitzenzeit: {analytics.summary.peakHour.label}
                  </span>
                )}
              </div>

              {/* 24-Hour Bar Chart */}
              <div className="analytics-chart-container">
                <div className="analytics-hourly-bars">
                  {(analytics?.hourly || []).map((h) => {
                    const heightPercent = maxHourlyViews > 0 ? (h.views / maxHourlyViews) * 100 : 0;
                    const isPeak = h.hour === analytics?.summary.peakHour.hour && h.views > 0;
                    return (
                      <div key={h.hour} className="analytics-bar-col">
                        <div className="analytics-bar-tooltip">
                          <strong>{h.label} Uhr</strong>: {h.views} {h.views === 1 ? 'Aufruf' : 'Aufrufe'} ({h.percentage}%)
                        </div>
                        <div
                          className={`analytics-bar ${isPeak ? 'is-peak' : ''}`}
                          style={{
                            height: `${Math.max(heightPercent, h.views > 0 ? 8 : 2)}%`,
                          }}
                        />
                        <span className="analytics-bar-label">{h.hour % 2 === 0 ? `${h.hour}h` : ''}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Day Segments Summary */}
              <div className="analytics-segments-grid">
                {(analytics?.daySegments || []).map((seg) => (
                  <div key={seg.name} className="analytics-segment-item">
                    <div className="analytics-segment-title">
                      <span>{seg.badge}</span>
                      <span style={{ fontSize: 11 }}>{seg.timeRange}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginTop: 4 }}>
                      <div className="analytics-segment-val">{seg.count}</div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-muted)' }}>{seg.percentage}%</div>
                    </div>
                    <div className="analytics-dist-track" style={{ marginTop: 6, height: 5 }}>
                      <div className="analytics-dist-fill" style={{ width: `${seg.percentage}%`, background: 'var(--green-primary)' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2-Column Grid: Herkunft & Verweildauer */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 24, marginBottom: 24 }}>
              {/* SECTION 2: Woher kommen die Besucher (Traffic-Quellen & Referrer) */}
              <div className="analytics-section-card" style={{ marginBottom: 0 }}>
                <div className="analytics-section-header">
                  <div>
                    <h2 className="analytics-section-title">
                      🌐 2) Woher kommen die Besucher?
                    </h2>
                    <div className="analytics-section-subtitle">
                      Traffic-Quellen &amp; verweisende Webseiten / Portale
                    </div>
                  </div>
                </div>

                <div className="analytics-dist-list">
                  {(analytics?.sources.categories || []).map((cat) => (
                    <div key={cat.key} className="analytics-dist-item">
                      <div className="analytics-dist-header">
                        <span>{cat.label}</span>
                        <span>
                          <strong>{cat.count}</strong> ({cat.percentage}%)
                        </span>
                      </div>
                      <div className="analytics-dist-track">
                        <div
                          className="analytics-dist-fill"
                          style={{
                            width: `${cat.percentage}%`,
                            background:
                              cat.key === 'education'
                                ? '#2e6b0e'
                                : cat.key === 'search'
                                ? 'var(--green-primary)'
                                : cat.key === 'social'
                                ? '#805ad5'
                                : cat.key === 'direct'
                                ? '#3182ce'
                                : '#a0aec0',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Top Referrers List */}
                <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid var(--border-light)' }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 10 }}>
                    Top Referrer-Domains
                  </div>
                  {analytics?.sources.topReferrers && analytics.sources.topReferrers.length > 0 ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {analytics.sources.topReferrers.map((ref) => (
                        <div
                          key={ref.host}
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            fontSize: 13,
                            padding: '4px 8px',
                            background: 'var(--bg-body)',
                            borderRadius: 4,
                          }}
                        >
                          <span style={{ fontWeight: 600, color: 'var(--text-color)' }}>{ref.host}</span>
                          <span style={{ color: 'var(--text-muted)', fontSize: 12 }}>
                            {ref.count} Aufrufe ({ref.percentage}%)
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p style={{ color: 'var(--text-muted)', fontSize: 13 }}>Noch keine externen Referrer erfasst.</p>
                  )}
                </div>
              </div>

              {/* SECTION 3: Verweildauer-Analyse */}
              <div className="analytics-section-card" style={{ marginBottom: 0 }}>
                <div className="analytics-section-header">
                  <div>
                    <h2 className="analytics-section-title">
                      ⏱️ 3) Verweildauer auf der Website
                    </h2>
                    <div className="analytics-section-subtitle">
                      Wie lange beschäftigen sich Besucher mit den Inhalten?
                    </div>
                  </div>
                </div>

                <div className="analytics-dist-list">
                  {(analytics?.durations.buckets || []).map((b, i) => (
                    <div key={b.key} className="analytics-dist-item">
                      <div className="analytics-dist-header">
                        <span>{b.label}</span>
                        <span>
                          <strong>{b.count}</strong> ({b.percentage}%)
                        </span>
                      </div>
                      <div className="analytics-dist-track">
                        <div
                          className="analytics-dist-fill"
                          style={{
                            width: `${b.percentage}%`,
                            background:
                              i >= 3
                                ? 'var(--green-dark)'
                                : i >= 1
                                ? 'var(--green-primary)'
                                : '#e2e8f0',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Device Breakdown */}
                <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid var(--border-light)' }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 10 }}>
                    Verwendete Endgeräte
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
                    {(analytics?.devices || []).map((dev) => (
                      <div
                        key={dev.device}
                        style={{
                          background: 'var(--bg-body)',
                          border: '1px solid var(--border-light)',
                          borderRadius: 6,
                          padding: '8px 10px',
                          textAlign: 'center',
                        }}
                      >
                        <div style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 2 }}>{dev.label}</div>
                        <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--green-dark)' }}>{dev.percentage}%</div>
                        <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{dev.count} Aufrufe</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 1: Anzahl Aufrufe gesamt und pro Seite */}
            <div className="analytics-section-card">
              <div className="analytics-section-header">
                <div>
                  <h2 className="analytics-section-title">
                    📄 1) Aufrufe nach Seiten (Top-Inhalte)
                  </h2>
                  <div className="analytics-section-subtitle">
                    Beliebteste Themen, Fächer und Seiten der Plattform
                  </div>
                </div>
                <div style={{ minWidth: 220 }}>
                  <input
                    type="text"
                    className="login-input"
                    placeholder="Seiten filtern..."
                    value={pageSearch}
                    onChange={(e) => setPageSearch(e.target.value)}
                    style={{ padding: '6px 12px', fontSize: 13 }}
                  />
                </div>
              </div>

              <div className="analytics-table-wrapper">
                {filteredPages.length === 0 ? (
                  <p style={{ color: 'var(--text-muted)', padding: '16px 0' }}>
                    {analytics?.summary.totalViews === 0
                      ? 'Noch keine Seitenaufrufe im ausgewählten Zeitraum erfasst.'
                      : 'Keine passenden Seiten gefunden.'}
                  </p>
                ) : (
                  <table className="analytics-table">
                    <thead>
                      <tr>
                        <th style={{ width: 44 }}>Rang</th>
                        <th>Seite / Pfad</th>
                        <th style={{ width: 140 }}>Aufrufe</th>
                        <th style={{ width: 100 }}>Besucher</th>
                        <th style={{ width: 130 }}>Ø Verweildauer</th>
                        <th style={{ width: 80, textAlign: 'right' }}>Anteil</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredPages.map((page, index) => {
                        const barWidth = maxPageViews > 0 ? (page.views / maxPageViews) * 100 : 0;
                        return (
                          <tr key={page.path}>
                            <td>
                              <span className={`analytics-rank ${index === 0 ? 'top-1' : index === 1 ? 'top-2' : index === 2 ? 'top-3' : ''}`}>
                                {index + 1}
                              </span>
                            </td>
                            <td>
                              <div style={{ fontWeight: 600, color: 'var(--green-dark)' }}>
                                {page.name}
                              </div>
                              <Link
                                href={page.path}
                                target="_blank"
                                style={{ fontSize: 12, color: 'var(--text-muted)', textDecoration: 'none' }}
                              >
                                {page.path} ↗
                              </Link>
                            </td>
                            <td>
                              <div style={{ fontWeight: 700 }}>{page.views.toLocaleString('de-AT')}</div>
                              <div className="analytics-bar-inline" style={{ width: `${Math.max(barWidth, 4)}%` }} />
                            </td>
                            <td style={{ color: 'var(--text-muted)' }}>
                              {page.uniqueVisitors.toLocaleString('de-AT')}
                            </td>
                            <td>
                              <span style={{ fontSize: 13, background: 'var(--bg-body)', padding: '2px 8px', borderRadius: 4, border: '1px solid var(--border-light)' }}>
                                {page.avgDurationFormatted}
                              </span>
                            </td>
                            <td style={{ textAlign: 'right', fontWeight: 600 }}>
                              {page.percentage}%
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: BENUTZER & KLASSEN (Bestehende Lehrpersonen-Verwaltung)             */}
        {/* ========================================================================= */}
        {activeTab === 'users' && (
          <div>
            {/* Stats summary bar */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: 16,
                marginBottom: 24,
              }}
            >
              <div style={{ background: 'var(--bg-white)', border: '1px solid var(--border-light)', borderRadius: 8, padding: '16px 20px' }}>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 4 }}>
                  Lehrpersonen
                </div>
                <div style={{ fontSize: 26, fontWeight: 700, color: 'var(--green-dark)' }}>
                  {teachers.length}
                </div>
              </div>
              <div style={{ background: 'var(--bg-white)', border: '1px solid var(--border-light)', borderRadius: 8, padding: '16px 20px' }}>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 4 }}>
                  Schüler:innen gesamt
                </div>
                <div style={{ fontSize: 26, fontWeight: 700, color: 'var(--green-dark)' }}>
                  {totalStudents}
                </div>
              </div>
              <div style={{ background: 'var(--bg-white)', border: '1px solid var(--border-light)', borderRadius: 8, padding: '16px 20px' }}>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 4 }}>
                  Erledigte Aufgaben
                </div>
                <div style={{ fontSize: 26, fontWeight: 700, color: 'var(--green-dark)' }}>
                  {totalCompletedTasks}
                </div>
              </div>
            </div>

            {loading ? (
              <p style={{ color: 'var(--text-muted)' }}>Lädt...</p>
            ) : teachers.length === 0 ? (
              <div className="dashboard-section">
                <p style={{ color: 'var(--text-muted)' }}>Noch keine Lehrpersonen registriert.</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {teachers.map((teacher) => (
                  <div
                    key={teacher.id}
                    className="dashboard-section admin-teacher-card"
                    style={{ marginBottom: 0, padding: '18px 22px' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                          <span className="admin-teacher-email" style={{ fontSize: 16 }}>{teacher.email}</span>
                          <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                            (Registriert: {new Date(teacher.createdAt).toLocaleDateString('de-AT')})
                          </span>
                        </div>

                        <div style={{ display: 'flex', gap: 12, marginTop: 8, flexWrap: 'wrap' }}>
                          <span
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: 5,
                              background: 'var(--green-light)',
                              color: 'var(--green-dark)',
                              border: '1px solid var(--green-border)',
                              borderRadius: 6,
                              padding: '3px 10px',
                              fontSize: 13,
                              fontWeight: 600,
                            }}
                          >
                            <strong>{teacher.studentCount}</strong> Schüleraccounts
                          </span>
                          <span
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: 5,
                              background: '#f0f4f8',
                              color: '#2d3748',
                              border: '1px solid #d2d6dc',
                              borderRadius: 6,
                              padding: '3px 10px',
                              fontSize: 13,
                              fontWeight: 600,
                            }}
                          >
                            <strong>{teacher.completedTasksCount}</strong> erledigte Aufgaben
                          </span>
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                        {resetTeacherId !== teacher.id && (
                          <button
                            type="button"
                            className="admin-action-btn"
                            onClick={() => { setResetTeacherId(teacher.id); setNewPassword(''); setError(''); }}
                            style={{ fontSize: 13, padding: '6px 12px' }}
                          >
                            Passwort ändern
                          </button>
                        )}
                        <button
                          type="button"
                          className="dashboard-delete-btn"
                          onClick={() => promptDeleteTeacher(teacher.id, teacher.email, teacher.studentCount)}
                          title="Lehrperson löschen"
                          style={{ fontSize: 13, padding: '6px 12px', border: '1px solid #f5c2c7', background: '#fff5f5', borderRadius: 6 }}
                        >
                          Löschen
                        </button>
                      </div>
                    </div>

                    {/* Inline password reset form */}
                    {resetTeacherId === teacher.id && (
                      <div
                        style={{
                          marginTop: 14,
                          paddingTop: 14,
                          borderTop: '1px dashed var(--border-light)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 10,
                          flexWrap: 'wrap',
                        }}
                      >
                        <input
                          type="password"
                          className="login-input"
                          placeholder="Neues Passwort (mind. 6 Zeichen)"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          style={{ maxWidth: 280 }}
                          autoFocus
                        />
                        <button
                          type="button"
                          className="dashboard-add-btn"
                          onClick={() => handlePasswordReset(teacher.id)}
                          disabled={resetLoading}
                          style={{ fontSize: 13 }}
                        >
                          {resetLoading ? 'Speichern...' : 'Speichern'}
                        </button>
                        <button
                          type="button"
                          className="login-back-btn"
                          onClick={() => { setResetTeacherId(''); setNewPassword(''); }}
                          style={{ marginBottom: 0 }}
                        >
                          Abbrechen
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <div style={{ marginTop: 24 }}>
          <Link href="/" className="dashboard-back-link">&larr; Zurück zur Startseite</Link>
        </div>

        {/* Confirmation Modal Overlay */}
        <ConfirmModal
          isOpen={confirmModal.isOpen}
          title={confirmModal.title}
          message={confirmModal.message}
          confirmLabel={confirmModal.confirmLabel}
          confirmVariant="danger"
          loading={confirmModal.loading}
          onConfirm={confirmModal.onConfirm}
          onCancel={() => {
            if (!confirmModal.loading) {
              setConfirmModal((prev) => ({ ...prev, isOpen: false }));
            }
          }}
        />
      </main>
      <Footer />
    </div>
  );
}
