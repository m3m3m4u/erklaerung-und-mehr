'use client';

import React, { useState, useEffect, useCallback } from 'react';

interface TeacherExerciseAssignerProps {
  exerciseId: string;
  exerciseTitle?: string;
}

interface ClassItem {
  name: string;
  studentCount: number;
  assigned: boolean;
}

export default function TeacherExerciseAssigner({
  exerciseId,
  exerciseTitle,
}: TeacherExerciseAssignerProps) {
  const [isTeacher, setIsTeacher] = useState(false);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [classes, setClasses] = useState<ClassItem[]>([]);
  const [selectedClasses, setSelectedClasses] = useState<Set<string>>(new Set());
  const [assignedClassNames, setAssignedClassNames] = useState<string[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [loadingData, setLoadingData] = useState(false);
  const [saving, setSaving] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  // Extract clean ID (e.g. "2105" or slug)
  const cleanId = exerciseId
    ? exerciseId.replace(/^\/h5p-content\//, '').replace(/^\//, '').trim()
    : '';

  // Check if current user is teacher
  useEffect(() => {
    fetch('/api/auth/me')
      .then((r) => r.json())
      .then((data) => {
        if (data.user && data.user.role === 'teacher') {
          setIsTeacher(true);
        } else {
          setIsTeacher(false);
        }
      })
      .catch(() => setIsTeacher(false))
      .finally(() => setLoadingAuth(false));
  }, []);

  const loadStatus = useCallback(async () => {
    if (!cleanId || !isTeacher) return;
    try {
      const res = await fetch(`/api/teacher/assign-exercise?exerciseId=${encodeURIComponent(cleanId)}`);
      if (res.ok) {
        const data = await res.json();
        setClasses(data.classes || []);
        const assigned: string[] = data.assignedClasses || [];
        setAssignedClassNames(assigned);
        setSelectedClasses(new Set(assigned));
      }
    } catch {
      // ignore
    }
  }, [cleanId, isTeacher]);

  useEffect(() => {
    if (isTeacher) {
      loadStatus();
    }
  }, [isTeacher, loadStatus]);

  const openModal = async () => {
    setModalOpen(true);
    setLoadingData(true);
    try {
      const res = await fetch(`/api/teacher/assign-exercise?exerciseId=${encodeURIComponent(cleanId)}`);
      if (res.ok) {
        const data = await res.json();
        setClasses(data.classes || []);
        const assigned: string[] = data.assignedClasses || [];
        setAssignedClassNames(assigned);
        setSelectedClasses(new Set(assigned));
      }
    } catch {
      // ignore
    } finally {
      setLoadingData(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    setSuccessMsg('');
    try {
      const classNames = Array.from(selectedClasses);
      const res = await fetch('/api/teacher/assign-exercise', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          exerciseId: cleanId,
          classNames,
        }),
      });
      if (res.ok) {
        setAssignedClassNames(classNames);
        setSuccessMsg(
          classNames.length > 0
            ? `Erfolgreich zugewiesen an: ${classNames.join(', ')}`
            : 'Zuweisung für alle Klassen aufgehoben.'
        );
        setTimeout(() => {
          setSuccessMsg('');
          setModalOpen(false);
        }, 1200);
      }
    } catch {
      // ignore
    } finally {
      setSaving(false);
    }
  };

  if (loadingAuth || !isTeacher || !cleanId) {
    return null;
  }

  return (
    <>
      <div
        style={{
          background: 'var(--bg-white)',
          border: '1.5px solid var(--green-primary)',
          borderRadius: 6,
          padding: '10px 16px',
          marginBottom: 14,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 10,
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              background: 'var(--green-light)',
              color: 'var(--green-dark)',
              border: '1px solid var(--green-border)',
              padding: '3px 8px',
              borderRadius: 4,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            Lehrperson
          </span>
          <span style={{ fontSize: 13, color: 'var(--text-color)' }}>
            {assignedClassNames.length > 0 ? (
              <>
                Zugewiesen an:{' '}
                <strong style={{ color: 'var(--green-dark)' }}>
                  {assignedClassNames.join(', ')}
                </strong>
              </>
            ) : (
              <span style={{ color: 'var(--text-muted)' }}>
                Diese Übung ist noch keiner Klasse zugewiesen.
              </span>
            )}
          </span>
        </div>

        <button
          type="button"
          onClick={openModal}
          className="dashboard-add-btn"
          style={{
            fontSize: 13,
            padding: '6px 14px',
            background: 'var(--green-primary)',
            color: '#ffffff',
            borderRadius: 5,
            fontWeight: 600,
          }}
        >
          Lernenden zuweisen
        </button>
      </div>

      {modalOpen && (
        <div
          className="login-modal-overlay"
          onClick={() => {
            if (!saving) setModalOpen(false);
          }}
          style={{ zIndex: 9999 }}
        >
          <div
            className="login-modal"
            style={{ maxWidth: 480 }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="login-modal-close"
              onClick={() => {
                if (!saving) setModalOpen(false);
              }}
              aria-label="Schließen"
              disabled={saving}
            >
              &times;
            </button>

            <div className="login-modal-body" style={{ padding: '24px 22px 20px' }}>
              <h2 className="login-modal-title" style={{ fontSize: 18, marginBottom: 4 }}>
                Übung Lernenden zuweisen
              </h2>
              <p className="login-modal-subtitle" style={{ fontSize: 13, marginBottom: 14 }}>
                {exerciseTitle ? <strong>{exerciseTitle}</strong> : `Übung ${cleanId}`}
              </p>

              {successMsg && (
                <div
                  style={{
                    background: '#f0f7eb',
                    border: '1px solid #c8e4b6',
                    color: 'var(--green-dark)',
                    padding: '8px 12px',
                    borderRadius: 4,
                    fontSize: 13,
                    fontWeight: 600,
                    marginBottom: 12,
                  }}
                >
                  {successMsg}
                </div>
              )}

              {loadingData ? (
                <p style={{ color: 'var(--text-muted)', fontSize: 13, padding: '16px 0' }}>
                  Klassen werden geladen...
                </p>
              ) : classes.length === 0 ? (
                <div style={{ padding: '12px 0' }}>
                  <p style={{ color: 'var(--text-muted)', fontSize: 13 }}>
                    Du hast aktuell noch keine Klassen angelegt.
                  </p>
                  <a
                    href="/dashboard"
                    className="button-link"
                    style={{ fontSize: 12, marginTop: 6 }}
                  >
                    Zum Dashboard &amp; Accounts anlegen
                  </a>
                </div>
              ) : (
                <>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, fontSize: 12 }}>
                    <span style={{ color: 'var(--text-muted)' }}>
                      Wähle eine oder mehrere Klassen aus:
                    </span>
                    <div style={{ display: 'flex', gap: 6 }}>
                      <button
                        type="button"
                        className="admin-action-btn"
                        style={{ fontSize: 11, padding: '2px 6px' }}
                        onClick={() => setSelectedClasses(new Set(classes.map((c) => c.name)))}
                      >
                        Alle
                      </button>
                      <button
                        type="button"
                        className="admin-action-btn"
                        style={{ fontSize: 11, padding: '2px 6px' }}
                        onClick={() => setSelectedClasses(new Set())}
                      >
                        Keine
                      </button>
                    </div>
                  </div>

                  <div
                    style={{
                      maxHeight: 220,
                      overflowY: 'auto',
                      border: '1px solid var(--border-light)',
                      borderRadius: 6,
                      padding: 8,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 4,
                      marginBottom: 16,
                    }}
                  >
                    {classes.map((c) => {
                      const isChecked = selectedClasses.has(c.name);
                      return (
                        <label
                          key={c.name}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '8px 10px',
                            borderRadius: 4,
                            background: isChecked ? '#f0f7eb' : 'transparent',
                            cursor: 'pointer',
                            fontSize: 13,
                            userSelect: 'none',
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={(e) => {
                                const next = new Set(selectedClasses);
                                if (e.target.checked) next.add(c.name);
                                else next.delete(c.name);
                                setSelectedClasses(next);
                              }}
                              style={{ width: 16, height: 16, cursor: 'pointer' }}
                            />
                            <span style={{ fontWeight: isChecked ? 700 : 500, color: isChecked ? 'var(--green-dark)' : 'inherit' }}>
                              Klasse {c.name}
                            </span>
                          </div>
                          <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                            {c.studentCount} Schüler
                          </span>
                        </label>
                      );
                    })}
                  </div>

                  <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
                    <button
                      type="button"
                      className="admin-action-btn"
                      onClick={() => setModalOpen(false)}
                      disabled={saving}
                      style={{ padding: '7px 14px', fontSize: 13 }}
                    >
                      Abbrechen
                    </button>
                    <button
                      type="button"
                      className="dashboard-add-btn"
                      onClick={handleSave}
                      disabled={saving}
                      style={{ padding: '7px 16px', fontSize: 13 }}
                    >
                      {saving ? 'Wird gespeichert...' : 'Zuordnung speichern'}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
