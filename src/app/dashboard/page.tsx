'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ConfirmModal from '@/components/ConfirmModal';

interface Student {
  id: string;
  code: string;
  className: string;
}

interface ProgressEntry {
  studentId: string;
  h5pId: string;
  h5pTitle: string;
  score: number;
  updatedAt: string;
}

function downloadBlob(content: string, filename: string, mimeType: string) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export default function DashboardPage() {
  const router = useRouter();
  const [students, setStudents] = useState<Student[]>([]);
  const [progress, setProgress] = useState<ProgressEntry[]>([]);
  const [count, setCount] = useState<number>(20);
  const [classNameInput, setClassNameInput] = useState<string>('');
  const [selectedClassFilter, setSelectedClassFilter] = useState<string>('all');
  const [loading, setLoading] = useState(true);
  const [addLoading, setAddLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [copied, setCopied] = useState(false);
  const [teacherEmail, setTeacherEmail] = useState('');

  // Password change modal state
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordLoading, setPasswordLoading] = useState(false);

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

  // Check auth
  useEffect(() => {
    fetch('/api/auth/me')
      .then((r) => r.json())
      .then((data) => {
        if (!data.user || data.user.role !== 'teacher') {
          router.replace('/');
        } else {
          setTeacherEmail(data.user.email || '');
        }
      })
      .catch(() => router.replace('/'));
  }, [router]);

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const [studentsRes, progressRes] = await Promise.all([
        fetch('/api/teacher/students'),
        fetch('/api/teacher/progress'),
      ]);
      const studentsData = await studentsRes.json();
      const progressData = await progressRes.json();
      setStudents(studentsData.students || []);
      setProgress(progressData.progress || []);
    } catch {
      setError('Fehler beim Laden der Daten.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  // Collect distinct existing classes
  const existingClasses = Array.from(
    new Set(students.map((s) => s.className || 'Ohne Klasse'))
  ).sort();

  const handleAddStudents = async (e: React.FormEvent) => {
    e.preventDefault();
    const finalCount = Math.min(30, Math.max(1, count));
    const targetClass = classNameInput.trim() || 'Klasse 1';

    setAddLoading(true);
    setError('');
    try {
      const res = await fetch('/api/teacher/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ count: finalCount, className: targetClass }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Fehler beim Anlegen.');
      } else {
        setSelectedClassFilter(targetClass);
        setSuccessMsg(`${finalCount} Schüleraccounts für „${targetClass}“ erfolgreich angelegt.`);
        setTimeout(() => setSuccessMsg(''), 4000);
        await loadData();
      }
    } catch {
      setError('Netzwerkfehler.');
    } finally {
      setAddLoading(false);
    }
  };

  const promptDeleteStudent = (student: Student) => {
    setError('');
    setConfirmModal({
      isOpen: true,
      title: 'Schüleraccount löschen?',
      message: (
        <>
          Möchtest du den Schüleraccount mit Code <strong style={{ fontFamily: 'monospace', fontSize: 15, background: '#f0f7eb', padding: '2px 6px', borderRadius: 4 }}>{student.code}</strong> {student.className ? `(Klasse ${student.className})` : ''} und alle zugehörigen Fortschrittsdaten wirklich löschen?
        </>
      ),
      confirmLabel: 'Account löschen',
      loading: false,
      onConfirm: async () => {
        setConfirmModal((prev) => ({ ...prev, loading: true }));
        try {
          const res = await fetch(`/api/teacher/students/${student.id}`, { method: 'DELETE' });
          if (!res.ok) {
            const d = await res.json();
            setError(d.error || 'Fehler beim Löschen.');
          } else {
            setSuccessMsg(`Schüleraccount ${student.code} wurde gelöscht.`);
            setTimeout(() => setSuccessMsg(''), 4000);
            await loadData();
          }
        } catch {
          setError('Fehler beim Löschen.');
        } finally {
          setConfirmModal((prev) => ({ ...prev, isOpen: false, loading: false }));
        }
      },
    });
  };

  const promptDeleteClass = (className: string) => {
    setError('');
    const classStudents = students.filter((s) => (s.className || 'Ohne Klasse') === className);
    const countInClass = classStudents.length;

    setConfirmModal({
      isOpen: true,
      title: `Klasse „${className}“ löschen?`,
      message: (
        <>
          Möchtest du die gesamte Klasse <strong>„{className}“</strong> mit allen <strong>{countInClass}</strong> Schüleraccounts und deren Fortschrittsdaten wirklich unwiderruflich löschen?
        </>
      ),
      confirmLabel: 'Ganze Klasse löschen',
      loading: false,
      onConfirm: async () => {
        setConfirmModal((prev) => ({ ...prev, loading: true }));
        try {
          const res = await fetch('/api/teacher/classes', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ className }),
          });
          const data = await res.json();
          if (!res.ok) {
            setError(data.error || 'Fehler beim Löschen der Klasse.');
          } else {
            if (selectedClassFilter === className) {
              setSelectedClassFilter('all');
            }
            setSuccessMsg(`Klasse „${className}“ mit ${data.deletedCount || countInClass} Schüleraccounts wurde gelöscht.`);
            setTimeout(() => setSuccessMsg(''), 4000);
            await loadData();
          }
        } catch {
          setError('Fehler beim Löschen der Klasse.');
        } finally {
          setConfirmModal((prev) => ({ ...prev, isOpen: false, loading: false }));
        }
      },
    });
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError('');
    if (!currentPassword) {
      setPasswordError('Bitte gib dein aktuelles Passwort ein.');
      return;
    }
    if (!newPassword || newPassword.length < 6) {
      setPasswordError('Das neue Passwort muss mindestens 6 Zeichen lang sein.');
      return;
    }
    if (newPassword !== confirmNewPassword) {
      setPasswordError('Die neuen Passwörter stimmen nicht überein.');
      return;
    }

    setPasswordLoading(true);
    try {
      const res = await fetch('/api/teacher/password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ currentPassword, newPassword }),
      });
      const data = await res.json();
      if (!res.ok) {
        setPasswordError(data.error || 'Fehler beim Ändern des Passworts.');
      } else {
        setShowPasswordModal(false);
        setCurrentPassword('');
        setNewPassword('');
        setConfirmNewPassword('');
        setSuccessMsg('Dein Passwort wurde erfolgreich geändert.');
        setTimeout(() => setSuccessMsg(''), 4000);
      }
    } catch {
      setPasswordError('Netzwerkfehler beim Ändern des Passworts.');
    } finally {
      setPasswordLoading(false);
    }
  };

  // Filter students by selected class
  const filteredStudents =
    selectedClassFilter === 'all'
      ? students
      : students.filter((s) => (s.className || 'Ohne Klasse') === selectedClassFilter);

  const currentClassLabel = selectedClassFilter === 'all' ? 'Alle Klassen' : `Klasse ${selectedClassFilter}`;
  const currentDateStr = new Date().toLocaleDateString('de-AT');

  // Copy codes
  const handleCopyCodes = () => {
    if (filteredStudents.length === 0) return;
    const text = `Schülercodes (${currentClassLabel}):\n` + filteredStudents.map((s, idx) => `${idx + 1}. ${s.code} (${s.className})`).join('\n');
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  // Progress lookups
  const progressMap: Record<string, Record<string, number>> = {};
  for (const p of progress) {
    if (!progressMap[p.studentId]) progressMap[p.studentId] = {};
    progressMap[p.studentId][p.h5pId] = p.score;
  }

  const filteredStudentIds = new Set(filteredStudents.map((s) => s.id));
  const relevantProgress = progress.filter((p) => filteredStudentIds.has(p.studentId));

  const h5pMap: Record<string, string> = {};
  for (const p of relevantProgress) {
    h5pMap[p.h5pId] = p.h5pTitle || p.h5pId;
  }
  const h5pIds = Object.keys(h5pMap);

  // =========================================================================
  // 1. CODES EXPORT (PDF/Druck, Word, Excel)
  // =========================================================================

  const handlePrintCodes = () => {
    if (filteredStudents.length === 0) return;
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const rowsHtml = filteredStudents
      .map(
        (s, idx) => `
        <tr>
          <td style="text-align:center; width:40px;">${idx + 1}</td>
          <td style="font-family:monospace; font-weight:bold; font-size:15px; width:130px; text-align:center; letter-spacing:1px;">${s.code}</td>
          <td style="width:100px; text-align:center;">${s.className}</td>
          <td style="border-bottom: 1px solid #777; min-width:220px;">&nbsp;</td>
        </tr>`
      )
      .join('');

    printWindow.document.write(`
      <!DOCTYPE html>
      <html lang="de">
      <head>
        <meta charset="utf-8">
        <title>Schülerliste - Zugangs-Codes</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 24px; color: #111; }
          h1 { font-size: 20px; color: #2e6b0e; margin-bottom: 4px; }
          .meta { font-size: 13px; color: #555; margin-bottom: 20px; border-bottom: 2px solid #2e6b0e; padding-bottom: 8px; }
          table { width: 100%; border-collapse: collapse; margin-top: 10px; }
          th, td { border: 1px solid #aaa; padding: 8px 12px; font-size: 13px; }
          th { background: #f0f7eb; font-weight: bold; text-align: left; }
          @media print {
            body { padding: 0; }
            @page { margin: 1.5cm; }
          }
        </style>
      </head>
      <body>
        <h1>Schülerliste – Zugangs-Codes</h1>
        <div class="meta">
          <strong>Auswahl:</strong> ${currentClassLabel} &nbsp;|&nbsp;
          <strong>Anzahl Schüler:</strong> ${filteredStudents.length} &nbsp;|&nbsp;
          <strong>Datum:</strong> ${currentDateStr}
        </div>
        <table>
          <thead>
            <tr>
              <th style="text-align:center; width:40px;">Nr.</th>
              <th style="width:130px; text-align:center;">Schüler-Code</th>
              <th style="width:100px; text-align:center;">Klasse</th>
              <th>Name der Schülerin / des Schülers (handschriftlich)</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
      </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
    }, 250);
  };

  const handleExportCodesExcel = () => {
    if (filteredStudents.length === 0) return;
    let csv = '\uFEFFNr.;Schüler-Code;Klasse;Name (handschriftlich)\r\n';
    filteredStudents.forEach((s, idx) => {
      csv += `${idx + 1};${s.code};${s.className};\r\n`;
    });
    const filename = `Schuelerliste_Codes_${selectedClassFilter === 'all' ? 'Alle_Klassen' : selectedClassFilter}_${new Date().toISOString().slice(0, 10)}.csv`;
    downloadBlob(csv, filename, 'text/csv;charset=utf-8;');
  };

  const handleExportCodesWord = () => {
    if (filteredStudents.length === 0) return;
    const rowsHtml = filteredStudents
      .map(
        (s, idx) => `
        <tr>
          <td style="border:1px solid #999; padding:6px 10px; text-align:center;">${idx + 1}</td>
          <td style="border:1px solid #999; padding:6px 10px; font-family:monospace; font-weight:bold; font-size:12pt; text-align:center;">${s.code}</td>
          <td style="border:1px solid #999; padding:6px 10px; text-align:center;">${s.className}</td>
          <td style="border:1px solid #999; border-bottom:1.5pt solid #333; min-width:200px;">&nbsp;</td>
        </tr>`
      )
      .join('');

    const html = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head>
        <meta charset='utf-8'>
        <title>Schülerliste - Codes</title>
        <style>
          body { font-family: Arial, sans-serif; font-size: 11pt; color: #222; }
          h1 { font-size: 16pt; color: #2e6b0e; }
          p { font-size: 10pt; color: #555; }
          table { border-collapse: collapse; width: 100%; margin-top: 15px; }
          th { border: 1px solid #999; background: #f0f7eb; font-weight: bold; padding: 8px 10px; }
        </style>
      </head>
      <body>
        <h1>Schülerliste – Zugangs-Codes</h1>
        <p><strong>Auswahl:</strong> ${currentClassLabel} | <strong>Anzahl:</strong> ${filteredStudents.length} | <strong>Datum:</strong> ${currentDateStr}</p>
        <table>
          <thead>
            <tr>
              <th style="width:40px; text-align:center;">Nr.</th>
              <th style="width:130px; text-align:center;">Schüler-Code</th>
              <th style="width:100px; text-align:center;">Klasse</th>
              <th style="text-align:left;">Name der Schülerin / des Schülers</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
      </body>
      </html>
    `;
    const filename = `Schuelerliste_Codes_${selectedClassFilter === 'all' ? 'Alle_Klassen' : selectedClassFilter}_${new Date().toISOString().slice(0, 10)}.doc`;
    downloadBlob(html, filename, 'application/msword;charset=utf-8');
  };

  // =========================================================================
  // 2. ERGEBNISLISTE EXPORT (PDF/Druck, Word, Excel)
  // =========================================================================

  const handlePrintProgress = () => {
    if (filteredStudents.length === 0 || h5pIds.length === 0) return;
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const ths = h5pIds.map((id) => `<th style="text-align:center; font-size:11px;">${h5pMap[id]}</th>`).join('');

    const trs = filteredStudents
      .map((s, idx) => {
        const scoreCells = h5pIds
          .map((id) => {
            const sc = progressMap[s.id]?.[id];
            const display = sc !== undefined ? `${sc} %` : '-';
            const bg = sc !== undefined ? (sc >= 80 ? '#e6f4d7' : sc >= 50 ? '#fff8e1' : '#fdecea') : 'transparent';
            const col = sc !== undefined ? (sc >= 80 ? '#4a7c2e' : sc >= 50 ? '#8a6000' : '#c62828') : '#999';
            return `<td style="text-align:center; font-size:11px; background:${bg}; color:${col}; font-weight:bold;">${display}</td>`;
          })
          .join('');

        return `
          <tr>
            <td style="text-align:center; width:35px; font-size:11px;">${idx + 1}</td>
            <td style="font-family:monospace; font-weight:bold; font-size:12px; text-align:center;">${s.code}</td>
            <td style="text-align:center; font-size:11px;">${s.className}</td>
            <td style="border-bottom:1px solid #777; min-width:120px;">&nbsp;</td>
            ${scoreCells}
          </tr>`;
      })
      .join('');

    printWindow.document.write(`
      <!DOCTYPE html>
      <html lang="de">
      <head>
        <meta charset="utf-8">
        <title>Ergebnisliste</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; color: #111; }
          h1 { font-size: 18px; color: #2e6b0e; margin-bottom: 4px; }
          .meta { font-size: 12px; color: #555; margin-bottom: 16px; border-bottom: 2px solid #2e6b0e; padding-bottom: 6px; }
          table { width: 100%; border-collapse: collapse; margin-top: 8px; }
          th, td { border: 1px solid #bbb; padding: 6px 8px; font-size: 11px; }
          th { background: #f0f7eb; font-weight: bold; }
          @media print {
            body { padding: 0; }
            @page { size: landscape; margin: 1cm; }
          }
        </style>
      </head>
      <body>
        <h1>Ergebnis- & Fortschrittsübersicht</h1>
        <div class="meta">
          <strong>Auswahl:</strong> ${currentClassLabel} &nbsp;|&nbsp;
          <strong>Schüleranzahl:</strong> ${filteredStudents.length} &nbsp;|&nbsp;
          <strong>Datum:</strong> ${currentDateStr}
        </div>
        <table>
          <thead>
            <tr>
              <th style="width:35px; text-align:center;">Nr.</th>
              <th style="width:80px; text-align:center;">Code</th>
              <th style="width:70px; text-align:center;">Klasse</th>
              <th style="text-align:left; min-width:120px;">Name</th>
              ${ths}
            </tr>
          </thead>
          <tbody>
            ${trs}
          </tbody>
        </table>
      </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
    }, 250);
  };

  const handleExportProgressExcel = () => {
    if (filteredStudents.length === 0 || h5pIds.length === 0) return;
    const headerCols = ['Nr.', 'Schüler-Code', 'Klasse', 'Name (handschriftlich)', ...h5pIds.map((id) => `"${h5pMap[id].replace(/"/g, '""')}"`)];
    let csv = '\uFEFF' + headerCols.join(';') + '\r\n';

    filteredStudents.forEach((s, idx) => {
      const scores = h5pIds.map((id) => {
        const sc = progressMap[s.id]?.[id];
        return sc !== undefined ? `${sc}%` : '';
      });
      csv += [idx + 1, s.code, s.className, '', ...scores].join(';') + '\r\n';
    });

    const filename = `Ergebnisliste_${selectedClassFilter === 'all' ? 'Alle_Klassen' : selectedClassFilter}_${new Date().toISOString().slice(0, 10)}.csv`;
    downloadBlob(csv, filename, 'text/csv;charset=utf-8;');
  };

  const handleExportProgressWord = () => {
    if (filteredStudents.length === 0 || h5pIds.length === 0) return;
    const ths = h5pIds.map((id) => `<th style="border:1px solid #999; background:#f0f7eb; padding:6px; font-size:9pt;">${h5pMap[id]}</th>`).join('');

    const trs = filteredStudents
      .map((s, idx) => {
        const scoreCells = h5pIds
          .map((id) => {
            const sc = progressMap[s.id]?.[id];
            const display = sc !== undefined ? `${sc} %` : '-';
            return `<td style="border:1px solid #999; text-align:center; padding:5px; font-size:9pt;">${display}</td>`;
          })
          .join('');

        return `
          <tr>
            <td style="border:1px solid #999; text-align:center; padding:5px; font-size:9pt;">${idx + 1}</td>
            <td style="border:1px solid #999; font-family:monospace; font-weight:bold; text-align:center; padding:5px; font-size:10pt;">${s.code}</td>
            <td style="border:1px solid #999; text-align:center; padding:5px; font-size:9pt;">${s.className}</td>
            <td style="border:1px solid #999; border-bottom:1.5pt solid #333; min-width:100px;">&nbsp;</td>
            ${scoreCells}
          </tr>`;
      })
      .join('');

    const html = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head>
        <meta charset='utf-8'>
        <title>Ergebnisliste</title>
        <style>
          body { font-family: Arial, sans-serif; font-size: 10pt; color: #222; }
          h1 { font-size: 14pt; color: #2e6b0e; }
          p { font-size: 9pt; color: #555; }
          table { border-collapse: collapse; width: 100%; margin-top: 10px; }
        </style>
      </head>
      <body>
        <h1>Ergebnis- & Fortschrittsübersicht</h1>
        <p><strong>Auswahl:</strong> ${currentClassLabel} | <strong>Datum:</strong> ${currentDateStr}</p>
        <table>
          <thead>
            <tr>
              <th style="border:1px solid #999; background:#f0f7eb; width:30px; font-size:9pt;">Nr.</th>
              <th style="border:1px solid #999; background:#f0f7eb; width:80px; font-size:9pt;">Code</th>
              <th style="border:1px solid #999; background:#f0f7eb; width:60px; font-size:9pt;">Klasse</th>
              <th style="border:1px solid #999; background:#f0f7eb; text-align:left; font-size:9pt;">Name</th>
              ${ths}
            </tr>
          </thead>
          <tbody>
            ${trs}
          </tbody>
        </table>
      </body>
      </html>
    `;
    const filename = `Ergebnisliste_${selectedClassFilter === 'all' ? 'Alle_Klassen' : selectedClassFilter}_${new Date().toISOString().slice(0, 10)}.doc`;
    downloadBlob(html, filename, 'application/msword;charset=utf-8');
  };

  return (
    <div className="site-wrapper">
      <Header />
      <main className="content-main" style={{ padding: '32px 24px', maxWidth: 1100, margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 20 }}>
          <div>
            <h1 style={{ marginBottom: 4 }}>Lehrperson-Dashboard</h1>
            {teacherEmail && (
              <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: 14 }}>
                Angemeldet als: <strong>{teacherEmail}</strong>
              </p>
            )}
          </div>
          <button
            type="button"
            className="admin-action-btn"
            onClick={() => {
              setShowPasswordModal(true);
              setPasswordError('');
              setCurrentPassword('');
              setNewPassword('');
              setConfirmNewPassword('');
            }}
            style={{ fontSize: 13, padding: '7px 14px' }}
          >
            Passwort ändern
          </button>
        </div>

        {successMsg && (
          <div
            style={{
              background: '#e6f4d7',
              color: '#2e6b0e',
              border: '1px solid #c3e6a4',
              borderRadius: 6,
              padding: '10px 16px',
              marginBottom: 20,
              fontSize: 14,
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <span>✓ {successMsg}</span>
            <button
              type="button"
              onClick={() => setSuccessMsg('')}
              style={{ background: 'none', border: 'none', color: '#2e6b0e', cursor: 'pointer', fontSize: 16 }}
            >
              &times;
            </button>
          </div>
        )}

        {/* Add students by count and class */}
        <section className="dashboard-section">
          <h2>Schüleraccounts anlegen</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 14, marginBottom: 16 }}>
            Wähle die Anzahl (1 bis 30) und trage die Klasse ein (z. B. 4A, 3B oder Mathe-Gruppe 1). Jeder Account erhält automatisch einen zufälligen 5-stelligen Code.
          </p>
          <form onSubmit={handleAddStudents} className="dashboard-add-form" style={{ alignItems: 'flex-end', gap: 12 }}>
            <div>
              <label htmlFor="student-class" style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--text-color)', marginBottom: 4 }}>
                Klasse / Gruppe
              </label>
              <input
                id="student-class"
                type="text"
                className="login-input"
                placeholder="z. B. 4A oder 3B"
                value={classNameInput}
                onChange={(e) => setClassNameInput(e.target.value)}
                style={{ width: 180 }}
                list="existing-classes-list"
              />
              <datalist id="existing-classes-list">
                {existingClasses.map((cls) => (
                  <option key={cls} value={cls} />
                ))}
              </datalist>
            </div>

            <div>
              <label htmlFor="student-count" style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--text-color)', marginBottom: 4 }}>
                Anzahl (max. 30)
              </label>
              <input
                id="student-count"
                type="number"
                min={1}
                max={30}
                className="login-input"
                value={count}
                onChange={(e) => setCount(Math.max(1, Math.min(30, parseInt(e.target.value, 10) || 1)))}
                style={{ width: 90, textAlign: 'center', fontWeight: 700, fontSize: 15 }}
              />
            </div>

            <div style={{ display: 'flex', gap: 6 }}>
              {[5, 10, 15, 20, 25, 30].map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setCount(n)}
                  className="admin-action-btn"
                  style={{
                    padding: '8px 10px',
                    fontSize: 13,
                    background: count === n ? 'var(--green-primary)' : 'var(--green-light)',
                    color: count === n ? '#ffffff' : 'var(--green-dark)',
                    borderColor: count === n ? 'var(--green-primary)' : 'var(--green-border)',
                  }}
                >
                  {n}
                </button>
              ))}
            </div>

            <button type="submit" className="dashboard-add-btn" disabled={addLoading} style={{ padding: '9px 18px' }}>
              {addLoading ? 'Erstelle...' : `+ ${count} Accounts anlegen`}
            </button>
          </form>
          {error && <p className="login-error" style={{ marginTop: 12 }}>{error}</p>}
        </section>

        {/* Class Filter Tabs & Class Delete Action */}
        {existingClasses.length > 0 && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginBottom: 16, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-color)', marginRight: 4 }}>
                Klasse anzeigen:
              </span>
              <button
                type="button"
                onClick={() => setSelectedClassFilter('all')}
                className="admin-action-btn"
                style={{
                  fontSize: 13,
                  background: selectedClassFilter === 'all' ? 'var(--green-primary)' : 'var(--green-light)',
                  color: selectedClassFilter === 'all' ? '#ffffff' : 'var(--green-dark)',
                  borderColor: selectedClassFilter === 'all' ? 'var(--green-primary)' : 'var(--green-border)',
                }}
              >
                Alle Klassen ({students.length})
              </button>
              {existingClasses.map((cls) => {
                const classCount = students.filter((s) => (s.className || 'Ohne Klasse') === cls).length;
                return (
                  <button
                    key={cls}
                    type="button"
                    onClick={() => setSelectedClassFilter(cls)}
                    className="admin-action-btn"
                    style={{
                      fontSize: 13,
                      background: selectedClassFilter === cls ? 'var(--green-primary)' : 'var(--green-light)',
                      color: selectedClassFilter === cls ? '#ffffff' : 'var(--green-dark)',
                      borderColor: selectedClassFilter === cls ? 'var(--green-primary)' : 'var(--green-border)',
                    }}
                  >
                    {cls} ({classCount})
                  </button>
                );
              })}
            </div>

            {selectedClassFilter !== 'all' && (
              <button
                type="button"
                onClick={() => promptDeleteClass(selectedClassFilter)}
                className="dashboard-delete-btn"
                style={{
                  fontSize: 13,
                  padding: '6px 12px',
                  border: '1px solid #f5c2c7',
                  background: '#fff5f5',
                  borderRadius: 6,
                  fontWeight: 600,
                }}
                title={`Gesamte Klasse „${selectedClassFilter}“ und alle Schüleraccounts darin löschen`}
              >
                Klasse „{selectedClassFilter}“ komplett löschen
              </button>
            )}
          </div>
        )}

        {/* Student list */}
        <section className="dashboard-section">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
            <h2 style={{ margin: 0 }}>
              Schüler-Codes {selectedClassFilter !== 'all' ? `(Klasse ${selectedClassFilter})` : `(Gesamt ${filteredStudents.length})`}
            </h2>
            {filteredStudents.length > 0 && (
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={handlePrintCodes}
                  className="admin-action-btn"
                  style={{ fontSize: 13 }}
                  title="Druckbare Liste zum handschriftlichen Eintragen der Namen"
                >
                  PDF / Drucken
                </button>
                <button
                  type="button"
                  onClick={handleExportCodesWord}
                  className="admin-action-btn"
                  style={{ fontSize: 13 }}
                  title="Word-Dokument herunterladen"
                >
                  Word (.doc)
                </button>
                <button
                  type="button"
                  onClick={handleExportCodesExcel}
                  className="admin-action-btn"
                  style={{ fontSize: 13 }}
                  title="Excel-Tabelle herunterladen"
                >
                  Excel (.csv)
                </button>
                <button
                  type="button"
                  onClick={handleCopyCodes}
                  className="admin-action-btn"
                  style={{ fontSize: 13 }}
                >
                  {copied ? 'Codes kopiert' : 'Codes kopieren'}
                </button>
              </div>
            )}
          </div>

          {loading ? (
            <p style={{ color: 'var(--text-muted)' }}>Lädt...</p>
          ) : filteredStudents.length === 0 ? (
            <p style={{ color: 'var(--text-muted)' }}>Keine Schüleraccounts für diesen Filter vorhanden.</p>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))',
                gap: 10,
              }}
            >
              {filteredStudents.map((s, idx) => (
                <div
                  key={s.id}
                  className="dashboard-student-card"
                  style={{
                    padding: '8px 12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 8,
                    minWidth: 0,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      minWidth: 0,
                      flex: 1,
                      overflow: 'hidden',
                    }}
                  >
                    <span style={{ fontSize: 12, color: 'var(--text-muted)', minWidth: 22, flexShrink: 0 }}>#{idx + 1}</span>
                    <span className="dashboard-student-code" style={{ fontSize: 14, flexShrink: 0 }}>{s.code}</span>
                    {selectedClassFilter === 'all' && (
                      <span
                        style={{
                          fontSize: 11,
                          color: 'var(--text-muted)',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          flexShrink: 1,
                        }}
                        title={s.className}
                      >
                        ({s.className})
                      </span>
                    )}
                  </div>
                  <button
                    className="dashboard-delete-btn"
                    onClick={() => promptDeleteStudent(s)}
                    title="Account löschen"
                    style={{ fontSize: 12, padding: '3px 7px', flexShrink: 0, whiteSpace: 'nowrap' }}
                  >
                    Löschen
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Progress table */}
        {h5pIds.length > 0 && filteredStudents.length > 0 && (
          <section className="dashboard-section">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 12 }}>
              <h2 style={{ margin: 0 }}>
                Fortschrittsübersicht {selectedClassFilter !== 'all' ? `(Klasse ${selectedClassFilter})` : ''}
              </h2>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={handlePrintProgress}
                  className="admin-action-btn"
                  style={{ fontSize: 13 }}
                  title="Ergebnisliste drucken oder als PDF speichern"
                >
                  PDF / Drucken
                </button>
                <button
                  type="button"
                  onClick={handleExportProgressWord}
                  className="admin-action-btn"
                  style={{ fontSize: 13 }}
                  title="Ergebnisliste als Word-Dokument"
                >
                  Word (.doc)
                </button>
                <button
                  type="button"
                  onClick={handleExportProgressExcel}
                  className="admin-action-btn"
                  style={{ fontSize: 13 }}
                  title="Ergebnisliste als Excel-Tabelle"
                >
                  Excel (.csv)
                </button>
              </div>
            </div>
            <div style={{ overflowX: 'auto', marginTop: 12 }}>
              <table className="dashboard-progress-table">
                <thead>
                  <tr>
                    <th style={{ textAlign: 'left' }}>Schüler-Code</th>
                    {selectedClassFilter === 'all' && <th>Klasse</th>}
                    {h5pIds.map((id) => {
                      const match = id.match(/(\d+)(?:\/?$)/);
                      const idTarget = match ? match[1] : id.replace(/^\/h5p-content\//, '').replace(/^\//, '');
                      return (
                        <th key={id} title={id}>
                          <Link
                            href={`/${idTarget}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'inherit', textDecoration: 'underline' }}
                          >
                            {h5pMap[id]}
                          </Link>
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.map((s, idx) => (
                    <tr key={s.id}>
                      <td className="dashboard-table-student">
                        <span style={{ fontSize: 11, color: 'var(--text-muted)', marginRight: 6 }}>#{idx + 1}</span>
                        <span className="dashboard-student-code" style={{ fontSize: 13 }}>{s.code}</span>
                      </td>
                      {selectedClassFilter === 'all' && (
                        <td style={{ textAlign: 'center', fontSize: 12, color: 'var(--text-muted)' }}>
                          {s.className}
                        </td>
                      )}
                      {h5pIds.map((hId) => {
                        const score = progressMap[s.id]?.[hId];
                        return (
                          <td key={hId} className="dashboard-score-cell">
                            {score !== undefined ? (
                              <span
                                className="dashboard-score-badge"
                                style={{
                                  background: score >= 80 ? '#e6f4d7' : score >= 50 ? '#fff8e1' : '#fdecea',
                                  color: score >= 80 ? '#4a7c2e' : score >= 50 ? '#8a6000' : '#c62828',
                                }}
                              >
                                {score} %
                              </span>
                            ) : (
                              <span className="dashboard-score-empty">-</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {h5pIds.length === 0 && filteredStudents.length > 0 && !loading && (
          <section className="dashboard-section">
            <p style={{ color: 'var(--text-muted)' }}>
              Noch kein H5P-Fortschritt für diese Schüleraccounts vorhanden.
            </p>
          </section>
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

        {/* Teacher Password Change Modal Overlay */}
        {showPasswordModal && (
          <div
            className="login-modal-overlay"
            onClick={() => {
              if (!passwordLoading) setShowPasswordModal(false);
            }}
            style={{ zIndex: 9999 }}
          >
            <div
              className="login-modal"
              style={{ maxWidth: 440 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
            >
              <button
                className="login-modal-close"
                onClick={() => {
                  if (!passwordLoading) setShowPasswordModal(false);
                }}
                aria-label="Schließen"
                disabled={passwordLoading}
              >
                &times;
              </button>

              <div className="login-modal-body" style={{ padding: '28px 26px 24px' }}>
                <h2 className="login-modal-title" style={{ fontSize: 20, marginBottom: 6 }}>
                  Passwort ändern
                </h2>
                <p className="login-modal-subtitle" style={{ fontSize: 13, marginBottom: 20 }}>
                  Gib dein bisheriges Passwort und ein neues Passwort ein.
                </p>

                {passwordError && (
                  <p className="login-error" style={{ marginBottom: 14 }}>{passwordError}</p>
                )}

                <form onSubmit={handleChangePassword}>
                  <div style={{ marginBottom: 14 }}>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--text-color)', marginBottom: 4 }}>
                      Aktuelles Passwort
                    </label>
                    <input
                      type="password"
                      className="login-input"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                      autoFocus
                    />
                  </div>

                  <div style={{ marginBottom: 14 }}>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--text-color)', marginBottom: 4 }}>
                      Neues Passwort (mind. 6 Zeichen)
                    </label>
                    <input
                      type="password"
                      className="login-input"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                    />
                  </div>

                  <div style={{ marginBottom: 20 }}>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--text-color)', marginBottom: 4 }}>
                      Neues Passwort wiederholen
                    </label>
                    <input
                      type="password"
                      className="login-input"
                      value={confirmNewPassword}
                      onChange={(e) => setConfirmNewPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                    />
                  </div>

                  <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
                    <button
                      type="button"
                      className="admin-action-btn"
                      onClick={() => setShowPasswordModal(false)}
                      disabled={passwordLoading}
                      style={{ padding: '8px 16px', fontSize: 14 }}
                    >
                      Abbrechen
                    </button>
                    <button
                      type="submit"
                      className="dashboard-add-btn"
                      disabled={passwordLoading}
                      style={{ padding: '8px 18px', fontSize: 14 }}
                    >
                      {passwordLoading ? 'Wird gespeichert...' : 'Passwort speichern'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
