'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ConfirmModal from '@/components/ConfirmModal';

interface Teacher {
  id: string;
  email: string;
  createdAt: string;
  studentCount: number;
  completedTasksCount: number;
}

export default function AdminPage() {
  const router = useRouter();
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [totalStudents, setTotalStudents] = useState<number>(0);
  const [totalCompletedTasks, setTotalCompletedTasks] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

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

  const loadData = useCallback(async () => {
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

  useEffect(() => { loadData(); }, [loadData]);

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

  // Delete teacher + all data (via overlay confirmation)
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
            await loadData();
          }
        } catch {
          setError('Netzwerkfehler.');
        } finally {
          setConfirmModal((prev) => ({ ...prev, isOpen: false, loading: false }));
        }
      },
    });
  };

  return (
    <div className="site-wrapper">
      <Header />
      <main className="content-main" style={{ padding: '32px 24px', maxWidth: 960, margin: '0 auto', width: '100%' }}>
        <h1 style={{ marginBottom: 4 }}>Admin-Bereich</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: 20, fontSize: 14 }}>
          Übersicht aller registrierten Lehrpersonen, ihrer Schüleraccounts und erledigten Aufgaben.
        </p>

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

        {error && <p className="login-error" style={{ marginBottom: 16 }}>{error}</p>}
        {success && (
          <p style={{ background: '#e6f4d7', color: '#2e6b0e', borderRadius: 6, padding: '10px 14px', marginBottom: 16, fontSize: 14, fontWeight: 600 }}>
            {success}
          </p>
        )}

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
