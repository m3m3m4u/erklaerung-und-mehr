import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Impressum - Erklärung und mehr',
  description: 'Impressum und rechtliche Angaben gemäß § 5 ECG und Offenlegungspflicht.',
};

export default function ImpressumPage() {
  return (
    <div className="site-wrapper">
      <Header activePath="/impressum" />

      {/* Main Legal Content */}
      <main className="content-container">
        <div className="legal-paper">
          <h1 className="legal-title">Impressum</h1>
          <p className="legal-lead">Angaben gemäß § 5 ECG, § 14 UGB und § 25 Mediengesetz:</p>

          <section className="legal-block">
            <h2>Medieninhaber und Betreiber der Website</h2>
            <p>
              <strong>Matthias Gmeiner e.U.</strong><br />
              Herrengutgasse 16b<br />
              6923 Lauterach<br />
              Österreich
            </p>
            <p>
              <strong>E-Mail:</strong> <a href="mailto:m3m3m4u@gmail.com">m3m3m4u@gmail.com</a><br />
              <strong>Telefon:</strong> +43 664 4714108
            </p>
          </section>

          <section className="legal-block">
            <h2>Gewerberechtliche Angaben</h2>
            <p>
              <strong>Zuständige Behörde:</strong> Bezirkshauptmannschaft Bregenz<br />
              <strong>GISA-Zahl (Stammgewerbe):</strong> 802-33702230<br />
              <strong>Unternehmensgegenstand:</strong> Erstellung, Bereitstellung und Vertrieb von digitalen Lehr- und Lernmaterialien, Erklärvideos und interaktiven Übungen.
            </p>
          </section>

          <section className="legal-block">
            <h2>Verantwortlich für den Inhalt</h2>
            <p>
              Matthias Gmeiner<br />
              Herrengutgasse 16b<br />
              6923 Lauterach, Österreich
            </p>
          </section>

          <section className="legal-block">
            <h2>Online-Streitbeilegung (OS)</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter folgendem Link finden:{' '}
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
                https://ec.europa.eu/consumers/odr
              </a>.
            </p>
            <p>
              Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section className="legal-block">
            <h2>Haftung für Inhalte dieser Website</h2>
            <p>
              Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Dienstanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
            </p>
          </section>

          <section className="legal-block">
            <h2>Haftung für Links auf Websites Dritter</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter (z. B. Eduki, Partnerportale, YouTube), auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </section>

          <section className="legal-block">
            <h2>Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte, Texte, Videos und Werke auf diesen Seiten unterliegen dem Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer activePath="/impressum" />
    </div>
  );
}
