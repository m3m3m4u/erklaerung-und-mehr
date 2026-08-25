'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(true);

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem('eum_cookie_consent');
    if (!consent) {
      setIsOpen(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(
      'eum_cookie_consent',
      JSON.stringify({ essential: true, media: true, date: new Date().toISOString() })
    );
    setIsOpen(false);
  };

  const handleAcceptEssential = () => {
    localStorage.setItem(
      'eum_cookie_consent',
      JSON.stringify({ essential: true, media: false, date: new Date().toISOString() })
    );
    setIsOpen(false);
  };

  const handleSaveCustom = () => {
    localStorage.setItem(
      'eum_cookie_consent',
      JSON.stringify({
        essential: true,
        media: marketingConsent,
        date: new Date().toISOString(),
      })
    );
    setIsOpen(false);
    setShowSettings(false);
  };

  // Re-open listener for footer link
  useEffect(() => {
    const handleReopen = () => {
      setIsOpen(true);
      setShowSettings(true);
    };
    window.addEventListener('reopen_cookie_banner', handleReopen);
    return () => window.removeEventListener('reopen_cookie_banner', handleReopen);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="cookie-overlay" role="dialog" aria-modal="true" aria-labelledby="cookie-heading">
      <div className="cookie-container">
        <h3 id="cookie-heading" className="cookie-title">
          Cookie- und Datenschutzeinstellungen
        </h3>
        <p className="cookie-desc">
          Wir nutzen Cookies und Web-Technologien, um grundlegende Funktionen unserer Lernplattform
          bereitzustellen (z. B. H5P-Lerninhalte, Spielstände und Formulare) sowie externe Medien (wie YouTube-Lernvideos)
          einzubinden. Sie können selbst entscheiden, welche Kategorien Sie zulassen möchten.
        </p>

        {showSettings && (
          <div className="cookie-options">
            <div className="cookie-option-item">
              <label className="cookie-checkbox-label">
                <input type="checkbox" checked disabled />
                <span className="cookie-option-title">Technisch notwendige Cookies (immer aktiv)</span>
              </label>
              <p className="cookie-option-info">
                Erforderlich für den Betrieb der Seite, Navigation, Sicherheitsfunktionen und die Ausführung interaktiver H5P-Übungen.
              </p>
            </div>

            <div className="cookie-option-item">
              <label className="cookie-checkbox-label">
                <input
                  type="checkbox"
                  checked={marketingConsent}
                  onChange={(e) => setMarketingConsent(e.target.checked)}
                />
                <span className="cookie-option-title">Externe Medien & Lernvideos (YouTube)</span>
              </label>
              <p className="cookie-option-info">
                Ermöglicht das direkte Abspielen von eingebetteten YouTube-Erklärvideos innerhalb der H5P-Module.
              </p>
            </div>
          </div>
        )}

        <div className="cookie-footer">
          <div className="cookie-links">
            <Link href="/datenschutz">Datenschutzerklärung</Link>
            <span>•</span>
            <Link href="/impressum">Impressum</Link>
          </div>

          <div className="cookie-buttons">
            {!showSettings ? (
              <>
                <button onClick={() => setShowSettings(true)} className="cookie-btn-secondary">
                  Einstellungen
                </button>
                <button onClick={handleAcceptEssential} className="cookie-btn-secondary">
                  Nur notwendige
                </button>
                <button onClick={handleAcceptAll} className="cookie-btn-primary">
                  Alle akzeptieren
                </button>
              </>
            ) : (
              <>
                <button onClick={() => setShowSettings(false)} className="cookie-btn-secondary">
                  Zurück
                </button>
                <button onClick={handleSaveCustom} className="cookie-btn-primary">
                  Auswahl speichern
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
