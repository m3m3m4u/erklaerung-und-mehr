'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const STORAGE_KEY = 'eum_teacher_tip_dismissed_until';
const ACTIVE_TIP_KEY = 'eum_teacher_tip_active_index';
const FOURTEEN_DAYS_MS = 14 * 24 * 60 * 60 * 1000;

export default function TeacherTipBanner() {
  const [mounted, setMounted] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [activeTab, setActiveTab] = useState<'kischulgenie' | 'lernarena'>('kischulgenie');
  const [codeCopied, setCodeCopied] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const dismissedUntil = localStorage.getItem(STORAGE_KEY);
      if (dismissedUntil && Number(dismissedUntil) > Date.now()) {
        setIsDismissed(true);
      }

      const savedTab = localStorage.getItem(ACTIVE_TIP_KEY);
      if (savedTab === 'lernarena' || savedTab === 'kischulgenie') {
        setActiveTab(savedTab);
      }
    } catch {
      // LocalStorage not available or blocked
    }
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now() + FOURTEEN_DAYS_MS));
    } catch {
      // ignore
    }
  };

  const handleSelectTab = (tab: 'kischulgenie' | 'lernarena') => {
    setActiveTab(tab);
    try {
      localStorage.setItem(ACTIVE_TIP_KEY, tab);
    } catch {
      // ignore
    }
  };

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText('erklaerung10');
      setCodeCopied(true);
      setTimeout(() => setCodeCopied(false), 3000);
    } catch {
      // Fallback
      setCodeCopied(true);
      setTimeout(() => setCodeCopied(false), 3000);
    }
  };

  // SSR placeholder to prevent hydration mismatch
  if (!mounted || isDismissed) {
    return null;
  }

  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #f7faf3 0%, #edf6e5 100%)',
        border: '1.5px solid #c2dfae',
        borderRadius: 10,
        padding: '16px 20px',
        marginBottom: 24,
        boxShadow: '0 2px 8px rgba(46, 107, 14, 0.06)',
        position: 'relative',
      }}
    >
      {/* Header bar of the tip widget */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 10,
          borderBottom: '1px solid #d8e8cc',
          paddingBottom: 10,
          marginBottom: 14,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span
            style={{
              background: '#2e6b0e',
              color: '#ffffff',
              fontSize: 11,
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.6px',
              padding: '3px 8px',
              borderRadius: 4,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 4,
            }}
          >
            <span>💡</span>
            <span>Tipp für deinen Unterricht</span>
          </span>

          {/* Tab buttons */}
          <div style={{ display: 'inline-flex', gap: 4, background: '#e3eed6', padding: 2, borderRadius: 6 }}>
            <button
              type="button"
              onClick={() => handleSelectTab('kischulgenie')}
              style={{
                border: 'none',
                background: activeTab === 'kischulgenie' ? '#ffffff' : 'transparent',
                color: activeTab === 'kischulgenie' ? '#1f4f09' : '#556644',
                fontWeight: activeTab === 'kischulgenie' ? 700 : 500,
                fontSize: 12,
                padding: '4px 10px',
                borderRadius: 4,
                cursor: 'pointer',
                boxShadow: activeTab === 'kischulgenie' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                transition: 'all 0.15s ease',
              }}
            >
              KI-Schulgenie (-10%)
            </button>
            <button
              type="button"
              onClick={() => handleSelectTab('lernarena')}
              style={{
                border: 'none',
                background: activeTab === 'lernarena' ? '#ffffff' : 'transparent',
                color: activeTab === 'lernarena' ? '#1f4f09' : '#556644',
                fontWeight: activeTab === 'lernarena' ? 700 : 500,
                fontSize: 12,
                padding: '4px 10px',
                borderRadius: 4,
                cursor: 'pointer',
                boxShadow: activeTab === 'lernarena' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                transition: 'all 0.15s ease',
              }}
            >
              Lernarena.org
            </button>
          </div>
        </div>

        {/* Dismiss button */}
        <button
          type="button"
          onClick={handleDismiss}
          title="Für 14 Tage ausblenden"
          style={{
            background: 'transparent',
            border: 'none',
            color: '#667755',
            fontSize: 12,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 4,
            padding: '4px 8px',
            borderRadius: 4,
          }}
        >
          <span>✕</span>
          <span style={{ fontSize: 11 }}>Für 14 Tage ausblenden</span>
        </button>
      </div>

      {/* TAB 1: KI-Schulgenie (Affiliate & Voucher optimized) */}
      {activeTab === 'kischulgenie' && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, flex: '1 1 360px' }}>
            <a
              href="https://kischulgenie.com/erklaerungundmehr?via=eum"
              target="_blank"
              rel="noopener noreferrer"
              style={{ flexShrink: 0, display: 'inline-block' }}
              title="KI-Schulgenie aufrufen (10% Rabatt mit Code erklaerung10)"
            >
              <Image
                src="/images/logo-de.webp"
                alt="KI-Schulgenie Logo"
                width={95}
                height={55}
                style={{ objectFit: 'contain', borderRadius: 4, background: '#ffffff', padding: 4, border: '1px solid #d4e5c5' }}
              />
            </a>
            <div>
              <h3 style={{ margin: '0 0 4px 0', fontSize: 15, color: '#1f4f09', fontWeight: 700 }}>
                Arbeitsblätter &amp; Unterrichtsmaterial in 2 Minuten erstellen
              </h3>
              <p style={{ margin: 0, fontSize: 13, color: '#445533', lineHeight: 1.45 }}>
                Mit über 100 KI-Tools spart <strong>KI-Schulgenie</strong> Stunden bei Differenzierung, Lückentexten, Tests und Verlaufsplänen (100% DSGVO-konform).
              </p>
              <div style={{ marginTop: 4, fontSize: 11, color: '#778866' }}>
                (Kooperationspartner / Affiliate-Link) &bull;{' '}
                <Link href="/kischulgenie" style={{ color: '#2e6b0e', textDecoration: 'underline' }}>
                  Details &amp; Funktionen ansehen
                </Link>
              </div>
            </div>
          </div>

          {/* Affiliate Voucher Box & CTA */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              flexWrap: 'wrap',
              background: '#ffffff',
              padding: '10px 14px',
              borderRadius: 8,
              border: '1.5px dashed #2e6b0e',
            }}
          >
            <div>
              <div style={{ fontSize: 11, color: '#666', textTransform: 'uppercase', letterSpacing: '0.4px', fontWeight: 600 }}>
                10 % Rabattcode:
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 2 }}>
                <span style={{ fontFamily: 'monospace', fontWeight: 800, fontSize: 15, color: '#2e6b0e', letterSpacing: '0.8px' }}>
                  erklaerung10
                </span>
                <button
                  type="button"
                  onClick={handleCopyCode}
                  title="Gutscheincode kopieren"
                  style={{
                    background: codeCopied ? '#2e6b0e' : '#eaf4e2',
                    color: codeCopied ? '#ffffff' : '#2e6b0e',
                    border: '1px solid #c2dfae',
                    borderRadius: 4,
                    padding: '3px 8px',
                    fontSize: 11,
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {codeCopied ? '✓ Kopiert!' : 'Kopieren'}
                </button>
              </div>
            </div>

            <a
              href="https://kischulgenie.com/erklaerungundmehr?via=eum"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                background: '#2e6b0e',
                color: '#ffffff',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: 13,
                padding: '9px 15px',
                borderRadius: 6,
                boxShadow: '0 2px 6px rgba(46, 107, 14, 0.25)',
                whiteSpace: 'nowrap',
              }}
            >
              <span>14 Tage testen ↗</span>
            </a>
          </div>
        </div>
      )}

      {/* TAB 2: Lernarena.org */}
      {activeTab === 'lernarena' && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, flex: '1 1 360px' }}>
            <a
              href="https://lernarena.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{ flexShrink: 0, display: 'inline-block' }}
              title="Lernarena.org aufrufen"
            >
              <Image
                src="/images/lernarena.jpg"
                alt="Lernarena Logo"
                width={70}
                height={70}
                style={{ objectFit: 'contain', borderRadius: 6, border: '1px solid #d4e5c5' }}
                unoptimized
              />
            </a>
            <div>
              <h3 style={{ margin: '0 0 4px 0', fontSize: 15, color: '#1f4f09', fontWeight: 700 }}>
                Kostenlose Onlinekurse &amp; Unterrichtstools auf Lernarena.org
              </h3>
              <p style={{ margin: 0, fontSize: 13, color: '#445533', lineHeight: 1.45 }}>
                Entdecke interaktive Online-Lernpfade, Quizze und vielfältige didaktische Werkzeuge zur idealen Ergänzung von Erklärung und mehr.
              </p>
              <div style={{ marginTop: 4, fontSize: 11, color: '#778866' }}>
                Kostenlose Lernplattform für Lehrkräfte und Schüler:innen
              </div>
            </div>
          </div>

          <div>
            <a
              href="https://lernarena.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                background: '#2e6b0e',
                color: '#ffffff',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: 13,
                padding: '9px 16px',
                borderRadius: 6,
                boxShadow: '0 2px 6px rgba(46, 107, 14, 0.25)',
                whiteSpace: 'nowrap',
              }}
            >
              <span>Zu Lernarena.org ↗</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
